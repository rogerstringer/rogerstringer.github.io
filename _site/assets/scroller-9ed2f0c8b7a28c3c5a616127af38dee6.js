$("document").ready(function(){labels.forEach(function(label){$("#"+label+"-click").click(function(){$("html, body").animate({scrollTop:$("#"+label).offset().top},1000);$('[data-spy="scroll"]').each(function(){var $spy=$(this).scrollspy("refresh")})});$(".to-"+label).click(function(){$("html, body").animate({scrollTop:$("#"+label).offset().top-$(".navbar").height()-2},1000);$('[data-spy="scroll"]').each(function(){var $spy=$(this).scrollspy("refresh")})})});var sideResize=function(){$(".sidebar").width($(".sidebar").parent().width())};sideResize();$(window).resize(function(){sideResize()});$("table").addClass("table table-striped table-bordered")});