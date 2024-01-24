"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[7495],{7495:(U,l,a)=>{a.r(l),a.d(l,{RatingModule:()=>R});var p=a(6814),c=a(7114),s=a(1640),d=a(7069),t=a(5879),u=a(528),g=a(6273),f=a(4580),h=a(6099),i=a(6223),m=a(2887);let v=(()=>{class n{constructor(o){this.formBuilder=o,this.rating=3,this.formGroup=this.formBuilder.group({rating:[0]})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["it-rating-example"]],decls:19,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"label","ngModel","ngModelChange"],[3,"formGroup"],["formControlName","rating"],[1,"pt-5"],[1,"example-section"],[1,"example-selected-value"]],template:function(e,r){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Con Label"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),t._uU(6,"NgModel"),t.qZA(),t.TgZ(7,"it-rating",3),t.NdJ("ngModelChange",function(T){return r.rating=T}),t.qZA()(),t.TgZ(8,"div",2)(9,"h5"),t._uU(10,"FormGroup"),t.qZA(),t.TgZ(11,"form",4),t._UZ(12,"it-rating",5),t.TgZ(13,"div",6)(14,"h4"),t._uU(15,"Risultato"),t.qZA(),t.TgZ(16,"div",7)(17,"div",8),t._uU(18),t.qZA()()()()()()()),2&e&&(t.xp6(7),t.Q6J("label",r.rating+" stelle")("ngModel",r.rating),t.xp6(4),t.Q6J("formGroup",r.formGroup),t.xp6(7),t.hij("Valore selezionato: ",r.formGroup.get("rating").value,""))},dependencies:[m.X,i._Y,i.JJ,i.JL,i.On,i.sg,i.u],encapsulation:2})}return n})(),x=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["it-rating-example-readonly"]],decls:5,vars:1,consts:[[1,"bd-example"],[1,"container-fluid","pb-4","mb-4"],["disabled","true",3,"value"]],template:function(e,r){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Sola lettura"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1),t._UZ(4,"it-rating",2),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("value",4))},dependencies:[m.X],encapsulation:2})}return n})(),Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["it-rating-examples"]],decls:4,vars:0,consts:[["html",'<h3>Con Label</h3>\n<div class="bd-example">\n  <div class="row">\n    <div class="col">\n      <h5>NgModel</h5>\n      <it-rating [label]="rating + \' stelle\'" [(ngModel)]="rating"></it-rating>\n    </div>\n    <div class="col">\n      <h5>FormGroup</h5>\n      <form [formGroup]="formGroup">\n        <it-rating formControlName="rating"></it-rating>\n\n        <div class="pt-5">\n          <h4>Risultato</h4>\n          <div class="example-section">\n            <div class="example-selected-value">Valore selezionato: /{/{formGroup.get(\'rating\').value/}/}</div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'it-rating-example',\n  templateUrl: './rating-example.component.html'\n})\nexport class RatingExampleComponent {\n  rating: number = 3;\n\n  formGroup: FormGroup;\n\n  constructor(\n    private readonly formBuilder: FormBuilder\n  ) {\n    this.formGroup = this.formBuilder.group({\n      rating: [0]\n    })\n  }\n}"],["html",'<h3>Sola lettura</h3>\n<div class="bd-example">\n  <div class="container-fluid pb-4 mb-4">\n    <it-rating [value]="4" disabled="true"></it-rating>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-rating-example-readonly',\n  templateUrl: './rating-example-readonly.component.html'\n})\nexport class RatingExampleReadonlyComponent {\n\n}"]],template:function(e,r){1&e&&t._UZ(0,"it-rating-example")(1,"it-source-display",0)(2,"it-rating-example-readonly")(3,"it-source-display",1)},dependencies:[h.F,v,x],encapsulation:2})}return n})();const C=[{path:"",component:(()=>{class n{constructor(){this.component=d.wx.find(o=>"ItRatingComponent"===o.name)}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["it-rating-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(e,r){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Rating"),t.qZA(),t.TgZ(2,"p",1),t._uU(3,"Per esprimere una valutazione su un contenuto."),t.qZA(),t.TgZ(4,"it-tab-container")(5,"it-tab-item",2),t._UZ(6,"it-rating-examples"),t.qZA(),t.TgZ(7,"it-tab-item",3)(8,"h3"),t._uU(9,"RatingComponent"),t.qZA(),t._UZ(10,"it-api-parameters",4),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("component",r.component))},dependencies:[u.G,g.U,f.m,Z],encapsulation:2})}return n})()}];let y=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(C),s.Bz]})}return n})(),R=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[p.ez,c.m,y,i.u5,i.UX]})}return n})()}}]);