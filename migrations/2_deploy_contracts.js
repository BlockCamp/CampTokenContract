var CampToken = artifacts.require("./CampToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CampToken);
};
