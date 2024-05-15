const { faker } = require("@faker-js/faker");
const { User } = require("../models");

async function userSeeder() {
  const users = [];

  for (let i = 0; i < 50; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
      password: "1234",
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
}

module.exports = userSeeder;
