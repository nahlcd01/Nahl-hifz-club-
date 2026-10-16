(function() {
  if (!Object.fromEntries) {
    Object.fromEntries = function(es) {
      var o2 = {};
      for (var i2 = 0; i2 < es.length; i2++) {
        o2[es[i2][0]] = es[i2][1];
      }
      return o2;
    };
  }
  if (!Promise.allSettled) {
    Promise.allSettled = function(ps) {
      return Promise.all(Array.prototype.map.call(ps, function(p2) {
        return Promise.resolve(p2).then(function(v2) {
          return { status: "fulfilled", value: v2 };
        }, function(r2) {
          return { status: "rejected", reason: r2 };
        });
      }));
    };
  }
  if (typeof queueMicrotask !== "function") {
    window.queueMicrotask = function(cb) {
      Promise.resolve().then(cb).catch(function(e2) {
        setTimeout(function() {
          throw e2;
        }, 0);
      });
    };
  }
  try {
    let getCk2 = function() {
      var m2 = document.cookie.match(new RegExp("(?:^|; )" + CK + "=([^;]*)"));
      return m2 ? decodeURIComponent(m2[1]) : null;
    }, setCk2 = function(v2) {
      var d2 = /* @__PURE__ */ new Date();
      d2.setTime(d2.getTime() + 30 * 864e5);
      document.cookie = CK + "=" + encodeURIComponent(v2) + ";expires=" + d2.toUTCString() + ";path=/;SameSite=Lax";
    }, clearCk2 = function() {
      document.cookie = CK + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax";
    };
    var getCk = getCk2, setCk = setCk2, clearCk = clearCk2;
    var KEY = "nahl.session", CK = "nahl_sess";
    var ls = null;
    try {
      ls = localStorage.getItem(KEY);
    } catch (e2) {
    }
    if (ls) {
      setCk2(ls);
    } else {
      var c2 = getCk2();
      if (c2) {
        try {
          localStorage.setItem(KEY, c2);
        } catch (e2) {
        }
      }
    }
    setInterval(function() {
      try {
        var v2 = localStorage.getItem(KEY);
        if (v2) {
          if (getCk2() !== v2) setCk2(v2);
        } else if (getCk2()) {
          clearCk2();
        }
      } catch (e2) {
      }
    }, 4e3);
  } catch (e2) {
  }
})();
(function() {
  try {
    var applyPc = function(on) {
      document.documentElement.classList.toggle("pc", !!on);
      var mv = document.querySelector('meta[name="viewport"]');
      if (mv) mv.setAttribute("content", on ? "width=1280" : "width=device-width, initial-scale=1.0, viewport-fit=cover");
      try { localStorage.setItem("nahl.pcmode", on ? "1" : "0"); } catch (e) {}
    };
    window.__nahlTogglePc = function() { applyPc(!document.documentElement.classList.contains("pc")); };
    if (localStorage.getItem("nahl.pcmode") === "1") applyPc(true);
  } catch (e) {}
})();
(function() {
  ["nahl.teachers", "nahl.students"].forEach(function(key) {
    try {
      let arr = JSON.parse(localStorage.getItem(key) || "[]");
      if (!Array.isArray(arr)) return;
      let changed = false;
      arr.forEach(function(x2) {
        if (x2 && x2.photo && String(x2.photo).length > 6e4) {
          x2.photo = null;
          changed = true;
        }
      });
      if (changed) localStorage.setItem(key, JSON.stringify(arr));
    } catch (e2) {
    }
  });
  try {
    let s2 = JSON.parse(localStorage.getItem("nahl.session") || "null");
    if (s2 && s2.photo && String(s2.photo).length > 6e4) {
      s2.photo = null;
      localStorage.setItem("nahl.session", JSON.stringify(s2));
    }
  } catch (e2) {
  }
})();
var e = (e2, t2) => () => (t2 || (e2((t2 = { exports: {} }).exports, t2), e2 = null), t2.exports);
(function() {
  let e2 = document.createElement(`link`).relList;
  if (e2 && e2.supports && e2.supports(`modulepreload`)) return;
  for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e3);
  new MutationObserver((e3) => {
    for (let t3 of e3) if (t3.type === `childList`) for (let e4 of t3.addedNodes) e4.tagName === `LINK` && e4.rel === `modulepreload` && n2(e4);
  }).observe(document, { childList: true, subtree: true });
  function t2(e3) {
    let t3 = {};
    return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), t3.credentials = e3.crossOrigin === `use-credentials` ? `include` : e3.crossOrigin === `anonymous` ? `omit` : `same-origin`, t3;
  }
  function n2(e3) {
    if (e3.ep) return;
    e3.ep = true;
    let n3 = t2(e3);
    fetch(e3.href, n3);
  }
})();
var t = e(((e2) => {
  var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.portal`), r2 = /* @__PURE__ */ Symbol.for(`react.fragment`), i2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a2 = /* @__PURE__ */ Symbol.for(`react.profiler`), o2 = /* @__PURE__ */ Symbol.for(`react.consumer`), s2 = /* @__PURE__ */ Symbol.for(`react.context`), c2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l2 = /* @__PURE__ */ Symbol.for(`react.suspense`), u2 = /* @__PURE__ */ Symbol.for(`react.memo`), d2 = /* @__PURE__ */ Symbol.for(`react.lazy`), f2 = /* @__PURE__ */ Symbol.for(`react.activity`), p2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), m2 = Symbol.iterator;
  function h2(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = m2 && e3[m2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var g2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _2 = Object.assign, v2 = {};
  function y2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = v2, this.updater = n3 || g2;
  }
  y2.prototype.isReactComponent = {}, y2.prototype.setState = function(e3, t3) {
    if (typeof e3 != `object` && typeof e3 != `function` && e3 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e3, t3, `setState`);
  }, y2.prototype.forceUpdate = function(e3) {
    this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
  };
  function b2() {
  }
  b2.prototype = y2.prototype;
  function ee2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = v2, this.updater = n3 || g2;
  }
  var te2 = ee2.prototype = new b2();
  te2.constructor = ee2, _2(te2, y2.prototype), te2.isPureReactComponent = true;
  var ne2 = Array.isArray;
  function x2() {
  }
  var S2 = { H: null, A: null, T: null, S: null }, re2 = Object.prototype.hasOwnProperty;
  function C2(e3, n3, r3) {
    var i3 = r3.ref;
    return { $$typeof: t2, type: e3, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
  }
  function ie2(e3, t3) {
    return C2(e3.type, t3, e3.props);
  }
  function ae2(e3) {
    return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
  }
  function oe2(e3) {
    var t3 = { "=": `=0`, ":": `=2` };
    return `$` + e3.replace(/[=:]/g, function(e4) {
      return t3[e4];
    });
  }
  var w2 = /\/+/g;
  function se2(e3, t3) {
    return typeof e3 == `object` && e3 && e3.key != null ? oe2(`` + e3.key) : t3.toString(36);
  }
  function ce2(e3) {
    switch (e3.status) {
      case `fulfilled`:
        return e3.value;
      case `rejected`:
        throw e3.reason;
      default:
        switch (typeof e3.status == `string` ? e3.then(x2, x2) : (e3.status = `pending`, e3.then(function(t3) {
          e3.status === `pending` && (e3.status = `fulfilled`, e3.value = t3);
        }, function(t3) {
          e3.status === `pending` && (e3.status = `rejected`, e3.reason = t3);
        })), e3.status) {
          case `fulfilled`:
            return e3.value;
          case `rejected`:
            throw e3.reason;
        }
    }
    throw e3;
  }
  function le2(e3, r3, i3, a3, o3) {
    var s3 = typeof e3;
    (s3 === `undefined` || s3 === `boolean`) && (e3 = null);
    var c3 = false;
    if (e3 === null) c3 = true;
    else switch (s3) {
      case `bigint`:
      case `string`:
      case `number`:
        c3 = true;
        break;
      case `object`:
        switch (e3.$$typeof) {
          case t2:
          case n2:
            c3 = true;
            break;
          case d2:
            return c3 = e3._init, le2(c3(e3._payload), r3, i3, a3, o3);
        }
    }
    if (c3) return o3 = o3(e3), c3 = a3 === `` ? `.` + se2(e3, 0) : a3, ne2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(w2, `$&/`) + `/`), le2(o3, r3, i3, ``, function(e4) {
      return e4;
    })) : o3 != null && (ae2(o3) && (o3 = ie2(o3, i3 + (o3.key == null || e3 && e3.key === o3.key ? `` : (`` + o3.key).replace(w2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
    c3 = 0;
    var l3 = a3 === `` ? `.` : a3 + `:`;
    if (ne2(e3)) for (var u3 = 0; u3 < e3.length; u3++) a3 = e3[u3], s3 = l3 + se2(a3, u3), c3 += le2(a3, r3, i3, s3, o3);
    else if (u3 = h2(e3), typeof u3 == `function`) for (e3 = u3.call(e3), u3 = 0; !(a3 = e3.next()).done; ) a3 = a3.value, s3 = l3 + se2(a3, u3++), c3 += le2(a3, r3, i3, s3, o3);
    else if (s3 === `object`) {
      if (typeof e3.then == `function`) return le2(ce2(e3), r3, i3, a3, o3);
      throw r3 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c3;
  }
  function T2(e3, t3, n3) {
    if (e3 == null) return e3;
    var r3 = [], i3 = 0;
    return le2(e3, r3, ``, ``, function(e4) {
      return t3.call(n3, e4, i3++);
    }), r3;
  }
  function ue2(e3) {
    if (e3._status === -1) {
      var t3 = e3._result, n3 = t3();
      n3.then(function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4, n3.status === void 0 && (n3.status = `fulfilled`, n3.value = t4));
      }, function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4, n3.status === void 0 && (n3.status = `rejected`, n3.reason = t4));
      }), e3._status === -1 && (e3._status = 0, e3._result = n3);
    }
    if (e3._status === 1) return e3._result.default;
    throw e3._result;
  }
  var de2 = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  };
  function fe2(e3) {
    var t3 = S2.T, n3 = {};
    n3.types = t3 === null ? null : t3.types, S2.T = n3;
    try {
      var r3 = e3(), i3 = S2.S;
      i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(x2, de2);
    } catch (e4) {
      de2(e4);
    } finally {
      t3 !== null && n3.types !== null && (t3.types = n3.types), S2.T = t3;
    }
  }
  function pe2(e3) {
    var t3 = S2.T;
    if (t3 !== null) {
      var n3 = t3.types;
      n3 === null ? t3.types = [e3] : n3.indexOf(e3) === -1 && n3.push(e3);
    } else fe2(pe2.bind(null, e3));
  }
  var me2 = { map: T2, forEach: function(e3, t3, n3) {
    T2(e3, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e3) {
    var t3 = 0;
    return T2(e3, function() {
      t3++;
    }), t3;
  }, toArray: function(e3) {
    return T2(e3, function(e4) {
      return e4;
    }) || [];
  }, only: function(e3) {
    if (!ae2(e3)) throw Error(`React.Children.only expected to receive a single React element child.`);
    return e3;
  } };
  e2.Activity = f2, e2.Children = me2, e2.Component = y2, e2.Fragment = r2, e2.Profiler = a2, e2.PureComponent = ee2, e2.StrictMode = i2, e2.Suspense = l2, e2.ViewTransition = p2, e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S2, e2.__COMPILER_RUNTIME = { __proto__: null, c: function(e3) {
    return S2.H.useMemoCache(e3);
  } }, e2.addTransitionType = pe2, e2.cache = function(e3) {
    return function() {
      return e3.apply(null, arguments);
    };
  }, e2.cacheSignal = function() {
    return null;
  }, e2.cloneElement = function(e3, t3, n3) {
    if (e3 == null) throw Error(`The argument must be a React element, but you passed ` + e3 + `.`);
    var r3 = _2({}, e3.props), i3 = e3.key;
    if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !re2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
    var a3 = arguments.length - 2;
    if (a3 === 1) r3.children = n3;
    else if (1 < a3) {
      for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
      r3.children = o3;
    }
    return C2(e3.type, i3, r3);
  }, e2.createContext = function(e3) {
    return e3 = { $$typeof: s2, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }, e3.Provider = e3, e3.Consumer = { $$typeof: o2, _context: e3 }, e3;
  }, e2.createElement = function(e3, t3, n3) {
    var r3, i3 = {}, a3 = null;
    if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) re2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
    var o3 = arguments.length - 2;
    if (o3 === 1) i3.children = n3;
    else if (1 < o3) {
      for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
      i3.children = s3;
    }
    if (e3 && e3.defaultProps) for (r3 in o3 = e3.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
    return C2(e3, a3, i3);
  }, e2.createRef = function() {
    return { current: null };
  }, e2.forwardRef = function(e3) {
    return { $$typeof: c2, render: e3 };
  }, e2.isValidElement = ae2, e2.lazy = function(e3) {
    return { $$typeof: d2, _payload: { _status: -1, _result: e3 }, _init: ue2 };
  }, e2.memo = function(e3, t3) {
    return { $$typeof: u2, type: e3, compare: t3 === void 0 ? null : t3 };
  }, e2.startTransition = fe2, e2.unstable_useCacheRefresh = function() {
    return S2.H.useCacheRefresh();
  }, e2.use = function(e3) {
    return S2.H.use(e3);
  }, e2.useActionState = function(e3, t3, n3) {
    return S2.H.useActionState(e3, t3, n3);
  }, e2.useCallback = function(e3, t3) {
    return S2.H.useCallback(e3, t3);
  }, e2.useContext = function(e3) {
    return S2.H.useContext(e3);
  }, e2.useDebugValue = function() {
  }, e2.useDeferredValue = function(e3, t3) {
    return S2.H.useDeferredValue(e3, t3);
  }, e2.useEffect = function(e3, t3) {
    return S2.H.useEffect(e3, t3);
  }, e2.useEffectEvent = function(e3) {
    return S2.H.useEffectEvent(e3);
  }, e2.useId = function() {
    return S2.H.useId();
  }, e2.useImperativeHandle = function(e3, t3, n3) {
    return S2.H.useImperativeHandle(e3, t3, n3);
  }, e2.useInsertionEffect = function(e3, t3) {
    return S2.H.useInsertionEffect(e3, t3);
  }, e2.useLayoutEffect = function(e3, t3) {
    return S2.H.useLayoutEffect(e3, t3);
  }, e2.useMemo = function(e3, t3) {
    return S2.H.useMemo(e3, t3);
  }, e2.useOptimistic = function(e3, t3) {
    return S2.H.useOptimistic(e3, t3);
  }, e2.useReducer = function(e3, t3, n3) {
    return S2.H.useReducer(e3, t3, n3);
  }, e2.useRef = function(e3) {
    return S2.H.useRef(e3);
  }, e2.useState = function(e3) {
    return S2.H.useState(e3);
  }, e2.useSyncExternalStore = function(e3, t3, n3) {
    return S2.H.useSyncExternalStore(e3, t3, n3);
  }, e2.useTransition = function() {
    return S2.H.useTransition();
  }, e2.version = `19.3.0`;
})), n = e(((e2, n2) => {
  n2.exports = t();
})), r = e(((e2) => {
  function t2(e3, t3) {
    var n3 = e3.length;
    e3.push(t3);
    a: for (; 0 < n3; ) {
      var r3 = n3 - 1 >>> 1, a3 = e3[r3];
      if (0 < i2(a3, t3)) e3[r3] = t3, e3[n3] = a3, n3 = r3;
      else break a;
    }
  }
  function n2(e3) {
    return e3.length === 0 ? null : e3[0];
  }
  function r2(e3) {
    if (e3.length === 0) return null;
    var t3 = e3[0], n3 = e3.pop();
    if (n3 !== t3) {
      e3[0] = n3;
      a: for (var r3 = 0, a3 = e3.length, o3 = a3 >>> 1; r3 < o3; ) {
        var s3 = 2 * (r3 + 1) - 1, c3 = e3[s3], l3 = s3 + 1, u3 = e3[l3];
        if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e3[r3] = u3, e3[l3] = n3, r3 = l3) : (e3[r3] = c3, e3[s3] = n3, r3 = s3);
        else if (l3 < a3 && 0 > i2(u3, n3)) e3[r3] = u3, e3[l3] = n3, r3 = l3;
        else break a;
      }
    }
    return t3;
  }
  function i2(e3, t3) {
    var n3 = e3.sortIndex - t3.sortIndex;
    return n3 === 0 ? e3.id - t3.id : n3;
  }
  if (e2.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e2.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e2.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e3) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null) r2(l2);
      else if (i3.startTime <= e3) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else break;
      i3 = n2(l2);
    }
  }
  function ee2(e3) {
    if (h2 = false, b2(e3), !m2) {
      if (n2(c2) !== null) m2 = true, te2 || (te2 = true, ie2());
      else {
        var t3 = n2(l2);
        t3 !== null && w2(ee2, t3.startTime - e3);
      }
    }
  }
  var te2 = false, ne2 = -1, x2 = 5, S2 = -1;
  function re2() {
    return g2 ? true : !(e2.unstable_now() - S2 < x2);
  }
  function C2() {
    if (g2 = false, te2) {
      var t3 = e2.unstable_now();
      S2 = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(ne2), ne2 = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && re2()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e2.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b2(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b2(t3);
                } else r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null) i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && w2(ee2, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? ie2() : te2 = false;
      }
    }
  }
  var ie2;
  if (typeof y2 == `function`) ie2 = function() {
    y2(C2);
  };
  else if (typeof MessageChannel < `u`) {
    var ae2 = new MessageChannel(), oe2 = ae2.port2;
    ae2.port1.onmessage = C2, ie2 = function() {
      oe2.postMessage(null);
    };
  } else ie2 = function() {
    _2(C2, 0);
  };
  function w2(t3, n3) {
    ne2 = _2(function() {
      t3(e2.unstable_now());
    }, n3);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  }, e2.unstable_forceFrameRate = function(e3) {
    0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : x2 = 0 < e3 ? Math.floor(1e3 / e3) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e2.unstable_next = function(e3) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_requestPaint = function() {
    g2 = true;
  }, e2.unstable_runWithPriority = function(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e3 = 3;
    }
    var n3 = f2;
    f2 = e3;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e2.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(ne2), ne2 = -1) : h2 = true, w2(ee2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, te2 || (te2 = true, ie2()))), r3;
  }, e2.unstable_shouldYield = re2, e2.unstable_wrapCallback = function(e3) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e3.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
})), i = e(((e2, t2) => {
  t2.exports = r();
})), a = e(((e2) => {
  var t2 = n();
  function r2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n2 = 2; n2 < arguments.length; n2++) t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i2() {
  }
  var a2 = { d: { f: i2, r: function() {
    throw Error(r2(522));
  }, D: i2, C: i2, L: i2, m: i2, X: i2, S: i2, M: i2 }, p: 0, findDOMNode: null }, o2 = /* @__PURE__ */ Symbol.for(`react.portal`), s2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), c2 = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
  function l2(e3, t3, n2) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o2, key: r3 == null ? null : r3 === c2 ? c2 : `` + r3, children: e3, containerInfo: t3, implementation: n2 };
  }
  var u2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d2(e3, t3) {
    if (e3 === `font`) return ``;
    if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
  }
  e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a2, e2.browser = function(e3) {
    return { $$typeof: s2, _reason: e3 };
  }, e2.createPortal = function(e3, t3) {
    var n2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(r2(299));
    return l2(e3, t3, null, n2);
  }, e2.flushSync = function(e3) {
    var t3 = u2.T, n2 = a2.p;
    try {
      if (u2.T = null, a2.p = 2, e3) return e3();
    } finally {
      u2.T = t3, a2.p = n2, a2.d.f();
    }
  }, e2.preconnect = function(e3, t3) {
    typeof e3 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, a2.d.C(e3, t3));
  }, e2.prefetchDNS = function(e3) {
    typeof e3 == `string` && a2.d.D(e3);
  }, e2.preinit = function(e3, t3) {
    if (typeof e3 == `string` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r3 = d2(n2, t3.crossOrigin), i3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n2 === `style` ? a2.d.S(e3, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: i3, fetchPriority: o3 }) : n2 === `script` && a2.d.X(e3, { crossOrigin: r3, integrity: i3, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
    }
  }, e2.preinitModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n2 = d2(t3.as, t3.crossOrigin);
          a2.d.M(e3, { crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
        }
      } else t3 != null ? t3 : a2.d.M(e3);
    }
  }, e2.preload = function(e3, t3) {
    if (typeof e3 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n2 = t3.as, r3 = d2(n2, t3.crossOrigin);
      a2.d.L(e3, n2, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
    }
  }, e2.preloadModule = function(e3, t3) {
    if (typeof e3 == `string`) {
      if (t3) {
        var n2 = d2(t3.as, t3.crossOrigin);
        a2.d.m(e3, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n2, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
      } else a2.d.m(e3);
    }
  }, e2.requestFormReset = function(e3) {
    a2.d.r(e3);
  }, e2.unstable_batchedUpdates = function(e3, t3) {
    return e3(t3);
  }, e2.useFormState = function(e3, t3, n2) {
    return u2.H.useFormState(e3, t3, n2);
  }, e2.useFormStatus = function() {
    return u2.H.useHostTransitionStatus();
  }, e2.version = `19.3.0`;
})), o = e(((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e3) {
      console.error(e3);
    }
  }
  n2(), t2.exports = a();
})), s = e(((e2) => {
  var t2 = i(), r2 = n(), a2 = o();
  function s2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n2 = 2; n2 < arguments.length; n2++) t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function c2(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
  }
  function l2(e3) {
    for (var t3 = e3, n2 = t3; n2 && !n2.alternate; ) t3 = n2, t3.flags & 4098 && (e3 = t3.return), n2 = t3.return;
    for (; t3.return; ) t3 = t3.return;
    return t3.tag === 3 ? e3 : null;
  }
  function u2(e3) {
    if (e3.tag === 13) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function d2(e3) {
    if (e3.tag === 31) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function f2(e3) {
    if (l2(e3) !== e3) throw Error(s2(188));
  }
  function p2(e3) {
    var t3 = e3.alternate;
    if (!t3) {
      if (t3 = l2(e3), t3 === null) throw Error(s2(188));
      return t3 === e3 ? e3 : null;
    }
    for (var n2 = e3, r3 = t3; ; ) {
      var i2 = n2.return;
      if (i2 === null) break;
      var a3 = i2.alternate;
      if (a3 === null) {
        if (r3 = i2.return, r3 !== null) {
          n2 = r3;
          continue;
        }
        break;
      }
      if (i2.child === a3.child) {
        for (a3 = i2.child; a3; ) {
          if (a3 === n2) return f2(i2), e3;
          if (a3 === r3) return f2(i2), t3;
          a3 = a3.sibling;
        }
        throw Error(s2(188));
      }
      if (n2.return !== r3.return) n2 = i2, r3 = a3;
      else {
        for (var o2 = false, c3 = i2.child; c3; ) {
          if (c3 === n2) {
            o2 = true, n2 = i2, r3 = a3;
            break;
          }
          if (c3 === r3) {
            o2 = true, r3 = i2, n2 = a3;
            break;
          }
          c3 = c3.sibling;
        }
        if (!o2) {
          for (c3 = a3.child; c3; ) {
            if (c3 === n2) {
              o2 = true, n2 = a3, r3 = i2;
              break;
            }
            if (c3 === r3) {
              o2 = true, r3 = a3, n2 = i2;
              break;
            }
            c3 = c3.sibling;
          }
          if (!o2) throw Error(s2(189));
        }
      }
      if (n2.alternate !== r3) throw Error(s2(190));
    }
    if (n2.tag !== 3) throw Error(s2(188));
    return n2.stateNode.current === n2 ? e3 : t3;
  }
  function m2(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3;
    for (e3 = e3.child; e3 !== null; ) {
      if (t3 = m2(e3), t3 !== null) return t3;
      e3 = e3.sibling;
    }
    return null;
  }
  function h2(e3, t3, n2, r3, i2, a3) {
    for (; e3 !== null; ) {
      if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && n2(e3, r3, i2, a3) || (e3.tag !== 22 || e3.memoizedState === null) && (t3 || e3.tag !== 5 && e3.tag !== 27) && h2(e3.child, t3, n2, r3, i2, a3)) return true;
      e3 = e3.sibling;
    }
    return false;
  }
  function g2(e3) {
    for (e3 = e3.return; e3 !== null; ) {
      if (e3.tag === 3 || e3.tag === 5 || e3.tag === 27) return e3;
      e3 = e3.return;
    }
    return null;
  }
  function _2(e3) {
    var t3 = false;
    for (e3 = e3.return; e3 !== null && (e3.tag === 4 && (t3 = true), e3.tag !== 3 && e3.tag !== 5 && e3.tag !== 27); ) e3 = e3.return;
    return t3;
  }
  function v2(e3) {
    var t3 = [null, null], n2 = g2(e3);
    return n2 === null || y2(t3, e3, n2.child, { foundSelf: false }), t3;
  }
  function y2(e3, t3, n2, r3) {
    for (; n2 !== null; ) {
      if (n2 === t3) r3.foundSelf = true;
      else if (n2.tag === 5 || n2.tag === 27 || n2.tag === 6) {
        if (r3.foundSelf) return e3[1] = n2, true;
        e3[0] = n2;
      } else if ((n2.tag !== 22 || n2.memoizedState === null) && y2(e3, t3, n2.child, r3)) return true;
      n2 = n2.sibling;
    }
    return false;
  }
  function b2(e3) {
    switch (e3.tag) {
      case 5:
      case 27:
      case 6:
        return e3.stateNode;
      case 3:
        return e3.stateNode.containerInfo;
      default:
        throw Error(s2(559));
    }
  }
  var ee2 = null, te2 = null;
  function ne2(e3, t3, n2) {
    return e3 === n2 || e3 === t3 && (ee2 = e3, true);
  }
  function x2(e3, t3, n2) {
    return e3 === n2 ? (te2 = e3, false) : e3 === t3 && (te2 !== null && (ee2 = e3), true);
  }
  function S2(e3) {
    if (e3 === null) return null;
    do
      e3 = e3 === null ? null : e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27 && e3.tag !== 3);
    return e3 || null;
  }
  function re2(e3, t3, n2) {
    for (var r3 = 0, i2 = e3; i2; i2 = n2(i2)) r3++;
    i2 = 0;
    for (var a3 = t3; a3; a3 = n2(a3)) i2++;
    for (; 0 < r3 - i2; ) e3 = n2(e3), r3--;
    for (; 0 < i2 - r3; ) t3 = n2(t3), i2--;
    for (; r3--; ) {
      if (e3 === t3 || t3 !== null && e3 === t3.alternate) return e3;
      e3 = n2(e3), t3 = n2(t3);
    }
    return null;
  }
  var C2 = Object.assign, ie2 = /* @__PURE__ */ Symbol.for(`react.element`), ae2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), oe2 = /* @__PURE__ */ Symbol.for(`react.portal`), w2 = /* @__PURE__ */ Symbol.for(`react.fragment`), se2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), ce2 = /* @__PURE__ */ Symbol.for(`react.profiler`), le2 = /* @__PURE__ */ Symbol.for(`react.consumer`), T2 = /* @__PURE__ */ Symbol.for(`react.context`), ue2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), de2 = /* @__PURE__ */ Symbol.for(`react.suspense`), fe2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), pe2 = /* @__PURE__ */ Symbol.for(`react.memo`), me2 = /* @__PURE__ */ Symbol.for(`react.lazy`), he2 = /* @__PURE__ */ Symbol.for(`react.activity`), ge2 = /* @__PURE__ */ Symbol.for(`react.legacy_hidden`), _e2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), ve2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), ye2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), be2 = Symbol.iterator;
  function xe2(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = be2 && e3[be2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var Se2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
  function Ce2(e3) {
    if (e3 == null) return null;
    if (typeof e3 == `function`) return e3.$$typeof === Se2 ? null : e3.displayName || e3.name || null;
    if (typeof e3 == `string`) return e3;
    switch (e3) {
      case w2:
        return `Fragment`;
      case ce2:
        return `Profiler`;
      case se2:
        return `StrictMode`;
      case de2:
        return `Suspense`;
      case fe2:
        return `SuspenseList`;
      case he2:
        return `Activity`;
      case ve2:
        return `ViewTransition`;
    }
    if (typeof e3 == `object`) switch (e3.$$typeof) {
      case oe2:
        return `Portal`;
      case T2:
        return e3.displayName || `Context`;
      case le2:
        return (e3._context.displayName || `Context`) + `.Consumer`;
      case ue2:
        var t3 = e3.render;
        return e3 = e3.displayName, e3 || (e3 = (e3 = t3.displayName || t3.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`)), e3;
      case pe2:
        return t3 = e3.displayName || null, t3 === null ? Ce2(e3.type) || `Memo` : t3;
      case me2:
        t3 = e3._payload, e3 = e3._init;
        try {
          return Ce2(e3(t3));
        } catch {
        }
    }
    return null;
  }
  var we2 = Array.isArray, E2 = r2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D2 = a2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te2 = { pending: false, data: null, method: null, action: null }, Ee2 = [], De2 = -1;
  function Oe2(e3) {
    return { current: e3 };
  }
  function ke2(e3) {
    0 > De2 || (e3.current = Ee2[De2], Ee2[De2] = null, De2--);
  }
  function O2(e3, t3) {
    De2++, Ee2[De2] = e3.current, e3.current = t3;
  }
  var Ae2 = Oe2(null), je2 = Oe2(null), Me2 = Oe2(null), Ne2 = Oe2(null);
  function Pe2(e3, t3) {
    switch (O2(Me2, t3), O2(je2, e3), O2(Ae2, null), t3.nodeType) {
      case 9:
      case 11:
        e3 = (e3 = t3.documentElement) && (e3 = e3.namespaceURI) ? up(e3) : 0;
        break;
      default:
        if (e3 = t3.tagName, t3 = t3.namespaceURI) t3 = up(t3), e3 = dp(t3, e3);
        else switch (e3) {
          case `svg`:
            e3 = 1;
            break;
          case `math`:
            e3 = 2;
            break;
          default:
            e3 = 0;
        }
    }
    ke2(Ae2), O2(Ae2, e3);
  }
  function Fe() {
    ke2(Ae2), ke2(je2), ke2(Me2);
  }
  function Ie(e3) {
    var t3 = e3.memoizedState;
    t3 !== null && (sh._currentValue = t3.memoizedState, O2(Ne2, e3)), t3 = Ae2.current;
    var n2 = dp(t3, e3.type);
    t3 !== n2 && (O2(je2, e3), O2(Ae2, n2));
  }
  function Le(e3) {
    je2.current === e3 && (ke2(Ae2), ke2(je2)), Ne2.current === e3 && (ke2(Ne2), sh._currentValue = Te2);
  }
  var Re, ze;
  function Be(e3) {
    if (Re === void 0) try {
      throw Error();
    } catch (e4) {
      var t3 = e4.stack.trim().match(/\n( *(at )?)/);
      Re = t3 && t3[1] || ``, ze = -1 < e4.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e4.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
    }
    return `
` + Re + e3 + ze;
  }
  var Ve = false;
  function He(e3, t3) {
    if (!e3 || Ve) return ``;
    Ve = true;
    var n2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r3 = { DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n3 = function() {
              throw Error();
            };
            if (Object.defineProperty(n3.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n3, []);
              } catch (e4) {
                var r4 = e4;
              }
              Reflect.construct(e3, [], n3);
            } else {
              try {
                n3.call();
              } catch (e4) {
                r4 = e4;
              }
              n3 = false;
              try {
                var i3 = Object.getOwnPropertyDescriptor(e3.prototype, `props`);
                Object.defineProperty(e3.prototype, "props", { configurable: true, set: function() {
                  throw Error();
                } }), n3 = true, new e3();
              } finally {
                n3 && (i3 === void 0 ? delete e3.prototype.props : Object.defineProperty(e3.prototype, "props", i3));
              }
            }
          } else {
            try {
              throw Error();
            } catch (e4) {
              r4 = e4;
            }
            (n3 = e3()) && typeof n3.catch == `function` && n3.catch(function() {
            });
          }
        } catch (e4) {
          if (e4 && r4 && typeof e4.stack == `string`) return [e4.stack, r4.stack];
        }
        return [null, null];
      } };
      r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i2 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
      i2 && i2.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
      var a3 = r3.DetermineComponentFrameRoot(), o2 = a3[0], s3 = a3[1];
      if (o2 && s3) {
        var c3 = o2.split(`
`), l3 = s3.split(`
`);
        for (i2 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
        for (; i2 < l3.length && !l3[i2].includes(`DetermineComponentFrameRoot`); ) i2++;
        if (r3 === c3.length || i2 === l3.length) for (r3 = c3.length - 1, i2 = l3.length - 1; 1 <= r3 && 0 <= i2 && c3[r3] !== l3[i2]; ) i2--;
        for (; 1 <= r3 && 0 <= i2; r3--, i2--) if (c3[r3] !== l3[i2]) {
          if (r3 !== 1 || i2 !== 1) do
            if (r3--, i2--, 0 > i2 || c3[r3] !== l3[i2]) {
              var u3 = `
` + c3[r3].replace(` at new `, ` at `);
              return e3.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e3.displayName)), u3;
            }
          while (1 <= r3 && 0 <= i2);
          break;
        }
      }
    } finally {
      Ve = false, Error.prepareStackTrace = n2;
    }
    return (n2 = e3 ? e3.displayName || e3.name : ``) ? Be(n2) : ``;
  }
  function Ue(e3, t3) {
    switch (e3.tag) {
      case 26:
      case 27:
      case 5:
        return Be(e3.type);
      case 16:
        return Be(`Lazy`);
      case 13:
        return e3.child !== t3 && t3 !== null ? Be(`Suspense Fallback`) : Be(`Suspense`);
      case 19:
        return Be(`SuspenseList`);
      case 0:
      case 15:
        return He(e3.type, false);
      case 11:
        return He(e3.type.render, false);
      case 1:
        return He(e3.type, true);
      case 31:
        return Be(`Activity`);
      case 30:
        return Be(`ViewTransition`);
      default:
        return ``;
    }
  }
  function We(e3) {
    try {
      var t3 = ``, n2 = null;
      do
        t3 += Ue(e3, n2), n2 = e3, e3 = e3.return;
      while (e3);
      return t3;
    } catch (e4) {
      return `
Error generating stack: ` + e4.message + `
` + e4.stack;
    }
  }
  var Ge = Object.prototype.hasOwnProperty, Ke = t2.unstable_scheduleCallback, qe = t2.unstable_cancelCallback, Je = t2.unstable_shouldYield, Ye = t2.unstable_requestPaint, Xe = t2.unstable_now, Ze = t2.unstable_getCurrentPriorityLevel, Qe = t2.unstable_ImmediatePriority, $e = t2.unstable_UserBlockingPriority, et = t2.unstable_NormalPriority, tt = t2.unstable_LowPriority, nt = t2.unstable_IdlePriority, rt = t2.log, it = t2.unstable_setDisableYieldValue, at = null, ot = null;
  function st(e3) {
    if (typeof rt == `function` && it(e3), ot && typeof ot.setStrictMode == `function`) try {
      ot.setStrictMode(at, e3);
    } catch {
    }
  }
  var ct = Math.clz32 ? Math.clz32 : dt, lt = Math.log, ut = Math.LN2;
  function dt(e3) {
    return e3 >>>= 0, e3 === 0 ? 32 : 31 - (lt(e3) / ut | 0) | 0;
  }
  var ft = 256, pt = 262144, mt = 4194304;
  function ht(e3) {
    var t3 = e3 & 42;
    if (t3 !== 0) return t3;
    switch (e3 & -e3) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e3 & -e3;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e3 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e3 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e3;
    }
  }
  function gt(e3, t3, n2) {
    var r3 = e3.pendingLanes;
    if (r3 === 0) return 0;
    var i2 = 0, a3 = e3.suspendedLanes, o2 = e3.pingedLanes;
    e3 = e3.warmLanes;
    var s3 = r3 & 134217727;
    return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o2 === 0 ? n2 || (n2 = r3 & ~e3, n2 !== 0 && (i2 = ht(n2))) : i2 = ht(o2) : i2 = ht(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o2 &= s3, o2 === 0 ? n2 || (n2 = s3 & ~e3, n2 !== 0 && (i2 = ht(n2))) : i2 = ht(o2)) : i2 = ht(r3)), i2 === 0 ? 0 : t3 !== 0 && t3 !== i2 && (t3 & a3) === 0 && (a3 = i2 & -i2, n2 = t3 & -t3, a3 >= n2 || a3 === 32 && n2 & 4194048) ? t3 : i2;
  }
  function _t(e3, t3) {
    return (e3.pendingLanes & ~(e3.suspendedLanes & ~e3.pingedLanes) & t3) === 0;
  }
  function vt(e3, t3) {
    t3 & 8 && (t3 |= t3 & 32);
    var n2 = e3.entangledLanes;
    if (n2 !== 0) for (e3 = e3.entanglements, n2 &= t3; 0 < n2; ) {
      var r3 = 31 - ct(n2), i2 = 1 << r3;
      t3 |= e3[r3], n2 &= ~i2;
    }
    return t3;
  }
  function yt(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t3 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t3 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bt() {
    var e3 = mt;
    return mt <<= 1, !(mt & 62914560) && (mt = 4194304), e3;
  }
  function xt(e3) {
    for (var t3 = [], n2 = 0; 31 > n2; n2++) t3.push(e3);
    return t3;
  }
  function St(e3, t3) {
    e3.pendingLanes |= t3, t3 !== 268435456 && (e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0);
  }
  function Ct(e3, t3, n2, r3, i2, a3) {
    var o2 = e3.pendingLanes;
    e3.pendingLanes = n2, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0, e3.expiredLanes &= n2, e3.entangledLanes &= n2, e3.errorRecoveryDisabledLanes &= n2, e3.shellSuspendCounter = 0;
    var s3 = e3.entanglements, c3 = e3.expirationTimes, l3 = e3.hiddenUpdates;
    for (n2 = o2 & ~n2; 0 < n2; ) {
      var u3 = 31 - ct(n2), d3 = 1 << u3;
      s3[u3] = 0, c3[u3] = -1;
      var f3 = l3[u3];
      if (f3 !== null) for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
        var p3 = f3[u3];
        p3 !== null && (p3.lane &= -536870913);
      }
      n2 &= ~d3;
    }
    r3 !== 0 && wt(e3, r3, 0), a3 !== 0 && i2 === 0 && e3.tag !== 0 && (e3.suspendedLanes |= a3 & ~(o2 & ~t3));
  }
  function wt(e3, t3, n2) {
    e3.pendingLanes |= t3, e3.suspendedLanes &= ~t3;
    var r3 = 31 - ct(t3);
    e3.entangledLanes |= t3, e3.entanglements[r3] = e3.entanglements[r3] | 1073741824 | n2 & 261930;
  }
  function Tt(e3, t3) {
    var n2 = e3.entangledLanes |= t3;
    for (e3 = e3.entanglements; n2; ) {
      var r3 = 31 - ct(n2), i2 = 1 << r3;
      i2 & t3 | e3[r3] & t3 && (e3[r3] |= t3), n2 &= ~i2;
    }
  }
  function Et(e3, t3) {
    var n2 = t3 & -t3;
    return n2 = n2 & 42 ? 1 : Dt(n2), (n2 & (e3.suspendedLanes | t3)) === 0 ? n2 : 0;
  }
  function Dt(e3) {
    switch (e3) {
      case 2:
        e3 = 1;
        break;
      case 8:
        e3 = 4;
        break;
      case 32:
        e3 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e3 = 128;
        break;
      case 268435456:
        e3 = 134217728;
        break;
      default:
        e3 = 0;
    }
    return e3;
  }
  function Ot(e3) {
    return e3 &= -e3, 2 < e3 ? 8 < e3 ? e3 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function kt() {
    var e3 = D2.p;
    return e3 === 0 ? (e3 = window.event, e3 === void 0 ? 32 : Ch(e3.type)) : e3;
  }
  function At(e3, t3) {
    var n2 = D2.p;
    try {
      return D2.p = e3, t3();
    } finally {
      D2.p = n2;
    }
  }
  var jt = Math.random().toString(36).slice(2), Mt = `__reactFiber$` + jt, Nt = `__reactProps$` + jt, Pt = `__reactContainer$` + jt, Ft = `__reactEvents$` + jt, It = `__reactListeners$` + jt, Lt = `__reactHandles$` + jt, Rt = `__reactResources$` + jt, zt = `__reactMarker$` + jt, Bt = `__reactLoad$` + jt;
  function Vt(e3) {
    delete e3[Mt], delete e3[Nt], delete e3[It], delete e3[Lt];
  }
  function Ht(e3) {
    var t3;
    if (t3 = e3[Mt]) return t3;
    for (var n2 = e3.parentNode; n2; ) {
      if (t3 = n2[Pt] || n2[Mt]) {
        if (n2 = t3.alternate, t3.child !== null || n2 !== null && n2.child !== null) for (e3 = fm(e3); e3 !== null; ) {
          if (n2 = e3[Mt]) return n2;
          e3 = fm(e3);
        }
        return t3;
      }
      e3 = n2, n2 = e3.parentNode;
    }
    return null;
  }
  function Ut(e3) {
    if (e3 = e3[Mt] || e3[Pt]) {
      var t3 = e3.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e3;
    }
    return null;
  }
  function Wt(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3.stateNode;
    throw Error(s2(33));
  }
  function Gt(e3) {
    var t3 = e3[Rt];
    return t3 || (t3 = e3[Rt] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t3;
  }
  function Kt(e3) {
    e3[zt] = true;
  }
  function qt(e3) {
    e3[Bt] = void 0;
  }
  var Jt = /* @__PURE__ */ new Set(), Yt = {};
  function Xt(e3, t3) {
    Zt(e3, t3), Zt(e3 + `Capture`, t3);
  }
  function Zt(e3, t3) {
    for (Yt[e3] = t3, e3 = 0; e3 < t3.length; e3++) Jt.add(t3[e3]);
  }
  var Qt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), $t = {}, en = {};
  function tn(e3) {
    return Ge.call(en, e3) ? true : Ge.call($t, e3) ? false : Qt.test(e3) ? en[e3] = true : ($t[e3] = true, false);
  }
  var k = false;
  function nn() {
    var e3 = k;
    return k = false, e3;
  }
  function rn(e3, t3, n2) {
    if (tn(t3)) {
      if (n2 === null) e3.removeAttribute(t3);
      else {
        switch (typeof n2) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e3.removeAttribute(t3);
            return;
          case `boolean`:
            var r3 = t3.toLowerCase().slice(0, 5);
            if (r3 !== `data-` && r3 !== `aria-`) {
              e3.removeAttribute(t3);
              return;
            }
        }
        e3.setAttribute(t3, n2);
      }
    }
  }
  function an(e3, t3, n2) {
    if (n2 === null) e3.removeAttribute(t3);
    else {
      switch (typeof n2) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(t3);
          return;
      }
      e3.setAttribute(t3, n2);
    }
  }
  function on(e3, t3, n2, r3) {
    if (r3 === null) e3.removeAttribute(n2);
    else {
      switch (typeof r3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(n2);
          return;
      }
      e3.setAttributeNS(t3, n2, r3);
    }
  }
  function sn(e3) {
    switch (typeof e3) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e3;
      case `object`:
        return e3;
      default:
        return ``;
    }
  }
  function cn(e3) {
    var t3 = e3.type;
    return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function ln(e3, t3, n2) {
    var r3 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t3);
    if (!e3.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
      var i2 = r3.get, a3 = r3.set;
      return Object.defineProperty(e3, t3, { configurable: true, get: function() {
        return i2.call(this);
      }, set: function(e4) {
        n2 = `` + e4, a3.call(this, e4);
      } }), Object.defineProperty(e3, t3, { enumerable: r3.enumerable }), { getValue: function() {
        return n2;
      }, setValue: function(e4) {
        n2 = `` + e4;
      }, stopTracking: function() {
        e3._valueTracker = null, delete e3[t3];
      } };
    }
  }
  function un(e3) {
    if (!e3._valueTracker) {
      var t3 = cn(e3) ? `checked` : `value`;
      e3._valueTracker = ln(e3, t3, `` + e3[t3]);
    }
  }
  function dn(e3) {
    if (!e3) return false;
    var t3 = e3._valueTracker;
    if (!t3) return true;
    var n2 = t3.getValue(), r3 = ``;
    return e3 && (r3 = cn(e3) ? e3.checked ? `true` : `false` : e3.value), e3 = r3, e3 !== n2 && (t3.setValue(e3), true);
  }
  var fn = /[\n"\\]/g;
  function pn(e3) {
    return e3.replace(fn, function(e4) {
      return `\\` + e4.charCodeAt(0).toString(16) + ` `;
    });
  }
  function mn(e3, t3, n2, r3, i2, a3, o2, s3) {
    e3.name = ``, o2 != null && typeof o2 != `function` && typeof o2 != `symbol` && typeof o2 != `boolean` ? e3.type = o2 : e3.removeAttribute(`type`), t3 == null ? o2 !== `submit` && o2 !== `reset` || e3.removeAttribute(`value`) : o2 === `number` ? (t3 === 0 && e3.value === `` || e3.value != t3) && (e3.value = `` + sn(t3)) : e3.value !== `` + sn(t3) && (e3.value = `` + sn(t3)), t3 == null ? n2 == null ? r3 != null && e3.removeAttribute(`value`) : gn(e3, sn(n2)) : o2 === `number` && e3.value == t3 ? gn(e3, sn(e3.value)) : gn(e3, sn(t3)), i2 == null && a3 != null && (e3.defaultChecked = !!a3), i2 != null && (e3.checked = i2 && typeof i2 != `function` && typeof i2 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e3.name = `` + sn(s3) : e3.removeAttribute(`name`);
  }
  function hn(e3, t3, n2, r3, i2, a3, o2, s3) {
    if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e3.type = a3), t3 != null || n2 != null) {
      if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
        un(e3);
        return;
      }
      n2 = n2 == null ? `` : `` + sn(n2), t3 = t3 == null ? n2 : `` + sn(t3), s3 || t3 === e3.value || (e3.value = t3), e3.defaultValue = t3;
    }
    r3 != null ? r3 : r3 = i2, r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e3.checked = s3 ? e3.checked : !!r3, e3.defaultChecked = !!r3, o2 != null && typeof o2 != `function` && typeof o2 != `symbol` && typeof o2 != `boolean` && (e3.name = o2), un(e3);
  }
  function gn(e3, t3) {
    e3.defaultValue !== `` + t3 && (e3.defaultValue = `` + t3);
  }
  function _n(e3, t3, n2, r3) {
    if (e3 = e3.options, t3) {
      t3 = {};
      for (var i2 = 0; i2 < n2.length; i2++) t3[`$` + n2[i2]] = true;
      for (n2 = 0; n2 < e3.length; n2++) i2 = t3.hasOwnProperty(`$` + e3[n2].value), e3[n2].selected !== i2 && (e3[n2].selected = i2), i2 && r3 && (e3[n2].defaultSelected = true);
    } else {
      for (n2 = `` + sn(n2), t3 = null, i2 = 0; i2 < e3.length; i2++) {
        if (e3[i2].value === n2) {
          e3[i2].selected = true, r3 && (e3[i2].defaultSelected = true);
          return;
        }
        t3 !== null || e3[i2].disabled || (t3 = e3[i2]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function vn(e3, t3, n2) {
    if (t3 != null && (t3 = `` + sn(t3), t3 !== e3.value && (e3.value = t3), n2 == null)) {
      e3.defaultValue !== t3 && (e3.defaultValue = t3);
      return;
    }
    e3.defaultValue = n2 == null ? `` : `` + sn(n2);
  }
  function yn(e3, t3, n2, r3) {
    if (t3 == null) {
      if (r3 != null) {
        if (n2 != null) throw Error(s2(92));
        if (we2(r3)) {
          if (1 < r3.length) throw Error(s2(93));
          r3 = r3[0];
        }
        n2 = r3;
      }
      n2 != null ? n2 : n2 = ``, t3 = n2;
    }
    n2 = sn(t3), e3.defaultValue = n2, r3 = e3.textContent, r3 === n2 && r3 !== `` && r3 !== null && (e3.value = r3), un(e3);
  }
  function bn(e3, t3) {
    if (t3) {
      var n2 = e3.firstChild;
      if (n2 && n2 === e3.lastChild && n2.nodeType === 3) {
        n2.nodeValue = t3;
        return;
      }
    }
    e3.textContent = t3;
  }
  var xn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function Sn(e3, t3, n2) {
    var r3 = t3.indexOf(`--`) === 0;
    n2 == null || typeof n2 == `boolean` || n2 === `` ? r3 ? e3.setProperty(t3, ``) : t3 === `float` ? e3.cssFloat = `` : e3[t3] = `` : r3 ? e3.setProperty(t3, n2) : typeof n2 != `number` || n2 === 0 || xn.has(t3) ? t3 === `float` ? e3.cssFloat = n2 : e3[t3] = (`` + n2).trim() : e3[t3] = n2 + `px`;
  }
  function Cn(e3, t3, n2) {
    if (t3 != null && typeof t3 != `object`) throw Error(s2(62));
    if (e3 = e3.style, n2 != null) {
      for (var r3 in n2) !n2.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e3.setProperty(r3, ``) : r3 === `float` ? e3.cssFloat = `` : e3[r3] = ``, k = true);
      for (var i2 in t3) r3 = t3[i2], t3.hasOwnProperty(i2) && n2[i2] !== r3 && (Sn(e3, i2, r3), k = true);
    } else for (var a3 in t3) t3.hasOwnProperty(a3) && Sn(e3, a3, t3[a3]);
  }
  function wn(e3) {
    if (e3.indexOf(`-`) === -1) return false;
    switch (e3) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var Tn = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), En = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Dn(e3) {
    return En.test(`` + e3) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e3;
  }
  function On() {
  }
  var kn = null;
  function An(e3) {
    return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
  }
  var jn = null, Mn = null;
  function Nn(e3) {
    var t3 = Ut(e3);
    if (t3 && (e3 = t3.stateNode)) {
      var n2 = e3[Nt] || null;
      a: switch (e3 = t3.stateNode, t3.type) {
        case `input`:
          if (mn(e3, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name), t3 = n2.name, n2.type === `radio` && t3 != null) {
            for (n2 = e3; n2.parentNode; ) n2 = n2.parentNode;
            for (n2 = n2.querySelectorAll(`input[name="` + pn(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n2.length; t3++) {
              var r3 = n2[t3];
              if (r3 !== e3 && r3.form === e3.form) {
                var i2 = r3[Nt] || null;
                if (!i2) throw Error(s2(90));
                mn(r3, i2.value, i2.defaultValue, i2.defaultValue, i2.checked, i2.defaultChecked, i2.type, i2.name);
              }
            }
            for (t3 = 0; t3 < n2.length; t3++) r3 = n2[t3], r3.form === e3.form && dn(r3);
          }
          break a;
        case `textarea`:
          vn(e3, n2.value, n2.defaultValue);
          break a;
        case `select`:
          t3 = n2.value, t3 != null && _n(e3, !!n2.multiple, t3, false);
      }
    }
  }
  var Pn = false;
  function Fn(e3, t3, n2) {
    if (Pn) return e3(t3, n2);
    Pn = true;
    try {
      return e3(t3);
    } finally {
      if (Pn = false, (jn !== null || Mn !== null) && (zd(), jn && (t3 = jn, e3 = Mn, Mn = jn = null, Nn(t3), e3))) for (t3 = 0; t3 < e3.length; t3++) Nn(e3[t3]);
    }
  }
  function In(e3, t3) {
    var n2 = e3.stateNode;
    if (n2 === null) return null;
    var r3 = n2[Nt] || null;
    if (r3 === null) return null;
    n2 = r3[t3];
    a: switch (t3) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (r3 = !r3.disabled) || (e3 = e3.type, r3 = e3 !== `button` && e3 !== `input` && e3 !== `select` && e3 !== `textarea`), e3 = !r3;
        break a;
      default:
        e3 = false;
    }
    if (e3) return null;
    if (n2 && typeof n2 != `function`) throw Error(s2(231, t3, typeof n2));
    return n2;
  }
  var Ln = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, Rn = false;
  if (Ln) try {
    var zn = {};
    Object.defineProperty(zn, "passive", { get: function() {
      Rn = true;
    } }), window.addEventListener(`test`, zn, zn), window.removeEventListener(`test`, zn, zn);
  } catch {
    Rn = false;
  }
  var Bn = null, Vn = null, Hn = null;
  function Un() {
    if (Hn) return Hn;
    var e3, t3 = Vn, n2 = t3.length, r3, i2 = `value` in Bn ? Bn.value : Bn.textContent, a3 = i2.length;
    for (e3 = 0; e3 < n2 && t3[e3] === i2[e3]; e3++) ;
    var o2 = n2 - e3;
    for (r3 = 1; r3 <= o2 && t3[n2 - r3] === i2[a3 - r3]; r3++) ;
    return Hn = i2.slice(e3, 1 < r3 ? 1 - r3 : void 0);
  }
  function Wn(e3) {
    var t3 = e3.keyCode;
    return `charCode` in e3 ? (e3 = e3.charCode, e3 === 0 && t3 === 13 && (e3 = 13)) : e3 = t3, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
  }
  function Gn() {
    return true;
  }
  function Kn() {
    return false;
  }
  function qn(e3) {
    function t3(t4, n2, r3, i2, a3) {
      for (var o2 in this._reactName = t4, this._targetInst = r3, this.type = n2, this.nativeEvent = i2, this.target = a3, this.currentTarget = null, e3) e3.hasOwnProperty(o2) && (t4 = e3[o2], this[o2] = t4 ? t4(i2) : i2[o2]);
      return this.isDefaultPrevented = (i2.defaultPrevented == null ? false === i2.returnValue : i2.defaultPrevented) ? Gn : Kn, this.isPropagationStopped = Kn, this;
    }
    return C2(t3.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e4 = this.nativeEvent;
      e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != `unknown` && (e4.returnValue = false), this.isDefaultPrevented = Gn);
    }, stopPropagation: function() {
      var e4 = this.nativeEvent;
      e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != `unknown` && (e4.cancelBubble = true), this.isPropagationStopped = Gn);
    }, persist: function() {
    }, isPersistent: Gn }), t3;
  }
  var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
    return e3.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yn = qn(Jn), Xn = C2({}, Jn, { view: 0, detail: 0 }), Zn = qn(Xn), Qn, $n, er, tr = C2({}, Xn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fr, button: 0, buttons: 0, relatedTarget: function(e3) {
    return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
  }, movementX: function(e3) {
    return `movementX` in e3 ? e3.movementX : (e3 !== er && (er && e3.type === `mousemove` ? (Qn = e3.screenX - er.screenX, $n = e3.screenY - er.screenY) : $n = Qn = 0, er = e3), Qn);
  }, movementY: function(e3) {
    return `movementY` in e3 ? e3.movementY : $n;
  } }), nr = qn(tr), rr = qn(C2({}, tr, { dataTransfer: 0 })), ir = qn(C2({}, Xn, { relatedTarget: 0 })), ar = qn(C2({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), or = qn(C2({}, Jn, { clipboardData: function(e3) {
    return `clipboardData` in e3 ? e3.clipboardData : window.clipboardData;
  } })), sr = qn(C2({}, Jn, { data: 0 })), cr = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, lr = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, ur = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
  function dr(e3) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e3) : (e3 = ur[e3]) ? !!t3[e3] : false;
  }
  function fr() {
    return dr;
  }
  var pr = qn(C2({}, Xn, { key: function(e3) {
    if (e3.key) {
      var t3 = cr[e3.key] || e3.key;
      if (t3 !== `Unidentified`) return t3;
    }
    return e3.type === `keypress` ? (e3 = Wn(e3), e3 === 13 ? `Enter` : String.fromCharCode(e3)) : e3.type === `keydown` || e3.type === `keyup` ? lr[e3.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fr, charCode: function(e3) {
    return e3.type === `keypress` ? Wn(e3) : 0;
  }, keyCode: function(e3) {
    return e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  }, which: function(e3) {
    return e3.type === `keypress` ? Wn(e3) : e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  } })), mr = qn(C2({}, tr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), hr = qn(C2({}, Jn, { submitter: 0 })), gr = qn(C2({}, Xn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fr })), _r = qn(C2({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), vr = qn(C2({}, tr, { deltaX: function(e3) {
    return `deltaX` in e3 ? e3.deltaX : `wheelDeltaX` in e3 ? -e3.wheelDeltaX : 0;
  }, deltaY: function(e3) {
    return `deltaY` in e3 ? e3.deltaY : `wheelDeltaY` in e3 ? -e3.wheelDeltaY : `wheelDelta` in e3 ? -e3.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), yr = qn(C2({}, Jn, { newState: 0, oldState: 0, source: 0 })), br = [9, 13, 27, 32], xr = Ln && `CompositionEvent` in window, Sr = null;
  Ln && `documentMode` in document && (Sr = document.documentMode);
  var Cr = Ln && `TextEvent` in window && !Sr, wr = Ln && (!xr || Sr && 8 < Sr && 11 >= Sr), Tr = ` `, Er = false;
  function Dr(e3, t3) {
    switch (e3) {
      case `keyup`:
        return br.indexOf(t3.keyCode) !== -1;
      case `keydown`:
        return t3.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Or(e3) {
    return e3 = e3.detail, typeof e3 == `object` && `data` in e3 ? e3.data : null;
  }
  var kr = false;
  function Ar(e3, t3) {
    switch (e3) {
      case `compositionend`:
        return Or(t3);
      case `keypress`:
        return t3.which === 32 ? (Er = true, Tr) : null;
      case `textInput`:
        return e3 = t3.data, e3 === Tr && Er ? null : e3;
      default:
        return null;
    }
  }
  function jr(e3, t3) {
    if (kr) return e3 === `compositionend` || !xr && Dr(e3, t3) ? (e3 = Un(), Hn = Vn = Bn = null, kr = false, e3) : null;
    switch (e3) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
          if (t3.char && 1 < t3.char.length) return t3.char;
          if (t3.which) return String.fromCharCode(t3.which);
        }
        return null;
      case `compositionend`:
        return wr && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var Mr = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Nr(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 === `input` ? !!Mr[e3.type] : t3 === `textarea`;
  }
  function Pr(e3, t3, n2, r3) {
    jn ? Mn ? Mn.push(r3) : Mn = [r3] : jn = r3, t3 = Jf(t3, `onChange`), 0 < t3.length && (n2 = new Yn(`onChange`, `change`, null, n2, r3), e3.push({ event: n2, listeners: t3 }));
  }
  var Fr = null, Ir = null;
  function Lr(e3) {
    Vf(e3, 0);
  }
  function Rr(e3) {
    if (dn(Wt(e3))) return e3;
  }
  function zr(e3, t3) {
    if (e3 === `change`) return t3;
  }
  var Br = false;
  if (Ln) {
    var Vr;
    if (Ln) {
      var Hr = `oninput` in document;
      if (!Hr) {
        var Ur = document.createElement(`div`);
        Ur.setAttribute(`oninput`, `return;`), Hr = typeof Ur.oninput == `function`;
      }
      Vr = Hr;
    } else Vr = false;
    Br = Vr && (!document.documentMode || 9 < document.documentMode);
  }
  function Wr() {
    Fr && (Fr.detachEvent(`onpropertychange`, Gr), Ir = Fr = null);
  }
  function Gr(e3) {
    if (e3.propertyName === `value` && Rr(Ir)) {
      var t3 = [];
      Pr(t3, Ir, e3, An(e3)), Fn(Lr, t3);
    }
  }
  function Kr(e3, t3, n2) {
    e3 === `focusin` ? (Wr(), Fr = t3, Ir = n2, Fr.attachEvent(`onpropertychange`, Gr)) : e3 === `focusout` && Wr();
  }
  function qr(e3) {
    if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`) return Rr(Ir);
  }
  function Jr(e3, t3) {
    if (e3 === `click`) return Rr(t3);
  }
  function Yr(e3, t3) {
    if (e3 === `input` || e3 === `change`) return Rr(t3);
  }
  function Xr(e3, t3) {
    return e3 === t3 && (e3 !== 0 || 1 / e3 == 1 / t3) || e3 !== e3 && t3 !== t3;
  }
  var Zr = typeof Object.is == `function` ? Object.is : Xr;
  function Qr(e3, t3) {
    if (Zr(e3, t3)) return true;
    if (typeof e3 != `object` || !e3 || typeof t3 != `object` || !t3) return false;
    var n2 = Object.keys(e3), r3 = Object.keys(t3);
    if (n2.length !== r3.length) return false;
    for (r3 = 0; r3 < n2.length; r3++) {
      var i2 = n2[r3];
      if (!Ge.call(t3, i2) || !Zr(e3[i2], t3[i2])) return false;
    }
    return true;
  }
  function $r(e3) {
    if (e3 || (e3 = typeof document < `u` ? document : void 0), e3 === void 0) return null;
    try {
      return e3.activeElement || e3.body;
    } catch {
      return e3.body;
    }
  }
  function ei(e3) {
    for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
    return e3;
  }
  function ti(e3, t3) {
    var n2 = ei(e3);
    e3 = 0;
    for (var r3; n2; ) {
      if (n2.nodeType === 3) {
        if (r3 = e3 + n2.textContent.length, e3 <= t3 && r3 >= t3) return { node: n2, offset: t3 - e3 };
        e3 = r3;
      }
      a: {
        for (; n2; ) {
          if (n2.nextSibling) {
            n2 = n2.nextSibling;
            break a;
          }
          n2 = n2.parentNode;
        }
        n2 = void 0;
      }
      n2 = ei(n2);
    }
  }
  function ni(e3, t3) {
    return e3 && t3 ? e3 === t3 ? true : e3 && e3.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? ni(e3, t3.parentNode) : `contains` in e3 ? e3.contains(t3) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t3) & 16) : false : false;
  }
  function ri(e3) {
    e3 = e3 != null && e3.ownerDocument != null && e3.ownerDocument.defaultView != null ? e3.ownerDocument.defaultView : window;
    for (var t3 = $r(e3.document); t3 instanceof e3.HTMLIFrameElement; ) {
      try {
        var n2 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n2 = false;
      }
      if (n2) e3 = t3.contentWindow;
      else break;
      t3 = $r(e3.document);
    }
    return t3;
  }
  function ii(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t3 === `textarea` || e3.contentEditable === `true`);
  }
  var ai = Ln && `documentMode` in document && 11 >= document.documentMode, oi = null, si = null, ci = null, li = false;
  function ui(e3, t3, n2) {
    var r3 = n2.window === n2 ? n2.document : n2.nodeType === 9 ? n2 : n2.ownerDocument;
    li || oi == null || oi !== $r(r3) || (r3 = oi, `selectionStart` in r3 && ii(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), ci && Qr(ci, r3) || (ci = r3, r3 = Jf(si, `onSelect`), 0 < r3.length && (t3 = new Yn(`onSelect`, `select`, null, t3, n2), e3.push({ event: t3, listeners: r3 }), t3.target = oi)));
  }
  function di(e3, t3) {
    var n2 = {};
    return n2[e3.toLowerCase()] = t3.toLowerCase(), n2[`Webkit` + e3] = `webkit` + t3, n2[`Moz` + e3] = `moz` + t3, n2;
  }
  var fi = { animationend: di(`Animation`, `AnimationEnd`), animationiteration: di(`Animation`, `AnimationIteration`), animationstart: di(`Animation`, `AnimationStart`), transitionrun: di(`Transition`, `TransitionRun`), transitionstart: di(`Transition`, `TransitionStart`), transitioncancel: di(`Transition`, `TransitionCancel`), transitionend: di(`Transition`, `TransitionEnd`) }, pi = {}, mi = {};
  Ln && (mi = document.createElement(`div`).style, `AnimationEvent` in window || (delete fi.animationend.animation, delete fi.animationiteration.animation, delete fi.animationstart.animation), `TransitionEvent` in window || delete fi.transitionend.transition);
  function hi(e3) {
    if (pi[e3]) return pi[e3];
    if (!fi[e3]) return e3;
    var t3 = fi[e3], n2;
    for (n2 in t3) if (t3.hasOwnProperty(n2) && n2 in mi) return pi[e3] = t3[n2];
    return e3;
  }
  var gi = hi(`animationend`), _i = hi(`animationiteration`), vi = hi(`animationstart`), yi = hi(`transitionrun`), bi = hi(`transitionstart`), xi = hi(`transitioncancel`), Si = hi(`transitionend`), Ci = /* @__PURE__ */ new Map(), wi = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  wi.push(`scrollEnd`);
  function Ti(e3, t3) {
    Ci.set(e3, t3), Xt(t3, [e3]);
  }
  var Ei = 0;
  function Di(e3, t3) {
    if (e3.name != null && e3.name !== `auto`) return e3.name;
    if (t3.autoName !== null) return t3.autoName;
    e3 = bd.identifierPrefix;
    var n2 = Ei++;
    return e3 = `_` + e3 + `t_` + n2.toString(32) + `_`, t3.autoName = e3;
  }
  function Oi(e3) {
    if (e3 == null || typeof e3 == `string`) return e3;
    var t3 = null, n2 = Od;
    if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
      var i2 = e3[n2[r3]];
      if (i2 != null) {
        if (i2 === `none`) return `none`;
        t3 = t3 == null ? i2 : t3 + (` ` + i2);
      }
    }
    return t3 != null ? t3 : e3.default;
  }
  function ki(e3, t3) {
    return e3 = Oi(e3), t3 = Oi(t3), t3 == null ? e3 === `auto` ? null : e3 : t3 === `auto` ? null : t3;
  }
  var Ai = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  }, ji = [], Mi = 0, Ni = 0;
  function Pi() {
    for (var e3 = Mi, t3 = Ni = Mi = 0; t3 < e3; ) {
      var n2 = ji[t3];
      ji[t3++] = null;
      var r3 = ji[t3];
      ji[t3++] = null;
      var i2 = ji[t3];
      ji[t3++] = null;
      var a3 = ji[t3];
      if (ji[t3++] = null, r3 !== null && i2 !== null) {
        var o2 = r3.pending;
        o2 === null ? i2.next = i2 : (i2.next = o2.next, o2.next = i2), r3.pending = i2;
      }
      a3 !== 0 && Ri(n2, i2, a3);
    }
  }
  function Fi(e3, t3, n2, r3) {
    ji[Mi++] = e3, ji[Mi++] = t3, ji[Mi++] = n2, ji[Mi++] = r3, Ni |= r3, e3.lanes |= r3, e3 = e3.alternate, e3 !== null && (e3.lanes |= r3);
  }
  function Ii(e3, t3, n2, r3) {
    return Fi(e3, t3, n2, r3), zi(e3);
  }
  function Li(e3, t3) {
    return Fi(e3, null, null, t3), zi(e3);
  }
  function Ri(e3, t3, n2) {
    e3.lanes |= n2;
    var r3 = e3.alternate;
    r3 !== null && (r3.lanes |= n2);
    for (var i2 = false, a3 = e3.return; a3 !== null; ) a3.childLanes |= n2, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n2), a3.tag === 22 && (e3 = a3.stateNode, e3 === null || e3._visibility & 1 || (i2 = true)), e3 = a3, a3 = a3.return;
    return e3.tag === 3 ? (a3 = e3.stateNode, i2 && t3 !== null && (i2 = 31 - ct(n2), e3 = a3.hiddenUpdates, r3 = e3[i2], r3 === null ? e3[i2] = [t3] : r3.push(t3), t3.lane = n2 | 536870912), a3) : null;
  }
  function zi(e3) {
    if (50 < kd) throw kd = 0, Ad = null, Error(s2(185));
    for (var t3 = e3.return; t3 !== null; ) e3 = t3, t3 = e3.return;
    return e3.tag === 3 ? e3.stateNode : null;
  }
  var Bi = {};
  function Vi(e3, t3, n2, r3) {
    this.tag = e3, this.key = n2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Hi(e3, t3, n2, r3) {
    return new Vi(e3, t3, n2, r3);
  }
  function Ui(e3) {
    return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
  }
  function Wi(e3, t3) {
    var n2 = e3.alternate;
    return n2 === null ? (n2 = Hi(e3.tag, t3, e3.key, e3.mode), n2.elementType = e3.elementType, n2.type = e3.type, n2.stateNode = e3.stateNode, n2.alternate = e3, e3.alternate = n2) : (n2.pendingProps = t3, n2.type = e3.type, n2.flags = 0, n2.subtreeFlags = 0, n2.deletions = null), n2.flags = e3.flags & 1206910976, n2.childLanes = e3.childLanes, n2.lanes = e3.lanes, n2.child = e3.child, n2.memoizedProps = e3.memoizedProps, n2.memoizedState = e3.memoizedState, n2.updateQueue = e3.updateQueue, t3 = e3.dependencies, n2.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n2.sibling = e3.sibling, n2.index = e3.index, n2.ref = e3.ref, n2.refCleanup = e3.refCleanup, n2;
  }
  function Gi(e3, t3) {
    e3.flags &= 1206910978;
    var n2 = e3.alternate;
    return n2 === null ? (e3.childLanes = 0, e3.lanes = t3, e3.child = null, e3.subtreeFlags = 0, e3.memoizedProps = null, e3.memoizedState = null, e3.updateQueue = null, e3.dependencies = null, e3.stateNode = null) : (e3.childLanes = n2.childLanes, e3.lanes = n2.lanes, e3.child = n2.child, e3.subtreeFlags = 0, e3.deletions = null, e3.memoizedProps = n2.memoizedProps, e3.memoizedState = n2.memoizedState, e3.updateQueue = n2.updateQueue, e3.type = n2.type, t3 = n2.dependencies, e3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e3;
  }
  function Ki(e3, t3, n2, r3, i2, a3) {
    var o2 = 0;
    if (r3 = e3, typeof r3 == `function`) Ui(r3) && (o2 = 1);
    else if (typeof r3 == `string`) o2 = qm(e3, n2, Ae2.current) ? 26 : e3 === `html` || e3 === `head` || e3 === `body` ? 27 : 5;
    else a: switch (r3) {
      case he2:
        return e3 = Hi(31, n2, t3, i2), e3.elementType = he2, e3.lanes = a3, e3;
      case w2:
        return qi(n2.children, i2, a3, t3);
      case se2:
        o2 = 8, i2 |= 24;
        break;
      case ce2:
        return e3 = Hi(12, n2, t3, i2 | 2), e3.elementType = ce2, e3.lanes = a3, e3;
      case de2:
        return e3 = Hi(13, n2, t3, i2), e3.elementType = de2, e3.lanes = a3, e3;
      case fe2:
        return e3 = Hi(19, n2, t3, i2), e3.elementType = fe2, e3.lanes = a3, e3;
      case ge2:
      case ve2:
        return e3 = i2 | 32, e3 = Hi(30, n2, t3, e3), e3.elementType = ve2, e3.lanes = a3, e3.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e3;
      default:
        if (typeof r3 == `object` && r3) switch (r3.$$typeof) {
          case T2:
            o2 = 10;
            break a;
          case le2:
            o2 = 9;
            break a;
          case ue2:
            o2 = 11;
            break a;
          case pe2:
            o2 = 14;
            break a;
          case me2:
            o2 = 16, r3 = null;
            break a;
        }
        o2 = 29, n2 = Error(s2(130, e3 === null ? `null` : typeof e3, ``)), r3 = null;
    }
    return t3 = Hi(o2, n2, t3, i2), t3.elementType = e3, t3.type = r3, t3.lanes = a3, t3;
  }
  function qi(e3, t3, n2, r3) {
    return e3 = Hi(7, e3, r3, t3), e3.lanes = n2, e3;
  }
  function Ji(e3, t3, n2) {
    return e3 = Hi(6, e3, null, t3), e3.lanes = n2, e3;
  }
  function Yi(e3) {
    var t3 = Hi(18, null, null, 0);
    return t3.stateNode = e3, t3;
  }
  function Xi(e3, t3, n2) {
    return t3 = Hi(4, e3.children === null ? [] : e3.children, e3.key, t3), t3.lanes = n2, t3.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t3;
  }
  var Zi = /* @__PURE__ */ new WeakMap();
  function Qi(e3, t3) {
    if (typeof e3 == `object` && e3) {
      var n2 = Zi.get(e3);
      return n2 === void 0 ? (t3 = { value: e3, source: t3, stack: We(t3) }, Zi.set(e3, t3), t3) : n2;
    }
    return { value: e3, source: t3, stack: We(t3) };
  }
  var $i = [], ea = 0, ta = null, na = 0, ra = [], ia = 0, aa = null, oa = 1, sa = ``;
  function ca(e3, t3) {
    $i[ea++] = na, $i[ea++] = ta, ta = e3, na = t3;
  }
  function la(e3, t3, n2) {
    ra[ia++] = oa, ra[ia++] = sa, ra[ia++] = aa, aa = e3;
    var r3 = oa;
    e3 = sa;
    var i2 = 32 - ct(r3) - 1;
    r3 &= ~(1 << i2), n2 += 1;
    var a3 = 32 - ct(t3) + i2;
    if (30 < a3) {
      var o2 = i2 - i2 % 5;
      a3 = (r3 & (1 << o2) - 1).toString(32), r3 >>= o2, i2 -= o2, oa = 1 << 32 - ct(t3) + i2 | n2 << i2 | r3, sa = a3 + e3;
    } else oa = 1 << a3 | n2 << i2 | r3, sa = e3;
  }
  function ua(e3) {
    e3.return !== null && (ca(e3, 1), la(e3, 1, 0));
  }
  function da(e3) {
    for (; e3 === ta; ) ta = $i[--ea], $i[ea] = null, na = $i[--ea], $i[ea] = null;
    for (; e3 === aa; ) aa = ra[--ia], ra[ia] = null, sa = ra[--ia], ra[ia] = null, oa = ra[--ia], ra[ia] = null;
  }
  function fa(e3, t3) {
    ra[ia++] = oa, ra[ia++] = sa, ra[ia++] = aa, oa = t3.id, sa = t3.overflow, aa = e3;
  }
  var pa = null, A = null, j = false, ma = null, ha = false, ga = Error(s2(519));
  function _a(e3) {
    throw Ca(Qi(Error(s2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e3)), ga;
  }
  function va(e3) {
    var t3 = e3.stateNode, n2 = e3.type, r3 = e3.memoizedProps;
    switch (t3[Mt] = e3, t3[Nt] = r3, n2) {
      case `dialog`:
        Q(`cancel`, t3), Q(`close`, t3);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, t3);
        break;
      case `video`:
      case `audio`:
        for (n2 = 0; n2 < zf.length; n2++) Q(zf[n2], t3);
        break;
      case `source`:
        Q(`error`, t3);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, t3), Q(`load`, t3);
        break;
      case `details`:
        Q(`toggle`, t3);
        break;
      case `input`:
        Q(`invalid`, t3), hn(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
        break;
      case `select`:
        Q(`invalid`, t3);
        break;
      case `textarea`:
        Q(`invalid`, t3), yn(t3, r3.value, r3.defaultValue, r3.children);
    }
    n2 = r3.children, typeof n2 != `string` && typeof n2 != `number` && typeof n2 != `bigint` || t3.textContent === `` + n2 || true === r3.suppressHydrationWarning || ep(t3.textContent, n2) ? (r3.popover != null && (Q(`beforetoggle`, t3), Q(`toggle`, t3)), r3.onScroll != null && Q(`scroll`, t3), r3.onScrollEnd != null && Q(`scrollend`, t3), r3.onClick != null && (t3.onclick = On), t3 = true) : t3 = false, t3 || _a(e3, true);
  }
  function ya(e3) {
    for (pa = e3.return; pa; ) switch (pa.tag) {
      case 5:
      case 31:
      case 13:
        ha = false;
        return;
      case 27:
      case 3:
        ha = true;
        return;
      default:
        pa = pa.return;
    }
  }
  function ba(e3) {
    if (e3 !== pa) return false;
    if (!j) return ya(e3), j = true, false;
    var t3 = e3.tag, n2;
    if ((n2 = t3 !== 3 && t3 !== 27) && ((n2 = t3 === 5) && (n2 = e3.type, n2 = n2 === `form` || n2 === `button` || pp(e3.type, e3.memoizedProps)), n2 = !n2), n2 && A && _a(e3), ya(e3), t3 === 13) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(s2(317));
      A = dm(e3);
    } else if (t3 === 31) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(s2(317));
      A = dm(e3);
    } else t3 === 27 ? (t3 = A, Sp(e3.type) ? (e3 = um, um = null, A = e3) : A = t3) : A = pa ? lm(e3.stateNode.nextSibling) : null;
    return true;
  }
  function xa() {
    A = pa = null, j = false;
  }
  function Sa() {
    var e3 = ma;
    return e3 !== null && (pd === null ? pd = e3 : pd.push.apply(pd, e3), ma = null), e3;
  }
  function Ca(e3) {
    ma === null ? ma = [e3] : ma.push(e3);
  }
  var wa = Oe2(null), Ta = null, Ea = null;
  function Da(e3, t3, n2) {
    O2(wa, t3._currentValue), t3._currentValue = n2;
  }
  function Oa(e3) {
    e3._currentValue = wa.current, ke2(wa);
  }
  function ka(e3, t3, n2) {
    for (; e3 !== null; ) {
      var r3 = e3.alternate;
      if ((e3.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e3.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e3 === n2) break;
      e3 = e3.return;
    }
  }
  function Aa(e3, t3, n2, r3) {
    var i2 = e3.child;
    for (i2 !== null && (i2.return = e3); i2 !== null; ) {
      var a3 = i2.dependencies;
      if (a3 !== null) {
        var o2 = i2.child;
        a3 = a3.firstContext;
        a: for (; a3 !== null; ) {
          var c3 = a3;
          a3 = i2;
          for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
            a3.lanes |= n2, c3 = a3.alternate, c3 !== null && (c3.lanes |= n2), ka(a3.return, n2, e3), r3 || (o2 = null);
            break a;
          }
          a3 = c3.next;
        }
      } else if (i2.tag === 18) {
        if (o2 = i2.return, o2 === null) throw Error(s2(341));
        o2.lanes |= n2, a3 = o2.alternate, a3 !== null && (a3.lanes |= n2), ka(o2, n2, e3), o2 = null;
      } else i2.tag === 13 && i2.memoizedState !== null && i2.memoizedState.dehydrated === null ? (i2.lanes |= n2, o2 = i2.alternate, o2 !== null && (o2.lanes |= n2), ka(i2.return, n2, e3), o2 = i2.child, o2 = o2 === null ? null : o2.sibling) : o2 = i2.child;
      if (o2 !== null) o2.return = i2;
      else for (o2 = i2; o2 !== null; ) {
        if (o2 === e3) {
          o2 = null;
          break;
        }
        if (i2 = o2.sibling, i2 !== null) {
          i2.return = o2.return, o2 = i2;
          break;
        }
        o2 = o2.return;
      }
      i2 = o2;
    }
  }
  function ja(e3, t3, n2, r3) {
    e3 = null;
    for (var i2 = t3, a3 = false; i2 !== null; ) {
      if (!a3) {
        if (i2.flags & 524288) a3 = true;
        else if (i2.flags & 262144) break;
      }
      if (i2.tag === 10) {
        var o2 = i2.alternate;
        if (o2 === null) throw Error(s2(387));
        if (o2 = o2.memoizedProps, o2 !== null) {
          var c3 = i2.type;
          Zr(i2.pendingProps.value, o2.value) || (e3 === null ? e3 = [c3] : e3.push(c3));
        }
      } else if (i2 === Ne2.current) {
        if (o2 = i2.alternate, o2 === null) throw Error(s2(387));
        o2.memoizedState.memoizedState !== i2.memoizedState.memoizedState && (e3 === null ? e3 = [sh] : e3.push(sh));
      }
      i2 = i2.return;
    }
    return e3 !== null && Aa(t3, e3, n2, r3), t3.flags |= 262144, e3 !== null;
  }
  function Ma(e3) {
    for (e3 = e3.firstContext; e3 !== null; ) {
      if (!Zr(e3.context._currentValue, e3.memoizedValue)) return true;
      e3 = e3.next;
    }
    return false;
  }
  function Na(e3) {
    Ta = e3, Ea = null, e3 = e3.dependencies, e3 !== null && (e3.firstContext = null);
  }
  function Pa(e3) {
    return Ia(Ta, e3);
  }
  function Fa(e3, t3) {
    return Ta === null && Na(e3), Ia(e3, t3);
  }
  function Ia(e3, t3) {
    var n2 = t3._currentValue;
    if (t3 = { context: t3, memoizedValue: n2, next: null }, Ea === null) {
      if (e3 === null) throw Error(s2(308));
      Ea = t3, e3.dependencies = { lanes: 0, firstContext: t3 }, e3.flags |= 524288;
    } else Ea = Ea.next = t3;
    return n2;
  }
  var La = typeof AbortController < `u` ? AbortController : function() {
    var e3 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n2) {
      e3.push(n2);
    } };
    this.abort = function() {
      t3.aborted = true, e3.forEach(function(e4) {
        return e4();
      });
    };
  }, Ra = t2.unstable_scheduleCallback, za = t2.unstable_NormalPriority, M = { $$typeof: T2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Ba() {
    return { controller: new La(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Va(e3) {
    e3.refCount--, e3.refCount === 0 && Ra(za, function() {
      e3.controller.abort();
    });
  }
  function Ha(e3, t3) {
    if (e3.pendingLanes & 4194048) {
      var n2 = e3.transitionTypes;
      for (n2 === null && (n2 = e3.transitionTypes = []), e3 = 0; e3 < t3.length; e3++) {
        var r3 = t3[e3];
        n2.indexOf(r3) === -1 && n2.push(r3);
      }
    }
  }
  var Ua = null;
  function Wa(e3) {
    var t3 = e3.transitionTypes;
    return e3.transitionTypes = null, t3;
  }
  var Ga = null, Ka = 0, qa = 0, Ja = null;
  function Ya(e3, t3) {
    if (Ga === null) {
      var n2 = Ga = [];
      Ka = 0, qa = Pf(), Ja = { status: `pending`, value: void 0, then: function(e4) {
        n2.push(e4);
      } };
    }
    return Ka++, t3.then(Xa, Xa), t3;
  }
  function Xa() {
    if (--Ka === 0 && (Ua = null, Ga !== null)) {
      Ja !== null && (Ja.status = `fulfilled`);
      var e3 = Ga;
      Ga = null, qa = 0, Ja = null;
      for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
    }
  }
  function Za(e3, t3) {
    var n2 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e4) {
      n2.push(e4);
    } };
    return e3.then(function() {
      r3.status = `fulfilled`, r3.value = t3;
      for (var e4 = 0; e4 < n2.length; e4++) (0, n2[e4])(t3);
    }, function(e4) {
      for (r3.status = `rejected`, r3.reason = e4, e4 = 0; e4 < n2.length; e4++) (0, n2[e4])(void 0);
    }), r3;
  }
  var Qa = E2.S;
  E2.S = function(e3, t3) {
    if (gd = Xe(), typeof t3 == `object` && t3 && typeof t3.then == `function` && Ya(e3, t3), Ua !== null) for (var n2 = bf; n2 !== null; ) Ha(n2, Ua), n2 = n2.next;
    if (n2 = e3.types, n2 !== null) {
      for (var r3 = bf; r3 !== null; ) Ha(r3, n2), r3 = r3.next;
      if (qa !== 0) {
        r3 = Ua, r3 === null && (r3 = Ua = []);
        for (var i2 = 0; i2 < n2.length; i2++) {
          var a3 = n2[i2];
          r3.indexOf(a3) === -1 && r3.push(a3);
        }
      }
    }
    Qa !== null && Qa(e3, t3);
  };
  var $a = Oe2(null);
  function eo() {
    var e3 = $a.current;
    return e3 === null ? G.pooledCache : e3;
  }
  function to(e3, t3) {
    t3 === null ? O2($a, $a.current) : O2($a, t3.pool);
  }
  function no() {
    var e3 = eo();
    return e3 === null ? null : { parent: M._currentValue, pool: e3 };
  }
  var ro = Error(s2(460)), io = Error(s2(474)), ao = Error(s2(542)), oo = { then: function() {
  } };
  function so(e3) {
    return e3 = e3.status, e3 === `fulfilled` || e3 === `rejected`;
  }
  function co(e3, t3, n2) {
    switch (n2 = e3[n2], n2 === void 0 ? e3.push(t3) : n2 !== t3 && (t3.then(On, On), t3 = n2), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e3 = t3.reason, po(e3), e3 === void 0 && !(`reason` in t3) ? Error(s2(600)) : e3;
      default:
        if (typeof t3.status == `string`) t3.then(On, On);
        else {
          if (e3 = G, e3 !== null && 100 < e3.shellSuspendCounter) throw Error(s2(482));
          e3 = t3, e3.status = `pending`, e3.then(function(e4) {
            if (t3.status === `pending`) {
              var n3 = t3;
              n3.status = `fulfilled`, n3.value = e4;
            }
          }, function(e4) {
            if (t3.status === `pending`) {
              var n3 = t3;
              n3.status = `rejected`, n3.reason = e4;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e3 = t3.reason, po(e3), e3;
        }
        throw uo = t3, ro;
    }
  }
  function lo(e3) {
    try {
      var t3 = e3._init;
      return t3(e3._payload);
    } catch (e4) {
      throw typeof e4 == `object` && e4 && typeof e4.then == `function` ? (uo = e4, ro) : e4;
    }
  }
  var uo = null;
  function fo() {
    if (uo === null) throw Error(s2(459));
    var e3 = uo;
    return uo = null, e3;
  }
  function po(e3) {
    if (e3 === ro || e3 === ao) throw Error(s2(483));
  }
  var mo = null, ho = 0;
  function go(e3) {
    var t3 = ho;
    return ho += 1, mo === null && (mo = []), co(mo, e3, t3);
  }
  function _o(e3, t3) {
    t3 = t3.props.ref, e3.ref = t3 === void 0 ? null : t3;
  }
  function vo(e3, t3) {
    throw t3.$$typeof === ie2 ? Error(s2(525)) : (e3 = Object.prototype.toString.call(t3), Error(s2(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e3)));
  }
  function yo(e3) {
    function t3(t4, n3) {
      if (e3) {
        var r4 = t4.deletions;
        r4 === null ? (t4.deletions = [n3], t4.flags |= 16) : r4.push(n3);
      }
    }
    function n2(n3, r4) {
      if (!e3) return null;
      for (; r4 !== null; ) t3(n3, r4), r4 = r4.sibling;
      return null;
    }
    function r3(e4) {
      for (var t4 = /* @__PURE__ */ new Map(); e4 !== null; ) e4.key === null ? t4.set(e4.index, e4) : t4.set(e4.key, e4), e4 = e4.sibling;
      return t4;
    }
    function i2(e4, t4) {
      return e4 = Wi(e4, t4), e4.index = 0, e4.sibling = null, e4;
    }
    function a3(t4, n3, r4) {
      return t4.index = r4, e3 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 134217730, n3) : (r4 = r4.index, r4 < n3 ? (t4.flags |= 2, n3) : r4)) : (t4.flags |= 1048576, n3);
    }
    function o2(t4) {
      return e3 && t4.alternate === null && (t4.flags |= 134217730), t4;
    }
    function c3(e4, t4, n3, r4) {
      return t4 === null || t4.tag !== 6 ? (t4 = Ji(n3, e4.mode, r4), t4.return = e4, t4) : (t4 = i2(t4, n3), t4.return = e4, t4);
    }
    function l3(e4, t4, n3, r4) {
      var a4 = n3.type;
      return a4 === w2 ? (e4 = d3(e4, t4, n3.props.children, r4, n3.key), _o(e4, n3), e4) : t4 !== null && (t4.elementType === a4 || typeof a4 == `object` && a4 && a4.$$typeof === me2 && lo(a4) === t4.type) ? (t4 = i2(t4, n3.props), _o(t4, n3), t4.return = e4, t4) : (t4 = Ki(n3.type, n3.key, n3.props, null, e4.mode, r4), _o(t4, n3), t4.return = e4, t4);
    }
    function u3(e4, t4, n3, r4) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n3.containerInfo || t4.stateNode.implementation !== n3.implementation ? (t4 = Xi(n3, e4.mode, r4), t4.return = e4, t4) : (t4 = i2(t4, n3.children || []), t4.return = e4, t4);
    }
    function d3(e4, t4, n3, r4, a4) {
      return t4 === null || t4.tag !== 7 ? (t4 = qi(n3, e4.mode, r4, a4), t4.return = e4, t4) : (t4 = i2(t4, n3), t4.return = e4, t4);
    }
    function f3(e4, t4, n3) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = Ji(`` + t4, e4.mode, n3), t4.return = e4, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case ae2:
            return n3 = Ki(t4.type, t4.key, t4.props, null, e4.mode, n3), _o(n3, t4), n3.return = e4, n3;
          case oe2:
            return t4 = Xi(t4, e4.mode, n3), t4.return = e4, t4;
          case me2:
            return t4 = lo(t4), f3(e4, t4, n3);
        }
        if (we2(t4) || xe2(t4)) return t4 = qi(t4, e4.mode, n3, null), t4.return = e4, t4;
        if (typeof t4.then == `function`) return f3(e4, go(t4), n3);
        if (t4.$$typeof === T2) return f3(e4, Fa(e4, t4), n3);
        vo(e4, t4);
      }
      return null;
    }
    function p3(e4, t4, n3, r4) {
      var i3 = t4 === null ? null : t4.key;
      if (typeof n3 == `string` && n3 !== `` || typeof n3 == `number` || typeof n3 == `bigint`) return i3 === null ? c3(e4, t4, `` + n3, r4) : null;
      if (typeof n3 == `object` && n3) {
        switch (n3.$$typeof) {
          case ae2:
            return n3.key === i3 ? l3(e4, t4, n3, r4) : null;
          case oe2:
            return n3.key === i3 ? u3(e4, t4, n3, r4) : null;
          case me2:
            return n3 = lo(n3), p3(e4, t4, n3, r4);
        }
        if (we2(n3) || xe2(n3)) return i3 === null ? d3(e4, t4, n3, r4, null) : null;
        if (typeof n3.then == `function`) return p3(e4, t4, go(n3), r4);
        if (n3.$$typeof === T2) return p3(e4, t4, Fa(e4, n3), r4);
        vo(e4, n3);
      }
      return null;
    }
    function m3(e4, t4, n3, r4, i3) {
      if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e4 = e4.get(n3) || null, c3(t4, e4, `` + r4, i3);
      if (typeof r4 == `object` && r4) {
        switch (r4.$$typeof) {
          case ae2:
            return e4 = e4.get(r4.key === null ? n3 : r4.key) || null, l3(t4, e4, r4, i3);
          case oe2:
            return e4 = e4.get(r4.key === null ? n3 : r4.key) || null, u3(t4, e4, r4, i3);
          case me2:
            return r4 = lo(r4), m3(e4, t4, n3, r4, i3);
        }
        if (we2(r4) || xe2(r4)) return e4 = e4.get(n3) || null, d3(t4, e4, r4, i3, null);
        if (typeof r4.then == `function`) return m3(e4, t4, n3, go(r4), i3);
        if (r4.$$typeof === T2) return m3(e4, t4, n3, Fa(t4, r4), i3);
        vo(t4, r4);
      }
      return null;
    }
    function h3(i3, o3, s3, c4) {
      for (var l4 = null, u4 = null, d4 = o3, h4 = o3 = 0, g4 = null; d4 !== null && h4 < s3.length; h4++) {
        d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
        var _4 = p3(i3, d4, s3[h4], c4);
        if (_4 === null) {
          d4 === null && (d4 = g4);
          break;
        }
        e3 && d4 && _4.alternate === null && t3(i3, d4), o3 = a3(_4, o3, h4), u4 === null ? l4 = _4 : u4.sibling = _4, u4 = _4, d4 = g4;
      }
      if (h4 === s3.length) return n2(i3, d4), j && ca(i3, h4), l4;
      if (d4 === null) {
        for (; h4 < s3.length; h4++) d4 = f3(i3, s3[h4], c4), d4 !== null && (o3 = a3(d4, o3, h4), u4 === null ? l4 = d4 : u4.sibling = d4, u4 = d4);
        return j && ca(i3, h4), l4;
      }
      for (d4 = r3(d4); h4 < s3.length; h4++) g4 = m3(d4, i3, h4, s3[h4], c4), g4 !== null && (e3 && (_4 = g4.alternate, _4 !== null && d4.delete(_4.key === null ? h4 : _4.key)), o3 = a3(g4, o3, h4), u4 === null ? l4 = g4 : u4.sibling = g4, u4 = g4);
      return e3 && d4.forEach(function(e4) {
        return t3(i3, e4);
      }), j && ca(i3, h4), l4;
    }
    function g3(i3, o3, c4, l4) {
      if (c4 == null) throw Error(s2(151));
      for (var u4 = null, d4 = null, h4 = o3, g4 = o3 = 0, _4 = null, v3 = c4.next(); h4 !== null && !v3.done; g4++, v3 = c4.next()) {
        h4.index > g4 ? (_4 = h4, h4 = null) : _4 = h4.sibling;
        var y3 = p3(i3, h4, v3.value, l4);
        if (y3 === null) {
          h4 === null && (h4 = _4);
          break;
        }
        e3 && h4 && y3.alternate === null && t3(i3, h4), o3 = a3(y3, o3, g4), d4 === null ? u4 = y3 : d4.sibling = y3, d4 = y3, h4 = _4;
      }
      if (v3.done) return n2(i3, h4), j && ca(i3, g4), u4;
      if (h4 === null) {
        for (; !v3.done; g4++, v3 = c4.next()) v3 = f3(i3, v3.value, l4), v3 !== null && (o3 = a3(v3, o3, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
        return j && ca(i3, g4), u4;
      }
      for (h4 = r3(h4); !v3.done; g4++, v3 = c4.next()) v3 = m3(h4, i3, g4, v3.value, l4), v3 !== null && (e3 && (_4 = v3.alternate, _4 !== null && h4.delete(_4.key === null ? g4 : _4.key)), o3 = a3(v3, o3, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
      return e3 && h4.forEach(function(e4) {
        return t3(i3, e4);
      }), j && ca(i3, g4), u4;
    }
    function _3(e4, r4, a4, c4) {
      if (typeof a4 == `object` && a4 && a4.type === w2 && a4.key === null && a4.props.ref === void 0 && (a4 = a4.props.children), typeof a4 == `object` && a4) {
        switch (a4.$$typeof) {
          case ae2:
            a: {
              for (var l4 = a4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (l4 = a4.type, l4 === w2) {
                    if (r4.tag === 7) {
                      n2(e4, r4.sibling), c4 = i2(r4, a4.props.children), _o(c4, a4), c4.return = e4, e4 = c4;
                      break a;
                    }
                  } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === me2 && lo(l4) === r4.type) {
                    n2(e4, r4.sibling), c4 = i2(r4, a4.props), _o(c4, a4), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n2(e4, r4);
                  break;
                }
                t3(e4, r4), r4 = r4.sibling;
              }
              a4.type === w2 ? (c4 = qi(a4.props.children, e4.mode, c4, a4.key), _o(c4, a4), c4.return = e4, e4 = c4) : (c4 = Ki(a4.type, a4.key, a4.props, null, e4.mode, c4), _o(c4, a4), c4.return = e4, e4 = c4);
            }
            return o2(e4);
          case oe2:
            a: {
              for (l4 = a4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (r4.tag === 4 && r4.stateNode.containerInfo === a4.containerInfo && r4.stateNode.implementation === a4.implementation) {
                    n2(e4, r4.sibling), c4 = i2(r4, a4.children || []), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n2(e4, r4);
                  break;
                }
                t3(e4, r4), r4 = r4.sibling;
              }
              c4 = Xi(a4, e4.mode, c4), c4.return = e4, e4 = c4;
            }
            return o2(e4);
          case me2:
            return a4 = lo(a4), _3(e4, r4, a4, c4);
        }
        if (we2(a4)) return h3(e4, r4, a4, c4);
        if (xe2(a4)) {
          if (l4 = xe2(a4), typeof l4 != `function`) throw Error(s2(150));
          return a4 = l4.call(a4), g3(e4, r4, a4, c4);
        }
        if (typeof a4.then == `function`) return _3(e4, r4, go(a4), c4);
        if (a4.$$typeof === T2) return _3(e4, r4, Fa(e4, a4), c4);
        vo(e4, a4);
      }
      return typeof a4 == `string` && a4 !== `` || typeof a4 == `number` || typeof a4 == `bigint` ? (a4 = `` + a4, r4 !== null && r4.tag === 6 ? (n2(e4, r4.sibling), c4 = i2(r4, a4), c4.return = e4, e4 = c4) : (n2(e4, r4), c4 = Ji(a4, e4.mode, c4), c4.return = e4, e4 = c4), o2(e4)) : n2(e4, r4);
    }
    return function(e4, t4, n3, r4) {
      try {
        ho = 0;
        var i3 = _3(e4, t4, n3, r4);
        return mo = null, i3;
      } catch (t5) {
        if (t5 === ro || t5 === ao) throw t5;
        var a4 = Hi(29, t5, null, e4.mode);
        return a4.lanes = r4, a4.return = e4, a4;
      }
    };
  }
  var bo = yo(true), xo = yo(false), So = false;
  function Co(e3) {
    e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function wo(e3, t3) {
    e3 = e3.updateQueue, t3.updateQueue === e3 && (t3.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, callbacks: null });
  }
  function To(e3) {
    return { lane: e3, tag: 0, payload: null, callback: null, next: null };
  }
  function Eo(e3, t3, n2) {
    var r3 = e3.updateQueue;
    if (r3 === null) return null;
    if (r3 = r3.shared, W & 2) {
      var i2 = r3.pending;
      return i2 === null ? t3.next = t3 : (t3.next = i2.next, i2.next = t3), r3.pending = t3, t3 = zi(e3), Ri(e3, null, n2), t3;
    }
    return Fi(e3, r3, t3, n2), zi(e3);
  }
  function Do(e3, t3, n2) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n2 & 4194048)) {
      var r3 = t3.lanes;
      r3 &= e3.pendingLanes, n2 |= r3, t3.lanes = n2, Tt(e3, n2);
    }
  }
  function Oo(e3, t3) {
    var n2 = e3.updateQueue, r3 = e3.alternate;
    if (r3 !== null && (r3 = r3.updateQueue, n2 === r3)) {
      var i2 = null, a3 = null;
      if (n2 = n2.firstBaseUpdate, n2 !== null) {
        do {
          var o2 = { lane: n2.lane, tag: n2.tag, payload: n2.payload, callback: null, next: null };
          a3 === null ? i2 = a3 = o2 : a3 = a3.next = o2, n2 = n2.next;
        } while (n2 !== null);
        a3 === null ? i2 = a3 = t3 : a3 = a3.next = t3;
      } else i2 = a3 = t3;
      n2 = { baseState: r3.baseState, firstBaseUpdate: i2, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e3.updateQueue = n2;
      return;
    }
    e3 = n2.lastBaseUpdate, e3 === null ? n2.firstBaseUpdate = t3 : e3.next = t3, n2.lastBaseUpdate = t3;
  }
  var ko = false;
  function Ao() {
    if (ko) {
      var e3 = Ja;
      if (e3 !== null) throw e3;
    }
  }
  function jo(e3, t3, n2, r3) {
    ko = false;
    var i2 = e3.updateQueue;
    So = false;
    var a3 = i2.firstBaseUpdate, o2 = i2.lastBaseUpdate, s3 = i2.shared.pending;
    if (s3 !== null) {
      i2.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o2 === null ? a3 = l3 : o2.next = l3, o2 = c3;
      var u3 = e3.alternate;
      u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o2 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a3 !== null) {
      var d3 = i2.baseState;
      o2 = 0, u3 = l3 = c3 = null, s3 = a3;
      do {
        var f3 = s3.lane & -536870913, p3 = f3 !== s3.lane;
        if (p3 ? (q & f3) === f3 : (r3 & f3) === f3) {
          f3 !== 0 && f3 === qa && (ko = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
          a: {
            var m3 = e3, h3 = s3;
            f3 = t3;
            var g3 = n2;
            switch (h3.tag) {
              case 1:
                if (m3 = h3.payload, typeof m3 == `function`) {
                  d3 = m3.call(g3, d3, f3);
                  break a;
                }
                d3 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                if (m3 = h3.payload, f3 = typeof m3 == `function` ? m3.call(g3, d3, f3) : m3, f3 == null) break a;
                d3 = C2({}, d3, f3);
                break a;
              case 2:
                So = true;
            }
          }
          f3 = s3.callback, f3 !== null && (e3.flags |= 64, p3 && (e3.flags |= 8192), p3 = i2.callbacks, p3 === null ? i2.callbacks = [f3] : p3.push(f3));
        } else p3 = { lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = p3, c3 = d3) : u3 = u3.next = p3, o2 |= f3;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i2.shared.pending, s3 === null) break;
          p3 = s3, s3 = p3.next, p3.next = null, i2.lastBaseUpdate = p3, i2.shared.pending = null;
        }
      } while (1);
      u3 === null && (c3 = d3), i2.baseState = c3, i2.firstBaseUpdate = l3, i2.lastBaseUpdate = u3, a3 === null && (i2.shared.lanes = 0), sd |= o2, e3.lanes = o2, e3.memoizedState = d3;
    }
  }
  function Mo(e3, t3) {
    if (typeof e3 != `function`) throw Error(s2(191, e3));
    e3.call(t3);
  }
  function No(e3, t3) {
    var n2 = e3.callbacks;
    if (n2 !== null) for (e3.callbacks = null, e3 = 0; e3 < n2.length; e3++) Mo(n2[e3], t3);
  }
  var Po = Oe2(null), Fo = Oe2(0);
  function Io(e3, t3) {
    e3 = od, O2(Fo, e3), O2(Po, t3), od = e3 | t3.baseLanes;
  }
  function Lo() {
    O2(Fo, od), O2(Po, Po.current);
  }
  function Ro() {
    od = Fo.current, ke2(Po), ke2(Fo);
  }
  var zo = Oe2(null), Bo = null;
  function Vo(e3) {
    var t3 = e3.alternate;
    O2(Ko, Ko.current & 1), O2(zo, e3), Bo === null && (t3 === null || Po.current !== null || t3.memoizedState !== null) && (Bo = e3);
  }
  function Ho(e3) {
    O2(Ko, Ko.current), O2(zo, e3), Bo === null && (Bo = e3);
  }
  function Uo(e3) {
    e3.tag === 22 ? (O2(Ko, Ko.current), O2(zo, e3), Bo === null && (Bo = e3)) : Wo();
  }
  function Wo() {
    O2(Ko, Ko.current), O2(zo, zo.current);
  }
  function Go(e3) {
    ke2(zo), Bo === e3 && (Bo = null), ke2(Ko);
  }
  var Ko = Oe2(0);
  function qo(e3, t3) {
    O2(zo, zo.current), O2(Ko, t3);
  }
  function Jo(e3) {
    ke2(Ko), ke2(zo), Bo === e3 && (Bo = null);
  }
  function Yo(e3) {
    for (var t3 = e3; t3 !== null; ) {
      if (t3.tag === 13) {
        var n2 = t3.memoizedState;
        if (n2 !== null && (n2 = n2.dehydrated, n2 === null || om(n2) || sm(n2))) return t3;
      } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
        if (t3.flags & 128) return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e3) break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e3) return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var Xo = 0, N = null, P = null, F = null, Zo = false, Qo = false, $o = false, es = 0, ts = 0, ns = null, rs = 0;
  function I() {
    throw Error(s2(321));
  }
  function is(e3, t3) {
    if (t3 === null) return false;
    for (var n2 = 0; n2 < t3.length && n2 < e3.length; n2++) if (!Zr(e3[n2], t3[n2])) return false;
    return true;
  }
  function as(e3, t3, n2, r3, i2, a3) {
    return Xo = a3, N = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, E2.H = e3 === null || e3.memoizedState === null ? xc : Sc, $o = false, a3 = n2(r3, i2), $o = false, Qo && (a3 = ss(t3, n2, r3, i2)), os(e3), a3;
  }
  function os(e3) {
    E2.H = bc;
    var t3 = P !== null && P.next !== null;
    if (Xo = 0, F = P = N = null, Zo = false, ts = 0, ns = null, t3) throw Error(s2(300));
    e3 === null || R || (e3 = e3.dependencies, e3 !== null && Ma(e3) && (R = true));
  }
  function ss(e3, t3, n2, r3) {
    N = e3;
    var i2 = 0;
    do {
      if (Qo && (ns = null), ts = 0, Qo = false, 25 <= i2) throw Error(s2(301));
      if (i2 += 1, F = P = null, e3.updateQueue != null) {
        var a3 = e3.updateQueue;
        a3.lastEffect = null, a3.events = null, a3.stores = null, a3.memoCache != null && (a3.memoCache.index = 0);
      }
      E2.H = Cc, a3 = t3(n2, r3);
    } while (Qo);
    return a3;
  }
  function cs() {
    var e3 = E2.H, t3 = e3.useState()[0];
    return t3 = typeof t3.then == `function` ? ms(t3) : t3, e3 = e3.useState()[0], (P === null ? null : P.memoizedState) !== e3 && (N.flags |= 1024), t3;
  }
  function ls() {
    var e3 = es !== 0;
    return es = 0, e3;
  }
  function us(e3, t3, n2) {
    t3.updateQueue = e3.updateQueue, t3.flags &= -2053, e3.lanes &= ~n2;
  }
  function ds(e3) {
    if (Zo) {
      for (e3 = e3.memoizedState; e3 !== null; ) {
        var t3 = e3.queue;
        t3 !== null && (t3.pending = null), e3 = e3.next;
      }
      Zo = false;
    }
    Xo = 0, F = P = N = null, Qo = false, ts = es = 0, ns = null;
  }
  function fs() {
    var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return F === null ? N.memoizedState = F = e3 : F = F.next = e3, F;
  }
  function L() {
    if (P === null) {
      var e3 = N.alternate;
      e3 = e3 === null ? null : e3.memoizedState;
    } else e3 = P.next;
    var t3 = F === null ? N.memoizedState : F.next;
    if (t3 !== null) F = t3, P = e3;
    else {
      if (e3 === null) throw N.alternate === null ? Error(s2(467)) : Error(s2(310));
      P = e3, e3 = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, F === null ? N.memoizedState = F = e3 : F = F.next = e3;
    }
    return F;
  }
  function ps() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ms(e3) {
    var t3 = ts;
    return ts += 1, ns === null && (ns = []), e3 = co(ns, e3, t3), t3 = N, (F === null ? t3.memoizedState : F.next) === null && (t3 = t3.alternate, E2.H = t3 === null || t3.memoizedState === null ? xc : Sc), e3;
  }
  function hs(e3) {
    if (typeof e3 == `object` && e3) {
      if (typeof e3.then == `function`) return ms(e3);
      if (e3.$$typeof === ye2) return;
      if (e3.$$typeof === T2) return Pa(e3);
    }
    throw Error(s2(438, String(e3)));
  }
  function gs(e3) {
    var t3 = null, n2 = N.updateQueue;
    if (n2 !== null && (t3 = n2.memoCache), t3 == null) {
      var r3 = N.alternate;
      r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e4) {
        return e4.slice();
      }), index: 0 })));
    }
    if (t3 != null ? t3 : t3 = { data: [], index: 0 }, n2 === null && (n2 = ps(), N.updateQueue = n2), n2.memoCache = t3, n2 = t3.data[t3.index], n2 === void 0) for (n2 = t3.data[t3.index] = Array(e3), r3 = 0; r3 < e3; r3++) n2[r3] = _e2;
    return t3.index++, n2;
  }
  function _s(e3, t3) {
    return typeof t3 == `function` ? t3(e3) : t3;
  }
  function vs(e3) {
    return ys(L(), P, e3);
  }
  function ys(e3, t3, n2) {
    var r3 = e3.queue;
    if (r3 === null) throw Error(s2(311));
    r3.lastRenderedReducer = n2;
    var i2 = e3.baseQueue, a3 = r3.pending;
    if (a3 !== null) {
      if (i2 !== null) {
        var o2 = i2.next;
        i2.next = a3.next, a3.next = o2;
      }
      t3.baseQueue = i2 = a3, r3.pending = null;
    }
    if (a3 = e3.baseState, i2 === null) e3.memoizedState = a3;
    else {
      t3 = i2.next;
      var c3 = o2 = null, l3 = null, u3 = t3, d3 = false;
      do {
        var f3 = u3.lane & -536870913;
        if (f3 === u3.lane ? (Xo & f3) === f3 : (q & f3) === f3) {
          var p3 = u3.revertLane;
          if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f3 === qa && (d3 = true);
          else if ((Xo & p3) === p3) {
            u3 = u3.next, p3 === qa && (d3 = true);
            continue;
          } else f3 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = f3, o2 = a3) : l3 = l3.next = f3, N.lanes |= p3, sd |= p3;
          f3 = u3.action, $o && n2(a3, f3), a3 = u3.hasEagerState ? u3.eagerState : n2(a3, f3);
        } else p3 = { lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, o2 = a3) : l3 = l3.next = p3, N.lanes |= f3, sd |= f3;
        u3 = u3.next;
      } while (u3 !== null && u3 !== t3);
      if (l3 === null ? o2 = a3 : l3.next = c3, !Zr(a3, e3.memoizedState) && (R = true, d3 && (n2 = Ja, n2 !== null))) throw n2;
      e3.memoizedState = a3, e3.baseState = o2, e3.baseQueue = l3, r3.lastRenderedState = a3;
    }
    return i2 === null && (r3.lanes = 0), [e3.memoizedState, r3.dispatch];
  }
  function bs(e3) {
    var t3 = L(), n2 = t3.queue;
    if (n2 === null) throw Error(s2(311));
    n2.lastRenderedReducer = e3;
    var r3 = n2.dispatch, i2 = n2.pending, a3 = t3.memoizedState;
    if (i2 !== null) {
      n2.pending = null;
      var o2 = i2 = i2.next;
      do
        a3 = e3(a3, o2.action), o2 = o2.next;
      while (o2 !== i2);
      Zr(a3, t3.memoizedState) || (R = true), t3.memoizedState = a3, t3.baseQueue === null && (t3.baseState = a3), n2.lastRenderedState = a3;
    }
    return [a3, r3];
  }
  function xs(e3, t3, n2) {
    var r3 = N, i2 = L(), a3 = j;
    if (a3) {
      if (n2 === void 0) throw Error(s2(407));
      n2 = n2();
    } else n2 = t3();
    var o2 = !Zr((P || i2).memoizedState, n2);
    if (o2 && (i2.memoizedState = n2, R = true), i2 = i2.queue, Ks(ws.bind(null, r3, i2, e3), [e3]), e3 = i2.getSnapshot !== t3 || o2 || F !== null && !!(F.memoizedState.tag & 1), Vs(e3 ? 9 : 8, { destroy: void 0 }, Cs.bind(null, r3, i2, n2, t3), null), e3) {
      if (r3.flags |= 2048, G === null) throw Error(s2(349));
      a3 || Xo & 127 || Ss(r3, t3, n2);
    }
    return n2;
  }
  function Ss(e3, t3, n2) {
    e3.flags |= 16384, e3 = { getSnapshot: t3, value: n2 }, t3 = N.updateQueue, t3 === null ? (t3 = ps(), N.updateQueue = t3, t3.stores = [e3]) : (n2 = t3.stores, n2 === null ? t3.stores = [e3] : n2.push(e3));
  }
  function Cs(e3, t3, n2, r3) {
    t3.value = n2, t3.getSnapshot = r3, Ts(t3) && Es(e3);
  }
  function ws(e3, t3, n2) {
    return n2(function() {
      Ts(t3) && Es(e3);
    });
  }
  function Ts(e3) {
    var t3 = e3.getSnapshot;
    e3 = e3.value;
    try {
      var n2 = t3();
      return !Zr(e3, n2);
    } catch {
      return true;
    }
  }
  function Es(e3) {
    var t3 = Li(e3, 2);
    t3 !== null && Pd(t3, e3, 2);
  }
  function Ds(e3) {
    var t3 = fs();
    if (typeof e3 == `function`) {
      var n2 = e3;
      if (e3 = n2(), $o) {
        st(true);
        try {
          n2();
        } finally {
          st(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e3, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: e3 }, t3;
  }
  function Os(e3, t3, n2, r3) {
    return e3.baseState = n2, ys(e3, P, typeof r3 == `function` ? r3 : _s);
  }
  function ks(e3, t3, n2, r3, i2) {
    if (_c(e3)) throw Error(s2(485));
    if (e3 = t3.action, e3 !== null) {
      var a3 = { payload: i2, action: e3, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e4) {
        a3.listeners.push(e4);
      } };
      E2.T === null ? a3.isTransition = false : n2(true), r3(a3), n2 = t3.pending, n2 === null ? (a3.next = t3.pending = a3, As(t3, a3)) : (a3.next = n2.next, t3.pending = n2.next = a3);
    }
  }
  function As(e3, t3) {
    var n2 = t3.action, r3 = t3.payload, i2 = e3.state;
    if (t3.isTransition) {
      var a3 = E2.T, o2 = {};
      o2.types = a3 === null ? null : a3.types, E2.T = o2;
      try {
        var s3 = n2(i2, r3), c3 = E2.S;
        c3 !== null && c3(o2, s3), js(e3, t3, s3);
      } catch (n3) {
        Ns(e3, t3, n3);
      } finally {
        a3 !== null && o2.types !== null && (a3.types = o2.types), E2.T = a3;
      }
    } else try {
      a3 = n2(i2, r3), js(e3, t3, a3);
    } catch (n3) {
      Ns(e3, t3, n3);
    }
  }
  function js(e3, t3, n2) {
    typeof n2 == `object` && n2 && typeof n2.then == `function` ? n2.then(function(n3) {
      Ms(e3, t3, n3);
    }, function(n3) {
      return Ns(e3, t3, n3);
    }) : Ms(e3, t3, n2);
  }
  function Ms(e3, t3, n2) {
    t3.status = `fulfilled`, t3.value = n2, Ps(t3), e3.state = n2, t3 = e3.pending, t3 !== null && (n2 = t3.next, n2 === t3 ? e3.pending = null : (n2 = n2.next, t3.next = n2, As(e3, n2)));
  }
  function Ns(e3, t3, n2) {
    var r3 = e3.pending;
    if (e3.pending = null, r3 !== null) {
      r3 = r3.next;
      do
        t3.status = `rejected`, t3.reason = n2, Ps(t3), t3 = t3.next;
      while (t3 !== r3);
    }
    e3.action = null;
  }
  function Ps(e3) {
    e3 = e3.listeners;
    for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
  }
  function Fs(e3, t3) {
    return t3;
  }
  function Is(e3, t3) {
    if (j) {
      var n2 = G.formState;
      if (n2 !== null) {
        a: {
          var r3 = N;
          if (j) {
            if (A) {
              b: {
                for (var i2 = A, a3 = ha; i2.nodeType !== 8; ) {
                  if (!a3) {
                    i2 = null;
                    break b;
                  }
                  if (i2 = lm(i2.nextSibling), i2 === null) {
                    i2 = null;
                    break b;
                  }
                }
                a3 = i2.data, i2 = a3 === `F!` || a3 === `F` ? i2 : null;
              }
              if (i2) {
                A = lm(i2.nextSibling), r3 = i2.data === `F!`;
                break a;
              }
            }
            _a(r3);
          }
          r3 = false;
        }
        r3 && (t3 = n2[0]);
      }
    }
    return n2 = fs(), n2.memoizedState = n2.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fs, lastRenderedState: t3 }, n2.queue = r3, n2 = mc.bind(null, N, r3), r3.dispatch = n2, r3 = Ds(false), a3 = gc.bind(null, N, false, r3.queue), r3 = fs(), i2 = { state: t3, dispatch: null, action: e3, pending: null }, r3.queue = i2, n2 = ks.bind(null, N, i2, a3, n2), i2.dispatch = n2, r3.memoizedState = e3, [t3, n2, false];
  }
  function Ls(e3) {
    return Rs(L(), P, e3);
  }
  function Rs(e3, t3, n2) {
    if (t3 = ys(e3, t3, Fs)[0], e3 = vs(_s)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
      var r3 = ms(t3);
    } catch (e4) {
      throw e4 === ro ? ao : e4;
    }
    else r3 = t3;
    t3 = L();
    var i2 = t3.queue, a3 = i2.dispatch;
    return n2 !== t3.memoizedState && (N.flags |= 2048, Vs(9, { destroy: void 0 }, zs.bind(null, i2, n2), null)), [r3, a3, e3];
  }
  function zs(e3, t3) {
    e3.action = t3;
  }
  function Bs(e3) {
    var t3 = L(), n2 = P;
    if (n2 !== null) return Rs(t3, n2, e3);
    L(), t3 = t3.memoizedState, n2 = L();
    var r3 = n2.queue.dispatch;
    return n2.memoizedState = e3, [t3, r3, false];
  }
  function Vs(e3, t3, n2, r3) {
    return e3 = { tag: e3, create: n2, deps: r3, inst: t3, next: null }, t3 = N.updateQueue, t3 === null && (t3 = ps(), N.updateQueue = t3), n2 = t3.lastEffect, n2 === null ? t3.lastEffect = e3.next = e3 : (r3 = n2.next, n2.next = e3, e3.next = r3, t3.lastEffect = e3), e3;
  }
  function Hs() {
    return L().memoizedState;
  }
  function Us(e3, t3, n2, r3) {
    var i2 = fs();
    N.flags |= e3, i2.memoizedState = Vs(1 | t3, { destroy: void 0 }, n2, r3 === void 0 ? null : r3);
  }
  function Ws(e3, t3, n2, r3) {
    var i2 = L();
    r3 = r3 === void 0 ? null : r3;
    var a3 = i2.memoizedState.inst;
    P !== null && r3 !== null && is(r3, P.memoizedState.deps) ? i2.memoizedState = Vs(t3, a3, n2, r3) : (N.flags |= e3, i2.memoizedState = Vs(1 | t3, a3, n2, r3));
  }
  function Gs(e3, t3) {
    Us(8390656, 8, e3, t3);
  }
  function Ks(e3, t3) {
    Ws(2048, 8, e3, t3);
  }
  function qs(e3) {
    N.flags |= 4;
    var t3 = N.updateQueue;
    if (t3 === null) t3 = ps(), N.updateQueue = t3, t3.events = [e3];
    else {
      var n2 = t3.events;
      n2 === null ? t3.events = [e3] : n2.push(e3);
    }
  }
  function Js(e3) {
    var t3 = L().memoizedState;
    return qs({ ref: t3, nextImpl: e3 }), function() {
      if (W & 2) throw Error(s2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function Ys(e3, t3) {
    return Ws(4, 2, e3, t3);
  }
  function Xs(e3, t3) {
    return Ws(4, 4, e3, t3);
  }
  function Zs(e3, t3) {
    if (typeof t3 == `function`) {
      e3 = e3();
      var n2 = t3(e3);
      return function() {
        typeof n2 == `function` ? n2() : t3(null);
      };
    }
    if (t3 != null) return e3 = e3(), t3.current = e3, function() {
      t3.current = null;
    };
  }
  function Qs(e3, t3, n2) {
    n2 = n2 == null ? null : n2.concat([e3]), Ws(4, 4, Zs.bind(null, t3, e3), n2);
  }
  function $s() {
  }
  function ec(e3, t3) {
    var n2 = L();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n2.memoizedState;
    return t3 !== null && is(t3, r3[1]) ? r3[0] : (n2.memoizedState = [e3, t3], e3);
  }
  function tc(e3, t3) {
    var n2 = L();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n2.memoizedState;
    if (t3 !== null && is(t3, r3[1])) return r3[0];
    if (r3 = e3(), $o) {
      st(true);
      try {
        e3();
      } finally {
        st(false);
      }
    }
    return n2.memoizedState = [r3, t3], r3;
  }
  function nc(e3, t3, n2) {
    return n2 === void 0 || Xo & 1073741824 && !(q & 261930) ? e3.memoizedState = t3 : (e3.memoizedState = n2, e3 = Md(), N.lanes |= e3, sd |= e3, n2);
  }
  function rc(e3, t3, n2, r3) {
    return Zr(n2, t3) ? n2 : Po.current === null ? !(Xo & 106) || Xo & 1073741824 && !(q & 261930) ? (R = true, e3.memoizedState = n2) : (e3 = Md(), N.lanes |= e3, sd |= e3, t3) : (e3 = nc(e3, n2, r3), Zr(e3, t3) || (R = true), e3);
  }
  function ic(e3, t3, n2, r3, i2) {
    var a3 = D2.p;
    D2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
    var o2 = E2.T, s3 = {};
    s3.types = o2 === null ? null : o2.types, E2.T = s3, gc(e3, false, t3, n2);
    try {
      var c3 = i2(), l3 = E2.S;
      l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? hc(e3, t3, Za(c3, r3), jd(e3)) : hc(e3, t3, r3, jd(e3));
    } catch (n3) {
      hc(e3, t3, { then: function() {
      }, status: `rejected`, reason: n3 }, jd());
    } finally {
      D2.p = a3, o2 !== null && s3.types !== null && (o2.types = s3.types), E2.T = o2;
    }
  }
  function ac() {
  }
  function oc(e3, t3, n2, r3) {
    if (e3.tag !== 5) throw Error(s2(476));
    var i2 = sc(e3).queue;
    ic(e3, i2, t3, Te2, n2 === null ? ac : function() {
      return cc(e3), n2(r3);
    });
  }
  function sc(e3) {
    var t3 = e3.memoizedState;
    if (t3 !== null) return t3;
    t3 = { memoizedState: Te2, baseState: Te2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: Te2 }, next: null };
    var n2 = {};
    return t3.next = { memoizedState: n2, baseState: n2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: n2 }, next: null }, e3.memoizedState = t3, e3 = e3.alternate, e3 !== null && (e3.memoizedState = t3), t3;
  }
  function cc(e3) {
    var t3 = sc(e3);
    t3.next === null && (t3 = e3.alternate.memoizedState), hc(e3, t3.next.queue, {}, jd());
  }
  function lc() {
    return Pa(sh);
  }
  function uc() {
    return L().memoizedState;
  }
  function dc() {
    return L().memoizedState;
  }
  function fc(e3) {
    for (var t3 = e3.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n2 = jd();
          e3 = To(n2);
          var r3 = Eo(t3, e3, n2);
          r3 !== null && (Pd(r3, t3, n2), Do(r3, t3, n2)), t3 = { cache: Ba() }, e3.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function pc(e3, t3, n2) {
    var r3 = jd();
    n2 = { lane: r3, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null }, _c(e3) ? vc(t3, n2) : (n2 = Ii(e3, t3, n2, r3), n2 !== null && (Pd(n2, e3, r3), yc(n2, t3, r3)));
  }
  function mc(e3, t3, n2) {
    hc(e3, t3, n2, jd());
  }
  function hc(e3, t3, n2, r3) {
    var i2 = { lane: r3, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null };
    if (_c(e3)) vc(t3, i2);
    else {
      var a3 = e3.alternate;
      if (e3.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
        var o2 = t3.lastRenderedState, s3 = a3(o2, n2);
        if (i2.hasEagerState = true, i2.eagerState = s3, Zr(s3, o2)) return Fi(e3, t3, i2, 0), G === null && Pi(), false;
      } catch {
      }
      if (n2 = Ii(e3, t3, i2, r3), n2 !== null) return Pd(n2, e3, r3), yc(n2, t3, r3), true;
    }
    return false;
  }
  function gc(e3, t3, n2, r3) {
    if (r3 = { lane: 2, revertLane: Pf(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, _c(e3)) {
      if (t3) throw Error(s2(479));
    } else t3 = Ii(e3, n2, r3, 2), t3 !== null && Pd(t3, e3, 2);
  }
  function _c(e3) {
    var t3 = e3.alternate;
    return e3 === N || t3 !== null && t3 === N;
  }
  function vc(e3, t3) {
    Qo = Zo = true;
    var n2 = e3.pending;
    n2 === null ? t3.next = t3 : (t3.next = n2.next, n2.next = t3), e3.pending = t3;
  }
  function yc(e3, t3, n2) {
    if (n2 & 4194048) {
      var r3 = t3.lanes;
      r3 &= e3.pendingLanes, n2 |= r3, t3.lanes = n2, Tt(e3, n2);
    }
  }
  var bc = { readContext: Pa, use: hs, useCallback: I, useContext: I, useEffect: I, useImperativeHandle: I, useLayoutEffect: I, useInsertionEffect: I, useMemo: I, useReducer: I, useRef: I, useState: I, useDebugValue: I, useDeferredValue: I, useTransition: I, useSyncExternalStore: I, useId: I, useHostTransitionStatus: I, useFormState: I, useActionState: I, useOptimistic: I, useMemoCache: I, useCacheRefresh: I, useEffectEvent: I }, xc = { readContext: Pa, use: hs, useCallback: function(e3, t3) {
    return fs().memoizedState = [e3, t3 === void 0 ? null : t3], e3;
  }, useContext: Pa, useEffect: Gs, useImperativeHandle: function(e3, t3, n2) {
    n2 = n2 == null ? null : n2.concat([e3]), Us(4194308, 4, Zs.bind(null, t3, e3), n2);
  }, useLayoutEffect: function(e3, t3) {
    return Us(4194308, 4, e3, t3);
  }, useInsertionEffect: function(e3, t3) {
    Us(4, 2, e3, t3);
  }, useMemo: function(e3, t3) {
    var n2 = fs();
    t3 = t3 === void 0 ? null : t3;
    var r3 = e3();
    if ($o) {
      st(true);
      try {
        e3();
      } finally {
        st(false);
      }
    }
    return n2.memoizedState = [r3, t3], r3;
  }, useReducer: function(e3, t3, n2) {
    var r3 = fs();
    if (n2 !== void 0) {
      var i2 = n2(t3);
      if ($o) {
        st(true);
        try {
          n2(t3);
        } finally {
          st(false);
        }
      }
    } else i2 = t3;
    return r3.memoizedState = r3.baseState = i2, e3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: i2 }, r3.queue = e3, e3 = e3.dispatch = pc.bind(null, N, e3), [r3.memoizedState, e3];
  }, useRef: function(e3) {
    var t3 = fs();
    return e3 = { current: e3 }, t3.memoizedState = e3;
  }, useState: function(e3) {
    e3 = Ds(e3);
    var t3 = e3.queue, n2 = mc.bind(null, N, t3);
    return t3.dispatch = n2, [e3.memoizedState, n2];
  }, useDebugValue: $s, useDeferredValue: function(e3, t3) {
    return nc(fs(), e3, t3);
  }, useTransition: function() {
    var e3 = Ds(false);
    return e3 = ic.bind(null, N, e3.queue, true, false), fs().memoizedState = e3, [false, e3];
  }, useSyncExternalStore: function(e3, t3, n2) {
    var r3 = N, i2 = fs();
    if (j) {
      if (n2 === void 0) throw Error(s2(407));
      n2 = n2();
    } else {
      if (n2 = t3(), G === null) throw Error(s2(349));
      q & 127 || Ss(r3, t3, n2);
    }
    i2.memoizedState = n2;
    var a3 = { value: n2, getSnapshot: t3 };
    return i2.queue = a3, Gs(ws.bind(null, r3, a3, e3), [e3]), r3.flags |= 2048, Vs(9, { destroy: void 0 }, Cs.bind(null, r3, a3, n2, t3), null), n2;
  }, useId: function() {
    var e3 = fs(), t3 = G.identifierPrefix;
    if (j) {
      var n2 = sa, r3 = oa;
      n2 = (r3 & ~(1 << 32 - ct(r3) - 1)).toString(32) + n2, t3 = `_` + t3 + `R_` + n2, n2 = es++, 0 < n2 && (t3 += `H` + n2.toString(32)), t3 += `_`;
    } else n2 = rs++, t3 = `_` + t3 + `r_` + n2.toString(32) + `_`;
    return e3.memoizedState = t3;
  }, useHostTransitionStatus: lc, useFormState: Is, useActionState: Is, useOptimistic: function(e3) {
    var t3 = fs();
    t3.memoizedState = t3.baseState = e3;
    var n2 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t3.queue = n2, t3 = gc.bind(null, N, true, n2), n2.dispatch = t3, [e3, t3];
  }, useMemoCache: gs, useCacheRefresh: function() {
    return fs().memoizedState = fc.bind(null, N);
  }, useEffectEvent: function(e3) {
    var t3 = fs(), n2 = { impl: e3 };
    return t3.memoizedState = n2, function() {
      if (W & 2) throw Error(s2(440));
      return n2.impl.apply(void 0, arguments);
    };
  } }, Sc = { readContext: Pa, use: hs, useCallback: ec, useContext: Pa, useEffect: Ks, useImperativeHandle: Qs, useInsertionEffect: Ys, useLayoutEffect: Xs, useMemo: tc, useReducer: vs, useRef: Hs, useState: function() {
    return vs(_s);
  }, useDebugValue: $s, useDeferredValue: function(e3, t3) {
    return rc(L(), P.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = vs(_s)[0], t3 = L().memoizedState;
    return [typeof e3 == `boolean` ? e3 : ms(e3), t3];
  }, useSyncExternalStore: xs, useId: uc, useHostTransitionStatus: lc, useFormState: Ls, useActionState: Ls, useOptimistic: function(e3, t3) {
    return Os(L(), P, e3, t3);
  }, useMemoCache: gs, useCacheRefresh: dc, useEffectEvent: Js }, Cc = { readContext: Pa, use: hs, useCallback: ec, useContext: Pa, useEffect: Ks, useImperativeHandle: Qs, useInsertionEffect: Ys, useLayoutEffect: Xs, useMemo: tc, useReducer: bs, useRef: Hs, useState: function() {
    return bs(_s);
  }, useDebugValue: $s, useDeferredValue: function(e3, t3) {
    var n2 = L();
    return P === null ? nc(n2, e3, t3) : rc(n2, P.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = bs(_s)[0], t3 = L().memoizedState;
    return [typeof e3 == `boolean` ? e3 : ms(e3), t3];
  }, useSyncExternalStore: xs, useId: uc, useHostTransitionStatus: lc, useFormState: Bs, useActionState: Bs, useOptimistic: function(e3, t3) {
    var n2 = L();
    return P === null ? (n2.baseState = e3, [e3, n2.queue.dispatch]) : Os(n2, P, e3, t3);
  }, useMemoCache: gs, useCacheRefresh: dc, useEffectEvent: Js };
  function wc(e3, t3, n2, r3) {
    t3 = e3.memoizedState, n2 = n2(r3, t3), n2 = n2 == null ? t3 : C2({}, t3, n2), e3.memoizedState = n2, e3.lanes === 0 && (e3.updateQueue.baseState = n2);
  }
  var Tc = { enqueueSetState: function(e3, t3, n2) {
    e3 = e3._reactInternals;
    var r3 = jd(), i2 = To(r3);
    i2.payload = t3, n2 != null && (i2.callback = n2), t3 = Eo(e3, i2, r3), t3 !== null && (Pd(t3, e3, r3), Do(t3, e3, r3));
  }, enqueueReplaceState: function(e3, t3, n2) {
    e3 = e3._reactInternals;
    var r3 = jd(), i2 = To(r3);
    i2.tag = 1, i2.payload = t3, n2 != null && (i2.callback = n2), t3 = Eo(e3, i2, r3), t3 !== null && (Pd(t3, e3, r3), Do(t3, e3, r3));
  }, enqueueForceUpdate: function(e3, t3) {
    e3 = e3._reactInternals;
    var n2 = jd(), r3 = To(n2);
    r3.tag = 2, t3 != null && (r3.callback = t3), t3 = Eo(e3, r3, n2), t3 !== null && (Pd(t3, e3, n2), Do(t3, e3, n2));
  } };
  function Ec(e3, t3, n2, r3, i2, a3, o2) {
    return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == `function` ? e3.shouldComponentUpdate(r3, a3, o2) : t3.prototype && t3.prototype.isPureReactComponent ? !Qr(n2, r3) || !Qr(i2, a3) : true;
  }
  function Dc(e3, t3, n2, r3) {
    e3 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n2, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n2, r3), t3.state !== e3 && Tc.enqueueReplaceState(t3, t3.state, null);
  }
  function Oc(e3, t3) {
    var n2 = t3;
    if (`ref` in t3) for (var r3 in n2 = {}, t3) r3 !== `ref` && (n2[r3] = t3[r3]);
    if (e3 = e3.defaultProps) for (var i2 in n2 === t3 && (n2 = C2({}, n2)), e3) n2[i2] === void 0 && (n2[i2] = e3[i2]);
    return n2;
  }
  function kc(e3) {
    Ai(e3);
  }
  function Ac(e3) {
    console.error(e3);
  }
  function jc(e3) {
    Ai(e3);
  }
  function Mc(e3, t3) {
    try {
      var n2 = e3.onUncaughtError;
      n2(t3.value, { componentStack: t3.stack });
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function Nc(e3, t3, n2) {
    try {
      var r3 = e3.onCaughtError;
      r3(n2.value, { componentStack: n2.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function Pc(e3, t3, n2) {
    return n2 = To(n2), n2.tag = 3, n2.payload = { element: null }, n2.callback = function() {
      Mc(e3, t3);
    }, n2;
  }
  function Fc(e3) {
    return e3 = To(e3), e3.tag = 3, e3;
  }
  function Ic(e3, t3, n2, r3) {
    var i2 = n2.type.getDerivedStateFromError;
    if (typeof i2 == `function`) {
      var a3 = r3.value;
      e3.payload = function() {
        return i2(a3);
      }, e3.callback = function() {
        Nc(t3, n2, r3);
      };
    }
    var o2 = n2.stateNode;
    o2 !== null && typeof o2.componentDidCatch == `function` && (e3.callback = function() {
      Nc(t3, n2, r3), typeof i2 != `function` && (yd === null ? yd = /* @__PURE__ */ new Set([this]) : yd.add(this));
      var e4 = r3.stack;
      this.componentDidCatch(r3.value, { componentStack: e4 === null ? `` : e4 });
    });
  }
  function Lc(e3, t3, n2, r3, i2) {
    if (n2.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
      if (t3 = n2.alternate, t3 !== null && ja(t3, n2, i2, true), n2 = zo.current, n2 !== null) {
        switch (n2.tag) {
          case 31:
          case 13:
          case 19:
            return Bo === null ? Kd() : n2.alternate === null && Y === 0 && (Y = 3), n2.flags &= -257, n2.flags |= 65536, n2.lanes = i2, r3 === oo ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? n2.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), mf(e3, r3, i2)), false;
          case 22:
            return n2.flags |= 65536, r3 === oo ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n2.updateQueue = t3) : (n2 = t3.retryQueue, n2 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n2.add(r3)), mf(e3, r3, i2)), false;
        }
        throw Error(s2(435, n2.tag));
      }
      return mf(e3, r3, i2), Kd(), false;
    }
    if (j) return t3 = zo.current, t3 === null ? (r3 !== ga && (t3 = Error(s2(423), { cause: r3 }), Ca(Qi(t3, n2))), e3 = e3.current.alternate, e3.flags |= 65536, i2 &= -i2, e3.lanes |= i2, r3 = Qi(r3, n2), i2 = Pc(e3.stateNode, r3, i2), Oo(e3, i2), Y !== 4 && (Y = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = i2, r3 !== ga && (e3 = Error(s2(422), { cause: r3 }), Ca(Qi(e3, n2)))), false;
    var a3 = Error(s2(520), { cause: r3 });
    if (a3 = Qi(a3, n2), fd === null ? fd = [a3] : fd.push(a3), Y !== 4 && (Y = 2), t3 === null) return true;
    r3 = Qi(r3, n2), n2 = t3;
    do {
      switch (n2.tag) {
        case 3:
          return n2.flags |= 65536, e3 = i2 & -i2, n2.lanes |= e3, e3 = Pc(n2.stateNode, r3, e3), Oo(n2, e3), false;
        case 1:
          if (t3 = n2.type, a3 = n2.stateNode, !(n2.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || a3 !== null && typeof a3.componentDidCatch == `function` && (yd === null || !yd.has(a3)))) return n2.flags |= 65536, i2 &= -i2, n2.lanes |= i2, i2 = Fc(i2), Ic(i2, e3, n2, r3), Oo(n2, i2), false;
          break;
        case 22:
          if (n2.memoizedState !== null) return n2.flags |= 65536, false;
      }
      n2 = n2.return;
    } while (n2 !== null);
    return false;
  }
  var Rc = Error(s2(461)), R = false;
  function z(e3, t3, n2, r3) {
    t3.child = e3 === null ? xo(t3, null, n2, r3) : bo(t3, e3.child, n2, r3);
  }
  function zc(e3, t3, n2, r3, i2) {
    n2 = n2.render;
    var a3 = t3.ref;
    if (`ref` in r3) {
      var o2 = {};
      for (var s3 in r3) s3 !== `ref` && (o2[s3] = r3[s3]);
    } else o2 = r3;
    return Na(t3), r3 = as(e3, t3, n2, o2, a3, i2), s3 = ls(), e3 !== null && !R ? (us(e3, t3, i2), pl(e3, t3, i2)) : (j && s3 && ua(t3), t3.flags |= 1, z(e3, t3, r3, i2), t3.child);
  }
  function Bc(e3, t3, n2, r3, i2) {
    if (e3 === null) {
      var a3 = n2.type;
      return typeof a3 == `function` && !Ui(a3) && a3.defaultProps === void 0 && n2.compare === null ? (t3.tag = 15, t3.type = a3, Vc(e3, t3, a3, r3, i2)) : (e3 = Ki(n2.type, null, r3, t3, t3.mode, i2), e3.ref = t3.ref, e3.return = t3, t3.child = e3);
    }
    if (a3 = e3.child, !ml(e3, i2)) {
      var o2 = a3.memoizedProps;
      if (n2 = n2.compare, n2 = n2 === null ? Qr : n2, n2(o2, r3) && e3.ref === t3.ref) return pl(e3, t3, i2);
    }
    return t3.flags |= 1, e3 = Wi(a3, r3), e3.ref = t3.ref, e3.return = t3, t3.child = e3;
  }
  function Vc(e3, t3, n2, r3, i2) {
    if (e3 !== null) {
      var a3 = e3.memoizedProps;
      if (Qr(a3, r3) && e3.ref === t3.ref) {
        if (R = false, t3.pendingProps = r3 = a3, ml(e3, i2)) e3.flags & 131072 && (R = true);
        else return t3.lanes = e3.lanes, pl(e3, t3, i2);
      }
    }
    return Yc(e3, t3, n2, r3, i2);
  }
  function Hc(e3, t3, n2, r3) {
    var i2 = r3.children, a3 = e3 === null ? null : e3.memoizedState;
    if (e3 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a3 = a3 === null ? n2 : a3.baseLanes | n2, e3 !== null) {
          for (r3 = t3.child = e3.child, i2 = 0; r3 !== null; ) i2 = i2 | r3.lanes | r3.childLanes, r3 = r3.sibling;
          r3 = i2 & ~a3;
        } else r3 = 0, t3.child = null;
        return Wc(e3, t3, a3, n2, r3);
      }
      if (n2 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e3 !== null && to(t3, a3 === null ? null : a3.cachePool), a3 === null ? Lo() : Io(t3, a3), Uo(t3);
      else return r3 = t3.lanes = 536870912, Wc(e3, t3, a3 === null ? n2 : a3.baseLanes | n2, n2, r3);
    } else a3 === null ? (e3 !== null && to(t3, null), Lo(), Wo()) : (to(t3, a3.cachePool), Io(t3, a3), Wo(), t3.memoizedState = null);
    return z(e3, t3, i2, n2), t3.child;
  }
  function Uc(e3, t3) {
    return e3 !== null && e3.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
  }
  function Wc(e3, t3, n2, r3, i2) {
    var a3 = eo();
    return a3 = a3 === null ? null : { parent: M._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n2, cachePool: a3 }, e3 !== null && to(t3, null), Lo(), Uo(t3), e3 !== null && ja(e3, t3, r3, true), t3.childLanes = i2, null;
  }
  function Gc(e3, t3) {
    return t3 = il({ mode: t3.mode, children: t3.children }, e3.mode), t3.ref = e3.ref, e3.child = t3, t3.return = e3, t3;
  }
  function Kc(e3, t3, n2) {
    return bo(t3, e3.child, null, n2), e3 = Gc(t3, t3.pendingProps), e3.flags |= 2, Go(t3), t3.memoizedState = null, e3;
  }
  function qc(e3, t3, n2) {
    var r3 = t3.pendingProps, i2 = !!(t3.flags & 128);
    if (t3.flags &= -129, e3 === null) {
      if (j) {
        if (r3.mode === `hidden`) return e3 = Gc(t3, r3), t3.lanes = 536870912, e3.memoizedState = { baseLanes: 0, cachePool: null }, Uc(null, e3);
        if (Ho(t3), (e3 = A) ? (e3 = am(e3, ha), e3 = e3 !== null && e3.data === `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: aa === null ? null : { id: oa, overflow: sa }, retryLane: 536870912, hydrationErrors: null }, n2 = Yi(e3), n2.return = t3, t3.child = n2, pa = t3, A = null)) : e3 = null, e3 === null) throw _a(t3);
        return t3.lanes = 536870912, null;
      }
      return Gc(t3, r3);
    }
    var a3 = e3.memoizedState;
    if (a3 !== null) {
      var o2 = a3.dehydrated;
      if (Ho(t3), i2) {
        if (t3.flags & 256) t3.flags &= -257, t3 = Kc(e3, t3, n2);
        else if (t3.memoizedState !== null) t3.child = e3.child, t3.flags |= 128, t3 = null;
        else throw Error(s2(558));
      } else if (R || ja(e3, t3, n2, false), i2 = (n2 & e3.childLanes) !== 0, R || i2) {
        if (Po.current === null) {
          if (r3 = G, r3 !== null && (o2 = Et(r3, n2), o2 !== 0 && o2 !== a3.retryLane)) throw a3.retryLane = o2, Li(e3, o2), Pd(r3, e3, o2), Rc;
          Kd();
        }
        t3 = Kc(e3, t3, n2);
      } else e3 = a3.treeContext, A = lm(o2.nextSibling), pa = t3, j = true, ma = null, ha = false, e3 !== null && fa(t3, e3), t3 = Gc(t3, r3), t3.flags |= 134221824;
      return t3;
    }
    return e3 = Wi(e3.child, { mode: r3.mode, children: r3.children }), e3.ref = t3.ref, t3.child = e3, e3.return = t3, e3;
  }
  function Jc(e3, t3) {
    var n2 = t3.ref;
    if (n2 === null) e3 !== null && e3.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n2 != `function` && typeof n2 != `object`) throw Error(s2(284));
      (e3 === null || e3.ref !== n2) && (t3.flags |= 4194816);
    }
  }
  function Yc(e3, t3, n2, r3, i2) {
    return Na(t3), n2 = as(e3, t3, n2, r3, void 0, i2), r3 = ls(), e3 !== null && !R ? (us(e3, t3, i2), pl(e3, t3, i2)) : (j && r3 && ua(t3), t3.flags |= 1, z(e3, t3, n2, i2), t3.child);
  }
  function Xc(e3, t3, n2, r3, i2, a3) {
    return Na(t3), t3.updateQueue = null, n2 = ss(t3, r3, n2, i2), os(e3), r3 = ls(), e3 !== null && !R ? (us(e3, t3, a3), pl(e3, t3, a3)) : (j && r3 && ua(t3), t3.flags |= 1, z(e3, t3, n2, a3), t3.child);
  }
  function Zc(e3, t3, n2, r3, i2) {
    if (Na(t3), t3.stateNode === null) {
      var a3 = Bi, o2 = n2.contextType;
      typeof o2 == `object` && o2 && (a3 = Pa(o2)), a3 = new n2(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = Tc, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, Co(t3), o2 = n2.contextType, a3.context = typeof o2 == `object` && o2 ? Pa(o2) : Bi, a3.state = t3.memoizedState, o2 = n2.getDerivedStateFromProps, typeof o2 == `function` && (wc(t3, n2, o2, r3), a3.state = t3.memoizedState), typeof n2.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o2 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o2 !== a3.state && Tc.enqueueReplaceState(a3, a3.state, null), jo(t3, r3, a3, i2), Ao(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
    } else if (e3 === null) {
      a3 = t3.stateNode;
      var s3 = t3.memoizedProps, c3 = Oc(n2, s3);
      a3.props = c3;
      var l3 = a3.context, u3 = n2.contextType;
      o2 = Bi, typeof u3 == `object` && u3 && (o2 = Pa(u3));
      var d3 = n2.getDerivedStateFromProps;
      u3 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o2) && Dc(t3, a3, r3, o2), So = false;
      var f3 = t3.memoizedState;
      a3.state = f3, jo(t3, r3, a3, i2), Ao(), l3 = t3.memoizedState, s3 || f3 !== l3 || So ? (typeof d3 == `function` && (wc(t3, n2, d3, r3), l3 = t3.memoizedState), (c3 = So || Ec(t3, n2, c3, r3, f3, l3, o2)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o2, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
    } else {
      a3 = t3.stateNode, wo(e3, t3), o2 = t3.memoizedProps, u3 = Oc(n2, o2), a3.props = u3, d3 = t3.pendingProps, f3 = a3.context, l3 = n2.contextType, c3 = Bi, typeof l3 == `object` && l3 && (c3 = Pa(l3)), s3 = n2.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o2 !== d3 || f3 !== c3) && Dc(t3, a3, r3, c3), So = false, f3 = t3.memoizedState, a3.state = f3, jo(t3, r3, a3, i2), Ao();
      var p3 = t3.memoizedState;
      o2 !== d3 || f3 !== p3 || So || e3 !== null && e3.dependencies !== null && Ma(e3.dependencies) ? (typeof s3 == `function` && (wc(t3, n2, s3, r3), p3 = t3.memoizedState), (u3 = So || Ec(t3, n2, u3, r3, f3, p3, c3) || e3 !== null && e3.dependencies !== null && Ma(e3.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o2 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o2 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o2 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o2 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), r3 = false);
    }
    return a3 = r3, Jc(e3, t3), r3 = !!(t3.flags & 128), a3 || r3 ? (a3 = t3.stateNode, n2 = r3 && typeof n2.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e3 !== null && r3 ? (t3.child = bo(t3, e3.child, null, i2), t3.child = bo(t3, null, n2, i2)) : z(e3, t3, n2, i2), t3.memoizedState = a3.state, e3 = t3.child) : e3 = pl(e3, t3, i2), e3;
  }
  function Qc(e3, t3, n2, r3) {
    return xa(), t3.flags |= 256, z(e3, t3, n2, r3), t3.child;
  }
  var $c = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function el(e3) {
    return { baseLanes: e3, cachePool: no() };
  }
  function tl(e3, t3, n2) {
    return e3 = e3 === null ? 0 : e3.childLanes & ~n2, t3 && (e3 |= ud), e3;
  }
  function nl(e3, t3, n2) {
    var r3 = t3.pendingProps, i2 = false, a3 = !!(t3.flags & 128), o2;
    if ((o2 = a3) || (o2 = e3 !== null && e3.memoizedState === null ? false : !!(Ko.current & 2)), o2 && (i2 = true, t3.flags &= -129), o2 = !!(t3.flags & 32), t3.flags &= -33, e3 === null) {
      if (j) {
        if (i2 ? Vo(t3) : Wo(), (e3 = A) ? (e3 = am(e3, ha), e3 = e3 !== null && e3.data !== `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: aa === null ? null : { id: oa, overflow: sa }, retryLane: 536870912, hydrationErrors: null }, n2 = Yi(e3), n2.return = t3, t3.child = n2, pa = t3, A = null)) : e3 = null, e3 === null) throw _a(t3);
        return t3.lanes = sm(e3) ? 32 : 536870912, null;
      }
      return a3 = r3.children, r3 = r3.fallback, i2 ? (Wo(), i2 = t3.mode, a3 = il({ mode: `hidden`, children: a3 }, i2), r3 = qi(r3, i2, n2, null), a3.return = t3, r3.return = t3, a3.sibling = r3, t3.child = a3, r3 = t3.child, r3.memoizedState = el(n2), r3.childLanes = tl(e3, o2, n2), t3.memoizedState = $c, Uc(null, r3)) : (Vo(t3), rl(t3, a3));
    }
    var s3 = e3.memoizedState;
    if (s3 !== null) {
      var c3 = s3.dehydrated;
      if (c3 !== null) return ol(e3, t3, a3, o2, r3, c3, s3, n2);
    }
    return i2 ? (Wo(), i2 = r3.fallback, a3 = t3.mode, s3 = e3.child, c3 = s3.sibling, r3 = Wi(s3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i2 = qi(i2, a3, n2, null), i2.flags |= 2) : i2 = Wi(c3, i2), i2.return = t3, r3.return = t3, r3.sibling = i2, t3.child = r3, Uc(null, r3), r3 = t3.child, i2 = e3.child.memoizedState, i2 === null ? i2 = el(n2) : (a3 = i2.cachePool, a3 === null ? a3 = no() : (s3 = M._currentValue, a3 = a3.parent === s3 ? a3 : { parent: s3, pool: s3 }), i2 = { baseLanes: i2.baseLanes | n2, cachePool: a3 }), r3.memoizedState = i2, r3.childLanes = tl(e3, o2, n2), t3.memoizedState = $c, Uc(e3.child, r3)) : (Vo(t3), n2 = e3.child, e3 = n2.sibling, n2 = Wi(n2, { mode: `visible`, children: r3.children }), n2.return = t3, n2.sibling = null, e3 !== null && (o2 = t3.deletions, o2 === null ? (t3.deletions = [e3], t3.flags |= 16) : o2.push(e3)), t3.child = n2, t3.memoizedState = null, n2);
  }
  function rl(e3, t3) {
    return t3 = il({ mode: `visible`, children: t3 }, e3.mode), t3.return = e3, e3.child = t3;
  }
  function il(e3, t3) {
    return e3 = Hi(22, e3, null, t3), e3.lanes = 0, e3;
  }
  function al(e3, t3, n2) {
    return bo(t3, e3.child, null, n2), e3 = rl(t3, t3.pendingProps.children), e3.flags |= 2, t3.memoizedState = null, e3;
  }
  function ol(e3, t3, n2, r3, i2, a3, o2, c3) {
    if (n2) return t3.flags & 256 ? (Vo(t3), t3.flags &= -257, al(e3, t3, c3)) : t3.memoizedState === null ? (Wo(), a3 = i2.fallback, o2 = t3.mode, i2 = il({ mode: `visible`, children: i2.children }, o2), a3 = qi(a3, o2, c3, null), a3.flags |= 2, i2.return = t3, a3.return = t3, i2.sibling = a3, t3.child = i2, bo(t3, e3.child, null, c3), i2 = t3.child, i2.memoizedState = el(c3), i2.childLanes = tl(e3, r3, c3), t3.memoizedState = $c, Uc(null, i2)) : (Wo(), t3.child = e3.child, t3.flags |= 128, null);
    if (Vo(t3), sm(a3)) {
      if (r3 = a3.nextSibling && a3.nextSibling.dataset, r3) var l3 = r3.dgst;
      return r3 = l3, r3 !== `` && (i2 = Error(s2(419)), i2.stack = ``, i2.digest = r3, Ca({ value: i2, source: null, stack: null })), al(e3, t3, c3);
    }
    if (R || ja(e3, t3, c3, false), r3 = (c3 & e3.childLanes) !== 0, R || r3) {
      if (Po.current !== null) return al(e3, t3, c3);
      if (r3 = G, r3 !== null && (i2 = Et(r3, c3), i2 !== 0 && i2 !== o2.retryLane)) throw o2.retryLane = i2, Li(e3, i2), Pd(r3, e3, i2), Rc;
      return om(a3) || Kd(), al(e3, t3, c3);
    }
    return om(a3) ? (t3.flags |= 192, t3.child = e3.child, null) : (e3 = o2.treeContext, A = lm(a3.nextSibling), pa = t3, j = true, ma = null, ha = false, e3 !== null && fa(t3, e3), t3 = rl(t3, i2.children), t3.flags |= 134221824, t3);
  }
  function sl(e3, t3, n2) {
    e3.lanes |= t3;
    var r3 = e3.alternate;
    r3 !== null && (r3.lanes |= t3), ka(e3.return, t3, n2);
  }
  function cl(e3) {
    for (var t3 = null; e3 !== null; ) {
      var n2 = e3.alternate;
      n2 !== null && Yo(n2) === null && (t3 = e3), e3 = e3.sibling;
    }
    return t3;
  }
  function ll(e3, t3, n2, r3, i2, a3) {
    var o2 = e3.memoizedState;
    o2 === null ? e3.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n2, tailMode: i2, treeForkCount: a3 } : (o2.isBackwards = t3, o2.rendering = null, o2.renderingStartTime = 0, o2.last = r3, o2.tail = n2, o2.tailMode = i2, o2.treeForkCount = a3);
  }
  function ul(e3) {
    var t3 = e3.child;
    for (e3.child = null; t3 !== null; ) {
      var n2 = t3.sibling;
      t3.sibling = e3.child, e3.child = t3, t3 = n2;
    }
  }
  function dl(e3, t3, n2) {
    var r3 = t3.pendingProps, i2 = r3.revealOrder, a3 = r3.tail;
    r3 = r3.children;
    var o2 = Ko.current;
    if (t3.flags & 128) return qo(t3, o2), null;
    var s3 = !!(o2 & 2);
    if (s3 ? (o2 = o2 & 1 | 2, t3.flags |= 128) : o2 &= 1, qo(t3, o2), i2 === `backwards` && e3 !== null ? (ul(e3), z(e3, t3, r3, n2), ul(e3)) : z(e3, t3, r3, n2), r3 = j ? na : 0, !s3 && e3 !== null && e3.flags & 128) a: for (e3 = t3.child; e3 !== null; ) {
      if (e3.tag === 13) e3.memoizedState !== null && sl(e3, n2, t3);
      else if (e3.tag === 19) sl(e3, n2, t3);
      else if (e3.child !== null) {
        e3.child.return = e3, e3 = e3.child;
        continue;
      }
      if (e3 === t3) break a;
      for (; e3.sibling === null; ) {
        if (e3.return === null || e3.return === t3) break a;
        e3 = e3.return;
      }
      e3.sibling.return = e3.return, e3 = e3.sibling;
    }
    switch (i2) {
      case `backwards`:
        n2 = cl(t3.child), n2 === null ? (i2 = t3.child, t3.child = null) : (i2 = n2.sibling, n2.sibling = null, ul(t3)), ll(t3, true, i2, null, a3, r3);
        break;
      case `unstable_legacy-backwards`:
        for (n2 = null, i2 = t3.child, t3.child = null; i2 !== null; ) {
          if (e3 = i2.alternate, e3 !== null && Yo(e3) === null) {
            t3.child = i2;
            break;
          }
          e3 = i2.sibling, i2.sibling = n2, n2 = i2, i2 = e3;
        }
        ll(t3, true, n2, null, a3, r3);
        break;
      case `together`:
        ll(t3, false, null, null, void 0, r3);
        break;
      case `independent`:
        t3.memoizedState = null;
        break;
      default:
        n2 = cl(t3.child), n2 === null ? (i2 = t3.child, t3.child = null) : (i2 = n2.sibling, n2.sibling = null), ll(t3, false, i2, n2, a3, r3);
    }
    return t3.child;
  }
  function fl(e3, t3, n2) {
    var r3 = t3.pendingProps;
    return Da(t3, t3.type, r3.value), z(e3, t3, r3.children, n2), t3.child;
  }
  function pl(e3, t3, n2) {
    if (e3 !== null && (t3.dependencies = e3.dependencies), sd |= t3.lanes, (n2 & t3.childLanes) === 0) {
      if (e3 !== null) {
        if (ja(e3, t3, n2, false), (n2 & t3.childLanes) === 0) return null;
      } else return null;
    }
    if (e3 !== null && t3.child !== e3.child) throw Error(s2(153));
    if (t3.child !== null) {
      for (e3 = t3.child, n2 = Wi(e3, e3.pendingProps), t3.child = n2, n2.return = t3; e3.sibling !== null; ) e3 = e3.sibling, n2 = n2.sibling = Wi(e3, e3.pendingProps), n2.return = t3;
      n2.sibling = null;
    }
    return t3.child;
  }
  function ml(e3, t3) {
    return (e3.lanes & t3) !== 0 || (e3 = e3.dependencies, !!(e3 !== null && Ma(e3)));
  }
  function hl(e3, t3, n2) {
    switch (t3.tag) {
      case 3:
        Pe2(t3, t3.stateNode.containerInfo), Da(t3, M, e3.memoizedState.cache), xa();
        break;
      case 27:
      case 5:
        Ie(t3);
        break;
      case 4:
        Pe2(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        Da(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null) return t3.flags |= 128, Ho(t3), null;
        break;
      case 13:
        var r3 = t3.memoizedState;
        if (r3 !== null) {
          if (r3.dehydrated !== null) return Vo(t3), t3.flags |= 128, null;
          r3 = ja(e3, t3, n2, false);
          var i2 = t3.child.childLanes;
          return r3 || (n2 & i2) !== 0 ? nl(e3, t3, n2) : (Vo(t3), e3 = pl(e3, t3, n2), e3 === null ? null : e3.sibling);
        }
        Vo(t3);
        break;
      case 19:
        if (t3.flags & 128) return dl(e3, t3, n2);
        if (i2 = !!(e3.flags & 128), r3 = (n2 & t3.childLanes) !== 0, r3 || (r3 = (ja(e3, t3, n2, false), (n2 & t3.childLanes) !== 0)), i2) {
          if (r3) return dl(e3, t3, n2);
          t3.flags |= 128;
        }
        if (i2 = t3.memoizedState, i2 !== null && (i2.rendering = null, i2.tail = null, i2.lastEffect = null), qo(t3, Ko.current), r3) break;
        return null;
      case 22:
        return t3.lanes = 0, Hc(e3, t3, n2, t3.pendingProps);
      case 24:
        Da(t3, M, e3.memoizedState.cache);
    }
    return pl(e3, t3, n2);
  }
  function gl(e3, t3, n2) {
    if (e3 !== null) {
      if (e3.memoizedProps !== t3.pendingProps) R = true;
      else {
        if (!ml(e3, n2) && !(t3.flags & 128)) return R = false, hl(e3, t3, n2);
        R = !!(e3.flags & 131072);
      }
    } else R = false, j && t3.flags & 1048576 && la(t3, na, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r3 = t3.pendingProps;
          if (e3 = lo(t3.elementType), t3.type = e3, typeof e3 == `function`) Ui(e3) ? (r3 = Oc(e3, r3), t3.tag = 1, t3 = Zc(null, t3, e3, r3, n2)) : (t3.tag = 0, t3 = Yc(null, t3, e3, r3, n2));
          else {
            if (e3 != null) {
              var i2 = e3.$$typeof;
              if (i2 === ue2) {
                t3.tag = 11, t3 = zc(null, t3, e3, r3, n2);
                break a;
              }
              if (i2 === pe2) {
                t3.tag = 14, t3 = Bc(null, t3, e3, r3, n2);
                break a;
              }
              if (i2 === T2) {
                t3.tag = 10, t3.type = e3, t3 = fl(null, t3, n2);
                break a;
              }
            }
            throw t3 = Ce2(e3) || e3, Error(s2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return Yc(e3, t3, t3.type, t3.pendingProps, n2);
      case 1:
        return r3 = t3.type, i2 = Oc(r3, t3.pendingProps), Zc(e3, t3, r3, i2, n2);
      case 3:
        a: {
          if (Pe2(t3, t3.stateNode.containerInfo), e3 === null) throw Error(s2(387));
          r3 = t3.pendingProps;
          var a3 = t3.memoizedState;
          i2 = a3.element, wo(e3, t3), jo(t3, r3, null, n2);
          var o2 = t3.memoizedState;
          if (r3 = o2.cache, Da(t3, M, r3), r3 !== a3.cache && Aa(t3, [M], n2, true), Ao(), r3 = o2.element, a3.isDehydrated) {
            if (a3 = { element: r3, isDehydrated: false, cache: o2.cache }, t3.updateQueue.baseState = a3, t3.memoizedState = a3, t3.flags & 256) {
              t3 = Qc(e3, t3, r3, n2);
              break a;
            }
            if (r3 !== i2) {
              i2 = Qi(Error(s2(424)), t3), Ca(i2), t3 = Qc(e3, t3, r3, n2);
              break a;
            }
            switch (e3 = t3.stateNode.containerInfo, e3.nodeType) {
              case 9:
                e3 = e3.body;
                break;
              default:
                e3 = e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
            }
            for (A = lm(e3.firstChild), pa = t3, j = true, ma = null, ha = true, n2 = xo(t3, null, r3, n2), t3.child = n2; n2; ) n2.flags = n2.flags & -3 | 134221824, n2 = n2.sibling;
          } else {
            if (xa(), r3 === i2) {
              t3 = pl(e3, t3, n2);
              break a;
            }
            z(e3, t3, r3, n2);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return Jc(e3, t3), e3 === null ? (n2 = Nm(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n2 : j || (t3.stateNode = fp(t3.type, t3.pendingProps, Me2.current, t3)) : t3.memoizedState = Nm(t3.type, e3.memoizedProps, t3.pendingProps, e3.memoizedState), null;
      case 27:
        return Ie(t3), e3 === null && j && (r3 = t3.stateNode = hm(t3.type, t3.pendingProps, Me2.current), pa = t3, ha = true, i2 = A, Sp(t3.type) ? (um = i2, A = lm(r3.firstChild)) : A = i2), z(e3, t3, t3.pendingProps.children, n2), Jc(e3, t3), e3 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e3 === null && j && ((i2 = r3 = A) && (r3 = rm(r3, t3.type, t3.pendingProps, ha), r3 === null ? i2 = false : (t3.stateNode = r3, pa = t3, A = lm(r3.firstChild), ha = false, i2 = true)), i2 || _a(t3)), Ie(t3), i2 = t3.type, a3 = t3.pendingProps, o2 = e3 === null ? null : e3.memoizedProps, r3 = a3.children, pp(i2, a3) ? r3 = null : o2 !== null && pp(i2, o2) && (t3.flags |= 32), t3.memoizedState !== null && (i2 = as(e3, t3, cs, null, null, n2), sh._currentValue = i2), Jc(e3, t3), z(e3, t3, r3, n2), t3.child;
      case 6:
        return e3 === null && j && ((e3 = n2 = A) && (n2 = im(n2, t3.pendingProps, ha), n2 === null ? e3 = false : (t3.stateNode = n2, pa = t3, A = null, e3 = true)), e3 || _a(t3)), null;
      case 13:
        return nl(e3, t3, n2);
      case 4:
        return Pe2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e3 === null ? t3.child = bo(t3, null, r3, n2) : z(e3, t3, r3, n2), t3.child;
      case 11:
        return zc(e3, t3, t3.type, t3.pendingProps, n2);
      case 7:
        return r3 = t3.pendingProps, Jc(e3, t3), z(e3, t3, r3, n2), t3.child;
      case 8:
        return z(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 12:
        return z(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 10:
        return fl(e3, t3, n2);
      case 9:
        return i2 = t3.type._context, r3 = t3.pendingProps.children, Na(t3), i2 = Pa(i2), r3 = r3(i2), t3.flags |= 1, z(e3, t3, r3, n2), t3.child;
      case 14:
        return Bc(e3, t3, t3.type, t3.pendingProps, n2);
      case 15:
        return Vc(e3, t3, t3.type, t3.pendingProps, n2);
      case 19:
        return dl(e3, t3, n2);
      case 31:
        return qc(e3, t3, n2);
      case 22:
        return Hc(e3, t3, n2, t3.pendingProps);
      case 24:
        return Na(t3), r3 = Pa(M), e3 === null ? (i2 = eo(), i2 === null && (i2 = G, a3 = Ba(), i2.pooledCache = a3, a3.refCount++, a3 !== null && (i2.pooledCacheLanes |= n2), i2 = a3), t3.memoizedState = { parent: r3, cache: i2 }, Co(t3), Da(t3, M, i2)) : ((e3.lanes & n2) !== 0 && (wo(e3, t3), jo(t3, null, null, n2), Ao()), i2 = e3.memoizedState, a3 = t3.memoizedState, i2.parent === r3 ? (r3 = a3.cache, Da(t3, M, r3), r3 !== i2.cache && Aa(t3, [M], n2, true)) : (i2 = { parent: r3, cache: r3 }, t3.memoizedState = i2, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = i2), Da(t3, M, r3))), z(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 30:
        return t3.stateNode === null && (t3.stateNode = { autoName: null, paired: null, clones: null, ref: null }), r3 = t3.pendingProps, r3.name != null && r3.name !== `auto` ? t3.flags |= e3 === null ? 18882560 : 18874368 : j && ua(t3), e3 !== null && e3.memoizedProps.name !== r3.name ? t3.flags |= 4194816 : Jc(e3, t3), z(e3, t3, r3.children, n2), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(s2(156, t3.tag));
  }
  function _l(e3) {
    e3.flags |= 4;
  }
  function vl(e3, t3, n2, r3, i2) {
    var a3;
    if ((a3 = !!(e3.mode & 32)) && (a3 = n2 === null ? Jm(t3, r3) : Jm(t3, r3) && (r3.src !== n2.src || r3.srcSet !== n2.srcSet)), a3) {
      if (e3.flags |= 16777216, (i2 & 335544128) === i2) {
        if (e3.stateNode.complete) e3.flags |= 8192;
        else if (Ud()) e3.flags |= 8192;
        else throw uo = oo, io;
      }
    } else e3.flags &= -16777217;
  }
  function yl(e3, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4) e3.flags &= -16777217;
    else if (e3.flags |= 16777216, !Ym(t3)) {
      if (Ud()) e3.flags |= 8192;
      else throw uo = oo, io;
    }
  }
  function bl(e3, t3) {
    t3 !== null && (e3.flags |= 4), e3.flags & 16384 && (t3 = e3.tag === 22 ? 536870912 : bt(), e3.lanes |= t3, dd |= t3);
  }
  function xl(e3, t3) {
    if (!j) switch (e3.tailMode) {
      case `visible`:
        break;
      case `collapsed`:
        for (var n2 = e3.tail, r3 = null; n2 !== null; ) n2.alternate !== null && (r3 = n2), n2 = n2.sibling;
        r3 === null ? t3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r3.sibling = null;
        break;
      default:
        for (t3 = e3.tail, n2 = null; t3 !== null; ) t3.alternate !== null && (n2 = t3), t3 = t3.sibling;
        n2 === null ? e3.tail = null : n2.sibling = null;
    }
  }
  function B(e3) {
    var t3 = e3.alternate !== null && e3.alternate.child === e3.child, n2 = 0, r3 = 0;
    if (t3) for (var i2 = e3.child; i2 !== null; ) n2 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags & 1206910976, r3 |= i2.flags & 1206910976, i2.return = e3, i2 = i2.sibling;
    else for (i2 = e3.child; i2 !== null; ) n2 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags, r3 |= i2.flags, i2.return = e3, i2 = i2.sibling;
    return e3.subtreeFlags |= r3, e3.childLanes = n2, t3;
  }
  function Sl(e3, t3, n2) {
    var r3 = t3.pendingProps;
    switch (da(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return B(t3), null;
      case 1:
        return B(t3), null;
      case 3:
        return n2 = t3.stateNode, r3 = null, e3 !== null && (r3 = e3.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), Oa(M), Fe(), n2.pendingContext && (n2.context = n2.pendingContext, n2.pendingContext = null), (e3 === null || e3.child === null) && (ba(t3) ? _l(t3) : e3 === null || e3.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, Sa())), B(t3), null;
      case 26:
        var i2 = t3.type, a3 = t3.memoizedState;
        return e3 === null ? (_l(t3), a3 === null ? (B(t3), vl(t3, i2, null, r3, n2)) : (B(t3), yl(t3, a3))) : a3 ? a3 === e3.memoizedState ? (B(t3), t3.flags &= -16777217) : (_l(t3), B(t3), yl(t3, a3)) : (e3 = e3.memoizedProps, e3 !== r3 && _l(t3), B(t3), vl(t3, i2, e3, r3, n2)), null;
      case 27:
        if (Le(t3), n2 = Me2.current, i2 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && _l(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(s2(166));
            return B(t3), t3.subtreeFlags &= -33554433, null;
          }
          e3 = Ae2.current, ba(t3) ? va(t3, e3) : (e3 = hm(i2, r3, n2), t3.stateNode = e3, _l(t3));
        }
        return B(t3), t3.subtreeFlags &= -33554433, null;
      case 5:
        if (Le(t3), i2 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && _l(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(s2(166));
            return B(t3), t3.subtreeFlags &= -33554433, null;
          }
          if (a3 = Ae2.current, ba(t3)) va(t3, a3);
          else {
            var o2 = lp(Me2.current);
            switch (a3) {
              case 1:
                a3 = o2.createElementNS(`http://www.w3.org/2000/svg`, i2);
                break;
              case 2:
                a3 = o2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                break;
              default:
                switch (i2) {
                  case `svg`:
                    a3 = o2.createElementNS(`http://www.w3.org/2000/svg`, i2);
                    break;
                  case `math`:
                    a3 = o2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                    break;
                  case `script`:
                    a3 = o2.createElement(`div`), a3.innerHTML = `<script><\/script>`, a3 = a3.removeChild(a3.firstChild);
                    break;
                  case `select`:
                    a3 = typeof r3.is == `string` ? o2.createElement(`select`, { is: r3.is }) : o2.createElement(`select`), r3.multiple ? a3.multiple = true : r3.size && (a3.size = r3.size);
                    break;
                  default:
                    a3 = typeof r3.is == `string` ? o2.createElement(i2, { is: r3.is }) : o2.createElement(i2);
                }
            }
            a3[Mt] = t3, a3[Nt] = r3;
            a: for (o2 = t3.child; o2 !== null; ) {
              if (o2.tag === 5 || o2.tag === 6) a3.appendChild(o2.stateNode);
              else if (o2.tag !== 4 && o2.tag !== 27 && o2.child !== null) {
                o2.child.return = o2, o2 = o2.child;
                continue;
              }
              if (o2 === t3) break a;
              for (; o2.sibling === null; ) {
                if (o2.return === null || o2.return === t3) break a;
                o2 = o2.return;
              }
              o2.sibling.return = o2.return, o2 = o2.sibling;
            }
            t3.stateNode = a3;
            a: switch (np(a3, i2, r3), i2) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r3 = !!r3.autoFocus;
                break a;
              case `img`:
                r3 = true;
                break a;
              default:
                r3 = false;
            }
            r3 && _l(t3);
          }
        }
        return B(t3), t3.subtreeFlags &= -33554433, vl(t3, t3.type, e3 === null ? null : e3.memoizedProps, t3.pendingProps, n2), null;
      case 6:
        if (e3 && t3.stateNode != null) e3.memoizedProps !== r3 && _l(t3);
        else {
          if (typeof r3 != `string` && t3.stateNode === null) throw Error(s2(166));
          if (e3 = Me2.current, ba(t3)) {
            if (e3 = t3.stateNode, n2 = t3.memoizedProps, r3 = null, i2 = pa, i2 !== null) switch (i2.tag) {
              case 27:
              case 5:
                r3 = i2.memoizedProps;
            }
            e3[Mt] = t3, e3 = !!(e3.nodeValue === n2 || r3 !== null && true === r3.suppressHydrationWarning || ep(e3.nodeValue, n2)), e3 || _a(t3, true);
          } else e3 = lp(e3).createTextNode(r3), e3[Mt] = t3, t3.stateNode = e3;
        }
        return B(t3), null;
      case 31:
        if (n2 = t3.memoizedState, e3 === null || e3.memoizedState !== null) {
          if (r3 = ba(t3), n2 !== null) {
            if (e3 === null) {
              if (!r3) throw Error(s2(318));
              if (e3 = t3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(s2(557));
              e3[Mt] = t3;
            } else xa(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            B(t3), e3 = false;
          } else n2 = Sa(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = n2), e3 = true;
          if (!e3) return t3.flags & 256 ? (Go(t3), t3) : (Go(t3), null);
          if (t3.flags & 128) throw Error(s2(558));
        }
        return B(t3), null;
      case 13:
        if (r3 = t3.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
          if (i2 = ba(t3), r3 !== null && r3.dehydrated !== null) {
            if (e3 === null) {
              if (!i2) throw Error(s2(318));
              if (i2 = t3.memoizedState, i2 = i2 === null ? null : i2.dehydrated, !i2) throw Error(s2(317));
              i2[Mt] = t3;
            } else xa(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            B(t3), i2 = false;
          } else i2 = Sa(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = i2), i2 = true;
          if (!i2) return t3.flags & 256 ? (Go(t3), t3) : (Go(t3), null);
        }
        return Go(t3), t3.flags & 128 ? (t3.lanes = n2, t3) : (n2 = r3 !== null, e3 = e3 !== null && e3.memoizedState !== null, n2 && (r3 = t3.child, i2 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (i2 = r3.alternate.memoizedState.cachePool.pool), a3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (a3 = r3.memoizedState.cachePool.pool), a3 !== i2 && (r3.flags |= 2048)), n2 !== e3 && n2 && (t3.child.flags |= 8192), bl(t3, t3.updateQueue), B(t3), null);
      case 4:
        return Fe(), e3 === null && Wf(t3.stateNode.containerInfo), t3.flags |= 67108864, B(t3), null;
      case 10:
        return Oa(t3.type), B(t3), null;
      case 19:
        if (Jo(t3), r3 = t3.memoizedState, r3 === null) return B(t3), null;
        if (i2 = !!(t3.flags & 128), a3 = r3.rendering, a3 === null) {
          if (i2) xl(r3, false);
          else {
            if (Y !== 0 || e3 !== null && e3.flags & 128) for (e3 = t3.child; e3 !== null; ) {
              if (a3 = Yo(e3), a3 !== null) {
                for (t3.flags |= 128, xl(r3, false), e3 = a3.updateQueue, t3.updateQueue = e3, bl(t3, e3), t3.subtreeFlags = 0, e3 = n2, n2 = t3.child; n2 !== null; ) Gi(n2, e3), n2 = n2.sibling;
                return qo(t3, Ko.current & 1 | 2), j && ca(t3, r3.treeForkCount), t3.child;
              }
              e3 = e3.sibling;
            }
            r3.tail !== null && Xe() > _d && (t3.flags |= 128, i2 = true, xl(r3, false), t3.lanes = 4194304);
          }
        } else {
          if (!i2) {
            if (e3 = Yo(a3), e3 !== null) {
              if (t3.flags |= 128, i2 = true, e3 = e3.updateQueue, t3.updateQueue = e3, bl(t3, e3), xl(r3, true), r3.tail === null && r3.tailMode !== `collapsed` && r3.tailMode !== `visible` && !a3.alternate && !j) return B(t3), null;
            } else 2 * Xe() - r3.renderingStartTime > _d && n2 !== 536870912 && (t3.flags |= 128, i2 = true, xl(r3, false), t3.lanes = 4194304);
          }
          r3.isBackwards ? (a3.sibling = t3.child, t3.child = a3) : (e3 = r3.last, e3 === null ? t3.child = a3 : e3.sibling = a3, r3.last = a3);
        }
        if (r3.tail !== null) {
          e3 = r3.tail;
          a: {
            for (n2 = e3; n2 !== null; ) {
              if (n2.alternate !== null) {
                n2 = false;
                break a;
              }
              n2 = n2.sibling;
            }
            n2 = true;
          }
          return r3.rendering = e3, r3.tail = e3.sibling, r3.renderingStartTime = Xe(), e3.sibling = null, a3 = Ko.current, a3 = i2 ? a3 & 1 | 2 : a3 & 1, r3.tailMode === `visible` || r3.tailMode === `collapsed` || !n2 || j ? qo(t3, a3) : (n2 = a3, O2(zo, t3), O2(Ko, n2), Bo === null && (Bo = t3)), j && ca(t3, r3.treeForkCount), e3;
        }
        return B(t3), null;
      case 22:
      case 23:
        return Go(t3), Ro(), r3 = t3.memoizedState !== null, e3 === null ? r3 && (t3.flags |= 8192) : e3.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n2 & 536870912 && !(t3.flags & 128) && (B(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : B(t3), n2 = t3.updateQueue, n2 !== null && bl(t3, n2.retryQueue), n2 = null, e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n2 = e3.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n2 && (t3.flags |= 2048), e3 !== null && ke2($a), null;
      case 24:
        return n2 = null, e3 !== null && (n2 = e3.memoizedState.cache), t3.memoizedState.cache !== n2 && (t3.flags |= 2048), Oa(M), B(t3), null;
      case 25:
        return null;
      case 30:
        return t3.flags |= 33554432, B(t3), null;
    }
    throw Error(s2(156, t3.tag));
  }
  function Cl(e3, t3) {
    switch (da(t3), t3.tag) {
      case 1:
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 3:
        return Oa(M), Fe(), e3 = t3.flags, e3 & 65536 && !(e3 & 128) ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return Le(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (Go(t3), t3.alternate === null) throw Error(s2(340));
          xa();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 13:
        if (Go(t3), e3 = t3.memoizedState, e3 !== null && e3.dehydrated !== null) {
          if (t3.alternate === null) throw Error(s2(340));
          xa();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 19:
        return Jo(t3), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, e3 = t3.memoizedState, e3 !== null && (e3.rendering = null, e3.tail = null), t3.flags |= 4, t3) : null;
      case 4:
        return Fe(), null;
      case 10:
        return Oa(t3.type), null;
      case 22:
      case 23:
        return Go(t3), Ro(), e3 !== null && ke2($a), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 24:
        return Oa(M), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wl(e3, t3) {
    switch (da(t3), t3.tag) {
      case 3:
        Oa(M), Fe();
        break;
      case 26:
      case 27:
      case 5:
        Le(t3);
        break;
      case 4:
        Fe();
        break;
      case 31:
        t3.memoizedState !== null && Go(t3);
        break;
      case 13:
        Go(t3);
        break;
      case 19:
        Jo(t3);
        break;
      case 10:
        Oa(t3.type);
        break;
      case 22:
      case 23:
        Go(t3), Ro(), e3 !== null && ke2($a);
        break;
      case 24:
        Oa(M);
    }
  }
  function Tl(e3, t3) {
    try {
      var n2 = t3.updateQueue, r3 = n2 === null ? null : n2.lastEffect;
      if (r3 !== null) {
        var i2 = r3.next;
        n2 = i2;
        do {
          if ((n2.tag & e3) === e3) {
            r3 = void 0;
            var a3 = n2.create, o2 = n2.inst;
            r3 = a3(), o2.destroy = r3;
          }
          n2 = n2.next;
        } while (n2 !== i2);
      }
    } catch (e4) {
      Z(t3, t3.return, e4);
    }
  }
  function El(e3, t3, n2) {
    try {
      var r3 = t3.updateQueue, i2 = r3 === null ? null : r3.lastEffect;
      if (i2 !== null) {
        var a3 = i2.next;
        r3 = a3;
        do {
          if ((r3.tag & e3) === e3) {
            var o2 = r3.inst, s3 = o2.destroy;
            if (s3 !== void 0) {
              o2.destroy = void 0, i2 = t3;
              var c3 = n2, l3 = s3;
              try {
                l3();
              } catch (e4) {
                Z(i2, c3, e4);
              }
            }
          }
          r3 = r3.next;
        } while (r3 !== a3);
      }
    } catch (e4) {
      Z(t3, t3.return, e4);
    }
  }
  function Dl(e3) {
    var t3 = e3.updateQueue;
    if (t3 !== null) {
      var n2 = e3.stateNode;
      try {
        No(t3, n2);
      } catch (t4) {
        Z(e3, e3.return, t4);
      }
    }
  }
  function Ol(e3, t3, n2) {
    n2.props = Oc(e3.type, e3.memoizedProps), n2.state = e3.memoizedState;
    try {
      n2.componentWillUnmount();
    } catch (n3) {
      Z(e3, t3, n3);
    }
  }
  function kl(e3, t3) {
    try {
      var n2 = e3.ref;
      if (n2 !== null) {
        switch (e3.tag) {
          case 26:
          case 27:
          case 5:
            var r3 = e3.stateNode;
            break;
          case 30:
            var i2 = e3.stateNode, a3 = Di(e3.memoizedProps, i2);
            (i2.ref === null || i2.ref.name !== a3) && (i2.ref = Pp(a3)), r3 = i2.ref;
            break;
          case 7:
            if (e3.stateNode === null) {
              var o2 = new Fp(e3);
              h2(e3.child, false, Qp, o2, void 0, void 0), e3.stateNode = o2;
            }
            r3 = e3.stateNode;
            break;
          default:
            r3 = e3.stateNode;
        }
        typeof n2 == `function` ? e3.refCleanup = n2(r3) : n2.current = r3;
      }
    } catch (n3) {
      Z(e3, t3, n3);
    }
  }
  function Al(e3, t3) {
    var n2 = e3.ref, r3 = e3.refCleanup;
    if (n2 !== null) {
      if (typeof r3 == `function`) try {
        r3();
      } catch (n3) {
        Z(e3, t3, n3);
      } finally {
        e3.refCleanup = null, e3 = e3.alternate, e3 != null && (e3.refCleanup = null);
      }
      else if (typeof n2 == `function`) try {
        n2(null);
      } catch (n3) {
        Z(e3, t3, n3);
      }
      else n2.current = null;
    }
  }
  function jl(e3, t3) {
    if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && e3.alternate === null && t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) em(e3.stateNode, t3[n2]);
  }
  function Ml(e3) {
    for (var t3 = e3.return; t3 !== null && (Fl(t3) && em(e3.stateNode, t3.stateNode), !Pl(t3)); ) t3 = t3.return;
  }
  function Nl(e3) {
    for (var t3 = e3.return; t3 !== null && (Fl(t3) && tm(e3.stateNode, t3.stateNode), !Pl(t3)); ) t3 = t3.return;
  }
  function Pl(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 27;
  }
  function Fl(e3) {
    return e3 && e3.tag === 7 && e3.stateNode !== null;
  }
  function Il(e3) {
    var t3 = e3.type, n2 = e3.memoizedProps, r3 = e3.stateNode;
    try {
      a: switch (t3) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          n2.autoFocus && r3.focus();
          break a;
        case `img`:
          n2.src ? r3.src = n2.src : n2.srcSet && (r3.srcset = n2.srcSet);
      }
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  function Ll(e3, t3, n2) {
    try {
      var r3 = e3.stateNode;
      ip(r3, e3.type, n2, t3), r3[Nt] = t3;
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  function Rl(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 26 || e3.tag === 27 && Sp(e3.type) || e3.tag === 4;
  }
  function zl(e3) {
    a: for (; ; ) {
      for (; e3.sibling === null; ) {
        if (e3.return === null || Rl(e3.return)) return null;
        e3 = e3.return;
      }
      for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
        if (e3.tag === 27 && Sp(e3.type) || e3.flags & 2 || e3.child === null || e3.tag === 4) continue a;
        e3.child.return = e3, e3 = e3.child;
      }
      if (!(e3.flags & 2)) return e3.stateNode;
    }
  }
  function Bl(e3, t3, n2, r3) {
    var i2 = e3.tag;
    if (i2 === 5 || i2 === 6) i2 = e3.stateNode, t3 ? (n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2).insertBefore(i2, t3) : (t3 = n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2, t3.appendChild(i2), n2 = n2._reactRootContainer, n2 != null || t3.onclick !== null || (t3.onclick = On)), jl(e3, r3), k = true;
    else if (i2 !== 4 && (i2 === 27 && (jl(e3, r3), r3 = null, Sp(e3.type) && (n2 = e3.stateNode, t3 = null)), e3 = e3.child, e3 !== null)) for (Bl(e3, t3, n2, r3), e3 = e3.sibling; e3 !== null; ) Bl(e3, t3, n2, r3), e3 = e3.sibling;
  }
  function Vl(e3, t3, n2, r3) {
    var i2 = e3.tag;
    if (i2 === 5 || i2 === 6) i2 = e3.stateNode, t3 ? n2.insertBefore(i2, t3) : n2.appendChild(i2), jl(e3, r3), k = true;
    else if (i2 !== 4 && (i2 === 27 && (jl(e3, r3), r3 = null, Sp(e3.type) && (n2 = e3.stateNode)), e3 = e3.child, e3 !== null)) for (Vl(e3, t3, n2, r3), e3 = e3.sibling; e3 !== null; ) Vl(e3, t3, n2, r3), e3 = e3.sibling;
  }
  function Hl(e3) {
    var t3 = e3.stateNode, n2 = e3.memoizedProps;
    try {
      for (var r3 = e3.type, i2 = t3.attributes; i2.length; ) t3.removeAttributeNode(i2[0]);
      np(t3, r3, n2), t3[Mt] = e3, t3[Nt] = n2;
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  var Ul = false, Wl = null;
  function Gl(e3) {
    (e3.tag === 30 || e3.subtreeFlags & 33554432) && (Ul = true);
  }
  var Kl = null;
  function ql() {
    var e3 = Kl;
    return Kl = null, e3;
  }
  var Jl = 0;
  function Yl(e3, t3, n2, r3, i2) {
    return Jl = 0, Xl(e3.child, t3, n2, r3, i2);
  }
  function Xl(e3, t3, n2, r3, i2) {
    for (var a3 = false; e3 !== null; ) {
      if (e3.tag === 5) {
        var o2 = e3.stateNode;
        if (r3 !== null) {
          var s3 = Op(o2);
          r3.push(s3), s3.view && (a3 = true);
        } else a3 || Op(o2).view && (a3 = true);
        Ul = true, Tp(o2, Jl === 0 ? t3 : t3 + `_` + Jl, n2), Jl++;
      } else (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && i2 || Xl(e3.child, t3, n2, r3, i2) && (a3 = true));
      e3 = e3.sibling;
    }
    return a3;
  }
  function Zl(e3, t3) {
    for (; e3 !== null; ) e3.tag === 5 ? Ep(e3.stateNode, e3.memoizedProps) : (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && t3 || Zl(e3.child, t3)), e3 = e3.sibling;
  }
  function Ql(e3) {
    if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
      if ((e3.tag !== 22 || e3.memoizedState === null) && (Ql(e3), e3.tag === 30 && e3.flags & 18874368 && e3.stateNode.paired)) {
        var t3 = e3.memoizedProps;
        if (t3.name == null || t3.name === `auto`) throw Error(s2(544));
        var n2 = t3.name;
        t3 = ki(t3.default, t3.share), t3 !== `none` && (Yl(e3, n2, t3, null, false) || Zl(e3.child, false));
      }
      e3 = e3.sibling;
    }
  }
  function $l(e3, t3) {
    if (e3.tag === 30) {
      var n2 = e3.stateNode, r3 = e3.memoizedProps, i2 = Di(r3, n2), a3 = ki(r3.default, n2.paired ? r3.share : r3.enter);
      a3 === `none` ? Ql(e3) : Yl(e3, i2, a3, null, false) ? (Ql(e3), n2.paired || t3 || Nd(e3, r3.onEnter)) : Zl(e3.child, false);
    } else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) $l(e3, t3), e3 = e3.sibling;
    else Ql(e3);
  }
  function eu(e3) {
    if (Wl !== null && Wl.size !== 0) {
      var t3 = Wl;
      if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (e3.tag === 30 && e3.flags & 18874368) {
            var n2 = e3.memoizedProps, r3 = n2.name;
            if (r3 != null && r3 !== `auto`) {
              var i2 = t3.get(r3);
              if (i2 !== void 0) {
                var a3 = ki(n2.default, n2.share);
                if (a3 !== `none` && (Yl(e3, r3, a3, null, false) ? (a3 = e3.stateNode, i2.paired = a3, a3.paired = i2, Nd(e3, n2.onShare)) : Zl(e3.child, false)), t3.delete(r3), t3.size === 0) break;
              }
            }
          }
          eu(e3);
        }
        e3 = e3.sibling;
      }
    }
  }
  function tu(e3) {
    if (e3.tag === 30) {
      var t3 = e3.memoizedProps, n2 = Di(t3, e3.stateNode), r3 = Wl === null ? void 0 : Wl.get(n2), i2 = ki(t3.default, r3 === void 0 ? t3.exit : t3.share);
      i2 !== `none` && (Yl(e3, n2, i2, null, false) ? r3 === void 0 ? Nd(e3, t3.onExit) : (i2 = e3.stateNode, r3.paired = i2, i2.paired = r3, Wl.delete(n2), Nd(e3, t3.onShare)) : Zl(e3.child, false)), Wl !== null && eu(e3);
    } else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) tu(e3), e3 = e3.sibling;
    else Wl !== null && eu(e3);
  }
  function nu(e3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var t3 = e3.memoizedProps, n2 = Di(t3, e3.stateNode);
        t3 = ki(t3.default, t3.update), e3.flags &= -5, t3 !== `none` && Yl(e3, n2, t3, e3.memoizedState = [], false);
      } else e3.subtreeFlags & 33554432 && nu(e3);
      e3 = e3.sibling;
    }
  }
  function ru(e3) {
    if (e3.subtreeFlags & 18874368) for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag !== 22 || e3.memoizedState === null) {
        if (e3.tag === 30 && e3.flags & 18874368) {
          var t3 = e3.stateNode;
          t3.paired !== null && (t3.paired = null, Zl(e3.child, false));
        }
        ru(e3);
      }
      e3 = e3.sibling;
    }
  }
  function iu(e3) {
    if (e3.tag === 30) e3.stateNode.paired = null, Zl(e3.child, false), ru(e3);
    else if (e3.subtreeFlags & 33554432) for (e3 = e3.child; e3 !== null; ) iu(e3), e3 = e3.sibling;
    else ru(e3);
  }
  function au(e3) {
    for (e3 = e3.child; e3 !== null; ) e3.tag === 30 ? Zl(e3.child, false) : e3.subtreeFlags & 33554432 && au(e3), e3 = e3.sibling;
  }
  function ou(e3, t3, n2, r3, i2, a3, o2) {
    for (var s3 = false; t3 !== null; ) {
      if (t3.tag === 5) {
        var c3 = t3.stateNode;
        if (a3 !== null && Jl < a3.length) {
          var l3 = a3[Jl], u3 = Op(c3);
          (l3.view || u3.view) && (s3 = true);
          var d3;
          if (d3 = !(e3.flags & 4)) {
            if (u3.clip) d3 = true;
            else {
              d3 = l3.rect;
              var f3 = u3.rect;
              d3 = d3.y !== f3.y || d3.x !== f3.x || d3.height !== f3.height || d3.width !== f3.width;
            }
          }
          d3 && (e3.flags |= 4), u3.abs ? u3 = !l3.abs : (l3 = l3.rect, u3 = u3.rect, u3 = l3.height !== u3.height || l3.width !== u3.width), u3 && (e3.flags |= 32);
        } else e3.flags |= 32;
        e3.flags & 4 && Tp(c3, Jl === 0 ? n2 : n2 + `_` + Jl, i2), s3 && e3.flags & 4 || (Kl === null && (Kl = []), Kl.push(c3, Jl === 0 ? r3 : r3 + `_` + Jl, t3.memoizedProps)), Jl++;
      } else (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o2 ? e3.flags |= t3.flags & 32 : ou(e3, t3.child, n2, r3, i2, a3, o2) && (s3 = true));
      t3 = t3.sibling;
    }
    return s3;
  }
  function su(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var n2 = e3.memoizedProps, r3 = e3.stateNode, i2 = Di(n2, r3), a3 = ki(n2.default, n2.update);
        if (t3) {
          r3 = r3.clones;
          var o2 = r3 === null ? null : r3.map(kp);
        } else o2 = e3.memoizedState, e3.memoizedState = null;
        r3 = e3;
        var s3 = e3.child;
        Jl = 0, i2 = ou(r3, s3, i2, i2, a3, o2, false), e3.flags & 4 && i2 && (t3 || Nd(e3, n2.onUpdate));
      } else e3.subtreeFlags & 33554432 && su(e3, t3);
      e3 = e3.sibling;
    }
  }
  var V = false, H = false, cu = false, lu = false, uu = typeof WeakSet == `function` ? WeakSet : Set, du = null, fu = false, pu = false, mu = false, hu = false;
  function gu(e3, t3, n2) {
    if (e3 = e3.containerInfo, sp = gh, e3 = ri(e3), ii(e3)) {
      if (`selectionStart` in e3) var r3 = { start: e3.selectionStart, end: e3.selectionEnd };
      else a: {
        r3 = (r3 = e3.ownerDocument) && r3.defaultView || window;
        var i2 = r3.getSelection && r3.getSelection();
        if (i2 && i2.rangeCount !== 0) {
          r3 = i2.anchorNode;
          var a3 = i2.anchorOffset, o2 = i2.focusNode;
          i2 = i2.focusOffset;
          try {
            r3.nodeType, o2.nodeType;
          } catch {
            r3 = null;
            break a;
          }
          var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d3 = 0, f3 = e3, p3 = null;
          b: for (; ; ) {
            for (var m3; f3 !== r3 || a3 !== 0 && f3.nodeType !== 3 || (c3 = s3 + a3), f3 !== o2 || i2 !== 0 && f3.nodeType !== 3 || (l3 = s3 + i2), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; ) p3 = f3, f3 = m3;
            for (; ; ) {
              if (f3 === e3) break b;
              if (p3 === r3 && ++u3 === a3 && (c3 = s3), p3 === o2 && ++d3 === i2 && (l3 = s3), (m3 = f3.nextSibling) !== null) break;
              f3 = p3, p3 = f3.parentNode;
            }
            f3 = m3;
          }
          r3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
        } else r3 = null;
      }
      r3 || (r3 = { start: 0, end: 0 });
    } else r3 = null;
    for (cp = { focusedElem: e3, selectionRange: r3 }, gh = false, n2 = (n2 & 335544064) === n2, du = t3, t3 = n2 ? 9270 : 1024; du !== null; ) {
      if (e3 = du, n2 && (r3 = e3.deletions, r3 !== null)) for (a3 = 0; a3 < r3.length; a3++) n2 && tu(r3[a3]);
      if (e3.alternate === null && e3.flags & 2) n2 && Gl(e3), _u(n2);
      else {
        if (e3.tag === 22) {
          if (r3 = e3.alternate, e3.memoizedState !== null) {
            r3 !== null && r3.memoizedState === null && n2 && tu(r3), _u(n2);
            continue;
          }
          if (r3 !== null && r3.memoizedState !== null) {
            n2 && Gl(e3), _u(n2);
            continue;
          }
        }
        r3 = e3.child, (e3.subtreeFlags & t3) !== 0 && r3 !== null ? (r3.return = e3, du = r3) : (n2 && nu(e3), _u(n2));
      }
    }
    Wl = null;
  }
  function _u(e3) {
    for (; du !== null; ) {
      var t3 = du, n2 = e3, r3 = t3.alternate, i2 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i2 & 1024 && r3 !== null) {
            n2 = void 0, i2 = r3.memoizedProps, r3 = r3.memoizedState;
            var a3 = t3.stateNode;
            try {
              var o2 = Oc(t3.type, i2);
              n2 = a3.getSnapshotBeforeUpdate(o2, r3), a3.__reactInternalSnapshotBeforeUpdate = n2;
            } catch (e4) {
              Z(t3, t3.return, e4);
            }
          }
          break;
        case 3:
          if (i2 & 1024) {
            if (r3 = t3.stateNode.containerInfo, n2 = r3.nodeType, n2 === 9) nm(r3);
            else if (n2 === 1) switch (r3.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                nm(r3);
                break;
              default:
                r3.textContent = ``;
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n2 && r3 !== null && (n2 = Di(r3.memoizedProps, r3.stateNode), i2 = t3.memoizedProps, i2 = ki(i2.default, i2.update), i2 !== `none` && Yl(r3, n2, i2, r3.memoizedState = [], true));
          break;
        default:
          if (i2 & 1024) throw Error(s2(163));
      }
      if (r3 = t3.sibling, r3 !== null) {
        r3.return = t3.return, du = r3;
        break;
      }
      du = t3.return;
    }
  }
  function vu(e3, t3, n2) {
    var r3 = n2.flags;
    switch (n2.tag) {
      case 0:
      case 11:
      case 15:
        Lu(e3, n2), r3 & 4 && Tl(5, n2);
        break;
      case 1:
        if (Lu(e3, n2), r3 & 4) {
          if (e3 = n2.stateNode, t3 === null) try {
            e3.componentDidMount();
          } catch (e4) {
            Z(n2, n2.return, e4);
          }
          else {
            var i2 = Oc(n2.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e3.componentDidUpdate(i2, t3, e3.__reactInternalSnapshotBeforeUpdate);
            } catch (e4) {
              Z(n2, n2.return, e4);
            }
          }
        }
        r3 & 64 && Dl(n2), r3 & 512 && kl(n2, n2.return);
        break;
      case 3:
        if (Lu(e3, n2), r3 & 64 && (e3 = n2.updateQueue, e3 !== null)) {
          if (t3 = null, n2.child !== null) switch (n2.child.tag) {
            case 27:
            case 5:
              t3 = n2.child.stateNode;
              break;
            case 1:
              t3 = n2.child.stateNode;
          }
          try {
            No(e3, t3);
          } catch (e4) {
            Z(n2, n2.return, e4);
          }
        }
        break;
      case 27:
        t3 === null && r3 & 4 && Hl(n2);
      case 26:
      case 5:
        Lu(e3, n2), t3 === null && r3 & 4 && Il(n2), r3 & 512 && kl(n2, n2.return);
        break;
      case 12:
        Lu(e3, n2);
        break;
      case 31:
        Lu(e3, n2), r3 & 4 && Eu(e3, n2);
        break;
      case 13:
        Lu(e3, n2), r3 & 4 && Du(e3, n2), r3 & 64 && (e3 = n2.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null && (n2 = _f.bind(null, n2), cm(e3, n2))));
        break;
      case 22:
        if (r3 = n2.memoizedState !== null || V, !r3) {
          var a3 = t3 !== null && t3.memoizedState !== null || H;
          t3 = V, i2 = H, V = r3, (H = a3) && !i2 ? (r3 = 2, n2.subtreeFlags & 8772 && (r3 |= 1), zu(e3, n2, r3)) : Lu(e3, n2), V = t3, H = i2;
        }
        break;
      case 30:
        Lu(e3, n2), r3 & 512 && kl(n2, n2.return);
        break;
      case 7:
        r3 & 512 && kl(n2, n2.return);
      default:
        Lu(e3, n2);
    }
  }
  function yu(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) bu(e3, t3), e3 = e3.sibling;
  }
  function bu(e3, t3) {
    switch (e3.tag) {
      case 5:
      case 26:
        try {
          var n2 = e3.stateNode;
          if (t3) {
            var r3 = n2.style;
            typeof r3.setProperty == `function` ? r3.setProperty(`display`, `none`, `important`) : r3.display = `none`;
          } else {
            var i2 = e3.stateNode, a3 = e3.memoizedProps.style, o2 = a3 != null && a3.hasOwnProperty(`display`) ? a3.display : null;
            i2.style.display = o2 == null || typeof o2 == `boolean` ? `` : (`` + o2).trim();
          }
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        xu(e3, t3);
        break;
      case 6:
        try {
          e3.stateNode.nodeValue = t3 ? `` : e3.memoizedProps, k = true;
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        break;
      case 18:
        try {
          var s3 = e3.stateNode;
          t3 ? wp(s3, true) : wp(e3.stateNode, false);
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        break;
      case 22:
      case 23:
        e3.memoizedState === null && yu(e3, t3);
        break;
      default:
        yu(e3, t3);
    }
  }
  function xu(e3, t3) {
    if (e3.subtreeFlags & 67108864) for (e3 = e3.child; e3 !== null; ) {
      a: {
        var n2 = e3, r3 = t3;
        switch (n2.tag) {
          case 4:
            bu(n2, r3);
            break a;
          case 22:
            n2.memoizedState === null && xu(n2, r3);
            break a;
          default:
            xu(n2, r3);
        }
      }
      e3 = e3.sibling;
    }
  }
  function Su(e3) {
    var t3 = e3.alternate;
    t3 !== null && (e3.alternate = null, Su(t3)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t3 = e3.stateNode, t3 !== null && Vt(t3)), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
  }
  var U = null, Cu = false;
  function wu(e3, t3, n2) {
    for (n2 = n2.child; n2 !== null; ) Tu(e3, t3, n2), n2 = n2.sibling;
  }
  function Tu(e3, t3, n2) {
    if (ot && typeof ot.onCommitFiberUnmount == `function`) try {
      ot.onCommitFiberUnmount(at, n2);
    } catch {
    }
    switch (n2.tag) {
      case 26:
        H || Al(n2, t3), wu(e3, t3, n2), n2.memoizedState ? n2.memoizedState.count-- : n2.stateNode && !H && (n2 = n2.stateNode, n2.parentNode.removeChild(n2));
        break;
      case 27:
        H || Al(n2, t3), Nl(n2);
        var r3 = U, i2 = Cu;
        Sp(n2.type) && (U = n2.stateNode, Cu = false), wu(e3, t3, n2), gm(n2.stateNode, n2.type, n2.memoizedProps), U = r3, Cu = i2;
        break;
      case 5:
        H || Al(n2, t3), Nl(n2);
      case 6:
        if (n2.tag === 6 && Nl(n2), r3 = U, i2 = Cu, U = null, wu(e3, t3, n2), U = r3, Cu = i2, U !== null) {
          if (Cu) try {
            (U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(n2.stateNode), k = true;
          } catch (e4) {
            Z(n2, t3, e4);
          }
          else try {
            U.removeChild(n2.stateNode), k = true;
          } catch (e4) {
            Z(n2, t3, e4);
          }
        }
        break;
      case 18:
        U !== null && (Cu ? (e3 = U, Cp(e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, n2.stateNode), Hh(e3)) : Cp(U, n2.stateNode));
        break;
      case 4:
        r3 = U, i2 = Cu, U = n2.stateNode.containerInfo, Cu = true, wu(e3, t3, n2), U = r3, Cu = i2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        El(2, n2, t3), H || El(4, n2, t3), wu(e3, t3, n2);
        break;
      case 1:
        H || (Al(n2, t3), r3 = n2.stateNode, typeof r3.componentWillUnmount == `function` && Ol(n2, t3, r3)), wu(e3, t3, n2);
        break;
      case 21:
        wu(e3, t3, n2);
        break;
      case 22:
        H = (r3 = H) || n2.memoizedState !== null, wu(e3, t3, n2), H = r3;
        break;
      case 30:
        Al(n2, t3), wu(e3, t3, n2);
        break;
      case 7:
        H || Al(n2, t3), wu(e3, t3, n2);
        break;
      default:
        wu(e3, t3, n2);
    }
  }
  function Eu(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null))) {
      e3 = e3.dehydrated;
      try {
        Hh(e3);
      } catch (e4) {
        Z(t3, t3.return, e4);
      }
    }
  }
  function Du(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null)))) try {
      Hh(e3);
    } catch (e4) {
      Z(t3, t3.return, e4);
    }
  }
  function Ou(e3) {
    switch (e3.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e3.stateNode;
        return t3 === null && (t3 = e3.stateNode = new uu()), t3;
      case 22:
        return e3 = e3.stateNode, t3 = e3._retryCache, t3 === null && (t3 = e3._retryCache = new uu()), t3;
      default:
        throw Error(s2(435, e3.tag));
    }
  }
  function ku(e3, t3) {
    var n2 = Ou(e3);
    t3.forEach(function(t4) {
      if (!n2.has(t4)) {
        n2.add(t4);
        var r3 = vf.bind(null, e3, t4);
        t4.then(r3, r3);
      }
    });
  }
  function Au(e3, t3, n2) {
    var r3 = t3.deletions;
    if (r3 !== null) for (var i2 = 0; i2 < r3.length; i2++) {
      var a3 = r3[i2], o2 = e3, c3 = t3, l3 = c3;
      a: for (; l3 !== null; ) {
        switch (l3.tag) {
          case 27:
            if (Sp(l3.type)) {
              U = l3.stateNode, Cu = false;
              break a;
            }
            break;
          case 5:
            U = l3.stateNode, Cu = false;
            break a;
          case 3:
          case 4:
            U = l3.stateNode.containerInfo, Cu = true;
            break a;
        }
        l3 = l3.return;
      }
      if (U === null) throw Error(s2(160));
      Tu(o2, c3, a3), U = null, Cu = false, o2 = a3.alternate, o2 !== null && (o2.return = null), a3.return = null;
    }
    if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) Mu(t3, e3, n2), t3 = t3.sibling;
  }
  var ju = null;
  function Mu(e3, t3, n2) {
    var r3 = e3.alternate, i2 = e3.flags;
    switch (e3.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (i2 & 4 && (r3 = e3.updateQueue, r3 = r3 === null ? null : r3.events, r3 !== null)) for (var a3 = 0; a3 < r3.length; a3++) {
          var o2 = r3[a3];
          o2.ref.impl = o2.nextImpl;
        }
        Au(t3, e3, n2), Nu(e3), i2 & 4 && (El(3, e3, e3.return), Tl(3, e3), El(5, e3, e3.return));
        break;
      case 1:
        Au(t3, e3, n2), Nu(e3), i2 & 512 && (H || r3 === null || Al(r3, r3.return)), i2 & 64 && V && (e3 = e3.updateQueue, e3 !== null && (t3 = e3.callbacks, t3 !== null && (n2 = e3.shared.hiddenCallbacks, e3.shared.hiddenCallbacks = n2 === null ? t3 : n2.concat(t3))));
        break;
      case 26:
        if (a3 = ju, Au(t3, e3, n2), Nu(e3), i2 & 512 && (H || r3 === null || Al(r3, r3.return)), i2 & 4) {
          if (i2 = r3 === null ? null : r3.memoizedState, n2 = e3.memoizedState, r3 === null) {
            if (n2 === null) {
              if (e3.stateNode === null) {
                if (V) e3.stateNode = fp(e3.type, e3.memoizedProps, t3.containerInfo, e3);
                else {
                  a: {
                    t3 = e3.type, n2 = e3.memoizedProps, i2 = a3.ownerDocument || a3;
                    b: switch (t3) {
                      case `title`:
                        r3 = i2.getElementsByTagName(`title`)[0], (!r3 || r3[zt] || r3[Mt] || r3.namespaceURI === `http://www.w3.org/2000/svg` || r3.hasAttribute(`itemprop`)) && (r3 = i2.createElement(t3), i2.head.insertBefore(r3, i2.querySelector(`head > title`))), np(r3, t3, n2), r3[Mt] = e3, Kt(r3), t3 = r3;
                        break a;
                      case `link`:
                        if (a3 = Gm(`link`, `href`, i2).get(t3 + (n2.href || ``))) {
                          for (o2 = 0; o2 < a3.length; o2++) if (r3 = a3[o2], r3.getAttribute(`href`) === (n2.href == null || n2.href === `` ? null : n2.href) && r3.getAttribute(`rel`) === (n2.rel == null ? null : n2.rel) && r3.getAttribute(`title`) === (n2.title == null ? null : n2.title) && r3.getAttribute(`crossorigin`) === (n2.crossOrigin == null ? null : n2.crossOrigin)) {
                            a3.splice(o2, 1);
                            break b;
                          }
                        }
                        r3 = i2.createElement(t3), np(r3, t3, n2), i2.head.appendChild(r3);
                        break;
                      case `meta`:
                        if (a3 = Gm(`meta`, `content`, i2).get(t3 + (n2.content || ``))) {
                          for (o2 = 0; o2 < a3.length; o2++) if (r3 = a3[o2], r3.getAttribute(`content`) === (n2.content == null ? null : `` + n2.content) && r3.getAttribute(`name`) === (n2.name == null ? null : n2.name) && r3.getAttribute(`property`) === (n2.property == null ? null : n2.property) && r3.getAttribute(`http-equiv`) === (n2.httpEquiv == null ? null : n2.httpEquiv) && r3.getAttribute(`charset`) === (n2.charSet == null ? null : n2.charSet)) {
                            a3.splice(o2, 1);
                            break b;
                          }
                        }
                        r3 = i2.createElement(t3), np(r3, t3, n2), i2.head.appendChild(r3);
                        break;
                      default:
                        throw Error(s2(468, t3));
                    }
                    r3[Mt] = e3, Kt(r3), t3 = r3;
                  }
                  e3.stateNode = t3;
                }
              } else V || Km(a3, e3.type, e3.stateNode);
            } else e3.stateNode = Bm(a3, n2, e3.memoizedProps);
          } else i2 === n2 ? n2 === null && e3.stateNode !== null && Ll(e3, e3.memoizedProps, r3.memoizedProps) : (i2 === null ? (t3 = r3.stateNode, t3 === null || H || t3.parentNode.removeChild(t3)) : i2.count--, n2 === null ? V || Km(a3, e3.type, e3.stateNode) : Bm(a3, n2, e3.memoizedProps));
        }
        break;
      case 27:
        Au(t3, e3, n2), Nu(e3), i2 & 512 && (H || r3 === null || Al(r3, r3.return)), r3 !== null && i2 & 4 && Ll(e3, e3.memoizedProps, r3.memoizedProps);
        break;
      case 5:
        if (a3 = cu, cu = false, Au(t3, e3, n2), cu = a3, Nu(e3), i2 & 512 && (H || r3 === null || Al(r3, r3.return)), e3.flags & 32) {
          t3 = e3.stateNode;
          try {
            bn(t3, ``), k = true;
          } catch (t4) {
            Z(e3, e3.return, t4);
          }
        }
        i2 & 4 && e3.stateNode != null && (t3 = e3.memoizedProps, Ll(e3, t3, r3 === null ? t3 : r3.memoizedProps)), i2 & 1024 && (lu = true);
        break;
      case 6:
        if (Au(t3, e3, n2), Nu(e3), i2 & 4) {
          if (e3.stateNode === null) throw Error(s2(162));
          t3 = e3.memoizedProps, n2 = e3.stateNode;
          try {
            n2.nodeValue = t3, k = true;
          } catch (t4) {
            Z(e3, e3.return, t4);
          }
        }
        break;
      case 3:
        if (k = false, Wm = null, a3 = ju, ju = bm(t3.containerInfo), Au(t3, e3, n2), ju = a3, Nu(e3), i2 & 4 && r3 !== null && r3.memoizedState.isDehydrated) try {
          Hh(t3.containerInfo);
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        lu && (lu = false, Pu(e3)), k = false;
        break;
      case 4:
        i2 = cu, cu = V, r3 = nn(), a3 = ju, ju = bm(e3.stateNode.containerInfo), Au(t3, e3, n2), Nu(e3), ju = a3, k && pu && (mu = true), k = r3, cu = i2;
        break;
      case 12:
        Au(t3, e3, n2), Nu(e3);
        break;
      case 31:
        Au(t3, e3, n2), Nu(e3), i2 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 13:
        Au(t3, e3, n2), Nu(e3), e3.child.flags & 8192 && e3.memoizedState !== null != (r3 !== null && r3.memoizedState !== null) && (hd = Xe()), i2 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 22:
        a3 = e3.memoizedState !== null, o2 = r3 !== null && r3.memoizedState !== null;
        var c3 = V, l3 = H, u3 = cu;
        V = c3 || a3, cu = u3 || a3, H = l3 || o2, Au(t3, e3, n2), H = l3, cu = u3, V = c3, Nu(e3), i2 & 8192 && (t3 = e3.stateNode, t3._visibility = a3 ? t3._visibility & -2 : t3._visibility | 1, !a3 || r3 === null || o2 || V || H || (t3 = o2 || H, n2 = V, r3 = H, V = a3 || V, H = t3, Ru(e3, 2), V = n2, H = r3), !a3 && cu || yu(e3, a3)), i2 & 4 && (t3 = e3.updateQueue, t3 !== null && (n2 = t3.retryQueue, n2 !== null && (t3.retryQueue = null, ku(e3, n2))));
        break;
      case 19:
        Au(t3, e3, n2), Nu(e3), i2 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 30:
        i2 & 512 && (H || r3 === null || Al(r3, r3.return)), i2 = nn(), a3 = pu, o2 = (n2 & 335544064) === n2, c3 = e3.memoizedProps, pu = o2 && ki(c3.default, c3.update) !== `none`, Au(t3, e3, n2), Nu(e3), o2 && r3 !== null && k && (e3.flags |= 4), pu = a3, k = i2;
        break;
      case 21:
        break;
      case 7:
        i2 & 512 && (H || r3 === null || Al(r3, r3.return)), r3 && r3.stateNode !== null && (r3.stateNode._fragmentFiber = e3);
      default:
        Au(t3, e3, n2), Nu(e3);
    }
  }
  function Nu(e3) {
    var t3 = e3.flags;
    if (t3 & 2) {
      try {
        for (var n2, r3 = e3.return; r3 !== null; ) {
          if (Rl(r3)) {
            n2 = r3;
            break;
          }
          r3 = r3.return;
        }
        r3 = null;
        for (var i2 = e3.return; i2 !== null; ) {
          if (Fl(i2)) {
            var a3 = i2.stateNode;
            r3 === null ? r3 = [a3] : r3.push(a3);
          }
          if (Pl(i2)) break;
          i2 = i2.return;
        }
        var o2 = r3;
        if (n2 == null) throw Error(s2(160));
        switch (n2.tag) {
          case 27:
            var c3 = n2.stateNode;
            Vl(e3, zl(e3), c3, o2);
            break;
          case 5:
            var l3 = n2.stateNode;
            n2.flags & 32 && (bn(l3, ``), n2.flags &= -33), Vl(e3, zl(e3), l3, o2);
            break;
          case 3:
          case 4:
            var u3 = n2.stateNode.containerInfo;
            Bl(e3, zl(e3), u3, o2);
            break;
          default:
            throw Error(s2(161));
        }
      } catch (t4) {
        Z(e3, e3.return, t4);
      }
      e3.flags &= -3;
    }
    t3 & 4096 && (e3.flags &= -4097);
  }
  function Pu(e3) {
    if (e3.subtreeFlags & 1024) for (e3 = e3.child; e3 !== null; ) {
      var t3 = e3;
      Pu(t3), t3.tag === 5 && t3.flags & 1024 && (t3 = t3.stateNode, gh = true, t3.reset(), gh = false), e3 = e3.sibling;
    }
  }
  function Fu(e3, t3) {
    if (t3.subtreeFlags & 9270) for (t3 = t3.child; t3 !== null; ) Iu(t3, e3), t3 = t3.sibling;
    else su(t3, false);
  }
  function Iu(e3, t3) {
    var n2 = e3.alternate;
    if (n2 === null) $l(e3, false);
    else switch (e3.tag) {
      case 3:
        if (hu = fu = false, ql(), Fu(t3, e3), !fu && !mu) {
          if (e3 = Kl, e3 !== null) for (var r3 = 0; r3 < e3.length; r3 += 3) {
            n2 = e3[r3];
            var i2 = e3[r3 + 1];
            Ep(n2, e3[r3 + 2]), n2 = n2.ownerDocument.documentElement, n2 !== null && n2.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i2 + `)` });
          }
          e3 = t3.containerInfo, e3 = e3.nodeType === 9 ? e3.documentElement : e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `` && (e3.style.viewTransitionName = `none`, e3.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)` }), e3.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` })), hu = true;
        }
        Kl = null;
        break;
      case 5:
        Fu(t3, e3);
        break;
      case 4:
        r3 = fu, fu = false, Fu(t3, e3), fu && (mu = true), fu = r3;
        break;
      case 22:
        e3.memoizedState === null && (n2.memoizedState === null ? Fu(t3, e3) : $l(e3, false));
        break;
      case 30:
        r3 = fu, i2 = ql(), fu = false, Fu(t3, e3), fu && (e3.flags |= 4);
        var a3 = e3.memoizedProps, o2 = e3.stateNode;
        t3 = Di(a3, o2), o2 = Di(n2.memoizedProps, o2);
        var s3 = ki(a3.default, a3.update);
        s3 === `none` ? t3 = false : (a3 = n2.memoizedState, n2.memoizedState = null, n2 = e3.child, Jl = 0, t3 = ou(e3, n2, t3, o2, s3, a3, true), Jl !== (a3 === null ? 0 : a3.length) && (e3.flags |= 32)), e3.flags & 4 && t3 ? (Nd(e3, e3.memoizedProps.onUpdate), Kl = i2) : i2 !== null && (i2.push.apply(i2, Kl), Kl = i2), fu = e3.flags & 32 ? true : r3;
        break;
      default:
        Fu(t3, e3);
    }
  }
  function Lu(e3, t3) {
    if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) vu(e3, t3.alternate, t3), t3 = t3.sibling;
  }
  function Ru(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      var n2 = e3, r3 = t3;
      switch (n2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          El(4, n2, n2.return), Ru(n2, r3);
          break;
        case 1:
          Al(n2, n2.return);
          var i2 = n2.stateNode;
          typeof i2.componentWillUnmount == `function` && Ol(n2, n2.return, i2), Ru(n2, r3);
          break;
        case 27:
          r3 & 2 && gm(n2.stateNode, n2.type, n2.memoizedProps);
        case 5:
          Al(n2, n2.return), n2.tag !== 5 && n2.tag !== 27 || Nl(n2), Ru(n2, r3);
          break;
        case 6:
          Nl(n2);
          break;
        case 26:
          Al(n2, n2.return), i2 = n2.stateNode, n2.memoizedState !== null || i2 === null || H || i2.parentNode.removeChild(i2), Ru(n2, r3);
          break;
        case 22:
          n2.memoizedState === null && Ru(n2, r3);
          break;
        case 30:
          Al(n2, n2.return), Ru(n2, r3);
          break;
        case 7:
          Al(n2, n2.return);
        default:
          Ru(n2, r3);
      }
      e3 = e3.sibling;
    }
  }
  function zu(e3, t3, n2) {
    for (n2 = t3.subtreeFlags & 8772 ? n2 : n2 & -2, t3 = t3.child; t3 !== null; ) {
      var r3 = t3.alternate, i2 = e3, a3 = t3, o2 = a3.flags, s3 = !!(n2 & 1);
      switch (a3.tag) {
        case 0:
        case 11:
        case 15:
          zu(i2, a3, n2), Tl(4, a3);
          break;
        case 1:
          if (zu(i2, a3, n2), r3 = a3, i2 = r3.stateNode, typeof i2.componentDidMount == `function`) try {
            i2.componentDidMount();
          } catch (e4) {
            Z(r3, r3.return, e4);
          }
          if (r3 = a3, i2 = r3.updateQueue, i2 !== null) {
            var c3 = r3.stateNode;
            try {
              var l3 = i2.shared.hiddenCallbacks;
              if (l3 !== null) for (i2.shared.hiddenCallbacks = null, i2 = 0; i2 < l3.length; i2++) Mo(l3[i2], c3);
            } catch (e4) {
              Z(r3, r3.return, e4);
            }
          }
          s3 && o2 & 64 && Dl(a3), kl(a3, a3.return);
          break;
        case 27:
          n2 & 2 && Hl(a3);
        case 5:
          a3.tag !== 5 && a3.tag !== 27 || Ml(a3), zu(i2, a3, n2), s3 && r3 === null && o2 & 4 && Il(a3), kl(a3, a3.return);
          break;
        case 6:
          Ml(a3);
          break;
        case 26:
          c3 = a3.stateNode, a3.memoizedState !== null || c3 === null || V || Km(bm(c3.ownerDocument), a3.type, c3), zu(i2, a3, n2), s3 && r3 === null && o2 & 4 && Il(a3), kl(a3, a3.return);
          break;
        case 12:
          zu(i2, a3, n2);
          break;
        case 31:
          zu(i2, a3, n2), s3 && o2 & 4 && Eu(i2, a3);
          break;
        case 13:
          zu(i2, a3, n2), s3 && o2 & 4 && Du(i2, a3);
          break;
        case 22:
          a3.memoizedState === null && zu(i2, a3, n2), kl(a3, a3.return);
          break;
        case 30:
          zu(i2, a3, n2), kl(a3, a3.return);
          break;
        case 7:
          kl(a3, a3.return);
        default:
          zu(i2, a3, n2);
      }
      t3 = t3.sibling;
    }
  }
  function Bu(e3, t3) {
    var n2 = null;
    e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n2 = e3.memoizedState.cachePool.pool), e3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e3 = t3.memoizedState.cachePool.pool), e3 !== n2 && (e3 != null && e3.refCount++, n2 != null && Va(n2));
  }
  function Vu(e3, t3) {
    e3 = null, t3.alternate !== null && (e3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e3 && (t3.refCount++, e3 != null && Va(e3));
  }
  function Hu(e3, t3, n2, r3) {
    var i2 = (n2 & 335544064) === n2;
    if (t3.subtreeFlags & (i2 ? 10262 : 10256)) for (t3 = t3.child; t3 !== null; ) Uu(e3, t3, n2, r3), t3 = t3.sibling;
    else i2 && au(t3);
  }
  function Uu(e3, t3, n2, r3) {
    var i2 = (n2 & 335544064) === n2;
    i2 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && iu(t3);
    var a3 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        Hu(e3, t3, n2, r3), a3 & 2048 && Tl(9, t3);
        break;
      case 1:
        Hu(e3, t3, n2, r3);
        break;
      case 3:
        Hu(e3, t3, n2, r3), i2 && hu && (e3 = e3.containerInfo, e3 = e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, e3.style.viewTransitionName === `root` && (e3.style.viewTransitionName = ``), e3 = e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `none` && (e3.style.viewTransitionName = ``)), a3 & 2048 && (a3 = null, t3.alternate !== null && (a3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== a3 && (t3.refCount++, a3 != null && Va(a3)));
        break;
      case 12:
        if (a3 & 2048) {
          Hu(e3, t3, n2, r3), a3 = t3.stateNode;
          try {
            var o2 = t3.memoizedProps, s3 = o2.id, c3 = o2.onPostCommit;
            typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, a3.passiveEffectDuration, -0);
          } catch (e4) {
            Z(t3, t3.return, e4);
          }
        } else Hu(e3, t3, n2, r3);
        break;
      case 31:
        Hu(e3, t3, n2, r3);
        break;
      case 13:
        Hu(e3, t3, n2, r3);
        break;
      case 23:
        break;
      case 22:
        o2 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i2 && s3 !== null && s3.memoizedState !== null && iu(t3), o2._visibility & 2 ? Hu(e3, t3, n2, r3) : (o2._visibility |= 2, Wu(e3, t3, n2, r3, !!(t3.subtreeFlags & 10256) || false))) : (i2 && s3 !== null && s3.memoizedState === null && iu(s3), o2._visibility & 2 ? Hu(e3, t3, n2, r3) : Gu(e3, t3)), a3 & 2048 && Bu(s3, t3);
        break;
      case 24:
        Hu(e3, t3, n2, r3), a3 & 2048 && Vu(t3.alternate, t3);
        break;
      case 30:
        i2 && (a3 = t3.alternate, a3 !== null && (Zl(a3.child, true), Zl(t3.child, true))), Hu(e3, t3, n2, r3);
        break;
      default:
        Hu(e3, t3, n2, r3);
    }
  }
  function Wu(e3, t3, n2, r3, i2) {
    for (i2 && (i2 = !!(t3.subtreeFlags & 10256) || false), t3 = t3.child; t3 !== null; ) {
      var a3 = e3, o2 = t3, s3 = n2, c3 = r3, l3 = o2.flags;
      switch (o2.tag) {
        case 0:
        case 11:
        case 15:
          Wu(a3, o2, s3, c3, i2), Tl(8, o2);
          break;
        case 23:
          break;
        case 22:
          var u3 = o2.stateNode;
          o2.memoizedState === null ? (u3._visibility |= 2, Wu(a3, o2, s3, c3, i2)) : u3._visibility & 2 ? Wu(a3, o2, s3, c3, i2) : Gu(a3, o2), i2 && l3 & 2048 && Bu(o2.alternate, o2);
          break;
        case 24:
          Wu(a3, o2, s3, c3, i2), i2 && l3 & 2048 && Vu(o2.alternate, o2);
          break;
        default:
          Wu(a3, o2, s3, c3, i2);
      }
      t3 = t3.sibling;
    }
  }
  function Gu(e3, t3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
      var n2 = e3, r3 = t3, i2 = r3.flags;
      switch (r3.tag) {
        case 22:
          Gu(n2, r3), i2 & 2048 && Bu(r3.alternate, r3);
          break;
        case 24:
          Gu(n2, r3), i2 & 2048 && Vu(r3.alternate, r3);
          break;
        default:
          Gu(n2, r3);
      }
      t3 = t3.sibling;
    }
  }
  var Ku = 8192;
  function qu(e3, t3, n2) {
    if (e3.subtreeFlags & Ku) for (e3 = e3.child; e3 !== null; ) Ju(e3, t3, n2), e3 = e3.sibling;
  }
  function Ju(e3, t3, n2) {
    switch (e3.tag) {
      case 26:
        qu(e3, t3, n2), e3.flags & Ku && (e3.memoizedState === null ? (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n2, e3)) : Qm(n2, ju, e3.memoizedState, e3.memoizedProps));
        break;
      case 5:
        qu(e3, t3, n2), e3.flags & Ku && (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n2, e3));
        break;
      case 3:
      case 4:
        var r3 = ju;
        ju = bm(e3.stateNode.containerInfo), qu(e3, t3, n2), ju = r3;
        break;
      case 22:
        e3.memoizedState === null && (r3 = e3.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Ku, Ku = 16777216, qu(e3, t3, n2), Ku = r3) : qu(e3, t3, n2));
        break;
      case 30:
        if ((e3.flags & Ku) !== 0 && (r3 = e3.memoizedProps.name, r3 != null && r3 !== `auto`)) {
          var i2 = e3.stateNode;
          i2.paired = null, Wl === null && (Wl = /* @__PURE__ */ new Map()), Wl.set(r3, i2);
        }
        qu(e3, t3, n2);
        break;
      default:
        qu(e3, t3, n2);
    }
  }
  function Yu(e3) {
    var t3 = e3.alternate;
    if (t3 !== null && (e3 = t3.child, e3 !== null)) {
      t3.child = null;
      do
        t3 = e3.sibling, e3.sibling = null, e3 = t3;
      while (e3 !== null);
    }
  }
  function Xu(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) {
        var r3 = t3[n2];
        du = r3, $u(r3, e3);
      }
      Yu(e3);
    }
    if (e3.subtreeFlags & 10256) for (e3 = e3.child; e3 !== null; ) Zu(e3), e3 = e3.sibling;
  }
  function Zu(e3) {
    switch (e3.tag) {
      case 0:
      case 11:
      case 15:
        Xu(e3), e3.flags & 2048 && El(9, e3, e3.return);
        break;
      case 3:
        Xu(e3);
        break;
      case 12:
        Xu(e3);
        break;
      case 22:
        var t3 = e3.stateNode;
        e3.memoizedState !== null && t3._visibility & 2 && (e3.return === null || e3.return.tag !== 13) ? (t3._visibility &= -3, Qu(e3)) : Xu(e3);
        break;
      default:
        Xu(e3);
    }
  }
  function Qu(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) {
        var r3 = t3[n2];
        du = r3, $u(r3, e3);
      }
      Yu(e3);
    }
    for (e3 = e3.child; e3 !== null; ) {
      switch (t3 = e3, t3.tag) {
        case 0:
        case 11:
        case 15:
          El(8, t3, t3.return), Qu(t3);
          break;
        case 22:
          n2 = t3.stateNode, n2._visibility & 2 && (n2._visibility &= -3, Qu(t3));
          break;
        default:
          Qu(t3);
      }
      e3 = e3.sibling;
    }
  }
  function $u(e3, t3) {
    for (; du !== null; ) {
      var n2 = du;
      switch (n2.tag) {
        case 0:
        case 11:
        case 15:
          El(8, n2, t3);
          break;
        case 23:
        case 22:
          if (n2.memoizedState !== null && n2.memoizedState.cachePool !== null) {
            var r3 = n2.memoizedState.cachePool.pool;
            r3 != null && r3.refCount++;
          }
          break;
        case 24:
          Va(n2.memoizedState.cache);
      }
      if (r3 = n2.child, r3 !== null) r3.return = n2, du = r3;
      else a: for (n2 = e3; du !== null; ) {
        r3 = du;
        var i2 = r3.sibling, a3 = r3.return;
        if (Su(r3), r3 === n2) {
          du = null;
          break a;
        }
        if (i2 !== null) {
          i2.return = a3, du = i2;
          break a;
        }
        du = a3;
      }
    }
  }
  var ed = { getCacheForType: function(e3) {
    var t3 = Pa(M), n2 = t3.data.get(e3);
    return n2 === void 0 && (n2 = e3(), t3.data.set(e3, n2)), n2;
  }, cacheSignal: function() {
    return Pa(M).controller.signal;
  } }, td = typeof WeakMap == `function` ? WeakMap : Map, W = 0, G = null, K = null, q = 0, J = 0, nd = null, rd = false, id = false, ad = false, od = 0, Y = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = 0, fd = null, pd = null, md = false, hd = 0, gd = 0, _d = 1 / 0, vd = null, yd = null, X = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
  function jd() {
    return W & 2 && q !== 0 ? q & -q : E2.T === null ? kt() : Pf();
  }
  function Md() {
    if (ud === 0) {
      if (!(q & 536870912) || j) {
        var e3 = pt;
        pt <<= 1, !(pt & 3932160) && (pt = 262144), ud = e3;
      } else ud = 536870912;
    }
    return e3 = zo.current, e3 !== null && (e3.flags |= 32), ud;
  }
  function Nd(e3, t3) {
    if (t3 != null) {
      var n2 = e3.stateNode, r3 = n2.ref;
      r3 === null && (r3 = n2.ref = Pp(Di(e3.memoizedProps, n2))), Dd === null && (Dd = []), Dd.push(t3.bind(null, r3));
    }
  }
  function Pd(e3, t3, n2) {
    (e3 === G && (J === 2 || J === 9) || e3.cancelPendingCommit !== null) && (Vd(e3, 0), Rd(e3, q, ud, false)), St(e3, n2), (!(W & 2) || e3 !== G) && (e3 === G && (!(W & 2) && (cd |= n2), Y === 4 && Rd(e3, q, ud, false)), Ef(e3));
  }
  function Fd(e3, t3, n2) {
    if (W & 6) throw Error(s2(327));
    var r3 = !n2 && !(t3 & 127) && (t3 & e3.expiredLanes) === 0 || _t(e3, t3), i2 = r3 ? Yd(e3, t3) : qd(e3, t3, true), a3 = r3;
    do {
      if (i2 === 0) {
        id && !r3 && Rd(e3, t3, 0, false);
        break;
      }
      if (n2 = e3.current.alternate, a3 && !Ld(n2)) {
        i2 = qd(e3, t3, false), a3 = false;
        continue;
      }
      if (i2 === 2) {
        if (a3 = t3, e3.errorRecoveryDisabledLanes & a3) var o2 = 0;
        else o2 = e3.pendingLanes & -536870913, o2 = o2 === 0 ? o2 & 536870912 ? 536870912 : 0 : o2;
        if (o2 !== 0) {
          t3 = o2;
          a: {
            var c3 = e3;
            i2 = fd;
            var l3 = c3.current.memoizedState.isDehydrated;
            if (l3 && (Vd(c3, o2).flags |= 256), o2 = qd(c3, o2, false), o2 !== 2 && o2 !== 6) {
              if (ad && !l3) {
                c3.errorRecoveryDisabledLanes |= a3, cd |= a3, i2 = 4;
                break a;
              }
              a3 = pd, pd = i2, a3 !== null && (pd === null ? pd = a3 : pd.push.apply(pd, a3));
            }
            i2 = o2;
          }
          if (a3 = false, i2 !== 2) continue;
        }
      }
      if (i2 === 1) {
        Vd(e3, 0), Rd(e3, t3, 0, true);
        break;
      }
      a: {
        switch (r3 = e3, a3 = i2, a3) {
          case 0:
          case 1:
            throw Error(s2(345));
          case 4:
            if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3) break;
          case 6:
            Rd(r3, t3, ud, !rd);
            break a;
          case 2:
            pd = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(s2(329));
        }
        if ((t3 & 62914560) === t3 && (i2 = hd + 300 - Xe(), 10 < i2)) {
          if (Rd(r3, t3, ud, !rd), gt(r3, 0, true) !== 0) break a;
          Sd = t3, r3.timeoutHandle = gp(Id.bind(null, r3, n2, pd, vd, md, t3, ud, cd, dd, rd, a3, `Throttled`, -0, 0), i2);
          break a;
        }
        Id(r3, n2, pd, vd, md, t3, ud, cd, dd, rd, a3, null, -0, 0);
      }
      break;
    } while (1);
    Ef(e3);
  }
  function Id(e3, t3, n2, r3, i2, a3, o2, s3, c3, l3, u3, d3, f3, p3) {
    e3.timeoutHandle = -1;
    var m3 = t3.subtreeFlags, h3 = (a3 & 335544064) === a3;
    if (d3 = null, (h3 || m3 & 8192 || (m3 & 16785408) == 16785408) && (d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: On }, Wl = null, Ju(t3, a3, d3), h3 && (m3 = d3, h3 = e3.containerInfo, h3 = (h3.nodeType === 9 ? h3 : h3.ownerDocument).__reactViewTransition, h3 != null && (m3.count++, m3.waitingForViewTransition = true, m3 = nh.bind(m3), h3.finished.then(m3, m3))), m3 = (a3 & 62914560) === a3 ? hd - Xe() : (a3 & 4194048) === a3 ? gd - Xe() : 0, m3 = eh(d3, m3), m3 !== null)) {
      Sd = a3, e3.cancelPendingCommit = m3(nf.bind(null, e3, t3, a3, n2, r3, i2, o2, s3, c3, l3, u3, d3, null, f3, p3)), Rd(e3, a3, o2, !l3);
      return;
    }
    nf(e3, t3, a3, n2, r3, i2, o2, s3, c3, l3, u3, d3);
  }
  function Ld(e3) {
    for (var t3 = e3; ; ) {
      var n2 = t3.tag;
      if ((n2 === 0 || n2 === 11 || n2 === 15) && t3.flags & 16384 && (n2 = t3.updateQueue, n2 !== null && (n2 = n2.stores, n2 !== null))) for (var r3 = 0; r3 < n2.length; r3++) {
        var i2 = n2[r3], a3 = i2.getSnapshot;
        i2 = i2.value;
        try {
          if (!Zr(a3(), i2)) return false;
        } catch {
          return false;
        }
      }
      if (n2 = t3.child, t3.subtreeFlags & 16384 && n2 !== null) n2.return = t3, t3 = n2;
      else {
        if (t3 === e3) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e3) return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function Rd(e3, t3, n2, r3) {
    t3 = vt(e3, t3), t3 &= ~ld, t3 &= ~cd, e3.suspendedLanes |= t3, e3.pingedLanes &= ~t3, r3 && (e3.warmLanes |= t3), r3 = e3.expirationTimes;
    for (var i2 = t3; 0 < i2; ) {
      var a3 = 31 - ct(i2), o2 = 1 << a3;
      r3[a3] = -1, i2 &= ~o2;
    }
    n2 !== 0 && wt(e3, n2, t3);
  }
  function zd() {
    return W & 6 ? true : (Df(0, false), false);
  }
  function Bd() {
    if (K !== null) {
      if (J === 0) var e3 = K.return;
      else e3 = K, Ea = Ta = null, ds(e3), mo = null, ho = 0, e3 = K;
      for (; e3 !== null; ) wl(e3.alternate, e3), e3 = e3.return;
      K = null;
    }
  }
  function Vd(e3, t3) {
    var n2 = e3.timeoutHandle;
    return n2 !== -1 && (e3.timeoutHandle = -1, _p(n2)), n2 = e3.cancelPendingCommit, n2 !== null && (e3.cancelPendingCommit = null, n2()), Sd = 0, Bd(), G = e3, K = n2 = Wi(e3.current, null), q = t3, J = 0, nd = null, rd = false, id = _t(e3, t3), ad = false, dd = ud = ld = cd = sd = Y = 0, pd = fd = null, md = false, od = vt(e3, t3), Pi(), n2;
  }
  function Hd(e3, t3) {
    N = null, E2.H = bc, t3 === ro || t3 === ao ? (t3 = fo(), J = 3) : t3 === io ? (t3 = fo(), J = 4) : J = t3 === Rc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, nd = t3, K === null && (Y = 1, Mc(e3, Qi(t3, e3.current)));
  }
  function Ud() {
    var e3 = zo.current;
    return e3 === null ? true : (q & 4194048) === q ? Bo === null : (q & 62914560) === q || q & 536870912 ? e3 === Bo : false;
  }
  function Wd() {
    var e3 = E2.H;
    return E2.H = bc, e3 === null ? bc : e3;
  }
  function Gd() {
    var e3 = E2.A;
    return E2.A = ed, e3;
  }
  function Kd() {
    Y = 4, rd || (q & 4194048) !== q && zo.current !== null || (id = true), !(sd & 134217727) && !(cd & 134217727) || G === null || Rd(G, q, ud, false);
  }
  function qd(e3, t3, n2) {
    var r3 = W;
    W |= 2;
    var i2 = Wd(), a3 = Gd();
    (G !== e3 || q !== t3) && (vd = null, Vd(e3, t3)), t3 = false;
    var o2 = Y;
    a: do
      try {
        if (J !== 0 && K !== null) {
          var s3 = K, c3 = nd;
          switch (J) {
            case 8:
              Bd(), o2 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              zo.current === null && (t3 = true);
              var l3 = J;
              if (J = 0, nd = null, $d(e3, s3, c3, l3), n2 && id) {
                o2 = 0;
                break a;
              }
              break;
            default:
              l3 = J, J = 0, nd = null, $d(e3, s3, c3, l3);
          }
        }
        Jd(), o2 = Y;
        break;
      } catch (t4) {
        Hd(e3, t4);
      }
    while (1);
    return t3 && e3.shellSuspendCounter++, Ea = Ta = null, W = r3, E2.H = i2, E2.A = a3, K === null && (G = null, q = 0, Pi()), o2;
  }
  function Jd() {
    for (; K !== null; ) Zd(K);
  }
  function Yd(e3, t3) {
    var n2 = W;
    W |= 2;
    var r3 = Wd(), i2 = Gd();
    G !== e3 || q !== t3 ? (vd = null, _d = Xe() + 500, Vd(e3, t3)) : id = _t(e3, t3);
    a: do
      try {
        if (J !== 0 && K !== null) {
          t3 = K;
          var a3 = nd;
          b: switch (J) {
            case 1:
              J = 0, nd = null, $d(e3, t3, a3, 1);
              break;
            case 2:
            case 9:
              if (so(a3)) {
                J = 0, nd = null, Qd(t3);
                break;
              }
              t3 = function() {
                J !== 2 && J !== 9 || G !== e3 || (J = 7), Ef(e3);
              }, a3.then(t3, t3);
              break a;
            case 3:
              J = 7;
              break a;
            case 4:
              J = 5;
              break a;
            case 7:
              so(a3) ? (J = 0, nd = null, Qd(t3)) : (J = 0, nd = null, $d(e3, t3, a3, 7));
              break;
            case 5:
              var o2 = null;
              switch (K.tag) {
                case 26:
                  o2 = K.memoizedState;
                case 5:
                case 27:
                  var c3 = K;
                  if (o2 ? Ym(o2) : c3.stateNode.complete) {
                    J = 0, nd = null;
                    var l3 = c3.sibling;
                    if (l3 !== null) K = l3;
                    else {
                      var u3 = c3.return;
                      u3 === null ? K = null : (K = u3, ef(u3));
                    }
                    break b;
                  }
              }
              J = 0, nd = null, $d(e3, t3, a3, 5);
              break;
            case 6:
              J = 0, nd = null, $d(e3, t3, a3, 6);
              break;
            case 8:
              Bd(), Y = 6;
              break a;
            default:
              throw Error(s2(462));
          }
        }
        Xd();
        break;
      } catch (t4) {
        Hd(e3, t4);
      }
    while (1);
    return Ea = Ta = null, E2.H = r3, E2.A = i2, W = n2, K === null ? (G = null, q = 0, Pi(), Y) : 0;
  }
  function Xd() {
    for (; K !== null && !Je(); ) Zd(K);
  }
  function Zd(e3) {
    var t3 = gl(e3.alternate, e3, od);
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef(e3) : K = t3;
  }
  function Qd(e3) {
    var t3 = e3, n2 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = Xc(n2, t3, t3.pendingProps, t3.type, void 0, q);
        break;
      case 11:
        t3 = Xc(n2, t3, t3.pendingProps, t3.type.render, t3.ref, q);
        break;
      case 5:
        ds(t3);
        var r3 = t3;
        r3 === pa && (j ? (ya(r3), r3.tag === 5 && r3.stateNode != null && (A = r3.stateNode)) : (ya(r3), j = true));
      default:
        wl(n2, t3), t3 = K = Gi(t3, od), t3 = gl(n2, t3, od);
    }
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef(e3) : K = t3;
  }
  function $d(e3, t3, n2, r3) {
    Ea = Ta = null, ds(t3), mo = null, ho = 0;
    var i2 = t3.return;
    try {
      if (Lc(e3, i2, t3, n2, q)) {
        Y = 1, Mc(e3, Qi(n2, e3.current)), K = null;
        return;
      }
    } catch (t4) {
      if (i2 !== null) throw K = i2, t4;
      Y = 1, Mc(e3, Qi(n2, e3.current)), K = null;
      return;
    }
    t3.flags & 32768 ? (j || r3 === 1 ? e3 = true : id || q & 536870912 ? e3 = false : (rd = e3 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = zo.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), tf(t3, e3)) : ef(t3);
  }
  function ef(e3) {
    var t3 = e3;
    do {
      if (t3.flags & 32768) {
        tf(t3, rd);
        return;
      }
      e3 = t3.return;
      var n2 = Sl(t3.alternate, t3, od);
      if (n2 !== null) {
        K = n2;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        K = t3;
        return;
      }
      K = t3 = e3;
    } while (t3 !== null);
    Y === 0 && (Y = 5);
  }
  function tf(e3, t3) {
    do {
      var n2 = Cl(e3.alternate, e3);
      if (n2 !== null) {
        n2.flags &= 32767, K = n2;
        return;
      }
      if (n2 = e3.return, n2 !== null && (n2.flags |= 32768, n2.subtreeFlags = 0, n2.deletions = null), !t3 && (e3 = e3.sibling, e3 !== null)) {
        K = e3;
        return;
      }
      K = e3 = n2;
    } while (e3 !== null);
    Y = 6, K = null;
  }
  function nf(e3, t3, n2, r3, i2, a3, o2, c3, l3, u3, d3, f3) {
    e3.cancelPendingCommit = null;
    do
      df();
    while (X !== 0);
    if (W & 6) throw Error(s2(327));
    if (t3 !== null) {
      if (t3 === e3.current) throw Error(s2(177));
      e3 === G && (K = G = null, q = 0), xd = t3, bd = e3, Sd = n2, wd = i2, Td = r3, rf(e3, t3, n2, o2, c3, l3, f3);
    }
  }
  function rf(e3, t3, n2, r3, i2, a3, o2) {
    var s3 = t3.lanes | t3.childLanes;
    if (Cd = s3, s3 |= Ni, Ct(e3, n2, s3, r3, i2, a3), Dd = null, (n2 & 335544064) === n2 ? (Od = Wa(e3), r3 = 10262) : (Od = null, r3 = 10256), (t3.subtreeFlags & r3) !== 0 || (t3.flags & r3) !== 0 ? (e3.callbackNode = null, e3.callbackPriority = 0, yf(et, function() {
      return ff(), null;
    })) : (e3.callbackNode = null, e3.callbackPriority = 0), Ul = false, r3 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r3) {
      r3 = E2.T, E2.T = null, i2 = D2.p, D2.p = 2, a3 = W, W |= 4;
      try {
        gu(e3, t3, n2);
      } finally {
        W = a3, D2.p = i2, E2.T = r3;
      }
    }
    X = 1, Ul ? Ed = Mp(o2, e3.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
  }
  function af(e3) {
    if (X !== 0) {
      var t3 = bd.onRecoverableError;
      t3(e3, { componentStack: null });
    }
  }
  function of() {
    X === 3 && (X = 0, Iu(xd, bd), X = 4);
  }
  function sf() {
    if (X === 1) {
      X = 0;
      var e3 = bd, t3 = xd, n2 = Sd, r3 = !!(t3.flags & 13878);
      if (t3.subtreeFlags & 13878 || r3) {
        r3 = E2.T, E2.T = null;
        var i2 = D2.p;
        D2.p = 2;
        var a3 = W;
        W |= 4;
        try {
          pu = mu = false, Mu(t3, e3, n2), n2 = cp;
          var o2 = ri(e3.containerInfo), s3 = n2.focusedElem, c3 = n2.selectionRange;
          if (o2 !== s3 && s3 && s3.ownerDocument && ni(s3.ownerDocument.documentElement, s3)) {
            if (c3 !== null && ii(s3)) {
              var l3 = c3.start, u3 = c3.end;
              if (u3 === void 0 && (u3 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u3, s3.value.length);
              else {
                var d3 = s3.ownerDocument || document, f3 = d3 && d3.defaultView || window;
                if (f3.getSelection) {
                  var p3 = f3.getSelection(), m3 = s3.textContent.length, h3 = Math.min(c3.start, m3), g3 = c3.end === void 0 ? h3 : Math.min(c3.end, m3);
                  !p3.extend && h3 > g3 && (o2 = g3, g3 = h3, h3 = o2);
                  var _3 = ti(s3, h3), v3 = ti(s3, g3);
                  if (_3 && v3 && (p3.rangeCount !== 1 || p3.anchorNode !== _3.node || p3.anchorOffset !== _3.offset || p3.focusNode !== v3.node || p3.focusOffset !== v3.offset)) {
                    var y3 = d3.createRange();
                    y3.setStart(_3.node, _3.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y3), p3.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p3.addRange(y3));
                  }
                }
              }
            }
            for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
            for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
              var b3 = d3[s3];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          gh = !!sp, cp = sp = null;
        } finally {
          W = a3, D2.p = i2, E2.T = r3;
        }
      }
      e3.current = t3, X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      var e3 = bd, t3 = xd, n2 = !!(t3.flags & 8772);
      if (t3.subtreeFlags & 8772 || n2) {
        n2 = E2.T, E2.T = null;
        var r3 = D2.p;
        D2.p = 2;
        var i2 = W;
        W |= 4;
        try {
          vu(e3, t3.alternate, t3);
        } finally {
          W = i2, D2.p = r3, E2.T = n2;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      var e3 = Ed;
      Ed = null, Ye();
      var t3 = bd, n2 = xd, r3 = Sd, i2 = Td, a3 = (r3 & 335544064) === r3 ? 10262 : 10256;
      if ((n2.subtreeFlags & a3) !== 0 || (n2.flags & a3) !== 0 ? X = 5 : (X = 0, xd = bd = null, uf(t3, t3.pendingLanes)), a3 = t3.pendingLanes, a3 === 0 && (yd = null), Ot(r3), n2 = n2.stateNode, ot && typeof ot.onCommitFiberRoot == `function`) try {
        ot.onCommitFiberRoot(at, n2, void 0, (n2.current.flags & 128) == 128);
      } catch {
      }
      if (i2 !== null) {
        n2 = E2.T, a3 = D2.p, D2.p = 2, E2.T = null;
        try {
          for (var o2 = t3.onRecoverableError, s3 = 0; s3 < i2.length; s3++) {
            var c3 = i2[s3];
            o2(c3.value, { componentStack: c3.stack });
          }
        } finally {
          E2.T = n2, D2.p = a3;
        }
      }
      if (i2 = Dd, o2 = Od, Od = null, i2 !== null && (Dd = null, o2 === null && (o2 = []), e3 !== null)) for (c3 = 0; c3 < i2.length; c3++) n2 = (0, i2[c3])(o2), n2 !== void 0 && e3.finished.finally(n2);
      Sd & 3 && df(), Ef(t3), a3 = t3.pendingLanes, r3 & 261930 && a3 & 42 ? t3 === Ad ? kd++ : (kd = 0, Ad = t3) : (kd = 0, Ad = null), Df(0, false);
    }
  }
  function uf(e3, t3) {
    (e3.pooledCacheLanes &= t3) === 0 && (t3 = e3.pooledCache, t3 != null && (e3.pooledCache = null, Va(t3)));
  }
  function df() {
    return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
  }
  function ff() {
    if (X !== 5) return false;
    var e3 = bd, t3 = Cd;
    Cd = 0;
    var n2 = Ot(Sd), r3 = E2.T, i2 = D2.p;
    try {
      D2.p = 32 > n2 ? 32 : n2, E2.T = null, n2 = wd, wd = null;
      var a3 = bd, o2 = Sd;
      if (X = 0, xd = bd = null, Sd = 0, W & 6) throw Error(s2(331));
      var c3 = W;
      if (W |= 4, Zu(a3.current), Uu(a3, a3.current, o2, n2), W = c3, Df(0, false), ot && typeof ot.onPostCommitFiberRoot == `function`) try {
        ot.onPostCommitFiberRoot(at, a3);
      } catch {
      }
      return true;
    } finally {
      D2.p = i2, E2.T = r3, uf(e3, t3);
    }
  }
  function pf(e3, t3, n2) {
    t3 = Qi(n2, t3), t3 = Pc(e3.stateNode, t3, 2), e3 = Eo(e3, t3, 2), e3 !== null && (St(e3, 2), Ef(e3));
  }
  function Z(e3, t3, n2) {
    if (e3.tag === 3) pf(e3, e3, n2);
    else for (; t3 !== null; ) {
      if (t3.tag === 3) {
        pf(t3, e3, n2);
        break;
      }
      if (t3.tag === 1) {
        var r3 = t3.stateNode;
        if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (yd === null || !yd.has(r3))) {
          e3 = Qi(n2, e3), n2 = Fc(2), r3 = Eo(t3, n2, 2), r3 !== null && (Ic(n2, r3, t3, e3), St(r3, 2), Ef(r3));
          break;
        }
      }
      t3 = t3.return;
    }
  }
  function mf(e3, t3, n2) {
    var r3 = e3.pingCache;
    if (r3 === null) {
      r3 = e3.pingCache = new td();
      var i2 = /* @__PURE__ */ new Set();
      r3.set(t3, i2);
    } else i2 = r3.get(t3), i2 === void 0 && (i2 = /* @__PURE__ */ new Set(), r3.set(t3, i2));
    i2.has(n2) || (ad = true, i2.add(n2), e3 = hf.bind(null, e3, t3, n2), t3.then(e3, e3));
  }
  function hf(e3, t3, n2) {
    var r3 = e3.pingCache;
    r3 !== null && r3.delete(t3), e3.pingedLanes |= e3.suspendedLanes & n2, e3.warmLanes &= ~n2, G === e3 && (q & n2) === n2 && (Y === 4 || Y === 3 && (q & 62914560) === q && 300 > Xe() - hd ? W & 2 ? ld |= n2 : Vd(e3, 0) : ld |= n2, dd === q && (dd = 0)), Ef(e3);
  }
  function gf(e3, t3) {
    t3 === 0 && (t3 = bt()), e3 = Li(e3, t3), e3 !== null && (St(e3, t3), Ef(e3));
  }
  function _f(e3) {
    var t3 = e3.memoizedState, n2 = 0;
    t3 !== null && (n2 = t3.retryLane), gf(e3, n2);
  }
  function vf(e3, t3) {
    var n2 = 0;
    switch (e3.tag) {
      case 31:
      case 13:
        var r3 = e3.stateNode, i2 = e3.memoizedState;
        i2 !== null && (n2 = i2.retryLane);
        break;
      case 19:
        r3 = e3.stateNode;
        break;
      case 22:
        r3 = e3.stateNode._retryCache;
        break;
      default:
        throw Error(s2(314));
    }
    r3 !== null && r3.delete(t3), gf(e3, n2);
  }
  function yf(e3, t3) {
    return Ke(e3, t3);
  }
  var bf = null, xf = null, Sf = false, Cf = false, wf = false, Tf = 0;
  function Ef(e3) {
    e3 !== xf && e3.next === null && (xf === null ? bf = xf = e3 : xf = xf.next = e3), Cf = true, Sf || (Sf = true, Nf());
  }
  function Df(e3, t3) {
    if (!wf && Cf) {
      wf = true;
      do
        for (var n2 = false, r3 = bf; r3 !== null; ) {
          if (!t3) {
            if (e3 !== 0) {
              var i2 = r3.pendingLanes;
              if (i2 === 0) var a3 = 0;
              else {
                var o2 = r3.suspendedLanes, s3 = r3.pingedLanes;
                a3 = (1 << 31 - ct(42 | e3) + 1) - 1, a3 &= i2 & ~(o2 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
              }
              a3 !== 0 && (n2 = true, Mf(r3, a3));
            } else a3 = q, a3 = gt(r3, r3 === G ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || _t(r3, a3) || (n2 = true, Mf(r3, a3));
          }
          r3 = r3.next;
        }
      while (n2);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Cf = Sf = false;
    var e3 = 0;
    Tf !== 0 && hp() && (e3 = Tf);
    for (var t3 = Xe(), n2 = null, r3 = bf; r3 !== null; ) {
      var i2 = r3.next, a3 = Af(r3, t3);
      a3 === 0 ? (r3.next = null, n2 === null ? bf = i2 : n2.next = i2, i2 === null && (xf = n2)) : (n2 = r3, (e3 !== 0 || a3 & 3) && (Cf = true)), r3 = i2;
    }
    X !== 0 && X !== 5 || Df(e3, false), Tf !== 0 && (Tf = 0);
  }
  function Af(e3, t3) {
    for (var n2 = e3.suspendedLanes, r3 = e3.pingedLanes, i2 = e3.expirationTimes, a3 = e3.pendingLanes & -62914561; 0 < a3; ) {
      var o2 = 31 - ct(a3), s3 = 1 << o2, c3 = i2[o2];
      c3 === -1 ? ((s3 & n2) === 0 || (s3 & r3) !== 0) && (i2[o2] = yt(s3, t3)) : c3 <= t3 && (e3.expiredLanes |= s3), a3 &= ~s3;
    }
    if (t3 = G, n2 = q, n2 = gt(e3, e3 === t3 ? n2 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 = e3.callbackNode, n2 === 0 || e3 === t3 && (J === 2 || J === 9) || e3.cancelPendingCommit !== null) return r3 !== null && r3 !== null && qe(r3), e3.callbackNode = null, e3.callbackPriority = 0;
    if (!(n2 & 3) || _t(e3, n2)) {
      if (t3 = n2 & -n2, t3 === e3.callbackPriority) return t3;
      switch (r3 !== null && qe(r3), Ot(n2)) {
        case 2:
        case 8:
          n2 = $e;
          break;
        case 32:
          n2 = et;
          break;
        case 268435456:
          n2 = nt;
          break;
        default:
          n2 = et;
      }
      return r3 = jf.bind(null, e3), n2 = Ke(n2, r3), e3.callbackPriority = t3, e3.callbackNode = n2, t3;
    }
    return r3 !== null && r3 !== null && qe(r3), e3.callbackPriority = 2, e3.callbackNode = null, 2;
  }
  function jf(e3, t3) {
    if (X !== 0 && X !== 5) return e3.callbackNode = null, e3.callbackPriority = 0, null;
    var n2 = e3.callbackNode;
    if (df() && e3.callbackNode !== n2) return null;
    var r3 = q;
    return r3 = gt(e3, e3 === G ? r3 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 === 0 ? null : (Fd(e3, r3, t3), Af(e3, Xe()), e3.callbackNode != null && e3.callbackNode === n2 ? jf.bind(null, e3) : null);
  }
  function Mf(e3, t3) {
    if (df()) return null;
    Fd(e3, t3, true);
  }
  function Nf() {
    bp(function() {
      W & 6 ? Ke(Qe, Of) : kf();
    });
  }
  function Pf() {
    if (Tf === 0) {
      var e3 = qa;
      e3 === 0 && (e3 = ft, ft <<= 1, !(ft & 261888) && (ft = 256)), Tf = e3;
    }
    return Tf;
  }
  function Ff(e3) {
    return e3 == null || typeof e3 == `symbol` || typeof e3 == `boolean` ? null : typeof e3 == `function` ? e3 : Dn(e3);
  }
  function If(e3, t3, n2, r3, i2) {
    if (t3 === `submit` && n2 && n2.stateNode === i2) {
      var a3 = Ff((i2[Nt] || null).action), o2 = r3.submitter;
      o2 && (t3 = (t3 = o2[Nt] || null) ? Ff(t3.formAction) : o2.getAttribute(`formAction`), t3 !== null && (a3 = t3, o2 = null));
      var s3 = new Yn(`action`, `action`, null, r3, i2);
      e3.push({ event: s3, listeners: [{ instance: null, listener: function() {
        if (r3.defaultPrevented) {
          if (Tf !== 0) {
            var e4 = new FormData(i2, o2);
            oc(n2, { pending: true, data: e4, method: i2.method, action: a3 }, null, e4);
          }
        } else typeof a3 == `function` && (s3.preventDefault(), e4 = new FormData(i2, o2), oc(n2, { pending: true, data: e4, method: i2.method, action: a3 }, a3, e4));
      }, currentTarget: i2 }] });
    }
  }
  for (var Lf = 0; Lf < wi.length; Lf++) {
    var Rf = wi[Lf];
    Ti(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
  }
  Ti(gi, `onAnimationEnd`), Ti(_i, `onAnimationIteration`), Ti(vi, `onAnimationStart`), Ti(`dblclick`, `onDoubleClick`), Ti(`focusin`, `onFocus`), Ti(`focusout`, `onBlur`), Ti(yi, `onTransitionRun`), Ti(bi, `onTransitionStart`), Ti(xi, `onTransitionCancel`), Ti(Si, `onTransitionEnd`), Zt(`onMouseEnter`, [`mouseout`, `mouseover`]), Zt(`onMouseLeave`, [`mouseout`, `mouseover`]), Zt(`onPointerEnter`, [`pointerout`, `pointerover`]), Zt(`onPointerLeave`, [`pointerout`, `pointerover`]), Xt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Xt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Xt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Xt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Xt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Xt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e3, t3) {
    t3 = !!(t3 & 4);
    for (var n2 = 0; n2 < e3.length; n2++) {
      var r3 = e3[n2], i2 = r3.event;
      r3 = r3.listeners;
      a: {
        var a3 = void 0;
        if (t3) for (var o2 = r3.length - 1; 0 <= o2; o2--) {
          var s3 = r3[o2], c3 = s3.instance, l3 = s3.currentTarget;
          if (s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped()) break a;
          a3 = s3, i2.currentTarget = l3;
          try {
            a3(i2);
          } catch (e4) {
            Ai(e4);
          }
          i2.currentTarget = null, a3 = c3;
        }
        else for (o2 = 0; o2 < r3.length; o2++) {
          if (s3 = r3[o2], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped()) break a;
          a3 = s3, i2.currentTarget = l3;
          try {
            a3(i2);
          } catch (e4) {
            Ai(e4);
          }
          i2.currentTarget = null, a3 = c3;
        }
      }
    }
  }
  function Q(e3, t3) {
    var n2 = t3[Ft];
    n2 === void 0 && (n2 = t3[Ft] = /* @__PURE__ */ new Set());
    var r3 = e3 + `__bubble`;
    n2.has(r3) || (Gf(t3, e3, 2, false), n2.add(r3));
  }
  function Hf(e3, t3, n2) {
    var r3 = 0;
    t3 && (r3 |= 4), Gf(n2, e3, r3, t3);
  }
  var Uf = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf(e3) {
    if (!e3[Uf]) {
      e3[Uf] = true, Jt.forEach(function(t4) {
        t4 !== `selectionchange` && (Bf.has(t4) || Hf(t4, false, e3), Hf(t4, true, e3));
      });
      var t3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
      t3 === null || t3[Uf] || (t3[Uf] = true, Hf(`selectionchange`, false, t3));
    }
  }
  function Gf(e3, t3, n2, r3) {
    switch (Ch(t3)) {
      case 2:
        var i2 = _h;
        break;
      case 8:
        i2 = vh;
        break;
      default:
        i2 = yh;
    }
    n2 = i2.bind(null, t3, n2, e3), i2 = void 0, !Rn || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i2 = true), r3 ? i2 === void 0 ? e3.addEventListener(t3, n2, true) : e3.addEventListener(t3, n2, { capture: true, passive: i2 }) : i2 === void 0 ? e3.addEventListener(t3, n2, false) : e3.addEventListener(t3, n2, { passive: i2 });
  }
  function Kf(e3, t3, n2, r3, i2) {
    var a3 = r3;
    if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
      if (r3 === null) return;
      var o2 = r3.tag;
      if (o2 === 3 || o2 === 4) {
        var s3 = r3.stateNode.containerInfo;
        if (s3 === i2) break;
        if (o2 === 4) for (o2 = r3.return; o2 !== null; ) {
          var c3 = o2.tag;
          if ((c3 === 3 || c3 === 4) && o2.stateNode.containerInfo === i2) return;
          o2 = o2.return;
        }
        for (; s3 !== null; ) {
          if (o2 = Ht(s3), o2 === null) return;
          if (c3 = o2.tag, c3 === 5 || c3 === 6 || c3 === 26 || c3 === 27) {
            r3 = a3 = o2;
            continue a;
          }
          s3 = s3.parentNode;
        }
      }
      r3 = r3.return;
    }
    Fn(function() {
      var r4 = a3, i3 = An(n2), o3 = [];
      a: {
        var s4 = Ci.get(e3);
        if (s4 !== void 0) {
          var c4 = Yn, u3 = e3;
          switch (e3) {
            case `keypress`:
              if (Wn(n2) === 0) break a;
            case `keydown`:
            case `keyup`:
              c4 = pr;
              break;
            case `focusin`:
              u3 = `focus`, c4 = ir;
              break;
            case `focusout`:
              u3 = `blur`, c4 = ir;
              break;
            case `beforeblur`:
            case `afterblur`:
              c4 = ir;
              break;
            case `click`:
              if (n2.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c4 = nr;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c4 = rr;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c4 = gr;
              break;
            case gi:
            case _i:
            case vi:
              c4 = ar;
              break;
            case Si:
              c4 = _r;
              break;
            case `scroll`:
            case `scrollend`:
              c4 = Zn;
              break;
            case `wheel`:
              c4 = vr;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c4 = or;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c4 = mr;
              break;
            case `submit`:
              c4 = hr;
              break;
            case `toggle`:
            case `beforetoggle`:
              c4 = yr;
          }
          var d3 = !!(t3 & 4), f3 = !d3 && (e3 === `scroll` || e3 === `scrollend`), p3 = d3 ? s4 === null ? null : s4 + `Capture` : s4;
          d3 = [];
          for (var m3 = r4, h3; m3 !== null; ) {
            var g3 = m3;
            if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = In(m3, p3), g3 != null && d3.push(qf(m3, g3, h3))), f3) break;
            m3 = m3.return;
          }
          0 < d3.length && (s4 = new c4(s4, u3, null, n2, i3), o3.push({ event: s4, listeners: d3 }));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (c4 = e3 === `mouseover` || e3 === `pointerover`, s4 = e3 === `mouseout` || e3 === `pointerout`, c4 && n2 !== kn && (u3 = n2.relatedTarget || n2.fromElement) && (Ht(u3) || u3[Pt])) break a;
          (s4 || c4) && (u3 = i3.window === i3 ? i3 : (c4 = i3.ownerDocument) ? c4.defaultView || c4.parentWindow : window, s4 ? (c4 = n2.relatedTarget || n2.toElement, s4 = r4, c4 = c4 ? Ht(c4) : null, c4 !== null && (f3 = l2(c4), d3 = c4.tag, c4 !== f3 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (c4 = null)) : (s4 = null, c4 = r4), s4 !== c4 && (d3 = nr, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m3 = `mouse`, (e3 === `pointerout` || e3 === `pointerover`) && (d3 = mr, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m3 = `pointer`), f3 = s4 == null ? u3 : Wt(s4), h3 = c4 == null ? u3 : Wt(c4), u3 = new d3(g3, m3 + `leave`, s4, n2, i3), u3.target = f3, u3.relatedTarget = h3, g3 = null, Ht(i3) === r4 && (d3 = new d3(p3, m3 + `enter`, c4, n2, i3), d3.target = h3, d3.relatedTarget = f3, g3 = d3), f3 = g3, d3 = s4 && c4 ? re2(s4, c4, Yf) : null, s4 !== null && Xf(o3, u3, s4, d3, false), c4 !== null && f3 !== null && Xf(o3, f3, c4, d3, true)));
        }
        a: {
          if (s4 = r4 ? Wt(r4) : window, c4 = s4.nodeName && s4.nodeName.toLowerCase(), c4 === `select` || c4 === `input` && s4.type === `file`) var _3 = zr;
          else if (Nr(s4)) {
            if (Br) _3 = Yr;
            else {
              _3 = qr;
              var v3 = Kr;
            }
          } else c4 = s4.nodeName, !c4 || c4.toLowerCase() !== `input` || s4.type !== `checkbox` && s4.type !== `radio` ? r4 && wn(r4.elementType) && (_3 = zr) : _3 = Jr;
          if (_3 && (_3 = _3(e3, r4))) {
            Pr(o3, _3, n2, i3);
            break a;
          }
          v3 && v3(e3, s4, r4);
        }
        switch (v3 = r4 ? Wt(r4) : window, e3) {
          case `focusin`:
            (Nr(v3) || v3.contentEditable === `true`) && (oi = v3, si = r4, ci = null);
            break;
          case `focusout`:
            ci = si = oi = null;
            break;
          case `mousedown`:
            li = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            li = false, ui(o3, n2, i3);
            break;
          case `selectionchange`:
            if (ai) break;
          case `keydown`:
          case `keyup`:
            ui(o3, n2, i3);
        }
        var y3;
        if (xr) b: {
          switch (e3) {
            case `compositionstart`:
              var b3 = `onCompositionStart`;
              break b;
            case `compositionend`:
              b3 = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              b3 = `onCompositionUpdate`;
              break b;
          }
          b3 = void 0;
        }
        else kr ? Dr(e3, n2) && (b3 = `onCompositionEnd`) : e3 === `keydown` && n2.keyCode === 229 && (b3 = `onCompositionStart`);
        b3 && (wr && n2.locale !== `ko` && (kr || b3 !== `onCompositionStart` ? b3 === `onCompositionEnd` && kr && (y3 = Un()) : (Bn = i3, Vn = `value` in Bn ? Bn.value : Bn.textContent, kr = true)), v3 = Jf(r4, b3), 0 < v3.length && (b3 = new sr(b3, e3, null, n2, i3), o3.push({ event: b3, listeners: v3 }), y3 ? b3.data = y3 : (y3 = Or(n2), y3 !== null && (b3.data = y3)))), (y3 = Cr ? Ar(e3, n2) : jr(e3, n2)) && (b3 = Jf(r4, `onBeforeInput`), 0 < b3.length && (v3 = new sr(`onBeforeInput`, `beforeinput`, null, n2, i3), o3.push({ event: v3, listeners: b3 }), v3.data = y3)), If(o3, e3, r4, n2, i3);
      }
      Vf(o3, t3);
    });
  }
  function qf(e3, t3, n2) {
    return { instance: e3, listener: t3, currentTarget: n2 };
  }
  function Jf(e3, t3) {
    for (var n2 = t3 + `Capture`, r3 = []; e3 !== null; ) {
      var i2 = e3, a3 = i2.stateNode;
      if (i2 = i2.tag, i2 !== 5 && i2 !== 26 && i2 !== 27 || a3 === null || (i2 = In(e3, n2), i2 != null && r3.unshift(qf(e3, i2, a3)), i2 = In(e3, t3), i2 != null && r3.push(qf(e3, i2, a3))), e3.tag === 3) return r3;
      e3 = e3.return;
    }
    return [];
  }
  function Yf(e3) {
    if (e3 === null) return null;
    do
      e3 = e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27);
    return e3 || null;
  }
  function Xf(e3, t3, n2, r3, i2) {
    for (var a3 = t3._reactName, o2 = []; n2 !== null && n2 !== r3; ) {
      var s3 = n2, c3 = s3.alternate, l3 = s3.stateNode;
      if (s3 = s3.tag, c3 !== null && c3 === r3) break;
      s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i2 ? (l3 = In(n2, a3), l3 != null && o2.unshift(qf(n2, l3, c3))) : i2 || (l3 = In(n2, a3), l3 != null && o2.push(qf(n2, l3, c3)))), n2 = n2.return;
    }
    o2.length !== 0 && e3.push({ event: t3, listeners: o2 });
  }
  var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
  function $f(e3) {
    return (typeof e3 == `string` ? e3 : `` + e3).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e3, t3) {
    return t3 = $f(t3), $f(e3) === t3;
  }
  function $(e3, t3, n2, r3, i2, a3) {
    switch (n2) {
      case `children`:
        if (typeof r3 == `string`) t3 === `body` || t3 === `textarea` && r3 === `` || bn(e3, r3);
        else if (typeof r3 == `number` || typeof r3 == `bigint`) t3 !== `body` && bn(e3, `` + r3);
        else return;
        break;
      case `className`:
        an(e3, `class`, r3);
        break;
      case `tabIndex`:
        an(e3, `tabindex`, r3);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        an(e3, n2, r3);
        break;
      case `style`:
        Cn(e3, r3, a3);
        return;
      case `data`:
        if (t3 !== `object`) {
          an(e3, `data`, r3);
          break;
        }
      case `src`:
      case `href`:
        if (r3 === `` && (t3 !== `a` || n2 !== `href`)) {
          e3.removeAttribute(n2);
          break;
        }
        if (r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e3.removeAttribute(n2);
          break;
        }
        r3 = Dn(r3), e3.setAttribute(n2, r3);
        break;
      case `action`:
      case `formAction`:
        if (typeof r3 == `function`) {
          e3.setAttribute(n2, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof a3 == `function` && (n2 === `formAction` ? (t3 !== `input` && $(e3, t3, `name`, i2.name, i2, null), $(e3, t3, `formEncType`, i2.formEncType, i2, null), $(e3, t3, `formMethod`, i2.formMethod, i2, null), $(e3, t3, `formTarget`, i2.formTarget, i2, null)) : ($(e3, t3, `encType`, i2.encType, i2, null), $(e3, t3, `method`, i2.method, i2, null), $(e3, t3, `target`, i2.target, i2, null))), r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e3.removeAttribute(n2);
          break;
        }
        r3 = Dn(r3), e3.setAttribute(n2, r3);
        break;
      case `onClick`:
        r3 != null && (e3.onclick = On);
        return;
      case `onScroll`:
        r3 != null && Q(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r3 != null && Q(`scrollend`, e3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(s2(61));
          if (n2 = r3.__html, n2 != null) {
            if (i2.children != null) throw Error(s2(60));
            (a3 == null ? void 0 : a3.__html) !== n2 && (e3.innerHTML = n2);
          }
        }
        break;
      case `multiple`:
        e3.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `muted`:
        e3.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
          e3.removeAttribute(`xlink:href`);
          break;
        }
        n2 = Dn(r3), e3.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n2);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n2, r3) : e3.removeAttribute(n2);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `credentialless`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n2, ``) : e3.removeAttribute(n2);
        break;
      case `capture`:
      case `download`:
        true === r3 ? e3.setAttribute(n2, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n2, r3) : e3.removeAttribute(n2);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e3.setAttribute(n2, r3) : e3.removeAttribute(n2);
        break;
      case `rowSpan`:
      case `start`:
        r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e3.removeAttribute(n2) : e3.setAttribute(n2, r3);
        break;
      case `popover`:
        Q(`beforetoggle`, e3), Q(`toggle`, e3), rn(e3, `popover`, r3);
        break;
      case `xlinkActuate`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
        break;
      case `xlinkArcrole`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
        break;
      case `xlinkRole`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
        break;
      case `xlinkShow`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
        break;
      case `xlinkTitle`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
        break;
      case `xlinkType`:
        on(e3, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
        break;
      case `xmlBase`:
        on(e3, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
        break;
      case `xmlLang`:
        on(e3, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
        break;
      case `xmlSpace`:
        on(e3, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
        break;
      case `is`:
        rn(e3, `is`, r3);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(2 < n2.length) || n2[0] !== `o` && n2[0] !== `O` || n2[1] !== `n` && n2[1] !== `N`) n2 = Tn.get(n2) || n2, rn(e3, n2, r3);
        else return;
    }
    k = true;
  }
  function tp(e3, t3, n2, r3, i2, a3) {
    switch (n2) {
      case `style`:
        Cn(e3, r3, a3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(s2(61));
          if (n2 = r3.__html, n2 != null) {
            if (i2.children != null) throw Error(s2(60));
            (a3 == null ? void 0 : a3.__html) !== n2 && (e3.innerHTML = n2);
          }
        }
        break;
      case `children`:
        if (typeof r3 == `string`) bn(e3, r3);
        else if (typeof r3 == `number` || typeof r3 == `bigint`) bn(e3, `` + r3);
        else return;
        break;
      case `onScroll`:
        r3 != null && Q(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r3 != null && Q(`scrollend`, e3);
        return;
      case `onClick`:
        r3 != null && (e3.onclick = On);
        return;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        return;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!Yt.hasOwnProperty(n2)) a: {
          if (n2[0] === `o` && n2[1] === `n` && (i2 = n2.endsWith(`Capture`), a3 = n2.slice(2, i2 ? n2.length - 7 : void 0), t3 = e3[Nt] || null, t3 = t3 == null ? null : t3[n2], typeof t3 == `function` && e3.removeEventListener(a3, t3, i2), typeof r3 == `function`)) {
            typeof t3 != `function` && t3 !== null && (n2 in e3 ? e3[n2] = null : e3.hasAttribute(n2) && e3.removeAttribute(n2)), e3.addEventListener(a3, r3, i2);
            break a;
          }
          k = true, n2 in e3 ? e3[n2] = r3 : true === r3 ? e3.setAttribute(n2, ``) : rn(e3, n2, r3);
        }
        return;
    }
    k = true;
  }
  function np(e3, t3, n2) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q(`error`, e3), Q(`load`, e3);
        var r3 = false, i2 = false, a3;
        for (a3 in n2) if (n2.hasOwnProperty(a3)) {
          var o2 = n2[a3];
          if (o2 != null) switch (a3) {
            case `src`:
              r3 = true;
              break;
            case `srcSet`:
              i2 = true;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(s2(137, t3));
            default:
              $(e3, t3, a3, o2, n2, null);
          }
        }
        i2 && $(e3, t3, `srcSet`, n2.srcSet, n2, null), r3 && $(e3, t3, `src`, n2.src, n2, null);
        return;
      case `input`:
        Q(`invalid`, e3);
        var c3 = a3 = o2 = i2 = null, l3 = null, u3 = null;
        for (r3 in n2) if (n2.hasOwnProperty(r3)) {
          var d3 = n2[r3];
          if (d3 != null) switch (r3) {
            case `name`:
              i2 = d3;
              break;
            case `type`:
              o2 = d3;
              break;
            case `checked`:
              l3 = d3;
              break;
            case `defaultChecked`:
              u3 = d3;
              break;
            case `value`:
              a3 = d3;
              break;
            case `defaultValue`:
              c3 = d3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (d3 != null) throw Error(s2(137, t3));
              break;
            default:
              $(e3, t3, r3, d3, n2, null);
          }
        }
        hn(e3, a3, c3, l3, u3, o2, i2, false);
        return;
      case `select`:
        for (i2 in Q(`invalid`, e3), r3 = o2 = a3 = null, n2) if (n2.hasOwnProperty(i2) && (c3 = n2[i2], c3 != null)) switch (i2) {
          case `value`:
            a3 = c3;
            break;
          case `defaultValue`:
            o2 = c3;
            break;
          case `multiple`:
            r3 = c3;
          default:
            $(e3, t3, i2, c3, n2, null);
        }
        t3 = a3, n2 = o2, e3.multiple = !!r3, t3 == null ? n2 != null && _n(e3, !!r3, n2, true) : _n(e3, !!r3, t3, false);
        return;
      case `textarea`:
        for (o2 in Q(`invalid`, e3), a3 = i2 = r3 = null, n2) if (n2.hasOwnProperty(o2) && (c3 = n2[o2], c3 != null)) switch (o2) {
          case `value`:
            r3 = c3;
            break;
          case `defaultValue`:
            i2 = c3;
            break;
          case `children`:
            a3 = c3;
            break;
          case `dangerouslySetInnerHTML`:
            if (c3 != null) throw Error(s2(91));
            break;
          default:
            $(e3, t3, o2, c3, n2, null);
        }
        yn(e3, r3, i2, a3);
        return;
      case `option`:
        for (l3 in n2) if (n2.hasOwnProperty(l3) && (r3 = n2[l3], r3 != null)) switch (l3) {
          case `selected`:
            e3.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
            break;
          default:
            $(e3, t3, l3, r3, n2, null);
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e3), Q(`toggle`, e3), Q(`cancel`, e3), Q(`close`, e3);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e3);
        break;
      case `video`:
      case `audio`:
        for (r3 = 0; r3 < zf.length; r3++) Q(zf[r3], e3);
        break;
      case `image`:
        Q(`error`, e3), Q(`load`, e3);
        break;
      case `details`:
        Q(`toggle`, e3);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e3), Q(`load`, e3);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u3 in n2) if (n2.hasOwnProperty(u3) && (r3 = n2[u3], r3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(s2(137, t3));
          default:
            $(e3, t3, u3, r3, n2, null);
        }
        return;
      default:
        if (wn(t3)) {
          for (d3 in n2) n2.hasOwnProperty(d3) && (r3 = n2[d3], r3 !== void 0 && tp(e3, t3, d3, r3, n2, void 0));
          return;
        }
    }
    for (c3 in n2) n2.hasOwnProperty(c3) && (r3 = n2[c3], r3 != null && $(e3, t3, c3, r3, n2, null));
  }
  var rp = {};
  function ip(e3, t3, n2, r3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var i2 = null, a3 = null, o2 = null, c3 = null, l3 = null, u3 = null, d3 = null;
        for (m3 in n2) {
          var f3 = n2[m3];
          if (n2.hasOwnProperty(m3) && f3 != null) switch (m3) {
            case `checked`:
              break;
            case `value`:
              break;
            case `defaultValue`:
              l3 = f3;
            default:
              r3.hasOwnProperty(m3) || $(e3, t3, m3, null, r3, f3);
          }
        }
        for (var p3 in r3) {
          var m3 = r3[p3];
          if (f3 = n2[p3], r3.hasOwnProperty(p3) && (m3 != null || f3 != null)) switch (p3) {
            case `type`:
              m3 !== f3 && (k = true), a3 = m3;
              break;
            case `name`:
              m3 !== f3 && (k = true), i2 = m3;
              break;
            case `checked`:
              m3 !== f3 && (k = true), u3 = m3;
              break;
            case `defaultChecked`:
              m3 !== f3 && (k = true), d3 = m3;
              break;
            case `value`:
              m3 !== f3 && (k = true), o2 = m3;
              break;
            case `defaultValue`:
              m3 !== f3 && (k = true), c3 = m3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m3 != null) throw Error(s2(137, t3));
              break;
            default:
              m3 !== f3 && $(e3, t3, p3, m3, r3, f3);
          }
        }
        mn(e3, o2, c3, l3, u3, d3, a3, i2);
        return;
      case `select`:
        for (a3 in m3 = o2 = c3 = p3 = null, n2) if (l3 = n2[a3], n2.hasOwnProperty(a3) && l3 != null) switch (a3) {
          case `value`:
            break;
          case `multiple`:
            m3 = l3;
          default:
            r3.hasOwnProperty(a3) || $(e3, t3, a3, null, r3, l3);
        }
        for (i2 in r3) if (a3 = r3[i2], l3 = n2[i2], r3.hasOwnProperty(i2) && (a3 != null || l3 != null)) switch (i2) {
          case `value`:
            a3 !== l3 && (k = true), p3 = a3;
            break;
          case `defaultValue`:
            a3 !== l3 && (k = true), c3 = a3;
            break;
          case `multiple`:
            a3 !== l3 && (k = true), o2 = a3;
          default:
            a3 !== l3 && $(e3, t3, i2, a3, r3, l3);
        }
        t3 = c3, n2 = o2, r3 = m3, p3 == null ? !!r3 != !!n2 && (t3 == null ? _n(e3, !!n2, n2 ? [] : ``, false) : _n(e3, !!n2, t3, true)) : _n(e3, !!n2, p3, false);
        return;
      case `textarea`:
        for (c3 in m3 = p3 = null, n2) if (i2 = n2[c3], n2.hasOwnProperty(c3) && i2 != null && !r3.hasOwnProperty(c3)) switch (c3) {
          case `value`:
            break;
          case `children`:
            break;
          default:
            $(e3, t3, c3, null, r3, i2);
        }
        for (o2 in r3) if (i2 = r3[o2], a3 = n2[o2], r3.hasOwnProperty(o2) && (i2 != null || a3 != null)) switch (o2) {
          case `value`:
            i2 !== a3 && (k = true), p3 = i2;
            break;
          case `defaultValue`:
            i2 !== a3 && (k = true), m3 = i2;
            break;
          case `children`:
            break;
          case `dangerouslySetInnerHTML`:
            if (i2 != null) throw Error(s2(91));
            break;
          default:
            i2 !== a3 && $(e3, t3, o2, i2, r3, a3);
        }
        vn(e3, p3, m3);
        return;
      case `option`:
        for (var h3 in n2) if (p3 = n2[h3], n2.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
          case `selected`:
            e3.selected = false;
            break;
          default:
            $(e3, t3, h3, null, r3, p3);
        }
        for (l3 in r3) if (p3 = r3[l3], m3 = n2[l3], r3.hasOwnProperty(l3) && p3 !== m3 && (p3 != null || m3 != null)) switch (l3) {
          case `selected`:
            p3 !== m3 && (k = true), e3.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
            break;
          default:
            $(e3, t3, l3, p3, r3, m3);
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g3 in n2) p3 = n2[g3], n2.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && $(e3, t3, g3, null, r3, p3);
        for (u3 in r3) if (p3 = r3[u3], m3 = n2[u3], r3.hasOwnProperty(u3) && p3 !== m3 && (p3 != null || m3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            if (p3 != null) throw Error(s2(137, t3));
            break;
          default:
            $(e3, t3, u3, p3, r3, m3);
        }
        return;
      default:
        if (wn(t3)) {
          for (var _3 in n2) p3 = n2[_3], n2.hasOwnProperty(_3) && p3 !== void 0 && !r3.hasOwnProperty(_3) && tp(e3, t3, _3, void 0, r3, p3);
          for (d3 in r3) p3 = r3[d3], m3 = n2[d3], !r3.hasOwnProperty(d3) || p3 === m3 || p3 === void 0 && m3 === void 0 || tp(e3, t3, d3, p3, r3, m3);
          return;
        }
    }
    for (var v3 in n2) p3 = n2[v3], n2.hasOwnProperty(v3) && p3 != null && !r3.hasOwnProperty(v3) && $(e3, t3, v3, null, r3, p3);
    for (f3 in r3) p3 = r3[f3], m3 = n2[f3], !r3.hasOwnProperty(f3) || p3 === m3 || p3 == null && m3 == null || $(e3, t3, f3, p3, r3, m3);
  }
  function ap(e3) {
    switch (e3) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function op() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e3 = 0, t3 = 0, n2 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n2.length; r3++) {
        var i2 = n2[r3], a3 = i2.transferSize, o2 = i2.initiatorType, s3 = i2.duration;
        if (a3 && s3 && ap(o2)) {
          for (o2 = 0, s3 = i2.responseEnd, r3 += 1; r3 < n2.length; r3++) {
            var c3 = n2[r3], l3 = c3.startTime;
            if (l3 > s3) break;
            var u3 = c3.transferSize, d3 = c3.initiatorType;
            u3 && ap(d3) && (c3 = c3.responseEnd, o2 += u3 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
          }
          if (--r3, t3 += 8 * (a3 + o2) / (i2.duration / 1e3), e3++, 10 < e3) break;
        }
      }
      if (0 < e3) return t3 / e3 / 1e6;
    }
    return navigator.connection && (e3 = navigator.connection.downlink, typeof e3 == `number`) ? e3 : 5;
  }
  var sp = null, cp = null;
  function lp(e3) {
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  function up(e3) {
    switch (e3) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e3, t3) {
    if (e3 === 0) switch (t3) {
      case `svg`:
        return 1;
      case `math`:
        return 2;
      default:
        return 0;
    }
    return e3 === 1 && t3 === `foreignObject` ? 0 : e3;
  }
  function fp(e3, t3, n2, r3) {
    return n2 = lp(n2).createElement(e3), n2[Mt] = r3, n2[Nt] = t3, np(n2, e3, t3), Kt(n2), n2;
  }
  function pp(e3, t3) {
    return e3 === `textarea` || e3 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var mp = null;
  function hp() {
    var e3 = window.event;
    return e3 && e3.type === `popstate` ? e3 !== mp && (mp = e3, true) : (mp = null, false);
  }
  var gp = typeof setTimeout == `function` ? setTimeout : void 0, _p = typeof clearTimeout == `function` ? clearTimeout : void 0, vp = typeof Promise == `function` ? Promise : void 0, yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp, bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : function(e3) {
    return vp.resolve(null).then(e3).catch(xp);
  };
  function xp(e3) {
    setTimeout(function() {
      throw e3;
    });
  }
  function Sp(e3) {
    return e3 === `head`;
  }
  function Cp(e3, t3) {
    var n2 = t3, r3 = 0;
    do {
      var i2 = n2.nextSibling;
      if (e3.removeChild(n2), i2 && i2.nodeType === 8) {
        if (n2 = i2.data, n2 === `/$` || n2 === `/&`) {
          if (r3 === 0) {
            e3.removeChild(i2), Hh(t3);
            return;
          }
          r3--;
        } else if (n2 === `$` || n2 === `$?` || n2 === `$~` || n2 === `$!` || n2 === `&`) r3++;
        else if (n2 === `html`) _m(e3.ownerDocument.documentElement);
        else if (n2 === `head`) {
          n2 = e3.ownerDocument.head, _m(n2);
          for (var a3 = n2.firstChild; a3; ) {
            var o2 = a3.nextSibling, s3 = a3.nodeName;
            a3[zt] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n2.removeChild(a3), a3 = o2;
          }
        } else n2 === `body` && _m(e3.ownerDocument.body);
      }
      n2 = i2;
    } while (n2);
    Hh(t3);
  }
  function wp(e3, t3) {
    var n2 = e3;
    e3 = 0;
    do {
      var r3 = n2.nextSibling;
      if (n2.nodeType === 1 ? t3 ? (n2._stashedDisplay = n2.style.display, n2.style.display = `none`) : (n2.style.display = n2._stashedDisplay || ``, n2.getAttribute(`style`) === `` && n2.removeAttribute(`style`)) : n2.nodeType === 3 && (t3 ? (n2._stashedText = n2.nodeValue, n2.nodeValue = ``) : n2.nodeValue = n2._stashedText || ``), r3 && r3.nodeType === 8) {
        if (n2 = r3.data, n2 === `/$`) {
          if (e3 === 0) break;
          e3--;
        } else n2 !== `$` && n2 !== `$?` && n2 !== `$~` && n2 !== `$!` || e3++;
      }
      n2 = r3;
    } while (n2);
  }
  function Tp(e3, t3, n2) {
    if (t3 = CSS.escape(t3) === t3 ? t3 : `r-` + btoa(t3).replace(/=/g, ``), e3.style.viewTransitionName = t3, n2 != null && (e3.style.viewTransitionClass = n2), n2 = getComputedStyle(e3), n2.display === `inline`) {
      if (t3 = e3.getClientRects(), t3.length === 1) var r3 = 1;
      else for (var i2 = r3 = 0; i2 < t3.length; i2++) {
        var a3 = t3[i2];
        0 < a3.width && 0 < a3.height && r3++;
      }
      r3 === 1 && (e3 = e3.style, e3.display = t3.length === 1 ? `inline-block` : `block`, e3.marginTop = `-` + n2.paddingTop, e3.marginBottom = `-` + n2.paddingBottom);
    }
  }
  function Ep(e3, t3) {
    e3 = e3.style, t3 = t3.style;
    var n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionName`) ? t3.viewTransitionName : t3.hasOwnProperty(`view-transition-name`) ? t3[`view-transition-name`] : null;
    e3.viewTransitionName = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionClass`) ? t3.viewTransitionClass : t3.hasOwnProperty(`view-transition-class`) ? t3[`view-transition-class`] : null, e3.viewTransitionClass = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), e3.display === `inline-block` && (t3 == null ? e3.display = e3.margin = `` : (n2 = t3.display, e3.display = n2 == null || typeof n2 == `boolean` ? `` : n2, n2 = t3.margin, n2 == null ? (n2 = t3.hasOwnProperty(`marginTop`) ? t3.marginTop : t3[`margin-top`], e3.marginTop = n2 == null || typeof n2 == `boolean` ? `` : n2, t3 = t3.hasOwnProperty(`marginBottom`) ? t3.marginBottom : t3[`margin-bottom`], e3.marginBottom = t3 == null || typeof t3 == `boolean` ? `` : t3) : e3.margin = n2));
  }
  function Dp(e3, t3, n2) {
    return n2 = n2.ownerDocument.defaultView, { rect: e3, abs: t3.position === `absolute` || t3.position === `fixed`, clip: t3.clipPath !== `none` || t3.overflow !== `visible` || t3.filter !== `none` || t3.mask !== `none` || t3.mask !== `none` || t3.borderRadius !== `0px`, view: 0 <= e3.bottom && 0 <= e3.right && e3.top <= n2.innerHeight && e3.left <= n2.innerWidth };
  }
  function Op(e3) {
    return Dp(e3.getBoundingClientRect(), getComputedStyle(e3), e3);
  }
  function kp(e3) {
    var t3 = e3.getBoundingClientRect();
    t3 = new DOMRect(t3.x + 2e4, t3.y + 2e4, t3.width, t3.height);
    var n2 = getComputedStyle(e3);
    return Dp(t3, n2, e3);
  }
  function Ap(e3) {
    return e3.documentElement.clientHeight;
  }
  function jp(e3) {
    this.addEventListener(`load`, e3), this.addEventListener(`error`, e3);
  }
  function Mp(e3, t3, n2, r3, i2, a3, o2, s3, c3) {
    var l3 = t3.nodeType === 9 ? t3 : t3.ownerDocument;
    try {
      var u3 = l3.startViewTransition({ update: function() {
        var t4 = l3.defaultView, n3 = t4.navigation && t4.navigation.transition, o3 = l3.fonts.status;
        r3();
        var s4 = [];
        if (o3 === `loaded` && (Ap(l3), l3.fonts.status === `loading` && s4.push(l3.fonts.ready)), o3 = s4.length, e3 !== null) for (var c4 = e3.suspenseyImages, u4 = 0, d4 = 0; d4 < c4.length; d4++) {
          var f3 = c4[d4];
          if (!f3.complete) {
            var p3 = f3.getBoundingClientRect();
            if (0 < p3.bottom && 0 < p3.right && p3.top < t4.innerHeight && p3.left < t4.innerWidth) {
              if (u4 += Xm(f3), u4 > $m) {
                s4.length = o3;
                break;
              }
              f3 = new Promise(jp.bind(f3)), s4.push(f3);
            }
          }
        }
        if (0 < s4.length) return t4 = Promise.race([Promise.all(s4), new Promise(function(e4) {
          return setTimeout(e4, 500);
        })]).then(i2, i2), (n3 ? Promise.allSettled([n3.finished, t4]) : t4).then(a3, a3);
        if (i2(), n3) return n3.finished.then(a3, a3);
        a3();
      }, types: n2 });
      l3.__reactViewTransition = u3;
      var d3 = [];
      return u3.ready.then(function() {
        for (var e4 = l3.documentElement.getAnimations({ subtree: true }), t4 = 0; t4 < e4.length; t4++) {
          var n3 = e4[t4], r4 = n3.effect, i3 = r4.pseudoElement;
          if (i3 != null && i3.startsWith(`::view-transition`)) {
            d3.push(n3), n3 = r4.getKeyframes();
            for (var a4 = i3 = void 0, s4 = true, c4 = 0; c4 < n3.length; c4++) {
              var u4 = n3[c4], f3 = u4.width;
              if (i3 === void 0) i3 = f3;
              else if (i3 !== f3) {
                s4 = false;
                break;
              }
              if (f3 = u4.height, a4 === void 0) a4 = f3;
              else if (a4 !== f3) {
                s4 = false;
                break;
              }
              delete u4.width, delete u4.height, u4.transform === `none` && delete u4.transform;
            }
            s4 && i3 !== void 0 && a4 !== void 0 && (r4.setKeyframes(n3), s4 = getComputedStyle(r4.target, r4.pseudoElement), s4.width !== i3 || s4.height !== a4) && (s4 = n3[0], s4.width = i3, s4.height = a4, s4 = n3[n3.length - 1], s4.width = i3, s4.height = a4, r4.setKeyframes(n3));
          }
        }
        o2();
      }, function(e4) {
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null);
        try {
          if (typeof e4 == `object` && e4) switch (e4.name) {
            case `InvalidStateError`:
              (e4.message === `View transition was skipped because document visibility state is hidden.` || e4.message === `Skipping view transition because document visibility state has become hidden.` || e4.message === `Skipping view transition because viewport size changed.` || e4.message === `Transition was aborted because of invalid state`) && (e4 = null);
          }
          e4 !== null && c3(e4);
        } finally {
          r3(), i2(), o2();
        }
      }), u3.finished.finally(function() {
        for (var e4 = 0; e4 < d3.length; e4++) d3[e4].cancel();
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null), s3();
      }), u3;
    } catch {
      return r3(), i2(), o2(), null;
    }
  }
  function Np(e3, t3) {
    this._scope = document.documentElement, this._selector = `::view-transition-` + e3 + `(` + t3 + `)`;
  }
  Np.prototype.animate = function(e3, t3) {
    return t3 = typeof t3 == `number` ? { duration: t3 } : C2({}, t3), t3.pseudoElement = this._selector, this._scope.animate(e3, t3);
  }, Np.prototype.getAnimations = function() {
    for (var e3 = this._scope, t3 = this._selector, n2 = e3.getAnimations({ subtree: true }), r3 = [], i2 = 0; i2 < n2.length; i2++) {
      var a3 = n2[i2].effect;
      a3 !== null && a3.target === e3 && a3.pseudoElement === t3 && r3.push(n2[i2]);
    }
    return r3;
  }, Np.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Pp(e3) {
    return { name: e3, group: new Np(`group`, e3), imagePair: new Np(`image-pair`, e3), old: new Np(`old`, e3), new: new Np(`new`, e3) };
  }
  function Fp(e3) {
    this._fragmentFiber = e3, this._observers = this._eventListeners = null;
  }
  Fp.prototype.addEventListener = function(e3, t3, n2) {
    var r3 = null, i2 = null;
    if (!(n2 != null && typeof n2 != `boolean` && (r3 = n2.signal || null, r3 !== null && r3.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var a3 = this._eventListeners;
      if (Bp(a3, e3, t3, n2) === -1) {
        var o2 = this, s3 = t3;
        n2 != null && typeof n2 != `boolean` && true === n2.once && (s3 = function(r4) {
          o2.removeEventListener(e3, t3, n2), typeof t3 == `function` ? t3.call(this, r4) : t3.handleEvent(r4);
        }), r3 !== null && (i2 = o2.removeEventListener.bind(o2, e3, t3, n2), r3.addEventListener(`abort`, i2, { once: true }), i2 = r3.removeEventListener.bind(r3, `abort`, i2)), r3 = Rp(n2), a3.push({ type: e3, listener: t3, optionsOrUseCapture: n2, attachedListener: s3, cleanup: i2 }), h2(this._fragmentFiber.child, false, Ip, e3, s3, r3);
      }
      this._eventListeners = a3;
    }
  };
  function Ip(e3, t3, n2, r3) {
    return b2(e3).addEventListener(t3, n2, r3), false;
  }
  Fp.prototype.removeEventListener = function(e3, t3, n2) {
    var r3 = this._eventListeners;
    if (r3 !== null && (t3 = Bp(r3, e3, t3, n2), t3 !== -1)) {
      var i2 = r3[t3];
      n2 = i2.attachedListener;
      var a3 = i2.cleanup;
      i2 = Rp(i2.optionsOrUseCapture), h2(this._fragmentFiber.child, false, Lp, e3, n2, i2), r3.splice(t3, 1), a3 !== null && a3();
    }
  };
  function Lp(e3, t3, n2, r3) {
    return b2(e3).removeEventListener(t3, n2, r3), false;
  }
  function Rp(e3) {
    return e3 != null && typeof e3 != `boolean` && (true === e3.once || e3.signal instanceof AbortSignal) ? { capture: e3.capture, passive: e3.passive } : e3;
  }
  function zp(e3) {
    return e3 == null ? `c=0` : typeof e3 == `boolean` ? `c=` + (e3 ? `1` : `0`) : `c=` + (e3.capture ? `1` : `0`);
  }
  function Bp(e3, t3, n2, r3) {
    if (e3.length === 0) return -1;
    r3 = zp(r3);
    for (var i2 = 0; i2 < e3.length; i2++) {
      var a3 = e3[i2];
      if (a3.type === t3 && a3.listener === n2 && zp(a3.optionsOrUseCapture) === r3) return i2;
    }
    return -1;
  }
  Fp.prototype.dispatchEvent = function(e3) {
    var t3 = g2(this._fragmentFiber);
    if (t3 === null) return true;
    t3 = b2(t3);
    var n2 = this._eventListeners;
    if (n2 !== null && 0 < n2.length || !e3.bubbles) {
      var r3 = t3.nodeType === 9 ? t3.createComment(``) : document.createTextNode(``);
      if (n2) for (var i2 = 0; i2 < n2.length; i2++) {
        var a3 = n2[i2];
        r3.addEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
      }
      if (t3.appendChild(r3), e3 = r3.dispatchEvent(e3), n2) for (i2 = 0; i2 < n2.length; i2++) a3 = n2[i2], r3.removeEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
      return t3.removeChild(r3), e3;
    }
    return t3.dispatchEvent(e3);
  }, Fp.prototype.focus = function(e3) {
    h2(this._fragmentFiber.child, true, Vp, e3, void 0, void 0);
  };
  function Vp(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), pm(e3, t3));
  }
  Fp.prototype.focusLast = function(e3) {
    var t3 = [];
    h2(this._fragmentFiber.child, true, Hp, t3, void 0, void 0);
    for (var n2 = t3.length - 1; 0 <= n2 && !Vp(t3[n2], e3); n2--) ;
  };
  function Hp(e3, t3) {
    return t3.push(e3), false;
  }
  Fp.prototype.blur = function() {
    var e3 = g2(this._fragmentFiber);
    e3 !== null && (e3 = b2(e3), e3 = lp(e3).activeElement, e3 !== null && h2(this._fragmentFiber.child, false, Up, e3, void 0, void 0));
  };
  function Up(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), e3 === t3 || e3.contains(t3) ? (t3.blur(), true) : false);
  }
  Fp.prototype.observeUsing = function(e3) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e3), h2(this._fragmentFiber.child, false, Wp, e3, void 0, void 0);
  };
  function Wp(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), t3.observe(e3), false);
  }
  Fp.prototype.unobserveUsing = function(e3) {
    var t3 = this._observers;
    if (t3 !== null && t3.has(e3)) {
      t3.delete(e3), h2(this._fragmentFiber.child, false, Gp, e3, void 0, void 0);
      for (var n2 = t3 = 0; n2 < Kp.length; n2++) {
        var r3 = Kp[n2];
        r3.fragmentInstance === this && r3.observer === e3 ? e3.unobserve(r3.instance) : Kp[t3++] = r3;
      }
      Kp.length = t3;
    }
  };
  function Gp(e3, t3) {
    return e3.tag !== 6 && (e3 = b2(e3), t3.unobserve(e3), false);
  }
  var Kp = [], qp = false;
  function Jp(e3, t3, n2) {
    Kp.push({ fragmentInstance: e3, observer: t3, instance: n2 }), qp || (qp = true, mm(function() {
      qp = false;
      var e4 = Kp;
      Kp = [];
      for (var t4 = 0; t4 < e4.length; t4++) {
        var n3 = e4[t4];
        n3.observer.unobserve(n3.instance);
      }
    }));
  }
  Fp.prototype.getClientRects = function() {
    var e3 = [];
    return h2(this._fragmentFiber.child, false, Yp, e3, void 0, void 0), e3;
  };
  function Yp(e3, t3) {
    if (e3.tag === 6) {
      e3 = e3.stateNode;
      var n2 = e3.ownerDocument.createRange();
      n2.selectNodeContents(e3), t3.push.apply(t3, n2.getClientRects());
    } else e3 = b2(e3), t3.push.apply(t3, e3.getClientRects());
    return false;
  }
  Fp.prototype.getRootNode = function(e3) {
    var t3 = g2(this._fragmentFiber);
    return t3 === null ? this : b2(t3).getRootNode(e3);
  }, Fp.prototype.compareDocumentPosition = function(e3) {
    var t3 = g2(this._fragmentFiber);
    if (t3 === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n2 = [];
    h2(this._fragmentFiber.child, false, Hp, n2, void 0, void 0);
    var r3 = b2(t3);
    if (n2.length === 0) {
      if (n2 = r3, _2(this._fragmentFiber)) {
        a: {
          for (t3 = this._fragmentFiber.return; t3 !== null; ) {
            if (t3.tag === 4) {
              t3 = t3.stateNode.containerInfo;
              break a;
            }
            if (t3.tag === 3 || t3.tag === 5 || t3.tag === 27) break;
            t3 = t3.return;
          }
          t3 = null;
        }
        t3 != null && (n2 = t3);
      }
      t3 = this._fragmentFiber;
      var i2 = r3 = n2.compareDocumentPosition(e3);
      return n2 === e3 ? i2 = Node.DOCUMENT_POSITION_CONTAINS : r3 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n2 = v2(t3)[1], n2 === null ? i2 = Node.DOCUMENT_POSITION_PRECEDING : (e3 = b2(n2).compareDocumentPosition(e3), i2 = e3 === 0 || e3 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i2 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t3 = b2(n2[0]), i2 = b2(n2[n2.length - 1]);
    var a3 = _2(this._fragmentFiber) ? t3.parentElement : r3;
    if (a3 == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r3 = a3.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY, a3 = a3.compareDocumentPosition(i2) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o2 = t3.compareDocumentPosition(e3), s3 = i2.compareDocumentPosition(e3), c3 = o2 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return s3 = r3 && a3 && o2 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING, t3 = r3 && t3 === e3 || a3 && i2 === e3 || c3 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r3 && t3 === e3 || !a3 && i2 === e3 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o2, t3 & Node.DOCUMENT_POSITION_DISCONNECTED || t3 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t3, this._fragmentFiber, n2[0], n2[n2.length - 1], e3) ? t3 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Xp(e3, t3, n2, r3, i2) {
    var a3 = Ht(i2);
    if (e3 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n2 = !!a3) a: {
        for (; a3 !== null; ) {
          if (a3.tag === 7 && (a3 === t3 || a3.alternate === t3)) {
            n2 = true;
            break a;
          }
          a3 = a3.return;
        }
        n2 = false;
      }
      return n2;
    }
    if (e3 & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a3 === null) return a3 = i2.ownerDocument, i2 === a3 || i2 === a3.documentElement || i2 === a3.body;
      a: {
        for (a3 = t3, t3 = g2(t3); a3 !== null; ) {
          if (!(a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 27 || a3 !== t3 && a3.alternate !== t3)) {
            a3 = true;
            break a;
          }
          a3 = a3.return;
        }
        a3 = false;
      }
      return a3;
    }
    return e3 & Node.DOCUMENT_POSITION_PRECEDING ? ((t3 = !!a3) && !(t3 = a3 === n2) && (t3 = re2(n2, a3, S2), t3 === null ? t3 = false : (h2(t3, true, ne2, a3, n2), a3 = ee2, ee2 = null, t3 = a3 !== null)), t3) : e3 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t3 = !!a3) && !(t3 = a3 === r3) && (t3 = re2(r3, a3, S2), t3 === null ? t3 = false : (h2(t3, true, x2, a3, r3), a3 = ee2, te2 = ee2 = null, t3 = a3 !== null)), t3) : false;
  }
  function Zp(e3, t3) {
    var n2 = e3.ownerDocument.createRange();
    n2.selectNodeContents(e3), e3 = n2.getBoundingClientRect(), window.scrollTo(window.scrollX + e3.left, t3 ? window.scrollY + e3.top : window.scrollY + e3.bottom - window.innerHeight);
  }
  Fp.prototype.scrollIntoView = function(e3) {
    if (typeof e3 == `object`) throw Error(s2(566));
    var t3 = [];
    h2(this._fragmentFiber.child, false, Hp, t3, void 0, void 0);
    var n2 = false !== e3;
    if (t3.length === 0) {
      var r3 = v2(this._fragmentFiber);
      if (r3 = n2 ? r3[1] || r3[0] || g2(this._fragmentFiber) : r3[0] || r3[1], r3 === null) return;
      if (r3.tag === 6) {
        e3 = b2(r3), Zp(e3, n2);
        return;
      }
      if (r3 = b2(r3), r3.nodeType !== 9) {
        if (r3.nodeType === 11) {
          n2 = `host` in r3 ? r3.host : null, n2 !== null && n2.scrollIntoView(e3);
          return;
        }
        r3.scrollIntoView(e3);
      }
    }
    for (r3 = n2 ? t3.length - 1 : 0; r3 !== (n2 ? -1 : t3.length); ) {
      var i2 = t3[r3];
      i2.tag === 6 ? (i2 = b2(i2), Zp(i2, n2)) : b2(i2).scrollIntoView(e3), r3 += n2 ? -1 : 1;
    }
  };
  function Qp(e3, t3) {
    return e3 = b2(e3), $p(e3, t3), false;
  }
  function $p(e3, t3) {
    var _a2;
    (_a2 = e3.reactFragments) != null ? _a2 : e3.reactFragments = /* @__PURE__ */ new Set(), e3.reactFragments.add(t3);
  }
  function em(e3, t3) {
    var n2 = t3._eventListeners;
    if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
      var i2 = n2[r3];
      e3.addEventListener(i2.type, i2.attachedListener, Rp(i2.optionsOrUseCapture));
    }
    e3.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
      for (var r4 = 0, i3 = 0; i3 < Kp.length; i3++) {
        var a3 = Kp[i3];
        (a3.fragmentInstance !== t3 || a3.observer !== n3 || a3.instance !== e3) && (Kp[r4++] = a3);
      }
      Kp.length = r4, n3.observe(e3);
    }), $p(e3, t3));
  }
  function tm(e3, t3) {
    var n2 = t3._eventListeners;
    if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
      var i2 = n2[r3];
      e3.removeEventListener(i2.type, i2.attachedListener, Rp(i2.optionsOrUseCapture));
    }
    e3.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
      typeof n3.rootMargin == `string` ? Jp(t3, n3, e3) : n3.unobserve(e3);
    }), e3.reactFragments != null && e3.reactFragments.delete(t3));
  }
  function nm(e3) {
    var t3 = e3.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n2 = t3;
      switch (t3 = t3.nextSibling, n2.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n2), Vt(n2);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n2.rel.toLowerCase() === `stylesheet`) continue;
      }
      e3.removeChild(n2);
    }
  }
  function rm(e3, t3, n2, r3) {
    for (; e3.nodeType === 1; ) {
      var i2 = n2;
      if (e3.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r3 && (e3.nodeName !== `INPUT` || e3.type !== `hidden`)) break;
      } else if (!r3) {
        if (t3 === `input` && e3.type === `hidden`) {
          var a3 = i2.name == null ? null : `` + i2.name;
          if (i2.type === `hidden` && e3.getAttribute(`name`) === a3) return e3;
        } else return e3;
      } else if (!e3[zt]) switch (t3) {
        case `meta`:
          if (!e3.hasAttribute(`itemprop`)) break;
          return e3;
        case `link`:
          if (a3 = e3.getAttribute(`rel`), a3 === `stylesheet` && e3.hasAttribute(`data-precedence`) || a3 !== i2.rel || e3.getAttribute(`href`) !== (i2.href == null || i2.href === `` ? null : i2.href) || e3.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin) || e3.getAttribute(`title`) !== (i2.title == null ? null : i2.title)) break;
          return e3;
        case `style`:
          if (e3.hasAttribute(`data-precedence`)) break;
          return e3;
        case `script`:
          if (a3 = e3.getAttribute(`src`), (a3 !== (i2.src == null ? null : i2.src) || e3.getAttribute(`type`) !== (i2.type == null ? null : i2.type) || e3.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin)) && a3 && e3.hasAttribute(`async`) && !e3.hasAttribute(`itemprop`)) break;
          return e3;
        default:
          return e3;
      }
      if (e3 = lm(e3.nextSibling), e3 === null) break;
    }
    return null;
  }
  function im(e3, t3, n2) {
    if (t3 === ``) return null;
    for (; e3.nodeType !== 3; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !n2 || (e3 = lm(e3.nextSibling), e3 === null)) return null;
    return e3;
  }
  function am(e3, t3) {
    for (; e3.nodeType !== 8; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !t3 || (e3 = lm(e3.nextSibling), e3 === null)) return null;
    return e3;
  }
  function om(e3) {
    return e3.data === `$?` || e3.data === `$~`;
  }
  function sm(e3) {
    return e3.data === `$!` || e3.data === `$?` && e3.ownerDocument.readyState !== `loading`;
  }
  function cm(e3, t3) {
    var n2 = e3.ownerDocument;
    if (e3.data === `$~`) e3._reactRetry = t3;
    else if (e3.data !== `$?` || n2.readyState !== `loading`) t3();
    else {
      var r3 = function() {
        t3(), n2.removeEventListener(`DOMContentLoaded`, r3);
      };
      n2.addEventListener(`DOMContentLoaded`, r3), e3._reactRetry = r3;
    }
  }
  function lm(e3) {
    for (; e3 != null; e3 = e3.nextSibling) {
      var t3 = e3.nodeType;
      if (t3 === 1 || t3 === 3) break;
      if (t3 === 8) {
        if (t3 = e3.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
        if (t3 === `/$` || t3 === `/&`) return null;
      }
    }
    return e3;
  }
  var um = null;
  function dm(e3) {
    e3 = e3.nextSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n2 = e3.data;
        if (n2 === `/$` || n2 === `/&`) {
          if (t3 === 0) return lm(e3.nextSibling);
          t3--;
        } else n2 !== `$` && n2 !== `$!` && n2 !== `$?` && n2 !== `$~` && n2 !== `&` || t3++;
      }
      e3 = e3.nextSibling;
    }
    return null;
  }
  function fm(e3) {
    e3 = e3.previousSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n2 = e3.data;
        if (n2 === `$` || n2 === `$!` || n2 === `$?` || n2 === `$~` || n2 === `&`) {
          if (t3 === 0) return e3;
          t3--;
        } else n2 !== `/$` && n2 !== `/&` || t3++;
      }
      e3 = e3.previousSibling;
    }
    return null;
  }
  function pm(e3, t3) {
    function n2() {
      r3 = true;
    }
    if (e3.ownerDocument.activeElement === e3) return true;
    var r3 = false;
    try {
      e3.ownerDocument.addEventListener(`focus`, n2, true), (e3.focus || HTMLElement.prototype.focus).call(e3, t3);
    } finally {
      e3.ownerDocument.removeEventListener(`focus`, n2, true);
    }
    return r3;
  }
  function mm(e3) {
    yp(function() {
      yp(function(t3) {
        return e3(t3);
      });
    });
  }
  function hm(e3, t3, n2) {
    switch (t3 = lp(n2), e3) {
      case `html`:
        if (e3 = t3.documentElement, !e3) throw Error(s2(452));
        return e3;
      case `head`:
        if (e3 = t3.head, !e3) throw Error(s2(453));
        return e3;
      case `body`:
        if (e3 = t3.body, !e3) throw Error(s2(454));
        return e3;
      default:
        throw Error(s2(451));
    }
  }
  function gm(e3, t3, n2) {
    for (var r3 in n2) {
      var i2 = n2[r3];
      n2.hasOwnProperty(r3) && i2 != null && $(e3, t3, r3, null, rp, i2);
    }
    n2.dangerouslySetInnerHTML != null && (e3.textContent = ``), e3.onclick === On && (e3.onclick = null), Vt(e3);
  }
  function _m(e3) {
    for (var t3 = e3.attributes; t3.length; ) e3.removeAttributeNode(t3[0]);
    Vt(e3);
  }
  var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
  function bm(e3) {
    if (typeof e3.getRootNode == `function`) {
      var t3 = e3.getRootNode();
      if (t3.nodeType === 9 || t3.nodeType === 11) return t3;
    }
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  var xm = D2.d;
  D2.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
  function Sm() {
    var e3 = xm.f(), t3 = zd();
    return e3 || t3;
  }
  function Cm(e3) {
    var t3 = Ut(e3);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? cc(t3) : xm.r(e3);
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(e3, t3, n2) {
    var r3 = wm;
    if (r3 && typeof t3 == `string` && t3) {
      var i2 = pn(t3);
      i2 = `link[rel="` + e3 + `"][href="` + i2 + `"]`, typeof n2 == `string` && (i2 += `[crossorigin="` + n2 + `"]`), ym.has(i2) || (ym.add(i2), e3 = { rel: e3, crossOrigin: n2, href: t3 }, r3.querySelector(i2) === null && (t3 = r3.createElement(`link`), np(t3, `link`, e3), Kt(t3), r3.head.appendChild(t3)));
    }
  }
  function Em(e3) {
    xm.D(e3), Tm(`dns-prefetch`, e3, null);
  }
  function Dm(e3, t3) {
    xm.C(e3, t3), Tm(`preconnect`, e3, t3);
  }
  function Om(e3, t3, n2) {
    xm.L(e3, t3, n2);
    var r3 = wm;
    if (r3 && e3 && t3) {
      var i2 = `link[rel="preload"][as="` + pn(t3) + `"]`;
      t3 === `image` && n2 && n2.imageSrcSet ? (i2 += `[imagesrcset="` + pn(n2.imageSrcSet) + `"]`, typeof n2.imageSizes == `string` && (i2 += `[imagesizes="` + pn(n2.imageSizes) + `"]`)) : i2 += `[href="` + pn(e3) + `"]`;
      var a3 = i2;
      switch (t3) {
        case `style`:
          a3 = Pm(e3);
          break;
        case `script`:
          a3 = Rm(e3);
      }
      if (!(vm.has(a3) || (e3 = C2({ rel: `preload`, href: t3 === `image` && n2 && n2.imageSrcSet ? void 0 : e3, as: t3 }, n2), vm.set(a3, e3), r3.querySelector(i2) !== null || t3 === `style` && r3.querySelector(Fm(a3)) || t3 === `script` && r3.querySelector(zm(a3))))) {
        var o2 = r3.createElement(`link`);
        np(o2, `link`, e3), t3 === `style` && (o2[Bt] = true, o2.onload = o2.onerror = function() {
          qt(o2);
        }), Kt(o2), r3.head.appendChild(o2);
      }
    }
  }
  function km(e3, t3) {
    xm.m(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i2 = `link[rel="modulepreload"][as="` + pn(r3) + `"][href="` + pn(e3) + `"]`, a3 = i2;
      switch (r3) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a3 = Rm(e3);
      }
      if (!vm.has(a3) && (e3 = C2({ rel: `modulepreload`, href: e3 }, t3), vm.set(a3, e3), n2.querySelector(i2) === null)) {
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n2.querySelector(zm(a3))) return;
        }
        r3 = n2.createElement(`link`), np(r3, `link`, e3), Kt(r3), n2.head.appendChild(r3);
      }
    }
  }
  function Am(e3, t3, n2) {
    xm.S(e3, t3, n2);
    var r3 = wm;
    if (r3 && e3) {
      var i2 = Gt(r3).hoistableStyles, a3 = Pm(e3);
      t3 || (t3 = `default`);
      var o2 = i2.get(a3);
      if (!o2) {
        var s3 = { loading: 0, preload: null };
        if (o2 = r3.querySelector(Fm(a3))) s3.loading = 5;
        else {
          e3 = C2({ rel: `stylesheet`, href: e3, "data-precedence": t3 }, n2), (n2 = vm.get(a3)) && Hm(e3, n2);
          var c3 = o2 = r3.createElement(`link`);
          Kt(c3), np(c3, `link`, e3), c3._p = new Promise(function(e4, t4) {
            c3.onload = e4, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s3.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s3.loading |= 2;
          }), s3.loading |= 4, Vm(o2, t3, r3);
        }
        o2 = { type: `stylesheet`, instance: o2, count: 1, state: s3 }, i2.set(a3, o2);
      }
    }
  }
  function jm(e3, t3) {
    xm.X(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r3 = Gt(n2).hoistableScripts, i2 = Rm(e3), a3 = r3.get(i2);
      a3 || (a3 = n2.querySelector(zm(i2)), a3 || (e3 = C2({ src: e3, async: true }, t3), (t3 = vm.get(i2)) && Um(e3, t3), a3 = n2.createElement(`script`), Kt(a3), np(a3, `link`, e3), n2.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i2, a3));
    }
  }
  function Mm(e3, t3) {
    xm.M(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r3 = Gt(n2).hoistableScripts, i2 = Rm(e3), a3 = r3.get(i2);
      a3 || (a3 = n2.querySelector(zm(i2)), a3 || (e3 = C2({ src: e3, async: true, type: `module` }, t3), (t3 = vm.get(i2)) && Um(e3, t3), a3 = n2.createElement(`script`), Kt(a3), np(a3, `link`, e3), n2.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i2, a3));
    }
  }
  function Nm(e3, t3, n2, r3) {
    var i2 = (i2 = Me2.current) ? bm(i2) : null;
    if (!i2) throw Error(s2(446));
    switch (e3) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n2.precedence == `string` && typeof n2.href == `string` ? (n2 = Pm(n2.href), t3 = Gt(i2).hoistableStyles, r3 = t3.get(n2), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, t3.set(n2, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      case `link`:
        if (n2.rel === `stylesheet` && typeof n2.href == `string` && typeof n2.precedence == `string`) {
          e3 = Pm(n2.href);
          var a3 = Gt(i2).hoistableStyles, o2 = a3.get(e3);
          if (o2 || (i2 = i2.ownerDocument || i2, o2 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, a3.set(e3, o2), (a3 = i2.querySelector(Fm(e3))) ? a3._p || (o2.instance = a3, o2.state.loading = 5) : (a3 = vm.get(e3), a3 || (a3 = { rel: `preload`, as: `style`, href: n2.href, crossOrigin: n2.crossOrigin, integrity: n2.integrity, media: n2.media, hrefLang: n2.hrefLang, referrerPolicy: n2.referrerPolicy }, vm.set(e3, a3)), Lm(i2, e3, a3, o2.state))), t3 && r3 === null) throw Error(s2(528, ``));
          return o2;
        }
        if (t3 && r3 !== null) throw Error(s2(529, ``));
        return null;
      case `script`:
        return t3 = n2.async, n2 = n2.src, typeof n2 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (n2 = Rm(n2), t3 = Gt(i2).hoistableScripts, r3 = t3.get(n2), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, t3.set(n2, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      default:
        throw Error(s2(444, e3));
    }
  }
  function Pm(e3) {
    return `href="` + pn(e3) + `"`;
  }
  function Fm(e3) {
    return `link[rel="stylesheet"][` + e3 + `]`;
  }
  function Im(e3) {
    return C2({}, e3, { "data-precedence": e3.precedence, precedence: null });
  }
  function Lm(e3, t3, n2, r3) {
    if (t3 = e3.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`)) {
      if (true !== t3[Bt]) {
        r3.loading = 1;
        return;
      }
    } else t3 = e3.createElement(`link`), t3[Bt] = true, t3.onload = t3.onerror = qt.bind(null, t3), np(t3, `link`, n2), Kt(t3), e3.head.appendChild(t3);
    r3.preload = t3, t3.addEventListener(`load`, function() {
      return r3.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r3.loading |= 2;
    });
  }
  function Rm(e3) {
    return `[src="` + pn(e3) + `"]`;
  }
  function zm(e3) {
    return `script[async]` + e3;
  }
  function Bm(e3, t3, n2) {
    if (t3.count++, t3.instance === null) switch (t3.type) {
      case `style`:
        var r3 = e3.querySelector(`style[data-href~="` + pn(n2.href) + `"]`);
        if (r3) return t3.instance = r3, Kt(r3), r3;
        var i2 = C2({}, n2, { "data-href": n2.href, "data-precedence": n2.precedence, href: null, precedence: null });
        return r3 = (e3.ownerDocument || e3).createElement(`style`), Kt(r3), np(r3, `style`, i2), Vm(r3, n2.precedence, e3), t3.instance = r3;
      case `stylesheet`:
        i2 = Pm(n2.href);
        var a3 = e3.querySelector(Fm(i2));
        if (a3) return t3.state.loading |= 4, t3.instance = a3, Kt(a3), a3;
        r3 = Im(n2), (i2 = vm.get(i2)) && Hm(r3, i2), a3 = (e3.ownerDocument || e3).createElement(`link`), Kt(a3);
        var o2 = a3;
        return o2._p = new Promise(function(e4, t4) {
          o2.onload = e4, o2.onerror = t4;
        }), np(a3, `link`, r3), t3.state.loading |= 4, Vm(a3, n2.precedence, e3), t3.instance = a3;
      case `script`:
        return a3 = Rm(n2.src), (i2 = e3.querySelector(zm(a3))) ? (t3.instance = i2, Kt(i2), i2) : (r3 = n2, (i2 = vm.get(a3)) && (r3 = C2({}, n2), Um(r3, i2)), e3 = e3.ownerDocument || e3, i2 = e3.createElement(`script`), Kt(i2), np(i2, `link`, r3), e3.head.appendChild(i2), t3.instance = i2);
      case `void`:
        return null;
      default:
        throw Error(s2(443, t3.type));
    }
    else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Vm(r3, n2.precedence, e3));
    return t3.instance;
  }
  function Vm(e3, t3, n2) {
    for (var r3 = n2.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i2 = r3.length ? r3[r3.length - 1] : null, a3 = i2, o2 = 0; o2 < r3.length; o2++) {
      var s3 = r3[o2];
      if (s3.dataset.precedence === t3) a3 = s3;
      else if (a3 !== i2) break;
    }
    a3 ? a3.parentNode.insertBefore(e3, a3.nextSibling) : (t3 = n2.nodeType === 9 ? n2.head : n2, t3.insertBefore(e3, t3.firstChild));
  }
  function Hm(e3, t3) {
    var _a2, _b, _c2;
    (_a2 = e3.crossOrigin) != null ? _a2 : e3.crossOrigin = t3.crossOrigin, (_b = e3.referrerPolicy) != null ? _b : e3.referrerPolicy = t3.referrerPolicy, (_c2 = e3.title) != null ? _c2 : e3.title = t3.title;
  }
  function Um(e3, t3) {
    var _a2, _b, _c2;
    (_a2 = e3.crossOrigin) != null ? _a2 : e3.crossOrigin = t3.crossOrigin, (_b = e3.referrerPolicy) != null ? _b : e3.referrerPolicy = t3.referrerPolicy, (_c2 = e3.integrity) != null ? _c2 : e3.integrity = t3.integrity;
  }
  var Wm = null;
  function Gm(e3, t3, n2) {
    if (Wm === null) {
      var r3 = /* @__PURE__ */ new Map(), i2 = Wm = /* @__PURE__ */ new Map();
      i2.set(n2, r3);
    } else i2 = Wm, r3 = i2.get(n2), r3 || (r3 = /* @__PURE__ */ new Map(), i2.set(n2, r3));
    if (r3.has(e3)) return r3;
    for (r3.set(e3, null), n2 = n2.getElementsByTagName(e3), i2 = 0; i2 < n2.length; i2++) {
      var a3 = n2[i2];
      if (!(a3[zt] || a3[Mt] || e3 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o2 = a3.getAttribute(t3) || ``;
        o2 = e3 + o2;
        var s3 = r3.get(o2);
        s3 ? s3.push(a3) : r3.set(o2, [a3]);
      }
    }
    return r3;
  }
  function Km(e3, t3, n2) {
    e3 = e3.ownerDocument || e3, e3.head.insertBefore(n2, t3 === `title` ? e3.querySelector(`head > title`) : null);
  }
  function qm(e3, t3, n2) {
    if (n2 === 1 || t3.itemProp != null) return false;
    switch (e3) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
        return true;
      case `link`:
        if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
        switch (t3.rel) {
          case `stylesheet`:
            return e3 = t3.disabled, typeof t3.precedence == `string` && e3 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
    }
    return false;
  }
  function Jm(e3, t3) {
    return e3 === `img` && t3.src != null && t3.src !== `` && t3.onLoad == null && t3.loading !== `lazy`;
  }
  function Ym(e3) {
    return !(e3.type === `stylesheet` && !(e3.state.loading & 3));
  }
  function Xm(e3) {
    return (e3.width || 100) * (e3.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e3, t3) {
    typeof t3.decode == `function` && (e3.imgCount++, t3.complete || (e3.imgBytes += Xm(t3), e3.suspenseyImages.push(t3)), e3 = rh.bind(e3), t3.decode().then(e3, e3));
  }
  function Qm(e3, t3, n2, r3) {
    if (n2.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n2.state.loading & 4)) {
      if (n2.instance === null) {
        var i2 = Pm(r3.href), a3 = t3.querySelector(Fm(i2));
        if (a3) {
          t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e3.count++, e3 = nh.bind(e3), t3.then(e3, e3)), n2.state.loading |= 4, n2.instance = a3, Kt(a3);
          return;
        }
        a3 = t3.ownerDocument || t3, r3 = Im(r3), (i2 = vm.get(i2)) && Hm(r3, i2), a3 = a3.createElement(`link`), Kt(a3);
        var o2 = a3;
        o2._p = new Promise(function(e4, t4) {
          o2.onload = e4, o2.onerror = t4;
        }), np(a3, `link`, r3), n2.instance = a3;
      }
      e3.stylesheets === null && (e3.stylesheets = /* @__PURE__ */ new Map()), e3.stylesheets.set(n2, t3), (t3 = n2.state.preload) && !(n2.state.loading & 3) && (e3.count++, n2 = nh.bind(e3), t3.addEventListener(`load`, n2), t3.addEventListener(`error`, n2));
    }
  }
  var $m = 0;
  function eh(e3, t3) {
    return e3.stylesheets && e3.count === 0 && ah(e3, e3.stylesheets), 0 < e3.count || 0 < e3.imgCount ? function(n2) {
      var r3 = setTimeout(function() {
        if (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e3.imgBytes && $m === 0 && ($m = 62500 * op());
      var i2 = setTimeout(function() {
        if (e3.waitingForImages = false, e3.count === 0 && (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend)) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, (e3.imgBytes > $m ? 50 : 800) + t3);
      return e3.unsuspend = n2, function() {
        e3.unsuspend = null, clearTimeout(r3), clearTimeout(i2);
      };
    } : null;
  }
  function th(e3) {
    if (e3.count === 0 && (e3.imgCount === 0 || !e3.waitingForImages)) {
      if (e3.stylesheets) ah(e3, e3.stylesheets);
      else if (e3.unsuspend) {
        var t3 = e3.unsuspend;
        e3.unsuspend = null, t3();
      }
    }
  }
  function nh() {
    this.count--, th(this);
  }
  function rh() {
    this.imgCount--, th(this);
  }
  var ih = null;
  function ah(e3, t3) {
    e3.stylesheets = null, e3.unsuspend !== null && (e3.count++, ih = /* @__PURE__ */ new Map(), t3.forEach(oh, e3), ih = null, nh.call(e3));
  }
  function oh(e3, t3) {
    if (!(t3.state.loading & 4)) {
      var n2 = ih.get(e3);
      if (n2) var r3 = n2.get(null);
      else {
        n2 = /* @__PURE__ */ new Map(), ih.set(e3, n2);
        for (var i2 = e3.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i2.length; a3++) {
          var o2 = i2[a3];
          (o2.nodeName === `LINK` || o2.getAttribute(`media`) !== `not all`) && (n2.set(o2.dataset.precedence, o2), r3 = o2);
        }
        r3 && n2.set(null, r3);
      }
      i2 = t3.instance, o2 = i2.getAttribute(`data-precedence`), a3 = n2.get(o2) || r3, a3 === r3 && n2.set(null, i2), n2.set(o2, i2), this.count++, r3 = nh.bind(this), i2.addEventListener(`load`, r3), i2.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i2, a3.nextSibling) : (e3 = e3.nodeType === 9 ? e3.head : e3, e3.insertBefore(i2, e3.firstChild)), t3.state.loading |= 4;
    }
  }
  var sh = { $$typeof: T2, Provider: null, Consumer: null, _currentValue: Te2, _currentValue2: Te2, _threadCount: 0 };
  function ch(e3, t3, n2, r3, i2, a3, o2, s3, c3) {
    this.tag = 1, this.containerInfo = e3, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xt(0), this.hiddenUpdates = xt(null), this.identifierPrefix = r3, this.onUncaughtError = i2, this.onCaughtError = a3, this.onRecoverableError = o2, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e3, t3, n2, r3, i2, a3, o2, s3, c3, l3, u3, d3) {
    return e3 = new ch(e3, t3, n2, o2, c3, l3, u3, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = Hi(3, null, null, t3), e3.current = a3, a3.stateNode = e3, t3 = Ba(), t3.refCount++, e3.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n2, cache: t3 }, Co(a3), e3;
  }
  function uh(e3) {
    return e3 ? (e3 = Bi, e3) : Bi;
  }
  function dh(e3, t3, n2, r3, i2, a3) {
    i2 = uh(i2), r3.context === null ? r3.context = i2 : r3.pendingContext = i2, r3 = To(t3), r3.payload = { element: n2 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n2 = Eo(e3, r3, t3), n2 !== null && (Pd(n2, e3, t3), Do(n2, e3, t3));
  }
  function fh(e3, t3) {
    if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
      var n2 = e3.retryLane;
      e3.retryLane = n2 !== 0 && n2 < t3 ? n2 : t3;
    }
  }
  function ph(e3, t3) {
    fh(e3, t3), (e3 = e3.alternate) && fh(e3, t3);
  }
  function mh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = Li(e3, 67108864);
      t3 !== null && Pd(t3, e3, 67108864), ph(e3, 67108864);
    }
  }
  function hh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = jd();
      t3 = Dt(t3);
      var n2 = Li(e3, t3);
      n2 !== null && Pd(n2, e3, t3), ph(e3, t3);
    }
  }
  var gh = true;
  function _h(e3, t3, n2, r3) {
    var i2 = E2.T;
    E2.T = null;
    var a3 = D2.p;
    try {
      D2.p = 2, yh(e3, t3, n2, r3);
    } finally {
      D2.p = a3, E2.T = i2;
    }
  }
  function vh(e3, t3, n2, r3) {
    var i2 = E2.T;
    E2.T = null;
    var a3 = D2.p;
    try {
      D2.p = 8, yh(e3, t3, n2, r3);
    } finally {
      D2.p = a3, E2.T = i2;
    }
  }
  function yh(e3, t3, n2, r3) {
    if (gh) {
      var i2 = bh(r3);
      if (i2 === null) Kf(e3, t3, r3, xh, n2), Mh(e3, r3);
      else if (Ph(i2, e3, t3, n2, r3)) r3.stopPropagation();
      else if (Mh(e3, r3), t3 & 4 && -1 < jh.indexOf(e3)) {
        for (; i2 !== null; ) {
          var a3 = Ut(i2);
          if (a3 !== null) switch (a3.tag) {
            case 3:
              if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                var o2 = ht(a3.pendingLanes);
                if (o2 !== 0) {
                  var s3 = a3;
                  for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o2; ) {
                    var c3 = 1 << 31 - ct(o2);
                    s3.entanglements[1] |= c3, o2 &= ~c3;
                  }
                  Ef(a3), !(W & 6) && (_d = Xe() + 500, Df(0, false));
                }
              }
              break;
            case 31:
            case 13:
              s3 = Li(a3, 2), s3 !== null && Pd(s3, a3, 2), zd(), ph(a3, 2);
          }
          if (a3 = bh(r3), a3 === null && Kf(e3, t3, r3, xh, n2), a3 === i2) break;
          i2 = a3;
        }
        i2 !== null && r3.stopPropagation();
      } else Kf(e3, t3, r3, null, n2);
    }
  }
  function bh(e3) {
    return e3 = An(e3), Sh(e3);
  }
  var xh = null;
  function Sh(e3) {
    if (xh = null, e3 = Ht(e3), e3 !== null) {
      var t3 = l2(e3);
      if (t3 === null) e3 = null;
      else {
        var n2 = t3.tag;
        if (n2 === 13) {
          if (e3 = u2(t3), e3 !== null) return e3;
          e3 = null;
        } else if (n2 === 31) {
          if (e3 = d2(t3), e3 !== null) return e3;
          e3 = null;
        } else if (n2 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e3 = null;
        } else t3 !== e3 && (e3 = null);
      }
    }
    return xh = e3, null;
  }
  function Ch(e3) {
    switch (e3) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `fullscreenerror`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `resize`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (Ze()) {
          case Qe:
            return 2;
          case $e:
            return 8;
          case et:
          case tt:
            return 32;
          case nt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e3, t3) {
    switch (e3) {
      case `focusin`:
      case `focusout`:
        Th = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Eh = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Dh = null;
        break;
      case `pointerover`:
      case `pointerout`:
        Oh.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t3.pointerId);
    }
  }
  function Nh(e3, t3, n2, r3, i2, a3) {
    return e3 === null || e3.nativeEvent !== a3 ? (e3 = { blockedOn: t3, domEventName: n2, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i2] }, t3 !== null && (t3 = Ut(t3), t3 !== null && mh(t3)), e3) : (e3.eventSystemFlags |= r3, t3 = e3.targetContainers, i2 !== null && t3.indexOf(i2) === -1 && t3.push(i2), e3);
  }
  function Ph(e3, t3, n2, r3, i2) {
    switch (t3) {
      case `focusin`:
        return Th = Nh(Th, e3, t3, n2, r3, i2), true;
      case `dragenter`:
        return Eh = Nh(Eh, e3, t3, n2, r3, i2), true;
      case `mouseover`:
        return Dh = Nh(Dh, e3, t3, n2, r3, i2), true;
      case `pointerover`:
        var a3 = i2.pointerId;
        return Oh.set(a3, Nh(Oh.get(a3) || null, e3, t3, n2, r3, i2)), true;
      case `gotpointercapture`:
        return a3 = i2.pointerId, kh.set(a3, Nh(kh.get(a3) || null, e3, t3, n2, r3, i2)), true;
    }
    return false;
  }
  function Fh(e3) {
    var t3 = Ht(e3.target);
    if (t3 !== null) {
      var n2 = l2(t3);
      if (n2 !== null) {
        if (t3 = n2.tag, t3 === 13) {
          if (t3 = u2(n2), t3 !== null) {
            e3.blockedOn = t3, At(e3.priority, function() {
              hh(n2);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = d2(n2), t3 !== null) {
            e3.blockedOn = t3, At(e3.priority, function() {
              hh(n2);
            });
            return;
          }
        } else if (t3 === 3 && n2.stateNode.current.memoizedState.isDehydrated) {
          e3.blockedOn = n2.tag === 3 ? n2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e3.blockedOn = null;
  }
  function Ih(e3) {
    if (e3.blockedOn !== null) return false;
    for (var t3 = e3.targetContainers; 0 < t3.length; ) {
      var n2 = bh(e3.nativeEvent);
      if (n2 === null) {
        n2 = e3.nativeEvent;
        var r3 = new n2.constructor(n2.type, n2);
        kn = r3, n2.target.dispatchEvent(r3), kn = null;
      } else return t3 = Ut(n2), t3 !== null && mh(t3), e3.blockedOn = n2, false;
      t3.shift();
    }
    return true;
  }
  function Lh(e3, t3, n2) {
    Ih(e3) && n2.delete(t3);
  }
  function Rh() {
    wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
  }
  function zh(e3, n2) {
    e3.blockedOn === n2 && (e3.blockedOn = null, wh || (wh = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, Rh)));
  }
  var Bh = null;
  function Vh(e3) {
    Bh !== e3 && (Bh = e3, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
      Bh === e3 && (Bh = null);
      for (var t3 = 0; t3 < e3.length; t3 += 3) {
        var n2 = e3[t3], r3 = e3[t3 + 1], i2 = e3[t3 + 2];
        if (typeof r3 != `function`) {
          if (Sh(r3 || n2) === null) continue;
          break;
        }
        var a3 = Ut(n2);
        a3 !== null && (e3.splice(t3, 3), t3 -= 3, oc(a3, { pending: true, data: i2, method: n2.method, action: r3 }, r3, i2));
      }
    }));
  }
  function Hh(e3) {
    function t3(t4) {
      return zh(t4, e3);
    }
    Th !== null && zh(Th, e3), Eh !== null && zh(Eh, e3), Dh !== null && zh(Dh, e3), Oh.forEach(t3), kh.forEach(t3);
    for (var n2 = 0; n2 < Ah.length; n2++) {
      var r3 = Ah[n2];
      r3.blockedOn === e3 && (r3.blockedOn = null);
    }
    for (; 0 < Ah.length && (n2 = Ah[0], n2.blockedOn === null); ) Fh(n2), n2.blockedOn === null && Ah.shift();
    if (n2 = (e3.ownerDocument || e3).$$reactFormReplay, n2 != null) for (r3 = 0; r3 < n2.length; r3 += 3) {
      var i2 = n2[r3], a3 = n2[r3 + 1], o2 = i2[Nt] || null;
      if (typeof a3 == `function`) o2 || Vh(n2);
      else if (o2) {
        var s3 = null;
        if (a3 && a3.hasAttribute(`formAction`)) {
          if (i2 = a3, o2 = a3[Nt] || null) s3 = o2.formAction;
          else if (Sh(i2) !== null) continue;
        } else s3 = o2.action;
        typeof s3 == `function` ? n2[r3 + 1] = s3 : (n2.splice(r3, 3), r3 -= 3), Vh(n2);
      }
    }
  }
  function Uh() {
    function e3(e4) {
      e4.canIntercept && e4.info === `react-transition` && e4.intercept({ handler: function() {
        return new Promise(function(e5) {
          return i2 = e5;
        });
      }, focusReset: `manual`, scroll: `manual` });
    }
    function t3() {
      i2 !== null && (i2(), i2 = null), r3 || setTimeout(n2, 20);
    }
    function n2() {
      if (!r3 && !navigation.transition) {
        var e4 = navigation.currentEntry;
        e4 && e4.url != null && navigation.navigate(e4.url, { state: e4.getState(), info: `react-transition`, history: `replace` });
      }
    }
    if (typeof navigation == `object`) {
      var r3 = false, i2 = null;
      return navigation.addEventListener(`navigate`, e3), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n2, 100), function() {
        r3 = true, navigation.removeEventListener(`navigate`, e3), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i2 !== null && (i2(), i2 = null);
      };
    }
  }
  function Wh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.render = Wh.prototype.render = function(e3) {
    var t3 = this._internalRoot;
    if (t3 === null) throw Error(s2(409));
    var n2 = t3.current;
    dh(n2, jd(), e3, t3, null, null);
  }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
    var e3 = this._internalRoot;
    if (e3 !== null) {
      this._internalRoot = null;
      var t3 = e3.containerInfo;
      dh(e3.current, 2, null, e3, null, null), zd(), t3[Pt] = null;
    }
  };
  function Gh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.unstable_scheduleHydration = function(e3) {
    if (e3) {
      var t3 = kt();
      e3 = { blockedOn: null, target: e3, priority: t3 };
      for (var n2 = 0; n2 < Ah.length && t3 !== 0 && t3 < Ah[n2].priority; n2++) ;
      Ah.splice(n2, 0, e3), n2 === 0 && Fh(e3);
    }
  };
  var Kh = r2.version;
  if (Kh !== `19.3.0`) throw Error(s2(527, Kh, `19.3.0`));
  D2.findDOMNode = function(e3) {
    var t3 = e3._reactInternals;
    if (t3 === void 0) throw typeof e3.render == `function` ? Error(s2(188)) : (e3 = Object.keys(e3).join(`,`), Error(s2(268, e3)));
    return e3 = p2(t3), e3 = e3 === null ? null : m2(e3), e3 = e3 === null ? null : e3.stateNode, e3;
  };
  var qh = { bundleType: 0, version: `19.3.0`, rendererPackageName: `react-dom`, currentDispatcherRef: E2, reconcilerVersion: `19.3.0` };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber) try {
      at = Jh.inject(qh), ot = Jh;
    } catch {
    }
  }
  e2.createRoot = function(e3, t3) {
    if (!c2(e3)) throw Error(s2(299));
    var n2 = false, r3 = ``, i2 = kc, a3 = Ac, o2 = jc;
    return t3 != null && (true === t3.unstable_strictMode && (n2 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (i2 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (a3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (o2 = t3.onRecoverableError)), t3 = lh(e3, 1, false, null, null, n2, r3, null, i2, a3, o2, Uh), e3[Pt] = t3.current, Wf(e3), new Wh(t3);
  };
})), c = e(((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e3) {
      console.error(e3);
    }
  }
  n2(), t2.exports = s();
})), l = n(), u = c(), d = [{ id: `nursery`, name: `Nursery`, ages: `Ages 3-4`, icon: `leaf`, fromSurah: 78 }, { id: `reception-b`, name: `Reception B`, ages: `Ages 4-5`, icon: `book`, fromSurah: 78 }, { id: `reception-g`, name: `Reception G`, ages: `Ages 4-5`, icon: `leaf2`, fromSurah: 78 }, { id: `year-1b`, name: `Year 1B`, ages: `Ages 5-6`, icon: `quran`, fromSurah: 78 }, { id: `year-1g`, name: `Year 1G`, ages: `Ages 5-6`, icon: `sun`, fromSurah: 78 }, { id: `year-2b`, name: `Year 2B`, ages: `Ages 6-7`, icon: `book`, fromSurah: 1 }, { id: `year-2g`, name: `Year 2G`, ages: `Ages 6-7`, icon: `leaf2`, fromSurah: 1 }, { id: `year-3b`, name: `Year 3B`, ages: `Ages 7-8`, icon: `quran`, fromSurah: 1 }, { id: `year-3g`, name: `Year 3G`, ages: `Ages 7-8`, icon: `sun`, fromSurah: 1 }, { id: `year-4b`, name: `Year 4B`, ages: `Ages 8-9`, icon: `book`, fromSurah: 1 }, { id: `year-4g`, name: `Year 4G`, ages: `Ages 8-9`, icon: `leaf2`, fromSurah: 1 }, { id: `year-5b`, name: `Year 5B`, ages: `Ages 9-10`, icon: `quran`, fromSurah: 1 }, { id: `year-5g`, name: `Year 5G`, ages: `Ages 9-10`, icon: `sun`, fromSurah: 1 }, { id: `year-6b`, name: `Year 6B`, ages: `Ages 10-11`, icon: `book`, fromSurah: 1 }, { id: `year-6g`, name: `Year 6G`, ages: `Ages 10-11`, icon: `leaf2`, fromSurah: 1 }, { id: `year-7b`, name: `Year 7B`, ages: `Ages 11-12`, icon: `quran`, fromSurah: 1 }, { id: `year-7g`, name: `Year 7G`, ages: `Ages 11-12`, icon: `sun`, fromSurah: 1 }], f = Object.fromEntries(d.map((e2) => [e2.id, e2.name])), p = [{ no: 1, name: `Al-Fatihah`, arabic: `الفاتحة`, ayahs: 7 }, { no: 114, name: `An-Nas`, arabic: `الناس`, ayahs: 6 }, { no: 113, name: `Al-Falaq`, arabic: `الفلق`, ayahs: 5 }, { no: 112, name: `Al-Ikhlas`, arabic: `الإخلاص`, ayahs: 4 }, { no: 111, name: `Al-Masad`, arabic: `المسد`, ayahs: 5 }, { no: 110, name: `An-Nasr`, arabic: `النصر`, ayahs: 3 }, { no: 109, name: `Al-Kafirun`, arabic: `الكافرون`, ayahs: 6 }, { no: 108, name: `Al-Kawthar`, arabic: `الكوثر`, ayahs: 3 }, { no: 107, name: `Al-Maun`, arabic: `الماعون`, ayahs: 7 }, { no: 106, name: `Quraysh`, arabic: `قريش`, ayahs: 4 }, { no: 105, name: `Al-Fil`, arabic: `الفيل`, ayahs: 5 }, { no: 104, name: `Al-Humazah`, arabic: `الهمزة`, ayahs: 9 }, { no: 103, name: `Al-Asr`, arabic: `العصر`, ayahs: 3 }, { no: 102, name: `At-Takathur`, arabic: `التكاثر`, ayahs: 8 }, { no: 101, name: `Al-Qariah`, arabic: `القارعة`, ayahs: 11 }, { no: 100, name: `Al-Adiyat`, arabic: `العاديات`, ayahs: 11 }, { no: 99, name: `Az-Zalzalah`, arabic: `الزلزلة`, ayahs: 8 }, { no: 98, name: `Al-Bayyinah`, arabic: `البينة`, ayahs: 8 }, { no: 97, name: `Al-Qadr`, arabic: `القدر`, ayahs: 5 }, { no: 96, name: `Al-Alaq`, arabic: `العلق`, ayahs: 19 }, { no: 95, name: `At-Tin`, arabic: `التين`, ayahs: 8 }, { no: 94, name: `Ash-Sharh`, arabic: `الشرح`, ayahs: 8 }, { no: 93, name: `Ad-Duha`, arabic: `الضحى`, ayahs: 11 }, { no: 92, name: `Al-Layl`, arabic: `الليل`, ayahs: 21 }, { no: 91, name: `Ash-Shams`, arabic: `الشمس`, ayahs: 15 }, { no: 90, name: `Al-Balad`, arabic: `البلد`, ayahs: 20 }, { no: 89, name: `Al-Fajr`, arabic: `الفجر`, ayahs: 30 }, { no: 88, name: `Al-Ghashiyah`, arabic: `الغاشية`, ayahs: 26 }, { no: 87, name: `Al-Ala`, arabic: `الأعلى`, ayahs: 19 }, { no: 86, name: `At-Tariq`, arabic: `الطارق`, ayahs: 17 }, { no: 85, name: `Al-Buruj`, arabic: `البروج`, ayahs: 22 }, { no: 84, name: `Al-Inshiqaq`, arabic: `الانشقاق`, ayahs: 25 }, { no: 83, name: `Al-Mutaffifin`, arabic: `المطففين`, ayahs: 36 }, { no: 82, name: `Al-Infitar`, arabic: `الانفطار`, ayahs: 19 }, { no: 81, name: `At-Takwir`, arabic: `التكوير`, ayahs: 29 }, { no: 80, name: `Abasa`, arabic: `عبس`, ayahs: 42 }, { no: 79, name: `An-Naziat`, arabic: `النازعات`, ayahs: 46 }, { no: 78, name: `An-Naba`, arabic: `النبأ`, ayahs: 40 }, { no: 77, name: `Al-Mursalat`, arabic: `المرسلات`, ayahs: 50 }, { no: 76, name: `Al-Insan`, arabic: `الإنسان`, ayahs: 31 }, { no: 75, name: `Al-Qiyamah`, arabic: `القيامة`, ayahs: 40 }, { no: 74, name: `Al-Muddaththir`, arabic: `المدثر`, ayahs: 56 }, { no: 73, name: `Al-Muzzammil`, arabic: `المزمل`, ayahs: 20 }, { no: 72, name: `Al-Jinn`, arabic: `الجن`, ayahs: 28 }, { no: 71, name: `Nuh`, arabic: `نوح`, ayahs: 28 }, { no: 70, name: `Al-Ma'arij`, arabic: `المعارج`, ayahs: 44 }, { no: 69, name: `Al-Haqqah`, arabic: `الحاقة`, ayahs: 52 }, { no: 68, name: `Al-Qalam`, arabic: `القلم`, ayahs: 52 }, { no: 67, name: `Al-Mulk`, arabic: `الملك`, ayahs: 30 }, { no: 66, name: `At-Tahrim`, arabic: `التحريم`, ayahs: 12 }, { no: 65, name: `At-Talaq`, arabic: `الطلاق`, ayahs: 12 }, { no: 64, name: `At-Taghabun`, arabic: `التغابن`, ayahs: 18 }, { no: 63, name: `Al-Munafiqun`, arabic: `المنافقون`, ayahs: 11 }, { no: 62, name: `Al-Jumu'ah`, arabic: `الجمعة`, ayahs: 11 }, { no: 61, name: `As-Saff`, arabic: `الصف`, ayahs: 14 }, { no: 60, name: `Al-Mumtahanah`, arabic: `الممتحنة`, ayahs: 13 }, { no: 59, name: `Al-Hashr`, arabic: `الحشر`, ayahs: 24 }, { no: 58, name: `Al-Mujadila`, arabic: `المجادلة`, ayahs: 22 }, { no: 57, name: `Al-Hadid`, arabic: `الحديد`, ayahs: 29 }, { no: 56, name: `Al-Waqi'ah`, arabic: `الواقعة`, ayahs: 96 }, { no: 55, name: `Ar-Rahman`, arabic: `الرحمن`, ayahs: 78 }, { no: 54, name: `Al-Qamar`, arabic: `القمر`, ayahs: 55 }, { no: 53, name: `An-Najm`, arabic: `النجم`, ayahs: 62 }, { no: 52, name: `At-Tur`, arabic: `الطور`, ayahs: 49 }, { no: 51, name: `Adh-Dhariyat`, arabic: `الذاريات`, ayahs: 60 }, { no: 50, name: `Qaf`, arabic: `ق`, ayahs: 45 }, { no: 49, name: `Al-Hujurat`, arabic: `الحجرات`, ayahs: 18 }, { no: 48, name: `Al-Fath`, arabic: `الفتح`, ayahs: 29 }, { no: 47, name: `Muhammad`, arabic: `محمد`, ayahs: 38 }, { no: 46, name: `Al-Ahqaf`, arabic: `الأحقاف`, ayahs: 35 }, { no: 45, name: `Al-Jathiyah`, arabic: `الجاثية`, ayahs: 37 }, { no: 44, name: `Ad-Dukhan`, arabic: `الدخان`, ayahs: 59 }, { no: 43, name: `Az-Zukhruf`, arabic: `الزخرف`, ayahs: 89 }, { no: 42, name: `Ash-Shura`, arabic: `الشورى`, ayahs: 53 }, { no: 41, name: `Fussilat`, arabic: `فصلت`, ayahs: 54 }, { no: 40, name: `Ghafir`, arabic: `غافر`, ayahs: 85 }, { no: 39, name: `Az-Zumar`, arabic: `الزمر`, ayahs: 75 }, { no: 38, name: `Sad`, arabic: `ص`, ayahs: 88 }, { no: 37, name: `As-Saffat`, arabic: `الصافات`, ayahs: 182 }, { no: 36, name: `Ya-Sin`, arabic: `يس`, ayahs: 83 }, { no: 35, name: `Fatir`, arabic: `فاطر`, ayahs: 45 }, { no: 34, name: `Saba`, arabic: `سبأ`, ayahs: 54 }, { no: 33, name: `Al-Ahzab`, arabic: `الأحزاب`, ayahs: 73 }, { no: 32, name: `As-Sajdah`, arabic: `السجدة`, ayahs: 30 }, { no: 31, name: `Luqman`, arabic: `لقمان`, ayahs: 34 }, { no: 30, name: `Ar-Rum`, arabic: `الروم`, ayahs: 60 }, { no: 29, name: `Al-Ankabut`, arabic: `العنكبوت`, ayahs: 69 }, { no: 28, name: `Al-Qasas`, arabic: `القصص`, ayahs: 88 }, { no: 27, name: `An-Naml`, arabic: `النمل`, ayahs: 93 }, { no: 26, name: `Ash-Shu'ara`, arabic: `الشعراء`, ayahs: 227 }, { no: 25, name: `Al-Furqan`, arabic: `الفرقان`, ayahs: 77 }, { no: 24, name: `An-Nur`, arabic: `النور`, ayahs: 64 }, { no: 23, name: `Al-Mu'minun`, arabic: `المؤمنون`, ayahs: 118 }, { no: 22, name: `Al-Hajj`, arabic: `الحج`, ayahs: 78 }, { no: 21, name: `Al-Anbiya`, arabic: `الأنبياء`, ayahs: 112 }, { no: 20, name: `Ta-Ha`, arabic: `طه`, ayahs: 135 }, { no: 19, name: `Maryam`, arabic: `مريم`, ayahs: 98 }, { no: 18, name: `Al-Kahf`, arabic: `الكهف`, ayahs: 110 }, { no: 17, name: `Al-Isra`, arabic: `الإسراء`, ayahs: 111 }, { no: 16, name: `An-Nahl`, arabic: `النحل`, ayahs: 128 }, { no: 15, name: `Al-Hijr`, arabic: `الحجر`, ayahs: 99 }, { no: 14, name: `Ibrahim`, arabic: `إبراهيم`, ayahs: 52 }, { no: 13, name: `Ar-Ra'd`, arabic: `الرعد`, ayahs: 43 }, { no: 12, name: `Yusuf`, arabic: `يوسف`, ayahs: 111 }, { no: 11, name: `Hud`, arabic: `هود`, ayahs: 123 }, { no: 10, name: `Yunus`, arabic: `يونس`, ayahs: 109 }, { no: 9, name: `At-Tawbah`, arabic: `التوبة`, ayahs: 129 }, { no: 8, name: `Al-Anfal`, arabic: `الأنفال`, ayahs: 75 }, { no: 7, name: `Al-A'raf`, arabic: `الأعراف`, ayahs: 206 }, { no: 6, name: `Al-An'am`, arabic: `الأنعام`, ayahs: 165 }, { no: 5, name: `Al-Ma'idah`, arabic: `المائدة`, ayahs: 120 }, { no: 4, name: `An-Nisa`, arabic: `النساء`, ayahs: 176 }, { no: 3, name: `Aal-e-Imran`, arabic: `آل عمران`, ayahs: 200 }, { no: 2, name: `Al-Baqarah`, arabic: `البقرة`, ayahs: 286 }];
function m(e2) {
  return p.find((t2) => t2.no === e2);
}
function h(e2) {
  var _a, _b;
  let t2 = (_b = (_a = d.find((t3) => t3.id === e2)) == null ? void 0 : _a.fromSurah) != null ? _b : 78;
  if (t2 <= 1) return p.slice().sort((a3, b3) => a3.no - b3.no);
  return p.filter((e3) => e3.no === 1 || e3.no >= t2);
}
var g = e(((e2) => {
  var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.fragment`);
  function r2(e3, n3, r3) {
    var i2 = null;
    if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r3 = {}, n3) a2 !== `key` && (r3[a2] = n3[a2]);
    else r3 = n3;
    return n3 = r3.ref, { $$typeof: t2, type: e3, key: i2, ref: n3 === void 0 ? null : n3, props: r3 };
  }
  e2.Fragment = n2, e2.jsx = r2, e2.jsxs = r2;
})), _ = e(((e2, t2) => {
  t2.exports = g();
}))();
function v({ size: e2 = 108 }) {
  return (0, _.jsx)(`img`, { src: `/an-nahl-logo.jpg`, alt: `An-Nahl Academy`, width: e2, height: e2, style: { width: e2, height: e2, borderRadius: `50%`, objectFit: `cover`, background: `#fff` } });
}
function y() {
  return (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(`svg`, { className: `leaf-l`, viewBox: `0 0 120 160`, fill: `none`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M18 150c28-38 22-78 8-118 26 18 48 54 44 98-18 8-36 14-52 20Z`, fill: `#7CB342`, opacity: `.9` }), (0, _.jsx)(`path`, { d: `M34 148c22-34 18-70 8-104 20 16 36 46 32 86-14 6-28 12-40 18Z`, fill: `#9CCC65` }), (0, _.jsx)(`path`, { d: `M10 70c18-8 40-6 58 10`, stroke: `#558B2F`, strokeWidth: `2` })] }), (0, _.jsxs)(`svg`, { className: `leaf-r`, viewBox: `0 0 120 160`, fill: `none`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M102 150c-28-38-22-78-8-118-26 18-48 54-44 98 18 8 36 14 52 20Z`, fill: `#7CB342`, opacity: `.9` }), (0, _.jsx)(`path`, { d: `M86 148c-22-34-18-70-8-104-20 16-36 46-32 86 14 6 28 12 40 18Z`, fill: `#AED581` })] })] });
}
function b({ gid: e2 }) {
  return (0, _.jsxs)(`svg`, { viewBox: `0 0 40 70`, fill: `none`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M20 0v10`, stroke: `#C9A227`, strokeWidth: `2` }), (0, _.jsx)(`rect`, { x: `12`, y: `10`, width: `16`, height: `6`, rx: `2`, fill: `#D4AF37` }), (0, _.jsx)(`path`, { d: `M8 18h24l-3 26H11L8 18Z`, fill: `#E8C547` }), (0, _.jsx)(`path`, { d: `M8 18h24l-3 26H11L8 18Z`, fill: `url(#${e2})` }), (0, _.jsx)(`rect`, { x: `11`, y: `44`, width: `18`, height: `5`, rx: `2`, fill: `#C9A227` }), (0, _.jsx)(`path`, { d: `M20 49v8`, stroke: `#C9A227`, strokeWidth: `1.5` }), (0, _.jsx)(`circle`, { cx: `20`, cy: `59`, r: `2`, fill: `#E8C547` }), (0, _.jsx)(`defs`, { children: (0, _.jsxs)(`linearGradient`, { id: e2, x1: `20`, y1: `18`, x2: `20`, y2: `44`, children: [(0, _.jsx)(`stop`, { stopColor: `#FFE08A` }), (0, _.jsx)(`stop`, { offset: `1`, stopColor: `#E09B1A` })] }) })] });
}
function ee() {
  return (0, _.jsxs)(_.Fragment, { children: [(0, _.jsx)(`div`, { className: `lanterns left`, children: (0, _.jsx)(b, { gid: `lanternGoldL` }) }), (0, _.jsx)(`div`, { className: `lanterns right`, children: (0, _.jsx)(b, { gid: `lanternGoldR` }) })] });
}
function te() {
  return (0, _.jsxs)(`svg`, { width: `86`, height: `36`, viewBox: `0 0 86 36`, fill: `none`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M8 34V20l8-6 8 6v14H8Z`, fill: `#d7f3e3`, opacity: `.8` }), (0, _.jsx)(`path`, { d: `M32 34V16c8-10 16-10 24 0v18H32Z`, fill: `#e8fff3` }), (0, _.jsx)(`path`, { d: `M62 34V20l8-6 8 6v14H62Z`, fill: `#d7f3e3`, opacity: `.8` }), (0, _.jsx)(`circle`, { cx: `44`, cy: `10`, r: `3`, fill: `#F4D36A` })] });
}
function ne() {
  return (0, _.jsxs)(`svg`, { className: `land-arch`, viewBox: `0 0 390 280`, preserveAspectRatio: `none`, "aria-hidden": true, children: [(0, _.jsxs)(`defs`, { children: [(0, _.jsxs)(`linearGradient`, { id: `archWash`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [(0, _.jsx)(`stop`, { offset: `0`, stopColor: `#e8f6df` }), (0, _.jsx)(`stop`, { offset: `1`, stopColor: `#fff8ea`, stopOpacity: `0` })] }), (0, _.jsx)(`pattern`, { id: `geom`, width: `28`, height: `28`, patternUnits: `userSpaceOnUse`, children: (0, _.jsx)(`path`, { d: `M14 2l12 12-12 12L2 14Z`, fill: `none`, stroke: `#cfe6b8`, strokeWidth: `.6`, opacity: `.45` }) })] }), (0, _.jsx)(`path`, { d: `M20 280 V92 Q20 18 195 18 Q370 18 370 92 V280Z`, fill: `url(#archWash)` }), (0, _.jsx)(`path`, { d: `M20 280 V92 Q20 18 195 18 Q370 18 370 92 V280Z`, fill: `url(#geom)` }), (0, _.jsx)(`path`, { d: `M20 280 V92 Q20 18 195 18 Q370 18 370 92`, fill: `none`, stroke: `#d7ecc4`, strokeWidth: `2` })] });
}
function x() {
  return (0, _.jsxs)(`div`, { className: `land-vines`, "aria-hidden": true, children: [(0, _.jsxs)(`svg`, { className: `vine vine-tl`, viewBox: `0 0 180 150`, children: [(0, _.jsx)(`path`, { d: `M0 20c40 6 62 28 70 58`, stroke: `#5aa332`, strokeWidth: `3`, fill: `none` }), (0, _.jsx)(`ellipse`, { cx: `28`, cy: `18`, rx: `22`, ry: `12`, fill: `#7CB342`, transform: `rotate(-28 28 18)` }), (0, _.jsx)(`ellipse`, { cx: `52`, cy: `10`, rx: `20`, ry: `11`, fill: `#9CCC65`, transform: `rotate(-12 52 10)` }), (0, _.jsx)(`ellipse`, { cx: `74`, cy: `28`, rx: `18`, ry: `10`, fill: `#8BC34A`, transform: `rotate(18 74 28)` }), (0, _.jsx)(`ellipse`, { cx: `46`, cy: `36`, rx: `16`, ry: `9`, fill: `#AED581`, transform: `rotate(-40 46 36)` }), (0, _.jsx)(`ellipse`, { cx: `88`, cy: `52`, rx: `15`, ry: `8`, fill: `#7CB342`, transform: `rotate(30 88 52)` }), (0, _.jsx)(`ellipse`, { cx: `20`, cy: `40`, rx: `14`, ry: `8`, fill: `#689F38`, transform: `rotate(-55 20 40)` })] }), (0, _.jsxs)(`svg`, { className: `vine vine-tr`, viewBox: `0 0 180 150`, children: [(0, _.jsx)(`path`, { d: `M180 18c-40 6-62 28-70 58`, stroke: `#5aa332`, strokeWidth: `3`, fill: `none` }), (0, _.jsx)(`ellipse`, { cx: `152`, cy: `16`, rx: `22`, ry: `12`, fill: `#7CB342`, transform: `rotate(28 152 16)` }), (0, _.jsx)(`ellipse`, { cx: `128`, cy: `8`, rx: `20`, ry: `11`, fill: `#9CCC65`, transform: `rotate(12 128 8)` }), (0, _.jsx)(`ellipse`, { cx: `106`, cy: `26`, rx: `18`, ry: `10`, fill: `#8BC34A`, transform: `rotate(-18 106 26)` }), (0, _.jsx)(`ellipse`, { cx: `134`, cy: `38`, rx: `16`, ry: `9`, fill: `#AED581`, transform: `rotate(40 134 38)` }), (0, _.jsx)(`ellipse`, { cx: `92`, cy: `50`, rx: `15`, ry: `8`, fill: `#7CB342`, transform: `rotate(-30 92 50)` })] }), (0, _.jsxs)(`svg`, { className: `vine vine-ml`, viewBox: `0 0 90 260`, children: [(0, _.jsx)(`path`, { d: `M8 0c18 40 6 80 18 120 10 34-6 70 10 120`, stroke: `#68a73a`, strokeWidth: `2.4`, fill: `none` }), (0, _.jsx)(`ellipse`, { cx: `22`, cy: `46`, rx: `20`, ry: `11`, fill: `#8BC34A`, transform: `rotate(-35 22 46)` }), (0, _.jsx)(`ellipse`, { cx: `38`, cy: `88`, rx: `16`, ry: `9`, fill: `#AED581`, transform: `rotate(20 38 88)` }), (0, _.jsx)(`ellipse`, { cx: `18`, cy: `128`, rx: `18`, ry: `10`, fill: `#7CB342`, transform: `rotate(-25 18 128)` }), (0, _.jsx)(`ellipse`, { cx: `36`, cy: `168`, rx: `15`, ry: `8`, fill: `#9CCC65`, transform: `rotate(28 36 168)` }), (0, _.jsx)(`ellipse`, { cx: `20`, cy: `210`, rx: `17`, ry: `9`, fill: `#8BC34A`, transform: `rotate(-18 20 210)` }), (0, _.jsx)(`circle`, { cx: `44`, cy: `156`, r: `3.2`, fill: `#F4C430` }), (0, _.jsx)(`circle`, { cx: `48`, cy: `96`, r: `2.6`, fill: `#F6D35A` })] }), (0, _.jsxs)(`svg`, { className: `vine vine-mr`, viewBox: `0 0 90 260`, children: [(0, _.jsx)(`path`, { d: `M82 0c-18 40-6 80-18 120-10 34 6 70-10 120`, stroke: `#68a73a`, strokeWidth: `2.4`, fill: `none` }), (0, _.jsx)(`ellipse`, { cx: `68`, cy: `50`, rx: `20`, ry: `11`, fill: `#8BC34A`, transform: `rotate(35 68 50)` }), (0, _.jsx)(`ellipse`, { cx: `52`, cy: `92`, rx: `16`, ry: `9`, fill: `#AED581`, transform: `rotate(-20 52 92)` }), (0, _.jsx)(`ellipse`, { cx: `72`, cy: `132`, rx: `18`, ry: `10`, fill: `#7CB342`, transform: `rotate(25 72 132)` }), (0, _.jsx)(`ellipse`, { cx: `54`, cy: `174`, rx: `15`, ry: `8`, fill: `#9CCC65`, transform: `rotate(-28 54 174)` }), (0, _.jsx)(`ellipse`, { cx: `70`, cy: `214`, rx: `17`, ry: `9`, fill: `#8BC34A`, transform: `rotate(18 70 214)` }), (0, _.jsx)(`circle`, { cx: `46`, cy: `160`, r: `3.2`, fill: `#F4C430` })] })] });
}
function S({ id: e2 }) {
  return (0, _.jsxs)(`svg`, { viewBox: `0 0 46 86`, fill: `none`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M23 0v12`, stroke: `#C9A227`, strokeWidth: `1.8` }), (0, _.jsx)(`path`, { d: `M16 12h14l2 5H14l2-5Z`, fill: `#D4AF37` }), (0, _.jsx)(`rect`, { x: `14`, y: `8`, width: `18`, height: `5`, rx: `1.4`, fill: `#E8C547` }), (0, _.jsx)(`path`, { d: `M10 18h26l-4 32H14L10 18Z`, fill: `url(#${e2})` }), (0, _.jsx)(`path`, { d: `M16 22v24M23 20v28M30 22v24`, stroke: `#fff4b8`, strokeWidth: `1.2`, opacity: `.55` }), (0, _.jsx)(`rect`, { x: `13`, y: `50`, width: `20`, height: `5`, rx: `1.5`, fill: `#C9A227` }), (0, _.jsx)(`path`, { d: `M23 55v10`, stroke: `#C9A227`, strokeWidth: `1.5` }), (0, _.jsx)(`circle`, { cx: `23`, cy: `68`, r: `2.4`, fill: `#FFE08A` }), (0, _.jsx)(`defs`, { children: (0, _.jsxs)(`linearGradient`, { id: e2, x1: `23`, y1: `18`, x2: `23`, y2: `50`, children: [(0, _.jsx)(`stop`, { stopColor: `#FFE9A8` }), (0, _.jsx)(`stop`, { offset: `1`, stopColor: `#D49212` })] }) })] });
}
function re() {
  return (0, _.jsxs)(_.Fragment, { children: [(0, _.jsx)(`div`, { className: `hang left a`, children: (0, _.jsx)(S, { id: `flA` }) }), (0, _.jsx)(`div`, { className: `hang left b`, children: (0, _.jsx)(S, { id: `flB` }) }), (0, _.jsx)(`div`, { className: `hang right a`, children: (0, _.jsx)(S, { id: `flC` }) }), (0, _.jsx)(`div`, { className: `hang right b`, children: (0, _.jsx)(S, { id: `flD` }) })] });
}
function C({ kind: e2 }) {
  return e2 === `stars` ? (0, _.jsx)(`div`, { className: `glyph`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 64 48`, width: `54`, height: `40`, children: [(0, _.jsx)(`path`, { d: `M8 10l2.1 4.4 4.9.5-3.7 3.2 1.1 4.8L8 20.7 3.6 22.9l1.1-4.8L1 15l4.9-.5Z`, fill: `#F3C32F` }), (0, _.jsx)(`path`, { d: `M32 4l6.4 13 14.4 1.6-10.8 9.4 3.2 14L32 34.2 18.8 42l3.2-14L11.2 18.6 25.6 17Z`, fill: `#F5C230`, stroke: `#E0A41A`, strokeWidth: `1` }), (0, _.jsx)(`path`, { d: `M54 8l2.4 5 5.5.6-4.2 3.6 1.2 5.4L54 19.6 48.9 22.6l1.2-5.4-4.2-3.6 5.5-.6Z`, fill: `#F6D35A` })] }) }) : e2 === `target` ? (0, _.jsx)(`div`, { className: `glyph`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 64 48`, width: `54`, height: `40`, children: [(0, _.jsx)(`circle`, { cx: `30`, cy: `24`, r: `16`, fill: `none`, stroke: `#1B8A4A`, strokeWidth: `3.2` }), (0, _.jsx)(`circle`, { cx: `30`, cy: `24`, r: `9.5`, fill: `none`, stroke: `#1B8A4A`, strokeWidth: `3.2` }), (0, _.jsx)(`circle`, { cx: `30`, cy: `24`, r: `3.4`, fill: `#1B8A4A` }), (0, _.jsx)(`path`, { d: `M42 10l4 1-6 7-4-1Z`, fill: `#F3C32F` }), (0, _.jsx)(`path`, { d: `M54 16l2.2 4.4 4.8.5-3.6 3.2 1 4.7-4.4-2.4-4.4 2.4 1-4.7-3.6-3.2 4.8-.5Z`, fill: `#F6D35A` })] }) }) : (0, _.jsx)(`div`, { className: `glyph`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 64 48`, width: `54`, height: `40`, children: [(0, _.jsx)(`rect`, { x: `14`, y: `26`, width: `8`, height: `14`, rx: `2`, fill: `#1B8A4A` }), (0, _.jsx)(`rect`, { x: `26`, y: `18`, width: `8`, height: `22`, rx: `2`, fill: `#2E9B58` }), (0, _.jsx)(`rect`, { x: `38`, y: `10`, width: `8`, height: `30`, rx: `2`, fill: `#0E7A4B` }), (0, _.jsx)(`path`, { d: `M54 8l2 4.2 4.6.5-3.5 3 .9 4.5L54 18.4 50 20.2l.9-4.5-3.5-3 4.6-.5Z`, fill: `#F3C32F` })] }) });
}
function ie({ kind: e2 }) {
  if (e2 === `leaf`) return (0, _.jsx)(`div`, { className: `class-ico`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 48 40`, width: `34`, height: `30`, children: [(0, _.jsx)(`path`, { d: `M24 34V16`, stroke: `#2E7D32`, strokeWidth: `1.8` }), (0, _.jsx)(`path`, { d: `M24 20c-9-1-14-8-12-16 9 2 13 8 12 16Z`, fill: `#43A047` }), (0, _.jsx)(`path`, { d: `M24 20c9-1 14-8 12-16-9 2-13 8-12 16Z`, fill: `#7CB342` })] }) });
  if (e2 === `book` || e2 === `quran`) {
    let t2 = e2 === `quran` ? `#3D6FB5` : `#E2A21A`;
    return (0, _.jsx)(`div`, { className: `class-ico`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 48 40`, width: `36`, height: `30`, children: [(0, _.jsx)(`path`, { d: `M24 10c-6-4-14-4-18-3v22c5-1 13 0 18 4 5-4 13-5 18-4V7c-4-1-12-1-18 3Z`, fill: t2 }), (0, _.jsx)(`path`, { d: `M24 12c-5-3-12-3-16-2v18c5-1 11 0 16 3V12Z`, fill: e2 === `quran` ? `#E8F0FF` : `#FFF6D8` }), (0, _.jsx)(`path`, { d: `M24 12c5-3 12-3 16-2v18c-5-1-11 0-16 3V12Z`, fill: `#fff` }), (0, _.jsx)(`path`, { d: `M24 12v19`, stroke: t2, strokeWidth: `1.4` })] }) });
  }
  return e2 === `sun` ? (0, _.jsx)(`div`, { className: `class-ico`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 48 40`, width: `36`, height: `30`, children: [(0, _.jsx)(`circle`, { cx: `24`, cy: `20`, r: `9`, fill: `#F5C230` }), (0, _.jsx)(`circle`, { cx: `21`, cy: `18`, r: `1.3`, fill: `#6B4A10` }), (0, _.jsx)(`circle`, { cx: `27`, cy: `18`, r: `1.3`, fill: `#6B4A10` }), (0, _.jsx)(`path`, { d: `M21 23c2 2 4 2 6 0`, stroke: `#6B4A10`, strokeWidth: `1.3`, fill: `none`, strokeLinecap: `round` }), (0, _.jsx)(`g`, { stroke: `#F3C32F`, strokeWidth: `2`, strokeLinecap: `round`, children: (0, _.jsx)(`path`, { d: `M24 6v4M24 30v4M10 20h4M34 20h4M13 10l3 3M32 27l3 3M13 30l3-3M32 13l3-3` }) })] }) }) : (0, _.jsx)(`div`, { className: `class-ico`, children: (0, _.jsxs)(`svg`, { viewBox: `0 0 48 40`, width: `36`, height: `30`, children: [(0, _.jsx)(`path`, { d: `M22 32c-10-2-16-12-14-22 10 3 16 10 14 22Z`, fill: `#3FA344` }), (0, _.jsx)(`path`, { d: `M26 32c10-2 16-12 14-22-10 3-16 10-14 22Z`, fill: `#6FBF44` }), (0, _.jsx)(`path`, { d: `M24 33V16`, stroke: `#2E7D32`, strokeWidth: `1.8` })] }) });
}
function ae() {
  return (0, _.jsxs)(`svg`, { className: `foot-mosque`, viewBox: `0 0 72 40`, width: `56`, height: `32`, "aria-hidden": true, children: [(0, _.jsx)(`path`, { d: `M6 36V22l8-7 8 7v14H6Z`, fill: `none`, stroke: `#d7f3e3`, strokeWidth: `1.7` }), (0, _.jsx)(`path`, { d: `M26 36V18c7-10 15-10 22 0v18`, fill: `none`, stroke: `#e8fff3`, strokeWidth: `1.8` }), (0, _.jsx)(`path`, { d: `M52 36V22l8-7 8 7v14H52Z`, fill: `none`, stroke: `#d7f3e3`, strokeWidth: `1.7` }), (0, _.jsx)(`circle`, { cx: `37`, cy: `10`, r: `2.4`, fill: `#F4D36A` }), (0, _.jsx)(`path`, { d: `M37 8V4`, stroke: `#F4D36A`, strokeWidth: `1.4` })] });
}
function oe() {
  let [e2, t2] = (0, l.useState)(false);
  return (0, _.jsxs)(`div`, { className: `page landing`, children: [(0, _.jsx)(ne, {}), (0, _.jsx)(x, {}), (0, _.jsx)(re, {}), (0, _.jsxs)(`button`, { className: `menu-fab`, "aria-label": `Menu`, onClick: () => t2(true), children: [(0, _.jsx)(`span`, {}), (0, _.jsx)(`span`, {}), (0, _.jsx)(`span`, {})] }), e2 && (0, _.jsx)(`div`, { className: `menu-sheet`, onClick: () => t2(false), children: (0, _.jsxs)(`div`, { className: `menu-card`, onClick: (e3) => e3.stopPropagation(), children: [(0, _.jsx)(`b`, { children: `NAHL Hifz Club` }), (0, _.jsx)(`button`, { onClick: () => {
    t2(false), location.hash = `#/login`;
  }, children: `Student Login` }), (0, _.jsx)(`button`, { onClick: () => {
    t2(false), location.hash = `#/register`;
  }, children: `Create Account` }), (0, _.jsx)(`button`, { onClick: () => {
    t2(false), location.hash = `#/staff`;
  }, children: `Teachers Panel` }), (0, _.jsx)(`button`, { onClick: () => { t2(false); if (window.__nahlTogglePc) window.__nahlTogglePc(); }, children: document.documentElement.classList.contains(`pc`) ? `📱 Mobile Mode` : `🖥️ PC Mode` }), (0, _.jsx)(`button`, { className: `menu-close`, onClick: () => t2(false), children: `Close` })] }) }), (0, _.jsxs)(`div`, { className: `land-hero`, children: [(0, _.jsx)(`div`, { className: `logo-ring`, children: (0, _.jsx)(v, { size: 104 }) }), (0, _.jsxs)(`div`, { className: `script-badge`, children: [`Small`, (0, _.jsx)(`br`, {}), `Steps`, (0, _.jsx)(`br`, {}), (0, _.jsx)(`em`, { children: `Big Rewards` }), (0, _.jsx)(`span`, { className: `heart`, children: `♥` })] })] }), (0, _.jsx)(`h1`, { className: `brand-title`, children: `NAHL Hifz Club` }), (0, _.jsx)(`div`, { className: `subbrand`, children: `An-Nahl Academy` }), (0, _.jsxs)(`div`, { className: `pills fancy`, children: [(0, _.jsx)(`span`, { children: `Revise` }), (0, _.jsx)(`i`, {}), (0, _.jsx)(`span`, { children: `Recite` }), (0, _.jsx)(`i`, {}), (0, _.jsx)(`span`, { children: `Submit` }), (0, _.jsx)(`i`, {}), (0, _.jsx)(`span`, { children: `Shine` })] }), (0, _.jsx)(`p`, { className: `lede`, children: `Building confident, practising and righteous young Muslims through consistent Qur’an memorisation.` }), (0, _.jsxs)(`div`, { className: `pad land-pad`, children: [(0, _.jsxs)(`button`, { className: `btn primary block login-cta`, onClick: () => location.hash = `#/login`, children: [(0, _.jsx)(`svg`, { viewBox: `0 0 24 24`, width: `20`, height: `20`, fill: `currentColor`, "aria-hidden": true, children: (0, _.jsx)(`path`, { d: `M12 12a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 12Zm0 2.2c-3.5 0-8 1.7-8 5.1V21h16v-1.7c0-3.4-4.5-5.1-8-5.1Z` }) }), `Student Login`, (0, _.jsx)(`span`, { className: `cta-arrow`, children: `→` })] }), (0, _.jsxs)(`button`, { className: `btn ghost block create-cta`, onClick: () => location.hash = `#/register`, children: [(0, _.jsx)(`svg`, { viewBox: `0 0 24 24`, width: `22`, height: `22`, fill: `currentColor`, "aria-hidden": true, children: (0, _.jsx)(`path`, { d: `M9.2 12.2A3.8 3.8 0 1 0 9.2 4.6a3.8 3.8 0 0 0 0 7.6Zm7.3-.6a3.2 3.2 0 1 0-3-5 3.2 3.2 0 0 0 3 5ZM9.2 13.8c-3.3 0-7.4 1.6-7.4 4.8V21h14.8v-2.4c0-3.2-4.1-4.8-7.4-4.8Zm7.3.2c-.4 0-.9 0-1.3.1 1.8.9 3 2.3 3 4.5V21h5.2v-1.6c0-2.6-3.2-4.4-6.9-4.4Z` }) }), (0, _.jsxs)(`span`, { children: [(0, _.jsx)(`b`, { children: `Create Account` }), (0, _.jsx)(`small`, { children: `Join our Hifz journey` })] })] }), (0, _.jsxs)(`div`, { className: `feature-grid land-features`, children: [(0, _.jsxs)(`div`, { className: `feature`, children: [(0, _.jsx)(C, { kind: `stars` }), (0, _.jsx)(`b`, { children: `Earn Stars` }), (0, _.jsx)(`p`, { children: `For your progress and good habits` })] }), (0, _.jsxs)(`div`, { className: `feature`, children: [(0, _.jsx)(C, { kind: `target` }), (0, _.jsx)(`b`, { children: `Today’s Target` }), (0, _.jsx)(`p`, { children: `Stay consistent every day` })] }), (0, _.jsxs)(`div`, { className: `feature`, children: [(0, _.jsx)(C, { kind: `journey` }), (0, _.jsx)(`b`, { children: `My Hifz Journey` }), (0, _.jsx)(`p`, { children: `Track your progress` })] })] }), (0, _.jsxs)(`div`, { className: `section-h land-section`, children: [(0, _.jsx)(`span`, { className: `sec-leaf` }), (0, _.jsx)(`h3`, { children: `Our Classes` }), (0, _.jsx)(`span`, { className: `sec-leaf flip` })] }), (0, _.jsxs)(`p`, { className: `hint`, children: [`Age-appropriate groups with expert guidance`, (0, _.jsx)(`br`, {}), `and a supportive environment`] }), (0, _.jsxs)(`div`, { className: `class-marquee`, children: [(0, _.jsx)(`div`, { className: `mq-row`, children: (0, _.jsx)(`div`, { className: `mq-track`, children: [...d.slice(0, 9), ...d.slice(0, 9)].map((e3, i3) => (0, _.jsxs)(`div`, { className: `class-card tone-${e3.id}`, children: [(0, _.jsx)(ie, { kind: e3.icon }), (0, _.jsx)(`b`, { children: e3.name }), (0, _.jsx)(`small`, { children: e3.ages })] }, e3.id + `-` + i3)) }) }), (0, _.jsx)(`div`, { className: `mq-row`, children: (0, _.jsx)(`div`, { className: `mq-track mq-track2`, children: [...d.slice(9), ...d.slice(9)].map((e3, i3) => (0, _.jsxs)(`div`, { className: `class-card tone-${e3.id}`, children: [(0, _.jsx)(ie, { kind: e3.icon }), (0, _.jsx)(`b`, { children: e3.name }), (0, _.jsx)(`small`, { children: e3.ages })] }, e3.id + `-` + i3)) }) })] }), (0, _.jsxs)(`button`, { className: `btn ghost block explore-cta`, onClick: () => location.hash = `#/register`, children: [(0, _.jsx)(`svg`, { viewBox: `0 0 24 24`, width: `20`, height: `20`, fill: `currentColor`, "aria-hidden": true, children: (0, _.jsx)(`path`, { d: `M6 4.5h11.2A1.8 1.8 0 0 1 19 6.3v13.2l-7-2.4-7 2.4V6.3A1.8 1.8 0 0 1 6.8 4.5H6Zm.8 1.6v11.4l5.2-1.8 5.2 1.8V6.1H6.8Z` }) }), `Explore Our Classes`, (0, _.jsx)(`span`, { className: `cta-arrow`, children: `→` })] })] }), (0, _.jsxs)(`div`, { className: `wave-foot land-foot`, children: [(0, _.jsx)(ae, {}), (0, _.jsxs)(`div`, { className: `foot-copy`, children: [(0, _.jsx)(`h4`, { children: `A Brighter Tomorrow` }), (0, _.jsx)(`p`, { children: `Through Allah’s Guidance` })] }), (0, _.jsx)(`span`, { className: `foot-leaves`, "aria-hidden": true })] }), (0, _.jsxs)(`footer`, { className: `site-credit`, children: [(0, _.jsx)(`span`, { className: `credit-leaf`, children: `🌿` }), (0, _.jsxs)(`p`, { children: [`Concept & Development by `, (0, _.jsx)(`b`, { children: `Ustad Shoriful Islam` })] }), (0, _.jsx)(`small`, { children: `(Head of Shariah, An-Nahl Academy)` })] })] });
}
var w = { students: `nahl.students`, subs: `nahl.subs`, notes: `nahl.notes`, session: `nahl.session`, staffPass: `nahl.staffPass` };
function se(e2, t2) {
  try {
    let n2 = localStorage.getItem(e2);
    return n2 ? JSON.parse(n2) : t2;
  } catch {
    return t2;
  }
}
function slim(v2) {
  if (Array.isArray(v2)) return v2.map((x2) => x2 && x2.photo && String(x2.photo).length > 6e4 ? { ...x2, photo: null } : x2);
  if (v2 && v2.photo && String(v2.photo).length > 6e4) return { ...v2, photo: null };
  return v2;
}
function ce(e2, t2) {
  let raw = JSON.stringify(t2);
  try {
    localStorage.setItem(e2, raw);
  } catch (err) {
    try {
      localStorage.setItem(e2, JSON.stringify(slim(t2)));
    } catch (e22) {
      console.error(e22);
      window.alert("Photo is too large for this phone. Choose a smaller photo.");
    }
  }
  try {
    window.nahlPush && window.nahlPush(e2, slim(t2));
  } catch (err) {
    console.error(err);
  }
}
function le() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random();
}
function T(e2) {
  return String(e2 || "NA").slice(0, 2).toUpperCase();
}
function ue(e2) {
  let t2 = se(w.students, []);
  return e2 ? t2.filter((t3) => t3.classId === e2) : t2;
}
function de(e2) {
  return ue().find((t2) => t2.id === e2);
}
async function fe(e2) {
  let t2 = e2.nickname.trim(), n2 = e2.pin.trim();
  if (!t2) throw Error(`Choose a nickname`);
  if (!/^\d{4}$/.test(n2)) throw Error(`PIN must be 4 digits`);
  let r2 = ue();
  if (r2.some((e3) => e3.nickname.toLowerCase() === t2.toLowerCase())) throw Error(`This Student ID is already taken`);
  let i2 = { id: le(), nickname: t2, classId: e2.classId, pin: n2, photo: e2.photo || null, stars: 0, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  return ce(w.students, [...r2, i2]), ce(w.session, { role: `student`, studentId: i2.id }), i2;
}
async function pe(e2, t2) {
  let n2 = ue().find((t3) => t3.nickname.toLowerCase() === e2.trim().toLowerCase());
  if (!n2 || n2.pin !== t2.trim()) throw Error(`Nickname or PIN is incorrect`);
  return ce(w.session, { role: `student`, studentId: n2.id }), n2;
}
function me() {
  return se(w.session, null);
}
function he() {
  localStorage.removeItem(w.session);
}
async function ge(e2, t2) {
  let n2 = e2.trim().toLowerCase();
  if (!n2.includes(`@`)) throw Error(`Enter a Gmail address`);
  let r2 = se(w.staffPass, null);
  if (!r2) {
    if (!/[a-z]/.test(t2) || (t2.match(/\d/g) || []).length < 4) throw Error(`Password: lowercase letters + at least 4 digits`);
    ce(w.staffPass, t2);
  } else if (t2 !== r2) throw Error(`Wrong password`);
  let i2 = n2.startsWith(`admin@`) ? `admin` : `teacher`, a2 = n2.split(`@`)[0].replace(/\./g, ` `), o2 = { role: i2, name: a2[0].toUpperCase() + a2.slice(1), email: n2 };
  return ce(w.session, o2), o2;
}
function _e() {
  return se(w.subs, []).filter((e2) => e2 && e2.id).sort((e2, t2) => String(t2.createdAt || "").localeCompare(String(e2.createdAt || "")));
}
async function fileToData(file) {
  return new Promise((res, rej) => {
    let r2 = new FileReader();
    r2.onload = () => res(String(r2.result));
    r2.onerror = rej;
    r2.readAsDataURL(file);
  });
}
function askDrive(payload) {
  return new Promise(function(resolve, reject) {
    let url = window.NAHL_DRIVE_URL;
    let mark = "u" + Date.now() + Math.random().toString(36).slice(2);
    payload.tokenMark = mark;
    let frame = document.createElement("iframe");
    frame.name = "nahlUp" + mark;
    frame.style.display = "none";
    document.body.appendChild(frame);
    let form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = frame.name;
    let input = document.createElement("textarea");
    input.name = "payload";
    input.value = JSON.stringify(payload);
    form.appendChild(input);
    document.body.appendChild(form);
    let done = false;
    let timer = setTimeout(function() {
      if (done) return;
      done = true;
      cleanup();
      reject(Error("Drive did not reply"));
    }, 2e4);
    function onMsg(e2) {
      let d2 = e2.data;
      if (!d2 || d2.tokenMark !== mark) return;
      if (done) return;
      done = true;
      cleanup();
      resolve(d2);
    }
    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("message", onMsg);
      form.remove();
      frame.remove();
    }
    window.addEventListener("message", onMsg);
    form.submit();
  });
}
function showUp(p2) {
  let box = document.getElementById("nahl-up");
  if (!box) {
    box = document.createElement("div");
    box.id = "nahl-up";
    box.style.cssText = "position:fixed;left:16px;right:16px;bottom:84px;z-index:80;background:#14532d;color:#fff;border-radius:16px;padding:12px 14px;font:600 14px Figtree,sans-serif";
    document.body.appendChild(box);
  }
  box.textContent = p2;
}
function hideUp() {
  let box = document.getElementById("nahl-up");
  if (box) box.remove();
}
function uploadClip(file) {
  return new Promise(function(resolve, reject) {
    let c2 = window.NAHL_CLOUD || {};
    if (!c2.cloud || !c2.preset || !file) return resolve(null);
    showUp("Uploading 0%");
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", c2.preset);
    xhr.open("POST", "https://api.cloudinary.com/v1_1/" + c2.cloud + "/video/upload");
    xhr.upload.onprogress = function(e2) {
      if (e2.lengthComputable) {
        let p2 = Math.round(e2.loaded / e2.total * 100);
        showUp(p2 >= 100 ? "Saving..." : "Uploading " + p2 + "%");
      }
    };
    xhr.onload = function() {
      hideUp();
      if (xhr.status >= 300) return reject(Error("Upload failed"));
      try {
        let j = JSON.parse(xhr.responseText);
        resolve({ url: j.secure_url, publicId: j.public_id || "" });
      } catch (err) {
        reject(err);
      }
    };
    xhr.onerror = function() {
      hideUp();
      reject(Error("Upload failed"));
    };
    xhr.send(fd);
  });
}
async function sendClip(x2, h2, onSend, clear, mark) {
  try {
    let clip = Object.assign({}, h2);
    if (h2.file) {
      let drive = await uploadClip(h2.file);
      if (drive) {
        clip.mediaUrl = drive.url || drive;
        clip.publicId = drive.publicId || "";
        clip.mediaHost = "cloudinary";
      } else if (h2.file.size <= 7e5) {
        clip.mediaUrl = await fileToData(h2.file);
      } else {
        clip.mediaUrl = null;
        clip.mediaPending = true;
      }
    }
    delete clip.file;
    onSend(x2.surah.no, clip);
    clear(null);
    mark(true);
  } catch (err) {
    alert(err.message || "Could not send clip");
  }
}
function ve(e2, t2, n2) {
  let already = _e().some((s2) => s2.studentId === e2 && s2.surahNo === t2 && Date.now() - new Date(s2.createdAt).getTime() < 864e5);
  let mediaUrl = (n2 == null ? void 0 : n2.mediaUrl) || null;
  if (mediaUrl && (String(mediaUrl).indexOf("blob:") === 0 || String(mediaUrl).length > 8e5)) mediaUrl = null;
  let r2 = { id: le(), studentId: e2, surahNo: t2, status: `pending`, createdAt: (/* @__PURE__ */ new Date()).toISOString(), mediaType: (n2 == null ? void 0 : n2.mediaType) || null, mediaUrl, mediaName: (n2 == null ? void 0 : n2.mediaName) || null };
  ce(w.subs, [r2, ..._e()]);
  return r2;
}
function purgeOld() {
  let cut = Date.now() - 2592e5;
  let a2 = _e().filter((e2) => !(e2.status !== `pending` && e2.reviewedAt && new Date(e2.reviewedAt).getTime() < cut));
  if (a2.length !== _e().length) ce(w.subs, a2);
}
function boardWin() {
  return Date.now() - 864e5;
}
function boardStars(id) {
  let cut = boardWin();
  return _e().reduce(function(n2, x2) {
    if (x2.studentId !== id || x2.status !== "approved") return n2;
    let t2 = new Date(x2.reviewedAt || x2.createdAt).getTime();
    return t2 >= cut ? n2 + 2 + (Number(x2.stars) || 0) : n2;
  }, 0);
}
function boardCnt(id) {
  let cut = boardWin();
  return _e().reduce(function(n2, x2) {
    if (x2.studentId !== id || x2.status !== "approved") return n2;
    let t2 = new Date(x2.reviewedAt || x2.createdAt).getTime();
    return t2 >= cut ? n2 + 1 : n2;
  }, 0);
}
function playUrl(url, type) {
  if (!url) return "";
  let u2 = String(url);
  if (u2.indexOf("res.cloudinary.com") < 0) return u2;
  let m2 = u2.match(/^([^?#]*)([?#].*)?$/);
  let path = m2[1], suf = m2[2] || "";
  let last = path.slice(path.lastIndexOf("/") + 1);
  let strong = /\.(mp3|m4a|aac|wav|ogg|oga|opus|amr|3gp|3gpp|flac|caf|wma|aif|aiff)$/i.test(last);
  let amb = /\.(webm|mp4|mov|mkv)$/i.test(last);
  if (!(type === "audio" || strong || type !== "video" && amb)) return u2;
  if (path.indexOf("f_mp3") < 0) path = path.replace("/video/upload/", "/video/upload/f_mp3,br_64k/");
  if (/\.[a-z0-9]+$/i.test(last)) path = path.replace(/\.[a-z0-9]+$/i, ".mp3");
  else path = path + ".mp3";
  return path + suf;
}
function publicIdFromUrl(url) {
  if (!url || String(url).indexOf("res.cloudinary.com") < 0) return "";
  let p2 = String(url).split("/upload/")[1] || "";
  p2 = p2.replace(/^v\d+\//, "");
  return p2.replace(/\.[a-z0-9]+$/i, "");
}
function deleteCloudVideo(id) {
  let url = window.NAHL_DELETE_URL;
  if (!url || !id) return;
  fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ public_id: id }) }).catch(function() {
  });
}
function ye(e2, t2, n2, r2, i2) {
  let before = _e().find((x2) => x2.id === e2);
  let a2 = _e().map((a3) => a3.id === e2 ? { ...a3, status: t2, note: n2, stars: r2, reviewedBy: i2, reviewedAt: (/* @__PURE__ */ new Date()).toISOString(), mediaUrl: t2 === "approved" || t2 === "revision" ? null : a3.mediaUrl } : a3);
  ce(w.subs, a2);
  if (before && (t2 === "approved" || t2 === "revision")) deleteCloudVideo(before.publicId || publicIdFromUrl(before.mediaUrl));
  if (before && (t2 === `approved` || t2 === `revision`)) {
    let delta = 0;
    if (t2 === `revision` && before.status === `approved`) delta = -2;
    if (t2 === `approved` && before.status !== `approved`) delta = 2;
    delta += t2 === `approved` ? Number(r2) || 0 : 0;
    if (delta) {
      let kids = se(w.students, []).map((st) => st.id === before.studentId ? { ...st, stars: Math.max(0, (Number(st.stars) || 0) + delta) } : st);
      ce(w.students, kids);
    }
  }
}
function tracker() {
  let x2 = se("nahl.tracker", []);
  return Array.isArray(x2) ? x2 : [];
}
function addTracker(e2) {
  let row = { id: le(), studentId: e2.studentId, date: e2.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), surah: e2.surah || "", verseFrom: e2.verseFrom || "", verseTo: e2.verseTo || "", target: e2.target || "", activity: e2.activity || "Memorisation", actual: e2.actual || "", recent: e2.recent || "", older: e2.older || "", accuracy: e2.accuracy || "", status: e2.status || "Not Started", note: e2.note || "", createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  return ce("nahl.tracker", [row, ...tracker()]), row;
}
function updateTracker(id, e2) {
  ce("nahl.tracker", tracker().map((r2) => r2.id === id ? { ...r2, ...e2, id: r2.id, studentId: r2.studentId, date: r2.date } : r2));
}
function deleteTracker(id) {
  ce("nahl.tracker", tracker().filter((r2) => r2.id !== id));
}
function saveMe(patch) {
  let cur = me();
  if (!cur) return;
  ce(w.session, { ...cur, ...patch });
  if (cur.teacherId) ce("nahl.teachers", teachers().map((x2) => x2.id === cur.teacherId ? { ...x2, ...patch } : x2));
}
function deleteTeacher(id) {
  ce("nahl.teachers", teachers().filter((t2) => t2.id !== id));
}
function adminAddTeacher(e2) {
  let n2 = (e2.name || "").trim(), pin = (e2.pin || "").trim(), mail = (e2.email || "").trim().toLowerCase();
  if (!n2 || !/^[^\s@]+@gmail\.com$/.test(mail) || !/^\d{4}$/.test(pin)) throw Error("Name, Gmail and 4-digit PIN required");
  let all = teachers();
  if (all.some((t2) => t2.email === mail || t2.name.toLowerCase() === n2.toLowerCase())) throw Error("Name or Gmail already used");
  let rec = { id: le(), name: n2, email: mail, classId: e2.classId, pin, photo: null, gender: e2.gender || "male", title: e2.gender === "female" ? "Ustaza" : "Ustad", createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  ce("nahl.teachers", [...all, rec]);
  return rec;
}
function adminAddStudent(e2) {
  let name = (e2.nickname || "").trim(), pin = (e2.pin || "").trim();
  if (!name || !/^\d{4}$/.test(pin)) throw Error("Name and 4-digit PIN required");
  let all = ue();
  if (all.some((s2) => s2.nickname.toLowerCase() === name.toLowerCase())) throw Error("Student name already used");
  let rec = { id: le(), nickname: name, classId: e2.classId, pin, photo: null, stars: 0, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  ce(w.students, [...all, rec]);
  return rec;
}
function saveStudent(id, patch) {
  ce(w.students, ue().map((s2) => s2.id === id ? { ...s2, ...patch } : s2));
}
function removeStudent(id) {
  ce(w.students, ue().filter((s2) => s2.id !== id));
  ce(w.subs, se(w.subs, []).filter((s2) => s2.studentId !== id));
  ce("nahl.tracker", tracker().filter((r2) => r2.studentId !== id));
}
function be() {
  return se(w.notes, []);
}
function xe(e2) {
  let t2 = { ...e2, id: le(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  ce(w.notes, [t2, ...be()]);
}
function resetStudentPin(e2, t2) {
  if (!/^\d{4}$/.test(t2)) throw Error("PIN must be 4 digits");
  ce(w.students, ue().map((n2) => n2.id === e2 ? { ...n2, pin: t2 } : n2));
}
function assignStudent(e2, t2) {
  ce(w.students, ue().map((n2) => n2.id === e2 ? { ...n2, teacherId: t2 || null } : n2));
}
function Se(e2) {
  let t2 = h(e2.classId), n2 = _e().filter((t3) => t3.studentId === e2.id);
  return t2.map((e3) => {
    let t3 = n2.find((t4) => t4.surahNo === e3.no);
    if (!t3) return { surah: e3, status: `ready`, last: t3 };
    let stamp = t3.status === `approved` && t3.reviewedAt ? t3.reviewedAt : t3.createdAt;
    return Date.now() - new Date(stamp).getTime() >= 864e5 ? { surah: e3, status: `ready`, last: t3 } : { surah: e3, status: t3.status || `ready`, last: t3 };
  });
}
function Ce(e2, t2) {
  let n2 = ue().map((n3) => n3.id === e2 ? { ...n3, photo: t2 } : n3);
  return ce(w.students, n2), n2.find((t3) => t3.id === e2);
}
function we(e2) {
  return new Promise((t2, n2) => {
    let r2 = new Image(), i2 = URL.createObjectURL(e2);
    r2.onload = () => {
      let e3 = document.createElement(`canvas`);
      e3.width = 256, e3.height = 256;
      let a2 = e3.getContext(`2d`);
      if (!a2) {
        URL.revokeObjectURL(i2), n2(Error(`Could not read photo`));
        return;
      }
      let o2 = Math.min(r2.width, r2.height), s2 = (r2.width - o2) / 2, c2 = (r2.height - o2) / 2;
      a2.drawImage(r2, s2, c2, o2, o2, 0, 0, 256, 256), URL.revokeObjectURL(i2), t2(e3.toDataURL(`image/jpeg`, 0.82));
    }, r2.onerror = () => {
      URL.revokeObjectURL(i2), n2(Error(`Could not read photo`));
    }, r2.src = i2;
  });
}
function E({ mode: e2, onDone: t2 }) {
  let [n2, r2] = (0, l.useState)(e2), [i2, a2] = (0, l.useState)(``), [o2, s2] = (0, l.useState)(``), [c2, u2] = (0, l.useState)(false), [f2, p2] = (0, l.useState)(`reception-b`), [m2, h2] = (0, l.useState)(null), [g2, b2] = (0, l.useState)(``), [ne2, x2] = (0, l.useState)(false);
  async function S2() {
    b2(``), x2(true);
    try {
      n2 === `login` ? await pe(i2, o2) : await fe({ nickname: i2, classId: f2, pin: o2, photo: m2 }), t2();
    } catch (e3) {
      b2(e3.message);
    } finally {
      x2(false);
    }
  }
  return (0, _.jsxs)(`div`, { className: `page hero-skin`, children: [(0, _.jsx)(y, {}), (0, _.jsx)(ee, {}), (0, _.jsx)(`button`, { type: `button`, className: `logo-wrap logo-home`, onClick: () => {
    location.hash = `#/`;
  }, "aria-label": `Home`, children: (0, _.jsx)(v, {}) }), (0, _.jsx)(`div`, { className: `subbrand`, style: { marginTop: 8 }, children: `Welcome to` }), (0, _.jsx)(`h1`, { className: `brand-title`, style: { fontSize: 30 }, children: `NAHL Hifz Club` }), (0, _.jsx)(`div`, { className: `subbrand`, children: `An-Nahl Academy` }), (0, _.jsxs)(`div`, { className: `pills`, children: [(0, _.jsx)(`span`, { children: `Revise` }), (0, _.jsx)(`span`, { children: `Recite` }), (0, _.jsx)(`span`, { children: `Submit` }), (0, _.jsx)(`span`, { children: `Shine` })] }), (0, _.jsxs)(`div`, { className: `pad`, children: [(0, _.jsxs)(`div`, { className: `card`, children: [(0, _.jsxs)(`div`, { className: `tabs`, children: [(0, _.jsx)(`button`, { className: n2 === `login` ? `on` : ``, onClick: () => r2(`login`), children: `👤 Login` }), (0, _.jsx)(`button`, { className: n2 === `register` ? `on` : ``, onClick: () => r2(`register`), children: `👤+ Create Account` })] }), g2 && (0, _.jsx)(`div`, { className: `err`, style: { marginBottom: 10 }, children: g2 }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Student ID` }), (0, _.jsx)(`input`, { value: i2, onChange: (e3) => a2(e3.target.value), placeholder: n2 === `register` ? `Choose a nickname` : `Enter your Student ID` })] }), n2 === `register` && (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Select your class` }), (0, _.jsx)(`select`, { value: f2, onChange: (e3) => p2(e3.target.value), children: d.map((e3) => (0, _.jsxs)(`option`, { value: e3.id, children: [e3.name, ` · `, e3.ages] }, e3.id)) })] }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Profile picture` }), (0, _.jsxs)(`label`, { className: `photo-picker${m2 ? ` has` : ``}`, children: [(0, _.jsx)(`input`, { type: `file`, accept: `image/*`, onChange: async (e3) => {
    var _a;
    let t3 = (_a = e3.target.files) == null ? void 0 : _a[0];
    if (t3) try {
      h2(await we(t3));
    } catch {
      b2(`Could not read that photo`);
    }
  } }), (0, _.jsx)(`span`, { className: `photo-preview`, children: m2 ? (0, _.jsx)(`img`, { src: m2, alt: `` }) : (0, _.jsxs)(`svg`, { viewBox: `0 0 24 24`, width: `22`, height: `22`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, children: [(0, _.jsx)(`path`, { d: `M4.8 19.2h14.4A1.8 1.8 0 0 0 21 17.4V8.7a1.8 1.8 0 0 0-1.8-1.8h-3.1l-1.2-2.1H9.1L7.9 6.9H3.8A1.8 1.8 0 0 0 2 8.7v8.7a1.8 1.8 0 0 0 1.8 1.8Z` }), (0, _.jsx)(`circle`, { cx: `12`, cy: `13.1`, r: `3.2` })] }) }), (0, _.jsxs)(`span`, { className: `photo-meta`, children: [(0, _.jsx)(`b`, { children: m2 ? `Photo added` : `Add photo` }), (0, _.jsx)(`small`, { children: m2 ? `Tap to change` : `Optional` })] }), (0, _.jsx)(`span`, { className: `photo-action`, children: m2 ? `Change` : `Upload` })] })] })] }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `4-digit PIN` }), (0, _.jsxs)(`div`, { style: { display: `flex`, gap: 8 }, children: [(0, _.jsx)(`input`, { style: { flex: 1 }, type: c2 ? `text` : `password`, inputMode: `numeric`, maxLength: 4, value: o2, onChange: (e3) => s2(e3.target.value.replace(/\D/g, ``).slice(0, 4)), placeholder: `Enter your 4-digit PIN` }), (0, _.jsx)(`button`, { className: `btn ghost`, type: `button`, onClick: () => u2((e3) => !e3), children: c2 ? `Hide` : `Show` })] })] }), (0, _.jsx)(`button`, { className: `btn primary block`, disabled: ne2, onClick: S2, children: ne2 ? `Please wait…` : n2 === `login` ? `→ Login` : `Create Account` }), (0, _.jsxs)(`div`, { className: `row-between`, style: { marginTop: 10 }, children: [(0, _.jsxs)(`label`, { className: `check`, children: [(0, _.jsx)(`input`, { type: `checkbox`, defaultChecked: true }), ` Remember me`] }), (0, _.jsx)(`span`, { children: `Forgot PIN? Ask teacher` })] })] }), (0, _.jsx)(`p`, { className: `hint tagline-script`, style: { marginTop: 14, fontFamily: `var(--script)`, fontSize: 22, color: `var(--navy)` }, children: `Small Steps · Big Rewards 💛` }), (0, _.jsxs)(`div`, { className: `quote`, children: [(0, _.jsx)(`div`, { children: `📖` }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`p`, { children: `“And We have certainly made the Qur’an easy for remembrance.”` }), (0, _.jsx)(`small`, { children: `Surah Al-Qamar (54:17)` })] })] }), (0, _.jsxs)(`a`, { className: `teacher-panel-link`, href: `#/staff`, children: [(0, _.jsx)(`span`, { className: `tp-ico`, children: `✦` }), `Teachers Panel`, (0, _.jsx)(`span`, { className: `tp-arrow`, children: `→` })] })] }), (0, _.jsxs)(`div`, { className: `wave-foot`, children: [(0, _.jsx)(te, {}), (0, _.jsx)(`h4`, { children: `Need help?` }), (0, _.jsx)(`p`, { children: `Contact your class teacher.` })] }), (0, _.jsxs)(`footer`, { className: `site-credit`, children: [(0, _.jsx)(`span`, { className: `credit-leaf`, children: `🌿` }), (0, _.jsxs)(`p`, { children: [`Concept & Development by `, (0, _.jsx)(`b`, { children: `Ustad Shoriful Islam` })] }), (0, _.jsx)(`small`, { children: `(Head of Shariah, An-Nahl Academy)` })] })] });
}
function D(e2) {
  return e2 === `approved` ? `Approved` : e2 === `pending` ? `Pending` : e2 === `revision` ? `Revision` : `Ready`;
}
function Te({ onOut: e2 }) {
  let t2 = me(), n2 = (t2 == null ? void 0 : t2.role) === `student` ? de(t2.studentId) : null, [r2, i0] = (0, l.useState)(sessionStorage.getItem("nahl.tab") || `home`), i2 = (v2) => {
    sessionStorage.setItem("nahl.tab", v2);
    i0(v2);
  }, [, a2] = (0, l.useState)(0), [o2, s2] = (0, l.useState)(false), [tr, setTr] = (0, l.useState)({ surah: "", from: "", to: "", activity: "Memorisation", status: "Not Started", accuracy: "", note: "" }), [tb, setTb] = (0, l.useState)(0), [ed, setEd] = (0, l.useState)(null);
  if (!n2) return location.hash = `#/login`, null;
  let c2 = Se(n2), u2 = c2.filter((e3) => e3.status === `approved`).length, d2 = c2.find((e3) => e3.status !== `approved`) || c2[0], p2 = ue(n2.classId).slice().sort((e3, t3) => t3.stars - e3.stars), m2 = (function() {
    var d3 = /* @__PURE__ */ new Date();
    return d3.getFullYear() + "-" + String(d3.getMonth() + 1).padStart(2, "0") + "-" + String(d3.getDate()).padStart(2, "0");
  })(), h2 = _e().filter((e3) => e3.studentId === n2.id && (function(v2) {
    var d3 = new Date(v2);
    return d3.getFullYear() + "-" + String(d3.getMonth() + 1).padStart(2, "0") + "-" + String(d3.getDate()).padStart(2, "0");
  })(e3.createdAt) === m2).length, g2 = Math.max(1, Math.floor((Date.now() - new Date(n2.createdAt).getTime()) / 864e5) + 1);
  function y2() {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(n2.nickname).catch(() => {
    }), s2(true), setTimeout(() => s2(false), 1600);
  }
  return (0, _.jsxs)(`div`, { className: `page student`, children: [(0, _.jsxs)(`div`, { className: `acct-top`, children: [(0, _.jsxs)(`div`, { className: `mini`, children: [(0, _.jsx)(v, { size: 40 }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`b`, { children: `NAHL Hifz Club` }), (0, _.jsx)(`small`, { children: `AN-NAHL ACADEMY KHULNA` })] })] }), (0, _.jsxs)(`div`, { className: `acct-icons`, children: [(0, _.jsx)(`button`, { title: `Home`, className: `ico-home${r2 === `home` ? ` on` : ``}`, onClick: () => i2(`home`), children: `🏠` }), (0, _.jsx)(`button`, { title: `Daily Hifz Tracker`, className: `ico-clip${r2 === `tracker` ? ` on` : ``}`, onClick: () => i2(`tracker`), children: `📘` }), (0, _.jsx)(`button`, { title: `Stars`, className: `ico-star${r2 === `board` ? ` on` : ``}`, onClick: () => i2(`board`), children: `⭐` }), (0, _.jsx)(`button`, { className: `photo-btn`, onClick: () => i2(`me`), children: n2.photo ? (0, _.jsx)(`img`, { src: n2.photo, alt: `` }) : (0, _.jsx)(`span`, { children: T(n2.nickname) }) })] })] }), r2 === `tracker` && (0, _.jsx)(`div`, { className: `pad`, children: (0, _.jsxs)(`section`, { className: `hifz-track`, children: [(0, _.jsxs)(`div`, { className: `hifz-track-head`, children: [(0, _.jsx)(`small`, { children: `DAILY HIFZ TRACKER` }), (0, _.jsx)(`h3`, { children: n2.nickname })] }), (0, _.jsx)(`div`, { className: `hifz-track-sub`, children: `Target: one surah a day, revise and recite with care` }), (0, _.jsxs)(`div`, { className: `hifz-form`, children: [(0, _.jsx)(`label`, { children: `Surah` }), (0, _.jsx)(`input`, { placeholder: `Al-Fatihah`, value: tr.surah, onChange: (ev) => setTr({ ...tr, surah: ev.target.value }) }), (0, _.jsx)(`label`, { children: `Verse from` }), (0, _.jsx)(`input`, { inputMode: `numeric`, placeholder: `1`, value: tr.from, onChange: (ev) => setTr({ ...tr, from: ev.target.value }) }), (0, _.jsx)(`label`, { children: `Verse to` }), (0, _.jsx)(`input`, { inputMode: `numeric`, placeholder: `7`, value: tr.to, onChange: (ev) => setTr({ ...tr, to: ev.target.value }) }), (0, _.jsx)(`label`, { children: `Activity` }), (0, _.jsxs)(`div`, { className: `chip-row`, children: ["Memorisation", "Revision", "Recitation"].map((x2) => (0, _.jsx)(`button`, { type: `button`, className: tr.activity === x2 ? `on` : ``, onClick: () => setTr({ ...tr, activity: x2 }), children: x2 }, x2)) }), (0, _.jsx)(`label`, { children: `Status` }), (0, _.jsxs)(`div`, { className: `chip-row`, children: ["Not Started", "In Progress", "Done"].map((x2) => (0, _.jsx)(`button`, { type: `button`, className: tr.status === x2 ? `on ` + x2.toLowerCase().replace(" ", "-") : x2.toLowerCase().replace(" ", ""), onClick: () => setTr({ ...tr, status: x2 }), children: x2 }, x2)) }), (0, _.jsx)(`label`, { children: `Accuracy / 5` }), (0, _.jsxs)(`div`, { className: `acc-row`, children: [1, 2, 3, 4, 5].map((x2) => (0, _.jsx)(`button`, { type: `button`, className: String(tr.accuracy) === String(x2) ? `on` : ``, onClick: () => setTr({ ...tr, accuracy: x2 }), children: x2 }, x2)) }), (0, _.jsx)(`label`, { children: `Note` }), (0, _.jsx)(`input`, { placeholder: `Teacher or student note`, value: tr.note, onChange: (ev) => setTr({ ...tr, note: ev.target.value }) }), (0, _.jsx)(`button`, { className: `btn primary`, onClick: () => {
    if (!tr.surah) return;
    let from = Number(tr.from) || 0, to = Number(tr.to) || 0, target = from && to ? Math.max(0, to - from + 1) : "";
    let row = { surah: tr.surah, verseFrom: tr.from, verseTo: tr.to, target, activity: tr.activity, status: tr.status, accuracy: tr.accuracy, note: tr.note, actual: target };
    ed ? updateTracker(ed, row) : addTracker({ ...row, studentId: n2.id });
    setEd(null);
    setTr({ surah: "", from: "", to: "", activity: "Memorisation", status: "Not Started", accuracy: "", note: "" });
    setTb((x2) => x2 + 1);
  }, children: ed ? `Save` : `Add today` })] }), (0, _.jsx)(`div`, { className: `hifz-days`, children: tracker().filter((x2) => x2.studentId === n2.id).map((x2) => {
    let pct = x2.target ? Math.round((Number(x2.actual || x2.target) || 0) / Number(x2.target) * 100) : 0;
    return (0, _.jsxs)(`article`, { className: `day-card`, children: [(0, _.jsxs)(`div`, { className: `day-top`, children: [(0, _.jsx)(`span`, { className: `day-date`, children: x2.date }), (0, _.jsx)(`span`, { className: `day-status ` + String(x2.status || "").toLowerCase().replace(" ", "-"), children: x2.status })] }), (0, _.jsx)(`h4`, { children: x2.surah }), (0, _.jsxs)(`p`, { className: `day-ayah`, children: [`Ayah `, x2.verseFrom || "—", ` – `, x2.verseTo || "—", ` · `, x2.target || "—", ` verses`] }), (0, _.jsx)(`span`, { className: `day-act`, children: x2.activity }), (0, _.jsxs)(`div`, { className: `day-bar`, children: [(0, _.jsx)(`i`, { style: { width: pct + "%" } }), (0, _.jsx)(`b`, { children: pct + "%" })] }), (0, _.jsxs)(`div`, { className: `day-meta`, children: [(0, _.jsxs)(`span`, { children: [`Recent `, x2.recent || "—"] }), (0, _.jsxs)(`span`, { children: [`Older `, x2.older || "—"] }), (0, _.jsxs)(`span`, { children: [`Accuracy `, x2.accuracy === "" ? "—" : x2.accuracy + "/5"] })] }), x2.note && (0, _.jsx)(`p`, { className: `day-note`, children: x2.note }), (0, _.jsxs)(`div`, { className: `day-actions`, children: [(0, _.jsx)(`button`, { type: `button`, className: `tiny ok`, onClick: () => {
      setEd(x2.id);
      setTr({ surah: x2.surah, from: x2.verseFrom, to: x2.verseTo, activity: x2.activity, status: x2.status, accuracy: x2.accuracy, note: x2.note });
    }, children: `Edit` }), (0, _.jsx)(`button`, { type: `button`, className: `tiny warn`, onClick: () => {
      deleteTracker(x2.id);
      if (ed === x2.id) setEd(null);
      setTb((v2) => v2 + 1);
    }, children: `Remove` })] })] }, x2.id);
  }) }), tracker().filter((x2) => x2.studentId === n2.id).length === 0 && (0, _.jsx)(`p`, { className: `hint`, children: `No daily rows yet. Add today's surah above.` })] }) }), r2 === `home` && (0, _.jsxs)(`div`, { className: `pad`, children: [(0, _.jsxs)(`div`, { className: `acct-hero`, children: [(0, _.jsx)(`div`, { className: `secure-pill`, children: `✓ SECURE STUDENT ACCOUNT` }), (0, _.jsxs)(`div`, { className: `acct-who`, children: [n2.photo ? (0, _.jsx)(`img`, { className: `acct-photo`, src: n2.photo, alt: `` }) : (0, _.jsx)(`div`, { className: `acct-photo init`, children: T(n2.nickname) }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`p`, { children: `Assalamu Alaikum` }), (0, _.jsxs)(`h2`, { children: [n2.nickname, `! `, (0, _.jsxs)(`span`, { children: [`⭐ `, n2.stars] })] }), (0, _.jsxs)(`small`, { children: [`Student ID: `, n2.nickname] })] })] }), (0, _.jsx)(`button`, { className: `dash-pill`, onClick: () => i2(`journey`), children: `📖 My Hifz Dashboard` }), (0, _.jsxs)(`div`, { className: `acct-actions`, children: [(0, _.jsxs)(`button`, { onClick: y2, children: [`📋 `, o2 ? `Copied` : `Copy Student ID`] }), (0, _.jsx)(`button`, { onClick: () => {
    he(), e2();
  }, children: `↩ Logout` })] }), (0, _.jsxs)(`div`, { className: `acct-stats`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `CURRENT DAY` }), (0, _.jsxs)(`b`, { children: [`Day `, g2] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `DAILY STARS` }), (0, _.jsxs)(`b`, { children: [`⭐ `, Math.min(5, h2) * 5] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `HIFZ STARS` }), (0, _.jsxs)(`b`, { children: [`⭐ `, n2.stars] })] })] })] }), (0, _.jsxs)(`div`, { className: `card teacher-note`, children: [(0, _.jsx)(`small`, { children: `TEACHER FEEDBACK` }), (0, _.jsx)(`p`, { style: { margin: "6px 0", fontWeight: 700 }, children: (_e().filter((x2) => x2.studentId === n2.id && x2.note).sort((a3, b2) => new Date(b2.reviewedAt || b2.createdAt) - new Date(a3.reviewedAt || a3.createdAt))[0] || {}).note || `No feedback yet.` }), (0, _.jsx)(`small`, { children: `Latest teacher note` })] }), (0, _.jsxs)(`div`, { className: `habit-card`, children: [(0, _.jsxs)(`div`, { className: `habit-head`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `MY HIFZ JOURNEY` }), (0, _.jsxs)(`h3`, { children: [`Today’s Quran Habit `, (0, _.jsx)(`span`, { children: `🌙` })] })] }), (0, _.jsxs)(`div`, { className: `habit-ring`, children: Math.min(5, h2) + `/5` })] }), (0, _.jsx)(`div`, { className: `habit-track`, children: (0, _.jsx)(`i`, { style: { width: Math.min(5, h2) / 5 * 100 + "%" } }) }), (0, _.jsx)(`p`, { className: `habit-copy`, children: Math.min(5, h2) >= 5 ? "MashaAllah! Today 5 Surahs are complete." : Math.min(5, h2) ? Math.min(5, h2) + " of 5 done. The green line fills as you submit." : "Start with one beautiful Surah today." }), (0, _.jsxs)(`div`, { className: `habit-steps`, children: [(0, _.jsxs)(`button`, { children: [(0, _.jsx)(`span`, { children: `🔁` }), `Revise`] }), (0, _.jsxs)(`button`, { children: [(0, _.jsx)(`span`, { children: `🎙️` }), `Recite`] }), (0, _.jsxs)(`button`, { onClick: () => i2(`submit`), children: [(0, _.jsx)(`span`, { children: `⬆️` }), `Submit`] }), (0, _.jsxs)(`button`, { children: [(0, _.jsx)(`span`, { children: `✨` }), `Shine`] })] })] }), d2 && (0, _.jsxs)(`div`, { className: `habit-card next-card`, onClick: () => i2(`journey`), children: [(0, _.jsx)(`small`, { children: `NEXT UP` }), (0, _.jsx)(`b`, { children: d2.surah.name }), (0, _.jsx)(`p`, { className: `ar`, children: d2.surah.arabic }), (0, _.jsx)(`div`, { className: `go`, children: `Open My Hifz Journey →` })] }), be().filter(function(e3) {
    return e3.classId === n2.classId;
  }).length > 0 && (0, _.jsxs)("div", { className: "habit-card teacher-notes", children: [(0, _.jsx)("b", { children: "Teacher Notes" }), be().filter(function(e3) {
    return e3.classId === n2.classId;
  }).slice(0, 3).map(function(e3) {
    return (0, _.jsxs)("div", { className: "note-line", children: [(0, _.jsx)("b", { children: e3.title }), (0, _.jsx)("p", { children: e3.body })] }, e3.id);
  })] }), (0, _.jsxs)("div", { className: "habit-card daily-board", children: [(0, _.jsxs)("div", { className: "board-title", children: [(0, _.jsx)("span", { children: "🏆" }), (0, _.jsx)("h3", { children: "Daily Leaderboard" })] }), (0, _.jsx)("p", { className: "board-sub", children: "Top 10 · only stars earned in the last 24 hours count" }), ue(n2.classId).filter(function(x2) {
    return !x2.boardHidden && boardStars(x2.id) > 0;
  }).slice().sort(function(a3, b2) {
    return (Number(b2.stars) || 0) - (Number(a3.stars) || 0) || boardCnt(b2.id) - boardCnt(a3.id);
  }).slice(0, 10).map(function(e3, t3) {
    var c3 = Math.min(5, new Set(_e().filter(function(x2) {
      return x2.studentId === e3.id && x2.status === "approved" && new Date(x2.reviewedAt || x2.createdAt).getTime() >= boardWin();
    }).map(function(x2) {
      return x2.surahNo;
    })).size);
    return (0, _.jsxs)("button", { type: "button", className: "board-row" + (e3.id === n2.id ? " on" : ""), onClick: function() {
      i2("board");
    }, children: [(0, _.jsx)("span", { className: "medal", children: t3 === 0 ? "🥇" : t3 === 1 ? "🥈" : t3 === 2 ? "🥉" : String(t3 + 1) }), (0, _.jsx)(Oe, { name: e3.nickname, photo: e3.photo, className: "avatar-init" }), (0, _.jsxs)("span", { className: "board-name", children: [(0, _.jsx)("b", { children: e3.nickname }), (0, _.jsx)("small", { children: c3 + "/5 in 24h" })] }), (0, _.jsxs)("span", { className: "board-score", children: [(0, _.jsx)("b", { children: "⭐ " + (Number(e3.stars) || 0) }), (0, _.jsx)("small", { children: c3 + "/5" })] })] }, e3.id);
  })] })] }), r2 === `journey` && (0, _.jsxs)(`div`, { className: `pad journey-page`, children: [(0, _.jsxs)(`div`, { className: `journey-head`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`h2`, { children: `My Hifz Journey` }), (0, _.jsx)(`p`, { children: `Step by step, a lifetime with the Qur’an` })] }), (0, _.jsxs)(`span`, { className: `journey-count`, children: [u2, `/`, c2.length] })] }), (0, _.jsx)(`p`, { className: `journey-ayah`, children: `وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ` }), (0, _.jsx)(`div`, { className: `journey-list`, children: c2.map((e3, t3) => (0, _.jsxs)(`button`, { type: `button`, className: `surah-row`, onClick: () => {
    e3.status !== `approved` && i2(`submit`);
  }, children: [(0, _.jsx)(`div`, { className: `num`, children: t3 + 1 }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`h4`, { children: e3.surah.name }), (0, _.jsx)(`div`, { className: `ar`, children: e3.surah.arabic })] }), (0, _.jsx)(`span`, { className: `chip ${e3.status === `approved` ? `approved` : e3.status}`, children: D(e3.status) })] }, e3.surah.no)) })] }), r2 === `submit` && (0, _.jsx)(De, { studentName: n2.nickname, studentId: n2.id, stars: n2.stars, rows: c2, peersRank: p2.findIndex((e3) => e3.id === n2.id) + 1, onSend: (e3, t3) => {
    try {
      ve(n2.id, e3, t3);
      a2((x2) => x2 + 1);
    } catch (err) {
      console.error(err);
      alert(err.message || "Could not send");
    }
  } }), r2 === `board` && (0, _.jsx)(ke, { meId: n2.id, meClass: n2.classId, meName: n2.nickname }), r2 === `me` && (0, _.jsxs)(`div`, { className: `pad profile-pad`, children: [(0, _.jsxs)(`div`, { className: `acct-hero`, children: [(0, _.jsx)(`div`, { className: `secure-pill`, children: `✓ SECURE STUDENT ACCOUNT` }), (0, _.jsxs)(`div`, { className: `acct-who`, children: [n2.photo ? (0, _.jsx)(`img`, { className: `acct-photo`, src: n2.photo, alt: `` }) : (0, _.jsx)(`div`, { className: `acct-photo init`, children: T(n2.nickname) }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`p`, { children: `Assalamu Alaikum` }), (0, _.jsxs)(`h2`, { children: [n2.nickname, `! `, (0, _.jsxs)(`span`, { children: [`Hifz ⭐ `, n2.stars] })] }), (0, _.jsxs)(`small`, { children: [`Student ID: `, n2.nickname] })] })] }), (0, _.jsx)(`div`, { className: `salah-slot` }), (0, _.jsxs)(`label`, { className: `photo-edit`, children: [(0, _.jsx)(`input`, { type: `file`, accept: `image/*`, onChange: async (e3) => {
    var _a;
    let t3 = (_a = e3.target.files) == null ? void 0 : _a[0];
    if (t3) try {
      Ce(n2.id, await we(t3)), a2((e4) => e4 + 1);
    } catch {
    }
  } }), n2.photo ? `Change profile photo` : `Add profile photo`] }), (0, _.jsx)(`button`, { className: `dash-pill`, onClick: () => i2(`journey`), children: `📖 My Hifz Dashboard` }), (0, _.jsxs)(`div`, { className: `acct-actions`, children: [(0, _.jsxs)(`button`, { onClick: y2, children: [`📋 `, o2 ? `Copied` : `Copy Student ID`] }), (0, _.jsx)(`button`, { onClick: () => {
    he(), e2();
  }, children: `↩ Logout` })] }), (0, _.jsxs)(`div`, { className: `acct-stats`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `CURRENT DAY` }), (0, _.jsxs)(`b`, { children: [`Day `, g2] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `DAILY STARS` }), (0, _.jsxs)(`b`, { children: [`⭐ `, Math.min(5, h2) * 5] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `LIFETIME` }), (0, _.jsxs)(`b`, { children: [`⭐ `, n2.stars] })] })] })] }), (0, _.jsxs)(`p`, { className: `hint`, style: { marginTop: 12 }, children: [f[n2.classId], ` · Keep going, one ayah at a time.`] }), (0, _.jsxs)(`button`, { type: `button`, className: `teacher-entry`, onClick: () => {
    location.hash = `#/staff`;
  }, children: [(0, _.jsx)(`span`, { className: `te-ico`, children: `👩‍🏫` }), (0, _.jsxs)(`span`, { children: [(0, _.jsx)(`b`, { children: `Teachers Panel` }), (0, _.jsx)(`small`, { children: `Create a teacher account` })] }), (0, _.jsx)(`em`, { children: `→` })] })] }), (0, _.jsxs)(`nav`, { className: `bottom-nav`, children: [(0, _.jsxs)(`button`, { className: r2 === `home` ? `on` : ``, onClick: () => i2(`home`), children: [(0, _.jsx)(`span`, { className: `ico`, children: `🏠` }), `Home`] }), (0, _.jsxs)(`button`, { className: r2 === `journey` ? `on` : ``, onClick: () => i2(`journey`), children: [(0, _.jsx)(`span`, { className: `ico`, children: `📖` }), `Journey`] }), (0, _.jsxs)(`button`, { className: r2 === `submit` ? `on` : ``, onClick: () => i2(`submit`), children: [(0, _.jsx)(`span`, { className: `ico`, children: `📊` }), `Progress`] }), (0, _.jsxs)(`button`, { className: r2 === `board` ? `on` : ``, onClick: () => i2(`board`), children: [(0, _.jsx)(`span`, { className: `ico`, children: `🏆` }), `Leaderboard`] }), (0, _.jsxs)(`button`, { className: r2 === `me` ? `on` : ``, onClick: () => i2(`me`), children: [(0, _.jsx)(`span`, { className: `ico`, children: `👤` }), `Profile`] })] })] });
}
function Ee(e2 = /* @__PURE__ */ new Date()) {
  let t2 = new Date(e2), n2 = (t2.getDay() + 6) % 7;
  return t2.setHours(0, 0, 0, 0), t2.setDate(t2.getDate() - n2), t2;
}
function De({ studentName: e2, studentId: t2, stars: n2, rows: r2, peersRank: i2, onSend: a2 }) {
  var _a, _b, _c, _d;
  let [o2, s2] = (0, l.useState)(`overview`), [tr, setTr] = (0, l.useState)({ surah: "", from: "", to: "", activity: "Memorisation", status: "Not Started", accuracy: "", note: "" }), [tb, setTb] = (0, l.useState)(0), [c2, u2] = (0, l.useState)((_d = (_c = (_a = r2.find((e3) => e3.status !== `approved`)) == null ? void 0 : _a.surah.no) != null ? _c : (_b = r2[0]) == null ? void 0 : _b.surah.no) != null ? _d : null), [d2, f2] = (0, l.useState)(`audio`), [p2, setSent] = (0, l.useState)(false), [h2, g2] = (0, l.useState)(null), [v2, y2] = (0, l.useState)(``), [sqNahl, setSqNahl] = (0, l.useState)(``), b2 = r2.filter((e3) => e3.status === `approved`).length, ee2 = r2.filter((e3) => e3.status === `pending`).length, te2 = r2.filter((e3) => e3.status === `revision`).length, ne2 = r2.length ? Math.round(b2 / r2.length * 100) : 0, x2 = r2.find((e3) => e3.surah.no === c2), S2 = _e().filter((e3) => e3.studentId === t2), re2 = Ee(), C2 = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`], ie2 = C2.map((e3, idx) => {
    let n3 = new Date(re2);
    n3.setDate(re2.getDate() + idx);
    let r3 = n3.toISOString().slice(0, 10);
    return S2.filter((e4) => String(e4.createdAt || "").slice(0, 10) === r3).length + tracker().filter((x3) => x3.studentId === t2 && x3.date === r3).length;
  }), ae2 = ie2.reduce((e3, t3) => e3 + t3, 0), oe2 = Math.max(3, ...ie2), w2 = e2 ? e2[0].toUpperCase() + e2.slice(1) : `friend`;
  return (0, _.jsxs)(`div`, { className: `pad prog-page${o2 === `list` ? ` locked` : ``}`, children: [(0, _.jsxs)(`div`, { className: `prog-title`, children: [(0, _.jsx)(`h2`, { children: `My Hifz Journey` }), (0, _.jsx)(`p`, { children: `Step by step, a lifetime with the Qur’an 🌿` })] }), (0, _.jsxs)(`div`, { className: `prog-switch`, children: [(0, _.jsx)(`button`, { className: o2 === `overview` ? `on` : ``, onClick: () => s2(`overview`), children: `Overview` }), (0, _.jsx)(`button`, { className: o2 === `list` ? `on` : ``, onClick: () => s2(`list`), children: `Submit Surah` })] }), o2 === `overview` && (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(`div`, { className: `prog-card`, children: [(0, _.jsx)(`div`, { className: `prog-ring`, style: { background: `conic-gradient(#0e7a4b ${ne2 * 3.6}deg, #e4eedc 0deg)` }, children: (0, _.jsx)(`div`, { children: (0, _.jsxs)(`b`, { children: [ne2, `%`] }) }) }), (0, _.jsxs)(`div`, { className: `prog-card-copy`, children: [(0, _.jsx)(`small`, { children: `Qur’an Progress` }), (0, _.jsxs)(`b`, { children: [b2, ` of `, r2.length, ` Surahs`] }), (0, _.jsx)(`button`, { className: `prog-go`, onClick: () => s2(`list`), children: `Open list →` }), (0, _.jsxs)(`p`, { children: [`You’re on a beautiful journey, `, w2, `! 🌟`] })] })] }), (0, _.jsxs)(`div`, { className: `prog-kpis`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`span`, { children: `📖` }), (0, _.jsx)(`b`, { children: b2 }), (0, _.jsx)(`small`, { children: `Approved` })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`span`, { children: `⏳` }), (0, _.jsx)(`b`, { children: ee2 }), (0, _.jsx)(`small`, { children: `Pending` })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`span`, { children: `✏️` }), (0, _.jsx)(`b`, { children: te2 }), (0, _.jsx)(`small`, { children: `Revision` })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`span`, { children: `🏆` }), (0, _.jsxs)(`b`, { children: [`#`, i2 || `—`] }), (0, _.jsx)(`small`, { children: `In Class` })] })] }), (0, _.jsxs)(`div`, { className: `week-card`, children: [(0, _.jsxs)(`div`, { className: `week-head`, children: [(0, _.jsx)(`h3`, { children: `📅 Weekly Hifz Progress` }), (0, _.jsxs)(`div`, { className: `week-pill`, children: [(0, _.jsxs)(`b`, { children: [`📊 This Week: `, ae2, ` Activit`, ae2 === 1 ? `y` : `ies`] }), (0, _.jsx)(`small`, { children: `↗ Keep going!` })] })] }), (0, _.jsx)(`div`, { className: `week-chart`, children: ie2.map((e3, t3) => (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`span`, { style: { height: `${Math.max(8, e3 / oe2 * 72)}px` }, className: e3 ? `on` : `` }), (0, _.jsx)(`small`, { children: C2[t3] })] }, C2[t3])) }), (0, _.jsxs)(`div`, { className: `week-added`, children: [(0, _.jsx)(`b`, { children: `This week` }), tracker().filter((x3) => x3.studentId === t2 && x3.date >= re2.toISOString().slice(0, 10)).map((x3) => (0, _.jsxs)(`p`, { children: [x3.date, ` · `, x3.surah, ` · `, x3.status] }, x3.id)), S2.filter((e3) => String(e3.createdAt || "").slice(0, 10) >= re2.toISOString().slice(0, 10)).map((e3) => {
    var _a2;
    return (0, _.jsxs)(`p`, { children: [String(e3.createdAt || "").slice(0, 10), ` · Video `, ((_a2 = m(e3.surahNo)) == null ? void 0 : _a2.name) || `Surah`] }, e3.id);
  })] }), (0, _.jsxs)(`div`, { className: `recent-head`, children: [(0, _.jsx)(`b`, { children: `🕒 Recent Progress` }), (0, _.jsx)(`button`, { type: `button`, onClick: () => s2(`list`), children: `View all →` })] }), (0, _.jsxs)(`div`, { className: `recent-tiles`, children: [(0, _.jsxs)(`div`, { className: `ok`, children: [(0, _.jsxs)(`b`, { children: [`✓ `, b2] }), (0, _.jsx)(`small`, { children: `Approved` })] }), (0, _.jsxs)(`div`, { className: `wait`, children: [(0, _.jsxs)(`b`, { children: [`⏳ `, ee2] }), (0, _.jsx)(`small`, { children: `Pending Review` })] }), (0, _.jsxs)(`div`, { className: `fix`, children: [(0, _.jsxs)(`b`, { children: [`✏️ `, te2] }), (0, _.jsx)(`small`, { children: `Needs Revision` })] }), (0, _.jsxs)(`div`, { className: `star`, children: [(0, _.jsxs)(`b`, { children: [`⭐ `, n2] }), (0, _.jsx)(`small`, { children: `Stars Earned` })] })] }), S2.length === 0 && (0, _.jsxs)(`div`, { className: `prog-empty`, children: [(0, _.jsx)(`div`, { className: `sprout`, children: `🌱` }), (0, _.jsx)(`b`, { children: `Your progress will appear here 🌿` }), (0, _.jsx)(`p`, { children: `Submit your first recitation to start tracking your weekly Hifz journey.` }), (0, _.jsx)(`button`, { className: `btn primary`, onClick: () => s2(`list`), children: `Submit a recitation` })] })] })] }), o2 === `list` && (0, _.jsxs)(`div`, { className: `studio`, children: [(0, _.jsxs)(`div`, { className: `studio-head`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `SUBMIT RECITATION` }), (0, _.jsx)(`h2`, { children: (x2 == null ? void 0 : x2.surah.name) || `Choose a Surah` }), (0, _.jsx)(`p`, { className: `ar`, children: (x2 == null ? void 0 : x2.surah.arabic) || `Pick one from the strip` })] }), x2 && (0, _.jsx)(`span`, { className: `studio-status ${x2.status}`, children: x2.status === `revision` ? `Needs revision` : D(x2.status) })] }), (0, _.jsxs)(`div`, { className: `studio-card`, children: [(0, _.jsxs)(`div`, { className: `studio-label`, children: [(0, _.jsx)(`b`, { children: `Select Surah` }), (0, _.jsx)(`small`, { children: `Only this row scrolls` })] }), (0, _.jsx)(`input`, { className: `surah-search`, type: `text`, placeholder: `Search surah by name or number...`, value: sqNahl, onChange: (e3) => { let q = e3.target.value; setSqNahl(q); let t3 = q.trim().toLowerCase(); if (t3) { let hit = r2.find((x3) => x3.surah.name.toLowerCase().includes(t3) || String(x3.surah.no) === t3 || String(x3.surah.no).padStart(3, `0`) === t3.padStart(3, `0`)); if (hit) { let elx = document.querySelector(`.surah-strip [data-sno="` + hit.surah.no + `"]`); if (elx) elx.scrollIntoView({ behavior: `smooth`, inline: `center`, block: `nearest` }); } } } }), (0, _.jsx)(`div`, { className: `surah-rail`, children: (0, _.jsx)(`div`, { className: `surah-strip`, role: `listbox`, "aria-label": `Surahs`, children: r2.map((e3) => {
    let t3 = c2 === e3.surah.no;
    return (0, _.jsxs)(`button`, { type: `button`, role: `option`, "data-sno": e3.surah.no, "aria-selected": t3, className: `surah-chip${t3 ? ` on` : ``} ${e3.status}`, onClick: () => {
      e3.status !== `approved` && e3.status !== `pending` && (u2(e3.surah.no), g2(null), y2(``), setSent(false));
    }, children: [(0, _.jsx)(`em`, { children: String(e3.surah.no).padStart(3, `0`) }), (0, _.jsx)(`b`, { children: e3.surah.name.replace(/^Surah\s+/i, ``) }), e3.status === `pending` || e3.status === `approved` || e3.status === `revision` ? (0, _.jsx)(`small`, { className: `chip-state`, children: e3.status === `pending` ? `Pending` : e3.status === `approved` ? `Approved` : `Needs Revision` }) : null] }, e3.surah.no);
  }) }) }), (0, _.jsxs)(`div`, { className: `studio-kinds`, children: [(0, _.jsxs)(`button`, { type: `button`, className: d2 === `audio` ? `on` : ``, onClick: () => f2(`audio`), children: [(0, _.jsx)(`i`, { children: `🎤` }), `Audio`] }), (0, _.jsxs)(`button`, { type: `button`, className: d2 === `video` ? `on` : ``, onClick: () => f2(`video`), children: [(0, _.jsx)(`i`, { children: `🎬` }), `Video`] }), (0, _.jsxs)(`button`, { type: `button`, className: d2 === `file` ? `on` : ``, onClick: () => f2(`file`), children: [(0, _.jsx)(`i`, { children: `📁` }), `File`] })] }), v2 && (0, _.jsx)(`div`, { className: `err`, children: v2 }), p2 && (0, _.jsx)(`div`, { className: `oknote`, children: `Sent for teacher review. Stars come after approval.` }), (0, _.jsxs)(`label`, { className: `dropzone${h2 ? ` has` : ``}`, children: [(0, _.jsx)(`input`, { type: `file`, accept: d2 === `video` ? `video/*` : d2 === `audio` ? `audio/*` : `audio/*,video/*`, capture: d2 === `video` ? `user` : void 0, onChange: (e3) => {
    var _a2;
    let t3 = (_a2 = e3.target.files) == null ? void 0 : _a2[0];
    if (!t3) return;
    if (y2(``), setSent(false), t3.size > 104857600) {
      y2(`Please keep the clip under 100 MB.`);
      return;
    }
    let n3 = d2 === `audio` ? `audio` : t3.type.startsWith(`video`) ? `video` : `audio`;
    g2({ mediaType: n3, mediaUrl: URL.createObjectURL(t3), mediaName: t3.name, file: t3, mediaLocal: true });
  } }), (0, _.jsx)(`div`, { className: `drop-ico`, children: d2 === `video` ? `🎬` : d2 === `file` ? `📁` : `🎙️` }), (0, _.jsx)(`b`, { children: h2 ? h2.mediaName || `Clip ready` : d2 === `file` ? `Tap to upload a file` : d2 === `video` ? `Tap to record video` : `Tap to record audio` }), (0, _.jsx)(`small`, { children: h2 ? `Tap again to replace · Max 100 MB` : `Teacher reviews first · Max 100 MB` })] }), (h2 == null ? void 0 : h2.mediaType) === `audio` && (0, _.jsx)(`audio`, { className: `review-media`, controls: true, src: h2.mediaUrl }), (h2 == null ? void 0 : h2.mediaType) === `video` && (0, _.jsx)(`video`, { className: `review-media`, controls: true, src: h2.mediaUrl, playsInline: true }), (0, _.jsx)(`button`, { className: `btn primary block studio-send`, disabled: !x2 || x2.status === `approved` || x2.status === `pending` || !h2, onClick: () => {
    x2 && h2 && sendClip(x2, h2, a2, g2, setSent);
  }, children: `Send to teacher` })] })] })] });
}
function Oe({ name: e2, photo: t2, className: n2 }) {
  return t2 ? (0, _.jsx)(`span`, { className: n2, children: (0, _.jsx)(`img`, { src: t2, alt: `` }) }) : (0, _.jsx)(`span`, { className: n2, children: T(e2) });
}
function ke({ meId: e2, meClass: t2, meName: n2 }) {
  let [r2, i2] = (0, l.useState)(t2), m2 = (function() {
    var d2 = /* @__PURE__ */ new Date();
    return d2.getFullYear() + "-" + String(d2.getMonth() + 1).padStart(2, "0") + "-" + String(d2.getDate()).padStart(2, "0");
  })();
  function day(id) {
    return new Set(_e().filter(function(x2) {
      return x2.studentId === id && (function(v2) {
        var d2 = new Date(v2);
        return d2.getFullYear() + "-" + String(d2.getMonth() + 1).padStart(2, "0") + "-" + String(d2.getDate()).padStart(2, "0");
      })(x2.createdAt) === m2;
    }).map(function(x2) {
      return x2.surahNo;
    })).size;
  }
  let a2 = ue(r2).filter(function(x2) {
    return !x2.boardHidden && (Number(x2.stars) || 0) > 0;
  }).slice().sort(function(x2, y2) {
    return (Number(y2.stars) || 0) - (Number(x2.stars) || 0) || day(y2.id) - day(x2.id) || x2.nickname.localeCompare(y2.nickname);
  }).slice(0, 15), o2 = a2.slice(0, 3), s2 = a2.slice(3), c2 = r2 === t2 ? a2.findIndex(function(x2) {
    return x2.id === e2;
  }) + 1 : 0, u2 = a2.reduce(function(n3, x2) {
    return n3 + day(x2.id);
  }, 0), seats = [{ rank: 2, tone: "silver", medal: "🥈" }, { rank: 1, tone: "gold", medal: "🥇" }, { rank: 3, tone: "bronze", medal: "🥉" }];
  (0, l.useEffect)(function() {
    var tm = setTimeout(function() {
      var pill = document.querySelector(".lb-rail .lb-class.on");
      if (pill) pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      var row = document.querySelector(".lb-list .board-row.on");
      if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 90);
    return function() { clearTimeout(tm); };
  }, [r2]);
  return (0, _.jsxs)(`div`, { className: `pad lb-page`, children: [(0, _.jsxs)(`div`, { className: `lb-hero`, children: [(0, _.jsx)(`small`, { children: `TOP 15 · LIFETIME STARS` }), (0, _.jsx)(`h2`, { children: `Leaderboard` }), (0, _.jsx)(`p`, { children: `Gold, silver and bronze on the stand. Everyone else, line by line.` })] }), (0, _.jsx)(`div`, { className: `lb-rail`, role: `tablist`, "aria-label": `Classes`, children: d.map(function(e3) {
    let n3 = ue(e3.id).length;
    return (0, _.jsxs)(`button`, { type: `button`, role: `tab`, "aria-selected": r2 === e3.id, className: `lb-class${r2 === e3.id ? ` on` : ``}${e3.id === t2 ? ` mine` : ``}`, style: e3.id === t2 && r2 !== e3.id ? { borderColor: "#1f9a4a", background: "#eafaf0" } : void 0, onClick: function() {
      i2(e3.id);
    }, children: [(0, _.jsx)(`b`, { children: e3.name }), (0, _.jsxs)(`small`, { children: [n3, ` student`, n3 === 1 ? `` : `s`] })] }, e3.id);
  }) }), (0, _.jsxs)(`div`, { className: `lb-meta`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `VIEWING` }), (0, _.jsx)(`b`, { children: f[r2] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `TODAY` }), (0, _.jsxs)(`b`, { children: [u2, ` surahs`] })] }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: r2 === t2 ? `YOUR RANK` : `STUDENTS` }), (0, _.jsx)(`b`, { children: r2 === t2 && c2 ? `#${c2}` : a2.length })] })] }), a2.length === 0 && (0, _.jsxs)(`div`, { className: `lb-empty`, children: [(0, _.jsx)(`span`, { children: `🏆` }), (0, _.jsxs)(`b`, { children: [`No students in `, f[r2], ` yet`] }), (0, _.jsx)(`p`, { children: `When this class joins Hifz Club, their names will shine here.` })] }), a2.length > 0 && (0, _.jsx)(`div`, { className: `lb-podium n3`, children: seats.map(function(seat) {
    let t3 = a2[seat.rank - 1];
    return t3 ? (0, _.jsxs)(`div`, { className: `pod pod-${seat.rank} pod-${seat.tone}${t3.id === e2 ? ` me` : ``}`, children: [(0, _.jsx)(`em`, { children: seat.medal }), (0, _.jsx)(Oe, { name: t3.nickname, photo: t3.photo, className: `pod-ava` }), (0, _.jsx)(`b`, { children: t3.nickname }), (0, _.jsxs)(`span`, { className: `pod-stars`, children: [`⭐ `, Number(t3.stars) || 0] }), (0, _.jsx)(`small`, { children: Math.min(5, day(t3.id)) + `/5` })] }, t3.id) : (0, _.jsxs)(`div`, { className: `pod pod-${seat.rank} pod-${seat.tone} pod-wait`, children: [(0, _.jsx)(`em`, { children: seat.medal }), (0, _.jsx)(`div`, { className: `pod-ava wait`, children: `—` }), (0, _.jsx)(`b`, { children: `Waiting` }), (0, _.jsx)(`small`, { children: seat.tone })] }, seat.tone);
  }) }), s2.length > 0 && (0, _.jsx)(`div`, { className: `lb-list`, children: s2.map(function(t3, n3) {
    var c3 = Math.min(5, day(t3.id));
    return (0, _.jsxs)(`div`, { className: `board-row${t3.id === e2 ? ` on` : ``}`, children: [(0, _.jsx)(`span`, { className: `medal`, children: String(n3 + 4) }), (0, _.jsx)(Oe, { name: t3.nickname, photo: t3.photo, className: `avatar-init` }), (0, _.jsxs)(`span`, { className: `board-name`, children: [(0, _.jsx)(`b`, { children: t3.nickname + (t3.id === e2 ? ` · you` : ``) }), (0, _.jsx)(`small`, { children: c3 + `/5 submitted` })] }), (0, _.jsxs)(`span`, { className: `board-score`, children: [(0, _.jsx)(`b`, { children: `⭐ ` + (Number(t3.stars) || 0) }), (0, _.jsx)(`small`, { children: c3 + `/5` })] })] }, t3.id);
  }) }), r2 === t2 && c2 > 0 && (0, _.jsxs)(`div`, { className: `lb-you`, children: [`You are #`, c2, ` in `, f[r2], `, `, n2, `.`] })] });
}
function teachers() {
  return se("nahl.teachers", []);
}
async function teacherCreate(e2) {
  let n2 = (e2.name || "").trim(), pin = (e2.pin || "").trim(), mail = (e2.email || "").trim().toLowerCase();
  if (!n2) throw Error("Enter your name");
  if (!/^[^\s@]+@gmail\.com$/.test(mail)) throw Error("Enter a Gmail address");
  if (!/^\d{4}$/.test(pin)) throw Error("PIN must be 4 digits");
  let all = teachers();
  if (all.some((t2) => t2.name.toLowerCase() === n2.toLowerCase() || t2.email === mail)) throw Error("This name or Gmail is already used");
  let title = e2.gender === "female" ? "Ustaza" : "Ustad";
  let rec = { id: le(), name: n2, email: mail, classId: e2.classId, pin, photo: e2.photo || null, gender: e2.gender || "male", title, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  ce("nahl.teachers", [...all, rec]);
  ce(w.session, { role: "teacher", teacherId: rec.id, name: rec.name, email: rec.email, classId: rec.classId, photo: rec.photo, title });
  return rec;
}
async function teacherLogin(e2, t2) {
  let q = e2.trim().toLowerCase();
  let n2 = teachers().find((x2) => x2.name.toLowerCase() === q || x2.email === q);
  if (!n2 || n2.pin !== t2.trim()) throw Error("Name, Gmail or PIN is incorrect");
  return ce(w.session, { role: "teacher", teacherId: n2.id, name: n2.name, email: n2.email, classId: n2.classId, photo: n2.photo, title: n2.title || "Ustad" }), n2;
}
function O({ onDone: e2 }) {
  let [mode, setMode] = (0, l.useState)("login"), [name, setName] = (0, l.useState)(""), [pin, setPin] = (0, l.useState)(""), [show, setShow] = (0, l.useState)(false), [klass, setKlass] = (0, l.useState)("reception-b"), [photo, setPhoto] = (0, l.useState)(null), [email, setEmail] = (0, l.useState)(""), [gender, setGender] = (0, l.useState)("male"), [err, setErr] = (0, l.useState)(""), [busy, setBusy] = (0, l.useState)(false), [admin, setAdmin] = (0, l.useState)(false), [gmail, setGmail] = (0, l.useState)("admin@annahlacademy.org"), [pass, setPass] = (0, l.useState)("");
  async function go() {
    var _a;
    setErr("");
    setBusy(true);
    try {
      if (admin) {
        e2(((_a = await ge(gmail, pass)) == null ? void 0 : _a.role) === "admin" ? "admin" : "teacher");
      } else if (mode === "login") {
        await teacherLogin(name, pin);
        e2("teacher");
      } else {
        await teacherCreate({ name, email, classId: klass, pin, photo, gender });
        e2("teacher");
      }
    } catch (ex) {
      setErr(ex.message || "Could not continue");
    } finally {
      setBusy(false);
    }
  }
  return (0, _.jsxs)("div", { className: "page hero-skin teacher-auth", children: [(0, _.jsx)("button", { type: "button", className: "logo-wrap logo-home", onClick: function() {
    location.hash = "#/";
  }, children: (0, _.jsx)(v, {}) }), (0, _.jsx)("h1", { className: "brand-title", style: { fontSize: 28 }, children: "Teacher Garden" }), (0, _.jsx)("p", { className: "hint", style: { marginTop: 4 }, children: admin ? "Admin sign in" : "A bright little corner for every teacher" }), (0, _.jsxs)("div", { className: "pad", children: [(0, _.jsxs)("div", { className: "card", children: [!admin && (0, _.jsxs)("div", { className: "tabs", children: [(0, _.jsx)("button", { className: mode === "login" ? "on" : "", onClick: function() {
    setMode("login");
  }, children: "Login" }), (0, _.jsx)("button", { className: mode === "register" ? "on" : "", onClick: function() {
    setMode("register");
  }, children: "Create Account" })] }), err && (0, _.jsx)("div", { className: "err", style: { marginBottom: 10 }, children: err }), admin ? (0, _.jsxs)("div", { children: [(0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "Admin Gmail" }), (0, _.jsx)("input", { value: gmail, onChange: function(ev) {
    setGmail(ev.target.value);
  } })] }), (0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "Password" }), (0, _.jsx)("input", { type: "password", value: pass, onChange: function(ev) {
    setPass(ev.target.value);
  }, placeholder: "lowercase letters + at least 4 digits" })] })] }) : (0, _.jsxs)("div", { children: [(0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: mode === "login" ? "Name or Gmail" : "Teacher name" }), (0, _.jsx)("input", { value: name, onChange: function(ev) {
    setName(ev.target.value);
  }, placeholder: mode === "login" ? "Name or Gmail" : "Your name" })] }), mode === "register" && (0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "Gmail" }), (0, _.jsx)("input", { type: "email", value: email, onChange: function(ev) {
    setEmail(ev.target.value);
  }, placeholder: "name@gmail.com" })] }), mode === "register" && (0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "Ustad or Ustaza" }), (0, _.jsxs)("div", { className: "title-picks", children: [(0, _.jsx)("button", { type: "button", className: gender === "male" ? "on" : "", onClick: function() {
    setGender("male");
  }, children: "Ustad" }), (0, _.jsx)("button", { type: "button", className: gender === "female" ? "on" : "", onClick: function() {
    setGender("female");
  }, children: "Ustaza" })] })] }), mode === "register" && (0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "Select your class" }), (0, _.jsx)("select", { value: klass, onChange: function(ev) {
    setKlass(ev.target.value);
  }, children: d.map(function(c2) {
    return (0, _.jsxs)("option", { value: c2.id, children: c2.name + " · " + c2.ages }, c2.id);
  }) })] }), mode === "register" && (0, _.jsxs)("label", { className: "photo-edit", children: [(0, _.jsx)("input", { type: "file", accept: "image/*", onChange: async function(ev) {
    let file = ev.target.files && ev.target.files[0];
    if (file) try {
      setPhoto(await we(file));
    } catch (ex) {
      setErr("Could not read that photo");
    }
  } }), photo ? "Photo added" : "Add photo"] }), (0, _.jsxs)("div", { className: "field", children: [(0, _.jsx)("label", { children: "4-digit PIN" }), (0, _.jsxs)("div", { style: { display: "flex", gap: 8 }, children: [(0, _.jsx)("input", { style: { flex: 1 }, type: show ? "text" : "password", inputMode: "numeric", maxLength: 4, value: pin, onChange: function(ev) {
    setPin(ev.target.value.replace(/\D/g, "").slice(0, 4));
  }, placeholder: "Enter your 4-digit PIN" }), (0, _.jsx)("button", { className: "btn ghost", type: "button", onClick: function() {
    setShow(function(v2) {
      return !v2;
    });
  }, children: show ? "Hide" : "Show" })] })] })] }), (0, _.jsx)("button", { className: "btn primary block", disabled: busy, onClick: go, children: busy ? "Please wait" : admin ? "Admin sign in" : mode === "login" ? "Login" : "Create Account" }), (0, _.jsx)("button", { className: "staff-link", type: "button", onClick: function() {
    setAdmin(function(v2) {
      return !v2;
    });
  }, children: admin ? "Teacher sign in" : "Admin sign in" })] }), (0, _.jsx)("a", { className: "staff-link", href: "#/", children: "Back to Home" })] })] });
}
function Ae({ onOut: e2 }) {
  var _a, _b;
  purgeOld();
  let t2 = me(), n2 = t2 && t2.role !== `student` ? t2.name : `Teacher`, [r2, i2] = (0, l.useState)(`dashboard`), [a2, o2] = (0, l.useState)((t2 == null ? void 0 : t2.classId) || `all`), [tick, setTick] = (0, l.useState)(0), [s2, c2] = (0, l.useState)(null), [u2, p2] = (0, l.useState)(`Masha’Allah! Keep going with tajweed.`), [h2, g2] = (0, l.useState)(``), [dv, setDv] = (0, l.useState)(`subs`), [ctrl, setCtrl] = (0, l.useState)(null), [adm, setAdm] = (0, l.useState)(sessionStorage.getItem("nahl.admin") === "1"), [editMe, setEditMe] = (0, l.useState)(false), y2 = _e().filter((e3) => {
    var _a2;
    return a2 === `all` || ((_a2 = de(e3.studentId)) == null ? void 0 : _a2.classId) === a2;
  }), b2 = y2.filter((e3) => e3.status === `pending`), ee2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return (0, _.jsxs)(`div`, { className: `teacher`, "data-tick": tick, children: [(0, _.jsxs)(`aside`, { className: `side`, children: [(0, _.jsxs)(`div`, { className: `brand`, children: [(0, _.jsx)(v, { size: 46 }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`b`, { children: `NAHL Hifz Club` }), (0, _.jsx)(`small`, { children: `Teacher Panel` })] })] }), [[`dashboard`, `🏠 Dashboard`], [`submissions`, `📝 Submissions`], [`classes`, `🌱 My Class`], [`progress`, `📊 Progress`], [`notes`, `📋 Notes`], [`admin`, `🛡️ Admin`]].map(([e3, t3]) => (0, _.jsx)(`button`, { className: r2 === e3 ? `on` : ``, onClick: () => i2(e3), children: t3 }, e3)), (0, _.jsx)(`button`, { onClick: e2, children: `↪ Log out` }), (0, _.jsx)(`div`, { className: `foot-mark`, children: `A Brighter Tomorrow Through Allah’s Guidance` })] }), (0, _.jsxs)(`main`, { className: `t-main`, children: [(0, _.jsxs)(`div`, { className: `t-head`, children: [(0, _.jsxs)(`div`, { children: [(0, _.jsxs)(`div`, { className: `pills`, style: { justifyContent: `flex-start`, margin: 0 }, children: [(0, _.jsx)(`span`, { children: `Revise` }), (0, _.jsx)(`span`, { children: `Recite` }), (0, _.jsx)(`span`, { children: `Nurture` }), (0, _.jsx)(`span`, { children: `Reward` })] }), (0, _.jsxs)(`h1`, { children: [`Assalamu Alaikum Dear `, ((t2 == null ? void 0 : t2.title) || `Ustad`) + ` `, n2, (t2 == null ? void 0 : t2.classId) ? ` · ` + f[t2.classId] : ``] })] }), (0, _.jsx)(`div`, { className: `badge green`, children: (/* @__PURE__ */ new Date()).toDateString() })] }), (0, _.jsxs)(`div`, { className: `t-body`, children: [r2 === `dashboard` && (0, _.jsx)(`p`, { className: `class-overview`, children: `Overview of ` + (f[a2] || `your classes`) }), (0, _.jsxs)(`div`, { className: `filter-tabs`, children: [(0, _.jsx)(`button`, { className: a2 === `all` ? `on` : ``, onClick: () => o2(`all`), children: `All Classes` }), d.map((e3) => (0, _.jsx)(`button`, { className: a2 === e3.id ? `on` : ``, onClick: () => o2(e3.id), children: e3.name }, e3.id))] }), (0, _.jsxs)(`div`, { className: `t-stats`, children: [(0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: b2.length }), (0, _.jsx)(`span`, { children: `Pending Submissions` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: ue(a2 === `all` ? void 0 : a2).length }), (0, _.jsx)(`span`, { children: `Students` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: y2.filter((e3) => e3.status === `approved` && String(e3.createdAt || "").slice(0, 10) === ee2).length }), (0, _.jsx)(`span`, { children: `Approved Today` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: ue(a2 === `all` ? void 0 : a2).reduce((e3, t3) => e3 + t3.stars, 0) }), (0, _.jsx)(`span`, { children: `Stars Awarded` })] })] }), (r2 === `dashboard` || r2 === `progress`) && (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(`div`, { className: `dash-switch`, children: [(0, _.jsx)(`button`, { type: `button`, className: dv === `subs` ? `on` : ``, onClick: () => setDv(`subs`), children: `Recent Submissions` }), (0, _.jsx)(`button`, { type: `button`, className: dv === `prog` ? `on` : ``, onClick: () => setDv(`prog`), children: `Student Progress` })] }), (0, _.jsxs)(`div`, { className: `dash-grid show-` + dv, children: [(0, _.jsxs)(`div`, { className: `card sub-card`, children: [(0, _.jsx)(`b`, { children: `Recent Student Submissions` }), (0, _.jsx)(`div`, { className: `sub-scroll`, children: (0, _.jsxs)(`table`, { className: `data`, children: [(0, _.jsx)(`thead`, { children: (0, _.jsxs)(`tr`, { children: [(0, _.jsx)(`th`, { children: `Student` }), (0, _.jsx)(`th`, { children: `Class` }), (0, _.jsx)(`th`, { children: `Surah` }), (0, _.jsx)(`th`, { children: `Time` }), (0, _.jsx)(`th`, { children: `Status` }), (0, _.jsx)(`th`, { children: `Actions` })] }) }), (0, _.jsxs)(`tbody`, { children: [y2.map((e3) => {
    var _a2;
    let t3 = de(e3.studentId);
    return (0, _.jsxs)(`tr`, { children: [(0, _.jsx)(`td`, { children: (0, _.jsxs)(`span`, { className: `who`, children: [(t3 == null ? void 0 : t3.photo) ? (0, _.jsx)(`img`, { className: `mini-photo`, src: t3.photo, alt: `` }) : (0, _.jsx)(`span`, { className: `avatar-init`, children: T((t3 == null ? void 0 : t3.nickname) || `S`) }), (t3 == null ? void 0 : t3.nickname) || `Student`] }) }), (0, _.jsx)(`td`, { children: t3 ? f[t3.classId] : `—` }), (0, _.jsx)(`td`, { children: (_a2 = m(e3.surahNo)) == null ? void 0 : _a2.name }), (0, _.jsx)(`td`, { children: new Date(e3.createdAt).toLocaleString() }), (0, _.jsx)(`td`, { children: (0, _.jsx)(`span`, { className: `chip ${e3.status === `approved` ? `approved` : e3.status}`, children: D(e3.status) }) }), (0, _.jsx)(`td`, { children: (0, _.jsxs)(`span`, { className: `row-actions`, children: [(0, _.jsx)(`button`, { className: `tiny ok`, onClick: () => setCtrl(e3.studentId), children: `Action` }), (0, _.jsx)(`button`, { className: `tiny ghost`, onClick: () => c2(e3), children: `Review` })] }) })] }, e3.id);
  }), y2.length === 0 && (0, _.jsx)(`tr`, { children: (0, _.jsx)(`td`, { colSpan: 6, children: `No recitations yet. Students submit from My Hifz Journey.` }) })] })] }) })] }), (0, _.jsxs)(`div`, { className: `card prog-card`, children: [(0, _.jsx)(`b`, { children: `Student Progress` }), (0, _.jsx)(`div`, { className: `prog-scroll`, children: ue(a2 === `all` ? void 0 : a2).slice().sort((x2, y3) => (Number(y3.stars) || 0) - (Number(x2.stars) || 0)).map((e3) => {
    let t3 = Se(e3), n3 = t3.filter((x2) => x2.status === `approved`).length;
    return (0, _.jsxs)(`div`, { className: `lb-row`, children: [(0, _.jsx)(Oe, { name: e3.nickname, photo: e3.photo, className: `avatar-init` }), (0, _.jsxs)(`span`, { className: `prog-meta`, children: [(0, _.jsx)(`b`, { children: e3.nickname }), (0, _.jsx)(`em`, { className: `class-chip`, children: f[e3.classId] || e3.classId || `` }), (0, _.jsx)(`i`, { style: { width: (t3.length ? Math.round(n3 / t3.length * 100) : 0) + `%` } })] }), (0, _.jsxs)(`span`, { className: `prog-score`, children: [n3, `/`, t3.length, ` ⭐ `, e3.stars] }), (0, _.jsx)(`button`, { type: `button`, className: `tiny`, onClick: () => setCtrl(e3.id), children: `Action` })] }, e3.id);
  }) })] })] })] }), r2 === `notes` && (0, _.jsx)(je, {}), r2 === `admin` && (0, _.jsx)(`div`, { className: `card admin-card`, children: adm ? (0, _.jsxs)(_.Fragment, { children: [(0, _.jsx)(`b`, { children: `Admin control` }), (0, _.jsx)(`p`, { className: `hint`, children: `Full control of teachers and students.` }), (0, _.jsx)(`h4`, { children: `Add student` }), (0, _.jsxs)(`form`, { className: `admin-form`, onSubmit: (ev) => {
    ev.preventDefault();
    let fd = new FormData(ev.target);
    try {
      adminAddStudent({ nickname: fd.get("name"), pin: fd.get("pin"), classId: fd.get("classId") });
      ev.target.reset();
      setTick((x2) => x2 + 1);
    } catch (err) {
      window.alert(err.message);
    }
  }, children: [(0, _.jsx)(`input`, { name: `name`, placeholder: `Student name`, required: true }), (0, _.jsx)(`input`, { name: `pin`, placeholder: `4-digit PIN`, maxLength: 4, required: true }), (0, _.jsx)(`select`, { name: `classId`, children: d.map((c3) => (0, _.jsx)(`option`, { value: c3.id, children: c3.name }, c3.id)) }), (0, _.jsx)(`button`, { className: `btn primary`, children: `Add student` })] }), (0, _.jsx)(`h4`, { children: `Students` }), (0, _.jsx)(`div`, { className: `ctrl-list`, children: ue().map((s3) => (0, _.jsxs)(`div`, { className: `ctrl-row`, children: [(0, _.jsxs)(`span`, { children: [s3.nickname, ` · `, f[s3.classId] || s3.classId, ` · ⭐ `, s3.stars || 0] }), (0, _.jsx)(`button`, { className: `tiny warn`, onClick: () => {
    if (window.confirm("Delete " + s3.nickname + "?")) {
      removeStudent(s3.id);
      setTick((x2) => x2 + 1);
    }
  }, children: `Delete` })] }, s3.id)) }), (0, _.jsx)(`h4`, { children: `Add teacher` }), (0, _.jsxs)(`form`, { className: `admin-form`, onSubmit: (ev) => {
    ev.preventDefault();
    let fd = new FormData(ev.target);
    try {
      adminAddTeacher({ name: fd.get("name"), email: fd.get("email"), pin: fd.get("pin"), classId: fd.get("classId"), gender: fd.get("gender") });
      ev.target.reset();
      setTick((x2) => x2 + 1);
    } catch (err) {
      window.alert(err.message);
    }
  }, children: [(0, _.jsx)(`input`, { name: `name`, placeholder: `Teacher name`, required: true }), (0, _.jsx)(`input`, { name: `email`, placeholder: `Gmail`, required: true }), (0, _.jsx)(`input`, { name: `pin`, placeholder: `4-digit PIN`, maxLength: 4, required: true }), (0, _.jsxs)(`select`, { name: `gender`, children: [(0, _.jsx)(`option`, { value: `male`, children: `Ustad` }), (0, _.jsx)(`option`, { value: `female`, children: `Ustaza` })] }), (0, _.jsx)(`select`, { name: `classId`, children: d.map((c3) => (0, _.jsx)(`option`, { value: c3.id, children: c3.name }, c3.id)) }), (0, _.jsx)(`button`, { className: `btn primary`, children: `Add teacher` })] }), (0, _.jsx)(`h4`, { children: `Teachers` }), (0, _.jsx)(`div`, { className: `ctrl-list`, children: teachers().map((tc) => (0, _.jsxs)(`div`, { className: `ctrl-row`, children: [(0, _.jsxs)(`span`, { children: [tc.title, ` `, tc.name, ` · `, f[tc.classId] || tc.classId] }), (0, _.jsx)(`button`, { className: `tiny warn`, onClick: () => {
    if (window.confirm("Delete " + tc.name + "?")) {
      deleteTeacher(tc.id);
      setTick((x2) => x2 + 1);
    }
  }, children: `Delete` })] }, tc.id)) })] }) : (0, _.jsxs)(`form`, { className: `admin-form`, onSubmit: (ev) => {
    ev.preventDefault();
    let fd = new FormData(ev.target);
    if (fd.get("code") === "nahl@2026") {
      sessionStorage.setItem("nahl.admin", "1");
      setAdm(true);
    } else window.alert("Wrong admin code");
  }, children: [(0, _.jsx)(`b`, { children: `Admin code` }), (0, _.jsx)(`p`, { className: `hint`, children: `Enter the special code to control the full system.` }), (0, _.jsx)(`input`, { name: `code`, type: `password`, placeholder: `Admin code`, required: true }), (0, _.jsx)(`button`, { className: `btn primary`, children: `Unlock` })] }) }), r2 === `classes` && (0, _.jsxs)(`div`, { className: `my-class`, children: [(0, _.jsxs)(`div`, { className: `my-class-hero`, children: [(t2 == null ? void 0 : t2.photo) ? (0, _.jsx)(`img`, { src: t2.photo, alt: `` }) : (0, _.jsx)(`span`, { className: `avatar-init`, children: T(n2) }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`small`, { children: `MY CLASS` }), (0, _.jsx)(`h2`, { children: f[t2 == null ? void 0 : t2.classId] || `Your class` }), (0, _.jsx)(`p`, { children: (d.find((e3) => e3.id === (t2 == null ? void 0 : t2.classId)) || {}).ages || `Your selected class` })] }), (0, _.jsx)(`button`, { type: `button`, className: `tiny edit-me`, onClick: () => setEditMe(true), children: `Edit` })] }), (0, _.jsxs)(`div`, { className: `t-stats`, children: [(0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: ue(t2 == null ? void 0 : t2.classId).length }), (0, _.jsx)(`span`, { children: `Students` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: _e().filter((e3) => {
    var _a2;
    return ((_a2 = de(e3.studentId)) == null ? void 0 : _a2.classId) === (t2 == null ? void 0 : t2.classId) && e3.status === `pending`;
  }).length }), (0, _.jsx)(`span`, { children: `Waiting` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: _e().filter((e3) => {
    var _a2;
    return ((_a2 = de(e3.studentId)) == null ? void 0 : _a2.classId) === (t2 == null ? void 0 : t2.classId) && e3.status === `approved` && String(e3.createdAt || "").slice(0, 10) === ee2;
  }).length }), (0, _.jsx)(`span`, { children: `Approved today` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: ue(t2 == null ? void 0 : t2.classId).reduce((e3, s3) => e3 + (s3.stars || 0), 0) }), (0, _.jsx)(`span`, { children: `Class stars` })] })] }), (0, _.jsxs)(`div`, { className: `card`, children: [(0, _.jsx)(`b`, { children: `Students in your class` }), ue(t2 == null ? void 0 : t2.classId).length === 0 && (0, _.jsx)(`p`, { className: `hint`, children: `No students in this class yet.` }), ue(t2 == null ? void 0 : t2.classId).map((e3) => (0, _.jsxs)(`div`, { className: `class-student`, children: [(0, _.jsx)(Oe, { name: e3.nickname, photo: e3.photo, className: `avatar-init` }), (0, _.jsxs)(`span`, { children: [(0, _.jsx)(`b`, { children: e3.nickname + (e3.teacherId === (t2 == null ? void 0 : t2.teacherId) ? ` · mine` : ``) }), (0, _.jsx)(`small`, { children: `⭐ ` + e3.stars })] }), (0, _.jsxs)(`span`, { className: `class-actions`, children: [(0, _.jsx)(`button`, { className: e3.teacherId === (t2 == null ? void 0 : t2.teacherId) ? `tiny ok` : `tiny ghost`, onClick: () => {
    assignStudent(e3.id, e3.teacherId === (t2 == null ? void 0 : t2.teacherId) ? null : t2 == null ? void 0 : t2.teacherId), setTick((e4) => e4 + 1);
  }, children: e3.teacherId === (t2 == null ? void 0 : t2.teacherId) ? `Assigned` : `Assign` }), (0, _.jsx)(`button`, { className: `tiny warn`, onClick: () => {
    let pin = window.prompt(`New 4-digit PIN for ` + e3.nickname);
    if (!pin) return;
    if (!/^\d{4}$/.test(pin)) return window.alert(`PIN must be 4 digits`);
    resetStudentPin(e3.id, pin), setTick((e4) => e4 + 1), window.alert(`PIN updated`);
  }, children: `Reset PIN` })] })] }, e3.id))] }), (0, _.jsxs)(`div`, { className: `card hifz-track`, children: [(0, _.jsx)(`b`, { children: `Daily Hifz Tracker` }), (0, _.jsx)(`p`, { className: `hint`, children: `Record today's surah for a student. It shows on their Progress page.` }), (0, _.jsxs)(`form`, { className: `hifz-form`, onSubmit: (ev) => {
    ev.preventDefault();
    let fd = new FormData(ev.target);
    let sid = fd.get("sid");
    let surah = String(fd.get("surah") || "").trim();
    if (!sid || !surah) {
      window.alert("Choose a student and write the surah");
      return;
    }
    let from = String(fd.get("from") || "");
    let to = String(fd.get("to") || "");
    let target = Number(from) && Number(to) ? Math.max(0, Number(to) - Number(from) + 1) : "";
    addTracker({ studentId: sid, surah, verseFrom: from, verseTo: to, target, activity: fd.get("activity") || "Memorisation", status: "In Progress", actual: target, note: "" });
    setTick((x2) => x2 + 1);
    ev.target.reset();
    window.alert("Added to student tracker");
  }, children: [ue(t2 == null ? void 0 : t2.classId).length === 0 ? (0, _.jsx)(`p`, { className: `hint`, children: `No students in this class yet.` }) : (0, _.jsxs)(_.Fragment, { children: [(0, _.jsx)(`label`, { children: `Student` }), (0, _.jsxs)(`select`, { name: `sid`, required: true, children: [(0, _.jsx)(`option`, { value: ``, children: `Choose student` }), ue(t2 == null ? void 0 : t2.classId).map((s3) => (0, _.jsx)(`option`, { value: s3.id, children: s3.nickname }, s3.id))] }), (0, _.jsx)(`label`, { children: `Surah` }), (0, _.jsx)(`input`, { name: `surah`, placeholder: `Al-Fatihah`, required: true }), (0, _.jsx)(`label`, { children: `Verse from` }), (0, _.jsx)(`input`, { name: `from`, inputMode: `numeric`, placeholder: `1` }), (0, _.jsx)(`label`, { children: `Verse to` }), (0, _.jsx)(`input`, { name: `to`, inputMode: `numeric`, placeholder: `7` }), (0, _.jsx)(`label`, { children: `Activity` }), (0, _.jsxs)(`select`, { name: `activity`, children: [(0, _.jsx)(`option`, { children: `Memorisation` }), (0, _.jsx)(`option`, { children: `Revision` }), (0, _.jsx)(`option`, { children: `Recitation` })] }), (0, _.jsx)(`button`, { className: `btn primary`, type: `submit`, children: `Add to tracker` })] })] })] }), (0, _.jsxs)(`div`, { className: `card`, children: [(0, _.jsx)(`b`, { children: `My students` }), ue(t2 == null ? void 0 : t2.classId).length === 0 && (0, _.jsx)(`p`, { className: `hint`, children: `No students in this class yet.` }), ue(t2 == null ? void 0 : t2.classId).map((e3) => (0, _.jsxs)(`div`, { className: `class-student`, children: [(0, _.jsx)(`b`, { children: e3.nickname }), (0, _.jsx)(`small`, { children: `⭐ ` + e3.stars })] }, e3.id))] }), (0, _.jsxs)(`div`, { className: `card`, children: [(0, _.jsx)(`b`, { children: `Waiting for review` }), _e().filter((e3) => {
    var _a2;
    return ((_a2 = de(e3.studentId)) == null ? void 0 : _a2.classId) === (t2 == null ? void 0 : t2.classId) && e3.status === `pending`;
  }).map((e3) => {
    var _a2, _b2, _c, _d;
    return (0, _.jsxs)(`div`, { className: `class-student`, children: [(0, _.jsxs)(`span`, { className: `who`, children: [((_a2 = de(e3.studentId)) == null ? void 0 : _a2.photo) ? (0, _.jsx)(`img`, { className: `mini-photo`, src: de(e3.studentId).photo, alt: `` }) : (0, _.jsx)(`span`, { className: `avatar-init`, children: T(((_b2 = de(e3.studentId)) == null ? void 0 : _b2.nickname) || `S`) }), (0, _.jsxs)(`span`, { children: [(0, _.jsx)(`b`, { children: ((_c = de(e3.studentId)) == null ? void 0 : _c.nickname) || `Student` }), (0, _.jsx)(`small`, { children: ((_d = m(e3.surahNo)) == null ? void 0 : _d.name) || `Surah` })] })] }), (0, _.jsx)(`button`, { className: `tiny ok`, onClick: () => c2(e3), children: `Review` })] }, e3.id);
  }), _e().filter((e3) => {
    var _a2;
    return ((_a2 = de(e3.studentId)) == null ? void 0 : _a2.classId) === (t2 == null ? void 0 : t2.classId) && e3.status === `pending`;
  }).length === 0 && (0, _.jsx)(`p`, { className: `hint`, children: `All caught up. No pending recitations.` })] })] }), r2 === `progress` && (0, _.jsxs)(`div`, { className: `card`, style: { marginTop: 14 }, children: [(0, _.jsx)(`b`, { children: `Student Progress` }), ue(a2 === `all` ? void 0 : a2).map((e3) => {
    let t3 = Se(e3), n3 = t3.filter((e4) => e4.status === `approved`).length;
    return (0, _.jsxs)(`div`, { className: `lb-row`, children: [(0, _.jsx)(`span`, { className: `avatar-init`, children: T(e3.nickname) }), (0, _.jsxs)(`span`, { style: { flex: 1 }, children: [e3.nickname, ` · `, f[e3.classId]] }), (0, _.jsxs)(`span`, { children: [n3, `/`, t3.length, ` · ⭐ `, e3.stars] })] }, e3.id);
  })] })] })] }), editMe && (0, _.jsx)(`div`, { className: `modal-bg`, onClick: () => setEditMe(false), children: (0, _.jsxs)(`form`, { className: `modal ctrl-modal`, onClick: (ev) => ev.stopPropagation(), onSubmit: (ev) => {
    ev.preventDefault();
    let name = (new FormData(ev.target).get("name") || "").trim();
    if (!name) return;
    saveMe({ name });
    setEditMe(false);
    setTick((x2) => x2 + 1);
  }, children: [(0, _.jsx)(`b`, { children: `Edit profile` }), (0, _.jsx)(`p`, { className: `hint`, children: `Change your name and photo.` }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Name` }), (0, _.jsx)(`input`, { name: `name`, defaultValue: n2, required: true })] }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Photo` }), (0, _.jsx)(`input`, { type: `file`, accept: `image/*`, onChange: (ev) => {
    let file = ev.target.files && ev.target.files[0];
    if (!file) return;
    we(file).then((photo) => {
      saveMe({ photo });
      setTick((x2) => x2 + 1);
    }).catch(() => window.alert("Could not read that photo"));
  } })] }), (0, _.jsxs)(`div`, { className: `actions`, children: [(0, _.jsx)(`button`, { type: `button`, className: `tiny ghost`, onClick: () => setEditMe(false), children: `Close` }), (0, _.jsx)(`button`, { className: `btn primary`, children: `Save` })] })] }) }), ctrl && (0, _.jsx)(`div`, { className: `modal-bg`, onClick: () => setCtrl(null), children: (0, _.jsxs)(`div`, { className: `modal ctrl-modal`, onClick: (ev) => ev.stopPropagation(), children: (() => {
    let st = de(ctrl) || {};
    let rows = tracker().filter((x2) => x2.studentId === ctrl);
    let subs = _e().filter((x2) => x2.studentId === ctrl);
    let week = subs.filter((x2) => Date.now() - new Date(x2.createdAt).getTime() < 6048e5);
    return [(0, _.jsx)(`h3`, { children: `Student control` }), (0, _.jsxs)(`p`, { children: [st.nickname || `Student`, ` · `, f[st.classId] || ``] }), (0, _.jsxs)(`div`, { className: `ctrl-photo`, children: [st.photo ? (0, _.jsx)(`img`, { src: st.photo, alt: `` }) : (0, _.jsx)(`span`, { className: `avatar-init`, children: T(st.nickname) }), (0, _.jsx)(`label`, { className: `btn ghost`, children: [`Change photo`, (0, _.jsx)(`input`, { type: `file`, accept: `image/*`, hidden: true, onChange: (ev) => {
      let file = ev.target.files && ev.target.files[0];
      if (!file) return;
      we(file).then((photo) => {
        saveStudent(ctrl, { photo });
        setTick((x2) => x2 + 1);
      }).catch(() => window.alert("Could not read that photo"));
    } })] })] }), (0, _.jsxs)(`label`, { children: [`Total stars`, (0, _.jsxs)(`div`, { className: `star-save`, children: [(0, _.jsx)(`input`, { type: `number`, defaultValue: st.stars || 0, id: `star-` + ctrl }), (0, _.jsx)(`button`, { type: `button`, className: `btn primary`, onClick: () => {
      let v2 = document.getElementById("star-" + ctrl);
      saveStudent(ctrl, { stars: Number(v2 && v2.value) || 0 });
      setTick((x2) => x2 + 1);
    }, children: `Save stars` })] })] }), (0, _.jsx)(`button`, { className: `btn`, onClick: () => {
      saveStudent(ctrl, { boardHidden: !st.boardHidden });
      setTick((x2) => x2 + 1);
    }, children: st.boardHidden ? `Show on leaderboard` : `Remove from leaderboard` }), (0, _.jsx)(`h4`, { children: `Daily tracker` }), rows.length ? (0, _.jsx)(`div`, { className: `ctrl-list`, children: rows.map((row) => (0, _.jsxs)(`div`, { className: `ctrl-row`, children: [(0, _.jsxs)(`span`, { children: [row.date, ` · `, row.surah || `Surah`] }), (0, _.jsx)(`button`, { className: `tiny ghost`, onClick: () => {
      let surah = window.prompt(`Surah`, row.surah || ``);
      if (surah == null) return;
      updateTracker(row.id, { surah });
      setTick((x2) => x2 + 1);
    }, children: `Edit` }), (0, _.jsx)(`button`, { className: `tiny warn`, onClick: () => {
      deleteTracker(row.id);
      setTick((x2) => x2 + 1);
    }, children: `Delete` })] }, row.id)) }) : (0, _.jsx)(`p`, { className: `hint`, children: `No tracker rows yet.` }), (0, _.jsx)(`h4`, { children: `Weekly report` }), (0, _.jsx)(`p`, { children: week.length + ` submissions in 7 days · ` + (st.stars || 0) + ` stars` }), (0, _.jsx)(`button`, { className: `btn primary`, onClick: () => {
      let html = `<h1>` + (st.nickname || `Student`) + ` progress summary</h1><p>Stars: ` + (st.stars || 0) + `</p><h2>Weekly submissions</h2><ul>` + week.map((x2) => `<li>` + new Date(x2.createdAt).toLocaleString() + ` · surah ` + x2.surahNo + ` · ` + x2.status + `</li>`).join(``) + `</ul><h2>Daily tracker</h2><ul>` + rows.map((x2) => `<li>` + x2.date + ` · ` + (x2.surah || ``) + `</li>`).join(``) + `</ul>`;
      let win = window.open(``, `_blank`);
      if (!win) {
        window.alert(`Allow pop-up to download PDF`);
        return;
      }
      win.document.write(`<html><body>` + html + `<script>window.print()<\/script></body></html>`);
      win.document.close();
    }, children: `Download progress PDF` }), (0, _.jsx)(`button`, { className: `btn danger`, onClick: () => {
      if (!window.confirm(`Delete this student account?`)) return;
      removeStudent(ctrl);
      setCtrl(null);
      setTick((x2) => x2 + 1);
    }, children: `Delete student account` }), (0, _.jsx)(`button`, { className: `tiny ghost`, onClick: () => setCtrl(null), children: `Close` })];
  })() }) }), s2 && (0, _.jsx)(`div`, { className: `modal-bg`, onClick: () => c2(null), children: (0, _.jsxs)(`div`, { className: `modal`, onClick: (e3) => e3.stopPropagation(), children: [(0, _.jsx)(`h3`, { children: `Review recitation` }), (0, _.jsxs)(`p`, { children: [(_a = de(s2.studentId)) == null ? void 0 : _a.nickname, ` · `, (_b = m(s2.surahNo)) == null ? void 0 : _b.name] }), s2.mediaUrl && String(s2.mediaUrl).includes("drive.google.com") && (0, _.jsx)(`iframe`, { className: `review-media`, src: s2.mediaUrl, allow: `autoplay`, style: { height: "220px", border: 0 } }), s2.mediaUrl && !String(s2.mediaUrl).includes("drive.google.com") && (s2.mediaType === `audio` || s2.mediaType !== `video` && /\.(mp3|m4a|aac|wav|ogg|oga|opus|webm|amr|3gp|flac|caf)(\?|#|$)/i.test(String(s2.mediaUrl))) && (0, _.jsx)(`audio`, { className: `review-media`, controls: true, src: playUrl(s2.mediaUrl, s2.mediaType), preload: `metadata`, onLoadedMetadata: (e3) => {
    let el = e3.currentTarget;
    if (!isFinite(el.duration)) {
      el.dataset.fix = "1";
      try {
        el.currentTime = 1e7;
      } catch (_2) {
      }
    }
  }, onDurationChange: (e3) => {
    let el = e3.currentTarget;
    if (el.dataset.fix) {
      delete el.dataset.fix;
      try {
        el.currentTime = 0;
      } catch (_2) {
      }
    }
  }, onError: (e3) => {
    let el = e3.currentTarget;
    let r3 = Number(el.dataset.r || 0);
    if (r3 < 3) {
      el.dataset.r = String(r3 + 1);
      setTimeout(() => {
        el.load();
      }, 3e3);
    } else if (!el.dataset.dead) {
      el.dataset.dead = "1";
      el.insertAdjacentHTML("afterend", '<p class="hint" style="color:#b3261e;font-weight:600">⚠️ This file could not be loaded from the server. It may have been removed — please ask the student to submit it again.</p>');
    }
  } }), s2.mediaUrl && !String(s2.mediaUrl).includes("drive.google.com") && (s2.mediaType === `audio` || s2.mediaType !== `video` && /\.(mp3|m4a|aac|wav|ogg|oga|opus|webm|amr|3gp|flac|caf)(\?|#|$)/i.test(String(s2.mediaUrl))) && (0, _.jsx)(`a`, { href: playUrl(s2.mediaUrl, s2.mediaType), target: `_blank`, rel: `noreferrer`, className: `hint`, children: `If the audio does not play, tap here to open it as MP3` }), s2.mediaUrl && !String(s2.mediaUrl).includes("drive.google.com") && s2.mediaType === `video` && (0, _.jsx)(`video`, { className: `review-media`, controls: true, src: s2.mediaUrl, playsInline: true }), !s2.mediaUrl && (0, _.jsx)(`p`, { className: `hint`, children: s2.mediaName ? `Clip saved on the student phone. Drive upload is not connected yet.` : `No audio or video was attached.` }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Feedback` }), (0, _.jsx)(`textarea`, { rows: 4, value: u2, onChange: (e3) => p2(e3.target.value) })] }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Extra stars on approve` }), (0, _.jsx)(`input`, { inputMode: `numeric`, placeholder: ``, value: h2, onChange: (e3) => g2(e3.target.value.replace(/\D/g, ``)) })] }), (0, _.jsxs)(`div`, { className: `actions`, children: [(0, _.jsx)(`button`, { className: `tiny ok`, onClick: () => {
    ye(s2.id, `approved`, u2, Number(h2) || 0, n2), c2(null);
  }, children: `Approve` }), (0, _.jsx)(`button`, { className: `tiny warn`, onClick: () => {
    ye(s2.id, `revision`, u2, 0, n2), c2(null);
  }, children: `Needs Revision` }), (0, _.jsx)(`button`, { className: `tiny ghost`, onClick: () => c2(null), children: `Close` })] })] }) })] });
}
function je() {
  let [e2, t2] = (0, l.useState)(``), [n2, r2] = (0, l.useState)(``), [, i2] = (0, l.useState)(0);
  return (0, _.jsxs)(`div`, { className: `card`, style: { marginTop: 14 }, children: [(0, _.jsx)(`b`, { children: `Teacher Notes` }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Title` }), (0, _.jsx)(`input`, { value: e2, onChange: (e3) => t2(e3.target.value) })] }), (0, _.jsxs)(`div`, { className: `field`, children: [(0, _.jsx)(`label`, { children: `Note` }), (0, _.jsx)(`textarea`, { rows: 3, value: n2, onChange: (e3) => r2(e3.target.value) })] }), (0, _.jsx)(`button`, { className: `btn primary`, onClick: () => {
    var _a, _b;
    e2 && n2 && (xe({ teacher: ((_a = me()) == null ? void 0 : _a.name) || `Teacher`, classId: ((_b = me()) == null ? void 0 : _b.classId) || `all`, title: e2, body: n2 }), t2(``), r2(``), i2((e3) => e3 + 1));
  }, children: `Add note` }), be().map((e3) => (0, _.jsx)(`div`, { className: `task`, children: (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`b`, { children: e3.title }), (0, _.jsx)(`small`, { children: e3.body })] }) }, e3.id))] });
}
function Me({ onOut: e2 }) {
  let t2 = ue();
  return (0, _.jsxs)(`div`, { className: `teacher`, children: [(0, _.jsxs)(`aside`, { className: `side`, children: [(0, _.jsxs)(`div`, { className: `brand`, children: [(0, _.jsx)(v, { size: 46 }), (0, _.jsxs)(`div`, { children: [(0, _.jsx)(`b`, { children: `NAHL Hifz Club` }), (0, _.jsx)(`small`, { children: `Admin` })] })] }), (0, _.jsx)(`button`, { className: `on`, children: `Dashboard` }), (0, _.jsx)(`button`, { onClick: e2, children: `↪ Log out` })] }), (0, _.jsxs)(`main`, { className: `t-main`, children: [(0, _.jsx)(`div`, { className: `t-head`, children: (0, _.jsx)(`h1`, { children: `Admin Dashboard` }) }), (0, _.jsxs)(`div`, { className: `t-body`, children: [(0, _.jsxs)(`div`, { className: `t-stats`, children: [(0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: t2.length }), (0, _.jsx)(`span`, { children: `Students` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: `5` }), (0, _.jsx)(`span`, { children: `Classes` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: _e().length }), (0, _.jsx)(`span`, { children: `Submissions` })] }), (0, _.jsxs)(`div`, { className: `t-stat`, children: [(0, _.jsx)(`b`, { children: t2.reduce((e3, t3) => e3 + t3.stars, 0) }), (0, _.jsx)(`span`, { children: `Stars` })] })] }), (0, _.jsxs)(`div`, { className: `card`, style: { marginTop: 14 }, children: [(0, _.jsx)(`b`, { children: `Students` }), t2.map((e3) => (0, _.jsxs)(`div`, { className: `lb-row`, children: [(0, _.jsx)(`span`, { className: `avatar-init`, children: T(e3.nickname) }), (0, _.jsx)(`span`, { style: { flex: 1 }, children: e3.nickname }), (0, _.jsx)(`span`, { children: f[e3.classId] })] }, e3.id))] })] })] })] });
}
function Ne() {
  return { name: (location.hash.replace(`#/`, ``) || ``).split(`?`)[0] || `home` };
}
function Pe() {
  let [, e2] = (0, l.useState)(0), t2 = () => e2((e3) => e3 + 1);
  (0, l.useEffect)(() => {
    let e3 = () => t2();
    return window.addEventListener(`hashchange`, e3), () => window.removeEventListener(`hashchange`, e3);
  }, []);
  let n2 = Ne(), r2 = me();
  return n2.name === `login` ? (0, _.jsx)(E, { mode: `login`, onDone: () => {
    location.hash = `#/app`, t2();
  } }) : n2.name === `register` ? (0, _.jsx)(E, { mode: `register`, onDone: () => {
    location.hash = `#/app`, t2();
  } }) : n2.name === `staff` ? (0, _.jsx)(O, { onDone: (e3) => {
    location.hash = e3 === `admin` ? `#/admin` : `#/teacher`, t2();
  } }) : n2.name === `teacher` ? (r2 == null ? void 0 : r2.role) !== `teacher` && (r2 == null ? void 0 : r2.role) !== `admin` ? (location.hash = `#/staff`, null) : (0, _.jsx)(Ae, { onOut: () => {
    he(), location.hash = `#/`, t2();
  } }) : n2.name === `admin` ? (r2 == null ? void 0 : r2.role) === `admin` ? (0, _.jsx)(Me, { onOut: () => {
    he(), location.hash = `#/`, t2();
  } }) : (location.hash = `#/staff`, null) : n2.name === `app` ? (r2 == null ? void 0 : r2.role) === `student` ? (0, _.jsx)(Te, { onOut: () => {
    location.hash = `#/`, t2();
  } }) : (location.hash = `#/`, null) : (0, _.jsx)(oe, {});
}
class EB extends l.Component {
  constructor(e2) {
    super(e2);
    this.state = { err: null };
  }
  static getDerivedStateFromError(e2) {
    return { err: e2 };
  }
  render() {
    if (this.state.err) {
      let m2 = String(this.state.err && (this.state.err.stack || this.state.err.message) || this.state.err);
      return (0, _.jsx)("pre", { style: { whiteSpace: "pre-wrap", padding: 16, color: "#9b1c1c", fontSize: 12 }, children: m2 });
    }
    return this.props.children;
  }
}
try {
  document.getElementById("root").setAttribute("data-boot", "1");
  (0, u.createRoot)(document.getElementById(`root`)).render((0, _.jsx)(EB, { children: (0, _.jsx)(l.StrictMode, { children: (0, _.jsx)(Pe, {}) }) }));
} catch (err) {
  document.getElementById("root").textContent = String(err && err.stack || err);
}
