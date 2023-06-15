import Category from "./components/data/Category";
import Footer from "./components/data/Footer";
import Hero from "./components/data/Hero";
import Navbar from "./components/data/Navbar";
import Trending from "./components/data/Trending";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
