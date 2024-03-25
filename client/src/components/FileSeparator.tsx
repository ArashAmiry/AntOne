import { useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./FileSeparator.css";

function MusicInput() {
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState("");

  function handleUpload(e: any) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      setMsg("Uploading...");
      setProgress((prevState) => { return { ...prevState, started: true } });

      axios.post('http://127.0.0.1:5000/separation', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(prevState => ({ ...prevState, pc: percentCompleted }));
          }
        },
        responseType: 'blob' // This tells axios to expect a binary response
      })
        .then(response => {
          // play the music i got back
          const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);

          // Create a new audio element and play the file
          const audioElement = new Audio(audioUrl);
          audioElement.play();
          setMsg("Upload successful!");
        })
        .catch(error => {
          setMsg("Upload failed");
          console.log("error:", error);
        })
    } else {
      setMsg("No file selected");
      return;
    }
  }

  return (
    <>

      <Row className="file-importer py-4 px-5 mt-5">
        <h3><strong>SEPARERA MUSIK</strong></h3>
        <Row className="my-4">
          <Col md={3}>
            <input onChange={(e) => handleUpload(e)} type="file" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex align-items-center justify-content-center ">
            <ProgressBar animated now={progress.pc} className="progress-import" />
          </Col>
        </Row>
      </Row>
      {msg && <span>{msg}</span>}
    </>
  );
}

export default MusicInput;