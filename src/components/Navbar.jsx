import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { LiveAvatar } from "./LiveAvatar";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary shadow-2xl
      `}
    >
      <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LiveAvatar />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jonathan &nbsp;<span className="sm:block hidden">| Adebo</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex items-center flex-row gap-10 ">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
          <a
            href="https://www.instagram.com/kent_world08?igsh=bmdrYm52Z2d2cDA1&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-[18px] hidden md:flex" />
          </a>
        </ul>
        <div className="sm:hidden">
          <img
            className="w-[20px] object-contain cursor-pointer "
            alt="menu"
            onClick={handleToggle}
            src={`${toggle ? close : menu}`}
            loading="lazy"
          />
        </div>
        <ul
          className={`${
            toggle ? "translate-x-0" : "translate-x-60"
          } absolute top-20 right-0 list-none transition duration-300 sm:hidden flex flex-col gap-10 items-start p-6 black-gradient mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? "text-white" : "text-gray-300"
              } font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(title);
              }}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
