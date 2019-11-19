$(function() {
  $("html").keyup(function(e){
    switch(e.which){
        case 39: // Key[→]
        $('.icon').animate({left: '+=50px'},100);
        iia = $(".icon").attr('id')
        let iiia = Number(iia) + 1
        $(".icon").attr("id",iiia)
        break;

        case 37: // Key[←]
        $('.icon').animate({left: '-=50px'},100);
        iib = $(".icon").attr('id')
        let iiib = Number(iib) - 1
        $(".icon").attr("id",iiib)    
        break;

        case 38: // Key[↑]
        $('.icon').animate({top: '-=50px'},100);
        iic = $(".icon").attr('id')
        let iiic = Number(iic) - 20
        $(".icon").attr("id",iiic)        
        break;

        case 40: // Key[↓]
        $('.icon').animate({top: '+=50px'},100);
        iid = $(".icon").attr('id')
        let iiid = Number(iid) + 20
        $(".icon").attr("id",iiid)        
        break;
    }
  });
  function buildHTML(i) {
    let html = `<div id = "${i}" class="squares"></div>`
    $('.wrapper').append(html)
  }
  for (var i = 0; i < 300 ; i++) {
    buildHTML(i)
}
});