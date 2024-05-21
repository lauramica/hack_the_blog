const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "comment",
        deletedAt: "deletedAt",
        paranoid: true,
        timestamps: true,
      },
    );
    return Comment;
  }
}

module.exports = Comment;
