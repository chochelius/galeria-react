import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardComponent = (props) => {
    return (

        < Card style={{
            width: '18rem', border: 'solid 1px black'
        }
        }>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">{props.buttontext}</Button>
            </Card.Body>
        </Card >

    );
}

export default CardComponent;