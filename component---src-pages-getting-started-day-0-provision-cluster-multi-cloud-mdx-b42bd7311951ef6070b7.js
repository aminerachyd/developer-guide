(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),o=n.n(r),s=n("Wbzz"),l=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),u=n.n(b),p=n("QH2O"),d=n.n(p),m=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},n)))))},f=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},g=n("dI71"),j=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===a,l=new RegExp(a+"/?(#.*)?$"),c=n.replace(l,i);return Object(m.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(m.b)(s.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},i))))))},t}(i.a.Component),v=n("MjG9"),T=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=b.tabs,f=b.title,g=b.theme,j=b.description,w=b.keywords,y=Object(T.a)().interiorTheme,N=Object(s.useStaticQuery)("223705900").site.pathPrefix,k=N?a.pathname.replace(N,""):a.pathname,C=d?k.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",P=g||y;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:P,pageTitle:f,pageDescription:j,pageKeywords:w,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):f,label:"label",tabs:d,theme:P}),d&&Object(m.b)(x,{slug:k,tabs:d,currentTab:C}),Object(m.b)(v.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(l.a,null))}},uEFl:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return f}));var a=n("wx14"),i=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("XbGe"),s=n("T0C+"),l=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},b=c("PageDescription"),u=c("CardGroup"),p=c("MiniCard"),d=c("InlineNotification"),m={_frontmatter:l},h=o.a;function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(h,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"PageDescription"},Object(r.b)("p",null,"Provides the considerations and steps to prepare an OpenShift cluster for\nan installation of ",Object(r.b)(s.a,{name:"shortName",mdxType:"Globals"})," ",Object(r.b)(s.a,{name:"env",mdxType:"Globals"}),". ")),Object(r.b)("h2",null,"1. Provision the cluster"),Object(r.b)("p",null,"Provisioning the OpenShift cluster is the minimum requirement to prepare for the Toolkit install. The cluster could be\nOpenShift CRC running on a laptop, a cloud-managed OpenShift cluster on AWS or Azure, or an on-premise install of\nOpenShift. We’ll leave the steps to provision to you since the details will vary considerably depending upon the\napproach. However, whichever platform you use we highly recommend utilizing or developing automation scripts to\nperform the provisioning, so that it can be done repeatably."),Object(r.b)("p",null,"Here are some resources that might help get started:"),Object(r.b)(u,{mdxType:"CardGroup"},Object(r.b)(p,{title:"OpenShift CRC setup",href:"../prepare-account/openshift-crc-setup",mdxType:"MiniCard"}),Object(r.b)(p,{title:"OpenShift on AWS",href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws",mdxType:"MiniCard"}),Object(r.b)(p,{title:"OpenShift on GCP",href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-gcp",mdxType:"MiniCard"}),Object(r.b)(p,{title:"OpenShift on Azure",href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-azure",mdxType:"MiniCard"}),Object(r.b)(p,{title:"OpenShift on VMWare",href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-vmware",mdxType:"MiniCard"})),Object(r.b)(d,{mdxType:"InlineNotification"},Object(r.b)("p",null,"The ",Object(r.b)(s.a,{name:"longName",mdxType:"Globals"})," is not responsible for maintaining the Terraform scripts provided in the links above\nand does not give any guarantee as to their current condition. If there are any issues with those scripts it would be\nbest to pursue it with the maintainers by raising issues against the appropriate repository.")),Object(r.b)("h2",null,"2. Configure access to the cluster"),Object(r.b)("p",null,"In order to interact with the cluster, user credentials need to be established having Cluster Admin rights. The initial\n",Object(r.b)("inlineCode",{parentName:"p"},"kubeadmin")," user (or whatever name is used after it is changed) can be used or a new user can be added for use by\nthe provisioning scripts."),Object(r.b)("h2",null,"Next steps"),Object(r.b)("p",null,"Now that the cluster has been provisioned and the access control has been configured, you are ready to move to the next\nstep and perform the installation with the Toolkit. Before moving on, be sure to record the following information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OpenShift login user (user id with Cluster Admin permission)"),Object(r.b)("li",{parentName:"ul"},"OpenShift login password"),Object(r.b)("li",{parentName:"ul"},"OpenShift server url")),Object(r.b)("p",null,"For installation, use the ",Object(r.b)("a",{parentName:"p",href:"../install-toolkit/quick-install"},"Quick Install")," or ",Object(r.b)("a",{parentName:"p",href:"../install-toolkit/iteration-zero"},"Iteration Zero")," scripts.\nFollow the step-by-step instructions to get the ",Object(r.b)(s.a,{name:"shortName",mdxType:"Globals"})," installed."),Object(r.b)(d,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"../install-toolkit/private-catalog"},"Private Catalog")," installation cannot be used outside of the IBM Cloud.")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-provision-cluster-multi-cloud-mdx-b42bd7311951ef6070b7.js.map