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
