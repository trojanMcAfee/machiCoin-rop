


async function main() {
  const initialSupply = ethers.utils.parseEther('1500');

  const MachiContract = await hre.ethers.getContractFactory("MachiCoin");
  const machiContract = await MachiContract.deploy(initialSupply);

  const tx = await machiContract.deployed();
  const receipt = await tx.deployTransaction.wait();

  const signer = hre.ethers.provider.getSigner();
  const holderAddress = signer.getAddress();
  const balance = hre.ethers.utils.formatEther(await machiContract.balanceOf(holderAddress)).toString();

  console.log(receipt);
  console.log("MachiCoin deployed to:", machiContract.address, ' with a balance of ', balance);
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
