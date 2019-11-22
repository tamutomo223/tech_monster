$(function() {
  
  // モンスターの鳴き声
  if(document.URL.match(/battles\/\d/)) {
    setTimeout(function() {
      $('#cry')[0].play();
    }, 2000);
  };

  // たたかうアクション
  function attack() {
    $('#punch').currentTime = 0;
    $('#punch')[0].play();

    enemyName = $('#enemy_name').val();
    enemyStatus = $('.enemy');
    hpCount = $('#enemy_hp').val();
    enemyHp = $('.enemy__hp');
    if(enemyStatus.hasClass('down')) {
      window.location.href = "/";
    } else if(enemyHp.hasClass('dying')) {
      $('.enemy').empty();
      $('.enemy').addClass('down');
      $('.enemy').append(`${enemyName} を たおした!`);
    } else if(parseInt(hpCount) <= 10) {
      enemyHp.addClass('dying');
    };

    hpCount -= 10;
    if(enemyHp.hasClass('dying')) {
      enemyHp.text('ひんし じょうたい だ！');
    } else {
      enemyHp.text(`HP : ${hpCount}`);
    };

    $('#enemy_hp').val(hpCount);
  }


  $('html').keydown(function(e){
    switch(e.which){
      case 40: // Key[↓]
        parent = $('.fa-caret-right').parent();

        if( parent.attr("id") !== "escape") {
          $('#cursor')[0].currentTime = 0;
          $('#cursor')[0].play();
          parent.next().prepend('<i class="fas fa-caret-right"></i>');
          parent.find('.fa-caret-right').remove();
        };
      break;

      case 38: // Key[↓]
        parent = $('.fa-caret-right').parent();
        
        if( parent.attr("id") !== "attack") {
          $('#cursor')[0].currentTime = 0;
          parent.prev().prepend('<i class="fas fa-caret-right"></i>');
          parent.find('.fa-caret-right').remove();
        };
      break;

      case 13:
        parent = $('.fa-caret-right').parent();

        if( parent.attr("id") === "attack") {
          attack();
        } else if( parent.attr("id") === "escape" ) {
          window.location.href = "/";
        }
      break;
    }
  });


});