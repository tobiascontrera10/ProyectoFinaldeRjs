import { useContext } from "react";
import { Container } from "react-bootstrap"
import FavContext from "../../context/FavContext";

const Favoritos = () => {
    const { listaDeFavoritos, setListaDeFavoritos} = useContext(FavContext);
    console.log(listaDeFavoritos);
    console.log(setListaDeFavoritos);
    return(
        <Container>
            <h1>Productos Favoritos.</h1>
        </Container>
    )
    }
export default Favoritos;