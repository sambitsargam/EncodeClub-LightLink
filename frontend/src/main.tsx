import './polyfills';
import './global.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const lightlink: Chain = {
  id: 1891,
  name: 'Lightlink Pegasus Testnet',
  network: 'lightlink',
  iconUrl: 'https://pegasus.lightlink.io/assets/network_icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
    default: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
  },
  blockExplorers: {
    default: { name: 'pegasus', url: 'https://pegasus.lightlink.io/' },
    etherscan: { name: 'pegasus', url: 'https://pegasus.lightlink.io/' },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [lightlink],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'QuestLink',
  projectId: '536d26743c83b4e06ec7f8602883ce23',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);