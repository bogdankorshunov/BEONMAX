let json = '{"id": 2}'
try {
  let user = JSON.parse(json)
  // console.og(123);
  if(!user.name) {
    throw new Error("В этих данных нет имени")
  }
} catch(err) {
  console.log('error');
  console.log(err.name)
  console.log(err.message)
  console.log(err.stack)
} finally {
  console.log('Finally')
}