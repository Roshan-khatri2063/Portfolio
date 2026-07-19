const notFound = (req, res, next) => {
    res.ststus(400).json({
        status: 'error',
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};

export default notFound;
