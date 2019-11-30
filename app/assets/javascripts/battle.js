$(function() {

  // モンスターの鳴き声
  if(document.URL.match(/battles\/\d/)) {
    setTimeout(function() {
      $('#cry')[0].play();
    }, 2000);
  };

  // たたかうアクション
  let battle = $('#battle');
  let escape = $('#escape');
  let attack = $('#attack');
  let deffens = $('#deffens');

  let enemy = $('.enemy');
  let enemyHp = $('.enemy__hp');
  let enemyName = $('#enemy_name').val();
  let enemyHpCount = $('#enemy_hp').val();
  let enemyAttackCount = $('#enemy_attack').val();

  let player = $('.player__status');
  let playerHp = $('.player__status--hp');
  let playerName = $('#my_monster_name').val();
  let playerHpCount = $('#my_monster_hp').val();
  let playerAttackCount = $('#my_monster_attack').val();


  let command1 = $('.player__command');
  let command2 = $('.player__command2');
  let playerAttack = $('.player__attack');
  let enemyAttack = $('.enemy__attack');


  //------------------------------------- 敵へ攻撃 -------------------------------------//
  function attackPlayer() {
    $('#punch').currentTime = 0;
    $('#punch')[0].play();

    if(enemy.hasClass('down')) {
      window.location.href = "/maps/index";
    } else if(enemyHp.hasClass('dying')) {
      enemy.empty();
      enemy.addClass('down');
      enemy.append(`${enemyName} を たおした!`);
      $('.enemy-img').slideUp(1000);
      setTimeout(function() {
        window.location.href = "/maps/index";
      },2000);
    } else if(parseInt(enemyHpCount) <= 100) {
      enemyHp.addClass('dying');
    };

    enemyHpCount -= playerAttackCount;
    if(enemyHp.hasClass('dying')) {
      enemyHp.text('ひんし じょうたい だ！');
    } else {
      enemyHp.text(`HP : ${enemyHpCount}`);
    };

    $('#enemy_hp').val(enemyHpCount);
  }




  //------------------------------------- 敵からの攻撃 -------------------------------------//
  function attackEnemy() {
    $('#punch').currentTime = 0;
    $('#punch')[0].play();

    if(player.hasClass('down')) {
      window.location.href = "/maps/index";
    } else if(playerHp.hasClass('dying')) {
      player.empty();
      player.addClass('down');
      player.append(`${playerName} は たおされた...`);
      setTimeout(function() {
        window.location.href = "/maps/index";
      },2000);
    } else if(parseInt(playerHpCount) <= 100) {
      playerHp.addClass('dying');
    };

    playerHpCount -= enemyAttackCount;
    if(playerHp.hasClass('dying')) {
      playerHp.text('ひんし じょうたい だ！');
    } else {
      playerHp.text(`HP : ${playerHpCount}`);
    };

    playerHp.text(`HP : ${playerHpCount}`);
  }



  $(document).on('keyup', 'html', function(e) {
    switch(e.which){
      case 40: // Key[↓]
        parent = $('.fa-caret-right').parent();

        if( parent.attr("id") != "escape" && parent.attr("id") != "back" && parent.attr("id") != "playerAttack" ) {
          $('#cursor')[0].currentTime = 0;
          $('#cursor')[0].play();
          parent.find('.fa-caret-right').remove();
          parent.next().prepend('<i class="fas fa-caret-right"></i>');
        };

      break;

      case 38: // Key[↑]
        parent = $('.fa-caret-right').parent();

        if( parent.attr("id") != "battle" && parent.attr("id") != "attack" && parent.attr("id") != "playerAttack" ) {
          $('#cursor')[0].currentTime = 0;
          parent.prev().prepend('<i class="fas fa-caret-right"></i>');
          parent.find('.fa-caret-right').remove();
        };
      break;

      case 13: // EnterKey
        parent = $('.fa-caret-right').parent();

        if( parent.attr("id") == "battle" ) {
          parent.find('.fa-caret-right').remove();
          command1.hide();
          command2.show();
          attack.prepend('<i class="fas fa-caret-right"></i>');

        } else if ( parent.attr("id") == "attack" ) {
          attackPlayer();
          parent.find('.fa-caret-right').remove();
          command2.hide();
          playerAttack.show();
          playerAttack.find('.give-attack-count').prepend('<i class="fas fa-caret-right"></i>');

        } else if ( parent.attr("id") == "playerAttack" ) {
          attackEnemy();
          parent.find('.fa-caret-right').remove();
          playerAttack.hide();
          enemyAttack.show();
          enemyAttack.find('.eat-attack-count').prepend('<i class="fas fa-caret-right"></i>');

        } else if ( parent.attr("id") == "enemyAttack" ) {
          parent.find('.fa-caret-right').remove();
          enemyAttack.hide();
          command1.show();
          battle.prepend('<i class="fas fa-caret-right"></i>');

        } else if( parent.attr("id") === "escape" ) {
          window.location.href = "/maps/index";

        } else if( parent.attr("id") === "back" ) {
          parent.find('.fa-caret-right').remove();
          command2.hide();
          command1.show();
          battle.prepend('<i class="fas fa-caret-right"></i>');
        }

      break;
    }
  });


});