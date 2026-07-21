const notFound = (req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};

export default notFound;
