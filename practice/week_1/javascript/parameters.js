function myFunction(option) {

    console.log("The Value of the option parameter is " + option);

    if (option === 0) {
        console.log("Everything is good");
    } else if (option === 1) {
        console.log("An error happened")

    } else if (option === -1) {
        console.log("Everything is bad");
    }
}

myFunction();

function anotherPara(add){
    console.log("there should be " + add);

    if (add === 0){
        console.log("there is nothing todo");

    } else if (add === 1) {
        console.log("there is somthing todo");

    }
}
anotherPara()
