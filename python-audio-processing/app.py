import os

from flask import Flask, request
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
        filename = file.filename
        filepath = os.path.join('C:\\Users\\Arash\\Desktop', filename)
        file.save(filepath)

        try:
            print(filename)
            demucs.separate.main(["--mp3", "--two-stems", "vocals", "C:\\Users\\Arash\\Desktop\\" + filename])
            return 'File uploaded and processed', 200
        except Exception as e:
            return str(e), 500

    return 'Unsuccessfully finished.'


if __name__ == '__main__':
    app.run(port=5000)
