// Now create the following functions: 
// 1- Function accept a full name string and convert each letter of 
// first world to Capital and the remaining to small (Pascal  Case).
//  //Example : 'the quick brown fox'
//Output : 'The Quick Brown Fox'

function first_char_uppercase(sentence){
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(" ");
}
// ===========================================================================================================
// 2- Function that accept a sentence and return the longest word within the input
//Example : 'Web Development Tutorial'
//Output : 'Development

function longest_Word (sentence){
    let words_arr = sentence.split(" ");
    let longest_word = "";
    for(let word of words_arr)
        if(word.length > longest_Word.length)
            longest_Word = word;
    
    return longest_Word;
}
// ===========================================================================================================

// 3- Write a JavaScript Function that returns a passed string with letters in alphabetical order
//Example : javascript
//Output : aacijprstv
function sort_word(word){
    return word.split("").sort().join("");
}
// ===========================================================================================================

// 4- Write a function that takes two arrays and returns an array of common elements using filter() or a loop.
//Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].

function intersection_two_arrays(arr1,arr2){
    let result = arr1.filter(item => arr2.includes(item));
    return result;
}
// ===========================================================================================================
// 5- make Array of duplicates numbers and remove it in new array
function removeDublicates(arr){
    let result = [];
    for(let item in arr)
        if(!result.includes(item))
            result.push(item)
    return result;
}
// ===========================================================================================================






