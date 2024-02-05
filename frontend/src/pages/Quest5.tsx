import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { newUser } from '../components/UserContext'; 
import { defaultXPCount } from '../constants';
const Quest5: React.FC = () => {
  const { xpCount, setXPCount, walletConnected} = newUser(); 
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
      localStorage.setItem('followVerified5', 'true');
    }
  }, [verified]);

  useEffect(() => {
    const isFollowVerified = localStorage.getItem('followVerified5');
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
      localStorage.setItem('joinVerified5', 'true');
    }
  }, [joinVerified]);
  
  useEffect(() => {
    const isJoinVerified = localStorage.getItem('joinVerified5');
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
      localStorage.setItem('telegramVerified5', 'true');
    }
  }, [telegramVerified]);

  useEffect(() => {
    const isTelegramVerified = localStorage.getItem('telegramVerified5');
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
      localStorage.setItem('repostVerified5', 'true');
    }
  }, [repostVerified]);

  useEffect(() => {
    const isRepostVerified = localStorage.getItem('repostVerified5');
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
        
        setXPCount((prevXPCount: number) => prevXPCount + 60);
        setClaimed(true);  
        localStorage.setItem('questCompleted5', 'true');
        localStorage.setItem('xpCount', String(xpCount + 60));
        
      }
      setClaiming(false);
      
    }

  };
  useEffect(() => {
    
    if(localStorage.getItem('questCompleted5') === 'true'){
      setQuestCompleted(true);
    }
    else if (followClicked && joinClicked && telegramClicked && repostClicked && verified) {
      setQuestCompleted(true);
    }
  }, [followClicked, joinClicked, telegramClicked, repostClicked, verified]);

  useEffect(() => {
    
    const storedXPCount = localStorage.getItem('xpCount5');

    setXPCount(storedXPCount ? Number(storedXPCount) : defaultXPCount);

  }, []);

  return (
    <>
      <Header />
      <div className="flex rounded-lg p-6 m-10 shadow-md text-white font-quicksand">
        <div className="w-4/5 pr-5 border-r border-gray-500">
          <h2 className="text-3xl font-bold pt-5 mb-4">Quest 5 : Try  Try Pegasus Explorer API</h2>
          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Go to Try Pegasus Explore and review your information</p>
            <div className="ml-auto">
              <a href="https://pegasus.lightlink.io/" target="_blank" rel="noopener noreferrer">
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
                  {followClicked ? (verified ? 'Verified' : 'Verifying...') : 'Visit'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-6" />
            <span className="ml-3">Read the Api Docs</span>
            <div className="ml-auto">
              <a href="https://pegasus.lightlink.io/api-docs" target="_blank" rel="noopener noreferrer">
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
                  {joinClicked ? (joinVerified ? 'Verified' : 'Verifying...') : 'Read'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-8 h-8" />
            <span className="ml-3">Try out any one Api endpoint</span>
            <div className="ml-auto">
              <a href="https://pegasus.lightlink.io/api-docs" target="_blank" rel="noopener noreferrer">
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
                  {telegramClicked ? (telegramVerified ? 'Verified' : 'Verifying...') : 'Try'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Go through GraphQL playground</p>
            <div className="ml-auto">
              <a href="https://pegasus.lightlink.io/graphiql" target="_blank" rel="noopener noreferrer">
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
                  {repostClicked ? (repostVerified ? 'Verified' : 'Verifying...') : 'View'}
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

export default Quest5;
