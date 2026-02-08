"use strict";var w=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var z=w(function(U,O){
var E=require('@stdlib/strided-base-reinterpret-complex128/dist'),F=require('@stdlib/complex-float64-real/dist'),G=require('@stdlib/complex-float64-imag/dist');function H(r,e,q,m,a,c,j,i,x){var u,s,n,o,_,g,v,t,y,f,p,d,l;if(r<=0)return a;for(u=E(e,0),s=E(a,0),v=m*2,t=j*2,_=q*2,g=c*2,n=F(x),o=G(x),l=0;l<r;l++)y=s[t],f=s[t+1],p=u[v],d=u[v+1],u[v]=i*p+(n*y-o*f),u[v+1]=i*d+(n*f+o*y),s[t]=i*y-(n*p+o*d),s[t+1]=i*f-(n*d-o*p),v+=_,t+=g;return a}O.exports=H
});var k=w(function(V,h){
var b=require('@stdlib/strided-base-stride2offset/dist'),I=z();function J(r,e,q,m,a,c,j){var i=b(r,q),x=b(r,a);return I(r,e,q,i,m,a,x,c,j)}h.exports=J
});var C=w(function(W,B){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=k(),L=z();K(A,"ndarray",L);B.exports=A
});var M=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=C(),R,D=P(M(__dirname,"./native.js"));Q(D)?R=S:R=D;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
