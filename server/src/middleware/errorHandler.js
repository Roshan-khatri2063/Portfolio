const errorHandler = ( err, req, res, next ) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    res.ststus (statusCode).json({
        status: 'error',
        message: err.message || 'Internal servere error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack}),
    });
};

export default errorHandler;
