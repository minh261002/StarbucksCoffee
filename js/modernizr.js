"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-animation-audioloop-audiopreload-canvas-canvastext-contextmenu-cookies-cors-cryptography-customelements-customevent-customprotocolhandler-datauri-dataview-emoji-eventlistener-flash-forcetouch-fullscreen-geolocation-hashchange-hiddenscroll-history-htmlimports-ie8compat-inlinesvg-input-inputtypes-intl-json-ligatures-pointerevents-pointerlock-search-serviceworker-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-templatestrings-textareamaxlength-touchevents-typedarrays-unicode-unicoderange-urlparser-urlsearchparams-userdata-vibrate-video-videoautoplay-vml-webaudio-webgl-webintents-websockets-webworkers-xdomainrequest-setclasses !*/
!function (window, document, undefined) {
  function is(A, e) {
    return _typeof(A) === e;
  }

  function testRunner() {
    var A, e, t, n, o, r, i;

    for (var a in tests) {
      if (tests.hasOwnProperty(a)) {
        if (A = [], e = tests[a], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (t = 0; t < e.options.aliases.length; t++) {
          A.push(e.options.aliases[t].toLowerCase());
        }

        for (n = is(e.fn, "function") ? e.fn() : e.fn, o = 0; o < A.length; o++) {
          r = A[o], i = r.split("."), 1 === i.length ? Modernizr[i[0]] = n : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = n), classes.push((n ? "" : "no-") + i.join("-"));
        }
      }
    }
  }

  function setClasses(A) {
    var e = docElement.className,
        t = Modernizr._config.classPrefix || "";

    if (isSVG && (e = e.baseVal), Modernizr._config.enableJSClass) {
      var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      e = e.replace(n, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t), isSVG ? docElement.className.baseVal = e : docElement.className = e);
  }

  function createElement() {
    return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments);
  }

  function getBody() {
    var A = document.body;
    return A || (A = createElement(isSVG ? "svg" : "body"), A.fake = !0), A;
  }

  function addTest(A, e) {
    if ("object" == _typeof(A)) for (var t in A) {
      hasOwnProp(A, t) && addTest(t, A[t]);
    } else {
      A = A.toLowerCase();
      var n = A.split("."),
          o = Modernizr[n[0]];
      if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr;
      e = "function" == typeof e ? e() : e, 1 == n.length ? Modernizr[n[0]] = e : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = e), setClasses([(e && 0 != e ? "" : "no-") + n.join("-")]), Modernizr._trigger(A, e);
    }
    return Modernizr;
  }

  function cssToDOM(A) {
    return A.replace(/([a-z])-([a-z])/g, function (A, e, t) {
      return e + t.toUpperCase();
    }).replace(/^-/, "");
  }

  function injectElementWithStyles(A, e, t, n) {
    var o,
        r,
        i,
        a,
        d = "modernizr",
        w = createElement("div"),
        s = getBody();
    if (parseInt(t, 10)) for (; t--;) {
      i = createElement("div"), i.id = n ? n[t] : d + (t + 1), w.appendChild(i);
    }
    return o = createElement("style"), o.type = "text/css", o.id = "s" + d, (s.fake ? s : w).appendChild(o), s.appendChild(w), o.styleSheet ? o.styleSheet.cssText = A : o.appendChild(document.createTextNode(A)), w.id = d, s.fake && (s.style.background = "", s.style.overflow = "hidden", a = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(s)), r = e(w, A), s.fake ? (s.parentNode.removeChild(s), docElement.style.overflow = a, docElement.offsetHeight) : w.parentNode.removeChild(w), !!r;
  }

  function contains(A, e) {
    return !!~("" + A).indexOf(e);
  }

  function fnBind(A, e) {
    return function () {
      return A.apply(e, arguments);
    };
  }

  function testDOMProps(A, e, t) {
    var n;

    for (var o in A) {
      if (A[o] in e) return t === !1 ? A[o] : (n = e[A[o]], is(n, "function") ? fnBind(n, t || e) : n);
    }

    return !1;
  }

  function domToCSS(A) {
    return A.replace(/([A-Z])/g, function (A, e) {
      return "-" + e.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function computedStyle(A, e, t) {
    var n;

    if ("getComputedStyle" in window) {
      n = getComputedStyle.call(window, A, e);
      var o = window.console;
      if (null !== n) t && (n = n.getPropertyValue(t));else if (o) {
        var r = o.error ? "error" : "log";
        o[r].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else n = !e && A.currentStyle && A.currentStyle[t];

    return n;
  }

  function nativeTestProps(A, e) {
    var t = A.length;

    if ("CSS" in window && "supports" in window.CSS) {
      for (; t--;) {
        if (window.CSS.supports(domToCSS(A[t]), e)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in window) {
      for (var n = []; t--;) {
        n.push("(" + domToCSS(A[t]) + ":" + e + ")");
      }

      return n = n.join(" or "), injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function (A) {
        return "absolute" == computedStyle(A, null, "position");
      });
    }

    return undefined;
  }

  function testProps(A, e, t, n) {
    function o() {
      i && (delete mStyle.style, delete mStyle.modElem);
    }

    if (n = is(n, "undefined") ? !1 : n, !is(t, "undefined")) {
      var r = nativeTestProps(A, t);
      if (!is(r, "undefined")) return r;
    }

    for (var i, a, d, w, s, l = ["modernizr", "tspan", "samp"]; !mStyle.style && l.length;) {
      i = !0, mStyle.modElem = createElement(l.shift()), mStyle.style = mStyle.modElem.style;
    }

    for (d = A.length, a = 0; d > a; a++) {
      if (w = A[a], s = mStyle.style[w], contains(w, "-") && (w = cssToDOM(w)), mStyle.style[w] !== undefined) {
        if (n || is(t, "undefined")) return o(), "pfx" == e ? w : !0;

        try {
          mStyle.style[w] = t;
        } catch (D) {}

        if (mStyle.style[w] != s) return o(), "pfx" == e ? w : !0;
      }
    }

    return o(), !1;
  }

  function testPropsAll(A, e, t, n, o) {
    var r = A.charAt(0).toUpperCase() + A.slice(1),
        i = (A + " " + cssomPrefixes.join(r + " ") + r).split(" ");
    return is(e, "string") || is(e, "undefined") ? testProps(i, e, n, o) : (i = (A + " " + domPrefixes.join(r + " ") + r).split(" "), testDOMProps(i, e, t));
  }

  function testAllProps(A, e, t) {
    return testPropsAll(A, undefined, undefined, e, t);
  }

  var classes = [],
      tests = [],
      ModernizrProto = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(A, e) {
      var t = this;
      setTimeout(function () {
        e(t[A]);
      }, 0);
    },
    addTest: function addTest(A, e, t) {
      tests.push({
        name: A,
        fn: e,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(A) {
      tests.push({
        name: null,
        fn: A
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr(), Modernizr.addTest("cookies", function () {
    try {
      document.cookie = "cookietest=1";
      var A = -1 != document.cookie.indexOf("cookietest=");
      return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", A;
    } catch (e) {
      return !1;
    }
  }), Modernizr.addTest("customelements", "customElements" in window), Modernizr.addTest("cors", "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()), Modernizr.addTest("customprotocolhandler", function () {
    if (!navigator.registerProtocolHandler) return !1;

    try {
      navigator.registerProtocolHandler("thisShouldFail");
    } catch (A) {
      return A instanceof TypeError;
    }

    return !1;
  }), Modernizr.addTest("customevent", "CustomEvent" in window && "function" == typeof window.CustomEvent), Modernizr.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype), Modernizr.addTest("eventlistener", "addEventListener" in window), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function () {
    var A = navigator.userAgent;
    return -1 === A.indexOf("Android 2.") && -1 === A.indexOf("Android 4.0") || -1 === A.indexOf("Mobile Safari") || -1 !== A.indexOf("Chrome") || -1 !== A.indexOf("Windows Phone") || "file:" === location.protocol ? window.history && "pushState" in window.history : !1;
  }), Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("serviceworker", "serviceWorker" in navigator), Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("templatestrings", function () {
    var supports;

    try {
      eval("``"), supports = !0;
    } catch (e) {}

    return !!supports;
  }), Modernizr.addTest("typedarrays", "ArrayBuffer" in window);
  var supports = !1;

  try {
    supports = "WebSocket" in window && 2 === window.WebSocket.CLOSING;
  } catch (e) {}

  Modernizr.addTest("websockets", supports), Modernizr.addTest("xdomainrequest", "XDomainRequest" in window), Modernizr.addTest("webaudio", function () {
    var A = ("webkitAudioContext" in window),
        e = ("AudioContext" in window);
    return Modernizr._config.usePrefixes ? A || e : e;
  }), Modernizr.addTest("urlparser", function () {
    var A;

    try {
      return A = new URL("http://modernizr.com/"), "http://modernizr.com/" === A.href;
    } catch (e) {
      return !1;
    }
  }), Modernizr.addTest("urlsearchparams", "URLSearchParams" in window), Modernizr.addTest("webworkers", "Worker" in window);
  var docElement = document.documentElement;
  Modernizr.addTest("contextmenu", "contextMenu" in docElement && "HTMLMenuItemElement" in window);
  var isSVG = "svg" === docElement.nodeName.toLowerCase();
  Modernizr.addTest("canvas", function () {
    var A = createElement("canvas");
    return !(!A.getContext || !A.getContext("2d"));
  }), Modernizr.addTest("canvastext", function () {
    return Modernizr.canvas === !1 ? !1 : "function" == typeof createElement("canvas").getContext("2d").fillText;
  }), Modernizr.addTest("emoji", function () {
    if (!Modernizr.canvastext) return !1;
    var A = window.devicePixelRatio || 1,
        e = 12 * A,
        t = createElement("canvas"),
        n = t.getContext("2d");
    return n.fillStyle = "#f00", n.textBaseline = "top", n.font = "32px Arial", n.fillText("🐨", 0, 0), 0 !== n.getImageData(e, e, 1, 1).data[0];
  }), Modernizr.addTest("userdata", !!createElement("div").addBehavior), Modernizr.addTest("video", function () {
    var A = createElement("video"),
        e = !1;

    try {
      e = !!A.canPlayType, e && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
    } catch (t) {}

    return e;
  }), Modernizr.addTest("vml", function () {
    var A,
        e = createElement("div"),
        t = !1;
    return isSVG || (e.innerHTML = '<v:shape id="vml_flag1" adj="1" />', A = e.firstChild, "style" in A && (A.style.behavior = "url(#default#VML)"), t = A ? "object" == _typeof(A.adj) : !0), t;
  }), Modernizr.addTest("webanimations", "animate" in createElement("div")), Modernizr.addTest("webgl", function () {
    var A = createElement("canvas"),
        e = "probablySupportsContext" in A ? "probablySupportsContext" : "supportsContext";
    return e in A ? A[e]("webgl") || A[e]("experimental-webgl") : "WebGLRenderingContext" in window;
  }), Modernizr.addTest("adownload", !window.externalHost && "download" in createElement("a")), Modernizr.addTest("audioloop", "loop" in createElement("audio")), Modernizr.addTest("textareamaxlength", !!("maxLength" in createElement("textarea")));

  var hasEvent = function () {
    function A(A, t) {
      var n;
      return A ? (t && "string" != typeof t || (t = createElement(t || "div")), A = "on" + A, n = A in t, !n && e && (t.setAttribute || (t = createElement("div")), t.setAttribute(A, ""), n = "function" == typeof t[A], t[A] !== undefined && (t[A] = undefined), t.removeAttribute(A)), n) : !1;
    }

    var e = !("onblur" in document.documentElement);
    return A;
  }();

  ModernizrProto.hasEvent = hasEvent, Modernizr.addTest("hashchange", function () {
    return hasEvent("hashchange", window) === !1 ? !1 : document.documentMode === undefined || document.documentMode > 7;
  }), Modernizr.addTest("inputsearchevent", hasEvent("search"));
  var inputElem = createElement("input"),
      inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
      attrs = {};

  Modernizr.input = function (A) {
    for (var e = 0, t = A.length; t > e; e++) {
      attrs[A[e]] = !!(A[e] in inputElem);
    }

    return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs;
  }(inputattrs);

  var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" "),
      inputs = {};

  Modernizr.inputtypes = function (A) {
    for (var e, t, n, o = A.length, r = "1)", i = 0; o > i; i++) {
      inputElem.setAttribute("type", e = A[i]), n = "text" !== inputElem.type && "style" in inputElem, n && (inputElem.value = r, inputElem.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem), t = document.defaultView, n = t.getComputedStyle && "textfield" !== t.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight, docElement.removeChild(inputElem)) : /^(search|tel)$/.test(e) || (n = /^(url|email)$/.test(e) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != r)), inputs[A[i]] = !!n;
    }

    return inputs;
  }(inputtypes);

  var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  ModernizrProto._prefixes = prefixes, Modernizr.addTest("audio", function () {
    var A = createElement("audio"),
        e = !1;

    try {
      e = !!A.canPlayType, e && (e = new Boolean(e), e.ogg = A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = A.canPlayType('audio/ogg; codecs="opus"') || A.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), e.wav = A.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (A.canPlayType("audio/x-m4a;") || A.canPlayType("audio/aac;")).replace(/^no$/, ""));
    } catch (t) {}

    return e;
  });
  var hasOwnProp;
  !function () {
    var A = {}.hasOwnProperty;
    hasOwnProp = is(A, "undefined") || is(A.call, "undefined") ? function (A, e) {
      return e in A && is(A.constructor.prototype[e], "undefined");
    } : function (e, t) {
      return A.call(e, t);
    };
  }(), ModernizrProto._l = {}, ModernizrProto.on = function (A, e) {
    this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
      Modernizr._trigger(A, Modernizr[A]);
    }, 0);
  }, ModernizrProto._trigger = function (A, e) {
    if (this._l[A]) {
      var t = this._l[A];
      setTimeout(function () {
        var A, n;

        for (A = 0; A < t.length; A++) {
          (n = t[A])(e);
        }
      }, 0), delete this._l[A];
    }
  }, Modernizr._q.push(function () {
    ModernizrProto.addTest = addTest;
  }), Modernizr.addAsyncTest(function () {
    var A,
        e,
        t = function t(A) {
      docElement.contains(A) || docElement.appendChild(A);
    },
        n = function n(A) {
      A.fake && A.parentNode && A.parentNode.removeChild(A);
    },
        o = function o(A, e) {
      var t = !!A;

      if (t && (t = new Boolean(t), t.blocked = "blocked" === A), addTest("flash", function () {
        return t;
      }), e && w.contains(e)) {
        for (; e.parentNode !== w;) {
          e = e.parentNode;
        }

        w.removeChild(e);
      }
    };

    try {
      e = "ActiveXObject" in window && "Pan" in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    } catch (r) {}

    if (A = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || e), A || isSVG) o(!1);else {
      var _i,
          a,
          d = createElement("embed"),
          w = getBody();

      if (d.type = "application/x-shockwave-flash", w.appendChild(d), !("Pan" in d || e)) return t(w), o("blocked", d), void n(w);
      _i = function i() {
        return t(w), docElement.contains(w) ? (docElement.contains(d) ? (a = d.style.cssText, "" !== a ? o("blocked", d) : o(!0, d)) : o("blocked"), void n(w)) : (w = document.body || w, d = createElement("embed"), d.type = "application/x-shockwave-flash", w.appendChild(d), setTimeout(_i, 1e3));
      }, setTimeout(_i, 10);
    }
  }), addTest("htmlimports", "import" in createElement("link")), Modernizr.addAsyncTest(function () {
    function A(t) {
      clearTimeout(e);
      var o = t !== undefined && "loadeddata" === t.type ? !0 : !1;
      n.removeEventListener("loadeddata", A, !1), addTest("audiopreload", o), n.parentNode && n.parentNode.removeChild(n);
    }

    var e,
        t = 300,
        n = createElement("audio"),
        o = n.style;
    if (!(Modernizr.audio && "preload" in n)) return void addTest("audiopreload", !1);
    o.position = "absolute", o.height = 0, o.width = 0;

    try {
      if (Modernizr.audio.mp3) n.src = "data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if (Modernizr.audio.m4a) n.src = "data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if (Modernizr.audio.ogg) n.src = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else {
        if (!Modernizr.audio.wav) return void addTest("audiopreload", !1);
        n.src = "data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA";
      }
    } catch (r) {
      return void addTest("audiopreload", !1);
    }

    n.setAttribute("preload", "auto"), n.style.cssText = "display:none", docElement.appendChild(n), setTimeout(function () {
      n.addEventListener("loadeddata", A, !1), e = setTimeout(A, t);
    }, 0);
  }), Modernizr.addAsyncTest(function () {
    function A() {
      var A = new Image();
      A.onerror = function () {
        addTest("datauri", !0), Modernizr.datauri = new Boolean(!0), Modernizr.datauri.over32kb = !1;
      }, A.onload = function () {
        addTest("datauri", !0), Modernizr.datauri = new Boolean(!0), Modernizr.datauri.over32kb = 1 == A.width && 1 == A.height;
      };

      for (var e = "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; e.length < 33e3;) {
        e = "\r\n" + e;
      }

      A.src = "data:image/gif;base64," + e;
    }

    -1 !== navigator.userAgent.indexOf("MSIE 7.") && setTimeout(function () {
      addTest("datauri", !1);
    }, 10);
    var e = new Image();
    e.onerror = function () {
      addTest("datauri", !1);
    }, e.onload = function () {
      1 == e.width && 1 == e.height ? A() : addTest("datauri", !1);
    }, e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  }), Modernizr.addAsyncTest(function () {
    function A(i) {
      o++, clearTimeout(e);
      var a = i && "playing" === i.type || 0 !== r.currentTime;
      return !a && n > o ? void (e = setTimeout(A, t)) : (r.removeEventListener("playing", A, !1), addTest("videoautoplay", a), void (r.parentNode && r.parentNode.removeChild(r)));
    }

    var e,
        t = 200,
        n = 5,
        o = 0,
        r = createElement("video"),
        i = r.style;
    if (!(Modernizr.video && "autoplay" in r)) return void addTest("videoautoplay", !1);
    i.position = "absolute", i.height = 0, i.width = 0;

    try {
      if (Modernizr.video.ogg) r.src = "data:video/ogg;base64,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";else {
        if (!Modernizr.video.h264) return void addTest("videoautoplay", !1);
        r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
      }
    } catch (a) {
      return void addTest("videoautoplay", !1);
    }

    r.setAttribute("autoplay", ""), i.cssText = "display:none", docElement.appendChild(r), setTimeout(function () {
      r.addEventListener("playing", A, !1), e = setTimeout(A, t);
    }, 0);
  });
  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  Modernizr.addTest("hiddenscroll", function () {
    return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}", function (A) {
      return A.offsetWidth === A.clientWidth;
    });
  }), Modernizr.addTest("touchevents", function () {
    var A;
    if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) A = !0;else {
      var e = ["@media (", prefixes.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      testStyles(e, function (e) {
        A = 9 === e.offsetTop;
      });
    }
    return A;
  }), Modernizr.addTest("unicoderange", function () {
    return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function (A) {
      for (var e = [".", ".", "m", "m"], t = 0; t < e.length; t++) {
        var n = createElement("span");
        n.innerHTML = e[t], n.className = t % 2 ? "mono" : "", A.appendChild(n), e[t] = n.clientWidth;
      }

      return e[0] !== e[1] && e[2] === e[3];
    });
  }), Modernizr.addTest("unicode", function () {
    var A,
        e = createElement("span"),
        t = createElement("span");
    return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}", function (n) {
      e.innerHTML = isSVG ? "妇" : "&#5987;", t.innerHTML = isSVG ? "☆" : "&#9734;", n.appendChild(e), n.appendChild(t), A = "offsetWidth" in e && e.offsetWidth !== t.offsetWidth;
    }), A;
  });
  var omPrefixes = "Moz O ms Webkit",
      domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
  ModernizrProto._domPrefixes = domPrefixes, Modernizr.addTest("pointerevents", function () {
    var A = !1,
        e = domPrefixes.length;

    for (A = Modernizr.hasEvent("pointerdown"); e-- && !A;) {
      hasEvent(domPrefixes[e] + "pointerdown") && (A = !0);
    }

    return A;
  });
  var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;

  var atRule = function atRule(A) {
    var e,
        t = prefixes.length,
        n = window.CSSRule;
    if ("undefined" == typeof n) return undefined;
    if (!A) return !1;
    if (A = A.replace(/^@/, ""), e = A.replace(/-/g, "_").toUpperCase() + "_RULE", e in n) return "@" + A;

    for (var o = 0; t > o; o++) {
      var r = prefixes[o],
          i = r.toUpperCase() + "_" + e;
      if (i in n) return "@-" + r.toLowerCase() + "-" + A;
    }

    return !1;
  };

  ModernizrProto.atRule = atRule;
  var modElem = {
    elem: createElement("modernizr")
  };

  Modernizr._q.push(function () {
    delete modElem.elem;
  });

  var mStyle = {
    style: modElem.elem.style
  };
  Modernizr._q.unshift(function () {
    delete mStyle.style;
  }), ModernizrProto.testAllProps = testPropsAll;

  var prefixed = ModernizrProto.prefixed = function (A, e, t) {
    return 0 === A.indexOf("@") ? atRule(A) : (-1 != A.indexOf("-") && (A = cssToDOM(A)), e ? testPropsAll(A, e, t) : testPropsAll(A, "pfx"));
  };

  Modernizr.addTest("forcetouch", function () {
    return hasEvent(prefixed("mouseforcewillbegin", window, !1), window) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1;
  }), Modernizr.addTest("fullscreen", !(!prefixed("exitFullscreen", document, !1) && !prefixed("cancelFullScreen", document, !1))), Modernizr.addTest("intl", !!prefixed("Intl", window)), Modernizr.addTest("pointerlock", !!prefixed("exitPointerLock", document));
  var crypto = prefixed("crypto", window);
  Modernizr.addTest("crypto", !!prefixed("subtle", crypto)), Modernizr.addTest("vibrate", !!prefixed("vibrate", navigator)), Modernizr.addTest("webintents", !!prefixed("startActivity", navigator)), ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("ligatures", testAllProps("fontFeatureSettings", '"liga" 1')), Modernizr.addTest("inlinesvg", function () {
    var A = createElement("div");
    return A.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && A.firstChild && A.firstChild.namespaceURI);
  }), Modernizr.addTest("svgfilters", function () {
    var A = !1;

    try {
      A = "SVGFEColorMatrixElement" in window && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE;
    } catch (e) {}

    return A;
  }), Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
  var toStringFn = {}.toString;
  Modernizr.addTest("svgclippaths", function () {
    return !!document.createElementNS && /SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "clipPath")));
  }), Modernizr.addTest("svgforeignobject", function () {
    return !!document.createElementNS && /SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")));
  }), Modernizr.addTest("smil", function () {
    return !!document.createElementNS && /SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "animate")));
  }), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;

  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  window.Modernizr = Modernizr;
(window, document);
}
