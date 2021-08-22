function reverseString(str) {

  let result =[];
  let newstr=str.split('');
  console.log(newstr)
  

  for (let i = 0; i < newstr.length; i++){
  result.unshift(newstr[i]);
  console.log(result)
  
  }
 
  return result.join('');
}

reverseString("hello");