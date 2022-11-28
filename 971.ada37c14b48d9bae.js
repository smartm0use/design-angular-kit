"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[971],{4971:(U,c,i)=>{i.r(c),i.d(c,{RadioModule:()=>M});var p=i(6895),l=i(433),m=i(9429),g=i(4466),u=i(8476),h=i(7069),e=i(4650),b=i(8340),v=i(1555),C=i(7223),f=i(6242),x=i(991),s=i(140);function R(n,a){if(1&n&&e._UZ(0,"it-radio-button",12),2&n){const o=a.$implicit;e.Q6J("value",o)("label",o)}}let Z=(()=>{class n{constructor(o){this._fb=o,this.colors=["Rosso","Blu","Giallo"],this.selectedColor="Blu",this.disabled=!1}ngOnInit(){this.genderFormGroup=this._fb.group({gender:["MALE"]})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(l.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-example"]],decls:27,vars:7,consts:[[1,"bd-example"],[1,"example-section"],["label","Disabilitato",3,"ngModel","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[3,"value","label",4,"ngFor","ngForOf"],[1,"example-selected-value"],[3,"formGroup"],["formControlName","gender"],["value","MALE","label","Maschio"],["value","FEMALE","label","Femmina"],["value","OTHERS","label","Altro"],["value","UNDEFINED","label","Preferisco non dirlo"],[3,"value","label"]],template:function(o,t){1&o&&(e.TgZ(0,"h3"),e._uU(1,"Configurazione Radio button"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-checkbox",2),e.NdJ("ngModelChange",function(d){return t.disabled=d}),e.qZA()(),e.TgZ(5,"h4"),e._uU(6,"Risultato"),e.qZA(),e.TgZ(7,"div",1)(8,"it-radio-group",3),e.NdJ("ngModelChange",function(d){return t.selectedColor=d}),e.YNc(9,R,1,2,"it-radio-button",4),e.qZA(),e.TgZ(10,"div",5),e._uU(11),e.qZA()()(),e.TgZ(12,"div",0)(13,"h4"),e._uU(14,"Radio in Reactive Form"),e.qZA(),e.TgZ(15,"p"),e._uU(16,"Qual \xe8 il tuo sesso?"),e.qZA(),e.TgZ(17,"form",6)(18,"it-radio-group",7),e._UZ(19,"it-radio-button",8)(20,"it-radio-button",9)(21,"it-radio-button",10)(22,"it-radio-button",11),e.qZA()(),e.TgZ(23,"div",5),e._uU(24,"Sesso selezionato: "),e.TgZ(25,"strong"),e._uU(26),e.qZA()()()),2&o&&(e.xp6(4),e.Q6J("ngModel",t.disabled),e.xp6(4),e.Q6J("ngModel",t.selectedColor)("disabled",t.disabled),e.xp6(1),e.Q6J("ngForOf",t.colors),e.xp6(2),e.hij("Colore selezionato: ",t.selectedColor,""),e.xp6(6),e.Q6J("formGroup",t.genderFormGroup),e.xp6(9),e.Oqu(t.genderFormGroup.value.gender))},dependencies:[p.sg,l._Y,l.JJ,l.JL,l.sg,l.u,l.On,x.b,s.w0,s._5]}),n})(),E=(()=>{class n{constructor(){this.selectedNation="Italia",this.italiaChecked=!0}changeCurrentlySelected(o){this.selectedNation=o.value}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-checked-example"]],decls:9,vars:2,consts:[[1,"bd-example"],[1,"example-section"],["name","nation","value","USA","label","USA",3,"change"],["name","nation","value","Italia","label","Italia",3,"checked","change"],["name","nation","value","Spagna","label","Spagna",3,"change"],[1,"example-selected-value"]],template:function(o,t){1&o&&(e.TgZ(0,"h3"),e._uU(1,"Radio checked"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-radio-button",2),e.NdJ("change",function(d){return t.changeCurrentlySelected(d)}),e.qZA(),e.TgZ(5,"it-radio-button",3),e.NdJ("change",function(d){return t.changeCurrentlySelected(d)}),e.qZA(),e.TgZ(6,"it-radio-button",4),e.NdJ("change",function(d){return t.changeCurrentlySelected(d)}),e.qZA()(),e.TgZ(7,"div",5),e._uU(8),e.qZA()()),2&o&&(e.xp6(5),e.Q6J("checked",t.italiaChecked),e.xp6(3),e.hij("Nazione selezionata: ",t.selectedNation,""))},dependencies:[s._5]}),n})(),A=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-examples"]],decls:4,vars:0,consts:[["html",'\n  \n  \n<h3>Configurazione Radio button</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-checkbox [(ngModel)]="disabled" label="Disabilitato"></it-checkbox>\n  </p>\n  \n\n  <h4 >Risultato</h4>\n\n  <div class="example-section">\n    <it-radio-group [(ngModel)]="selectedColor" [disabled]="disabled">\n      <it-radio-button *ngFor="let color of colors" [value]="color" [label]="color"></it-radio-button>\n    </it-radio-group>\n    <div class="example-selected-value">Colore selezionato: /{/{selectedColor/}/}</div>\n  </div>\n</div>\n\n\n\n\n<div class="bd-example">\n  <h4>Radio in Reactive Form</h4>\n  <p>Qual \xe8 il tuo sesso?</p>\n  <form [formGroup] ="genderFormGroup">\n    <it-radio-group formControlName="gender">\n      <it-radio-button value="MALE" label="Maschio"></it-radio-button>\n      <it-radio-button value="FEMALE" label="Femmina"></it-radio-button>\n      <it-radio-button value="OTHERS" label="Altro"></it-radio-button>\n      <it-radio-button value="UNDEFINED" label="Preferisco non dirlo"></it-radio-button>\n    </it-radio-group>\n  </form>\n\n  <div class="example-selected-value">Sesso selezionato: <strong>/{/{genderFormGroup.value.gender/}/}</strong></div>\n\n\n</div>\n\n\n',"typescript","\n  \n  import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'it-radio-example',\n  templateUrl: './radio-example.component.html',\n  styleUrls: ['./radio-example.component.scss']\n})\nexport class RadioExampleComponent implements OnInit {\n\n  colors = [\n    'Rosso',\n    'Blu',\n    'Giallo'\n  ];\n\n  selectedColor = 'Blu';\n\n  disabled = false;\n\n\n  genderFormGroup: FormGroup;\n\n  constructor(private _fb: FormBuilder){}\n\n  ngOnInit(): void {\n      this.genderFormGroup = this._fb.group({\n        gender: ['MALE']\n      });\n  }\n}\n\n\n"],["html",'\n  \n  <h3>Radio checked</h3>\n<div class="bd-example">\n  <div class="example-section">\n    <it-radio-button  name="nation" value="USA" label="USA" \n                      (change)="changeCurrentlySelected($event)"></it-radio-button>\n\n    <it-radio-button  name="nation" value="Italia" label="Italia" \n                      [checked]="italiaChecked" (change)="changeCurrentlySelected($event)"></it-radio-button>\n\n    <it-radio-button  name="nation" value="Spagna" label="Spagna" \n                      (change)="changeCurrentlySelected($event)"></it-radio-button>\n  </div>\n\n  <div class="example-selected-value">Nazione selezionata: /{/{selectedNation/}/}</div>\n</div>\n\n\n',"typescript","\n  \n  import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-radio-checked-example',\n  templateUrl: './radio-checked-example.component.html',\n  styleUrls: ['./radio-checked-example.component.scss']\n})\nexport class RadioCheckedExampleComponent {\n\n  selectedNation = 'Italia';\n\n  italiaChecked = true;\n\n  changeCurrentlySelected($event) {\n    this.selectedNation = $event.value;\n  }\n\n}\n\n\n"]],template:function(o,t){1&o&&e._UZ(0,"it-radio-example")(1,"it-source-display",0)(2,"it-radio-checked-example")(3,"it-source-display",1)},dependencies:[f.F,Z,E]}),n})();const T=[{path:"",component:(()=>{class n{constructor(){this.component=h.wx.find(o=>"RadioButtonComponent"===o.name)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-radio-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi"],["label","API"],[3,"component"]],template:function(o,t){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Radio Button"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Il componente Radio Button utilizzabile in un form"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-group")(6,"it-tab",3),e._UZ(7,"it-radio-examples"),e.qZA(),e.TgZ(8,"it-tab",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&o&&(e.xp6(4),e.Q6J("innerHTML",t.component.description,e.oJD),e.xp6(5),e.Q6J("component",t.component))},dependencies:[b.G,v.f,C.o,A]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(T),u.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,l.UX,l.u5,m.z1,g.m,F]}),n})()}}]);