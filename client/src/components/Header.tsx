import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Container fluid className="px-0 py-5 container-nav">
            <header>
                <Row>
                <Col md={4}>
                            <h1><strong>ANT ONE</strong></h1>
                        </Col>

                        <Col md={4} className="py-md-2">
                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        className="search-bar mx-auto"
                                        type="search"
                                        placeholder="Ange mix"
                                    />
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col md={1} className="py-md-3 search">
                            <h4>SÖK</h4>
                        </Col>

                        <Col md={3} className="py-md-3">
                            <NavLink to={"/"}><h4 className="nav-item">MINA MIXAR</h4></NavLink>
                        </Col>
                </Row>
            </header>
        </Container>
    )
}

export default Header;