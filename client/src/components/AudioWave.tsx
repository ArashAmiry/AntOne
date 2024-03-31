import WaveSurfer from "wavesurfer.js";
import "./AudioTimeline.css"
import { useEffect } from "react";

function AudioWave() {

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'rgb(200, 200, 200)',
            progressColor: 'rgb(100, 0, 100)',
            url: '/vocals.mp3', // Make sure this path is correct!
        });
    }
    )


    return (
        <div className="waveform" id="waveform"></div>
    )
}

export default AudioWave;