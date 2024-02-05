import React, {  } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleQuest_1 = () => {
    navigate('/quest_1');
  };
  const handleQuest_2 = () => {
    navigate('/quest_2');
  };
  const handleQuest_3 = () => {
    navigate('/quest_3');
  };
  const handleQuest_4 = () => {
    navigate('/quest_4');
  };
  const handleQuest_5 = () => {
    navigate('/quest_5');
  };
  const handleQuest_6 = () => {
    navigate('/quest_6');
  };
  const handleQuest_7 = () => {
    navigate('/quest_7');
  };
  const handleQuest_8 = () => {
    navigate('/quest_8');
  };

  return (
    <div>
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full min-h-screen bg-center opacity-30  mb-10"
        />
        <Header />
          <div className="relative top-50 left-50 flex flex-col justify-end items-center text-white z-2" style={{ top: `120px` }}>
            <div className="grid mt-10 place-items-center">
            <div className="grid place-items-center">
              <div className="flex items-center flex-row space-x-4 mt-5">
                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_1 } rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg"
                          alt="Social Engagement"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_1 } rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 1
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Social Engagement
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">60 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_2 } rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://pegasus.lightlink.io/assets/network_icon.svg"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_2 } rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 2
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Learn About LightLink
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">70 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_3 } rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://img.freepik.com/free-vector/web-3-0-technology-isometric-with-blockchain-process-vector-illustration_1284-75508.jpg"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_3 } rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 3
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Token Swap & Bridge
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">100 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_4} rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="../../img/q4.png"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_4} rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 4
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Detection of Sybil
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">70 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-row space-x-4 mt-5">
                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_5} rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="../../img/q5.png"
                          alt="Social Engagement"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_5} rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 5
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Try Pegasus Explorer API
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">60 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_6} rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://img.freepik.com/free-vector/gradient-nft-concept-with-different-elements_52683-62654.jpg"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_6} rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 6
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Explore Enterprises Mode
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">70 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_7} rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_7} rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 7
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Deploy on Lightlink
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">100 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-2 dark:bg-gray-800 transition-transform hover:scale-105 hover:ring ring-blue-500 ring-opacity-70 hover:ring-2">
                  <div className="sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                    <div className="w-52 text-center">
                      <a href="#" onClick= {handleQuest_8} rel="noopener noreferrer">
                        <img
                          className="rounded-md shadow-sm w-full h-auto hover:opacity-80 transition-opacity duration-300"
                          src="https://img.freepik.com/premium-vector/hand-drawn-fingers-crossed-illustration_23-2150172772.jpg"
                          alt="Parallel Starter Packs"
                        />
                      </a>

                      <div className="text-left sm:p-2 pt-3">
                        <a href="#" onClick= {handleQuest_8} rel="noopener noreferrer">
                          <h3 className="text-lg font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300">
                            QUEST 8
                          </h3>
                          <p className="text-md font-semibold text-gray-600 dark:text-white hover:text-blue-500 transition-colors duration-300 opacity-60">
                            Spread LightLink
                          </p>
                        </a>
                        <h4 className="mb-0 text-sm font-semibold text-gray-400 dark:text-white-500 pt-1">70 XPs</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
