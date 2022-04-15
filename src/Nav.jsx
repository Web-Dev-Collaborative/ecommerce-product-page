import menuIcon from './images/icon-menu.svg';
import cartIcon from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';

export default function Nav() {
  const navItems = ['Collection', 'Men', 'Women', 'About', 'Contact'];

  const navItemsDisplay = navItems.map((item) => <li>{item}</li>);

  return (
    <nav className="flex items-center gap-4 bg-white px-6 py-4">
      <img src={menuIcon} alt="hamburger" className="mt-1.5 w-4 md:hidden" />
      <ul className="hidden opacity-0">{navItemsDisplay}</ul>
      <span className="mr-auto text-3xl font-bold leading-none tracking-tighter text-tertiary">
        sneakers
      </span>
      <img src={cartIcon} alt="cart" className="w-6 " />
      <img src={avatar} alt="avatar" className="w-6 " />
    </nav>
  );
}
