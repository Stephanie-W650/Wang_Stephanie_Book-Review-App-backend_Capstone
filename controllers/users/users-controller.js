import User from '../../models/users/users-model.js';

async function seedUsers (req, res) {
    try {
        await User.deleteMany({});
        await User.create (
            {
                name: "Sophia Smith",
                username: "sophie_username",
                email: "sophia@example.com"
              },
              {
                name: "Jamal Johnson",
                username: "jamal_username",
                email: "jamal@example.com"
              },
              { 
                name: "Lena Williams",
                username: "lena_username",
                email: "lena@example.com"
              },
              {
                name: "Oliver Smith",
                username: "Oliver_username",
                email: "Oliver@example.com"
              },
              {
                name: "Jack Jones",
                username: "Jack_username",
                email: "Jack@example.com"
              },
              { 
                name: "Harry Williams",
                username: "Harry_username",
                email: "Harry@example.com"
              },
              {
                name: "Charlie Brown",
                username: "Charlie_username",
                email: "Charlie@example.com"
              },
              {
                name: "Emily Evans",
                username: "Emily_username",
                email: "Emily@example.com"
              },
              { 
                name: "Isabella Roberts",
                username: "Isabella_username",
                email: "Isabella@example.com"
              },
              { 
                name: "Ava Davies",
                username: "Ava_username",
                email: "Ava@example.com"
              }
        ); 
        //res.status(201).json({ success: 'sucessfully seeded.' });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function getUsers(req, res) {
    try {
  const users = await User.find({});
  res.status(200).json(users);
    } catch (error) {
     res.status(400).json({ error: error.message})
    }
  }
  
  
  
  async function deleteUsers(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if (!user) {
        return res.status(404).json({ error: 'User not found'})
      }
      res.status(200).json({ message: 'User deleted successfully'});
    
    } catch (error) {
      res.status(400).json({error: error.message})
    }
    }

    
  
    async function updateUsers(req, res) {
      try {
      
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
        res.status(200).json({ message: 'User updated successfully'});
      
      } catch (error) {
        res.status(400).json({error: error.message})
      }
      }

      async function createUsers(req, res) {
        try {
        const user = await User.create(req.body);
        res.status(201).json(user);
        
        } catch (error) {
          res.status(400).json({error: error.message})
        }
        }

        async function getUser(req, res) {
            try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
            
            } catch (error) {
              res.status(400).json({error: error.message})
            }
            }

export {
    seedUsers,
    getUsers,
    deleteUsers,
    updateUsers,
    createUsers,
    getUser
}