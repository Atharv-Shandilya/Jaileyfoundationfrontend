import "./App.css";
import CounterCollection from "./components/CounterCollection";
import EnrollNow from "./components/EnrollNow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Problem from "./components/Problem";
import SocialProof from "./components/SocialProof";
import Solution from "./components/Solution";
import Works from "./components/Works";

function App() {
  return (
    <>
      <main className="font-inter scroll-smooth">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <Works />
        {/* <Impact /> */}
        <CounterCollection />
        <SocialProof />
        <FAQ />
        <EnrollNow />
        <Footer />
      </main>
    </>
  );
}

export default App;
