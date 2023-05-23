import Card from 'react-bootstrap/Card';

const DetailsCard = (props) => {

    // This is because films have title not name but we are working with name
    if (props.info.title){
        props.info.name = props.info.title
    }

    const text = [];
    for (const key in props.info){
        text.push(`${key}: \n${props.info[key]}`)
    };

    return(
    <Card className='details-card' data-testid={props.info.name}>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>
            {text.map((value) => {
                const unwanted = ['created', 'edited', 'url']
                for (let i=0;i<unwanted.length;i++){
                    if (value.includes(unwanted[i])){
                        console.log(value)
                        return
                    }
                }
                return(
                    <p>{value}</p>
                )
            })}
        </Card.Text>
    </Card>
    )
}

export { DetailsCard };