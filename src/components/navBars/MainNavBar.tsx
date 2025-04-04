import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MainNavBar = () => {
  const links = [
    { id: 1, title: "inicio", href: "/" },
    { id: 2, title: "publicar", href: "/publicar" },
    { id: 3, title: "blog", href: "blog" },
  ];

  return (
    <nav className="flex w-full mt-3 justify-end items-center">
      <ul className="flex gap-4 text-gray-light ssm:hidden md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="text-[1rem] font-light text-primary-black" to={link.href}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <FaGithub className="text-[1.3rem] font-light text-primary-black cursor-pointer ml-4" />
    </nav>
  );
};

export default MainNavBar;
