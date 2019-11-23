window.onload = function(){
  // ページ読み込み時に実行したい処理

  
    //キーが押された時の処理
    $("html").keyup(function(e){
      switch(e.which){
          //右キーが押された時
          case 39:
            move(".right",".rapu_right",1,{left: '+=25px'})
          break;

          case 37:
            move(".left",".rapu_left",-1,{left: '-=25px'})
          break;

          case 38:
            move(".top",".rapu_top",1000,{top: '-=25px'})
          break;
  
          case 40:
            move(".bottom",".rapu_bottom",-1000,{top: '+=25px'})
          break;
          
          case 68:
            fast_move(".right",2,{left: '+=50px'})
          break;

          case 65:
            fast_move(".left",-2,{left: '-=50px'})
          break;

          case 87:
            fast_move(".top",2000,{top: '-=50px'})
          break;

          case 83:
            fast_move(".bottom",-2000,{top: '+=50px'})
          break;

          case 80:
            window.location.href = "monsters"
          break;

          case 78:
            window.location.href = "/users/sign_up"
          break;

          case 76:
            window.location.href = "/users/sign_in"
          break;

          case 84:
            window.location.href = "/"
      }
    });

    //マス目の作成
    function buildHTML(i) {
      let html = `<div id="${i}" class="squares"></div>`
      $('.wrapper').append(html)
    }
    for (var i = 10000; i < 10300 ; i++) {
      buildHTML(i)
    }

    $("#10000").attr("id","100000");
    $("#10001").attr("id","100001");
    $("#10002").attr("id","100002");
    $("#10003").attr("id","100003");
    $("#10004").attr("id","100004");
    $("#10005").attr("id","100005");
    $("#10006").attr("id","100006");
    $("#10007").attr("id","100007");
    $("#10008").attr("id","100008");
    $("#10009").attr("id","100009");
    $("#10010").attr("id","100010");


    //block.jsの内容を呼び出しarrという配列を受け取る
    block()
    water()

    //BGMの操作
    $('.fa-volume-up').hide();

    $('.fa-volume-up').click(function() {
      $(this).hide();
      $('.fa-volume-mute').show();
      $('audio')[0].pause();
    });

    $('.fa-volume-mute').click(function() {
      $(this).hide();
      $('.fa-volume-up').show();
      $('audio')[0].play();
    });
  }


