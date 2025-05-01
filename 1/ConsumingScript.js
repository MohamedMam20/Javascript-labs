var result= printVariables(5,10,30);
console.log(result);

// a- try to console.log the values of value1,value2,value3 on consumingScript.js file ? 
// ==> [5,10,30]
// =====================================================================================================
// b- Try to call the function before definition line? 
// ==> check functionsScript file
// =====================================================================================================
// d- Try to call the function with less than 3 parameters  printVariables(3,5) .
console.log(printVariables(3,5));
// ==> [3,5,undefined]
// =====================================================================================================
// Then solve the problem of undefined variables
// to solve this problem a default value is added to function parameters if itis not assigned
// function printVariables(value1,value2,value3=0)
// =====================================================================================================
// e- What if you call the function with too many parameters ? (more than 3)
console.log(printVariables(3,5,4,3,1,0));
// all other values will be ignored & the output will be [3,5,4] only
// =====================================================================================================
// Can you print them using (arguments)?
// yes if we used console.log(arguments) inside the function block all arguments will be printed
// ==> [3, 5, 4, 3, 1, 0]
// =====================================================================================================
// f- Define var localVar=3; testingVar=5; inside the function’s 
// block Before calling the function try to console.log the values 
// localVar and testingVar.??
//g- In step f , call the function and try to print localVar and testingVar?
// ==> check functionsScript.js file for answer
// =====================================================================================================
// 2- Repeat step 1 but define the function as function expression
// ==> check functionsScript.js file for answer
// =====================================================================================================

