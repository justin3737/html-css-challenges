const cardContainer = document.getElementById('card-container');
const cvvInput = document.getElementById('input-cvv');
const cvvText = document.getElementById('cvv');
const cardHolder = document.getElementById('card-holder');
const cardHolderInput = document.getElementById('input-card-holder');
const cardNumberWrap = document.getElementById('card-number-wrap');
const cardNmberInput = document.getElementById('input-card-number');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
const monthSelect = document.getElementById('select-month');
const yearSelect = document.getElementById('select-year');
const venders = document.querySelectorAll('.vender');
const cardHolderWrap = document.getElementById('card-holder-wrap');
const expireWrap = document.getElementById('expire-wrap');

cvvInput.onblur = function() {
  cardContainer.classList.remove('flip-back');
}

cvvInput.onfocus = function() {
  cardContainer.classList.add('flip-back');
}

cvvInput.onkeyup = function() {
  let star = '';
  for(let i = 0; i < cvvInput.value.length; i++) {
    star += '*';
  }
  cvvText.innerHTML = star;
}

cardHolderInput.onkeyup = function() {
  cardHolder.innerHTML = cardHolderInput.value;
  cardHolderWrap.classList.add('input-active');
}

cardHolderInput.onblur = function() {
  cardHolderWrap.classList.remove('input-active');
}

cardNmberInput.onkeyup = function() {
  let no = cardNmberInput.value;
  let cardType = checkCard(no);
  for(let i = 0; i < venders.length; i++) {
    venders[i].classList.remove('bg-visa','bg-amex','bg-mac','bg-unpay','bg-jcb');
    venders[i].classList.add(`bg-${cardType}`)
  }

  //按下到退件的時候不會加入dash
  if(window.event.keyCode == 8){
    cardNmberInput.value = no
  }else{
    cardNmberInput.value = joinSpace(no, cardType);
  }
  cardNumberWrap.innerHTML = joinStarHash(no, cardType);
  cardNumberWrap.classList.add('input-active');

  setMaxLength(cardType);
}

cardNmberInput.onblur = function() {
  cardNumberWrap.classList.remove('input-active');
}

cardHolderInput.onblur = function() {
  cardHolderWrap.classList.remove('input-active');
}

monthSelect.onchange = function() {
  monthText.innerHTML = monthSelect.value;
  expireWrap.classList.add('input-active');
}

yearSelect.onchange = function() {
  yearText.innerHTML = yearSelect.value.substring(2);
  expireWrap.classList.add('input-active');
}

monthSelect.onblur = function() {
  expireWrap.classList.remove('input-active');
}

yearSelect.onblur = function() {
  expireWrap.classList.remove('input-active');
}

//檢查是哪一家銀行卡
const checkCard = function(number) {
  let re = new RegExp("^4");
  if (number.match(re) != null) return "visa";
  re = new RegExp("^(34|37)");
  if (number.match(re) != null) return "amex";
  re = new RegExp("^5[1-5]");
  if (number.match(re) != null) return "mac";
  re = new RegExp("^62");
  if (number.match(re) != null) return "unpay";
  re = new RegExp("^(352[8-9]|35[3-8][0-9])");
  if (number.match(re) != null) return "jcb";
  return "visa";
}

//卡號加入星星井號空白
const joinStarHash = function(cardStr, cardType) {
  let result = '';
  let cardno = cardStr.split(' ').join('');
  let cardLength = (cardType === 'amex')? 15 : 16;

  //不足位數補#
  for (let j=cardno.length; j<cardLength; j++) {
    cardno += '#';
  }

  for (let i=1; i<=cardno.length; i++) {
    //5-12位數變成*
    if (i>4 && i<13 && cardno[i]!='#') {
      result += '*';
    } else {
      result += cardno.substr(i-1, 1);
    }
    //每日4位數加入空白
    if (i%4 ===0 && i<16 && cardType!=='amex') {
      result += " ";
    }
    //每4,10位數加入空白 for amex
    if ((i===4 || i===10) && cardType==='amex') {
      result += " ";
    }
  }
  return result
}

//卡號加入空白
const joinSpace = function(cardStr, cardType) {
  let result = '';
  let cardno = cardStr.split(' ').join('');
  for(let i=1; i<=cardno.length; i++) {
    result += cardno.substr(i-1, 1);
    //每日4位數加入空白
    if (i%4 ===0 && i<16 && cardType!=='amex') {
      result += " ";
    }
    //每4,10位數加入空白 for amex
    if ((i===4 || i===10) && cardType==='amex') {
      result += " ";
    }
  }
  return result
}

//設定最大長度
const setMaxLength = function(cardType) {
  if (cardType==='amex') {
    cardNmberInput.maxLength = 17;
  } else {
    cardNmberInput.maxLength = 19;
  }
}