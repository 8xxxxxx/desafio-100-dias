from flask import Flask, url_for, render_template

# Initializing
app = Flask(__name__)

# Routes
@app.route('/')
def hello_world():
    title = "Students Manager"
    student = [
        {"name": "Joseph", "link": True}
        {"name": "Pietro", "link": True}
        {"name": "Robert", "link": False}
    ]
    #return 'Hello, Flask!'
    return render_template('index.html', title=title, student=student)

@app.route('/about')
def about():
    return """
    <strong>Codi Student</strong>: subscribe in our channel!
    <a href="https://www.youtube.com/@CodiAcademyTV"> YouTube </a>
"""

# Starting
app.run(debug=True)