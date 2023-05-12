import { useEffect } from 'react';
import { useContract } from '../utils/useContract';

export default function BatchBoost() {
    const contract = useContract();

    useEffect(() => {
        async function fetchTotalDeposits() {
            if (contract) {
                const totalDeposits = await contract.getTotalDeposits();
                // ethers.js will return a BigNumber object for large numbers, so we format it to a string
                console.log(totalDeposits.toString());
            }
        }

        fetchTotalDeposits();
    }, [contract]); // Re-run whenever the `contract` changes

    return (
        <div>
            <h1>BatchBoost</h1>
        </div>
    );
}
