import './App.css';
import logo from './images/logo.svg'
import Task from './components/Task'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={logo} 
          className='logo' />
      </div>
      <div className='main-container'>
        <h1>Tasks</h1>
        <Task text='Hola chowa'/>
      </div>
    </div>
  );
}

export default App;
