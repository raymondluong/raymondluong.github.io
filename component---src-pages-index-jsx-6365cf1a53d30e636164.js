(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(159),c=a.n(l),o=a(160),m=a(171),p=a(162),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(m.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement(o.a,null,i.a.createElement(c.a,null,i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:n})),i.a.createElement(p.a,this.props),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},e)))},t}(i.a.Component);t.default=u;var d="127259622"},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(159),c=a.n(l),o=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"layout"},i.a.createElement(c.a,{defaultTitle:"Blog by John Doe"}),e)},t}(i.a.Component));t.a=o},161:function(e,t,a){e.exports=a.p+"static/photo-1eb7c87d36b0c51a4ba935ffcf57458b.jpg"},162:function(e,t,a){"use strict";a(164);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(165),c=a.n(l),o=a(56),m=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=(a(167),a(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.github,a=e.instagram,n=e.twitter;return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.instagram.com/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-instagram"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.twitter.com/"+n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-twitter"})))))},t}(i.a.Component)),u=a(161),d=a.n(u),_=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.menu,l="/"===c()(e,"pathname","/"),u=i.a.createElement(s.Fragment,null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:d.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),l?i.a.createElement("h1",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},u),i.a.createElement(m,{data:r}),i.a.createElement(p,{data:a})))},t}(i.a.Component));t.a=_},171:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(56),c=a(175),o=a.n(c),m=(a(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,c=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:o()(a).format("MMMM D, YYYY")},o()(a).format("MMMM YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:c},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:c},"Read"))},t}(i.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-jsx-6365cf1a53d30e636164.js.map