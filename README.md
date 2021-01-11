# Designing, developing and deploying of a web based Application for medical certificates management
### Focus React Js Boot Camp 2020
###### Developers: Carlos Cordero (carlencordero@gmail.com), Cesar Amaya Soriano(ceschom1010@hotmail.com), Herbert Fernández Tamayo (hftamayo@gmail.com)
###### Group #1


### Table of Content
1. Project's overview
2. Dependencies
3. Screen Recording
4. Technical details
    1. Planning and Designing phase
    2. Developing phase
    3. Deploying phase
5. Future improvements

### 1. Project's overview
The project has been designed, developed and deployed to manage the process of register medical certificates of the workforce of any company, it has an interface to record employee's general information and a second one to add details of a medical certificate. Before use the system, every user needs to validate his/her credentials. 

The workgroup of developers decided to develop two versions: the first one has an interface oriented to english speakers and the backend is using contentful; the second one has an interface for spanish speakers and the backend is using firebase, the main reason of manage version is based two compare two backend as well as to acquire additional skills to polish our profesional profile. Both version use Reactjs for FrontEnd.

The first version's CRUD have been developed by Herbert Fernández Tamayo, the second version's CRUD have been developed by Cesar Amaya Soriano; in both version Carlos Cordero was in charge of adding the authentication module and the deploy process.

This README file is intentional written in english thinking in developers and users who don't speak our mother language, which is spanish, and because, Focus ITO's clients are english speakers and surely their workforce needs to have skills in this language.

The project's link is: [Project's Main Link](https://medcertificates.netlify.app/#/)

User's credentials: ejemplo@ejemplo.com and the password is Contrasenia1

### 2. Dependencies and Technical Details
1. English version of the System:
    1. Dependencies: npx, react-router-dom, react-hook-form, typescript, redux, react-redux, @reduxjs/toolkit, react-query, grommet, contentful, contentful-management, @auth0/auth0-react, @reduxjs/toolkit, luxon, netlify-cli
    2. FrontEnd: ReactJS: redux, grommet, react-query
    3. BackEnd: Contentful
    4. Authentication: Auth0
    5. Deploy: Netlify
2. Spanish version of the System:
    1. Dependencies: npx, react-router-dom, react-hook-form, typescript, redux, react-redux, @reduxjs/toolkit, react-query, grommet, contentful, contentful-management, @auth0/auth0-react, @reduxjs/toolkit, luxon, netlify-cli
    2. FrontEnd: ReactJS: redux, grommet, react-query
    3. BackEnd: Firebase
    4. Authentication: Auth0
    5. Deploy: Netlify


### 3. Screen Recording
In the next video the user may have access how the project works as well and overwiew of the project's tree :

[Project's Overview](https://youtu.be/KLuP--zpmb4)


### 4. Technical Details:

### 4.1 Planning and Designing
The team decided to use trello to planning the project and SCRUM as the Agile methodology to execute it. During the execution of the planned sprints we used a slack channel to communicate at least once in a day or when we need to manage any questions or situations related to the source code

![planning01.png](./img/planning01.png?raw=true "Trello SCRUM boards")

![planning02.png](./img/planning02.png?raw=true "Slach channel timeline")

### 4.2 Developing
The backend was developed using Contenful CMS, we used Visual Studio Code as the prefered IDE

![developing01.png](./img/developing01.png?raw=true "Contentful models")


### 4.3 Deploying
Contentful and Auth0 were part of the tools used during the process of deploying. To use the application the credentials are: ejemplo@ejemplo.com and Contrasenia1 as the password.

![deploying01.png](./img/deploying01.png?raw=true "Deploying process")

![deploying02.png](./img/deploying02.png?raw=true "Deploying process")

### 5. Project's future improvements
1. Integrate both application's version in one single repository.
2. Expand the functions related to medical certificates such as search for specifics entries, validate user's inputs between others.
3. Run test units.
4. Apply other DevOps good practices.
5. Use NodeJS as the backend.
