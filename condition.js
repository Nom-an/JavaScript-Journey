// 10% discount 

var apple = 400;

if(apple>200){

    var discount = apple * 10 / 100;
    var pay = apple-discount;
    console.log(pay);
}
apple=100;

if(apple<200){
    // 50% discount
    discount= apple* 50/100;
    pay= apple - discount;
    console.log( "discounted amount " + pay);
}

// ternary

const age = 20;

 age>=20 ? console.log("you can vote") : console.log("you cant't vote");