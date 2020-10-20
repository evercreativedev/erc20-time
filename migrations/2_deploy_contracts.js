var TimeLock = artifacts.require("HashedTimelockERC20");

module.exports = function(developer, network, accounts) {
  developer.deploy(TimeLock);
};
