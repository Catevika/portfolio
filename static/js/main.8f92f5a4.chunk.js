(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(27),i=c.n(r),o=c(2),l=c(4),j=c.p+"static/media/portrait.c586f9f7.jpg",b=function(){return Object(a.jsxs)("section",{className:"hero",children:[Object(a.jsx)("img",{src:j,alt:"Luciano Bello",className:"portrait-img"}),Object(a.jsxs)("div",{className:"author-container",children:[Object(a.jsxs)("h1",{className:"author",children:["Luciano Bello",Object(a.jsx)("span",{className:"text",children:" dit "}),'"Catevik"']}),Object(a.jsx)("h3",{className:"hobby",children:"Photographe"})]})]})},u=c(5),m=c.n(u),h=c(7),d=c(8),O=c.n(d),p=function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("svg",{className:"spinner",viewBox:"0 0 50 50",children:Object(a.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})})})},x=c(3),f=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)([]),u=Object(o.a)(b,2),d=u[0],f=u[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=".concat("","&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:t=e.sent,c=t.data.photosets.photoset,f(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!0);case 11:s(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=d.map((function(e){var t={title:e.title._content,id:e.id};return Object(a.jsx)(x.c,{exact:!0,to:"/galerie/".concat(t.id),className:"album-title",children:t.title},t.id)}));return Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)("div",{children:"Something went wrong..."}),c&&Object(a.jsx)(p,{}),!c&&Object(a.jsx)("div",{className:"album-title-container",children:v})]})},v=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)([]),u=Object(o.a)(b,2),d=u[0],x=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=".concat("","&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:t=e.sent,c=t.data.photos.photo,x(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!0);case 11:s(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)("div",{children:"Something went wrong..."}),c&&Object(a.jsx)(p,{}),!c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)("h1",{className:"title",children:"Galerie"}),Object(a.jsx)("ul",{className:"main-photo-container",children:d.map((function(e){return Object(a.jsx)("li",{className:"photo-container",children:Object(a.jsx)("img",{src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_m.jpg"),alt:"Contenu de la galerie",className:"photo"})},e.id)}))})]})]})},g=function(e,t){var c=localStorage.getItem(e),a=c?JSON.parse(c):t,s=Object(n.useState)(a),r=Object(o.a)(s,2),i=r[0],l=r[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,l]},N=function(){var e=Object(l.f)().albumId,t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),j=Object(o.a)(i,2),b=j[0],u=j[1],d=Object(n.useState)(""),v=Object(o.a)(d,2),N=v[0],k=v[1],w=g("album",[]),S=Object(o.a)(w,2),_=S[0],y=S[1];return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(m.a.mark((function t(){var c,a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("","&&photoset_id=").concat(e,"&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:c=t.sent,a=c.data.photoset,k(a.title),n=a.photo,y(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),u(!0);case 13:r(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e,y]),Object(a.jsxs)(a.Fragment,{children:[b&&Object(a.jsx)("div",{children:"Something went wrong..."}),s&&Object(a.jsx)(p,{}),!s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(x.b,{to:"/galerie",className:"galerie-link up",children:"Vers la galerie"}),Object(a.jsxs)("h1",{className:"title",children:["Album: ",Object(a.jsx)("span",{className:"title-normal",children:N})]}),Object(a.jsx)(x.b,{to:"/galerie/".concat(e,"/aper\xe7u"),className:"galerie-link center",children:"Aper\xe7u rapide"}),Object(a.jsx)("ul",{className:"main-album-container",children:_.map((function(t){return Object(a.jsx)("li",{className:"album-container",children:Object(a.jsx)(x.b,{to:"/galerie/".concat(e,"/").concat(t.id),children:Object(a.jsx)("img",{src:"https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,"_m.jpg"),alt:"Contenu de l'album",className:"album-photo"})})},t.id)}))})]})]})},k=function(){var e=Object(l.f)(),t=e.albumId,c=e.photoId,s=Object(n.useState)(!0),r=Object(o.a)(s,2),i=r[0],j=r[1],b=Object(n.useState)(!1),u=Object(o.a)(b,2),d=u[0],x=u[1],f=g("album",[]),v=Object(o.a)(f,2),N=v[0],k=v[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("","&&photoset_id=").concat(t,"&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:c=e.sent,a=c.data.photoset.photo,k(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(!0);case 11:j(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t,k]),Object(a.jsxs)(a.Fragment,{children:[d&&Object(a.jsx)("div",{children:"Something went wrong..."}),i&&Object(a.jsx)(p,{}),!i&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"photoMax-container",children:Object(a.jsx)("ul",{className:"main-photoMax-container",children:N.map((function(e,t){return Object(a.jsx)("li",{className:"album-container",children:e.id===c&&Object(a.jsx)("img",{src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_b.jpg"),alt:"Contenu de l'album",className:"photoMax"})},t)}))})})})]})},w=function(){var e=Object(l.f)().albumId,t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),j=Object(o.a)(i,2),b=j[0],u=j[1],d=g("album",[]),f=Object(o.a)(d,2),v=f[0],N=f[1];return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(m.a.mark((function t(){var c,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("","&&photoset_id=").concat(e,"&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:c=t.sent,a=c.data.photoset.photo,N(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),u(!0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e,N]),Object(a.jsxs)(a.Fragment,{children:[b&&Object(a.jsx)("div",{children:"Something went wrong..."}),s&&Object(a.jsx)(p,{}),!s&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:"thumbnail",children:v.map((function(t){return Object(a.jsx)("li",{className:"album-container thumbnail-container",children:Object(a.jsx)(x.b,{to:"/galerie/".concat(e,"/").concat(t.id),children:Object(a.jsx)("img",{src:"https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,"_s.jpg"),alt:"Contenu de l'album",className:"thumbnail-item"})})},t.id)}))})})]})},S=function(){var e=Object(l.f)().albumId;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"lightbox",children:[Object(a.jsx)(x.b,{to:"/galerie/".concat(e),className:"galerie-link up",children:"Vers l'album"}),Object(a.jsx)(x.b,{to:"/galerie/".concat(e,"/aper\xe7u"),className:"galerie-link center",children:"Aper\xe7u rapide"}),Object(a.jsx)(k,{})]}),Object(a.jsx)(w,{})]})},_=function(){return Object(a.jsx)("h1",{children:"Projets"})},y=function(){return Object(a.jsx)("h1",{children:"About"})},F=function(){return Object(a.jsx)("h1",{children:"Contact"})},C=function(){var e=Object(l.f)().albumId,t=Object(n.useState)(!0),c=Object(o.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),j=Object(o.a)(i,2),b=j[0],u=j[1],d=g("album",[]),f=Object(o.a)(d,2),v=f[0],N=f[1],k=Object(n.useState)(""),w=Object(o.a)(k,2),S=w[0],_=w[1];return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(m.a.mark((function t(){var c,a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("","&&photoset_id=").concat(e,"&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:c=t.sent,a=c.data.photoset,_(a.title),n=c.data.photoset.photo,N(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),u(!0);case 13:r(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e,N]),Object(a.jsxs)(a.Fragment,{children:[b&&Object(a.jsx)("div",{children:"Something went wrong..."}),s&&Object(a.jsx)(p,{}),!s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.b,{to:"/galerie",className:"galerie-link up",children:"Vers la galerie"}),Object(a.jsx)(x.b,{to:"/galerie/".concat(e),className:"galerie-link bottom",children:"Vers l'album"}),Object(a.jsxs)("h1",{className:"title",children:["Album: ",Object(a.jsx)("span",{className:"title-normal",children:S})]}),Object(a.jsx)("div",{className:"photoMax-container",children:Object(a.jsx)("ul",{className:"main-photoMax-container",children:Object(a.jsx)("div",{className:"photoMax-sub-container",children:v.map((function(e,t){return Object(a.jsx)("li",{className:"album-container",children:Object(a.jsx)("section",{className:"album-photoMax-section",children:Object(a.jsx)("img",{src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_b.jpg"),alt:"Contenu de l'album",className:"photoMax"})})},t)}))})})})]})]})},I=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)([]),u=Object(o.a)(b,2),d=u[0],f=u[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=".concat("","&user_id=").concat("","&format=json&nojsoncallback=1"));case 3:t=e.sent,c=t.data.photosets.photoset,f(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!0);case 11:s(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=d.map((function(e){var t={title:e.title._content,id:e.id};return Object(a.jsx)(x.c,{exact:!0,to:"/galerie/".concat(e.id),className:"submenu menu menu-item",children:t.title},e.id)}));return Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)("div",{children:"Something went wrong..."}),c&&Object(a.jsx)(p,{}),!c&&Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)("div",{children:"Something went wrong..."}),Object(a.jsx)("div",{children:v})]})]})},E=function(e){var t=e.isOpen;return Object(a.jsx)("div",{className:t?"sidebar visible":"sidebar hidden",children:Object(a.jsxs)("ul",{className:"menu-items",children:[Object(a.jsx)("li",{className:"menu",children:Object(a.jsx)(x.c,{exact:!0,activeClassName:"current",to:"/",className:"menu-item",children:"Accueil"})}),Object(a.jsxs)("li",{className:"menu",children:[Object(a.jsx)(x.c,{exact:!0,activeClassName:"current",to:"/galerie",className:"menu-item",children:"Galerie"}),Object(a.jsx)("ul",{className:"dropdown-menu",children:Object(a.jsx)(I,{})})]}),Object(a.jsx)("li",{className:"menu",children:Object(a.jsx)(x.c,{exact:!0,activeClassName:"current",to:"/seriesX23",className:"menu-item",children:"S\xe9ries X23"})}),Object(a.jsx)("li",{className:"menu",children:Object(a.jsx)(x.c,{exact:!0,activeClassName:"current",to:"/apropos",className:"menu-item",children:"A propos"})}),Object(a.jsx)("li",{className:"menu",children:Object(a.jsx)(x.c,{exact:!0,activeClassName:"current",to:"/contact",className:"menu-item",children:"Contact"})})]})})},M=function(e){var t=e.toggleSidebar,c=e.isOpen;return Object(a.jsx)("div",{className:"sidebar-button-container",children:Object(a.jsx)("div",{className:c?"sidebar-button open":"sidebar-button",onClick:t,children:Object(a.jsx)("div",{className:"sidebar-button-lines"})})})},P=(c(61),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{toggleSidebar:function(){s(!c)},isOpen:c}),Object(a.jsx)(E,{isOpen:c}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(a.jsx)(l.a,{exact:!0,path:"/galerie",component:v}),Object(a.jsx)(l.a,{exact:!0,path:"/galerie/:albumId",component:N}),Object(a.jsx)(l.a,{exact:!0,path:"/galerie/:albumId/aper\xe7u",component:C}),Object(a.jsx)(l.a,{exact:!0,path:"/galerie/:albumId/:photoId",component:S}),Object(a.jsx)(l.a,{exact:!0,path:"/projets",component:_}),Object(a.jsx)(l.a,{exact:!0,path:"/apropos",component:y}),Object(a.jsx)(l.a,{exact:!0,path:"/contact",component:F})]})]})});i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x.a,{basename:".",children:Object(a.jsx)(P,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8f92f5a4.chunk.js.map