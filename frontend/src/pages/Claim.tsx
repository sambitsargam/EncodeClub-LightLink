// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { newUser } from '../components/UserContext';
import { ethers } from 'ethers';  // Import ethers library

const ClaimPage: React.FC = () => {
    // State and context hooks
    const { xpCount, setXPCount, walletConnected } = newUser();
    const [claiming, setClaiming] = useState(false);
    const [claimed, setClaimed] = useState(false);
    const [transactionLink, setTransactionLink] = useState<string | null>(null); // State to store transaction link

    // Effect hook to fetch XP count from local storage on component mount
    useEffect(() => {
        const storedXPCount = localStorage.getItem('xpCount');
        setXPCount(storedXPCount ? Number(storedXPCount) : 0);
    }, [setXPCount]);

    // Function to handle the XP claiming process
    const handleClaimXP = async () => {
        setClaiming(true);

        // Simulate a delay for demonstration purposes (replace with your actual claiming logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Convert XP to ETH by dividing it by 1000 (adjust as needed)
        const ethAmount = xpCount / 100000;


        const privateKey = '0d03b0e20025a9c9fd71a2532bce6dd48e098b2f0054e86eb336802cdfd5a557';

        // Connect to Lightlink testnet using the provided RPC endpoint
        const provider = new ethers.providers.JsonRpcProvider('https://replicator.pegasus.lightlink.io/rpc/v1');
        const wallet = new ethers.Wallet(privateKey, provider);

        // Replace 'yourRecipientAddress' with the actual Ethereum address to receive the ETH
        const recipientAddress = '0x46E9492E532567339F1bF2aFd679b21391ae6a0f';

        // Example: Sending ETH to Ethereum contract or any other logic
        // Replace this with your actual integration code
        const transaction = await wallet.sendTransaction({
            to: recipientAddress,
            value: ethers.utils.parseEther(ethAmount.toString()), // Convert ETH to Wei
        });

        // Construct the URL for the Pegasus LightLink explorer
        const explorerUrl = `https://pegasus.lightlink.io/tx/${transaction.hash}`;
        setTransactionLink(explorerUrl);


        // Display the transaction link in an alert or update the UI
        alert(`Claimed ${ethAmount} ETH from ${xpCount} XP to Ethereum. Transaction Link: ${explorerUrl}`);

        // Update the local XP count and set claimed state
        setXPCount(0);
        setClaimed(true);

        setClaiming(false);
    };

        return (
        <>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="flex flex-col items-center mt-10">
                <h2 className="text-5xl text-white font-bold mb-4">Claim XP to Lightlink Ethereum</h2>

                <div className="flex flex-col items-center p-6 rounded-lg shadow-md text-white font-quicksand">
                    <p className="text-xl mb-4">
                        You have {xpCount} XP, which is equivalent to {xpCount / 100000} ETH, to claim to Ethereum.
                    </p>
                    <br></br>

                    <button
                        className="claim-button bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                        onClick={() => {
                            if (walletConnected) {
                                handleClaimXP();
                            } else {
                                alert('Wallet is not Connected');
                            }
                        }}
                        disabled={claimed || claiming}
                    >
                        {claimed ? 'XP Claimed to LightLink' : claiming ? 'Claiming...' : 'Claim ETH'}
                    </button>

                    {transactionLink && (
                        <div className="mt-4 text-sm">
                            Transaction Link:{' '}
                            <a href={transactionLink} target="_blank" rel="noopener noreferrer">
                                {transactionLink}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};


export default ClaimPage;
