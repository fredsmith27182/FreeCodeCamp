function truncateString(str, num) {
  
  if (str.length > num){
    let newstr=str.substring(0,num)
    return newstr+'...'
    
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);