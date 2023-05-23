import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
    return(
    <Card className='item-card' data-testid={`item-${props.id}`}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <Link to={`/${props.id}`}>Details</Link>
        </Card.Text>
    </Card>
    )
}

export { ItemCard };