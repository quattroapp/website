"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[703],{3905:(e,i,n)=>{n.d(i,{Zo:()=>p,kt:()=>f});var t=n(7294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},p=function(e){var i=c(e.components);return t.createElement(l.Provider,{value:i},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},m=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,r(r({ref:i},p),{},{components:n})):t.createElement(f,r({ref:i},p))}));function f(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7413:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={},r="Side effects",s={unversionedId:"modules/shipments/side-effects",id:"modules/shipments/side-effects",title:"Side effects",description:"La creazione, modifica e eliminazione delle spedizioni viene monitorata dal sistema che, a volte, attiva alcuni processi",source:"@site/docs/modules/shipments/side-effects.md",sourceDirName:"modules/shipments",slug:"/modules/shipments/side-effects",permalink:"/docs/modules/shipments/side-effects",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spedizioni",permalink:"/docs/category/spedizioni"}},l={},c=[{value:"Aggiornamento di una spedizione",id:"aggiornamento-di-una-spedizione",level:2},{value:"Spedizione in carico",id:"spedizione-in-carico",level:3},{value:"Chiusura della spedizione",id:"chiusura-della-spedizione",level:3}],p={toc:c},d="wrapper";function u(e){let{components:i,...n}=e;return(0,a.kt)(d,(0,t.Z)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"side-effects"},"Side effects"),(0,a.kt)("p",null,"La creazione, modifica e eliminazione delle spedizioni viene monitorata dal sistema che, a volte, attiva alcuni processi\nsecondari per aggiornare altri dati o attivare altre funzioni. Di seguito sono indicate le attivit\xe0 che inizializzano\nquesti nuovi processi e i loro effetti."),(0,a.kt)("h2",{id:"aggiornamento-di-una-spedizione"},"Aggiornamento di una spedizione"),(0,a.kt)("h3",{id:"spedizione-in-carico"},"Spedizione in carico"),(0,a.kt)("p",null,"Quando una spedizione viene segnata come ",(0,a.kt)("inlineCode",{parentName:"p"},"in carico")," e questa \xe8 stata gi\xe0 assegnata ad un magazzino di partenza, il\nsistema attiva un processo secondario per calcolare in maniera automatica il percorso pi\xf9 rapido e l'ordine di consegna\ndella merce."),(0,a.kt)("h3",{id:"chiusura-della-spedizione"},"Chiusura della spedizione"),(0,a.kt)("p",null,"Quando una spedizione viene chiusa (i.e. lo stato diventa ",(0,a.kt)("inlineCode",{parentName:"p"},"completata"),"), il sistema attiva un processo secondario che\naggiorna in maniera automatica lo stato degli ordini collegati.\nIn particolare se l'ordine \xe8 stato completamente spedito il suo nuovo stato sar\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"evaso"),", in alternativa\nsar\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"parzialmente evaso"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"L'aggiornamento degli ordini viene effettuato in un processo secondario. potrebbero volerci alcuni secondi per vedere i\nnuovi dati aggiornati sul portale e sulle applicazioni esterne.")))}u.isMDXComponent=!0}}]);