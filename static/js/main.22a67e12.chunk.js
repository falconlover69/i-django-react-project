(this["webpackJsonpmain_app-ui"]=this["webpackJsonpmain_app-ui"]||[]).push([[0],{32:function(e,a,t){},33:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(25),l=t.n(n),r=(t(32),t.p,t(33),t(12)),i=t.n(r),j=(t(52),t(13)),b=t(2),d=t(0);var h=function(){return Object(d.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"\u0418\u041f \u0418\u0432\u0430\u043d\u043e\u0432 181-321"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsxs)("div",{class:"navbar-nav",children:[Object(d.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"\u041f\u043e\u0441\u0442\u044b"}),Object(d.jsx)("a",{class:"nav-link",href:"#",children:"\u041c\u0443\u0437\u044b\u043a\u0430"}),Object(d.jsx)("a",{class:"nav-link",href:"#",children:"\u0412\u0438\u0434\u0435\u043e"})]})})]}),Object(d.jsx)("span",{children:"\u043f\u0440\u0438\u0432\u0435\u0442,"}),"  \xa0\xa0 ",Object(d.jsx)("strong",{children:"username"}),Object(d.jsx)("a",{class:"btn btn-primary",style:{marginRight:"30px",marginLeft:"30px"},"data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(d.jsx)("i",{class:"fas fa-cog"})}),Object(d.jsx)("div",{class:"collapse",id:"collapseExample",style:{position:"fixed",top:"40px",right:"20px"},children:Object(d.jsxs)("div",{class:"card card-body",children:[Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"http://127.0.0.1:8000/auth/login/",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"http://127.0.0.1:8000/api-auth/logout/",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"http://127.0.0.1:8000/auth/lk/",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"http://127.0.0.1:8000/admin",children:"\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0430"})})]})})]})},o=t(27);var x=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){i.a.get("/posts-api/posts/").then((function(e){s(e.data)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-left mb-4 mt-4",children:"Social Posts"}),t.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"card mb-3",style:{width:"100%"},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("p",{className:"lead card-title text-left",children:e.title}),Object(d.jsxs)("p",{className:"card-text text-left",children:[e.body.substr(0,30),"..."]}),Object(d.jsxs)("p",{className:"card-text text-left",children:["Created at: ",e.created_at]}),Object(d.jsxs)("button",{className:"btn",children:[" ",Object(d.jsx)("i",{className:"far fa-thumbs-up"})," "]})," ",Object(d.jsx)("span",{children:e.likes}),Object(d.jsxs)("button",{className:"btn",children:[" ",Object(d.jsx)("i",{className:"far fa-thumbs-down"})," "]})," ",Object(d.jsx)("span",{children:e.dislikes})]})})},e.id)}))]})};var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(b.c,{children:Object(d.jsx)(b.a,{path:"/posts/",exact:!0,component:x})})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,l=a.getTTFB;t(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}},[[59,1,2]]]);
//# sourceMappingURL=main.22a67e12.chunk.js.map