const http = require("http"); //This http module is already given by nodejs

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server is created");
  console.log("Request", req);
  console.log("Response", res);

  if (req.url == "/") {
    res.write("Home Page");
  } else if (req.url == "/about") {
    res.write("About Us");
  } else {
    res.write("Hello Sunny");
  }

  /**
   * When creating server at the end we must need to end the server otherwise it will be confused
   */
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running at port${PORT}`);
});
