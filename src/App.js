import './App.css';
import Menu from './components/Menu/Menu';
import Slogan from './components/Slogan/Slogan';
import Portfolio from './components/Portfolio/Portfolio';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Slogan></Slogan>
      <Welcome></Welcome>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
