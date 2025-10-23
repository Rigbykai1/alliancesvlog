import { Link } from "react-router";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sobre mí", href: "/SobreMi" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "CyberVlog", href: "/CyberVlog" },
];

const NavBar = () => {
    return (
        <nav className="self-center py-4 animate-fade animate-duration-200 animate-ease-linear" aria-label="Main navigation">
            <ul className="menu menu-horizontal rounded-box bg-base-300/50 gap-1 outline rounded-full">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link
                            className="rounded-full font-light text-sm sm:text-xl md:text-2xl hover:scale-95 transition-all duration-300"
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

export default NavBar