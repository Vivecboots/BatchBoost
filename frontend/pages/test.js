import { useEffect } from 'react';
import { useContract } from '../utils/useContract';

export default function TestPage() {
  const contract = useContract();

  useEffect(() => {
    async function loadInfo() {
      if (contract) {
        const totalDeposits = await contract.totalDeposits();
        console.log(`Total Deposits: ${totalDeposits.toString()}`);
      }
    }

    loadInfo();
  }, [contract]);

  return <div>Check the console for contract info</div>;
}
