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

    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
    setTimeout(() => {
      conn.write("Move: right");
    }, 2000);
    setTimeout(() => {
      conn.write("Move: down");
    }, 3000);
    setTimeout(() => {
      conn.write("Move: left");
    }, 4000);

    setInterval(() => {
      conn.write("Move: up");
    }, 5000);
  });

  return conn;
};

module.exports = { connect };
