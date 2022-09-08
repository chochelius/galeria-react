//creamos el componente cards

import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

const Tarjeta = (props) => {
    return (
        <div className="mx-auto">
        <Card className='text-bg-dark' style={{ width: '350px' }}>
        <Card.Img variant="top" className='thumbnail' src = {props.img} />
        <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text>
                {props.texto}
            </Card.Text>
            <Button variant="primary">Saber Mas</Button>
        </Card.Body>
        </Card>
        </div>
    );
    };

export default Tarjeta;