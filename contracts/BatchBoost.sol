pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BatchBoost {
    address public USDT_TOKEN_ADDRESS;
    address public TARGET_TOKEN_ADDRESS;

    IERC20 public usdtToken;
    IERC20 public targetToken;

    mapping(address => uint256) public deposits;
    uint256 public totalDeposits;

    constructor(address _usdtTokenAddress, address _targetTokenAddress) {
        USDT_TOKEN_ADDRESS = _usdtTokenAddress;
        TARGET_TOKEN_ADDRESS = _targetTokenAddress;

        usdtToken = IERC20(USDT_TOKEN_ADDRESS);
        targetToken = IERC20(TARGET_TOKEN_ADDRESS);
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        usdtToken.transferFrom(msg.sender, address(this), amount);
        deposits[msg.sender] += amount;
        totalDeposits += amount;
    }

    // Additional functions for purchasing, distribution, and withdrawal will be added here
}
