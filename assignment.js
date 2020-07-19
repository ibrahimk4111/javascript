/**feetToMile */
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return (mile);
}
var mile = feetToMile(1000000);
console.log(mile);
/**end of feetToMile */


/**woodCalculator */
function woodCalculator(chair, table, bed){
    var totalWood = chair*1 + table*3 + bed*5;
    return (totalWood);
}
//chair, table, bed
var wood = woodCalculator(12,10,3);
console.log(wood);
/**end of woodCalculator */


/**brickCalculator */
function brickCalculator(floor){
    var totalBrick = 0;
    if (floor<=10){
        totalBrick = (floor * 15000);
        return (totalBrick);    
    }
    
    else if(floor>10 && floor<=20){
        floor = floor - 10;
        totalBrick = ((floor * 12000) + 150000);
        return (totalBrick);
    }
    else{
        floor = floor - 20;
        totalBrick = ((floor * 10000) + 270000);
        return (totalBrick);
    }
}
var brick = brickCalculator(23);
console.log(brick);
/**end of brickCalculator */


// /**tinyFriend*/
// function tinyFriend(name){
//     var max = name[0].length;
//     for(var i = 0, i <= name.length, i++){
//         var element = name[i].length;
//         if(element > max){
//             max = element;
//         }
//         return (max);
//     }
// }

// var friend = tinyFriend('Rahima','Karim','komolesh','Motu');
// console.log (friend);
// /**end of tinyFriend*/