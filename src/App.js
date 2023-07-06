import './App.css';
import Navbar from './Components/Navbar.js';
import Banner from './Components/Banner.js';
import Movies_cards from './Components/Movies_cards';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; // in current version of react switch is replaced with routes
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Banner} />
        <Route path='/Favourites' exact Component={Favourites} />
      </Routes>
      <Routes>
        <Route path='/' exact Component={Movies_cards} />
      </Routes>
      {/* <Banner />
      <Movies_cards />
      <Favourites /> */}
    </Router>

  );
}

export default App;
