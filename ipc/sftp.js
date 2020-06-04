const connect = (e, args) => {
  return args.name;
};

module.exports = [
    {
        name: "connect",
        callback: connect
    }
]