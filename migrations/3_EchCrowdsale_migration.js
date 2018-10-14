var EchCrowdsale = artifacts.require("EchCrowdsale");
var EchToken = artifacts.require("EchToken");


module.exports = function(deployer , network, accounts) {
  // deployment steps
  var echAddress = EchToken.address;
  console.log('\n'+ "la direccion del token es: " + echAddress + '\n');
  var rate = new web3.BigNumber(200);
  var wallet = accounts[0];
  console.log('\n' + "la direccion del wallet es: " + wallet + '\n');
  var cap = new web3.BigNumber(3000000000000000000);
  deployer.deploy(EchCrowdsale, rate, wallet, cap, echAddress);
};

