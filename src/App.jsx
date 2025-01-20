import "./App.css";
import Dishes from "./Components/Dishes";
import Favourfly from "./Components/Favourfly";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Favourfly />
      <Dishes />
      <Footer />
    </>
  );
}

export default App;
