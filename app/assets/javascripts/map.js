$(function() {
  $("html").keyup(function(e){
    console.log("ye")
    switch(e.which){
        case 39: // Key[→]
        $('.icon').animate({left: '+=25px'},100);
        break;

        case 37: // Key[←]
        $('.icon').animate({left: '-=25px'},100);
        break;

        case 38: // Key[↑]
        $('.icon').animate({top: '-=25px'},100);
        break;

        case 40: // Key[↓]
        $('.icon').animate({top: '+=25px'},100);
        break;
    }
  });
  function buildHTML(i) {
    let html = `<div class="squares id= "${i}"></div>`
    $('.wrapper').append(html)
  }
  for (var i = 0; i < 320 ; i++) {
    buildHTML(i)
    
}
});