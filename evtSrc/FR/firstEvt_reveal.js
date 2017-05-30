  // var global
var pk_un = document.querySelector('.pck1'),
    title_un = document.querySelector('.title-pck1'),
    sub1_un = document.querySelector('.sub1-pck1'),
    sub2_un = document.querySelector('.sub2-pck1'),
    sub3_un = document.querySelector('.sub3-pck1');
var pk_deux = document.querySelector('.pck2'),
    title_deux = document.querySelector('.title-pck2'),
    sub1_deux = document.querySelector('.sub1-pck2'),
    sub2_deux = document.querySelector('.sub2-pck2'),
    sub3_deux = document.querySelector('.sub3-pck2');
var pk_trois = document.querySelector('.pck3'),
    title_trois = document.querySelector('.title-pck3'),
    sub1_trois = document.querySelector('.sub1-pck3'),
    sub2_trois = document.querySelector('.sub2-pck3'),
    sub3_trois = document.querySelector('.sub3-pck3');

var numPk = [1,2,3],
    pkAry = ['.pck','.title-pck','.sub1-pck','.sub2-pck','.sub3-pck'],
    anime = ['gopk', 'goTitle','goSub1','goSub2', 'goSub3'];

// init animation
var init = function () {
  for (var i = 0; i < pkAry.length; i++) {
    if (document.querySelector(pkAry[i]+numPk[0])) {
      return document.querySelector(pkAry[i]+numPk[0]).classList.add(anime[i])
    };
  }
}

var myEndFunction = function (){
  // console.log(this.classList + " END event was occured !");
  if(this.classList[0] === 'pck1' && this.classList[1] === 'gopk'){
    // this.classList.remove('gopk');
    for (var i = 0; i < pkAry.length; i++) {
      if (document.querySelector(pkAry[i]+numPk[0])) {
        document.querySelector(pkAry[i]+numPk[0]).classList.remove(anime[i])
      };
    }
    // if (title_un) title_un.classList.remove('goTitle');
    // if (sub1_un) sub1_un.classList.remove('goSub1');
    // if (sub2_un) sub2_un.classList.remove('goSub2');
    // if (sub3_un) sub3_un.classList.remove('goSub3');

    pk_deux.classList.add('gopk');
    if (title_deux) title_deux.classList.add('goTitle');
    if (sub1_deux) sub1_deux.classList.add('goSub1');
    if (sub2_deux) sub2_deux.classList.add('goSub2');
    if (sub3_deux) sub3_deux.classList.add('goSub3');
    // evt PK2
    pk_deux.addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'pck2' && this.classList[1] === 'gopk'){
    this.classList.remove('gopk');
    if (title_deux) title_deux.classList.remove('goTitle');
    if (sub1_deux) sub1_deux.classList.remove('goSub1');
    if (sub2_deux) sub2_deux.classList.remove('goSub2');
    if (sub3_deux) sub3_deux.classList.remove('goSub3');

    pk_trois.classList.add('gopk');
    if (title_trois) title_trois.classList.add('goTitle');
    if (sub1_trois) sub1_trois.classList.add('goSub1');
    if (sub2_trois) sub2_trois.classList.add('goSub2');
    if (sub3_trois) sub3_trois.classList.add('goSub3');
    // evt PK3
    pk_trois.addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'pck3' && this.classList[1] === 'gopk'){
    this.classList.remove('gopk');
    if (title_trois) title_trois.classList.remove('goTitle');
    if (sub1_trois) sub1_trois.classList.remove('goSub1');
    if (sub2_trois) sub2_trois.classList.remove('goSub2');
    if (sub3_trois) sub3_trois.classList.remove('goSub3');

    pk_un.classList.add('gopk');
    if (title_un) title_un.classList.add('goTitle');
    if (sub1_un) sub1_un.classList.add('goSub1');
    if (sub2_un) sub2_un.classList.add('goSub2');
    if (sub3_un) sub3_un.classList.add('goSub3');
    // evt PK1
    pk_un.addEventListener("animationend", myEndFunction);
  }
}
// evt PK1 sur END animation gopk
pk_un.addEventListener("animationend", myEndFunction);

/*(function() {
})(); // end IEF*/
