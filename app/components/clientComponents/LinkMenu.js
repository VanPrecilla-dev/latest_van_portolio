import React from "react";

import { Link } from "react-scroll";

const LinkMenu = () => {
  const linkClass = "hover:bg-[#A193DC] hover:scale-110 p-2 rounded-full";

  return (
    <ul className="flex flex-row gap-1 lg:gap-10 text-md lg:text-xl px-5 lg:px-10 rounded-full text-white border-2 border-white">
      <li className={linkClass}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className={linkClass}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className={linkClass}>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Project
        </Link>
      </li>
      <li className={linkClass}>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default LinkMenu;
