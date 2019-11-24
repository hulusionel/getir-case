const errorHandler = require('../helpers/errorHandler');

// This method checks request.body to check for the existing of certain parameters.
module.exports.verifyParams = (req, res, next) => {
  if (
    req.body.startDate == null || req.body.endDate == null ||
    req.body.minCount == null || req.body.maxCount == null
  ) {
    errorHandler.parametersMissing(res);
  }
  else if (req.body.constructor === Object && Object.keys(req.body).length < 4) {
    errorHandler.parametersMissing(res);
  }

  else next();
};

// This method checks the appropriateness of the values of the parameters.
module.exports.verifyTypes = (req, res, next) => {
  var { startDate, endDate, minCount, maxCount } = req.body;
  // Regex for valdidating dates
  var dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (
    typeof startDate === 'string' && startDate.match(dateRegex) &&
    typeof endDate === 'string' && endDate.match(dateRegex) &&
    typeof minCount === 'number' &&
    typeof maxCount == 'number'
  )
    next();
  else errorHandler.parametersWrong(res);
};
