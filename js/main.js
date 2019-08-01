(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 1179603, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

var mi_version = "7.4.2";
var mi_track_user = true;
var mi_no_track_reason = "";

var disableStr = "ga-disable-UA-106149697-1";

/* Function to detect opted out users */
function __gaTrackerIsOptedOut() {
  return document.cookie.indexOf(disableStr + "=true") > -1;
}

/* Disable tracking if the opt-out cookie exists. */
if (__gaTrackerIsOptedOut()) {
  window[disableStr] = true;
}

/* Opt-out function */
function __gaTrackerOptout() {
  document.cookie =
    disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
  window[disableStr] = true;
}

if (mi_track_user) {
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "__gaTracker"
  );

  __gaTracker("create", "UA-106149697-1", "auto");
  __gaTracker("set", "forceSSL", true);
  __gaTracker("require", "displayfeatures");
  __gaTracker("require", "linkid", "linkid.js");
  __gaTracker("send", "pageview");
} else {
  console.log("");
  (function() {
    /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
    var noopfn = function() {
      return null;
    };
    var noopnullfn = function() {
      return null;
    };
    var Tracker = function() {
      return null;
    };
    var p = Tracker.prototype;
    p.get = noopfn;
    p.set = noopfn;
    p.send = noopfn;
    var __gaTracker = function() {
      var len = arguments.length;
      if (len === 0) {
        return;
      }
      var f = arguments[len - 1];
      if (
        typeof f !== "object" ||
        f === null ||
        typeof f.hitCallback !== "function"
      ) {
        console.log(
          "Not running function __gaTracker(" +
            arguments[0] +
            " ....) because you are not being tracked. " +
            mi_no_track_reason
        );
        return;
      }
      try {
        f.hitCallback();
      } catch (ex) {}
    };
    __gaTracker.create = function() {
      return new Tracker();
    };
    __gaTracker.getByName = noopnullfn;
    __gaTracker.getAll = function() {
      return [];
    };
    __gaTracker.remove = noopfn;
    window["__gaTracker"] = __gaTracker;
  })();
}

var monsterinsights_frontend = {
  js_events_tracking: "true",
  download_extensions: "doc,exe,js,pdf,ppt,tgz,zip,xls",
  inbound_paths: "[]",
  home_url: "http://www.dyad.ventures",
  hash_tracking: "false"
};

var mejsL10n = {
  language: "en",
  strings: {
    "mejs.install-flash":
      "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
    "mejs.fullscreen-off": "Turn off Fullscreen",
    "mejs.fullscreen-on": "Go Fullscreen",
    "mejs.download-video": "Download Video",
    "mejs.fullscreen": "Fullscreen",
    "mejs.time-jump-forward": [
      "Jump forward 1 second",
      "Jump forward %1 seconds"
    ],
    "mejs.loop": "Toggle Loop",
    "mejs.play": "Play",
    "mejs.pause": "Pause",
    "mejs.close": "Close",
    "mejs.time-slider": "Time Slider",
    "mejs.time-help-text":
      "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
    "mejs.time-skip-back": ["Skip back 1 second", "Skip back %1 seconds"],
    "mejs.captions-subtitles": "Captions/Subtitles",
    "mejs.captions-chapters": "Chapters",
    "mejs.none": "None",
    "mejs.mute-toggle": "Mute Toggle",
    "mejs.volume-help-text":
      "Use Up/Down Arrow keys to increase or decrease volume.",
    "mejs.unmute": "Unmute",
    "mejs.mute": "Mute",
    "mejs.volume-slider": "Volume Slider",
    "mejs.video-player": "Video Player",
    "mejs.audio-player": "Audio Player",
    "mejs.ad-skip": "Skip ad",
    "mejs.ad-skip-info": ["Skip in 1 second", "Skip in %1 seconds"],
    "mejs.source-chooser": "Source Chooser",
    "mejs.stop": "Stop",
    "mejs.speed-rate": "Speed Rate",
    "mejs.live-broadcast": "Live Broadcast",
    "mejs.afrikaans": "Afrikaans",
    "mejs.albanian": "Albanian",
    "mejs.arabic": "Arabic",
    "mejs.belarusian": "Belarusian",
    "mejs.bulgarian": "Bulgarian",
    "mejs.catalan": "Catalan",
    "mejs.chinese": "Chinese",
    "mejs.chinese-simplified": "Chinese (Simplified)",
    "mejs.chinese-traditional": "Chinese (Traditional)",
    "mejs.croatian": "Croatian",
    "mejs.czech": "Czech",
    "mejs.danish": "Danish",
    "mejs.dutch": "Dutch",
    "mejs.english": "English",
    "mejs.estonian": "Estonian",
    "mejs.filipino": "Filipino",
    "mejs.finnish": "Finnish",
    "mejs.french": "French",
    "mejs.galician": "Galician",
    "mejs.german": "German",
    "mejs.greek": "Greek",
    "mejs.haitian-creole": "Haitian Creole",
    "mejs.hebrew": "Hebrew",
    "mejs.hindi": "Hindi",
    "mejs.hungarian": "Hungarian",
    "mejs.icelandic": "Icelandic",
    "mejs.indonesian": "Indonesian",
    "mejs.irish": "Irish",
    "mejs.italian": "Italian",
    "mejs.japanese": "Japanese",
    "mejs.korean": "Korean",
    "mejs.latvian": "Latvian",
    "mejs.lithuanian": "Lithuanian",
    "mejs.macedonian": "Macedonian",
    "mejs.malay": "Malay",
    "mejs.maltese": "Maltese",
    "mejs.norwegian": "Norwegian",
    "mejs.persian": "Persian",
    "mejs.polish": "Polish",
    "mejs.portuguese": "Portuguese",
    "mejs.romanian": "Romanian",
    "mejs.russian": "Russian",
    "mejs.serbian": "Serbian",
    "mejs.slovak": "Slovak",
    "mejs.slovenian": "Slovenian",
    "mejs.spanish": "Spanish",
    "mejs.swahili": "Swahili",
    "mejs.swedish": "Swedish",
    "mejs.tagalog": "Tagalog",
    "mejs.thai": "Thai",
    "mejs.turkish": "Turkish",
    "mejs.ukrainian": "Ukrainian",
    "mejs.vietnamese": "Vietnamese",
    "mejs.welsh": "Welsh",
    "mejs.yiddish": "Yiddish"
  }
};
var _wpmejsSettings = {
  pluginPath: "/wp-includes/js/mediaelement/",
  classPrefix: "mejs-",
  stretching: "responsive"
};
var WpDisableAsyncLinks = {
  "wp-disable-font-awesome":
    "http://www.dyad.ventures/wp-content/themes/salient/css/font-awesome.min.css",
  "wp-disable-google-fonts":
    "http://fonts.googleapis.com/css?family=Roboto:500,700,400,900,400italic|Playfair%20Display:400&subset=latin"
};
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-136517774-1");
var uiAutocompleteL10n = {
  noResults: "No results found.",
  oneResult: "1 result found. Use up and down arrow keys to navigate.",
  manyResults: "%d results found. Use up and down arrow keys to navigate.",
  itemSelected: "Item selected."
};
var MyAcSearch = {
  url: "http://www.dyad.ventures/wp-admin/admin-ajax.php"
};
var wp_load_style = {
  "0": "wp-block-library.css",
  "1": "foogallery-block-css.css",
  "2": "wp-mediaelement.css",
  "3": "rgs.css",
  "5": "main-styles.css",
  "6": "magnific.css",
  "7": "nectar-ie8.css",
  "8": "responsive.css",
  "9": "fullpage.css",
  "10": "select2.css",
  "11": "skin-ascend.css",
  "12": "dashicons.css",
  "13": "magnific-popup.css",
  "14": "cherry-projects-styles.css",
  "15": "js_composer_front.css"
};
var wp_load_script = [
  "my_acsearch.js",
  "cherry-js-core.js",
  "monsterinsights-frontend-script.js",
  "jquery.js",
  "modernizer.js",
  "magnific.js",
  "fullPage.js",
  "caroufredsel.js",
  "owl_carousel.js",
  "nectarFrontend.js",
  "infinite_scroll.js",
  "wp-mediaelement.js",
  "flickity.js",
  "flexslider.js",
  "stickykit.js",
  "touchswipe.js",
  "select2.js",
  "magnific-popup.js",
  "cherry-projects-single-scripts.js",
  "wp-disable-css-lazy-load.js"
];
var cherry_ajax = "f086e45945";
var ui_init_object = { auto_init: "false", targets: [] };
/* ]]> */
var nectarLove = {
  ajaxurl: "http://www.dyad.ventures/wp-admin/admin-ajax.php",
  postID: "6",
  rooturl: "http://www.dyad.ventures",
  pluginPages: [],
  disqusComments: "false",
  loveNonce: "18e328ea3b",
  mapApiKey: ""
};
jQuery(function($) {
  $(".widget_meta a[href='http://www.dyad.ventures/comments/feed/']")
    .parent()
    .remove();
});
