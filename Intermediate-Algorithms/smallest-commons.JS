function smallestCommons(arr) {

var sortedArray=arr.sort(sortNumber),
 min =sortedArray[0],
 max= sortedArray[1],
 smallestCommon=0,
 multiple= max;
 console.log(arr)

   while(smallestCommon==0){
     for (let i = min; i <= max; i++){
             if(multiple%i !==0){
              break;
             }
            
             if (i ==max){
                smallestCommon=multiple;
            }
             
        }

       multiple+=max; 
  }

  console.log(smallestCommon);
  return smallestCommon;
   
}
function sortNumber(a, b) {
    return a - b;
}


smallestCommons([1,5]);
smallestCommons([5,1]);