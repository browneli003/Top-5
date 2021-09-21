const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Votes extends Model {}

Votes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        topic_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'topics',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'votes'
    }
);

module.exports = Votes;