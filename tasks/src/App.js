import './App.css';
import logo from './images/logo.svg'
import FormTask from './components/FormTask';

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
        <FormTask />
      </div>
    </div>
  );
}

export default App;
