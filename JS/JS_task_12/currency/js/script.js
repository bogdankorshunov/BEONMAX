let inputRub = document.querySelector('#rub');
let inputUsd = document.querySelector('#usd');

function catchData(path) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', path);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.onload = function () {
      if (request.readyState === 4) {
        if (request.status == 200) {
          resolve(this.response);
        } else {
          reject('Что-то пошло не так');
        }
      }
    };
  });
}

inputRub.addEventListener('input', () => {
  catchData('js/current.json')
    .then((response) => {
      let data = JSON.parse(response);
      inputUsd.value = inputRub.value / data.usd;
    })
    .catch((err) => (inputUsd.value = err));
});
