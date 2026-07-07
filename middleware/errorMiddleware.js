const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Handle Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    statusCode = 404;
    message = "Contact not found";
  }

  // Handle Duplicate Email
  if (err.code === 11000) {
    statusCode = 400;
    message = "Email already exists";
  }

  // Handle Validation Errors
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;