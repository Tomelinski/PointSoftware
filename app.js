const express = require("express");

const routes = require("./routes");

const port = 8000;
const serverURL = `http://localhost:${port}`;

const app = express();

app.use(routes);

app.listen(port, () => {
  console.log(`Server running at ${serverURL}/`);
});
