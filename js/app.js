
$(document).ready(function(){
   $("nav").mouseover(function(){
      $("nav").addClass("menu-scroll",1000);
   });
   $("nav").mouseout(function(){
      $("nav").removeClass("menu-scroll",1000);
   });

$("body").onscroll(function(){
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
       $("nav").addClass("menu-scroll",3000);
    }else {
		 $("nav").removeClass("menu-scroll",3000);
	}	
	
	
});


	
	});