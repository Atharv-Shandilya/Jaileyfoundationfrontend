import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Works from "./components/Works";

function App() {
  return (
    <>
      <main className=" font-inter p-4">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <Works />
      </main>
    </>
  );
}

export default App;
