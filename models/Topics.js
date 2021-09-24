const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Topics extends Model {
  static upvote(body, models) {
      return models.Votes.create({
          user_id: 1,
          topic_id: 3
      }).then(() => {
          return Topics.findOne({
              where: {
                  id: 3
              },
              attributes: [
                  'id',
                  'topic',
                  'vote_tally',
                  'user_id',
                  [
                      sequelize.literal('(SELECT COUNT(*) FROM topics WHERE topics.id = vote.topics_id)'),
                      'vote_tally'
                  ]
              ]
          });
      });
  }
};


Topics.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vote_tally: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'topics'
  }
);

module.exports = Topics;