const express = require("express");
const app = express();

app.use(express.static(".")); // Serve files from the current directory

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});
