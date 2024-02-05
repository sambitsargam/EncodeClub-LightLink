import { useEffect, useState } from 'react';
import { getTransactionList, Transaction } from '../services/explorer.ts';
import InteractionsCard from '../components/InteractionsCard.tsx';
import VolumeCard from '../components/VolumeCard.tsx';
import FeeCard from '../components/FeeCard.tsx';
import Last10Transactions from '../components/Last10Transactions.tsx';
import Header from '../components/Header.tsx';

const AddressPage = () => {
  const [address, setAddress] = useState<string>('');
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedAddress = window.location.search.split('=')[1];
    if (!storedAddress || storedAddress.length !== 42 || storedAddress.slice(0, 2) !== '0x') {
      window.location.search = '';
      return;
    }
    setAddress(storedAddress);
    fetchTransactionList(storedAddress);
  }, []);

  const fetchTransactionList = async (addr: string) => {
    const transactions: Transaction[] = await getTransactionList(addr);
    setTransactionList(transactions);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter') return;
    if (address === '' || address.length !== 42 || !address.startsWith('0x')) {
      alert('Please enter a valid address');
      return;
    }
    window.location.search = `?address=${address}`;
    fetchTransactionList(address);
  };

  return (
    <>
      <Header />
      <div className="grid mt-20 place-items-center">
        <div className="grid place-items-center">
          {/* Search Bar */}
          <div className="flex justify-center mt-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full md:w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleSubmit}
              />
            </div>
          </div>
          <div className="flex items-center flex-row space-x-5 mt-5">
            <InteractionsCard address={address} />
            <VolumeCard address={address} /> 
            <FeeCard address={address} transactions={transactionList} />
          </div>
          <Last10Transactions transactions={transactionList} />
        </div>
      </div>
    </>
  );
};

export default AddressPage;



