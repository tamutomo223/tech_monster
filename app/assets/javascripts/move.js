function poke (){
  window.location.href = "/get"
}

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
      add_enemy()        
  }
}

function move(a, b ,c ,d){

  $('.right').removeClass('active');
  $('.top').removeClass('active');
  $('.left').removeClass('active');
  $('.bottom').removeClass('active');
  $('.rapu_right').removeClass('active');
  $('.rapu_top').removeClass('active');
  $('.rapu_left').removeClass('active');
  $('.rapu_bottom').removeClass('active');
  $(a).addClass('active');
  //現在のアイコンのidを取得  
  attr = $(".icon").attr('id')
  //そのidに１をプラスする(右に行くので)  
  goal = Number(attr) + c
  //arrという、進めないブロックをまとめた配列にその数字が当てはまるか
  if(arr.indexOf(goal) != -1){
  console.log("いけないよ")
  }  else if(arrw.indexOf(goal) != -1){
  $('.icon').animate(d,200);
  encount(c)
  $('.right').removeClass('active');
  $('.top').removeClass('active');
  $('.left').removeClass('active');
  $('.bottom').removeClass('active');
  $('.rapu_right').removeClass('active');
  $('.rapu_top').removeClass('active');
  $('.rapu_left').removeClass('active');
  $('.rapu_bottom').removeClass('active');
  $(b).addClass('active');
  } else if(goal == 6004) {
    $('.icon').animate(d,200);
    setTimeout(poke,400);
  } else {
  //当てはまらなければ右に２５ピクセル動き                       
  $('.icon').animate(d,200);
  //エンカウント関数を呼び出す(上記)
  encount(c)
  }
}

function fast_move(a, b ,c){
  $('.top').removeClass('active');
  $('.right').removeClass('active');
  $('.bottom').removeClass('active');
  $('.left').removeClass('active');
  $(a).addClass('active');
  attr = $(".icon").attr('id')
  goal = Number(attr) + b
  $('.icon').animate(c,50);
  encount(b)
}