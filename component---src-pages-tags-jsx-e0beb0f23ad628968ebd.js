(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});var n=a(7),r=a.n(n),i=a(0),u=a.n(i),l=a(56),s=a(159),c=a.n(s),o=a(181),f=a.n(o),m=a(160),d=a(162),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return u.a.createElement(m.a,null,u.a.createElement("div",null,u.a.createElement(c.a,{title:"All Tags - "+e}),u.a.createElement(d.a,this.props),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content__inner"},u.a.createElement("div",{className:"page"},u.a.createElement("h1",{className:"page__title"},"Tags"),u.a.createElement("div",{className:"page__body"},u.a.createElement("div",{className:"tags"},u.a.createElement("ul",{className:"tags__list"},t.map(function(e){return u.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},u.a.createElement(l.Link,{to:"/tags/"+f()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(u.a.Component);t.default=p;var E="1865961123"},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),u=a.n(i),l=a(159),s=a.n(l),c=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return u.a.createElement("div",{className:"layout"},u.a.createElement(s.a,{defaultTitle:"Blog by John Doe"}),e)},t}(u.a.Component));t.a=c},161:function(e,t,a){e.exports=a.p+"static/photo-1eb7c87d36b0c51a4ba935ffcf57458b.jpg"},162:function(e,t,a){"use strict";a(164);var n=a(7),r=a.n(n),i=a(0),u=a.n(i),l=a(165),s=a.n(l),c=a(56),o=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=u.a.createElement("ul",{className:"menu__list"},e.map(function(e){return u.a.createElement("li",{className:"menu__list-item",key:e.path},u.a.createElement(c.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return u.a.createElement("nav",{className:"menu"},t)},t}(u.a.Component)),f=(a(167),a(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.github,a=e.instagram,n=e.twitter;return u.a.createElement("div",{className:"links"},u.a.createElement("ul",{className:"links__list"},u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"icon-github"}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.instagram.com/"+a,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"icon-instagram"}))),u.a.createElement("li",{className:"links__list-item"},u.a.createElement("a",{href:"https://www.twitter.com/"+n,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("i",{className:"icon-twitter"})))))},t}(u.a.Component)),m=a(161),d=a.n(m),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.menu,i="/"===s()(e,"pathname","/"),l=u.a.createElement("div",null,u.a.createElement(c.Link,{to:"/"},u.a.createElement("img",{src:d.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),i?u.a.createElement("h1",{className:"sidebar__author-title"},u.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):u.a.createElement("h2",{className:"sidebar__author-title"},u.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),u.a.createElement("p",{className:"sidebar__author-subtitle"},n));return u.a.createElement("div",{className:"sidebar"},u.a.createElement("div",{className:"sidebar__inner"},u.a.createElement("div",{className:"sidebar__author"},l),u.a.createElement("div",null,u.a.createElement(o,{data:r}),u.a.createElement(f,{data:a}))))},t}(u.a.Component));t.a=p},181:function(e,t,a){var n=a(182)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},182:function(e,t,a){var n=a(183),r=a(184),i=a(187),u=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(u,"")),e,"")}}},183:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},184:function(e,t,a){var n=a(185),r=a(170),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(u,"")}},185:function(e,t,a){var n=a(186)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},186:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},187:function(e,t,a){var n=a(188),r=a(189),i=a(170),u=a(190);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?u(e):n(e):e.match(t)||[]}},188:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},189:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},190:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",o="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+u+"|"+l+")",m="(?:"+o+"|"+l+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,c].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),E="(?:"+[i,s,c].join("|")+")"+p,h=RegExp([o+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,o,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,o+f,"$"].join("|")+")",o+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",o+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,E].join("|"),"g");e.exports=function(e){return e.match(h)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-e0beb0f23ad628968ebd.js.map