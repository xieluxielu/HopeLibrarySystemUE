!function(){function t(t){this.index=++n.index,this.config=i.mergeJson(this.defaultConfig,t,this.index),this.init()}var e=["msg","alert","loading","iframe","prompt","photo","tips","music"],i={css:function(t,e){for(var i in e)t.style[i]=e[i]},getStyle:function(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t,!1)[e]},move:function(t,e,o){clearInterval(t.timer),t.timer=setInterval(function(){var n=!0;for(var s in e){var r;r="opacity"==s?parseInt(100*parseFloat(i.getStyle(t,s))):parseInt(i.getStyle(t,s));var a=(e[s]-r)/7;a=a>0?Math.ceil(a):Math.floor(a),"opacity"==s?(t.style[s]=(r+a)/100,t.style.filter="alpha(opacity:"+r+a+")"):t.style[s]=r+a+"px",r!=e[s]&&(n=!1)}n&&(clearInterval(t.timer),o&&o())},16)},addEvent:function(t,e,i){return t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},removeEvent:function(t,e,i){t.removeEventListener?t.removeEventListener(e,i):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null},mergeJson:function(){for(var t={},e=0,i=arguments.length;e<i;e++)for(var o in arguments[e])t[o]=arguments[e][o];return t},creEle:function(t,e,i){var o=document.createElement(t);return e&&(o.className=e),i&&(o.id=i),o},addChild:function(t,e){if(e instanceof Array)for(var i=0,o=e.length;i<o;i++)t.appendChild(e[i]);else t.appendChild(e)},random:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}},o={body:document.body},n={index:1e5,times:0,msg:function(e){var o=e||{},n={type:"msg",title:!1,btn:!1},s={icon:!1,time:2e3,height:"50px"};new t(i.mergeJson(s,o,n))},alert:function(e){var o=e||{},n={type:"alert"},s={icon:!1,height:"148px",width:"260px",closeBtn:!0};s.btn=[],s.btnCb=[],o.confirmBtn!==!1&&s.btn.push("确定"),o.cancelBtn&&s.btn.push("取消"),o.confirmCb&&s.btnCb.push(o.confirmCb),o.cancelCb&&s.btnCb.push(o.cancelCb),new t(i.mergeJson(s,o,n))},loading:function(e){var o=e||{},n={type:"loading",icon:!1,title:!1,btn:!1,text:!1},s={height:"100px",width:"100px",time:2e3,shadow:!1,loadingColor:"#169fe6"};new t(i.mergeJson(s,o,n))},iframe:function(e){var o=e||{},n={type:"iframe",icon:!1,btn:!1,text:!1},s={height:"500px",width:"700px",time:!1,shadow:!1,closeBtn:!0,url:"http://ce.sysu.edu.cn/hope/"};new t(i.mergeJson(s,o,n))},prompt:function(e){var o=e||{},n={type:"prompt",icon:!1},s={height:"160px",width:"270px",time:!1,shadow:!1,closeBtn:!0,confirmCb:!1};s.btn=[],s.btnCb=[],o.confirmBtn!==!1&&s.btn.push("确定"),o.cancelBtn&&s.btn.push("取消"),o.confirmCb&&s.btnCb.push(o.confirmCb),o.cancelCb&&s.btnCb.push(o.cancelCb),new t(i.mergeJson(s,o,n))},photo:function(e){var o=e||{},n={type:"photo",icon:!1,move:!1,title:!1,closeBtn:!0,text:!1,closeType:2},s={time:!1,shadow:!0,animateType:3};new t(i.mergeJson(s,o,n))},tips:function(e){var o=e||{},n={type:"tips",move:!1,title:!1,closeBtn:!1,shadow:!1},s={time:1e3,shadow:!0,animateType:3,icon:!1,height:"40px",position:"right"};new t(i.mergeJson(s,o,n))},music:function(e){var o=e||{},n={type:"music",icon:!1},s={time:!1,shadow:!1,closeBtn:1,animateType:3,height:"142px",width:"320px",text:!1,autoPlay:!0};new t(i.mergeJson(s,o,n))},open:function(t){var e=t||{};n[e.type](e)}};t.prototype={setConfig:function(){this.config.animateType.toString().indexOf("random")>-1&&(this.config.animateType=i.random(1,9)+"random"),this.config.type===e[2]&&(this.config.contentBg="transparent")},init:function(){var t=this;this.setConfig(),this.times=++n.times,this.start(function(){t.layer=i.creEle("div","hlayer hlayer"+t.times,"hlayer"+t.times),o.body.appendChild(t.layer),t.layerCon=i.creEle("div","hlayer-content hlayer-"+t.config.type+" hlayer-animate"+parseInt(t.config.animateType)),t.layer.appendChild(t.layerCon),t.layer.style.zIndex=++n.index,t.layout(),t.setStyle(),t.eventHandle()})},start:function(t){this.complete=!0;var o=this;if(this.config.type==e[5]){var n=[];o.complete=!1;for(var s=0,r=this.config.photos.length;s<r;s++){var a=i.creEle("img");a.src=this.config.photos[s].img,n.push(a)}var h=setInterval(function(){o.complete=!0;for(var e=0,i=n.length;e<i;e++)if(!n[e].complete){o.complete=!1;break}o.complete&&(clearInterval(h),t())},50)}o.complete&&t()},layout:function(){if(this.layerTitle="",this.layerMain="",this.layerIcon="",this.layerBtnCON="",this.closeBtn="",this.layerBtns=[],this.layerShadow="",this.prompt=[],this.config.title!==!1&&(this.layerTitle=i.creEle("div","hlayer-content-title hlayer-"+this.config.type),this.layerTitle.textContent=this.config.title,i.css(this.layerTitle,{backgroundColor:this.config.mainBg,color:this.config.mainColor}),this.layerCon.appendChild(this.layerTitle)),this.config.shadow&&(this.layerShadow=i.creEle("div","hlayer-shadow"),this.layer.insertBefore(this.layerShadow,this.layerCon)),this.layerMain=i.creEle("div","hlayer-content-main hlayer-"+this.config.type+"-content"),this.layerCon.appendChild(this.layerMain),this.config.text&&(this.layerMain.innerHTML=this.config.text),this.config.icon!==!1){this.layerMain.style.paddingLeft="48px",this.layerIcon=i.creEle("div","hlayer-icon hlayer-icon"+this.config.icon);var t=i.creEle("i");this.layerIcon.appendChild(t),this.layerMain.appendChild(this.layerIcon)}if(this.config.btn){this.layerBtnCON=i.creEle("div","hlayer-content-btns hlayer-"+this.config.type+"-content-btns"),i.css(this.layerBtnCON,{background:this.config.contentBg}),this.layerCon.appendChild(this.layerBtnCON);for(var o=0,n=this.config.btn.length;o<n;o++){var s=i.creEle("span","hlayer-content-btns-item hlayer-content-btns-item"+o);s.textContent=this.config.btn[o],i.css(s,{backgroundColor:this.config.mainBg,color:this.config.mainColor}),this.layerBtnCON.appendChild(s),this.layerBtns.push(s)}}if(this.config.closeBtn&&(this.closeBtn=i.creEle("div","hlayer-close hlayer-"+this.config.type+"close hlayer-close"+this.config.closeType),this.layerCon.appendChild(this.closeBtn)),this.config.loadingType&&this.config.type==e[2]){if(this.loading=i.creEle("div","hlayer-content-load hlayer-content-load"+this.config.loadingType),1===this.config.loadingType)for(var o=0;o<8;o++){var r=i.creEle("div");i.css(r,{backgroundColor:this.config.loadingColor}),this.loading.appendChild(r)}else if(2===this.config.loadingType)for(var o=0;o<2;o++){var r=i.creEle("div");i.css(r,{backgroundColor:this.config.loadingColor}),this.loading.appendChild(r)}else if(3===this.config.loadingType)for(var o=0;o<5;o++){var r=i.creEle("div","div"+(o+1));i.css(r,{backgroundColor:this.config.loadingColor}),this.loading.appendChild(r)}else if(4===this.config.loadingType)for(var o=0;o<5;o++){var r=i.creEle("div","div"+(o+1));i.css(r,{backgroundColor:this.config.loadingColor}),this.loading.appendChild(r)}this.layerMain.appendChild(this.loading),i.css(this.layerCon,{boxShadow:"none",background:"transparent"})}if(this.config.type==e[3]){var a=i.creEle("iframe","hlayer-content-iframe");i.css(a,{height:parseInt(this.config.height)-52+"px"}),a.src=this.config.url,this.layerMain.appendChild(a)}if(this.config.type==e[4])if(1===this.config.formType||2===this.config.formType){var h=i.creEle("input","hlayer-content-prompt hlayer-form-group hlayer-form-input");2===this.config.formType&&(h.type="password"),this.prompt.push(h),this.layerMain.appendChild(h)}else if(3===this.config.formType){var h=i.creEle("textarea","hlayer-content-prompt hlayer-form-group hlayer-form-textarea");this.prompt.push(h),i.css(h,{height:parseInt(this.config.height)-125+"px"}),this.layerMain.appendChild(h)}else if(4===this.config.formType)for(var o=0,n=this.config.options.inputs.length;o<n;o++){var l=i.creEle("label","hlayer-prompt-content-label"),h=i.creEle("input");h.type="radio",h.name=this.config.options.name,l.appendChild(h),this.prompt.push(h);var c=document.createTextNode(this.config.options.inputs[o]);l.appendChild(c),this.layerMain.appendChild(l)}else if(5===this.config.formType)for(var o=0,n=this.config.options.inputs.length;o<n;o++){var l=i.creEle("label","hlayer-prompt-content-label"),h=i.creEle("input");h.type="checkbox",h.name=this.config.options.name,l.appendChild(h),this.prompt.push(h);var c=document.createTextNode(this.config.options.inputs[o]);l.appendChild(c),this.layerMain.appendChild(l)}if(this.config.type===e[6]&&(this.tipsArrow=i.creEle("i",this.config.tipsPosition),this.layerMain.appendChild(this.tipsArrow)),this.config.type==e[5]){var p=this;p.photosIndex=p.photosIndex||0,p.photoImg=i.creEle("img","hlayer-content-photo"),i.photoImg=i.css(p.photoImg,{display:"block"}),p.photoImgNext=i.creEle("div","hlayer-content-photo-next"),p.photoImgPre=i.creEle("div","hlayer-content-photo-pre"),i.css(p.layerMain,{padding:"0px"}),i.css(p.layerCon,{padding:"10px"}),p.photoText=i.creEle("div","hlayer-content-photo-text"),p.photoImg.src=p.config.photos[p.photosIndex].img,p.photoText.textContent=p.config.photos[p.photosIndex].text,p.layerMain.appendChild(p.photoImg),p.layerMain.appendChild(p.photoText),p.layerMain.appendChild(p.photoImgNext),p.layerMain.appendChild(p.photoImgPre),p.setStyle(),p.photoEventHandle()}if(this.config.type==e[7]){this.musicImgCon=i.creEle("div","hlayer-content-music-img");var f=i.creEle("img");f.src=this.config.photos,i.css(f,{height:"100%"}),this.musicImgCon.appendChild(f),this.layerMain.appendChild(this.musicImgCon),i.css(this.musicImgCon,{height:"80px",position:"absolute",top:"10px"});var d=i.creEle("audio");d.controls="controls",this.config.autoPlay&&(d.autoplay=!0);var g=i.creEle("source");"string"==typeof this.config.url?(g.src=this.config.url,d.appendChild(g)):this.config.url instanceof Array&&this.config.url.forEach(function(t){g.src=t,d.appendChild(g)}),i.css(d,{marginLeft:"100px",width:"200px",top:"30px",position:"relative"}),this.layerMain.appendChild(d)}},setStyle:function(){i.css(this.layerMain,{background:this.config.contentBg,color:this.config.contentColor}),this.setHeight(),this.config.type===e[0]&&i.css(this.layerMain,{textAlign:"center"}),this.tipsArrow&&i.css(this.tipsArrow,{borderRightColor:this.config.contentBg}),this.position()},eventHandle:function(){var t=this;this.config.time&&setTimeout(function(){t.close()},this.config.time),this.closeBtn&&this.closeBtnHandle(),this.btnsHandle(),this.resize(),this.move()},photoEventHandle:function(){this.photoHover(),this.photoChange(),this.autoPlay()},photoHover:function(){var t=this;t.photoImg&&(i.addEvent(t.layerCon,"mouseover",function(){t.photoImgNext.style.display="block",t.photoImgPre.style.display="block",t.photoText.style.display="block"}),i.addEvent(t.layerCon,"mouseleave",function(){t.photoImgNext.style.display="none",t.photoImgPre.style.display="none",t.photoText.style.display="none"}))},photoChange:function(){var t=this;t.photoImg&&(i.addEvent(t.photoImgNext,"click",function(){t.photosIndex==t.config.photos.length-1?t.photosIndex=0:t.photosIndex+=1,this.photoTimer&&clearTimeout(this.photoTimer),t.close(),t.init()}),i.addEvent(t.photoImgPre,"click",function(){0==t.photosIndex?t.photosIndex=t.config.photos.length-1:t.photosIndex-=1,this.photoTimer&&clearTimeout(this.photoTimer),t.close(),t.init()}))},autoPlay:function(){var t=this;this.config.autoPlay&&(this.photoTimer=setTimeout(function(){t.photoImgNext.click()},this.config.playTime))},resize:function(){var t=this;this.config.resize&&i.addEvent(window,"resize",function(){t.position.apply(t)})},move:function(){var t=this;this.layerTitle&&this.config.move&&(this.layerTitle.onmousedown=function(e){var o=e||window.event,n=o.clientX-t.layerCon.offsetLeft,s=o.clientY-t.layerCon.offsetTop;document.onmousemove=function(e){var o=e||window.event,r=o.clientX-n+"px",a=o.clientY-s+"px";i.css(t.layerCon,{left:r,top:a}),document.onmouseup=function(){document.onmousemove=null}}})},setHeight:function(){this.config.width&&(this.layerCon.style.width=this.config.width),this.config.height&&(this.layerCon.style.height=this.config.height);var t=parseInt(this.config.height);this.layerTitle&&(t-=42),this.layerBtnCON&&(t-=40),i.css(this.layerMain,{height:t+"px",lineHeight:"30px"}),this.config.type!==e[0]&&this.config.type!==e[1]&&this.config.type!==e[6]||t&&(i.css(this.layerMain,{height:t+"px"}),i.css(this.layerMain,{lineHeight:t+"px"}))},close:function(){var t=this;t.layer.style.display="none",o.body.removeChild(t.layer)},closeBtnHandle:function(){var t=this;i.addEvent(this.closeBtn,"click",function(){t.layer.style.display="none",o.body.removeChild(t.layer)})},btnsHandle:function(){var t=this;if(this.layerBtns&&this.config.btnCb)for(var o=0,n=this.layerBtns.length;o<n;o++)this.layerBtns[o]&&this.config.btnCb[o]&&function(o){i.addEvent(t.layerBtns[o],"click",function(){if("function"!=typeof t.config.btnCb[o]&&"close"==t.config.btnCb[o])return void t.close();if(t.config.btnCb[o]!==!1)if(t.config.type===e[4]&&0===o){var i=[];if(1===t.config.formType||2===t.config.formType||3===t.config.formType){var n=!0;if(!t.config.allowEmpty)var n=t.prompt.some(function(t){return t.value});if(!n)return;t.close(),t.prompt.forEach(function(t){i.push(t.value)})}else if(4===t.config.formType||5===t.config.formType){var n=!0;if(!t.config.allowEmpty)var n=t.prompt.some(function(t){return t.checked});if(!n)return;t.close(),t.prompt.forEach(function(e,o){e.checked&&i.push({index:o,value:t.config.options.inputs[o]})})}1===i.length?t.config.btnCb[0](i[0]):t.config.btnCb[0](i)}else t.close(),t.config.btnCb[o]()})}(o)},position:function(){var t="",o="";if(this.config.type===e[6]){var n=document.getElementById(this.config.tipsCon),s=n.offsetTop,r=n.offsetLeft,a=n.offsetHeight,h=n.offsetWidth,l=this.layerCon.offsetHeight,c=this.layerCon.offsetWidth,p=document.body.scrollLeft||document.documentElement.scrollLeft,f=document.body.scrollTop||document.documentElement.scrollTop;return void("left"===this.config.tipsPosition?(o=r-c-10-p+"px",t=s+(a-l)/2-f+"px",i.css(this.layerCon,{left:o,top:t})):"top"===this.config.tipsPosition?(o=r+(h-c)/2-p+"px",t=s-l-10-f+"px",i.css(this.layerCon,{left:o,top:t})):"right"===this.config.tipsPosition?(o=r+h+10-p+"px",t=s+(a-l)/2-f+"px",i.css(this.layerCon,{left:o,top:t})):"bottom"===this.config.tipsPosition&&(o=r+(h-c)/2-p+"px",t=s+a+10-f+"px",i.css(this.layerCon,{left:o,top:t})))}var d=this.config.position,g=this.layerCon.offsetHeight,y=this.layerCon.offsetWidth,m=window.innerHeight,u=window.innerWidth;"random"===d&&(t=i.random(0,m-g)+"px",o=i.random(0,u-y)+"px",i.css(this.layerCon,{left:o,top:t})),0===d?(t=(m-g)/2+"px",o=(u-y)/2+"px",i.css(this.layerCon,{left:o,top:t})):1===d?i.css(this.layerCon,{top:"0px",left:"0px"}):2===d?(o=(u-y)/2+"px",i.css(this.layerCon,{top:"0px",left:o})):3===d?i.css(this.layerCon,{top:"0px",right:"0px"}):4===d?i.css(this.layerCon,{bottom:"0px",left:"0px"}):5===d?(o=(u-y)/2+"px",i.css(this.layerCon,{bottom:"0px",left:o})):6===d&&i.css(this.layerCon,{bottom:"0px",right:"0px"})},defaultConfig:{mainBg:"#169FE6",mainColor:"#fff",contentBg:"#fff",contentColor:"#000",title:"信息",text:"提示信息",width:"",height:"",btns:"",confirmBtn:!0,confirmCb:!1,cancelBtn:!1,cancelCb:!1,animateType:1,resize:!0,position:0,shadow:!0,time:!1,loadingType:1,closeBtn:!1,url:!1,formType:1,move:!0,photos:!1,closeType:1,tipsPosition:"right",tipsCon:"",autoPlay:!1,playTime:5e3,allowEmpty:!0}},window.hlayer=n}(window);