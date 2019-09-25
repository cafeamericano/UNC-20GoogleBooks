const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const app = express();

//Import DB models
var db = require("./models");

//Connect to database
var dbURL = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(dbURL, {
  useNewUrlParser: true
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get('/api/books', (req, res) => {
  db.Book.find({})
  .then(function(queryResult) {
    res.json(queryResult);
  })
  .catch(function(err) {
    res.json(err);
  });
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// var hungerGames = {
//   authors: ["Suzanne Collins"],
//   description:
//     "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
//   image:
//     "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//   link:
//     "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
//   title: "The Hunger Games"
// };

//START SERVER================================================================

// db.Book.create(hungerGames)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
