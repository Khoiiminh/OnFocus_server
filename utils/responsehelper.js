export function successResponse( res, message, data={} ) {
    return res.json({
        statusCode: 200,
        message: message,
        data: data,
    });
}

export function errorResponse(res, statusCode, message, errorCode, errorMessage) {
    console.log(
            `error: ${errorCode},
            message: ${errorMessage}`
        );
    return res.status(statusCode).json({
        statusCode: statusCode,
        message: message
    });
}