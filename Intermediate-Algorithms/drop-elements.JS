function dropElements(arr, func) {
  let num=arr.length;
  
  for(let i = 0; i <= num; i++){
    if(!func(arr[0])){
     arr.shift();
      
    }else{
      console.log(arr)
    return arr;
    }
    
    
  }
  
  
  return arr
}

dropElements([1, 2, 3], function(n) {return n < 3; });