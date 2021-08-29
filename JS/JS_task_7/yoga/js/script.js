document.addEventListener('DOMContentLoaded', function () {
  let infoHeader = document.querySelector('.info-header');
  let infoHeaderTab = document.querySelectorAll('.info-header-tab');
  let infoTabContent = document.querySelectorAll('.info-tabcontent');

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
      for(let i = 0; i < infoHeaderTab.length; i++) {
          if(e.target == infoHeaderTab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
      }
    }
  });
});
