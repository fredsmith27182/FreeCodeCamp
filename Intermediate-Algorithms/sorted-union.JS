function uniteUnique(arr,arr2,arr3) {
  let newArray=[];
  console.log(arguments)
  
  
  for(let i = 0; i <arguments.length; i++){
     for(let j = 0; j < arguments[i].length; j++){
      
       if (newArray.indexOf(arguments[i][j])===-1){
           newArray.push(arguments[i][j]);
           console.log(newArray)
           
       }
     }
  }
       
    
    
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);