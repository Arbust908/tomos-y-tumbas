const fs = require('fs')
const path = require('path')
const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/../dev-data/data/tours-simple.json'))
)
exports.validateID = (req, res, next, id) => {
  const tourId = id
  const tourById = tours.find((tour) => {
    return tour.id === tourId
  })
  if (!tourById) {
    return res.status(404).json({
      status: 'failed',
      message: 'Not Tour found',
    })
  }
  next()
}
exports.validateBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'Mala info, BRO!',
    })
  }
  next()
}
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    reqTime: req.requestTime,
    tours,
  })
}
exports.getTourById = (req, res) => {
  res.status(200).json({
    status: 'success',
    tour: tours.find((tour) => {
      return tour.id === req.params.id
    }),
  })
}
exports.postTours = (req, res) => {
  const newID = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newID }, req.body)

  tours.push(newTour)
  fs.writeFile(
    path.join(__dirname, '/dev-data/data/tours-simple.json'),
    JSON.stringify(tours),
    (err) => {
      if (err) {
        res.status(560).json({
          status: 'error',
          data: err,
        })
      }
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      })
    }
  )
}
exports.patchTourById = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: tours.find((tour) => {
        return tour.id === req.params.id
      }),
    },
  })
}
exports.deleteTourById = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  })
}
