import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import EcosystemGraph from "./components/EcosystemGraph";
import CategoryCards from "./components/CategoryCards";
import QuickStart from "./components/QuickStart";
import RepoExplorer from "./components/RepoExplorer";
import Timeline from "./components/Timeline";
import LanguageChart from "./components/LanguageChart";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="app" id="top">
      <Navbar />
      <Hero />
      <Stats />
      <EcosystemGraph />
      <CategoryCards />
      <QuickStart />
      <RepoExplorer />
      <Timeline />
      <LanguageChart />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
