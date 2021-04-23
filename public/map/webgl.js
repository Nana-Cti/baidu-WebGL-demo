const bmapcfg = {
  'tiles_dir'   : window.location.origin + '/map', // 瓦片地图的位置
  'home': window.location.origin + '/map' // 其他js文件的位置
};
window.offLineIPAddress = bmapcfg.tiles_dir 
window.TILE_VERSION = {
  "ditu": {
    "normal": {
      "version": "088",
      "updateDate": "20210224"
    },
    "satellite": {
      "version": "009",
      "updateDate": "20210224"
    },
    "normalTraffic": {
      "version": "081",
      "updateDate": "20210224"
    },
    "satelliteTraffic": {
      "version": "083",
      "updateDate": "20210224"
    },
    "mapJS": {
      "version": "104",
      "updateDate": "20210224"
    },
    "satelliteStreet": {
      "version": "083",
      "updateDate": "20210224"
    },
    "earthVector": {
      "version": "001",
      "updateDate": "20210224"
    }
  },
  "webapp": {
    "high_normal": {
      "version": "001",
      "updateDate": "20210224"
    },
    "lower_normal": {
      "version": "002",
      "updateDate": "20210224"
    }
  },
  "api_for_mobile": {
    "vector": {
      "version": "002",
      "updateDate": "20210224"
    },
    "vectorIcon": {
      "version": "002",
      "updateDate": "20210224"
    }
  }
};
window.MSV = {};
window.BMAP_AUTHENTIC_KEY = "E4805d16520de693a3fe707cdc962045";
window.BMapGL = window.BMapGL || {};
(function (bo, eA) {
  var C = C || {
    version: "20150702",
    emptyFn: function () {}
  };
  (function () {
    C._log = [];
    var i = 0;
    var T = {};
    C.BaseClass = function (hR) {
      T[(this.hashCode = (hR || C.BaseClass.guid()))] = this
    };
    C.BaseClass.guid = function () {
      return "mz_" + (i++).toString(36)
    };
    C.BaseClass.create = function () {
      var hR = new C.BaseClass();
      hR.decontrol();
      return hR
    };
    var e = C.instance = C.I = function (hR) {
      return T[hR]
    };
    C.BaseClass.prototype.dispose = function () {
      if (this.hashCode) {
        delete T[this.hashCode]
      }
      for (var hR in this) {
        if (typeof this[hR] != "function") {
          delete this[hR]
        }
      }
    };
    C.BaseClass.prototype.getHashCode = function () {
      if (!this.hashCode) {
        T[(this.hashCode = C.BaseClass.guid())] = this
      }
      return this.hashCode
    };
    C.BaseClass.prototype.decontrol = function () {
      delete T[this.hashCode]
    };
    C.BaseClass.prototype.toString = function () {
      return "[object " + (this._className || "Object") + "]"
    };
    C.BaseClass.prototype._wlog = function (hS, hT) {
      var hR = C._log;
      if (hR.length > 100) {
        hR.reverse().length = 50;
        hR.reverse()
      }
      hR[hR.length] = "[" + hS + "][" + (this._className || "Object") + " " + this.hashCode + "] " + hT
    }
  })();
  Function.prototype.inherits = function (hR, T) {
    var e, hS, hU = this.prototype,
      hT = function () {};
    hT.prototype = hR.prototype;
    hS = this.prototype = new hT();
    if (typeof (T) == "string") {
      hS._className = T
    }
    for (e in hU) {
      hS[e] = hU[e]
    }
    this.prototype.constructor = hU.constructor;
    hU = hT = null;
    return hS
  };
  C.BaseEvent = function (e, i) {
    this.type = e;
    this.returnValue = true;
    this.target = i || null;
    this.currentTarget = this.srcElement = null;
    this.cancelBubble = false;
    this.domEvent = null
  };
  C.BaseClass.prototype.on = C.BaseClass.prototype.addEventListener = function (T, i) {
    if (typeof i !== "function") {
      return this._wlog("error", "addEventListener:" + i + " is not a function")
    }
    if (!this._listeners) {
      this._listeners = {}
    }
    var e = this._listeners;
    if (T.indexOf("on") !== 0) {
      T = "on" + T
    }
    if (typeof e[T] !== "object") {
      e[T] = {}
    }
    var hR = i.hashCode || C.BaseClass.guid();
    i.hashCode = hR;
    if (e[T][hR]) {
      this._wlog("warning", "repeat key:" + hR)
    }
    e[T][hR] = i
  };
  C.BaseClass.prototype.off = C.BaseClass.prototype.removeEventListener = function (T, i) {
    if (typeof i == "function") {
      i = i.hashCode
    } else {
      if (typeof i !== "string" && typeof i !== "undefined") {
        return
      }
    }
    if (!this._listeners) {
      this._listeners = {}
    }
    if (T.indexOf("on") != 0) {
      T = "on" + T
    }
    var e = this._listeners;
    if (!e[T]) {
      return
    }
    if (i === undefined) {
      e[T] = {};
      return
    }
    if (e[T][i]) {
      delete e[T][i]
    }
  };
  C.BaseClass.prototype.fire = C.BaseClass.prototype.dispatchEvent = function (hR) {
    if (!this._listeners) {
      this._listeners = {}
    }
    var T, e = this._listeners,
      hS = hR.type;
    hR.target = hR.srcElement = hR.target || hR.srcElement || this;
    hR.currentTarget = this;
    if (typeof this[hS] == "function") {
      this[hS](hR)
    }
    if (typeof e[hS] == "object") {
      for (T in e[hS]) {
        if (typeof e[hS][T] == "function") {
          e[hS][T].call(this, hR)
        }
      }
    }
    return hR.returnValue
  };
  C.BaseEvent.prototype.inherit = function (T) {
    var i = this;
    this.domEvent = T = window.event || T;
    i.clientX = T.clientX || T.pageX;
    i.clientY = T.clientY || T.pageY;
    i.offsetX = T.offsetX || T.layerX;
    i.offsetY = T.offsetY || T.layerY;
    i.screenX = T.screenX;
    i.screenY = T.screenY;
    i.ctrlKey = T.ctrlKey || T.metaKey;
    i.shiftKey = T.shiftKey;
    i.altKey = T.altKey;
    return i
  };
  C.Browser = (function () {
    var T = navigator.userAgent;
    var hS = 0;
    var e = 0;
    var hT = 0;
    var i = 0;
    var hX = 0;
    var hV = 0;
    var hW = 0;
    var hU = 0;
    var hR = 0;
    var hY = 0;
    if (typeof window.opera === "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(T)) {
      hT = parseFloat(RegExp.$2)
    } else {
      if (/OPR(\/(\d+)(\..?)?)/.test(T)) {
        hT = parseInt(RegExp.$2, 10)
      } else {
        if (/Edge\/((\d+)\.\d+)/.test(T)) {
          hS = parseInt(RegExp.$2, 10)
        } else {
          if (/MSIE (\d+(\.\d+)?)/.test(T)) {
            e = parseFloat(RegExp.$1)
          } else {
            if (T.indexOf("Trident") > -1 && /rv:(\d+(\.\d+)?)/.test(T)) {
              e = parseInt(RegExp.$1, 10)
            } else {
              if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                hX = parseFloat(RegExp.$2)
              } else {
                if (navigator.vendor === "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                  hW = parseFloat(RegExp.$2)
                } else {
                  if (T.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(T)) {
                    i = parseFloat(RegExp.$1)
                  }
                }
              }
            }
          }
        }
      }
    }
    if (T.indexOf("Trident") > -1 && /Trident\/(\d+(\.\d+)?)/.test(T)) {
      hU = parseInt(RegExp.$1, 10)
    } else {
      if (!e && !hS && T.indexOf("Gecko") > -1 && T.indexOf("KHTML") === -1 && /rv\:(\d+(\.\d+)?)/.test(T)) {
        hR = parseFloat(RegExp.$1)
      } else {
        if (!hS && /chrome\/(\d+(\.\d+)?)/i.test(T)) {
          hV = parseFloat(RegExp.$1)
        } else {
          if (!hS && /AppleWebKit\/(\d+(\.\d+)?)/.test(T)) {
            hY = parseInt(RegExp.$1, 10)
          }
        }
      }
    }
    var hZ = {
      edge: hS,
      ie: e,
      firefox: hX,
      netscape: hW,
      opera: hT,
      safari: i,
      chrome: hV,
      gecko: hR,
      trident: hU,
      webkit: hY
    };
    return hZ
  })();
  window.FeBrowser = C.Browser;
  C.Dom = {};
  C.Dom.createDom = function (i, e) {
    if (C.isIE && e && e.name) {
      i = "<" + i + ' name="' + C.String.escapeHTML(e.name) + '">'
    }
    var T = document.createElement(i);
    if (e) {
      C.Dom.setProperties(T, e)
    }
    return T
  };
  C.Dom.getOffset = function (hR) {
    var hU = C.Dom.getOwnerDocument(hR);
    var hT = C.isGecko > 0 && hU.getBoxObjectFor && C.Dom.getStyle(hR, "position") == "absolute" && (hR.style.top === "" || hR.style.left === "");
    var hV = {
      left: 0,
      top: 0
    };
    var i = (C.isIE && !C.isStrict) ? hU.body : hU.documentElement;
    if (hR == i) {
      return hV
    }
    var T = null;
    var hS;
    if (hR.getBoundingClientRect) {
      hS = hR.getBoundingClientRect();
      hV.left = hS.left + Math.max(hU.documentElement.scrollLeft, hU.body.scrollLeft);
      hV.top = hS.top + Math.max(hU.documentElement.scrollTop, hU.body.scrollTop);
      hV.left -= hU.documentElement.clientLeft;
      hV.top -= hU.documentElement.clientTop;
      if (C.isIE && !C.isStrict) {
        hV.left -= 2;
        hV.top -= 2
      }
    } else {
      if (hU.getBoxObjectFor && !hT) {
        hS = hU.getBoxObjectFor(hR);
        var e = hU.getBoxObjectFor(i);
        hV.left = hS.screenX - e.screenX;
        hV.top = hS.screenY - e.screenY
      } else {
        T = hR;
        do {
          hV.left += T.offsetLeft;
          hV.top += T.offsetTop;
          if (C.isWebkit > 0 && C.Dom.getStyle(T, "position") == "fixed") {
            hV.left += hU.body.scrollLeft;
            hV.top += hU.body.scrollTop;
            break
          }
          T = T.offsetParent
        } while (T && T != hR);
        if (C.isOpera > 0 || (C.isWebkit > 0 && C.Dom.getStyle(hR, "position") == "absolute")) {
          hV.top -= hU.body.offsetTop
        }
        T = hR.offsetParent;
        while (T && T != hU.body) {
          hV.left -= T.scrollLeft;
          if (!C.isOpera || T.tagName != "TR") {
            hV.top -= T.scrollTop
          }
          T = T.offsetParent
        }
      }
    }
    return hV
  };
  C.Dom.getOwnerDocument = function (e) {
    return e.nodeType == 9 ? e : e.ownerDocument || e.document
  };
  C.Dom.setProperties = function (i, e) {
    C.each(e, function (hR, T) {
      C.Dom._setProperty(i, T, hR)
    })
  };
  C.Dom._setProperty = function (i, e, T) {
    if (e == "style") {
      i.style.cssText = T
    } else {
      if (e == "class") {
        i.className = T
      } else {
        if (e == "for") {
          i.htmlFor = T
        } else {
          if (e in C.Dom._DIRECT_ATTRIBUTE_MAP) {
            i.setAttribute(C.Dom._DIRECT_ATTRIBUTE_MAP[e], T)
          } else {
            i[e] = T
          }
        }
      }
    }
  };
  C.Dom._DIRECT_ATTRIBUTE_MAP = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder"
  };
  C.G = function () {
    for (var T = [], hR = arguments.length - 1; hR > -1; hR--) {
      var hS = arguments[hR];
      T[hR] = null;
      if (typeof hS == "object" && hS && hS.dom) {
        T[hR] = hS.dom
      } else {
        if ((typeof hS == "object" && hS && hS.tagName) || hS == window || hS == document) {
          T[hR] = hS
        } else {
          if (typeof hS == "string" && (hS = document.getElementById(hS))) {
            T[hR] = hS
          }
        }
      }
    }
    return T.length < 2 ? T[0] : T
  };
  C.ac = function (e, i) {
    if (!(e = this.G(e))) {
      return
    }
    i = this.trim(i);
    if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
      e.className = e.className.split(/\s+/).concat(i).join(" ")
    }
  };
  C.addClassName = C.ac;
  C.each = function (hT, e) {
    if (typeof e != "function") {
      return hT
    }
    if (hT) {
      if (hT.length === undefined) {
        for (var T in hT) {
          e.call(hT[T], hT[T], T)
        }
      } else {
        for (var hR = 0, hS = hT.length; hR < hS; hR++) {
          e.call(hT[hR], hT[hR], hR)
        }
      }
    }
    return hT
  };
  C.extend = function (hT, hR) {
    if (hT && hR && typeof (hR) == "object") {
      for (var hS in hR) {
        hT[hS] = hR[hS]
      }
      var T = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      for (var e = 0, i; e < T.length; e++) {
        i = T[e];
        if (Object.prototype.hasOwnProperty.call(hR, i)) {
          hT[i] = hR[i]
        }
      }
    }
    return hT
  };
  C.hide = function () {
    C.each(arguments, function (e) {
      if (e = C.G(e)) {
        e.style.display = "none"
      }
    })
  };
  C.inherit = function (hV, hR, T) {
    var hU = hV.prototype;
    var hT = function () {};
    hT.prototype = hR.prototype;
    var hS = hV.prototype = new hT();
    if (typeof T == "string") {
      hS._className = T
    }
    for (var e in hU) {
      hS[e] = hU[e]
    }
    hV.prototype.constructor = hU.constructor;
    hU = null;
    return hS
  };
  C.isIE = 0;
  (function () {
    if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
      /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
      C.isIE = parseFloat(RegExp.$1)
    }
  })();
  C.rc = function (e, i) {
    if (!(e = this.G(e))) {
      return
    }
    i = this.trim(i);
    var T = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
    if (e.className != T) {
      e.className = T
    }
  };
  C.removeClassName = C.rc;
  C.show = function () {
    this.each(arguments, function (e) {
      if (e = C.G(e)) {
        e.style.display = ""
      }
    })
  };
  C.trim = function (e) {
    return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
  };
  C.getElementsByClassName = function (e, i) {
    if (e.getElementsByClassName) {
      return e.getElementsByClassName(i)
    } else {
      return (function T(hY, hW) {
        if (hW == null) {
          hW = document
        }
        var hV = [],
          hU = hW.getElementsByTagName("*"),
          hR = hU.length,
          hX = new RegExp("(^|\\s)" + hY + "(\\s|$)"),
          hT, hS;
        for (hT = 0, hS = 0; hT < hR; hT++) {
          if (hX.test(hU[hT].className)) {
            hV[hS] = hU[hT];
            hS++
          }
        }
        return hV
      })(i, e)
    }
  };
  C.toggleClass = function (e, i) {
    if (C.hasClass(e, i)) {
      C.removeClassName(e, i)
    } else {
      C.addClassName(e, i)
    }
  };
  C.hasClass = function (hR, T) {
    if (!hR || !hR.className || typeof hR.className != "string") {
      return false
    }
    var i = -1;
    try {
      i = hR.className == T || hR.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"))
    } catch (hS) {
      return false
    }
    return i > -1
  };
  C.insertHTML = function (hR, e, T) {
    hR = C.G(hR);
    if (hR === null) {
      return hR
    }
    var i, hS;
    if (hR.insertAdjacentHTML) {
      hR.insertAdjacentHTML(e, T)
    } else {
      i = hR.ownerDocument.createRange();
      e = e.toUpperCase();
      if (e == "AFTERBEGIN" || e == "BEFOREEND") {
        i.selectNodeContents(hR);
        i.collapse(e == "AFTERBEGIN")
      } else {
        hS = e == "BEFOREBEGIN";
        i[hS ? "setStartBefore" : "setEndAfter"](hR);
        i.collapse(hS)
      }
      i.insertNode(i.createContextualFragment(T))
    }
    return hR
  };
  if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
    try {
      HTMLElement.prototype.__defineGetter__("children", function () {
        for (var T = [], hR = 0, hT, hS = 0, e = this.childNodes.length; hS < e; hS++) {
          hT = this.childNodes[hS];
          if (hT.nodeType == 1) {
            T[hR++] = hT;
            if (hT.name) {
              if (!T[hT.name]) {
                T[hT.name] = []
              }
              T[hT.name][T[hT.name].length] = hT
            }
            if (hT.id) {
              T[hT.id] = hT
            }
          }
        }
        return T
      })
    } catch (gw) {}
  }
  if (typeof (HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
    HTMLElement.prototype.insertAdjacentHTML = function (i, T) {
      var hR = this.ownerDocument.createRange();
      hR.setStartBefore(this);
      hR = hR.createContextualFragment(T);
      switch (i) {
        case "beforeBegin":
          this.parentNode.insertBefore(hR, this);
          break;
        case "afterBegin":
          this.insertBefore(hR, this.firstChild);
          break;
        case "beforeEnd":
          this.appendChild(hR);
          break;
        case "afterEnd":
          if (!this.nextSibling) {
            this.parentNode.appendChild(hR)
          } else {
            this.parentNode.insertBefore(hR, this.nextSibling)
          }
          break
      }
    }
  }
  if (typeof HTMLElement != "undefined" && !window.opera) {
    HTMLElement.prototype.contains = function (e) {
      if (e == this) {
        return true
      }
      while (e = e.parentNode) {
        if (e == this) {
          return true
        }
      }
      return false
    }
  }
  if (!C.Browser.ie && typeof Event != "undefined" && !window.opera) {
    Event.prototype.__defineSetter__("returnValue", function (e) {
      if (!e) {
        this.preventDefault()
      }
      return e
    });
    Event.prototype.__defineSetter__("cancelBubble", function (e) {
      if (e) {
        this.stopPropagation()
      }
      return e
    })
  }
  C.each = function (hS, hR) {
    if (bV(hR)) {
      for (var T = 0, e = hS.length; T < e; T++) {
        if (hR.call(hS, hS[T], T) === false) {
          break
        }
      }
    }
    return hS
  };
  C.Platform = {
    x11: 0,
    macintosh: 0,
    windows: 0,
    android: 0,
    iphone: 0,
    ipad: 0
  };
  for (var gs in C.Platform) {
    if (C.Platform.hasOwnProperty(gs)) {
      C.Platform[gs] = new RegExp(gs, "i").test(window.navigator.userAgent) ? 1 : 0
    }
  }
  if (typeof (C.Dom) === "undefined") {
    C.Dom = {}
  }
  C.Dom.getComputedStyle = function (i, e) {
    var hR = i.nodeType == 9 ? i : i.ownerDocument || i.document,
      T;
    if (hR.defaultView && hR.defaultView.getComputedStyle) {
      T = hR.defaultView.getComputedStyle(i, null);
      if (T) {
        return T[e] || T.getPropertyValue(e)
      }
    } else {
      if (i.currentStyle) {
        return i.currentStyle[e] || ""
      }
    }
    return ""
  };
  var bb = C.BaseEvent;
  var ed = C.BaseClass;
  ed.prototype.toString = function () {
    return this._className || ""
  };
  C.on = function (T, i, e) {
    if (!(T = C.G(T))) {
      return T
    }
    i = i.replace(/^on/, "");
    if (T.addEventListener) {
      T.addEventListener(i, e, false)
    } else {
      if (T.attachEvent) {
        T.attachEvent("on" + i, e)
      }
    }
    return T
  };
  C.un = function (T, i, e) {
    if (!(T = C.G(T))) {
      return T
    }
    i = i.replace(/^on/, "");
    if (T.removeEventListener) {
      T.removeEventListener(i, e, false)
    } else {
      if (T.detachEvent) {
        T.detachEvent("on" + i, e)
      }
    }
    return T
  };
  C.hc = function (hR, T) {
    if (!hR || !hR.className || typeof hR.className != "string") {
      return false
    }
    var i = -1;
    try {
      i = hR.className == T || hR.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"))
    } catch (hS) {
      return false
    }
    return i > -1
  };
  C.isEmptyObject = function (T) {
    if (Object.prototype.toString.call(T) === "[object Object]") {
      for (var e in T) {
        return false
      }
      return true
    } else {
      return false
    }
  };
  var f3 = window.location.protocol === "http:" ? "http:" : "https:";
  var eV = {
    fontFamily: 'Arial,Helvetica,"PingFang SC","Hiragino Sans GB",STHeiti,sans-serif',
    mapStyleNameIdPair: {
      "default": 0,
      "grayed-out": 1
    },
    mapHost: f3 + "//map.baidu.com",
    // apiHost: f3 + "//api.map.baidu.com",
    apiHost: bmapcfg.home,
    apiIMG: f3 + "//api.map.baidu.com/images",
    staticHost: f3 + "//webmap0.bdimg.com",
    imgPath: f3 + "//webmap0.bdimg.com/image/api/",
    tileDomain: [f3 + "//maponline0.bdimg.com", f3 + "//maponline1.bdimg.com", f3 + "//maponline2.bdimg.com", f3 + "//maponline3.bdimg.com"],
    optDomain: "http://10.120.25.45:8017",
    rasterTilePath: "/tile/",
    vectorTilePath: "/pvd/",
    originTilePath: [f3 + "//pcor.baidu.com"],
    getIconSetPath: function (e) {
      var i = "map_icons2x/";
      if (typeof e === "string" && this.mapStyleNameIdPair[e] > 0) {
        i = "map_icons2x_" + (this.mapStyleNameIdPair[e] - 1) + "/"
      }
      return f3 + "//maponline0.bdimg.com/sty/" + i
    },
    getMapStyleFiles: function (T) {
      var hS = true;
      if (typeof T === "string" && T !== "default") {
        hS = false
      }
      var hT = hS ? "" : "_" + (this.mapStyleNameIdPair[T] - 1);
      var i = fz();
      var hR = "udt=" + i.udt + "&v=" + i.ver;
      var e = bmapcfg.home + "/sty/";
      return [e + "icons_2x" + hT + ".js?" + hR, e + "fs" + hT + ".js?" + hR, e + "indoor_fs.js?" + hR]
    },
    tvc: {
      ditu: {
        normal: {
          version: "088",
          updateDate: "20190618"
        },
        satellite: {
          version: "009",
          updateDate: "20190618"
        },
        normalTraffic: {
          version: "081",
          updateDate: "20190618"
        },
        satelliteTraffic: {
          version: "083",
          updateDate: "20190618"
        },
        mapJS: {
          version: "104",
          updateDate: "20190618"
        },
        satelliteStreet: {
          version: "083",
          updateDate: "20190618"
        },
        panoClick: {
          version: "1033",
          updateDate: "20180108"
        },
        panoUdt: {
          version: "20180108",
          updateDate: "20180108"
        },
        panoSwfAPI: {
          version: "20150123",
          updateDate: "20150123"
        },
        panoSwfPlace: {
          version: "20141112",
          updateDate: "20141112"
        },
        earthVector: {
          version: "001",
          updateDate: "20190618"
        }
      }
    },
    msv: {
      mapstyle: {
        updateDate: "20190108",
        version: "001"
      }
    }
  };
  eV.imgResources = {
    blankGIF: eV.staticHost + "/res/litemapapi/v1d1/images/blank.gif?20170501",
    markerPng: eV.staticHost + "/res/litemapapi/v1d1/images/marker.png?20170501",
    locPng: eV.staticHost + "/res/litemapapi/v1d1/images/loc.png?20180918",
    locNewPng: eV.staticHost + "/res/litemapapi/v1d1/images/loc_new.png?20190314",
    zoomPng: eV.staticHost + "/res/litemapapi/v1d1/images/zoombtn.png?20180918",
    mapLogoPng: eV.staticHost + "/res/litemapapi/v1d1/images/logo-2x.png?20190226"
  };
  var e3 = eV;
  var a3 = "ruler.cur";
  if (C.Browser.ie || C.Browser.edge) {
    C.extend(e3, {
      distCursor: "url(" + e3.imgPath + a3 + "),crosshair",
      defaultCursor: "url(" + e3.imgPath + "openhand.cur),default",
      draggingCursor: "url(" + e3.imgPath + "closedhand.cur),move"
    })
  } else {
    if (C.Browser.firefox) {
      C.extend(e3, {
        distCursor: "url(" + e3.imgPath + a3 + "),crosshair",
        defaultCursor: "-moz-grab",
        draggingCursor: "-moz-grabbing"
      })
    } else {
      if (C.Browser.chrome || C.Browser.safari) {
        C.extend(e3, {
          distCursor: "url(" + e3.imgPath + a3 + ") 2 6,crosshair",
          defaultCursor: "url(" + e3.imgPath + "openhand.cur) 8 8,default",
          draggingCursor: "url(" + e3.imgPath + "closedhand.cur) 8 8,move"
        });
        if (C.Platform.macintosh) {
          e3.defaultCursor = "-webkit-grab";
          e3.draggingCursor = "-webkit-grabbing"
        }
      } else {
        C.extend(e3, {
          distCursor: "url(" + e3.imgPath + a3 + "),crosshair",
          defaultCursor: "url(" + e3.imgPath + "openhand.cur),default",
          draggingCursor: "url(" + e3.imgPath + "closedhand.cur),move"
        })
      }
    }
  }
  bo = bo || {};
  bo.version = "3.0";
  bo._register = [];
  bo.register = function (e) {
    this._register[this._register.length] = e
  };
  bo.guid = 1;
  bo.getGUID = function (e) {
    return (e || "") + bo.guid++
  };
  var ge = window.BMAP_AUTHENTIC_KEY || "";
  bo.bmapVerifyCbk = function (e) {
    if (e && e.error !== 0) {
      if (typeof map !== "undefined") {
        map.getContainer().innerHTML = "";
        map.__listeners = {}
      }
      bo = null;
      var i = "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度LBS开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
      switch (e.error) {
        case 101:
          i = "开发者禁用了该ak的jsapi服务权限。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
          break;
        case 102:
          i = "开发者Referer不正确。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
          break
      }
      alert(i)
    }
  };
  bo.verify = function () {
    var e = e3.apiHost + "/?qt=verify&ak=" + ge + "&callback=" + eA + ".bmapVerifyCbk";
    hm.load(e)
  };
  bo.apiLoad = bo.apiLoad || function () {};

  function fK(i, e) {
    this._size = i;
    this._cache = [];
    this._totalGetTimes = 0;
    this._totalHitTimes = 0;
    this._options = {
      clearCallback: null,
      removeOldCallback: null
    };
    e = e || {};
    for (var T in e) {
      if (e.hasOwnProperty(T)) {
        this._options[T] = e[T]
      }
    }
  }
  fK.prototype.setData = function (T, hR) {
    var e = this._cache;
    var i = this._size;
    if (i === 0) {
      return
    }
    if (e.length > i) {
      this._removeOld()
    }
    if (!e[T]) {
      e.push(hR)
    }
    e[T] = hR;
    hR._key_ = T
  };
  fK.prototype.getHitRate = function () {
    return Math.round(this._totalHitTimes / this._totalGetTimes * 1000) / 1000
  };
  fK.prototype.getData = function (i) {
    var e = this._cache[i];
    if (e) {
      this._totalHitTimes++
    }
    this._totalGetTimes++;
    return e
  };
  fK.prototype.removeData = function (hS) {
    if (this._options.clearCallback) {
      this._options.clearCallback(this._cache[hS])
    }
    var T = this._cache;
    var hT = T[hS];
    for (var hR = 0, e = T.length; hR < e; hR++) {
      if (T[hR] === hT) {
        T.splice(hR, 1);
        break
      }
    }
    delete T[hS]
  };
  fK.prototype._removeOld = function () {
    var e = this._cache;
    var hS = Math.round(this._size * 0.6);
    for (var hR = 0; hR < hS; hR++) {
      var T = e[hR]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(e[T])
      }
      delete e[T]
    }
    e.splice(0, hS);
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback()
    }
  };
  fK.prototype.clear = function () {
    var T = this._cache;
    for (var hS = 0, e = T.length; hS < e; hS++) {
      var hR = T[hS]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(T[hR])
      }
      delete T[hR]
    }
    this._cache = T = []
  };
  fK.prototype.forEach = function (hR) {
    var T = this._cache;
    for (var hT = 0, e = T.length; hT < e; hT++) {
      var hS = T[hT]._key_;
      hR(T[hS])
    }
  };
  fK.prototype.getBatch = function (hS) {
    var e = [];
    for (var hR = 0, T = hS.length; hR < T; hR++) {
      if (this.getData(hS[hR])) {
        e[e.length] = this.getData(hS[hR])
      }
    }
    return e
  };
  fK.prototype.clearExcept = function (hT) {
    var T = this._cache;
    for (var e = T.length, hS = e - 1; hS >= 0; hS--) {
      var hR = this._cache[hS]._key_;
      if (!hT[hR]) {
        T.splice(hS, 1);
        if (this._options.clearCallback) {
          this._options.clearCallback(T[hR])
        }
        delete T[hR]
      }
    }
  };
  fK.prototype.getDataCount = function () {
    return this._cache.length
  };

  function am() {}
  C.extend(am.prototype, {
    centerAndZoomIn: function (hW, T, hX) {
      var hU = this;
      if (!hW && !T) {
        return
      }
      hW = hW || this.centerPoint;
      T = T || this.zoomLevel;
      T = this._getProperZoom(T).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;

          function hV() {
            hU._earth = new bo.Earth(hU, {
              showRealSunlight: hU.config.showRealSunlight,
              showMilkyway: hU.config.showMilkyway,
              earthBackground: hU.config.earthBackground
            });
            hU._proxyEarthEvents();
            hU._changeEarthMapType(BMAP_EARTH_MAP);
            C.extend(hU, bo.EarthView.prototype);
            if (!hU._navigationCtrl && hU.config.showControls) {
              hU._navigationCtrl = new bo.NavigationControl3D(hU)
            }
            delete hU.temp.originMapType
          }
          ea.load("earth", function () {
            if (bo["FeatureStyle" + hU.config.style]) {
              hV()
            } else {
              hU.loadMapStyleFiles(function () {
                hV()
              })
            }
          })
        }
      }
      this.lastLevel = this.zoomLevel || T;
      this.zoomLevel = T;
      var hS = new bb("onload");
      hS.point = hW;
      hS.zoom = T;
      this.centerPoint = this.restrictCenter(new hs(hW.lng, hW.lat));
      if (this.centerPoint.zoom) {
        this.zoomLevel = this.centerPoint.zoom
      }
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hT = new c5(i, "baidu", this.mapType);
        var hR = new cR({
          mapType: this.mapType,
          copyright: hT,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "web"
        });
        hR._isInnerLayer = true;
        this.addTileLayer(hR);
        if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
          this._addHybirdMap()
        }
      }
      this.dispatchEvent(hS);
      this.loaded = true;
      hX = hX || {};
      hX.callback && hX.callback()
    },
    _setPlatformPosition: function (hX, hW, h0) {
      h0 = h0 || {};
      if (hX === 0 && hW === 0 && !h0.point) {
        return
      }
      if (isNaN(h0.initMapOffsetX)) {
        h0.initMapOffsetX = this.offsetX
      }
      if (isNaN(h0.initMapOffsetY)) {
        h0.initMapOffsetY = this.offsetY
      }
      var hY = hX + h0.initMapOffsetX;
      var hV = hW + h0.initMapOffsetY;
      if (h0.point) {
        var i = this.restrictCenter(h0.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new bb("oncenter_changed"))
        }
      } else {
        var hR = this.offsetX - hY;
        var e = this.offsetY - hV;
        var T = this.getZoomUnits();
        var hU = this.centerPoint.lng;
        var hT = this.centerPoint.lat;
        var hS = new hs(hU, hT);
        this.centerPoint = this.restrictCenter(new hs(hS.lng + hR * T, hS.lat - e * T), T);
        this.fire(new bb("oncenter_changed"));
        if (this.zoomLevel < 10) {
          hY = this.offsetX - (this.centerPoint.lng - hS.lng) / T;
          hV = this.offsetY + (this.centerPoint.lat - hS.lat) / T
        }
      }
      this.offsetX = hY;
      this.offsetY = hV;
      var hZ = this.platform.style;
      hZ.left = hY + "px";
      hZ.top = hV + "px";
      this.maskLayer.style.left = -hY + "px";
      this.maskLayer.style.top = -hV + "px";
      if (h0.dispatchEvent !== false) {
        this.dispatchEvent(new bb("onmoving"))
      }
    },
    zoomTo: function (e, hU, hY) {
      hY = hY || {};
      hY.zoomCenter = hU;
      if (hY.noAnimation !== true) {
        this.deepZoomTo(e, hY);
        return
      }
      if (typeof e !== "number") {
        return
      }
      var hS = b6[this.mapType];
      if (!hS) {
        return
      }
      var T = e;
      e = this._getProperZoom(e).zoom;
      if (e === this.zoomLevel) {
        var hV = new bb("onzoomexceeded");
        hV.targetZoom = T;
        this.dispatchEvent(hV);
        hY.callback && hY.callback();
        return
      }
      this.lastLevel = this.zoomLevel;
      if (hU) {
        this.temp._cPoint = hU;
        this.temp._cPixel = this.pointToPixelIn(hU)
      } else {
        if (this.getInfoWindow()) {
          var hX = this.getInfoWindow().getPoint();
          this.temp._cPixel = this.pointToPixelIn(hX);
          this.temp._cPoint = hX
        }
      }
      if (this.config.zoomCenter) {
        hU = this.config.zoomCenter;
        this.temp._cPoint = hU;
        this.temp._cPixel = this.pointToPixelIn(hU)
      }
      if (hU || this.temp.infoWin && this.temp.infoWin.isOpen()) {
        var i = this.temp._cPoint;
        var hW = this.temp._cPixel;
        var hR = this.getZoomUnits(e);
        var hT = new hs(i.lng + hR * (this.width / 2 - hW.x), i.lat - hR * (this.height / 2 - hW.y));
        this.centerPoint = this.restrictCenter(hT, hR, e);
        if (this.centerPoint.zoom) {
          e = this.centerPoint.zoom
        }
      }
      if (hY.fireEvent !== false) {
        this.dispatchEvent(new bb("onzoomstart"))
      }
      if (e !== this.zoomLevel) {
        this.zoomLevel = e;
        this.dispatchEvent(new bb("onzooming"));
        this.dispatchEvent(new bb("onzoomstartcode"))
      }
      if (hY.fireEvent !== false) {
        this.dispatchEvent(new bb("onzoomend"))
      }
      if (hY.callback) {
        hY.callback()
      }
    },
    deepZoomMedia: function (e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function () {
          i.temp.isStdCtrlBusy = false
        }, 400)
      }
    },
    deepZoomTo: function (hV, hR) {
      hR = hR || {};
      var hT = hV - this.zoomLevel;
      var hS = this._getProperZoom(hV);
      if (hS.exceeded) {
        var e = new bb("onzoomexceeded");
        e.targetZoom = hV;
        this.dispatchEvent(e);
        return
      }
      var i;
      if (hR.zoomCenter) {
        i = this.pointToPixelIn(hR.zoomCenter)
      } else {
        if (this.getInfoWindow()) {
          i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {
            zoom: this.lastLevel
          })
        } else {
          var i = new ej(this.width / 2, this.height / 2)
        }
      }
      this.lastLevel = this.zoomLevel;
      var hU = this.deepZoom || new bE(this);
      var T = hT > 0 ? 1 : -1;
      hU.zoomMap(i, hT, T, null, hR)
    },
    flyToIn: function (hW, e) {
      if (e === this.zoomLevel) {
        this.panToIn(hW);
        return
      }
      var hT = this._getProperZoom(e);
      if (hT.exceeded) {
        var hX = new bb("onzoomexceeded");
        hX.targetZoom = e;
        this.dispatchEvent(hX);
        return
      }
      var hV = e - this.zoomLevel;
      var T = new ej(this.width / 2, this.height / 2);
      var i = this.pointToPixelIn(hW);
      var hU = new d9(i.x - T.x, i.y - T.y);
      this.lastLevel = this.zoomLevel;
      if (Math.abs(hV) >= 4 || Math.abs(hU.width) > this.width || Math.abs(hU.height) > this.height) {
        this.centerAndZoomIn(hW, e);
        return
      }
      var hS = this.deepZoom || new bE(this);
      var hR = hV > 0 ? 1 : -1;
      hS.zoomMap(i, hV, hR, hU)
    },
    panToIn: function (i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return
      }
      var hR = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hS = Math.round(this.height / 2);
      if (Math.abs(e - hR.x) > this.width || Math.abs(hS - hR.y) > this.height || T.noAnimation === true) {
        this._panToIn(e - hR.x, hS - hR.y, i);
        T.callback && T.callback()
      } else {
        this._panBy(e - hR.x, hS - hR.y, T)
      }
    },
    _panToIn: function (i, e, hR) {
      var T = this.temp;
      if (T.operating === true) {
        return
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new bb("onmoveend"))
      }
      this.dispatchEvent(new bb("onmovestart"));
      this._setPlatformPosition(i, e, {
        point: hR
      });
      this.dispatchEvent(new bb("onmoveend"))
    },
    panBy: function (i, e, T) {
      T = T || {};
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
        this._panBy(i, e, T)
      } else {
        this._panToIn(i, e);
        T.callback && T.callback()
      }
    },
    _panBy: function (i, e, hS) {
      if (this.temp.operating === true) {
        return
      }
      hS = hS || {};
      this.dispatchEvent(new bb("onmovestart"));
      var hR = this;
      var T = hR.temp;
      T.pl = hR.offsetX;
      T.pt = hR.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel()
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new bb("onmoveend"))
      }
      T.tlPan = new o({
        fps: hS.fps || hR.config.fps,
        duration: hS.duration || hR.config.actionDuration,
        transition: hS.transition || cn.easeInOutQuad,
        render: function (hT) {
          this.terminative = hR.temp.operating;
          if (hR.temp.operating) {
            return
          }
          hR._setPlatformPosition(Math.ceil(i * hT), Math.ceil(e * hT), {
            initMapOffsetX: T.pl,
            initMapOffsetY: T.pt
          })
        },
        finish: function (hT) {
          hR.dispatchEvent(new bb("onmoveend"));
          hR.temp.tlPan = false;
          if (hR.temp.stopArrow === true) {
            hR.temp.stopArrow = false;
            if (hR.temp.arrow !== 0) {
              hR._arrow()
            }
          }
          hS.callback && hS.callback()
        }
      })
    },
    getCenterIn: function () {
      return this.centerPoint
    },
    getZoom: function () {
      return this.zoomLevel
    },
    setTilt: function () {},
    getTilt: function () {
      return this._tilt
    },
    setHeading: function () {},
    getHeading: function () {
      return this._heading
    },
    restrictCenter: function (hV, hS, hW) {
      this.isRestrict = false;
      hS = hS || this.getZoomUnits();
      hW = hW || this.zoomLevel;
      var T = this.pixelToPointIn(new ej(0, 0), {
        center: hV,
        zoom: hW
      });
      var hT = this.pixelToPointIn(new ej(0, this.height), {
        center: hV,
        zoom: hW
      });
      if (this.zoomLevel < 5) {
        if (T.lat > c8.MAX_LAT && hT.lat < c8.MIN_LAT) {
          this.isRestrict = true;
          var i = c8.MAX_LAT - hV.lat;
          var e = hV.lat - c8.MIN_LAT;
          var hU;
          if (i < e) {
            hU = i / (this.height / 2)
          } else {
            hU = e / (this.height / 2)
          }
          var hR = 18 - eC(hU);
          this.zoomLevel = Math.ceil(hR);
          hV.zoom = Math.ceil(hR);
          return hV
        }
      }
      if (T.lat > c8.MAX_LAT) {
        this.isRestrict = true;
        hV.lat = c8.MAX_LAT - this.height / 2 * hS
      } else {
        if (hT.lat < c8.MIN_LAT) {
          this.isRestrict = true;
          hV.lat = c8.MIN_LAT + this.height / 2 * hS
        }
      }
      return hV
    }
  });

  function c8(e, T) {
    if (typeof e === "string") {
      e = document.getElementById(e)
    }
    ed.call(this);
    this.container = e;
    this.width = e.clientWidth;
    this.height = e.clientHeight;
    this.offsetX = 0;
    this.offsetY = 0;
    this._setStyle(e);
    e.unselectable = "on";
    e.innerHTML = "";
    C.ac(e, "bmap-container");
    e.appendChild(this.render());
    this._initDate = new Date();
    this.platform = e.children[0];
    this.maskLayer = this.platform.children[0];
    this._panes = {};
    this.centerPoint = new hs(0, 0);
    this.zoomLevel = 0;
    this._heading = 0;
    this._tilt = 0;
    this._bounds = new dS();
    this.lastLevel = 0;
    this._lock = false;
    this._enableTiltZoom = 7;
    this._enableHeadingZoom = 7;
    this.defaultZoomLevel = null;
    this.defaultCenter = null;
    this.zoomEventStatus = "idle";
    this.currentOperation = dU.idle;
    this._setConfig(T);
    this._initMapRenderType();
    this._animationInfo = {};
    this._animationInfoUnstopable = {};
    this.suspendLoad = false;
    this._customTileLabels = [];
    if (this._renderType === "webgl") {
      this._workerMgr = new f9(this);
      this._featureMgr = new dc();
      C.extend(this, c7.prototype);
      this.jobScheduler = new fO(this);
      this.benchmark = new ac();
      this._setupWebGLMap();
      this.deviceInfo = {
        hardwareInfo: {
          renderer: "",
          vendor: ""
        }
      };
      if (a8.ifSupportWebGL._renderer) {
        this.deviceInfo.hardwareInfo.renderer = a8.ifSupportWebGL._renderer;
        this.deviceInfo.hardwareInfo.vendor = a8.ifSupportWebGL._vendor
      }
    } else {
      C.extend(this, am.prototype)
    }
    if (!b6[this.config.mapType]) {
      this.config.mapType = BMAPGL_NORMAL_MAP
    }
    if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
      if (this.forceEnableEarth() === false) {
        this.config.mapType = BMAPGL_NORMAL_MAP
      }
    }
    this.mapType = this.config.mapType;
    this.preMapType = null;
    if (this.config.enableEarth) {
      var hT = this.maskLayer.style;
      hT.opacity = 0;
      hT.background = "#000";
      if (this.config.mapType === BMAP_EARTH_MAP) {
        hT.opacity = 1
      }
      setTimeout(function () {
        hT.WebkitTransition = hT.transition = "opacity .4s"
      }, 100)
    }
    this._isHybridShow = this.config.showStreetLayer;
    this.temp = {
      operating: false,
      arrow: 0,
      lastDomMoveTime: 0,
      lastLoadTileTime: 0,
      lastMovingTime: 0,
      canKeyboard: false,
      I: function (i) {
        return C.I(i)
      },
      curSpots: [],
      curSpotsArray: [],
      curAreaSpot: null,
      spotsGuid: 1,
      registerIndex: -1,
      hoverOnSpot: null,
      isStdCtrlBusy: false
    };
    window.InstanceCore = this.temp.I;
    this.platform.style.cursor = this.config.defaultCursor;
    this._bind();
    for (var hR = 0; hR < bo._register.length; hR++) {
      bo._register[hR](this)
    }
    this.temp.registerIndex = hR;
    var hS = this;
    if (this._renderType === "webgl") {
      ea.load("oppcgl", function () {
        hS._asyncRegister()
      })
    } else {
      ea.load("oppc", function () {
        hS._asyncRegister()
      })
    }
    if (this.config.mapType === "B_EARTH_MAP") {
      if (!bo.Earth) {
        ea.load("earth", function () {})
      } else {
        hS._syncAndChangeMapType("B_EARTH_MAP")
      }
    }
  }
  c8.MAX_TILT = 87;
  c8.MAX_DRAG_TILT = 73;
  c8.MAX_DRAG_TILT_L2 = 50;
  c8.MIN_TILT = 0;
  c8.MAX_LAT = 19431424;
  c8.MIN_LAT = -16023552;
  c8.WORLD_SIZE_MC_HALF = 20037726.372307256;
  c8.WORLD_SIZE_MC = c8.WORLD_SIZE_MC_HALF * 2;
  c8.RIGHT_EDGE_POINT = new hs(c8.WORLD_SIZE_MC_HALF, 0);
  c8.LEFT_EDGE_POINT = new hs(-c8.WORLD_SIZE_MC_HALF, 0);
  c8.inherits(ed, "Map");
  C.extend(c8.prototype, {
    render: function () {
      var e = S("div", {
        id: "platform"
      });
      var hR = e.style;
      hR.overflow = "visible";
      hR.position = "absolute";
      hR.zIndex = 5;
      hR.top = hR.left = "0px";
      var i = S("div", {
        id: "mask",
        "class": "BMap_mask"
      });
      var T = i.style;
      T.position = "absolute";
      T.top = T.left = "0px";
      T.zIndex = "9";
      T.overflow = "hidden";
      T.WebkitUserSelect = "none";
      T.width = this.width + "px";
      T.height = this.height + "px";
      e.appendChild(i);
      return e
    },
    _initMapRenderType: function () {
      var e = this.config.forceRenderType;
      if (e === "dom") {
        this._renderType = "dom";
        return
      } else {
        if (e === "canvas") {
          if (a8.isModernBrowser && !a8.ifCanvas2dInBlackList()) {
            this._renderType = "canvas";
            return
          } else {
            this._renderType = "dom";
            return
          }
        } else {
          if (e === "webgl") {
            if (a8.ifSupportWebGL()) {
              this._renderType = "webgl";
              return
            }
          }
        }
      }
      if (a8.ifSupportWebGL() && a8.ifEnableWebGLMap()) {
        this._renderType = "webgl";
        return
      }
      if (a8.isModernBrowser && a8.ifEnableCanvas2dMap()) {
        this._renderType = "canvas";
        return
      }
      this._renderType = "dom"
    },
    _setConfig: function (i) {
      i = i || {};
      this.config = {
        bottomOffset: 0,
        clickInterval: 200,
        enableDragging: true,
        enableRotate: true,
        enableTilt: true,
        enableKeyboard: false,
        enableDblclickZoom: true,
        enableContinuousZoom: true,
        enableWheelZoom: false,
        enableRotateGestures: true,
        enableTiltGestures: true,
        enablePinchZoom: true,
        fixCenterWhenPinch: false,
        enableAutoResize: true,
        zoomCenter: null,
        fps: C.Browser.ie ? 30 : 60,
        zoomerDuration: 240,
        actionDuration: 450,
        defaultCursor: e3.defaultCursor,
        draggingCursor: e3.draggingCursor,
        coordType: BMAP_COORD_MERCATOR,
        mapType: BMAPGL_NORMAL_MAP,
        drawer: BMAP_SYS_DRAWER,
        enableInertialDragging: true,
        drawMargin: 500,
        drawMarginGL: 500,
        enableFulltimeSpotClick: false,
        enableResizeOnCenter: false,
        isModernBrowser: a8.isModernBrowser,
        forceRenderType: "",
        textRenderType: null,
        ratio: a6() >= 1.5 ? 2 : 1,
        enableEarth: a8.ifEnableEarth(),
        defaultMaxBounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
        showControls: false,
        showRealSunlight: true,
        showMilkyway: true,
        earthBackground: null,
        showStreetLayer: true,
        minZoom: null,
        maxZoom: null,
        style: "default",
        enableIconClick: false,
        autoSafeArea: false,
        ak: null,
        webgl2: false,
        restrictCenter: true,
        smaa: true,
        preserveDrawingBuffer: false
      };
      for (var T in i) {
        if (i.hasOwnProperty(T)) {
          this.config[T] = i[T];
          if (T === "fixCenterWhenResize") {
            this.config.enableResizeOnCenter = i[T]
          }
        }
      }
      if (i.style) {
        if (i.style["styleId"] && i.style["styleId"].length < 32) {
          this.config.style = i.style["styleId"]
        } else {
          this.config.style = i.style
        }
      }
      this._setTextRenderType();
      this._displayOptions = {
        poi: true,
        poiText: true,
        poiIcon: true,
        overlay: true,
        layer: true,
        building: true,
        indoor: true,
        street: true,
        skyColors: ["rgba(226, 237, 248, 0)", "rgba(186, 211, 252, 1)"],
        isFlat: false,
        labelMargin: 0
      };
      if (i.displayOptions) {
        for (var e in i.displayOptions) {
          if (i.displayOptions.hasOwnProperty(e)) {
            this._displayOptions[e] = i.displayOptions[e]
          }
        }
      }
      if (this.config.restrictCenter === false) {
        this._enableTiltZoom = 0;
        this._enableHeadingZoom = 0
      }
    },
    getMinZoom: function () {
      var T;
      if (b6[this.mapType][this._renderType]) {
        T = b6[this.mapType][this._renderType].minZoom
      } else {
        T = b6[this.mapType].minZoom
      }
      if (this.config.minZoom !== null && this.config.minZoom >= T) {
        T = this.config.minZoom
      }
      if (this.mapType === "B_EARTH_MAP") {
        return T
      }
      var i = this.getSize();
      var e = this.worldSize(T);
      while (e < i.width) {
        T++;
        e = this.worldSize(T)
      }
      return T
    },
    getMaxZoom: function () {
      var e;
      if (b6[this.mapType][this._renderType]) {
        e = b6[this.mapType][this._renderType].maxZoom
      } else {
        e = b6[this.mapType].maxZoom
      }
      if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
        e = this.config.maxZoom
      } else {
        if (this._renderType === "webgl") {
          e = 21
        }
      }
      return e
    },
    _drawFrame: function () {
      this._webglMapScene._painter.draw()
    },
    _setupWebGLMap: function () {
      var e = this;
      ea.load("mapgl", function () {
        e._asyncRegister()
      })
    },
    _setStyle: function (i) {
      var e = i.style;
      e.overflow = "hidden";
      if (fY(i).position !== "absolute") {
        e.position = "relative"
      }
      // e.backgroundImage = "url(" + e3.imgPath + "bg.png)";
      e.textAlign = "left";
      e.touchAction = e.MSTouchAction = "none"
    },
    _bind: function () {
      var e = this;
      if (e._renderType !== "webgl") {
        e._watchSize = function () {
          var T = e.getContainerSize();
          if (e.width !== T.width || e.height !== T.height) {
            var hU = (T.width - e.width) / 2;
            var hW = (T.height - e.height) / 2;
            var hR = e.getZoomUnits();
            var hT = e.centerPoint;
            if (hT && !e.config.enableResizeOnCenter) {
              e.centerPoint = new hs(hT.lng + hU * hR, hT.lat - hW * hR)
            }
            e.maskLayer.style.width = (e.width = T.width) + "px";
            e.maskLayer.style.height = (e.height = T.height) + "px";
            var hS = new bb("onresize");
            hS.size = T;
            e.dispatchEvent(hS);
            e.fire(new bb("onsize_changed"));
            var i = parseInt(e.platform.style.left, 10) || 0;
            var hV = parseInt(e.platform.style.top, 10) || 0;
            if (e.currentOperation !== "undefined" && e.currentOperation !== dU.idle && (e.offsetX !== i || e.offsetY !== hV)) {
              e._setPlatformPosition(i, hV)
            }
          }
        }
      } else {
        e._watchSize = function () {
          var i = e.getContainerSize();
          if (e.width !== i.width || e.height !== i.height) {
            var hR = e.getSize();
            e.maskLayer.style.width = (e.width = i.width) + "px";
            e.maskLayer.style.height = (e.height = i.height) + "px";
            if (a6() !== e.config.ratio) {
              e.config.ratio = a6()
            }
            var hS = new bb("onresize");
            hS.size = i;
            e.dispatchEvent(hS);
            var T = new bb("onsize_changed");
            T.size = i;
            T.oldSize = hR;
            e.fire(T)
          }
        }
      }
      if (e.config.enableAutoResize) {
        e.temp.autoResizeTimer = setInterval(e._watchSize, 16)
      }
      this.on("size_changed", function () {
        var i = e.getMinZoom();
        if (e.zoomLevel < i) {
          e.setZoomIn(i, {
            noAnimation: true
          })
        }
      });
      this.on("zoom_changed", function () {
        this.dispatchEvent(new bb("onzooming"))
      })
    },
    addControl: function (e) {
      if (e && bV(e._i)) {
        e._i(this);
        this.dispatchEvent(new bb("onaddcontrol", e))
      }
    },
    removeControl: function (e) {
      if (e && bV(e.remove)) {
        e.remove();
        this.dispatchEvent(new bb("onremovecontrol", e))
      }
    },
    addContextMenu: function (e) {
      if (e) {
        e.initialize(this);
        this.dispatchEvent(new bb("onaddcontextmenu", e))
      }
    },
    removeContextMenu: function (e) {
      if (e) {
        this.dispatchEvent(new bb("onremovecontextmenu", e));
        e.remove()
      }
    },
    addOverlay: function (i) {
      if (i && bV(i._i)) {
        var T = new bb("onbeforeaddoverlay", i);
        T.overlay = i;
        this.dispatchEvent(T);
        i._i(this);
        T = new bb("onaddoverlay", i);
        T.overlay = i;
        this.dispatchEvent(T)
      }
    },
    removeOverlay: function (i) {
      if (i && bV(i.remove)) {
        var T = new bb("onremoveoverlay", i);
        T.overlay = i;
        i.remove();
        this.dispatchEvent(T)
      }
    },
    clearOverlays: function () {
      this.dispatchEvent(new bb("onclearoverlays"))
    },
    addTileLayer: function (hS) {
      if (!hS) {
        return
      }
      for (var hR = 0, e = this.tileMgr.tileLayers.length; hR < e; hR++) {
        var T = this.tileMgr.tileLayers[hR];
        if (T === hS || T.getMapType() === hS.getMapType()) {
          return
        }
      }
      hS.initialize(this);
      this.dispatchEvent(new bb("onaddtilelayer", hS))
    },
    removeTileLayer: function (e) {
      if (e) {
        e.remove();
        this.dispatchEvent(new bb("onremovetilelayer", e))
      }
    },
    getTileLayer: function (e) {
      if (this.tileMgr) {
        return this.tileMgr.getTileLayer(e)
      }
      return null
    },
    setMapType: function (e) {
      var i = this;
      if (this.mapType === e || this._mapTypeChanging) {
        return
      }
      if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
        return
      }
      if (this._earth && this._earth.getLock()) {
        return
      }
      this._mapTypeChanging = true;
      this.preMapType = this.mapType;
      this._boundsInPreMapType = this.getBoundsIn();
      if (this.preMapType === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow
      }
      if (e === BMAP_EARTH_MAP) {
        if (!bo.Earth) {
          ea.load("earth", function () {
            i._syncAndChangeMapType(e)
          });
          return
        }
        i._syncAndChangeMapType(e)
      } else {
        if (this.preMapType !== BMAP_EARTH_MAP) {
          this._changeFlatMapType(e);
          this._mapTypeChanging = false
        } else {
          this._setMapTypeStatus(e, function (T, hR) {
            var hS = i._earth.getEarthCanvas();
            i._changeFlatMapType(e, this.preMapType);
            if (i._mapTypeChangAni) {
              i._mapTypeChangAni.stop()
            }
            i._mapTypeChangAni = fk.start({
              el: hS,
              style: "opacity",
              startValue: 1,
              endValue: 0,
              duration: 200,
              callback: function () {
                i._mapTypeChangAni = null;
                i._mapTypeChanging = false
              }
            });
            T = en.convertLL2MC(T);
            if (i._renderType === "webgl") {
              C.extend(i, c7.prototype);
              i.setCenterIn(T, {
                noAnimation: true
              });
              i.setZoomIn(hR, {
                noAnimation: true
              })
            } else {
              C.extend(i, am.prototype);
              i.centerAndZoomIn(T, hR)
            }
          })
        }
      }
    },
    _changeFlatMapType: function (hU) {
      if (!hU || !b6[hU]) {
        return
      }
      var h2 = this.preMapType;
      this.mapType = hU;
      var hR = this.getTileLayer(h2);
      if (hR) {
        this.removeTileLayer(hR)
      }
      if (h2 !== BMAP_EARTH_MAP || this._renderType !== "webgl" || this.baseLayerAdded !== true) {
        var T = new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712));
        var hZ = new c5(T, "baidu", hU);
        var h1 = this._renderType === "webgl" ? 2 : 1;
        var hS = new cR({
          mapType: hU,
          copyright: hZ,
          dataType: h1,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "na"
        });
        hS._isInnerLayer = true;
        this.addTileLayer(hS);
        if (this._renderType === "webgl" && !this.baseLayerAdded) {
          this.baseLayerAdded = true
        }
      }
      if (h2 === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow;
        this._removeHybirdMap()
      } else {
        if (hU === BMAP_SATELLITE_MAP) {
          if (this._preStreetLayerShow === true || typeof this._preStreetLayerShow === "undefined") {
            this._addHybirdMap()
          }
        }
      }
      var hW = this.tileMgr.tileLayers;
      for (var hV = 0, hT = hW.length; hV < hT; hV++) {
        var hX = hW[hV];
        var h0 = hX.tilesDiv;
        if (!h0) {
          continue
        }
        if (!hX._isInnerLayer && h0.style.visibility === "hidden") {
          h0.style.visibility = ""
        }
      }
      var hY = new bb("onmaptypechange");
      hY.zoomLevel = this.zoomLevel;
      hY.mapType = hU;
      hY.exMapType = h2;
      this.dispatchEvent(hY)
    },
    showStreetLayer: function (e) {
      e ? this._addHybirdMap() : this._removeHybirdMap()
    },
    hideStreetLayer: function (e) {
      this._hideStreetLayerOptions = e;
      this._removeHybirdMap(e)
    },
    _addHybirdMap: function () {
      this._isHybridShow = true;
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth) {
          this._earth.showStreetLayer()
        }
        return
      }
      if (this._hybridTileLayer) {
        this.addTileLayer(this._hybridTileLayer);
        var hT = new bb("onstreetlayer_show");
        this.dispatchEvent(hT);
        return
      }
      var hS = new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712));
      var T = new c5(hS, "", BMAP_HYBRID_MAP);
      var i = new cR({
        copyright: T,
        transparentPng: true,
        tileTypeName: "web"
      });
      i._isInnerLayer = true;
      var hR = this.isCanvasMap();
      i.getTilesUrl = function (hU, hZ) {
        var hX = b6.B_STREET_MAP;
        var hY = aD("ditu", "satelliteStreet");
        var hV = hY.ver;
        var e = hY.udt;
        var hW = hX.tileUrls[Math.abs(hU.x + hU.y) % hX.tileUrls.length] + "?qt=vtile&x=" + (hU.x + "").replace(/-/gi, "M") + "&y=" + (hU.y + "").replace(/-/gi, "M") + "&z=" + hZ + "&styles=sl&v=" + hV + "&udt=" + e + "$scaler=" + a6() + "&showtext=" + (hR ? 0 : 1);
        return hW
      };
      this._isHybridShow = true;
      this.addTileLayer(i);
      this._hybridTileLayer = i;
      var hT = new bb("onstreetlayer_show");
      this.dispatchEvent(hT)
    },
    _removeHybirdMap: function (i) {
      this._isHybridShow = false;
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth) {
          this._earth.hideStreetLayer(i)
        }
        return
      }
      if (this._hybridTileLayer) {
        this.removeTileLayer(this._hybridTileLayer);
        var T = new bb("onstreetlayer_hide");
        this.dispatchEvent(T)
      }
    },
    isStreetLayerShow: function () {
      return this._isHybridShow
    },
    getTileId: function (e, hT) {
      var hR = b6[this.mapType];
      if (typeof hR !== "object") {
        return null
      }
      var T = hR.baseUnits * Math.pow(2, (hR.zoomLevelBase - hT));
      var hS = parseInt(e.lng / T, 10);
      var i = parseInt(e.lat / T, 10);
      return {
        row: hS,
        column: i,
        level: hT
      }
    },
    reset: function () {
      this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true)
    },
    setOptions: function (e) {
      e = e || {};
      for (var T in e) {
        if (e.hasOwnProperty(T)) {
          var i = true;
          if (typeof e[T] !== "object") {
            i = e[T] !== this.config[T]
          }
          this.config[T] = e[T];
          if (T === "fixCenterWhenResize") {
            this.config.enableResizeOnCenter = e[T]
          }
          if (!i) {
            continue
          }
          switch (T) {
            case "style":
            case "styleUrl":
              if (T === "style" && e.styleUrl) {
                break
              }
              this.fire(new bb("onstyle_willchange"));
              var hR = this;
              this.loadMapStyleFiles(function () {
                hR.fire(new bb("onstyle_changed"))
              });
              break;
            case "enableAutoResize":
              if (e[T] === true) {
                this.enableAutoResize()
              } else {
                this.disableAutoResize()
              }
              break;
            case "displayOptions":
              this.setDisplayOptions(e[T]);
              break
          }
        }
      }
    },
    enableDragging: function () {
      this.config.enableDragging = true
    },
    disableDragging: function () {
      this.config.enableDragging = false
    },
    enableInertialDragging: function () {
      this.config.enableInertialDragging = true
    },
    disableInertialDragging: function () {
      this.config.enableInertialDragging = false
    },
    enableScrollWheelZoom: function () {
      this.config.enableWheelZoom = true
    },
    disableScrollWheelZoom: function () {
      this.config.enableWheelZoom = false
    },
    enableContinuousZoom: function () {
      this.config.enableContinuousZoom = true
    },
    disableContinuousZoom: function () {
      this.config.enableContinuousZoom = false
    },
    enableResizeOnCenter: function () {
      this.config.enableResizeOnCenter = true
    },
    disableResizeOnCenter: function () {
      this.config.enableResizeOnCenter = false
    },
    enableDoubleClickZoom: function () {
      this.config.enableDblclickZoom = true
    },
    disableDoubleClickZoom: function () {
      this.config.enableDblclickZoom = false
    },
    enableKeyboard: function () {
      this.config.enableKeyboard = true
    },
    disableKeyboard: function () {
      this.config.enableKeyboard = false
    },
    getSize: function () {
      return new d9(this.width, this.height)
    },
    enablePinchToZoom: function () {
      this.config.enablePinchZoom = true
    },
    disablePinchToZoom: function () {
      this.config.enablePinchZoom = false
    },
    enableTilt: function () {
      this.config.enableTilt = true
    },
    disableTilt: function () {
      this.config.enableTilt = false
    },
    enableRotate: function () {
      this.config.enableRotate = true
    },
    disableRotate: function () {
      this.config.enableRotate = false
    },
    enableAutoResize: function () {
      this.config.enableAutoResize = true;
      this._watchSize();
      if (!this.temp.autoResizeTimer) {
        this.temp.autoResizeTimer = setInterval(this._watchSize, 16)
      }
    },
    disableAutoResize: function () {
      this.config.enableAutoResize = false;
      if (this.temp.autoResizeTimer) {
        clearInterval(this.temp.autoResizeTimer);
        this.temp.autoResizeTimer = null
      }
    },
    checkResize: function () {
      this._watchSize()
    },
    resize: function () {
      this._watchSize()
    },
    getContainerSize: function () {
      return new d9(this.container.clientWidth, this.container.clientHeight)
    },
    _getProperZoom: function (T) {
      if (!T) {
        T = this.zoomLevel
      }
      var i = this.getMinZoom();
      var e = this.getMaxZoom();
      var hR = false;
      if (T < i) {
        hR = true;
        T = i
      }
      if (T > e) {
        hR = true;
        T = e
      }
      if (this._renderType !== "webgl") {
        T = Math.round(T)
      }
      return {
        zoom: T,
        exceeded: hR
      }
    },
    getContainer: function () {
      return this.container
    },
    getZoomUnits: function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return Math.pow(2, 18 - this._earth.getImageZoom())
      }
      var e = b6[this.mapType];
      if (typeof e !== "object") {
        return null
      }
      var i = T || this.zoomLevel;
      return Math.pow(2, (e.zoomLevelBase - i))
    },
    pointToPixelIn: function (h0, h2) {
      if (!h0) {
        return
      }
      h2 = h2 || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        var hR;
        if (!h0._llPt) {
          hR = en.convertMC2LL(h0);
          h0._llPt = hR
        }
        hR = h0._llPt;
        var hW = null;
        var T = null;
        if (typeof h2.zoom === "number") {
          var hZ = this._earth;
          var h1 = hZ._getEarthZoomByImgZoom(h2.zoom);
          if (h1 <= 3) {
            hW = hZ._generateTmpPMatrix(h1)
          }
          T = hZ._generateTmpMVMatrix(hZ.getCenter(), h1)
        }
        var hS = this._earth.fromLatLngToPixel(hR, {
          useRound: false,
          isCalcOnBack: true,
          matrixInfo: {
            modelViewMatrix: T,
            projectionMatrix: hW
          }
        });
        return hS
      }
      if ((this._heading % 360 === 0 && this._tilt === 0) || !this._webglMapCamera) {
        var hY = this.getZoomUnits(h2.zoom);
        var hU = h2.center || this.centerPoint;
        var i = this.width / 2;
        var hT = this.height / 2;
        var hX = (h0.lng - hU.lng) / hY + i;
        var hV = (hU.lat - h0.lat) / hY + hT;
        if (h2.useRound !== false) {
          hX = Math.round(hX);
          hV = Math.round(hV)
        }
        return new ej(hX, hV)
      }
      var e = this._webglMapCamera.fromMCToScreenPixel(h0.lng, h0.lat, h2);
      if (h2.useRound === false) {
        return e
      }
      e.x = Math.round(e.x);
      e.y = Math.round(e.y);
      return e
    },
    pixelToPointIn: function (e, hY) {
      if (!e) {
        return
      }
      hY = hY || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        if (typeof hY.zoom === "number") {
          var hW = this._earth;
          var hT = null;
          var T = null;
          var hX = hW._getEarthZoomByImgZoom(hY.zoom);
          if (hX <= 3) {
            hT = hW._generateTmpPMatrix(hX)
          }
          T = hW._generateTmpMVMatrix(hW.getCenter(), hX)
        }
        var i = this._earth.fromPixelToLatLng(e, {
          matrixInfo: {
            modelViewMatrix: T,
            projectionMatrix: hT
          }
        });
        if (i === null) {
          return null
        }
        return en.convertLL2MC(i)
      }
      if ((this._heading % 360 !== 0 || this._tilt > 0) && this._webglMapCamera) {
        return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, hY)
      }
      var hU = hY.center || this.centerPoint;
      var hV = this.getZoomUnits(hY.zoom);
      var hS = hU.lng + hV * (e.x - this.width / 2);
      var hR = hU.lat - hV * (e.y - this.height / 2);
      return new hs(hS, hR)
    },
    pointToOverlayPixelIn: function (e, hR) {
      hR = hR || {};
      var T = this.pointToPixelIn(e, {
        zoom: hR.zoom,
        center: hR.center,
        forLabel: true,
        frustumTest: true,
        useRound: hR.useRound
      });
      if (!T) {
        return
      }
      if (hR.fixPosition && this.mapType !== "B_EARTH_MAP") {
        var hS = this.getSize();
        var i = this.worldSize(hR.zoom);
        if (T.x > hS.width) {
          while (T.x > hS.width) {
            T.x -= i
          }
        } else {
          if (T.x < 0) {
            while (T.x < 0) {
              T.x += i
            }
          }
        }
      }
      if (this._renderType === "webgl") {
        return T
      }
      T.x -= this.offsetX;
      T.y -= this.offsetY;
      return T
    },
    overlayPixelToPointIn: function (i, e) {
      if (!i) {
        return
      }
      var T = i.clone();
      if (this._renderType !== "webgl") {
        T.x += this.offsetX;
        T.y += this.offsetY
      }
      return this.pixelToPointIn(T, e)
    },
    getProjection: function () {
      return new en()
    },
    lnglatToMercator: function (e, hR) {
      var i = new hs(e, hR);
      var T = en.convertLL2MC(i);
      return [T.lng, T.lat]
    },
    mercatorToLnglat: function (i, e) {
      if (isNaN(i) || isNaN(e)) {
        return []
      }
      i = parseFloat(i);
      e = parseFloat(e);
      var hR = new hs(i, e);
      var T = en.convertMC2LL(hR);
      return [T.lng, T.lat]
    },
    getBoundsIn: function () {
      var h4 = arguments[0];
      if (this.mapType === BMAP_EARTH_MAP && this._earth) {
        var hY = this._earth.getCustomBounds();
        if (!hY) {
          return this.config.defaultMaxBounds
        }
        var hX = hY.getSouthWest();
        var e = hY.getNorthEast();
        if (hX.lng > e.lng) {
          e.lng = 180
        }
        var im = en.convertLL2MC(hX);
        var ib = en.convertLL2MC(e);
        var h1 = this.config.defaultMaxBounds;
        var ia = Math.max(im.lng, h1.sw.lng);
        var h9 = Math.max(im.lat, h1.sw.lat);
        var h3 = Math.min(ib.lng, h1.ne.lng);
        var h2 = Math.min(ib.lat, h1.ne.lat);
        var h6 = new dS(new hs(ia, h9), new hs(h3, h2));
        h6.pointBottomLeft = new hs(ia, h9);
        h6.pointBottomRight = new hs(h3, h9);
        h6.pointTopLeft = new hs(ia, h2);
        h6.pointTopRight = new hs(h3, h2);
        h6.setMinMax();
        h6.makeNormalizedPoint(this._earth.getHeading());
        return h6
      }
      h4 = h4 || {};
      var hS = h4.margins || [0, 0, 0, 0];
      var ih = this.pixelToPointIn({
        x: hS[3],
        y: this.height - hS[2]
      }, h4);
      var il = this.pixelToPointIn({
        x: this.width - hS[1],
        y: hS[0]
      }, h4);
      var h8 = typeof h4.heading === "number" ? h4.heading : (this._heading % 360);
      var T = typeof h4.tilt === "number" ? h4.tilt : this._tilt;
      var h0 = this._webglMapCamera;
      if ((h8 === 0 && T === 0) || !h0) {
        this._bounds.setSouthWest(ih);
        this._bounds.setNorthEast(il);
        this._bounds.pointBottomLeft = ih;
        this._bounds.pointBottomRight = new hs(il.lng, ih.lat);
        this._bounds.pointTopRight = il;
        this._bounds.pointTopLeft = new hs(ih.lng, il.lat);
        this._bounds.setMinMax();
        this._bounds.makeNormalizedPoint(h8);
        return this._bounds
      }
      var h7 = this.pixelToPointIn({
        x: hS[3],
        y: hS[0]
      }, h4);
      var hR = h0.getPosition();
      var io = Math.sqrt(Math.pow(h7.lng - hR[0], 2) + Math.pow(h7.lat - hR[1], 2));
      var ii = this.getZoomUnits();
      var iq = io / ii;
      var ie = h0._frustumSideLen;
      var hW = h0._fovy;
      if (iq > ie || (90 - T) < hW / 2) {
        var ip = [h7.lng - hR[0], h7.lat - hR[1]];
        if ((90 - T) < hW / 2) {
          ip[0] = -ip[0];
          ip[1] = -ip[1]
        }
        var ig = ie * ii;
        var hV = [ip[0] / io * ig + hR[0], ip[1] / io * ig + hR[1]];
        var ic = [il.lng - hR[0], il.lat - hR[1]];
        if ((90 - T) < hW / 2) {
          ic[0] = -ic[0];
          ic[1] = -ic[1]
        }
        var hT = [ic[0] / io * ig + hR[0], ic[1] / io * ig + hR[1]];
        h7.lng = hV[0];
        h7.lat = hV[1];
        il.lng = hT[0];
        il.lat = hT[1]
      }
      var h5 = this.pixelToPointIn({
        x: this.width - hS[1],
        y: this.height - hS[2]
      }, h4);
      var id = [ih, il, h7, h5];
      var ik = id[0].lng;
      var ir = id[0].lat;
      var hU = id[0].lng;
      var hZ = id[0].lat;
      for (var ij = 1; ij < 4; ij++) {
        if (id[ij].lng < ik) {
          ik = id[ij].lng
        }
        if (id[ij].lng > hU) {
          hU = id[ij].lng
        }
        if (id[ij].lat < ir) {
          ir = id[ij].lat
        }
        if (id[ij].lat > hZ) {
          hZ = id[ij].lat
        }
      }
      this._bounds.setSouthWest(new hs(ik, ir));
      this._bounds.setNorthEast(new hs(hU, hZ));
      this._bounds.pointTopLeft = h7;
      this._bounds.pointTopRight = il;
      this._bounds.pointBottomRight = h5;
      this._bounds.pointBottomLeft = ih;
      this._bounds.makeNormalizedPoint(h8);
      this._bounds.setMinMax();
      return this._bounds
    },
    isLoaded: function () {
      return !!this.loaded
    },
    _getBestLevel: function (i, h0) {
      var hT = 0;
      if (this._renderType === "webgl" && !f5()) {
        hT = 100
      }
      var hU = h0.margins || [10, 10, 10, 10];
      var hR = h0.zoomFactor || 0;
      var hV = hU[1] + hU[3];
      var hS = hU[0] + hU[2];
      var e = this.getMinZoom();
      var hZ = this.getMaxZoom();
      var hY = i.toSpan();
      var hX = hY.width / (this.width - hV - hT);
      var hW = hY.height / (this.height - hS - hT);
      var T = 18 - eC(Math.max(hX, hW));
      if (T < e) {
        T = e
      }
      if (T > hZ) {
        T = hZ
      }
      T += hR;
      if (this._renderType !== "webgl") {
        T = Math.floor(T)
      }
      return T
    },
    getViewportIn: function (h2, h5) {
      if (this.mapType === BMAP_EARTH_MAP) {
        h2 = h2 || [];
        var h1 = [];
        for (var hS = 0; hS < h2.length; hS++) {
          if (!h2[hS]) {
            continue
          }
          h1.push(en.convertMC2LL(h2[hS]))
        }
        var h0 = this._earth.getViewportIn(h1, h5);
        var hT = h0.center;
        var hU = h0.zoom;
        var hY = en.convertLL2MC(hT);
        return {
          center: hY,
          zoom: hU
        }
      }
      var h4 = {
        center: this.getCenterIn(),
        zoom: this.getZoom()
      };
      if (!h2 || h2.length === 0) {
        return h4
      }
      h5 = h5 || {};
      var T;
      if (h2 instanceof dS) {
        T = h2
      } else {
        var hX = h2;
        T = new dS();
        for (var hS = hX.length - 1; hS >= 0; hS--) {
          T.extend(hX[hS])
        }
        if (T.isEmpty()) {
          return h4
        }
      }
      var e = T.getCenter();
      var h3 = this._getBestLevel(T, h5);
      if (h5.margins) {
        var hW = h5.margins;
        var hV = (hW[1] - hW[3]) / 2;
        var hZ = (hW[0] - hW[2]) / 2;
        var hR = this.getZoomUnits(h3);
        e.lng = e.lng + hR * hV;
        e.lat = e.lat + hR * hZ
      }
      return {
        center: e,
        zoom: h3
      }
    },
    setViewportIn: function (hR, hS) {
      if (this.mapType === BMAP_EARTH_MAP) {
        var hW;
        if (hR && hR.center) {
          var T = en.convertMC2LL(hR.center);
          var hU = this._earth._getEarthZoomByImgZoom(hR.zoom, T);
          hW = {
            center: T,
            zoom: hU
          }
        } else {
          hW = [];
          for (var hT = 0; hT < hR.length; hT++) {
            var hV = en.convertMC2LL(hR[hT]);
            hW[hT] = new c4(hV.lat, hV.lng)
          }
        }
        this._earth.setViewportIn(hW, hS);
        return
      }
      var e;
      if (hR && hR.center) {
        e = hR
      } else {
        e = this.getViewportIn(hR, hS)
      }
      hS = hS || {};
      if (this._renderType === "webgl") {
        this.centerAndZoomIn(e.center, e.zoom, hS);
        return
      }
      if (e.zoom === this.zoomLevel && hS.enableAnimation !== false) {
        this.panToIn(e.center, {
          duration: 200,
          callback: hS.callback
        })
      } else {
        this.centerAndZoomIn(e.center, e.zoom, hS)
      }
    },
    addSpots: function (T, i) {
      if (!T || T.length === 0) {
        return
      }
      i = i || {};
      var hT = i.zIndex || 0;
      var hS = typeof i.enableMultiResponse === "undefined" ? true : !!i.enableMultiResponse;
      this.spotsPool = this.spotsPool || {};
      var e = "sp" + (this.temp.spotsGuid++);
      this.spotsPool[e] = {
        spots: T.slice(0),
        zIndex: hT,
        enableMultiResponse: hS
      };
      var hR = this;
      ea.load("hotspot", function () {
        hR._asyncRegister()
      });
      return e
    },
    getSpots: function (e) {
      return this.spotsPool[e] && this.spotsPool[e].spots || []
    },
    removeSpots: function (e) {
      if (!e || !this.spotsPool[e]) {
        return
      }
      delete this.spotsPool[e]
    },
    clearSpots: function () {
      delete this.spotsPool
    },
    getIconByClickPosition: function (i) {
      if (!this.config.enableIconClick || !this._spotsMgr) {
        return null
      }
      var e = this._spotsMgr.getSpotsByScreenPosition(i);
      if (e[0] && e[0].userdata) {
        var T = e[0].userdata;
        return {
          name: T.name,
          uid: T.uid,
          position: T.iconPoint || e[0].pt
        }
      }
      return null
    },
    setBounds: function (e) {
      b6[this.mapType].bounds = e.clone()
    },
    getCoordType: function () {
      return this.config.coordType
    },
    getPanes: function () {
      return this._panes
    },
    getInfoWindow: function () {
      if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
        return this.temp.infoWin
      }
      return null
    },
    getDistanceIn: function (hS, e) {
      if (!hS || !e) {
        return
      }
      if (hS.equals(e)) {
        return 0
      }
      if (this.mapType === BMAP_EARTH_MAP) {
        var hR = en.convertMC2LL(hS);
        var T = en.convertMC2LL(e);
        return this._earth.getDistance(hR, T)
      }
      var i = en.getDistanceByMC(hS, e);
      return i
    },
    getOverlays: function () {
      var hS = [];
      var hT = this._overlays;
      var hR = this._customOverlays;
      if (hT) {
        for (var T in hT) {
          if (hT[T] instanceof cV) {
            hS.push(hT[T])
          }
        }
      }
      if (hR) {
        for (var T = 0, e = hR.length; T < e; T++) {
          hS.push(hR[T])
        }
      }
      return hS
    },
    getMapType: function () {
      return this.mapType
    },
    _asyncRegister: function () {
      for (var e = this.temp.registerIndex; e < bo._register.length; e++) {
        bo._register[e](this)
      }
      this.temp.registerIndex = e
    },
    setDefaultCursor: function (e) {
      this.config.defaultCursor = e;
      if (this.platform) {
        this.platform.style.cursor = this.config.defaultCursor
      }
    },
    getDefaultCursor: function () {
      return this.config.defaultCursor
    },
    setDraggingCursor: function (e) {
      this.config.draggingCursor = e
    },
    getDraggingCursor: function () {
      return this.config.draggingCursor
    },
    _syncAndChangeMapType: function (e) {
      var i = this;
      if (i._renderType === "webgl" && i.getTilt() > c8.MAX_DRAG_TILT_L2) {
        i.setTilt(c8.MAX_DRAG_TILT_L2, {
          callback: function () {
            i._changeEarthMapType(e)
          }
        })
      } else {
        i._changeEarthMapType(e)
      }
    },
    _changeEarthMapType: function (T) {
      var hR = this;
      var hU = hR.tileMgr.tileLayers;
      if (this._mapTypeChangAni) {
        this._mapTypeChangAni.stop()
      }
      var hT;
      if (this._earth) {
        hT = this._earth.getEarthCanvas()
      }
      if (!this._earth) {
        this.maskLayer.style.opacity = 1;
        this.maskLayer.style.zIndex = 999;
        this.maskLayer.style.background = "#000"
      }
      this._mapTypeChangAni = new o({
        duration: 400,
        render: function (e) {
          if (!hR._earth) {
            return
          }
          hT.style.opacity = e
        },
        finish: function () {
          for (var e = hU.length - 1, hV = e; hV >= 0; hV--) {
            var hX = hU[hV].tilesDiv;
            if (hX) {
              hX.style.visibility = "hidden"
            }
            if (hU[hV]._isInnerLayer && hR._renderType !== "webgl") {
              hR.removeTileLayer(hU[hV])
            }
          }
          hR._mapTypeChangAni = null;
          hR._mapTypeChanging = false;

          function hW() {
            var h1 = hR.getZoom() - 2;
            var h2 = hR.getCenterIn();
            var hZ = en.convertMC2LL(h2);
            hR._earth = new bo.Earth(hR, {
              center: hZ,
              zoom: h1,
              showRealSunlight: hR.config.showRealSunlight,
              showMilkyway: hR.config.showMilkyway,
              earthBackground: hR.config.earthBackground
            });
            hR._proxyEarthEvents();
            var hY = hR.mapType;
            hR.mapType = T;
            var h0 = new bb("onmaptypechange");
            h0.zoomLevel = this.zoomLevel;
            h0.mapType = T;
            h0.exMapType = hY;
            hR.dispatchEvent(h0);
            hR._setMapTypeStatus(T);
            C.extend(hR, bo.EarthView.prototype);
            if (!hR._navigationCtrl && hR.config.showControls) {
              hR._navigationCtrl = new eU(hR)
            }
          }
          if (!hR._earth) {
            if (bo["FeatureStyle" + hR.config.style]) {
              hW()
            } else {
              hR.loadMapStyleFiles(function () {
                hW()
              })
            }
          }
          if (parseInt(hR.maskLayer.style.opacity, 10) === 1) {
            setTimeout(function () {
              hR.maskLayer.style.zIndex = 9;
              hR.maskLayer.style.opacity = 0
            }, 1000)
          }
        }
      });
      if (!this._earth) {
        return
      }
      var i = this.mapType;
      this.mapType = T;
      var hS = new bb("onmaptypechange");
      hS.zoomLevel = this.zoomLevel;
      hS.mapType = T;
      hS.exMapType = i;
      this.dispatchEvent(hS);
      hR._setMapTypeStatus(T);
      C.extend(hR, bo.EarthView.prototype)
    },
    getMapStyleId: function () {
      if (typeof this.config.style === "string") {
        return this.config.style
      }
      return this.config.mapStyleId || "custom"
    },
    _setMapTypeStatus: function (T) {
      var hV = arguments[1];
      if (T === BMAP_EARTH_MAP) {
        var hT = this._earth.getEarthCanvas();
        if (hT) {
          hT.style.display = ""
        }
        var hW = {
          noAnimation: true
        };
        this._earth.setCenter(en.convertMC2LL(this.centerPoint), hW);
        this._earth.setImageZoom(this.zoomLevel, hW);
        this._earth.setTilt(this.getTilt(), hW);
        this._earth.setHeading(this.getHeading(), hW)
      } else {
        if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
          var hU = this._earth;
          var hR = hU.getMapZoom();
          var hS = hU._imageRawZoom || hR;
          var i = hS - hR;
          var e = hU.getCenter();
          if (this._renderType === "webgl") {
            this._tilt = hU.getTilt();
            if (this.zoomLevel > 7) {
              this._heading = hU.getHeading();
              hV && hV(e, hR);
              return
            }
            if (hU.getHeading() !== 0) {
              hU.setTilt(this.getTilt());
              hU.setHeading(this.getHeading(), {
                callback: function () {
                  hV && hV(e, hR)
                }
              })
            } else {
              hV && hV(e, hR)
            }
            return
          }
          if (i < 0.1 && hU.getTilt() === 0 && hU.getHeading() === 0) {
            hV && hV(e, hR);
            return
          }
          hU.setTilt(0);
          hU.setHeading(0);
          hU.setZoom(hU.getZoom() - i, {
            callback: function () {
              hV && hV(e, hR)
            }
          })
        }
      }
    },
    _proxyEarthEvents: function () {
      var hS = this;
      var hT = this._earth;
      hT.on("tilesload", function (i) {
        hS.fire(i)
      });
      hT.on("centerandzoom", function (i) {
        hS.dispatchEvent(new bb("onmoveend"));
        hS.dispatchEvent(new bb("onzoomend"))
      });

      function hR(i) {
        hS.fire(i)
      }
      var e = ["zoomstart", "zoomend", "tilesload", "sunlighttime_change", "sunlighttime_clear", "centerandzoom", "animation_start", "animation_stop", "movestart", "moveend", "moving", "dragstart", "dragend", "dragging"];
      for (var T = 0; T < e.length; T++) {
        hT.on(e[T], hR)
      }
    },
    forceEnableEarth: function () {
      this.config.forceEnableEarth = true;
      this.config.enableEarth = a8.ifEnableEarth(true);
      this.dispatchEvent(new bb("forceenableearth"));
      return this.config.enableEarth
    },
    setLock: function (e) {
      if (this.mapType === BMAP_EARTH_MAP) {
        this._earth.setLock(e)
      }
      this._lock = e
    },
    getLock: function () {
      if (this.mapType === BMAP_EARTH_MAP) {
        return this._earth.getLock()
      }
      return this._lock
    },
    getEarth: function () {
      return this._earth
    },
    isSupportEarth: function () {
      return this.config.enableEarth
    },
    isCanvasMap: function () {
      return !!(this._renderType === "canvas" && this.getMapType() !== "B_EARTH_MAP")
    },
    getCanvasMapCoordByUid: function (hS) {
      if (this._renderType === "webgl") {
        var hT = this.tileMgr.tileLayers;
        for (var hR = 0; hR < hT.length; hR++) {
          if (hT[hR].labelProcessor) {
            return hT[hR].labelProcessor.getLabelByUid(hS, "")
          }
        }
        return null
      }
      var e = this.canvas2dMapMgr._labelClick;
      var T = e.findLabelByUid(hS);
      return T ? new hs(T.iconPos.geoX, T.iconPos.geoY) : null
    },
    loadBizData: function (i) {
      var e = new bb("onloadbizdata");
      e.data = i;
      this.dispatchEvent(e)
    },
    unloadBizData: function () {
      var e = new bb("onunloadbizdata");
      this.dispatchEvent(e)
    },
    zoomIn: function (e) {
      this.setZoomIn(this.zoomLevel + 1, {
        zoomCenter: e
      })
    },
    zoomOut: function (e) {
      this.setZoomIn(this.zoomLevel - 1, {
        zoomCenter: e
      })
    },
    setMaxZoom: function (e) {
      if (this._renderType === "webgl") {
        this.config.maxZoom = e <= 21 ? e : 21
      } else {
        this.config.maxZoom = e <= 19 ? e : 19
      }
    },
    setMinZoom: function (e) {
      this.config.minZoom = e >= 3 ? e : 3
    },
    setCenterIn: function (e, i) {
      this.panToIn(e, i)
    },
    getRenderType: function () {
      return this._renderType
    },
    getSolarInfo: function (hR) {
      hR = hR || this._initDate;
      var T = bz(hR);
      var e = en.convertLL2MC(new hs(T[0], T[1]));
      var hZ = e.latLng;
      var hU = bo.Projection.convertMC2LL(this.centerPoint);
      var hW = hR.getUTCHours();
      var hY = hW + 24 * hU.lng / 360;
      var hX = hY - 12;
      var hV = hX * 60 * 0.25;
      var hT = Math.asin(Math.sin(dK(hU.lat)) * Math.sin(dK(hZ.lat)) + Math.cos(dK(hU.lat)) * Math.cos(dK(hZ.lat)) * Math.cos(dK(hV)));
      var hS = Math.asin(Math.sin(dK(hV)) * Math.cos(dK(hZ.lat)) / Math.cos(hT));
      var i = "north";
      if (hU.lat < hZ.lat) {
        i = "south"
      }
      return {
        zenith: e,
        solarAltitude: hT,
        solarAzimuth: hS,
        centerPosition: i,
        position: e
      }
    },
    setDisplayOptions: function (T) {
      if (!T) {
        return
      }
      for (var e in this._displayOptions) {
        if (this._displayOptions.hasOwnProperty(e)) {
          if (typeof T[e] === "boolean" || (e === "skyColors" && typeof T.skyColors === "object") || (e === "labelMargin" && typeof T.labelMargin === "number")) {
            this._displayOptions[e] = T[e]
          }
        }
      }
      var i = this.getMapType();
      if (i === da.NORMAL) {
        this.fire(new bb("ondisplayoptions_changed"))
      } else {
        if (i === da.EARTH && this._earth) {
          this._earth.fire(new bb("ondisplayoptions_changed"))
        }
      }
    },
    getHorizonPosY: function (e) {
      if (!e || !this._webglMapCamera) {
        return null
      }
      var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {
        heading: 0
      });
      return i.y
    },
    getIndoorInfo: function () {
      if (!this._indoorMgr) {
        return
      }
      return this._indoorMgr.getData()
    },
    showIndoor: function (e, T) {
      var i = new bb("onindoor_status_changed");
      i.uid = e;
      i.floor = T;
      this.fire(i)
    },
    addAreaSpot: function (e, T) {
      if (!e || e.length === 0) {
        return
      }
      T = T || {};
      this.areaSpots = this.areaSpots || {};
      var i = T.id || ("sp" + (this.temp.spotsGuid++));
      this.areaSpots[i] = {
        spot: e,
        userData: T.userData
      };
      var hR = this;
      ea.load("hotspot", function () {
        hR._asyncRegister()
      });
      return i
    },
    getAreaSpot: function (e) {
      if (this.areaSpots && this.areaSpots[e]) {
        return this.areaSpots[e]
      }
      return null
    },
    removeAreaSpot: function (e) {
      if (!e || !this.areaSpots[e]) {
        return
      }
      delete this.areaSpots[e]
    },
    clearAreaSpots: function () {
      this.areaSpots = {}
    },
    resetSpotStatus: function () {
      this.fire(new bb("onspot_status_reset"))
    },
    hightlightSpotByUid: function (e, T) {
      var i = new bb("onspot_highlight");
      i.uid = e;
      i.tilePosStr = T;
      this.fire(i)
    },
    setZoomIn: function (i, e) {
      e = e || {};
      this.zoomTo(i, e.zoomCenter || null, e)
    },
    getCurrentMaxTilt: function () {
      var e = this.zoomLevel;
      if (this.mapType === "B_EARTH_MAP") {
        return c8.MAX_DRAG_TILT_L2
      }
      if (this.config.restrictCenter === false) {
        return c8.MAX_DRAG_TILT
      }
      if (e >= 19) {
        return c8.MAX_DRAG_TILT
      } else {
        if (e <= 18) {
          if (e < this._enableTiltZoom) {
            if (e >= this._enableTiltZoom - 2) {
              return (1 - (this._enableTiltZoom - e) / 2) * c8.MAX_DRAG_TILT_L2
            }
            return 0
          }
          return c8.MAX_DRAG_TILT_L2
        } else {
          return (c8.MAX_DRAG_TILT - c8.MAX_DRAG_TILT_L2) * (e - 18) + c8.MAX_DRAG_TILT_L2
        }
      }
    },
    worldSize: function (i) {
      var e = i || this.zoomLevel;
      return c8.WORLD_SIZE_MC / this.getZoomUnits(e)
    },
    setTrafficOn: function () {
      this.addTileLayer(ce)
    },
    setTrafficOff: function () {
      this.removeTileLayer(ce)
    },
    showOverlayContainer: function () {
      this.setDisplayOptions({
        overlay: true
      })
    },
    hideOverlayContainer: function () {
      this.setDisplayOptions({
        overlay: false
      })
    },
    addLabelsToMapTile: function (T) {
      for (var e = 0; e < T.length; e++) {
        if (typeof T[e].type === "undefined") {
          T[e].type = "fixed"
        }
        if (typeof T[e].rank !== "number") {
          T[e].rank = 50000
        }
        T[e].pt = T[e].position;
        T[e].custom = true;
        T[e].processedInZoom = 0;
        this._customTileLabels.push(T[e])
      }
      this.dispatchEvent(new bb("onadd_tile_labels"))
    },
    removeLabelsFromMapTile: function (T) {
      for (var hR = 0; hR < T.length; hR++) {
        for (var e = 0; e < this._customTileLabels.length; e++) {
          if (this._customTileLabels[e].uid === T[hR]) {
            this._customTileLabels.splice(e, 1)
          }
        }
      }
      this.dispatchEvent(new bb("onremove_tile_labels"))
    },
    clearLabels: function () {
      this._customTileLabels.length = 0;
      this.dispatchEvent(new bb("onclear_labels"))
    },
    loadMapStyleFiles: function (hS) {
      var i = this.config.style;
      var hR = this.config.styleUrl;
      var T = this;
      this._setTextRenderType();
      if (typeof i === "string" && !hR) {
        if (bo["FeatureStyle" + i]) {
          T.fire(new bb("onstyle_loaded"));
          hS();
          return
        }
        hm.load(e3.getMapStyleFiles(i), function () {
          if (T.config.style === i) {
            bo["FeatureStyle" + i] = window.FeatureStyle;
            bo["iconSetInfo" + i] = window.iconSetInfo_high;
            bo.indoorStyle = window.indoorStyle;
            T.fire(new bb("onstyle_loaded"));
            hS()
          }
        })
      } else {
        var e = i;
        f.init(T);
        f.getStyleJson(e, function (hU) {
          var hZ = ge;
          var h1 = bo.getGUID("custom");
          T.config.mapStyleId = h1;
          var hX = {};
          C.extend(hX, hU);
          var hV = Math.floor(T.getZoom());
          window.styleCbk = function (h2, h3) {
            if (h3 !== hY) {
              return
            }
            if (typeof h2 === "string") {
              h2 = JSON.parse(h2)
            }
            f.onStyleDataBack(h2, hV, h1, hX, hZ);
            bo.customStyleLoaded = true;
            T.fire(new bb("onstyle_loaded"));
            hS()
          };
          bo.customStyleInfo = {
            zoomRegion: {},
            zoomStyleBody: [],
            zoomFrontStyle: {}
          };
          var h0 = f.getStyleUrl(hU, hZ, "styleCbk", hV);
          var hT = h0.split("?")[0];
          var hY = h0.split("?")[1];
          if (hR) {
            hT = hR;
            hY = hT.split("?")[1]
          }
          if (!bo.iconSetInfoCustom) {
            var hW = e3.getMapStyleFiles("default");
            hW.splice(1, 1);
            hm.load(hW, function () {
              bo.iconSetInfoCustom = window.iconSetInfo_high;
              bo.indoorStyle = window.indoorStyle;
              if (hT.indexOf("jsonp") > "-1") {
                hm.load(hT)
              } else {
                // bo.customStyleInfo.xhr = gA.post(hT, hY, styleCbk)
                bo.customStyleInfo.xhr = gA.get(hT, styleCbk, null, null, hY)
              }
            })
          } else {
            if (hT.indexOf("jsonp") > "-1") {
              hm.load(hT)
            } else {
              bo.customStyleInfo.xhr = gA.post(hT, hY, styleCbk)
            }
          }
        })
      }
    },
    setCopyrightOffset: function (hR, i) {
      var T = new bb("oncopyrightoffsetchange", {
        logo: hR,
        cpy: i
      });
      this.dispatchEvent(T)
    },
    _setTextRenderType: function (e) {
      if (e) {
        this.config.textRenderType = e;
        return
      }
      if (this.config.textRenderType !== null) {
        return
      }
      if (f5()) {
        this.config.textRenderType = "canvas"
      } else {
        if (typeof this.config.style === "string") {
          this.config.textRenderType = "image"
        } else {
          this.config.textRenderType = "canvas"
        }
      }
    },
    destroy: function () {
      this._destroyed = true;
      this.fire(new bb("ondestroy"))
    },
    centerAndZoom: function (e, hT, T) {
      if (Object.prototype.toString.call(hT) !== "[object Undefined]") {
        hT = parseInt(hT)
      }
      if (typeof e === "string") {
        var hR = this;
        var hS = new V();
        hS.getPoint(e, function (hU) {
          e = hU;
          var hV = en.convertLL2MC(e);
          hR.centerAndZoomIn(hV, hT, T)
        })
      } else {
        var i = en.convertLL2MC(e);
        this.centerAndZoomIn(i, hT, T)
      }
    },
    pointToPixel: function (e, T) {
      var i = en.convertLL2MC(e);
      var hR = {};
      C.extend(hR, T);
      if (hR && hR.center) {
        hR.center = en.convertLL2MC(hR.center)
      }
      return this.pointToPixelIn(i, hR)
    },
    pixelToPoint: function (T, i) {
      var hR = {};
      C.extend(hR, i);
      if (hR && hR.center) {
        hR.center = en.convertLL2MC(hR.center)
      }
      var e = this.pixelToPointIn(T, hR);
      return en.convertMC2LL(e)
    },
    pointToOverlayPixel: function (e, T) {
      var i = en.convertLL2MC(e);
      var hR = {};
      C.extend(hR, T);
      if (hR && hR.center) {
        hR.center = en.convertLL2MC(hR.center)
      }
      return this.pointToOverlayPixelIn(i, hR)
    },
    overlayPixelToPoint: function (T, i) {
      var hR = {};
      C.extend(hR, i);
      if (hR && hR.center) {
        hR.center = en.convertLL2MC(hR.center)
      }
      var e = this.overlayPixelToPointIn(T, hR);
      return en.convertMC2LL(e)
    },
    setViewport: function (T, hR) {
      var e;
      if (T && T.center) {
        e = {};
        C.extend(e, T);
        e.center = en.convertLL2MC(e.center)
      } else {
        e = [];
        for (var hS = 0; hS < T.length; hS++) {
          e[hS] = en.convertLL2MC(T[hS])
        }
      }
      this.setViewportIn(e, hR)
    },
    getViewport: function (hT, hR) {
      var T;
      if (hT && hT.length) {
        T = [];
        for (var hS = 0; hS < hT.length; hS++) {
          T[hS] = en.convertLL2MC(hT[hS])
        }
      } else {
        if (hT instanceof dS) {
          T = new dS(en.convertLL2MC(hT.getSouthWest()), en.convertLL2MC(hT.getNorthEast()));
          T.setMinMax()
        }
      }
      var e = this.getViewportIn(T, hR);
      e.center = en.convertMC2LL(e.center);
      return e
    },
    getDistance: function (hS, T) {
      var i = en.convertLL2MC(hS);
      var hR = en.convertLL2MC(T);
      var e = this.getDistanceIn(i, hR);
      return e
    },
    setCenter: function (e, T) {
      if (typeof e === "string") {
        var hR = this;
        var hS = new V();
        hS.getPoint(e, function (hT) {
          e = hT;
          var hU = en.convertLL2MC(e);
          hR.setCenterIn(hU, T)
        })
      } else {
        var i = en.convertLL2MC(e);
        this.setCenterIn(i, T)
      }
    },
    setZoom: function (T, e) {
      var i = {};
      C.extend(i, e);
      if (i && i.zoomCenter) {
        i.zoomCenter = en.convertLL2MC(i.zoomCenter)
      }
      this.setZoomIn(T, i)
    },
    flyTo: function (e, T) {
      var i = en.convertLL2MC(e);
      this.flyToIn(i, T)
    },
    panTo: function (e, T) {
      var i = en.convertLL2MC(e);
      this.panToIn(i, T)
    },
    getCenter: function () {
      var e = this.getCenterIn();
      return en.convertMC2LL(e)
    },
    getBounds: function () {
      var e = this.getBoundsIn();
      var i = new dS(en.convertMC2LL(e.getSouthWest()), en.convertMC2LL(e.getNorthEast()));
      return i
    },
    setMapStyleV2: function (e) {
      this._setTextRenderType("canvas");
      this.setOptions({
        style: e
      })
    },
    startViewAnimation: function (T) {
      var e = T._options.delay;
      var i = this;
      setTimeout(function () {
        T._start(i)
      }, e)
    },
    pauseViewAnimation: function (e) {
      e._pause(this)
    },
    continueViewAnimation: function (e) {
      e._continue(this)
    },
    cancelViewAnimation: function (e) {
      e._cancel(this)
    },
    getMapScreenshot: function () {
      return this._webglMapScene._painter._canvas.toDataURL()
    }
  });
  var da = {
    NORMAL: "B_NORMAL_MAP",
    EARTH: "B_EARTH_MAP",
    SATELLITE: "B_STREET_MAP"
  };
  bo.MapTypeId = da;
  window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
  window.BMAPGL_NORMAL_MAP = "B_NORMAL_MAP";
  window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
  window.BMAP_HYBRID_MAP = "B_STREET_MAP";
  window.BMAP_EARTH_MAP = "B_EARTH_MAP";
  window.BMAP_COORD_MERCATOR = 1;
  window.BMAP_SYS_DRAWER = 0;
  window.BMAP_SVG_DRAWER = 1;
  window.BMAP_VML_DRAWER = 2;
  window.BMAP_CANVAS_DRAWER = 3;
  var f = {
    environment: "jsapi",
    map: null,
    ontilesloaded: false,
    onstyle_loaded: false,
    init: function (i) {
      var e = this;
      e.map = i;
      this.changeCopyright();
      this.setEnvironment(e.map.config.style);
      this.resetEventListener()
    },
    resetEventListener: function () {
      var e = this;
      this.ontilesloaded = false;
      this.onstyle_loaded = false;
      e.map.addEventListener("ontilesloaded", e.checkLoadedStatus);
      e.map.addEventListener("onstyle_loaded", e.checkLoadedStatus)
    },
    checkLoadedStatus: function (i) {
      f[i.type] = true;
      if (f.ontilesloaded && f.onstyle_loaded) {
        this.dispatchEvent(new bb("onstylechangetilesloaded"));
        this.removeEventListener("ontilesloaded", f.checkLoadedStatus);
        this.removeEventListener("onstyle_loaded", f.checkLoadedStatus)
      }
    },
    changeCopyright: function () {
      var e = this;
      if (e.map.cpyCtrl) {
        e.map.cpyCtrl.hide();
        if (e.environment !== "customEditor") {
          e.map.setCopyrightOffset(new d9(1, 1))
        }
      } else {
        e.map.addEventListener("oncopyrightaddend", function () {
          e.map.cpyCtrl.hide();
          if (e.environment !== "customEditor") {
            e.map.setCopyrightOffset(new d9(1, 1))
          }
        })
      }
    },
    setEnvironment: function (e) {
      if (e.customEditor) {
        this.environment = "customEditor";
        bJ.map = this.map
      } else {
        if (e.sharing) {
          this.environment = "sharing"
        } else {
          if (e.preview) {
            this.environment = "preview"
          } else {
            this.environment = "jsapi"
          }
        }
      }
    },
    getStyleJson: function (hR, hT) {
      var hS = this;
      if (hR.styleJson) {
        hT && hT(hR.styleJson)
      } else {
        if (hR.styleId) {
          var i = hR.styleId;
          var e = (Math.random() * 100000).toFixed(0);
          bo["_cbk_si_phpui" + e] = function (hV) {
            var hU = [];
            if (hV.result && hV.result["error"] === 0 && hV.content && hV.content["status"] === 0) {
              hU = hS.parseJson(hV.content["data"]["json"]);
              hT && hT(hU)
            } else {
              hT && hT("default")
            }
          };
          bo["_cbk_si_api" + e] = function (hV) {
            var hU = [];
            if (hV.status === 0) {
              if (hV.info) {
                hU = hS.parseJson(hV.info["json"])
              } else {
                hU = hS.parseJson(hV.data["json"])
              }
              hT && hT(hU)
            } else {
              hT && hT("default")
            }
          };
          var T = "";
          switch (this.environment) {
            case "jsapi":
              T = eV.apiHost + "/?qt=custom_map&v=3.0&style_id=" + i + "&type=publish&ak=" + ge;
              T += "&callback=" + eA + "._cbk_si_phpui" + e;
              break;
            case "sharing":
              T += "/apiconsole/custommap/getSharingJson";
              T += "?styleid=" + i + "&type=edit";
              T += "&ck=" + eA + "._cbk_si_api" + e;
              break;
            case "preview":
              T += "/apiconsole/custommap/getJson";
              T += "?styleid=" + i + "&type=edit";
              T += "&ck=" + eA + "._cbk_si_api" + e;
              break
          }
          hm.load(T)
        } else {
          hT && hT("default")
        }
      }
    },
    parseJson: function (T) {
      if (T === null || T === "") {
        return []
      }
      var i = {
        t: "featureType",
        e: "elementType",
        v: "visibility",
        c: "color",
        l: "lightness",
        s: "saturation",
        w: "weight",
        z: "level",
        h: "hue",
        f: "fontsize",
        zri: "curZoomRegionId",
        zr: "curZoomRegion"
      };
      var hS = {
        all: "all",
        g: "geometry",
        "g.f": "geometry.fill",
        "g.s": "geometry.stroke",
        l: "labels",
        "l.t.f": "labels.text.fill",
        "l.t.s": "labels.text.stroke",
        "l.t": "labels.text",
        "l.i": "labels.icon",
        "g.tf": "geometry.topfill",
        "g.sf": "geometry.sidefill"
      };
      var hR = T.split(",");
      var e = hR.map(function (hW) {
        var hV = hW.split("|").map(function (h2) {
          var h0 = i[h2.split(":")[0]];
          var hZ = (hS[h2.split(":")[1]] ? hS[h2.split(":")[1]] : h2.split(":")[1]);
          switch (hZ) {
            case "poi":
              hZ = "poilabel";
              break;
            case "districtlabel":
              hZ = "districtlabel";
              break
          }
          var h1 = {};
          h1[h0] = hZ;
          return h1
        });
        var hT = hV[0];
        var hY = 1;
        if (hV[1]["elementType"]) {
          hY = 2;
          C.extend(hT, hV[1])
        }
        var hX = {};
        for (var hU = hY; hU < hV.length; hU++) {
          C.extend(hX, hV[hU])
        }
        return C.extend(hT, {
          stylers: hX
        })
      });
      return e
    },
    getStyleUrl: function (T, hS, hR, e) {
      this.styleJson = T;
      var i = e3.apiHost + "/custom/v2/mapstyle?version=" + 4 + "&ak=" + hS + "&";
      i += "is_all=true&is_new=1&";
      i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(T, e));
      return i
    },
    styleJson2styleStringV2: function (e, hW) {
      var hX = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        level: "z",
        hue: "h",
        fontsize: "f"
      };
      var hZ = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "labels.text": "l.t",
        "labels.icon": "l.i",
        "geometry.topfill": "g.tf",
        "geometry.sidefill": "g.sf"
      };
      var h0 = [];
      for (var hR = this.map.getMinZoom(); hR <= this.map.getMaxZoom(); hR++) {
        bo.customStyleInfo.zoomFrontStyle[hR] = {}
      }
      bo.customStyleInfo.zoomFrontStyle.main = {};
      var T = false;
      for (var hR = 0; !!e[hR]; hR++) {
        var hY = e[hR];
        if (this.isOnlyZoomStyler(hY)) {
          continue
        }
        hW = this.getFrontZoom(hY, hW);
        if ((hY.featureType === "land" || hY.featureType === "all" || hY.featureType === "background") && typeof hY.elementType === "string" && (hY.elementType === "geometry" || hY.elementType === "geometry.fill" || hY.elementType === "all") && hY.stylers && !T) {
          if (hY.stylers["color"]) {
            bo.customStyleInfo.bmapLandColor = hY.stylers["color"]
          }
          if (hY.stylers["visibility"] && hY.stylers["visibility"] === "off") {
            bo.customStyleInfo.bmapLandColor = "#00000000"
          }
          if (hY.featureType === "land") {
            T = true
          }
        }
        if (hY.featureType === "building" && typeof hY.elementType === "string" && hY.elementType === "geometry.fill") {
          bo.customStyleInfo.buildingFill = true
        }
        if (hY.featureType === "roadarrow" && hY.elementType === "labels.icon" && hY.stylers) {
          bo.customStyleInfo.zoomFrontStyle[hW]["bmapRoadarrowVisibility"] = hY.stylers["visibility"]
        }
        var hS = {};
        C.extend(hS, hY);
        var hU = hS.stylers;
        delete hS.stylers;
        C.extend(hS, hU);
        var hT = [];
        for (var hV in hX) {
          if (hS[hV]) {
            if (this.isEditorZoomKeys(hV)) {
              continue
            }
            if (hV === "elementType") {
              hT.push(hX[hV] + ":" + hZ[hS[hV]])
            } else {
              switch (hS[hV]) {
                case "poilabel":
                  hS[hV] = "poi";
                  break;
                case "districtlabel":
                  hS[hV] = "label";
                  break
              }
              hT.push(hX[hV] + ":" + hS[hV])
            }
          }
        }
        if (hT.length > 2) {
          h0.push(hT.join("|"))
        }
      }
      return h0.join(",")
    },
    getFrontZoom: function (i, e) {
      var T = i.stylers["level"];
      if (T === undefined) {
        return "main"
      } else {
        return parseInt(T, 10)
      }
    },
    isZoomConfig: function (e) {
      var i = e.stylers["level"];
      if (i === undefined) {
        return false
      } else {
        return true
      }
    },
    isOnlyZoomStyler: function (e) {
      var i = {};
      C.extend(i, e.stylers);
      delete i.curZoomRegionId;
      delete i.curZoomRegion;
      delete i.level;
      if (C.isEmptyObject(i)) {
        return true
      } else {
        return false
      }
    },
    isSelectZoom: function (i, e) {
      var T = i.stylers["level"];
      if (T === undefined) {
        return true
      } else {
        if (T === e + "") {
          return true
        } else {
          return false
        }
      }
    },
    isEditorZoomKeys: function (e) {
      var i = {
        curZoomRegionId: true,
        curZoomRegion: true
      };
      if (i[e]) {
        return true
      } else {
        return false
      }
    },
    getZoomRegion: function (e, i) {
      var hR = e.stylers["level"];
      var T = {};
      C.extend(T, i);
      if (hR === undefined) {
        return T
      } else {
        T[parseInt(hR, 10)] = true;
        return T
      }
    },
    onStyleDataBack: function (hR, e, i, T, hT) {
      if (hR.status !== 0) {
        return
      }
      if (hR.data.style.length === 3) {
        if (!bo.customStyleInfo.baseFs) {
          bo.customStyleInfo.baseFs = hR.data.style
        }
        bo.StyleBody = hR.data.style[2]
      } else {
        bo.StyleBody = hR.data.style
      }
      var hS = bo.customStyleInfo.baseFs;
      bo["FeatureStyle" + i] = hS;
      this.updateFrontFeatureStyle()
    },
    updateFrontFeatureStyle: function () {
      if (bo.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"]) {
        for (var e = this.map.getMinZoom(); e <= this.map.getMaxZoom(); e++) {
          if (!bo.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"]) {
            bo.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"] = bo.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"]
          }
        }
      }
    }
  };
  var bJ = {
    map: null,
    labelCache: {},
    calcDrawMc: function (T, i, e) {
      var hR = [];
      switch (i) {
        case "fill":
          hR = this.calcFill(T, e);
          break;
        case "line":
          break;
        case "building3d":
          hR = this.calcBuilding3d(T, e);
          break
      }
      return hR
    },
    calcFill: function (hS, T) {
      var hT = [];
      for (var hR = 0; hR < hS.length; hR = hR + 5) {
        var e = this.coordToMc({
          x: hS[hR],
          y: hS[hR + 1]
        }, T.row, T.col, T.mercatorSize, T.baseTileSize);
        hT.push(e[0], e[1])
      }
      return hT
    },
    calcLine: function (hS, T) {
      var hT = [];
      var hU = new Int16Array(hS.buffer);
      for (var hR = 0; hR < hU.length; hR = hR + 10) {
        var e = this.coordToMc({
          x: hU[hR] / 10,
          y: hU[hR + 1] / 10
        }, T.row, T.col, T.mercatorSize, T.baseTileSize);
        hT.push(e[0], e[1])
      }
      return hT
    },
    calcBuilding3d: function (hT, T) {
      var hU = [];
      var hR = {};
      for (var hS = 0; hS < hT.length / 2; hS = hS + 7) {
        if (hT[hS] === hT[hS - 7] && hT[hS + 1] === hT[hS - 6]) {
          continue
        }
        if (hR[hT[hS].toString() + hT[hS + 1].toString()]) {
          continue
        }
        hR[hT[hS].toString() + hT[hS + 1].toString()] = true;
        var e = this.coordToMc({
          x: hT[hS],
          y: hT[hS + 1]
        }, T.row, T.col, T.mercatorSize, T.baseTileSize);
        hU.push(e[0], e[1])
      }
      return hU
    },
    coordToMc: function (hS, hR, e, i, T) {
      return [hS.x * (i / T) + e * i, hS.y * (i / T) + hR * i]
    },
    addDrawIntoAreaSpots: function (e, hS) {
      if (f.environment !== "customEditor") {
        return
      }
      if (!hS.styleIds) {
        return
      }
      for (var T = 0; T < hS.styleIds.length; T++) {
        var hV = 0;
        if (T > 0) {
          hV = hS.verticesLength[T - 1]
        }
        end = hS.verticesLength[T];
        var hT = [];
        var hR = "";
        if (hS.vertex) {
          hT = hS.vertex;
          hR = "building3d"
        } else {
          if (hS.data[0]) {
            hT = hS.data[0];
            hR = hS.type
          } else {
            continue
          }
        }
        var hU = this.calcDrawMc(hT.slice(hV, end), hR, e);
        this.map.addAreaSpot(hU, {
          userData: {
            styleId: hS.styleIds[T],
            type: "mapstyle"
          }
        })
      }
    },
    addLabelIntoAreaSpots: function (e) {
      if (f.environment !== "customEditor") {
        return
      }
      for (var hS = 0; hS < e.length; hS++) {
        var hT = e[hS];
        for (var hR = 0; hR < hT.fixedLabel.length; hR++) {
          var T = hT.fixedLabel[hR];
          if (!T._mcBds) {
            continue
          }
          var hU = [T._mcBds[0].lng, T._mcBds[0].lat, T._mcBds[0].lng, T._mcBds[1].lat, T._mcBds[1].lng, T._mcBds[1].lat, T._mcBds[1].lng, T._mcBds[0].lat];
          if (!this.labelCache[hU.join()]) {
            this.labelCache[hU.join()] = true;
            this.map.addAreaSpot(hU, {
              userData: {
                styleId: T.styleId,
                type: "mapstyle",
                name: T.name
              }
            })
          }
        }
      }
    }
  };

  function bR(i, e, hR, T) {
    this.cx = 3 * i;
    this.bx = 3 * (hR - i) - this.cx;
    this.ax = 1 - this.cx - this.bx;
    this.cy = 3 * e;
    this.by = 3 * (T - e) - this.cy;
    this.ay = 1 - this.cy - this.by;
    this.p1x = i;
    this.p1y = T;
    this.p2x = hR;
    this.p2y = T
  }
  bR.prototype.sampleCurveX = function (e) {
    return ((this.ax * e + this.bx) * e + this.cx) * e
  };
  bR.prototype.sampleCurveY = function (e) {
    return ((this.ay * e + this.by) * e + this.cy) * e
  };
  bR.prototype.sampleCurveDerivativeX = function (e) {
    return (3 * this.ax * e + 2 * this.bx) * e + this.cx
  };
  bR.prototype.solveCurveX = function (e, hW) {
    if (typeof hW === "undefined") {
      hW = 0.000001
    }
    var hV;
    var hU;
    var hS;
    var T;
    var hR;
    for (hS = e, hR = 0; hR < 8; hR++) {
      T = this.sampleCurveX(hS) - e;
      if (Math.abs(T) < hW) {
        return hS
      }
      var hT = this.sampleCurveDerivativeX(hS);
      if (Math.abs(hT) < 0.000001) {
        break
      }
      hS = hS - T / hT
    }
    hV = 0;
    hU = 1;
    hS = e;
    if (hS < hV) {
      return hV
    }
    if (hS > hU) {
      return hU
    }
    while (hV < hU) {
      T = this.sampleCurveX(hS);
      if (Math.abs(T - e) < hW) {
        return hS
      }
      if (e > T) {
        hV = hS
      } else {
        hU = hS
      }
      hS = (hU - hV) * 0.5 + hV
    }
    return hS
  };
  bR.prototype.solve = function (e, i) {
    return this.sampleCurveY(this.solveCurveX(e, i))
  };
  var cn = {};

  function o(T) {
    var e = {
      duration: 1000,
      fps: 30,
      delay: 0,
      transition: cn.linear,
      dropLastAnimation: false
    };
    if (T) {
      for (var hR in T) {
        e[hR] = T[hR]
      }
    }
    if (T.beginTime) {
      this._beginTime = T.beginTime
    }
    this._callbacks = [];
    this._options = e;
    if (e.delay) {
      var hS = this;
      setTimeout(function () {
        hS._doStart()
      }, e.delay)
    } else {
      this._doStart()
    }
    this._pauseTime = 0
  }
  o.INFINITE = "INFINITE";
  o.prototype._doStart = function () {
    if (this._isPausing) {
      var e = performance.now() || new Date().getTime();
      this._pauseTime += e - this._isPausing;
      this._isPausing = undefined
    }
    if (window.requestAnimationFrame) {
      var i = this;
      i._timer = window.requestAnimationFrame(function (T) {
        i._loop(T)
      })
    } else {
      this._beginTime = new Date().getTime();
      if (this._options.duration === o.INFINITE) {
        this._endTime = null
      } else {
        this._endTime = this._beginTime + this._options.duration
      }
      this._loop()
    }
  };
  o.prototype._loop = function (hR) {
    var hU = this;
    hR = hR || new Date().getTime();
    hR = hR - this._pauseTime;
    if (!this._beginTime) {
      this._beginTime = hR
    }
    if (!this._endTime && typeof this._options.duration === "number") {
      this._endTime = this._beginTime + this._options.duration
    }
    if (hU._endTime !== null && hR >= hU._endTime) {
      if (hU._options.dropLastAnimation === false) {
        hU._options.render(hU._options.transition(1), 1, hR)
      }
      if (typeof hU._options.finish === "function") {
        hU._options.finish(hR, this)
      }
      for (var hT = 0, e = hU._callbacks.length; hT < e; hT++) {
        hU._callbacks[hT]()
      }
      return
    }
    var hS;
    if (typeof hU._options.duration === "number") {
      hS = (hR - hU._beginTime) / hU._options.duration;
      hU.schedule = hU._options.transition(hS)
    } else {
      hS = hR - hU._beginTime;
      hU.schedule = 0
    }
    hU._options.render(hU.schedule, hS, hR);
    if (!hU.terminative) {
      if (window.requestAnimationFrame) {
        hU._timer = requestAnimationFrame(function T(i) {
          hU._loop(i)
        })
      } else {
        hU._timer = setTimeout(function () {
          hU._loop()
        }, 1000 / hU._options.fps)
      }
    }
  };
  o.prototype.stop = function (i, e) {
    this.terminative = true;
    if (this._timer) {
      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(this._timer)
      } else {
        clearTimeout(this._timer)
      }
      this._timer = null;
      if (typeof this._options.onStop === "function") {
        this._options.onStop(e)
      }
    }
    if (i) {
      this._endTime = this._beginTime;
      this._loop()
    }
  };
  o.prototype.pause = function () {
    if (!this._isPausing) {
      this.stop();
      this.terminative = undefined;
      this._isPausing = performance.now() || new Date().getTime()
    }
  };
  o.prototype.cancel = function () {
    this.stop()
  };
  o.prototype.append = function (e) {
    this._callbacks.push(e);
    return this
  };
  cn = {
    _p1: 1,
    _p2: 1 * 1.525,
    linear: function (e) {
      return e
    },
    reverse: function (e) {
      return 1 - e
    },
    easeInQuad: function (e) {
      return e * e
    },
    easeInCubic: function (e) {
      return Math.pow(e, 3)
    },
    easeInBiquad: function (e) {
      return Math.pow(e, 4)
    },
    easeInBack: function (e) {
      return e * e * ((cn._p1 + 1) * e - cn._p1)
    },
    easeOutQuad: function (e) {
      return -(e * (e - 2))
    },
    easeOutCubic: function (e) {
      return Math.pow((e - 1), 3) + 1
    },
    easeOutBiquad: function (e) {
      return 1 - Math.pow((e - 1), 4)
    },
    easeOutBack: function (e) {
      return ((e = e - 1) * e * ((cn._p1 + 1) * e + cn._p1) + 1)
    },
    easeInOutQuad: function (e) {
      if (e < 0.5) {
        return e * e * 2
      } else {
        return -2 * (e - 2) * e - 1
      }
    },
    easeInOutCubic: function (e) {
      if (e < 0.5) {
        return Math.pow(e, 3) * 4
      } else {
        return Math.pow(e - 1, 3) * 4 + 1
      }
    },
    easeInOutBiquad: function (e) {
      if (e < 0.5) {
        return Math.pow(e, 4) * 8
      } else {
        return 1 - (Math.pow(e - 1, 4) * 8)
      }
    },
    easeInOutSine: function (e) {
      return (1 - Math.cos(Math.PI * e)) / 2
    }
  };
  cn.ease = (function () {
    var e = new bR(0.4, 0, 0.6, 1);
    return function (i) {
      return e.solve(i)
    }
  })();
  cn["ease-in"] = cn.easeInQuad;
  cn["ease-out"] = cn.easeOutQuad;
  var fk = {
    start: function (hX) {
      var hR = hX.el;
      var e = hX.style;
      var i = hX.startValue;
      var hU = hX.endValue;
      var hS = hX.duration || 1400;
      var hT = hX.transition || cn.linear;
      var hW = hX.callback;
      var hV = hU - i;
      var T = hX.unit || "";
      return new o({
        fps: 60,
        duration: hS,
        transition: hT,
        render: function (hY) {
          hR.style[e] = i + hV * hY + T
        },
        finish: function () {
          hW && hW()
        }
      })
    }
  };

  function cM(hS, T) {
    ed.call(this);
    this.keyframes = hS;
    var e = {
      duration: 1000,
      delay: 0,
      transition: cn.linear,
      interation: 1
    };
    if (T) {
      for (var hR in T) {
        e[hR] = T[hR]
      }
    }
    this._options = e
  }
  cM.inherits(ed, "ViewAnimation");
  cM.prototype._start = function (hT) {
    var T = this;
    T.map = hT;
    var hS = new bb("onanimationstart");
    T.dispatchEvent(hS);
    this._initStatus(T.map);
    var hR = this._options.duration;
    var i = this._options.interation;
    var hU = this._options.transition;
    var hV = 0;
    T.poiStatus = T.map._displayOptions.poi;
    if (T.poiStatus) {
      T.map.setDisplayOptions({
        poi: false
      })
    }
    T.map.viewAnimationTime = new Date().getTime();
    this.animation = new o({
      duration: hR,
      transition: hU,
      start: function (e) {},
      render: function (hW, e) {
        if (hW === 0) {
          T._initStatus(T.map)
        } else {
          T._setViewByRate(hW)
        }
      },
      finish: function (hX, hW) {
        if (++hV < i || i === "INFINITE") {
          var hY = new bb("onanimationiterations");
          T.dispatchEvent(hY);
          delete hW._beginTime;
          delete hW._endTime;
          hW._doStart()
        } else {
          var hY = new bb("onanimationend");
          T.dispatchEvent(hY);
          delete T.map.viewAnimationTime;
          T.map.setDisplayOptions({
            poi: T.poiStatus
          })
        }
      }
    })
  };
  cM.prototype._getTotalDuration = function (e, i) {
    if (e === o.INFINITE) {
      return o.INFINITE
    } else {
      return e * i
    }
  };
  cM.prototype._initStatus = function (e) {
    if (this.keyframes[0]) {
      e.setCenter(this.keyframes[0].center, {
        noAnimation: true
      });
      e.setZoom(this.keyframes[0].zoom, {
        noAnimation: true
      });
      e.setTilt(this.keyframes[0].tilt, {
        noAnimation: true
      });
      e.setHeading(this.keyframes[0].heading, {
        noAnimation: true
      })
    }
  };
  cM.prototype._setViewByRate = function (hR) {
    for (var e = 0; e < this.keyframes.length - 1; e++) {
      var hS = this.keyframes[e];
      var T = this.keyframes[e + 1];
      if (hR >= hS.percentage && hR < T.percentage) {
        this.map.setHeading(this._getHeadingDelta(hS, T, hR), {
          noAnimation: true
        });
        this.map.setTilt(this._getTiltDelta(hS, T, hR), {
          noAnimation: true
        });
        this.map.setCenter(this._getCenterDelta(hS, T, hR), {
          noAnimation: true
        });
        this.map.setZoom(this._getZoomDelta(hS, T, hR), {
          noAnimation: true
        })
      }
    }
  };
  cM.prototype._getHeadingDelta = function (T, i, e) {
    var hS = (e - T.percentage) / (i.percentage - T.percentage);
    var hR = T.heading + (i.heading - T.heading) * hS;
    return hR
  };
  cM.prototype._getTiltDelta = function (T, i, e) {
    var hS = (e - T.percentage) / (i.percentage - T.percentage);
    var hR = T.tilt + (i.tilt - T.tilt) * hS;
    return hR
  };
  cM.prototype._getCenterDelta = function (T, i, e) {
    var hS = (e - T.percentage) / (i.percentage - T.percentage);
    var hR = T.center.add(i.center.sub(T.center).mult(hS));
    return hR
  };
  cM.prototype._getZoomDelta = function (hR, T, i) {
    var hS = (i - hR.percentage) / (T.percentage - hR.percentage);
    var e = hR.zoom + (T.zoom - hR.zoom) * hS;
    return e
  };
  cM.prototype._pause = function (e) {
    this.animation.pause()
  };
  cM.prototype._continue = function (e) {
    this.animation._doStart()
  };
  cM.prototype._cancel = function (T) {
    T.setDisplayOptions({
      poi: this.poiStatus
    });
    this.animation.cancel();
    delete T.viewAnimationTime;
    var i = new bb("onanimationcancel");
    this.dispatchEvent(i)
  };
  var eu = undefined;
  var c0 = {
    is64Bit: function () {
      if (/Windows/.test(navigator.userAgent)) {
        if (/Win64; x64/.test(navigator.userAgent)) {
          return true
        } else {
          if (/WOW64/.test(navigator.userAgent)) {
            return true
          } else {
            return false
          }
        }
      }
      return true
    },
    isIOS112: function cQ(e) {
      return /11_2/.test(navigator.userAgent)
    },
    canUseWebAssembly: function (i) {
      if (eu !== undefined) {
        i && i(eu);
        return
      }
      if (window.WebAssembly && this.is64Bit()) {
        if (window.disableWebAssembly === true) {
          eu = false;
          i && i(eu)
        } else {
          if (!bv()) {
            eu = true;
            i && i(eu)
          } else {
            if (this.isIOS112()) {
              eu = false;
              i && i(eu)
            } else {
              var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11]);
              WebAssembly.instantiate(e).then(function (T) {
                eu = true;
                i && i(eu)
              }, function (T) {
                eu = false;
                i && i(eu)
              })
            }
          }
        }
      } else {
        eu = false;
        i && i(eu)
      }
    }
  };
  var dw = {};
  bo.Utils = dw;

  function dd(e) {
    return e.style
  }

  function dm(i) {
    if (C.Browser.ie > 0) {
      i.unselectable = "on";
      i.selectstart = function () {
        return false
      };
      i.onmousedown = function (T) {
        T.preventDefault();
        return false
      }
    } else {
      var e = dd(i);
      e.MozUserSelect = "none";
      e.WebkitUserSelect = "none";
      i.addEventListener("mousedown", function (T) {
        T.preventDefault()
      }, false)
    }
  }

  function hd(e) {
    return e && e.parentNode && e.parentNode.nodeType !== 11
  }

  function dI(i, e) {
    i.insertAdjacentHTML("beforeEnd", e);
    return i.lastChild
  }

  function hB(T, i) {
    var hR = document.createElement("div");
    hR.innerHTML = i;
    var e = hR.childNodes[0];
    return T.parentNode.insertBefore(e, T)
  }

  function h(i) {
    i = i || window.event;
    i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
  }

  function bU(i) {
    i = i || window.event;
    i.preventDefault ? i.preventDefault() : i.returnValue = false;
    return false
  }

  function db(i) {
    h(i);
    return bU(i)
  }

  function fJ() {
    var e = document.documentElement;
    var i = document.body;
    if (e && (e.scrollTop || e.scrollLeft)) {
      return [e.scrollTop, e.scrollLeft]
    } else {
      if (i) {
        return [i.scrollTop, i.scrollLeft]
      } else {
        return [0, 0]
      }
    }
  }

  function fq(hS) {
    if (!hS) {
      return
    }
    hS.onload = hS.onerror = null;
    var T = hS.attributes,
      hR, e, hT;
    if (T) {
      e = T.length;
      for (hR = 0; hR < e; hR += 1) {
        hT = T[hR].name;
        if (typeof hS[hT] === "function") {
          hS[hT] = null
        }
      }
    }
    T = hS.children;
    if (T) {
      e = T.length;
      for (hR = 0; hR < e; hR += 1) {
        fq(hS.children[hR])
      }
    }
  }

  function bG(i, hU, hT) {
    var hS = hU.lng - hT.lng;
    var hR = hU.lat - hT.lat;
    if (hS === 0) {
      return Math.abs(i.lng - hU.lng)
    }
    if (hR === 0) {
      return Math.abs(i.lat - hU.lat)
    }
    var T = hR / hS;
    var e = hU.lat - T * hU.lng;
    return Math.abs(T * i.lng - i.lat + e) / Math.sqrt(T * T + 1)
  }

  function gW(i, e) {
    if (!i || !e) {
      return
    }
    return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
  }

  function bP(i, e) {
    if (!i || !e) {
      return 0
    }
    return Math.round(Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2)))
  }

  function c1(T, i) {
    var e = Math.round((T.x + i.x) / 2);
    var hR = Math.round((T.y + i.y) / 2);
    return new ej(e, hR)
  }

  function hj(e, T) {
    var i = [];
    T = T || function (hS) {
      return hS
    };
    for (var hR in e) {
      i.push(hR + "=" + T(e[hR]))
    }
    return i.join("&")
  }

  function S(T, i, hT) {
    var hU = document.createElement(T);
    if (hT) {
      hU = document.createElementNS(hT, T)
    }
    i = i || {};
    for (var hR in i) {
      var hS = {
        "for": "htmlFor",
        "class": "cssClass"
      } [hR] || hR;
      if (hR === "style") {
        hU.style.cssText = i[hR];
        continue
      }
      if (hR === "class") {
        C.ac(hU, i[hR]);
        continue
      }
      if (hU.setAttribute) {
        hU.setAttribute(hS, i[hR])
      } else {
        try {
          hU[hS] = i[hR]
        } catch (hU) {}
      }
    }
    return hU
  }

  function fY(e) {
    if (e.currentStyle) {
      return e.currentStyle
    } else {
      if (e.ownerDocument && e.ownerDocument.defaultView) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
      }
    }
  }

  function bV(e) {
    return typeof e === "function"
  }
  var ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function g1(hS) {
    var T = "";
    var hZ;
    var hX;
    var hV = "";
    var hY;
    var hW;
    var hU;
    var hT = "";
    var hR = 0;
    var e = /[^A-Za-z0-9+/=]/g;
    if (!hS || e.exec(hS)) {
      return hS
    }
    hS = hS.replace(/[^A-Za-z0-9+/=]/g, "");
    do {
      hY = ho.indexOf(hS.charAt(hR++));
      hW = ho.indexOf(hS.charAt(hR++));
      hU = ho.indexOf(hS.charAt(hR++));
      hT = ho.indexOf(hS.charAt(hR++));
      hZ = (hY << 2) | (hW >> 4);
      hX = ((hW & 15) << 4) | (hU >> 2);
      hV = ((hU & 3) << 6) | hT;
      T = T + String.fromCharCode(hZ);
      if (hU !== 64) {
        T = T + String.fromCharCode(hX)
      }
      if (hT !== 64) {
        T = T + String.fromCharCode(hV)
      }
      hZ = hX = hV = "";
      hY = hW = hU = hT = ""
    } while (hR < hS.length);
    return T
  }(function (e) {
    if (!e.Utils) {
      e.Utils = {}
    }
    var i = e.Utils;
    i.format = (function () {
      function T(hU, hT, hV) {
        var hS = hV[+hT];
        return typeof (hS) === "function" ? hS(hT) : hS
      }

      function hR(hU, hT, hV) {
        var hX = hT;
        var hY = [];
        var hS = hT.split(":");
        if (hS.length === 2) {
          hX = hS[0];
          hY.push(hS[1])
        }
        var hW = typeof (hV[hX]);
        if (hW === "function") {
          return hV[hX].apply(undefined, hY)
        } else {
          if (hW === "undefined") {
            return hU
          } else {
            return String(hV[hX])
          }
        }
      }
      return function (hS, hT) {
        var hV = hT.splice ? T : hR;
        var hU = hS.splice ? hS.join("") : hS;
        return hU.replace(/{([a-zA-Z0-9_$:.]+)}/g, function (hX, hW) {
          return hV(hX, hW, hT)
        })
      }
    })();
    i.ErrorMonitor = function (hR, T, hS) {};
    c0.canUseWebAssembly(function (T) {
      i.canUseWebAssembly = T
    })
  })(bo);

  function f5() {
    return (bv() || eB())
  }

  function bv() {
    var e = navigator.userAgent;
    if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) {
      return true
    }
    return false
  }

  function eB() {
    var e = navigator.userAgent;
    if (e.indexOf("Android") > -1) {
      return true
    }
    return false
  }

  function dK(e) {
    return e * Math.PI / 180
  }

  function de(e) {
    return e / Math.PI * 180
  }

  function dO(e, hS) {
    var hR = Math.pow(10, hS);
    if (typeof e === "number") {
      return Math.round(e * hR) / hR
    }
    for (var T = 0; T < e.length; T++) {
      e[T] = dO(e[T], hS)
    }
    return e
  }

  function fF(T, i, e) {
    if (T < i) {
      T = i
    } else {
      if (T > e) {
        T = e
      }
    }
    return T
  }

  function fZ(e, i) {
    while (e < 0) {
      e += i
    }
    return e % i
  }

  function d8(i, e) {
    return (i >= 0 && e >= 0) || (i < 0 && e < 0)
  }

  function a5(i) {
    if (i._gl) {
      return i._gl
    }
    var e = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: false,
      stencil: false
    };
    var T = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
    i._gl = T;
    return T
  }

  function eK(hR, T) {
    for (var e = 0; e < T.length; e++) {
      C.on(hR, T[e], h)
    }
  }

  function hQ(i, T, e) {
    T[e] = i.getUniformLocation(T, e)
  }

  function e1(hS, hT, e, T, i) {
    var hR = "";
    switch (i) {
      case "mat4":
        hS.uniformMatrix4fv(hT[e], false, T);
        return;
      case "v3":
        hR = "uniform3fv";
        break;
      case "f":
        hR = "uniform1f";
        break;
      case "i":
        hR = "uniform1i";
        break
    }
    if (hR === "") {
      throw "error"
    }
    hS[hR](hT[e], T)
  }

  function K(hZ, e) {
    while (hZ < 0) {
      hZ += 360
    }
    hZ = hZ % 360;
    var hR = e.width;
    var hY = e.height;
    var hU = hR;
    var T = hY;
    if (hZ < 90) {
      var i = Math.sin(dK(hZ)) * hR;
      var hW = Math.sin(dK(hZ)) * hY;
      var hX = Math.cos(dK(hZ)) * hR;
      var hT = Math.cos(dK(hZ)) * hY;
      var hU = Math.ceil(hX + hW);
      var T = Math.ceil(i + hT)
    } else {
      if (hZ < 180) {
        var hZ = hZ - 90;
        var i = Math.sin(dK(hZ)) * hR;
        var hW = Math.sin(dK(hZ)) * hY;
        var hX = Math.cos(dK(hZ)) * hR;
        var hT = Math.cos(dK(hZ)) * hY;
        var hU = Math.ceil(i + hT);
        var T = Math.ceil(hX + hW)
      } else {
        if (hZ < 270) {
          var hZ = hZ - 180;
          var i = Math.sin(dK(hZ)) * hR;
          var hW = Math.sin(dK(hZ)) * hY;
          var hX = Math.cos(dK(hZ)) * hR;
          var hT = Math.cos(dK(hZ)) * hY;
          var hU = Math.ceil(hX + hW);
          var T = Math.ceil(i + hT)
        } else {
          var hZ = hZ - 270;
          var i = Math.sin(dK(hZ)) * hR;
          var hW = Math.sin(dK(hZ)) * hY;
          var hX = Math.cos(dK(hZ)) * hR;
          var hT = Math.cos(dK(hZ)) * hY;
          var hU = Math.ceil(i + hT);
          var T = Math.ceil(hX + hW)
        }
      }
    }
    var hV = hU - hR;
    var hS = T - hY;
    return [0 - hV / 2, 0 - hS / 2, hR + hV / 2, hY + hS / 2]
  }

  function gF(e) {
    if (e.toDataURL() === gF._blankData) {
      return true
    }
    return false
  }

  function gv(hS, hR, T) {
    var i = [T.lng - hS.lng, T.lat - hS.lat];
    var e = [hR.lng - hS.lng, hR.lat - hS.lat];
    return i[0] * e[1] - i[1] * e[0]
  }

  function ch(hT, hS, T) {
    var e;
    var hU;
    var hR;
    var i;
    if (hT.lng < hS.lng) {
      e = hT.lng;
      hR = hS.lng
    } else {
      e = hS.lng;
      hR = hT.lng
    }
    if (hT.lat < hS.lat) {
      hU = hT.lat;
      i = hS.lat
    } else {
      hU = hS.lat;
      i = hT.lat
    }
    if (T.lng < e || T.lng > hR || T.lat < hU || T.lat > i) {
      return false
    }
    return true
  }

  function gx(hV, hU, hT, hR) {
    var hS = gv(hT, hR, hV);
    var T = gv(hT, hR, hU);
    var i = gv(hV, hU, hT);
    var e = gv(hV, hU, hR);
    if (hS * T < 0 && i * e < 0) {
      return true
    } else {
      if (hS === 0 && ch(hT, hR, hV)) {
        return true
      } else {
        if (T === 0 && ch(hT, hR, hU)) {
          return true
        } else {
          if (i === 0 && ch(hV, hU, hT)) {
            return true
          } else {
            if (e === 0 && ch(hV, hU, hR)) {
              return true
            } else {
              return false
            }
          }
        }
      }
    }
  }

  function hz(T, i) {
    var e = i.parentNode;
    if (e.lastChild === i) {
      e.appendChild(T)
    } else {
      e.insertBefore(T, i.nextSibling)
    }
  }

  function hF(hX, hY) {
    if (hY === 0) {
      return hX
    }
    var hW = 0;
    var hU = 0;
    if (!hX) {
      throw "异常"
    }
    if (hX.length === 0) {
      return []
    }
    for (var hS = 1, T = hX.length - 1; hS < T; hS++) {
      var hV = bG(hX[hS], hX[0], hX[hX.length - 1]);
      if (hV > hW) {
        hU = hS;
        hW = hV
      }
    }
    var e = [];
    if (hW >= hY) {
      var h0 = hX.slice(0, hU);
      var hZ = hX.slice(hU, hX.length);
      var hT = hF(h0, hY);
      var hR = hF(hZ, hY);
      for (var hS = 0, T = hT.length; hS < T; hS++) {
        e.push(hT[hS])
      }
      for (var hS = 0, T = hR.length; hS < T; hS++) {
        e.push(hR[hS])
      }
    } else {
      e.push(hX[0]);
      e.push(hX[hX.length - 1])
    }
    return e
  }

  function eC(e) {
    if (Math.log2) {
      return Math.log2(e)
    }
    return Math.log(e) / Math.LN2
  }

  function br(T, i, e) {
    return Math.min(e, Math.max(i, T))
  }

  function cJ(e, i) {
    if (!i) {
      return e
    }
    var hT = i[0];
    var hS = i[1];
    var hR = i[2];
    var T = i[3];
    var hV = [];
    var hU = [];
    hV[0] = T * e[0] + hR * e[2];
    hV[1] = e[1];
    hV[2] = -hR * e[0] + T * e[2];
    hU[0] = hV[0];
    hU[1] = hS * hV[1] - hT * hV[2];
    hU[2] = hT * hV[1] + hS * hV[2];
    return hU
  }
  var aQ = Math.PI / 180;
  var E = 180 / Math.PI;

  function bz(T) {
    var i = (T - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
    var e = (d3.utcDay.floor(T) - T) / 86400000 * 360 - 180;
    return [e - U(i) * E, gC(i) * E]
  }

  function U(hR) {
    var hS = f7(hR);
    var i = dL(hR);
    var T = aj(hR);
    var hT = Math.tan(f2(hR) / 2);
    hT *= hT;
    return hT * Math.sin(2 * T) - 2 * hS * Math.sin(i) + 4 * hS * hT * Math.sin(i) * Math.cos(2 * T) - 0.5 * hT * hT * Math.sin(4 * T) - 1.25 * hS * hS * Math.sin(2 * i)
  }

  function gC(e) {
    return Math.asin(Math.sin(f2(e)) * Math.sin(gZ(e)))
  }

  function gZ(e) {
    return bh(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * aQ)) * aQ
  }

  function bh(e) {
    return aj(e) + dR(e)
  }

  function dL(e) {
    return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * aQ
  }

  function aj(i) {
    var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
    return (e < 0 ? e + 360 : e) / 180 * Math.PI
  }

  function dR(i) {
    var e = dL(i);
    return (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) + Math.sin(e + e) * (0.019993 - 0.000101 * i) + Math.sin(e + e + e) * 0.000289) * aQ
  }

  function f2(e) {
    return fc(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * aQ) * aQ
  }

  function fc(e) {
    return (23 + (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) / 60) * aQ
  }

  function f7(e) {
    return 0.016708634 - e * (0.000042037 + 1.267e-7 * e)
  }

  function a6() {
    return window.devicePixelRatio || 1
  }

  function aF(T) {
    var i;
    var e;
    var hR;
    if (T >= 0) {
      hR = Math.floor(T / 65536) * 65536;
      i = hR;
      e = T - hR
    } else {
      hR = Math.floor(-T / 65536) * 65536;
      i = -hR;
      e = T + hR
    }
    return [i, e]
  }

  function G(e) {
    if (e.lng >= 0 && e.lat >= 0) {
      return new hs(e.lng - 10000000, e.lat - 6000000)
    }
    if (e.lng >= 0 && e.lat < 0) {
      return new hs(e.lng - 10000000, e.lat + 6000000)
    }
    if (e.lng < 0 && e.lat >= 0) {
      return new hs(e.lng + 10000000, e.lat - 6000000)
    }
    if (e.lng < 0 && e.lat < 0) {
      return new hs(e.lng + 10000000, e.lat + 6000000)
    }
  }
  var fB = null;
  if (window.performance && window.performance.now) {
    fB = function () {
      return performance.now()
    }
  } else {
    if (Date.now) {
      fB = function () {
        return Date.now()
      }
    } else {
      fB = function () {
        return (new Date).getTime()
      }
    }
  }

  function bL(hR, e, i) {
    var T = "mouseWheel";
    if (C.Platform.macintosh) {
      if (!isNaN(hR) && (hR < 10 || hR !== 120) && (e % 1 === 0 && e < 5)) {
        T = "padScroll"
      }
      if (C.Browser.firefox && (e % 1 === 0 && e < 5 && i === 0)) {
        T = "padScroll"
      }
    }
    if (C.Browser.safari && hR === 12) {
      T = "mouseWheel"
    }
    return T
  }

  function dg(h0, hV) {
    var hZ = h0[0];
    var hY = h0[1];
    var hR = false;
    for (var hU = 0, hT = hV.length - 2; hU < hV.length; hU += 2) {
      var hX = hV[hU];
      var hS = hV[hU + 1];
      var hW = hV[hT];
      var T = hV[hT + 1];
      var e = ((hS > hY) !== (T > hY)) && (hZ < (hW - hX) * (hY - hS) / (T - hS) + hX);
      if (e) {
        hR = !hR
      }
      hT = hU
    }
    return hR
  }

  function cE(T, e, i, hR) {
    hR = hR || 0.4;
    if (T > i) {
      T = Math.pow(T - i + 1, hR) + i - 1
    } else {
      if (T < e) {
        T = e - Math.pow(e - T + 1, hR) + 1
      }
    }
    return T
  }

  function gl(hV) {
    var hT = "";
    for (var T = 0; T < hV.length; T++) {
      var hW = hV.charCodeAt(T) << 1;
      var e = hW.toString(2);
      var hS = e.length;
      var hZ = e;
      if (hS < 8) {
        hZ = "00000000" + e;
        hZ = hZ.substr(e.length, 8)
      }
      hT += hZ
    }
    var hX = 5 - hT.length % 5;
    var hR = [];
    for (var T = 0; T < hX; T++) {
      hR[T] = "0"
    }
    hT = hR.join("") + hT;
    var hY = [];
    for (var T = 0; T < hT.length / 5; T++) {
      var hW = hT.substr(T * 5, 5);
      var hU = parseInt(hW, 2) + 50;
      hY.push(String.fromCharCode(hU))
    }
    return hY.join("") + hX.toString()
  }

  function aD(T, i) {
    var e = bo.TILE_VERSION || window.TILE_VERSION;
    if (!e || !e[T] || !e[T][i] || !e[T][i].version || !e[T][i].updateDate) {
      e = e3.tvc
    }
    return {
      ver: e[T][i].version,
      udt: e[T][i].updateDate
    }
  }

  function fz() {
    var e = bo.MSV || window.MSV;
    if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
      e = e3.msv
    }
    return {
      ver: e.mapstyle.version,
      udt: e.mapstyle.updateDate
    }
  }

  function er(e, hS) {
    var hR = e.slice(0);
    for (var T = 0; T < hR.length; T++) {
      hR[T] += hS
    }
    return hR
  }
  var a4 = null;

  function by(e) {
    if (a4) {
      return
    }
    e.fire(new bb("onloadtile"));
    a4 = setTimeout(function () {
      a4 = null
    }, 1000)
  }

  function e0() {
    if (cr("//map.baidu.com") || cr("//maps.baidu.com") || cr("//ditu.baidu.com")) {
      return true
    }
    return false
  }
  dw.inMapHost = e0();
  if (typeof window._inMapHost === "boolean") {
    dw.inMapHost = window._inMapHost
  }

  function cr(i) {
    var T = window.location;
    var e = document.createElement("a");
    e.href = i;
    return e.hostname === T.hostname && e.port === T.port && e.protocol === T.protocol
  }

  function ea() {}
  C.extend(ea, {
    Request: {
      INITIAL: -1,
      WAITING: 0,
      LOADED: 1,
      COMPLETED: 2
    },
    Dependency: {
      poly: ["marker"],
      hotspot: ["poly"],
      infowindow: ["marker", "hotspot"],
      simpleInfowindow: ["marker"],
      tools: ["marker", "poly"],
      mapgl: ["glcommon", "poly"],
      earth: ["glcommon"],
      control: ["scommon"],
      scommon: [],
      localSearch: ["scommon"],
      otherSearch: ["scommon"],
      route: ["scommon"],
      buslineSearch: ["route"],
      autocomplete: ["scommon"]
    },
    MD5Mapping: {
      control: "zcqb51",
      marker: "qtxdnt",
      poly: "2yxwby",
      infowindow: "ynbhpz",
      simpleInfowindow: "4ymfj1",
      hotspot: "ospxri",
      menu: "cl0am3",
      tools: "fu2cq4",
      oppc: "zdyfos",
      oppcgl: "52eaok",
      mapgl: "f3yhch",
      markeranimation: "zzkoer",
      earth: "u2fzq4",
      glcommon: "olnscx",
      localSearch: "4y5rgt",
      scommon: "m12rh0",
      otherSearch: "vjh3bs",
      route: "e04uf0",
      buslineSearch: "gt321z",
      autocomplete: "gqwulx"
    },
    Config: {
      // baseUrl: e3.apiHost + "/getmodules?v=1.0&type=webgl",
      baseUrl: bmapcfg.home + "/modules/", // 换成这个
      jsModPath: (dw.inMapHost ? "" : e3.mapHost) + "/res/newui/",
      timeout: 5000
    },
    delayFlag: false,
    Module: {
      modules: {},
      modulesNeedToLoad: []
    },
    _getMd5ModsStr: function (hT) {
      var hS = [];
      for (var hV = 0, T = hT.length; hV < T; hV++) {
        var hU = hT[hV];
        var e = this.MD5Mapping[hU];
        var hR = "$" + hU + "$";
        if (e !== hR) {
          hS.push(hU + "_" + e)
        }
      }
      return hS
    },
    load: function (i, hT, hR) {
      var e = this.getModuleInfo(i);
      if (e.status === this.Request.COMPLETED) {
        if (hR === true) {
          hT()
        }
      } else {
        if (e.status === this.Request.INITIAL) {
          this.combine(i);
          this.addToLoadQueue(i);
          var T = this;
          if (T.delayFlag === false) {
            T.delayFlag = true;
            setTimeout(function () {
              var hS = T._getMd5ModsStr(T.Module.modulesNeedToLoad)
              for (var hV = 0, T_index = hS.length; hV < T_index; hV++) {
                var hU = T.Config.baseUrl + hS[hV] + ".js";
                hm.load(hU);
              }
              T.Module.modulesNeedToLoad.length = 0;
              T.delayFlag = false
            }, 1)
          }
          e.status = this.Request.WAITING;

          function hS(hW) {
            var hV = T.getModuleInfo(i);
            if (hV.status !== T.Request.COMPLETED) {
              if (window.map) {
                var hU = new bb("onmod_timeout");
                hU.timeout = hW / 1000;
                hU.moduleName = i;
                window.map.fire(hU)
              }
            }
          }
          setTimeout(hS, this.Config.timeout, this.Config.timeout);
          setTimeout(hS, this.Config.timeout * 2, this.Config.timeout * 2)
        }
        if (hT) {
          e.callbacks.push(hT)
        }
      }
    },
    combine: function (e) {
      if (e && this.Dependency[e]) {
        var hR = this.Dependency[e];
        for (var T = 0; T < hR.length; T++) {
          this.combine(hR[T]);
          if (!this.Module.modules[hR[T]]) {
            this.addToLoadQueue(hR[T])
          }
        }
      }
    },
    addToLoadQueue: function (e) {
      var i = this.getModuleInfo(e);
      if (i.status === this.Request.INITIAL) {
        i.status = this.Request.WAITING;
        this.Module.modulesNeedToLoad.push(e)
      }
    },
    run: function (T, hR) {
      var hV = this.getModuleInfo(T);
      var hY = this.Dependency[T];
      if (hY) {
        for (var hT = 0; hT < hY.length; hT++) {
          var hU = this.getModuleInfo(hY[hT]);
          if (hU.status !== this.Request.COMPLETED) {
            hU.modsNeedToRun.push({
              name: T,
              code: hR
            });
            return
          }
        }
      }
      try {
        eval(hR)
      } catch (hW) {
        return
      }
      hV.status = this.Request.COMPLETED;
      for (var hT = 0, hS = hV.callbacks.length; hT < hS; hT++) {
        hV.callbacks[hT]()
      }
      hV.callbacks.length = 0;
      for (hT = 0; hT < hV.modsNeedToRun.length; hT++) {
        var hX = hV.modsNeedToRun[hT];
        this.run(hX.name, hX.code)
      }
      hV.modsNeedToRun.length = 0
    },
    getModuleInfo: function (i) {
      var e;
      if (!this.Module.modules[i]) {
        this.Module.modules[i] = {
          status: this.Request.INITIAL,
          callbacks: [],
          modsNeedToRun: []
        }
      }
      e = this.Module.modules[i];
      return e
    }
  });
  window._jsload = function (hS, hT) {
    var i = ea.getModuleInfo(hS);
    i.status = ea.Request.LOADED;
    if (hT !== "") {
      ea.run(hS, hT)
    } else {
      if (window.map) {
        var e = new bb("ongetmodules_fail");
        e.moduleName = hS;
        window.map.fire(e)
      }
      var T = document.createElement("script");
      var hR = ea.MD5Mapping[hS];
      T.src = ea.Config.jsModPath + hS + "_" + hR + ".js";
      document.getElementsByTagName("head")[0].appendChild(T)
    }
  };

  function ac() {
    this._timeData = {}
  }
  var e9;
  if (typeof window !== "undefined") {
    e9 = window
  } else {
    e9 = self
  }
  ac.prototype.mark = function (e) {
    this._timeData[e] = this._getTime()
  };
  ac.prototype.getMark = function (e) {
    return this._timeData[e]
  };
  ac.prototype.getTime = function (i, e) {
    return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2))
  };
  ac.prototype.print = function () {};
  ac.prototype.clear = function () {
    this._timeData = {}
  };
  if (e9.performance && e9.performance.now) {
    ac.prototype._getTime = function () {
      return performance.now()
    }
  } else {
    ac.prototype._getTime = function () {
      return Date.now()
    }
  }! function (i, T) {
    T(i.d3 = i.d3 || {})
  }(window, function (iy) {
    function iQ(iW, iX, T, it) {
      function e(i) {
        return iW(i = new Date(+i)), i
      }
      return e.floor = e, e.ceil = function (i) {
        return iW(i = new Date(i - 1)), iX(i, 1), iW(i), i
      }, e.round = function (i) {
        var iY = e(i),
          iZ = e.ceil(i);
        return iZ - i > i - iY ? iY : iZ
      }, e.offset = function (i, iY) {
        return iX(i = new Date(+i), null == iY ? 1 : Math.floor(iY)), i
      }, e.range = function (iZ, i, iY) {
        var i0 = [];
        if (iZ = e.ceil(iZ), iY = null == iY ? 1 : Math.floor(iY), !(i > iZ && iY > 0)) {
          return i0
        }
        do {
          i0.push(new Date(+iZ))
        } while (iX(iZ, iY), iW(iZ), i > iZ);
        return i0
      }, e.filter = function (i) {
        return iQ(function (iY) {
          for (; iW(iY), !i(iY);) {
            iY.setTime(iY - 1)
          }
        }, function (iY, iZ) {
          for (; --iZ >= 0;) {
            for (; iX(iY, 1), !i(iY);) {}
          }
        })
      }, T && (e.count = function (i, iY) {
        return iA.setTime(+i), iE.setTime(+iY), iW(iA), iW(iE), Math.floor(T(iA, iE))
      }, e.every = function (i) {
        return i = Math.floor(i), isFinite(i) && i > 0 ? i > 1 ? e.filter(it ? function (iY) {
          return it(iY) % i === 0
        } : function (iY) {
          return e.count(0, iY) % i === 0
        }) : e : null
      }), e
    }

    function iF(e) {
      return iQ(function (i) {
        i.setDate(i.getDate() - (i.getDay() + 7 - e) % 7), i.setHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setDate(i.getDate() + 7 * T)
      }, function (i, T) {
        return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iz) / iN
      })
    }

    function ix(e) {
      return iQ(function (i) {
        i.setUTCDate(i.getUTCDate() - (i.getUTCDay() + 7 - e) % 7), i.setUTCHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setUTCDate(i.getUTCDate() + 7 * T)
      }, function (i, T) {
        return (T - i) / iN
      })
    }
    var iA = new Date,
      iE = new Date,
      iL = iQ(function () {}, function (i, T) {
        i.setTime(+i + T)
      }, function (i, T) {
        return T - i
      });
    iL.every = function (e) {
      return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? iQ(function (i) {
        i.setTime(Math.floor(i / e) * e)
      }, function (i, T) {
        i.setTime(+i + T * e)
      }, function (i, T) {
        return (T - i) / e
      }) : iL : null
    };
    var iU = iL.range,
      iS = 1000,
      iz = 60000,
      iP = 3600000,
      iH = 86400000,
      iN = 604800000,
      hX = iQ(function (e) {
        e.setTime(Math.floor(e / iS) * iS)
      }, function (i, T) {
        i.setTime(+i + T * iS)
      }, function (i, T) {
        return (T - i) / iS
      }, function (e) {
        return e.getUTCSeconds()
      }),
      iR = hX.range,
      iG = iQ(function (e) {
        e.setTime(Math.floor(e / iz) * iz)
      }, function (i, T) {
        i.setTime(+i + T * iz)
      }, function (i, T) {
        return (T - i) / iz
      }, function (e) {
        return e.getMinutes()
      }),
      h5 = iG.range,
      ir = iQ(function (i) {
        var T = i.getTimezoneOffset() * iz % iP;
        0 > T && (T += iP), i.setTime(Math.floor((+i - T) / iP) * iP + T)
      }, function (i, T) {
        i.setTime(+i + T * iP)
      }, function (i, T) {
        return (T - i) / iP
      }, function (e) {
        return e.getHours()
      }),
      iM = ir.range,
      ig = iQ(function (e) {
        e.setHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setDate(i.getDate() + T)
      }, function (i, T) {
        return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iz) / iH
      }, function (e) {
        return e.getDate() - 1
      }),
      hW = ig.range,
      ic = iF(0),
      ie = iF(1),
      hS = iF(2),
      ia = iF(3),
      hZ = iF(4),
      iw = iF(5),
      iD = iF(6),
      hU = ic.range,
      iv = ie.range,
      h3 = hS.range,
      iq = ia.range,
      iI = hZ.range,
      iu = iw.range,
      iT = iD.range,
      iK = iQ(function (e) {
        e.setDate(1), e.setHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setMonth(i.getMonth() + T)
      }, function (i, T) {
        return T.getMonth() - i.getMonth() + 12 * (T.getFullYear() - i.getFullYear())
      }, function (e) {
        return e.getMonth()
      }),
      iV = iK.range,
      h9 = iQ(function (e) {
        e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setFullYear(i.getFullYear() + T)
      }, function (i, T) {
        return T.getFullYear() - i.getFullYear()
      }, function (e) {
        return e.getFullYear()
      });
    h9.every = function (e) {
      return isFinite(e = Math.floor(e)) && e > 0 ? iQ(function (i) {
        i.setFullYear(Math.floor(i.getFullYear() / e) * e), i.setMonth(0, 1), i.setHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setFullYear(i.getFullYear() + T * e)
      }) : null
    };
    var h2 = h9.range,
      iB = iQ(function (e) {
        e.setUTCSeconds(0, 0)
      }, function (i, T) {
        i.setTime(+i + T * iz)
      }, function (i, T) {
        return (T - i) / iz
      }, function (e) {
        return e.getUTCMinutes()
      }),
      ii = iB.range,
      ih = iQ(function (e) {
        e.setUTCMinutes(0, 0, 0)
      }, function (i, T) {
        i.setTime(+i + T * iP)
      }, function (i, T) {
        return (T - i) / iP
      }, function (e) {
        return e.getUTCHours()
      }),
      id = ih.range,
      ib = iQ(function (e) {
        e.setUTCHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setUTCDate(i.getUTCDate() + T)
      }, function (i, T) {
        return (T - i) / iH
      }, function (e) {
        return e.getUTCDate() - 1
      }),
      h8 = ib.range,
      h7 = ix(0),
      h6 = ix(1),
      h4 = ix(2),
      h1 = ix(3),
      h0 = ix(4),
      hV = ix(5),
      hT = ix(6),
      hR = h7.range,
      ip = h6.range,
      iO = h4.range,
      iC = h1.range,
      iJ = h0.range,
      io = hV.range,
      im = hT.range,
      il = iQ(function (e) {
        e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setUTCMonth(i.getUTCMonth() + T)
      }, function (i, T) {
        return T.getUTCMonth() - i.getUTCMonth() + 12 * (T.getUTCFullYear() - i.getUTCFullYear())
      }, function (e) {
        return e.getUTCMonth()
      }),
      ik = il.range,
      hY = iQ(function (e) {
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setUTCFullYear(i.getUTCFullYear() + T)
      }, function (i, T) {
        return T.getUTCFullYear() - i.getUTCFullYear()
      }, function (e) {
        return e.getUTCFullYear()
      });
    hY.every = function (e) {
      return isFinite(e = Math.floor(e)) && e > 0 ? iQ(function (i) {
        i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e), i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0)
      }, function (i, T) {
        i.setUTCFullYear(i.getUTCFullYear() + T * e)
      }) : null
    };
    var ij = hY.range;
    iy.timeInterval = iQ, iy.timeMillisecond = iL, iy.timeMilliseconds = iU, iy.utcMillisecond = iL, iy.utcMilliseconds = iU, iy.timeSecond = hX, iy.timeSeconds = iR, iy.utcSecond = hX, iy.utcSeconds = iR, iy.timeMinute = iG, iy.timeMinutes = h5, iy.timeHour = ir, iy.timeHours = iM, iy.timeDay = ig, iy.timeDays = hW, iy.timeWeek = ic, iy.timeWeeks = hU, iy.timeSunday = ic, iy.timeSundays = hU, iy.timeMonday = ie, iy.timeMondays = iv, iy.timeTuesday = hS, iy.timeTuesdays = h3, iy.timeWednesday = ia, iy.timeWednesdays = iq, iy.timeThursday = hZ, iy.timeThursdays = iI, iy.timeFriday = iw, iy.timeFridays = iu, iy.timeSaturday = iD, iy.timeSaturdays = iT, iy.timeMonth = iK, iy.timeMonths = iV, iy.timeYear = h9, iy.timeYears = h2, iy.utcMinute = iB, iy.utcMinutes = ii, iy.utcHour = ih, iy.utcHours = id, iy.utcDay = ib, iy.utcDays = h8, iy.utcWeek = h7, iy.utcWeeks = hR, iy.utcSunday = h7, iy.utcSundays = hR, iy.utcMonday = h6, iy.utcMondays = ip, iy.utcTuesday = h4, iy.utcTuesdays = iO, iy.utcWednesday = h1, iy.utcWednesdays = iC, iy.utcThursday = h0, iy.utcThursdays = iJ, iy.utcFriday = hV, iy.utcFridays = io, iy.utcSaturday = hT, iy.utcSaturdays = im, iy.utcMonth = il, iy.utcMonths = ik, iy.utcYear = hY, iy.utcYears = ij, Object.defineProperty(iy, "__esModule", {
      value: !0
    })
  });

  function gn(e) {
    this._elemType = e;
    this._objCollection = {}
  }
  gn.prototype.get = function () {
    var i = null;
    for (var e in this._objCollection) {
      if (this._objCollection[e] && this._objCollection[e]._free === true) {
        this._objCollection[e]._free = false;
        return this._objCollection[e]
      }
    }
    i = S(this._elemType);
    e = bo.getGUID("obj_pool_");
    this._objCollection[e] = i;
    return i
  };
  gn.prototype.free = function (e) {
    if (!e) {
      return
    }
    e._free = true;
    if (e.tagName.toLowerCase() === "img") {
      e.src = "";
      e.crossOrigin = null;
      e.onload = e.onerror = null
    }
  };
  gn.prototype.clear = function () {
    for (var e in this._objCollection) {
      if (this._objCollection[e] && this._objCollection[e].tagName.toLowerCase === "img") {
        this._objCollection[e].onload = this._objCollection[e].onerror = null
      }
    }
    this._objCollection = {}
  };
  var gA = {
    get: function(i, hS, e, T, hT) {
      // xiewanna
        var hR = new XMLHttpRequest();
        hR.open("GET", i, true);
        hR.timeout = 10000;
        hR.ontimeout = function() {
            T && T()
        }
        ;
        hR.onreadystatechange = function(hU) {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    hS && hS(hR.responseText, hT)
                } else {
                    e && e()
                }
            }
        }
        ;
        hR.send(hT)
        return hR
    },
    post: function (i, hT, hS, e, T) {
      var hR = new XMLHttpRequest();
      hR.open("POST", i, true);
      hR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      hR.timeout = 10000;
      hR.ontimeout = function () {
        T && T()
      };
      hR.onreadystatechange = function (hU) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            hS && hS(hR.responseText, hT)
          } else {
            e && e()
          }
        }
      };
      hR.send(hT);
      return hR
    }
  };
  var hm = (function (e) {
    function i(hT, T, hS) {
      var hR = S("script", {
        src: hT,
        type: "text/javascript",
        charset: "utf-8"
      });
      if (hR.addEventListener) {
        hR.addEventListener("load", function (hV) {
          var hU = hV.target;
          hU.parentNode.removeChild(hU);
          T && T()
        }, false);
        hR.addEventListener("error", function (hU) {
          hS && hS(null)
        }, false)
      } else {
        if (hR.attachEvent) {
          hR.attachEvent("onreadystatechange", function (hV) {
            var hU = window.event.srcElement;
            if (hU && (hU.readyState === "loaded" || hU.readyState === "complete")) {
              hU.parentNode.removeChild(hU)
            }
            T && T()
          })
        }
      }
      e.getElementsByTagName("head")[0].appendChild(hR)
    }
    return {
      load: function (hU, T, hR) {
        if (typeof hU === "string") {
          i(hU, T, hR)
        } else {
          if (hU.length > 0) {
            var hT = hU.length;
            for (var hS = 0; hS < hT; hS++) {
              i(hU[hS], function () {
                hT--;
                if (hT === 0 && T) {
                  T()
                }
              })
            }
          }
        }
      }
    }
  })(window.document);

  function cL() {}
  cL.instances = {};
  cL.getInstance = function (i, T) {
    if (cL.instances[i]) {
      return cL.instances[i]
    }
    var e = new di(i, T);
    cL.instances[i] = e;
    return e
  };

  function di(e, i) {
    this._name = e;
    this._baseZoom = 18;
    this._opts = {
      tileSize: 256
    };
    C.extend(this._opts, i || {})
  }
  di.mapZoomBaseIndex = [8, 8, 8, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  di.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
  di.baseScaleZoomMercatorSize = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608];
  di.mapZoomBaseZoomMapping = [3, 3, 3, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19, 19, 19, 19, 19];
  di.mapZoomStartZoomMapping = [3, 3, 3, 3, 4, 4, 6, 6, 8, 8, 10, 11, 11, 11, 14, 14, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18];
  di.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
  di.mapZoomTileSize = [256, 256, 256, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096, 4096 * 2, 4096 * 2 * 2, 4096 * 2 * 2 * 2, 4096 * 2 * 2 * 2 * 2];
  di.baseZoomInfo = {
    "3": [3],
    "5": [4, 5],
    "7": [6, 7],
    "9": [8, 9],
    "10": [10],
    "12": [11, 12, 13],
    "15": [14, 15],
    "17": [16, 17],
    "19": [18, 19, 20, 21, 22, 23, 24, 25]
  };
  di.prototype = {
    getName: function () {
      return this._name
    },
    getTileSize: function (e) {
      e = Math.floor(e);
      if (e < 3) {
        e = 3
      }
      if (this._name === "na") {
        return di.mapZoomTileSize[e]
      }
      return this._opts.tileSize
    },
    getBaseTileSize: function (i) {
      i = Math.floor(i);
      if (this._name === "na") {
        var e = di.mapZoomBaseZoomMapping[i];
        return di.mapZoomTileSize[e]
      }
      return this._opts.tileSize
    },
    getDataZoom: function (e) {
      e = Math.floor(e);
      if (this._name === "na") {
        return di.mapZoomBaseZoomMapping[e]
      }
      return e
    },
    getZoomUnits: function (e) {
      return Math.pow(2, (this._baseZoom - e))
    },
    getMercatorSize: function (T, i) {
      if (this._name === "na") {
        T = Math.floor(T);
        var e = di.mapZoomBaseIndex[T];
        return di.baseScaleZoomMercatorSize[e]
      }
      return this._opts.tileSize * this.getZoomUnits(i)
    },
    getBaseZoom: function () {
      return this._baseZoom
    },
    getParentTile: function (hR, hX, hW, T, i) {
      if (this._name === "na") {
        var hS = di.baseZoomInfo[hW];
        T--;
        if (hS.indexOf(T) > -1) {
          return {
            col: hR,
            row: hX,
            zoom: hW,
            useZoom: T
          }
        } else {
          var hU = di.mapZoomBaseIndex[hW];
          var hT = di.baseScaleZoom[hU + 1];
          if (!hT) {
            return null
          }
          var hV = this.getFactorByZooms(hT, hW);
          var e = di.baseZoomInfo[hT];
          return {
            col: Math.floor(hR / hV),
            row: Math.floor(hX / hV),
            zoom: hT,
            useZoom: e[e.length - 1]
          }
        }
        return null
      }
      if (hW - 1 < i) {
        return null
      }
      return {
        col: Math.floor(hR / 2),
        row: Math.floor(hX / 2),
        zoom: hW - 1,
        useZoom: hW - 1
      }
    },
    getChildTiles: function (hS, hU, e, T, h1, h7) {
      if (this._name === "na") {
        var hR = di.baseZoomInfo[e];
        T += h7;
        if (hR.indexOf(T) > -1) {
          return [{
            col: hS,
            row: hU,
            zoom: e,
            useZoom: T
          }]
        } else {
          var h5 = 0;
          var h2 = e;
          while (h5 < h7) {
            var h6 = di.mapZoomBaseIndex[h2];
            var hW = di.baseScaleZoom[h6 - 1];
            if (!hW) {
              return null
            }
            var hX = di.baseZoomInfo[hW];
            if (hX[h7 - 1]) {
              var hY = [];
              var h0 = this.getFactorByZooms(e, hW);
              var i = hS * h0;
              var hZ = hU * h0;
              for (var h4 = 0; h4 < h0; h4++) {
                var hT = i + h4;
                for (var h3 = 0; h3 < h0; h3++) {
                  var hV = hZ + h3;
                  hY.push({
                    col: hT,
                    row: hV,
                    zoom: hW,
                    useZoom: hX[h7 - 1]
                  })
                }
              }
              return hY
            }
            h5 += hX.length;
            if (h7 === hX.length) {
              h2 = hW
            }
          }
        }
        return null
      }
      var hY = [];
      if (e + h7 > h1) {
        return null
      }
      var h0 = Math.pow(2, h7);
      var i = hS * h0;
      var hZ = hU * h0;
      var hW = e + h7;
      var hY = [];
      for (var h4 = 0; h4 < 2; h4++) {
        var hT = i + h4;
        for (var h3 = 0; h3 < 2; h3++) {
          var hV = hZ + h3;
          hY.push({
            col: hT,
            row: hV,
            zoom: hW,
            useZoom: hW
          })
        }
      }
      return hY
    },
    getFactorByZooms: function (i, hR) {
      var T = di.mapZoomBaseIndex[i];
      var hS = di.mapZoomBaseIndex[hR];
      var e = di.baseScaleZoomMercatorSize[T];
      var hT = di.baseScaleZoomMercatorSize[hS];
      return e / hT
    }
  };
  var a8 = {};
  var ag = ["swiftshader", "microsoft basic render driver"];
  var cl = ["intel", "nvidia", "amd", "apple", "geforce"];

  function dv(e) {
    e = e.toLowerCase();
    if (ag.indexOf(e) >= 0) {
      return true
    }
    if (e.indexOf("mobile") >= 0) {
      return true
    }
    return false
  }

  function fD(T) {
    T = T.toLowerCase();
    for (var e = 0; e < cl.length; e++) {
      if (T.indexOf(cl[e]) >= 0) {
        return true
      }
    }
    return false
  }

  function dY(e) {
    if (!e) {
      return false
    }
    if (dv(e)) {
      return false
    }
    if (fD(e)) {
      return true
    }
    return false
  }
  a8.ifEnableEarth = function (i) {
    var e = a8.ifEnableEarth;
    if (!i && typeof e._enable === "boolean") {
      return e._enable
    }
    if (a8.ifSupportWebGL()) {
      e._enable = true;
      return true
    }
    e._enable = false;
    return false
  };
  a8.ifEnableWebGLMap = function (i) {
    var e = a8.ifEnableWebGLMap;
    if (!i && typeof e._enable === "boolean") {
      return e._enable
    }
    if (a8.ifSupportWebGL()) {
      if (dw.inMapHost) {
        e._enable = true;
        return true
      } else {
        if (window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder) {
          e._enable = true;
          return true
        } else {
          e._enable = false;
          return false
        }
      }
    }
    e._enable = false;
    return false
  };
  a8.params = {};
  a8.ifSupportWebGL = function () {
    var i = a8.ifSupportWebGL;
    if (typeof i._supportWebGL === "boolean") {
      return i._supportWebGL
    }
    if (!window.WebGLRenderingContext) {
      i._supportWebGL = false;
      return false
    }
    var T = document.createElement("canvas");
    T.width = 300;
    T.height = 150;
    var hS = null;
    var hY = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: true,
      preserveDrawingBuffer: false,
      stencil: false
    };
    try {
      hS = T.getContext("webgl", hY) || T.getContext("experimental-webgl", hY)
    } catch (hU) {
      i._supportWebGL = false
    }
    if (hS === null) {
      i._supportWebGL = false
    } else {
      i._supportWebGL = true;
      var hW = hS.getExtension("WEBGL_debug_renderer_info");
      if (hW) {
        var hV = hS.getParameter(hW.UNMASKED_RENDERER_WEBGL);
        if (dY(hV) === true) {
          i._supportWebGL = true
        }
        var hX = hS.getParameter(hW.UNMASKED_VENDOR_WEBGL);
        i._renderer = hV;
        i._vendor = hX
      }
      if (!hW && C.Browser.firefox) {
        i._supportWebGL = true
      }
      if (!hW && C.Platform.macintosh) {
        i._supportWebGL = true
      }
      if (hS.drawingBufferWidth !== T.width || hS.drawingBufferHeight !== T.height) {
        i._supportWebGL = false
      }
      if (hS.getParameter(hS.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
        i._supportWebGL = false
      }
      var hR = hS.getParameter(hS.MAX_TEXTURE_SIZE);
      a8.params.maxTextureSize = hR;
      if (hR < 4096) {
        i._supportWebGL = false
      }
      var hT = hS.getParameter(hS.MAX_TEXTURE_IMAGE_UNITS);
      if (hT < 8) {
        i._supportWebGL = false
      }
      if (!hS.getShaderPrecisionFormat || hS.getShaderPrecisionFormat(hS.FRAGMENT_SHADER, hS.HIGH_FLOAT).precision < 23) {
        i._supportWebGL = false
      }
    }
    return i._supportWebGL
  };
  a8.ifSupportCanvas2d = function () {
    var hS = a8.ifSupportCanvas2d;
    if (typeof hS.supportCanvas2d === "boolean") {
      return hS.supportCanvas2d
    }
    var T = document.createElement("canvas");
    var i = null;
    try {
      i = T.getContext("2d")
    } catch (hR) {
      hS.supportCanvas2d = false
    }
    if (i === null) {
      hS.supportCanvas2d = false
    } else {
      hS.supportCanvas2d = true
    }
    return hS.supportCanvas2d
  };
  a8.ifEnableCanvas2dMap = function () {
    var i = navigator.userAgent;
    var e = 0;
    var hR = 0;
    var hS = 0;
    if (/macintosh/ig.test(i)) {
      var T = 0;
      if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) && !/chrome/i.test(i)) {
        T = parseInt((RegExp["\x241"] || RegExp["\x242"]), 10)
      }
      if (T > 0) {
        return false
      }
      return true
    }
    if (/windows nt (\d+\.\d)/ig.test(i)) {
      hR = parseFloat(RegExp.$1);
      if (hR >= 6.1) {
        if (/chrome\/(\d+\.\d)/i.test(i)) {
          e = parseFloat(RegExp.$1);
          if (e >= 31) {
            return true
          }
        }
        if (/MSIE (\d+(\.\d+)?)/.test(i)) {
          hS = parseFloat(RegExp.$1);
          if (hS >= 10) {
            return true
          }
        }
        if (/Firefox/.test(i)) {
          return true
        }
        if (/rv:11.0/ig.test(i)) {
          return true
        }
        if (/edge/ig.test(i)) {
          return true
        }
      }
    }
    return false
  };
  a8.ifSupportCSS3 = function (hV, i) {
    var hU = document.createElement("div");
    var hT = "Webkit Moz O ms".split(" ");
    var e = hT.length;
    var T = "";
    var hR = hU.style;
    if (hV in hR) {
      T = hV
    }
    hV = hV.replace(/^[a-z]/, function (hW) {
      return hW.toUpperCase()
    });
    while (e--) {
      var hS = hT[e] + hV;
      if (hS in hR) {
        T = hS;
        break
      }
    }
    if (i) {
      return T
    } else {
      return T.length > 0 ? true : false
    }
  };
  a8.isModernBrowser = a8.ifSupportCanvas2d() && a8.ifSupportCSS3("transform");

  function eZ(i, e) {
    this._size = i;
    this._curSize = 0;
    this._cache = {};
    this._least = null;
    this._most = null;
    this._options = {
      clearCallback: null,
      removeOldCallback: null
    };
    e = e || {};
    for (var T in e) {
      this._options[T] = e[T]
    }
    this._getDataTimes = 0;
    this._hitTimes = 0
  }
  eZ.prototype.setData = function (hR, hT) {
    var i = this._cache;
    var T = this._size;
    if (T === 0) {
      return
    }
    var e = this._curSize;
    if (e === T) {
      this._removeOld()
    }
    var hS;
    if (!i[hR]) {
      hS = {
        key: hR,
        data: hT,
        older: null,
        newwer: null
      };
      i[hR] = hS;
      if (this._least === null) {
        this._least = hS
      }
      if (this._most === null) {
        this._most = hS
      }
      this._curSize++
    } else {
      hS = i[hR];
      hS.data = hT;
      if (this._most === hS) {
        return
      }
      hS.older && (hS.older.newer = hS.newer);
      hS.newer && (hS.newer.older = hS.older);
      if (this._least === hS) {
        this._least = hS.newer
      }
    }
    if (this._most && this._most !== hS) {
      this._most.newer = hS;
      hS.older = this._most;
      this._most = hS;
      hS.newer = null
    }
  };
  eZ.prototype.getData = function (e) {
    var i = this._cache[e];
    this._getDataTimes++;
    if (i) {
      this._hitTimes++;
      var T = i.data;
      if (this._most === i) {
        return T
      }
      i.older && (i.older.newer = i.newer);
      i.newer && (i.newer.older = i.older);
      if (this._least === i) {
        this._least = i.newer
      }
      this._most.newer = i;
      i.older = this._most;
      i.newer = null;
      this._most = i;
      return T
    }
    return null
  };
  eZ.prototype.getAllData = function () {
    return this._cache
  };
  eZ.prototype.getHitRate = function () {
    return this._hitTimes / this._getDataTimes
  };
  eZ.prototype.removeData = function (i) {
    var e = this._cache;
    var T = e[i];
    if (!T) {
      return
    }
    if (this._options.clearCallback) {
      this._options.clearCallback(T.data, T.key)
    }
    T.older && (T.older.newer = T.newer);
    T.newer && (T.newer.older = T.older);
    if (this._least === T) {
      this._least = T.newer
    }
    if (this._most === T) {
      this._most = T.older
    }
    delete e[i];
    this._curSize--
  };
  eZ.prototype._removeOld = function () {
    var e = this._cache;
    var hR = Math.round(this._size * 0.6);
    var T = 0;
    while (this._least && T < hR) {
      var i = this._least;
      this._least = i.newer;
      i.newer && (i.newer.older = null);
      if (this._options.clearCallback) {
        this._options.clearCallback(i.data, i.key)
      }
      delete e[i.key];
      T++
    }
    this._curSize -= T;
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback()
    }
  };
  eZ.prototype.clear = function () {
    var e = this._cache;
    var i = this._least;
    if (this._options.clearCallback) {
      while (i) {
        this._options.clearCallback(i.data, i.key);
        i = i.newer
      }
    }
    this._least = this._most = null;
    this._cache = {};
    this._curSize = 0
  };
  eZ.prototype.forEach = function (e) {
    var i = this._least;
    while (i) {
      e(i.data);
      i = i.newer
    }
  };
  eZ.prototype.clearExcept = function (i) {
    var e = this._cache;
    var T = this._least;
    while (T) {
      if (!i[T.key]) {
        if (this._options.clearCallback) {
          this._options.clearCallback(T.data, T.key)
        }
        T.older && (T.older.newer = T.newer);
        T.newer && (T.newer.older = T.older);
        if (this._least === T) {
          this._least = T.newer
        }
        if (this._most === T) {
          this._most = T.older
        }
        delete e[T.key];
        this._curSize--
      }
      T = T.newer
    }
  };
  var g0 = {
    parseHexToRgbaArray: function (hT) {
      var hU = hT.replace("#", "");
      if (hU.length === 3) {
        hU += "f"
      } else {
        if (hU.length === 6) {
          hU += "ff"
        }
      }
      var e = [];
      var hS = hU.length;
      var hR = hS === 8 ? 2 : 1;
      for (var T = 0; T < hS; T = T + hR) {
        if (hR === 2) {
          e.push(parseInt(hU.slice(T, T + 2), 16))
        } else {
          e.push(parseInt(hU.slice(T, T + 1) + hU.slice(T, T + 1), 16))
        }
      }
      return e
    },
    parseRgbaStrToArray: function (i) {
      var e = [0, 0, 0, 255];
      if (i.indexOf("rgba(") === 0) {
        var hR = i.replace("rgba(", "").replace(")", "");
        var T = hR.split(",");
        e[0] = parseInt(T[0], 10);
        e[1] = parseInt(T[1], 10);
        e[2] = parseInt(T[2], 10);
        e[3] = Math.round(parseFloat(T[3]) * 255)
      } else {
        if (i.indexOf("rgb(") === 0) {
          var hR = i.replace("rgb(", "").replace(")", "");
          var hS = hR.split(",");
          e[0] = parseInt(hS[0], 10);
          e[1] = parseInt(hS[1], 10);
          e[2] = parseInt(hS[2], 10);
          e[3] = 255
        }
      }
      return e
    },
    parseHexAndOpacityToRgbaArray: function (hS, hT) {
      var T = [];
      var hW = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var hV = hS.toLowerCase();
      if (hW.test(hV)) {
        if (hV.length === 4) {
          var e = "#";
          for (var hU = 1; hU < 4; hU++) {
            e += hV.slice(hU, hU + 1).concat(hV.slice(hU, hU + 1))
          }
          hV = e
        }
        for (var hR = 1; hR < 7; hR += 2) {
          T.push(parseInt(hV.slice(hR, hR + 2), 16))
        }
        T.push(hT)
      }
      return T
    },
    parseCSSColor: function (e) {
      if (e.indexOf("#") === 0) {
        return g0.parseHexToRgbaArray(e)
      }
      return g0.parseRgbaStrToArray(e)
    },
    rgbToHSV: function (hS) {
      var e = hS[0] / 255;
      var T = hS[1] / 255;
      var hT = hS[2] / 255;
      var hW = Math.max(e, T, hT);
      var hR = Math.min(e, T, hT);
      var hV = hW - hR;
      var i;
      if (hV === 0) {
        i = 0
      } else {
        if (hW === e) {
          i = 60 * (((T - hT) / hV) % 6)
        } else {
          if (hW === T) {
            i = 60 * ((hT - e) / hV + 2)
          } else {
            if (hW === hT) {
              i = 60 * ((e - T) / hV + 4)
            }
          }
        }
      }
      var hX = hW === 0 ? 0 : (hV / hW);
      var hU = hW;
      while (i < 0) {
        i += 360
      }
      return [i, hX, hU]
    },
    hsvToRGB: function (hR) {
      var hV = hR[2] * hR[1];
      var T = hV * (1 - Math.abs((hR[0] / 60) % 2 - 1));
      var i = hR[2] - hV;
      var hS = hR[0];
      var hU;
      var hT;
      var e;
      if (hS >= 0 && hS < 60) {
        hU = hV;
        hT = T;
        e = 0
      } else {
        if (hS >= 60 && hS < 120) {
          hU = T;
          hT = hV;
          e = 0
        } else {
          if (hS >= 120 && hS < 180) {
            hU = 0;
            hT = hV;
            e = T
          } else {
            if (hS >= 180 && hS < 240) {
              hU = 0;
              hT = T;
              e = hV
            } else {
              if (hS >= 240 && hS < 300) {
                hU = T;
                hT = 0;
                e = hV
              } else {
                if (hS >= 300 && hS < 360) {
                  hU = hV;
                  hT = 0;
                  e = T
                }
              }
            }
          }
        }
      }
      hU = (hU + i) * 255 > 255 ? 255 : (hU + i) * 255;
      hT = (hT + i) * 255 > 255 ? 255 : (hT + i) * 255;
      e = (e + i) * 255 > 255 ? 255 : (e + i) * 255;
      return [Math.round(hU), Math.round(hT), Math.round(e)]
    }
  };
  var cB = {
    request: function (hU, hR, i, hW, T) {
      var hS = (Math.random() * 100000).toFixed(0);
      bo._rd["_cbk" + hS] = function (hX) {
        if (hX.result && hX.result["error"] && hX.result["error"] === 202) {
          alert("该AK因为恶意行为已经被管理员封禁！");
          return
        }
        i = i || {};
        hU && hU(hX, i);
        delete bo._rd["_cbk" + hS]
      };
      hW = hW || "";
      var hV;
      if (i && i.useEncodeURI) {
        hV = hj(hR, encodeURI)
      } else {
        hV = hj(hR, encodeURIComponent)
      }
      var hT = this;
      var e = e3.apiHost + "/" + hW + "?" + hV + "&ie=utf-8&oue=1&fromproduct=jsapi";
      if (!T) {
        e += "&res=api"
      }
      e += "&callback=" + eA + "._rd._cbk" + hS;
      e += "&ak=" + ge;
      e = e3.apiHost + "/center.js" // 加这一行
      hm.load(e)
    }
  };
  bo._rd = {};
  var D = {
    request: function (hR, e) {
      if (/^http/.test(hR)) return;
      if (e) {
        var T = (Math.random() * 100000).toFixed(0);
        BMapGL._rd["_cbk" + T] = function (hS) {
          e && e(hS);
          delete BMapGL._rd["_cbk" + T]
        };
        hR += "&callback=BMapGL._rd._cbk" + T
      }
      var i = S("script", {
        src: hR,
        type: "text/javascript",
        charset: "utf-8"
      });
      if (i.addEventListener) {
        i.addEventListener("load", function (hT) {
          var hS = hT.target;
          hS.parentNode.removeChild(hS)
        }, false);
        i.addEventListener("error", function (hS) {
          e && e([, , , , , ])
        }, false)
      } else {
        if (i.attachEvent) {
          i.attachEvent("onreadystatechange", function (hT) {
            var hS = window.event.srcElement;
            if (hS && (hS.readyState == "loaded" || hS.readyState == "complete")) {
              hS.parentNode.removeChild(hS)
            }
          })
        }
      }
      document.getElementsByTagName("head")[0].appendChild(i);
      i = null
    }
  };

  function a7() {
    this._map = null;
    this._container;
    this._type = "control";
    this.blockInfoWindow = true;
    this._visible = true
  }
  a7.inherits(ed, "Control");
  C.extend(a7.prototype, {
    initialize: function (e) {
      this._map = e;
      if (this._container) {
        if (this._opts && this._opts.container) {
          this._opts.container.appendChild(this._container)
        } else {
          e.container.appendChild(this._container)
        }
        return this._container
      }
      return
    },
    _i: function (e) {
      if (!this._container && this.initialize && bV(this.initialize)) {
        this._container = this.initialize(e)
      }
      this._opts = this._opts || {
        printable: false
      };
      this._setStyle();
      this._setPosition();
      if (this._container) {
        this._container._jsobj = this
      }
    },
    _setStyle: function () {
      var i = this._container;
      if (i) {
        var e = i.style;
        e.position = "absolute";
        e.zIndex = this._cZIndex || "10";
        e.MozUserSelect = "none";
        if (!this._opts.printable) {
          C.ac(i, "BMap_noprint")
        }
        C.on(i, "contextmenu", db)
      }
    },
    remove: function () {
      this._map = null;
      if (!this._container) {
        return
      }
      this._container.parentNode && this._container.parentNode.removeChild(this._container);
      this._container._jsobj = null;
      this._container = null
    },
    _render: function (e) {
      if (this._opts && this._opts.container) {
        this._container = dI(this._opts.container, '<div unselectable="on"></div>')
      } else {
        var i = '<div unselectable="on"></div>';
        if (e && e.config.autoSafeArea && bv()) {
          this._safeAreaContainer = dI(this._map.container, i);
          this._safeAreaContainer.style.position = "absolute";
          this._safeAreaContainer.style.bottom = "env(safe-area-inset-bottom)";
          this._container = dI(this._safeAreaContainer, i)
        } else {
          this._container = dI(this._map.container, i)
        }
      }
      if (this._visible === false) {
        this._container.style.display = "none"
      }
      return this._container
    },
    _setPosition: function () {
      this.setAnchor(this._opts.anchor)
    },
    setAnchor: function (hR) {
      if (this.anchorFixed || typeof hR !== "number" || isNaN(hR) || hR < BMAP_ANCHOR_TOP_LEFT || hR > BMAP_ANCHOR_BOTTOM_RIGHT) {
        hR = this.defaultAnchor
      }
      this._opts.offset = this._opts.offset || this.defaultOffset;
      var T = this._opts.anchor;
      this._opts.anchor = hR;
      if (!this._container) {
        return
      }
      var hT = this._container;
      var e = this._opts.offset.width;
      var hS = this._opts.offset.height;
      hT.style.left = hT.style.top = hT.style.right = hT.style.bottom = "auto";
      switch (hR) {
        case BMAP_ANCHOR_TOP_LEFT:
          hT.style.top = hS + "px";
          hT.style.left = e + "px";
          break;
        case BMAP_ANCHOR_TOP_RIGHT:
          hT.style.top = hS + "px";
          hT.style.right = e + "px";
          break;
        case BMAP_ANCHOR_BOTTOM_LEFT:
          hT.style.bottom = hS + "px";
          hT.style.left = e + "px";
          break;
        case BMAP_ANCHOR_BOTTOM_RIGHT:
          hT.style.bottom = hS + "px";
          hT.style.right = e + "px";
          break;
        default:
          break
      }
      var i = ["TL", "TR", "BL", "BR"];
      C.rc(this._container, "anchor" + i[T]);
      C.ac(this._container, "anchor" + i[hR])
    },
    getAnchor: function () {
      return this._opts.anchor
    },
    setOffset: function (e) {
      if (!e) {
        return
      }
      this._opts = this._opts || {};
      this._opts.offset = new d9(e.width, e.height);
      if (!this._container) {
        return
      }
      this.setAnchor(this._opts.anchor)
    },
    getOffset: function () {
      return this._opts.offset
    },
    getDom: function () {
      return this._container
    },
    show: function () {
      if (this._visible === true) {
        return
      }
      this._visible = true;
      if (this._container) {
        this._container.style.display = ""
      }
      this.dispatchEvent(new bb("onshow"))
    },
    hide: function () {
      if (this._visible === false) {
        return
      }
      this._visible = false;
      if (this._container) {
        this._container.style.display = "none"
      }
      this.dispatchEvent(new bb("onhide"))
    },
    isPrintable: function () {
      return !!this._opts.printable
    },
    isVisible: function () {
      if (!this._container && !this._map) {
        return false
      }
      return !!this._visible
    },
    _asyncLoadCode: function () {
      var e = this;
      ea.load("control", function () {
        if (e._asyncDraw) {
          e._asyncDraw()
        }
      })
    }
  });
  var hD = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_LEFT: 2,
    BOTTOM_RIGHT: 3
  };
  bo.ControlAnchor = hD;
  window.BMAP_ANCHOR_TOP_LEFT = 0;
  window.BMAP_ANCHOR_TOP_RIGHT = 1;
  window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
  window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;

  function dH(e) {
    a7.call(this);
    e = e || {};
    this._opts = {
      printable: false
    };
    C.extend(this._opts, e);
    this._copyrightCollection = [];
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new d9(5, 2);
    this.setAnchor(e.anchor);
    this._canShow = true;
    this.sateMapStyle = false;
    this.blockInfoWindow = false;
    this._asyncLoadCode()
  }
  dH.inherits(a7, "CopyrightControl");
  C.extend(dH.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    },
    addCopyright: function (hR) {
      var e = {
        minZoom: 0,
        bounds: null,
        content: "",
        mapType: ""
      };
      for (var T in hR) {
        e[T] = hR[T]
      }
      if (this._map) {
        var hU = e.minZoom;
        if (hU === -1 || hU < this._map.getMinZoom() || hU > this._map.getMaxZoom()) {
          e.minZoom = this._map.getMinZoom()
        }
        if (e.mapType !== "" && !b6[e.mapType]) {
          e.mapType = BMAPGL_NORMAL_MAP
        }
      }
      var hS = this.getCopyright(hR.id);
      if (hS) {
        for (var hT in e) {
          hS[hT] = e[hT]
        }
      } else {
        this._copyrightCollection.push(e)
      }
    },
    getCopyright: function (hR) {
      for (var T = 0, e = this._copyrightCollection.length; T < e; T++) {
        if (this._copyrightCollection[T].id === hR) {
          return this._copyrightCollection[T]
        }
      }
    },
    addSateMapStyle: function () {
      this.sateMapStyle = true;
      if (this._container) {
        C.ac(this._container, "BMap_cpyCtrl_w")
      }
    },
    removeSateMapStyle: function () {
      this.sateMapStyle = false;
      if (this._container) {
        C.rc(this._container, "BMap_cpyCtrl_w")
      }
    }
  });

  function eb(e) {
    a7.call(this);
    e = e || {};
    this.canCheckSize = e.canCheckSize === false ? false : true;
    this.curCityName = "";
    this.curCityCode = "";
    this.defaultOffset = new d9(10, 10);
    this.defaultAnchor = hD.TOP_LEFT;
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this._opts = {
      printable: false,
      offset: e.offset || this.defaultOffset,
      anchor: e.anchor || this.defaultAnchor,
      expand: !!(e.expand)
    };
    if (e.onChangeBefore && bV(e.onChangeBefore)) {
      this.onChangeBefore.push(e.onChangeBefore)
    }
    if (e.onChangeAfter && bV(e.onChangeAfter)) {
      this.onChangeAfter.push(e.onChangeAfter)
    }
    if (e.onChangeSuccess && bV(e.onChangeSuccess)) {
      this.onChangeSuccess.push(e.onChangeSuccess)
    }
    this.setAnchor(e.anchor);
    this._asyncLoadCode()
  }
  eb.inherits(a7, "CityListControl");
  C.extend(eb.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    }
  });

  function hh(e) {
    a7.call(this);
    e = e || {};
    this._opts = {
      printable: false
    };
    this._opts = C.extend(C.extend(this._opts, {
      unit: "metric"
    }), e);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new d9(81, 18);
    if (f5()) {
      this.defaultOffset = new d9(75, 10)
    }
    this.setAnchor(e.anchor);
    this._units = {
      metric: {
        name: "metric",
        conv: 1,
        incon: 1000,
        u1: "米",
        u2: "公里"
      },
      us: {
        name: "us",
        conv: 3.2808,
        incon: 5280,
        u1: "英尺",
        u2: "英里"
      }
    };
    this.sateMapStyle = false;
    if (!this._units[this._opts.unit]) {
      this._opts.unit = "metric"
    }
    this._scaleText = null;
    this._numberArray = {};
    this._asyncLoadCode()
  }
  window.BMAP_UNIT_METRIC = "metric";
  window.BMAP_UNIT_IMPERIAL = "us";
  hh.inherits(a7, "ScaleControl");
  C.extend(hh.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    },
    setUnit: function (e) {
      this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
    },
    getUnit: function () {
      return this._opts.unit
    },
    addSateMapStyle: function () {
      this.sateMapStyle = true;
      var e = this._container;
      if (e) {
        C.ac(e.children[0], "dark")
      }
    },
    removeSateMapStyle: function () {
      this.sateMapStyle = false;
      var e = this._container;
      if (e) {
        C.rc(e.children[0], "dark")
      }
    }
  });
  window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
  window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
  window.BMAP_NAVIGATION_CONTROL_PAN = 2;
  window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
  window.BMAP_NAVIGATION_CONTROL_ANIM = 4;

  function dt(e) {
    a7.call(this);
    e = e || {};
    this._opts = {
      printable: false
    };
    C.extend(this._opts, e);
    this.controlHeight = [{
      width: 65,
      height: 227,
      zoomHeight: 227,
      zoomWidth: 37,
      sliderHeight: 180
    }, {
      width: 65,
      height: 47,
      zoomHeight: (this._opts.forceNew === true) ? 56 : 47,
      zoomWidth: 37,
      sliderHeight: 0
    }, {
      width: 37,
      height: 57,
      zoomHeight: 0,
      zoomWidth: 0,
      sliderHeight: 0
    }, {
      width: 26,
      height: 56,
      zoomHeight: 56,
      zoomWidth: 6,
      sliderHeight: 0
    }, {
      width: 56,
      height: 47,
      zoomHeight: 47,
      zoomWidth: 37,
      sliderHeight: 180
    }];
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new d9(10, 10);
    this.setAnchor(e.anchor);
    this.setType(e.type);
    this._maxTotalZoomLv = 19;
    this._minZoomLevel = -1;
    this._maxZoomLevel = -1;
    this._totalZoomLv = -1;
    this._sliderInterval = 10;
    this._sliderHeight = 180;
    this._minBarY = 1;
    this._maxBarY = -1;
    this._curBarY = -1;
    this._zoomDom = null;
    this._zoomBtnDom = null;
    this._sliderDom = null;
    this._sliderBaseDom = null;
    this._cZIndex = "1100";
    this._asyncLoadCode()
  }
  dt.inherits(a7, "NavigationControl");
  C.extend(dt.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    },
    setType: function (e) {
      if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ANIM) {
        this._opts.type = e
      } else {
        this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
      }
    },
    getType: function () {
      return this._opts.type
    }
  });

  function bC(i) {
    a7.call(this);
    i = i || {};
    this._opts = {
      printable: false
    };
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new d9(10, 10);
    this.setAnchor(i.anchor);
    this._opts = C.extend(C.extend(this._opts, {
      offset: this.defaultOffset,
      enableSwitch: true
    }), i);
    var e = this;
    ea.load("control", function () {
      e._asyncDraw()
    })
  }
  bC.inherits(a7, "MapTypeControl");
  C.extend(bC.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    },
    showStreetLayer: function (e) {
      this._map.showStreetLayer(e)
    }
  });

  function cy(e) {
    a7.call(this);
    e = e || {};
    this._opts = {};
    this._opts = C.extend(this._opts, e);
    this._zoomInDisabled = false;
    this._zoomOutDisabled = false;
    this._zoomInTapped = false;
    this._zoomOutTapped = false;
    this.defaultAnchor = hD.BOTTOM_RIGHT;
    this.defaultOffset = new d9(15, 20);
    this.setAnchor(e.anchor);
    this._asyncLoadCode()
  }
  cy.inherits(a7, "ZoomControl");
  C.extend(cy.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    }
  });

  function bA(e) {
    a7.call(this);
    e = e || {};
    this._opts = {
      autoZoom: true,
      autoViewport: true
    };
    this._opts = C.extend(this._opts, e);
    this.defaultAnchor = hD.BOTTOM_LEFT;
    this.defaultOffset = new d9(10, 50);
    this.watchPosition = this._opts.watchPosition || false;
    this.useCompass = this._opts.useCompass || false;
    this.locMarker = null;
    this.locLevel = 16;
    this.setAnchor(this._opts.anchor);
    this.onLocationStart = e.onLocationStart || null;
    this._asyncLoadCode()
  }
  bA.inherits(a7, "LocationControl");
  C.extend(bA.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container
    },
    startLocation: function () {
      this._startLocationCalled = true
    },
    stopLocationTrace: function () {},
    setOptions: function (e) {
      e = e || {};
      C.extend(this._opts, e)
    }
  });

  function af(e) {
    a7.call(this);
    e = e || {};
    this._opts = {};
    this._opts = C.extend(this._opts, e);
    this.defaultAnchor = hD.BOTTOM_LEFT;
    this.defaultOffset = new d9(5, 15);
    if (f5()) {
      this.defaultOffset = new d9(10, 10)
    }
    this.setAnchor(e.anchor)
  }
  af.inherits(a7, "LogoControl");
  C.extend(af.prototype, {
    initialize: function (i) {
      this._map = i;
      var e = this._container = document.createElement("div");
      // e.innerHTML = '<img src="' + e3.apiHost + '/images/logo_hd.png"  style="height:21px;width:62px;"/>';
      i.getContainer().appendChild(e);
      return e
    }
  });

  function gB(e, i) {
    this._map = e;
    this._indoorInfo = i;
    this._visible = true;
    this._adjustVisible = true;
    this._isMobile = f5();
    this._sizeConfig = {
      FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
      SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15
    };
    this._init()
  }
  gB.prototype._init = function () {
    this._render();
    this._bindDom();
    this._bind();
    this._adjustDisplayHeight();
    var e = new bb("onindoor_bar_show");
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e)
  };
  gB.prototype._render = function () {
    if (!this._indoorInfo) {
      return
    }
    var hV = this._isMobile;
    var e = this._div = S("div");
    C.ac(e, "floor-select-container");
    hV && C.ac(e, "mobile");
    hV && C.ac(e, "all-border-radius");
    var i = this._btnTop = S("button");
    C.ac(i, "floor-switch-top");
    C.ac(i, "top-border-radius");
    var hT = S("div");
    C.ac(hT, "floor-switch-top-icon");
    i.appendChild(hT);
    var hS = this._btnBottom = S("button");
    var T = S("div");
    C.ac(T, "floor-switch-bottom-icon");
    hS.appendChild(T);
    C.ac(hS, "floor-switch-bottom");
    C.ac(hS, "bottom-border-radius");
    var hR = this._floorsContainer = S("div");
    C.ac(hR, "floors-container");
    hR.appendChild(this._createFloorsDom());
    this._div.appendChild(i);
    this._div.appendChild(hR);
    this._div.appendChild(hS);
    var hW = 0;
    if (this._btnTop.style.display === "") {
      hW = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT
    }
    this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hW + "px";
    this._map.getContainer().appendChild(this._div);
    if (!hV) {
      var hU = this;
      setTimeout(function () {
        hU._div.style.right = "20px"
      }, 20)
    }
  };
  gB.prototype._createFloorsDom = function () {
    if (!this._indoorInfo) {
      return
    }
    var T = this._ol = S("ol");
    var hT = this._indoorInfo.currentFloor;
    for (var hS = this._indoorInfo.floors.length - 1; hS >= 0; hS--) {
      var hU = this._indoorInfo.floors[hS].floorName;
      var e = S("li");
      var hR = S("button");
      C.ac(hR, "btn-select-floor");
      if (hS === hT) {
        C.ac(hR, "selected")
      }
      hR.setAttribute("data-floor", hS);
      hR.innerHTML = hU;
      e.appendChild(hR);
      T.appendChild(e)
    }
    return T
  };
  gB.prototype._updateUI = function () {
    if (!this._ol) {
      this._render();
      this._bind();
      this._adjustDisplayHeight();
      return
    }
    this._ol = null;
    this._ol = this._createFloorsDom();
    this._floorsContainer.innerHTML = "";
    this._floorsContainer.appendChild(this._ol);
    this._adjustDisplayHeight()
  };
  gB.prototype._bindDom = function () {
    var e = this;
    C.on(this._floorsContainer, "click", function (hR) {
      var T = hR.target || hR.srcElement;
      if (T.tagName.toLowerCase() === "button") {
        e._map.showIndoor(e._indoorInfo.uid, parseInt(T.getAttribute("data-floor"), 10));
        var i = new bb("onindoor_bar_click");
        i.uid = e._indoorInfo.uid;
        e._map.dispatchEvent(i)
      }
    });
    C.on(this._floorsContainer, "mouseover", function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        C.ac(i, "hover")
      }
    });
    C.on(this._floorsContainer, "mouseout", function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        C.rc(i, "hover")
      }
    });
    C.on(this._floorsContainer, "touchstart", function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        C.ac(i, "onmousedown")
      }
    });
    C.on(this._floorsContainer, "touchend", function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        C.rc(i, "onmousedown")
      }
    });
    C.on(this._btnTop, "mouseover", function (i) {
      if (this._disable) {
        return
      }
      C.ac(this, "hover")
    });
    C.on(this._btnTop, "mouseout", function (i) {
      C.rc(this, "hover")
    });
    C.on(this._btnBottom, "mouseover", function (i) {
      if (this._disable) {
        return
      }
      C.ac(this, "hover")
    });
    C.on(this._btnBottom, "mouseout", function (i) {
      C.rc(this, "hover")
    });
    C.on(this._btnTop, "touchstart", function (i) {
      if (this.className.indexOf("disable") > -1) {
        return
      }
      C.ac(this, "onmousedown")
    });
    C.on(this._btnTop, "touchend", function (i) {
      C.rc(this, "onmousedown")
    });
    C.on(this._btnBottom, "touchstart", function (i) {
      if (this.className.indexOf("disable") > -1) {
        return
      }
      C.ac(this, "onmousedown")
    });
    C.on(this._btnBottom, "touchend", function (i) {
      C.rc(this, "onmousedown")
    });
    C.on(this._btnTop, "click", function (i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26)
    });
    C.on(this._btnBottom, "click", function (i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26)
    });
    C.on(this._div, "mousemove", h);
    C.on(this._div, "wheel", db);
    C.on(this._div, "mousewheel", db);
    this._map.addEventListener("resize", function () {
      e._adjustDisplayHeight()
    })
  };
  gB.prototype._adjustDisplayHeight = function () {
    if (!this._indoorInfo) {
      return
    }
    var hT = this._map.getSize().height;
    var hU = this._sizeConfig.FLOOR_BTN_HEIGHT;
    var hV = hT - 291 - 100;
    if (this._isMobile) {
      hV = hT - 12 - 108 - this._map.config.bottomOffset
    }
    var e = this._indoorInfo.floors.length;
    var T = e * hU;
    var hR = e;
    var hX = 0;
    var hY = this._floorsContainer.children[0];
    if (T > hV) {
      this._showArrow = true;
      C.rc(hY.children[0].children[0], "top-border-radius");
      C.rc(hY.children[e - 1].children[0], "bottom-border-radius")
    } else {
      this._showArrow = false;
      C.ac(hY.children[0].children[0], "top-border-radius");
      C.ac(hY.children[e - 1].children[0], "bottom-border-radius")
    }
    while (T > hV) {
      if (hR === 0) {
        break
      }
      hR--;
      hX = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
      T = hR * hU + hX
    }
    this._currentDisplayHeight = T;
    if (hR < 3) {
      this._setAdjustVisbile(false)
    } else {
      this._setAdjustVisbile(true)
    }
    this._floorsContainer.style.height = hR * hU + "px";
    var hS = this._indoorInfo.currentFloor;
    var i = e - hS;
    var hW = hS - 1;
    this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hX + "px";
    var hZ = -(e - (hS + Math.round(hR / 2))) * hU;
    this._setBarSliderTop(hZ);
    if (hR < e) {
      C.show(this._btnTop);
      C.show(this._btnBottom)
    } else {
      C.hide(this._btnTop);
      C.hide(this._btnBottom);
      this._setBarSliderTop(0)
    }
    if (this._isMobile) {
      this._div.style.bottom = 108 + this._map.config.bottomOffset + "px"
    }
  };
  gB.prototype._setBarSliderTop = function (hR) {
    var T = 26;
    var i = this._indoorInfo.floors.length;
    var e = i * T;
    if (this._currentDisplayHeight) {
      if (this._showArrow) {
        e = this._currentDisplayHeight - 30
      } else {
        e = this._currentDisplayHeight
      }
    }
    if (e - hR >= i * T) {
      hR = e - i * T;
      C.ac(this._btnBottom, "disable");
      C.rc(this._btnBottom, "hover");
      this._btnBottom._disable = true
    } else {
      C.rc(this._btnBottom, "disable");
      this._btnBottom._disable = false
    }
    if (hR >= 0) {
      hR = 0;
      C.ac(this._btnTop, "disable");
      C.rc(this._btnTop, "hover");
      this._btnTop._disable = true
    } else {
      C.rc(this._btnTop, "disable");
      this._btnTop._disable = false
    }
    this._ol.style.top = hR + "px"
  };
  gB.prototype._setAdjustVisbile = function (e) {
    if (this._adjustVisible === e) {
      return
    }
    this._adjustVisible = e;
    if (e && this._visible) {
      this._div.style.right = "20px"
    } else {
      this._div.style.right = "-30px"
    }
  };
  gB.prototype._bind = function () {
    var i = this._map;
    var e = this;
    i.on("indoor_status_changed", function (hV) {
      if (e._visible === false) {
        return
      }
      var T = e._ol;
      var hT = hV.uid;
      if (!hT) {
        return
      }
      var hU = hV.floor;
      for (var hS = 0; hS < T.children.length; hS++) {
        var hR = T.children[hS].children[0];
        if (parseInt(hR.getAttribute("data-floor"), 10) === hU) {
          C.ac(hR, "selected")
        } else {
          C.rc(hR, "selected")
        }
      }
    });
    i.on("zoomend", function (T) {
      if (this.getZoom() < 17) {
        e._setAdjustVisbile(false)
      } else {
        e._setAdjustVisbile(true)
      }
    })
  };
  gB.prototype.setInfo = function (e) {
    if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
      return
    }
    this._indoorInfo = e;
    this._updateUI()
  };
  gB.prototype.show = function () {
    if (this._visible === true) {
      return
    }
    this._visible = true;
    if (!this._isMobile) {
      this._div.style.right = "20px"
    } else {
      this._div.style.display = ""
    }
    var e = new bb("onindoor_bar_show");
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e)
  };
  gB.prototype.hide = function () {
    if (this._visible === false) {
      return
    }
    this._visible = false;
    if (!this._isMobile) {
      this._div.style.right = "-30px"
    } else {
      this._div.style.display = "none"
    }
  };

  function eU() {
    this._opts = {};
    this.defaultOffset = new d9(2, 80);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this._firstAnimation = true
  }
  eU.inherits(a7, "NavigationControl3D");
  C.extend(eU.prototype, {
    initialize: function (T) {
      this._map = T;
      this._createDom();
      this._bindDom();
      this._bind();
      if (!f5()) {
        this._headingControl = new hG(this._map, this._div)
      }
      this._tiltControl = new es(this._map, this._div);
      this._render();
      var i = this._map.getMapType();
      var e = this;
      if (i === "B_EARTH_MAP" || this._map._renderType === "webgl") {
        e._div.style.opacity = "1";
        e._div.style.visibility = "visible"
      } else {
        e._div.style.opacity = "0";
        e._div.style.visibility = "hidden"
      }
      return this._container
    },
    _createDom: function () {
      var i = this._div = document.createElement("div");
      this._container = i;
      var e = i.style;
      e.position = "absolute";
      e.zIndex = 5;
      e.width = "52px";
      e.height = "82px";
      e.right = "-3px";
      e.bottom = "79px";
      e.opacity = "0";
      e.visibility = "hidden";
      e.WebkitTransition = e.transition = "opacity .3s ease-out,visibility .3s ease-out"
    },
    _render: function () {
      var e = document.getElementById("map-operate");
      if (e) {
        e.appendChild(this._div)
      } else {
        this._map.getContainer().appendChild(this._div)
      }
    },
    _bindDom: function () {
      this._div.addEventListener("mousemove", h)
    },
    _bind: function () {
      if (this._map._renderType === "webgl") {
        return
      }
      var e = this;
      this._map.on("maptypechange", function () {
        if (this.mapType === "B_EARTH_MAP") {
          if (e._firstAnimation) {
            e._firstAnimation = false;
            setTimeout(function () {
              e._div.style.opacity = "1";
              e._div.style.visibility = "visible"
            }, 300)
          } else {
            e._div.style.opacity = "1";
            e._div.style.visibility = "visible"
          }
        } else {
          e._div.style.opacity = "0";
          e._div.style.visibility = "hidden"
        }
      })
    }
  });

  function hG(T, i) {
    this._map = T;
    this._target = T;
    var hR = T.temp.originMapType || T.mapType;
    if (hR === "B_EARTH_MAP" && T._earth) {
      this._target = T._earth
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a6() >= 1.5 ? 2 : 1;
    this._imgPath = e3.imgPath + "earth-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
    this._enabled = true;
    var e = this;
    this._setHeadingOptions = {
      callback: function () {
        e._target.setLock(false)
      }
    };
    this._init()
  }
  C.extend(hG.prototype, {
    _init: function () {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._updateUI();
      this._checkEnable()
    },
    _checkEnable: function () {
      if (this._target.getZoom() >= this._target._enableHeadingZoom) {
        this.enable()
      } else {
        this.disable()
      }
    },
    _createDom: function () {
      var i = this._div = S("div");
      var e = i.style;
      e.position = "absolute";
      e.zIndex = 5;
      e.top = "0";
      e.left = "0";
      e.width = "52px";
      e.height = "54px";
      e.background = "url(" + this._imgPath + ") no-repeat";
      e.backgroundSize = "266px auto";
      this._rotateCCW = this._createButton();
      this._rotateCCW.title = "逆时针转动";
      e = this._rotateCCW.style;
      e.left = "2px";
      e.top = "5px";
      e.zIndex = "1";
      e.width = "15px";
      e.height = "42px";
      e.backgroundPosition = "-75px -5px";
      this._rotateCW = this._createButton();
      this._rotateCW.title = "顺时针转动";
      e = this._rotateCW.style;
      e.right = "2px";
      e.top = "5px";
      e.zIndex = "1";
      e.width = "15px";
      e.height = "42px";
      e.backgroundPosition = "-75px -5px";
      e.WebkitTransform = e.transform = "scaleX(-1)";
      this._compass = this._createButton();
      this._compass.title = "恢复正北方向";
      e = this._compass.style;
      e.left = "19px";
      e.top = "4px";
      e.width = "14px";
      e.height = "44px";
      e.backgroundPosition = "-56px -4px";
      e.WebkitTransform = e.transform = "rotate(0deg)";
      this._div.appendChild(this._rotateCCW);
      this._div.appendChild(this._compass);
      this._div.appendChild(this._rotateCW);
      this._domRendered = true
    },
    _createButton: function () {
      var e = S("button");
      var i = e.style;
      i.position = "absolute";
      i.outline = "none";
      i.border = "none";
      i.background = "url(" + this._imgPath + ") no-repeat";
      i.backgroundSize = "266px auto";
      i.cursor = "pointer";
      return e
    },
    _render: function () {
      this._outContainer.appendChild(this._div)
    },
    enable: function () {
      this._enabled = true;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = "pointer";
        this._rotateCCW.style.opacity = 1;
        this._rotateCW.style.cursor = "pointer";
        this._rotateCW.style.opacity = 1;
        this._compass.style.cursor = "pointer";
        this._compass.style.opacity = 1
      }
    },
    disable: function () {
      this._enabled = false;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = "";
        this._rotateCCW.style.opacity = 0.4;
        this._rotateCW.style.cursor = "";
        this._rotateCW.style.opacity = 0.4;
        this._compass.style.cursor = "";
        this._compass.style.opacity = 0.4
      }
    },
    _bindDom: function () {
      eK(this._div, ["mousedown", "click", "dblclick"]);
      var i = this._map;
      var e = this;
      this._rotateCW.addEventListener("click", function () {
        if (e._isOperating || e._enabled === false) {
          return
        }
        if (e._target.getLock()) {
          return
        }
        if (e._target.getHeading() === 360) {
          e._target.setHeading(0)
        }
        e._target.setLock(true);
        e._target.setHeading(e._target.getHeading() + 90, e._setHeadingOptions);
        i.fire(new bb("onrotatecwclick"))
      }, false);
      this._rotateCCW.addEventListener("click", function () {
        if (e._isOperating || e._enabled === false) {
          return
        }
        if (e._target.getLock()) {
          return
        }
        if (e._target.getHeading() === -360) {
          e._target.setHeading(0)
        }
        e._target.setLock(true);
        e._target.setHeading(e._target.getHeading() - 90, e._setHeadingOptions);
        i.fire(new bb("onrotateccwclick"))
      }, false);
      this._rotateCW.addEventListener("mouseover", function () {
        if (e._enabled === false) {
          return
        }
        this.style.backgroundPosition = "-89px -5px"
      }, false);
      this._rotateCW.addEventListener("mouseout", function () {
        if (e._enabled === false) {
          return
        }
        this.style.backgroundPosition = "-75px -5px"
      }, false);
      this._rotateCCW.addEventListener("mouseover", function () {
        if (e._enabled === false) {
          return
        }
        this.style.backgroundPosition = "-89px -5px"
      }, false);
      this._rotateCCW.addEventListener("mouseout", function () {
        if (e._enabled === false) {
          return
        }
        this.style.backgroundPosition = "-75px -5px"
      }, false);
      this._compass.addEventListener("click", function () {
        if (e._isOperating || e._enabled === false) {
          return
        }
        if (e._target.getLock()) {
          return
        }
        e._target.setLock(true);
        var T = false;
        if (e._target.getTilt() !== 0) {
          T = true;
          e._target.setTilt(0, e._setHeadingOptions)
        }
        if (e._target.getHeading() % 360 !== 0) {
          T = true;
          e._target.resetHeading(e._setHeadingOptions)
        }
        if (!T) {
          e._target.setLock(false)
        }
        i.fire(new bb("oncompassclick"))
      }, false)
    },
    _bind: function () {
      var e = this;
      this._bindTarget(this._target);
      if (this._map._renderType === "webgl") {
        this._map.addEventListener("maptypechange", function (i) {
          if (this.mapType === "B_EARTH_MAP") {
            e._target = e._map._earth
          } else {
            e._target = e._map
          }
          e._bindTarget(e._target);
          e._checkEnable()
        })
      }
    },
    _bindTarget: function (i) {
      if (i === this._map && this._mapBinded) {
        return
      }
      if (i === this._map._earth && this._earthBinded) {
        return
      }
      var e = this;
      i.addEventListener("heading_changed", function (T) {
        e._updateUI()
      });
      i.addEventListener("animation_start", function (T) {
        e._isOperating = true
      });
      i.addEventListener("animation_end", function (T) {
        e._isOperating = false
      });
      i.on("load", function () {
        e._checkEnable()
      });
      i.on("zoom_changed", function () {
        e._checkEnable()
      });
      if (i === this._map) {
        this._mapBinded = true
      } else {
        this._earthBinded = true
      }
    },
    _updateUI: function () {
      var e = this._target.getHeading();
      var i = this._compass.style;
      i.WebkitTransform = i.transform = "rotate(" + e + "deg)"
    },
    hide: function () {
      this._div.style.display = "none"
    },
    show: function () {
      this._div.style.display = "block"
    }
  });

  function es(T, i) {
    this._map = T;
    this._target = T;
    var hR = T.temp.originMapType || T.mapType;
    if (hR === "B_EARTH_MAP" && T._earth) {
      this._target = T._earth
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a6() >= 1.5 ? 2 : 1;
    this._imgPath = e3.imgPath + "gl-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
    this._enabled = true;
    var e = this;
    this._setTiltOptions = {
      callback: function () {
        e._target.setLock(false)
      }
    };
    this._init()
  }
  C.extend(es.prototype, {
    _init: function () {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._checkEnable()
    },
    _checkEnable: function () {
      if (this._target.getZoom() >= this._target._enableTiltZoom) {
        this.enable()
      } else {
        this.disable()
      }
    },
    _createDom: function () {
      var e = this._div = S("button");
      e.title = "倾斜";
      var i = e.style;
      i.position = "absolute";
      i.zIndex = 5;
      i.outline = "none";
      i.border = "none";
      i.cursor = "pointer";
      i.width = "26px";
      i.height = "26px";
      i.top = "56px";
      i.right = "13px";
      i.background = "url(" + this._imgPath + ") no-repeat #fff";
      i.backgroundSize = "266px auto";
      i.backgroundPosition = "-110px 1px";
      i.boxShadow = "1px 2px 1px rgba(0, 0, 0, 0.15)"
    },
    enable: function () {
      this._enabled = true;
      if (this._div) {
        this._div.style.cursor = "pointer"
      }
      this._updateUI()
    },
    disable: function () {
      this._enabled = false;
      if (this._div) {
        this._div.style.cursor = ""
      }
      this._updateUI()
    },
    _render: function () {
      this._outContainer.appendChild(this._div)
    },
    _bindDom: function () {
      var e = this;
      this._div.addEventListener("mousedown", function (hR) {
        if (!e._enabled) {
          return
        }
        if (e._target.getLock()) {
          return
        }
        var i = e._target.getTilt();
        var T;
        if (i === e._map.getCurrentMaxTilt()) {
          T = "out"
        } else {
          if (i === 0) {
            T = "in"
          } else {
            T = e._preTrend ? e._preTrend : "in"
          }
        }
        e._curTrend = T;
        e._clickTimer = setTimeout(function () {
          e._map.fire(new bb("ontiltmsdown"));
          e._tiltAni = new o({
            duration: 9999999,
            render: function (hS) {
              i = e._target.getTilt();
              if (T === "in" && i < e._map.getCurrentMaxTilt()) {
                e._target.setTilt(i + 1, {
                  noAnimation: true
                })
              } else {
                if (T === "out" && i > 0) {
                  e._target.setTilt(i - 1, {
                    noAnimation: true
                  })
                }
              }
            },
            finish: function () {
              e._tiltAni = null
            }
          });
          e._clickTimer = null
        }, 200);
        hR.stopPropagation()
      }, false);
      this._div.addEventListener("mouseup", function (i) {
        if (!e._enabled) {
          return
        }
        if (e._tiltAni) {
          e._tiltAni.stop()
        }
        e._preTrend = e._curTrend
      }, false);
      this._div.addEventListener("click", function (hR) {
        if (!e._enabled) {
          return
        }
        if (!e._clickTimer) {
          return
        }
        if (e._target.getLock()) {
          return
        }
        clearTimeout(e._clickTimer);
        e._map.fire(new bb("ontiltclick"));
        var i = e._target.getTilt();
        e._target.setLock(true);
        hR.stopPropagation();
        var T = e._map.getCurrentMaxTilt();
        if (e._curTrend === "in") {
          e._target.setTilt(T, e._setTiltOptions)
        } else {
          if (e._curTrend === "out") {
            e._target.setTilt(0, e._setTiltOptions)
          } else {
            if (i < T) {
              e._target.setTilt(T, e._setTiltOptions)
            } else {
              e._target.setTilt(0, e._setTiltOptions)
            }
          }
        }
      }, false);
      this._div.addEventListener("mouseover", function (i) {
        if (!e._enabled) {
          return
        }
        e._mouseOver = true;
        e._updateUI()
      }, false);
      this._div.addEventListener("mouseout", function (i) {
        if (!e._enabled) {
          return
        }
        e._mouseOver = false;
        e._updateUI()
      }, false);
      eK(this._div, ["mousedown", "click", "dblclick"])
    },
    _bind: function () {
      var e = this;
      var i = this._map;
      this._bindTarget(this._target);
      if (this._map._renderType === "webgl") {
        this._map.addEventListener("maptypechange", function (T) {
          if (this.mapType === "B_EARTH_MAP") {
            e._target = e._map._earth
          } else {
            e._target = e._map
          }
          e._bindTarget(e._target);
          e._checkEnable()
        })
      }
    },
    _bindTarget: function (i) {
      if (i === this._map && this._mapBinded) {
        return
      }
      if (i === this._map._earth && this._earthBinded) {
        return
      }
      var e = this;
      i.on("load", function () {
        e._checkEnable()
      });
      i.on("zoom_changed", function () {
        e._checkEnable()
      });
      i.on("tilt_changed", function () {
        e._updateUI()
      });
      if (i === this._map) {
        this._mapBinded = true
      } else {
        this._earthBinded = true
      }
    },
    _updateUI: function () {
      var T = this._target.getTilt();
      var i = 0;
      var hR = 0;
      var e = 0;
      if (T > 0) {
        i = 78
      }
      if (this._mouseOver) {
        e = 52
      }
      if (this._enabled === false) {
        hR = 26;
        e = 0;
        i = 0
      }
      var hS = "-" + (110 + i + hR + e) + "px 1px";
      this._div && (this._div.style.backgroundPosition = hS);
      if (this._enabled) {
        if (T > 0) {
          this._div && (this._div.title = "恢复")
        } else {
          this._div && (this._div.title = "倾斜")
        }
      } else {
        this._div && (this._div.title = "请放大地图后操作")
      }
    },
    hide: function () {
      this._div.style.display = "none"
    },
    show: function () {
      this._div.style.display = "block"
    }
  });

  function cf(i) {
    ed.call(this);
    this._opts = {
      container: null,
      cursor: "default"
    };
    this._opts = C.extend(this._opts, i);
    this._type = "contextmenu";
    this._map = null;
    this._container;
    this._left = 0;
    this._top = 0;
    this._items = [];
    this._rItems = [];
    this._dividers = [];
    this._enable = true;
    this.curPixel = null;
    this.curPoint = null;
    this._isOpen = false;
    var e = this;
    ea.load("menu", function () {
      e._draw()
    })
  }
  cf.inherits(ed, "ContextMenu");
  C.extend(cf.prototype, {
    initialize: function (e) {
      this._map = e
    },
    remove: function () {
      this._map = null
    },
    addItem: function (hS, e) {
      if (!hS || hS._type != "menuitem" || hS._text == "" || hS._width <= 0) {
        return
      }
      for (var hR = 0, T = this._items.length; hR < T; hR++) {
        if (this._items[hR] === hS) {
          return
        }
      }
      if (e === undefined || e > this._items.length - 1) {
        e = -1
      }
      hS._insertIndex = e;
      if (e === -1) {
        this._items.push(hS);
        this._rItems.push(hS)
      } else {
        this._items.splice(e, 0, hS);
        this._rItems.splice(e, 0, hS)
      }
    },
    removeItem: function (hR) {
      if (!hR || hR._type != "menuitem") {
        return
      }
      for (var T = 0, e = this._items.length; T < e; T++) {
        if (this._items[T] === hR) {
          this._items[T].remove();
          this._items.splice(T, 1);
          delete hR._insertIndex;
          e--
        }
      }
      for (var T = 0, e = this._rItems.length; T < e; T++) {
        if (this._rItems[T] === hR) {
          this._rItems[T].remove();
          this._rItems.splice(T, 1);
          delete hR._insertIndex;
          e--
        }
      }
    },
    addSeparator: function (e) {
      if (e === undefined || e > this._items.length - 1) {
        e = -1
      }
      var i = {
        _type: "divider",
        _dIndex: this._dividers.length,
        _insertIndex: e
      };
      this._dividers.push({
        dom: null
      });
      if (e === -1) {
        this._items.push(i)
      } else {
        this._items.splice(e, 0, i)
      }
    },
    removeSeparator: function (T) {
      if (!this._dividers[T]) {
        return
      }
      for (var hR = 0, e = this._items.length; hR < e; hR++) {
        if (this._items[hR] && this._items[hR]._type == "divider" && this._items[hR]._dIndex == T) {
          this._items.splice(hR, 1);
          e--
        }
        if (this._items[hR] && this._items[hR]._type == "divider" && this._items[hR]._dIndex > T) {
          this._items[hR]._dIndex--
        }
      }
      this._dividers.splice(T, 1)
    },
    getDom: function () {
      return this._container
    },
    show: function () {
      if (this._isOpen == true) {
        return
      }
      this._isOpen = true
    },
    hide: function () {
      if (this._isOpen == false) {
        return
      }
      this._isOpen = false
    },
    setCursor: function (e) {
      if (!e) {
        return
      }
      this._opts.cursor = e
    },
    getItem: function (e) {
      return this._rItems[e]
    },
    enable: function () {
      this._enable = true
    },
    disable: function () {
      this._enable = false
    }
  });

  function fy(T, hR, i) {
    if (!T || !hR || typeof hR != "function") {
      return
    }
    ed.call(this);
    this._opts = {
      width: 100,
      id: ""
    };
    i = i || {};
    this._opts.width = (i.width * 1) ? i.width : 100;
    this._opts.id = i.id ? i.id : "";
    this._text = T + "";
    this._callback = hR;
    this._map = null;
    this._type = "menuitem";
    this._contextmenu = null;
    this._container = null;
    this._enabled = true;
    var e = this;
    ea.load("menu", function () {
      e._draw()
    })
  }
  fy.inherits(ed, "MenuItem");
  C.extend(fy.prototype, {
    initialize: function (e, i) {
      this._map = e;
      this._contextmenu = i
    },
    remove: function () {
      this._contextmenu = null;
      this._map = null
    },
    setText: function (e) {
      if (!e) {
        return
      }
      this._text = e + ""
    },
    getDom: function () {
      return this._container
    },
    enable: function () {
      this._enabled = true
    },
    disable: function () {
      this._enabled = false
    }
  });

  function dS(e, i) {
    this.setSouthWest(e);
    this.setNorthEast(i)
  }
  C.extend(dS.prototype, {
    isEmpty: function () {
      return this.sw === null && this.ne === null
    },
    equals: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false
      }
      return this.sw.equals(e.sw) && this.ne.equals(e.ne)
    },
    containsBounds: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false
      }
      return (e.sw.lng > this.sw.lng && e.ne.lng < this.ne.lng && e.sw.lat > this.sw.lat && e.ne.lat < this.ne.lat)
    },
    getCenter: function () {
      if (this.isEmpty()) {
        return null
      }
      return new hs((this.sw.lng + this.ne.lng) / 2, (this.sw.lat + this.ne.lat) / 2)
    },
    intersects: function (T) {
      if (!T || T.isEmpty() || this.isEmpty()) {
        return null
      }
      if (Math.max(T.sw.lng, T.ne.lng) < Math.min(this.sw.lng, this.ne.lng) || Math.min(T.sw.lng, T.ne.lng) > Math.max(this.sw.lng, this.ne.lng) || Math.max(T.sw.lat, T.ne.lat) < Math.min(this.sw.lat, this.ne.lat) || Math.min(T.sw.lat, T.ne.lat) > Math.max(this.sw.lat, this.ne.lat)) {
        return null
      }
      var hS = Math.max(this.sw.lng, T.sw.lng);
      var i = Math.min(this.ne.lng, T.ne.lng);
      var hR = Math.max(this.sw.lat, T.sw.lat);
      var e = Math.min(this.ne.lat, T.ne.lat);
      return new dS(new hs(hS, hR), new hs(i, e))
    },
    setMinMax: function () {
      this.minX = this.sw ? this.sw.lng : null;
      this.minY = this.sw ? this.sw.lat : null;
      this.maxX = this.ne ? this.ne.lng : null;
      this.maxY = this.ne ? this.ne.lat : null
    },
    containsPoint: function (e) {
      if (!e) {
        return
      }
      return (e.lng >= this.sw.lng && e.lng <= this.ne.lng && e.lat >= this.sw.lat && e.lat <= this.ne.lat)
    },
    extend: function (e) {
      if (!e) {
        return
      }
      var i = e.lng;
      var T = e.lat;
      if (!this.sw) {
        this.sw = e.clone()
      }
      if (!this.ne) {
        this.ne = e.clone()
      }
      if (this.sw.lng > i) {
        this.sw.lng = i
      }
      if (this.ne.lng < i) {
        this.ne.lng = i
      }
      if (this.sw.lat > T) {
        this.sw.lat = T
      }
      if (this.ne.lat < T) {
        this.ne.lat = T
      }
    },
    getMin: function () {
      return this.sw
    },
    getMax: function () {
      return this.ne
    },
    getSouthWest: function () {
      return this.sw
    },
    getNorthEast: function () {
      return this.ne
    },
    setSouthWest: function (e) {
      this.sw = e ? e.clone() : null
    },
    setNorthEast: function (e) {
      this.ne = e ? e.clone() : null
    },
    clone: function () {
      return new dS(this.sw, this.ne)
    },
    toSpan: function () {
      if (this.isEmpty()) {
        return new d9(0, 0)
      }
      return new d9(Math.abs(this.ne.lng - this.sw.lng), Math.abs(this.ne.lat - this.sw.lat))
    },
    div: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return 0
      }
      return ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) / ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
    },
    makeNormalizedPoint: function (e) {
      this.normalizedTopLeft = this.pointTopLeft.clone();
      this.normalizedTopRight = this.pointTopRight.clone();
      this.normalizedBottomRight = this.pointBottomRight.clone();
      this.normalizedBottomLeft = this.pointBottomLeft.clone();
      while (e < 0) {
        e += 360
      }
      e = e % 360;
      if (e >= 0 && e < 90 || e >= 270 && e < 360) {
        if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
          this.normalizedTopRight.lng += c8.WORLD_SIZE_MC
        }
        if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
          this.normalizedBottomRight.lng += c8.WORLD_SIZE_MC
        }
      } else {
        if (this.normalizedTopLeft.lng < this.normalizedTopRight.lng) {
          this.normalizedTopLeft.lng += c8.WORLD_SIZE_MC
        }
        if (this.normalizedBottomLeft.lng < this.normalizedBottomRight.lng) {
          this.normalizedBottomLeft.lng += c8.WORLD_SIZE_MC
        }
      }
    },
    toString: function () {
      return "Bounds"
    }
  });

  function hs(e, i) {
    if (isNaN(e)) {
      e = g1(e);
      e = isNaN(e) ? 0 : e
    }
    if (typeof e === "string") {
      e = parseFloat(e)
    }
    if (isNaN(i)) {
      i = g1(i);
      i = isNaN(i) ? 0 : i
    }
    if (typeof i === "string") {
      i = parseFloat(i)
    }
    this.lng = e;
    this.lat = i
  }
  hs.prototype.equals = function (i) {
    if (!i) {
      return false
    }
    var hR = Math.abs(this.lat - i.lat);
    var T = Math.abs(this.lng - i.lng);
    var e = 1e-8;
    if (hR < e && T < e) {
      return true
    }
    return false
  };
  hs.prototype.clone = function () {
    return new hs(this.lng, this.lat)
  };
  hs.prototype.add = function (e) {
    return new hs(this.lng + e.lng, this.lat + e.lat)
  };
  hs.prototype.sub = function (e) {
    return new hs(this.lng - e.lng, this.lat - e.lat)
  };
  hs.prototype.mult = function (e) {
    return new hs(this.lng * e, this.lat * e)
  };
  hs.prototype.div = function (e) {
    return new hs(this.lng / e, this.lat / e)
  };
  hs.prototype.mag = function () {
    return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
  };
  hs.prototype.toString = function () {
    return "Point"
  };

  function en() {}
  C.extend(en, {
    EARTHRADIUS: 6370996.81,
    MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    LLBAND: [86, 60, 45, 30, 15, 0],
    MC2LL: [
      [1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2],
      [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
      [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
      [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
      [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
      [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]
    ],
    LL2MC: [
      [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
      [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
      [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
      [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
      [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
      [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
    ],
    getDistanceByMC: function (hT, hR) {
      if (!hT || !hR) {
        return 0
      }
      var i;
      var hS;
      var e;
      var T;
      hT = this.convertMC2LL(hT);
      if (!hT) {
        return 0
      }
      i = dK(hT.lng);
      hS = dK(hT.lat);
      hR = this.convertMC2LL(hR);
      if (!hR) {
        return 0
      }
      e = dK(hR.lng);
      T = dK(hR.lat);
      return this.getDistance(i, e, hS, T)
    },
    getDistanceByLL: function (hT, hR) {
      if (!hT || !hR) {
        return 0
      }
      hT.lng = this.getLoop(hT.lng, -180, 180);
      hT.lat = this.getRange(hT.lat, -80, 84);
      hR.lng = this.getLoop(hR.lng, -180, 180);
      hR.lat = this.getRange(hR.lat, -80, 84);
      var i;
      var e;
      var hS;
      var T;
      i = dK(hT.lng);
      hS = dK(hT.lat);
      e = dK(hR.lng);
      T = dK(hR.lat);
      return this.getDistance(i, e, hS, T)
    },
    proximityCovertMC2LL: function (e) {
      if (e === null) {
        return e
      }
      if (e.lng < 180 && e.lng > -180 && e.lat < 90 && e.lat > -90) {
        return e
      }
      return this.convertMC2LL(e)
    },
    convertMC2LL: function (e) {
      if (e === null) {
        return e
      }
      if (!e) {
        return new hs(0, 0)
      }
      var T;
      var hS;
      T = new hs(Math.abs(e.lng), Math.abs(e.lat));
      for (var hR = 0; hR < this.MCBAND.length; hR++) {
        if (T.lat >= this.MCBAND[hR]) {
          hS = this.MC2LL[hR];
          break
        }
      }
      var hT = this.convertor(e, hS);
      return new c4(hT.lat, hT.lng)
    },
    convertLL2MC: function (hU) {
      if (!hU) {
        return new hs(0, 0)
      }
      var hW = hU.lat;
      var hR = hU.lng;
      hR = this.getLoop(hU.lng, -180, 180);
      hW = fF(hW, -85, 85);
      var hT;
      for (var hS = 0; hS < this.LLBAND.length; hS++) {
        if (hW >= this.LLBAND[hS]) {
          hT = this.LL2MC[hS];
          break
        }
      }
      if (!hT) {
        for (hS = 0; hS < this.LLBAND.length; hS++) {
          if (hW <= -this.LLBAND[hS]) {
            hT = this.LL2MC[hS];
            break
          }
        }
      }
      var T = new hs(hR, hW);
      var hV = this.convertor(T, hT);
      var e = new hs(hV.lng, hV.lat);
      e.latLng = new c4(hU.lat, hU.lng);
      return e
    },
    convertor: function (T, hR) {
      if (!T || !hR) {
        return
      }
      var e = hR[0] + hR[1] * Math.abs(T.lng);
      var i = Math.abs(T.lat) / hR[9];
      var hS = hR[2] + hR[3] * i + hR[4] * i * i + hR[5] * i * i * i + hR[6] * i * i * i * i + hR[7] * i * i * i * i * i + hR[8] * i * i * i * i * i * i;
      e *= (T.lng < 0 ? -1 : 1);
      hS *= (T.lat < 0 ? -1 : 1);
      return new hs(e, hS)
    },
    getDistance: function (i, e, hR, T) {
      return this.EARTHRADIUS * Math.acos((Math.sin(hR) * Math.sin(T) + Math.cos(hR) * Math.cos(T) * Math.cos(e - i)))
    },
    getRange: function (T, i, e) {
      if (i != null) {
        T = Math.max(T, i)
      }
      if (e != null) {
        T = Math.min(T, e)
      }
      return T
    },
    getLoop: function (T, i, e) {
      while (T > e) {
        T -= e - i
      }
      while (T < i) {
        T += e - i
      }
      return T
    }
  });
  C.extend(en.prototype, {
    lnglatToMercator: function (e) {
      return en.convertLL2MC(e)
    },
    lngLatToPoint: function (e) {
      var i = en.convertLL2MC(e);
      return new ej(i.lng, i.lat)
    },
    mercatorToLnglat: function (e) {
      return en.convertMC2LL(e)
    },
    pointToLngLat: function (i) {
      var e = new hs(i.x, i.y);
      var T = en.convertMC2LL(e);
      return new c4(T.lat, T.lng)
    },
    pointToPixel: function (i, hT, hS, hR) {
      if (!i) {
        return
      }
      i = this.lnglatToMercator(i);
      var T = this.getZoomUnits(hT);
      var e = Math.round((i.lng - hS.lng) / T + hR.width / 2);
      var hU = Math.round((hS.lat - i.lat) / T + hR.height / 2);
      return new ej(e, hU)
    },
    mercatorToPixel: function (hT, hS, hR, T) {
      if (!hT) {
        return
      }
      var i = this.getZoomUnits(hS);
      var e = Math.round((hT.lng - hR.lng) / i + T.width / 2);
      var hU = Math.round((hR.lat - hT.lat) / i + T.height / 2);
      return new ej(e, hU)
    },
    pixelToPoint: function (hR, hU, hT, hS) {
      if (!hR) {
        return
      }
      var i = this.getZoomUnits(hU);
      var T = hT.lng + i * (hR.x - hS.width / 2);
      var hV = hT.lat - i * (hR.y - hS.height / 2);
      var e = new hs(T, hV);
      return this.mercatorToLnglat(e)
    },
    getZoomUnits: function (e) {
      return Math.pow(2, (18 - e))
    },
    setCoordType: function (e) {
      this.coordsType = e
    }
  });

  function c4(i, e) {
    if (i < -90) {
      i = -90
    } else {
      if (i > 90) {
        i = 90
      }
    }
    while (e < -180) {
      e += 360
    }
    while (e > 180) {
      e -= 360
    }
    e = e || 0;
    i = i || 0;
    hs.call(this, e, i)
  }
  c4.inherits(hs, "LatLng");
  C.extend(c4.prototype, {
    equals: function (e) {
      return (this.lat === e.lat && this.lng === e.lng)
    },
    clone: function () {
      return new c4(this.lat, this.lng)
    },
    add: function (e) {
      return new c4(this.lng + e.lng, this.lat + e.lat)
    },
    sub: function (e) {
      return new c4(this.lat - e.lat, this.lng - e.lng)
    },
    mult: function (e) {
      return new c4(this.lng * e, this.lat * e)
    },
    div: function (e) {
      return new c4(this.lng / e, this.lat / e)
    },
    mag: function () {
      return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
    },
    getLngSpan: function (e) {
      var i = this.lng;
      var T = Math.abs(e - i);
      if (T > 180) {
        T = 360 - T
      }
      return T
    },
    toString: function () {
      return "LatLng"
    }
  });

  function eG(e, i) {
    if (e && !i) {
      i = e
    }
    this._sw = this._ne = null;
    this._swLng = this._swLat = null;
    this._neLng = this._neLat = null;
    if (e) {
      this._sw = new c4(e.lat, e.lng);
      this._ne = new c4(i.lat, i.lng);
      this._swLng = e.lng;
      this._swLat = e.lat;
      this._neLng = i.lng;
      this._neLat = i.lat
    }
  }
  C.extend(eG.prototype, {
    isEmpty: function () {
      return !this._sw || !this._ne
    },
    equals: function (e) {
      if (this.isEmpty()) {
        return false
      }
      return this.getSouthWest().equals(e.getSouthWest()) && this.getNorthEast().equals(e.getNorthEast())
    },
    getSouthWest: function () {
      return this._sw
    },
    getNorthEast: function () {
      return this._ne
    },
    containsBounds: function (e) {
      if (this.isEmpty() || e.isEmpty()) {
        return false
      }
      return (e._swLng > this._swLng && e._neLng < this._neLng && e._swLat > this._swLat && e._neLat < this._neLat)
    },
    getCenter: function () {
      if (this.isEmpty()) {
        return null
      }
      return new c4((this._swLat + this._neLat) / 2, (this._swLng + this._neLng) / 2)
    },
    intersects: function (T) {
      if (Math.max(T._swLng, T._neLng) < Math.min(this._swLng, this._neLng) || Math.min(T._swLng, T._neLng) > Math.max(this._swLng, this._neLng) || Math.max(T._swLat, T._neLat) < Math.min(this._swLat, this._neLat) || Math.min(T._swLat, T._neLat) > Math.max(this._swLat, this._neLat)) {
        return false
      }
      var hS = Math.max(this._swLng, T._swLng);
      var i = Math.min(this._neLng, T._neLng);
      var hR = Math.max(this._swLat, T._swLat);
      var e = Math.min(this._neLat, T._neLat);
      this._sw = new c4(hR, hS);
      this._ne = new c4(e, i);
      this._swLng = hS;
      this._swLat = hR;
      this._neLng = i;
      this._neLat = e;
      return true
    },
    containsPoint: function (e) {
      if (this.isEmpty()) {
        return false
      }
      return (e.lng >= this._swLng && e.lng <= this._neLng && e.lat >= this._swLat && e.lat <= this._neLat)
    },
    extend: function (e) {
      var i = e.lng;
      var T = e.lat;
      if (!this._sw) {
        this._sw = new c4(0, 0)
      }
      if (!this._ne) {
        this._ne = new c4(0, 0)
      }
      if (!this._swLng || this._swLng > i) {
        this._sw.lng = this._swLng = i
      }
      if (!this._neLng || this._neLng < i) {
        this._ne.lng = this._neLng = i
      }
      if (!this._swLat || this._swLat > T) {
        this._sw.lat = this._swLat = T
      }
      if (!this._neLat || this._neLat < T) {
        this._ne.lat = this._neLat = T
      }
    },
    toSpan: function () {
      if (this.isEmpty()) {
        return new c4(0, 0)
      }
      return new c4(Math.abs(this._neLat - this._swLat), Math.abs(this._neLng - this._swLng))
    },
    union: function (i) {
      if (i.isEmpty()) {
        return false
      }
      var e = i.getSouthWest();
      var T = i.getNorthEast();
      if (this._swLat > e.lat) {
        this._swLat = e.lat
      }
      if (this._swLng > e.lng) {
        this._swLng = e.lng
      }
      if (this._neLat < T.lat) {
        this._neLat = T.lat
      }
      if (this._neLng < T.lng) {
        this._neLng = T.lng
      }
      this._sw = new c4(this._swLat, this._swLng);
      this._ne = new c4(this._neLat, this._neLng);
      return true
    },
    toString: function () {
      return this._swLat + ", " + this._swLng + ", " + this._neLat + ", " + this._neLng
    }
  });
  window.COORDINATES_WGS84 = 1;
  window.COORDINATES_WGS84_MC = 2;
  window.COORDINATES_GCJ02 = 3;
  window.COORDINATES_GCJ02_MC = 4;
  window.COORDINATES_BD09 = 5;
  window.COORDINATES_BD09_MC = 6;
  window.COORDINATES_MAPBAR = 7;
  window.COORDINATES_51 = 8;

  function az() {}
  az.inherits(ed, "Convertor");
  C.extend(az.prototype, {
    translate: function (i, hS, hR, T) {
      hS = hS || 1;
      hR = hR || 5;
      if (i.length > 10) {
        T && T({
          status: 25
        });
        return
      }
      var e = e3.apiHost + "/geoconv/v1/?coords=";
      C.each(i, function (hT) {
        e += hT.lng + "," + hT.lat + ";"
      });
      e = e.replace(/;$/gi, "");
      e = e + "&from=" + hS + "&to=" + hR + "&ak=" + ge;
      D.request(e, function (hU) {
        if (hU.status === 0) {
          var hT = [];
          C.each(hU.result, function (hV) {
            hT.push(new hs(hV.x, hV.y))
          });
          delete hU.result;
          hU.points = hT
        }
        T && T(hU)
      })
    }
  });
  var dU = {
    idle: 0,
    freeze: 1,
    zooming: 2,
    dragging: 3,
    moving: 4,
    readyToDrag: 5,
    readyToPinch: 6,
    pinching: 7,
    stdMapCtrlDrag: 8,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    arrowOpCodes: {
      37: 1,
      38: 2,
      39: 4,
      40: 8
    }
  };
  var eh = {
    _map: null,
    _html: "<div class='BMap_opMask' unselectable='on'></div>",
    _maskElement: null,
    _cursor: "default",
    inUse: false,
    show: function (e) {
      if (!this._map) {
        this._map = e
      }
      this.inUse = true;
      if (!this._maskElement) {
        this._createMask(e)
      }
      this._maskElement.style.display = "block"
    },
    _createMask: function (i) {
      if (!this._map) {
        this._map = i
      }
      if (!this._map) {
        return
      }
      var e = this._maskElement = dI(this._map.container, this._html);
      C.on(e, "mouseup", function (T) {
        if (T.button == 2) {
          db(T)
        }
      });
      C.on(e, "contextmenu", db);
      e.style.display = "none"
    },
    getDrawPoint: function (hR, hU, hS) {
      hR = window.event || hR;
      var i = hR.offsetX || hR.layerX || 0;
      var hT = parseInt(hR.offsetY) || parseInt(hR.layerY) || 0;
      var T = hR.target || hR.srcElement;
      if (T != eh.getDom(this._map) && hU == true) {
        while (T && T != this._map.container) {
          if (!(T.clientWidth == 0 && T.clientHeight == 0 && T.offsetParent && T.offsetParent.nodeName.toLowerCase() == "td")) {
            i += T.offsetLeft;
            hT += T.offsetTop
          }
          T = T.offsetParent
        }
      }
      if (T != eh.getDom(this._map) && T != this._map.container) {
        return
      }
      if (typeof i === "undefined" || typeof hT === "undefined") {
        return
      }
      if (isNaN(i) || isNaN(hT)) {
        return
      }
      if (hS) {
        i = i + hS.x;
        hT = hT + hS.y
      }
      return this._map.pixelToPointIn(new ej(i, hT))
    },
    hide: function () {
      if (!this._map) {
        return
      }
      this.inUse = false;
      if (this._maskElement) {
        this._maskElement.style.display = "none"
      }
    },
    getDom: function (e) {
      if (!this._maskElement) {
        this._createMask(e)
      }
      return this._maskElement
    },
    setCursor: function (e) {
      this._cursor = e || "default";
      if (this._maskElement) {
        this._maskElement.style.cursor = this._cursor
      }
    }
  };

  function bl() {
    this._type = "overlay"
  }
  bl.inherits(C.BaseClass, "Overlay");
  bl.getZIndex = function (i, e) {
    i = i * 1;
    if (!i) {
      return 0
    }
    if (e) {
      i = en.convertMC2LL(new hs(0, i)).lat
    }
    return (i * -100000) << 1
  };
  C.extend(bl.prototype, {
    _i: function (e) {
      this._map = e;
      if (!this.domElement && bV(this.initialize)) {
        this.domElement = this.initialize(e);
        if (this.domElement) {
          this.domElement.style.WebkitUserSelect = "none"
        }
      }
      this.draw()
    },
    initialize: function (e) {
      throw "initialize方法未实现"
    },
    draw: function () {
      throw "draw方法未实现"
    },
    remove: function () {
      if (this.domElement && this.domElement.parentNode) {
        this.domElement.parentNode.removeChild(this.domElement)
      }
      this.domElement = null;
      this.dispatchEvent(new bb("onremove"))
    },
    hide: function () {
      this._visible = false;
      C.hide(this.domElement)
    },
    show: function () {
      this._visible = true;
      C.show(this.domElement)
    },
    getMap: function () {
      return this._map
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this)
    }
  });

  function cV() {
    C.BaseClass.call(this);
    bl.call(this);
    this._visible = true;
    this._visibleInternal = true;
    this.infoWindow = null;
    this._dblclickTime = 0
  }
  cV.inherits(bl, "OverlayInternal");
  C.extend(cV.prototype, {
    initialize: function (e) {
      this.map = e;
      C.BaseClass.call(this, this.hashCode);
      return null
    },
    draw: function () {},
    remove: function () {
      this.decontrol();
      bl.prototype.remove.call(this)
    },
    hide: function () {
      this._visible = false
    },
    show: function () {
      this._visible = true
    },
    getDom: function () {
      return this.domElement
    },
    getContainer: function () {
      return this.domElement
    },
    setClassName: function () {},
    setConfig: function (i) {
      if (!i) {
        return
      }
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e]
        }
      }
    },
    getPoint: function (T, hR) {
      if (!T) {
        return this.point
      } else {
        var e = hR ? hR.width : 0;
        var hS = hR ? hR.height : 0;
        if (this.map) {
          var i = this.map.pointToPixelIn(this.point);
          if (this._config && this._config.offset) {
            i.x = i.x + this._config.offset.width + e;
            i.y = i.y + this._config.offset.height + hS
          } else {
            i.x = i.x + e;
            i.y = i.y + hS
          }
          return this.map.pixelToPointIn(i)
        }
      }
    },
    setZIndex: function (e) {
      this.zIndex = e
    },
    isVisible: function () {
      if (!this.domElement) {
        return false
      }
      return !!this._visible
    },
    enableMassClear: function () {
      this._config.enableMassClear = true
    },
    disableMassClear: function () {
      this._config.enableMassClear = false
    },
    showInternal: function () {
      this._visibleInternal = true
    },
    hideInternal: function (e) {
      this._visibleInternal = false;
      this._hideInternalReason = e
    }
  });

  function eX(e) {
    this.map = e;
    this._overlays = {};
    this._overlayArray = [];
    this._customOverlays = [];
    e._overlays = this._overlays;
    e._overlayArray = this._overlayArray;
    e._customOverlays = this._customOverlays;
    this._zoomingOrMoving = false;
    this._init()
  }
  eX.prototype._init = function () {
    if (this.map._renderType !== "webgl") {
      this._createOverlayContainers()
    } else {
      this._createWebGLOverlayContainers()
    }
    this._bind()
  };
  eX.prototype._createOverlayContainers = function () {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(e.platform, 50);
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
    if (e.isCanvasMap()) {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50)
    } else {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200)
    }
  };
  eX.prototype._createWebGLOverlayContainers = function () {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400)
  };
  eX.prototype._createOverlayDiv = function (e, hR) {
    var T = S("div");
    var i = T.style;
    i.position = "absolute";
    i.top = i.left = i.width = i.height = "0";
    i.zIndex = hR;
    e.appendChild(T);
    return T
  };
  eX.prototype._bind = function () {
    var hS = this.map;
    var hR = this;

    function i(hU) {
      hR.draw(hU)
    }
    if (hS._renderType !== "webgl") {
      hS.addEventListener("load", i);
      hS.addEventListener("moveend", i);
      hS.addEventListener("resize", i);
      hS.addEventListener("zoomend", i);
      hS.addEventListener("zooming_inner", i)
    } else {
      hS.on("update", i)
    }
    hS.addEventListener("zoomend", function (hU) {
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none"
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = ""
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw()
            }
          }
        }
      }
    });
    hS.addEventListener("oncenterandzoom", function (hU) {
      hR.draw(hU);
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none"
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = ""
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw()
            }
          }
        }
      }
    });
    hS.addEventListener("maptypechange", function (hU) {
      if (this.mapType === "B_EARTH_MAP") {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = "none"
        }
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none"
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = ""
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw()
            }
          }
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = "none"
        }
      } else {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = ""
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = ""
        }
        if (this.temp.overlayDiv.style.display === "none") {
          this.temp.overlayDiv.style.display = "";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = ""
          }
          if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
            this.temp.infoWin.redraw()
          }
        }
      }
      hR.draw(hU)
    });
    hS.on("earthstatuschange", function hT(hU) {
      hR.draw(hU)
    });
    hS.addEventListener("addoverlay", function (hY) {
      var hV = hY.target;
      if (hV instanceof cV) {
        if (!hR._overlays[hV.hashCode]) {
          hR._overlays[hV.hashCode] = hV;
          hR._overlayArray.push(hV)
        }
      } else {
        var hX = false;
        for (var hW = 0, hU = hR._customOverlays.length; hW < hU; hW++) {
          if (hR._customOverlays[hW] === hV) {
            hX = true;
            break
          }
        }
        if (!hX) {
          hR._customOverlays.push(hV)
        }
      }
    });
    hS.addEventListener("removeoverlay", function (hX) {
      var hV = hX.target;
      if (hV instanceof cV) {
        delete hR._overlays[hV.hashCode];
        for (var hW = 0; hW < hR._overlayArray.length; hW++) {
          if (hR._overlayArray[hW] === hV) {
            hR._overlayArray.splice(hW, 1);
            break
          }
        }
      } else {
        for (var hW = 0, hU = hR._customOverlays.length; hW < hU; hW++) {
          if (hR._customOverlays[hW] === hV) {
            hR._customOverlays.splice(hW, 1);
            break
          }
        }
      }
    });
    hS.addEventListener("clearoverlays", function (hW) {
      this.closeInfoWindow();
      this.closeSimpleInfoWindow();
      for (var hV in hR._overlays) {
        if (hR._overlays[hV]._config.enableMassClear) {
          this.removeOverlay(hR._overlays[hV])
        }
      }
      for (var hU = hR._customOverlays.length - 1; hU > 0; hU--) {
        if (hR._customOverlays[hU].enableMassClear !== false) {
          this.removeOverlay(hR._customOverlays[hU]);
          hR._customOverlays.splice(hU, 1)
        }
      }
    });
    hS.addEventListener("infowindowopen", function (hV) {
      var hU = this.infoWindow;
      if (hU) {
        C.hide(hU.popDom);
        C.hide(hU.shadowDom)
      }
    });

    function T() {
      if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
        if (hR._zoomingOrMoving === false) {
          this._panes.markerMouseTarget.style.display = "none";
          hR._zoomingOrMoving = true
        }
      }
    }

    function e(hW) {
      if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
        if (hR._zoomingOrMoving === true) {
          this._panes.markerMouseTarget.style.display = "";
          hR._zoomingOrMoving = false;
          for (var hV = 0; hV < hR._overlayArray.length; hV++) {
            var hU = hR._overlayArray[hV];
            if (hU instanceof dr === true) {
              hU.draw(hW)
            }
          }
        }
      }
    }
    hS.addEventListener("movestart", T);
    hS.addEventListener("moveend", e);
    hS.addEventListener("zoomstart", T);
    hS.addEventListener("zoomend", e);
    hS.addEventListener("animation_start", T);
    hS.addEventListener("animation_end", e);
    hS.addEventListener("displayoptions_changed", function (hU) {
      if (this._displayOptions.overlay === false) {
        this.temp.overlayDiv.style.display = "none"
      } else {
        this.temp.overlayDiv.style.display = ""
      }
    })
  };
  eX.prototype.draw = function (hU) {
    hU = hU || {};
    if (this.map.getMapType() === "B_EARTH_MAP") {
      for (var hS = 0; hS < this._overlayArray.length; hS++) {
        var T = this._overlayArray[hS];
        if (T instanceof w === true) {
          continue
        }
        if (this._zoomingOrMoving) {
          if (T instanceof dr === true) {
            continue
          }
        }
        T.draw(hU)
      }
    } else {
      for (var hS = 0, hR = this._overlayArray.length; hS < hR; hS++) {
        var T = this._overlayArray[hS];
        if (this._zoomingOrMoving && T instanceof dr === true) {
          continue
        }
        T.draw(hU)
      }
    }
    C.each(this._customOverlays, function (e) {
      e.draw(hU)
    });
    if (this.map.temp.infoWin) {
      this.map.temp.infoWin.setPosition(hU.center, hU.zoom)
    }
    if (this.map.getMapType() !== "B_EARTH_MAP" && this.map._renderType !== "webgl") {
      if (bo.DrawerSelector) {
        var hT = bo.DrawerSelector.getDrawer(this.map);
        hT.setPalette()
      }
    }
  };
  bo.register(function (e) {
    e._overlayMgr = new eX(e)
  });

  function w(e) {
    cV.call(this);
    this._config = {
      strokeColor: "#000",
      strokeWeight: 2,
      strokeOpacity: 1,
      strokeStyle: "solid",
      dashArray: null,
      strokeLineCap: "round",
      strokeLineJoin: "round",
      enableMassClear: true,
      getParseTolerance: null,
      getParseCacheIndex: null,
      enableParse: true,
      enableEditing: false,
      mouseOverTolerance: 5,
      geodesic: false,
      clip: true,
      texture: null,
      textureSize: null,
      textureZoomWithMap: false,
      textureRepeat: true
    };
    this.setConfig(e);
    if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
      this._config.strokeOpacity = 1
    }
    if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
      this._config.fillOpacity = 1
    }
    if (this._config.strokeStyle !== "solid" && this._config.strokeStyle !== "dashed" && this._config.strokeStyle !== "dotted") {
      this._config.strokeStyle = "solid"
    }
    this.domElement = null;
    this._bounds = new dS();
    this.points = [];
    this.greatCirclePoints = [];
    this._parseCache = [];
    this._holesCache = [];
    this._parseCacheGL = [];
    this._parseCacheGLRaw = [];
    this._areaCacheGL = [];
    this._strokeStyleInfoForGL = [
      []
    ];
    this._fillStyleInfoForGL = "";
    this.vertexMarkers = [];
    this._temp = {}
  }
  w.JOININDEX = {
    miter: 0,
    round: 1,
    bevel: 2
  };
  w.CAPINDEX = {
    round: 0,
    butt: 1,
    square: 2
  };
  w.inherits(cV, "Graph");
  w.getGraphPoints = function (i) {
    var e = [];
    if (!i || i.length === 0) {
      return e
    }
    if (typeof i === "string") {
      var T = i.split(";");
      C.each(T, function (hS) {
        var hR = hS.split(",");
        e.push(new hs(hR[0], hR[1]))
      })
    }
    if (i.constructor === Array && i.length > 0) {
      e = i
    }
    return e
  };
  w.parseTolerance = {
    0: [0.09, 0.005, 0.0001, 0.00001],
    1: [9000, 500, 20, 1]
  };
  C.extend(w.prototype, {
    initialize: function (e) {
      this.map = e;
      return null
    },
    draw: function () {},
    setPoints: function (e) {
      this._clearCache();
      this.points = w.getGraphPoints(e).slice(0);
      this._calcBounds()
    },
    setPathIn: function (e) {
      this.setPoints(e)
    },
    _calcBounds: function () {
      if (!this.points) {
        return
      }
      var e = this;
      e._bounds = new dS();
      if (!this.hasMultipleParts) {
        C.each(this.points, function (i) {
          e._bounds.extend(i)
        })
      } else {
        C.each(this.points, function (i) {
          C.each(i, function (T) {
            e._bounds.extend(T)
          })
        })
      }
    },
    getPoints: function () {
      return this.points
    },
    getPathIn: function () {
      return this.points
    },
    setPointAt: function (i, e) {
      if (!e || !this.points[i]) {
        return
      }
      this._clearCache();
      this.points[i] = new hs(e.lng, e.lat);
      this._calcBounds()
    },
    setPositionAt: function (i, e) {
      if (!e || !this.points[i]) {
        return
      }
      var T = en.convertLL2MC(e);
      this.setPointAt(i, T)
    },
    setOptions: function (i) {
      i = i || {};
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e]
        }
      }
    },
    setStrokeColor: function (e) {
      this._config.strokeColor = e
    },
    getStrokeColor: function () {
      return this._config.strokeColor
    },
    setStrokeLineCap: function (e) {
      this._config.strokeLineCap = e
    },
    getStrokeLineCap: function () {
      return this._config.strokeLineCap
    },
    setStrokeLineJoin: function (e) {
      this._config.strokeLineJoin = e
    },
    getStrokeLineJoin: function () {
      return this._config.strokeLineJoin
    },
    setStrokeWeight: function (e) {
      if (e > 0) {
        this._config.strokeWeight = e
      }
    },
    getStrokeWeight: function () {
      return this._config.strokeWeight
    },
    setStrokeOpacity: function (e) {
      if (!e || e > 1 || e < 0) {
        return
      }
      this._config.strokeOpacity = e
    },
    getStrokeOpacity: function () {
      return this._config.strokeOpacity
    },
    setFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return
      }
      this._config.fillOpacity = e
    },
    getFillOpacity: function () {
      return this._config.fillOpacity
    },
    setStrokeStyle: function (e) {
      if (e !== "solid" && e !== "dashed" && e !== "dotted") {
        return
      }
      this._config.strokeStyle = e
    },
    getStrokeStyle: function () {
      return this._config.strokeStyle
    },
    setFillColor: function (e) {
      this._config.fillColor = e || ""
    },
    getFillColor: function () {
      return this._config.fillColor
    },
    getBoundsIn: function () {
      this._bounds.setMinMax();
      return this._bounds
    },
    getBounds: function () {
      var e = this.getBoundsIn();
      var i = new dS(en.convertMC2LL(e.getSouthWest()), en.convertMC2LL(e.getNorthEast()));
      i.setMinMax();
      return i
    },
    remove: function () {
      if (this.map) {
        this.map.removeEventListener("onmousemove", this._graphMouseEvent);
        this.map.removeEventListener("onclick", this._graphClickEvent)
      }
      cV.prototype.remove.call(this);
      this._clearCache();
      var e = new bb("onlineupdate");
      e.action = "remove";
      e.overlay = this;
      this.fire(e)
    },
    enableEditing: function () {
      if (this.points.length < 2) {
        return
      }
      this._config.enableEditing = true;
      var e = this;
      ea.load("poly", function () {
        e.addVertexs()
      }, true)
    },
    disableEditing: function () {
      this._config.enableEditing = false;
      var e = this;
      ea.load("poly", function () {
        e.clearVertexs()
      }, true)
    },
    getLength: function () {
      if (typeof this._length === "number") {
        return this._length
      }
      if (typeof this._config.totalLength === "number") {
        this._length = this._config.totalLength;
        return this._length
      }
      var T = 0;
      if (this.points.length <= 1) {
        this._length = 0;
        return T
      }
      for (var e = 0; e < this.points.length - 1; e++) {
        T += bP(this.points[e], this.points[e + 1])
      }
      this._length = T;
      return T
    },
    getParsedPoints: function () {
      var e = this._simplification(this.points);
      if (this.hasMultipleParts) {
        return e
      }
      return [e]
    },
    _simplification: function (hV) {
      var e = this.map;
      var hU = this.getParseCacheIndex(e.getZoom());
      var hX;
      if (this._parseCache[hU]) {
        hX = this._parseCache[hU]
      } else {
        var hS = hV;
        if (this.greatCirclePoints.length > 0) {
          hS = this.greatCirclePoints
        }
        var hT = this.getParseTolerance(e.getZoom(), e.config.coordType);
        if (!this.hasMultipleParts) {
          var hW = hF(hS, hT)
        } else {
          var hW = [];
          for (var T = 0; T < hS.length; T++) {
            var hR = hF(hS[T], hT);
            hW.push(hR)
          }
        }
        hX = this._parseCache[hU] = hW
      }
      return hX
    },
    _clearCache: function () {
      this._length = null;
      this._parseCache.length = 0;
      this._parseCacheGL.length = 0;
      this._parseCacheGLRaw.length = 0;
      this._areaCacheGL.length = 0
    },
    canRenderDataBeMerged: function () {
      var e = this._config;
      if (e.texture) {
        return false
      }
      return true
    }
  });
  if (C.Browser.ie && document.namespaces && !document.namespaces.olv) {
    document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
  }

  function hb(hT, hR, T) {
    if (!hT || !hR) {
      return
    }
    this.imageUrl = null;
    this.imageDom = null;
    if (typeof hT === "string") {
      this.imageUrl = hT
    } else {
      this.imageDom = hT;
      if (!this.imageDom.id) {
        this.imageDom.id = bo.getGUID("icon_dom_")
      }
    }
    this.size = hR;
    var hS = new d9(Math.floor(hR.width / 2), Math.floor(hR.height / 2));
    var i = {
      offset: hS,
      imageOffset: new d9(0, 0)
    };
    T = T || {};
    for (var e in T) {
      i[e] = T[e]
    }
    if (T.anchor) {
      i.offset = T.anchor
    }
    this.anchor = this.offset = i.offset;
    this.imageOffset = i.imageOffset;
    this.infoWindowOffset = T.infoWindowOffset || this.offset;
    this.printImageUrl = T.printImageUrl || "";
    this.imageSize = T.imageSize || this.size;
    this.srcSetObject = {};
    this.setImageSrcset(T.srcset || T.srcSet)
  }
  hb.prototype.setImageUrl = function (e) {
    if (!e) {
      return
    }
    this.imageUrl = e;
    this._renderData = null
  };
  hb.prototype.getCurrentImageUrl = function () {
    if (window.devicePixelRatio > 1 && this.srcSetObject["2x"]) {
      return this.srcSetObject["2x"]
    }
    return this.imageUrl
  };
  hb.prototype.setPrintImageUrl = function (e) {
    if (!e) {
      return
    }
    this.printImageUrl = e
  };
  hb.prototype.setSize = function (e) {
    if (!e) {
      return
    }
    this.size = new d9(e.width, e.height);
    this._renderData = null
  };
  hb.prototype.setOffset = function (e) {
    if (!e) {
      return
    }
    this.anchor = this.offset = new d9(e.width, e.height);
    this._renderData = null
  };
  hb.prototype.setAnchor = function (e) {
    this.setOffset(e)
  };
  hb.prototype.setImageOffset = function (e) {
    if (!e) {
      return
    }
    this.imageOffset = new d9(e.width, e.height);
    this._renderData = null
  };
  hb.prototype.setInfoWindowOffset = function (e) {
    if (!e) {
      return
    }
    this.infoWindowOffset = new d9(e.width, e.height)
  };
  hb.prototype.setImageSize = function (e) {
    if (!e) {
      return
    }
    this.imageSize = new d9(e.width, e.height)
  };
  hb.prototype.setImageSrcset = function (T) {
    var e = "";
    if (!T) {
      return
    }
    for (var i in T) {
      if (T.hasOwnProperty(i)) {
        this.srcSetObject[i] = T[i];
        e = T[i] + " " + i + ","
      }
    }
    this.srcSet = e
  };
  hb.prototype.toString = function () {
    return "Icon"
  };
  hb.prototype.generateRenderData = function (hT) {
    var T = this.offset;
    var e = this.size;
    var hV = this.imageOffset;
    var hU = [];
    hU.push(-T.width, T.height - e.height, 0);
    hU.push(e.width - T.width, T.height - e.height, 0);
    hU.push(e.width - T.width, T.height, 0);
    hU.push(-T.width, T.height - e.height, 0);
    hU.push(e.width - T.width, T.height, 0);
    hU.push(-T.width, T.height, 0);
    if (hT !== 0) {
      for (var hS = 0; hS < hU.length; hS += 3) {
        var hR = vec2.fromValues(hU[hS], hU[hS + 1]);
        vec2.rotate(hR, hR, [0, 0], dK(-hT));
        hU[hS] = hR[0];
        hU[hS + 1] = hR[1]
      }
    }
    return {
      vertex: hU
    }
  };
  hb.prototype.getRenderData = function (e) {
    this._renderData = this.generateRenderData(e);
    return this._renderData
  };

  function an(T, i) {
    C.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new d9(0, 0),
      title: "",
      maxContent: "",
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10]
      ],
      ifMaxScene: false,
      onClosing: function () {
        return true
      }
    };
    this.setConfig(i);
    if (this._config.width !== 0) {
      if (this._config.width < 220) {
        this._config.width = 220
      }
      if (this._config.width > 730) {
        this._config.width = 730
      }
    }
    if (this._config.height !== 0) {
      if (this._config.height < 60) {
        this._config.height = 60
      }
      if (this._config.height > 650) {
        this._config.height = 650
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 220) {
        this._config.maxWidth = 220
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = e3.imgPath;
    this.overlay = null;
    var e = this;
    ea.load("infowindow", function () {
      e._draw()
    })
  }
  an.inherits(C.BaseClass, "InfoWindow");
  C.extend(an.prototype, {
    setWidth: function (e) {
      e = e * 1;
      if (!e && e !== 0 || isNaN(e) || e < 0) {
        return
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220
        }
        if (e > 730) {
          e = 730
        }
      }
      this._config.width = e
    },
    setHeight: function (e) {
      e = e * 1;
      if (!e && e !== 0 || isNaN(e) || e < 0) {
        return
      }
      if (e !== 0) {
        if (e < 60) {
          e = 60
        }
        if (e > 650) {
          e = 650
        }
      }
      this._config.height = e
    },
    setMaxWidth: function (e) {
      e = e * 1;
      if (!e && e !== 0 || isNaN(e) || e < 0) {
        return
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220
        }
        if (e > 730) {
          e = 730
        }
      }
      this._config.maxWidth = e
    },
    setTitle: function (e) {
      this._config.title = e || ""
    },
    setContent: function (e) {
      this.content = e || ""
    },
    getContent: function () {
      return this.content
    },
    setMaxContent: function (e) {
      this._config.maxContent = e || ""
    },
    redraw: function () {},
    enableAutoPan: function () {
      this._config.enableAutoPan = true
    },
    disableAutoPan: function () {
      this._config.enableAutoPan = false
    },
    enableCloseOnClick: function () {
      this._config.enableCloseOnClick = true
    },
    disableCloseOnClick: function () {
      this._config.enableCloseOnClick = false
    },
    enableMaximize: function () {
      this._config.enableMaximize = true
    },
    disableMaximize: function () {
      this._config.enableMaximize = false
    },
    show: function () {
      this._visible = true
    },
    hide: function () {
      this._visible = false
    },
    close: function () {
      this.hide()
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this)
    },
    maximize: function () {
      this.isWinMax = true
    },
    restore: function () {
      this.isWinMax = false
    },
    setConfig: function (i) {
      if (!i) {
        return
      }
      for (var e in i) {
        if (typeof (this._config[e]) === typeof (i[e])) {
          this._config[e] = i[e]
        }
      }
    },
    isVisible: function () {
      return this.isOpen()
    },
    isOpen: function () {
      return false
    },
    getPointIn: function () {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint()
      }
    },
    getTitle: function () {
      return this._config.title || ""
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPointIn();
      return en.convertMC2LL(e)
    },
    getPoint: function () {
      var e = this.getPointIn();
      return en.convertMC2LL(e)
    },
    getOffset: function () {
      return this._config.offset
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this)
    },
    toString: function () {
      return "InfoWindow"
    }
  });
  c8.prototype.openInfoWindow = function (T, e) {
    T.latLng = new c4(e.lat, e.lng);
    var i = en.convertLL2MC(e);
    this.openInfoWindowIn(T, i)
  };
  c8.prototype.closeInfoWindow = function () {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeInfoWindow()
    }
  };
  c8.prototype.openInfoWindowIn = function (hR, e) {
    if (!hR || hR.toString() !== "InfoWindow" || !e || e.toString() !== "Point") {
      return
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new hb(e3.imgPath + "blank.gif", {
        width: 1,
        height: 1
      });
      i.marker = new dr(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new d9(0, 0),
        infoWindowOffset: new d9(0, 0),
        clickable: false
      });
      i.marker._fromMap = 1
    } else {
      i.marker.setPoint(e)
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openInfoWindow(hR)
  };
  cV.prototype.openInfoWindow = function (e) {
    if (this.map) {
      this.map.closeInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      C.BaseClass.call(e, e.hashCode)
    }
  };
  cV.prototype.closeInfoWindow = function () {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null
    }
  };

  function aN(T, i) {
    cV.call(this);
    this.content = T;
    this.map = null;
    this.domElement = null;
    this._config = {
      width: 0,
      offset: new d9(0, 0),
      styles: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        fontSize: "12px",
        zIndex: "80",
        MozUserSelect: "none"
      },
      point: null,
      enableMassClear: true
    };
    i = i || {};
    this.setConfig(i);
    if (this._config.width < 0) {
      this._config.width = 0
    }
    this.point = this._config.point;
    var e = this;
    ea.load("marker", function () {
      e._draw()
    })
  }
  aN.inherits(cV, "Label");
  C.extend(aN.prototype, {
    setPoint: function (e) {
      if (e && e.toString() === "Point" && !this.getMarker()) {
        this.point = this._config.point = new hs(e.lng, e.lat)
      }
    },
    setContent: function (e) {
      this.content = e
    },
    getContent: function (e) {
      return this.content
    },
    setOpacity: function (e) {
      if (e >= 0 && e <= 1) {
        this._config.opacity = e
      }
    },
    setOffset: function (e) {
      if (!e || e.toString() !== "Size") {
        return
      }
      this._config.offset = new d9(e.width, e.height)
    },
    getOffset: function () {
      return this._config.offset
    },
    setStyle: function (e) {
      e = e || {};
      this._config.styles = C.extend(this._config.styles, e)
    },
    setStyles: function (e) {
      this.setStyle(e)
    },
    setTitle: function (e) {
      this._config.title = e || ""
    },
    getTitle: function () {
      return this._config.title
    },
    setMarker: function (e) {
      if (this._marker && this._marker !== e) {
        this._marker._config.label = null
      }
      this._marker = e;
      if (e) {
        this.point = this._config.point = e.getPoint()
      } else {
        this.point = this._config.point = null
      }
    },
    getMarker: function () {
      return this._marker || null
    },
    getPositionIn: function () {
      return this.getPoint()
    },
  });

  function fP(T, i) {
    var hR = {};
    for (var e in i) {
      if (i.hasOwnProperty(e)) {
        if (e === "position") {
          hR.point = en.convertLL2MC(i[e]);
          this.latLng = new c4(i[e]["lat"], i[e]["lng"])
        } else {
          hR[e] = i[e]
        }
      }
    }
    aN.call(this, T, hR)
  }
  fP.inherits(aN, "LabelOut");
  C.extend(fP.prototype, {
    toString: function () {
      return "Label"
    },
    setPosition: function (e) {
      this.latLng = new c4(e.lat, e.lng);
      var i = en.convertLL2MC(e);
      this.setPoint(i)
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPositionIn();
      return en.convertMC2LL(e)
    }
  });
  window.BMAP_ANIMATION_DROP = 1;
  window.BMAP_ANIMATION_BOUNCE = 2;

  function dr(e, i) {
    cV.call(this);
    i = i || {};
    this.point = e;
    this._rotation = 0;
    this.map = null;
    this._animation = null;
    this.domElement = null;
    this.iconDom = null;
    this.infoWindowDom = null;
    this.siblingElement = null;
    this.textureCoord = null;
    this.textureCoordGLMap = null;
    this.collisionDetectionFailed = false;
    this._config = {
      offset: new d9(0, 0),
      opacity: 1,
      icon: null,
      title: "",
      infoWindow: null,
      label: null,
      baseZIndex: 0,
      clickable: true,
      zIndexFixed: false,
      isTop: false,
      enableMassClear: true,
      enableDragging: false,
      raiseOnDrag: false,
      restrictDraggingArea: false,
      startAnimation: "",
      enableCollisionDetection: false,
      rank: 0,
      enableDraggingMap: false
    };
    this.setConfig(i);
    if (!i.icon) {
      this._config.icon = new hb(e3.imgPath + "marker_red.png", new d9(23, 25), {
        offset: new d9(10, 25),
        infoWindowOffset: new d9(10, 0)
      })
    }
    this._isDragging = false;
    var T = this;
    ea.load("marker", function () {
      T._draw()
    })
  }
  dr.TOP_ZINDEX = bl.getZIndex(-90) + 1000000;
  dr.DRAG_ZINDEX = dr.TOP_ZINDEX + 1000000;
  dr._injectMethond = function (e) {
    C.extend(dr.prototype, e)
  };
  dr.inherits(cV, "Marker");
  C.extend(dr.prototype, {
    toString: function () {
      return "Marker"
    },
    setIcon: function (e) {
      if (e) {
        this._config.icon = e;
        this.textureCoord = this.textureCoordGLMap = null
      }
    },
    getIcon: function () {
      return this._config.icon
    },
    setLabel: function (e) {
      if (!(e instanceof aN)) {
        return
      }
      this._config.label = e;
      e._config.enableMassClear = this._config.enableMassClear;
      e.setPoint(this.point)
    },
    getLabel: function () {
      return this._config.label
    },
    enableDragging: function () {
      this._config.enableDragging = true
    },
    disableDragging: function () {
      this._config.enableDragging = false
    },
    setPoint: function (e) {
      if (e) {
        this.point = this._config.point = new hs(e.lng, e.lat);
        this.latLng = en.convertMC2LL(e)
      }
    },
    setPositionIn: function (e) {
      this.setPoint(e)
    },
    getPositionIn: function () {
      return this.getPoint()
    },
    setTop: function (i, e) {
      this._config.isTop = !!i;
      if (i) {
        this._addi = e || 0
      }
    },
    setTitle: function (e) {
      this._config.title = e || ""
    },
    getTitle: function () {
      return this._config.title
    },
    setOffset: function (e) {
      if (e) {
        this._config.offset = e
      }
    },
    getOffset: function () {
      return this._config.offset
    },
    setAnimation: function (e) {
      this._animation = e
    },
    setRank: function (e) {
      this._config.rank = e
    },
    getRank: function () {
      return this._config.rank
    },
    setRotation: function (e) {
      while (e < 0) {
        e += 360
      }
      this._rotation = e % 360
    },
    getRotation: function () {
      return this._rotation
    }
  });

  function aC(e, T) {
    this.latLng = new c4(e.lat, e.lng);
    var i = en.convertLL2MC(e);
    dr.call(this, i, T)
  }
  aC.inherits(dr, "MarkerOut");
  C.extend(aC.prototype, {
    toString: function () {
      return "Marker"
    },
    setPosition: function (e) {
      this.latLng = new c4(e.lat, e.lng);
      var i = en.convertLL2MC(e);
      this.setPositionIn(i)
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPositionIn();
      return en.convertMC2LL(e)
    }
  });
  window.BMAP_SHAPE_CIRCLE = 1;
  window.BMAP_SHAPE_RECT = 2;

  function bd(i, e, T) {
    cV.call(this, e, T);
    this.domElement = null;
    this.point = i;
    T = T || {};
    this._config = {};
    this._config.height = e || 0;
    this._config.size = typeof T.size === "number" ? T.size : 50;
    this._config.fillOpacity = typeof T.fillOpacity === "number" ? T.fillOpacity : 0.8;
    this._config.shape = typeof T.shape === "number" ? T.shape : 1;
    fF(this._config.fillOpacity, 0, 1);
    if (T.fillColor === "") {
      this._config.fillColor = ""
    } else {
      this._config.fillColor = T.fillColor ? T.fillColor : "#f00"
    }
    this._config.icon = T.icon instanceof hb ? T.icon : "";
    this._config.enableMassClear = T.enableMassClear || true;
    var hR = this;
    ea.load("marker", function () {
      hR._draw()
    })
  }
  bd.inherits(cV, "Marker3D");
  C.extend(bd.prototype, {
    setPoint: function (e) {
      this.point = this._config.point = new hs(e.lng, e.lat);
      this.latLng = en.convertMC2LL(e);
      var i = new bb("onstatus_change");
      i.overlay = this;
      i.action = "setPoint";
      this.fire(i)
    },
    setPositionIn: function (e) {
      this.setPoint(e)
    },
    getPositionIn: function () {
      return this.getPoint()
    },
    setDomAttribute: function (i, T) {
      var e = new bb("onlineupdate");
      e.overlay = this;
      this.dispatchEvent(e)
    }
  });

  function cv(i, e, hR) {
    this.latLng = new c4(i.lat, i.lng);
    var T = en.convertLL2MC(i);
    bd.call(this, T, e, hR)
  }
  cv.inherits(bd, "Marker3d");
  C.extend(cv.prototype, {
    toString: function () {
      return "Marker3D"
    },
    setHeight: function (e) {
      this._config.height = Number(e);
      this.draw();
      var i = new bb("onlineupdate");
      i.overlay = this;
      this.dispatchEvent(i)
    },
    getHeight: function () {
      return this._config.height
    },
    setFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return
      }
      this._config.fillOpacity = e;
      this.setDomAttribute("fillopacity", e)
    },
    getFillOpacity: function () {
      return this._config.fillOpacity
    },
    setFillColor: function (e) {
      this._config.fillColor = e || "";
      this.setDomAttribute("fillcolor", e)
    },
    getFillColor: function () {
      return this._config.fillColor
    },
    setIcon: function (i) {
      if (!i || !this.map) {
        return
      }
      this._config.icon = i;
      if (this._config.icon) {
        var e = this._config.icon.getCurrentImageUrl();
        var hR = i.getCurrentImageUrl() !== e;
        this._config.icon = i;
        this.textureCoord = this.textureCoordGLMap = null;
        this.draw();
        var T = new bb("onstatus_change");
        T.overlay = this;
        T.action = "setIcon";
        T.imageUrlChanged = hR;
        this.fire(T)
      }
    },
    getIcon: function () {
      return this._config.icon
    },
    setPosition: function (e) {
      this.latLng = new c4(e.lat, e.lng);
      var i = en.convertLL2MC(e);
      this.setPositionIn(i)
    },
    getPosition: function () {
      var e = this.getPositionIn();
      return en.convertMC2LL(e)
    }
  });

  function a(T, e) {
    w.call(this, e);
    this._normalizedBounds = new dS();
    this.setPoints(T);
    var i = this;
    ea.load("poly", function () {
      i._draw()
    })
  }
  a.inherits(w, "Polyline");
  C.extend(a.prototype, {
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds
    },
    setPoints: function (T) {
      this._clearCache();
      this.points = w.getGraphPoints(T).slice(0);
      if (this._config.geodesic === true) {
        this.greatCirclePoints.length = 0;
        for (var e = 0; e < this.points.length - 1; e++) {
          this.calcGreatCirclePoints(this.points[e], this.points[e + 1])
        }
      }
      this._calcBounds()
    },
    _calcBounds: function () {
      if (!this.points) {
        return
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i)
        })
      } else {
        C.each(e.points, function (i) {
          e._bounds.extend(i)
        })
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (e._normalizedBounds.sw.lng < -c8.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c8.WORLD_SIZE_MC_HALF) {
        e._normalizedBounds.sw.lng = -c8.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c8.WORLD_SIZE_MC_HALF
      }
    },
    calcGreatCirclePoints: function (hR, T) {
      var hT = hR.latLng;
      var hS = T.latLng;
      if (hT.equals(hS)) {
        return
      }
      var e = en.getDistance(dK(hT.lng), dK(hT.lat), dK(hS.lng), dK(hS.lat));
      if (e < 250000) {
        return
      }
      var hX = Math.round(e / 150000);
      var h1 = this.calcAngularDistance(hT, hS);
      this.greatCirclePoints.push(hR);
      var h0 = hT.lng;
      var hZ = hR;
      for (var hU = 0; hU < hX; hU++) {
        var hW = this.calcMiddlePoint(hT, hS, hU / hX, h1);
        var hY = en.convertLL2MC(hW);
        var hV = hY.lng;
        var h2 = bP(hY, hZ);
        if (h2 > 30037726) {
          if (hY.lng < hZ.lng) {
            hY.lng += c8.WORLD_SIZE_MC
          } else {
            hY.lng -= c8.WORLD_SIZE_MC
          }
        }
        this.greatCirclePoints.push(hY);
        hZ = hY
      }
      var h2 = bP(T, hZ);
      if (h2 > 30037726) {
        if (T.lng < hZ.lng) {
          T.lng += c8.WORLD_SIZE_MC
        } else {
          T.lng -= c8.WORLD_SIZE_MC
        }
      }
      this.greatCirclePoints.push(T)
    },
    calcMiddlePoint: function (hY, hX, hZ, h3) {
      var hS = hY.lat;
      var hR = hX.lat;
      var h2 = hY.lng;
      var h0 = hX.lng;
      var h4 = dK(hS);
      var h1 = dK(hR);
      var i = dK(h2);
      var e = dK(h0);
      var h6 = Math.sin((1 - hZ) * h3) / Math.sin(h3);
      var h5 = Math.sin(hZ * h3) / Math.sin(h3);
      var hV = h6 * Math.cos(h4) * Math.cos(i) + h5 * Math.cos(h1) * Math.cos(e);
      var hU = h6 * Math.cos(h4) * Math.sin(i) + h5 * Math.cos(h1) * Math.sin(e);
      var hT = h6 * Math.sin(h4) + h5 * Math.sin(h1);
      var T = Math.atan2(hT, Math.sqrt(Math.pow(hV, 2) + Math.pow(hU, 2)));
      var hW = Math.atan2(hU, hV);
      return new hs(de(hW), de(T))
    },
    calcAngularDistance: function (hS, i) {
      var hT = dK(hS.lat);
      var hR = dK(i.lat);
      var T = dK(hS.lng);
      var e = dK(i.lng);
      return Math.acos(Math.sin(hT) * Math.sin(hR) + Math.cos(hT) * Math.cos(hR) * Math.cos(Math.abs(e - T)))
    }
  });

  function ak(hS, e) {
    if (!hS || hS.length === 0) {
      return
    }
    var hR = [];
    for (var T = 0; T < hS.length; T++) {
      hR[T] = en.convertLL2MC(hS[T])
    }
    a.call(this, hR, e)
  }
  ak.inherits(a, "PolylineOut");
  C.extend(ak.prototype, {
    toString: function () {
      return "Polyline"
    },
    setPath: function (hR) {
      if (!hR || hR.length === 0) {
        return
      }
      var T = [];
      for (var e = 0; e < hR.length; e++) {
        T[e] = en.convertLL2MC(hR[e])
      }
      this.setPathIn(T)
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = en.convertMC2LL(e[T])
      }
      return hR
    },
    getBounds: function (i) {
      var e = this.getBoundsIn(i);
      var T = new dS(en.convertMC2LL(e.getSouthWest()), en.convertMC2LL(e.getNorthEast()));
      return T
    }
  });

  function ep(T, hR, e) {
    w.call(this, e);
    this._normalizedBounds = new dS();
    this._cps = hR;
    this._path = T;
    this.setPoints(T);
    var i = this;
    ea.load("poly", function () {
      i._draw()
    })
  }
  ep.inherits(a, "BezierCurve");
  C.extend(ep.prototype, {
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds
    },
    setPoints: function (e) {
      this._clearCache();
      this.points = w.getGraphPoints(e).slice(0);
      this.points = this.calcBezierPoints(this.points, this._cps);
      this._calcBounds()
    },
    _calcBounds: function () {
      if (!this.points) {
        return
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i)
        })
      } else {
        C.each(e.points, function (i) {
          e._bounds.extend(i)
        })
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (e._normalizedBounds.sw.lng < -c8.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c8.WORLD_SIZE_MC_HALF) {
        e._normalizedBounds.sw.lng = -c8.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c8.WORLD_SIZE_MC_HALF
      }
    },
    getPathIn: function () {
      return this._path
    },
    setPathIn: function (e) {
      this._path = e;
      this.setPoints(e)
    },
    getCpsIn: function () {
      return this._cps
    },
    setCpsIn: function (e) {
      this._cps = e;
      this.setPoints(this._path)
    },
    calcBezierPoints: function (hR, hT) {
      var T = [];
      for (var e = 0; e < hR.length - 1; e++) {
        var hS = [hR[e], hT[e][0], hT[e][1], hR[e + 1]];
        T = T.concat((this.bezierbetweenTwoP(hS)))
      }
      return T
    },
    bezierbetweenTwoP: function (hT) {
      var T = 100;
      var hS = 1 / T;
      var e = [];
      for (var hR = 0; hR < T; hR++) {
        e.push(this.getPointOnCubicBezier(hT, hR * hS))
      }
      return e
    },
    getPointOnCubicBezier: function (hU, hY) {
      var i;
      var hT;
      var hR;
      var hZ;
      var hS;
      var T;
      var hX;
      var e;
      var hW;
      var hV;
      hR = 3 * (hU[1].lng - hU[0].lng);
      hT = 3 * (hU[2].lng - hU[1].lng) - hR;
      i = hU[3].lng - hU[0].lng - hR - hT;
      T = 3 * (hU[1].lat - hU[0].lat);
      hS = 3 * (hU[2].lat - hU[1].lat) - T;
      hZ = hU[3].lat - hU[0].lat - T - hS;
      hX = hY * hY;
      e = hX * hY;
      hW = (i * e) + (hT * hX) + (hR * hY) + hU[0].lng;
      hV = (hZ * e) + (hS * hX) + (T * hY) + hU[0].lat;
      return new hs(hW, hV)
    }
  });

  function fn(hS, hU, e) {
    if (!hS || hS.length === 0) {
      return
    }
    this.userPath = hS;
    this.userCps = hU;
    var hR = [];
    for (var T = 0; T < hS.length; T++) {
      hR[T] = en.convertLL2MC(hS[T])
    }
    if (!hU || hU.length === 0) {
      return
    }
    var hT = [];
    for (var T = 0; T < hU.length; T++) {
      hT[T] = [];
      hT[T][0] = en.convertLL2MC(hU[T][0]);
      if (hU[T][1]) {
        hT[T][1] = en.convertLL2MC(hU[T][1])
      } else {
        hT[T][1] = en.convertLL2MC(hU[T][0])
      }
    }
    ep.call(this, hR, hT, e)
  }
  fn.inherits(ep, "BezierCurveOut");
  C.extend(fn.prototype, {
    toString: function () {
      return "BezierCurve"
    },
    setPath: function (hR) {
      if (!hR || hR.length === 0) {
        return
      }
      this.userPath = hR;
      var T = [];
      for (var e = 0; e < hR.length; e++) {
        T[e] = en.convertLL2MC(hR[e])
      }
      this.setPathIn(T)
    },
    getPath: function () {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = en.convertMC2LL(e[T])
      }
      return hR
    },
    getControlPoints: function () {
      return this.userCps;
      var e = this.getCpsIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = [];
        hR[T][0] = en.convertMC2LL(e[T][0]);
        hR[T][1] = en.convertMC2LL(e[T][1])
      }
      return hR
    },
    setControlPoints: function (hR) {
      if (!hR || hR.length === 0) {
        return
      }
      this.userCps = hR;
      var T = [];
      for (var e = 0; e < hR.length; e++) {
        T[e] = [];
        T[e][0] = en.convertLL2MC(hR[e][0]);
        if (hR[e][1]) {
          T[e][1] = en.convertLL2MC(hR[e][1])
        } else {
          T[e][1] = en.convertLL2MC(hR[e][0])
        }
      }
      this.setCpsIn(T)
    },
    getBounds: function (i) {
      var e = this.getBoundsIn(i);
      var T = new dS(en.convertMC2LL(e.getSouthWest()), en.convertMC2LL(e.getNorthEast()));
      return T
    }
  });

  function fl(e, T) {
    w.call(this, T);
    this._normalizedBounds = new dS();
    this.setPoints(e);
    var i = this;
    ea.load("poly", function () {
      i._draw()
    })
  }
  fl.inherits(a, "PolylineMultipart");
  C.extend(fl.prototype, {
    setPoints: function (e) {
      if (!e) {
        return
      }
      this._clearCache();
      this.points = this._unifyArgs(e);
      this._calcBounds()
    },
    _unifyArgs: function (T) {
      var e = [];
      var i = [];
      if (T.constructor === Array) {
        if (T[0].constructor === hs) {
          i.push(T)
        } else {
          i = T
        }
      } else {
        if (typeof T === "string") {
          i.push(T)
        }
      }
      C.each(i, function (hR) {
        e.push(w.getGraphPoints(hR))
      });
      return e
    },
    setPointAt: function (i, e, T) {
      T = T || 0;
      if (!e || !this.points[T] || !this.points[T][i]) {
        return
      }
      this._clearCache();
      this.points[T][i] = new hs(e.lng, e.lat);
      this._calcBounds()
    },
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds
    },
    _calcBounds: function () {
      if (!this.points) {
        return
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i)
        })
      } else {
        C.each(e.points, function (i) {
          C.each(i, function (T) {
            e._bounds.extend(T)
          })
        })
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (e._normalizedBounds.sw.lng < -c8.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > c8.WORLD_SIZE_MC_HALF) {
        e._normalizedBounds.sw.lng = -c8.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c8.WORLD_SIZE_MC_HALF
      }
    }
  });

  function aR(T, e) {
    w.call(this, e);
    e = e || {};
    if (typeof e.fillOpacity === "number") {
      this._config.fillOpacity = e.fillOpacity
    } else {
      this._config.fillOpacity = 0.6
    }
    fF(this._config.fillOpacity, 0, 1);
    if (e.fillColor === "") {
      this._config.fillColor = ""
    } else {
      this._config.fillColor = e.fillColor ? e.fillColor : "#fff"
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(T, e);
    var i = this;
    ea.load("poly", function () {
      i._draw()
    })
  }
  aR.inherits(w, "Polygon");
  C.extend(aR.prototype, {
    setPoints: function (hT) {
      var hR = [];
      if (typeof hT === "string" || hT[0] instanceof hs || hT[0] instanceof c4 || this instanceof f8 || hT.length === 0) {
        var e = this._processSinglePointArray(hT);
        this._userPoints = e.userPoints;
        hR = e.innerPoints;
        this.hasMultipleParts = false
      } else {
        this._userPoints = [];
        for (var hS = 0; hS < hT.length; hS++) {
          var T = this._processSinglePointArray(hT[hS]);
          this._userPoints.push(T.userPoints);
          hR.push(T.innerPoints)
        }
        this.hasMultipleParts = true
      }
      w.prototype.setPoints.call(this, hR)
    },
    setPathIn: function (e) {
      this.setPoints(e)
    },
    _processSinglePointArray: function (e) {
      var i = w.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
        innerPoints.push(new hs(innerPoints[0].lng, innerPoints[0].lat))
      }
      return {
        userPoints: i,
        innerPoints: innerPoints
      }
    },
    setPointAt: function (i, e) {
      if (!this._userPoints[i]) {
        return
      }
      this._clearCache();
      this._userPoints[i] = new hs(e.lng, e.lat);
      this.points[i] = new hs(e.lng, e.lat);
      if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
        this.points[this.points.length - 1] = new hs(e.lng, e.lat)
      }
      this._calcBounds()
    },
    setPositionAt: function (i, e) {
      if (!this._userPoints[i]) {
        return
      }
      var T = en.convertLL2MC(e);
      this.setPointAt(i, T)
    },
    getPoints: function () {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points
      }
      return e
    },
    getPathIn: function () {
      return this.getPoints()
    }
  });

  function g4(hW, hT) {
    if (!hW || hW.length === 0) {
      return
    }
    var hV = [];
    if (typeof hW === "string" || hW[0] instanceof hs || hW[0] instanceof c4) {
      var e = this._processSinglePointArray(hW);
      for (var hU = 0; hU < e.innerPoints.length; hU++) {
        hV[hU] = en.convertLL2MC(e.innerPoints[hU])
      }
    } else {
      for (var hU = 0; hU < hW.length; hU++) {
        var T = this._processSinglePointArray(hW[hU]);
        var hS = [];
        for (var hR = 0; hR < T.innerPoints.length; hR++) {
          hS[hR] = en.convertLL2MC(T.innerPoints[hR])
        }
        hV.push(hS)
      }
    }
    aR.call(this, hV, hT)
  }
  g4.inherits(aR, "PolygonOut");
  C.extend(g4.prototype, {
    toString: function () {
      return "Polygon"
    },
    setPath: function (hR) {
      if (!hR || hR.length === 0) {
        return
      }
      hR = w.getGraphPoints(hR);
      var T = [];
      for (var e = 0; e < hR.length; e++) {
        T[e] = en.convertLL2MC(hR[e])
      }
      this.setPathIn(T)
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = en.convertMC2LL(e[T])
      }
      return hR
    }
  });

  function f8(i, e, T) {
    this.point = i;
    this.radius = Math.abs(e);
    aR.call(this, [], T)
  }
  f8.parseTolerance = {
    0: [0.01, 0.0001, 0.00001, 0.000004],
    1: [1000, 10, 1, 0.4]
  };
  f8.inherits(aR, "Circle");
  C.extend(f8.prototype, {
    initialize: function (e) {
      this.map = e;
      this.points = this._getPerimeterPoints(this.point, this.radius);
      this._calcBounds();
      return null
    },
    getPoint: function () {
      return this.point
    },
    setPoint: function (e) {
      if (!e) {
        return
      }
      this.point = e;
      this.latLng = en.convertMC2LL(e)
    },
    setCenterIn: function (e) {
      var i = arguments[1];
      this.setPoint(e, i)
    },
    setRadius: function (e) {
      this.radius = Math.abs(e)
    },
    getCenterIn: function () {
      return this.point
    },
    getRadius: function () {
      return this.radius
    },
    _getPerimeterPoints: function (e, hY) {
      if (!e || !hY || !this.map) {
        return []
      }
      var T = this.map;
      var hV = e.lng;
      var hT = e.lat;
      var h4 = en.convertMC2LL(e);
      hV = h4.lng;
      hT = h4.lat;
      var h5 = [];
      var h0 = hY / en.EARTHRADIUS;
      var hX = (Math.PI / 180) * hT;
      var h3 = (Math.PI / 180) * hV;
      for (var hW = 0; hW < 360; hW += 9) {
        var hU = (Math.PI / 180) * hW;
        var h1 = Math.asin(Math.sin(hX) * Math.cos(h0) + Math.cos(hX) * Math.sin(h0) * Math.cos(hU));
        var hZ = Math.atan2(Math.sin(hU) * Math.sin(h0) * Math.cos(hX), Math.cos(h0) - Math.sin(hX) * Math.sin(h1));
        var h2 = ((h3 - hZ + Math.PI) % (2 * Math.PI)) - Math.PI;
        var hS = new c4(h1 * (180 / Math.PI), h2 * (180 / Math.PI));
        h5.push(en.convertLL2MC(hS))
      }
      var hR = h5[0];
      h5.push(new hs(hR.lng, hR.lat));
      if (hR) {
        this._radiusMercator = Math.sqrt(Math.pow(hR.lng - this.point.lng, 2) + Math.pow(hR.lat - this.point.lat, 2))
      } else {
        this._radiusMercator = this.radius
      }
      return h5
    }
  });

  function dF(i, e, hR) {
    this.latLng = new c4(i.lat, i.lng);
    var T = en.convertLL2MC(i);
    f8.call(this, T, e, hR)
  }
  dF.inherits(f8, "CircleOut");
  C.extend(dF.prototype, {
    toString: function () {
      return "Circle"
    },
    setCenter: function (e) {
      this.latLng = new c4(e.lat, e.lng);
      var i = en.convertLL2MC(e);
      this.setCenterIn(i)
    },
    getCenter: function () {
      return this.latLng
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = en.convertMC2LL(e[T])
      }
      return hR
    }
  });

  function bs(hR, e, i) {
    w.call(this, i);
    i = i || {};
    if (typeof i.topFillOpacity === "number") {
      this._config.topFillOpacity = i.topFillOpacity
    } else {
      this._config.topFillOpacity = 0.6
    }
    if (typeof i.sideFillOpacity === "number") {
      this._config.sideFillOpacity = i.sideFillOpacity
    } else {
      this._config.sideFillOpacity = 0.8
    }
    fF(this._config.sideFillOpacity, 0, 1);
    if (i.topFillColor === "") {
      this._config.topFillColor = ""
    } else {
      this._config.topFillColor = i.topFillColor ? i.topFillColor : "#fff"
    }
    if (i.sideFillColor === "") {
      this._config.sideFillColor = ""
    } else {
      this._config.sideFillColor = i.sideFillColor ? i.sideFillColor : "#fff"
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(hR, i);
    this._config.altitude = e || 0;
    var T = this;
    ea.load("poly", function () {
      T._draw()
    })
  }
  bs.inherits(w, "Prism");
  C.extend(bs.prototype, {
    setPoints: function (hT) {
      var hR = [];
      if (typeof hT === "string" || hT[0] instanceof hs || hT[0] instanceof c4 || this instanceof f8 || hT.length === 0) {
        var e = this._processSinglePointArray(hT);
        this._userPoints = e.userPoints;
        hR = e.innerPoints;
        this.hasMultipleParts = false
      } else {
        this._userPoints = [];
        for (var hS = 0; hS < hT.length; hS++) {
          var T = this._processSinglePointArray(hT[hS]);
          this._userPoints.push(T.userPoints);
          hR.push(T.innerPoints)
        }
        this.hasMultipleParts = true
      }
      w.prototype.setPoints.call(this, hR)
    },
    setPathIn: function (e) {
      this.setPoints(e)
    },
    _processSinglePointArray: function (e) {
      var i = w.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
        innerPoints.push(new hs(innerPoints[0].lng, innerPoints[0].lat))
      }
      return {
        userPoints: i,
        innerPoints: innerPoints
      }
    },
    setPointAt: function (i, e) {
      if (!this._userPoints[i]) {
        return
      }
      this._clearCache();
      this._userPoints[i] = new hs(e.lng, e.lat);
      this.points[i] = new hs(e.lng, e.lat);
      if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
        this.points[this.points.length - 1] = new hs(e.lng, e.lat)
      }
      this._calcBounds()
    },
    getPoints: function () {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points
      }
      return e
    },
    getPathIn: function () {
      return this.getPoints()
    },
    setTopFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return
      }
      this._config.topFillOpacity = e;
      this._setDomAttribute("topfillopacity", e)
    },
    getTopFillOpacity: function () {
      return this._config.topFillOpacity
    },
    setSideFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return
      }
      this._config.sideFillOpacity = e;
      this._setDomAttribute("sidefillopacity", e)
    },
    getSideFillOpacity: function () {
      return this._config.sideFillOpacity
    },
    setTopFillColor: function (e) {
      this._config.topFillColor = e || "";
      this._setDomAttribute("topfillcolor", e)
    },
    getTopFillColor: function () {
      return this._config.topFillColor
    },
    setSideFillColor: function (e) {
      this._config.sideFillColor = e || "";
      this._setDomAttribute("sidefillcolor", e)
    },
    getSideFillColor: function () {
      return this._config.sideFillColor
    },
    setAltitude: function (e) {
      this._config.altitude = Number(e);
      this.draw();
      var i = new bb("onlineupdate");
      i.overlay = this;
      this.dispatchEvent(i)
    },
    getAltitude: function () {
      return this._config.altitude
    }
  });

  function cg(hV, hT, hW) {
    if (!hV || hV.length === 0) {
      return
    }
    this.userPath = hV;
    var e = [];
    if (typeof hV === "string" || hV[0] instanceof hs || hV[0] instanceof c4) {
      var hX = this._processSinglePointArray(hV);
      for (var hS = 0; hS < hX.innerPoints.length; hS++) {
        e[hS] = en.convertLL2MC(hX.innerPoints[hS])
      }
    } else {
      for (var hS = 0; hS < hV.length; hS++) {
        var hU = this._processSinglePointArray(hV[hS]);
        var T = [];
        for (var hR = 0; hR < hU.innerPoints.length; hR++) {
          T[hR] = en.convertLL2MC(hU.innerPoints[hR])
        }
        e.push(T)
      }
    }
    bs.call(this, e, hT, hW)
  }
  cg.inherits(bs, "PrismOut");
  C.extend(cg.prototype, {
    toString: function () {
      return "Prism"
    },
    setPath: function (hR) {
      if (!hR || hR.length === 0) {
        return
      }
      this.userPath = hR;
      var T = [];
      for (var e = 0; e < hR.length; e++) {
        T[e] = en.convertLL2MC(hR[e])
      }
      this.setPathIn(T)
    },
    getPath: function () {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return []
      }
      var hR = [];
      for (var T = 0; T < e.length; T++) {
        hR[T] = en.convertMC2LL(e[T])
      }
      return hR
    }
  });

  function dW(T, e) {
    w.call(this, e);
    e = e || {};
    this._config.type = e.type || "image";
    this._config.url = e.url || "";
    this._config.opacity = typeof e.opacity === "number" ? e.opacity : 1;
    fF(this._config.opacity, 0, 1);
    this._parseFillCacheWebGL = [];
    this.setPoints(T, e);
    var i = this;
    ea.load("poly", function () {
      i._draw()
    })
  }
  dW.inherits(w, "GroundOverlay");
  C.extend(dW.prototype, {
    setPoints: function (i) {
      var e = w.getGraphPoints(i).slice(0);
      this.hasMultipleParts = false;
      w.prototype.setPoints.call(this, e)
    },
    setPathIn: function (e) {
      this.setPoints(e)
    },
    getPoints: function () {
      return this.points
    },
    getPathIn: function () {
      return this.getPoints()
    }
  });

  function cp(hS, T) {
    if (!hS) {
      return
    }
    var hU = [new hs(hS.sw.lng, hS.ne.lat), new hs(hS.ne.lng, hS.ne.lat), new hs(hS.ne.lng, hS.sw.lat), new hs(hS.sw.lng, hS.sw.lat)];
    var e = w.getGraphPoints(hU).slice(0);
    var hT = [];
    for (var hR = 0; hR < e.length; hR++) {
      hT[hR] = en.convertLL2MC(e[hR])
    }
    dW.call(this, hT, T)
  }
  cp.inherits(dW, "GroundOverlayOut");
  C.extend(cp.prototype, {
    toString: function () {
      return "GroundOverlay"
    }
  });
  var bB = {};

  function hH(T, i) {
    C.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new d9(0, 0),
      title: "",
      maxContent: "",
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10]
      ],
      ifMaxScene: false,
      onClosing: function () {
        return true
      }
    };
    this.setConfig(i);
    if (this._config.width < 50) {
      this._config.width = 50
    }
    if (this._config.width > 730) {
      this._config.width = 730
    }
    if (this._config.height != 0) {
      if (this._config.height < 50) {
        this._config.height = 50
      }
      if (this._config.height > 650) {
        this._config.height = 650
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 50) {
        this._config.maxWidth = 50
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = e3.imgPath;
    this.overlay = null;
    var e = this;
    ea.load("simpleInfowindow", function () {
      e._draw()
    })
  }
  hH.inherits(C.BaseClass, "SimpleInfoWindow");
  C.extend(hH.prototype, {
    setWidth: function (e) {
      e = e * 1;
      if (!e && e != 0 || isNaN(e) || e < 0) {
        return
      }
      if (e != 0) {
        if (e < 50) {
          e = 50
        }
        if (e > 730) {
          e = 730
        }
      }
      this._config.width = e
    },
    setHeight: function (e) {
      e = e * 1;
      e -= 10;
      if (!e && e != 0 || isNaN(e) || e < 0) {
        return
      }
      if (e != 0) {
        if (e < 50) {
          e = 50
        }
        if (e > 650) {
          e = 650
        }
      }
      this._config.height = e
    },
    setMaxWidth: function (e) {
      e = e * 1;
      if (!e && e != 0 || isNaN(e) || e < 0) {
        return
      }
      if (e != 0) {
        if (e < 50) {
          e = 50
        }
        if (e > 730) {
          e = 730
        }
      }
      this._config.maxWidth = e
    },
    setTitle: function (e) {
      this._config.title = e || ""
    },
    setContent: function (e) {
      this.content = e || ""
    },
    setMaxContent: function (e) {
      this._config.maxContent = e || ""
    },
    redraw: function () {},
    enableAutoPan: function () {
      this._config.enableAutoPan = true
    },
    disableAutoPan: function () {
      this._config.enableAutoPan = false
    },
    enableCloseOnClick: function () {
      this._config.enableCloseOnClick = true
    },
    disableCloseOnClick: function () {
      this._config.enableCloseOnClick = false
    },
    enableMaximize: function () {
      this._config.enableMaximize = true
    },
    disableMaximize: function () {
      this._config.enableMaximize = false
    },
    show: function () {
      this._visible = true
    },
    hide: function () {
      this._visible = false
    },
    close: function () {
      this.hide()
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this)
    },
    maximize: function () {
      this.isWinMax = true
    },
    restore: function () {
      this.isWinMax = false
    },
    setConfig: function (i) {
      if (!i) {
        return
      }
      for (var e in i) {
        if (typeof (this._config[e]) == typeof (i[e])) {
          this._config[e] = i[e]
        }
      }
    },
    isVisible: function () {
      return this.isOpen()
    },
    isOpen: function () {
      return false
    },
    getPoint: function () {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint()
      }
    },
    getOffset: function () {
      return this._config.offset
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this)
    },
    toString: function () {
      return "SimpleInfoWindow"
    }
  });
  c8.prototype.openSimpleInfoWindow = function (hR, e) {
    if (!hR || hR.toString() != "SimpleInfoWindow" || !e || e.toString() != "Point") {
      return
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new hb(e3.imgPath + "blank.gif", {
        width: 1,
        height: 1
      });
      i.marker = new dr(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new d9(0, 0),
        infoWindowOffset: new d9(0, 0),
        clickable: false
      });
      i.marker._fromMap = 1
    } else {
      i.marker.setPoint(e)
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openSimpleInfoWindow(hR)
  };
  c8.prototype.closeSimpleInfoWindow = function () {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeSimpleInfoWindow()
    }
  };
  cV.prototype.openSimpleInfoWindow = function (e) {
    if (this.map) {
      this.map.closeSimpleInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      C.BaseClass.call(e, e.hashCode)
    }
  };
  cV.prototype.closeSimpleInfoWindow = function () {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null
    }
  };

  function ej(e, i) {
    e = isNaN(e) ? 0 : e;
    i = isNaN(i) ? 0 : i;
    this.x = e;
    this.y = i
  }
  ej.prototype.equals = function (e) {
    if (!e) {
      return false
    }
    return e.x === this.x && e.y === this.y
  };
  ej.prototype.clone = function () {
    return new ej(this.x, this.y)
  };
  ej.prototype.toString = function () {
    return "Pixel"
  };

  function d9(i, e) {
    if (typeof i !== "number") {
      this.width = parseFloat(i)
    } else {
      this.width = i
    }
    if (typeof e !== "number") {
      this.height = parseFloat(e)
    } else {
      this.height = e
    }
  }
  d9.prototype.equals = function (e) {
    return !!(e && this.width === e.width && this.height === e.height)
  };
  d9.prototype.toString = function () {
    return "Size"
  };
  var bH = {
    B_NORMAL_MAP: {
      tileUrls: er(e3.tileDomain, e3.rasterTilePath),
      vectorTileUrls: er(e3.tileDomain, e3.vectorTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: {
        minZoom: 3,
        maxZoom: 25
      },
      zoomLevelBase: 18,
      errorUrl: e3.imgPath + "bg.png",
      bounds: new dS(new hs(-21364736, -11708041.66), new hs(23855104, 12474104.17)),
      imgExtend: "png"
    },
    B_SATELLITE_MAP: {
      tileUrls: ["//maponline0.bdimg.com/starpic/?qt=satepc&", "//maponline1.bdimg.com/starpic/?qt=satepc&", "//maponline2.bdimg.com/starpic/?qt=satepc&", "//maponline3.bdimg.com/starpic/?qt=satepc&"],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e3.imgPath + "bg.png",
      bounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
      imgExtend: "png"
    },
    B_STREET_MAP: {
      tileUrls: er(e3.tileDomain, e3.rasterTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e3.imgPath + "bg.png",
      bounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
      imgExtend: "png"
    },
    BMAP_CUSTOM_LAYER: {
      tileUrls: [""],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 1,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e3.imgPath + "blank.gif",
      bounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
      imgExtend: "png"
    },
    B_EARTH_MAP: {
      tileUrls: [""],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: {
        minZoom: 3,
        maxZoom: 21
      },
      zoomLevelBase: 18,
      errorUrl: e3.imgPath + "blank.gif",
      bounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
      imgExtend: "png"
    }
  };
  var b6 = bH;

  function bT(hW, i, hS, T, hR) {
    this.mgr = hW;
    this.position = hS;
    this._cbks = [];
    this.name = hW.getTileName(T, hR, hW.map.config.style);
    this.info = T;
    this._transparentPng = hR.isTransparentPng();
    var hX = S("img");
    dm(hX);
    hX.galleryImg = false;
    var hV = hX.style;
    hV.position = "absolute";
    hV.width = hW.tileSize + "px";
    hV.height = hW.tileSize + "px";
    hV.left = hS[0] + "px";
    hV.top = hS[1] + "px";
    this.img = hX;
    this.src = i;
    if (ab && hS._offsetX === 0) {
      hV.opacity = 0;
      hV.willChange = "opacity"
    }
    var hU = this;
    this.img.onload = function (h5) {
      if (!hU.mgr) {
        return
      }
      var h0 = hU.mgr;
      var hY = h0.bufferTiles;
      if (h0.bufferNumber > 0) {
        hY[hU.name] = hU;
        hY.push(hU.name)
      }
      var h2 = hY.length - h0.bufferNumber;
      for (var h3 = 0; h2 > 0 && h3 < hY.length; h3++) {
        var h4 = hY[h3];
        if (!h0.mapTiles[h4]) {
          if (hY[h4]) {
            hY[h4].mgr = null;
            var h1 = hY[h4].img;
            if (h1.parentNode) {
              fq(h1);
              h1.parentNode.removeChild(h1)
            }
            h1 = null;
            hY[h4].img = null;
            hY[h4] = null;
            delete hY[h4]
          }
          hY.splice(h3, 1);
          h3--;
          h2--
        }
      }
      hU.loaded = true;
      h0.imgNumber++;
      if (!hd(hU.img)) {
        if (hR.tilesDiv) {
          hR.tilesDiv.appendChild(hU.img)
        }
      }
      var h5 = new bb("onimagechange");
      h5.action = "show";
      h5.tile = hU.name;
      h0.map.dispatchEvent(h5);
      if (ab && hS._offsetX === 0) {
        var hZ = new o({
          fps: 10,
          duration: 300,
          render: function (e) {
            if (hU.img && hU.img.style) {
              hU.img.style.opacity = e * 1
            }
          },
          finish: function () {
            if (hU.img && hU.img.style) {
              delete hU.img.style.opacity;
              hU.img.style.willChange = "auto"
            }
          }
        })
      }
      hU._callCbks()
    };
    this.img.onerror = function (h0) {
      hU.error = true;
      hU._callCbks();
      if (!hU.mgr) {
        return
      }
      var hY = hU.mgr;
      var hZ = b6[hR.mapType];
      if (hZ.errorUrl) {
        hU.img.src = hZ.errorUrl
      }
      if (!hd(hU.img)) {
        if (hR.tilesDiv) {
          hR.tilesDiv.appendChild(hU.img)
        }
      }
    };
    hX = null;
    var hT = new bb("onimagebefore");
    hT.tile = hU.name;
    hW.map.dispatchEvent(hT)
  }
  bT.prototype._addLoadCbk = function (e) {
    this._cbks.push(e)
  };
  bT.prototype._load = function () {
    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
      this.img.src = e3.imgPath + "blank.gif"
    } else {
      this.img.src = this.src
    }
  };
  bT.prototype._callCbks = function () {
    var T = this;
    for (var e = 0; e < T._cbks.length; e++) {
      T._cbks[e]()
    }
    T._cbks.length = 0
  };
  var ab = (!C.Browser.ie || C.Browser.ie > 8);

  function fd(e) {
    this.tileLayers = [];
    this.map = e;
    this.bufferNumber = 300;
    this.mapTiles = [];
    this.bufferTiles = [];
    this.config = b6[this.map.mapType];
    this.errorUrl = this.config.errorUrl;
    this.tileSize = this.config.tileSize;
    this.baseUnits = this.config.baseUnits;
    this.baseZoomLevel = this.config.zoomLevelBase;
    this.tileURLs = this.config.tileUrls;
    this.imgNumber = 0;
    this.numLoading = 0;
    this.temp = {}
  }
  bo.register(function (i) {
    if (i._renderType === "webgl") {
      return
    }
    var e = i.tileMgr = new fd(i);
    i.addEventListener("mousewheel", function (T) {
      e.mouseWheel(T)
    });
    i.addEventListener("dblclick", function (T) {
      e.dblClick(T)
    });
    i.addEventListener("rightdblclick", function (T) {
      e.dblClick(T)
    });
    i.addEventListener("minuspress", function (T) {
      e.keypress(T)
    });
    i.addEventListener("pluspress", function (T) {
      e.keypress(T)
    });
    i.addEventListener("load", function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return
      }
      e.loadTiles()
    });
    i.addEventListener("zoomstartcode", function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return
      }
      e._zoom(T)
    });
    i.addEventListener("moving", function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return
      }
      e.moveGridTiles()
    });
    i.addEventListener("resize", function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return
      }
      e.resizeMap(T)
    });
    i.addEventListener("addtilelayer", function (T) {
      e.addTileLayer(T)
    });
    i.addEventListener("removetilelayer", function (T) {
      e.removeTileLayer(T)
    })
  });
  C.extend(fd.prototype, {
    addTileLayer: function (hR) {
      var T = this;
      var i = hR.target;
      T.tileLayers.push(i);
      if (T.map.loaded) {
        T.moveGridTiles()
      }
    },
    removeTileLayer: function (hY) {
      var hZ = this;
      var hW = hY.target;
      var hU = hW.mapType;
      var hT = hZ.mapTiles;
      var h1 = hZ.bufferTiles;
      for (var T in h1) {
        var hR = T.split("-")[1];
        if (hR == hU) {
          delete h1[T]
        }
      }
      for (var T in hT) {
        var hR = T.split("-")[1];
        if (hR == hU) {
          delete hT[T]
        }
      }
      if (hZ.zoomsDiv && hZ.zoomsDiv.parentNode) {
        hZ.zoomsDiv.parentNode.removeChild(hZ.zoomsDiv);
        hZ.zoomsDiv.innerHTML = ""
      }
      var hS = hZ.map;
      if (hS.deepZoom) {
        var h0 = hS.deepZoom.preDeepZoomDiv;
        if (h0 && h0.parentNode) {
          h0.parentNode.removeChild(h0)
        }
      }
      for (var hX = 0, hV = hZ.tileLayers.length; hX < hV; hX++) {
        if (hW == hZ.tileLayers[hX]) {
          hZ.tileLayers.splice(hX, 1)
        }
      }
      hZ.moveGridTiles()
    },
    hideDeepZoomDiv: function () {
      var i = this,
        T = i.map;
      if (T.deepZoom) {
        var e = T.deepZoom.preDeepZoomDiv;
        if (e && e.style.display != "none") {
          e.style.display = "none"
        }
      }
    },
    getTileLayer: function (hS) {
      var hR = this;
      for (var T = 0, e = hR.tileLayers.length; T < e; T++) {
        tilelayer = hR.tileLayers[T];
        if (tilelayer.mapType == hS) {
          return tilelayer
        }
      }
      return null
    },
    _zoom: function (T) {
      var i = this;
      if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
        i.zoomsDiv.style.display = "none"
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles()
    },
    resizeMap: function (i) {
      this.loaded = false;
      this.moveGridTiles()
    },
    _checkTilesLoaded: function () {
      this.numLoading--;
      var e = this;
      if (this.numLoading == 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null
        }
        this._checkLoadedTimer = setTimeout(function () {
          if (e.numLoading == 0) {
            e.map.dispatchEvent(new bb("ontilesloaded"))
          }
          e._checkLoadedTimer = null
        }, 80)
      }
    },
    getTileName: function (e, T, i) {
      var hS = T.mapType;
      var hR = "TILE-" + hS + "-" + i + "-" + e[0] + "-" + e[1] + "-" + e[2];
      return hR
    },
    hideTile: function (hR, T) {
      var i = hR.img;
      if (hd(i)) {
        if (hR.loaded) {
          this.imgNumber--
        }
        if (i.parentNode) {
          fq(i);
          i.parentNode.removeChild(i)
        }
      }
      var hS = new bb("onimagechange");
      hS.tile = this.getTileName(hR.info, T, this.map.config.style);
      hS.action = "hide";
      delete this.mapTiles[hR.name];
      if (!hR.loaded) {
        fq(i);
        hR._callCbks();
        i = null;
        hR.img = null;
        hR.mgr = null
      }
      this.map.dispatchEvent(hS)
    },
    loadTiles: function () {
      var i = this;
      if (C.Browser.ie) {
        try {
          document.execCommand("BackgroundImageCache", false, true)
        } catch (T) {}
      }
      if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
        this.zoomsDiv.style.display = "none"
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles()
    },
    getCell: function (hS, hR) {
      var e = this.baseUnits * Math.pow(2, (this.baseZoomLevel - hR));
      var T = parseInt(hS.lng / e);
      var i = parseInt(hS.lat / e);
      return [T, i, e * (T + 0.5), e * (i + 0.5)]
    },
    moveGridTiles: function () {
      var h5 = this.map,
        ig = h5.getMapType(),
        ic = this.tileLayers.length;
      var ia = h5.centerPoint;
      if (ig !== BMAP_SATELLITE_MAP) {
        ia = d4.calcLoopCenterPoint(ia)
      }
      var hW = h5.width;
      var iu = h5.getZoomUnits();
      var ib = iu * hW;
      var ii = ia.lng - ib / 2;
      var h1 = ia.lng + ib / 2;
      var h4 = d4.isAddWidth(ii, h1);
      for (var ik = 0; ik < ic; ik++) {
        var hS = this.tileLayers[ik];
        if (hS.baseLayer || ic == 1) {
          this.tilesDiv = hS.tilesDiv
        }
        var h6 = b6[hS.mapType];
        var hR = h5.zoomLevel;
        var io = h5.getZoomUnits(h5.zoomLevel);
        var h0 = h6.baseUnits * Math.pow(2, (h6.zoomLevelBase - hR));
        var hY = Math.floor(ia.lng / h0);
        var ij = Math.floor(ia.lat / h0);
        var h3 = h6.tileSize;
        var h7 = [hY, ij, (ia.lng - hY * h0) / h0 * h3, (ia.lat - ij * h0) / h0 * h3];
        var hZ = h4 ? h5.width / 2 * 1.5 : h5.width / 2;
        var h2 = h7[0] - Math.ceil((hZ - h7[2]) / h3);
        var it = h7[1] - Math.ceil((h5.height / 2 - h7[3]) / h3);
        var il = h7[0] + Math.ceil((hZ + h7[2]) / h3);
        var h8 = h7[1] + Math.ceil((h5.height / 2 + h7[3]) / h3);
        var hX = [];
        for (var iq = h2; iq < il; iq++) {
          for (var ip = it; ip < h8; ip++) {
            hX.push([iq, ip]);
            var ie = "id_" + iq + "_" + ip + "_" + hR;
            hX[ie] = true
          }
        }
        if (hS.mapType !== BMAP_SATELLITE_MAP) {
          hX = d4.calcLoopTiles(hX, hR)
        }
        hX.sort((function (i) {
          return function (id, iw) {
            return ((0.4 * Math.abs(id[0] - i[0]) + 0.6 * Math.abs(id[1] - i[1])) - (0.4 * Math.abs(iw[0] - i[0]) + 0.6 * Math.abs(iw[1] - i[1])))
          }
        })([h7[0], h7[1]]));
        var T = this.mapTiles;
        var e = -ia.lng / io;
        var iv = ia.lat / io;
        var ih = [e, iv];
        for (var h9 in T) {
          var hU = T[h9];
          var ir = hU.info;
          if (!ir) {
            continue
          }
          var ie = "id_" + ir[0] + "_" + ir[1] + "_" + ir[2];
          if (!hX[ie]) {
            this.hideTile(hU, hS)
          }
        }
        var hT = -h5.offsetX + h5.width / 2;
        var hV = -h5.offsetY + h5.height / 2;
        hS.tilesDiv.style.left = Math.round(e + hT) - ih[0] + "px";
        hS.tilesDiv.style.top = Math.round(iv + hV) - ih[1] + "px";
        this.numLoading += hX.length;
        for (var iq = 0, im = hX.length; iq < im; iq++) {
          this.showTile([hX[iq][0], hX[iq][1], h5.zoomLevel], ih, hS, iq, h5.config.style)
        }
      }
    },
    showTile: function (hU, hT, hX, h2) {
      this.centerPos = hT;
      var hV = b6[hX.mapType];
      var hY = this.map.config.style;
      var hR = this.getTileName(hU, hX, hY);
      var hS = (hU[0] * hV.tileSize) + hT[0];
      var T = (-1 - hU[1]) * hV.tileSize + hT[1];
      var h1 = [hS, T];
      var hW = null;
      if (hX.mapType !== BMAP_SATELLITE_MAP) {
        hW = d4.calcLoopParam(hU[0], hU[2]);
        var h0 = hW.offsetX;
        h1[0] += h0;
        h1._offsetX = h0
      }
      var h5 = this;
      var h4 = this.mapTiles[hR];
      if (h4) {
        h4.img.style.left = h1[0] + "px";
        h4.img.style.top = h1[1] + "px";
        if (h4.loaded) {
          this._checkTilesLoaded()
        } else {
          h4._addLoadCbk(function () {
            h5._checkTilesLoaded()
          })
        }
        return
      }
      h4 = this.bufferTiles[hR];
      if (h4) {
        this.imgNumber++;
        hX.tilesDiv.insertBefore(h4.img, hX.tilesDiv.lastChild);
        this.mapTiles[hR] = h4;
        h4.img.style.left = h1[0] + "px";
        h4.img.style.top = h1[1] + "px";
        if (h4.loaded) {
          this._checkTilesLoaded()
        } else {
          h4._addLoadCbk(function () {
            h5._checkTilesLoaded()
          })
        }
        var h3 = new bb("onimagechange");
        h3.action = "cache";
        h3.tile = this.getTileName(hU, hX, hY);
        this.map.dispatchEvent(h3)
      } else {
        var hZ = new ej(hU[0], hU[1]);
        if (hW) {
          hZ.x = hW.col
        }
        var i = hX.getTilesUrl(hZ, hU[2]);
        h4 = new bT(this, i, h1, hU, hX);
        h4._addLoadCbk(function () {
          h5._checkTilesLoaded()
        });
        h4._load();
        this.mapTiles[hR] = h4;
        by(this.map)
      }
    },
    mouseWheel: function (hV) {
      var hU = this.map;
      if (!hU.config.enableWheelZoom) {
        return
      }
      var hW = hU.zoomLevel + (hV.trend === true ? 1 : -1);
      var hS = hU._getProperZoom(hW);
      if (hS.exceeded) {
        var T = new bb("onzoomexceeded");
        T.targetZoom = hW;
        hU.dispatchEvent(T);
        return
      }
      hU.dispatchEvent(new bb("onzoomstart"));
      hU.lastLevel = hU.zoomLevel;
      hU.zoomLevel = hS.zoom;
      var i = hV.pixel;
      var hR = hU.pixelToPointIn(i, {
        zoom: hU.lastLevel
      });
      var hT = hU.getZoomUnits(hU.zoomLevel);
      hU.centerPoint = new hs(hR.lng + hT * (hU.width / 2 - i.x), hR.lat - hT * (hU.height / 2 - i.y));
      this.zoom(i)
    },
    dblClick: function (T) {
      var i = this.map;
      if (!i.config.enableDblclickZoom) {
        return
      }
      if (i.mapType === "B_EARTH_MAP") {
        return
      }
      if (i.currentOperation === dU.dragging) {
        return
      }
      if (T.type == "onrightdblclick") {
        i.zoomOut(T.point)
      } else {
        i.zoomIn(T.point)
      }
    },
    keypress: function (T) {
      var i = this.map;
      if (i.getMapType() === BMAP_EARTH_MAP) {
        return
      }
      T.type == "onpluspress" ? i.zoomIn() : i.zoomOut()
    }
  });

  function cR(hR) {
    this.opts = hR || {};
    this.copyright = this.opts.copyright || {};
    this.transparentPng = this.opts.transparentPng || false;
    this.png8 = this.opts.png8 || false;
    this.baseLayer = this.opts.baseLayer || false;
    this.dataType = this.opts.dataType || 1;
    this.isFlat = this.opts.isFlat === false ? false : true;
    this.showLabel = this.opts.showLabel === false ? false : true;
    var e = this.opts.tileTypeName || "web";
    this.tileType = cL.getInstance(e);
    this.clipTile = this.opts.clipTile || false;
    this._type = "tilelayer";
    var i = f5() ? 128 : 256;
    this.cacheSize = this.opts.cacheSize || i;
    var T = this;
    this.tileCache = new eZ(this.cacheSize, {
      clearCallback: function (hS) {
        if (hS.label) {
          if (hS.label.textImageBitmap) {
            hS.label.textImageBitmap.close()
          }
          if (hS.label.indoorTextImageBitmap) {
            hS.label.indoorTextImageBitmap.close()
          }
        }
        T._removeIndoorData(hS)
      }
    });
    this.scaler = a6() >= 1.5 ? 2 : 1;
    this.normalUdt = aD("ditu", "normal").udt;
    this.numLoading = 0;
    this.useThumbData = false;
    if (this.baseLayer) {
      this.useThumbData = true
    }
    if (typeof this.opts.customLayer === "boolean") {
      this.customLayer = this.opts.customLayer
    } else {
      this.customLayer = true
    }
  }
  cR.inherits(ed, "TileLayer");
  C.extend(cR.prototype, {
    isTransparentPng: function () {
      return this.transparentPng
    },
    getTilesUrl: function (hY, e) {
      var T = b6[this.mapType];
      if (typeof T != "object") {
        return null
      }
      var hR = hY.x;
      var hZ = hY.y;
      if (this.mapType !== BMAP_SATELLITE_MAP) {
        var hZ = d4.calcLoopParam(hZ, e).col
      }
      var i = "";
      if (this.opts.tileUrlTemplate) {
        i = this.opts.tileUrlTemplate;
        i = i.replace(/\{X\}/, hZ);
        i = i.replace(/\{Y\}/, hR);
        i = i.replace(/\{Z\}/, e)
      } else {
        if (this.mapType == BMAPGL_NORMAL_MAP) {
          var hX = this.isCanvasMap ? 0 : 1;
          var hT = T.tileUrls[Math.abs(hZ + hR) % T.tileUrls.length];
          if (window.offLineIPAddress) {
            hT = window.offLineIPAddress + "tile5/"
          }
          var hS = this.map.config.style;
          i = hT + "?qt=vtile&x=" + hR + "&y=" + hZ + "&z=" + e + (hS === "default" ? "" : ("&styleId=" + e3.mapStyleNameIdPair[hS])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&showtext=" + hX;
          i = i.replace(/-(\d+)/gi, "M$1")
        }
        if (this.mapType == BMAP_SATELLITE_MAP) {
          var hU = aD("ditu", "satellite");
          var hW = hU.ver;
          var hV = hU.udt;
          i = T.tileUrls[Math.abs(hZ + hR) % T.tileUrls.length] + "u=x=" + hR + ";y=" + hZ + ";z=" + e + ";v=" + hW + ";type=sate&fm=46&udt=" + hV;
          i = i.replace(/-(\d+)/gi, "M$1")
        }
      }
      return i
    },
    initialize: function (hS) {
      this.map = hS;
      if (hS._renderType === "webgl") {
        var hR = null;
        if (this.customLayer !== false) {
          hR = this.getTilesUrl
        }
        C.extend(this, fS);
        this.labelProcessor = new dj(this);
        this.callbackDataQueue = [];
        if (hR) {
          this.getTilesUrl = hR
        }
        var e = this;
        hS.on("indoor_data_refresh", function (hT) {
          if (!e.baseLayer) {
            return
          }
          e._refreshIndoorData(hT.uid, hT.floor)
        });
        hS.on("custom_labels_ready", function (hT) {
          if (!e.baseLayer) {
            return
          }
          e._doWorkAfterLabelImageLoad(hT.virtualTile, hT.labelCanvas, null, hT.imgKey)
        });
        hS.on("glmoduleloaded", function () {
          if (!e.baseLayer) {
            return
          }
          e.updateAllIconsTextureCoords()
        })
      }
      if (!hS.temp.layerZIndex) {
        hS.temp.layerZIndex = 0
      }
      this.zIndex = this.zIndex || 0;
      if (this.baseLayer) {
        this.zIndex = 0
      }
      if (!hS.temp.layid) {
        hS.temp.layid = 0
      }
      if (!this.opts.mapType) {
        this.mapType = "BMAP_CUSTOM_LAYER_" + hS.temp.layid;
        hS.temp.layid++
      } else {
        this.mapType = this.opts.mapType
      }
      var i = b6[this.mapType];
      if (!i) {
        b6[this.mapType] = {
          tileUrls: [],
          tileSize: 256,
          baseUnits: 256,
          zoomLevelMin: 1,
          zoomLevelMax: 19,
          minZoom: 3,
          maxZoom: 19,
          minDataZoom: 3,
          maxDataZoom: 19,
          zoomLevelBase: 18,
          errorUrl: e3.imgPath + "/blank.gif",
          bounds: new dS(new hs(-21364736, -10616832), new hs(23855104, 15859712)),
          imgExtend: "png"
        }
      }
      if (hS._renderType !== "webgl") {
        var T = dI(hS.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
        T.style.display = "";
        T.style.left = Math.ceil(-hS.offsetX + hS.width / 2) + "px";
        T.style.top = Math.ceil(-hS.offsetY + hS.height / 2) + "px";
        this.tilesDiv = T
      }
      this.isCanvasMap = hS.isCanvasMap();
      this.lastZoom = hS.getZoom()
    },
    remove: function () {
      if (this.tilesDiv && this.tilesDiv.parentNode) {
        this.tilesDiv.innerHTML = "";
        this.tilesDiv.parentNode.removeChild(this.tilesDiv)
      }
      delete this.tilesDiv
    },
    getCopyright: function () {
      return this.copyright
    },
    getMapType: function () {
      return this.mapType
    },
    setZIndex: function (e) {
      this.zIndex = e;
      if (this.tilesDiv) {
        this.tilesDiv.style.zIndex = e
      }
    }
  });

  function c5(i, e, T) {
    this.bounds = i;
    this.content = e;
    this.mapType = T
  }
  c5.inherits(ed, "Copyright");
  var go = {
    get: function (e) {
      if (!go.singleton) {
        go.singleton = new ai(e)
      }
      return go.singleton
    }
  };

  function ai(i) {
    this._map = i;
    this._tileMgr = i.tileMgr;
    this._animationDiv = null;
    this._preAnimationDiv = null;
    this._animation = null;
    this._baseLayerDiv = null;
    this._transformStyleName = a8.ifSupportCSS3("transform", true);
    this._transformOriginStyleName = a8.ifSupportCSS3("transformOrigin", true);
    this._preZoomTimes = 1;
    this._preRenderTick = 1;
    this._enableCanvas2dMap = !!(i.getRenderType() === "canvas");
    this._isIE9 = !!(C.Browser.ie === 9);
    var e = this;
    i.addEventListener("maptypechange", function () {
      e.hide()
    });
    i.addEventListener("load", function () {
      e.hide()
    })
  }
  C.extend(ai.prototype, {
    prepareLayer: function () {
      var hR = this._map;
      var e = this._tileMgr;
      this._canvas2dMapMgr = hR.canvas2dMapMgr;
      var T = this._baseLayerDiv = e.tilesDiv;
      if (!this._animationDiv) {
        var i = this._preAnimationDiv;
        if (i) {
          i.parentNode && i.parentNode.removeChild(i);
          this._preAnimationDiv = null
        }
        this._preAnimationDiv = this._animationDiv = T.cloneNode(true);
        hR.platform.insertBefore(this._animationDiv, hR.platform.firstChild)
      }
      this.show()
    },
    prepareAniParam: function () {
      var hR = this._animationDiv;
      if (!hR) {
        return
      }
      var e = hR.children.length;
      var T;
      this._zoomAniInfo = [];
      for (var hS = e - 1; hS > -1; hS--) {
        var hT = {};
        T = hR.children[hS].style;
        hT.top = parseInt(T.top, 10);
        hT.left = parseInt(T.left, 10);
        this._zoomAniInfo[hS] = hT
      }
    },
    prepareLabelLayer: function () {
      var hS = this._map;
      if (this._enableCanvas2dMap && hS.canvas2dMapMgr) {
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.parentNode.removeChild(this.touchZoomLabelCanvas)
        }
        var i = hS.canvas2dMapMgr._labelCanvas;
        this.touchZoomLabelCanvas = i.cloneNode(false);
        var e = this.touchZoomLabelCanvas.getContext("2d");
        e.drawImage(i, 0, 0);
        hS.platform.insertBefore(this.touchZoomLabelCanvas, hS.platform.firstChild);
        var hR = parseInt(i.style.left, 10);
        var T = parseInt(i.style.top, 10);
        this.touchZoomLabelCanvas.style.zIndex = 9;
        this.touchZoomLabelCanvas.style[this._transformOriginStyleName] = (this._fixPosition.x - (hS.offsetX + hR)) + "px " + (this._fixPosition.y - (hS.offsetY + T)) + "px";
        i.style.visibility = "hidden"
      }
    },
    show: function () {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = ""
      }
    },
    showLabel: function () {
      var i = this._map;
      if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
        var e = i.canvas2dMapMgr._labelCanvas;
        if (e) {
          e.style.visibility = ""
        }
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.style.zIndex = -2;
          this.touchZoomLabelCanvas.style.visibility = "hidden"
        }
      }
    },
    hide: function () {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = "hidden"
      }
      if (this._preAnimationDiv) {
        this._preAnimationDiv.style.visibility = "hidden"
      }
    },
    hideNonAnimationLayers: function () {
      var hR = this._map;
      if (hR.getRenderType() === "dom") {
        if (hR.overlayDiv) {
          hR.overlayDiv.style.visibility = "hidden"
        }
        if (hR.overlayDivEx) {
          hR.overlayDivEx.style.visibility = "hidden"
        }
      }
      var hT = hR.tileMgr.tileLayers;
      var hS;
      for (var T = 0, e = hT.length; T < e; T++) {
        hS = hT[T];
        hS.tilesDiv.style.visibility = "hidden"
      }
    },
    showNonAnimationLayers: function () {
      var hR = this._map;
      if (hR.getRenderType() === "dom") {
        if (hR.overlayDiv) {
          hR.overlayDiv.style.visibility = ""
        }
        if (hR.overlayDivEx) {
          hR.overlayDivEx.style.visibility = ""
        }
      }
      var hT = hR.tileMgr.tileLayers;
      var hS;
      for (var T = 0, e = hT.length; T < e; T++) {
        hS = hT[T];
        hS.tilesDiv.style.visibility = ""
      }
    },
    setFixPosition: function (e) {
      this._fixPosition = e
    },
    setZoom: function (e, hX) {
      var hU = this._fixPosition;
      var h3 = this._map;
      var h4 = this._baseLayerDiv;
      var hV = {
        x: hU.x - parseInt(h4.style.left, 10) - h3.offsetX,
        y: hU.y - parseInt(h4.style.top, 10) - h3.offsetY
      };
      var hR = this._animationDiv;
      if (!hR) {
        return
      }
      var h1 = hR.children.length;
      var hZ;
      var h2 = this._transformStyleName;
      var hT = this._transformOriginStyleName;
      var h5 = this;
      var h7;
      var hW;
      for (var h0 = h1 - 1; h0 > -1; h0--) {
        var hY = this._zoomAniInfo[h0];
        hZ = hR.children[h0].style;
        var hS = hY.left - hV.x;
        var T = hY.top - hV.y;
        hY.dx = hS * e - hS;
        hY.dy = T * e - T;
        hY.preDx = hS - hS;
        hY.preDy = T - T;
        h7 = hY.preDx + (hY.dx - hY.preDx);
        hW = hY.preDy + (hY.dy - hY.preDy) + hX;
        hZ.left = hY.left + h7 + "px";
        hZ.top = hY.top + hW + "px";
        hZ.width = hZ.height = 256 * e + "px"
      }
      if (this._enableCanvas2dMap) {
        var h6 = !h5._isIE9 ? "translate3d(0px, " + hX + "px, 0) scale(" + e + ")" : "translate(0px, " + hX + "px) scale(" + e + ")";
        this.touchZoomLabelCanvas.style[h2] = h6
      }
    },
    setZoomFinish: function () {
      this._animationDiv = null
    },
    startAnimation: function (hU) {
      this.prepareLayer();
      this.hideNonAnimationLayers();
      var id = this._map;
      if (this.touchZoomLabelCanvas) {
        this.touchZoomLabelCanvas.style.display = "none"
      }
      hU = hU || {};
      var ib = hU.zoomCount || 0;
      var hZ = hU.fixPosition;
      var h9 = hU.fixMCPosition;
      var hX = hU.pixOffset;
      this._zoomCount = ib;
      var hR = id.getZoom();
      var ic = hR + ib;
      var e = id.config.enableContinuousZoom;
      var h3 = 0.5;
      var hY = 5;
      var T = Math.pow(2, ib);
      var ig = this._baseLayerDiv;
      var h0 = {
        x: hZ.x - parseInt(ig.style.left, 10) - id.offsetX,
        y: hZ.y - parseInt(ig.style.top, 10) - id.offsetY
      };
      var hV = this._animationDiv;
      var h7 = hV.children.length;
      var ii = this._preZoomTimes;
      var ia = [];
      var h8 = this._transformStyleName;
      var hW = this._transformOriginStyleName;
      for (var h6 = h7 - 1; h6 > -1; h6--) {
        var h4 = {};
        var h5 = hV.children[h6].style;
        h4.top = parseInt(h5.top, 10);
        h4.left = parseInt(h5.left, 10);
        var hT = h4.left - h0.x;
        var hS = h4.top - h0.y;
        h4.dx = hT * T - hT;
        h4.dy = hS * T - hS;
        h4.preDx = hT * ii - hT;
        h4.preDy = hS * ii - hS;
        ia[h6] = h4
      }
      var ie = this;
      var h2;
      var ih;
      var h1;
      this._zoomAni = new o({
        fps: 60,
        duration: e ? 500 : 1,
        transition: function (i) {
          i = i * hY / (2 * h3);
          return hY * i - h3 * i * i
        },
        render: function (it) {
          it = it * (4 * h3) / (hY * hY);
          h2 = ii + it * (T - ii);
          var ik = hR + eC(h2);
          var iq = null;
          var ip = 0;
          var iu = 0;
          if (hU.onAnimationBeforeLooping) {
            var iv = hU.onAnimationBeforeLooping(it, ik);
            iq = iv.loopingCenter;
            ip = iv.yDiff;
            iu = iv.totalYDiff
          }
          for (var il = ia.length - 1; il > -1; il--) {
            var im = ia[il];
            if (hV.children[il]) {
              var ir = hV.children[il].style;
              ih = im.preDx + (im.dx - im.preDx) * it - hX.width * it;
              h1 = im.preDy + (im.dy - im.preDy) * it - hX.height * it + ip;
              ir.left = im.left + ih + "px";
              ir.top = im.top + h1 + "px";
              ir.height = ir.width = 256 * h2 + "px"
            }
          }
          var ij = hX.width * it;
          var io = hX.height * it;
          if (id.isRestrict) {
            ie._enableCanvas2dMap && ie._canvas2dMapMgr.clearLabel()
          } else {
            ie._enableCanvas2dMap && ie._canvas2dMapMgr.drawLabel(h2, hZ, hR, ic, ib, it, ij, io, iu, ip)
          }
          ie._preZoomTimes = h2;
          ie._preRenderTick = it;
          hU.onAnimationLooping && hU.onAnimationLooping(it, ik, iq)
        },
        finish: function () {
          ie._preZoomTimes = 1;
          ie._zoomAni = null;
          ie._animationDiv = null;
          hU.onAnimationFinish && hU.onAnimationFinish();
          ie.showNonAnimationLayers()
        }
      });
      return this._zoomAni
    },
    stopAnimation: function () {
      if (this._zoomAni) {
        this._zoomAni.stop();
        this._zoomAni = null
      }
    }
  });

  function c(e) {
    this._initVars(e);
    this._initColorCanvas();
    this._bindEvent(e)
  }
  C.extend(c.prototype, {
    _initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this._labelCtx = e._labelCtx;
      this.ratio = this._map.config.ratio;
      this.sizeRatio = this.ratio > 1 ? 2 : 1;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000
    },
    _initColorCanvas: function () {
      var i = 256,
        T = S("canvas"),
        e = T.style;
      e.width = i + "px";
      e.height = i + "px";
      T.width = i;
      T.height = i;
      this._colorCvsSize = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext("2d")
    },
    getLabelImageData: function (h4) {
      var h3 = h4.textImg;
      var T = h4.textPos;
      var h1 = this.ratio;
      var hZ = this.sizeRatio / h1;
      var hS = this._colorCtx;
      var hW = this._colorCvsSize;
      hS.clearRect(0, 0, hW, hW);
      var hY = 0;
      var e = 0;
      var hV = 0;
      for (var hX = 0; hX < T.length; hX++) {
        if (T[hX].width > hY) {
          hY = T[hX].width;
          e = hX;
          hV = T[hX].drawX
        }
      }
      hY /= hZ;
      var h0 = 0;
      for (var hX = 0, hU = T.length; hX < hU; hX++) {
        var h2 = T[hX];
        var h5;
        if (hX === e) {
          h5 = 0
        } else {
          h5 = h2.drawX - hV
        }
        hS.drawImage(h3, h2.srcX, h2.srcY, h2.width, h2.height, h5, h0, h2.width / hZ, h2.height / hZ);
        if (h2.width / hZ > hY) {
          hY = h2.width / hZ
        }
        h0 += h2.height / hZ + 2 * h1
      }
      var hR = hS.getImageData(0, 0, hY, h0);
      var hT = hS.getImageData(0, 0, hY, h0);
      return [hR, hT]
    },
    _bindEvent: function (i) {
      var e = this,
        T = i._map;
      T.addEventListener("onspotmouseover", function (hU) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return
        }
        if (hU.spots.length > 0) {
          var hT = hU.spots[0].userdata.uid;
          var hS = hU.spots[0].userdata.name;
          var hR = e.findLabelByUid(hT, hS);
          hR && e._toHighLightColor(hR)
        }
      });
      T.addEventListener("onspotmouseout", function (hU) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return
        }
        if (hU.spots.length > 0) {
          var hT = hU.spots[0].userdata.uid;
          var hS = hU.spots[0].userdata.name;
          var hR = e.findLabelByUid(hT, hS);
          hR && e._toDefaultColor(hR)
        }
      });
      T.addEventListener("onspotclick", function (hU) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return
        }
        if (hU.spots && hU.spots.length > 0) {
          var hT = hU.spots[0].userdata.uid;
          var hS = hU.spots[0].userdata.name;
          var hR = e.findLabelByUid(hT, hS);
          hR && e._changeBaseMapState(hR)
        } else {
          e._recoverNormalState()
        }
      });
      T.on("spot_status_reset", function () {
        e._recoverNormalState()
      });
      T.on("spot_highlight", function (hS) {
        var hR = e.findLabelByUid(hS.uid);
        hR && e._changeBaseMapState(hR)
      })
    },
    _getTextBound: function (h2) {
      if (!h2.textPos) {
        return null
      }
      var h0 = this.ratio;
      var hY = this.sizeRatio / h0;
      var T = h2.textPos;
      var h1 = h2.baseDrawX;
      var hZ = h2.baseDrawY;
      var hW = h1 * h0 + (T[0].drawX - h1) / hY;
      var hU = hZ * h0 + (T[0].drawY - hZ) / hY;
      var hS = hW + T[0].width / hY;
      var e = hU + T[0].height / hY;
      for (var hX = 0, hV = T.length; hX < hV; hX++) {
        var h3 = T[hX];
        var hT = h1 * h0 + (h3.drawX - h1) / hY;
        if (hT < hW) {
          hW = hT
        }
        var hR = hZ * h0 + (h3.drawY - hZ) / hY;
        if (hR < hU) {
          hU = hR
        }
        if (hT + h3.width > hS) {
          hS = hT + h3.width
        }
        if (hR + h3.height > e) {
          e = hR + h3.height
        }
      }
      return [hW, hU, hS, e]
    },
    _toHighLightColor: function (T) {
      if (T._tempRank && T._tempRank == this.RANK5) {
        return
      }
      var hV = this._getTextBound(T);
      if (!hV) {
        return
      }
      var hR = Math.round(hV[0]);
      var i = Math.round(hV[1]);
      var e = this.getLabelImageData(T);
      var hT = e[0];
      var hS = e[1];
      var hU = this._canvas2dMapMgr.getFilterImageData(hT, this.RANK5);
      T._oldImgData = hS;
      this._labelCtx.putImageData(hU, hR, i)
    },
    _toDefaultColor: function (e) {
      if (e._tempRank && e._tempRank == this.RANK5) {
        return
      }
      if (e._oldImgData) {
        var i = this.sizeRatio;
        var T = this._getTextBound(e);
        if (!T) {
          return
        }
        this._labelCtx.putImageData(e._oldImgData, Math.round(T[0]), Math.round(T[1]));
        e._oldImgData = null
      }
    },
    _changeBaseMapState: function (hR) {
      var T = this._canvas2dMapMgr;
      var i = hR.guid;
      var e = hR.guidExt;
      var hS = {
        guid: i,
        name: hR.name,
        guidExt: e
      };
      T._labelStrategy.setStrategyInfo(hS);
      T._loadData()
    },
    _recoverNormalState: function () {
      var e = this._canvas2dMapMgr;
      e._labelStrategy.setStrategyInfo(null);
      e._loadData()
    },
    findLabelByUid: function (hT, hR) {
      var hV = this._canvas2dMapMgr,
        e = hV._computedLabel;
      for (var hS = 0, T = e.length; hS < T; hS++) {
        var hU = e[hS];
        if (!hV.isClickableLabel(hU)) {
          continue
        }
        if (hT && hU.guid === hT) {
          return hU
        }
        if (hR && hU.name === hR) {
          return hU
        }
      }
      return null
    }
  });

  function ec(e) {
    this._initVars(e)
  }
  C.extend(ec.prototype, {
    _initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.ratio = this._map.config.ratio;
      this._strategyInfo = null;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000
    },
    setStrategyInfo: function (e) {
      this._strategyInfo = e
    },
    preComputeLabel: function (hX, iR, iA, h9, iL, i5) {
      var iu = [],
        h5 = hX._centerX,
        h3 = hX._centerY,
        i6 = h9 * iL;
      var iG = this.ratio;
      var hW = this._map.getZoom();
      var io = 0;
      if (hW === 5) {
        io = 4
      }
      if (hW === 8) {
        io = -6
      }
      hX.sort(function (i7, i) {
        if (i7.x * i7.y < i.x * i.y) {
          return -1
        } else {
          return 1
        }
      });
      for (var iq = 0, il = hX.length; iq < il; iq++) {
        var iW = hX[iq],
          ig = iW.x,
          ic = iW.y,
          ia = iW.z;
        var ii = d4.calcLoopParam(ig, ia).offsetX;
        var iE = ig * i6,
          iD = (ic + 1) * i6,
          hR = (iE - h5) / h9 + iR / 2 + ii,
          T = (h3 - iD) / h9 + iA / 2;
        for (var im = 0, i0 = iW.length; im < i0; im++) {
          var hZ = iW[im],
            h6 = undefined,
            h4 = undefined,
            iY = undefined,
            iX = undefined;
          var iN = hZ.baseDrawX = hR + hZ.baseX;
          var iM = hZ.baseDrawY = T + hZ.baseY;
          if (hZ.type == "fixed") {
            var iy = hZ.iconPos,
              h8 = hZ.textPos,
              i2 = hZ.textImg;
            if (iy) {
              iy.drawX = hR + iy.destX;
              iy.drawY = T + iy.destY;
              h6 = iy.drawX;
              h4 = iy.drawY;
              iY = iy.drawX + iy.width;
              iX = iy.drawY + iy.height
            }
            if (h8 && i2) {
              for (var iO = 0; iO < h8.length; iO++) {
                var i1 = h8[iO];
                i1.drawX = hR + i1.destX;
                i1.drawY = T + i1.destY;
                if (!h6) {
                  h6 = i1.drawX;
                  h4 = i1.drawY;
                  iY = i1.drawX + i1.width;
                  iX = i1.drawY + i1.height
                } else {
                  if (i1.drawX < h6) {
                    h6 = i1.drawX
                  }
                  if (i1.drawY < h4) {
                    h4 = i1.drawY
                  }
                  if (i1.drawX + i1.width > iY) {
                    iY = i1.drawX + i1.width
                  }
                  if (i1.drawY + i1.height > iX) {
                    iX = i1.drawY + i1.height
                  }
                }
              }
            }
          } else {
            hZ.tileX = hR;
            hZ.tileY = T;
            h6 = hR + hZ.minXOriginal;
            h4 = T + hZ.minYOriginal;
            iY = hR + hZ.maxXOriginal;
            iX = T + hZ.maxYOriginal
          }
          if (h6 != undefined) {
            var iQ = iN + (h6 - iN) / iG;
            var iP = iM + (h4 - iM) / iG;
            var ir = iN + (iY - iN) / iG;
            var ip = iM + (iX - iM) / iG;
            hZ.minX = iQ;
            hZ.minY = iP;
            hZ.maxX = ir;
            hZ.maxY = ip;
            var iU = (iQ + ir) / 2,
              iT = (iP + ip) / 2,
              iB = h5 + (iU - iR / 2) * h9,
              iz = h3 + (iA / 2 - iT) * h9;
            hZ.geoX = iB;
            hZ.geoY = iz;
            iu.push(hZ)
          }
        }
      }
      if (i5) {
        for (var iq = 0, il = i5.length; iq < il; iq++) {
          var ik = i5[iq];
          var iJ = ik[0];
          var h0 = ik[1];
          var iy = iJ.iconPos;
          var hU = iy.geoX;
          var hS = iy.geoY;
          var iN = (hU - h5) / h9 + iR / 2;
          var iM = (h3 - hS) / h9 + iA / 2;
          var h6 = iN + iy.destX;
          var h4 = iM + iy.destY;
          var iY = h6 + iy.width;
          var iX = h4 + iy.height;
          iJ.textPos = iJ.textPos || iJ._textPos;
          var h8 = iJ.textPos;
          var iS = h8[0];
          var ie = iN + iS.destX;
          var h2 = iM + iS.destY;
          if (h2 < h4) {
            h4 = h2
          }
          if (ie + iS.width > iY) {
            iY = ie + iS.width
          }
          if (h2 + iS.height > iX) {
            iX = h2 + iS.height
          }
          if (h8.length === 2) {
            var id = h8[1];
            var ib = iN + id.destX;
            var h1 = iM + id.destY;
            if (h1 < h4) {
              h4 = h1
            }
            if (ib + id.width > iY) {
              iY = ib + id.width
            }
            if (h1 + id.height > iX) {
              iX = h1 + id.height
            }
          }
          iJ._tempBounds = [h6, h4, iY, iX];
          var iy = h0.iconPos;
          var hU = iy.geoX;
          var hS = iy.geoY;
          var iN = (hU - h5) / h9 + iR / 2;
          var iM = (h3 - hS) / h9 + iA / 2;
          var h6 = iN + iy.destX;
          var h4 = iM + iy.destY;
          var iY = h6 + iy.width;
          var iX = h4 + iy.height;
          h0.textPos = h0.textPos || h0._textPos;
          var h8 = h0.textPos;
          var iS = h8[0];
          var ie = iN + iS.destX;
          var h2 = iM + iS.destY;
          if (ie < h6) {
            h6 = ie
          }
          if (h2 < h4) {
            h4 = h2
          }
          if (h2 + iS.height > iX) {
            iX = h2 + iS.height
          }
          if (h8.length === 2) {
            var id = h8[1];
            var ib = iN + id.destX;
            var h1 = iM + id.destY;
            if (ib < h6) {
              h6 = ib
            }
            if (h1 < h4) {
              h4 = h1
            }
            if (h1 + id.height > iX) {
              iX = h1 + id.height
            }
          }
          h0._tempBounds = [h6, h4, iY, iX]
        }
        for (var iq = 0, il = i5.length; iq < il; iq++) {
          var ik = i5[iq];
          var iJ = ik[0];
          var h0 = ik[1];
          if (iq === 0 && h0.textPos) {
            h0._textPos = h0.textPos;
            delete h0.textPos
          }
          var iV = iJ;
          if (!iJ.textPos && h0.textPos) {
            iV = h0
          }
          var iZ = iV._tempBounds;
          for (im = iq + 1; im < il; im++) {
            var ij = i5[im];
            var iv = ij[0];
            var i4 = ij[1];
            var h7 = 0;
            var i3 = iv._tempBounds;
            if (!(iZ[2] < i3[0] || iZ[0] > i3[2] || iZ[3] < i3[1] || iZ[1] > i3[3])) {
              h7++;
              if (iv.textPos) {
                iv._textPos = iv.textPos;
                delete iv.textPos
              }
            }
            var i3 = i4._tempBounds;
            if (!(iZ[2] < i3[0] || iZ[0] > i3[2] || iZ[3] < i3[1] || iZ[1] > i3[3])) {
              h7++;
              if (i4.textPos) {
                i4._textPos = i4.textPos;
                delete i4.textPos
              }
            }
            if (h7 >= 2) {
              if (iV.textPos) {
                iV._textPos = iV.textPos;
                delete iV.textPos
              }
            }
          }
        }
        for (var iq = 0, il = i5.length; iq < il; iq++) {
          var ik = i5[iq];
          var iJ = ik[0];
          var h0 = ik[1];
          var iw = iJ;
          if (!iJ.textPos && h0.textPos) {
            iw = h0
          }
          var iy = iw.iconPos;
          var hU = iy.geoX;
          var hS = iy.geoY;
          var iN = iw.baseDrawX = (hU - h5) / h9 + iR / 2;
          var iM = iw.baseDrawY = (h3 - hS) / h9 + iA / 2;
          iy.drawX = iN + iy.destX;
          iy.drawY = iM + iy.destY;
          var h6 = iy.drawX;
          var h4 = iy.drawY;
          var iY = iy.drawX + iy.width;
          var iX = iy.drawY + iy.height;
          var h8 = iw.textPos;
          if (h8) {
            var iS = h8[0];
            iS.drawX = iN + iS.destX;
            iS.drawY = iM + iS.destY;
            if (iS.drawX < h6) {
              h6 = iS.drawX
            }
            if (iS.drawY < h4) {
              h4 = iS.drawY
            }
            if (iS.drawX + iS.width > iY) {
              iY = iS.drawX + iS.width
            }
            if (iS.drawY + iS.height > iX) {
              iX = iS.drawY + iS.height
            }
            if (h8.length === 2) {
              var id = h8[1];
              id.drawX = iN + id.destX;
              id.drawY = iM + id.destY;
              if (id.drawX < h6) {
                h6 = id.drawX
              }
              if (id.drawY < h4) {
                h4 = id.drawY
              }
              if (id.drawX + id.width > iY) {
                iY = id.drawX + id.width
              }
              if (id.drawY + id.height > iX) {
                iX = id.drawY + id.height
              }
            }
          }
          var iQ = iN + (h6 - iN) / iG;
          var iP = iM + (h4 - iM) / iG;
          var ir = iN + (iY - iN) / iG;
          var ip = iM + (iX - iM) / iG;
          iw.minX = iQ;
          iw.minY = iP;
          iw.maxX = ir;
          iw.maxY = ip;
          var iI = (iQ + ir) / 2;
          var iH = (iP + ip) / 2;
          var hV = h5 + (iI - iR / 2) * h9;
          var hT = h3 + (iA / 2 - iH) * h9;
          iw.geoX = hV;
          iw.geoY = hT;
          iu.push(iw)
        }
      }
      var iK = this._strategyInfo;
      if (iK) {
        var it = iK.guid;
        var iC = iK.name;
        var ih = iK.guidExt;
        for (var iq = 0, il = iu.length; iq < il; iq++) {
          var hY = iu[iq];
          delete hY._tempRank;
          if (!this._canvas2dMapMgr.isClickableLabel(hY) || (ih === 1 && !hY.guidExt)) {
            continue
          }
          if ((it && it === hY.guid) || (iC && iC === hY.name)) {
            hY._tempRank = this.RANK5
          }
        }
      } else {
        for (var iq = 0, il = iu.length; iq < il; iq++) {
          var hY = iu[iq];
          if (hY.type == "line" || !hY.iconPos) {
            continue
          }
          delete hY._tempRank
        }
      }
      iu.sort(function (i8, i7) {
        var i9 = i8._tempRank ? i8._tempRank : i8.rank,
          i = i7._tempRank ? i7._tempRank : i7.rank;
        if (i9 === i) {
          return i8.baseX - i7.baseX
        }
        return i - i9
      });
      for (var iq = 0, il = iu.length; iq < il; iq++) {
        var iV = iu[iq];
        iV.isDel = false;
        iV.isFadeout = false;
        iV._schedule = 0;
        iV._isIgnore = false;
        iV.arrIntersectIndex = [];
        for (im = iq + 1; im < il; im++) {
          var ix = iu[im];
          if (!(iV.maxX - io < ix.minX || iV.minX > ix.maxX - io || iV.maxY - io < ix.minY || iV.minY > ix.maxY - io)) {
            iV.arrIntersectIndex.push(im)
          }
        }
      }
      for (var iq = 0, il = iu.length; iq < il; iq++) {
        var hY = iu[iq];
        if (hY.isDel == false) {
          var e = hY.arrIntersectIndex;
          for (var im = 0, i0 = e.length; im < i0; im++) {
            var iF = iu[e[im]];
            iF.isDel = true;
            if (iF.guidExt === 1) {
              iF.isDel = false
            }
          }
        }
      }
      return iu
    }
  });

  function ah(e) {
    this._map = e;
    this._initCanvas();
    this._initVars();
    this._bindEvent();
    this._tileType = cL.getInstance("na")
  }
  bo.register(function (i) {
    if (i.getRenderType() === "canvas") {
      var e = i.config.style;
      if (bo["FeatureStyle" + e]) {
        i.canvas2dMapMgr = new ah(i)
      } else {
        i.loadMapStyleFiles(function () {
          i.canvas2dMapMgr = new ah(i);
          i.canvas2dMapMgr._loadData()
        })
      }
    }
  });
  C.extend(ah.prototype, {
    _initCanvas: function () {
      var hU = this._map,
        hS = hU.getSize(),
        hR = hS.width,
        i = hS.height,
        e = hU.platform,
        hV = S("canvas"),
        hT = hV.style;
      var T = this.ratio = hU.config.ratio;
      this._width = hR;
      this._height = i;
      hT.cssText = "position: absolute;left:0;top:0;width:" + hR + "px;height:" + i + "px;z-index:100;";
      hV.width = hR * T;
      hV.height = i * T;
      this._labelCanvas = hV;
      this._labelCtx = hV.getContext("2d");
      e.appendChild(hV)
    },
    _initVars: function () {
      var e = aD("ditu", "normal");
      this._udt = e.udt;
      this._version = e.ver;
      this._labelDataUrls = b6.B_NORMAL_MAP.vectorTileUrls;
      this._style = bo["FeatureStyle" + this._map.config.style];
      this._labelCount = 0;
      this._vectorDrawLib = new a0(this);
      this._cache = {
        maxNum: 500,
        delNum: 50,
        arrCache: []
      };
      this._computedLabel = null;
      this._spotData = null;
      this._labelStrategy = new ec(this);
      this._labelClick = new c(this);
      this._biz = new gN(this);
      this._map.temp.isPermitSpotOver = true;
      this.labelStyleParam = "pl";
      if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
        this.labelStyleParam = "sl"
      }
      this.statRequestCount = 0;
      this.statResponseCount = 0
    },
    _resizeHandler: function (hT) {
      var hV = this,
        i = hV._map,
        hS = i.getSize(),
        T = hS.width,
        hX = hS.height;
      var hU = this.ratio;
      var hY = this._labelCanvas,
        hR = hY.style;
      hR.width = T + "px";
      hR.height = hX + "px";
      hY.width = T * hU;
      hY.height = hX * hU;
      hV._width = T;
      hV._height = hX;
      var hW = true;
      hV._loadData(hW)
    },
    _bindEvent: function () {
      var e = this,
        i = e._map;
      i.addEventListener("load", function (T) {
        e.clearLabel();
        e._loadData()
      });
      i.addEventListener("zoomend", function (T) {
        if (!T.notClearLabel) {
          e.clearLabel()
        }
        e._loadData()
      });
      i.addEventListener("moveend", function (T) {
        e._loadData()
      });
      i.addEventListener("resize", function (T) {
        e._resizeHandler(T)
      });
      i.addEventListener("maptypechange", function (T) {
        if (T.mapType === BMAP_EARTH_MAP) {
          e.hideLabelCanvas()
        } else {
          e.showLabelCanvas();
          if (T.mapType === BMAPGL_NORMAL_MAP) {
            e.labelStyleParam = "pl"
          } else {
            if (T.mapType === BMAP_SATELLITE_MAP) {
              e.labelStyleParam = "sl"
            }
          }
          e._loadData()
        }
      });
      i.addEventListener("streetlayer_show", function (T) {
        if (this.isCanvasMap()) {
          e.showLabelCanvas()
        }
      });
      i.addEventListener("streetlayer_hide", function (T) {
        if (this.isCanvasMap()) {
          e.hideLabelCanvas()
        }
      });
      i.addEventListener("loadbizdata", function (hR) {
        var T = hR.data;
        e._biz.proecessBizData(T, function () {
          e.updateLabel()
        })
      });
      i.addEventListener("unloadbizdata", function (T) {
        e._biz.clearBizData();
        e.updateLabel()
      });
      e.isDrawText = false;
      setTimeout(function () {
        if (!e.isDrawText) {
          i.dispatchEvent(new bb("onmapwhitescreen"))
        }
      }, 10000)
    },
    getStyle: function () {
      return this._style
    },
    _getZoomUnits: function (e) {
      return Math.pow(2, 18 - e)
    },
    _createCacheForm: function (T, hV, hU, i) {
      var hT = this;
      var e = hT._cache;
      var hR = e.arrCache;
      var hW = this._getLabelId(T, hV, hU, i);
      var hS = {
        id: hW,
        updateLabelCounter: 0
      };
      hR.push(hS);
      hR[hW] = hS;
      return hS
    },
    _getLabelId: function (i, hR, T, e) {
      return "_" + i + "_" + hR + "_" + T + "_" + e + "_" + this.labelStyleParam
    },
    _getCache: function (i, hR, T, e) {
      return this._cache.arrCache[this._getLabelId(i, hR, T, e)]
    },
    _setCacheValue: function (hS, h5, h3, hR, hY) {
      var h0 = this;
      var e = h0._cache;
      var hU = e.arrCache;
      var hW = e.maxNum;
      var hT = e.delNum;
      var h4 = this._getLabelId(hS, h5, h3, hR);
      var hZ = hU[h4];
      if (hY) {
        hZ.lb = hY
      }
      if (hU.length > hW) {
        var T = hU.splice(0, hT);
        for (var hX = 0, hV = T.length; hX < hV; hX++) {
          var h1 = T[hX],
            h2 = h1.id;
          if (hU[h2].lb) {
            hU[h2].lb = null
          }
          hU[h2] = null;
          delete hU[h2]
        }
        T = null
      }
    },
    _loadData: function (h3) {
      var ip = this._map;
      if (!ip.isCanvasMap()) {
        return
      }
      var hW = ip.getCenterIn();
      var io = d4.calcLoopCenterPoint(hW);
      var hV = this._tileType;
      var hY = this._width / 2;
      var ia = this._height;
      var ib = ip.getZoom();
      var h7 = hV.getDataZoom(ib);
      var h0 = ip.getZoomUnits(ib);
      var h6 = h0 * hY;
      var im = io.lng - h6;
      var il = io.lng + h6;
      var h4 = d4.isAddWidth(im, il);
      hY = h4 ? hY * 1.5 : hY;
      var h5 = hV.getTileSize(ib);
      var hS = hV.getMercatorSize(ib, h7);
      var hZ = Math.floor(io.lng / hS);
      var h1 = Math.floor(io.lat / hS);
      var hT = [hZ, h1, (io.lng - hZ * hS) / hS * h5, (io.lat - h1 * hS) / hS * h5];
      var ie = hT[0] - Math.ceil((hY - hT[2]) / h5);
      var ij = hT[1] - Math.ceil((ia / 2 - hT[3]) / h5);
      var h9 = hT[0] + Math.ceil((hY + hT[2]) / h5);
      var ig = hT[1] + Math.ceil((ia / 2 + hT[3]) / h5);
      ip.temp.isPermitSpotOver = false;
      var e = [];
      for (var ii = ie; ii < h9; ii++) {
        for (var ih = ij; ih < ig; ih++) {
          e.push([ii, ih, h7]);
          var h8 = "id_" + ii + "_" + ih + "_" + ib;
          e[h8] = true
        }
      }
      e._zoom = h7;
      e = d4.calcLoopTiles(e, ib);
      e.sort((function (i) {
        return function (id, ir) {
          return ((0.4 * Math.abs(id[0] - i[0]) + 0.6 * Math.abs(id[1] - i[1])) - (0.4 * Math.abs(ir[0] - i[0]) + 0.6 * Math.abs(ir[1] - i[1])))
        }
      })([hT[0], hT[1]]));
      var h2 = this._cache.arrCache;
      this._curViewLabels = [];
      var hR = "viewKey_" + Math.floor(hW.lng) + "_" + Math.floor(hW.lat) + "_" + ib;
      this.statRequestCount = 0;
      this.statResponseCount = 0;
      this._labelCount += e.length;
      var hX = ib;
      for (var ii = 0, ic = e.length; ii < ic; ii++) {
        var hZ = e[ii][0];
        var h1 = e[ii][1];
        var T = e[ii][2];
        var hU = this._getLabelId(hZ, h1, T, hX);
        var ik = h2[hU];
        if (!ik) {
          ik = this._createCacheForm(hZ, h1, T, hX)
        }
        if (typeof ik.lb === "undefined") {
          ik.lb = null;
          this._loadLabelData(hZ, h1, T, hX, h5, hR);
          this.statRequestCount++
        } else {
          if (ik.lb) {
            this._curViewLabels.push(ik.lb);
            this._labelCount--
          } else {
            if (h3) {
              this._loadLabelData(hZ, h1, T, hX, h5, hR)
            }
            ik.updateLabelCounter++
          }
        }
      }
      if (this._labelCount === 0) {
        this.updateLabel()
      }
      var iq = this;
      if (iq.errorTimer) {
        clearTimeout(iq.errorTimer)
      }
      iq.errorTimer = setTimeout(function () {
        if (iq._labelCount !== 0) {
          iq._labelCount = 0;
          iq.updateLabel()
        }
        var ir = new bb("onloaddatatimeout");
        var it = 0;
        var id = 0;
        var iu = 0;
        var i = 0;
        if (iq.statRequestCount === iq.statResponseCount) {
          it = 1
        } else {
          id = 1
        }
        if (id === 1) {
          i = iq.statRequestCount - iq.statResponseCount;
          iu = iq.statResponseCount
        }
        ir.noTimeoutCount = it;
        ir.timeoutCount = id;
        ir.timeoutNoLoaded = i;
        ir.timeoutLoaded = iu;
        iq._map.dispatchEvent(ir)
      }, 500)
    },
    clearLabel: function () {
      var e = this._width;
      var T = this._height;
      var i = this.ratio;
      this._labelCtx.clearRect(0, 0, e * i, T * i)
    },
    updateLabel: function () {
      var i = this._map;
      var e = i.getCenterIn();
      var hR = this._width;
      var hU = this._height;
      var hX = i.getZoom();
      var hW = this._tileType.getTileSize(hX);
      var hV = this._getZoomUnits(hX);
      var T = this._labelCtx;
      this._labelCanvas.style.left = -i.offsetX + "px";
      this._labelCanvas.style.top = -i.offsetY + "px";
      var hT = this._curViewLabels;
      hT._centerX = e.lng;
      hT._centerY = e.lat;
      var hS = this._biz.bizLabels;
      this._computedLabel = this._labelStrategy.preComputeLabel(hT, hR, hU, hV, hW, hS);
      this._computedLabel._zoom = hX;
      this.clearLabel();
      this._vectorDrawLib.drawIconAndText(T, this._computedLabel, hX);
      this._addSpotData();
      i.temp.isPermitSpotOver = true;
      if (hT.length > 0) {
        this.isDrawText = true
      }
    },
    _loadLabelData: function (h0, hZ, hY, T, h1, e) {
      var hT = h0.toString();
      var hR = hZ.toString();
      var hV = "cbk_" + hT.replace("-", "_") + "_" + hR.replace("-", "__") + "_" + Math.floor(hY);
      var h5 = eA + "." + hV;
      var h4 = this._labelDataUrls;
      var hX = Math.abs(h0 + hZ) % h4.length;
      var ia = h4[hX];
      if (window.offLineIPAddress) {
        ia = window.offLineIPAddress + "pvd/"
      }
      var i = this.labelStyleParam;
      var h3 = "?qt=vtile";
      var h6 = "";
      if (this._map.config.style !== "default") {
        h6 = "&styleId=" + e3.mapStyleNameIdPair[this._map.config.style]
      }
      var h2 = "x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}" + h6 + "&textonly=1&textimg=1&scaler={scaler}&fn=" + encodeURIComponent(h5);
      var h7 = d4.calcLoopParam(h0, hY).col;
      var hW = this.ratio > 1 ? 2 : 1;
      var hU = h2.replace(/{x}/, h7).replace(/{y}/, hZ).replace(/{z}/, Math.floor(hY)).replace(/{styles}/, i).replace(/{udt}/, this._udt).replace(/{v}/, this._version).replace(/{scaler}/, hW);
      var hS = ia + h3 + "&param=" + window.encodeURIComponent(gl(hU));
      var h9 = this;
      var h8 = h9._map;
      bo[hV] = function (ib) {
        h9._vectorDrawLib.parseLabelData(ib, h0, hZ, hY, T, h1, function (ih) {
          var id = h8.getCenterIn();
          var ii = h8.getZoom();
          var ik = "viewKey_" + Math.floor(id.lng) + "_" + Math.floor(id.lat) + "_" + ii;
          h9._labelCount--;
          var il = h9._getCache(h0, hZ, hY, T).updateLabelCounter;
          h9._labelCount -= il;
          var ie = h9._curViewLabels;
          if (ik === e || (h9._labelCount < 0 && ii === hY)) {
            ie.push(ih)
          }
          if (ik === e) {
            h9.statResponseCount++
          }
          if (h9._labelCount <= 0) {
            var ic = (new Date()).getTime();
            h9.updateLabel();
            var ig = (new Date()).getTime();
            var ij = new bb("oncanvasmaploaded");
            ij.drawTime = ig - ic;
            if (h9.statResponseCount === h9.statRequestCount) {
              ij.isAllLoadedDrawing = true
            }
            h8.dispatchEvent(ij)
          }
          h9._setCacheValue(h0, hZ, hY, T, ih);
          delete bo[hV]
        })
      };
      hm.load(hS)
    },
    drawLabel: function (T, hR, hY, i, hW, hS, e, hT, hX, hU) {
      var hV = this;
      if (!hV._computedLabel) {
        return
      }
      if (hV._computedLabel._zoom !== hY) {
        hV.clearLabel();
        return
      }
      hV._map.temp.isPermitSpotOver = false;
      hV.clearLabel();
      hV._vectorDrawLib.zoomingIconAndText(this._labelCtx, hV._computedLabel, T, hR, i, hW, hS, e, hT, hX, hU)
    },
    _addSpotData: function () {
      this._spotData = [];
      var hY = this._map.getZoom();
      for (var hT = 0, hS = this._computedLabel.length; hT < hS; hT++) {
        var hV = this._computedLabel[hT];
        if (!this.isClickableLabel(hV) || (hV.guidExt === 1 && hV.startScale > hY)) {
          continue
        }
        var hU = [];
        hU[0] = (hV.minX - hV.maxX) / 2;
        hU[1] = (hV.minY - hV.maxY) / 2;
        hU[2] = (hV.maxX - hV.minX) / 2;
        hU[3] = (hV.maxY - hV.minY) / 2;
        var hR = null;
        if (hV.iconPos) {
          hR = new hs(hV.iconPos.geoX, hV.iconPos.geoY)
        }
        var T = hV.name ? hV.name.replace("\\\\", "<br>") : "";
        if (hV.iconPos && hV.iconPos.iconType.indexOf("ditie") > -1 && this._map.getZoom() > 14) {
          T = ""
        }
        var hX = {
          n: T,
          pt: new hs(hV.geoX, hV.geoY),
          userdata: {
            iconPoint: hR,
            uid: hV.guid,
            name: T,
            type: hV.iconPos ? hV.iconPos.iconType : "",
            iconImg: hV.iconImg,
            mapPoi: true,
            adver_log: hV.adver_log || ""
          },
          bd: hU,
          tag: "MAP_SPOT_INFO"
        };
        this._spotData.push(hX)
      }
      var hW = new bb("onspotsdataready");
      hW.spots = this._spotData;
      this._map._spotDataOnCanvas = this._spotData;
      this._map.dispatchEvent(hW)
    },
    isClickableLabel: function (e) {
      if (e.isDel || (!e.guid && !e.name)) {
        return false
      }
      return true
    },
    getFilterImageData: function (T, hU) {
      var hV = T.data,
        hT = this._labelStrategy,
        hU = parseInt(hU);
      for (var hW = 0, hS = hV.length; hW < hS; hW += 4) {
        var e = hV[hW],
          hX = hV[hW + 1],
          hY = hV[hW + 2],
          hZ = hV[hW + 3];
        if (hZ === 0) {
          continue
        }
        var hR = Math.round((e + hX + hY) / 3);
        var h0 = hR - 90;
        h0 = h0 < 0 ? 0 : h0;
        if (hU === hT.RANK5) {
          hV[hW] = 51 + h0 * 1.3;
          hV[hW + 1] = 133 + h0 * 0.8;
          hV[hW + 2] = 255
        }
      }
      return T
    },
    showLabelCanvas: function () {
      this._labelCanvas.style.visibility = ""
    },
    hideLabelCanvas: function () {
      this._labelCanvas.style.visibility = "hidden"
    }
  });
  var b9 = 5;
  var dX = 4;
  var hq = 3;
  var ff = 2;
  var hK = 1;
  var d0 = 0;
  var hN = 3;
  var hg = 5;
  var I = {
    3: {
      start: 3,
      base: 3
    },
    4: {
      start: 4,
      base: 5
    },
    5: {
      start: 4,
      base: 5
    },
    6: {
      start: 6,
      base: 7
    },
    7: {
      start: 6,
      base: 7
    },
    8: {
      start: 8,
      base: 9
    },
    9: {
      start: 8,
      base: 9
    },
    10: {
      start: 10,
      base: 10
    },
    11: {
      start: 11,
      base: 12
    },
    12: {
      start: 11,
      base: 12
    },
    13: {
      start: 11,
      base: 12
    },
    14: {
      start: 14,
      base: 15
    },
    15: {
      start: 14,
      base: 15
    },
    16: {
      start: 16,
      base: 17
    },
    17: {
      start: 16,
      base: 17
    },
    18: {
      start: 18,
      base: 19
    },
    19: {
      start: 18,
      base: 19
    },
    20: {
      start: 18,
      base: 19
    },
    21: {
      start: 18,
      base: 19
    }
  };

  function a0(hR) {
    this._canvas2dMapMgr = hR;
    var i = this.ratio = hR._map.config.ratio;
    this._featureStyle = null;
    this._map = hR._map;
    var T = fz();
    var e = "udt=" + T.udt + "&v=" + T.ver;
    this.sizeRatio = this.ratio > 1 ? 2 : 1;
    this._binaryCache = {};
    this._iconCache = {};
    this._initColorCanvas()
  }
  C.extend(a0.prototype, {
    _initColorCanvas: function () {
      var i = 256,
        T = S("canvas"),
        e = T.style;
      e.width = i + "px";
      e.height = i + "px";
      T.width = i;
      T.height = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext("2d")
    },
    parseLabelData: function (i, hT, hS, hR, e, hW, hV) {
      if (!this._featureStyle) {
        this._featureStyle = this._canvas2dMapMgr.getStyle()
      }
      if (!i || !i[0]) {
        hV([]);
        return
      }
      var hU = this._map.getZoomUnits();
      var T = this;
      this.loadTextPng(i, hW, hT, hS, hR, e, hU, hV)
    },
    loadTextPng: function (h8, hZ, hX, hW, hU, i, hS, hR) {
      var h7 = this;
      var e = h8[5];
      var h6 = this._map;
      var h3 = h6.getZoom();
      var T = h6.getSize();
      var h4 = T.width;
      var h2 = T.height;
      var h5 = h6.getCenterIn();
      var hV = h5.lng;
      var hT = h5.lat;
      var h1 = hX * hZ * hS;
      var h0 = (hW + 1) * hZ * hS;
      if (e) {
        var hY = new Image();
        hY.onload = function () {
          h7.calcIconAndTextInfo(h8, hY, hZ, hX, hW, hU, i, hS, h1, h0, hR);
          delete this.onload
        };
        hY.src = e
      } else {
        setTimeout(function () {
          h7.calcIconAndTextInfo(h8, null, hZ, hX, hW, hU, i, hS, h1, h0, hR)
        }, 1)
      }
    },
    calcIconAndTextInfo: function (ia, h1, h2, h0, hX, hV, hR, hT, h4, h3, hS) {
      var h9 = this;
      var h8 = h9._featureStyle;
      var hY = [];
      hY.x = h0;
      hY.y = hX;
      hY.z = hV;
      var hZ = h9._canvas2dMapMgr,
        T = h0 * hT * h2,
        h7 = (hX + 1) * hT * h2,
        hU = {
          tileLeft: T,
          tileTop: h7,
          zoomUnits: hT
        };
      var e = [];
      if (ia[0]) {
        for (var h5 = 0; h5 < ia[0].length; h5++) {
          if (ia[0][h5][0] === hN) {
            e.push(ia[0][h5])
          }
        }
      }
      var hW = ia[2] || [];
      for (var h5 = 0; h5 < e.length; h5++) {
        this._getFixedLabelInfo(e[h5], h1, hR, hT, h2, h4, h3, hY)
      }
      var h6 = Math.pow(2, hR - hV);
      for (h5 = 0; h5 < hW.length; h5++) {
        this._getLineLabelInfo(hW[h5], h1, hV, hR, hT, h2, h4, h3, h6, hY)
      }
      hS(hY)
    },
    _getFixedLabelInfo: function (h1, h5, hS, hW, h6, h9, h8, ib) {
      var h0 = h1[1];
      if (!h0) {
        return
      }
      var id = this._map.getZoom();
      var im = this._map.config.style;
      var io = this._featureStyle;
      var hX = hS;
      if (hX === 9) {
        hX = 8
      }
      for (var ij = 0; ij < h0.length; ij++) {
        var ip = h0[ij];
        var e = ip[0];
        var hR = el.getStyleFromCache(im, e, "point", hX, io);
        var ii = el.getStyleFromCache(im, e, "pointText", hX, io);
        if ((!ii || ii.length === 0) && (!hR || hR.length === 0)) {
          if (hX === 5) {
            var hV = ip[1];
            if (!hV) {
              continue
            }
            for (var ie = 0; ie < hV.length; ie++) {
              var ic = hV[ie][4];
              if (ic && ic[7] === "北京") {
                hR = el.getStyleFromCache(im, e, "point", 6, io);
                ii = el.getStyleFromCache(im, e, "pointText", 6, io);
                break
              } else {
                continue
              }
            }
          } else {
            continue
          }
        }
        var hV = ip[1];
        if (!hV) {
          continue
        }
        var ik = null;
        var hY = 1;
        var T = 0;
        var h4 = 0;
        if (hR && hR[0]) {
          hR = hR[0];
          ik = hR.icon;
          hY = hR.zoom ? hR.zoom / 100 : 1
        } else {
          hR = null
        }
        for (var ie = 0; ie < hV.length; ie++) {
          var ic = hV[ie][4];
          if (!ic) {
            continue
          }
          var ih = ic[2];
          if (!this._isVisible(ih, id)) {
            continue
          }
          var hZ = ic[12];
          if (ii && ii.length > 0 && !hZ) {
            continue
          }
          var h3 = Math.round(ic[0] / 100);
          var h2 = Math.round(ic[1] / 100);
          var ig = {
            lng: h9 + h3,
            lat: h8 - (h6 * hW - h2)
          };
          var hU = h3 / hW;
          var hT = h6 - h2 / hW;
          var h7 = ic[7] || "";
          var il = ic[5];
          var ia = {
            type: "fixed",
            name: h7,
            textImg: h5,
            rank: ic[4],
            baseX: hU,
            baseY: hT,
            iconPos: null,
            textPos: null,
            guid: ic[3] || "",
            tracer: ih,
            direction: il,
            startScale: 3
          };
          if ((il !== dX && hZ || !hZ) && ik !== null) {
            ia.iconPos = this._getIconPosition(ik, hY, hU, hT, ig);
            if (ia.iconPos) {
              T = ia.iconPos.width;
              h4 = ia.iconPos.height
            }
          }
          if (T === 0) {
            ia.direction = dX
          }
          if (hZ) {
            ia.textPos = this._getTextDrawData(ic, hU, hT, T, h4)
          }
          if (ia.textPos || ia.iconPos) {
            ib.push(ia)
          }
        }
      }
    },
    _isVisible: function (e, i) {
      var hR;
      if (!this._binaryCache[e]) {
        hR = e.toString(2);
        if (hR.length < 8) {
          hR = new Array(8 - hR.length + 1).join("0") + hR
        }
        this._binaryCache[e] = hR
      }
      hR = this._binaryCache[e];
      var T = I[i].start;
      return hR[i - T] === "1"
    },
    _getIconPosition: function (hV, hT, T, i, e) {
      var hR = this._map.config.style;
      var hW = bo["iconSetInfo" + hR][hV];
      if (!hW) {
        if (hV.charCodeAt(0) >= 48 && hV.charCodeAt(0) <= 57) {
          hW = bo["iconSetInfo" + hR]["_" + hV]
        }
      }
      if (!hW) {
        return null
      }
      var hS = hW[0];
      var hU = hW[1];
      hS = hS * hT;
      hU = hU * hT;
      return {
        srcX: 0,
        srcY: 0,
        destX: T - hS / 2,
        destY: i - hU / 2,
        width: hS,
        height: hU,
        geoX: e.lng,
        geoY: e.lat,
        mcPt: e,
        iconType: hV
      }
    },
    _getTextDrawData: function (h2, h1, h0, hR, hY) {
      var h7 = h2[5];
      if (typeof h7 !== "number") {
        h7 = 0
      }
      var hW = this.ratio;
      var hV = hW / 2;
      hR *= hV;
      hY *= hV;
      var hX = h2[12];
      var hS = hX.length;
      var ia = 0;
      var h9 = 0;
      var h6 = [];
      var h5 = 0;
      var h8 = 0;
      for (var h4 = 0; h4 < hS; h4++) {
        h8 += Math.round(hX[h4][3])
      }
      for (var h4 = 0; h4 < hS; h4++) {
        var hU = hX[h4];
        var hT = hU[0];
        var i = hU[1];
        var T = hU[2];
        var e = hU[3];
        var ib = 2 * hW;
        var h3 = 0;
        if (hR !== 0) {
          h3 = 2 * hW
        }
        if (hR === 0) {
          h7 = dX
        }
        switch (h7) {
          case hq:
            var hZ = h0 - h8 / 2 - ib * (hS - 1) / 2;
            ia = h1 - T - hR / 2 - h3;
            h9 = hZ + h5 + ib * h4;
            break;
          case hK:
            var hZ = h0 - h8 / 2 - ib * (hS - 1) / 2;
            ia = h1 + hR / 2 + h3;
            h9 = hZ + h5 + ib * h4;
            break;
          case ff:
            var hZ = h0 - hY / 2 - h8 - ib * (hS - 1) - ib;
            ia = h1 - T / 2;
            h9 = hZ + h5 + ib * h4;
            break;
          case d0:
            var hZ = h0 + hY / 2 + ib / 2;
            ia = h1 - T / 2;
            h9 = hZ + h5 + ib * h4;
            break;
          case dX:
            var hZ = h0 - e / 2 - ib * (hS - 1) / 2;
            ia = h1 - T / 2;
            h9 = hZ + h5 + ib * h4;
            break
        }
        h5 += e;
        if (T > 0 && e > 0) {
          h6.push({
            srcX: hT,
            srcY: i,
            destX: ia,
            destY: h9,
            width: T,
            height: e
          })
        }
      }
      if (h6.length > 0) {
        return h6
      }
      return null
    },
    _getLineLabelInfo: function (hZ, hR, hS, ie, iu, h6, ic, ib, id, h5) {
      if (hZ.length !== 10) {
        return
      }
      var ih = this.ratio;
      var T = this.ratio;
      var ip = hZ[7].length;
      var h7 = hZ[1];
      var ir = hZ[3];
      var iy = hZ[8];
      var hV = hZ[4];
      var e = 2;
      var hT = hV.slice(0, e);
      for (var iv = e; iv < hV.length; iv += e) {
        hT[iv] = hT[iv - e] + hV[iv];
        hT[iv + 1] = hT[iv - (e - 1)] + hV[iv + 1]
      }
      for (var iv = e; iv < hV.length; iv += e) {
        if (iv % (ir * e) === 0 || iv % (ir * e) === 1) {
          continue
        }
        hT[iv] = hT[iv - e] + hV[iv] / id;
        hT[iv + 1] = hT[iv - (e - 1)] + hV[iv + 1] / id
      }
      for (var ix = 0; ix < ip; ix++) {
        var it = hZ[7][ix];
        if (!this._isVisible(it, ie)) {
          continue
        }
        var ij = hZ[6][ix];
        var h4 = ix * ir * e;
        hV = hT.slice(h4, h4 + ir * e);
        var h8 = [];
        var ii = undefined;
        var ig = undefined;
        var h3 = undefined;
        var h2 = undefined;
        var iy = hZ[9].slice(0);
        if (ij) {
          iy.reverse()
        }
        var im;
        var ik;
        for (var iw = 0; iw < ir; iw++) {
          var h1 = hZ[5][ir * ix + iw];
          var io = hV[iw * e] / 100;
          var il = hV[iw * e + 1] / 100;
          var h0 = iy[iw];
          var hW = h0[0];
          var hY = h0[1];
          var hU = h0[2];
          var hX = h0[3];
          var ia;
          var h9;
          var iA;
          var iz;
          if (iw === 0) {
            im = iA = io / iu;
            ik = h6 - il / iu;
            iz = il / iu
          } else {
            iA = io / iu;
            iz = il / iu
          }
          var iC = im + (iA - im) * T - hU / 2;
          var iB = ik + (h6 - iz - ik) * T - hX / 2;
          if (ii === undefined) {
            ii = im - hU / 2;
            ig = ik - hX / 2;
            h3 = ii + hU;
            h2 = ig + hX
          } else {
            if (iC < ii) {
              ii = iC
            }
            if (iB < ig) {
              ig = iB
            }
            if (iC + hU > h3) {
              h3 = iC + hU
            }
            if (iB + hX > h2) {
              h2 = iB + hX
            }
          }
          h8.push({
            angle: h1,
            srcX: hW,
            srcY: hY,
            destX: iC,
            destY: iB,
            width: hU,
            height: hX
          })
        }
        var iq = {
          type: "line",
          textImg: hR,
          rank: h7,
          baseX: im,
          baseY: ik,
          arrWordPos: h8,
          minXOriginal: ii,
          minYOriginal: ig,
          maxXOriginal: h3,
          maxYOriginal: h2,
          text: ""
        };
        h5.push(iq)
      }
    },
    alterColor: function (hU, e, hT) {
      var T = this._colorCtx,
        i = this._canvas2dMapMgr;
      T.clearRect(0, 0, hU.width, hU.height);
      T.drawImage(e, hU.srcX, hU.srcY, hU.width, hU.height, 0, 0, hU.width, hU.height);
      var hS = T.getImageData(0, 0, hU.width, hU.height),
        hR = i.getFilterImageData(hS, hT);
      T.putImageData(hR, 0, 0)
    },
    drawIconAndText: function (h6, h5, e) {
      var hX = this.ratio;
      var hV = this.sizeRatio / hX;
      var hZ = 2 / hX;
      var ii = this;
      for (var h9 = 0, h7 = h5.length; h9 < h7; h9++) {
        var hY = h5[h9];
        if (hY.isDel == false) {
          var hS = hY.baseDrawX;
          var hR = hY.baseDrawY;
          if (hY.type == "fixed") {
            var hU = hY.iconPos,
              ia = hY.textPos,
              h3 = hY.textImg,
              id = hY.startScale;
            if (hU && id <= e) {
              var T = this._iconCache[hU.iconType];
              if (T) {
                if (T.img) {
                  h6.drawImage(T.img, 0, 0, T.img.width, T.img.height, Math.round(hS * hX + (hU.drawX - hS) / hZ), Math.round(hR * hX + (hU.drawY - hR) / hZ), hU.width / hZ, hU.height / hZ)
                } else {
                  T.drawLabels.push(hY)
                }
              } else {
                if (!T) {
                  this._iconCache[hU.iconType] = {
                    img: null,
                    drawLabels: [hY]
                  };
                  var ik = new Image();
                  ik._iconName = hU.iconType;
                  ik.onload = function () {
                    var ir = ii._iconCache[this._iconName];
                    ir.img = this;
                    this.onload = null;
                    for (var im = 0; im < ir.drawLabels.length; im++) {
                      var ip = ir.drawLabels[im];
                      var io = ip.baseDrawX;
                      var il = ip.baseDrawY;
                      var iq = ip.iconPos;
                      h6.drawImage(this, 0, 0, this.width, this.height, Math.round(io * hX + (iq.drawX - io) / hZ), Math.round(il * hX + (iq.drawY - il) / hZ), iq.width / hZ, iq.height / hZ)
                    }
                    ir.drawPos = []
                  };
                  ik.src = e3.getIconSetPath(ii._map.config.style) + hU.iconType + ".png"
                }
              }
            }
            if (ia && h3 && id <= e) {
              for (var hW = 0; hW < ia.length; hW++) {
                var h4 = ia[hW];
                if (!hY._tempRank) {
                  h6.drawImage(h3, h4.srcX, h4.srcY, h4.width, h4.height, Math.round(hS * hX + (h4.drawX - hS) / hV), Math.round(hR * hX + (h4.drawY - hR) / hV), h4.width / hV, h4.height / hV)
                } else {
                  this.alterColor(h4, h3, hY._tempRank);
                  h6.drawImage(this._colorCvs, 0, 0, h4.width, h4.height, Math.round(hS * hX + (h4.drawX - hS) / hV), Math.round(hR * hX + (h4.drawY - hR) / hV), h4.width / hV, h4.height / hV)
                }
              }
            }
          } else {
            var hT = hY.arrWordPos,
              h3 = hY.textImg,
              h2 = hY.tileX,
              h0 = hY.tileY;
            for (var h8 = 0, h1 = hT.length; h8 < h1; h8++) {
              var ib = hT[h8];
              var ij = Math.round(h2 + ib.destX);
              var ih = Math.round(h0 + ib.destY);
              var ic = ib.angle;
              ij = hS * hX + ij - hS;
              ih = hR * hX + ih - hR;
              if (ic > 10 && ic < 350) {
                h6.save();
                var ig = Math.round(ij + ib.width / 2);
                var ie = Math.round(ih + ib.height / 2);
                h6.translate(ig, ie);
                h6.rotate(-ic / 180 * Math.PI);
                h6.drawImage(h3, ib.srcX, ib.srcY, ib.width, ib.height, -Math.round(ib.width / 2), -Math.round(ib.height / 2), ib.width / hV, ib.height / hV);
                h6.restore()
              } else {
                h6.drawImage(h3, ib.srcX, ib.srcY, ib.width, ib.height, ij, ih, ib.width / hV, ib.height / hV)
              }
            }
          }
        }
      }
    },
    isCollide: function (hT, h2, h1, e, hV, T, hX) {
      for (var hS = 0, hR = T.length; hS < hR; hS++) {
        var hW = T[hS],
          hU = 1 / Math.pow(2, hX + 1),
          h0 = hU * hW[3] / 2,
          hZ = hU * hW[4] / 2,
          hY = hW[0];
        if (hY != hT) {
          if (!(h2 + e < hW[1] - h0 || h2 > hW[1] + hW[3] + h0 || h1 + hV < hW[2] - hZ || h1 > hW[2] + hW[4] + hZ)) {
            return true
          }
        }
      }
      return false
    },
    zoomingIconAndText: function (ii, ib, hR, ig, ih, iL, iq, hZ, ix, ip, h8) {
      var iM = this.ratio;
      var h0 = this.sizeRatio / iM;
      var iN = 2 / iM;
      var iX = iM / 2;
      var iH = ig.x;
      var iG = ig.y;
      var ij = 2 * iM;
      if (h8 !== 0) {
        iG += ip
      }
      var h3 = undefined,
        hW = undefined,
        hT = undefined,
        hY = undefined,
        h7 = undefined;
      var iw = iL > 0 ? true : false;
      if (!iw) {
        h3 = [];
        var iA = 1 - iq
      }
      for (var iT = 0, iR = ib.length; iT < iR; iT++) {
        var iO = ib[iT];
        if (iO.isDel == false) {
          var iY = iO.baseDrawX;
          var iV = iO.baseDrawY;
          ii.save();
          ii.translate(-hZ * iM, -ix * iM);
          if (iO.isFadeout) {
            if (!iw && iO._schedule <= iq && !iO._isIgnore) {
              ii.globalAlpha = iA;
              iO._schedule = iq
            } else {
              iO._isIgnore = true;
              continue
            }
          }
          if (iO.type == "fixed") {
            var ik = iO.iconPos,
              it = iO.textPos,
              hU = iO.textImg,
              il = iO.startScale;
            var T;
            var iE = 0;
            if (ik) {
              iE = ij
            }
            if (ik && !iO.iconImg && this._iconCache[ik.iconType]) {
              T = this._iconCache[ik.iconType].img
            }
            if (ik && il <= ih && T) {
              hY = ik.width;
              h7 = ik.height;
              hW = (iH + (iY - iH) * hR) * iM - hY / 2 / iN;
              hT = (iG + (iV - iG) * hR) * iM - h7 / 2 / iN + h8;
              if (!iw && this.isCollide(iT, hW, hT, hY, h7, h3, iL)) {
                iO.isFadeout = true
              }
              ii.drawImage(T, ik.srcX, ik.srcY, T.width, T.height, Math.round(hW), Math.round(hT), hY / iN, h7 / iN);
              !iw && h3.push([iT, hW, hT, hY, h7])
            }
            if (it && hU && il <= ih) {
              var ir;
              var iu;
              var ia = 0;
              var io = 0;
              if (ik) {
                ia = ik.width;
                io = ik.height
              }
              var iF = it.length;
              var h2 = 0;
              var iv = 0;
              for (var ic = 0; ic < iF; ic++) {
                var iQ = it[ic];
                iv += iQ.height;
                if (h2 < iQ.width) {
                  h2 = iQ.width
                }
              }
              iv += (ic - 1) * ij;
              if (!iw && this.isCollide(iT, hW, hT, h2, iv, h3, iL)) {
                iO.isFadeout = true
              }
              var iP = 0;
              for (var ic = 0; ic < iF; ic++) {
                var iQ = it[ic];
                switch (iO.direction) {
                  case hq:
                    ir = -(ia / 2 / iN + iQ.width + iE);
                    iu = -iv / 2 + iP + ij * ic;
                    break;
                  case hK:
                    ir = ia / 2 / iN + iE;
                    iu = -iv / 2 + iP + ij * ic;
                    break;
                  case ff:
                    ir = -iQ.width / 2;
                    iu = -io / 2 / iN - iv + iP - ij * (ic + 1);
                    break;
                  case d0:
                    ir = -iQ.width / 2;
                    iu = io / 2 / iN + iP + ij * (ic + 1);
                    break;
                  case dX:
                    ir = -iQ.width / 2;
                    iu = -iv / 2 + iP + ij * ic;
                    break
                }
                iP += iQ.height;
                hW = (iH + (iY - iH) * hR) * iM + ir / h0;
                hT = (iG + (iV - iG) * hR) * iM + iu / h0; + h8;
                hY = iQ.width;
                h7 = iQ.height;
                if (!iO._tempRank) {
                  ii.drawImage(hU, iQ.srcX, iQ.srcY, hY, h7, Math.round(hW), Math.round(hT), hY / h0, h7 / h0)
                } else {
                  this.alterColor(iQ, hU, iO._tempRank);
                  ii.drawImage(this._colorCvs, 0, 0, hY, h7, Math.round(hW), Math.round(hT), hY / h0, h7 / h0)
                }!iw && h3.push([iT, hW, hT, hY, h7])
              }
            }
          } else {
            var h9 = iO.arrWordPos,
              hU = iO.textImg,
              iW = iO.tileX,
              iU = iO.tileY;
            var h1 = h9[0];
            var hX = Math.round(iW + h1.destX);
            var hV = Math.round(iU + h1.destY);
            for (var iS = 0, iD = h9.length; iS < iD; iS++) {
              var iK = h9[iS];
              var i0 = Math.round(iW + iK.destX);
              var iZ = Math.round(iU + iK.destY);
              var ie = iK.angle;
              var iC = Math.round((iH + (iY - iH) * hR) * iM - h1.width / 2 + i0 - hX);
              var iB = Math.round((iG + (iV - iG) * hR) * iM - h1.height / 2 + iZ - hV);
              hW = iC;
              hT = iB;
              hY = iK.width;
              h7 = iK.height;
              if (!iw && this.isCollide(iT, hW, hT, hY, h7, h3, iL)) {
                iO.isFadeout = true
              }
              if (ie > 10 && ie < 350) {
                var iJ = iC + iK.width / 2;
                var iI = iB + iK.height / 2;
                var hS = ie / 180 * Math.PI;
                var im = Math.cos(hS);
                var h4 = Math.sin(hS);
                var iz = im;
                var h5 = im;
                var iy = h4;
                var h6 = -h4;
                var id = iJ - iJ * im - iI * h4;
                var e = iI + iJ * h4 - iI * im;
                ii.save();
                ii.transform(iz, h6, iy, h5, id, e);
                ii.drawImage(hU, iK.srcX, iK.srcY, hY, h7, hW, hT, hY / h0, h7 / h0);
                ii.restore()
              } else {
                ii.drawImage(hU, iK.srcX, iK.srcY, hY, h7, hW, hT, hY / h0, h7 / h0)
              }!iw && h3.push([iT, hW, hT, hY, h7])
            }
          }
          ii.restore()
        }
      }
    }
  });

  function gN(e) {
    this.initVars(e)
  }
  C.extend(gN.prototype, {
    initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.base64Prefix = "data:image/png;base64,";
      this.bizData = null;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      this.bizLabels = null
    },
    proecessBizData: function (hT, hX) {
      var hV = this;
      this.bizData = hT;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      var T = hT.textsPng;
      var hZ = hT.iconsPng;
      if (!T || !hZ) {
        return
      }
      var hW = new Image();
      hW.onload = function () {
        hV.objTextsPng = this;
        hV.calcIconAndTextInfo(hX);
        this.onload = null
      };
      hW.src = this.base64Prefix + T;
      var hY = hZ.length;
      var e = [];
      for (var hS = 0; hS < hY; hS++) {
        var hU = hZ[hS];
        var hR = new Image();
        (function (i) {
          hR.onload = function () {
            hY--;
            e[i] = this;
            if (hY === 0) {
              hV.arrIconsPng = e;
              hV.calcIconAndTextInfo(hX)
            }
            this.onload = null
          }
        })(hS);
        hR.src = this.base64Prefix + hU
      }
    },
    calcIconAndTextInfo: function (h0) {
      if (this.objTextsPng && this.arrIconsPng) {
        var hW = this.bizData;
        var hU = hW.pois;
        var e = [];
        for (var hX = 0, hT = hU.length; hX < hT; hX++) {
          var hR = hU[hX];
          var hV = this.arrIconsPng[hR.iconPng];
          var hS = hV.height / 2;
          var hZ = {
            type: "fixed",
            name: "",
            textImg: this.objTextsPng,
            iconImg: hV,
            rank: hR.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hV.width / 2,
              destY: -hS / 2,
              width: hV.width,
              height: hS,
              geoX: hR.x,
              geoY: hR.y,
              iconType: "vectorCustom"
            },
            textPos: this.calcTextPos(hR.pos, hV),
            startScale: hR.from < 12 ? 12 : hR.from,
            guid: hR.guid,
            guidExt: 1,
            adver_log: hR.adver_log || ""
          };
          var T = {
            type: "fixed",
            textDirLeft: "left",
            name: "",
            textImg: this.objTextsPng,
            iconImg: hV,
            rank: hR.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hV.width / 2,
              destY: -hS / 2,
              width: hV.width,
              height: hS,
              geoX: hR.x,
              geoY: hR.y,
              iconType: "vectorCustom"
            },
            textPos: this.calcTextPosLeft(hR.pos, hV),
            startScale: hR.from < 12 ? 12 : hR.from,
            guid: hR.guid,
            guidExt: 1,
            adver_log: hR.adver_log || ""
          };
          var hY = [hZ, T];
          e.push(hY)
        }
        this.bizLabels = e;
        h0 && h0()
      }
    },
    calcTextPos: function (hU, T) {
      var i = [];
      var hT = hU.length / 4;
      var hS = T.width / 2;
      if (hT === 1) {
        var hR = {
          srcX: hU[0],
          srcY: hU[1],
          destX: hS,
          destY: -hU[3] / 2,
          width: hU[2],
          height: hU[3]
        };
        i.push(hR)
      } else {
        var hR = {
          srcX: hU[0],
          srcY: hU[1],
          destX: hS,
          destY: -hU[3],
          width: hU[2],
          height: hU[3]
        };
        var e = {
          srcX: hU[4],
          srcY: hU[5],
          destX: hS,
          destY: 0,
          width: hU[6],
          height: hU[7]
        };
        i.push(hR);
        i.push(e)
      }
      return i
    },
    calcTextPosLeft: function (hU, T) {
      var i = [];
      var hT = hU.length / 4;
      var hS = T.width / 2;
      if (hT === 1) {
        var hR = {
          srcX: hU[0],
          srcY: hU[1],
          destX: -hS - hU[2],
          destY: -hU[3] / 2,
          width: hU[2],
          height: hU[3]
        };
        i.push(hR)
      } else {
        var hR = {
          srcX: hU[0],
          srcY: hU[1],
          destX: -hS - hU[2],
          destY: -hU[3],
          width: hU[2],
          height: hU[3]
        };
        var e = {
          srcX: hU[4],
          srcY: hU[5],
          destX: -hS - hU[2],
          destY: 0,
          width: hU[6],
          height: hU[7]
        };
        i.push(hR);
        i.push(e)
      }
      return i
    },
    clearBizData: function () {
      this.bizData = null;
      this.bizLabels = null
    }
  });

  function c7() {}
  C.extend(c7.prototype, {
    centerAndZoomIn: function (T, hX, hY) {
      hY = hY || {};
      if (!this.loaded) {
        this.firstTileLoad = false
      }
      hX = this._getProperZoom(hX).zoom;
      if (hY.noAnimation !== true && this.loaded) {
        var hT = this._ifUseAnimation(T, hX);
        if (hT) {
          this.flyToIn(T, hX, hY);
          return
        }
      }
      var hV = this;
      if (!T && !hX) {
        return
      }
      this._stopAllAnimations();
      if (T && !T.equals(this.centerPoint)) {
        this.fire(new bb("oncenter_changed"))
      }
      if (hX && hX !== this.zoomLevel) {
        this.fire(new bb("onzoom_changed"))
      }
      T = T || this.centerPoint;
      hX = hX || this.zoomLevel;
      hX = this._getProperZoom(hX).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;

          function hW() {
            hV._earth = new bo.Earth(hV, {
              showRealSunlight: hV.config.showRealSunlight,
              showMilkyway: hV.config.showMilkyway,
              earthBackground: hV.config.earthBackground
            });
            hV._proxyEarthEvents();
            hV._changeEarthMapType(BMAP_EARTH_MAP);
            C.extend(hV, bo.EarthView.prototype);
            delete hV.temp.originMapType
          }
          ea.load("earth", function () {
            if (bo["FeatureStyle" + hV.config.style]) {
              hW()
            } else {
              hV.loadMapStyleFiles(function () {
                hW()
              })
            }
          })
        }
      }
      this.lastLevel = this.zoomLevel || hX;
      this.zoomLevel = hX;
      var hU = new bb("onload");
      hU.point = T;
      hU.zoom = hX;
      this.centerPoint = new hs(T.lng, T.lat);
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (this.mapType !== BMAP_EARTH_MAP) {
        this.centerPoint = this.restrictCenter(this.centerPoint)
      }
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hS = new c5(i, "baidu", this.mapType);
        var hR = new cR({
          mapType: this.mapType,
          copyright: hS,
          dataType: gt,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "na"
        });
        hR._isInnerLayer = true;
        this.addTileLayer(hR);
        if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
          this._addHybirdMap()
        }
        this.baseLayerAdded = true;
        this.on("zoom_changed", function () {
          if (this._heading === 0) {
            return
          }
          if (this.getZoom() < 7 && this.config.restrictCenter === true) {
            hV.resetHeading()
          }
        })
      }
      this.loaded = true;
      this.dispatchEvent(hU);
      hY.callback && hY.callback()
    },
    _ifUseAnimation: function (hR, hW) {
      var hV = this.getSize();
      var T = {
        zoom: this.zoomLevel
      };
      var hY = {
        zoom: hW
      };
      var hX = this.pointToPixelIn(this.centerPoint);
      var hS = this.pointToPixelIn(hR, T);
      var hU = this.pointToPixelIn(this.centerPoint, hY);
      var h0 = this.pointToPixelIn(hR, hY);
      var hT = Math.abs(hX.x - hS.x);
      var i = Math.abs(hX.y - hS.y);
      var e = Math.abs(hU.x - h0.x);
      var hZ = Math.abs(hU.y - h0.y);
      if ((hT > hV.width || i > hV.height) && (e > hV.width || hZ > hV.height)) {
        return false
      }
      return true
    },
    _setPlatformPosition: function (hY, hX, h0) {
      h0 = h0 || {};
      if (hY === 0 && hX === 0 && !h0.point) {
        return
      }
      if (isNaN(h0.initMapOffsetX)) {
        h0.initMapOffsetX = this.offsetX
      }
      if (isNaN(h0.initMapOffsetY)) {
        h0.initMapOffsetY = this.offsetY
      }
      var hU = dK(this._heading);
      if (this._tilt > 0) {
        hX = hX / Math.cos(dK(this._tilt))
      }
      var hZ = hY * Math.cos(hU) + hX * Math.sin(hU);
      var hW = -hY * Math.sin(hU) + hX * Math.cos(hU);
      hZ = hZ + h0.initMapOffsetX;
      hW = hW + h0.initMapOffsetY;
      if (h0.point) {
        var i = this.restrictCenter(h0.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new bb("oncenter_changed"))
        }
      } else {
        var hR = this.offsetX - hZ;
        var e = this.offsetY - hW;
        var hV = this.centerPoint.lng;
        var hT = this.centerPoint.lat;
        var hS = new hs(hV, hT);
        var T = this.getZoomUnits();
        this.centerPoint = this.restrictCenter(new hs(hS.lng + hR * T, hS.lat - e * T), T);
        this.fire(new bb("oncenter_changed"))
      }
      this.offsetX = hZ;
      this.offsetY = hW;
      this.dispatchEvent(new bb("onmoving"))
    },
    restrictCenter: function (hR, hS) {
      if (this.config.restrictCenter === false) {
        return hR
      }
      hS = hS || this.getZoomUnits();
      var T = this.pixelToPointIn(new ej(0, 0), {
        center: hR
      });
      var i = this.pixelToPointIn(new ej(0, this.height), {
        center: hR
      });
      if (this.zoomLevel < 5) {
        if (T.lat > c8.MAX_LAT && i.lat < c8.MIN_LAT) {
          var hT = c8.MAX_LAT - hR.lat;
          var e = hR.lat - c8.MIN_LAT;
          var hV;
          if (hT < e) {
            hV = hT / (this.height / 2)
          } else {
            hV = e / (this.height / 2)
          }
          var hU = 18 - eC(hV);
          this.zoomLevel = hU;
          return hR
        }
      }
      if (T.lat > c8.MAX_LAT) {
        hR.lat = c8.MAX_LAT - this.height / 2 * hS
      } else {
        if (i.lat < c8.MIN_LAT) {
          hR.lat = c8.MIN_LAT + this.height / 2 * hS
        }
      }
      return hR
    },
    zoomTo: function (e, h2, h3) {
      var hY = b6[this.mapType];
      if (!hY) {
        return
      }
      var hX = this._getProperZoom(e);
      e = hX.zoom;
      if (this.zoomLevel === e) {
        h3.callback && h3.callback();
        return
      }
      var hT = e;
      this.lastLevel = this.zoomLevel;
      h3 = h3 || {};
      if (this.zoomEventStatus === "idle") {
        this.fire(new bb("onzoomstart"));
        this.zoomEventStatus = "zooming"
      }
      if (!h2 && (this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen())) {
        h2 = this.getInfoWindow().getPoint()
      }
      var T = null;
      if (h3.fixPixel) {
        T = h3.fixPixel
      } else {
        if (h2) {
          T = this.pointToPixelIn(h2, {
            useRound: false
          })
        }
      }
      var hU = this.pixelToPointIn(T);
      var hV = this.centerPoint.clone();
      this.fixPoint = h2;
      this.fixPixel = T;
      this.fixCenter = hV;
      this.mousePosMCPoint = hU;
      if (h3.noAnimation) {
        e = hX.zoom;
        this.zoomLevel = e;
        this.fire(new bb("onzoom_changed"));
        var hS = this.getCurrentMaxTilt();
        if (this._tilt > hS) {
          this._tilt = hS
        }
        if (h2) {
          if (this._heading % 360 !== 0 || this._tilt > 0) {
            var i = this._webglMapCamera.fromScreenPixelToMC(T.x, T.y, {
              center: hV,
              zoom: this.zoomLevel
            });
            if (i) {
              var hZ = i.sub(hU);
              var hR = hV.sub(hZ);
              this.centerPoint = this.restrictCenter(hR)
            }
          } else {
            var hW = this.getZoomUnits();
            var hR = new hs(h2.lng - hW * (T.x - this.width / 2), h2.lat + hW * (T.y - this.height / 2));
            this.centerPoint = this.restrictCenter(hR, hW)
          }
          this.fire(new bb("oncenter_changed"))
        }
        this._checkFireZoomend();
        h3.callback && h3.callback();
        return
      }
      this._animationInfo.zoom = {
        current: this.zoomLevel,
        diff: e - this.zoomLevel,
        target: e
      };
      var h0 = this;
      h0._checkFireZoomend();
      var h1 = this._tilt;
      if (this.fixPoint || h1 > c8.MAX_DRAG_TILT_L2) {
        h3.renderCallback = function () {
          var h7 = h0.getCurrentMaxTilt();
          if (h0._tilt > h7) {
            h0._tilt = h7
          }
          var h8 = h0.fixPixel;
          if (!h0.fixPixel || !h0.fixPoint) {
            return
          }
          var h4 = h0.fixPixel;
          var ie = h0.fixPoint;
          var ib = h0.fixCenter;
          var h9 = h0.mousePosMCPoint;
          if (h0._heading % 360 !== 0 || h0._tilt > 0) {
            var h5 = h0._webglMapCamera.fromScreenPixelToMC(h4.x, h4.y, {
              center: ib,
              zoom: h0.zoomLevel,
              tilt: h0._tilt
            });
            if (h5) {
              var id = h5.sub(h9);
              var h6 = ib.sub(id);
              h0.centerPoint = h0.restrictCenter(h6)
            }
          } else {
            var ia = h4;
            var ic = h0.getZoomUnits();
            var h6 = new hs(ie.lng - ic * (ia.x - h0.width / 2), ie.lat + ic * (ia.y - h0.height / 2));
            h0.centerPoint = h0.restrictCenter(h6, ic)
          }
          h0.fire(new bb("oncenter_changed"))
        }
      }
      if (h3.fromMouseWheel === true) {
        this._startInfiniteZoomAnimation(h3);
        h3.callback && h3.callback();
        return
      }
      this._startAnimation(h3)
    },
    _checkFireZoomend: function () {
      var e = this;
      if (e.fireZoomendTimer) {
        clearTimeout(e.fireZoomendTimer)
      }
      e.fireZoomendTimer = setTimeout(function () {
        if (e.zoomEventStatus === "zooming") {
          e.fire(new bb("onzoomend"));
          e.zoomEventStatus = "idle"
        }
        e.fireZoomendTimer = null
      }, 150)
    },
    deepZoomMedia: function (e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function () {
          i.temp.isStdCtrlBusy = false
        }, 400)
      }
    },
    deepZoomTo: function (e) {
      this.zoomTo(e)
    },
    flyToIn: function (T, im, h6) {
      h6 = h6 || {};
      var hS = this._getProperZoom(im);
      im = hS.zoom;
      if (this.centerPoint.equals(T) && this.zoomLevel === im && typeof h6.heading !== "number" && typeof h6.tilt !== "number") {
        return
      }
      var e = this.getHeading() % 360;
      var hY = this.getTilt();
      var h4 = 0;
      var h8 = 0;
      var h1 = this.getBounds().containsPoint(T);
      if (typeof h6.heading === "number") {
        h4 = h6.heading
      } else {
        if (h1) {
          h4 = e
        }
      }
      if (typeof h6.tilt === "number") {
        h8 = h6.tilt
      } else {
        if (h1) {
          h8 = hY
        }
      }
      this._heading = e;
      var ij = h4 - e;
      var ie = h8 - hY;
      var h2 = this;
      var hU = this.zoomLevel;
      var hV = 1.42;
      var ia = this.zoomScale(im - hU);
      var ip = this.getZoomUnits();
      var h0 = this.centerPoint.div(ip);
      var iq = T.div(ip);
      var ii = this.worldSize();
      var id = hV;
      var ic = Math.max(this.width, this.height);
      var ib = ic / ia;
      var hZ = iq.sub(h0).mag();
      var i = id * id;

      function il(it) {
        var ir = (ib * ib - ic * ic + (it ? -1 : 1) * i * i * hZ * hZ) / (2 * (it ? ib : ic) * i * hZ);
        return Math.log(Math.sqrt(ir * ir + 1) - ir)
      }

      function hR(ir) {
        return (Math.exp(ir) - Math.exp(-ir)) / 2
      }

      function hW(ir) {
        return (Math.exp(ir) + Math.exp(-ir)) / 2
      }

      function h5(ir) {
        return hR(ir) / hW(ir)
      }
      var hX = il(0);
      var ig = function (ir) {
        return (hW(hX) / hW(hX + id * ir))
      };
      var ih = function (ir) {
        return ic * ((hW(hX) * h5(hX + id * ir) - hR(hX)) / i) / hZ
      };
      var hT = (il(1) - hX) / id;
      if (Math.abs(hZ) < 0.000001 || hT === Infinity || isNaN(hT)) {
        if (Math.abs(ic - ib) < 0.000001) {
          this._animationInfo.zoom = {
            current: this.zoomLevel,
            diff: im - this.zoomLevel
          };
          this._animationInfo.center = {
            current: this.centerPoint,
            diff: T.sub(this.centerPoint)
          };
          this._animationInfo.heading = {
            current: e,
            diff: h4 - e
          };
          this._animationInfo.tilt = {
            current: hY,
            diff: h8 - hY
          };
          this.setLock(true);
          this._startAnimation({
            callback: function (ir) {
              h2.setLock(false);
              if (h6.callback) {
                h6.callback(ir)
              }
            },
            duration: h6.duration
          });
          return
        }
        var io = ib < ic ? -1 : 1;
        hT = Math.abs(Math.log(ib / ic)) / id;
        ih = function () {
          return 0
        };
        ig = function (ir) {
          return Math.exp(io * id * ir)
        }
      }
      var ik = 1.7;
      if (hT < 0.3) {
        ik = 0.8
      } else {
        if (hT > 5) {
          ik = (hT - 5) / 2 + ik
        }
      }
      var h7 = h6.duration || 1000 * hT / ik;
      if (isNaN(h7)) {
        var h9 = {};
        for (var h3 in h6) {
          h9[h3] = h6[h3];
          h9.noAnimation = true
        }
        this.centerAndZoomIn(T, im, h9);
        return
      }
      this.fire(new bb("onmovestart"));
      this.fire(new bb("onzoomstart"));
      this.setLock(true);
      this._startAnimation({
        duration: h7,
        renderCallback: function (ir, it) {
          var iu = ir * hT;
          var ix = ih(iu);
          var iw = hU + h2.scaleZoom(1 / ig(iu));
          if (iw < h2.getMinZoom()) {
            iw = h2.getMinZoom()
          }
          if (iw > h2.getMaxZoom()) {
            iw = h2.getMaxZoom()
          }
          if (iw !== h2.zoomLevel) {
            h2.zoomLevel = iw;
            h2.fire(new bb("onzoom_changed"))
          }
          h2.centerPoint = h0.add(iq.sub(h0).mult(ix)).mult(ip);
          h2.fire(new bb("oncenter_changed"));
          if (typeof h4 === "number") {
            var iv = ir / 0.7;
            if (iv > 1) {
              iv = 1
            }
            h2.setHeading(e + ij * ir, {
              noAnimation: true
            })
          }
          if (typeof h8 === "number") {
            h2.setTilt(hY + ie * ir, {
              noAnimation: true
            })
          }
        },
        callback: function (ir, it) {
          h2.setLock(false);
          if (it && it.stop === true) {
            h2.fire(new bb("onmoveend"));
            h2.fire(new bb("onzoomend"));
            h6.callback && h6.callback(ir);
            return
          }
          if (im !== h2.zoomLevel) {
            h2.zoomLevel = im;
            h2.fire(new bb("onzoom_changed"))
          }
          h2.fire(new bb("onmoveend"));
          h2.fire(new bb("onzoomend"));
          h6.callback && h6.callback(ir)
        }
      })
    },
    zoomScale: function (e) {
      return Math.pow(2, e)
    },
    scaleZoom: function (e) {
      return Math.log(e) / Math.LN2
    },
    panToIn: function (i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return
      }
      var hR = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hT = Math.round(this.height / 2);
      var hS = this._ifUseAnimation(i, this.zoomLevel);
      if (T.noAnimation === true || hS === false) {
        this._stopAllAnimations();
        this._panToIn(e - hR.x, hT - hR.y, i);
        T.callback && T.callback();
        return
      }
      this.flyToIn(i, this.zoomLevel, T)
    },
    _panToIn: function (i, e, hR) {
      var T = this.temp;
      if (T.operating === true) {
        return
      }
      if (T.dragAni) {
        T.dragAni.stop(false, {
          readyToMove: true
        });
        T.dragAni = null
      }
      this.dispatchEvent(new bb("onmovestart"));
      this._setPlatformPosition(i, e, {
        point: hR
      });
      this.dispatchEvent(new bb("onmoveend"))
    },
    _stopAllAnimations: function (e) {
      e = e || {};
      if (this._ani) {
        this._ani.stop(!!e.goToEnd, {
          stopCurrentAnimation: e.stopCurrentAnimation
        });
        this._ani = null
      }
      if (this._infiniteAni) {
        this._infiniteAni.stop();
        this._infiniteAni = null
      }
    },
    panBy: function (i, e, T) {
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      T = T || {};
      if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
        this._panBy(i, e, T)
      } else {
        this._panToIn(i, e, T.point);
        T.callback && T.callback()
      }
    },
    _panBy: function (i, e, hS) {
      if (this.temp.operating === true) {
        return
      }
      hS = hS || {};
      this.dispatchEvent(new bb("onmovestart"));
      var hR = this;
      var T = hR.temp;
      T.pl = hR.offsetX;
      T.pt = hR.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel()
      }
      if (T.dragAni) {
        T.dragAni.stop(false, {
          readyToMove: true
        });
        T.dragAni = null
      }
      T.tlPan = new o({
        fps: hS.fps || hR.config.fps,
        duration: hS.duration || hR.config.actionDuration,
        transition: hS.transition || cn.easeInOutQuad,
        render: function (hT) {
          this.terminative = hR.temp.operating;
          if (hR.temp.operating) {
            return
          }
          hR._setPlatformPosition(i * hT, e * hT, {
            initMapOffsetX: T.pl,
            initMapOffsetY: T.pt
          })
        },
        finish: function (hT) {
          hR.dispatchEvent(new bb("onmoveend"));
          hR.temp.tlPan = false;
          if (hR.temp.stopArrow === true) {
            hR.temp.stopArrow = false;
            if (hR.temp.arrow !== 0) {
              hR._arrow()
            }
          }
        }
      })
    },
    _startAnimation: function (i) {
      var hS = this._animationInfo;
      var T = this;
      i = i || {};
      if (T._ani) {
        T._ani.stop(!!i.goToEnd, {
          stopCurrentAnimation: i.stopCurrentAnimation
        })
      }
      if (T._infiniteAni) {
        T._infiniteAni.stop();
        T._infiniteAni = null
      }
      var hT = i.duration || 500;
      var hU = i.transition || cn.ease;
      var e = new bb("onanimation_start");
      this.fire(e);
      if (i.unstopable) {
        hS = this._animationInfoUnstopable
      }
      var hR = new o({
        duration: hT,
        transition: hU,
        render: function (hX, hW) {
          for (var hV in hS) {
            if (!hS.hasOwnProperty(hV)) {
              continue
            }
            var hZ = hS[hV].current;
            var hY = hS[hV].diff;
            T._setValueTick(hV, hZ, hY, hX)
          }
          if (i.renderCallback) {
            i.renderCallback(hX, hW)
          }
        },
        finish: function (hV) {
          T.fire(new bb("onanimation_end"));
          if (i.unstopable) {
            T._animationInfoUnstopable = {};
            T._unstopableAni = null
          } else {
            T._ani = null;
            T._animationInfo = {}
          }
          if (i.mapNeedCbk) {
            i.mapNeedCbk()
          }
          if (i.callback) {
            i.callback(hV)
          }
        },
        onStop: function (hV) {
          hV = hV || {};
          T.fire(new bb("onanimation_end"));
          if (hV.stopCurrentAnimation) {
            T._animationInfo = {}
          }
          T._ani = null;
          if (i.mapNeedCbk) {
            i.mapNeedCbk()
          }
          if (i.callback) {
            i.callback(null, {
              stop: true
            })
          }
        }
      });
      if (i.unstopable) {
        T._unstopableAni = hR
      } else {
        T._ani = hR
      }
    },
    _startInfiniteZoomAnimation: function (e) {
      var i = this;
      if (i._ani) {
        i._ani.stop(!!e.goToEnd, {
          stopCurrentAnimation: e.stopCurrentAnimation
        })
      }
      if (i._infiniteAni) {
        return
      }
      this.fire(new bb("onanimation_start"));
      i._infiniteAni = new o({
        duration: 10000,
        transition: cn.linear,
        render: function () {
          var T = i._animationInfo.zoom;
          if (Math.abs(T.current - T.target) < 0.001) {
            i._setValue("zoom", T.target);
            i._infiniteAni.stop();
            return
          }
          T.current += (T.target - T.current) * 0.35;
          i._setValue("zoom", T.current);
          if (e.renderCallback) {
            e.renderCallback()
          }
        },
        finish: function () {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new bb("onanimation_end"));
          if (e.callback) {
            e.callback()
          }
        },
        onStop: function () {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new bb("onanimation_end"));
          if (e.callback) {
            e.callback()
          }
        }
      })
    },
    _setValue: function (e, T) {
      if (e === "zoom") {
        this._preZoomLevel = this.zoomLevel;
        var i = this._getProperZoom(T);
        T = i.zoom;
        if (T !== this.zoomLevel) {
          this.zoomLevel = T;
          if (T < 5) {
            this.restrictCenter(this.centerPoint)
          }
          this.fire(new bb("on" + e + "_changed"))
        }
        return
      } else {
        if (e === "center") {
          this.centerPoint = T
        }
      }
      this["_" + e] = T;
      this.fire(new bb("on" + e + "_changed"))
    },
    _setValueTick: function (e, hS, hR, i) {
      if (e === "center") {
        var T = new hs(hS.lng + hR.lng * i, hS.lat + hR.lat * i);
        this._setValue(e, T);
        return
      }
      if (e === "zoom") {
        this._setValue(e, Math.pow(hS, 1 - i) * Math.pow(hS + hR, i));
        return
      }
      this._setValue(e, hS + hR * i)
    },
    setHeading: function (hR, i) {
      i = i || {};
      if (hR === this._heading) {
        i.callback && i.callback();
        return
      }
      var T = fZ(this._heading, 360);
      var e = fZ(hR, 360);
      if (e === T) {
        this._heading = hR;
        i.callback && i.callback();
        return
      }
      if (i.noAnimation) {
        this._setValue("heading", hR);
        i.callback && i.callback();
        return
      }
      if (i.unstopable) {
        this._animationInfoUnstopable.heading = {
          current: this._heading,
          diff: hR - this._heading
        }
      } else {
        this._animationInfo.heading = {
          current: this._heading,
          diff: hR - this._heading
        }
      }
      this._startAnimation(i)
    },
    resetHeading: function (e) {
      var i = this._heading;
      while (i < 0) {
        i += 360
      }
      i = i % 360;
      if (i > 180) {
        i -= 360
      }
      this._heading = i;
      e = e || {};
      e.unstopable = true;
      this.setHeading(0, e)
    },
    getHeading: function () {
      return this._heading
    },
    setTilt: function (e, i) {
      i = i || {};
      if (e === this._tilt) {
        i.callback && i.callback();
        return
      }
      if (e > c8.MAX_TILT) {
        e = c8.MAX_TILT
      }
      if (e < c8.MIN_TILT) {
        e = c8.MIN_TILT
      }
      if (i && i.noAnimation) {
        this._setValue("tilt", e);
        i.callback && i.callback();
        return
      }
      this._animationInfo.tilt = {
        current: this._tilt,
        diff: e - this._tilt
      };
      this._startAnimation(i)
    },
    getTilt: function () {
      return this._tilt
    },
    getCenterIn: function () {
      return this.centerPoint
    },
    getZoom: function () {
      return this.zoomLevel
    },
    getCameraPosition: function (T) {
      T = T || {};
      var e = T.center || this.centerPoint;
      var hR = T.zoom || this.zoomLevel;
      var hU = typeof T.heading === "number" ? T.heading : this._heading;
      var i = typeof T.tilt === "number" ? T.tilt : this._tilt;
      var hT = this._webglMapCamera.generateMVMatrix(e, hR, hU, i);
      var hS = mat4.create(Float32Array);
      mat4.invert(hS, hT);
      return this._webglMapCamera.getPosition(hS)
    }
  });

  function fO(i) {
    this._jobQueue = [];
    this._idleOnlyJobQueue = [];
    var e = this;
    this.isIdle = true;
    i.on("updateframe", function (hR) {
      var T = 12 - hR.frameTime;
      T = T < 1 ? 1 : T;
      e.isIdle = false;
      if (e.idleWorkTimer) {
        clearInterval(e.idleWorkTimer);
        e.idleWorkTimer = null
      }
      e.runJobs(T)
    });
    this._idleWorkerTicker = (function (T) {
      return function () {
        if (T.isIdle) {
          T.runJobs();
          T.runIdleOnlyJobs()
        }
      }
    })(this);
    i.on("mapglidle", function () {
      e.isIdle = true;
      e.runJobs();
      e.runIdleOnlyJobs();
      e.idleWorkTimer = setInterval(e._idleWorkerTicker, fO.MAX_IDLE_TIME)
    })
  }
  fO.MAX_IDLE_TIME = 50;
  fO.MAX_FRAME_TIME = 6;
  fO.prototype.runJobs = function (i) {
    if (this._jobQueue.length === 0) {
      return
    }
    var hR = fB();
    var e = 0;
    i = i || fO.MAX_FRAME_TIME;
    while (this._jobQueue.length && e < i) {
      var T = this._jobQueue.shift();
      if (T.state !== "invalid") {
        T.call()
      }
      e = fB() - hR
    }
  };
  fO.prototype.runIdleOnlyJobs = function () {
    if (this._idleOnlyJobQueue.length === 0) {
      return
    }
    var T = fB();
    var e = 0;
    while (this._idleOnlyJobQueue.length && e < fO.MAX_IDLE_TIME) {
      var i = this._idleOnlyJobQueue.shift();
      if (i.state !== "invalid") {
        i.call()
      }
      e = fB() - T
    }
  };
  fO.prototype.checkIdleRunning = function () {
    if (this.isIdle && !this.idleWorkTimer) {
      this.runJobs();
      this.runIdleOnlyJobs();
      this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50)
    }
  };
  fO.prototype.addJob = function (e) {
    this._jobQueue.push(e);
    this.checkIdleRunning()
  };
  fO.prototype.clearJobs = function () {
    this._jobQueue.length = 0;
    this._idleOnlyJobQueue.length = 0
  };
  fO.prototype.addIdleOnlyJob = function (e) {
    this._idleOnlyJobQueue.push(e);
    this.checkIdleRunning()
  };
  var cb = {};
  (function (hU) {
    if (!hY) {
      var hY = 0.000001
    }
    if (!i) {
      var i = (typeof Float32Array !== "undefined") ? Float32Array : Array
    }
    if (!hS) {
      var hS = Math.random
    }
    var T = {};
    var hT = Math.PI / 180;
    T.toRadian = function (hZ) {
      return hZ * hT
    };
    var hX = {};
    hX.create = function (h0) {
      h0 = h0 || i;
      var hZ = new h0(2);
      hZ[0] = 0;
      hZ[1] = 0;
      return hZ
    };
    hX.clone = function (hZ, h1) {
      h1 = h1 || i;
      var h0 = new h1(2);
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      return h0
    };
    hX.fromValues = function (hZ, h2, h1) {
      h1 = h1 || i;
      var h0 = new h1(2);
      h0[0] = hZ;
      h0[1] = h2;
      return h0
    };
    hX.copy = function (h0, hZ) {
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      return h0
    };
    hX.set = function (h0, hZ, h1) {
      h0[0] = hZ;
      h0[1] = h1;
      return h0
    };
    hX.add = function (h1, h0, hZ) {
      h1[0] = h0[0] + hZ[0];
      h1[1] = h0[1] + hZ[1];
      return h1
    };
    hX.subtract = function (h1, h0, hZ) {
      h1[0] = h0[0] - hZ[0];
      h1[1] = h0[1] - hZ[1];
      return h1
    };
    hX.sub = hX.subtract;
    hX.multiply = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ[0];
      h1[1] = h0[1] * hZ[1];
      return h1
    };
    hX.mul = hX.multiply;
    hX.divide = function (h1, h0, hZ) {
      h1[0] = h0[0] / hZ[0];
      h1[1] = h0[1] / hZ[1];
      return h1
    };
    hX.div = hX.divide;
    hX.min = function (h1, h0, hZ) {
      h1[0] = Math.min(h0[0], hZ[0]);
      h1[1] = Math.min(h0[1], hZ[1]);
      return h1
    };
    hX.max = function (h1, h0, hZ) {
      h1[0] = Math.max(h0[0], hZ[0]);
      h1[1] = Math.max(h0[1], hZ[1]);
      return h1
    };
    hX.scale = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ;
      h1[1] = h0[1] * hZ;
      return h1
    };
    hX.scaleAndAdd = function (h1, h0, hZ, h2) {
      h1[0] = h0[0] + (hZ[0] * h2);
      h1[1] = h0[1] + (hZ[1] * h2);
      return h1
    };
    hX.distance = function (h1, h0) {
      var hZ = h0[0] - h1[0],
        h2 = h0[1] - h1[1];
      return Math.sqrt(hZ * hZ + h2 * h2)
    };
    hX.dist = hX.distance;
    hX.squaredDistance = function (h1, h0) {
      var hZ = h0[0] - h1[0],
        h2 = h0[1] - h1[1];
      return hZ * hZ + h2 * h2
    };
    hX.sqrDist = hX.squaredDistance;
    hX.length = function (h0) {
      var hZ = h0[0],
        h1 = h0[1];
      return Math.sqrt(hZ * hZ + h1 * h1)
    };
    hX.len = hX.length;
    hX.squaredLength = function (h0) {
      var hZ = h0[0],
        h1 = h0[1];
      return hZ * hZ + h1 * h1
    };
    hX.sqrLen = hX.squaredLength;
    hX.negate = function (h0, hZ) {
      h0[0] = -hZ[0];
      h0[1] = -hZ[1];
      return h0
    };
    hX.normalize = function (h2, h1) {
      var h0 = h1[0],
        h3 = h1[1];
      var hZ = h0 * h0 + h3 * h3;
      if (hZ > 0) {
        hZ = 1 / Math.sqrt(hZ);
        h2[0] = h1[0] * hZ;
        h2[1] = h1[1] * hZ
      }
      return h2
    };
    hX.dot = function (h0, hZ) {
      return h0[0] * hZ[0] + h0[1] * hZ[1]
    };
    hX.cross = function (h1, h0, hZ) {
      var h2 = h0[0] * hZ[1] - h0[1] * hZ[0];
      h1[0] = h1[1] = 0;
      h1[2] = h2;
      return h1
    };
    hX.lerp = function (h1, h0, hZ, h2) {
      var h4 = h0[0],
        h3 = h0[1];
      h1[0] = h4 + h2 * (hZ[0] - h4);
      h1[1] = h3 + h2 * (hZ[1] - h3);
      return h1
    };
    hX.random = function (hZ, h1) {
      h1 = h1 || 1;
      var h0 = hS() * 2 * Math.PI;
      hZ[0] = Math.cos(h0) * h1;
      hZ[1] = Math.sin(h0) * h1;
      return hZ
    };
    hX.transformMat2 = function (h2, h1, h0) {
      var hZ = h1[0],
        h3 = h1[1];
      h2[0] = h0[0] * hZ + h0[2] * h3;
      h2[1] = h0[1] * hZ + h0[3] * h3;
      return h2
    };
    hX.transformMat2d = function (h2, h1, h0) {
      var hZ = h1[0],
        h3 = h1[1];
      h2[0] = h0[0] * hZ + h0[2] * h3 + h0[4];
      h2[1] = h0[1] * hZ + h0[3] * h3 + h0[5];
      return h2
    };
    hX.transformMat3 = function (h2, h1, h0) {
      var hZ = h1[0],
        h3 = h1[1];
      h2[0] = h0[0] * hZ + h0[3] * h3 + h0[6];
      h2[1] = h0[1] * hZ + h0[4] * h3 + h0[7];
      return h2
    };
    hX.transformMat4 = function (h2, h1, h0) {
      var hZ = h1[0],
        h3 = h1[1];
      h2[0] = h0[0] * hZ + h0[4] * h3 + h0[12];
      h2[1] = h0[1] * hZ + h0[5] * h3 + h0[13];
      return h2
    };
    hX.rotate = function (h2, h0, hZ, h6) {
      var h5 = h0[0] - hZ[0];
      var h4 = h0[1] - hZ[1];
      var h1 = Math.sin(h6);
      var h3 = Math.cos(h6);
      h2[0] = h5 * h3 - h4 * h1 + hZ[0];
      h2[1] = h5 * h1 + h4 * h3 + hZ[1];
      return h2
    };
    hX.forEach = (function () {
      var hZ = hX.create();
      return function (h2, h6, h7, h5, h4, h0) {
        var h3, h1;
        if (!h6) {
          h6 = 2
        }
        if (!h7) {
          h7 = 0
        }
        if (h5) {
          h1 = Math.min((h5 * h6) + h7, h2.length)
        } else {
          h1 = h2.length
        }
        for (h3 = h7; h3 < h1; h3 += h6) {
          hZ[0] = h2[h3];
          hZ[1] = h2[h3 + 1];
          h4(hZ, hZ, h0);
          h2[h3] = hZ[0];
          h2[h3 + 1] = hZ[1]
        }
        return h2
      }
    })();
    hX.str = function (hZ) {
      return "vec2(" + hZ[0] + ", " + hZ[1] + ")"
    };
    hU.vec2 = hX;
    var hW = {};
    hW.create = function (h0) {
      h0 = h0 || i;
      var hZ = new h0(3);
      hZ[0] = 0;
      hZ[1] = 0;
      hZ[2] = 0;
      return hZ
    };
    hW.clone = function (hZ, h1) {
      h1 = h1 || i;
      var h0 = new h1(3);
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      return h0
    };
    hW.fromValues = function (hZ, h3, h1, h2) {
      h2 = h2 || i;
      var h0 = new h2(3);
      h0[0] = hZ;
      h0[1] = h3;
      h0[2] = h1;
      return h0
    };
    hW.copy = function (h0, hZ) {
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      return h0
    };
    hW.set = function (h0, hZ, h2, h1) {
      h0[0] = hZ;
      h0[1] = h2;
      h0[2] = h1;
      return h0
    };
    hW.add = function (h1, h0, hZ) {
      h1[0] = h0[0] + hZ[0];
      h1[1] = h0[1] + hZ[1];
      h1[2] = h0[2] + hZ[2];
      return h1
    };
    hW.subtract = function (h1, h0, hZ) {
      h1[0] = h0[0] - hZ[0];
      h1[1] = h0[1] - hZ[1];
      h1[2] = h0[2] - hZ[2];
      return h1
    };
    hW.sub = hW.subtract;
    hW.multiply = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ[0];
      h1[1] = h0[1] * hZ[1];
      h1[2] = h0[2] * hZ[2];
      return h1
    };
    hW.mul = hW.multiply;
    hW.divide = function (h1, h0, hZ) {
      h1[0] = h0[0] / hZ[0];
      h1[1] = h0[1] / hZ[1];
      h1[2] = h0[2] / hZ[2];
      return h1
    };
    hW.div = hW.divide;
    hW.min = function (h1, h0, hZ) {
      h1[0] = Math.min(h0[0], hZ[0]);
      h1[1] = Math.min(h0[1], hZ[1]);
      h1[2] = Math.min(h0[2], hZ[2]);
      return h1
    };
    hW.max = function (h1, h0, hZ) {
      h1[0] = Math.max(h0[0], hZ[0]);
      h1[1] = Math.max(h0[1], hZ[1]);
      h1[2] = Math.max(h0[2], hZ[2]);
      return h1
    };
    hW.scale = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ;
      h1[1] = h0[1] * hZ;
      h1[2] = h0[2] * hZ;
      return h1
    };
    hW.scaleAndAdd = function (h1, h0, hZ, h2) {
      h1[0] = h0[0] + (hZ[0] * h2);
      h1[1] = h0[1] + (hZ[1] * h2);
      h1[2] = h0[2] + (hZ[2] * h2);
      return h1
    };
    hW.distance = function (h1, h0) {
      var hZ = h0[0] - h1[0],
        h3 = h0[1] - h1[1],
        h2 = h0[2] - h1[2];
      return Math.sqrt(hZ * hZ + h3 * h3 + h2 * h2)
    };
    hW.dist = hW.distance;
    hW.squaredDistance = function (h1, h0) {
      var hZ = h0[0] - h1[0],
        h3 = h0[1] - h1[1],
        h2 = h0[2] - h1[2];
      return hZ * hZ + h3 * h3 + h2 * h2
    };
    hW.sqrDist = hW.squaredDistance;
    hW.length = function (h0) {
      var hZ = h0[0],
        h2 = h0[1],
        h1 = h0[2];
      return Math.sqrt(hZ * hZ + h2 * h2 + h1 * h1)
    };
    hW.len = hW.length;
    hW.squaredLength = function (h0) {
      var hZ = h0[0],
        h2 = h0[1],
        h1 = h0[2];
      return hZ * hZ + h2 * h2 + h1 * h1
    };
    hW.sqrLen = hW.squaredLength;
    hW.negate = function (h0, hZ) {
      h0[0] = -hZ[0];
      h0[1] = -hZ[1];
      h0[2] = -hZ[2];
      return h0
    };
    hW.normalize = function (h2, h1) {
      var h0 = h1[0],
        h4 = h1[1],
        h3 = h1[2];
      var hZ = h0 * h0 + h4 * h4 + h3 * h3;
      if (hZ > 0) {
        hZ = 1 / Math.sqrt(hZ);
        h2[0] = h1[0] * hZ;
        h2[1] = h1[1] * hZ;
        h2[2] = h1[2] * hZ
      }
      return h2
    };
    hW.dot = function (h0, hZ) {
      return h0[0] * hZ[0] + h0[1] * hZ[1] + h0[2] * hZ[2]
    };
    hW.cross = function (h0, h5, h4) {
      var hZ = h5[0],
        h7 = h5[1],
        h6 = h5[2],
        h3 = h4[0],
        h2 = h4[1],
        h1 = h4[2];
      h0[0] = h7 * h1 - h6 * h2;
      h0[1] = h6 * h3 - hZ * h1;
      h0[2] = hZ * h2 - h7 * h3;
      return h0
    };
    hW.lerp = function (h1, h0, hZ, h2) {
      var h5 = h0[0],
        h4 = h0[1],
        h3 = h0[2];
      h1[0] = h5 + h2 * (hZ[0] - h5);
      h1[1] = h4 + h2 * (hZ[1] - h4);
      h1[2] = h3 + h2 * (hZ[2] - h3);
      return h1
    };
    hW.random = function (hZ, h3) {
      h3 = h3 || 1;
      var h1 = hS() * 2 * Math.PI;
      var h2 = (hS() * 2) - 1;
      var h0 = Math.sqrt(1 - h2 * h2) * h3;
      hZ[0] = Math.cos(h1) * h0;
      hZ[1] = Math.sin(h1) * h0;
      hZ[2] = h2 * h3;
      return hZ
    };
    hW.transformMat4 = function (h2, h1, h0) {
      var hZ = h1[0],
        h4 = h1[1],
        h3 = h1[2];
      h2[0] = h0[0] * hZ + h0[4] * h4 + h0[8] * h3 + h0[12];
      h2[1] = h0[1] * hZ + h0[5] * h4 + h0[9] * h3 + h0[13];
      h2[2] = h0[2] * hZ + h0[6] * h4 + h0[10] * h3 + h0[14];
      return h2
    };
    hW.transformMat3 = function (h2, h1, h0) {
      var hZ = h1[0],
        h4 = h1[1],
        h3 = h1[2];
      h2[0] = hZ * h0[0] + h4 * h0[3] + h3 * h0[6];
      h2[1] = hZ * h0[1] + h4 * h0[4] + h3 * h0[7];
      h2[2] = hZ * h0[2] + h4 * h0[5] + h3 * h0[8];
      return h2
    };
    hW.transformQuat = function (h5, ib, hZ) {
      var ic = ib[0],
        ia = ib[1],
        h9 = ib[2],
        h7 = hZ[0],
        h6 = hZ[1],
        h4 = hZ[2],
        h8 = hZ[3],
        h2 = h8 * ic + h6 * h9 - h4 * ia,
        h1 = h8 * ia + h4 * ic - h7 * h9,
        h0 = h8 * h9 + h7 * ia - h6 * ic,
        h3 = -h7 * ic - h6 * ia - h4 * h9;
      h5[0] = h2 * h8 + h3 * -h7 + h1 * -h4 - h0 * -h6;
      h5[1] = h1 * h8 + h3 * -h6 + h0 * -h7 - h2 * -h4;
      h5[2] = h0 * h8 + h3 * -h4 + h2 * -h6 - h1 * -h7;
      return h5
    };
    hW.rotateX = function (h1, h0, hZ, h4) {
      var h3 = [],
        h2 = [];
      h3[0] = h0[0] - hZ[0];
      h3[1] = h0[1] - hZ[1];
      h3[2] = h0[2] - hZ[2];
      h2[0] = h3[0];
      h2[1] = h3[1] * Math.cos(h4) - h3[2] * Math.sin(h4);
      h2[2] = h3[1] * Math.sin(h4) + h3[2] * Math.cos(h4);
      h1[0] = h2[0] + hZ[0];
      h1[1] = h2[1] + hZ[1];
      h1[2] = h2[2] + hZ[2];
      return h1
    };
    hW.rotateY = function (h1, h0, hZ, h4) {
      var h3 = [],
        h2 = [];
      h3[0] = h0[0] - hZ[0];
      h3[1] = h0[1] - hZ[1];
      h3[2] = h0[2] - hZ[2];
      h2[0] = h3[2] * Math.sin(h4) + h3[0] * Math.cos(h4);
      h2[1] = h3[1];
      h2[2] = h3[2] * Math.cos(h4) - h3[0] * Math.sin(h4);
      h1[0] = h2[0] + hZ[0];
      h1[1] = h2[1] + hZ[1];
      h1[2] = h2[2] + hZ[2];
      return h1
    };
    hW.rotateZ = function (h1, h0, hZ, h4) {
      var h3 = [],
        h2 = [];
      h3[0] = h0[0] - hZ[0];
      h3[1] = h0[1] - hZ[1];
      h3[2] = h0[2] - hZ[2];
      h2[0] = h3[0] * Math.cos(h4) - h3[1] * Math.sin(h4);
      h2[1] = h3[0] * Math.sin(h4) + h3[1] * Math.cos(h4);
      h2[2] = h3[2];
      h1[0] = h2[0] + hZ[0];
      h1[1] = h2[1] + hZ[1];
      h1[2] = h2[2] + hZ[2];
      return h1
    };
    hW.forEach = (function () {
      var hZ = hW.create();
      return function (h2, h6, h7, h5, h4, h0) {
        var h3, h1;
        if (!h6) {
          h6 = 3
        }
        if (!h7) {
          h7 = 0
        }
        if (h5) {
          h1 = Math.min((h5 * h6) + h7, h2.length)
        } else {
          h1 = h2.length
        }
        for (h3 = h7; h3 < h1; h3 += h6) {
          hZ[0] = h2[h3];
          hZ[1] = h2[h3 + 1];
          hZ[2] = h2[h3 + 2];
          h4(hZ, hZ, h0);
          h2[h3] = hZ[0];
          h2[h3 + 1] = hZ[1];
          h2[h3 + 2] = hZ[2]
        }
        return h2
      }
    })();
    hW.str = function (hZ) {
      return "vec3(" + hZ[0] + ", " + hZ[1] + ", " + hZ[2] + ")"
    };
    hU.vec3 = hW;
    var hV = {};
    hV.create = function (h0) {
      h0 = h0 || i;
      var hZ = new h0(4);
      hZ[0] = 0;
      hZ[1] = 0;
      hZ[2] = 0;
      hZ[3] = 0;
      return hZ
    };
    hV.clone = function (hZ, h1) {
      h1 = h1 || i;
      var h0 = new h1(4);
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      return h0
    };
    hV.fromValues = function (hZ, h4, h2, h0, h3) {
      h3 = h3 || i;
      var h1 = new h3(4);
      h1[0] = hZ;
      h1[1] = h4;
      h1[2] = h2;
      h1[3] = h0;
      return h1
    };
    hV.copy = function (h0, hZ) {
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      return h0
    };
    hV.set = function (h1, hZ, h3, h2, h0) {
      h1[0] = hZ;
      h1[1] = h3;
      h1[2] = h2;
      h1[3] = h0;
      return h1
    };
    hV.add = function (h1, h0, hZ) {
      h1[0] = h0[0] + hZ[0];
      h1[1] = h0[1] + hZ[1];
      h1[2] = h0[2] + hZ[2];
      h1[3] = h0[3] + hZ[3];
      return h1
    };
    hV.subtract = function (h1, h0, hZ) {
      h1[0] = h0[0] - hZ[0];
      h1[1] = h0[1] - hZ[1];
      h1[2] = h0[2] - hZ[2];
      h1[3] = h0[3] - hZ[3];
      return h1
    };
    hV.sub = hV.subtract;
    hV.multiply = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ[0];
      h1[1] = h0[1] * hZ[1];
      h1[2] = h0[2] * hZ[2];
      h1[3] = h0[3] * hZ[3];
      return h1
    };
    hV.mul = hV.multiply;
    hV.divide = function (h1, h0, hZ) {
      h1[0] = h0[0] / hZ[0];
      h1[1] = h0[1] / hZ[1];
      h1[2] = h0[2] / hZ[2];
      h1[3] = h0[3] / hZ[3];
      return h1
    };
    hV.div = hV.divide;
    hV.min = function (h1, h0, hZ) {
      h1[0] = Math.min(h0[0], hZ[0]);
      h1[1] = Math.min(h0[1], hZ[1]);
      h1[2] = Math.min(h0[2], hZ[2]);
      h1[3] = Math.min(h0[3], hZ[3]);
      return h1
    };
    hV.max = function (h1, h0, hZ) {
      h1[0] = Math.max(h0[0], hZ[0]);
      h1[1] = Math.max(h0[1], hZ[1]);
      h1[2] = Math.max(h0[2], hZ[2]);
      h1[3] = Math.max(h0[3], hZ[3]);
      return h1
    };
    hV.scale = function (h1, h0, hZ) {
      h1[0] = h0[0] * hZ;
      h1[1] = h0[1] * hZ;
      h1[2] = h0[2] * hZ;
      h1[3] = h0[3] * hZ;
      return h1
    };
    hV.scaleAndAdd = function (h1, h0, hZ, h2) {
      h1[0] = h0[0] + (hZ[0] * h2);
      h1[1] = h0[1] + (hZ[1] * h2);
      h1[2] = h0[2] + (hZ[2] * h2);
      h1[3] = h0[3] + (hZ[3] * h2);
      return h1
    };
    hV.distance = function (h2, h0) {
      var hZ = h0[0] - h2[0],
        h4 = h0[1] - h2[1],
        h3 = h0[2] - h2[2],
        h1 = h0[3] - h2[3];
      return Math.sqrt(hZ * hZ + h4 * h4 + h3 * h3 + h1 * h1)
    };
    hV.dist = hV.distance;
    hV.squaredDistance = function (h2, h0) {
      var hZ = h0[0] - h2[0],
        h4 = h0[1] - h2[1],
        h3 = h0[2] - h2[2],
        h1 = h0[3] - h2[3];
      return hZ * hZ + h4 * h4 + h3 * h3 + h1 * h1
    };
    hV.sqrDist = hV.squaredDistance;
    hV.length = function (h1) {
      var hZ = h1[0],
        h3 = h1[1],
        h2 = h1[2],
        h0 = h1[3];
      return Math.sqrt(hZ * hZ + h3 * h3 + h2 * h2 + h0 * h0)
    };
    hV.len = hV.length;
    hV.squaredLength = function (h1) {
      var hZ = h1[0],
        h3 = h1[1],
        h2 = h1[2],
        h0 = h1[3];
      return hZ * hZ + h3 * h3 + h2 * h2 + h0 * h0
    };
    hV.sqrLen = hV.squaredLength;
    hV.negate = function (h0, hZ) {
      h0[0] = -hZ[0];
      h0[1] = -hZ[1];
      h0[2] = -hZ[2];
      h0[3] = -hZ[3];
      return h0
    };
    hV.normalize = function (h3, h2) {
      var h0 = h2[0],
        h5 = h2[1],
        h4 = h2[2],
        h1 = h2[3];
      var hZ = h0 * h0 + h5 * h5 + h4 * h4 + h1 * h1;
      if (hZ > 0) {
        hZ = 1 / Math.sqrt(hZ);
        h3[0] = h2[0] * hZ;
        h3[1] = h2[1] * hZ;
        h3[2] = h2[2] * hZ;
        h3[3] = h2[3] * hZ
      }
      return h3
    };
    hV.dot = function (h0, hZ) {
      return h0[0] * hZ[0] + h0[1] * hZ[1] + h0[2] * hZ[2] + h0[3] * hZ[3]
    };
    hV.lerp = function (h1, h0, hZ, h2) {
      var h5 = h0[0],
        h4 = h0[1],
        h3 = h0[2],
        h6 = h0[3];
      h1[0] = h5 + h2 * (hZ[0] - h5);
      h1[1] = h4 + h2 * (hZ[1] - h4);
      h1[2] = h3 + h2 * (hZ[2] - h3);
      h1[3] = h6 + h2 * (hZ[3] - h6);
      return h1
    };
    hV.random = function (hZ, h0) {
      h0 = h0 || 1;
      hZ[0] = hS();
      hZ[1] = hS();
      hZ[2] = hS();
      hZ[3] = hS();
      hV.normalize(hZ, hZ);
      hV.scale(hZ, hZ, h0);
      return hZ
    };
    hV.transformMat4 = function (h3, h2, h0) {
      var hZ = h2[0],
        h5 = h2[1],
        h4 = h2[2],
        h1 = h2[3];
      h3[0] = h0[0] * hZ + h0[4] * h5 + h0[8] * h4 + h0[12] * h1;
      h3[1] = h0[1] * hZ + h0[5] * h5 + h0[9] * h4 + h0[13] * h1;
      h3[2] = h0[2] * hZ + h0[6] * h5 + h0[10] * h4 + h0[14] * h1;
      h3[3] = h0[3] * hZ + h0[7] * h5 + h0[11] * h4 + h0[15] * h1;
      return h3
    };
    hV.transformQuat = function (h5, ib, hZ) {
      var ic = ib[0],
        ia = ib[1],
        h9 = ib[2],
        h7 = hZ[0],
        h6 = hZ[1],
        h4 = hZ[2],
        h8 = hZ[3],
        h2 = h8 * ic + h6 * h9 - h4 * ia,
        h1 = h8 * ia + h4 * ic - h7 * h9,
        h0 = h8 * h9 + h7 * ia - h6 * ic,
        h3 = -h7 * ic - h6 * ia - h4 * h9;
      h5[0] = h2 * h8 + h3 * -h7 + h1 * -h4 - h0 * -h6;
      h5[1] = h1 * h8 + h3 * -h6 + h0 * -h7 - h2 * -h4;
      h5[2] = h0 * h8 + h3 * -h4 + h2 * -h6 - h1 * -h7;
      return h5
    };
    hV.forEach = (function () {
      var hZ = hV.create();
      return function (h2, h6, h7, h5, h4, h0) {
        var h3, h1;
        if (!h6) {
          h6 = 4
        }
        if (!h7) {
          h7 = 0
        }
        if (h5) {
          h1 = Math.min((h5 * h6) + h7, h2.length)
        } else {
          h1 = h2.length
        }
        for (h3 = h7; h3 < h1; h3 += h6) {
          hZ[0] = h2[h3];
          hZ[1] = h2[h3 + 1];
          hZ[2] = h2[h3 + 2];
          hZ[3] = h2[h3 + 3];
          h4(hZ, hZ, h0);
          h2[h3] = hZ[0];
          h2[h3 + 1] = hZ[1];
          h2[h3 + 2] = hZ[2];
          h2[h3 + 3] = hZ[3]
        }
        return h2
      }
    })();
    hV.str = function (hZ) {
      return "vec4(" + hZ[0] + ", " + hZ[1] + ", " + hZ[2] + ", " + hZ[3] + ")"
    };
    hU.vec4 = hV;
    var hR = {};
    hR.create = function (h0) {
      h0 = h0 || i;
      var hZ = new h0(4);
      hZ[0] = 1;
      hZ[1] = 0;
      hZ[2] = 0;
      hZ[3] = 1;
      return hZ
    };
    hR.clone = function (hZ, h1) {
      h1 = h1 || i;
      var h0 = new h1(4);
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      return h0
    };
    hR.copy = function (h0, hZ) {
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      return h0
    };
    hR.identity = function (hZ) {
      hZ[0] = 1;
      hZ[1] = 0;
      hZ[2] = 0;
      hZ[3] = 1;
      return hZ
    };
    hR.transpose = function (h1, h0) {
      if (h1 === h0) {
        var hZ = h0[1];
        h1[1] = h0[2];
        h1[2] = hZ
      } else {
        h1[0] = h0[0];
        h1[1] = h0[2];
        h1[2] = h0[1];
        h1[3] = h0[3]
      }
      return h1
    };
    hR.invert = function (h3, h1) {
      var h2 = h1[0],
        h0 = h1[1],
        hZ = h1[2],
        h5 = h1[3],
        h4 = h2 * h5 - hZ * h0;
      if (!h4) {
        return null
      }
      h4 = 1 / h4;
      h3[0] = h5 * h4;
      h3[1] = -h0 * h4;
      h3[2] = -hZ * h4;
      h3[3] = h2 * h4;
      return h3
    };
    hR.adjoint = function (h1, hZ) {
      var h0 = hZ[0];
      h1[0] = hZ[3];
      h1[1] = -hZ[1];
      h1[2] = -hZ[2];
      h1[3] = h0;
      return h1
    };
    hR.determinant = function (hZ) {
      return hZ[0] * hZ[3] - hZ[2] * hZ[1]
    };
    hR.multiply = function (h3, h8, h6) {
      var h2 = h8[0],
        h1 = h8[1],
        h0 = h8[2],
        hZ = h8[3];
      var h9 = h6[0],
        h7 = h6[1],
        h5 = h6[2],
        h4 = h6[3];
      h3[0] = h2 * h9 + h0 * h7;
      h3[1] = h1 * h9 + hZ * h7;
      h3[2] = h2 * h5 + h0 * h4;
      h3[3] = h1 * h5 + hZ * h4;
      return h3
    };
    hR.mul = hR.multiply;
    hR.rotate = function (h3, h6, h5) {
      var h2 = h6[0],
        h1 = h6[1],
        h0 = h6[2],
        hZ = h6[3],
        h7 = Math.sin(h5),
        h4 = Math.cos(h5);
      h3[0] = h2 * h4 + h0 * h7;
      h3[1] = h1 * h4 + hZ * h7;
      h3[2] = h2 * -h7 + h0 * h4;
      h3[3] = h1 * -h7 + hZ * h4;
      return h3
    };
    hR.scale = function (h3, h4, h6) {
      var h2 = h4[0],
        h1 = h4[1],
        h0 = h4[2],
        hZ = h4[3],
        h7 = h6[0],
        h5 = h6[1];
      h3[0] = h2 * h7;
      h3[1] = h1 * h7;
      h3[2] = h0 * h5;
      h3[3] = hZ * h5;
      return h3
    };
    hR.str = function (hZ) {
      return "mat2(" + hZ[0] + ", " + hZ[1] + ", " + hZ[2] + ", " + hZ[3] + ")"
    };
    hR.frob = function (hZ) {
      return (Math.sqrt(Math.pow(hZ[0], 2) + Math.pow(hZ[1], 2) + Math.pow(hZ[2], 2) + Math.pow(hZ[3], 2)))
    };
    hR.LDU = function (hZ, h2, h1, h0) {
      hZ[2] = h0[2] / h0[0];
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[3] = h0[3] - hZ[2] * h1[1];
      return [hZ, h2, h1]
    };
    hU.mat2 = hR;
    var e = {};
    e.create = function (h0) {
      h0 = h0 || i;
      var hZ = new h0(16);
      hZ[0] = 1;
      hZ[1] = 0;
      hZ[2] = 0;
      hZ[3] = 0;
      hZ[4] = 0;
      hZ[5] = 1;
      hZ[6] = 0;
      hZ[7] = 0;
      hZ[8] = 0;
      hZ[9] = 0;
      hZ[10] = 1;
      hZ[11] = 0;
      hZ[12] = 0;
      hZ[13] = 0;
      hZ[14] = 0;
      hZ[15] = 1;
      return hZ
    };
    e.clone = function (hZ) {
      var h0 = new i(16);
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      h0[4] = hZ[4];
      h0[5] = hZ[5];
      h0[6] = hZ[6];
      h0[7] = hZ[7];
      h0[8] = hZ[8];
      h0[9] = hZ[9];
      h0[10] = hZ[10];
      h0[11] = hZ[11];
      h0[12] = hZ[12];
      h0[13] = hZ[13];
      h0[14] = hZ[14];
      h0[15] = hZ[15];
      return h0
    };
    e.copy = function (h0, hZ) {
      h0[0] = hZ[0];
      h0[1] = hZ[1];
      h0[2] = hZ[2];
      h0[3] = hZ[3];
      h0[4] = hZ[4];
      h0[5] = hZ[5];
      h0[6] = hZ[6];
      h0[7] = hZ[7];
      h0[8] = hZ[8];
      h0[9] = hZ[9];
      h0[10] = hZ[10];
      h0[11] = hZ[11];
      h0[12] = hZ[12];
      h0[13] = hZ[13];
      h0[14] = hZ[14];
      h0[15] = hZ[15];
      return h0
    };
    e.identity = function (hZ) {
      hZ[0] = 1;
      hZ[1] = 0;
      hZ[2] = 0;
      hZ[3] = 0;
      hZ[4] = 0;
      hZ[5] = 1;
      hZ[6] = 0;
      hZ[7] = 0;
      hZ[8] = 0;
      hZ[9] = 0;
      hZ[10] = 1;
      hZ[11] = 0;
      hZ[12] = 0;
      hZ[13] = 0;
      hZ[14] = 0;
      hZ[15] = 1;
      return hZ
    };
    e.transpose = function (h2, h1) {
      if (h2 === h1) {
        var h6 = h1[1],
          h4 = h1[2],
          h3 = h1[3],
          hZ = h1[6],
          h5 = h1[7],
          h0 = h1[11];
        h2[1] = h1[4];
        h2[2] = h1[8];
        h2[3] = h1[12];
        h2[4] = h6;
        h2[6] = h1[9];
        h2[7] = h1[13];
        h2[8] = h4;
        h2[9] = hZ;
        h2[11] = h1[14];
        h2[12] = h3;
        h2[13] = h5;
        h2[14] = h0
      } else {
        h2[0] = h1[0];
        h2[1] = h1[4];
        h2[2] = h1[8];
        h2[3] = h1[12];
        h2[4] = h1[1];
        h2[5] = h1[5];
        h2[6] = h1[9];
        h2[7] = h1[13];
        h2[8] = h1[2];
        h2[9] = h1[6];
        h2[10] = h1[10];
        h2[11] = h1[14];
        h2[12] = h1[3];
        h2[13] = h1[7];
        h2[14] = h1[11];
        h2[15] = h1[15]
      }
      return h2
    };
    e.invert = function (ij, ip) {
      var iu = ip[0],
        ir = ip[1],
        iq = ip[2],
        im = ip[3],
        h3 = ip[4],
        h2 = ip[5],
        h1 = ip[6],
        h0 = ip[7],
        ii = ip[8],
        ih = ip[9],
        ig = ip[10],
        ie = ip[11],
        iw = ip[12],
        iv = ip[13],
        it = ip[14],
        io = ip[15],
        id = iu * h2 - ir * h3,
        ic = iu * h1 - iq * h3,
        ib = iu * h0 - im * h3,
        ia = ir * h1 - iq * h2,
        h9 = ir * h0 - im * h2,
        h8 = iq * h0 - im * h1,
        h7 = ii * iv - ih * iw,
        h6 = ii * it - ig * iw,
        h5 = ii * io - ie * iw,
        h4 = ih * it - ig * iv,
        il = ih * io - ie * iv,
        ik = ig * io - ie * it,
        hZ = id * ik - ic * il + ib * h4 + ia * h5 - h9 * h6 + h8 * h7;
      if (!hZ) {
        return null
      }
      hZ = 1 / hZ;
      ij[0] = (h2 * ik - h1 * il + h0 * h4) * hZ;
      ij[1] = (iq * il - ir * ik - im * h4) * hZ;
      ij[2] = (iv * h8 - it * h9 + io * ia) * hZ;
      ij[3] = (ig * h9 - ih * h8 - ie * ia) * hZ;
      ij[4] = (h1 * h5 - h3 * ik - h0 * h6) * hZ;
      ij[5] = (iu * ik - iq * h5 + im * h6) * hZ;
      ij[6] = (it * ib - iw * h8 - io * ic) * hZ;
      ij[7] = (ii * h8 - ig * ib + ie * ic) * hZ;
      ij[8] = (h3 * il - h2 * h5 + h0 * h7) * hZ;
      ij[9] = (ir * h5 - iu * il - im * h7) * hZ;
      ij[10] = (iw * h9 - iv * ib + io * id) * hZ;
      ij[11] = (ih * ib - ii * h9 - ie * id) * hZ;
      ij[12] = (h2 * h6 - h3 * h4 - h1 * h7) * hZ;
      ij[13] = (iu * h4 - ir * h6 + iq * h7) * hZ;
      ij[14] = (iv * ic - iw * ia - it * id) * hZ;
      ij[15] = (ii * ia - ih * ic + ig * id) * hZ;
      return ij
    };
    e.adjoint = function (h7, ia) {
      var ie = ia[0],
        ic = ia[1],
        ib = ia[2],
        h8 = ia[3],
        h2 = ia[4],
        h1 = ia[5],
        h0 = ia[6],
        hZ = ia[7],
        h6 = ia[8],
        h5 = ia[9],
        h4 = ia[10],
        h3 = ia[11],
        ih = ia[12],
        ig = ia[13],
        id = ia[14],
        h9 = ia[15];
      h7[0] = (h1 * (h4 * h9 - h3 * id) - h5 * (h0 * h9 - hZ * id) + ig * (h0 * h3 - hZ * h4));
      h7[1] = -(ic * (h4 * h9 - h3 * id) - h5 * (ib * h9 - h8 * id) + ig * (ib * h3 - h8 * h4));
      h7[2] = (ic * (h0 * h9 - hZ * id) - h1 * (ib * h9 - h8 * id) + ig * (ib * hZ - h8 * h0));
      h7[3] = -(ic * (h0 * h3 - hZ * h4) - h1 * (ib * h3 - h8 * h4) + h5 * (ib * hZ - h8 * h0));
      h7[4] = -(h2 * (h4 * h9 - h3 * id) - h6 * (h0 * h9 - hZ * id) + ih * (h0 * h3 - hZ * h4));
      h7[5] = (ie * (h4 * h9 - h3 * id) - h6 * (ib * h9 - h8 * id) + ih * (ib * h3 - h8 * h4));
      h7[6] = -(ie * (h0 * h9 - hZ * id) - h2 * (ib * h9 - h8 * id) + ih * (ib * hZ - h8 * h0));
      h7[7] = (ie * (h0 * h3 - hZ * h4) - h2 * (ib * h3 - h8 * h4) + h6 * (ib * hZ - h8 * h0));
      h7[8] = (h2 * (h5 * h9 - h3 * ig) - h6 * (h1 * h9 - hZ * ig) + ih * (h1 * h3 - hZ * h5));
      h7[9] = -(ie * (h5 * h9 - h3 * ig) - h6 * (ic * h9 - h8 * ig) + ih * (ic * h3 - h8 * h5));
      h7[10] = (ie * (h1 * h9 - hZ * ig) - h2 * (ic * h9 - h8 * ig) + ih * (ic * hZ - h8 * h1));
      h7[11] = -(ie * (h1 * h3 - hZ * h5) - h2 * (ic * h3 - h8 * h5) + h6 * (ic * hZ - h8 * h1));
      h7[12] = -(h2 * (h5 * id - h4 * ig) - h6 * (h1 * id - h0 * ig) + ih * (h1 * h4 - h0 * h5));
      h7[13] = (ie * (h5 * id - h4 * ig) - h6 * (ic * id - ib * ig) + ih * (ic * h4 - ib * h5));
      h7[14] = -(ie * (h1 * id - h0 * ig) - h2 * (ic * id - ib * ig) + ih * (ic * h0 - ib * h1));
      h7[15] = (ie * (h1 * h4 - h0 * h5) - h2 * (ic * h4 - ib * h5) + h6 * (ic * h0 - ib * h1));
      return h7
    };
    e.determinant = function (il) {
      var ir = il[0],
        ip = il[1],
        im = il[2],
        ik = il[3],
        h2 = il[4],
        h1 = il[5],
        h0 = il[6],
        hZ = il[7],
        ih = il[8],
        ig = il[9],
        ie = il[10],
        id = il[11],
        iu = il[12],
        it = il[13],
        iq = il[14],
        io = il[15],
        ic = ir * h1 - ip * h2,
        ib = ir * h0 - im * h2,
        ia = ir * hZ - ik * h2,
        h9 = ip * h0 - im * h1,
        h8 = ip * hZ - ik * h1,
        h7 = im * hZ - ik * h0,
        h6 = ih * it - ig * iu,
        h5 = ih * iq - ie * iu,
        h4 = ih * io - id * iu,
        h3 = ig * iq - ie * it,
        ij = ig * io - id * it,
        ii = ie * io - id * iq;
      return ic * ii - ib * ij + ia * h3 + h9 * h4 - h8 * h5 + h7 * h6
    };
    e.multiply = function (ib, ig, ic) {
      var ik = ig[0],
        ij = ig[1],
        ih = ig[2],
        id = ig[3],
        h5 = ig[4],
        h3 = ig[5],
        h1 = ig[6],
        hZ = ig[7],
        ia = ig[8],
        h9 = ig[9],
        h8 = ig[10],
        h7 = ig[11],
        im = ig[12],
        il = ig[13],
        ii = ig[14],
        ie = ig[15];
      var h6 = ic[0],
        h4 = ic[1],
        h2 = ic[2],
        h0 = ic[3];
      ib[0] = h6 * ik + h4 * h5 + h2 * ia + h0 * im;
      ib[1] = h6 * ij + h4 * h3 + h2 * h9 + h0 * il;
      ib[2] = h6 * ih + h4 * h1 + h2 * h8 + h0 * ii;
      ib[3] = h6 * id + h4 * hZ + h2 * h7 + h0 * ie;
      h6 = ic[4];
      h4 = ic[5];
      h2 = ic[6];
      h0 = ic[7];
      ib[4] = h6 * ik + h4 * h5 + h2 * ia + h0 * im;
      ib[5] = h6 * ij + h4 * h3 + h2 * h9 + h0 * il;
      ib[6] = h6 * ih + h4 * h1 + h2 * h8 + h0 * ii;
      ib[7] = h6 * id + h4 * hZ + h2 * h7 + h0 * ie;
      h6 = ic[8];
      h4 = ic[9];
      h2 = ic[10];
      h0 = ic[11];
      ib[8] = h6 * ik + h4 * h5 + h2 * ia + h0 * im;
      ib[9] = h6 * ij + h4 * h3 + h2 * h9 + h0 * il;
      ib[10] = h6 * ih + h4 * h1 + h2 * h8 + h0 * ii;
      ib[11] = h6 * id + h4 * hZ + h2 * h7 + h0 * ie;
      h6 = ic[12];
      h4 = ic[13];
      h2 = ic[14];
      h0 = ic[15];
      ib[12] = h6 * ik + h4 * h5 + h2 * ia + h0 * im;
      ib[13] = h6 * ij + h4 * h3 + h2 * h9 + h0 * il;
      ib[14] = h6 * ih + h4 * h1 + h2 * h8 + h0 * ii;
      ib[15] = h6 * id + h4 * hZ + h2 * h7 + h0 * ie;
      return ib
    };
    e.mul = e.multiply;
    e.translate = function (ib, id, h6) {
      var h5 = h6[0],
        h4 = h6[1],
        h3 = h6[2],
        ih, ig, ie, ic, h2, h1, h0, hZ, ia, h9, h8, h7;
      if (id === ib) {
        ib[12] = id[0] * h5 + id[4] * h4 + id[8] * h3 + id[12];
        ib[13] = id[1] * h5 + id[5] * h4 + id[9] * h3 + id[13];
        ib[14] = id[2] * h5 + id[6] * h4 + id[10] * h3 + id[14];
        ib[15] = id[3] * h5 + id[7] * h4 + id[11] * h3 + id[15]
      } else {
        ih = id[0];
        ig = id[1];
        ie = id[2];
        ic = id[3];
        h2 = id[4];
        h1 = id[5];
        h0 = id[6];
        hZ = id[7];
        ia = id[8];
        h9 = id[9];
        h8 = id[10];
        h7 = id[11];
        ib[0] = ih;
        ib[1] = ig;
        ib[2] = ie;
        ib[3] = ic;
        ib[4] = h2;
        ib[5] = h1;
        ib[6] = h0;
        ib[7] = hZ;
        ib[8] = ia;
        ib[9] = h9;
        ib[10] = h8;
        ib[11] = h7;
        ib[12] = ih * h5 + h2 * h4 + ia * h3 + id[12];
        ib[13] = ig * h5 + h1 * h4 + h9 * h3 + id[13];
        ib[14] = ie * h5 + h0 * h4 + h8 * h3 + id[14];
        ib[15] = ic * h5 + hZ * h4 + h7 * h3 + id[15]
      }
      return ib
    };
    e.scale = function (h2, h0, h1) {
      var hZ = h1[0],
        h4 = h1[1],
        h3 = h1[2];
      h2[0] = h0[0] * hZ;
      h2[1] = h0[1] * hZ;
      h2[2] = h0[2] * hZ;
      h2[3] = h0[3] * hZ;
      h2[4] = h0[4] * h4;
      h2[5] = h0[5] * h4;
      h2[6] = h0[6] * h4;
      h2[7] = h0[7] * h4;
      h2[8] = h0[8] * h3;
      h2[9] = h0[9] * h3;
      h2[10] = h0[10] * h3;
      h2[11] = h0[11] * h3;
      h2[12] = h0[12];
      h2[13] = h0[13];
      h2[14] = h0[14];
      h2[15] = h0[15];
      return h2
    };
    e.rotate = function (ik, it, iv, hZ) {
      var h9 = hZ[0],
        h8 = hZ[1],
        h7 = hZ[2],
        il = Math.sqrt(h9 * h9 + h8 * h8 + h7 * h7),
        ie, iq, id, ix, iw, iu, ir, h6, h5, h4, h3, ij, ii, ih, ig, ic, ib, ia, ip, io, im, h2, h1, h0;
      if (Math.abs(il) < hY) {
        return null
      }
      il = 1 / il;
      h9 *= il;
      h8 *= il;
      h7 *= il;
      ie = Math.sin(iv);
      iq = Math.cos(iv);
      id = 1 - iq;
      ix = it[0];
      iw = it[1];
      iu = it[2];
      ir = it[3];
      h6 = it[4];
      h5 = it[5];
      h4 = it[6];
      h3 = it[7];
      ij = it[8];
      ii = it[9];
      ih = it[10];
      ig = it[11];
      ic = h9 * h9 * id + iq;
      ib = h8 * h9 * id + h7 * ie;
      ia = h7 * h9 * id - h8 * ie;
      ip = h9 * h8 * id - h7 * ie;
      io = h8 * h8 * id + iq;
      im = h7 * h8 * id + h9 * ie;
      h2 = h9 * h7 * id + h8 * ie;
      h1 = h8 * h7 * id - h9 * ie;
      h0 = h7 * h7 * id + iq;
      ik[0] = ix * ic + h6 * ib + ij * ia;
      ik[1] = iw * ic + h5 * ib + ii * ia;
      ik[2] = iu * ic + h4 * ib + ih * ia;
      ik[3] = ir * ic + h3 * ib + ig * ia;
      ik[4] = ix * ip + h6 * io + ij * im;
      ik[5] = iw * ip + h5 * io + ii * im;
      ik[6] = iu * ip + h4 * io + ih * im;
      ik[7] = ir * ip + h3 * io + ig * im;
      ik[8] = ix * h2 + h6 * h1 + ij * h0;
      ik[9] = iw * h2 + h5 * h1 + ii * h0;
      ik[10] = iu * h2 + h4 * h1 + ih * h0;
      ik[11] = ir * h2 + h3 * h1 + ig * h0;
      if (it !== ik) {
        ik[12] = it[12];
        ik[13] = it[13];
        ik[14] = it[14];
        ik[15] = it[15]
      }
      return ik
    };
    e.rotateX = function (hZ, h6, h5) {
      var ib = Math.sin(h5),
        h4 = Math.cos(h5),
        ia = h6[4],
        h9 = h6[5],
        h8 = h6[6],
        h7 = h6[7],
        h3 = h6[8],
        h2 = h6[9],
        h1 = h6[10],
        h0 = h6[11];
      if (h6 !== hZ) {
        hZ[0] = h6[0];
        hZ[1] = h6[1];
        hZ[2] = h6[2];
        hZ[3] = h6[3];
        hZ[12] = h6[12];
        hZ[13] = h6[13];
        hZ[14] = h6[14];
        hZ[15] = h6[15]
      }
      hZ[4] = ia * h4 + h3 * ib;
      hZ[5] = h9 * h4 + h2 * ib;
      hZ[6] = h8 * h4 + h1 * ib;
      hZ[7] = h7 * h4 + h0 * ib;
      hZ[8] = h3 * h4 - ia * ib;
      hZ[9] = h2 * h4 - h9 * ib;
      hZ[10] = h1 * h4 - h8 * ib;
      hZ[11] = h0 * h4 - h7 * ib;
      return hZ
    };
    e.rotateY = function (h3, ia, h9) {
      var ib = Math.sin(h9),
        h8 = Math.cos(h9),
        h2 = ia[0],
        h1 = ia[1],
        h0 = ia[2],
        hZ = ia[3],
        h7 = ia[8],
        h6 = ia[9],
        h5 = ia[10],
        h4 = ia[11];
      if (ia !== h3) {
        h3[4] = ia[4];
        h3[5] = ia[5];
        h3[6] = ia[6];
        h3[7] = ia[7];
        h3[12] = ia[12];
        h3[13] = ia[13];
        h3[14] = ia[14];
        h3[15] = ia[15]
      }
      h3[0] = h2 * h8 - h7 * ib;
      h3[1] = h1 * h8 - h6 * ib;
      h3[2] = h0 * h8 - h5 * ib;
      h3[3] = hZ * h8 - h4 * ib;
      h3[8] = h2 * ib + h7 * h8;
      h3[9] = h1 * ib + h6 * h8;
      h3[10] = h0 * ib + h5 * h8;
      h3[11] = hZ * ib + h4 * h8;
      return h3
    };
    e.rotateZ = function (h3, h6, h5) {
      var ib = Math.sin(h5),
        h4 = Math.cos(h5),
        h2 = h6[0],
        h1 = h6[1],
        h0 = h6[2],
        hZ = h6[3],
        ia = h6[4],
        h9 = h6[5],
        h8 = h6[6],
        h7 = h6[7];
      if (h6 !== h3) {
        h3[8] = h6[8];
        h3[9] = h6[9];
        h3[10] = h6[10];
        h3[11] = h6[11];
        h3[12] = h6[12];
        h3[13] = h6[13];
        h3[14] = h6[14];
        h3[15] = h6[15]
      }
      h3[0] = h2 * h4 + ia * ib;
      h3[1] = h1 * h4 + h9 * ib;
      h3[2] = h0 * h4 + h8 * ib;
      h3[3] = hZ * h4 + h7 * ib;
      h3[4] = ia * h4 - h2 * ib;
      h3[5] = h9 * h4 - h1 * ib;
      h3[6] = h8 * h4 - h0 * ib;
      h3[7] = h7 * h4 - hZ * ib;
      return h3
    };
    e.fromRotationTranslation = function (ic, ia, h8) {
      var h5 = ia[0],
        h4 = ia[1],
        h3 = ia[2],
        h6 = ia[3],
        id = h5 + h5,
        hZ = h4 + h4,
        h7 = h3 + h3,
        h2 = h5 * id,
        h1 = h5 * hZ,
        h0 = h5 * h7,
        ib = h4 * hZ,
        h9 = h4 * h7,
        ih = h3 * h7,
        ii = h6 * id,
        ig = h6 * hZ,
        ie = h6 * h7;
      ic[0] = 1 - (ib + ih);
      ic[1] = h1 + ie;
      ic[2] = h0 - ig;
      ic[3] = 0;
      ic[4] = h1 - ie;
      ic[5] = 1 - (h2 + ih);
      ic[6] = h9 + ii;
      ic[7] = 0;
      ic[8] = h0 + ig;
      ic[9] = h9 - ii;
      ic[10] = 1 - (h2 + ib);
      ic[11] = 0;
      ic[12] = h8[0];
      ic[13] = h8[1];
      ic[14] = h8[2];
      ic[15] = 1;
      return ic
    };
    e.fromQuat = function (h9, h6) {
      var h3 = h6[0],
        h2 = h6[1],
        h1 = h6[2],
        h4 = h6[3],
        ia = h3 + h3,
        hZ = h2 + h2,
        h5 = h1 + h1,
        h0 = h3 * ia,
        h8 = h2 * ia,
        h7 = h2 * hZ,
        ih = h1 * ia,
        ig = h1 * hZ,
        id = h1 * h5,
        ie = h4 * ia,
        ic = h4 * hZ,
        ib = h4 * h5;
      h9[0] = 1 - h7 - id;
      h9[1] = h8 + ib;
      h9[2] = ih - ic;
      h9[3] = 0;
      h9[4] = h8 - ib;
      h9[5] = 1 - h0 - id;
      h9[6] = ig + ie;
      h9[7] = 0;
      h9[8] = ih + ic;
      h9[9] = ig - ie;
      h9[10] = 1 - h0 - h7;
      h9[11] = 0;
      h9[12] = 0;
      h9[13] = 0;
      h9[14] = 0;
      h9[15] = 1;
      return h9
    };
    e.frustum = function (h3, h0, h8, hZ, h7, h5, h4) {
      var h6 = 1 / (h8 - h0),
        h2 = 1 / (h7 - hZ),
        h1 = 1 / (h5 - h4);
      h3[0] = (h5 * 2) * h6;
      h3[1] = 0;
      h3[2] = 0;
      h3[3] = 0;
      h3[4] = 0;
      h3[5] = (h5 * 2) * h2;
      h3[6] = 0;
      h3[7] = 0;
      h3[8] = (h8 + h0) * h6;
      h3[9] = (h7 + hZ) * h2;
      h3[10] = (h4 + h5) * h1;
      h3[11] = -1;
      h3[12] = 0;
      h3[13] = 0;
      h3[14] = (h4 * h5 * 2) * h1;
      h3[15] = 0;
      return h3
    };
    e.perspective = function (h2, h1, h0, h3, hZ) {
      var h5 = 1 / Math.tan(h1 / 2),
        h4 = 1 / (h3 - hZ);
      h2[0] = h5 / h0;
      h2[1] = 0;
      h2[2] = 0;
      h2[3] = 0;
      h2[4] = 0;
      h2[5] = h5;
      h2[6] = 0;
      h2[7] = 0;
      h2[8] = 0;
      h2[9] = 0;
      h2[10] = (hZ + h3) * h4;
      h2[11] = -1;
      h2[12] = 0;
      h2[13] = 0;
      h2[14] = (2 * hZ * h3) * h4;
      h2[15] = 0;
      return h2
    };
    e.ortho = function (h2, h0, h8, hZ, h6, h5, h4) {
      var h3 = 1 / (h0 - h8),
        h7 = 1 / (hZ - h6),
        h1 = 1 / (h5 - h4);
      h2[0] = -2 * h3;
      h2[1] = 0;
      h2[2] = 0;
      h2[3] = 0;
      h2[4] = 0;
      h2[5] = -2 * h7;
      h2[6] = 0;
      h2[7] = 0;
      h2[8] = 0;
      h2[9] = 0;
      h2[10] = 2 * h1;
      h2[11] = 0;
      h2[12] = (h0 + h8) * h3;
      h2[13] = (h6 + hZ) * h7;
      h2[14] = (h4 + h5) * h1;
      h2[15] = 1;
      return h2
    };
    e.lookAt = function (id, il, im, h5) {
      var ik, ij, ih, h1, h0, hZ, h8, h7, h6, ie, ii = il[0],
        ig = il[1],
        ic = il[2],
        h4 = h5[0],
        h3 = h5[1],
        h2 = h5[2],
        ib = im[0],
        ia = im[1],
        h9 = im[2];
      if (Math.abs(ii - ib) < hY && Math.abs(ig - ia) < hY && Math.abs(ic - h9) < hY) {
        return e.identity(id)
      }
      h8 = ii - ib;
      h7 = ig - ia;
      h6 = ic - h9;
      ie = 1 / Math.sqrt(h8 * h8 + h7 * h7 + h6 * h6);
      h8 *= ie;
      h7 *= ie;
      h6 *= ie;
      ik = h3 * h6 - h2 * h7;
      ij = h2 * h8 - h4 * h6;
      ih = h4 * h7 - h3 * h8;
      ie = Math.sqrt(ik * ik + ij * ij + ih * ih);
      if (!ie) {
        ik = 0;
        ij = 0;
        ih = 0
      } else {
        ie = 1 / ie;
        ik *= ie;
        ij *= ie;
        ih *= ie
      }
      h1 = h7 * ih - h6 * ij;
      h0 = h6 * ik - h8 * ih;
      hZ = h8 * ij - h7 * ik;
      ie = Math.sqrt(h1 * h1 + h0 * h0 + hZ * hZ);
      if (!ie) {
        h1 = 0;
        h0 = 0;
        hZ = 0
      } else {
        ie = 1 / ie;
        h1 *= ie;
        h0 *= ie;
        hZ *= ie
      }
      id[0] = ik;
      id[1] = h1;
      id[2] = h8;
      id[3] = 0;
      id[4] = ij;
      id[5] = h0;
      id[6] = h7;
      id[7] = 0;
      id[8] = ih;
      id[9] = hZ;
      id[10] = h6;
      id[11] = 0;
      id[12] = -(ik * ii + ij * ig + ih * ic);
      id[13] = -(h1 * ii + h0 * ig + hZ * ic);
      id[14] = -(h8 * ii + h7 * ig + h6 * ic);
      id[15] = 1;
      return id
    };
    e.str = function (hZ) {
      return "mat4(" + hZ[0] + ", " + hZ[1] + ", " + hZ[2] + ", " + hZ[3] + ", " + hZ[4] + ", " + hZ[5] + ", " + hZ[6] + ", " + hZ[7] + ", " + hZ[8] + ", " + hZ[9] + ", " + hZ[10] + ", " + hZ[11] + ", " + hZ[12] + ", " + hZ[13] + ", " + hZ[14] + ", " + hZ[15] + ")"
    };
    e.frob = function (hZ) {
      return (Math.sqrt(Math.pow(hZ[0], 2) + Math.pow(hZ[1], 2) + Math.pow(hZ[2], 2) + Math.pow(hZ[3], 2) + Math.pow(hZ[4], 2) + Math.pow(hZ[5], 2) + Math.pow(hZ[6], 2) + Math.pow(hZ[6], 2) + Math.pow(hZ[7], 2) + Math.pow(hZ[8], 2) + Math.pow(hZ[9], 2) + Math.pow(hZ[10], 2) + Math.pow(hZ[11], 2) + Math.pow(hZ[12], 2) + Math.pow(hZ[13], 2) + Math.pow(hZ[14], 2) + Math.pow(hZ[15], 2)))
    };
    hU.mat4 = e
  })(window);

  function dc() {
    this.result = {
      bkData: [],
      eleData: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ],
      tileLabels: []
    }
  }
  C.extend(dc.prototype, {
    createLayer: function (T, i) {
      var e = this.result.bkData;
      i = i || {};
      if (!e[T]) {
        e[T] = [
          [],
          [],
          []
        ]
      }
      e[T].dataType = i.dataType || 2;
      e[T].png8 = i.png8 || false;
      e[T].clipTile = i.clipTile || false
    },
    removeLayer: function (i) {
      var e = this.result.bkData;
      e[i] = null
    },
    getResult: function () {
      return this.result
    },
    setData: function (hT, hS, hU) {
      var e = this.result.bkData;
      var T = e[hS] ? e[hS][hU] : null;
      if (!T) {
        return
      }
      for (var hR = 0; hR < T.length; hR++) {
        if (T[hR].key && T[hR].key === hT.key) {
          T[hR] = hT;
          return
        }
      }
      T.push(hT)
    },
    setLabelData: function (e) {
      this.result.tileLabels = e
    },
    getLabelData: function () {
      return this.result.tileLabels
    },
    setOverlayData: function (i, e) {
      if (!this.result.eleData[e]) {
        return
      }
      this.result.eleData[e] = i
    },
    clearLabelOverlayData: function () {
      this.result.eleData[2] = [];
      this.result.eleData[3] = [];
      this.result.eleData[4] = []
    },
    clearData: function (hR) {
      var e = this.result.bkData;
      if (typeof hR === "number") {
        if (e[hR]) {
          e[hR][0] = [];
          e[hR][1] = [];
          e[hR][2] = []
        }
        return
      }
      for (var T = 0; T < e.length; T++) {
        if (!e[T]) {
          continue
        }
        e[T][0] = [];
        e[T][1] = [];
        e[T][2] = []
      }
    },
    sortThumbData: function (i) {
      var e = this.result.bkData;
      var T = e[i];
      if (!T) {
        return
      }
      if (T[0] && T[0].length > 0) {
        T[0].sort(function (hS, hR) {
          return hS.tileInfo.useZoom - hR.tileInfo.useZoom
        })
      }
    }
  });
  var fh = (function () {
    var h1 = new Int8Array(4);
    var T = new Int32Array(h1.buffer, 0, 1);
    var hW = new Float32Array(h1.buffer, 0, 1);

    function h3(ia) {
      T[0] = ia;
      return hW[0]
    }

    function i(ia) {
      hW[0] = ia;
      return T[0]
    }

    function hX(ia) {
      var ic = (ia[3] << 24 | ia[2] << 16 | ia[1] << 8 | ia[0]);
      var ib = h3(ic & 4278190079);
      return ib
    }
    var hS = 0;
    var hV = 1;
    var hZ = 2;
    var h7 = 0;
    var h4 = 1;
    var h2 = 2;
    var hT = 9;

    function h0(ia, ib) {
      var ic;
      if (ib % 2 === 0) {
        ic = [-ia[1], ia[0]]
      } else {
        ic = [ia[1], -ia[0]]
      }
      return ic
    }

    function e(ia, ib, ic) {
      var id = h0(ia, ib);
      var ie;
      if (ic === hV) {
        return id
      } else {
        if (ib === 4 || ib === 5) {
          ie = [id[0] - ia[0], id[1] - ia[1]]
        } else {
          ie = [id[0] + ia[0], id[1] + ia[1]]
        }
        if (ic === hS) {
          vec2.normalize(ie, ie)
        }
        return ie
      }
    }

    function h6(ib, ia) {
      return Math.sqrt(Math.pow(ib[0] - ia[0], 2) + Math.pow(ib[1] - ia[1], 2))
    }

    function hR(ie, id, ic, ia) {
      var ib = vec2.dot(ie, id);
      if (ic === h2 || ic === h4) {
        if ((ia === 0 || ia === 1) && ib > 0) {
          return true
        } else {
          if ((ia === 2 || ia === 3) && ib < 0) {
            return true
          }
        }
      }
      if ((ia === 0 || ia === 1) && ib < 0) {
        return true
      } else {
        if ((ia === 2 || ia === 3) && ib > 0) {
          return true
        }
      }
      return false
    }

    function hY(ib, ih, ij) {
      var ii = h0(ib, ih);
      var id;
      var ig = ib;
      var ie = ij;
      var il = [];
      vec2.normalize(il, [ig[0] + ie[0], ig[1] + ie[1]]);
      var ik = vec2.dot(ii, [-il[1], il[0]]);
      if (Math.abs(ik) < 0.1) {
        ik = 1
      }
      var ic = 1 / ik;
      id = [-il[1] * ic, il[0] * ic];
      var ia = vec2.dot(ib, id);
      if (ia < 0) {
        vec2.negate(id, id)
      }
      return {
        cos2: ia,
        offset: id
      }
    }

    function h9(ib, ih, ij, ia) {
      var ii = h0(ib, ih);
      var ig;
      var ie;
      var id;
      if (ih === 0 || ih === 1) {
        ig = ij;
        ie = ib
      } else {
        ig = ib;
        ie = ij
      }
      if (!ig || !ie) {
        return ii
      }
      var il = [ig[0] + ie[0], ig[1] + ie[1]];
      if (il[0] === 0 && il[1] === 0) {
        vec2.normalize(il, ie)
      } else {
        vec2.normalize(il, il)
      }
      var im = hR(il, ii, ia, ih);
      if (im) {
        return ii
      }
      var ik = vec2.dot(ii, [-il[1], il[0]]);
      if (Math.abs(ik) < 0.1) {
        ik = 1
      }
      var ic = 1 / ik;
      id = [-il[1] * ic, il[0] * ic];
      return id
    }

    function h8(im, io, ig, ie, ip, il, id, ih, ic, ik) {
      var ij;
      var ib = 0;
      var ia = false;
      ij = il.length / hT - 1;
      hU(io[0], im[0], ig[0], ip, ie, 4, ih, ic, undefined, il, ik);
      ij++;
      ib++;
      hU(io[0], im[0], ig[0], ip, ie, 5, ih, ic, undefined, il, ik);
      ij++;
      ib++;
      for (var ii = 0; ii < im.length; ii++) {
        hU(io[ii], im[ii], ig[ii], ip, ie, 0, ih, ic, im[ii - 1], il, ik);
        h5(id, ++ij, ++ib, ia);
        hU(io[ii], im[ii], ig[ii], ip, ie, 1, ih, ic, im[ii - 1], il, ik);
        h5(id, ++ij, ++ib, ia);
        hU(io[ii + 1], im[ii], ig[ii + 1], ip, ie, 2, ih, ic, im[ii + 1], il, ik);
        h5(id, ++ij, ++ib, ia);
        hU(io[ii + 1], im[ii], ig[ii + 1], ip, ie, 3, ih, ic, im[ii + 1], il, ik);
        h5(id, ++ij, ++ib, ia);
        if (ie === h4 && ii !== im.length - 1) {
          hU(io[ii + 1], im[ii], ig[ii + 1], ip, ie, 8, ih, ic, im[ii + 1], il, ik);
          h5(id, ++ij, ++ib, ia);
          ia = ia ? false : true
        }
      }
      hU(io[io.length - 1], im[im.length - 1], ig[io.length - 1], ip, ie, 6, ih, ic, undefined, il, ik);
      h5(id, ++ij, ++ib, ia);
      hU(io[io.length - 1], im[im.length - 1], ig[io.length - 1], ip, ie, 7, ih, ic, undefined, il, ik);
      h5(id, ++ij, ++ib, ia)
    }

    function hU(ip, id, ii, iq, ic, ij, ig, ib, im, il, ik) {
      var io = ij % 2 === 0 ? 1 : -1;
      var ih;
      if (ij === 4 || ij === 5 || ij === 6 || ij === 7) {
        ih = e(id, ij, iq)
      } else {
        if (ij === 0 || ij === 1 || ij === 2 || ij === 3) {
          ih = h9(id, ij, im, ic)
        } else {
          if (ij === 8) {
            var ie = hY(id, ij, im);
            ih = ie.offset;
            vec2.normalize(ih, ih);
            var ia = ie.cos2;
            if (ia < 0) {
              io = -io
            }
          }
        }
      }
      il[il.length] = ip[0] * 10;
      il[il.length] = ip[1] * 10;
      il[il.length] = ih[0] * ib * 10;
      il[il.length] = ih[1] * ib * 10;
      il[il.length] = ig;
      il[il.length] = io;
      il[il.length] = 0;
      il[il.length] = ik || 0;
      il[il.length] = ii
    }

    function h5(ie, ic, ia, id) {
      var ib;
      if (ia % 2 === 0) {
        if (id) {
          ie[ie.length] = ic - 2;
          ie[ie.length] = ic - 1;
          ie[ie.length] = ic
        } else {
          ie[ie.length] = ic - 1;
          ie[ie.length] = ic - 2;
          ie[ie.length] = ic
        }
      } else {
        if (id) {
          ie[ie.length] = ic - 1;
          ie[ie.length] = ic - 2;
          ie[ie.length] = ic
        } else {
          ie[ie.length] = ic - 2;
          ie[ie.length] = ic - 1;
          ie[ie.length] = ic
        }
      }
    }
    return {
      getVertexCount: function (ib, ia) {
        if (ia === h4) {
          return ib * 5 - 2
        } else {
          return ib * 4
        }
      },
      buildData: function (im, ic, io, ij, ia, ig, ib, ik) {
        var il = [];
        var ii = 0;
        var ie = [0];
        for (var ih = 0; ih < im.length; ih++) {
          if (ih > 0) {
            ii += h6(im[ih], im[ih - 1]);
            ie.push(ii * 10)
          }
          if (ih !== im.length - 1) {
            var id = [im[ih + 1][0] - im[ih][0], im[ih + 1][1] - im[ih][1]];
            var ip = [];
            if (id[0] === 0 && id[1] === 0) {
              ip = [0, 0]
            } else {
              vec2.normalize(ip, id)
            }
            il[il.length] = [ip[0], ip[1]]
          }
        }
        return h8(il, im, ie, ic, io, ij, ia, hX(ig), ib, ik)
      },
      toTileSolidLineVertices: function (ie, ib) {
        var ic = new Float32Array(ie.length / hT * 5);
        var ia = new Int16Array(ic.buffer);
        var ih = 0;
        var id = 0;
        for (var ig = 0; ig < ie.length; ig += hT) {
          ia[ih] = ~~ie[ig];
          ia[ih + 1] = ~~ie[ig + 1];
          ia[ih + 2] = ~~ie[ig + 2];
          ia[ih + 3] = ~~ie[ig + 3];
          ic[id + 2] = ie[ig + 4];
          ia[ih + 6] = ie[ig + 5];
          ia[ih + 7] = ib ? ib : 0;
          ia[ih + 8] = ie[ig + 7];
          ia[ih + 9] = 0;
          ih += 10;
          id += 5
        }
        return ic
      }
    }
  })();
  var eH = 1;
  var gt = 2;
  var fS = {
    drawIndex: 0,
    devicePixelRatio: a6(),
    zoomState: 1,
    curViewTilesInfo: null,
    iconSetImg: null,
    LAST_CALC_ZOOM: -1,
    LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
    lastCollisionTestTime: 0,
    remove: function () {
      this.tileCache.clear()
    },
    initDrawData: function () {
      this.drawIndex = this.zIndex;
      this.map._featureMgr.createLayer(this.drawIndex, {
        dataType: this.dataType,
        png8: this.png8,
        clipTile: this.clipTile
      })
    },
    destroyDrawData: function () {
      this.map._featureMgr.removeLayer(this.drawIndex)
    },
    setZIndex: function (e) {
      this.zIndex = e
    },
    getTileKey: function (e, hR) {
      hR = hR || {};
      var i = typeof hR.useZoom === "number" ? hR.useZoom : e.useZoom;
      var T = e.style || this.mapStyleId || "default";
      return this.mapType + "_" + T + "_" + e.col + "_" + e.row + "_" + e.zoom + "_" + i
    },
    getTileRenderDataKey: function (i) {
      var T = i.col;
      var hR = i.zoom;
      var e = i.baseTileSize;
      T = d4.calcLoopParam(T, hR, e).col;
      return this.mapType + "_" + T + "_" + i.row + "_" + hR + "_" + i.useZoom
    },
    getTileUnits: function (e) {
      var hR = this.map;
      var T = b6[hR.getMapType()];
      var i = T.baseUnits * Math.pow(2, T.zoomLevelBase - e);
      return i
    },
    getTilesUrl: function (hS, h1, h2) {
      var i = hS.x;
      var h3 = hS.y;
      var hY = aD("ditu", "normal");
      var hU = hY.ver;
      var hV = hY.udt;
      i = d4.calcLoopParam(i, h1, h2).col;
      var h0 = b6.B_NORMAL_MAP.vectorTileUrls;
      var hT = Math.abs(i + h3) % h0.length;
      var hZ = h0[hT];
      if (window.offLineIPAddress) {
        h0 = [window.offLineIPAddress + "/pvd/"];
        hZ = h0[0]
      }
      return hZ + h1 + '/' + i + '/' + h3
      var T = "x=" + i + "&y=" + h3 + "&z=" + Math.floor(h1);
      var hX = this.devicePixelRatio > 1 ? "&scaler=2" : "";
      var hW = "&textimg=1";
      if (this.map.config.textRenderType === "canvas") {
        hW = "&textimg=0"
      }
      var hR = this.map.config.style;
      if (typeof hR === "string" && hR !== "default") {
        T += "&styleId=" + e3.mapStyleNameIdPair[hR]
      }
      T += "&styles=pl" + hW + hX + "&v=" + hU + "&udt=" + hV + "&json=0";
      var e = hZ + "?qt=vtile&param=" + window.encodeURIComponent(gl(T));
      return e
    },
    getRasterTilesUrl: function (T, hT, hR) {
      var hS = b6[this.map.mapType];
      var i = this.map.config.style;
      var e = hS.tileUrls[Math.abs(hT + T) % hS.tileUrls.length] + "?qt=tile&x=" + T + "&y=" + hT + "&z=" + hR + ((i === "default" || typeof i !== "string") ? "" : ("&styleId=" + e3.mapStyleNameIdPair[i])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&p=1";
      e = e.replace(/-(\d+)/gi, "M$1");
      return e
    },
    getZoomState: function () {
      var T = this.map;
      var i = T.getZoom();
      var e = i - this.lastZoom;
      if (e > 0) {
        this.zoomState = 1
      } else {
        if (e < 0) {
          this.zoomState = -1
        }
      }
      this.lastZoom = i;
      return this.zoomState
    },
    releaseOutViewTileData: function (e) {
      var hS = this.map._workerMgr.releasePendingData(e);
      for (var hR = 0, T = hS.length; hR < T; hR++) {
        var hT = this.getTileKey(hS[hR]);
        this.tileCache.removeData(hT)
      }
    },
    loadLayerData: function (e, hR, i) {
      this.hasZoomChange = i;
      this.curViewTilesInfo = e;
      this.mapStyleId = this.map.getMapStyleId();
      this.releaseOutViewTileData(e);
      var T = this.getZoomState();
      if (this.dataType === gt) {
        if (hR) {
          this.getVectorLayerDataFromCache(e, T)
        } else {
          this.loadVectorLayerData(e)
        }
      } else {
        this.loadRasterLayerData(e, hR)
      }
    },
    getVectorLayerDataFromCache: function (hW, h6) {
      this.map.temp.isPermitSpotOver = false;
      this.tileLabels = [];
      if (this.baseLayer === true) {
        var h0 = this.map._customLabelMgr.virtualTile;
        if (h0 && h0.label) {
          this.tileLabels.push(h0.label)
        }
      }
      this.thumbCache = {};
      var h7 = -1;
      for (var h3 = 0, h1 = hW.length; h3 < h1; h3++) {
        var h4 = hW[h3];
        var hS = h4.col;
        var hT = h4.row;
        var T = h4.zoom;
        var h2 = this._getTileTexImgKey(h4);
        var hR = h4.useZoom;
        h7 = T;
        var hU = this.getTileKey(h4);
        var h9 = this.tileCache.getData(hU);
        if (h9 && h9.status === "ready") {
          var ia = h9;
          this.map._featureMgr.setData(h9, this.drawIndex, 2);
          if (h9.label) {
            if (h9.label.status === "ready") {
              h9.label.tileInfo = h9.tileInfo;
              this.tileLabels.push(h9.label);
              if (h9.label.textureSources && h9.label.textureSources[hR] && this.map._webglMapScene) {
                var h8 = this.map._webglMapScene._painter;
                if (!h8._labelTextureAtlasOffset[h2]) {
                  h8._addToAsyncJob(h9.label.textureSources[hR])
                }
              }
            } else {
              if (h9.label.status !== "processing") {
                this.processLabelData(h9)
              }
            }
          }
        } else {
          var h5 = {
            tileInfo: h4,
            dataType: gt,
            key: hU
          };
          this.map._featureMgr.setData(h5, this.drawIndex, 2);
          if (this.useThumbData) {
            this.setThumbData(hS, hT, T, hR, h6)
          }
        }
      }
      this.tileLabels.labelZoom = h7;
      this.updateLabels(h6);
      var hX = this.map.getZoom();
      var hV = Math.floor(hX);
      var hZ = hX - hV;
      var hY = Math.floor(this.LAST_CALC_ZOOM);
      var e = this.LAST_CALC_ZOOM - hY;
      var ib = false;
      if (this.hasZoomChange) {
        if (Math.abs(hX - this.LAST_CALC_ZOOM) >= 0.5) {
          ib = true
        } else {
          if (hZ < 0.5 && e >= 0.5) {
            ib = true
          } else {
            if (hZ >= 0.5 && e < 0.5) {
              ib = true
            }
          }
        }
        if (ib) {
          this.cacheDataCollideLabels(0)
        }
        this.LAST_CALC_ZOOM = hX
      } else {
        if (this.tileLabels.length > 0) {
          this.cacheDataCollideLabels(C.Browser.ie ? 50 : 30)
        }
      }
    },
    loadVectorLayerData: function (hX) {
      this.map.temp.isPermitSpotOver = false;
      var hW = this;

      function hV(i, hY) {
        var h0 = hW.tileCache.getData(hY);
        if (!h0) {
          return
        }
        if (!i || i.error) {
          var hZ = new bb("ontileloaderror");
          i = i || {};
          hZ.error = i.error || "";
          hZ.message = i.message || "";
          hW.map.fire(hZ);
          h0.status = "init";
          h0.reloadTimer = setTimeout(function () {
            if (h0.retry < 3) {
              h0.retry++;
              h0.status = "loading";
              hW.loadVectorTileData(i.tileInfo, hV)
            } else {
              hW.tileCache.removeData(hY)
            }
          }, 4000);
          hW.map._featureMgr.clearData(hW.drawIndex);
          hW._checkTilesLoaded();
          hW.getVectorLayerDataFromCache(hW.curViewTilesInfo, hW.getZoomState());
          return
        }
        if (h0.reloadTimer) {
          clearTimeout(h0.reloadTimer);
          h0.reloadTimer = null
        }
        hW.callbackDataQueue.push([i, hY]);
        if (hW.processDataTimer) {
          return
        }
        hW.processDataTimer = setTimeout(function () {
          while (hW.callbackDataQueue.length > 0) {
            var h1 = hW.callbackDataQueue.shift();
            hW.vectorTileDataCbk(h1[0], h1[1]);
            hW._checkTilesLoaded()
          }
          hW.map._featureMgr.clearData(hW.drawIndex);
          hW.getVectorLayerDataFromCache(hW.curViewTilesInfo, hW.getZoomState());
          hW.processDataTimer = null
        }, 200)
      }
      for (var hU = 0, hS = hX.length; hU < hS; hU++) {
        var T = hX[hU];
        var hT = this.getTileKey(T);
        var e = this.tileCache.getData(hT);
        if (!e) {
          e = {
            status: "init",
            tileInfo: T,
            dataType: gt,
            key: hT,
            retry: 0
          }
        }
        if (e.status !== "ready" && e.status !== "loading") {
          this.numLoading++;
          e.status = "loading";
          this.tileCache.setData(hT, e);
          var hR = this.getProcessedLabelZoom(T);
          if (hR) {
            T.processedLabelZooms = hR
          }
          this.loadVectorTileData(T, hV)
        }
      }
    },
    setThumbData: function (i, hS, hR, e, T) {
      if (T === 1) {
        if (this._findParentZoomTile(i, hS, hR, e, 8) === false) {
          this._findChildZoomTile(i, hS, hR, e, 3)
        }
      } else {
        if (T === -1) {
          if (this._findChildZoomTile(i, hS, hR, e, 3) === false) {
            this._findParentZoomTile(i, hS, hR, e, 8)
          }
        }
      }
      this.map._featureMgr.sortThumbData(this.drawIndex)
    },
    _findParentZoomTile: function (hU, h3, h2, hS, hX) {
      var hT = b6[this.getMapType()];
      var T = hT.minDataZoom;
      var e = hU;
      var h0 = h3;
      var hY = h2;
      var hZ = hS;
      for (var hW = 1; hW <= hX; hW++) {
        var hR = this.tileType.getParentTile(e, h0, hY, hZ, T);
        if (hR === null) {
          continue
        }
        var h1 = this.getTileKey(hR);
        var hV = this.tileCache.getData(h1);
        if (hV && hV.status === "ready") {
          if (this.thumbCache[h1]) {
            continue
          }
          this.map._featureMgr.setData(hV, this.drawIndex, 0);
          this.thumbCache[h1] = true;
          return true
        }
        e = hR.col;
        h0 = hR.row;
        hY = hR.zoom;
        hZ = hR.useZoom
      }
      return false
    },
    _findChildZoomTile: function (hV, hX, e, hS, h6) {
      var h4 = b6[this.getMapType()];
      var h0 = h4.maxDataZoom;
      var hU = hV;
      var hW = hX;
      var hY = e;
      var hR = hS;
      var hT = true;
      for (var h3 = 1; h3 <= h6; h3++) {
        var h1 = false;
        var T = this.tileType.getChildTiles(hU, hW, hY, hR, h0, h3);
        if (!T) {
          continue
        }
        for (var h2 = 0; h2 < T.length; h2++) {
          var hZ = this.getTileKey(T[h2]);
          var h5 = this.tileCache.getData(hZ);
          if (h5 && h5.status === "ready") {
            if (!this.thumbCache[hZ]) {
              this.map._featureMgr.setData(h5, this.drawIndex, 1);
              this.thumbCache[hZ] = true
            }
            h1 = true
          } else {
            hT = false
          }
        }
        if (h1) {
          break
        }
      }
      return hT
    },
    loadVectorTileData: function (i, hS) {
      var T = i.col;
      var hW = i.row;
      var hU = i.zoom;
      var hV = i.baseTileSize;
      var e = this.getTilesUrl(new ej(T, hW), hU, hV);
      if (!e) {
        return
      }
      var hT = this.getTileKey(i);
      by(this.map);
      if (!this.processData) {
        this.map._workerMgr.loadTileData(e, i, hT, hS);
        return
      }
      var hS = "cbk" + hT.replace(/-/g, "_");
      var hR = this;
      bo[hS] = function (hX) {
        var hY = (function (hZ) {
          return function () {
            hZ.tileInfo = i;
            var h5 = hR.processData(hZ);
            if (!h5.road) {
              return
            }
            var h2 = {
              tileInfo: i,
              renderData: {
                base: []
              },
              status: "ready",
              key: hT,
              mapType: hR.mapType
            };
            var h8 = [];
            var ib = [];
            for (var h4 = 0; h4 < h5.road.length; h4++) {
              var h7 = h5.road[h4];
              var h6 = -1;
              for (var h3 = 0; h3 < h7.length; h3++) {
                var h9 = h7[h3];
                var ia = [];
                if (h8.length / 7 + h9[0].length / 2 > 65536) {
                  h2.renderData.base.push({
                    type: "line",
                    data: [fh.toTileSolidLineVertices(h8, 4000), new Uint16Array(ib)]
                  });
                  h8 = [];
                  ib = []
                }
                for (var h1 = 0; h1 < h9[0].length; h1 += 2) {
                  ia[ia.length] = [h9[0][h1], h9[0][h1 + 1]]
                }
                var h0 = h9[3];
                fh.buildData(ia, h9[1], h9[2], h8, ib, h0, h9[4], h4 + 20, false)
              }
              h2.renderData.base.push({
                type: "line",
                data: [fh.toTileSolidLineVertices(h8, 4000), new Uint16Array(ib)]
              })
            }
            hR.tileCache.setData(hT, h2);
            hR.map._featureMgr.clearData(hR.drawIndex);
            hR.getVectorLayerDataFromCache(hR.curViewTilesInfo, hR.getZoomState());
            hR.map.dispatchEvent(new bb("onrefresh"))
          }
        })(hX);
        hR.map.jobScheduler.addJob(hY);
        delete bo[hS]
      };
      e += "&fn=" + encodeURIComponent(eA + "." + hS);
      hm.load(e)
    },
    vectorTileDataCbk: function (hR, hS) {
      var hW = new bb("ontileloaded");
      hW.perfStat = hR.perfStat || [];
      var e = this.map;
      e.fire(hW);
      var i = hR.tileInfo;
      var T = i.col;
      var h1 = i.row;
      var h0 = i.zoom;
      var hZ = i.baseTileSize;
      var hU = this.tileCache.getData(hS);
      if (!hU) {
        return
      }
      if (!this.showLabel) {
        hR.label = null
      }
      hU.renderData = hR;
      hU.tileInfo = i;
      var hT = d4.calcLoopParam(T, h0, hZ);
      var hX = hT.geoOffsetX;
      hU.tileInfo.loopOffsetX = hX;
      hU.status = "ready";
      hU.mapType = this.mapType;
      this.tileCache.setData(hS, hU);
      hU.label = hR.label;
      hR.label = null;
      if (hR.indoorData && e._indoorMgr) {
        e._indoorMgr.setData(hR.indoorData)
      }
      var hV = "id_" + T + "_" + h1 + "_" + h0;
      if (!this.curViewTilesInfo[hV]) {
        e.fire(new bb("ontilenotinview"));
        return
      }
      this.processLabelData(hU);
      if (hR.indoorData && e._indoorMgr && e._indoorMgr.currentUid) {
        this._refreshIndoorData(e._indoorMgr.currentUid, e._indoorMgr.currentFloor)
      }
      var hY = new bb("onrefresh");
      hY.source = "webgllayer";
      this.map.dispatchEvent(hY)
    },
    _refreshIndoorData: function (hZ, hY) {
      var h1 = this.map._indoorMgr.getIndoorData(hZ);
      var h4 = h1.tileKeys;
      var h2 = Math.floor(this.map.getZoom());
      for (var hW = 0; hW < h4.length; hW++) {
        var hT = h4[hW];
        var hV = this.tileCache.getData(hT);
        if (!hV) {
          continue
        }
        var h3 = hV.renderData;
        h3.indoorBase = [];
        h3.indoorBaseContour = [];
        h3.indoorBorder3D = [];
        h3.indoorArea3D = [];
        hV.label.indoorLabel = [];
        this.labelProcessor.clearCollisionCache(hV.label);
        for (var hX in h3.indoorData) {
          if (hX === "tileInfo") {
            continue
          }
          var e = h3.indoorData[hX];
          var hS = e.defaultFloor;
          if (hX === hZ) {
            hS = hY;
            e.currentFloor = hY
          }
          if (e.floors[hS]) {
            if (e.floors[hS].base) {
              for (var hU = 0; hU < e.floors[hS].base.length; hU++) {
                h3.indoorBase.push(e.floors[hS].base[hU])
              }
            }
            if (e.floors[hS].contour) {
              for (var hU = 0; hU < e.floors[hS].contour.length; hU++) {
                h3.indoorBaseContour.push(e.floors[hS].contour[hU])
              }
            }
            if (e.floors[hS].indoorBorder3D) {
              h3.indoorBorder3D.push(e.floors[hS].indoorBorder3D)
            }
            if (e.floors[hS].area3D) {
              h3.indoorArea3D.push(e.floors[hS].area3D)
            }
            if (e.floors[hS].pois) {
              hV.label.indoorLabel = hV.label.indoorLabel.concat(e.floors[hS].pois)
            }
          }
        }
        this.updateAllIconsTextureCoords(hV);
        var h0 = this;
        this.labelProcessor.loadIconImages(hV, function (i) {
          h0.updateAllIconsTextureCoords(i)
        });
        var hR = hT.split("_");
        var T = parseInt(hR[hR.length - 1], 10);
        if (T !== h2) {
          continue
        }
        h0.map._featureMgr.setData(hV, this.drawIndex, 2)
      }
      this.dataBackCollideLabels();
      this.map.dispatchEvent(new bb("onrefresh"))
    },
    _removeIndoorData: function (i) {
      if (!i.indoorData) {
        return
      }
      for (var e in i.indoorData) {
        if (e === "tileInfo") {
          continue
        }
        this.map._indoorMgr.removeData(e, i.key)
      }
    },
    getProcessedLabelZoom: function (hR) {
      var hS = di.baseZoomInfo[hR.zoom];
      if (!hS) {
        return false
      }
      var T = [];
      for (var hT = 0; hT < hS.length; hT++) {
        var hU = this.getTileKey(hR, {
          useZoom: hS[hT]
        });
        var e = this.tileCache.getData(hU);
        if (e && e.status === "ready" && e.label && e.label.status === "ready") {
          T.push(hS[hT])
        }
      }
      if (T.length) {
        return T
      } else {
        return false
      }
    },
    getSameZoomDataFromCache: function (T) {
      var hR = di.baseZoomInfo[T.zoom];
      for (var hS = 0; hS < hR.length; hS++) {
        var hT = this.getTileKey(T, {
          useZoom: hR[hS]
        });
        if (T.useZoom === hR[hS]) {
          continue
        }
        var e = this.tileCache.getData(hT);
        if (e && e.status === "ready" && e.label && e.label.status === "ready") {
          return e
        }
      }
      return false
    },
    hasSameLabelData: function (hR, T) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].key === hR) {
          return true
        }
      }
      return false
    },
    getDataByFloorName: function (T, hR) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].floorName === hR) {
          return T[e]
        }
      }
      return null
    },
    mergeIndoorLabelData: function (hW, e) {
      for (var hU in hW) {
        if (hU === "tileInfo") {
          continue
        }
        if (e[hU]) {
          var T = hW[hU].floors;
          var hX = e[hU].floors;
          for (var hS = 0; hS < T.length; hS++) {
            var hR = T[hS];
            var hV = hR.floorName;
            var hT = this.getDataByFloorName(hX, hV);
            if (hT) {
              if (hT.pois) {
                hT.pois = hT.pois.concat(hR.pois);
                hR.pois = hT.pois
              } else {
                hT.pois = hR.pois
              }
            }
          }
        }
      }
    },
    mergeSameZoomLabelData: function (hU) {
      var hS = hU.label;
      if (!hS) {
        return
      }
      var e = hU.tileInfo;
      var hT = this.getSameZoomDataFromCache(e);
      if (!hT) {
        return
      }
      var hR = hT.label;
      if (!hR) {
        return
      }
      for (var T = 0; T < hS.fixedLabel.length; T++) {
        if (!this.hasSameLabelData(hS.fixedLabel[T].key, hR.fixedLabel)) {
          hR.hasNewData = true;
          hR.fixedLabel.push(hS.fixedLabel[T])
        }
      }
      for (var T = 0; T < hS.lineLabel.length; T++) {
        if (!this.hasSameLabelData(hS.lineLabel[T].key, hR.lineLabel)) {
          hR.hasNewData = true;
          hR.lineLabel.push(hS.lineLabel[T])
        }
      }
      for (var T = 0; T < hS.indoorLabel.length; T++) {
        if (!this.hasSameLabelData(hS.indoorLabel[T].key, hR.indoorLabel)) {
          hR.hasNewData = true;
          hR.indoorLabel.push(hS.indoorLabel[T])
        }
      }
      hU.label = hR;
      if (hT.renderData.indoorData && hU.renderData.indoorData) {
        this.mergeIndoorLabelData(hU.renderData.indoorData, hT.renderData.indoorData)
      }
    },
    processLabelData: function (hT) {
      if (!hT.label) {
        return
      }
      if (hT.label.status === "processing") {
        return
      }
      hT.label.status = "processing";
      var hR = this;
      hR.updateAllIconsTextureCoords(hT);
      this.labelProcessor.loadIconImages(hT, function (hU) {
        hR.updateAllIconsTextureCoords(hU)
      });
      if (this.map.config.textRenderType === "canvas") {
        var e = this.labelProcessor.drawLabelsOnCanvas(hT, function (hW, hX) {
          var hV = hT.tileInfo;
          if (!bo.customStyleInfo) {
            hR.mergeSameZoomLabelData(hT)
          }
          if (hW) {
            if (!hT.label.textureHeights) {
              hT.label.textureHeights = []
            }
            hT.label.textureHeights[hV.useZoom] = hW.height
          }
          if (hX) {
            if (!hT.label.indoorTextureHeights) {
              hT.label.indoorTextureHeights = []
            }
            hT.label.indoorTextureHeights[hV.useZoom] = hX.height
          }
          var hU = hR._getTileTexImgKey(hV);
          hR._doWorkAfterLabelImageLoad(hT, hW, hX, hU)
        });
        return
      }
      var T = hT.label.textImageBitmap || hT.label.textImgStr;
      var hS = hT.label.indoorTextImageBitmap || hT.label.indoorTextImgStr;
      this.labelProcessor.loadImgByStr(T, hS, function i(hZ, hX) {
        var hW = hT.label.textureHeight;
        var h0 = hT.label.indoorTextureHeight;
        hT.label.textureHeight = undefined;
        hT.label.indoorTextureHeight = undefined;
        var hV = hT.tileInfo;
        hR.mergeSameZoomLabelData(hT);
        var hY = hT.label;
        hY.textImgStr = "";
        hY.indoorTextImgStr && (hY.indoorTextImgStr = "");
        if (!hY.textureHeights) {
          hY.textureHeights = []
        }
        hY.textureHeights[hV.useZoom] = hW;
        if (!hY.indoorTextureHeights) {
          hY.indoorTextureHeights = []
        }
        hY.indoorTextureHeights[hV.useZoom] = h0;
        var hU = hR._getTileTexImgKey(hV);
        hR._doWorkAfterLabelImageLoad(hT, hZ, hX, hU)
      })
    },
    _getTileTexImgKey: function (i) {
      var T = i.style || this.mapStyleId || "default";
      var e = T + "_" + i.col + "_" + i.row + "_" + i.zoom;
      if (this.map.config.textRenderType === "canvas") {
        e += "_" + i.useZoom
      }
      return e
    },
    _doWorkAfterLabelImageLoad: function (hV, hT, hR, i) {
      var hU = this;
      var hS = hV.label;
      hS.tileInfo = hV.tileInfo;
      hS.status = "ready";
      if (hT || hR) {
        var e = hS.tileInfo;
        if (hT) {
          hT.id = i;
          if (!hS.textureSources) {
            hS.textureSources = []
          }
          hS.textureSources[e.useZoom] = hT
        }
        if (hR) {
          hR.id = i + "_indoor";
          if (!hS.indoorTextureSources) {
            hS.indoorTextureSources = []
          }
          hS.indoorTextureSources[e.useZoom] = hR
        }
        if (hU.map._webglMapScene) {
          var T = hU.map._webglMapScene._painter;
          if (hT) {
            T._addToAsyncJob(hS.textureSources[e.useZoom])
          }
        }
      }
      if (hV.custom !== true) {
        hU.tileLabels.push(hS)
      }
      if (hU.collisionTimer) {
        return
      }
      hU.collisionTimer = setTimeout(function () {
        hU.dataBackCollideLabels();
        hU.collisionTimer = null
      }, 300)
    },
    _updateIconTextureCoords: function (hV, T) {
      if (!hV) {
        return
      }
      var hU = this.map;
      for (var hR = 0; hR < hV.length; hR++) {
        var hT = hV[hR];
        if (!hT.iconPos) {
          continue
        }
        if (hU._webglMapScene) {
          var e = hU._webglMapScene._painter;
          var hS = T + "_" + hT.iconPos.iconType;
          hT.iconPos.texcoord = e._iconTextureAtlasCoords[hS] || null
        }
      }
    },
    updateAllIconsTextureCoords: function (hS) {
      if (this.map.viewAnimationTime) {
        return
      }
      if (hS) {
        if (hS.label) {
          var i = hS.tileInfo.style;
          this._updateIconTextureCoords(hS.label.fixedLabel, i);
          this._updateIconTextureCoords(hS.label.indoorLabel, i)
        }
      } else {
        var hR = this.tileCache.getAllData();
        for (var T in hR) {
          var e = hR[T].data;
          if (e.status === "ready" && e.label) {
            var i = e.tileInfo.style;
            this._updateIconTextureCoords(e.label.fixedLabel, i);
            this._updateIconTextureCoords(e.label.indoorLabel, i)
          }
        }
      }
      this.updateLabels();
      this.map.dispatchEvent(new bb("onrefresh"))
    },
    cacheDataCollideLabels: function (T) {
      var hS = this;
      var i = this.map._featureMgr;

      function hR() {
        hS.cacheLabelTimer = null;
        var hT;
        var hU = hS.map.getTilt();
        var hV = hS.map.getHeading() % 360;
        if (hS.tileLabels.length === 0 || (hS.tileLabels.length === 1 && hS.tileLabels[0].tileInfo.zoom === 0)) {
          hT = i.getLabelData();
          if (hT.length > 0) {
            hT = hS.labelProcessor.collisionTest(hT, -1)
          }
        } else {
          if (hU || hV) {
            if (this._collisionTimer) {
              if (!hU) {
                clearTimeout(this._collisionTimer)
              } else {
                if (Date.now() - hS.lastCollisionTestTime > 500) {
                  hS.lastCollisionTestTime = Date.now()
                } else {
                  clearTimeout(this._collisionTimer)
                }
              }
            }
            this._collisionTimer = setTimeout(function () {
              hT = hS.labelProcessor.collisionTest(hS.tileLabels);
              if (hT) {
                i.setLabelData(hT)
              }
              hS.updateLabels();
              hS.map.dispatchEvent(new bb("onrefresh"));
              hS._collisionTimer = null
            }, 60);
            return
          } else {
            hT = hS.labelProcessor.getCachedLabels(hS.tileLabels)
          }
        }
        if (hT) {
          i.setLabelData(hT)
        }
        hS.updateLabels();
        hS.map.dispatchEvent(new bb("onrefresh"))
      }
      if (!T) {
        clearTimeout(hS.cacheLabelTimer);
        hR()
      } else {
        if (hS.cacheLabelTimer) {
          return
        }
        hS.cacheLabelTimer = setTimeout(function e() {
          hR()
        }, T)
      }
    },
    dataBackCollideLabels: function () {
      var i = this;
      if ((i.tileLabels && i.tileLabels.length === 0)) {
        return
      }
      var e;
      i.labelProcessor.calcLabelsCollision(i.tileLabels);
      e = i.labelProcessor.getCachedLabels(i.tileLabels);
      if (e) {
        i.map._featureMgr.setLabelData(e)
      }
      i.updateLabels();
      i.map.dispatchEvent(new bb("onrefresh"));
      if (f5()) {
        this.labelProcessor._refreshSpotData()
      }
    },
    updateLabels: function (hS) {
      var hT = this.map;
      var i = hT._featureMgr;
      var T = i.getLabelData();
      if (T.length > 0) {
        var hR = hT.getZoom();
        if (T.labelZoom - hR < 3) {
          this.labelProcessor.updateLabels(T);
          var e = this.labelProcessor.fixDataFormat(T);
          i.setOverlayData(e[0], 2);
          i.setOverlayData(e[1], 3);
          i.setOverlayData(e[2], 4)
        } else {
          i.clearLabelOverlayData()
        }
        hT.temp.isPermitSpotOver = false;
        this.labelProcessor.curSpotAdded = false
      }
    },
    loadRasterLayerData: function (hR, hV) {
      if (hV) {
        for (var hT = 0, hS = hR.length; hT < hS; hT++) {
          var T = hR[hT];
          var hW = this.getTileKey(T);
          var e = this.tileCache.getData(hW);
          if (e && e.status === "ready") {
            this.map._featureMgr.setData(e, this.drawIndex, 2)
          }
        }
        return
      }
      for (var hT = 0, hS = hR.length; hT < hS; hT++) {
        var T = hR[hT];
        var hW = this.getTileKey(T);
        var e = this.tileCache.getData(hW);
        if (!e) {
          this.tileCache.setData(hW, {});
          var hU = this;
          this.loadRasterTileData(T, function (i, hX) {
            hU.rasterTileDataCbk(i, hX)
          })
        }
      }
    },
    loadRasterTileData: function (i, e) {
      var hS = i.col;
      var hV = i.row;
      var hT = i.zoom;
      var hR = this.getTilesUrl(new ej(hS, hV), hT);
      if (!hR) {
        return
      }
      var hU = this.getTileKey(i);
      var T = this.loadTileImage(hR, hU, e);
      T.tileInfo = i
    },
    loadTileImage: function (hR, T, e) {
      var i = new Image();
      i.crossOrigin = "anonymous";
      i.onload = function () {
        e && e(this, T)
      };
      i.onerror = function () {
        e && e(null, T)
      };
      i.src = hR;
      return i
    },
    rasterTileDataCbk: function (hT, hR) {
      if (!hT) {
        this.tileCache.removeData(hR);
        return
      }
      var i = hT.tileInfo;
      var T = i.col;
      var hZ = i.row;
      var hY = i.zoom;
      var e = this.tileCache.getData(hR);
      if (!e) {
        return
      }
      var hS = d4.calcLoopParam(T, hY);
      var hW = hS.geoOffsetX;
      hT.tileInfo.loopOffsetX = hW;
      e.textureSource = hT;
      e.dataType = eH;
      e.tileInfo = i;
      e.renderData = {
        vertexAll: [0, 0, 0, 0, 0, 256, 0, 0, 1, 0, 256, 256, 0, 1, 1, 0, 0, 0, 0, 0, 256, 256, 0, 1, 1, 0, 256, 0, 0, 1]
      };
      e.status = "ready";
      this.tileCache.setData(hR, e);
      var hU = "id_" + T + "_" + hZ + "_" + hY;
      var hV = false;
      if (this.curViewTilesInfo[hU]) {
        e.dataType = eH;
        e.png8 = this.png8 || false;
        this.map._featureMgr.setData(e, this.drawIndex, 2);
        hV = true
      }
      if (hV) {
        var hX = new bb("onrefresh");
        hX.source = "webgllayer";
        this.map.dispatchEvent(hX)
      }
    },
    _checkTilesLoaded: function () {
      this.numLoading--;
      if (this.map.firstTileLoad === false) {
        this.map.dispatchEvent(new bb("onfirsttilesloaded"));
        this.map.firstTileLoad = true
      }
      var e = this;
      if (this.numLoading === 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null
        }
        this._checkLoadedTimer = setTimeout(function () {
          if (e.numLoading === 0) {
            e.map.dispatchEvent(new bb("ontilesloaded"))
          }
          e._checkLoadedTimer = null
        }, 60)
      }
    },
    isClickableLabel: function (e) {
      if (e.isDel) {
        return false
      }
      if (e.zoom > 9 && !e.guid) {
        return false
      }
      if (e.zoom <= 9 && !e.name && !e.guid) {
        return false
      }
      return true
    }
  };
  var b9 = 5;
  var dX = 4;
  var hq = 3;
  var ff = 2;
  var hK = 1;
  var d0 = 0;

  function v(e) {
    this._ratio = a6();
    this._iconCache = {};
    this._map = e;
    this._drawingCanvasPool = [];
    this._drawingCanvasHeight = 4096
  }
  C.extend(v.prototype, {
    _loadIcons: function (i, hV) {
      var hT = 0;
      var hS = this;
      var T = this._map.config.style;
      for (var hU in i) {
        hT++;
        var e = new Image();
        e.id = hU;
        e.crossOrigin = "anonymous";
        e.onload = function () {
          hS._iconCache[this.id].loaded = true;
          hT--;
          if (hT === 0) {
            hV()
          }
          this.onload = null
        };
        e.onerror = function () {
          hS._iconCache[this.id] = null;
          hT--;
          if (hT === 0) {
            hV()
          }
          this.onerror = null
        };
        var hR = e3.getIconSetPath(T) + hU + ".png";
        e.src = hR;
        this._iconCache[hU] = {
          loaded: false,
          image: e
        }
      }
    },
    _getEmptyDrawingCanvas: function () {
      for (var T = 0; T < this._drawingCanvasPool.length; T++) {
        if (this._drawingCanvasPool[T]._free === true) {
          this._drawingCanvasPool[T]._free = false;
          return this._drawingCanvasPool[T]
        }
      }
      var e = this._createNewDrawingCanvas();
      this._drawingCanvasPool.push(e);
      e._free = false;
      return e
    },
    _createNewDrawingCanvas: function () {
      var e = S("canvas");
      e.width = 512;
      e.height = this._drawingCanvasHeight;
      e._free = true;
      e._id = bo.getGUID();
      var i = e.getContext("2d");
      i.textBaseline = "bottom";
      i.lineJoin = "round";
      return e
    },
    drawLabelsOnCanvas: function (h9, hR) {
      var hZ = h9.label.fixedLabel.slice(0);
      var h5 = h9.label.lineLabel.slice(0);
      var T = h9.label.indoorLabel.slice(0);
      if (hZ.length === 0 && h5.length === 0 && T.length === 0) {
        hR();
        return
      }
      var hU = function (ie, i) {
        return ie.styleId - i.styleId
      };
      hZ.sort(hU);
      h5.sort(hU);
      T.sort(hU);
      var h8 = {};
      var e = this._getEmptyDrawingCanvas();
      var h4 = e.getContext("2d");
      h4.clearRect(0, 0, e.width, e.height);
      var ic = 0;
      var h0 = null;
      var hT = 0;
      if (hZ.length > 0) {
        while (hT < hZ.length && !hZ[hT].styleText[0]) {
          hT++
        }
        if (hZ[hT] && hZ[hT].styleText[0]) {
          h0 = hZ[hT].styleText[0].fontSize + hZ[hT].styleText[0].haloSize * 2
        }
      }
      if (h0 === null && T.length > 0) {
        hT = 0;
        while (hT < T.length && !T[hT].styleText[0]) {
          hT++
        }
        if (T[hT] && T[hT].styleText[0]) {
          h0 = T[hT].styleText[0].fontSize + T[hT].styleText[0].haloSize * 2
        }
      }
      if (h0 === null && h5.length > 0) {
        hT = 0;
        while (hT < h5.length && !h5[hT].styleText[0]) {
          hT++
        }
        if (h5[hT] && h5[hT].styleText[0]) {
          h0 = h5[hT].styleText[0].fontSize + h5[hT].styleText[0].haloSize * 2
        }
      }
      if (h0 === null || isNaN(h0)) {
        hR();
        return
      }
      var hW = 0;
      var hV = h0;
      var h2 = {};
      var id = 0;
      var h3 = [];
      for (var h7 = 0; h7 < hZ.length; h7++) {
        var hY = hZ[h7];
        var h1 = hY.name;
        var h6 = hY.styleText;
        if (!h1 || h6.length === 0) {
          continue
        }
        var hS = hY.icon;
        if (hY.textOnIcon && (!this._iconCache[hS] || this._iconCache[hS].loaded === false)) {
          h3.push(hY);
          id++;
          if (!h2[hS]) {
            h2[hS] = true
          }
          continue
        }
        var ia = this._drawEachText(h4, hY, ic, hW, hV, h0, h8);
        if (!ia) {
          continue
        }
        hW = ia.curX;
        hV = ia.curY;
        h0 = ia.curLineHeight;
        ic = ia.styleId
      }
      var ia = this._drawEachTypeOfLabels(h4, T, ic, hW, hV, h0, h8);
      ic = ia.curStyleId;
      hW = ia.curX;
      hV = ia.curY;
      h0 = ia.curLineHeight;
      var ia = this._drawEachTypeOfLabels(h4, h5, ic, hW, hV, h0, h8);
      ic = ia.curStyleId;
      hW = ia.curX;
      hV = ia.curY;
      h0 = ia.curLineHeight;
      if (id > 0) {
        var ib = this;
        this._loadIcons(h2, function () {
          ia = ib._drawEachTypeOfLabels(h4, h3, ic, hW, hV, h0, h8);
          ic = ia.curStyleId;
          hW = ia.curX;
          hV = ia.curY;
          h0 = ia.curLineHeight;
          var i = ib._generateEachLabelCanvas(e, hV, hZ, h5, T, h9);
          hR(i[0], i[1])
        });
        return
      }
      var hX = this._generateEachLabelCanvas(e, hV, hZ, h5, T, h9);
      hR(hX[0], hX[1])
    },
    drawCustomLabelsOnCanvas: function (hU, h0) {
      if (hU.length === 0) {
        h0();
        return
      }
      var T = 0;
      var e = (hU[0].style.fontSize + (hU[0].style.haloSize || 0) * 2) || 0;
      var hR = e;
      var hW = this._getEmptyDrawingCanvas();
      var h1 = hW.getContext("2d");
      h1.clearRect(0, 0, hW.width, hW.height);
      var hX = {};
      var hZ = -1;
      for (var hS = 0; hS < hU.length; hS++) {
        if (!hU[hS].name) {
          continue
        }
        var hY = this._drawEachText(h1, hU[hS], hZ, T, e, hR, hX);
        if (!hY) {
          continue
        }
        T = hY.curX;
        e = hY.curY;
        hR = hY.curLineHeight;
        hZ = hY.styleId
      }
      var hT = e;
      var hV = this._copyToNewCanvas(hW, hT);
      for (var hS = 0; hS < hU.length; hS++) {
        if (!hU[hS].name && hU[hS].style.iconSize) {
          this._addFixedLabelBounds(hU[hS]);
          continue
        }
        if (!hU[hS].textSize) {
          continue
        }
        this._updateFixedLabelCoords(hU[hS], hT);
        this._addFixedLabelBounds(hU[hS])
      }
      h0(hV)
    },
    _drawEachTypeOfLabels: function (h0, hU, hY, hR, T, hS, hW) {
      for (var hT = 0; hT < hU.length; hT++) {
        var hV = hU[hT];
        var hZ = hV.name;
        var e = hV.styleText;
        if (!hZ || e.length === 0) {
          continue
        }
        var hX = this._drawEachText(h0, hV, hY, hR, T, hS, hW);
        if (!hX) {
          continue
        }
        hR = hX.curX;
        T = hX.curY;
        hS = hX.curLineHeight;
        hY = hX.styleId;
        if (hX.curY > this._drawingCanvasHeight) {
          return {
            curX: hR,
            curY: T,
            curLineHeight: hS,
            curStyleId: hY
          }
        }
      }
      return {
        curX: hR,
        curY: T,
        curLineHeight: hS,
        curStyleId: hY
      }
    },
    _drawIndoorTextLabelOnCanvas: function (hS) {
      var e = this._getEmptyDrawingCanvas();
      var hZ = e.getContext("2d");
      hZ.clearRect(0, 0, e.width, e.height);
      var h7 = 0;
      var hY = null;
      var hX = 0;
      var hV;
      var h4 = {};
      var h3 = [];
      for (var hT in hS) {
        if (hT === "tileInfo") {
          continue
        }
        var hR = hS[hT];
        var h2 = hR.defaultFloor;
        var hW = hR.floors;
        for (var h1 = 0; h1 < hW.length; h1++) {
          if (h1 === h2) {
            continue
          }
          var h5 = hW[h1];
          if (!h5.pois) {
            continue
          }
          var hU = h5.pois;
          for (var h0 = 0; h0 < hU.length; h0++) {
            if (hY === null && hU[h0].styleText[0]) {
              hY = hU[h0].styleText[0].fontSize + hU[h0].styleText[0].haloSize * 2;
              hV = hY
            }
            h3.push(hU[h0])
          }
        }
      }
      if (hY === null) {
        return null
      }
      h3.sort(function (h8, i) {
        return i.rank - h8.rank || h8.styleId - i.styleId
      });
      var h6 = this._drawEachTypeOfLabels(hZ, h3, h7, hX, hV, hY, h4);
      h7 = h6.curStyleId;
      hX = h6.curX;
      hV = h6.curY;
      hY = h6.curLineHeight;
      var T = this._copyToNewCanvas(e, hV);
      return T
    },
    _updateIndoorLabelsCoords: function (hY, hZ) {
      for (var hX in hY) {
        if (hX === "tileInfo") {
          continue
        }
        var e = hY[hX];
        var hT = e.defaultFloor;
        var hU = e.floors;
        for (var hV = 0; hV < hU.length; hV++) {
          if (hV === hT) {
            continue
          }
          var T = hU[hV];
          if (!T.pois) {
            continue
          }
          var hS = T.pois;
          for (var hR = 0; hR < hS.length; hR++) {
            var hW = hS[hR];
            if (hW.name && (!hW.textSize || hW.textSize.length === 0)) {
              hS.splice(hR, 1);
              hR--;
              continue
            }
            this._updateFixedLabelCoords(hW, hZ);
            this._addFixedLabelBounds(hW)
          }
        }
      }
    },
    _generateEachLabelCanvas: function (hU, hT, hV, e, hX, T) {
      hT = Math.min(hT, this._drawingCanvasHeight);
      var hW = this._copyToNewCanvas(hU, hT);
      var hR = null;
      if (T.renderData.indoorData) {
        hR = this._drawIndoorTextLabelOnCanvas(T.renderData.indoorData);
        if (hR) {
          this._updateIndoorLabelsCoords(T.renderData.indoorData, hR.height)
        }
      }
      for (var hS = 0; hS < hV.length; hS++) {
        if (!hV[hS].textSize) {
          continue
        }
        this._updateFixedLabelCoords(hV[hS], hT);
        this._addFixedLabelBounds(hV[hS])
      }
      for (var hS = 0; hS < hX.length; hS++) {
        if (!hX[hS].textSize) {
          continue
        }
        this._updateFixedLabelCoords(hX[hS], hT);
        this._addFixedLabelBounds(hX[hS])
      }
      for (var hS = 0; hS < e.length; hS++) {
        this._updateLineLabelCoords(e[hS], hT)
      }
      return [hW, hR]
    },
    _copyToNewCanvas: function (T, i) {
      if (i === 0) {
        return null
      }
      var hR = S("canvas");
      hR.width = T.width;
      hR.height = i;
      var e = hR.getContext("2d");
      e.drawImage(T, 0, 0, 512, i, 0, 0, 512, i);
      hR._id = T._id;
      T._free = true;
      return hR
    },
    _drawEachText: function (h9, hV, T, ib, ia, ij, hS) {
      var ii = hV.name;
      var h0 = hV.styleText ? hV.styleText[0] : hV.style;
      if (!h0) {
        return null
      }
      var h3 = h0.fontSize;
      var io = h0.fontWeight;
      var iC = h0.haloSize || 0;
      if (!h4) {}
      if (h0.fontRgba) {
        var iI = h0.fontRgba[3] / 255;
        var hZ = [];
        hZ[3] = iI;
        for (var iH = 0; iH < 3; iH++) {
          hZ[iH] = h0.fontRgba[iH]
        }
      }
      if (h0.haloRgba) {
        var iI = h0.haloRgba[3] / 255;
        var h6 = [];
        h6[3] = iI;
        for (var iH = 0; iH < 3; iH++) {
          h6[iH] = h0.haloRgba[iH]
        }
      }
      var iw = hZ ? "rgba(" + hZ.join(",") + ")" : h0.color;
      var hU = h6 ? "rgba(" + h6.join(",") + ")" : h0.strokeColor;
      var iE = hV.styleId || 0;
      if (iC > 4) {
        iC = 4
      }
      var ik = [];
      var h8 = [];
      var ig = 0;
      if (hS && !hS[iE]) {
        hS[iE] = {}
      }
      var h2 = h3 + iC * 2;
      var il = h2;
      if (hV.containDescendings) {
        il += 4
      }
      if (iC === 0) {
        il += 2
      }
      if (hV.textOnIcon) {
        il = Math.max(il, hV.iconSize[1])
      }
      if (iE !== T || il > ij) {
        T = iE;
        if (io >= 10 && io % 10 === 0) {
          h9.font = io * 10 + " " + h3 + "px sans-serif"
        } else {
          h9.font = h3 + "px sans-serif"
        }
        if (il > ij) {
          var ih = il - ij;
          ij += ih;
          ia += ih
        }
        if (iC > 0) {
          h9.lineWidth = iC * 2;
          h9.strokeStyle = hU
        }
        h9.fillStyle = iw
      }
      if (hV.type === "line") {
        var hX = ii.split("");
        for (var iF = 0; iF < hX.length; iF++) {
          var iy = hX[iF];
          var ic;
          var ip;
          if (hS[iE][iy]) {
            var h4 = hS[iE][iy];
            ic = h4.displaySize;
            ip = h4.curWordPosition
          } else {
            var hR = Math.ceil(h9.measureText(iy).width);
            if (ib + hR > 512) {
              ib = 0;
              ia += il;
              ij = il
            }
            if (ia > this._drawingCanvasHeight) {
              return {
                curX: ib,
                curY: ia,
                curLineHeight: ij,
                styleId: iE
              }
            }
            var iz = ib;
            if (iC > 0) {
              hR += iC;
              iz -= Math.round(iC / 2);
              h9.strokeText(iy, ib, ia)
            }
            h9.fillText(iy, ib, ia);
            var iv = [hR, il];
            ic = [Math.round(iv[0] / 2), Math.round(iv[1] / 2)];
            ip = [iz, ia - il];
            hS[iE][iy] = {
              displaySize: ic,
              curWordPosition: ip,
              totalHeight: ig
            };
            ib += hR + 2
          }
          ik.push(ic);
          h8.push(ip)
        }
        ig = Math.round(ik[0][1])
      } else {
        if (hS[iE][ii]) {
          var h4 = hS[iE][ii];
          ik = h4.textSize;
          h8 = h4.labelImagePosition;
          ig = h4.totalHeight
        } else {
          var h5 = ii.split("\\");
          if (h5.length > 1 && hV.textOnIcon) {
            var iG = 0;
            var iD = 0;
            var iJ = [];
            var id = 8;
            for (var iF = 0; iF < h5.length; iF++) {
              var ii = h5[iF];
              var h1 = Math.ceil(h9.measureText(ii).width);
              if (h1 > iG) {
                iG = h1
              }
              iJ.push(Math.round(h1 / 2));
              iD += il
            }
            var hY = iG + 2 * id;
            var iB = iD + 2 * id;
            if (ib + hY > 512) {
              ib = 0;
              ia += ij
            }
            ia += iD - il + 2 * id;
            var iu = ib;
            var ie = ia - iB;
            var e = Math.round(hY / 2);
            var h7 = this._iconCache[hV.icon].image;
            this.drawStretchedIcon(h9, h7, [iu, ie], id, iG, iD);
            for (var iF = 0; iF < h5.length; iF++) {
              var ii = h5[iF];
              var iA = iu + (e - iJ[iF]);
              var ix = ie + 4 + (iF + 1) * il;
              h9.fillText(ii, iA, ix)
            }
            ik.push([Math.round(hY / 2), Math.round(iB / 2)]);
            h8.push([iu, ie]);
            ib += hY;
            ij = iB;
            ig = Math.round(iB / 2)
          } else {
            for (var iF = 0; iF < h5.length; iF++) {
              var ii = h5[iF];
              var h1 = Math.ceil(h9.measureText(ii).width);
              var hY = h1;
              var hT = 0;
              if (hV.textOnIcon) {
                hT = 10;
                hY += hT * 2;
                if (hV.styleId === 519) {
                  hY = hV.iconSize[0];
                  hT = Math.round((hY - h1) / 2)
                }
              }
              if (ib + hY > 512) {
                ib = 0;
                ia += il;
                ij = il
              }
              if (ia > this._drawingCanvasHeight) {
                return {
                  curX: ib,
                  curY: ia,
                  curLineHeight: ij,
                  styleId: iE
                }
              }
              var iu = ib;
              var ie = ia - il;
              var it = ib;
              var ir = ia;
              if (hV.containDescendings) {
                ir -= 4
              }
              if (hV.textOnIcon) {
                var im = false;
                var h7 = this._iconCache[hV.icon].image;
                var iq = hV.iconSize.concat([]);
                if (h2 > iq[1]) {
                  iq[1] = h2;
                  im = true
                }
                if (h1 > iq[0]) {
                  iq[0] = h1;
                  im = true
                }
                if (hV.styleId === 519) {
                  h9.drawImage(h7, 0, 0, iq[0], iq[1], iu, ie, iq[0], iq[1])
                } else {
                  if (im) {
                    this.drawStretchedIcon(h9, h7, [iu, ie], hT, h1, iq[1])
                  } else {
                    this.draw3StretchedIcon(h9, h7, [iu, ie], hT, h1, iq[1])
                  }
                }
                it += hT;
                if (hV.iconSize[1] > h2) {
                  ir -= (hV.iconSize[1] - h2) / 2 - 1
                }
                hY += 1
              }
              if (iC > 0) {
                hY += iC;
                iu -= Math.round(iC / 2);
                ie += Math.round(iC / 2);
                if (iE === 71028) {
                  il -= 2
                }
                if (iE === 32) {
                  il -= 2
                }
                h9.strokeText(ii, it, ir)
              }
              h9.fillText(ii, it, ir);
              var hW = [hY, il];
              var ic = [Math.round(hW[0] / 2), Math.round(hW[1] / 2)];
              ik.push(ic);
              h8.push([iu, ie]);
              ig += Math.round(ic[1]);
              ib += hY
            }
          }
          hS[iE][ii] = {
            textSize: ik,
            labelImagePosition: h8,
            totalHeight: ig
          }
        }
      }
      hV.textSize = ik;
      hV.labelImagePosition = h8;
      hV.totalHeight = ig;
      return {
        curX: ib,
        curY: ia,
        curLineHeight: ij,
        styleId: iE
      }
    },
    drawStretchedIcon: function (e, T, hR, hU, hV, i) {
      var hT = hR[0];
      var hS = hR[1];
      e.drawImage(T, 0, 0, hU, hU, hT, hS, hU, hU);
      e.drawImage(T, hU, 0, 1, hU, hT + hU, hS, hV, hU);
      e.drawImage(T, T.width - hU, 0, hU, hU, hT + hV + hU, hS, hU, hU);
      e.drawImage(T, 0, hU, hU, 1, hT, hS + hU, hU, i);
      e.drawImage(T, hU, hU, 1, 1, hT + hU, hS + hU, hV, i);
      e.drawImage(T, T.width - hU, hU, hU, 1, hT + hV + hU, hS + hU, hU, i);
      e.drawImage(T, 0, T.height - hU, hU, hU, hT, hS + i + hU, hU, hU);
      e.drawImage(T, hU, T.height - hU, 1, hU, hT + hU, hS + i + hU, hV, hU);
      e.drawImage(T, T.width - hU, T.height - hU, hU, hU, hT + hV + hU, hS + i + hU, hU, hU)
    },
    draw3StretchedIcon: function (e, i, T, hT, hV, hU) {
      var hS = T[0];
      var hR = T[1];
      e.drawImage(i, 0, 0, hT, i.height, hS, hR, hT, i.height);
      e.drawImage(i, hT, 0, 1, i.height, hS + hT, hR, hV, i.height);
      e.drawImage(i, i.width - hT, 0, hT, i.height, hS + hT + hV, hR, hT, i.height)
    },
    _updateFixedLabelCoords: function (hS, h7) {
      if (h7 === 0) {
        return
      }
      var h2 = [];
      var ie = [];
      var ig = 0;
      var h5 = hS.totalHeight;
      var ip = hS.textSize.length;
      var hT = hS.direction;
      if (typeof hT !== "number") {
        hT = 0
      }
      for (var ih = 0; ih < ip; ih++) {
        var h8 = hS.labelImagePosition[ih];
        var h6 = hS.textSize[ih];
        var h4 = h8[0];
        var hR = h8[1];
        var hU = h6[0];
        var hZ = h6[1];
        var h1 = 0;
        var id = 0;
        if (typeof hS.textMargin === "number") {
          id = hS.textMargin
        }
        var h0;
        var e;
        var hW = 0;
        var h3 = 0;
        if (!hS.iconPos) {
          if (!hS.custom) {
            hT = dX
          }
        } else {
          hW = hS.iconPos.width;
          h3 = hS.iconPos.height
        }
        switch (hT) {
          case hq:
            var T = h5 / 2 - hZ + h1 * (ip - 1) / 2;
            h0 = Math.round(-hW / 2 - hU - id);
            e = Math.round(T - ig - h1 * ih);
            break;
          case hK:
            var T = h5 / 2 - hZ + h1 * (ip - 1) / 2;
            h0 = Math.round(hW / 2 + id);
            e = Math.round(T - ig - h1 * ih);
            break;
          case ff:
            var T = h3 / 2 + h5 - hZ + h1 * ip;
            h0 = Math.round(-hU / 2);
            e = Math.round(T - ig - h1 * ih);
            break;
          case d0:
            var T = -h3 / 2 - h1 - hZ;
            h0 = Math.round(-hU / 2);
            e = Math.round(T - ig - h1 * ih);
            break;
          case dX:
            var T = -h5 / 2 - h1 * (ip - 1) / 2;
            h0 = Math.round(-hU / 2);
            e = Math.round(T - ig - h1 * ih);
            break
        }
        ig += hZ;
        var hY = h0 + hU;
        var iq = e;
        var hX = hY;
        var io = iq + hZ;
        var hV = h0;
        var im = io;
        h2.push(h0, e, hY, iq, hX, io, h0, e, hX, io, hV, im);
        var il = h4 / 512;
        var ic = (h7 - hR - hZ * 2) / h7;
        var ik = (h4 + hU * 2) / 512;
        var ib = ic;
        var ij = ik;
        var ia = (h7 - hR) / h7;
        var ii = il;
        var h9 = ia;
        ie.push(il, ic, ik, ib, ij, ia, il, ic, ij, ia, ii, h9)
      }
      if (!hS.textPos) {
        hS.textPos = {}
      }
      hS.textPos.vertex = h2;
      hS.textPos.texcoord = ie
    },
    _addFixedLabelBounds: function (hX) {
      var hT = 1000;
      var hR = 1000;
      var T = -1000;
      var e = -1000;
      if (hX.iconPos) {
        var hV = hX.iconPos["vertex"];
        for (var hW = 0, hS = hV.length; hW < hS; hW += 2) {
          var h1 = hV[hW];
          var hZ = hV[hW + 1];
          if (h1 < hT) {
            hT = h1
          }
          if (h1 > T) {
            T = h1
          }
          if (hZ < hR) {
            hR = hZ
          }
          if (hZ > e) {
            e = hZ
          }
        }
      }
      if (hX.custom && hX.style.iconSize && !hX.name) {
        var hY = hX.style.iconSize;
        var h0 = hX.direction;
        switch (h0) {
          case dX:
            hT = -Math.round(hY[0] / 2);
            hR = -Math.round(hY[1] / 2);
            T = Math.round(hY[0] / 2);
            e = Math.round(hY[1] / 2);
            break;
          case ff:
            hT = -Math.round(hY[0] / 2);
            hR = 0;
            T = Math.round(hY[0] / 2);
            e = hY[1];
            break
        }
      }
      if (hX.textPos) {
        var hU = hX.textPos["vertex"];
        for (var hW = 0, hS = hU.length; hW < hS; hW += 2) {
          var h1 = hU[hW];
          var hZ = hU[hW + 1];
          if (h1 < hT) {
            hT = h1
          }
          if (h1 > T) {
            T = h1
          }
          if (hZ < hR) {
            hR = hZ
          }
          if (hZ > e) {
            e = hZ
          }
        }
      }
      hX.bds = [hT, hR, T, e]
    },
    _updateLineLabelCoords: function (h8, hY) {
      if (hY === 0) {
        return
      }
      var hR = h8.wordsInfo;
      var h5 = h8.wordCount;
      if (!h8.labelImagePosition) {
        return
      }
      var h0 = h8.labelImagePosition.slice(0);
      if (h8.reverse) {
        h0.reverse()
      }
      var ii = 1000;
      var ie = 1000;
      var ig = -1000;
      var id = -1000;
      for (var h9 = 0; h9 < h5; h9++) {
        var ij = h0[h9];
        var ih = ij[0];
        var h6 = ij[1];
        var h4 = h8.textSize[h9];
        var hX = h4[0];
        var e = h4[1];
        var hW = ih / 512;
        var h3 = (hY - h6 - e * 2) / hY;
        var hU = (ih + hX * 2) / 512;
        var h2 = h3;
        var hS = hU;
        var h1 = (hY - h6) / hY;
        var T = hW;
        var hZ = h1;
        hR[h9].size = [hX, e];
        hR[h9].texcoord = [hW, h3, hU, h2, hS, h1, hW, h3, hS, h1, T, hZ];
        var ic = hR[h9].offset[0];
        var ib = hR[h9].offset[1];
        var ia = ic - hX / 2;
        var hV = ib + e / 2;
        var hT = ib - e / 2;
        var h7 = ic + hX / 2;
        if (ia < ii) {
          ii = ia
        }
        if (h7 > ig) {
          ig = h7
        }
        if (hT < ie) {
          ie = hT
        }
        if (hV > id) {
          id = hV
        }
      }
      h8.bds = [ii, ie, ig, id]
    }
  });
  var cT = {
    0: "00000000",
    16: "00010000",
    32: "00100000",
    48: "00110000",
    64: "01000000",
    96: "01100000"
  };

  function cq(T, hR, hS) {
    var e = T.bds;
    if (!e) {
      return false
    }
    var i = T.tracer;
    var hV;
    if (i) {
      if (!cT[i]) {
        hV = i.toString(2);
        if (hV.length < 8) {
          hV = new Array(8 - hV.length + 1).join("0") + hV
        }
        cT[i] = hV
      }
      hV = cT[i];
      var hU = di.mapZoomStartZoomMapping[hR];
      return hV[hR - hU] === "1"
    }
    var hT = T.displayRange;
    if (hS >= hT[0] && hS <= hT[1]) {
      return true
    }
    return false
  }

  function dj(i, e) {
    this.map = i.map;
    this.layer = i;
    e = e || [];
    this.allLabels = [];
    this._spotData = [];
    this._strategyInfo = null;
    this.RANK1 = 1000000;
    this.RANK2 = 2000000;
    this.RANK3 = 3000000;
    this.RANK4 = 4000000;
    this.RANK5 = 5000000;
    this._useRound = false;
    this._mapIsMoving = false;
    this._onMapIdleCallback = e.onMapIdleCallback;
    this.map.temp.isPermitSpotOver = true;
    this.currentSelectedLabel = null;
    this.map._labelProcessor = this;
    this.iconCache = {};
    this.fixedLabelData = [];
    this.lineLabelData = [];
    this.highlightLabelData = [];
    this._iconLoadTimer = null;
    this._labelTextCanvas = null;
    if (this.map.config.textRenderType === "canvas") {
      this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas()
    }
    this.bind()
  }
  C.extend(dj.prototype, {
    bind: function () {
      var T = this.map;
      var i = this;
      T.addEventListener("mapstatusbusy_inner", function (hR) {
        i._useRound = false;
        i._mapIsMoving = true
      });
      T.addEventListener("mapstatusidle_inner", function (hR) {
        if (!f5()) {
          i._useRound = true
        }
        i._mapIsMoving = false
      });
      T.addEventListener("onspotmouseover", function (hT) {
        if (!this.temp.isPermitSpotOver) {
          return
        }
        if (hT.spots.length > 0) {
          var hS = hT.spots[0].userdata.uid;
          var hU = hT.spots[0].userdata.tilePosStr;
          var hR = i.getLabelByUid(hS, hU);
          hR && hR.formatedData && i._toHighlightColor(hR.formatedData)
        }
      });
      T.addEventListener("onspotmouseout", function (hT) {
        if (!this.temp.isPermitSpotOver) {
          return
        }
        if (hT.spots.length > 0) {
          var hS = hT.spots[0].userdata.uid;
          var hU = hT.spots[0].userdata.tilePosStr;
          var hR = i.getLabelByUid(hS, hU);
          hR && hR.formatedData && i._toDefaultColor(hR.formatedData)
        }
      });
      T.addEventListener("spotclick", function (hT) {
        if (hT.spots && hT.spots.length > 0) {
          if (hT.spots[0].userdata.zoom < 10) {
            return
          }
          var hS = hT.spots[0].userdata.uid;
          var hU = hT.spots[0].userdata.tilePosStr;
          if (i.currentSelectedLabel && (i.currentSelectedLabel.uid !== hS || i.currentSelectedLabel.tilePosStr !== hU)) {
            i._recoverNormalState()
          }
          var hR = i.getLabelByUid(hS, hU);
          hR && i._changeBaseMapState(hR)
        } else {
          i._recoverNormalState()
        }
      });
      T.on("spot_status_reset", function () {
        i._recoverNormalState()
      });
      T.on("spot_highlight", function (hS) {
        var hR = i.getLabelByUid(hS.uid, hS.tilePosStr);
        hR && hR.formatedData && i._toHighlightColor(hR.formatedData)
      });
      T.addEventListener("mousemove", function (hR) {
        if (i.curSpotAdded) {
          return
        }
        if (this.currentOperation !== dU.idle || i._mapIsMoving === true) {
          return
        }
        i._refreshSpotData();
        this.temp.isPermitSpotOver = true;
        i.curSpotAdded = true
      });
      if (f5()) {
        function e() {
          i._refreshSpotData()
        }
        T.addEventListener("mapstatusidle_inner", e)
      }
      T.on("style_loaded", function () {
        if (i.map.config.textRenderType === "canvas" && !i._labelTextCanvas) {
          i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas()
        }
      })
    },
    getLabelByUid: function (hU, hV) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hT = 0; hT < e.length; hT++) {
        var T = e[hT].fixedLabel;
        for (var hS = 0; hS < T.length; hS++) {
          if (e[hT].fixedLabel[hS].guid === hU && e[hT].fixedLabel[hS].tilePosStr === hV) {
            return e[hT].fixedLabel[hS]
          }
        }
        var hR = e[hT].indoorLabel;
        for (var hS = 0; hS < hR.length; hS++) {
          if (e[hT].indoorLabel[hS].guid === hU && e[hT].indoorLabel[hS].tilePosStr === hV) {
            return e[hT].indoorLabel[hS]
          }
        }
      }
      return null
    },
    getTileByLabelUid: function (hU) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hT = 0; hT < e.length; hT++) {
        var T = e[hT].fixedLabel;
        for (var hS = 0; hS < T.length; hS++) {
          if (e[hT].fixedLabel[hS].guid === hU) {
            return e[hT]
          }
        }
        var hR = e[hT].indoorLabel;
        for (var hS = 0; hS < hR.length; hS++) {
          if (e[hT].indoorLabel[hS].guid === hU) {
            return e[hT]
          }
        }
      }
      return null
    },
    _toHighlightColor: function (T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      var hS = false;
      for (var hR = 0; hR < e.length; hR++) {
        if (e[hR] === T || (e[hR].guid === T.guid && e[hR].tilePosStr === T.tilePosStr && e[hR].zoom === T.zoom)) {
          hS = true;
          break
        }
      }
      if (hS) {
        return
      }
      e.push(T);
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new bb("onrefresh"))
    },
    _toDefaultColor: function (T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      for (var hR = 0; hR < e.length; hR++) {
        if (T === e[hR] || (T.guid === e[hR].guid && T.tilePosStr === e[hR].tilePosStr && T.zoom === e[hR].zoom)) {
          e.splice(hR, 1);
          break
        }
      }
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new bb("onrefresh"))
    },
    _changeBaseMapState: function (i) {
      var hS = i.guid;
      var hW = i.formatedData.guidExt;
      var hY = {
        guid: hS,
        tilePosStr: i.tilePosStr,
        guidExt: hW
      };
      this._strategyInfo = hY;
      this.currentSelectedLabel = i;
      var hR = this.map._featureMgr;
      var e = hR.getLabelData();
      e = this.collisionTest(e);
      this.updateLabels(e);
      var hZ = this.fixDataFormat(e);
      hR.setOverlayData(hZ[0], 2);
      hR.setOverlayData(hZ[1], 3);
      hR.setOverlayData(hZ[2], 4);
      var T = this.getTileByLabelUid(hS);
      this.currentSelectedLabel.tileInfo = T.tileInfo;
      var hX = T.tileInfo.zoom;
      var hV = this.layer.tileCache.getAllData();
      for (var hU in hV) {
        var hT = hV[hU].data;
        if (!hT.label) {
          continue
        }
        this.clearCollisionCache(hT.label)
      }
      this.map.dispatchEvent(new bb("onrefresh"))
    },
    _recoverNormalState: function () {
      this._strategyInfo = null;
      var hV = false;
      var hT = this.map._featureMgr.getLabelData();
      if (this.currentSelectedLabel) {
        var T = this.currentSelectedLabel.guid;
        this.clearCollisionCache(this.getTileByLabelUid(T));
        var hS = this.layer.tileCache.getAllData();
        for (var hR in hS) {
          var hU = hS[hR].data;
          if (!hU.label) {
            continue
          }
          this.clearCollisionCache(hU.label)
        }
        this.currentSelectedLabel.tempRank = null;
        this.currentSelectedLabel = null;
        hV = true
      }
      hT = this.collisionTest(hT);
      this.updateLabels(hT);
      var e = this.fixDataFormat(hT);
      var i = this.map._featureMgr;
      i.setOverlayData(e[0], 2);
      i.setOverlayData(e[1], 3);
      i.setOverlayData([], 4);
      this.map.dispatchEvent(new bb("onrefresh"));
      if (hV) {
        this.curSpotAdded = false;
        this._refreshSpotData()
      }
    },
    loadIconImages: function (hS, h3) {
      var hV = hS.label;
      var hT = hS.tileInfo.style;
      var T = hV.fixedLabel;
      var h0 = hV.indoorLabel;
      var h4 = T.length + h0.length;
      var hX = this;
      var hR = 0;
      var h2 = 200;
      for (var hU = 0; hU < h4; hU++) {
        var hW;
        if (hU < T.length) {
          hW = T[hU]
        } else {
          hW = h0[hU - T.length]
        }
        if (!hW.iconPos) {
          continue
        }
        var hZ = hW.iconPos.iconType;
        var h1 = hT + "_" + hZ;
        hR++;
        if (this.iconCache[h1]) {
          if (this.iconCache[h1].loaded) {
            h3(hS)
          }
          continue
        }
        var hY = new Image();
        hY.id = h1;
        hY.crossOrigin = "anonymous";
        hY.onload = function () {
          hX.iconCache[this.id].loaded = true;
          hX._addToIconTexture(this);
          if (hX._iconLoadTimer === null) {
            hX._iconLoadTimer = setTimeout(function () {
              h3();
              hX._iconLoadTimer = null
            }, h2)
          }
          this.onload = null
        };
        hY.onerror = function () {
          if (!hX._iconLoadTimer) {
            hX._iconLoadTimer = setTimeout(function () {
              h3();
              hX._iconLoadTimer = null
            }, h2)
          }
          hX.iconCache[this.id] = null;
          this.onerror = null
        };
        var e = e3.getIconSetPath(this.map.config.style) + hZ + ".png";
        hY.src = e;
        this.iconCache[h1] = {
          loaded: false,
          image: hY
        }
      }
      return hR
    },
    _addToIconTexture: function (hT) {
      if (!this.map._webglMapScene) {
        return
      }
      var hV = this.map._webglMapScene._painter;
      var e = hV._iconTextureAtlas.addTexture(hT);
      hV._iconTextureAtlasOffset[hT.id] = e;
      var hY = 0 * hT.width / 1024 + e.width;
      var hS = 0 * hT.height / 1024 + e.height;
      var hX = hT.width / 1024 + e.width;
      var hR = hS;
      var hW = hX;
      var T = hT.height / 1024 + e.height;
      var hU = hY;
      var i = T;
      hV._iconTextureAtlasCoords[hT.id] = [hY, hS, hX, hR, hW, T, hY, hS, hW, T, hU, i]
    },
    loadImgByStr: function (hR, hS, hT) {
      if (!hR && !hS) {
        hT && hT(null, null);
        return
      }
      if (typeof hR === "object" && typeof hS === "object") {
        hT(hR, hS);
        return
      }
      var i = 0;
      var T = null;
      var e = null;
      if (hR) {
        i++;
        T = new Image();
        T.onload = function () {
          i--;
          if (i === 0) {
            hT && hT(this, e)
          }
          this.onload = null
        };
        T.src = hR
      }
      if (hS) {
        i++;
        e = new Image();
        e.onload = function () {
          i--;
          if (i === 0) {
            hT && hT(T, this)
          }
          this.onload = null
        };
        e.src = hS
      }
    },
    collisionTest: function (hY, iE, ih) {
      if (this.map.viewAnimationTime) {
        return []
      }
      if (!hY) {
        return []
      }
      var h8 = this.map;
      var ip = h8.getHeading();
      ip = this.calcLoopHeading(ip);
      var iz = h8.height;
      var iv = this.allLabels;
      iv.length = 0;
      hY.sort(function (iG, i) {
        var iI = iG.tileInfo;
        var iH = i.tileInfo;
        if (iI.col * iI.row < iH.col * iH.row) {
          return -1
        } else {
          return 1
        }
      });
      var hZ = hY.labelZoom;
      var h9 = h8.getTilt();
      var h1 = h8.getZoom();
      var iu;
      if (ih) {
        iu = ih
      } else {
        iu = this.getZoomStep()
      }
      for (var iC = 0, iA = hY.length; iC < iA; iC++) {
        var ic = hY[iC];
        var hW = ic.tileInfo;
        var hT = hW.zoom;
        var it = hW.loopOffsetX / Math.pow(2, 18 - hT);
        if (!ip && !h9) {
          if (ic.unnecessaryCollisionTest && ic.unnecessaryCollisionTest[ih]) {
            continue
          }
        }
        var ik = ic.fixedLabel || [];
        for (var iB = 0, ie = ik.length; iB < ie; iB++) {
          var hU = ik[iB];
          hU.zoom = hT;
          if (iE === -1 && hU.isDel) {
            continue
          }
          if (!cq(hU, hW.useZoom, h1)) {
            hU.isDel = true;
            continue
          }
          this.calcCollisionBounds(hU, iu, it, iz);
          iv.push(hU)
        }
        var ij = ic.indoorLabel || [];
        for (var iB = 0, ie = ij.length; iB < ie; iB++) {
          var hU = ij[iB];
          hU.zoom = hT;
          if (iE === -1 && hU.isDel) {
            continue
          }
          if (!cq(hU, hW.useZoom)) {
            hU.isDel = true;
            continue
          }
          this.calcCollisionBounds(hU, iu, it, iz);
          iv.push(hU)
        }
        var hV = ic.lineLabel || [];
        for (var iB = 0, ie = hV.length; iB < ie; iB++) {
          var hU = hV[iB];
          if (iE === -1 && hU.isDel) {
            continue
          }
          if (!cq(hU, hW.useZoom)) {
            hU.isDel = true;
            continue
          }
          var iF = hU.pt;
          var ig = h8.pointToPixelIn(iF, {
            zoom: iu,
            useRound: this._useRound
          });
          var id = ig.x + it;
          var ib = iz - ig.y;
          var ii = hU.bds;
          var iy = ii[0];
          var iw = ii[1];
          var h6 = ii[2];
          var h5 = ii[3];
          var iq = iy;
          var io = iw;
          var h4 = h6;
          var h3 = h5;
          if ((ip >= 0 && ip < 45) || (ip >= 315 && ip < 360)) {
            iq = iy;
            io = iw;
            h4 = h6;
            h3 = h5
          } else {
            if (ip >= 45 && ip < 135) {
              iq = iw;
              io = -h6;
              h4 = h5;
              h3 = -iy
            } else {
              if (ip >= 135 && ip < 225) {
                iq = -h6;
                io = -h5;
                h4 = -iy;
                h3 = -iw
              } else {
                if (ip >= 225 && ip < 315) {
                  iq = -h5;
                  io = iy;
                  h4 = -iw;
                  h3 = h6
                }
              }
            }
          }
          hU._tempBds = [id + iq, ib + io, id + h4, ib + h3];
          var hX = h8.pixelToPointIn(new ej(hU._tempBds[0], ig.y + io), {
            zoom: iu
          });
          var hR = h8.pixelToPointIn(new ej(hU._tempBds[2], ig.y + h3), {
            zoom: iu
          });
          hU._mcBds = [hX, hR];
          iv.push(hU)
        }
      }
      var ir = this._strategyInfo;
      if (ir) {
        var h2 = ir.guid;
        var ia = ir.guidExt;
        var T = false;
        for (var iC = 0, iA = iv.length; iC < iA; iC++) {
          var ix = iv[iC];
          delete ix.tempRank;
          if (!this.layer.isClickableLabel(ix) || (ia === 1 && !ix.guidExt)) {
            continue
          }
          if (h2 === ix.guid && ir.tilePosStr === ix.tilePosStr) {
            ix.tempRank = this.RANK5;
            T = true
          }
        }
        if (!T && this.currentSelectedLabel) {
          this.currentSelectedLabel.tempRank = this.RANK5;
          var hW = this.currentSelectedLabel.tileInfo;
          var hT = hW.zoom;
          var it = hW.loopOffsetX / Math.pow(2, 18 - hT);
          this.calcCollisionBounds(this.currentSelectedLabel, iu, it, iz);
          iv.push(this.currentSelectedLabel)
        }
      } else {
        for (var iC = 0, iA = iv.length; iC < iA; iC++) {
          var ix = iv[iC];
          if (ix.type === "line" || !ix.iconPos) {
            continue
          }
          delete ix.tempRank
        }
      }
      iv.sort(function (iH, iG) {
        var iI = iH.tempRank ? iH.tempRank : iH.rank;
        var i = iG.tempRank ? iG.tempRank : iG.rank;
        return i - iI || iH.startZoom - iG.startZoom || iG.pt.lng - iH.pt.lng || iG.pt.lat - iH.pt.lat
      });
      var hS = 0;
      if (h9 > 0) {
        hS = 6
      }
      var h1 = h8.getZoom();
      if (h1 >= 8 && h1 < 9) {
        h1 < 8.5 ? (hS = 6) : (hS = 3)
      }
      if (h8._displayOptions.labelMargin > 0) {
        hS = h8._displayOptions.labelMargin
      }
      var e = 2;
      if (h1 < 6 && h1 >= 5) {
        e = -1
      }
      for (var iC = 0, iA = iv.length; iC < iA; iC++) {
        var im = iv[iC];
        var h0 = im._tempBds;
        im.isDel = false;
        im._intersectIdx = [];
        for (iB = iC + 1; iB < iA; iB++) {
          var h7 = iv[iB];
          var iD = h7._tempBds;
          if (!(h0[2] + hS + e < iD[0] - hS || h0[0] - hS > iD[2] + hS + e || h0[3] + hS + e < iD[1] - hS || h0[1] - hS > iD[3] + hS + e)) {
            im._intersectIdx.push(iB)
          }
        }
      }
      for (var iC = 0, iA = iv.length; iC < iA; iC++) {
        var ix = iv[iC];
        if (ix.isDel === false) {
          var il = ix._intersectIdx;
          for (var iB = 0, ie = il.length; iB < ie; iB++) {
            iv[il[iB]].isDel = true
          }
        }
      }
      return hY
    },
    calcCollisionBounds: function (hX, hV, i, hW) {
      var hT = hX.pt;
      var hR = this.map;
      var hS = hR.pointToPixelIn(hT, {
        zoom: hV,
        useRound: this._useRound
      });
      var T = hS.x + i;
      var hZ = hW - hS.y;
      var e = hX.bds;
      hX._tempBds = [T + e[0], hZ + e[1], T + e[2], hZ + e[3]];
      var hU = hR.pixelToPointIn(new ej(hX._tempBds[0], hS.y + e[1]), {
        zoom: hV
      });
      var hY = hR.pixelToPointIn(new ej(hX._tempBds[2], hS.y + e[3]), {
        zoom: hV
      });
      hX._mcBds = [hU, hY]
    },
    getZoomStep: function () {
      var T = this.map.getZoom();
      var e = Math.floor(T);
      var i = T - e >= 0.5 ? e + 0.5 : e;
      return i
    },
    clearCollisionCache: function (e) {
      if (!e) {
        return
      }
      e.cacheState = null;
      e.unnecessaryCollisionTest = null
    },
    getCachedLabels: function (e) {
      e = e || [];
      var T = this.getZoomStep();
      var hS = [];
      var hU = false;
      for (var hR = 0; hR < e.length; hR++) {
        var hT = e[hR];
        if (!hT.cacheState || !hT.cacheState[T]) {
          hU = true;
          break
        }
        if (hT.hasNewData) {
          hU = true;
          break
        }
      }
      if (hU) {
        this.calcLabelsCollision(e)
      }
      return e
    },
    calcLabelsCollision: function (T) {
      var hS = this.getZoomStep();
      var hT = {};
      var hW;
      var hR;
      T = this.collisionTest(T, undefined, hS);
      bJ.addLabelIntoAreaSpots(T);
      for (var hV = 0; hV < T.length; hV++) {
        hW = T[hV];
        hR = hW.tileInfo;
        var h0 = hR.col + "," + hR.row;
        hT[h0] = 1
      }
      var e = {};
      for (var hV = 0; hV < T.length; hV++) {
        hW = T[hV];
        if (!hW.cacheState) {
          hW.cacheState = {}
        }
        hR = hW.tileInfo;
        var hZ = hR.col;
        var hX = hR.row;
        h0 = hZ + "," + hX;
        if (hW.cacheState[hS] === "stable") {
          e[h0] = 1;
          if (!hW.hasNewData) {
            continue
          }
        }
        for (var hU = 0; hU < hW.fixedLabel.length; hU++) {
          var hY = hW.fixedLabel[hU];
          if (!hY.cachedIsDel) {
            hY.cachedIsDel = {}
          }
          hY.cachedIsDel[hS] = hY.isDel
        }
        for (var hU = 0; hU < hW.indoorLabel.length; hU++) {
          var hY = hW.indoorLabel[hU];
          if (!hY.cachedIsDel) {
            hY.cachedIsDel = {}
          }
          hY.cachedIsDel[hS] = hY.isDel
        }
        for (var hU = 0; hU < hW.lineLabel.length; hU++) {
          var hY = hW.lineLabel[hU];
          if (!hY.cachedIsDel) {
            hY.cachedIsDel = {}
          }
          hY.cachedIsDel[hS] = hY.isDel
        }
        if (hT[(hZ - 1) + "," + (hX - 1)] && hT[(hZ - 1) + "," + hX] && hT[(hZ - 1) + "," + (hX + 1)] && hT[hZ + "," + (hX - 1)] && hT[hZ + "," + (hX + 1)] && hT[(hZ + 1) + "," + (hX - 1)] && hT[(hZ + 1) + "," + hX] && hT[(hZ + 1) + "," + (hX + 1)]) {
          hW.cacheState[hS] = "stable";
          e[h0] = 1
        } else {
          if (!hW.cacheState[hS]) {
            hW.cacheState[hS] = "unstable"
          }
        }
      }
      for (var hV = 0; hV < T.length; hV++) {
        var hW = T[hV];
        hR = hW.tileInfo;
        var h0 = hR.col + "," + hR.row;
        var hZ = +hR.col;
        var hX = +hR.row;
        if (e[(hZ - 1) + "," + (hX - 1)] && e[(hZ - 1) + "," + hX] && e[(hZ - 1) + "," + (hX + 1)] && e[hZ + "," + (hX - 1)] && e[hZ + "," + (hX + 1)] && e[(hZ + 1) + "," + (hX - 1)] && e[(hZ + 1) + "," + hX] && e[(hZ + 1) + "," + (hX + 1)]) {
          if (!hW.unnecessaryCollisionTest) {
            hW.unnecessaryCollisionTest = {}
          }
          hW.unnecessaryCollisionTest[hS] = 1
        }
      }
      T.hasNewData = false
    },
    updateLabels: function (hR) {
      var e = this.map;
      var hX = e.getZoom();
      var hZ = e.getHeading();
      hZ = this.calcLoopHeading(hZ);
      var hY = e.getTilt();
      var hS = this.getZoomStep();
      for (var hW = 0, hT = hR.length; hW < hT; hW++) {
        var hV = hR[hW];
        var T = hV.tileInfo;
        var hU = T.loopOffsetX || 0;
        this.updateFixedLabel(hV.fixedLabel, hY, hZ, hV, hS, hX, hU);
        this.updateFixedLabel(hV.indoorLabel, hY, hZ, hV, hS, hX, 0);
        this.updateLineLabel(hV.lineLabel, hY, hZ, hV, hS)
      }
    },
    updateFixedLabel: function (hW, hY, i, h0, hS, e, hR) {
      if (hW.length === 1) {}
      for (var h1 = 0, hT = hW.length; h1 < hT; h1++) {
        var hX = hW[h1];
        if (!hX.cachedIsDel) {
          continue
        }
        if (!hY && !i && h0.cacheState && h0.cacheState[hS]) {
          hX.isDel = hX.cachedIsDel[hS];
          if (typeof hX.isDel === "undefined") {
            hX.isDel = hX.cachedIsDel[hS] = true
          }
        }
        if (hX.startScale > e) {
          hX.isDel = true
        }
        if (hX.isDel) {
          continue
        }
        var h3 = hX.pt;
        var T = hX.iconPos;
        if (T && T.texcoord) {
          if (!T.rtVertex) {
            T.rtVertex = [];
            var h5 = T.vertex;
            var hU = aF(h3.lng);
            var h2 = aF(h3.lat);
            T.rtVertex = [hU[0], h2[0], hU[1], h2[1], 0, h5[0], h5[1], 0, 0, T.texcoord[0], T.texcoord[1], hU[0], h2[0], hU[1], h2[1], 0, h5[2], h5[3], 0, 0, T.texcoord[2], T.texcoord[3], hU[0], h2[0], hU[1], h2[1], 0, h5[4], h5[5], 0, 0, T.texcoord[4], T.texcoord[5], hU[0], h2[0], hU[1], h2[1], 0, h5[6], h5[7], 0, 0, T.texcoord[6], T.texcoord[7], hU[0], h2[0], hU[1], h2[1], 0, h5[8], h5[9], 0, 0, T.texcoord[8], T.texcoord[9], hU[0], h2[0], hU[1], h2[1], 0, h5[10], h5[11], 0, 0, T.texcoord[10], T.texcoord[11]]
          }
        }
        var h4 = hX.textPos;
        if (h4) {
          if (!h4.rtVertex) {
            h4.rtVertex = [];
            var h5 = h4.vertex;
            var hV = h4.rtVertex;
            var hU = aF(h3.lng);
            var h2 = aF(h3.lat);
            var h7 = aF(hR);
            for (var hZ = 0, h6 = h5.length; hZ < h6; hZ += 12) {
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ], h5[hZ + 1], h7[0], h7[1], h4.texcoord[0], h4.texcoord[1]);
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ + 2], h5[hZ + 3], h7[0], h7[1], h4.texcoord[2], h4.texcoord[3]);
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ + 4], h5[hZ + 5], h7[0], h7[1], h4.texcoord[4], h4.texcoord[5]);
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ + 6], h5[hZ + 7], h7[0], h7[1], h4.texcoord[6], h4.texcoord[7]);
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ + 8], h5[hZ + 9], h7[0], h7[1], h4.texcoord[8], h4.texcoord[9]);
              hV.push(hU[0], h2[0], hU[1], h2[1], 0, h5[hZ + 10], h5[hZ + 11], h7[0], h7[1], h4.texcoord[10], h4.texcoord[11])
            }
          }
        }
      }
    },
    updateLineLabel: function (hW, it, ih, ib, ic) {
      hW = hW || [];
      var h6 = this.map;
      var hZ = h6.getZoomUnits();
      for (var ir = 0, ip = hW.length; ir < ip; ir++) {
        var hV = hW[ir];
        if (!hV.cachedIsDel) {
          continue
        }
        if (!it && !ih && ib.cacheState && ib.cacheState[ic]) {
          hV.isDel = hV.cachedIsDel[ic];
          if (typeof hV.isDel === "undefined") {
            hV.isDel = hV.cachedIsDel[ic] = true
          }
        }
        if (hV.isDel) {
          continue
        }
        if (!hV.styleText || hV.styleText.length === 0) {
          continue
        }
        var hX = hV.mcInTile;
        var ik = hX.x;
        var ii = hX.y;
        var ia = hV.wordsInfo;
        var h8 = hV.labelAngle;
        var h4 = false;
        var ij = 0;
        if (ih !== 0) {
          var h5 = ia[0].angle;
          var io = this.calcLoopHeading(h5 - ih);
          var h2 = this.calcLoopHeading(h8 - ih);
          if (io > 45 && io < 315) {
            if (io > 45 && io <= 135) {
              ij = 270
            } else {
              if (io > 135 && io <= 225) {
                ij = 180
              } else {
                if (io > 225 && io < 315) {
                  ij = 90
                }
              }
            }
            if (h8 > 225 && h8 <= 315 && ij <= 180) {
              h4 = true
            } else {
              if ((h8 >= 0 && h8 <= 45 || h8 >= 315 && h8 < 360) && ij >= 180) {
                h4 = true
              }
            }
          }
        }
        for (var iq = 0, h0 = ia.length; iq < h0; iq++) {
          var im = ia[iq];
          var h3 = im.calcInfo;
          var ig = im.offset[0];
          var id = im.offset[1];
          if (!im.size) {
            continue
          }
          var e = im.size[0];
          var T = im.size[1];
          var h1 = im.angle;
          if (!h3) {
            h3 = {}
          }
          if (ih !== h3.mapHeading || hZ !== h3.zoomUnits) {
            h3.mapHeading = ih;
            h3.zoomUnits = hZ;
            if (h4) {
              var h7 = ia[h0 - 1 - iq];
              ig = h7.offset[0];
              id = h7.offset[1];
              h1 = h7.angle
            }
            var hS = ik + ig * hZ;
            var hR = ii + id * hZ;
            h3.rotationCenter = {
              lng: hS,
              lat: hR
            };
            h3.calcHeading = ij;
            h3.angle = h1;
            h3.offsetX = ig;
            h3.offsetY = id;
            im.calcInfo = h3
          }
          if (!im.rtVertex) {
            im.rtVertex = []
          }
          im.rtVertex.length = 0;
          var h9 = h3.calcHeading + h3.angle;
          var hT = h3.rotationCenter;
          ig = h3.offsetX;
          id = h3.offsetY;
          var hU = Math.round(ig - e / 2);
          var il = Math.round(ig + e / 2);
          var ie = Math.round(id + T / 2);
          var hY = Math.round(id - T / 2);
          im.rtVertex.push(ik, ii, im.z, hU, hY, hT.lng, hT.lat, h9, im.texcoord[0], im.texcoord[1], ik, ii, im.z, il, hY, hT.lng, hT.lat, h9, im.texcoord[2], im.texcoord[3], ik, ii, im.z, il, ie, hT.lng, hT.lat, h9, im.texcoord[4], im.texcoord[5], ik, ii, im.z, hU, hY, hT.lng, hT.lat, h9, im.texcoord[6], im.texcoord[7], ik, ii, im.z, il, ie, hT.lng, hT.lat, h9, im.texcoord[8], im.texcoord[9], ik, ii, im.z, hU, ie, hT.lng, hT.lat, h9, im.texcoord[10], im.texcoord[11])
        }
      }
    },
    calcLoopHeading: function (e) {
      while (e >= 360) {
        e -= 360
      }
      while (e < 0) {
        e += 360
      }
      return e
    },
    fixDataFormat: function (hZ) {
      var hR = this.fixedLabelData;
      var e = this.lineLabelData;
      var T = this.highlightLabelData;
      var h6 = 0;
      var hV = 0;
      var h4 = 0;
      var h5;
      if (this.currentSelectedLabel) {
        var hU = this.getLabelByUid(this.currentSelectedLabel.guid, this.currentSelectedLabel.tilePosStr);
        if (!hU || hU.isDel) {
          hR[h6] = this.currentSelectedLabel.formatedData;
          h6++;
          T[h4] = this.currentSelectedLabel.formatedData;
          h4++
        }
      }
      for (var h3 = 0; h3 < hZ.length; h3++) {
        var hX = hZ[h3];
        var hW = hX.fixedLabel;
        var hS = hX.indoorLabel;
        var h2 = hX.lineLabel;
        h5 = this.fixFixedLabelDataFormat(hW, hX, hR, h6, T, h4);
        h6 = h5[0];
        h4 = h5[1];
        h5 = this.fixFixedLabelDataFormat(hS, hX, hR, h6, T, h4, true);
        h6 = h5[0];
        h4 = h5[1];
        e[hV] = {
          tileInfo: hX.tileInfo,
          lineLabels: []
        };
        for (var h1 = 0; h1 < h2.length; h1++) {
          if (h2[h1].isDel) {
            continue
          }
          var hY = h2[h1].wordsInfo;
          if (hY) {
            for (var h0 = 0; h0 < hY.length; h0++) {
              if (!hY[h0].rtVertex) {
                continue
              }
              var hT = hY[h0].formatedData;
              if (!hT) {
                hT = {
                  textureSource: hX.textureSources[h2[h1].processedInZoom],
                  textureHeight: hX.textureHeights[h2[h1].processedInZoom],
                  renderData: {
                    vertex: hY[h0].rtVertex,
                    textureCoord: hY[h0].texcoord
                  }
                };
                hY[h0].formatedData = hT
              }
              e[hV].lineLabels.push(hT)
            }
          }
        }
        hV++
      }
      hR.length = h6;
      e.length = hV;
      T.length = h4;
      return [e, hR, T]
    },
    fixFixedLabelDataFormat: function (hU, hX, hY, hV, hS, e, hW) {
      for (var i = 0; i < hU.length; i++) {
        if (hU[i].isDel) {
          continue
        }
        var hT = hU[i].textPos;
        var hR = hU[i].iconPos;
        var T = null;
        if (hT && hT.rtVertex) {
          if (!hU[i].formatedData) {
            T = {
              guid: hU[i].guid,
              guidExt: hU[i].guidExt,
              tilePosStr: hU[i].tilePosStr,
              zoom: hU[i].zoom,
              tempRank: hU[i].tempRank,
              textureSource: hX.textureSources ? hX.textureSources[hU[i].processedInZoom] : hX.textureSources,
              textureHeight: hX.textureHeights ? hX.textureHeights[hU[i].processedInZoom] : hX.textureHeights,
              renderData: {
                vertex: hT.rtVertex,
                textureCoord: hT.texcoord
              }
            };
            if (hW && hU[i].onDefaultFloor === false) {
              T.textureSource = hX.indoorTextureSources[hU[i].processedInZoom];
              T.textureHeight = hX.indoorTextureHeights[hU[i].processedInZoom]
            }
            hU[i].formatedData = T
          } else {
            T = hU[i].formatedData;
            T.tempRank = hU[i].tempRank
          }
          if (this.currentSelectedLabel && T.guid === this.currentSelectedLabel.guid && T.tilePosStr === this.currentSelectedLabel.tilePosStr) {
            hS[e] = T;
            e++
          }
        }
        if (hR && hR.rtVertex) {
          if (T) {
            if (!T.iconRenderData) {
              T.iconRenderData = {
                vertex: hR.rtVertex,
                textureCoord: hR.texcoord
              }
            }
          } else {
            T = {
              guid: hU[i].guid,
              guidExt: hU[i].guidExt,
              zoom: hU[i].zoom,
              tempRank: hU[i].tempRank,
              iconRenderData: {
                vertex: hR.rtVertex,
                textureCoord: hR.texcoord
              }
            };
            hU[i].formatedData = T
          }
        }
        hY[hV] = T;
        hV++
      }
      return [hV, e]
    },
    _refreshSpotData: function () {
      this._spotData.length = 0;
      var hW = this.map;
      var hU = Math.floor(hW.getZoom());
      var T = this.map._featureMgr.getLabelData();
      if (T) {
        for (var hS = 0, hR = T.length; hS < hR; hS++) {
          this._addFixedSpotData(T[hS].fixedLabel, hU);
          this._addFixedSpotData(T[hS].indoorLabel, hU)
        }
      }
      var hX = this.currentSelectedLabel;
      if (hX && !this.getTileByLabelUid(hX.guid, hX.tilePosStr)) {
        var hT = this._getSpotDataFromLabel(this.currentSelectedLabel);
        if (hT) {
          this._spotData.push(hT)
        }
      }
      var hV = new bb("onspotsdataready");
      hV.spots = this._spotData;
      hW._spotDataOnCanvas = this._spotData;
      hW.dispatchEvent(hV)
    },
    _addFixedSpotData: function (hS, hR) {
      for (var e = 0; e < hS.length; e++) {
        var T = hS[e];
        if (!this.layer.isClickableLabel(T) || (T.guidExt === 1 && T.startScale > hR)) {
          continue
        }
        var i = hS[e].spot || this._getSpotDataFromLabel(hS[e]);
        if (i) {
          this._spotData.push(i)
        }
      }
    },
    _getSpotDataFromLabel: function (T) {
      var hT = this.map;
      if (!T.bds) {
        return null
      }
      var e = T.bds.slice(0);
      var hR = null;
      if (T.iconPos) {
        hR = new hs(T.pt.lng, T.pt.lat)
      }
      var i = T.name ? T.name.replace("\\\\", "<br>") : "";
      if (T.iconPos && T.iconPos.iconType.indexOf("ditie") > -1 && hT.getZoom() > 14) {
        i = ""
      }
      var hS = {
        n: i,
        pt: new hs(T.pt.lng, T.pt.lat),
        userdata: {
          iconPoint: hR,
          uid: T.guid,
          name: i,
          mapPoi: true,
          type: T.iconPos ? T.iconPos.iconType : "",
          rank: T.rank,
          zoom: T.zoom,
          tilePosStr: T.tilePosStr
        },
        bd: e,
        tag: "MAP_SPOT_INFO"
      };
      T.spot = hS;
      return hS
    },
    drawLabelsOnCanvas: function (i, e) {
      if (this._labelTextCanvas) {
        this._labelTextCanvas.drawLabelsOnCanvas(i, e)
      }
    }
  });

  function fT(e) {
    this._map = e;
    this.virtualTile = {
      custom: true,
      label: {
        fixedLabel: [],
        indoorLabel: [],
        lineLabel: [],
        textureHeights: [],
        status: "ready"
      },
      tileInfo: {
        col: 0,
        row: 0,
        zoom: 0,
        useZoom: 0,
        loopOffsetX: 0
      },
      status: "ready"
    };
    this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
    this.init()
  }
  fT.prototype.init = function () {
    var T = this._map;
    var i = this;

    function e() {
      i.updateLabels()
    }
    T.addEventListener("add_tile_labels", e);
    T.addEventListener("onremove_tile_labels", e);
    T.addEventListener("onclear_labels", e)
  };
  fT.prototype.updateLabels = function () {
    var i = this._map.tileMgr.getLabelTextCanvas();
    var T = this._map;
    var e = this;
    i.drawCustomLabelsOnCanvas(T._customTileLabels, function (hS) {
      var hR = e.virtualTile;
      if (hS) {
        hR.label.textureHeights[0] = [hS.height]
      }
      hR.label.fixedLabel = T._customTileLabels;
      var hT = new bb("oncustom_labels_ready");
      hT.virtualTile = hR;
      hT.labelCanvas = hS;
      hT.imgKey = bo.getGUID("custom_labels_");
      T.dispatchEvent(hT)
    })
  };
  bo.register(function (e) {
    e._customLabelMgr = new fT(e)
  });
  var aM = "\x31\x2e\x30\x2e\x32",
    ay = function (h8, h7) {
      var h6 = {
        "\x78\x65\x64\x78\x6c": "\x68\x65\x63",
        "\x6c\x68\x65\x64\x61": "\x63\x63\x61",
        "\x61\x64\x6c\x78\x61": function (h9, e) {
          return h9 < e
        },
        "\x61\x61\x61\x65\x63": "\x61\x64\x69",
        "\x61\x69\x63\x69\x63": function (h9, e) {
          return h9 + e
        },
        "\x65\x68\x78\x61\x65": function (h9, e) {
          return h9 + e
        },
        "\x63\x69\x78\x61\x65": function (ia, h9, e) {
          return ia(h9, e)
        },
        "\x63\x69\x61\x61\x65": function (h9, e) {
          return h9 < e
        },
        "\x61\x6c\x6c\x68\x6d": function (ia, h9, e) {
          return ia(h9, e)
        }
      };

      function h2(ia, h9) {
        var ie = h6["\x78\x65\x64\x78\x6c"];
        while (ie !== "\x65\x61\x68\x78") {
          switch (ie) {
            case "\x68\x65\x63":
              var ic = ia["\x6c\x65\x6e\x67\x74\x68"];
              ie = "\x63\x63\x61";
              break;
            case h6["\x6c\x68\x65\x64\x61"]:
              var e = [];
              ie = "\x65\x65\x61";
              break;
            case "\x65\x65\x61":
              for (var id = 0; h6["\x61\x64\x6c\x78\x61"](id, ic); id++) {
                var ib = h9(ia[id]);
                e["\x70\x75\x73\x68"](ib)
              }
              ie = h6["\x61\x61\x61\x65\x63"];
              break;
            case h6["\x61\x61\x61\x65\x63"]:
              return e
          }
        }
      }
      var h5, h4, h3, h1, h0, hZ = decodeURIComponent,
        hY = "\x43\x68\x61\x72",
        hX = "";
      var hW = [ay];
      h5 = "\x64\x65";
      h4 = "\x66\x72";
      h3 = "\x6f";
      h0 = h4 + h3 + "\x6d";
      h1 = "\x43\x6f" + h5;
      var hV = function (e) {
        return h6["\x61\x69\x63\x69\x63"](e, hX)["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"][h6["\x65\x68\x78\x61\x65"](h6["\x65\x68\x78\x61\x65"](h0, hY), h1)](e)
      };
      var hU = function (e) {
        return h2(e, function (h9) {
          return hV(h9)
        })
      };
      var hT = hU["\x63\x61\x6c\x6c"](hV, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
      var hS = h6["\x63\x69\x78\x61\x65"](h2, [28782, 27702, 26416, 25167, 24183], function (e) {
        return hZ(e)
      });
      var hR = hU["\x63\x61\x6c\x6c"](hS, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
        T = {};
      hS = hU(hS);
      var i = new RegExp(hS["\x6a\x6f\x69\x6e"]("\x7c"));
      for (var h5 = 0; h6["\x63\x69\x61\x61\x65"](h5, hT["\x6c\x65\x6e\x67\x74\x68"]); h5++) {
        T[hR[h5]] = hT[h5]
      }
      h7 = h2(h7["\x73\x70\x6c\x69\x74"](hX), function (e) {
        return T[e] || e
      })["\x6a\x6f\x69\x6e"](hX);
      return h6["\x61\x6c\x6c\x68\x6d"](h2, h7["\x73\x70\x6c\x69\x74"](i), function (e) {
        return hZ(e)
      })
    }(this, "\x6c\x6c\u5ef2\u6730\u545a\x69\u5ef2\u6730\u545a\u545a\u5ef2\u5e77\u56c4\u735c\x68\u6c36\u56c4\x6c\u58a0\u58a0\u735c\u5e77\x69\u59c8\x68\x6c\u545a\u624f\u56c4\u545a\x73\x74\x72\u7313\x79\u5e77\x6c\u545a\u72b8\u577a\x74\x68\u5e77\u5ef2\x72\x72\x57\u7313\x72\x6b\u545a\x72\u5e77\x74\u545a\x72\u735c\x69\u72b8\u5ef2\x74\u545a\u624f\u5ef2\x72\x72\x50\u545a\u72b8\u56c4\x69\u72b8\u577a\u6b9b\u5ef2\x74\u5ef2\u6730\u56c4\u735c\u56c4\u56c4\u545a\u6c36\x69\x6c\u56c4\x69\u735c\u624f\u735c\u56c4\u545a\u56c4\u56c4\u5e77\u545a\x69\u545a\u545a\u545a\u6730\u59c8\x69\x69\u59c8\u58a0\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\u706e\u735c\u735c\u545a\u624f\x69\x73\x53\u545a\u72b8\u56c4\u7209\x53\u5e77\u59c8\u58a0\u5ef2\u545a\u59c8\u5e77\u5ef2\u545a\u59c8\u735c\u545a\u6730\u59c8\u7313\u72b8\u5a32\x69\u577a\u5e77\x73\x74\x79\x6c\u545a\u6c36\u545a\x6c\x69\u545a\u545a\u624f\u58a0\u5ef2\u545a\u706e\u5ef2\u56c4\x6c\x69\u545a\u6c36\u5ef2\u5ef2\x68\u58a0\u58a0\u6c36\x69\u59c8\u5ef2\u58a0\u735c\u706e\u735c\u5ef2\u58a0\u545a\u56c4\u6730\x6c\x68\x68\x6c\u58a0\u706e\x68\u59c8\u59c8\x6c\u56c4\u6730\x6c\u56c4\u59c8\u58a0\u5e77\u59c8\u545a\x69\u56c4\u56c4\u6c36\u5ef2\x69\x69\x68\x68\u6c36\x68\u545a\u5ef2\u59c8\x69\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\x5a\u7313\u7313\u735c\u624f\u545a\x6c\u5ef2\u6730\x69\u58a0\u545a\u56c4\u58a0\u624f\u63cb\x72\u7313\x77\x73\u545a\x72\u6c36\u735c\u59c8\u5ef2\u5ef2\u545a\u624f\x77\u7313\x72\u56c4\x53\u735a\u5ef2\u59c8\u545a\x52\u5ef2\x74\x69\u7313\u6730\x72\u5ef2\x74\x69\u7313\u706e\u735c\x69\u5ef2\u6c36\u545a\u545a\x6c\x6c\u735c\u5e77\u59c8\u5ef2\u72b8\x55\x73\u545a\x57\u545a\u5c2b\u6256\x73\x73\u545a\u735c\u5c2b\x6c\x79\u6730\u545a\u545a\u59c8\x68\u58a0\u6c36\x68\u545a\u735c\u6730\u59c8\x69\u5ef2\u59c8\u58a0\u706e\x69\u58a0\u545a\u59c8\x68\u6730\u735c\x69\u72b8\u5e77\x6c\u7313\u5ef2\u56c4\x54\x69\x6c\u545a\u6b9b\u5ef2\x74\u5ef2\u6c36\x75\x72\x6c\u5e77\x74\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u624f\x74\x69\x6c\u545a\x4b\u545a\x79\u6730\u7313\u72b8\x72\u545a\u5a32\x72\u545a\x73\x68\u5e77\u5ef2\x69\u735c\x69\u735c\u624f\u58a0\u56c4\u735c\u6c36\u56c4\u5ef2\x74\u5ef2\u6c36\x5f\u59c8\u5c2b\x6b\u6c36\u545a\x68\u5ef2\u624f\x5f\x69\x73\u63cb\x75\x73\x79\u706e\u735c\u545a\x6c\u59c8\u5ef2\u624f\u735c\x68\u5ef2\u706e\x73\x68\x69\u5a32\x74\u5e77\u545a\u59c8\u59c8\u545a\u5ef2\u706e\u735c\u735c\x68\x68\x68\u6c36\u56c4\x69\x69\u545a\u545a\u706e\u5a32\x69\x72\u545a\u6730\u735c\x68\u5ef2\u56c4\u6730\u59c8\u5ef2\x68\u545a\u545a\u624f\u545a\u5ef2\u5ef2\u5ef2\u735c\u706e\u56c4\u545a\u59c8\u6c36\u735c\u58a0\x69\u624f\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x4b\u545a\x79\u6730\u5ef2\u59c8\u58a0\x69\x68\u6c36\u56c4\u56c4\u5ef2\u58a0\u545a\u706e\x73\u7313\x75\x72\u59c8\u545a\u5e77\x6c\u5ef2\u5ef2\u5ef2\u735c\u624f\u59c8\u545a\u735c\u58a0\x6c\u6730\u735a\x75\x73\x68\u6730\u5ef2\x6c\u56c4\u5e77\u5ef2\u545a\x6c\x68\u5ef2\u6c36\x6c\u545a\u545a\u58a0\x68\u6730\x74\u545a\u58a0\x74\x53\x69\x7a\u545a\x52\u5ef2\x74\x69\u7313\u6c36\u735c\u59c8\x69\u545a\u5ef2\u624f\x69\u545a\x68\u5ef2\u5ef2\u6c36\x68\u5ef2\x72\u56c4\x77\u5ef2\x72\u545a\u645a\u7313\u72b8\u59c8\x75\x72\x72\u545a\u72b8\u59c8\x79\u6c36\u56c4\u5ef2\u58a0\u545a\x6c\u5e77\u5ef2\x68\u5ef2\u706e\x69\u56c4\u5ef2\u545a\u6730\u56c4\u545a\u545a\u6730\u59c8\u56c4\u545a\u6c36\u58a0\u59c8\u5ef2\u624f\x6c\x69\u735c\u735c\u5ef2\u624f\u545a\u735c\x69\u735c\u5ef2\u6730\u59c8\x6c\u56c4\u58a0\x68\u624f\u56c4\u58a0\u545a\u545a\u58a0\u706e\u735c\u5ef2\u5ef2\x68\u545a\u706e\u545a\x69\u5ef2\u5ef2\u545a\u6730\x69\u56c4\x5f\u706e\x6c\u5ef2\x68\u56c4\u5ef2\u6730\u545a\u59c8\u58a0\u5ef2\u59c8\u6c36\x74\x69\x6c\u545a\x54\x79\u735a\u545a\x4e\u5ef2\u735c\u545a\u6c36\x68\u5ef2\u5ef2\u735c\x69\u6c36\u735c\u545a\x6c\u59c8\u735c\u624f\u59c8\u545a\u5ef2\u545a\u545a\u6c36\u59c8\u7313\x6c\u624f\x72\u7313\x77\u624f\x7a\u7313\u7313\u735c\u706e\x73\u735a\x6c\x69\u59c8\u545a\u5e77\u5ef2\u545a\u5ef2\u6c36\u56c4\u58a0\u5ef2\u624f\x68\u56c4\u58a0\u5e77\x69\u59c8\u7313\u72b8\x53\u545a\x74\x49\u72b8\u5a32\u7313\u706e\x69\u545a\u5ef2\u624f\x68\x68\u735c\u5e77\u56c4\x69\u735c\u6c36\u59c8\x68\u5ef2\u6730\u545a\u5ef2\x69\u624f\x6c\u58a0\u5ef2\u706e\u58a0\x6c\u59c8\u6c36\x68\u545a\x69\u6730\u545a\u545a\u59c8\u6c36\u5ef2\u735c\u735c\u6c36\x68\u545a\u545a\u6730\u56c4\x6c\x69\u5e77\u59c8\x75\x73\x74\u7313\u735c\u624f\u545a\u59c8\u56c4\u5e77\u56c4\x68\x69\u6c36\u5ef2\u735c\x69\u706e\u58a0\u545a\u59c8\u5e77\u545a\u56c4\u545a\u706e\u545a\x6c\u56c4\u6c36\x69\u735c\u5ef2\u735c\u6730\u58a0\u545a\x6c\u5ef2\u56c4\u6730\x68\u735c\x68\x68\u545a\u6c36\u59c8\u59c8\u5ef2\u59c8\u545a\u6730\u59c8\u5ef2\x68\u6730\u545a\u545a\u5ef2\u58a0\u56c4\u6730\u59c8\u59c8\u5ef2\x6c\u59c8\u706e\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x79\u6730\u5ef2\u545a\u5ef2\u545a\u56c4\u624f\u735c\u545a\u735c\u59c8\x68\u706e\x69\u735c\u5ef2\x69\u59c8\u5e77\x69\u59c8\u7313\u72b8\x49\u72b8\u5a32\u7313\u624f\u545a\u545a\x6c\u735c\u735c\u624f\u545a\u545a\u5ef2\u5ef2\u59c8\u5e77\x68\x6c\x6c\u56c4\u58a0\u6c36\u58a0\u5ef2\u735c\u58a0\u545a\u624f\u56c4\u735c\u59c8\u5ef2\u5ef2\u6730\u59c8\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\u5e77\u5ef2\u56c4\x69\u5ef2\u59c8\u6730\u59c8\u59c8\u58a0\x69\x6c\u6c36\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u6c36\x68\x6c\u545a\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\x49\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u5e77\x69\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u6c36\u545a\u5ef2\u58a0\x6c\u545a\u624f\u58a0\x68\x69\u624f\u5ef2\u56c4\u545a\u735c\u5ef2\u706e\u735c\u5ef2\u545a\u6c36\u735c\x6c\u5ef2\u706e\u645a\x75\x73\x74\u7313\u735c\u706e\x69\u735c\x68\u545a\u5ef2\u6c36\u545a\x69\u58a0\x6c\u56c4\u6c36\u545a\x6c\u56c4\u56c4\u545a\u706e\x6c\x69\u58a0\u545a\u58a0\u6730\x69\u72b8\u56c4\u545a\u58a0\x4f\u5a32\u6c36\x69\u5ef2\x68\x6c\x6c\u6c36\x6c\u5ef2\u58a0\u6730\u5ef2\u59c8\u59c8\x6c\u58a0\u624f\u735c\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u6c36\u735a\u7313\x73\x74\x4d\u545a\x73\x73\u5ef2\u577a\u545a\u6730\x69\u5ef2\u5ef2\u545a\u735c\u706e\u5ef2\u545a\x69\x69\u58a0\u5e77\u58a0\u735c\u5ef2\u545a\u56c4\u706e\u5a32\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u706e\x69\x6c\u56c4\u56c4\u735c\u6c36\x69\u5ef2\x68\u545a\u58a0\u6730\u59c8\x75\x73\x74\u7313\u735c\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\u706e\u545a\u56c4\u59c8\u59c8\u59c8\u706e\u545a\u5ef2\x6c\x6c\u56c4\u706e\u545a\u5ef2\u545a\u5ef2\u56c4\u624f\x5f\u56c4\x69\x73\u735a\x6c\u5ef2\x79\x4f\u735a\x74\x69\u7313\u72b8\x73\u6c36\u735a\u7313\x69\u6730\u545a\x68\x69\u706e\u735c\u5ef2\u735a\u706e\u577a\u545a\x74\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u6c36\u5ef2\u735c\u545a\x69\x68\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u7209\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u5e77\u735a\u7313\x69\x54\u545a\u58a0\x74\u5e77\u58a0\u735c\x69\u5ef2\u545a\u5e77\u58a0\x6c\u735c\u59c8\u545a\u624f\u56c4\u59c8\u56c4\u5e77\u545a\u545a\u59c8\u58a0\u5e77\u5ef2\u5ef2\u5ef2\u5e77\u5ef2\u56c4\x69\u6730\u545a\u5ef2\u56c4\u6c36\x6c\u5ef2\x69\x69\x6c\u6730\x69\u735c\u545a\u5ef2\u735c\u6730\u56c4\x6c\u735c\u545a\x68\u5e77\u59c8\u735c\u545a\u6730\u5ef2\x6c\u545a\u6c36\u5ef2\x69\x6c\u58a0\u59c8\u6c36\u545a\u56c4\u5ef2\u735c\u59c8\u5e77\x68\u735c\u5ef2\u5e77\u545a\u545a\u735c\u59c8\u59c8\u706e\u735a\x72\u545a\x76\u545a\u72b8\x74\u6b9b\u545a\u5a32\u5ef2\x75\x6c\x74\u5e77\x69\u72b8\x4d\u5ef2\u735a\x48\u7313\x73\x74\u5e77\u58a0\x69\u5ef2\u545a\u545a\u6730\u59c8\u56c4\u56c4\u59c8\u545a\u6c36\u5ef2\u58a0\u56c4\u6730\u5ef2\u545a\u735c\x69\u624f\u5f5f\u66f0\u66f0\x29\u5f5f\u6b31\u63cb\u5e77\u5ef2\u735c\x68\u624f\u59c8\u545a\u545a\u706e\u5ef2\u735a\u735a\x6c\x69\u59c8\u5ef2\x74\x69\u7313\u72b8\u5f5f\u66f0\u7209\x6a\u5ef2\x76\u5ef2\x73\u59c8\x72\x69\u735a\x74\u6c36\x68\u58a0\u735c\x6c\u545a\u5e77\x68\u545a\u735c\u58a0\u545a\u624f\u5ef2\u735a\u735a\u545a\u72b8\u56c4\u6730\u545a\u5ef2\u545a\u56c4\u545a\u6c36\x68\u59c8\u59c8\u545a\x6c\u706e\u545a\u545a\u56c4\x69\u545a\u6c36\u577a\u545a\x74\u63cb\x6c\u7313\u5c2b\u624f\u545a\u59c8\x6c\u56c4\x68\u6730\x77\u545a\u5c2b\x6b\x69\x74\x55\x52\x4c\u706e\u59c8\x72\u545a\u5ef2\x74\u545a\x4f\u5c2b\x6a\u545a\u59c8\x74\x55\x52\x4c\u6c36\x69\u72b8\x69\x74\u624f\x6c\u545a\x69\u735c\u6c36\x69\x68\u545a\u6730\x68\u56c4\u5ef2\u6730\x73\x74\x72\x69\u72b8\u577a\u706e\u5ef2\u5ef2\x69\u6730\u545a\x6c\u58a0\u706e\u59c8\u735c\u58a0\u6730\u56c4\u735c\u545a\u624f\x68\x6c\x6c\u624f\u5ef2\u5ef2\u545a\u5e77\u58a0\u545a\u545a\u6c36\u5ef2\x69\x68\u6730\u545a\x68\u56c4\u6730\u56c4\x68\x68\u5e77\x68\x6c\u5ef2\u5e77\u5ef2\u5ef2\u56c4\u6730\x77\u7313\x72\x6b\u545a\x72\u735c\u577a\x72\u6c36\u58a0\u59c8\u545a\u5e77\u56c4\u5ef2\u545a\u5e77\u735c\u545a\u5ef2\u706e\x6c\u735c\u735c\u5ef2\u6730\x6c\u5ef2\u545a\u6730\u5ef2\u59c8\x6c\u56c4\u6730\u59c8\u735c\u56c4\u5e77\x6c\u5ef2\u59c8\u624f\u7313\u72b8\x73\x74\x79\x6c\u545a\x5f\x6c\u7313\u5ef2\u56c4\u545a\u56c4\u706e\x69\u545a\u58a0\u6730\u7313\u72b8\x73\x74\x79\x6c\u545a\x7a\u7313\u7313\u735c\x75\u735a\u56c4\u5ef2\x74\u545a\u5e77\x69\u735c\u58a0\u5e77\x6c\x68\u735c\u6c36\u545a\u59c8\u5ef2");
  (function (hR, T) {
    var i = function (e) {
      while (--e) {
        hR.push(hR.shift())
      }
    };
    i(++T)
  }(ay, 452));
  var ax = function (hR, T) {
    hR = hR - 0;
    var i = ay[hR];
    return i
  };

  function eM(hS) {
    var hR = {
      "\x6c\x61\x69\x69\x6c": ax("0x0"),
      "\x69\x6d\x65\x61\x6d": function (hV, e) {
        return hV !== e
      },
      "\x64\x6c\x6d\x65\x68": "\x61\x68\x78\x78",
      "\x61\x69\x6c\x78\x63": ax("0x1"),
      "\x65\x64\x61\x6d\x63": ax("0x2"),
      "\x65\x65\x6d\x63\x63": ax("0x3"),
      "\x78\x69\x61\x65\x65": function (hV, e) {
        return hV(e)
      },
      "\x63\x64\x64\x63\x65": ax("0x4")
    };
    var T = hR[ax("0x5")];
    while (hR[ax("0x6")](T, hR[ax("0x7")])) {
      switch (T) {
        case ax("0x8"):
          try {
            var i = ax("0x9");
            while (i !== hR[ax("0xa")]) {
              switch (i) {
                case hR[ax("0xb")]:
                  hT = new Worker(hS);
                  i = ax("0xc");
                  break;
                case hR[ax("0xd")]:
                  hT = t(hS);
                  i = hR[ax("0xa")];
                  break;
                case ax("0xc"):
                  hT["\x6f\x6e\x65\x72\x72\x6f\x72"] = function (e) {
                    e[ax("0xe")]();
                    hT = t(hS)
                  };
                  i = hR[ax("0xa")];
                  break;
                case ax("0x9"):
                  i = dw[ax("0xf")] ? ax("0x2") : hR[ax("0xd")];
                  break
              }
            }
          } catch (hU) {
            hT = hR[ax("0x10")](t, hU)
          }
          T = hR["\x63\x64\x64\x63\x65"];
          break;
        case hR[ax("0x11")]:
          return hT;
        case ax("0x0"):
          var hT = null;
          T = ax("0x8");
          break
      }
    }
  }

  function t(hR) {
    var i = {
      "\x61\x65\x65\x65\x6c": "\x69\x6d\x70\x6f\x72\x74\x53\x63\x72\x69\x70\x74\x73\x28\x22",
      "\x68\x78\x6d\x6c\x65": ax("0x12"),
      "\x65\x63\x65\x61\x61": function (hZ, hY) {
        return hZ !== hY
      },
      "\x68\x65\x6d\x78\x65": ax("0x13"),
      "\x65\x61\x65\x64\x65": function (hZ, hY) {
        return hZ + hY
      },
      "\x68\x63\x63\x65\x6c": ax("0x14"),
      "\x65\x65\x64\x69\x65": ax("0x15"),
      "\x65\x63\x6c\x64\x68": ax("0x16")
    };
    var hX = null;
    try {
      var hW;
      try {
        hW = new Blob([i["\x61\x65\x65\x65\x6c"] + hR + "\x22\x29\x3b"], {
          type: ax("0x17")
        })
      } catch (hV) {
        var hU = i[ax("0x18")];
        while (i["\x65\x63\x65\x61\x61"](hU, i[ax("0x19")])) {
          switch (hU) {
            case ax("0x16"):
              hT[ax("0x1a")](i["\x65\x61\x65\x64\x65"](i[ax("0x1b")](i["\x61\x65\x65\x65\x6c"], hR), i[ax("0x1c")]));
              hU = i[ax("0x1d")];
              break;
            case i[ax("0x1d")]:
              hW = hT[ax("0x1e")](ax("0x17"));
              hU = i[ax("0x19")];
              break;
            case ax("0x12"):
              var hT = new(window["\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"] || window["\x57\x65\x62\x4b\x69\x74\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"] || window["\x4d\x6f\x7a\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"])();
              hU = i[ax("0x1f")];
              break
          }
        }
      }
      var hS = window["\x55\x52\x4c"] || window[ax("0x20")];
      var T = hS[ax("0x21")](hW);
      hX = new Worker(T)
    } catch (e) {}
    return hX
  }

  function f9(e) {
    this[ax("0x22")](e)
  }
  var bf = {
    "\x69\x6e\x69\x74": function (hS) {
      var T = {
        "\x6d\x61\x78\x64\x68": function (hU, hT) {
          return hU < hT
        },
        "\x6d\x64\x65\x64\x64": function (hU, hT) {
          return hU !== hT
        },
        "\x65\x69\x65\x65\x65": ax("0x23"),
        "\x63\x69\x69\x63\x78": "\x78\x61\x65",
        "\x63\x78\x61\x65\x63": ax("0x24"),
        "\x61\x65\x63\x6d\x65": ax("0x25"),
        "\x65\x6c\x69\x65\x65": ax("0x26"),
        "\x6c\x68\x68\x6c\x78": ax("0x27"),
        "\x68\x63\x63\x6c\x64": function (hU, hT) {
          return hU !== hT
        },
        "\x63\x65\x69\x64\x64": ax("0x28"),
        "\x61\x69\x69\x68\x68": ax("0x29"),
        "\x68\x65\x61\x63\x69": ax("0x2a"),
        "\x61\x69\x6d\x69\x6d": ax("0x2b"),
        "\x68\x78\x65\x61\x69": ax("0x2c"),
        "\x6d\x65\x6c\x63\x61": ax("0x2d"),
        "\x65\x63\x63\x65\x61": ax("0x2e"),
        "\x6d\x6d\x68\x68\x68": "\x6d\x78\x69",
        "\x63\x65\x6d\x78\x6c": ax("0x2f"),
        "\x64\x69\x69\x65\x65": ax("0x30"),
        "\x63\x61\x68\x65\x65": ax("0x15"),
        "\x65\x61\x61\x61\x6d": function (hU, hT) {
          return hU > hT
        },
        "\x61\x63\x78\x69\x68": ax("0x31"),
        "\x64\x64\x61\x78\x65": ax("0x32"),
        "\x6c\x61\x61\x61\x6d": ax("0x33"),
        "\x65\x65\x63\x68\x78": ax("0x34"),
        "\x69\x64\x6c\x69\x69": ax("0x35"),
        "\x6c\x69\x65\x65\x63": function (hU, hT) {
          return hU > hT
        },
        "\x63\x69\x61\x63\x78": ax("0x36"),
        "\x69\x78\x65\x63\x68": ax("0x37"),
        "\x65\x6d\x63\x78\x6c": ax("0x38"),
        "\x64\x6c\x78\x78\x6d": ax("0x39"),
        "\x69\x63\x68\x6c\x65": ax("0x3a"),
        "\x61\x61\x68\x78\x78": ax("0x3b"),
        "\x64\x6d\x64\x64\x65": ax("0x0"),
        "\x69\x6c\x64\x69\x6d": ax("0x3c"),
        "\x61\x64\x6c\x69\x65": "\x6c\x63\x64",
        "\x69\x63\x61\x78\x6d": ax("0x3d"),
        "\x6d\x61\x78\x65\x64": ax("0x3e"),
        "\x69\x78\x65\x64\x78": ax("0x3f"),
        "\x64\x61\x78\x65\x6c": ax("0x40"),
        "\x6d\x63\x61\x61\x65": ax("0x41"),
        "\x63\x65\x65\x63\x61": "\x64\x63\x6d",
        "\x65\x65\x6c\x6c\x6d": ax("0x42"),
        "\x61\x65\x6c\x68\x61": ax("0x43"),
        "\x6c\x65\x65\x78\x68": ax("0x44"),
        "\x6d\x63\x69\x65\x61": function (hT) {
          return hT()
        },
        "\x69\x65\x68\x61\x61": ax("0x16")
      };
      var e = ax("0x45");
      while (e !== T[ax("0x46")]) {
        switch (e) {
          case T[ax("0x47")]:
            hS["\x6f\x6e"](ax("0x48"), function () {
              for (var hT = 0; T["\x6d\x61\x78\x64\x68"](hT, i["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][ax("0x49")]); hT++) {
                if (i[ax("0x4a")][hT]) {
                  i[ax("0x4a")][hT][ax("0x4b")]()
                }
              }
              i["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][ax("0x49")] = 0
            });
            e = ax("0x39");
            break;
          case T["\x61\x61\x68\x78\x78"]:
            this[ax("0x4c")] = [];
            e = ax("0x16");
            break;
          case T[ax("0x4d")]:
            hS["\x6f\x6e"](T[ax("0x4e")], function () {
              var hV = "\x6d\x6d\x65";
              while (T[ax("0x4f")](hV, T[ax("0x50")])) {
                switch (hV) {
                  case T[ax("0x51")]:
                    f9[ax("0x52")] = null;
                    hV = "\x68\x64\x61";
                    break;
                  case ax("0x53"):
                    for (var hU = 0, hT = i[ax("0x4a")][ax("0x49")]; hU < hT; hU++) {
                      i[ax("0x4a")][hU][ax("0x54")] = ![]
                    }
                    hV = T[ax("0x55")];
                    break;
                  case T[ax("0x56")]:
                    f9["\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x43\x75\x73\x74\x6f\x6d\x53\x74\x79\x6c\x65\x49\x6e\x66\x6f\x5a\x6f\x6f\x6d"] = [];
                    hV = T[ax("0x50")];
                    break;
                  case T[ax("0x55")]:
                    if (typeof this[ax("0x57")][ax("0x58")] !== T[ax("0x59")]) {
                      hV = ax("0x5a");
                      break
                    }
                    hV = "\x6c\x65\x69\x6d";
                    break
                }
              }
            });
            e = ax("0x3d");
            break;
          case T[ax("0x5b")]:
            this["\x6d\x61\x70"] = hS;
            e = T[ax("0x5c")];
            break;
          case T[ax("0x5d")]:
            hS["\x6f\x6e"](T[ax("0x5e")], function () {
              var hT = T[ax("0x5f")];
              while (T[ax("0x60")](hT, ax("0x61"))) {
                switch (hT) {
                  case T[ax("0x62")]:
                    f9[ax("0x52")] = null;
                    hT = T[ax("0x63")];
                    break;
                  case T[ax("0x5f")]:
                    for (var hV = 0, hU = i[ax("0x4a")]["\x6c\x65\x6e\x67\x74\x68"]; hV < hU; hV++) {
                      i[ax("0x4a")][hV][ax("0x54")] = ![]
                    }
                    hT = T[ax("0x64")];
                    break;
                  case T[ax("0x64")]:
                    if (typeof this[ax("0x57")]["\x73\x74\x79\x6c\x65"] !== T[ax("0x59")]) {
                      hT = "\x65\x6c\x78";
                      break
                    }
                    hT = ax("0x61");
                    break;
                  case T[ax("0x63")]:
                    f9[ax("0x65")] = [];
                    hT = "\x6c\x64\x63\x78";
                    break
                }
              }
            });
            e = ax("0x3a");
            break;
          case ax("0x66"):
            this["\x74\x65\x78\x74\x53\x69\x7a\x65\x52\x61\x74\x69\x6f"] = 2;
            e = T[ax("0x67")];
            break;
          case T["\x64\x61\x78\x65\x6c"]:
            if ((f5() || C[ax("0x68")]["\x69\x65"]) && hR > 2) {
              e = "\x6d\x69\x61";
              break
            }
            e = ax("0x42");
            break;
          case T[ax("0x69")]:
            this[ax("0x6a")] = this[ax("0x6b")];
            e = T["\x63\x65\x65\x63\x61"];
            break;
          case ax("0x6c"):
            hR = 2;
            e = T[ax("0x6d")];
            break;
          case ax("0x3f"):
            c0[ax("0x6e")](function (hY) {
              var hV = T[ax("0x6f")];
              while (hV !== ax("0x37")) {
                switch (hV) {
                  case ax("0x70"):
                    hU = bmapcfg.home + "/res/webgl/10/worker_asm_p0g4zg.js"; // 换成这个
                    hV = T["\x69\x64\x6c\x69\x69"];
                    break;
                  case "\x78\x63\x65":
                    var hU;
                    hV = "\x65\x68\x64";
                    break;
                  case "\x6c\x61\x65":
                    if (T["\x6c\x69\x65\x65\x63"](i[ax("0x4c")][ax("0x49")], 0)) {
                      hV = T[ax("0x71")];
                      break
                    }
                    hV = T[ax("0x72")];
                    break;
                  case ax("0x36"):
                    for (var hT = 0; hT < Math[ax("0x73")](i[ax("0x4c")][ax("0x49")], hR); hT++) {
                      var h0 = i[ax("0x4c")]["\x73\x68\x69\x66\x74"]();
                      i[ax("0x74")](h0[ax("0x75")], h0[ax("0x76")], h0[ax("0x77")], h0["\x63\x62\x6b"])
                    }
                    hV = T[ax("0x72")];
                    break;
                  case ax("0x35"):
                    for (var hZ = 0; hZ < hR; hZ++) {
                      var hX = eM(hU);
                      hX["\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65"] = function hW(h3) {
                        var h2 = "\x78\x64\x6d";
                        while (T["\x68\x63\x63\x6c\x64"](h2, "\x6d\x68\x61\x64")) {
                          switch (h2) {
                            case "\x64\x65\x63":
                              var h1 = new bb(ax("0x78"));
                              h2 = T[ax("0x79")];
                              break;
                            case ax("0x7a"):
                              h2 = h3[ax("0x7b")] ? T["\x68\x78\x65\x61\x69"] : ax("0x31");
                              break;
                            case "\x78\x65\x65":
                              this[ax("0x7c")] = null;
                              h2 = ax("0x7d");
                              break;
                            case ax("0x32"):
                              this[ax("0x7e")] = ![];
                              h2 = T[ax("0x7f")];
                              break;
                            case ax("0x80"):
                              var h5 = i["\x61\x72\x72\x50\x65\x6e\x64\x69\x6e\x67\x44\x61\x74\x61"][ax("0x81")]();
                              h2 = T[ax("0x82")];
                              break;
                            case ax("0x7d"):
                              this["\x5f\x70\x61\x72\x73\x69\x6e\x67\x54\x69\x6c\x65\x49\x6e\x66\x6f"] = null;
                              h2 = T[ax("0x83")];
                              break;
                            case ax("0x2e"):
                              var h4 = h5["\x63\x62\x6b"];
                              h2 = T["\x63\x65\x6d\x78\x6c"];
                              break;
                            case T[ax("0x84")]:
                              hS[ax("0x85")](h1);
                              h2 = ax("0x86");
                              break;
                            case T[ax("0x87")]:
                              if (T[ax("0x88")](i[ax("0x4c")][ax("0x49")], 0)) {
                                h2 = ax("0x80");
                                break
                              }
                              h2 = ax("0x89");
                              break;
                            case ax("0x8a"):
                              this[ax("0x8b")] = null;
                              h2 = T[ax("0x87")];
                              break;
                            case T[ax("0x8c")]:
                              this[ax("0x7c")] && this[ax("0x7c")](null, this[ax("0x8b")]);
                              h2 = T["\x64\x64\x61\x78\x65"];
                              break;
                            case ax("0x2c"):
                              this[ax("0x7c")] && this[ax("0x7c")](h3[ax("0x7b")], this[ax("0x8b")]);
                              h2 = T[ax("0x8d")];
                              break;
                            case ax("0x2b"):
                              h1[ax("0x8e")] = T[ax("0x8f")];
                              h2 = ax("0x30");
                              break;
                            case T[ax("0x90")]:
                              i[ax("0x74")](h5[ax("0x75")], h5[ax("0x76")], h5[ax("0x77")], h4);
                              h2 = "\x64\x65\x63";
                              break
                          }
                        }
                      };
                      i[ax("0x4a")][ax("0x91")](hX)
                    }
                    hV = T["\x65\x6d\x63\x78\x6c"];
                    break;
                  case ax("0x92"):
                    hU = bmapcfg.home + "/res/webgl/10/worker_wasm_0szpq3.js"; // 换成这个
                    hV = ax("0x35");
                    break;
                  case "\x65\x68\x64":
                    hV = hY ? ax("0x92") : ax("0x70");
                    break
                }
              }
            });
            e = ax("0x0");
            break;
          case T[ax("0x6d")]:
            this[ax("0x4a")] = [];
            e = T[ax("0x93")];
            break;
          case T["\x63\x65\x65\x63\x61"]:
            e = this[ax("0x6b")] > 1 ? ax("0x66") : "\x65\x65\x61";
            break;
          case T[ax("0x94")]:
            this[ax("0x95")] = 1;
            e = T["\x69\x78\x65\x64\x78"];
            break;
          case ax("0x43"):
            this[ax("0x6b")] = T[ax("0x96")](a6);
            e = T[ax("0x69")];
            break;
          case T[ax("0x97")]:
            var hR = navigator[ax("0x98")] || 4;
            e = T[ax("0x99")];
            break;
          case ax("0x45"):
            var i = this;
            e = "\x6c\x63\x64";
            break
        }
      }
    },
    "\x67\x65\x74\x49\x64\x6c\x65\x57\x6f\x72\x6b\x65\x72": function () {
      var hR = {
        "\x6d\x61\x61\x68\x65": ax("0x9a"),
        "\x6c\x69\x6d\x6d\x61": function (hU, hT) {
          return hU !== hT
        },
        "\x65\x6d\x69\x6d\x61": ax("0x9b"),
        "\x63\x6c\x64\x78\x68": ax("0x9c"),
        "\x64\x78\x65\x65\x78": ax("0x9d"),
        "\x65\x69\x61\x61\x65": ax("0x9e")
      };
      for (var T = 0, i = this["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][ax("0x49")]; T < i; T++) {
        var e = hR["\x6d\x61\x61\x68\x65"];
        while (hR[ax("0x9f")](e, hR[ax("0xa0")])) {
          switch (e) {
            case hR[ax("0xa1")]:
              hS["\x5f\x69\x73\x42\x75\x73\x79"] = !![];
              e = hR[ax("0xa2")];
              break;
            case ax("0x9d"):
              return hS;
            case hR[ax("0xa3")]:
              var hS = this["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][T];
              e = hR[ax("0xa4")];
              break;
            case ax("0x9e"):
              if (!hS[ax("0x7e")]) {
                e = hR[ax("0xa1")];
                break
              }
              e = ax("0x9b");
              break
          }
        }
      }
      return null
    },
    "\x72\x65\x6c\x65\x61\x73\x65\x50\x65\x6e\x64\x69\x6e\x67\x44\x61\x74\x61": function (hU) {
      var hS = {
        "\x6c\x61\x68\x64\x61": function (hX, hW) {
          return hX >= hW
        },
        "\x65\x63\x78\x61\x63": function (hX, hW) {
          return hX !== hW
        },
        "\x68\x61\x61\x6d\x69": function (hX, hW) {
          return hX + hW
        },
        "\x6d\x65\x6c\x63\x6d": function (hX, hW) {
          return hX + hW
        },
        "\x63\x65\x61\x65\x65": ax("0xa5")
      };
      var hV = [];
      var hT = this[ax("0x4c")];
      for (var hR = hT[ax("0x49")] - 1; hS[ax("0xa6")](hR, 0); hR--) {
        var T = hT[hR];
        var i = T["\x74\x69\x6c\x65\x49\x6e\x66\x6f"];
        if (hS[ax("0xa7")](hU[ax("0xa8")], i[ax("0xa8")])) {
          continue
        }
        var e = hS[ax("0xa9")](hS["\x6d\x65\x6c\x63\x6d"](hS["\x6d\x65\x6c\x63\x6d"](hS[ax("0xaa")](hS[ax("0xab")], i[ax("0xac")]), "\x5f"), i[ax("0xad")]), "\x5f") + i[ax("0xae")];
        if (!hU[e]) {
          hT[ax("0xaf")](hR, 1);
          hV[ax("0x91")](i)
        }
      }
      return hV
    },
    "\x6c\x6f\x61\x64\x54\x69\x6c\x65\x44\x61\x74\x61": function (hV, hT, hR, i) {
      var e = {
        "\x78\x65\x6c\x61\x64": ax("0xb0"),
        "\x69\x61\x68\x65\x78": ax("0xb1"),
        "\x68\x6d\x68\x68\x65": "\x61\x6d\x78",
        "\x61\x63\x63\x6c\x78": ax("0xb2"),
        "\x63\x63\x61\x63\x65": ax("0x3b"),
        "\x65\x65\x61\x78\x64": function (h3, h2) {
          return h3 + h2
        },
        "\x63\x63\x61\x6c\x63": "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x63\x6f\x6e\x53\x65\x74\x49\x6e\x66\x6f",
        "\x61\x65\x61\x65\x64": function (h2, h3) {
          return h2 + h3
        },
        "\x6d\x65\x6d\x63\x68": ax("0xb3"),
        "\x69\x6d\x61\x69\x63": ax("0xb4"),
        "\x65\x64\x63\x63\x63": ax("0xb5"),
        "\x65\x65\x6c\x6d\x6d": ax("0xb6"),
        "\x65\x65\x61\x61\x63": ax("0xb7"),
        "\x68\x6c\x6c\x64\x78": function (h3, h2) {
          return h3 + h2
        },
        "\x78\x61\x6d\x78\x65": "\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65",
        "\x64\x6d\x63\x61\x61": ax("0xb8"),
        "\x61\x64\x69\x61\x63": ax("0xb9"),
        "\x63\x63\x78\x69\x6c": ax("0xba"),
        "\x78\x6d\x64\x68\x78": ax("0x27"),
        "\x65\x61\x78\x6c\x65": ax("0xbb"),
        "\x61\x64\x65\x6d\x61": ax("0xbc"),
        "\x69\x6d\x68\x65\x61": ax("0xbd"),
        "\x68\x6d\x68\x65\x68": ax("0xbe"),
        "\x65\x69\x78\x6c\x64": ax("0x8a"),
        "\x65\x6c\x64\x64\x65": ax("0xbf"),
        "\x6c\x69\x78\x65\x78": function (h3, h2) {
          return h3 === h2
        },
        "\x69\x61\x68\x6c\x6c": ax("0xc0"),
        "\x69\x61\x61\x65\x6d": "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65",
        "\x78\x6d\x61\x65\x64": "\x64\x61\x63",
        "\x61\x65\x69\x69\x78": ax("0xc1"),
        "\x64\x61\x6d\x78\x78": ax("0xc2"),
        "\x69\x6c\x64\x64\x6d": function (h3, h2) {
          return h3 + h2
        },
        "\x64\x61\x69\x61\x61": ax("0xc3"),
        "\x65\x61\x6c\x6c\x64": ax("0xc4"),
        "\x65\x61\x65\x61\x64": "\x64\x6d\x65",
        "\x61\x6d\x65\x69\x68": function (h3, h2) {
          return h3 + h2
        },
        "\x64\x6d\x68\x68\x61": ax("0xc5"),
        "\x78\x6d\x69\x61\x65": ax("0xc6"),
        "\x78\x6c\x6d\x63\x65": ax("0xc7")
      };
      var h1 = ax("0x3b");
      while (h1 !== ax("0xc7")) {
        switch (h1) {
          case e[ax("0xc8")]:
            if (hY && f9[ax("0x52")]) {
              h1 = e["\x69\x61\x68\x65\x78"];
              break
            }
            h1 = ax("0xb5");
            break;
          case e[ax("0xc9")]:
            h0["\x69\x73\x53\x65\x6e\x64\x46\x53"] = !![];
            h1 = e["\x61\x63\x63\x6c\x78"];
            break;
          case e[ax("0xca")]:
            var h0 = this["\x67\x65\x74\x49\x64\x6c\x65\x57\x6f\x72\x6b\x65\x72"]();
            h1 = ax("0x2a");
            break;
          case ax("0xcb"):
            f9[e[ax("0xcc")](e[ax("0xcd")], hW)] = JSON[ax("0xce")](bo[e[ax("0xcf")](e[ax("0xd0")], hW)]);
            h1 = e[ax("0xd1")];
            break;
          case e["\x65\x64\x63\x63\x63"]:
            hZ[ax("0xd2")] = {
              "\x77\x6f\x72\x64\x53\x70\x61\x63\x65\x52\x61\x74\x69\x6f": this[ax("0x6a")],
              "\x74\x65\x78\x74\x53\x69\x7a\x65\x52\x61\x74\x69\x6f": this[ax("0x95")]
            };
            h1 = e[ax("0xd3")];
            break;
          case e[ax("0xd4")]:
            f9[e[ax("0xcf")]("\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65", hS)] = JSON[ax("0xce")](bo[e[ax("0xd5")](e[ax("0xd6")], hS)]);
            h1 = ax("0xbd");
            break;
          case e[ax("0xd7")]:
            f9[ax("0x52")] = JSON[ax("0xce")](bo[ax("0xd8")]);
            h1 = e[ax("0xd9")];
            break;
          case ax("0x35"):
            var hZ = {
              "\x61\x63\x74\x69\x6f\x6e": ax("0x74"),
              "\x75\x72\x6c": hV,
              "\x74\x69\x6c\x65\x49\x6e\x66\x6f": hT,
              "\x74\x69\x6c\x65\x4b\x65\x79": hR,
              "\x69\x73\x54\x65\x78\x74": T,
              "\x69\x73\x50\x6f\x69": hU
            };
            h1 = e[ax("0xda")];
            break;
          case ax("0xc5"):
            h0[ax("0x7c")] = i;
            h1 = ax("0x27");
            break;
          case "\x6d\x61\x65":
            if (!f9[ax("0x52")]) {
              h1 = ax("0xb8");
              break
            }
            h1 = e[ax("0xd9")];
            break;
          case e["\x78\x6d\x64\x68\x78"]:
            h0[ax("0xdb")] = hT;
            h1 = "\x61\x6d\x69";
            break;
          case ax("0xdc"):
            f9[ax("0xdd")] = JSON[ax("0xce")](bo[ax("0xde")]);
            h1 = ax("0xbc");
            break;
          case e[ax("0xdf")]:
            hZ["\x69\x63\x6f\x6e\x53\x65\x74\x49\x6e\x66\x6f"] = f9[e["\x68\x6c\x6c\x64\x78"]("\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x63\x6f\x6e\x53\x65\x74\x49\x6e\x66\x6f", hW)];
            h1 = ax("0xe0");
            break;
          case e[ax("0xe1")]:
            if (hY && bo[ax("0xd8")]) {
              h1 = ax("0xe2");
              break
            }
            h1 = ax("0xb9");
            break;
          case ax("0xe3"):
            hW = ax("0xe4");
            h1 = "\x6d\x78\x69";
            break;
          case e[ax("0xe5")]:
            if (!f9[e[ax("0xd5")](e[ax("0xcd")], hW)]) {
              h1 = ax("0xcb");
              break
            }
            h1 = ax("0xb4");
            break;
          case e["\x68\x6d\x68\x65\x68"]:
            if (hY) {
              h1 = ax("0xe3");
              break
            }
            h1 = e[ax("0xe6")];
            break;
          case e[ax("0xe7")]:
            var hY = !!e[ax("0xe8")](hS[ax("0xe9")](e[ax("0xea")]), 0);
            h1 = ax("0xc4");
            break;
          case e["\x65\x69\x78\x6c\x64"]:
            if (!h0[ax("0x54")]) {
              h1 = ax("0xeb");
              break
            }
            h1 = e[ax("0xec")];
            break;
          case ax("0xb6"):
            hZ[ax("0xed")] = hS;
            h1 = e[ax("0xc9")];
            break;
          case "\x68\x64\x78":
            h0[ax("0xee")](hZ);
            h1 = ax("0xc7");
            break;
          case e[ax("0xd9")]:
            if (f9[e[ax("0xef")] + hS]) {
              h1 = e["\x78\x6d\x61\x65\x64"];
              break
            }
            h1 = e["\x65\x61\x78\x6c\x65"];
            break;
          case e[ax("0xf0")]:
            var hX = {
              "\x75\x72\x6c": hV,
              "\x74\x69\x6c\x65\x49\x6e\x66\x6f": hT,
              "\x74\x69\x6c\x65\x4b\x65\x79": hR,
              "\x63\x62\x6b": i
            };
            h1 = e["\x64\x61\x6d\x78\x78"];
            break;
          case e[ax("0xf1")]:
            hZ[ax("0xf2")] = f9[e[ax("0xf3")](e[ax("0xef")], hS)];
            h1 = ax("0xbb");
            break;
          case e[ax("0xf4")]:
            hZ[ax("0xf5")] = f9[ax("0x52")];
            h1 = e[ax("0xf6")];
            break;
          case e["\x64\x61\x69\x61\x61"]:
            h0[ax("0x8b")] = hR;
            h1 = ax("0x35");
            break;
          case ax("0xb4"):
            if (!f9[ax("0xdd")]) {
              h1 = ax("0xdc");
              break
            }
            h1 = ax("0xbc");
            break;
          case e[ax("0xf7")]:
            var hW = hS;
            h1 = "\x68\x65\x65";
            break;
          case e[ax("0xf8")]:
            var hU = this["\x6d\x61\x70"][ax("0xf9")][ax("0xfa")];
            h1 = ax("0xfb");
            break;
          case ax("0xba"):
            var hS = this[ax("0xfc")][ax("0xfd")]();
            h1 = ax("0xbf");
            break;
          case ax("0xeb"):
            if (!f9[e[ax("0xfe")](ax("0xff"), hS)] && bo[e[ax("0xfe")](e["\x78\x61\x6d\x78\x65"], hS)]) {
              h1 = ax("0xb7");
              break
            }
            h1 = ax("0xbd");
            break;
          case ax("0xc6"):
            h1 = h0 ? e["\x64\x6d\x68\x68\x61"] : e["\x61\x65\x69\x69\x78"];
            break;
          case "\x78\x68\x69":
            hZ[ax("0xde")] = f9["\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x6e\x64\x6f\x6f\x72\x53\x74\x79\x6c\x65"];
            h1 = e["\x78\x65\x6c\x61\x64"];
            break;
          case ax("0xfb"):
            var T = hU ? this[ax("0xfc")][ax("0xf9")][ax("0x100")] : ![];
            h1 = e[ax("0x101")];
            break;
          case "\x64\x68\x69":
            this[ax("0x4c")]["\x70\x75\x73\x68"](hX);
            h1 = e[ax("0x102")];
            break
        }
      }
    }
  };
  C["\x65\x78\x74\x65\x6e\x64"](f9["\x70\x72\x6f\x74\x6f\x74\x79\x70\x65"], bf);

  function dT(i) {
    this.tileLayers = [];
    this.map = i;
    var e = this.config = b6[this.map.mapType];
    this.errorUrl = e.errorUrl;
    this.tileSize = e.tileSize;
    this.baseUnits = e.baseUnits;
    this.baseZoomLevel = e.zoomLevelBase;
    this.tileURLs = e.tileUrls;
    this.tilesInfoCache = {};
    this.loadDelay = 10;
    this._labelTextCanvas = null
  }
  bo.register(function (i) {
    if (i._renderType !== "webgl") {
      return
    }
    var e = i.tileMgr = new dT(i);
    i.addEventListener("addtilelayer", function (hR) {
      e.addWebGLLayer(hR.target)
    });
    i.addEventListener("removetilelayer", function (hR) {
      e.removeWebGLLayer(hR.target)
    });
    i.on("update", function T(hR) {
      if (!bo["FeatureStyle" + this.config.style] && !bo.customStyleLoaded) {
        return
      }
      e.loadLayersData({
        zoomChanged: hR.changedStatus.onzoom_changed ? true : false
      })
    });
    i.on("style_changed", function () {
      e.loadLayersData()
    })
  });
  C.extend(dT.prototype, {
    addWebGLLayer: function (hR) {
      this.tileLayers.push(hR);
      hR.initDrawData();
      if (this.tileLayers.length > 1) {
        for (var T = 1; T < this.tileLayers.length; T++) {
          if (this.tileLayers[T].isFlat) {
            this.map.setDisplayOptions({
              isFlat: true
            });
            break
          }
        }
      }
      var e = this.map.config.style;
      if (bo["FeatureStyle" + e]) {
        this.loadLayersData()
      } else {
        var hS = this;
        this.map.loadMapStyleFiles(function () {
          hS.loadLayersData()
        })
      }
    },
    removeWebGLLayer: function (hT) {
      var hU = false;
      for (var hS = 0, hR = this.tileLayers.length; hS < hR; hS++) {
        if (hT === this.tileLayers[hS]) {
          hU = true;
          this.tileLayers.splice(hS, 1);
          break
        }
      }
      if (hU === false) {
        return
      }
      hT.destroyDrawData();
      if (bo["FeatureStyle" + this.map.config.style]) {
        this.loadLayersData()
      }
      if (this.tileLayers.length === 1) {
        this.map.setDisplayOptions({
          isFlat: false
        })
      } else {
        var e = false;
        for (var hS = 1; hS < this.tileLayers.length; hS++) {
          if (this.tileLayers[hS].isFlat) {
            e = true;
            break
          }
        }
        this.map.setDisplayOptions({
          isFlat: e
        })
      }
      var T = new bb("onrefresh");
      T.source = "removewebgllayer";
      this.map.fire(T)
    },
    getLabelTextCanvas: function () {
      if (!this._labelTextCanvas) {
        this._labelTextCanvas = new v(this.map)
      }
      return this._labelTextCanvas
    },
    loadLayersData: function (i) {
      if (this.map.suspendLoad) {
        return
      }
      var hR = this;
      i = i || {};
      var T = !!i.zoomChanged;
      var e = (T === true || this.map.getTilt() > 50);
      if (!e) {
        if (!this.syncLoadTimer) {
          this.syncLoadTimer = setTimeout(function () {
            hR._loadLayersFromCache(T);
            hR.syncLoadTimer = null
          }, 40)
        }
      } else {
        this._loadLayersFromCache(T)
      }
      if (!hR.map.viewAnimationTime) {
        this.timer && window.clearTimeout(this.timer)
      }
      this.timer = window.setTimeout(function () {
        if (hR.map.viewAnimationTime) {
          if (new Date().getTime() - hR.map.viewAnimationTime < 1000) {
            return
          }
          hR.map.viewAnimationTime = new Date().getTime()
        }
        var hT = hR.tileLayers.length;
        hR.tilesInfoCache = {};
        for (var hU = 0; hU < hT; hU++) {
          var hW = hR.tileLayers[hU];
          var hV = hW.tileType;
          var hS = null;
          if (hR.tilesInfoCache[hV.getName()]) {
            hS = hR.tilesInfoCache[hV.getName()]
          } else {
            hS = hR.calcTilesInfo(hV);
            hR.tilesInfoCache[hV.getName()] = hS
          }
          hW.loadLayerData(hS, false, T)
        }
        hR.timer = null
      }, this.loadDelay);
      if ((f5() || C.Browser.ie) && T) {
        this.loadDelay = 200
      } else {
        this.loadDelay = 80
      }
    },
    _loadLayersFromCache: function (hS) {
      this.map._featureMgr.clearData();
      var hV = this.tileLayers;
      hV.sort(function (hW, i) {
        return hW.zIndex - i.zIndex > 0
      });
      var T = hV.length;
      this.tilesInfoCache = {};
      for (var hR = 0; hR < T; hR++) {
        var hU = hV[hR];
        var hT = hU.tileType;
        var e = null;
        if (this.tilesInfoCache[hT.getName()]) {
          e = this.tilesInfoCache[hT.getName()]
        } else {
          e = this.calcTilesInfo(hT);
          this.tilesInfoCache[hT.getName()] = e
        }
        hU.loadLayerData(e, true, hS)
      }
    },
    calcTilesInfo: function (h3) {
      var ih = this.map;
      var io = ih.getMapType();
      var ii = b6[io];
      var ia = ih.getZoom();
      var e = Math.floor(ia);
      var hU = h3.getDataZoom(ia);
      var iz = h3.getName();
      hU = fF(hU, ii.minDataZoom, ii.maxDataZoom);
      var ir = e;
      if (h3._name === "web") {
        ir = hU
      } else {
        if (ir < 3) {
          ir = 3
        }
      }
      var ig = h3.getTileSize(ia);
      var hT = h3.getBaseTileSize(ia);
      var h7 = h3.getMercatorSize(ia, hU);
      var h6;
      var ip;
      var ie;
      var iu;
      var ij = ih.getCenterIn();
      if (io !== BMAP_SATELLITE_MAP) {
        ij = d4.calcLoopCenterPoint(ij)
      }
      var ib = Math.floor(ij.lng / h7);
      var hW = Math.floor(ij.lat / h7);
      var ic = ih.getBoundsIn();
      var il = 0;
      var hR = 0;
      ic = d4.calcLoopMapBounds(ic, ih.getCenter());
      if (ic.ne.lng > d4._mc180X) {
        var h1 = d4.getSpaceDistanceInPixel(hU);
        il = Math.ceil(h1 / hT)
      }
      if (ic.sw.lng < d4._mcM180X) {
        var h1 = d4.getSpaceDistanceInPixel(hU);
        hR = Math.ceil(h1 / hT)
      }
      if (ic.ne.lat > 19505879.362428114 || ic.sw.lat < -15949096.637571886) {
        ic.ne.lat = 19505879.362428114;
        ic.sw.lat = -15949096.637571886
      }
      var hY = [Math.floor(ic.sw.lng / h7) - hR, Math.floor(ic.sw.lat / h7)];
      var ix = [Math.floor(ic.ne.lng / h7) + il, Math.floor(ic.ne.lat / h7)];
      h6 = hY[0];
      ip = ix[0] + 1;
      ie = hY[1];
      iu = ix[1] + 1;
      var h2 = [];
      for (var hZ = h6; hZ < ip; hZ++) {
        if (d4.isTileBlank(hZ, hU, hT) === true) {
          continue
        }
        for (var h4 = ie; h4 < iu; h4++) {
          var h0 = {
            col: hZ,
            row: h4,
            zoom: hU,
            useZoom: ir,
            tileTypeName: iz,
            loopOffsetX: 0,
            tileSize: ig,
            baseTileSize: hT,
            mercatorSize: h7
          };
          h2.push(h0);
          var im = "id_" + hZ + "_" + h4 + "_" + hU;
          h2[im] = true
        }
      }
      if (io !== BMAP_SATELLITE_MAP) {
        h2 = d4.calcLoopTiles(h2, hU, hT, h7)
      }
      if (hU === 3) {
        for (var iw = 0, iv = h2.length; iw < iv; iw++) {
          var hZ = h2[iw].col;
          var h4 = h2[iw].row;
          var iq = d4.calcLoopParam(hZ, hU);
          var hV = iq.T;
          var h8 = hZ >= 0 ? hZ - hV : hZ + hV;
          var h9 = "id_" + h8 + "_" + h4 + "_" + hU;
          if (!h2[h9]) {
            var h0 = {
              col: h8,
              row: h4,
              zoom: hU,
              useZoom: ir,
              loopOffsetX: 0,
              tileSize: ig,
              baseTileSize: hT,
              mercatorSize: h7
            };
            h2.push(h0);
            h2[h9] = true
          }
        }
      }
      if (this.map._tilt > 0) {
        for (var iw = 0; iw < h2.length; iw++) {
          var hX = h2[iw];
          var it = hX.col;
          var iy = hX.row;
          var ik = [];
          ik.minX = it * h7;
          ik.maxX = (it + 1) * h7;
          ik.minY = iy * h7;
          ik.maxY = (iy + 1) * h7;
          var hS = new hs(0, 0);
          hS.lng = (ik.minX + ik.maxX) / 2;
          hS.lat = (ik.minY + ik.maxY) / 2;
          var h5 = ih.pointToPixelIn(hS);
          if (h5.x > 0 && h5.x < this.map.width && h5.y > 0 && h5.y < this.map.height) {
            continue
          }
          if (ik.minX < ij.lng && ik.maxX > ij.lng && ik.minY < ij.lat && ik.maxY > ij.lat) {
            continue
          }
          if (!this.ifTileInMapBounds(ik, ic, it, iy)) {
            h2.splice(iw, 1);
            iw--
          }
        }
      }
      h2.sort((function (i) {
        return function (T, id) {
          return ((0.4 * Math.abs(T.col - i[0]) + 0.6 * Math.abs(T.row - i[1])) - (0.4 * Math.abs(id.col - i[0]) + 0.6 * Math.abs(id.row - i[1])))
        }
      })([ib, hW]));
      h2.zoom = hU;
      h2.tileTypeName = iz;
      return h2
    },
    getCurrentViewTilesInfo: function (i) {
      var e = this.tilesInfoCache[i.getName()];
      if (!e) {
        return this.calcTilesInfo(i)
      }
      return e
    },
    ifTileInMapBounds: function (e, hT, T, hS) {
      var i = hT.normalizedBottomLeft;
      var h4 = hT.normalizedTopRight;
      var hW = hT.normalizedTopLeft;
      var hU = hT.normalizedBottomRight;
      var hR = false;
      var h3 = new hs(e.minX, e.minY);
      var h0 = new hs(e.maxX, e.maxY);
      var hV = new hs(h0.lng, h3.lat);
      var h1 = new hs(h3.lng, h0.lat);
      var hY = [h1, h0, hV, h3];
      for (var h2 = 0, hX = hY.length; h2 < hX; h2++) {
        var hZ = h2 + 1;
        if (hZ === hX) {
          hZ = 0
        }
        var h5 = h2;
        var h6 = gx(hY[hZ], hY[h5], hW, i);
        if (h6) {
          hR = true;
          break
        }
        h6 = gx(hY[hZ], hY[h5], hU, h4);
        if (h6) {
          hR = true;
          break
        }
        h6 = gx(hY[hZ], hY[h5], h4, hW);
        if (h6) {
          hR = true;
          break
        }
        h6 = gx(hY[hZ], hY[h5], i, hU);
        if (h6) {
          hR = true;
          break
        }
      }
      return hR
    },
    getTileLayer: function (hS) {
      for (var hR = 0, e = this.tileLayers.length; hR < e; hR++) {
        var T = this.tileLayers[hR];
        if (T.mapType === hS) {
          return T
        }
      }
      return null
    }
  });

  function aS(e) {
    this._map = e;
    this._spotsId = null;
    this._init()
  }
  aS.prototype._init = function () {
    var e = this._map;
    e.addEventListener("onspotsdataready", function (T) {
      var i = T.spots;
      if (this._spotsId) {
        e.removeSpots(this._spotsId)
      }
      this._spotsId = e.addSpots(i)
    })
  };
  bo.register(function (e) {
    if (!e.config.enableIconClick) {
      return
    }
    e._mapIcon = new aS(e)
  });

  function aV(e) {
    this._indoorData = {};
    this._map = e;
    this.currentUid = null;
    this.currentFloor = null;
    this._indoorControl = null;
    this.enterMethod = null;
    this.showMask = false;
    this._isMobile = f5();
    this._autoEnterZoom = 19;
    if (this._isMobile) {
      this._autoEnterZoom = 17
    }
    this._init(e);
    window._indoorMgr = this
  }
  aV.prototype._init = function (i) {
    var e = this;
    i.on("indoor_status_changed", function (hU) {
      var T = hU.uid;
      var hS = hU.floor;
      if (T === null) {
        T = e.currentUid;
        if (e._indoorData[T]) {
          hS = e._indoorData[T].defaultFloor
        }
        if (e._indoorControl) {
          e._indoorControl.hide()
        }
        e.currentUid = null;
        e.currentFloor = null;
        e.enterMethod = null
      } else {
        if (e._indoorData[T]) {
          var hT = e._indoorData[T];
          hS = (typeof hS === "number") ? hS : hT.defaultFloor;
          if (!e._indoorControl) {
            if (i.config.showControls && i._displayOptions.indoor) {
              e._indoorControl = new gB(i, hT)
            }
          } else {
            e._indoorControl.setInfo(hT);
            e._indoorControl.show()
          }
          e.currentUid = T;
          e.currentFloor = hS
        }
      }
      if (!e._indoorData || !e._indoorData[T] || e._indoorData[T].currentFloor === hS) {
        this.fire(new bb("onrefresh"));
        return
      }
      var hR = new bb("onindoor_data_refresh");
      hR.uid = T;
      hR.floor = hS;
      hR.tileKey = e._indoorData[T].tileKey;
      e._indoorData[T].currentFloor = hS;
      e.currentFloor = hS;
      this.fire(hR)
    });
    i.on("spotclick", function (hR) {
      var T = null;
      if (hR.curAreaSpot && this.areaSpots[hR.curAreaSpot]) {
        T = this.areaSpots[hR.curAreaSpot].userData.uid
      }
      if (T === e.currentUid) {
        if (hR.curAreaSpot) {
          e.enterMethod = "byClick"
        }
        return
      }
      if (T === null) {
        if (e.currentUid && e.enterMethod === "byClick") {
          i.showIndoor(null);
          e.enterMethod = null
        }
      } else {
        e.enterMethod = "byClick";
        if (e.currentUid) {
          i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor)
        }
        i.showIndoor(T, e._indoorData[T].defaultFloor)
      }
    });
    i.on("moveend", function () {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove()
      }
    });
    i.on("zoomend", function () {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove()
      } else {
        if (e.enterMethod !== "byClick" && e.currentUid !== null) {
          this.showIndoor(null)
        }
      }
    })
  };
  aV.prototype._checkIndoorByMove = function () {
    var T = this._map;
    var hX = T.getSize();
    var h2 = {
      x: hX.width / 2,
      y: hX.height / 2
    };
    var h1 = Math.max(hX.width, hX.height);
    var h3 = [];
    for (var hY in this._indoorData) {
      var e = this._indoorData[hY].center;
      var hR = T.pointToPixelIn(new bo.Point(e[0], e[1]));
      var hU = gW(h2, hR);
      h3.push({
        uid: hY,
        distance: hU
      })
    }
    if (h3.length === 0) {
      return
    }
    h3.sort(function (h4, i) {
      return h4.distance - i.distance
    });
    var hT = h3[0];
    var hZ = T.getCenterIn();
    var hS = false;
    for (var hW = 0; hW < this._indoorData[hT.uid].contour.length; hW++) {
      if (dg([hZ.lng, hZ.lat], this._indoorData[hT.uid].contour[hW])) {
        hS = true;
        break
      }
    }
    if (hS === false && hT.uid === "e96b44200baa3b4082288acc") {
      var hV = this._indoorData[hT.uid].boundsMin;
      var h0 = this._indoorData[hT.uid].boundsMax;
      if (hZ.lng > hV[0] && hZ.lat > hV[1] && hZ.lng < h0[0] && hZ.lat < h0[1]) {
        hS = true
      }
    }
    if (hS) {
      if (this.enterMethod !== "byClick") {
        if (this.currentUid !== null && this.currentUid !== hT.uid) {
          this._map.showIndoor(this.currentUid, this._indoorData[this.currentUid].defaultFloor)
        }
        if (this.currentUid !== hT.uid) {
          this._map.showIndoor(hT.uid, this._indoorData[hT.uid].defaultFloor)
        }
        this.enterMethod = "byMove"
      }
    } else {
      if (this.enterMethod !== "byClick") {
        this._map.showIndoor(null)
      }
    }
  };
  aV.prototype.setData = function (hR) {
    if (hR === null) {
      return
    }
    for (var T in hR) {
      if (T === "tileInfo") {
        continue
      }
      var hS = hR[T].tileKey;
      if (this._indoorData[T]) {
        if (!this._indoorData[T][hS]) {
          this._indoorData[T].tileKeys.push(hS);
          this._indoorData[T][hS] = true
        }
      } else {
        this._indoorData[T] = hR[T];
        this._indoorData[T].tileKeys = [hR[T].tileKey];
        this._indoorData[T][hS] = true;
        for (var e = 0; e < this._indoorData[T].contour.length; e++) {
          this._map.addAreaSpot(this._indoorData[T].contour[e], {
            id: T + e,
            userData: {
              uid: T
            }
          })
        }
      }
    }
    if (this._map.getZoom() >= this._autoEnterZoom) {
      this._checkIndoorByMove()
    }
  };
  aV.prototype.removeData = function (T, hS) {
    if (!this._indoorData[T]) {
      return
    }
    var hR = this._indoorData[T];
    for (var e = 0; e < hR.tileKeys.length; e++) {
      if (hR.tileKeys[e] === hS) {
        hR.tileKeys.splice(e, 1);
        break
      }
    }
    delete hR[hS];
    if (hR.tileKeys.length === 0) {
      delete this._indoorData[T]
    }
  };
  aV.prototype.getIndoorData = function (e) {
    return this._indoorData[e] || null
  };
  aV.prototype.getData = function () {
    return this._indoorData
  };
  bo.register(function (e) {
    e._indoorMgr = new aV(e)
  });
  var el = (function () {
    var hR = {};
    var h0 = {};
    var hW = {};

    function hY(h2) {
      if (Object.prototype.toString.call(h2) === "[object Object]") {
        for (var h1 in h2) {
          return false
        }
        return true
      } else {
        return false
      }
    }

    function hX(h8, h9, ic, h5, ib) {
      var h1 = h1 || null;
      h5 = h5 || h1;
      var h3;
      if (h5) {
        h3 = hZ(h8, h9, ic, h5)
      } else {
        h3 = T(h8, h9, ic, ib)
      }
      var h7 = h3.drawId;
      var h2 = h3.style;
      var ia = h3.styleUpdate;
      var id = [];
      if (!h7) {
        return id
      }
      for (var h4 = 0; h4 < h7.length; h4++) {
        var h6 = ia[h7[h4]] || h2[h7[h4]];
        if (h6) {
          switch (h9) {
            case "polygon":
              h6 = hS(h6, h8);
              break;
            case "line":
              h6 = hV(h6, h8);
              break;
            case "pointText":
              h6 = hT(h6, h8);
              break;
            case "point":
              h6 = e(h6, h8);
              break;
            case "polygon3d":
              h6 = hU(h6, h8);
              break
          }
          if (h6) {
            h6.did = h7[h4];
            id[id.length] = h6
          }
        }
      }
      return id
    }

    function hZ(h2, h4, h5, h1) {
      var h3 = h1[2];
      switch (h4) {
        case "point":
          h3 = h3[0];
          break;
        case "pointText":
          h3 = h3[1];
          break;
        case "line":
          h3 = h3[3];
          break;
        case "polygon":
          h3 = h3[4];
          break;
        case "polygon3d":
          h3 = h3[5];
          break
      }
      var h7 = h5 - 1;
      if (h4 === "line" && h5 === 12) {
        h7 = h5
      }
      var h8 = h1[1][h7][0];
      var h6 = h8[h2];
      if (!h6) {
        if (h4 === "point" || h4 === "pointText") {
          h8 = h1[1][h5][0];
          h6 = h8[h2]
        }
      }
      return {
        drawId: h6,
        style: h3,
        styleUpdate: []
      }
    }

    function T(h5, h6, h9, h8) {
      if (!h8) {
        return {
          drawId: null,
          style: [],
          styleUpdate: []
        }
      }
      var h7;
      var h3 = h8.baseFs;
      h7 = h8.StyleBody || [];
      h7 = h8.zoomStyleBody[h9] || [];
      var h2 = h3[2];
      switch (h6) {
        case "point":
          h2 = h2[0];
          h7 = h7[0] || {};
          break;
        case "pointText":
          h2 = h2[1];
          h7 = h7[1] || {};
          break;
        case "line":
          h2 = h2[3];
          h7 = h7[3] || {};
          break;
        case "polygon":
          h2 = h2[4];
          h7 = h7[4] || {};
          break;
        case "polygon3d":
          h2 = h2[5];
          h7 = h7[5] || {};
          break
      }
      var h1 = h3[1][h9 - 1][0];
      var h4 = h1[h5];
      return {
        drawId: h4,
        style: h2,
        styleUpdate: h7
      }
    }

    function hT(h2, h1) {
      if (!h2 || h2.length === 0) {
        return null
      }
      return {
        sid: h1,
        fontRgba: i(h2[0]),
        haloRgba: i(h2[1]),
        backRgba: i(h2[2]),
        fontSize: h2[3],
        haloSize: h2[4],
        fontWeight: h2[5],
        fontStyle: h2[6],
        density: h2[7]
      }
    }

    function e(h2, h1) {
      return {
        sid: h1,
        rank: h2[0],
        ucflag: h2[1],
        icon: h2[2],
        iconType: h2[3],
        nineGG: h2[4],
        density: h2[5],
        zoom: h2[6]
      }
    }

    function hV(h2, h1) {
      return {
        sid: h1,
        borderRgba: i(h2[0]),
        fillRgba: i(h2[1]),
        borderWidth: h2[2],
        fillWidth: h2[3],
        borderCap: h2[4],
        fillCap: h2[5],
        haveBorderLine: h2[6],
        haveBorderTexture: h2[7],
        haveFillTexture: h2[8],
        isUseBorderRgba: h2[9],
        isUseFillRgba: h2[10],
        borderTexture: h2[11],
        fillTexture: h2[12],
        borderTextureType: h2[13],
        fillTextureType: h2[14],
        isRealWidth: h2[15],
        haveArrow: h2[16],
        needRound: h2[17],
        realBorderWidth: h2[18]
      }
    }

    function hS(h2, h1) {
      if (h1 === 2532) {}
      return {
        sid: h1,
        fillRgba: i(h2[0]),
        borderRgba: i(h2[1]),
        borderWidth: h2[2],
        borderTexture: h2[3],
        borderTextureType: h2[4],
        waterStyle: h2[5],
        haloStyle: h2[6],
        textureStyle: h2[7],
        thickRgba: i(h2[8])
      }
    }

    function hU(h2, h1) {
      return {
        sid: h1,
        filter: h2[0],
        ratio: h2[1],
        haveBorder: h2[2],
        borderWidth: h2[3],
        borderRgba: i(h2[4]),
        fillTop: i(h2[5]),
        fillSide: i(h2[6]),
        polyTexture: h2[7]
      }
    }

    function i(h6) {
      var h5 = h6;
      if (hW[h5]) {
        return hW[h5]
      }
      h6 = h6 >>> 0;
      var h4 = (h6) & 255;
      var h3 = (h6 >> 8) & 255;
      var h1 = (h6 >> 16) & 255;
      var h2 = (h6 >> 24) & 255;
      hW[h5] = [h4, h3, h1, h2];
      return hW[h5]
    }
    return {
      getStyleFromCache: function (h8, h3, h6, h7, h2, h5, h1) {
        h8 = h8 || "default";
        var h4 = h8 + "-" + h3 + "-" + h6 + "-" + h7;
        if (h5) {
          h4 += "-indoor"
        }
        if (h2) {
          if (!h0[h4]) {
            h0[h4] = hX(h3, h6, h7, h2)
          }
          return h0[h4]
        }
        if (!hR[h4]) {
          hR[h4] = hX(h3, h6, h7, h2, h1)
        }
        return hR[h4]
      }
    }
  })();
  bo.register(function (i) {
    var e = new dG(i)
  });

  function dG(e) {
    e.container.appendChild(this.render());
    this.bind(e)
  }
  dG.prototype.render = function () {
    var i = document.createElement("div");
    i.className = "click-ripple-container";
    var e = document.createElement("div");
    e.className = "click-ripple";
    i.appendChild(e);
    this._div = i;
    this._ripple = e;
    return i
  };
  dG.prototype.bind = function (i) {
    var e = this;
    i.addEventListener("spotclick", function (T) {
      if (!T.spots || T.spots.length === 0) {
        return
      }
      e._div.style.left = T.pixel.x + "px";
      e._div.style.top = T.pixel.y + "px";
      C.ac(e._ripple, "ripple-playing")
    });
    C.on(e._ripple, "transitionend", function () {
      C.rc(e._ripple, "ripple-playing")
    })
  };

  function f1(e) {
    ed.call(this);
    if (!e) {
      return
    }
    this._opts = {};
    this._map = e;
    this._maxLat = 84.6;
    this._minLat = -80.6;
    this._maxLatMC = en.convertLL2MC(new c4(this._maxLat, 0)).lat;
    this._minLatMC = en.convertLL2MC(new c4(this._minLat, 0)).lat
  }
  f1.inherits(ed, "ToolbarItem");
  C.extend(f1.prototype, {
    open: function () {
      if (this._isOpen == true) {
        return true
      }
      if (this._map._toolInUse) {
        return false
      }
      this._map._toolInUse = true;
      this._isOpen = true;
      return true
    },
    close: function () {
      if (!this._isOpen) {
        return
      }
      this._map._toolInUse = false;
      this._isOpen = false
    },
    _checkStr: function (e) {
      if (!e) {
        return ""
      }
      return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
  });

  function gL(T, i) {
    f1.call(this, T);
    i = i || {};
    this._opts = C.extend(C.extend(this._opts || {}, {
      autoClear: false,
      tips: "测距",
      followText: "单击确定起点，双击结束绘制",
      unit: "metric",
      showResult: true,
      lineColor: "blue",
      lineStroke: 2,
      opacity: 1,
      lineStyle: "solid",
      cursor: e3.distCursor,
      styleCodes: {
        lnCode: 0,
        spCode: 0,
        slCode: 0,
        tlCode: 0
      },
      enableMassClear: true
    }), i);
    if (this._opts.showResult === false) {
      if (typeof i.tips === "undefined") {
        this._opts.tips = "绘制折线"
      }
      if (!i.cursor) {
        this._opts.cursor = "crosshair"
      }
    }
    if (this._opts.lineStroke <= 0) {
      this._opts.lineStroke = 2
    }
    if (this._opts.opacity > 1) {
      this._opts.opacity = 1
    } else {
      if (this._opts.opacity < 0) {
        this._opts.opacity = 0
      }
    }
    if (this._opts.lineStyle !== "solid" && this._opts.lineStyle !== "dashed") {
      this._opts.lineStyle = "solid"
    }
    this._checked = false;
    this._drawing = null;
    this.followTitle = null;
    this._totalDis = {};
    this._points = [];
    this._paths = [];
    this._dots = [];
    this._segDistance = [];
    this._overlays = [];
    this._units = {
      metric: {
        name: "metric",
        conv: 1,
        incon: 1000,
        u1: "米",
        u2: "公里"
      },
      us: {
        name: "us",
        conv: 3.2808,
        incon: 5279.856,
        u1: "英尺",
        u2: "英里"
      }
    };
    if (!this._units[this._opts.unit]) {
      this._opts.unit = "metric"
    }
    this._dLineColor = "#ff6319";
    this._dLineStroke = 3;
    this._dOpacity = 0.8;
    this._dLineStyle = "solid";
    this._dCursor = e3.distCursor;
    if (this._opts.showResult) {
      this._opts.followText = "单击确定起点"
    }
    this._followTextM = "单击确定地点，双击结束";
    this._sectionMarkerTip = "单击可删除此点，拖拽可调整位置";
    this._movingTimerId = null;
    if (this._opts.showResult) {
      this.text = "测距"
    } else {
      this.text = "绘线"
    }
    this._isOpen = false;
    var e = this;
    ea.load("tools", function () {
      e._draw()
    })
  }
  gL.inherits(f1, "PolylineTItem");
  C.extend(gL.prototype, {
    setLineColor: function (e) {
      this._opts.lineColor = e
    },
    setLineStroke: function (e) {
      if (Math.round(e) > 0) {
        this._opts.lineStroke = Math.round(e)
      }
    },
    setOpacity: function (e) {
      if (e >= 0 && e <= 1) {
        this._opts.opacity = e
      }
    },
    setLineStyle: function (e) {
      if (e === "solid" || e === "dashed") {
        this._opts.lineStyle = e
      }
    },
    clear: function () {
      for (var T = 0, e = this._overlays.length; T < e; T++) {
        if (this._overlays[T]) {
          this._map.removeOverlay(this._overlays[T])
        }
      }
      this._overlays.length = 0;
      for (var T = 0, e = this._dots.length; T < e; T++) {
        if (this._dots[T] && this._dots[T].parentNode) {
          this._dots[T].parentNode.removeChild(this._dots[T])
        }
      }
      this._dots.length = 0
    },
    setCursor: function (e) {
      if (this._opts.showResult === true) {
        return
      }
      this._opts.cursor = e
    },
    getCursor: function () {
      if (this._opts.showResult === true) {
        return this._dCursor
      }
      var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
      if (e !== null) {
        return e[1]
      } else {
        return this._opts.cursor
      }
    },
    showResult: function (e) {
      this._opts.showResult = !!e
    }
  });

  function cu() {
    var hS = 3;
    var hZ = 256;
    var hR = Math.pow(2, 18 - hS) * hZ;
    var h0 = 2;
    var hY = (h0 + 1) * hR;
    var T = en.convertLL2MC(new hs(180, 0));
    var hW = T.lng;
    var hU = hY - hW;
    var hX = -3;
    var e = hX * hR;
    var hT = en.convertLL2MC(new hs(-180, 0));
    var hV = hT.lng;
    var i = hV - e;
    this._validPixels = hW / Math.pow(2, 18 - hS);
    this._mc180X = hW;
    this._mcM180X = hV;
    this._loopOffset = hU + i;
    this._mcTSpan = hW - hV;
    this._spaceDistance = hU;
    this._mSpaceDistance = i
  }
  cu.prototype = {
    calcLoopParam: function (hR, i, hY) {
      hY = hY || 256;
      var hV = 0;
      var hS = 3;
      var hU = 6;
      var hT = hU * Math.pow(2, (i - hS)) * 256 / hY;
      var hX = hT / 2 - 1;
      var hW = -hT / 2;
      while (hR > hX) {
        hR -= hT;
        hV -= this._loopOffset
      }
      while (hR < hW) {
        hR += hT;
        hV += this._loopOffset
      }
      var e = hV;
      hV = Math.round(hV / Math.pow(2, 18 - i));
      return {
        offsetX: hV,
        geoOffsetX: e,
        col: hR,
        T: hT,
        maxCol: hX,
        minCol: hW
      }
    },
    calcLoopCenterPoint: function (i) {
      var e = i.lng;
      while (e > this._mc180X) {
        e -= this._mcTSpan
      }
      while (e < this._mcM180X) {
        e += this._mcTSpan
      }
      i.lng = e;
      return i
    },
    calcLoopMapBounds: function (T, hR) {
      var i = hR || T.getCenter();
      var e = T.sw.lng;
      var hS = T.ne.lng;
      while (i.lng > this._mc180X) {
        i.lng -= this._mcTSpan;
        e -= this._mcTSpan;
        hS -= this._mcTSpan
      }
      while (i.lng < this._mcM180X) {
        i.lng += this._mcTSpan;
        e += this._mcTSpan;
        hS += this._mcTSpan
      }
      T.sw.lng = e;
      T.ne.lng = hS;
      if (T.pointBottomLeft) {
        T.pointBottomLeft = this.calcLoopCenterPoint(T.pointBottomLeft);
        T.pointTopLeft = this.calcLoopCenterPoint(T.pointTopLeft);
        T.pointTopRight = this.calcLoopCenterPoint(T.pointTopRight);
        T.pointBottomRight = this.calcLoopCenterPoint(T.pointBottomRight)
      }
      return T
    },
    calcLoopTiles: function (hZ, e, h3, hW) {
      h3 = h3 || 256;
      var hS = hW || Math.pow(2, 18 - e) * h3;
      var hY = Math.floor(this._mc180X / hS);
      var hU = Math.floor(this._mcM180X / hS);
      var h0 = Math.floor(this._loopOffset / hS);
      var h1 = [];
      for (var hV = 0; hV < hZ.length; hV++) {
        var h2 = hZ[hV];
        var hR = h2[0];
        var h4 = h2[1];
        if (hR >= hY) {
          var hX = hR + h0;
          if (this.isTileBlank(hX, e, h3) === true) {
            continue
          }
          var T = "id_" + hX + "_" + h4 + "_" + e;
          if (!hZ[T]) {
            hZ[T] = true;
            h1.push([hX, h4, e, 0])
          }
        } else {
          if (hR <= hU) {
            var hX = hR - h0;
            if (this.isTileBlank(hX, e, h3) === true) {
              continue
            }
            var T = "id_" + hX + "_" + h4 + "_" + e;
            if (!hZ[T]) {
              hZ[T] = true;
              h1.push([hX, h4, e, 0])
            }
          }
        }
      }
      for (var hV = 0, hT = h1.length; hV < hT; hV++) {
        hZ.push(h1[hV])
      }
      for (var hV = hZ.length - 1; hV >= 0; hV--) {
        var hR = hZ[hV][0];
        if (this.isTileBlank(hR, e, h3)) {
          hZ.splice(hV, 1)
        }
      }
      return hZ
    },
    isTileBlank: function (T, hS, e) {
      var hT = Math.pow(2, hS - 3);
      var i = Math.round(this._validPixels * hT);
      var hR = 6 * hT * 256 / e;
      while (T > hR / 2 - 1) {
        T -= hR
      }
      while (T < -(hR / 2)) {
        T += hR
      }
      if (T > 0 && T * e > i) {
        return true
      }
      if (T < 0 && Math.abs((T + 1) * e) > i) {
        return true
      }
      return false
    },
    isAddWidth: function (e, i) {
      return e < this._mcM180X || i > this._mc180X
    },
    getSpaceDistanceInPixel: function (i) {
      var e = Math.round((this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i));
      return e
    }
  };
  var d4 = new cu();
  var ce = (function () {
    var i = true;
    var hS = 256;
    var e = true;
    var hU = aD("ditu", "normalTraffic");
    var hR = hU.udt;
    var hV = "//its.map.baidu.com/traffic/";
    var hT = [
      [2, "79,210,125,1", 3, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 3, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 4, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 5, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 6, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 3, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 3, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 4, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 5, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 6, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 3, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 3, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 4, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 5, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 6, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 3, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 3, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 4, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 5, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 6, 2, 0, [], 0, 0],
      [2, "255,255,255,1", 4, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 5.5, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 7, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 8.5, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 10, 0, 0, [], 0, 0]
    ];
    var T = new cR({
      transparentPng: true,
      dataType: 2,
      cacheSize: 256,
      clipTile: true
    });
    T.zIndex = 2;
    T.getTilesUrl = function (hY, hZ) {
      if (!hY || hZ < 7) {
        return null
      }
      var hX = hY.x;
      var h0 = hY.y;
      var hW = hV + "?qt=vtraffic&z=" + hZ + "&x=" + hX + "&y=" + h0 + "&udt=" + hR;
      return hW
    };
    T.setColors = function (hW) {
      for (var hZ = 0; hZ < hT.length; hZ++) {
        var hY = Math.floor(hZ / 5);
        var hX = hW[hY];
        if (hX) {
          if (Object.prototype.toString.call(hX) === "[object String]") {
            hX = g0.parseCSSColor(hX)
          }
          hT[hZ][1] = [hX[0], hX[1], hX[2], hX[3] / 255].join(",")
        }
      }
    };
    T.setEdge = function (hW) {
      e = !!hW
    };
    T.processData = function (hZ) {
      var h3 = hZ.content;
      var h1 = 10;
      if (typeof hZ.precision === "number") {
        h1 = hZ.precision * 10
      }
      var ia = {
        road: [
          [],
          []
        ]
      };
      if (!h3) {
        return ia
      }
      var h8 = h3.tf;
      if (!h8) {
        return ia
      }
      for (var h0 = 0; h0 < h8.length; h0++) {
        var h9 = h8[h0][1];
        var h7 = [];
        var h5 = 0;
        var h4 = 0;
        var h6 = hT[h8[h0][3]];
        for (var hY = 0, hW = h9.length; hY < hW / 2; hY++) {
          h5 += h9[hY * 2] / h1;
          h4 += h9[hY * 2 + 1] / h1;
          h7.push(h5, 256 - h4)
        }
        var hX = h6[1].split(",");
        hX[3] = hX[3] * 255;
        var h2 = h6[2] / 2;
        if (e) {
          ia.road[0].push([h7, 1, 2, [255, 255, 255, 255], h2 + 2])
        }
        ia.road[1].push([h7, 1, 2, hX, h2])
      }
      return ia
    };
    return T
  })();
  bo.register(function (i) {
    if (i.config && i.config.isOverviewMap) {
      return
    }
    if (i.isLoaded()) {
      fC(i)
    } else {
      i.addEventListener("load", function () {
        fC(this)
      })
    }
    i.cityName = "中国";
    i.cCode = "1";
    var e = {};
    e.enableRequest = true;
    e.request = function () {
      if (e.enableRequest) {
        e.enableRequest = false;
        setTimeout(function () {
          e._request()
        }, 500)
      }
    };
    e._request = function () {
      var hR = i.getBoundsIn();
      var hT = i.getZoom();
      var T = hR.getSouthWest();
      var hS = hR.getNorthEast();
      cB.request(function (hX) {
        if (hX.current_city["code"] >= 9000 && hX.current_city["code"] <= 9378) {
          hX.current_city["name"] = "台湾省"
        }
        if (hX.current_city["code"] >= 20000 && hX.current_city["code"] <= 20499) {
          hX.current_city["name"] = "新加坡"
        }
        if (hX.current_city["code"] >= 20500 && hX.current_city["code"] <= 25999) {
          hX.current_city["name"] = "泰国"
        }
        if (hX.current_city["code"] >= 26000 && hX.current_city["code"] <= 29999) {
          hX.current_city["name"] = "日本"
        }
        if (hX.current_city["code"] >= 30000 && hX.current_city["code"] <= 30999) {
          hX.current_city["name"] = "韩国"
        }
        if (hX.current_city["code"] >= 31000 && hX.current_city["code"] <= 37000) {
          hX.current_city["name"] = "亚太"
        }
        if (hX.current_city["code"] >= 46609 && hX.current_city["code"] <= 52505) {
          hX.current_city["name"] = "欧洲"
        }
        if (hX.current_city["code"] >= 39509 && hX.current_city["code"] <= 53500) {
          hX.current_city["name"] = "南美洲"
        }
        if (hX.current_city["code"] >= 54000 && hX.current_city["code"] <= 70000) {
          hX.current_city["name"] = "北美洲"
        }
        if (hX.current_city["code"] === 54003 && hX.current_city["code"] >= 60731 && hX.current_city["code"] <= 61123) {
          hX.current_city["name"] = "美国"
        }
        if (hX.current_city["code"] === 54015 || hX.current_city["code"] >= 57970 && hX.current_city["code"] <= 60223) {
          hX.current_city["name"] = "加拿大"
        }
        if (hX.current_city["code"] === 54025 || hX.current_city["code"] >= 54338 && hX.current_city["code"] <= 57374) {
          hX.current_city["name"] = "墨西哥"
        }
        e.enableRequest = true;
        if (hX && hX.current_city) {
          var hW = hX.current_city["name"];
          var hV = hX.current_city["code"];
          if (hV !== i.cCode) {
            var hU = new bb("oncitychange");
            hU.name = hW;
            hU.code = hV;
            i.dispatchEvent(hU)
          }
          i.cityName = hW;
          i.cCode = hV;
          if (!f5()) {
            ev(i)
          }
        }
      }, {
        qt: "cen",
        b: T.lng + "," + T.lat + ";" + hS.lng + "," + hS.lat,
        l: hT
      }, "", "", true)
    };
    i.addEventListener("load", function (T) {
      e.request()
    });
    i.addEventListener("moveend", function (T) {
      e.request()
    });
    i.addEventListener("zoomend", function (T) {
      e.request()
    });
    e.request()
  });

  function fC(i) {
    if (i.temp.copyadded) {
      return
    }
    i.temp.copyadded = true;
    if (!i.cpyCtrl) {
      var hR = new d9(2, 2);
      i.config.cpyCtrlOffset = hR;
      if (f5()) {
        hR.width = 72;
        hR.height = 0
      }
      var T = new dH({
        offset: hR,
        printable: true
      });
      i.cpyCtrl = T
    }
    if (!f5()) {
      ev(i);
      i.addEventListener("maptypechange", function () {
        ev(i)
      })
    }
    i.addControl(T);
    var e = new af();
    e._opts = {
      printable: true
    };
    i.logoCtrl = e;
    i.addControl(e);
    i.addEventListener("resize", function () {
      if (this.getSize().width >= 300 && i.getSize().height >= 100) {
        e.show();
        T.setOffset(i.config.cpyCtrlOffset)
      } else {
        e.hide();
        T.setOffset(new d9(4, 2))
      }
    });
    if (i.getSize().width >= 300 && i.getSize().height >= 100) {
      e.show()
    } else {
      e.hide();
      T.setOffset(new d9(4, 2))
    }
    i.addEventListener("oncopyrightoffsetchange", function (hS) {
      i.logoCtrl.setOffset(hS.target.logo);
      i.cpyCtrl.setOffset(hS.target.cpy)
    });
    i.dispatchEvent(new bb("oncopyrightaddend"))
  }

  function ev(h6) {
    if (!h6.cpyCtrl) {
      var ie = new d9(2, 2);
      if (f5()) {
        ie.width = 72;
        ie.height = 0
      }
      var h9 = new dH({
        offset: ie,
        printable: true
      });
      h6.cpyCtrl = h9
    }
    var ip = h6.cityName || "中国";
    var h7 = h6.getMapType();
    var h8 = ["常州市", "南昌市", "乌鲁木齐市", "无锡市", "福州市", "泉州市", "珠海市", "贵阳市"];
    var h0 = ["北京市", "上海市", "广州市", "深圳市", "宁波市", "石家庄市", "沈阳市", "长春市", "青岛市", "温州市", "台州市", "金华市", "佛山市", "中山市", "昆明市", "南宁市", "苏州市", "西安市", "济南市", "郑州市", "合肥市", "呼和浩特市", "杭州市", "成都市", "武汉市", "长沙市", "天津市", "南京市", "重庆市", "大连市", "东莞市", "厦门市"];
    var h2 = ["香港特别行政区"];
    var hW = ["台湾省"];
    var ig = ["日本"];
    var im = ["韩国"];
    var ia = ["泰国"];
    var id = ["亚太"];
    var hX = ["新加坡"];
    var io = ["欧洲"];
    var hR = ["南美洲"];
    var ij = ["北美洲"];
    var T = ["美国"];
    var ic = ["墨西哥"];
    var hU = ["加拿大"];
    for (var ik in h8) {
      if (h8[ik] === ip) {
        var h3 = true;
        break
      }
    }
    for (var ik in h0) {
      if (h0[ik] === ip) {
        var hS = true;
        break
      }
    }
    for (var ik in h2) {
      if (h2[ik] === ip) {
        var ir = true;
        break
      }
    }
    if (hW[0] === ip) {
      var ii = true
    }
    if (hX[0] === ip) {
      var i = true
    }
    if (ig[0] === ip) {
      var hZ = true
    }
    if (im[0] === ip) {
      var h5 = true
    }
    if (ia[0] === ip) {
      var h4 = true
    }
    if (id[0] === ip) {
      var hV = true
    }
    if (io[0] === ip) {
      var h1 = true
    }
    if (hR[0] === ip) {
      var hY = true
    }
    if (ij[0] === ip) {
      var e = true
    }
    if (T[0] === ip) {
      var il = true
    }
    if (hU[0] === ip) {
      var ih = true
    }
    if (ic[0] === ip) {
      var hT = true
    }
    var iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "];
    var ib = "rgba(255, 255, 255, 0.701961)";
    if (h6.getZoom() <= 9) {
      iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
    } else {
      if (ii) {
        iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
      } else {
        if (hZ || h5) {
          iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
        } else {
          if (i || h4) {
            iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
          } else {
            if (hV) {
              iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
            } else {
              if (h1) {
                iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
              } else {
                if (hY) {
                  iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                } else {
                  if (e) {
                    iq = ["&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                  }
                }
              }
            }
          }
        }
      }
    }
    if (h6.getZoom() <= 9) {
      iq.push("长地万方");
      iq.push(' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
      iq.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
      if (h7 === BMAP_SATELLITE_MAP || h7 === BMAP_HYBRID_MAP) {
        iq.push(' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>');
        ib = "rgba(0,0,0,.7)"
      }
    } else {
      if (hZ || h5) {
        iq.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>')
      } else {
        if (i || h4) {
          iq.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>')
        } else {
          if (hV) {
            iq.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
            iq.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
          } else {
            if (h1) {
              iq.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
              iq.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
            } else {
              if (hY) {
                iq.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                iq.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
              } else {
                if (il || hT || ih) {
                  iq.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                  iq.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                } else {
                  if (e) {
                    iq.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                    iq.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                  } else {
                    iq.push("长地万方");
                    if (h3) {
                      iq.push(' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>')
                    }
                    if (ir) {
                      iq.push(' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>')
                    }
                    if (ii) {
                      iq.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                      iq.push(' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>')
                    }
                    if (h7 === BMAP_SATELLITE_MAP || h7 === BMAP_HYBRID_MAP) {
                      ib = "rgba(0,0,0,.7)"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    iq.unshift('<span style="background: ' + ib + ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">');
    iq.push("</span>");
    iq = iq.join("");
    h6.cpyCtrl.addCopyright({
      id: 1,
      content: iq
    })
  }
  window.BMAP_STATUS_SUCCESS = 0;
  window.BMAP_STATUS_CITY_LIST = 1;
  window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
  window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
  window.BMAP_STATUS_INVALID_KEY = 4;
  window.BMAP_STATUS_INVALID_REQUEST = 5;
  window.BMAP_STATUS_PERMISSION_DENIED = 6;
  window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
  window.BMAP_STATUS_TIMEOUT = 8;
  window.BMAP_ROUTE_TYPE_WALKING = 2;
  window.BMAP_ROUTE_TYPE_DRIVING = 3;
  window.BMAP_ROUTE_TYPE_RIDING = 6;
  window.BMAP_ROUTE_STATUS_NORMAL = 0;
  window.BMAP_ROUTE_STATUS_EMPTY = 1;
  window.BMAP_ROUTE_STATUS_ADDRESS = 2;
  var eF = "cur";
  var b2 = "cen";
  var em = "s";
  var P = "con";
  var dM = "bd";
  var gd = "nb";
  var hI = "bt";
  var cP = "nav";
  var ek = "walk";
  var hE = "gc";
  var fL = "rgc";
  var ex = "dec";
  var fb = "bse";
  var fm = "nse";
  var g = "bl";
  var bc = "bsl";
  var bp = "bda";
  var X = "sa";
  var aA = "nba";
  var bZ = "drag";
  var H = "ext";
  var aP = "hip";
  var R = "ride";
  var fQ = "drct";
  var gp = 2;
  var fN = 4;
  var g7 = 7;
  var g5 = 11;
  var fx = 12;
  var hC = 14;
  var bQ = 15;
  var dJ = 18;
  var fe = 20;
  var cI = 21;
  var co = 19;
  var e8 = 23;
  var ci = 26;
  var ao = 28;
  var ei = 31;
  var cF = 35;
  var gh = 44;
  var hP = 45;
  var eI = 46;
  var cD = 47;
  var gy = -1;
  var gX = 0;
  var hc = 1;
  var cm = 2;
  var b8 = 3;
  window.BMAP_POI_TYPE_NORMAL = 0;
  var Q = 1;
  var cc = 2;
  BMapGL.I = C.I;
  var O = {};
  O.removeHtml = function (e) {
    e = e.replace(/<\/?[^>]*>/g, "");
    e = e.replace(/[ | ]* /g, " ");
    return e
  };
  O.parseGeoExtReg1 = function (e) {
    return e.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
  };
  O.parseGeoExtReg2 = function (i, e) {
    var T = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + e + "}", "ig");
    return i.replace(T, "$1")
  };
  var fv = 0;
  var cH = 1;
  var g8 = 2;
  O.unique = function (T) {
    var hT = false;
    var hS = [];
    var hU = {};
    for (var hR = 0, e = T.length; hR < e; hR++) {
      if (!hU[T[hR]]) {
        hU[T[hR]] = true;
        hS.push(T[hR])
      }
    }
    return hS
  };
  O.getBestLevel = function (T, i) {
    if (i) {
      var e = Math.min(i.width / 1100, i.height / 660);
      T = Math.round(T + (Math.log(e) / Math.log(2)))
    }
    if (T < 1) {
      T = 1
    }
    if (T > 21) {
      T = 21
    }
    return T
  };
  O.parseGeo = function (hU, hX) {
    if (typeof hU != "string" || !hU) {
      return
    }
    var hZ = hU.split("|");
    var e;
    var hS;
    var T;
    if (hZ.length == 1) {
      e = ga(hU)
    } else {
      e = ga(hZ[2]);
      hS = ga(hZ[0]);
      T = ga(hZ[1]);
      if (!hX) {
        return e
      }
    }
    var hV = {
      type: e.geoType
    };
    if (hX) {
      switch (hV.type) {
        case g8:
          var hW = new hs(e.geo[0][0], e.geo[0][1]);
          var hY = en.convertMC2LL(hW);
          hV.point = hY;
          hV.points = [hY];
          break;
        case cH:
          hV.points = [];
          var h0 = e.geo[0];
          for (var hT = 0, hR = h0.length - 1; hT < hR; hT += 2) {
            var h1 = new hs(h0[hT], h0[hT + 1]);
            h1 = en.convertMC2LL(h1);
            hV.points.push(h1)
          }
          hS = new hs(hS.geo[0][0], hS.geo[0][1]);
          T = new hs(T.geo[0][0], T.geo[0][1]);
          hS = en.convertMC2LL(hS);
          T = en.convertMC2LL(T);
          hV.bounds = new dS(hS, T);
          break;
        default:
          break
      }
    }
    return hV
  };
  O.parseGeoExt = function (ia, h1) {
    if (!h1) {
      h1 = 0
    } else {
      if (h1 < 0.25) {
        h1 = 0
      } else {
        if (h1 > 0.25 && h1 < 1) {
          h1 = 1
        } else {
          if (h1 > 32) {
            h1 = 32
          }
        }
      }
    }
    var hW = ia.split("|");
    if (hW.length == 1) {
      var hR = ga(hW[0]);
      return {
        type: hR.type,
        bound: "",
        points: hR.geo.join(",")
      }
    } else {
      if (hW.length > 1) {
        var h2 = ia.split(";.=");
        var hY = [];
        var hS = [];
        var h3 = 0;
        var h7 = h2.length;
        for (var h4 = 0; h4 < h7; h4++) {
          var h9 = h2[h4];
          if (h7 > 1) {
            if (h4 == 0) {
              h9 = h9 + ";"
            }
            if (h4 > 0 && h4 < h7 - 1) {
              h9 = ".=" + h9 + ";"
            }
            if (h4 == h7 - 1) {
              h9 = ".=" + h9
            }
          }
          var hT = h9.split("|");
          var h6 = ga(hT[0]);
          var h5 = ga(hT[1]);
          hY.push(h6.geo.join(","));
          hY.push(h5.geo.join(","));
          var hR = ga(hT[2]);
          h3 = hR.type;
          var h8 = hR.geo.join(",");
          h8 = O.parseGeoExtReg1(h8);
          if (h1 > 0) {
            h8 = O.parseGeoExtReg2(h8, h1)
          }
          hS.push(h8)
        }
        if (h7 <= 1) {
          hS = hS.join(";")
        }
        if (h7 == 2) {
          var T = hS[0] + ";" + hS[1];
          var hU = T.split(";");
          var e = [];
          for (var h4 = 0; h4 < hU.length; h4++) {
            var hX = hU[h4].split(",")[0];
            var hV = hU[h4].split(",")[1];
            var hZ = new hs(hX, hV);
            var h0 = en.convertMC2LL(hZ);
            e.push(h0)
          }
          hS = e
        }
        return {
          type: h3,
          bound: hY.join(";"),
          points: hS
        }
      }
    }
  };
  O.getPoiPoint = function (e) {
    var T = [];
    var i = null;
    if (e.toString() == "Point") {
      i = e
    } else {
      if (typeof e == "string") {
        T = C.trim(e).split(",");
        if (T.length < 2) {
          return
        }
        T[0] = parseFloat(C.trim(T[0]));
        T[1] = parseFloat(C.trim(T[1]))
      } else {
        T = e.slice(0);
        if (T.length < 2) {
          return
        }
      }
      i = new BMap.Point(T[0], T[1])
    }
    return i
  };
  O.parseGeoStr = function (T) {
    var i = T.split(",");
    var e = new hs(i[0], i[1]);
    return en.convertMC2LL(e)
  };
  O.level = {
    country: 4,
    province: 11,
    city: 12,
    area: 13
  };
  var hJ = ["=", ".", "-", "*"];
  var f4 = 1 << 23;

  function ga(hX) {
    var hW = a9(hX.charAt(0));
    var T = hX.substr(1);
    var hZ = 0;
    var e = T.length;
    var h0 = [];
    var hU = [];
    var hV = [];
    while (hZ < e) {
      if (T.charAt(hZ) == hJ[0]) {
        if ((e - hZ) < 13) {
          return 0
        }
        hV = aL(T.substr(hZ, 13), h0);
        if (hV < 0) {
          return 0
        }
        hZ += 13
      } else {
        if (T.charAt(hZ) == ";") {
          hU.push(h0.slice(0));
          h0.length = 0;
          ++hZ
        } else {
          if ((e - hZ) < 8) {
            return 0
          }
          hV = c6(T.substr(hZ, 8), h0);
          if (hV < 0) {
            return 0
          }
          hZ += 8
        }
      }
    }
    for (var hT = 0, hR = hU.length; hT < hR; hT++) {
      for (var hS = 0, hY = hU[hT].length; hS < hY; hS++) {
        hU[hT][hS] /= 100
      }
    }
    return {
      geoType: hW,
      geo: hU
    }
  }

  function a9(i) {
    var e = -1;
    if (i == hJ[1]) {
      e = g8
    } else {
      if (i == hJ[2]) {
        e = cH
      } else {
        if (i == hJ[3]) {
          e = fv
        }
      }
    }
    return e
  }

  function aL(hS, T) {
    var e = 0;
    var hU = 0;
    var hT = 0;
    for (var hR = 0; hR < 6; hR++) {
      hT = cO(hS.substr(1 + hR, 1));
      if (hT < 0) {
        return -1 - hR
      }
      e += hT << (6 * hR);
      hT = cO(hS.substr(7 + hR, 1));
      if (hT < 0) {
        return -7 - hR
      }
      hU += hT << (6 * hR)
    }
    T.push(e);
    T.push(hU);
    return 0
  }

  function c6(hT, hR) {
    var T = hR.length;
    if (T < 2) {
      return -1
    }
    var e = 0;
    var hV = 0;
    var hU = 0;
    for (var hS = 0; hS < 4; hS++) {
      hU = cO(hT.substr(hS, 1));
      if (hU < 0) {
        return -1 - hS
      }
      e += hU << (6 * hS);
      hU = cO(hT.substr(4 + hS, 1));
      if (hU < 0) {
        return -5 - hS
      }
      hV += hU << (6 * hS)
    }
    if (e > f4) {
      e = f4 - e
    }
    if (hV > f4) {
      hV = f4 - hV
    }
    hR.push(hR[T - 2] + e);
    hR.push(hR[T - 1] + hV);
    return 0
  }

  function cO(i) {
    var e = i.charCodeAt(0);
    if (i >= "A" && i <= "Z") {
      return e - "A".charCodeAt(0)
    } else {
      if (i >= "a" && i <= "z") {
        return (26 + e - "a".charCodeAt(0))
      } else {
        if (i >= "0" && i <= "9") {
          return (52 + e - "0".charCodeAt(0))
        } else {
          if (i == "+") {
            return 62
          } else {
            if (i == "/") {
              return 63
            }
          }
        }
      }
    }
    return -1
  }
  O.pathToPoints = function (hT) {
    var hR = [];
    if (typeof hT !== "string") {
      return hR
    } else {
      var hS = hT.split(";");
      for (var T = 0; T < hS.length; T++) {
        var e = hS[T].split(",");
        hR.push(new hs(e[0], e[1]))
      }
    }
    return hR
  };
  window.BMAP_POI_TYPE_NORMAL = 0;
  window.BMAP_POI_TYPE_BUSSTOP = 1;
  window.BMAP_POI_TYPE_BUSLINE = 2;
  window.BMAP_POI_TYPE_SUBSTOP = 3;
  window.BMAP_POI_TYPE_SUBLINE = 4;
  var hv = 0;
  var fW = 1;
  var c3 = {};
  window.APIPack = c3;

  function fA(i, e) {
    ed.call(this);
    this._loc = {};
    this.setLocation(i);
    e = e || {};
    e.renderOptions = e.renderOptions || {};
    this._opts = {
      renderOptions: {
        panel: e.renderOptions.panel || null,
        map: e.renderOptions.map || null,
        autoViewport: e.renderOptions.autoViewport || true,
        selectFirstResult: e.renderOptions.selectFirstResult,
        highlightMode: e.renderOptions.highlightMode,
        enableDragging: e.renderOptions.enableDragging || false
      },
      onSearchComplete: e.onSearchComplete || function () {},
      onMarkersSet: e.onMarkersSet || function () {},
      onInfoHtmlSet: e.onInfoHtmlSet || function () {},
      onResultsHtmlSet: e.onResultsHtmlSet || function () {},
      onGetBusListComplete: e.onGetBusListComplete || function () {},
      onGetBusLineComplete: e.onGetBusLineComplete || function () {},
      onBusListHtmlSet: e.onBusListHtmlSet || function () {},
      onBusLineHtmlSet: e.onBusLineHtmlSet || function () {},
      onPolylinesSet: e.onPolylinesSet || function () {},
      reqFrom: e.reqFrom || ""
    };
    if (typeof e != "undefined" && typeof e.renderOptions != "undefined" && typeof e.renderOptions["autoViewport"] != "undefined") {
      this._opts.renderOptions.autoViewport = e.renderOptions["autoViewport"]
    } else {
      this._opts.renderOptions.autoViewport = true
    }
    this._opts.renderOptions.panel = C.G(this._opts.renderOptions.panel)
  }
  fA.inherits(ed, "BaseSearch");
  C.extend(fA.prototype, {
    getResults: function () {
      if (!this._isMultiKey) {
        return this._results
      } else {
        return this._arrResults
      }
    },
    enableAutoViewport: function () {
      this._opts.renderOptions.autoViewport = true
    },
    disableAutoViewport: function () {
      this._opts.renderOptions.autoViewport = false
    },
    setLocation: function (e) {
      if (!e) {
        return
      }
      this._loc.src = e
    },
    setSearchCompleteCallback: function (e) {
      this._opts.onSearchComplete = e || function () {}
    },
    setMarkersSetCallback: function (e) {
      this._opts.onMarkersSet = e || function () {}
    },
    setPolylinesSetCallback: function (e) {
      this._opts.onPolylinesSet = e || function () {}
    },
    setInfoHtmlSetCallback: function (e) {
      this._opts.onInfoHtmlSet = e || function () {}
    },
    setResultsHtmlSetCallback: function (e) {
      this._opts.onResultsHtmlSet = e || function () {}
    },
    getStatus: function () {
      return this._status
    }
  });
  var dN = function (T, i) {
    fA.call(this, T, i);
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this.setPageCapacity(i.pageCapacity);
    if (typeof i.renderOptions["selectFirstResult"] != "undefined" && !i.renderOptions["selectFirstResult"]) {
      this.disableFirstResultSelection()
    } else {
      this.enableFirstResultSelection()
    }
    this._overlays = [];
    this._arrPois = [];
    this._curIndex = -1;
    this._queryList = [];
    var e = this;
    ea.load("localSearch", function () {
      e._check()
    }, true)
  };
  dN.inherits(fA, "LocalSearch");
  dN.DEFAULT_PAGE_CAPACITY = 10;
  dN.MIN_PAGE_CAPACITY = 1;
  dN.MAX_PAGE_CAPACITY = 100;
  dN.DEFAULT_RADIUS = 2000;
  dN.MAX_RADIUS = 100000;
  C.extend(dN.prototype, {
    search: function (e, i) {
      this._queryList.push({
        method: "search",
        arguments: [e, i]
      })
    },
    searchInBounds: function (e, T, i) {
      this._queryList.push({
        method: "searchInBounds",
        arguments: [e, T, i]
      })
    },
    searchNearby: function (T, i, e, hR) {
      this._queryList.push({
        method: "searchNearby",
        arguments: [T, i, e, hR]
      })
    },
    clearResults: function () {
      delete this._json;
      delete this._status;
      delete this._results;
      delete this._ud;
      this._curIndex = -1;
      this._setStatus();
      if (this._opts.renderOptions.panel) {
        this._opts.renderOptions.panel.innerHTML = ""
      }
    },
    gotoPage: function () {},
    enableFirstResultSelection: function () {
      this._opts.renderOptions.selectFirstResult = true
    },
    disableFirstResultSelection: function () {
      this._opts.renderOptions.selectFirstResult = false
    },
    setPageCapacity: function (e) {
      if (typeof e == "number" && !isNaN(e)) {
        this._opts.pageCapacity = e < 1 ? dN.DEFAULT_PAGE_CAPACITY : (e > dN.MAX_PAGE_CAPACITY ? dN.DEFAULT_PAGE_CAPACITY : e)
      } else {
        this._opts.pageCapacity = dN.DEFAULT_PAGE_CAPACITY
      }
    },
    getPageCapacity: function () {
      return this._opts.pageCapacity
    },
    toString: function () {
      return "LocalSearch"
    }
  });

  function V(i) {
    this._opts = {};
    C.extend(this._opts, i);
    this._queryList = [];
    var e = this;
    ea.load("otherSearch", function () {
      e._asyncSearch()
    })
  }
  V.inherits(ed, "Geocoder");
  C.extend(V.prototype, {
    getPoint: function (e, T, i) {
      this._queryList.push({
        method: "getPoint",
        arguments: [e, T, i]
      })
    },
    getLocation: function (e, T, i) {
      this._queryList.push({
        method: "getLocation",
        arguments: [e, T, i]
      })
    },
    toString: function () {
      return "Geocoder"
    }
  });

  function cS(e) {
    e = e || {};
    this.config = {
      timeout: e.timeout || 1000 * 10,
      maximumAge: e.maximumAge || 0,
      enableHighAccuracy: e.enableHighAccuracy || false,
      SDKLocation: e.SDKLocation || false
    };
    this._pendingCalls = [];
    var i = this;
    ea.load("otherSearch", function () {
      var T = i._pendingCalls.length;
      for (var hR = 0; hR < T; hR++) {
        var hS = i._pendingCalls[hR];
        i[hS.method].apply(i, hS.arguments)
      }
    })
  }
  C.extend(cS.prototype, {
    getCurrentPosition: function (e, i) {
      this._pendingCalls.push({
        method: "getCurrentPosition",
        arguments: arguments
      })
    },
    getStatus: function () {
      return BMAP_STATUS_UNKNOWN_LOCATION
    },
    enableSDKLocation: function () {
      if (f5()) {
        this.config.SDKLocation = true
      }
    },
    disableSDKLocation: function () {
      this.config.SDKLocation = false
    }
  });

  function gz() {
    this._queryList = [];
    var e = this;
    ea.load("otherSearch", function () {
      e._asyncSearch()
    })
  }
  gz.inherits(ed, "Boundary");
  C.extend(gz.prototype, {
    get: function (i, e) {
      this._queryList.push({
        method: "get",
        arguments: [i, e]
      })
    },
    toString: function () {
      return "Boundary"
    }
  });

  function W(i) {
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this._opts = {
      renderOptions: {
        map: i.renderOptions.map || null
      }
    };
    this._queryList = [];
    var e = this;
    ea.load("otherSearch", function () {
      e._asyncSearch()
    })
  }
  W.inherits(ed, "LocalCity");
  C.extend(W.prototype, {
    get: function (e) {
      this._queryList.push({
        method: "get",
        arguments: [e]
      })
    },
    toString: function () {
      return "LocalCity"
    }
  });

  function cN(e, T) {
    ed.call(this);
    this.markersList = [];
    this.destList = [];
    this.pointsList = [];
    this._opts = T;
    this.json = e;
    this.map = this._opts.renderOptions.map || null;
    this.sType = this._opts.sType;
    this.infoWindow = null;
    this.curPointIndex = 0;
    this.startName = "";
    this.endIndex = 1;
    this.endName = "";
    this.resCity = [0, 0, 0, 0, 0, 0, 0];
    this.locPois = [];
    this.curPageIndex = [1, 1, 1, 1, 1, 1, 1];
    this.totalPage = [1, 1, 1, 1, 1, 1, 1];
    this.resCount = [0, 0, 0, 0, 0, 0, 0];
    this.resType = [0, 0, 0, 0, 0, 0, 0];
    this.qInfo = [{
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }, {
      n: "",
      c: 0,
      u: 0,
      x: 0,
      y: 0,
      t: -1
    }];
    this.curSelectedIndex = -1;
    this.tpList = [];
    this.tpListInMap = [];
    var i = this;
    ea.load("route", function () {})
  }
  cN.inherits(ed, "RouteAddr");

  function d2(T, i) {
    fA.call(this, T, i);
    this.QUERY_TYPE_BUSLIST = g;
    this.RETURN_TYPE_BUSLIST = bQ;
    this.QUERY_TYPE_BUSLINE = bc;
    this.RETURN_TYPE_BUSLINE = dJ;
    this._queryList = [];
    var e = this;
    ea.load("buslineSearch", function () {
      e._asyncSearch()
    })
  }
  var bn = e3.staticHost + "/wolfman/static/common/images/";
  d2._iconOpen = e3.apiIMG + "/iw_plus.gif";
  d2._iconClose = e3.apiIMG + "/iw_minus.gif";
  d2._stopUrl = bn + "new/bus-stop-1x_ddd4723.png";
  d2.inherits(fA, "BusLineSearch");
  C.extend(d2.prototype, {
    getBusList: function (e) {
      this._queryList.push({
        method: "getBusList",
        arguments: [e]
      })
    },
    getBusLine: function (e) {
      this._queryList.push({
        method: "getBusLine",
        arguments: [e]
      })
    },
    setGetBusListCompleteCallback: function (e) {
      this._opts.onGetBusListComplete = e || function () {}
    },
    setGetBusLineCompleteCallback: function (e) {
      this._opts.onGetBusLineComplete = e || function () {}
    },
    setBusListHtmlSetCallback: function (e) {
      this._opts.onBusListHtmlSet = e || function () {}
    },
    setBusLineHtmlSetCallback: function (e) {
      this._opts.onBusLineHtmlSet = e || function () {}
    },
    setPolylinesSetCallback: function (e) {
      this._opts.onPolylinesSet = e || function () {}
    }
  });

  function g2(i) {
    fA.call(this, i);
    i = i || {};
    this._options = {
      input: i.input || null,
      baseDom: i.baseDom || null,
      types: i.types || [],
      onSearchComplete: i.onSearchComplete || function () {}
    };
    this._loc.src = i.location || "全国";
    this._word = "";
    this._show = false;
    this._suggestion = null;
    this._inputValue = "";
    this._initialize();
    var e = this;
    ea.load("autocomplete", function () {
      e._asyncSearch()
    }, true)
  }
  g2.inherits(fA, "Autocomplete");
  C.extend(g2.prototype, {
    _initialize: function () {},
    show: function () {
      this._show = true
    },
    hide: function () {
      this._show = false
    },
    setTypes: function (e) {
      this._options.types = e
    },
    setLocation: function (e) {
      this._loc.src = e
    },
    search: function (e) {
      this._word = e
    },
    setInputValue: function (e) {
      this._inputValue = e
    },
    setSearchCompleteCallback: function (e) {
      this._options.onSearchComplete = e
    }
  });
  var hf = function (i, e) {
    fA.call(this, i, e)
  };
  C.inherit(hf, fA, "BaseRoute");
  C.extend(hf.prototype, {
    clearResults: function () {}
  });
  window.BMAP_TRANSIT_POLICY_RECOMMEND = 0;
  window.BMAP_TRANSIT_POLICY_LEAST_TIME = 4;
  window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1;
  window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 2;
  window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3;
  window.BMAP_TRANSIT_POLICY_FIRST_SUBWAYS = 5;
  window.BMAP_LINE_TYPE_BUS = 0;
  window.BMAP_LINE_TYPE_SUBWAY = 1;
  window.BMAP_LINE_TYPE_FERRY = 2;
  window.BMAP_LINE_TYPE_TRAIN = 3;
  window.BMAP_LINE_TYPE_AIRPLANE = 4;
  window.BMAP_LINE_TYPE_COACH = 5;
  var dk = 3;
  var fj = 4;
  var hy = 1;
  var dZ = 2;
  var gP = 5;
  var g6 = 6;
  window.BMAP_TRANSIT_TYPE_IN_CITY = 0;
  window.BMAP_TRANSIT_TYPE_CROSS_CITY = 1;
  window.BMAP_TRANSIT_PLAN_TYPE_ROUTE = 0;
  window.BMAP_TRANSIT_PLAN_TYPE_LINE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_TRAIN = 0;
  window.BMAP_TRANSIT_TYPE_POLICY_AIRPLANE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_COACH = 2;
  window.BMAP_INTERCITY_POLICY_LEAST_TIME = 0;
  window.BMAP_INTERCITY_POLICY_EARLY_START = 1;
  window.BMAP_INTERCITY_POLICY_CHEAP_PRICE = 2;

  function bI(T, i) {
    hf.call(this, T, i);
    i = i || {};
    this.setPolicy(i.policy);
    this.setIntercityPolicy(i.intercityPolicy);
    this.setTransitTypePolicy(i.transitTypePolicy);
    this.setPageCapacity(i.pageCapacity);
    this.QUERY_TYPE = hI;
    this.RETURN_TYPE = hC;
    this.ROUTE_TYPE = fW;
    this._overlays = [];
    this._curIndex = -1;
    this._opts._enableTraffic = i.enableTraffic || false;
    this._queryList = [];
    var e = this;
    ea.load("route", function () {
      e._asyncSearch()
    }, true)
  }
  bI.MAX_PAGE_CAPACITY = 100;
  bI.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  bI.LINE_TYPE_MAPPING_CROSS_CITY = [0, 3, 4, 0, 0, 0, 5];
  C.inherit(bI, hf, "TransitRoute");
  C.extend(bI.prototype, {
    setPolicy: function (e) {
      if (e >= BMAP_TRANSIT_POLICY_RECOMMEND && e <= BMAP_TRANSIT_POLICY_FIRST_SUBWAYS) {
        this._opts.policy = e
      } else {
        this._opts.policy = BMAP_TRANSIT_POLICY_RECOMMEND
      }
    },
    setIntercityPolicy: function (e) {
      if (e >= BMAP_INTERCITY_POLICY_LEAST_TIME && e <= BMAP_INTERCITY_POLICY_CHEAP_PRICE) {
        this._opts.intercityPolicy = e
      } else {
        this._opts.intercityPolicy = BMAP_INTERCITY_POLICY_LEAST_TIME
      }
    },
    setTransitTypePolicy: function (e) {
      if (e >= BMAP_TRANSIT_TYPE_POLICY_TRAIN && e <= BMAP_TRANSIT_TYPE_POLICY_COACH) {
        this._opts.transitTypePolicy = e
      } else {
        this._opts.transitTypePolicy = BMAP_TRANSIT_TYPE_POLICY_TRAIN
      }
    },
    _internalSearch: function (i, e) {
      this._queryList.push({
        method: "_internalSearch",
        arguments: [i, e]
      })
    },
    search: function (i, e) {
      this._queryList.push({
        method: "search",
        arguments: [i, e]
      })
    },
    setPageCapacity: function (e) {
      if (typeof e === "string") {
        e = parseInt(e, 10);
        if (isNaN(e)) {
          this._opts.pageCapacity = bI.MAX_PAGE_CAPACITY;
          return
        }
      }
      if (typeof e !== "number") {
        this._opts.pageCapacity = bI.MAX_PAGE_CAPACITY;
        return
      }
      if (e >= 1 && e <= bI.MAX_PAGE_CAPACITY) {
        this._opts.pageCapacity = Math.round(e)
      } else {
        this._opts.pageCapacity = bI.MAX_PAGE_CAPACITY
      }
    },
    toString: function () {
      return "TransitRoute"
    },
    _shortTitle: function (e) {
      return e.replace(/\(.*\)/, "")
    }
  });
  window.BMAP_HIGHLIGHT_STEP = 1;
  window.BMAP_HIGHLIGHT_ROUTE = 2;
  var cK = function (e, hR) {
    hf.call(this, e, hR);
    this._overlays = [];
    this._curIndex = -1;
    this._queryList = [];
    var T = this;
    var i = this._opts.renderOptions;
    if (i.highlightMode !== BMAP_HIGHLIGHT_STEP && i.highlightMode !== BMAP_HIGHLIGHT_ROUTE) {
      i.highlightMode = BMAP_HIGHLIGHT_STEP
    }
    this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
    ea.load("route", function () {
      T._asyncSearch()
    }, true);
    if (this.init_d) {
      this.init_d()
    }
  };
  cK.ROAD_TYPE = ["", "环岛", "无属性道路", "主路", "高速连接路", "交叉点内路段", "连接道路", "停车场内部道路", "服务区内部道路", "桥", "步行街", "辅路", "匝道", "全封闭道路", "未定义交通区域", "POI连接路", "隧道", "步行道", "公交专用道", "提前右转道"];
  C.inherit(cK, hf, "DWRoute");
  C.extend(cK.prototype, {
    search: function (T, e, i) {
      this._queryList.push({
        method: "search",
        arguments: [T, e, i]
      })
    }
  });
  window.BMAP_DRIVING_POLICY_DEFAULT = 0;
  window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 3;
  window.BMAP_DRIVING_POLICY_FIRST_HIGHWAYS = 4;
  window.BMAP_DRIVING_POLICY_AVOID_CONGESTION = 5;
  window.BMAP_TRAFFICE_STATUS_NONE = 0;
  window.BMAP_TRAFFICE_STATUS_NORMAL = 1;
  window.BMAP_TRAFFICE_STATUS_SLOW = 2;
  window.BMAP_TRAFFICE_STATUS_JAM = 3;

  function fE(e, i) {
    cK.call(this, e, i);
    i = i || {};
    this._opts._enableTraffic = i.enableTraffic || false;
    this.setPolicy(i.policy);
    this.QUERY_TYPE = cP;
    this.RETURN_TYPE = fe;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
  }
  C.inherit(fE, cK, "DrivingRoute");
  fE.prototype.setPolicy = function (e) {
    if (e >= BMAP_DRIVING_POLICY_DEFAULT && e <= BMAP_DRIVING_POLICY_AVOID_CONGESTION) {
      this._opts.policy = e
    } else {
      this._opts.policy = BMAP_DRIVING_POLICY_DEFAULT
    }
  };

  function ba(e, i) {
    cK.call(this, e, i);
    this.QUERY_TYPE = ek;
    this.RETURN_TYPE = ei;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
    this._enableDragging = false
  }
  C.inherit(ba, cK, "WalkingRoute");

  function bm(e, i) {
    cK.call(this, e, i);
    this.QUERY_TYPE = R;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_RIDING;
    this._enableDragging = false
  }
  C.inherit(bm, cK, "RidingRoute");
  window.BMAP_MODE_DRIVING = "driving";
  window.BMAP_MODE_TRANSIT = "transit";
  window.BMAP_MODE_WALKING = "walking";
  window.BMAP_MODE_NAVIGATION = "navigation";
  var be = {
    web: "//api.map.baidu.com/direction?",
    android: "bdapp://map/direction?",
    ios: "baidumap://map/direction?"
  };

  function ht(e) {
    this.opts = e || {}
  }
  C.extend(ht.prototype, {
    routeCall: function (hR, e, T) {
      var i = this;
      ea.load("route", function () {
        i._asyncSearch(hR, e, T)
      })
    }
  });
  bo.Map = c8;
  bo.MapType = b6;
  bo.Point = hs;
  bo.Pixel = ej;
  bo.Size = d9;
  bo.Bounds = dS;
  bo.TileLayer = cR;
  bo.Copyright = c5;
  bo.Projection = bo.Project = en;
  bo.Convertor = az;
  bo.RenderTypeUtils = a8;
  bo.Overlay = bl;
  bo.Label = fP;
  bo.Marker = aC;
  bo.Icon = hb;
  bo.Polyline = ak;
  bo.BezierCurve = fn;
  bo.PolylineMultipart = fl;
  bo.Polygon = g4;
  bo.Prism = cg;
  bo.Marker3D = cv;
  bo.GroundOverlay = cp;
  bo.InfoWindow = an;
  bo.SimpleInfoWindow = hH;
  bo.Circle = dF;
  bo.Control = a7;
  bo.NavigationControl = dt;
  bo.NavigationControl3D = eU;
  bo.CopyrightControl = dH;
  bo.ScaleControl = hh;
  bo.CityListControl = eb;
  bo.MapTypeControl = bC;
  bo.ZoomControl = cy;
  bo.LocationControl = bA;
  bo.LogoControl = af;
  bo.DistanceTool = gL;
  bo.ContextMenu = cf;
  bo.MenuItem = fy;
  bo.OperationMask = eh;
  bo.Animation = o;
  bo.ViewAnimation = cM;
  bo.Transitions = cn;
  bo.Event = bb;
  bo.trafficLayer = ce;
  bo.Geolocation = cS;
  bo.Geocoder = V;
  bo.Boundary = gz;
  bo.LocalCity = W;
  bo.LocalSearch = dN;
  bo.Autocomplete = g2;
  bo.BusLineSearch = d2;
  bo.WalkingRoute = ba;
  bo.RidingRoute = bm;
  bo.DrivingRoute = fE;
  bo.TransitRoute = bI;
  bo.RouteSearch = ht;

  function d1(e, i) {
    for (var T in i) {
      e[T] = i[T]
    }
  }
  bo.verify();
  bo.apiLoad();
})(BMapGL, "BMapGL");