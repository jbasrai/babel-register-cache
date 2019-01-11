require('@babel/register')
const hello = require('./hello')

console.log(hello)

setInterval(() => {
	console.log('.')
}, 5000)
