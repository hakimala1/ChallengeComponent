import Head from './Component/Header'
import About from './Component/About'
import Contact from './Component/Contact'
import Project from './Component/Project'
import Footer from './Component/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
