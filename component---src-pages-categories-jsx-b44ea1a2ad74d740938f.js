(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});var n=a(7),r=a.n(n),i=a(181),l=a.n(i),s=a(0),c=a.n(s),u=a(56),o=a(159),m=a.n(o),f=a(160),d=a(162),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(m.a,{title:"All Categories - "+e}),c.a.createElement(d.a,this.props),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content__inner"},c.a.createElement("div",{className:"page"},c.a.createElement("h1",{className:"page__title"},"Categories"),c.a.createElement("div",{className:"page__body"},c.a.createElement("div",{className:"categories"},c.a.createElement("ul",{className:"categories__list"},t.map(function(e){return c.a.createElement("li",{key:e.fieldValue,className:"categories__list-item"},c.a.createElement(u.Link,{to:"/categories/"+l()(e.fieldValue)+"/",className:"categories__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(c.a.Component);t.default=p;var E="59674768"},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(159),c=a.n(s),u=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(c.a,{defaultTitle:"Blog by John Doe"}),e)},t}(l.a.Component));t.a=u},161:function(e,t,a){e.exports=a.p+"static/photo-1eb7c87d36b0c51a4ba935ffcf57458b.jpg"},162:function(e,t,a){"use strict";a(164);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(165),c=a.n(s),u=a(56),o=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=l.a.createElement("ul",{className:"menu__list"},e.map(function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.path},l.a.createElement(u.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return l.a.createElement("nav",{className:"menu"},t)},t}(l.a.Component)),m=(a(167),a(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t={telegram:e.telegram,twitter:e.twitter,github:e.github,vk:e.vk,rss:e.rss,email:e.email};return l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.twitter.com/"+t.twitter,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-twitter"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.github.com/"+t.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.vk.com/"+t.vk,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-vkontakte"})))),l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"mailto:"+t.email},l.a.createElement("i",{className:"icon-mail"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"telegram:"+t.telegram},l.a.createElement("i",{className:"icon-paper-plane"})))),l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:t.rss},l.a.createElement("i",{className:"icon-rss"})))))},t}(l.a.Component)),f=a(161),d=a.n(f),p=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,s="/"===c()(e,"pathname","/"),f=l.a.createElement("div",null,l.a.createElement(u.Link,{to:"/"},l.a.createElement("img",{src:d.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),s?l.a.createElement("h1",{className:"sidebar__author-title"},l.a.createElement(u.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):l.a.createElement("h2",{className:"sidebar__author-title"},l.a.createElement(u.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),l.a.createElement("p",{className:"sidebar__author-subtitle"},n));return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__inner"},l.a.createElement("div",{className:"sidebar__author"},f),l.a.createElement("div",null,l.a.createElement(o,{data:i}),l.a.createElement(m,{data:a}),l.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(l.a.Component));t.a=p},181:function(e,t,a){var n=a(182)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},182:function(e,t,a){var n=a(183),r=a(184),i=a(187),l=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(l,"")),e,"")}}},183:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},184:function(e,t,a){var n=a(185),r=a(170),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(l,"")}},185:function(e,t,a){var n=a(186)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},186:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},187:function(e,t,a){var n=a(188),r=a(189),i=a(170),l=a(190);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?l(e):n(e):e.match(t)||[]}},188:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},189:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},190:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",o="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+l+"|"+s+")",f="(?:"+o+"|"+s+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,u].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),E="(?:"+[i,c,u].join("|")+")"+p,h=RegExp([o+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,o,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,o+m,"$"].join("|")+")",o+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",o+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,E].join("|"),"g");e.exports=function(e){return e.match(h)||[]}}}]);
//# sourceMappingURL=component---src-pages-categories-jsx-b44ea1a2ad74d740938f.js.map