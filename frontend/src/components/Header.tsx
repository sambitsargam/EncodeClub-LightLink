/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC,useEffect} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';
import { newUser } from './UserContext'; 
import { useAccount } from 'wagmi';
import { defaultXPCount } from '../constants';
const Header: FC = () => {
  const { walletConnected, setWalletConnected, setWalletAddress, xpCount, setXPCount } = newUser();
  const navigate = useNavigate();
  const { address } = useAccount({
    onConnect: () => {
      if (address) {
        setWalletConnected(true);
        setWalletAddress(address);
      }
    },
    onDisconnect: () => {
      setWalletConnected(false);
      setWalletAddress('');
      navigate('/');
    },
  });



  const handleVoting = () => {
    navigate('/voting');
  };
  const handleExplorer = () => {
    navigate('/explorer')
  };


  useEffect(() => {
    const storedXPCount = localStorage.getItem('xpCount');
    setXPCount(storedXPCount ? Number(storedXPCount) : defaultXPCount);
  }, [xpCount]);

  

  return (
    <nav className="z-10 text-white fixed top-0 left-0 w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-2 p-4 relative h-full">
        <div className="flex items-center">
          <a href="/" rel="noopener noreferrer" className="flex items-center">
            <span className="text-3xl blue font-bold mr-2">QuestLink</span>
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Network Icon" className="h-8" />
          </a>
        </div>


        <div className="flex items-center space-x-2">
        <button
                className="rounded-full bg-transparent text-white border border-purple-500 px-4 py-2 cursor-pointer"
                onClick={handleExplorer}
              >
                Explorer
        </button>
          {walletConnected && (
            <>
              <button
                className="rounded-full bg-transparent text-white border border-purple-500 px-4 py-2 cursor-pointer"
                onClick={handleVoting}
              >
                Voting
              </button>
              <div className="relative">
                <button className="rounded-full bg-transparent text-white border border-blue-500 px-4 py-2 cursor-pointer flex items-center">
                  <img
                    src="https://www.intract.io/assets/img/currency/xp-icon.png"
                    alt="XP Logo"
                    className="w-4 h-4 mr-2"
                  />
                  {xpCount} XP'S
                </button>
                <div className="absolute bg-white text-black p-2 rounded-md shadow-md top-8 right-0 hidden">
                  XP: {xpCount}
                </div>
              </div>
            </>
          )}
          <ConnectButton label="Connect" accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
