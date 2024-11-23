##### Day 061 – 11/04/2024

1. **Create a New Django Project**

   Open the terminal and navigate to the directory where you want to start the project. Run the following command to create your Django project:

   ```bash
   pip install django
   pip install django --user
   python -m pip install --upgrade pip --user
   setx PATH "%PATH%;C:\Python312\Scripts"
   setx PATH "%PATH%;C:\Users\rl10\AppData\Roaming\Python\Python312\Scripts"
   django-admin startproject myblog
   ```

   This will create a folder named `myblog` containing the basic Django project structure.

2. **Enter the Project Directory**

   Move into the newly created project directory:

   ```bash
   cd myblog
   ```

3. **Create the "Core" App**

   Inside the project directory, create the app named "Core" with the following command:

   ```bash
   python manage.py runserver
   python manage.py startapp blog
   ```

   This will create a `blog` folder inside your project directory, containing the initial structure for the app.

4. **Register the "Core" App in the Django Project**

   Open the `settings.py` file in `myproject/myproject/settings.py` and add `'blog'` to the `INSTALLED_APPS` list:

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
       'blog',
   ]
   ```

5. **Run the Server to Test the Setup**

   Now, start the server to check if the project and the "Core" app are set up correctly:

   ```bash
   python manage.py runserver
   ```

6. **Access the Project in Your Browser**

   Open your browser and go to `http://127.0.0.1:8000`. This confirms that your project is working.


**Other commands**

python manage.py makemigrations
python manage.py migrate

---

##### Day 062 – 11/05/2024

Creating an Application in Django

Create a Django Application, within the Django project, run the command python manage.py startapp application_name to create a new Django application.

---

##### Day 063 – 11/06/2024

Models in Django

Within your Django application, define models using the Django ORM to represent entities in your system.

Day 64 – 11/07/24
Migrations in Django

Run python manage.py makemigrations and python manage.py migrate to create and apply migrations to the database.

---

##### Day 65 – 11/08/24

Django Administration

Register models in your Django application’s admin.py file to manage data through the Django admin interface.

Access Django Admin and add some products to the database using the admin interface.

admin
123456

Comands:
python manage.py createsuperuser

---

##### Day 66 – 11/09/24

Views in Django

Create HTML templates to render pages using Django's template engine.
Develop a template for the page that lists products. Use Django template language tags to display product information.
Create a view that lists all registered products. This view should render a template showing the details of each product.


---