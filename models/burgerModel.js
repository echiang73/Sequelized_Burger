module.exports = function(sequelize, DataTypes) {
    var BurgerModel = sequelize.define("BurgerModel", {
      burger_name: DataTypes.STRING,
      pickedup: DataTypes.BOOLEAN
    });
    return BurgerModel;
  }