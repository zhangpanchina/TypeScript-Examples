const version = '1.0.0'

function doSomething() {
    console.log('do something')
}

function module(options) {
    console.log(options)
}

module.version = version
module.doSomething = doSomething

module.exports = module