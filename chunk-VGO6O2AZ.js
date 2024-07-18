import{a as F,b as w,c as R,d as W}from"./chunk-XTG6MU3L.js";import{T as S,U as N,W as z,X as D,Y as V,Z as B,ea as T,fa as j,ga as P,k as G,l as I,va as g}from"./chunk-R4LXWPNQ.js";import{l as h}from"./chunk-SFOJ64YL.js";import"./chunk-XZP45KYQ.js";import{Mc as E,Nb as m,Pb as C,Ra as p,Rb as y,Sa as x,Sb as b,Tb as M,U as f,ba as l,ca as u,ib as c,ub as i,vb as r,wb as s}from"./chunk-W4AT4JIX.js";import"./chunk-UGUGGRN7.js";var A=(()=>{let e=class e{constructor(n){this.formBuilder=n,this.rangeValue=50,this.formGroup=this.formBuilder.group({range:[null]})}};e.\u0275fac=function(o){return new(o||e)(x(T))},e.\u0275cmp=l({type:e,selectors:[["it-range-example"]],decls:9,vars:7,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["label","Esempio ngModel",3,"ngModelChange","ngModel"],[3,"formGroup"],["label","Esempio FormGroup","formControlName","range",3,"min","max","step"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"it-range",3),M("ngModelChange",function(v){return b(a.rangeValue,v)||(a.rangeValue=v),v}),m(4),r()(),i(5,"div",2)(6,"form",4)(7,"it-range",5),m(8),r()()()()()),o&2&&(p(3),y("ngModel",a.rangeValue),p(),C(" ",a.rangeValue," % "),p(2),c("formGroup",a.formGroup),p(),c("min",0)("max",1e3)("step",2),p(),C(" Valore selezionato: ",a.formGroup.get("range").value," "))},dependencies:[g,D,S,N,V,B,z],encapsulation:2});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["it-range-custom-colors"]],decls:8,vars:0,consts:[[1,"bd-example"],[1,"row"],[1,"col-sm-12","col-md-6"],["leftColor","var(--bs-primary)","rightColor","var(--bs-gray-300)"],["leftColor","var(--bs-warning)","rightColor","#ffdc73"]],template:function(o,a){o&1&&(i(0,"h3"),m(1,"Barra personalizzata"),r(),i(2,"div",0)(3,"div",1)(4,"div",2),s(5,"it-range",3),r(),i(6,"div",2),s(7,"it-range",4),r()()())},dependencies:[g],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["it-range-examples"]],decls:4,vars:0,consts:[["html",`<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range label="Esempio ngModel" [(ngModel)]="rangeValue"> /{/{ rangeValue /}/} % </it-range>
    </div>
    <div class="col-sm-12 col-md-6">
      <form [formGroup]="formGroup">
        <it-range label="Esempio FormGroup" [min]="0" [max]="1000" [step]="2" formControlName="range">
          Valore selezionato: /{/{ formGroup.get('range').value /}/}
        </it-range>
      </form>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-range-example',
  templateUrl: './range-example.component.html',
})
export class RangeExampleComponent {
  rangeValue = 50;

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      range: [null],
    });
  }
}`],["html",`<h3>Barra personalizzata</h3>
<div class="bd-example">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-primary)" rightColor="var(--bs-gray-300)"></it-range>
    </div>

    <div class="col-sm-12 col-md-6">
      <it-range leftColor="var(--bs-warning)" rightColor="#ffdc73"></it-range>
    </div>
  </div>
</div>`,"typescript",`import { Component } from '@angular/core';

@Component({
  selector: 'it-range-custom-colors',
  templateUrl: './range-custom-colors.component.html',
})
export class RangeCustomColorsComponent {}`]],template:function(o,a){o&1&&s(0,"it-range-example")(1,"it-source-display",0)(2,"it-range-custom-colors")(3,"it-source-display",1)},dependencies:[R,A,U],encapsulation:2});let t=e;return t})();var k=(()=>{let e=class e{constructor(){this.component=F.components.find(n=>n.name==="ItRangeComponent")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["it-range-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(o,a){o&1&&(i(0,"h1",0),m(1,"Range"),r(),i(2,"p",1),m(3,"Input di intervallo personalizzato per uno stile uniforme su tutti i browser e personalizzazione integrata."),r(),i(4,"it-tab-container")(5,"it-tab-item",2),s(6,"it-range-examples"),r(),i(7,"it-tab-item",3)(8,"h3"),m(9,"ItRangeComponent"),r(),s(10,"it-api-parameters",4),r()()),o&2&&(p(10),c("component",a.component))},dependencies:[w,I,G,L],encapsulation:2});let t=e;return t})();var Q=[{path:"",component:k}],q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[h.forChild(Q),h]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[E,W,q,P,j]});let t=e;return t})();export{he as RangeModule};
