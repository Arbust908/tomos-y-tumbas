const fs = require('fs')
const path = require('path')

const getResource = (resource) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, `/../data/${resource}.json`))
  )
}

exports.getAll = (req, res) => {
  res.status(200).json({
    status: 'success',
    reqTime: req.requestTime,
    data: getResource(req.params.resource),
  })
}
