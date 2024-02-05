import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { newUser } from '../components/UserContext'; 
import { defaultXPCount } from '../constants';
const Quest6: React.FC = () => {
  const { xpCount, setXPCount, walletConnected } = newUser();
  const [followClicked, setFollowClicked] = useState(false);
  const [joinClicked, setJoinClicked] = useState(false);
  const [telegramClicked, setTelegramClicked] = useState(false);
  const [repostClicked, setRepostClicked] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [questCompleted, setQuestCompleted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [joinVerified, setJoinVerified] = useState(false);
  const [telegramVerified, setTelegramVerified] = useState(false);
  const [repostVerified, setRepostVerified] = useState(false);
  useEffect(() => {
    if (verified) {
      localStorage.setItem('followVerified6', 'true');
    }
  }, [verified]);

  useEffect(() => {
    const isFollowVerified = localStorage.getItem('followVerified6');
    if (isFollowVerified === 'true') {
      //setFollowClicked(true);
      setVerified(true);
    }
  }, [])

  const handleFollowClick = () => {
    setTimeout(() => {
      setFollowClicked(true);
      setVerified(true);
    }, 5000);
  };

  

  useEffect(() => {
    if (joinVerified) {
      localStorage.setItem('joinVerified6', 'true');
    }
  }, [joinVerified]);
  
  useEffect(() => {
    const isJoinVerified = localStorage.getItem('joinVerified6');
    if (isJoinVerified === 'true') {
      //setJoinClicked(true);
      setJoinVerified(true);
    }
  }, [])

  const handleJoinClick = () => {
    setTimeout(() => {
      setJoinClicked(true);
      setJoinVerified(true);
    }, 5000);
    localStorage.setItem('joinTaskCompleted', 'true');
  };


  useEffect(() => {
    if (telegramVerified) {
      localStorage.setItem('telegramVerified6', 'true');
    }
  }, [telegramVerified]);

  useEffect(() => {
    const isTelegramVerified = localStorage.getItem('telegramVerified6');
    if (isTelegramVerified === 'true') {
      //setTelegramClicked(true);
      setTelegramVerified(true);
    }
  }, [])

  const handleTelegramClick = () => {
    setTimeout(() => {
      setTelegramClicked(true);
      setTelegramVerified(true);
    }, 5000);
    localStorage.setItem('telegramTaskCompleted', 'true');
  };

  

  
  useEffect(() => {
    if (repostVerified) {
      localStorage.setItem('repostVerified6', 'true');
    }
  }, [repostVerified]);

  useEffect(() => {
    const isRepostVerified = localStorage.getItem('repostVerified6');
    if (isRepostVerified === 'true') {
      //setRepostClicked(true);
      setRepostVerified(true);
    }
  }, [])

  const handleRepostClick = () => {
    setTimeout(() => {
      setRepostClicked(true);
      setRepostVerified(true);
    }, 5000);
    localStorage.setItem('repostTaskCompleted', 'true');
  };


  const handleClaimClick = async () => {
    if (followClicked && joinClicked && telegramClicked && repostClicked && verified) {
      setClaiming(true);
      alert('Claimed');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (verified && joinVerified && telegramVerified && repostVerified) {
        
        setXPCount((prevXPCount: number) => prevXPCount + 70);
        setClaimed(true);  
        localStorage.setItem('questCompleted6', 'true');
        localStorage.setItem('xpCount', String(xpCount + 70));
        
      }
      setClaiming(false);
      
    }

  };
  useEffect(() => {
   
    if(localStorage.getItem('questCompleted6') === 'true'){
      setQuestCompleted(true);
    }
    else if (followClicked && joinClicked && telegramClicked && repostClicked && verified) {
      setQuestCompleted(true);
    }
  }, [followClicked, joinClicked, telegramClicked, repostClicked, verified]);

  useEffect(() => {
    
    const storedXPCount = localStorage.getItem('xpCount6');
    setXPCount(storedXPCount ? Number(storedXPCount) : defaultXPCount);
  
  }, []);

  return (
    <>
      <Header />
      <div className="flex rounded-lg p-6 m-10 shadow-md text-white font-quicksand">
        <div className="w-4/5 pr-5 border-r border-gray-500">
          <h2 className="text-3xl font-bold pt-5 mb-4">Quest 6 : Explore Wallets</h2>
          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Add the Testnet Chain to Metamask</p>
            <div className="ml-auto">
              <a href="https://chainlist.org/?search=lightlink&testnets=true" target="_blank" rel="noopener noreferrer">
                <button
                  className={`task-button ml-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded 
                    ${
                      followClicked
                        ? (verified ? 'bg-green-500' : 'bg-purple-500')
                        : 'hover:bg-pink-500 hover:border-pink-800 hover:text-white hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out'
                    }`}
                    onClick={() => {
                      if (walletConnected) {
                        handleFollowClick();
                      } else {
                        alert("Wallet is not Connected");
                      }
                    }}
                  disabled={followClicked}
                >
                  {followClicked ? (verified ? 'Verified' : 'Verifying...') : 'Explore'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-6" />
            <span className="ml-3">Try Using some Testnet Faucet</span>
            <div className="ml-auto">
              <a href="https://faucet.pegasus.lightlink.io/" target="_blank" rel="noopener noreferrer">
                <button
                  className={`task-button ml-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded 
                    ${
                      joinClicked
                        ? (joinVerified ? 'bg-green-500' : 'bg-purple-500')
                        : 'hover:bg-pink-500 hover:border-pink-800 hover:text-white hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out'
                    }`}
                    onClick={() => {
                      if (walletConnected) {
                        handleJoinClick();
                      } else {
                        alert("Wallet is not Connected");
                      }
                    }}
                  disabled={joinClicked}
                >
                  {joinClicked ? (joinVerified ? 'Verified' : 'Verifying...') : 'Try'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0"   viewBox="0 0 512 512" className=" w-8 h-8 fill-brand-100 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
            <span className="ml-3">Explore Enterprise Mode Docs</span>
            <div className="ml-auto">
              <a href="https://docs.lightlink.io/lightlink-protocol/about-lightlink/enterprise-mode-with-zero-fees" target="_blank" rel="noopener noreferrer">
                <button
                  className={`task-button ml-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded 
                    ${
                      telegramClicked
                        ? (telegramVerified ? 'bg-green-500' : 'bg-purple-500')
                        : 'hover:bg-pink-500 hover:border-pink-800 hover:text-white hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out'
                    }`}
                    onClick={() => {
                      if (walletConnected) {
                        handleTelegramClick();
                      } else {
                        alert("Wallet is not Connected");
                      }
                    }}
                  disabled={telegramClicked}
                >
                  {telegramClicked ? (telegramVerified ? 'Verified' : 'Verifying...') : 'Explore'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Enable Enterprise Mode</p>
            <div className="ml-auto">
              <a href="https://extensions-stage.lightlink.io/whitelist-enterprise" target="_blank" rel="noopener noreferrer">
                <button
                  className={`task-button ml-auto bg-blue-500 text-white font-semibold py-2 px-4 rounded 
                    ${
                      repostClicked
                        ? (repostVerified ? 'bg-green-500' : 'bg-purple-500')
                        : 'hover:bg-pink-500 hover:border-pink-800 hover:text-white hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out'
                    }`}
                    onClick={() => {
                      if (walletConnected) {
                        handleRepostClick();
                      } else {
                        alert("Wallet is not Connected");
                      }
                    }}
                  disabled={repostClicked}
                >
                  {repostClicked ? (repostVerified ? 'Verified' : 'Verifying...') : 'Interact'}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-2/7 flex flex-col justify-center pl-5">
          <img src="https://www.lightlink.io/_next/static/media/logo.fc012b39.svg" alt="Image" className="w-full h-auto rounded-lg mb-4 max-w-xs" />
          
          <button
            className="claim-button bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={() => {
              if (walletConnected) {
                handleClaimClick();
              } else {
                alert("Wallet is not Connected");
              }
            }}
            disabled={!verified || !joinVerified || !telegramVerified || !repostVerified || claimed || claiming}
          >
            {questCompleted ? 'Quest Completed' : (claimed ? `Claimed (+${xpCount} XP)` : 'Claim')}
          </button>
        </div>
      </div>
    </>
  );
};

export default Quest6;
