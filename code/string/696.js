export default countBinarySubstrings =  (s) => {
  if (s.length < 2) { return 0 } 
  let result = []
  for (var i = 0; i < s.length; i++){
    let matchText = match(s.slice(i))
    if (matchText) {
      result.push(matchText)
    }
  }
  return result.length
}

function match(s) {
  let i = 0
  let ApreText = s.charAt(i)
  let AnextText = s.charAt(i+1)
  let AText = ApreText

  while (ApreText == AnextText) {
    i++
    AText+=AnextText
    AnextText = s.charAt(i+1)
  }

  let BText = BpreText = AnextText
  let BnextText = s.charAt(i+2)

  while (BpreText == BnextText) {
    if (BText.length == AText.length) {
      break
    }
    i++
    BText+=BnextText
    BnextText = s.charAt(i+1)
  }
  if (AText.length === BText.length) {
    return AText+BText
  } else {
    return ''
  }

}