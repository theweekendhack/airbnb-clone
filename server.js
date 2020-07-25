const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const roomModel = require("./models/rooms.js");
require('dotenv').config({path:"config/keys.env"})// defaults is to create a file called .env and place it on the root

const app = express();

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars"); //middleware

app.use(express.static("public")); //middleware


// parse application/x-www-form-urlencoded ()
app.use(bodyParser.urlencoded({ extended: false }))




/*****************************ROUTES ***********************************************/

app.get("/",(req,res)=>{

    res.render("home",{
        title : "Home | Ugly Airbnb App",
        rooms : roomModel.getTopRooms(),
    });

});
 



app.get("/room-listing",(req,res)=>{
   
      res.render("roomListing",{

        title : "Room Listing | Ugly Airbnb App",
        rooms : roomModel.getAllRooms()
    });
})



app.get("/contact-us",(req,res)=>{
    
    res.render("contactUs",{
        title:"Home | Air BnB (Clone)"
    })

})

app.post("/contact-us",(req,res)=>{


    const accountSid = process.env.TWILIO_SID;
    const authToken =  process.env.TWILIO_AUTH_TOKEN;

    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create(
        {
                body: `Hi  ${req.body.firstName}  ${req.body.lastName}  . Thank you for registering with AirBNB. Someone from our company
                will contact you shortly!!!! `,
                from: '+14246250342', 
                to: `${req.body.phone}`
        })
       
        .then(message =>
        {

            //represents success!!!!! 
            console.log(message.sid);

                    
        client.calls
              .create({
                 url: 'http://demo.twilio.com/docs/voice.xml',
                 to: `${req.body.phone}`,
                 from: '+14246250342'
               })
              .then(call => 
                {
                    console.log(call.sid);
                    res.redirect("/welcome")

                })
              .catch(err=>console.log(`Error ${err}`));
    
        })
        .catch(err=>console.log(`Error ${err}`))
        
    });


    app.get("/register",(req,res)=>{


        res.render("register")
    });

    app.get("/welcome",(req,res)=>{

        res.render("dashboard"); //
    })




    const PORT = 3000;

    app.listen(PORT,()=>{
        console.log(`The Web Server is up and running`);
    });