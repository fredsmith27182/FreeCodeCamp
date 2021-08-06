function sumFibs(num) {
  let result=0;
  let no=0;
  let n=1;
  
  while (n <= num){
    if (n%2 !==0){
      result+=n;
      console.log(result)
    }
    n=n+no;
    no=n-no;
  }
  
  return result;
}

sumFibs(4);