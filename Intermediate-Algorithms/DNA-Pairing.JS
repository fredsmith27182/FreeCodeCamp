function pairElement(str) {
  let newArray=[];
  let arr=[];

//loops through the string parameter to gather the DNA pairing and place it in a 2 dimensional Array. //
  for (let i = 0; i <= str.length; i++){

      switch(str[i]){
        case 'A':
           newArray.push(str[i]);
           newArray.push('T');
           arr.push(newArray);
           break;

        case 'T':
           newArray.push(str[i]);
           newArray.push('A');
           arr.push(newArray);
           break;

        case 'G':
           newArray.push(str[i])
           newArray.push('C');
           arr.push(newArray);
           break;

        case 'C':
           newArray.push(str[i]);
           newArray.push('G');
           arr.push(newArray);
           break;
      }

   newArray=[];

    }

  console.log(arr)
  return arr
}

pairElement("ATCGA");