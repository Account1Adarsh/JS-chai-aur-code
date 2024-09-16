const marvelheroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","arrow"]

// marvelheroes.push(dc_heroes);

//marvelheroes.concat(dc_heroes); this needed to be stored somewhere


//conact returns new array
// const all_heroes=marvelheroes.concat(dc_heroes);
// console.log(all_heroes);

//..........................spread operator........................
const all_new_heroes=[...marvelheroes,...dc_heroes];
//console.log(all_new_heroes);


//????????????????????????????????????????????????????????????

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const reusablearr=anotherarray.flat(Infinity)//in method pass depth;
//console.log(reusablearr);



//////////////////////////////////////////////////////////////////////////////

// console.log(Array.isArray("Wow Adarash"));
// console.log(Array.from("Wow Adarsh"));

// console.log(Array.from({name: "Adarsh"}));//intresting case

let sc1=10;
let sc2=20;
let sc3=30;
let sc4=40;
let sc5=50;

//to form an array from these dicreate variables we use Array.of
console.log(Array.of(sc1,sc2,sc3,sc4,sc5));




