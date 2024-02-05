import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { newUser } from '../components/UserContext';
import { defaultXPCount } from '../constants';
const Quest8: React.FC = () => {
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
      localStorage.setItem('followVerified8', 'true');
    }
  }, [verified]);

  useEffect(() => {
    const isFollowVerified = localStorage.getItem('followVerified8');
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
      localStorage.setItem('joinVerified8', 'true');
    }
  }, [joinVerified]);
  
  useEffect(() => {
    const isJoinVerified = localStorage.getItem('joinVerified8');
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
      localStorage.setItem('telegramVerified8', 'true');
    }
  }, [telegramVerified]);

  useEffect(() => {
    const isTelegramVerified = localStorage.getItem('telegramVerified8');
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
      localStorage.setItem('repostVerified8', 'true');
    }
  }, [repostVerified]);

  useEffect(() => {
    const isRepostVerified = localStorage.getItem('repostVerified8');
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
        localStorage.setItem('questCompleted8', 'true');
        localStorage.setItem('xpCount8', String(xpCount + 70));
      }
      setClaiming(false);
      
    }

  };
  useEffect(() => {
    if(localStorage.getItem('questCompleted8') === 'true'){
      setQuestCompleted(true);
    }
    else if (followClicked && joinClicked && telegramClicked && repostClicked && verified) {
      setQuestCompleted(true);
    }
  }, [followClicked, joinClicked, telegramClicked, repostClicked, verified]);

  useEffect(() => {
    const storedXPCount = localStorage.getItem('xpCount8');

    setXPCount(storedXPCount ? Number(storedXPCount) : defaultXPCount);
  }, []);

  return (
    <>
      <Header />
      <div className="flex rounded-lg p-6 m-10 shadow-md text-white font-quicksand">
        <div className="w-4/5 pr-5 border-r border-gray-500">
          <h2 className="text-3xl font-bold pt-5 mb-4">Quest 8 : Spread LightLink & Encode Club</h2>
          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://pegasus.lightlink.io/assets/network_icon.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Visit LightLink Blog Page and read any one Blog</p>
            <div className="ml-auto">
              <a href="https://www.lightlink.io/blog" target="_blank" rel="noopener noreferrer">
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
                  {followClicked ? (verified ? 'Verified' : 'Verifying...') : 'Read'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://images.squarespace-cdn.com/content/v1/5f9bcc27c14fc6134658484b/ca939fe9-3ec3-45a8-9031-ced992da1a16/Encode_icon_white_01-01_3.png" alt="Icon" className="w-auto h-6" />
            <span className="ml-3">Visit Encode Club Blog Page and read any one Blog</span>
            <div className="ml-auto">
              <a href="https://www.blog.encode.club/" target="_blank" rel="noopener noreferrer">
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
                  {joinClicked ? (joinVerified ? 'Verified' : 'Verifying...') : 'Repost'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="https://images.squarespace-cdn.com/content/v1/5f9bcc27c14fc6134658484b/ca939fe9-3ec3-45a8-9031-ced992da1a16/Encode_icon_white_01-01_3.png" alt="Icon" className="w-8 h-8" />
            <span className="ml-3">Follow @encodeclub on X</span>
            <div className="ml-auto">
              <a href="https://twitter.com/intent/follow?screen_name=encodeclub" target="_blank" rel="noopener noreferrer">
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
                  {telegramClicked ? (telegramVerified ? 'Verified' : 'Verifying...') : 'Join'}
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 task-item mb-4 border-white-800 p-5 rounded-lg flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-white-500 hover:shadow-md hover:border">
            <img src="../../img/twitter-black.svg" alt="Icon" className="w-auto h-7" />
            <p className="ml-3">Like and Repost about LightLink Gasless Hackathon</p>
            <div className="ml-auto">
              <a href="https://twitter.com/intent/retweet?tweet_id=1753526888033554477" target="_blank" rel="noopener noreferrer">
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
                  {repostClicked ? (repostVerified ? 'Verified' : 'Verifying...') : 'Repost'}
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

export default Quest8;
