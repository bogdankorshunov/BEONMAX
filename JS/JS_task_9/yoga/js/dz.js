document.addEventListener('DOMContentLoaded', function () {
  let input = document.createElement('input');
  input.value = 30;
  input.id = 'age';
  input.style.display = 'none';
  document.querySelector('.overlay').appendChild(input);

  let age = document.getElementById('age');
  function showUser(surname, name) {
    alert(
      'Пользователь ' + surname + ' ' + name + ', его возраст ' + this.value
    );
  }
  console.log(age);

  //   1 способ
  showUser.apply(age, ['Петя', 'Иванов']);
  //   2 способ
  //   showUser.call(age, 'Петя', 'Иванов');
  //   3 способ
  //   showUser.bind(age, 'Петя', 'Иванов')();
});
