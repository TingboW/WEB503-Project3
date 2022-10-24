const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const User = require("./models/User");
const app = express();
const port = process.env.PORT || 3030;
require("./connection");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Yha se JSON me data jaega or React ke Axios me << res.data >> ke through receive hoga
app.get("/",(req,res)=>{
    res.json({msg:"Welcome"})
})

// Login
app.post('/login',async(req,res) => {

    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;

    try{
        const getUser = await User.findOne({email: enteredEmail})
        
        if(!getUser){
            return res.json({code:0,msg: `User Not Found can't Login`})
            
        }else if(getUser){
            const userPass = getUser.password;
            const userName = getUser.name;
            if(enteredPassword===userPass){
                // here << code=1 >> is to compare that user is logged in or not
                return res.json({code:1,msg: `User Found and Login Successful`,userid:getUser._id,name:userName})
            }else{
                return res.json({code:-1,msg: `You entered Wrong Password`})
            }
        }
    }catch(err){
        console.log(err)
    }
})


// Signup
app.post("/signup",async(req,res)=>{

    const data = req.body;
    const password = req.body.password;
    const confirmPass = req.body.confirmPassword;

    if(password!==confirmPass){
        res.json({code:1,msg: `Signup Failed Passwords are not matching`})
    }else{
        try{
            const newUser = new User(data);
            await newUser.save().then(()=>{
                res.json({msg: `Signup Successful and Data Stored in Database`})
            }).catch((err)=>{
                console.log(err);
            })
        }catch(err){
            console.log(err);
        }
    }
})

// todo list
const PORT = 3030;
//const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    /*useFindAndModify: false */};

app.use(express.json());
app.use(cors());

//mongoose.connect("mongodb://localhost/todolist", connectionOptions)
//    .then(() => console.log("Connected successfully"))
//    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});