const path = require('node:path');
const express = require('express');



class User {                                                            //define user class with properties
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}


const users = [                                                         //create array of users
    new User('user1', '1990-01-01', 34, 'user1@email.com', 'password1', true),
    new User('user2', '1985-05-15', 39, 'user2@email.com', 'password2', true),
    new User('user3', '1995-07-21', 29, 'user3@email.com', 'password3', true),
];


module.exports = {                                               //export module
    route: (app) => {                                            //export route
        app.post('/api/auth', function (req, res) {             //post request to authenticate user
            const { email, password } = req.body;               //get email and password from request body
            console.log('Received credentials:', email, password);  //console log email and password
            const user = users.find(u => u.email === email && u.password === password); //change email to user for user login
        
            if (user) {                                              //if user is found                   
                const { password, ...userWithoutPassword } = user;   //remove password from user object
                res.json({ ...userWithoutPassword, valid: true });   //send user object without password and valid true
            } else {                                            //else, if user is not found
                res.json({message: 'Invalid credentials' }); //error message for invalid credentials
            }
        });
        
    }
};

