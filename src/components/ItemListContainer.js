import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

//ejemplo de hook
const ItemListContainer =({ greeting }) => {
    const [name, setName] = useState('Cargando...');

    setTimeout(() => {
        setName('carga completa')
    }, 2000)
    
    console.log('Render de itemListContainer')
    return (
        <>
        <Container>
            <h1>productos</h1>
            <h3 className='greeting'>{greeting}</h3>
            <p>{name}</p>
        </Container>
        </>
    );
}

export default ItemListContainer;