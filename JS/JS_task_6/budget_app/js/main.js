'use strict';

let startBtn = document.querySelector('#start');
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');
let expensesItem = document.querySelectorAll('.expenses-item');
let expensesBtn = document.querySelector('.expenses-item-btn');
let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBtn = document.querySelector('.count-budget-btn');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let appData = {
  budget: 0,
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  moneyPerDay: 0,
};

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function () {
  let money = +prompt('Ваш бюджет на месяц?', '');
  let time = prompt('Введите дату в формате YYYY-MM-DD', '');

  let condition1 = isNaN(money);
  let condition2 = money == '';
  let condition3 = money == null;

  while (condition1 || condition2 || condition3) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }

  appData.budget = money;
  appData.timeData = time;

  budgetValue.textContent = appData.budget.toFixed();

  let dateControl = new Date(Date.parse(appData.timeData));
  yearValue.value = new Date(dateControl).getFullYear();
  monthValue.value = new Date(dateControl).getMonth() + 1;
  dayValue.value = new Date(dateControl).getDate();

  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
});

checkSavings.addEventListener('click', function () {
  appData.savings = !appData.savings;
});

sumValue.addEventListener('input', function () {
  if (appData.savings) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
percentValue.addEventListener('input', function () {
  let sum = +sumValue.value;
  let percent = +percentValue.value;
  appData.monthIncome = (sum / 100 / 12) * percent;
  appData.yearIncome = (sum / 100) * percent;
  monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
  yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
});

incomeItem.addEventListener('input', () => {
  let items = incomeItem.value;
  if (isNaN(items) || items != '') {
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
  }
});

countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    dayBudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка.';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка.';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка.';
    } else {
      levelValue.textContent = 'Произошла ошибка.';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка.';
  }
});

expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    console.log(expensesItem[i]);
    let a = expensesItem[i].value;
    let b = +expensesItem[++i].value;

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
      sum += +b;
      console.log(sum);
    } else {
      console.log('nedone');
      i--;
    }
    expensesValue.textContent = sum;
  }
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    appData.optionalExpenses[i] = optionalExpensesItem[i].value;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

