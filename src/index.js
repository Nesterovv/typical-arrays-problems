
exports.min = function min (array) {
  let arr=[];
  if(array != arr && Array.isArray(array) && array.length>1){
  let minimum =Math.min(...array);
return minimum;
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  let arr=[];
  if(array != arr && Array.isArray(array) && array.length>1){
  let maximum =Math.max(...array);
return maximum;
  }
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  let arr=[];
  if(array != arr && Array.isArray(array) && array.length>1){
    var sum =0;
  for(let i = 0; i < array.length; i++){
      sum += array[i];
        }
  let count = array.length;
  let avg = sum/count;
return avg;
  }
  else {
    return 0;
  }
}
