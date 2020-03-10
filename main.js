// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!
//
// If you like this Kata, please try:


function capitalize(s){
  let nString=[]
  let newString=[]
  for ( i = 0; i < s.length; i++){
    if (i % 2 === 0 ){
      let e = s[i].toUpperCase()
      let o = s[i]

      nString.push(e)
      newString.push(o)
    }else {
      let o = s[i].toUpperCase()
      let e = s[i]
      nString.push(e)
      newString.push(o)
    }
  }
  return[nString.join(""),newString.join("")]

};
