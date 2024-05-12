window.Sui_APP = window.Sui_APP || {};

Sui_APP.UserAgent = (() => {
    let ua = navigator.userAgent;
    if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') === -1) {
        return 0;
    } else if ((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
        return 0;
    } else if (ua.indexOf('iPhone') > 0) {
        return 1;
    } else if (ua.indexOf('iPad') > 0) {
        return 1;
    } else if (ua.indexOf('iPod') > 0) {
        return 1;
    } else {
        return -1;
    }
});