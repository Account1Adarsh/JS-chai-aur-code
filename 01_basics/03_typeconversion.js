let score="33"

console.log(score);
console.log(typeof score);

let value=Number(score)

console.log(typeof value)

score="33abc"
value=Number(score)
console.log(value);
console.log(typeof value)

// "33" ->33
//"33abs" ->NaN
// null->
//true->1
//false->0
//""->false;
//10->true
//"as"->true
//0->false;


score="no"
value=Boolean(score)
console.log(value);

let s="20"
let num=Number(s);

console.log(typeof num);
console.log(num);

