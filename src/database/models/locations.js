import { Model, DataTypes } from 'sequelize';
import connection from './../config/connection'

const InitLocations = (sequelize, Types) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  console.log(sequelize);
  Locations.init({
    name: Types.STRING,
    description: Types.STRING,
    address: Types.STRING,
    phone: Types.STRING,
    website: Types.STRING,
    price: Types.NUMBER,
    rating: Types.NUMBER,
    serviceStarts: Types.TIME,
    serviceEnds: Types.TIME,
    logo: Types.STRING,
    banner: Types.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Locations',
    tableName: 'locations',
  });

  return Locations;
};

export default InitLocations(connection, DataTypes)