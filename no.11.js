function compressArray(original) {
 
	var compressed = [];

	var copy = original.slice(0);

	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		for (var j = 0; j < copy.length; j++) {
			if (original[i] == copy[j]) {
				myCount++;
				delete copy[j];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};
console.log(compressArray(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]))