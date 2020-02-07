interface Length {
	length: number
}
function log<A extends Length>(value: A): A {
	console.log(value, value.length)
	return value
}
log('1')
log([])
log({length:1})