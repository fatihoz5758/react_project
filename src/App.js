import logo from './logo.svg';
import './style.css'
import Blog from './components/Blog'
import './App.css';


function App() {
  let slogan = <div> React Öğreneceğim  </div>
  let resim = <div><img src={logo} alt='logo' className='imgClass' /></div>
  return (
    <div className="App">
      <h1 className='app'>App.Js</h1>
      <p className='pTag'>{resim}
      </p>

      <br />
      <p className='pTag'>{5 / 2} - {5 / 2 == 2.5 ? "Yes" : "No"}</p>
      {slogan}
      <Blog />
    </div>
  );
}

export default App;
