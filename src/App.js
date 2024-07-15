import './App.scss';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

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
    </div>
  );
}

export default App;
