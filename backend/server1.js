const http = require("http");
const app = require("./app1");
app.set("port", process.env.PORT || 3000);
let server = http.createServer(app);
server.listen(process.env.PORT || 3000);

