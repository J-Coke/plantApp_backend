const app = require("./app");

const { PORT = 3000 } = process.env;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
