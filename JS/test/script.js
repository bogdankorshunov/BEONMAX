function log(...test) {
  for (const iterator of test) {
    console.log(iterator)
  }
}

let arr=[1,2,3,4,5]

log(...arr)