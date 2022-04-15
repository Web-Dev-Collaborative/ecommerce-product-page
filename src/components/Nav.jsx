import { useState } from 'react';

// components
import Cart from './Cart';

// assets
import menuIcon from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import closeIcon from '../images/icon-close.svg';

export default function Nav({ savedCount, setSavedCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const navItemsDisplay = navItems.map((item) => <li key={item}>{item}</li>);

  return (
    <nav className="flex w-full items-center gap-4 bg-white px-6 py-4">
      {isMenuOpen ? (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="z-30"
        >
          <img
            src={closeIcon}
            alt="hamburger"
            className="mt-1.5 w-4 lg:hidden"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="z-30"
        >
          <img
            src={menuIcon}
            alt="hamburger"
            className="mt-1.5 w-4 lg:hidden"
          />
        </button>
      )}

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 min-h-full w-full bg-black/70">
          <ul className="absolute top-0 left-0 min-h-full w-8/12 space-y-4 bg-white p-7 pt-20 text-lg font-bold">
            {navItemsDisplay}
          </ul>
        </div>
      )}

      <span className="mr-auto text-3xl font-bold leading-none tracking-tighter text-tertiary">
        sneakers
      </span>

      <div className="relative">
        <button type="button" onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={cartIcon} alt="cart" className="w-6" />
        </button>

        {savedCount > 0 && (
          <span className="absolute -top-1 -right-1.5 inline-block rounded-full bg-primary px-2 text-center text-[8px] text-white">
            {savedCount}
          </span>
        )}
      </div>

      {isCartOpen && (
        <Cart savedCount={savedCount} setSavedCount={setSavedCount} />
      )}

      <button type="button" onClick={() => setIsCartOpen(!isCartOpen)}>
        <img
          src={avatar}
          alt="avatar"
          className="w-6 rounded-full hover:outline hover:outline-1 hover:outline-primary md:w-10"
        />
      </button>
    </nav>
  );
}
