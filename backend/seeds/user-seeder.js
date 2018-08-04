const faker = require("faker");
const mongoose = require("mongoose");

const Users = require("../db/users");

//db connection
mongoose.connect("mongodb://localhost:27017/nununails", { useNewUrlParser: true });

const BUILD_USER_NUM = 10;

let done = 0;
for(let i = 0; i < BUILD_USER_NUM; i++){
    Users.create({
        username: `user${i}`,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
    });
    if(done === BUILD_USER_NUM) {
        mongoose.disconnect();
    }
};