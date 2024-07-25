import './App.scss';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import TeamProfile from './components/TeamProfile/TeamProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div>
            <section id="HomePage">
              <HomePage/>
            </section>
            <section id='Achievements'>
              <Achievements/>
            </section>
            <section>
              <Footer/>
            </section>
          </div>
        }/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Team" element={<TeamProfile/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
