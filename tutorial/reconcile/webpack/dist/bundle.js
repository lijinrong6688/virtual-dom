!function(n){var e={};function t(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return n[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)t.d(o,c,function(e){return n[e]}.bind(null,c));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){function o(n,e,t){if(null===e){const e=r(t);return e.publicInstance&&e.publicInstance.componentWillMount&&e.publicInstance.componentWillMount(),n.appendChild(e.dom),e.publicInstance&&e.publicInstance.componentDidMount&&e.publicInstance.componentDidMount(),e}if(null===t)return e.publicInstance&&e.publicInstance.componentWillUnmount&&e.publicInstance.componentWillUnmount(),n.removeChild(e.dom),null;if(e.element.type!==t.type){const o=r(t);return o.publicInstance&&o.publicInstance.componentDidMount&&o.publicInstance.componentDidMount(),n.replaceChild(o.dom,e.dom),o}if("string"==typeof t.type)return e.childInstances=function(n,e){const{dom:t,childInstances:c}=n,l=e.props.children||[],i=Math.max(c.length,l.length),s=[];for(let n=0;n<i;n++)s[n]=o(t,c[n],l[n]);return s.filter(n=>null!==n)}(e,t),e.element=t,e;{if(e.publicInstance&&e.publicInstance.shouldcomponentUpdate&&!e.publicInstance.shouldcomponentUpdate())return;e.publicInstance&&e.publicInstance.componentWillUpdate&&e.publicInstance.componentWillUpdate(),e.publicInstance.props=t.props;const c=e.publicInstance.render(),l=o(n,e.childInstance,c);return e.publicInstance&&e.publicInstance.componentDidUpdate&&e.publicInstance.componentDidUpdate(),e.dom=l.dom,e.childInstance=l,e.element=t,e}}let c=null;class l{constructor(n){this.props=n,this.state=this.state||{}}setState(n){this.state=Object.assign({},this.state,n);const e=this.__internalInstance.dom.parentNode,t=this.__internalInstance.element;o(e,this.__internalInstance,t)}}l.prototype.isReactComponent={};let{createElement:i,createTextElement:s}=t(1),{instantiate:r}=t(2);!function(n,e){const t=o(e,c,n);c=t}(i("div",null,[i(class extends l{constructor(n){super(n),this.state={num:"123"}}like(){console.log(1)}render(){return i("div",null,this.state.num)}componentWillMount(){console.log("componentWillMount"),setTimeout(()=>{this.setState({num:Math.random()})},1e3)}componentWillUpdate(){console.log("componentWillUpdate")}},null)]),document.querySelector("#root"))},function(n,e){function t(n,e,...t){return(e=Object.assign({},e)).children=[].concat(...t).filter(n=>null!=n&&!1!==n).map(n=>n instanceof Object?n:o(n)),{type:n,props:e}}function o(n){return t("TEXT_ELEMENT",{nodeValue:n})}n.exports={createElement:t,createTextElement:o}},function(n,e){n.exports={instantiate:function n(e){const{type:t,props:o={}}=e,c="string"==typeof t,l=!(!t.prototype||!t.prototype.isReactComponent);if(c){console.log(e);const c="TEXT_ELEMENT"===t;console.log(c);const l=c?document.createTextNode(""):document.createElement(t);console.log(l);const i=(o.children||[]).map(n);console.log(i);const s=i.map(n=>n.dom);return console.log(s),s.forEach(n=>l.appendChild(n)),{element:e,dom:l,childInstances:i}}if(l){const t={},o=function(n,e){const{type:t,props:o}=n;console.log(n);const c=new t(o);return c.__internalInstance=e,c}(e,t);console.log(o);const c=o.render(),l=n(c);return console.log(c),Object.assign(t,{dom:l.dom,element:e,childInstance:l,publicInstance:o}),t}{const o=n(t(e.props));return{dom:o.dom,element:e,childInstance:o}}}}}]);