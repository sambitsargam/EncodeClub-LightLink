import axios, { AxiosResponse } from 'axios';

export interface Transaction_count{
  result: number;
}

export interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

export const getTransactionCount = async (address: string): Promise<number> => {
  try {
    const response = await axios.get(`https://pegasus.lightlink.io/api/v2/addresses/${address}/counters`);
    const hexTransactionCount = response.data.transactions_count;
    const parsedCount = parseInt(hexTransactionCount, 16);
    console.log("Count" , parsedCount)

    if (isNaN(parsedCount)) {
      console.error('Invalid transaction count:', hexTransactionCount);
      throw new Error('Invalid transaction count');
    }

    return parsedCount;
  } catch (error) {
    console.error('Error fetching transaction count:', error);
    throw error;
  }
};


export const getEtheriumCount = async (address: string): Promise<number> => {
  try {
    const response = await axios.get(`https://pegasus.lightlink.io/api/v2/addresses/${address}`);
    const weiEtheriumCount = response.data.coin_balance;
    const wei = weiEtheriumCount / 10000000000;
    const ether = wei * 1e-8;
    

    if (isNaN(ether)) {
      console.error('Invalid Ethereum count:', weiEtheriumCount);
      throw new Error('Invalid Ethereum count');
    }

    return ether;
  } catch (error) {
    console.error('Error fetching Ethereum count:', error);
    throw error;
  }
};



export const getTransactionList = async (address: string): Promise<Transaction[]> => {
  const apiUrl = `https://pegasus.lightlink.io/api/v2/addresses/${address}/transactions`;

  try {
    const response: AxiosResponse = await axios.get(apiUrl);
    if (response.status === 200) {
      const data = response.data;
      const transactions: Transaction[] = data.items.map((transaction: any) => ({
        blockNumber: transaction.block,
        timeStamp: transaction.timestamp,
        hash: transaction.hash,
        nonce: transaction.nonce,
        blockHash: transaction.blockHash,
        transactionIndex: transaction.position,
        from: transaction.from.hash,
        to: transaction.to.hash,
        value: transaction.value / 10000000000,
        gas: transaction.gas_price / 10000000000,
        gasPrice: transaction.gas_price / 10000000000,
        isError: transaction.has_error_in_internal_txs,
        txreceipt_status: transaction.result === 'success' ? '1' : '0',
        input: transaction.raw_input,
        contractAddress: transaction.created_contract.hash,
        cumulativeGasUsed: transaction.gas_used,
        gasUsed: transaction.gas_used,
        confirmations: transaction.confirmations,
        methodId: transaction.method,
        functionName: null, // Add your logic to extract function name if available
      }));

      return transactions;
    } else {
      console.error('Error occurred while retrieving transactions.');
      return [];
    }
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    return [];
  }
};
