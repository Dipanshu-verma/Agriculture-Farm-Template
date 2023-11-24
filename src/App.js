
import "tailwindcss/tailwind.css";
import './App.css';
import Navbar from './components/navber/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
