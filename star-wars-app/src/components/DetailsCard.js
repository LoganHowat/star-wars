import Card from 'react-bootstrap/Card';

const DetailsCard = (props) => {

    const text = [];
    for (const key in props.info){
        text.push(`${key}: \n${props.info[key]}`)
    };

    return(
    <Card className='details-card' data-testid={props.info.name}>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>
            {text.map((value) => {
                return(
                <p>{value}</p>
                )
            })}
        </Card.Text>
    </Card>
    )
}

export { DetailsCard };