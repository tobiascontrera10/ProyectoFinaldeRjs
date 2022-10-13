import Item from "./Item"
import './ItemList.css';

const ItemList = ({ products }) => {
    return(
        <div className="intemList">
           <h1> Productos:</h1>
            {products.map((product) => (
                <Item key={product.id} product={product}></Item>
            ))} 
        </div>
    );
}

export default ItemList;
        