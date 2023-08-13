import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/valheim_logo.png';
import global from '@/assets/svg/global.svg';
import search from '@/assets/svg/search.svg';
import { navbarItems } from '@/module/navbar';
import { NavbarItemsType } from '@/module/navbar/type';

const NavItem = ({ navItem, isActive }: { navItem: NavbarItemsType; isActive: boolean }) => {
  return (
    <Link
      to={navItem.path}
      className={`inline-block rounded-lg px-3 py-2 hover:bg-teal-300 first:${
        isActive && 'bg-red-200'
      }`}
    >
      <div className="relative flex cursor-pointer  items-center whitespace-nowrap text-teal-500 hover:text-white">
        {navItem.title}
      </div>
    </Link>
  );
};

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('/');
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <nav className=" fixed top-0 z-10 mx-auto flex h-20 w-full items-center justify-between bg-white px-8">
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
      <div className="hidden flex-shrink flex-grow-0 justify-start px-2 sm:block">
        <div className="inline-block">
          <div className="inline-flex max-w-full items-center">
            <button
              className="relative flex w-60 flex-shrink flex-grow-0 items-center rounded-full border px-1 py-1  pl-2"
              type="button"
            >
              <div className="block flex-shrink flex-grow overflow-hidden text-gray-400">
                Start your search
              </div>
              <div className="relative flex h-8 w-8  items-center justify-center rounded-full">
                <img src={search} alt="search" className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="flex-initial">
        <div className="relative flex items-center justify-end">
          <div className="mr-4 flex items-center">
            {navbarItems.map((item: NavbarItemsType) => (
              <NavItem key={item.path} navItem={item} isActive={item.path === activeItem} />
            ))}

            <div className="relative block">
              <button
                type="button"
                className="relative inline-block rounded-full px-3 py-2 hover:bg-gray-200 "
              >
                <div className="flex h-5 items-center">
                  <img src={global} alt="global" className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
