require.config({
    baseUrl:"/",
    paths:{
        'header':'/js/modules/header',
        'footer':'/js/modules/footer',
        'jquery':'/libs/jquery.min',
        'swiper':'/libs/swiper.min',
        'myswiper':'/js/modules/myswiper',
        'url':'/js/url',
        'template':'/libs/template-web',
        'request':'/js/modules/request',
        'zoom':'/libs/jquery.elevateZoom-3.0.8.min',
        'cookie':'/libs/jquery.cookie'
    },
    shim: {
        'zoom': {
            deps: ['jquery']
        },
        'cookie':{
            deps: ['jquery']
        }
    }
})