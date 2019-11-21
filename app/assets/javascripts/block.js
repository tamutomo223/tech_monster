function block() {
  arr = [2997,6003,6005,6006,18987]

  //入り口下
  for (var arr1 = -1001; arr1 <= -998 ; arr1++) {
    arr.unshift(arr1)
  }

  //海内陸
  for (var arr1 = 975; arr1 <= 978 ; arr1++) {
    arr.unshift(arr1)
  }

  //入り口左下木
  for (var arr1 = -9; arr1 <=-2; arr1++) {
    arr.unshift(arr1)
  }
  //入り口右下木
  for (var arr1 = 3; arr1 <= 14 ; arr1++) {
    arr.unshift(arr1)
  }

  //海左木
  for (var arr1 = 973; arr1 <= 976 ; arr1++) {
    arr.unshift(arr1)
  }

  //入り口左上木
  for (var arr1 = 991; arr1 <= 998 ; arr1++) {
    arr.unshift(arr1)
  }

  //入り口右上木
  for (var arr1 = 1003; arr1 <= 1014 ; arr1++) {
    arr.unshift(arr1)
  }

  //右木縦軸
  for (var arr1 = 2011; arr1 <= 29011 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  //左木縦軸
  for (var arr1 = 1974; arr1 <= 28974 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  //上木横軸
  for (var arr1 = 27975; arr1 <= 28010 ; arr1++) {
    arr.unshift(arr1)
  }

  //右上岩横軸
  for (var arr1 = 17977; arr1 <= 17986 ; arr1++) {
    arr.unshift(arr1)
  }
  //左上岩縦軸
  for (var arr1 = 18986; arr1 <= 26986 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  //家
  for (var arr1 = 8995; arr1 <= 8998 ; arr1++) {
    arr.unshift(arr1)
  }

  //家
  for (var arr1 = 7995; arr1 <= 7998 ; arr1++) {
    arr.unshift(arr1)
  }

  //家
  for (var arr1 = 6995; arr1 <= 6998 ; arr1++) {
    arr.unshift(arr1)
  }

  //家
  for (var arr1 = 5995; arr1 <= 5998 ; arr1++) {
    arr.unshift(arr1)
  }

  //ポケセン
  for (var arr1 = 9003; arr1 <= 9006 ; arr1++) {
    arr.unshift(arr1)
  }

  //ポケセン
  for (var arr1 = 8003; arr1 <= 8006 ; arr1++) {
    arr.unshift(arr1)
  }

  //ポケセン
  for (var arr1 = 7003; arr1 <= 7006 ; arr1++) {
    arr.unshift(arr1)
  }



  //柵左
  for (var arr1 = 1993; arr1 <= 10993 ; arr1+=1000) {
    arr.unshift(arr1)
  }

  //柵左
  for (var arr1 = 2008; arr1 <= 11008 ; arr1+=1000) {
    arr.unshift(arr1)
  }

  //柵上
  for (var arr1 = 10993; arr1 <= 10998 ; arr1++) {
    arr.unshift(arr1)
  }

  //柵上
  for (var arr1 = 11003; arr1 <= 11008 ; arr1++) {
    arr.unshift(arr1)
  }

  //右上草むら囲い縦軸
  for (var arr1 = 15993; arr1 <= 26993 ; arr1+=1000) {
    arr.unshift(arr1)
  }

  //右上草むら囲い縦軸
  for (var arr1 = 15994; arr1 <= 26994 ; arr1+=1000) {
    arr.unshift(arr1)
  }

  //右上草むら囲い横軸
  for (var arr1 = 16995; arr1 <= 17008 ; arr1++) {
    arr.unshift(arr1)
  }

  //右上草むら囲い横軸
  for (var arr1 = 15995; arr1 <= 16008 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 23987; arr1 <= 23991 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 19989; arr1 <= 19992 ; arr1++) {
    arr.unshift(arr1)
  }



  return arr;
}

function water_left(){
  arr_left_water = [-119,983]
  for (var arr1 = 990; arr1 <= 10990 ; arr1+=1000) {
    arr_left_water.unshift(arr1)
  }

  return arr_left_water;
}

function water_right(){
  arr_right_water = [-18,989]
  for (var arr1 = 1977; arr1 <= 10977 ; arr1+=1000) {
    arr_right_water.unshift(arr1)
  }

  return arr_right_water;
}

function water_top(){
  arr_top_water = []
  for (var arr1 = 1981; arr1 <= 1986 ; arr1++) {
    arr_top_water.unshift(arr1)
  }

  return arr_top_water;
}

function water_down(){
  arr_down_water = []
  for (var arr1 = 10977; arr1 <= 10990 ; arr1++) {
    arr_down_water.unshift(arr1)
  }

  return arr_down_water;
}