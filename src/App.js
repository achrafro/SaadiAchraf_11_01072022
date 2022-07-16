 import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Apropos from './Pages/Apropos';
import Logement from './Components/Logement';
import Notfound from './Pages/Notfound';
  


 
 

function App() {
 
   return (
    <div className="App">

<BrowserRouter>
      <Routes>
 <Route path='/kasa' exact element={<Home></Home>}  />
 <Route path='/kasa/about' exact element={<Apropos/>} />
 <Route path='/' exact element={<Home></Home>}  />
<Route path='/about' exact element={<Apropos/>} />
{/* <Route path='Pages/logement' element={<Logement/>} /> */}
<Route path='Pages/logement/:id'   element={<Logement/>} />
 
<Route path='*'  element={<Notfound/>} />

        </Routes> 
    </BrowserRouter>

     </div>
  );
}

export default App;
