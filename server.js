const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");


const app = express();

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars"); //middleware

app.use(express.static("public")); //middleware

// parse application/x-www-form-urlencoded ()
app.use(bodyParser.urlencoded({ extended: false }))


// routes 
app.get("/",(req,res)=>{

        console.log("THIS IS SERVER CODE!!!!!!");
    
        res.render("home",{
            title:"Home | Air BnB (Clone)"
        })
});

app.get("/room-listing",(req,res)=>{
   
    res.render("roomListing",{
        title:"Room Listing | Air BnB (Clone)"
    })
})

app.get("/about-us",(req,res)=>{

    res.render("about",{
        title:"About | Air BnB (Clone)"
    })
})

app.get("/contact-us",(req,res)=>{
    
    res.render("contactUs",{
        title:"Home | Air BnB (Clone)"
    })

})

app.post("/contact-us",(req,res)=>{


    console.log(req.body)
    //console.log(`Name ${req.body.firstName}  ${req.body.lastName}`)

});




const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`The Web Server is up and running`);
});