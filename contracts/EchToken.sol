pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title EchToken
 * @dev Very simple ERC20 mintable token to use in a crowdsale
 */
contract  EchTimedToken is Ownable, MintableToken {

  string public constant name = "EchTimedToken";
  string public constant symbol = "ECHT";
  uint8 public constant decimals = 18;


}