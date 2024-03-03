import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <Container fluid className='px-0 home-image'>
            <Row className='row-home'>
                <Col md={12} className="home-name text-start">
                    <h1><strong>YUNG LEAN</strong></h1>
                </Col>
            </Row>

            <Row className='music-player'>
                <Col md={1} className='button'>
                    <h2><strong>|&lt;</strong></h2>
                </Col>

                <Col md={1} className='button'>
                    <h2><strong>||</strong></h2>
                </Col>

                <Col md={1} className='button'>
                    <h2><strong>&gt;|</strong></h2>
                </Col>

                <Col>
                
                </Col>

                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Home;