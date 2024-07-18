import{a as S,b as R,c as N,d as V}from"./chunk-XTG6MU3L.js";import{T as I,U as w,W as D,X as B,Y as T,Z as j,ea as P,fa as z,ga as L,k as F,l as G,wa as g}from"./chunk-R4LXWPNQ.js";import{l as h}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Mc as M,Nb as a,Pb as C,Ra as s,Rb as y,Sa as x,Sb as b,Tb as E,U as u,ba as p,ca as f,ib as d,ub as i,vb as o,wb as l}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";var W=(()=>{let e=class e{constructor(r){this.formBuilder=r,this.rating=3,this.formGroup=this.formBuilder.group({rating:[0]})}};e.\u0275fac=function(n){return new(n||e)(x(P))},e.\u0275cmp=p({type:e,selectors:[["it-rating-example"]],decls:19,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col"],[3,"ngModelChange","label","ngModel"],[3,"formGroup"],["formControlName","rating"],[1,"pt-5"],[1,"example-section"],[1,"example-selected-value"]],template:function(n,m){n&1&&(i(0,"h3"),a(1,"Con Label"),o(),i(2,"div",0)(3,"div",1)(4,"div",2)(5,"h5"),a(6,"NgModel"),o(),i(7,"it-rating",3),E("ngModelChange",function(v){return b(m.rating,v)||(m.rating=v),v}),o()(),i(8,"div",2)(9,"h5"),a(10,"FormGroup"),o(),i(11,"form",4),l(12,"it-rating",5),i(13,"div",6)(14,"h4"),a(15,"Risultato"),o(),i(16,"div",7)(17,"div",8),a(18),o()()()()()()()),n&2&&(s(7),d("label",m.rating+" stelle"),y("ngModel",m.rating),s(4),d("formGroup",m.formGroup),s(7),C("Valore selezionato: ",m.formGroup.get("rating").value,""))},dependencies:[g,B,I,w,D,T,j],encapsulation:2});let t=e;return t})();var A=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["it-rating-example-readonly"]],decls:5,vars:1,consts:[[1,"bd-example"],[1,"container-fluid","pb-4","mb-4"],["disabled","true",3,"value"]],template:function(n,m){n&1&&(i(0,"h3"),a(1,"Sola lettura"),o(),i(2,"div",0)(3,"div",1),l(4,"it-rating",2),o()()),n&2&&(s(4),d("value",4))},dependencies:[g],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["it-rating-examples"]],decls:4,vars:0,consts:[["html",`<h3>Con Label</h3>
<div class="bd-example">
  <div class="row">
    <div class="col">
      <h5>NgModel</h5>
      <it-rating [label]="rating + ' stelle'" [(ngModel)]="rating"></it-rating>
    </div>
    <div class="col">
      <h5>FormGroup</h5>
      <form [formGroup]="formGroup">
        <it-rating formControlName="rating"></it-rating>

        <div class="pt-5">
          <h4>Risultato</h4>
          <div class="example-section">
            <div class="example-selected-value">Valore selezionato: /{/{ formGroup.get('rating').value /}/}</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-rating-example',
  templateUrl: './rating-example.component.html',
})
export class RatingExampleComponent {
  rating: number = 3;

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      rating: [0],
    });
  }
}`],["html",`<h3>Sola lettura</h3>
<div class="bd-example">
  <div class="container-fluid pb-4 mb-4">
    <it-rating [value]="4" disabled="true"></it-rating>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-rating-example-readonly',
  templateUrl: './rating-example-readonly.component.html',
})
export class RatingExampleReadonlyComponent {}`]],template:function(n,m){n&1&&l(0,"it-rating-example")(1,"it-source-display",0)(2,"it-rating-example-readonly")(3,"it-source-display",1)},dependencies:[N,W,A],encapsulation:2});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.component=S.components.find(r=>r.name==="ItRatingComponent")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["it-rating-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,m){n&1&&(i(0,"h1",0),a(1,"Rating"),o(),i(2,"p",1),a(3,"Per esprimere una valutazione su un contenuto."),o(),i(4,"it-tab-container")(5,"it-tab-item",2),l(6,"it-rating-examples"),o(),i(7,"it-tab-item",3)(8,"h3"),a(9,"RatingComponent"),o(),l(10,"it-api-parameters",4),o()()),n&2&&(s(10),d("component",m.component))},dependencies:[R,G,F,U],encapsulation:2});let t=e;return t})();var Q=[{path:"",component:k}],q=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[h.forChild(Q),h]});let t=e;return t})();var xe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[M,V,q,z,L]});let t=e;return t})();export{xe as RatingModule};
