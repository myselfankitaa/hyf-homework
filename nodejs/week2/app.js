import express, { query } from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/search", (req, res) => {
  try {
    const query = req.query.q; // Convert query to lowercase
    const jsonData = fs.readFileSync("./document.json");
    const data = JSON.parse(jsonData);

    if (!query) {
      return res.send(data);
    }

    let found = false;

    const matchingData = data.filter(
      (element) =>
        String(element.value).toLowerCase().includes(query.toLowerCase()) ||
        String(element.description).toLowerCase().includes(query.toLowerCase())
    );

    if (matchingData.length > 0) {
      res.send(matchingData);
      found = true;
    }
    if (!found) {
      res.status(404).send("Data does not exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There is an error in fetching data" });
  }
});

app.get("/document/:id", (req, res) => {
  const param = req.params.id;
  try {
    const jsonData = fs.readFileSync("./document.json");
    const data = JSON.parse(jsonData);

    const foundElement = data.find((element) => element.id === param);
    console.log(foundElement);

    if (foundElement) {
      res.json(foundElement);
    } else {
      res.status(404).send(`${param} does not match the Data`);
    }
  } catch (err) {
    res.status(500).send(err, `Error in parsing and reading the file`);
  }
});

app.post("/search", (req, res) => {
  try {
    const query = req.query.q;
    const fields = req.body.fields;

    if (query && fields) {
      return res
        .status(400)
        .send("Both query parameter and fields in body cannot be provided");
    }

    const jsonData = fs.readFileSync(path.resolve("./document.json"));
    const data = JSON.parse(jsonData);

    const results = data.filter((item) => {
      return Object.keys(fields).every((key) => {
        return item[key] === fields[key];
      });
    });

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send("No matching data found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Request could not completed" });
  }
});
