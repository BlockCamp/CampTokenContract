pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract CampToken is StandardToken {
    string public name = "BlockCampToken";
    string public symbol = "CAMP";
    uint public decimals = 18;

    uint public INITIAL_SUPPLY = 10000000 * (10 ** decimals);

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}