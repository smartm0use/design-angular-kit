import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { NavscrollItem, NavscrollItems } from './navscroll.model';

interface NavscrollState {
  items: Set<NavscrollItem>;
  active: Array<NavscrollItem>;
  selected: NavscrollItem;
  progressBar: number;
}

function search(items: Set<NavscrollItem>, item: NavscrollItem) {
  //ricerca
  const nodes = Array.from(items);
  const parent = nodes.find(i => i.childs.includes(item));
  const ancestors = parent?.childs?.length ? search(items, parent) : [];
  return [item, ...ancestors];
}

function flattenNavscrollItems(items: NavscrollItems): NavscrollItems {
  const result: NavscrollItems = [];

  function flatten(items: NavscrollItems): void {
    for (const item of items) {
      result.push(item);
      if (item.childs && item.childs.length > 0) {
        flatten(item.childs);
      }
    }
  }

  flatten(items);
  return result;
}

export class NavscrollStore {
  readonly #state = new BehaviorSubject<NavscrollState>({
    items: new Set<NavscrollItem>(),
    active: [],
    selected: undefined,
    progressBar: 0,
  });

  readonly #state$ = this.#state.asObservable();

  readonly selected = this.#state$.pipe(
    map(({ selected }) => selected),
    distinctUntilChanged()
  );

  readonly progressBar = this.#state$.pipe(
    map(({ progressBar }) => progressBar),
    distinctUntilChanged()
  );

  init(navscrollItems: Array<NavscrollItem>) {
    const flattenItems = flattenNavscrollItems(navscrollItems);
    //the first item is selected by default
    const selected = flattenItems && flattenItems.length && flattenItems[0];

    const state = {
      items: new Set(flattenItems),
      active: [selected],
      selected: selected,
      progressBar: 0,
    };

    this.#state.next(state);
  }

  setActive(item: NavscrollItem) {
    const { items } = this.#state.value;

    const active = search(items, item);
    const state = this.#state.value;
    this.#state.next({ ...state, items, selected: item, active });
  }

  isActive$(item: NavscrollItem) {
    return this.#state.asObservable().pipe(map(state => state.active.includes(item)));
  }

  updateProgressBar(container: HTMLElement) {
    if (!container) {
      return;
    }
    const offset = Math.abs(container.getBoundingClientRect().top);
    const height = container.getBoundingClientRect().height;
    const scrollAmount = (offset / height) * 100;
    const scrollValue = Math.min(100, Math.max(0, scrollAmount));
    const state = this.#state.value;
    this.#state.next({ ...state, progressBar: scrollValue });
  }
}