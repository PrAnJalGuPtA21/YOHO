const express = require("express");
const router= express.Router();
const users = require('../models/userSchema')


// router.post('/register',(req,res)=>{
//     console.log(req.body)
// ;} );

// router.post('/register',(req,res)=>{
//     // console.log(res.body);
//     const {name ,email, hostelname, phone, unique_id, issue, time, roomnumber, description}=req.body;
//     const adduser = new users({
//         name ,email, hostelname, phone, unique_id, issue, time, roomnumber, description
//     });

//     // await adduser.save();
//     res.status(201).json(adduser);
//     console.log(adduser);

// })

router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name ,email, hostelname, phone, unique_id, issue, time, roomnumber, description}=req.body;

    if(!name || !email ){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name ,email, hostelname, phone, unique_id, issue, time, roomnumber, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports= router;