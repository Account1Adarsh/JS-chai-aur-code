let k= new String("Adarash");
let roll =new String("0902cs221005")
console.log(`My name is ${k} and my roll number is ${roll} .`)

console.log(k[0]);
console.log(k.length);

console.log(k.charAt(2));
console.log(k.indexOf("a"));


///substrig (from, till-1)
const rep= k.substring(1,4);
console.log(rep);

//slice can use negative value which is used to start from back
const tempo=k.slice(-7,4);
console.log(tempo);

//trim:

const l="   wonderful    ";
console.log(l);

console.log(l.trim());//remove starting and ending spaces usually when user gives it in input


///replace method of string object
const url=new String("https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14");


console.log(url.replace("?", " wow "));


//to check if a substr is present

console.log(url.includes("youtube"));
console.log(url.includes("hatbe"));

//to convert in array of string by splitting

console.log(url.split("."));





