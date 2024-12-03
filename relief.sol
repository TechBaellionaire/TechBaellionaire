// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmergencyReliefFund {
    address public owner;
    uint256 public totalDonations;
    mapping(address => uint256) public donations;

    event DonationReceived(address indexed donor, uint256 amount);
    event FundsWithdrawn(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to receive donations
    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than zero");
        donations[msg.sender] += msg.value;
        totalDonations += msg.value;

        emit DonationReceived(msg.sender, msg.value);
    }

    // Function to withdraw funds (only accessible by the owner)
    function withdrawFunds(address payable _recipient, uint256 _amount) public onlyOwner {
        require(_amount <= address(this).balance, "Insufficient balance in the contract");
        _recipient.transfer(_amount);

        emit FundsWithdrawn(_recipient, _amount);
    }

    // Function to get the contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
