//Reduce

// const arr1=[1,2,3,4,5]
// const initialvalue=0;
// const sumWithinitial = arr1.reduce(
//     (accumulator, currentvalue)=> accumulator+currentvalue,initialvalue
// );

// console.log(sumWithinitial);



//basic function: 
const mynums=[1,2,3,4]

// const mytotal=mynums.reduce(function (acc,curr) {
//     console.log(`value of acc: ${acc} and curr val is ${curr}`);
//     return acc+curr
// }, 0 )

//arrow function
const mytotal=mynums.reduce((acc,curr)=>(acc+curr),0);

// const mytotal = mynums.reduce(
//     (acc,curr)=>acc*curr,1
// );
console.log(mytotal);

const shopping_cart=[
    {
        itemname: "js course",
        price: 999
    },
    {
        itemname: "data science course",
        price: 12999
    },
    {
        itemname: "dsa course",
        price: 3999
    },
    {
        itemname: "mobile course",
        price: 5999
    }
]

const total=shopping_cart.reduce((acc,random)=>(acc+random.price),0);
console.log(total);


