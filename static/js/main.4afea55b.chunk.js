(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{104:function(t,e,a){t.exports={card:"Card_card__lnhH7"}},243:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(92),s=a.n(c),o=a(15),i=a.n(o),u=a(19),d=a(2),l=a(3),p=a(7),f=a(6),h=a(105),j=a(95),b=a.n(j),v=a(5),m=function(t){var e=t.data,a=e.confirmed,n=e.deaths,r=t.country,c=a?Object(v.jsx)(h.a,{data:{labels:["Totals"],datasets:[{label:"Infected",backgroundColor:["rgba(0, 0, 255, 0.5)"],data:[a.value]},{label:"Deaths",backgroundColor:["rgba(255, 0, 0, 0.5)"],data:[n.value]}]},options:{legend:{display:!0},title:{display:!0,text:"Current state in ".concat(r)}}}):null;return Object(v.jsx)("div",{className:b.a.container,children:c})},x=a(43),O=a(265),y=a(264),_=a(60),g=a.n(_),C="https://covid19.mathdro.id/api",w=function(){var t=Object(u.a)(i.a.mark((function t(e){var a,n,r,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=C,e&&(a="".concat(C,"/countries/").concat(e)),t.prev=2,t.next=5,g.a.get(a);case 5:return n=t.sent,r=n.data,c=r.confirmed,s=r.deaths,o=r.lastUpdate,t.abrupt("return",{confirmed:c,deaths:s,lastUpdate:o});case 13:return t.prev=13,t.t0=t.catch(2),t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat(C,"/countries"));case 3:return e=t.sent,a=e.data.countries,t.abrupt("return",a.map((function(t){return t.name})));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),N=a(96),S=a.n(N),D=function(t){var e=t.handleCountryChange,a=Object(n.useState)([]),r=Object(x.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,k();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(v.jsx)(O.a,{className:S.a.formControl,children:Object(v.jsxs)(y.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(v.jsx)("option",{value:"",children:"World"}),c.map((function(t,e){return Object(v.jsx)("option",{value:t,children:t},e)}))]})})},U=a(261),A=a(266),I=a(262),T=a(263),V=a(102),B=a.n(V),E=a(103),J=a.n(E),K=a(104),L=a.n(K),M=function(t){var e=t.className,a=t.cardTitle,n=t.value,r=t.lastUpdate,c=t.cardSubtitle;return Object(v.jsx)(U.a,{item:!0,xs:12,md:6,component:A.a,className:J()(L.a.card,e),children:Object(v.jsxs)(I.a,{children:[Object(v.jsx)(T.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(v.jsx)(T.a,{variant:"h5",component:"h2",children:Object(v.jsx)(B.a,{start:0,end:n,duration:2.75,separator:","})}),Object(v.jsx)(T.a,{color:"textSecondary",children:new Date(r).toDateString()}),Object(v.jsx)(T.a,{variant:"body2",component:"p",children:c})]})})},R=a(44),q=a.n(R),H=function(t){var e=t.data,a=e.confirmed,n=e.deaths,r=e.lastUpdate;return a?Object(v.jsx)("div",{className:q.a.container,children:Object(v.jsxs)(U.a,{container:!0,spacing:6,justifyContent:"center",children:[Object(v.jsx)(M,{className:q.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:r,cardSubtitle:"Number of active cases."}),Object(v.jsx)(M,{className:q.a.deaths,cardTitle:"Deaths",value:n.value,lastUpdate:r,cardSubtitle:"Number of deaths."})]})}):"Loading..."},P=a(62),W=a.n(P),X=a.p+"static/media/image.9e5d4fc7.png",Z=function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},country:""},t.handleCountryChange=function(){var e=Object(u.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(a);case 2:n=e.sent,t.setState({data:n,country:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,this.setState({data:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.data,a=t.country;return Object(v.jsxs)("div",{className:W.a.container,children:[Object(v.jsx)("img",{className:W.a.image,src:X,alt:"COVID-19"}),Object(v.jsx)(H,{data:e}),Object(v.jsx)(D,{handleCountryChange:this.handleCountryChange}),Object(v.jsx)(m,{data:e,country:a})]})}}]),a}(r.a.Component);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Z,{})}),document.getElementById("root"))},44:function(t,e,a){t.exports={container:"Cards_container__1ZyVL",infected:"Cards_infected__2yj0f",recovered:"Cards_recovered__hS8Ad",deaths:"Cards_deaths__1D0fb"}},62:function(t,e,a){t.exports={container:"App_container__wAsdU",image:"App_image__18jqX"}},95:function(t,e,a){t.exports={container:"Chart_container__Kly9w"}},96:function(t,e,a){t.exports={formControl:"CountryPicker_formControl__2RRwK"}}},[[243,1,2]]]);
//# sourceMappingURL=main.4afea55b.chunk.js.map