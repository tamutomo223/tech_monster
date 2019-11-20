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
    //右上の草むらの座標を配列にし
    let glass_ids = [18979,18980,18981,18982,18983,18984,18985,18986,19979,19980,19981,19982,19983,19984,19985,19986,
                    20977,20978,20979,20980,20981,20982,20983,20984,20985,20986,21977,21978,21979,21980,21981,21982,21983,21984,21985,21986,
                    22981,22982,22983,22984,22985,22986,23981,23982,23983,23984,23985,23986]
    //48分の1の確立を12分の1に変える
    let random = Math.floor( Math.random() * glass_ids.length );
    let random2 = Math.floor( Math.random() * glass_ids.length );
    let random3 = Math.floor( Math.random() * glass_ids.length );
    //ランダムで取得したものに当てはまれば移動
    if(glass_place == glass_ids[random] ||glass_place == glass_ids[random2] || glass_place == glass_ids[random3]){
      window.location.href = "battles/1"
    }
  }

  //キーが押された時の処理
  $("html").keyup(function(e){
    switch(e.which){
        //右キーが押された時
        case 39:
        //現在のアイコンのidを取得  
          attr = $(".icon").attr('id')
        //そのidに１をプラスする(右に行くので)  
          goal = Number(attr) + 1
        //arrという、進めないブロックをまとめた配列にその数字が当てはまるか
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          } else if (arr_right_water.indexOf(goal) != -1){
            
          } else {
        //当てはまらなければ右に２５ピクセル動き    
            $('.icon').animate({left: '+=25px'},100);
        //エンカウント関数を呼び出す(上記)
            encount(1)
          }
        break;

        case 37:
          attr = $(".icon").attr('id')
          goal = Number(attr) - 1
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          }else if (arr_left_water.indexOf(goal) != -1){
            
          } else {
            $('.icon').animate({left: '-=25px'},100);
            encount(-1)
          }
        break;

        case 38:
          attr = $(".icon").attr('id')
          goal = Number(attr) + 1000
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          }else if (arr_top_water.indexOf(goal) != -1){
            
          }else {
            $('.icon').animate({top: '-=25px'},100);
            encount(1000)
          }
        break;
 
        case 40:
          attr = $(".icon").attr('id')
          goal = Number(attr) - 1000
          if(arr.indexOf(goal) != -1){
            console.log("いけないよ")
          }else if (arr_down_water.indexOf(goal) != -1){
          
          }else {
            $('.icon').animate({top: '+=25px'},100);
            encount(-1000)
          }
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


  //block.jsの内容を呼び出しarrという配列を受け取る
  block()
  water_right()
  water_left()
  water_top()
  water_down()
});