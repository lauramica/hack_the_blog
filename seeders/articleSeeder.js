const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

async function articleSeeder() {
  const articles = [];

  for (let i = 0; i < 50; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image: faker.image.urlPicsumPhotos(),
      userId: faker.number.int({ min: 1, max: 50 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
}

module.exports = articleSeeder;
