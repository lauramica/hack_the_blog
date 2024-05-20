require("dotenv").config();

async function runAllSeeders() {
  await require("./roleSeeder")();
  await require("./userSeeder")();
  await require("./articleSeeder")();
  await require("./commentSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
