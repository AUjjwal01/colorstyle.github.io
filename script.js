var body=document.getElementById('bodybg');
var navi=document.getElementById('nav');
var main=document.getElementById('main');
var button=document.getElementById('button');
var bgval=document.querySelector('.bg');
var link=document.querySelector('.ah');
var navbar=document.querySelector('.nav-bar');
 var bc1=document.querySelector('.bc1');
 var bgin=document.querySelector('.bgin');
 var divtxt=document.querySelector('.mtxt');
 var inputs=document.getElementById('inputs');
  //Card Section
  var cbbg=document.getElementById('cardbgbg');
  var crd=document.getElementsByClassName('color');
var gc=document.querySelector('.gc');
var gbbg=document.querySelector('.gridbgbg');
var gtxt=document.querySelector('.grdtxt');
var gbg=document.querySelector('.grdbg');
//Footer section
var ft=document.getElementById('footer');
var fb=document.getElementById('submit');
var fbg=document.querySelector('.bgl');
var ftxt=document.querySelector('.txtl');
var fbubg=document.querySelector('.bubg');


link.addEventListener("input",function(){ document.querySelectorAll("a")[0].style.color=document.querySelectorAll("a")[2].style.color=document.querySelectorAll("a")[1].style.color=link.value;
document.querySelector('#ah').innerHTML=link.value;
})
navbar.addEventListener("input",function(){ navi.style.background=navbar.value;
  document.querySelector('#nav-bar').innerHTML=navbar.value;

});
bgin.addEventListener("input",function(){   
  main.style.background=bgin.value;
  document.querySelector('#bgin').innerHTML=bgin.value;

});
bc1.addEventListener("input",function(){
  button.style.backgroundColor=bc1.value;
document.querySelector('#bc1').innerHTML=bc1.value;
})
divtxt.addEventListener("input",function(){ 
  document.querySelector('#mtxt').innerHTML=divtxt.value;

  main.style.color=divtxt.value;
})

//Card section
gbbg.addEventListener("input",function(){   
 cbbg.style.background=gbbg.value;
 document.querySelector('#gridbgbg').innerHTML=gbbg.value;

});

gc.addEventListener("input",function(){   
  cbbg.style.color=gc.value;
  document.querySelector('#gc').innerHTML=gc.value;
 
 });
// gtxt.addEventListener("input",function(){   
//   console.log(gtxt.value) 
//   crd.style.color=gtxt.value;
//   document.querySelector('#grdtxt').innerHTML=gtxt.value;
 
//  });
 gbg.addEventListener("input",function(){  console.log(gbg.value) 
  document.getElementsByClassName("color")[0].style.background=document.getElementsByClassName("color")[1].style.background=document.getElementsByClassName("color")[2].style.background=gbg.value;
  document.getElementsByClassName("color")[3].style.background= document.getElementsByClassName("color")[4].style.background= document.getElementsByClassName("color")[5].style.background=gbg.value;
  document.querySelector('#grdbg').innerHTML=gbg.value;
 
 });
 //footer section
 fbg.addEventListener("input",function(){   
  ft.style.background=fbg.value;
  document.querySelector('#bgl').innerHTML=fbg.value;
 
 });
 ftxt.addEventListener("input",function(){   
  ft.style.color=ftxt.value;
  document.querySelector('#txtl').innerHTML=ftxt.value;
 
 });
 fbubg.addEventListener("input",function(){   
  fb.style.background=fbubg.value;
  document.querySelector('#bubg').innerHTML=fbubg.value;
 
 });
