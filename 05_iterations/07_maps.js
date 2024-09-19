const mynums= [1,2,3,4,5,6,7,8,9,10];

// let newNums = mynums.map((nums)=> nums+10)
// console.log(newNums);


//chaining in this it doesnot return immediatly but it get passed to next objectmethod

let newNums = mynums
            .map((nums)=> nums*10)
            .map((nums)=> nums+1)//map iterate over each element and can also return values
            .filter((nums)=> nums<=40)//return true values-filter
console.log(newNums);

