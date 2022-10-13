import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/products";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    
    useEffect(() =>{
        getProduct(id)
        .then((data) =>{
            setProduct(data)
        })
        .catch(error => console.warn(error))
    }, [id])
    
    console.log(product);
    return (
        <Container>
        <h1>Destalle del producto https://github.com/HernanGH/reactjs38100 </h1>
        {product && <ItemDetail product={product} />}
    
        </Container>
    );
}
export default ItemDetailContainer;