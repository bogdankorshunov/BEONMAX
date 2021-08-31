let prom = new Promise((resolve, reject) => {
  console.log('timer 2000 started')
  setTimeout(()=>{
    let t = 2
    console.log('timer ended')
    if(t == 2) {

      resolve({timer: 'ok'})
    } else {
      reject({timer: 'ne ok'})
    }
  }, 2000)
})
let prom2 = new Promise((resolve, reject) => {
  console.log('timer 3000 started')
  setTimeout(()=>{
    let t = 3
    console.log('timer ended')
    if(t == 2) {

      resolve({timer: 'ok'})
    } else {
      reject({timer: 'ne ok'})
    }
  }, 3000)
})
// prom.then(data => console.log(data.timer)).catch(data => console.log(data.timer))

Promise.all([prom, prom2]).then(()=>{
  console.log('ok')
})