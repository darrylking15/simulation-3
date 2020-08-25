const bcrypt = require('bcrypt'); 

module.exports = {
    login: async (req, res ) => {
        const db = req.app.get('db')
        
        const  {username, password} = req.body; 
        
        const user = await db.check_user(username)
        if(!user[0]){
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated){
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].username,

                } 
                res.status(200).send(req.session.user)
            } else{
                res.status(403).send('Username and/or password is incorrect.')
            }
        }
    }, 
    register: async (req, res) => {
        const db = req.app.get('db'); 
        const {username, password, profile_pic} = req.body; 
        const existingUser = await db.check_user(username); 
        if(existingUser[0]){
            return res.status(409).send('User already exists.')
        }
            const salt = bcrypt.genSaltSync(10); 
            const hash = bcrypt.hashSync(password, salt); 
            const [newUser] = await db.create_user([username, hash, profile_pic])
            req.session.user = {
                userId: newUser.id, 
                username: newUser.username,
                profile_pic: newUser.profile_pic 
                
            }
            res.status(200).send(req.session.user)


    }, 
    logout: (req, res) => {
        req.session.destroy(); 
        res.sendStatus(200); 

    }, 
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)

        }else {
            res.sendStatus(404)
        }
    }, 
    editUser: async (req, res) => {
        const db = req.app.get('db');
        const {username} = req.query; 
        const {id} = req.params; 
        
        const changeUser = await db.change_user(username, id)
        console.log(changeUser)
        
        
        
        
        res.status(200).send(changeUser[0].username)
        
        
        // console.log(changeUser)
    }
    
}