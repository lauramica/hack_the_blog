const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        code: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "role",
      },
    );
    return Role;
  }
}

module.exports = Role;
