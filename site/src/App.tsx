import Hero from "./components/Hero";
import Stats from "./components/Stats";
import EcosystemGraph from "./components/EcosystemGraph";
import CategoryCards from "./components/CategoryCards";
import RepoExplorer from "./components/RepoExplorer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Stats />
      <EcosystemGraph />
      <CategoryCards />
      <RepoExplorer />
      <Footer />
    </div>
  );
}

export default App;
