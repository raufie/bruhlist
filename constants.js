module.exports = {
    "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maxAddresses",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "addressesWhitelisted",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "maxAddresses",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "whitelistedAddresses",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "addAddressToWhitelist",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      contractAddress: "0xe48d0e1f48b7A9F5EDC6B351dB0590896Fb47b60"
    
}