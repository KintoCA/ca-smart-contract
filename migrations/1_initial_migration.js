const ChordusArena = artifacts.require("ChordusArena");

module.exports = function (deployer) {
  deployer.deploy(ChordusArena, 
    "ChordusArena",
    "CAT", 
    "https://dweb.link/ipfs/QmSAPSGefGuKsTv9uvt84RZxkX1QAPTLzSMtcqVHnCnjRu");
};
