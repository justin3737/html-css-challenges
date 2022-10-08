const btns = document.getElementsByClassName('tmb-btn')
const imgWraps = document.getElementsByClassName('img-wrap')
const imageW = 450;

for(let i=0; i<btns.length; i++) {
  btns[i].addEventListener('click', ()=> {
    doMove(i)
  })
}

function doMove(newIdx) {
  for(let i=0; i<imgWraps.length; i++) {
    let posX = (newIdx - i) * imageW * -1;
    imgWraps[i].style.transform = `translateX(${posX}px)`
  }
}
