import { headerLogo } from "../assets/images/index";
import { navLinks } from "../Constants";
import { hamburger } from "../assets/icons/index";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-10  ">
      <nav className="max-container  padding-x pt-10 flex items-center justify-between">
        {/* logo */}
        <img src={headerLogo} height={29} width={129} />
        {/* list */}
        <ul className="flex items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-lg font-montserrat font-medium text-slate-gray hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        {/* explore/signin */}
        <h1 className="max-lg:hidden text-purple-900 text-lg font-medium font-montserrat xl:mr-12 hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2">
          <a href="/">Explore </a>
          <span>/</span> <a href="/"> Signin</a>
        </h1>
        {/* hamburger */}
        <button className="hidden max-lg:block">
          <img src={hamburger} height={30} width={30} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
