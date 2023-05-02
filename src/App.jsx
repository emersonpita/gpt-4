import Header from './components/header/Header';
import Home from './components/home/Home';
import Whatisgpt from './components/whatisgpt/Whatisgpt';
import Features from './components/features/Features';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <div className="app">

      <Header />
      <Home />
      <Whatisgpt />
      <Features />
      <Blog />
      <Footer />

    </div>
    </>
  )
}

export default App;
