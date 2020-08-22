const Token = artifacts.require("./Token");
require("chai").use(require("chai-as-promised")).should();
/* 
                Fetch token from blockchain
                read its name
                compare w/ expected value
*/
contract("Token", (accounts) => {
  const name = "KAME Token";
  const symbol = "KAME";
  const decimals = "18";
  const totalSupply = "1000000000000000000000000";
  let token;
  beforeEach(async () => {
    token = await Token.deployed();
  });

  describe("deployement", () => {
    it("tracks the name", async () => {
      const result = await token.name();
      result.should.equal(name);
    });

    it("tracks the symbol", async () => {
      const result = await token.symbol();
      result.should.equal(symbol);
    });

    it("tracks the decimals", async () => {
      const result = await token.decimals();
      result.toString().should.equal(decimals);
    });

    it("tracks the total supply", async () => {
      const result = await token.totalSupply();
      result.toString().should.equal(totalSupply);
    });
  });
});
