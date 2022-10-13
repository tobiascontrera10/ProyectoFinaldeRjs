import { HiOutlineCollection } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    // ubicarlo dentro del navbar
    return(
        <Link to="/cart">
            <HiOutlineCollection/>
        </Link>
    );
}

export default CartWidget;