function findLongestWordLength(str) {
  let newstr =str.split(' ');
  let word=newstr[0].length;
  
 
for (let i = 0; i < newstr.length; i++){
  if (newstr[i].length>word)
    word=newstr[i].length;

}
  return word;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");