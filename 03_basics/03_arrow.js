const user={
    username: "Adarsh",
    reg_fee: "999",
    welcome_msg: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
// user.welcome_msg();
user.username="Sam";
// user.welcome_msg();

//this cannot be used on function 

//when this is called outside any function/object it return empty object in node enviorement

//when this is used in function then it returns number of things like global scope and others details

// function chai(){
//     let username="adarsh";
//     console.log(this);
//     console.log(this.username);
    
// }
// chai();


// let chai= function(){
//     let username="adarsh";
//     console.log(this);
//     console.log(this.username);
// }
// chai();

// let chai= () => {//arrow function
//     let username="adarsh";
//     console.log(this);
//     console.log(this.username);
// }
// chai();


//arrow function ()=>{}

// const addtwo=(num1,num2)=>{
//         return num1+num2;
// }

//explicit return ueses return keyword
//implicite no need to use return when not using curly braces

//const addtwo=(num1,num2)=>num1+num2

// const addtwo=(num1,num2)=>( num1+num2 );


//to return objects:

const addtwo=(num1,num2)=>({username:" Adarsh "})




console.log(addtwo(2,7));
    