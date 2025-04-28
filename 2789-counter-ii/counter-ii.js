/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   let num = init;
   return{
   increment: () => ++num,
   decrement: () => --num,
   reset: () => (num = init),
   };
};

const Counter = createCounter
(5);
let answer = [];
answer.push(Counter.increment());
answer.push(Counter.reset());
answer.push(Counter.decrement());
console.log(answer);
