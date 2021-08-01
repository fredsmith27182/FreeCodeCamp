function spinalCase(str) {
 let mystr =str.replace(/([a-z])([A-Z])/g, ('$1 $2'));
 mystr=mystr.replace(/_/g, '-')
 mystr=mystr.replace(/ /g, '-')
 mystr=mystr.toLowerCase();
 console.log(mystr)
 return mystr;
}

spinalCase('This Is Spinal Tap');