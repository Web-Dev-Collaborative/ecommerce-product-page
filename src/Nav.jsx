import menuIcon from './images/icon-menu.svg';
import cartIcon from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';

export default function Nav({ savedCount }) {
  const navItems = ['Collection', 'Men', 'Women', 'About', 'Contact'];

  const navItemsDisplay = navItems.map((item) => <li key={item}>{item}</li>);

  return (
    <nav className="flex w-full items-center gap-4 bg-white px-6 py-4">
      <img src={menuIcon} alt="hamburger" className="mt-1.5 w-4 md:hidden" />

      <ul className="hidden opacity-0">{navItemsDisplay}</ul>
      <span className="mr-auto text-3xl font-bold leading-none tracking-tighter text-tertiary">
        sneakers
      </span>

      <div className="relative">
        <img src={cartIcon} alt="cart" className="w-6" />

        {savedCount > 0 && (
          <span className="absolute -top-1 -right-1.5 inline-block rounded-full bg-primary px-2 text-center text-[8px] text-white">
            {savedCount}
          </span>
        )}
      </div>
      <img src={avatar} alt="avatar" className="w-6" />
    </nav>
  );
}
