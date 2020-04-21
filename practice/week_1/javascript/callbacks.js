function functionName() {
    let text = "Hello there";

}

functionName();
functionName();
functionName();


function anotherFunction() {

    let number = 105;
    let text = "some other text";
    let otherTestToSurvive = "vdry important";
    return [otherTestToSurvive, text, number];



}
let myArray = anotherFunction();
let result = (10 + myArray[2] ) + 100;
console.log(result);


console.log();
Math.random();

function callBackReader(parameter) {
    console.log("callBackReader has started");
    if (typeof parameter === "function") {
        console.log("the datatypoe oif this value is a fucntion");

        setTimeout(parameter, 3000);

    } else {
        console.log("the parameter is holdoing somehting else, should only be a function");
    }

    console.log("callBackReader has ended");

}
let mySpecailFunction = function () {
    console.log("My Specail code run");

}

callBackReader (mySpecailFunction);


console.log(typeof "somthing");
console.log(Array.isArray(myArray));
