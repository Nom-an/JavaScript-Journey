function hello (){
    console.log("I'm a function");

}

hello();


function additionMachine (input1, input2){
    let sum = input1 + input2;
    console.log("The sum is : " + sum);

}

additionMachine(10,23);


function divisionMachine ( input1, input2 ){
    div = input1 / input2;
    console.log(" The division result is "+ div);
    return div;
}

// divisionMachine(60,20);


const result = divisionMachine(60, 20);
console.log(result);