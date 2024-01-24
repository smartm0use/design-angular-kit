"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[7658],{7658:(U,s,i)=>{i.r(s),i.d(s,{RadioModule:()=>N});var c=i(6814),l=i(6223),g=i(7114),m=i(1640),b=i(7069),e=i(5879),h=i(528),v=i(6273),C=i(4580),f=i(6099),x=i(4220),u=i(8790);function M(n,p){if(1&n){const a=e.EpF();e.TgZ(0,"it-radio-button",15),e.NdJ("ngModelChange",function(o){e.CHM(a);const r=e.oxw();return e.KtG(r.selectedColor=o)}),e.qZA()}if(2&n){const a=p.$implicit,t=p.index,o=e.oxw();e.Q6J("id","color-"+t)("ngModel",o.selectedColor)("disabled",o.disabled)("value",a)("label",a)}}let Z=(()=>{class n{constructor(a){this._fb=a,this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(l.qu))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-example"]],decls:42,vars:8,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModel","ngModelChange"],[3,"id","ngModel","disabled","value","label","ngModelChange",4,"ngFor","ngForOf"],[1,"example-selected-value"],["name","radio-link","value","bootstrap-italia",3,"ngModel","ngModelChange"],["label",""],["href","https://italia.github.io/bootstrap-italia/"],["name","radio-link","value","radio-button",3,"ngModel","ngModelChange"],["href","https://italia.github.io/bootstrap-italia/docs/form/radio-button/"],[3,"formGroup"],["formControlName","gender","value","MALE","label","Maschio"],["formControlName","gender","value","FEMALE","label","Femmina"],["formControlName","gender","value","OTHERS","label","Altro"],["formControlName","gender","value","UNDEFINED","label","Preferisco non dirlo"],[3,"id","ngModel","disabled","value","label","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Configurazione Radio button"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-checkbox",2),e.NdJ("ngModelChange",function(d){return o.disabled=d}),e.qZA()(),e.TgZ(5,"h4"),e._uU(6,"Risultato"),e.qZA(),e.TgZ(7,"div",1),e.YNc(8,M,1,5,"it-radio-button",3),e.TgZ(9,"div",4),e._uU(10),e.qZA()()(),e.TgZ(11,"div",0)(12,"h4"),e._uU(13,"Radio con link"),e.qZA(),e.TgZ(14,"it-radio-button",5),e.NdJ("ngModelChange",function(d){return o.link=d}),e.ynx(15,6),e._uU(16,"Label con "),e.TgZ(17,"a",7),e._uU(18,"link"),e.qZA(),e.BQk(),e.qZA(),e.TgZ(19,"it-radio-button",8),e.NdJ("ngModelChange",function(d){return o.link=d}),e.ynx(20,6),e._uU(21,"Altra label con "),e.TgZ(22,"a",9),e._uU(23,"link"),e.qZA(),e.BQk(),e.qZA(),e.TgZ(24,"div",4),e._uU(25,"Link selezionato: "),e.TgZ(26,"strong"),e._uU(27),e.qZA()()(),e.TgZ(28,"div",0)(29,"h4"),e._uU(30,"Radio in Reactive Form"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Qual \xe8 il tuo sesso?"),e.qZA(),e.TgZ(33,"form",10),e._UZ(34,"it-radio-button",11)(35,"it-radio-button",12)(36,"it-radio-button",13)(37,"it-radio-button",14),e.qZA(),e.TgZ(38,"div",4),e._uU(39,"Sesso selezionato: "),e.TgZ(40,"strong"),e._uU(41),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",o.disabled),e.xp6(4),e.Q6J("ngForOf",o.colors),e.xp6(2),e.hij("Colore selezionato: ",o.selectedColor,""),e.xp6(4),e.Q6J("ngModel",o.link),e.xp6(5),e.Q6J("ngModel",o.link),e.xp6(8),e.Oqu(o.link),e.xp6(6),e.Q6J("formGroup",o.genderFormGroup),e.xp6(8),e.Oqu(o.genderFormGroup.value.gender))},dependencies:[c.sg,l._Y,l.JJ,l.JL,l.sg,l.u,l.On,x.f,u.C]})}return n})(),_=(()=>{class n{constructor(){this.selectedNation="Italia"}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-checked-example"]],decls:9,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"ngModel","ngModelChange"],["name","nation","value","Italia","label","Italia",3,"ngModel","ngModelChange"],["name","nation","value","Spagna","label","Spagna",3,"ngModel","ngModelChange"],[1,"example-selected-value"]],template:function(t,o){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Radio checked"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-radio-button",2),e.NdJ("ngModelChange",function(d){return o.selectedNation=d}),e.qZA(),e.TgZ(5,"it-radio-button",3),e.NdJ("ngModelChange",function(d){return o.selectedNation=d}),e.qZA(),e.TgZ(6,"it-radio-button",4),e.NdJ("ngModelChange",function(d){return o.selectedNation=d}),e.qZA()(),e.TgZ(7,"div",5),e._uU(8),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",o.selectedNation),e.xp6(1),e.Q6J("ngModel",o.selectedNation),e.xp6(1),e.Q6J("ngModel",o.selectedNation),e.xp6(2),e.hij("Nazione selezionata: ",o.selectedNation,""))},dependencies:[l.JJ,l.On,u.C]})}return n})(),T=(()=>{class n{constructor(){}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-examples"]],decls:4,vars:0,consts:[["html",'<h3>Configurazione Radio button</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>\n  </p>\n\n\n  <h4>Risultato</h4>\n\n  <div class="example-section">\n    <it-radio-button *ngFor="let color of colors; let i = index"\n                     [id]="\'color-\'+i"\n                     [(ngModel)]="selectedColor" [disabled]="disabled" [value]="color"\n                     [label]="color"></it-radio-button>\n    <div class="example-selected-value">Colore selezionato: /{/{selectedColor/}/}</div>\n  </div>\n</div>\n\n<div class="bd-example">\n  <h4>Radio con link</h4>\n  <it-radio-button [(ngModel)]="link" name="radio-link" value="bootstrap-italia">\n    <ng-container label>Label con <a href="https://italia.github.io/bootstrap-italia/">link</a></ng-container>\n  </it-radio-button>\n  <it-radio-button [(ngModel)]="link" name="radio-link" value="radio-button">\n    <ng-container label>Altra label con <a href="https://italia.github.io/bootstrap-italia/docs/form/radio-button/">link</a></ng-container>\n  </it-radio-button>\n\n  <div class="example-selected-value">Link selezionato: <strong>/{/{link/}/}</strong></div>\n</div>\n\n<div class="bd-example">\n  <h4>Radio in Reactive Form</h4>\n  <p>Qual \xe8 il tuo sesso?</p>\n  <form [formGroup]="genderFormGroup">\n    <it-radio-button formControlName="gender" value="MALE" label="Maschio"></it-radio-button>\n    <it-radio-button formControlName="gender" value="FEMALE" label="Femmina"></it-radio-button>\n    <it-radio-button formControlName="gender" value="OTHERS" label="Altro"></it-radio-button>\n    <it-radio-button formControlName="gender" value="UNDEFINED" label="Preferisco non dirlo"></it-radio-button>\n  </form>\n\n  <div class="example-selected-value">Sesso selezionato: <strong>/{/{genderFormGroup.value.gender/}/}</strong></div>\n\n\n</div>',"typescript","import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'it-radio-example',\n  templateUrl: './radio-example.component.html',\n  styleUrls: ['./radio-example.component.scss']\n})\nexport class RadioExampleComponent implements OnInit {\n\n  colors = [\n    'Rosso',\n    'Blu',\n    'Giallo'\n  ];\n\n  selectedColor = 'Blu';\n\n  disabled = false;\n\n  link?: string;\n\n  genderFormGroup: FormGroup;\n\n  constructor(private _fb: FormBuilder){}\n\n  ngOnInit(): void {\n      this.genderFormGroup = this._fb.group({\n        gender: ['MALE']\n      });\n  }\n}"],["html",'<h3>Radio checked</h3>\n<div class="bd-example">\n  <div class="example-section">\n    <it-radio-button name="nation" value="USA" label="USA"\n                      [(ngModel)]="selectedNation"></it-radio-button>\n\n    <it-radio-button name="nation" value="Italia" label="Italia"\n                     [(ngModel)]="selectedNation"></it-radio-button>\n\n    <it-radio-button name="nation" value="Spagna" label="Spagna"\n                     [(ngModel)]="selectedNation"></it-radio-button>\n  </div>\n\n  <div class="example-selected-value">Nazione selezionata: /{/{selectedNation/}/}</div>\n</div>',"typescript","import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-radio-checked-example',\n  templateUrl: './radio-checked-example.component.html',\n  styleUrls: ['./radio-checked-example.component.scss']\n})\nexport class RadioCheckedExampleComponent {\n\n  selectedNation = 'Italia';\n\n\n}"]],template:function(t,o){1&t&&e._UZ(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[f.F,Z,_]})}return n})();const R=[{path:"",component:(()=>{class n{constructor(){this.component=b.wx.find(a=>"ItRadioButtonComponent"===a.name)}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,o){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Radio Button"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Il componente Radio Button utilizzabile in un form"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-radio-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("innerHTML",o.component.description,e.oJD),e.xp6(5),e.Q6J("component",o.component))},dependencies:[h.G,v.U,C.m,T]})}return n})()}];let A=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(R),m.Bz]})}return n})(),N=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[c.ez,l.UX,l.u5,g.m,A]})}return n})()}}]);