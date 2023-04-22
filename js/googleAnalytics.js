(function (b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
        function () {
            (b[l].q = b[l].q || []).push(arguments);
        });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '/js/analytic.js';
    r.parentNode.insertBefore(e, r);
}(window, document, 'script', 'ga'));
ga('create', 'UA-110593089-1');
ga('send', 'pageview');