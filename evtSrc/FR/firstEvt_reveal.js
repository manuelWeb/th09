(function() {

// var global dans cette IEF
var numPk = [1,2,3],
    pkAry = ['.pck','.title-pck','.sub1-pck','.sub2-pck','.sub3-pck'],
    anime = ['gopk', 'goTitle','goSub1','goSub2', 'goSub3'];

// init animation
var init = function (index, arg) {
  for (var i = 0; i < pkAry.length; i++) {
    if (document.querySelector(pkAry[i]+numPk[index])) {
      // console.log(document.querySelector(pkAry[i]+numPk[index]));
      if(arg === 'add'){
        document.querySelector(pkAry[i]+numPk[index]).classList.add(anime[i]);
      }else{
        document.querySelector(pkAry[i]+numPk[index]).classList.remove(anime[i]);
      }
    }
  }
};
// init anime
init(0,"add");

var myEndFunction = function (){
  // console.log(this.classList + " END event was occured !");
  // console.log(this.classList[0] +"\n"+ this.classList[1]);
  if(this.classList[0] === 'sub3-pck1' && this.classList[1] === 'goSub3'){
    init(0,'remove');
    init(1,'add');
    // evt PK2
    document.querySelector('.sub2-pck2').addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'sub2-pck2' && this.classList[1] === 'goSub2'){
    init(1,'remove');
    init(2,'add');
    // evt PK3
    document.querySelector('.sub2-pck3').addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'sub2-pck3' && this.classList[1] === 'goSub2'){
    init(2,'remove');
    init(0,'add');
    document.querySelector('.sub3-pck1').addEventListener("animationend", myEndFunction);
  }
};
// ecouteur evt PK1 animationend > gopk
document.querySelector('.sub3-pck1').addEventListener("animationend", myEndFunction);

})(); // end IEF
