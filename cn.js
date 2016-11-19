!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-75238583-1","auto"),ga("send","pageview");

var gcseDiv=document.getElementById("gcsengine");gcseDiv.innerHTML="<gcse:searchbox></gcse:searchbox>",function(){var e="000856008315202602853:uhpsater0ro",t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https:":"http:")+"//www.google.com/cse/cse.js?cx="+e;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(t,c)}();
function myFunction() {
    document.getElementById("gcsresults").innerHTML = "<gcse:searchresults></gcse:searchresults>";
}myFunction();

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){function makemeSticky2(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking2 bounceInUp",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky2("bungkus");
};

function openSosprofil() {
  var e = document.getElementById("sos-profil");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("search-box");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  var e = document.getElementById("search-icon");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("ellipsis-icon");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
};

function openMobilemenu(){var e=document.getElementById("mobile-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

function openToolmenu() {
  document.getElementById("tool-menu").style.display = "block";
};
var boxArray = ["tool-menu"];
window.addEventListener("mouseup", function(e) {
  for (var r = 0; r < boxArray.length; r++) {
    var o = document.getElementById(boxArray[r]);
    e.target != o && e.target.parentNode != o && (o.style.display = "none")
  }
});

var HW_config = {
    selector: ".changelog-badge", // CSS selector where to inject the badge
    account: "JR8kbx", // your account ID
    translations: { title: "Hot News" }
  };
(function() { var ch = document.createElement('script'); ch.type = 'text/javascript'; ch.async = true; ch.src = '//cdn.headwayapp.co/widget.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ch, sc); })();

 var appended = false,
  bookmark = document.createElement("div");
  bookmark.id = "subscribeOnscroll";
  bookmark.innerHTML = '<div id="site-subs" class="slideUpbox">\
  <div id="mc_embed_signup">\
    <form action="//kompiajaib.us11.list-manage.com/subscribe/post?u=c592732e727cadd0c18aa2e53&amp;id=67606d3fc9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\
      <div id="mc_embed_signup_scroll">\
        <label for="mce-EMAIL">SUBSCRIBE <span class="to">to</span> <span class="our">Our News Letters</span><br/>\
        <span class="get">Get hottest posts into your inbox</span></label>\
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>\
        <div style="position: absolute; left: -5000px;" aria-hidden="true">\
          <input type="text" name="b_c592732e727cadd0c18aa2e53_67606d3fc9" tabindex="-1" value="">\
        </div>\
        <div class="clear"></div>\
          <input type="submit" value="Subscribe" onclick="hidesubscribebox()" name="subscribe" id="mc-embedded-subscribe" class="button">\
      </div>\
    </form>\
  </div>\
  <div class="close-shareOnscroll" onclick="hidesubscribe()">&#215;</div>\
</div>\
';
function hidesubscribe(){document.getElementById("subscribeOnscroll").style.display="none"}function hidesubscribebox(){document.getElementById("subscribeOnscroll").style.display="none",createCookie("hideDialog","hide",7000)}function createCookie(e,o,n){if(n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3);var i="; expires="+t.toGMTString()}else var i="";document.cookie=e+"="+o+i+"; path=/"}function readCookie(e){for(var o=e+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>800&&(appended||(document.body.appendChild(bookmark),appended=!0),readCookie("hideDialog")&&(document.getElementById("subscribeOnscroll").style.display="none"))};
