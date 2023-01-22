import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { FetchAPI } from './components/FetchAPI';
import { PokemonDetails } from './components/PokemonDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FetchAPI />} />
        <Route path='/pokemon/:pokemon' element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
