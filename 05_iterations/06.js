const coding=["cpp","js","py","java"];

// const yo=coding.forEach( function (val){
//     console.log(val);
//     return val;
// })  //this does not returns any value;
// console.log(yo);


//filter

const mynums=[1,2,3,4,5,6,7,8,9,10];

// let newnums=mynums.filter((num)=>{
//     return num>4;
// } )

// console.log(newnums);
const newnums =[];
mynums.forEach( (val)=>{
    if(val>4){
        newnums.push(val);
    }
})  //this does not returns any value;
console.log(newnums);
