'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks } from '@/constants/pages';
import { Logo, MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const currentPath = `/${usePathname().split('/')[1]}`;

  return (
    <>
      <header>
        <div className="container-lg py-3 md:py-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={clsx('block px-4 py-1 font-semibold transition-colors', {
                        'text-indigo-500': currentPath === link.path,
                        'hover:text-slate-500': currentPath !== link.path,
                      })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center md:hidden">
              <button
                aria-label="open sidebar"
                className="p-1"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer currentPath={currentPath} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
