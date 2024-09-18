// const userEmail="sample@gmail.com";
// if(userEmail){
//     console.log("Got the user Email");
// }
// else{
//     console.log("Dont have user Email");
// }


//  +++++++++Falsey value: values assumed to be false lie empty string


// false, 0, -0, BigInt 0n, empty String, null, undefined, Nan

//++++++++++Truthy value

// "0"==true;  `false`==true; " "==true; []==true; {}==true; functio(){};


// const myobj={};
// if(Object.keys(myobj).length===0){
//     console.log("obkect is empty");
//     //Here object.keys() return array of keys
// }


//nullish collicence operator: This is usually used to choose between two results 
//as it is possible that database is  giving 2 outputs one has null so to avoid such cases and not create mess of code we can go for other value

//when two acceptable values are assiged then the first one get assigned


let val1;
//val1 = 5 ?? 10;
//val1 =null ?? 10;  //avoid null or undefined
//val =undefnined ?? 15
//val= null ?? 10 ?? 20 always first assigned value is asssigned if noty null or undefined 

// console.log(val1);

//ternary operator
//condition? true:  false;

const price=100;
price>=80 ? console.log("more than 80"): console.log("less than equal to 80");


