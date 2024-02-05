import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserContextProps {
  walletConnected: boolean;
  setWalletConnected: Dispatch<SetStateAction<boolean>>;
  walletAddress: string;
  setWalletAddress: Dispatch<SetStateAction<string>>;
  xpCount: number;
  setXPCount: Dispatch<SetStateAction<number>>;
}

const defaultWalletConnected = false;
const defaultWalletAddress = '';
const defaultXPCount = 0;

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState<boolean>(defaultWalletConnected);
  const [walletAddress, setWalletAddress] = useState<string>(defaultWalletAddress);
  const [xpCount, setXPCount] = useState<number>(defaultXPCount);

  const values: UserContextProps = {
    walletConnected,
    setWalletConnected,
    walletAddress,
    setWalletAddress,
    xpCount,
    setXPCount,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const newUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};