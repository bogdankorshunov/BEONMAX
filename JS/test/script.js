document.addEventListener('DOMContentLoaded', function (event) {
  let wrapper = document.querySelector('.wrapper');
  let box = document.querySelector('.box');
  let startBtn = document.querySelector('.start');
  let buttons = document.querySelector('.buttons');

  // let timerId = setTimeout(function log() {
  //     console.log("hello")
  //     setTimeout(log, 2000)
  // });
  function myAnimation() {
    console.log(2);
    let pos = 0;
    let id = setInterval(frame, 1);
    let boxWidth = box.offsetWidth;
    let wrapperWidth = wrapper.offsetWidth;
    console.log(wrapperWidth, boxWidth);
    function frame() {
      if (pos == wrapperWidth - boxWidth - 2) {
        clearInterval();
      } else {
        pos++;
        box.style.top = pos + 'px';
        box.style.left = pos + 'px';
      }
    }
  }
  startBtn.addEventListener('click', myAnimation);
  buttons.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.first')) {
      console.log(1);
    } else if (e.target && e.target.matches('button.second')) {
      console.log(2);
    }
  });
});
