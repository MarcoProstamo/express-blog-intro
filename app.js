const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    titolo: "Post 1",
    contenuto: "Lorem Ipsum",
    immagine: "./public/images/ciambellone.jpeg",
    tags: ["Sweet", "Soft", "Light"],
  },
  {
    titolo: "Post 2",
    contenuto: "Lorem Ipsum",
    immagine: "./public/images/cracker_barbabietola.jpeg",
    tags: ["Sweet", "Hard", "Light", "Small"],
  },
  {
    titolo: "Post 3",
    contenuto: "Lorem Ipsum",
    immagine: "./public/images/pane_fritto_dolce.jpeg",
    tags: ["Sweet", "Hard", "Heavy"],
  },
  {
    titolo: "Post 4",
    contenuto: "Lorem Ipsum",
    immagine: "./public/images/pasta_barbavietola.jpeg",
    tags: ["Heavy"],
  },
  {
    titolo: "Post 5",
    contenuto: "Lorem Ipsum",
    immagine: "./public/images/torta_paesana.jpeg",
    tags: ["Sweet", "Soft", "Heavy"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Server del mio blog"));
app.get("/bacheca", (req, res) => {
  const filter = req.query.filter ?? "";

  const filteredPosts = posts.filter((post) => {
    let validPost;
    post.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(filter.toLowerCase())) validPost = post;
    });
    return validPost;
  });

  res.json({ posts: filteredPosts, conteggio: filteredPosts.length });
});

app.listen(port, () => console.log("Server is Listening at port: " + port));
