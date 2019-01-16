
console.log('START')
setTimeout(_ => console.log('setTimeout'));
Promise.resolve().then(_ => console.log('Promise'));
// requestAnimationFrame(_ => console.log('requestAnimationFrame'))
console.log('FINISH')