import React from 'react'
import { Card } from 'react-bootstrap'
import './Row1.css'



export default function MyCard(props) {
    return (
        <div className='img_col'>
            <Card >
                <Card.Img className='cardImg' variant="top" src={props.img_url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.size}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
