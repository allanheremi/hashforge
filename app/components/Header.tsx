import React from 'react';
import logo from 'app/public/HASH.png';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center justify-center w-[100%] m-0 p-8">
        <span className="flex flex-row items-center justify-center">
          <img
            src={logo.src}
            alt="logo"
            className="h-[60px] lg:h-[72px] xl:h-[250px]  rounded-full "
          />{' '}
          <p className="lg:text-xl xl:text-6xl">Online hash conversion</p>{' '}
        </span>
      </div>
    </header>
  );
};

export default Header;
