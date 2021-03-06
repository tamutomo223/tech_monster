# このアプリについて

## PocketQuestとは
POCKET QUESTとは、みんな大好きポケモンと、ドラクエを組み合わせたRPGです。
草むらでモンスターと遭遇し、戦うことができます。

## 概要
  アプリ名：POCKET QUEST
  
  使用言語：Ruby on Rails、JavaScript
  
  主な機能：キー操作移動、ランダムエンカウント、モンスター選択、バトル機能、ガチャ機能、BGM
  
  作業人数：2人
  
  作業日数：10日間


## 共同開発のきっかけ
  個人アプリの開発がある程度終わり、チーム開発スタートまでの期間が空いていたので、共同開発の経験を積んでおくことで、チーム開発にお互い生かせるのではないかと考えた

## 作業メンバー
  ### 田村友哉(たむらともや)
  <https://github.com/tamutomo223>

  ### ユウマ
  <https://github.com/yuma11>


## 主な機能

### ・移動機能(担当：田村)

    上下左右への主人公の移動が可能。移動するたびに、主人公にIDが付与され、それにより位置情報を把握する。
    座標をもとに、進める場所を制限したり、建物に入ったり、波乗り状態になったりする。

<img width="200" alt="スクリーンショット 2019-12-02 14 38 27" src="https://user-images.githubusercontent.com/57092560/71317990-7fd85100-24cd-11ea-9f33-707c0bb4013c.png"><img width="200" alt="スクリーンショット 2019-12-02 14 38 33" src="https://user-images.githubusercontent.com/57092560/71317991-7fd85100-24cd-11ea-8234-fe6a05ce3d6f.png">

### ・戦闘モンスター選択機能(担当：田村)

    獲得したモンスターの中から、好きなモンスターを選択し、バトルで使うことができる。

<img width="300" alt="スクリーンショット 2019-12-02 14 40 06" src="https://user-images.githubusercontent.com/57092560/71317993-8070e780-24cd-11ea-8be4-5d0ec391c86c.png">




### ・ランダムエンカウント機能(担当：田村)

    主人公の座標と草むらの座標が一致する場合、ランダムでモンスターに遭遇し、バトルページへとリンクする。草むらによって登場モンスターも変わる。

<img width="300" src = "https://user-images.githubusercontent.com/57092560/71320404-161c6f00-24ee-11ea-8fd5-5f2bd01e6949.png">



### ・ガチャ機能(担当：ユウマ)

    ポケモンセンターに入るとガチャを回すことができ、すべてのモンスターの中から、ランダムで１体のモンスターを獲得できる。

<img width="300" alt="スクリーンショット 2019-12-02 14 39 38" src="https://user-images.githubusercontent.com/57092560/71317992-8070e780-24cd-11ea-867b-cc09f71839d7.png">    

### ・バトル機能(担当：ユウマ)

    バトルページに推移すると、その草むらに割り当てられたモンスターからランダムで一体が登場する。
    自分の戦闘用モンスターを使い、交互に攻撃を行い、HPが０になるとマップに戻る。

<img width="300" alt="スクリーンショット 2019-12-02 14 37 27" src="https://user-images.githubusercontent.com/57092560/71317989-7fd85100-24cd-11ea-98f8-fb377d3e548e.png">


## 工夫して実装した機能(田村)
### ・読み込み時にマス目の生成
マス目をhamlを使って作るのはとても大変だと考え、
jsを使って、ページが読み込みされる時に、マス目を生成する形にした。


```map.js

function buildHTML(i) {
  let html = `<div id="${i}" class="squares"></div>`
  $('.wrapper').append(html)
}
for (var i = 10000; i < 10300 ; i++) {
  buildHTML(i)
}
```

### ・localStorageの利用
ページを推移しても、同じ座標に主人公が戻って来れるように、localstrageを活用した。

```map.js
lefts = $(".icon").css("left");
tops = $(".icon").css("top");
localStorage.top = tops;
localStorage.left = lefts;

```


## 工夫して実装した機能(ユウマ)