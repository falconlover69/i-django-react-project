(this["webpackJsonpmain_app-ui-v2"]=this["webpackJsonpmain_app-ui-v2"]||[]).push([[0],{42:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(32),l=a.n(n),r=(a(42),a(4)),o=a(11),i=a(33),d=a(34),b=a(37),m=a(36),j=a(5),u=a.n(j),h=a(0),p=c.a.createContext(),x=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={user:{},setUser:function(t){e.setState({user:t})}},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)(p.Provider,{value:this.state,children:this.props.children})}}]),a}(s.Component),O=p.Consumer,f=a(3);var v=function(e){e.match,e.location;var t=Object(s.useState)(window.location.pathname),a=Object(f.a)(t,2),c=a[0],n=a[1],l=Object(r.f)(),i=JSON.parse(localStorage.getItem("user"));Object(s.useEffect)((function(){l.listen((function(e,t){n(window.location.pathname),console.log(e)}))}),[window.location.pathname]);var d=function(){JSON.parse(localStorage.clear()),u.a.get("http://127.0.0.1:8000/api-auth/logout/")};return"/"!==c?Object(h.jsx)(O,{children:function(e){var t,a,s,c;return Object(h.jsx)("header",{children:Object(h.jsx)("nav",{className:"navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("span",{className:"navbar-brand",children:"\u0418\u041f \u0418\u0432\u0430\u043d\u043e\u0432 181-321"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)(o.b,{className:"nav-link",to:{pathname:"/posts/",fromDashboard:!1},children:"\u041f\u043e\u0441\u0442\u044b"}),Object(h.jsx)(o.b,{className:"nav-link",to:{pathname:"/music/",fromDashboard:!1},children:"\u041c\u0443\u0437\u044b\u043a\u0430"}),Object(h.jsx)(o.b,{className:"nav-link",to:{pathname:"/video/",fromDashboard:!1},children:"\u0412\u0438\u0434\u0435\u043e"})]})}),Object(h.jsxs)("div",{className:"dropstart",children:[Object(h.jsxs)("button",{className:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(h.jsx)("code",{children:"Hello, "}),(null===e||void 0===e||null===(t=e.user)||void 0===t||null===(a=t.user)||void 0===a?void 0:a.username)||(null===i||void 0===i?void 0:i.user)?(null===e||void 0===e||null===(s=e.user)||void 0===s||null===(c=s.user)||void 0===c?void 0:c.username)||i.user.username:"guest"," ",Object(h.jsx)("i",{className:"far fa-user"})]}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",onClick:d,children:"\u0412\u044b\u0439\u0442\u0438"})}),"wvita"==(null===i||void 0===i?void 0:i.user.username)?Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",children:"\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0430"})}):Object(h.jsx)(h.Fragment,{})]})]})]})})})}}):Object(h.jsx)(h.Fragment,{})},g=a(14),N=a.n(g),y=a(18);var k=function(){var e=Object(s.useState)(),t=Object(f.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),l=Object(f.a)(n,2),o=l[0],i=l[1],d=Object(r.f)();return Object(h.jsx)(O,{children:function(e){return Object(h.jsxs)("form",{className:"card card-body",onSubmit:function(t){t.preventDefault(),function(t,a){var s={};u.a.post("http://localhost:8000/rest-auth/login/",{username:t,password:a}).then(function(){var t=Object(y.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a),s.key=a.data.key,console.log(s),u.a.get("http://localhost:8000/rest-auth/user/",{headers:{Authorization:"Token "+a.data.key}}).then((function(t){s.user=t.data,e.setUser(s),localStorage.setItem("user",JSON.stringify(s)),setTimeout((function(){return d.push("/posts/")}),1500)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return alert(e)}))}(a,o)},children:[Object(h.jsx)("h3",{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Username"}),Object(h.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(h.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0412\u043e\u0439\u0442\u0438"})]})}})},w=a(2);var S=function(){var e=Object(s.useState)({username:"",email:"",password1:"",password2:""}),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(h.jsx)(O,{children:function(e){return Object(h.jsxs)("form",{className:"card card-body",onSubmit:function(t){t.preventDefault(),function(t){var a=t.username,s=t.email,c=t.password1,n=t.password2;u.a.post("http://localhost:8000/rest-auth/registration/",{username:a,email:s,password1:c,password2:n}).then((function(t){console.log(t);var s={username:a,key:t.data.key};e.setUser(s),window.location="/posts"})).catch((function(e){return alert(e)}))}(a)},children:[Object(h.jsx)("h3",{children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputUserName1",className:"form-label",children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return c(Object(w.a)(Object(w.a)({},a),{},{username:e.target.value}))},id:"exampleInputUserName1",name:"username"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control",onChange:function(e){return c(Object(w.a)(Object(w.a)({},a),{},{email:e.target.value}))},id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email"}),Object(h.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(h.jsx)("input",{type:"password",autoComplete:"on",onChange:function(e){return c(Object(w.a)(Object(w.a)({},a),{},{password1:e.target.value}))},className:"form-control",id:"exampleInputPassword1",name:"password1"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputPassword2",className:"form-label",children:"Repeate Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return c(Object(w.a)(Object(w.a)({},a),{},{password2:e.target.value}))},id:"exampleInputPassword2",name:"password2"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}})};var C=function(){return Object(h.jsx)("main",{className:"mt-4",style:{height:window.innerWidth<=990?"150vh":"115vh"},children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-8 text-center",children:[Object(h.jsxs)("h2",{className:"mb-4",children:["\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e \u0432\u0430\u0441 \u043d\u0430 ",Object(h.jsxs)("code",{children:[" ",Object(h.jsx)("b",{children:"PolyNet"})," "]})]}),Object(h.jsx)("h3",{children:"\u042d\u0442\u0430 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0434\u043b\u044f \u0443\u0447\u0435\u043d\u0438\u043a\u043e\u0432 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u041f\u043e\u043b\u0438\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430"}),Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrklw3cttbdc8oVoBdAD91fXgQIS8aAb8F456Zc13iLXMsR6FrTj-pv9sJ8qeZH5JJTak&usqp=CAU",alt:"logo"})]}),Object(h.jsx)("div",{className:"col-lg-4",children:Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("div",{className:"col-lg-12 mb-2",children:Object(h.jsx)(k,{})}),Object(h.jsx)("div",{className:"col-lg-12 mt-2",children:Object(h.jsx)(S,{})})]})})]})})})},F=a(12);var I=function(e){var t=e.post,a=e.ratingListHandler,c=e.deletePost,n=e.postIndex,l=e.isAdmin,r=e.changePost,o=Object(s.useState)(!0),i=Object(f.a)(o,2),d=i[0],b=i[1],m=Object(s.useState)(!0),j=Object(f.a)(m,2),u=j[0],p=j[1],x=Object(s.useState)({title:"",body:""}),O=Object(f.a)(x,2),v=O[0],g=O[1],N=function(e,s){"like"==e?(b(!d),s.target.style.color=d?"#ff0000":"#000000"):(p(!u),s.target.style.color=u?"#ff0000":"#000000"),a(t.id,e,n,d,u)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"card  mb-3",style:{width:"70%",margin:"auto"},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("p",{className:"lead card-title text-center",children:[t.title," "]}),Object(h.jsx)("p",{className:"card-text text-center",children:t.body}),Object(h.jsx)("p",{className:"card-text text-end text-muted",style:{position:"relative",bottom:"-45px",right:"-50%",width:"50%"},children:t.created_at}),Object(h.jsx)("button",{className:"btn far fa-thumbs-up",name:"like",onClick:function(e){N(e.target.name,e)},children:"  "})," ",Object(h.jsx)("span",{children:t.likes}),Object(h.jsx)("button",{className:"btn far fa-thumbs-down",name:"dislike",onClick:function(e){N(e.target.name,e)},children:" "})," ",Object(h.jsx)("span",{children:t.dislikes}),l?Object(h.jsx)("button",{className:"btn btn-dark fas fa-cog",style:{position:"absolute",top:"15px",left:"91%"},"data-bs-toggle":"modal","data-bs-target":"#postModal"+n}):Object(h.jsx)(h.Fragment,{})]})})}),Object(h.jsx)("div",{className:"modal fade",id:"postModal"+n,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",placeholder:t.title,onChange:function(e){return g(Object(w.a)(Object(w.a)({},v),{},{title:e.target.value}))}}),Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Post body"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"body",name:"body",placeholder:t.body,onChange:function(e){return g(Object(w.a)(Object(w.a)({},v),{},{body:e.target.value}))}}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",id:"changePostSubmit",style:{visibility:"hidden"},onClick:function(){return r(t.id,v,n)}})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(h.jsx)("label",{className:"btn btn-success","data-bs-dismiss":"modal",htmlFor:"changePostSubmit",children:"Save changes"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",onClick:function(){return c(t.id,n)},children:"Delete"})]})]})})})]})};var P=function(){var e,t=Object(s.useState)([]),a=Object(f.a)(t,2),c=a[0],n=a[1],l=Object(r.f)(),o=Object(s.useState)({title:"",body:""}),i=Object(f.a)(o,2),d=i[0],b=i[1],m=JSON.parse(localStorage.getItem("user"));Object(s.useEffect)((function(){m||(alert("\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"),l.push("/")),u.a.get("http://127.0.0.1:8000/posts-api/posts/").then((function(e){e.data.map((function(e){return e.created_at=e.created_at.replace(/[a-z\u0430-\u044f\u0451]/gi," ")})),n(e.data)}))}),[]);var j=function(){var e=Object(y.a)(N.a.mark((function e(t,a,s,l,r){var o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://127.0.0.1:8000/posts-api/posts/".concat(t,"/"));case 2:if(o=e.sent.data,"like"!=a){e.next=8;break}return e.next=6,u.a.patch("http://127.0.0.1:8000/posts-api/posts/".concat(t,"/"),l?{likes:o.likes+1}:{likes:o.likes-1}).then((function(e){var t=e.data.created_at.replace(/[a-z\u0430-\u044f\u0451]/gi," "),a=Object(F.a)(c);a[s]=e.data,a[s].created_at=t,console.log(a),n(a)}));case 6:e.next=10;break;case 8:return e.next=10,u.a.patch("http://127.0.0.1:8000/posts-api/posts/".concat(t,"/"),r?{dislikes:o.dislikes+1}:{dislikes:o.dislikes-1}).then((function(e){var t=e.data.created_at.replace(/[a-z\u0430-\u044f\u0451]/gi," "),a=Object(F.a)(c);a[s]=e.data,a[s].created_at=t,console.log(a),n(a)}));case 10:case"end":return e.stop()}}),e)})));return function(t,a,s,c,n){return e.apply(this,arguments)}}(),p=function(e,t){u.a.delete("http://127.0.0.1:8000/posts-api/posts/".concat(e,"/")).then((function(e){console.log(e),alert("\u041f\u043e\u0441\u0442 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0451\u043d \ud83d\udc4d")})).catch((function(e){alert(e)})),console.log(e);var a=Object(F.a)(c);a.splice(t,1),n(a),console.log(a)},x=function(e,t,a){console.log(t),u.a.patch("http://127.0.0.1:8000/posts-api/posts/".concat(e,"/"),t).then((function(e){console.log(e);var t=Object(F.a)(c),s=e.data.created_at.replace(/[a-z\u0430-\u044f\u0451]/gi," ");e.data.created_at=s,t[a]=e.data,console.log(t),n(t),alert("\u041f\u043e\u0441\u0442 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0451\u043d \ud83d\udc4d")})).catch((function(e){return alert(e)}))};return Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)("h2",{className:"text-center mb-4 mt-4",children:"Social Posts"}),Object(h.jsxs)("div",{className:"d-flex mb-4",style:{width:"68%",marginLeft:"16%"},children:["wvita"==(null===m||void 0===m?void 0:m.user.username)?Object(h.jsx)("button",{className:"btn btn-primary flex-fill","data-bs-toggle":"modal","data-bs-target":"#addPostModal",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}):Object(h.jsx)(h.Fragment,{}),console.log(m)]}),Object(h.jsx)(O,{children:function(t){var a,s,n,l,r="wvita"==(null===t||void 0===t||null===(a=t.user.user)||void 0===a?void 0:a.username)||(null===(s=JSON.parse(localStorage.getItem("user")))||void 0===s||null===(n=s.user)||void 0===n?void 0:n.username)||!1;return e=(null===(l=t.user.user)||void 0===l?void 0:l.pk)||(null===m||void 0===m?void 0:m.user.pk),console.log(e),c.map((function(e,t){return Object(h.jsx)(I,{postIndex:t,post:e,ratingListHandler:j,deletePost:p,changePost:x,isAdmin:r},t)}))}}),Object(h.jsx)("div",{className:"modal fade",id:"addPostModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("input",{type:"text",className:"form-control mb-3",id:"title",placeholder:"Title",onChange:function(e){return b(Object(w.a)(Object(w.a)({},d),{},{title:e.target.value}))}}),Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"body",placeholder:"Post body",onChange:function(e){return b(Object(w.a)(Object(w.a)({},d),{},{body:e.target.value}))}}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",id:"addPostSubmit",style:{visibility:"hidden"},onClick:function(){return function(e){var t={title:d.title,body:d.body,by:e};u.a.post("http://127.0.0.1:8000/posts-api/posts/",t).then((function(e){console.log(e),n([].concat(Object(F.a)(c),[e.data])),alert("\u041f\u043e\u0441\u0442 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \ud83d\udc4d")})).catch((function(e){alert(e)})),console.log(t)}(e)},children:"Save changes"})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(h.jsx)("label",{htmlFor:"addPostSubmit",className:"btn btn-success","data-bs-dismiss":"modal",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})})]})};var M=function(){return Object(h.jsx)("footer",{className:"",style:{position:"absolute",left:"0px",right:"0px"},children:Object(h.jsxs)("div",{className:"card text-center",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"d-flex text-center justify-content-evenly",children:[Object(h.jsx)("a",{href:"https://github.com/falconlover69",children:Object(h.jsx)("span",{style:{fontSize:"24px",color:"#30363d"},children:Object(h.jsx)("i",{className:"fab fa-github"})})}),Object(h.jsx)("a",{href:"https://vk.com/id485086001",children:Object(h.jsx)("span",{style:{fontSize:"24px",color:"#2787F5"},children:Object(h.jsx)("i",{className:"fab fa-vk"})})}),Object(h.jsx)("a",{href:"https://getbootstrap.com/",children:Object(h.jsx)("span",{style:{fontSize:"24px",color:"#563d7c"},children:Object(h.jsx)("i",{className:"fab fa-bootstrap"})})})]})}),Object(h.jsx)("div",{className:"card-footer text-muted",style:{height:"30px",fontSize:"14px",textAlign:"center"},children:"2021 Greg Ivanov, all rights reserved"})]})})};var A=function(e){var t=e.track,a=e.trackIndex,c=e.isAdmin,n=e.deleteTrack,l=e.changeTrack,r=Object(s.useState)({name:"",artist:""}),o=Object(f.a)(r,2),i=o[0],d=o[1];return console.log("INDEX:::",a),console.log("TRACK:::",t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"card mb-3",style:{width:"70%",margin:"auto"},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"lead card-title",children:t.name}),Object(h.jsxs)("p",{className:"card-text",children:["By:  ",t.artist]}),Object(h.jsxs)("p",{className:"card-text",children:["Added at: ",t.added_at]}),Object(h.jsxs)("iframe",{frameBorder:"0",style:{border:"none",width:"100%",height:"180px"},width:"100%",height:"180",src:"https://music.yandex.ru/iframe/#track/83063887/15694083",children:["\u0421\u043b\u0443\u0448\u0430\u0439\u0442\u0435 ",Object(h.jsx)("a",{href:"https://music.yandex.ru/album/15694083/track/83063887",children:"SHOW"})," \u2014 ",Object(h.jsx)("a",{href:"https://music.yandex.ru/artist/5781113",children:"MORGENSHTERN"})," \u043d\u0430 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0435"]}),c?Object(h.jsx)("button",{className:"btn btn-dark fas fa-cog",style:{position:"absolute",top:"15px",left:"91%"},"data-bs-toggle":"modal","data-bs-target":"#trackModal"+a}):Object(h.jsx)(h.Fragment,{})]})}),Object(h.jsx)("div",{className:"modal fade",id:"trackModal"+a,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",placeholder:t.name,onChange:function(e){return d(Object(w.a)(Object(w.a)({},i),{},{name:e.target.value}))}}),Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Artist"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"body",name:"body",placeholder:t.artist,onChange:function(e){return d(Object(w.a)(Object(w.a)({},i),{},{artist:e.target.value}))}}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",id:"changePostSubmit",style:{visibility:"hidden"},onClick:function(){l(t.id,i,a)}})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(h.jsx)("label",{className:"btn btn-success","data-bs-dismiss":"modal",htmlFor:"changePostSubmit",children:"Save changes"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",onClick:function(){n(t.id,a)},children:"Delete"})]})]})})})]})};var T=function(){var e,t=Object(r.f)(),a=Object(s.useState)([]),c=Object(f.a)(a,2),n=c[0],l=c[1],o="wvita"==JSON.parse(null===(e=localStorage)||void 0===e?void 0:e.getItem("user")).user.username,i=JSON.parse(localStorage.getItem("user")),d=Object(s.useState)({name:"",artist:""}),b=Object(f.a)(d,2),m=b[0],j=b[1],p=null===i||void 0===i?void 0:i.user.pk;Object(s.useEffect)((function(){i||(alert("\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"),t.push("/")),u.a.get("http://127.0.0.1:8000/music-api/tracks/").then((function(e){e.data.map((function(e){return e.added_at=e.added_at.replace(/[a-z\u0430-\u044f\u0451]/gi," ")})),l(e.data)})),console.log(n)}),[]);var x=function(e,t){console.log(e,t)},v=function(e,t,a){console.log(t),console.log(e),console.log(a)};return Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)("h2",{className:"text-center mb-4 mt-4",children:"Social Music"}),Object(h.jsxs)("div",{className:"d-flex mb-4",style:{width:"68%",marginLeft:"16%"},children:["wvita"==(null===i||void 0===i?void 0:i.user.username)?Object(h.jsx)("button",{className:"btn btn-primary flex-fill","data-bs-toggle":"modal","data-bs-target":"#addTrackModal",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043a"}):Object(h.jsx)(h.Fragment,{}),console.log(i)]}),Object(h.jsx)(O,{children:function(e){return n.map((function(e,t){return Object(h.jsx)(A,{track:e,trackIndex:t,isAdmin:o,deleteTrack:x,changeTrack:v},t)}))}}),Object(h.jsx)("div",{className:"modal fade",id:"addTrackModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"}),Object(h.jsx)("input",{type:"text",className:"form-control mb-3",id:"title",placeholder:"Name",onChange:function(e){return j(Object(w.a)(Object(w.a)({},m),{},{name:e.target.value}))}}),Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"\u0410\u0440\u0442\u0438\u0441\u0442"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"body",placeholder:"Artist",onChange:function(e){return j(Object(w.a)(Object(w.a)({},m),{},{artist:e.target.value}))}}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",id:"addPostSubmit",style:{visibility:"hidden"},onClick:function(){return function(e){var t={name:m.name,artist:m.artist,by:e};console.log(t),u.a.post("http://127.0.0.1:8000/music-api/tracks/",t).then((function(e){console.log(e),l([].concat(Object(F.a)(n),[e.data])),alert("\u0422\u0440\u0435\u043a \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \ud83d\udc4d")})).catch((function(e){alert(e)}))}(p)},children:"Save changes"})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(h.jsx)("label",{htmlFor:"addPostSubmit",className:"btn btn-success","data-bs-dismiss":"modal",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})})]})};var L=function(e){var t=e.video,a=e.videoIndex,c=e.isAdmin,n=e.chandeVideo,l=e.deleteVideos,r=Object(s.useState)({name:""}),o=Object(f.a)(r,2),i=(o[0],o[1]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"card mb-3",style:{width:"70%",margin:"auto"},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"lead card-title",children:t.name}),Object(h.jsxs)("p",{className:"card-text",children:["By:  ",t.by]}),Object(h.jsxs)("p",{className:"card-text",children:["Created at: ",t.added_at]}),Object(h.jsx)("iframe",{style:{marginLeft:"17%"},width:"560",height:"315",src:"https://www.youtube.com/embed/sn-S82mF_gw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),c?Object(h.jsx)("button",{className:"btn btn-dark fas fa-cog",style:{position:"absolute",top:"15px",left:"91%"},"data-bs-toggle":"modal","data-bs-target":"#videoModal"+a}):Object(h.jsx)(h.Fragment,{})]})}),Object(h.jsx)("div",{className:"modal fade",id:"videoModal"+a,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",placeholder:t.name,onChange:function(e){return i({name:e.target.value})}}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",id:"changePostSubmit",style:{visibility:"hidden"},onClick:function(){return n(t.id,a)}})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(h.jsx)("label",{className:"btn btn-success","data-bs-dismiss":"modal",htmlFor:"changePostSubmit",children:"Save changes"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",onClick:function(){return l(t.id,a)},children:"Delete"})]})]})})})]})};var _=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],n="wvita"==JSON.parse(localStorage.getItem("user")).user.username;Object(s.useEffect)((function(){u.a.get("http://127.0.0.1:8000/videos-api/videos/").then((function(e){e.data.map((function(e){return e.added_at=e.added_at.replace(/[a-z\u0430-\u044f\u0451]/gi," ")})),c(e.data)}))}),[]);var l=function(e,t){console.log(e),console.log(t)},r=function(e,t){console.log(e),console.log(t)};return Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)("h2",{className:"text-center mb-4 mt-4",children:"Social Videos"}),a.map((function(e,t){return Object(h.jsx)(L,{video:e,videoIndex:t,isAdmin:n,chandeVideo:l,deleteVideos:r},e.id)}))]})};var E=function(){return Object(h.jsx)("div",{className:"position-relative",style:{height:"84vh"},children:Object(h.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(h.jsx)("code",{children:"404 - Page Not Found"})})})};var J=function(){return Object(h.jsx)("div",{})};var z=function(){return Object(r.f)(),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/",exact:!0,component:C},"main-page"),Object(h.jsx)(r.a,{path:"/posts/",exact:!0,component:P},"posts-page"),Object(h.jsx)(r.a,{path:"/music/",exact:!0,component:T},"tracks-page"),Object(h.jsx)(r.a,{path:"/video/",exact:!0,component:_},"videos-page"),Object(h.jsx)(r.a,{path:"/lk/",exact:!0,component:J},"personalArea-page"),Object(h.jsx)(r.a,{exact:!0,component:E})]}),Object(h.jsx)(M,{})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),D()}},[[68,1,2]]]);
//# sourceMappingURL=main.2f36ab62.chunk.js.map