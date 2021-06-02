const { assert } = require("chai");

describe("MachiCoin", function() {
  let machiContract;
  let signer;
  const initialSupply = ethers.utils.parseEther('1000');
  before(async () => {
    const MachiContract = await ethers.getContractFactory('MachiCoin');
    machiContract = await MachiContract.deploy(initialSupply);
    await machiContract.deployed();

    signer = await ethers.provider.getSigner(0);
  });

  it("should return the total supply", async function() {
    const mainHolder = await signer.getAddress();
    const mainHolderBalance = await machiContract.balanceOf(mainHolder);

    assert.equal(mainHolderBalance.toString(), initialSupply.toString());
  });
});
