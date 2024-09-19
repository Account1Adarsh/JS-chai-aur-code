const coding=["cpp","js","py","java"];

// coding.forEach( function (val){
//     console.log(val);
// })


// //method 2
// coding.forEach( (items)=>{
//     console.log(items);
// })


//method 3

// function printme(items){
//     console.log(items);
// }

//coding.forEach(printme);//just provide reference of function don't execute it by ();

// coding.forEach((items,index,arr)=>{
//     console.log(items,index,arr);
// })

const myobj=[
    {
    languge_name: "java script",
    filename: "js"
    },
    {
        languge_name: "java",
        filename: "java"
    },
    {
        languge_name: "python",
        filename: "py"
    },
]

myobj.forEach((items)=>{
    console.log(`language name is ${items.languge_name} and finle name if ${items.filename}`);
})
