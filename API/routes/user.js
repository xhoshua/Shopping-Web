const router = require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("user test succ");
});


module.exports = router