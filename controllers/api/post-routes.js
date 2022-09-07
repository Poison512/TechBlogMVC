router.post("/", (req, res) => { 
  const body = req.body;
  Post.create({ ...body, userId: req.session.userId })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
 });
  
 router.put("/:id", (req, res) => {
   Post.update() // fill in this code
 });
  
 router.delete("/:id", withAuth, (req, res) => {
  Post.destroy() // fill in this code
   });
 
