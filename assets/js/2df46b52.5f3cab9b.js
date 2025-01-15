"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[2498],{6222:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"lenguajes de marca/3 Java Script/3.7 DOM/index","title":"3.7 DOM","description":"Introducci\xf3n al DOM","source":"@site/docs/lenguajes de marca/3 Java Script/3.7 DOM/index.md","sourceDirName":"lenguajes de marca/3 Java Script/3.7 DOM","slug":"/lenguajes de marca/3 Java Script/3.7 DOM/","permalink":"/docs/lenguajes de marca/3 Java Script/3.7 DOM/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"llmmSidebar","previous":{"title":"3.6 Funciones en JavaScript","permalink":"/docs/lenguajes de marca/3 Java Script/3.6 Funciones"},"next":{"title":"3.7.1 Estructura del DOM","permalink":"/docs/lenguajes de marca/3 Java Script/3.7 DOM/3.7.1 Estructura del DOM"}}');var t=r(4848),i=r(8453);const s={sidebar_position:6},d="3.7 DOM",l={},o=[{value:"<strong>Introducci\xf3n al DOM</strong>",id:"introducci\xf3n-al-dom",level:2},{value:"\xbfQu\xe9 es el DOM? \u2753",id:"qu\xe9-es-el-dom-",level:3},{value:"Relaci\xf3n entre HTML, CSS y el DOM \ud83c\udf10",id:"relaci\xf3n-entre-html-css-y-el-dom-",level:3},{value:"DOM vs. BOM vs. JavaScript \ud83e\udd14",id:"dom-vs-bom-vs-javascript-",level:3},{value:"Estructura Jer\xe1rquica del DOM \ud83c\udfd7\ufe0f",id:"estructura-jer\xe1rquica-del-dom-\ufe0f",level:3},{value:"Ventajas del DOM \u2705",id:"ventajas-del-dom-",level:3},{value:"Ejemplo B\xe1sico del DOM \ud83d\udcda",id:"ejemplo-b\xe1sico-del-dom-",level:3}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"37-dom",children:"3.7 DOM"})}),"\n",(0,t.jsx)(n.h2,{id:"introducci\xf3n-al-dom",children:(0,t.jsx)(n.strong,{children:"Introducci\xf3n al DOM"})}),"\n",(0,t.jsx)(n.p,{children:"\xa1Claro! Aqu\xed tienes tu texto con emojis a\xf1adidos para hacerlo m\xe1s visual y atractivo:"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["El ",(0,t.jsx)(n.strong,{children:"DOM (Document Object Model)"})," \ud83c\udf10 es una interfaz de programaci\xf3n para documentos HTML y XML. Permite a los desarrolladores \ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb acceder y manipular los contenidos \ud83d\udcc4, la estructura \ud83e\uddf1 y los estilos \ud83c\udfa8 de un documento de manera din\xe1mica. Es la base para la interacci\xf3n entre JavaScript y el navegador \ud83c\udf0d."]}),"\n",(0,t.jsx)(n.p,{children:"El DOM representa el documento como un \xe1rbol de nodos \ud83c\udf33, donde cada nodo corresponde a una parte del documento, como un elemento HTML \ud83c\udff7\ufe0f, un atributo \ud83d\udd11 o un contenido de texto \ud83d\udcdd."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"qu\xe9-es-el-dom-",children:"\xbfQu\xe9 es el DOM? \u2753"}),"\n",(0,t.jsx)(n.p,{children:"El DOM es una representaci\xf3n en memoria \ud83d\udcbe del contenido de un documento web. Cuando un navegador carga una p\xe1gina web:"}),"\n",(0,t.jsxs)(n.p,{children:["1\ufe0f\u20e3 El navegador analiza el HTML y lo convierte en un \xe1rbol de nodos \ud83c\udf32.",(0,t.jsx)(n.br,{}),"\n","2\ufe0f\u20e3 Este \xe1rbol puede ser manipulado mediante JavaScript \ud83d\udda5\ufe0f para actualizar din\xe1micamente el contenido o la estructura de la p\xe1gina \ud83d\udd04."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Caracter\xedsticas principales:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Caracter\xedstica"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Estructura jer\xe1rquica"})," \ud83c\udf33"]}),(0,t.jsx)(n.td,{children:"El DOM organiza el documento como un \xe1rbol, con nodos padres, hijos y hermanos."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Interactividad"})," \ud83d\uddb1\ufe0f"]}),(0,t.jsx)(n.td,{children:"Permite modificar la estructura, el contenido y los estilos del documento."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Est\xe1ndar del W3C"})," \ud83c\udfe2"]}),(0,t.jsx)(n.td,{children:"Es una especificaci\xf3n definida por el World Wide Web Consortium (W3C)."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"relaci\xf3n-entre-html-css-y-el-dom-",children:"Relaci\xf3n entre HTML, CSS y el DOM \ud83c\udf10"}),"\n",(0,t.jsx)(n.p,{children:"El DOM es el punto de conexi\xf3n \ud83d\udd17 entre las tecnolog\xedas web principales:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HTML"})," define la estructura del contenido \ud83c\udfd7\ufe0f."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CSS"})," se utiliza para los estilos visuales \ud83c\udfa8."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JavaScript"})," manipula el DOM para agregar interactividad \u26a1."]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\r\n    HTML --\x3e DOM\r\n    CSS --\x3e DOM\r\n    JS --\x3e DOM"}),"\n",(0,t.jsx)(n.p,{children:"Por ejemplo, cuando cambias el color de un elemento con CSS \ud83c\udfa8, el DOM actualiza su representaci\xf3n visual en el navegador \ud83d\udda5\ufe0f. Cuando usas JavaScript para cambiar el texto de un p\xe1rrafo \u270f\ufe0f, el DOM modifica el nodo correspondiente y refleja el cambio en la interfaz."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dom-vs-bom-vs-javascript-",children:"DOM vs. BOM vs. JavaScript \ud83e\udd14"}),"\n",(0,t.jsx)(n.p,{children:"Es importante distinguir entre tres conceptos clave:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Concepto"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"DOM"})," \ud83d\udcc4"]}),(0,t.jsx)(n.td,{children:"Interfaz que permite manipular la estructura y contenido del documento."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"BOM"})," \ud83c\udf10"]}),(0,t.jsx)(n.td,{children:"(Browser Object Model) Permite interactuar con el navegador (ventanas, URL, historial)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"JavaScript"})," \ud83d\udcbb"]}),(0,t.jsx)(n.td,{children:"Lenguaje de programaci\xf3n que permite acceder y manipular tanto el DOM como el BOM."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"estructura-jer\xe1rquica-del-dom-\ufe0f",children:"Estructura Jer\xe1rquica del DOM \ud83c\udfd7\ufe0f"}),"\n",(0,t.jsx)(n.p,{children:"El documento HTML se convierte en un \xe1rbol de nodos \ud83c\udf32, donde cada etiqueta es un nodo \ud83c\udff7\ufe0f y cada texto o atributo es un nodo hijo. Por ejemplo, el siguiente c\xf3digo HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Mi p\xe1gina</title>\r\n  </head>\r\n  <body>\r\n    <h1>Hola, DOM</h1>\r\n    <p>Este es un p\xe1rrafo.</p>\r\n  </body>\r\n</html>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Se representar\xeda en el DOM como:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\r\n    A[Document] --\x3e B[html]\r\n    B --\x3e C[head]\r\n    B --\x3e D[body]\r\n    C --\x3e E[title]\r\n    D --\x3e F[h1]\r\n    D --\x3e G[p]\r\n    E --\x3e H[Mi p\xe1gina]\r\n    F --\x3e I[Hola, DOM]\r\n    G --\x3e J[Este es un p\xe1rrafo.]"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ventajas-del-dom-",children:"Ventajas del DOM \u2705"}),"\n",(0,t.jsxs)(n.p,{children:["1\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Interactividad Din\xe1mica:"})," Puedes modificar elementos sin recargar la p\xe1gina (por ejemplo, a\xf1adir nuevos botones o actualizar contenido).",(0,t.jsx)(n.br,{}),"\n","2\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Accesibilidad:"})," Ofrece m\xe9todos y propiedades est\xe1ndar para manipular cualquier nodo del documento.",(0,t.jsx)(n.br,{}),"\n","3\ufe0f\u20e3 ",(0,t.jsx)(n.strong,{children:"Flexibilidad:"})," Compatible con documentos HTML y XML."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ejemplo-b\xe1sico-del-dom-",children:"Ejemplo B\xe1sico del DOM \ud83d\udcda"}),"\n",(0,t.jsx)(n.p,{children:"Un ejemplo sencillo para entender c\xf3mo JavaScript interact\xfaa con el DOM:"}),"\n",(0,t.jsx)(n.p,{children:"HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <h1 id="titulo">Bienvenido</h1>\r\n    <button id="cambiarTexto">Cambiar Texto</button>\r\n\r\n    <script src="script.js"><\/script>\r\n  </body>\r\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["JavaScript (",(0,t.jsx)(n.code,{children:"script.js"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Seleccionar el nodo del t\xedtulo\r\nconst titulo = document.getElementById('titulo');\r\n\r\n// Cambiar el texto cuando se haga clic en el bot\xf3n\r\ndocument.getElementById('cambiarTexto').addEventListener('click', () => {\r\n  titulo.textContent = \"\xa1Hola, DOM!\";\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Cuando el usuario hace clic en el bot\xf3n \ud83d\uddb1\ufe0f, el DOM actualiza din\xe1micamente el contenido del ",(0,t.jsx)(n.code,{children:"h1"})," sin necesidad de recargar la p\xe1gina \ud83d\udd04."]}),"\n",(0,t.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var a=r(6540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);