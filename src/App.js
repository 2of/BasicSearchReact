import logo from './logo.svg';
import './App.css';
import SearchBox from './Search/SearchBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

        <div className="AppContainer">
          <SearchBox query_freq="1000" ></SearchBox>
        </div>
  
    </div>
  );
}

export default App;
