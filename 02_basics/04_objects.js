const tinderUser= new Object();

const tinderUser1={};//non-singleton object
tinderUser.id="12345";
tinderUser.name="Sammy";
tinderUser.isloggedin=false;


// console.log(tinderUser);

const regularuser={
    email: "some@gmail.com",
    fullname:{
        usersfullname: {
            firstname: "Some ",
            lastname: "thing ",
        }
    }
}

// console.log(regularuser.fullname.usersfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"d"}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};//spreading

console.log(obj3);


//usually when we get input from database its in the form of array of objects

const user1=[
    {
        id: 1,
        email: "a@exp.com"
    },
    {

    },
    {

    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return array Object.keys(object_name);
// console.log(Object.values(tinderUser));


// console.log(Object.entries(tinderUser));

//to check if that value exist in array 


// console.log(tinderUser.hasOwnProperty('isloggedin'));
// console.log(tinderUser.hasOwnProperty('islogged'));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course={
        coursename: "Js in Hindi",
        price: "Free",
        courseInstructor: "Hitesh Sir"
}

//console.log(course.courseInstructor);
 const {courseInstructor}=course;
 console.log(courseInstructor);
 
 




