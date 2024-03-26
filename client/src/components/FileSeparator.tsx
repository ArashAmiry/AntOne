import { useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./FileSeparator.css";
import JSZip from "jszip";

function MusicInput() {
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [downloadVocalUrl, setDownloadVocalUrl] = useState('');
  const [downloadInstrumentalUrl, setDownloadInstrumentalUrl] = useState('');
  const [isAudioProcessed, setIsAudioProcessed] = useState(false);
  const [msg, setMsg] = useState("");
  const imageVocalpath = require("../images/voice.jpg")
  const imageBeatPath = require("../images/drums.png")

  function handleUpload(e: any) {
    const selectedFile = e.target.files[0];
    setProgress((prevState) => { return { ...prevState, started: false, pc: 0 } });

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      setIsAudioProcessed(false);
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
        responseType: 'blob'
      })
        .then(response => {
          const zipBlob = response.data;

          // Use JSZip to read the zipped content
          JSZip.loadAsync(zipBlob).then(zip => {
            // zip is an object with the zipped files
            let audioFiles = Object.keys(zip.files).filter(fileName => fileName.endsWith('.mp3') || fileName.endsWith('.wav'));

            audioFiles.forEach((fileName, index) => {
              zip.files[fileName].async('blob').then(audioBlob => {
                // Create blob URLs for the audio files
                const audioUrl = URL.createObjectURL(audioBlob);

                if (index === 0) {
                  setDownloadVocalUrl(audioUrl); // For the first audio file
                } else if (index === 1) {
                  setDownloadInstrumentalUrl(audioUrl); // For the second audio file
                }
              });
            });
          });

          setIsAudioProcessed(true);
          return;
        })
        .catch(error => {
          setMsg("Försök igen");
          console.log("error:", error);
        })
    } else {
      setMsg("");
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
            <ProgressBar animated={!isAudioProcessed} now={progress.pc} className="progress-import" />
          </Col>
          <Col>
            {msg && <p>{msg}</p>}
          </Col>
        </Row>
      </Row>


      {isAudioProcessed &&
        <Row className="my-4 justify-content-between">
          <Col md={6} className="download-vocal text-center">
            <a href={downloadVocalUrl} download={"vocals.mp3"}>
              <Row>
                <Col md={12} className="py-5">
                  <img className="vocal" src={imageVocalpath} alt="Microphone" />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="pb-4 vocal-download-text">
                  <h4><strong>LADDA NER VOCALS</strong></h4>
                </Col>
              </Row>
            </a>
          </Col>
          <Col md={6} className="download-beat text-center">
            <a href={downloadInstrumentalUrl} download={"instrumental.mp3"}>
              <Row>
                <Col md={12} className="py-5">
                  <img className="vocal" src={imageBeatPath} alt="Microphone" />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="pb-4 vocal-download-text">
                  <h4><strong>LADDA NER INSTRUMENTAL</strong></h4>
                </Col>
              </Row>
            </a>
          </Col>
        </Row>
      }
    </>
  );
}

export default MusicInput;