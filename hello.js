module.exports = 'hello'

setTimeout(() => {
	const world = require('./world')
	console.log(world)
}, 1000)
