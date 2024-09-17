// console.log("A");
// console.log("L");
// console.log("A");
// console.log("R");
// console.log("M");

// function fun_name(){
// } 

function saymyname(){
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("R");
    console.log("M");
}

//saymyname  function reference and saymyname() is execution

// saymyname();


// function add(num1,num2){
//     console.log(num1+num2);
// }

// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(4,5));
// let num3=add(4,5);
// console.log(num3);

// function login_user_msg(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return ;
//     }
//     return `${username} just logged in`;
// }
//undefined is false

//console.log(login_user_msg());

///When value is not passed the it gives undefiined

//we can set default values as well in parameters
// function login_user_msg1( username=" System " ){
//     // if(username===undefined){
//     //     console.log("Please enter a username");
//     //     return ;
//     // }
//     return `${username} just logged in`;
// }

// console.log(login_user_msg1());


// Rest operator defined similar to spread operator

// function restop(val1, val2, ...num){
//     return num;
// }
// console.log(restop(20,15,30,60,70));



const user={
    username: "Adarsh",
    id: "0902cs221005"
}

function name(anyobj){
    console.log(`The username is ${anyobj.username} and the id is ${anyobj.id}`);
}

 name(user);

 const arr=[10,20,30,40]

 function arrfun(newarr){
    return newarr[1];
 }

 console.log(arrfun(arr));
 
