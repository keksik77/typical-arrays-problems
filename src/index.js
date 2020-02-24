
exports.min = function min (array) {
  if(array === undefined || array[0] === undefined){
    return 0;
  }else{
    array = array.sort(function (prev, next) {
      return prev - next;
    })
    return array[0];
  }
}

exports.max = function max (array) {
  if(array === undefined || array[0] === undefined){
    return 0;
  }else{
    array = array.sort(function (prev, next) {
      return prev - next;
    })
    return array[array.length - 1];
  }
}

exports.avg = function avg (array) {
  if(array === undefined || array[0] === undefined){
    return 0;
  }else{
    let Avg = 0;
    array.forEach(element => { Avg += element});
    return (Avg/array.length);
  }
}
