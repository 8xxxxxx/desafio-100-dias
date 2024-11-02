1. **Create a New Django Project**

   Open the terminal and navigate to the directory where you want to start the project. Run the following command to create your Django project:

   ```bash
   django-admin startproject myproject
   ```

   This will create a folder named `myproject` containing the basic Django project structure.

2. **Enter the Project Directory**

   Move into the newly created project directory:

   ```bash
   cd myproject
   ```

3. **Create the "Core" App**

   Inside the project directory, create the app named "Core" with the following command:

   ```bash
   python manage.py startapp core
   ```

   This will create a `core` folder inside your project directory, containing the initial structure for the app.

4. **Register the "Core" App in the Django Project**

   Open the `settings.py` file in `myproject/myproject/settings.py` and add `'core'` to the `INSTALLED_APPS` list:

   ```python
   INSTALLED_APPS = [
       # Other default Django apps
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
       # Core app
       'core',
   ]
   ```

5. **Run the Server to Test the Setup**

   Now, start the server to check if the project and the "Core" app are set up correctly:

   ```bash
   python manage.py runserver
   ```

6. **Access the Project in Your Browser**

   Open your browser and go to `http://127.0.0.1:8000`. This confirms that your project is working.

