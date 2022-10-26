const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({ 
        error: true, 
        status: err.status, 
        message: err.message || "internal server error" 
    })
}

module.exports = errorHandler