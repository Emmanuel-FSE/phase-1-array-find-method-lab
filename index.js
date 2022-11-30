const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
  ]
  
  function superbowlWin(obj){
  let year;
  obj.find(function(obj){
  if(obj.result === "W"){
  year = obj.year;
  } 
  });
  return year;
  }
