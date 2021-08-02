function myReplace(str, before, after) {

//variable declarations.

let newstr='';
let regex1=/[A-Z]/;
let regex2=/[a-z]/;
let regex=str.match(before);
let strIndex =str[str.indexOf(before)];

//The case when the first alphabet of the before character being replaced the string start out with a capital letter, it needs to be replaced with another word starting with a capital letter. So the "after" parameter need to be changed to a beginning  letter as well

if (strIndex.match(regex1)){

after= after.charAt(0).toUpperCase()+after.slice(1);
newstr=str.replace(regex, after);
return newstr
  
}

//The case when the before charater (the character being replaced) begins lowercase letter, while the replacement letter starts with  a uppercase, the replacement letter must be changed to a lower case before the swap.//

if(strIndex.match(regex2) && after[0].match(regex1)){

  after=after.charAt(0).toLowerCase()+after.slice(1);
  newstr=str.replace(regex,after);
  return newstr
  
}

//when both parameters begin with a lowercase letter.
newstr=str.replace(regex,after)

  return newstr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");