"use strict";var w=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var z=w(function(U,O){
var E=require('@stdlib/strided-base-reinterpret-complex128/dist'),F=require('@stdlib/complex-float64-real/dist'),G=require('@stdlib/complex-float64-imag/dist');function H(e,r,a,m,i,c,j,v,x){var s,n,o,q,_,g,t,u,y,f,p,d,l;if(e<=0)return i;for(s=E(r,0),n=E(i,0),t=m*2,u=j*2,_=a*2,g=c*2,o=F(x),q=G(x),l=0;l<e;l++)y=n[u],f=n[u+1],p=s[t],d=s[t+1],s[t]=v*p+(o*y-q*f),s[t+1]=v*d+(o*f+q*y),n[u]=v*y-(o*p+q*d),n[u+1]=v*f-(o*d-q*p),t+=_,u+=g;return i}O.exports=H
});var k=w(function(V,h){
var b=require('@stdlib/strided-base-stride2offset/dist'),I=z();function J(e,r,a,m,i,c,j){var v=b(e,a),x=b(e,i);return I(e,r,a,v,m,i,x,c,j)}h.exports=J
});var C=w(function(W,B){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=k(),L=z();K(A,"ndarray",L);B.exports=A
});var M=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=C(),R,D=P(M(__dirname,"./native.js"));Q(D)?R=S:R=D;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
