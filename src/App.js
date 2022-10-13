import './App.css';
//import MisComponentes from './components/MisComponentes';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CartWidget/CartWidget.css'
//import MapComponent from './components/MapComponents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemList/ItemListContainer';
//import { Form } from 'react-bootstrap';




function App() {  
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/category/:categoryName' element={<ItemListContainer greeting={'Bienvenido socio' } />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<CartWidget/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
