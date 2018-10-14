var EchToken = artifacts.require("EchToken");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(EchToken);
};