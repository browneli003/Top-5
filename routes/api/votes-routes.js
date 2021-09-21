const router = require('express').Router();
const { Votes, Topics, User } = require('../../models');


router.get('/', (req, res) => {
// Vote routes
Votes.findAll({
    attributes: [
        'id',
        'topic_id',
        'user_id',
        'rank',
        'item_name'
    ],
})
    .then(dbVotesData => res.json(dbVotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Votes.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'topic_id',
            'user_id',
            'rank',
            'item_name'
        ],
        include: [
        {
                model: User,
                attributes: ['id']
        },
        {
                model: Topics,
                attributes: ['id', 'topic', 'vote_tally', 'user_id']
        }    
        ]  
    })
    .then(dbVotesData => res.json(dbVotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Votes.create({
        id: req.body.id,
        topic_id: req.body.topic_id,
        user_id: req.body.user_id,
        rank: req.body.rank,
        item_name: req.body.item_name
    })
    .then(dbVotesData => res.json(dbVotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Votes.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbVotesData => {
    if (!dbVotesData) {
        res.status(404).json({message: 'Vote not recorded!'});
        return;
    }
    res.json(dbVotesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;