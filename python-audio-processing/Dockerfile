# AntOne/python-audio-processing/Dockerfile
FROM python:3.10-slim

# Installera ffmpeg (krävs av demucs för mp3-hantering)
RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Kopiera requirements.txt och installera beroenden
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Kopiera resten av källkoden
COPY . .

# Skapa mappar för filer om de inte finns
RUN mkdir -p separated/htdemucs non-seperated

EXPOSE 5000

CMD ["python", "app.py"]