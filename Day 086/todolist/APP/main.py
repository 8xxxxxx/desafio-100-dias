from flask import Flask, render_template, request, redirect, url_for

# Initialize the Flask application
app = Flask(__name__, template_folder="templates")

# List to store tasks
tasks = []

# Define the home route
@app.route('/')
def index():
    return render_template("index.html", tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    task = request.form['task']
    tasks.append({"task": task, "done": False})
    return redirect(url_for('index'))

@app.rout("/edit/<int:index>", methods=["GET", "POST"])
def edit(index):
    task = tasks[index]
    if request.method == "POST":
        task["task"] = request.form["task"]
        return redirect(url_for("index"))
    else:
        return render_template("edit.html", task=task, index=index)

@app.route("/check/<int:index>")
def check(index):
    task = tasks[index]
    tasks[index]["done"] = not task[index]["done"]
    return redirect(url_for("index"))

@app.route("/delete/<int:index>")
def delete(index):
    del tasks[index]
    return redirect(url_for("index"))

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
