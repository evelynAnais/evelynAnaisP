import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

export default function App() {
  return (
    <main className='container-fluid'> 
      {/* <Header /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

