const { code, messages } = require('./response.properties.json');

/**
 * Create the response to be sent in the case of an error occuring.
 * @param {String} errorCode - the code indicating the type of error.
 * @param {String} errorMessage - the message describing the error.
 */
const errorResponse = (errorCode, errorMessage) => ({
    isError: true,
    error: {
        errorCode,
        errorMessage,
    },
});

/**
 * Create the object to be used in the body of all Success Responses.
 * @param {String} successCode - the code indicating the type of success.
 * @param {String} successMessage - the message describing the successful operation.
 */
const successResponse = (successCode, successMessage) => ({
    successCode,
    successMessage,
});

/**
 * Creates the response to be sent in case of successfully creating a resource.
 */
const createSuccess = () => ({
    isError: false,
    success: successResponse(code, messages.create),
});

/**
 * Creates the response to be sent in case of successfully retrieving a resource.
 * @param {Object} resource - the resource that was retrieved.
 */
const readSuccess = (resource) => ({
    isError: false,
    success: successResponse(code, messages.read),
    resource,
});

/**
 * Creates the response to be sent in case of successfully updating a resource.
 */
const updateSuccess = () => ({
    isError: false,
    success: successResponse(code, messages.update),
});

/**
 * Creates the response to be sent in case of successfully deleting a resource.
 */
const deleteSuccess = () => ({
    isError: false,
    success: successResponse(code, messages.delete),
});

module.exports = {
    successResponse,
    errorResponse,
    createSuccess,
    readSuccess,
    updateSuccess,
    deleteSuccess,
};
