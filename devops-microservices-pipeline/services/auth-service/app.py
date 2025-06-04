from flask import Flask, jsonify
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
metrics = PrometheusMetrics(app)

@app.route('/')
def home():
    return jsonify(message="Auth Service is running")

@app.route('/login')
def login():
    return jsonify(message="Login successful")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
