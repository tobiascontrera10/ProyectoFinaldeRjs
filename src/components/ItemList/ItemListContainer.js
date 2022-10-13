import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../utils/products';

 

//ejemplo de hook
const ItemListContainer =({ greeting }) => {


    const{ categoryName } = useParams();
    const [products, setProducts] = useState([]);   
  
    useEffect(() => {
        console.log(categoryName);
    }, [categoryName])
  
    useEffect (() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
    }, [])


    return (
        <>
        <Container>
            <h3 className='greeting'>{greeting}</h3>
            <ItemList products={products} />
        </Container>
        </>
    );
}

export default ItemListContainer;