##### Day 81 – 11/24/24

Installing and Starting Flask

Set up your environment to work with Flask. Install Python, add the Flask library, and start your first web server directly from the Visual Studio Code terminal.

##### Day 82 – 11/25/24

Creating Routes in Flask

Explore how routes work in Flask. Create new routes with different HTML content to expand the navigation possibilities in the application

##### Day 83 – 11/26/24

Organizing Flask templates

Structure and organize templates in Flask to improve reusability and modularity.

---

1. folder
2. pip install flask
3. in the APP folder: python main.py
4. 

---

**1. Create Your Project Folder**  
1. Open a terminal.  
2. Navigate to the directory where you want to create your project:  
   ```bash
   cd path/to/your/projects
   ```  
3. Create a new folder for your Flask project (e.g., `my_flask_app`) and navigate into it:  
   ```bash
   mkdir my_flask_app  
   cd my_flask_app  
   ```  


**2. Create a Virtual Environment**  
1. Set up a virtual environment:  
   ```bash
   python -m venv venv  
   ```  
2. Activate the virtual environment:  
   - **Windows**:  
     ```bash
     venv\Scripts\activate  
     ```  
   - **macOS/Linux**:  
     ```bash
     source venv/bin/activate  
     ```  


**3. Install Flask**  
With your virtual environment activated, install Flask:  
```bash
pip install flask  
```  

**4. Create Your Flask Application**  
1. Open Visual Studio Code and load your project folder (`my_flask_app`).  
2. Create a new file named `app.py`.  
3. Add the following code to `app.py`:  
   ```python
   from flask import Flask  

   app = Flask(__name__)  

   @app.route('/')  
   def home():  
       return 'Hello, Flask!'  

   if __name__ == '__main__':  
       app.run(debug=True)  
   ```  


**5. Run the Flask Application**  
1. Open the terminal in Visual Studio Code (`Ctrl + ` ` or `View > Terminal`).  
2. Ensure your virtual environment is activated.  
3. Run your Flask app:  
   ```bash
   python app.py  
   ```  


**6. Access the Web Server**  
- Open your web browser and go to:  
  ```  
  http://127.0.0.1:5000/  
  ```  
- You should see **"Hello, Flask!"** displayed.  


