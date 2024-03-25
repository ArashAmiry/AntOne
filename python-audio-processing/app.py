import os

from flask import Flask, request, send_from_directory
from flask_cors import CORS
import demucs.separate

app = Flask(__name__)
CORS(app)

@app.route('/separation', methods=['POST'])
def separateToTwoStems():  # put application's code here

    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    if file:
        separatedDirectory = "C:\\GitRepos\\AntOne\\python-audio-processing\\separated\\htdemucs\\"
        nonSeparatedDirectory = ".\\non-seperated\\"
        filename = file.filename
        separatedDirectory += os.path.splitext(filename)[0]
        filepath = os.path.join(nonSeparatedDirectory, filename)
        file.save(filepath)

        try:
            demucs.separate.main(["--mp3", "--two-stems", "vocals", nonSeparatedDirectory + filename])
            if os.path.isfile(os.path.join(separatedDirectory, "vocals.mp3")):
                return send_from_directory(separatedDirectory, "vocals.mp3", as_attachment=True), 200
            else:
                return 'File not found.', 404
        except Exception as e:
            return str(e), 500

    return 'Unsuccessfully finished.'


if __name__ == '__main__':
    app.run(port=5000)
