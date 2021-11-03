import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes } = Sequelize;

const Product = db.define('Products', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true

})
export default Product;

