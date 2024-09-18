//if
// let condition=true;
// if(condition){
//     //scope if condition==true else it dosent execute
// }

// let isUserLoggedin=true;
// if(isUserLoggedin){
//     console.log(`Yes, user is logged in`);
// }

// if(2=="2"){
//     console.log("executed");
// }

//strict cheacking

if(2==="2"){
    //not executed
}

// < > <= >= == === != !==


// let temp=28;
// if(temp<50){
//     console.log("less than 50");
// }
// else{
//     console.log(`temperature is greater than 50`);
    
// }
// console.log("always executes");

// const score=200;

// if(score>100){
//         const power="fly";
//         console.log(`User power: ${power}`);
// }

//shorthand notation

// let balance=1000;

// // if(balance>500) console.log("test"),console.log("test2");  prefer not to do like this just execute one line of code from an condition if not using braces

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("greater than equal to 900");
// }



const userloggedin=true;
const debit_card=true;
const loggedinfromgoogle=false;
const loggedinfromemail=true;
if(userloggedin && debit_card && 2==2){
    console.log("allowed to buy courses");
}

if(loggedinfromgoogle||loggedinfromemail){
    console.log(`User logged in: `);
}

