let money = +prompt('Ваш бюджет на месяц:');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// let num = 1;

// while

// let num = 0;
// while (num < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   let b = +prompt('Во сколько обойдется?', '');
//   let condition1 = typeof a === 'string';
//   let condition2 = typeof b === 'number';
//   let condition3 = typeof a != null;
//   let condition4 = typeof b != null;
//   let condition5 = typeof a != '';
//   let condition6 = typeof b != '';
//   let condition7 = a.length < 50;
//   if (
//     condition1 &&
//     condition2 &&
//     condition3 &&
//     condition4 &&
//     condition5 &&
//     condition6 &&
//     condition7
//   ) {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     console.log('nedone');
//     i--;
//   }
//   num++;
// }

// do while

// let num = 0;
// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   let b = +prompt('Во сколько обойдется?', '');
//   let condition1 = typeof a === 'string';
//   let condition2 = typeof b === 'number';
//   let condition3 = typeof a != null;
//   let condition4 = typeof b != null;
//   let condition5 = typeof a != '';
//   let condition6 = typeof b != '';
//   let condition7 = a.length < 50;
//   if (
//     condition1 &&
//     condition2 &&
//     condition3 &&
//     condition4 &&
//     condition5 &&
//     condition6 &&
//     condition7
//   ) {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     console.log('nedone');
//     i--;
//   }
//   num++;
// } while (num < 2);

// for

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

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка.');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка.');
} else {
  console.log('Произошла ошибка.');
}
//! 1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
