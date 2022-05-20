import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addfriend from './component/Addfriend';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Viewall from './component/Viewall';

function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addfriend/>}/>
          <Route path='/view'exact element={<Viewall/>}/>
        </Routes>                                                                                   
      </BrowserRouter>

    </>
  );
}

export default App;
