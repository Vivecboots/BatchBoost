const FakeUSDT = artifacts.require("FakeUSDT");
const BatchBoost = artifacts.require("BatchBoost");

module.exports = async function (deployer) {
  await deployer.deploy(FakeUSDT);
  const fakeUSDT = await FakeUSDT.deployed();

  await deployer.deploy(BatchBoost, fakeUSDT.address, fakeUSDT.address);
};
