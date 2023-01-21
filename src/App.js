
import './App.css';
import { Navbar } from './components';
import { Home, Grid, Top, Newsletter, Footer } from './containers';
import Video from './containers/Video/Video';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Grid/>
      <Video/>
      <Top/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
