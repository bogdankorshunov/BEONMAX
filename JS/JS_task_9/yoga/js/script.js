document.addEventListener('DOMContentLoaded', function () {
  let infoHeader = document.querySelector('.info-header');
  let infoHeaderTab = document.querySelectorAll('.info-header-tab');
  let infoTabContent = document.querySelectorAll('.info-tabcontent');

  //tabs
  function hideTabContent(item) {
    for (let i = item; i < infoTabContent.length; i++) {
      infoTabContent[i].classList.remove('show');
      infoTabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1); //скрыть все табы кроме 1-го

  function showTabContent(item) {
    //если таб контент содержит класс hide то мы удаляем hide и добавляем show
    if (infoTabContent[item].classList.contains('hide')) {
      infoTabContent[item].classList.remove('hide');
      infoTabContent[item].classList.add('show');
    }
  }

  infoHeader.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('info-header-tab')) {
      //перебираем все табы и определяем куда кликнули
      for (let i = 0; i < infoHeaderTab.length; i++) {
        if (e.target == infoHeaderTab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer

  let deadline = '2021-08-30';

  //узнать промещуток между сегодня и дедлайном
  function getTimerRemaning(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()); //new Date() текущая дата
    let seconds = Math.floor((t / 1000) % 60); //t - милисекунды (t / 1000) - секунды (t / 1000) % 60 - остаток от секунд
    let minutes = Math.floor((t / 1000 / 60) % 60); //(t / 1000 / 60) - минуты
    let hours = Math.floor(t / (1000 * 60 * 60)); // t / (1000 * 60 * 60) - часы

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let seconds = timer.querySelector('.seconds');
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimerRemaning(endTime);

      function setZero(number) {
        if (number <= 9) {
          let newNumber = '0' + number;
          return newNumber;
        } else {
          return number;
        }
      }

      hours.textContent = setZero(t.hours);
      minutes.textContent = setZero(t.minutes);
      seconds.textContent = setZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  } //endTime = deadline
  setClock('timer', deadline);

  //modal

  let moreBtn = document.querySelector('.more');
  let overlay = document.querySelector('.overlay');
  let popupCloseBtn = document.querySelector('.popup-close');

  moreBtn.addEventListener('click', showModal.bind(overlay, moreBtn));
  popupCloseBtn.addEventListener('click', closeModal.bind(overlay, moreBtn));

  let descrBtns = document.querySelectorAll('.description-btn');

  for (let item of descrBtns) {
    item.addEventListener('click', showModal.bind(overlay, item));
  }

  function showModal(item) {
    this.style.display = 'block';
    item.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(item) {
    this.style.display = 'none';
    item.classList.remove('more-splash');
    document.body.style.overflow = 'visible';
  }
});
