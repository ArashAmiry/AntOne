import Container from "react-bootstrap/esm/Container";
import "./Mixer.css"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FileUpload from "./components/FileUpload";

function Mixer() {




    return (
        <Container className="mixer">
            <Row>
                <Col>
                    <FileUpload />
                </Col>
                <Col>
                    <FileUpload />
                </Col>
            </Row>
        </Container>
    )
}

export default Mixer;