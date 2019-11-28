function add_enemy() {
  add_red1()

  function move_window(){
    attr = $(".icon").attr('id');
    attrs = Number(attr)
    glass_1()
    glass_2()
    water_1()
    lefts = $(".icon").css("left");
    tops = $(".icon").css("top");
    localStorage.top = tops;
    localStorage.left = lefts;
    localStorage.id = attrs;
    if(glass1_ids.indexOf(attrs) != -1){
      window.location.href = "/battles/1"
    }else if(glass2_ids.indexOf(attrs) != -1) {
      window.location.href = "/battles/2"
    }else if(water1_ids.indexOf(attrs) != -1){
      window.location.href = "/battles/3"
    }
  }

  function add_class(){
    $('.clear').addClass('page');
    setTimeout(move_window,2000);
  }

  function remove_red1(){
    $('.clear').removeClass('red');
    setTimeout(add_red2,200);
  }

  function add_red1(){
    $('.clear').addClass('red');
    setTimeout(remove_red1,200);
  }

  function remove_red2(){
    $('.clear').removeClass('red');
    setTimeout(add_red3,200);
  }

  function add_red2(){
    $('.clear').addClass('red');
    setTimeout(remove_red2,200);
  }

  function remove_red3(){
    $('.clear').removeClass('red');
    setTimeout(add_red4,200);
  }

  function add_red3(){
    $('.clear').addClass('red');
    setTimeout(remove_red3,200);
  }

  function remove_red4(){
    $('.clear').removeClass('red');
    setTimeout(add_red5,200);
  }

  function add_red4(){
    $('.clear').addClass('red');
    setTimeout(remove_red4,200);
  }

  function remove_red5(){
    $('.clear').removeClass('red');
    setTimeout(add_class,200);
  }

  function add_red5(){
    $('.clear').addClass('red');
    setTimeout(remove_red5,200);
  }
}