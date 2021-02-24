import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Munna" age= "21"></Person>
        <Person name="Masum" age= "21" District="Chittagong"></Person>


      </header>
    </div>
  );
}

function Person(props) {
  return(
    <div>
      <h2>Name: {props.name} and Age: {props.age}, Location: {props.District} </h2>
    </div>
  )  
}

export default App;
