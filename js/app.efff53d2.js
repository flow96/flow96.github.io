(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"3d7a":function(e,t,i){e.exports=i.p+"img/tv3.e18f4003.png"},"456e":function(e,t,i){e.exports=i.p+"img/hotspot3.8472f69b.png"},4661:function(e,t,i){e.exports=i.p+"img/BookilyBooking.337be535.png"},"51b8":function(e,t,i){e.exports=i.p+"img/tv1.1b1a122b.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",[i("LandingView")],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-container",{staticClass:"mt-3 mb-4"},[i("v-row",{staticClass:"mt-2",attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"11"}},[i("v-row",{attrs:{justify:"center"}},[i("person-header")],1),i("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[i("cv-view")],1),i("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[i("cv-view-extra")],1),i("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[i("bookily-view")],1),i("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[i("projects-view")],1)],1)],1)],1),i("v-slide-y-reverse-transition",[i("v-footer",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{padless:""}},[i("v-col",{staticClass:"text-center caption font-weight-light grey--text text--lighten-1",attrs:{cols:"12"}},[e._v(" © "+e._s((new Date).getFullYear())+" — Florian Lutze ")])],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-slide-y-reverse-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"px-10",attrs:{"max-width":"780",width:"780"}},[i("v-card-title",[i("v-row",{attrs:{align:"center",justify:"space-between"}},[i("v-col",{attrs:{cols:"auto"}},[i("v-avatar",{attrs:{height:"180",width:"180"}},[i("img",{attrs:{src:e.avatar}})])],1),i("v-col",[i("v-row",{attrs:{align:"center",dense:""}},[i("v-col",[e._v(" Florian Lutze ")])],1),i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"body-1",staticStyle:{"word-break":"normal"}},[e._v(" Hi ich bin Flo 👨🏽‍💻, "),i("br"),e._v(" ich bin "+e._s(Math.abs(new Date(Date.now()-new Date(1996,7,5,0,0,0,0).getTime()).getUTCFullYear()-1970))+" Jahre alt und arbeite aktuell als Fullstack Software Engineer bei Bosch Connected Industry. ")])],1)],1)],1)],1),i("v-card-subtitle",{staticClass:"mt-2"},[i("v-chip",{staticClass:"mr-1 mt-1 mb-1",attrs:{label:"",outlined:"",link:"",href:"mailto:florian@lutze4u.de"}},[i("v-icon",{attrs:{left:"",size:"20"}},[e._v(" mdi-email-outline ")]),e._v(" E-Mail ")],1),i("v-chip",{staticClass:"mr-1 mt-1 mb-1",attrs:{label:"",outlined:"",link:"",href:"https://github.com/flow96"}},[i("v-icon",{attrs:{left:"",size:"20"}},[e._v(" mdi-github ")]),e._v(" Github ")],1),i("v-chip",{staticClass:"mr-1 mt-1 mb-1",attrs:{label:"",outlined:"",link:"",href:"https://www.instagram.com/flo.lu_/"}},[i("v-icon",{attrs:{left:"",size:"20"}},[e._v(" mdi-instagram ")]),e._v(" Instagram ")],1),i("v-chip",{staticClass:"mr-1 mt-1 mb-1",attrs:{label:"",outlined:"",link:"",href:"https://www.linkedin.com/in/florian-lutze-82962a185/"}},[i("v-icon",{attrs:{left:"",size:"20"}},[e._v(" mdi-linkedin ")]),e._v(" LinkedIn ")],1)],1)],1)],1)},c=[],u=i("9a37"),d=i.n(u),h={name:"PersonHeader",data:function(){return{show:!1,avatar:d.a}},mounted:function(){var e=this;setTimeout((function(){return e.show=!0}),400)}},m=h,v=i("2877"),p=i("6544"),f=i.n(p),g=i("8212"),b=i("b0af"),w=i("99d9"),k=i("cc20"),C=i("62ad"),_=i("132d"),x=i("0fd9"),y=i("0789"),j=Object(v["a"])(m,l,c,!1,null,"5fe6d1ea",null),V=j.exports;f()(j,{VAvatar:g["a"],VCard:b["a"],VCardSubtitle:w["a"],VCardTitle:w["c"],VChip:k["a"],VCol:C["a"],VIcon:_["a"],VRow:x["a"],VSlideYReverseTransition:y["e"]});var S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-slide-x-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"px-4",attrs:{"max-width":"725",width:"725"}},[i("v-card-title",[e._v(" Lebenslauf ")]),i("v-card-text",[i("v-timeline",{attrs:{dense:""}},e._l(e.entries,(function(t,n){return i("v-timeline-item",{key:n,staticClass:"my-5",attrs:{small:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[i("span",{staticClass:"headline font-weight-bold",staticStyle:{"word-break":"normal"},domProps:{textContent:e._s(t.date)}})]},proxy:!0}],null,!0)},[i("div",[i("span",{staticClass:"headline font-weight-bold",staticStyle:{"word-break":"normal"},domProps:{textContent:e._s(t.date)}})]),i("div",{staticClass:"py-2"},[i("h2",{staticClass:"headline font-weight-light mb-2",staticStyle:{"word-break":"normal"},domProps:{textContent:e._s(t.title)}}),i("div",{domProps:{textContent:e._s(t.description)}})]),i("div",e._l(t.tags,(function(t){return i("v-chip",{key:t,staticClass:"mr-1 mt-1",attrs:{outlined:"",small:""}},[e._v(e._s(t))])})),1)])})),1)],1)],1)],1)},T=[],P={name:"CvView",data:function(){return{show:!1,entries:[{date:"2021 - Jetzt",title:"Fullstack Software Engineer",description:"Fullstack Software Engineer bei Bosch Connected Industry.",tags:["Angular",".NET Core","C#","Tailwind","Docker","Material Componentes","MongoDb","Microservices","Azure"]},{date:"2017 - 2021",title:"Software Engineering Studium",description:"Studium des Software Engineerings an der Hochschule Heilbronn."},{date:"2016 - 2017",title:"Fachhochschulreife",description:"Einjähriges Berufskolleg an der Christian-Schmidt-Schule in Neckarsulm, zum Erlangen der FH-Reife."},{date:"2013 - 2016",title:"Ausbildung Fachinformatiker",description:"Ausbildung zum Fachinformatiker für Systemintegration bei der Robert Bosch GmbH."},{date:"2007 - 2013",title:"Hölderlin Realschule Lauffen",description:"Erlangen der mittleren Reife an der Hölderlin Realschule in Lauffen am Neckar"}]}},mounted:function(){var e=this;setTimeout((function(){return e.show=!0}),650)}},A=P,F=i("8414"),z=i("1e06"),B=Object(v["a"])(A,S,T,!1,null,"1bf7c5a9",null),E=B.exports;f()(B,{VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VChip:k["a"],VSlideXTransition:y["d"],VTimeline:F["a"],VTimelineItem:z["a"]});var O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-slide-x-reverse-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"px-4",attrs:{"max-width":"725",width:"725"}},[i("v-card-title",[e._v(" Außerschulisches ")]),i("v-card-text",[i("v-timeline",{attrs:{dense:""}},e._l(e.entries,(function(t,n){return i("v-timeline-item",{key:n,attrs:{small:""}},[i("div",[i("span",{staticClass:"headline font-weight-bold",staticStyle:{"word-break":"normal"},domProps:{textContent:e._s(t.date)}})]),i("div",{staticClass:"py-2"},[i("h2",{staticClass:"headline font-weight-light mb-2",staticStyle:{"word-break":"normal"},domProps:{textContent:e._s(t.title)}}),i("div",{domProps:{textContent:e._s(t.description)}}),t.link?i("div",[e._v(" Siehe: "),i("a",{attrs:{href:t.link}},[e._v(e._s(t.link))])]):e._e(),i("div",e._l(t.tags,(function(t){return i("v-chip",{key:t,staticClass:"mr-1 mt-3",attrs:{outlined:"",small:""}},[e._v(e._s(t))])})),1)])])})),1)],1)],1)],1)},H=[],R={name:"CvViewExtra",data:function(){return{show:!1,entries:[{date:"2021",title:"Werkstudent, Concept Hero UG",description:"Werkstudent bei der Concept Hero UG. Entwicklung einer barrierefreien Schulsoftware für SBBZ Schulen",link:"https://eklassenraum.de",tags:["Vue","Vuetify","Node.js","Fullstack","MongoDb"]},{date:"2019 - 2020",title:"Praxissemester bei Airbus",description:"Praxissemester im Rahmen des Studiums bei Airbus Defence and Space in Friedrichshafen am Bodensee. Entwicklung einer Schnittstelle zur Steuerung von Drohnen.",tags:["Android","Java","React","Microsoervices"]},{date:"2018",title:"Werkstudent, Bosch Engineering GmbH",description:"Werkstudent bei der Bosch Engineering GmbH und zuständig für die Entwicklung von Tools und Skripten.",tags:["C#","VBA","Java"]},{date:"2017",title:"Teilnahme an Jugend Forscht",description:"Teilnahme am Regionalwettbewerb von Jugend Forscht in Sindelfingen, über die Robert Bosch GmbH.",tags:["Java","Raspberry Pi"]},{date:"2015",title:"Auslandseinsatz in Kanada",description:"Auslandsaufenthalt im Rahmen der Ausbildung bei Bosch an einem Standort in Welland, Ontario.",tags:["Automation Scripts","C#","Support"]}]}},mounted:function(){var e=this;setTimeout((function(){return e.show=!0}),700)}},D=R,M=Object(v["a"])(D,O,H,!1,null,"030c227c",null),L=M.exports;f()(M,{VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VChip:k["a"],VSlideXReverseTransition:y["c"],VTimeline:F["a"],VTimelineItem:z["a"]});var I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"px-4",attrs:{"max-width":"725",width:"725"}},[i("v-card-title",[e._v(" Private Projekte ")]),i("v-card-text",e._l(e.projects,(function(t,n){return i("div",{key:n},[i("single-project",{class:n<e.projects.length-1?"mb-8":"",attrs:{project:t}}),n<e.projects.length-1?i("v-divider",{staticClass:"mb-8"}):e._e()],1)})),0)],1)},N=[],J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",{staticClass:"headline font-weight-light"},[e._v(" "+e._s(e.project.title)+" ")]),i("div",{staticClass:"mt-4"},[e._v(" "+e._s(e.project.subtitle)+" ")]),i("div",{staticClass:"mt-4"},[e.project.imgs?i("v-carousel",{staticStyle:{"min-height":"400px"},attrs:{continuous:!0,cycle:!0,"show-arrows":!0,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",height:"auto"}},e._l(e.project.imgs,(function(e,t){return i("v-carousel-item",{key:t},[i("div",{staticClass:"d-flex justify-center"},[i("img",{staticStyle:{"max-width":"100%","max-height":"500px"},attrs:{height:"auto",width:"auto",src:e}})])])})),1):e._e(),e.project.info?i("div",{staticClass:"mt-2"},[e._v(" "+e._s(e.project.info)+" ")]):e._e(),e.project.link?i("div",[i("a",{attrs:{href:e.project.link}},[e._v(e._s(e.project.linkText))])]):e._e(),i("div",e._l(e.project.tags,(function(t){return i("v-chip",{key:t,staticClass:"mr-1 mt-3",attrs:{outlined:"",small:""}},[e._v(e._s(t))])})),1)],1)])},$=[],G={name:"SingleProject",props:{project:{required:!1},tags:{required:!1,default:[]}}},W=G,K=i("5e66"),Y=i("3e35"),q=Object(v["a"])(W,J,$,!1,null,"9f5d52f4",null),U=q.exports;f()(q,{VCarousel:K["a"],VCarouselItem:Y["a"],VChip:k["a"]});var Q=i("62b1"),X=i.n(Q),Z=i("e975"),ee=i.n(Z),te=i("456e"),ie=i.n(te),ne=i("51b8"),re=i.n(ne),ae=i("9876"),se=i.n(ae),oe=i("3d7a"),le=i.n(oe),ce=i("9267"),ue=i.n(ce),de={name:"ProjectsView",components:{SingleProject:U},data:function(){return{hotspot1:X.a,hotspot2:ee.a,hotspot3:ie.a,tv1:re.a,tv2:se.a,tv3:le.a,tv4:ue.a,show:!1,projects:[{title:"Hotspot Or Not?",subtitle:"Letzten Jahres stieß ich auf Googles Cross-Platform App-Framework namens Flutter.\n              Da mir das Framework sehr gut gefiel und ich damit sehr schnell zurecht kam, begann ich\n              neben dem Studium Apps auf Fiverr zu entwickeln. Hierbei ergab sich unter anderem dieses Projekt:",imgs:[X.a,ee.a,ie.a],info:"Die App nutzte die öffentliche API des RKIs, zur Emittlung des Inzidenzwertes. Leider dürfen Privatpersonen keine Corona bezogene Apps in den Appstores veröffentlichen, weshalb es die App nie so weit geschafft hat. Allerdings war es möglich die App als Webseite zu veröffentlichen.",linkText:"Hier ist die App als Webseite",link:"https://hotspot-on.de/",tags:["Flutter","Dart","Android","iOS","REST","API","Firebase"]},{title:"Teilnehmerverwaltung",subtitle:"Für meinen Vater entwickelte ich eine Webseite, die er geschäftlich benötigte. Hierfür verwendete ich das React-Framework in Kombination mit dem CSS-Framework Bulma. Das Backend wurde in PHP in Kombination mit einer MySQL-Datenbank implementiert.",imgs:[re.a,se.a,le.a,ue.a],info:"Da es sich hierbei um ein vertrauliches Projekt handelt ist dies nicht öffentlich einsehbar.",linkText:"",link:"",tags:["React","Bulma","PHP","Auth","Fullstack"]}]}},mounted:function(){var e=this;setTimeout((function(){return e.show=!0}),800)}},he=de,me=i("ce7e"),ve=Object(v["a"])(he,I,N,!1,null,"777f53ce",null),pe=ve.exports;f()(ve,{VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VDivider:me["a"]});var fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"px-4",attrs:{"max-width":"725",width:"725"}},[i("v-card-title",[e._v(" Nebenberuflich ")]),i("v-card-text",e._l(e.projects,(function(t,n){return i("div",{key:n},[i("single-project",{class:n<e.projects.length-1?"mb-8":"",attrs:{project:t}}),n<e.projects.length-1?i("v-divider",{staticClass:"mb-8"}):e._e()],1)})),0)],1)},ge=[],be=i("d0d4"),we=i.n(be),ke=i("4661"),Ce=i.n(ke),_e={name:"BookilyView",components:{SingleProject:U},data:function(){return{BookilyAll:we.a,BookilyBooking:Ce.a,show:!1,projects:[{title:"Bookily - Online Terminbuchungsplattform für Friseure",subtitle:"Da ich es immer sehr lästig finde Friseurtermine per Telefon auszumachen, habe ich Bookily gegründet und meinen Friseur erfolgreich als ersten Kunden gewinnen können. Bookily ermöglicht Salons die Terminbuchung zu digitalisieren und 24/7 buchbar zu sein.",imgs:[we.a,Ce.a],info:"Bookily ist ein privates Projekt, das ich nebenberuflich betreibe und nun seit 2023 verfügbar ist.",linkText:"Hier geht's zu Bookily",link:"https://bookily.de",tags:["Vue","Laravel","PHP","Docker","Redis","MySql","Queues","Fullstack"]}]}},mounted:function(){var e=this;setTimeout((function(){return e.show=!0}),800)}},xe=_e,ye=Object(v["a"])(xe,fe,ge,!1,null,"d6429472",null),je=ye.exports;f()(ye,{VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VDivider:me["a"]});var Ve={name:"LandingView",components:{BookilyView:je,ProjectsView:pe,CvViewExtra:L,CvView:E,PersonHeader:V},mounted:function(){var e=this;setTimeout((function(){return e.visible=!0}),900)},data:function(){return{visible:!1}}},Se=Ve,Te=i("a523"),Pe=i("553a"),Ae=Object(v["a"])(Se,s,o,!1,null,"8c479654",null),Fe=Ae.exports;f()(Ae,{VCol:C["a"],VContainer:Te["a"],VFooter:Pe["a"],VRow:x["a"],VSlideYReverseTransition:y["e"]});var ze={name:"App",components:{LandingView:Fe},mounted:function(){this.$vuetify.theme.dark=this.dark},data:function(){return{dark:!0}}},Be=ze,Ee=i("7496"),Oe=i("f6c4"),He=Object(v["a"])(Be,r,a,!1,null,null,null),Re=He.exports;f()(He,{VApp:Ee["a"],VMain:Oe["a"]});var De=i("f309");n["a"].use(De["a"]);var Me=new De["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Me,render:function(e){return e(Re)}}).$mount("#app")},"62b1":function(e,t,i){e.exports=i.p+"img/hotspot1.f13f4278.png"},9267:function(e,t,i){e.exports=i.p+"img/tv4.32fea9ee.png"},9876:function(e,t,i){e.exports=i.p+"img/tv2.d06e6563.png"},"9a37":function(e,t,i){e.exports=i.p+"img/img.53b44de2.jpg"},d0d4:function(e,t,i){e.exports=i.p+"img/BookilyAll.3bcf68a4.png"},e975:function(e,t,i){e.exports=i.p+"img/hotspot2.d7e6a7c9.png"}});
//# sourceMappingURL=app.efff53d2.js.map