function fearNotLetter(str) {
let result =''

  for (let i = 0; i < str.length; i++){
    let charDifference=str.charCodeAt(i)-str.charCodeAt(i+1);
   
    if(charDifference < -1){
        result=str.charCodeAt(i)+1;
        result =String.fromCharCode(result);
        return result      
    }
  
  } 
  
}

fearNotLetter("abce");