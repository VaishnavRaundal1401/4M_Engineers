import './App.scss';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import TeamProfile from './components/TeamProfile/TeamProfile';

function App() {
  return (
    <div>
      <section id="HomePage">
        <Navbar/>
        <HomePage/>
      </section>
      <section  id="Services">
        <Services/>
      </section>
      <section id='Team'>
        <TeamProfile/>
      </section>
      <section id='Achievements'>
        <Achievements/>
      </section>
      <section id='Contact'>
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
