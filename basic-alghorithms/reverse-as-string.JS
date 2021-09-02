//this program takes a str from the input and returns the string back in reverse //
function reverseString(str) {

  let result =[];
  let newstr=str.split('');
  console.log(newstr)
  

  for (let i = 0; i < newstr.length; i++){
  result.unshift(newstr[i]);
  
  }
 
  return result.join('');
}

reverseString("hello");
