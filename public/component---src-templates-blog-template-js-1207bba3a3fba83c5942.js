(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r}),a.d(t,"pageQuery",function(){return o});var n=a(0),c=a.n(n),i=a(173),A=a.n(i),s=a(172);a(191);function r(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html;return c.a.createElement(s.a,{pathname:"/blog/"},c.a.createElement(A.a,{title:a.title+" | Karthik Balaji",meta:[{name:"description",content:""+a.title},{name:"keywords",content:""+a.tags.join()},{name:"theme-color",content:"#540a2f"},{property:"og:site_name",content:"Kb TechSpace"},{property:"og:type",content:"article"},{property:"og:url",content:"https://kbtechspace.com"+a.path},{property:"og:title",content:""+a.title},{property:"og:image",content:""+a.banner},{property:"og:description",content:""+a.title},{property:"og:locale",content:"en_US"}],script:[{type:"application/ld+json",innerHTML:""+JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://kbtechspace.com"+a.path},headline:""+a.title,image:{"@type":"ImageObject",url:""+a.banner,height:630,width:1200},datePublished:""+a.date,dateModified:""+a.date,author:{"@type":"Person",name:"Karthik Balaji"},publisher:{"@type":"Organization",name:"KB TechSpace",logo:{"@type":"ImageObject",url:"https://user-images.githubusercontent.com/8594076/45932661-210beb00-bf9d-11e8-892c-192e9bba6750.jpg",width:257,height:60}},description:""+a.title})}]}),c.a.createElement("div",{className:"blog__post__container"},c.a.createElement("div",{className:"blog__post"},c.a.createElement("h1",{className:"blog__post__title"},a.title),c.a.createElement("p",{className:"blog__post__date"},a.date),c.a.createElement("div",{className:"blog__post__tags"},a.tags.map(function(e){return c.a.createElement("p",{className:"blog__post__tags__text"},e)})),c.a.createElement("div",{className:"blog__post__content",dangerouslySetInnerHTML:{__html:n}}))))}var o="2434926261"},168:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},169:function(e,t,a){e.exports=a.p+"static/logo-b51489f0407a34739c0c8e0d389bccdc.jpg"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"KB TechSpace"}},headerImage:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAaG3Nm/PzkklEMAP/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxAREiH/2gAIAQEAAQUCA5jVMmKJY/eN4d//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8BVuP/xAAbEAEAAQUBAAAAAAAAAAAAAAABABARICExgf/aAAgBAQAGPwKbLUESHD3H/8QAHRABAAEDBQAAAAAAAAAAAAAAAQARIVEQIGFxgf/aAAgBAQABPyFFQhQvVk0YuDuNSMzygsW82f/aAAwDAQACAAMAAAAQD/8Aff/EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQMBAT8QAjaf/8QAFREBAQAAAAAAAAAAAAAAAAAAIDH/2gAIAQIBAT8QiD//xAAcEAEAAgIDAQAAAAAAAAAAAAABESEAMRAgcZH/2gAIAQEAAT8QBjK4UK0oniFfISYQ1v7hRjKhsqBb917lsVQyqvp//9k=",aspectRatio:1,src:"/static/b51489f0407a34739c0c8e0d389bccdc/32ee9/logo.jpg",srcSet:"/static/b51489f0407a34739c0c8e0d389bccdc/68709/logo.jpg 310w,\n/static/b51489f0407a34739c0c8e0d389bccdc/32ee9/logo.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}},171:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),c=a.n(n),i=a(5),A=a.n(i),s=a(64),r=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};r.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=r},172:function(e,t,a){"use strict";var n=a(8),c=a.n(n),i=a(170),A=a(0),s=a.n(A),r=a(5),o=a.n(r),l=a(173),m=a.n(l),u=a(40),d=a.n(u),p=(a(168),s.a.createContext({}));function g(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,i=a?a.data:t[n]&&t[n].data;return s.a.createElement(s.a.Fragment,null,i&&c(i),!i&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var h=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return s.a.createElement(p.Consumer,null,function(e){return s.a.createElement(g,{data:t,query:a,render:n||c,staticQueryData:e})})};h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var E=a(174),b=a.n(E),f=function(e){var t=e.logo;return s.a.createElement("div",null,s.a.createElement(b.a,{sizes:t,alt:"KBTechSpace.com"}))},k=(a(41),a(175),a(95),a(167),function(e){return s.a.createElement(d.a,{className:"sideMenuContent-item-"+e.cls,to:e.pathname},s.a.createElement("div",{className:"sideMenuContent-item",onClick:function(){e.handleSideMenuSelect(e.label)},style:e.active?{color:"#ffffffeb"}:{color:"#babebf85"}},s.a.createElement("div",{className:"sideMenuContent-item-"+e.cls+"-icon"}),e.label))}),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleSideMenuSelect=function(e){a.state.sideMenuData.filter(function(t){return t.label===e}).map(function(e){return e.active=!0}),a.state.sideMenuData.filter(function(t){return t.label!==e}).map(function(e){return e.active=!1});a.props.toggleSideMenu()},a.state={sideMenuData:[{label:"HOME",path:"/",class:"home",active:!1},{label:"ABOUT",path:"/about/",class:"about",active:!1},{label:"BLOG",path:"/blog/",class:"blog",active:!1},{label:"RESUME",path:"/resume/",class:"resume",active:!1}]},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e="/"+this.props.defaultpath.split("/")[1]+"/",t="//"!==e?e:"/",a=this.state.sideMenuData.findIndex(function(e){return e.path===t});0!==a.length&&this.setState(Object.assign({},this.state,this.state.sideMenuData[a].active=!0))},a.componentWillUnmount=function(){},a.render=function(){var e=this;return s.a.createElement("section",{className:"sideMenuContent"},this.state.sideMenuData.map(function(t){return s.a.createElement(k,{key:t.label,label:t.label,pathname:t.path,cls:t.class,active:t.active,handleSideMenuSelect:e.handleSideMenuSelect})}))},t}(s.a.Component),y=function(){return s.a.createElement("footer",{className:"kbts-site-footer"},s.a.createElement("div",{className:"kbts-site-footer-social"},s.a.createElement("a",{style:{color:"#153371"},href:"https://www.facebook.com/karthik.balaji.7121",target:"_blank"},s.a.createElement("div",{className:"kbts-site-footer-social-fb-icon"})),s.a.createElement("a",{style:{color:"#9C27B0"},href:"https://www.instagram.com/kb_gixxer/",target:"_blank"},s.a.createElement("div",{className:"kbts-site-footer-social-insta-icon"})),s.a.createElement("a",{style:{color:"#2196F3"},href:"https://twitter.com/karthikbalaji99",target:"_blank"},s.a.createElement("div",{className:"kbts-site-footer-social-twitter-icon"})),s.a.createElement("a",{style:{color:"#015079"},href:"https://www.linkedin.com/in/karthikbalaji9294",target:"_blank"},s.a.createElement("div",{className:"kbts-site-footer-social-linkedin-icon"})),s.a.createElement("a",{style:{color:"#87969a"},href:"https://github.com/karthikbalajikb",target:"_blank"},s.a.createElement("div",{className:"kbts-site-footer-social-github-icon"}))),s.a.createElement("div",null," © 2018 KB TechSpace "))},M=function(e){return s.a.createElement("nav",{className:"side-menu"},s.a.createElement(f,{logo:e.logo}),s.a.createElement(v,{defaultpath:e.pathname,toggleSideMenu:e.toggleSideMenu}),s.a.createElement(y,null))},N=(a(176),a(169)),j=a.n(N),B=(a(177),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleSideMenu=function(){"open"===a.state.sideMenu?(document.getElementsByClassName("kbts-site-container")[0].style["grid-template-columns"]="auto",a.setState({sideMenu:"closed"})):"closed"===a.state.sideMenu&&(document.getElementsByClassName("kbts-site-container")[0].style["grid-template-columns"]="120px auto",a.setState({sideMenu:"open"}))},a.state={sideMenu:"closed"},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.getElementById("kbts-sidemenu-btn").addEventListener("click",this.toggleSideMenu)},a.componentWillUnmount=function(){document.getElementById("kbts-sidemenu-btn").removeEventListener("click",this.toggleSideMenu)},a.render=function(){var e=this,t=this.props.pathname;return s.a.createElement(h,{query:"3945894379",render:function(a){return s.a.createElement("div",null,s.a.createElement(m.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Blog"},{name:"keywords",content:"Blog, Javascript, ES6, Learn, Guide, Personal,"},{name:"theme-color",content:"#540a2f"},{name:"google-site-verification",content:"hWW4kdk43dHsMIBS9TbQF0dD0AHI7IBzcMM1K4sEOmI"}],link:[{rel:"shortcut icon",type:"image/jpg",href:""+j.a}]}),s.a.createElement("div",{className:"kbts-site-container"},s.a.createElement(M,{logo:a.headerImage.sizes,pathname:t,toggleSideMenu:e.toggleSideMenu}),s.a.createElement("section",{className:"kbts-site-main"},s.a.createElement("header",{className:"kbts-site-header"},s.a.createElement("a",{id:"kbts-sidemenu-btn",className:"kbts-site-header-menu"}),s.a.createElement("a",{className:"kbts-site-header-text"},"KB TECHSPACE")),s.a.createElement("main",{className:"site-main-content"},e.props.children))))},data:i})},t}(s.a.Component));B.propTypes={children:o.a.func};t.a=B}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-1207bba3a3fba83c5942.js.map