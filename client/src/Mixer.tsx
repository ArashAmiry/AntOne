import Container from "react-bootstrap/esm/Container";
import "./Mixer.css"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FileUpload from "./components/FileUpload";
import AudioTimeline from "./components/AudioTimeline";

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

            <Row className="my-5">
                <AudioTimeline />
            </Row>
        </Container>
    )
}

export default Mixer;