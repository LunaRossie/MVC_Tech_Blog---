const { Post } = require('../models');

const postData = [{
    title: "A great piece of advice you received",
    content: "Ways in which I can stay active",
    user_id: 1
},
{
    title: "What you've learned over the past year",
    content: "An event that made me sad and how it inspired me to better myself",
    user_id: 2
},
{
    title: "What you would change about yourself",
    content: "Be able to balance work and family",
    user_id: 3
},
{
    title: "How to take care of health",
    content: "Find fun activities to do after work",
    user_id: 4
},

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
