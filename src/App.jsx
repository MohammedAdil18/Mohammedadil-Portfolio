import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import ProjectDetails from "./pages/ProjectDetails";

import AnimatedBackground from "./components/background/AnimatedBackground";

import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop";


function Layout({ children }) {
  return (
    <>
      <AnimatedBackground />

      <div className="relative text-[#4F3B2D]">

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />

        <ScrollProgress />
        <ScrollToTop />

      </div>
    </>
  );
}



function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </Layout>
          }
        />


        {/* PROJECT DETAILS */}

        <Route
          path="/projects/:id"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />


      </Routes>

    </BrowserRouter>
  );
}


export default App;