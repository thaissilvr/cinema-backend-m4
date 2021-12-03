# AuditoriumAPI

#### Final project for Resilia Educação's fourth module. This API consists on auditoriums (rooms) in a movie theater and details from them. 

---
# General Info
#### The project was build using Node.js and the Express framework.
---
## Other libraries
#### Nodemon - runs the server automatically.
#### Supertest - runs tests on the route.
---
## Database
#### SQLite3 was used as a database for this project.
---

# Running the Server

Clone the project using a terminal
```bash
git clone https://github.com/thaissilvr/cinema-aud-m4.git
```
Access the project directory
```bash
cd cinema-aud-m4
```
Install depedencies
```bash
npm install
```
Run the server
```bash
npm run dev
```

## API STRUCTURE
#### This is a REST API, containing all the HTTP verbs: GET, POST, PUST and DELETE. The structure from each verb can be found below:
~~~
GET: /auditorium
GET: /auditorium/:id
POST: /auditorium
PUT: /auditorium/:id
DELETE: /auditorium
~~~

### RETURNING DATA
~~~JSON
{
    "id": 1,
    "room_number": 1,
    "type": "2D",
    "seats_av": 30,
    "total_capacity": 40
},
{
    "id": 2,
    "room_number": 2,
    "type": "2D",
    "seats_av": 40,
    "total_capacity": 40
},

{
    "id": 3,
    "room_number": 3,
    "type": "3D",
    "seats_av": 25,
    "total_capacity": 40
}

~~~


### RETURNING DATA USING AN ID
Return id = 3
~~~JSON
{
    "id": 3,
    "room_number": 3,
    "type": "3D",
    "seats_av": 25,
    "total_capacity": 40
}
~~~

### DELETING DATA USING AN ID
Deleting id = 3
~~~JSON
{
    "msg" : "Id deleted successfully",
    "error" : false
}
~~~
### CREATING NEW DATA
~~~JSON
{
    "id": 4,
    "room_number": 3,
    "type": "3D",
    "seats_av": 27,
    "total_capacity": 40
}
~~~
### UPDATING DATA USING AN ID
~~~JSON
{
    "id": 4,
    "room_number": 3,
    "type": "3D",
    "seats_av": 27,
    "total_capacity": 40
}
~~~

## Testing the API on the terminal
```bash
npm run test
````
