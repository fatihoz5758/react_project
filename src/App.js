import logo from './logo.svg';
import './style.css'
import Blog from './components/Blog'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className='app'>App.Js</h1>
      <img src={logo} alt='logo' className='imgClass' />
      <Blog />
    </div>
  );
}

export default App;
