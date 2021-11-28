# Teebay
TeebayClientApp is the frontend of the application . 
TeebayAPI is the backend of the application .

to run the front end  application clone the project .

cd into TeebayClientApp . 
Run the following commands in the command shell .
1- npm i  
2- npm

to run the backend after cloning 
install django,django-restframework,psycopg2 packages in TeebayAPI folder.
setup a postgres database . name the database (teebay) and password 1611049 and username = postgres.
if you want to create a database with different configuration then update the configuration info in settings.py file of teebayAPI/teebayAdmin/ project . 

After setting the database . Cd into teebayAdmin project and run the following commands -
1 - python manage.py makemigrations
2 - python manage.py migrate

these commands will migrate the database from the models defined in model.py of the teebayAPI/teebayAdmin/teebayApi/ project.
after that run - 
python manage.py runserver .
the backend server is now up and running . 

visit http://localhost:3000/ to use the client app . 
if you want to check the apis visit http://127.0.0.1:8000/api/ . to know more about urls look int urls.py of teebayAPI/teebayAdmin/teebayApi/
