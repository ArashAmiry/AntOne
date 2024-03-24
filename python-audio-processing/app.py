import os

from flask import Flask, request
import demucs.separate

app = Flask(__name__)


@app.route('/separation', methods=['POST'])
def separateToTwoStems():  # put application's code here

    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    if file:
        filename = "stuuuuurdy"
        filepath = os.path.join('C:\\Users\\Arash\\Desktop', filename)
        file.save(filepath)

        try:
            demucs.separate.main(["--mp3", "--two-stems", "vocals", "track with space.mp3"])
            return 'File uploaded and processed', 200
        except Exception as e:
            return str(e), 500

    return 'Hello World!'


if __name__ == '__main__':
    app.run(port=5000)
