import "./css/style.css";
import {Route} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/media" component={Media}></Route>
      <Route exact path="/board" component={Board}></Route>

      <Footer />
    </div>
  );
}

export default App;
