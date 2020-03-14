// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
//
//



function menFromBoys(arr){
let evenArray = []
let combinedArray =[]
let evenSort = []
let oddSort = []
let oddArray = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
    evenArray.push(arr[i])
    }
    else{
    oddArray.push(arr[i])
    }
  }
  evenSort = evenArray.sort( (a, b) => a - b );
  oddSort = oddArray.sort((a, b) => b - a);
  combinedArray = evenSort.concat(oddSort);
  let unique = [...new Set(combinedArray)]
  return unique
}
