import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home(){
    return(
        <Container fluid className='px-0 home-image'>
            <Row className='row'>
                <Col md={12} className="home">
                    <h1>YUNG LEAN</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;