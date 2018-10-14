const { getWeb3, getContractInstance } = require("./helpers");
const web3 = getWeb3();
const getInstance = getContractInstance(web3);


contract("EchCrowdsale", (accounts) => {

  it('deploys a contract', () => {
    const crowdsale =  getInstance("EchCrowdsale");


    assert.ok(crowdsale.options.address);
  });

  it('cap is 3 ether', async () => {
    const crowdsale =  getInstance("EchCrowdsale");

    const expectedCap = await crowdsale.methods.cap().call();
    const cap = 3000000000000000000;
    assert.equal(cap , expectedCap);
  });  
  
  it('can change owner of token', async () => {
    const crowdsale =  getInstance("EchCrowdsale");
    const token =  getInstance("EchToken");
    /*
    const initialWeiRaised = await crowdsale.methods.weiRaised().call();
    assert.equal(0, initialWeiRaised);
    */
    //Change owner to the crowdsale address
    const oldOwner = await token.methods.owner().call();
    const oldOwnerExpected = accounts[0];

    assert.strictEqual(oldOwner,oldOwnerExpected);
    
    const crowdsaleAddress = crowdsale.options.address;
    await token.methods.transferOwnership(crowdsaleAddress).send({from: accounts[0]});
    const newOwner = await token.methods.owner().call();
    const newOwnerExpected = crowdsaleAddress;

    assert.strictEqual(newOwner,newOwnerExpected);
   
  });   
  it('can buy token', async () => {
    const crowdsale =  getInstance("EchCrowdsale");
    const token =  getInstance("EchToken");

    const oldBalance = await token.methods.balanceOf(accounts[3]).call();
    assert.equal(0, oldBalance);
    //buy tokens
    const crowdsaleAddress = crowdsale.options.address;
    const weiValue = web3.utils.toWei( "0.005", 'ether');
    console.log(weiValue);
    await web3.eth.sendTransaction({from: accounts[3], to: crowdsaleAddress ,value: weiValue });
    const newBalance = await token.methods.balanceOf(accounts[3]).call();
    console.log(newBalance);
  });   

});
