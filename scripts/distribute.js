

async function distribute() {
  const machiAddress = '0xC426b21887C37a6fe4D543D732E3e5b07dc8EEE4';
  const gameAddress = '0xB3aBD3D2957B7feCaFdF274C7353Bc490deA3F10';
  const maxAmount = '0x' + 'f'.repeat(62);
  const signer = await hre.ethers.provider.getSigner();
  
  const machiContract = await new ethers.Contract(machiAddress, process.env.ABI, signer);
  const gameContract = await hre.ethers.getContractAt('IGame', gameAddress);

  // const airdrop = ["danchainshot.eth", "yowl.eth", "makeavely.eth", "kdawg.eth", "notyowl.eth",
  //   "moon.eth", "cdgmachado.eth", "atuan.eth", "nic.eth",
  //   "max.eth", "yourgrandma.eth", "topanga.eth", "jonathanchainshot.eth"];

    await machiContract.approve(gameAddress, maxAmount);
    const tx = await gameContract.win(machiAddress);
    const receipt = await tx.wait();
    console.log(receipt);


    console.log('Machicoins sent!');
}



distribute()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });