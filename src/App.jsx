import "./app.scss";
import NavBar from "./Components/NavBar/NavBar";
import IntroPage from "./Components/introPage/IntroPage"

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <IntroPage/>
      </section>
      <section>parallax design</section>
      <section id="Services">Services</section>
      <section>parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
