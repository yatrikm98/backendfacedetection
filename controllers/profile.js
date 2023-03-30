const handleProfileGet=(req,res,db)=>{
    const { id } = req.params;
    db.select('*').from('users')
    .where({id})
    .then(user=>{
        if(user.length){
          return   res.json(user[0])
        } else {
            res.status(400).json("Error Getting User")
        }
    }).catch(err=>res.status(400).json("Not found"))
    }


    module.exports={
        handleProfileGet:handleProfileGet
    }