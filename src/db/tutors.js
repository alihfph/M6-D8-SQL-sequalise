module.exports = (sequelize, DataTypes) => {
  const tutors = sequelize.define(
    "tutors",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return tutors;
};
