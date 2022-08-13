const { post } = require('../controllers');
const { Comment } = require('../models');

const commentData = [{
    comment_text: "I deserve a second chance",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "I hope the Human Resourse Management can help",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "I don't know if I got the bid for the position in the Department",
    user_id: 3,
    post_id: 3
},
{
    comment_text: "Don't let it bother you",
    user_id: 4,
    post_id: 4
}

];
const seedComments = () => Comment.bulkCReate(commentData);

module.exports = seedComments;
