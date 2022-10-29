
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
    <h1>funciona?</h1>
      <Link to="/cart">
        <AiOutlineShoppingCart />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
    </>
  );
}
 
export default CartWidget;