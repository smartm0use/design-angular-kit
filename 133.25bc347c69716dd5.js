"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[133],{9133:(U,r,d)=>{d.r(r),d.d(r,{BadgeModule:()=>R});var c=d(4755),s=d(9401),p=d(732),g=d(877),m=d(7069),e=d(2504),u=d(8340),v=d(5792),C=d(2717),x=d(6242),b=d(3952),f=d(7417),h=d(4127),B=d(3512);function T(n,a){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"it-radio-button",14),e.NdJ("ngModelChange",function(l){e.CHM(o);const i=e.oxw();return e.KtG(i.selectedColor=l)}),e.qZA(),e.BQk()}if(2&n){const o=a.$implicit,t=a.index,l=e.oxw();e.xp6(1),e.Q6J("id","color-"+t)("label",o)("value",o)("ngModel",l.selectedColor)}}let Z=(()=>{class n{constructor(){this.colors=["primary","secondary","danger","warning","success"],this.selectedColor="primary",this.badgeText="New",this.isRounded=!1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-badge-example"]],decls:31,vars:8,consts:[[1,"bd-example"],[1,"row"],[1,"col-4"],[1,"example-section"],[1,"mt-4"],["label","Testo badge",3,"ngModel","ngModelChange"],[1,"col-6"],[4,"ngFor","ngForOf"],["for","isRounded"],["label","Rounded",3,"ngModel","ngModelChange"],[1,"col-6","offset-2"],[1,"card-title"],[3,"itBadge","rounded"],["href","#",3,"itBadge","rounded"],["name","color",3,"id","label","value","ngModel","ngModelChange"]],template:function(o,t){1&o&&(e.TgZ(0,"h3"),e._uU(1,"Configurazione badge"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"it-input",5),e.NdJ("ngModelChange",function(i){return t.badgeText=i}),e.qZA(),e._UZ(8,"hr"),e.qZA(),e.TgZ(9,"div",1)(10,"div",6)(11,"label")(12,"strong"),e._uU(13,"Colore Badge"),e.qZA()(),e.YNc(14,T,2,4,"ng-container",7),e.qZA(),e.TgZ(15,"div",6)(16,"label",8)(17,"strong"),e._uU(18,"Badge arrotondato"),e.qZA()(),e.TgZ(19,"it-checkbox",9),e.NdJ("ngModelChange",function(i){return t.isRounded=i}),e.qZA()()()()(),e.TgZ(20,"div",10)(21,"h4",11),e._uU(22,"Risultato badge"),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Testo di esempio "),e.TgZ(25,"span",12),e._uU(26),e.qZA()(),e.TgZ(27,"h5"),e._uU(28,"Link di esempio "),e.TgZ(29,"a",13),e._uU(30,"link"),e.qZA()()()()()),2&o&&(e.xp6(7),e.Q6J("ngModel",t.badgeText),e.xp6(7),e.Q6J("ngForOf",t.colors),e.xp6(5),e.Q6J("ngModel",t.isRounded),e.xp6(6),e.Q6J("itBadge",t.selectedColor)("rounded",t.isRounded),e.xp6(1),e.Oqu(t.badgeText),e.xp6(3),e.Q6J("itBadge",t.selectedColor)("rounded",t.isRounded))},dependencies:[c.sg,s.JJ,s.On,b.Y,f.f,h.g,B.C]}),n})(),M=(()=>{class n{constructor(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-badge-examples"]],decls:2,vars:0,consts:[["html",'<h3>Configurazione badge</h3>\n<div class="bd-example">\n\n  <div class="row">\n    <div class="col-4">\n      <div class="example-section">\n\n        <div class="mt-4">\n          <it-input label="Testo badge" [(ngModel)]="badgeText"></it-input>\n          <hr>\n        </div>\n        <div class="row">\n          <div class="col-6">\n            <label><strong>Colore Badge</strong></label>\n            <ng-container *ngFor="let color of colors; let i = index">\n              <it-radio-button [id]="\'color-\'+i" name="color"\n                               [label]="color" [value]="color"\n                               [(ngModel)]="selectedColor"></it-radio-button>\n            </ng-container>\n          </div>\n          <div class="col-6">\n            <label for="isRounded"><strong>Badge arrotondato</strong></label>\n\n            <it-checkbox [(ngModel)]="isRounded" label="Rounded"></it-checkbox>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class="col-6 offset-2">\n      <h4 class="card-title">Risultato badge</h4>\n\n      <h5>Testo di esempio <span [itBadge]="selectedColor" [rounded]="isRounded">/{/{badgeText/}/}</span></h5>\n\n      <h5>Link di esempio <a href="#" [itBadge]="selectedColor" [rounded]="isRounded">link</a></h5>\n    </div>\n  </div>\n\n</div>',"typescript","import { Component } from '@angular/core';\nimport { BadgeColor } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';\n\n@Component({\n  selector: 'it-badge-example',\n  templateUrl: './badge-example.component.html',\n  styleUrls: ['./badge-example.component.scss']\n})\nexport class BadgeExampleComponent {\n  colors: Array<BadgeColor> = [\n    'primary',\n    'secondary',\n    'danger',\n    'warning',\n    'success'\n  ];\n\n  selectedColor: BadgeColor = 'primary';\n  badgeText = 'New';\n\n  isRounded = false;\n}"]],template:function(o,t){1&o&&e._UZ(0,"it-badge-example")(1,"it-source-display",0)},dependencies:[x.F,Z]}),n})();const y=[{path:"",component:(()=>{class n{constructor(){this.directive=m.s7.find(o=>"ItBadgeDirective"===o.name)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-badge-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,t){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Badge"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette."),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-badge-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&o&&(e.xp6(4),e.Q6J("innerHTML",t.directive.description,e.oJD),e.xp6(5),e.Q6J("component",t.directive))},dependencies:[u.G,v.U,C.m,M]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(y),g.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,s.u5,p.m,A]}),n})()}}]);