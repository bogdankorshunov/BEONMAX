document.addEventListener('DOMContentLoaded', () => {
  const infoHeader = document.querySelector('.info-header');
  const infoHeaderTab = document.querySelectorAll('.info-header-tab');
  const infoTabContent = document.querySelectorAll('.info-tabcontent');

  //tabs
  function hideTabContent(item = 1) {
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

  infoHeader.addEventListener('click', (e) => {
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

  const deadline = '2021-09-30';

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

  //form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };

  let form = document.querySelector('.main-form');
  let input = form.getElementsByTagName('input');
  let statusMessage = document.createElement('div');

  function post(url, item) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', url);
      request.setRequestHeader(
        'Content-type',
        'application/json; charset=utf-8'
      );

      let formData = new FormData(form);

      let obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);

      request.send(json);

      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          item.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
          resolve(message.success);
        } else {
          reject(message.failure);
        }
      });

      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.appendChild(statusMessage);
    post('server.php', statusMessage)
      .then((res) => {
        statusMessage.classList.add('status');
        statusMessage.innerHTML = res;
      })
      .catch((err) => {
        statusMessage.innerHTML = err;
      });
  });

  let contactForm = document.querySelector('#form');
  let contactInputEmail = contactForm.querySelectorAll('input')[0];
  let contactInputPhone = contactForm.querySelectorAll('input')[1];
  let statusContactMessage = document.createElement('span');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.appendChild(statusContactMessage);
    post('server.php', statusMessage)
      .then((res) => {
        statusContactMessage.classList.add('status');
        statusContactMessage.style.color = '#fff';
        statusContactMessage.innerHTML = res;
      })
      .catch((err) => {
        statusContactMessage.innerHTML = err;
      })
      .finally(() => {
        contactInputEmail.value = '';
        contactInputPhone.value = '';
      });
  });

  //slider

  let slideIndex = 1; //текущий сладер
  let slides = document.querySelectorAll('.slider-item');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let dotsWrap = document.querySelector('.slider-dots');
  let dots = document.querySelectorAll('.dot');
  showSlide(slideIndex);
  function showSlide(n) {
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => (item.style.display = 'none')); // скрываем все слайды
    dots.forEach((dot) => dot.classList.remove('dot-active')); // убираем класс active со всех точек
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }
  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }
  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }
  function currentSlide(n) { // передается номер слайда который нужно отобразить
    showSlide(slideIndex = n)
  }
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  dotsWrap.addEventListener('click', function (e) {
    for(let i = 0; i < dots.length + 1; i++) {
      if(e.target.classList.contains('dot') && e.target == dots[i -1]) {
        currentSlide(i)
      }
    }
    
  });
});
