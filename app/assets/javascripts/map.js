$(function() {

  function encount(i) {
    //現在のidを確認
    attr = $(".icon").attr('id')
    //idをプラスする(引数iはそれぞれに合わせて)
    let move = Number(attr) + Number(i)
    //プラスしたものを適用する
    $(".icon").attr("id",move)
    //再度idを取得する
    let glass_place = $(".icon").attr("id")
    //左上の草むらの座標を配列にするメソッド呼び出し
    glass_1()
    //48分の1の確立を12分の1に変える
    let random = Math.floor( Math.random() * glass1_ids.length );
    let random2 = Math.floor( Math.random() * glass1_ids.length );
    let random3 = Math.floor( Math.random() * glass1_ids.length );

    glass_2()
    let random4 = Math.floor( Math.random() * glass2_ids.length );
    let random5 = Math.floor( Math.random() * glass2_ids.length );
    let random6 = Math.floor( Math.random() * glass2_ids.length );
    let random7 = Math.floor( Math.random() * glass2_ids.length );


    //ランダムで取得したものに当てはまれば移動
    if(glass_place == glass1_ids[random] ||glass_place == glass1_ids[random2] || glass_place == glass1_ids[random3] ||
      glass_place == glass2_ids[random4] || glass_place == glass2_ids[random5] ||glass_place == glass2_ids[random6] ||glass_place == glass2_ids[random7]){
      window.location.href = "battles/1"
    }
  }

  

  //キーが押された時の処理
  $("html").keyup(function(e){
    switch(e.which){
        //右キーが押された時
        case 39:
          $('.right').addClass('active');
          $('.top').removeClass('active');
          $('.left').removeClass('active');
          $('.bottom').removeClass('active');
          $('.rapu_right').removeClass('active');
          $('.rapu_top').removeClass('active');
          $('.rapu_left').removeClass('active');
          $('.rapu_bottom').removeClass('active');
        //現在のアイコンのidを取得  
          attr = $(".icon").attr('id')
        //そのidに１をプラスする(右に行くので)  
          goal = Number(attr) + 1
        //arrという、進めないブロックをまとめた配列にその数字が当てはまるか
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          }  else if(arrw.indexOf(goal) != -1){
            $('.icon').animate({left: '+=25px'},200);
            encount(1)
            $('.right').removeClass('active');
            $('.top').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            $('.rapu_right').addClass('active');
            $('.rapu_top').removeClass('active');
            $('.rapu_left').removeClass('active');
            $('.rapu_bottom').removeClass('active');
          }else {
        //当てはまらなければ右に２５ピクセル動き                       
            $('.icon').animate({left: '+=25px'},200);
        //エンカウント関数を呼び出す(上記)
            encount(1)
          }
        break;

        case 37:
          $('.left').addClass('active');
          $('.top').removeClass('active');
          $('.right').removeClass('active');
          $('.bottom').removeClass('active');
          $('.rapu_right').removeClass('active');
          $('.rapu_top').removeClass('active');
          $('.rapu_left').removeClass('active');
          $('.rapu_bottom').removeClass('active');
          attr = $(".icon").attr('id')
          goal = Number(attr) - 1
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          } else if(arrw.indexOf(goal) != -1) {
            $('.icon').animate({left: '-=25px'},200);
            encount(-1)
            $('.right').removeClass('active');
            $('.top').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            $('.rapu_right').removeClass('active');
            $('.rapu_top').removeClass('active');
            $('.rapu_left').addClass('active');
            $('.rapu_bottom').removeClass('active');
          }else {
            
            $('.icon').animate({left: '-=25px'},200);
            encount(-1)
          }
        break;

        case 38:
          $('.top').addClass('active');
          $('.right').removeClass('active');
          $('.left').removeClass('active');
          $('.bottom').removeClass('active');
          $('.rapu_right').removeClass('active');
          $('.rapu_top').removeClass('active');
          $('.rapu_left').removeClass('active');
          $('.rapu_bottom').removeClass('active');
          attr = $(".icon").attr('id')
          goal = Number(attr) + 1000
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          }else if(arrw.indexOf(goal) != -1) {
            $('.icon').animate({top: '-=25px'},200);
            encount(1000)
            $('.right').removeClass('active');
            $('.top').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            $('.rapu_right').removeClass('active');
            $('.rapu_top').addClass('active');
            $('.rapu_left').removeClass('active');
            $('.rapu_bottom').removeClass('active');
          }            
          else {            
            $('.icon').animate({top: '-=25px'},200);
            encount(1000)
          }
        break;
 
        case 40:
          $('.bottom').addClass('active');
          $('.top').removeClass('active');
          $('.left').removeClass('active');
          $('.right').removeClass('active');
          $('.rapu_right').removeClass('active');
          $('.rapu_top').removeClass('active');
          $('.rapu_left').removeClass('active');
          $('.rapu_bottom').removeClass('active');
          attr = $(".icon").attr('id')
          goal = Number(attr) - 1000
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          } else if(arrw.indexOf(goal) != -1) {
            $('.icon').animate({top: '+=25px'},200);
            encount(-1000)
            $('.right').removeClass('active');
            $('.top').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            $('.rapu_right').removeClass('active');
            $('.rapu_top').removeClass('active');
            $('.rapu_left').removeClass('active');
            $('.rapu_bottom').addClass('active');
          }else {  
            $('.icon').animate({top: '+=25px'},200);
            encount(-1000)
          }
        break;
        
        case 68:
            $('.right').addClass('active');
            $('.top').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            attr = $(".icon").attr('id')
            goal = Number(attr) + 2
            $('.icon').animate({left: '+=50px'},1000);
            encount(2)
        break;

        case 65:
            $('.left').addClass('active');
            $('.top').removeClass('active');
            $('.right').removeClass('active');
            $('.bottom').removeClass('active');
            attr = $(".icon").attr('id')
            goal = Number(attr) - 2
            $('.icon').animate({left: '-=50px'},1000);
            encount(-2)
        break;

        case 87:
            $('.top').addClass('active');
            $('.right').removeClass('active');
            $('.left').removeClass('active');
            $('.bottom').removeClass('active');
            attr = $(".icon").attr('id')
            goal = Number(attr) + 2000
            $('.icon').animate({top: '-=50px'},1000);
            encount(2000)
        break;

        case 83:
            $('.bottom').addClass('active');
            $('.right').removeClass('active');
            $('.left').removeClass('active');
            $('.top').removeClass('active');
            attr = $(".icon").attr('id')
            goal = Number(attr) - 2000
            $('.icon').animate({top: '+=50px'},1000);
            encount(-2000)
        break;

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
});


