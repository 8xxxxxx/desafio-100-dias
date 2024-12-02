from flask import Flask, render_template, request, redirect, url_for

# Initialize the Flask application
app = Flask(__name__, template_folder="templates")

# Define the home route
@app.route('/')
def index():
    return render_template("index.html")

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
