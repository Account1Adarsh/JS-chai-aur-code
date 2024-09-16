//Two ways to create object: constructor and literal

//Singleton: when object created through constructor and is one of its kind object

//Object.create

// object literals:-

//it contains key and value pair always

// const jsuser={};//creation of object

const mysym=Symbol("key1");

const jsuser={
    name: "Adarsh",
    "full name": "Adarsh Kumar",
    [mysym]: "mykey1",//symbol must be put like this
    age: "20",
    location: "jaipur",
    email: "adarsh@the_explorer.com",
    isLoggedin: false,
    lastloggedin_days: ["Monday","Tuesday","Wednesday"]
}

//two ways to access the cvalue of objects through keys

//1: using object_name.key
//2nd using object_name["key"] in above object full name canot be accessed through dot

// console.log(jsuser.email);
// console.log(jsuser["age"]);

// console.log(jsuser["full name"]);//full name cannot be accesd through dot function

// value updation

jsuser["age"]="21";

// console.log(jsuser.age);

//To avoid updation in any object


// Object.freeze(js user);
// jsuser["age"]="18";

// console.log(jsuser.age);


//in js function can be treated as data type

jsuser.greetings= function(){
    console.log("Welcome js user");
}
jsuser.greetings2= function(){
    console.log(`Welcome js user, ${this.name}`);
}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());