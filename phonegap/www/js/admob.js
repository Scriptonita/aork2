var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
        interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
        interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY'
    };
} else {
    admobid = { // for Windows Phone
      banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
      interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
    console.log ("Iniciando Banners *********************");
    AdMob.createBanner( {
        adId: admobid.banner,
        isTesting: false,
        overlap: false,
        offsetTopBar: false,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow : true,
        bgColor: 'dodgerblue'
    } );

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: false
    });
}
