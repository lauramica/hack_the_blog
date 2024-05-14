const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

async function commentSeeder() {
  const comments = [];

  for (let i = 0; i < 50; i++) {
    comments.push({
      content: faker.lorem.lines(3),
      articleId: faker.number.int({ min: 1, max: 50 }),
      userId: faker.number.int({ min: 1, max: 50 }),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
}

module.exports = commentSeeder;
