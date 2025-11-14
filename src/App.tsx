import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <main className=" font-inter">
        <Header />
        <Hero />
        <Problem />
        <Solution />
      </main>
    </>
  );
}

export default App;
