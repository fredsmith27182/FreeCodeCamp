var Person = function(firstAndLast) {
  
  // Only change code below this line

  var FullName=firstAndLast;
  // Complete the method below and implement the others similarly

this.getFirstName = function(){
  return FullName.split(" ")[0];
};


this.getLastName=function(){
return FullName.split(" ")[1];
};

  this.getFullName = function() {
    return FullName;
  };

  this.setFirstName = function(name){
    FullName = name + " " + FullName.split(" ")[1];
  };

  this.setLastName = function(name){
    FullName = FullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name){
    FullName = name;
  };


  
};

var bob = new Person('Bob Ross');
bob.getFullName();
