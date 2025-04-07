import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const MainNavBar = () => {
  const links = [
    { id: 1, title: "inicio", href: "/" },
    { id: 2, title: "publicar", href: "/publish" },
    { id: 3, title: "explorar", href: "/explore" },
  ];

  return (
    <nav className="flex w-full mt-3 justify-end items-center">
      <ul className="flex gap-4 text-gray-light ssm:hidden md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              className="font-light text-primary-black md:text-[1.3rem]"
              to={link.href}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to={"https://github.com/INKINSS/llcoment-v2"} target="_blank">
        <FaGithub className="font-light text-primary-black cursor-pointer ml-4 ssm:text-[1.3rem] md:text-[2rem]" />
      </Link>
    </nav>
  );
};

export default MainNavBar;
