import{La as y,k,l as M,n as F,o as x}from"./chunk-R4LXWPNQ.js";import{Db as m,Gc as I,Hc as b,Mc as T,Na as g,Nb as r,Ob as f,Ra as o,U as v,Wb as w,ba as h,ca as C,gb as p,ib as s,ub as i,vb as a,wb as c}from"./chunk-W4AT4JIX.js";function S(e,n){if(e&1&&(i(0,"it-tab-item",4)(1,"pre"),c(2,"code",5),a()()),e&2){let t=m();s("active",!!t.html),o(2),s("highlight",t.html)}}function E(e,n){if(e&1&&(i(0,"it-tab-item",6)(1,"pre"),c(2,"code",7),a()()),e&2){let t=m();s("active",!t.html&&!!t.typescript),o(2),s("highlight",t.typescript)}}function P(e,n){if(e&1&&(i(0,"it-tab-item",8)(1,"pre"),c(2,"code",9),a()()),e&2){let t=m();o(2),s("highlight",t.scss)}}var H=(()=>{let n=class n{ngOnInit(){this.html&&(this.html=this.html.replace(/\/{\/{/g,"{{"),this.html=this.html.replace(/\/}\/}/g,"}}")),this.typescript&&(this.typescript=this.typescript.replace(/\/{\/{/g,"{{"),this.typescript=this.typescript.replace(/\/}\/}/g,"}}")),this.scss&&(this.scss=this.scss.replace(/\/{\/{/g,"{{"),this.scss=this.scss.replace(/\/}\/}/g,"}}"))}};n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=h({type:n,selectors:[["it-source-display"]],inputs:{html:"html",typescript:"typescript",scss:"scss"},decls:5,vars:3,consts:[[1,"source-display-container","bd-example"],["label","HTML",3,"active",4,"ngIf"],["label","TypeScript",3,"active",4,"ngIf"],["label","SCSS",4,"ngIf"],["label","HTML",3,"active"],["language","html",3,"highlight"],["label","TypeScript",3,"active"],["language","typescript",3,"highlight"],["label","SCSS"],["language","scss",3,"highlight"]],template:function(d,l){d&1&&(i(0,"div",0)(1,"it-tab-container"),p(2,S,3,2,"it-tab-item",1)(3,E,3,2,"it-tab-item",2)(4,P,3,1,"it-tab-item",3),a()()),d&2&&(o(2),s("ngIf",l.html),o(),s("ngIf",l.typescript),o(),s("ngIf",l.scss))},dependencies:[b,F,M,k],styles:[".bd-example[_ngcontent-%COMP%]{border-top:none;margin-top:auto;padding-top:20px}"]});let e=n;return e})();var N=()=>[];function j(e,n){if(e&1&&(i(0,"div")(1,"table",2)(2,"tbody")(3,"tr")(4,"td",3)(5,"code"),r(6),a()(),i(7,"td",4)(8,"p")(9,"em"),r(10,"Tipo: "),a(),i(11,"code"),r(12),a()()()(),i(13,"tr"),c(14,"td",5),a()()()()),e&2){let t=n.$implicit;o(6),f(t.name),o(6),f(t.type),o(2),s("innerHTML",t.description,g)}}function B(e,n){if(e&1&&(i(0,"div")(1,"h3"),r(2,"Input"),a(),p(3,j,15,3,"div",1),a()),e&2){let t=m();o(3),s("ngForOf",t.component.inputsClass)}}function O(e,n){if(e&1&&(i(0,"div")(1,"table",2)(2,"tbody")(3,"tr")(4,"td",3)(5,"code"),r(6),a()(),i(7,"td",4)(8,"p")(9,"em"),r(10,"Tipo: "),a(),i(11,"code"),r(12),a()()()(),i(13,"tr"),c(14,"td",5),a()()()()),e&2){let t=n.$implicit;o(6),f(t.name),o(6),f(t.type),o(2),s("innerHTML",t.description,g)}}function V(e,n){if(e&1&&(i(0,"div")(1,"h3"),r(2,"Output"),a(),p(3,O,15,3,"div",1),a()),e&2){let t=m();o(3),s("ngForOf",t.component.outputsClass)}}function R(e,n){if(e&1&&(i(0,"tr")(1,"td",3)(2,"code"),r(3),a()(),i(4,"td",4)(5,"p")(6,"em"),r(7,"Tipo: "),a(),i(8,"code"),r(9),a()()()()),e&2){let t=n.$implicit;o(3),f(t.name),o(6),f(t.type)}}function L(e,n){if(e&1&&(i(0,"div")(1,"table",2)(2,"thead")(3,"tr"),c(4,"th",6)(5,"th",7),a()(),i(6,"tbody")(7,"tr")(8,"td",8)(9,"p")(10,"em"),r(11,"Tipo di ritorno: "),a(),i(12,"code"),r(13),a()()()(),i(14,"tr")(15,"td",8),r(16,"Attributi:"),a()(),p(17,R,10,2,"tr",1),a()()()),e&2){let t=n.$implicit;o(4),s("innerHTML",t.name,g),o(),s("innerHTML",t.description,g),o(8),f(t.returnType),o(4),s("ngForOf",t.args||w(4,N))}}function _(e,n){if(e&1&&(i(0,"div")(1,"h3"),r(2,"Metodi"),a(),p(3,L,18,5,"div",1),a()),e&2){let t=m();o(3),s("ngForOf",t.service.methods)}}var $=(()=>{let n=class n{};n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=h({type:n,selectors:[["it-api-parameters"]],inputs:{component:"component",service:"service"},decls:3,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"table","table-bordered","table-sm"],[2,"width","20%"],[2,"width","80%"],["colspan","2",1,"col-md-2",3,"innerHTML"],[2,"width","20%",3,"innerHTML"],[2,"width","80%",3,"innerHTML"],["colspan","2",1,"col-md-2"]],template:function(d,l){d&1&&p(0,B,4,1,"div",0)(1,V,4,1,"div",0)(2,_,4,1,"div",0),d&2&&(s("ngIf",(l.component==null?null:l.component.inputsClass)&&l.component.inputsClass.length>0),o(),s("ngIf",(l.component==null?null:l.component.outputsClass)&&l.component.outputsClass.length>0),o(),s("ngIf",(l.service==null?null:l.service.methods)&&l.service.methods.length>0))},dependencies:[I,b]});let e=n;return e})();var te=(()=>{let n=class n{};n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=C({type:n}),n.\u0275inj=v({imports:[T,x,y.forChild(),y]});let e=n;return e})();var ie={pipes:[{name:"ItDateAgoPipe",id:"pipe-ItDateAgoPipe-7200ac4d8d2dd2a362bcaa1b0032c078d8ef92337f84526ef49d4943022185a491b12c01791a368022929771ab66c6310874f61a485035ae02430cdd0917a601",file:"projects/design-angular-kit/src/lib/pipes/date-ago.pipe.ts",type:"pipe",deprecated:!1,deprecationMessage:"",description:`<p>Indicates in a textual way how much time has passed since the indicated date</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,rawdescription:"\n\nIndicates in a textual way how much time has passed since the indicated date\n```html\n```",properties:[],methods:[{name:"transform",args:[{name:"value",type:"string | Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:21,deprecated:!1,deprecationMessage:"",rawdescription:"\n\nIndicates in a textual way how much time has passed since the indicated date\n```html\n```",description:`<p>Indicates in a textual way how much time has passed since the indicated date</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,modifierKind:[164],jsdoctags:[{name:{pos:582,end:587,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"string | Date",deprecated:!1,deprecationMessage:"",tagName:{pos:576,end:581,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the Date or date string</p>
`},{tagName:{pos:550,end:557,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>2 hours ago</p>
`}]}],standalone:!0,pure:!1,ngname:"itDateAgo",sourceCode:`import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type DateAgoPipeInterval = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

/**
 * Indicates in a textual way how much time has passed since the indicated date
 * @example 2 hours ago
 */
@Pipe({
  name: 'itDateAgo',
  pure: false,
  standalone: true,
})
export class ItDateAgoPipe extends TranslatePipe implements PipeTransform {
  /**
   * Indicates in a textual way how much time has passed since the indicated date
   * @example 2 hours ago
   * @param value the Date or date string
   */
  override transform(value: string | Date): string {
    if (!value) {
      return '';
    }

    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (isNaN(seconds)) {
      return '';
    }

    // less than 30 seconds ago will show as 'Just now'
    if (seconds < 29) {
      return super.transform('it.date-ago-pipe.just-now');
    }

    const intervals = new Map<DateAgoPipeInterval, number>([
      ['year', 31536000],
      ['month', 2592000],
      ['week', 604800],
      ['day', 86400],
      ['hour', 3600],
      ['minute', 60],
      ['second', 1],
    ]);

    for (const interval of intervals) {
      const counter = Math.floor(seconds / interval[1]);
      if (counter > 0) {
        return super.transform(\`it.date-ago-pipe.\${counter === 1 ? 'singular-' : ''}\${interval[0]}-ago\`, {
          count: counter,
        });
      }
    }

    return '';
  }
}
`},{name:"ItDurationPipe",id:"pipe-ItDurationPipe-e759f7d4410d5bc157e41fd4a85bcd9648f673f58f46b5f918775bb5ff07d0b6c8db740977c0386cd5a21d2cad760308e4a2ebf2bc21654445b6ba0d21bf8024",file:"projects/design-angular-kit/src/lib/pipes/duration.pipe.ts",type:"pipe",deprecated:!1,deprecationMessage:"",description:`<p>Transform a number into a duration.
Is necessary indicate the value expressed by the number, for example &#39;day&#39;.</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"> - 1, &#39;day&#39; -&gt; 1 day
 - 5, &#39;day&#39; -&gt; 5 days
 - 7, &#39;day&#39; -&gt; 1 week
 - 365, &#39;day&#39; -&gt; 1 year
 - 2, &#39;week&#39; -&gt; 2 weeks
 ...</code></pre></div>`,rawdescription:`

Transform a number into a duration.
Is necessary indicate the value expressed by the number, for example 'day'.
\`\`\`html
 - 1, 'day' -> 1 day
 - 5, 'day' -> 5 days
 - 7, 'day' -> 1 week
 - 365, 'day' -> 1 year
 - 2, 'week' -> 2 weeks
 ...
\`\`\``,properties:[],methods:[{name:"transform",args:[{name:"value",type:"string | number | undefined",deprecated:!1,deprecationMessage:""},{name:"type",type:"ItDurationPipeType",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:37,deprecated:!1,deprecationMessage:"",rawdescription:`

Transform a number into a duration.
Is necessary indicate the value expressed by the number, for example 'day'.
\`\`\`html
 - 1, 'day' -> 1 day
 - 5, 'day' -> 5 days
 - 7, 'day' -> 1 week
 - 8, 'day' -> 1 week
 - 365, 'day' -> 1 year
 - 2, 'week' -> 2 weeks
 - 24, 'month' -> 1 year
 ...
\`\`\``,description:`<p>Transform a number into a duration.
Is necessary indicate the value expressed by the number, for example &#39;day&#39;.</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"> - 1, &#39;day&#39; -&gt; 1 day
 - 5, &#39;day&#39; -&gt; 5 days
 - 7, &#39;day&#39; -&gt; 1 week
 - 8, &#39;day&#39; -&gt; 1 week
 - 365, &#39;day&#39; -&gt; 1 year
 - 2, &#39;week&#39; -&gt; 2 weeks
 - 24, &#39;month&#39; -&gt; 1 year
 ...</code></pre></div>`,modifierKind:[164],jsdoctags:[{name:{pos:970,end:975,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"string | number | undefined",deprecated:!1,deprecationMessage:"",tagName:{pos:964,end:969,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the number</p>
`},{name:{pos:999,end:1003,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"type"},type:"ItDurationPipeType",deprecated:!1,deprecationMessage:"",tagName:{pos:993,end:998,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the number expressed type</p>
`},{tagName:{pos:745,end:752,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<ul>
<li>1, &#39;day&#39; -&gt; 1 day</li>
<li>5, &#39;day&#39; -&gt; 5 days</li>
<li>7, &#39;day&#39; -&gt; 1 week</li>
<li>8, &#39;day&#39; -&gt; 1 week</li>
<li>365, &#39;day&#39; -&gt; 1 year</li>
<li>2, &#39;week&#39; -&gt; 2 weeks</li>
<li>24, &#39;month&#39; -&gt; 1 year
 ...</li>
</ul>
`}]}],standalone:!0,ngname:"itDuration",sourceCode:`import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export type ItDurationPipeType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

/**
 * Transform a number into a duration.
 * Is necessary indicate the value expressed by the number, for example 'day'.
 * @example
 *  - 1, 'day' -> 1 day
 *  - 5, 'day' -> 5 days
 *  - 7, 'day' -> 1 week
 *  - 365, 'day' -> 1 year
 *  - 2, 'week' -> 2 weeks
 *  ...
 */
@Pipe({
  name: 'itDuration',
  standalone: true,
})
export class ItDurationPipe extends TranslatePipe implements PipeTransform {
  /**
   * Transform a number into a duration.
   * Is necessary indicate the value expressed by the number, for example 'day'.
   * @example
   *  - 1, 'day' -> 1 day
   *  - 5, 'day' -> 5 days
   *  - 7, 'day' -> 1 week
   *  - 8, 'day' -> 1 week
   *  - 365, 'day' -> 1 year
   *  - 2, 'week' -> 2 weeks
   *  - 24, 'month' -> 1 year
   *  ...
   * @param value the number
   * @param type the number expressed type
   */
  override transform(value: string | number | undefined, type: ItDurationPipeType): string {
    let valueAdjust = Number(value);
    if (isNaN(valueAdjust)) {
      return '';
    }

    switch (type) {
      // eslint-disable-next-line no-fallthrough,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      case 'second':
        if (valueAdjust < 60) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 60);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'minute':
        if (valueAdjust < 60) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 60);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'hour':
        if (valueAdjust < 24) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 24);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'day':
        if (valueAdjust < 7) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 7);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'week':
        if (valueAdjust < 5) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 5);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-fallthrough
      case 'month':
        if (valueAdjust < 24) {
          return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 24);
      // eslint-disable-next-line no-fallthrough
      case 'year':
        return super.transform(\`it.duration.\${type}\${valueAdjust === 1 ? '' : 's'}\`, {
          count: valueAdjust,
        });
      default:
        return '';
    }
  }
}
`},{name:"ItMarkMatchingTextPipe",id:"pipe-ItMarkMatchingTextPipe-4480982d7636796f59d6b387e0fa2469317799b1e84ad30d3bf979c596b4650aaa4584d01a30aa3f0c22206021e07c4eda29ca9c4eec226cfe445bc9fb77ea54",file:"projects/design-angular-kit/src/lib/pipes/mark-matching-text.pipe.ts",type:"pipe",deprecated:!1,deprecationMessage:"",description:`<p>Allows you to highlight text with the <mark> tag</p>
`,rawdescription:`

Allows you to highlight text with the <mark> tag
`,properties:[],methods:[{name:"transform",args:[{name:"allString",type:"string | undefined",deprecated:!1,deprecationMessage:""},{name:"searchString",type:"string | number | null | undefined",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"SafeHtml | string | undefined",typeParameters:[],line:19,deprecated:!1,deprecationMessage:"",rawdescription:`

Allows you to highlight text with the <mark> tag
`,description:`<p>Allows you to highlight text with the <mark> tag</p>
`,jsdoctags:[{name:{pos:441,end:450,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"allString"},type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{pos:435,end:440,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the full text to search from</p>
`},{name:{pos:492,end:504,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"searchString"},type:"string | number | null | undefined",deprecated:!1,deprecationMessage:"",tagName:{pos:486,end:491,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the string to search</p>
`}]}],standalone:!0,ngname:"itMarkMatchingText",sourceCode:`import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Allows you to highlight text with the <mark> tag
 */
@Pipe({
  standalone: true,
  name: 'itMarkMatchingText',
})
export class ItMarkMatchingTextPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  /**
   * Allows you to highlight text with the <mark> tag
   * @param allString the full text to search from
   * @param searchString the string to search
   */
  transform(allString: string | undefined, searchString: string | number | null | undefined): SafeHtml | string | undefined {
    if (!searchString) {
      return allString;
    } else if (!allString) {
      return '';
    }

    if (typeof searchString === 'number') {
      searchString = searchString.toString();
    }

    // Check if search string is a substring of pivot string (no case-sensitive)
    const idxOfMatchString = allString.toLowerCase().indexOf(searchString.toLowerCase());
    if (idxOfMatchString !== -1) {
      // retrieve the exactly substring
      const matchingString = allString.substring(idxOfMatchString, idxOfMatchString + searchString.length);
      // Replace original string marking as <strong> (bold) the matchinng substring
      const regEx = new RegExp('(' + matchingString + ')', 'gi');
      const res = allString.replace(regEx, '<mark>$1</mark>');
      return this.domSanitizer.bypassSecurityTrustHtml(res);
    }

    return allString;
  }
}
`}],interfaces:[{name:"AutocompleteItem",id:"interface-AutocompleteItem-3c2e3094de9d6fc581989eb9570ef197225eb57eb8abfa9740dff1eb693535ad7ffc7eef1cdb344d51a202325e9cd99d32b84502b85dba51dfe7db05a50739fd",file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type InputControlType = 'text' | 'email' | 'number' | 'date' | 'time' | 'tel' | 'color' | 'url';

export interface SelectControlOption<T = any> {
  value: T;
  text?: string;
  selected?: boolean | ((value: T) => boolean);
  disabled?: boolean | ((value: T) => boolean);
}

export interface SelectControlGroup<T = any> {
  label: string;
  options: Array<SelectControlOption<T>>;
  dragdrop?: boolean;
}

export interface UploadFileListItem {
  /**
   * The item id
   */
  id: number;

  /**
   * The uploaded file
   */
  file: File;

  /**
   * Show progress bar
   *
   * The status of the item changes based on the value:
   * - <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
   * - <b>success</b>: if value is greater than 100
   */
  progress?: number;

  /**
   * Show the ability to delete item
   * @default false
   */
  removable?: boolean;

  /**
   * Set the status of the item as 'error'
   */
  error?: boolean;

  /**
   * Add tooltip on file item name
   * @example It can be used to show the error message or additional information about the file
   */
  tooltip?: string;
}

/**
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutocompleteItem<T = any> {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilit\xE0 */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: IconName;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string;

  /**
   * Attribute not used for autocomplete rendering.
   * It can be useful to retrieve some extra information when selecting the autocomplete item
   */
  additionalData?: T;
}
`,properties:[{name:"additionalData",deprecated:!1,deprecationMessage:"",type:"T",optional:!0,description:`<p>Attribute not used for autocomplete rendering.
It can be useful to retrieve some extra information when selecting the autocomplete item</p>
`,line:77,rawdescription:`

Attribute not used for autocomplete rendering.
It can be useful to retrieve some extra information when selecting the autocomplete item
`},{name:"avatarAltText",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Opzionale. Testo in alternativa dell&#39;avatar per accessibilit\xE0</p>
`,line:65,rawdescription:`
Opzionale. Testo in alternativa dell'avatar per accessibilit\xE0`},{name:"avatarSrcPath",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Opzionale. Path in cui ricercare l&#39;immagine dell&#39;avatar da posizionare a sinistra della voce di autocompletamento</p>
`,line:63,rawdescription:`
Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento`},{name:"icon",deprecated:!1,deprecationMessage:"",type:"IconName",optional:!0,description:`<p>Opzionale. Icona posizionata a sinistra della voce di autocompletamento</p>
`,line:67,rawdescription:`
Opzionale. Icona posizionata a sinistra della voce di autocompletamento`},{name:"label",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Opzionale. Label posizionata a destra della voce di autocompletamento</p>
`,line:69,rawdescription:`
Opzionale. Label posizionata a destra della voce di autocompletamento`},{name:"link",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Opzionale. Link relativo all&#39;elemento</p>
`,line:71,rawdescription:`
Opzionale. Link relativo all'elemento`},{name:"value",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>Valore voce di autocompletamento</p>
`,line:61,rawdescription:`
Valore voce di autocompletamento`}],indexSignatures:[],kind:171,description:`<p>Elemento disponibile per l&#39;autocompletamento del it-form-input</p>
`,rawdescription:`

Elemento disponibile per l'autocompletamento del it-form-input
`,methods:[],extends:[]},{name:"AvailableLanguage",id:"interface-AvailableLanguage-45b28c72e60487878a8410ed651e9ca4a2cab45dad5d93244e3985c89ed643fe8ba2e9c8a89a4f071e1abf6da27ec1199c59c74ed70a0650b86cac1f51d9e5b3",file:"projects/design-angular-kit/src/lib/interfaces/utils.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`export interface AvailableLanguage {
  /**
   * The language code
   */
  code: string;

  /**
   * Label to show
   */
  label: string;
}
`,properties:[{name:"code",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The language code</p>
`,line:5,rawdescription:`

The language code
`},{name:"label",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>Label to show</p>
`,line:10,rawdescription:`

Label to show
`}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"DesignAngularKitConfig",id:"interface-DesignAngularKitConfig-2d7fcd9db21752c16c47a0944376be9ad12ae287c98bdb0599f510f806161286a33e558a343859e6154dc63639b487553c8e5e76a21c9e3b37398963e80d0fc6",file:"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { InjectionToken, Provider } from '@angular/core';

/**
 * The bootstrap-italia asset folder path
 * @default ./bootstrap-italia
 */
export const IT_ASSET_BASE_PATH = new InjectionToken<string>('it-asset-base-path');

export interface DesignAngularKitConfig {
  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  assetBasePath?: string;

  /**
   * Load the <a href="https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/#fonts">bootstrap-italia fonts</a>
   * @default true
   */
  loadFont?: boolean;

  /**
   * The TranslateModule loader
   * @param itPrefix the design-angular-kit i18n path
   * @param itSuffix the design-angular-kit i18n suffix
   * @default
   * {
   *   provide: TranslateLoader,
   *   useFactory: (http: HttpClient) => new TranslateHttpLoader(http, \`\${assetBasePath}/i18n/\`, \`.json?v\${version}\`),
   *   deps: [HttpClient],
   * }
   */
  translateLoader?: (itPrefix: string, itSuffix: string) => Provider;
}
`,properties:[{name:"assetBasePath",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>The bootstrap-italia asset folder path</p>
`,line:14,rawdescription:`

The bootstrap-italia asset folder path
`,jsdoctags:[{pos:322,end:353,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:323,end:330,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>./bootstrap-italia</p>
`}]},{name:"loadFont",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>Load the <a href="https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/#fonts">bootstrap-italia fonts</a></p>
`,line:20,rawdescription:`

Load the <a href="https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/#fonts">bootstrap-italia fonts</a>
`,jsdoctags:[{pos:526,end:543,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:527,end:534,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}]},{name:"translateLoader",deprecated:!1,deprecationMessage:"",type:"function",optional:!0,description:`<p>The TranslateModule loader
{
  provide: TranslateLoader,
  useFactory: (http: HttpClient) =&gt; new TranslateHttpLoader(http, <code>\${assetBasePath}/i18n/</code>, <code>.json?v\${version}</code>),
  deps: [HttpClient],
}</p>
`,line:33,rawdescription:`

The TranslateModule loader
{
  provide: TranslateLoader,
  useFactory: (http: HttpClient) => new TranslateHttpLoader(http, \`\${assetBasePath}/i18n/\`, \`.json?v\${version}\`),
  deps: [HttpClient],
}
`,jsdoctags:[{pos:612,end:666,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:613,end:618,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the design-angular-kit i18n path</p>
`,name:{pos:619,end:627,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"itPrefix"},isNameFirst:!0,isBracketed:!1},{pos:666,end:722,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:667,end:672,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the design-angular-kit i18n suffix</p>
`,name:{pos:673,end:681,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"itSuffix"},isNameFirst:!0,isBracketed:!1},{pos:722,end:927,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:723,end:730,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>{
  provide: TranslateLoader,
  useFactory: (http: HttpClient) =&gt; new TranslateHttpLoader(http, <code>\${assetBasePath}/i18n/</code>, <code>.json?v\${version}</code>),
  deps: [HttpClient],
}</p>
`}]}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"ItSortable",id:"interface-ItSortable-e24213960cda8f60c4b6364587817d581e57642c3ace36188c479dc9274b636cad42cf2d303bebcfc5ab79ea12f8d7a8d41435d15cd25f22c0394e03a1db4e55",file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { InjectionToken } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | undefined;

/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';

/** Interface for a directive that holds sorting state consumed by \`ItSortHeader\`. */
export interface ItSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start?: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableSortClear?: boolean;
}

/** The current sort state. */
export interface ItSortEvent {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}

/**
 * Default options for \`it-sort\`.
 */
export interface ItSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/**
 * Injection token to be used to override the default options for \`it-sort\`.
 */
export const IT_SORT_DEFAULT_OPTIONS = new InjectionToken<ItSortDefaultOptions>('IT_SORT_DEFAULT_OPTIONS');
`,properties:[{name:"disableSortClear",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>Whether to disable clearing the sorting state.</p>
`,line:17,rawdescription:`
Whether to disable clearing the sorting state.`},{name:"id",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The id of the column being sorted.</p>
`,line:11,rawdescription:`
The id of the column being sorted.`},{name:"start",deprecated:!1,deprecationMessage:"",type:"SortDirection",optional:!0,description:`<p>Starting sort direction.</p>
`,line:14,rawdescription:`
Starting sort direction.`}],indexSignatures:[],kind:171,description:`<p>Interface for a directive that holds sorting state consumed by <code>ItSortHeader</code>.</p>
`,rawdescription:"\nInterface for a directive that holds sorting state consumed by `ItSortHeader`.",methods:[],extends:[]},{name:"ItSortDefaultOptions",id:"interface-ItSortDefaultOptions-e24213960cda8f60c4b6364587817d581e57642c3ace36188c479dc9274b636cad42cf2d303bebcfc5ab79ea12f8d7a8d41435d15cd25f22c0394e03a1db4e55",file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { InjectionToken } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | undefined;

/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';

/** Interface for a directive that holds sorting state consumed by \`ItSortHeader\`. */
export interface ItSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start?: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableSortClear?: boolean;
}

/** The current sort state. */
export interface ItSortEvent {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}

/**
 * Default options for \`it-sort\`.
 */
export interface ItSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/**
 * Injection token to be used to override the default options for \`it-sort\`.
 */
export const IT_SORT_DEFAULT_OPTIONS = new InjectionToken<ItSortDefaultOptions>('IT_SORT_DEFAULT_OPTIONS');
`,properties:[{name:"arrowPosition",deprecated:!1,deprecationMessage:"",type:"SortHeaderArrowPosition",optional:!0,description:`<p>Position of the arrow that displays when sorted.</p>
`,line:36,rawdescription:`
Position of the arrow that displays when sorted.`},{name:"disableClear",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>Whether to disable clearing the sorting state.</p>
`,line:34,rawdescription:`
Whether to disable clearing the sorting state.`}],indexSignatures:[],kind:171,description:`<p>Default options for <code>it-sort</code>.</p>
`,rawdescription:`

Default options for \`it-sort\`.
`,methods:[],extends:[]},{name:"ItSortEvent",id:"interface-ItSortEvent-e24213960cda8f60c4b6364587817d581e57642c3ace36188c479dc9274b636cad42cf2d303bebcfc5ab79ea12f8d7a8d41435d15cd25f22c0394e03a1db4e55",file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { InjectionToken } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | undefined;

/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';

/** Interface for a directive that holds sorting state consumed by \`ItSortHeader\`. */
export interface ItSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start?: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableSortClear?: boolean;
}

/** The current sort state. */
export interface ItSortEvent {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}

/**
 * Default options for \`it-sort\`.
 */
export interface ItSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/**
 * Injection token to be used to override the default options for \`it-sort\`.
 */
export const IT_SORT_DEFAULT_OPTIONS = new InjectionToken<ItSortDefaultOptions>('IT_SORT_DEFAULT_OPTIONS');
`,properties:[{name:"active",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The id of the column being sorted.</p>
`,line:23,rawdescription:`
The id of the column being sorted.`},{name:"direction",deprecated:!1,deprecationMessage:"",type:"SortDirection",optional:!1,description:`<p>The sort direction.</p>
`,line:26,rawdescription:`
The sort direction.`}],indexSignatures:[],kind:171,description:`<p>The current sort state.</p>
`,rawdescription:`
The current sort state.`,methods:[],extends:[]},{name:"Notification",id:"interface-Notification-01e5ea55ef4dd88178f4095083e6679fce525be6f588707f1746c298ad69d624ec7c2e58593a236f8e28afd0356d9e08dff057b03a8efbbd04088dd52daff908",file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type AlertColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';

export type ButtonColor =
  | 'primary'
  | 'outline-primary'
  | 'secondary'
  | 'outline-secondary'
  | 'success'
  | 'outline-success'
  | 'danger'
  | 'outline-danger'
  | 'warning'
  | 'outline-warning'
  | 'info'
  | 'outline-info'
  | 'light'
  | 'outline-light'
  | 'dark'
  | 'outline-dark'
  | 'link';

export type ButtonSize = 'lg' | 'sm' | 'xs';
export type ButtonType = 'submit' | 'button';

export type CalloutColor = 'success' | 'warning' | 'danger' | 'important' | 'note';
export type CalloutAppearance = 'default' | 'highlight' | 'more';

export type ChipColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type ElementPlacement = 'top' | 'bottom' | 'left' | 'right';

export type ProgressBarColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type TableColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type TableHeadColor = 'light' | 'dark';

export type TableResponsive = 'responsive' | 'responsive-sm' | 'responsive-md' | 'responsive-lg' | 'responsive-xl' | 'responsive-xxl';

export type VerticalAlignment = 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom' | 'align-text-bottom' | 'align-text-top';

export type DropdownDirection = 'dropup' | 'dropend' | 'dropstart';

export type CarouselType = 'default' | 'three-cols' | 'three-cols-arrow-visible';

export type TimelinePINType = 'default' | 'evidence' | 'now';

export interface TimelineElement {
  pin: {
    type?: TimelinePINType;
    icon?: IconName;
    text: string;
  };
  category?: {
    title: string;
    link: string;
  };
  title: string;
  text: string;
  signature?: string;
  eventDate?: Date;
  link?: string;
}

export interface Notification {
  /**
   * Notification type
   */
  type: NotificationType;

  /**
   * Notification title
   */
  title: string;

  /**
   * Notification message / text
   */
  message?: string;

  /**
   * Custom duration of notification
   */
  duration?: number;

  /**
   * The close notification button appears
   */
  dismissible?: boolean;

  /**
   * Custom position of notification
   */
  position?: NotificationPosition;

  /**
   * Custom icon of notification
   */
  icon?: IconName;
}

export enum NotificationType {
  Standard = 'standard',
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export enum NotificationPosition {
  Top = 'top-fix mt-3',
  Bottom = 'bottom-fix mb-3',
  Left = 'left-fix ms-3',
  Right = 'right-fix me-3',
}
`,properties:[{name:"dismissible",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>The close notification button appears</p>
`,line:93,rawdescription:`

The close notification button appears
`},{name:"duration",deprecated:!1,deprecationMessage:"",type:"number",optional:!0,description:`<p>Custom duration of notification</p>
`,line:88,rawdescription:`

Custom duration of notification
`},{name:"icon",deprecated:!1,deprecationMessage:"",type:"IconName",optional:!0,description:`<p>Custom icon of notification</p>
`,line:103,rawdescription:`

Custom icon of notification
`},{name:"message",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Notification message / text</p>
`,line:83,rawdescription:`

Notification message / text
`},{name:"position",deprecated:!1,deprecationMessage:"",type:"NotificationPosition",optional:!0,description:`<p>Custom position of notification</p>
`,line:98,rawdescription:`

Custom position of notification
`},{name:"title",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>Notification title</p>
`,line:78,rawdescription:`

Notification title
`},{name:"type",deprecated:!1,deprecationMessage:"",type:"NotificationType",optional:!1,description:`<p>Notification type</p>
`,line:73,rawdescription:`

Notification type
`}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"SelectControlGroup",id:"interface-SelectControlGroup-3c2e3094de9d6fc581989eb9570ef197225eb57eb8abfa9740dff1eb693535ad7ffc7eef1cdb344d51a202325e9cd99d32b84502b85dba51dfe7db05a50739fd",file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type InputControlType = 'text' | 'email' | 'number' | 'date' | 'time' | 'tel' | 'color' | 'url';

export interface SelectControlOption<T = any> {
  value: T;
  text?: string;
  selected?: boolean | ((value: T) => boolean);
  disabled?: boolean | ((value: T) => boolean);
}

export interface SelectControlGroup<T = any> {
  label: string;
  options: Array<SelectControlOption<T>>;
  dragdrop?: boolean;
}

export interface UploadFileListItem {
  /**
   * The item id
   */
  id: number;

  /**
   * The uploaded file
   */
  file: File;

  /**
   * Show progress bar
   *
   * The status of the item changes based on the value:
   * - <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
   * - <b>success</b>: if value is greater than 100
   */
  progress?: number;

  /**
   * Show the ability to delete item
   * @default false
   */
  removable?: boolean;

  /**
   * Set the status of the item as 'error'
   */
  error?: boolean;

  /**
   * Add tooltip on file item name
   * @example It can be used to show the error message or additional information about the file
   */
  tooltip?: string;
}

/**
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutocompleteItem<T = any> {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilit\xE0 */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: IconName;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string;

  /**
   * Attribute not used for autocomplete rendering.
   * It can be useful to retrieve some extra information when selecting the autocomplete item
   */
  additionalData?: T;
}
`,properties:[{name:"dragdrop",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:"",line:15},{name:"label",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:13},{name:"options",deprecated:!1,deprecationMessage:"",type:"Array<SelectControlOption<T>>",optional:!1,description:"",line:14}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"SelectControlOption",id:"interface-SelectControlOption-3c2e3094de9d6fc581989eb9570ef197225eb57eb8abfa9740dff1eb693535ad7ffc7eef1cdb344d51a202325e9cd99d32b84502b85dba51dfe7db05a50739fd",file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type InputControlType = 'text' | 'email' | 'number' | 'date' | 'time' | 'tel' | 'color' | 'url';

export interface SelectControlOption<T = any> {
  value: T;
  text?: string;
  selected?: boolean | ((value: T) => boolean);
  disabled?: boolean | ((value: T) => boolean);
}

export interface SelectControlGroup<T = any> {
  label: string;
  options: Array<SelectControlOption<T>>;
  dragdrop?: boolean;
}

export interface UploadFileListItem {
  /**
   * The item id
   */
  id: number;

  /**
   * The uploaded file
   */
  file: File;

  /**
   * Show progress bar
   *
   * The status of the item changes based on the value:
   * - <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
   * - <b>success</b>: if value is greater than 100
   */
  progress?: number;

  /**
   * Show the ability to delete item
   * @default false
   */
  removable?: boolean;

  /**
   * Set the status of the item as 'error'
   */
  error?: boolean;

  /**
   * Add tooltip on file item name
   * @example It can be used to show the error message or additional information about the file
   */
  tooltip?: string;
}

/**
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutocompleteItem<T = any> {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilit\xE0 */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: IconName;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string;

  /**
   * Attribute not used for autocomplete rendering.
   * It can be useful to retrieve some extra information when selecting the autocomplete item
   */
  additionalData?: T;
}
`,properties:[{name:"disabled",deprecated:!1,deprecationMessage:"",type:"boolean | ",optional:!0,description:"",line:9},{name:"selected",deprecated:!1,deprecationMessage:"",type:"boolean | ",optional:!0,description:"",line:8},{name:"text",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:7},{name:"value",deprecated:!1,deprecationMessage:"",type:"T",optional:!1,description:"",line:6}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"TimelineElement",id:"interface-TimelineElement-01e5ea55ef4dd88178f4095083e6679fce525be6f588707f1746c298ad69d624ec7c2e58593a236f8e28afd0356d9e08dff057b03a8efbbd04088dd52daff908",file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type AlertColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';

export type ButtonColor =
  | 'primary'
  | 'outline-primary'
  | 'secondary'
  | 'outline-secondary'
  | 'success'
  | 'outline-success'
  | 'danger'
  | 'outline-danger'
  | 'warning'
  | 'outline-warning'
  | 'info'
  | 'outline-info'
  | 'light'
  | 'outline-light'
  | 'dark'
  | 'outline-dark'
  | 'link';

export type ButtonSize = 'lg' | 'sm' | 'xs';
export type ButtonType = 'submit' | 'button';

export type CalloutColor = 'success' | 'warning' | 'danger' | 'important' | 'note';
export type CalloutAppearance = 'default' | 'highlight' | 'more';

export type ChipColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type ElementPlacement = 'top' | 'bottom' | 'left' | 'right';

export type ProgressBarColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type TableColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type TableHeadColor = 'light' | 'dark';

export type TableResponsive = 'responsive' | 'responsive-sm' | 'responsive-md' | 'responsive-lg' | 'responsive-xl' | 'responsive-xxl';

export type VerticalAlignment = 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom' | 'align-text-bottom' | 'align-text-top';

export type DropdownDirection = 'dropup' | 'dropend' | 'dropstart';

export type CarouselType = 'default' | 'three-cols' | 'three-cols-arrow-visible';

export type TimelinePINType = 'default' | 'evidence' | 'now';

export interface TimelineElement {
  pin: {
    type?: TimelinePINType;
    icon?: IconName;
    text: string;
  };
  category?: {
    title: string;
    link: string;
  };
  title: string;
  text: string;
  signature?: string;
  eventDate?: Date;
  link?: string;
}

export interface Notification {
  /**
   * Notification type
   */
  type: NotificationType;

  /**
   * Notification title
   */
  title: string;

  /**
   * Notification message / text
   */
  message?: string;

  /**
   * Custom duration of notification
   */
  duration?: number;

  /**
   * The close notification button appears
   */
  dismissible?: boolean;

  /**
   * Custom position of notification
   */
  position?: NotificationPosition;

  /**
   * Custom icon of notification
   */
  icon?: IconName;
}

export enum NotificationType {
  Standard = 'standard',
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export enum NotificationPosition {
  Top = 'top-fix mt-3',
  Bottom = 'bottom-fix mb-3',
  Left = 'left-fix ms-3',
  Right = 'right-fix me-3',
}
`,properties:[{name:"category",deprecated:!1,deprecationMessage:"",type:"literal type",optional:!0,description:"",line:58},{name:"eventDate",deprecated:!1,deprecationMessage:"",type:"Date",optional:!0,description:"",line:65},{name:"link",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:66},{name:"pin",deprecated:!1,deprecationMessage:"",type:"literal type",optional:!1,description:"",line:53},{name:"signature",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:64},{name:"text",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:63},{name:"title",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:62}],indexSignatures:[],kind:171,methods:[],extends:[]},{name:"UploadFileListItem",id:"interface-UploadFileListItem-3c2e3094de9d6fc581989eb9570ef197225eb57eb8abfa9740dff1eb693535ad7ffc7eef1cdb344d51a202325e9cd99d32b84502b85dba51dfe7db05a50739fd",file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",type:"interface",sourceCode:`import { IconName } from './icon';

export type InputControlType = 'text' | 'email' | 'number' | 'date' | 'time' | 'tel' | 'color' | 'url';

export interface SelectControlOption<T = any> {
  value: T;
  text?: string;
  selected?: boolean | ((value: T) => boolean);
  disabled?: boolean | ((value: T) => boolean);
}

export interface SelectControlGroup<T = any> {
  label: string;
  options: Array<SelectControlOption<T>>;
  dragdrop?: boolean;
}

export interface UploadFileListItem {
  /**
   * The item id
   */
  id: number;

  /**
   * The uploaded file
   */
  file: File;

  /**
   * Show progress bar
   *
   * The status of the item changes based on the value:
   * - <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
   * - <b>success</b>: if value is greater than 100
   */
  progress?: number;

  /**
   * Show the ability to delete item
   * @default false
   */
  removable?: boolean;

  /**
   * Set the status of the item as 'error'
   */
  error?: boolean;

  /**
   * Add tooltip on file item name
   * @example It can be used to show the error message or additional information about the file
   */
  tooltip?: string;
}

/**
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutocompleteItem<T = any> {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilit\xE0 */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: IconName;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string;

  /**
   * Attribute not used for autocomplete rendering.
   * It can be useful to retrieve some extra information when selecting the autocomplete item
   */
  additionalData?: T;
}
`,properties:[{name:"error",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>Set the status of the item as &#39;error&#39;</p>
`,line:47,rawdescription:`

Set the status of the item as 'error'
`},{name:"file",deprecated:!1,deprecationMessage:"",type:"File",optional:!1,description:`<p>The uploaded file</p>
`,line:27,rawdescription:`

The uploaded file
`},{name:"id",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>The item id</p>
`,line:22,rawdescription:`

The item id
`},{name:"progress",deprecated:!1,deprecationMessage:"",type:"number",optional:!0,description:`<p>Show progress bar</p>
<p>The status of the item changes based on the value:</p>
<ul>
<li><b>uploading</b>: if value is between 0 and 100 (exclusive 0 &lt; value &lt; 100)</li>
<li><b>success</b>: if value is greater than 100</li>
</ul>
`,line:36,rawdescription:`

Show progress bar

The status of the item changes based on the value:
- <b>uploading</b>: if value is between 0 and 100 (exclusive 0 < value < 100)
- <b>success</b>: if value is greater than 100
`},{name:"removable",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!0,description:`<p>Show the ability to delete item</p>
`,line:42,rawdescription:`

Show the ability to delete item
`,jsdoctags:[{pos:881,end:899,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:882,end:889,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}]},{name:"tooltip",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:`<p>Add tooltip on file item name</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:53,rawdescription:"\n\nAdd tooltip on file item name\n```html\n```",jsdoctags:[{pos:1047,end:1141,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1048,end:1055,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>It can be used to show the error message or additional information about the file</p>
`}]}],indexSignatures:[],kind:171,methods:[],extends:[]}],injectables:[{name:"ItNotificationService",id:"injectable-ItNotificationService-4071de8cddc7d7b5d7ee3f21449548d6edcfd7a334df892f67ee10522836a726d7a81b62acd1d73fc5ba8343509c163955b63625fe2a44cd081fc39d9478a59f",file:"projects/design-angular-kit/src/lib/services/notification/notification.service.ts",properties:[{name:"subject",defaultValue:"new Subject<Notification>()",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:7,modifierKind:[123]}],methods:[{name:"addNotification",args:[{name:"notification",type:"Notification",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:21,deprecated:!1,deprecationMessage:"",rawdescription:`

Show new notification
`,description:`<p>Show new notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:649,end:661,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"notification"},type:"Notification",deprecated:!1,deprecationMessage:"",tagName:{pos:643,end:648,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification</p>
`}]},{name:"error",args:[{name:"title",type:"string",deprecated:!1,deprecationMessage:""},{name:"message",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dismissible",type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0},{name:"duration",type:"number",deprecated:!1,deprecationMessage:"",optional:!0},{name:"position",type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:71,deprecated:!1,deprecationMessage:"",rawdescription:`

Create new Error notification
`,description:`<p>Create new Error notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:1974,end:1979,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1968,end:1973,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification title</p>
`},{name:{pos:2011,end:2018,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"message"},type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2005,end:2010,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification message</p>
`},{name:{pos:2052,end:2063,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dismissible"},type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2046,end:2051,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification dismissible</p>
`},{name:{pos:2101,end:2109,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"duration"},type:"number",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2095,end:2100,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification duration (milliseconds)</p>
`},{name:{pos:2159,end:2167,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"position"},type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2153,end:2158,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification position</p>
`}]},{name:"info",args:[{name:"title",type:"string",deprecated:!1,deprecationMessage:""},{name:"message",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dismissible",type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0},{name:"duration",type:"number",deprecated:!1,deprecationMessage:"",optional:!0},{name:"position",type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:109,deprecated:!1,deprecationMessage:"",rawdescription:`

Create new Info notification
`,description:`<p>Create new Info notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:3101,end:3106,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:3095,end:3100,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification title</p>
`},{name:{pos:3138,end:3145,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"message"},type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:3132,end:3137,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification message</p>
`},{name:{pos:3179,end:3190,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dismissible"},type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:3173,end:3178,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification dismissible</p>
`},{name:{pos:3228,end:3236,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"duration"},type:"number",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:3222,end:3227,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification duration (milliseconds)</p>
`},{name:{pos:3286,end:3294,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"position"},type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:3280,end:3285,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification position</p>
`}]},{name:"onNotification",args:[{name:"filterType",type:"NotificationType",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"Observable<Notification>",typeParameters:[],line:13,deprecated:!1,deprecationMessage:"",rawdescription:`

Listen on notification arrived
`,description:`<p>Listen on notification arrived</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:368,end:378,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"filterType"},type:"NotificationType",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:362,end:367,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>filter type of notification</p>
`}]},{name:"standard",args:[{name:"title",type:"string",deprecated:!1,deprecationMessage:""},{name:"message",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dismissible",type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0},{name:"duration",type:"number",deprecated:!1,deprecationMessage:"",optional:!0},{name:"position",type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:33,deprecated:!1,deprecationMessage:"",rawdescription:`

Create new Standard notification
`,description:`<p>Create new Standard notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:840,end:845,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:834,end:839,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification title</p>
`},{name:{pos:877,end:884,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"message"},type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:871,end:876,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification message</p>
`},{name:{pos:918,end:929,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dismissible"},type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:912,end:917,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification dismissible</p>
`},{name:{pos:967,end:975,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"duration"},type:"number",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:961,end:966,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification duration (milliseconds)</p>
`},{name:{pos:1025,end:1033,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"position"},type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:1019,end:1024,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification position</p>
`}]},{name:"success",args:[{name:"title",type:"string",deprecated:!1,deprecationMessage:""},{name:"message",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dismissible",type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0},{name:"duration",type:"number",deprecated:!1,deprecationMessage:"",optional:!0},{name:"position",type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:52,deprecated:!1,deprecationMessage:"",rawdescription:`

Create new Success notification
`,description:`<p>Create new Success notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:1409,end:1414,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1403,end:1408,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification title</p>
`},{name:{pos:1446,end:1453,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"message"},type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:1440,end:1445,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification message</p>
`},{name:{pos:1487,end:1498,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dismissible"},type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:1481,end:1486,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification dismissible</p>
`},{name:{pos:1536,end:1544,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"duration"},type:"number",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:1530,end:1535,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification duration (milliseconds)</p>
`},{name:{pos:1594,end:1602,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"position"},type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:1588,end:1593,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification position</p>
`}]},{name:"warning",args:[{name:"title",type:"string",deprecated:!1,deprecationMessage:""},{name:"message",type:"string",deprecated:!1,deprecationMessage:"",optional:!0},{name:"dismissible",type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0},{name:"duration",type:"number",deprecated:!1,deprecationMessage:"",optional:!0},{name:"position",type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"void",typeParameters:[],line:90,deprecated:!1,deprecationMessage:"",rawdescription:`

Create new Warning notification
`,description:`<p>Create new Warning notification</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:2537,end:2542,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:2531,end:2536,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification title</p>
`},{name:{pos:2574,end:2581,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"message"},type:"string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2568,end:2573,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification message</p>
`},{name:{pos:2615,end:2626,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dismissible"},type:"boolean",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2609,end:2614,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification dismissible</p>
`},{name:{pos:2664,end:2672,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"duration"},type:"number",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2658,end:2663,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification duration (milliseconds)</p>
`},{name:{pos:2722,end:2730,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"position"},type:"NotificationPosition",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:2716,end:2721,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>notification position</p>
`}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,sourceCode:`import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Notification, NotificationPosition, NotificationType } from '../../interfaces/core';

@Injectable({ providedIn: 'root' })
export class ItNotificationService {
  private subject = new Subject<Notification>();

  /**
   * Listen on notification arrived
   * @param filterType filter type of notification
   */
  public onNotification(filterType?: NotificationType): Observable<Notification> {
    return this.subject.asObservable().pipe(filter(n => n && (!filterType || n.type === filterType)));
  }

  /**
   * Show new notification
   * @param notification notification
   */
  public addNotification(notification: Notification): void {
    this.subject.next(notification);
  }

  /**
   * Create new Standard notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public standard(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Standard,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Success notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public success(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Success,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Error notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public error(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Error,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Warning notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public warning(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Warning,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }

  /**
   * Create new Info notification
   * @param title notification title
   * @param message notification message
   * @param dismissible notification dismissible
   * @param duration notification duration (milliseconds)
   * @param position notification position
   */
  public info(title: string, message?: string, dismissible?: boolean, duration?: number, position?: NotificationPosition): void {
    this.addNotification({
      type: NotificationType.Info,
      message,
      title,
      duration,
      dismissible,
      position,
    });
  }
}
`,extends:[],type:"injectable"}],guards:[],interceptors:[],classes:[{name:"ItDateUtils",id:"class-ItDateUtils-83206456a33df23b5e6fc5c2a9206aa07a894e0c36a4e9594e3353a3ba6d20b6f92101a058eb5ef9c4b2d21fb8b647408855e418919ee7e22edd02849cf94c46",file:"projects/design-angular-kit/src/lib/utils/date-utils.ts",deprecated:!1,deprecationMessage:"",type:"class",sourceCode:`import { Observable, shareReplay, takeWhile, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export class ItDateUtils {
  /**
   * Add seconds to date
   * @param date the date
   * @param seconds seconds to add
   */
  public static addSeconds(date: Date, seconds: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setSeconds(date.getSeconds() + seconds);
    return newDate;
  }

  /**
   * Add minutes to date
   * @param date the date
   * @param minutes minutes to add
   */
  public static addMinutes(date: Date, minutes: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setMinutes(date.getMinutes() + minutes);
    return newDate;
  }

  /**
   * Add hours to date
   * @param date the date
   * @param hours hours to add
   */
  public static addHours(date: Date, hours: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setHours(date.getHours() + hours);
    return newDate;
  }

  /**
   * Add days to date
   * @param date the date
   * @param days days to add
   */
  public static addDays(date: Date, days: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  /**
   * Add years to date
   * @param date the date
   * @param months months to add
   */
  public static addMonths(date: Date, months: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  }

  /**
   * Add years to date
   * @param date the date
   * @param years years to add
   */
  public static addYears(date: Date, years: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
  }

  /**
   * Calculate number of days between two date
   * @param startDate
   * @param endDate
   * @param absolute return unsigned result
   */
  public static countDays(startDate: Date, endDate: Date, absolute: boolean = false): number {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const diff = absolute ? Math.abs(differenceInTime) : differenceInTime;
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  /**
   * Check if string is a date with iso format
   * @param value the string
   */
  public static isIsoString(value: string | null): boolean {
    if (!value || !/\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z/.test(value)) {
      return false;
    }
    const d = new Date(value);
    return !!d && !isNaN(d.getTime()) && d.toISOString() === value;
  }

  /**
   * Convert iso string to Date
   * @param isoString the iso string
   */
  public static isoStringToDate(isoString: string | null): Date | null {
    return isoString ? new Date(Date.parse(isoString)) : null;
  }

  /**
   * Remove time from an iso date string
   * @param isoString the iso string
   */
  public static isoStringRemoveTime(isoString: string): string {
    let date = ItDateUtils.isoStringToDate(isoString);
    if (!date) {
      return isoString;
    }
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().substring(0, isoString.indexOf('T'));
  }

  /**
   * Set iso string hours to 0 and format correctly the date (consider timezone offset)
   * @example '2024-03-04T23:00:00.000Z' -> '2024-03-05T00:00:00.000Z'
   * @param isoString the iso string
   */
  public static isoStringSetZeroTime(isoString: string): string {
    let date = ItDateUtils.isoStringToDate(isoString);
    if (!date) {
      return isoString;
    }
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString();
  }

  /**
   * Calculate the date time left and return the string format [d h m s]
   * @param endDate
   */
  public static timeLeftString(endDate: Date): Observable<string> {
    const endTime = endDate.getTime();
    return timer(0, 1000).pipe(
      map(() => Math.floor((endTime - new Date().getTime()) / 1000)),
      takeWhile(delta => delta >= 0),
      map(delta => {
        const arrayResult: Array<string> = [];
        const days = Math.floor(delta / 60 / 60 / 24);
        if (days > 0) {
          arrayResult.push(days + 'd');
        }
        delta -= days * 60 * 60 * 24;
        const hours = Math.floor(delta / 60 / 60) % 24;
        if (hours > 0) {
          arrayResult.push(hours + 'h');
        }

        delta -= hours * 60 * 60;
        const minutes = Math.floor(delta / 60) % 60;
        arrayResult.push(minutes + 'm');

        delta -= minutes * 60;
        const seconds = delta % 60;
        arrayResult.push(seconds + 's');

        return arrayResult.join(' ');
      }),
      shareReplay(1)
    );
  }

  /**
   * Calculate the next day of week
   * @param dayOfWeek Day of week 0=Sunday, 1=Monday...4=Thursday...
   * @param hour the specif hour
   * @param minute the specific minute
   */
  public static nextWeekDayAndTime(dayOfWeek: number, hour = 0, minute = 0): Date {
    const now = new Date();
    const result = new Date(now.getFullYear(), now.getMonth(), now.getDate() + ((7 + dayOfWeek - now.getDay()) % 7), hour, minute, 0, 0);

    if (result < now) {
      result.setDate(result.getDate() + 7);
    }

    return result;
  }
}
`,inputsClass:[],outputsClass:[],properties:[],methods:[{name:"addDays",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"days",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:43,deprecated:!1,deprecationMessage:"",rawdescription:`

Add days to date
`,description:`<p>Add days to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1014,end:1018,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:1008,end:1013,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:1040,end:1044,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"days"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:1034,end:1039,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>days to add</p>
`}]},{name:"addHours",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"hours",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:32,deprecated:!1,deprecationMessage:"",rawdescription:`

Add hours to date
`,description:`<p>Add hours to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:745,end:749,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:739,end:744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:771,end:776,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hours"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:765,end:770,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>hours to add</p>
`}]},{name:"addMinutes",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"minutes",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:21,deprecated:!1,deprecationMessage:"",rawdescription:`

Add minutes to date
`,description:`<p>Add minutes to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:461,end:465,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:455,end:460,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:487,end:494,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"minutes"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:481,end:486,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>minutes to add</p>
`}]},{name:"addMonths",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"months",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:54,deprecated:!1,deprecationMessage:"",rawdescription:`

Add years to date
`,description:`<p>Add years to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1277,end:1281,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:1271,end:1276,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:1303,end:1309,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"months"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:1297,end:1302,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>months to add</p>
`}]},{name:"addSeconds",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"seconds",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:10,deprecated:!1,deprecationMessage:"",rawdescription:`

Add seconds to date
`,description:`<p>Add seconds to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:175,end:179,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:169,end:174,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:201,end:208,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"seconds"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:195,end:200,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>seconds to add</p>
`}]},{name:"addYears",args:[{name:"date",type:"Date",deprecated:!1,deprecationMessage:""},{name:"years",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date",typeParameters:[],line:65,deprecated:!1,deprecationMessage:"",rawdescription:`

Add years to date
`,description:`<p>Add years to date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1552,end:1556,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"date"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:1546,end:1551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the date</p>
`},{name:{pos:1578,end:1583,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"years"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:1572,end:1577,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>years to add</p>
`}]},{name:"countDays",args:[{name:"startDate",type:"Date",deprecated:!1,deprecationMessage:""},{name:"endDate",type:"Date",deprecated:!1,deprecationMessage:""},{name:"absolute",type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false"}],optional:!1,returnType:"number",typeParameters:[],line:77,deprecated:!1,deprecationMessage:"",rawdescription:`

Calculate number of days between two date
`,description:`<p>Calculate number of days between two date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1852,end:1861,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"startDate"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:1846,end:1851,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""},{name:{pos:1874,end:1881,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"endDate"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:1868,end:1873,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""},{name:{pos:1894,end:1902,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"absolute"},type:"boolean",deprecated:!1,deprecationMessage:"",defaultValue:"false",tagName:{pos:1888,end:1893,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>return unsigned result</p>
`}]},{name:"isIsoString",args:[{name:"value",type:"string | null",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:87,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if string is a date with iso format
`,description:`<p>Check if string is a date with iso format</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:2291,end:2296,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"string | null",deprecated:!1,deprecationMessage:"",tagName:{pos:2285,end:2290,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the string</p>
`}]},{name:"isoStringRemoveTime",args:[{name:"isoString",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:107,deprecated:!1,deprecationMessage:"",rawdescription:`

Remove time from an iso date string
`,description:`<p>Remove time from an iso date string</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:2865,end:2874,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"isoString"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:2859,end:2864,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the iso string</p>
`}]},{name:"isoStringSetZeroTime",args:[{name:"isoString",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:122,deprecated:!1,deprecationMessage:"",rawdescription:"\n\nSet iso string hours to 0 and format correctly the date (consider timezone offset)\n```html\n```",description:`<p>Set iso string hours to 0 and format correctly the date (consider timezone offset)</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,modifierKind:[126],jsdoctags:[{name:{pos:3416,end:3425,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"isoString"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:3410,end:3415,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the iso string</p>
`},{tagName:{pos:3339,end:3346,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;2024-03-04T23:00:00.000Z&#39; -&gt; &#39;2024-03-05T00:00:00.000Z&#39;</p>
`}]},{name:"isoStringToDate",args:[{name:"isoString",type:"string | null",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Date | null",typeParameters:[],line:99,deprecated:!1,deprecationMessage:"",rawdescription:`

Convert iso string to Date
`,description:`<p>Convert iso string to Date</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:2634,end:2643,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"isoString"},type:"string | null",deprecated:!1,deprecationMessage:"",tagName:{pos:2628,end:2633,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the iso string</p>
`}]},{name:"nextWeekDayAndTime",args:[{name:"dayOfWeek",type:"number",deprecated:!1,deprecationMessage:""},{name:"hour",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"},{name:"minute",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0"}],optional:!1,returnType:"Date",typeParameters:[],line:174,deprecated:!1,deprecationMessage:"",rawdescription:`

Calculate the next day of week
`,description:`<p>Calculate the next day of week</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:4881,end:4890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"dayOfWeek"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:4875,end:4880,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>Day of week 0=Sunday, 1=Monday...4=Thursday...</p>
`},{name:{pos:4950,end:4954,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hour"},type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{pos:4944,end:4949,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the specif hour</p>
`},{name:{pos:4983,end:4989,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"minute"},type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"0",tagName:{pos:4977,end:4982,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the specific minute</p>
`}]},{name:"timeLeftString",args:[{name:"endDate",type:"Date",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Observable<string>",typeParameters:[],line:137,deprecated:!1,deprecationMessage:"",rawdescription:`

Calculate the date time left and return the string format [d h m s]
`,description:`<p>Calculate the date time left and return the string format [d h m s]</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:3879,end:3886,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"endDate"},type:"Date",deprecated:!1,deprecationMessage:"",tagName:{pos:3873,end:3878,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]}],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]},{name:"ItFileUtils",id:"class-ItFileUtils-2d959a5b29a6e803a3ab7a993a1190392f1554a42b6764765be01559426642a0d91fde5beb04c7604ba994533d004b8e63da100710e1f81fc5b25b2f481ec831",file:"projects/design-angular-kit/src/lib/utils/file-utils.ts",deprecated:!1,deprecationMessage:"",type:"class",sourceCode:`import { Observable } from 'rxjs';

export class ItFileUtils {
  /**
   * Return the file size string
   * @param file the file
   * @param decimals decimal to show
   */
  public static getFileSizeString(file: File, decimals = 2): string {
    const bytes = file.size;
    if (!+bytes) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return \`\${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} \${sizes[i]}\`;
  }

  /**
   * Convert a file to base64 string
   * @param file the base64 string
   */
  public static fileToBase64(file: File): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Observable<string>(observer => {
      reader.onload = e => {
        const target = e.target;
        if (!target?.result || target.result instanceof ArrayBuffer) {
          return observer.error('Error on parse');
        }
        observer.next(target.result);
        observer.complete();
      };
      reader.onerror = error => {
        observer.error(error);
      };
    });
  }

  /**
   * Convert base64 to Blob
   * @param base64 the base64 string
   * @param mimeType the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example 'application/pdf')
   */
  public static base64ToBlob(base64: string, mimeType: string): Blob {
    const byteString = window.atob(base64);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: mimeType });
  }

  /**
   * Convert base64 to File
   * @param base64 the base64 string
   * @param mimeType the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example 'application/pdf')
   * @param filename the file name
   */
  public static base64ToFile(base64: string, mimeType: string, filename: string): File {
    const fileBlob = ItFileUtils.base64ToBlob(base64, mimeType);
    return new File([fileBlob], filename, { type: mimeType });
  }

  /**
   * Extract the MIME type from base64 string
   * @param base64 the base64 string
   */
  public static getMimeTypeFromBase64(base64: string): string | undefined {
    const mime = base64.match(/data:([a-zA-Z0-9]+\\/[a-zA-Z0-9-.+]+).*,.*/);
    return mime?.length ? mime[1] : undefined;
  }
}
`,inputsClass:[],outputsClass:[],properties:[],methods:[{name:"base64ToBlob",args:[{name:"base64",type:"string",deprecated:!1,deprecationMessage:""},{name:"mimeType",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Blob",typeParameters:[],line:51,deprecated:!1,deprecationMessage:"",rawdescription:`

Convert base64 to Blob
`,description:`<p>Convert base64 to Blob</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1270,end:1276,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"base64"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1264,end:1269,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the base64 string</p>
`},{name:{pos:1307,end:1315,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"mimeType"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1301,end:1306,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example &#39;application/pdf&#39;)</p>
`}]},{name:"base64ToFile",args:[{name:"base64",type:"string",deprecated:!1,deprecationMessage:""},{name:"mimeType",type:"string",deprecated:!1,deprecationMessage:""},{name:"filename",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"File",typeParameters:[],line:67,deprecated:!1,deprecationMessage:"",rawdescription:`

Convert base64 to File
`,description:`<p>Convert base64 to File</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1901,end:1907,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"base64"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1895,end:1900,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the base64 string</p>
`},{name:{pos:1938,end:1946,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"mimeType"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1932,end:1937,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> (example &#39;application/pdf&#39;)</p>
`},{name:{pos:2104,end:2112,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"filename"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:2098,end:2103,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the file name</p>
`}]},{name:"fileToBase64",args:[{name:"file",type:"File",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"Observable<string>",typeParameters:[],line:27,deprecated:!1,deprecationMessage:"",rawdescription:`

Convert a file to base64 string
`,description:`<p>Convert a file to base64 string</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:657,end:661,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"file"},type:"File",deprecated:!1,deprecationMessage:"",tagName:{pos:651,end:656,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the base64 string</p>
`}]},{name:"getFileSizeString",args:[{name:"file",type:"File",deprecated:!1,deprecationMessage:""},{name:"decimals",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"2"}],optional:!1,returnType:"string",typeParameters:[],line:9,deprecated:!1,deprecationMessage:"",rawdescription:`

Return the file size string
`,description:`<p>Return the file size string</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:114,end:118,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"file"},type:"File",deprecated:!1,deprecationMessage:"",tagName:{pos:108,end:113,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the file</p>
`},{name:{pos:140,end:148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"decimals"},type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"2",tagName:{pos:134,end:139,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>decimal to show</p>
`}]},{name:"getMimeTypeFromBase64",args:[{name:"base64",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string | undefined",typeParameters:[],line:76,deprecated:!1,deprecationMessage:"",rawdescription:`

Extract the MIME type from base64 string
`,description:`<p>Extract the MIME type from base64 string</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:2419,end:2425,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"base64"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:2413,end:2418,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the base64 string</p>
`}]}],indexSignatures:[],extends:[],hostBindings:[],hostListeners:[]},{name:"ItValidators",id:"class-ItValidators-50d04f50f6e7f89597dd06c036a89917f0768b158108b820255f8d95cfb6a5bc54edcb043315e672d80ae81067efb009049aef031e27c811c974461138b09646",file:"projects/design-angular-kit/src/lib/validators/it-validators.ts",deprecated:!1,deprecationMessage:"",type:"class",sourceCode:`import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {
  CAP_REGEX,
  EMAIL_REGEX,
  IBAN_REGEX,
  ITALIAN_TAX_CODE_REGEX,
  PHONE_NUMBER_REGEX,
  PLATE_REGEX,
  URL_REGEX,
  VAT_NUMBER_REGEX,
} from '../utils/regex';

export class ItValidators {
  public static SpecialCharacterPattern = '!@#$%&*_+=;:|,.';

  /**
   * Static pattern validator with custom error
   * @param regex
   * @param error
   */
  public static customPattern(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  /**
   * Set Validator if the condition is satisfied
   * @param validator the validator to apply if the condition is true
   * @param condition the condition
   */
  public static conditional(validator: ValidatorFn, condition: (control: AbstractControl) => boolean): ValidatorFn {
    return formControl => {
      if (!formControl.parent) {
        return null;
      }
      if (condition(formControl)) {
        return validator(formControl);
      }
      return null;
    };
  }

  /**
   * Check whether our password and confirm password are a match
   * @param control
   * @param passwordControlName the password formControlName
   * @param confirmControlName the confirmPassword formControlName
   */
  public static passwordMatch(
    control: AbstractControl,
    passwordControlName = 'password',
    confirmControlName = 'confirmPassword'
  ): AbstractControl | null {
    const confirmControl = control.get(confirmControlName); // confirmPassword form control
    if (!confirmControl) {
      return null;
    }

    const passwordControl = control.get(passwordControlName); // password form control
    const password = passwordControl?.value; // get password from our password form control

    // compare is the password match
    if ((password && !confirmControl.value) || (confirmControl.value && password !== confirmControl.value)) {
      // if they don't match, set an error in our confirmPassword form control
      confirmControl?.setErrors({ noPasswordMatch: true });
      confirmControl?.markAsTouched();
      return control;
    }

    if (password && passwordControl?.touched) {
      confirmControl?.markAsTouched();
    }
    return null;
  }

  /**
   * Password validator
   * @param minLength minimum password length - default 10
   * @param hasNumber check whether the entered password has a number - default true
   * @param hasCapitalCase check whether the entered password has upper case letter - default true
   * @param hasSmallCase check whether the entered password has a lower-case letter - default true
   * @param hasSpecialCharacters check whether the entered password has a special character - default true
   * @param required the field is required - default true
   */
  public static password(
    minLength = 10,
    hasNumber = true,
    hasCapitalCase = true,
    hasSmallCase = true,
    hasSpecialCharacters = true,
    required = true
  ): ValidatorFn {
    const validators: Array<ValidatorFn> = [Validators.minLength(minLength)];
    if (hasNumber) {
      validators.push(ItValidators.customPattern(/\\d/, { hasNumber }));
    }
    if (hasCapitalCase) {
      validators.push(ItValidators.customPattern(/[A-Z]/, { hasCapitalCase }));
    }
    if (hasSmallCase) {
      validators.push(ItValidators.customPattern(/[a-z]/, { hasSmallCase }));
    }
    if (hasSpecialCharacters) {
      validators.push(ItValidators.customPattern(new RegExp(\`[\${ItValidators.SpecialCharacterPattern}]\`), { hasSpecialCharacters }));
    }
    if (required) {
      validators.push(Validators.required);
    }
    return <ValidatorFn>Validators.compose(validators);
  }

  /**
   * Email validator
   */
  public static get email(): ValidatorFn {
    return <ValidatorFn>Validators.compose([Validators.email, ItValidators.customPattern(EMAIL_REGEX, { invalidEmail: true })]);
  }

  /**
   * Phone number validator
   */
  public static get tel(): ValidatorFn {
    return ItValidators.customPattern(PHONE_NUMBER_REGEX, { invalidTel: true });
  }

  /**
   * URL validator
   */
  public static get url(): ValidatorFn {
    return ItValidators.customPattern(URL_REGEX, { invalidUrl: true });
  }

  /**
   * Italian Tax Code validator
   */
  public static get taxCode(): ValidatorFn {
    return ItValidators.customPattern(ITALIAN_TAX_CODE_REGEX, { invalidTaxCode: true });
  }

  /**
   * VAT Number validator
   */
  public static get vatNumber(): ValidatorFn {
    return ItValidators.customPattern(VAT_NUMBER_REGEX, { invalidVatNumber: true });
  }

  /**
   * Italian Postal Code validator (CAP)
   */
  public static get cap(): ValidatorFn {
    return ItValidators.customPattern(CAP_REGEX, { invalidCap: true });
  }

  /**
   * IBAN validator
   */
  public static get iban(): ValidatorFn {
    return ItValidators.customPattern(IBAN_REGEX, { invalidIban: true });
  }

  /**
   * Italian plate validator
   */
  public static get plate(): ValidatorFn {
    return ItValidators.customPattern(PLATE_REGEX, { invalidPlate: true });
  }

  /**
   * Check if value is a valid RegExp
   */
  public static get regExp(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      try {
        if (control?.value) {
          new RegExp(control.value);
        }
      } catch (e) {
        return { invalidRegex: true };
      }
      return null;
    };
  }
}
`,inputsClass:[],outputsClass:[],properties:[{name:"SpecialCharacterPattern",defaultValue:"'!@#$%&*_+=;:|,.'",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:14,modifierKind:[126]}],methods:[{name:"conditional",args:[{name:"validator",type:"ValidatorFn",deprecated:!1,deprecationMessage:""},{name:"condition",type:"function",deprecated:!1,deprecationMessage:"",function:[{name:"control",type:"AbstractControl",deprecated:!1,deprecationMessage:""}]}],optional:!1,returnType:"ValidatorFn",typeParameters:[],line:41,deprecated:!1,deprecationMessage:"",rawdescription:`

Set Validator if the condition is satisfied
`,description:`<p>Set Validator if the condition is satisfied</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1034,end:1043,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validator"},type:"ValidatorFn",deprecated:!1,deprecationMessage:"",tagName:{pos:1028,end:1033,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validator to apply if the condition is true</p>
`},{name:{pos:1104,end:1113,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"condition"},type:"function",deprecated:!1,deprecationMessage:"",function:[{name:"control",type:"AbstractControl",deprecated:!1,deprecationMessage:""}],tagName:{pos:1098,end:1103,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the condition</p>
`}]},{name:"customPattern",args:[{name:"regex",type:"RegExp",deprecated:!1,deprecationMessage:""},{name:"error",type:"ValidationErrors",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"ValidatorFn",typeParameters:[],line:21,deprecated:!1,deprecationMessage:"",rawdescription:`

Static pattern validator with custom error
`,description:`<p>Static pattern validator with custom error</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:422,end:427,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"regex"},type:"RegExp",deprecated:!1,deprecationMessage:"",tagName:{pos:416,end:421,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""},{name:{pos:440,end:445,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"error"},type:"ValidationErrors",deprecated:!1,deprecationMessage:"",tagName:{pos:434,end:439,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"password",args:[{name:"minLength",type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"10"},{name:"hasNumber",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true"},{name:"hasCapitalCase",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true"},{name:"hasSmallCase",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true"},{name:"hasSpecialCharacters",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true"},{name:"required",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true"}],optional:!1,returnType:"ValidatorFn",typeParameters:[],line:95,deprecated:!1,deprecationMessage:"",rawdescription:`

Password validator
`,description:`<p>Password validator</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:2688,end:2697,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"minLength"},type:"number",deprecated:!1,deprecationMessage:"",defaultValue:"10",tagName:{pos:2682,end:2687,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>minimum password length - default 10</p>
`},{name:{pos:2747,end:2756,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hasNumber"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true",tagName:{pos:2741,end:2746,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>check whether the entered password has a number - default true</p>
`},{name:{pos:2832,end:2846,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hasCapitalCase"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true",tagName:{pos:2826,end:2831,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>check whether the entered password has upper case letter - default true</p>
`},{name:{pos:2931,end:2943,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hasSmallCase"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true",tagName:{pos:2925,end:2930,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>check whether the entered password has a lower-case letter - default true</p>
`},{name:{pos:3030,end:3050,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"hasSpecialCharacters"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true",tagName:{pos:3024,end:3029,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>check whether the entered password has a special character - default true</p>
`},{name:{pos:3137,end:3145,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"required"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"true",tagName:{pos:3131,end:3136,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the field is required - default true</p>
`}]},{name:"passwordMatch",args:[{name:"control",type:"AbstractControl",deprecated:!1,deprecationMessage:""},{name:"passwordControlName",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'password'"},{name:"confirmControlName",type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'confirmPassword'"}],optional:!1,returnType:"AbstractControl | null",typeParameters:[],line:59,deprecated:!1,deprecationMessage:"",rawdescription:`

Check whether our password and confirm password are a match
`,description:`<p>Check whether our password and confirm password are a match</p>
`,modifierKind:[126],jsdoctags:[{name:{pos:1538,end:1545,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"control"},type:"AbstractControl",deprecated:!1,deprecationMessage:"",tagName:{pos:1532,end:1537,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""},{name:{pos:1558,end:1577,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"passwordControlName"},type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'password'",tagName:{pos:1552,end:1557,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the password formControlName</p>
`},{name:{pos:1619,end:1637,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"confirmControlName"},type:"string",deprecated:!1,deprecationMessage:"",defaultValue:"'confirmPassword'",tagName:{pos:1613,end:1618,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the confirmPassword formControlName</p>
`}]}],indexSignatures:[],extends:[],accessors:{email:{name:"email",getSignature:{name:"email",type:"",returnType:"ValidatorFn",line:125,rawdescription:`

Email validator
`,description:`<p>Email validator</p>
`}},tel:{name:"tel",getSignature:{name:"tel",type:"",returnType:"ValidatorFn",line:132,rawdescription:`

Phone number validator
`,description:`<p>Phone number validator</p>
`}},url:{name:"url",getSignature:{name:"url",type:"",returnType:"ValidatorFn",line:139,rawdescription:`

URL validator
`,description:`<p>URL validator</p>
`}},taxCode:{name:"taxCode",getSignature:{name:"taxCode",type:"",returnType:"ValidatorFn",line:146,rawdescription:`

Italian Tax Code validator
`,description:`<p>Italian Tax Code validator</p>
`}},vatNumber:{name:"vatNumber",getSignature:{name:"vatNumber",type:"",returnType:"ValidatorFn",line:153,rawdescription:`

VAT Number validator
`,description:`<p>VAT Number validator</p>
`}},cap:{name:"cap",getSignature:{name:"cap",type:"",returnType:"ValidatorFn",line:160,rawdescription:`

Italian Postal Code validator (CAP)
`,description:`<p>Italian Postal Code validator (CAP)</p>
`}},iban:{name:"iban",getSignature:{name:"iban",type:"",returnType:"ValidatorFn",line:167,rawdescription:`

IBAN validator
`,description:`<p>IBAN validator</p>
`}},plate:{name:"plate",getSignature:{name:"plate",type:"",returnType:"ValidatorFn",line:174,rawdescription:`

Italian plate validator
`,description:`<p>Italian plate validator</p>
`}},regExp:{name:"regExp",getSignature:{name:"regExp",type:"",returnType:"ValidatorFn",line:181,rawdescription:`

Check if value is a valid RegExp
`,description:`<p>Check if value is a valid RegExp</p>
`}}},hostBindings:[],hostListeners:[]}],directives:[{name:"ItAvatarDirective",id:"directive-ItAvatarDirective-1b8d1a23e1846f734f93a4c80f6dae18b33d66e93b49f349ddc552c129480fe22f6de5502d686d230b7e050b220c0d3146a773b854e131c7dd2115cdb72dac7f",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.directive.ts",type:"directive",description:"",rawdescription:`
`,sourceCode:`import { ColorsEnum } from '../../../enums/colors.enums';
import { SizesEnum } from '../../../enums/sizes.enum';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itAvatar]',
  exportAs: 'itAvatar',
})
export class ItAvatarDirective {
  /**
   * Indica il colore dell'avatar. Pu\xF2 assumere i valori:
   * <ul>
   * <li> primary
   * <li> secondary
   * <li> green
   * <li> orange
   * <li> red
   * </ul>
   */
  @Input()
  get color(): string | undefined {
    return this._color;
  }
  set color(value: string | undefined) {
    const colorsKey = value as keyof typeof ColorsEnum;
    if (ColorsEnum[colorsKey]) {
      this._color = ColorsEnum[colorsKey];
    } else {
      this._color = undefined;
    }
  }
  private _color?: ColorsEnum;
  /**
   * Indica la grandezza dell'avatar. Pu\xF2 assumere i valori:
   * <ul>
   * <li> xs
   * <li> sm
   * <li> lg
   * <li> xl
   * <li> xxl
   * </ul>
   */
  @Input()
  get size(): SizesEnum | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    const sizesKey = value as keyof typeof SizesEnum;
    if (SizesEnum[sizesKey]) {
      this._size = SizesEnum[sizesKey];
    } else {
      this._size = undefined;
    }
  }

  private _size?: SizesEnum;

  @HostBinding('class')
  get hostClasses(): string {
    let cssClass = 'avatar';

    if (this.size) {
      cssClass += \` \${this.size}\`;
    }

    if (this.color) {
      cssClass += \` avatar-\${this.color}\`;
    }

    return cssClass;
  }
}
`,selector:"[itAvatar]",providers:[],exportAs:"itAvatar",hostDirectives:[],standalone:!0,inputsClass:[{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il colore dell'avatar. Pu\xF2 assumere i valori:
<ul>
<li> primary
<li> secondary
<li> green
<li> orange
<li> red
</ul>
`,description:`<p>Indica il colore dell&#39;avatar. Pu\xF2 assumere i valori:</p>
<ul>
<li> primary
<li> secondary
<li> green
<li> orange
<li> red
</ul>
`,line:22,type:"string | undefined",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica la grandezza dell'avatar. Pu\xF2 assumere i valori:
<ul>
<li> xs
<li> sm
<li> lg
<li> xl
<li> xxl
</ul>
`,description:`<p>Indica la grandezza dell&#39;avatar. Pu\xF2 assumere i valori:</p>
<ul>
<li> xs
<li> sm
<li> lg
<li> xl
<li> xxl
</ul>
`,line:45,type:"SizesEnum | undefined",decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",deprecated:!1,deprecationMessage:"",line:60,type:"string",decorators:[]}],hostListeners:[],propertiesClass:[{name:"_color",deprecated:!1,deprecationMessage:"",type:"ColorsEnum",optional:!0,description:"",line:33,modifierKind:[123]},{name:"_size",deprecated:!1,deprecationMessage:"",type:"SizesEnum",optional:!0,description:"",line:57,modifierKind:[123]}],methodsClass:[],extends:[],accessors:{color:{name:"color",setSignature:{name:"color",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:25,jsdoctags:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"color",type:"",returnType:"string | undefined",line:22,rawdescription:`

Indica il colore dell'avatar. Pu\xF2 assumere i valori:
<ul>
<li> primary
<li> secondary
<li> green
<li> orange
<li> red
</ul>
`,description:`<p>Indica il colore dell&#39;avatar. Pu\xF2 assumere i valori:</p>
<ul>
<li> primary
<li> secondary
<li> green
<li> orange
<li> red
</ul>
`}},size:{name:"size",setSignature:{name:"size",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:48,jsdoctags:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"size",type:"",returnType:"SizesEnum | undefined",line:45,rawdescription:`

Indica la grandezza dell'avatar. Pu\xF2 assumere i valori:
<ul>
<li> xs
<li> sm
<li> lg
<li> xl
<li> xxl
</ul>
`,description:`<p>Indica la grandezza dell&#39;avatar. Pu\xF2 assumere i valori:</p>
<ul>
<li> xs
<li> sm
<li> lg
<li> xl
<li> xxl
</ul>
`}},hostClasses:{name:"hostClasses",getSignature:{name:"hostClasses",type:"string",returnType:"string",line:60}}}},{name:"ItBadgeDirective",id:"directive-ItBadgeDirective-fd35b972c2f8dbe32f8672bebf0ae0f78aad1cd7da9692e1830ec179ff3a00ee9863b201fbe5cc211eae600bd43a33a50d734824148c73ebc26ccadd2e00cee6",file:"projects/design-angular-kit/src/lib/components/core/badge/badge.directive.ts",type:"directive",description:`<p>Badge</p>
`,rawdescription:`

Badge
`,sourceCode:`import { Directive, HostBinding, Input } from '@angular/core';
import { BadgeColor } from '../../../interfaces/core';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Badge
 * @description Useful for small counters and labels
 */
@Directive({
  standalone: true,
  selector: '[itBadge]',
  exportAs: 'itBadge',
})
export class ItBadgeDirective {
  /**
   * Define the badge color
   * @default undefined
   */
  @Input('itBadge') color: BadgeColor | undefined;

  /**
   * Show rounded badge
   * @default false
   */
  @Input({ transform: inputToBoolean }) rounded?: boolean;

  @HostBinding('class')
  protected get badgeClass(): string {
    let badgeClass = 'badge';
    if (this.rounded) {
      badgeClass += \` rounded-pill\`;
    }
    if (this.color) {
      badgeClass += \` bg-\${this.color}\`;
    }

    return badgeClass;
  }
}
`,selector:"[itBadge]",providers:[],exportAs:"itBadge",hostDirectives:[],standalone:!0,inputsClass:[{name:"itBadge",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:402,end:424,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:403,end:410,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Define the badge color
`,description:`<p>Define the badge color</p>
`,line:19,type:"BadgeColor | undefined",decorators:[]},{required:!1,name:"rounded",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:514,end:532,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:515,end:522,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show rounded badge
`,description:`<p>Show rounded badge</p>
`,line:25,type:"boolean",decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",deprecated:!1,deprecationMessage:"",line:28,type:"string",decorators:[]}],hostListeners:[],propertiesClass:[],methodsClass:[],extends:[],accessors:{badgeClass:{name:"badgeClass",getSignature:{name:"badgeClass",type:"string",returnType:"string",line:28}}}},{name:"ItButtonDirective",id:"directive-ItButtonDirective-def845a5e7571f18d3303efac5c5e556421b31cf4cd66fa1ee92e28184050e383e1315b59b3e9c98bc6139709535922237f35cfa5c2eb1f099daf2f50eead45c",file:"projects/design-angular-kit/src/lib/components/core/button/button.directive.ts",type:"directive",description:`<p>Button</p>
`,rawdescription:`

Button
`,sourceCode:`import { ContentChildren, Directive, Host, HostBinding, HostListener, Input, Optional, QueryList } from '@angular/core';
import { ButtonColor, ButtonSize } from '../../../interfaces/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItProgressButtonComponent } from '../progress-button/progress-button.component';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Button
 * @description Bootstrap italia custom button styles
 */
@Directive({
  standalone: true,
  selector: '[itButton]',
  exportAs: 'itButton',
})
export class ItButtonDirective {
  /**
   * Button color
   * @default undefined
   */
  @Input('itButton') color: ButtonColor | undefined;

  /**
   * Button size
   * @default undefined
   */
  @Input() size: ButtonSize | undefined;

  /**
   * Indicates whether the button occupies all the width available to it.
   * @default undefined
   */
  @Input() block: ButtonSize | undefined;

  /**
   * If button is disabled
   * @default false
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('disabled')
  disabled?: boolean;

  /**
   * The type attribute
   * @default button
   */
  @Input()
  @HostBinding('type')
  type: 'button' | 'reset' | 'submit' = 'button';

  /**
   * The icon children
   * @default undefined
   */
  @ContentChildren(ItIconComponent) protected icons?: QueryList<ItIconComponent>;

  private isFocus = false;

  constructor(@Optional() @Host() private progressButtonComponent: ItProgressButtonComponent) {}

  @HostListener('focus')
  protected onFocus() {
    this.isFocus = true;
  }

  @HostListener('blur')
  protected onBlur() {
    this.isFocus = false;
  }

  @HostBinding('class')
  protected get hostClasses(): string {
    let cssClass = 'btn';

    if (this.color) {
      cssClass += \` btn-\${this.color}\`;
    }

    if (this.size) {
      cssClass += \` btn-\${this.size}\`;
    }

    if (this.block) {
      cssClass += ' btn-block';
    }

    if (this.disabled) {
      cssClass += ' disabled';
    }

    if (this.isFocus) {
      cssClass += ' focus--mouse';
    }

    if (this.icons?.length && !this.progressButtonComponent) {
      cssClass += ' btn-icon';
    }

    if (this.progressButtonComponent) {
      cssClass += ' btn-progress';
    }

    return cssClass;
  }
}
`,selector:"[itButton]",providers:[],exportAs:"itButton",hostDirectives:[],standalone:!0,inputsClass:[{name:"block",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:884,end:906,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:885,end:892,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Indicates whether the button occupies all the width available to it.
`,description:`<p>Indicates whether the button occupies all the width available to it.</p>
`,line:33,type:"ButtonSize | undefined",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:990,end:1008,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:991,end:998,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If button is disabled
`,description:`<p>If button is disabled</p>
`,line:41,type:"boolean",decorators:[]},{name:"itButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:625,end:647,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:626,end:633,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Button color
`,description:`<p>Button color</p>
`,line:21,type:"ButtonColor | undefined",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:732,end:754,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:733,end:740,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Button size
`,description:`<p>Button size</p>
`,line:27,type:"ButtonSize | undefined",decorators:[]},{name:"type",defaultValue:"'button'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1136,end:1155,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1137,end:1144,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>button</p>
`}],rawdescription:`

The type attribute
`,description:`<p>The type attribute</p>
`,line:49,type:'"button" | "reset" | "submit"',decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",deprecated:!1,deprecationMessage:"",line:72,type:"string",decorators:[]}],hostListeners:[{name:"blur",args:[],argsDecorator:[],deprecated:!1,deprecationMessage:"",line:67},{name:"focus",args:[],argsDecorator:[],deprecated:!1,deprecationMessage:"",line:62}],propertiesClass:[{name:"icons",deprecated:!1,deprecationMessage:"",type:"QueryList<ItIconComponent>",optional:!0,description:`<p>The icon children</p>
`,line:55,rawdescription:`

The icon children
`,decorators:[{name:"ContentChildren",stringifiedArguments:"ItIconComponent"}],modifierKind:[170,124],jsdoctags:[{pos:1277,end:1299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1278,end:1285,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}]},{name:"isFocus",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:57,modifierKind:[123]}],methodsClass:[{name:"onBlur",args:[],optional:!1,returnType:"void",typeParameters:[],line:67,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'blur'"}],modifierKind:[170,124]},{name:"onFocus",args:[],optional:!1,returnType:"void",typeParameters:[],line:62,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'focus'"}],modifierKind:[170,124]}],extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"progressButtonComponent",type:"ItProgressButtonComponent",deprecated:!1,deprecationMessage:""}],line:57,jsdoctags:[{name:"progressButtonComponent",type:"ItProgressButtonComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{hostClasses:{name:"hostClasses",getSignature:{name:"hostClasses",type:"string",returnType:"string",line:72}}}},{name:"ItForwardDirective",id:"directive-ItForwardDirective-c80d6f0ed7a8a45e263997104eee8ff6708e50aad05ab6ca699e6f34e761c2c69cfa049e1005d0059c43512f3846b7da2b84497c7e4798d8825766fcc1c99aba",file:"projects/design-angular-kit/src/lib/components/core/forward/forward.directive.ts",type:"directive",description:"",rawdescription:`
`,sourceCode:`import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[itForward]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'forward' },
})
export class ItForwardDirective {
  /**
   * Indica, se HTMLElement, l'elemento a cui navigare, o se stringa, il selettore che selezioner\xE0 l'elemento a cui navigare.
   */
  @Input() set itForward(value: HTMLElement | string | undefined) {
    this._itForward = value;
  }
  get itForward(): HTMLElement | string | undefined {
    return this._itForward;
  }
  private _itForward: HTMLElement | string | undefined = undefined;

  constructor(@Inject(DOCUMENT) private document?: Document) {}

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.preventDefault();
    if (this.itForward) {
      if (typeof this.itForward === 'string') {
        this.document?.querySelector(this.itForward)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else if (this.itForward instanceof HTMLElement) {
        this.itForward.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
}
`,selector:"[itForward]",providers:[],hostDirectives:[],standalone:!0,inputsClass:[{name:"itForward",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica, se HTMLElement, l'elemento a cui navigare, o se stringa, il selettore che selezioner\xE0 l'elemento a cui navigare.
`,description:`<p>Indica, se HTMLElement, l&#39;elemento a cui navigare, o se stringa, il selettore che selezioner\xE0 l&#39;elemento a cui navigare.</p>
`,line:14,type:"HTMLElement | string | undefined",decorators:[]}],outputsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"click",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:25}],propertiesClass:[{name:"_itForward",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"HTMLElement | string | undefined",optional:!1,description:"",line:20,modifierKind:[123]}],methodsClass:[{name:"onClick",args:[{name:"event",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:25,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'click', ['$event']"}],modifierKind:[170],jsdoctags:[{name:"event",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0}],line:20,jsdoctags:[{name:"document",type:"Document",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},accessors:{itForward:{name:"itForward",setSignature:{name:"itForward",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"HTMLElement | string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:14,rawdescription:`

Indica, se HTMLElement, l'elemento a cui navigare, o se stringa, il selettore che selezioner\xE0 l'elemento a cui navigare.
`,description:`<p>Indica, se HTMLElement, l&#39;elemento a cui navigare, o se stringa, il selettore che selezioner\xE0 l&#39;elemento a cui navigare.</p>
`,jsdoctags:[{name:"value",type:"HTMLElement | string | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"itForward",type:"",returnType:"HTMLElement | string | undefined",line:17}}}},{name:"ItPopoverDirective",id:"directive-ItPopoverDirective-797981af421b50ddd7ad6310e9c16c62b2917b194745c0f7cdf4635cf48f527d23b1d9adc8669577df59c2a02b7528b8b6fc9ff2db65b0248b6bd3f9e6d265ac",file:"projects/design-angular-kit/src/lib/components/core/popover/popover.directive.ts",type:"directive",description:"",rawdescription:`
`,sourceCode:`import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ElementPlacement } from '../../../interfaces/core';
import { Popover } from 'bootstrap-italia';
import { inputToBoolean } from '../../../utils/coercion';

@Directive({
  standalone: true,
  selector: '[itPopover]',
  exportAs: 'itPopover',
})
export class ItPopoverDirective implements AfterViewInit, OnDestroy {
  /**
   * Define the popover content
   * @param content the popover content
   */
  @Input('itPopover') set content(content: string) {
    this.element.setAttribute('data-bs-content', content);
  }

  /**
   * Define the popover title
   * @param title the popover title
   */
  @Input() set popoverTitle(title: string | undefined) {
    if (title) {
      this.element.setAttribute('title', title);
      this.element.setAttribute('data-bs-original-title', title);
    }
  }

  /**
   * Define the popover placement
   * @param placement
   */
  @Input() set popoverPlacement(placement: ElementPlacement) {
    this.element.setAttribute('data-bs-placement', placement);
  }

  /**
   * Appends the popover to a specific element.
   * @param container
   */
  @Input() set popoverContainer(container: 'body' | string | undefined) {
    if (container) {
      this.element.setAttribute('data-bs-container', container);
    }
  }

  /**
   * Indicates whether the title contains html
   * @param html true if contain html
   */
  @Input({ transform: inputToBoolean }) set popoverHtml(html: boolean) {
    this.element.setAttribute('data-bs-html', html ? 'true' : 'false');
  }

  /**
   * How popover is triggered
   * - 'hover': To open the Popover on hover of the mouse over the element
   * - 'focus': To ignore popovers on the user's next click of an element other than the toggle element.
   * @param trigger
   */
  @Input() set popoverTrigger(trigger: 'click' | 'hover' | 'focus' | 'manual' | undefined) {
    if (trigger) {
      this.element.setAttribute('data-bs-trigger', trigger);
    }
  }

  /**
   * This event fires immediately when the show method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires immediately when the hide method is called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires after the show event when the tooltip template has been added to the DOM.
   */
  @Output() insertedEvent: EventEmitter<Event> = new EventEmitter();

  private readonly element: HTMLElement;
  private popover?: Popover;

  constructor(private readonly _elementRef: ElementRef) {
    this.element = this._elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.setAttribute('data-bs-toggle', 'popover');
    this.popover = Popover.getOrCreateInstance(this.element);

    this.element.addEventListener('show.bs.popover', event => this.showEvent.emit(event));
    this.element.addEventListener('shown.bs.popover', event => this.shownEvent.emit(event));
    this.element.addEventListener('hide.bs.popover', event => this.hideEvent.emit(event));
    this.element.addEventListener('hidden.bs.popover', event => this.hiddenEvent.emit(event));
    this.element.addEventListener('inserted.bs.popover', event => this.insertedEvent.emit(event));
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  /**
   * Shows the popover of an item.
   */
  public show(): void {
    this.popover?.show();
  }

  /**
   * Hide the popover of an element.
   */
  public hide(): void {
    this.popover?.hide();
  }

  /**
   * Activate / Deactivate the popover of an element
   */
  public toggle(): void {
    this.popover?.toggle();
  }

  /**
   * Hides and destroys the popover of an element.
   */
  public dispose(): void {
    this.popover?.dispose();
  }

  /**
   * Gives the popover of an element a chance to be shown.
   */
  public enable(): void {
    this.popover?.enable();
  }

  /**
   * Removes the ability to show the popover of an element.
   */
  public disable(): void {
    this.popover?.disable();
  }

  /**
   * Toggles the possibility that the popover of an element is shown or hidden.
   */
  public toggleEnabled(): void {
    this.popover?.disable();
  }

  /**
   * Updates the position of an element's popover.
   */
  public update(): void {
    this.popover?.disable();
  }
}
`,selector:"[itPopover]",providers:[],exportAs:"itPopover",hostDirectives:[],standalone:!0,inputsClass:[{name:"itPopover",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:475,end:513,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:476,end:481,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the popover content</p>
`,name:{pos:482,end:489,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"content"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Define the popover content
`,description:`<p>Define the popover content</p>
`,line:16,type:"string",decorators:[]},{name:"popoverContainer",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1169,end:1189,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:1170,end:1175,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:"",name:{pos:1176,end:1185,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"container"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Appends the popover to a specific element.
`,description:`<p>Appends the popover to a specific element.</p>
`,line:43,type:'"body" | string | undefined',decorators:[]},{required:!1,name:"popoverHtml",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1421,end:1457,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:1422,end:1427,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>true if contain html</p>
`,name:{pos:1428,end:1432,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"html"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Indicates whether the title contains html
`,description:`<p>Indicates whether the title contains html</p>
`,line:53,type:"boolean",decorators:[]},{name:"popoverPlacement",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:956,end:976,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:957,end:962,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:"",name:{pos:963,end:972,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"placement"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Define the popover placement
`,description:`<p>Define the popover placement</p>
`,line:35,type:"ElementPlacement",decorators:[]},{name:"popoverTitle",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:674,end:708,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:675,end:680,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the popover title</p>
`,name:{pos:681,end:686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Define the popover title
`,description:`<p>Define the popover title</p>
`,line:24,type:"string | undefined",decorators:[]},{name:"popoverTrigger",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1831,end:1849,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:1832,end:1837,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:"",name:{pos:1838,end:1845,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"trigger"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

How popover is triggered
- 'hover': To open the Popover on hover of the mouse over the element
- 'focus': To ignore popovers on the user's next click of an element other than the toggle element.
`,description:`<p>How popover is triggered</p>
<ul>
<li>&#39;hover&#39;: To open the Popover on hover of the mouse over the element</li>
<li>&#39;focus&#39;: To ignore popovers on the user&#39;s next click of an element other than the toggle element.</li>
</ul>
`,line:63,type:'"click" | "hover" | "focus" | "manual" | undefined',decorators:[]}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).</p>
`,line:87,type:"EventEmitter<Event>"},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the hide method is called.
`,description:`<p>This event fires immediately when the hide method is called.</p>
`,line:82,type:"EventEmitter<Event>"},{name:"insertedEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires after the show event when the tooltip template has been added to the DOM.
`,description:`<p>This event fires after the show event when the tooltip template has been added to the DOM.</p>
`,line:92,type:"EventEmitter<Event>"},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the show method is called.
`,description:`<p>This event fires immediately when the show method is called.</p>
`,line:72,type:"EventEmitter<Event>"},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).</p>
`,line:77,type:"EventEmitter<Event>"}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"element",deprecated:!1,deprecationMessage:"",type:"HTMLElement",optional:!1,description:"",line:94,modifierKind:[123,148]},{name:"popover",deprecated:!1,deprecationMessage:"",type:"Popover",optional:!0,description:"",line:95,modifierKind:[123]}],methodsClass:[{name:"disable",args:[],optional:!1,returnType:"void",typeParameters:[],line:154,deprecated:!1,deprecationMessage:"",rawdescription:`

Removes the ability to show the popover of an element.
`,description:`<p>Removes the ability to show the popover of an element.</p>
`,modifierKind:[125]},{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:140,deprecated:!1,deprecationMessage:"",rawdescription:`

Hides and destroys the popover of an element.
`,description:`<p>Hides and destroys the popover of an element.</p>
`,modifierKind:[125]},{name:"enable",args:[],optional:!1,returnType:"void",typeParameters:[],line:147,deprecated:!1,deprecationMessage:"",rawdescription:`

Gives the popover of an element a chance to be shown.
`,description:`<p>Gives the popover of an element a chance to be shown.</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:126,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the popover of an element.
`,description:`<p>Hide the popover of an element.</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:""},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:119,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows the popover of an item.
`,description:`<p>Shows the popover of an item.</p>
`,modifierKind:[125]},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:133,deprecated:!1,deprecationMessage:"",rawdescription:`

Activate / Deactivate the popover of an element
`,description:`<p>Activate / Deactivate the popover of an element</p>
`,modifierKind:[125]},{name:"toggleEnabled",args:[],optional:!1,returnType:"void",typeParameters:[],line:161,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggles the possibility that the popover of an element is shown or hidden.
`,description:`<p>Toggles the possibility that the popover of an element is shown or hidden.</p>
`,modifierKind:[125]},{name:"update",args:[],optional:!1,returnType:"void",typeParameters:[],line:168,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the position of an element's popover.
`,description:`<p>Updates the position of an element&#39;s popover.</p>
`,modifierKind:[125]}],extends:[],implements:["AfterViewInit","OnDestroy"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:""}],line:95,jsdoctags:[{name:"_elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{content:{name:"content",setSignature:{name:"content",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"content",type:"string",deprecated:!1,deprecationMessage:""}],returnType:"void",line:16,rawdescription:`

Define the popover content
`,description:`<p>Define the popover content</p>
`,jsdoctags:[{name:{pos:482,end:489,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"content"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:476,end:481,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the popover content</p>
`}]}},popoverTitle:{name:"popoverTitle",setSignature:{name:"popoverTitle",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"title",type:"string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:24,rawdescription:`

Define the popover title
`,description:`<p>Define the popover title</p>
`,jsdoctags:[{name:{pos:681,end:686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{pos:675,end:680,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the popover title</p>
`}]}},popoverPlacement:{name:"popoverPlacement",setSignature:{name:"popoverPlacement",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"placement",type:"ElementPlacement",deprecated:!1,deprecationMessage:""}],returnType:"void",line:35,rawdescription:`

Define the popover placement
`,description:`<p>Define the popover placement</p>
`,jsdoctags:[{name:{pos:963,end:972,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"placement"},type:"ElementPlacement",deprecated:!1,deprecationMessage:"",tagName:{pos:957,end:962,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]}},popoverContainer:{name:"popoverContainer",setSignature:{name:"popoverContainer",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"container",type:'"body" | string | undefined',deprecated:!1,deprecationMessage:""}],returnType:"void",line:43,rawdescription:`

Appends the popover to a specific element.
`,description:`<p>Appends the popover to a specific element.</p>
`,jsdoctags:[{name:{pos:1176,end:1185,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"container"},type:'"body" | string | undefined',deprecated:!1,deprecationMessage:"",tagName:{pos:1170,end:1175,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]}},popoverHtml:{name:"popoverHtml",setSignature:{name:"popoverHtml",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"html",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:53,rawdescription:`

Indicates whether the title contains html
`,description:`<p>Indicates whether the title contains html</p>
`,jsdoctags:[{name:{pos:1428,end:1432,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"html"},type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{pos:1422,end:1427,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>true if contain html</p>
`}]}},popoverTrigger:{name:"popoverTrigger",setSignature:{name:"popoverTrigger",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"trigger",type:'"click" | "hover" | "focus" | "manual" | undefined',deprecated:!1,deprecationMessage:""}],returnType:"void",line:63,rawdescription:`

How popover is triggered
- 'hover': To open the Popover on hover of the mouse over the element
- 'focus': To ignore popovers on the user's next click of an element other than the toggle element.
`,description:`<p>How popover is triggered</p>
<ul>
<li>&#39;hover&#39;: To open the Popover on hover of the mouse over the element</li>
<li>&#39;focus&#39;: To ignore popovers on the user&#39;s next click of an element other than the toggle element.</li>
</ul>
`,jsdoctags:[{name:{pos:1838,end:1845,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"trigger"},type:'"click" | "hover" | "focus" | "manual" | undefined',deprecated:!1,deprecationMessage:"",tagName:{pos:1832,end:1837,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]}}}},{name:"ItSortDirective",id:"directive-ItSortDirective-7bd6e86b6518d1a4f88939f633cfdf2e0c5dcb699688d1d04318dbb8680fe11578907b239488e832be031f70ece1c61c1c3a0abc641c91019740394e865d70a1",file:"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts",type:"directive",description:"",rawdescription:`
`,sourceCode:`import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  booleanAttribute,
  HostBinding,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  IT_SORT_DEFAULT_OPTIONS,
  ItSortable,
  ItSortDefaultOptions,
  ItSortEvent,
  SortDirection,
} from '../../../../interfaces/sortable-table';

@Directive({
  standalone: true,
  selector: '[itSort]',
  exportAs: 'itSort',
})
export class ItSortDirective implements OnChanges, OnDestroy {
  /** The id of the most recently sorted ItSortable. */
  @Input('itSortActive') active?: string;

  /**
   * The direction to set when an MatSortable is initially sorted.
   * May be overridden by the MatSortable's sort start.
   */
  @Input('itSortStart') start: SortDirection = 'asc';

  /** The sort direction of the currently active ItSortable. */
  @Input('itSortDirection')
  get direction(): SortDirection {
    return this._direction;
  }
  set direction(direction: SortDirection) {
    this._direction = direction;
  }
  private _direction: SortDirection;

  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the ItSortable's disable clear input.
   */
  @Input({ transform: booleanAttribute })
  disableSortClear?: boolean;

  /** Whether the sortable is disabled. */
  @Input({ transform: booleanAttribute })
  sortDisabled: boolean = false;

  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output() readonly sortChange: EventEmitter<ItSortEvent> = new EventEmitter<ItSortEvent>();

  @HostBinding('class')
  public readonly sortDirectiveClass = 'it-sort';

  /** Collection of all registered sortables that this directive manages. */
  protected sortables = new Map<string, ItSortable>();

  /** Used to notify any child components listening to state changes. */
  readonly _stateChanges = new Subject<void>();

  constructor(
    @Optional()
    @Inject(IT_SORT_DEFAULT_OPTIONS)
    private _defaultOptions?: ItSortDefaultOptions
  ) {}

  /**
   * Register function to be used by the contained ItSortables. Adds the ItSortable to the
   * collection of ItSortables.
   */
  register(sortable: ItSortable): void {
    this.sortables.set(sortable.id, sortable);
  }

  /**
   * Unregister function to be used by the contained ItSortables. Removes the ItSortable from the
   * collection of contained ItSortables.
   */
  deregister(sortable: ItSortable): void {
    this.sortables.delete(sortable.id);
  }

  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable: ItSortable): void {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }

    this.sortChange.emit({ active: this.active, direction: this.direction });
  }

  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable: ItSortable): SortDirection {
    if (!sortable) {
      return undefined;
    }

    // Get the sort direction cycle with the potential sortable overrides.
    const disableClear = sortable?.disableSortClear ?? this.disableSortClear ?? !!this._defaultOptions?.disableClear;
    const sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);

    // Get and return the next direction in the cycle
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
}

/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start: SortDirection, disableClear: boolean): Array<SortDirection | undefined> {
  const sortOrder: Array<SortDirection> = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push(undefined);
  }

  return sortOrder;
}
`,selector:"[itSort]",providers:[],exportAs:"itSort",hostDirectives:[],standalone:!0,inputsClass:[{required:!1,name:"disableSortClear",deprecated:!1,deprecationMessage:"",rawdescription:`

Whether to disable the user from clearing the sort by finishing the sort direction cycle.
May be overridden by the ItSortable's disable clear input.
`,description:`<p>Whether to disable the user from clearing the sort by finishing the sort direction cycle.
May be overridden by the ItSortable&#39;s disable clear input.</p>
`,line:52,type:"boolean",decorators:[]},{name:"itSortActive",deprecated:!1,deprecationMessage:"",rawdescription:`
The id of the most recently sorted ItSortable.`,description:`<p>The id of the most recently sorted ItSortable.</p>
`,line:29,type:"string",decorators:[]},{name:"itSortDirection",deprecated:!1,deprecationMessage:"",rawdescription:`
The sort direction of the currently active ItSortable.`,description:`<p>The sort direction of the currently active ItSortable.</p>
`,line:39,type:"SortDirection",decorators:[]},{name:"itSortStart",defaultValue:"'asc'",deprecated:!1,deprecationMessage:"",rawdescription:`

The direction to set when an MatSortable is initially sorted.
May be overridden by the MatSortable's sort start.
`,description:`<p>The direction to set when an MatSortable is initially sorted.
May be overridden by the MatSortable&#39;s sort start.</p>
`,line:35,type:"SortDirection",decorators:[]},{required:!1,name:"sortDisabled",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`
Whether the sortable is disabled.`,description:`<p>Whether the sortable is disabled.</p>
`,line:56,type:"boolean",decorators:[]}],outputsClass:[{name:"sortChange",defaultValue:"new EventEmitter<ItSortEvent>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Event emitted when the user changes either the active sort or sort direction.`,description:`<p>Event emitted when the user changes either the active sort or sort direction.</p>
`,line:59,type:"EventEmitter<ItSortEvent>"}],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",defaultValue:"'it-sort'",deprecated:!1,deprecationMessage:"",line:62,type:'"it-sort"',decorators:[]}],hostListeners:[],propertiesClass:[{name:"_direction",deprecated:!1,deprecationMessage:"",type:"SortDirection",optional:!1,description:"",line:45,modifierKind:[123]},{name:"_stateChanges",defaultValue:"new Subject<void>()",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:`<p>Used to notify any child components listening to state changes.</p>
`,line:68,rawdescription:`
Used to notify any child components listening to state changes.`,modifierKind:[148]},{name:"sortables",defaultValue:"new Map<string, ItSortable>()",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:`<p>Collection of all registered sortables that this directive manages.</p>
`,line:65,rawdescription:`
Collection of all registered sortables that this directive manages.`,modifierKind:[124]},{name:"sortDirectiveClass",defaultValue:"'it-sort'",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:62,decorators:[{name:"HostBinding",stringifiedArguments:"'class'"}],modifierKind:[170,125,148]}],methodsClass:[{name:"deregister",args:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:88,deprecated:!1,deprecationMessage:"",rawdescription:`

Unregister function to be used by the contained ItSortables. Removes the ItSortable from the
collection of contained ItSortables.
`,description:`<p>Unregister function to be used by the contained ItSortables. Removes the ItSortable from the
collection of contained ItSortables.</p>
`,jsdoctags:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getNextSortDirection",args:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"SortDirection",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",rawdescription:`
Returns the next sort direction of the active sortable, checking for potential overrides.`,description:`<p>Returns the next sort direction of the active sortable, checking for potential overrides.</p>
`,jsdoctags:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngOnChanges",args:[],optional:!1,returnType:"void",typeParameters:[],line:122,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:126,deprecated:!1,deprecationMessage:""},{name:"register",args:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:80,deprecated:!1,deprecationMessage:"",rawdescription:`

Register function to be used by the contained ItSortables. Adds the ItSortable to the
collection of ItSortables.
`,description:`<p>Register function to be used by the contained ItSortables. Adds the ItSortable to the
collection of ItSortables.</p>
`,jsdoctags:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"sort",args:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:93,deprecated:!1,deprecationMessage:"",rawdescription:`
Sets the active sort id and determines the new sort direction.`,description:`<p>Sets the active sort id and determines the new sort direction.</p>
`,jsdoctags:[{name:"sortable",type:"ItSortable",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],extends:[],implements:["OnChanges","OnDestroy"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_defaultOptions",type:"ItSortDefaultOptions",deprecated:!1,deprecationMessage:"",optional:!0}],line:68,jsdoctags:[{name:"_defaultOptions",type:"ItSortDefaultOptions",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},accessors:{direction:{name:"direction",setSignature:{name:"direction",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"direction",type:"SortDirection",deprecated:!1,deprecationMessage:""}],returnType:"void",line:42,jsdoctags:[{name:"direction",type:"SortDirection",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"direction",type:"",returnType:"SortDirection",line:39,rawdescription:`
The sort direction of the currently active ItSortable.`,description:`<p>The sort direction of the currently active ItSortable.</p>
`}}}},{name:"ItTooltipDirective",id:"directive-ItTooltipDirective-24f3f866c081542a507e7e98237e1853e5524b0778b90fc7c4edd5f63e197c86a8995262b539d92c251f06620a8974a03b5c8fd2db9503ad38eb482ae44a0e7f",file:"projects/design-angular-kit/src/lib/components/core/tooltip/tooltip.directive.ts",type:"directive",description:"",rawdescription:`
`,sourceCode:`import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ElementPlacement } from '../../../interfaces/core';
import { Tooltip } from 'bootstrap-italia';
import { inputToBoolean } from '../../../utils/coercion';

@Directive({
  standalone: true,
  selector: '[itTooltip]',
  exportAs: 'itTooltip',
})
export class ItTooltipDirective implements AfterViewInit, OnDestroy {
  /**
   * Define the tooltip title
   * @param title the tooltip title
   */
  @Input('itTooltip') set title(title: string | undefined) {
    if (title) {
      // this.element.setAttribute("title", title);
      this.element.setAttribute('data-bs-original-title', title);
    }
  }

  /**
   * Define the tooltip placement
   * @param placement
   */
  @Input() set tooltipPlacement(placement: ElementPlacement) {
    this.element.setAttribute('data-bs-placement', placement);
  }

  /**
   * Indicates whether the title contains html
   * @param html true if contain html
   */
  @Input({ transform: inputToBoolean }) set tooltipHtml(html: boolean) {
    this.element.setAttribute('data-bs-html', html ? 'true' : 'false');
  }

  /**
   * This event fires immediately when the show method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires immediately when the hide method is called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires after the show event when the tooltip template has been added to the DOM.
   */
  @Output() insertedEvent: EventEmitter<Event> = new EventEmitter();

  private readonly element: HTMLElement;
  private tooltip?: Tooltip;

  constructor(private readonly _elementRef: ElementRef) {
    this.element = this._elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.setAttribute('data-bs-toggle', 'tooltip');
    this.tooltip = Tooltip.getOrCreateInstance(this.element);

    this.element.addEventListener('show.bs.tooltip', event => this.showEvent.emit(event));
    this.element.addEventListener('shown.bs.tooltip', event => this.shownEvent.emit(event));
    this.element.addEventListener('hide.bs.tooltip', event => this.hideEvent.emit(event));
    this.element.addEventListener('hidden.bs.tooltip', event => this.hiddenEvent.emit(event));
    this.element.addEventListener('inserted.bs.tooltip', event => this.insertedEvent.emit(event));
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  /**
   * Shows the tooltip of an item.
   */
  public show(): void {
    this.tooltip?.show();
  }

  /**
   * Hide the tooltip of an element.
   */
  public hide(): void {
    this.tooltip?.hide();
  }

  /**
   * Activate / Deactivate the tooltip of an element
   */
  public toggle(): void {
    this.tooltip?.toggle();
  }

  /**
   * Hides and destroys the tooltip of an element.
   */
  public dispose(): void {
    this.tooltip?.dispose();
  }

  /**
   * Gives the tooltip of an element a chance to be shown.
   */
  public enable(): void {
    this.tooltip?.enable();
  }

  /**
   * Removes the ability to show the tooltip of an element.
   */
  public disable(): void {
    this.tooltip?.disable();
  }

  /**
   * Toggles the possibility that the tooltip of an element is shown or hidden.
   */
  public toggleEnabled(): void {
    this.tooltip?.disable();
  }

  /**
   * Updates the position of an element's tooltip.
   */
  public update(): void {
    this.tooltip?.disable();
  }
}
`,selector:"[itTooltip]",providers:[],exportAs:"itTooltip",hostDirectives:[],standalone:!0,inputsClass:[{name:"itTooltip",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:473,end:507,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:474,end:479,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the tooltip title</p>
`,name:{pos:480,end:485,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Define the tooltip title
`,description:`<p>Define the tooltip title</p>
`,line:16,type:"string | undefined",decorators:[]},{required:!1,name:"tooltipHtml",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:974,end:1010,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:975,end:980,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>true if contain html</p>
`,name:{pos:981,end:985,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"html"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Indicates whether the title contains html
`,description:`<p>Indicates whether the title contains html</p>
`,line:35,type:"boolean",decorators:[]},{name:"tooltipPlacement",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:762,end:782,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:763,end:768,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:"",name:{pos:769,end:778,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"placement"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

Define the tooltip placement
`,description:`<p>Define the tooltip placement</p>
`,line:27,type:"ElementPlacement",decorators:[]}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).</p>
`,line:57,type:"EventEmitter<Event>"},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the hide method is called.
`,description:`<p>This event fires immediately when the hide method is called.</p>
`,line:52,type:"EventEmitter<Event>"},{name:"insertedEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires after the show event when the tooltip template has been added to the DOM.
`,description:`<p>This event fires after the show event when the tooltip template has been added to the DOM.</p>
`,line:62,type:"EventEmitter<Event>"},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the show method is called.
`,description:`<p>This event fires immediately when the show method is called.</p>
`,line:42,type:"EventEmitter<Event>"},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).</p>
`,line:47,type:"EventEmitter<Event>"}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[{name:"element",deprecated:!1,deprecationMessage:"",type:"HTMLElement",optional:!1,description:"",line:64,modifierKind:[123,148]},{name:"tooltip",deprecated:!1,deprecationMessage:"",type:"Tooltip",optional:!0,description:"",line:65,modifierKind:[123]}],methodsClass:[{name:"disable",args:[],optional:!1,returnType:"void",typeParameters:[],line:124,deprecated:!1,deprecationMessage:"",rawdescription:`

Removes the ability to show the tooltip of an element.
`,description:`<p>Removes the ability to show the tooltip of an element.</p>
`,modifierKind:[125]},{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:110,deprecated:!1,deprecationMessage:"",rawdescription:`

Hides and destroys the tooltip of an element.
`,description:`<p>Hides and destroys the tooltip of an element.</p>
`,modifierKind:[125]},{name:"enable",args:[],optional:!1,returnType:"void",typeParameters:[],line:117,deprecated:!1,deprecationMessage:"",rawdescription:`

Gives the tooltip of an element a chance to be shown.
`,description:`<p>Gives the tooltip of an element a chance to be shown.</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the tooltip of an element.
`,description:`<p>Hide the tooltip of an element.</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:71,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:82,deprecated:!1,deprecationMessage:""},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:89,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows the tooltip of an item.
`,description:`<p>Shows the tooltip of an item.</p>
`,modifierKind:[125]},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:103,deprecated:!1,deprecationMessage:"",rawdescription:`

Activate / Deactivate the tooltip of an element
`,description:`<p>Activate / Deactivate the tooltip of an element</p>
`,modifierKind:[125]},{name:"toggleEnabled",args:[],optional:!1,returnType:"void",typeParameters:[],line:131,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggles the possibility that the tooltip of an element is shown or hidden.
`,description:`<p>Toggles the possibility that the tooltip of an element is shown or hidden.</p>
`,modifierKind:[125]},{name:"update",args:[],optional:!1,returnType:"void",typeParameters:[],line:138,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the position of an element's tooltip.
`,description:`<p>Updates the position of an element&#39;s tooltip.</p>
`,modifierKind:[125]}],extends:[],implements:["AfterViewInit","OnDestroy"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:""}],line:65,jsdoctags:[{name:"_elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},accessors:{title:{name:"title",setSignature:{name:"title",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"title",type:"string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:16,rawdescription:`

Define the tooltip title
`,description:`<p>Define the tooltip title</p>
`,jsdoctags:[{name:{pos:480,end:485,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"title"},type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{pos:474,end:479,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the tooltip title</p>
`}]}},tooltipPlacement:{name:"tooltipPlacement",setSignature:{name:"tooltipPlacement",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"placement",type:"ElementPlacement",deprecated:!1,deprecationMessage:""}],returnType:"void",line:27,rawdescription:`

Define the tooltip placement
`,description:`<p>Define the tooltip placement</p>
`,jsdoctags:[{name:{pos:769,end:778,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"placement"},type:"ElementPlacement",deprecated:!1,deprecationMessage:"",tagName:{pos:763,end:768,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]}},tooltipHtml:{name:"tooltipHtml",setSignature:{name:"tooltipHtml",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"html",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:35,rawdescription:`

Indicates whether the title contains html
`,description:`<p>Indicates whether the title contains html</p>
`,jsdoctags:[{name:{pos:981,end:985,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"html"},type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{pos:975,end:980,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>true if contain html</p>
`}]}}}}],components:[{name:"ItAbstractComponent",id:"component-ItAbstractComponent-91eaa6ebb8b6695c988cf928fbd707bf6b846fe575973e7620d5640f07a24988a3e6d143e38e8cf15ffaf4e8043e13b8e3217873bb2c4024c5d99d2e2691872f",file:"projects/design-angular-kit/src/lib/abstracts/abstract.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],styleUrls:[],styles:[],template:"",templateUrl:[],viewProviders:[],hostDirectives:[],inputsClass:[{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[]}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>"}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148]},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148]},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148]},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}]}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:""},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Component({ template: '' })
export abstract class ItAbstractComponent implements AfterViewInit, OnChanges {
  /**
   * The element ID
   */
  @Input() id: string = this.getDefaultId();

  /**
   * Fired when component input attributes was changed
   */
  @Output() public valueChanges: EventEmitter<void>;

  /**
   * Counter of active instances
   * @private
   */
  private static instances = 0;

  protected readonly _renderer: Renderer2; // Injected
  protected readonly _elementRef: ElementRef; // Injected
  protected readonly _changeDetectorRef: ChangeDetectorRef; // Injected

  constructor() {
    this._renderer = inject(Renderer2);
    this._elementRef = inject(ElementRef);
    this._changeDetectorRef = inject(ChangeDetectorRef);

    this.valueChanges = new EventEmitter<void>();
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'id');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.valueChanges.next(); // The inputs were changed
  }

  /**
   * Generate unique id for components
   * @private
   */
  private getDefaultId(): string {
    const name = this.constructor.name.replace('Component', '');
    const kebabName = name.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
    return \`\${kebabName}-\${ItAbstractComponent.instances++}\`;
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:35},extends:[],implements:["AfterViewInit","OnChanges"]},{name:"ItAbstractFormComponent",id:"component-ItAbstractFormComponent-e480ead106528d3597bb9442fee0eb6722514f96db28573d7999518169b8d2a320680c8ce5d9a321f80b37c426279ab019835bcd65ecb957e483d7a4b79e8193",file:"projects/design-angular-kit/src/lib/abstracts/abstract-form.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],styleUrls:[],styles:[],template:"",templateUrl:[],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[]},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[]},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124]},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}]},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}]},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}]},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:85,deprecated:!1,deprecationMessage:""},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ControlValueAccessor, FormControl, NgControl, ValidatorFn } from '@angular/forms';
import { Component, DoCheck, Input, OnInit, Optional, Self } from '@angular/core';
import { ItAbstractComponent } from './abstract.component';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { inputToBoolean } from '../utils/coercion';

@Component({ template: '' })
export abstract class ItAbstractFormComponent<T = any> extends ItAbstractComponent implements OnInit, ControlValueAccessor, DoCheck {
  /**
   * The label of form control
   */
  @Input() label?: string;

  /**
   * Validation color display mode (validation triggered if field is touched or not pristine)
   * - <b>true</b>: Always show the validation color
   * - <b>false</b>: Never show validation color
   * - <b>only-valid</b>: Show only valid validation color
   * - <b>only-invalid</b>: Show only invalid validation color
   * @default <b>true</b>: Always show the validation color
   */
  @Input() validationMode: boolean | 'only-valid' | 'only-invalid' = true;

  /**
   * Set the disabled state
   */
  @Input({ transform: inputToBoolean }) set disabled(isDisabled: boolean) {
    this.setDisabledState(isDisabled);
  }

  /**
   * Internal form control
   */
  protected control: FormControl<T>;

  constructor(
    protected readonly _translateService: TranslateService,
    @Self() @Optional() protected readonly _ngControl: NgControl
  ) {
    super();
    this.control = new FormControl();
    this._ngControl && (this._ngControl.valueAccessor = this);
  }

  /**
   * Check if field is invalid (Validation failed)
   */
  get isInvalid(): boolean | undefined {
    if (this.validationMode === 'only-valid' || (this.validationMode !== 'only-invalid' && !this.validationMode)) {
      return undefined;
    }

    if (this._ngControl) {
      return this._ngControl.invalid === true && (!this._ngControl.pristine || this._ngControl.touched === true);
    }
    return this.control.invalid && (!this.control.pristine || this.control.touched);
  }

  /**
   * Check if field is valid (Validation successful)
   */
  get isValid(): boolean | undefined {
    if (this.validationMode === 'only-invalid' || (this.validationMode !== 'only-valid' && !this.validationMode)) {
      return undefined;
    }

    if (this._ngControl) {
      return this._ngControl.valid === true && (!this._ngControl.pristine || this._ngControl.touched === true);
    }
    return this.control.valid && (!this.control.pristine || this.control.touched);
  }

  /**
   * Return the invalid message string from TranslateService
   */
  get invalidMessage(): Observable<string> {
    if (this.hasError('required')) {
      return this._translateService.get('it.errors.required-field');
    }

    return this._translateService.get('it.errors.invalid-field');
  }

  ngOnInit(): void {
    if (this._ngControl?.control) {
      this.control.setValidators((this._ngControl.control as FormControl).validator);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: T) => {};

  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      return this.control.disable();
    }
    this.control.enable();
  }

  writeValue(value: T): void {
    this.control.setValue(value, { emitEvent: false });
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Mark the control as touched
   */
  markAsTouched(): void {
    if (!this.control.touched) {
      this.onTouched();
    }
  }

  /**
   * Fired to check if form control is touched
   */
  ngDoCheck() {
    if (this._ngControl?.control) {
      const ngControl = this._ngControl.control;
      if (this.control.touched !== ngControl.touched) {
        if (ngControl.touched) {
          this.control.markAsTouched();
        } else {
          this.control.markAsUntouched();
        }
      }
      if (this.control.pristine !== ngControl.pristine) {
        if (ngControl.pristine) {
          this.control.markAsPristine();
        } else {
          this.control.markAsDirty();
        }
      }
    }
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Add the validators in control and parent control
   * @param validators the validators
   * @protected
   */
  protected addValidators(validators: ValidatorFn | ValidatorFn[]): void {
    if (!Array.isArray(validators)) {
      validators = [validators];
    }

    validators.forEach(validator => {
      if (!this.control.hasValidator(validator)) {
        this.control.addValidators(validator);
      }

      if (this._ngControl?.control && !this._ngControl.control.hasValidator(validator)) {
        this._ngControl.control.addValidators(validator);
      }
    });
  }

  /**
   * Reports whether the control with the given path has the error specified. <br/>
   * If the control is not present, false is returned.
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   * @returns whether the given error is present in the control at the given path.
   */
  public hasError(errorCode: string, path?: Array<string | number> | string): boolean {
    if (this._ngControl) {
      return this._ngControl.hasError(errorCode, path);
    }
    return this.control.hasError(errorCode, path);
  }

  /**
   * Reports error data for the control with the given path.
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  public getError(errorCode: string, path?: Array<string | number> | string): any {
    if (this._ngControl) {
      return this._ngControl.getError(errorCode, path);
    }
    return this.control.getError(errorCode, path);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_translateService",type:"TranslateService",deprecated:!1,deprecationMessage:""},{name:"_ngControl",type:"NgControl",deprecated:!1,deprecationMessage:""}],line:35,jsdoctags:[{name:"_translateService",type:"TranslateService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"_ngControl",type:"NgControl",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:["ItAbstractComponent"],implements:["OnInit","ControlValueAccessor","DoCheck"],accessors:{disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:28,rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}},isInvalid:{name:"isInvalid",getSignature:{name:"isInvalid",type:"",returnType:"boolean | undefined",line:49,rawdescription:`

Check if field is invalid (Validation failed)
`,description:`<p>Check if field is invalid (Validation failed)</p>
`}},isValid:{name:"isValid",getSignature:{name:"isValid",type:"",returnType:"boolean | undefined",line:63,rawdescription:`

Check if field is valid (Validation successful)
`,description:`<p>Check if field is valid (Validation successful)</p>
`}},invalidMessage:{name:"invalidMessage",getSignature:{name:"invalidMessage",type:"",returnType:"Observable<string>",line:77,rawdescription:`

Return the invalid message string from TranslateService
`,description:`<p>Return the invalid message string from TranslateService</p>
`}}}},{name:"ItAccordionComponent",id:"component-ItAccordionComponent-1d09a45a1ed761307691119303cf6854e5342aa2e93a0e0ba59687179a3581c204901c127c37f87b9c123076cdb0db1f1349d876bff5118d1f26a6d651dfa831",file:"projects/design-angular-kit/src/lib/components/core/accordion/accordion.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itAccordion",inputs:[],outputs:[],providers:[],selector:"it-accordion",styleUrls:[],styles:[],templateUrl:["./accordion.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!0,name:"title",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Accordion Title
`,description:`<p>Accordion Title</p>
`,line:20,type:"string",decorators:[]},{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:30,type:"string",decorators:[],inheritance:{file:"ItCollapseComponent"}},{required:!1,name:"multi",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:644,end:662,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:645,end:652,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Enable multiple collapse
`,description:`<p>Enable multiple collapse</p>
`,line:19,type:"boolean",decorators:[],inheritance:{file:"ItCollapseComponent"}},{required:!1,name:"opened",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:785,end:803,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:786,end:793,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Toggles the collapsible element on invocation
`,description:`<p>Toggles the collapsible element on invocation</p>
`,line:25,type:"boolean",decorators:[],inheritance:{file:"ItCollapseComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).</p>
`,line:50,type:"EventEmitter<Event>",inheritance:{file:"ItCollapseComponent"}},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the hide method is called.
`,description:`<p>This event fires immediately when the hide method is called.</p>
`,line:45,type:"EventEmitter<Event>",inheritance:{file:"ItCollapseComponent"}},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the show method is called.
`,description:`<p>This event fires immediately when the show method is called.</p>
`,line:35,type:"EventEmitter<Event>",inheritance:{file:"ItCollapseComponent"}},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).</p>
`,line:40,type:"EventEmitter<Event>",inheritance:{file:"ItCollapseComponent"}},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"collapseDiv",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!0,description:"",line:22,decorators:[{name:"ViewChild",stringifiedArguments:"'collapse'"}],modifierKind:[170,124,164],inheritance:{file:"ItCollapseComponent"}},{name:"isCollapsed",defaultValue:"true",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:24,modifierKind:[124]},{name:"collapse",deprecated:!1,deprecationMessage:"",type:"Collapse",optional:!0,description:"",line:52,modifierKind:[123],inheritance:{file:"ItCollapseComponent"}},{name:"open",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:54,modifierKind:[123],inheritance:{file:"ItCollapseComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:26,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:121,deprecated:!1,deprecationMessage:"",rawdescription:`

Eliminates the possibility of an item being resealable
`,description:`<p>Eliminates the possibility of an item being resealable</p>
`,modifierKind:[125],inheritance:{file:"ItCollapseComponent"}},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:106,deprecated:!1,deprecationMessage:"",rawdescription:`

Hides a resealable item
NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)
`,description:`<p>Hides a resealable item
NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)</p>
`,modifierKind:[125],inheritance:{file:"ItCollapseComponent"}},{name:"isOpen",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:90,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows if collapse is open or not
`,description:`<p>Shows if collapse is open or not</p>
`,modifierKind:[125],inheritance:{file:"ItCollapseComponent"}},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:98,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows a resealable item
NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).
`,description:`<p>Shows a resealable item
NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).</p>
`,modifierKind:[125],inheritance:{file:"ItCollapseComponent"}},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:114,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggle a collapsible item to show or hide it.
NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)
`,description:`<p>Toggle a collapsible item to show or hide it.
NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)</p>
`,modifierKind:[125],inheritance:{file:"ItCollapseComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:`<p>Accordion</p>
`,rawdescription:`

Accordion
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ItCollapseComponent } from '../collapse/collapse.component';

/**
 * Accordion
 * @description Build vertically collapsible accordions based on Collapse.
 */
@Component({
  standalone: true,
  selector: 'it-accordion',
  templateUrl: './accordion.component.html',
  exportAs: 'itAccordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItAccordionComponent extends ItCollapseComponent implements AfterViewInit {
  /**
   * Accordion Title
   */
  @Input({ required: true }) title!: string;

  @ViewChild('collapse') protected override collapseDiv?: ElementRef<HTMLDivElement>;

  protected isCollapsed: boolean = true;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    this.isCollapsed = !this.opened;
    this.hideEvent.subscribe(() => {
      this.isCollapsed = true;
      this._changeDetectorRef.detectChanges();
    });
    this.showEvent.subscribe(() => {
      this.isCollapsed = false;
      this._changeDetectorRef.detectChanges();
    });
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItCollapseComponent"],implements:["AfterViewInit"],templateData:`<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="collapse-{{ id }}-heading">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        [class.collapsed]="isCollapsed"
        [attr.data-bs-target]="'#collapse-' + id"
        [attr.aria-controls]="'collapse-' + id"
        [attr.aria-expanded]="opened ? 'true' : 'false'">
        {{ title }}
      </button>
    </h2>

    <div
      #collapse
      id="collapse-{{ id }}"
      role="region"
      class="accordion-collapse collapse {{ class }}"
      [attr.aria-labelledby]="'collapse-' + id + '-heading'">
      <div class="accordion-body">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
</div>
`},{name:"ItAlertComponent",id:"component-ItAlertComponent-6a2dfb7a8b945261bb83ebec71b5a70975b1acf14db954e473dc60e9a35f925a46ab9888009e7f99668889dfc1dcb1c4806a236de85f455dd11e18156f172c12",file:"projects/design-angular-kit/src/lib/components/core/alert/alert.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itAlert",inputs:[],outputs:[],providers:[],selector:"it-alert",styleUrls:["./alert.component.scss"],styles:[],templateUrl:["./alert.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"color",defaultValue:"'info'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:960,end:977,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:961,end:968,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>info</p>
`}],rawdescription:`

The alert color
`,description:`<p>The alert color</p>
`,line:27,type:"AlertColor",decorators:[]},{required:!1,name:"dismissible",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1061,end:1079,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1062,end:1069,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Inserts the close button
`,description:`<p>Inserts the close button</p>
`,line:33,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"closedEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires when the alert has been closed (it will wait for CSS transitions to complete).
`,description:`<p>This event fires when the alert has been closed (it will wait for CSS transitions to complete).</p>
`,line:43,type:"EventEmitter<Event>"},{name:"closeEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the instance's close method is called.
`,description:`<p>This event fires immediately when the instance&#39;s close method is called.</p>
`,line:38,type:"EventEmitter<Event>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"alert",deprecated:!1,deprecationMessage:"",type:"Alert",optional:!0,description:"",line:45,modifierKind:[123]},{name:"alertElement",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!0,description:"",line:47,decorators:[{name:"ViewChild",stringifiedArguments:"'alertElement'"}],modifierKind:[170,123]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"close",args:[],optional:!1,returnType:"void",typeParameters:[],line:65,deprecated:!1,deprecationMessage:"",rawdescription:"\n\nClose an alert by removing it from the DOM.\nIf the `.fade` and `.show` classes are present in the element, the alert will be closed with a disappearing effect.\n",description:`<p>Close an alert by removing it from the DOM.
If the <code>.fade</code> and <code>.show</code> classes are present in the element, the alert will be closed with a disappearing effect.</p>
`,modifierKind:[125]},{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:72,deprecated:!1,deprecationMessage:"",rawdescription:`

The alert is removed
`,description:`<p>The alert is removed</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:49,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"ItIconComponent",type:"component"}],description:`<p>Alert</p>
`,rawdescription:`

Alert
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AlertColor } from '../../../interfaces/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Alert } from 'bootstrap-italia';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Alert
 * @description You can provide feedback to the user via alert messages.
 */
@Component({
  standalone: true,
  selector: 'it-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'itAlert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent],
})
export class ItAlertComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * The alert color
   * @default info
   */
  @Input() color: AlertColor = 'info';

  /**
   * Inserts the close button
   * @default false
   */
  @Input({ transform: inputToBoolean }) dismissible?: boolean;

  /**
   * This event fires immediately when the instance's close method is called.
   */
  @Output() public closeEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the alert has been closed (it will wait for CSS transitions to complete).
   */
  @Output() public closedEvent: EventEmitter<Event> = new EventEmitter();

  private alert?: Alert;

  @ViewChild('alertElement') private alertElement?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.alertElement) {
      const element = this.alertElement.nativeElement;
      this.alert = Alert.getOrCreateInstance(element);

      element.addEventListener('close.bs.alert', event => this.closeEvent.emit(event));
      element.addEventListener('closed.bs.alert', event => this.closedEvent.emit(event));
    }
  }

  /**
   * Close an alert by removing it from the DOM.
   * If the \`.fade\` and \`.show\` classes are present in the element, the alert will be closed with a disappearing effect.
   */
  public close(): void {
    this.alert?.close();
  }

  /**
   * The alert is removed
   */
  public dispose(): void {
    this.alert?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.alert-heading:empty {
  display: none;
}
`,styleUrl:"./alert.component.scss"}],stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit"],templateData:`<div
  #alertElement
  class="alert alert-{{ color }}"
  [class.alert-dismissible]="dismissible"
  [class.fade]="dismissible"
  [class.show]="dismissible"
  role="alert">
  <h4 class="alert-heading">
    <ng-content select="[heading]"></ng-content>
  </h4>

  <ng-content></ng-content>

  @if (dismissible) {
    <button type="button" class="btn-close" data-bs-dismiss="alert" [attr.aria-label]="'it.core.close-alert' | translate">
      <it-icon name="close"></it-icon>
    </button>
  }
</div>
`},{name:"ItAutocompleteComponent",id:"component-ItAutocompleteComponent-942fec5e2c57adc3aa70ffc97df545096a1b4811e03826eed5cb3940817873f1cd63f168f88d674eb6aa9cb9dd1c787a7e452e460ed21418dc5b865c8ae8c035",file:"projects/design-angular-kit/src/lib/components/form/autocomplete/autocomplete.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-autocomplete",styleUrls:[],styles:[],templateUrl:["./autocomplete.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!0,name:"autocompleteData",deprecated:!1,deprecationMessage:"",optional:!1,jsdoctags:[{pos:1236,end:1258,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1237,end:1244,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Indicates the list of searchable elements on which to base the input autocomplete system
If you need to retrieve items via API, can pass a function of Observable
`,description:`<p>Indicates the list of searchable elements on which to base the input autocomplete system
If you need to retrieve items via API, can pass a function of Observable</p>
`,line:24,type:"Array<AutocompleteItem> | ",decorators:[]},{required:!1,name:"big",deprecated:!1,deprecationMessage:"",rawdescription:`

To get a large version of Autocomplete
`,description:`<p>To get a large version of Autocomplete</p>
`,line:29,type:"boolean",decorators:[]},{name:"debounceTime",defaultValue:"300",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1668,end:1689,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1669,end:1676,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>300 [ms]</p>
`}],rawdescription:`

Time span [ms] has passed without another source emission, to delay data filtering.
Useful when the user is typing multiple letters
`,description:`<p>Time span [ms] has passed without another source emission, to delay data filtering.
Useful when the user is typing multiple letters</p>
`,line:36,type:"number",decorators:[]},{required:!1,name:"forceShowLabel",defaultValue:"true",deprecated:!1,deprecationMessage:"",rawdescription:`

Show the label
`,description:`<p>Show the label</p>
`,line:51,type:"boolean",decorators:[]},{name:"labelWaria",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",rawdescription:`

The input label even get labelWaria icon
`,description:`<p>The input label even get labelWaria icon</p>
`,line:46,type:"string | undefined",decorators:[]},{name:"placeholder",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

The input placeholder
`,description:`<p>The input placeholder</p>
`,line:41,type:"string",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"autocompleteSelectedEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when the Autocomplete Item has been selected
`,description:`<p>Fired when the Autocomplete Item has been selected</p>
`,line:56,type:"EventEmitter<AutocompleteItem>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"autocompleteResults$",defaultValue:"new Observable()",deprecated:!1,deprecationMessage:"",type:"Observable<literal type>",optional:!1,description:`<p>Observable da cui vengono emessi i risultati dell&#39;auto completamento</p>
`,line:61,rawdescription:`
Observable da cui vengono emessi i risultati dell'auto completamento`,modifierKind:[124]},{name:"showAutocompletion",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:58,modifierKind:[124]},{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"autocompleteItemTrackByValueFn",args:[{name:"index",type:"number",deprecated:!1,deprecationMessage:""},{name:"item",type:"AutocompleteItem",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"any",typeParameters:[],line:118,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"index",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"item",type:"AutocompleteItem",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getAutocompleteResults$",args:[],optional:!1,returnType:"Observable<literal type>",typeParameters:[],line:74,deprecated:!1,deprecationMessage:"",rawdescription:`

Create the autocomplete list
`,description:`<p>Create the autocomplete list</p>
`,modifierKind:[123]},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:66,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"onEntryClick",args:[{name:"entry",type:"AutocompleteItem",deprecated:!1,deprecationMessage:""},{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:106,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"entry",type:"AutocompleteItem",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"onKeyDown",args:[],optional:!1,returnType:"void",typeParameters:[],line:122,deprecated:!1,deprecationMessage:"",modifierKind:[124]},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"AsyncPipe",type:"pipe"},{name:"ItIconComponent",type:"component"},{name:"ItMarkMatchingTextPipe",type:"pipe"},{name:"NgTemplateOutlet"},{name:"ReactiveFormsModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItMarkMatchingTextPipe } from '../../../pipes/mark-matching-text.pipe';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AutocompleteItem } from '../../../interfaces/form';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-autocomplete',
  templateUrl: './autocomplete.component.html',
  imports: [AsyncPipe, ItIconComponent, ItMarkMatchingTextPipe, NgTemplateOutlet, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItAutocompleteComponent extends ItAbstractFormComponent<string | null | undefined> implements OnInit {
  /**
   * Indicates the list of searchable elements on which to base the input autocomplete system
   * If you need to retrieve items via API, can pass a function of Observable
   * @default undefined
   */
  @Input({ required: true }) autocompleteData!: Array<AutocompleteItem> | ((search?: string | null) => Observable<Array<AutocompleteItem>>);

  /**
   * To get a large version of Autocomplete
   */
  @Input({ transform: inputToBoolean }) big?: boolean;

  /**
   * Time span [ms] has passed without another source emission, to delay data filtering.
   * Useful when the user is typing multiple letters
   * @default 300 [ms]
   */
  @Input() debounceTime = 300;

  /**
   * The input placeholder
   */
  @Input() placeholder = '';

  /**
   * The input label even get labelWaria icon
   */
  @Input() labelWaria: string | undefined = undefined;

  /**
   * Show the label
   */
  @Input({ transform: inputToBoolean }) forceShowLabel: boolean = true;

  /**
   * Fired when the Autocomplete Item has been selected
   */
  @Output() autocompleteSelectedEvent: EventEmitter<AutocompleteItem> = new EventEmitter();

  protected showAutocompletion = false;

  /** Observable da cui vengono emessi i risultati dell'auto completamento */
  protected autocompleteResults$: Observable<{
    searchedValue: string | undefined | null;
    relatedEntries: Array<AutocompleteItem>;
  }> = new Observable();

  override ngOnInit() {
    super.ngOnInit();
    this.autocompleteResults$ = this.getAutocompleteResults$();
  }

  /**
   * Create the autocomplete list
   */
  private getAutocompleteResults$(): Observable<{
    searchedValue: string | null | undefined;
    relatedEntries: Array<AutocompleteItem>;
  }> {
    return this.control.valueChanges.pipe(
      debounceTime(this.debounceTime), // Delay filter data after time span has passed without another source emission, useful when the user is typing multiple letters
      distinctUntilChanged(), // Only if searchValue is distinct in comparison to the last value
      switchMap(searchedValue => {
        if (!this.autocompleteData) {
          return of({
            searchedValue,
            relatedEntries: <Array<AutocompleteItem>>[],
          });
        }

        const autoCompleteData$ = Array.isArray(this.autocompleteData) ? of(this.autocompleteData) : this.autocompleteData(searchedValue);
        return autoCompleteData$.pipe(
          map(autocompleteData => {
            if (!searchedValue || typeof searchedValue === 'number') {
              return { searchedValue, relatedEntries: [] };
            }

            const lowercaseValue = searchedValue.toLowerCase();
            const relatedEntries = autocompleteData.filter(item => item.value?.toLowerCase().includes(lowercaseValue));

            return { searchedValue, relatedEntries };
          })
        );
      })
    );
  }

  protected onEntryClick(entry: AutocompleteItem, event: Event) {
    // Se non \xE8 stato definito un link associato all'elemento dell'autocomplete, probabilmente il desiderata
    // non \xE8 effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
    if (!entry.link) {
      event.preventDefault();
    }

    this.autocompleteSelectedEvent.next(entry);
    this.control.setValue(entry.value);
    this.showAutocompletion = false;
  }

  protected autocompleteItemTrackByValueFn(index: number, item: AutocompleteItem) {
    return item.value;
  }

  protected onKeyDown() {
    this.showAutocompletion = true;
  }

  protected get isActiveLabel(): boolean {
    const value = this.control.value;
    return this.forceShowLabel && (!!value || !!this.placeholder);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit"],accessors:{isActiveLabel:{name:"isActiveLabel",getSignature:{name:"isActiveLabel",type:"boolean",returnType:"boolean",line:126}}},templateData:`<div class="form-group" [class.autocomplete-wrapper-big]="big">
  @if (label) {
    <label [for]="id" [class.visually-hidden]="!isActiveLabel" [class.active]="isActiveLabel">
      {{ label }}
    </label>
  }

  <input
    [id]="id"
    type="search"
    class="autocomplete"
    [placeholder]="placeholder"
    [formControl]="control"
    [class.is-invalid]="isInvalid"
    [class.is-valid]="isValid"
    (blur)="markAsTouched()"
    (keydown)="onKeyDown()" />

  <span class="autocomplete-icon" aria-hidden="true">
    <it-icon [labelWaria]="labelWaria" name="search" size="sm"></it-icon>
  </span>

  @if (autocompleteResults$ | async; as autocomplete) {
    <ul class="autocomplete-list" [class.autocomplete-list-show]="autocomplete.relatedEntries?.length && showAutocompletion">
      @for (entry of autocomplete.relatedEntries; track autocompleteItemTrackByValueFn($index, entry)) {
        <li>
          <a [href]="entry.link" (click)="onEntryClick(entry, $event)">
            @if (entry.avatarSrcPath) {
              <div class="avatar size-sm">
                <img [src]="entry.avatarSrcPath" [alt]="entry.avatarAltText" />
              </div>
            }
            @if (entry.icon) {
              <it-icon [name]="entry.icon" size="sm"></it-icon>
            }
            <span class="autocomplete-list-text">
              <span [innerHTML]="entry.value | itMarkMatchingText: autocomplete.searchedValue"></span>
              @if (entry.label) {
                <em>{{ entry.label }}</em>
              }
            </span>
          </a>
        </li>
      }
    </ul>
  }

  @if (isInvalid) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <div #customError>
        <ng-content select="[error]"></ng-content>
      </div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }
</div>
`},{name:"ItAvatarDropdownComponent",id:"component-ItAvatarDropdownComponent-0c3438cfc75125d2c9240b7b6c841793a12e1dad6e0a3278eda3b0a2b008e7dfb899a7a5566bc38aa9be055d8869aa65c0d44ca4260290bded46d83f2dfa4297",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-dropdown/avatar-dropdown.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-avatar-dropdown",styleUrls:["./avatar-dropdown.component.scss"],styles:[],templateUrl:["./avatar-dropdown.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[],outputsClass:[],propertiesClass:[{name:"componentClass",defaultValue:"'avatar avatar-dropdown'",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:47,decorators:[{name:"HostBinding",stringifiedArguments:"'class'"}],modifierKind:[170]},{name:"items",deprecated:!1,deprecationMessage:"",type:"QueryList<ItAvatarDropdownItemComponent>",optional:!1,description:"",line:49,decorators:[{name:"ContentChildren",stringifiedArguments:"ItAvatarDropdownItemComponent"}],modifierKind:[170]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",defaultValue:"'avatar avatar-dropdown'",deprecated:!1,deprecationMessage:"",line:47,type:"string",decorators:[]}],hostListeners:[],standalone:!0,imports:[{name:"ItDropdownModule",type:"module"},{name:"NgTemplateOutlet"},{name:"RouterLink"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ItDropdownModule } from '../../dropdown/dropdown.module';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [NgTemplateOutlet],
})
export class ItAvatarDropdownItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

  /**
   * Indica il link che possiamo passare all'elemento
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() link: string | any[] | null | undefined;

  /**
   * Permette di utilizzare l'attributo html title
   */
  @Input() title?: string;

  /**
   * Permette di utilizzare l'attributo html accesskey
   */
  @Input() accesskey?: string;

  /**
   * Permette di utilizzare l'attributo html tabindex
   */
  @Input() tabindex?: number;
}

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [ItDropdownModule, NgTemplateOutlet, RouterLink],
})
export class ItAvatarDropdownComponent {
  @HostBinding('class') componentClass = 'avatar avatar-dropdown';

  @ContentChildren(ItAvatarDropdownItemComponent) items!: QueryList<ItAvatarDropdownItemComponent>;
}
`,assetsDirs:[],styleUrlsData:[{data:`// made because of bug with before triangle that goes up 
.link-list-wrapper{
  z-index: 2;
  position: relative;
}

a {
  cursor: pointer;
}

:host ::ng-deep .dropdown-toggle {
  width: 100%;
  height: 100%;
  .icon {
    display: none;
  }
}`,styleUrl:"./avatar-dropdown.component.scss"}],stylesData:"",extends:[],templateData:`<it-dropdown id="dropdown" class="dropdown">
  <ng-content button select="[it-avatar-dropdown-toggle]"></ng-content>
  <ng-container list class="dropdown-menu">
    @for (item of items; track item) {
      <li>
        @if (item.link) {
          <a
            [routerLink]="item.link"
            class="dropdown-item list-item"
            title="item.title"
            accesskey="item.accesskey"
            tabindex="item.tabindex">
            <ng-template *ngTemplateOutlet="item._implicitContent"></ng-template>
          </a>
        } @else {
          <div class="dropdown-item list-item">
            <ng-template *ngTemplateOutlet="item._implicitContent"></ng-template>
          </div>
        }
      </li>
    }
  </ng-container>
</it-dropdown>
`},{name:"ItAvatarDropdownItemComponent",id:"component-ItAvatarDropdownItemComponent-0c3438cfc75125d2c9240b7b6c841793a12e1dad6e0a3278eda3b0a2b008e7dfb899a7a5566bc38aa9be055d8869aa65c0d44ca4260290bded46d83f2dfa4297",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-dropdown/avatar-dropdown.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-avatar-dropdown-item",styleUrls:["./avatar-dropdown.component.scss"],styles:[],template:"<ng-template><ng-content></ng-content></ng-template>",templateUrl:[],viewProviders:[],hostDirectives:[],inputsClass:[{name:"accesskey",deprecated:!1,deprecationMessage:"",rawdescription:`

Permette di utilizzare l'attributo html accesskey
`,description:`<p>Permette di utilizzare l&#39;attributo html accesskey</p>
`,line:31,type:"string",decorators:[]},{name:"link",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il link che possiamo passare all'elemento
`,description:`<p>Indica il link che possiamo passare all&#39;elemento</p>
`,line:21,type:"string | any[] | null | undefined",decorators:[]},{name:"tabindex",deprecated:!1,deprecationMessage:"",rawdescription:`

Permette di utilizzare l'attributo html tabindex
`,description:`<p>Permette di utilizzare l&#39;attributo html tabindex</p>
`,line:36,type:"number",decorators:[]},{name:"title",deprecated:!1,deprecationMessage:"",rawdescription:`

Permette di utilizzare l'attributo html title
`,description:`<p>Permette di utilizzare l&#39;attributo html title</p>
`,line:26,type:"string",decorators:[]}],outputsClass:[],propertiesClass:[{name:"_implicitContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:"",line:15,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef, {static: true}"}],modifierKind:[170]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ItDropdownModule } from '../../dropdown/dropdown.module';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [NgTemplateOutlet],
})
export class ItAvatarDropdownItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

  /**
   * Indica il link che possiamo passare all'elemento
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() link: string | any[] | null | undefined;

  /**
   * Permette di utilizzare l'attributo html title
   */
  @Input() title?: string;

  /**
   * Permette di utilizzare l'attributo html accesskey
   */
  @Input() accesskey?: string;

  /**
   * Permette di utilizzare l'attributo html tabindex
   */
  @Input() tabindex?: number;
}

@Component({
  standalone: true,
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
  imports: [ItDropdownModule, NgTemplateOutlet, RouterLink],
})
export class ItAvatarDropdownComponent {
  @HostBinding('class') componentClass = 'avatar avatar-dropdown';

  @ContentChildren(ItAvatarDropdownItemComponent) items!: QueryList<ItAvatarDropdownItemComponent>;
}
`,assetsDirs:[],styleUrlsData:[{data:`// made because of bug with before triangle that goes up 
.link-list-wrapper{
  z-index: 2;
  position: relative;
}

a {
  cursor: pointer;
}

:host ::ng-deep .dropdown-toggle {
  width: 100%;
  height: 100%;
  .icon {
    display: none;
  }
}`,styleUrl:"./avatar-dropdown.component.scss"}],stylesData:"",extends:[]},{name:"ItAvatarGroupComponent",id:"component-ItAvatarGroupComponent-8e1cd7b09c867ede4e12c50422f580432eeea06e6a7be286d5819f114feb1368f8688422a914899e85da1f78c9b4e73032f26dd15a8558a0636112b33d99d4d4",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-group/avatar-group.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-avatar-group",styleUrls:[],styles:[],templateUrl:["./avatar-group.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"linkList",defaultValue:"false",deprecated:!1,deprecationMessage:"",line:22,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[{name:"avatars",deprecated:!1,deprecationMessage:"",type:"QueryList<ItAvatarGroupItemComponent>",optional:!1,description:"",line:24,decorators:[{name:"ContentChildren",stringifiedArguments:"ItAvatarGroupItemComponent"}],modifierKind:[170]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-avatar-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
})
export class ItAvatarGroupItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;
}

@Component({
  standalone: true,
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  imports: [NgTemplateOutlet],
})
export class ItAvatarGroupComponent {
  @Input({ transform: inputToBoolean }) @HostBinding('class.link-list-wrapper') linkList = false;

  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`<ul [class]="linkList ? 'link-list avatar-group' : 'avatar-group-stacked'">
  @for (avatar of avatars; track avatar) {
    <li>
      <ng-container *ngTemplateOutlet="avatar._implicitContent"></ng-container>
    </li>
  }
</ul>
`},{name:"ItAvatarGroupItemComponent",id:"component-ItAvatarGroupItemComponent-8e1cd7b09c867ede4e12c50422f580432eeea06e6a7be286d5819f114feb1368f8688422a914899e85da1f78c9b4e73032f26dd15a8558a0636112b33d99d4d4",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-group/avatar-group.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-avatar-item",styleUrls:[],styles:[],template:"<ng-template><ng-content></ng-content></ng-template>",templateUrl:[],viewProviders:[],hostDirectives:[],inputsClass:[],outputsClass:[],propertiesClass:[{name:"_implicitContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:"",line:12,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef, {static: true}"}],modifierKind:[170]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, ContentChildren, HostBinding, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-avatar-item',
  template: '<ng-template><ng-content></ng-content></ng-template>',
})
export class ItAvatarGroupItemComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;
}

@Component({
  standalone: true,
  selector: 'it-avatar-group',
  templateUrl: './avatar-group.component.html',
  imports: [NgTemplateOutlet],
})
export class ItAvatarGroupComponent {
  @Input({ transform: inputToBoolean }) @HostBinding('class.link-list-wrapper') linkList = false;

  @ContentChildren(ItAvatarGroupItemComponent) avatars!: QueryList<ItAvatarGroupItemComponent>;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[]},{name:"ItBackButtonComponent",id:"component-ItBackButtonComponent-39ac69c59625acd522330d1a317bc91a55face872949b788a52333819c1c6a7fd849a39e915658f8c0b33291fc659a1051709ad62bc0f5dcb6695a2801c3d9ee",file:"projects/design-angular-kit/src/lib/components/navigation/back-button/back-button.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itBackButton",inputs:[],outputs:[],providers:[],selector:"it-back-button",styleUrls:[],styles:[],templateUrl:["./back-button.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"backFn",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1419,end:1543,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1420,end:1427,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>backCbFn = this.errorCallback.bind(this);
(errorCallback is your function, pass backCbFn to the component)</p>
`}],rawdescription:`

Custom back logic <br/>

NOTE: to use 'this' need bind function  <br/>
\`\`\`html
(errorCallback is your function, pass backCbFn to the component)
\`\`\``,description:`<p>Custom back logic <br/></p>
<p>NOTE: to use &#39;this&#39; need bind function  <br/></p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html">(errorCallback is your function, pass backCbFn to the component)</code></pre></div>`,line:52,type:"function",decorators:[]},{name:"buttonStyle",defaultValue:"'button'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:841,end:860,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:842,end:849,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>button</p>
`}],rawdescription:`

Back button style
- <b>link</b>: use a link with icon and text
- <b>button</b>: use a button with icon and text
`,description:`<p>Back button style</p>
<ul>
<li><b>link</b>: use a link with icon and text</li>
<li><b>button</b>: use a button with icon and text</li>
</ul>
`,line:23,type:'"link" | "button"',decorators:[]},{name:"direction",defaultValue:"'left'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1020,end:1037,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1021,end:1028,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>left</p>
`}],rawdescription:`

Button direction
- <b>left</b>: Back direction
- <b>up</b>: Upper direction
`,description:`<p>Button direction</p>
<ul>
<li><b>left</b>: Back direction</li>
<li><b>up</b>: Upper direction</li>
</ul>
`,line:31,type:'"left" | "up"',decorators:[]},{required:!1,name:"showIcon",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1118,end:1135,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1119,end:1126,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show/Hide icon
`,description:`<p>Show/Hide icon</p>
`,line:37,type:"boolean",decorators:[]},{required:!1,name:"showText",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1236,end:1253,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1237,end:1244,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show/Hide text
`,description:`<p>Show/Hide text</p>
`,line:43,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[{name:"_location",deprecated:!1,deprecationMessage:"",type:"Location",optional:!1,description:"",line:54,modifierKind:[125,148]}],methodsClass:[{name:"goBack",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:59,deprecated:!1,deprecationMessage:"",rawdescription:`

Go back function
`,description:`<p>Go back function</p>
`,modifierKind:[125],jsdoctags:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"},{name:"ItButtonDirective",type:"directive"},{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Location, NgTemplateOutlet } from '@angular/common';
import { ItButtonDirective } from '../../core/button/button.directive';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-back-button',
  templateUrl: './back-button.component.html',
  exportAs: 'itBackButton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItButtonDirective, ItIconComponent, TranslateModule],
})
export class ItBackButtonComponent {
  /**
   * Back button style
   * - <b>link</b>: use a link with icon and text
   * - <b>button</b>: use a button with icon and text
   * @default button
   */
  @Input() buttonStyle: 'link' | 'button' = 'button';

  /**
   * Button direction
   * - <b>left</b>: Back direction
   * - <b>up</b>: Upper direction
   * @default left
   */
  @Input() direction: 'left' | 'up' = 'left';

  /**
   * Show/Hide icon
   * @default true
   */
  @Input({ transform: inputToBoolean }) showIcon: boolean = true;

  /**
   * Show/Hide text
   * @default true
   */
  @Input({ transform: inputToBoolean }) showText: boolean = true;

  /**
   * Custom back logic <br/>
   *
   * NOTE: to use 'this' need bind function  <br/>
   * @example backCbFn = this.errorCallback.bind(this);
   * (errorCallback is your function, pass backCbFn to the component)
   */
  @Input() backFn?: (location: Location) => void;

  constructor(public readonly _location: Location) {}

  /**
   * Go back function
   */
  public goBack(event: Event): void {
    event.preventDefault();
    if (this.backFn) {
      return this.backFn(this._location);
    }

    this._location.back();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_location",type:"Location",deprecated:!1,deprecationMessage:""}],line:52,jsdoctags:[{name:"_location",type:"Location",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],templateData:`@if (buttonStyle === 'link') {
  <a href="#" class="go-back" (click)="goBack($event)">
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </a>
}

@if (buttonStyle === 'button') {
  <button itButton="primary" class="go-back" (click)="goBack($event)">
    <ng-container *ngTemplateOutlet="content"></ng-container>
  </button>
}

<ng-template #content>
  @if (showIcon) {
    <it-icon
      size="sm"
      [name]="direction === 'left' ? 'arrow-left' : 'arrow-up'"
      [color]="buttonStyle === 'link' ? 'primary' : 'white'"
      [class.me-2]="showText"></it-icon>
  }

  <span [class.visually-hidden]="!showText">
    {{ (direction === 'left' ? 'it.navigation.go-back' : 'it.navigation.upper-level') | translate }}
  </span>
</ng-template>
`},{name:"ItBackToTopComponent",id:"component-ItBackToTopComponent-9769ea8cef25d58f5f36d35454b5063136affded482c989908a06a881a9c24bcfd78cc813967b53db2a74934972b76f8e71601f29e6e75da6ec4907253db07ab",file:"projects/design-angular-kit/src/lib/components/navigation/back-to-top/back-to-top.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itBackToTop",inputs:[],outputs:[],providers:[],selector:"it-back-to-top",styleUrls:[],styles:[],templateUrl:["./back-to-top.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"dark",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:951,end:969,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:952,end:959,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Button usable button on a dark background
`,description:`<p>Button usable button on a dark background</p>
`,line:32,type:"boolean",decorators:[]},{required:!1,name:"shadow",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:813,end:831,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:814,end:821,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show shadow
`,description:`<p>Show shadow</p>
`,line:26,type:"boolean",decorators:[]},{required:!1,name:"small",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:706,end:724,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:707,end:714,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show small button
`,description:`<p>Show small button</p>
`,line:20,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"backToTop",deprecated:!1,deprecationMessage:"",type:"BackToTop",optional:!0,description:"",line:34,modifierKind:[123]},{name:"backToTopElement",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLAnchorElement>",optional:!0,description:"",line:36,decorators:[{name:"ViewChild",stringifiedArguments:"'backToTop'"}],modifierKind:[170,123]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:71,deprecated:!1,deprecationMessage:"",rawdescription:`

Eliminate component features
`,description:`<p>Eliminate component features</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:57,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the button
`,description:`<p>Hide the button</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:38,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"scrollToTop",args:[],optional:!1,returnType:"void",typeParameters:[],line:64,deprecated:!1,deprecationMessage:"",rawdescription:`

Activates the scroll animation towards the Y coordinate indicated by the positionTop option
`,description:`<p>Activates the scroll animation towards the Y coordinate indicated by the positionTop option</p>
`,modifierKind:[125]},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",rawdescription:`

Show button
`,description:`<p>Show button</p>
`,modifierKind:[125]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { BackToTop } from 'bootstrap-italia';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-back-to-top',
  templateUrl: './back-to-top.component.html',
  exportAs: 'itBackToTop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent],
})
export class ItBackToTopComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * Show small button
   * @default false
   */
  @Input({ transform: inputToBoolean }) small?: boolean;

  /**
   * Show shadow
   * @default false
   */
  @Input({ transform: inputToBoolean }) shadow?: boolean;

  /**
   * Button usable button on a dark background
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  private backToTop?: BackToTop;

  @ViewChild('backToTop') private backToTopElement?: ElementRef<HTMLAnchorElement>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.backToTopElement) {
      const element = this.backToTopElement.nativeElement;
      this.backToTop = BackToTop.getOrCreateInstance(element);
    }
  }

  /**
   * Show button
   */
  public show(): void {
    this.backToTop?.show();
  }

  /**
   * Hide the button
   */
  public hide(): void {
    this.backToTop?.hide();
  }

  /**
   * Activates the scroll animation towards the Y coordinate indicated by the positionTop option
   */
  public scrollToTop(): void {
    this.backToTop?.scrollToTop();
  }

  /**
   * Eliminate component features
   */
  public dispose(): void {
    this.backToTop?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit"],templateData:`<a
  #backToTop
  [id]="id"
  href="#"
  aria-hidden="true"
  class="back-to-top"
  [class.back-to-top-small]="small"
  [class.shadow]="shadow"
  [class.dark]="dark">
  <it-icon name="arrow-up" [color]="dark ? 'secondary' : 'light'"></it-icon>
</a>
`},{name:"ItBreadcrumbComponent",id:"component-ItBreadcrumbComponent-2d2894e708ba4981d71c82b2c408ae967ae4021b5b58a3a481ae38ca6aadd6331ede7de877b66c022a3f8042bec25c4cd1acb4b462ea4ead5c8c113575d918ab",file:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumb/breadcrumb.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-breadcrumb",styleUrls:[],styles:[],templateUrl:["./breadcrumb.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"dark",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1059,end:1077,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1060,end:1067,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Dark style
`,description:`<p>Dark style</p>
`,line:37,type:"boolean",decorators:[]},{name:"separator",defaultValue:"'/'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:978,end:992,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:979,end:986,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>/</p>
`}],rawdescription:`

The character to use as separator
`,description:`<p>The character to use as separator</p>
`,line:31,type:"string",decorators:[]}],outputsClass:[],propertiesClass:[{name:"items",deprecated:!1,deprecationMessage:"",type:"QueryList<ItBreadcrumbItemComponent>",optional:!0,description:`<p>The tab items</p>
`,line:42,rawdescription:`

The tab items
`,decorators:[{name:"ContentChildren",stringifiedArguments:"ItBreadcrumbItemComponent"}],modifierKind:[170]},{name:"itemSubscriptions",deprecated:!1,deprecationMessage:"",type:"Array<Subscription>",optional:!0,description:"",line:44,modifierKind:[123]}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:48,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:65,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"ItIconComponent",type:"component"},{name:"ItLinkComponent",type:"component"},{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { ItBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';
import { startWith, Subscription } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItLinkComponent } from '../../../core/link/link.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItLinkComponent, NgTemplateOutlet],
})
export class ItBreadcrumbComponent implements AfterViewInit, OnDestroy {
  /**
   * The character to use as separator
   * @default /
   */
  @Input() separator: string = '/';

  /**
   * Dark style
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The tab items
   */
  @ContentChildren(ItBreadcrumbItemComponent) items?: QueryList<ItBreadcrumbItemComponent>;

  private itemSubscriptions?: Array<Subscription>;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.items?.changes
      .pipe(
        // When breadcrumb items changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.itemSubscriptions = this.items?.map(item =>
          item.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when breadcrumb item attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""}],line:44,jsdoctags:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["AfterViewInit","OnDestroy"],templateData:`<nav class="breadcrumb-container" [attr.aria-label]="'it.navigation.navigation-path' | translate">
  @if (items) {
    <ol class="breadcrumb" [class.dark]="dark" [class.px-3]="dark">
      @for (item of items; track item; let isLast = $last) {
        <li class="breadcrumb-item" [class.active]="item.active" [attr.aria-current]="item.active ? 'page' : null">
          @if (item.iconName) {
            <it-icon [name]="item.iconName" [color]="dark ? 'white' : 'secondary'" size="sm" svgClass="align-top me-1"></it-icon>
          }
          @if (!item.active && !isLast) {
            <it-link [href]="item.href" [class]="item.class" [externalLink]="item.externalLink" [disabled]="item.disabled">
              <ng-container *ngTemplateOutlet="item.htmlContent"></ng-container>
            </it-link>
          } @else {
            <ng-container *ngTemplateOutlet="item.htmlContent"></ng-container>
          }
          @if (!isLast) {
            <span class="separator">{{ separator }}</span>
          }
        </li>
      }
    </ol>
  }
</nav>
`},{name:"ItBreadcrumbItemComponent",id:"component-ItBreadcrumbItemComponent-f1baa9d1ef750a7749e323f63e44848b8ff0c36161037df3cdedff4a74ad7429041826e6f1ff72431320f089bb22d8f831aca1448941f1d38ce2d317f33b5d9a",file:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumb-item/breadcrumb-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-breadcrumb-item",styleUrls:[],styles:[],templateUrl:["./breadcrumb-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"active",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:580,end:598,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:581,end:588,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is active breadcrumb item
`,description:`<p>Is active breadcrumb item</p>
`,line:18,type:"boolean",decorators:[]},{name:"iconName",deprecated:!1,deprecationMessage:"",rawdescription:`

The name of icon to show
`,description:`<p>The name of icon to show</p>
`,line:23,type:"IconName | undefined",decorators:[]},{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:41,type:"string",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1245,end:1263,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1246,end:1253,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is disabled link
`,description:`<p>Is disabled link</p>
`,line:36,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"externalLink",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1126,end:1144,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1127,end:1134,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is an external link (false to not use Angular router link)
`,description:`<p>Is an external link (false to not use Angular router link)</p>
`,line:30,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"href",deprecated:!1,deprecationMessage:"",rawdescription:`

The router link action

Commands to pass to Router#createUrlTree.
- array: commands to pass to Router#createUrlTree.
- string: shorthand for array of commands with just the string, i.e. ['/route']
- null|undefined: Disables the link by removing the href
`,description:`<p>The router link action</p>
<p>Commands to pass to Router#createUrlTree.</p>
<ul>
<li>array: commands to pass to Router#createUrlTree.</li>
<li>string: shorthand for array of commands with just the string, i.e. [&#39;/route&#39;]</li>
<li>null|undefined: Disables the link by removing the href</li>
</ul>
`,line:24,type:"any[] | string | null | undefined",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"htmlContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:`<p>The content of item</p>
`,line:28,rawdescription:`

The content of item
`,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef"}],modifierKind:[170,125]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:43,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:48,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItLinkComponent } from '../../../core/link/link.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItBreadcrumbItemComponent extends ItLinkComponent {
  /**
   * Is active breadcrumb item
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * The name of icon to show
   */
  @Input() iconName: IconName | undefined;

  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItLinkComponent"],templateData:`<ng-template>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItCalloutComponent",id:"component-ItCalloutComponent-6674f9b622bbca1f13c243fe8504f3cc8c5f1d8d5db6e3effd85c3b754909ae4f65bb5c204afa6301e9610f60bcb083863972b3946adc913365e353a08e04c60",file:"projects/design-angular-kit/src/lib/components/core/callout/callout.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-callout",styleUrls:[],styles:[`
      .callout-big-text:empty {
        display: none;
      }
    `],templateUrl:["./callout.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"appearance",defaultValue:"'default'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1502,end:1522,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1503,end:1510,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>default</p>
`}],rawdescription:`

Callout appearance
- <b>default</b>
- <b>highlight</b>: Callout version with border only on the left side
- <b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts
`,description:`<p>Callout appearance</p>
<ul>
<li><b>default</b></li>
<li><b>highlight</b>: Callout version with border only on the left side</li>
<li><b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts</li>
</ul>
`,line:56,type:"CalloutAppearance",decorators:[]},{name:"color",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1178,end:1200,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1179,end:1186,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Callout color
- <b>success</b>
- <b>danger</b>
- <b>warning</b>
- <b>important</b>
- <b>note</b>
`,description:`<p>Callout color</p>
<ul>
<li><b>success</b></li>
<li><b>danger</b></li>
<li><b>warning</b></li>
<li><b>important</b></li>
<li><b>note</b></li>
</ul>
`,line:47,type:"CalloutColor | undefined",decorators:[]},{name:"hiddenLabel",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:970,end:992,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:971,end:978,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Callout hiddenLabel
`,description:`<p>Callout hiddenLabel</p>
`,line:36,type:"string | undefined",decorators:[]},{name:"icon",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1608,end:1630,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1609,end:1616,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Custom icon
`,description:`<p>Custom icon</p>
`,line:62,type:"IconName | undefined",decorators:[]},{name:"label",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:870,end:892,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:871,end:878,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Callout label
`,description:`<p>Callout label</p>
`,line:30,type:"string | undefined",decorators:[]},{name:"labelWaria",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1730,end:1752,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1731,end:1738,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

The input label even get labelWaria icon
`,description:`<p>The input label even get labelWaria icon</p>
`,line:68,type:"string | undefined",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"},{name:"ItIconComponent",type:"component"}],description:`<p>Callout</p>
`,rawdescription:`

Callout
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalloutAppearance, CalloutColor } from '../../../interfaces/core';
import { IconName } from '../../../interfaces/icon';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../utils/icon/icon.component';

/**
 * Callout
 * @description Callouts can be used to highlight certain parts of the text that require particular attention. They may contain error messages, warnings, hints, etc.
 */
@Component({
  standalone: true,
  selector: 'it-callout',
  templateUrl: './callout.component.html',
  styles: [
    \`
      .callout-big-text:empty {
        display: none;
      }
    \`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItIconComponent],
})
export class ItCalloutComponent {
  /**
   * Callout label
   * @default undefined
   */
  @Input() label: string | undefined;

  /**
   * Callout hiddenLabel
   * @default undefined
   */
  @Input() hiddenLabel: string | undefined;

  /**
   * Callout color
   * - <b>success</b>
   * - <b>danger</b>
   * - <b>warning</b>
   * - <b>important</b>
   * - <b>note</b>
   * @default undefined
   */
  @Input() color: CalloutColor | undefined;

  /**
   * Callout appearance
   * - <b>default</b>
   * - <b>highlight</b>: Callout version with border only on the left side
   * - <b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts
   * @default default
   */
  @Input() appearance: CalloutAppearance = 'default';

  /**
   * Custom icon
   * @default undefined
   */
  @Input() icon: IconName | undefined;

  /**
   * The input label even get labelWaria icon
   * @default undefined
   */
  @Input() labelWaria: string | undefined = undefined;

  protected get iconName(): IconName {
    if (this.icon) {
      return this.icon;
    }

    if (this.appearance === 'more') {
      return 'zoom-in';
    }

    switch (this.color) {
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'help-circle';
      case 'danger':
        return 'close-circle';
      case 'important':
      case 'note':
      default:
        return 'info-circle';
    }
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:`
      .callout-big-text:empty {
        display: none;
      }
    
`,extends:[],accessors:{iconName:{name:"iconName",getSignature:{name:"iconName",type:"",returnType:"IconName",line:70}}},templateData:`<div class="callout {{ color }}" [class.callout-highlight]="appearance === 'highlight'" [class.callout-more]="appearance === 'more'">
  @if (appearance === 'default') {
    <div class="callout-inner">
      <ng-container *ngTemplateOutlet="inner"></ng-container>
    </div>
  } @else {
    <ng-container *ngTemplateOutlet="inner"></ng-container>
  }
</div>

<ng-template #inner>
  @if (label) {
    <div class="callout-title">
      <it-icon [labelWaria]="labelWaria" [name]="iconName"></it-icon>
      @if (hiddenLabel) {
        <span class="visually-hidden">{{ hiddenLabel }}</span>
      }
      <span class="text">{{ label }}</span>
    </div>
  }
  <p class="callout-big-text">
    <ng-content select="[bigText]"></ng-content>
  </p>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItCardComponent",id:"component-ItCardComponent-a3066e51af770832c09378914fce15a2c01704037a266468e9dd2ecac1ef7a10e4d88a32bb1383613f460c98481fa383d26fa59f8b002d21314fb7e02069646b",file:"projects/design-angular-kit/src/lib/components/core/card/card.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-card",styleUrls:["./card.component.scss"],styles:[],templateUrl:["./card.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"background",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1304,end:1322,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1305,end:1312,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To add background and shadow
`,description:`<p>To add background and shadow</p>
`,line:53,type:"boolean",decorators:[]},{required:!1,name:"big",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1548,end:1566,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1549,end:1556,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To render a big card
`,description:`<p>To render a big card</p>
`,line:65,type:"boolean",decorators:[]},{name:"bodyClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1752,end:1767,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1753,end:1760,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>&#39;&#39;</p>
`}],rawdescription:`

Custom card body class
`,description:`<p>Custom card body class</p>
`,line:77,type:"string",decorators:[]},{required:!1,name:"borderBottom",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1425,end:1443,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1426,end:1433,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To add bottom border
`,description:`<p>To add bottom border</p>
`,line:59,type:"boolean",decorators:[]},{name:"cardClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1659,end:1674,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1660,end:1667,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>&#39;&#39;</p>
`}],rawdescription:`

Custom card class
`,description:`<p>Custom card class</p>
`,line:71,type:"string",decorators:[]},{required:!1,name:"hasImage",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:938,end:956,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:939,end:946,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Card with image
`,description:`<p>Card with image</p>
`,line:35,type:"boolean",decorators:[]},{required:!1,name:"rounded",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1060,end:1078,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1061,end:1068,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To add rounding effects
`,description:`<p>To add rounding effects</p>
`,line:41,type:"boolean",decorators:[]},{required:!1,name:"shadow",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1179,end:1197,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1180,end:1187,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To add shadow effects
`,description:`<p>To add shadow effects</p>
`,line:47,type:"boolean",decorators:[]},{required:!1,name:"special",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:825,end:843,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:826,end:833,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To create special cards
`,description:`<p>To create special cards</p>
`,line:29,type:"boolean",decorators:[]},{required:!1,name:"teaser",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:705,end:723,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:706,end:713,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To create cards with short or "preview" content
`,description:`<p>To create cards with short or &quot;preview&quot; content</p>
`,line:23,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:`<p>Card</p>
`,rawdescription:`

Card
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Card
 * @description A container of texts and images with many options and variations.
 */
@Component({
  standalone: true,
  selector: 'it-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItCardComponent extends ItAbstractComponent {
  /**
   * To create cards with short or "preview" content
   * @default false
   */
  @Input({ transform: inputToBoolean }) teaser?: boolean;

  /**
   * To create special cards
   * @default false
   */
  @Input({ transform: inputToBoolean }) special?: boolean;

  /**
   * Card with image
   * @default false
   */
  @Input({ transform: inputToBoolean }) hasImage?: boolean;

  /**
   * To add rounding effects
   * @default false
   */
  @Input({ transform: inputToBoolean }) rounded?: boolean;

  /**
   * To add shadow effects
   * @default false
   */
  @Input({ transform: inputToBoolean }) shadow?: boolean;

  /**
   * To add background and shadow
   * @default false
   */
  @Input({ transform: inputToBoolean }) background?: boolean;

  /**
   * To add bottom border
   * @default false
   */
  @Input({ transform: inputToBoolean }) borderBottom?: boolean;

  /**
   * To render a big card
   * @default false
   */
  @Input({ transform: inputToBoolean }) big?: boolean;

  /**
   * Custom card class
   * @default ''
   */
  @Input() cardClass: string = '';

  /**
   * Custom card body class
   * @default ''
   */
  @Input() bodyClass: string = '';
}
`,assetsDirs:[],styleUrlsData:[{data:`.card-body:empty {
  display: none;
}


::ng-deep .row [class*=col-] {
  .card, .card-wrapper {
    height: 100%;
  }
}

::ng-deep .card-wrapper.card-teaser-wrapper {
  it-card {
    flex-direction: row;
    align-items: flex-start;
    flex: 0 0 100%;
    flex-wrap: wrap;
    margin: 16px 0;
  }

  @media (min-width: 768px) { 
    it-card {
      flex: 0 0 49%;
    }
  }
}

:host {
  width: 100%;
}`,styleUrl:"./card.component.scss"}],stylesData:"",extends:["ItAbstractComponent"],templateData:`<ng-template #cardContent>
  <ng-content select="[beforeBody]"></ng-content>

  <div class="card-body {{ bodyClass }}">
    <ng-content></ng-content>
  </div>
</ng-template>

@if (!special) {
  <div
    class="card {{ cardClass }}"
    [class.card-img]="hasImage"
    [class.card-teaser]="teaser"
    [class.no-after]="hasImage"
    [class.shadow]="shadow"
    [class.card-bg]="background"
    [class.card-big]="big"
    [class.border-bottom-card]="borderBottom"
    [class.rounded]="rounded">
    <ng-container *ngTemplateOutlet="cardContent"></ng-container>
  </div>
} @else {
  <a
    class="card special-card {{ cardClass }}"
    [class.card-img]="hasImage"
    [class.card-teaser]="teaser"
    [class.shadow]="shadow"
    [class.card-bg]="background"
    [class.card-big]="big"
    [class.no-after]="hasImage"
    [class.border-bottom-card]="borderBottom"
    [class.rounded]="rounded">
    <ng-container *ngTemplateOutlet="cardContent"></ng-container>
  </a>
}
`},{name:"ItCarouselComponent",id:"component-ItCarouselComponent-e4239692655bf42689169623b236ac45e7d790431c700c187adb9fc360375ddc2e0293c34e96bd0775e384b03e0cae39e9c9bad4787abfc1cc3fd0ab794ac068",file:"projects/design-angular-kit/src/lib/components/core/carousel/carousel/carousel.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itCarousel",inputs:[],outputs:[],providers:[],selector:"it-carousel",styleUrls:["./carousel.component.scss"],styles:[],templateUrl:["./carousel.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"bigImg",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1514,end:1532,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1515,end:1522,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To indicate that the contained image is of a large type
`,description:`<p>To indicate that the contained image is of a large type</p>
`,line:62,type:"boolean",decorators:[]},{required:!1,name:"fullCarousel",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1356,end:1374,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1357,end:1364,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

True for full screen (landscape) viewing
`,description:`<p>True for full screen (landscape) viewing</p>
`,line:56,type:"boolean",decorators:[]},{required:!1,name:"lined",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1788,end:1806,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1789,end:1796,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Card line style
`,description:`<p>Card line style</p>
`,line:74,type:"boolean",decorators:[]},{required:!1,name:"standardImage",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1669,end:1687,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1670,end:1677,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To indicate that the contained image is of a standard type
`,description:`<p>To indicate that the contained image is of a standard type</p>
`,line:68,type:"boolean",decorators:[]},{name:"title",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1025,end:1047,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1026,end:1033,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

The callout title
`,description:`<p>The callout title</p>
`,line:38,type:"string | undefined",decorators:[]},{name:"trackClass",defaultValue:"''",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1244,end:1259,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1245,end:1252,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>&#39;&#39;</p>
`}],rawdescription:`

Custom class in splide__track element
`,description:`<p>Custom class in splide__track element</p>
`,line:50,type:"string",decorators:[]},{name:"type",defaultValue:"'default'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1123,end:1143,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1124,end:1131,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>default</p>
`}],rawdescription:`

The carousel type
`,description:`<p>The carousel type</p>
`,line:44,type:"CarouselType",decorators:[]}],outputsClass:[],propertiesClass:[{name:"carousel",deprecated:!1,deprecationMessage:"",type:"CarouselBI",optional:!0,description:"",line:78,modifierKind:[123]},{name:"carouselDiv",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!1,description:"",line:80,decorators:[{name:"ViewChild",stringifiedArguments:"'carousel'"}],modifierKind:[170,123]},{name:"items",deprecated:!1,deprecationMessage:"",type:"QueryList<ItCarouselItemComponent>",optional:!0,description:"",line:76,decorators:[{name:"ContentChildren",stringifiedArguments:"ItCarouselItemComponent"}],modifierKind:[170,124]},{name:"itemSubscriptions",deprecated:!1,deprecationMessage:"",type:"Array<Subscription>",optional:!0,description:"",line:82,modifierKind:[123]}],methodsClass:[{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:116,deprecated:!1,deprecationMessage:"",rawdescription:`

Removes CarouselBI features
`,description:`<p>Removes CarouselBI features</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:91,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:109,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:`<p>Carousel</p>
`,rawdescription:`

Carousel
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CarouselType } from '../../../../interfaces/core';
import { ItCarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselBI } from 'bootstrap-italia';
import { startWith, Subscription } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

/**
 * Carousel
 * @description A presentation component for scrolling through elements, images or text slides.
 */
@Component({
  standalone: true,
  selector: 'it-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  exportAs: 'itCarousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItCarouselComponent implements AfterViewInit, OnDestroy {
  /**
   * The callout title
   * @default undefined
   */
  @Input() title: string | undefined;

  /**
   * The carousel type
   * @default default
   */
  @Input() type: CarouselType = 'default';

  /**
   * Custom class in splide__track element
   * @default ''
   */
  @Input() trackClass: string = '';

  /**
   * True for full screen (landscape) viewing
   * @default false
   */
  @Input({ transform: inputToBoolean }) fullCarousel?: boolean;

  /**
   * To indicate that the contained image is of a large type
   * @default false
   */
  @Input({ transform: inputToBoolean }) bigImg?: boolean;

  /**
   * To indicate that the contained image is of a standard type
   * @default false
   */
  @Input({ transform: inputToBoolean }) standardImage?: boolean;

  /**
   * Card line style
   * @default false
   */
  @Input({ transform: inputToBoolean }) lined?: boolean;

  @ContentChildren(ItCarouselItemComponent) protected items?: QueryList<ItCarouselItemComponent>;

  private carousel?: CarouselBI;

  @ViewChild('carousel') private carouselDiv!: ElementRef<HTMLDivElement>;

  private itemSubscriptions?: Array<Subscription>;

  protected get typeClass(): string {
    const typeClass = 'it-carousel-landscape-abstract';
    return this.type === 'default' ? typeClass : typeClass + \`-\${this.type}\`;
  }

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.carousel = CarouselBI.getOrCreateInstance(this.carouselDiv.nativeElement);
    this.items?.changes
      .pipe(
        // When carousel items changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.itemSubscriptions = this.items?.map(item =>
          item.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when carousel item attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }

  /**
   * Removes CarouselBI features
   */
  public dispose(): void {
    this.carousel?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`@import "@splidejs/splide/dist/css/splide.min"; // Splide
`,styleUrl:"./carousel.component.scss"}],stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""}],line:87,jsdoctags:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["AfterViewInit","OnDestroy"],accessors:{typeClass:{name:"typeClass",getSignature:{name:"typeClass",type:"string",returnType:"string",line:84}}},templateData:`<div
  #carousel
  class="it-carousel-wrapper splide {{ typeClass }}"
  [class.it-full-carousel]="fullCarousel"
  [class.it-big-img]="bigImg"
  [class.it-standard-image]="standardImage"
  data-bs-carousel-splide>
  @if (title) {
    <div class="it-header-block">
      <div class="it-header-block-title">
        <h2>{{ title }}</h2>
      </div>
    </div>
  }

  <div class="splide__track {{ trackClass }}">
    @if (items) {
      <ul class="splide__list">
        @for (item of items; track item) {
          <li class="splide__slide" [class.lined_slide]="lined">
            <div class="it-single-slide-wrapper">
              <ng-container *ngTemplateOutlet="item.htmlContent"></ng-container>
            </div>
          </li>
        }
      </ul>
    }
  </div>
</div>
`},{name:"ItCarouselItemComponent",id:"component-ItCarouselItemComponent-03b790322f1dbf93a3b9b63451261025548c549137b7fe527545395a4099eaafc1c36cd173f57af081cd8e3d508e813b78aaf038a956026ef47c3c3dfc0e15cc",file:"projects/design-angular-kit/src/lib/components/core/carousel/carousel-item/carousel-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-carousel-item",styleUrls:[],styles:[],templateUrl:["./carousel-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"htmlContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:`<p>The content of item</p>
`,line:19,rawdescription:`

The content of item
`,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef"}],modifierKind:[170,125]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:`<p>Carousel Item</p>
`,rawdescription:`

Carousel Item
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

/**
 * Carousel Item
 * @description element, image or text slide of carousel
 */
@Component({
  standalone: true,
  selector: 'it-carousel-item',
  templateUrl: './carousel-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItCarouselItemComponent extends ItAbstractComponent {
  /**
   * The content of item
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],templateData:`<ng-template>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItCheckboxComponent",id:"component-ItCheckboxComponent-da875a8125046dbbdc4c68db4011374a967d0e488cdeaf0b8ed89fe9d0b1677e00baff0dddda40ead9c9f5a0b18db9e4c341d694fbd34c285cfff30aa44d9ba2",file:"projects/design-angular-kit/src/lib/components/form/checkbox/checkbox.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-checkbox",styleUrls:[],styles:[],templateUrl:["./checkbox.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"checked",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1114,end:1132,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1115,end:1122,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If checkbox is checked
`,description:`<p>If checkbox is checked</p>
`,line:37,type:"boolean",decorators:[]},{required:!1,name:"group",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:996,end:1014,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:997,end:1004,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is checkbox group
`,description:`<p>If is checkbox group</p>
`,line:31,type:"boolean",decorators:[]},{required:!1,name:"indeterminate",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1240,end:1258,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1241,end:1248,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If checkbox is indeterminate
`,description:`<p>If checkbox is indeterminate</p>
`,line:43,type:"boolean",decorators:[]},{required:!1,name:"inline",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:879,end:897,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:880,end:887,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If show checkbox inline
`,description:`<p>If show checkbox inline</p>
`,line:25,type:"boolean",decorators:[]},{required:!1,name:"toggle",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:759,end:777,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:760,end:767,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If show checkbox as toggle
`,description:`<p>If show checkbox as toggle</p>
`,line:19,type:"boolean",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"markAsChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:56,deprecated:!1,deprecationMessage:"",modifierKind:[123]},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"},{name:"ReactiveFormsModule",type:"module"},{name:"AsyncPipe",type:"pipe"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ReactiveFormsModule, AsyncPipe],
})
export class ItCheckboxComponent extends ItAbstractFormComponent<boolean | null | undefined> implements OnInit, OnChanges {
  /**
   * If show checkbox as toggle
   * @default false
   */
  @Input({ transform: inputToBoolean }) toggle?: boolean;

  /**
   * If show checkbox inline
   * @default false
   */
  @Input({ transform: inputToBoolean }) inline?: boolean;

  /**
   * If is checkbox group
   * @default false
   */
  @Input({ transform: inputToBoolean }) group?: boolean;

  /**
   * If checkbox is checked
   * @default false
   */
  @Input({ transform: inputToBoolean }) checked?: boolean;

  /**
   * If checkbox is indeterminate
   * @default false
   */
  @Input({ transform: inputToBoolean }) indeterminate?: boolean;

  override ngOnInit() {
    super.ngOnInit();
    this.markAsChecked();
  }

  override ngOnChanges(changes: SimpleChanges) {
    if (changes['checked']) {
      this.markAsChecked();
    }
  }

  private markAsChecked(): void {
    if (this.control.value || this.checked === undefined) {
      return;
    }

    const value = this.checked;
    this.writeValue(value);
    return this.onChange(value);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit","OnChanges"],templateData:`<ng-container>
  <div class="form-check" [class.form-check-group]="group" [class.form-check-inline]="inline">
    @if (toggle) {
      <div class="toggles">
        <label [for]="id">
          <ng-container *ngTemplateOutlet="htmlLabel"></ng-container>
          <input
            [id]="id"
            type="checkbox"
            [formControl]="control"
            [attr.aria-describedby]="id + '-help'"
            (click)="$event.stopPropagation()" />
          <span class="lever"></span>
        </label>
      </div>
    } @else {
      <input
        [id]="id"
        type="checkbox"
        class="form-check-input"
        [class.is-invalid]="isInvalid"
        [class.is-valid]="isValid"
        [class.semi-checked]="indeterminate"
        [formControl]="control"
        [attr.aria-describedby]="id + '-help'"
        (click)="$event.stopPropagation()" />
      <label class="form-check-label" [for]="id">
        <ng-container *ngTemplateOutlet="htmlLabel"></ng-container>
      </label>
    }

    @if (group) {
      <small [id]="id + '-help'" class="form-text">
        <ng-content></ng-content>
      </small>
    }

    @if (isInvalid && group) {
      <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
        <ng-container *ngTemplateOutlet="error"></ng-container>
      </div>
    }
  </div>

  @if (isInvalid && !group) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <ng-container *ngTemplateOutlet="error"></ng-container>
    </div>
  }
</ng-container>

<ng-template #error>
  <div #customError>
    <ng-content select="[error]"></ng-content>
  </div>
  @if (!customError.hasChildNodes()) {
    {{ invalidMessage | async }}
  }
</ng-template>

<ng-template #htmlLabel>
  <div #customLabel>
    <ng-content select="[label]"></ng-content>
  </div>
  @if (!customLabel.hasChildNodes()) {
    {{ label }}
  }
</ng-template>
`},{name:"ItChipComponent",id:"component-ItChipComponent-b6f48811db4bb4513b7be8cc59f596ab6f314d7451baaf6bcd26c1fdb15b42b7f2ab9c6308f1153661131baa2885e176edc21aca8c1a7a9156dd91148ed41219",file:"projects/design-angular-kit/src/lib/components/core/chip/chip.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-chip",styleUrls:[],styles:[],templateUrl:["./chip.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"altAvatar",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il valore da aggiungere al parametro alt, di default ''
`,description:`<p>Indica il valore da aggiungere al parametro alt, di default &#39;&#39;</p>
`,line:110,type:"string",decorators:[]},{name:"avatar",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica l'url dell'avatar, se valorizzata viene mostrata
`,description:`<p>Indica l&#39;url dell&#39;avatar, se valorizzata viene mostrata</p>
`,line:97,type:"string | undefined",decorators:[]},{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il colore della chip
`,description:`<p>Indica il colore della chip</p>
`,line:58,type:"ChipColor | undefined",decorators:[]},{name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica se la chip \xE8 disabilitata
`,description:`<p>Indica se la chip \xE8 disabilitata</p>
`,line:71,type:"boolean",decorators:[]},{name:"icon",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il nome dell'icona, se valorizzata viene mostrata
`,description:`<p>Indica il nome dell&#39;icona, se valorizzata viene mostrata</p>
`,line:84,type:"IconName | undefined",decorators:[]},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica la label
`,description:`<p>Indica la label</p>
`,line:19,type:"string",decorators:[]},{name:"showCloseButton",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica se mostrate il pulante di chisura
`,description:`<p>Indica se mostrate il pulante di chisura</p>
`,line:32,type:"boolean",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",rawdescription:`

Indica il size
`,description:`<p>Indica il size</p>
`,line:45,type:'string | "lg"',decorators:[]}],outputsClass:[{name:"closeEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Evento emesso al click sul bottone di chiusura
`,description:`<p>Evento emesso al click sul bottone di chiusura</p>
`,line:123,type:"EventEmitter"}],propertiesClass:[{name:"_altAvatar",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:118,modifierKind:[123]},{name:"_avatar",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"string | undefined",optional:!1,description:"",line:105,modifierKind:[123]},{name:"_color",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"ChipColor | undefined",optional:!1,description:"",line:66,modifierKind:[123]},{name:"_disabled",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:79,modifierKind:[123]},{name:"_icon",defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"IconName | undefined",optional:!1,description:"",line:92,modifierKind:[123]},{name:"_label",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:27,modifierKind:[123]},{name:"_showCloseButton",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:40,modifierKind:[123]},{name:"_size",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:'string | "lg"',optional:!1,description:"",line:53,modifierKind:[123]},{name:"assetBasePath",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The bootstrap-italia asset folder path</p>
`,line:145,rawdescription:`

The bootstrap-italia asset folder path
`,modifierKind:[124],jsdoctags:[{pos:3042,end:3073,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3043,end:3050,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>./bootstrap-italia</p>
`}]},{name:"iconClose",defaultValue:"'close'",deprecated:!1,deprecationMessage:"",type:"IconName",optional:!1,description:"",line:132,modifierKind:[123]}],methodsClass:[{name:"clickToClose",args:[],optional:!1,returnType:"void",typeParameters:[],line:151,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgClass"},{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IconName } from '../../../interfaces/icon';
import { ChipColor } from '../../../interfaces/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';

@Component({
  standalone: true,
  selector: 'it-chip',
  templateUrl: './chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, TranslateModule],
})
export class ItChipComponent {
  /**
   * Indica la label
   */
  @Input() set label(value: string) {
    this._label = value;
  }

  get label(): string {
    return this._label;
  }

  private _label = '';

  /**
   * Indica se mostrate il pulante di chisura
   */
  @Input() set showCloseButton(value: boolean) {
    this._showCloseButton = value;
  }

  get showCloseButton(): boolean {
    return this._showCloseButton;
  }

  private _showCloseButton = false;

  /**
   * Indica il size
   */
  @Input() set size(value: '' | 'lg') {
    this._size = value;
  }

  get size(): '' | 'lg' {
    return this._size;
  }

  private _size: '' | 'lg' = '';

  /**
   * Indica il colore della chip
   */
  @Input() set color(value: ChipColor | undefined) {
    this._color = value;
  }

  get color(): ChipColor | undefined {
    return this._color;
  }

  private _color: ChipColor | undefined = undefined;

  /**
   * Indica se la chip \xE8 disabilitata
   */
  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  private _disabled: boolean = false;

  /**
   * Indica il nome dell'icona, se valorizzata viene mostrata
   */
  @Input() set icon(value: IconName | undefined) {
    this._icon = value;
  }

  get icon(): IconName | undefined {
    return this._icon;
  }

  private _icon: IconName | undefined = undefined;

  /**
   * Indica l'url dell'avatar, se valorizzata viene mostrata
   */
  @Input() set avatar(value: string | undefined) {
    this._avatar = value;
  }

  get avatar(): string | undefined {
    return this._avatar;
  }

  private _avatar: string | undefined = undefined;

  /**
   * Indica il valore da aggiungere al parametro alt, di default ''
   */
  @Input() set altAvatar(value: string) {
    this._altAvatar = value;
  }

  get altAvatar(): string {
    return this._altAvatar;
  }

  private _altAvatar: string = '';

  /**
   * Evento emesso al click sul bottone di chiusura
   */
  @Output() closeEvent = new EventEmitter();

  /**
   * Return the icon href
   */
  protected get iconHref(): string {
    return \`\${this.assetBasePath}/dist/svg/sprites.svg#it-\${this._icon}\`;
  }

  private iconClose: IconName = 'close';

  /**
   * Return the close icon href
   */
  protected get iconCloseHref(): string {
    return \`\${this.assetBasePath}/dist/svg/sprites.svg#it-\${this.iconClose}\`;
  }

  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  protected assetBasePath: string;

  constructor() {
    this.assetBasePath = inject(IT_ASSET_BASE_PATH);
  }

  clickToClose(): void {
    this.closeEvent.emit();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:145},extends:[],accessors:{label:{name:"label",setSignature:{name:"label",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"string",deprecated:!1,deprecationMessage:""}],returnType:"void",line:19,rawdescription:`

Indica la label
`,description:`<p>Indica la label</p>
`,jsdoctags:[{name:"value",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"label",type:"string",returnType:"string",line:23}},showCloseButton:{name:"showCloseButton",setSignature:{name:"showCloseButton",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:32,rawdescription:`

Indica se mostrate il pulante di chisura
`,description:`<p>Indica se mostrate il pulante di chisura</p>
`,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"showCloseButton",type:"boolean",returnType:"boolean",line:36}},size:{name:"size",setSignature:{name:"size",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:'string | "lg"',deprecated:!1,deprecationMessage:""}],returnType:"void",line:45,rawdescription:`

Indica il size
`,description:`<p>Indica il size</p>
`,jsdoctags:[{name:"value",type:'string | "lg"',deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"size",type:"",returnType:'string | "lg"',line:49}},color:{name:"color",setSignature:{name:"color",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"ChipColor | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:58,rawdescription:`

Indica il colore della chip
`,description:`<p>Indica il colore della chip</p>
`,jsdoctags:[{name:"value",type:"ChipColor | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"color",type:"",returnType:"ChipColor | undefined",line:62}},disabled:{name:"disabled",setSignature:{name:"disabled",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:71,rawdescription:`

Indica se la chip \xE8 disabilitata
`,description:`<p>Indica se la chip \xE8 disabilitata</p>
`,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"disabled",type:"boolean",returnType:"boolean",line:75}},icon:{name:"icon",setSignature:{name:"icon",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"IconName | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:84,rawdescription:`

Indica il nome dell'icona, se valorizzata viene mostrata
`,description:`<p>Indica il nome dell&#39;icona, se valorizzata viene mostrata</p>
`,jsdoctags:[{name:"value",type:"IconName | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"icon",type:"",returnType:"IconName | undefined",line:88}},avatar:{name:"avatar",setSignature:{name:"avatar",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:""}],returnType:"void",line:97,rawdescription:`

Indica l'url dell'avatar, se valorizzata viene mostrata
`,description:`<p>Indica l&#39;url dell&#39;avatar, se valorizzata viene mostrata</p>
`,jsdoctags:[{name:"value",type:"string | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"avatar",type:"",returnType:"string | undefined",line:101}},altAvatar:{name:"altAvatar",setSignature:{name:"altAvatar",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"string",deprecated:!1,deprecationMessage:""}],returnType:"void",line:110,rawdescription:`

Indica il valore da aggiungere al parametro alt, di default ''
`,description:`<p>Indica il valore da aggiungere al parametro alt, di default &#39;&#39;</p>
`,jsdoctags:[{name:"value",type:"string",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"altAvatar",type:"string",returnType:"string",line:114}},iconHref:{name:"iconHref",getSignature:{name:"iconHref",type:"string",returnType:"string",line:128,rawdescription:`

Return the icon href
`,description:`<p>Return the icon href</p>
`}},iconCloseHref:{name:"iconCloseHref",getSignature:{name:"iconCloseHref",type:"string",returnType:"string",line:137,rawdescription:`

Return the close icon href
`,description:`<p>Return the close icon href</p>
`}}},templateData:`<div
  class="chip"
  [ngClass]="[
    !showCloseButton ? 'chip-simple' : 'alert',
    size === 'lg' ? 'chip-lg' : '',
    color ? 'chip-' + color : '',
    disabled ? 'chip-disabled' : '',
  ]">
  @if (icon) {
    <svg class="icon icon-xs">
      <use [attr.href]="iconHref" [attr.xlink:href]="iconHref"></use>
    </svg>
  }
  @if (avatar) {
    <div class="avatar size-xs"><img [src]="avatar" [alt]="altAvatar" /></div>
  }
  <span class="chip-label">{{ label }}</span>
  @if (showCloseButton) {
    <button (click)="clickToClose()" [disabled]="disabled">
      <svg class="icon">
        <use [attr.href]="iconCloseHref" [attr.xlink:href]="iconCloseHref"></use>
      </svg>
      <span class="visually-hidden">{{ 'it.core.remove' | translate }} {{ label }}</span>
    </button>
  }
</div>
`},{name:"ItCollapseComponent",id:"component-ItCollapseComponent-54e3d7dc16ecf201a42ab49ea79a44c0c13c01b61185fa6ac02f7532a106ba706a66e0a76bb10c5bdc5e682fc9bbb185791f840252cb11478bb143e243bf184a",file:"projects/design-angular-kit/src/lib/components/core/collapse/collapse.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itCollapse",inputs:[],outputs:[],providers:[],selector:"it-collapse",styleUrls:[],styles:[],templateUrl:["./collapse.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:30,type:"string",decorators:[]},{required:!1,name:"multi",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:644,end:662,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:645,end:652,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Enable multiple collapse
`,description:`<p>Enable multiple collapse</p>
`,line:19,type:"boolean",decorators:[]},{required:!1,name:"opened",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:785,end:803,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:786,end:793,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Toggles the collapsible element on invocation
`,description:`<p>Toggles the collapsible element on invocation</p>
`,line:25,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).</p>
`,line:50,type:"EventEmitter<Event>"},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the hide method is called.
`,description:`<p>This event fires immediately when the hide method is called.</p>
`,line:45,type:"EventEmitter<Event>"},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the show method is called.
`,description:`<p>This event fires immediately when the show method is called.</p>
`,line:35,type:"EventEmitter<Event>"},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
`,description:`<p>This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).</p>
`,line:40,type:"EventEmitter<Event>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"collapse",deprecated:!1,deprecationMessage:"",type:"Collapse",optional:!0,description:"",line:52,modifierKind:[123]},{name:"collapseDiv",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!0,description:"",line:56,decorators:[{name:"ViewChild",stringifiedArguments:"'collapse'"}],modifierKind:[170,124]},{name:"open",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:54,modifierKind:[123]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:121,deprecated:!1,deprecationMessage:"",rawdescription:`

Eliminates the possibility of an item being resealable
`,description:`<p>Eliminates the possibility of an item being resealable</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:106,deprecated:!1,deprecationMessage:"",rawdescription:`

Hides a resealable item
NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)
`,description:`<p>Hides a resealable item
NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)</p>
`,modifierKind:[125]},{name:"isOpen",args:[],optional:!1,returnType:"boolean",typeParameters:[],line:90,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows if collapse is open or not
`,description:`<p>Shows if collapse is open or not</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:98,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows a resealable item
NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).
`,description:`<p>Shows a resealable item
NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).</p>
`,modifierKind:[125]},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:114,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggle a collapsible item to show or hide it.
NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)
`,description:`<p>Toggle a collapsible item to show or hide it.
NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)</p>
`,modifierKind:[125]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Collapse } from 'bootstrap-italia';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-collapse',
  templateUrl: './collapse.component.html',
  exportAs: 'itCollapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItCollapseComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * Enable multiple collapse
   * @default false
   */
  @Input({ transform: inputToBoolean }) multi?: boolean;

  /**
   * Toggles the collapsible element on invocation
   * @default false
   */
  @Input({ transform: inputToBoolean }) opened?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

  /**
   * This event fires immediately when the show method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires immediately when the hide method is called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  private collapse?: Collapse;

  private open: boolean = false;

  @ViewChild('collapse') protected collapseDiv?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');

    if (this.collapseDiv) {
      const element = this.collapseDiv.nativeElement;
      this.collapse = Collapse.getOrCreateInstance(element, {
        toggle: this.opened,
      });

      element.addEventListener('show.bs.collapse', event => {
        this.open = true;
        this.showEvent.emit(event);
      });
      element.addEventListener('shown.bs.collapse', event => {
        this.open = true;
        this.shownEvent.emit(event);
      });
      element.addEventListener('hide.bs.collapse', event => {
        this.open = false;
        this.hideEvent.emit(event);
      });
      element.addEventListener('hidden.bs.collapse', event => {
        this.open = false;
        this.hiddenEvent.emit(event);
      });
    }
  }

  /**
   * Shows if collapse is open or not
   */
  public isOpen(): boolean {
    return this.open;
  }

  /**
   * Shows a resealable item
   * NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).
   */
  public show(): void {
    this.collapse?.show();
  }

  /**
   * Hides a resealable item
   * NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)
   */
  public hide(): void {
    this.collapse?.hide();
  }

  /**
   * Toggle a collapsible item to show or hide it.
   * NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)
   */
  public toggle(): void {
    this.collapse?.toggle();
  }

  /**
   * Eliminates the possibility of an item being resealable
   */
  public dispose(): void {
    this.collapse?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit"],templateData:`<div [id]="id" class="collapse {{ class }}" [class.multi-collapse]="multi" #collapse>
  <ng-content></ng-content>
</div>
`},{name:"ItDimmerButtonsComponent",id:"component-ItDimmerButtonsComponent-b57776f05400cc0c56945dd5babb7afb06686caa39a0aa57900893125f9c5edf0a5513c436395ff5ad12a4719dc51f62b8a2261185ee2bae11d5336e682f0774",file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer-buttons/dimmer-buttons.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-dimmer-buttons",styleUrls:[],styles:[],templateUrl:["./dimmer-buttons.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"hasOneButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:400,end:418,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:401,end:408,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Indica se abbiamo 1 solo bottone
`,description:`<p>Indica se abbiamo 1 solo bottone</p>
`,line:16,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[{name:"_hasOneButton",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:22,modifierKind:[123]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgClass"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'it-dimmer-buttons',
  templateUrl: './dimmer-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class ItDimmerButtonsComponent {
  /**
   * Indica se abbiamo 1 solo bottone
   * @default false
   */
  @Input() set hasOneButton(value: boolean) {
    this._hasOneButton = value;
  }
  get hasOneButton() {
    return this._hasOneButton;
  }
  private _hasOneButton = false;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],accessors:{hasOneButton:{name:"hasOneButton",setSignature:{name:"hasOneButton",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:16,rawdescription:`

Indica se abbiamo 1 solo bottone
`,description:`<p>Indica se abbiamo 1 solo bottone</p>
`,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"hasOneButton",type:"",returnType:"",line:19}}},templateData:`<div class="dimmer-buttons bg-dark" [ngClass]="{ 'single-button': hasOneButton }">
  <ng-content></ng-content>
</div>
`},{name:"ItDimmerComponent",id:"component-ItDimmerComponent-cda64066f2dcd255dd48c59898edcbe2882dd830f4d2696a257107fbcb9d4d0f5d84b6f8bfb0dd9572f3758f3dc23bda789b674d77ddb47a71b1c2f044446fe8",file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-dimmer",styleUrls:[],styles:[],templateUrl:["./dimmer.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"active",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:740,end:758,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:741,end:748,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Dimmer status
`,description:`<p>Dimmer status</p>
`,line:25,type:"boolean",decorators:[]},{name:"color",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:939,end:954,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:940,end:947,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>&#39;&#39;</p>
`}],rawdescription:`

Colore del dimmer
`,description:`<p>Colore del dimmer</p>
`,line:37,type:"DimmerColor",decorators:[]}],outputsClass:[],propertiesClass:[{name:"_active",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:31,modifierKind:[123]},{name:"_color",defaultValue:"''",deprecated:!1,deprecationMessage:"",type:"DimmerColor",optional:!1,description:"",line:43,modifierKind:[123]}],methodsClass:[{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:47,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgClass"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

export type DimmerColor = '' | 'dimmer-primary';

@Component({
  standalone: true,
  selector: 'it-dimmer',
  templateUrl: './dimmer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('150ms', style({ opacity: 0.92 }))]),
      transition(':leave', [animate('150ms', style({ opacity: 0 }))]),
    ]),
  ],
  imports: [NgClass],
})
export class ItDimmerComponent implements OnInit {
  /**
   * Dimmer status
   * @default false
   */
  @Input() set active(value: boolean) {
    this._active = value;
  }
  get active() {
    return this._active;
  }
  private _active = false;

  /**
   * Colore del dimmer
   * @default ''
   */
  @Input() set color(value: DimmerColor) {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  private _color: DimmerColor = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef?.nativeElement?.parentElement?.classList?.add('dimmable');
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:""}],line:43,jsdoctags:[{name:"elementRef",type:"ElementRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit"],accessors:{active:{name:"active",setSignature:{name:"active",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"void",line:25,rawdescription:`

Dimmer status
`,description:`<p>Dimmer status</p>
`,jsdoctags:[{name:"value",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"active",type:"",returnType:"",line:28}},color:{name:"color",setSignature:{name:"color",type:"void",deprecated:!1,deprecationMessage:"",args:[{name:"value",type:"DimmerColor",deprecated:!1,deprecationMessage:""}],returnType:"void",line:37,rawdescription:`

Colore del dimmer
`,description:`<p>Colore del dimmer</p>
`,jsdoctags:[{name:"value",type:"DimmerColor",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},getSignature:{name:"color",type:"",returnType:"",line:40}}},templateData:`@if (active) {
  <div class="dimmer" @fade [ngClass]="[color]">
    <div class="dimmer-inner">
      <ng-content></ng-content>
    </div>
  </div>
}
`},{name:"ItDimmerIconComponent",id:"component-ItDimmerIconComponent-25ad30342f75ccfaf5bc083e9f424b111db2657b7f4d1c54f85c52863d01f00609e086425b5a9e762b9bef9f9800232becfdcc958a4bc2c4cb376529c96a0845",file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer-icon/dimmer-icon.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-dimmer-icon",styleUrls:[],styles:[],templateUrl:["./dimmer-icon.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'it-dimmer-icon',
  templateUrl: './dimmer-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItDimmerIconComponent {}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`<div class="dimmer-icon">
  <ng-content></ng-content>
</div>
`},{name:"ItDropdownComponent",id:"component-ItDropdownComponent-4f4cd3f3679a07db138e35d97d57f693c8127f5f5818358ea683c9fa387165820e4daf0768983e660646c10e3df2885b71e6b867230d548b72098843227ffeb9",file:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown/dropdown.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itDropdown",inputs:[],outputs:[],providers:[],selector:"it-dropdown",styleUrls:["./dropdown.component.scss"],styles:[],templateUrl:["./dropdown.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

Button color
`,description:`<p>Button color</p>
`,line:41,type:"ButtonColor",decorators:[]},{required:!1,name:"dark",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1752,end:1770,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1753,end:1760,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Dark menu style
`,description:`<p>Dark menu style</p>
`,line:67,type:"boolean",decorators:[]},{name:"direction",deprecated:!1,deprecationMessage:"",rawdescription:`

To open menu items to:
- <strong>dropup</strong>: up
- <strong>dropend</strong>: right
- <strong>dropstart</strong>: left
`,description:`<p>To open menu items to:</p>
<ul>
<li><strong>dropup</strong>: up</li>
<li><strong>dropend</strong>: right</li>
<li><strong>dropstart</strong>: left</li>
</ul>
`,line:49,type:"DropdownDirection | undefined",decorators:[]},{required:!1,name:"fullWidth",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1511,end:1529,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1512,end:1519,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To get a dropdown menu as wide as the element containing the dropdown button
`,description:`<p>To get a dropdown menu as wide as the element containing the dropdown button</p>
`,line:55,type:"boolean",decorators:[]},{required:!1,name:"megamenu",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1638,end:1656,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1639,end:1646,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Contains a Megamenu element
`,description:`<p>Contains a Megamenu element</p>
`,line:61,type:"boolean",decorators:[]},{name:"mode",defaultValue:"'button'",deprecated:!1,deprecationMessage:"",rawdescription:`

Dropdown mode
`,description:`<p>Dropdown mode</p>
`,line:36,type:'"button" | "link" | "nav"',decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.
`,description:`<p>Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.</p>
`,line:92,type:"EventEmitter<Event>"},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fires immediately when the hide instance method has been called.
`,description:`<p>Fires immediately when the hide instance method has been called.</p>
`,line:87,type:"EventEmitter<Event>"},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fires immediately when the show instance method is called.
`,description:`<p>Fires immediately when the show instance method is called.</p>
`,line:77,type:"EventEmitter<Event>"},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when the dropdown has been made visible to the user and CSS transitions have completed.
`,description:`<p>Fired when the dropdown has been made visible to the user and CSS transitions have completed.</p>
`,line:82,type:"EventEmitter<Event>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"dropdown",deprecated:!1,deprecationMessage:"",type:"Dropdown",optional:!0,description:"",line:94,modifierKind:[123]},{name:"dropdownButton",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLButtonElement>",optional:!0,description:"",line:96,decorators:[{name:"ViewChild",stringifiedArguments:"'dropdownButton'"}],modifierKind:[170,123]},{name:"items",deprecated:!1,deprecationMessage:"",type:"QueryList<ItDropdownItemComponent>",optional:!0,description:`<p>The dropdown items</p>
`,line:72,rawdescription:`

The dropdown items
`,decorators:[{name:"ContentChildren",stringifiedArguments:"ItDropdownItemComponent"}],modifierKind:[170]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:180,deprecated:!1,deprecationMessage:"",rawdescription:`

Destroys an element's dropdown. (Removes stored data on the DOM element)
`,description:`<p>Destroys an element&#39;s dropdown. (Removes stored data on the DOM element)</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:166,deprecated:!1,deprecationMessage:"",rawdescription:`

Hides the dropdown menu of a given navbar or tabbed navigation.
`,description:`<p>Hides the dropdown menu of a given navbar or tabbed navigation.</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:119,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:109,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"setDarkItems",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Set child items dark mode
`,description:`<p>Set child items dark mode</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:3383,end:3390,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}]},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:159,deprecated:!1,deprecationMessage:"",rawdescription:`

Shows the dropdown menu of a given navbar or tabbed navigation.
`,description:`<p>Shows the dropdown menu of a given navbar or tabbed navigation.</p>
`,modifierKind:[125]},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:152,deprecated:!1,deprecationMessage:"",rawdescription:`

Toggles the dropdown menu of a given navbar or tabbed navigation.
`,description:`<p>Toggles the dropdown menu of a given navbar or tabbed navigation.</p>
`,modifierKind:[125]},{name:"update",args:[],optional:!1,returnType:"void",typeParameters:[],line:173,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the position of an element's dropdown.
`,description:`<p>Updates the position of an element&#39;s dropdown.</p>
`,modifierKind:[125]},{name:"updateListeners",args:[],optional:!1,returnType:"void",typeParameters:[],line:137,deprecated:!1,deprecationMessage:"",modifierKind:[123]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { ButtonColor, DropdownDirection } from '../../../../interfaces/core';
import { ItDropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { Dropdown } from 'bootstrap-italia';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  exportAs: 'itDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet],
})
export class ItDropdownComponent extends ItAbstractComponent implements AfterViewInit, OnChanges {
  /**
   * Dropdown mode
   */
  @Input() mode: 'button' | 'link' | 'nav' = 'button';

  /**
   * Button color
   */
  @Input() color?: ButtonColor;

  /**
   * To open menu items to:
   * - <strong>dropup</strong>: up
   * - <strong>dropend</strong>: right
   * - <strong>dropstart</strong>: left
   */
  @Input() direction: DropdownDirection | undefined;

  /**
   * To get a dropdown menu as wide as the element containing the dropdown button
   * @default false
   */
  @Input({ transform: inputToBoolean }) fullWidth?: boolean;

  /**
   * Contains a Megamenu element
   * @default false
   */
  @Input({ transform: inputToBoolean }) megamenu?: boolean;

  /**
   * Dark menu style
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The dropdown items
   */
  @ContentChildren(ItDropdownItemComponent) items?: QueryList<ItDropdownItemComponent>;

  /**
   * Fires immediately when the show instance method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has been made visible to the user and CSS transitions have completed.
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fires immediately when the hide instance method has been called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  private dropdown?: Dropdown;

  @ViewChild('dropdownButton') private dropdownButton?: ElementRef<HTMLButtonElement>;

  get buttonClass(): string {
    let btnClass = 'btn dropdown-toggle';
    if (this.color) {
      btnClass += \` btn-\${this.color}\`;
    } else {
      btnClass += \` btn-dropdown\`;
    }

    return btnClass;
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark'] && !changes['dark'].firstChange) {
      this.setDarkItems();
    }
    if (changes['mode'] && !changes['mode'].firstChange) {
      this.updateListeners();
    }
    super.ngOnChanges(changes);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.setDarkItems();
    this.updateListeners();
  }

  /**
   * Set child items dark mode
   * @private
   */
  private setDarkItems(): void {
    if (this.dark !== undefined) {
      this.items?.forEach(item => {
        item.setDark(!!this.dark);
      });
    }
  }

  private updateListeners(): void {
    if (this.dropdownButton) {
      const element = this.dropdownButton.nativeElement;
      this.dropdown = Dropdown.getOrCreateInstance(element);

      element.addEventListener('show.bs.dropdown', event => this.showEvent.emit(event));
      element.addEventListener('shown.bs.dropdown', event => this.shownEvent.emit(event));
      element.addEventListener('hide.bs.dropdown', event => this.hideEvent.emit(event));
      element.addEventListener('hidden.bs.dropdown', event => this.hiddenEvent.emit(event));
    }
  }

  /**
   * Toggles the dropdown menu of a given navbar or tabbed navigation.
   */
  public toggle(): void {
    this.dropdown?.toggle();
  }

  /**
   * Shows the dropdown menu of a given navbar or tabbed navigation.
   */
  public show(): void {
    this.dropdown?.show();
  }

  /**
   * Hides the dropdown menu of a given navbar or tabbed navigation.
   */
  public hide(): void {
    this.dropdown?.hide();
  }

  /**
   * Updates the position of an element's dropdown.
   */
  public update(): void {
    this.dropdown?.update();
  }

  /**
   * Destroys an element's dropdown. (Removes stored data on the DOM element)
   */
  public dispose(): void {
    this.dropdown?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.link-list-heading:empty {
  display: none;
}
`,styleUrl:"./dropdown.component.scss"}],stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit","OnChanges"],accessors:{buttonClass:{name:"buttonClass",getSignature:{name:"buttonClass",type:"string",returnType:"string",line:98}}},templateData:`<div class="dropdown {{ direction }}" [class.nav-item]="mode === 'nav'" [class.megamenu]="megamenu">
  @if (mode === 'button') {
    <button
      #dropdownButton
      [id]="id"
      [class]="buttonClass"
      type="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <ng-container *ngTemplateOutlet="buttonContent"></ng-container>
      <it-icon svgClass="icon-expand" name="expand" size="sm" [color]="this.color ? 'light' : 'primary'"></it-icon>
    </button>
  } @else {
    <a
      #dropdownButton
      [id]="id"
      [class.btn]="mode === 'link'"
      [class.btn-dropdown]="mode === 'link'"
      [class.nav-link]="mode === 'nav'"
      class="dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <ng-container *ngTemplateOutlet="buttonContent"></ng-container>
      <it-icon svgClass="icon-expand" name="expand" size="sm"></it-icon>
    </a>
  }

  <div class="dropdown-menu" [class.full-width]="fullWidth" [class.dark]="dark" [attr.aria-labelledby]="id">
    <div class="link-list-wrapper">
      <div class="link-list-heading">
        <ng-content select="[listHeading]"></ng-content>
      </div>
      <ul class="link-list">
        <ng-content select="[list]"></ng-content>
      </ul>
    </div>
  </div>
</div>

<ng-template #buttonContent>
  <ng-content select="[button]"></ng-content>
</ng-template>
`},{name:"ItDropdownItemComponent",id:"component-ItDropdownItemComponent-4c0ee4b88dc9054701b55df8cd808ca09f98471bbdecfe922a1e63b706b540076c2f04fd99384ae469328d135dfa0318e5fb8f8d3dd11386f83a192d25fd0913",file:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown-item/dropdown-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-dropdown-item",styleUrls:["./dropdown-item.component.scss"],styles:[],templateUrl:["./dropdown-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"active",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:862,end:880,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:863,end:870,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Active item
`,description:`<p>Active item</p>
`,line:28,type:"boolean",decorators:[]},{required:!1,name:"divider",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:753,end:771,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:754,end:761,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show divider
`,description:`<p>Show divider</p>
`,line:22,type:"boolean",decorators:[]},{name:"iconName",deprecated:!1,deprecationMessage:"",rawdescription:`

The name of icon to show
`,description:`<p>The name of icon to show</p>
`,line:39,type:"IconName | undefined",decorators:[]},{name:"iconPosition",defaultValue:"'right'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1187,end:1205,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1188,end:1195,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>right</p>
`}],rawdescription:`

The icon position
`,description:`<p>The icon position</p>
`,line:45,type:'"left" | "right"',decorators:[]},{required:!1,name:"large",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:988,end:1006,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:989,end:996,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To increase the size of links
`,description:`<p>To increase the size of links</p>
`,line:34,type:"boolean",decorators:[]},{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:41,type:"string",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1245,end:1263,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1246,end:1253,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is disabled link
`,description:`<p>Is disabled link</p>
`,line:36,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"externalLink",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1126,end:1144,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1127,end:1134,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is an external link (false to not use Angular router link)
`,description:`<p>Is an external link (false to not use Angular router link)</p>
`,line:30,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"href",deprecated:!1,deprecationMessage:"",rawdescription:`

The router link action

Commands to pass to Router#createUrlTree.
- array: commands to pass to Router#createUrlTree.
- string: shorthand for array of commands with just the string, i.e. ['/route']
- null|undefined: Disables the link by removing the href
`,description:`<p>The router link action</p>
<p>Commands to pass to Router#createUrlTree.</p>
<ul>
<li>array: commands to pass to Router#createUrlTree.</li>
<li>string: shorthand for array of commands with just the string, i.e. [&#39;/route&#39;]</li>
<li>null|undefined: Disables the link by removing the href</li>
</ul>
`,line:24,type:"any[] | string | null | undefined",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"isDark",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:`<p>Change icon color if menu is dark</p>
`,line:51,rawdescription:`

Change icon color if menu is dark
`,jsdoctags:[{pos:1312,end:1330,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1313,end:1320,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"setDark",args:[{name:"dark",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:68,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"dark",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:43,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:48,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"},{name:"ItLinkComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItLinkComponent } from '../../link/link.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';

import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, ItLinkComponent],
})
export class ItDropdownItemComponent extends ItLinkComponent {
  /**
   * Show divider
   * @default false
   */
  @Input({ transform: inputToBoolean }) divider?: boolean;

  /**
   * Active item
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * To increase the size of links
   * @default false
   */
  @Input({ transform: inputToBoolean }) large?: boolean;

  /**
   * The name of icon to show
   */
  @Input() iconName: IconName | undefined;

  /**
   * The icon position
   * @default right
   */
  @Input() iconPosition: 'left' | 'right' = 'right';

  /**
   * Change icon color if menu is dark
   * @default false
   */
  isDark: boolean = false;

  get linkClass(): string {
    let linkClass = \`list-item \${this.active ? 'active' : 'dropdown-item'}\`;
    if (this.disabled) {
      linkClass += ' disabled';
    }
    if (this.large) {
      linkClass += ' large';
    }
    if (this.iconName) {
      linkClass += \` \${this.iconPosition === 'right' ? 'right-icon' : 'left-icon'}\`;
    }

    return linkClass;
  }

  setDark(dark: boolean): void {
    if (this.isDark !== dark) {
      this.isDark = dark;
      this._changeDetectorRef.detectChanges();
    }
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.list-item.disabled {
  pointer-events: none;
  cursor: default;
}
`,styleUrl:"./dropdown-item.component.scss"}],stylesData:"",extends:["ItLinkComponent"],accessors:{linkClass:{name:"linkClass",getSignature:{name:"linkClass",type:"string",returnType:"string",line:53}}},templateData:`<li>
  @if (divider) {
    <span class="divider"></span>
  } @else {
    <it-link [class]="linkClass" [id]="id" [href]="href" [externalLink]="externalLink" [disabled]="disabled">
      @if (iconName && iconPosition === 'left') {
        <it-icon size="sm" [name]="iconName" [color]="isDark ? 'light' : 'primary'" [svgClass]="iconPosition"></it-icon>
      }
      <span><ng-content></ng-content></span>
      @if (iconName && iconPosition === 'right') {
        <it-icon size="sm" [name]="iconName" [color]="isDark ? 'light' : 'primary'" [svgClass]="iconPosition"></it-icon>
      }
      @if (active) {
        <span class="visually-hidden">{{ 'it.core.active' | translate }}</span>
      }
    </it-link>
  }
</li>
`},{name:"ItErrorPageComponent",id:"component-ItErrorPageComponent-01543b7f27478318ff11356f91f5ddc317892e0cfa80687f6ffc9aad1c3e87a7387f363479af3c2f78b3f4d3a102d92b530b5f52b955843c971a81284772502b",file:"projects/design-angular-kit/src/lib/components/utils/error-page/error-page.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-error-page",styleUrls:[],styles:[],templateUrl:["./error-page.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"errorCode",deprecated:!1,deprecationMessage:"",rawdescription:`

The error code to show
`,description:`<p>The error code to show</p>
`,line:19,type:'number | "404" | "403" | "500" | undefined',decorators:[]},{name:"errorDescription",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom error description
- If set it will be displayed instead of the default description.
- It is possible to use i18n keys
`,description:`<p>Custom error description</p>
<ul>
<li>If set it will be displayed instead of the default description.</li>
<li>It is possible to use i18n keys</li>
</ul>
`,line:39,type:"string | undefined",decorators:[]},{name:"errorTitle",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom error title
- If set it will be displayed instead of the default title.
- It is possible to use i18n keys
`,description:`<p>Custom error title</p>
<ul>
<li>If set it will be displayed instead of the default title.</li>
<li>It is possible to use i18n keys</li>
</ul>
`,line:32,type:"string | undefined",decorators:[]},{required:!1,name:"showBackButton",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1359,end:1383,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1360,end:1367,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true - show</p>
`}],rawdescription:`

Show/Hide back button
`,description:`<p>Show/Hide back button</p>
`,line:45,type:"boolean",decorators:[]},{required:!1,name:"showErrorCode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:835,end:859,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:836,end:843,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true - show</p>
`}],rawdescription:`

Show/Hide error code
`,description:`<p>Show/Hide error code</p>
`,line:25,type:"boolean",decorators:[]},{required:!1,name:"showHomeButton",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1498,end:1522,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1499,end:1506,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true - show</p>
`}],rawdescription:`

Show/Hide home button
`,description:`<p>Show/Hide home button</p>
`,line:51,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"RouterLink"},{name:"ItBackButtonComponent",type:"component"},{name:"ItButtonDirective",type:"directive"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ItBackButtonComponent } from '../../navigation/back-button/back-button.component';
import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-error-page',
  templateUrl: './error-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, RouterLink, ItBackButtonComponent, ItButtonDirective],
})
export class ItErrorPageComponent {
  /**
   * The error code to show
   */
  @Input() errorCode: number | 404 | 403 | 500 | undefined;

  /**
   * Show/Hide error code
   * @default true - show
   */
  @Input({ transform: inputToBoolean }) showErrorCode?: boolean = true;

  /**
   * Custom error title
   * - If set it will be displayed instead of the default title.
   * - It is possible to use i18n keys
   */
  @Input() errorTitle: string | undefined;

  /**
   * Custom error description
   * - If set it will be displayed instead of the default description.
   * - It is possible to use i18n keys
   */
  @Input() errorDescription: string | undefined;

  /**
   * Show/Hide back button
   * @default true - show
   */
  @Input({ transform: inputToBoolean }) showBackButton?: boolean = true;

  /**
   * Show/Hide home button
   * @default true - show
   */
  @Input({ transform: inputToBoolean }) showHomeButton?: boolean = true;

  constructor(private readonly route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      if (!this.errorCode && data['errorCode']) {
        this.errorCode = data['errorCode']; // Get errorCode from route data
      }
      if (data['showErrorCode'] !== undefined) {
        this.showErrorCode = data['showErrorCode']; // Get showErrorCode from route data
      }
      if (!this.errorTitle && data['errorTitle']) {
        this.errorTitle = data['errorTitle']; // Get errorTitle from route data
      }
      if (!this.errorDescription && data['errorDescription']) {
        this.errorDescription = data['errorDescription']; // Get errorDescription from route data
      }
      if (data['showBackButton'] !== undefined) {
        this.showBackButton = data['showBackButton']; // Get showBackButton from route data
      }
      if (data['showHomeButton'] !== undefined) {
        this.showHomeButton = data['showHomeButton']; // Get showHomeButton from route data
      }
    });
  }

  get isDefaultErrorCode(): boolean {
    return this.errorCode === 404 || this.errorCode === 403 || this.errorCode === 500;
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"route",type:"ActivatedRoute",deprecated:!1,deprecationMessage:""}],line:51,jsdoctags:[{name:"route",type:"ActivatedRoute",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],accessors:{isDefaultErrorCode:{name:"isDefaultErrorCode",getSignature:{name:"isDefaultErrorCode",type:"boolean",returnType:"boolean",line:76}}},templateData:`<div class="container text-center mt-5">
  @if (errorCode && showErrorCode) {
    <h1>{{ errorCode }}</h1>
  }
  <h2>
    @if (!errorTitle && isDefaultErrorCode) {
      {{ 'it.utils.error-page.' + errorCode + '.title' | translate }}
    } @else {
      {{ errorTitle || 'it.errors.generic' | translate }}
    }
  </h2>

  <p class="mt-3 w-75 mx-auto">
    @if (!errorDescription && isDefaultErrorCode) {
      {{ 'it.utils.error-page.' + errorCode + '.description' | translate }}
    } @else {
      {{ errorDescription || 'it.errors.generic-support-message' | translate }}
    }
  </p>

  @if (showBackButton || showHomeButton) {
    <div class="mt-5">
      @if (showBackButton) {
        <it-back-button></it-back-button>
      }
      @if (showHomeButton) {
        <a itButton="outline-primary" class="ms-3" routerLink="/" title="{{ 'it.utils.error-page.go-to-homepage' | translate }}">
          {{ 'it.utils.error-page.go-to-homepage' | translate }}
        </a>
      }
    </div>
  }
</div>
`},{name:"ItHeaderComponent",id:"component-ItHeaderComponent-e7ff85d6e44c99e4dee48650bf39a30e93be0b1add1c71febd2059b537f6d2f92cbc4f3a5c793f5db838839d7343cc9ae829f10c2a80bc7d9f1c154cefe9d3cc",file:"projects/design-angular-kit/src/lib/components/navigation/header/header.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-header",styleUrls:["./header.component.scss"],styles:[],templateUrl:["./header.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"expand",defaultValue:"true",deprecated:!1,deprecationMessage:"",line:55,type:"boolean",decorators:[]},{required:!1,name:"light",deprecated:!1,deprecationMessage:"",line:31,type:"boolean",decorators:[]},{name:"loginStyle",defaultValue:"'none'",deprecated:!1,deprecationMessage:"",line:44,type:'"none" | "default" | "full"',decorators:[]},{required:!1,name:"megamenu",deprecated:!1,deprecationMessage:"",line:54,type:"boolean",decorators:[]},{required:!1,name:"showSearch",defaultValue:"true",deprecated:!1,deprecationMessage:"",line:39,type:"boolean",decorators:[]},{required:!1,name:"showSlim",defaultValue:"true",deprecated:!1,deprecationMessage:"",line:35,type:"boolean",decorators:[]},{name:"slimTitle",deprecated:!1,deprecationMessage:"",line:41,type:"string | undefined",decorators:[]},{name:"slimTitleLink",defaultValue:"'#'",deprecated:!1,deprecationMessage:"",line:42,type:"string | undefined",decorators:[]},{required:!1,name:"smallHeader",defaultValue:"true",deprecated:!1,deprecationMessage:"",line:37,type:"boolean",decorators:[]},{required:!1,name:"sticky",deprecated:!1,deprecationMessage:"",line:33,type:"boolean",decorators:[]}],outputsClass:[{name:"loginClick",deprecated:!1,deprecationMessage:"",line:46,type:"EventEmitter<Event>"},{name:"searchClick",deprecated:!1,deprecationMessage:"",line:48,type:"EventEmitter<Event>"}],propertiesClass:[{name:"headerWrapper",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLButtonElement>",optional:!0,description:"",line:50,decorators:[{name:"ViewChild",stringifiedArguments:"'headerWrapper'"}],modifierKind:[170,123]},{name:"itNavBarComponent",deprecated:!1,deprecationMessage:"",type:"ItNavBarComponent",optional:!0,description:"",line:52,decorators:[{name:"ViewChild",stringifiedArguments:"ItNavBarComponent"}],modifierKind:[170,123]},{name:"stickyHeader",deprecated:!1,deprecationMessage:"",type:"HeaderSticky",optional:!0,description:"",line:57,modifierKind:[123]}],methodsClass:[{name:"emitLoginClick",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:86,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"emitSearchClick",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:91,deprecated:!1,deprecationMessage:"",modifierKind:[124],jsdoctags:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:64,deprecated:!1,deprecationMessage:""},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:68,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"toggleCollapse",args:[],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:""},{name:"updateListeners",args:[],optional:!1,returnType:"void",typeParameters:[],line:80,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"ItIconComponent",type:"component"},{name:"ItButtonDirective",type:"directive"},{name:"ItNavBarModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItNavBarModule } from '../navbar/navbar.module';
import { ItNavBarComponent } from '../navbar/navbar/navbar.component';

import { ItButtonDirective } from '../../core/button/button.directive';
import { inputToBoolean } from '../../../utils/coercion';
import { HeaderSticky } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective, ItNavBarModule],
})
export class ItHeaderComponent implements AfterViewInit, OnChanges {
  @Input({ transform: inputToBoolean }) light?: boolean;

  @Input({ transform: inputToBoolean }) sticky?: boolean;

  @Input({ transform: inputToBoolean }) showSlim?: boolean = true;

  @Input({ transform: inputToBoolean }) smallHeader?: boolean = true;

  @Input({ transform: inputToBoolean }) showSearch?: boolean = true;

  @Input() slimTitle: string | undefined;
  @Input() slimTitleLink: string | undefined = '#';

  @Input() loginStyle: 'none' | 'default' | 'full' = 'none';

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  @ViewChild('headerWrapper') private headerWrapper?: ElementRef<HTMLButtonElement>;

  @ViewChild(ItNavBarComponent) private itNavBarComponent?: ItNavBarComponent;

  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  private stickyHeader?: HeaderSticky;

  constructor() {
    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  ngAfterViewInit() {
    this.updateListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sticky'] && changes['sticky'].currentValue == true && !changes['sticky'].firstChange) {
      this.updateListeners();
    }
    if (changes['sticky'] && changes['sticky'].currentValue == false) {
      this.stickyHeader?._elementObj?._unsetSticky();
      this.stickyHeader?._elementObj?.dispose();
      delete this.stickyHeader;
      this.stickyHeader = undefined;
    }
  }

  updateListeners() {
    if (!this.stickyHeader && this.headerWrapper && this.sticky) {
      this.stickyHeader = new HeaderSticky(this.headerWrapper.nativeElement);
    }
  }

  protected emitLoginClick(event: Event): void {
    event.preventDefault();
    this.loginClick.emit(event);
  }

  protected emitSearchClick(event: Event): void {
    event.preventDefault();
    this.searchClick.emit(event);
  }

  toggleCollapse() {
    this.itNavBarComponent?.toggleCollapse();
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.nav-mobile:has(.link-list-wrapper:empty) {
  display: none;
}
`,styleUrl:"./header.component.scss"}],stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:57},extends:[],implements:["AfterViewInit","OnChanges"],templateData:`<header
  #headerWrapper
  class="it-header-wrapper"
  [class.it-header-sticky]="sticky"
  data-bs-position-type="fixed"
  data-bs-sticky-class-name="is-sticky"
  data-bs-target="#header-nav-wrapper">
  @if (showSlim) {
    <div class="it-header-slim-wrapper" [class.theme-light]="light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-slim-wrapper-content">
              <a class="d-none d-lg-block navbar-brand" [href]="slimTitleLink" [target]="slimTitleLink !== '#' ? '_blank' : '_self'">
                {{ slimTitle }}
              </a>
              <div class="nav-mobile">
                <nav [attr.aria-label]="'it.navigation.secondary-navigation' | translate">
                  <a
                    class="it-opener d-lg-none"
                    data-bs-toggle="collapse"
                    href="#menuC1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="menuC1">
                    <span>{{ slimTitle }}</span>
                    <it-icon name="expand"></it-icon>
                  </a>
                  <div class="link-list-wrapper collapse" id="menuC1">
                    <ng-content select="[slimLinkList]"></ng-content>
                  </div>
                </nav>
              </div>
              <div class="it-header-slim-right-zone">
                <ng-content select="[slimRightZone]"></ng-content>
                @if (loginStyle === 'default') {
                  <div class="it-access-top-wrapper">
                    <a class="btn btn-primary btn-sm" (click)="emitLoginClick($event)" href="#">
                      {{ 'it.navigation.login' | translate }}
                    </a>
                  </div>
                }
                @if (loginStyle === 'full') {
                  <a itButton="primary" class="btn-full btn-icon" (click)="emitLoginClick($event)" href="#">
                    <span class="rounded-icon">
                      <it-icon name="user" color="primary"></it-icon>
                    </span>
                    <span class="d-none d-lg-block">{{ 'it.navigation.full-login' | translate }}</span>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  <div class="it-nav-wrapper">
    <div class="it-header-center-wrapper" [class.it-small-header]="smallHeader" [class.theme-light]="light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <ng-content select="[brand]"></ng-content>
              </div>
              <div class="it-right-zone">
                <ng-content select="[rightZone]"></ng-content>

                @if (showSearch) {
                  <div class="it-search-wrapper">
                    <span class="d-none d-md-block">{{ 'it.navigation.search' | translate }}</span>
                    <a
                      href="#"
                      class="search-link rounded-icon"
                      [attr.aria-label]="'it.navigation.website-search' | translate"
                      (click)="emitSearchClick($event)">
                      <it-icon name="search"></it-icon>
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-header-navbar-wrapper" [class.theme-light-desk]="light" id="header-nav-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <it-navbar [megamenu]="megamenu" [expand]="expand">
              <ng-container navItems>
                <ng-content select="[navItems]"></ng-content>
              </ng-container>
            </it-navbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
`},{name:"ItIconComponent",id:"component-ItIconComponent-95033df0dbbe6f8a8b9322944329472eed1f59d8fc23db20c6cfff26be2175ec80c678ccfbc6235194f7906bcf3cd31962e3f0293009de65785ee93285fa9841",file:"projects/design-angular-kit/src/lib/components/utils/icon/icon.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-icon",styleUrls:[],styles:[":host {display: contents;}"],templateUrl:["./icon.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

The icon color
`,description:`<p>The icon color</p>
`,line:28,type:"IconColor | undefined",decorators:[]},{name:"labelWaria",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom Waria label
`,description:`<p>Custom Waria label</p>
`,line:77,type:"string | undefined",decorators:[]},{required:!0,name:"name",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

The icon name
`,description:`<p>The icon name</p>
`,line:18,type:"IconName",decorators:[]},{required:!1,name:"padded",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:842,end:860,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:843,end:850,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Create a padding proportional to the size of the surrounding icon.
`,description:`<p>Create a padding proportional to the size of the surrounding icon.</p>
`,line:34,type:"boolean",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",rawdescription:`

The icon size
`,description:`<p>The icon size</p>
`,line:23,type:"IconSize | undefined",decorators:[]},{name:"svgClass",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class of svg
`,description:`<p>Custom class of svg</p>
`,line:39,type:"string | undefined",decorators:[]}],outputsClass:[],propertiesClass:[{name:"assetBasePath",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The bootstrap-italia asset folder path</p>
`,line:72,rawdescription:`

The bootstrap-italia asset folder path
`,modifierKind:[124],jsdoctags:[{pos:1614,end:1645,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1615,end:1622,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>./bootstrap-italia</p>
`}]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { inputToBoolean } from '../../../utils/coercion';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';

@Component({
  standalone: true,
  selector: 'it-icon',
  templateUrl: './icon.component.html',
  styles: ':host {display: contents;}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItIconComponent {
  /**
   * The icon name
   */
  @Input({ required: true }) name!: IconName;

  /**
   * The icon size
   */
  @Input() size: IconSize | undefined;

  /**
   * The icon color
   */
  @Input() color: IconColor | undefined;

  /**
   * Create a padding proportional to the size of the surrounding icon.
   * @default false
   */
  @Input({ transform: inputToBoolean }) padded?: boolean;

  /**
   * Custom class of svg
   */
  @Input() svgClass: string | undefined;

  /**
   * Return the icon href
   */
  protected get iconHref(): string {
    return \`\${this.assetBasePath}/dist/svg/sprites.svg#it-\${this.name}\`;
  }

  /**
   * Return the icon class
   */
  protected get iconClass(): string {
    let iconClass = 'icon';
    if (this.size) {
      iconClass += \` icon-\${this.size}\`;
    }
    if (this.color) {
      iconClass += \` icon-\${this.color}\`;
    }
    if (this.padded) {
      iconClass += \` icon-padded\`;
    }
    if (this.svgClass) {
      iconClass += \` \${this.svgClass}\`;
    }
    return iconClass;
  }

  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  protected assetBasePath: string;

  /**
   * Custom Waria label
   */
  @Input() labelWaria: string | undefined;

  get isAriaHidden(): boolean {
    return this.labelWaria == undefined;
  }

  constructor() {
    this.assetBasePath = inject(IT_ASSET_BASE_PATH);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:`:host {display: contents;}
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:81},extends:[],accessors:{iconHref:{name:"iconHref",getSignature:{name:"iconHref",type:"string",returnType:"string",line:44,rawdescription:`

Return the icon href
`,description:`<p>Return the icon href</p>
`}},iconClass:{name:"iconClass",getSignature:{name:"iconClass",type:"string",returnType:"string",line:51,rawdescription:`

Return the icon class
`,description:`<p>Return the icon class</p>
`}},isAriaHidden:{name:"isAriaHidden",getSignature:{name:"isAriaHidden",type:"boolean",returnType:"boolean",line:79}}},templateData:`<svg [attr.aria-hidden]="isAriaHidden" [attr.aria-label]="labelWaria" [class]="iconClass">
  <use [attr.href]="iconHref" [attr.xlink:href]="iconHref"></use>
</svg>
`},{name:"ItInputComponent",id:"component-ItInputComponent-9e26f9fd1d6026d9fd75490bc87f9d82236420405295bb3efe50db9fbece64723d2fbe1fd794eed64f916cf4730fe3ca3c844798af73023b7efc9b0eba9728e8",file:"projects/design-angular-kit/src/lib/components/form/input/input.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-input",styleUrls:["./input.component.scss"],styles:[],templateUrl:["./input.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"adaptive",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2624,end:2642,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2625,end:2632,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To make the numeric field automatically resize according to the value contained in it. [Used only in type = 'number']
`,description:`<p>To make the numeric field automatically resize according to the value contained in it. [Used only in type = &#39;number&#39;]</p>
`,line:93,type:"boolean",decorators:[]},{name:"autocomplete",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2774,end:2796,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2775,end:2782,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Input autocomplete attribute (Browser autocomplete)
`,description:`<p>Input autocomplete attribute (Browser autocomplete)</p>
`,line:99,type:"string | undefined",decorators:[]},{required:!1,name:"currency",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2104,end:2122,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2105,end:2112,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is a currency number [Used only in type = 'number']
`,description:`<p>If is a currency number [Used only in type = &#39;number&#39;]</p>
`,line:75,type:"boolean",decorators:[]},{name:"description",deprecated:!1,deprecationMessage:"",rawdescription:`

The input description
`,description:`<p>The input description</p>
`,line:34,type:"string | undefined",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`

The max value [Used only in type = 'number']
`,description:`<p>The max value [Used only in type = &#39;number&#39;]</p>
`,line:59,type:"number | undefined",decorators:[]},{name:"maxDate",defaultValue:"'9999-12-31'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1493,end:1520,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1494,end:1501,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>&#39;9999-12-31&#39;</p>
`},{pos:1520,end:1545,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1521,end:1528,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;yyyy-mm-dd&#39;</p>
`}],rawdescription:"\n\nThe max date value [Used only in type = 'date']\n```html\n```",description:`<p>The max date value [Used only in type = &#39;date&#39;]</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:48,type:"string",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`

The min value [Used only in type = 'number']
`,description:`<p>The min value [Used only in type = &#39;number&#39;]</p>
`,line:64,type:"number | undefined",decorators:[]},{name:"minDate",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1657,end:1682,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1658,end:1665,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;yyyy-mm-dd&#39;</p>
`}],rawdescription:"\n\nThe min date value [Used only in type = 'date']\n```html\n```",description:`<p>The min date value [Used only in type = &#39;date&#39;]</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:54,type:"string | undefined",decorators:[]},{required:!1,name:"percentage",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2259,end:2277,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2260,end:2267,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is a percentage number [Used only in type = 'number']
`,description:`<p>If is a percentage number [Used only in type = &#39;number&#39;]</p>
`,line:81,type:"boolean",decorators:[]},{name:"placeholder",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

The input placeholder
`,description:`<p>The input placeholder</p>
`,line:29,type:"string",decorators:[]},{name:"readonly",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1347,end:1369,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1348,end:1355,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

To prevent modification of the contained value.
- <b>plaintext</b>: Readonly field in the form stylized as plain text
`,description:`<p>To prevent modification of the contained value.</p>
<ul>
<li><b>plaintext</b>: Readonly field in the form stylized as plain text</li>
</ul>
`,line:41,type:'boolean | "plaintext" | undefined',decorators:[]},{name:"step",deprecated:!1,deprecationMessage:"",rawdescription:`

The step value [Used only in type = 'number']
`,description:`<p>The step value [Used only in type = &#39;number&#39;]</p>
`,line:69,type:'number | "any" | undefined',decorators:[]},{name:"symbol",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2431,end:2447,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2432,end:2439,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;$&#39;</p>
`}],rawdescription:"\n\nThe currency or percentage symbol [Used only if percentage or currency]\n```html\n```",description:`<p>The currency or percentage symbol [Used only if percentage or currency]</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:87,type:"string | undefined",decorators:[]},{name:"type",defaultValue:"'text'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:990,end:1007,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:991,end:998,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>text</p>
`}],rawdescription:`

The input type
`,description:`<p>The input type</p>
`,line:24,type:"InputControlType",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"incrementNumber",args:[{name:"decrease",type:"",deprecated:!1,deprecationMessage:"",defaultValue:"false"}],optional:!1,returnType:"void",typeParameters:[],line:217,deprecated:!1,deprecationMessage:"",rawdescription:`

Increment or decrease the input number value of step
`,description:`<p>Increment or decrease the input number value of step</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:6394,end:6402,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"decrease"},type:"",deprecated:!1,deprecationMessage:"",defaultValue:"false",tagName:{pos:6388,end:6393,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>true to decrease value</p>
`}]},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:184,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"},{name:"TranslateModule",type:"module"},{name:"AsyncPipe",type:"pipe"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { InputControlType } from '../../../interfaces/form';
import { AbstractControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ItValidators } from '../../../validators/it-validators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, TranslateModule, AsyncPipe],
})
export class ItInputComponent extends ItAbstractFormComponent<string | number | null | undefined> implements OnInit {
  /**
   * The input type
   * @default text
   */
  @Input() type: InputControlType = 'text';

  /**
   * The input placeholder
   */
  @Input() placeholder = '';

  /**
   * The input description
   */
  @Input() description: string | undefined;

  /**
   * To prevent modification of the contained value.
   * - <b>plaintext</b>: Readonly field in the form stylized as plain text
   * @default undefined
   */
  @Input() readonly: boolean | 'plaintext' | undefined;

  /**
   * The max date value [Used only in type = 'date']
   * @default '9999-12-31'
   * @example 'yyyy-mm-dd'
   */
  @Input() maxDate?: string = '9999-12-31';

  /**
   * The min date value [Used only in type = 'date']
   * @example 'yyyy-mm-dd'
   */
  @Input() minDate: string | undefined;

  /**
   * The max value [Used only in type = 'number']
   */
  @Input() max: number | undefined;

  /**
   * The min value [Used only in type = 'number']
   */
  @Input() min: number | undefined;

  /**
   * The step value [Used only in type = 'number']
   */
  @Input() step: number | 'any' | undefined;

  /**
   * If is a currency number [Used only in type = 'number']
   * @default false
   */
  @Input({ transform: inputToBoolean }) currency?: boolean;

  /**
   * If is a percentage number [Used only in type = 'number']
   * @default false
   */
  @Input({ transform: inputToBoolean }) percentage?: boolean;

  /**
   * The currency or percentage symbol [Used only if percentage or currency]
   * @example '$'
   */
  @Input() symbol: string | undefined;

  /**
   * To make the numeric field automatically resize according to the value contained in it. [Used only in type = 'number']
   * @default false
   */
  @Input({ transform: inputToBoolean }) adaptive?: boolean;

  /**
   * Input autocomplete attribute (Browser autocomplete)
   * @default undefined
   */
  @Input() autocomplete: string | undefined;

  get isActiveLabel(): boolean {
    const value = this.control.value;
    if ((!!value && value !== 0) || value === 0 || !!this.placeholder) {
      return true;
    }

    if (this.type === 'number' && (!!this.currency || !!this.percentage)) {
      return true;
    }

    return this.type === 'date' || this.type === 'time' || this.type === 'color';
  }

  /**
   * Check is readonly field
   */
  protected get isReadonly(): boolean {
    return this.readonly === 'plaintext' || !!this.readonly;
  }

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('min') && this.min) {
      return this._translateService.get('it.errors.min-invalid', {
        min: this.min,
      });
    }
    if (this.hasError('max') && this.max) {
      return this._translateService.get('it.errors.max-invalid', {
        max: this.max,
      });
    }
    if (this.hasError('minlength')) {
      const error = this.getError('minlength');
      return this._translateService.get('it.errors.min-length-invalid', {
        min: error.requiredLength,
      });
    }
    if (this.hasError('maxlength')) {
      const error = this.getError('maxlength');
      return this._translateService.get('it.errors.max-length-invalid', {
        max: error.requiredLength,
      });
    }
    if (this.hasError('email') || this.hasError('invalidEmail')) {
      return this._translateService.get('it.errors.email-invalid');
    }
    if (this.hasError('invalidTel')) {
      return this._translateService.get('it.errors.tel-invalid');
    }
    if (this.hasError('invalidUrl')) {
      return this._translateService.get('it.errors.url-invalid');
    }
    if (this.hasError('invalidTaxCode')) {
      return this._translateService.get('it.errors.tax-code-invalid');
    }
    if (this.hasError('invalidVatNumber')) {
      return this._translateService.get('it.errors.vat-number-invalid');
    }
    if (this.hasError('invalidCap')) {
      return this._translateService.get('it.errors.cap-invalid');
    }
    if (this.hasError('invalidIban')) {
      return this._translateService.get('it.errors.iban-invalid');
    }
    if (this.hasError('invalidPlate')) {
      return this._translateService.get('it.errors.plate-invalid');
    }
    if (this.hasError('invalidRegex')) {
      return this._translateService.get('it.errors.regex-invalid');
    }
    if (this.hasError('pattern')) {
      const error = this.getError('pattern');
      return this._translateService.get('it.errors.pattern-invalid', {
        pattern: error.requiredPattern,
      });
    }

    return super.invalidMessage;
  }

  override ngOnInit() {
    super.ngOnInit();

    const validators: Array<ValidatorFn> = [];
    switch (this.type) {
      case 'number':
        if (this.percentage) {
          this.min = this.min || 0;
          this.max = this.max || 100;
        }

        // Dynamic min/max validators
        validators.push((control: AbstractControl) => (this.min ? Validators.min(this.min)(control) : null));
        validators.push((control: AbstractControl) => (this.max ? Validators.max(this.max)(control) : null));
        break;
      case 'email':
        validators.push(ItValidators.email);
        break;
      case 'tel':
        validators.push(ItValidators.tel);
        break;
      case 'url':
        validators.push(ItValidators.url);
        break;
    }

    this.addValidators(validators);
  }

  /**
   * Increment or decrease the input number value of step
   * @param decrease true to decrease value
   */
  protected incrementNumber(decrease = false): void {
    if (this.type !== 'number') {
      return;
    }
    const step = this.step === 'any' ? 1 : this.step ?? 1;
    let value = Number(this.control.value);
    value = (isNaN(value) ? 0 : value) + (decrease ? -step : step);
    value = Math.round(value * 1e12) / 1e12; // prevent js decimal error

    if (this.min !== undefined && value < this.min) {
      value = this.min;
    } else if (this.max !== undefined && value > this.max) {
      value = this.max;
    }

    this.control.setValue(value);
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.form-group {
  label {
    z-index: 1000;
  }

  input:focus:not(.focus--mouse) {
    box-shadow: inherit !important;
    border-color: inherit !important;
  }

  .input-number {
    .align-buttons{
      height: 100%;
    }
  }

  .input-group-text:empty {
    display: none;
  }

  label.empty-prepend-label {
    left: auto !important;
    max-width: 100% !important;
  }

  label:not(.active):has(+ input:-webkit-autofill) {
    transform: translateY(-75%);
  }
}

`,styleUrl:"./input.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit"],accessors:{isActiveLabel:{name:"isActiveLabel",getSignature:{name:"isActiveLabel",type:"boolean",returnType:"boolean",line:101}},isReadonly:{name:"isReadonly",getSignature:{name:"isReadonly",type:"boolean",returnType:"boolean",line:117,rawdescription:`

Check is readonly field
`,description:`<p>Check is readonly field</p>
`}},invalidMessage:{name:"invalidMessage",getSignature:{name:"invalidMessage",type:"",returnType:"Observable<string>",line:124,rawdescription:`

Return the invalid message string from TranslateService
`,description:`<p>Return the invalid message string from TranslateService</p>
`}}},templateData:`<div class="form-group">
  <div
    class="input-group"
    [class.disabled]="!control.enabled"
    [class.input-number]="type === 'number'"
    [class.input-number-currency]="currency"
    [class.input-number-percentage]="percentage"
    [class.input-number-adaptive]="adaptive">
    <span class="input-group-text" #prependText>
      <ng-content select="[prependText]"></ng-content>
    </span>

    @if (label) {
      <label
        [for]="id"
        [class.active]="isActiveLabel"
        [class.input-number-label]="type === 'number'"
        [class.empty-prepend-label]="!prependText.clientWidth">
        {{ label }}
      </label>
    }

    @if (type === 'number') {
      @if (currency || percentage) {
        <span class="input-group-text fw-semibold">{{ symbol }}</span>
      }
      <input
        type="number"
        [id]="id"
        [step]="step ?? null"
        [min]="min ?? ''"
        [max]="max ?? ''"
        [class.form-control]="readonly !== 'plaintext'"
        [class.form-control-plaintext]="readonly === 'plaintext'"
        [class.is-invalid]="isInvalid"
        [class.just-validate-success-field]="isValid"
        [formControl]="control"
        [placeholder]="placeholder"
        [readonly]="isReadonly"
        [autocomplete]="autocomplete"
        [attr.aria-describedby]="id + '-description'"
        (blur)="markAsTouched()" />
      <span class="input-group-text align-buttons flex-column">
        <button type="button" class="input-number-add" [disabled]="!control.enabled" (click)="incrementNumber()">
          <span class="visually-hidden">{{ 'it.form.increase-value' | translate }}</span>
        </button>
        <button type="button" class="input-number-sub" [disabled]="!control.enabled" (click)="incrementNumber(true)">
          <span class="visually-hidden">{{ 'it.form.decrease-value' | translate }}</span>
        </button>
      </span>
    } @else {
      <input
        [id]="id"
        [type]="type"
        [max]="type === 'date' ? maxDate : undefined"
        [min]="type === 'date' ? minDate : undefined"
        [class.form-control]="readonly !== 'plaintext'"
        [class.form-control-plaintext]="readonly === 'plaintext'"
        [class.is-invalid]="isInvalid"
        [class.just-validate-success-field]="isValid"
        [formControl]="control"
        [placeholder]="placeholder"
        [readonly]="isReadonly"
        [autocomplete]="autocomplete"
        [attr.aria-describedby]="id + '-description'"
        (blur)="markAsTouched()" />
    }

    <div class="input-group-append">
      <ng-content select="[append]"></ng-content>

      <div class="input-group-text">
        <ng-content select="[appendText]"></ng-content>
      </div>
    </div>
  </div>

  @if (description) {
    <small [id]="id + '-description'" class="form-text">{{ description }}</small>
  }

  @if (isInvalid) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <div #customError>
        <ng-content select="[error]"></ng-content>
      </div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }
</div>
`},{name:"ItLanguageSwitcherComponent",id:"component-ItLanguageSwitcherComponent-3b4d0851e1fb83c8c66d0d54b47cbc764f94ed73e752b04f2e75d5bdfe1f15ae391418256f3930267fe111ccdf3242e5b0462d8fa43841e097270d61e426b5d1",file:"projects/design-angular-kit/src/lib/components/utils/language-switcher/language-switcher.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-language-switcher",styleUrls:[],styles:[],templateUrl:["./language-switcher.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"availableLanguages",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:724,end:801,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:725,end:732,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>The languages available through TranslateService (ngx-translate)</p>
`}],rawdescription:`

The available languages
`,description:`<p>The available languages</p>
`,line:20,type:"Array<AvailableLanguage> | undefined",decorators:[]},{name:"mode",defaultValue:"'link'",deprecated:!1,deprecationMessage:"",rawdescription:`

Dropdown mode
`,description:`<p>Dropdown mode</p>
`,line:25,type:'"button" | "link" | "nav"',decorators:[]}],outputsClass:[],propertiesClass:[{name:"currentLang$",deprecated:!1,deprecationMessage:"",type:"Observable<AvailableLanguage | undefined>",optional:!1,description:"",line:27,modifierKind:[124]}],methodsClass:[{name:"changeLanguage",args:[{name:"lang",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:53,deprecated:!1,deprecationMessage:"",rawdescription:`

Change the current language
`,description:`<p>Change the current language</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:1775,end:1779,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"lang"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:1769,end:1774,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the language code</p>
`}]},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:36,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"AsyncPipe",type:"pipe"},{name:"TranslateModule",type:"module"},{name:"ItDropdownModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from '../../../interfaces/utils';
import { AsyncPipe } from '@angular/common';
import { ItDropdownModule } from '../../core/dropdown/dropdown.module';

@Component({
  standalone: true,
  selector: 'it-language-switcher',
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TranslateModule, ItDropdownModule],
})
export class ItLanguageSwitcherComponent implements OnInit {
  /**
   * The available languages
   * @default The languages available through TranslateService (ngx-translate)
   */
  @Input() availableLanguages: Array<AvailableLanguage> | undefined;

  /**
   * Dropdown mode
   */
  @Input() mode: 'button' | 'link' | 'nav' = 'link';

  protected currentLang$: Observable<AvailableLanguage | undefined>;

  constructor(private readonly translateService: TranslateService) {
    this.currentLang$ = this.translateService.onLangChange.pipe(
      startWith({ lang: translateService.currentLang }),
      map(event => this.availableLanguages?.find(l => l.code === event.lang))
    );
  }

  ngOnInit(): void {
    if (!this.availableLanguages) {
      this.availableLanguages = this.translateService.getLangs().map(lang => ({
        code: lang,
        label: lang,
        ...(lang === 'it' && { label: 'ITA' }),
        ...(lang === 'en' && { label: 'ENG' }),
      }));
    } else {
      this.translateService.addLangs(this.availableLanguages.map(l => l.code)); // Adds custom languages
    }
  }

  /**
   * Change the current language
   * @param lang the language code
   */
  public changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"translateService",type:"TranslateService",deprecated:!1,deprecationMessage:""}],line:27,jsdoctags:[{name:"translateService",type:"TranslateService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnInit"],templateData:`<it-dropdown [mode]="mode">
  <ng-container button>
    <span class="visually-hidden">{{ 'it.utils.selected' | translate: { lang: (currentLang$ | async)?.label } }}</span>
    <span>{{ (currentLang$ | async)?.label || ('it.utils.select-language' | translate) }}</span>
  </ng-container>

  @if (availableLanguages) {
    <ng-container list>
      @for (lang of availableLanguages; track lang.code) {
        <it-dropdown-item (click)="changeLanguage(lang.code)" [active]="lang.code === (currentLang$ | async)?.code">
          {{ lang.label }}
          @if (lang.code === (currentLang$ | async)?.code) {
            <span class="visually-hidden">
              {{ 'it.utils.selected' | translate }}
            </span>
          }
        </it-dropdown-item>
      }
    </ng-container>
  }
</it-dropdown>
`},{name:"ItLinkComponent",id:"component-ItLinkComponent-c5bd290292b359c2badee9c75ce5a0c43a1b46324e64b510decdc2e724b43e60a05893d2615b023dae0d1ec39e1cdab1575a072941a0beca2249084abd6bd4cc",file:"projects/design-angular-kit/src/lib/components/core/link/link.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-link",styleUrls:[],styles:[],templateUrl:["./link.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:41,type:"string",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1245,end:1263,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1246,end:1253,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is disabled link
`,description:`<p>Is disabled link</p>
`,line:36,type:"boolean",decorators:[]},{required:!1,name:"externalLink",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1126,end:1144,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1127,end:1134,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is an external link (false to not use Angular router link)
`,description:`<p>Is an external link (false to not use Angular router link)</p>
`,line:30,type:"boolean",decorators:[]},{name:"href",deprecated:!1,deprecationMessage:"",rawdescription:`

The router link action

Commands to pass to Router#createUrlTree.
- array: commands to pass to Router#createUrlTree.
- string: shorthand for array of commands with just the string, i.e. ['/route']
- null|undefined: Disables the link by removing the href
`,description:`<p>The router link action</p>
<p>Commands to pass to Router#createUrlTree.</p>
<ul>
<li>array: commands to pass to Router#createUrlTree.</li>
<li>string: shorthand for array of commands with just the string, i.e. [&#39;/route&#39;]</li>
<li>null|undefined: Disables the link by removing the href</li>
</ul>
`,line:24,type:"any[] | string | null | undefined",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:43,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:48,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"RouterLink"},{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgTemplateOutlet],
})
export class ItLinkComponent extends ItAbstractComponent implements AfterViewInit, OnChanges {
  /**
   * The router link action
   *
   * Commands to pass to Router#createUrlTree.
   * - array: commands to pass to Router#createUrlTree.
   * - string: shorthand for array of commands with just the string, i.e. ['/route']
   * - null|undefined: Disables the link by removing the href
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() href: any[] | string | null | undefined;

  /**
   * Is an external link (false to not use Angular router link)
   * @default false
   */
  @Input({ transform: inputToBoolean }) externalLink?: boolean;

  /**
   * Is disabled link
   * @default false
   */
  @Input({ transform: inputToBoolean }) disabled?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes['class']) {
      this._changeDetectorRef.markForCheck();
    }
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit","OnChanges"],templateData:`@if (!externalLink) {
  <a [id]="id" [class]="class" [routerLink]="(disabled ? null : href)!">
    <ng-container *ngTemplateOutlet="linkContent"></ng-container>
  </a>
} @else {
  <a [id]="id" [class]="class" [attr.href]="disabled ? null : href">
    <ng-container *ngTemplateOutlet="linkContent"></ng-container>
  </a>
}

<ng-template #linkContent>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItListComponent",id:"component-ItListComponent-6feda5f5549286d414de12b01e7e26aad828b268f98923a3f2d6bf23b373f0a463f16a7adc64cb96b32402ba96f91d73d09345f183053fc692061399848337b8",file:"projects/design-angular-kit/src/lib/components/core/list/list/list.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-list",styleUrls:[],styles:[],templateUrl:["./list.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"linkList",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:459,end:477,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:460,end:467,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add 'link-list' class for navigation menu
`,description:`<p>Add &#39;link-list&#39; class for navigation menu</p>
`,line:17,type:"boolean",decorators:[]},{required:!1,name:"linkSubList",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:602,end:620,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:603,end:610,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add 'link-sublist' class for navigation menu
`,description:`<p>Add &#39;link-sublist&#39; class for navigation menu</p>
`,line:23,type:"boolean",decorators:[]},{required:!1,name:"multiline",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:737,end:755,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:738,end:745,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add 'multiline' class for wrapper
`,description:`<p>Add &#39;multiline&#39; class for wrapper</p>
`,line:29,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItListComponent {
  /**
   * Add 'link-list' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) linkList?: boolean;

  /**
   * Add 'link-sublist' class for navigation menu
   * @default false
   */
  @Input({ transform: inputToBoolean }) linkSubList?: boolean;

  /**
   * Add 'multiline' class for wrapper
   * @default false
   */
  @Input({ transform: inputToBoolean }) multiline?: boolean;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`@if (!linkSubList) {
  <div [class.multiline]="multiline" [class]="linkList ? 'link-list-wrapper' : 'it-list-wrapper'">
    <ul [class]="linkList ? 'link-list' : 'it-list'">
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </ul>
  </div>
}
@if (linkSubList) {
  <ul class="link-sublist">
    <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
  </ul>
}
<ng-template #contentTpl><ng-content></ng-content></ng-template>
`},{name:"ItListItemComponent",id:"component-ItListItemComponent-942280269ea5a34e387e23885883dc2761455ba9ff94cef7cbbe917bdd13345d95178741e64c326466a11f2d43b8fa52d2524398a86b8212568a8778a35df29b",file:"projects/design-angular-kit/src/lib/components/core/list/list-item/list-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-list-item",styleUrls:["./list-item.component.scss"],styles:[],templateUrl:["./list-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"active",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:668,end:686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:669,end:676,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add active class
`,description:`<p>Add active class</p>
`,line:23,type:"boolean",decorators:[]},{name:"avatar",deprecated:!1,deprecationMessage:"",rawdescription:`

The avatar url
`,description:`<p>The avatar url</p>
`,line:45,type:"URL | undefined",decorators:[]},{required:!1,name:"iconLeft",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:856,end:874,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:857,end:864,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add icon-left class
`,description:`<p>Add icon-left class</p>
`,line:34,type:"boolean",decorators:[]},{required:!1,name:"iconRight",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:975,end:993,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:976,end:983,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add icon-right class
`,description:`<p>Add icon-right class</p>
`,line:40,type:"boolean",decorators:[]},{name:"image",deprecated:!1,deprecationMessage:"",rawdescription:`

The thumb image url
`,description:`<p>The thumb image url</p>
`,line:50,type:"URL | undefined",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",rawdescription:`

Add large class
`,description:`<p>Add large class</p>
`,line:28,type:'"large" | "medium"',decorators:[]},{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:41,type:"string",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1245,end:1263,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1246,end:1253,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is disabled link
`,description:`<p>Is disabled link</p>
`,line:36,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{required:!1,name:"externalLink",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1126,end:1144,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1127,end:1134,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is an external link (false to not use Angular router link)
`,description:`<p>Is an external link (false to not use Angular router link)</p>
`,line:30,type:"boolean",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"href",deprecated:!1,deprecationMessage:"",rawdescription:`

The router link action

Commands to pass to Router#createUrlTree.
- array: commands to pass to Router#createUrlTree.
- string: shorthand for array of commands with just the string, i.e. ['/route']
- null|undefined: Disables the link by removing the href
`,description:`<p>The router link action</p>
<p>Commands to pass to Router#createUrlTree.</p>
<ul>
<li>array: commands to pass to Router#createUrlTree.</li>
<li>string: shorthand for array of commands with just the string, i.e. [&#39;/route&#39;]</li>
<li>null|undefined: Disables the link by removing the href</li>
</ul>
`,line:24,type:"any[] | string | null | undefined",decorators:[],inheritance:{file:"ItLinkComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:43,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:48,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"},{name:"ItLinkComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { ItLinkComponent } from '../../link/link.component';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItLinkComponent],
})
export class ItListItemComponent extends ItLinkComponent {
  constructor(private elRef: ElementRef) {
    super();
  }

  /**
   * Add active class
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Add large class
   */
  @Input() size?: 'large' | 'medium';

  /**
   * Add icon-left class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconLeft?: boolean;

  /**
   * Add icon-right class
   * @default false
   */
  @Input({ transform: inputToBoolean }) iconRight?: boolean;

  /**
   * The avatar url
   */
  @Input() avatar: URL | undefined;

  /**
   * The thumb image url
   */
  @Input() image: URL | undefined;

  get itemClass(): string {
    const inSidebar: boolean = this.elRef.nativeElement.closest('.sidebar-linklist-wrapper') ? true : false;
    let itemClass = 'list-item';
    if (this.disabled) {
      itemClass += \` disabled\`;
    }
    if (this.active) {
      itemClass += \` active\`;
    }
    if (this.size) {
      itemClass += \` \${this.size}\`;
    }
    if (this.iconLeft) {
      itemClass += inSidebar ? \` left-icon\` : \` icon-left\`;
    }
    if (this.iconRight) {
      itemClass += inSidebar ? \` right-icon\` : \` icon-right\`;
    }
    if (this.class) {
      itemClass += \` \${this.class}\`;
    }
    return itemClass;
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.metadata:empty, .it-rounded-icon:empty {
  display: none;
}

:host ::ng-deep {
  it-icon + .it-multiple {
    display: none !important;
  }
  .list-item-title-icon-wrapper + .it-multiple {
    display: none !important;
  }
  p + .it-multiple {
    display: none !important;
  }
}`,styleUrl:"./list-item.component.scss"}],stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"elRef",type:"ElementRef",deprecated:!1,deprecationMessage:""}],line:14,jsdoctags:[{name:"elRef",type:"ElementRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:["ItLinkComponent"],accessors:{itemClass:{name:"itemClass",getSignature:{name:"itemClass",type:"string",returnType:"string",line:52}}},templateData:`<li>
  <ng-template #content>
    <div class="it-rounded-icon">
      <ng-content select="[icon]"></ng-content>
    </div>

    @if (avatar) {
      <div class="avatar size-lg">
        <img [attr.src]="avatar" alt="avatar" />
      </div>
    }

    @if (image) {
      <div class="it-thumb">
        <img [attr.src]="image" alt="thumb" />
      </div>
    }

    <div class="it-right-zone">
      <ng-content></ng-content>
      <ng-content select="[action]"></ng-content>

      <span class="it-multiple">
        <span class="metadata">
          <ng-content select="[metadata]"></ng-content>
        </span>

        <ng-content select="[multiple]"></ng-content>
      </span>
    </div>
  </ng-template>

  @if (!href) {
    <div [class]="itemClass">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </div>
  } @else {
    <it-link [class]="itemClass" [href]="href" [externalLink]="!!externalLink" [disabled]="!!disabled">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </it-link>
  }
</li>
`},{name:"ItMegamenuComponent",id:"component-ItMegamenuComponent-d8bf3e09c1dd0bd7f1c93a6eeedbd0aeec8db294af2f64558195c712622a8c48c022a916848f2f5369c61b9547813e03c33503665e9cf4c653c520b1117e8e95",file:"projects/design-angular-kit/src/lib/components/navigation/megamenu/megamenu.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-megamenu",styleUrls:["./megamenu.component.scss"],styles:[],templateUrl:["./megamenu.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"footer",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:719,end:737,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:720,end:727,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To show Megamenu footer
`,description:`<p>To show Megamenu footer</p>
`,line:29,type:"boolean",decorators:[]},{required:!1,name:"header",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:599,end:617,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:600,end:607,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To show Megamenu header
`,description:`<p>To show Megamenu header</p>
`,line:23,type:"boolean",decorators:[]},{name:"mode",defaultValue:"'normal'",deprecated:!1,deprecationMessage:"",rawdescription:`

Megamenu mode
`,description:`<p>Megamenu mode</p>
`,line:17,type:'"right-section" | "left-section" | "normal"',decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItMegamenuComponent {
  /**
   * Megamenu mode
   */
  @Input() mode: 'right-section' | 'left-section' | 'normal' = 'normal';

  /**
   * To show Megamenu header
   * @default false
   */
  @Input({ transform: inputToBoolean }) header?: boolean;

  /**
   * To show Megamenu footer
   * @default false
   */
  @Input({ transform: inputToBoolean }) footer?: boolean;
}
`,assetsDirs:[],styleUrlsData:[{data:`::ng-deep .theme-light-desk {
  .nav-link::before {
    background-color: #06c;
  }
}
`,styleUrl:"./megamenu.component.scss"}],stylesData:"",extends:[],templateData:`<div class="megamenu pb-5 pt-3 py-lg-0">
  <div class="row">
    @if (mode === 'left-section') {
      <div class="col-xs-12 col-lg-4 px-0">
        <div class="row">
          <div class="col-12 it-vertical it-description pb-lg-3">
            <div class="description-content ps-4 ps-sm-5 ms-3">
              <ng-content select="[megamenuLeftZone]"></ng-content>
            </div>
          </div>
        </div>
      </div>
    }
    <div class="col-12" [class.col-lg-8]="mode !== 'normal'">
      @if (header) {
        <div class="it-heading-link-wrapper">
          <ng-content select="[megamenuHeadingLink]"></ng-content>
        </div>
      }
      <div class="row">
        <ng-content select="[megamenuLinkList]"></ng-content>
      </div>
    </div>
    @if (footer || mode === 'right-section') {
      <div [class.col-xs-12]="mode === 'right-section'" [class.col-lg-4]="mode === 'right-section'" [class.px-0]="mode === 'right-section'">
        <div [class.it-footer-link-wrapper]="footer" [class.it-footer-link-wrapper-vertical]="mode === 'right-section'">
          <div class="d-flex flex-column justify-content-around" [class.flex-lg-row]="mode !== 'right-section'">
            <ng-content select="[megamenuFooter]"></ng-content>
          </div>
        </div>
      </div>
    }
  </div>
</div>
`},{name:"ItModalComponent",id:"component-ItModalComponent-8bac0d3f60a1d6d9be9e6a17e104747c4ae902e109792c45088ad8dd04bc456886fd8fbd859c53e654cb2cb799424449b318bc4f773b90fa361ca44a7e0ceaef",file:"projects/design-angular-kit/src/lib/components/core/modal/modal.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itModal",inputs:[],outputs:[],providers:[],selector:"it-modal",styleUrls:["./modal.component.scss"],styles:[],templateUrl:["./modal.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"alertModal",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1072,end:1090,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1073,end:1080,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To correctly format the contents of the modal with icon
`,description:`<p>To correctly format the contents of the modal with icon</p>
`,line:32,type:"boolean",decorators:[]},{name:"alignment",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2010,end:2032,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2011,end:2018,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Modal alignment
- <b>centered</b>: to vertically center the modal
- <b>left</b>: to left-align the modal
- <b>right</b>: to right-align the modal
`,description:`<p>Modal alignment</p>
<ul>
<li><b>centered</b>: to vertically center the modal</li>
<li><b>left</b>: to left-align the modal</li>
<li><b>right</b>: to right-align the modal</li>
</ul>
`,line:65,type:'"centered" | "left" | "right" | undefined',decorators:[]},{name:"backdrop",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2347,end:2364,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2348,end:2355,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn\u2019t close the modal when clicked.
`,description:`<p>Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn\u2019t close the modal when clicked.</p>
`,line:77,type:'"static" | boolean',decorators:[]},{required:!1,name:"closeButton",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:910,end:927,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:911,end:918,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show/Hide close button on header
`,description:`<p>Show/Hide close button on header</p>
`,line:26,type:"boolean",decorators:[]},{required:!1,name:"dialogLinkList",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1233,end:1251,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1234,end:1241,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To correctly format the contents of the modal with Link List
`,description:`<p>To correctly format the contents of the modal with Link List</p>
`,line:38,type:"boolean",decorators:[]},{required:!1,name:"fade",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1749,end:1766,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1750,end:1757,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

To have modals that appear with fades
`,description:`<p>To have modals that appear with fades</p>
`,line:56,type:"boolean",decorators:[]},{required:!1,name:"focus",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2478,end:2495,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2479,end:2486,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Puts the focus on the modal when initialized.
`,description:`<p>Puts the focus on the modal when initialized.</p>
`,line:83,type:"boolean",decorators:[]},{required:!1,name:"footerShadow",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2781,end:2799,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2782,end:2789,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To better distinguish the footer element with a shadow
`,description:`<p>To better distinguish the footer element with a shadow</p>
`,line:95,type:"boolean",decorators:[]},{required:!1,name:"keyboard",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2623,end:2640,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2624,end:2631,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Closes the modal when escape key is pressed.
`,description:`<p>Closes the modal when escape key is pressed.</p>
`,line:89,type:"boolean",decorators:[]},{name:"options",deprecated:!1,deprecationMessage:"",rawdescription:`

Modal options
`,description:`<p>Modal options</p>
`,line:100,type:"Partial<BSModal.Options>",decorators:[]},{required:!1,name:"popconfirm",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1404,end:1422,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1405,end:1412,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Modal type Popconfirm can be used for short confirmation messages.
`,description:`<p>Modal type Popconfirm can be used for short confirmation messages.</p>
`,line:44,type:"boolean",decorators:[]},{required:!1,name:"scrollable",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1611,end:1629,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1612,end:1619,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

You can choose to use a scroll inside the modal, keeping the header and footer of the modal always visible
`,description:`<p>You can choose to use a scroll inside the modal, keeping the header and footer of the modal always visible</p>
`,line:50,type:"boolean",decorators:[]},{name:"size",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2132,end:2154,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2133,end:2140,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

The modal size
`,description:`<p>The modal size</p>
`,line:71,type:'"sm" | "lg" | "xl" | undefined',decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"hiddenEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).
`,description:`<p>This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).</p>
`,line:120,type:"EventEmitter<Event>"},{name:"hideEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is raised immediately when the instance method hide has been called.
`,description:`<p>This event is raised immediately when the instance method hide has been called.</p>
`,line:115,type:"EventEmitter<Event>"},{name:"hidePreventedEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
of the esc key occurs and data-bs-keyboard is set to false.
`,description:`<p>This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
of the esc key occurs and data-bs-keyboard is set to false.</p>
`,line:126,type:"EventEmitter<Event>"},{name:"showEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires immediately when the instance method show is called.
`,description:`<p>This event fires immediately when the instance method show is called.</p>
`,line:105,type:"EventEmitter<Event>"},{name:"shownEvent",defaultValue:"new EventEmitter()",deprecated:!1,deprecationMessage:"",rawdescription:`

This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).
`,description:`<p>This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).</p>
`,line:110,type:"EventEmitter<Event>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"modal",deprecated:!1,deprecationMessage:"",type:"Modal",optional:!0,description:"",line:128,modifierKind:[123]},{name:"modalElement",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!0,description:"",line:130,decorators:[{name:"ViewChild",stringifiedArguments:"'modalElement', {static: false}"}],modifierKind:[170,123]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"dispose",args:[],optional:!1,returnType:"void",typeParameters:[],line:215,deprecated:!1,deprecationMessage:"",rawdescription:`

Destroys the modal of an element.
`,description:`<p>Destroys the modal of an element.</p>
`,modifierKind:[125]},{name:"handleUpdate",args:[],optional:!1,returnType:"void",typeParameters:[],line:208,deprecated:!1,deprecationMessage:"",rawdescription:`

Manually reposition the modal if the height of the modal changes when it is opened (in case a scroll bar appears).
`,description:`<p>Manually reposition the modal if the height of the modal changes when it is opened (in case a scroll bar appears).</p>
`,modifierKind:[125]},{name:"hide",args:[],optional:!1,returnType:"void",typeParameters:[],line:201,deprecated:!1,deprecationMessage:"",rawdescription:`

Manually hide a modal. Returns to the caller before the modal has actually been hidden
`,description:`<p>Manually hide a modal. Returns to the caller before the modal has actually been hidden</p>
`,modifierKind:[125]},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:132,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"show",args:[],optional:!1,returnType:"void",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Manually open a modal. Returns to the caller before the modal has actually been displayed
`,description:`<p>Manually open a modal. Returns to the caller before the modal has actually been displayed</p>
`,modifierKind:[125]},{name:"toggle",args:[],optional:!1,returnType:"void",typeParameters:[],line:187,deprecated:!1,deprecationMessage:"",rawdescription:`

Manually activate/deactivate a modal. Returns to the caller before the modal has actually been shown or hidden
`,description:`<p>Manually activate/deactivate a modal. Returns to the caller before the modal has actually been shown or hidden</p>
`,modifierKind:[125]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"}],description:`<p>Modal windows</p>
`,rawdescription:`

Modal windows
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Modal } from 'bootstrap-italia';
import { TranslateModule } from '@ngx-translate/core';
import { Modal as BSModal } from 'bootstrap';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Modal windows
 * @description To show featured content, notifications to users, or personalized content.
 */
@Component({
  standalone: true,
  selector: 'it-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'itModal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class ItModalComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * Show/Hide close button on header
   * @default true
   */
  @Input({ transform: inputToBoolean }) closeButton: boolean = true;

  /**
   * To correctly format the contents of the modal with icon
   * @default false
   */
  @Input({ transform: inputToBoolean }) alertModal?: boolean;

  /**
   * To correctly format the contents of the modal with Link List
   * @default false
   */
  @Input({ transform: inputToBoolean }) dialogLinkList?: boolean;

  /**
   * Modal type Popconfirm can be used for short confirmation messages.
   * @default false
   */
  @Input({ transform: inputToBoolean }) popconfirm?: boolean;

  /**
   * You can choose to use a scroll inside the modal, keeping the header and footer of the modal always visible
   * @default false
   */
  @Input({ transform: inputToBoolean }) scrollable?: boolean;

  /**
   * To have modals that appear with fades
   * @default true
   */
  @Input({ transform: inputToBoolean }) fade?: boolean = true;

  /**
   * Modal alignment
   * - <b>centered</b>: to vertically center the modal
   * - <b>left</b>: to left-align the modal
   * - <b>right</b>: to right-align the modal
   * @default undefined
   */
  @Input() alignment: 'centered' | 'left' | 'right' | undefined;

  /**
   * The modal size
   * @default undefined
   */
  @Input() size: 'sm' | 'lg' | 'xl' | undefined;

  /**
   * Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn\u2019t close the modal when clicked.
   * @default true
   */
  @Input() backdrop: 'static' | boolean = true;

  /**
   * Puts the focus on the modal when initialized.
   * @default true
   */
  @Input({ transform: inputToBoolean }) focus: boolean = true;

  /**
   * Closes the modal when escape key is pressed.
   * @default true
   */
  @Input({ transform: inputToBoolean }) keyboard: boolean = true;

  /**
   * To better distinguish the footer element with a shadow
   * @default false
   */
  @Input({ transform: inputToBoolean }) footerShadow?: boolean;

  /**
   * Modal options
   */
  @Input() options?: Partial<BSModal.Options>;

  /**
   * This event fires immediately when the instance method show is called.
   */
  @Output() public showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).
   */
  @Output() public shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised immediately when the instance method hide has been called.
   */
  @Output() public hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).
   */
  @Output() public hiddenEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
   * of the esc key occurs and data-bs-keyboard is set to false.
   */
  @Output() public hidePreventedEvent: EventEmitter<Event> = new EventEmitter();

  private modal?: Modal;

  @ViewChild('modalElement', { static: false }) private modalElement?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    if (this.modalElement) {
      const element = this.modalElement.nativeElement;
      this.modal = Modal.getOrCreateInstance(element, {
        ...this.options,
        backdrop: this.backdrop === 'static' ? 'static' : this.backdrop,
        focus: this.focus,
        keyboard: this.keyboard,
      });

      element.addEventListener('show.bs.modal', event => this.showEvent.emit(event));
      element.addEventListener('shown.bs.modal', event => this.shownEvent.emit(event));
      element.addEventListener('hide.bs.modal', event => this.hideEvent.emit(event));
      element.addEventListener('hidden.bs.modal', event => this.hiddenEvent.emit(event));
      element.addEventListener('hidePrevented.bs.modal', event => this.hidePreventedEvent.emit(event));
    }
  }

  protected get modalClass(): string {
    let modalClass = 'modal';
    if (this.fade) {
      modalClass += \` fade\`;
    }
    if (this.alertModal) {
      modalClass += \` alert-modal\`;
    }
    if (this.dialogLinkList) {
      modalClass += \` it-dialog-link-list\`;
    }
    if (this.popconfirm) {
      modalClass += \` popconfirm-modal\`;
    }
    if (this.scrollable) {
      modalClass += \` it-dialog-scrollable\`;
    }
    return modalClass;
  }

  protected get dialogClass(): string {
    let dialogClass = 'modal-dialog';
    if (this.alignment) {
      dialogClass += \` modal-dialog-\${this.alignment}\`;
    }
    if (this.size) {
      dialogClass += \` modal-\${this.size}\`;
    }
    return dialogClass;
  }

  /**
   * Manually activate/deactivate a modal. Returns to the caller before the modal has actually been shown or hidden
   */
  public toggle(): void {
    this.modal?.toggle();
  }

  /**
   * Manually open a modal. Returns to the caller before the modal has actually been displayed
   */
  public show(): void {
    this.modal?.show();
  }

  /**
   * Manually hide a modal. Returns to the caller before the modal has actually been hidden
   */
  public hide(): void {
    this.modal?.hide();
  }

  /**
   * Manually reposition the modal if the height of the modal changes when it is opened (in case a scroll bar appears).
   */
  public handleUpdate(): void {
    this.modal?.handleUpdate();
  }

  /**
   * Destroys the modal of an element.
   */
  public dispose(): void {
    this.modal?.dispose();
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.modal-footer:empty {
  display: none;
}
`,styleUrl:"./modal.component.scss"}],stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit"],accessors:{modalClass:{name:"modalClass",getSignature:{name:"modalClass",type:"string",returnType:"string",line:153}},dialogClass:{name:"dialogClass",getSignature:{name:"dialogClass",type:"string",returnType:"string",line:173}}},templateData:`<div
  #modalElement
  [id]="id"
  [class]="modalClass"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
  [attr.aria-labelledby]="id + '-title'"
  [attr.aria-describedby]="id + '-description'">
  <div [class]="dialogClass">
    <div class="modal-content" role="document">
      <div class="modal-header">
        <ng-content select="[beforeTitle]"></ng-content>

        <h2 class="modal-title h5" id="{{ id }}-title">
          <ng-content select="[modalTitle]"></ng-content>
        </h2>

        @if (closeButton) {
          <button type="button" class="btn-close" data-bs-dismiss="modal" [attr.aria-label]="'it.core.close-modal' | translate"></button>
        }
      </div>

      <div class="modal-body">
        <div id="{{ id }}-description">
          <ng-content select="[description]"></ng-content>
        </div>
        <ng-content></ng-content>
      </div>

      <div class="modal-footer" [class.modal-footer-shadow]="footerShadow">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  </div>
</div>
`},{name:"ItNavBarComponent",id:"component-ItNavBarComponent-83ca169b913147757524fdbf11655f4d43b38fb41f104ba64e54fea5f74c52f30950b7a9c9f353462cf17108b7e8dd823829b4540fd4141f5cfa4038ad1300b0",file:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar/navbar.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-navbar",styleUrls:[],styles:[],templateUrl:["./navbar.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"expand",defaultValue:"true",deprecated:!1,deprecationMessage:"",line:17,type:"boolean",decorators:[]},{required:!1,name:"megamenu",deprecated:!1,deprecationMessage:"",line:16,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[{name:"collapseButton",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLButtonElement>",optional:!0,description:"",line:19,decorators:[{name:"ViewChild",stringifiedArguments:"'collapseButton'"}],modifierKind:[170,123]},{name:"collapseView",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLButtonElement>",optional:!0,description:"",line:20,decorators:[{name:"ViewChild",stringifiedArguments:"'collapseView'"}],modifierKind:[170,123]},{name:"navbar",deprecated:!1,deprecationMessage:"",type:"NavBarCollapsible",optional:!0,description:"",line:22,modifierKind:[123]}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:24,deprecated:!1,deprecationMessage:""},{name:"toggleCollapse",args:[],optional:!1,returnType:"void",typeParameters:[],line:30,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"ItIconComponent",type:"component"},{name:"ItButtonDirective",type:"directive"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItButtonDirective } from '../../../core/button/button.directive';
import { inputToBoolean } from '../../../../utils/coercion';
import { NavBarCollapsible } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ItIconComponent, ItButtonDirective],
})
export class ItNavBarComponent implements AfterViewInit {
  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  @ViewChild('collapseButton') private collapseButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('collapseView') private collapseView?: ElementRef<HTMLButtonElement>;

  private navbar?: NavBarCollapsible;

  ngAfterViewInit() {
    if (this.collapseButton && this.collapseView) {
      this.navbar = NavBarCollapsible.getOrCreateInstance(this.collapseView.nativeElement);
    }
  }

  toggleCollapse() {
    this.navbar?.toggle(this.collapseButton?.nativeElement);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],implements:["AfterViewInit"],templateData:`<nav
  class="navbar"
  [class.navbar-expand-lg]="expand"
  [class.has-megamenu]="megamenu"
  [attr.aria-label]="'it.navbar.aria-label-main' | translate">
  <button
    (click)="toggleCollapse()"
    #collapseButton
    class="custom-navbar-toggler"
    type="button"
    [attr.aria-label]="'it.navbar.aria-label-toggle' | translate">
    <it-icon name="burger"></it-icon>
  </button>
  <div #collapseView class="navbar-collapsable" style="display: none">
    <div class="overlay" style="display: none"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">{{ 'it.navbar.hide' | translate }}</span>
        <it-icon name="close-big"></it-icon>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <ng-content select="[navItems]"></ng-content>
      </ul>
    </div>
  </div>
</nav>
`},{name:"ItNavBarItemComponent",id:"component-ItNavBarItemComponent-ace3fa06bdea92303ba8d60bb3b267e51896abb06ba8f17dc03c84ed9b89a70bc5d8879dfc72e470ba7c79c1704824ccb851960969ce21dde810101da3ca526a",file:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar-item/navbar-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-navbar-item",styleUrls:[],styles:[],templateUrl:["./navbar-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'it-navbar-item',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItNavBarItemComponent {}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`<li class="nav-item">
  <ng-content></ng-content>
</li>
`},{name:"ItNotificationsComponent",id:"component-ItNotificationsComponent-0f4f95f06fd42acf0cc2e19e26331952deb1bc062c23aeea64cfa5260d0a40daedec0ce5592325cc830a0ce87bbec86539c07ad20b7a27783bd6feddcf95a9c9",file:"projects/design-angular-kit/src/lib/components/core/notifications/notifications.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-notifications",styleUrls:["./notifications.component.scss"],styles:[],templateUrl:["./notifications.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"dismissible",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1234,end:1251,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1235,end:1242,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Default notifications is dismissible
`,description:`<p>Default notifications is dismissible</p>
`,line:35,type:"boolean",decorators:[]},{name:"duration",defaultValue:"8000",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1020,end:1037,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1021,end:1028,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>8000</p>
`}],rawdescription:`

Default notifications duration (milliseconds)
`,description:`<p>Default notifications duration (milliseconds)</p>
`,line:24,type:"number",decorators:[]},{name:"position",deprecated:!1,deprecationMessage:"",rawdescription:`

Default notifications position
`,description:`<p>Default notifications position</p>
`,line:29,type:"NotificationPosition | undefined",decorators:[]}],outputsClass:[],propertiesClass:[{name:"notificationCount",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:"",line:38,modifierKind:[123]},{name:"notifications",defaultValue:"[]",deprecated:!1,deprecationMessage:"",type:"Array<>",optional:!1,description:"",line:39,modifierKind:[124]},{name:"subscription",deprecated:!1,deprecationMessage:"",type:"Subscription",optional:!1,description:"",line:37,modifierKind:[123]}],methodsClass:[{name:"getNotificationIcon",args:[{name:"notification",type:"Notification",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"IconName | undefined",typeParameters:[],line:108,deprecated:!1,deprecationMessage:"",rawdescription:`

Retrieve the icon name by notification type
`,description:`<p>Retrieve the icon name by notification type</p>
`,modifierKind:[123],jsdoctags:[{name:{pos:3549,end:3561,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"notification"},type:"Notification",deprecated:!1,deprecationMessage:"",tagName:{pos:3543,end:3548,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the notification</p>
`}]},{name:"hideNotification",args:[{name:"id",type:"string",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:99,deprecated:!1,deprecationMessage:"",rawdescription:`

Hide the notification
`,description:`<p>Hide the notification</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:3349,end:3351,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"id"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:3343,end:3348,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:87,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItNotificationService } from '../../../services/notification/notification.service';
import { Notification, NotificationPosition, NotificationType } from '../../../interfaces/core';
import { Notification as BSNotification } from 'bootstrap-italia';
import { IconName } from '../../../interfaces/icon';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule],
})
export class ItNotificationsComponent implements OnDestroy {
  /**
   * Default notifications duration (milliseconds)
   * @default 8000
   */
  @Input() duration: number = 8000;

  /**
   * Default notifications position
   */
  @Input() position: NotificationPosition | undefined;

  /**
   * Default notifications is dismissible
   * @default true
   */
  @Input({ transform: inputToBoolean }) dismissible: boolean = true;

  private subscription: Subscription;
  private notificationCount: number = 0;
  protected notifications: Array<Notification & { id: string }> = [];

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _notificationService: ItNotificationService
  ) {
    this.subscription = this._notificationService.onNotification().subscribe(notification => {
      if (!notification.duration) {
        notification.duration = this.duration; // Add duration if not is set
      }
      if (!notification.position && this.position) {
        notification.position = this.position; // Add position if not is set
      }
      if (notification.dismissible === undefined && this.dismissible) {
        notification.dismissible = true; // Add dismissible if not is set
      }
      if (!notification.icon) {
        notification.icon = this.getNotificationIcon(notification);
      }

      const newNotification = {
        ...notification,
        id: \`\${notification.type}-\${this.notificationCount++}-notification\`,
      };
      this.notifications.push(newNotification);
      this._changeDetectorRef.detectChanges();

      setTimeout(() => {
        // Show the notification
        new BSNotification(document.getElementById(newNotification.id)!, {
          timeout: notification.duration,
        }).show();

        // Clear notification after the duration
        setTimeout(() => {
          const index = this.notifications.findIndex(n => n.id === newNotification.id);
          if (index > -1) {
            this.notifications.splice(index, 1);
            if (!this.notifications.length) {
              this.notificationCount = 0;
            }
            this._changeDetectorRef.detectChanges();
          }
        }, notification.duration);
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected get NotificationType(): typeof NotificationType {
    return NotificationType;
  }

  /**
   * Hide the notification
   * @param id
   */
  protected hideNotification(id: string): void {
    BSNotification.getInstance(document.getElementById(id)!)?.hide();
  }

  /**
   * Retrieve the icon name by notification type
   * @param notification the notification
   * @protected
   */
  private getNotificationIcon(notification: Notification): IconName | undefined {
    switch (notification.type) {
      case NotificationType.Success:
        return 'check-circle';
      case NotificationType.Error:
        return 'close-circle';
      case NotificationType.Warning:
        return 'error';
      case NotificationType.Info:
        return 'info-circle';
      case NotificationType.Standard:
      default:
        return undefined;
    }
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.notification {
  z-index: 10000;
}
`,styleUrl:"./notifications.component.scss"}],stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"_notificationService",type:"ItNotificationService",deprecated:!1,deprecationMessage:""}],line:39,jsdoctags:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"_notificationService",type:"ItNotificationService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["OnDestroy"],accessors:{NotificationType:{name:"NotificationType",getSignature:{name:"NotificationType",type:"",returnType:"",line:91}}},templateData:`@for (notification of notifications; track notification.id) {
  <div
    [id]="notification.id"
    class="notification {{ notification.position }} {{ notification.type }}"
    [class.with-icon]="!!notification.icon"
    [class.dismissable]="notification.dismissible"
    role="alert"
    [attr.aria-labelledby]="notification.id + '-title'">
    <h2 [id]="notification.id + '-title'" class="h5">
      @if (notification.icon) {
        <it-icon [name]="notification.icon"></it-icon>
      }
      <ng-container>{{ notification.title }}</ng-container>
    </h2>
    @if (notification.message) {
      <p>{{ notification.message }}</p>
    }
    @if (notification.dismissible) {
      <button type="button" class="btn notification-close" (click)="hideNotification(notification.id)">
        <it-icon name="close"></it-icon>
        <span class="visually-hidden">{{ 'it.core.close-notification' | translate: { title: notification.title } }}</span>
      </button>
    }
  </div>
}
`},{name:"ItPaginationComponent",id:"component-ItPaginationComponent-ccb8cf4fe39781b33034b704694a88c36168f687bfe920dbef4115d6e71e8c733e4cbc8a4fc73692cbb8ce844505f8ed1290d0cf1d8477899e216d885c8dbdfb",file:"projects/design-angular-kit/src/lib/components/core/pagination/pagination.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-pagination",styleUrls:[],styles:[],templateUrl:["./pagination.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"alignment",deprecated:!1,deprecationMessage:"",rawdescription:`

Pagination alignment (justify-content)
`,description:`<p>Pagination alignment (justify-content)</p>
`,line:38,type:'"center" | "end" | undefined',decorators:[]},{name:"changerValues",defaultValue:"[10, 25, 50, 100]",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2044,end:2074,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2045,end:2052,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>[10, 25, 50, 100]</p>
`}],rawdescription:`

Available Changer values
`,description:`<p>Available Changer values</p>
`,line:65,type:"Array<number>",decorators:[]},{name:"currentChanger",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1911,end:1952,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1912,end:1919,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined - hide the Changer</p>
`}],rawdescription:`

Current value of Changer
If is set show the Changer
`,description:`<p>Current value of Changer
If is set show the Changer</p>
`,line:59,type:"number | undefined",decorators:[]},{required:!0,name:"currentPage",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Index of page (start 0)
`,description:`<p>Index of page (start 0)</p>
`,line:22,type:"number",decorators:[]},{required:!0,name:"pageNumbers",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Max number of page (counter)
`,description:`<p>Max number of page (counter)</p>
`,line:27,type:"number",decorators:[]},{required:!1,name:"showJumpToPage",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2186,end:2213,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2187,end:2194,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false - hidden</p>
`}],rawdescription:`

Hide/Show "Jump to page" input
`,description:`<p>Hide/Show &quot;Jump to page&quot; input</p>
`,line:71,type:"boolean",decorators:[]},{required:!1,name:"simpleMode",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1505,end:1534,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1506,end:1513,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false - disabled</p>
`}],rawdescription:`

Enable/Disable simple mode
Pagination in the "Simple mode" version is optimized for mobile devices.
`,description:`<p>Enable/Disable simple mode
Pagination in the &quot;Simple mode&quot; version is optimized for mobile devices.</p>
`,line:45,type:"boolean",decorators:[]},{required:!1,name:"textLinks",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1744,end:1773,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1745,end:1752,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false - disabled</p>
`}],rawdescription:`

Enable/Disable text links
Chevron icons used as navigation links are replaced by text links such as \u201Cprevious\u201D and \u201Cnext\u201D.
`,description:`<p>Enable/Disable text links
Chevron icons used as navigation links are replaced by text links such as \u201Cprevious\u201D and \u201Cnext\u201D.</p>
`,line:52,type:"boolean",decorators:[]},{name:"visiblePages",defaultValue:"5",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1220,end:1234,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1221,end:1228,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>5</p>
`}],rawdescription:`

Number of pages closest to the current one to display
`,description:`<p>Number of pages closest to the current one to display</p>
`,line:33,type:"number",decorators:[]}],outputsClass:[{name:"changerEvent",defaultValue:"new EventEmitter<number>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when changer is changed. Emit the new changer value
`,description:`<p>Fired when changer is changed. Emit the new changer value</p>
`,line:81,type:"EventEmitter"},{name:"pageEvent",defaultValue:"new EventEmitter<number>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when page is changed. Emit the new index of page
`,description:`<p>Fired when page is changed. Emit the new index of page</p>
`,line:76,type:"EventEmitter"}],propertiesClass:[{name:"jumpToPage",defaultValue:"new FormControl<number | null>(null)",deprecated:!1,deprecationMessage:"",type:"FormControl<number | null>",optional:!1,description:`<p>Jump to page input</p>
`,line:93,rawdescription:`

Jump to page input
`,modifierKind:[124],jsdoctags:[{pos:2657,end:2671,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:342,tagName:{pos:2658,end:2667,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"protected"},comment:""}]},{name:"pages",defaultValue:"[]",deprecated:!1,deprecationMessage:"",type:"Array<number>",optional:!1,description:`<p>The pages</p>
`,line:87,rawdescription:`

The pages
`,modifierKind:[124],jsdoctags:[{pos:2565,end:2579,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:342,tagName:{pos:2566,end:2575,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"protected"},comment:""}]}],methodsClass:[{name:"calculatePages",args:[],optional:!1,returnType:"Array<number>",typeParameters:[],line:117,deprecated:!1,deprecationMessage:"",rawdescription:`

Create array to generate pagination of \`visiblePages\` element
`,description:`<p>Create array to generate pagination of <code>visiblePages</code> element</p>
`,modifierKind:[123]},{name:"changerChange",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""},{name:"value",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:153,deprecated:!1,deprecationMessage:"",rawdescription:`

On click changer
`,description:`<p>On click changer</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4456,end:4461,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},type:"Event",deprecated:!1,deprecationMessage:"",tagName:{pos:4450,end:4455,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>click event</p>
`},{name:{pos:4486,end:4491,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:4480,end:4485,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the new changer value</p>
`}]},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:107,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"pageChange",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""},{name:"newPage",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:143,deprecated:!1,deprecationMessage:"",rawdescription:`

On click page change
`,description:`<p>On click page change</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4194,end:4199,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},type:"Event",deprecated:!1,deprecationMessage:"",tagName:{pos:4188,end:4193,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>click event</p>
`},{name:{pos:4224,end:4231,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"newPage"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:4218,end:4223,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the new page of table</p>
`}]}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"},{name:"LowerCasePipe",type:"pipe"},{name:"ItDropdownModule",type:"module"},{name:"ItInputComponent",type:"component"},{name:"ReactiveFormsModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { LowerCasePipe } from '@angular/common';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItDropdownModule } from '../dropdown/dropdown.module';
import { ItInputComponent } from '../../form/input/input.component';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, LowerCasePipe, ItDropdownModule, ItInputComponent, ReactiveFormsModule],
})
export class ItPaginationComponent implements OnChanges {
  /**
   * Index of page (start 0)
   */
  @Input({ required: true }) currentPage!: number;

  /**
   * Max number of page (counter)
   */
  @Input({ required: true }) pageNumbers!: number;

  /**
   * Number of pages closest to the current one to display
   * @default 5
   */
  @Input() visiblePages: number = 5;

  /**
   * Pagination alignment (justify-content)
   */
  @Input() alignment: 'center' | 'end' | undefined;

  /**
   * Enable/Disable simple mode
   * Pagination in the "Simple mode" version is optimized for mobile devices.
   * @default false - disabled
   */
  @Input({ transform: inputToBoolean }) simpleMode?: boolean;

  /**
   * Enable/Disable text links
   * Chevron icons used as navigation links are replaced by text links such as \u201Cprevious\u201D and \u201Cnext\u201D.
   * @default false - disabled
   */
  @Input({ transform: inputToBoolean }) textLinks?: boolean;

  /**
   * Current value of Changer
   * If is set show the Changer
   * @default undefined - hide the Changer
   */
  @Input() currentChanger: number | undefined;

  /**
   * Available Changer values
   * @default [10, 25, 50, 100]
   */
  @Input() changerValues: Array<number> = [10, 25, 50, 100];

  /**
   * Hide/Show "Jump to page" input
   * @default false - hidden
   */
  @Input({ transform: inputToBoolean }) showJumpToPage?: boolean;

  /**
   * Fired when page is changed. Emit the new index of page
   */
  @Output() pageEvent = new EventEmitter<number>();

  /**
   * Fired when changer is changed. Emit the new changer value
   */
  @Output() changerEvent = new EventEmitter<number>();

  /**
   * The pages
   * @protected
   */
  protected pages: Array<number> = [];

  /**
   * Jump to page input
   * @protected
   */
  protected jumpToPage: FormControl<number | null> = new FormControl<number | null>(null);

  constructor() {
    this.jumpToPage.valueChanges
      .pipe(
        debounceTime(300), // Delay filter data after time span has passed without another source emission
        distinctUntilChanged(),
        filter(value => !!value && this.jumpToPage.valid)
      )
      .subscribe(value => {
        this.pageEvent.emit(value! - 1);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = this.calculatePages();
    if (changes['currentPage']) {
      this.jumpToPage.setValue(null, { emitEvent: false });
    }
  }

  /**
   * Create array to generate pagination of \`visiblePages\` element
   */
  private calculatePages(): Array<number> {
    if (this.simpleMode) {
      return [this.currentPage];
    }

    const length = this.pageNumbers > this.visiblePages ? this.visiblePages : this.pageNumbers;

    const halfVisiblePages = Math.floor(this.visiblePages / 2);
    let start = this.currentPage > halfVisiblePages && this.pageNumbers > this.visiblePages ? this.currentPage - halfVisiblePages + 1 : 1;

    if (this.pageNumbers > this.visiblePages) {
      if (this.currentPage + 1 >= this.pageNumbers) {
        start -= halfVisiblePages;
      } else if (this.currentPage >= this.pageNumbers - halfVisiblePages) {
        start -= this.pageNumbers - (this.currentPage + 1);
      }
    }

    return Array.from({ length }, (_, i) => i + start);
  }

  /**
   * On click page change
   * @param event click event
   * @param newPage the new page of table
   */
  protected pageChange(event: Event, newPage: number): void {
    event.preventDefault();
    this.pageEvent.emit(newPage - 1); // emit new page index
  }

  /**
   * On click changer
   * @param event click event
   * @param value the new changer value
   */
  protected changerChange(event: Event, value: number): void {
    event.preventDefault();
    this.changerEvent.emit(value); // emit new changer value
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:93},extends:[],implements:["OnChanges"],templateData:`<nav
  class="pagination-wrapper"
  [class.justify-content-center]="alignment === 'center'"
  [class.justify-content-end]="alignment === 'end'"
  [class.pagination-total]="totalNumberText.hasChildNodes()">
  @if (pages.length) {
    <ul class="pagination">
      <li class="page-item" [class.disabled]="currentPage < 1">
        <a class="page-link" [class.text]="textLinks" href="#" (click)="pageChange($event, currentPage)">
          @if (!textLinks) {
            <it-icon name="chevron-left" color="primary"></it-icon>
          }
          <span class="visually-hidden">
            {{ (textLinks ? 'it.core.page' : 'it.core.previous-page') | translate }}
          </span>
          @if (textLinks) {
            {{ 'it.core.previous' | translate }}
          }
        </a>
      </li>
      @if (simpleMode) {
        <li class="page-item">
          <span class="page-link" aria-current="page">{{ currentPage + 1 }}</span>
        </li>
        <li class="page-item"><span class="page-link">/</span></li>
        <li class="page-item">
          <span class="page-link">{{ pageNumbers }}</span>
        </li>
        <li class="page-item visually-hidden">
          <a class="page-link" href="#" aria-current="page">
            {{ 'it.core.page-of-total' | translate: { page: currentPage + 1, total: pageNumbers } }}
          </a>
        </li>
      } @else {
        @if (pageNumbers > visiblePages && pages[0] >= 2) {
          <li class="page-item">
            <a class="page-link" href="#" (click)="pageChange($event, 1)">1</a>
          </li>
          @if (pages[0] >= 3) {
            <li class="page-item">
              <span class="page-link">...</span>
            </li>
          }
        }
        @for (page of pages; track page) {
          <li class="page-item">
            @if (page === currentPage + 1) {
              <a class="page-link" aria-current="page">
                <span class="d-inline-block d-sm-none">{{ 'it.core.page' | translate }}</span> {{ page }}
              </a>
            } @else {
              <a class="page-link" href="#" (click)="pageChange($event, page)">{{ page }}</a>
            }
          </li>
        }
        @if (pageNumbers > visiblePages && pages[pages.length - 1] < pageNumbers) {
          @if (pages[pages.length - 1] < pageNumbers - 1) {
            <li class="page-item">
              <span class="page-link">...</span>
            </li>
          }
          <li class="page-item">
            <a class="page-link" href="#" (click)="pageChange($event, pageNumbers)">{{ pageNumbers }}</a>
          </li>
        }
      }
      <li class="page-item" [class.disabled]="currentPage >= pageNumbers - 1">
        <a class="page-link" [class.text]="textLinks" href="#" (click)="pageChange($event, currentPage + 2)">
          <span class="visually-hidden">
            {{ (textLinks ? 'it.core.page' : 'it.core.next-page') | translate }}
          </span>
          @if (textLinks) {
            {{ 'it.core.next' | translate }}
          } @else {
            <it-icon name="chevron-right" color="primary"></it-icon>
          }
        </a>
      </li>
    </ul>
  }

  @if (currentChanger !== undefined) {
    <it-dropdown>
      <span button>{{ currentChanger }} / {{ 'it.core.page' | translate | lowercase }}</span>
      <ng-container list>
        @for (value of changerValues; track value) {
          <it-dropdown-item href="#" externalLink="true" (click)="changerChange($event, value)">
            {{ value }} / {{ 'it.core.page' | translate | lowercase }}
          </it-dropdown-item>
        }
      </ng-container>
    </it-dropdown>
  }

  @if (showJumpToPage) {
    <it-input
      type="number"
      [min]="1"
      [max]="pageNumbers"
      [label]="('it.core.go-to' | translate) + '...'"
      [formControl]="jumpToPage"></it-input>
  }

  <p [class.d-none]="!totalNumberText.hasChildNodes()" #totalNumberText>
    <ng-content></ng-content>
  </p>
</nav>
`},{name:"ItPasswordInputComponent",id:"component-ItPasswordInputComponent-1d2c191e5907041f16a311addf6ae1a3469c989057f7d4f7c6658750aa0c3fcc3fddea2940ee51c444a5dd2174f51e17ee57114451cb357a4e9edd2bcc8b7a90",file:"projects/design-angular-kit/src/lib/components/form/password-input/password-input.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-password-input",styleUrls:["./password-input.component.scss"],styles:[],templateUrl:["./password-input.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"autocomplete",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2511,end:2533,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2512,end:2519,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Input autocomplete attribute (Browser autocomplete)
`,description:`<p>Input autocomplete attribute (Browser autocomplete)</p>
`,line:86,type:"string | undefined",decorators:[]},{required:!1,name:"confirmPasswordField",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2349,end:2367,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2350,end:2357,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Is the confirmation password field
`,description:`<p>Is the confirmation password field</p>
`,line:80,type:"boolean",decorators:[]},{name:"description",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2044,end:2102,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2045,end:2052,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true for StrengthMeter mode else is undefined</p>
`}],rawdescription:`

The input description
- <b>true</b>: show the StrengthMeter description message
- <b>string</b>: show custom description
`,description:`<p>The input description</p>
<ul>
<li><b>true</b>: show the StrengthMeter description message</li>
<li><b>string</b>: show custom description</li>
</ul>
`,line:68,type:"string |  | undefined",decorators:[]},{name:"minLength",defaultValue:"10",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1226,end:1241,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1227,end:1234,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>10</p>
`}],rawdescription:`

The password minimum length
`,description:`<p>The password minimum length</p>
`,line:31,type:"number",decorators:[]},{name:"placeholder",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

The input placeholder
`,description:`<p>The input placeholder</p>
`,line:60,type:"string",decorators:[]},{name:"required",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1124,end:1141,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1125,end:1132,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The field is required
`,description:`<p>The field is required</p>
`,line:25,type:"boolean",decorators:[]},{required:!1,name:"showStrengthMeter",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2207,end:2225,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2208,end:2215,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Enable to show the strength meter
`,description:`<p>Enable to show the strength meter</p>
`,line:74,type:"boolean",decorators:[]},{name:"useCapitalCase",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1476,end:1493,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1477,end:1484,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The password must contain at least one uppercase character
`,description:`<p>The password must contain at least one uppercase character</p>
`,line:43,type:"boolean",decorators:[]},{name:"useNumber",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1342,end:1359,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1343,end:1350,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The password must contain at least one number
`,description:`<p>The password must contain at least one number</p>
`,line:37,type:"boolean",decorators:[]},{name:"useSmallCase",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1615,end:1632,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1616,end:1623,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The password must contain at least one lowercase character
`,description:`<p>The password must contain at least one lowercase character</p>
`,line:49,type:"boolean",decorators:[]},{name:"useSpecialCharacters",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1750,end:1767,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1751,end:1758,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The password must contain at least one special character
`,description:`<p>The password must contain at least one special character</p>
`,line:55,type:"boolean",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"inputElement",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLInputElement>",optional:!0,description:"",line:90,decorators:[{name:"ViewChild",stringifiedArguments:"'input'"}],modifierKind:[170,123]},{name:"inputPasswordBs",deprecated:!1,deprecationMessage:"",type:"InputPassword",optional:!0,description:"",line:88,modifierKind:[123]},{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:111,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:92,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"},{name:"ItIconComponent",type:"component"},{name:"AsyncPipe",type:"pipe"},{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ItValidators } from '../../../validators/it-validators';
import { map, Observable } from 'rxjs';
import { InputPassword } from 'bootstrap-italia';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ItIconComponent, AsyncPipe, TranslateModule],
})
export class ItPasswordInputComponent extends ItAbstractFormComponent<string | null | undefined> implements OnInit, AfterViewInit {
  /**
   * The field is required
   * @default true
   */
  @Input() required: boolean = true;

  /**
   * The password minimum length
   * @default 10
   */
  @Input() minLength: number = 10;

  /**
   * The password must contain at least one number
   * @default true
   */
  @Input() useNumber: boolean = true;

  /**
   * The password must contain at least one uppercase character
   * @default true
   */
  @Input() useCapitalCase: boolean = true;

  /**
   * The password must contain at least one lowercase character
   * @default true
   */
  @Input() useSmallCase: boolean = true;

  /**
   * The password must contain at least one special character
   * @default true
   */
  @Input() useSpecialCharacters: boolean = true;

  /**
   * The input placeholder
   */
  @Input() placeholder: string = '';

  /**
   * The input description
   * - <b>true</b>: show the StrengthMeter description message
   * - <b>string</b>: show custom description
   * @default true for StrengthMeter mode else is undefined
   */
  @Input() description: string | true | undefined;

  /**
   * Enable to show the strength meter
   * @default false
   */
  @Input({ transform: inputToBoolean }) showStrengthMeter?: boolean;

  /**
   * Is the confirmation password field
   * @default false
   */
  @Input({ transform: inputToBoolean }) confirmPasswordField?: boolean;

  /**
   * Input autocomplete attribute (Browser autocomplete)
   * @default undefined
   */
  @Input() autocomplete: string | undefined;

  private inputPasswordBs?: InputPassword;

  @ViewChild('input') private inputElement?: ElementRef<HTMLInputElement>;

  override ngOnInit() {
    super.ngOnInit();

    if (!this.confirmPasswordField) {
      this.addValidators(
        ItValidators.password(
          this.minLength,
          this.useNumber,
          this.useCapitalCase,
          this.useSmallCase,
          this.useSpecialCharacters,
          this.required
        )
      );
    } else if (this.required) {
      this.addValidators(Validators.required);
    }
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.inputElement) {
      this.inputPasswordBs = InputPassword.getOrCreateInstance(this.inputElement.nativeElement, {
        showText: this.isStrengthMeter,
        minimumLength: this.minLength,
      });
    }
  }

  protected get isStrengthMeter(): boolean {
    return !this.confirmPasswordField && !!this.showStrengthMeter;
  }

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('noPasswordMatch')) {
      return this._translateService.get('it.errors.password-no-match');
    }
    if (this.hasError('minlength')) {
      return this._translateService.get('it.errors.password-min-length', {
        minLength: this.minLength,
      });
    }
    if (this.hasError('hasNumber')) {
      return this._translateService.get('it.errors.password-number');
    }
    if (this.hasError('hasCapitalCase')) {
      return this._translateService.get('it.errors.password-capital-case');
    }
    if (this.hasError('hasSmallCase')) {
      return this._translateService.get('it.errors.password-capital-case');
    }
    if (this.hasError('hasSpecialCharacters')) {
      return this._translateService.get('it.errors.password-special-character');
    }

    return super.invalidMessage;
  }

  /**
   * Retrieve the default StrengthMeter description message from TranslateService
   */
  protected get strengthMeterDescription(): Observable<string> {
    const keys = ['it.form.password-strength-meter.description.default'];
    if (this.useNumber) {
      keys.push('it.form.password-strength-meter.description.number');
    }
    if (this.useCapitalCase) {
      keys.push('it.form.password-strength-meter.description.capital-case');
    }
    if (this.useSpecialCharacters) {
      keys.push('it.form.password-strength-meter.description.special-character');
    }

    return this._translateService.get(keys, { minLength: this.minLength }).pipe(map(labels => Object.values(labels).join(', ')));
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.form-group {
  input:focus:not(.focus--mouse) {
    box-shadow: inherit !important;
    border-color: inherit !important;
  }
  label:not(.active):has(+ input:-webkit-autofill) {
    transform: translateY(-75%);
  }
}
`,styleUrl:"./password-input.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit","AfterViewInit"],accessors:{isStrengthMeter:{name:"isStrengthMeter",getSignature:{name:"isStrengthMeter",type:"boolean",returnType:"boolean",line:122}},invalidMessage:{name:"invalidMessage",getSignature:{name:"invalidMessage",type:"",returnType:"Observable<string>",line:129,rawdescription:`

Return the invalid message string from TranslateService
`,description:`<p>Return the invalid message string from TranslateService</p>
`}},strengthMeterDescription:{name:"strengthMeterDescription",getSignature:{name:"strengthMeterDescription",type:"",returnType:"Observable<string>",line:157,rawdescription:`

Retrieve the default StrengthMeter description message from TranslateService
`,description:`<p>Retrieve the default StrengthMeter description message from TranslateService</p>
`}}},templateData:`<div class="form-group">
  @if (label) {
    <label [for]="id" [class.active]="!!control.value || !!placeholder">{{ label }}</label>
  }
  <input
    #input
    [id]="id"
    type="password"
    class="form-control input-password"
    [class.is-invalid]="isInvalid"
    [class.is-valid]="isValid"
    [formControl]="control"
    [placeholder]="placeholder"
    [attr.aria-describedby]="id + '-description'"
    [autocomplete]="confirmPasswordField ? 'off' : autocomplete" />

  <span class="password-icon" aria-hidden="true">
    <it-icon name="password-visible" size="sm" class="password-icon-visible"></it-icon>
    <it-icon name="password-invisible" size="sm" class="password-icon-invisible d-none"></it-icon>
  </span>

  @if (isInvalid) {
    <div [id]="id + '-error'" class="form-feedback just-validate-error-label">
      <div #customError>
        <ng-content select="[error]"></ng-content>
      </div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }

  @if (description !== undefined && !isStrengthMeter) {
    <small [id]="id + '-description'" class="form-text">
      {{ description !== true ? description : (strengthMeterDescription | async) }}
    </small>
  }

  <small class="password-caps form-text text-warning position-absolute bg-white w-100">
    {{ 'it.form.caps-inserted' | translate }}
  </small>

  @if (isStrengthMeter) {
    <div class="password-strength-meter">
      <small
        [id]="id + '-description'"
        class="form-text text-muted"
        [attr.data-bs-short-pass]="'it.form.password-strength-meter.password-short' | translate"
        [attr.data-bs-bad-pas]="'it.form.password-strength-meter.password-bad' | translate"
        [attr.data-bs-good-pass]="'it.form.password-strength-meter.password-good' | translate"
        [attr.data-bs-strong-pass]="'it.form.password-strength-meter.password-strong' | translate">
        {{ description !== undefined && description !== true ? description : (strengthMeterDescription | async) }}
      </small>
      <div class="password-meter progress rounded-0 position-absolute">
        <div class="row position-absolute w-100 m-0">
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
        </div>
        <div class="progress-bar bg-muted" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  }
</div>
`},{name:"ItProgressBarComponent",id:"component-ItProgressBarComponent-5dfdac5d8e8170631452eaf8402e05a25e3f4e137c0249fbef666a456452314661e529581333e1e7fda8dbcef90648a0bc274f4d77e5b66c84f080f994b4c886",file:"projects/design-angular-kit/src/lib/components/core/progress-bar/progress-bar.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-progress-bar",styleUrls:[],styles:[],templateUrl:["./progress-bar.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

The progress bar color
`,description:`<p>The progress bar color</p>
`,line:34,type:"ProgressBarColor | undefined",decorators:[]},{required:!1,name:"indeterminate",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:753,end:771,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:754,end:761,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show the progress as indeterminate
`,description:`<p>Show the progress as indeterminate</p>
`,line:29,type:"boolean",decorators:[]},{required:!1,name:"showLabel",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:619,end:637,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:620,end:627,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show the progress label
`,description:`<p>Show the progress label</p>
`,line:23,type:"boolean",decorators:[]},{required:!0,name:"value",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

The progress bar value [0, 100]
`,description:`<p>The progress bar value [0, 100]</p>
`,line:17,type:"number",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class ItProgressBarComponent {
  /**
   * The progress bar value [0, 100]
   */
  @Input({ required: true }) value!: number;

  /**
   * Show the progress label
   * @default false
   */
  @Input({ transform: inputToBoolean }) showLabel?: boolean;

  /**
   * Show the progress as indeterminate
   * @default false
   */
  @Input({ transform: inputToBoolean }) indeterminate?: boolean;

  /**
   * The progress bar color
   */
  @Input() color: ProgressBarColor | undefined;

  /**
   * Return the background color
   */
  get bgColor(): string {
    if (!this.color) {
      return '';
    }

    return \` bg-\${this.color}\`;
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],accessors:{bgColor:{name:"bgColor",getSignature:{name:"bgColor",type:"string",returnType:"string",line:39,rawdescription:`

Return the background color
`,description:`<p>Return the background color</p>
`}}},templateData:`<div class="progress-bar-wrapper">
  @if (showLabel) {
    <div class="progress-bar-label">
      <span class="visually-hidden">{{ 'it.core.progress' | translate }} </span>{{ value }}%
    </div>
  }
  <div class="progress" [class.progress-color]="!!color" [class.progress-indeterminate]="indeterminate">
    @if (indeterminate) {
      <div class="progress-bar{{ bgColor }}" role="progressbar"></div>
    } @else {
      <div
        class="progress-bar{{ bgColor }}"
        role="progressbar"
        [style.width.%]="value"
        [attr.aria-valuenow]="value"
        aria-valuemin="0"
        aria-valuemax="100"></div>
    }
  </div>
</div>
`},{name:"ItProgressButtonComponent",id:"component-ItProgressButtonComponent-56bce6722e206fce489e570e12becc63c8b146a2bb80885084f620fb731ab3834a8a1abf184935d07b4637ae2861ce8e379f89fad0e5a1eac18b9bb3eafdbe69",file:"projects/design-angular-kit/src/lib/components/core/progress-button/progress-button.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"button[itButton][progress]",styleUrls:[],styles:[],templateUrl:["./progress-button.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"progress",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:772,end:794,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:773,end:780,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

Behavior of the progress bar
- <b>true</b>: Show indeterminate progress bar
- <b>false</b> or <b>undefined</b>: Hide progress bar
- <b>number</b> [0, 100]: Assign a specific value to the progress bar
`,description:`<p>Behavior of the progress bar</p>
<ul>
<li><b>true</b>: Show indeterminate progress bar</li>
<li><b>false</b> or <b>undefined</b>: Hide progress bar</li>
<li><b>number</b> [0, 100]: Assign a specific value to the progress bar</li>
</ul>
`,line:21,type:"number | boolean | undefined",decorators:[]},{name:"progressColor",deprecated:!1,deprecationMessage:"",rawdescription:`

The progress bar color
`,description:`<p>The progress bar color</p>
`,line:26,type:"ProgressBarColor | undefined",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItProgressBarComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { ItProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[itButton][progress]',
  templateUrl: './progress-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItProgressBarComponent],
})
export class ItProgressButtonComponent {
  /**
   * Behavior of the progress bar
   * - <b>true</b>: Show indeterminate progress bar
   * - <b>false</b> or <b>undefined</b>: Hide progress bar
   * - <b>number</b> [0, 100]: Assign a specific value to the progress bar
   * @default undefined
   */
  @Input() progress: number | boolean | undefined;

  /**
   * The progress bar color
   */
  @Input() progressColor: ProgressBarColor | undefined;

  get isProgress(): boolean {
    return typeof this.progress === 'number' || !!this.progress;
  }

  get progressValue(): number {
    return typeof this.progress === 'number' ? this.progress : 0;
  }

  get isIndeterminate(): boolean {
    return typeof this.progress !== 'number' && !!this.progress;
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],accessors:{isProgress:{name:"isProgress",getSignature:{name:"isProgress",type:"boolean",returnType:"boolean",line:28}},progressValue:{name:"progressValue",getSignature:{name:"progressValue",type:"number",returnType:"number",line:32}},isIndeterminate:{name:"isIndeterminate",getSignature:{name:"isIndeterminate",type:"boolean",returnType:"boolean",line:36}}},templateData:`<ng-content></ng-content>

@if (isProgress) {
  <it-progress-bar [value]="progressValue" [indeterminate]="isIndeterminate" [color]="progressColor"></it-progress-bar>
}
`},{name:"ItRadioButtonComponent",id:"component-ItRadioButtonComponent-9a121b7a31e07779f7a1443159303dd8686877d9828d3d359ad932b4a6101ae1758cab97eb0da3c9850456528710ccf660d3fdff3b0e6941ec53895368cb5a4a",file:"projects/design-angular-kit/src/lib/components/form/radio-button/radio-button.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-radio-button",styleUrls:["./radio-button.component.scss"],styles:[],templateUrl:["./radio-button.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"checked",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1085,end:1103,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1086,end:1093,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is radio is checked
`,description:`<p>If is radio is checked</p>
`,line:37,type:"boolean",decorators:[]},{name:"forceRadioName",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1281,end:1354,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1282,end:1289,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>by default the radio name is calculated from form field name</p>
`}],rawdescription:`

Set the radio name manually.
For example when the radio button name is duplicated inside page
`,description:`<p>Set the radio name manually.
For example when the radio button name is duplicated inside page</p>
`,line:44,type:"string",decorators:[]},{required:!1,name:"group",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:967,end:985,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:968,end:975,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is radio group
`,description:`<p>If is radio group</p>
`,line:31,type:"boolean",decorators:[]},{required:!1,name:"inline",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:853,end:871,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:854,end:861,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If show radio inline
`,description:`<p>If show radio inline</p>
`,line:25,type:"boolean",decorators:[]},{required:!0,name:"value",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

The radio value
`,description:`<p>The radio value</p>
`,line:19,type:"string | number | undefined | null",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngOnInit",args:[],optional:!1,returnType:"any",typeParameters:[],line:72,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"},{name:"AsyncPipe",type:"pipe"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItRadioButtonComponent extends ItAbstractFormComponent<string | number | null | undefined> implements OnInit {
  /**
   * The radio value
   */
  @Input({ required: true }) value: string | number | undefined | null;

  /**
   * If show radio inline
   * @default false
   */
  @Input({ transform: inputToBoolean }) inline?: boolean;

  /**
   * If is radio group
   * @default false
   */
  @Input({ transform: inputToBoolean }) group?: boolean;

  /**
   * If is radio is checked
   * @default false
   */
  @Input({ transform: inputToBoolean }) checked?: boolean;

  /**
   * Set the radio name manually.
   * For example when the radio button name is duplicated inside page
   * @default by default the radio name is calculated from form field name
   */
  @Input() forceRadioName?: string;

  get name(): string {
    if (this.forceRadioName) {
      return this.forceRadioName;
    }

    let name = '';
    if (this._ngControl) {
      name = this._ngControl.name?.toString() || '';

      // Retrieve parent name, prevent duplicate name inside FormArray or nested FormGroup
      let control = this._ngControl.control?.parent;
      while (control?.parent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const controls: { [key: string]: any } = control?.parent?.controls || {};
        const parentName = Object.keys(controls).find(name => control === controls[name]) || null;
        if (!parentName) {
          break;
        }
        name = \`\${parentName}.\${name}\`; // parent.0.radioName
        control = control.parent;
      }
    }

    return name;
  }

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value || !this.value || !this.checked) {
      return;
    }

    this.writeValue(this.value);
    return this.onChange(this.value);
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`//@import 'bootstrap-italia/src/scss/functions';
//@import 'bootstrap-italia/src/scss/utilities/colors_vars';
//
//.form-check {
//
//  [type=radio].is-invalid:not(:checked) + label::after,
//  [type=radio].is-invalid:not(:checked) + label::before {
//    border-color: $danger;
//  }
//
//  [type=radio].is-invalid:not(:checked) + label {
//    color: $danger;
//  }
//}
`,styleUrl:"./radio-button.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit"],accessors:{name:{name:"name",getSignature:{name:"name",type:"string",returnType:"string",line:46}}},templateData:`<ng-container>
  <div class="form-check" [class.form-check-group]="group" [class.form-check-inline]="inline">
    <input
      [id]="id"
      type="radio"
      [value]="value"
      class="form-check-input"
      [name]="name"
      [class.is-invalid]="isInvalid"
      [class.is-valid]="isValid"
      [formControl]="control"
      [attr.aria-describedby]="id + '-help'" />

    <label class="form-check-label" [for]="id">
      <div #customLabel>
        <ng-content select="[label]"></ng-content>
      </div>
      @if (!customLabel.hasChildNodes()) {
        {{ label }}
      }
    </label>

    @if (group) {
      <small [id]="id + '-help'" class="form-text">
        <ng-content></ng-content>
      </small>
    }

    @if (isInvalid && group) {
      <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
        <div #customError>
          <ng-content select="[error]"></ng-content>
        </div>
        @if (!customError.hasChildNodes()) {
          {{ invalidMessage | async }}
        }
      </div>
    }
  </div>

  @if (isInvalid && !group) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <div #customError>
        <ng-content select="[error]"></ng-content>
      </div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }
</ng-container>
`},{name:"ItRangeComponent",id:"component-ItRangeComponent-8d18236dce9bbef34345b24d0b6822a110701792d80c01a948f0f7ef9a418a2118230958c3f59024eba72fef7dd995bd0d49cf9cca01b5820e74081f17a53824",file:"projects/design-angular-kit/src/lib/components/form/range/range.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-range",styleUrls:["./range.component.scss"],styles:[],templateUrl:["./range.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"leftColor",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:976,end:1023,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:977,end:984,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;#0d6efd&#39; or &#39;var(--bs-primary)&#39;</p>
`},{pos:1023,end:1068,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1024,end:1031,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined (&#39;var(--bs-gray-300)&#39;)</p>
`}],rawdescription:"\n\nThe color on left of thumb [Require rightColor]\n```html\n```",description:`<p>The color on left of thumb [Require rightColor]</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:45,type:"string",decorators:[]},{name:"max",deprecated:!1,deprecationMessage:"",rawdescription:`

The max value
`,description:`<p>The max value</p>
`,line:28,type:"number",decorators:[]},{name:"min",deprecated:!1,deprecationMessage:"",rawdescription:`

The min value
`,description:`<p>The min value</p>
`,line:33,type:"number",decorators:[]},{name:"rightColor",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1167,end:1214,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1168,end:1175,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;#0d6efd&#39; or &#39;var(--bs-primary)&#39;</p>
`},{pos:1214,end:1259,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1215,end:1222,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined (&#39;var(--bs-gray-300)&#39;)</p>
`}],rawdescription:"\n\nThe color on right of thumb [Require leftColor]\n```html\n```",description:`<p>The color on right of thumb [Require leftColor]</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:52,type:"string",decorators:[]},{name:"step",deprecated:!1,deprecationMessage:"",rawdescription:`

The step value
`,description:`<p>The step value</p>
`,line:38,type:'number | "any"',decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"slider",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLInputElement>",optional:!1,description:"",line:54,decorators:[{name:"ViewChild",stringifiedArguments:"'slider', {static: true}"}],modifierKind:[170]},{name:"subscription",deprecated:!1,deprecationMessage:"",type:"Subscription",optional:!0,description:"",line:56,modifierKind:[123]},{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:65,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:74,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"updateSliderColor",args:[],optional:!1,returnType:"void",typeParameters:[],line:87,deprecated:!1,deprecationMessage:"",rawdescription:`

Update the percentage of slider color
`,description:`<p>Update the percentage of slider color</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:2190,end:2197,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}]},{name:"writeValue",args:[{name:"value",type:"number | null | undefined",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:78,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"value",type:"number | null | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'it-range',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItRangeComponent extends ItAbstractFormComponent<number | null | undefined> implements OnInit, OnChanges, OnDestroy {
  /**
   * The max value
   */
  @Input() max?: number;

  /**
   * The min value
   */
  @Input() min?: number;

  /**
   * The step value
   */
  @Input() step?: number | 'any';

  /**
   * The color on left of thumb [Require rightColor]
   * @example '#0d6efd' or 'var(--bs-primary)'
   * @default undefined ('var(--bs-gray-300)')
   */
  @Input() leftColor?: string;

  /**
   * The color on right of thumb [Require leftColor]
   * @example '#0d6efd' or 'var(--bs-primary)'
   * @default undefined ('var(--bs-gray-300)')
   */
  @Input() rightColor?: string;

  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLInputElement>;

  private subscription?: Subscription;

  override ngOnInit() {
    super.ngOnInit();
    this.subscription = this.control.valueChanges
      .pipe(distinctUntilChanged(), startWith(undefined))
      .subscribe(() => this.updateSliderColor());
  }

  override ngOnChanges(changes: SimpleChanges) {
    if (changes['leftColor']) {
      this.slider.nativeElement.style.setProperty('--range-left-color', this.leftColor ?? null);
    }
    if (changes['rightColor']) {
      this.slider.nativeElement.style.setProperty('--range-right-color', this.rightColor ?? null);
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  override writeValue(value: number | null | undefined) {
    super.writeValue(value);
    this.updateSliderColor();
  }

  /**
   * Update the percentage of slider color
   * @private
   */
  private updateSliderColor(): void {
    if (!this.leftColor || !this.rightColor) {
      return;
    }

    const max = Number(this.slider.nativeElement.max) || 100;
    const min = Number(this.slider.nativeElement.min) || 0;

    // Calculate visible width
    const diff = max - min;
    const val = (((this.control.value ?? diff / 2) - min) * 100) / diff;
    this.slider.nativeElement.style.setProperty('--range-percentage', \`\${val}%\`);
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.form-range.double-color {
  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right, var(--range-left-color) var(--range-percentage), var(--range-right-color) var(--range-percentage));
  }

  &::-moz-range-track {
    background: linear-gradient(to right, var(--range-left-color) var(--range-percentage), var(--range-right-color) var(--range-percentage));
  }
}
`,styleUrl:"./range.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit","OnChanges","OnDestroy"],templateData:`<div class="d-flex justify-content-between align-items-center">
  @if (label) {
    <label [for]="id" class="form-label">{{ label }}</label>
  }
  <ng-content></ng-content>
</div>

<input
  #slider
  [id]="id"
  type="range"
  [min]="min"
  [max]="max"
  [step]="step"
  class="form-range"
  [class.double-color]="!!leftColor && !!rightColor"
  [formControl]="control" />
`},{name:"ItRatingComponent",id:"component-ItRatingComponent-fde1886b7472b65bdea2b038abdc006661ae8d2bfa5f58a1dbe2a04e38f4818a53de5bd0335d5c18cbed3d766f6776b434625d61e673c91cb7becc655065390b",file:"projects/design-angular-kit/src/lib/components/form/rating/rating.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-rating",styleUrls:[],styles:[],templateUrl:["./rating.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"starCount",defaultValue:"5",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:828,end:842,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:829,end:836,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>5</p>
`}],rawdescription:`

Number of stars to show
`,description:`<p>Number of stars to show</p>
`,line:24,type:"number",decorators:[]},{name:"value",deprecated:!1,deprecationMessage:"",rawdescription:`

The rating value
`,description:`<p>The rating value</p>
`,line:18,type:"number | undefined",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"stars",defaultValue:"this.generateStars()",deprecated:!1,deprecationMessage:"",type:"Array<number>",optional:!1,description:"",line:26,modifierKind:[124]},{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"generateStars",args:[],optional:!1,returnType:"Array<number>",typeParameters:[],line:49,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate the array of stars
`,description:`<p>Generate the array of stars</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1350,end:1357,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}]},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:28,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:36,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"},{name:"ReactiveFormsModule",type:"module"},{name:"ItIconComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ItIconComponent } from '../../utils/icon/icon.component';

@Component({
  standalone: true,
  selector: 'it-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ReactiveFormsModule, ItIconComponent],
})
export class ItRatingComponent extends ItAbstractFormComponent<number | null | undefined> implements OnInit, OnChanges {
  /**
   * The rating value
   */
  @Input() value: number | undefined;

  /**
   * Number of stars to show
   * @default 5
   */
  @Input() starCount: number = 5;

  protected stars: Array<number> = this.generateStars();

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);

    if (changes['starCount'] || !this.stars.length) {
      this.stars = this.generateStars();
    }
  }

  override ngOnInit() {
    super.ngOnInit();

    if (!this.control.value && !!this.value) {
      this.writeValue(this.value);
      this.onChange(this.value);
    }
  }

  /**
   * Generate the array of stars
   * @private
   */
  private generateStars(): Array<number> {
    return Array.from({ length: this.starCount }, (_, i) => i + 1).reverse();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit","OnChanges"],templateData:`<fieldset class="rating" [class.rating-label]="!!label" [class.rating-read-only]="control.disabled">
  <legend>
    <span>{{ label }}</span>
    <span class="visually-hidden">
      {{ 'it.core.rating-star' | translate: { current: control.value || 0, total: stars.length } }}
    </span>
  </legend>

  @for (starValue of stars; track starValue) {
    <input
      [id]="id + '-' + starValue"
      type="radio"
      [name]="id"
      [value]="starValue"
      [attr.aria-hidden]="control.disabled"
      [formControl]="control" />
    <label class="full" [for]="id + '-' + starValue">
      <it-icon name="star-full" size="sm"></it-icon>
      <span class="visually-hidden">
        {{ 'it.core.rate-star' | translate: { current: starValue, total: stars.length } }}
      </span>
    </label>
  }
</fieldset>
`},{name:"ItSelectComponent",id:"component-ItSelectComponent-1e929d9aea6e80acbe71310d825f8062dcc20545d4aa9c49af9fed70a4cd7bbae9e8994ab893fcf563c6284bce1d4b1a8c8ba6452eae973f555d128f4332e600",file:"projects/design-angular-kit/src/lib/components/form/select/select.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-select",styleUrls:["./select.component.scss"],styles:[],templateUrl:["./select.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"defaultOption",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:987,end:1018,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:988,end:995,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>&#39;Select an option&#39;</p>
`}],rawdescription:"\n\nIf set, add a `disabled selected` option with value `null` and as text the value of the attribute\n```html\n```",description:`<p>If set, add a <code>disabled selected</code> option with value <code>null</code> and as text the value of the attribute</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:34,type:"string",decorators:[]},{name:"description",deprecated:!1,deprecationMessage:"",rawdescription:`

The select description
`,description:`<p>The select description</p>
`,line:28,type:"string",decorators:[]},{name:"groups",deprecated:!1,deprecationMessage:"",rawdescription:`

The select group options
`,description:`<p>The select group options</p>
`,line:23,type:"Array<SelectControlGroup> | undefined",decorators:[]},{name:"options",deprecated:!1,deprecationMessage:"",rawdescription:`

The select options
`,description:`<p>The select options</p>
`,line:18,type:"Array<SelectControlOption> | undefined",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:36,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractFormComponent"}},{name:"optionIsDisabled",args:[{name:"option",type:"SelectControlOption",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:80,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the option is disabled
`,description:`<p>Check if the option is disabled</p>
`,jsdoctags:[{name:{pos:2198,end:2204,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"option"},type:"SelectControlOption",deprecated:!1,deprecationMessage:"",tagName:{pos:2192,end:2197,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the option</p>
`}]},{name:"optionIsSelected",args:[{name:"option",type:"SelectControlOption",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"boolean",typeParameters:[],line:64,deprecated:!1,deprecationMessage:"",rawdescription:`

Check if the option is selected
`,description:`<p>Check if the option is selected</p>
`,jsdoctags:[{name:{pos:1869,end:1875,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"option"},type:"SelectControlOption",deprecated:!1,deprecationMessage:"",tagName:{pos:1863,end:1868,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the option</p>
`}]},{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"},{name:"AsyncPipe",type:"pipe"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, Input, OnInit } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { SelectControlGroup, SelectControlOption } from '../../../interfaces/form';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'it-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItSelectComponent extends ItAbstractFormComponent implements OnInit {
  /**
   * The select options
   */
  @Input() options: Array<SelectControlOption> | undefined;

  /**
   * The select group options
   */
  @Input() groups: Array<SelectControlGroup> | undefined;

  /**
   * The select description
   */
  @Input() description?: string;

  /**
   * If set, add a \`disabled selected\` option with value \`null\` and as text the value of the attribute
   * @example 'Select an option'
   */
  @Input() defaultOption?: string;

  override ngOnInit() {
    super.ngOnInit();

    if (this.control.value) {
      return;
    }
    const selectedOption = this.options?.find(this.optionIsSelected);
    if (selectedOption) {
      this.writeValue(selectedOption.value);
      if (this._ngControl?.control && selectedOption.value !== this._ngControl.control.value) {
        this.onChange(selectedOption.value);
      }
      return;
    }

    const selectedGroupOption = this.groups?.flatMap(g => g.options).find(this.optionIsSelected);
    if (selectedGroupOption) {
      this.writeValue(selectedGroupOption.value);
      if (this._ngControl?.control && selectedGroupOption.value !== this._ngControl.control.value) {
        this.onChange(selectedGroupOption.value);
      }
    }
  }

  /**
   * Check if the option is selected
   * @param option the option
   */
  optionIsSelected(option: SelectControlOption): boolean {
    if (option.selected === true) {
      return true;
    }

    if (typeof option.selected === 'function') {
      return option.selected(this.control.value);
    }

    return false;
  }

  /**
   * Check if the option is disabled
   * @param option the option
   */
  optionIsDisabled(option: SelectControlOption): boolean {
    if (option.disabled === true) {
      return true;
    }

    if (typeof option.disabled === 'function') {
      return option.disabled(this.control.value);
    }

    return false;
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.select-wrapper {
  margin-bottom: 1.7rem;
}
`,styleUrl:"./select.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],implements:["OnInit"],templateData:`<div class="select-wrapper">
  @if (label) {
    <label [for]="id">{{ label }}</label>
  }
  <select
    [id]="id"
    [formControl]="control"
    [class.is-invalid]="isInvalid"
    [class.is-valid]="isValid"
    (blur)="markAsTouched()"
    [attr.aria-describedby]="id + '-description'">
    @if (defaultOption) {
      <option [ngValue]="null" disabled selected>
        {{ defaultOption }}
      </option>
    }

    <ng-content></ng-content>

    @if (options) {
      @for (option of options; track option.value) {
        <option [disabled]="optionIsDisabled(option)" [ngValue]="option.value">
          {{ option.text ?? option.value }}
        </option>
      }
    }

    @if (groups) {
      @for (group of groups; track group) {
        <optgroup [label]="group.label">
          @for (option of group.options; track option.value) {
            <option [disabled]="optionIsDisabled(option)" [ngValue]="option.value">
              {{ option.text ?? option.value }}
            </option>
          }
        </optgroup>
      }
    }
  </select>
  @if (description) {
    <small [id]="id + '-description'" class="form-text">{{ description }}</small>
  }

  @if (isInvalid) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <div #customError>
        <ng-content select="[error]"></ng-content>
      </div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }
</div>
`},{name:"ItSidebarComponent",id:"component-ItSidebarComponent-05cd5b102d728c384e00b023ddf0a8c95d61c897bbdad29ea5643861588dbf00b3c495de50f97fbc4968bbc1dc350b60ddccfddd9f895d9b0a19a2b89a5892a3",file:"projects/design-angular-kit/src/lib/components/navigation/sidebar/sidebar.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-sidebar",styleUrls:[],styles:[],templateUrl:["./sidebar.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"dark",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Per cambiare il tema della sidebar e renderla scura
`,description:`<p>Per cambiare il tema della sidebar e renderla scura</p>
`,line:31,type:"boolean",decorators:[]},{name:"header",deprecated:!1,deprecationMessage:"",rawdescription:`

L'intestazione della sidebar
`,description:`<p>L&#39;intestazione della sidebar</p>
`,line:36,type:"string",decorators:[]},{required:!1,name:"withLeftLine",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Per creare una sidebar con linea separatrice a sinistra \xE8 sufficiente aggiungere la classe
`,description:`<p>Per creare una sidebar con linea separatrice a sinistra \xE8 sufficiente aggiungere la classe</p>
`,line:24,type:"boolean",decorators:[]},{required:!1,name:"withRightLine",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`

Per creare una sidebar con linea separatrice a destra \xE8 sufficiente aggiungere la classe
`,description:`<p>Per creare una sidebar con linea separatrice a destra \xE8 sufficiente aggiungere la classe</p>
`,line:17,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[{name:"componentClass",defaultValue:"'d-block sidebar-wrapper'",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:38,decorators:[{name:"HostBinding",stringifiedArguments:"'class'"}],modifierKind:[170]}],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"class",defaultValue:"'d-block sidebar-wrapper'",deprecated:!1,deprecationMessage:"",line:38,type:"string",decorators:[]}],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSidebarComponent {
  /**
   * Per creare una sidebar con linea separatrice a destra \xE8 sufficiente aggiungere la classe
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.it-line-right-side')
  public withRightLine = false;

  /**
   * Per creare una sidebar con linea separatrice a sinistra \xE8 sufficiente aggiungere la classe
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.it-line-left-side')
  public withLeftLine = false;

  /**
   * Per cambiare il tema della sidebar e renderla scura
   */
  @Input({ transform: inputToBoolean })
  @HostBinding('class.theme-dark')
  public dark = false;

  /**
   * L'intestazione della sidebar
   */
  @Input() public header?: string;

  @HostBinding('class') componentClass = 'd-block sidebar-wrapper';
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`@if (header) {
  <h3>{{ header }}</h3>
}
<div class="sidebar-linklist-wrapper">
  <!--TODO: wrap ng-content with it-list -> inside content use a list of it-list-item directives-->
  <ng-content></ng-content>
</div>
<div class="sidebar-linklist-wrapper linklist-secondary">
  <!--TODO: wrap ng-content with it-list -> inside content use a list of it-list-item directives-->
  <ng-content select="[secondary]"></ng-content>
</div>
`},{name:"ItSortHeaderComponent",id:"component-ItSortHeaderComponent-93954caba2d2286273b6b4606dbd318952281bd74f79ad98b206e67c4fe6967e6e5d67ba539c6de5f5d2453f8ee9f196bcc79ba6f39ba69ffbd77eee9e152fd1",file:"projects/design-angular-kit/src/lib/components/core/table/sort/sort-header/sort-header.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:["ViewEncapsulation.None"],entryComponents:[],exportAs:"itSortHeader",inputs:[],outputs:[],providers:[],selector:"[it-sort-header]",styleUrls:["./sort-header.component.scss"],styles:[],templateUrl:["./sort-header.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"arrowPosition",defaultValue:"'after'",deprecated:!1,deprecationMessage:"",rawdescription:`
Sets the position of the arrow that displays when sorted.`,description:`<p>Sets the position of the arrow that displays when sorted.</p>
`,line:55,type:"SortHeaderArrowPosition",decorators:[]},{required:!1,name:"disableSortClear",deprecated:!1,deprecationMessage:"",rawdescription:`
Overrides the disable clear value of the containing SortDirective for this MatSortable.`,description:`<p>Overrides the disable clear value of the containing SortDirective for this MatSortable.</p>
`,line:66,type:"boolean",decorators:[]},{name:"it-sort-header",deprecated:!1,deprecationMessage:"",rawdescription:`

ID of this sort header. If used within the context of a CdkColumnDef, this will default to
the column's name.
`,description:`<p>ID of this sort header. If used within the context of a CdkColumnDef, this will default to
the column&#39;s name.</p>
`,line:52,type:"string",decorators:[]},{required:!1,name:"sortDisabled",defaultValue:"false",deprecated:!1,deprecationMessage:"",rawdescription:`
whether the sort header is disabled.`,description:`<p>whether the sort header is disabled.</p>
`,line:62,type:"boolean",decorators:[]},{name:"start",deprecated:!1,deprecationMessage:"",rawdescription:`
Overrides the sort start value of the containing MatSort for this SortHeaderComponent.`,description:`<p>Overrides the sort start value of the containing MatSort for this SortHeaderComponent.</p>
`,line:58,type:"SortDirection",decorators:[]}],outputsClass:[],propertiesClass:[{name:"_arrowDirection",deprecated:!1,deprecationMessage:"",type:"SortDirection",optional:!0,description:`<p>The direction the arrow should be facing according to the current state.</p>
`,line:74,rawdescription:`
The direction the arrow should be facing according to the current state.`,modifierKind:[123]},{name:"_rerenderSubscription",deprecated:!1,deprecationMessage:"",type:"Subscription",optional:!0,description:"",line:71,modifierKind:[123]},{name:"_sort",deprecated:!1,deprecationMessage:"",type:"ItSortDirective",optional:!1,description:"",line:79,decorators:[{name:"Optional",stringifiedArguments:""}],modifierKind:[170,125,148]},{name:"sortHeaderClass",defaultValue:"'it-sort-header'",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:"",line:69,decorators:[{name:"HostBinding",stringifiedArguments:"'class'"}],modifierKind:[170,125,148]}],methodsClass:[{name:"_handleClick",args:[],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'click'"}],modifierKind:[170]},{name:"_handleStateChanges",args:[],optional:!1,returnType:"void",typeParameters:[],line:156,deprecated:!1,deprecationMessage:"",rawdescription:`
Handles changes in the sorting state.`,description:`<p>Handles changes in the sorting state.</p>
`,modifierKind:[123]},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:95,deprecated:!1,deprecationMessage:""},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:89,deprecated:!1,deprecationMessage:""},{name:"updateArrowDirection",args:[],optional:!1,returnType:"void",typeParameters:[],line:131,deprecated:!1,deprecationMessage:"",rawdescription:`

Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
active sorted direction. The reason this is updated through a function is because the direction
should only be changed at specific times - when deactivated but the hint is displayed and when
the sort is active and the direction changes. Otherwise the arrow's direction should linger
in cases such as the sort becoming deactivated but we want to animate the arrow away while
preserving its direction, even though the next sort direction is actually different and should
only be changed once the arrow displays again (hint or activation).
`,description:`<p>Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
active sorted direction. The reason this is updated through a function is because the direction
should only be changed at specific times - when deactivated but the hint is displayed and when
the sort is active and the direction changes. Otherwise the arrow&#39;s direction should linger
in cases such as the sort becoming deactivated but we want to animate the arrow away while
preserving its direction, even though the next sort direction is actually different and should
only be changed once the arrow displays again (hint or activation).</p>
`,modifierKind:[123]}],deprecated:!1,deprecationMessage:"",hostBindings:[{name:"attr.aria-sort",deprecated:!1,deprecationMessage:"",rawdescription:`

Gets the aria-sort attribute that should be applied to this sort header. If this header
is not sorted, returns null so that the attribute is removed from the host element. Aria spec
says that the aria-sort property should only be present on one header at a time, so removing
ensures this is true.
`,description:`<p>Gets the aria-sort attribute that should be applied to this sort header. If this header
is not sorted, returns null so that the attribute is removed from the host element. Aria spec
says that the aria-sort property should only be present on one header at a time, so removing
ensures this is true.</p>
`,line:147,type:'"none" | "ascending" | "descending"',decorators:[]},{name:"class",defaultValue:"'it-sort-header'",deprecated:!1,deprecationMessage:"",line:69,type:'"it-sort-header"',decorators:[]},{name:"class.it-sort-header-disabled",deprecated:!1,deprecationMessage:"",line:136,type:"any",decorators:[]}],hostListeners:[{name:"click",args:[],argsDecorator:[],deprecated:!1,deprecationMessage:"",line:101}],standalone:!0,imports:[{name:"ItIconComponent",type:"component"}],description:`<p>Applies sorting behavior (click to change sort) and styles to an element, including an
arrow to display the current sort direction.</p>
<p>Must be provided with an id and contained within a parent ItSort directive.</p>
<p>If used on header cells in a CdkTable, it will automatically default its id from its containing
column definition.</p>
`,rawdescription:`

Applies sorting behavior (click to change sort) and styles to an element, including an
arrow to display the current sort direction.

Must be provided with an id and contained within a parent ItSort directive.

If used on header cells in a CdkTable, it will automatically default its id from its containing
column definition.
`,type:"component",sourceCode:`import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ItSortDirective } from '../sort.directive';
import { merge, Subscription } from 'rxjs';
import { ItIconComponent } from '../../../../utils/icon/icon.component';
import { IconName } from '../../../../../interfaces/icon';
import {
  IT_SORT_DEFAULT_OPTIONS,
  ItSortable,
  ItSortDefaultOptions,
  SortDirection,
  SortHeaderArrowPosition,
} from '../../../../../interfaces/sortable-table';

/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent ItSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[it-sort-header]',
  exportAs: 'itSortHeader',
  standalone: true,
  imports: [ItIconComponent],
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItSortHeaderComponent implements ItSortable, OnDestroy, OnInit {
  /**
   * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
   * the column's name.
   */
  @Input('it-sort-header') id!: string;

  /** Sets the position of the arrow that displays when sorted. */
  @Input() arrowPosition: SortHeaderArrowPosition = 'after';

  /** Overrides the sort start value of the containing MatSort for this SortHeaderComponent. */
  @Input() start?: SortDirection;

  /** whether the sort header is disabled. */
  @Input({ transform: booleanAttribute })
  sortDisabled: boolean = false;

  /** Overrides the disable clear value of the containing SortDirective for this MatSortable. */
  @Input({ transform: booleanAttribute })
  disableSortClear?: boolean;

  @HostBinding('class')
  public readonly sortHeaderClass = 'it-sort-header';

  private _rerenderSubscription?: Subscription;

  /** The direction the arrow should be facing according to the current state. */
  private _arrowDirection?: SortDirection;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    // \`SortDirective\` is not optionally injected, but just asserted manually w/ better error.
    @Optional() public readonly _sort: ItSortDirective,
    @Optional() @Inject(IT_SORT_DEFAULT_OPTIONS) defaultOptions?: ItSortDefaultOptions
  ) {
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }

    this._handleStateChanges();
  }

  ngOnInit() {
    // Initialize the direction of the arrow and set the view state to be immediately that state.
    this.updateArrowDirection();
    this._sort.register(this);
  }

  ngOnDestroy() {
    this._sort.deregister(this);
    this._rerenderSubscription?.unsubscribe();
  }

  @HostListener('click')
  _handleClick() {
    if (!this.isDisabled) {
      this._sort.sort(this);
    }
  }

  /**
   * Whether this MatSortHeader is currently sorted in either ascending or descending order.
   */
  protected get isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }

  /**
   * Returns the icon class by the arrow direction
   */
  protected get arrowIconClass(): IconName {
    return \`\${this._arrowDirection == 'asc' ? 'arrow-up' : 'arrow-down'}\`;
  }

  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  private updateArrowDirection() {
    this._arrowDirection = this.isSorted ? this._sort.direction : this.start || this._sort.start;
  }

  @HostBinding('class.it-sort-header-disabled')
  public get isDisabled() {
    return this._sort.sortDisabled || this.sortDisabled;
  }

  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  @HostBinding('attr.aria-sort')
  public get ariaSortAttribute() {
    if (!this.isSorted) {
      return 'none';
    }

    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }

  /** Handles changes in the sorting state. */
  private _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges).subscribe(() => {
      if (this.isSorted) {
        this.updateArrowDirection();
      }
      this._changeDetectorRef.markForCheck();
    });
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`.it-sort-header-container {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  letter-spacing: normal;

  // Needs to be reset since we don't want an outline around the inner
  // div which is focusable. We have our own alternate focus styling.
  outline: 0;

  .it-sort-header-disabled & {
    cursor: default;

    .it-sort-arrow {
      opacity: 0 !important;
      fill-opacity: 0 !important;
    }
  }

  // For the sort-header element, default inset/offset values are necessary to ensure that
  // the focus indicator is sufficiently contrastive and renders appropriately.
  &::before {
    $border-width: 3px;
    $offset: calc(#{$border-width} + 2px);
    margin: calc(#{$offset} * -1);
  }

  &.it-sort-header-position-before {
    flex-direction: row-reverse;
    justify-content: left;
    gap: 0.5rem;
  }

  .it-sort-arrow {
    opacity: 0;
    fill-opacity: 0;
    transition:
      fill-opacity 0.3s ease-out,
      opacity 0.3s ease-out;
    -moz-transition:
      fill-opacity 0.3s ease-out,
      opacity 0.3s ease-out;
    -webkit-transition:
      fill-opacity 0.3s ease-out,
      opacity 0.3s ease-out;
    -o-transition:
      fill-opacity 0.3s ease-out,
      opacity 0.3s ease-out;
  }

  &:hover {
    .it-sort-arrow {
      opacity: 0.5;
      fill-opacity: 0.5;
    }
  }

  &.it-sort-header-sorted {
    .it-sort-arrow {
      opacity: 1 !important;
      fill-opacity: 1 !important;
    }
  }
}
`,styleUrl:"./sort-header.component.scss"}],stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""},{name:"_sort",type:"ItSortDirective",deprecated:!1,deprecationMessage:""},{name:"defaultOptions",type:"ItSortDefaultOptions",deprecated:!1,deprecationMessage:"",optional:!0}],line:74,jsdoctags:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"_sort",type:"ItSortDirective",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"defaultOptions",type:"ItSortDefaultOptions",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]},extends:[],implements:["ItSortable","OnDestroy","OnInit"],accessors:{isSorted:{name:"isSorted",getSignature:{name:"isSorted",type:"",returnType:"",line:110,rawdescription:`

Whether this MatSortHeader is currently sorted in either ascending or descending order.
`,description:`<p>Whether this MatSortHeader is currently sorted in either ascending or descending order.</p>
`}},arrowIconClass:{name:"arrowIconClass",getSignature:{name:"arrowIconClass",type:"",returnType:"IconName",line:117,rawdescription:`

Returns the icon class by the arrow direction
`,description:`<p>Returns the icon class by the arrow direction</p>
`}},isDisabled:{name:"isDisabled",getSignature:{name:"isDisabled",type:"",returnType:"",line:136}},ariaSortAttribute:{name:"ariaSortAttribute",getSignature:{name:"ariaSortAttribute",type:"",returnType:"",line:147,rawdescription:`

Gets the aria-sort attribute that should be applied to this sort header. If this header
is not sorted, returns null so that the attribute is removed from the host element. Aria spec
says that the aria-sort property should only be present on one header at a time, so removing
ensures this is true.
`,description:`<p>Gets the aria-sort attribute that should be applied to this sort header. If this header
is not sorted, returns null so that the attribute is removed from the host element. Aria spec
says that the aria-sort property should only be present on one header at a time, so removing
ensures this is true.</p>
`}}},templateData:`<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div
  class="it-sort-header-container it-focus-indicator"
  [class.it-sort-header-sorted]="isSorted"
  [class.it-sort-header-position-before]="arrowPosition === 'before'"
  [attr.tabindex]="isDisabled ? null : 0"
  [attr.role]="isDisabled ? null : 'button'">
  <!--
    We have to keep it due to a large number of screenshot diff failures. It should be removed eventually.
    Note that the difference isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="it-sort-header-content">
    <ng-content></ng-content>
  </div>

  <it-icon class="it-sort-arrow" size="sm" [name]="arrowIconClass" />
</div>
`},{name:"ItSpinnerComponent",id:"component-ItSpinnerComponent-0b4dca4f90a55b2d09ce76258db07f0d9be7dae29cc4b9833c087b0e50268a8cccf2d0fb569f5ffafe141480cfca022c2e8c90b6807f934531ae9dc775f1d551",file:"projects/design-angular-kit/src/lib/components/core/spinner/spinner.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-spinner",styleUrls:[],styles:[],templateUrl:["./spinner.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"active",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:448,end:465,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:449,end:456,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

The spinner is active
`,description:`<p>The spinner is active</p>
`,line:18,type:"boolean",decorators:[]},{required:!1,name:"double",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:691,end:709,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:692,end:699,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show the double animation
`,description:`<p>Show the double animation</p>
`,line:30,type:"boolean",decorators:[]},{required:!1,name:"small",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:570,end:588,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:571,end:578,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show a small spinner
`,description:`<p>Show a small spinner</p>
`,line:24,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"TranslateModule",type:"module"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class ItSpinnerComponent {
  /**
   * The spinner is active
   * @default true
   */
  @Input({ transform: inputToBoolean }) active: boolean = true;

  /**
   * Show a small spinner
   * @default false
   */
  @Input({ transform: inputToBoolean }) small?: boolean;

  /**
   * Show the double animation
   * @default false
   */
  @Input({ transform: inputToBoolean }) double?: boolean;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:[],templateData:`<div class="progress-spinner" [class.progress-spinner-double]="double" [class.progress-spinner-active]="active" [class.size-sm]="small">
  @if (double) {
    <div class="progress-spinner-inner"></div>
    <div class="progress-spinner-inner"></div>
  }
  <span class="visually-hidden">{{ 'it.core.loading' | translate }}...</span>
</div>
`},{name:"ItSteppersContainerComponent",id:"component-ItSteppersContainerComponent-cf46ce2abb20c26c017fea8fa0e9fee69b2955c05f9ff298d6486f2b16a4d97a8107f9f2e36f41450f52216d9ce5b54067d6864d27443908e2a996f42b022add",file:"projects/design-angular-kit/src/lib/components/core/steppers/steppers-container/steppers-container.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-steppers-container",styleUrls:[],styles:[],templateUrl:["./steppers-container.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!0,name:"activeStep",deprecated:!1,deprecationMessage:"",optional:!1,jsdoctags:[{pos:1301,end:1332,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:348,tagName:{pos:1302,end:1307,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the step index</p>
`,name:{pos:1308,end:1313,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"index"},isNameFirst:!0,isBracketed:!1}],rawdescription:`

The active step index
`,description:`<p>The active step index</p>
`,line:36,type:"number",decorators:[]},{required:!1,name:"confirmLoading",deprecated:!1,deprecationMessage:"",rawdescription:`

Show the confirm button as indeterminate progress button
`,description:`<p>Show the confirm button as indeterminate progress button</p>
`,line:108,type:"boolean",decorators:[]},{required:!1,name:"dark",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1542,end:1560,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1543,end:1550,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Dark style
`,description:`<p>Dark style</p>
`,line:48,type:"boolean",decorators:[]},{required:!1,name:"disableBackButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2365,end:2383,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2366,end:2373,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Disable the back button
`,description:`<p>Disable the back button</p>
`,line:79,type:"boolean",decorators:[]},{required:!1,name:"disableConfirmButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2903,end:2921,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2904,end:2911,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Disable the confirm button
`,description:`<p>Disable the confirm button</p>
`,line:103,type:"boolean",decorators:[]},{required:!1,name:"disableForwardButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2635,end:2653,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2636,end:2643,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Disable the forward button
`,description:`<p>Disable the forward button</p>
`,line:91,type:"boolean",decorators:[]},{required:!1,name:"disableSaveButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:3303,end:3321,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3304,end:3311,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Disable the save button
`,description:`<p>Disable the save button</p>
`,line:120,type:"boolean",decorators:[]},{name:"progressColor",deprecated:!1,deprecationMessage:"",rawdescription:`

Customize progress color
`,description:`<p>Customize progress color</p>
`,line:67,type:"ProgressBarColor | undefined",decorators:[]},{name:"progressStyle",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1989,end:2033,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1990,end:1997,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined - don&#39;t show progress</p>
`}],rawdescription:`

The progress style
-<b>progress</b>: Show progress bar - You can change the color with the \`progressColor\` attribute
-<b>dots</b>: Show progress dots
`,description:`<p>The progress style
-<b>progress</b>: Show progress bar - You can change the color with the <code>progressColor</code> attribute
-<b>dots</b>: Show progress dots</p>
`,line:62,type:'"progress" | "dots" | undefined',decorators:[]},{required:!1,name:"saveLoading",deprecated:!1,deprecationMessage:"",rawdescription:`

Show the save button as indeterminate progress button
`,description:`<p>Show the save button as indeterminate progress button</p>
`,line:125,type:"boolean",decorators:[]},{required:!1,name:"showBackButton",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2232,end:2249,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2233,end:2240,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show the back button
`,description:`<p>Show the back button</p>
`,line:73,type:"boolean",decorators:[]},{required:!1,name:"showConfirmButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2769,end:2787,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2770,end:2777,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show the confirm button
`,description:`<p>Show the confirm button</p>
`,line:97,type:"boolean",decorators:[]},{required:!1,name:"showForwardButton",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2496,end:2513,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2497,end:2504,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show the forward button
`,description:`<p>Show the forward button</p>
`,line:85,type:"boolean",decorators:[]},{required:!1,name:"showHeader",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1426,end:1443,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1427,end:1434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

Show the stepper header
`,description:`<p>Show the stepper header</p>
`,line:42,type:"boolean",decorators:[]},{required:!1,name:"showSaveButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:3175,end:3193,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3176,end:3183,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Show the save button
`,description:`<p>Show the save button</p>
`,line:114,type:"boolean",decorators:[]},{required:!1,name:"steppersNumber",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1726,end:1743,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1727,end:1733,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"efualt"},comment:`<p>false</p>
`}],rawdescription:`

The labels present in the header steps can be anticipated by the relative ordinal number.
`,description:`<p>The labels present in the header steps can be anticipated by the relative ordinal number.</p>
`,line:54,type:"boolean",decorators:[]}],outputsClass:[{name:"backClick",deprecated:!1,deprecationMessage:"",rawdescription:`

On back button click
`,description:`<p>On back button click</p>
`,jsdoctags:[{pos:3690,end:3734,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3691,end:3696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},comment:`<p>activeStep the current step index</p>
`}],line:136,type:"EventEmitter<number>"},{name:"confirmClick",deprecated:!1,deprecationMessage:"",rawdescription:`

On confirm button click
`,description:`<p>On confirm button click</p>
`,jsdoctags:[{pos:3959,end:4003,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3960,end:3965,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},comment:`<p>activeStep the current step index</p>
`}],line:148,type:"EventEmitter<number>"},{name:"forwardClick",deprecated:!1,deprecationMessage:"",rawdescription:`

On forward button click
`,description:`<p>On forward button click</p>
`,jsdoctags:[{pos:3823,end:3867,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:3824,end:3829,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},comment:`<p>activeStep the current step index</p>
`}],line:142,type:"EventEmitter<number>"},{name:"saveClick",deprecated:!1,deprecationMessage:"",rawdescription:`

On save button click
`,description:`<p>On save button click</p>
`,jsdoctags:[{pos:4092,end:4136,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:4093,end:4098,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},comment:`<p>activeStep the current step index</p>
`}],line:154,type:"EventEmitter<number>"}],propertiesClass:[{name:"steps",deprecated:!1,deprecationMessage:"",type:"QueryList<ItSteppersItemComponent>",optional:!0,description:`<p>The stepper items</p>
`,line:130,rawdescription:`

The stepper items
`,decorators:[{name:"ContentChildren",stringifiedArguments:"ItSteppersItemComponent"}],modifierKind:[170]},{name:"stepsSubscriptions",deprecated:!1,deprecationMessage:"",type:"Array<Subscription>",optional:!0,description:"",line:156,modifierKind:[123]}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:165,deprecated:!1,deprecationMessage:""},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:182,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"NgTemplateOutlet"},{name:"TranslateModule",type:"module"},{name:"ItButtonDirective",type:"directive"},{name:"ItProgressBarComponent",type:"component"},{name:"ItProgressButtonComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { ItSteppersItemComponent } from '../steppers-item/steppers-item.component';
import { ProgressBarColor } from '../../../../interfaces/core';
import { startWith, Subscription } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItButtonDirective } from '../../button/button.directive';
import { ItProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from '../../progress-button/progress-button.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-steppers-container',
  templateUrl: './steppers-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet, TranslateModule, ItButtonDirective, ItProgressBarComponent, ItProgressButtonComponent],
})
export class ItSteppersContainerComponent implements AfterViewInit, OnDestroy {
  /**
   * The active step index
   * @param index the step index
   */
  @Input({ required: true }) activeStep!: number;

  /**
   * Show the stepper header
   * @default true
   */
  @Input({ transform: inputToBoolean }) showHeader: boolean = true;

  /**
   * Dark style
   * @default false
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The labels present in the header steps can be anticipated by the relative ordinal number.
   * @efualt false
   */
  @Input({ transform: inputToBoolean }) steppersNumber?: boolean;

  /**
   * The progress style
   * -<b>progress</b>: Show progress bar - You can change the color with the \`progressColor\` attribute
   * -<b>dots</b>: Show progress dots
   * @default undefined - don't show progress
   */
  @Input() progressStyle: 'progress' | 'dots' | undefined;

  /**
   * Customize progress color
   */
  @Input() progressColor: ProgressBarColor | undefined;

  /**
   * Show the back button
   * @default true
   */
  @Input({ transform: inputToBoolean }) showBackButton: boolean = true;

  /**
   * Disable the back button
   * @default false
   */
  @Input({ transform: inputToBoolean }) disableBackButton?: boolean;

  /**
   * Show the forward button
   * @default true
   */
  @Input({ transform: inputToBoolean }) showForwardButton: boolean = true;

  /**
   * Disable the forward button
   * @default false
   */
  @Input({ transform: inputToBoolean }) disableForwardButton?: boolean;

  /**
   * Show the confirm button
   * @default false
   */
  @Input({ transform: inputToBoolean }) showConfirmButton?: boolean;

  /**
   * Disable the confirm button
   * @default false
   */
  @Input({ transform: inputToBoolean }) disableConfirmButton?: boolean;

  /**
   * Show the confirm button as indeterminate progress button
   */
  @Input({ transform: inputToBoolean }) confirmLoading?: boolean;

  /**
   * Show the save button
   * @default false
   */
  @Input({ transform: inputToBoolean }) showSaveButton?: boolean;

  /**
   * Disable the save button
   * @default false
   */
  @Input({ transform: inputToBoolean }) disableSaveButton?: boolean;

  /**
   * Show the save button as indeterminate progress button
   */
  @Input({ transform: inputToBoolean }) saveLoading?: boolean;

  /**
   * The stepper items
   */
  @ContentChildren(ItSteppersItemComponent) steps?: QueryList<ItSteppersItemComponent>;

  /**
   * On back button click
   * @event activeStep the current step index
   */
  @Output() backClick: EventEmitter<number>;

  /**
   * On forward button click
   * @event activeStep the current step index
   */
  @Output() forwardClick: EventEmitter<number>;

  /**
   * On confirm button click
   * @event activeStep the current step index
   */
  @Output() confirmClick: EventEmitter<number>;

  /**
   * On save button click
   * @event activeStep the current step index
   */
  @Output() saveClick: EventEmitter<number>;

  private stepsSubscriptions?: Array<Subscription>;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {
    this.backClick = new EventEmitter<number>();
    this.forwardClick = new EventEmitter<number>();
    this.confirmClick = new EventEmitter<number>();
    this.saveClick = new EventEmitter<number>();
  }

  ngAfterViewInit(): void {
    this.steps?.changes
      .pipe(
        // When steps changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.stepsSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.stepsSubscriptions = this.steps?.map(step =>
          step.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when step attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
  }

  ngOnDestroy(): void {
    this.stepsSubscriptions?.forEach(step => step.unsubscribe());
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:""}],line:156,jsdoctags:[{name:"_changeDetectorRef",type:"ChangeDetectorRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},extends:[],implements:["AfterViewInit","OnDestroy"],templateData:`<div class="steppers" [class.bg-dark]="dark">
  @if (showHeader) {
    <div class="steppers-header">
      @if (steps) {
        <ul>
          @for (step of steps; track step.id; let i = $index) {
            <li [class.confirmed]="i < activeStep" [class.active]="i === activeStep" [class.no-line]="i === activeStep && steppersNumber">
              @if (step.icon && !steppersNumber) {
                <it-icon [labelWaria]="'it.core.confirmed' | translate" [name]="step.icon"></it-icon>
              }
              @if (steppersNumber) {
                <span class="steppers-number">
                  @if (i < activeStep) {
                    <ng-container *ngTemplateOutlet="checkIcon"></ng-container>
                  } @else {
                    <span class="visually-hidden">{{ 'it.core.step' | translate }} </span>{{ i + 1 }}
                  }
                </span>
              }
              {{ step.label }}
              @if (i < activeStep && !steppersNumber) {
                <ng-container *ngTemplateOutlet="checkIcon"></ng-container>
              }
              @if (i === activeStep) {
                <span class="visually-hidden">{{ 'it.core.active' | translate }}</span>
              }
            </li>
          }
        </ul>
      }
      @if (steps) {
        <span class="steppers-index" aria-hidden="true">
          @if (!steppersNumber) {
            {{ activeStep + 1 + '/' + steps.length }}
          } @else {
            @for (step of steps; track step.id; let i = $index) {
              <span [class.active]="i === activeStep">{{ i + 1 }}</span>
            }
          }
        </span>
      }
    </div>
  }

  @if (steps?.get(activeStep); as step) {
    <div class="steppers-content" aria-live="polite">
      <ng-container *ngTemplateOutlet="step.htmlContent"></ng-container>
    </div>
  }

  @if (showBackButton || showSaveButton || showForwardButton || showConfirmButton || !!progressStyle) {
    <nav class="steppers-nav">
      @if (showBackButton) {
        <button
          type="button"
          itButton="outline-primary"
          size="sm"
          class="steppers-btn-prev"
          [disabled]="disableBackButton"
          (click)="backClick.emit(activeStep)">
          <it-icon [labelWaria]="'it.core.back' | translate" name="chevron-left" color="primary"></it-icon>
          {{ 'it.core.back' | translate }}
        </button>
      }
      @if (!!progressStyle && steps) {
        @if (progressStyle === 'dots') {
          <ul class="steppers-dots">
            @for (step of steps; track step; let i = $index) {
              <li [class.done]="i < activeStep">
                <span class="visually-hidden">
                  {{ 'it.core.step-of' | translate: { current: activeStep + 1, available: steps?.length } }}
                  {{ i < activeStep ? '- ' + ('it.core.confirmed' | translate) : '' }}
                </span>
              </li>
            }
          </ul>
        } @else {
          <div class="steppers-progress">
            <it-progress-bar [color]="progressColor" [value]="(activeStep / (steps?.length || 1)) * 100"></it-progress-bar>
          </div>
        }
      }
      @if (showSaveButton) {
        <button
          type="button"
          itButton="primary"
          size="sm"
          class="steppers-btn-save"
          [progress]="saveLoading"
          [disabled]="saveLoading || disableSaveButton"
          (click)="saveClick.emit(activeStep)">
          {{ 'it.general.save' | translate }}
        </button>
      }
      @if (showForwardButton) {
        <button
          type="button"
          itButton="outline-primary"
          size="sm"
          class="steppers-btn-next"
          [disabled]="disableForwardButton"
          (click)="forwardClick.emit(activeStep)">
          {{ 'it.core.forward' | translate }}
          <it-icon [labelWaria]="'it.core.forward' | translate" name="chevron-right" color="primary"></it-icon>
        </button>
      }
      @if (showConfirmButton) {
        <button
          type="button"
          itButton="primary"
          size="sm"
          class="steppers-btn-confirm d-lg-block"
          [progress]="confirmLoading"
          [disabled]="confirmLoading || disableConfirmButton"
          (click)="confirmClick.emit(activeStep)">
          {{ 'it.core.confirm' | translate }}
        </button>
      }
    </nav>
  }
</div>

<ng-template #checkIcon>
  <it-icon [labelWaria]="'it.core.confirmed' | translate" name="check" class="steppers-success"></it-icon>
  <span class="visually-hidden">{{ 'it.core.confirmed' | translate }}</span>
</ng-template>
`},{name:"ItSteppersItemComponent",id:"component-ItSteppersItemComponent-4924d3622c3d23badbfe83821d3e4e1ead2049cb03682cbec1b75a653c69708612640e7d2e50fea1b96eb31e52701043740d19f450bcd64f4a9fd41ff23f5ef3",file:"projects/design-angular-kit/src/lib/components/core/steppers/steppers-item/steppers-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-steppers-item",styleUrls:[],styles:[],templateUrl:["./steppers-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"icon",deprecated:!1,deprecationMessage:"",rawdescription:`

The labels present in the header steps can be preceded by an icon.
`,description:`<p>The labels present in the header steps can be preceded by an icon.</p>
`,line:21,type:"IconName | undefined",decorators:[]},{required:!0,name:"label",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

The labels present in the header steps
`,description:`<p>The labels present in the header steps</p>
`,line:16,type:"string",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"htmlContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:`<p>The content of step</p>
`,line:27,rawdescription:`

The content of step
`,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef"}],modifierKind:[170,125]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconName } from '../../../../interfaces/icon';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';

@Component({
  standalone: true,
  selector: 'it-steppers-item',
  templateUrl: './steppers-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItSteppersItemComponent extends ItAbstractComponent {
  /**
   * The labels present in the header steps
   */
  @Input({ required: true }) label!: string;

  /**
   * The labels present in the header steps can be preceded by an icon.
   */
  @Input() icon: IconName | undefined;

  /**
   * The content of step
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],templateData:`<ng-template>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItTabContainerComponent",id:"component-ItTabContainerComponent-f1b3a33ad4b74e5397189b4d6ac5709c8fce7aebf44214b1f23aceda9985adefdcc9937cf4fabbb70793e4a638fa02c940915cfd9fedd68ab55b68f02dcc2844",file:"projects/design-angular-kit/src/lib/components/core/tab/tab-container/tab-container.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-tab-container",styleUrls:[],styles:[],templateUrl:["./tab-container.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"auto",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1029,end:1047,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1030,end:1037,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Tabs automatically occupy the entire available width
`,description:`<p>Tabs automatically occupy the entire available width</p>
`,line:34,type:"boolean",decorators:[]},{required:!1,name:"dark",deprecated:!1,deprecationMessage:"",rawdescription:`

Dark style
`,description:`<p>Dark style</p>
`,line:44,type:"boolean",decorators:[]},{required:!1,name:"iconText",deprecated:!1,deprecationMessage:"",rawdescription:`

To obtain the correct margin between text and icon in the horizontally developed tab
`,description:`<p>To obtain the correct margin between text and icon in the horizontally developed tab</p>
`,line:39,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"tabSelected",defaultValue:"new EventEmitter<ItTabItemComponent>()",deprecated:!1,deprecationMessage:"",line:53,type:"EventEmitter"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"tabNavLinks",deprecated:!1,deprecationMessage:"",type:"QueryList<ElementRef<HTMLAnchorElement>>",optional:!0,description:"",line:51,decorators:[{name:"ViewChildren",stringifiedArguments:"'tabNavLinks'"}],modifierKind:[170,123]},{name:"tabs",deprecated:!1,deprecationMessage:"",type:"QueryList<ItTabItemComponent>",optional:!0,description:`<p>The tab items</p>
`,line:49,rawdescription:`

The tab items
`,decorators:[{name:"ContentChildren",stringifiedArguments:"ItTabItemComponent"}],modifierKind:[170]},{name:"tabSubscriptions",deprecated:!1,deprecationMessage:"",type:"Array<Subscription>",optional:!0,description:"",line:55,modifierKind:[123]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:61,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnDestroy",args:[],optional:!1,returnType:"void",typeParameters:[],line:97,deprecated:!1,deprecationMessage:""},{name:"onTab",args:[{name:"tab",type:"ItTabItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"tab",type:"ItTabItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"NgTemplateOutlet"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { of, startWith, Subscription, switchMap, tap } from 'rxjs';
import { Tab } from 'bootstrap-italia';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-tab-container',
  templateUrl: './tab-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet],
})
export class ItTabContainerComponent extends ItAbstractComponent implements OnDestroy, AfterViewInit {
  /**
   * Tabs automatically occupy the entire available width
   * @default false
   */
  @Input({ transform: inputToBoolean }) auto?: boolean;

  /**
   * To obtain the correct margin between text and icon in the horizontally developed tab
   */
  @Input({ transform: inputToBoolean }) iconText?: boolean;

  /**
   * Dark style
   */
  @Input({ transform: inputToBoolean }) dark?: boolean;

  /**
   * The tab items
   */
  @ContentChildren(ItTabItemComponent) tabs?: QueryList<ItTabItemComponent>;

  @ViewChildren('tabNavLinks') private tabNavLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  @Output() tabSelected = new EventEmitter<ItTabItemComponent>();

  private tabSubscriptions?: Array<Subscription>;

  constructor() {
    super();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.tabs?.changes
      .pipe(
        // When tabs changes (dynamic add/remove)
        startWith(undefined),
        tap(() => {
          this.tabSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
          this.tabSubscriptions = this.tabs?.map(tab =>
            tab.valueChanges.subscribe(() => {
              this._changeDetectorRef.detectChanges(); // DetectChanges when tab-item attributes changes
            })
          );
          this._changeDetectorRef.detectChanges(); // Force update html render
        }),
        switchMap(() => this.tabNavLinks?.changes.pipe(startWith(undefined)) || of(undefined))
      )
      .subscribe(() => {
        // Init tabs from bootstrap-italia
        this.tabNavLinks?.forEach(tabNavLink => {
          const triggerEl = tabNavLink.nativeElement,
            tabTrigger = Tab.getOrCreateInstance(triggerEl);

          if (triggerEl.getAttribute('tab-listener') !== 'true') {
            triggerEl.addEventListener('click', event => {
              event.preventDefault();
              tabTrigger.show();
              this._changeDetectorRef.detectChanges();
            });
            triggerEl.setAttribute('tab-listener', 'true'); // Prevents multiple insertion of the listener
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.tabSubscriptions?.forEach(sub => sub.unsubscribe());
  }

  onTab(tab: ItTabItemComponent) {
    this.tabSelected.emit(tab);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:55},extends:["ItAbstractComponent"],implements:["OnDestroy","AfterViewInit"],templateData:`@if (tabs) {
  <ul class="nav nav-tabs" [class.auto]="auto" [class.nav-tabs-icon-text]="iconText" [class.nav-dark]="dark" role="tablist">
    @for (tab of tabs; track tab.id) {
      <li class="nav-item">
        <a
          #tabNavLinks
          [id]="tab.id + '-tab-link'"
          role="tab"
          class="nav-link"
          [class.active]="tab.active"
          [class.disabled]="tab.disabled"
          [attr.href]="'#' + tab.id + '-tab'"
          [attr.aria-controls]="tab.id + '-tab'"
          (click)="onTab(tab)">
          @if (tab.icon) {
            <it-icon [name]="tab.icon" class="me-2"></it-icon>
          }
          {{ tab.label }}
        </a>
      </li>
    }
  </ul>
}

@if (tabs) {
  <div class="tab-content">
    @for (tab of tabs; track tab.id) {
      <div
        [id]="tab.id + '-tab'"
        class="tab-pane p-4 fade {{ tab.class ?? '' }}"
        [class.active]="tab.active"
        [class.show]="tab.active"
        role="tabpanel"
        [attr.aria-labelledby]="tab.id + '-tab-link'">
        <ng-container *ngTemplateOutlet="tab.htmlContent"></ng-container>
      </div>
    }
  </div>
}
`},{name:"ItTabItemComponent",id:"component-ItTabItemComponent-c53117bdd39ef2b7d696800844152e9401baca1ef78215ec818e8728961e673a50879c0159cc12a448d3ea1dbba2c1afc84fb4c41f34492ad74670205ee19606",file:"projects/design-angular-kit/src/lib/components/core/tab/tab-item/tab-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-tab-item",styleUrls:[],styles:[],templateUrl:["./tab-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{required:!1,name:"active",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:748,end:766,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:749,end:756,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Default active tab
`,description:`<p>Default active tab</p>
`,line:28,type:"boolean",decorators:[]},{name:"class",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

Custom class
`,description:`<p>Custom class</p>
`,line:39,type:"string",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:865,end:883,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:866,end:873,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Default disabled tab
`,description:`<p>Default disabled tab</p>
`,line:34,type:"boolean",decorators:[]},{name:"icon",deprecated:!1,deprecationMessage:"",rawdescription:`

The icon name
`,description:`<p>The icon name</p>
`,line:22,type:"IconName | undefined",decorators:[]},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The tab label
`,description:`<p>The tab label</p>
`,line:17,type:"string | undefined",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"htmlContent",deprecated:!1,deprecationMessage:"",type:"TemplateRef<any>",optional:!1,description:`<p>The content of tab</p>
`,line:44,rawdescription:`

The content of tab
`,decorators:[{name:"ViewChild",stringifiedArguments:"TemplateRef"}],modifierKind:[170,125]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:46,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { AfterViewInit, ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { IconName } from '../../../../interfaces/icon';
import { inputToBoolean } from '../../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-tab-item',
  templateUrl: './tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItTabItemComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * The tab label
   */
  @Input() label: string | undefined;

  /**
   * The icon name
   */
  @Input() icon: IconName | undefined;

  /**
   * Default active tab
   * @default false
   */
  @Input({ transform: inputToBoolean }) active?: boolean;

  /**
   * Default disabled tab
   * @default false
   */
  @Input({ transform: inputToBoolean }) disabled?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

  /**
   * The content of tab
   */
  @ViewChild(TemplateRef) public htmlContent!: TemplateRef<any>;

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],implements:["AfterViewInit"],templateData:`<ng-template>
  <ng-content></ng-content>
</ng-template>
`},{name:"ItTableComponent",id:"component-ItTableComponent-93aa1743b3202296f0692f581d38bce9c0fe73b1809767ebc0feedc6e6b04886d78d0c7b70c1dfab31c4ca33cade1e607d7ce05d176270b98801c68467ab0a99",file:"projects/design-angular-kit/src/lib/components/core/table/table.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-table",styleUrls:["./table.component.scss"],styles:[],templateUrl:["./table.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"alignment",deprecated:!1,deprecationMessage:"",rawdescription:`

Use vertical alignment classes to realign where needed.
`,description:`<p>Use vertical alignment classes to realign where needed.</p>
`,line:27,type:"VerticalAlignment | undefined",decorators:[]},{required:!1,name:"bordered",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1208,end:1226,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1209,end:1216,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add .table-bordered to have borders on all sides of the table and on all cells.
`,description:`<p>Add .table-bordered to have borders on all sides of the table and on all cells.</p>
`,line:45,type:"boolean",decorators:[]},{required:!1,name:"borderless",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1362,end:1380,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1363,end:1370,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add the .table-borderless class for a borderless table.
`,description:`<p>Add the .table-borderless class for a borderless table.</p>
`,line:51,type:"boolean",decorators:[]},{required:!1,name:"captionTop",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1673,end:1691,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1674,end:1681,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

To render the <caption> on top of the table
`,description:`<p>To render the <caption> on top of the table</p>
`,line:63,type:"boolean",decorators:[]},{name:"color",deprecated:!1,deprecationMessage:"",rawdescription:`

Table color
`,description:`<p>Table color</p>
`,line:17,type:"TableColor | undefined",decorators:[]},{required:!1,name:"compact",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1533,end:1550,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1534,end:1540,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"efault"},comment:`<p>false</p>
`}],rawdescription:`

Add .table-sm to make tables more compact by halving the cell padding.
`,description:`<p>Add .table-sm to make tables more compact by halving the cell padding.</p>
`,line:57,type:"boolean",decorators:[]},{name:"headColor",deprecated:!1,deprecationMessage:"",rawdescription:`

Head table color
`,description:`<p>Head table color</p>
`,line:22,type:"TableHeadColor | undefined",decorators:[]},{required:!1,name:"hover",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1033,end:1051,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1034,end:1041,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Add .table-hover to enable hover state on table rows contained in <tbody>.
`,description:`<p>Add .table-hover to enable hover state on table rows contained in <tbody>.</p>
`,line:39,type:"boolean",decorators:[]},{name:"responsive",defaultValue:"'responsive'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1842,end:1865,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1843,end:1850,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>responsive</p>
`}],rawdescription:`

Responsive tables allow you to scroll tables horizontally with ease.
`,description:`<p>Responsive tables allow you to scroll tables horizontally with ease.</p>
`,line:69,type:"TableResponsive",decorators:[]},{required:!1,name:"striped",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:861,end:879,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:862,end:869,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Use .table-striped to add zebra stripes to each table row contained in <tbody>.
`,description:`<p>Use .table-striped to add zebra stripes to each table row contained in <tbody>.</p>
`,line:33,type:"boolean",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColor, TableHeadColor, TableResponsive, VerticalAlignment } from '../../../interfaces/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItTableComponent {
  /**
   * Table color
   */
  @Input() color: TableColor | undefined;

  /**
   * Head table color
   */
  @Input() headColor: TableHeadColor | undefined;

  /**
   * Use vertical alignment classes to realign where needed.
   */
  @Input() alignment: VerticalAlignment | undefined;

  /**
   * Use .table-striped to add zebra stripes to each table row contained in <tbody>.
   * @default false
   */
  @Input({ transform: inputToBoolean }) striped?: boolean;

  /**
   * Add .table-hover to enable hover state on table rows contained in <tbody>.
   * @default false
   */
  @Input({ transform: inputToBoolean }) hover?: boolean;

  /**
   * Add .table-bordered to have borders on all sides of the table and on all cells.
   * @default false
   */
  @Input({ transform: inputToBoolean }) bordered?: boolean;

  /**
   * Add the .table-borderless class for a borderless table.
   * @default false
   */
  @Input({ transform: inputToBoolean }) borderless?: boolean;

  /**
   * Add .table-sm to make tables more compact by halving the cell padding.
   * @efault false
   */
  @Input({ transform: inputToBoolean }) compact?: boolean;

  /**
   * To render the <caption> on top of the table
   * @default false
   */
  @Input({ transform: inputToBoolean }) captionTop?: boolean;

  /**
   * Responsive tables allow you to scroll tables horizontally with ease.
   * @default responsive
   */
  @Input() responsive: TableResponsive = 'responsive';
}
`,assetsDirs:[],styleUrlsData:[{data:`caption:empty {
  display: none;
}

caption:empty ~ thead {
  border-top: none !important;
}
`,styleUrl:"./table.component.scss"}],stylesData:"",extends:[],templateData:`<div [class]="responsive ? 'table-' + responsive : undefined">
  <table
    class="table{{ color ? ' table-' + color : '' }}{{ alignment ? ' ' + alignment : '' }}"
    [class.table-striped]="striped"
    [class.table-hover]="hover"
    [class.table-bordered]="bordered"
    [class.table-borderless]="borderless"
    [class.table-sm]="compact"
    [class.caption-top]="captionTop">
    <caption>
      <ng-content select="[caption]"></ng-content>
    </caption>
    <thead [class]="headColor ? 'table-' + headColor : undefined">
      <ng-content select="[thead]"></ng-content>
    </thead>
    <tbody>
      <ng-content select="[tbody]"></ng-content>
    </tbody>
    <tfoot>
      <ng-content select="[tfoot]"></ng-content>
    </tfoot>
  </table>
</div>
`},{name:"ItTextareaComponent",id:"component-ItTextareaComponent-9f8ae879575b6165e3b03b7b97cac4e8460f2f5728219f395d4fe4724a0251e7791db8b68a61914f6a40bcebd08ba8fd72f3440354d65de7f74335c36e75de3d",file:"projects/design-angular-kit/src/lib/components/form/textarea/textarea.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-textarea",styleUrls:["./textarea.component.scss"],styles:[],templateUrl:["./textarea.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"description",deprecated:!1,deprecationMessage:"",rawdescription:`

The input description
`,description:`<p>The input description</p>
`,line:30,type:"string | undefined",decorators:[]},{name:"placeholder",defaultValue:"''",deprecated:!1,deprecationMessage:"",rawdescription:`

The textarea placeholder
`,description:`<p>The textarea placeholder</p>
`,line:25,type:"string",decorators:[]},{name:"readonly",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1018,end:1040,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1019,end:1026,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>undefined</p>
`}],rawdescription:`

To prevent modification of the contained value.
- <b>plaintext</b>: Readonly field in the form stylized as plain text
`,description:`<p>To prevent modification of the contained value.</p>
<ul>
<li><b>plaintext</b>: Readonly field in the form stylized as plain text</li>
</ul>
`,line:37,type:'boolean | "plaintext" | undefined',decorators:[]},{name:"rows",defaultValue:"3",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:667,end:681,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:668,end:675,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>3</p>
`}],rawdescription:`

Textarea Rows
`,description:`<p>Textarea Rows</p>
`,line:20,type:"number",decorators:[]},{required:!1,name:"disabled",deprecated:!1,deprecationMessage:"",rawdescription:`

Set the disabled state
`,description:`<p>Set the disabled state</p>
`,line:28,type:"boolean",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"label",deprecated:!1,deprecationMessage:"",rawdescription:`

The label of form control
`,description:`<p>The label of form control</p>
`,line:13,type:"string",decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"validationMode",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:942,end:1e3,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:943,end:950,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p><b>true</b>: Always show the validation color</p>
`}],rawdescription:`

Validation color display mode (validation triggered if field is touched or not pristine)
- <b>true</b>: Always show the validation color
- <b>false</b>: Never show validation color
- <b>only-valid</b>: Show only valid validation color
- <b>only-invalid</b>: Show only invalid validation color
`,description:`<p>Validation color display mode (validation triggered if field is touched or not pristine)</p>
<ul>
<li><b>true</b>: Always show the validation color</li>
<li><b>false</b>: Never show validation color</li>
<li><b>only-valid</b>: Show only valid validation color</li>
<li><b>only-invalid</b>: Show only invalid validation color</li>
</ul>
`,line:23,type:'boolean | "only-valid" | "only-invalid"',decorators:[],inheritance:{file:"ItAbstractFormComponent"}},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"control",deprecated:!1,deprecationMessage:"",type:"FormControl<T>",optional:!1,description:`<p>Internal form control</p>
`,line:35,rawdescription:`

Internal form control
`,modifierKind:[124],inheritance:{file:"ItAbstractFormComponent"}},{name:"onChange",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:92,inheritance:{file:"ItAbstractFormComponent"}},{name:"onTouched",defaultValue:"() => {...}",deprecated:!1,deprecationMessage:"",type:"",optional:!1,description:"",line:94,inheritance:{file:"ItAbstractFormComponent"}},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"addValidators",args:[{name:"validators",type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:155,deprecated:!1,deprecationMessage:"",rawdescription:`

Add the validators in control and parent control
`,description:`<p>Add the validators in control and parent control</p>
`,modifierKind:[124],jsdoctags:[{name:{pos:4424,end:4434,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"validators"},type:"ValidatorFn | ValidatorFn[]",deprecated:!1,deprecationMessage:"",tagName:{pos:4418,end:4423,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the validators</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"any",typeParameters:[],line:194,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.
`,description:`<p>Reports error data for the control with the given path.
to the control that should be queried for errors.
null is returned.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5687,end:5696,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5681,end:5686,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5740,end:5744,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5734,end:5739,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5883,end:5890,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>error data for that particular error. If the control or error is not present,
null is returned.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"hasError",args:[{name:"errorCode",type:"string",deprecated:!1,deprecationMessage:""},{name:"path",type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"boolean",typeParameters:[],line:179,deprecated:!1,deprecationMessage:"",rawdescription:`

Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.
`,description:`<p>Reports whether the control with the given path has the error specified. <br/>
If the control is not present, false is returned.
to the control that should be queried for errors.</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:5096,end:5105,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"errorCode"},type:"string",deprecated:!1,deprecationMessage:"",tagName:{pos:5090,end:5095,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>The code of the error to check</p>
`},{name:{pos:5149,end:5153,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"path"},type:"Array<string | number> | string",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:5143,end:5148,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>A list of control names that designates how to move from the current control
to the control that should be queried for errors.</p>
`},{tagName:{pos:5292,end:5299,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"returns"},comment:`<p>whether the given error is present in the control at the given path.</p>
`}],inheritance:{file:"ItAbstractFormComponent"}},{name:"markAsTouched",args:[],optional:!1,returnType:"void",typeParameters:[],line:120,deprecated:!1,deprecationMessage:"",rawdescription:`

Mark the control as touched
`,description:`<p>Mark the control as touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngDoCheck",args:[],optional:!1,returnType:"void",typeParameters:[],line:129,deprecated:!1,deprecationMessage:"",rawdescription:`

Fired to check if form control is touched
`,description:`<p>Fired to check if form control is touched</p>
`,inheritance:{file:"ItAbstractFormComponent"}},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:85,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnChange",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:96,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"registerOnTouched",args:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:101,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"fn",type:"any",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"setDisabledState",args:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:105,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"isDisabled",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"writeValue",args:[{name:"value",type:"T",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:112,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"value",type:"T",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractFormComponent"}},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ReactiveFormsModule",type:"module"},{name:"AsyncPipe",type:"pipe"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'it-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, AsyncPipe],
})
export class ItTextareaComponent extends ItAbstractFormComponent<string | null | undefined> {
  /**
   * Textarea Rows
   * @default 3
   */
  @Input() rows?: number = 3;

  /**
   * The textarea placeholder
   */
  @Input() placeholder: string = '';

  /**
   * The input description
   */
  @Input() description: string | undefined;

  /**
   * To prevent modification of the contained value.
   * - <b>plaintext</b>: Readonly field in the form stylized as plain text
   * @default undefined
   */
  @Input() readonly: boolean | 'plaintext' | undefined;

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('maxlength')) {
      const error = this.getError('maxlength');
      return this._translateService.get('it.errors.max-length-invalid', { max: error.requiredLength });
    }
    if (this.hasError('pattern')) {
      const error = this.getError('pattern');
      return this._translateService.get('it.errors.pattern-invalid', { pattern: error.requiredPattern });
    }

    return super.invalidMessage;
  }

  /**
   * Check is readonly field
   */
  protected get isReadonly(): boolean {
    return this.readonly === 'plaintext' || !!this.readonly;
  }
}
`,assetsDirs:[],styleUrlsData:[{data:`@import 'bootstrap-italia/src/scss/functions';
@import 'bootstrap-italia/src/scss/utilities/colors_vars';

textarea {
  &.is-invalid {
    border-color: $danger;
  }

  //&.is-valid {
  //  border-color: $success;
  //}
}
`,styleUrl:"./textarea.component.scss"}],stylesData:"",extends:["ItAbstractFormComponent"],accessors:{invalidMessage:{name:"invalidMessage",getSignature:{name:"invalidMessage",type:"",returnType:"Observable<string>",line:42,rawdescription:`

Return the invalid message string from TranslateService
`,description:`<p>Return the invalid message string from TranslateService</p>
`}},isReadonly:{name:"isReadonly",getSignature:{name:"isReadonly",type:"boolean",returnType:"boolean",line:58,rawdescription:`

Check is readonly field
`,description:`<p>Check is readonly field</p>
`}}},templateData:`<div class="form-group">
  @if (label) {
    <label [for]="id" [class.active]="!!control.value || !!placeholder">{{ label }}</label>
  }
  <textarea
    [id]="id"
    [rows]="rows"
    [class.form-control]="readonly !== 'plaintext'"
    [class.form-control-plaintext]="readonly === 'plaintext'"
    [class.is-invalid]="isInvalid"
    [class.is-valid]="isValid"
    [placeholder]="placeholder"
    [formControl]="control"
    [readonly]="isReadonly"
    (blur)="markAsTouched()"></textarea>

  @if (description) {
    <small [id]="id + '-description'" class="form-text">{{ description }}</small>
  }
  @if (isInvalid) {
    <div class="form-feedback just-validate-error-label" [id]="id + '-error'">
      <div #customError><ng-content select="[error]"></ng-content></div>
      @if (!customError.hasChildNodes()) {
        {{ invalidMessage | async }}
      }
    </div>
  }
</div>
`},{name:"ItTimelineComponent",id:"component-ItTimelineComponent-8dfcff05d49b04b0e9e7c744cc7fa6976ec1a53aaf268f03cd7b0a1682f0dfe0a01ee0b7e60a4619e63b4d7f526873b8a6d277954f85a329ca7cf41a34641304",file:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-timeline",styleUrls:[],styles:[],templateUrl:["./timeline.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"dateFormat",defaultValue:"'dd/MM/yyyy'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:990,end:1013,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:991,end:998,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>dd/MM/yyyy</p>
`}],rawdescription:`

Default date format for timeline element reference date
`,description:`<p>Default date format for timeline element reference date</p>
`,line:30,type:"string",decorators:[]},{name:"timelineElements",defaultValue:"[]",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:846,end:861,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:847,end:854,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>[]</p>
`}],rawdescription:`

Timeline elements array
`,description:`<p>Timeline elements array</p>
`,line:24,type:"TimelineElement[]",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"},{name:"ItTimelineItemComponent",type:"component"}],description:`<p>Timeline</p>
`,rawdescription:`

Timeline
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItTimelineItemComponent } from './timeline-item/timeline-item.component';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { TimelineElement } from '../../../interfaces/core';

/**
 * Timeline
 * @description Build timeline for chronological representation of events.
 */
@Component({
  standalone: true,
  selector: 'it-timeline',
  templateUrl: './timeline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, ItTimelineItemComponent],
})
export class ItTimelineComponent extends ItAbstractComponent {
  /**
   * Timeline elements array
   * @default []
   */
  @Input() timelineElements: TimelineElement[] = [];

  /**
   * Default date format for timeline element reference date
   * @default dd/MM/yyyy
   */
  @Input() dateFormat: string = 'dd/MM/yyyy';
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],templateData:`<div class="it-timeline-wrapper">
  <div class="row">
    @for (element of timelineElements; track $index) {
      <div class="col-12">
        <it-timeline-item
          [title]="element.title"
          [text]="element.text"
          [signature]="element.signature"
          [pinType]="element.pin?.type"
          [pinIcon]="element.pin?.icon"
          [pinText]="element.pin?.text"
          [eventDate]="element.eventDate"
          [dateFormat]="dateFormat"
          [categoryTitle]="element.category?.title"
          [categoryLink]="element.category?.link"
          [showReadMore]="!!element.link?.length"
          [readMoreLink]="element.link" />
      </div>
    }
  </div>
</div>
`},{name:"ItTimelineItemComponent",id:"component-ItTimelineItemComponent-06a4596de75109f3e1e56a399ef61101d90dfcb07bd50f5691a8d687c4c8a57c6a061f1c0e60487089a476cf5356541319769b6e82afc6c128169ffdaef6990a",file:"projects/design-angular-kit/src/lib/components/core/timeline/timeline-item/timeline-item.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-timeline-item",styleUrls:[],styles:[],templateUrl:["./timeline-item.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"categoryLink",deprecated:!1,deprecationMessage:"",rawdescription:`

Timeline element category link
`,description:`<p>Timeline element category link</p>
`,line:73,type:"string | undefined",decorators:[]},{name:"categoryTitle",deprecated:!1,deprecationMessage:"",rawdescription:`

Timeline element category title
`,description:`<p>Timeline element category title</p>
`,line:68,type:"string | undefined",decorators:[]},{name:"dateFormat",defaultValue:"'dd/MM/yyyy'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1308,end:1331,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1309,end:1316,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>dd/MM/yyyy</p>
`}],rawdescription:`

Timeline element reference date format
`,description:`<p>Timeline element reference date format</p>
`,line:46,type:"string",decorators:[]},{name:"eventDate",deprecated:!1,deprecationMessage:"",rawdescription:`

Timeline element reference date
`,description:`<p>Timeline element reference date</p>
`,line:40,type:"Date | undefined",decorators:[]},{name:"pinIcon",defaultValue:"'code-circle'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1649,end:1673,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1650,end:1657,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>code-circle</p>
`}],rawdescription:`

Timeline element PIN icon
`,description:`<p>Timeline element PIN icon</p>
`,line:63,type:"IconName | undefined",decorators:[]},{required:!0,name:"pinText",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Timeline element PIN text
`,description:`<p>Timeline element PIN text</p>
`,line:51,type:"string | undefined",decorators:[]},{name:"pinType",defaultValue:"'default'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1525,end:1542,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1526,end:1533,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>none</p>
`}],rawdescription:`

Timeline element PIN type
`,description:`<p>Timeline element PIN type</p>
`,line:57,type:"TimelinePINType | undefined",decorators:[]},{name:"readMoreLink",defaultValue:"'#'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:2110,end:2124,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:2111,end:2118,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<h1></h1>
`}],rawdescription:`
Timeline element detail link
`,description:`<p>Timeline element detail link</p>
`,line:85,type:"string | undefined",decorators:[]},{required:!1,name:"showReadMore",defaultValue:"false",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1975,end:1993,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1976,end:1983,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Timeline element show detail link
`,description:`<p>Timeline element show detail link</p>
`,line:80,type:"boolean",decorators:[]},{name:"signature",deprecated:!1,deprecationMessage:"",rawdescription:`

Timeline element signature
`,description:`<p>Timeline element signature</p>
`,line:35,type:"string | undefined",decorators:[]},{required:!0,name:"text",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Timeline element text
`,description:`<p>Timeline element text</p>
`,line:30,type:"string",decorators:[]},{required:!0,name:"title",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

Timeline element title
`,description:`<p>Timeline element title</p>
`,line:25,type:"string",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"DatePipe",type:"pipe"},{name:"TranslateModule",type:"module"},{name:"NgClass"}],description:`<p>Timeline Item</p>
`,rawdescription:`

Timeline Item
`,type:"component",sourceCode:`import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { DatePipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TimelinePINType } from '../../../../interfaces/core';
import { IconName } from '../../../../interfaces/icon';
import { inputToBoolean } from '../../../../utils/coercion';

/**
 * Timeline Item
 * @description Represents a single event for Timeline component.
 */
@Component({
  standalone: true,
  selector: 'it-timeline-item',
  templateUrl: './timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, DatePipe, TranslateModule, NgClass],
})
export class ItTimelineItemComponent extends ItAbstractComponent {
  /**
   * Timeline element title
   */
  @Input({ required: true }) title!: string;

  /**
   * Timeline element text
   */
  @Input({ required: true }) text!: string;

  /**
   * Timeline element signature
   */
  @Input() signature: string | undefined;

  /**
   * Timeline element reference date
   */
  @Input() eventDate: Date | undefined;

  /**
   * Timeline element reference date format
   * @default dd/MM/yyyy
   */
  @Input() dateFormat: string = 'dd/MM/yyyy';

  /**
   * Timeline element PIN text
   */
  @Input({ required: true }) pinText: string | undefined;

  /**
   * Timeline element PIN type
   * @default none
   */
  @Input() pinType: TimelinePINType | undefined = 'default';

  /**
   * Timeline element PIN icon
   * @default code-circle
   */
  @Input() pinIcon: IconName | undefined = 'code-circle';

  /**
   * Timeline element category title
   */
  @Input() categoryTitle: string | undefined;

  /**
   * Timeline element category link
   */
  @Input() categoryLink: string | undefined;

  /**
   * Timeline element show detail link
   * @default false
   */
  @Input({ transform: inputToBoolean })
  showReadMore: boolean = false;

  /** Timeline element detail link
   * @default #
   */
  @Input() readMoreLink: string | undefined = '#';
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],templateData:`<div class="timeline-element">
  @if (pinType === 'now') {
    <span class="it-now-label d-none d-lg-flex">{{ 'it.timeline.today' | translate }}</span>
  }
  <div class="it-pin-wrapper" [ngClass]="{ 'it-evidence': pinType === 'evidence', 'it-now': pinType === 'now' }">
    <div class="pin-icon">
      @if (pinIcon) {
        <it-icon [name]="pinIcon"></it-icon>
      } @else {
        <it-icon name="code-circle"></it-icon>
      }
    </div>
    <div class="pin-text">
      <span>{{ pinText }}</span>
    </div>
  </div>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-body">
        @if ((categoryTitle && categoryLink) || eventDate) {
          <div class="category-top">
            @if (categoryTitle) {
              <a class="category" [href]="categoryLink">{{ categoryTitle }}</a>
            }
            @if (eventDate) {
              <span class="data">{{ eventDate | date: dateFormat }}</span>
            }
          </div>
        }
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        @if (signature) {
          <span class="card-signature">{{ signature }}</span>
        }
        @if (showReadMore) {
          <a class="read-more" [href]="readMoreLink">
            <span class="text">{{ 'it.timeline.read-more' | translate }}</span>
            <span class="visually-hidden">{{ 'it.timeline.read-more-on' | translate: { title: title } }}</span>
            <it-icon name="arrow-right"></it-icon>
          </a>
        }
      </div>
    </div>
  </div>
</div>
`},{name:"ItUploadDragDropComponent",id:"component-ItUploadDragDropComponent-f4240b4688eeb25cea7615f4d483347335418960f06789dfaa0e5c1761caa7f11174b19134cd1cfbf46d758bfcdc319698576bf90b63e5ee820b5108a1c01884",file:"projects/design-angular-kit/src/lib/components/form/upload-drag-drop/upload-drag-drop.component.ts",changeDetection:"ChangeDetectionStrategy.OnPush",encapsulation:[],entryComponents:[],exportAs:"itUploadDragDrop",inputs:[],outputs:[],providers:[],selector:"it-upload-drag-drop",styleUrls:[],styles:[],templateUrl:["./upload-drag-drop.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"accept",defaultValue:"'*'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1195,end:1235,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1196,end:1203,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>application/pdf,image/png</p>
`},{pos:1235,end:1249,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1236,end:1243,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<ul>
<li></li>
</ul>
`}],rawdescription:'\n\nThe accepted file type to upload <br>\nPossible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma\n```html\n```',description:`<p>The accepted file type to upload <br>
Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:36,type:"string",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"fileStartUpload",defaultValue:"new EventEmitter<File>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when file start to upload
`,description:`<p>Fired when file start to upload</p>
`,line:41,type:"EventEmitter"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"assetBasePath",deprecated:!1,deprecationMessage:"",type:"string",optional:!1,description:`<p>The bootstrap-italia asset folder path</p>
`,line:59,rawdescription:`

The bootstrap-italia asset folder path
`,modifierKind:[124],jsdoctags:[{pos:1781,end:1812,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1782,end:1789,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>./bootstrap-italia</p>
`}]},{name:"donut",deprecated:!1,deprecationMessage:"",type:"ProgressDonut",optional:!0,description:"",line:47,modifierKind:[124]},{name:"donutElement",deprecated:!1,deprecationMessage:"",type:"ElementRef<HTMLDivElement>",optional:!0,description:"",line:49,decorators:[{name:"ViewChild",stringifiedArguments:"'donutElement'"}],modifierKind:[170,123]},{name:"extension",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:52,modifierKind:[124]},{name:"filename",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:51,modifierKind:[124]},{name:"fileSize",deprecated:!1,deprecationMessage:"",type:"string",optional:!0,description:"",line:53,modifierKind:[124]},{name:"isDragover",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:43,modifierKind:[124]},{name:"isLoading",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:44,modifierKind:[124]},{name:"isSuccess",defaultValue:"false",deprecated:!1,deprecationMessage:"",type:"boolean",optional:!1,description:"",line:45,modifierKind:[124]},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:66,deprecated:!1,deprecationMessage:"",modifierKind:[164],inheritance:{file:"ItAbstractComponent"}},{name:"onDragLeave",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:83,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'dragleave', ['$event']"}],modifierKind:[170,125],jsdoctags:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"onDragOver",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:75,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'dragover', ['$event']"}],modifierKind:[170,125],jsdoctags:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"onDrop",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:91,deprecated:!1,deprecationMessage:"",decorators:[{name:"HostListener",stringifiedArguments:"'drop', ['$event']"}],modifierKind:[170,125],jsdoctags:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"onLoadFile",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:107,deprecated:!1,deprecationMessage:"",rawdescription:`

On load file from input
`,description:`<p>On load file from input</p>
`,jsdoctags:[{name:{pos:2903,end:2908,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},type:"Event",deprecated:!1,deprecationMessage:"",tagName:{pos:2897,end:2902,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"progress",args:[{name:"value",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:139,deprecated:!1,deprecationMessage:"",rawdescription:`

Percentage of upload
`,description:`<p>Percentage of upload</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:3585,end:3590,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"number",deprecated:!1,deprecationMessage:"",tagName:{pos:3579,end:3584,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the percentage [0 - 100]</p>
`}]},{name:"reset",args:[],optional:!1,returnType:"void",typeParameters:[],line:163,deprecated:!1,deprecationMessage:"",rawdescription:`

Reset file uploader
`,description:`<p>Reset file uploader</p>
`,modifierKind:[125]},{name:"start",args:[{name:"file",type:"File",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:119,deprecated:!1,deprecationMessage:"",rawdescription:`

Start the upload file
`,description:`<p>Start the upload file</p>
`,modifierKind:[125],jsdoctags:[{name:{pos:3133,end:3137,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"file"},type:"File",deprecated:!1,deprecationMessage:"",tagName:{pos:3127,end:3132,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"success",args:[],optional:!1,returnType:"void",typeParameters:[],line:154,deprecated:!1,deprecationMessage:"",rawdescription:`

Upload success
`,description:`<p>Upload success</p>
`,modifierKind:[125]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:50,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[{name:"dragleave",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:83},{name:"dragover",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:75},{name:"drop",args:[{name:"evt",type:"DragEvent",deprecated:!1,deprecationMessage:""}],argsDecorator:["$event"],deprecated:!1,deprecationMessage:"",line:91}],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"},{name:"NgOptimizedImage"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { ItFileUtils } from '../../../utils/file-utils';
import { ProgressDonut } from 'bootstrap-italia';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';

@Component({
  standalone: true,
  selector: 'it-upload-drag-drop',
  templateUrl: './upload-drag-drop.component.html',
  exportAs: 'itUploadDragDrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, NgOptimizedImage],
})
export class ItUploadDragDropComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * The accepted file type to upload <br>
   * Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma
   * @example application/pdf,image/png
   * @default *
   */
  @Input() accept: string = '*';

  /**
   * Fired when file start to upload
   */
  @Output() fileStartUpload = new EventEmitter<File>();

  protected isDragover: boolean = false;
  protected isLoading: boolean = false;
  protected isSuccess: boolean = false;

  protected donut?: ProgressDonut;

  @ViewChild('donutElement') private donutElement?: ElementRef<HTMLDivElement>;

  protected filename?: string;
  protected extension?: string;
  protected fileSize?: string;

  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  protected assetBasePath: string;

  constructor() {
    super();
    this.assetBasePath = inject(IT_ASSET_BASE_PATH);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (this.donutElement) {
      this.donut = ProgressDonut.getOrCreateInstance(this.donutElement.nativeElement);
    }
  }

  // Dragover listener
  @HostListener('dragover', ['$event'])
  public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDragover = !this.isLoading;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDragover = false;
  }

  // Drop leave listener
  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.isDragover = false;
    const files = evt.dataTransfer?.files;
    if (this.isLoading || !files?.length) {
      return;
    }
    this.start(files[0]);
  }

  /**
   * On load file from input
   * @param event
   */
  onLoadFile(event: Event): void {
    const files = (event.target as HTMLInputElement)?.files;
    if (!files?.length) {
      return;
    }
    this.start(files[0]);
  }

  /**
   * Start the upload file
   * @param file
   */
  public start(file: File): void {
    if (this.accept !== '*' && !this.accept.includes(file.type)) {
      return;
    }

    this.reset();
    this.isLoading = true;

    const splitName = file.name.split('.');
    this.filename = splitName[0];
    this.extension = splitName[1]?.toUpperCase();
    this.fileSize = ItFileUtils.getFileSizeString(file);

    this.fileStartUpload.emit(file);
  }

  /**
   * Percentage of upload
   * @param value the percentage [0 - 100]
   */
  public progress(value: number) {
    if (!this.isLoading) {
      return;
    }

    if (value >= 100) {
      this.success();
    } else {
      this.donut?.set((value < 0 ? 0 : value) / 100);
    }
  }

  /**
   * Upload success
   */
  public success(): void {
    this.isLoading = false;
    this.isSuccess = true;
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Reset file uploader
   */
  public reset(): void {
    this.isLoading = false;
    this.isSuccess = false;
    this.filename = this.extension = this.fileSize = undefined;
    this.donut?.set(0);
    this._changeDetectorRef.detectChanges();
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:59},extends:["ItAbstractComponent"],implements:["AfterViewInit"],templateData:`<div class="upload-dragdrop" [class.dragover]="isDragover" [class.loading]="isLoading" [class.success]="isSuccess">
  <div class="upload-dragdrop-image">
    <img
      [ngSrc]="assetBasePath + '/dist/assets/upload-drag-drop-icon.svg'"
      alt="drag-drop-icon"
      aria-hidden="true"
      [width]="180"
      [height]="180" />
    <div class="upload-dragdrop-loading">
      <div class="progress-donut" #donutElement></div>
    </div>
    <div class="upload-dragdrop-success">
      <it-icon name="check"></it-icon>
    </div>
  </div>
  <div class="upload-dragdrop-text">
    <p class="upload-dragdrop-weight">
      <it-icon name="file" size="xs"></it-icon>
      {{ extension }} ({{ fileSize }})
    </p>
    <h5>{{ filename || ('it.form.upload-drag-file' | translate) }}</h5>
    @if (isLoading) {
      <p>{{ 'it.form.upload-loading' | translate }}</p>
    }
    @if (isSuccess) {
      <p>{{ 'it.form.upload-complete' | translate }}</p>
    }
    @if (!isLoading && !isSuccess) {
      <p>
        {{ 'it.form.upload-or' | translate }}
        <input type="file" [id]="id" class="upload-dragdrop-input" [accept]="accept" (change)="onLoadFile($event)" />
        <label [for]="id">{{ 'it.form.upload-select-device' | translate }}</label>
      </p>
    }
  </div>
</div>
`},{name:"ItUploadFileListComponent",id:"component-ItUploadFileListComponent-1439e0ecbf3f918445ad8b54d98de8075caf6fcb24fc3f1cd94e63827adb3e4ceaae9d4e400ed17622e5f7baedb4af134b0fdde4bef071696d18c53052c5ef70",file:"projects/design-angular-kit/src/lib/components/form/upload-file-list/upload-file-list.component.ts",encapsulation:[],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"it-upload-file-list",styleUrls:[],styles:[],templateUrl:["./upload-file-list.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"accept",defaultValue:"'*'",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1332,end:1372,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1333,end:1340,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"example"},comment:`<p>application/pdf,image/png</p>
`},{pos:1372,end:1386,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1373,end:1380,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<ul>
<li></li>
</ul>
`}],rawdescription:'\n\nThe accepted file type to upload <br>\nPossible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma\n```html\n```',description:`<p>The accepted file type to upload <br>
Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma</p>
<b>Example :</b><div><pre class="line-numbers"><code class="language-html"></code></pre></div>`,line:30,type:"string",decorators:[]},{required:!0,name:"fileList",deprecated:!1,deprecationMessage:"",optional:!1,rawdescription:`

The list of files to show in list
`,description:`<p>The list of files to show in list</p>
`,line:22,type:"Array<UploadFileListItem>",decorators:[]},{required:!1,name:"hideLoadButton",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1706,end:1724,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1707,end:1714,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

Hide the load button
`,description:`<p>Hide the load button</p>
`,line:48,type:"boolean",decorators:[]},{required:!1,name:"images",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1589,end:1607,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1590,end:1597,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>false</p>
`}],rawdescription:`

If is file list image
`,description:`<p>If is file list image</p>
`,line:42,type:"boolean",decorators:[]},{required:!1,name:"multiple",defaultValue:"true",deprecated:!1,deprecationMessage:"",jsdoctags:[{pos:1464,end:1481,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:334,tagName:{pos:1465,end:1472,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"default"},comment:`<p>true</p>
`}],rawdescription:`

If upload multiple files
`,description:`<p>If upload multiple files</p>
`,line:36,type:"boolean",decorators:[]},{name:"id",defaultValue:"this.getDefaultId()",deprecated:!1,deprecationMessage:"",rawdescription:`

The element ID
`,description:`<p>The element ID</p>
`,line:20,type:"string",decorators:[],inheritance:{file:"ItAbstractComponent"}}],outputsClass:[{name:"deleteItem",defaultValue:"new EventEmitter<UploadFileListItem>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired on delete item button click
`,description:`<p>Fired on delete item button click</p>
`,line:58,type:"EventEmitter<UploadFileListItem>"},{name:"uploadFiles",defaultValue:"new EventEmitter<FileList>()",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when upload new files
`,description:`<p>Fired when upload new files</p>
`,line:53,type:"EventEmitter<FileList>"},{name:"valueChanges",deprecated:!1,deprecationMessage:"",rawdescription:`

Fired when component input attributes was changed
`,description:`<p>Fired when component input attributes was changed</p>
`,line:25,type:"EventEmitter<void>",inheritance:{file:"ItAbstractComponent"}}],propertiesClass:[{name:"previewImages",defaultValue:"new Map<number, string>()",deprecated:!1,deprecationMessage:"",type:"Map<number | string>",optional:!1,description:`<p>Cache to preview image</p>
`,line:63,rawdescription:`

Cache to preview image
`},{name:"_changeDetectorRef",deprecated:!1,deprecationMessage:"",type:"ChangeDetectorRef",optional:!1,description:"",line:35,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_elementRef",deprecated:!1,deprecationMessage:"",type:"ElementRef",optional:!1,description:"",line:34,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"_renderer",deprecated:!1,deprecationMessage:"",type:"Renderer2",optional:!1,description:"",line:33,modifierKind:[124,148],inheritance:{file:"ItAbstractComponent"}},{name:"instances",defaultValue:"0",deprecated:!1,deprecationMessage:"",type:"number",optional:!1,description:`<p>Counter of active instances</p>
`,line:31,rawdescription:`

Counter of active instances
`,modifierKind:[123,126],jsdoctags:[{pos:539,end:551,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:341,tagName:{pos:540,end:547,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}}],methodsClass:[{name:"getFileSize",args:[{name:"file",type:"File",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"string",typeParameters:[],line:117,deprecated:!1,deprecationMessage:"",rawdescription:`

Get the file size string
`,description:`<p>Get the file size string</p>
`,jsdoctags:[{name:{pos:3459,end:3463,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"file"},type:"File",deprecated:!1,deprecationMessage:"",tagName:{pos:3453,end:3458,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"ngOnChanges",args:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:71,deprecated:!1,deprecationMessage:"",modifierKind:[164],jsdoctags:[{name:"changes",type:"SimpleChanges",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}],inheritance:{file:"ItAbstractComponent"}},{name:"ngOnInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:65,deprecated:!1,deprecationMessage:""},{name:"onLoadFiles",args:[{name:"event",type:"Event",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:92,deprecated:!1,deprecationMessage:"",rawdescription:`

On load file from input
`,description:`<p>On load file from input</p>
`,jsdoctags:[{name:{pos:2835,end:2840,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"event"},type:"Event",deprecated:!1,deprecationMessage:"",tagName:{pos:2829,end:2834,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:""}]},{name:"getDefaultId",args:[],optional:!1,returnType:"string",typeParameters:[],line:58,deprecated:!1,deprecationMessage:"",rawdescription:`

Generate unique id for components
`,description:`<p>Generate unique id for components</p>
`,modifierKind:[123],jsdoctags:[{tagName:{pos:1317,end:1324,flags:16842752,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"private"},comment:""}],inheritance:{file:"ItAbstractComponent"}},{name:"ngAfterViewInit",args:[],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",inheritance:{file:"ItAbstractComponent"}}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!0,imports:[{name:"ItIconComponent",type:"component"},{name:"TranslateModule",type:"module"},{name:"ItTooltipDirective",type:"directive"},{name:"ItProgressBarComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",sourceCode:`import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { UploadFileListItem } from '../../../interfaces/form';
import { ItFileUtils } from '../../../utils/file-utils';
import { forkJoin, take, tap } from 'rxjs';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItTooltipDirective } from '../../core/tooltip/tooltip.directive';
import { ItProgressBarComponent } from '../../core/progress-bar/progress-bar.component';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  imports: [ItIconComponent, TranslateModule, ItTooltipDirective, ItProgressBarComponent],
})
export class ItUploadFileListComponent extends ItAbstractComponent implements OnInit, OnChanges {
  /**
   * The list of files to show in list
   */
  @Input({ required: true }) fileList!: Array<UploadFileListItem>;

  /**
   * The accepted file type to upload <br>
   * Possible values: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types</a> separated by comma
   * @example application/pdf,image/png
   * @default *
   */
  @Input() accept: string = '*';

  /**
   * If upload multiple files
   * @default true
   */
  @Input({ transform: inputToBoolean }) multiple: boolean = true;

  /**
   * If is file list image
   * @default false
   */
  @Input({ transform: inputToBoolean }) images?: boolean;

  /**
   * Hide the load button
   * @default false
   */
  @Input({ transform: inputToBoolean }) hideLoadButton?: boolean;

  /**
   * Fired when upload new files
   */
  @Output() uploadFiles: EventEmitter<FileList> = new EventEmitter<FileList>();

  /**
   * Fired on delete item button click
   */
  @Output() deleteItem: EventEmitter<UploadFileListItem> = new EventEmitter<UploadFileListItem>();

  /**
   * Cache to preview image
   */
  previewImages: Map<number, string> = new Map<number, string>();

  ngOnInit(): void {
    if (!!this.images && this.accept === '*') {
      this.accept = 'image/*';
    }
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileList'] && !!this.images) {
      const images$ = this.fileList.map(item =>
        ItFileUtils.fileToBase64(item.file).pipe(
          take(1),
          tap(base64 => this.previewImages.set(item.id, base64))
        )
      );
      forkJoin(images$).subscribe(() => {
        this._changeDetectorRef.detectChanges();
        super.ngOnChanges(changes);
      });
    } else {
      super.ngOnChanges(changes);
    }
  }

  /**
   * On load file from input
   * @param event
   */
  onLoadFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input?.files;
    if (!files?.length) {
      return;
    }

    const newFiles = Array.from(files).filter(
      file =>
        !this.fileList.some(item => {
          return item.file.name === file.name && item.file.size === file.size && item.file.type === file.type;
        })
    );

    const fileList = new DataTransfer();
    newFiles.forEach(file => fileList.items.add(file));

    this.uploadFiles.emit(fileList.files);
    input.value = '';
  }

  /**
   * Get the file size string
   * @param file
   */
  getFileSize(file: File): string {
    return ItFileUtils.getFileSizeString(file);
  }
}
`,assetsDirs:[],styleUrlsData:"",stylesData:"",extends:["ItAbstractComponent"],implements:["OnInit","OnChanges"],templateData:`@if (!hideLoadButton) {
  <input type="file" [id]="id" class="upload" [accept]="accept" [multiple]="multiple" (change)="onLoadFiles($event)" />
  <label [for]="id">
    <it-icon name="upload" size="sm"></it-icon>
    <span>{{ 'it.form.upload' | translate }}</span>
  </label>
}

@if (fileList.length) {
  <ul class="upload-file-list" [class.upload-file-list-image]="images">
    @for (item of fileList; track item.id) {
      <li
        class="upload-file"
        [class.error]="item.error"
        [class.uploading]="!item.error && item.progress !== undefined && item.progress > 0 && item.progress < 100"
        [class.success]="!item.error && (!item.progress || item.progress >= 100)">
        @if (images) {
          <div class="upload-image">
            <img [attr.src]="previewImages.get(item.id)" [alt]="item.file.name" />
          </div>
        } @else {
          <it-icon name="file" size="sm" [color]="!item.error ? (item.progress ? 'secondary' : 'primary') : 'danger'"></it-icon>
        }
        <p [itTooltip]="item.tooltip">
          <span class="visually-hidden">{{ 'it.form.uploaded-file' | translate: { name: item.file.name } }}</span>
          {{ item.file.name }} <span class="upload-file-weight">{{ getFileSize(item.file) }}</span>
        </p>
        @if (item.removable && (!item.progress || item.progress < 100)) {
          <button type="button" (click)="deleteItem.emit(item)">
            <span class="visually-hidden">{{ 'it.form.delete-file' | translate: { name: item.file.name } }}</span>
            <it-icon name="close"></it-icon>
          </button>
        }
        @if ((!item.removable && !item.progress) || (item.progress !== undefined && item.progress >= 100)) {
          <button type="button" disabled>
            <span class="visually-hidden">{{ 'it.form.upload-complete' | translate }}</span>
            <it-icon name="check"></it-icon>
          </button>
        }
        @if (!item.error && item.progress !== undefined && item.progress > 0 && item.progress < 100) {
          <it-progress-bar [value]="item.progress!"></it-progress-bar>
        }
      </li>
    }
  </ul>
}
`}],modules:[{name:"DesignAngularKitModule",id:"module-DesignAngularKitModule-b3d3c6fdcba7d9bdbe4d7f00e8239b958c25df474bf50890b74365d9455b250d38f9d22bba22b5bd24dee5e8b63b71909d956cfaa97d8069957489bdfc05b495",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",methods:[{name:"forChild",args:[],optional:!1,returnType:"ModuleWithProviders<DesignAngularKitModule>",typeParameters:[],line:122,deprecated:!1,deprecationMessage:"",modifierKind:[126]},{name:"forRoot",args:[{name:"config",type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0}],optional:!1,returnType:"ModuleWithProviders<DesignAngularKitModule>",typeParameters:[],line:115,deprecated:!1,deprecationMessage:"",modifierKind:[126],jsdoctags:[{name:"config",type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{text:"param"}}]}],sourceCode:`import { ModuleWithProviders, NgModule } from '@angular/core';
import { DesignAngularKitConfig } from './interfaces/design-angular-kit-config';
import { provideDesignAngularKit } from './provide-design-angular-kit';
import { ItAccordionComponent } from './components/core/accordion/accordion.component';
import { ItAlertComponent } from './components/core/alert/alert.component';
import { ItAvatarModule } from './components/core/avatar/avatar.module';
import { ItBadgeDirective } from './components/core/badge/badge.directive';
import { ItButtonDirective } from './components/core/button/button.directive';
import { ItCalloutComponent } from './components/core/callout/callout.component';
import { ItCardComponent } from './components/core/card/card.component';
import { ItCarouselModule } from './components/core/carousel/carousel.module';
import { ItChipComponent } from './components/core/chip/chip.component';
import { ItCollapseComponent } from './components/core/collapse/collapse.component';
import { ItDimmerModule } from './components/core/dimmer/dimmer.module';
import { ItDropdownModule } from './components/core/dropdown/dropdown.module';
import { ItForwardDirective } from './components/core/forward/forward.directive';
import { ItLinkComponent } from './components/core/link/link.component';
import { ItListModule } from './components/core/list/list.module';
import { ItMegamenuComponent } from './components/navigation/megamenu/megamenu.component';
import { ItModalComponent } from './components/core/modal/modal.component';
import { ItNotificationsComponent } from './components/core/notifications/notifications.component';
import { ItPaginationComponent } from './components/core/pagination/pagination.component';
import { ItPopoverDirective } from './components/core/popover/popover.directive';
import { ItProgressBarComponent } from './components/core/progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from './components/core/progress-button/progress-button.component';
import { ItSpinnerComponent } from './components/core/spinner/spinner.component';
import { ItSteppersModule } from './components/core/steppers/steppers.module';
import { ItTabModule } from './components/core/tab/tab.module';
import { ItTableModule } from './components/core/table/table.module';
import { ItTooltipDirective } from './components/core/tooltip/tooltip.directive';
import { ItFormModule } from './components/form/form.module';
import { ItBackButtonComponent } from './components/navigation/back-button/back-button.component';
import { ItBackToTopComponent } from './components/navigation/back-to-top/back-to-top.component';
import { ItBreadcrumbsModule } from './components/navigation/breadcrumbs/breadcrumbs.module';
import { ItHeaderComponent } from './components/navigation/header/header.component';
import { ItNavBarModule } from './components/navigation/navbar/navbar.module';
import { ItSidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ItErrorPageComponent } from './components/utils/error-page/error-page.component';
import { ItIconComponent } from './components/utils/icon/icon.component';
import { ItLanguageSwitcherComponent } from './components/utils/language-switcher/language-switcher.component';
import { ItDateAgoPipe } from './pipes/date-ago.pipe';
import { ItDurationPipe } from './pipes/duration.pipe';
import { ItMarkMatchingTextPipe } from './pipes/mark-matching-text.pipe';
import { ItTimelineModule } from './components/core/timeline/timeline.module';

/**
 * Core components
 */
const core = [
  ItAccordionComponent,
  ItAlertComponent,
  ItAvatarModule,
  ItBadgeDirective,
  ItButtonDirective,
  ItCalloutComponent,
  ItCardComponent,
  ItCarouselModule,
  ItChipComponent,
  ItCollapseComponent,
  ItDimmerModule,
  ItDropdownModule,
  ItForwardDirective,
  ItLinkComponent,
  ItListModule,
  ItModalComponent,
  ItNotificationsComponent,
  ItPaginationComponent,
  ItPopoverDirective,
  ItProgressBarComponent,
  ItProgressButtonComponent,
  ItSpinnerComponent,
  ItSteppersModule,
  ItTabModule,
  ItTableModule,
  ItTooltipDirective,
  ItTimelineModule,
];

/**
 * Navigation Components
 */
const navigation = [
  ItBackButtonComponent,
  ItBackToTopComponent,
  ItBreadcrumbsModule,
  ItHeaderComponent,
  ItNavBarModule,
  ItSidebarComponent,
  ItMegamenuComponent,
];

/**
 * Utils components
 */
const utils = [ItErrorPageComponent, ItIconComponent, ItLanguageSwitcherComponent];

/**
 * Library pipes
 */
const pipes = [ItDateAgoPipe, ItDurationPipe, ItMarkMatchingTextPipe];

const components = [
  ...core, // Core components
  ItFormModule, // Form components
  ...navigation, // Navigation Components
  ...utils, // Utils components
  ...pipes, // Library pipes
];

@NgModule({
  imports: components,
  exports: components,
})
export class DesignAngularKitModule {
  public static forRoot(config?: DesignAngularKitConfig): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
      providers: [provideDesignAngularKit(config)],
    };
  }

  public static forChild(): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
    };
  }
}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItAccordionComponent"},{name:"ItAlertComponent"},{name:"ItAvatarModule"},{name:"ItBackButtonComponent"},{name:"ItBackToTopComponent"},{name:"ItBadgeDirective"},{name:"ItBreadcrumbsModule"},{name:"ItButtonDirective"},{name:"ItCalloutComponent"},{name:"ItCardComponent"},{name:"ItCarouselModule"},{name:"ItChipComponent"},{name:"ItCollapseComponent"},{name:"ItDateAgoPipe"},{name:"ItDimmerModule"},{name:"ItDropdownModule"},{name:"ItDurationPipe"},{name:"ItErrorPageComponent"},{name:"ItFormModule"},{name:"ItForwardDirective"},{name:"ItHeaderComponent"},{name:"ItIconComponent"},{name:"ItLanguageSwitcherComponent"},{name:"ItLinkComponent"},{name:"ItListModule"},{name:"ItMarkMatchingTextPipe"},{name:"ItMegamenuComponent"},{name:"ItModalComponent"},{name:"ItNavBarModule"},{name:"ItNotificationsComponent"},{name:"ItPaginationComponent"},{name:"ItPopoverDirective"},{name:"ItProgressBarComponent"},{name:"ItProgressButtonComponent"},{name:"ItSidebarComponent"},{name:"ItSpinnerComponent"},{name:"ItSteppersModule"},{name:"ItTabModule"},{name:"ItTableModule"},{name:"ItTimelineModule"},{name:"ItTooltipDirective"}]},{type:"exports",elements:[{name:"ItAccordionComponent"},{name:"ItAlertComponent"},{name:"ItAvatarModule"},{name:"ItBackButtonComponent"},{name:"ItBackToTopComponent"},{name:"ItBadgeDirective"},{name:"ItBreadcrumbsModule"},{name:"ItButtonDirective"},{name:"ItCalloutComponent"},{name:"ItCardComponent"},{name:"ItCarouselModule"},{name:"ItChipComponent"},{name:"ItCollapseComponent"},{name:"ItDateAgoPipe"},{name:"ItDimmerModule"},{name:"ItDropdownModule"},{name:"ItDurationPipe"},{name:"ItErrorPageComponent"},{name:"ItFormModule"},{name:"ItForwardDirective"},{name:"ItHeaderComponent"},{name:"ItIconComponent"},{name:"ItLanguageSwitcherComponent"},{name:"ItLinkComponent"},{name:"ItListModule"},{name:"ItMarkMatchingTextPipe"},{name:"ItMegamenuComponent"},{name:"ItModalComponent"},{name:"ItNavBarModule"},{name:"ItNotificationsComponent"},{name:"ItPaginationComponent"},{name:"ItPopoverDirective"},{name:"ItProgressBarComponent"},{name:"ItProgressButtonComponent"},{name:"ItSidebarComponent"},{name:"ItSpinnerComponent"},{name:"ItSteppersModule"},{name:"ItTabModule"},{name:"ItTableModule"},{name:"ItTimelineModule"},{name:"ItTooltipDirective"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItAvatarModule",id:"module-ItAvatarModule-8a39e2e33090e260b893b5c8e8267f974491725df93cf9d5d78b28949d672361ecb0df8cb3c80d973cf6448b4766c73f45ff4fea889d96da09a7cca4471d328e",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItAvatarGroupComponent, ItAvatarGroupItemComponent } from './avatar-group/avatar-group.component';
import { ItAvatarDropdownComponent, ItAvatarDropdownItemComponent } from './avatar-dropdown/avatar-dropdown.component';
import { ItAvatarDirective } from './avatar.directive';

const avatarComponents = [
  ItAvatarGroupItemComponent,
  ItAvatarGroupComponent,
  ItAvatarDropdownComponent,
  ItAvatarDropdownItemComponent,
  ItAvatarDirective,
];

@NgModule({
  imports: avatarComponents,
  exports: avatarComponents,
})
export class ItAvatarModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItAvatarDirective"},{name:"ItAvatarDropdownComponent"},{name:"ItAvatarDropdownItemComponent"},{name:"ItAvatarGroupComponent"},{name:"ItAvatarGroupItemComponent"}]},{type:"exports",elements:[{name:"ItAvatarDirective"},{name:"ItAvatarDropdownComponent"},{name:"ItAvatarDropdownItemComponent"},{name:"ItAvatarGroupComponent"},{name:"ItAvatarGroupItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItBreadcrumbsModule",id:"module-ItBreadcrumbsModule-eabf9408d23c870ebaed5835d24e670d5ed5dd713b098c283375408ab94d9ede276d0385ae026e1b64cc4301541d566a967ed814f76c1fce7cd342a98cf24a3b",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumbs.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ItBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

const breadcrumb = [ItBreadcrumbComponent, ItBreadcrumbItemComponent];

@NgModule({
  imports: breadcrumb,
  exports: breadcrumb,
})
export class ItBreadcrumbsModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItBreadcrumbComponent"},{name:"ItBreadcrumbItemComponent"}]},{type:"exports",elements:[{name:"ItBreadcrumbComponent"},{name:"ItBreadcrumbItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItCarouselModule",id:"module-ItCarouselModule-0038285c0f2656e43c7862721e51bb594cff51e53b4a68a050a258ef4134513f1adebb74c15d528d863e5296a483f87ae0fba4504485901117589c014664d50f",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/carousel/carousel.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItCarouselComponent } from './carousel/carousel.component';
import { ItCarouselItemComponent } from './carousel-item/carousel-item.component';

const carouselComponents = [ItCarouselComponent, ItCarouselItemComponent];

@NgModule({
  imports: carouselComponents,
  exports: carouselComponents,
})
export class ItCarouselModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItCarouselComponent"},{name:"ItCarouselItemComponent"}]},{type:"exports",elements:[{name:"ItCarouselComponent"},{name:"ItCarouselItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItDimmerModule",id:"module-ItDimmerModule-4f1db33fd5237f4c254b4b3ab28b417dc2d51ca04e190236273ef1dab1116c6209aefc53672a260ec72d52d10f84eb31bb1acb158fac12c39ad5c07952aa3b71",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItDimmerComponent } from './dimmer.component';
import { ItDimmerIconComponent } from './dimmer-icon/dimmer-icon.component';
import { ItDimmerButtonsComponent } from './dimmer-buttons/dimmer-buttons.component';

const dimmerComponents = [ItDimmerComponent, ItDimmerIconComponent, ItDimmerButtonsComponent];

@NgModule({
  imports: dimmerComponents,
  exports: dimmerComponents,
})
export class ItDimmerModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItDimmerButtonsComponent"},{name:"ItDimmerComponent"},{name:"ItDimmerIconComponent"}]},{type:"exports",elements:[{name:"ItDimmerButtonsComponent"},{name:"ItDimmerComponent"},{name:"ItDimmerIconComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItDropdownModule",id:"module-ItDropdownModule-e5ead24bbc96884a2767ea384582b2db4c2100cf6ef9c44f42fc7d0a37b107bfb6034c2f21ec9ce85686bcceac1994408e6931e38c6ffd1ae3b0bb845158c54d",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItDropdownComponent } from './dropdown/dropdown.component';
import { ItDropdownItemComponent } from './dropdown-item/dropdown-item.component';

const dropdownComponents = [ItDropdownComponent, ItDropdownItemComponent];

@NgModule({
  imports: dropdownComponents,
  exports: dropdownComponents,
})
export class ItDropdownModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItDropdownComponent"},{name:"ItDropdownItemComponent"}]},{type:"exports",elements:[{name:"ItDropdownComponent"},{name:"ItDropdownItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItFormModule",id:"module-ItFormModule-5cb05731e9e5898858c0087ee1328f9e1e70708bb7d23218ccc8354efa188710429f6cf3830842823d678ec29a6f161af80c51e7e88a67d9d167f91fb1c52c36",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/form/form.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItCheckboxComponent } from './checkbox/checkbox.component';
import { ItInputComponent } from './input/input.component';
import { ItPasswordInputComponent } from './password-input/password-input.component';
import { ItRadioButtonComponent } from './radio-button/radio-button.component';
import { ItRangeComponent } from './range/range.component';
import { ItRatingComponent } from './rating/rating.component';
import { ItSelectComponent } from './select/select.component';
import { ItTextareaComponent } from './textarea/textarea.component';
import { ItUploadDragDropComponent } from './upload-drag-drop/upload-drag-drop.component';
import { ItUploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { ItAutocompleteComponent } from './autocomplete/autocomplete.component';

const formComponents = [
  ItAutocompleteComponent,
  ItCheckboxComponent,
  ItInputComponent,
  ItPasswordInputComponent,
  ItRadioButtonComponent,
  ItRangeComponent,
  ItRatingComponent,
  ItSelectComponent,
  ItTextareaComponent,
  ItUploadDragDropComponent,
  ItUploadFileListComponent,
];

@NgModule({
  imports: formComponents,
  exports: formComponents,
})
export class ItFormModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItAutocompleteComponent"},{name:"ItCheckboxComponent"},{name:"ItInputComponent"},{name:"ItPasswordInputComponent"},{name:"ItRadioButtonComponent"},{name:"ItRangeComponent"},{name:"ItRatingComponent"},{name:"ItSelectComponent"},{name:"ItTextareaComponent"},{name:"ItUploadDragDropComponent"},{name:"ItUploadFileListComponent"}]},{type:"exports",elements:[{name:"ItAutocompleteComponent"},{name:"ItCheckboxComponent"},{name:"ItInputComponent"},{name:"ItPasswordInputComponent"},{name:"ItRadioButtonComponent"},{name:"ItRangeComponent"},{name:"ItRatingComponent"},{name:"ItSelectComponent"},{name:"ItTextareaComponent"},{name:"ItUploadDragDropComponent"},{name:"ItUploadFileListComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItListModule",id:"module-ItListModule-8aa1f595ad8b9ad7c004bcc7fc0f184cae5f188a87bc0ffd1233073a2a0293a65f4bb5c20b2b92b44730113bdbf555c53e8dd21144475046fbcc5c441815f64d",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/list/list.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItListComponent } from './list/list.component';
import { ItListItemComponent } from './list-item/list-item.component';

const listComponents = [ItListComponent, ItListItemComponent];

@NgModule({
  imports: listComponents,
  exports: listComponents,
})
export class ItListModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItListComponent"},{name:"ItListItemComponent"}]},{type:"exports",elements:[{name:"ItListComponent"},{name:"ItListItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItNavBarModule",id:"module-ItNavBarModule-33994a3527e3f4a26be704b6f38526243f0a9537163237bc391e1406d2b35ab153b7e810c1828c10e68c850e7f781d38f02a9762e794d23e03688b0ff62edfdf",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItNavBarComponent } from './navbar/navbar.component';
import { ItNavBarItemComponent } from './navbar-item/navbar-item.component';

const navbarComponents = [ItNavBarComponent, ItNavBarItemComponent];

@NgModule({
  imports: navbarComponents,
  exports: navbarComponents,
})
export class ItNavBarModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItNavBarComponent"},{name:"ItNavBarItemComponent"}]},{type:"exports",elements:[{name:"ItNavBarComponent"},{name:"ItNavBarItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItSteppersModule",id:"module-ItSteppersModule-969eeaf5c564c6007fbfa2965eb123f0af1138a99a77a44b334274c8d5409d22d0ced5805a2813eb121269b381cc611804d7f1341dbda03b1ad47fd11e930cdb",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/steppers/steppers.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItSteppersContainerComponent } from './steppers-container/steppers-container.component';
import { ItSteppersItemComponent } from './steppers-item/steppers-item.component';

const steppersComponents = [ItSteppersContainerComponent, ItSteppersItemComponent];

@NgModule({
  imports: steppersComponents,
  exports: steppersComponents,
})
export class ItSteppersModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItSteppersContainerComponent"},{name:"ItSteppersItemComponent"}]},{type:"exports",elements:[{name:"ItSteppersContainerComponent"},{name:"ItSteppersItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItTableModule",id:"module-ItTableModule-5b302532f99555981c45bdf3a2c163e1a06b6dac58c70de67da56fa06fd7c70292607ac74ffc64fed5ab3b036768b123ab2811cf2032b9b9fcfea7bc55efc031",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/table/table.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItTableComponent } from './table.component';
import { ItSortDirective } from './sort/sort.directive';
import { ItSortHeaderComponent } from './sort/sort-header/sort-header.component';

const tableComponents = [ItTableComponent, ItSortDirective, ItSortHeaderComponent];

@NgModule({
  imports: tableComponents,
  exports: tableComponents,
})
export class ItTableModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItSortDirective"},{name:"ItSortHeaderComponent"},{name:"ItTableComponent"}]},{type:"exports",elements:[{name:"ItSortDirective"},{name:"ItSortHeaderComponent"},{name:"ItTableComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItTabModule",id:"module-ItTabModule-7402caefaed4361da863e4bcddddf02d45a00f3294d7fdc33fbed043d80a176ca3f602c4e26b4c8fc91f7927207925d79e7f808ac2b0b4a4ce825de2fb2f1944",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/tab/tab.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItTabContainerComponent } from './tab-container/tab-container.component';
import { ItTabItemComponent } from './tab-item/tab-item.component';

const tabComponents = [ItTabContainerComponent, ItTabItemComponent];

@NgModule({
  imports: tabComponents,
  exports: tabComponents,
})
export class ItTabModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItTabContainerComponent"},{name:"ItTabItemComponent"}]},{type:"exports",elements:[{name:"ItTabContainerComponent"},{name:"ItTabItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]},{name:"ItTimelineModule",id:"module-ItTimelineModule-8ed9b9bd667a2455bbd21626ac4e381571ed71625281f84b203d5ba9f9feaee03e5fef12a5fd393f3b64ea1515da1f4eedc72f27270a572ff1303705f3768877",description:"",deprecationMessage:"",deprecated:!1,file:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.module.ts",methods:[],sourceCode:`import { NgModule } from '@angular/core';
import { ItTimelineComponent } from './timeline.component';
import { ItTimelineItemComponent } from './timeline-item/timeline-item.component';

const timelineComponents = [ItTimelineComponent, ItTimelineItemComponent];

@NgModule({
  imports: timelineComponents,
  exports: timelineComponents,
})
export class ItTimelineModule {}
`,children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"ItTimelineComponent"},{name:"ItTimelineItemComponent"}]},{type:"exports",elements:[{name:"ItTimelineComponent"},{name:"ItTimelineItemComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:{variables:[{name:"avatarComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAvatarGroupItemComponent,
  ItAvatarGroupComponent,
  ItAvatarDropdownComponent,
  ItAvatarDropdownItemComponent,
  ItAvatarDirective,
]`},{name:"breadcrumb",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumbs.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItBreadcrumbComponent, ItBreadcrumbItemComponent]"},{name:"CAP_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[0-9]{5}$/",rawdescription:"Italian CAP Regex",description:`<p>Italian CAP Regex</p>
`},{name:"carouselComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/carousel/carousel.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItCarouselComponent, ItCarouselItemComponent]"},{name:"components",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ...core, // Core components
  ItFormModule, // Form components
  ...navigation, // Navigation Components
  ...utils, // Utils components
  ...pipes, // Library pipes
]`},{name:"core",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAccordionComponent,
  ItAlertComponent,
  ItAvatarModule,
  ItBadgeDirective,
  ItButtonDirective,
  ItCalloutComponent,
  ItCardComponent,
  ItCarouselModule,
  ItChipComponent,
  ItCollapseComponent,
  ItDimmerModule,
  ItDropdownModule,
  ItForwardDirective,
  ItLinkComponent,
  ItListModule,
  ItModalComponent,
  ItNotificationsComponent,
  ItPaginationComponent,
  ItPopoverDirective,
  ItProgressBarComponent,
  ItProgressButtonComponent,
  ItSpinnerComponent,
  ItSteppersModule,
  ItTabModule,
  ItTableModule,
  ItTooltipDirective,
  ItTimelineModule,
]`,rawdescription:"Core components",description:`<p>Core components</p>
`},{name:"dimmerComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDimmerComponent, ItDimmerIconComponent, ItDimmerButtonsComponent]"},{name:"dropdownComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDropdownComponent, ItDropdownItemComponent]"},{name:"EMAIL_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/",rawdescription:`General Email Regex (RFC 5322 Official Standard)
http://emailregex.com/`,description:`<p>General Email Regex (RFC 5322 Official Standard)
<a href="http://emailregex.com/">http://emailregex.com/</a></p>
`},{name:"formComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/form/form.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAutocompleteComponent,
  ItCheckboxComponent,
  ItInputComponent,
  ItPasswordInputComponent,
  ItRadioButtonComponent,
  ItRangeComponent,
  ItRatingComponent,
  ItSelectComponent,
  ItTextareaComponent,
  ItUploadDragDropComponent,
  ItUploadFileListComponent,
]`},{name:"IBAN_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^(?:(?:IT|SM)\\d{2}[A-Z]\\d{22}|CY\\d{2}[A-Z]\\d{23}|NL\\d{2}[A-Z]{4}\\d{10}|LV\\d{2}[A-Z]{4}\\d{13}|(?:BG|BH|GB|IE)\\d{2}[A-Z]{4}\\d{14}|GI\\d{2}[A-Z]{4}\\d{15}|RO\\d{2}[A-Z]{4}\\d{16}|KW\\d{2}[A-Z]{4}\\d{22}|MT\\d{2}[A-Z]{4}\\d{23}|NO\\d{13}|(?:DK|FI|GL|FO)\\d{16}|MK\\d{17}|(?:AT|EE|KZ|LU|XK)\\d{18}|(?:BA|HR|LI|CH|CR)\\d{19}|(?:GE|DE|LT|ME|RS)\\d{20}|IL\\d{21}|(?:AD|CZ|ES|MD|SA)\\d{22}|PT\\d{23}|(?:BE|IS)\\d{24}|(?:FR|MR|MC)\\d{25}|(?:AL|DO|LB|PL)\\d{26}|(?:AZ|HU)\\d{27}|(?:GR|MU)\\d{28})$/i",rawdescription:`IBAN Regex
https://blog.marketto.it/en/2018/06/validate-any-country-iban/`,description:`<p>IBAN Regex
<a href="https://blog.marketto.it/en/2018/06/validate-any-country-iban/">https://blog.marketto.it/en/2018/06/validate-any-country-iban/</a></p>
`},{name:"IconNameArray",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:`[
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-triangle',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-triangle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-right-triangle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-triangle',
  'ban',
  'bookmark',
  'box',
  'burger',
  'calendar',
  'camera',
  'card',
  'chart-line',
  'check',
  'check-circle',
  'chevron-left',
  'chevron-right',
  'clip',
  'clock',
  'close',
  'close-big',
  'close-circle',
  'code-circle',
  'comment',
  'copy',
  'delete',
  'download',
  'error',
  'exchange-circle',
  'expand',
  'external-link',
  'flag',
  'folder',
  'fullscreen',
  'funnel',
  'hearing',
  'help',
  'help-circle',
  'horn',
  'inbox',
  'info-circle',
  'key',
  'link',
  'list',
  'locked',
  'logout',
  'mail',
  'mail-open',
  'map-marker',
  'map-marker-circle',
  'map-marker-minus',
  'map-marker-plus',
  'maximize',
  'maximize-alt',
  'minimize',
  'minus',
  'minus-circle',
  'more-actions',
  'more-items',
  'note',
  'pa',
  'password-invisible',
  'password-visible',
  'pencil',
  'piattaforme',
  'pin',
  'plug',
  'plus',
  'plus-circle',
  'presentation',
  'print',
  'refresh',
  'restore',
  'rss',
  'rss-square',
  'search',
  'settings',
  'share',
  'software',
  'star-full',
  'star-outline',
  'telephone',
  'tool',
  'unlocked',
  'upload',
  'user',
  'video',
  'warning',
  'warning-circle',
  'wifi',
  'zoom-in',
  'zoom-out',

  // Files
  'file',
  'files',
  'file-audio',
  'file-compressed',
  'file-csv',
  'file-json',
  'file-odp',
  'file-ods',
  'file-odt',
  'file-pdf',
  'file-pdf-ext',
  'file-sheet',
  'file-slides',
  'file-ppt',
  'file-txt',
  'file-video',
  'file-xml',

  // Platforms
  'behance',
  'facebook',
  'facebook-square',
  'figma',
  'figma-square',
  'flickr',
  'flickr-square',
  'github',
  'instagram',
  'linkedin',
  'linkedin-square',
  'mastodon',
  'mastodon-square',
  'medium',
  'medium-square',
  'moodle',
  'moodle-square',
  'pinterest',
  'pinterest-square',
  'quora',
  'quora-square',
  'reddit',
  'reddit-square',
  'slack',
  'slack-square',
  'snapchat',
  'snapchat-square',
  'stackexchange',
  'stackexchange-square',
  'stackoverflow',
  'stackoverflow-square',
  'telegram',
  'threads',
  'threads-square',
  'tiktok',
  'tiktok-square',
  'twitter',
  'twitter-square',
  'vimeo',
  'vimeo-square',
  'whatsapp',
  'whatsapp-square',
  'youtube',
  'google',

  // Extra
  'designers-italia',
  'team-digitale',
] as const`},{name:"IT_ASSET_BASE_PATH",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<string>('it-asset-base-path')",rawdescription:"The bootstrap-italia asset folder path",description:`<p>The bootstrap-italia asset folder path</p>
`},{name:"IT_SORT_DEFAULT_OPTIONS",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<ItSortDefaultOptions>('IT_SORT_DEFAULT_OPTIONS')",rawdescription:"Injection token to be used to override the default options for `it-sort`.",description:`<p>Injection token to be used to override the default options for <code>it-sort</code>.</p>
`},{name:"ITALIAN_TAX_CODE_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/i",rawdescription:"The italian tax code Regex (Codice Fiscale)",description:`<p>The italian tax code Regex (Codice Fiscale)</p>
`},{name:"listComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/list/list.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItListComponent, ItListItemComponent]"},{name:"navbarComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItNavBarComponent, ItNavBarItemComponent]"},{name:"navigation",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItBackButtonComponent,
  ItBackToTopComponent,
  ItBreadcrumbsModule,
  ItHeaderComponent,
  ItNavBarModule,
  ItSidebarComponent,
  ItMegamenuComponent,
]`,rawdescription:"Navigation Components",description:`<p>Navigation Components</p>
`},{name:"PHONE_NUMBER_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$/",rawdescription:"Phone number Regex",description:`<p>Phone number Regex</p>
`},{name:"pipes",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDateAgoPipe, ItDurationPipe, ItMarkMatchingTextPipe]",rawdescription:"Library pipes",description:`<p>Library pipes</p>
`},{name:"PLATE_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[A-Za-z]{2}\\d{3}[A-Za-z]{2}$/i",rawdescription:"Italian Plate Regex",description:`<p>Italian Plate Regex</p>
`},{name:"steppersComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/steppers/steppers.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItSteppersContainerComponent, ItSteppersItemComponent]"},{name:"tabComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/tab/tab.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTabContainerComponent, ItTabItemComponent]"},{name:"tableComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/table/table.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTableComponent, ItSortDirective, ItSortHeaderComponent]"},{name:"timelineComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTimelineComponent, ItTimelineItemComponent]"},{name:"URL_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})/",rawdescription:"URL Regex",description:`<p>URL Regex</p>
`},{name:"utils",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItErrorPageComponent, ItIconComponent, ItLanguageSwitcherComponent]",rawdescription:"Utils components",description:`<p>Utils components</p>
`},{name:"VAT_NUMBER_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[0-9]{11}$/",rawdescription:"The VAT number Regex (Partita iva)",description:`<p>The VAT number Regex (Partita iva)</p>
`}],functions:[{name:"getSortDirectionCycle",file:"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Returns the sort direction cycle to use given the provided parameters of order and clear.</p>
`,args:[{name:"start",type:"SortDirection",deprecated:!1,deprecationMessage:""},{name:"disableClear",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"Array<SortDirection | undefined>",jsdoctags:[{name:"start",type:"SortDirection",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"disableClear",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"inputToBoolean",file:"projects/design-angular-kit/src/lib/utils/coercion.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Transforms a value (typically a string) to a boolean.
Intended to be used as a transform function of an input.</p>
`,args:[{name:"value",type:"BooleanInput",deprecated:!1,deprecationMessage:""}],returnType:"boolean",jsdoctags:[{name:{pos:372,end:377,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"BooleanInput",deprecated:!1,deprecationMessage:"",tagName:{pos:351,end:356,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>Value to be transformed.</p>
`,typeExpression:{pos:357,end:371,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:316,type:{pos:358,end:370,flags:16777216,modifierFlagsCache:0,transformFlags:1,kind:183,typeName:{pos:358,end:370,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"BooleanInput"}}}}]},{name:"provideDesignAngularKit",file:"projects/design-angular-kit/src/lib/provide-design-angular-kit.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Configures DesignAngularKit library</p>
`,args:[{name:"config",type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0}],returnType:"EnvironmentProviders",jsdoctags:[{name:{pos:640,end:646,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"config"},type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:634,end:639,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the DesignAngularKit config</p>
`}]}],typealiases:[{name:"AlertColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "info" | "success" | "warning" | "danger"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"BadgeColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "warning" | "danger"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"BooleanInput",ctype:"miscellaneous",subtype:"typealias",rawtype:'"false" | "true" | boolean | undefined',file:"projects/design-angular-kit/src/lib/utils/coercion.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "outline-primary" | "secondary" | "outline-secondary" | "success" | "outline-success" | "danger" | "outline-danger" | "warning" | "outline-warning" | "info" | "outline-info" | "light" | "outline-light" | "dark" | "outline-dark" | "link"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonSize",ctype:"miscellaneous",subtype:"typealias",rawtype:'"lg" | "sm" | "xs"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"submit" | "button"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CalloutAppearance",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "highlight" | "more"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CalloutColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"success" | "warning" | "danger" | "important" | "note"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CarouselType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "three-cols" | "three-cols-arrow-visible"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ChipColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "danger" | "warning"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"DateAgoPipeInterval",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "week" | "day" | "hour" | "minute" | "second"',file:"projects/design-angular-kit/src/lib/pipes/date-ago.pipe.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"DimmerColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'string | "dimmer-primary"',file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.component.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"DropdownDirection",ctype:"miscellaneous",subtype:"typealias",rawtype:'"dropup" | "dropend" | "dropstart"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ElementPlacement",ctype:"miscellaneous",subtype:"typealias",rawtype:'"top" | "bottom" | "left" | "right"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"IconColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "warning" | "danger" | "light" | "white"',file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"IconName",ctype:"miscellaneous",subtype:"typealias",rawtype:"",file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:199},{name:"IconSize",ctype:"miscellaneous",subtype:"typealias",rawtype:'"xs" | "sm" | "lg" | "xl"',file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"InputControlType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"text" | "email" | "number" | "date" | "time" | "tel" | "color" | "url"',file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ItDurationPipeType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "week" | "day" | "hour" | "minute" | "second"',file:"projects/design-angular-kit/src/lib/pipes/duration.pipe.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ProgressBarColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "success" | "warning" | "danger" | "info"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SortDirection",ctype:"miscellaneous",subtype:"typealias",rawtype:'"asc" | "desc" | undefined',file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SortHeaderArrowPosition",ctype:"miscellaneous",subtype:"typealias",rawtype:'"before" | "after"',file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",description:`<p>Position of the arrow that displays when sorted.</p>
`,kind:192},{name:"TableColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TableHeadColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"light" | "dark"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TableResponsive",ctype:"miscellaneous",subtype:"typealias",rawtype:'"responsive" | "responsive-sm" | "responsive-md" | "responsive-lg" | "responsive-xl" | "responsive-xxl"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TimelinePINType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "evidence" | "now"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"VerticalAlignment",ctype:"miscellaneous",subtype:"typealias",rawtype:'"align-baseline" | "align-top" | "align-middle" | "align-bottom" | "align-text-bottom" | "align-text-top"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],enumerations:[{name:"ColorsEnum",childs:[{name:"primary",deprecated:!1,deprecationMessage:"",value:"primary"},{name:"secondary",deprecated:!1,deprecationMessage:"",value:"secondary"},{name:"success",deprecated:!1,deprecationMessage:"",value:"success"},{name:"danger",deprecated:!1,deprecationMessage:"",value:"danger"},{name:"warning",deprecated:!1,deprecationMessage:"",value:"warning"},{name:"green",deprecated:!1,deprecationMessage:"",value:"green"},{name:"orange",deprecated:!1,deprecationMessage:"",value:"orange"},{name:"red",deprecated:!1,deprecationMessage:"",value:"red"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/enums/colors.enums.ts"},{name:"NotificationPosition",childs:[{name:"Top",deprecated:!1,deprecationMessage:"",value:"top-fix mt-3"},{name:"Bottom",deprecated:!1,deprecationMessage:"",value:"bottom-fix mb-3"},{name:"Left",deprecated:!1,deprecationMessage:"",value:"left-fix ms-3"},{name:"Right",deprecated:!1,deprecationMessage:"",value:"right-fix me-3"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/interfaces/core.ts"},{name:"NotificationType",childs:[{name:"Standard",deprecated:!1,deprecationMessage:"",value:"standard"},{name:"Success",deprecated:!1,deprecationMessage:"",value:"success"},{name:"Error",deprecated:!1,deprecationMessage:"",value:"error"},{name:"Info",deprecated:!1,deprecationMessage:"",value:"info"},{name:"Warning",deprecated:!1,deprecationMessage:"",value:"warning"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/interfaces/core.ts"},{name:"SizesEnum",childs:[{name:"xs",deprecated:!1,deprecationMessage:"",value:"size-xs"},{name:"sm",deprecated:!1,deprecationMessage:"",value:"size-sm"},{name:"lg",deprecated:!1,deprecationMessage:"",value:"size-lg"},{name:"xl",deprecated:!1,deprecationMessage:"",value:"size-xl"},{name:"xxl",deprecated:!1,deprecationMessage:"",value:"size-xxl"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/enums/sizes.enum.ts"}],groupedVariables:{"projects/design-angular-kit/src/lib/components/core/avatar/avatar.module.ts":[{name:"avatarComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAvatarGroupItemComponent,
  ItAvatarGroupComponent,
  ItAvatarDropdownComponent,
  ItAvatarDropdownItemComponent,
  ItAvatarDirective,
]`}],"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumbs.module.ts":[{name:"breadcrumb",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumbs.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItBreadcrumbComponent, ItBreadcrumbItemComponent]"}],"projects/design-angular-kit/src/lib/utils/regex.ts":[{name:"CAP_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[0-9]{5}$/",rawdescription:"Italian CAP Regex",description:`<p>Italian CAP Regex</p>
`},{name:"EMAIL_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/",rawdescription:`General Email Regex (RFC 5322 Official Standard)
http://emailregex.com/`,description:`<p>General Email Regex (RFC 5322 Official Standard)
<a href="http://emailregex.com/">http://emailregex.com/</a></p>
`},{name:"IBAN_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^(?:(?:IT|SM)\\d{2}[A-Z]\\d{22}|CY\\d{2}[A-Z]\\d{23}|NL\\d{2}[A-Z]{4}\\d{10}|LV\\d{2}[A-Z]{4}\\d{13}|(?:BG|BH|GB|IE)\\d{2}[A-Z]{4}\\d{14}|GI\\d{2}[A-Z]{4}\\d{15}|RO\\d{2}[A-Z]{4}\\d{16}|KW\\d{2}[A-Z]{4}\\d{22}|MT\\d{2}[A-Z]{4}\\d{23}|NO\\d{13}|(?:DK|FI|GL|FO)\\d{16}|MK\\d{17}|(?:AT|EE|KZ|LU|XK)\\d{18}|(?:BA|HR|LI|CH|CR)\\d{19}|(?:GE|DE|LT|ME|RS)\\d{20}|IL\\d{21}|(?:AD|CZ|ES|MD|SA)\\d{22}|PT\\d{23}|(?:BE|IS)\\d{24}|(?:FR|MR|MC)\\d{25}|(?:AL|DO|LB|PL)\\d{26}|(?:AZ|HU)\\d{27}|(?:GR|MU)\\d{28})$/i",rawdescription:`IBAN Regex
https://blog.marketto.it/en/2018/06/validate-any-country-iban/`,description:`<p>IBAN Regex
<a href="https://blog.marketto.it/en/2018/06/validate-any-country-iban/">https://blog.marketto.it/en/2018/06/validate-any-country-iban/</a></p>
`},{name:"ITALIAN_TAX_CODE_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/i",rawdescription:"The italian tax code Regex (Codice Fiscale)",description:`<p>The italian tax code Regex (Codice Fiscale)</p>
`},{name:"PHONE_NUMBER_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$/",rawdescription:"Phone number Regex",description:`<p>Phone number Regex</p>
`},{name:"PLATE_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[A-Za-z]{2}\\d{3}[A-Za-z]{2}$/i",rawdescription:"Italian Plate Regex",description:`<p>Italian Plate Regex</p>
`},{name:"URL_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})/",rawdescription:"URL Regex",description:`<p>URL Regex</p>
`},{name:"VAT_NUMBER_REGEX",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/utils/regex.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"/^[0-9]{11}$/",rawdescription:"The VAT number Regex (Partita iva)",description:`<p>The VAT number Regex (Partita iva)</p>
`}],"projects/design-angular-kit/src/lib/components/core/carousel/carousel.module.ts":[{name:"carouselComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/carousel/carousel.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItCarouselComponent, ItCarouselItemComponent]"}],"projects/design-angular-kit/src/lib/design-angular-kit.module.ts":[{name:"components",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ...core, // Core components
  ItFormModule, // Form components
  ...navigation, // Navigation Components
  ...utils, // Utils components
  ...pipes, // Library pipes
]`},{name:"core",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAccordionComponent,
  ItAlertComponent,
  ItAvatarModule,
  ItBadgeDirective,
  ItButtonDirective,
  ItCalloutComponent,
  ItCardComponent,
  ItCarouselModule,
  ItChipComponent,
  ItCollapseComponent,
  ItDimmerModule,
  ItDropdownModule,
  ItForwardDirective,
  ItLinkComponent,
  ItListModule,
  ItModalComponent,
  ItNotificationsComponent,
  ItPaginationComponent,
  ItPopoverDirective,
  ItProgressBarComponent,
  ItProgressButtonComponent,
  ItSpinnerComponent,
  ItSteppersModule,
  ItTabModule,
  ItTableModule,
  ItTooltipDirective,
  ItTimelineModule,
]`,rawdescription:"Core components",description:`<p>Core components</p>
`},{name:"navigation",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItBackButtonComponent,
  ItBackToTopComponent,
  ItBreadcrumbsModule,
  ItHeaderComponent,
  ItNavBarModule,
  ItSidebarComponent,
  ItMegamenuComponent,
]`,rawdescription:"Navigation Components",description:`<p>Navigation Components</p>
`},{name:"pipes",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDateAgoPipe, ItDurationPipe, ItMarkMatchingTextPipe]",rawdescription:"Library pipes",description:`<p>Library pipes</p>
`},{name:"utils",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItErrorPageComponent, ItIconComponent, ItLanguageSwitcherComponent]",rawdescription:"Utils components",description:`<p>Utils components</p>
`}],"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.module.ts":[{name:"dimmerComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDimmerComponent, ItDimmerIconComponent, ItDimmerButtonsComponent]"}],"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown.module.ts":[{name:"dropdownComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItDropdownComponent, ItDropdownItemComponent]"}],"projects/design-angular-kit/src/lib/components/form/form.module.ts":[{name:"formComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/form/form.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:`[
  ItAutocompleteComponent,
  ItCheckboxComponent,
  ItInputComponent,
  ItPasswordInputComponent,
  ItRadioButtonComponent,
  ItRangeComponent,
  ItRatingComponent,
  ItSelectComponent,
  ItTextareaComponent,
  ItUploadDragDropComponent,
  ItUploadFileListComponent,
]`}],"projects/design-angular-kit/src/lib/interfaces/icon.ts":[{name:"IconNameArray",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:`[
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-triangle',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-triangle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-right-triangle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-triangle',
  'ban',
  'bookmark',
  'box',
  'burger',
  'calendar',
  'camera',
  'card',
  'chart-line',
  'check',
  'check-circle',
  'chevron-left',
  'chevron-right',
  'clip',
  'clock',
  'close',
  'close-big',
  'close-circle',
  'code-circle',
  'comment',
  'copy',
  'delete',
  'download',
  'error',
  'exchange-circle',
  'expand',
  'external-link',
  'flag',
  'folder',
  'fullscreen',
  'funnel',
  'hearing',
  'help',
  'help-circle',
  'horn',
  'inbox',
  'info-circle',
  'key',
  'link',
  'list',
  'locked',
  'logout',
  'mail',
  'mail-open',
  'map-marker',
  'map-marker-circle',
  'map-marker-minus',
  'map-marker-plus',
  'maximize',
  'maximize-alt',
  'minimize',
  'minus',
  'minus-circle',
  'more-actions',
  'more-items',
  'note',
  'pa',
  'password-invisible',
  'password-visible',
  'pencil',
  'piattaforme',
  'pin',
  'plug',
  'plus',
  'plus-circle',
  'presentation',
  'print',
  'refresh',
  'restore',
  'rss',
  'rss-square',
  'search',
  'settings',
  'share',
  'software',
  'star-full',
  'star-outline',
  'telephone',
  'tool',
  'unlocked',
  'upload',
  'user',
  'video',
  'warning',
  'warning-circle',
  'wifi',
  'zoom-in',
  'zoom-out',

  // Files
  'file',
  'files',
  'file-audio',
  'file-compressed',
  'file-csv',
  'file-json',
  'file-odp',
  'file-ods',
  'file-odt',
  'file-pdf',
  'file-pdf-ext',
  'file-sheet',
  'file-slides',
  'file-ppt',
  'file-txt',
  'file-video',
  'file-xml',

  // Platforms
  'behance',
  'facebook',
  'facebook-square',
  'figma',
  'figma-square',
  'flickr',
  'flickr-square',
  'github',
  'instagram',
  'linkedin',
  'linkedin-square',
  'mastodon',
  'mastodon-square',
  'medium',
  'medium-square',
  'moodle',
  'moodle-square',
  'pinterest',
  'pinterest-square',
  'quora',
  'quora-square',
  'reddit',
  'reddit-square',
  'slack',
  'slack-square',
  'snapchat',
  'snapchat-square',
  'stackexchange',
  'stackexchange-square',
  'stackoverflow',
  'stackoverflow-square',
  'telegram',
  'threads',
  'threads-square',
  'tiktok',
  'tiktok-square',
  'twitter',
  'twitter-square',
  'vimeo',
  'vimeo-square',
  'whatsapp',
  'whatsapp-square',
  'youtube',
  'google',

  // Extra
  'designers-italia',
  'team-digitale',
] as const`}],"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts":[{name:"IT_ASSET_BASE_PATH",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<string>('it-asset-base-path')",rawdescription:"The bootstrap-italia asset folder path",description:`<p>The bootstrap-italia asset folder path</p>
`}],"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts":[{name:"IT_SORT_DEFAULT_OPTIONS",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",type:"",defaultValue:"new InjectionToken<ItSortDefaultOptions>('IT_SORT_DEFAULT_OPTIONS')",rawdescription:"Injection token to be used to override the default options for `it-sort`.",description:`<p>Injection token to be used to override the default options for <code>it-sort</code>.</p>
`}],"projects/design-angular-kit/src/lib/components/core/list/list.module.ts":[{name:"listComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/list/list.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItListComponent, ItListItemComponent]"}],"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar.module.ts":[{name:"navbarComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItNavBarComponent, ItNavBarItemComponent]"}],"projects/design-angular-kit/src/lib/components/core/steppers/steppers.module.ts":[{name:"steppersComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/steppers/steppers.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItSteppersContainerComponent, ItSteppersItemComponent]"}],"projects/design-angular-kit/src/lib/components/core/tab/tab.module.ts":[{name:"tabComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/tab/tab.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTabContainerComponent, ItTabItemComponent]"}],"projects/design-angular-kit/src/lib/components/core/table/table.module.ts":[{name:"tableComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/table/table.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTableComponent, ItSortDirective, ItSortHeaderComponent]"}],"projects/design-angular-kit/src/lib/components/core/timeline/timeline.module.ts":[{name:"timelineComponents",ctype:"miscellaneous",subtype:"variable",file:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.module.ts",deprecated:!1,deprecationMessage:"",type:"[]",defaultValue:"[ItTimelineComponent, ItTimelineItemComponent]"}]},groupedFunctions:{"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts":[{name:"getSortDirectionCycle",file:"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Returns the sort direction cycle to use given the provided parameters of order and clear.</p>
`,args:[{name:"start",type:"SortDirection",deprecated:!1,deprecationMessage:""},{name:"disableClear",type:"boolean",deprecated:!1,deprecationMessage:""}],returnType:"Array<SortDirection | undefined>",jsdoctags:[{name:"start",type:"SortDirection",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"disableClear",type:"boolean",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],"projects/design-angular-kit/src/lib/utils/coercion.ts":[{name:"inputToBoolean",file:"projects/design-angular-kit/src/lib/utils/coercion.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Transforms a value (typically a string) to a boolean.
Intended to be used as a transform function of an input.</p>
`,args:[{name:"value",type:"BooleanInput",deprecated:!1,deprecationMessage:""}],returnType:"boolean",jsdoctags:[{name:{pos:372,end:377,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"value"},type:"BooleanInput",deprecated:!1,deprecationMessage:"",tagName:{pos:351,end:356,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>Value to be transformed.</p>
`,typeExpression:{pos:357,end:371,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:316,type:{pos:358,end:370,flags:16777216,modifierFlagsCache:0,transformFlags:1,kind:183,typeName:{pos:358,end:370,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"BooleanInput"}}}}]}],"projects/design-angular-kit/src/lib/provide-design-angular-kit.ts":[{name:"provideDesignAngularKit",file:"projects/design-angular-kit/src/lib/provide-design-angular-kit.ts",ctype:"miscellaneous",subtype:"function",deprecated:!1,deprecationMessage:"",description:`<p>Configures DesignAngularKit library</p>
`,args:[{name:"config",type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0}],returnType:"EnvironmentProviders",jsdoctags:[{name:{pos:640,end:646,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"config"},type:"DesignAngularKitConfig",deprecated:!1,deprecationMessage:"",optional:!0,tagName:{pos:634,end:639,flags:16777216,modifierFlagsCache:0,transformFlags:0,kind:80,escapedText:"param"},comment:`<p>the DesignAngularKit config</p>
`}]}]},groupedEnumerations:{"projects/design-angular-kit/src/lib/enums/colors.enums.ts":[{name:"ColorsEnum",childs:[{name:"primary",deprecated:!1,deprecationMessage:"",value:"primary"},{name:"secondary",deprecated:!1,deprecationMessage:"",value:"secondary"},{name:"success",deprecated:!1,deprecationMessage:"",value:"success"},{name:"danger",deprecated:!1,deprecationMessage:"",value:"danger"},{name:"warning",deprecated:!1,deprecationMessage:"",value:"warning"},{name:"green",deprecated:!1,deprecationMessage:"",value:"green"},{name:"orange",deprecated:!1,deprecationMessage:"",value:"orange"},{name:"red",deprecated:!1,deprecationMessage:"",value:"red"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/enums/colors.enums.ts"}],"projects/design-angular-kit/src/lib/interfaces/core.ts":[{name:"NotificationPosition",childs:[{name:"Top",deprecated:!1,deprecationMessage:"",value:"top-fix mt-3"},{name:"Bottom",deprecated:!1,deprecationMessage:"",value:"bottom-fix mb-3"},{name:"Left",deprecated:!1,deprecationMessage:"",value:"left-fix ms-3"},{name:"Right",deprecated:!1,deprecationMessage:"",value:"right-fix me-3"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/interfaces/core.ts"},{name:"NotificationType",childs:[{name:"Standard",deprecated:!1,deprecationMessage:"",value:"standard"},{name:"Success",deprecated:!1,deprecationMessage:"",value:"success"},{name:"Error",deprecated:!1,deprecationMessage:"",value:"error"},{name:"Info",deprecated:!1,deprecationMessage:"",value:"info"},{name:"Warning",deprecated:!1,deprecationMessage:"",value:"warning"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/interfaces/core.ts"}],"projects/design-angular-kit/src/lib/enums/sizes.enum.ts":[{name:"SizesEnum",childs:[{name:"xs",deprecated:!1,deprecationMessage:"",value:"size-xs"},{name:"sm",deprecated:!1,deprecationMessage:"",value:"size-sm"},{name:"lg",deprecated:!1,deprecationMessage:"",value:"size-lg"},{name:"xl",deprecated:!1,deprecationMessage:"",value:"size-xl"},{name:"xxl",deprecated:!1,deprecationMessage:"",value:"size-xxl"}],ctype:"miscellaneous",subtype:"enum",deprecated:!1,deprecationMessage:"",description:"",file:"projects/design-angular-kit/src/lib/enums/sizes.enum.ts"}]},groupedTypeAliases:{"projects/design-angular-kit/src/lib/interfaces/core.ts":[{name:"AlertColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "info" | "success" | "warning" | "danger"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"BadgeColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "warning" | "danger"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "outline-primary" | "secondary" | "outline-secondary" | "success" | "outline-success" | "danger" | "outline-danger" | "warning" | "outline-warning" | "info" | "outline-info" | "light" | "outline-light" | "dark" | "outline-dark" | "link"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonSize",ctype:"miscellaneous",subtype:"typealias",rawtype:'"lg" | "sm" | "xs"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ButtonType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"submit" | "button"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CalloutAppearance",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "highlight" | "more"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CalloutColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"success" | "warning" | "danger" | "important" | "note"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"CarouselType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "three-cols" | "three-cols-arrow-visible"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ChipColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "danger" | "warning"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"DropdownDirection",ctype:"miscellaneous",subtype:"typealias",rawtype:'"dropup" | "dropend" | "dropstart"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ElementPlacement",ctype:"miscellaneous",subtype:"typealias",rawtype:'"top" | "bottom" | "left" | "right"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"ProgressBarColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "success" | "warning" | "danger" | "info"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TableColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TableHeadColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"light" | "dark"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TableResponsive",ctype:"miscellaneous",subtype:"typealias",rawtype:'"responsive" | "responsive-sm" | "responsive-md" | "responsive-lg" | "responsive-xl" | "responsive-xxl"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"TimelinePINType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"default" | "evidence" | "now"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"VerticalAlignment",ctype:"miscellaneous",subtype:"typealias",rawtype:'"align-baseline" | "align-top" | "align-middle" | "align-bottom" | "align-text-bottom" | "align-text-top"',file:"projects/design-angular-kit/src/lib/interfaces/core.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/utils/coercion.ts":[{name:"BooleanInput",ctype:"miscellaneous",subtype:"typealias",rawtype:'"false" | "true" | boolean | undefined',file:"projects/design-angular-kit/src/lib/utils/coercion.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/pipes/date-ago.pipe.ts":[{name:"DateAgoPipeInterval",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "week" | "day" | "hour" | "minute" | "second"',file:"projects/design-angular-kit/src/lib/pipes/date-ago.pipe.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.component.ts":[{name:"DimmerColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'string | "dimmer-primary"',file:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.component.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/interfaces/icon.ts":[{name:"IconColor",ctype:"miscellaneous",subtype:"typealias",rawtype:'"primary" | "secondary" | "success" | "warning" | "danger" | "light" | "white"',file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"IconName",ctype:"miscellaneous",subtype:"typealias",rawtype:"",file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:199},{name:"IconSize",ctype:"miscellaneous",subtype:"typealias",rawtype:'"xs" | "sm" | "lg" | "xl"',file:"projects/design-angular-kit/src/lib/interfaces/icon.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/interfaces/form.ts":[{name:"InputControlType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"text" | "email" | "number" | "date" | "time" | "tel" | "color" | "url"',file:"projects/design-angular-kit/src/lib/interfaces/form.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/pipes/duration.pipe.ts":[{name:"ItDurationPipeType",ctype:"miscellaneous",subtype:"typealias",rawtype:'"year" | "month" | "week" | "day" | "hour" | "minute" | "second"',file:"projects/design-angular-kit/src/lib/pipes/duration.pipe.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192}],"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts":[{name:"SortDirection",ctype:"miscellaneous",subtype:"typealias",rawtype:'"asc" | "desc" | undefined',file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",description:"",kind:192},{name:"SortHeaderArrowPosition",ctype:"miscellaneous",subtype:"typealias",rawtype:'"before" | "after"',file:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",deprecated:!1,deprecationMessage:"",description:`<p>Position of the arrow that displays when sorted.</p>
`,kind:192}]}},routes:[],coverage:{count:57,status:"good",files:[{filePath:"projects/design-angular-kit/src/lib/abstracts/abstract-form.component.ts",type:"component",linktype:"component",name:"ItAbstractFormComponent",coveragePercent:48,coverageCount:"13/27",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/abstracts/abstract.component.ts",type:"component",linktype:"component",name:"ItAbstractComponent",coveragePercent:36,coverageCount:"4/11",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/accordion/accordion.component.ts",type:"component",linktype:"component",name:"ItAccordionComponent",coveragePercent:66,coverageCount:"18/27",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/alert/alert.component.ts",type:"component",linktype:"component",name:"ItAlertComponent",coveragePercent:61,coverageCount:"11/18",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-dropdown/avatar-dropdown.component.ts",type:"component",linktype:"component",name:"ItAvatarDropdownComponent",coveragePercent:0,coverageCount:"0/4",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-dropdown/avatar-dropdown.component.ts",type:"component",linktype:"component",name:"ItAvatarDropdownItemComponent",coveragePercent:66,coverageCount:"4/6",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-group/avatar-group.component.ts",type:"component",linktype:"component",name:"ItAvatarGroupComponent",coveragePercent:0,coverageCount:"0/3",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar-group/avatar-group.component.ts",type:"component",linktype:"component",name:"ItAvatarGroupItemComponent",coveragePercent:0,coverageCount:"0/2",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.directive.ts",type:"directive",linktype:"directive",name:"ItAvatarDirective",coveragePercent:33,coverageCount:"2/6",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/avatar/avatar.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"avatarComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/badge/badge.directive.ts",type:"directive",linktype:"directive",name:"ItBadgeDirective",coveragePercent:75,coverageCount:"3/4",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/button/button.directive.ts",type:"directive",linktype:"directive",name:"ItButtonDirective",coveragePercent:50,coverageCount:"7/14",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/callout/callout.component.ts",type:"component",linktype:"component",name:"ItCalloutComponent",coveragePercent:100,coverageCount:"7/7",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/card/card.component.ts",type:"component",linktype:"component",name:"ItCardComponent",coveragePercent:75,coverageCount:"15/20",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/carousel/carousel-item/carousel-item.component.ts",type:"component",linktype:"component",name:"ItCarouselItemComponent",coveragePercent:54,coverageCount:"6/11",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/carousel/carousel.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"carouselComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/carousel/carousel/carousel.component.ts",type:"component",linktype:"component",name:"ItCarouselComponent",coveragePercent:56,coverageCount:"9/16",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/chip/chip.component.ts",type:"component",linktype:"component",name:"ItChipComponent",coveragePercent:45,coverageCount:"10/22",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/collapse/collapse.component.ts",type:"component",linktype:"component",name:"ItCollapseComponent",coveragePercent:64,coverageCount:"16/25",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer-buttons/dimmer-buttons.component.ts",type:"component",linktype:"component",name:"ItDimmerButtonsComponent",coveragePercent:33,coverageCount:"1/3",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer-icon/dimmer-icon.component.ts",type:"component",linktype:"component",name:"ItDimmerIconComponent",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.component.ts",type:"component",linktype:"component",name:"ItDimmerComponent",coveragePercent:28,coverageCount:"2/7",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/dimmer/dimmer.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"dimmerComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown-item/dropdown-item.component.ts",type:"component",linktype:"component",name:"ItDropdownItemComponent",coveragePercent:66,coverageCount:"14/21",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"dropdownComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/dropdown/dropdown/dropdown.component.ts",type:"component",linktype:"component",name:"ItDropdownComponent",coveragePercent:70,coverageCount:"21/30",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/forward/forward.directive.ts",type:"directive",linktype:"directive",name:"ItForwardDirective",coveragePercent:16,coverageCount:"1/6",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/link/link.component.ts",type:"component",linktype:"component",name:"ItLinkComponent",coveragePercent:57,coverageCount:"8/14",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/list/list-item/list-item.component.ts",type:"component",linktype:"component",name:"ItListItemComponent",coveragePercent:66,coverageCount:"14/21",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/list/list.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"listComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/list/list/list.component.ts",type:"component",linktype:"component",name:"ItListComponent",coveragePercent:75,coverageCount:"3/4",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/modal/modal.component.ts",type:"component",linktype:"component",name:"ItModalComponent",coveragePercent:80,coverageCount:"28/35",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/notifications/notifications.component.ts",type:"component",linktype:"component",name:"ItNotificationsComponent",coveragePercent:45,coverageCount:"5/11",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/pagination/pagination.component.ts",type:"component",linktype:"component",name:"ItPaginationComponent",coveragePercent:84,coverageCount:"16/19",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/popover/popover.directive.ts",type:"directive",linktype:"directive",name:"ItPopoverDirective",coveragePercent:76,coverageCount:"19/25",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/progress-bar/progress-bar.component.ts",type:"component",linktype:"component",name:"ItProgressBarComponent",coveragePercent:80,coverageCount:"4/5",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/progress-button/progress-button.component.ts",type:"component",linktype:"component",name:"ItProgressButtonComponent",coveragePercent:66,coverageCount:"2/3",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/spinner/spinner.component.ts",type:"component",linktype:"component",name:"ItSpinnerComponent",coveragePercent:75,coverageCount:"3/4",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/steppers/steppers-container/steppers-container.component.ts",type:"component",linktype:"component",name:"ItSteppersContainerComponent",coveragePercent:80,coverageCount:"21/26",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/steppers/steppers-item/steppers-item.component.ts",type:"component",linktype:"component",name:"ItSteppersItemComponent",coveragePercent:53,coverageCount:"7/13",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/steppers/steppers.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"steppersComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/tab/tab-container/tab-container.component.ts",type:"component",linktype:"component",name:"ItTabContainerComponent",coveragePercent:40,coverageCount:"8/20",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/tab/tab-item/tab-item.component.ts",type:"component",linktype:"component",name:"ItTabItemComponent",coveragePercent:62,coverageCount:"10/16",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/tab/tab.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"tabComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/table/sort/sort-header/sort-header.component.ts",type:"component",linktype:"component",name:"ItSortHeaderComponent",coveragePercent:50,coverageCount:"10/20",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts",type:"directive",linktype:"directive",name:"ItSortDirective",coveragePercent:63,coverageCount:"12/19",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive.ts",type:"function",linktype:"miscellaneous",linksubtype:"function",name:"getSortDirectionCycle",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/table/table.component.ts",type:"component",linktype:"component",name:"ItTableComponent",coveragePercent:90,coverageCount:"10/11",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/table/table.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"tableComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/timeline/timeline-item/timeline-item.component.ts",type:"component",linktype:"component",name:"ItTimelineItemComponent",coveragePercent:77,coverageCount:"17/22",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.component.ts",type:"component",linktype:"component",name:"ItTimelineComponent",coveragePercent:58,coverageCount:"7/12",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/core/timeline/timeline.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"timelineComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/core/tooltip/tooltip.directive.ts",type:"directive",linktype:"directive",name:"ItTooltipDirective",coveragePercent:72,coverageCount:"16/22",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/autocomplete/autocomplete.component.ts",type:"component",linktype:"component",name:"ItAutocompleteComponent",coveragePercent:56,coverageCount:"22/39",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/checkbox/checkbox.component.ts",type:"component",linktype:"component",name:"ItCheckboxComponent",coveragePercent:56,coverageCount:"18/32",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/form.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"formComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/form/input/input.component.ts",type:"component",linktype:"component",name:"ItInputComponent",coveragePercent:68,coverageCount:"28/41",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/password-input/password-input.component.ts",type:"component",linktype:"component",name:"ItPasswordInputComponent",coveragePercent:61,coverageCount:"24/39",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/radio-button/radio-button.component.ts",type:"component",linktype:"component",name:"ItRadioButtonComponent",coveragePercent:58,coverageCount:"18/31",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/range/range.component.ts",type:"component",linktype:"component",name:"ItRangeComponent",coveragePercent:54,coverageCount:"19/35",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/rating/rating.component.ts",type:"component",linktype:"component",name:"ItRatingComponent",coveragePercent:53,coverageCount:"16/30",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/select/select.component.ts",type:"component",linktype:"component",name:"ItSelectComponent",coveragePercent:59,coverageCount:"19/32",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/textarea/textarea.component.ts",type:"component",linktype:"component",name:"ItTextareaComponent",coveragePercent:56,coverageCount:"17/30",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/form/upload-drag-drop/upload-drag-drop.component.ts",type:"component",linktype:"component",name:"ItUploadDragDropComponent",coveragePercent:36,coverageCount:"12/33",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/form/upload-file-list/upload-file-list.component.ts",type:"component",linktype:"component",name:"ItUploadFileListComponent",coveragePercent:66,coverageCount:"14/21",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/back-button/back-button.component.ts",type:"component",linktype:"component",name:"ItBackButtonComponent",coveragePercent:66,coverageCount:"6/9",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/back-to-top/back-to-top.component.ts",type:"component",linktype:"component",name:"ItBackToTopComponent",coveragePercent:57,coverageCount:"11/19",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumb-item/breadcrumb-item.component.ts",type:"component",linktype:"component",name:"ItBreadcrumbItemComponent",coveragePercent:64,coverageCount:"11/17",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumb/breadcrumb.component.ts",type:"component",linktype:"component",name:"ItBreadcrumbComponent",coveragePercent:37,coverageCount:"3/8",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/breadcrumbs/breadcrumbs.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"breadcrumb",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/header/header.component.ts",type:"component",linktype:"component",name:"ItHeaderComponent",coveragePercent:0,coverageCount:"0/23",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/megamenu/megamenu.component.ts",type:"component",linktype:"component",name:"ItMegamenuComponent",coveragePercent:75,coverageCount:"3/4",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar-item/navbar-item.component.ts",type:"component",linktype:"component",name:"ItNavBarItemComponent",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"navbarComponents",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/navbar/navbar/navbar.component.ts",type:"component",linktype:"component",name:"ItNavBarComponent",coveragePercent:0,coverageCount:"0/8",status:"low"},{filePath:"projects/design-angular-kit/src/lib/components/navigation/sidebar/sidebar.component.ts",type:"component",linktype:"component",name:"ItSidebarComponent",coveragePercent:57,coverageCount:"4/7",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/utils/error-page/error-page.component.ts",type:"component",linktype:"component",name:"ItErrorPageComponent",coveragePercent:75,coverageCount:"6/8",status:"good"},{filePath:"projects/design-angular-kit/src/lib/components/utils/icon/icon.component.ts",type:"component",linktype:"component",name:"ItIconComponent",coveragePercent:77,coverageCount:"7/9",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/components/utils/language-switcher/language-switcher.component.ts",type:"component",linktype:"component",name:"ItLanguageSwitcherComponent",coveragePercent:42,coverageCount:"3/7",status:"medium"},{filePath:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"components",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"core",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"navigation",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"pipes",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/design-angular-kit.module.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"utils",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/core.ts",type:"interface",linktype:"interface",name:"Notification",coveragePercent:87,coverageCount:"7/8",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/core.ts",type:"interface",linktype:"interface",name:"TimelineElement",coveragePercent:0,coverageCount:"0/8",status:"low"},{filePath:"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts",type:"interface",linktype:"interface",name:"DesignAngularKitConfig",coveragePercent:75,coverageCount:"3/4",status:"good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/design-angular-kit-config.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"IT_ASSET_BASE_PATH",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/form.ts",type:"interface",linktype:"interface",name:"AutocompleteItem",coveragePercent:100,coverageCount:"8/8",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/form.ts",type:"interface",linktype:"interface",name:"SelectControlGroup",coveragePercent:0,coverageCount:"0/4",status:"low"},{filePath:"projects/design-angular-kit/src/lib/interfaces/form.ts",type:"interface",linktype:"interface",name:"SelectControlOption",coveragePercent:0,coverageCount:"0/5",status:"low"},{filePath:"projects/design-angular-kit/src/lib/interfaces/form.ts",type:"interface",linktype:"interface",name:"UploadFileListItem",coveragePercent:85,coverageCount:"6/7",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/icon.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"IconNameArray",coveragePercent:0,coverageCount:"0/1",status:"low"},{filePath:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",type:"interface",linktype:"interface",name:"ItSortable",coveragePercent:100,coverageCount:"4/4",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",type:"interface",linktype:"interface",name:"ItSortDefaultOptions",coveragePercent:100,coverageCount:"3/3",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",type:"interface",linktype:"interface",name:"ItSortEvent",coveragePercent:100,coverageCount:"3/3",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/sortable-table.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"IT_SORT_DEFAULT_OPTIONS",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/interfaces/utils.ts",type:"interface",linktype:"interface",name:"AvailableLanguage",coveragePercent:66,coverageCount:"2/3",status:"good"},{filePath:"projects/design-angular-kit/src/lib/pipes/date-ago.pipe.ts",type:"pipe",linktype:"pipe",name:"ItDateAgoPipe",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/pipes/duration.pipe.ts",type:"pipe",linktype:"pipe",name:"ItDurationPipe",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/pipes/mark-matching-text.pipe.ts",type:"pipe",linktype:"pipe",name:"ItMarkMatchingTextPipe",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/provide-design-angular-kit.ts",type:"function",linktype:"miscellaneous",linksubtype:"function",name:"provideDesignAngularKit",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/services/notification/notification.service.ts",type:"injectable",linktype:"injectable",name:"ItNotificationService",coveragePercent:77,coverageCount:"7/9",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/coercion.ts",type:"function",linktype:"miscellaneous",linksubtype:"function",name:"inputToBoolean",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/date-utils.ts",type:"class",linktype:"classe",name:"ItDateUtils",coveragePercent:92,coverageCount:"13/14",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/file-utils.ts",type:"class",linktype:"classe",name:"ItFileUtils",coveragePercent:83,coverageCount:"5/6",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"CAP_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"EMAIL_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"IBAN_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"ITALIAN_TAX_CODE_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"PHONE_NUMBER_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"PLATE_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"URL_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/utils/regex.ts",type:"variable",linktype:"miscellaneous",linksubtype:"variable",name:"VAT_NUMBER_REGEX",coveragePercent:100,coverageCount:"1/1",status:"very-good"},{filePath:"projects/design-angular-kit/src/lib/validators/it-validators.ts",type:"class",linktype:"classe",name:"ItValidators",coveragePercent:66,coverageCount:"4/6",status:"good"}]}};export{ie as a,$ as b,H as c,te as d};
