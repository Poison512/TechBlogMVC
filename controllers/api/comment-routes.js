const router = require("express").Router();
const { Comment } = require("../../models/");
 
router.post("/", (req, res) => {
 Comment.create({ ...req.body, userId: req.session.userId })
   .then(newComment => {
     res.json(newComment);
   })
   .catch(err => {
     res.status(500).json(err);
   });
});
 
module.exports = router;