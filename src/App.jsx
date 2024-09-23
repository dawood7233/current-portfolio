import "./app.scss";
import NavBar from "./Components/NavBar/NavBar";
import IntroPage from "./Components/introPage/IntroPage"
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";



const App = () => {
  return (
    <>
      <Cursor/>
      <section id="HomePage">
      <NavBar />
        <IntroPage/>
        
      </section>
      <section><Parallax type = "services"/></section>
      <section id="Services"><Services/></section>
      <section><Parallax type = "portfolio"/></section>
      <section id="Portfolio"><Portfolio/></section>
      <section id="Contact"><Contact/></section>
    </>
  );
};

export default App;