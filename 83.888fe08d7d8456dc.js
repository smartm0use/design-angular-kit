"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[83],{1083:(A,u,i)=>{i.r(u),i.d(u,{CheckboxModule:()=>a});var g=i(6895),h=i(4006),C=i(1797),k=i(3870),f=i(7069),e=i(8274),M=i(8340),Z=i(5792),T=i(2717),v=i(6242),x=i(7417);function y(o,n){1&o&&(e.ynx(0),e._uU(1," Accetto i "),e.TgZ(2,"a",10),e._uU(3,"termini di servizio"),e.qZA(),e.BQk())}function _(o,n){1&o&&e._uU(0," Sono una checkbox ")}class p{constructor(){this.checked=!0,this.disabled=!1,this.indeterminate=!1,this.link=!1}}p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["it-checkbox-example"]],decls:16,vars:9,consts:[[1,"bd-example"],[1,"example-section"],["id","spuntato","label","Spuntato",3,"ngModel","ngModelChange"],["id","disabilitato","label","Disabilitato",3,"ngModel","ngModelChange"],["id","indeterminato","label","Indeterminato",3,"ngModel","ngModelChange"],["id","link","label","Testo con link",3,"ngModel","ngModelChange"],["id","example",3,"ngModel","indeterminate","disabled","ngModelChange"],["label",""],[4,"ngIf","ngIfElse"],["simpleLabel",""],["href","https://italia.github.io/bootstrap-italia/"]],template:function(n,t){if(1&n&&(e.TgZ(0,"h3"),e._uU(1,"Configurazione checkbox"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-checkbox",2),e.NdJ("ngModelChange",function(c){return t.checked=c}),e.qZA(),e.TgZ(5,"it-checkbox",3),e.NdJ("ngModelChange",function(c){return t.disabled=c}),e.qZA(),e.TgZ(6,"it-checkbox",4),e.NdJ("ngModelChange",function(c){return t.indeterminate=c}),e.qZA(),e.TgZ(7,"it-checkbox",5),e.NdJ("ngModelChange",function(c){return t.link=c}),e.qZA()(),e.TgZ(8,"h4"),e._uU(9,"Risultato"),e.qZA(),e.TgZ(10,"p",1)(11,"it-checkbox",6),e.NdJ("ngModelChange",function(c){return t.checked=c}),e.ynx(12,7),e.YNc(13,y,4,0,"ng-container",8),e.YNc(14,_,1,0,"ng-template",null,9,e.W1O),e.BQk(),e.qZA()()()),2&n){const s=e.MAs(15);e.xp6(4),e.Q6J("ngModel",t.checked),e.xp6(1),e.Q6J("ngModel",t.disabled),e.xp6(1),e.Q6J("ngModel",t.indeterminate),e.xp6(1),e.Q6J("ngModel",t.link),e.xp6(4),e.Q6J("ngModel",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled),e.xp6(2),e.Q6J("ngIf",t.link)("ngIfElse",s)}},dependencies:[g.O5,h.JJ,h.On,x.b]});class m{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}}m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["it-checkbox-example-inline"]],decls:6,vars:0,consts:[[1,"bd-example"],["id","label-1","label","label 1","inline","true"],["id","label-2","label","label 2","inline","true"],["id","label-3","label","label 3","inline","true"]],template:function(n,t){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Inline"),e.qZA(),e.TgZ(2,"div",0),e._UZ(3,"it-checkbox",1)(4,"it-checkbox",2)(5,"it-checkbox",3),e.qZA())},dependencies:[x.b]});class r{constructor(){this.checked=!0,this.label="Sono una checkbox",this.disabled=!1,this.indeterminate=!1}}r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["it-checkbox-example-group"]],decls:15,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["id","first-checkbox","label","Prima checkbox raggruppata","group","true"],["id","second-checkbox","label","Seconda checkbox raggruppata","group","true"],["id","third-checkbox","group","true"],["label",""],["href","https://italia.github.io/bootstrap-italia/docs/form/checkbox/"]],template:function(n,t){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Gruppi"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-checkbox",2),e._uU(5," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),e.qZA(),e.TgZ(6,"it-checkbox",3),e._uU(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie liber "),e.qZA(),e.TgZ(8,"it-checkbox",4),e.ynx(9,5),e._uU(10," Terza "),e.TgZ(11,"a",6),e._uU(12,"checkbox"),e.qZA(),e._uU(13," raggruppata"),e.BQk(),e._uU(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero "),e.qZA()()())},dependencies:[x.b]});class d{constructor(){}ngOnInit(){}}d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["it-checkbox-examples"]],decls:6,vars:0,consts:[["html",'<h3>Configurazione checkbox</h3>\n\n<div class="bd-example">\n  <p class="example-section">\n    <it-checkbox id="spuntato" [(ngModel)]="checked" label="Spuntato"></it-checkbox>\n    <it-checkbox id="disabilitato" [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>\n    <it-checkbox id="indeterminato" [(ngModel)]="indeterminate" label="Indeterminato"></it-checkbox>\n    <it-checkbox id="link" [(ngModel)]="link" label="Testo con link"></it-checkbox>\n  </p>\n\n  <h4>Risultato</h4>\n\n  <p class="example-section">\n    <it-checkbox\n      id="example"\n      [(ngModel)]="checked"\n      [indeterminate]="indeterminate"\n      [disabled]="disabled">\n\n      <ng-container label>\n        <ng-container *ngIf="link; else simpleLabel">\n          Accetto i <a href="https://italia.github.io/bootstrap-italia/">termini di servizio</a>\n        </ng-container>\n        <ng-template #simpleLabel>\n          Sono una checkbox\n        </ng-template>\n      </ng-container>\n    </it-checkbox>\n  </p>\n\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-checkbox-example',\n  templateUrl: './checkbox-example.component.html',\n  styleUrls: ['./checkbox-example.component.scss']\n})\nexport class CheckboxExampleComponent {\n\n  checked = true;\n  disabled = false;\n  indeterminate = false;\n  link = false;\n\n}"],["html",'<h3>Inline</h3>\n<div class="bd-example">\n  <it-checkbox id="label-1" label="label 1" inline="true"></it-checkbox>\n  <it-checkbox id="label-2" label="label 2" inline="true"></it-checkbox>\n  <it-checkbox id="label-3" label="label 3" inline="true"></it-checkbox>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-checkbox-example-inline',\n  templateUrl: './checkbox-example-inline.component.html',\n  styleUrls: ['./checkbox-example-inline.component.scss']\n})\nexport class CheckboxExampleInlineComponent {\n\n  checked = true;\n  label = 'Sono una checkbox';\n  disabled = false;\n  indeterminate = false;\n\n}"],["html",'<h3>Gruppi</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-checkbox id="first-checkbox" label="Prima checkbox raggruppata" group="true">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero\n    </it-checkbox>\n    <it-checkbox id="second-checkbox" label="Seconda checkbox raggruppata" group="true">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie liber\n    </it-checkbox>\n    <it-checkbox id="third-checkbox" group="true">\n      <ng-container label> Terza <a href="https://italia.github.io/bootstrap-italia/docs/form/checkbox/">checkbox</a> raggruppata</ng-container>\n\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero\n    </it-checkbox>\n  </p>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-checkbox-example-group',\n  templateUrl: './checkbox-example-group.component.html',\n  styleUrls: ['./checkbox-example-group.component.scss']\n})\nexport class CheckboxExampleGroupComponent {\n\n  checked = true;\n  label = 'Sono una checkbox';\n  disabled = false;\n  indeterminate = false;\n\n}"]],template:function(n,t){1&n&&e._UZ(0,"it-checkbox-example")(1,"it-source-display",0)(2,"it-checkbox-example-inline")(3,"it-source-display",1)(4,"it-checkbox-example-group")(5,"it-source-display",2)},dependencies:[v.F,p,m,r]});class b{constructor(){this.component=f.wx.find(n=>"CheckboxComponent"===n.name)}ngOnInit(){}}b.\u0275fac=function(n){return new(n||b)},b.\u0275cmp=e.Xpm({type:b,selectors:[["it-checkbox-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["id","example","label","Esempi","active","true",1,"pt-3"],["id","api","label","API",1,"pt-3"],[3,"component"]],template:function(n,t){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Checkbox"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Il componente Checkbox utilizzabile in un form"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-checkbox-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("innerHTML",t.component.description,e.oJD),e.xp6(5),e.Q6J("component",t.component))},dependencies:[M.G,Z.H,T.D,d]});const U=[{path:"",component:b}];class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[k.Bz.forChild(U),k.Bz]});class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,h.u5,C.m,l]})}}]);