const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Topics extends Model {}
// class Topics extends Model {
//     static upvote(body, models) {
//       return models.Votes.create({
//         user_id: body.user_id,
//         vote_id: body.vote_id
//       }).then(() => {
//         return Post.findOne({
//           where: {
//             id: body.topic_id
//           },
//           attributes: [
//             'id',
//             'post_url',
//             'title',
//             'created_at',
//             [
//               sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
//               'vote_count'
//             ]
//           ],
//           include: [
//             {
//               model: models.Comment,
//               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//               include: {
//                 model: models.User,
//                 attributes: ['username']
//               }
//             }
//           ]
//         });
//       });
//     }
//   }

// create fields/columns for Post model
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