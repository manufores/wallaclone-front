(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"login":"Sign in","closebtn":"Close","searchbtn":"Search"}')},38:function(e){e.exports=JSON.parse('{"login":"Iniciar Sesi\xf3n","closebtn":"Cerrar","searchbtn":"Buscar"}')},43:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(19),c=a.n(o),s=(a(48),a(9)),l=a(17),u=a(1),i=a(3),m=Object(r.createContext)(),p=Object(r.createContext)();function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var f=function(e){var t=Object(r.useContext)(m),a=t.alerta,o=t.mostrarAlerta,c=Object(r.useContext)(p),l=c.mensaje,f=c.autenticado,d=c.iniciarSesion;Object(r.useEffect)((function(){f&&e.history.push("/anuncios"),l&&o(l.msg,l.categoria)}),[l,f,e.history]);var O=Object(r.useState)({email:"",password:""}),g=Object(i.a)(O,2),E=g[0],v=g[1],y=E.email,j=E.password,h=function(e){v(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},E,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},a?n.a.createElement("div",{className:"alerta ".concat(a.categoria)}," ",a.msg," "):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Iniciar Sesi\xf3n"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==j.trim()||o("Todos los campos son obligatorios","alerta-error"),d({email:y,password:j})}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:y,onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:j,onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesi\xf3n"}))),n.a.createElement(s.b,{to:"/nueva-cuenta",className:"enlace-cuenta"},"Obtener Cuenta"),n.a.createElement(s.b,{to:"/reset-pass",className:"enlace-cuenta"},"Resetear Passaword"),n.a.createElement(s.b,{to:"/",className:"enlace-cuenta"},"Ir a Inicio")))};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var O=function(e){var t=Object(r.useContext)(m),a=t.alerta,o=t.mostrarAlerta,c=Object(r.useContext)(p),l=c.mensaje,b=c.autenticado,f=c.registrarUsuario;Object(r.useEffect)((function(){b&&e.history.push("/anuncios"),l&&o(l.msg,l.categoria)}),[l,b,e.history]);var O=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),g=Object(i.a)(O,2),E=g[0],v=g[1],y=E.nombre,j=E.email,h=E.password,N=E.confirmar,w=function(e){v(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},E,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},a?n.a.createElement("div",{className:"alerta ".concat(a.categoria)}," ",a.msg," "):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Obtener una cuenta"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==j.trim()&&""!==h.trim()&&""!==N.trim()?h.length<6?o("El password debe ser de al menos 6 caracteres","alerta-error"):h===N?f({nombre:y,email:j,password:h}):o("Los passwords no son iguales","alerta-error"):o("Todos los campos son obligatorios","alerta-error")}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu Nombre",value:y,onChange:w})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:j,onChange:w})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:h,onChange:w})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"confirmar"},"Confirmar Password"),n.a.createElement("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Repite tu Password",value:N,onChange:w})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"}))),n.a.createElement(s.b,{to:"/",className:"enlace-cuenta"},"Volver a Iniciar Sesi\xf3n")))};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var E=function(e){var t=Object(r.useContext)(m),a=t.alerta,o=t.mostrarAlerta,c=Object(r.useContext)(p),l=c.mensaje,b=c.emailsended,f=c.resetearPass,d=c.solicitudReset;Object(r.useEffect)((function(){b&&(e.history.push("/login"),d()),l&&o(l.msg,l.categoria)}),[l,b,e.history]);var O=Object(r.useState)({email:""}),E=Object(i.a)(O,2),v=E[0],y=E[1],j=v.email;return n.a.createElement("div",{className:"form-usuario"},a?n.a.createElement("div",{className:"alerta ".concat(a.categoria)}," ",a.msg," "):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Resetear el Password"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===j.trim()&&o("Todos los campos son obligatorios","alerta-error"),f({email:j})}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:j,onChange:function(e){y(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},v,Object(u.a)({},e.target.name,e.target.value)))}})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Enviar"}))),n.a.createElement(s.b,{to:"/login",className:"enlace-cuenta"},"Login")))};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var y=function(e){var t=Object(r.useContext)(m),a=t.alerta,o=t.mostrarAlerta,c=Object(r.useContext)(p),s=c.mensaje,l=c.autenticado,b=c.newPassword,f=c.resetpass,d=e.match.params.token;Object(r.useEffect)((function(){f&&e.history.push("/login"),l&&e.history.push("/anuncios"),s&&o(s.msg,s.categoria)}),[f,s,l,e.history]);var O=Object(r.useState)({password:"",confirmar:""}),g=Object(i.a)(O,2),E=g[0],y=g[1],j=E.password,h=E.confirmar,N=function(e){y(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},E,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},a?n.a.createElement("div",{className:"alerta ".concat(a.categoria)}," ",a.msg," "):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Resetear Password"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==j.trim()&&""!==h.trim()?j.length<6?o("El password debe ser de al menos 6 caracteres","alerta-error"):j===h?b({token:d,password:j}):o("Los passwords no son iguales","alerta-error"):o("Todos los campos son obligatorios","alerta-error")}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:j,onChange:N})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"confirmar"},"Confirmar Password"),n.a.createElement("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Repite tu Password",value:h,onChange:N})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Cambiar Password"})))))},j=a(2),h=a.n(j),N=a(5),w=a(15),R=Object(r.createContext)();function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(){var e=Object(r.useContext)(R),t=e.mensaje,a=e.tags,o=e.formulario,c=e.errorformulario,s=e.mostrarFormulario,l=e.agregarAnuncio,p=e.mostrarError,b=e.obtenerTags,f=Object(r.useContext)(m),d=f.alerta,O=f.mostrarAlerta;Object(r.useEffect)((function(){t&&O(t.msg,t.categoria),b()}),[t]);var g=Object(r.useState)({nombre:"",descripcion:"",precio:0,venta:!0,tagsP:[]}),E=Object(i.a)(g,2),v=E[0],y=E[1],j=Object(r.useState)(""),A=Object(i.a)(j,2),C=A[0],S=A[1],x=Object(r.useState)(""),k=Object(i.a)(x,2),I=k[0],_=k[1],D=v.nombre,U=v.descripcion,T=v.precio,L=v.venta,F=v.tagsP,B=function(e){y(P({},v,Object(u.a)({},e.target.name,e.target.value)))},G=function(){var e=Object(N.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(a=new FormData).append("image",C),a.append("nombre",D),a.append("precio",T),a.append("descripcion",U),a.append("venta",L),a.append("tags",F),""!==D){e.next=11;break}return p(),e.abrupt("return");case 11:return e.next=13,l(a);case 13:y({nombre:"",descripcion:"",precio:0,venta:!0,tagsP:[]}),_("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(r.Fragment,null,n.a.createElement("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){s()}},"Nuevo Anuncio"),o?n.a.createElement("form",{className:"formulario-nuevo-proyecto",onSubmit:G},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"T\xedtulo del anuncio",name:"nombre",value:D,onChange:B}),n.a.createElement("textarea",{type:"text",className:"input-text",placeholder:"Describe el anuncio",name:"descripcion",value:U,onChange:B}),n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Precio",name:"precio",value:T,onChange:B}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"buyOrSell"},"\xbfVendes o compras?"),n.a.createElement("select",{name:"venta",className:"form-control",id:"buyOrSell",onChange:function(e){"sell"!==e.target.value?y(P({},v,Object(u.a)({},e.target.name,!1))):y(P({},v,Object(u.a)({},e.target.name,!0)))}},n.a.createElement("option",{value:"sell"},"Venta"),n.a.createElement("option",{value:"buy"},"Compra"))),d?n.a.createElement("div",{className:"alerta ".concat(d.categoria," ")},d.msg):null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"tagsList"},"Selecciona tags"),n.a.createElement("select",{name:"tagsP",className:"form-control",id:"tagsList",onChange:function(e){if(v.tagsP.find((function(t){return t===e.target.value})))return v;y(P({},v,Object(u.a)({},e.target.name,[].concat(Object(w.a)(v.tagsP),[e.target.value]))))}},n.a.createElement("option",null,"Escoge un tag"),a.map((function(e){return n.a.createElement("option",{value:e.tagName,key:e.tagName},e.tagName)})))),n.a.createElement("div",{className:"custom-file"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){S(e.target.files[0]),_(e.target.files[0].name)}}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},I)),n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Anuncio"})):null,c?n.a.createElement("p",{className:"mensaje error"},"El nombre del Anuncio es obligatorio"):null)},S=function(){return n.a.createElement("aside",null,n.a.createElement("h1",null,"Walla",n.a.createElement("span",null,"Clone")),n.a.createElement(C,null))},x=function(){var e=Object(r.useContext)(p),t=e.usuario,a=e.usuarioAutenticado,o=e.cerrarSesion;return Object(r.useEffect)((function(){a()}),[]),n.a.createElement("header",{className:"app-header"},t?n.a.createElement("p",{className:"nombre-usuario"},"Hola ",n.a.createElement("span",null,t.nombre," ")," "):null,n.a.createElement("nav",{className:"nav-principal"},n.a.createElement("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return o()}},"Cerrar Sesi\xf3n")))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(){var e=Object(r.useContext)(R),t=e.mensaje,a=e.tags,o=e.anuncioseleccionado,c=e.actualizarAnuncio,s=e.formedit,l=e.cerrarFormularioEdit,p=e.errorformulario,b=e.mostrarError,f=e.obtenerTags,d=Object(r.useContext)(m),O=d.alerta,g=d.mostrarAlerta;Object(r.useEffect)((function(){t&&g(t.msg,t.categoria),f()}),[t]),Object(r.useEffect)((function(){null!==o?(j(o),console.log("Proyecto seleccionado",o)):j({nombre:"",descripcion:"",precio:0,venta:!0,tags:[]})}),[o]);var E=Object(r.useState)({nombre:"",descripcion:"",precio:0,venta:!0,tags:[]}),v=Object(i.a)(E,2),y=v[0],j=v[1],A=y.nombre,P=y.descripcion,C=y.precio,S=function(e){j(I({},y,Object(u.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(N.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==A){e.next=4;break}return b(),e.abrupt("return");case 4:return e.next=6,c(y);case 6:j({nombre:"",descripcion:"",precio:0,venta:!0,tags:[]}),l();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(r.Fragment,null,s?n.a.createElement("form",{className:"formulario-nuevo-proyecto",onSubmit:x},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"T\xedtulo del anuncio",name:"nombre",value:A,onChange:S}),n.a.createElement("textarea",{type:"text",className:"input-text",placeholder:"Describe el anuncio",name:"descripcion",value:P,onChange:S}),n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Precio",name:"precio",value:C,onChange:S}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"buyOrSell"},"\xbfVendes o compras?"),n.a.createElement("select",{name:"venta",className:"form-control",id:"buyOrSell",onChange:function(e){"sell"!==e.target.value?j(I({},y,Object(u.a)({},e.target.name,!1))):j(I({},y,Object(u.a)({},e.target.name,!0)))},onClick:function(e){j(I({},y,Object(u.a)({},e.target.name,!0)))}},n.a.createElement("option",{value:"sell"},"Venta"),n.a.createElement("option",{value:"buy"},"Compra"))),O?n.a.createElement("div",{className:"alerta ".concat(O.categoria," ")},O.msg):null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"tagsList"},"Selecciona tags"),n.a.createElement("select",{name:"tags",multiple:!0,className:"form-control",id:"tagsList",onChange:function(e){if(o.tags.find((function(t){return t===e.target.value})))return j(I({},y,{tags:y.tags.filter((function(t){return t!==e.target.value}))})),y;j(I({},y,Object(u.a)({},e.target.name,[].concat(Object(w.a)(y.tags),[e.target.value]))))}},a.map((function(e){return n.a.createElement("option",{value:e.tagName,key:e.tagName},e.tagName)})))),n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Editar Anuncio"})):null,p?n.a.createElement("p",{className:"mensaje error"},"El nombre del Anuncio es obligatorio"):null)},D=function(e){var t=e.anuncio;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img",src:t.foto?"".concat("http://ec2-18-218-22-245.us-east-2.compute.amazonaws.com","/images/uploads/").concat(t.foto):"https://bulma.io/images/placeholders/1280x960.png",alt:t.nombre}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},t.nombre),n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.venta?"Est\xe1 en venta":"Se busca para comprar"),n.a.createElement("p",{className:"card-text"},t.descripcion),n.a.createElement("div",{className:"options d-flex flex-fill"}),n.a.createElement("div",{className:"buy d-flex justify-content-between align-items-center"},n.a.createElement("div",{className:"price text-success"},n.a.createElement("h5",{className:"mt-4"},t.precio)),n.a.createElement("div",null,t.tags.map((function(e){return n.a.createElement("span",{className:"btn btn-danger mt-3",key:e},e)}))))))},U=a(74),T=a(73),L=function(){var e=Object(r.useContext)(R),t=e.mensaje,a=e.anuncios,o=e.obtenerAnuncios,c=e.eliminarAnuncio,s=e.anuncioSelected,l=e.mostrarFormularioEdit,u=Object(r.useContext)(m),i=u.alerta,p=u.mostrarAlerta;Object(r.useEffect)((function(){t&&p(t.msg,t.categoria),o()}),[t]);return 0===a.length?n.a.createElement("p",null,"No hay anuncios, comienza creando uno"):n.a.createElement("ul",{className:"listado-proyectos"},i?n.a.createElement("div",{className:"alerta ".concat(i.categoria," ")},i.msg):null,n.a.createElement(U.a,null,a.map((function(e){return n.a.createElement(T.a,{key:e._id,timeout:200,classNames:"proyecto"},n.a.createElement("li",{className:"tarea sombra"},n.a.createElement(D,{anuncio:e}),n.a.createElement("div",{className:"acciones"},n.a.createElement("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){l(),s(e)}(e)}},"Editar"),n.a.createElement("button",{type:"button",className:"btn btn-secundario",onClick:function(){return c(e._id)}},"Eliminar"))))}))))},F=function(){var e=Object(r.useContext)(p).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),n.a.createElement("div",{className:"contenedor-app"},n.a.createElement(S,null),n.a.createElement("div",{className:"seccion-principal"},n.a.createElement(x,null),n.a.createElement("main",null,n.a.createElement(_,null),n.a.createElement("div",{className:"contenedor-tareas"},n.a.createElement(L,null)))))},B=Object(r.createContext)(),G=a(23),M=a(36),q=a(37),V=a(38);G.a.use(M.a).init({fallbackLng:"es",debug:!0,interpolation:{escapeValue:!1},react:{wait:!1,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default"},resources:{en:{translation:q},es:{translation:V}}});var H=G.a,W=function(){var e=Object(r.useContext)(B),t=e.mostrarFormularioBusqueda,a=e.cerrarFormularioBusqueda,o=e.formulario_busqueda;return n.a.createElement("header",{className:"app-header"},n.a.createElement("h1",{className:"nombre-usuario"},"Walla",n.a.createElement("span",null,"Clone")),n.a.createElement("nav",{className:"nav-principal"},n.a.createElement("a",{href:"/?lng=en"},"English"),n.a.createElement("a",{href:"/?lng=es"},"Espa\xf1ol"),n.a.createElement(s.b,{to:"/login",className:"enlace-cuenta"},H.t("login")),n.a.createElement("button",{onClick:function(e){!1===o?t():a()}},o?H.t("closebtn"):H.t("searchbtn"))))};function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(){var e=Object(r.useContext)(R),t=e.tags,a=e.obtenerTags,o=e.errorformulario,c=e.mensaje,s=Object(r.useContext)(B),l=s.obtenerBusqueda,p=s.formulario_busqueda,b=Object(r.useContext)(m),f=b.alerta,d=b.mostrarAlerta;Object(r.useEffect)((function(){c&&d(c.msg,c.categoria),a()}),[c]);var O=Object(r.useState)({nombre:"",descripcion:"",precio:"",venta:!0,tagsB:[]}),g=Object(i.a)(O,2),E=g[0],v=g[1],y=E.nombre,j=E.descripcion,A=E.precio,P=E.tagsB,C=function(e){console.log(E),v(z({},E,Object(u.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(N.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l("nombre=".concat(y,"&&descripcion=").concat(j,"&&precio=").concat(A,"&&tags=").concat(P)),v({nombre:"",descripcion:"",precio:"",venta:!0,tagsB:[]});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(r.Fragment,null,p?n.a.createElement("form",{className:"formulario-nuevo-proyecto",onSubmit:S},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"T\xedtulo del anuncio",name:"nombre",value:y,onChange:C}),n.a.createElement("textarea",{type:"text",className:"input-text",placeholder:"Describe el anuncio",name:"descripcion",value:j,onChange:C}),n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Precio",name:"precio",value:A,onChange:C}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"buyOrSell"},"\xbfVendes o compras?"),n.a.createElement("select",{name:"venta",className:"form-control",id:"buyOrSell",onChange:function(e){console.log(e.target.value),"sell"!==e.target.value?v(z({},E,Object(u.a)({},e.target.name,!1))):v(z({},E,Object(u.a)({},e.target.name,!0)))},onClick:function(e){v(z({},E,Object(u.a)({},e.target.name,!0)))}},n.a.createElement("option",{value:"sell"},"Venta"),n.a.createElement("option",{value:"buy"},"Compra"))),f?n.a.createElement("div",{className:"alerta ".concat(f.categoria," ")},f.msg):null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"tagsList"},"Selecciona tags"),n.a.createElement("select",{name:"tagsB",className:"form-control",id:"tagsList",onChange:function(e){console.log(E),P.find((function(t){return t===e.target.value}))?v(z({},E,{tagsB:P.filter((function(t){return t!==e.target.value}))})):v(z({},E,Object(u.a)({},e.target.name,[].concat(Object(w.a)(E.tagsB),[e.target.value]))))}},n.a.createElement("option",null,"Escoge una o varias opciones"),t.map((function(e){return n.a.createElement("option",{value:e.tagName,key:e.tagName},e.tagName)})))),n.a.createElement("input",{type:"submit",className:"btn btn-primary mb-2",value:"Buscar"})):null,o?n.a.createElement("p",{className:"mensaje error"},"El nombre del Anuncio es obligatorio"):null)},X=function(){var e=Object(r.useContext)(R),t=e.mensaje,a=e.anuncios,o=e.obtenerAnunciosAll,c=Object(r.useContext)(B),s=c.anunciosbuscados,l=c.formulario_busqueda;return Object(r.useEffect)((function(){o()}),[t]),n.a.createElement("main",{className:"contenedor-proyecto"},n.a.createElement(W,null),n.a.createElement(J,null),n.a.createElement("ul",{className:"listado-tareas"},l?0===s.length?n.a.createElement("li",{className:"tarea"},n.a.createElement("p",null,"No se han encontrado anuncios")):n.a.createElement(U.a,null,s.map((function(e){return n.a.createElement(T.a,{key:e._id,timeout:200,className:"proyecto"},n.a.createElement("li",{className:"tarea sombra"},n.a.createElement(D,{anuncio:e})))}))):0===a.length?n.a.createElement("li",{className:"tarea"},n.a.createElement("p",null,"No hay Anuncios")):n.a.createElement(U.a,null,a.map((function(e){return n.a.createElement(T.a,{key:e._id,timeout:200,className:"proyecto"},n.a.createElement("li",{className:"tarea sombra"},n.a.createElement(D,{anuncio:e})))})))))};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e,t){switch(t.type){case"FORMULARIO_ANUNCIO":return $({},e,{formulario:!0});case"FORMULARIO_EDICION":return $({},e,{formedit:!0});case"FORMULARIO_CERRAR_EDICION":return $({},e,{formedit:!1});case"OBTENER_ANUNCIOS":return $({},e,{anuncios:t.payload});case"OBTENER_TAGS":return $({},e,{tags:t.payload});case"AGREGAR_ANUNCIO":return $({},e,{anuncios:[].concat(Object(w.a)(e.anuncios),[t.payload]),formulario:!1,errorformulario:!1});case"VALIDAR_FORMULARIO":return $({},e,{errorformulario:!0});case"ANUNCIO_ACTUAL":return $({},e,{anuncio:e.anuncios.filter((function(e){return e._id===t.payload}))});case"ANUNCIO_SELECTED":return $({},e,{anuncioseleccionado:t.payload,formanuncio:!0});case"ACTUALIZAR_ANUNCIO":return $({},e,{anuncios:e.anuncios.map((function(e){return e._id===t.payload._id?t.payload:e}))});case"ELIMINAR_ANUNCIO":return $({},e,{anuncios:e.anuncios.filter((function(e){return e._id!==t.payload})),anuncio:null});case"ANUNCIO_ERROR":return $({},e,{mensaje:t.payload});default:return e}},Y=a(39),ee=a.n(Y).a.create({baseURL:"http://ec2-18-218-22-245.us-east-2.compute.amazonaws.com"}),te=function(e){var t=Object(r.useReducer)(K,{anuncios:[],tags:[],formulario:!1,formedit:!1,errorformulario:!1,anuncio:null,mensaje:null,anuncioseleccionado:null,formData:null}),a=Object(i.a)(t,2),o=a[0],c=a[1],s=function(){var e=Object(N.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("/api/anunciosall");case 3:t=e.sent,c({type:"OBTENER_ANUNCIOS",payload:t.data.anuncios}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"ANUNCIO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(N.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("/api/anuncios");case 3:t=e.sent,c({type:"OBTENER_ANUNCIOS",payload:t.data.anuncios}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"ANUNCIO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("/api/tags");case 3:t=e.sent,c({type:"OBTENER_TAGS",payload:t.data.tags}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"ANUNCIO_ERROR",payload:{msg:"Hubo un error con los tags",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(N.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.post("/api/anuncios",t,{headers:{"Content-Type":"multipart/form-data"}});case 3:a=e.sent,c({type:"AGREGAR_ANUNCIO",payload:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"ANUNCIO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(N.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.put("/api/anuncios/".concat(t._id),t);case 3:a=e.sent,c({type:"ACTUALIZAR_ANUNCIO",payload:a.data.anuncio}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(N.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.delete("/api/anuncios/".concat(t));case 3:c({type:"ELIMINAR_ANUNCIO",payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:"ANUNCIO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(R.Provider,{value:{anuncios:o.anuncios,tags:o.tags,formulario:o.formulario,formedit:o.formedit,errorformulario:o.errorformulario,anuncio:o.anuncio,mensaje:o.mensaje,anuncioseleccionado:o.anuncioseleccionado,mostrarFormulario:function(){c({type:"FORMULARIO_ANUNCIO"})},mostrarFormularioEdit:function(){c({type:"FORMULARIO_EDICION"})},cerrarFormularioEdit:function(){c({type:"FORMULARIO_CERRAR_EDICION"})},obtenerAnunciosAll:s,obtenerAnuncios:l,obtenerTags:u,agregarAnuncio:m,mostrarError:function(){c({type:"VALIDAR_FORMULARIO"})},anuncioActual:function(e){c({type:"ANUNCIO_ACTUAL",payload:e})},anuncioSelected:function(e){c({type:"ANUNCIO_SELECTED",payload:e})},actualizarAnuncio:p,eliminarAnuncio:b}},e.children)},ae=function(e,t){switch(t.type){case"MOSTRAR_ALERTA":return{alerta:t.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},re=function(e){var t=Object(r.useReducer)(ae,{alerta:null}),a=Object(i.a)(t,2),o=a[0],c=a[1];return n.a.createElement(m.Provider,{value:{alerta:o.alerta,mostrarAlerta:function(e,t){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:t}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),5e3)}}},e.children)};function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce=function(e,t){switch(t.type){case"REGISTRO_EXITOSO":case"LOGIN_EXITOSO":return localStorage.setItem("token",t.payload.token),oe({},e,{autenticado:!0,mensaje:null,cargando:!1});case"OBTENER_USUARIO":return oe({},e,{autenticado:!0,usuario:t.payload,cargando:!1});case"CERRAR_SESION":case"LOGIN_ERROR":case"REGISTRO_ERROR":return localStorage.removeItem("token"),oe({},e,{token:null,usuario:null,autenticado:null,mensaje:t.payload,cargando:!1});case"RESETEAR_PASS":return oe({},e,{emailsended:!0,mensaje:t.payload});case"RESETEO_SOLICITADO":return oe({},e,{emailsended:null});case"NEW_PASSWORD":return oe({},e,{resetpass:!0});default:return e}},se=function(e){e?ee.defaults.headers.common["x-auth-token"]=e:delete ee.defaults.headers.common["x-auth-token"]},le=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0,emailsended:null,resetpass:null},a=Object(r.useReducer)(ce,t),o=Object(i.a)(a,2),c=o[0],s=o[1],l=function(){var e=Object(N.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.post("/api/usuarios",t);case 3:a=e.sent,s({type:"REGISTRO_EXITOSO",payload:a.data}),u(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},s({type:"REGISTRO_ERROR",payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&se(t),e.prev=2,e.next=5,ee.get("/api/auth");case 5:a=e.sent,s({type:"OBTENER_USUARIO",payload:a.data.usuario}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.response),s({type:"LOGIN_ERROR"});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(N.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.post("/api/auth",t);case 3:a=e.sent,s({type:"LOGIN_EXITOSO",payload:a.data}),u(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},s({type:"LOGIN_ERROR",payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(N.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.post("/api/reset",t);case 3:a=e.sent,s({type:"RESETEAR_PASS",payload:a.data}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},s({type:"LOGIN_ERROR",payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(N.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.post("/api/newpassword",t,a);case 2:"ok"===e.sent.data&&s({type:"NEW_PASSWORD"});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return n.a.createElement(p.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,emailsended:c.emailsended,resetpass:c.resetpass,registrarUsuario:l,iniciarSesion:m,usuarioAutenticado:u,resetearPass:b,solicitudReset:function(){s({type:"RESETEO_SOLICITADO"})},newPassword:f,cerrarSesion:function(){s({type:"CERRAR_SESION"})}}},e.children)},ue=a(40),ie=function(e){var t=e.component,a=Object(ue.a)(e,["component"]),o=Object(r.useContext)(p),c=o.autenticado,s=o.cargando,u=o.usuarioAutenticado;return Object(r.useEffect)((function(){u()}),[]),n.a.createElement(l.b,Object.assign({},a,{render:function(e){return c||s?n.a.createElement(t,e):n.a.createElement(l.a,{to:"/"})}}))};function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=function(e,t){switch(t.type){case"FORMULARIO_BUSQUEDA":return pe({},e,{formulario_busqueda:t.payload});case"URL_SEARCH":return pe({},e,{url_search:t.payload});case"ANUNCIOS_BUSQUEDA":return pe({},e,{anunciosbuscados:t.payload});case"BUSQUEDA_ERROR":return pe({},e,{mensaje:t.payload});default:return e}},fe=function(e){var t=Object(r.useReducer)(be,{formulario_busqueda:!1,anunciosbuscados:[],urlsearch:"",tags:[]}),a=Object(i.a)(t,2),o=a[0],c=a[1],s=function(){var e=Object(N.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/api/anunciosall/?".concat(t),e.next=4,ee.get(a);case 4:r=e.sent,c({type:"ANUNCIOS_BUSQUEDA",payload:r.data.anuncios}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c({type:"BUSQUEDA_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(B.Provider,{value:{formulario_busqueda:o.formulario_busqueda,anunciosbuscados:o.anunciosbuscados,urlsearch:o.urlsearch,tags:o.tags,mostrarFormularioBusqueda:function(){c({type:"FORMULARIO_BUSQUEDA",payload:!0})},cerrarFormularioBusqueda:function(){c({type:"FORMULARIO_BUSQUEDA",payload:!1})},obtenerBusqueda:s}},e.children)},de=localStorage.getItem("token");de&&se(de);var Oe=function(){return n.a.createElement(te,null,n.a.createElement(re,null,n.a.createElement(le,null,n.a.createElement(fe,null,n.a.createElement(s.a,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{exact:!0,path:"/",component:X}),n.a.createElement(l.b,{exact:!0,path:"/login",component:f}),n.a.createElement(l.b,{exact:!0,path:"/nueva-cuenta",component:O}),n.a.createElement(l.b,{exact:!0,path:"/reset-pass",component:E}),n.a.createElement(l.b,{exact:!0,path:"/newpassword/:token",component:y}),n.a.createElement(ie,{exact:!0,path:"/anuncios",component:F})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.59be07fa.chunk.js.map