(this["webpackJsonpmain_app-ui"]=this["webpackJsonpmain_app-ui"]||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(69),r=a.n(c),i=(a(76),a.p,a(77),a(8)),l=a.n(i),o=(a(96),a(44)),j=a(2),b=a(0);var d=function(){return Object(b.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("a",{class:"navbar-brand",href:"#",children:"\u0418\u041f \u0418\u0432\u0430\u043d\u043e\u0432 181-321"}),Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{class:"navbar-nav",children:[Object(b.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"\u041f\u043e\u0441\u0442\u044b"}),Object(b.jsx)("a",{class:"nav-link",href:"#",children:"\u041c\u0443\u0437\u044b\u043a\u0430"}),Object(b.jsx)("a",{class:"nav-link",href:"#",children:"\u0412\u0438\u0434\u0435\u043e"})]})})]}),Object(b.jsx)("span",{children:"\u043f\u0440\u0438\u0432\u0435\u0442,"}),"  \xa0\xa0 ",Object(b.jsx)("strong",{children:"username"}),Object(b.jsx)("a",{class:"btn btn-primary",style:{marginRight:"30px",marginLeft:"30px"},"data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(b.jsx)("i",{class:"fas fa-cog"})}),Object(b.jsx)("div",{class:"collapse",id:"collapseExample",style:{position:"fixed",top:"40px",right:"20px"},children:Object(b.jsxs)("div",{class:"card card-body",children:[Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"http://127.0.0.1:8000/auth/login/",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"http://127.0.0.1:8000/api-auth/logout/",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"http://127.0.0.1:8000/auth/lk/",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"http://127.0.0.1:8000/admin",children:"\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0430"})})]})})]})},p=a(24),h=a.n(p),x=a(45),u=a(23);var m=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=!1,r=!1;Object(s.useEffect)((function(){l.a.get("/posts-api/posts/").then((function(e){n(e.data)}))}),[]);var i=function(){var e=Object(x.a)(h.a.mark((function e(t,a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!c,e.next=3,l.a.get("/posts-api/posts/".concat(t,"/"));case 3:return e.next=5,e.sent.data;case 5:if(s=e.sent,console.log(s),!c){e.next=12;break}return e.next=10,l.a.patch("/posts-api/posts/".concat(t,"/"),{likes:s.likes+1});case 10:e.next=14;break;case 12:return e.next=14,l.a.patch("/posts-api/posts/".concat(t,"/"),{likes:s.likes-1});case 14:a.children[0].style.color=c?"red":"black";case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(x.a)(h.a.mark((function e(t,a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!r,e.next=3,l.a.get("/posts-api/posts/".concat(t,"/"));case 3:return e.next=5,e.sent.data;case 5:if(s=e.sent,!r){e.next=11;break}return e.next=9,l.a.patch("/posts-api/posts/".concat(t,"/"),{dislikes:s.dislikes+1});case 9:e.next=13;break;case 11:return e.next=13,l.a.patch("/posts-api/posts/".concat(t,"/"),{dislikes:s.dislikes-1});case 13:a.children[0].style.color=r?"red":"black";case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"text-left mb-4 mt-4",children:"Social Posts"}),a.map((function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"card mb-3",style:{width:"100%"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"lead card-title text-left",children:e.title}),Object(b.jsx)("p",{className:"card-text text-left",children:e.body}),Object(b.jsxs)("p",{className:"card-text text-left",children:["Created at: ",e.created_at]}),Object(b.jsxs)("button",{className:"btn",onClick:function(t){return i(e.id,t.target)},children:[" ",Object(b.jsx)("i",{className:"far fa-thumbs-up"})," "]})," ",Object(b.jsx)("span",{children:e.likes}),Object(b.jsxs)("button",{className:"btn",onClick:function(t){return o(e.id,t.target)},children:[" ",Object(b.jsx)("i",{className:"far fa-thumbs-down"})," "]})," ",Object(b.jsx)("span",{children:e.dislikes})]})})},e.id)}))]})};var O=a(70),f=a.n(O);var v=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(),r=Object(u.a)(c,2),i=r[0],o=r[1];return Object(b.jsxs)("div",{className:"container",style:{marginTop:"50px"},children:[Object(b.jsx)("a",{className:"btn btn-secondary mb-4",href:"/auth/registration",children:"Dont have account?"}),Object(b.jsx)("h2",{className:"mb-4",children:"LogIn"}),Object(b.jsxs)("form",{action:"/api-auth/login/",method:"POST",children:[Object(b.jsx)(f.a,{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Username"}),Object(b.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"username"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){o(e.target.value)},className:"form-control",id:"exampleInputPassword1",name:"password"})]}),Object(b.jsx)("button",{onClick:function(){l.a.post("/api-auth/login/",{username:a,password:i})},className:"btn btn-primary",children:"Log In"})]})]})};var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/posts/",exact:!0,component:m}),Object(b.jsx)(j.a,{path:"/auth/login",exact:!0,component:v})]})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),k()},76:function(e,t,a){},77:function(e,t,a){}},[[152,1,2]]]);
//# sourceMappingURL=main.12309a3c.chunk.js.map