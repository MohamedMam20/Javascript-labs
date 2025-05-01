// b- Try to call the function before definition line? check functionsScript file
// c- Call the function with 3 values then print the return
console.log(printVariables(10,20,30));
// output [10,20,30]
// answer is the same for b and c 
// ====================================================================================

function printVariables(value1,value2,value3=0){
    var localVar = 3;
    testingVar = 5;
    console.log(arguments);
    console.log(`localVar = ${localVar} & testingVar = ${testingVar}`);
    console.log(`value1 = ${value1}} & value2 = ${value2} & value3 = ${value3}`);
    return [value1,value2,value3];
}
// ====================================================================================
// f- Define var localVar=3; testingVar=5; inside the function’s 
// block Before calling the function try to console.log the values 
// localVar and testingVar.??
//g- In step f , call the function and try to print localVar and testingVar?
console.log(localVar);
console.log(testingVar);
// local var wil conosole.log error because itis declared with var (after and before calling the function )

//testing var will console.log error before calling the function but after calling the function it will be 
//printed normally because itis global variable
// ====================================================================================
// 2- Repeat step 1 but define the function as function expression

var printVariables2 = function(value1, value2, value3) {
    var localVar = 3;    
    testingVar = 5;      
    console.log(arguments);
    console.log(`localVar = ${localVar} & testingVar = ${testingVar}`);
    console.log(`value1 = ${value1}} & value2 = ${value2} & value3 = ${value3}`);
    return [value1, value2, value3];
}

// Notice that function as function expression is NOT hoisted which means You cannot call it before its definition.
// ====================================================================================

// 4- Functions accept 2 variables and return the summation result 

function sum(a=0, b=0) {
    if (isNaN(a) || isNaN(b)) {
        return "Invalid input, Please enter numbers";
    }
    return a + b;
}

//a- What if you insert less than 2 inputs?
console.log(sum(10)); 
// outputs ==> NaN
// to solve it make default value for b as shown in the function ==> 10

//b- What if the input is not a Number?
console.log(sum("z")); 
// ==> Invalid input, Please enter numbers