(this.webpackJsonpthebookexchanger=this.webpackJsonpthebookexchanger||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo_emptybackground.b92a231a.png"},34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),s=(a(39),a(30)),o=(a(12),a(14)),i=a.n(o),u=(a(40),a(2)),m=a(3),d=a(4),v=a(5),h=(a(41),a(42),a(25)),b=(a(43),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",newpassword:"",confirmpassword:""},e.handleInputChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){var a=e.state,n=a.newpassword;n!==a.confirmpassword?(t.preventDefault(),alert("Passwords don't match"),e.setState({confirmpassword:""}),e.render()):""===n&&(t.preventDefault(),alert("Passwords can't be blank"),e.render())},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{action:"/register",method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",class:"form-control",name:"username",onChange:this.handleInputChange,value:this.state.username,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",class:"form-control",name:"email",onChange:this.handleInputChange,value:this.state.email,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",class:"form-control",name:"newpassword",onChange:this.handleInputChange,value:this.state.newpassword,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm password:"),r.a.createElement("input",{type:"password",class:"form-control",name:"confirmpassword",onChange:this.handleInputChange,value:this.state.confirmpassword,required:!0})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{id:"loginbtn",onClick:this.handleSubmit,type:"submit",class:"btn btn-primary btn-md btn-block"},"Register"))))}}]),a}(r.a.Component)),p=(a(44),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"/login",method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",class:"form-control",name:"username",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",class:"form-control",name:"password",required:!0})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{id:"loginbtn",onSubmit:this.logInHandleClick,type:"submit",class:"btn btn-primary btn-md btn-block"},"Play")))))}}]),a}(r.a.Component)),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).logInHandleClick=function(){n.setState({logInvShowalue:!n.state.logInShowvalue})},n.signUpHandleClick=function(){n.setState({signUpShowvalue:!n.state.signUpShowvalue,logInShowvalue:!n.state.logInShowvalue})},n.state={logInShowvalue:!0,signUpShowvalue:!1,showWishList:!1},n.signupForm=r.a.createElement(b,null),n.logInform=r.a.createElement(p,null),n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Btn-header"},r.a.createElement("div",null,this.state.logInShowvalue?this.logInform:""),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{id:"signupbtn",onClick:this.signUpHandleClick,class:"btn btn-secondary btn-md btn-block"},this.state.signUpShowvalue?"Back":"Sign Up"))),r.a.createElement("div",null,this.state.signUpShowvalue?this.signupForm:""))}}]),a}(r.a.Component),g=(a(45),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(u.a)(this,a),t.call(this)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("img",{id:"toplogo",src:i.a,alt:"Main logo"}),r.a.createElement("a",{class:"navbar-brand",href:"/"},"The Social Distancer"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse w-100 order-3",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item"},this.props.loggedin?r.a.createElement("a",{class:"nav-link disabled"},this.props.nameuser):r.a.createElement("a",{class:"nav-link",href:"/guest"},this.props.nameuser)),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"/"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link  active",href:"/logout"},this.props.logname))))))}}]),a}(r.a.Component)),E=(a(46),a(19)),w=a(56),y=a(55),k=a(1),j=a(53),O=a(54),S=a(13),N=a(9),C=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).ref=r.a.createRef(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.updateAxis()}},{key:"renderAxis",value:function(){var e,t=this.props,a=t.scale,n=t.orient,r=t.ticks,l=this.ref.current;"bottom"===n&&(e=Object(S.a)(a).ticks(r)),"left"===n&&(e=Object(S.b)(a).ticks(r)),Object(j.a)(l).call(e)}},{key:"updateAxis",value:function(){var e=this.props,t=e.scale,a=e.orient,n=e.ticks,r=Object(N.a)().duration(1e3);if("left"===a){var l=Object(S.b)(t).ticks(n);Object(O.a)(".".concat(a)).transition(r).call(l)}if("bottom"===a){var c=Object(S.a)(t).ticks(n);Object(O.a)(".".concat(a)).transition(r).call(c)}}},{key:"render",value:function(){var e=this.props,t=e.orient,a=e.transform;return r.a.createElement("g",{ref:this.ref,transform:a,className:"".concat(t," axis")})}}]),a}(r.a.Component),x=function(e){var t=e.xScale,a=e.yScale,n=e.height,l={scale:t,orient:"bottom",transform:"translate(0, ".concat(n,")")},c={scale:a,orient:"left",transform:"translate(0, 0)",ticks:6};return r.a.createElement("g",{className:"axis-group"},r.a.createElement(C,l),r.a.createElement(C,c))},I=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).ref=r.a.createRef(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.ref.current,t=this.props,a=(t.xScale,t.yScale,t.data),n=t.lineGenerator,r=a.map((function(e){return{name:e.name,value:0}}));Object(j.a)(e).append("path").datum(r).attr("id","line").attr("stroke","black").attr("stroke-width",2).attr("fill","none").attr("d",n),this.updateChart()}},{key:"componentDidUpdate",value:function(){this.updateChart()}},{key:"updateChart",value:function(){var e=this.props,t=e.lineGenerator,a=(e.xScale,e.yScale,e.data),n=Object(N.a)().duration(1e3),r=Object(j.a)("#line");Object(O.a)(".circle");r.datum(a).transition(n).attr("d",t)}},{key:"render",value:function(){return r.a.createElement("g",{className:"line-group",ref:this.ref})}}]),a}(r.a.Component),U=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this)).updateWidth=function(){n.setState({windowwidth:window.innerWidth,windowheight:window.innerHeight})},n.componentDidMount=function(){window.addEventListener("resize",n.updateWidth)},n.componentWillReceiveProps=function(e){n.newData(e)},n.newData=function(e){!0!==e.resetState?n.setState({data:n.state.data.concat([{name:e.name,value:e.value}])}):n.setState({data:[{name:0,value:0}]})},n.state={data:[{name:0,value:0}],windowwidth:window.innerWidth,windowheight:window.innerHeight},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.data,t=this.state.windowwidth/1.5,a={top:20,right:.06*this.state.windowwidth,bottom:20,left:.06*this.state.windowwidth},n=t-a.left-a.right,l=this.state.windowheight/2-a.top-a.bottom,c=Object(N.a)().duration(1e3),s=Object(E.a)().domain(Object(k.d)(e,(function(e){return e.name}))).range([0,n]).nice(),o=Object(E.a)().domain(Object(k.d)(e,(function(e){return e.value}))).range([l,0]).nice(),i=Object(w.a)().x((function(e){return s(e.name)})).y((function(e){return o(e.value)})).curve(y.a);return r.a.createElement("div",null,r.a.createElement("svg",{className:"lineChartSvg",width:n+a.left+a.right,height:l+a.top+a.bottom},r.a.createElement("g",{transform:"translate(".concat(a.left,", ").concat(a.top,")")},r.a.createElement(x,{xScale:s,yScale:o,height:l,ticks:5,t:c}),r.a.createElement(I,{data:e,xScale:s,yScale:o,lineGenerator:i,width:n,height:l}))))}}]),a}(r.a.Component),D=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this)).componentWillUnmount=function(){clearInterval(n.interval)},n.tick=function(){n.setState({datavalue:Number((1+n.state.datavalue+.3*n.state.datavalue).toFixed(0))}),n.state.datavalue>Number(7e9)&&(clearInterval(n.interval),n.setState({gameEnd:!0})),n.state.datadays<360?n.setState({datadays:n.state.datadays+1}):(clearInterval(n.interval),n.setState({datadays:0}))},n.startCount=function(){!0!==n.state.countOn&&!0!==n.state.gameEnd&&(n.setState({countOn:!0,resetGraph:!1,datadays:n.state.datadays}),n.interval=setInterval((function(){return n.tick()}),1e3))},n.stopCount=function(){clearInterval(n.interval),n.setState({countOn:!1})},n.resetCount=function(){clearInterval(n.interval),n.setState({datadays:0,datavalue:0,resetGraph:!0,countOn:!1,gameEnd:!1})},n.washHands=function(){n.state.datavalue-3>0?n.setState({datavalue:n.state.datavalue-3}):n.setState({datavalue:0})},n.stayHome=function(){n.state.datavalue-5>0?n.setState({datavalue:n.state.datavalue-5}):n.setState({datavalue:0})},n.wearMask=function(){n.state.datavalue-2>0?n.setState({datavalue:n.state.datavalue-2}):n.setState({datavalue:0})},n.vaccine=function(){n.state.datavalue-100>0?n.setState({datavalue:n.state.datavalue-100}):n.setState({datavalue:0})},n.state={datadays:0,datavalue:0,countOn:!1,resetGraph:!1,gameEnd:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"gamepanel"},r.a.createElement("div",{id:"#linechart",className:"row justify-content-center"},r.a.createElement(U,{name:this.state.datadays,value:this.state.datavalue,resetState:this.state.resetGraph})),r.a.createElement("div",{id:"#datainfo",className:"row justify-content-center"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-5 text-center"},r.a.createElement("label",null,"Daily new COVID-19 cases :  "),r.a.createElement("output",{type:"number"},this.state.datavalue)),r.a.createElement("div",{className:"col-5 text-center"},r.a.createElement("label",null,"Days since start of epidemic :  "),r.a.createElement("output",{type:"number"},this.state.datadays)),r.a.createElement("div",{className:"col-1"})),r.a.createElement("div",{id:"#startstoprow",className:"row justify-content-center"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.startCount,className:"btn btn-secondary btn-md btn-block"},"Start")),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.stopCount,className:"btn btn-danger btn-md btn-block"},"Stop")),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.resetCount,className:"btn btn-primary btn-md btn-block"},"Reset"))),r.a.createElement("div",{id:"#datainfo",className:"row justify-content-center"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-5 text-center"},r.a.createElement("label",null,"Public Health Actions :")),r.a.createElement("div",{className:"col-5 text-center"}),r.a.createElement("div",{className:"col-1"})),r.a.createElement("div",{id:"#actionsrow",className:"row justify-content-center"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.stayHome,className:"btn btn-warning btn-md btn-block"},"Stay home")),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.wearMask,className:"btn btn-warning btn-md btn-block"},"Wear mask")),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.washHands,className:"btn btn-warning btn-md btn-block"},"Wash hands")),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.vaccine,className:"btn btn-info btn-md btn-block"},"Vaccine"))))}}]),a}(r.a.Component);a(47);var W=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){console.log("getUser"),fetch("/getUser").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Top-header"},a?r.a.createElement(g,{logname:"Log out",nameuser:"Welcome, ".concat(a.username),loggedin:"true"}):r.a.createElement(g,{logname:"Log in",nameuser:"Play"})),r.a.createElement("body",null,r.a.createElement("div",{className:"container-fluid"},a?r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(D,null)):r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Welcome to The Social Distancer!"),r.a.createElement("h2",null,"A game where you make a difference and save lives"))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(f,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9e1c1546.chunk.js.map