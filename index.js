const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
   
// let totalBatteries = 0

// const batteries = (element1, element2) => {
//     return element1 + element2;
// };

// batteryBatches.reduce(batteries, 0);


const totalBatteries = batteryBatches.reduce(function(accumulator, element){return element + accumulator});
