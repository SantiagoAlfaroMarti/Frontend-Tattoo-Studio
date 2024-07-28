# Frontend Tattoo Studio

Welcome to the frontend part of my tattoo studio.
<br><br>
<img src="./img/tattoostudio.jpg" width="600">
</a>

<details>
  <summary>Table of Contents</summary>
  <ol>
 <li><a href="#description">Description</a></li>
    <li><a href="#objetive">Objetive</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#local-installation">Local installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br>

## Description
This project is dedicated to the creation of the Frontend that will interact with our Backend, which handles the operations of the tattoo studio. We will develop pages that will allow users to register and log in, access and update their profile, and review their scheduled appointments. In addition, sections will be implemented to check available services and schedule new appointments. We will also include an administration panel that will allow to manage and update the application information as needed.<br><br>

## Objetive
The goal of this project is to create an interface for the application that is adaptable and allows access and use by clients, professionals, as well as an administrator. For this, I am using React, with the intention of fully mastering this tool.

## Stack
<div align="center">
<a>
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="mongo" />
</a>
<a>
    <img src= "https://img.shields.io/badge/css-1D7CF2?style=for-the-badge&logo=css3&logoColor=white" alt="node" />
</a>
<a>
    <img src= "https://img.shields.io/badge/HTML5-FF6C37?style=for-the-badge&logo=HTML5&logoColor=white"alt="node" />
</a>
<a>
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black" alt="js" />
</a>
<a>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
</a>
<a>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="ts" />
</a>
<a>
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" alt="ts" />
</a>
<a>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" alt="ts" />
</a>
<a>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="NPM" alt="ts" />
</a>
<a>
    <img src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="NPM" alt="ts" />
</a>
</div>

## Local installation

1. Clone this repository:

`$ git clone https://github.com/SantiagoAlfaroMarti/Frontend_Tattoo_Studio_React.git`

2. Install node modules:
`$ npm install -y`
3. `$ docker run -d --name mysqlc -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root  -v mysql_data:/var/lib/mysql mysql`
4. Connect this repository with our database:
- `DB_HOST=localhost`
- `DB_USER=root`
- `DB_PASSWORD=root`
- `DB_NAME=your_database_name`
- `DB_PORT=3306`
5. `$ npm run migrations`
6. `$ npm run db:seed`
7. `$ npm run dev`

## Endpoints

<h3>Authentication</h3>

| Method | URI                    | Action           | Auth           | Body                                              |
|:------:|:----------------------:|:----------------:|:--------------:|:---------------------------------------------------:|
| POST   | /api/auth/register     | Register user    | <center>N/A (public)</center>   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPassword" }` |
| POST   | /api/auth/login        | Login user       | <center>N/A (public)</center>   | `{ "email": "youremail@email.com",`<br>`"password_hash": "yourPasswordHashed" }` |

<h3>Users</h3>

| Method | URI                        | Action              | Auth               | Body                                              |
|:------:|:--------------------------:|:-------------------:|:------------------:|:---------------------------------------------------:|
| GET    | /api/users                 | View all users      | Token (superadmin) | <center>N/A</center>                                               |
| GET    | /api/users/profile         | View user profile   | Token (user)       | <center>N/A</center>                                               |
| PUT    | /api/users/profile         | Update user profile | Token (user)       | `{ "first_name": "newFirstName",`<br>`"last_name": "newLastName", "email": "newEmail",`<br>`"password_hash": "newPassword" }` |
| DELETE | /api/users/:id             | Delete user         | Token (superadmin) | <center>N/A</center>                                               |

<h3>Appointments</h3>

| Method | URI                        | Action                | Permissions      | Body                                              |
|:------:|:--------------------------:|:---------------------:|:----------------:|:---------------------------------------------------:|
| POST   | /api/appointments          | Create appointment    | Token (user)     | `{ "appointment_date": "year-month-dayThour:minute:secondZ",`<br>`"service_id": 2 }` |
| PUT    | /api/appointments          | Update my appointment | Token (user)     | `{ "id": appointmentId,`<br>`"appointment_date": "newDate",`<br>`"service_id": "newService" }` |
| GET    | /api/appointments/:id      | Retrieve appointment  | Token (user)     | <center>N/A</center>                              |
| GET    | /api/appointments          | View my appointments  | Token (user)     | <center>N/A</center>                              |
| DELETE | /api/appointments/:id      | Delete appointment    | Token (user)     |   <center>N/A</center>                      |

<h3>Services</h3>

| Method | URI                        | Action            | Permissions        | Body                                              |
|:------:|:--------------------------:|:-----------------:|:------------------:|:-------------------------------------------------:|
| GET    | /api/services              | View all services | <center>N/A (public)</center>       | <center>N/A</center>  |
| POST   | /api/services              | Create service    | Token (superadmin) | `{ "service_name": "serviceName",`<br>`"description": "serviceDescription" }` |
| PUT    | /api/services/:id          | Update service    | Token (superadmin) | `{ "service_name": "newServiceName",`<br>`"description": "newDescription" }` |
| DELETE | /api/services/:id          | Delete service    | Token (superadmin) | <center>N/A</center>                              |


<h3>Roles</h3>

| Method | URI                        | Action         | Permissions        | Body                                              |
|:------:|:--------------------------:|:--------------:|:------------------:|:-------------------------------------------------:|
| GET    | /api/roles                 | View all roles | Token (superadmin) | <center>N/A</center>                              |
| POST   | /api/roles                 | Create role    | Token (superadmin) | `{ "id": roleId,`<br>`"name": "roleName" }`       |
| PUT    | /api/roles/:id             | Update role    | Token (superadmin) | `{ "id": newRoleId,`<br>`"name": "newRoleName" }` |
| DELETE | /api/roles/:id             | Delete role    | Token (superadmin) | <center>N/A</center>                              |

## Development

```js
const developer = "SantiagoAlfaro";

console.log("Developed by: " SantiagoAlfaro);
```
## Contact

- **Santiago Alfaro Martí**
  - [GitHub](https://github.com/SantiagoAlfaroMarti)
