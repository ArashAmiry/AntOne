import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home(){
    return(
        <Container fluid className='px-0 home-image'>
            <Row className='row-home'>
                <Col md={12} className="home-name text-start">
                    <h1><strong>YUNG LEAN</strong></h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;