(self.webpackChunksdk_web=self.webpackChunksdk_web||[]).push([["4273"],{2128(e,t,r){"use strict";r.d(t,{A:()=>U});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),o=Math.abs,i=String.fromCharCode,a=Object.assign;function s(e,t,r){return e.replace(t,r)}function c(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function d(e,t,r){return e.slice(t,r)}function u(e){return e.length}function f(e,t){return t.push(e),e}var p=1,h=1,g=0,m=0,y=0,v="";function b(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:p,column:h,length:a,return:""}}function w(e,t){return a(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return y=m<g?l(v,m++):0,h++,10===y&&(h=1,p++),y}function _(){return l(v,m)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C(e){return p=h=1,g=u(v=e),m=0,[]}function A(e){var t,r;return(t=m-1,r=function e(t){for(;x();)switch(y){case t:return m;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:x()}return m}(91===e?e+2:40===e?e+1:e),d(v,t,r)).trim()}var k="-ms-",$="-moz-",O="-webkit-",S="comm",F="rule",R="decl",D="@keyframes";function N(e,t){for(var r="",n=e.length,o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function P(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case R:return e.return=e.return||e.value;case S:return"";case D:return e.return=e.value+"{"+N(e.children,n)+"}";case F:e.value=e.props.join(",")}return u(r=N(e.children,n))?e.return=e.value+"{"+r+"}":""}function T(e,t,r,n,i,a,c,l,u,f,p){for(var h=i-1,g=0===i?a:[""],m=g.length,y=0,v=0,w=0;y<n;++y)for(var x=0,_=d(e,h+1,h=o(v=c[y])),E=e;x<m;++x)(E=(v>0?g[x]+" "+_:s(_,/&\f/g,g[x])).trim())&&(u[w++]=E);return b(e,t,r,0===i?F:l,u,f,p)}function j(e,t,r,n){return b(e,t,r,R,d(e,0,n),d(e,n+1,-1),n)}var I=function(e,t,r){for(var n=0,o=0;n=o,o=_(),38===n&&12===o&&(t[r]=1),!E(o);)x();return d(v,e,m)},L=function(e,t){var r=-1,n=44;do switch(E(n)){case 0:38===n&&12===_()&&(t[r]=1),e[r]+=I(m-1,t,r);break;case 2:e[r]+=A(n);break;case 4:if(44===n){e[++r]=58===_()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}while(n=x());return e},z=function(e,t){var r;return r=L(C(e),t),v="",r},W=new WeakMap,M=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||W.get(r))&&!n){W.set(e,!0);for(var o=[],i=z(t,o),a=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<a.length;l++,c++)e.props[c]=o[s]?i[s].replace(/&\f/g,a[l]):a[l]+" "+i[s]}}},Y=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case R:e.return=function e(t,r){switch(45^l(t,0)?(((r<<2^l(t,0))<<2^l(t,1))<<2^l(t,2))<<2^l(t,3):0){case 5103:return O+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return O+t+$+t+k+t+t;case 6828:case 4268:return O+t+k+t+t;case 6165:return O+t+k+"flex-"+t+t;case 5187:return O+t+s(t,/(\w+).+(:[^]+)/,O+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return O+t+k+"flex-item-"+s(t,/flex-|-self/,"")+t;case 4675:return O+t+k+"flex-line-pack"+s(t,/align-content|flex-|-self/,"")+t;case 5548:return O+t+k+s(t,"shrink","negative")+t;case 5292:return O+t+k+s(t,"basis","preferred-size")+t;case 6060:return O+"box-"+s(t,"-grow","")+O+t+k+s(t,"grow","positive")+t;case 4554:return O+s(t,/([^-])(transform)/g,"$1"+O+"$2")+t;case 6187:return s(s(s(t,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),t,"")+t;case 5495:case 3959:return s(t,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return s(s(t,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+t+t;case 4095:case 3583:case 4068:case 2532:return s(t,/(.+)-inline(.+)/,O+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(u(t)-1-r>6)switch(l(t,r+1)){case 109:if(45!==l(t,r+4))break;case 102:return s(t,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+$+(108==l(t,r+3)?"$3":"$2-$3"))+t;case 115:return~c(t,"stretch")?e(s(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==l(t,r+1))break;case 6444:switch(l(t,u(t)-3-(~c(t,"!important")&&10))){case 107:return s(t,":",":"+O)+t;case 101:return s(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+O+(45===l(t,14)?"inline-":"")+"box$3$1"+O+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(l(t,r+11)){case 114:return O+t+k+s(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return O+t+k+s(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return O+t+k+s(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return O+t+k+t+t}return t}(e.value,e.length);break;case D:return N([w(e,{value:s(e.value,"@","@"+O)})],n);case F:if(e.length){var o,i;return o=e.props,i=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return N([w(e,{props:[s(t,/:(read-\w+)/,":"+$+"$1")]})],n);case"::placeholder":return N([w(e,{props:[s(t,/:(plac\w+)/,":"+O+"input-$1")]}),w(e,{props:[s(t,/:(plac\w+)/,":"+$+"$1")]}),w(e,{props:[s(t,/:(plac\w+)/,k+"input-$1")]})],n)}return""},o.map(i).join("")}}}],U=function(e){var t,r,o,a,g,w=e.key;if("css"===w){var k=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(k,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var $=e.stylisPlugins||B,O={},F=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+w+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)O[t[r]]=!0;F.push(e)});var R=(r=(t=[M,Y].concat($,[P,(o=function(e){g.insert(e)},function(e){!e.root&&(e=e.return)&&o(e)})])).length,function(e,n,o,i){for(var a="",s=0;s<r;s++)a+=t[s](e,n,o,i)||"";return a}),D=function(e){var t,r;return N((r=function e(t,r,n,o,a,g,w,C,k){for(var $,O=0,F=0,R=w,D=0,N=0,P=0,I=1,L=1,z=1,W=0,M="",Y=a,B=g,U=o,H=M;L;)switch(P=W,W=x()){case 40:if(108!=P&&58==l(H,R-1)){-1!=c(H+=s(A(W),"&","&\f"),"&\f")&&(z=-1);break}case 34:case 39:case 91:H+=A(W);break;case 9:case 10:case 13:case 32:H+=function(e){for(;y=_();)if(y<33)x();else break;return E(e)>2||E(y)>3?"":" "}(P);break;case 92:H+=function(e,t){for(var r;--t&&x()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=m+(t<6&&32==_()&&32==x()),d(v,e,r)}(m-1,7);continue;case 47:switch(_()){case 42:case 47:f(($=function(e,t){for(;x();)if(e+y===57)break;else if(e+y===84&&47===_())break;return"/*"+d(v,t,m-1)+"*"+i(47===e?e:x())}(x(),m),b($,r,n,S,i(y),d($,2,-2),0)),k);break;default:H+="/"}break;case 123*I:C[O++]=u(H)*z;case 125*I:case 59:case 0:switch(W){case 0:case 125:L=0;case 59+F:-1==z&&(H=s(H,/\f/g,"")),N>0&&u(H)-R&&f(N>32?j(H+";",o,n,R-1):j(s(H," ","")+";",o,n,R-2),k);break;case 59:H+=";";default:if(f(U=T(H,r,n,O,F,a,C,M,Y=[],B=[],R),g),123===W)if(0===F)e(H,r,U,U,Y,g,R,C,B);else switch(99===D&&110===l(H,3)?100:D){case 100:case 108:case 109:case 115:e(t,U,U,o&&f(T(t,U,U,0,0,a,C,M,a,Y=[],R),B),a,B,R,C,o?Y:B);break;default:e(H,U,U,U,[""],B,0,C,B)}}O=F=N=0,I=z=1,M=H="",R=w;break;case 58:R=1+u(H),N=P;default:if(I<1){if(123==W)--I;else if(125==W&&0==I++&&125==(y=m>0?l(v,--m):0,h--,10===y&&(h=1,p--),y))continue}switch(H+=i(W),W*I){case 38:z=F>0?1:(H+="\f",-1);break;case 44:C[O++]=(u(H)-1)*z,z=1;break;case 64:45===_()&&(H+=A(x())),D=_(),F=R=u(M=H+=function(e){for(;!E(_());)x();return d(v,e,m)}(m)),W++;break;case 45:45===P&&2==u(H)&&(I=0)}}return g}("",null,null,null,[""],t=C(t=e),0,[0],t),v="",r),R)},I={key:w,sheet:new n({key:w,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:O,registered:{},insert:function(e,t,r,n){g=r,D(e?e+"{"+t.styles+"}":t.styles),n&&(I.inserted[t.name]=!0)}};return I.sheet.hydrate(F),I}},6289(e,t,r){"use strict";function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>n})},2144(e,t,r){"use strict";r.d(t,{E:()=>w,h:()=>m,T:()=>f,a:()=>g,c:()=>v,u:()=>p,w:()=>u});var n=r(6540),o=r(2128),i=r(8168),a=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},s=r(41),c=r(6603),l=r(1287),d=n.createContext("u">typeof HTMLElement?(0,o.A)({key:"css"}):null);d.Provider;var u=function(e){return(0,n.forwardRef)(function(t,r){return e(t,(0,n.useContext)(d),r)})},f=n.createContext({}),p=function(){return n.useContext(f)},h=a(function(e){return a(function(t){return"function"==typeof t?t(e):(0,i.A)({},e,t)})}),g=function(e){var t=n.useContext(f);return e.theme!==t&&(t=h(t)(e.theme)),n.createElement(f.Provider,{value:t},e.children)},m={}.hasOwnProperty,y="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",v=function(e,t){var r={};for(var n in t)m.call(t,n)&&(r[n]=t[n]);return r[y]=e,r},b=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,l.s)(function(){return(0,s.sk)(t,r,n)}),null},w=u(function(e,t,r){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var i=e[y],a=[o],l="";"string"==typeof e.className?l=(0,s.Rk)(t.registered,a,e.className):null!=e.className&&(l=e.className+" ");var d=(0,c.J)(a,void 0,n.useContext(f));l+=t.key+"-"+d.name;var u={};for(var p in e)m.call(e,p)&&"css"!==p&&p!==y&&(u[p]=e[p]);return u.className=l,r&&(u.ref=r),n.createElement(n.Fragment,null,n.createElement(b,{cache:t,serialized:d,isStringTag:"string"==typeof i}),n.createElement(i,u))})},7437(e,t,r){"use strict";r.d(t,{AH:()=>f,i7:()=>p,mL:()=>u});var n,o,i=r(2144),a=r(6540),s=r(41),c=r(1287),l=r(6603);r(2128),r(4146);var d=function(e,t){var r=arguments;if(null==t||!i.h.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,o=Array(n);o[0]=i.E,o[1]=(0,i.c)(e,t);for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)};n=d||(d={}),o||(o=n.JSX||(n.JSX={}));var u=(0,i.w)(function(e,t){var r=e.styles,n=(0,l.J)([r],void 0,a.useContext(i.T)),o=a.useRef();return(0,c.i)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(i=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),o.current=[r,i],function(){r.flush()}},[t]),(0,c.i)(function(){var e=o.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==n.next&&(0,s.sk)(t,n.next,!0),r.tags.length){var i=r.tags[r.tags.length-1].nextElementSibling;r.before=i,r.flush()}t.insert("",n,r,!1)},[t,n.name]),null});function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.J)(t)}function p(){var e=f.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2445(e,t,r){"use strict";r.d(t,{FD:()=>s,FK:()=>i,Y:()=>a});var n=r(4848),o=r(2144);r(6540),r(2128),r(4146),r(1287);var i=n.Fragment,a=function(e,t,r){return o.h.call(t,"css")?n.jsx(o.E,(0,o.c)(e,t),r):n.jsx(e,t,r)},s=function(e,t,r){return o.h.call(t,"css")?n.jsxs(o.E,(0,o.c)(e,t),r):n.jsxs(e,t,r)}},6603(e,t,r){"use strict";r.d(t,{J:()=>h});var n,o={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i=r(6289),a=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},d=(0,i.A)(function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()}),u=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===o[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var o=r.next;if(void 0!==o)for(;void 0!==o;)n={name:o.name,styles:o.styles,next:n},o=o.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=f(e,t,r[o])+";";else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=i+"{"+t[a]+"}":l(a)&&(n+=d(i)+":"+u(i,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==t||void 0===t[a[0]]))for(var s=0;s<a.length;s++)l(a[s])&&(n+=d(i)+":"+u(i,a[s])+";");else{var c=f(e,t,a);switch(i){case"animation":case"animationName":n+=d(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var i=n,a=r(e);return n=i,f(e,t,a)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var p=/label:\s*([^\s;{]+)\s*(;|$)/g;function h(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o,i=!0,a="";n=void 0;var s=e[0];null==s||void 0===s.raw?(i=!1,a+=f(r,t,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),i&&(a+=s[c]);p.lastIndex=0;for(var l="";null!==(o=p.exec(a));)l+="-"+o[1];return{name:function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+l,styles:a,next:n}}},2278(e,t,r){"use strict";r.d(t,{A:()=>m});var n=r(8168),o=r(2144),i=r(6603),a=r(1287),s=r(41),c=r(6540),l=r(6289),d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,l.A)(function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),f=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:f},h=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},g=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,a.s)(function(){return(0,s.sk)(t,r,n)}),null},m=(function e(t,r){var a,l,d=t.__emotion_real===t,u=d&&t.__emotion_base||t;void 0!==r&&(a=r.label,l=r.target);var f=h(t,r,d),m=f||p(u),y=!m("as");return function(){var v=arguments,b=d&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&b.push("label:"+a+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{var w=v[0];b.push(w[0]);for(var x=v.length,_=1;_<x;_++)b.push(v[_],w[_])}var E=(0,o.w)(function(e,t,r){var n=y&&e.as||u,a="",d=[],h=e;if(null==e.theme){for(var v in h={},e)h[v]=e[v];h.theme=c.useContext(o.T)}"string"==typeof e.className?a=(0,s.Rk)(t.registered,d,e.className):null!=e.className&&(a=e.className+" ");var w=(0,i.J)(b.concat(d),t.registered,h);a+=t.key+"-"+w.name,void 0!==l&&(a+=" "+l);var x=y&&void 0===f?p(n):m,_={};for(var E in e)(!y||"as"!==E)&&x(E)&&(_[E]=e[E]);return _.className=a,r&&(_.ref=r),c.createElement(c.Fragment,null,c.createElement(g,{cache:t,serialized:w,isStringTag:"string"==typeof n}),c.createElement(n,_))});return E.displayName=void 0!==a?a:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=u,E.__emotion_styles=b,E.__emotion_forwardProp=f,Object.defineProperty(E,"toString",{value:function(){return"."+l}}),E.withComponent=function(t,o){return e(t,(0,n.A)({},r,o,{shouldForwardProp:h(E,o,!0)})).apply(void 0,b)},E}}).bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){m[e]=m(e)})},1287(e,t,r){"use strict";r.d(t,{i:()=>s,s:()=>a});var n,o=r(6540),i=!!(n||(n=r.t(o,2))).useInsertionEffect&&(n||(n=r.t(o,2))).useInsertionEffect,a=i||function(e){return e()},s=i||o.useLayoutEffect},41(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")}),n}r.d(t,{Rk:()=>n,SF:()=>o,sk:()=>i});var o=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},i=function(e,t,r){o(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}}},3098(e,t,r){"use strict";r.d(t,{O5:()=>o,OG:()=>n});let n={IMAGE:"IMAGE",OTP:"OTP",PIN:"PIN",INFO:"INFO",PAYMENT_CODE:"PAYMENT_CODE",THREE_D_SECURE_REDIRECT:"THREE_D_SECURE_REDIRECT",THREE_D_SECURE_SETUP:"THREE_D_SECURE_SETUP",REQUEST_HTML:"REQUEST_HTML",SDK_PROVIDER:"SDK_PROVIDER",RENDER_HTML:"RENDER_HTML",RENDER_IFRAME:"RENDER_IFRAME",REDIRECT_URL:"REDIRECT_URL",FORM:"FORM",REDIRECT:"REDIRECT"},o={COUNTDOWN:"COUNTDOWN",DEADLINE:"DEADLINE"}},9237(e,t,r){"use strict";var n,o,i,a;r.d(t,{A:()=>l,m:()=>d}),(i=n||(n={})).CREDIT="CREDIT",i.DEBIT="DEBIT",i.VOUCHER="VOUCHER",(a=o||(o={})).DISCOVER="DISCOVER",a.MAESTRO="MAESTRO",a.MASTERCARD="MASTERCARD",a.DINERS_CLUB_INTERNATIONAL="DINERS_CLUB_INTERNATIONAL",a.DINERS="DINERS",a.AMERICAN_EXPRESS="AMERICAN_EXPRESS",a.VISA="VISA",a.UATP="UATP",a.SODEXO="SODEXO",a.VR_VALE_REFEICAO="VR_VALE_REFEICAO",a.DEFAULT="default",a.DEFAULT_ENROLLED="DEFAULT_ENROLLED",a.CARTES_BANCAIRES="CARTES_BANCAIRES",a.ELO="ELO";let s={[o.VISA]:"https://icons.prod.y.uno/Visa.png",[o.MASTERCARD]:"https://icons.prod.y.uno/Mastercard.png",[o.MAESTRO]:"https://icons.prod.y.uno/Maestro.png",[o.DISCOVER]:"https://icons.prod.y.uno/Discover.png",[o.AMERICAN_EXPRESS]:"https://icons.prod.y.uno/Amex.png",[o.DINERS_CLUB_INTERNATIONAL]:"https://icons.prod.y.uno/Dinners%20Club.png",[o.UATP]:"https://icons.prod.y.uno/uatp_logosimbolo.png",[o.SODEXO]:"https://sdk.prod.y.uno/icons/default-card.png",[o.VR_VALE_REFEICAO]:"https://sdk.prod.y.uno/icons/default-card.png",[o.DEFAULT]:"https://sdk.prod.y.uno/icons/default-card.png",[o.DEFAULT_ENROLLED]:"https://sdk.prod.y.uno/icons/card-grey.svg",[o.DINERS]:"https://icons.prod.y.uno/Dinners%20Club.png",[o.CARTES_BANCAIRES]:"https://sdk.prod.y.uno/brands/alt/cartesbancaires_logosimbolo.svg",[o.ELO]:"https://sdk.prod.y.uno/brands/elo_light.svg"},c={[o.VISA]:"https://icons.prod.y.uno/sdk-web/brand-icon/visa.svg",[o.MASTERCARD]:"https://icons.prod.y.uno/sdk-web/brand-icon/mastercard.svg",[o.MAESTRO]:"https://icons.prod.y.uno/sdk-web/brand-icon/maestro.svg",[o.DISCOVER]:"https://icons.prod.y.uno/sdk-web/brand-icon/discover.svg",[o.AMERICAN_EXPRESS]:"https://icons.prod.y.uno/sdk-web/brand-icon/amex.svg",[o.DINERS_CLUB_INTERNATIONAL]:"https://icons.prod.y.uno/sdk-web/brand-icon/dinners-club.svg",[o.DINERS]:"https://icons.prod.y.uno/sdk-web/brand-icon/dinners-club.svg",[o.UATP]:"https://icons.prod.y.uno/sdk-web/brand-icon/uatp.svg",[o.SODEXO]:"https://icons.prod.y.uno/sdk-web/brand-icon/thin-credit.svg",[o.VR_VALE_REFEICAO]:"https://icons.prod.y.uno/sdk-web/brand-icon/thin-credit.svg",[o.DEFAULT]:"https://icons.prod.y.uno/sdk-web/brand-icon/thin-credit.svg",[o.DEFAULT_ENROLLED]:"https://sdk.prod.y.uno/icons/card-grey.svg",[o.CARTES_BANCAIRES]:"https://sdk.prod.y.uno/brands/alt/cartesbancaires_logosimbolo.svg",[o.ELO]:"https://sdk.prod.y.uno/brands/elo_light.svg"},l=[{numberRegex:/^6(?:011|5[0-9]{2})[0-9]/,altCardLogo:"discover",cardInputIcon:c.DISCOVER,cardLogo:s.DISCOVER,cardLogoEnrolled:s.default,cardType:n.DEBIT,cvvRegex:/^[0-9]{3}$/,groupSizes:[4],placeHolder:"**** **** **** ****",scheme:o.DISCOVER,brand:o.DISCOVER,maxLength:19,minLength:16,styles:{backgroundColor:"linear-gradient(61deg, #EAEAEA 16%, #FFD1A7 43.1%, #FFAD61 60.23%, #D36500 100%)",labelColor:"rgba(40, 42, 48, 0.85)",valueColor:"#282A30",magneticStripeColor:"linear-gradient(90deg, #A9A9A9D9 , #CECECE 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #D2D8D7, #C3E2FFDB, #CECECE)"}},{numberRegex:/^(5018|5020|5038|6304|6759|6761|6763)/,maxLength:19,minLength:12,cvvRegex:/^[0-9]{3}$/,scheme:o.MAESTRO,brand:o.MAESTRO,altCardLogo:"maestro",cardLogo:s.MAESTRO,cardLogoEnrolled:s.default,cardInputIcon:c.MAESTRO,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(80deg, #E1DEDE 0%, #F4F4F4 38.10%, #EAEAEA 67.56%, #CFCFCF 100%)",labelColor:"rgba(40, 42, 48, 0.85)",valueColor:"#282A30",magneticStripeColor:"linear-gradient(90deg, #A9A9A9D9 , #CECECE 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{numberRegex:/^5[1-5]|^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)$/,maxLength:19,minLength:16,cvvRegex:/^[0-9]{3}$/,scheme:o.MASTERCARD,brand:o.MASTERCARD,altCardLogo:"mastercard",cardLogo:s.MASTERCARD,cardLogoEnrolled:s.default,cardInputIcon:c.MASTERCARD,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(80deg, #E1DEDE 0%, #F4F4F4 38.10%, #EAEAEA 67.56%, #CFCFCF 100%)",labelColor:"rgba(40, 42, 48, 0.85)",valueColor:"#282A30",magneticStripeColor:"linear-gradient(90deg, #A9A9A9D9 , #CECECE 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{numberRegex:/^3(?:0[0-5]|[68][0-9])/,maxLength:19,minLength:14,cvvRegex:/^[0-9]{3}$/,scheme:o.DINERS,brand:o.DINERS,altCardLogo:"diners club international",cardLogo:s.DINERS_CLUB_INTERNATIONAL,cardLogoEnrolled:s.default,cardInputIcon:c.DINERS_CLUB_INTERNATIONAL,groupSizes:[4,6,4],placeHolder:"**** ****** ****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(72deg, #15384D 0%, #647783 38.25%, #15384D 69.68%, #647783 100%)",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{numberRegex:/^3[4|7]/,maxLength:15,minLength:15,cvvRegex:/^[0-9]{4}$/,scheme:o.AMERICAN_EXPRESS,brand:o.AMERICAN_EXPRESS,altCardLogo:"american express",cardLogo:s.AMERICAN_EXPRESS,cardLogoEnrolled:s.default,cardInputIcon:c.AMERICAN_EXPRESS,groupSizes:[4,6,5],placeHolder:"**** ****** *****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(71deg, #A4B2C6 23%, #D1D8E8 52.83%, #ADBDCD 76.92%, #41596B 111%)",labelColor:"rgba(40, 42, 48, 0.85)",valueColor:"#282A30",magneticStripeColor:"",signatureBackgroundColor:"",signatureLineColor:""}},{numberRegex:/^4[0-9]/,maxLength:19,minLength:13,cvvRegex:/^[0-9]{3}$/,scheme:o.VISA,brand:o.VISA,altCardLogo:"visa",cardLogo:s.VISA,cardLogoEnrolled:s.default,cardInputIcon:c.VISA,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(80deg, #39A1FF 0%, rgba(47, 82, 155, 0.97) 50.37%, #2B74D1 83.91%, #0530C2 100%)",labelColor:"rgba(255, 255, 255, 0.85)",magneticStripeColor:"linear-gradient(90deg, #A9A9A9D9 , #CECECE 80%)",valueColor:"#FFFFFF",signatureBackgroundColor:"linear-gradient(90deg, #FFEBA6 65%, #FFFCF2)",signatureLineColor:"linear-gradient(75deg, #EDF6FF, #DBEDFFDB, #F0F0F0)"}},{altCardLogo:"Sodexo",cardLogo:s.default,cardLogoEnrolled:s.default,cardInputIcon:c.default,cvvRegex:/^([0-9]{3}|[0-9]{4})$/,numberRegex:/.*/,scheme:o.SODEXO,brand:o.SODEXO,maxLength:19,minLength:6,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.VOUCHER,styles:{backgroundColor:"#282A30",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{altCardLogo:"Card",cardLogo:s.default,cardLogoEnrolled:s.default,cardInputIcon:c.default,cvvRegex:/^([0-9]{3}|[0-9]{4})$/,numberRegex:/.*/,scheme:o.VR_VALE_REFEICAO,brand:o.VR_VALE_REFEICAO,maxLength:19,minLength:6,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.VOUCHER,styles:{backgroundColor:"#282A30",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{altCardLogo:"uatp",cardLogo:s.UATP,cardLogoEnrolled:s.default,cardInputIcon:c.UATP,cvvRegex:/.*/,numberRegex:/^[12]/,scheme:o.UATP,brand:o.UATP,maxLength:16,minLength:15,groupSizes:[4,5,6],placeHolder:"**** ***** ******",cardType:n.CREDIT,styles:{backgroundColor:"linear-gradient(70.43deg, #E9EFEC 12.93%, #D4E8D6 52.86%, #B2E1B5 76.08%, #5C975F 102.09%)",labelColor:"rgba(40, 42, 48, 0.85)",valueColor:"#282A30",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}},{altCardLogo:"cartes bancaires",cardLogo:s.CARTES_BANCAIRES,cardLogoEnrolled:s.default,cardInputIcon:c.CARTES_BANCAIRES,cvvRegex:/^[0-9]{3,4}$/,numberRegex:/.*/,scheme:o.CARTES_BANCAIRES,brand:o.CARTES_BANCAIRES,maxLength:19,minLength:6,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"linear-gradient(72.34deg, #00A35C 7.16%, #0082BC 53.12%, #2B74D1 61.34%, #001C62 96.62%)",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"radial-gradient(193.94% 6148.76% at 70.83% 33.33%, #CECECE 0%, rgba(169, 169, 169, 0.85) 100%)",signatureBackgroundColor:"linear-gradient(90deg, #EDF6FF 0.22%, rgba(219, 237, 255, 0.86) 50.09%, #F0F0F0 99.59%)",signatureLineColor:"linear-gradient(90deg, #FFEBA6 0.22%, #FFFCF2 99.59%)"}},{altCardLogo:"elo",cardLogo:s.ELO,cardLogoEnrolled:s.ELO,cardInputIcon:c.ELO,cvvRegex:/^([0-9]{3}|[0-9]{4})$/,numberRegex:/.*/,scheme:o.ELO,brand:o.ELO,maxLength:19,minLength:12,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"#282A30",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}}],d={altCardLogo:"card",cardLogo:s.default,cardLogoEnrolled:s.DEFAULT_ENROLLED,cardInputIcon:c.default,cvvRegex:/^([0-9]{3}|[0-9]{4})$/,numberRegex:/.*/,scheme:o.DEFAULT,brand:o.DEFAULT,maxLength:19,minLength:12,groupSizes:[4],placeHolder:"**** **** **** ****",cardType:n.DEBIT,styles:{backgroundColor:"#282A30",labelColor:"rgba(255, 255, 255, 0.85)",valueColor:"#FFFFFF",magneticStripeColor:"linear-gradient(90deg, #F2F2F2 , #EBEBEB96 80%)",signatureBackgroundColor:"#FFFFFF",signatureLineColor:"linear-gradient(75deg, #FFEFED, #FFDFDBDB, #FFE790)"}}},1583(){},9977(e,t,r){"use strict";r.d(t,{F:()=>g});var n=r(2445),o=r(6540),i=r(7437),a=r(2278),s=r(9829);r(1583);let c=a.A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${({backgroundColor:e})=>e}
`,l=a.A.img`
  display: block;
  width: 24px;
`,d=a.A.p`
  ${({theme:e})=>(0,i.AH)(e.typographys.tiny.regular)};
  flex: 1;
`,u=a.A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`,f=a.A.img`
  display: block;
  width: 16px;
  height: 16px;
`,p="Yuno-Alert",h={info:{icon:"https://icons.prod.y.uno/sdk-web/Fill_Info.png",backgroundColor:s.c.v2.secondary.secondary_5},error:{icon:"https://sdk.prod.y.uno/icons/warning_red.svg",backgroundColor:s.c.brand.pastel.secondary_4}},g=({message:e,alertType:t,enableCloseButton:r,onClose:i})=>{let[a,s]=(0,o.useState)(!0),g=h[t];return a?(0,n.FD)(c,Object.assign({className:p,role:"status",backgroundColor:g.backgroundColor},{children:[(0,n.Y)(l,{className:`${p}__icon`,src:g.icon}),(0,n.Y)(d,Object.assign({className:`${p}__message`},{children:e})),r&&(0,n.Y)(u,Object.assign({className:`${p}__close-button`,onClick:()=>{s(!1),null==i||i()}},{children:(0,n.Y)(f,{className:`${p}__close-icon`,src:"https://icons.prod.y.uno/sdk-web/thin_x.svg"})}))]})):null}},6865(e,t,r){"use strict";r.d(t,{Fx:()=>p,ZT:()=>h,lZ:()=>f});var n=r(2445),o=r(2278),i=r(9829);let a=o.A.div`
    display: flex;
    flex-direction: column;
    background-color: ${({backgroundColor:e})=>e};
    padding: 16px 24px;
    border-radius: 8px;
    gap: 16px;
`,s=o.A.div`
    display: flex;
    gap: 16px;
`,c=o.A.img`
    display: flex;
    width: 24px;
    height: 24px;
`,l=o.A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,d=o.A.h1`
    ${({theme:e})=>e.typographys.small.bold};
`,u=o.A.p`
    ${({theme:e})=>e.typographys.tiny.regular};
`,f=e=>{let{backgroundColor:t,children:r}=e;return(0,n.Y)(a,Object.assign({backgroundColor:t},{children:r}))},p=e=>{let{title:t,description:r}=e;return(0,n.Y)(f,Object.assign({backgroundColor:i.c.v2.secondary.secondary_4},{children:(0,n.FD)(s,{children:[(0,n.Y)(c,{src:"https://sdk.prod.y.uno/icons/nupay/error-circle.svg"}),!!(t||r)&&(0,n.FD)(l,{children:[!!t&&(0,n.Y)(d,{children:t}),!!r&&(0,n.Y)(u,{children:r})]})]})}))},h=e=>{let{title:t,description:r}=e;return(0,n.Y)(f,Object.assign({backgroundColor:i.c.v2.secondary.secondary_3},{children:(0,n.FD)(s,{children:[(0,n.Y)(c,{src:"https://sdk.prod.y.uno/icons/nupay/warning-circle.svg"}),!!(t||r)&&(0,n.FD)(l,{children:[!!t&&(0,n.Y)(d,{children:t}),!!r&&(0,n.Y)(u,{children:r})]})]})}))}},2267(e,t,r){"use strict";r.d(t,{i:()=>d});var n=r(2445),o=r(9399),i=r(2278);let a=i.A.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`,s=i.A.span(({theme:e})=>Object.assign(Object.assign({},e.typographys.base.bold),{paddingInlineEnd:16,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"100%"})),c=i.A.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`,l=i.A.img(({theme:e,withContainer:t})=>{var r,n;return Object.assign({display:"flex",cursor:"pointer"},t&&{backgroundColor:null==(n=null==(r=null==e?void 0:e.colors)?void 0:r.neutrals)?void 0:n.b,padding:"8px 16px",borderRadius:"8px"})});i.A.button`
  background: ${({theme:e})=>e.colors.neutrals.b};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;let d=({onCopied:e,value:t,className:r,maxWidth:i,mode:d="dark",withIconContainer:u=!1})=>{let f=i?{maxWidth:`${i}px`}:{};return(0,n.Y)(c,Object.assign({className:`copy-button ${r}`},{children:(0,n.Y)(o.CopyToClipboard,Object.assign({text:t,onCopy:e},{children:(0,n.FD)(a,Object.assign({className:"copy-button__button"},{children:[(0,n.Y)(s,Object.assign({className:"copy-button__text",style:f},{children:t})),(0,n.Y)(l,{className:"copy-button__icon",src:"dark"===d?"https://sdk.prod.y.uno/icons/thin_copy.svg":"https://sdk.prod.y.uno/icons/light_thin_copy.svg",withContainer:u})]}))}))}))}},2213(e,t,r){"use strict";r.d(t,{n:()=>h});var n=r(2445),o=r(6540);r(1583);var i=r(7437),a=r(2278);let s=(0,i.i7)`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
  
  100% {
    transform: scale(1);
  }
`;var c=r(1893);let l=a.A.fieldset`
  border-radius: 8px;
  background: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=a.A.div`
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.grey[2]};
  background: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${({designType:e})=>"label-placeholder"===e?"\n    border-radius: 4px;\n  ":""}

  &.Yuno-fieldset__box--focus {
    border-color: ${({theme:e})=>e.colors.brand.vivid.primary_1};
  }

  &.Yuno-fieldset__box--error {
    border-color: ${({theme:e})=>e.colors.brand.vivid.primary_4};
  }

  &.Yuno-fieldset__box--error-focus-animation {
    animation: ${s} 0.5s ease-in-out;
    z-index: 2;
  }
`,u=a.A.label`
  ${({theme:e})=>(0,i.AH)(e.typographys.tiny.regular)};

  &.Yuno-fieldset__label--focus {
    color: ${({theme:e})=>e.colors.brand.vivid.primary_1};
  }

  &.Yuno-fieldset__label--error {
    color: ${({theme:e})=>e.colors.brand.vivid.primary_4};
  }
`,f="Yuno-fieldset",p=f,h=({render:e,errorMessage:t,hasError:r,label:i,designType:a="float-label",className:s="",enableReDesign:h,dataTestId:g=`${p}__fieldset`,errorIcon:m,fieldContentRef:y})=>{let v=(0,o.useRef)(null),b=(0,o.useRef)(null),w=f+"__box--focus",x=f+"__box--error",_=f+"__label--focus",E=f+"__label--error",C=f+"__box--error-focus-animation";return(0,o.useEffect)(()=>{var e,n,o,i;(null!=r?r:!!t)?(null==(e=v.current)||e.classList.add(x),null==(n=b.current)||n.classList.add(E)):(null==(o=v.current)||o.classList.remove(x),null==(i=b.current)||i.classList.remove(E))},[r,t]),(0,n.FD)(l,Object.assign({ref:y,"data-testid":g,className:`${f} ${s}`},{children:[!!i&&"label-placeholder"===a&&(0,n.Y)(u,Object.assign({"data-testid":`${p}__label`,className:`${f}__label`,ref:b},{children:i})),(0,n.Y)(d,Object.assign({designType:a,className:`${f}__box`,ref:v},{children:e({onBlur:()=>{var e,t,r;null==(e=v.current)||e.classList.remove(w),null==(t=v.current)||t.classList.remove(C),null==(r=b.current)||r.classList.remove(_)},onFocus:(e,t)=>{var r,n,o;null==(r=v.current)||r.classList.add(w),t&&(null==(n=v.current)||n.classList.add(C)),null==(o=b.current)||o.classList.add(_)}})})),t&&(0,n.Y)(c.K,{errorIcon:m,enableReDesign:h,text:t})]}))}},2089(e,t,r){"use strict";r.d(t,{p:()=>f});var n=r(1586),o=r(2445),i=r(6540),a=r(7437),s=r(2278);r(1583);let c=s.A.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  height: 52px;
  position: relative;
  padding: 24px 16px 8px 16px;
  gap: 4px;
  ${({designType:e})=>"label-placeholder"===e?"\n    height: 42px;\n    padding: 0 16px;\n  ":""}

  ${({customStyles:e})=>e||""}
`,l=s.A.input`
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)};
  border: none;
  outline: none;
  color: ${({theme:e})=>e.colors.neutrals.b};
  margin: 0;
  padding: 0;
  padding-inline-start: 1px;
  border-radius: 0;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  direction: inherit;
  text-align: start;

  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.primary_text_color};
  `:""}
  
  ${({customStyles:e})=>e||""}
`,d=s.A.label`
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)};
  color: ${({theme:e})=>e.colors.grey[5]};
  position: absolute;
  padding: 0;
  margin: 0;
  top: 16px;
  inset-inline-start: 16px;
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;

  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.secondary_text_color};
  `:""}


  &.Yuno-input__label--focus {
    color: ${({theme:e})=>{var t,r,n;return null!=(n=null==(r=null==(t=null==e?void 0:e.customStyling)?void 0:t.global)?void 0:r.secondary_text_color)?n:e.colors.brand.vivid.primary_1}}
  }

  &.Yuno-input__label--focus, &.Yuno-input__label--loaded {
    top: 8px;
    font-size: 10px;
  }

  &.Yuno-input__label--error {
    color: ${({theme:e})=>e.colors.brand.vivid.primary_4};
  }

  ${({designType:e})=>"float-label-static"===e?"\n    top: 8px;\n    font-size: 10px;\n  ":""}

  ${({customStyles:e})=>e||""}
`,u="Yuno-input",f=(0,i.forwardRef)((e,t)=>{var{label:r,value:a,hasError:s,designType:f="float-label",placeholder:p="",endDecorator:h,onFocus:g,customStyles:m}=e,y=(0,n._)(e,["label","value","hasError","designType","placeholder","endDecorator","onFocus","customStyles"]);let{inputRef:v,labelClassFocus:b,labelClassLoader:w,labelClassError:x,contentRef:_}=(({classPrefix:e,value:t,hasError:r})=>{let n=(0,i.useRef)(null),o=(0,i.useRef)(null),a=`${e}__label--focus`,s=`${e}__label--loaded`,c=`${e}__label--error`,[l,d]=(0,i.useState)(!1),u=()=>{d(!0)},f=()=>{d(!1)},p=(0,i.useCallback)(()=>{var e;null==(e=n.current)||e.focus()},[]);return(0,i.useEffect)(()=>{let e=n.current,t=o.current;return null==e||e.addEventListener("focus",u),null==e||e.addEventListener("blur",f),null==t||t.addEventListener("click",p),()=>{null==e||e.removeEventListener("focus",u),null==e||e.removeEventListener("blur",f),null==t||t.removeEventListener("click",p)}},[p]),{inputRef:n,contentRef:o,labelClassLoader:t?s:"",labelClassFocus:l?a:"",labelClassError:r?c:""}})({classPrefix:u,value:a,hasError:s}),{interceptOnFocus:E}=(({focusInputRef:e,onFocus:t,externalRef:r})=>{let n=(0,i.useRef)(!1),o=()=>{var t;n.current=!0,null==(t=e.current)||t.focus(),setTimeout(()=>{n.current=!1},0)};return(0,i.useImperativeHandle)(r,()=>({focus:o})),{isFocusProgramaticallyRef:n,focusProgramatically:o,interceptOnFocus:e=>{t&&t(e,n.current)}}})({focusInputRef:v,onFocus:g,externalRef:t}),C=!!r&&("float-label"===f||"float-label-static"===f),A="float-label-static"===f||"label-placeholder"===f;return(0,o.FD)(c,Object.assign({customStyles:null==m?void 0:m.content,ref:_,designType:f,className:`${u}__content`},{children:[C&&(0,o.Y)(d,Object.assign({customStyles:null==m?void 0:m.label,"data-testid":`${u}__label`,designType:f,className:`${u}__label ${w} ${b} ${x}`},{children:r})),(0,o.Y)(l,Object.assign({customStyles:null==m?void 0:m.input,ref:v,className:`${u}__base`,value:a,placeholder:A?p:"","data-testid":`${u}__input`,"aria-label":r,onFocus:E},y)),h]}))})},3674(e,t,r){"use strict";r.d(t,{l:()=>k});var n=r(2445),o=r(6540),i=r(2278),a=r(7437);r(1583);var s=r(1586),c=r(3002);let l=i.A.img`
  width: ${({width:e})=>e?`${e}px`:"auto"};
  height: auto;
  display: ${({show:e})=>e?"flex":"none"};
`,d=i.A.div`
  background: ${({theme:e})=>e.colors.grey[2]};
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};
  border-radius: 4px;
  ${c.W5}
`,u=({src:e,width:t,skeletonFlag:r})=>{let[i,a]=(0,o.useState)(!1);return(0,n.FD)(n.FK,{children:[!i&&(0,n.Y)(d,{"data-testid":"skeleton-flag",height:r.height,width:r.width}),(0,n.Y)(l,{width:t,src:e,show:i,onLoad:()=>{a(!0)}})]})},f=i.A.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: 52px;
  position: relative;
  ${({designType:e})=>"label-placeholder"===e?"\n    height: 42px;\n  ":""}
`,p=i.A.label`
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)};
  color: ${({theme:e})=>e.colors.grey[5]};
  position: absolute;
  padding: 0;
  margin: 0;
  top: 16px;
  inset-inline-start: ${({withIcon:e})=>e?"49px":"16px"};
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;

  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.secondary_text_color};
  `:""}

  &.Yuno-select__label--focus {
    color: ${({theme:e})=>{var t,r,n;return null!=(n=null==(r=null==(t=null==e?void 0:e.customStyling)?void 0:t.global)?void 0:r.secondary_text_color)?n:e.colors.brand.vivid.primary_1}};
  }

  &.Yuno-select__label--error {
    color: ${({theme:e})=>e.colors.brand.vivid.primary_4};
  }

  &.Yuno-select__label--focus,
  &.Yuno-select__label--loaded {
    top: 8px;
    font-size: 10px;
  }

  ${({designType:e})=>"float-label-static"===e?"\n    top: 8px;\n    font-size: 10px;\n  ":""}

  ${({customStyles:e})=>e||""}
`,h=i.A.input`
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)};
  margin: 0;
  border: none;
  outline: none;
  width: 100%;
  padding: 0;
  padding-inline-start: 1px;
  margin-top: ${({withLabel:e})=>e?"16px":"2px"};
  flex: 1;
  background: transparent;

  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.primary_text_color};
  `:""}

  ${({customStyles:e})=>e||""}

  &[readonly] {
    background-color: transparent;
  }
`,g=i.A.div`
  height: 10px;
  width: 10px;
  border-left: 1px solid ${({theme:e})=>e.colors.grey[5]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.grey[5]};
  transform: rotate(-45deg);
  ${({designType:e})=>"label-placeholder"===e?"\n    height: 5px;\n    width: 5px;\n  ":""}
`,m=i.A.div`
  background: ${({theme:e})=>e.colors.neutrals.w};
  box-sizing: border-box;
  position: absolute;
  max-height: ${({maxHeight:e})=>e?`${e}px`:"256px"};
  overflow: auto;
  transform: translateY(-1px);
  width: ${({widthCustom:e})=>e||"100%"};
  z-index: 2;
  top: 54px;
  border: 1px solid #d2d6da;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0px 10px 20px 0px rgba(40, 42, 48, 0.08);

  ${({designType:e})=>"label-placeholder"===e?"\n    top: 44px;\n    border-radius: 0;\n    padding: 0;\n    box-shadow: none;\n    max-height: 145px;\n  ":""}

  ${({customStyles:e})=>e||""}
`,y=i.A.div`
  ${({descriptionList:e})=>!e&&"min-height: 48px;"}
  ${({descriptionList:e,theme:t})=>e&&`border-bottom: 1px solid ${t.colors.grey[2]};`}
  
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 0 8px;
  border-radius: 8px;
  cursor: pointer;
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)};
  color: ${({theme:e})=>{var t;return null==(t=e.customStyling)?void 0:t.global.primary_text_color}};

  ${({designType:e,descriptionList:t})=>{if("label-placeholder"===e)return`
        border-radius: 0;
        ${!t&&"height: 29px;"}
        font-size: 12px;
      `}}

  &:hover {
    border-bottom-color: transparent;
    ${({theme:e})=>`background-color: ${e.colors.grey[2]};`}
  }

  &.Yuno-select__list-item--highlighted {
    ${({theme:e})=>`background-color: ${e.colors.grey[2]};`}
  }

  &[aria-selected="true"] {
    border-bottom-color: transparent;
    ${({theme:e,designType:t})=>"label-placeholder"===t?`
            background-color: ${e.colors.brand.vivid.primary_1};
            color: ${e.colors.neutrals.w};
          `:`
            background-color: ${e.colors.neutrals.b};
            color: ${e.colors.neutrals.w};
          `}
  }

  ${({customStyles:e})=>e||""}
`,v=i.A.p`
  text-align: center;
  ${({theme:e})=>(0,a.AH)(e.typographys.tiny.regular)};
`,b=i.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;

  ${({designType:e})=>{if("label-placeholder"===e)return"\n        font-size: 12px;\n      "}}
`,w=i.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=i.A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_=i.A.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  column-gap: 4px;
  cursor: pointer;
  height: 100%;
`,E=i.A.div`
  display: flex;
  flex-grow: 1;
`,C=i.A.button`
  padding: 4px 0 0 0;
  border: none;
  margin: 0;
  outline: none;
  background: transparent;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 4px;
  transform: ${({showList:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s linear;
  ${({designType:e})=>"label-placeholder"===e?"\n    height: 19px;\n    width: 19px;\n    padding-top: 7px;\n  ":""}
  cursor: pointer;
`,A="Yuno-select",k=o.forwardRef((e,t)=>{var r,i,a,c,l;let{onClickComboBox:d,showList:k,onClickOption:$,labelRef:O,selectContentRef:S,comboBoxValue:F,onComboBoxTextChange:R,filteredOption:D,selectedOption:N,comboBoxTextRef:P,labelClassLoader:T,labelClassError:j,labelClassFocus:I,listBoxRef:L,handleCloseList:z,handleClickArrow:W,dynamicMaxHeight:M}=(({hasError:e,onChange:t,onBlur:r,onFocus:n,classPrefix:i,value:a,options:c,enableFilter:l})=>{let[d,u]=(0,o.useState)(!1),[f,p]=(0,o.useState)(""),[h,g]=(0,o.useState)(256),m=(0,o.useRef)(null),y=(0,o.useRef)(null),v=(0,o.useRef)(null),b=(0,o.useRef)(null),w=(0,o.useRef)(!1),x=`${i}__label--focus`,_=`${i}__label--loaded`,E=`${i}__label--error`,[C,A]=(0,o.useState)(c),k=(0,o.useCallback)(()=>{if(a){let e=c.find(e=>e.key===a);p((null==e?void 0:e.selectedDescription)||(null==e?void 0:e.description)||"")}else p("")},[a,c]),$=()=>(0,s.a)(void 0,void 0,void 0,function*(){var e;l&&(null==(e=v.current)||e.focus())}),O=(0,o.useCallback)(()=>{if(!y.current)return;let e=y.current.getBoundingClientRect(),t=y.current.parentElement,r=window.innerHeight;for(;t&&t!==document.body;){let e=window.getComputedStyle(t),n=e.overflow+e.overflowY;if(n.includes("hidden")||n.includes("auto")||n.includes("scroll")){r=t.getBoundingClientRect().bottom;break}t=t.parentElement}g(Math.max(Math.min(r-e.bottom-20,256),100))},[]),S=(0,o.useCallback)(e=>{e&&e.stopPropagation(),l&&(v.current.blur(),k(),A(c)),r(),w.current=!1,u(!1)},[l,c,k]),F=({isFocusProgramatically:e})=>{n(void 0,e),w.current=!0,l&&p(""),O(),u(!0)};(0,o.useEffect)(()=>{k()},[k]),(0,o.useEffect)(()=>{let e=e=>{y.current&&!y.current.contains(e.target)&&w.current&&S()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[S]),(0,o.useEffect)(()=>{d&&(()=>{var e;let t=null==(e=b.current)?void 0:e.querySelector(`.${i}__list-item[aria-selected="true"]`);if(t&&b.current){let e=t.offsetTop;b.current.scrollTop=e}})()},[d,i]),(0,o.useEffect)(()=>{A(c)},[c]);let R=c.find(e=>e.key===a);return{onClickComboBox:e=>{w.current||($(),setTimeout(()=>{F(e)},10))},showList:d,onClickOption:e=>{t(e)},labelRef:m,selectContentRef:y,comboBoxTextRef:v,comboBoxValue:f,onComboBoxTextChange:e=>{((e="")=>{p(e);let t=RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").trim(),"i");A(c.filter(e=>t.test(e.description)))})(e.target.value)},filteredOption:C,selectedOption:R,labelClassLoader:R?_:"",labelClassFocus:d?x:"",labelClassError:e?E:"",listBoxRef:b,handleCloseList:S,handleClickArrow:()=>{d?S():($(),F({isFocusProgramatically:!1}))},dynamicMaxHeight:h}})(Object.assign(Object.assign({},e),{classPrefix:A})),Y=(0,o.useId)(),{handleKeyDown:B,highlightedIndex:U}=(({filteredOption:e,handleCloseList:t,listBoxRef:r,onClickOption:n,selectedOption:i,listItemClassName:a,showList:s})=>{let[c,l]=(0,o.useState)(-1);return(0,o.useEffect)(()=>{if(s){let t=e.findIndex(e=>e.key===(null==i?void 0:i.key));l(-1!==t?t:-1)}},[e,i,s]),(0,o.useEffect)(()=>{(()=>{if(!r.current)return;let e=r.current.querySelectorAll(`.${a}`)[c];e&&e.scrollIntoView({block:"nearest"})})()},[c,r,a]),{handleKeyDown:o=>{if(!r.current)return;let i=r.current.querySelectorAll(`.${a}`).length-1;switch(o.key){case"ArrowDown":o.preventDefault(),l(e=>e<i?e+1:0);break;case"ArrowUp":o.preventDefault(),l(e=>e>0?e-1:i);break;case"Enter":o.preventDefault(),c>=0&&(n(e[c]),l(-1));break;case"Escape":o.preventDefault(),t(),l(-1)}},highlightedIndex:c}})({filteredOption:D,listBoxRef:L,handleCloseList:z,listItemClassName:`${A}__list-item`,onClickOption:e=>{$(e),z()},selectedOption:N,showList:k});(0,o.useImperativeHandle)(t,()=>({focus:()=>{d({isFocusProgramatically:!0})}}));let H=null!=(r=e.designType)?r:"float-label",V=!!e.label&&("float-label"===H||"float-label-static"===H),q=(({designType:e,showList:t})=>"float-label"!==e||t)({designType:H,showList:k}),X=(null==N?void 0:N.icon)&&!k&&(null==(i=e.showIcon)||i),J=V?{width:28,skeletonFlag:{height:20,width:28}}:{width:16,skeletonFlag:{height:16,width:16}};return(0,n.FD)(f,Object.assign({designType:H,ref:S,className:`${A}__content`},{children:[V&&(0,n.Y)(p,Object.assign({customStyles:null==(a=e.customStyles)?void 0:a.label,"data-testid":`${A}__label`,designType:H,ref:O,className:`${A}__label ${T} ${I} ${j}`,withIcon:X},{children:e.label})),(0,n.FD)(_,Object.assign({role:"combobox","aria-owns":Y,"aria-expanded":k,"aria-label":e.label,className:`${A}__combo-box`},{children:[(0,n.FD)(E,Object.assign({tabIndex:-1,onClick:()=>{var e;null==(e=P.current)||e.focus()},className:`${A}__input-group`},{children:[X&&(0,n.Y)(u,{width:J.width,src:N.icon,skeletonFlag:J.skeletonFlag}),(0,n.Y)(h,{customStyles:null==(c=e.customStyles)?void 0:c.input,className:`${A}__input`,"data-testid":`${A}__input`,ref:P,withLabel:V,placeholder:q?e.placeholder:"",value:F,autoComplete:"off",onChange:R,onKeyDown:B,readOnly:!e.enableFilter,onFocus:()=>{d({isFocusProgramatically:!1})},onBlur:e=>{var t;!e.relatedTarget||(null==(t=S.current)?void 0:t.contains(e.relatedTarget))||z()},"aria-autocomplete":"list",tabIndex:0})]})),(0,n.Y)(C,Object.assign({designType:H,showList:k,"data-testid":`${A}__arrow`,className:`${A}__arrow`,onClick:()=>{W()},type:"button","aria-controls":Y,"aria-expanded":k,tabIndex:-1},{children:(0,n.Y)(g,{designType:H,className:`${A}__arrow-icon`})}))]})),k&&(0,n.FD)(m,Object.assign({customStyles:null==(l=e.customStyles)?void 0:l.listBox,ref:L,designType:H,className:`${A}__list-box`,role:"listbox",id:Y,widthCustom:e.listBoxWidth,"data-testid":`${A}__listbox`,tabIndex:-1,maxHeight:M},{children:[D.map((t,r)=>{var o,i;let a=r===U?`${A}__list-item--highlighted highlighted`:"";return(0,n.FD)(y,Object.assign({customStyles:null==(o=e.customStyles)?void 0:o.optionBox,designType:H,className:`${A}__list-item ${a}`,role:"option",tabIndex:-1,"aria-selected":t.key===(null==N?void 0:N.key),"data-testid":`${A}__option-${t.key}`,descriptionList:!!t.descriptionList&&t.descriptionList.length>0,onClick:()=>{$(t),z()}},{children:[!!t.icon&&(0,n.Y)(u,{width:J.width,src:t.icon,skeletonFlag:J.skeletonFlag}),t.descriptionList?(0,n.FD)(b,Object.assign({designType:H},{children:[(0,n.Y)("div",{children:t.description}),(0,n.Y)(x,{children:null==(i=t.descriptionList)?void 0:i.map((e,t)=>(0,n.Y)(w,{children:e},t))})]})):t.description]}),`${r}_${t.key}`)}),e.emptyMessage&&0===D.length&&(0,n.Y)(v,Object.assign({className:`${A}__empty-message`},{children:e.emptyMessage}))]}))]}))})},1586(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function o(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}c((n=n.apply(e,t||[])).next())})}r.d(t,{_:()=>n,a:()=>o}),"function"==typeof SuppressedError&&SuppressedError},2905(e,t,r){"use strict";r.d(t,{O:()=>w});var n=r(2445),o=r(351),i=r(2278);r(1583);var a=r(7437);let s=i.A.div`
  display: flex;
  height: ${({height:e})=>e||"480px"};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,c=i.A.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`,l=i.A.p`
  ${({theme:e})=>(0,a.AH)(e.typographys.small.regular)}
  margin:0;
`,d=({height:e,text:t})=>(0,n.FD)(s,Object.assign({height:e},{children:[(0,n.Y)(c,{src:"https://icons.prod.y.uno/sdk-web/loading.svg",alt:"loading"}),t&&(0,n.Y)(l,{children:t})]}));var u=r(6540),f=r(5279);let p="Yuno-modal-header",h=(0,i.A)(o.a)`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
`,g=i.A.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 3px;
  margin: 0;
`,m=i.A.img`
  display: flex;

  &.${p}__close-icon {
    width: 19px;

    ${({theme:e})=>e.breakpoints.table} {
      width: 16px;
    }
  }
`,y=(0,i.A)(o.b)`
  ${({theme:e})=>e.breakpoints.mobile} {
      width: 100%;
  };
  width: 600px;
  padding: 0 16px;
`,v=i.A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,b=i.A.iframe`
  display: ${({isIframeLoading:e})=>e?"none":"block"}
  maxHeight: ${({maxHeight:e})=>e};
  height: ${({height:e})=>e};
  width: 100%;
  border: 0px;
  border-radius: 8px;
`,w=e=>{var t;let{iframeRef:r,headerRef:i,height:a,maxHeight:s,isIframeLoading:c,onLoad:l}=(e=>{let t=(0,u.useRef)(null),r=(0,u.useRef)(null),[n,o]=(0,u.useState)(e.iframeHeight),[i,a]=(0,u.useState)("0px"),[s,c]=(0,u.useState)(!0),{isMobile:l}=(0,f.d)();return{iframeRef:t,headerRef:r,height:n,maxHeight:i,isIframeLoading:s,onLoad:()=>{var e,n,i,s;let d=`calc(100vh - ${l?"0":null!=(n=null==(e=r.current)?void 0:e.clientHeight)?n:"60"}px - ${l?"0":"160"}px)`;a(d);try{o((null==(s=null==(i=t.current)?void 0:i.contentWindow)?void 0:s.document.body.scrollHeight)+"px")}catch(e){o(d)}finally{c(!1)}}}})({iframeHeight:e.iframeHeight});return(0,n.Y)(o.O,{children:(0,n.Y)(o.C,{children:(0,n.FD)(o.M,{children:[(0,n.Y)(h,Object.assign({ref:i},{children:(0,n.Y)(g,Object.assign({"data-testid":"close-button",onClick:e.onClose,className:`${p}__close-button`},{children:(0,n.Y)(m,{src:"https://icons.prod.y.uno/sdk-web/thin_x.svg",className:`${p}__close-icon`})}))})),(0,n.FD)(y,{children:[c&&(0,n.Y)(v,{children:(0,n.Y)(d,{})}),(0,n.Y)(b,{ref:r,"data-testid":"iframe",onLoad:l,isIframeLoading:c,maxHeight:s,height:null!=(t=e.iframeHeight)?t:a,src:e.iframeSrc})]})]})})})}},1405(e,t,r){"use strict";r.d(t,{m:()=>s});var n=r(2445),o=r(6540),i=r(2278);let a=i.A.img`
  display: flex;
  width: 24px;
  height: 24px;
`,s=(0,o.forwardRef)(({className:e},t)=>{let r=(0,o.useRef)(null),[i,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=r.current,t=()=>{s(!0)},n=()=>{s(!1)};return e&&(e.addEventListener("mouseover",t),e.addEventListener("mouseout",n)),()=>{e&&(e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",n))}},[]),(0,o.useImperativeHandle)(t,()=>r.current,[]),(0,n.Y)(a,{className:e||"",ref:r,src:i?"https://icons.prod.y.uno/sdk-web/thin_Info_focus.svg?react":"https://icons.prod.y.uno/sdk-web/thin_Info_unfocus.svg?react"})})},351(e,t,r){"use strict";r.d(t,{C:()=>i,M:()=>a,O:()=>o,a:()=>s,b:()=>c,c:()=>l});var n=r(2278);let o=n.A.div`
  box-sizing: border-box;
  ${({theme:e})=>e.breakpoints.table} {
    background: rgba(0, 0, 0, 0.21);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    box-sizing: border-box;
    overflow: auto;
  }
`,i=n.A.div`
  box-sizing: border-box;
  ${({theme:e})=>e.breakpoints.table} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
`,a=n.A.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5000;
  box-sizing: border-box;
  ${({theme:e})=>e.customStyling?`
    background-color: ${e.customStyling.global.primary_background_color};
  `:""};
  ${({theme:e})=>e.breakpoints.table} {
    height: initial;
    position: relative;
    border-radius: 8px;
  }
`,s=n.A.div`
  flex: 0;
  background-color: inherit;
  box-sizing: border-box;
  ${({theme:e})=>e.breakpoints.table} {
    flex: initial;
    border-start-start-radius: 8px;
    border-start-end-radius: 8px;
  }
`,c=n.A.div`
  flex: 1;
  overflow: auto;
  background-color: inherit;
  box-sizing: border-box;
  ${({theme:e})=>e.breakpoints.table} {
    overflow: initial;
    flex: initial;
    border-radius: 8px;
  }
`,l=n.A.div`
  flex; 0;
  background-color: inherit;
  box-sizing: border-box;
  ${({theme:e})=>e.breakpoints.table} {
    flex: initial;
    border-end-start-radius: 8px;
    border-end-end-radius: 8px;
  }
`},7579(e,t,r){"use strict";r.d(t,{a:()=>C});var n=r(351),o=r(2445);r(1583);var i=r(2278),a=r(677),s=r(1244),c=r(7437);let l=(0,i.A)(n.c)`
  border-top: 1px solid ${({theme:e})=>e.colors.grey[2]}; 
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  ${({theme:e})=>e.breakpoints.table} { 
    flex-direction: row-reverse;
  }
`,d=(0,i.A)(a.$)`
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
  box-sizing: content-box;
  white-space: nowrap;
  ${({theme:e})=>e.breakpoints.table} { 
    min-width: 100px;
    width: initial;
  }
`,u=(0,i.A)(s.R)`
  justify-content: center;
  ${({theme:e})=>e.breakpoints.table} {
    justify-content: ${({withButtons:e})=>e?"flex-start":"center"};
  }
`,f=i.A.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  ${({theme:e})=>e.breakpoints.table} { 
    gap: 8px;
    max-width: 60%;
  }
`,p="Yuno-modal-bottom",h="Yuno-modal-header",g=i.A.img`
  display: flex;

  &.${h}__close-icon {
    width: 19px;

    ${({theme:e})=>e.breakpoints.table} {
      width: 16px;
    }
  }
`,m=i.A.div`
  display: flex;
  box-sizing: border-box;
  ${({theme:e})=>e.customStyling?`
    border-radius: ${e.customStyling.header.logo_corner_radius}px;
    border: ${e.customStyling.header.logo_border_size}px solid ${e.customStyling.header.logo_border_color};
    overflow: hidden;
  `:""};
`,y=i.A.p`
  ${({theme:e})=>(0,c.AH)(e.typographys.m.bold)};
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  ${({theme:e})=>e.customStyling?`
    font-size: ${e.customStyling.header.font_size}px;
    font-weight: ${e.customStyling.header.font_weight};
    color: ${e.customStyling.global.primary_text_color};
  `:""};
`,v=i.A.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 3px;
  margin: 0;
`,b=(0,i.A)(n.a)`
  display: flex;
  padding: 24px;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grey[2]};
  gap: 12px;

  ${({theme:e})=>e.breakpoints.table} {
    gap: 16px;
    padding: 16px 24px;
  }
`,w=(0,i.A)(n.b)`
  padding: 24px;
  ${({theme:e})=>e.breakpoints.table} {
    width: 600px;
    padding: 32px 24px;
  }
`,x="Yuno-modal",_=(0,i.A)(n.c)`
  border-top: 1px solid ${({theme:e})=>e.colors.grey[2]}; 
  padding: 24px;
  display: flex;
  justify-content: center;
`,E="Yuno-brand-footer",C={Overlay:n.O,CenterContent:n.C,ModalBody:n.b,ModalBottom:n.c,ModalContent:n.M,ModalHeader:n.a,GenericModalBottom:({onClickButton:e,textButton:t,disabled:r,className:n,disabledSecondButton:i,onClickSecondButton:a,textSecondButton:s,firstButtonAttributes:c,secondButtonAttributes:h,showYunoBadge:g=!0})=>(0,o.FD)(l,Object.assign({className:`${p}__content ${n}`},{children:[(0,o.FD)(f,{children:[s&&(0,o.Y)(d,Object.assign({disabled:i,variation:"secondary",enableReDesign:!0,className:`${p}__cancel-button`,small:!0,onClick:a},h,{children:s})),!!(null==t?void 0:t.length)&&(0,o.Y)(d,Object.assign({small:!0,disabled:r,enableReDesign:!0,className:`${p}__button`,onClick:e},c,{children:t}))]}),g&&(0,o.Y)(u,{withButtons:!!((null==t?void 0:t.length)||(null==s?void 0:s.length))})]})),GenericModalHeader:({onCloseClick:e,iconUrl:t,title:r,titleStyle:n,className:i="",disabled:a})=>(0,o.FD)(b,Object.assign({className:`${h}__content ${i}`},{children:[!!t&&(0,o.Y)(m,Object.assign({className:`${h}__payment-icon-content`},{children:(0,o.Y)(g,{src:t,width:32,className:`${h}__icon`})})),(0,o.Y)(y,Object.assign({style:n,className:`${h}__title`},{children:r})),(0,o.Y)(v,Object.assign({disabled:a,onClick:e,className:`${h}__close-button`},{children:(0,o.Y)(g,{src:"https://icons.prod.y.uno/sdk-web/thin_x.svg",className:`${h}__close-icon`})}))]})),GenericModalBody:({children:e,className:t})=>(0,o.Y)(w,Object.assign({className:`Yuno-modal-body__content ${t}`},{children:e})),GenericModalContent:({children:e,className:t="",modalContentStyle:r})=>(0,o.Y)(n.O,Object.assign({className:`${x}__overlap`},{children:(0,o.Y)(n.C,Object.assign({className:`${x}__center-content`},{children:(0,o.Y)(n.M,Object.assign({className:`${x}__modal-content ${t}`,style:r},{children:e}))}))})),BrandFooter:()=>(0,o.Y)(_,Object.assign({className:`${E}__content`},{children:(0,o.Y)("div",Object.assign({className:`${E}__yuno-brand-center`},{children:(0,o.Y)(s.R,{})}))}))}},5386(e,t,r){"use strict";r.d(t,{a:()=>y,w:()=>A});var n=r(2445),o=r(6540),i=r(961),a=r(2278),s=r(4316),c=r(7437),l=r(6845);let d=({children:e})=>{let t=(0,o.useMemo)(()=>document.createElement("div"),[]);return(0,o.useEffect)(()=>{let e=document.body,r=e.style.overflow;return e.style.overflow="hidden",e.appendChild(t),()=>{e.removeChild(t),e.style.overflow=r}},[t]),i.createPortal(e,t)},u=(0,a.A)(s.az)`
  position: fixed;
  background: #FFFFFF;
  z-index: 1;
  max-width: 445px;
  width: 100%;
  border-radius: 16px;
`,f=a.A.div`
  ${({theme:e})=>(0,c.AH)(e.typographys.xl.bold)}
  padding: 25px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E6EBF1;
  text-transform: capitalize;
`,p=a.A.button`
  position: absolute;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  inset-inline-end: 22px;

  &::after {
    content: '';
    background: url('https://sdk.prod.y.uno/icons/close-icon.svg') no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
  }
`,h=(0,a.A)(s.az)`
  padding: 40px 42px 0 40px;
  max-height: calc(95vh - 115px);
  overflow-y: auto;
  overflow-x: hidden;
`,g=(0,a.A)(s.az)`
  padding-bottom: 35px;
`,m=({children:e,title:t,onClose:r,className:o})=>(0,n.Y)(l.h,Object.assign({className:`yuno-modal-overlay ${o}`},{children:(0,n.FD)(u,Object.assign({role:"dialog",id:"dialog1","aria-labelledby":"dialog1_label","aria-modal":"true",onClick:e=>e.stopPropagation(),className:"yuno-modal"},{children:[(0,n.FD)(f,Object.assign({className:"yuno-modal__title"},{children:[t,(0,n.Y)(p,{"aria-label":"Close Modal",onClick:r,"data-testid":"yuno-modal__close-btn"})]})),(0,n.Y)(h,Object.assign({className:"yuno-modal__content"},{children:e})),(0,n.Y)(g,{className:"yuno-modal__footer"})]}))}));function y({children:e,open:t,title:r,onClose:o,className:i}){return t?(0,n.Y)(d,{children:(0,n.Y)(m,Object.assign({title:r,onClose:o,className:i},{children:e}))}):null}"function"==typeof SuppressedError&&SuppressedError;let v=(0,a.A)(l.h)`
  @media screen and (max-width:767px) {
    background: white;    
  }
`,b=a.A.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
`,w=a.A.div`
  display: flex;
  justify-content: center;
  padding: 70px 0;
  @media screen and (max-width:767px) { 
    padding:0;
  }
`,x=a.A.div`
  background: white;
  border-radius: 10px;
  @media screen and (max-width:767px) { 
    border-radius: 0;
    width: 100%;
  }
`,_=a.A.h2`
  ${({theme:e})=>(0,c.AH)(e.typographys.l.bold)}
  margin: 0;
  padding: 20px;
  padding-inline-end: 0;
`,E=a.A.div`
  display: flex;
  justify-content: ${({hasTitle:e})=>e?"space-between":"end"};
  ${({hasTitle:e})=>e?"border-bottom: 1px solid #E6EBF1; align-items: center;":""}

`,C=a.A.button`
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  padding: ${({hasTitle:e})=>e?"20px":"18px 18px 8px 18px"};
  cursor: pointer;
`,A=e=>{var{children:t,onClose:r,open:o,title:i,className:a}=e,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","onClose","open","title","className"]);if(!o)return null;let c="string"==typeof i;return(0,n.Y)(d,{children:(0,n.Y)(v,Object.assign({className:`yuno-modal-overlay ${a}`},s,{children:(0,n.Y)(b,Object.assign({className:"yuno-modal__scroll"},{children:(0,n.Y)(w,Object.assign({className:"yuno-modal__center-content"},{children:(0,n.FD)(x,Object.assign({className:"yuno-modal__content"},{children:[(0,n.FD)(E,Object.assign({className:"yuno-modal__header",hasTitle:!!i},{children:[i?c?(0,n.Y)(_,Object.assign({className:"yuno-modal__title"},{children:i})):i:null,(0,n.Y)(C,Object.assign({className:"yuno-modal__close-btn",hasTitle:!!i,onClick:r},{children:(0,n.Y)("img",{src:"https://sdk.prod.y.uno/icons/close-icon.svg",alt:"close"})}))]})),t]}))}))}))}))})}},392(e,t,r){"use strict";r.d(t,{m:()=>O});var n=r(2445);r(1583);var o=r(7437),i=r(2278),a=r(6845);let s=(0,o.i7)`
  from {
    opacity: 1;
  }

  to {
    bottom: 90px;
    opacity: 0;
  }
`,c=(0,o.i7)`
  from {
    opacity: 1;
  }

  to {
    bottom: 134px;
    opacity: 0;
  }
`,l=(0,o.i7)`
  from {
    opacity: 0;
  }

  to {
    bottom: 90px;
    opacity: 1;
  }
`,d=(0,o.i7)`
  from {
    opacity: 0;
  }

  to {
    bottom: 134px;
    opacity: 1;
  }
`,u=(0,o.i7)`
  from {
    opacity: 1;
  }

  to {
    bottom: 62px;
    opacity: 0;
  }
`,f=(0,o.i7)`
  from {
    opacity: 1;
  }

  to {
    bottom: 80px;
    opacity: 0;
  }
`,p=(0,o.i7)`
  from {
    opacity: 0;
  }

  to {
    bottom: 34px;
    opacity: 1;
  }
`,h=(0,o.i7)`
  from {
    opacity: 0;
  }

  to {
    bottom: 44px;
    opacity: 1;
  }
`,g="\n  animation-iteration-count: 1;\n  animation-delay: 0.8s;\n  animation-duration: 0.6s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n",m=(0,i.A)(a.h)({background:"rgba(255, 255, 255)"},({theme:e,activeOpacity:t})=>({zIndex:9e3,opacity:t?"0.9":"1","@media (prefers-color-scheme: dark)":{background:e.colors.neutrals.b}})),y=i.A.article`
  position: relative;
  max-width: 328px;
  height: 106px;
  margin: 32px;
  flex-grow: 1;

  ${({theme:e})=>e.breakpoints.table} {
    max-width: 376px;
    width: 376px;
    max-height: 152px;
    flex-grow: 0;
  }
`,v=i.A.span`
  position: absolute;
  inset-inline-start: 0;
  width: 100%;
  ${({theme:e})=>(0,o.AH)(e.typographys.l.bold)};
  color: ${({theme:e})=>e.colors.neutrals.b};
  line-height: 24px;

  ${g}

  ${({theme:e})=>e.breakpoints.table} {
    font-size: 32px;
    line-height: 40px;
  }

  @media (prefers-color-scheme: dark) {
    color: ${({theme:e})=>e.colors.neutrals.w};
  }
`,b=(0,i.A)(v)`
  bottom: 58px;
  opacity: 1;

  animation-name: ${u};

  ${({theme:e})=>e.breakpoints.table} {
    bottom: 76px;
    animation-name: ${f};
  }
`,w=(0,i.A)(v)`
  bottom: 30px;
  opacity: 0;
  animation-name: ${p};

  ${({theme:e})=>e.breakpoints.table} {
    bottom: 40px;
    animation-name: ${h};
  }
`,x=i.A.span`
  position: absolute;
  inset-inline-start: 0;
  width: 100%;
  ${({theme:e})=>(0,o.AH)(e.typographys.tiny.regular)};
  color: ${({theme:e})=>e.colors.grey[4]};
  bottom: 34px;

  ${g}

  ${({theme:e})=>e.breakpoints.table} {
    bottom: 44px;
    font-size: ${({theme:e})=>e.typographys.small.regular.fontSize};
  }

  @media (prefers-color-scheme: dark) {
    color: ${({theme:e})=>e.colors.grey[2]};
  }
`,_=(0,i.A)(x)`
  animation-name: ${s};

  ${({theme:e})=>e.breakpoints.table} {
    animation-name: ${c};
  }
`,E=(0,i.A)(x)`
  opacity: 0;
  animation-name: ${l};

  ${({theme:e})=>e.breakpoints.table} {
    animation-name: ${d};
  }
`,C=i.A.div`
  position: absolute;
  height: 4px;
  background: ${({theme:e})=>e.colors.grey[2]};
  border-radius: 100px;
  bottom: 0;
  overflow: hidden;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background: ${({theme:e})=>e.colors.grey[4]};
  }
`,A=(0,o.i7)`
  from {
    left: -100px;
  }

  to {
    left: 100%;
  }
`,k=i.A.div`
  position: absolute;
  height: 4px;
  width: 100px;
  background: ${({theme:e})=>e.colors.neutrals.b};
  border-radius: 100px;
  left: -100px;

  animation-name: ${A};
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @media (prefers-color-scheme: dark) {
    background: ${({theme:e})=>e.colors.neutrals.w};
  }
`,$="Yuno-processing",O=({headingTop:e,headingBottom:t,activeOpacity:r=!0})=>(0,n.Y)(m,Object.assign({activeOpacity:r,className:`${$}`},{children:(0,n.FD)(y,Object.assign({className:`${$}__message`},{children:[(0,n.Y)(b,Object.assign({className:`${$}__heading-top`},{children:e})),(0,n.Y)(w,Object.assign({className:`${$}__heading-bottom`},{children:t})),(0,n.Y)(E,Object.assign({className:`${$}__subheading-top`},{children:e})),(0,n.Y)(_,Object.assign({className:`${$}__subheading-bottom`},{children:t})),(0,n.Y)(C,Object.assign({className:`${$}__loading-container`},{children:(0,n.Y)(k,{className:`${$}__loading`})}))]}))}))},3573(e,t,r){"use strict";r.d(t,{a:()=>h});var n=r(2445),o=r(2278);r(1583);var i=r(499);let a=o.A.div`
  cursor: pointer;
  ${({isDisabled:e})=>e&&"\n    cursor: default;\n    opacity: 0.4;\n  "}
`,s=o.A.div`
  background: ${({theme:e})=>e.colors.neutrals.w};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.customStyling?`
    background: ${e.customStyling.global.primary_background_color};
  `:""};

  &.checked {
    ${({theme:e})=>e.customStyling?`
      box-shadow: 0px 0px 0px 1px ${e.customStyling.global.accent_color};
    `:""};
    ${({hasChildren:e})=>e&&"\n      border-end-start-radius: 0 !important;\n      border-end-end-radius: 0 !important;\n    "}
  }

  ${({hasError:e,theme:t})=>e&&`
    box-shadow: 0px 0px 0px 1px ${t.colors.brand.vivid.primary_4};
  `}
`,c=o.A.div`
  display: ${({show:e})=>e?"block":"none"};
`,l=o.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.grey[1]};
  :active {
    background: ${({theme:e})=>e.colors.neutrals.b};
  }
`,d=o.A.div`
  width: 12px;
  height: 12px;
  background-image: url('https://icons.prod.y.uno/sdk-web/trash_unfocus.svg');
  :active {
    background-image: url('https://icons.prod.y.uno/sdk-web/trash_focus.svg');
  }
`,u=o.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5px;
`,f=o.A.div`
  display: block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.brand.vivid.primary_4};
`,p="Yuno-radio-button",h=({value:e,checkedValue:t,childElement:r,setCheckedValue:o,className:h="",children:g,checkedValidate:m,dataTestid:y="",isDisabled:v,showDeleteButton:b=!1,onDelete:w,hasError:x=!1,dataObject:_={}})=>{let{handleClick:E,isChecked:C}=(({value:e,checkedValue:t,setCheckedValue:r,checkedValidate:n,isDisabled:o,showDeleteButton:i,onDelete:a})=>({handleClick:()=>{o||(i?null==a||a():null==r||r(e))},isChecked:!o&&(n?n(e,t):e===t)}))({setCheckedValue:o,value:e,checkedValue:t,checkedValidate:m,isDisabled:v,showDeleteButton:b,onDelete:w}),A=x&&!b,k=!x&&!b;return(0,n.FD)(a,Object.assign({isDisabled:v,className:`${p}__container`,"data-object":JSON.stringify(_)},{children:[(0,n.FD)(s,Object.assign({role:"radio","aria-checked":C,onClick:E,className:`${C?"checked":""} ${h} ${p}__item`,"data-testid":y,hasChildren:!!r,hasError:A},{children:[g,A&&(0,n.Y)(u,Object.assign({className:`${p}__error-radio-button`},{children:(0,n.Y)(f,{})})),k&&(0,n.Y)(i.q,{checked:C,onChange:E}),b&&(0,n.Y)(l,{children:(0,n.Y)(d,{"data-testid":`${p}__trash-icon`,className:`${p}__trash-icon`})})]})),r&&(0,n.Y)(c,Object.assign({className:`${p}__children-element-content`,show:C,"aria-hidden":!C},{children:r}))]}))}},8806(e,t,r){"use strict";r.d(t,{z:()=>s});var n=r(2445),o=r(6540),i=r(2278);let a=i.A.div`
  background: ${({theme:e})=>e.colors.neutrals.w};
`,s=o.forwardRef(({onChange:e,defaultValue:t,className:r="",children:i},s)=>{let{checkedValue:c,setCheckedValue:l,handleClear:d}=function({onChange:e,defaultValue:t}){let[r,n]=(0,o.useState)(t);return{checkedValue:r,setCheckedValue:t=>{n(t),e&&e(t)},handleClear:e=>{n(e)}}}({onChange:e,defaultValue:t});(0,o.useImperativeHandle)(s,()=>({setDefaultValue:e=>{l(e)},handleClear:d}));let u=o.Children.map(i,e=>o.isValidElement(e)?o.cloneElement(e,{checkedValue:null!=c?c:t,setCheckedValue:l}):e);return(0,n.Y)(a,Object.assign({role:"radiogroup",className:r},{children:u}))})},7729(e,t,r){"use strict";r.d(t,{N:()=>i});var n=r(7437),o=r(2278);let i=o.A.div`
  ${({theme:e})=>(0,n.AH)(Object.assign({},e.typographys.small.regular))}
  color: ${({theme:e})=>e.colors.neutrals.b};
  position: relative;
  flex-grow: 1;
  padding-block: 16px;
  padding-inline-start: 46px;
  padding-inline-end: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '';
    background: url(${({icon:e})=>e}) no-repeat;
    position: absolute;
    background-position: center;
    background-size: contain;
    inset-inline-start: 0;
    top: 50%;
    height: 30px;
    width: 30px;
    transform: translateY(-50%);
  }

  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.primary_text_color};
  `:""};
`},1244(e,t,r){"use strict";r.d(t,{R:()=>u});var n=r(2445);r(1583);var o=r(7437),i=r(2278),a=r(9025);let s=i.A.img`
  display: flex;
`,c=i.A.div`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;
`,l=i.A.p`
  ${({theme:e})=>(0,o.AH)(e.typographys.tiny.regular)};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.grey[4]};
`,d="Yuno-yuno-brand",u=({className:e=""})=>{var t;let r,o,i;return(0,n.FD)(c,Object.assign({className:`${e} ${d}__content`},{children:[(0,n.Y)(s,{className:`${d}__icon`,src:"https://icons.prod.y.uno/sdk-web/shield_check.svg"}),(0,n.Y)(l,Object.assign({className:`${d}__text`},{children:(r=(t=a.t)("yuno_badge_start"),o=t("yuno_badge_end"),i=t("yuno_badge"),r&&o&&"yuno_badge_start"!==r&&"yuno_badge_end"!==o?`${r}YUNO${o}`:o&&"yuno_badge_end"!==o?`YUNO ${o}`:`${i} YUNO`)}))]}))}},8791(e,t,r){"use strict";r.d(t,{hQ:()=>h,nD:()=>m,ub:()=>f});var n=r(301),o=r(2445);r(1583);var i=r(2278),a=r(6540);let s=i.A.h3`
  margin: 0;
`,c=i.A.button`
  border: 1px solid ${({theme:e})=>e.colors.grey[2]};
  background-color: ${({theme:e})=>e.colors.neutrals.w};
  display: flex;
  padding: ${({theme:e})=>`10px ${e.spacers.l}`};
  position: relative;
  width: 100%;

  &::after {
    content: '';
    height: 5px;
    width: 5px;
    border-left: 1px solid ${({theme:e})=>e.colors.grey[5]};
    border-bottom: 1px solid ${({theme:e})=>e.colors.grey[5]};
    position: absolute;
    inset-inline-end: ${({showContent:e})=>e?"20px":"18px"};
    top: 50%;
    transform: ${({showContent:e})=>e?"rotate(135deg) translateY(50%)":"rotate(-45deg) translateY(-100%)"};
    transition: transform 0.1s linear;
  }
`,l=i.A.div``,d=a.createContext({}),u=({children:e})=>{let t=(()=>{let[e,t]=(0,a.useState)();return{openAccordion:e,setOpenAccordion:t}})();return(0,o.Y)(d.Provider,Object.assign({value:t},{children:e}))},f=e=>{var{children:t,id:r,ariaLabelledBy:i}=e,s=(0,n._)(e,["children","id","ariaLabelledBy"]);let{isOpen:c}=(({id:e})=>{let{openAccordion:t}=(0,a.useContext)(d);return{isOpen:(null==t?void 0:t.accordionName)===e}})({id:r});return c?(0,o.Y)(l,Object.assign({id:r,role:"region","aria-labelledby":i},s,{className:`Yuno-accordion__content ${s.className||""}`},{children:t})):null},p="Yuno-accordion__heading",h=e=>{var{children:t,ariaControls:r,id:i,open:l}=e,u=(0,n._)(e,["children","ariaControls","id","open"]);let{isOpen:f,onClick:h}=(({ariaControls:e,open:t})=>{let{openAccordion:r,setOpenAccordion:n}=(0,a.useContext)(d),o=(null==r?void 0:r.accordionName)===e;return(0,a.useEffect)(()=>{n&&(t&&n({accordionName:e,triggerOnChange:!1}),!1===t&&n({triggerOnChange:!1}))},[t]),{isOpen:o,onClick:()=>{n&&n(o?{triggerOnChange:!0}:{accordionName:e,triggerOnChange:!0})}}})({ariaControls:r,open:l});return(0,o.Y)(s,Object.assign({},u,{className:`${p} ${u.className||""} ${f?"open":"close"}`},{children:(0,o.Y)(c,Object.assign({type:"button","aria-expanded":f,"aria-controls":r,id:i,onClick:h,showContent:f,className:p+"-title"},{children:t}))}))},g=e=>{var{onChange:t,children:r}=e,i=(0,n._)(e,["onChange","children"]);return(({onChange:e})=>{let{openAccordion:t}=(0,a.useContext)(d);(0,a.useEffect)(()=>{(null==t?void 0:t.triggerOnChange)&&e&&e(null==t?void 0:t.accordionName)},[t])})({onChange:t}),(0,o.Y)("div",Object.assign({},i,{className:`Yuno-accordion ${i.className||""}`},{children:r}))},m=e=>{var{children:t}=e,r=(0,n._)(e,["children"]);return(0,o.Y)(u,{children:(0,o.Y)(g,Object.assign({},r,{children:t}))})}},4316(e,t,r){"use strict";r.d(t,{az:()=>o});var n=r(2278);let o=n.A.div`
  box-sizing: border-box;
  font-family: ${({theme:e})=>e.typographys.fontFamily};
  font-style: normal;
  font-weight: 400;
`;(0,n.A)(o)`
  font-weight: 500;
`,(0,n.A)(o)`
  font-weight: 700;
`},677(e,t,r){"use strict";r.d(t,{$:()=>d});var n=r(301),o=r(2445),i=r(7437),a=r(2278);r(1583);let s=a.A.button`
  ${({theme:e})=>(0,i.AH)(e.typographys.base.regular)}
  border: none;
  display: block;
  width: 100%;
  padding: ${({small:e})=>e?"8.8px":"15.8px"} 16px;
  background: ${({theme:e})=>e.colors.brand.vivid.primary_1};
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.neutrals.w};;
  outline: none;
  cursor: pointer;

  ${({variation:e,theme:t})=>e&&`
     background: transparent;
     color: ${t.colors.brand.vivid.primary_1};
     box-shadow: inset 0 0 0 1px ${t.colors.brand.pastel.secondary_5};

  `}

  :hover {
    background: #410F92;
    ${({variation:e,theme:t})=>e&&`
      color: ${t.colors.grey[6]};
      box-shadow: none;
    `}
  }

  :focus {
    ${({variation:e,theme:t})=>e&&`
      box-shadow: inset 0 0 0 1px ${t.colors.brand.pastel.secondary_1};
    `}
  }

  :disabled {
    background: ${({theme:e})=>e.colors.grey[1]};
    color: ${({theme:e})=>e.colors.grey[3]};;
  }
`,c=a.A.button`
  ${({theme:e})=>(0,i.AH)(e.typographys.m.regular)};
  display: block;
  width: 100%;
  padding: 8px;
  margin: 0;
  outline: none;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.neutrals.b};
  color: ${({theme:e})=>e.colors.neutrals.w};
  border: none;
  cursor: pointer;
  min-width: 110px;
  -webkit-tap-highlight-color: transparent;

  ${({theme:e})=>e.customStyling?`
    background-color: ${e.customStyling.global.accent_color};
    color: ${e.customStyling.global.primary_button_text_color};
  `:""};

  @media (hover: hover) {
    :hover {
      background: ${({theme:e})=>e.colors.grey[5]};
    }
  }

  :active {
    background: ${({theme:e})=>e.colors.grey[5]};
  }

  :disabled {
    background: ${({theme:e})=>e.colors.grey[2]};
    color: ${({theme:e})=>e.colors.grey[4]};
    cursor: not-allowed;
  }

  ${({theme:e,variation:t})=>{var r,n;return"secondary"===t?`
          background: ${e.colors.neutrals.w};
          color: ${e.colors.neutrals.b};
          border: 1px solid ${e.colors.neutrals.b};
          border-color: ${(null==(n=null==(r=e.customStyling)?void 0:r.global)?void 0:n.accent_color)?e.customStyling.global.accent_color:e.colors.neutrals.b};
          @media (hover: hover) {
            :hover {
              background: ${e.colors.neutrals.w};
              border-color: ${e.colors.grey[5]};
              color: ${e.colors.grey[5]};
            }
          }

          :active {
            background: ${e.colors.neutrals.w};
            border-color: ${e.colors.grey[5]};
            color: ${e.colors.grey[5]};
          }

          :disabled {
            background: ${e.colors.neutrals.w};
            border-color: ${e.colors.grey[4]};
            color: ${e.colors.grey[4]};
            cursor: not-allowed;
          }
        `:""}}


`,l="Yuno-button",d=e=>{var{children:t,enableReDesign:r,className:i=""}=e,a=(0,n._)(e,["children","enableReDesign","className"]);return r?(0,o.FD)(c,Object.assign({},a,{className:`${l} ${i}`},{children:[" ",t]})):(0,o.Y)(s,Object.assign({className:`${l} ${i}`},a,{children:t}))}},3177(e,t,r){"use strict";r.d(t,{y:()=>h});var n=r(301),o=r(2445),i=r(6540),a=r(7437),s=r(2278);r(1583);let c=({className:e})=>(0,o.Y)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",fill:"#282A30",viewBox:"34 34 222 222","aria-label":"Square",fontSize:"medium",className:e},{children:(0,o.Y)("path",{d:"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"})})),l=s.A.label`
  ${({theme:e})=>(0,a.AH)(e.typographys.tiny.regular)};
  display: flex;
  position: relative;
  align-items: center;
  ${({theme:e})=>e.customStyling?`
    color: ${e.customStyling.global.primary_text_color}
  `:""};
  gap: 8px;

  .Yuno-checkbox__icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`,d=(0,s.A)(({className:e})=>(0,o.Y)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",fill:"#282A30",viewBox:"32 32 224 224","aria-label":"CheckSquare",fontSize:"medium",className:e},{children:(0,o.Y)("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"})})))`
  fill: #282A30;

  ${({theme:e})=>e.customStyling?`
    fill: ${e.customStyling.global.accent_color}
  `:""};
`,u=(0,s.A)(c)`
  fill: #282A30;

  ${({theme:e})=>e.customStyling?`
    fill: ${e.customStyling.global.accent_color}
  `:""};
`,f=(0,s.A)(c)`
  fill: #F13F5E;
`,p="Yuno-checkbox",h=(0,i.forwardRef)((e,t)=>{var{label:r,hasError:a}=e,s=(0,n._)(e,["label","hasError"]);let[c,h]=(0,i.useState)(!1),g=a?`${p}__error`:"";return(0,o.FD)(l,Object.assign({className:`${p}__content ${g}`},{children:[(0,o.Y)("input",Object.assign({className:`${p}__input`,"data-testid":p,ref:t},s,{onClick:e=>{var t;h(e.target.checked),null==(t=s.onClick)||t.call(s,e)},type:"checkbox",hidden:!0})),(0,o.Y)("div",Object.assign({className:`${p}__icon`},{children:(0,o.Y)(a?f:c?d:u,{})})),(0,o.Y)("span",Object.assign({className:`${p}__text`},{children:r}))]}))})},1893(e,t,r){"use strict";r.d(t,{K:()=>d});var n=r(2445);r(1583);var o=r(7437),i=r(2278);let a=i.A.p`
  ${({theme:e})=>(0,o.AH)(e.typographys.tiny.regular)};
  color: ${({theme:e})=>e.colors.brand.vivid.primary_4};
  line-height: 1;
  flex: 1;
`,s=i.A.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,c=i.A.img`
  width: 16px;
`,l="Yuno-error-text-field",d=({text:e,enableReDesign:t,errorIcon:r})=>{let o=t?"https://icons.prod.y.uno/sdk-web/fill_error_circle.svg":"https://icons.prod.y.uno/sdk-web/error_circle.png";return null!==r&&""!==r||(o=""),r&&(o=r),(0,n.FD)(s,Object.assign({className:`${l}__content`},{children:[!!o&&(0,n.Y)(c,{className:`${l}__error-icon`,src:o}),(0,n.Y)(a,{className:`${l}__message`,dangerouslySetInnerHTML:{__html:e}})]}))}},9489(e,t,r){"use strict";r.d(t,{R:()=>l});var n=r(2445),o=r(7437),i=r(2278);let a=i.A.div`
  display: flex;
  justify-content: center;
`,s=(0,o.i7)`
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
`,c=i.A.img`
  width: ${({width:e})=>null!=e?e:24}px;
  height: ${({height:e})=>null!=e?e:24}px;
  animation: ${s} 1.5s linear 0s infinite;
`,l=e=>(0,n.Y)(a,{children:(0,n.Y)(c,{width:e.width,height:e.height,src:"https://icons.prod.y.uno/sdk-web/loading_icon.png"})})},6845(e,t,r){"use strict";r.d(t,{h:()=>o});var n=r(2278);let o=n.A.div`
  background: ${({background:e})=>e||"rgba(0, 0, 0, 0.21)"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`},499(e,t,r){"use strict";r.d(t,{q:()=>d});var n=r(301),o=r(2445),i=r(6540),a=r(7437),s=r(2278);r(1583);let c=s.A.label`
  ${({theme:e})=>(0,a.AH)(e.typographys.tiny.regular)};
  display: flex;
  position: relative;
  align-items: center;
  gap: 8px;
  ${({selectedUrl:e,unselectedUrl:t})=>`
    
  .Yuno-radio__input:checked + .Yuno-radio__icon {
    background-image: url('${e}');
  }

  .Yuno-radio__icon {
    width: 14px;
    height: 14px;
    padding: 5px;
    background-image: url('${t}');
    flex-shrink: 0;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
  }
    `}
`,l="Yuno-radio",d=(0,i.forwardRef)((e,t)=>{var{selectedUrl:r,unselectedUrl:i,label:a,disableStopPropagation:s}=e,d=(0,n._)(e,["selectedUrl","unselectedUrl","label","disableStopPropagation"]);let u=void 0!==a,f="string"==typeof a;return(0,o.FD)(c,Object.assign({selectedUrl:r||"https://sdk.prod.y.uno/icons/dark-selected-radio-transparent.svg",unselectedUrl:i||"https://sdk.prod.y.uno/icons/dark-unselected-radio-transparent.svg",onClick:e=>{(({event:e,disableStopPropagation:t})=>{t||e.stopPropagation()})({event:e,disableStopPropagation:s})}},{children:[(0,o.Y)("input",Object.assign({className:`${l}__input`,"data-testid":l},d,{type:"radio",ref:t,hidden:!0})),(0,o.Y)("div",{className:`${l}__icon`}),u&&f&&(0,o.Y)("span",Object.assign({className:`${l}__text`},{children:a})),u&&!f&&a]}))})},3002(e,t,r){"use strict";r.d(t,{W5:()=>i});var n=r(7437),o=r(2278);let i=(0,n.AH)`
  position: relative;
  overflow: hidden;

  &:after {
    animation: ${(0,n.i7)`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.04),
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%); /* Avoid flash during server-side hydration */
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`,a=(o.A.div`
  background: ${({theme:e})=>e.colors.grey[0]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
`,o.A.div`
  background: ${({theme:e})=>e.colors.grey[2]};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  ${i}
`,o.A.div`
  width: ${({width:e})=>e};
  height: 20px;
  background: ${({theme:e})=>e.colors.grey[2]};
  margin-inline-start: 24px;
  margin-inline-end: 16px;
  flex: 1;
  border-radius: 4px;
  ${i}
`,o.A.div`
  background: ${({theme:e})=>e.colors.grey[2]};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${i}
`,o.A.div``,o.A.div`
  width: ${({width:e})=>e||"151px"};
  height: 8px;
  background: ${({theme:e})=>e.colors.grey[2]};
  border-radius: 2px;
  ${i}
`,o.A.div`
  width: ${({width:e})=>e||"30px"};
  height: 4px;
  background: ${({theme:e})=>e.colors.grey[2]};
  border-radius: 2px;
  ${i}
`,o.A.div`
  width: ${({width:e})=>e||"100%"};
  height: 40px;
  background: ${({theme:e})=>e.colors.grey[1]};
  border-radius: 4px;
  padding: 16px 15px;
  box-sizing: border-box;
  margin-bottom: 31px;
`);o.A.div`
  .yuno-skeleton-form__label {
    margin-bottom: 8px;
  }
`,o.A.div`
  margin-bottom: 61px;
  display: flex;
  justify-content: center;
`,(0,o.A)(a)`
  width: 258px;
  margin: auto;
  display: flex;
  justify-content: center;
`,o.A.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  .yuno-skeleton-form__copy-bottom-text
    ~ .yuno-skeleton-form__copy-bottom-text {
    margin-top: 9px;
  }
`},9995(e,t,r){"use strict";r.d(t,{n:()=>h});var n=r(2445),o=r(2278),i=r(6845),a=r(4316),s=r(7437);let c=(0,o.A)(i.h)`
  z-index: 2000;
`,l=(0,o.A)(a.az)`
  height: 100%;
  width: 100%;
  padding: 120px 16px 24px 16px;
  ${({theme:e})=>e.breakpoints.table} {
    padding: 80px 0px 100px 0px;
    border: 1px solid ${({theme:e})=>e.colors.grey[2]};
    width: 600px;
    height: 500px;
    border-radius: 10px;
  }
`,d=(0,o.A)(a.az)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`,u=o.A.h2`
  ${({theme:e})=>(0,s.AH)(e.typographys.l.bold)};
  text-align: center;
  margin-bottom: 12px;
`,f=o.A.p`
  ${({theme:e})=>(0,s.AH)(e.typographys.small.regular)};
  color: ${({theme:e})=>e.colors.grey[5]};
  text-align: center;
  flex: 1;
`,p=o.A.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${({theme:e})=>e.breakpoints.table} {
    width: 300px;
    margin: 0 auto;
  }
`,h=({children:e,className:t,icon:r,message:o,title:i})=>(0,n.Y)(c,Object.assign({background:"rgba(255, 255, 255, 1)",className:`yuno-status ${t}`},{children:(0,n.Y)(l,Object.assign({className:"yuno-status__container"},{children:(0,n.FD)(p,Object.assign({className:"yuno-status__containment-width"},{children:[(0,n.Y)(d,Object.assign({className:"yuno-status__icon-container"},{children:(0,n.Y)(r,{className:"yuno-status__icon"})})),(0,n.Y)(u,Object.assign({className:"yuno-status__title"},{children:i})),(0,n.Y)(f,Object.assign({className:"yuno-status__message"},{children:o})),e]}))}))}))},8045(e,t,r){"use strict";r.d(t,{d:()=>l});var n=r(2445),o=r(7437),i=r(2278);r(1583);let a=i.A.div`
  display: flex;
  box-sizing: border-box;
  background: ${({theme:e})=>e.colors.grey[1]};
  border: 1px solid ${({theme:e})=>e.colors.grey[2]};
  border-radius: 4px;
  padding: 4px;
  gap: 2px;
  ${({width:e})=>e?`
    width: ${e};
  `:""};
`,s=i.A.div`
  box-sizing: border-box;
  padding: 2px 8px;
  flex:1;
  cursor: pointer;
  text-align: center;
  ${({theme:e})=>(0,o.AH)(e.typographys.small.regular)};
  color: ${({theme:e})=>{var t;return null==(t=e.customStyling)?void 0:t.global.secondary_text_color}};
  ${({active:e,theme:t,activeColor:r})=>{var n;return e?`
    background: ${t.colors.neutrals.w};
    cursor: default;
    color: ${null!=r?r:null==(n=t.customStyling)?void 0:n.global.primary_text_color};
  `:""}};
`,c="Yuno-switch",l=({value:e,onChange:t,items:r,className:o="",width:i,activeColor:l})=>(0,n.Y)(a,Object.assign({className:`${c}__content ${o}`,width:i},{children:r.map((r,o)=>{let i=e===r.key;return(0,n.Y)(s,Object.assign({className:`${c}__item ${i?`${c}__item--active`:""}`,onClick:()=>t(r.key),active:i,activeColor:l},{children:r.description}),`switch-${o}`)})}))},2742(e,t,r){"use strict";r.d(t,{Ck:()=>o,Ut:()=>C,y8:()=>g});var n,o,i=r(2445),a=r(7437),s=r(2278),c=r(6540),l=r(961);r(1583);let d=s.A.div`
  background: ${({theme:e})=>e.colors.neutrals.b};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacers.m};
  padding: ${({theme:e})=>e.spacers.l};
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  ${({theme:e})=>e.breakpoints.table} {
    right: initial;
    border-radius: ${({theme:e})=>e.borderRadius.s};
    bottom: ${({theme:e})=>e.spacers.l};
    min-width: 343px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`,u=s.A.p`
  ${({theme:e})=>(0,a.AH)(e.typographys.tiny.regular)};
  color: ${({theme:e})=>e.colors.neutrals.w};
`;(n=o||(o={})).Success="success",n.Error="error";let f=({children:e})=>{let t=(0,c.useMemo)(()=>document.createElement("div"),[]);return(0,c.useEffect)(()=>{let e=document.body;return e.appendChild(t),()=>{e.removeChild(t)}},[t]),l.createPortal(e,t)},p={[o.Error]:"https://sdk.prod.y.uno/icons/info-circle-red.svg",[o.Success]:"https://sdk.prod.y.uno/icons/check-circle.svg"},h=({onClose:e,delayAutoClose:t,open:r})=>{(0,c.useEffect)(()=>{if(r&&t&&e){let r=setTimeout(()=>{e()},t);return()=>clearTimeout(r)}},[r,t])},g=({text:e,open:t,onClose:r,delayAutoClose:n,type:a=o.Success})=>(h({open:t,onClose:r,delayAutoClose:n}),t?(0,i.Y)(f,{children:(0,i.FD)(d,{children:[(0,i.Y)("img",{src:p[a]}),(0,i.Y)(u,{children:e})]})}):null),m=s.A.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;

  ${({theme:e})=>e.breakpoints.table} {
    right: initial;
    bottom: ${({theme:e})=>e.spacers.xxl};
    min-width: 328px;
    max-width: ${({maxWidth:e})=>e?`${e}px`:"400px"};
    left: 50%;
    transform: translate(-50%, 0);
    &::before {
      content: '';
      left: 0;
      right: 0;
      width: 4px;
      display: block;
      z-index: 0;
      height: 40px;
      transform: translate(0, 100%);
      position: relative;
      background: ${({theme:e,type:t})=>t===o.Success?e.colors.brand.vivid.primary_2:e.colors.brand.vivid.primary_4};
      border-radius: 8px 0 0 8px;
      border-right: 10px solid ${({theme:e})=>e.colors.neutrals.b};
    }
  }
`,y=s.A.div`
  background: ${({theme:e})=>e.colors.neutrals.b};
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  ${({hasClose:e})=>e?"\n    padding: 0 0 0 12px;\n  ":"\n    padding: 12px;\n  "}

  ${({theme:e})=>e.breakpoints.table} {
    right: initial;
    border-radius: ${({theme:e})=>e.borderRadius.m};
    gap: ${({theme:e})=>e.spacers.m};
  }
`,v=s.A.p`
  ${({theme:e})=>(0,a.AH)(e.typographys.tiny.regular)};
  color: ${({theme:e})=>e.colors.neutrals.w};
  flex: 1;
  white-space: ${({textNoWrap:e})=>e?"nowrap":"normal"};
  overflow: hidden;
  text-overflow: ellipsis;
`,b=s.A.img`
  width: 16px;
  display: block;
`,w=s.A.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 12px 12px 12px 12px;
`,x=s.A.div`
  position: fixed;
  bottom: ${({theme:e})=>e.spacers.xxl};
  left: 50%;
  right: initial;
  z-index: 5000;
  min-width: 300px;
  max-width: ${({maxWidth:e})=>e?`${e}px`:"400px"};
  transform: translate(-50%, 0);
  &::before {
    content: '';
    left: 0;
    right: 0;
    width: 4px;
    display: block;
    z-index: 0;
    height: 40px;
    transform: translate(0, 100%);
    position: relative;
    background: ${({theme:e,type:t})=>t===o.Success?e.colors.brand.vivid.primary_2:e.colors.brand.vivid.primary_4};
    border-radius: 8px 0 0 8px;
    border-right: 10px solid ${({theme:e})=>e.colors.neutrals.b};
  }
`,_=s.A.div`
  background: ${({theme:e})=>e.colors.neutrals.b};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacers.m};
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.m};
  ${({hasClose:e})=>e?"\n    padding: 0 0 0 12px;\n  ":"\n    padding: 12px;\n  "}
`,E="Yuno-toast",C=({text:e,open:t,onClose:r,delayAutoClose:n,type:a=o.Success,maxWidth:s,forceTableLayout:c,textNoWrap:l=!0,hideCloseButton:d=!1})=>{h({open:t,onClose:r,delayAutoClose:n});let u=!!r&&!d;return t?(0,i.Y)(f,{children:(0,i.Y)(c?x:m,Object.assign({type:a,className:`${E}__container`,maxWidth:s},{children:(0,i.FD)(c?_:y,Object.assign({className:`${E}__content`,hasClose:u},{children:[(0,i.Y)(b,{className:`${E}__status-icon`,src:p[a]}),(0,i.Y)(v,Object.assign({className:`${E}__text`,textNoWrap:l},{children:e})),u&&(0,i.Y)(w,Object.assign({className:`${E}__close-button`,onClick:r},{children:(0,i.Y)(b,{className:`${E}__close-icon`,src:"https://sdk.prod.y.uno/icons/Light_X.svg"})}))]}))}))}):null}},2578(e,t,r){"use strict";r.d(t,{Y:()=>c});var n=r(2278),o=r(6540);let i=n.A.div`
  border-radius: 4px;
  border: 1px solid #ECEFF2;
  background: #FFF;
  box-shadow: 0px 4px 13px 0px rgba(40, 42, 48, 0.06);
  padding: 12px;
  position: relative;
  ${({width:e})=>e?`
    width: ${e}px;
  `:""}
  z-index: 1;
`,a=n.A.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  transform: rotate(45deg);
  border-bottom: 1px solid #ECEFF2;
  border-right: 1px solid #ECEFF2;
  bottom: -6px;
  left: 18px;
  ${({position:e})=>`
    ${"bottom"===e.y?"\n      top: -6px;\n      transform: rotate(-135deg);\n      bottom: initial;\n    ":""}
    ${"left"===e.x?"\n      left: initial;\n      right: 18px;\n    ":""}
  `}
`,s=({refElement:e,tooltipContentRef:t,offsetHeight:r=0,offsetWidth:n=0})=>{if(e&&t){t.style.position="fixed";let o={y:"top",x:"right"},i=e.getBoundingClientRect(),a=t.getBoundingClientRect();i.top<a.height?(o.y="bottom",t.style.top=i.top+i.height+r+"px"):(o.y="top",t.style.top=i.top-(a.height+r)+"px");let s="rtl"===document.documentElement.dir,c=window.innerWidth-i.right>a.width;return s?c?(o.x="right",t.style.left=Math.max(0,i.x-n)+"px"):(o.x="left",t.style.left=Math.min(window.innerWidth-a.width,i.right+n-a.width)+"px"):c?(o.x="right",t.style.left=i.x-n+"px"):(o.x="left",t.style.left=i.right+n-a.width+"px"),o}},c={Arrow:a,TooltipContent:i,calculateTooltipPosition:s,useTooltip:({offsetHeight:e,offsetWidth:t})=>{let r=(0,o.useRef)(null),n=(0,o.useRef)(null),[i,a]=(0,o.useState)({x:"right",y:"top"}),c=()=>{a(s({refElement:r.current,tooltipContentRef:n.current,offsetHeight:e,offsetWidth:t})),n.current.style.visibility="visible"},l=()=>{n.current.style.visibility="hidden"};return(0,o.useEffect)(()=>{let e=r.current;return e&&(e.addEventListener("mouseover",c),e.addEventListener("mouseout",l)),()=>{e&&(e.removeEventListener("mouseover",c),e.removeEventListener("mouseout",l))}},[]),(0,o.useEffect)(()=>{n.current&&(n.current.style.position="fixed",n.current.style.visibility="hidden")},[]),{position:i,elementRef:r,tooltipContentRef:n}}}},301(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}r.d(t,{_:()=>n}),"function"==typeof SuppressedError&&SuppressedError},4146(e,t,r){"use strict";var n=r(4363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=d(r);u&&(a=a.concat(u(r)));for(var s=c(t),g=c(r),m=0;m<a.length;++m){var y=a[m];if(!i[y]&&!(n&&n[y])&&!(g&&g[y])&&!(s&&s[y])){var v=f(r,y);try{l(t,y,v)}catch(e){}}}}return t}},7665(e,t,r){"use strict";r.d(t,{Md:()=>s,tH:()=>a});var n=r(6540);let o=(0,n.createContext)(null),i={didCatch:!1,error:null};class a extends n.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=i}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){let{error:e}=this.state;if(null!==e){for(var t,r,n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];null==(t=(r=this.props).onReset)||t.call(r,{args:o,reason:"imperative-api"}),this.setState(i)}}componentDidCatch(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)}componentDidUpdate(e,t){let{didCatch:r}=this.state,{resetKeys:n}=this.props;if(r&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,r)=>!Object.is(e,t[r]))}(e.resetKeys,n)){var o,a;null==(o=(a=this.props).onReset)||o.call(a,{next:n,prev:e.resetKeys,reason:"keys"}),this.setState(i)}}render(){let{children:e,fallbackRender:t,FallbackComponent:r,fallback:i}=this.props,{didCatch:a,error:s}=this.state,c=e;if(a){let e={error:s,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)c=t(e);else if(r)c=(0,n.createElement)(r,e);else if(void 0!==i)c=i;else throw s}return(0,n.createElement)(o.Provider,{value:{didCatch:a,error:s,resetErrorBoundary:this.resetErrorBoundary}},c)}}function s(){let e=(0,n.useContext)(o);if(null==e||"boolean"!=typeof e.didCatch||"function"!=typeof e.resetErrorBoundary)throw Error("ErrorBoundaryContext not found");let[t,r]=(0,n.useState)({error:null,hasError:!1}),i=(0,n.useMemo)(()=>({resetBoundary:()=>{e.resetErrorBoundary(),r({error:null,hasError:!1})},showBoundary:e=>r({error:e,hasError:!0})}),[e.resetErrorBoundary]);if(t.hasError)throw t.error;return i}},2799(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case u:case i:case s:case a:case p:return e;default:switch(e=e&&e.$$typeof){case l:case f:case m:case g:case c:return e;default:return t}}case o:return t}}}function _(e){return x(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=f,t.Fragment=i,t.Lazy=m,t.Memo=g,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||x(e)===d},t.isConcurrentMode=_,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===f},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===s||e===a||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=x},4363(e,t,r){"use strict";e.exports=r(2799)},3295(e){"u">typeof self&&self,e.exports=function(){var e=[function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e){try{if(!e)return!1;if("u">typeof Promise&&e instanceof Promise)return!0;if("u">typeof window&&"function"==typeof window.Window&&e instanceof window.Window||"u">typeof window&&"function"==typeof window.constructor&&e instanceof window.constructor)return!1;var t={}.toString;if(t){var r=t.call(e);if("[object Window]"===r||"[object global]"===r||"[object DOMWindow]"===r)return!1}if("function"==typeof e.then)return!0}catch(e){}return!1}r.r(t),r.d(t,"PopupOpenError",function(){return ej}),r.d(t,"create",function(){return ru}),r.d(t,"destroy",function(){return rh}),r.d(t,"destroyComponents",function(){return rf}),r.d(t,"destroyAll",function(){return rp}),r.d(t,"PROP_TYPE",function(){return tG}),r.d(t,"PROP_SERIALIZATION",function(){return tZ}),r.d(t,"CONTEXT",function(){return tK}),r.d(t,"EVENT",function(){return tQ});var s,c=[],l=[],d=0;function u(){if(!d&&s){var e=s;s=null,e.resolve()}}function f(){d-=1,u()}var p=function(){function e(e){var t=this;if(this.resolved=void 0,this.rejected=void 0,this.errorHandled=void 0,this.value=void 0,this.error=void 0,this.handlers=void 0,this.dispatching=void 0,this.stack=void 0,this.resolved=!1,this.rejected=!1,this.errorHandled=!1,this.handlers=[],e){var r,n,o=!1,i=!1,a=!1;d+=1;try{e(function(e){a?t.resolve(e):(o=!0,r=e)},function(e){a?t.reject(e):(i=!0,n=e)})}catch(e){return f(),void this.reject(e)}f(),a=!0,o?this.resolve(r):i&&this.reject(n)}}var t=e.prototype;return t.resolve=function(e){if(this.resolved||this.rejected)return this;if(a(e))throw Error("Can not resolve promise with another promise");return this.resolved=!0,this.value=e,this.dispatch(),this},t.reject=function(e){var t=this;if(this.resolved||this.rejected)return this;if(a(e))throw Error("Can not reject promise with another promise");return e||(e=Error("Expected reject to be called with Error, got "+(e&&"function"==typeof e.toString?e.toString():({}).toString.call(e)))),this.rejected=!0,this.error=e,this.errorHandled||setTimeout(function(){t.errorHandled||function(e,t){if(-1===c.indexOf(e)){c.push(e),setTimeout(function(){throw e},1);for(var r=0;r<l.length;r++)l[r](e,t)}}(e,t)},1),this.dispatch(),this},t.asyncReject=function(e){return this.errorHandled=!0,this.reject(e),this},t.dispatch=function(){var t=this.resolved,r=this.rejected,n=this.handlers;if(!this.dispatching&&(t||r)){this.dispatching=!0,d+=1;for(var o=function(e,t){return e.then(function(e){t.resolve(e)},function(e){t.reject(e)})},i=0;i<n.length;i++){var s=n[i],c=s.onSuccess,l=s.onError,u=s.promise,p=void 0;if(t)try{p=c?c(this.value):this.value}catch(e){u.reject(e);continue}else if(r){if(!l){u.reject(this.error);continue}try{p=l(this.error)}catch(e){u.reject(e);continue}}if(p instanceof e&&(p.resolved||p.rejected)){var h=p;h.resolved?u.resolve(h.value):u.reject(h.error),h.errorHandled=!0}else a(p)?p instanceof e&&(p.resolved||p.rejected)?p.resolved?u.resolve(p.value):u.reject(p.error):o(p,u):u.resolve(p)}n.length=0,this.dispatching=!1,f()}},t.then=function(t,r){if(t&&"function"!=typeof t&&!t.call)throw Error("Promise.then expected a function for success handler");if(r&&"function"!=typeof r&&!r.call)throw Error("Promise.then expected a function for error handler");var n=new e;return this.handlers.push({promise:n,onSuccess:t,onError:r}),this.errorHandled=!0,this.dispatch(),n},t.catch=function(e){return this.then(void 0,e)},t.finally=function(t){if(t&&"function"!=typeof t&&!t.call)throw Error("Promise.finally expected a function");return this.then(function(r){return e.try(t).then(function(){return r})},function(r){return e.try(t).then(function(){throw r})})},t.timeout=function(e,t){var r=this;if(this.resolved||this.rejected)return this;var n=setTimeout(function(){r.resolved||r.rejected||r.reject(t||Error("Promise timed out after "+e+"ms"))},e);return this.then(function(e){return clearTimeout(n),e})},t.toPromise=function(){if("u"<typeof Promise)throw TypeError("Could not find Promise");return Promise.resolve(this)},t.lazy=function(){return this.errorHandled=!0,this},e.resolve=function(t){return t instanceof e?t:a(t)?new e(function(e,r){return t.then(e,r)}):(new e).resolve(t)},e.reject=function(t){return(new e).reject(t)},e.asyncReject=function(t){return(new e).asyncReject(t)},e.all=function(t){var r=new e,n=t.length,o=[];if(!n)return r.resolve(o),r;for(var i=function(e,t,i){return t.then(function(t){o[e]=t,0==(n-=1)&&r.resolve(o)},function(e){i.reject(e)})},s=0;s<t.length;s++){var c=t[s];if(c instanceof e){if(c.resolved){o[s]=c.value,n-=1;continue}}else if(!a(c)){o[s]=c,n-=1;continue}i(s,e.resolve(c),r)}return 0===n&&r.resolve(o),r},e.hash=function(t){var r={},n=[],o=function(e){if(t.hasOwnProperty(e)){var o=t[e];a(o)?n.push(o.then(function(t){r[e]=t})):r[e]=o}};for(var i in t)o(i);return e.all(n).then(function(){return r})},e.map=function(t,r){return e.all(t.map(r))},e.onPossiblyUnhandledException=function(e){return l.push(e),{cancel:function(){l.splice(l.indexOf(e),1)}}},e.try=function(t,r,n){var o;if(t&&"function"!=typeof t&&!t.call)throw Error("Promise.try expected a function");d+=1;try{o=t.apply(r,n||[])}catch(t){return f(),e.reject(t)}return f(),e.resolve(o)},e.delay=function(t){return new e(function(e){setTimeout(e,t)})},e.isPromise=function(t){return!!(t&&t instanceof e)||a(t)},e.flush=function(){var t;return t=s=s||new e,u(),t},e}();function h(e){return"[object RegExp]"===({}).toString.call(e)}var g={IFRAME:"iframe",POPUP:"popup"},m="Call was rejected by callee.\r\n";function y(e){return void 0===e&&(e=window),e.location.protocol}function v(e){if(void 0===e&&(e=window),e.mockDomain){var t=e.mockDomain.split("//")[0];if(t)return t}return y(e)}function b(e){return void 0===e&&(e=window),"about:"===v(e)}function w(e){if(void 0===e&&(e=window),e)try{if(e.parent&&e.parent!==e)return e.parent}catch(e){}}function x(e){if(void 0===e&&(e=window),e&&!w(e))try{return e.opener}catch(e){}}function _(e){try{return!0}catch(e){}return!1}function E(e){void 0===e&&(e=window);var t=e.location;if(!t)throw Error("Can not read window location");var r=y(e);if(!r)throw Error("Can not read window protocol");if("file:"===r)return"file://";if("about:"===r){var n=w(e);return n&&_()?E(n):"about://"}var o=t.host;if(!o)throw Error("Can not read window host");return r+"//"+o}function C(e){void 0===e&&(e=window);var t=E(e);return t&&e.mockDomain&&0===e.mockDomain.indexOf("mock:")?e.mockDomain:t}function A(e){if(!function(e){try{if(e===window)return!0}catch(e){}try{var t,r=Object.getOwnPropertyDescriptor(e,"location");if(r&&!1===r.enumerable)return!1}catch(e){}try{if(b(e)&&_())return!0}catch(e){}try{if(t=e,void 0===t&&(t=window),"mock:"===v(t)&&_())return!0}catch(e){}try{if(E(e)===E(window))return!0}catch(e){}return!1}(e))return!1;try{if(e===window||b(e)&&_()||C(window)===C(e))return!0}catch(e){}return!1}function k(e){if(!A(e))throw Error("Expected window to be same domain");return e}function $(e,t){if(!e||!t)return!1;var r=w(t);return r?r===e:-1!==(function(e){var t=[];try{for(;e.parent!==e;)t.push(e.parent),e=e.parent}catch(e){}return t})(t).indexOf(e)}function O(e){var t,r,n=[];try{t=e.frames}catch(r){t=e}try{r=t.length}catch(e){}if(0===r)return n;if(r){for(var o=0;o<r;o++){var i=void 0;try{i=t[o]}catch(e){continue}n.push(i)}return n}for(var a=0;a<100;a++){var s=void 0;try{s=t[a]}catch(e){break}if(!s)break;n.push(s)}return n}function S(e){for(var t=[],r=0,n=O(e);r<n.length;r++){var o=n[r];t.push(o);for(var i=0,a=S(o);i<a.length;i++)t.push(a[i])}return t}function F(e){void 0===e&&(e=window);try{if(e.top)return e.top}catch(e){}if(w(e)===e)return e;try{if($(window,e)&&window.top)return window.top}catch(e){}try{if($(e,window)&&window.top)return window.top}catch(e){}for(var t=0,r=S(e);t<r.length;t++){var n=r[t];try{if(n.top)return n.top}catch(e){}if(w(n)===n)return n}}function R(e){var t=F(e);if(!t)throw Error("Can not determine top window");var r=[].concat(S(t),[t]);return -1===r.indexOf(e)&&(r=[].concat(r,[e],S(e))),r}var D=[],N=[];function P(e,t){void 0===t&&(t=!0);try{if(e===window)return!1}catch(e){return!0}try{if(!e)return!0}catch(e){return!0}try{if(e.closed)return!0}catch(e){return!e||e.message!==m}if(t&&A(e))try{if(e.mockclosed)return!0}catch(e){}try{if(!e.parent||!e.top)return!0}catch(e){}var r=function(e,t){for(var r=0;r<e.length;r++)try{if(e[r]===t)return r}catch(e){}return -1}(D,e);if(-1!==r){var n=N[r];if(n&&function(e){if(!e.contentWindow||!e.parentNode)return!0;var t=e.ownerDocument;if(t&&t.documentElement&&!t.documentElement.contains(e)){for(var r=e;r.parentNode&&r.parentNode!==r;)r=r.parentNode;if(!r.host||!t.documentElement.contains(r.host))return!0}return!1}(n))return!0}return!1}function T(e){return(e=e||window).navigator.mockUserAgent||e.navigator.userAgent}function j(e,t){for(var r=O(e),n=0;n<r.length;n++){var o=r[n];try{if(A(o)&&o.name===t&&-1!==r.indexOf(o))return o}catch(e){}}try{if(-1!==r.indexOf(e.frames[t]))return e.frames[t]}catch(e){}try{if(-1!==r.indexOf(e[t]))return e[t]}catch(e){}}function I(e){return void 0===e&&(e=window),x(e=e||window)||w(e)||void 0}function L(e,t){for(var r=0;r<e.length;r++)for(var n=e[r],o=0;o<t.length;o++)if(n===t[o])return!0;return!1}function z(e){void 0===e&&(e=window);for(var t=0,r=e;r;)(r=w(r))&&(t+=1);return t}function W(e,t){var r=F(e)||e,n=F(t)||t;try{if(r&&n)return r===n}catch(e){}var o=R(e),i=R(t);if(L(o,i))return!0;var a=x(r),s=x(n);return a&&L(R(a),i)||s&&L(R(s),o),!1}function M(e,t){if("string"==typeof e){if("string"==typeof t)return"*"===e||t===e;if(h(t)||Array.isArray(t))return!1}return h(e)?h(t)?e.toString()===t.toString():!Array.isArray(t)&&!!t.match(e):!!Array.isArray(e)&&(Array.isArray(t)?JSON.stringify(e)===JSON.stringify(t):!h(t)&&e.some(function(e){return M(e,t)}))}function Y(e){return e.match(/^(https?|mock|file):\/\//)?e.split("/").slice(0,3).join("/"):C()}function B(e,t,r,n){var o;return void 0===r&&(r=1e3),void 0===n&&(n=1/0),function i(){if(P(e))return o&&clearTimeout(o),t();n<=0?clearTimeout(o):(n-=r,o=setTimeout(i,r))}(),{cancel:function(){o&&clearTimeout(o)}}}function U(e){try{if(e===window)return!0}catch(e){if(e&&e.message===m)return!0}try{if("[object Window]"===({}).toString.call(e))return!0}catch(e){if(e&&e.message===m)return!0}try{if(window.Window&&e instanceof window.Window)return!0}catch(e){if(e&&e.message===m)return!0}try{if(e&&e.self===e)return!0}catch(e){if(e&&e.message===m)return!0}try{if(e&&e.parent===e)return!0}catch(e){if(e&&e.message===m)return!0}try{if(e&&e.top===e)return!0}catch(e){if(e&&e.message===m)return!0}try{if(e&&"__unlikely_value__"===e.__cross_domain_utils_window_check__)return!1}catch(e){return!0}try{if("postMessage"in e&&"self"in e&&"location"in e)return!0}catch(e){}return!1}function H(e){if(0!==Y(e).indexOf("mock:"))return e;throw Error("Mock urls not supported out of test mode")}function V(e){if(A(e))return k(e).frameElement;for(var t=0,r=document.querySelectorAll("iframe");t<r.length;t++){var n=r[t];if(n&&n.contentWindow&&n.contentWindow===e)return n}}function q(e){var t;if(void 0===(t=e)&&(t=window),w(t)){var r=V(e);if(r&&r.parentElement)return void r.parentElement.removeChild(r)}try{e.close()}catch(e){}}function X(e,t){for(var r=0;r<e.length;r++)try{if(e[r]===t)return r}catch(e){}return -1}var J,G=function(){function e(){if(this.name=void 0,this.weakmap=void 0,this.keys=void 0,this.values=void 0,this.name="__weakmap_"+(1e9*Math.random()>>>0)+"__",function(){if("u"<typeof WeakMap||void 0===Object.freeze)return!1;try{var e=new WeakMap,t={};return Object.freeze(t),e.set(t,"__testvalue__"),"__testvalue__"===e.get(t)}catch(e){return!1}}())try{this.weakmap=new WeakMap}catch(e){}this.keys=[],this.values=[]}var t=e.prototype;return t._cleanupClosedWindows=function(){for(var e=this.weakmap,t=this.keys,r=0;r<t.length;r++){var n=t[r];if(U(n)&&P(n)){if(e)try{e.delete(n)}catch(e){}t.splice(r,1),this.values.splice(r,1),r-=1}}},t.isSafeToReadWrite=function(e){return!U(e)},t.set=function(e,t){if(!e)throw Error("WeakMap expected key");var r=this.weakmap;if(r)try{r.set(e,t)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var n=this.name,o=e[n];return void(o&&o[0]===e?o[1]=t:Object.defineProperty(e,n,{value:[e,t],writable:!0}))}catch(e){}this._cleanupClosedWindows();var i=this.keys,a=this.values,s=X(i,e);-1===s?(i.push(e),a.push(t)):a[s]=t},t.get=function(e){if(!e)throw Error("WeakMap expected key");var t=this.weakmap;if(t)try{if(t.has(e))return t.get(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];return r&&r[0]===e?r[1]:void 0}catch(e){}this._cleanupClosedWindows();var n=X(this.keys,e);if(-1!==n)return this.values[n]},t.delete=function(e){if(!e)throw Error("WeakMap expected key");var t=this.weakmap;if(t)try{t.delete(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];r&&r[0]===e&&(r[0]=r[1]=void 0)}catch(e){}this._cleanupClosedWindows();var n=this.keys,o=X(n,e);-1!==o&&(n.splice(o,1),this.values.splice(o,1))},t.has=function(e){if(!e)throw Error("WeakMap expected key");var t=this.weakmap;if(t)try{if(t.has(e))return!0}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];return!(!r||r[0]!==e)}catch(e){}return this._cleanupClosedWindows(),-1!==X(this.keys,e)},t.getOrSet=function(e,t){if(this.has(e))return this.get(e);var r=t();return this.set(e,r),r},e}();function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t,r){return(K=!function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i}:Reflect.construct).apply(null,arguments)}function Q(e){var t="function"==typeof Map?new Map:void 0;return(Q=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return K(e,arguments,Z(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),n(r,e)})(e)}function ee(e){return e.name||e.__name__||e.displayName||"anonymous"}function et(e,t){try{delete e.name,e.name=t}catch(e){}return e.__name__=e.displayName=t,e}function er(e){if("function"==typeof btoa)return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode(parseInt(t,16))})).replace(/[=]/g,"");if("u">typeof Buffer)return Buffer.from(e,"utf8").toString("base64").replace(/[=]/g,"");throw Error("Can not find window.btoa or Buffer")}function en(){var e="0123456789abcdef";return"uid_"+"xxxxxxxxxx".replace(/./g,function(){return e.charAt(Math.floor(Math.random()*e.length))})+"_"+er((new Date).toISOString().slice(11,19).replace("T",".")).replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}function eo(e){try{return JSON.stringify([].slice.call(e),function(e,t){return"function"==typeof t?"memoize["+function(e){if(J=J||new G,null==e||"object"!=typeof e&&"function"!=typeof e)throw Error("Invalid object");var t=J.get(e);return t||(t=typeof e+":"+en(),J.set(e,t)),t}(t)+"]":t})}catch(e){throw Error("Arguments not serializable -- can not be used to memoize")}}function ei(){return{}}var ea=0,es=0;function ec(e,t){void 0===t&&(t={});var r,n,o=t.thisNamespace,i=void 0!==o&&o,a=t.time,s=ea;ea+=1;var c=function(){for(var t,o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];s<es&&(r=null,n=null,s=ea,ea+=1),t=i?(n=n||new G).getOrSet(this,ei):r=r||{};var d=eo(c),u=t[d];if(u&&a&&Date.now()-u.time<a&&(delete t[d],u=null),u)return u.value;var f=Date.now(),p=e.apply(this,arguments);return t[d]={time:f,value:p},p};return c.reset=function(){r=null,n=null},et(c,(t.name||ee(e))+"::memoized")}function el(){}function ed(e){var t=!1;return et(function(){if(!t)return t=!0,e.apply(this,arguments)},ee(e)+"::once")}function eu(e,t){if(void 0===t&&(t=1),t>=3)return"stringifyError stack overflow";try{if(!e)return"<unknown error: "+({}).toString.call(e)+">";if("string"==typeof e)return e;if(e instanceof Error){var r=e&&e.stack,n=e&&e.message;if(r&&n)return -1!==r.indexOf(n)?r:n+"\n"+r;if(r)return r;if(n)return n}return e&&e.toString&&"function"==typeof e.toString?e.toString():({}).toString.call(e)}catch(e){return"Error while stringifying error: "+eu(e,t+1)}}function ef(e){return"string"==typeof e?e:e&&e.toString&&"function"==typeof e.toString?e.toString():({}).toString.call(e)}function ep(e,t){if(!t)return e;if(Object.assign)return Object.assign(e,t);for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function eh(e,t){var r;return function n(){r=setTimeout(function(){e(),n()},t)}(),{cancel:function(){clearTimeout(r)}}}function eg(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}function em(e,t,r){if(Array.isArray(e)){if("number"!=typeof t)throw TypeError("Array key must be number")}else if("object"==typeof e&&null!==e&&"string"!=typeof t)throw TypeError("Object key must be string");Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){delete e[t];var n=r();return e[t]=n,n},set:function(r){delete e[t],e[t]=r}})}function ey(e){return[].slice.call(e)}function ev(e){return"object"==typeof e&&null!==e&&"[object Object]"===({}).toString.call(e)}function eb(e){if(!ev(e))return!1;var t=e.constructor;if("function"!=typeof t)return!1;var r=t.prototype;return!!ev(r)&&!!r.hasOwnProperty("isPrototypeOf")}function ew(e,t,r){if(void 0===r&&(r=""),Array.isArray(e)){for(var n=e.length,o=[],i=function(n){em(o,n,function(){var o=r?r+"."+n:""+n,i=t(e[n],n,o);return(eb(i)||Array.isArray(i))&&(i=ew(i,t,o)),i})},a=0;a<n;a++)i(a);return o}if(eb(e)){var s={},c=function(n){if(!e.hasOwnProperty(n))return"continue";em(s,n,function(){var o=r?r+"."+n:""+n,i=t(e[n],n,o);return(eb(i)||Array.isArray(i))&&(i=ew(i,t,o)),i})};for(var l in e)c(l);return s}throw Error("Pass an object or array")}function ex(e){return null!=e}function e_(e){return"[object RegExp]"===({}).toString.call(e)}function eE(e,t,r){if(e.hasOwnProperty(t))return e[t];var n=r();return e[t]=n,n}function eC(e){var t,r=[],n=!1,o={set:function(t,r){return n||(e[t]=r,o.register(function(){delete e[t]})),r},register:function(e){var o=ed(function(){return e(t)});return n?e(t):r.push(o),{cancel:function(){var e=r.indexOf(o);-1!==e&&r.splice(e,1)}}},all:function(e){t=e;var o=[];for(n=!0;r.length;){var i=r.shift();o.push(i())}return p.all(o).then(el)}};return o}function eA(e,t){if(null==t)throw Error("Expected "+e+" to be present");return t}ec.clear=function(){es=ea},ec(function(e){if(Object.values)return Object.values(e);var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t});var ek=function(e){function t(t){var r;return(r=e.call(this,t)||this).name=r.constructor.name,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r),r.constructor):r.stack=Error(t).stack,r}return o(t,e),t}(Q(Error));function e$(){var e=document.body;if(!e)throw Error("Body element not found");return e}function eO(){return!!document.body&&"complete"===document.readyState}function eS(){return!!document.body&&"interactive"===document.readyState}function eF(e){return encodeURIComponent(e)}function eR(e,t){var r;return void 0===t&&(t={}),t&&Object.keys(t).length?(void 0===(r=i({},function e(t){var r,n,o,i;return r=e,n=[t],o=r.__inline_memoize_cache__=r.__inline_memoize_cache__||{},i=eo(n),o.hasOwnProperty(i)?o[i]:o[i]=(function(){var e={};if(!t||-1===t.indexOf("="))return e;for(var r=0,n=t.split("&");r<n.length;r++){var o=n[r];(o=o.split("="))[0]&&o[1]&&(e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]))}return e}).apply(void 0,n)}(e),t))&&(r={}),Object.keys(r).filter(function(e){return"string"==typeof r[e]||"boolean"==typeof r[e]}).map(function(e){var t=r[e];if("string"!=typeof t&&"boolean"!=typeof t)throw TypeError("Invalid type for query");return eF(e)+"="+eF(t.toString())}).join("&")):e}function eD(e){return e instanceof window.Element||null!==e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}function eN(e,t){return void 0===t&&(t=document),eD(e)?e:"string"==typeof e?t.querySelector(e):void 0}function eP(e){return new p(function(t,r){var n=ef(e),o=eN(e);if(o)return t(o);if(eO())return r(Error("Document is ready and element "+n+" does not exist"));var i=setInterval(function(){return(o=eN(e))?(t(o),void clearInterval(i)):eO()?(clearInterval(i),r(Error("Document is ready and element "+n+" does not exist"))):void 0},10)})}ec(function(){return new p(function(e){if(eO()||eS())return e();var t=setInterval(function(){if(eO()||eS())return clearInterval(t),e()},10)})});var eT,ej=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(ek);function eI(e){if((eT=eT||new G).has(e)){var t=eT.get(e);if(t)return t}var r=new p(function(t,r){e.addEventListener("load",function(){(function(e){if(function(){for(var e=0;e<D.length;e++){var t=!1;try{t=D[e].closed}catch(e){}t&&(N.splice(e,1),D.splice(e,1))}}(),e&&e.contentWindow)try{D.push(e.contentWindow),N.push(e)}catch(e){}})(e),t(e)}),e.addEventListener("error",function(n){e.contentWindow?t(e):r(n)})});return eT.set(e,r),r}function eL(e){return eI(e).then(function(e){if(!e.contentWindow)throw Error("Could not find window in iframe");return e.contentWindow})}function ez(e,t){void 0===e&&(e={});var r=e.style||{},n=function(e,t,r){void 0===e&&(e="div"),void 0===t&&(t={}),e=e.toLowerCase();var n,o,i=document.createElement(e);if(t.style&&ep(i.style,t.style),t.class&&(i.className=t.class.join(" ")),t.id&&i.setAttribute("id",t.id),t.attributes)for(var a=0,s=Object.keys(t.attributes);a<s.length;a++){var c=s[a];i.setAttribute(c,t.attributes[c])}if(t.styleSheet&&(n=t.styleSheet,void 0===o&&(o=window.document),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(o.createTextNode(n))),t.html){if("iframe"===e)throw Error("Iframe html can not be written unless container provided and iframe in DOM");i.innerHTML=t.html}return i}("iframe",{attributes:i({allowTransparency:"true"},e.attributes||{}),style:i({backgroundColor:"transparent",border:"none"},r),html:e.html,class:e.class}),o=window.navigator.userAgent.match(/MSIE|Edge/i);return n.hasAttribute("id")||n.setAttribute("id",en()),eI(n),t&&(function(e,t){void 0===t&&(t=document);var r=eN(e,t);if(r)return r;throw Error("Can not find element: "+ef(e))})(t).appendChild(n),(e.url||o)&&n.setAttribute("src",e.url||"about:blank"),n}function eW(e,t,r){return e.addEventListener(t,r),{cancel:function(){e.removeEventListener(t,r)}}}function eM(e){e.style.setProperty("display","")}function eY(e){e.style.setProperty("display","none","important")}function eB(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function eU(e){return!(e&&e.parentNode&&e.ownerDocument&&e.ownerDocument.documentElement&&e.ownerDocument.documentElement.contains(e))}function eH(e,t,r){var n=void 0===r?{}:r,o=n.width,i=void 0===o||o,a=n.height,s=void 0===a||a,c=n.interval,l=void 0===c?100:c,d=n.win,u=void 0===d?window:d,f=e.offsetWidth,p=e.offsetHeight,h=!1;t({width:f,height:p});var g,m,y=function(){if(!h&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)){var r=e.offsetWidth,n=e.offsetHeight;(i&&r!==f||s&&n!==p)&&t({width:r,height:n}),f=r,p=n}};return u.addEventListener("resize",y),void 0!==u.ResizeObserver?((g=new u.ResizeObserver(y)).observe(e),m=eh(y,10*l)):void 0!==u.MutationObserver?((g=new u.MutationObserver(y)).observe(e,{attributes:!0,childList:!0,subtree:!0,characterData:!1}),m=eh(y,10*l)):m=eh(y,l),{cancel:function(){h=!0,g.disconnect(),window.removeEventListener("resize",y),m.cancel()}}}function eV(e){for(;e.parentNode;)e=e.parentNode;return"[object ShadowRoot]"===e.toString()}var eq="u">typeof document?document.currentScript:null,eX=ec(function(){if(eq||(eq=function(){try{var e=function(){try{throw Error("_")}catch(e){return e.stack||""}}(),t=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),r=t&&t[1];if(!r)return;for(var n=0,o=[].slice.call(document.getElementsByTagName("script")).reverse();n<o.length;n++){var i=o[n];if(i.src&&i.src===r)return i}}catch(e){}}()))return eq;throw Error("Can not determine current script")}),eJ=en();function eG(e){return"string"==typeof e&&/^[0-9]+%$/.test(e)}function eZ(e){if("number"==typeof e)return e;var t=e.match(/^([0-9]+)(px|%)$/);if(!t)throw Error("Could not match css value from "+e);return parseInt(t[1],10)}function eK(e){return"number"==typeof e?eZ(e)+"px":eG(e)?e:eZ(e)+"px"}function eQ(e,t){if("number"==typeof e)return e;if(eG(e))return parseInt(t*eZ(e)/100,10);if("string"==typeof e&&/^[0-9]+px$/.test(e))return eZ(e);throw Error("Can not normalize dimension: "+e)}function e0(e){void 0===e&&(e=window);var t="__post_robot_10_0_44__";return e!==window?e[t]:e[t]=e[t]||{}}ec(function(){try{e=eX()}catch(e){return eJ}var e,t=e.getAttribute("data-uid");if(t&&"string"==typeof t||(t=e.getAttribute("data-uid-auto"))&&"string"==typeof t)return t;if(e.src){var r=function(e){for(var t="",r=0;r<e.length;r++){var n=e[r].charCodeAt(0)*r;e[r+1]&&(n+=e[r+1].charCodeAt(0)*(r-1)),t+=String.fromCharCode(97+Math.abs(n)%26)}return t}(JSON.stringify({src:e.src,dataset:e.dataset}));t="uid_"+r.slice(r.length-30)}else t=en();return e.setAttribute("data-uid-auto",t),t});var e1=function(){return{}};function e2(e,t){return void 0===e&&(e="store"),void 0===t&&(t=e1),eE(e0(),e,function(){var e=t();return{has:function(t){return e.hasOwnProperty(t)},get:function(t,r){return e.hasOwnProperty(t)?e[t]:r},set:function(t,r){return e[t]=r,r},del:function(t){delete e[t]},getOrSet:function(t,r){return eE(e,t,r)},reset:function(){e=t()},keys:function(){return Object.keys(e)}}})}var e4,e5=function(){};function e6(){var e=e0();return e.WINDOW_WILDCARD=e.WINDOW_WILDCARD||new e5,e.WINDOW_WILDCARD}function e8(e,t){return void 0===e&&(e="store"),void 0===t&&(t=e1),e2("windowStore").getOrSet(e,function(){var r=new G,n=function(e){return r.getOrSet(e,t)};return{has:function(t){return n(t).hasOwnProperty(e)},get:function(t,r){var o=n(t);return o.hasOwnProperty(e)?o[e]:r},set:function(t,r){return n(t)[e]=r,r},del:function(t){delete n(t)[e]},getOrSet:function(t,r){return eE(n(t),e,r)}}})}function e3(){return e2("instance").getOrSet("instanceID",en)}function e9(e,t){var r=t.domain,n=e8("helloPromises"),o=n.get(e);o&&o.resolve({domain:r});var i=p.resolve({domain:r});return n.set(e,i),i}function e7(e,t){return(0,t.send)(e,"postrobot_hello",{instanceID:e3()},{domain:"*",timeout:-1}).then(function(t){var r=t.origin,n=t.data.instanceID;return e9(e,{domain:r}),{win:e,domain:r,instanceID:n}})}function te(e,t){var r=t.send;return e8("windowInstanceIDPromises").getOrSet(e,function(){return e7(e,{send:r}).then(function(e){return e.instanceID})})}function tt(e,t,r){void 0===t&&(t=5e3),void 0===r&&(r="Window");var n=e8("helloPromises").getOrSet(e,function(){return new p});return -1!==t&&(n=n.timeout(t,Error(r+" did not load after "+t+"ms"))),n}function tr(e){e8("knownWindows").set(e,!0)}function tn(e){return"object"==typeof e&&null!==e&&"string"==typeof e.__type__}function to(e){return void 0===e?"undefined":null===e?"null":Array.isArray(e)?"array":"function"==typeof e?"function":"object"==typeof e?e instanceof Error?"error":"function"==typeof e.then?"promise":"[object RegExp]"===({}).toString.call(e)?"regex":"[object Date]"===({}).toString.call(e)?"date":"object":"string"==typeof e?"string":"number"==typeof e?"number":"boolean"==typeof e?"boolean":void 0}function ti(e,t){return{__type__:e,__val__:t}}var ta,ts=((e4={}).function=function(){},e4.error=function(e){return ti("error",{message:e.message,stack:e.stack,code:e.code,data:e.data})},e4.promise=function(){},e4.regex=function(e){return ti("regex",e.source)},e4.date=function(e){return ti("date",e.toJSON())},e4.array=function(e){return e},e4.object=function(e){return e},e4.string=function(e){return e},e4.number=function(e){return e},e4.boolean=function(e){return e},e4.null=function(e){return e},e4[void 0]=function(e){return ti("undefined",e)},e4),tc={},tl=((ta={}).function=function(){throw Error("Function serialization is not implemented; nothing to deserialize")},ta.error=function(e){var t=e.stack,r=e.code,n=e.data,o=Error(e.message);return o.code=r,n&&(o.data=n),o.stack=t+"\n\n"+o.stack,o},ta.promise=function(){throw Error("Promise serialization is not implemented; nothing to deserialize")},ta.regex=function(e){return new RegExp(e)},ta.date=function(e){return new Date(e)},ta.array=function(e){return e},ta.object=function(e){return e},ta.string=function(e){return e},ta.number=function(e){return e},ta.boolean=function(e){return e},ta.null=function(e){return e},ta[void 0]=function(){},ta),td={};function tu(){return!!T(window).match(/MSIE|trident|edge\/12|edge\/13/i)}function tf(e){return!W(window,e)}function tp(e,t){if(e){if(C()!==Y(e))return!0}else if(t&&!A(t))return!0;return!1}function th(e){var t=e.win,r=e.domain;return!(!tu()||r&&!tp(r,t)||t&&!tf(t))}function tg(e){return"__postrobot_bridge___"+(e=e||Y(e)).replace(/[^a-zA-Z0-9]+/g,"_")}function tm(){return!!(window.name&&window.name===tg(C()))}var ty=new p(function(e){if(window.document&&window.document.body)return e(window.document.body);var t=setInterval(function(){if(window.document&&window.document.body)return clearInterval(t),e(window.document.body)},10)});function tv(e){e8("remoteWindowPromises").getOrSet(e,function(){return new p})}function tb(e){var t=e8("remoteWindowPromises").get(e);if(!t)throw Error("Remote window promise not found");return t}function tw(e,t,r){tb(e).resolve(function(n,o,i){if(n!==e)throw Error("Remote window does not match window");if(!M(o,t))throw Error("Remote domain "+o+" does not match domain "+t);r.fireAndForget(i)})}function tx(e,t){tb(e).reject(t).catch(el)}function t_(e){for(var t=e.win,r=e.name,n=e.domain,o=e2("popupWindowsByName"),i=e8("popupWindowsByWin"),a=0,s=o.keys();a<s.length;a++){var c=s[a],l=o.get(c);l&&!P(l.win)||o.del(c)}if(P(t))return{win:t,name:r,domain:n};var d=i.getOrSet(t,function(){return r?o.getOrSet(r,function(){return{win:t,name:r}}):{win:t}});if(d.win&&d.win!==t)throw Error("Different window already linked for window: "+(r||"undefined"));return r&&(d.name=r,o.set(r,d)),n&&(d.domain=n,tv(t)),i.set(t,d),d}function tE(e){var t,r,n,o,i,a,s,c,l,d,u=e.on,f=e.send,h=e.receiveMessage;d=window.open,window.open=function(e,t,r,n){var o=d.call(this,H(e),t,r,n);return o&&t_({win:o,name:t,domain:e?Y(e):null}),o},r=(t={on:u,send:f,receiveMessage:h}).on,n=t.send,o=t.receiveMessage,i=e2("popupWindowsByName"),r("postrobot_open_tunnel",function(e){var t=e.source,a=e.origin,s=e.data,c=e2("bridges").get(a);if(!c)throw Error("Can not find bridge promise for domain "+a);return c.then(function(e){if(t!==e)throw Error("Message source does not matched registered bridge for domain "+a);if(!s.name)throw Error("Register window expected to be passed window name");if(!s.sendMessage)throw Error("Register window expected to be passed sendMessage method");if(!i.has(s.name))throw Error("Window with name "+s.name+" does not exist, or was not opened by this window");var c=function(){return i.get(s.name)};if(!c().domain)throw Error("We do not have a registered domain for window "+s.name);if(c().domain!==a)throw Error("Message origin "+a+" does not matched registered window origin "+(c().domain||"unknown"));return tw(c().win,a,s.sendMessage),{sendMessage:function(e){if(window&&!window.closed&&c()){var t=c().domain;if(t)try{o({data:e,origin:t,source:c().win},{on:r,send:n})}catch(e){p.reject(e)}}}}})}),e0(window).openTunnelToParent=function(e){var t=e.name,r=e.source,n=e.canary,o=e.sendMessage,i=e2("tunnelWindows"),a=w(window);if(!a)throw Error("No parent window found to open tunnel to");var s=function(e){for(var t=e.name,r=e.source,n=e.canary,o=e.sendMessage,i=e2("tunnelWindows"),a=0,s=i.keys();a<s.length;a++){var c=s[a];P(i[c].source)&&i.del(c)}var l=en();return e2("tunnelWindows").set(l,{name:t,source:r,canary:n,sendMessage:o}),l}({name:t,source:r,canary:n,sendMessage:o});return f(a,"postrobot_open_tunnel",{name:t,sendMessage:function(){var e=i.get(s);if(e&&e.source&&!P(e.source)){try{e.canary()}catch(e){return}e.sendMessage.apply(this,arguments)}}},{domain:"*"})},s=(a={on:u,send:f,receiveMessage:h}).on,c=a.send,l=a.receiveMessage,p.try(function(){var e=x(window);if(e&&th({win:e}))return tv(e),e8("remoteBridgeAwaiters").getOrSet(e,function(){return p.try(function(){var t=j(e,tg(C()));if(t)return A(t)&&e0(k(t))?t:new p(function(e){var r,n;r=setInterval(function(){if(t&&A(t)&&e0(k(t)))return clearInterval(r),clearTimeout(n),e(t)},100),n=setTimeout(function(){return clearInterval(r),e()},2e3)})})}).then(function(t){return t?window.name?e0(k(t)).openTunnelToParent({name:window.name,source:window,canary:function(){},sendMessage:function(e){try{window}catch(e){return}if(window&&!window.closed)try{l({data:e,origin:this.origin,source:this.source},{on:s,send:c})}catch(e){p.reject(e)}}}).then(function(t){var r=t.source,n=t.origin,o=t.data;if(r!==e)throw Error("Source does not match opener");tw(r,n,o.sendMessage)}).catch(function(t){throw tx(e,t),t}):tx(e,Error("Can not register with opener: window does not have a name")):tx(e,Error("Can not register with opener: no bridge found in opener"))})})}function tC(){for(var e=e2("idToProxyWindow"),t=0,r=e.keys();t<r.length;t++){var n=r[t];e.get(n).shouldClean()&&e.del(n)}}function tA(e,t){var r=t.send,n=t.id,o=void 0===n?en():n,i=e.then(function(e){if(A(e))return k(e).name}),a=e.then(function(e){if(P(e))throw Error("Window is closed, can not determine type");return x(e)?g.POPUP:g.IFRAME});i.catch(el),a.catch(el);var s=function(){return e.then(function(e){if(!P(e))return A(e)?k(e).name:i})};return{id:o,getType:function(){return a},getInstanceID:function(e){var t={};function r(){for(var r=arguments,n=this,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=eo(i);return t.hasOwnProperty(s)||(t[s]=p.try(function(){return e.apply(n,r)}).finally(function(){delete t[s]})),t[s]}return r.reset=function(){t={}},et(r,ee(e)+"::promiseMemoized")}(function(){return e.then(function(e){return te(e,{send:r})})}),close:function(){return e.then(q)},getName:s,focus:function(){return e.then(function(e){e.focus()})},isClosed:function(){return e.then(function(e){return P(e)})},setLocation:function(t,r){return void 0===r&&(r={}),e.then(function(e){var n=window.location.protocol+"//"+window.location.host,o=r.method,i=void 0===o?"get":o,a=r.body;if(0===t.indexOf("/"))t=""+n+t;else if(!t.match(/^https?:\/\//)&&0!==t.indexOf(n))throw Error("Expected url to be http or https url, or absolute path, got "+JSON.stringify(t));if("post"===i)return s().then(function(e){if(!e)throw Error("Can not post to window without target name");!function(e){var t=e.url,r=e.target,n=e.body,o=e.method,i=document.createElement("form");if(i.setAttribute("target",r),i.setAttribute("method",void 0===o?"post":o),i.setAttribute("action",t),i.style.display="none",n)for(var a=0,s=Object.keys(n);a<s.length;a++){var c,l=s[a],d=document.createElement("input");d.setAttribute("name",l),d.setAttribute("value",null==(c=n[l])?void 0:c.toString()),i.appendChild(d)}e$().appendChild(i),i.submit(),e$().removeChild(i)}({url:t,target:e,method:i,body:a})});if("get"!==i)throw Error("Unsupported method: "+i);if(A(e))try{if(e.location&&"function"==typeof e.location.replace)return void e.location.replace(t)}catch(e){}e.location=t})},setName:function(t){return e.then(function(e){t_({win:e,name:t});var r=A(e),n=V(e);if(!r)throw Error("Can not set name for cross-domain window: "+t);k(e).name=t,n&&n.setAttribute("name",t),i=p.resolve(t)})}}}var tk=function(){function e(e){var t=e.send,r=e.win,n=e.serializedWindow;this.id=void 0,this.isProxyWindow=!0,this.serializedWindow=void 0,this.actualWindow=void 0,this.actualWindowPromise=void 0,this.send=void 0,this.name=void 0,this.actualWindowPromise=new p,this.serializedWindow=n||tA(this.actualWindowPromise,{send:t}),e2("idToProxyWindow").set(this.getID(),this),r&&this.setWindow(r,{send:t})}var t=e.prototype;return t.getID=function(){return this.serializedWindow.id},t.getType=function(){return this.serializedWindow.getType()},t.isPopup=function(){return this.getType().then(function(e){return e===g.POPUP})},t.setLocation=function(e,t){var r=this;return this.serializedWindow.setLocation(e,t).then(function(){return r})},t.getName=function(){return this.serializedWindow.getName()},t.setName=function(e){var t=this;return this.serializedWindow.setName(e).then(function(){return t})},t.close=function(){var e=this;return this.serializedWindow.close().then(function(){return e})},t.focus=function(){var e=this,t=this.isPopup(),r=this.getName(),n=p.hash({isPopup:t,name:r}).then(function(e){var t=e.name;e.isPopup&&t&&window.open("",t)}),o=this.serializedWindow.focus();return p.all([n,o]).then(function(){return e})},t.isClosed=function(){return this.serializedWindow.isClosed()},t.getWindow=function(){return this.actualWindow},t.setWindow=function(e,t){var r=t.send;this.actualWindow=e,this.actualWindowPromise.resolve(this.actualWindow),this.serializedWindow=tA(this.actualWindowPromise,{send:r,id:this.getID()}),e8("winToProxyWindow").set(e,this)},t.awaitWindow=function(){return this.actualWindowPromise},t.matchWindow=function(e,t){var r=this,n=t.send;return p.try(function(){return r.actualWindow?e===r.actualWindow:p.hash({proxyInstanceID:r.getInstanceID(),knownWindowInstanceID:te(e,{send:n})}).then(function(t){var o=t.proxyInstanceID===t.knownWindowInstanceID;return o&&r.setWindow(e,{send:n}),o})})},t.unwrap=function(){return this.actualWindow||this},t.getInstanceID=function(){return this.serializedWindow.getInstanceID()},t.shouldClean=function(){return!!(this.actualWindow&&P(this.actualWindow))},t.serialize=function(){return this.serializedWindow},e.unwrap=function(t){return e.isProxyWindow(t)?t.unwrap():t},e.serialize=function(t,r){var n=r.send;return tC(),e.toProxyWindow(t,{send:n}).serialize()},e.deserialize=function(t,r){var n=r.send;return tC(),e2("idToProxyWindow").get(t.id)||new e({serializedWindow:t,send:n})},e.isProxyWindow=function(e){return!!(e&&!U(e)&&e.isProxyWindow)},e.toProxyWindow=function(t,r){var n=r.send;return(tC(),e.isProxyWindow(t))?t:e8("winToProxyWindow").get(t)||new e({win:t,send:n})},e}();function t$(e,t,r,n,o){var i=e8("methodStore"),a=e2("proxyWindowMethods");tk.isProxyWindow(n)?a.set(e,{val:t,name:r,domain:o,source:n}):(a.del(e),i.getOrSet(n,function(){return{}})[e]={domain:o,name:r,val:t,source:n})}function tO(e,t){var r=e8("methodStore"),n=e2("proxyWindowMethods");return r.getOrSet(e,function(){return{}})[t]||n.get(t)}function tS(e,t,r,n,o){a=(i={on:o.on,send:o.send}).on,s=i.send,e2("builtinListeners").getOrSet("functionCalls",function(){return a("postrobot_method",{domain:"*"},function(e){var t=e.source,r=e.origin,n=e.data,o=n.id,i=n.name,a=tO(t,o);if(!a)throw Error("Could not find method '"+i+"' with id: "+n.id+" in "+C(window));var c=a.source,l=a.domain,d=a.val;return p.try(function(){if(!M(l,r))throw Error("Method '"+n.name+"' domain "+JSON.stringify(e_(a.domain)?a.domain.source:a.domain)+" does not match origin "+r+" in "+C(window));if(tk.isProxyWindow(c))return c.matchWindow(t,{send:s}).then(function(e){if(!e)throw Error("Method call '"+n.name+"' failed - proxy window does not match source in "+C(window))})}).then(function(){return d.apply({source:t,origin:r},n.args)},function(e){return p.try(function(){if(d.onError)return d.onError(e)}).then(function(){var t;throw e.stack&&(e.stack="Remote call to "+i+"("+(void 0===(t=n.args)&&(t=[]),ey(t).map(function(e){return"string"==typeof e?"'"+e+"'":void 0===e?"undefined":null===e?"null":"boolean"==typeof e?e.toString():Array.isArray(e)?"[ ... ]":"object"==typeof e?"{ ... }":"function"==typeof e?"() => { ... }":"<"+typeof e+">"}).join(", ")+") failed\n\n")+e.stack),e})}).then(function(e){return{result:e,id:o,name:i}})})});var i,a,s,c=r.__id__||en();e=tk.unwrap(e);var l=r.__name__||r.name||n;return"string"==typeof l&&"function"==typeof l.indexOf&&0===l.indexOf("anonymous::")&&(l=l.replace("anonymous::",n+"::")),tk.isProxyWindow(e)?(t$(c,r,l,e,t),e.awaitWindow().then(function(e){t$(c,r,l,e,t)})):t$(c,r,l,e,t),ti("cross_domain_function",{id:c,name:l})}function tF(e,t,r,n){var o,i,a,s=n.on,c=n.send;return void 0===((a={}).promise=function(r,n){var o;return ti("cross_domain_zalgo_promise",{then:tS(e,t,function(e,t){return r.then(e,t)},n,{on:(o={on:s,send:c}).on,send:o.send})})},a.function=function(r,n){return tS(e,t,r,n,{on:s,send:c})},a.object=function(e){return U(e)||tk.isProxyWindow(e)?ti("cross_domain_window",tk.serialize(e,{send:c})):e},o=a)&&(o=tc),void 0===(i=JSON.stringify(r,function(e){var t=this[e];if(tn(this))return t;var r=to(t);if(!r)return t;var n=o[r]||ts[r];return n?n(t,e):t}))?"undefined":i}function tR(e,t,r,n){var o,i=n.send,a=((o={}).cross_domain_zalgo_promise=function(e){return new p(e.then)},o.cross_domain_function=function(r){var n,o,a,s,c,l;return n={send:i},o=r.id,a=r.name,s=n.send,(l=(c=function(r){function n(){var i=arguments;return tk.toProxyWindow(e,{send:s}).awaitWindow().then(function(e){var c=tO(e,o);if(c&&c.val!==n)return c.val.apply({source:window,origin:C()},i);var l=[].slice.call(i);return r.fireAndForget?s(e,"postrobot_method",{id:o,name:a,args:l},{domain:t,fireAndForget:!0}):s(e,"postrobot_method",{id:o,name:a,args:l},{domain:t,fireAndForget:!1}).then(function(e){return e.data.result})}).catch(function(e){throw e})}return void 0===r&&(r={}),n.__name__=a,n.__origin__=t,n.__source__=e,n.__id__=o,n.origin=t,n})()).fireAndForget=c({fireAndForget:!0}),l},o.cross_domain_window=function(e){return tk.deserialize(e,{send:i})},o);return(void 0===a&&(a=td),"undefined"!==r)?JSON.parse(r,function(e,t){if(tn(this))return t;if(tn(t)?(r=t.__type__,n=t.__val__):(r=to(t),n=t),!r)return n;var r,n,o=a[r]||tl[r];return o?o(n,e):n}):void 0}var tD={};function tN(e,t,r,n){var o=n.on,i=n.send;return p.try(function(){var n=e8().getOrSet(e,function(){return{}});return n.buffer=n.buffer||[],n.buffer.push(r),n.flush=n.flush||p.flush().then(function(){if(P(e))throw Error("Window is closed");var r,a=tF(e,t,((r={}).__post_robot_10_0_44__=n.buffer||[],r),{on:o,send:i});delete n.buffer;for(var s=Object.keys(tD),c=[],l=0;l<s.length;l++){var d=s[l];try{tD[d](e,a,t)}catch(e){c.push(e)}}if(c.length===s.length)throw Error("All post-robot messaging strategies failed:\n\n"+c.map(function(e,t){return t+". "+eu(e)}).join("\n\n"))}),n.flush.then(function(){delete n.flush})}).then(el)}function tP(e){return e2("responseListeners").get(e)}function tT(e){e2("responseListeners").del(e)}function tj(e){return e2("erroredResponseListeners").has(e)}function tI(e){var t=e.name,r=e.win,n=e.domain,o=e8("requestListeners");if("*"===r&&(r=null),"*"===n&&(n=null),!t)throw Error("Name required to get request listener");for(var i=0,a=[r,e6()];i<a.length;i++){var s=a[i];if(s){var c=o.get(s);if(c){var l=c[t];if(l){if(n&&"string"==typeof n){if(l[n])return l[n];if(l.__domain_regex__)for(var d=0,u=l.__domain_regex__;d<u.length;d++){var f=u[d],p=f.listener;if(M(f.regex,n))return p}}if(l["*"])return l["*"]}}}}}function tL(e,t){var r=t.on,n=t.send,o=e2("receivedMessages");try{if(!window||window.closed||!e.source)return}catch(e){return}var i=e.source,a=e.origin,s=function(e,t,r,n){var o,i=n.on,a=n.send;try{o=tR(t,r,e,{on:i,send:a})}catch(e){return}if(o&&"object"==typeof o&&null!==o){var s=o.__post_robot_10_0_44__;if(Array.isArray(s))return s}}(e.data,i,a,{on:r,send:n});if(s){tr(i);for(var c=0;c<s.length;c++){var l=s[c];if(o.has(l.id)||(o.set(l.id,!0),P(i)&&!l.fireAndForget))return;0===l.origin.indexOf("file:")&&(a="file://");try{"postrobot_message_request"===l.type?function(e,t,r,n){var o=n.on,i=n.send,a=tI({name:r.name,win:e,domain:t}),s="postrobot_method"===r.name&&r.data&&"string"==typeof r.data.name?r.data.name+"()":r.name;function c(n,a,c){return p.flush().then(function(){if(!r.fireAndForget&&!P(e))try{return tN(e,t,{id:en(),origin:C(window),type:"postrobot_message_response",hash:r.hash,name:r.name,ack:n,data:a,error:c},{on:o,send:i})}catch(e){throw Error("Send response message failed for "+s+" in "+C()+"\n\n"+eu(e))}})}p.all([p.flush().then(function(){if(!r.fireAndForget&&!P(e))try{return tN(e,t,{id:en(),origin:C(window),type:"postrobot_message_ack",hash:r.hash,name:r.name},{on:o,send:i})}catch(e){throw Error("Send ack message failed for "+s+" in "+C()+"\n\n"+eu(e))}}),p.try(function(){if(!a)throw Error("No handler found for post message: "+r.name+" from "+t+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);if(!M(a.domain,t))throw Error("Request origin "+t+" does not match domain "+a.domain.toString());return a.handler({source:e,origin:t,data:r.data})}).then(function(e){return c("success",e)},function(e){return c("error",null,e)})]).then(el).catch(function(e){if(a&&a.handleError)return a.handleError(e);throw e})}(i,a,l,{on:r,send:n}):"postrobot_message_response"===l.type?function(e,t,r){if(!tj(r.hash)){var n,o=tP(r.hash);if(!o)throw Error("No handler found for post message response for message: "+r.name+" from "+t+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);if(!M(o.domain,t))throw Error("Response origin "+t+" does not match domain "+(Array.isArray(n=o.domain)?"("+n.join(" | ")+")":h(n)?"RegExp("+n.toString()+")":n.toString()));if(e!==o.win)throw Error("Response source does not match registered window");tT(r.hash),"error"===r.ack?o.promise.reject(r.error):"success"===r.ack&&o.promise.resolve({source:e,origin:t,data:r.data})}}(i,a,l):"postrobot_message_ack"===l.type&&function(e,t,r){if(!tj(r.hash)){var n=tP(r.hash);if(!n)throw Error("No handler found for post message ack for message: "+r.name+" from "+t+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);try{if(!M(n.domain,t))throw Error("Ack origin "+t+" does not match domain "+n.domain.toString());if(e!==n.win)throw Error("Ack source does not match registered window")}catch(e){n.promise.reject(e)}n.ack=!0}}(i,a,l)}catch(e){setTimeout(function(){throw e},0)}}}}function tz(e,t,r){if(!e)throw Error("Expected name");if("function"==typeof(t=t||{})&&(r=t,t={}),!r)throw Error("Expected handler");(t=t||{}).name=e,t.handler=r||t.handler;var n=t.window,o=t.domain,i=function e(t,r){var n=t.name,o=t.win,i=t.domain,a=e8("requestListeners");if(!n||"string"!=typeof n)throw Error("Name required to add request listener");if(Array.isArray(o)){for(var s=[],c=0,l=o;c<l.length;c++)s.push(e({name:n,domain:i,win:l[c]},r));return{cancel:function(){for(var e=0;e<s.length;e++)s[e].cancel()}}}if(Array.isArray(i)){for(var d=[],u=0,f=i;u<f.length;u++)d.push(e({name:n,win:o,domain:f[u]},r));return{cancel:function(){for(var e=0;e<d.length;e++)d[e].cancel()}}}var p=tI({name:n,win:o,domain:i});if(o&&"*"!==o||(o=e6()),i=i||"*",p)throw o&&i?Error("Request listener already exists for "+n+" on domain "+i.toString()+" for "+(o===e6()?"wildcard":"specified")+" window"):o?Error("Request listener already exists for "+n+" for "+(o===e6()?"wildcard":"specified")+" window"):i?Error("Request listener already exists for "+n+" on domain "+i.toString()):Error("Request listener already exists for "+n);var h,g,m=a.getOrSet(o,function(){return{}}),y=eE(m,n,function(){return{}}),v=i.toString();return e_(i)?(h=eE(y,"__domain_regex__",function(){return[]})).push(g={regex:i,listener:r}):y[v]=r,{cancel:function(){delete y[v],g&&(h.splice(h.indexOf(g,1)),h.length||delete y.__domain_regex__),Object.keys(y).length||delete m[n],o&&!Object.keys(m).length&&a.del(o)}}}({name:e,win:n,domain:o},{handler:t.handler,handleError:t.errorHandler||function(e){throw e},window:n,domain:o||"*",name:e});return{cancel:function(){i.cancel()}}}tD.postrobot_post_message=function(e,t,r){0===r.indexOf("file:")&&(r="*"),e.postMessage(t,r)},tD.postrobot_bridge=function(e,t,r){if(!tu()&&!tm())throw Error("Bridge not needed for browser");if(A(e))throw Error("Post message through bridge disabled between same domain windows");if(!1!==W(window,e))throw Error("Can only use bridge to communicate between two different windows, not between frames");var n=e,o=r,i=t,a=window===x(n),s=n===x(window);if(!a&&!s)throw Error("Can only send messages to and from parent and popup windows");tb(n).then(function(e){return e(n,o,i)})},tD.postrobot_global=function(e,t){if(!T(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i))throw Error("Global messaging not needed for browser");if(!A(e))throw Error("Post message through global disabled between different domain windows");if(!1!==W(window,e))throw Error("Can only use global to communicate between two different windows, not between frames");var r=e0(e);if(!r)throw Error("Can not find postRobot global on foreign window");r.receiveMessage({source:window,origin:C(),data:t})};var tW,tM=function e(t,r,n,o){var i=(o=o||{}).domain||"*",a=o.timeout||-1,s=o.timeout||5e3,c=o.fireAndForget||!1;return p.try(function(){if(function(e,t,r){if(!e)throw Error("Expected name");if(r&&"string"!=typeof r&&!Array.isArray(r)&&!e_(r))throw TypeError("Can not send "+e+". Expected domain "+JSON.stringify(r)+" to be a string, array, or regex");if(P(t))throw Error("Can not send "+e+". Target window is closed")}(r,t,i),function(e,t){var r=I(t);if(r)return r===e;if(t===e||F(t)===t)return!1;for(var n=0,o=O(e);n<o.length;n++)if(o[n]===t)return!0;return!1}(window,t))return tt(t,s)}).then(function(r){var n,o;return n=(void 0===r?{}:r).domain,o=e,p.try(function(){return"string"==typeof i?i:p.try(function(){return n||e7(t,{send:o}).then(function(e){return e.domain})}).then(function(e){if(!M(i,i))throw Error("Domain "+ef(i)+" does not match "+ef(i));return e})})}).then(function(o){var i="postrobot_method"===r&&n&&"string"==typeof n.name?n.name+"()":r,s=new p,l=r+"_"+en();if(!c){var d={name:r,win:t,domain:o,promise:s};e2("responseListeners").set(l,d);var u=e8("requestPromises").getOrSet(t,function(){return[]});u.push(s),s.catch(function(){e2("erroredResponseListeners").set(l,!0),tT(l)});var f=e8("knownWindows").get(t,!1)?1e4:2e3,h=f,g=a,m=eh(function(){return P(t)?s.reject(Error("Window closed for "+r+" before "+(d.ack?"response":"ack"))):d.cancelled?s.reject(Error("Response listener was cancelled for "+r)):(h=Math.max(h-500,0),-1!==g&&(g=Math.max(g-500,0)),d.ack||0!==h?0===g?s.reject(Error("No response for postMessage "+i+" in "+C()+" in "+a+"ms")):void 0:s.reject(Error("No ack for postMessage "+i+" in "+C()+" in "+f+"ms")))},500);s.finally(function(){m.cancel(),u.splice(u.indexOf(s,1))}).catch(el)}return tN(t,o,{id:en(),origin:C(window),type:"postrobot_message_request",hash:l,name:r,data:n,fireAndForget:c},{on:tz,send:e}).then(function(){return c?s.resolve():s},function(e){throw Error("Send request message failed for "+i+" in "+C()+"\n\n"+eu(e))})})};function tY(e){return tk.toProxyWindow(e,{send:tM})}function tB(e){for(var t=0,r=e8("requestPromises").get(e,[]);t<r.length;t++)r[t].reject(Error("Window "+(P(e)?"closed":"cleaned up")+" before response")).catch(el)}function tU(e){if(!A(e))throw Error("Can not get global for window on different domain");return e.__zoid_9_0_86__||(e.__zoid_9_0_86__={}),e.__zoid_9_0_86__}function tH(e,t){try{return t(tU(e))}catch(e){}}function tV(e){return{get:function(){var t=this;return p.try(function(){if(t.source&&t.source!==window)throw Error("Can not call get on proxy object from a remote window");return e})}}}function tq(e){var t=tU(e);return t.references=t.references||{},t.references}function tX(e){var t,r=e.data,n=e.metaData,o=e.sender,i=e.receiver,a=e.passByReference,s=e.basic,c=tY(i.win),l=void 0!==s&&s?JSON.stringify(r):tF(c,i.domain,r,{on:tz,send:tM}),d=void 0!==a&&a?(t=en(),tq(window)[t]=l,{type:"uid",uid:t}):{type:"raw",val:l};return{serializedData:er(JSON.stringify({sender:{domain:o.domain},metaData:n,reference:d})),cleanReference:function(){var e;e=window,"uid"===d.type&&delete tq(e)[d.uid]}}}function tJ(e){var t,r,n=e.sender,o=e.basic,i=JSON.parse(function(e){if("function"==typeof atob)return decodeURIComponent([].map.call(atob(e),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));if("u">typeof Buffer)return Buffer.from(e,"base64").toString("utf8");throw Error("Can not find window.atob or Buffer")}(e.data)),a=i.reference,s=i.metaData;t="function"==typeof n.win?n.win({metaData:s}):n.win,r="function"==typeof n.domain?n.domain({metaData:s}):"string"==typeof n.domain?n.domain:i.sender.domain;var c=function(e,t){if("raw"===t.type)return t.val;if("uid"===t.type)return tq(e)[t.uid];throw Error("Unsupported ref type: "+t.type)}(t,a);return{data:void 0!==o&&o?JSON.parse(c):tR(t,r,c,{on:tz,send:tM}),metaData:s,sender:{win:t,domain:r},reference:a}}tW={setupBridge:tE,openBridge:function(e,t){var r=e2("bridges"),n=e2("bridgeFrames");return t=t||Y(e),r.getOrSet(t,function(){return p.try(function(){if(C()===t)throw Error("Can not open bridge on the same domain as current domain: "+t);var r,o=tg(t);if(j(window,o))throw Error("Frame with name "+o+" already exists on page");var i=((r=document.createElement("iframe")).setAttribute("name",o),r.setAttribute("id",o),r.setAttribute("style","display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"),r.setAttribute("frameborder","0"),r.setAttribute("border","0"),r.setAttribute("scrolling","no"),r.setAttribute("allowTransparency","true"),r.setAttribute("tabindex","-1"),r.setAttribute("hidden","true"),r.setAttribute("title",""),r.setAttribute("role","presentation"),r.src=e,r);return n.set(t,i),ty.then(function(t){t.appendChild(i);var r=i.contentWindow;return new p(function(e,t){i.addEventListener("load",e),i.addEventListener("error",t)}).then(function(){return tt(r,5e3,"Bridge "+e)}).then(function(){return r})})})})},linkWindow:t_,linkUrl:function(e,t){t_({win:e,domain:Y(t)})},isBridge:tm,needsBridge:th,needsBridgeForBrowser:tu,hasBridge:function(e,t){return e2("bridges").has(t||Y(e))},needsBridgeForWin:tf,needsBridgeForDomain:tp,destroyBridges:function(){for(var e=e2("bridges"),t=e2("bridgeFrames"),r=0,n=t.keys();r<n.length;r++){var o=t.get(n[r]);o&&o.parentNode&&o.parentNode.removeChild(o)}t.reset(),e.reset()}};var tG={STRING:"string",OBJECT:"object",FUNCTION:"function",BOOLEAN:"boolean",NUMBER:"number",ARRAY:"array"},tZ={JSON:"json",DOTIFY:"dotify",BASE64:"base64"},tK=g,tQ={RENDER:"zoid-render",RENDERED:"zoid-rendered",DISPLAY:"zoid-display",ERROR:"zoid-error",CLOSE:"zoid-close",DESTROY:"zoid-destroy",PROPS:"zoid-props",RESIZE:"zoid-resize",FOCUS:"zoid-focus"};function t0(e){return"__zoid__"+e.name+"__"+e.serializedPayload+"__"}function t1(e){if(!e)throw Error("No window name");var t=e.split("__"),r=t[1],n=t[2],o=t[3];if("zoid"!==r)throw Error("Window not rendered by zoid - got "+r);if(!n)throw Error("Expected component name");if(!o)throw Error("Expected serialized payload ref");return{name:n,serializedInitialPayload:o}}var t2=ec(function(e){var t=tJ({data:t1(e).serializedInitialPayload,sender:{win:function(e){return function(e){if("opener"===e.type)return eA("opener",x(window));if("parent"===e.type&&"number"==typeof e.distance)return eA("parent",(t=window,void 0===(r=e.distance)&&(r=1),function(e,t){void 0===t&&(t=1);for(var r=e,n=0;n<t;n++){if(!r)return;r=w(r)}return r}(t,z(t)-r)));if("global"===e.type&&e.uid&&"string"==typeof e.uid){var t,r,n=function(){var t=e.uid,r=I(window);if(!r)throw Error("Can not find ancestor window");for(var n=0,o=R(r);n<o.length;n++){var i=o[n];if(A(i)){var a=tH(i,function(e){return e.windows&&e.windows[t]});if(a)return{v:a}}}}();if("object"==typeof n)return n.v}else if("name"===e.type){var o,i=e.name;return eA("namedWindow",j(o=eA("ancestor",I(window)),i)||function e(t,r){var n=j(t,r);if(n)return n;for(var o=0,i=O(t);o<i.length;o++){var a=e(i[o],r);if(a)return a}}(F(o)||o,i))}throw Error("Unable to find "+e.type+" parent component window")}(e.metaData.windowRef)}}});return{parent:t.sender,payload:t.data,reference:t.reference}});function t4(){return t2(window.name)}function t5(e,t,r,n,o){if(!e.hasOwnProperty(r))return n;var i=e[r];return"function"==typeof i.childDecorate?i.childDecorate({value:n,uid:o.uid,tag:o.tag,close:o.close,focus:o.focus,onError:o.onError,onProps:o.onProps,resize:o.resize,getParent:o.getParent,getParentDomain:o.getParentDomain,show:o.show,hide:o.hide,export:o.export,getSiblings:o.getSiblings}):n}function t6(){return p.try(function(){window.focus()})}function t8(){return p.try(function(){window.close()})}var t3=function(){return el},t9=function(e){return ed(e.value)};function t7(e,t,r){for(var n=0,o=Object.keys(i({},e,t));n<o.length;n++){var a=o[n];r(a,t[a],e[a])}}function re(e,t,r){var n,o={};return p.all((n=[],t7(t,e,function(e,t,i){var a=p.resolve().then(function(){var n,a;if(null!=i&&t){var s=((n={}).get=t.queryParam,n.post=t.bodyParam,n)[r],c=((a={}).get=t.queryValue,a.post=t.bodyValue,a)[r];if(s)return p.hash({finalParam:p.try(function(){return"function"==typeof s?s({value:i}):"string"==typeof s?s:e}),finalValue:p.try(function(){return"function"==typeof c&&ex(i)?c({value:i}):i})}).then(function(r){var n,i=r.finalParam,a=r.finalValue;if("boolean"==typeof a)n=a.toString();else if("string"==typeof a)n=a.toString();else if("object"==typeof a&&null!==a){if(t.serialization===tZ.JSON)n=JSON.stringify(a);else if(t.serialization===tZ.BASE64)n=er(JSON.stringify(a));else if(t.serialization===tZ.DOTIFY||!t.serialization){n=function e(t,r,n){for(var o in void 0===r&&(r=""),void 0===n&&(n={}),r=r?r+".":r,t)t.hasOwnProperty(o)&&null!=t[o]&&"function"!=typeof t[o]&&(t[o]&&Array.isArray(t[o])&&t[o].length&&t[o].every(function(e){return"object"!=typeof e})?n[""+r+o+"[]"]=t[o].join(","):t[o]&&"object"==typeof t[o]?n=e(t[o],""+r+o,n):n[""+r+o]=t[o].toString());return n}(a,e);for(var s=0,c=Object.keys(n);s<c.length;s++){var l=c[s];o[l]=n[l]}return}}else"number"==typeof a&&(n=a.toString());o[i]=n})}});n.push(a)}),n)).then(function(){return o})}function rt(e){var t,r,n,o,a,s,c,l,d=e.uid,u=e.options,f=e.overrides,h=void 0===f?{}:f,g=e.parentWin,m=void 0===g?window:g,y=u.propsDef,v=u.containerTemplate,b=u.prerenderTemplate,w=u.tag,x=u.name,_=u.attributes,E=u.dimensions,$=u.autoResize,O=u.url,S=u.domain,F=u.exports,R=new p,D=[],N=eC(),T={},j={},L={visible:!0},U=h.event?h.event:(t={},r={},n={on:function(e,t){var n=r[e]=r[e]||[];n.push(t);var o=!1;return{cancel:function(){o||(o=!0,n.splice(n.indexOf(t),1))}}},once:function(e,t){var r=n.on(e,function(){r.cancel(),t()});return r},trigger:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=r[e],a=[];if(i)for(var s=0;s<i.length;s++)!function(e){var t=i[e];a.push(p.try(function(){return t.apply(void 0,n)}))}(s);return p.all(a).then(el)},triggerOnce:function(e){if(t[e])return p.resolve();t[e]=!0;for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return n.trigger.apply(n,[e].concat(o))},reset:function(){r={}}}),V=h.props?h.props:{},X=h.onError,J=h.getProxyContainer,G=h.show,Z=h.hide,K=h.close,Q=h.renderContainer,ee=h.getProxyWindow,et=h.setProxyWin,er=h.openFrame,eo=h.openPrerenderFrame,ei=h.prerender,ea=h.open,es=h.openPrerender,eg=h.watchForUnload,em=h.getInternalState,ev=h.setInternalState,eb=function(){return"function"==typeof E?E({props:V}):E},ew=function(){return p.try(function(){return h.resolveInitPromise?h.resolveInitPromise():R.resolve()})},e_=function(e){return p.try(function(){return h.rejectInitPromise?h.rejectInitPromise(e):R.reject(e)})},eE=function(e){for(var t={},r=0,n=Object.keys(V);r<n.length;r++){var o=n[r],i=y[o];i&&!1===i.sendToChild||i&&i.sameDomain&&!M(e,C(window))||(t[o]=V[o])}return p.hash(t)},eA=function(){return p.try(function(){return em?em():L})},ek=function(e){return p.try(function(){return ev?ev(e):L=i({},L,e)})},e$=function(){return ee?ee():p.try(function(){var e=V.window;if(e){var t=tY(e);return N.register(function(){return e.close()}),t}return new tk({send:tM})})},eO=function(e){return et?et(e):p.try(function(){o=e})},eS=function(){return G?G():p.hash({setState:ek({visible:!0}),showElement:a?a.get().then(eM):null}).then(el)},eF=function(){return Z?Z():p.hash({setState:ek({visible:!1}),showElement:a?a.get().then(eY):null}).then(el)},eD=function(){return"function"==typeof O?O({props:V}):O},eT=function(){return"function"==typeof _?_({props:V}):_},eI=function(){return Y(eD())},eq=function(e,t){var r=t.windowName;return er?er(e,{windowName:r}):p.try(function(){if(e===tK.IFRAME)return tV(ez({attributes:i({name:r,title:x},eT().iframe)}))})},eX=function(e){return eo?eo(e):p.try(function(){if(e===tK.IFRAME)return tV(ez({attributes:i({name:"__zoid_prerender_frame__"+x+"_"+en()+"__",title:"prerender__"+x},eT().iframe)}))})},eJ=function(e,t,r){return es?es(e,t,r):p.try(function(){if(e===tK.IFRAME){if(!r)throw Error("Expected proxy frame to be passed");return r.get().then(function(e){return N.register(function(){return eB(e)}),eL(e).then(function(e){return k(e)}).then(function(e){return tY(e)})})}if(e===tK.POPUP)return t;throw Error("No render context available for "+e)})},eG=function(){return p.try(function(){if(o)return p.all([U.trigger(tQ.FOCUS),o.focus()]).then(el)})},eZ=function(e,t,r,n){if(t===C(window))return{type:"global",uid:((o=tU(window)).windows=o.windows||{},o.windows[d]=window,N.register(function(){delete o.windows[d]}),d)};if(e!==window)throw Error("Can not construct cross-domain window reference for different target window");if(V.window){var o,i=n.getWindow();if(!i)throw Error("Can not construct cross-domain window reference for lazy window prop");if(I(i)!==window)throw Error("Can not construct cross-domain window reference for window prop with different ancestor")}if(r===tK.POPUP)return{type:"opener"};if(r===tK.IFRAME)return{type:"parent",distance:z(window)};throw Error("Can not construct window reference for child")},eK=function(e,t){return p.try(function(){c=e,s=t,ew(),N.register(function(){return t.close.fireAndForget().catch(el)})})},e0=function(e){var t=e.width,r=e.height;return p.try(function(){U.trigger(tQ.RESIZE,{width:t,height:r})})},e1=function(e){return p.try(function(){return U.trigger(tQ.DESTROY)}).catch(el).then(function(){return N.all(e)}).then(function(){R.asyncReject(e||Error("Component destroyed"))})},e2=ec(function(e){return p.try(function(){if(K){if(P(K.__source__))return;return K()}return p.try(function(){return U.trigger(tQ.CLOSE)}).then(function(){return e1(e||Error("Component closed"))})})}),e4=function(e,t){var r=t.proxyWin,n=t.proxyFrame,o=t.windowName;return ea?ea(e,{proxyWin:r,proxyFrame:n,windowName:o}):p.try(function(){if(e===tK.IFRAME){if(!n)throw Error("Expected proxy frame to be passed");return n.get().then(function(e){return eL(e).then(function(t){return N.register(function(){return eB(e)}),N.register(function(){return tB(t)}),t})})}if(e===tK.POPUP){var t=eb(),r=t.width,a=void 0===r?"300px":r,s=t.height,c=void 0===s?"150px":s;a=eQ(a,window.outerWidth),c=eQ(c,window.outerWidth);var l=function(e,t){var r=(t=t||{}).closeOnUnload,n=t.name,o=t.width,a=t.height,s=0,c=0;o&&(window.outerWidth?c=Math.round((window.outerWidth-o)/2)+window.screenX:window.screen.width&&(c=Math.round((window.screen.width-o)/2))),a&&(window.outerHeight?s=Math.round((window.outerHeight-a)/2)+window.screenY:window.screen.height&&(s=Math.round((window.screen.height-a)/2))),delete t.closeOnUnload,delete t.name,o&&a&&(t=i({top:s,left:c,width:o,height:a,status:1,toolbar:0,menubar:0,resizable:1,scrollbars:1},t));var l,d=Object.keys(t).map(function(e){if(null!=t[e])return e+"="+ef(t[e])}).filter(Boolean).join(",");try{l=window.open("",void 0===n?"":n,d)}catch(e){throw new ej("Can not open popup window - "+(e.stack||e.message))}if(P(l))throw new ej("Can not open popup window - blocked");return(void 0===r?1:r)&&window.addEventListener("unload",function(){return l.close()}),l}(0,i({name:o,width:a,height:c},eT().popup));return N.register(function(){return q(l)}),N.register(function(){return tB(l)}),l}throw Error("No render context available for "+e)}).then(function(e){return r.setWindow(e,{send:tM}),r.setName(o).then(function(){return r})})},e5=function(){return p.try(function(){var e=eW(window,"unload",ed(function(){e1(Error("Window navigated away"))})),t=B(m,e1,3e3);if(N.register(t.cancel),N.register(e.cancel),eg)return eg()})},e6=function(e){var t=!1;return e.isClosed().then(function(r){return r?(t=!0,e2(Error("Detected component window close"))):p.delay(200).then(function(){return e.isClosed()}).then(function(e){if(e)return t=!0,e2(Error("Detected component window close"))})}).then(function(){return t})},e8=function(e){return X?X(e):p.try(function(){if(-1===D.indexOf(e))return D.push(e),R.asyncReject(e),U.trigger(tQ.ERROR,e)})},e3=new p,e9=function(e){return p.try(function(){e3.resolve(e)})};eK.onError=e8;var e7=function(e,t){return e({uid:d,container:t.container,context:t.context,doc:t.doc,frame:t.frame,prerenderFrame:t.prerenderFrame,focus:eG,close:e2,state:T,props:V,tag:w,dimensions:eb(),event:U})},te=function(e,t){var r=t.context;return ei?ei(e,{context:r}):p.try(function(){if(b){var t=e.getWindow();if(t&&A(t)&&function(e){try{if(!e.location.href||"about:blank"===e.location.href)return!0}catch(e){}return!1}(t)){var n=(t=k(t)).document,o=e7(b,{context:r,doc:n});if(o){if(o.ownerDocument!==n)throw Error("Expected prerender template to have been created with document from child window");!function(e,t){var r=t.tagName.toLowerCase();if("html"!==r)throw Error("Expected element to be html, got "+r);for(var n=e.document.documentElement,o=0,i=ey(n.children);o<i.length;o++)n.removeChild(i[o]);for(var a=0,s=ey(t.children);a<s.length;a++)n.appendChild(s[a])}(t,o);var i=$.width,a=void 0!==i&&i,s=$.height,c=void 0!==s&&s,l=$.element,d=void 0===l?"body":l;if((d=eN(d,n))&&(a||c)){var u=eH(d,function(e){e0({width:a?e.width:void 0,height:c?e.height:void 0})},{width:a,height:c,win:t});U.on(tQ.RENDERED,u.cancel)}}}}})},tt=function(e,t){var r=t.proxyFrame,n=t.proxyPrerenderFrame,o=t.context,i=t.rerender;return Q?Q(e,{proxyFrame:r,proxyPrerenderFrame:n,context:o,rerender:i}):p.hash({container:e.get(),frame:r?r.get():null,prerenderFrame:n?n.get():null,internalState:eA()}).then(function(e){var t=e.container,r=e.internalState.visible,n=e7(v,{context:o,container:t,frame:e.frame,prerenderFrame:e.prerenderFrame,doc:document});if(n){r||eY(n),t.appendChild(n);var s=function(e,t){t=ed(t);var r,n,o,i=!1,a=[],s=function(){i=!0;for(var e=0;e<a.length;e++)a[e].disconnect();r&&r.cancel(),o&&o.removeEventListener("unload",c),n&&eB(n)},c=function(){i||(t(),s())};if(eU(e))return c(),{cancel:s};if(window.MutationObserver)for(var l=e.parentElement;l;){var d=new window.MutationObserver(function(){eU(e)&&c()});d.observe(l,{childList:!0}),a.push(d),l=l.parentElement}return(n=document.createElement("iframe")).setAttribute("name","__detect_close_"+en()+"__"),n.style.display="none",eL(n).then(function(e){(o=k(e)).addEventListener("unload",c)}),e.appendChild(n),r=eh(function(){eU(e)&&c()},1e3),{cancel:s}}(n,function(){var e=Error("Detected container element removed from DOM");return p.delay(1).then(function(){if(!eU(n))return N.all(e),i().then(ew,e_);e2(e)})});return N.register(function(){return s.cancel()}),N.register(function(){return eB(n)}),a=tV(n)}})},tr=function(){return{state:T,event:U,close:e2,focus:eG,resize:e0,onError:e8,updateProps:to,show:eS,hide:eF}},tn=function(e){void 0===e&&(e={});var t,r,n,o,i,a=l,s=tr();ep(j,e),t=s.state,r=s.close,n=s.focus,o=s.event,i=s.onError,t7(j,y,function(e,s,c){var l=!1,d=c;Object.defineProperty(V,e,{configurable:!0,enumerable:!0,get:function(){return l?d:(l=!0,function(){if(!s)return d;var l=s.alias;if(l&&!ex(c)&&ex(j[l])&&(d=j[l]),s.value&&(d=s.value({props:V,state:t,close:r,focus:n,event:o,onError:i,container:a})),!s.default||ex(d)||ex(j[e])||(d=s.default({props:V,state:t,close:r,focus:n,event:o,onError:i,container:a})),ex(d)){if(s.type===tG.ARRAY?!Array.isArray(d):typeof d!==s.type)throw TypeError("Prop is not of type "+s.type+": "+e)}else if(!1!==s.required&&!ex(j[e]))throw Error('Expected prop "'+e+'" to be defined');return ex(d)&&s.decorate&&(d=s.decorate({value:d,props:V,state:t,close:r,focus:n,event:o,onError:i,container:a})),d}())}})}),t7(V,y,el)},to=function(e){return tn(e),R.then(function(){var e=s,t=o;if(e&&t&&c)return eE(c).then(function(r){return e.updateProps(r).catch(function(e){return e6(t).then(function(t){if(!t)throw e})})})})},ti=function(e){return J?J(e):p.try(function(){return eP(e)}).then(function(e){return eV(e)&&(e=function e(t){var r=function(e){var t=function(e){for(;e.parentNode;)e=e.parentNode;if(eV(e))return e}(e);if(t&&t.host)return t.host}(t);if(!r)throw Error("Element is not in shadow dom");var n="shadow-slot-"+en(),o=document.createElement("slot");o.setAttribute("name",n),t.appendChild(o);var i=document.createElement("div");return i.setAttribute("slot",n),r.appendChild(i),eV(r)?e(i):i}(e)),l=e,tV(e)})};return{init:function(){U.on(tQ.RENDER,function(){return V.onRender()}),U.on(tQ.DISPLAY,function(){return V.onDisplay()}),U.on(tQ.RENDERED,function(){return V.onRendered()}),U.on(tQ.CLOSE,function(){return V.onClose()}),U.on(tQ.DESTROY,function(){return V.onDestroy()}),U.on(tQ.RESIZE,function(){return V.onResize()}),U.on(tQ.FOCUS,function(){return V.onFocus()}),U.on(tQ.PROPS,function(e){return V.onProps(e)}),U.on(tQ.ERROR,function(e){return V&&V.onError?V.onError(e):e_(e).then(function(){setTimeout(function(){throw e},1)})}),N.register(U.reset)},render:function(e){var t=e.target,r=e.container,n=e.context,i=e.rerender;return p.try(function(){var e=eI(),a=S||eI();if(t!==window){if(!W(window,t))throw Error("Can only renderTo an adjacent frame");var s=C();if(!M(a,s)&&!A(t))throw Error("Can not render remotely to "+a.toString()+" - can only render to "+s);if(r&&"string"!=typeof r)throw Error("Container passed to renderTo must be a string selector, got "+typeof r+" }")}var c=p.try(function(){if(t!==window)return function(e,t){for(var r={},n=0,o=Object.keys(V);n<o.length;n++){var i=o[n],a=y[i];a&&a.allowDelegate&&(r[i]=V[i])}var s=tM(t,"zoid_delegate_"+x,{uid:d,overrides:{props:r,event:U,close:e2,onError:e8,getInternalState:eA,setInternalState:ek,resolveInitPromise:ew,rejectInitPromise:e_}}).then(function(e){var r=e.data.parent;return N.register(function(e){if(!P(t))return r.destroy(e)}),r.getDelegateOverrides()}).catch(function(e){throw Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n"+eu(e))});return J=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.getProxyContainer.apply(e,t)})},Q=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.renderContainer.apply(e,t)})},G=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.show.apply(e,t)})},Z=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.hide.apply(e,t)})},eg=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.watchForUnload.apply(e,t)})},e===tK.IFRAME?(ee=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.getProxyWindow.apply(e,t)})},er=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.openFrame.apply(e,t)})},eo=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.openPrerenderFrame.apply(e,t)})},ei=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.prerender.apply(e,t)})},ea=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.open.apply(e,t)})},es=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.openPrerender.apply(e,t)})}):e===tK.POPUP&&(et=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return s.then(function(e){return e.setProxyWin.apply(e,t)})}),s}(n,t)}),l=V.window,f=e5(),h=re(y,V,"post"),g=U.trigger(tQ.RENDER),m=ti(r),v=e$(),b=m.then(function(){return tn()}),_=b.then(function(){return re(y,V,"get").then(function(e){var t,r,n,o,i,a,s,c,l,d;return t=H(eD()),i=(r={query:e}).query||{},a=r.hash||{},o=(s=t.split("#"))[1],n=(c=(n=s[0]).split("?"))[0],l=eR(c[1],i),d=eR(o,a),l&&(n=n+"?"+l),d&&(n=n+"#"+d),n})}),E=v.then(function(r){var o,i,s,c,l,u,f,p,h,g,m,y;return(s=(i={proxyWin:(o={proxyWin:r,initialChildDomain:e,childDomainMatch:a,target:t,context:n}).proxyWin,initialChildDomain:o.initialChildDomain,childDomainMatch:o.childDomainMatch,target:o.target,context:o.context}).proxyWin,c=i.initialChildDomain,l=i.childDomainMatch,f=void 0===(u=i.target)?window:u,(g=(h={proxyWin:s,initialChildDomain:c,childDomainMatch:l,context:p=i.context}).proxyWin,m=h.childDomainMatch,y=h.context,eE(h.initialChildDomain).then(function(e){return{uid:d,context:y,tag:w,childDomainMatch:m,version:"9_0_86",props:e,exports:{init:function(e){return eK(this.origin,e)},close:e2,checkClose:function(){return e6(g)},resize:e0,onError:e8,show:eS,hide:eF,export:e9}}})).then(function(e){var t=tX({data:e,metaData:{windowRef:eZ(f,c,p,s)},sender:{domain:C(window)},receiver:{win:s,domain:l},passByReference:c===C()}),r=t.serializedData;return N.register(t.cleanReference),r})).then(function(e){return t0({name:x,serializedPayload:e})})}),k=E.then(function(e){return eq(n,{windowName:e})}),$=eX(n),O=p.hash({proxyContainer:m,proxyFrame:k,proxyPrerenderFrame:$}).then(function(e){return tt(e.proxyContainer,{context:n,proxyFrame:e.proxyFrame,proxyPrerenderFrame:e.proxyPrerenderFrame,rerender:i})}).then(function(e){return e}),F=p.hash({windowName:E,proxyFrame:k,proxyWin:v}).then(function(e){var t=e.proxyWin;return l?t:e4(n,{windowName:e.windowName,proxyWin:t,proxyFrame:e.proxyFrame})}),D=p.hash({proxyWin:F,proxyPrerenderFrame:$}).then(function(e){return eJ(n,e.proxyWin,e.proxyPrerenderFrame)}),T=F.then(function(e){return o=e,eO(e)}),j=p.hash({proxyPrerenderWin:D,state:T}).then(function(e){return te(e.proxyPrerenderWin,{context:n})}),I=p.hash({proxyWin:F,windowName:E}).then(function(e){if(l)return e.proxyWin.setName(e.windowName)}),L=p.hash({body:h}).then(function(e){return u.method?u.method:Object.keys(e.body).length?"post":"get"}),z=p.hash({proxyWin:F,windowUrl:_,body:h,method:L,windowName:I,prerender:j}).then(function(e){return e.proxyWin.setLocation(e.windowUrl,{method:e.method,body:e.body})}),B=F.then(function(e){!function e(t,r){var n=!1;return N.register(function(){n=!0}),p.delay(2e3).then(function(){return t.isClosed()}).then(function(o){if(!n)return o?e2(Error("Detected "+r+" close")):e(t,r)})}(e,n)}),q=p.hash({container:O,prerender:j}).then(function(){return U.trigger(tQ.DISPLAY)}),X=F.then(function(t){return p.try(function(){return t.awaitWindow()}).then(function(t){if(tW&&tW.needsBridge({win:t,domain:e})&&!tW.hasBridge(e,e)){var r="function"==typeof u.bridgeUrl?u.bridgeUrl({props:V}):u.bridgeUrl;if(!r)throw Error("Bridge needed to render "+n);var o=Y(r);return tW.linkUrl(t,e),tW.openBridge(H(r),o)}})}),K=z.then(function(){return p.try(function(){var e=V.timeout;if(e)return R.timeout(e,Error("Loading component timed out after "+e+" milliseconds"))})}),en=R.then(function(){return U.trigger(tQ.RENDERED)});return p.hash({initPromise:R,buildUrlPromise:_,onRenderPromise:g,getProxyContainerPromise:m,openFramePromise:k,openPrerenderFramePromise:$,renderContainerPromise:O,openPromise:F,openPrerenderPromise:D,setStatePromise:T,prerenderPromise:j,loadUrlPromise:z,buildWindowNamePromise:E,setWindowNamePromise:I,watchForClosePromise:B,onDisplayPromise:q,openBridgePromise:X,runTimeoutPromise:K,onRenderedPromise:en,delegatePromise:c,watchForUnloadPromise:f,finalSetPropsPromise:b})}).catch(function(e){return p.all([e8(e),e1(e)]).then(function(){throw e},function(){throw e})}).then(el)},destroy:e1,getProps:function(){return V},setProps:tn,export:e9,getHelpers:tr,getDelegateOverrides:function(){return p.try(function(){return{getProxyContainer:ti,show:eS,hide:eF,renderContainer:tt,getProxyWindow:e$,watchForUnload:e5,openFrame:eq,openPrerenderFrame:eX,prerender:te,open:e4,openPrerender:eJ,setProxyWin:eO}})},getExports:function(){return F({getExports:function(){return e3}})}}}var rr={register:function(e,t,r,n){var i=n.React,a=n.ReactDOM,s=i.Component;function c(){return s.apply(this,arguments)||this}o(c,s);var l=c.prototype;return l.render=function(){return i.createElement("div",null)},l.componentDidMount=function(){var e=a.findDOMNode(this),t=r(ep({},this.props));t.render(e,tK.IFRAME),this.setState({parent:t})},l.componentDidUpdate=function(){this.state&&this.state.parent&&this.state.parent.updateProps(ep({},this.props)).catch(el)},c}},rn={register:function(e,t,r,n){return n.component(e,{render:function(e){return e("div")},inheritAttrs:!1,mounted:function(){var e,t=this.$el;this.parent=r(i({},Object.keys(e=this.$attrs).reduce(function(t,r){var n=e[r];return"style-object"===r||"styleObject"===r?(t.style=n,t.styleObject=n):r.includes("-")?t[eg(r)]=n:t[r]=n,t},{}))),this.parent.render(t,tK.IFRAME)},watch:{$attrs:{handler:function(){this.parent&&this.$attrs&&this.parent.updateProps(i({},this.$attrs)).catch(el)},deep:!0}}})}},ro={register:function(e,t,r){return{template:"<div></div>",inheritAttrs:!1,mounted:function(){var e,t=this.$el;this.parent=r(i({},Object.keys(e=this.$attrs).reduce(function(t,r){var n=e[r];return"style-object"===r||"styleObject"===r?(t.style=n,t.styleObject=n):r.includes("-")?t[eg(r)]=n:t[r]=n,t},{}))),this.parent.render(t,tK.IFRAME)},watch:{$attrs:{handler:function(){this.parent&&this.$attrs&&this.parent.updateProps(i({},this.$attrs)).catch(el)},deep:!0}}}}},ri={register:function(e,t,r,n){return n.module(e,[]).directive(eg(e),function(){for(var e={},n=0,o=Object.keys(t);n<o.length;n++)e[o[n]]="=";return e.props="=",{scope:e,restrict:"E",controller:["$scope","$element",function(e,t){var n=function(){return ew(e.props,function(t){return"function"==typeof t?function(){var r=t.apply(this,arguments);return function(){if("$apply"!==e.$root.$$phase&&"$digest"!==e.$root.$$phase)try{e.$apply()}catch(e){}}(),r}:t})},o=r(n());o.render(t[0],tK.IFRAME),e.$watch(function(){o.updateProps(n()).catch(el)})}]}})}},ra={register:function(e,t,r,n){var o=n.Component,a=n.NgModule,s=n.ElementRef,c=n.NgZone,l=n.Inject,d=function(){function e(e,t){this.elementRef=void 0,this.internalProps=void 0,this.parent=void 0,this.props=void 0,this.zone=void 0,this._props=void 0,this._props={},this.elementRef=e,this.zone=t}var t=e.prototype;return t.getProps=function(){var e=this;return ew(i({},this.internalProps,this.props),function(t){if("function"==typeof t){var r=e.zone;return function(){var e=arguments,n=this;return r.run(function(){return t.apply(n,e)})}}return t})},t.ngOnInit=function(){var e=this.elementRef.nativeElement;this.parent=r(this.getProps()),this.parent.render(e,tK.IFRAME)},t.ngDoCheck=function(){this.parent&&!function(e,t){var r={};for(var n in e)if(e.hasOwnProperty(n)&&(r[n]=!0,e[n]!==t[n]))return!1;for(var o in t)if(!r[o])return!1;return!0}(this._props,this.props)&&(this._props=i({},this.props),this.parent.updateProps(this.getProps()))},e}();d.annotations=void 0,d.parameters=void 0,d.parameters=[[new l(s)],[new l(c)]],d.annotations=[new o({selector:e,template:"<div></div>",inputs:["props"]})];var u=function(){};return u.annotations=void 0,u.annotations=[new a({declarations:[d],exports:[d]})],u}};function rs(e){var t=e.uid,r=e.frame,n=e.prerenderFrame,o=e.doc,i=e.props,a=e.event,s=e.dimensions,c=s.width,l=s.height;if(r&&n){var d=o.createElement("div");d.setAttribute("id",t);var u=o.createElement("style");return i.cspNonce&&u.setAttribute("nonce",i.cspNonce),u.appendChild(o.createTextNode("\n            #"+t+" {\n                display: inline-block;\n                position: relative;\n                width: "+c+";\n                height: "+l+";\n            }\n\n            #"+t+" > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #"+t+" > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #"+t+" > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ")),d.appendChild(r),d.appendChild(n),d.appendChild(u),n.classList.add("zoid-visible"),r.classList.add("zoid-invisible"),a.on(tQ.RENDERED,function(){n.classList.remove("zoid-visible"),n.classList.add("zoid-invisible"),r.classList.remove("zoid-invisible"),r.classList.add("zoid-visible"),setTimeout(function(){eB(n)},1)}),a.on(tQ.RESIZE,function(e){var t=e.width,r=e.height;"number"==typeof t&&(d.style.width=eK(t)),"number"==typeof r&&(d.style.height=eK(r))}),d}}function rc(e){var t=e.doc,r=e.props,n=t.createElement("html"),o=t.createElement("body"),i=t.createElement("style"),a=t.createElement("div");return a.classList.add("spinner"),r.cspNonce&&i.setAttribute("nonce",r.cspNonce),n.appendChild(o),o.appendChild(a),o.appendChild(i),i.appendChild(t.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ")),n}var rl=eC(),rd=eC(),ru=function(e){e0().initialized||(e0().initialized=!0,l=(c={on:tz,send:tM}).on,d=c.send,(u=e0()).receiveMessage=u.receiveMessage||function(e){return tL(e,{on:l,send:d})},r=(t={on:tz,send:tM}).on,n=t.send,e2().getOrSet("postMessageListener",function(){return eW(window,"message",function(e){var t,o,i;o=(t={on:r,send:n}).on,i=t.send,p.try(function(){var t=e.source||e.sourceElement,r=e.origin||e.originalEvent&&e.originalEvent.origin,n=e.data;if("null"===r&&(r="file://"),t){if(!r)throw Error("Post message did not have origin domain");tL({source:t,origin:r,data:n},{on:o,send:i})}})})}),tE({on:tz,send:tM,receiveMessage:tL}),a=(o={on:tz,send:tM}).on,s=o.send,e2("builtinListeners").getOrSet("helloListener",function(){var e=a("postrobot_hello",{domain:"*"},function(e){return e9(e.source,{domain:e.origin}),{instanceID:e3()}}),t=I();return t&&e7(t,{send:s}).catch(function(e){}),e}));var t,r,n,o,a,s,c,l,d,u,f=function(e){var t,r,n=function(e){var t=e.tag,r=e.url,n=e.domain,o=e.bridgeUrl,a=e.props,s=e.dimensions,c=e.autoResize,l=e.allowedParentDomains,d=e.attributes,u=e.defaultContext,f=void 0===u?tK.IFRAME:u,p=e.containerTemplate,h=void 0===p?rs:p,g=e.prerenderTemplate,m=e.validate,y=e.eligible,v=e.logger,b=void 0===v?{info:el}:v,w=e.exports,x=void 0===w?el:w,_=e.method,E=e.children,C=t.replace(/-/g,"_"),k=i({},{window:{type:tG.OBJECT,sendToChild:!1,required:!1,allowDelegate:!0,validate:function(e){var t=e.value;if(!U(t)&&!tk.isProxyWindow(t))throw Error("Expected Window or ProxyWindow");if(U(t)){if(P(t))throw Error("Window is closed");if(!A(t))throw Error("Window is not same domain")}},decorate:function(e){return tY(e.value)}},timeout:{type:tG.NUMBER,required:!1,sendToChild:!1},cspNonce:{type:tG.STRING,required:!1},onDisplay:{type:tG.FUNCTION,required:!1,sendToChild:!1,allowDelegate:!0,default:t3,decorate:t9},onRendered:{type:tG.FUNCTION,required:!1,sendToChild:!1,default:t3,decorate:t9},onRender:{type:tG.FUNCTION,required:!1,sendToChild:!1,default:t3,decorate:t9},onClose:{type:tG.FUNCTION,required:!1,sendToChild:!1,allowDelegate:!0,default:t3,decorate:t9},onDestroy:{type:tG.FUNCTION,required:!1,sendToChild:!1,allowDelegate:!0,default:t3,decorate:t9},onResize:{type:tG.FUNCTION,required:!1,sendToChild:!1,allowDelegate:!0,default:t3},onFocus:{type:tG.FUNCTION,required:!1,sendToChild:!1,allowDelegate:!0,default:t3},close:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.close}},focus:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.focus}},resize:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.resize}},uid:{type:tG.STRING,required:!1,sendToChild:!1,childDecorate:function(e){return e.uid}},tag:{type:tG.STRING,required:!1,sendToChild:!1,childDecorate:function(e){return e.tag}},getParent:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.getParent}},getParentDomain:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.getParentDomain}},show:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.show}},hide:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.hide}},export:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.export}},onError:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.onError}},onProps:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.onProps}},getSiblings:{type:tG.FUNCTION,required:!1,sendToChild:!1,childDecorate:function(e){return e.getSiblings}}},void 0===a?{}:a);if(!h)throw Error("Container template required");return{name:C,tag:t,url:r,domain:n,bridgeUrl:o,method:_,propsDef:k,dimensions:void 0===s?{}:s,autoResize:void 0===c?{}:c,allowedParentDomains:void 0===l?"*":l,attributes:void 0===d?{}:d,defaultContext:f,containerTemplate:h,prerenderTemplate:void 0===g?rc:g,validate:m,logger:b,eligible:void 0===y?function(){return{eligible:!0}}:y,children:void 0===E?function(){return{}}:E,exports:"function"==typeof x?x:function(e){for(var t=e.getExports,r={},n=0,o=Object.keys(x);n<o.length;n++)!function(e,n){var o=n[e],i=x[o].type,a=t().then(function(e){return e[o]});r[o]=i===tG.FUNCTION?function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.then(function(e){return e.apply(void 0,t)})}:a}(n,o);return r}}}(e),o=n.name,a=n.tag,s=n.defaultContext,c=n.propsDef,l=n.eligible,d=n.children,u=tU(window),f={},h=[],g=function(){if(function(e){try{return t1(window.name).name===e}catch(e){}return!1}(o)){var e=t4().payload;if(e.tag===a&&M(e.childDomainMatch,C()))return!0}return!1},m=ec(function(){if(g()){if(window.xprops)throw delete u.components[a],Error("Can not register "+o+" as child - child already registered");var e=function(e){var t,r=e.tag,n=e.propsDef,o=e.autoResize,i=e.allowedParentDomains,a=[],s=t4(),c=s.parent,l=s.payload,d=c.win,u=c.domain,f=new p,h=l.version,g=l.uid,m=l.exports,y=l.context,v=l.props;if("9_0_86"!==h)throw Error("Parent window has zoid version "+h+", child window has version 9_0_86");var b=m.show,_=m.hide,E=m.close,$=m.onError,O=m.checkClose,S=m.export,D=m.resize,N=m.init,P=function(){return d},T=function(){return u},j=function(e){return a.push(e),{cancel:function(){a.splice(a.indexOf(e),1)}}},I=function(e){return D.fireAndForget({width:e.width,height:e.height})},L=function(e){return f.resolve(e),S(e)},W=function(e){var n=(void 0===e?{}:e).anyParent,o=[],i=t.parent;if(void 0===n&&(n=!i),!n&&!i)throw Error("No parent found for "+r+" child");for(var a=0,s=R(window);a<s.length;a++){var c=s[a];if(A(c)){var l=k(c).xprops;if(l&&P()===l.getParent()){var d=l.parent;if(n||!i||d&&d.uid===i.uid){var u=tH(c,function(e){return e.exports});o.push({props:l,exports:u})}}}}return o},Y=function(e,o,i){void 0===i&&(i=!1);var s=function(e,t,r,n,o,i){void 0===i&&(i=!1);for(var a={},s=0,c=Object.keys(r);s<c.length;s++){var l=c[s],d=t[l];if(!d||!d.sameDomain||n===C(window)&&A(e)){var u=t5(t,0,l,r[l],o);a[l]=u,d&&d.alias&&!a[d.alias]&&(a[d.alias]=u)}}if(!i)for(var f=0,p=Object.keys(t);f<p.length;f++){var h=p[f];r.hasOwnProperty(h)||(a[h]=t5(t,0,h,void 0,o))}return a}(d,n,e,o,{tag:r,show:b,hide:_,close:E,focus:t6,onError:$,resize:I,getSiblings:W,onProps:j,getParent:P,getParentDomain:T,uid:g,export:L},i);t?ep(t,s):t=s;for(var c=0;c<a.length;c++)(0,a[c])(t)},U=function(e){return p.try(function(){return Y(e,u,!0)})};return{init:function(){return p.try(function(){return A(d)&&function(e){var t=e.componentName,r=e.parentComponentWindow,n=tJ({data:t1(window.name).serializedInitialPayload,sender:{win:r},basic:!0}),o=n.sender;if("uid"===n.reference.type||"global"===n.metaData.windowRef.type){var i=tX({data:n.data,metaData:{windowRef:function(e,t){if(void 0===t&&(t=window),e===w(t))return{type:"parent",distance:z(e)};if(e===x(t))return{type:"opener"};if(A(e)&&e!==F(e)){var r=k(e).name;if(r)return{type:"name",name:r}}}(r)},sender:{domain:o.domain},receiver:{win:window,domain:C()},basic:!0});window.name=t0({name:t,serializedPayload:i.serializedData})}}({componentName:e.name,parentComponentWindow:d}),tU(window).exports=e.exports({getExports:function(){return f}}),function(e,t){if(!M(e,t))throw Error("Can not be rendered by domain: "+t)}(i,u),tr(d),window.addEventListener("beforeunload",function(){O.fireAndForget()}),window.addEventListener("unload",function(){O.fireAndForget()}),B(d,function(){t8()}),N({updateProps:U,close:t8})}).then(function(){var e,t,r,n,i;return(t=void 0!==(e=o.width)&&e,n=void 0!==(r=o.height)&&r,eP(void 0===(i=o.element)?"body":i).catch(el).then(function(e){return{width:t,height:n,element:e}})).then(function(e){var t=e.width,r=e.height,n=e.element;n&&(t||r)&&y!==tK.POPUP&&eH(n,function(e){I({width:t?e.width:void 0,height:r?e.height:void 0})},{width:t,height:r})})}).catch(function(e){$(e)})},getProps:function(){return t||(Y(v,u),t)}}}(n);return e.init(),e}}),y=function e(t){var r,c="zoid-"+a+"-"+en(),u=t||{},f=l({props:u}),g=f.eligible,m=f.reason,y=u.onDestroy;u.onDestroy=function(){if(r&&g&&h.splice(h.indexOf(r),1),y)return y.apply(void 0,arguments)};var v=rt({uid:c,options:n});v.init(),g?v.setProps(u):u.onDestroy&&u.onDestroy(),rl.register(function(e){return v.destroy(e||Error("zoid destroyed all components"))});var b=function(t){var r=(void 0===t?{}:t).decorate;return e((void 0===r?function(e){return e}:r)(u))},w=function(e,t,n){return p.try(function(){if(!g){var t=Error(m||o+" component is not eligible");return v.destroy(t).then(function(){throw t})}if(!U(e))throw Error("Must pass window to renderTo");return p.try(function(){if(u.window)return tY(u.window).getType();if(n){if(n!==tK.IFRAME&&n!==tK.POPUP)throw Error("Unrecognized context: "+n);return n}return s})}).then(function(o){if(t=function(e,t){if(t){if("string"!=typeof t&&!eD(t))throw TypeError("Expected string or element selector to be passed");return t}if(e===tK.POPUP)return"body";throw Error("Expected element to be passed to render iframe")}(o,t),e!==window&&"string"!=typeof t)throw Error("Must pass string element when rendering to another window");return v.render({target:e,container:t,context:o,rerender:function(){var o=b();return ep(r,o),o.renderTo(e,t,n)}})}).catch(function(e){return v.destroy(e).then(function(){throw e})})};return r=i({},v.getExports(),v.getHelpers(),function(){for(var e=d(),t={},r=0,n=Object.keys(e);r<n.length;r++)!function(r,n){var o=n[r],a=e[o];t[o]=function(e){var t=v.getProps();return a(i({},e,{parent:{uid:c,props:t,export:v.export}}))}}(r,n);return t}(),{isEligible:function(){return g},clone:b,render:function(e,t){return w(window,e,t)},renderTo:function(e,t,r){return w(e,t,r)}}),g&&h.push(r),r};if(m(),t=tz("zoid_allow_delegate_"+o,function(){return!0}),r=tz("zoid_delegate_"+o,function(e){var t=e.data;return{parent:rt({uid:t.uid,options:n,overrides:t.overrides,parentWin:e.source})}}),rd.register(t.cancel),rd.register(r.cancel),u.components=u.components||{},u.components[a])throw Error("Can not register multiple components with the same tag: "+a);return u.components[a]=!0,{init:y,instances:h,driver:function(e,t){var r={react:rr,angular:ri,vue:rn,vue3:ro,angular2:ra};if(!r[e])throw Error("Could not find driver for framework: "+e);return f[e]||(f[e]=r[e].register(a,c,y,t)),f[e]},isChild:g,canRenderTo:function(e){return tM(e,"zoid_allow_delegate_"+o).then(function(e){return e.data}).catch(function(){return!1})},registerChild:m}}(e),h=function(e){return f.init(e)};h.driver=function(e,t){return f.driver(e,t)},h.isChild=function(){return f.isChild()},h.canRenderTo=function(e){return f.canRenderTo(e)},h.instances=f.instances;var g=f.registerChild();return g&&(window.xprops=h.xprops=g.getProps()),h};function rf(e){tW&&tW.destroyBridges();var t=rl.all(e);return rl=eC(),t}var rp=rf;function rh(e){var t;return rp(),delete window.__zoid_9_0_86__,function(){for(var e=e2("responseListeners"),t=0,r=e.keys();t<r.length;t++){var n=r[t],o=e.get(n);o&&(o.cancelled=!0),e.del(n)}}(),(t=e2().get("postMessageListener"))&&t.cancel(),delete window.__post_robot_10_0_44__,rd.all(e)}}],t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return({}).hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}()}}]);