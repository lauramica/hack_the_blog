const { faker } = require("@faker-js/faker");
const { User } = require("../models");

async function userSeeder() {
  const users = [];

  users.push({
    firstname: "admin",
    lastname: "admin",
    email: "admin@admin.com",
    password: "1234",
    roleId: 1,
  });

  users.push({
    firstname: "anonymous",
    lastname: "user",
    email: "anonymous@admin.com",
    password: "1234",
    roleId: 3,
  });

  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
      password: "1234",
      roleId: 2,
    });
  }

  for (let i = 0; i < 20; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
      password: "1234",
      roleId: 3,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
}

module.exports = userSeeder;
