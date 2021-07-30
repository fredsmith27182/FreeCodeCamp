function destroyer(arr) {

let n1=Object.values(arguments)
let n2=n1.splice(0,1);
let newArray=[];
let result=[];

for(let i = 0; i <n2[0].length; i++){
newArray.push(n2[0][i])

}

for (let i = 0; i<newArray.length;i++){
  if(n1.indexOf(newArray[i])===-1){
    result.push(newArray[i]);
  
  }
}
 
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);