import './App.css';
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Search from './Components/Search';





function App() {
  return (
    <div className="App">
      <h1>My first react project</h1>
      <Home />
      <Cards />
      <Navbar />
      <Search />

    </div>
  );
}

export default App;
