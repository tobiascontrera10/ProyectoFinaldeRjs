import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";


const Item = ({ product}) => {
    return (
        <Card style={{width: '4cm'}}>
          {/* card.Img variant="top" src="..." */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.description}
                
            </Card.Text>
            <Button variant="primary"> 
                <Link to={`/item/${product.id}`}>
                    VER+
                </Link>
            </Button>
          </Card.Body>
        </Card>
    )
    
}
export default Item;