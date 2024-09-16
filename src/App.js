
import './App.css';
import Body from './Data/Body';
import Contact from './Data/Contact';
import Footer from './Data/Footer';
import Header from './Data/header';
import Projects from './Data/Projects';
import Resume from './Data/Resume';
import About from './Images/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
