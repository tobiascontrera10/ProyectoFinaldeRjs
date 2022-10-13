const MapComponent = () => {
    const products = [
        {id:1 , name:'fifa 23', consola:'PlayStation 5'},
        {id:2 , name:'The last of uf', consola:'PlayStation 5'},
        {id:3 , name:'Fornite', consola:'PlayStation 4'},
        {id:4 , name:'uncharte', consola:'PlayStation 3'}
    ]

    const productList = products.map((product) => {
        console.log(product);
        return product.name;
    });

    console.log(productList);

    return (
        <>
        <h1> Catalogo de juegos</h1>
        <ul>
            {products.map((product) => (
                <li key={product.name}>{product.name}</li>
            ))}
        </ul>
        </>
    )

};
export default MapComponent;