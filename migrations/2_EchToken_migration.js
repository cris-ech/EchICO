var EchToken = artifacts.require("EchTimedToken");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(EchToken);
};