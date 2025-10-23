import ghUrl from "./Utils/ghrul";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 p-8 bottom-0">
      <aside>
        <img
          src={ghUrl("/src/Images/Logo.PNG")}
          alt="Logo de Alliances tech"
          className="size-24"
        />
        <p className="font-bold">
          Alliances tech
          <br />
          Mejorando un 1% cada día
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
