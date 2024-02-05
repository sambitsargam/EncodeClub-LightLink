import { FC } from 'react';
import { Transaction } from './types';

interface FirstProps {
  validArray: Transaction[];
  address: string;
}

const First: FC<FirstProps> = ({ validArray, address }) => {
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
  return (
    <>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 p-4 dark:bg-gray-800 transition-transform">
          <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div className="w-full text-center">
              <div className="text-left sm:p-2 pt-3">
                <p className="mb-0 text-md font-semibold text-gray-400 dark:text-white-500 pt-1">
                  {validArray.length > 0 && (
                    <div>
                      <h1 className="text-lg font-bold text-gray-300 dark:text-white-300 mb-2">
                        Your First Transaction:
                      </h1>
                      <p>From: {validArray[0].from}</p>

                      <p>To: {validArray[0].to}</p>
                      {validArray[0].from === address.toLowerCase() ? <p>Action: Sell</p> : <p>Action: Buy</p>}
                      <p>Value: {parseFloat(validArray[0].value) / 10 ** 8} ETH</p>
                      <p>
                        Date: {formatDate(validArray[0].timeStamp)} {} - {}
                        {calculateDaysDifference(validArray[0].timeStamp)} days ago
                      </p>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 p-4 dark:bg-gray-800 transition-transform">
          <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div className="w-full text-center">
              <div className="text-left sm:p-2 pt-3">
                <p className="mb-0 text-md font-semibold text-gray-400 dark:text-white-500 pt-1">
                  {validArray.length > 0 && (
                    <div>
                      <h1 className="text-lg font-bold text-gray-300 dark:text-white-300 mb-2 ">
                        Your Last Transaction:
                      </h1>

                      <p>From: {validArray[validArray.length - 1].from}</p>

                      <p>To: {validArray[validArray.length - 1].to}</p>
                      {validArray[validArray.length - 1].from === address.toLowerCase() ? (
                        <p>Action: Sell</p>
                      ) : (
                        <p>Action: Buy</p>
                      )}
                      <p>Value: {parseFloat(validArray[validArray.length - 1].value) / 10 ** 8} ETH</p>
                      <p>
                        Date: {formatDate(validArray[validArray.length - 1].timeStamp)} {} - {}
                        {calculateDaysDifference(validArray[validArray.length - 1].timeStamp)} days ago
                      </p>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
