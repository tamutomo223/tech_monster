function left_water(){
  $("html").on("keyup",function(e){
    if(e.keyCode == 65) {
      $('.icon').animate({left: '-=25px'},100);
    }
   });
}