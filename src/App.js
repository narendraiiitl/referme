import './App.css';
import Home from './pages/Home';
import ResponsiveAppBar from './pages/Appbar';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar  />
      <Home />
    </div>
  );
}

export default App;
