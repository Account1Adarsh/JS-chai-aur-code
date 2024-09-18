//for of

// [{},{},{}]


// for(const iterator of object){ here object is in common people language not the class object

// }

// const arr=[1,2,3,4,5];

// for(const num of arr){
//     console.log(num);
// }

// const greting="Hello world";

// for(const greet of greting){
//     console.log(greet);
// }

//Maps

const nap=new Map();
nap.set('IN',"INDIA");
nap.set('USA',"United States Of America");
nap.set('RS',"Russia");
nap.set('UK',"United Kindom");
nap.set('UAE',"United Arab Emirates");  

// console.log(nap);

// for(const key of nap){
//     console.log(key);
// }
for(const [key,value] of nap){
    console.log(key ,':-', value );
}

const myobj={
    'game1': "nfs",
    'game2': "spiderman",
}
for(const [key,value] of myobj){
    console.log(key+" : "+value);
}
