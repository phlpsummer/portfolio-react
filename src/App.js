import "./css/style.css";
import {Routes, Route} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './components/Main.js';
import Gallery from './components/Gallery.js';
import Media from './components/Media.js';
import Board from './components/Board.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route exact path="/" element={<Main />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
