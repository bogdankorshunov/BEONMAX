
function func2(...arr) {
  let sum = 0;
  for (let iterator of arr) {
    console.log(sum, iterator)
    sum += iterator;
  }
  this.textContent = sum;
}

function func1() {
  this.textContent = 'hui'
}

function func3(...args){
  console.log(args)
  // this.innerHTML = a + b + c
}

// document.querySelector('.b-1').addEventListener('click', () => {
//   func2.apply(document.querySelector('.b-2'), [2, 3, 5]);
// });

let a1 = func1.bind(document.querySelector('.b-1'))
a1()

// document.querySelector('.b-1').addEventListener('click', () => {
//   func1.call(document.querySelector('.b-2'), 2, 3);
// });

let sum = func3.bind(document.querySelector('.b-3'), 10);

document.querySelector('.b-3').addEventListener('click', ()=>{
  sum(1,2,3)
});

let validate = {
  password: "12345",
  email: "123213@dsfsdf.ru",
  check() {
    return(this.password.length > 5) ? true : false
  }
}

console.log(validate.check())
let validate2 = {
  password: '123456',
  email: "123213@dsfsdf.ru",
}

let checkValidBind = validate.check.bind(validate2)
console.log(checkValidBind())