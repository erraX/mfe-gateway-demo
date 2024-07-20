const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = 3000;

app.use(
  "/react-app",
  createProxyMiddleware({
    logger: console,
    target: "http://127.0.0.1:4001",
    changeOrigin: true,
  })
);

app.use(
  "/next-app",
  createProxyMiddleware({
    logger: console,
    target: "http://127.0.0.1:4002",
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello gateway!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
