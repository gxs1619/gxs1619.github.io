(this["webpackJsonpgxs1619.github.io"]=this["webpackJsonpgxs1619.github.io"]||[]).push([[0],{115:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(3),c=n.n(s),l=n(104),a=n.n(l),r=(n(115),n(29)),o=n(30),d=n(32),j=n(31),h=(n(44),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"contactForm",children:Object(i.jsx)("div",{className:"form-container",children:Object(i.jsxs)("form",{id:"contact",action:"https://formspree.io/griffinseibold@gmail.com",method:"POST",children:[Object(i.jsx)("h3",{children:"Contact"}),Object(i.jsx)("h4",{children:"Fill out the fields below"}),Object(i.jsx)("fieldset",{children:Object(i.jsx)("input",{name:"name",placeholder:"Your name",type:"text",tabIndex:"1",required:!0})}),Object(i.jsx)("fieldset",{children:Object(i.jsx)("input",{name:"email",placeholder:"Your Email Address",type:"email",tabIndex:"2",required:!0})}),Object(i.jsx)("fieldset",{children:Object(i.jsx)("input",{name:"subject",placeholder:"Subject",type:"text",tabIndex:"3",required:!0})}),Object(i.jsx)("fieldset",{children:Object(i.jsx)("textarea",{name:"message",placeholder:"Type your Message Here....",tabIndex:"4",required:!0})}),Object(i.jsx)("fieldset",{children:Object(i.jsx)("button",{name:"submit",type:"submit",id:"contact-submit","data-submit":"...Sending",children:"Submit"})})]})})})}}]),n}(c.a.Component)),b=n(105),m=n.n(b),x=n(308),p=n(309),u=n(106),O=n.n(u),v=n(107),g=n.n(v),y=n(42),f=n.n(y),w=n(55),N=n.n(w),k=(n(119),n(141),n.p,n.p+"static/media/castlylogo.e6c782d4.png"),S=(n(142),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={done:void 0,textIdx:-1,showMenu:!1,currentExpID:"mindex",items:[{id:"mindex",name:"Mindex"},{id:"halcyon",name:"Halcyon Developers"},{id:"transcat",name:"Transcat"},{id:"seibold",name:"Seibold Security"}]},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){var e=this;this.timeout=setInterval((function(){var t=e.state.textIdx;e.setState({textIdx:t+1,done:!0})}),2500)}},{key:"componentDidUnmount",value:function(){clearInterval(this.timeout)}},{key:"handleClick",value:function(){document.getElementById("mobileMenu").style.transitionDuration="1s",this.state.showMenu?(document.getElementById("mobileBlurMenu").style.display="none",document.getElementById("mobileMenu").style.transform="translate3d(100%, 0, 0)"):(document.getElementById("mobileMenu").style.transform="translate3d(0%, 0, 0)",document.getElementById("mobileBlurMenu").style.display="flex"),this.setState({showMenu:!this.state.showMenu}),this.state.done&&(this.timeout=setInterval((function(){document.getElementById("App-nav").style.transitionDuration="0s"}),1e3))}},{key:"handleScroll",value:function(e){document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"}),this.handleClick(),this.setState({showMenu:!1})}},{key:"handleScrollDesktop",value:function(e){document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"}),this.setState({showMenu:!1})}},{key:"handleExperienceToggle",value:function(e){var t=e.id,n=this.state.currentExpID;document.getElementById("experienceContainer"+n).style.display="none",document.getElementById("experienceContainer"+t).style.display="flex",this.setState({currentExpID:t.toString()})}},{key:"render",value:function(){var e=this,t=["Software","Websites","Web Applications","Desktop Applications","Mobile Apps","APIs","Databases"],n=t[this.state.textIdx%t.length];return Object(i.jsx)("div",{children:this.state.done?Object(i.jsx)("div",{children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsxs)("div",{className:"landingPageWrapper",children:[Object(i.jsxs)("div",{className:"helloText",style:{alignItems:"baseline",lineHeight:"0vw"},children:[Object(i.jsx)(g.a,{children:Object(i.jsx)("h1",{style:{color:"#00FF00",marginRight:"1vw",fontSize:"6vw"},children:"Hello,"})}),Object(i.jsx)(f.a,{right:!0,children:Object(i.jsx)("h1",{style:{color:"white",bottom:0,fontSize:"5vw"},children:"my name is Griffin"})})]}),Object(i.jsx)("div",{className:"makeText",children:Object(i.jsxs)("h3",{children:["and I build ",Object(i.jsx)("span",{style:{color:"#00FF00"},children:n})]})}),Object(i.jsx)("div",{className:"aboutText",children:Object(i.jsx)(N.a,{left:!0,children:Object(i.jsxs)("div",{className:"aboutWrapper",children:[Object(i.jsx)("h3",{style:{paddingLeft:"2vw",paddingRight:"2vw",fontSize:"1.65vh"},children:"A software engineering student at RIT pursuing two minors in economics and business administration. Looking for interesting and complex problems to solve."}),Object(i.jsx)("p",{style:{paddingLeft:"2vw",paddingRight:"2vw",fontSize:"1.7vh"},children:"Located in Rochester, NY."}),Object(i.jsx)("p",{style:{paddingLeft:"2vw",paddingRight:"2vw",fontSize:"1.5vh"},children:"Graduation Year: May 2022"})]})})}),Object(i.jsx)("div",{className:"connectWrapper",children:Object(i.jsx)("div",{className:"connectContent",children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/griffinseibold/",children:"Connect With Me"})})})]}),Object(i.jsx)("div",{className:"experienceWrapper",children:Object(i.jsxs)("div",{className:"experienceContent",children:[Object(i.jsx)("div",{className:"experienceLinkContainer",children:Object(i.jsx)("a",{id:"techstack"})}),Object(i.jsxs)("div",{className:"experienceContainer",children:[Object(i.jsx)(f.a,{left:!0,children:Object(i.jsxs)("div",{className:"techStackArea",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Tech Stack"})}),Object(i.jsx)("li",{children:"C#"}),Object(i.jsx)("li",{children:"Java"}),Object(i.jsx)("li",{children:"SQL"}),Object(i.jsx)("li",{children:"Javascript"}),Object(i.jsx)("li",{children:"KnockoutJS, AngularJS, and ReactJS"}),Object(i.jsx)("li",{children:".NET Framework and .NET Core"}),Object(i.jsx)("li",{children:"PHP"}),Object(i.jsx)("li",{children:"Python"}),Object(i.jsx)("li",{children:"Node.JS"}),Object(i.jsx)("li",{children:"GoLang"}),Object(i.jsx)("li",{children:"Ruby"})]})}),Object(i.jsx)(f.a,{right:!0,children:Object(i.jsxs)("div",{className:"skillsArea",children:[Object(i.jsx)("div",{className:"knowledgeable",children:Object(i.jsx)("h1",{children:"Knowledgeable in"})}),Object(i.jsx)("li",{children:"Software Development"}),Object(i.jsx)("li",{children:"Agile Methodologies"}),Object(i.jsx)("li",{children:"Software Design Patterns"}),Object(i.jsx)("li",{children:"Containerized Software Deployment"}),Object(i.jsx)("li",{children:"Microservices Architecture"}),Object(i.jsx)("li",{children:"Cloud Architecture"}),Object(i.jsx)("li",{children:"Continuous Integration/Delivery"}),Object(i.jsx)("li",{children:"Version Control"}),Object(i.jsx)("li",{children:"Distributed systems"}),Object(i.jsx)("li",{children:"Algorithms"})]})})]})]})}),Object(i.jsxs)("div",{className:"projects-wrapper",children:[Object(i.jsx)("div",{className:"projectsLinkContainer",children:Object(i.jsx)("a",{id:"projects"})}),Object(i.jsx)("div",{className:"projects-container",children:Object(i.jsx)(N.a,{top:!0,children:Object(i.jsxs)("div",{className:"castly-container",children:[Object(i.jsx)("div",{className:"castlyTxt",children:Object(i.jsx)("h3",{children:"C A S T L Y"})}),Object(i.jsxs)("div",{className:"castly-content",children:[Object(i.jsx)("div",{className:"castlyImg",children:Object(i.jsx)("img",{alt:"Castly logo",src:k,style:{width:"20vw",height:"auto"}})}),Object(i.jsxs)("div",{className:"castlyDesc",children:[Object(i.jsx)("p",{style:{textAlign:"left",paddingBottom:"2vh"},children:"Castly is a podcast platform aimed at bridging the gap between watching a podcast and listening to the audio version. Seamlessly switch between audio and video versions of a podcast all within a single app."}),Object(i.jsx)("p",{style:{textAlign:"left",paddingBottom:"3vh"},children:"Tools used: React Native, AWS, Typescript, C#, Go, MySQL"})]}),Object(i.jsx)("div",{className:"castlyVid",children:Object(i.jsx)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/s5Vnz1P7wkU",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]})})})]}),Object(i.jsxs)("div",{className:"contact-wrapper",children:[Object(i.jsx)("div",{className:"contactLinkContainer",style:{paddingBottom:"10vh"},children:Object(i.jsx)("a",{id:"contactA"})}),Object(i.jsx)("div",{className:"contact-container",children:Object(i.jsx)(h,{})})]}),Object(i.jsx)("div",{className:"footer-wrapper",children:Object(i.jsx)("div",{className:"footer-container",children:Object(i.jsx)("div",{className:"footerCopyright",children:"Handcrafted by Griffin Seibold 2021"})})}),Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("div",{className:"navDesktop",children:Object(i.jsxs)("div",{className:"navWrapperDesktop",children:[Object(i.jsxs)("div",{className:"socialMediasDesktop",children:[Object(i.jsx)("a",{href:"https://github.com/gxs1619",style:{marginRight:"10px"},children:Object(i.jsx)(x.a,{})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/griffinseibold/",children:Object(i.jsx)(p.a,{})})]}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScrollDesktop("home")},style:{marginRight:"5vw"},children:Object(i.jsx)("div",{className:"navDesktopHomeWrapper",children:"Home"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScrollDesktop("techstack")},style:{marginRight:"5vw"},children:Object(i.jsx)("div",{className:"navDesktopExperienceWrapper",children:"Experience"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScrollDesktop("projects")},style:{marginRight:"5vw"},children:Object(i.jsx)("div",{className:"navDesktopProjectsWrapper",children:"Projects"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScrollDesktop("contactA")},style:{marginRight:"7vw"},children:Object(i.jsx)("div",{className:"navDesktopContactWrapper",children:"Contact"})})]})}),Object(i.jsxs)("div",{id:"mobileMenu",children:[Object(i.jsx)("div",{id:"mobileBlurMenu",className:"mobileBlurMenu"}),Object(i.jsx)("nav",{className:"App-nav",id:"App-nav",children:Object(i.jsxs)("div",{className:"navWrapperMobile",children:[Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScroll("home")},style:{marginTop:"10vw",fontSize:"5vw"},children:Object(i.jsx)("div",{children:"Home"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScroll("techstack")},style:{marginTop:"10vw",fontSize:"5vw"},children:Object(i.jsx)("div",{children:"Experience"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScroll("projects")},style:{marginTop:"10vw",fontSize:"5vw"},children:Object(i.jsx)("div",{children:"Projects"})}),Object(i.jsx)("button",{className:"stylelessBtn",onClick:function(){return e.handleScroll("contactA")},style:{marginTop:"10vw",fontSize:"5vw"},children:Object(i.jsx)("div",{children:"Contact"})}),Object(i.jsxs)("div",{className:"socialMediasMobile",style:{marginTop:"12vw"},children:[Object(i.jsx)("a",{href:"https://github.com/gxs1619",style:{marginRight:"10px"},children:Object(i.jsx)(x.a,{})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/griffinseibold/",children:Object(i.jsx)(p.a,{})})]})]})})]}),Object(i.jsx)("div",{className:"buns",id:"buns",children:Object(i.jsx)(O.a,{isOpen:this.state.showMenu,menuClicked:this.handleClick.bind(this),color:"#00FF00",strokeWidth:"3",borderRadius:"1"})})]})]})}):Object(i.jsx)("div",{className:"loadingContainer",children:Object(i.jsx)("div",{className:"loadingContent",children:Object(i.jsx)(m.a,{type:"cylon",color:"#00FF00",height:167,width:75})})})})}}]),n}(c.a.Component)),C=n(109),I=n.n(C),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{style:{position:"absolute",backgroundColor:"transparent"},children:[Object(i.jsx)("a",{id:"home"}),Object(i.jsx)(I.a,{height:"450vh",width:"100vw",id:"tsparticles",options:{particles:{color:{value:"#00FF00"},number:{value:90,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.2},move:{direction:"right",speed:.3},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})]}),Object(i.jsx)("div",{className:"loadingWrapper",children:Object(i.jsx)(S,{})})]})}}]),n}(s.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,310)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),s(e),c(e),l(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),M()},44:function(e,t,n){}},[[306,1,2]]]);
//# sourceMappingURL=main.70f9c9dc.chunk.js.map