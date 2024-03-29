
/*! jQuery Easing v1.3 <http://gsgd.co.uk/sandbox/jquery/easing> */!function(n){n.easing.jswing=n.easing.swing,n.extend(n.easing,{def:"easeOutQuad",swing:function(t,e,u,a,r){return n.easing[n.easing.def](t,e,u,a,r)},easeInQuad:function(n,t,e,u,a){return u*(t/=a)*t+e},easeOutQuad:function(n,t,e,u,a){return-u*(t/=a)*(t-2)+e},easeInOutQuad:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t+e:-u/2*(--t*(t-2)-1)+e},easeInCubic:function(n,t,e,u,a){return u*(t/=a)*t*t+e},easeOutCubic:function(n,t,e,u,a){return u*((t=t/a-1)*t*t+1)+e},easeInOutCubic:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t+e:u/2*((t-=2)*t*t+2)+e},easeInQuart:function(n,t,e,u,a){return u*(t/=a)*t*t*t+e},easeOutQuart:function(n,t,e,u,a){return-u*((t=t/a-1)*t*t*t-1)+e},easeInOutQuart:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t+e:-u/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(n,t,e,u,a){return u*(t/=a)*t*t*t*t+e},easeOutQuint:function(n,t,e,u,a){return u*((t=t/a-1)*t*t*t*t+1)+e},easeInOutQuint:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t*t+e:u/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(n,t,e,u,a){return-u*Math.cos(t/a*(Math.PI/2))+u+e},easeOutSine:function(n,t,e,u,a){return u*Math.sin(t/a*(Math.PI/2))+e},easeInOutSine:function(n,t,e,u,a){return-u/2*(Math.cos(Math.PI*t/a)-1)+e},easeInExpo:function(n,t,e,u,a){return 0==t?e:u*Math.pow(2,10*(t/a-1))+e},easeOutExpo:function(n,t,e,u,a){return t==a?e+u:u*(-Math.pow(2,-10*t/a)+1)+e},easeInOutExpo:function(n,t,e,u,a){return 0==t?e:t==a?e+u:(t/=a/2)<1?u/2*Math.pow(2,10*(t-1))+e:u/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(n,t,e,u,a){return-u*(Math.sqrt(1-(t/=a)*t)-1)+e},easeOutCirc:function(n,t,e,u,a){return u*Math.sqrt(1-(t=t/a-1)*t)+e},easeInOutCirc:function(n,t,e,u,a){return(t/=a/2)<1?-u/2*(Math.sqrt(1-t*t)-1)+e:u/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(1==(t/=a))return e+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i))+e},easeOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(1==(t/=a))return e+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*t)*Math.sin(2*(t*a-r)*Math.PI/i)+u+e},easeInOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(2==(t/=a/2))return e+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i)+e:s*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i)*.5+u+e},easeInBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),u*(t/=a)*t*((r+1)*t-r)+e},easeOutBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),u*((t=t/a-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),(t/=a/2)<1?u/2*t*t*(((r*=1.525)+1)*t-r)+e:u/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e},easeInBounce:function(t,e,u,a,r){return a-n.easing.easeOutBounce(t,r-e,0,a,r)+u},easeOutBounce:function(n,t,e,u,a){return(t/=a)<1/2.75?7.5625*u*t*t+e:2/2.75>t?u*(7.5625*(t-=1.5/2.75)*t+.75)+e:2.5/2.75>t?u*(7.5625*(t-=2.25/2.75)*t+.9375)+e:u*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,u,a,r){return r/2>e?.5*n.easing.easeInBounce(t,2*e,0,a,r)+u:.5*n.easing.easeOutBounce(t,2*e-r,0,a,r)+.5*a+u}})}(jQuery);


/*! highlight v4, Highlights arbitrary terms. <http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html> MIT license. Johann Burkard <http://johannburkard.de> <mailto:jb@eaio.com> */


!function($){$.fn.hl=function(e){function t(e,i){var n=0;if(3==e.nodeType){var h=e.data.toUpperCase().indexOf(i);if(h>=0){n=document.createElement("mark"),n.className="highlight",h=e.splitText(h),h.splitText(i.length);var l=h.cloneNode(!0);n.appendChild(l),h.parentNode.replaceChild(n,h),n=1}}else if(1==e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName))for(h=0;h<e.childNodes.length;++h)h+=t(e.childNodes[h],i);return n}return this.length&&e&&e.length?this.each(function(){t(this,e.toUpperCase())}):this},$.fn.rhl=function(){return this.find("mark.highlight").each(function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()}}(jQuery);


/*! cssTransforms: jQuery cssHooks adding a cross browser, animatible transforms, Bobby Schultz: <https://github.com/puppybits/QTransform> */

!function(r){function s(s,n,i,e){if(r.support.matrixFilter)return o(s,n);var a=t(s),f=/[X|Y]/.exec(i);f=null===f?"":f[0]?f[0]:f,i=/.*[^XY]/.exec(i)[0],e=void 0===e?"":e;var c,u="",m=!1;if(null!==a)for(var p in a)if(c=a[p],i===p)"matrix"!==i?(u+=i+"(",u+="X"===f||""===f?n+e:""!==c[0]?c[0]:r.cssHooks[i+"X"].get(s)+e,u+="Y"===f?", "+n+e:""!==c[1]?", "+c[1]:i+"Y"in r.cssHooks?", "+r.cssHooks[i+"Y"].get(s)+e:"",u+=") "):u+=n+" ",m=!0;else{u+=p+"(";for(var g=0;g<c.length&&(u+=c[g],g<c.length-1&&""!==c[g+1]);g++)u+=", ";u+=") "}m||(u+=i+f+"("+n+e+") "),s.style[r.cssProps.transform]=u}function t(s){var t,n,o,i;return r(s.style[r.cssProps.transform].replace(/(?:\,\s|\)|\()/g,"|").split(" ")).each(function(r,s){""!==s&&(void 0===t&&(t={}),n=s.split("|"),o=n.shift(),i=/.*[^XY]/.exec(o)[0],t[i]||(t[i]=["","","","","",""]),/Y/.test(o)||(t[i][0]=n[0]),/X/.test(o)||(t[i][1]=n[1]),6==n.length&&(t[i][2]=n[2],t[i][3]=n[3],t[i][4]=n[4],t[i][5]=n[5]))}),void 0!==t?t:null}function n(r){return"number"==typeof r?parseFloat(r):-1!=r.indexOf("deg")?parseInt(r,10)*(2*Math.PI/360):-1!=r.indexOf("grad")?parseInt(r,10)*(Math.PI/200):void 0}function o(s,t){var o,i,e="matrixFilter"===r.cssProps.transformOrigin?!0:!1;if(o=[r.cssHooks.scaleX.get(s),n(r.cssHooks.skewY.get(s)),n(r.cssHooks.skewX.get(s)),r.cssHooks.scaleY.get(s),r.cssHooks.translateX.get(s),r.cssHooks.translateY.get(s)],e){s.style.filter=["progid:DXImageTransform.Microsoft.Matrix(M11=1,M12=0,M21=0,M22=1,SizingMethod='auto expand')"].join("");var a=r.cssHooks.transformOriginX.get(s),f=r.cssHooks.transformOriginY.get(s);a=a.indexOf("%")>0?/[\d]*/.exec(a)/100:a,f=f.indexOf("%")>0?/[\d]*/.exec(f)/100:f;var c=s.offsetWidth,u=s.offsetHeight}if(t="array"!=typeof t||6!==t.length?o:[o[0]*t[0]+o[1]*t[2],o[0]*t[1]+o[1]*t[3],o[2]*t[0]+o[3]*t[2],o[2]*t[1]+o[3]*t[3],t[4],t[5]],i=r.data(s,"rotate")){i=n(i);var m=Math.cos(i),p=Math.sin(i);i=[m,-p,p,m],t=[t[0]*i[0]+t[1]*i[2],t[0]*i[1]+t[1]*i[3],t[2]*i[0]+t[3]*i[2],t[2]*i[1]+t[3]*i[3],t[4],t[5]]}if(s.style.filter=["progid:DXImageTransform.Microsoft.Matrix(","M11="+t[0]+", ","M12="+t[1]+", ","M21="+t[2]+", ","M22="+t[3]+", ","SizingMethod='auto expand'",")"].join(""),e){var g=s.offsetWidth,l=s.offsetHeight;s.style.position="relative",s.style.left=a*(c-g)+(parseInt(t[4])||0),s.style.top=f*(u-l)+(parseInt(t[5])||0)}}var i=document.createElement("div"),e=i.style;if(r.cssProps.transform=""===e.MozTransform?"MozTransform":""===e.msTransform?"msTransform":""===e.WebkitTransform?"WebkitTransform":""===e.OTransform?"OTransform":""===e.Transform?"Transform":!1,r.cssProps.transformOrigin=""===e.MozTransformOrigin?"MozTransformOrigin":""===e.msTransformOrigin?"msTransformOrigin":""===e.WebkitTransformOrigin?"WebkitTransformOrigin":""===e.OTransformOrigin?"OTransformOrigin":""===e.TransformOrigin?"TransformOrigin":!1,r.support.transform=r.cssProps.transform!==!1||""===e.filter?!0:!1,r.support.transformOrigin=r.cssProps.transformOrigin!==!1?!0:!1,r.support.matrixFilter=""===e.filter&&r.cssProps.transform===!1?!0:!1,i=null,r.support.transform!==!1){r.cssNumber.skew=r.cssNumber.skewX=r.cssNumber.skewY=r.cssNumber.scale=r.cssNumber.scaleX=r.cssNumber.scaleY=r.cssNumber.rotate=r.cssNumber.matrix=!0,r.cssNumber.transformOrigin=r.cssNumber.transformOriginX=r.cssNumber.transformOriginY=!0,r.support.matrixFilter&&(r.cssNumber.transformOrigin=r.cssNumber.transformOriginX=r.cssNumber.transformOriginY=!0,r.cssProps.transformOrigin="matrixFilter"),r.cssHooks.transform={set:function(s,t){r.support.matrixFilter?s.style.filter=[t].join(""):s.style[r.cssProps.transform]=t+"%"},get:function(s){return r.support.matrixFilter?s.style.filter:s.style[r.cssProps.transform]}},r.cssHooks.transformOrigin={set:function(s,t,n){r.support.matrixFilter?(t=t.split(","),r.cssHooks.transformOriginX.set(s,t[0]),t.length>1&&r.cssHooks.transformOriginY.set(s,t[1])):(t="string"==typeof t?t:t+(n||"%"),s.style[r.cssProps.transformOrigin]=t)},get:function(s){if(r.support.matrixFilter){var t=r.data(s,"transformOriginX"),n=r.data(s,"transformOriginY");return t&&n&&t===n?t:"50%"}return s.style[r.cssProps.transformOrigin]}},r.fx.step.transformOrigin=function(s){r.cssHooks.transformOrigin.set(s.elem,s.now,s.unit)},r.cssHooks.transformOriginX={set:function(s,t,n){r.support.matrixFilter?(r.data(s,"transformOriginX",n?t+n:t),o(s)):(t="string"==typeof t?t:t+(n||"%"),s.style[r.cssProps.transformOrigin+"X"]=t)},get:function(s){if(r.support.matrixFilter){var t=r.data(s,"transformOriginX");switch(t){case"left":return"0%";case"center":return"50%";case"right":return"100%"}return t?t:"50%"}return s.style[r.cssProps.transformOrigin+"X"]}},r.fx.step.transformOriginX=function(s){r.cssHooks.transformOriginX.set(s.elem,s.now,s.unit)},r.cssHooks.transformOriginY={set:function(s,t,n){r.support.matrixFilter?(r.data(s,"transformOriginY",n?t+n:t),o(s)):(t="string"==typeof t?t:t+(n||"%"),s.style[r.cssProps.transformOrigin+"Y"]=t)},get:function(s){if(r.support.matrixFilter){var t=r.data(s,"transformOriginY");switch(t){case"top":return"0%";case"center":return"50%";case"bottom":return"100%"}return t?t:"50%"}return s.style[r.cssProps.transformOrigin+"Y"]}},r.fx.step.transformOriginY=function(s){r.cssHooks.transformOriginY.set(s.elem,s.now,s.unit)};var a=function(r){return r},f=[["X","Y"],"X","Y"],c=[["A","B","C","D","X","Y"],"A","B","C","D","X","Y"],u=[{prop:"rotate",matrix:[function(r){return Math.cos(r)},function(r){return-Math.sin(r)},function(r){return Math.sin(r)},function(r){return Math.cos(r)}],unit:"rad",subProps:[""],fnc:n},{prop:"scale",matrix:[[a,0,0,a],[a,0,0,1],[1,0,0,a]],unit:"",subProps:f,fnc:parseFloat,_default:1},{prop:"skew",matrix:[[1,a,a,1],[1,a,0,1],[1,0,a,1]],unit:"rad",subProps:f,fnc:n},{prop:"translate",matrix:[[1,0,0,1,a,a],[1,0,0,1,a,0],[1,0,0,1,0,a]],standardUnit:"px",subProps:f,fnc:parseFloat},{prop:"matrix",matrix:[[a,a,a,a,a,a],[a,0,0,1,0,0],[1,a,0,1,0,0],[1,0,a,1,0,0],[1,0,0,a,0,0],[1,0,0,1,0,a]],subProps:c,fnc:parseFloat}];jQuery.each(u,function(t,n){jQuery.each(n.subProps,function(t,o){var i,e=n;if(r.isArray(o)){i=e.prop;var a=o;r.cssHooks[i]={set:function(s,t,n){jQuery.each(a,function(o,e){r.cssHooks[i+e].set(s,t,n)})},get:function(s){var t=[];return jQuery.each(a,function(n,o){t.push(r.cssHooks[i+o].get(s,t))}),t[0]||t[1]}}}else i=e.prop+o,r.cssHooks[i]={set:function(t,n,o){r.data(t,i,o?n+o:n),s(t,e.fnc(o?n+o:n),i,e.unit||o||e.standardUnit)},get:function(s){var t=r.data(s,i);return t&&void 0!==t?t:e._default||0}};r.fx.step[i]=function(s){s.unit="px"===s.unit&&r.cssNumber[i]?e.standardUnit:s.unit,r.cssNumber[i]?"":s.unit,r.cssHooks[i].set(s.elem,s.now,s.unit)}})}),r.rotate={radToDeg:function(r){return 180*r/Math.PI}}}}(jQuery);


/*! jQuery TinyScrollbar Custom :: Original => <http://www.baijs.nl/tinyscrollbar>, modified by Taufik Nurrohman (add keyboard support via focused element with `tabindex` attribute) */

!function(t){function s(s,o){function e(){return l.update(),n(),l}function a(){var t=v.toLowerCase();f.obj.css(j,w/m.ratio),b.obj.css(j,-w),y.start=f.obj.offset()[j],m.obj.css(t,x[o.axis]),x.obj.css(t,x[o.axis]),f.obj.css(t,f[o.axis])}function n(){M?h.obj[0].ontouchstart=function(t){1===t.touches.length&&(i(t.touches[0]),t.stopPropagation())}:(f.obj.on("mousedown",i),x.obj.on("mouseup",u)),o.scroll&&window.addEventListener?(d[0].addEventListener("DOMMouseScroll",r,!1),d[0].addEventListener("mousewheel",r,!1),d[0].addEventListener("MozMousePixelScroll",function(t){t.preventDefault()},!1)):o.scroll&&(d[0].onmousewheel=r)}function i(s){var o=parseInt(f.obj.css(j),10);return y.start=p?s.pageX:s.pageY,k.start="auto"==o?0:o,M?(document.ontouchmove=function(t){t.preventDefault(),u(t.touches[0])},document.ontouchend=c):(t(document).on("mousemove",u),t(document).on("mouseup",c),f.obj.addClass("hold").on("mouseup",c)),!1}function r(s){if(b.ratio<1){var e=s||window.event,a=e.wheelDelta?e.wheelDelta/120:-e.detail/3;w-=a*o.wheel,w=Math.min(b[o.axis]-h[o.axis],Math.max(0,w)),f.obj.css(j,w/m.ratio),b.obj.css(j,-w),(o.lockscroll||w!==b[o.axis]-h[o.axis]&&0!==w)&&(e=t.event.fix(e),e.preventDefault())}}function u(t){b.ratio<1&&(k.now=o.invertscroll&&M?Math.min(x[o.axis]-f[o.axis],Math.max(0,k.start+(y.start-(p?t.pageX:t.pageY)))):Math.min(x[o.axis]-f[o.axis],Math.max(0,k.start+((p?t.pageX:t.pageY)-y.start))),w=k.now*m.ratio,b.obj.css(j,-w),f.obj.css(j,k.now))}function c(){t(document).off("mousemove",u),t(document).off("mouseup",c),f.obj.removeClass("hold").off("mouseup",c),document.ontouchmove=document.ontouchend=null}var l=this,d=s,h={obj:t(".scroll-inner",s)},b={obj:t(".scroll-content",s)},m={obj:t(".scrollbar",s)},x={obj:t(".track",m.obj)},f={obj:t(".thumb",m.obj)},p="x"===o.axis,j=p?"left":"top",v=p?"Width":"Height",w=0,k={start:0,now:0},y={},M="ontouchstart"in document.documentElement;return this.keystep=function(t){b.ratio<1&&(w-=t,w=Math.min(b[o.axis]-h[o.axis],Math.max(0,w)),f.obj.css(j,w/m.ratio),b.obj.css(j,-w))},this.update=function(t){h[o.axis]=h.obj[0]["offset"+v],b[o.axis]=b.obj[0]["scroll"+v],b.ratio=h[o.axis]/b[o.axis],m.obj.toggleClass("disable",b.ratio>=1),x[o.axis]="auto"===o.size?h[o.axis]:o.size,f[o.axis]=Math.min(x[o.axis],Math.max(0,"auto"===o.sizethumb?x[o.axis]*b.ratio:o.sizethumb)),m.ratio="auto"===o.sizethumb?b[o.axis]/x[o.axis]:(b[o.axis]-h[o.axis])/(x[o.axis]-f[o.axis]),w="relative"===t&&b.ratio<=1?Math.min(b[o.axis]-h[o.axis],Math.max(0,w)):0,w="bottom"===t&&b.ratio<=1?b[o.axis]-h[o.axis]:isNaN(parseInt(t,10))?w:parseInt(t,10),a()},e()}t.tiny=t.tiny||{},t.tiny.scrollbar={options:{axis:"y",wheel:30,scroll:!0,lockscroll:!0,size:"auto",sizethumb:"auto",invertscroll:!1,keyboard:!0,step:30,insidethumb:"<span></span>"}},t.fn.ts=function(o){var e=t.extend({},t.tiny.scrollbar.options,o),a=this;return a.each(function(){t(this).addClass("js").attr("tabindex",1).css("overflow","hidden").wrapInner('<div class="scroll-inner" style="overflow:hidden;"><div class="scroll-content"></div></div>').append('<span class="scrollbar disable"><span class="track"><span class="thumb">'+e.insidethumb+"</span></span></span>").data("tsb",new s(t(this),e))}).on("focus",function(){e.keyboard&&t(this).on("keydown",function(s){return 38==s.keyCode||37==s.keyCode?(t(this).ts_ks(e.step),!1):40==s.keyCode||39==s.keyCode?(t(this).ts_ks(-e.step),!1):void 0})}),t(window).on("resize",function(){a.ts_u("relative")}),a},t.fn.ts_u=function(s){return t(this).data("tsb").update(s)},t.fn.ts_ks=function(s){return t(this).data("tsb").keystep(s)}}(jQuery);


/*! jQuery auto select pre */


window.ngd_autoSelect=function(e){e.ondblclick=function(){var n,o;window.getSelection?(n=window.getSelection(),o=document.createRange(),o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o)):document.selection&&(n=document.selection.createRange().text,o=document.body.createTextRange(),o.moveToElementText(e),o.select())}},window.ngd_addNumber=function(){for(var e,n=document.getElementsByTagName("pre"),o=n.length,t=0;o>t;++t){if(e='<span class="line-number">',n[t].id=n[t].id?n[t].id:"code-block:"+(t+1),/(^| )numbered( |$)/.test(n[t].className)){for(var a=n[t].getElementsByTagName("code")[0],c=0,d=a.innerHTML.split(/\n/).length;d>c;++c)e+='<span id="code-line:'+(t+1)+"-"+(c+1)+'"><span>'+(c+1)+"</span><em>code-line:"+(t+1)+"-"+(c+1)+"</em></span>";n[t].innerHTML=e+="</span>"+n[t].innerHTML+'<span class="cl"></span>'}if(ngd_autoSelect(n[t].getElementsByTagName("code")[0]),window.location.hash&&/code\-line\:([0-9]+)\-([0-9]+)|code\-block\:([0-9]+)/.test(window.location.hash)){var i=window.location.hash;window.location.hash=i}}};


/*! Manipulation */

!function(e){e.cm=function(e){function t(e,t,a,r){return e[n](t,'<img class="emo" src="https://dte-project.github.io/a/e/'+a+'.gf" alt="'+r+'">')}var n="replace",a=[],r="",i=[[/(😇|\b0:\-?\))/g,"halo","0:)"],[/(😊|\B:\-?\))/g,"blush",":)"],[/(😉|\B;\-?\))/g,"wink",";)"],[/(😃|\B:\-?D)/g,"smiley",":D"],[/(😂|\B=\-?D)/g,"joy","=D"],[/(😆|(\B\^:|\b[xX])\-?D\b)/g,"laugh","xD"],[/(😊|\B\^\_?\^)/g,"relax","^_^"],[/(🤨|\b7:\-?\()/g,"confuse","7:("],[/(☹️|\B:\-?\()/g,"frown",":("],[/(😩|\B=\-?\()/g,"weary","=("],[/(🤔|\B:\-?[\/\\])/g,"think",":\\"],[/(😵|\B@@,)/g,"dizzy","@@,"],[/(😌|[:*](ya)+[:*])/gi,"relieve","*yaya*"],[/(😕|\B:\-?s)/gi,"sullen",":S"],[/(😭|\B:('|\&\#39\;)\-?\()/g,"cry",":&#39;("],[/(😫|[:*]wa{2,}[:*])/gi,"tire","*wawa*"],[/(😢|\bT\_T)/gi,"tear","T_T"],[/(😎|\b[B8]\-?\))/g,"cool","B)"],[/(🚬|\B:\-?Q)/g,"smoke",":Q"],[/(😜|\B\*\*p)/gi,"crazy","**p"],[/(🏀|\B[:=]\-?[\(p]\*)/gi,"basket","=p*"],[/(⚽|\B\*=\-?p)/gi,"soccer","*=p"],[/([😛😜]|\B[:;]\-?p)/gi,"tongue",";p"],[/([😪😴💤]|\B:\-?Oz+)/gi,"sleep",":Ozzz"],[/(🤯|\bx\-?@)/gi,"explode","x@"],[/(([😠💢]\s*)+|\bx\-?&(amp;)?)/gi,"argh","x&amp;amp;"],[/([😠💢]|\b7:\-?O)/gi,"angry","7:O"],[/(😀|\B\\o\/)/gi,"yay","\\o/"],[/(🤟|\B\\m\/)/gi,"metal","\\m/"],[/(😍|\B(&lt;3|:\-?\*))/g,"love",":*"],[/(👼|\B\^o\^)/gi,"angel","^o^"],[/(🤮|\B:\-?a)/gi,"vomit",":a"],[/(🤬|[:*]fu?ck[:*])/gi,"asdf","*fuck*"],[/([😧🗣]|\bx\-?V)/gi,"shout","xV"],[/((👍\s*)+|\B;\-?b?d)/g,"thumbs",";bd"],[/(👍|\B\(y\)|\B:\-?b?d)/g,"thumb",":bd"],[/(😒|\B\-[_,]\-\B|\B\~x\-?\(+)/gi,"unamuse","~x("],[/(🙋|[:*]bye[:*])/gi,"bye","*bye*"],[/(🤓|\B:\-?W)/gi,"nerd",":W"],[/(👻|\(\-\.\-,\))/g,"ghost","(-.-,)"],[/(🍻|[:*]cendol[:*])/gi,"cendol","*cendol*"],[/((🎉\s*)+|🎊|\B(<|&lt;)=\-?\))/g,"party-2","&amp;lt;=)"],[/(🎉|\B(<|&lt;):\-?\))/g,"party","&amp;lt;:)"],[/(🤣|[:*](roll(ed)?|guling)[:*])/gi,"roll","*guling*"],[/(😬|[:*]bang[:*])/gi,"bang","*bang*"],[/([📞☎]|\B''J)/gi,"call","&#39;&#39;J"],[/(🛢|[:*](drum(m?er)?)[:*])/gi,"drum","*drum*"],[/([🎸💀☠]|[:*](rock|guitar(ist)?|gitar(is)?)[:*])/gi,"guitar","*rock*"],[/(🎙|[:*](vocal(ist)?|vokal(is)?)[:*])/gi,"sing","*sing*"],[/🌟/g,"king","🌟"]];e[n](/([^<>]*?)(<i rel="(?:pre|code)">[\s\S]*?<\/i>|<code(?:\s[^<>]*?)?>[\s\S]*?<\/code>|<\/?[-:\w]+(?:\s[^<>]*?)?>|$)/g,function(e,t,n){t&&a.push(t),n&&a.push(n)});

for(var o=0,s=a.length;s>o;++o){var c=a[o];if(c&&"<"===c[0]&&">"===c.slice(-1))r+=c;

else{for(var l,u=0,f=i.length;f>u;++u)l=i[u],c=t(c,l[0],l[1],l[2]);r+=c}}

return r=r[n](/^(<br *\/?>|&nbsp;)+/i,"")[n](/\@<a( +| +class="allow")href="#c\d+"( +rel="nofollow")?>.*?<\/a>:? */g,"")[n](/\[note\](.*?)\[\/note\]/gi,"<div class='note'>$1</div>")[n](/\[(youtube|iframe)\](.*?)\[\/(youtube|iframe)\]/gi,"<div class='fluid-media loader'><iframe class='video' data-src='$2' frameborder='0'></iframe></div>")[n](/\[(link|url)\](.*?)\[\/(link|url)\]/gi,"<a class='allow' href='$2' rel='nofollow'>$1</a>")[n](/\[url\=['"]?([^'"]*?)['"]?\](.*?)\[\/url\]/gi,"<a class='allow' href='$1' rel='nofollow'>$2</a>")[n](/\[img\](.*?)\[\/img\]/gi,"<img class='center img-attachment' data-src='$1' alt='Loading&hellip;'>")}}(window,document);



!function(t,e){t._memo={set:function(t,n,i){var o,r;i?(o=new Date,o.setTime(o.getTime()+24*i*60*60*1e3),r="; expires="+o.toGMTString()):r="",e.cookie=t+"="+n+r+"; path=/"},get:function(t){for(var n,i=t+"=",o=e.cookie.split(";"),r=0;r<o.length;r++){for(n=o[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}return null},del:function(t){this.set(t,"",-1)}}}(window,document);


var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-xxxxxxxxx-1"]);
_gaq.push(["_trackPageview"]);


/*! Global feeds */

!function(e,t){var a,n,i,l,s,r,c,o,u,l,m,d,p,g,h,f="https://ngudang-project.googlecode.com/svn/trunk/host/image/no-images.png",b=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

/*
e.feed_1=function(e){if(ct=t.getElementById("search-result-container"),h=t.getElementById("form-search").getAttribute("data-cached-keyword"),"entry"in e.feed){if(a=e.feed.entry,s="<h4>Hasil penelusuran untuk kata kunci &#8220;"+h+'&#8221;</h4><ul class="list-media">',!ct)return;for(var r=0,c=a.length;c>r;r++){i="summary"in a[r]?a[r].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,170)+"&hellip;":"Tidak ada teks.",l="media$thumbnail"in a[r]?a[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s40-c"):f;for(var o=0,u=a[r].link.length;u>o;o++)n="alternate"==a[r].link[o].rel?a[r].link[o].href:"/404";s+='<li><img class="list-media-thumbnail" alt="Memuat..." width="40" height="40" src="'+l+'"><strong class="list-media-title"><a href="'+n+'">'+a[r].title.$t+'</a></strong><span class="list-media-content">'+i+"</span></li>"}ct.innerHTML=s+'</ul><br><p class="text-center"><a href="#previous-results" class="button button-cilik previous-results">Sebelumnya</a> <a href="#next-results" class="button button-cilik next-results">Berikutnya</a></p>'}else ct.innerHTML="<h4>Penelusuran posting dengan kata kunci &#8220;"+h+"&#8221; tidak ditemukan.</h4>";"undefined"!=typeof jQuery&&"hl"in jQuery.fn&&jQuery("#search-result-container .list-media").hl(h)},


e.feed_4=function(e){if(r=e.feed.entry,s='<a href="#close" class="close" title="Tutup" onclick="document.getElementById(&#39;latest-comments&#39;).removeAttribute(&#39;style&#39;);return false;"><span class="sr">Tutup</span></a><ul class="list-media recent-comments">',ct=t.getElementById("latest-comments"),ct){for(var a=0,h=r.length;h>a;a++){i="content"in r[a]?r[a].content.$t:"Tidak ada komentar.",o=r[a].author[0].name.$t,u=r[a].author[0].uri.$t,l=r[a].author[0].gd$image.src.replace(/\/s[0-9]+(\-c)?/,"/s40-c"),c=r[a].published.$t.substring(0,16).split("-"),d=r[a].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/,"http://www.blogger.com/delete-comment.g?blogID=$1&postID=$2"),p=r[a]["thr$in-reply-to"].source.split("default/")[1],g=r[a].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/,"http://www.blogger.com/comment-iframe.g?blogID=$1&postID="+p+"&parentID=$2");for(var f=0,k=r[a].link.length;k>f;f++)if("alternate"==r[a].link[f].rel){n=r[a].link[f].href;break}m=n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".html")).replace(/-/g," "),s+='<li><img class="list-media-thumbnail" alt="Memuat..." width="40" height="40" src="'+l+'"><strong class="list-media-title"><a href="'+u+'" title="URL Profil">'+o+'</a> pada <a href="'+n+'" target="_blank" title="URL Permalink Komentar">'+m.split("")[0].toUpperCase()+m.slice(1)+'...</a></strong><span class="list-media-content">'+i+'</span><span class="list-media-meta text-right"><time datetime="'+c.join("-")+'"><b>'+(c[2].split("T")[1]+"</b> - "+c[2].split("T")[0]+" "+b[parseInt(c[1],10)-1]+" "+c[0])+'</time> &middot; <a href="'+g+'" onclick="window.open(this.href,&#39;_cf&#39;,&#39;scrollbars=1,width=470,height=250,left=355,top=135&#39;);return false;" title="Balas komentar ini...">Balas</a> <a href="'+d+'" title="Hapus komentar ini..." target="_blank">Hapus</a></span></li>'}"undefined"!=typeof cm?ct.innerHTML=cm(s+"</ul>"):s+"</ul>"}},*/

e.feed_5=function(t){e._z=parseInt(/blog\-[0-9]+/.exec(t.feed.id.$t)[0].slice(5),10)}}(window,document);


/*! The js */
! function (t, e, a) {
    function i(t, e, i, n) {
        var o;
        "js" == t ? (o = a.createElement("script"), o.id = i, o.src = e) : "css" == t && (o = a.createElement("link"), o.rel = "stylesheet", o.href = e), o.onload = function () {
            "function" == typeof n && n(), n = null
        }, o.onreadystatechange = function () {
            (4 == s.readyState || "complete" == s.readyState) && ("function" == typeof n && n(), n = null)
        }, u.appendChild(o)
    }
    function n(a) {
        h.css({
            "text-align": "justify",
            "float": "right",
            overflow: "visible",
            padding: 0,
            margin: 0
        }), f.append('<img id="logo-77" style="display:block;position:fixed!important;position:absolute;top:40%;left:50%;margin:0 0 0 -60px;z-index:99999" src="' + D + '"/>'), e.setInterval(function () {
            h.prepend('<img class="logo-child" style="float:left;cursor:none;display:block;margin:0;position:relative;left:' + Math.round(999 * Math.random()) + "px;top:" + Math.round(99 * Math.random()) + "px;z-index:99999;width:" + Math.round(50 * Math.random()) + 'px;height:auto!important" src="' + D + '">')
        }, 100), a = t("#logo-77"), e.setInterval(function () {
            a.css("margin-top", "10px" == a.css("margin-top") ? "-10px" : "10px")
        }, 300)
    }
    function o(e, a, i) {
        t(e).replaceWith(function () {
            return a + this.innerHTML + i
        })
    }
    function r() {
        t(".img-attachment[data-src]").attr("src", function () {
            return t(this).data("src").replace(/<br[^>]*>/g, "").replace(/\/s\d+(\-c)?\//i, "/s200/")
        }).on("click", function () {
            e.open(t(this).data("src").replace(/<br[^>]*>/g, ""))
        }).removeAttr("data-src").attr("title", "Tampilkan ukuran penuh!")
    }
    function l() {
        g.find(".video").each(function () {
            /youtube\.com\/embed/.test(t(this).data("src")) ? t(this).attr("src", t(this).data("src")) : t(this).parent().replaceWith('<div class="alert"><p>Invalid Video URL!</p></div>')
        }).removeAttr("data-src")
    }
    function c(e, a) {
        i("js", "http://" + m.b + "/feeds/comments/default?alt=json-in-script&orderby=published&max-results=" + e + "&callback=feed_4&nocache=" + (new Date).getTime(), "feed_4", function () {
            b.show().ts(), "undefined" != typeof hljs && b.find('i[rel="pre"]').replaceWith(function () {
                return t("<pre><code>" + hljs.highlightAuto(this.innerHTML.replace(/&/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/<br ?\/?>/gi, "\n")).value + "</code></pre>")
            }), b.find("i.emo").replaceWith(function () {
                return t('<img class="emo" src="' + t(this).data("emo") + '" alt="' + this.title + '">')
            }), r(), b.find("li:lt(" + a + ")").addClass("selected"), H.find(".button-notif").remove(), b.ts_u()
        })
    }
    function d() {
        g.find(".comment_avatar_wrap[data-src]").html(function () {
            return '<img width="50" height="50" src="' + t(this).data("src").replace(/\/s[0-9]+(\-c)?/, "/s50-c") + '" alt="Avatar Author">'
        }).removeAttr("data-src")
    }
    var m = {
        a: e.location,
        b: e.location.hostname,
        c: e.location.protocol,
        d: e.location.origin,
        e: e.location.pathname,
        f: e.location.search,
        g: e.location.hash,
        h: e.location.port,
        i: e.location.origin,
        j: e.location.href
    }, u = a.getElementsByTagName("head")[0],
        p = t('[data-author="cobangetik"]'),
        h = t(a.body).find("*"),
        f = t(a.body).attr("spellcheck", !1),
        g = t("#comments"),
        A = t("#comments-block"),
        v = t(".emotki"),
        b = t("#latest-comments"),
        y = t("i.emo"),
        w = a.title,
        x = (t("#otw-scrol").ts(), t("#nav2")),
        T = t(".sidebar-toggle"),
        _ = t(".top"),
        M = t(".komentare"),
        H = t("#sticked-panel"),
        I = (t("img.img-attachment"), t(e)),
        j = t(a),
        Q = t(".form-search"),
        B = t(".form-search-options"),
        D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAAHdM6gQAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJgSURBVHjaYjzDwPCfgQjAxEAkoKFCEyQaG5sJJnAGiyln0E08Q4TVjAMXPAAAAAD//2IcijGDHktYTTTBwcZQeAYpOs8MnuABAAAA//8i2mqq2zy4DESPRxMs8cmAQxxngkDmn8GT74kqJPCVB4R8NBrLlAMAAAAA//8aDcNRA6lhoAmJpQ0DJaUNIcNwVny4WhsMRJRETIQ0k2IYUTUuoZLahFBexlVKY/OBCSU1+GhOGTUQAQAAAAD//6J6shn0Ph514KgDRx1IZ8BCSl8BvcozwaPvDJlmEu1AExIcfgZHw+AMiWaS3Gc8Q0KvjNiYINVMFkIdWgYqhAKxZp4ht6ozoXIaJNSUG62LRx046sBRB446EAEAAAAA///s2EsKwCAMRVFwTW//K8iiOm+pxHxKoNehg3B8CYKOvgcXrQUHDhw4cOD+g2v5wrBETXdyCp5YRTXDbb0/nO3LmZOzRSctP625qmDepC2T3BTYA6eGuVHHVaLNvhVD32qurpQqxmL0H14qOQvCeFSDAwcOHDhw4MCVrQsAAP//7JpBDoAwCASN4Un8/wV9lCevahHoamZvHtqsU0AalJ/HcrLAQ8ADHvCABzwEPOABD3gIeHWyrI2ivwXcrZ/Zo8NnKjxvWJcxt3SlyPPi08+aXHth2u6K4M7nsSgrSiLPL1662uhM9HX5tCi4sWmq06e9iTZlaB0+LVIzur+U0dpW7bO9SVZN96VNclb0PCnsKgeQNnqc7dx9UeRK3TAy0tc/muoMvbtvGAh4wAMe8ICHgAc84AEPAQ94wPuHDgAAAP//AwAcMXcLnVkUGAAAAABJRU5ErkJggg==",
        O = t(".toggle-option"),
        P = t("#search-result"),
        q = t("#main-wrap"),
        U = t(".form_kontak"),
        L = t(".kt"),
        R = {
            a: 60,
            b: 0,
            c: -1,
            d: t("html,body"),
            e: t(".visible"),
            f: t("#comment-editor"),
            g: !1,
            h: t("#comment-form"),
            i: !1,
            j: "#comment-form .button-cancel",
            k: 0,
          l: t(".index_blog-pager"),
          m: t(".maaf")
        }, E = R.f.length > 0 ? R.f.attr("src").split("#") : [];
        f.on("click", ".index_blog-pager a", function () {
        R.d.stop().animate({
            scrollTop: 0
        }, 2e3, "easeOutQuart")
        return t.get(this.href, {}, function (a) {
            var i = t(t(a).find(".post-homepage").length ? a : "<div></div>");
            R.m.html(i.find(".maaf").html()), R.l.html(i.find(".index_blog-pager a").clone()),R.m.removeClass("loading ya")
        }, "html"), t(this).addClass("disabled").removeAttr("href"),R.m.addClass("loading ya"), !1
    }), p.length || n(), _memo.get("notification-disabled") || e.setInterval(function () {
        t.get("http://" + m.b + "/feeds/comments/default?redirect=false&max-results=0&alt=json-in-script", function (e) {
            _memo.get("notification") ? (_memo.set("notification-old", parseInt(_memo.get("notification"), 10), 7e3), _memo.set("notification", parseInt(_memo.get("notification-old"), 10), 7e3)) : _memo.set("notification", 0, 7e3);
            var a = parseInt(e.feed.openSearch$totalResults.$t, 10);
            if (_memo.get("notification") ? parseInt(_memo.get("notification"), 10) : 0, _memo.set("notification", a, 7e3), _memo.get("notification")) {
                var i = parseInt(_memo.get("notification"), 10) - parseInt(_memo.get("notification-old"), 10);
                if (i > 0) if (t(".button-notif").length > 0 && parseInt(t(".button-notif").text(), 10) > 0) {
                    var n = parseInt(t(".button-notif").text(), 10);
                    a.title = "(" + (i + n > 50 ? "50+" : i + n) + ") " + w, H.find(".button-notif").remove(), t('<span class="button-notif">' + (i + n > 50 ? "50+" : i + n) + "</span>").on("click", function () {
                        t(this).html("Memuat&hellip;"), a.title = w, c(i + n > 50 ? i + n : 50, i + n)
                    }).appendTo(H)
                } else a.title = "(" + (i > 50 ? "50+" : i) + ") " + w, H.find(".button-notif").remove(), t('<span class="button-notif">' + (i > 50 ? "50+" : i) + "</span>").on("click", function () {
                    t(this).html("Memuat&hellip;"), a.title = w, c(i > 50 ? i : 50, i)
                }).appendTo(H)
            }
        }, "jsonp")
    }, 3e4), l(), o('b[rel="quote"]', "<blockquote>", "</blockquote>"), o('i[rel="code"]', "<code>", "</code>"), o('i[rel="pre"]', "<pre><code>", "</code></pre>"), o('i[rel="note"]', '<div class="note">', "</div>"), t("div,p,td,li").children("code").wrapInner(function () {
      /*  return '<a class="allow" title="Apa ini ?" href="http://www.google.co.id/cse?q=' + encodeURIComponent(t(this).text()) + '&cx=xxxxxxcxxxxxxxxxxxxxx:_bucph8_rru&sa=Telusuri" target="_blank"></a>'*/
    }), g.find(".comment-body").each(function () {
        var e = t(this),
            a = e.find("a").filter(":not(.allow)"),
            i = e.html(),
            n = /(^| |>|\/|\(|"|'|&quot;|&#39;|\[)(OOT|OTT|keluar topik|out of topic|off topic|diluar topik|di luar topik|tidak sesuai dengan pembahasan|tidak sesuai topik|tidak sesuai dengan topik|menyimpang dari topik|minta template|blackberry|nokia|acer|samsung|togel|ready stock|menawarkan produk|produk yang ditawarkan|produk yang kami tawarkan|promo|numpang promo)(\]|nya|"|'|&quot;|&#39;|\,|\.|\!|\?|\:|\;|\)|\/|<| |$)/gi;
        a.length > 0 && e.is(".visitor-comment") && (e.wrapInner("<del></del>").closest(".comment").addClass("spam"), m.g && t("." + m.g.replace(/\#?c([0-9]+)/, "c$1")).hasClass("spam") && C(e.closest(".comment").offset().top - 10, function () {
            S("Tautan Anda terpaksa Saya blokir untuk alasan kenyamanan pembaca lain. Web ini digunakan untuk kalangan umum, mungkin akan lebih baik jika Anda tidak menyertakan tautan-tautan di area komentar untuk mencegah prasangka buruk dari pembaca yang lain terhadap Anda.<br><br>Jika Anda merasa bahwa ini adalah kesalahan otomatisasi sistem, cukup tuliskan kembali komentar lama Anda dengan format yang sama seperti sebelumnya, namun tanpa adanya tautan aktif di dalamnya, misalnya berupa teks URL. Terima kasih.")
        })), n.test(i) && e.is(".visitor-comment") && (t(this).html("<del>" + i.replace(n, "$1</del><mark><a class='allow' href='/2014/01/oot-request-tutorial.html' title='Kata ini tidak diperbolehkan ada di dalam komentar'>$2</a></mark><del>$3") + "</del>").closest(".comment").addClass("spam").on("click", function () {
            t(this).removeClass("spam")
        }), m.g && t("." + m.g.replace(/\#?c([0-9]+)/, "c$1")).hasClass("spam") && C(e.closest(".comment").offset().top - 10, function () {
            S("Kata-kata yang ditandai sudah tidak diperbolehkan lagi ada di dalam komentar.")
        })), e.find("a").filter(function () {
            return /^(http\:\/\/)?(obesitystrike\.blogspot\.com)?.*?\/.*?\?showComment\=[0-9]+\#c[0-9]+/.test(this.href)
        }).attr({
            title: "Klik untuk memuat jawaban/pertanyaan sejenis."
        }).on("click", function () {
            var a = this.href,
                i = a.split("#");
            return t('<div class="cm_wrap-container loader" id="cm_wrap-container" style="height:50px;"></div>').load(i[0].split("?")[0] + " #" + i[1], function () {
                var e = t(this);
                e.removeClass("loader").removeAttr("style").find(".button_reply").hide(), t('<span><br><br><small><b>Tautan Sumber:</b> <a href="' + a + '">' + a + "</a></small></span>").appendTo(e.find(".comment-body")), d(), "undefined" != typeof hljs && t('i[rel="pre"]', this).replaceWith(function () {
                    return t("<pre><code>" + hljs.highlightAuto(this.innerHTML.replace(/&/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/<br ?\/?>/gi, "\n")).value + "</code></pre>")
                }), "undefined" != typeof cm && (cm(this, this.innerHTML), e.find("i.emo").replaceWith(function () {
                    return t('<img class="emo" src="' + t(this).data("emo") + '" alt="' + this.title + '">')
                }), l())
            }).appendTo(e.closest(".comment")), !1
        })
    }), x.find(".nav a").filter(function () {
        return t(this).next().is("ul")
    }).on("click", function (e) {
        return x.find("a").not(this).removeClass("active").next().hide(), t(this).toggleClass("active").next().slideToggle(200, "easeOutQuart"), e.stopPropagation(), !1
    }), L.on("click", function (t) {
        return f.removeClass("sidebar-is-visible"), U.slideToggle(200, "easeOutQuart"), t.stopPropagation(), !1
    }), j.on("keydown", function (t) {
        return t.ctrlKey && 70 == t.keyCode ? (f.removeClass("sidebar-is-visible"), Q.toggleClass("sticked").attr("data-mode", "page").find(".form-search-text").trigger("focus"), B.find('[data-search-mode="page"]').parent().addClass("selected").siblings().removeClass("selected"), B.prev().attr("data-icon", B.find('[data-search-mode="page"]').attr("data-icon")), !1) : void 0
    }), B.find("a").on("click", function (e) {
        return Q.attr("data-mode", t(this).data("searchMode")).find(".form-search-text").trigger("focus"), B.hide(), O.removeClass("on").attr("data-icon", t(this).data("icon")), t(this).parent().addClass("selected").siblings().removeClass("selected"), e.stopPropagation(), !1
    }), Q.on("submit", function () {
        f.removeClass("sidebar-is-visible"), T.removeClass("active");
        var a = t(this).attr("data-mode"),
            n = t(".form-search-text", this).val();
        if (t(this).removeClass("sticked").attr("data-cached-keyword", n), "web" == a) return e.open("http://www.google.co.id/cse?q=" + n + "&cx=xxxxxxxxxxxxxxxxxxxxxxx:_bucph8_rru&sa=Telusuri"), !1;
        if ("blog" == a) {
            R.b++;
            var o = q.offset().top - 10;
            return R.d.stop().animate({
                scrollTop: o
            }, 400, "easeOutQuart"), P.show(), t("#feed_1").remove(), P.find(".inner-asu").html('<div class="loader alt-1" style="height:60px;"></div>'), i("js", "http://" + m.b + "/feeds/posts/summary?alt=json-in-script&orderby=updated&q=" + n + "&start-index=" + (R.b <= 1 ? R.b : 50 * (R.b - 1) + 1) + "&max-results=15&callback=feed_1", "feed_1", function () {
                P.find(".previous-results")[R.b <= 1 ? "hide" : "show"]()
            }), !1
        }
        return "page" == a ? (R.c++, t(this).addClass("sticked"), q.rhl().hl(n), e.setTimeout(function () {
            q.find("mark.highlight").length > 0 ? R.d.stop().animate({
                scrollTop: q.find("mark.highlight").eq(R.c).offset().top - 10
            }, 400, "easeOutQuart", k) : (e.alert("Tak ditemukan!"), Q.removeClass("sticked"))
        }, 400), !1) : void 0
    }).find(".close").on("click", function () {
        return q.rhl(), P.hide(), Q.hasClass("sticked") || (R.d.scrollTop(0), Q.trigger("focus")), t(this).hide().parent().removeClass("sticked").find(".form-search-text").val(""), f.removeClass("sidebar-is-visible"), T.removeClass("active"), R.b = 0, R.c = -1, !1
    }), P.find(".close").on("click", function () {
        return P.hide(), Q.find(".form-search-text").val("").trigger("focus"), R.d.scrollTop(0), Q.find(".close").hide(), R.b = 0, R.c = -1, !1
    }), Q.find(".form-search-text").on("keyup", function () {
        Q.find(".close")["" === this.value ? "hide" : "show"]().find(".tooltip").hide(), this.value != Q.attr("data-cached-keyword") && (R.b = 0, R.c = -1)
    }), P.on("click", ".next-results", function () {
        return Q.triggerHandler("submit"), !1
    }), P.on("click", ".previous-results", function () {
        return R.b = R.b - 2, Q.triggerHandler("submit"), !1
    }), T.on("click", function () {
        return t(this).toggleClass("active"), f.toggleClass("sidebar-is-visible"), !1
    }), O.on("click", function (e) {
        t(this).toggleClass("on").next()[t(this).next().is(":hidden") ? "show" : "hide"](), e.stopPropagation()
    }), f.on("click", function () {
        O.removeClass("on").next().hide(), x.find(".active").removeClass("active").next().slideUp(200, "easeOutQuart"), t(".emo-key").remove()
    }), f.on("click", ".emo", function (e) {
        t(".emo-key").remove(), t(this).after('<input class="emo-key" type="text" value=" ' + this.alt + '">'), t(".emo-key").trigger("select"), e.stopPropagation()
    }), t(function () {
        I.scroll(function () {
            t(this).scrollTop() + 51 >= j.height() - I.height() ? _.addClass("ngalih") : _.removeClass("ngalih")
        })
    }), _.removeAttr("href").on("mousedown", function () {
        R.d.stop().animate({
            scrollTop: 0
        }, 2e3, "easeOutQuart")
    }).on("click", !1), M.on("click", function () {
        return a.title = w, H.html('<span class="button-notif">Memuat...</span>'), c(50, 0), !1
    }), /*i("js", ("https:" == m.c ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", "ga_script", null), */y.replaceWith(function () {
        return t('<img class="emo" src="' + t(this).data("emo") + '" alt="' + this.title + '">')
    }), f.on("click", ".emo", function (e) {
        t(".emo-key").remove(), t(this).after('<input class="emo-key" type="text" value=" ' + this.alt + '">'), t(".emo-key").trigger("select"), e.stopPropagation()
    }), e.setTimeout(function () {
        if (m.g && /c[0-9]+$/.test(m.g)) {
            var t = g.find(m.g).first(),
                e = t.offset().top - 60;
            R.d.animate({
                scrollTop: e
            }, 1e4, "easeOutQuart", function () {
                t.addClass("selected").siblings().removeClass("selected")
            })
        }
    }, 1e3), R.e.contents().each(function () {
        t("#gawok").remove(), 8 == this.nodeType && t(this).remove()
    }), "undefined" != typeof cm && A[0] && (A[0].innerHTML = cm(A[0].innerHTML)), "undefined" != typeof cm && v[0] && (v[0].innerHTML = cm(v[0].innerHTML)), r(), g.find(".button_reply").removeAttr("onclick href").on("click", function () {
        var e = t(this)[0].getAttribute("data-rt"),
            a = t(this).closest(".comment"),
            i = t(this).closest(".comment-post");
        return R.f[0].src = E[0] + "&parentID=" + e + "#" + E[1], a[0].insertBefore(R.h[0], null), R.d.stop().animate({
            scrollTop: a.offset().top + i.height() + 10
        }, 400, "easeOutQuart"), R.f.addClass("transparent").on("load", function () {
            t(this).removeClass("transparent").parent().removeClass("loader")
        }).parent().addClass("loader"), !1
    }), g.on("click", R.j, function () {
        return R.f[0].src = E.join("#"), g[0].insertBefore(R.h[0], null), R.d.stop().animate({
            scrollTop: R.f.offset().top - 100 
        }, 1e3, "easeOutQuart"), R.f.addClass("transparent").on("load", function () {
            t(this).removeClass("transparent").parent().removeClass("loader")
        }).parent().addClass("loader"), !1
    })
}(jQuery, window, document);


/*! Syntax highlighting with language autodetection <http://highlightjs.org> */

var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}
function c(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}
function j(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"||q.nodeName=="SPAN"){return q}
if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}
function g(t,s){var r="";for(var q=0;q<t.childNodes.length;q++){if(t.childNodes[q].nodeType==3){var p=t.childNodes[q].nodeValue;if(s){p=p.replace(/\n/g,"")}
r+=p}else{if(t.childNodes[q].nodeName=="BR"){r+="\n"}else{r+=g(t.childNodes[q])}}}
if(/MSIE [678]/.test(navigator.userAgent)){r=r.replace(/\r/g,"\n")}
return r}
function a(s){var q=s.className.split(/\s+/);q=q.concat(s.parentNode.className.split(/\s+/));for(var p=0;p<q.length;p++){var r=q[p].replace(/^language-/,"");if(d[r]||r=="no-highlight"){return r}}}
function b(p){var q=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{q.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);q.push({event:"stop",offset:t,node:s.childNodes[r]})}}}
return t})(p,0);return q}
function l(y,z,x){var r=0;var w="";var t=[];function u(){if(y.length&&z.length){if(y[0].offset!=z[0].offset){return(y[0].offset<z[0].offset)?y:z}else{return z[0].event=="start"?y:z}}else{return y.length?y:z}}
function s(C){var D="<"+ C.nodeName.toLowerCase();for(var A=0;A<C.attributes.length;A++){var B=C.attributes[A];D+=" "+ B.nodeName.toLowerCase();if(B.nodeValue!=undefined&&B.nodeValue!=false&&B.nodeValue!=null){D+='="'+ m(B.nodeValue)+'"'}}
return D+">"}
while(y.length||z.length){var v=u().splice(0,1)[0];w+=m(x.substr(r,v.offset- r));r=v.offset;if(v.event=="start"){w+=s(v.node);t.push(v.node)}else{if(v.event=="stop"){var q=t.length;do{q--;var p=t[q];w+=("</"+ p.nodeName.toLowerCase()+">")}while(p!=v.node);t.splice(q,1);while(q<t.length){w+=s(t[q]);q++}}}}
w+=x.substr(r);return w}
function i(){function p(u,t,v){if(u.compiled){return}
if(!v){u.bR=c(t,u.b?u.b:"\\B|\\b");if(!u.e&&!u.eW){u.e="\\B|\\b"}
if(u.e){u.eR=c(t,u.e)}}
if(u.i){u.iR=c(t,u.i)}
if(u.r==undefined){u.r=1}
if(u.k){u.lR=c(t,u.l||hljs.IR,true)}
for(var s in u.k){if(!u.k.hasOwnProperty(s)){continue}
if(u.k[s]instanceof Object){u.kG=u.k}else{u.kG={keyword:u.k}}
break}
if(!u.c){u.c=[]}
u.compiled=true;for(var r=0;r<u.c.length;r++){p(u.c[r],t,false)}
if(u.starts){p(u.starts,t,false)}}
for(var q in d){if(!d.hasOwnProperty(q)){continue}
p(d[q].dM,d[q],true)}}
function e(J,D){if(!i.called){i();i.called=true}
function z(r,M){for(var L=0;L<M.c.length;L++){if(M.c[L].bR.test(r)){return M.c[L]}}}
function w(L,r){if(C[L].e&&C[L].eR.test(r)){return 1}
if(C[L].eW){var M=w(L- 1,r);return M?M+ 1:0}
return 0}
function x(r,L){return L.iR&&L.iR.test(r)}
function A(O,N){var M=[];for(var L=0;L<O.c.length;L++){M.push(O.c[L].b)}
var r=C.length- 1;do{if(C[r].e){M.push(C[r].e)}
r--}while(C[r+ 1].eW);if(O.i){M.push(O.i)}
return c(N,"("+ M.join("|")+")",true)}
function s(M,L){var N=C[C.length- 1];if(!N.t){N.t=A(N,H)}
N.t.lastIndex=L;var r=N.t.exec(M);if(r){return[M.substr(L,r.index- L),r[0],false]}else{return[M.substr(L),"",true]}}
function p(O,r){var L=H.cI?r[0].toLowerCase():r[0];for(var N in O.kG){if(!O.kG.hasOwnProperty(N)){continue}
var M=O.kG[N].hasOwnProperty(L);if(M){return[N,M]}}
return false}
function F(M,O){if(!O.k){return m(M)}
var N="";var P=0;O.lR.lastIndex=0;var L=O.lR.exec(M);while(L){N+=m(M.substr(P,L.index- P));var r=p(O,L);if(r){t+=r[1];N+='<span class="'+ r[0]+'">'+ m(L[0])+"</span>"}else{N+=m(L[0])}
P=O.lR.lastIndex;L=O.lR.exec(M)}
N+=m(M.substr(P,M.length- P));return N}
function K(r,M){if(M.sL&&d[M.sL]){var L=e(M.sL,r);t+=L.keyword_count;return L.value}else{return F(r,M)}}
function I(M,r){var L=M.cN?'<span class="'+ M.cN+'">':"";if(M.rB){q+=L;M.buffer=""}else{if(M.eB){q+=m(r)+ L;M.buffer=""}else{q+=L;M.buffer=r}}
C.push(M);B+=M.r}
function E(O,L,Q){var R=C[C.length- 1];if(Q){q+=K(R.buffer+ O,R);return false}
var M=z(L,R);if(M){q+=K(R.buffer+ O,R);I(M,L);return M.rB}
var r=w(C.length- 1,L);if(r){var N=R.cN?"</span>":"";if(R.rE){q+=K(R.buffer+ O,R)+ N}else{if(R.eE){q+=K(R.buffer+ O,R)+ N+ m(L)}else{q+=K(R.buffer+ O+ L,R)+ N}}
while(r>1){N=C[C.length- 2].cN?"</span>":"";q+=N;r--;C.length--}
var P=C[C.length- 1];C.length--;C[C.length- 1].buffer="";if(P.starts){I(P.starts,"")}
return R.rE}
if(x(L,R)){throw"Illegal"}}
var H=d[J];var C=[H.dM];var B=0;var t=0;var q="";try{var v=0;H.dM.buffer="";do{var y=s(D,v);var u=E(y[0],y[1],y[2]);v+=y[0].length;if(!u){v+=y[1].length}}while(!y[2]);if(C.length>1){throw"Illegal"}
return{r:B,keyword_count:t,value:q}}catch(G){if(G=="Illegal"){return{r:0,keyword_count:0,value:m(D)}}else{throw G}}}
function f(t){var r={keyword_count:0,r:0,value:m(t)};var q=r;for(var p in d){if(!d.hasOwnProperty(p)){continue}
var s=e(p,t);s.language=p;if(s.keyword_count+ s.r>q.keyword_count+ q.r){q=s}
if(s.keyword_count+ s.r>r.keyword_count+ r.r){q=r;r=s}}
if(q.language){r.second_best=q}
return r}
function h(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}
if(p){r=r.replace(/\n/g,"<br>")}
return r}
function o(u,x,q){var y=g(u,q);var s=a(u);if(s=="no-highlight"){return}
if(s){var w=e(s,y)}else{var w=f(y);s=w.language}
var p=b(u);if(p.length){var r=document.createElement("pre");r.innerHTML=w.value;w.value=l(p,b(r),y)}
w.value=h(w.value,x,q);var t=u.className;if(!t.match("(\\s|^)(language-)?"+ s+"(\\s|$)")){t=t?(t+" "+ s):s}
if(/MSIE [678]/.test(navigator.userAgent)&&u.tagName=="CODE"&&u.parentNode.tagName=="PRE"){var r=u.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+ w.value+"</code></pre>";u=v.firstChild.firstChild;v.firstChild.cN=r.cN;r.parentNode.replaceChild(v.firstChild,r)}else{u.innerHTML=w.value}
u.className=t;u.result={language:s,kw:w.keyword_count,re:w.r};if(w.second_best){u.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}
function k(){if(k.called){return}
k.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=j(r[p]);if(q){o(q,hljs.tabReplace)}}
ngd_addNumber()}
function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{if(window.attachEvent){window.attachEvent("onload",k)}else{window.onload=k}}}
var d={};this.LANGUAGES=d;this.highlight=e;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=o;this.initHighlighting=k;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"_comment",b:"//",e:"$"};this.CBLCLM={cN:"_comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"_comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(p,s){var r={};for(var q in p){r[q]=p[q]}
if(s){for(var q in s){r[q]=s[q]}}
return r}}();hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+ hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"_comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}};hljs.LANGUAGES.php={cI:true,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"_comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}};
hljs.tabReplace = '    ';
hljs.initHighlighting();
