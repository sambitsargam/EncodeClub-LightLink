import { FC } from 'react';
import Header from './Header';
import Hhome from './Hhome';
import { newUser } from './UserContext';

const HomePagePower: FC = () => {
  const { walletAddress } = newUser();

  return (
    <div>
      <Header />
      <div className="grid mt-20 place-items-center">
        <div className="grid place-items-center">
          <Hhome address={walletAddress} />
        </div>
      </div>
    </div>
  );
};

export default HomePagePower;
