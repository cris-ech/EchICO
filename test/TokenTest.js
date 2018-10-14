/*const { getWeb3, getContractInstance } = require("./helpers");
const web3 = getWeb3();
const getInstance = getContractInstance(web3);


contract("EchToken", (accounts) => {

  it('deploys a contract', () => {
    const token =  getInstance("EchToken");
    //console.log(token);

    assert.ok(token.options.address);
  });
  
  it('can mint tokens', async () => {
    const token = getInstance("EchToken");
    
    await token.methods.mint(accounts[2],1000).send({from: accounts[0]});
    const n_tokens = await token.methods.balanceOf(accounts[2]).call();
    assert.equal(n_tokens, 1000);
    
  });

  it('Only owner can mint', async () => {
    const token = getInstance("EchToken");
    
    let canMint = false;
    try{
    canMint = await token.methods.mint(accounts[2],1000).send({from: accounts[1]});
    }
    catch(err){
    assert.equal(canMint,false);
    }
  });

  it('change owner', async () => {
    const token = getInstance("EchToken");
   
    const oldOwner = await token.methods.owner().call();

    await token.methods.transferOwnership(accounts[2]).send({from: accounts[0]});
    const newOwner = await token.methods.owner().call();

    assert.notStrictEqual(oldOwner, accounts[0]);
    assert.notStrictEqual(newOwner, accounts[2]);
  });

});
*/