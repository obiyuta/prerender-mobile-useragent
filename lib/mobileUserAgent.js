var useragent = require('express-useragent');

module.exports = {
    init: function() {
        this.MOBILE_USER_AGENT = (process.env.MOBILE_USER_AGENT) || 'Mobile';
    },

    beforePhantomRequest: function(req, res, next) {
        source = req.headers['user-agent'];
        this.ua = useragent.parse(source);
        next();
    },

    onPhantomPageCreate: function(phantom, req, res, next) {
        if (this.ua.isMobile) {
            mobileAgent = this.MOBILE_USER_AGENT;
            req.prerender.page.get('settings.userAgent', function(userAgent) {
                req.prerender.page.set('settings.userAgent', userAgent + ' ' + mobileAgent, function(){
                    next();
                });
            });
        } else {
            next();
        }
    }

}