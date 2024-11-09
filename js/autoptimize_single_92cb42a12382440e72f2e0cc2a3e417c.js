function forceDownload(pdf_url,pdf_name){var path=pdf_url;var save=document.createElement('a');save.href=pdf_url;save.download=pdf_name;save.target='_blank';document.body.appendChild(save);save.click();document.body.removeChild(save);}
var pageAnchor;if($('.home').length>0){pageAnchor='.home-cover-objects';}else{pageAnchor='.stick-anchor';}
function stickMenu()
{}
function smoothScrooling(target,tdelay)
{var target=target;var tdelay=tdelay;var distance=1*$('.top-elems').innerHeight();if(tdelay){var timedelay=tdelay;}else{var timedelay=0;}
var windPos=$(window).scrollTop();var targetOffset=target.offset();var targetY=targetOffset.top;var diff=parseInt(Math.abs(window.scrollY-$(target).offset().top)*.5);var scrollPos=parseInt(target.offset().top-distance);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').stop(true,true).delay(timedelay).animate({scrollTop:scrollPos},diff,'swing');openCloseMenu(null);return true;}};function createMenuScrooling()
{$("a[href*='#']:not([href='#'])").click(function(e){e.preventDefault();var hash=this.hash;var section=$(hash);if(hash&&section.length>0){smoothScrooling($(hash),500);}else{window.location.href=$(this).attr("href");}});}
var menuSubbutton;function menuSublevels()
{$('.box-menu nav > ul > li:has(> ul)').each(function(index,element){$(this).addClass('has-children');$menuSubbutton=$(this).prepend("<span></span>");$menuSubbutton.find('span').click(function(event){$(this).parent().toggleClass('show-children');});});}
function openCloseMenu(what)
{if(what=='menu'){if(!$('body').hasClass('stick-opened')){$('body').removeClass('search-opened');$('body').addClass('stick-opened menu-opened');}else{$('body').removeClass('search-opened menu-opened stick-opened');}}
if(what=='search'){if(!$('body').hasClass('stick-opened')){$('body').removeClass('menu-opened');$('body').addClass('stick-opened search-opened');}else{$('body').removeClass('menu-opened');$('body').addClass('search-opened');}}
if(what==null){$('body').removeClass('search-opened menu-opened stick-opened');}}
function adjustSlideHeight()
{var slideH=0;$("#areas-de-atuacao .area-item .resumo").each(function(index,el){if($(this).innerHeight()>slideH){slideH=$(this).innerHeight();}});$("#areas-de-atuacao .area-item .resumo").css('min-height',slideH);}
function createSwiperAtuacao()
{var swiper_1=new Swiper('#areas-de-atuacao .swiper-container',{init:false,speed:500,loop:true,slidesPerView:'auto',grabCursor:false,autoplay:{delay:$('#areas-de-atuacao').attr('data-slide-speed'),disableOnInteraction:true,},preventClicks:false,preventClicksPropagation:false,});swiper_1.on('init',function(){adjustSlideHeight();});swiper_1.init();}
function createSwiperMateriais()
{var swiper_2=new Swiper('#materiais .swiper-container',{init:false,speed:500,loop:false,slidesPerView:'auto',grabCursor:false,autoplay:{delay:$('#materiais').attr('data-slide-speed'),disableOnInteraction:true,},preventClicks:false,preventClicksPropagation:false,});swiper_2.init();}
function createMansory()
{$grid=$('.box-noticias').masonry({columnWidth:'.noticia-item',itemSelector:'.noticia-item',percentPosition:true});return true;};function updateMasonry(){if($('.box-noticias').length>0){$grid.masonry('layout');}}
function createLoupe()
{console.log("createLoupe");var loupeLocal=$('aside input[type="search"]');$(loupeLocal).parent().append('<div class="loupe"><span></span></div>');}
var eleToWrap;var imgFullUrl;var imgCaption;function createFancybox()
{$('.wp-block-gallery').each(function(index,el){var galID="gallery"+index;var numItems=$(el).find('li').length;for(var i=0;i<numItems;i++){eleToWrap=$(this).find('li:eq('+i+') figure img');imgFullUrl=$(this).find('li:eq('+i+') figure img').attr('src');imgCaption=$(this).find('li:eq('+i+') figure figcaption').html();if(imgCaption!=undefined){eleToWrap.wrap('<a href="'+imgFullUrl+'" data-fancybox="'+galID+'" data-caption="'+imgCaption+'"></a>');}else{eleToWrap.wrap('<a href="'+imgFullUrl+'" data-fancybox="'+galID+'"></a>');}}
$('[data-fancybox]').fancybox({protect:true,loop:true,arrows:true,infobar:false,toolbar:true,hideScrollbar:true,buttons:["close"],});});}
$(function(){stickMenu();menuSublevels();$('.hamburger').on('click',function(event){event.preventDefault();openCloseMenu('menu');});$('.loupe').on('click',function(event){event.preventDefault();openCloseMenu('search');});if($('body').hasClass('home')){createMenuScrooling();}
if($('#areas-de-atuacao .area-item').length>0){createSwiperAtuacao();}
if($('#materiais .swiper-slide').length>0){createSwiperMateriais();}
if($('.box-noticias').length>0){createMansory();}
$('.lazy').Lazy({effect:'fadeIn',visibleOnly:false,onError:function(element){console.log('error loading '+element.data('src'));},afterLoad:function(element){updateMasonry();},onFinishedAll:function(){updateMasonry();}});if($('aside input[type="search"]').length>0){createLoupe();}
if($('.blocks-gallery-item').length>0){createFancybox();}
if($('#leadform').length>0){var ebookTitle=$(".cover-titles h1").text();$('#leadform .ebooktitle').val(ebookTitle);var ebookFile=$(".donwload-form").attr("data-file");$('#leadform .ebookfile').val(ebookFile);$("#leadform").submit(function(event){var ebookfile=$(".donwload-form").attr("data-file");var ebooktitle=$(".cover-titles h2").text();forceDownload(ebookfile,ebooktitle);});}
if($('.single-atuacao').length>0&&$(".cover-titles h1").text()!="Áreas de atuação"){var tit_page=$(".cover-titles h1").text();$(".tit-area-atuacao span").text(tit_page);}else{var tit_page="Fale com um de nossos especialistas";$(".tit-area-atuacao").html(tit_page);}});$(window).on('load',function(e){});(function(){var Config={Link:"a.share",Width:500,Height:500};var slink=document.querySelectorAll(Config.Link);for(var a=0;a<slink.length;a++){slink[a].onclick=PopupHandler;}
function PopupHandler(e){e=(e?e:window.event);var t=(e.target?e.target:e.srcElement);var
px=Math.floor(((screen.availWidth||1024)-Config.Width)/2),py=Math.floor(((screen.availHeight||700)-Config.Height)/2);var popup=window.open(t.href,"social","width="+Config.Width+",height="+Config.Height+",left="+px+",top="+py+",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");if(popup){popup.focus();if(e.preventDefault)e.preventDefault();e.returnValue=false;}
return!!popup;}}());document.addEventListener('DOMContentLoaded',function(){function isWeekday(date){const day=date.getDay();return day!==0&&day!==6;}
function addWorkingDay(date){let daysToAdd=1;while(daysToAdd>0){date.setDate(date.getDate()+1);if(isWeekday(date)){daysToAdd--;}}
return date;}
function formatDate(date){const year=date.getFullYear();const month=('0'+(date.getMonth()+1)).slice(-2);const day=('0'+date.getDate()).slice(-2);return`${year}-${month}-${day}`;}
function setMinDate(){const today=new Date();const minDate=addWorkingDay(today);const minDateStr=formatDate(minDate);if(document.getElementById('agendamento')){const dateField=document.getElementById('agendamento');dateField.setAttribute('min',minDateStr);}}});