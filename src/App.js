import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App" class="flex items-center justify-center w-full h-screen">
      <div className="conatiner" class="w-5/6 h-5/6 rounded-sm bg-white overflow-hidden relative" >
          <Header />
          <Home />
      </div>
    </div>
  );
}

export default App;
