(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{158:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(159),o=a.n(l),c=a(160),m=a(162),p=a(171),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.tag;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(i.a.createElement(p.a,{data:t,key:t.node.fields.slug}))}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"content__inner"},i.a.createElement("div",{className:"page"},i.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',t,'"'),i.a.createElement("div",{className:"page__body"},e))))},t}(i.a.Component);a.d(t,"pageQuery",function(){return h});var d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag;return i.a.createElement(c.a,null,i.a.createElement(o.a,{title:'All Posts tagged as "'+t+'" - '+e}),i.a.createElement(m.a,this.props),i.a.createElement(u,this.props))},t}(i.a.Component),h=(t.default=d,"1886096498")},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(159),o=a.n(l),c=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"layout"},i.a.createElement(o.a,{defaultTitle:"Blog by John Doe"}),e)},t}(i.a.Component));t.a=c},161:function(e,t,a){e.exports=a.p+"static/photo-1eb7c87d36b0c51a4ba935ffcf57458b.jpg"},162:function(e,t,a){"use strict";a(164);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(165),o=a.n(l),c=a(56),m=(a(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(c.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),p=(a(167),a(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.linkedin,a=e.github,n=e.instagram;return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.instagram.com/"+n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-instagram"})))))},t}(i.a.Component)),u=a(161),d=a.n(u),h=(a(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.menu,l="/"===o()(e,"pathname","/"),u=i.a.createElement(s.Fragment,null,i.a.createElement(c.Link,{to:"/"},i.a.createElement("img",{src:d.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),l?i.a.createElement("h1",{className:"sidebar__author-title"},i.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},u),i.a.createElement(m,{data:r}),i.a.createElement(p,{data:a})))},t}(i.a.Component));t.a=h},171:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(56),o=a(172),c=a.n(o),m=(a(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,s=this.props.data.node.fields,o=s.slug,m=s.categorySlug;return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__meta"},i.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("MMMM D, YYYY")),i.a.createElement("span",{className:"post__meta-divider"}),i.a.createElement("span",{className:"post__meta-category",key:m},i.a.createElement(l.Link,{to:m,className:"post__meta-category-link"},n))),i.a.createElement("h2",{className:"post__title"},i.a.createElement(l.Link,{className:"post__title-link",to:o},t)),i.a.createElement("p",{className:"post__description"},r),i.a.createElement(l.Link,{className:"post__readmore",to:o},"Read"))},t}(i.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-fe8f0d0a3f34e8569beb.js.map