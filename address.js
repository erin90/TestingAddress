console.log('Testing Address');
var ethers = require('ethers')
var crypto = require('crypto')

const addresses = []
for(let i = 0; i< 5; i++){
    var id = crypto.randomBytes(32).toString('hex');
    var testAddress = "0x"+id
    addresses.push(testAddress)
}

console.log(addresses);

// var wallet = new ethers.Wallet(privateKey); setting up a new wallet