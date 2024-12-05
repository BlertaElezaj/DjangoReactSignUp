Full-Stack Authentication System with Django & React

Overview

    This project demonstrates how to build a full-stack authentication system using Django and React. It features user registration, login, logout, and JWT-based authentication, integrated with a responsive React frontend.

Objectives

    Build a secure authentication system.
    Implement JWT authentication.
    Integrate a modern React frontend with a Django backend.

Project Structure
        project/
    ├── backend/    # Django Backend
    │   ├── manage.py
    │   ├── accounts/  # Custom User Application
    │   └── ...
    ├── frontend/   # React Frontend
    │   ├── src/
    │   ├── public/
    │   └── ...

Setup Instructions

Backend Setup

    Navigate to the backend/ directory:
        cd backend
    Create and activate a virtual environment:

        python -m venv venv
        venv\Scripts\activate    
    Install required Python packages:

        pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
    Start a new Django project and application:

        django-admin startproject backend .
        python manage.py startapp accounts

    Make migrations and run the server:

        python manage.py makemigrations
        python manage.py migrate
        python manage.py runserver

Frontend Setup

    Navigate to the frontend/ directory:
        cd frontend


    Create a React app using Vite:
        npm create vite@latest frontend

    Install dependencies:
        npm install
        npm install react-router-dom axios

    Start the React development server:

        npm run dev
        Access the frontend application: After running the above command, Vite will provide a URL like http://localhost:5173 where you can view your application in the browser

CREATE SUPERUSER TO ACCESS ADMIN PANEL:
 
    Activate the Virtual Environment
        venv\Scripts\activate 
    Run the Create Superuser Command
        python manage.py createsuperuser
    Enter Superuser Details
        Provide the following details when prompted:

        Username: Enter a username for the superuser.
        Email address: Enter an email address (optional, depending on your configuration).
        Password: Set a secure password (must meet Django's password validators).

    Access the Admin Panel:

        python manage.py runserver

    Open your browser and navigate to:

        http://127.0.0.1:8000/admin
        Log in using the credentials of the superuser you just created.
