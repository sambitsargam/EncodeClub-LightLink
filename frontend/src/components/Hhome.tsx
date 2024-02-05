import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import First from './First';
interface BaseDay1Props {
  address: string;
}

interface Transaction {
  from: string;
  to: string;
  value: string;
  timeStamp: number;
}

const BaseDay1: FC<BaseDay1Props> = ({ address }) => {
  const [validArray, setValidArray] = useState<Transaction[]>([]);
  const [powerValue, setPowerValue] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [buyValue, setBuyValue] = useState<number>(0);
  const [sellValue, setSellValue] = useState<number>(0);
  const [buyCount, setBuyCount] = useState<number>(0);
  const [sellCount, setSellCount] = useState<number>(0);
  const [buydate, updateBuyDate] = useState('');
  const [selldate, updateSellDate] = useState('');
  const [buyday, updateBuyDay] = useState<number>(0);
  const [sellday, updateSellDay] = useState<number>(0);
  const [searchAdress, setSerachAdress] = useState<string>(address);  
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A&address=${searchAdress}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=78WXMBBCVPWCVIMPBIYGZ8BDJ9RZE8QTAW`,
        );

        const transactions: Transaction[] = response.data.result;
        setValidArray(transactions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [searchAdress]);

  useEffect(() => {
    function formatDate(timestamp: number): string {
      const date = new Date(timestamp * 1000); 
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }

    function calculateDaysDifference(inputTimestamp: number): number {
      const currentTime = new Date().getTime();
      const inputTime = new Date(inputTimestamp * 1000).getTime();

      const timeDifferenceInMilliseconds = currentTime - inputTime;
      const daysDifference = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));

      return daysDifference;
    }

    function calculatePower() {
      let pt = 0;
      let totalBuy = 0;
      let totalSell = 0;
      let buyCount = 0;
      let sellCount = 0;

      validArray.forEach((count) => {
        if (count.from === searchAdress.toLowerCase()) {
          let sell = parseFloat(count.value) / 10 ** 8;
          totalSell += sell;
          sell = sell * (0.1 * calculateDaysDifference(count.timeStamp));
          pt -= sell;

          if (sellCount === 0) {
            updateSellDate(formatDate(count.timeStamp));
            updateSellDay(calculateDaysDifference(count.timeStamp));
          }
          sellCount++;
        } else if (count.to === searchAdress.toLowerCase()) {
          let buy = parseFloat(count.value) / 10 ** 8;
          totalBuy += buy;
          buy = buy * (0.1 * calculateDaysDifference(count.timeStamp));
          pt += buy;

          if (buyCount === 0) {
            updateBuyDate(formatDate(count.timeStamp));
            updateBuyDay(calculateDaysDifference(count.timeStamp));
          }
          buyCount++;
        }
      });
      
      

      axios
        .get(
          `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A&address=${searchAdress}&tag=latest&apikey=PVVAAKSTQ8FIDBMY5EWSVJPSHBCYHKDG2D`,
        )
        .then((res) => {
          let valid = parseFloat(res.data.result) / 10 ** 8;
          setBalance(Math.round(valid));
          console.log(valid);

          if (valid === 0) {
            setPowerValue(0);
          } else {
            pt = Math.round(pt / valid);
            setPowerValue(pt);
          }

          setBuyValue(Math.round(totalBuy));
          setSellValue(Math.round(totalSell));
          setBuyCount(buyCount);
          setSellCount(sellCount);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    calculatePower();
  }, [validArray, searchAdress]);

  return (
    <>
      <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-5 ">
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
                onChange={(e) => setSerachAdress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-left mt-5">
            <p className="font-semibold text-gray-300 mr-2">Demo address : 0xB2df3b19333F7bD8D3880F415950F497B2F77165</p>
              <p className="font-semibold text-gray-300 mr-2">(Search the demo address given to view how the voting power works.)</p>
          </div>
      <div className="flex justify-center mt-5">
        <div className="fee-card p-6 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-8 dark:bg-gray-800 hover:bg-blue-50 transform hover:scale-105 transition">
          <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div className="w-52 max-w-52 text-center">
              <h3 className=" font-bold text-2xl text-green-600 text-center">VOTING POWER</h3>
              <div className="text-center pt-5">
                <div className="text-5xl font-bold text-blue-500 mb-2">{powerValue}</div>
                <h3 className="mt-8 mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Balance: {balance.toLocaleString()} ETH
                </h3>
                <h3 className=" mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Transactions: {buyCount + sellCount}
                </h3>
                <h3 className=" text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Volume: {(buyValue + sellValue).toLocaleString()} ETH
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="fee-card p-6 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-8 dark:bg-gray-800 hover:bg-blue-50 transform hover:scale-105 transition">
          <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div className="w-52 max-w-52 text-center">
              <h3 className=" font-bold text-2xl text-green-600 text-center">BOUGHT</h3>
              <div className="text-center pt-5">
                <div className="text-5xl font-bold text-blue-500 mb-2">{buyCount} times</div>
                <h3 className="mt-8 mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Total Buy: {buyValue.toLocaleString()} ETH
                </h3>
                <h3 className=" mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} First Buy: {buydate}
                </h3>
                <h3 className=" text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Age: {buyday} days ago
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="fee-card p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-8 dark:bg-gray-800 hover:bg-blue-50 transform hover:scale-105 transition">
          <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div className="w-52 max-w-52 text-center">
              <h3 className=" font-bold text-2xl text-green-600 text-center">SOLD</h3>
              <div className="text-center pt-5">
                <div className="text-5xl font-bold text-blue-500 mb-2">{sellCount} times</div>
                <h3 className="mt-8 mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Total Sell: {sellValue.toLocaleString()} ETH
                </h3>
                <h3 className=" mb-0 text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} First Sell: {selldate}
                </h3>
                <h3 className=" text-md font-semibold text-gray-300 dark:text-white-500 pt-1 text-left">
                  {} Age: {sellday} days ago
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <First validArray={validArray} address={searchAdress} />
    </>
  );
};

export default BaseDay1;
