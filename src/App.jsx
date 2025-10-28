import { BrowserRouter, Routes, Route } from "react-router";
import PostsRender from "./Pages/CyberVlog/PostsRender";
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
      <div className="flex flex-col h-screen justify-between min-h-screen bg-base-200 text-base-content transition-colors duration-500">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/CyberVlog" element={<CyberVlog />} />
          <Route path="/CyberVlog/:id" element={<PostsRender />} />
        </Routes>
        <Footer />
        <ThemeSwitcher />
      </div>
    </BrowserRouter>
  );
}

export default App;
