import Comment from '../../models/comments/comments-model.js';
//function to seed the database with some sample comments 
async function seedComments(req, res) {
  try {
// Deleting all existing comments before seeding new comments
    await Comment.deleteMany({});
// Creating new comments in the database
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
    // res.status(201).redirect('/comments')
    res.status(201).redirect({ success: 'sucessfully seeded.' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// get all comments 
async function getComments(req, res) {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
//Create comments
async function createComments(req, res) {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//delete comments
async function deleteComment(req, res) {
  try {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteComment);

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


// update comments
async function updateComments(req, res) {
  try {

    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updateComments);

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// get a comment by id
async function getComment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export {
  seedComments,
  getComments,
  createComments,
  deleteComment,
  updateComments,
  getComment
}