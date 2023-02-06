"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[156],{7156:(A,f,i)=>{i.r(f),i.d(f,{SteppersModule:()=>a});var g=i(6895),x=i(1797),v=i(4006),C=i(300),b=i(7069),e=i(8274),Z=i(8340),k=i(5792),w=i(2717),T=i(6242),h=i(3570),S=i(1754),y=i(7417);function B(s,t){if(1&s&&(e.TgZ(0,"it-steppers-item",5)(1,"div",6),e._uU(2),e.qZA()()),2&s){const n=t.$implicit,r=e.oxw();e.Q6J("label",n),e.xp6(1),e.ekj("text-white",r.isDark),e.xp6(1),e.hij(" ",n," ")}}class l{constructor(){this.activeStep=1,this.steps=["Primo contenuto","Secondo contenuto","Terzo contenuto"],this.isDark=!1,this.isConfirmLoading=!1,this.isSaveLoading=!1}onForwardClick(t){t<this.steps.length-1&&this.activeStep++,this.isConfirmLoading=!1,this.isSaveLoading=!1}onBackClick(t){t>0&&this.activeStep--,this.isConfirmLoading=!1,this.isSaveLoading=!1}onConfirmClick(t){this.isConfirmLoading=!0}onSaveClick(t){this.isSaveLoading=!0}}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["it-steppers-dynamic-example"]],decls:7,vars:9,consts:[[1,"bd-example"],[1,"mb-3"],["id","stepper-dark","label","Modalit\xe0 dark",3,"ngModel","ngModelChange"],[3,"activeStep","dark","showForwardButton","showSaveButton","showConfirmButton","confirmLoading","saveLoading","backClick","forwardClick","confirmClick","saveClick"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"container"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Stepper"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-checkbox",2),e.NdJ("ngModelChange",function(p){return n.isDark=p}),e.qZA()(),e.TgZ(5,"it-steppers-container",3),e.NdJ("backClick",function(p){return n.onBackClick(p)})("forwardClick",function(p){return n.onForwardClick(p)})("confirmClick",function(p){return n.onConfirmClick(p)})("saveClick",function(p){return n.onSaveClick(p)}),e.YNc(6,B,3,4,"it-steppers-item",4),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.isDark),e.xp6(1),e.Q6J("activeStep",n.activeStep)("dark",n.isDark)("showForwardButton",n.activeStep<n.steps.length-1)("showSaveButton",0===n.activeStep)("showConfirmButton",n.activeStep===n.steps.length-1)("confirmLoading",n.isConfirmLoading)("saveLoading",n.isSaveLoading),e.xp6(1),e.Q6J("ngForOf",n.steps))},dependencies:[g.sg,h.Q,S.Z,y.b,v.JJ,v.On],encapsulation:2});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["it-steppers-header-example"]],decls:23,vars:3,consts:[[1,"bd-example"],["showBackButton","false","showForwardButton","false",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["label","Primo contenuto","icon","calendar"],["label","Secondo contenuto","icon","locked"],["label","Terzo contenuto","icon","settings"],["steppersNumber","true","showBackButton","false","showForwardButton","false",3,"activeStep"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Varianti intestazione"),e.qZA(),e.TgZ(2,"h4"),e._uU(3,"Solo testo"),e.qZA(),e.TgZ(4,"div",0)(5,"it-steppers-container",1),e._UZ(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),e.qZA()(),e.TgZ(9,"h4"),e._uU(10,"Testo e icone"),e.qZA(),e.TgZ(11,"div",0)(12,"it-steppers-container",1),e._UZ(13,"it-steppers-item",5)(14,"it-steppers-item",6)(15,"it-steppers-item",7),e.qZA()(),e.TgZ(16,"h4"),e._uU(17,"Ordine degli step"),e.qZA(),e.TgZ(18,"div",0)(19,"it-steppers-container",8),e._UZ(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("activeStep",1),e.xp6(7),e.Q6J("activeStep",1),e.xp6(7),e.Q6J("activeStep",1))},dependencies:[h.Q,S.Z],encapsulation:2});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["it-steppers-mobile-example"]],decls:30,vars:4,consts:[[1,"bd-example","mobile-examples"],["showHeader","false","progressStyle","progress",3,"activeStep"],["label","Primo contenuto"],["label","Secondo contenuto"],["label","Terzo contenuto"],["showHeader","false","progressStyle","dots",3,"activeStep"],[1,"bd-example"],["showHeader","false","showSaveButton","true",3,"activeStep"],["showHeader","false","showForwardButton","false","showConfirmButton","true",3,"activeStep"]],template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Varianti navigazione per mobile"),e.qZA(),e.TgZ(2,"h4"),e._uU(3,"Progress bar"),e.qZA(),e.TgZ(4,"div",0)(5,"it-steppers-container",1),e._UZ(6,"it-steppers-item",2)(7,"it-steppers-item",3)(8,"it-steppers-item",4),e.qZA()(),e.TgZ(9,"h4"),e._uU(10,"Pallini"),e.qZA(),e.TgZ(11,"div",0)(12,"it-steppers-container",5),e._UZ(13,"it-steppers-item",2)(14,"it-steppers-item",3)(15,"it-steppers-item",4),e.qZA()(),e.TgZ(16,"h4"),e._uU(17,"Pulsante salva"),e.qZA(),e.TgZ(18,"div",6)(19,"it-steppers-container",7),e._UZ(20,"it-steppers-item",2)(21,"it-steppers-item",3)(22,"it-steppers-item",4),e.qZA()(),e.TgZ(23,"h4"),e._uU(24,"Pulsante conferma"),e.qZA(),e.TgZ(25,"div",6)(26,"it-steppers-container",8),e._UZ(27,"it-steppers-item",2)(28,"it-steppers-item",3)(29,"it-steppers-item",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("activeStep",1),e.xp6(7),e.Q6J("activeStep",1),e.xp6(7),e.Q6J("activeStep",1),e.xp6(7),e.Q6J("activeStep",1))},dependencies:[h.Q,S.Z],styles:["@media screen and (min-width: 992px){.bd-example.mobile-examples .steppers-progress{display:block}.bd-example.mobile-examples .steppers-dots{display:flex}}\n"],encapsulation:2});class d{constructor(){}ngOnInit(){}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["it-steppers-examples"]],decls:6,vars:0,consts:[["html",'<h3>Stepper</h3>\n<div class="bd-example">\n\n  <div class="mb-3">\n    <it-checkbox id="stepper-dark" label="Modalit\xe0 dark" [(ngModel)]="isDark"></it-checkbox>\n  </div>\n\n  <it-steppers-container [activeStep]="activeStep"\n                         [dark]="isDark"\n                         [showForwardButton]="activeStep < steps.length-1"\n                         [showSaveButton]="activeStep === 0"\n                         [showConfirmButton]="activeStep === steps.length-1"\n                         (backClick)="onBackClick($event)"\n                         (forwardClick)="onForwardClick($event)"\n                         (confirmClick)="onConfirmClick($event)"\n                         [confirmLoading]="isConfirmLoading"\n                         (saveClick)="onSaveClick($event)"\n                         [saveLoading]="isSaveLoading">\n\n    <it-steppers-item *ngFor="let step of steps" [label]="step">\n      <div class="container" [class.text-white]="isDark">\n        /{/{step/}/}\n      </div>\n    </it-steppers-item>\n\n  </it-steppers-container>\n\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-steppers-dynamic-example',\n  templateUrl: './steppers-dynamic-example.component.html'\n})\nexport class SteppersDynamicExampleComponent {\n\n  /**\n   * Step index\n   */\n  activeStep = 1;\n  steps = ['Primo contenuto', 'Secondo contenuto', 'Terzo contenuto']\n\n  isDark = false;\n\n  isConfirmLoading = false;\n  isSaveLoading = false;\n\n  onForwardClick(activeStep: number): void {\n    if (activeStep < this.steps.length - 1) {\n      this.activeStep++;\n    }\n    this.isConfirmLoading = false;\n    this.isSaveLoading = false;\n  }\n  onBackClick(activeStep: number): void {\n    if (activeStep > 0) {\n      this.activeStep--;\n    }\n    this.isConfirmLoading = false;\n    this.isSaveLoading = false;\n  }\n\n  onConfirmClick(activeStep: number): void {\n    this.isConfirmLoading = true;\n  }\n\n  onSaveClick(activeStep: number): void {\n    this.isSaveLoading = true;\n  }\n\n}"],["html",'<h3>Varianti intestazione</h3>\n<h4>Solo testo</h4>\n<div class="bd-example">\n  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>\n\n<h4>Testo e icone</h4>\n<div class="bd-example">\n  <it-steppers-container [activeStep]="1" showBackButton="false" showForwardButton="false">\n    <it-steppers-item label="Primo contenuto" icon="calendar"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto" icon="locked"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto" icon="settings"></it-steppers-item>\n  </it-steppers-container>\n</div>\n\n<h4>Ordine degli step</h4>\n<div class="bd-example">\n  <it-steppers-container [activeStep]="1" steppersNumber="true" showBackButton="false" showForwardButton="false">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-steppers-header-example',\n  templateUrl: './steppers-header-example.component.html'\n})\nexport class SteppersHeaderExampleComponent {\n\n}"],["html",'<h3>Varianti navigazione per mobile</h3>\n<h4>Progress bar</h4>\n<div class="bd-example mobile-examples">\n  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="progress">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>\n\n<h4>Pallini</h4>\n<div class="bd-example mobile-examples">\n  <it-steppers-container [activeStep]="1" showHeader="false" progressStyle="dots">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>\n\n<h4>Pulsante salva</h4>\n<div class="bd-example">\n  <it-steppers-container [activeStep]="1" showHeader="false" showSaveButton="true">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>\n\n<h4>Pulsante conferma</h4>\n<div class="bd-example">\n  <it-steppers-container [activeStep]="1" showHeader="false" showForwardButton="false" showConfirmButton="true">\n    <it-steppers-item label="Primo contenuto"></it-steppers-item>\n    <it-steppers-item label="Secondo contenuto"></it-steppers-item>\n    <it-steppers-item label="Terzo contenuto"></it-steppers-item>\n  </it-steppers-container>\n</div>',"typescript","import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  selector: 'it-steppers-mobile-example',\n  templateUrl: './steppers-mobile-example.component.html',\n  styleUrls: ['steppers-mobile-example.component.scss'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class SteppersMobileExampleComponent {\n\n}"]],template:function(t,n){1&t&&e._UZ(0,"it-steppers-dynamic-example")(1,"it-source-display",0)(2,"it-steppers-header-example")(3,"it-source-display",1)(4,"it-steppers-mobile-example")(5,"it-source-display",2)},dependencies:[T.F,l,c,m]});class u{constructor(){this.steppersContainer=b.wx.find(t=>"SteppersContainerComponent"===t.name),this.steppersItem=b.wx.find(t=>"SteppersItemComponent"===t.name)}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["it-steppers-index"]],decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["id","example","label","Esempi","active","true",1,"pt-3"],["id","api","label","API",1,"pt-3"],[3,"component"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Steppers"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Gli \u201cStepper\u201d mostrano l\u2019avanzamento del progresso di una procedura a pi\xf9 passi attraverso la numerazione dei passi stessi."),e.qZA(),e.TgZ(4,"it-tab-container")(5,"it-tab-item",2),e._UZ(6,"it-steppers-examples"),e.qZA(),e.TgZ(7,"it-tab-item",3)(8,"h2"),e._uU(9,"Steppers container"),e.qZA(),e._UZ(10,"it-api-parameters",4),e.TgZ(11,"h2"),e._uU(12,"Steppers item"),e.qZA(),e._UZ(13,"it-api-parameters",4),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("component",n.steppersContainer),e.xp6(3),e.Q6J("component",n.steppersItem))},dependencies:[Z.G,k.H,w.D,d],encapsulation:2});const U=[{path:"",component:u}];class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.Bz.forChild(U),C.Bz]});class a{}a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,x.m,v.u5,o]})}}]);