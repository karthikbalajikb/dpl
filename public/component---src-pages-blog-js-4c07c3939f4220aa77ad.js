(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(172),c=a(178),A=a(40),l=a.n(A),i=(a(202),function(e){var t=e.post;return s.a.createElement("div",null,s.a.createElement(l.a,{to:t.frontmatter.path,className:"kbts-post-link"},t.frontmatter.title," (",t.frontmatter.date,")"))}),o=(a(95),a(174)),m=a.n(o),u=(a(203),function(e){return s.a.createElement("article",{className:"kbts-card"},s.a.createElement("div",{className:"kbts-card-image"},""===e.post.frontmatter.banner||null===e.post.frontmatter.banner?s.a.createElement(m.a,{sizes:e.logo,alt:"KBTechSpace.com"}):s.a.createElement("img",{src:e.post.frontmatter.banner,alt:"test"}),s.a.createElement("div",{className:"kbts-card-image-link"},s.a.createElement(i,{key:e.key,post:e.post}))),s.a.createElement("div",{className:"kbts-card-title"},s.a.createElement("span",{className:"kbts-card-title-date"},s.a.createElement("span",null,e.post.frontmatter.date.split(" ")[1].substr(0,2)),function(e){return e.split(" ")[0].substr(0,3)}(e.post.frontmatter.date)),s.a.createElement("p",null,e.post.frontmatter.title)))});a(204);a.d(t,"BlogPageQuery",function(){return d});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=t.headerImage.sizes;return s.a.createElement(r.a,{pathname:"/blog/"},s.a.createElement("section",null,s.a.createElement(c.a,{title:"blog",logo:"fas fa-newspaper"}),s.a.createElement("section",{className:"kbts-page-blog"},a.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return s.a.createElement(u,{logo:n,key:e.node.id,post:e.node})}))))};var d="125839968"},168:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},169:function(e,t,a){e.exports=a.p+"static/logo-b51489f0407a34739c0c8e0d389bccdc.jpg"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"KB TechSpace"}},headerImage:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAaG3Nm/PzkklEMAP/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxAREiH/2gAIAQEAAQUCA5jVMmKJY/eN4d//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8BVuP/xAAbEAEAAQUBAAAAAAAAAAAAAAABABARICExgf/aAAgBAQAGPwKbLUESHD3H/8QAHRABAAEDBQAAAAAAAAAAAAAAAQARIVEQIGFxgf/aAAgBAQABPyFFQhQvVk0YuDuNSMzygsW82f/aAAwDAQACAAMAAAAQD/8Aff/EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQMBAT8QAjaf/8QAFREBAQAAAAAAAAAAAAAAAAAAIDH/2gAIAQIBAT8QiD//xAAcEAEAAgIDAQAAAAAAAAAAAAABESEAMRAgcZH/2gAIAQEAAT8QBjK4UK0oniFfISYQ1v7hRjKhsqBb917lsVQyqvp//9k=",aspectRatio:1,src:"/static/b51489f0407a34739c0c8e0d389bccdc/32ee9/logo.jpg",srcSet:"/static/b51489f0407a34739c0c8e0d389bccdc/68709/logo.jpg 310w,\n/static/b51489f0407a34739c0c8e0d389bccdc/32ee9/logo.jpg 500w",sizes:"(max-width: 500px) 100vw, 500px"}}}}},171:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),s=a.n(n),r=a(5),c=a.n(r),A=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},172:function(e,t,a){"use strict";var n=a(8),s=a.n(n),r=a(170),c=a(0),A=a.n(c),l=a(5),i=a.n(l),o=a(173),m=a.n(o),u=a(40),d=a.n(u),p=(a(168),A.a.createContext({}));function E(e){var t=e.staticQueryData,a=e.data,n=e.query,s=e.render,r=a?a.data:t[n]&&t[n].data;return A.a.createElement(A.a.Fragment,null,r&&s(r),!r&&A.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,a=e.query,n=e.render,s=e.children;return A.a.createElement(p.Consumer,null,function(e){return A.a.createElement(E,{data:t,query:a,render:n||s,staticQueryData:e})})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var g=a(174),b=a.n(g),h=function(e){var t=e.logo;return A.a.createElement("div",null,A.a.createElement(b.a,{sizes:t,alt:"KBTechSpace.com"}))},k=(a(41),a(175),a(95),a(167),function(e){return A.a.createElement(d.a,{className:"sideMenuContent-item-"+e.cls,to:e.pathname},A.a.createElement("div",{className:"sideMenuContent-item",onClick:function(){e.handleSideMenuSelect(e.label)},style:e.active?{color:"#ffffffeb"}:{color:"#babebf85"}},A.a.createElement("div",{className:"sideMenuContent-item-"+e.cls+"-icon"}),e.label))}),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleSideMenuSelect=function(e){a.state.sideMenuData.filter(function(t){return t.label===e}).map(function(e){return e.active=!0}),a.state.sideMenuData.filter(function(t){return t.label!==e}).map(function(e){return e.active=!1});a.props.toggleSideMenu()},a.state={sideMenuData:[{label:"HOME",path:"/",class:"home",active:!1},{label:"ABOUT",path:"/about/",class:"about",active:!1},{label:"BLOG",path:"/blog/",class:"blog",active:!1},{label:"RESUME",path:"/resume/",class:"resume",active:!1}]},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e="/"+this.props.defaultpath.split("/")[1]+"/",t="//"!==e?e:"/",a=this.state.sideMenuData.findIndex(function(e){return e.path===t});0!==a.length&&this.setState(Object.assign({},this.state,this.state.sideMenuData[a].active=!0))},a.componentWillUnmount=function(){},a.render=function(){var e=this;return A.a.createElement("section",{className:"sideMenuContent"},this.state.sideMenuData.map(function(t){return A.a.createElement(k,{key:t.label,label:t.label,pathname:t.path,cls:t.class,active:t.active,handleSideMenuSelect:e.handleSideMenuSelect})}))},t}(A.a.Component),M=function(){return A.a.createElement("footer",{className:"kbts-site-footer"},A.a.createElement("div",{className:"kbts-site-footer-social"},A.a.createElement("a",{style:{color:"#153371"},href:"https://www.facebook.com/karthik.balaji.7121",target:"_blank"},A.a.createElement("div",{className:"kbts-site-footer-social-fb-icon"})),A.a.createElement("a",{style:{color:"#9C27B0"},href:"https://www.instagram.com/kb_gixxer/",target:"_blank"},A.a.createElement("div",{className:"kbts-site-footer-social-insta-icon"})),A.a.createElement("a",{style:{color:"#2196F3"},href:"https://twitter.com/karthikbalaji99",target:"_blank"},A.a.createElement("div",{className:"kbts-site-footer-social-twitter-icon"})),A.a.createElement("a",{style:{color:"#015079"},href:"https://www.linkedin.com/in/karthikbalaji9294",target:"_blank"},A.a.createElement("div",{className:"kbts-site-footer-social-linkedin-icon"})),A.a.createElement("a",{style:{color:"#87969a"},href:"https://github.com/karthikbalajikb",target:"_blank"},A.a.createElement("div",{className:"kbts-site-footer-social-github-icon"}))),A.a.createElement("div",null," © 2018 KB TechSpace "))},N=function(e){return A.a.createElement("nav",{className:"side-menu"},A.a.createElement(h,{logo:e.logo}),A.a.createElement(v,{defaultpath:e.pathname,toggleSideMenu:e.toggleSideMenu}),A.a.createElement(M,null))},B=(a(176),a(169)),Q=a.n(B),j=(a(177),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleSideMenu=function(){"open"===a.state.sideMenu?(document.getElementsByClassName("kbts-site-container")[0].style["grid-template-columns"]="auto",a.setState({sideMenu:"closed"})):"closed"===a.state.sideMenu&&(document.getElementsByClassName("kbts-site-container")[0].style["grid-template-columns"]="120px auto",a.setState({sideMenu:"open"}))},a.state={sideMenu:"closed"},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.getElementById("kbts-sidemenu-btn").addEventListener("click",this.toggleSideMenu)},a.componentWillUnmount=function(){document.getElementById("kbts-sidemenu-btn").removeEventListener("click",this.toggleSideMenu)},a.render=function(){var e=this,t=this.props.pathname;return A.a.createElement(f,{query:"3945894379",render:function(a){return A.a.createElement("div",null,A.a.createElement(m.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Blog"},{name:"keywords",content:"Blog, Javascript, ES6, Learn, Guide, Personal,"},{name:"theme-color",content:"#540a2f"},{name:"google-site-verification",content:"hWW4kdk43dHsMIBS9TbQF0dD0AHI7IBzcMM1K4sEOmI"}],link:[{rel:"shortcut icon",type:"image/jpg",href:""+Q.a}]}),A.a.createElement("div",{className:"kbts-site-container"},A.a.createElement(N,{logo:a.headerImage.sizes,pathname:t,toggleSideMenu:e.toggleSideMenu}),A.a.createElement("section",{className:"kbts-site-main"},A.a.createElement("header",{className:"kbts-site-header"},A.a.createElement("a",{id:"kbts-sidemenu-btn",className:"kbts-site-header-menu"}),A.a.createElement("a",{className:"kbts-site-header-text"},"KB TECHSPACE")),A.a.createElement("main",{className:"site-main-content"},e.props.children))))},data:r})},t}(A.a.Component));j.propTypes={children:i.a.func};t.a=j},178:function(e,t,a){"use strict";var n=a(0),s=a.n(n);a(180);t.a=function(e){return s.a.createElement("h1",{className:"kbts-page-header"}," ",s.a.createElement("i",{className:e.logo})," ",e.title)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4c07c3939f4220aa77ad.js.map