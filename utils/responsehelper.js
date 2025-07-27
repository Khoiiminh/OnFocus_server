export function successResponse( res, message, data={} ) {
    return res.status(200).json({
        success: true,
        message: message,
        data: data,
        error: null
    });
}

export function errorResponse(res, message, statusCode, code = null, details = null, data=null) {
    return res.status(statusCode).json({
        success: false,
        message: message,
        data: data,
        error: {
            code,
            details
        }
    });
}