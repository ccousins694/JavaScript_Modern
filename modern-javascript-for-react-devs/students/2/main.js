//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
 }  

const ex3 = () => {
    // const array1 = [1, 2, 3, 4, 5];
    // const array2 = ['a', 'b', 'c', 'd', 'e'];
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd'];
    console.log(interleave(array1, array2));
 }  

 const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}


//
// Your functions here...
//

// ex1
const countNumbers = (array) => {
    // console.log(array)
    let numberCounter = 0;
    for (let i=0; i < array.length; i++) {
        if(typeof(array[i]) == 'number') numberCounter++;
    } 
    return numberCounter; 
}

// ex2
const minNumber = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}

// ex3 : usage #1
// const interleave = (ray1, ray2) => { 
//     let result = ""
//     if(ray1.length !== ray2.length){
//     }
//     for (let i=0; i < ray1.length; i++){
//         result += ray1[i]
//         result += ray2 [i]
//     }
//     return result 
// }

// ex3 : usage #2
const interleave = (ray1, ray2) => {
    let result = ""
    if (ray1.length !== ray2.length) {
        return "Error: Array length mismatch"
    }
    for (let i = 0; i < ray1.length; i++) {
        result += ray1[i]
        result += ray2[i]
        //console.log('Error: Array length mismatch') 
    }
    return result
}


    // ex4
    const palindrome = (str) => {
        //splitStr takes original string and splits it
        const splitStr = str.split("")     
        //reverseStr takes splits string and reverses it
        const reverseStr = splitStr.reverse("")
        //joinStr takes reverse string and joins it 
        const newStr = reverseStr.join("")

        if(str === newStr){
            return true
        } else {
            return false
        }
    }
    
    //this is my function (below)
    // const palindrome = (str) => {
    //     // in the for loop, inside the parenthesis are the conditions; they include how loop should start and length of loop and incremementing loop
    //     for (let i = 0; i < str.length; i++){
    //         //do something...
    //         // console.log("forward: ", str[i])
    //         // console.log("backward: ", str[str.length-1-i])
    //         if(str[i] === str[str.length-1-i]){
    //             return true
    //         }else {
    //             return false
    //         }
    //     }

    // }


const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    ex4();
}

main();
