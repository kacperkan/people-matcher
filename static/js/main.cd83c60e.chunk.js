(this["webpackJsonppeople-matcher-new"]=this["webpackJsonppeople-matcher-new"]||[]).push([[0],{183:function(e,t,a){e.exports=a.p+"static/media/google-icon.2d7c9127.png"},203:function(e,t,a){e.exports=a(360)},208:function(e,t,a){},209:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),o=(a(208),a(209),a(66)),l=a(420),s=a(421),u=a(41),m=a(13),d=a(88),g=a(4),p=a(406),f=a(18),h=a(436),b=a(409),E=a(411),v=a(438),w=a(412),x=a(415),j=a(414),O=a(413),y=a(177),N=a.n(y),k=a(178),C=a.n(k),S=a(179),I=a.n(S),P=a(416),B=a(417),F=a(418),L=a(180),T=a.n(L),A=a(181),R=a.n(A),z=a(182),_=a.n(z),U=a(53);a(210);U.initializeApp({apiKey:"AIzaSyDF9a6lrZiRxIKp4egTzFbIlvUai-sxBTg",authDomain:"peoplematcher-ca9ef.firebaseapp.com",databaseURL:"https://peoplematcher-ca9ef.firebaseio.com",projectId:"peoplematcher-ca9ef",storageBucket:"peoplematcher-ca9ef.appspot.com",messagingSenderId:"468976630953",appId:"1:468976630953:web:67c28399a0d9fa33b3bdb8"});var H=Object(n.createContext)("auth");function W(e){var t=e.children,a=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),c=Object(m.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],g=u[1],p=new U.auth.GoogleAuthProvider;return Object(n.useEffect)((function(){l(!0);var e=U.auth().onAuthStateChanged((function(e){e?(r(e),l(!1)):(r(!1),l(!1))}));return function(){return e()}}),[]),Object(n.useEffect)((function(){g("object"===typeof a)}),[a]),{profile:a,isLoading:o,isLoggedIn:d,signin:function(){return l(!0),U.auth().signInWithPopup(p).then((function(e){return r(e.user),l(!1),e.user})).catch((function(e){console.error(e),l(!1)}))},signout:function(){return U.auth().signOut().then((function(){r(!1)}))}}}();return r.a.createElement(H.Provider,{value:a},t)}var D=function(){return Object(n.useContext)(H)};var G=Object(n.createContext)("router");function J(e){var t=e.children,a=function(){var e=Object(n.useState)("/"),t=Object(m.a)(e,2),a=t[0],r=t[1];return{path:a,goTo:function(e){r(e)}}}();return r.a.createElement(G.Provider,{value:a},t)}var K=function(){return Object(n.useContext)(G)};var M=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(to right, #663399, #5B72FF)"},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(d.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},toolbar:{display:"flex",justifyContent:"space-between"},userAvatar:{display:"flex",alignItems:"center",cursor:"pointer"},userName:{paddingRight:"1rem",fontWeight:"bold",fontSize:1.3*e.typography.fontSize},clickable:{cursor:"pointer"}}})),q=function(e){var t=e.siteTitle,a=M(),n=D(),i=n.profile,c=n.signout,l=K().goTo,s=Object(f.a)(),d=r.a.useState(!1),p=Object(m.a)(d,2),y=p[0],k=p[1];function S(){l("/")}function L(){l("/profile")}return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,null),r.a.createElement(E.a,{position:"fixed",elevation:0,className:Object(g.a)(a.appBar,Object(u.a)({},a.appBarShift,y))},r.a.createElement(w.a,{className:a.toolbar},r.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){k(!0)},edge:"start",className:Object(g.a)(a.menuButton,y&&a.hide)},r.a.createElement(N.a,null)),r.a.createElement(o.a,{variant:"h6",color:"inherit",onClick:S,className:a.clickable},t),r.a.createElement("div",{className:a.userAvatar,onClick:L},r.a.createElement("span",{className:a.userName},(null===i||void 0===i?void 0:i.displayName)+" "),r.a.createElement(v.a,{alt:null===i||void 0===i?void 0:i.displayName,src:null===i||void 0===i?void 0:i.photoURL})))),r.a.createElement(h.a,{className:a.drawer,variant:"persistent",anchor:"left",open:y,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(O.a,{onClick:function(){k(!1)}},"ltr"===s.direction?r.a.createElement(C.a,null):r.a.createElement(I.a,null))),r.a.createElement(j.a,null),r.a.createElement(x.a,null,r.a.createElement(P.a,{button:!0,onClick:S},r.a.createElement(B.a,null,r.a.createElement(T.a,null)),r.a.createElement(F.a,null,"Network")),r.a.createElement(P.a,{button:!0,onClick:L},r.a.createElement(B.a,null,r.a.createElement(R.a,null)),r.a.createElement(F.a,null,"Profile")),r.a.createElement(j.a,null),r.a.createElement(P.a,{button:!0,onClick:function(){c(),l("/")}},r.a.createElement(B.a,null,r.a.createElement(_.a,null)),r.a.createElement(F.a,null,"Sign Out")))))};q.defaultProps={siteTitle:""};var V=q,Y=a(184),Z=a.n(Y),$=a(419),Q=a(20),X=a.n(Q),ee=a(183),te=a.n(ee),ae=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),display:"flex",flexAlign:"center",justifyContent:"center"},submit:{margin:e.spacing(3,0,2)},socialLogin:{width:"50%",marginTop:e.spacing(1)},sighInIcon:{height:"48px",paddingRight:"5px"}}})),ne=function(){var e=ae(),t=D(),a=t.signin,n=t.user;return r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("div",{className:e.paper},r.a.createElement(v.a,{className:e.avatar},r.a.createElement(Z.a,null)),r.a.createElement(o.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement($.a,{color:"primary",onClick:function(){a().then((function(e){X.a.database().ref("/users/".concat(e.uid)).once("value").then((function(t){t.val()?(X.a.database().ref("/users/".concat(e.uid,"/username")).set(e.displayName),X.a.database().ref("/users/".concat(e.uid,"/email")).set(e.email),X.a.database().ref("/users/".concat(e.uid,"/photoURL")).set(e.photoURL)):X.a.database().ref("/users/".concat(e.uid)).set({username:e.displayName,email:e.email,photoUrl:e.photoURL,tags:[]})}))}))}},r.a.createElement("img",{alt:"Google Icon",className:e.sighInIcon,src:te.a})," with Google"))))};function re(){return r.a.createElement(o.a,{variant:"body2",color:"textSecondary",align:"center",style:{bottom:0,position:"absolute",width:"100%"}},"Copyright \xa9 ",(new Date).getFullYear(),r.a.createElement(l.a,{color:"inherit",href:"https://github.com/burnpiro"}," @burnpiro."),"Built with"," ",r.a.createElement(l.a,{color:"inherit",href:"https://www.reactjs.org"},"React"))}var ie=function(e){var t=e.children,a=D(),n=a.isLoggedIn,i=a.isLoading;return r.a.createElement("div",{style:{maxHeight:"100vh",backgroundColor:"#FFF"}},i?r.a.createElement("div",{style:{margin:"auto auto",width:"100%",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(s.a,{size:100})):r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(V,{siteTitle:"People Matcher"}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,position:"relative",height:"calc(100vh - 48px)",padding:"0px 1.0875rem 1.45rem",paddingTop:100}},r.a.createElement("main",{style:{flex:1}},n?t:r.a.createElement(ne,null)),r.a.createElement(re,null))))},ce=a(52),oe=a(65),le=a(185),se=a.n(le),ue=a(186),me=a.n(ue);function de(e){e.description;var t=e.lang,a=e.meta,n=e.title;return r.a.createElement(me.a,{htmlAttributes:{lang:t},title:n,titleTemplate:"%s | People Matcher",meta:[{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"},{property:"og:title",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@burnpiro"},{name:"twitter:title",content:n}].concat(a)})}de.defaultProps={lang:"en",meta:[],description:""};var ge=de,pe=a(431),fe=a(422),he=a(361),be=a(424),Ee=a(428),ve=a(427),we=a(425),xe=a(426),je=a(439),Oe=a(423),ye=a(435),Ne=Object(p.a)((function(e){return{root:{position:"absolute",zIndex:100,top:"64px",left:0,width:"100%"},connectionsColumn:{width:"140px"},nameColumn:{width:"280px"}}})),ke=function(e,t){return t.tags.length-e.tags.length},Ce=function(e){var t=e.selectedNodes,a=e.selectedEdges,n=e.nodes,i=Ne(),c=r.a.useState(0),o=Object(m.a)(c,2),l=o[0],s=o[1],u=r.a.useState(10),d=Object(m.a)(u,2),g=d[0],p=d[1],f=t.length>0?function(e,t,a){var n=a.find((function(t){return t.id===e}));return t.map((function(e){return e.split("/")})).reduce((function(t,r){var i=Object(m.a)(r,2),c=i[0],o=i[1],l=c===e?a.find((function(e){return e.id===o})):a.find((function(e){return e.id===c})),s=n.tags.filter((function(e){return l.tags.some((function(t){return t.uid===e.uid}))})),u=t.findIndex((function(e){return e.id===l.id}));return-1!==u?t[u]={tags:s,id:l.id,name:l.username}:t=[].concat(Object(ce.a)(t),[{tags:s,id:l.id,name:l.username}]),t}),[])}(t[0],a,n):function(e,t){return e.map((function(e){return e.split("/")})).reduce((function(e,a){var n=Object(m.a)(a,2),r=n[0],i=n[1],c=t.find((function(e){return e.id===r})),o=t.find((function(e){return e.id===i})),l=c.tags.filter((function(e){return o.tags.some((function(t){return t.uid===e.uid}))})),s=e.findIndex((function(e){return e.id==="".concat(r,"/").concat(i)}));return-1!==s?e[s]={tags:l,id:"".concat(r,"/").concat(i),name:"".concat(c.username," - ").concat(o.username)}:e=[].concat(Object(ce.a)(e),[{tags:l,id:"".concat(r,"/").concat(i),name:"".concat(c.username," - ").concat(o.username)}]),e}),[])}(a,n);return f.sort(ke),r.a.createElement(fe.a,{className:i.root},r.a.createElement(he.a,null,r.a.createElement(Oe.a,{className:i.container},r.a.createElement(be.a,{stickyHeader:!0,size:"small"},r.a.createElement(we.a,null,r.a.createElement(xe.a,null,r.a.createElement(ve.a,{className:i.connectionsColumn,align:"center"},"Connections"),r.a.createElement(ve.a,{className:i.nameColumn,align:"center"},"Name"),r.a.createElement(ve.a,null,"Tags"))),r.a.createElement(Ee.a,null,f.slice(l*g,l*g+g).map((function(e){return r.a.createElement(xe.a,{key:e.id},r.a.createElement(ve.a,{className:i.connectionsColumn,align:"center"},e.tags.length),r.a.createElement(ve.a,{className:i.nameColumn,align:"center"},e.name),r.a.createElement(ve.a,null,e.tags.map((function(e){return r.a.createElement(je.a,{key:e.uid,label:e.tagName})}))))}))))),r.a.createElement(ye.a,{rowsPerPageOptions:[10],component:"div",count:f.length,rowsPerPage:g,page:l,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){p(+e.target.value),s(0)}})))},Se={nodes:{borderWidth:6,size:30},layout:{hierarchical:!1},edges:{arrows:{to:{enabled:!1}},scaling:{customScalingFunction:function(e,t,a,n){return n/a}},color:"#5B72FF"}},Ie=function(){var e=Object(oe.b)(X.a.database().ref("/users")),t=Object(m.a)(e,1)[0],a=Object(n.useState)([]),i=Object(m.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),u=s[0],g=s[1],p={select:function(e){var t=e.nodes,a=e.edges;o(t),g(a)}},f=null===t||void 0===t?void 0:t.val(),h="object"===typeof f?Object.keys(f).map((function(e){return Object(d.a)({},f[e],{id:e,tags:f[e].tags||[],shape:"circularImage",image:f[e].photoURL||"https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png",brokenImage:"https://raw.githubusercontent.com/google/material-design-icons/master/social/2x_web/ic_person_outline_white_48dp.png"})})):[],b=h.length>0?h.reduce((function(e,t,a){var n=h.filter((function(e,n){return e.id!==t.id&&n>a})).map((function(e){if(0===e.tags.length)return{value:0};var a=t.tags.filter((function(t){return e.tags.some((function(e){return e.uid===t.uid}))})).length;return{id:"".concat(t.id,"/").concat(e.id),from:t.id,to:e.id,value:a}}));return[].concat(Object(ce.a)(e),Object(ce.a)(n.filter((function(e){return 0!==e.value}))))}),[]):[],E={nodes:h,edges:b};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{title:"Home"}),(u.length>0||c.length>0)&&r.a.createElement(Ce,{selectedNodes:c,selectedEdges:u,nodes:h}),r.a.createElement(pe.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(se.a,{graph:E,options:Se,events:p,style:{height:"calc(100vh - 120px)",width:"100vw"}})))},Pe=a(187),Be=a(188),Fe=a.n(Be),Le=a(434),Te=a(437),Ae=new Pe.DraggableAreasGroup,Re=Ae.addArea(),ze=Ae.addArea(),_e=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},tag:{position:"relative",margin:"3px",fontSize:"16px",border:"2px dashed #cccccc",borderRadius:"4px",padding:e.spacing(1),lineHeight:"30px",color:"#666666",background:"rgba(255, 255, 255, 0.7)"},tagSelected:{border:"2px dashed #3b9de9;"},deleteBtn:{position:"absolute",top:"-1px",right:"-1px",width:"20px",height:"20px",cursor:"pointer",userDrag:"none",userSelect:"none"},dragableBox:{minHeight:"100px",background:"rgba(0, 0, 0, 0.05)"}}})),Ue=function(){var e=_e(),t=D().profile,a=Object(oe.b)(X.a.database().ref("/users/".concat(null===t||void 0===t?void 0:t.uid))),i=Object(m.a)(a,1)[0],c=Object(oe.a)(X.a.database().ref("/tags")),o=Object(m.a)(c,1)[0],l=Object(n.useState)(""),s=Object(m.a)(l,2),d=s[0],g=s[1],p=null===i||void 0===i?void 0:i.val(),f=(null===p||void 0===p?void 0:p.tags)||[],h=o.filter((function(e){return!f.some((function(t){return t.uid===e.uid}))})),b=function(e){var a=Object(u.a)({},"/users/".concat(null===t||void 0===t?void 0:t.uid,"/tags"),e);X.a.database().ref().update(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{title:"Page two"}),r.a.createElement("h1",null,"Select your interests"),r.a.createElement(pe.a,{container:!0,spacing:3},r.a.createElement(pe.a,{item:!0,xs:6},r.a.createElement(he.a,{className:e.paper},r.a.createElement(Re,{className:e.dragableBox,tags:h,render:function(t){var a=t.tag;return r.a.createElement("div",{key:a.uid,className:e.tag},a.tagName)}}),r.a.createElement(pe.a,{container:!0,justify:"center",alignItems:"flex-end"},r.a.createElement(pe.a,{item:!0,xs:9},r.a.createElement(Le.a,{required:!0,id:"tagName",name:"tagName",label:"Tag name",onChange:function(e){g(e.target.value)},value:d,fullWidth:!0})),r.a.createElement(pe.a,{item:!0,xs:3},r.a.createElement($.a,{variant:"contained",color:"primary",disabled:d.length<1,onClick:function(){var e=Object(Te.a)(),t=X.a.database().ref().child("tags").push().key,a=Object(u.a)({},"/tags/".concat(t),{uid:e,tagName:d});X.a.database().ref().update(a),g("")},className:e.button},"Add"))))),r.a.createElement(pe.a,{item:!0,xs:6},r.a.createElement(he.a,{className:e.paper},r.a.createElement(ze,{className:e.dragableBox,tags:f,render:function(t){var a=t.tag;return r.a.createElement("div",{key:a.uid,className:e.tag+" "+e.tagSelected},r.a.createElement(Fe.a,{color:"secondary",className:e.deleteBtn,onClick:function(){return function(e){b(f.filter((function(t){return t.uid!==e.uid})))}(a)}}),a.tagName)},onChange:function(e){b(e)}})))))};var He=function(e){e.paths;var t=K().path;return r.a.createElement(r.a.Fragment,null,"/"===t&&r.a.createElement(Ie,null),"/profile"===t&&r.a.createElement(Ue,null))};var We=function(){return r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement(ie,null,r.a.createElement(He,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[203,1,2]]]);
//# sourceMappingURL=main.cd83c60e.chunk.js.map