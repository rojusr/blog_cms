(function(e){function t(t){for(var i,a,r=t[0],u=t[1],c=t[2],h=0,d=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,a=1;a<o.length;a++){var r=o[a];0!==n[r]&&(i=!1)}i&&(s.splice(t--,1),e=u(u.s=o[0]))}return e}var i={},a={app:0},n={app:0},s=[];function r(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-4e20e0ce":"062a739c","chunk-724ec784":"8d927d1e",about:"c70b832a","chunk-98f111b8":"aa54d133"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={"chunk-4e20e0ce":1,"chunk-724ec784":1,about:1,"chunk-98f111b8":1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var i="css/"+({about:"about"}[e]||e)+"."+{"chunk-4e20e0ce":"6e6b5c17","chunk-724ec784":"d7ddbaa9",about:"3cbf6e3b","chunk-98f111b8":"99418ddc"}[e]+".css",n=u.p+i,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],h=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(h===i||h===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],h=c.getAttribute("data-href");if(h===i||h===n)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var i=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete a[e],l.parentNode.removeChild(l),o(s)},l.href=n;var y=document.getElementsByTagName("head")[0];y.appendChild(l)})).then((function(){a[e]=0})));var i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,o){i=n[e]=[t,o]}));t.push(i[2]=s);var c,h=document.createElement("script");h.charset="utf-8",h.timeout=120,u.nc&&h.setAttribute("nonce",u.nc),h.src=r(e);var d=new Error;c=function(t){h.onerror=h.onload=null,clearTimeout(l);var o=n[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,o[1](d)}n[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:h})}),12e4);h.onerror=h.onload=c,document.head.appendChild(h)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(o,i,function(t){return e[t]}.bind(null,i));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=h;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"34ca":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e._v(" | "),o("router-link",{attrs:{to:"/"}},[e._v("Preview")])],1),o("main",{staticClass:"pa-6"},[o("router-view")],1)])},n=[],s=(o("cf25"),o("2877")),r=o("6544"),u=o.n(r),c=o("7496"),h={},d=Object(s["a"])(h,a,n,!1,null,null,null),l=d.exports;u()(d,{VApp:c["a"]});o("d3b7");var y=o("5530"),m=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("Blog")],1)},w=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"blog pa-12"},e._l(e.posts,(function(t,i){return o("router-link",{key:i,staticClass:"card",class:{wide:t.featuredImage},attrs:{to:{name:"Post",params:{id:t.id}}}},[t.featuredImage?o("div",{staticClass:"featured"},[o("img",{attrs:{src:t.featuredImage}})]):e._e(),o("div",{staticClass:"body pa-6"},[o("div",[o("h4",[e._v(e._s(t.title))])]),o("div",[o("p",[e._v(e._s(e.getDate(t.date)))])]),o("div",{staticClass:"excerpt"},[o("div",{staticClass:"excerpt-inner"},[t.featuredImage?o("div",{staticClass:"excerpt-top"},[e._v(e._s(e.stripHTML(t.content).substr(0,160))+"...")]):e._e(),t.featuredImage?o("div",{staticClass:"excerpt-low"},[e._v("..."+e._s(e.stripHTML(t.content).substr(160,500))+"...")]):e._e(),t.featuredImage?e._e():o("div",{staticClass:"excerpt-top"},[e._v(e._s(e.stripHTML(t.content).substr(0,360))+"...")]),t.featuredImage?e._e():o("div",{staticClass:"excerpt-low"},[e._v("..."+e._s(e.stripHTML(t.content).substr(360,500))+"...")])])])])])})),1)},f=[],k=(o("4de4"),{name:"Blog",data:function(){return{}},props:{},methods:{stripHTML:function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},getDate:function(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},computed:{posts:function(){return this.$store.state.posts.sort((function(e,t){return new Date(e.date)>new Date(t.date)?-1:1})).filter((function(e){return"published"==e.status}))}}}),b=k,v=(o("9eb2"),Object(s["a"])(b,g,f,!1,null,"44c838ec",null)),x=v.exports,I={name:"Preview",components:{Blog:x}},T=I,M=Object(s["a"])(T,p,w,!1,null,null,null),H=M.exports;i["a"].use(m["a"]);var _=[{path:"/",name:"Preview",component:H},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([o.e("chunk-724ec784"),o.e("about")]).then(o.bind(null,"7277"))}},{path:"/edit",name:"Edit",props:!0,component:function(){return Promise.all([o.e("chunk-724ec784"),o.e("chunk-98f111b8")]).then(o.bind(null,"1071"))}},{path:"/post/:id",name:"Post",props:function(e){var t=Object(y["a"])({},e.params);return t.id=+t.id,t},component:function(){return o.e("chunk-4e20e0ce").then(o.bind(null,"8ba0"))}}],q=new m["a"]({mode:"history",base:"",routes:_,scrollBehavior:function(e,t,o){return o||{x:0,y:0}}}),Y=q,D=o("2f62");i["a"].use(D["a"]);var F=new D["a"].Store({state:{posts:[{title:"The details make the design",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"https://images.unsplash.com/photo-1553531888-a5892402adce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80",id:1,date:"2020",status:"published"},{title:"A new generation of wireless headsets is here and will stay forever",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:2,date:"2021",status:"published"},{title:"The annual report of the Interior department",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",id:3,date:"2020",status:"published"},{title:"Why are so many people obsessed with Supreme?",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80",id:4,date:"2019",status:"published"},{title:"This is an amazing year for every sneakerhead",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:5,date:"2018",status:"published"},{title:"Heaven to Hell, the new Jennell Leibowitz book",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time",featuredImage:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",id:6,date:"2020",status:"published"},{title:"This is an amazing year for every sneakerhead",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:7,date:"2020",status:"published"},{title:"The details make the design",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",id:8,date:"2018",status:"published"},{title:"This is an amazing year for every sneakerhead",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:9,date:"2017",status:"published"},{title:"A new generation of wireless headsets is here",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",id:10,date:"2021",status:"published"},{title:"This is an amazing year for every sneakerhead",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:11,date:"2021",status:"published"},{title:"This is an amazing year for every sneakerhead",content:"<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",excerpt:"When you are alone for days or weeks at a time, you eventually become drawn to…",featuredImage:"",id:12,date:"2020",status:"published"}]},mutations:{},actions:{},modules:{}}),R=o("5873"),W=(o("34ca"),o("f309")),j=o("fcf4");i["a"].use(W["a"]);var C=new W["a"]({theme:{themes:{light:{primary:"#42b983",secondary:j["a"].red.lighten4,accent:j["a"].indigo.base}}}});i["a"].use(R["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Y,store:F,vuetify:C,render:function(e){return e(l)}}).$mount("#app")},"9eb2":function(e,t,o){"use strict";o("cf2f")},cf25:function(e,t,o){"use strict";o("fea6")},cf2f:function(e,t,o){},fea6:function(e,t,o){}});
//# sourceMappingURL=app.cb35ed56.js.map