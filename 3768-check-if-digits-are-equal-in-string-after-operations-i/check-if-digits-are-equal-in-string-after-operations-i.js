/**
 * @param {string} s
 * @return {boolean}
 */
let hasSameDigits = function(s) {

    let digits = s.split('').map(Number);
    let n= digits.length;
    while(n>2){
        for (let i = 0; i < digits.length -1; i++){
            digits[i] = (digits[i] + digits[i+1])% 10
        }
        n--;
    }
    return digits[0] === digits[1];
};