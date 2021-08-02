function translatePigLatin(str) {

  let firstletter='';
  let endString='';
  let result='';
  let result2='';
  let word1='way';
  let i = 0;


  if (/^[aeiouAEIOU]/i.test(str)){
    result=str+word1;
    return result;
    
  }else{
    
    while(/^[^aeiou]/gi.test(str[i])){

       firstletter=str.substring(str[i],i+1);
       i++
    }

    endString=str.substring(i)
    result2=endString+firstletter+'ay';

    }
   
    return result2;
  
  }
  
  
  


translatePigLatin("glove");