/* eslint @typescript-eslint/no-var-requires: "off" */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
