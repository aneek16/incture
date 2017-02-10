var search=require("./search.js")
var sort=require("./sort.js")
arr=[1,5,4,3,8]
console.log(sort.bubbleSort(arr))
console.log(sort.selectionSort(arr))
console.log(search.linearSearch(arr,5))
console.log(search.binarySearch(arr,10))
