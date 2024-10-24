import express from "express";
import { configDotenv } from "dotenv";
const app = express();

const PORT = 3000;

/**
 * Define Each Route that is types on the URL Start
 */

app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.get("/about",(req,res)=>{
res.json({message :"About Us"})
})

app.get("/Contact_uS",(req,res)=>{
    res.send("Contact us page");
})
/**
 * Define Each Route that is types on the URL End
 */

app.listen(PORT || 4000 , ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})