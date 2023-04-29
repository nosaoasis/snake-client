let connection;

const handleUserInput = (key) => {
  if (key === "\u0003") process.exit();

  if (key === "w") connection.write("Move: up");

  if (key === "a") connection.write("Move: left");

  if (key === "s") connection.write("Move: down");

  if (key === "d") connection.write("Move: right");

  if (key === "r") connection.write("Say: Lets Go!");
};
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

module.exports = { setupInput };
