const ChordusArena = artifacts.require("ChordusArena");

module.exports = function (deployer) {
  deployer.deploy(ChordusArena, 
    "ChordusArena",
    "CAT", 
    "https://dweb.link/ipfs/QmSAPSGefGuKsTv9uvt84RZxkX1QAPTLzSMtcqVHnCnjRu",
    "https://dweb.link/ipfs/QmVZns4E9L1cbSUE3NcrWMxZw8tLA13WqVctiNKs2RbH8Z");
};
