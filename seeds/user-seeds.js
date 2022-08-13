const { User } = require('../models');

const userData = [{
    username: 'Luna',
    password: 'peringone'
},
{
    username: 'Rossie',
    password: 'peringtwo'
},
{
    username: 'Australia',
    password: 'brisbane'
},
{
    username: 'Switzerland',
    password: 'zurich'
},

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;