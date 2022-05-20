import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addfriend from './component/Addfriend';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addfriend/>}/>
        </Routes>                                                                                   
      </BrowserRouter>

    </>
  );
}

export default App;
