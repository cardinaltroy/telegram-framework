const sequelize = require('./index');
const { DataTypes } = require('sequelize');


const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.STRING, unique: true, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    balance: { type: DataTypes.INTEGER, defaultValue: 0 },
    ref: { type: DataTypes.STRING }
})

const Settings = sequelize.define('settings', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    key: { type: DataTypes.STRING, unique: true, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false },
})

module.exports = { User, Settings }