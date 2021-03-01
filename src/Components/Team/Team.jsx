import React from 'react';
import classes from './Team.module.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const MyTeam = () => {
    return (
        <div className={classes.wrap}>
            <div className="content-wrapper">
                <CardDeck className={classes.cardDeck}>
                    <Card>
                        <Card.Img variant="top" src="https://cdna.artstation.com/p/assets/images/images/031/081/132/large/mario-parra-boolean-07.jpg?1602547202"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.vimeocdn.com/video/948355269.webp?mw=800&mh=450&q=70" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ytimg.com/vi/1GiKdMBxzAg/maxresdefault.jpg" />
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
        </div>
    );
}

export default MyTeam;