function largestOfFour(arr) {
  let newArray=[];
  let result =0;

  for(let i = 0;  i < arr.length; i++){
      result = arr[i][0];
   
         for( let j = 1;  j < arr[i].length;  j++){
                   if (arr[i][j] > result){
                      result=arr[i][j];
                   }
        
            }

   newArray.push(result);
  }

  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);