
// function chai(){
//     console.log("DB connected");
// }
// chai();

//this immediatly invoked function expression is used to exectue the function as soon as it is written its mainly used during connection of databases and to avoid global scope variables creation so its in a function above can also do the same but we have this special function as well

// (function chai(){
// named iiife
//     console.log("DB connected");
// })();

//()(); first is for funtion wrap  and second is for exectuion

(()=>{
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected ${name}`);
})("Adarsh");

