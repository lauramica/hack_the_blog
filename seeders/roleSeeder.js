const { Role } = require("../models");

async function roleSeeder() {
  const roles = [];

  roles.push(
    {
      name: "admin",
      code: 300,
    },
    {
      name: "blogger",
      code: 200,
    },
    {
      name: "reader",
      code: 100,
    },
  );

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
}

module.exports = roleSeeder;
