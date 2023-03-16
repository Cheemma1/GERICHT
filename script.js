
const nav = document.getElementById('navlinks');
const open= document.getElementById('open');
const close=document.getElementById('close');

open.addEventListener('click', ()=>{
nav.style.left='0';

});


close.addEventListener('click', ()=>{
nav.style.left='-100%';

});



let indexValue =1;
showImg(indexValue);
function btn_slide(e){
  showImg(indexValue = e);
}
function showImg(e){
let i ;
const img = document.getElementsByClassName('img');
const sliders = document.querySelectorAll('.btn-sliders p');

if (e > img.length){
indexValue = 1
}

if (e < 1){
indexValue = img.length
}
for(i=0; i < img.length; i++){
  img[i] .style.display = 'none';
}
 img[indexValue - 1].style.display = 'block';
 for(i=0; i < img.length; i++){
  sliders[i] .style.color = '#DCCA87';
}
 img[indexValue - 1].style.display = 'block';
 
 sliders[indexValue - 1].style.color = 'white';
}


  AOS.init(
      {
        duration:1400,
      }
    );
