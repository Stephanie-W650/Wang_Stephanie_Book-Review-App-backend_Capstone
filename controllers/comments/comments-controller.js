import Comment from '../../models/comments/comments-model.js';

async function seedComments(req, res) {
    try {
        
        await Comment.deleteMany({});
        await Comment.create(
            {
                content: "Amazing product! Totally exceeded my expectations.",
                username: "sophie_username",
                rating: 5
              },
              {
                content: "Good product.",
                username: "jamal_username",
                rating: 4
              },
              {
                content: "It's okay, but not as great as I had hoped.",
                username: "lena_username",
                rating: 3
              },
              {
                content: "Very disappointed with it.",
                username: "Oliver_username",
                rating: 2
              },
              {
                content: "it is good as expected",
                username: "Harry_username",
                rating: 4
              }
              
        );
        res.status(201).redirect('/comments')
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

async function getComments(req, res) {
  try {
const comments = await Comment.find({});
res.status(200).json(comments);
  } catch (error) {
   res.status(400).json({ error: error.message})
  }
}

async function createComments(req, res) {
try {
const comment = await Comment.create(req.body);
res.status(201).json(comment);

} catch (error) {
  res.status(400).json({error: error.message})
}
}




  async function updateComments(req, res) {
    try {
    
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body)
  
      res.status(200).json({ message: 'Comment updated successfully'});
    
    } catch (error) {
      res.status(400).json({error: error.message})
    }
    }

export {
    seedComments,
    getComments,
    createComments,
    updateComments
}