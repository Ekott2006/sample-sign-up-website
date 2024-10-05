import React from 'react';
import googlePlay from '../assets/Google Play Store.svg';
import appStore from '../assets/Apple Store.svg';

const AppStoreButtons: React.FC = () => {
  return (
    <div className="mt-[5.21vh] h-[5.2vh] flex gap-3">
      <a href="#">
        <img src={appStore} alt="App Store" className="h-full" />
      </a>
      <a href="#">
        <img src={googlePlay} alt="Google Play" className="h-full" />
      </a>
    </div>
  );
};

export default AppStoreButtons;
