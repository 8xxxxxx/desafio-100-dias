from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Define the home route
@app.route('/')
def home():
    return "Welcome to the To-Do List app!"

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
