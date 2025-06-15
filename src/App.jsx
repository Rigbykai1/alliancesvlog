import { BrowserRouter, Routes, Route } from "react-router";
import PostDetail from './Pages/CyberVlog/PostDetails'
import Proyectos from './Pages/Proyectos/Proyectos'
import CyberVlog from './Pages/CyberVlog/CyberVlog'
import AboutMe from './Pages/AboutMe/AboutMe'
import NavBar from './components/NavBar'
import Home from './Pages/Home/Home'
import './app.css'
import ghUrl from './components/Utils/ghrul'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/CyberVlog" element={<CyberVlog />} />
          <Route path="/CyberVlog/:id" element={<PostDetail />} />
        </Routes>
        <footer className="footer footer-horizontal footer-center bg-stone-800 text-primary-content pb-4">
          <aside>
            <img
              src={ghUrl('/src/Images/Logo.png')}
              alt="Logo de Alliances tech"
              className="size-24 grayscale"
            />
            <p className="font-bold">
              Alliances tech
              <br />
              Mejorando un 1% cada día
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
