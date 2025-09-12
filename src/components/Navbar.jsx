import { useState } from "react";
import assets from "../assets/assets.js";
import ThemeToogleBtn from "./ThemeToogleBtn.jsx";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sticky top-0 flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-24 py-4 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
        <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-32 sm:w-40"
        loading="lazy"
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen ? "max-sm:w-0" : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:item-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="closeIcon"
          loading="lazy"
          className="w-5 absolute right-4 top-4 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex item-center gap-2 sm:gap-4">
        <ThemeToogleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="themeIcon"
          loading="lazy"
          onClick={() => {
            setSidebarOpen(true);
          }}
          className="w-8 sm:hidden"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex item-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect{" "}
          <img
            src={assets.arrow_icon}
            width={14}
            alt="arrowIcon"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
