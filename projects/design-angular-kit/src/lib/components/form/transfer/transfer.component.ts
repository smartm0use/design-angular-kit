import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ItTransferListComponent } from './transfer-list/transfer-list.component';
import { NgClass } from '@angular/common';

//Qs
//Aria hidden?
//state management with service?
//interface?

export interface TransferItem<ValueType> {
  text: string;
  value: ValueType;
}

type TransferItemSelection<ValueType> = Array<TransferItem<ValueType>>;

/**
 * Transfer
 * @description Component that allows the creation of checkbox lists.
 */
@Component({
  selector: 'it-transfer',
  standalone: true,
  templateUrl: './transfer.component.html',
  imports: [ItTransferListComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItTransferComponent<T = any> extends ItAbstractFormComponent<T> implements OnInit {
  @Input()
  source = [];

  @Input()
  target = [];

  sourceItems: TransferItem<T>[];

  targetItems: TransferItem<T>[];

  transferEnabled = false;

  backtransferEnabled = false;

  resetEnabled = false;

  private sourceSelectedItems: Set<TransferItem<T>>;

  private targetSelectedItems: Set<TransferItem<T>>;

  override ngOnInit() {
    super.ngOnInit();

    this.sourceItems = [...this.source];
    this.targetItems = [...this.target];
  }

  sourceSelectionChangeHandler(selectedItems: TransferItem<T>[]) {
    console.log('source selected items', selectedItems);
    this.transferEnabled = Boolean(selectedItems.length);
    this.sourceSelectedItems = new Set([...selectedItems]);
  }
  targetSelectionChangeHandler(selectedItems: TransferItem<T>[]) {
    console.log('target selected items', selectedItems);
    this.backtransferEnabled = Boolean(selectedItems.length);
    this.targetSelectedItems = new Set([...selectedItems]);
  }

  transferClickHandler() {
    this.transfer();
  }

  transferKeyHandler() {
    this.transfer();
  }

  backtransferClickHandler() {
    this.backtransfer();
  }

  backtransferKeyHandler() {
    this.backtransfer();
  }

  resetClickHandler() {
    this.reset();
  }
  resetKeyHandler() {
    this.reset();
  }

  private transfer() {
    const selectedItemsSet = this.sourceSelectedItems; //new Set(this.sourceSelectedItems.map(i => i.value));
    this.sourceItems = this.sourceItems.filter(i => !selectedItemsSet.has(i));
    const targetItems = [
      ...(Array.from(this.sourceSelectedItems) as TransferItemSelection<T>),
      ...(this.targetItems as TransferItemSelection<T>),
    ] as TransferItemSelection<T>;

    this.targetItems = Array.from(new Set(targetItems));
    this.sourceSelectedItems.clear();
    this.resetEnabled = true;
    this.transferEnabled = false;
  }

  private backtransfer() {
    const selectedItemsSet = this.targetSelectedItems; //new Set(this.targetSelectedItems.map(i => i.value));
    this.targetItems = this.targetItems.filter(i => !selectedItemsSet.has(i));
    const sourceItems = [
      ...(Array.from(this.targetSelectedItems) as TransferItemSelection<T>),
      ...(this.sourceItems as TransferItemSelection<T>),
    ] as TransferItemSelection<T>;

    this.sourceItems = Array.from(new Set(sourceItems));
    this.targetSelectedItems.clear();
    this.resetEnabled = true;
    this.backtransferEnabled = false;
  }

  private reset() {
    this.sourceItems = [...this.source];
    this.targetItems = [...this.target];

    this.resetEnabled = false;
  }
}
