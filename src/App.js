import './App.css';
import MisComponentes from './components/MisComponentes';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CartWidget.css'
import ItemListContainer from './components/ItemListContainer';




function App() {
  console.log("hola mundo");
  
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenido socio' }/>

    <MisComponentes name="propiedades" value={100}/>
    </>
  );
}

export default App;
