(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=(n(16),n(5)),s=n(6),l=n(8),u=n(7),d=n(2),m=n(9),p=n(1),h=n.n(p),y=(n(17),n(18)),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).wordRenderer=function(){n.gens=y({exactly:n.totalWordsPerMinute,min:1,max:9,join:" "}),n.setState({generator:n.gens})},n.wordRenderer=n.wordRenderer.bind(Object(d.a)(n)),n.cnt=1,n.type="",n.gens="",n.totalWordsPerMinute=400,n.gens=y({exactly:n.totalWordsPerMinute,min:1,max:9,join:" "}),n.state={generator:n.gens},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){h()("#typing-box input").keypress(function(){setTimeout(function(){this.type=h()("#typing-box input").val()},70)})}},{key:"render",value:function(){return h()(document).ready(function(){h()("#typing-box input").keypress(function(e){setTimeout(function(){this.type=h()("#typing-box input").val(),32!==e.which&&32!==e.keyCode||""!==this.type&&this.cnt++},70),h()(".to-type p").length<14&&(32!==e.which&&32!==e.keyCode||(this.gens=y({exactly:this.totalWordsPerMinute,min:1,max:9,join:" "})))})}),o.a.createElement("div",{className:"container"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"whole-bag-of-jellybean"},o.a.createElement("div",{className:"options"},"Options"),o.a.createElement("div",{className:"typing-container"},o.a.createElement("div",{className:"to-type"},o.a.createElement("span",null,this.state.generator))),o.a.createElement("div",{id:"typing-box"},o.a.createElement("input",{type:"text"}),"\xa0",o.a.createElement("button",{id:"redo",onClick:this.wordRenderer},"\u21bb")))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.5374a9ec.chunk.js.map