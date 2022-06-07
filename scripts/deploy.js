const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const deployedHelloWorld = await HelloWorld.deploy("Hello World!");
    console.log(`Contract deployed to address: ${deployedHelloWorld.address}`);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })