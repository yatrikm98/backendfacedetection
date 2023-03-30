const returnRequestOptionsFromHere = (imageUrl)=>{
    const PAT = '7ec418804557448e8fb8711afc989e28';
    const USER_ID = '8o8ka7csebzs';       
    const APP_ID = 'test';
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    return requestOptions
  }

const handleApiCall=(req,res)=>{
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnRequestOptionsFromHere(req.body.input))
    .then(data=>data.json())
    .then(result=>{
        res.json(result)
    })
    .catch(err=>res.status(400).json("Unable to Work With Api"))
}

const handleImage=(req,res,db)=>{
    const {id}=req.body
    db('users')
      .where('id', '=', id)
      .increment('entries',1)
       .returning('entries') 
       .then(entries=>{ 
        res.json(entries[0].entries)
    })
    .catch(err=>res.status(400).json("Unable to get Entries"))
    }

    module.exports={
        handleImage:handleImage,
        handleApiCall:handleApiCall
    }