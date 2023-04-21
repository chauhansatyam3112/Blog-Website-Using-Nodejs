//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// lowdash
var _ = require('lodash');
// Load the core build.

// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');





//lowdash
// Golobal array to store the post obejstc
 var posts=[];
 var temp1="";
 var temp2="";
//  var temp=[];

app.get("/",function(req,res){
    

    res.render("home",{Home:homeStartingContent,posts:posts});
   // console.log(posts);
});
app.get("/about",function(req,res){
  res.render("about",{about:aboutContent,});
});
app.get("/contact",function(req,res){
  res.render("contact",{contact:contactContent});
});
// app.get('/', (req, res) => {
//   res.render('login');
//  });
app.get("/compose",function(req,res){
     res.render("compose");
});




app.post("/compose",function(req,res){
  // creating js object
    const post={
      title:req.body.blog,
      bodycompose:req.body.postBody
    };
    
   posts.push(post);
    // temp1=post.title;
    // temp2=post.bodycompose;
    // temp.push(post[0]).title;
   
    res.redirect("/");
    //  let op=req.body.blog;
    //  console.log(op);
});
//express routing Pareametrs

app.get("/posts/:topics",function(req,res){
  // console.log(req.params.topics);
  
  var temp1= _.lowerCase(req.params.topics);
   posts.forEach(function(post){
    if(_.lowerCase(post.title)===temp1)
    {
      //passing after checking the typed like day1 matches the day1 of this route
      //& then rendreing our post ejs file and sending title and cintent as key of
      //the currnet array posts 
      res.render("post",{title:post.title,content:(post.bodycompose)});
      // console.log("Mtached");
    }
   
    
  })
 
});











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
