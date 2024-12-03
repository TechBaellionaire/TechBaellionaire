let userAddress;

async function connectWallet() {
  if (window.ethereum) {
    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById('connectWallet').innerText = 'Wallet Connected';
      document.getElementById('fundBalance').classList.remove('hidden');
      document.getElementById('donationForm').classList.remove('hidden');
      getFundBalance(); // Call function to fetch fund balance
    } catch (error) {
      console.error("Connection failed", error);
    }
  } else {
    alert("Please install MetaMask or a Base-compatible wallet.");
  }
}

async function getFundBalance() {
  // Placeholder for fetching the actual fund balance from smart contract
  const balance = 100; // Example balance, replace with actual contract call
  document.getElementById('balance').innerText = balance;
}

async function donateFunds(event) {
  event.preventDefault();
  const amount = document.getElementById('amount').value;
  
  // Placeholder for smart contract interaction to donate funds
  console.log(`User ${userAddress} is donating ${amount} BASE`);

  // Example confirmation message
  alert(`Thank you for donating ${amount} BASE!`);
  document.getElementById('amount').value = ''; // Clear the form
}
