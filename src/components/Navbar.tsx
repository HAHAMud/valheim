import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/valheim_logo.png';
import global from '@/assets/svg/global.svg';
import search from '@/assets/svg/search.svg';
import { navbarItems } from '@/moduel/navbar';
import { NavbarItemsType } from '@/moduel/navbar/type';

const NavItem = ({ navItem, isActive }: { navItem: NavbarItemsType; isActive: boolean }) => {
  return (
    <Link
      to={navItem.path}
      className={`inline-block py-2 px-3 hover:bg-gray-200 rounded-full first:${
        isActive && 'bg-red-200'
      }`}
    >
      <div className="flex items-center relative cursor-pointer whitespace-nowrap">
        {navItem.title}
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('/');
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <nav className=" bg-white w-full flex top-0 fixed justify-between items-center mx-auto px-8 h-20 z-10">
      {/* <!-- logo --> */}
      <div className="inline-flex">
        <a className="_o6689fn" href="/">
          <div className="hidden md:block">
            <img src={Logo} alt="logo" className="h-24" />
          </div>
          <div className="block md:hidden">
            <img src={Logo} alt="logo" className="h-24" />
          </div>
        </a>
      </div>

      {/* search bar  */}
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <button
              className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button"
            >
              <div className="block flex-grow flex-shrink overflow-hidden text-gray-400">
                Start your search
              </div>
              <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                <img src={search} alt="search" className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            {navbarItems.map((item: NavbarItemsType) => (
              <NavItem key={item.path} navItem={item} isActive={item.path === activeItem} />
            ))}

            <div className="block relative">
              <button
                type="button"
                className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
              >
                <div className="flex items-center h-5">
                  <div className="_xpkakx">
                    <img src={global} alt="global" className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
