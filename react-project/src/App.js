import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
// import Cards2 from './Components/Cards';
import Cards from './Components/Cards';
import Modal from './Components/Modal';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"








function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Search />
      <Cards />
      <Modal />

      {/* <Cards2 /> */}

    </div>
  );
}

export default App;
