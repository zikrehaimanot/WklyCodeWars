// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.
//
//
//
//

function findShort(string){
  string = string.split(' ');
  if (string.length <= 1) {
    return string[0].length;
  }
  if (string[0].length < string[1].length) {
    string.splice(1,1);
    string = string.join(' ');
    return findShort(string);
  }
  else {
    string.splice(0,1);
    string = string.join(' ');
    return findShort(string);
  }
}
