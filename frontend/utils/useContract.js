import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import BatchBoost from '../build/contracts/BatchBoost.json'; // adjust path if necessary

// This hook will load and prepare the contract
export function useContract() {
    const [contract, setContract] = useState(null);
    
    useEffect(() => {
        async function loadContract() {
            // Check if MetaMask is connected
            if (typeof window.ethereum !== 'undefined') {
                // New ethers.js instance
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                // Get the contract address (replace it with your contract address)
                const contractAddress = '0x8D4e7CF12c66323dc2c703A43566E498db9a97d6';

                // Create a new contract instance
                const contractInstance = new Contract(contractAddress, BatchBoost.abi, signer);
                
                setContract(contractInstance);
            } else {
                console.log("MetaMask is not installed!");
            }
        }

        loadContract();
    }, []);

    return contract;
}
