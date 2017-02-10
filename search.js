module.exports={
	linearSearch:function(arr,value){
		for(let a=0;a<arr.length;a++){
			if(arr[a]==value){
				return "found"+a;
			}
		}
		return "not found";
	},
	binarySearch:function(arr, value){
    var startIndex  = 0,
        stopIndex   = arr.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
    while(arr[middle] != value && startIndex < stopIndex){
        if (value < arr[middle]){
            stopIndex = middle - 1;
        } else if (value > arr[middle]){
            startIndex = middle + 1;
        }   
        middle = Math.floor((stopIndex + startIndex)/2);
    }
    var index=(arr[middle] != value) ? -1 : middle;
    if(index<0)
    {
    	return "not found";
    }
    else
    {
    	return "found in"+index;
    }
}
}