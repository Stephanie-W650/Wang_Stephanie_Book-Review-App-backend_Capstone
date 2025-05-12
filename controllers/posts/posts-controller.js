import Post from '../../models/posts/posts-model.js';

async function seedPosts(req, res) {
    try {
        
        await Post.deleteMany({});
        await Post.create(
          {
            title: "book title 1",
            content: "Practical and motivating.",
            genre: "genre1"
          },
          {
            title: "book title 2",
            content: "Practical and motivating.",
            genre: "genre2"
          },
          {
            title: "book title 3",
            content: "Practical and motivating.",
            genre: "genre3"
          },
          {
            title: "book title 4",
            content: "Practical and motivating.",
            genre: "genre4"
          },
          {
            title: "book title 5",
            content: "Practical and motivating.",
            genre: "genre5"
          }       
        );
        res.status(201).redirect('/posts')
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

async function getPosts(req, res) {
  try {
const posts = await Post.find({});
res.status(200).json(posts);
  } catch (error) {
   res.status(400).json({ error: error.message})
  }
}

async function createPosts(req, res) {
try {
const post = await Post.create(req.body);
res.status(201).json(post);

} catch (error) {
  res.status(400).json({error: error.message})
}
}


export {
  seedPosts,
  getPosts,
  createPosts
}


