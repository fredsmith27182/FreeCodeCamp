function titleCase(str) {
  let newstr=[];
  let result=''
  let newArray=[]

   newstr =str.toLowerCase().split(" ");
  
  for (let i = 0; i < newstr.length; i++){
   result = newstr[i].replace(newstr[i].charAt(0), newstr[i].charAt(0).toUpperCase())
   newArray.push(result);
   
  }

return newArray.join(" ")

} 

titleCase("I'm a little tea pot");