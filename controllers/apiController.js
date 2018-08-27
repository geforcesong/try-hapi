class ApiController {
    async loadView(request, h) {
        return request.payload;
    }
}

module.exports = ApiController;