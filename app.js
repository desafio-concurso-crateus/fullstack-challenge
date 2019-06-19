const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

const researchLines = require("./data/research-lines.json");
const detailedResearchLines = require("./data/detailed-research-lines.json");

app.options("/*", function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.get("/research-lines", (req, res) => {
    res.json(researchLines);
});

app.get("/research-lines/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selected = detailedResearchLines.find((el) => el.id === id);
    if (selected) {
        res.json(selected);
    } else {
        res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});