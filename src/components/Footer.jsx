const Footer = () => {
  return (
    <div className=" items-center px-5 py-1 bg-primary  flex justify-between w-full sm:hidden ">
      <p className="text-white font-light text-base">
        © {new Date().getFullYear()} Jonathan. All rights reserved.
      </p>

      <a
        href="https://www.instagram.com/kent_world08?igsh=bmdrYm52Z2d2cDA1&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram text-[18px]" />
      </a>
    </div>
  );
};

export default Footer;
