const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries =  batteryBatches
// let number = 0;
// batteryBatches.forEach(totalBatteries => {
//   number = number + totalBatteries.number
// })
// console.log("NUMBER :",  number)

// const totalBatteries =  batteryBatches
//  let sum = [4, 5, 3, 4, 4, 6, 5].reduce(function(previousValue, currentValue){
//   return previousValue + currentValue
//  }, 0)
//  console.log("SUM:", sum)


const totalBatteries = batteryBatches.reduce((total , item)=> total + item
 )
// console.log (totalPrice)