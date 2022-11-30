const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(obj, index, array){
    let year
    if(obj.result === "W"){
         year =  obj.year;
    } 

    return year;
}

const year = record.find(superbowlWin).year;

console.log(year);
