"use strict";(self.webpackChunkp_my_dm=self.webpackChunkp_my_dm||[]).push([[3967],{1870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/Transacciones","title":"Transacciones y Lotes","description":"Firestore ofrece dos mecanismos para realizar operaciones at\xf3micas sobre m\xfaltiples documentos:","source":"@site/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/Transacciones.md","sourceDirName":"aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore","slug":"/aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/Transacciones","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/Transacciones","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"movilesSidebar","previous":{"title":"Operaciones CRUD","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/operaciones CRUD"},"next":{"title":"Consultas y Filtrado","permalink":"/docs/aplicaciones m\xf3viles/5 Persistencia/FireBase/Firestore/consultas y filtrado"}}');var i=s(4848),a=s(8453);const c={sidebar_position:6},o="Transacciones y Lotes",t={},l=[{value:"1. <strong>Transacciones en Firestore</strong>",id:"1-transacciones-en-firestore",level:2},{value:"2. <strong>Escrituras en Lote en Firestore (<code>batch()</code>)</strong>",id:"2-escrituras-en-lote-en-firestore-batch",level:2},{value:"Actualizar m\xfaltiples documentos en Batch",id:"actualizar-m\xfaltiples-documentos-en-batch",level:3},{value:"Agregar m\xfaltiples documentos con Batch",id:"agregar-m\xfaltiples-documentos-con-batch",level:3},{value:"Eliminar m\xfaltiples documentos con Batch",id:"eliminar-m\xfaltiples-documentos-con-batch",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"transacciones-y-lotes",children:"Transacciones y Lotes"})}),"\n",(0,i.jsx)(n.p,{children:"Firestore ofrece dos mecanismos para realizar operaciones at\xf3micas sobre m\xfaltiples documentos:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Transacciones (",(0,i.jsx)(n.code,{children:"runTransaction()"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiten ",(0,i.jsx)(n.strong,{children:"leer y modificar"})," m\xfaltiples documentos de manera segura."]}),"\n",(0,i.jsxs)(n.li,{children:["Se garantiza que si alguna operaci\xf3n falla, ",(0,i.jsx)(n.strong,{children:"ning\xfan cambio se aplica"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Escrituras en lote (",(0,i.jsx)(n.code,{children:"batch()"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permiten ",(0,i.jsx)(n.strong,{children:"modificar varios documentos al mismo tiempo"}),", pero sin leer datos."]}),"\n",(0,i.jsxs)(n.li,{children:["Son m\xe1s r\xe1pidas que las transacciones porque ",(0,i.jsx)(n.strong,{children:"no dependen de datos previos"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Ambas opciones garantizan ",(0,i.jsx)(n.strong,{children:"consistencia"})," en la base de datos y evitan problemas de concurrencia."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"1-transacciones-en-firestore",children:["1. ",(0,i.jsx)(n.strong,{children:"Transacciones en Firestore"})]}),"\n",(0,i.jsxs)(n.p,{children:["Las ",(0,i.jsx)(n.strong,{children:"transacciones"})," se utilizan cuando necesitamos ",(0,i.jsx)(n.strong,{children:"leer y luego modificar"})," datos de forma segura, evitando condiciones de carrera."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udccc ",(0,i.jsx)(n.strong,{children:"Ejemplo de uso:"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Un usuario compra una entrada para una pel\xedcula de cine."}),"\n",(0,i.jsx)(n.li,{children:"Antes de descontar la entrada, verificamos que haya disponibilidad."}),"\n",(0,i.jsx)(n.li,{children:"Si hay entradas disponibles, reducimos la cantidad y confirmamos la compra."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,i.jsx)(n.strong,{children:"Ejemplo: Descontar cupos de una pel\xedcula"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'FirebaseFirestore db = FirebaseFirestore.getInstance();\r\n\r\nDocumentReference peliculaRef = db.collection("peliculas").document("inception");\r\n\r\ndb.runTransaction(transaction -> {\r\n    DocumentSnapshot snapshot = transaction.get(peliculaRef);\r\n\r\n    Long cuposDisponibles = snapshot.getLong("cupos");\r\n    if (cuposDisponibles != null && cuposDisponibles > 0) {\r\n        transaction.update(peliculaRef, "cupos", cuposDisponibles - 1);\r\n        return "Compra exitosa, cupos restantes: " + (cuposDisponibles - 1);\r\n    } else {\r\n        throw new FirebaseFirestoreException("No hay cupos disponibles",\r\n                FirebaseFirestoreException.Code.ABORTED);\r\n    }\r\n}).addOnSuccessListener(result -> Log.d("Firestore", result))\r\n  .addOnFailureListener(e -> Log.w("Firestore", "Error en la transacci\xf3n", e));\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Explicaci\xf3n:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"runTransaction()"})," ejecuta una ",(0,i.jsx)(n.strong,{children:"operaci\xf3n at\xf3mica"})," sobre un documento."]}),"\n",(0,i.jsxs)(n.li,{children:["Se ",(0,i.jsx)(n.strong,{children:"lee el n\xfamero de entradas disponibles"})," en la pel\xedcula."]}),"\n",(0,i.jsxs)(n.li,{children:["Si hay entradas disponibles, se ",(0,i.jsx)(n.strong,{children:"descuenta una"})," y se actualiza Firestore."]}),"\n",(0,i.jsxs)(n.li,{children:["Si no hay entradas, se lanza una ",(0,i.jsx)(n.strong,{children:"excepci\xf3n para abortar la transacci\xf3n"}),"."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Importante:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.strong,{children:"otra transacci\xf3n"})," intenta modificar el mismo documento ",(0,i.jsx)(n.strong,{children:"al mismo tiempo"}),", Firestore ",(0,i.jsx)(n.strong,{children:"reintentar\xe1 la operaci\xf3n autom\xe1ticamente"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Si hay conflictos repetidos, ",(0,i.jsx)(n.strong,{children:"la transacci\xf3n fallar\xe1 tras varios intentos"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"2-escrituras-en-lote-en-firestore-batch",children:["2. ",(0,i.jsxs)(n.strong,{children:["Escrituras en Lote en Firestore (",(0,i.jsx)(n.code,{children:"batch()"}),")"]})]}),"\n",(0,i.jsxs)(n.p,{children:["Las ",(0,i.jsx)(n.strong,{children:"escrituras en lote"})," permiten ",(0,i.jsx)(n.strong,{children:"modificar m\xfaltiples documentos simult\xe1neamente"})," sin necesidad de leerlos."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udccc ",(0,i.jsx)(n.strong,{children:"Ejemplo de uso:"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Cambiar el estado de m\xfaltiples pel\xedculas a "En cartelera".'}),"\n",(0,i.jsx)(n.li,{children:"Agregar una lista de nuevas pel\xedculas en una sola operaci\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Eliminar m\xfaltiples documentos simult\xe1neamente."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"actualizar-m\xfaltiples-documentos-en-batch",children:"Actualizar m\xfaltiples documentos en Batch"}),"\n",(0,i.jsxs)(n.p,{children:["Podemos usar ",(0,i.jsx)(n.code,{children:"batch.commit()"})," para modificar ",(0,i.jsx)(n.strong,{children:"varios documentos"})," en una sola operaci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,i.jsx)(n.strong,{children:"Ejemplo: Actualizar m\xfaltiples documentos"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'FirebaseFirestore db = FirebaseFirestore.getInstance();\r\n\r\nWriteBatch batch = db.batch();\r\n\r\nDocumentReference pelicula1 = db.collection("peliculas").document("inception");\r\nDocumentReference pelicula2 = db.collection("peliculas").document("matrix");\r\n\r\nbatch.update(pelicula1, "estado", "En cartelera");\r\nbatch.update(pelicula2, "estado", "En cartelera");\r\n\r\nbatch.commit()\r\n    .addOnSuccessListener(aVoid -> Log.d("Firestore", "Batch completado"))\r\n    .addOnFailureListener(e -> Log.w("Firestore", "Error en batch", e));\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Explicaci\xf3n:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se crea un ",(0,i.jsx)(n.strong,{children:"batch"})," (",(0,i.jsx)(n.code,{children:"WriteBatch batch = db.batch();"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Se a\xf1aden ",(0,i.jsx)(n.strong,{children:"actualizaciones para varios documentos"})," (",(0,i.jsx)(n.code,{children:"batch.update()"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".commit()"})," ejecuta ",(0,i.jsx)(n.strong,{children:"todas las operaciones de una vez"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"agregar-m\xfaltiples-documentos-con-batch",children:"Agregar m\xfaltiples documentos con Batch"}),"\n",(0,i.jsxs)(n.p,{children:["Podemos usar ",(0,i.jsx)(n.code,{children:"batch.set()"})," para agregar ",(0,i.jsx)(n.strong,{children:"varios documentos nuevos"})," en una sola operaci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,i.jsx)(n.strong,{children:"Ejemplo: Agregar varias pel\xedculas al mismo tiempo"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'WriteBatch batch = db.batch();\r\n\r\nDocumentReference peli1 = db.collection("peliculas").document();\r\nDocumentReference peli2 = db.collection("peliculas").document();\r\n\r\nMap<String, Object> datos1 = new HashMap<>();\r\ndatos1.put("titulo", "Titanic");\r\ndatos1.put("director", "James Cameron");\r\n\r\nMap<String, Object> datos2 = new HashMap<>();\r\ndatos2.put("titulo", "Avatar");\r\ndatos2.put("director", "James Cameron");\r\n\r\nbatch.set(peli1, datos1);\r\nbatch.set(peli2, datos2);\r\n\r\nbatch.commit()\r\n    .addOnSuccessListener(aVoid -> Log.d("Firestore", "Pel\xedculas agregadas"))\r\n    .addOnFailureListener(e -> Log.w("Firestore", "Error en batch", e));\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Explicaci\xf3n:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se crean ",(0,i.jsx)(n.strong,{children:"referencias a documentos nuevos"})," (",(0,i.jsx)(n.code,{children:"document()"})," genera un ID autom\xe1tico)."]}),"\n",(0,i.jsxs)(n.li,{children:["Se usa ",(0,i.jsx)(n.code,{children:"batch.set()"})," para a\xf1adir los datos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".commit()"})," ejecuta todas las operaciones ",(0,i.jsx)(n.strong,{children:"en una sola transacci\xf3n"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"eliminar-m\xfaltiples-documentos-con-batch",children:"Eliminar m\xfaltiples documentos con Batch"}),"\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n podemos ",(0,i.jsx)(n.strong,{children:"eliminar varios documentos"})," en un solo lote."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,i.jsx)(n.strong,{children:"Ejemplo: Eliminar varias pel\xedculas"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'WriteBatch batch = db.batch();\r\n\r\nDocumentReference peli1 = db.collection("peliculas").document("inception");\r\nDocumentReference peli2 = db.collection("peliculas").document("matrix");\r\n\r\nbatch.delete(peli1);\r\nbatch.delete(peli2);\r\n\r\nbatch.commit()\r\n    .addOnSuccessListener(aVoid -> Log.d("Firestore", "Pel\xedculas eliminadas"))\r\n    .addOnFailureListener(e -> Log.w("Firestore", "Error en batch", e));\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Explicaci\xf3n:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"batch.delete()"})," se usa para ",(0,i.jsx)(n.strong,{children:"eliminar m\xfaltiples documentos a la vez"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".commit()"})," ejecuta la operaci\xf3n de forma ",(0,i.jsx)(n.strong,{children:"eficiente y r\xe1pida"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(6540);const i={},a=r.createContext(i);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);