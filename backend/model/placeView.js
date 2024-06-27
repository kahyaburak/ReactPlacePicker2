function formatPlacesResponse(places) {
  return {places};
}

function formatMessageResponse(message) {
  return {message};
}

function formatErrorResponse(error) {
  return {error};
}

module.exports = {
  formatPlacesResponse: formatPlacesResponse,
  formatMessageResponse: formatMessageResponse,
  formatErrorResponse: formatErrorResponse,
};
