function convertToDecimal(a,b,c,d) {
	angka1 = parseFloat(a)/100
	angka2 = parseFloat(b)/100
	angka3 = parseFloat(c)/100
	angka4 = parseFloat(d)/100
	
	console.log('['+angka1+' '+angka2+' '+angka3+' '+angka4+']')
}

const array = ['33%','98.1%','36.44%','100%']

convertToDecimal(...array)