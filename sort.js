module.exports={
	bubbleSort:function (items){
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
	},
	selectionSort:function (items){
    var length = items.length;
    for (var i = 0; i < length - 1; i++) {
        
        var min = i; 
        for (var j = i + 1; j < length; j++) { 
            if (items[j] < items[min]) { 
                min = j; 
            }
        }
        if (min != i) {
            
             
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
}
}
return items;
}
}