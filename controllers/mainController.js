const express = require('express');
const router = express.Router();
const DataSchema = require('../model/Data');

router.post('/find', (req, res) => {
    var { startDate, endDate, minCount, maxCount } = req.body;
    // Aggregating query with params
    DataSchema.aggregate([
      // This query for calculating sum of counts
      {
        $project: {
          _id: false,
          key: 1,
          createdAt: 1,
          totalCount: {
            $reduce: {
              input: '$counts',
              initialValue: 0,
              in: { $add: ['$$value', '$$this'] }
            }
          }
        }
      },
      // This query for filtering data
      {
        $match: {
          $and: [
            { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } },
            { totalCount: { $gt: minCount, $lt: maxCount } }
          ]
        }
      }
    ])
      .exec()
      .then(data => {
        res.status(200).json({
          code: 0,
          msg: 'Success',
          records: data
        });
      })
      .catch(err => {
        Error.systemError(res, err);
      });
  });
  
  module.exports = router;
  