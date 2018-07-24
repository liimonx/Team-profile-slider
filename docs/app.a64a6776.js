// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js"}],"assets\\style\\index.scss":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js"}],"app\\function\\style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var css = function css(el, styles) {
    for (var property in styles) {
        el.style[property] = styles[property];
    }
};
exports.default = css;
},{}],"app\\function\\createImg.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderContainer = document.querySelector('.slider__container');
var slider = document.querySelector('.slider');

var createImg = function createImg(i) {
    var img = document.createElement('img');
    var div = document.createElement('div');
    img.src = i.src;
    (0, _style2.default)(img, {
        transition: 'all 0.6s cubic-bezier(0.67, -0.4, 0.97, 0.97) 0s'
    });
    div.appendChild(img);
    (0, _style2.default)(div, {
        float: 'left',
        width: sliderContainer.offsetWidth + 'px'
    });
    slider.appendChild(div);
};
exports.default = createImg;
},{"./style":"app\\function\\style.js"}],"app\\slider.js":[function(require,module,exports) {
'use strict';

var _style = require('./function/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.addEventListener('load', function () {
    var thumbnailImages = document.querySelectorAll('.thumbnail__images img');
    var sliderContainer = document.querySelector('.slider__container');
    var slider = document.querySelector('.slider');
    var sliderImages = document.querySelectorAll('.slider img');
    var csm = 0;

    thumbnailImages[0].parentNode.dataset.slide = 'current';

    thumbnailImages.forEach(function (img) {
        img.addEventListener('click', function (e) {
            var targetIndex = [].concat(_toConsumableArray(thumbnailImages)).findIndex(function (img) {
                return img.src == e.target.src;
            });
            var currentIndex = [].concat(_toConsumableArray(thumbnailImages)).findIndex(function (img) {
                return img.parentNode.dataset.slide == 'current';
            });

            sliderImages.forEach(function (simg) {
                (0, _style2.default)(simg, {
                    transform: 'scale(1)',
                    opacity: '0'
                });
            });

            if (currentIndex < targetIndex) {
                sliderImages['' + (csm / sliderContainer.offsetWidth + 1)].src = e.target.src;
                (0, _style2.default)(sliderImages['' + (csm / sliderContainer.offsetWidth + 1)], {
                    opacity: '1',
                    transform: 'scale(1.5)'
                });
                slide('next');
            } else {
                slide('prev');
                sliderImages['' + csm / sliderContainer.offsetWidth].src = e.target.src;
                (0, _style2.default)(sliderImages['' + csm / sliderContainer.offsetWidth], {
                    opacity: '1',
                    transform: 'scale(1.5)'
                });
            }

            thumbnailImages.forEach(function (img) {
                if (img.parentNode.dataset.slide == 'current') {
                    img.parentNode.dataset.slide = '';
                }
            });

            if (img.parentNode.dataset.slide != 'current') {
                img.parentNode.dataset.slide = 'current';
            }
        });
    });

    var slide = function slide(d) {
        if (d == 'next' && slider.offsetWidth - sliderContainer.offsetWidth != csm) {
            csm += sliderContainer.offsetWidth;
            slider.style.transform = 'translateX(-' + csm + 'px)';
        } else if (d == 'prev' && csm != 0) {
            csm -= sliderContainer.offsetWidth;
            slider.style.transform = 'translateX(-' + csm + 'px)';
        }
    };
});
},{"./function/style":"app\\function\\style.js"}],"app\\index.js":[function(require,module,exports) {
'use strict';

require('../assets/style/index.scss');

var _createImg = require('./function/createImg');

var _createImg2 = _interopRequireDefault(_createImg);

var _style = require('./function/style');

var _style2 = _interopRequireDefault(_style);

require('./slider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ================================
// START YOUR APP HERE
// ================================

/**
 * Application entry point
 */
// Load application styles
var sliderContainer = document.querySelector('.slider__container');

// load all function

var slider = document.querySelector('.slider');
var sliderImages = document.querySelectorAll('.thumbnail__images img');

(0, _style2.default)(slider, {
  width: sliderContainer.offsetWidth * sliderImages.length + 'px',
  transition: 'all 0.7s cubic-bezier(0.67, -0.4, 0.97, 0.97) 0s'
});

sliderImages.forEach(function (img) {
  return (0, _createImg2.default)(img);
});
},{"../assets/style/index.scss":"assets\\style\\index.scss","./function/createImg":"app\\function\\createImg.js","./function/style":"app\\function\\style.js","./slider":"app\\slider.js"}],"C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52715' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","app\\index.js"], null)
//# sourceMappingURL=/app.a64a6776.map