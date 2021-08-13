function addTogether() {
  var num1 = arguments[0];
  var num2 = arguments[1];
  
  
      if(typeof(num1) !=='number'){
        return undefined;  

      }else if (num2 === undefined){
        function addNum(number2){
              if(typeof(number2) !=='number'){
                 return undefined;
                }else{
                   return num1+number2;
                }
         
        }
       
      return addNum;
    }
       
   if (typeof(num2) !=='number'){
         return undefined;

        } else{
         return num1+num2;
        }
}

addTogether(2);