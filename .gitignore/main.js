const SHA256 = require('crypto-js/sha256');

class Block{
	constractor(index, timestamp, data, previousHash =''){
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.bash = '';
	}
	
	calculateHash(){
		return SHA256(this.index + this.previousHash +this.timestamp + JSON.stringify(this.data)).toString();
	}
}

class Blockchain{
	constructor(){
	this.chain = [this.createGenesisBlock()];
	}
	
	createGenesisBlock(){
		return new Block(0, "01/01/2020", "Genesis block", "0");
	}
	getlatestBlock(){
		return this.chain[this.chain.lenth - 1];
	}
	addBlock(newBlock){
		newBlock.previousHash =this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}
}

let energyCoin = new Blockchain();
energyCoin.addBlock(new Block(1, "10/07/2020", { amount: 4}));
energyCoin.addBlock(new Block(2, "12/07/2020", { amount: 10}));

console.log(JSON.stringify(energyCoin, null, 4));
