const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

async function articleSeeder() {
  const articles = [];

  for (let i = 0; i < 50; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAOnLXSaPbc4K0IId0dSTI050OfwusYAyfQzMiCF6mrwNPVdmN",
      userId: Math.floor(Math.random() * 50+1),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
}

module.exports = articleSeeder;
