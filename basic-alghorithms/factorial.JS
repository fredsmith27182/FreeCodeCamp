//this function accept imput parameter num and then returns num as a factorial. //
//which if num=5, return the value 5*4*3*2*1  for the value of num //
function factorialize(num) {
  let result=1;

  for (let i = 1; i <=num; i++){
    result=result*i;
    console.log(result)

  }
  return result;
}

factorialize(5);
