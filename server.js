const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.json({ status: "All fields required" });
  }

  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n------\n`;

  fs.appendFileSync("messages.txt", data);

  res.json({ status: "Message received!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
