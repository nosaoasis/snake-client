const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("You received data: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: NOA");
  });

  conn.on("connect", () => {
    conn.write("Say: Game on....");
  });

  return conn;
};

module.exports = { connect };
