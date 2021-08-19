function orbitalPeriod(arr) {

  let newArray = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  

var obj = arr.map((period)=>{

    var twoPie = 2*Math.PI;
    var aCubed = Math.pow(earthRadius+period.avgAlt,3);
    var acubedOverGM = (aCubed/GM);
    var T = twoPie*(Math.sqrt(acubedOverGM));
    T=Math.round(T);

return {name: period.name, orbitalPeriod: T};

});

  return obj;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);