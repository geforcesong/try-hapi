class GeoController {
    async loadView(request, h) {
        return h.view('home/home.pug', { name: 'Andy' });
    }

    async loadAbout(request, h) {
        return h.view('about/index.pug', { name: 'george' });
    }
}

module.exports = GeoController;