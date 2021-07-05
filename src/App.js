import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FooterFixed from './components/FooterFixed/FooterFixed';
import FirstLayout from './components/FirstLayout/FirstLayout';
import TabView from './components/TabView/TabView';

function App() {
  return (
    <div >
      <Header />
      <FirstLayout/>
      <TabView />
      <FooterFixed />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
