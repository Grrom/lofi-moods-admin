(this["webpackJsonplofi-moods-admin"]=this["webpackJsonplofi-moods-admin"]||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n.n(r),s=n(42),a=n.n(s),i=(n(49),n(0)),o=n.n(i),u=n(1),l=n(10),d=(n(51),n(16)),f=(n(52),n(53),n(6));function b(){return Object(f.jsx)("div",{className:"loader-container",children:Object(f.jsx)("div",{className:"mini-loader"})})}function m(){return Object(f.jsx)("div",{className:"loader-container",children:Object(f.jsx)("div",{className:"loader"})})}var p=n(15),j=n.n(p),h=n(2);function O(e){var t=e.icon,n=e.message,r=e.duration;j.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:null!==r&&void 0!==r?r:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",j.a.stopTimer),e.addEventListener("mouseleave",j.a.resumeTimer)}}).fire({icon:t,title:n})}var v=function e(){Object(h.a)(this,e)};v.errorAlert=function(e,t){O({icon:"error",message:e,duration:t})},v.textInputAlert=function(e,t){j.a.fire({icon:"question",title:e,input:"text",showCancelButton:!0}).then((function(e){e.isConfirmed&&t(e.value)}))},v.successAlert=function(e,t){O({icon:"success",message:e,duration:t})},v.confirmDialog=function(e){var t=e.question,n=e.onConfirm,r=e.confirmButtonColor;j.a.fire({icon:"question",title:t,showCancelButton:!0,confirmButtonColor:null!==r&&void 0!==r?r:"red"}).then((function(e){e.isConfirmed&&n()}))},v.getById=function(e){return document.getElementById(e)},v.inputGetter=function(e){return document.getElementById(e).value},v.getFirebaseError=function(e){var t=e.code;return t.substring(t.indexOf("/")+1,t.length)},v.getCookie=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var c=n[r];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return""};var g=n.p+"static/media/add.776ab686.svg",x=n.p+"static/media/trash.592bd856.svg",w=n(23);function k(e){var t=e.show,n=e.selected,c=e.addMusic,s=e.search,a=e.deleteMoodFromState,i=Object(r.useState)(!1),d=Object(l.a)(i,2),b=d[0],m=d[1],p=Object(r.useState)(!1),h=Object(l.a)(p,2),O=h[0],k=h[1];function C(){return(C=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m((function(){return!0})),e.next=3,V.addMusic(t);case 3:n=e.sent,m((function(){return!1})),n.success?(c(n.data),v.successAlert(n.message,1e3)):v.errorAlert(n.message,1e3);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return N=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k((function(){return!0})),e.next=3,V.deleteMood(n);case 3:(t=e.sent).success?(a(n),v.successAlert(t.message)):v.errorAlert(t.message),k((function(){return!1}));case 6:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}return t?Object(f.jsxs)("div",{className:"action-bar",children:[Object(f.jsxs)("span",{className:"search-bar",children:[Object(f.jsx)("input",{type:"text",className:"search-field",id:"search-field",onChange:function(e){s(e.target.value)}}),Object(f.jsx)("div",{className:"action-button",title:"Search",onClick:function(){return s(document.getElementById("search-field").value)},children:Object(f.jsx)("h4",{children:"Search"})})]}),Object(f.jsxs)("div",{className:"action-button-container",children:[Object(f.jsx)(y,{onClick:function(){return N.apply(this,arguments)},isLoading:O,text:"Delete Mood",icon:x}),Object(f.jsx)(y,{onClick:function(){j.a.fire({title:"Enter Details",html:'<span class="swal2-input-label">Title</span><input id="musicTitle" class="swal2-input"><span class="swal2-input-label">Owner</span><input id="musicOwner" class="swal2-input"><span class="swal2-input-label">link</span><input id="musicLink" class="swal2-input"/><div id="empty" class="error-text"> </div>',showCancelButton:!0,preConfirm:function(){var e=v.inputGetter("musicTitle").trim(),t=v.inputGetter("musicOwner").trim(),n=v.inputGetter("musicLink").trim();v.getById("musicTitle").value=e,v.getById("musicOwner").value=t,v.getById("musicLink").value=n,e=e.trim(),t=t.trim(),n=n.trim();var r=e.length>0&&t.length>0&&n.length>0;return v.getById("empty").innerHTML=r?" ":"Complete all fields",r}}).then((function(e){e.isConfirmed&&function(e){C.apply(this,arguments)}({title:v.inputGetter("musicTitle"),owner:v.inputGetter("musicOwner"),link:v.inputGetter("musicLink"),mood:n,dateAdded:w.a.now()})}))},isLoading:b,text:"Add",icon:g})]})]}):Object(f.jsx)("span",{})}function y(e){var t=e.onClick,n=e.isLoading,r=e.text,c=e.icon;return Object(f.jsxs)("span",{className:"action-button",title:r,onClick:function(){t()},children:[n?Object(f.jsx)(b,{}):Object(f.jsx)("img",{src:c,alt:r,className:"icon"}),Object(f.jsxs)("h4",{children:[r," "]})]})}var C=n(29),N=n(43),S=n.n(N),A=n.p+"static/media/play.20181f97.svg",M=n.p+"static/media/pause.7eb12db0.svg",B=n(44),I=n.n(B);function L(e){var t=e.music,n=e.deleteMe,c=Object(r.useState)(!1),s=Object(l.a)(c,2),a=s[0],i=s[1],d=Object(r.useState)(!1),m=Object(l.a)(d,2),p=m[0],j=m[1],h=Object(r.useState)(!1),O=Object(l.a)(h,2),g=O[0],k=O[1],y=Object(r.useState)(t),N=Object(l.a)(y,2),B=N[0],L=N[1],E=Object(r.useState)(A),T=Object(l.a)(E,2),F=T[0],D=T[1],P=Object(r.useState)(0),G=Object(l.a)(P,2),q=G[0],R=G[1],U=Object(r.useState)(0),K=Object(l.a)(U,2),Q=K[0],Y=K[1],z=Object(r.useRef)(null),W=Object(r.useRef)(null);function X(){return X=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.confirmDialog({question:"Are you sure you want to delete this music?",onConfirm:function(){var e=Object(u.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(){return!0})),e.next=3,V.deleteMusic(t);case 3:r=e.sent,i((function(){return!1})),r.success?(v.successAlert(r.message),n(B.id)):v.errorAlert(r.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),confirmButtonColor:"red"});case 1:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function _(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(o.a.mark((function e(t,n,r){var c,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){v.getById(s).textContent=B[n].toString()},e.next=3,V.updateMusic(B,n,r);case 3:c=e.sent,s="".concat(n,"-").concat(B[n]),r=r.trim(),B[n]===r?a():r.length<=0?(v.errorAlert("Invalid input",1e3),a()):c.success?(v.successAlert("Edited successfully",1e3),L((function(e){var t=Object(C.a)({},e);return t[n]=r,t}))):(v.errorAlert("Failed to edit value",1e3),a());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(w.a.now()),Object(f.jsxs)("div",{className:"content-item",children:[Object(f.jsxs)("div",{className:"content-item-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{id:"title-".concat(B.title),contentEditable:!0,className:"break-word subtle-hover-grow",suppressContentEditableWarning:!0,spellCheck:!1,onBlur:function(e){_(B.id,"title",e.target.textContent)},children:B.title}),Object(f.jsx)("h4",{id:"owner-".concat(B.owner),contentEditable:!0,className:"break-word subtle-hover-grow",suppressContentEditableWarning:!0,spellCheck:!1,onBlur:function(e){_(B.id,"owner",e.target.textContent)},children:B.owner}),Object(f.jsx)("small",{children:Object(f.jsx)("h5",{id:"link-".concat(B.link),contentEditable:!0,className:"break-word subtle-hover-grow",suppressContentEditableWarning:!0,spellCheck:!1,onBlur:function(e){_(B.id,"link",e.target.textContent)},children:B.link})})]}),Object(f.jsxs)("div",{className:"thumb-icon",children:[Object(f.jsx)("img",{className:"thumbnail",src:"https://i.ytimg.com/vi/".concat(B.link,"/mqdefault.jpg"),alt:"thumbnail"}),Object(f.jsxs)("div",{className:"icon-container",children:[Object(f.jsx)("div",{className:"bg-red icon-button",onClick:function(){return function(){return X.apply(this,arguments)}()},children:a?Object(f.jsx)(b,{}):Object(f.jsx)("img",{className:"icon ",src:x,alt:"delete"})}),Object(f.jsx)("div",{className:"bg-green icon-button",onClick:function(){return g?function(){}:j((function(e){return!e}))},children:g?Object(f.jsx)(b,{}):Object(f.jsx)("img",{className:"icon",src:F,alt:"play"})})]})]}),Object(f.jsx)(I.a,{ref:z,onBuffer:function(){return k((function(){return!0}))},onBufferEnd:function(){return k((function(){return!1}))},className:"react-player",url:"https://www.youtube.com/watch?v=".concat(B.link),onStart:function(){},onError:function(){return v.errorAlert("something went wrong while fetching music make sure you added a valid link to the resource")},onPlay:function(){return D((function(){return M}))},onPause:function(){return D((function(){return A}))},controls:!1,playing:p,loop:!0,onProgress:function(e){return Y((function(){return e.playedSeconds/q*100}))},onDuration:function(e){return R((function(){return e}))},config:{playerVars:{height:"144px",width:"256px",vq:"small"}}})]}),Q>0?Object(f.jsx)("div",{ref:W,className:"progress-bar-container",onClick:function(e){var t=W.current.getBoundingClientRect(),n=t.width,r=e.pageX-t.x;g||z.current.seekTo(r/n)},children:Object(f.jsx)(S.a,{borderRadius:"0 0 24px 0",transitionDuration:"200",height:"8px",bgColor:"#11496c",className:"progress-bar",completed:Q,customLabel:" "})}):""]})}function E(e){var t=e.selected,n=e.deleteMoodFromState,c=Object(r.useState)([]),s=Object(l.a)(c,2),a=s[0],i=s[1],b=Object(r.useState)(!0),p=Object(l.a)(b,2),j=p[0],h=p[1],O=Object(r.useState)(""),g=Object(l.a)(O,2),x=g[0],w=g[1];function y(e){i((function(){return a.filter((function(t){return t.id!==e}))}))}Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h((function(){return!0})),e.next=3,V.fetchMusic(t);case 3:(n=e.sent).success?i((function(){return n.data})):v.errorAlert(n.message),h((function(){return!1}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==t&&function(){e.apply(this,arguments)}()}),[t]);function C(){var e=[];return""!==x?a.forEach((function(t){t.title.trim().toLowerCase().includes(x.trim().toLowerCase())&&e.push(N(t))})):e=a.map((function(e){return N(e)})),e}function N(e){return Object(f.jsx)(L,{music:e,deleteMe:y},e.id)}return Object(f.jsxs)("div",{id:"content",children:[Object(f.jsx)(k,{show:void 0!==t,selected:t,addMusic:function(e){i((function(t){return[e].concat(Object(d.a)(t))}))},playList:a,search:function(e){return w((function(){return e}))},deleteMoodFromState:n}),void 0!==t?Object(f.jsx)("div",{className:"content-container",children:j?Object(f.jsx)(m,{}):a.length>0?C().map((function(e){return e})):Object(f.jsx)("h3",{className:"content-message",children:"There are no items in this list"})}):Object(f.jsx)("h3",{className:"content-message",children:"None selected"})]})}n(75);var T=n.p+"static/media/hamburger.2a7fc546.svg";function F(e){var t=e.imagesrc,n=e.label,r=e.isSelected,c=e.onClick;return Object(f.jsxs)("div",{className:"sidebar-item ".concat(r?"active":""),onClick:function(){return c?c():function(){}},children:[Object(f.jsx)("img",{src:t,alt:"icon",className:"icon"}),Object(f.jsx)("div",{className:"label",children:n})]})}n(76);var D=n.p+"static/media/playlist.8b5736a2.svg",P=n.p+"static/media/logout.a83622f9.svg";function G(e){var t=e.icon,n=e.message,r=e.duration,c=e.showTimer;j.a.mixin({toast:!0,position:"top-start",showConfirmButton:!1,timer:null!==r&&void 0!==r?r:3e3,timerProgressBar:null===c||void 0===c||c,didOpen:function(e){e.addEventListener("mouseenter",j.a.stopTimer),e.addEventListener("mouseleave",j.a.resumeTimer)}}).fire({icon:t,title:n})}var q=function e(){Object(h.a)(this,e)};function R(e){var t=e.selected,n=e.select,c=e.addMood,s=e.hideSidebar,a=e.gettingMoods,i=e.moods,d=Object(r.useState)(!1),m=Object(l.a)(d,2),p=m[0],j=m[1];function h(){try{null!==s&&s()}catch(e){}}return Object(f.jsxs)("div",{id:"sidebar",children:[Object(f.jsx)("span",{onClick:function(){return j((function(e){return!e}))},className:"sidebar-item-container",children:Object(f.jsx)(F,{label:"Music",imagesrc:D,isSelected:p})}),p?a?Object(f.jsx)(b,{}):Object(f.jsx)("div",{className:"moods-container",children:function(){var e=i.map((function(e){return Object(f.jsx)(U,{select:n,_hideSidebar:h,selected:t,mood:e},e)}));return e.push(Object(f.jsx)("span",{onClick:function(){v.textInputAlert("Enter the name of the mood",function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=10;break}if(t=t.toLowerCase(),i.includes(t)){e.next=9;break}return e.next=5,V.addMood(t);case 5:(n=e.sent).success?(v.successAlert(n.message),c(n.data)):v.errorAlert(n.message),e.next=10;break;case 9:v.errorAlert("".concat(t," mood already exists"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:Object(f.jsx)(F,{imagesrc:g,label:"Add Mood",isSelected:!1})},"addMood")),e}()}):"",Object(f.jsx)(F,{label:"Logout",imagesrc:P,isSelected:!1,onClick:function(){return q.confirmDialog({question:"Are you sure you want to logout?",onConfirm:function(){H.logout()}})}})]})}function U(e){var t=e.select,n=e._hideSidebar,r=e.selected,c=e.mood;return Object(f.jsx)("span",{onClick:function(){t(c),n()},className:"sidebar-item-container",children:Object(f.jsx)(F,{label:c,imagesrc:D,isSelected:r===c})})}function K(e){var t=e.select,n=e.selected,r=e.moods,c=e.addMood,s=e.gettingMoods;return Object(f.jsxs)("div",{id:"navbar",children:[Object(f.jsx)("h2",{children:"Lofi Moods Dashboard"}),Object(f.jsx)("img",{src:T,title:"nav",alt:"nav",className:"icon clickable hamburger",onClick:function(){return v.getById("sidebar").style.width="80vw",void(v.getById("overlay").style.width="100vw")}}),Object(f.jsx)("div",{id:"overlay",onClick:function(){return v.getById("sidebar").style.width="0vw",void(v.getById("overlay").style.width="0vw")}}),Object(f.jsx)(R,{selected:n,select:t,moods:r,addMood:c,gettingMoods:s})]})}q.errorToast=function(e,t,n){G({icon:"error",message:e,duration:t,showTimer:n})},q.infoToast=function(e,t){G({icon:"info",message:e,duration:t})},q.successToast=function(e,t){G({icon:"success",message:e,duration:t})},q.textInputAlert=function(e,t){j.a.fire({icon:"question",title:e,input:"text",showCancelButton:!0}).then((function(e){e.isConfirmed&&t(e.value)}))},q.fileInputAlert=function(e,t,n){j.a.fire({title:e,input:"file",inputAttributes:{accept:t},showCancelButton:!0}).then((function(e){e.isConfirmed&&n(e.value)}))},q.successAlert=function(e){j.a.fire({icon:"success",title:e})},q.infoAlert=function(e){j.a.fire({icon:"info",title:e})},q.showLoading=function(e){j.a.fire({title:e,didOpen:function(){j.a.showLoading()}})},q.confirmDialog=function(e){var t=e.question,n=e.onConfirm,r=e.confirmButtonColor;j.a.fire({icon:"question",title:t,showCancelButton:!0,confirmButtonColor:null!==r&&void 0!==r?r:"red"}).then((function(e){e.isConfirmed&&n()}))};var Q=n(35),Y=n(4),z=n(12),W=n(3),X=n(21),_=function(){function e(t){var n=this;Object(h.a)(this,e),this.auth=void 0,this.signup=function(e,t){return Object(X.a)(n.auth,e,t)},this.login=function(){var e=Object(u.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.d)(n.auth,t,r);case 2:return e.abrupt("return",n.isAdmin());case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.logout=function(){Object(X.e)(n.auth)},this.isAdmin=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n.auth.currentUser){e.next=11;break}return e.next=3,Object(z.e)(Object(z.d)(Object(z.b)(V.firestore,"users"),n.auth.currentUser.uid));case 3:if(void 0===(t=e.sent.data())||!0===t.isAdmin){e.next=8;break}return q.infoAlert("Sorry, This account does not have admin privileges, Please contact a super admin to request admin access."),Object(X.e)(n.auth),e.abrupt("return",!1);case 8:return e.abrupt("return",void 0!==t&&!0===t.isAdmin);case 11:return console.log("no user"),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)}))),this.resetPassword=function(e){return Object(X.c)(n.auth,e)},this.updateName=function(e){return Object(X.g)(n.auth.currentUser,{displayName:e})},this.auth=Object(X.b)(t),console.log("hehe"),console.log(v.getCookie("rememberAdmin")),"true"!==v.getCookie("rememberAdmin")&&Object(X.e)(this.auth)}return Object(W.a)(e,[{key:"triggerUpdate",value:function(){return Object(X.f)(this.auth,this.auth.currentUser)}}]),e}();n(77);function J(e){var t=e.updateAuth,n=Object(r.useState)(!1),c=Object(l.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(!1),d=Object(l.a)(i,2),m=d[0],p=d[1],j=Object(r.useState)(!1),h=Object(l.a)(j,2),O=h[0],g=h[1];function x(){return(x=Object(u.a)(o.a.mark((function e(){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g((function(){return!0})),n=v.inputGetter("username"),r=v.inputGetter("password"),!(n.length>0&&r.length>0)){e.next=18;break}return e.prev=5,e.next=8,H.login(n,r);case 8:e.sent&&(g((function(){return!1})),q.successToast("Logged in successfully!"),m?((c=new Date).setDate(c.getDate()+30),document.cookie="rememberAdmin=true; expires=".concat(c,"; SameSite=Lax")):document.cookie="rememberAdmin=false; expires=".concat(new Date,"; SameSite=Lax"),t()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),q.errorToast("Failed to sign in: ".concat(v.getFirebaseError(e.t0))),g((function(){return!1}));case 16:e.next=20;break;case 18:q.infoToast("Please Fill All Fields."),g((function(){return!1}));case 20:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(f.jsx)("div",{id:"login",children:Object(f.jsxs)("div",{className:"login-form",children:[Object(f.jsx)("h1",{className:"login-title",children:"Admin Login"}),Object(f.jsxs)("div",{className:"form",children:[Object(f.jsx)("h4",{className:"label",children:"Email"}),Object(f.jsx)("input",{id:"username",type:"email",className:"swal2-input input"}),Object(f.jsx)("h4",{className:"label",children:"Password"}),Object(f.jsx)("input",{id:"password",className:"swal2-input input",type:s?"text":"password"}),Object(f.jsxs)("div",{className:"checkbox",children:[Object(f.jsx)("strong",{className:"label",children:"Show Password"}),Object(f.jsx)("input",{className:"input",type:"checkbox",onChange:function(e){a((function(){return e.target.checked}))}})]}),Object(f.jsxs)("div",{className:"checkbox",children:[Object(f.jsx)("strong",{className:"label",children:"Remember Me"}),Object(f.jsx)("input",{className:"input",type:"checkbox",onChange:function(e){return p((function(){return e.target.checked}))}})]}),Object(f.jsx)("div",{className:"login-button",onClick:function(){return function(){return x.apply(this,arguments)}()},children:O?Object(f.jsx)("h3",{children:Object(f.jsx)(b,{})}):Object(f.jsx)("h3",{children:"LOGIN"})})]})]})})}Object(Q.a)({apiKey:"AIzaSyDl1rXG54RQlR7FnxPct8oLKYNkurrwNMY",authDomain:"lofi-moods.firebaseapp.com",projectId:"lofi-moods",storageBucket:"lofi-moods.appspot.com",messagingSenderId:"474872717326",appId:"1:474872717326:web:6284da735dc0392f4f5c5f",measurementId:"G-3LQDEFT82T"});var H=new _(Object(Q.a)({apiKey:"AIzaSyDl1rXG54RQlR7FnxPct8oLKYNkurrwNMY",authDomain:"lofi-moods.firebaseapp.com",projectId:"lofi-moods",storageBucket:"lofi-moods.appspot.com",messagingSenderId:"474872717326",appId:"1:474872717326:web:6284da735dc0392f4f5c5f",measurementId:"G-3LQDEFT82T"})),V=new function e(){var t=this;Object(h.a)(this,e),this.firestore=Object(z.g)(),this.addMusic=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.a)(Object(z.b)(t.firestore,n.mood),n);case 3:c=e.sent,r={message:"".concat(n.title," added succesfully"),success:!0,data:Object(C.a)({id:c.id},n)},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r={message:"failed to add ".concat(n.title),success:!1};case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteMusic=function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(z.b)(t.firestore,n.mood),e.next=4,Object(z.c)(Object(z.d)(r,n.id));case 4:return e.abrupt("return",{message:"".concat(n.title," deleted succesfully"),success:!0});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to delete ".concat(n.title,": ").concat(e.t0),success:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.fetchMusic=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.f)(Object(z.b)(t.firestore,n));case 3:return r=e.sent,c=[],r.forEach((function(e){var t=e.data();t.id=e.id,c.push(t)})),e.abrupt("return",{message:"".concat(n," music fetched"),success:!0,data:c});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to fetch music: ".concat(e.t0),success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.fetchMoods=Object(u.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.f)(Object(z.b)(t.firestore,"moods"));case 3:return n=e.sent,r=[],n.forEach((function(e){var t=e.data();r.push(t.name)})),e.abrupt("return",{message:"Moods fetched",success:!0,data:r});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to fetch Moods: ".concat(e.t0),success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),this.updateMusic=function(){var e=Object(u.a)(o.a.mark((function e(n,r,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.i)(Object(z.d)(Object(z.b)(t.firestore,n.mood),n.id),Object(Y.a)({},r,c));case 3:return e.abrupt("return",{message:"".concat(n.title," updated succesfully"),success:!0});case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to update ".concat(n.title,": ").concat(e.t0),success:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}(),this.deleteMood=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(z.b)(t.firestore,"moods"),e.next=4,Object(z.f)(Object(z.h)(r,Object(z.j)("name","==",n)));case 4:return c=e.sent.docs[0].id,e.next=7,Object(z.c)(Object(z.d)(r,c));case 7:return t.deleteCollection(n),t.deleteCollection("".concat(n,"_chatroom")),e.abrupt("return",{message:"".concat(n," successfully deleted"),success:!0});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to delete ".concat(n,": ").concat(e.t0),success:!1});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.addMood=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.a)(Object(z.b)(t.firestore,"moods"),{name:n});case 3:return e.abrupt("return",{message:"".concat(n," successfully added"),success:!0,data:n});case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:"Failed to add ".concat(n,": ").concat(e.t0," "),success:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteCollection=function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.f)(Object(z.b)(t.firestore,n));case 3:if(!((r=e.sent).size>0)){e.next=7;break}return e.next=7,new Promise((function(e){return r.forEach(function(){var r=Object(u.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(z.c)(Object(z.d)(Object(z.b)(t.firestore,n),c.id));case 2:e(!0);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}));case 7:return e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()};function Z(){var e=Object(r.useState)(void 0),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(l.a)(s,2),i=a[0],d=a[1],b=Object(r.useState)(!1),p=Object(l.a)(b,2),j=p[0],h=p[1],O=Object(r.useState)(!1),g=Object(l.a)(O,2),x=g[0],w=g[1],k=Object(r.useState)(!0),y=Object(l.a)(k,2),C=y[0],N=y[1],S=function(e){return c((function(){return e}))},A=function(e){return d((function(t){return t.concat(e)}))};return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h((function(){return!0})),e.next=3,V.fetchMoods();case 3:(t=e.sent).success?d((function(){return t.data})):v.errorAlert(t.message),h((function(){return!1}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x&&function(){e.apply(this,arguments)}()}),[x]),Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.auth.onAuthStateChanged(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.isAdmin();case 2:t=e.sent,w((function(){return t})),N((function(){return!1}));case 5:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),C?Object(f.jsx)("div",{children:Object(f.jsx)(m,{})}):x?Object(f.jsxs)("div",{id:"app",children:[Object(f.jsx)(K,{selected:n,select:S,moods:i,addMood:A,gettingMoods:j}),Object(f.jsxs)("main",{children:[Object(f.jsx)(R,{selected:n,select:S,moods:i,addMood:A,gettingMoods:j}),Object(f.jsx)(E,{selected:n,deleteMoodFromState:function(e){d((function(){return i.filter((function(t){return t!==e}))})),S(void 0)}})]})]}):Object(f.jsx)(J,{updateAuth:function(){return w((function(){return!0}))}})}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),$()}},[[78,1,2]]]);
//# sourceMappingURL=main.bd04edb6.chunk.js.map