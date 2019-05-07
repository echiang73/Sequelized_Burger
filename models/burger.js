module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      pickedup: DataTypes.BOOLEAN
    });
    return Burger;
  }