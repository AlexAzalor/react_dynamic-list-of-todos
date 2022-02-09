(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var n=r(9),s=r.n(n),c=r(4),a=r(5),o=r(7),i=r(6),u=r(3),l=r.n(u),d=r(2),h=r(1),p=r.n(h),j=r(10),b=r.n(j),f=(r(16),"https://mate.academy/students-api");function m(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/todos"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var O=function(){var e=Object(d.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/users/").concat(t));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=r(0),_=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],query:""},e.handleButtonFilter=function(t){e.setState({query:t.target.value})},e.getFiltredTodos=function(e,t){return e.filter((function(e){return e.completed===t}))},e.getFilteredData=function(){var t=e.state,r=t.todos,n=t.query,s=e.props.selectorStatus;if(n){var c=r.filter((function(e){var t=n.toLowerCase();return e.title.toLowerCase().includes(t)}));return 1===s?e.getFiltredTodos(c,!1):2===s?e.getFiltredTodos(c,!0):c}switch(s){case 1:return e.getFiltredTodos(r,!1);case 2:return e.getFiltredTodos(r,!0);default:return r}},e.handleRandomizer=function(){var t=e.state.todos.sort((function(){return Math.random()-.5}));e.setState({todos:t})},e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.query,t=this.props,r=t.handleSelectorStatus,n=t.selectedUserId,s=t.selectorStatus,c=this.getFilteredData();return Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",value:e,onChange:this.handleButtonFilter}),Object(x.jsxs)("select",{className:"select",value:s,onChange:r,children:[Object(x.jsx)("option",{value:"0",children:"all"}),Object(x.jsx)("option",{className:"select select--active",value:"1",children:"active"}),Object(x.jsx)("option",{className:"select select--completed",value:"2",children:"completed"})]}),Object(x.jsx)("button",{type:"button",className:" TodoList__user-button TodoList__user-button--selected button ",onClick:this.handleRandomizer,children:"Randomize"}),Object(x.jsx)("h2",{children:"Todos:"}),Object(x.jsx)("div",{className:"TodoList__list-container",children:Object(x.jsx)("ul",{className:"TodoList__list",children:c.map((function(e){return Object(x.jsxs)("li",{className:b()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(x.jsxs)("label",{htmlFor:"Todo-".concat(e.id),children:[Object(x.jsx)("input",{id:"Todo-".concat(e.id),type:"checkbox",checked:e.completed,readOnly:!0}),Object(x.jsx)("p",{children:e.title})]}),Object(x.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return n(e.userId)},children:e.userId})]},e.id)}))})})]})}}]),r}(l.a.Component),y=(r(18),function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={user:{id:0,name:"",email:"",phone:""},error:!1},e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.selectedUserId!==this.props.selectedUserId&&this.loadData();case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(this.props.selectedUserId);case 3:t=e.sent,this.setState({user:t,error:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,r=e.error,n=this.props,s=n.selectedUserId,c=n.getSelectedUserId;return Object(x.jsxs)("div",{className:"CurrentUser",children:[r?Object(x.jsx)("p",{children:"User not found..."}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"CurrentUser__title",children:Object(x.jsx)("span",{children:"Selected user: ".concat(s)})}),Object(x.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(x.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(x.jsx)("p",{className:"CurrentUser__phone",children:t.phone})]}),Object(x.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return c(0)},children:"Clear"})]})}}]),r}(l.a.Component)),S=(r(19),r(20),function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedUserId:0,selectorStatus:0},e.getSelectedUserId=function(t){e.setState({selectedUserId:t})},e.handleSelectorStatus=function(t){e.setState({selectorStatus:+t.target.value})},e}return Object(a.a)(r,[{key:"render",value:function(){var e=this.state,t=e.selectedUserId,r=e.selectorStatus;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(_,{selectedUserId:this.getSelectedUserId,handleSelectorStatus:this.handleSelectorStatus,selectorStatus:r})}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:t?Object(x.jsx)(y,{selectedUserId:t,getSelectedUserId:this.getSelectedUserId}):"No user selected"})})]})}}]),r}(l.a.Component)),k=S;s.a.render(Object(x.jsx)(k,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1c5cf25f.chunk.js.map