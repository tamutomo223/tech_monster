function block() {
  arr = [-1001,-1000,-999,-998,3998]
  for (var arr1 = -25; arr1 <= -22 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = -7; arr1 <= -2 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 3; arr1 <= 14 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 975; arr1 <= 978 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 993; arr1 <= 998 ; arr1++) {
    arr.unshift(arr1)
  }
  for (var arr1 = 1003; arr1 <= 1014 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 2013; arr1 <= 29013 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  for (var arr1 = 1976; arr1 <= 28976 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  for (var arr1 = 27977; arr1 <= 28012 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 17979; arr1 <= 17988 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 18988; arr1 <= 26988 ; arr1+= 1000) {
    arr.unshift(arr1)
  }

  for (var arr1 = 16999; arr1 <= 17002 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 15999; arr1 <= 16002 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 14999; arr1 <= 15002 ; arr1++) {
    arr.unshift(arr1)
  }

  for (var arr1 = 13999; arr1 <= 14002 ; arr1++) {
    arr.unshift(arr1)
  }

  return arr;
}

function water_left(){
  arr_left_water = [-18,982]
  for (var arr1 = 992; arr1 <= 10992 ; arr1+=1000) {
    arr_left_water.unshift(arr1)
  }

  return arr_left_water;
}

function water_right(){
  arr_right_water = [-18,989]
  for (var arr1 = 1979; arr1 <= 10979 ; arr1+=1000) {
    arr_right_water.unshift(arr1)
  }

  return arr_right_water;
}

function water_top(){
  arr_top_water = []
  for (var arr1 = 1983; arr1 <= 1988 ; arr1++) {
    arr_top_water.unshift(arr1)
  }

  return arr_top_water;
}

function water_down(){
  arr_down_water = []
  for (var arr1 = 10979; arr1 <= 10992 ; arr1++) {
    arr_down_water.unshift(arr1)
  }

  return arr_down_water;
}