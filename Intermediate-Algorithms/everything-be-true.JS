function truthCheck(collection, pre) {
  
  var count = 0;

  for(let i = 0; i < collection.length; i++){
       if(collection[i][pre]){
         count++
        }  
    
  }
      if (count==collection.length){
           return true;
          }else{
           return false;
          }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");