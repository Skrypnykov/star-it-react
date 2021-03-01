import React from 'react';
import classes from './Pricing.module.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const OurPricing = () => {
    return (
        <div className="content-wrapper">
            <CardDeck className={classes.cardDeck} >
                <Card>
                    <Card.Img variant="top" className="d-block w-100" src="https://miro.medium.com/max/1200/1*GZtfpHMxf03765DlVaxohg.png"/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" className="d-block w-100" src="https://cdn.hype.tech/2000x/file/2018/04/3/hype-ru-wholesale-pricing-0-1524643455-129.png" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" className="d-block w-100" src="https://www.elegantthemes.com/blog/wp-content/uploads/2015/09/Pricing-Strategies-for-Business.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </CardDeck>
        </div>
    );
}

export default OurPricing;