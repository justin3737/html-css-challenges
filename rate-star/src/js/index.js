let _rate = 0;
const rate_btns = document.querySelectorAll('.rate_btn');
const submit_btn = document.getElementById('submit');
const form_view =  document.getElementById('form_view');
const result_view =  document.getElementById('result_view');
const rate_text =  document.getElementById('rate_text');

for(let i =0; i < rate_btns.length; i++ ){
  let self = rate_btns[i];
  self.addEventListener('click', (elm) => {
    _rate = parseInt(elm.target.innerHTML, 10)
    toogleClass(_rate)
  })
}

submit_btn.addEventListener('click', ()=> {
  rate_text.innerHTML = `You selected ${_rate} out of 5`;
  form_view.classList.add('hidden');
  form_view.classList.remove('flex');
  result_view.classList.add('flex');
  result_view.classList.remove('hidden');
});

function toogleClass(id) {
  for(let i =0; i < rate_btns.length; i++ ){
    rate_btns[i].classList.add('hover:bg-gray-400')
    rate_btns[i].classList.remove('bg-orange-500')
  }
  rate_btns[id-1].classList.remove('hover:bg-gray-400')
  rate_btns[id-1].classList.add('bg-orange-500')
}
