/*
 * SimpleModal 1.4.2 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2011 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sat, Dec 17 2011 15:35:38 -0800
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],k=b(document),l=b.browser.msie&&6===parseInt(b.browser.version)&&"object"!==typeof window.XMLHttpRequest,n=b.browser.msie&&7===parseInt(b.browser.version),m=null,h=b(window),i=[];b.modal=function(a,d){return b.modal.impl.init(a,d)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=function(){b.modal.impl.setContainerDimensions()};
b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,d){b.modal.impl.update(a,d)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',
closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,d){if(this.d.data)return!1;m=b.browser.msie&&!b.boxModel;this.o=b.extend({},b.modal.defaults,d);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof jQuery?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),
this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&l)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:i[0],width:i[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(l||m)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});k.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});h.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();l||m?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:i[0],width:i[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");k.unbind("keydown.simplemodal");h.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,f){if(f){var g=f[0].style;g.position="absolute";if(2>b)g.removeExpression("height"),g.removeExpression("width"),g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,e;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):f.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(e="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),e=-1===e.indexOf("%")?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var d=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",f=b(":input:enabled:visible:"+a,d.d.wrap);setTimeout(function(){0<f.length?f.focus():d.d.wrap.focus()},
10)},getDimensions:function(){var a=b.browser.opera&&"9.5"<b.browser.version&&"1.3">b.fn.jquery||b.browser.opera&&"9.5">b.browser.version&&"1.2.6"<b.fn.jquery?h[0].innerHeight:h.height();j=[k.height(),k.width()];i=[a,h.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?i[0]:i[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,
"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=l||n,d=this.d.origHeight?this.d.origHeight:b.browser.opera?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:b.browser.opera?this.d.container.width():
this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),f=this.d.data.outerHeight(!0),g=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||d;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,e=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<i[0]?c:i[0],e=e&&e<i[1]?e:i[1],h=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",d=d?this.o.autoResize&&d>c?c:d<h?h:d:f?f>c?c:this.o.minHeight&&
"auto"!==h&&f<h?h:f:h,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>e?e:a<c?c:a:g?g>e?e:this.o.minWidth&&"auto"!==c&&g<c?c:g:c;this.d.container.css({height:d,width:a});this.d.wrap.css({overflow:f>d||g>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=i[0]/2-this.d.container.outerHeight(!0)/2;b=i[1]/2-this.d.container.outerWidth(!0)/2;var f="fixed"!==this.d.container.css("position")?h.scrollTop():0;this.o.position&&"[object Array]"===
Object.prototype.toString.call(this.o.position)?(a=f+(this.o.position[0]||a),b=this.o.position[1]||b):a=f+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),
this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",
this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});
/*!
 * jQuery Smooth Scroll Plugin v1.4.4
 *
 * Date: Mon Feb 20 09:04:54 2012 EST
 * Requires: jQuery v1.3+
 *
 * Copyright 2010, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 *
*/
(function(b){function m(c){return c.replace(/(:|\.)/g,"\\$1")}var n=function(c){var e=[],a=false,d=c.dir&&c.dir=="left"?"scrollLeft":"scrollTop";this.each(function(){if(!(this==document||this==window)){var f=b(this);if(f[d]()>0)e.push(this);else{f[d](1);a=f[d]()>0;f[d](0);a&&e.push(this)}}});if(c.el==="first"&&e.length)e=[e.shift()];return e},o="ontouchend"in document;b.fn.extend({scrollable:function(c){return this.pushStack(n.call(this,{dir:c}))},firstScrollable:function(c){return this.pushStack(n.call(this,
{el:"first",dir:c}))},smoothScroll:function(c){c=c||{};var e=b.extend({},b.fn.smoothScroll.defaults,c),a=b.smoothScroll.filterPath(location.pathname);this.die("click.smoothscroll").live("click.smoothscroll",function(d){var f={},j=b(this),g=location.hostname===this.hostname||!this.hostname,h=e.scrollTarget||(b.smoothScroll.filterPath(this.pathname)||a)===a,k=m(this.hash),i=true;if(!e.scrollTarget&&(!g||!h||!k))i=false;else{g=e.exclude;h=0;for(var l=g.length;i&&h<l;)if(j.is(m(g[h++])))i=false;g=e.excludeWithin;
h=0;for(l=g.length;i&&h<l;)if(j.closest(g[h++]).length)i=false}if(i){d.preventDefault();b.extend(f,e,{scrollTarget:e.scrollTarget||k,link:this});b.smoothScroll(f)}});return this}});b.smoothScroll=function(c,e){var a,d,f,j=0;d="offset";var g="scrollTop",h={},k=false;f=[];if(typeof c==="number"){a=b.fn.smoothScroll.defaults;f=c}else{a=b.extend({},b.fn.smoothScroll.defaults,c||{});if(a.scrollElement){d="position";a.scrollElement.css("position")=="static"&&a.scrollElement.css("position","relative")}f=
e||b(a.scrollTarget)[d]()&&b(a.scrollTarget)[d]()[a.direction]||0}a=b.extend({link:null},a);g=a.direction=="left"?"scrollLeft":g;if(a.scrollElement){d=a.scrollElement;j=d[g]()}else{d=b("html, body").firstScrollable();k=o&&"scrollTo"in window}h[g]=f+j+a.offset;a.beforeScroll.call(d,a);if(k){f=a.direction=="left"?[h[g],0]:[0,h[g]];window.scrollTo.apply(window,f);a.afterScroll.call(a.link,a)}else d.animate(h,{duration:a.speed,easing:a.easing,complete:function(){a.afterScroll.call(a.link,a)}})};b.smoothScroll.version=
"1.4.4";b.smoothScroll.filterPath=function(c){return c.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")};b.fn.smoothScroll.defaults={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400}})(jQuery);

/* simple tooltip */
(function(a){a.fn.simpleTooltip=function(g){var c=a.extend({},a.fn.simpleTooltip.defaults,g);return this.each(function(){var b=a(this),d="",e="";b.hover(function(f){titleDisplayed=(d=b.attr("title"))&&!c.overrideElementTitle?d:c.title;e=b.data("details");b.attr("title","");0<titleDisplayed.length&&(a("body").append("<p id='v-tooltip'>"+titleDisplayed+"<br><span>"+e+"</span></p>"),a("#v-tooltip").animate({opacity:1},c.delay).css("top",f.pageY-c.xOffset+"px").css("left",f.pageX+c.yOffset+"px").fadeIn("fast"))},function(){b.attr("title",d);a("#v-tooltip").remove()});b.mousemove(function(b){a("#v-tooltip").css("top",b.pageY-c.xOffset+"px").css("left",b.pageX+c.yOffset+"px")})})};a.fn.simpleTooltip.defaults={title:null,secondaryTitle:null,xOffset:10,yOffset:20,delay:400,overrideElementTitle:!1}})(jQuery);

jQuery.fn.parenttext = function() {
    return $(this).clone().children().remove().end().text();
};

$(function(){
    var $j = $('<ul id="jumper"></ul>');
    var h = [], t = "";

    h.push(['<li class="pad">&rarr;</li>']);

    $("h2").not(".skipHeading").each(function(){
        t = $(this).parenttext().replace(/[^a-zA-Z]/ig, "");
        $(this).attr("id", t);
        h.push('<li><a href="#'+t+'">'+$(this).parenttext()+'</a></li>');
    });
    $j.html(h.join(""));
    $("#nav li.active").append($j.fadeIn());
    $("#jumper").find("a").smoothScroll({offset:-10});

    try {
        $(".highlight").find("a").smoothScroll({offset:-10});
    } catch(e) {}

    // publicationsvar abstractsVisible = 0;
    $("#coverPages li span").simpleTooltip({
      title: $(this).attr("title"),
      secondaryTitle: $(this).data("details"),
      delay: 100
    });

    var abstractsVisible = 0;
    $("h2 .showAllAbstracts").bind("click", function(){
        (abstractsVisible) ? $("dd.abstract").hide() : $("dd.abstract").show();
        abstractsVisible = (abstractsVisible) ? 0 : 1;
    });

    $("dd.abstract").before('<dd><a href="#" class="toggleAbstract">[abstract &rarr;]</a>');
    var $abstractToggler = $("dd a.toggleAbstract");
    $abstractToggler.bind("click", function(e){
        $(this).parent().nextUntil('dt').filter("dd.abstract").toggle();
        e.preventDefault();
    });

    // based on http://manos.malihu.gr/tuts/jquery_thumbnail_scroller_white.html#
    var $thumbScroller_container = $("#coverPages");
    var $thumbScroller = $("#coverPagesLayout");

    $("h2 .showAllCovers").bind("click", function(){
        $thumbScroller_container.slideToggle("fast");
    });

    $thumbScroller.fadeIn();

    $("div.article:not('.noCaption')").find("img").each(function(){
        var img = $(this).clone();
        var title = $(this).attr("alt");
        var css_class = ($(this).hasClass("flyNone")) ? "flyNone" : ($(this).hasClass("flyLeft")) ? "flyLeft" : "flyRight";

        var caption_div = $('<div class="img-caption" />').html('<span>'+title+'</span>').addClass(css_class);
        var container = $('<div class="img-container" />').css({
            width: parseInt($(this).css("width"))
        }).html(img).append(caption_div).addClass(css_class);

        $(this).after(container);
        $(this).remove()
    })

})