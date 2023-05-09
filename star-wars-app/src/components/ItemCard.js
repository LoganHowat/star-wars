import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
    return(
    <Card className='item-card'>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <Link to={`/${props.id}`}>Details</Link>
        </Card.Text>
    </Card>
    )
}

export { ItemCard };