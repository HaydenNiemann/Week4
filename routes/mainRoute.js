const path = require('node:path');
const express = require('express');



class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}


const users = [
    new User('user1', '1990-01-01', 34, 'user1@email.com', 'password1', true),
    new User('user2', '1985-05-15', 39, 'user2@email.com', 'password2', true),
    new User('user3', '1995-07-21', 29, 'user3@email.com', 'password3', true),
];

module.exports = {
    route: (app) => {
        app.post('/api/auth', function (req, res) {
            const { email, password } = req.body;
            console.log('Received credentials:', email, password);  //change email to user for user login
            const user = users.find(u => u.email === email && u.password === password); //change email to user for user login
        
            if (user) {
                const { password, ...userWithoutPassword } = user;
                res.json({ ...userWithoutPassword, valid: true });
            } else {
                res.status(401).json({ valid: false, message: 'Invalid credentials' });
            }
        });
        
    }
};

