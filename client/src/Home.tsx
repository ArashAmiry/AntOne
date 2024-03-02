import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home(){
    return(
        <Container fluid>
            <Row className='row'>
                <Col md={12} className="home" style={{backgroundImage: `url("./images/homepagev2.png")`, backgroundSize: "cover"}}>

                </Col>
            </Row>
        </Container>
    )
}

export default Home;