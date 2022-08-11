
// Problem:1  radianToDegree
// function radianToDegree(radian)
// {
//     if(typeof radian !== 'number') {
//         return 'Please enter a number.';    
//     }
//    else {
//         const pi = Math.PI;
//         const calculation = radian * (180/pi);
//         const degree = calculation.toFixed(2)
//         return degree;
//    }
// }         
// console.log(radianToDegree(199));



// Problem:2  isJavaScriptFile 
// function isJavaScriptFile (String){
//     if(typeof String !== 'string') {
//         return 'Please enter only string.';
//     }
//     const divided = String.split(".");
//     const fileName = divided[divided.length - 1];
//     if(fileName === 'js') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isJavaScriptFile(00.js));


// Problem 3: oilPrice
// function oilPrice(diesel, petrol, octane){
//     if(typeof diesel !== 'number') {
//         return 'Diesel quantity enter a number';
//     }
//     else if(typeof petrol !== 'number') {
//         return 'Petrol quantity enter a number';
//     }
//     else if(typeof octane !== 'number') {
//         return 'Octane quantity enter a number';
//     }
//     else {
//         return (114 * diesel) + (130 * petrol) + (135 * octane);
//     }

// }
// console.log(oilPrice(1, 2, 1));

// Problem 4: publicBusFare 
function publicBusFare(public) {
    if(typeof public !== 'string') {
        return 'Please enter a number.';
    }
    
    
}