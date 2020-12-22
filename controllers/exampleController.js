// this uses the model to interact with the DB
// it's the data that is being SENT TO THE CLIENT

// Get All Examples
// route:     GET /api/v1/example
// acess:     PUBLIC
exports.getExample = (req, res, next) => {
  res.send("GET example / THIS IS THE EXAMPLE ROUTE");
};

// Add Example
// route:     POST /api/v1/example
// acess:     PUBLIC
exports.addExample = (req, res, next) => {
  res.send("POST Example");
};

// Delete Example
// route:     DELETE /api/v1/example/:id
// acess:     PUBLIC
exports.deleteExample = (req, res, next) => {
  res.send("DELETE EXAMPLE");
};
