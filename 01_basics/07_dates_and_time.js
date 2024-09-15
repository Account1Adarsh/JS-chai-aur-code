//dates

let myDates=new Date();
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toJSON());

// let createdate=new Date(2023,1,32);
// console.log(createdate.toDateString());----0 based indexing for months

// let createdate=new Date(2023,1,32,5,10);
// console.log(createdate.toLocaleString());

let mydate=new Date("2023-01-15");
// console.log(mydate.toDateString());------1 based indexing of month when string is passed

//timeStamps

let myTimestamp=Date.now();

// console.log(myTimestamp);
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000)); //to convert in seconds


let da=new Date();
console.log(da.getDay);
console.log(da.getFullYear);


