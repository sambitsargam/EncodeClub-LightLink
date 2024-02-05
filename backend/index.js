const express = require("express");
const { ethers } = require("ethers");
const { providers } = require("ethers");

const app = express();
const PORT = process.env.PORT || 3001;

// Replace with your private key and RPC endpoint
const privateKey ="";
const rpcEndpoint = "https://replicator.pegasus.lightlink.io/rpc/v1";

const provider = new providers.JsonRpcProvider(rpcEndpoint);
const wallet = new ethers.Wallet(privateKey, provider);

app.use(express.json());

app.post("/claim", async (req, res) => {
  try {
    const recipientAddress = "0x46E9492E532567339F1bF2aFd679b21391ae6a0f"; 
    const xpCount = parseInt(req.body.xpCount); // Assuming xpCount is sent in the request body

    // Convert XP to ETH (divide by 100)
    const ethAmount = ethers.utils.parseEther((xpCount / 10000).toString());

    // Send ETH to the recipient
    const transaction = await wallet.sendTransaction({
      to: recipientAddress,
      value: ethAmount,
    });

    res.json({ success: true, transactionHash: transaction.hash });
    console.log("Transaction hash:", transaction.hash);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Transaction failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
