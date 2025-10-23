import { BrowserRouter, Routes, Route } from "react-router";
import PostDetail from "./Pages/CyberVlog/PostDetails";
import Proyectos from "./Pages/Proyectos/Proyectos";
import CyberVlog from "./Pages/CyberVlog/CyberVlog";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import "./app.css";
import ThemeSwitcher from "./components/Buttons/ThemeSwitcher";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/CyberVlog" element={<CyberVlog />} />
          <Route path="/CyberVlog/:id" element={<PostDetail />} />
        </Routes>
        <Footer/>
        <ThemeSwitcher />
      </div>
    </BrowserRouter>
  );
}

export default App;
