import { useEffect } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre mí", href: "/SobreMi" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "CyberVlog", href: "/CyberVlog" },
];

const NavBar = () => {
  const location = useLocation();
  const currentpath = location.pathname;

  return (
    <nav
      className="self-center py-4 animate-fade animate-duration-200 animate-ease-linear"
      aria-label="Main navigation"
    >
      <ul className="menu menu-horizontal rounded-box bg-base-100/50 border-2 gap-1 rounded-full">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              className={`rounded-full font-light text-sm sm:text-xl md:text-2xl hover:scale-95 transition-all duration-300 ${
                currentpath === link.href ? "bg-base-content/20 text-base-content pointer-events-none" : ""
              }`}
              to={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
