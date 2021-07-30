function sumAll(arr) {
  let min=Math.min(arr[0], arr[1]);
  let max=Math.max(arr[0], arr[1]);
  let sumOfRanges=0;
  for (let i=min; i<=max; i++){
    sumOfRanges+=i
    console.log(sumOfRanges)

  }

  return sumOfRanges;
}

sumAll([1, 4]);