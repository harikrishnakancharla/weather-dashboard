from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from flask_cors import CORS
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)
API_KEY = os.getenv("API_KEY")  # Load API key from .env
BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall'

@app.route('/weather', methods=['GET'])
def get_weather():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({'error': 'Latitude and longitude parameters are required'}), 400

    # Construct the API URL
    url = f"{BASE_URL}?lat={lat}&lon={lon}&exclude=hourly,daily&appid={API_KEY}&units=metric"

    try:
        # Make the API call
        response = requests.get(url)
        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({'error': 'Failed to fetch weather data'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()