(this.webpackJsonplession01=this.webpackJsonplession01||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(17),n=a.n(s),i=(a(24),a(13)),r=a.n(i),l=a(18),o=a(8),j=(a(26),a(2)),u=a.p+"static/media/Logo.de13d484.png",m={get:function(e,t){var a=localStorage.getItem(e);return null===a?t:JSON.parse(a)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},d=a(7),h=a(0);var b=function(e){return Object(h.jsxs)("article",{className:"cardSingle",children:[Object(h.jsx)(d.b,{className:"link",to:"/character/".concat(e.id),children:Object(h.jsx)("img",{className:"link list__card__img",src:e.img,alt:e.name})}),Object(h.jsx)("h2",{className:"cardTittle",children:e.name}),Object(h.jsx)("i",{className:"".concat("Alien"===e.species?"fab fa-reddit-alien":"fas fa-user-alt")}),e.species,Object(h.jsx)("div",{className:"information",children:Object(h.jsxs)(d.b,{className:"link",to:"/character/".concat(e.id),children:["M\xe1s informaci\xf3n ",Object(h.jsx)("i",{className:"icon fas fa-chevron-right"})]})})]})},f=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("section",{className:"characterNotFound",children:[Object(h.jsx)("h3",{className:"tittle3",children:"No hay ning\xfan personaje que coincida con tu b\xfasqueda"}),Object(h.jsx)("img",{className:"characterNotFound__img",src:"https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif",alt:"Rick"})]})})},O=function(e){if(0===e.characters.length)return Object(h.jsx)(f,{character:e.filterName});var t=e.characters.map((function(e){return Object(h.jsx)("li",{className:"list__card",children:Object(h.jsx)(b,{id:e.id,img:e.img,name:e.name,species:e.species,status:e.status,episode:e.episode,origin:e.origin})},e.id)}));return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{className:"list",children:t})})},g=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",{className:"form__name",type:"text",name:"name",id:"name",value:e.filterName,placeholder:"Busca a tu personaje",onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})})},x=function(e){return Object(h.jsxs)("div",{className:"form__container",children:[Object(h.jsx)("label",{className:"form__specie",htmlFor:"specie",children:"Tipo de especie"}),Object(h.jsxs)("select",{className:"form__types",name:"specie",id:"specie",onChange:function(t){e.handleFilter({value:t.target.value,key:"species"})},value:e.filterSpecies,children:[Object(h.jsx)("option",{value:"",children:"Todas"}),Object(h.jsx)("option",{value:"Human",children:"Humano"}),Object(h.jsx)("option",{value:"Alien",children:"Alien\xedgena"})]})]})},p=function(e){return Object(h.jsx)("section",{children:Object(h.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)(g,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(h.jsx)(x,{handleFilter:e.handleFilter,filterSpecies:e.filterSpecies}),Object(h.jsxs)("button",{className:"reset_buttton",onClick:e.handleReset,children:[Object(h.jsx)("i",{className:"far fa-trash-alt"})," Reset"]})]})})},N=function(e){return Object(h.jsxs)("div",{className:"carhacterDetail",children:[Object(h.jsxs)(d.b,{to:"/",className:"link",children:[Object(h.jsx)("i",{className:"icon fas fa-chevron-left"}),"Volver"]}),Object(h.jsxs)("section",{className:"detail",children:[Object(h.jsx)("img",{className:"detail__img",src:e.character.img,alt:e.name}),Object(h.jsx)("h2",{className:"detail__title2",children:e.character.name}),Object(h.jsxs)("ul",{className:"detail__inform",children:[Object(h.jsxs)("li",{className:"detail__inform__text",children:[Object(h.jsx)("i",{className:"icon ".concat(function(){var t=e.character.status;return"Dead"===t?"fas fa-skull-crossbones":"Alive"===t?"fas fa-heart":"fas fa-question"}()),children:" "}),e.character.status]}),Object(h.jsxs)("li",{className:"detail__inform__text",children:["Origen: ",e.character.origin]}),Object(h.jsxs)("li",{className:"detail__inform__text",children:["Episode: ",e.character.episode]})]})]})]})},v=function(e){for(var t=e.nextPage,a=e.prevPage,c=e.goToPage,s=e.pages,n=[],i=function(e){n.push(Object(h.jsx)("button",{onClick:function(){return c(e)},children:e},e))},r=1;r<=s;r++)i(r);return Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsxs)("button",{className:"pagination__button",onClick:a,children:[Object(h.jsx)("i",{className:"icon fas fa-arrow-left"}),"Previous"]}),Object(h.jsxs)("button",{className:"pagination__button",onClick:t,children:["Next",Object(h.jsx)("i",{className:"icon fas fa-arrow-right"})]})]})},_=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(m.get("currentPageUrl","https://rickandmortyapi.com/api/character?")),i=Object(o.a)(n,2),b=i[0],g=i[1],x=Object(c.useState)(m.get("nextPageUrl",[])),_=Object(o.a)(x,2),k=_[0],S=_[1],y=Object(c.useState)(m.get("prevPageUrl",[])),P=Object(o.a)(y,2),F=P[0],w=P[1],C=Object(c.useState)(m.get("pages",[])),I=Object(o.a)(C,2),L=I[0],R=I[1],U=Object(c.useState)(m.get("characters",[])),J=Object(o.a)(U,2),T=J[0],A=J[1],E=Object(c.useState)(m.get("filterName","")),q=Object(o.a)(E,2),D=q[0],B=q[1],H=Object(c.useState)(m.get("filterSpecies","")),z=Object(o.a)(H,2),G=z[0],M=z[1];Object(c.useEffect)((function(){m.set("pages",L),m.set("currentPageUrl",b),m.set("nextPageUrl",k),m.set("prevPageUrl",F),m.set("character",T),m.set("filterName",D),m.set("filterSpecies",G)}),[b,F,k,L,T,D,G]);Object(c.useEffect)((function(){var e=b;s(!0),function(){var t=Object(l.a)(r.a.mark((function t(){var a,c,n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,n=c.results.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),i=n.map((function(e){return{id:e.id,img:e.image,name:e.name,species:e.species,status:e.status,origin:e.origin.name,episode:e.episode.length}})),A(i),s(!1),S(c.info.next),w(c.info.prev),R(c.info.pages);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b]);var V=T.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})).filter((function(e){return""===G||e.species===G}));return a?"Loading...":Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("h1",{className:"logo",children:Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("img",{className:"logo",src:u,alt:"Logo Rick and morty"})})})}),Object(h.jsx)("main",{children:Object(h.jsxs)(j.c,{children:[Object(h.jsxs)(j.a,{exact:!0,path:"/",children:[Object(h.jsx)(p,{handleReset:function(){B(""),M("")},handleFilter:function(e){"name"===e.key?B(e.value):"species"===e.key&&M(e.value)},filterName:D,filterSpecies:G}),Object(h.jsx)(O,{characters:V}),Object(h.jsx)(v,{nextPage:k?function(){g(k)}:null,prevPage:F?function(){g(F)}:null,goToPage:function(e){g("https://rickandmortyapi.com/api/character?page=".concat(e))}})]}),Object(h.jsx)(j.a,{path:"/character/:Id",render:function(e){var t=e.match.params.Id,a=T.find((function(e){return e.id===parseInt(t)}));return a?Object(h.jsx)(N,{character:a}):Object(h.jsx)(f,{})}})]})}),Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("small",{children:" Luc\xeda Rodr\xedguez Nova "}),Object(h.jsx)("img",{className:"img__logo",src:"./rickandmorty.ico",alt:"Logo Rick and morty"})]})]})};n.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4d259469.chunk.js.map