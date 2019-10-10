import React from 'react';
import { CardColumns, Card, Alert, Container, Button } from 'react-bootstrap';

class PlayersDeck extends React.Component {
    constructor(props) {
        super();
        this.state = {
            players_added: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPlayerSecondList = this.addPlayerSecondList.bind(this);

    }
    componentDidMount() {

        this.addPlayerSecondList();

    }

    addPlayerSecondList() {

        this.setState({
            players_added: [...this.state.players_added, [1]]
        })

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        { console.log(this.state) }
        return (
            <div>
                <Container>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
            </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep things nice
                            and tidy.
             </p>
                    </Alert>
                    <CardColumns>
                        {
                            this.props.players.map(player => {
                                return (
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                            <Card.Title>{player.name}</Card.Title>
                                            <Card.Text>
                                                {`Pais : ${player.country}`}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <p><small>{`Edad : ${player.age}`}</small></p>
                                            <p><small>{`Puntos : ${player.points}`}</small></p>
                                            <p><small className="text-muted">{`Mas informacion : ${player.urlInfo}`}</small></p>
                                        </Card.Footer>
                                        <Button variant="primary">Primary</Button>
                                    </Card>
                                );

                            })
                        }
                    </CardColumns>
                </Container>
            </div>
        );
    }
}

export default PlayersDeck;
