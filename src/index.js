module.exports = function reverse (n) {
    let numberReverse = n.toString().replace(/[^0-9]/g, '').split('').reverse().join('');
    return numberReverse 
}
