import './App.css';
import Saludo from './components/Saludo';
import Pagina from './components/Pagina';

function App() {
  return (
    <div className="App">
      <h1>UUWU</h1>
      <Saludo marico={'Terrista'}/>
      <Pagina />
    </div>
  );
}

export default App;
