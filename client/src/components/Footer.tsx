import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Col from "react-bootstrap/esm/Col";

function Footer() {
    return (
        <Container fluid className="footer">
            <Container className="footer-container">
                <Row className="mt-4 ">
                    <Col md="auto" className="pr-2 mx-0 text-center"><a href="https://github.com/ArashAmiry"><FaGithub size={35} /></a></Col>
                    <Col md="auto" className="px-0 mx-0 text-center"><a href="https://www.linkedin.com/in/arash-amiry-a636671b3/"><FaLinkedin size={35}/></a></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;