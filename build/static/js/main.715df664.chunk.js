(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(4),u=a(5),i=a(6),s=a(9),d=a(8),m=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good:",t),r.a.createElement("p",null,"Neutral:",a),r.a.createElement("p",null,"Bad:",n),r.a.createElement("p",null,"Total:",c),r.a.createElement("p",null,"Positive feedback:",l," %"))},b=a(7),v=a.n(b),g=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("button",{key:v.a.generate(),type:"button",name:e,onClick:a},e)})))},p=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),a)},f=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=100*e.state.good/t;return Math.round(a)},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),l=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Please leave feedback"},r.a.createElement(g,{options:o,onLeaveFeedback:this.onLeaveFeedback})),0===c?r.a.createElement(f,{message:"No feedback given"}):r.a.createElement(p,{title:"Statistics"},r.a.createElement(m,{good:t,neutral:a,bad:n,total:c,positivePercentage:l})))}}]),a}(n.Component);l.a.render(r.a.createElement(k,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.715df664.chunk.js.map