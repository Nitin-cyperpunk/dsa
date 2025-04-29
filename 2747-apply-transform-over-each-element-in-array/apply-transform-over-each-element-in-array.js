/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let n = [];
    for(let i=0; i<arr.length; i++){
    let val = fn(arr[i],i)
    n.push(val)
    }
    return n;
};