// Task 3
function logIndex(arr){
  let index = 0
  function timer(){
    if (index < arr.length){
      console.log(`Index: ${index} of element: ${arr[index++]}`)
      setTimeout(timer, 3000)
    }
  }
  timer()
}

logIndex([10, 12, 15, 21])