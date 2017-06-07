(function() {

// var global dans cette IEF
var numPk = [1,2,3],
    pkAry = ['.pk','.title-pk','.sub1-pk','.sub2-pk','.sub3-pk'],
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
  console.log(this.classList[0] +"\n"+ this.classList[1]);
  if(this.classList[0] === 'sub3-pk1' && this.classList[1] === 'goSub3'){
    init(0,'remove');
    init(1,'add');
    // evt PK2
    document.querySelector('.sub2-pk2').addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'sub2-pk2' && this.classList[1] === 'goSub2'){
    init(1,'remove');
    init(2,'add');
    // evt PK3
    document.querySelector('.sub2-pk3').addEventListener("animationend", myEndFunction);
  }else if(this.classList[0] === 'sub2-pk3' && this.classList[1] === 'goSub2'){
    init(2,'remove');
    init(0,'add');
    document.querySelector('.sub3-pk1').addEventListener("animationend", myEndFunction);
  }
};
// ecouteur evt PK1 animationend > gopk
document.querySelector('.sub3-pk1').addEventListener("animationend", myEndFunction);

})(); // end IEF
