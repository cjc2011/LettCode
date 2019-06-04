export default (str) => {
  let newArr = str.split(' ')
  let result = newArr.map( item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}