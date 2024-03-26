import os

from flask import Flask, request, send_from_directory, send_file
from flask_cors import CORS
import demucs.separate
import zipfile

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
            vocals_path = os.path.join(separatedDirectory, "vocals.mp3")
            instrumental_path = os.path.join(separatedDirectory, "no_vocals.mp3")

            if os.path.isfile(vocals_path): #and os.path.isfile(instrumental_path):
                zip_filename = "tracks.zip"
                zip_path = os.path.join(separatedDirectory, zip_filename)
                print(zip_path)
                with zipfile.ZipFile(zip_path, 'w') as zipf:
                    zipf.write(vocals_path, arcname="vocals.mp3")
                    zipf.write(instrumental_path, arcname="no_vocals.mp3")
                print(zip_path)
                return send_file(zip_path, as_attachment=True), 200
            else:
                return 'File not found.', 404
        except Exception as e:
            return str(e), 500

    return 'Unsuccessfully finished.'


if __name__ == '__main__':
    app.run(port=5000)
