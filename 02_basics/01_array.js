const myarr=[1,2,3,4,"Adarsh", 'a'];

console.log(myarr[0]);

const myarr2=new Array(1,2,3,4);
console.log(myarr2[3]);


// Array methods

// myarr.push(6);
// myarr.push(7);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);


// // array unshift timecomplexity O(n); To add element in front

// myarr.unshift(12);//push front
// console.log(myarr);

// myarr.shift();//pop front
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

const newarr=myarr.join();//adds all the element in the form of string comma seprated
// console.log(myarr);
// console.log(newarr);



//slice or splice

console.log("A", myarr);

const tev=myarr.slice(1,3);
console.log(tev);
console.log("B", myarr);

const ket=myarr.splice(1,3);
console.log(ket);
console.log("A", myarr);





