function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sourceKey = Object.keys(source);
  console.log(sourceKey);
arr= collection.filter(keyValue => {
  for(let i = 0; i < sourceKey.length; i++){
    if(!keyValue.hasOwnProperty(sourceKey[i]) || keyValue[sourceKey[i]]!==source 
    [sourceKey[i]]){
      
      console.log(keyValue[sourceKey[i]]);
      console.log(source[sourceKey[i]]);
      return false;
        
    }

  }return true
})

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });