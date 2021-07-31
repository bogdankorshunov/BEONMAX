let money = prompt('Ваш бюджет на месяц:');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

appData.expenses.answer1 = money;
appData.expenses.answer2 = time;

alert(appData.budget / 30);
