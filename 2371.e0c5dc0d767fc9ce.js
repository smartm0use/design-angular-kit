"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[2371],{2371:(y,p,n)=>{n.r(p),n.d(p,{AutocompleteModule:()=>T});var u=n(6814),m=n(1640),d=n(7069),e=n(9212),h=n(6273),v=n(4580),A=n(528),f=n(6099),r=n(2096),i=n(8405);let s=(()=>{class t{constructor(){this._autoCompleteData=[{value:"Luisa Neri",avatarSrcPath:"https://randomuser.me/api/portraits/women/44.jpg",avatarAltText:"Luisa Neri",label:"Profilo"},{value:"Cristian Borelli",avatarSrcPath:"https://randomuser.me/api/portraits/men/1.jpg",avatarAltText:"Cristian Borelli",label:"Profilo"},{value:"Andrea Stagi",avatarSrcPath:"https://randomuser.me/api/portraits/men/2.jpg",avatarAltText:"Andrea Stagi",label:"Profilo"},{value:"Comune di Firenze",icon:"pa",link:"https:www.comune.fi.it/",label:"Comune"},{value:"Italia",avatarSrcPath:"https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg",avatarAltText:"Italia"}],this.autocompleteUsers$=o=>(0,r.of)(o?this._autoCompleteData:[])}onAutocompleteSelected(o){console.log(o)}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-autocomplete-search-example"]],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare",3,"autocompleteData","autocompleteSelectedEvent"]],template:function(a,l){1&a&&(e.TgZ(0,"h3"),e._uU(1,"Ricerca con autocompletamento e dati"),e.qZA(),e.TgZ(2,"div",0)(3,"it-autocomplete",1),e.NdJ("autocompleteSelectedEvent",function(c){return l.onAutocompleteSelected(c)}),e.qZA()()),2&a&&(e.xp6(3),e.Q6J("autocompleteData",l.autocompleteUsers$))},dependencies:[i.Y],encapsulation:2})}return t})(),g=(()=>{class t extends s{static#e=this.\u0275fac=(()=>{let o;return function(l){return(o||(o=e.n5z(t)))(l||t)}})();static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-autocomplete-big-search-example"]],features:[e.qOj],decls:4,vars:1,consts:[[1,"bd-example"],["label","Cerca nel sito","placeholder","Testo da cercare","big","true",3,"autocompleteData","autocompleteSelectedEvent"]],template:function(a,l){1&a&&(e.TgZ(0,"h3"),e._uU(1,"Ricerca con autocompletamento grande e dati"),e.qZA(),e.TgZ(2,"div",0)(3,"it-autocomplete",1),e.NdJ("autocompleteSelectedEvent",function(c){return l.onAutocompleteSelected(c)}),e.qZA()()),2&a&&(e.xp6(3),e.Q6J("autocompleteData",l.autocompleteUsers$))},dependencies:[i.Y],encapsulation:2})}return t})(),x=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-autocomplete-examples"]],decls:4,vars:0,consts:[["html",'<h3>Ricerca con autocompletamento e dati</h3>\n\n<div class="bd-example">\n  <it-autocomplete\n    label="Cerca nel sito"\n    placeholder="Testo da cercare"\n    [autocompleteData]="autocompleteUsers$"\n    (autocompleteSelectedEvent)="onAutocompleteSelected($event)" />\n</div>',"typescript","import { Component } from '@angular/core';\nimport { AutocompleteItem } from 'design-angular-kit/interfaces/form';\nimport { Observable, of } from 'rxjs';\n\n@Component({\n  selector: 'it-autocomplete-search-example',\n  templateUrl: './autocomplete-search-example.component.html',\n})\nexport class AutocompleteSearchExampleComponent {\n  private _autoCompleteData: AutocompleteItem[] = [\n    {\n      value: 'Luisa Neri',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/women/44.jpg',\n      avatarAltText: 'Luisa Neri',\n      label: 'Profilo',\n    },\n    {\n      value: 'Cristian Borelli',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/men/1.jpg',\n      avatarAltText: 'Cristian Borelli',\n      label: 'Profilo',\n    },\n    {\n      value: 'Andrea Stagi',\n      avatarSrcPath: 'https://randomuser.me/api/portraits/men/2.jpg',\n      avatarAltText: 'Andrea Stagi',\n      label: 'Profilo',\n    },\n    {\n      value: 'Comune di Firenze',\n      icon: 'pa',\n      link: 'https:www.comune.fi.it/',\n      label: 'Comune',\n    },\n    {\n      value: 'Italia',\n      avatarSrcPath: 'https:raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg',\n      avatarAltText: 'Italia',\n    },\n  ];\n\n  /**\n   * Dynamic AutocompleteData (API) accepted by it-input\n   * @param search the autocomplete input string\n   */\n  autocompleteUsers$ = (search?: string): Observable<Array<AutocompleteItem>> => {\n    if (!search) {\n      return of([]);\n    }\n\n    // API request for retrieve data, use `search` to filter data\n    return of(this._autoCompleteData);\n  };\n\n  onAutocompleteSelected(item: AutocompleteItem): void {\n    console.log(item);\n  }\n}"],["html",'<h3>Ricerca con autocompletamento grande e dati</h3>\n\n<div class="bd-example">\n  <it-autocomplete\n    label="Cerca nel sito"\n    placeholder="Testo da cercare"\n    big="true"\n    [autocompleteData]="autocompleteUsers$"\n    (autocompleteSelectedEvent)="onAutocompleteSelected($event)" />\n</div>',"typescript","import { Component } from '@angular/core';\nimport {\n  AutocompleteSearchExampleComponent\n} from '../autocomplete-search-example/autocomplete-search-example.component';\n\n@Component({\n  selector: 'it-autocomplete-big-search-example',\n  templateUrl: './autocomplete-big-search-example.component.html',\n})\nexport class AutocompleteBigSearchExampleComponent extends AutocompleteSearchExampleComponent {\n\n}"]],template:function(a,l){1&a&&e._UZ(0,"it-autocomplete-search-example")(1,"it-source-display",0)(2,"it-autocomplete-big-search-example")(3,"it-source-display",1)},dependencies:[f.F,s,g],encapsulation:2})}return t})();const C=[{path:"",component:(()=>{class t{constructor(){this.component=d.wx.find(o=>"ItAutocompleteComponent"===o.name)}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-autocomplete-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(a,l){1&a&&(e.TgZ(0,"h1",0),e._uU(1,"Autocompletamento"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Elementi e stili per la creazione di input con autocompletamento."),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-autocomplete-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("innerHTML",l.component.description,e.oJD),e.xp6(5),e.Q6J("component",l.component))},dependencies:[h.U,v.m,A.G,x],encapsulation:2})}return t})()}];let S=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#a=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]})}return t})();var b=n(6208);let T=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#a=this.\u0275inj=e.cJS({imports:[u.ez,S,b.m]})}return t})()}}]);