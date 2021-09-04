function confirmEnding(str, target) {
  var endWord = str.substring(str.length-target.length);
  
  if (endWord===target){
    return true;
  }
  return false;
} 

confirmEnding("Bastian", "n");