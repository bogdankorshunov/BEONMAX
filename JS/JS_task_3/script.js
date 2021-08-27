'use strict';

let money;
let time;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  let condition1 = isNaN(money);
  let condition2 = money == '';
  let condition3 = money == null;

  while (condition1 || condition2 || condition3) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    let condition1 = typeof a === 'string';
    let condition2 = typeof b === 'number';
    let condition3 = typeof a != null;
    let condition4 = typeof b != null;
    let condition5 = typeof a != '';
    let condition6 = typeof b != '';
    let condition7 = a.length < 50;
    if (
      condition1 &&
      condition2 &&
      condition3 &&
      condition4 &&
      condition5 &&
      condition6 &&
      condition7
    ) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('nedone');
      i--;
    }
  }
}

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка.');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка.');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка.');
  } else {
    console.log('Произошла ошибка.');
  }
}

function checkSavings() {
  result = confirm('У вас есть накопления?');
  if (result) {
    appData.savings = true;

    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = (save / 100 / 12) * percent;
    alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
  } else {
    appData.savings = false;
  }
}

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let question = prompt('Статья необязательных расходов?');
    appData.optionalExpenses[i] = question;
    console.log(appData.optionalExpenses);
  }
}

start();
chooseExpenses();
detectLevel();
checkSavings();
chooseOptExpenses();

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);









