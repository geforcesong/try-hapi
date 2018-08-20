class GeoController{
    async loadView(request, h){
        return h.response('geo-loadview');
    }

    async loadAbout(request, h){
        return h.response('geo-loadabout');
    }
}

module.exports = GeoController;