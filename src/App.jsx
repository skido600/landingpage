import "./App.css";
import Dishes from "./Components/Dishes";
import Favourfly from "./Components/Favourfly";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Favourfly />
      <Dishes />
    </>
  );
}

export default App;
