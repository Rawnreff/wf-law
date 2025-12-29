import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Lawyers from './pages/Lawyers';
import Contact from './pages/Contact';
import RetainerClients from './pages/RetainerClients';
import Info from './pages/Info';
import BiayaKonsultasi from './pages/BiayaKonsultasi';
import Galeri from './pages/Galeri';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* TopBar - Blue bar at top (hidden on mobile) */}
        <TopBar />
        {/* Navbar - Black sticky header */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/retainer-clients" element={<RetainerClients />} />
            <Route path="/info" element={<Info />} />
            <Route path="/consultation-fees" element={<BiayaKonsultasi />} />
            <Route path="/gallery" element={<Galeri />} />
          </Routes>
        </main>
        {/* Footer - Black 4-column footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

