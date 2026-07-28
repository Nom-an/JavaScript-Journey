const mobile = {
    brand: 'samsung',
    price : 25000,
    color: 'black',
    isNew:true,
}
//  of array 
//   in object 

// for ( const prop in mobile){
//     console.log(prop);
//     console.log( mobile[prop]);
// }

const key = Object.keys(mobile);
console.log(key);
for( const keys of key){
    console.log(keys , ':', mobile[keys]);
}
