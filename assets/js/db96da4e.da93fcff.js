"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[525],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=d(a),c=l,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return a?n.createElement(g,r(r({ref:e},u),{},{components:a})):n.createElement(g,r({ref:e},u))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:l,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1648:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const o={description:"Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita."},r="Stato Prodotti",i={unversionedId:"modules/orders/product-states",id:"modules/orders/product-states",title:"Stato Prodotti",description:"Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita.",source:"@site/docs/modules/orders/product-states.md",sourceDirName:"modules/orders",slug:"/modules/orders/product-states",permalink:"/docs/modules/orders/product-states",draft:!1,tags:[],version:"current",frontMatter:{description:"Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita."},sidebar:"tutorialSidebar",previous:{title:"Ordini",permalink:"/docs/category/ordini"},next:{title:"Etichette (Tags)",permalink:"/docs/modules/orders/tags"}},s={},d=[{value:"Gli Stati del Prodotto",id:"gli-stati-del-prodotto",level:2},{value:"Nuovo",id:"nuovo",level:3},{value:"Confermato",id:"confermato",level:3},{value:"In Spedizione",id:"in-spedizione",level:3},{value:"Consegnato",id:"consegnato",level:3},{value:"Residuo",id:"residuo",level:3},{value:"Tabella Riassuntiva delle Azioni",id:"tabella-riassuntiva-delle-azioni",level:2}],u={toc:d},p="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stato-prodotti"},"Stato Prodotti"),(0,l.kt)("p",null,"Lo stato del prodotto ordinato permette di identificare la posizione del prodotto nel flusso di vendita. Questi stati\nnon sono modificabili liberamente, ma vengono aggiornati dall'applicativo per ridurre il lavoro e minimizzare i\npotenziali errori."),(0,l.kt)("div",{class:"state-list"},(0,l.kt)("span",{class:"label label-new"},"Nuovo"),"\u2192",(0,l.kt)("div",null,(0,l.kt)("span",{class:"label label-confirmed"},"Confermato"),(0,l.kt)("span",{style:{marginTop:8},class:"label label-residual"},"Residuo")),"\u2192",(0,l.kt)("span",{class:"label label-assigned"},"In spedizione"),"\u2192",(0,l.kt)("span",{class:"label label-delivered"},"Consegnato")),(0,l.kt)("h2",{id:"gli-stati-del-prodotto"},"Gli Stati del Prodotto"),(0,l.kt)("p",null,"Un prodotto ordinato pu\xf2 avere un solo stato alla volta, il quale determina le azioni che possono essere eseguite sul\nprodotto stesso o sull'ordine che lo contiene. Di seguito \xe8 riportata la lista di tutti gli stati possibili e le\nrelative limitazioni."),(0,l.kt)("h3",{id:"nuovo"},"Nuovo"),(0,l.kt)("p",null,"Questo stato viene automaticamente assegnato quando un ordine viene inserito da un agente."),(0,l.kt)("h3",{id:"confermato"},"Confermato"),(0,l.kt)("p",null,'Questo stato viene automaticamente assegnato quando un ordine viene inserito da un utente amministratore o\ncollaboratore. Pu\xf2 essere selezionato confermando i prodotti con stato "Nuovo" tramite il pulsante "Conferma Prodotti"\npresente nella pagina dell\'ordine.'),(0,l.kt)("h3",{id:"in-spedizione"},"In Spedizione"),(0,l.kt)("p",null,"Questo stato viene automaticamente assegnato quando un prodotto viene inserito in una spedizione. Lo stato viene rimosso\nquando il prodotto \xe8 rimosso dalla spedizione."),(0,l.kt)("h3",{id:"consegnato"},"Consegnato"),(0,l.kt)("p",null,"Questo stato viene automaticamente assegnato quando la spedizione che contiene il prodotto viene consegnata."),(0,l.kt)("h3",{id:"residuo"},"Residuo"),(0,l.kt)("p",null,"Questo stato viene assegnato ai residui generati automaticamente in seguito allo scarico da magazzino o all'aggiunta del\nprodotto alla spedizione."),(0,l.kt)("h2",{id:"tabella-riassuntiva-delle-azioni"},"Tabella Riassuntiva delle Azioni"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stato"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifica dettagli ordine"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifica agente"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifica destinazione"),(0,l.kt)("th",{parentName:"tr",align:null},"Elimina riga"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifica quantit\xe0"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifica prezzo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"label label-small label-new"},"Nuovo")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"label label-small label-confirmed"},"Confermato"),(0,l.kt)("span",{style:{marginTop:8},class:"label label-small label-residual"},"Residuo")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"label label-small label-assigned"},"In spedizione")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"label label-small label-delivered"},"Consegnato")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);