//this function is passed 2 parameters. str is any random string, and num is defined as a number. //
//What is being outputed is the string being repeated multiple times equal to the value of num. //
//For example if str=dog and num =2, the output is "dog dog".  //
function repeatStringNumTimes(str, num) {
  let result=''

  if (num>0){
      for (let i = 0; i < num; i++){
           result+=str
        
          }
    return result;
  }
  return '';
}

repeatStringNumTimes("abc", 3);
