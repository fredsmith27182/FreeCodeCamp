function diffArray(arr1, arr2) {
  var newArr = [];
 
  function callback(array1, array2){
    for(let i = 0; i < array1.length; i++ ){
      if(array2.indexOf(array1[i])===-1){
        newArr.push(array1[i]);
      }
    
    }
  }
  callback(arr1,arr2);
  callback(arr2,arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);