import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
// import Cards2 from './Components/Cards';
import Cards from './Components/Cards';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"








function App() {
  return (
    <div className="App">
      <h1>Rick & Morty Challenge</h1>
      <Home />
      <Navbar />
      <Search />
      <Cards />

      {/* <Cards2 /> */}

    </div>
  );
}

export default App;
