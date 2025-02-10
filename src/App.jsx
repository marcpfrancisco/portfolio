import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
};
export default App;
