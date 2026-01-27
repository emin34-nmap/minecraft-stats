const express = require("express");
const app = express();

app.use(express.static("public")); // Public klasörünü dışarı aç

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});