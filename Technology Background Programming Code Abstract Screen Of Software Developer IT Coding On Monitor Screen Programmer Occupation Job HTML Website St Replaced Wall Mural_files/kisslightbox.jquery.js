/*! KissLightbox - v1.0 - 2016-03-18
* http://inithome.com
* Copyright 2016 Kamil Dabrowski;
* @author Kamil Dabrowski <https://pl.linkedin.com/in/kamildab>
*/
$(document).ready(function(){function c(c){c=parseInt($(".lightbox.active").attr("data-maxwidth")),screenr=parseInt($(document).width()),screenr<=610?screenr<=300?hhh=320:hhh=screenr-50:(hhh=600,NaN!=c&&c<screenr&&(hhh=c)),$(".lightbox.active").css({left:Math.round((screenr-hhh)/2)+"px",width:hhh+"px"})}var t=0;$(".lightboxclick").click(function(){return t=$(window).scrollTop(),$(".lightbox .cancel").click(),$(".lightbox.lightbox_"+$(this).attr("data-lightbox")).addClass("active").show(),c(),$("#lightbox").show(),!1}),$(window).scroll(function(c){$(".lightbox.active").not(".noscrollme").css("top",-($(window).scrollTop()-t-50))}),$(".lightbox .cancel").click(function(){$(this).parent().removeClass("active").hide(),$("#lightbox").hide()}),c(),$(window).resize(function(){c()})}),$(document).keyup(function(c){13==c.keyCode&&$(".save").click(),27==c.keyCode&&$(".cancel").click()});