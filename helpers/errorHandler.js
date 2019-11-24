// Error list
const Errors = {};

// Error function for system errors
Errors.systemError = (res, err) => {
  res.status(500).json({
    code: 1,
    msg: 'The system has encountered an error.'
  });
};

// Error function for invalid syntax of request body
Errors.badRequest = (res, err) => {
  res.status(400).json({
    code: 2,
    msg: 'Request body syntax is wrong.'
  });
};

// Error function for invalid endpoint requests
Errors.notFound = res => {
  res.status(404).json({
    code: 3,
    msg: 'Endpoint is wrong.'
  });
};

// Error function for missing request parameters
Errors.parametersMissing = res => {
  res.status(400).json({
    code: 4,
    msg: 'One or more parameters are missing. Please provide "startDate", "endDate", "minCount", "maxCount" parameters.'
  });
};

// Error function for invalid request parameters
Errors.parametersWrong = res => {
  res.status(400).json({
    code: 5,
    msg:
      'Parameters must be startDate as the Date type (YYYY-MM-DD), endDate as the Date type (YYYY-MM-DD), minCount as the number type (e.g. 2200) and maxCount as the number type (e.g. 3000).'
  });
};

module.exports = Errors;
