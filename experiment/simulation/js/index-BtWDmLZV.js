(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && l(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const u = {};
    return (
      r.integrity && (u.integrity = r.integrity),
      r.referrerPolicy && (u.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const u = a(r);
    fetch(r.href, u);
  }
})();
function lb(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var mf = { exports: {} },
  wl = {};
var Em;
function sv() {
  if (Em) return wl;
  Em = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function a(l, r, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      r.key !== void 0 && (c = "" + r.key),
      "key" in r)
    ) {
      u = {};
      for (var h in r) h !== "key" && (u[h] = r[h]);
    } else u = r;
    return (
      (r = u.ref),
      { $$typeof: i, type: l, key: c, ref: r !== void 0 ? r : null, props: u }
    );
  }
  return (wl.Fragment = e), (wl.jsx = a), (wl.jsxs = a), wl;
}
var Mm;
function lv() {
  return Mm || ((Mm = 1), (mf.exports = sv())), mf.exports;
}
var U = lv(),
  bf = { exports: {} },
  vt = {};
var Tm;
function ov() {
  if (Tm) return vt;
  Tm = 1;
  var i = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    d = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (_ && A[_]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    O = {};
  function E(A, F, B) {
    (this.props = A),
      (this.context = F),
      (this.refs = O),
      (this.updater = B || w);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (A, F) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, F, "setState");
    }),
    (E.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function tt() {}
  tt.prototype = E.prototype;
  function I(A, F, B) {
    (this.props = A),
      (this.context = F),
      (this.refs = O),
      (this.updater = B || w);
  }
  var $ = (I.prototype = new tt());
  ($.constructor = I), M($, E.prototype), ($.isPureReactComponent = !0);
  var j = Array.isArray;
  function J() {}
  var T = { H: null, A: null, T: null, S: null },
    S = Object.prototype.hasOwnProperty;
  function v(A, F, B) {
    var et = B.ref;
    return {
      $$typeof: i,
      type: A,
      key: F,
      ref: et !== void 0 ? et : null,
      props: B,
    };
  }
  function N(A, F) {
    return v(A.type, F, A.props);
  }
  function k(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function R(A) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (B) {
        return F[B];
      })
    );
  }
  var W = /\/+/g;
  function lt(A, F) {
    return typeof A == "object" && A !== null && A.key != null
      ? R("" + A.key)
      : F.toString(36);
  }
  function at(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(J, J)
            : ((A.status = "pending"),
              A.then(
                function (F) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = F));
                },
                function (F) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = F));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function H(A, F, B, et, st) {
    var ot = typeof A;
    (ot === "undefined" || ot === "boolean") && (A = null);
    var bt = !1;
    if (A === null) bt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case e:
              bt = !0;
              break;
            case m:
              return (bt = A._init), H(bt(A._payload), F, B, et, st);
          }
      }
    if (bt)
      return (
        (st = st(A)),
        (bt = et === "" ? "." + lt(A, 0) : et),
        j(st)
          ? ((B = ""),
            bt != null && (B = bt.replace(W, "$&/") + "/"),
            H(st, F, B, "", function (Bt) {
              return Bt;
            }))
          : st != null &&
            (k(st) &&
              (st = N(
                st,
                B +
                  (st.key == null || (A && A.key === st.key)
                    ? ""
                    : ("" + st.key).replace(W, "$&/") + "/") +
                  bt
              )),
            F.push(st)),
        1
      );
    bt = 0;
    var pt = et === "" ? "." : et + ":";
    if (j(A))
      for (var dt = 0; dt < A.length; dt++)
        (et = A[dt]), (ot = pt + lt(et, dt)), (bt += H(et, F, B, ot, st));
    else if (((dt = x(A)), typeof dt == "function"))
      for (A = dt.call(A), dt = 0; !(et = A.next()).done; )
        (et = et.value), (ot = pt + lt(et, dt++)), (bt += H(et, F, B, ot, st));
    else if (ot === "object") {
      if (typeof A.then == "function") return H(at(A), F, B, et, st);
      throw (
        ((F = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return bt;
  }
  function G(A, F, B) {
    if (A == null) return A;
    var et = [],
      st = 0;
    return (
      H(A, et, "", "", function (ot) {
        return F.call(B, ot, st++);
      }),
      et
    );
  }
  function nt(A) {
    if (A._status === -1) {
      var F = A._result;
      (F = F()),
        F.then(
          function (B) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = B));
          },
          function (B) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = B));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = F));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var F = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(F)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    ut = {
      map: G,
      forEach: function (A, F, B) {
        G(
          A,
          function () {
            F.apply(this, arguments);
          },
          B
        );
      },
      count: function (A) {
        var F = 0;
        return (
          G(A, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (A) {
        return (
          G(A, function (F) {
            return F;
          }) || []
        );
      },
      only: function (A) {
        if (!k(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    };
  return (
    (vt.Activity = b),
    (vt.Children = ut),
    (vt.Component = E),
    (vt.Fragment = a),
    (vt.Profiler = r),
    (vt.PureComponent = I),
    (vt.StrictMode = l),
    (vt.Suspense = p),
    (vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
    (vt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return T.H.useMemoCache(A);
      },
    }),
    (vt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (vt.cacheSignal = function () {
      return null;
    }),
    (vt.cloneElement = function (A, F, B) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var et = M({}, A.props),
        st = A.key;
      if (F != null)
        for (ot in (F.key !== void 0 && (st = "" + F.key), F))
          !S.call(F, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && F.ref === void 0) ||
            (et[ot] = F[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) et.children = B;
      else if (1 < ot) {
        for (var bt = Array(ot), pt = 0; pt < ot; pt++)
          bt[pt] = arguments[pt + 2];
        et.children = bt;
      }
      return v(A.type, st, et);
    }),
    (vt.createContext = function (A) {
      return (
        (A = {
          $$typeof: c,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: u, _context: A }),
        A
      );
    }),
    (vt.createElement = function (A, F, B) {
      var et,
        st = {},
        ot = null;
      if (F != null)
        for (et in (F.key !== void 0 && (ot = "" + F.key), F))
          S.call(F, et) &&
            et !== "key" &&
            et !== "__self" &&
            et !== "__source" &&
            (st[et] = F[et]);
      var bt = arguments.length - 2;
      if (bt === 1) st.children = B;
      else if (1 < bt) {
        for (var pt = Array(bt), dt = 0; dt < bt; dt++)
          pt[dt] = arguments[dt + 2];
        st.children = pt;
      }
      if (A && A.defaultProps)
        for (et in ((bt = A.defaultProps), bt))
          st[et] === void 0 && (st[et] = bt[et]);
      return v(A, ot, st);
    }),
    (vt.createRef = function () {
      return { current: null };
    }),
    (vt.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (vt.isValidElement = k),
    (vt.lazy = function (A) {
      return { $$typeof: m, _payload: { _status: -1, _result: A }, _init: nt };
    }),
    (vt.memo = function (A, F) {
      return { $$typeof: d, type: A, compare: F === void 0 ? null : F };
    }),
    (vt.startTransition = function (A) {
      var F = T.T,
        B = {};
      T.T = B;
      try {
        var et = A(),
          st = T.S;
        st !== null && st(B, et),
          typeof et == "object" &&
            et !== null &&
            typeof et.then == "function" &&
            et.then(J, it);
      } catch (ot) {
        it(ot);
      } finally {
        F !== null && B.types !== null && (F.types = B.types), (T.T = F);
      }
    }),
    (vt.unstable_useCacheRefresh = function () {
      return T.H.useCacheRefresh();
    }),
    (vt.use = function (A) {
      return T.H.use(A);
    }),
    (vt.useActionState = function (A, F, B) {
      return T.H.useActionState(A, F, B);
    }),
    (vt.useCallback = function (A, F) {
      return T.H.useCallback(A, F);
    }),
    (vt.useContext = function (A) {
      return T.H.useContext(A);
    }),
    (vt.useDebugValue = function () {}),
    (vt.useDeferredValue = function (A, F) {
      return T.H.useDeferredValue(A, F);
    }),
    (vt.useEffect = function (A, F) {
      return T.H.useEffect(A, F);
    }),
    (vt.useEffectEvent = function (A) {
      return T.H.useEffectEvent(A);
    }),
    (vt.useId = function () {
      return T.H.useId();
    }),
    (vt.useImperativeHandle = function (A, F, B) {
      return T.H.useImperativeHandle(A, F, B);
    }),
    (vt.useInsertionEffect = function (A, F) {
      return T.H.useInsertionEffect(A, F);
    }),
    (vt.useLayoutEffect = function (A, F) {
      return T.H.useLayoutEffect(A, F);
    }),
    (vt.useMemo = function (A, F) {
      return T.H.useMemo(A, F);
    }),
    (vt.useOptimistic = function (A, F) {
      return T.H.useOptimistic(A, F);
    }),
    (vt.useReducer = function (A, F, B) {
      return T.H.useReducer(A, F, B);
    }),
    (vt.useRef = function (A) {
      return T.H.useRef(A);
    }),
    (vt.useState = function (A) {
      return T.H.useState(A);
    }),
    (vt.useSyncExternalStore = function (A, F, B) {
      return T.H.useSyncExternalStore(A, F, B);
    }),
    (vt.useTransition = function () {
      return T.H.useTransition();
    }),
    (vt.version = "19.2.0"),
    vt
  );
}
var Am;
function Zf() {
  return Am || ((Am = 1), (bf.exports = ov())), bf.exports;
}
var ft = Zf(),
  yf = { exports: {} },
  _l = {},
  vf = { exports: {} },
  wf = {};
var Om;
function rv() {
  return (
    Om ||
      ((Om = 1),
      (function (i) {
        function e(H, G) {
          var nt = H.length;
          H.push(G);
          t: for (; 0 < nt; ) {
            var it = (nt - 1) >>> 1,
              ut = H[it];
            if (0 < r(ut, G)) (H[it] = G), (H[nt] = ut), (nt = it);
            else break t;
          }
        }
        function a(H) {
          return H.length === 0 ? null : H[0];
        }
        function l(H) {
          if (H.length === 0) return null;
          var G = H[0],
            nt = H.pop();
          if (nt !== G) {
            H[0] = nt;
            t: for (var it = 0, ut = H.length, A = ut >>> 1; it < A; ) {
              var F = 2 * (it + 1) - 1,
                B = H[F],
                et = F + 1,
                st = H[et];
              if (0 > r(B, nt))
                et < ut && 0 > r(st, B)
                  ? ((H[it] = st), (H[et] = nt), (it = et))
                  : ((H[it] = B), (H[F] = nt), (it = F));
              else if (et < ut && 0 > r(st, nt))
                (H[it] = st), (H[et] = nt), (it = et);
              else break t;
            }
          }
          return G;
        }
        function r(H, G) {
          var nt = H.sortIndex - G.sortIndex;
          return nt !== 0 ? nt : H.id - G.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          i.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            h = c.now();
          i.unstable_now = function () {
            return c.now() - h;
          };
        }
        var p = [],
          d = [],
          m = 1,
          b = null,
          _ = 3,
          x = !1,
          w = !1,
          M = !1,
          O = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          tt = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        function $(H) {
          for (var G = a(d); G !== null; ) {
            if (G.callback === null) l(d);
            else if (G.startTime <= H)
              l(d), (G.sortIndex = G.expirationTime), e(p, G);
            else break;
            G = a(d);
          }
        }
        function j(H) {
          if (((M = !1), $(H), !w))
            if (a(p) !== null) (w = !0), J || ((J = !0), R());
            else {
              var G = a(d);
              G !== null && at(j, G.startTime - H);
            }
        }
        var J = !1,
          T = -1,
          S = 5,
          v = -1;
        function N() {
          return O ? !0 : !(i.unstable_now() - v < S);
        }
        function k() {
          if (((O = !1), J)) {
            var H = i.unstable_now();
            v = H;
            var G = !0;
            try {
              t: {
                (w = !1), M && ((M = !1), tt(T), (T = -1)), (x = !0);
                var nt = _;
                try {
                  e: {
                    for (
                      $(H), b = a(p);
                      b !== null && !(b.expirationTime > H && N());

                    ) {
                      var it = b.callback;
                      if (typeof it == "function") {
                        (b.callback = null), (_ = b.priorityLevel);
                        var ut = it(b.expirationTime <= H);
                        if (((H = i.unstable_now()), typeof ut == "function")) {
                          (b.callback = ut), $(H), (G = !0);
                          break e;
                        }
                        b === a(p) && l(p), $(H);
                      } else l(p);
                      b = a(p);
                    }
                    if (b !== null) G = !0;
                    else {
                      var A = a(d);
                      A !== null && at(j, A.startTime - H), (G = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (_ = nt), (x = !1);
                }
                G = void 0;
              }
            } finally {
              G ? R() : (J = !1);
            }
          }
        }
        var R;
        if (typeof I == "function")
          R = function () {
            I(k);
          };
        else if (typeof MessageChannel < "u") {
          var W = new MessageChannel(),
            lt = W.port2;
          (W.port1.onmessage = k),
            (R = function () {
              lt.postMessage(null);
            });
        } else
          R = function () {
            E(k, 0);
          };
        function at(H, G) {
          T = E(function () {
            H(i.unstable_now());
          }, G);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (i.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (S = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (i.unstable_next = function (H) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = _;
            }
            var nt = _;
            _ = G;
            try {
              return H();
            } finally {
              _ = nt;
            }
          }),
          (i.unstable_requestPaint = function () {
            O = !0;
          }),
          (i.unstable_runWithPriority = function (H, G) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var nt = _;
            _ = H;
            try {
              return G();
            } finally {
              _ = nt;
            }
          }),
          (i.unstable_scheduleCallback = function (H, G, nt) {
            var it = i.unstable_now();
            switch (
              (typeof nt == "object" && nt !== null
                ? ((nt = nt.delay),
                  (nt = typeof nt == "number" && 0 < nt ? it + nt : it))
                : (nt = it),
              H)
            ) {
              case 1:
                var ut = -1;
                break;
              case 2:
                ut = 250;
                break;
              case 5:
                ut = 1073741823;
                break;
              case 4:
                ut = 1e4;
                break;
              default:
                ut = 5e3;
            }
            return (
              (ut = nt + ut),
              (H = {
                id: m++,
                callback: G,
                priorityLevel: H,
                startTime: nt,
                expirationTime: ut,
                sortIndex: -1,
              }),
              nt > it
                ? ((H.sortIndex = nt),
                  e(d, H),
                  a(p) === null &&
                    H === a(d) &&
                    (M ? (tt(T), (T = -1)) : (M = !0), at(j, nt - it)))
                : ((H.sortIndex = ut),
                  e(p, H),
                  w || x || ((w = !0), J || ((J = !0), R()))),
              H
            );
          }),
          (i.unstable_shouldYield = N),
          (i.unstable_wrapCallback = function (H) {
            var G = _;
            return function () {
              var nt = _;
              _ = G;
              try {
                return H.apply(this, arguments);
              } finally {
                _ = nt;
              }
            };
          });
      })(wf)),
    wf
  );
}
var zm;
function uv() {
  return zm || ((zm = 1), (vf.exports = rv())), vf.exports;
}
var _f = { exports: {} },
  Ae = {};
var Dm;
function cv() {
  if (Dm) return Ae;
  Dm = 1;
  var i = Zf();
  function e(p) {
    var d = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        d += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      d +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var l = {
      d: {
        f: a,
        r: function () {
          throw Error(e(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function u(p, d, m) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: d,
      implementation: m,
    };
  }
  var c = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, d) {
    if (p === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return (
    (Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (Ae.createPortal = function (p, d) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11))
        throw Error(e(299));
      return u(p, d, null, m);
    }),
    (Ae.flushSync = function (p) {
      var d = c.T,
        m = l.p;
      try {
        if (((c.T = null), (l.p = 2), p)) return p();
      } finally {
        (c.T = d), (l.p = m), l.d.f();
      }
    }),
    (Ae.preconnect = function (p, d) {
      typeof p == "string" &&
        (d
          ? ((d = d.crossOrigin),
            (d =
              typeof d == "string"
                ? d === "use-credentials"
                  ? d
                  : ""
                : void 0))
          : (d = null),
        l.d.C(p, d));
    }),
    (Ae.prefetchDNS = function (p) {
      typeof p == "string" && l.d.D(p);
    }),
    (Ae.preinit = function (p, d) {
      if (typeof p == "string" && d && typeof d.as == "string") {
        var m = d.as,
          b = h(m, d.crossOrigin),
          _ = typeof d.integrity == "string" ? d.integrity : void 0,
          x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        m === "style"
          ? l.d.S(p, typeof d.precedence == "string" ? d.precedence : void 0, {
              crossOrigin: b,
              integrity: _,
              fetchPriority: x,
            })
          : m === "script" &&
            l.d.X(p, {
              crossOrigin: b,
              integrity: _,
              fetchPriority: x,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
      }
    }),
    (Ae.preinitModule = function (p, d) {
      if (typeof p == "string")
        if (typeof d == "object" && d !== null) {
          if (d.as == null || d.as === "script") {
            var m = h(d.as, d.crossOrigin);
            l.d.M(p, {
              crossOrigin: m,
              integrity: typeof d.integrity == "string" ? d.integrity : void 0,
              nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            });
          }
        } else d == null && l.d.M(p);
    }),
    (Ae.preload = function (p, d) {
      if (
        typeof p == "string" &&
        typeof d == "object" &&
        d !== null &&
        typeof d.as == "string"
      ) {
        var m = d.as,
          b = h(m, d.crossOrigin);
        l.d.L(p, m, {
          crossOrigin: b,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority:
            typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy:
            typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet:
            typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0,
        });
      }
    }),
    (Ae.preloadModule = function (p, d) {
      if (typeof p == "string")
        if (d) {
          var m = h(d.as, d.crossOrigin);
          l.d.m(p, {
            as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
            crossOrigin: m,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          });
        } else l.d.m(p);
    }),
    (Ae.requestFormReset = function (p) {
      l.d.r(p);
    }),
    (Ae.unstable_batchedUpdates = function (p, d) {
      return p(d);
    }),
    (Ae.useFormState = function (p, d, m) {
      return c.H.useFormState(p, d, m);
    }),
    (Ae.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Ae.version = "19.2.0"),
    Ae
  );
}
var km;
function fv() {
  if (km) return _f.exports;
  km = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return i(), (_f.exports = cv()), _f.exports;
}
var Rm;
function hv() {
  if (Rm) return _l;
  Rm = 1;
  var i = uv(),
    e = Zf(),
    a = fv();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        n += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var n = t,
      s = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (s = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? s : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (u(t) !== t) throw Error(l(188));
  }
  function d(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = u(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var s = t, o = n; ; ) {
      var f = s.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((o = f.return), o !== null)) {
          s = o;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === s) return p(f), t;
          if (g === o) return p(f), n;
          g = g.sibling;
        }
        throw Error(l(188));
      }
      if (s.return !== o.return) (s = f), (o = g);
      else {
        for (var y = !1, C = f.child; C; ) {
          if (C === s) {
            (y = !0), (s = f), (o = g);
            break;
          }
          if (C === o) {
            (y = !0), (o = f), (s = g);
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = g.child; C; ) {
            if (C === s) {
              (y = !0), (s = g), (o = f);
              break;
            }
            if (C === o) {
              (y = !0), (o = g), (s = f);
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (s.alternate !== o) throw Error(l(190));
    }
    if (s.tag !== 3) throw Error(l(188));
    return s.stateNode.current === s ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    _ = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    tt = Symbol.for("react.consumer"),
    I = Symbol.for("react.context"),
    $ = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    J = Symbol.for("react.suspense_list"),
    T = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    N = Symbol.for("react.memo_cache_sentinel"),
    k = Symbol.iterator;
  function R(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (k && t[k]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var W = Symbol.for("react.client.reference");
  function lt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case E:
        return "Profiler";
      case O:
        return "StrictMode";
      case j:
        return "Suspense";
      case J:
        return "SuspenseList";
      case v:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case I:
          return t.displayName || "Context";
        case tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case $:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case T:
          return (
            (n = t.displayName || null), n !== null ? n : lt(t.type) || "Memo"
          );
        case S:
          (n = t._payload), (t = t._init);
          try {
            return lt(t(n));
          } catch {}
      }
    return null;
  }
  var at = Array.isArray,
    H = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    nt = { pending: !1, data: null, method: null, action: null },
    it = [],
    ut = -1;
  function A(t) {
    return { current: t };
  }
  function F(t) {
    0 > ut || ((t.current = it[ut]), (it[ut] = null), ut--);
  }
  function B(t, n) {
    ut++, (it[ut] = t.current), (t.current = n);
  }
  var et = A(null),
    st = A(null),
    ot = A(null),
    bt = A(null);
  function pt(t, n) {
    switch ((B(ot, n), B(st, t), B(et, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Kp(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          (n = Kp(n)), (t = Pp(n, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    F(et), B(et, t);
  }
  function dt() {
    F(et), F(st), F(ot);
  }
  function Bt(t) {
    t.memoizedState !== null && B(bt, t);
    var n = et.current,
      s = Pp(n, t.type);
    n !== s && (B(st, t), B(et, s));
  }
  function yt(t) {
    st.current === t && (F(et), F(st)),
      bt.current === t && (F(bt), (ml._currentValue = nt));
  }
  var Lt, ae;
  function zt(t) {
    if (Lt === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        (Lt = (n && n[1]) || ""),
          (ae =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Lt +
      t +
      ae
    );
  }
  var Dt = !1;
  function _t(t, n) {
    if (!t || Dt) return "";
    Dt = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var P = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(P.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(P, []);
                } catch (X) {
                  var V = X;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (X) {
                  V = X;
                }
                t.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                V = X;
              }
              (P = t()) &&
                typeof P.catch == "function" &&
                P.catch(function () {});
            }
          } catch (X) {
            if (X && V && typeof X.stack == "string") return [X.stack, V.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = o.DetermineComponentFrameRoot(),
        y = g[0],
        C = g[1];
      if (y && C) {
        var z = y.split(`
`),
          Y = C.split(`
`);
        for (
          f = o = 0;
          o < z.length && !z[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; f < Y.length && !Y[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (o === z.length || f === Y.length)
          for (
            o = z.length - 1, f = Y.length - 1;
            1 <= o && 0 <= f && z[o] !== Y[f];

          )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (z[o] !== Y[f]) {
            if (o !== 1 || f !== 1)
              do
                if ((o--, f--, 0 > f || z[o] !== Y[f])) {
                  var Z =
                    `
` + z[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", t.displayName)),
                    Z
                  );
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      (Dt = !1), (Error.prepareStackTrace = s);
    }
    return (s = t ? t.displayName || t.name : "") ? zt(s) : "";
  }
  function me(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return zt(t.type);
      case 16:
        return zt("Lazy");
      case 13:
        return t.child !== n && n !== null
          ? zt("Suspense Fallback")
          : zt("Suspense");
      case 19:
        return zt("SuspenseList");
      case 0:
      case 15:
        return _t(t.type, !1);
      case 11:
        return _t(t.type.render, !1);
      case 1:
        return _t(t.type, !0);
      case 31:
        return zt("Activity");
      default:
        return "";
    }
  }
  function Ot(t) {
    try {
      var n = "",
        s = null;
      do (n += me(t, s)), (s = t), (t = t.return);
      while (t);
      return n;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var Gt = Object.prototype.hasOwnProperty,
    ee = i.unstable_scheduleCallback,
    On = i.unstable_cancelCallback,
    sn = i.unstable_shouldYield,
    Zi = i.unstable_requestPaint,
    Ft = i.unstable_now,
    ln = i.unstable_getCurrentPriorityLevel,
    se = i.unstable_ImmediatePriority,
    we = i.unstable_UserBlockingPriority,
    Be = i.unstable_NormalPriority,
    Ts = i.unstable_LowPriority,
    As = i.unstable_IdlePriority,
    ci = i.log,
    on = i.unstable_setDisableYieldValue,
    xn = null,
    Te = null;
  function fi(t) {
    if (
      (typeof ci == "function" && on(t),
      Te && typeof Te.setStrictMode == "function")
    )
      try {
        Te.setStrictMode(xn, t);
      } catch {}
  }
  var Qe = Math.clz32 ? Math.clz32 : X2,
    V2 = Math.log,
    G2 = Math.LN2;
  function X2(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((V2(t) / G2) | 0)) | 0;
  }
  var Wl = 256,
    $l = 262144,
    Jl = 4194304;
  function Ki(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function to(t, n, s) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var f = 0,
      g = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var C = o & 134217727;
    return (
      C !== 0
        ? ((o = C & ~g),
          o !== 0
            ? (f = Ki(o))
            : ((y &= C),
              y !== 0
                ? (f = Ki(y))
                : s || ((s = C & ~t), s !== 0 && (f = Ki(s)))))
        : ((C = o & ~g),
          C !== 0
            ? (f = Ki(C))
            : y !== 0
            ? (f = Ki(y))
            : s || ((s = o & ~t), s !== 0 && (f = Ki(s)))),
      f === 0
        ? 0
        : n !== 0 &&
          n !== f &&
          (n & g) === 0 &&
          ((g = f & -f),
          (s = n & -n),
          g >= s || (g === 32 && (s & 4194048) !== 0))
        ? n
        : f
    );
  }
  function Os(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Q2(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function Oh() {
    var t = Jl;
    return (Jl <<= 1), (Jl & 62914560) === 0 && (Jl = 4194304), t;
  }
  function iu(t) {
    for (var n = [], s = 0; 31 > s; s++) n.push(t);
    return n;
  }
  function zs(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Z2(t, n, s, o, f, g) {
    var y = t.pendingLanes;
    (t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0);
    var C = t.entanglements,
      z = t.expirationTimes,
      Y = t.hiddenUpdates;
    for (s = y & ~s; 0 < s; ) {
      var Z = 31 - Qe(s),
        P = 1 << Z;
      (C[Z] = 0), (z[Z] = -1);
      var V = Y[Z];
      if (V !== null)
        for (Y[Z] = null, Z = 0; Z < V.length; Z++) {
          var X = V[Z];
          X !== null && (X.lane &= -536870913);
        }
      s &= ~P;
    }
    o !== 0 && zh(t, o, 0),
      g !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= g & ~(y & ~n));
  }
  function zh(t, n, s) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var o = 31 - Qe(n);
    (t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (s & 261930));
  }
  function Dh(t, n) {
    var s = (t.entangledLanes |= n);
    for (t = t.entanglements; s; ) {
      var o = 31 - Qe(s),
        f = 1 << o;
      (f & n) | (t[o] & n) && (t[o] |= n), (s &= ~f);
    }
  }
  function kh(t, n) {
    var s = n & -n;
    return (
      (s = (s & 42) !== 0 ? 1 : au(s)),
      (s & (t.suspendedLanes | n)) !== 0 ? 0 : s
    );
  }
  function au(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function su(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rh() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ym(t.type));
  }
  function Bh(t, n) {
    var s = G.p;
    try {
      return (G.p = t), n();
    } finally {
      G.p = s;
    }
  }
  var hi = Math.random().toString(36).slice(2),
    _e = "__reactFiber$" + hi,
    Le = "__reactProps$" + hi,
    Aa = "__reactContainer$" + hi,
    lu = "__reactEvents$" + hi,
    K2 = "__reactListeners$" + hi,
    P2 = "__reactHandles$" + hi,
    Lh = "__reactResources$" + hi,
    Ds = "__reactMarker$" + hi;
  function ou(t) {
    delete t[_e], delete t[Le], delete t[lu], delete t[K2], delete t[P2];
  }
  function Oa(t) {
    var n = t[_e];
    if (n) return n;
    for (var s = t.parentNode; s; ) {
      if ((n = s[Aa] || s[_e])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (t = nm(t); t !== null; ) {
            if ((s = t[_e])) return s;
            t = nm(t);
          }
        return n;
      }
      (t = s), (s = t.parentNode);
    }
    return null;
  }
  function za(t) {
    if ((t = t[_e] || t[Aa])) {
      var n = t.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return t;
    }
    return null;
  }
  function ks(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function Da(t) {
    var n = t[Lh];
    return (
      n ||
        (n = t[Lh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function be(t) {
    t[Ds] = !0;
  }
  var jh = new Set(),
    Hh = {};
  function Pi(t, n) {
    ka(t, n), ka(t + "Capture", n);
  }
  function ka(t, n) {
    for (Hh[t] = n, t = 0; t < n.length; t++) jh.add(n[t]);
  }
  var I2 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Nh = {},
    Uh = {};
  function W2(t) {
    return Gt.call(Uh, t)
      ? !0
      : Gt.call(Nh, t)
      ? !1
      : I2.test(t)
      ? (Uh[t] = !0)
      : ((Nh[t] = !0), !1);
  }
  function eo(t, n, s) {
    if (W2(n))
      if (s === null) t.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + s);
      }
  }
  function no(t, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + s);
    }
  }
  function qn(t, n, s, o) {
    if (o === null) t.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(n, s, "" + o);
    }
  }
  function rn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Fh(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function $2(t, n, s) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (
      !t.hasOwnProperty(n) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        g = o.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            (s = "" + y), g.call(this, y);
          },
        }),
        Object.defineProperty(t, n, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = "" + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function ru(t) {
    if (!t._valueTracker) {
      var n = Fh(t) ? "checked" : "value";
      t._valueTracker = $2(t, n, "" + t[n]);
    }
  }
  function qh(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      o = "";
    return (
      t && (o = Fh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== s ? (n.setValue(t), !0) : !1
    );
  }
  function io(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var J2 = /[\n"\\]/g;
  function un(t) {
    return t.replace(J2, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function uu(t, n, s, o, f, g, y, C) {
    (t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + rn(n))
          : t.value !== "" + rn(n) && (t.value = "" + rn(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? cu(t, y, rn(n))
        : s != null
        ? cu(t, y, rn(s))
        : o != null && t.removeAttribute("value"),
      f == null && g != null && (t.defaultChecked = !!g),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      C != null &&
      typeof C != "function" &&
      typeof C != "symbol" &&
      typeof C != "boolean"
        ? (t.name = "" + rn(C))
        : t.removeAttribute("name");
  }
  function Yh(t, n, s, o, f, g, y, C) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.type = g),
      n != null || s != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) {
        ru(t);
        return;
      }
      (s = s != null ? "" + rn(s) : ""),
        (n = n != null ? "" + rn(n) : s),
        C || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (o = o ?? f),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = C ? t.checked : !!o),
      (t.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      ru(t);
  }
  function cu(t, n, s) {
    (n === "number" && io(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function Ra(t, n, s, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var f = 0; f < s.length; f++) n["$" + s[f]] = !0;
      for (s = 0; s < t.length; s++)
        (f = n.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== f && (t[s].selected = f),
          f && o && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + rn(s), n = null, f = 0; f < t.length; f++) {
        if (t[f].value === s) {
          (t[f].selected = !0), o && (t[f].defaultSelected = !0);
          return;
        }
        n !== null || t[f].disabled || (n = t[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Vh(t, n, s) {
    if (
      n != null &&
      ((n = "" + rn(n)), n !== t.value && (t.value = n), s == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = s != null ? "" + rn(s) : "";
  }
  function Gh(t, n, s, o) {
    if (n == null) {
      if (o != null) {
        if (s != null) throw Error(l(92));
        if (at(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        s = o;
      }
      s == null && (s = ""), (n = s);
    }
    (s = rn(n)),
      (t.defaultValue = s),
      (o = t.textContent),
      o === s && o !== "" && o !== null && (t.value = o),
      ru(t);
  }
  function Ba(t, n) {
    if (n) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xh(t, n, s) {
    var o = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : o
      ? t.setProperty(n, s)
      : typeof s != "number" || s === 0 || ty.has(n)
      ? n === "float"
        ? (t.cssFloat = s)
        : (t[n] = ("" + s).trim())
      : (t[n] = s + "px");
  }
  function Qh(t, n, s) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), s != null)) {
      for (var o in s)
        !s.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
            ? (t.cssFloat = "")
            : (t[o] = ""));
      for (var f in n)
        (o = n[f]), n.hasOwnProperty(f) && s[f] !== o && Xh(t, f, o);
    } else for (var g in n) n.hasOwnProperty(g) && Xh(t, g, n[g]);
  }
  function fu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ey = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ny =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ao(t) {
    return ny.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Yn() {}
  var hu = null;
  function du(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var La = null,
    ja = null;
  function Zh(t) {
    var n = za(t);
    if (n && (t = n.stateNode)) {
      var s = t[Le] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (uu(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (n = s.name),
            s.type === "radio" && n != null)
          ) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + un("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var o = s[n];
              if (o !== t && o.form === t.form) {
                var f = o[Le] || null;
                if (!f) throw Error(l(90));
                uu(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (n = 0; n < s.length; n++)
              (o = s[n]), o.form === t.form && qh(o);
          }
          break t;
        case "textarea":
          Vh(t, s.value, s.defaultValue);
          break t;
        case "select":
          (n = s.value), n != null && Ra(t, !!s.multiple, n, !1);
      }
    }
  }
  var gu = !1;
  function Kh(t, n, s) {
    if (gu) return t(n, s);
    gu = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((gu = !1),
        (La !== null || ja !== null) &&
          (Qo(), La && ((n = La), (t = ja), (ja = La = null), Zh(n), t)))
      )
        for (n = 0; n < t.length; n++) Zh(t[n]);
    }
  }
  function Rs(t, n) {
    var s = t.stateNode;
    if (s === null) return null;
    var o = s[Le] || null;
    if (o === null) return null;
    s = o[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(l(231, n, typeof s));
    return s;
  }
  var Vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    pu = !1;
  if (Vn)
    try {
      var Bs = {};
      Object.defineProperty(Bs, "passive", {
        get: function () {
          pu = !0;
        },
      }),
        window.addEventListener("test", Bs, Bs),
        window.removeEventListener("test", Bs, Bs);
    } catch {
      pu = !1;
    }
  var di = null,
    mu = null,
    so = null;
  function Ph() {
    if (so) return so;
    var t,
      n = mu,
      s = n.length,
      o,
      f = "value" in di ? di.value : di.textContent,
      g = f.length;
    for (t = 0; t < s && n[t] === f[t]; t++);
    var y = s - t;
    for (o = 1; o <= y && n[s - o] === f[g - o]; o++);
    return (so = f.slice(t, 1 < o ? 1 - o : void 0));
  }
  function lo(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function oo() {
    return !0;
  }
  function Ih() {
    return !1;
  }
  function je(t) {
    function n(s, o, f, g, y) {
      (this._reactName = s),
        (this._targetInst = f),
        (this.type = o),
        (this.nativeEvent = g),
        (this.target = y),
        (this.currentTarget = null);
      for (var C in t)
        t.hasOwnProperty(C) && ((s = t[C]), (this[C] = s ? s(g) : g[C]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? oo
          : Ih),
        (this.isPropagationStopped = Ih),
        this
      );
    }
    return (
      b(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = oo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = oo));
        },
        persist: function () {},
        isPersistent: oo,
      }),
      n
    );
  }
  var Ii = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ro = je(Ii),
    Ls = b({}, Ii, { view: 0, detail: 0 }),
    iy = je(Ls),
    bu,
    yu,
    js,
    uo = b({}, Ls, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== js &&
              (js && t.type === "mousemove"
                ? ((bu = t.screenX - js.screenX), (yu = t.screenY - js.screenY))
                : (yu = bu = 0),
              (js = t)),
            bu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : yu;
      },
    }),
    Wh = je(uo),
    ay = b({}, uo, { dataTransfer: 0 }),
    sy = je(ay),
    ly = b({}, Ls, { relatedTarget: 0 }),
    vu = je(ly),
    oy = b({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ry = je(oy),
    uy = b({}, Ii, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    cy = je(uy),
    fy = b({}, Ii, { data: 0 }),
    $h = je(fy),
    hy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function py(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = gy[t])
      ? !!n[t]
      : !1;
  }
  function wu() {
    return py;
  }
  var my = b({}, Ls, {
      key: function (t) {
        if (t.key) {
          var n = hy[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = lo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? dy[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wu,
      charCode: function (t) {
        return t.type === "keypress" ? lo(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? lo(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    by = je(my),
    yy = b({}, uo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Jh = je(yy),
    vy = b({}, Ls, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wu,
    }),
    wy = je(vy),
    _y = b({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xy = je(_y),
    Sy = b({}, uo, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Cy = je(Sy),
    Ey = b({}, Ii, { newState: 0, oldState: 0 }),
    My = je(Ey),
    Ty = [9, 13, 27, 32],
    _u = Vn && "CompositionEvent" in window,
    Hs = null;
  Vn && "documentMode" in document && (Hs = document.documentMode);
  var Ay = Vn && "TextEvent" in window && !Hs,
    td = Vn && (!_u || (Hs && 8 < Hs && 11 >= Hs)),
    ed = " ",
    nd = !1;
  function id(t, n) {
    switch (t) {
      case "keyup":
        return Ty.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ad(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ha = !1;
  function Oy(t, n) {
    switch (t) {
      case "compositionend":
        return ad(n);
      case "keypress":
        return n.which !== 32 ? null : ((nd = !0), ed);
      case "textInput":
        return (t = n.data), t === ed && nd ? null : t;
      default:
        return null;
    }
  }
  function zy(t, n) {
    if (Ha)
      return t === "compositionend" || (!_u && id(t, n))
        ? ((t = Ph()), (so = mu = di = null), (Ha = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return td && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Dy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!Dy[t.type] : n === "textarea";
  }
  function ld(t, n, s, o) {
    La ? (ja ? ja.push(o) : (ja = [o])) : (La = o),
      (n = Jo(n, "onChange")),
      0 < n.length &&
        ((s = new ro("onChange", "change", null, s, o)),
        t.push({ event: s, listeners: n }));
  }
  var Ns = null,
    Us = null;
  function ky(t) {
    Yp(t, 0);
  }
  function co(t) {
    var n = ks(t);
    if (qh(n)) return t;
  }
  function od(t, n) {
    if (t === "change") return n;
  }
  var rd = !1;
  if (Vn) {
    var xu;
    if (Vn) {
      var Su = "oninput" in document;
      if (!Su) {
        var ud = document.createElement("div");
        ud.setAttribute("oninput", "return;"),
          (Su = typeof ud.oninput == "function");
      }
      xu = Su;
    } else xu = !1;
    rd = xu && (!document.documentMode || 9 < document.documentMode);
  }
  function cd() {
    Ns && (Ns.detachEvent("onpropertychange", fd), (Us = Ns = null));
  }
  function fd(t) {
    if (t.propertyName === "value" && co(Us)) {
      var n = [];
      ld(n, Us, t, du(t)), Kh(ky, n);
    }
  }
  function Ry(t, n, s) {
    t === "focusin"
      ? (cd(), (Ns = n), (Us = s), Ns.attachEvent("onpropertychange", fd))
      : t === "focusout" && cd();
  }
  function By(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return co(Us);
  }
  function Ly(t, n) {
    if (t === "click") return co(n);
  }
  function jy(t, n) {
    if (t === "input" || t === "change") return co(n);
  }
  function Hy(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Ze = typeof Object.is == "function" ? Object.is : Hy;
  function Fs(t, n) {
    if (Ze(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(t),
      o = Object.keys(n);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var f = s[o];
      if (!Gt.call(n, f) || !Ze(t[f], n[f])) return !1;
    }
    return !0;
  }
  function hd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function dd(t, n) {
    var s = hd(t);
    t = 0;
    for (var o; s; ) {
      if (s.nodeType === 3) {
        if (((o = t + s.textContent.length), t <= n && o >= n))
          return { node: s, offset: n - t };
        t = o;
      }
      t: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break t;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = hd(s);
    }
  }
  function gd(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? gd(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function pd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = io(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = n.contentWindow;
      else break;
      n = io(t.document);
    }
    return n;
  }
  function Cu(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ny = Vn && "documentMode" in document && 11 >= document.documentMode,
    Na = null,
    Eu = null,
    qs = null,
    Mu = !1;
  function md(t, n, s) {
    var o =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Mu ||
      Na == null ||
      Na !== io(o) ||
      ((o = Na),
      "selectionStart" in o && Cu(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (qs && Fs(qs, o)) ||
        ((qs = o),
        (o = Jo(Eu, "onSelect")),
        0 < o.length &&
          ((n = new ro("onSelect", "select", null, n, s)),
          t.push({ event: n, listeners: o }),
          (n.target = Na))));
  }
  function Wi(t, n) {
    var s = {};
    return (
      (s[t.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + t] = "webkit" + n),
      (s["Moz" + t] = "moz" + n),
      s
    );
  }
  var Ua = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionrun: Wi("Transition", "TransitionRun"),
      transitionstart: Wi("Transition", "TransitionStart"),
      transitioncancel: Wi("Transition", "TransitionCancel"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    Tu = {},
    bd = {};
  Vn &&
    ((bd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ua.animationend.animation,
      delete Ua.animationiteration.animation,
      delete Ua.animationstart.animation),
    "TransitionEvent" in window || delete Ua.transitionend.transition);
  function $i(t) {
    if (Tu[t]) return Tu[t];
    if (!Ua[t]) return t;
    var n = Ua[t],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in bd) return (Tu[t] = n[s]);
    return t;
  }
  var yd = $i("animationend"),
    vd = $i("animationiteration"),
    wd = $i("animationstart"),
    Uy = $i("transitionrun"),
    Fy = $i("transitionstart"),
    qy = $i("transitioncancel"),
    _d = $i("transitionend"),
    xd = new Map(),
    Au =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Au.push("scrollEnd");
  function Sn(t, n) {
    xd.set(t, n), Pi(n, [t]);
  }
  var fo =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    cn = [],
    Fa = 0,
    Ou = 0;
  function ho() {
    for (var t = Fa, n = (Ou = Fa = 0); n < t; ) {
      var s = cn[n];
      cn[n++] = null;
      var o = cn[n];
      cn[n++] = null;
      var f = cn[n];
      cn[n++] = null;
      var g = cn[n];
      if (((cn[n++] = null), o !== null && f !== null)) {
        var y = o.pending;
        y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (o.pending = f);
      }
      g !== 0 && Sd(s, f, g);
    }
  }
  function go(t, n, s, o) {
    (cn[Fa++] = t),
      (cn[Fa++] = n),
      (cn[Fa++] = s),
      (cn[Fa++] = o),
      (Ou |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o);
  }
  function zu(t, n, s, o) {
    return go(t, n, s, o), po(t);
  }
  function Ji(t, n) {
    return go(t, null, null, n), po(t);
  }
  function Sd(t, n, s) {
    t.lanes |= s;
    var o = t.alternate;
    o !== null && (o.lanes |= s);
    for (var f = !1, g = t.return; g !== null; )
      (g.childLanes |= s),
        (o = g.alternate),
        o !== null && (o.childLanes |= s),
        g.tag === 22 &&
          ((t = g.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = g),
        (g = g.return);
    return t.tag === 3
      ? ((g = t.stateNode),
        f &&
          n !== null &&
          ((f = 31 - Qe(s)),
          (t = g.hiddenUpdates),
          (o = t[f]),
          o === null ? (t[f] = [n]) : o.push(n),
          (n.lane = s | 536870912)),
        g)
      : null;
  }
  function po(t) {
    if (50 < ul) throw ((ul = 0), (Uc = null), Error(l(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var qa = {};
  function Yy(t, n, s, o) {
    (this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ke(t, n, s, o) {
    return new Yy(t, n, s, o);
  }
  function Du(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Gn(t, n) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = Ke(t.tag, n, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = n),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 65011712),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function Cd(t, n) {
    t.flags &= 65011714;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (n = s.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function mo(t, n, s, o, f, g) {
    var y = 0;
    if (((o = t), typeof t == "function")) Du(t) && (y = 1);
    else if (typeof t == "string")
      y = Z1(t, s, et.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case v:
          return (t = Ke(31, s, n, f)), (t.elementType = v), (t.lanes = g), t;
        case M:
          return ta(s.children, f, g, n);
        case O:
          (y = 8), (f |= 24);
          break;
        case E:
          return (
            (t = Ke(12, s, n, f | 2)), (t.elementType = E), (t.lanes = g), t
          );
        case j:
          return (t = Ke(13, s, n, f)), (t.elementType = j), (t.lanes = g), t;
        case J:
          return (t = Ke(19, s, n, f)), (t.elementType = J), (t.lanes = g), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case I:
                y = 10;
                break t;
              case tt:
                y = 9;
                break t;
              case $:
                y = 11;
                break t;
              case T:
                y = 14;
                break t;
              case S:
                (y = 16), (o = null);
                break t;
            }
          (y = 29),
            (s = Error(l(130, t === null ? "null" : typeof t, ""))),
            (o = null);
      }
    return (
      (n = Ke(y, s, n, f)), (n.elementType = t), (n.type = o), (n.lanes = g), n
    );
  }
  function ta(t, n, s, o) {
    return (t = Ke(7, t, o, n)), (t.lanes = s), t;
  }
  function ku(t, n, s) {
    return (t = Ke(6, t, null, n)), (t.lanes = s), t;
  }
  function Ed(t) {
    var n = Ke(18, null, null, 0);
    return (n.stateNode = t), n;
  }
  function Ru(t, n, s) {
    return (
      (n = Ke(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var Md = new WeakMap();
  function fn(t, n) {
    if (typeof t == "object" && t !== null) {
      var s = Md.get(t);
      return s !== void 0
        ? s
        : ((n = { value: t, source: n, stack: Ot(n) }), Md.set(t, n), n);
    }
    return { value: t, source: n, stack: Ot(n) };
  }
  var Ya = [],
    Va = 0,
    bo = null,
    Ys = 0,
    hn = [],
    dn = 0,
    gi = null,
    zn = 1,
    Dn = "";
  function Xn(t, n) {
    (Ya[Va++] = Ys), (Ya[Va++] = bo), (bo = t), (Ys = n);
  }
  function Td(t, n, s) {
    (hn[dn++] = zn), (hn[dn++] = Dn), (hn[dn++] = gi), (gi = t);
    var o = zn;
    t = Dn;
    var f = 32 - Qe(o) - 1;
    (o &= ~(1 << f)), (s += 1);
    var g = 32 - Qe(n) + f;
    if (30 < g) {
      var y = f - (f % 5);
      (g = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (f -= y),
        (zn = (1 << (32 - Qe(n) + f)) | (s << f) | o),
        (Dn = g + t);
    } else (zn = (1 << g) | (s << f) | o), (Dn = t);
  }
  function Bu(t) {
    t.return !== null && (Xn(t, 1), Td(t, 1, 0));
  }
  function Lu(t) {
    for (; t === bo; )
      (bo = Ya[--Va]), (Ya[Va] = null), (Ys = Ya[--Va]), (Ya[Va] = null);
    for (; t === gi; )
      (gi = hn[--dn]),
        (hn[dn] = null),
        (Dn = hn[--dn]),
        (hn[dn] = null),
        (zn = hn[--dn]),
        (hn[dn] = null);
  }
  function Ad(t, n) {
    (hn[dn++] = zn),
      (hn[dn++] = Dn),
      (hn[dn++] = gi),
      (zn = n.id),
      (Dn = n.overflow),
      (gi = t);
  }
  var xe = null,
    Wt = null,
    Tt = !1,
    pi = null,
    gn = !1,
    ju = Error(l(519));
  function mi(t) {
    var n = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Vs(fn(n, t)), ju);
  }
  function Od(t) {
    var n = t.stateNode,
      s = t.type,
      o = t.memoizedProps;
    switch (((n[_e] = t), (n[Le] = o), s)) {
      case "dialog":
        Ct("cancel", n), Ct("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ct("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < fl.length; s++) Ct(fl[s], n);
        break;
      case "source":
        Ct("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ct("error", n), Ct("load", n);
        break;
      case "details":
        Ct("toggle", n);
        break;
      case "input":
        Ct("invalid", n),
          Yh(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          );
        break;
      case "select":
        Ct("invalid", n);
        break;
      case "textarea":
        Ct("invalid", n), Gh(n, o.value, o.defaultValue, o.children);
    }
    (s = o.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      n.textContent === "" + s ||
      o.suppressHydrationWarning === !0 ||
      Qp(n.textContent, s)
        ? (o.popover != null && (Ct("beforetoggle", n), Ct("toggle", n)),
          o.onScroll != null && Ct("scroll", n),
          o.onScrollEnd != null && Ct("scrollend", n),
          o.onClick != null && (n.onclick = Yn),
          (n = !0))
        : (n = !1),
      n || mi(t, !0);
  }
  function zd(t) {
    for (xe = t.return; xe; )
      switch (xe.tag) {
        case 5:
        case 31:
        case 13:
          gn = !1;
          return;
        case 27:
        case 3:
          gn = !0;
          return;
        default:
          xe = xe.return;
      }
  }
  function Ga(t) {
    if (t !== xe) return !1;
    if (!Tt) return zd(t), (Tt = !0), !1;
    var n = t.tag,
      s;
    if (
      ((s = n !== 3 && n !== 27) &&
        ((s = n === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || tf(t.type, t.memoizedProps))),
        (s = !s)),
      s && Wt && mi(t),
      zd(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = em(t);
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(l(317));
      Wt = em(t);
    } else
      n === 27
        ? ((n = Wt), zi(t.type) ? ((t = lf), (lf = null), (Wt = t)) : (Wt = n))
        : (Wt = xe ? mn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ea() {
    (Wt = xe = null), (Tt = !1);
  }
  function Hu() {
    var t = pi;
    return (
      t !== null &&
        (Fe === null ? (Fe = t) : Fe.push.apply(Fe, t), (pi = null)),
      t
    );
  }
  function Vs(t) {
    pi === null ? (pi = [t]) : pi.push(t);
  }
  var Nu = A(null),
    na = null,
    Qn = null;
  function bi(t, n, s) {
    B(Nu, n._currentValue), (n._currentValue = s);
  }
  function Zn(t) {
    (t._currentValue = Nu.current), F(Nu);
  }
  function Uu(t, n, s) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function Fu(t, n, s, o) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var y = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var C = g;
          g = f;
          for (var z = 0; z < n.length; z++)
            if (C.context === n[z]) {
              (g.lanes |= s),
                (C = g.alternate),
                C !== null && (C.lanes |= s),
                Uu(g.return, s, t),
                o || (y = null);
              break t;
            }
          g = C.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(l(341));
        (y.lanes |= s),
          (g = y.alternate),
          g !== null && (g.lanes |= s),
          Uu(y, s, t),
          (y = null);
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            (f.return = y.return), (y = f);
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function Xa(t, n, s, o) {
    t = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var C = f.type;
          Ze(f.pendingProps.value, y.value) ||
            (t !== null ? t.push(C) : (t = [C]));
        }
      } else if (f === bt.current) {
        if (((y = f.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(ml) : (t = [ml]));
      }
      f = f.return;
    }
    t !== null && Fu(n, t, s, o), (n.flags |= 262144);
  }
  function yo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ze(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ia(t) {
    (na = t),
      (Qn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return Dd(na, t);
  }
  function vo(t, n) {
    return na === null && ia(t), Dd(t, n);
  }
  function Dd(t, n) {
    var s = n._currentValue;
    if (((n = { context: n, memoizedValue: s, next: null }), Qn === null)) {
      if (t === null) throw Error(l(308));
      (Qn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Qn = Qn.next = n;
    return s;
  }
  var Vy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (s, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (s) {
                  return s();
                });
            };
          },
    Gy = i.unstable_scheduleCallback,
    Xy = i.unstable_NormalPriority,
    fe = {
      $$typeof: I,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function qu() {
    return { controller: new Vy(), data: new Map(), refCount: 0 };
  }
  function Gs(t) {
    t.refCount--,
      t.refCount === 0 &&
        Gy(Xy, function () {
          t.controller.abort();
        });
  }
  var Xs = null,
    Yu = 0,
    Qa = 0,
    Za = null;
  function Qy(t, n) {
    if (Xs === null) {
      var s = (Xs = []);
      (Yu = 0),
        (Qa = Xc()),
        (Za = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o);
          },
        });
    }
    return Yu++, n.then(kd, kd), n;
  }
  function kd() {
    if (--Yu === 0 && Xs !== null) {
      Za !== null && (Za.status = "fulfilled");
      var t = Xs;
      (Xs = null), (Qa = 0), (Za = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function Zy(t, n) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      t.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var f = 0; f < s.length; f++) (0, s[f])(n);
        },
        function (f) {
          for (o.status = "rejected", o.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        }
      ),
      o
    );
  }
  var Rd = H.S;
  H.S = function (t, n) {
    (mp = Ft()),
      typeof n == "object" &&
        n !== null &&
        typeof n.then == "function" &&
        Qy(t, n),
      Rd !== null && Rd(t, n);
  };
  var aa = A(null);
  function Vu() {
    var t = aa.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function wo(t, n) {
    n === null ? B(aa, aa.current) : B(aa, n.pool);
  }
  function Bd() {
    var t = Vu();
    return t === null ? null : { parent: fe._currentValue, pool: t };
  }
  var Ka = Error(l(460)),
    Gu = Error(l(474)),
    _o = Error(l(542)),
    xo = { then: function () {} };
  function Ld(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function jd(t, n, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(n) : s !== n && (n.then(Yn, Yn), (n = s)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Nd(t), t);
      default:
        if (typeof n.status == "string") n.then(Yn, Yn);
        else {
          if (((t = Kt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(l(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "fulfilled"), (f.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "rejected"), (f.reason = o);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Nd(t), t);
        }
        throw ((la = n), Ka);
    }
  }
  function sa(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (s) {
      throw s !== null && typeof s == "object" && typeof s.then == "function"
        ? ((la = s), Ka)
        : s;
    }
  }
  var la = null;
  function Hd() {
    if (la === null) throw Error(l(459));
    var t = la;
    return (la = null), t;
  }
  function Nd(t) {
    if (t === Ka || t === _o) throw Error(l(483));
  }
  var Pa = null,
    Qs = 0;
  function So(t) {
    var n = Qs;
    return (Qs += 1), Pa === null && (Pa = []), jd(Pa, t, n);
  }
  function Zs(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function Co(t, n) {
    throw n.$$typeof === _
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function Ud(t) {
    function n(L, D) {
      if (t) {
        var q = L.deletions;
        q === null ? ((L.deletions = [D]), (L.flags |= 16)) : q.push(D);
      }
    }
    function s(L, D) {
      if (!t) return null;
      for (; D !== null; ) n(L, D), (D = D.sibling);
      return null;
    }
    function o(L) {
      for (var D = new Map(); L !== null; )
        L.key !== null ? D.set(L.key, L) : D.set(L.index, L), (L = L.sibling);
      return D;
    }
    function f(L, D) {
      return (L = Gn(L, D)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, D, q) {
      return (
        (L.index = q),
        t
          ? ((q = L.alternate),
            q !== null
              ? ((q = q.index), q < D ? ((L.flags |= 67108866), D) : q)
              : ((L.flags |= 67108866), D))
          : ((L.flags |= 1048576), D)
      );
    }
    function y(L) {
      return t && L.alternate === null && (L.flags |= 67108866), L;
    }
    function C(L, D, q, K) {
      return D === null || D.tag !== 6
        ? ((D = ku(q, L.mode, K)), (D.return = L), D)
        : ((D = f(D, q)), (D.return = L), D);
    }
    function z(L, D, q, K) {
      var gt = q.type;
      return gt === M
        ? Z(L, D, q.props.children, K, q.key)
        : D !== null &&
          (D.elementType === gt ||
            (typeof gt == "object" &&
              gt !== null &&
              gt.$$typeof === S &&
              sa(gt) === D.type))
        ? ((D = f(D, q.props)), Zs(D, q), (D.return = L), D)
        : ((D = mo(q.type, q.key, q.props, null, L.mode, K)),
          Zs(D, q),
          (D.return = L),
          D);
    }
    function Y(L, D, q, K) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== q.containerInfo ||
        D.stateNode.implementation !== q.implementation
        ? ((D = Ru(q, L.mode, K)), (D.return = L), D)
        : ((D = f(D, q.children || [])), (D.return = L), D);
    }
    function Z(L, D, q, K, gt) {
      return D === null || D.tag !== 7
        ? ((D = ta(q, L.mode, K, gt)), (D.return = L), D)
        : ((D = f(D, q)), (D.return = L), D);
    }
    function P(L, D, q) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = ku("" + D, L.mode, q)), (D.return = L), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (q = mo(D.type, D.key, D.props, null, L.mode, q)),
              Zs(q, D),
              (q.return = L),
              q
            );
          case w:
            return (D = Ru(D, L.mode, q)), (D.return = L), D;
          case S:
            return (D = sa(D)), P(L, D, q);
        }
        if (at(D) || R(D))
          return (D = ta(D, L.mode, q, null)), (D.return = L), D;
        if (typeof D.then == "function") return P(L, So(D), q);
        if (D.$$typeof === I) return P(L, vo(L, D), q);
        Co(L, D);
      }
      return null;
    }
    function V(L, D, q, K) {
      var gt = D !== null ? D.key : null;
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return gt !== null ? null : C(L, D, "" + q, K);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case x:
            return q.key === gt ? z(L, D, q, K) : null;
          case w:
            return q.key === gt ? Y(L, D, q, K) : null;
          case S:
            return (q = sa(q)), V(L, D, q, K);
        }
        if (at(q) || R(q)) return gt !== null ? null : Z(L, D, q, K, null);
        if (typeof q.then == "function") return V(L, D, So(q), K);
        if (q.$$typeof === I) return V(L, D, vo(L, q), K);
        Co(L, q);
      }
      return null;
    }
    function X(L, D, q, K, gt) {
      if (
        (typeof K == "string" && K !== "") ||
        typeof K == "number" ||
        typeof K == "bigint"
      )
        return (L = L.get(q) || null), C(D, L, "" + K, gt);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case x:
            return (
              (L = L.get(K.key === null ? q : K.key) || null), z(D, L, K, gt)
            );
          case w:
            return (
              (L = L.get(K.key === null ? q : K.key) || null), Y(D, L, K, gt)
            );
          case S:
            return (K = sa(K)), X(L, D, q, K, gt);
        }
        if (at(K) || R(K)) return (L = L.get(q) || null), Z(D, L, K, gt, null);
        if (typeof K.then == "function") return X(L, D, q, So(K), gt);
        if (K.$$typeof === I) return X(L, D, q, vo(D, K), gt);
        Co(D, K);
      }
      return null;
    }
    function rt(L, D, q, K) {
      for (
        var gt = null, kt = null, ct = D, xt = (D = 0), Mt = null;
        ct !== null && xt < q.length;
        xt++
      ) {
        ct.index > xt ? ((Mt = ct), (ct = null)) : (Mt = ct.sibling);
        var Rt = V(L, ct, q[xt], K);
        if (Rt === null) {
          ct === null && (ct = Mt);
          break;
        }
        t && ct && Rt.alternate === null && n(L, ct),
          (D = g(Rt, D, xt)),
          kt === null ? (gt = Rt) : (kt.sibling = Rt),
          (kt = Rt),
          (ct = Mt);
      }
      if (xt === q.length) return s(L, ct), Tt && Xn(L, xt), gt;
      if (ct === null) {
        for (; xt < q.length; xt++)
          (ct = P(L, q[xt], K)),
            ct !== null &&
              ((D = g(ct, D, xt)),
              kt === null ? (gt = ct) : (kt.sibling = ct),
              (kt = ct));
        return Tt && Xn(L, xt), gt;
      }
      for (ct = o(ct); xt < q.length; xt++)
        (Mt = X(ct, L, xt, q[xt], K)),
          Mt !== null &&
            (t &&
              Mt.alternate !== null &&
              ct.delete(Mt.key === null ? xt : Mt.key),
            (D = g(Mt, D, xt)),
            kt === null ? (gt = Mt) : (kt.sibling = Mt),
            (kt = Mt));
      return (
        t &&
          ct.forEach(function (Li) {
            return n(L, Li);
          }),
        Tt && Xn(L, xt),
        gt
      );
    }
    function mt(L, D, q, K) {
      if (q == null) throw Error(l(151));
      for (
        var gt = null,
          kt = null,
          ct = D,
          xt = (D = 0),
          Mt = null,
          Rt = q.next();
        ct !== null && !Rt.done;
        xt++, Rt = q.next()
      ) {
        ct.index > xt ? ((Mt = ct), (ct = null)) : (Mt = ct.sibling);
        var Li = V(L, ct, Rt.value, K);
        if (Li === null) {
          ct === null && (ct = Mt);
          break;
        }
        t && ct && Li.alternate === null && n(L, ct),
          (D = g(Li, D, xt)),
          kt === null ? (gt = Li) : (kt.sibling = Li),
          (kt = Li),
          (ct = Mt);
      }
      if (Rt.done) return s(L, ct), Tt && Xn(L, xt), gt;
      if (ct === null) {
        for (; !Rt.done; xt++, Rt = q.next())
          (Rt = P(L, Rt.value, K)),
            Rt !== null &&
              ((D = g(Rt, D, xt)),
              kt === null ? (gt = Rt) : (kt.sibling = Rt),
              (kt = Rt));
        return Tt && Xn(L, xt), gt;
      }
      for (ct = o(ct); !Rt.done; xt++, Rt = q.next())
        (Rt = X(ct, L, xt, Rt.value, K)),
          Rt !== null &&
            (t &&
              Rt.alternate !== null &&
              ct.delete(Rt.key === null ? xt : Rt.key),
            (D = g(Rt, D, xt)),
            kt === null ? (gt = Rt) : (kt.sibling = Rt),
            (kt = Rt));
      return (
        t &&
          ct.forEach(function (av) {
            return n(L, av);
          }),
        Tt && Xn(L, xt),
        gt
      );
    }
    function Zt(L, D, q, K) {
      if (
        (typeof q == "object" &&
          q !== null &&
          q.type === M &&
          q.key === null &&
          (q = q.props.children),
        typeof q == "object" && q !== null)
      ) {
        switch (q.$$typeof) {
          case x:
            t: {
              for (var gt = q.key; D !== null; ) {
                if (D.key === gt) {
                  if (((gt = q.type), gt === M)) {
                    if (D.tag === 7) {
                      s(L, D.sibling),
                        (K = f(D, q.props.children)),
                        (K.return = L),
                        (L = K);
                      break t;
                    }
                  } else if (
                    D.elementType === gt ||
                    (typeof gt == "object" &&
                      gt !== null &&
                      gt.$$typeof === S &&
                      sa(gt) === D.type)
                  ) {
                    s(L, D.sibling),
                      (K = f(D, q.props)),
                      Zs(K, q),
                      (K.return = L),
                      (L = K);
                    break t;
                  }
                  s(L, D);
                  break;
                } else n(L, D);
                D = D.sibling;
              }
              q.type === M
                ? ((K = ta(q.props.children, L.mode, K, q.key)),
                  (K.return = L),
                  (L = K))
                : ((K = mo(q.type, q.key, q.props, null, L.mode, K)),
                  Zs(K, q),
                  (K.return = L),
                  (L = K));
            }
            return y(L);
          case w:
            t: {
              for (gt = q.key; D !== null; ) {
                if (D.key === gt)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === q.containerInfo &&
                    D.stateNode.implementation === q.implementation
                  ) {
                    s(L, D.sibling),
                      (K = f(D, q.children || [])),
                      (K.return = L),
                      (L = K);
                    break t;
                  } else {
                    s(L, D);
                    break;
                  }
                else n(L, D);
                D = D.sibling;
              }
              (K = Ru(q, L.mode, K)), (K.return = L), (L = K);
            }
            return y(L);
          case S:
            return (q = sa(q)), Zt(L, D, q, K);
        }
        if (at(q)) return rt(L, D, q, K);
        if (R(q)) {
          if (((gt = R(q)), typeof gt != "function")) throw Error(l(150));
          return (q = gt.call(q)), mt(L, D, q, K);
        }
        if (typeof q.then == "function") return Zt(L, D, So(q), K);
        if (q.$$typeof === I) return Zt(L, D, vo(L, q), K);
        Co(L, q);
      }
      return (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
        ? ((q = "" + q),
          D !== null && D.tag === 6
            ? (s(L, D.sibling), (K = f(D, q)), (K.return = L), (L = K))
            : (s(L, D), (K = ku(q, L.mode, K)), (K.return = L), (L = K)),
          y(L))
        : s(L, D);
    }
    return function (L, D, q, K) {
      try {
        Qs = 0;
        var gt = Zt(L, D, q, K);
        return (Pa = null), gt;
      } catch (ct) {
        if (ct === Ka || ct === _o) throw ct;
        var kt = Ke(29, ct, null, L.mode);
        return (kt.lanes = K), (kt.return = L), kt;
      } finally {
      }
    };
  }
  var oa = Ud(!0),
    Fd = Ud(!1),
    yi = !1;
  function Xu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Qu(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function vi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wi(t, n, s) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (jt & 2) !== 0)) {
      var f = o.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (o.pending = n),
        (n = po(t)),
        Sd(t, null, s),
        n
      );
    }
    return go(t, o, n, s), po(t);
  }
  function Ks(t, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194048) !== 0))
    ) {
      var o = n.lanes;
      (o &= t.pendingLanes), (s |= o), (n.lanes = s), Dh(t, s);
    }
  }
  function Zu(t, n) {
    var s = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), s === o)) {
      var f = null,
        g = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          g === null ? (f = g = y) : (g = g.next = y), (s = s.next);
        } while (s !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      (s = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = s);
      return;
    }
    (t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = n) : (t.next = n),
      (s.lastBaseUpdate = n);
  }
  var Ku = !1;
  function Ps() {
    if (Ku) {
      var t = Za;
      if (t !== null) throw t;
    }
  }
  function Is(t, n, s, o) {
    Ku = !1;
    var f = t.updateQueue;
    yi = !1;
    var g = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      C = f.shared.pending;
    if (C !== null) {
      f.shared.pending = null;
      var z = C,
        Y = z.next;
      (z.next = null), y === null ? (g = Y) : (y.next = Y), (y = z);
      var Z = t.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (C = Z.lastBaseUpdate),
        C !== y &&
          (C === null ? (Z.firstBaseUpdate = Y) : (C.next = Y),
          (Z.lastBaseUpdate = z)));
    }
    if (g !== null) {
      var P = f.baseState;
      (y = 0), (Z = Y = z = null), (C = g);
      do {
        var V = C.lane & -536870913,
          X = V !== C.lane;
        if (X ? (Et & V) === V : (o & V) === V) {
          V !== 0 && V === Qa && (Ku = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: C.tag,
                  payload: C.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var rt = t,
              mt = C;
            V = n;
            var Zt = s;
            switch (mt.tag) {
              case 1:
                if (((rt = mt.payload), typeof rt == "function")) {
                  P = rt.call(Zt, P, V);
                  break t;
                }
                P = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (
                  ((rt = mt.payload),
                  (V = typeof rt == "function" ? rt.call(Zt, P, V) : rt),
                  V == null)
                )
                  break t;
                P = b({}, P, V);
                break t;
              case 2:
                yi = !0;
            }
          }
          (V = C.callback),
            V !== null &&
              ((t.flags |= 64),
              X && (t.flags |= 8192),
              (X = f.callbacks),
              X === null ? (f.callbacks = [V]) : X.push(V));
        } else
          (X = {
            lane: V,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            Z === null ? ((Y = Z = X), (z = P)) : (Z = Z.next = X),
            (y |= V);
        if (((C = C.next), C === null)) {
          if (((C = f.shared.pending), C === null)) break;
          (X = C),
            (C = X.next),
            (X.next = null),
            (f.lastBaseUpdate = X),
            (f.shared.pending = null);
        }
      } while (!0);
      Z === null && (z = P),
        (f.baseState = z),
        (f.firstBaseUpdate = Y),
        (f.lastBaseUpdate = Z),
        g === null && (f.shared.lanes = 0),
        (Ei |= y),
        (t.lanes = y),
        (t.memoizedState = P);
    }
  }
  function qd(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function Yd(t, n) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) qd(s[t], n);
  }
  var Ia = A(null),
    Eo = A(0);
  function Vd(t, n) {
    (t = ni), B(Eo, t), B(Ia, n), (ni = t | n.baseLanes);
  }
  function Pu() {
    B(Eo, ni), B(Ia, Ia.current);
  }
  function Iu() {
    (ni = Eo.current), F(Ia), F(Eo);
  }
  var Pe = A(null),
    pn = null;
  function _i(t) {
    var n = t.alternate;
    B(le, le.current & 1),
      B(Pe, t),
      pn === null &&
        (n === null || Ia.current !== null || n.memoizedState !== null) &&
        (pn = t);
  }
  function Wu(t) {
    B(le, le.current), B(Pe, t), pn === null && (pn = t);
  }
  function Gd(t) {
    t.tag === 22
      ? (B(le, le.current), B(Pe, t), pn === null && (pn = t))
      : xi();
  }
  function xi() {
    B(le, le.current), B(Pe, Pe.current);
  }
  function Ie(t) {
    F(Pe), pn === t && (pn = null), F(le);
  }
  var le = A(0);
  function Mo(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && ((s = s.dehydrated), s === null || af(s) || sf(s)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Kn = 0,
    wt = null,
    Xt = null,
    he = null,
    To = !1,
    Wa = !1,
    ra = !1,
    Ao = 0,
    Ws = 0,
    $a = null,
    Ky = 0;
  function ne() {
    throw Error(l(321));
  }
  function $u(t, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < t.length; s++)
      if (!Ze(t[s], n[s])) return !1;
    return !0;
  }
  function Ju(t, n, s, o, f, g) {
    return (
      (Kn = g),
      (wt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? Tg : gc),
      (ra = !1),
      (g = s(o, f)),
      (ra = !1),
      Wa && (g = Qd(n, s, o, f)),
      Xd(t),
      g
    );
  }
  function Xd(t) {
    H.H = tl;
    var n = Xt !== null && Xt.next !== null;
    if (((Kn = 0), (he = Xt = wt = null), (To = !1), (Ws = 0), ($a = null), n))
      throw Error(l(300));
    t === null ||
      de ||
      ((t = t.dependencies), t !== null && yo(t) && (de = !0));
  }
  function Qd(t, n, s, o) {
    wt = t;
    var f = 0;
    do {
      if ((Wa && ($a = null), (Ws = 0), (Wa = !1), 25 <= f))
        throw Error(l(301));
      if (((f += 1), (he = Xt = null), t.updateQueue != null)) {
        var g = t.updateQueue;
        (g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0);
      }
      (H.H = Ag), (g = n(s, o));
    } while (Wa);
    return g;
  }
  function Py() {
    var t = H.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? $s(n) : n),
      (t = t.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== t && (wt.flags |= 1024),
      n
    );
  }
  function tc() {
    var t = Ao !== 0;
    return (Ao = 0), t;
  }
  function ec(t, n, s) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~s);
  }
  function nc(t) {
    if (To) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      To = !1;
    }
    (Kn = 0), (he = Xt = wt = null), (Wa = !1), (Ws = Ao = 0), ($a = null);
  }
  function De() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return he === null ? (wt.memoizedState = he = t) : (he = he.next = t), he;
  }
  function oe() {
    if (Xt === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xt.next;
    var n = he === null ? wt.memoizedState : he.next;
    if (n !== null) (he = n), (Xt = t);
    else {
      if (t === null)
        throw wt.alternate === null ? Error(l(467)) : Error(l(310));
      (Xt = t),
        (t = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        he === null ? (wt.memoizedState = he = t) : (he = he.next = t);
    }
    return he;
  }
  function Oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $s(t) {
    var n = Ws;
    return (
      (Ws += 1),
      $a === null && ($a = []),
      (t = jd($a, t, n)),
      (n = wt),
      (he === null ? n.memoizedState : he.next) === null &&
        ((n = n.alternate),
        (H.H = n === null || n.memoizedState === null ? Tg : gc)),
      t
    );
  }
  function zo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $s(t);
      if (t.$$typeof === I) return Se(t);
    }
    throw Error(l(438, String(t)));
  }
  function ic(t) {
    var n = null,
      s = wt.updateQueue;
    if ((s !== null && (n = s.memoCache), n == null)) {
      var o = wt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      s === null && ((s = Oo()), (wt.updateQueue = s)),
      (s.memoCache = n),
      (s = n.data[n.index]),
      s === void 0)
    )
      for (s = n.data[n.index] = Array(t), o = 0; o < t; o++) s[o] = N;
    return n.index++, s;
  }
  function Pn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Do(t) {
    var n = oe();
    return ac(n, Xt, t);
  }
  function ac(t, n, s) {
    var o = t.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = s;
    var f = t.baseQueue,
      g = o.pending;
    if (g !== null) {
      if (f !== null) {
        var y = f.next;
        (f.next = g.next), (g.next = y);
      }
      (n.baseQueue = f = g), (o.pending = null);
    }
    if (((g = t.baseState), f === null)) t.memoizedState = g;
    else {
      n = f.next;
      var C = (y = null),
        z = null,
        Y = n,
        Z = !1;
      do {
        var P = Y.lane & -536870913;
        if (P !== Y.lane ? (Et & P) === P : (Kn & P) === P) {
          var V = Y.revertLane;
          if (V === 0)
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null,
                }),
              P === Qa && (Z = !0);
          else if ((Kn & V) === V) {
            (Y = Y.next), V === Qa && (Z = !0);
            continue;
          } else
            (P = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null,
            }),
              z === null ? ((C = z = P), (y = g)) : (z = z.next = P),
              (wt.lanes |= V),
              (Ei |= V);
          (P = Y.action),
            ra && s(g, P),
            (g = Y.hasEagerState ? Y.eagerState : s(g, P));
        } else
          (V = {
            lane: P,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null,
          }),
            z === null ? ((C = z = V), (y = g)) : (z = z.next = V),
            (wt.lanes |= P),
            (Ei |= P);
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (
        (z === null ? (y = g) : (z.next = C),
        !Ze(g, t.memoizedState) && ((de = !0), Z && ((s = Za), s !== null)))
      )
        throw s;
      (t.memoizedState = g),
        (t.baseState = y),
        (t.baseQueue = z),
        (o.lastRenderedState = g);
    }
    return f === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function sc(t) {
    var n = oe(),
      s = n.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = t;
    var o = s.dispatch,
      f = s.pending,
      g = n.memoizedState;
    if (f !== null) {
      s.pending = null;
      var y = (f = f.next);
      do (g = t(g, y.action)), (y = y.next);
      while (y !== f);
      Ze(g, n.memoizedState) || (de = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (s.lastRenderedState = g);
    }
    return [g, o];
  }
  function Zd(t, n, s) {
    var o = wt,
      f = oe(),
      g = Tt;
    if (g) {
      if (s === void 0) throw Error(l(407));
      s = s();
    } else s = n();
    var y = !Ze((Xt || f).memoizedState, s);
    if (
      (y && ((f.memoizedState = s), (de = !0)),
      (f = f.queue),
      rc(Id.bind(null, o, f, t), [t]),
      f.getSnapshot !== n || y || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Ja(9, { destroy: void 0 }, Pd.bind(null, o, f, s, n), null),
        Kt === null)
      )
        throw Error(l(349));
      g || (Kn & 127) !== 0 || Kd(o, n, s);
    }
    return s;
  }
  function Kd(t, n, s) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: s }),
      (n = wt.updateQueue),
      n === null
        ? ((n = Oo()), (wt.updateQueue = n), (n.stores = [t]))
        : ((s = n.stores), s === null ? (n.stores = [t]) : s.push(t));
  }
  function Pd(t, n, s, o) {
    (n.value = s), (n.getSnapshot = o), Wd(n) && $d(t);
  }
  function Id(t, n, s) {
    return s(function () {
      Wd(n) && $d(t);
    });
  }
  function Wd(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var s = n();
      return !Ze(t, s);
    } catch {
      return !0;
    }
  }
  function $d(t) {
    var n = Ji(t, 2);
    n !== null && qe(n, t, 2);
  }
  function lc(t) {
    var n = De();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), ra)) {
        fi(!0);
        try {
          s();
        } finally {
          fi(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Jd(t, n, s, o) {
    return (t.baseState = s), ac(t, Xt, typeof o == "function" ? o : Pn);
  }
  function Iy(t, n, s, o, f) {
    if (Bo(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var g = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          g.listeners.push(y);
        },
      };
      H.T !== null ? s(!0) : (g.isTransition = !1),
        o(g),
        (s = n.pending),
        s === null
          ? ((g.next = n.pending = g), tg(n, g))
          : ((g.next = s.next), (n.pending = s.next = g));
    }
  }
  function tg(t, n) {
    var s = n.action,
      o = n.payload,
      f = t.state;
    if (n.isTransition) {
      var g = H.T,
        y = {};
      H.T = y;
      try {
        var C = s(f, o),
          z = H.S;
        z !== null && z(y, C), eg(t, n, C);
      } catch (Y) {
        oc(t, n, Y);
      } finally {
        g !== null && y.types !== null && (g.types = y.types), (H.T = g);
      }
    } else
      try {
        (g = s(f, o)), eg(t, n, g);
      } catch (Y) {
        oc(t, n, Y);
      }
  }
  function eg(t, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (o) {
            ng(t, n, o);
          },
          function (o) {
            return oc(t, n, o);
          }
        )
      : ng(t, n, s);
  }
  function ng(t, n, s) {
    (n.status = "fulfilled"),
      (n.value = s),
      ig(n),
      (t.state = s),
      (n = t.pending),
      n !== null &&
        ((s = n.next),
        s === n ? (t.pending = null) : ((s = s.next), (n.next = s), tg(t, s)));
  }
  function oc(t, n, s) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = s), ig(n), (n = n.next);
      while (n !== o);
    }
    t.action = null;
  }
  function ig(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function ag(t, n) {
    return n;
  }
  function sg(t, n) {
    if (Tt) {
      var s = Kt.formState;
      if (s !== null) {
        t: {
          var o = wt;
          if (Tt) {
            if (Wt) {
              e: {
                for (var f = Wt, g = gn; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = mn(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (g = f.data), (f = g === "F!" || g === "F" ? f : null);
              }
              if (f) {
                (Wt = mn(f.nextSibling)), (o = f.data === "F!");
                break t;
              }
            }
            mi(o);
          }
          o = !1;
        }
        o && (n = s[0]);
      }
    }
    return (
      (s = De()),
      (s.memoizedState = s.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ag,
        lastRenderedState: n,
      }),
      (s.queue = o),
      (s = Cg.bind(null, wt, o)),
      (o.dispatch = s),
      (o = lc(!1)),
      (g = dc.bind(null, wt, !1, o.queue)),
      (o = De()),
      (f = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = f),
      (s = Iy.bind(null, wt, f, g, s)),
      (f.dispatch = s),
      (o.memoizedState = t),
      [n, s, !1]
    );
  }
  function lg(t) {
    var n = oe();
    return og(n, Xt, t);
  }
  function og(t, n, s) {
    if (
      ((n = ac(t, n, ag)[0]),
      (t = Do(Pn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = $s(n);
      } catch (y) {
        throw y === Ka ? _o : y;
      }
    else o = n;
    n = oe();
    var f = n.queue,
      g = f.dispatch;
    return (
      s !== n.memoizedState &&
        ((wt.flags |= 2048),
        Ja(9, { destroy: void 0 }, Wy.bind(null, f, s), null)),
      [o, g, t]
    );
  }
  function Wy(t, n) {
    t.action = n;
  }
  function rg(t) {
    var n = oe(),
      s = Xt;
    if (s !== null) return og(n, s, t);
    oe(), (n = n.memoizedState), (s = oe());
    var o = s.queue.dispatch;
    return (s.memoizedState = t), [n, o, !1];
  }
  function Ja(t, n, s, o) {
    return (
      (t = { tag: t, create: s, deps: o, inst: n, next: null }),
      (n = wt.updateQueue),
      n === null && ((n = Oo()), (wt.updateQueue = n)),
      (s = n.lastEffect),
      s === null
        ? (n.lastEffect = t.next = t)
        : ((o = s.next), (s.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function ug() {
    return oe().memoizedState;
  }
  function ko(t, n, s, o) {
    var f = De();
    (wt.flags |= t),
      (f.memoizedState = Ja(
        1 | n,
        { destroy: void 0 },
        s,
        o === void 0 ? null : o
      ));
  }
  function Ro(t, n, s, o) {
    var f = oe();
    o = o === void 0 ? null : o;
    var g = f.memoizedState.inst;
    Xt !== null && o !== null && $u(o, Xt.memoizedState.deps)
      ? (f.memoizedState = Ja(n, g, s, o))
      : ((wt.flags |= t), (f.memoizedState = Ja(1 | n, g, s, o)));
  }
  function cg(t, n) {
    ko(8390656, 8, t, n);
  }
  function rc(t, n) {
    Ro(2048, 8, t, n);
  }
  function $y(t) {
    wt.flags |= 4;
    var n = wt.updateQueue;
    if (n === null) (n = Oo()), (wt.updateQueue = n), (n.events = [t]);
    else {
      var s = n.events;
      s === null ? (n.events = [t]) : s.push(t);
    }
  }
  function fg(t) {
    var n = oe().memoizedState;
    return (
      $y({ ref: n, nextImpl: t }),
      function () {
        if ((jt & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function hg(t, n) {
    return Ro(4, 2, t, n);
  }
  function dg(t, n) {
    return Ro(4, 4, t, n);
  }
  function gg(t, n) {
    if (typeof n == "function") {
      t = t();
      var s = n(t);
      return function () {
        typeof s == "function" ? s() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function pg(t, n, s) {
    (s = s != null ? s.concat([t]) : null), Ro(4, 4, gg.bind(null, n, t), s);
  }
  function uc() {}
  function mg(t, n) {
    var s = oe();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    return n !== null && $u(n, o[1]) ? o[0] : ((s.memoizedState = [t, n]), t);
  }
  function bg(t, n) {
    var s = oe();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    if (n !== null && $u(n, o[1])) return o[0];
    if (((o = t()), ra)) {
      fi(!0);
      try {
        t();
      } finally {
        fi(!1);
      }
    }
    return (s.memoizedState = [o, n]), o;
  }
  function cc(t, n, s) {
    return s === void 0 || ((Kn & 1073741824) !== 0 && (Et & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = s), (t = yp()), (wt.lanes |= t), (Ei |= t), s);
  }
  function yg(t, n, s, o) {
    return Ze(s, n)
      ? s
      : Ia.current !== null
      ? ((t = cc(t, s, o)), Ze(t, n) || (de = !0), t)
      : (Kn & 42) === 0 || ((Kn & 1073741824) !== 0 && (Et & 261930) === 0)
      ? ((de = !0), (t.memoizedState = s))
      : ((t = yp()), (wt.lanes |= t), (Ei |= t), n);
  }
  function vg(t, n, s, o, f) {
    var g = G.p;
    G.p = g !== 0 && 8 > g ? g : 8;
    var y = H.T,
      C = {};
    (H.T = C), dc(t, !1, n, s);
    try {
      var z = f(),
        Y = H.S;
      if (
        (Y !== null && Y(C, z),
        z !== null && typeof z == "object" && typeof z.then == "function")
      ) {
        var Z = Zy(z, o);
        Js(t, n, Z, Je(t));
      } else Js(t, n, o, Je(t));
    } catch (P) {
      Js(t, n, { then: function () {}, status: "rejected", reason: P }, Je());
    } finally {
      (G.p = g),
        y !== null && C.types !== null && (y.types = C.types),
        (H.T = y);
    }
  }
  function Jy() {}
  function fc(t, n, s, o) {
    if (t.tag !== 5) throw Error(l(476));
    var f = wg(t).queue;
    vg(
      t,
      f,
      n,
      nt,
      s === null
        ? Jy
        : function () {
            return _g(t), s(o);
          }
    );
  }
  function wg(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: nt,
      baseState: nt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pn,
        lastRenderedState: nt,
      },
      next: null,
    };
    var s = {};
    return (
      (n.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Pn,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function _g(t) {
    var n = wg(t);
    n.next === null && (n = t.alternate.memoizedState),
      Js(t, n.next.queue, {}, Je());
  }
  function hc() {
    return Se(ml);
  }
  function xg() {
    return oe().memoizedState;
  }
  function Sg() {
    return oe().memoizedState;
  }
  function t1(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = Je();
          t = vi(s);
          var o = wi(n, t, s);
          o !== null && (qe(o, n, s), Ks(o, n, s)),
            (n = { cache: qu() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function e1(t, n, s) {
    var o = Je();
    (s = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Bo(t)
        ? Eg(n, s)
        : ((s = zu(t, n, s, o)), s !== null && (qe(s, t, o), Mg(s, n, o)));
  }
  function Cg(t, n, s) {
    var o = Je();
    Js(t, n, s, o);
  }
  function Js(t, n, s, o) {
    var f = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Bo(t)) Eg(n, f);
    else {
      var g = t.alternate;
      if (
        t.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var y = n.lastRenderedState,
            C = g(y, s);
          if (((f.hasEagerState = !0), (f.eagerState = C), Ze(C, y)))
            return go(t, n, f, 0), Kt === null && ho(), !1;
        } catch {
        } finally {
        }
      if (((s = zu(t, n, f, o)), s !== null))
        return qe(s, t, o), Mg(s, n, o), !0;
    }
    return !1;
  }
  function dc(t, n, s, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Xc(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bo(t))
    ) {
      if (n) throw Error(l(479));
    } else (n = zu(t, s, o, 2)), n !== null && qe(n, t, 2);
  }
  function Bo(t) {
    var n = t.alternate;
    return t === wt || (n !== null && n === wt);
  }
  function Eg(t, n) {
    Wa = To = !0;
    var s = t.pending;
    s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (t.pending = n);
  }
  function Mg(t, n, s) {
    if ((s & 4194048) !== 0) {
      var o = n.lanes;
      (o &= t.pendingLanes), (s |= o), (n.lanes = s), Dh(t, s);
    }
  }
  var tl = {
    readContext: Se,
    use: zo,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useLayoutEffect: ne,
    useInsertionEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useSyncExternalStore: ne,
    useId: ne,
    useHostTransitionStatus: ne,
    useFormState: ne,
    useActionState: ne,
    useOptimistic: ne,
    useMemoCache: ne,
    useCacheRefresh: ne,
  };
  tl.useEffectEvent = ne;
  var Tg = {
      readContext: Se,
      use: zo,
      useCallback: function (t, n) {
        return (De().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: Se,
      useEffect: cg,
      useImperativeHandle: function (t, n, s) {
        (s = s != null ? s.concat([t]) : null),
          ko(4194308, 4, gg.bind(null, n, t), s);
      },
      useLayoutEffect: function (t, n) {
        return ko(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ko(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var s = De();
        n = n === void 0 ? null : n;
        var o = t();
        if (ra) {
          fi(!0);
          try {
            t();
          } finally {
            fi(!1);
          }
        }
        return (s.memoizedState = [o, n]), o;
      },
      useReducer: function (t, n, s) {
        var o = De();
        if (s !== void 0) {
          var f = s(n);
          if (ra) {
            fi(!0);
            try {
              s(n);
            } finally {
              fi(!1);
            }
          }
        } else f = n;
        return (
          (o.memoizedState = o.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (o.queue = t),
          (t = t.dispatch = e1.bind(null, wt, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = De();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: function (t) {
        t = lc(t);
        var n = t.queue,
          s = Cg.bind(null, wt, n);
        return (n.dispatch = s), [t.memoizedState, s];
      },
      useDebugValue: uc,
      useDeferredValue: function (t, n) {
        var s = De();
        return cc(s, t, n);
      },
      useTransition: function () {
        var t = lc(!1);
        return (
          (t = vg.bind(null, wt, t.queue, !0, !1)),
          (De().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, s) {
        var o = wt,
          f = De();
        if (Tt) {
          if (s === void 0) throw Error(l(407));
          s = s();
        } else {
          if (((s = n()), Kt === null)) throw Error(l(349));
          (Et & 127) !== 0 || Kd(o, n, s);
        }
        f.memoizedState = s;
        var g = { value: s, getSnapshot: n };
        return (
          (f.queue = g),
          cg(Id.bind(null, o, g, t), [t]),
          (o.flags |= 2048),
          Ja(9, { destroy: void 0 }, Pd.bind(null, o, g, s, n), null),
          s
        );
      },
      useId: function () {
        var t = De(),
          n = Kt.identifierPrefix;
        if (Tt) {
          var s = Dn,
            o = zn;
          (s = (o & ~(1 << (32 - Qe(o) - 1))).toString(32) + s),
            (n = "_" + n + "R_" + s),
            (s = Ao++),
            0 < s && (n += "H" + s.toString(32)),
            (n += "_");
        } else (s = Ky++), (n = "_" + n + "r_" + s.toString(32) + "_");
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: hc,
      useFormState: sg,
      useActionState: sg,
      useOptimistic: function (t) {
        var n = De();
        n.memoizedState = n.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = s),
          (n = dc.bind(null, wt, !0, s)),
          (s.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: ic,
      useCacheRefresh: function () {
        return (De().memoizedState = t1.bind(null, wt));
      },
      useEffectEvent: function (t) {
        var n = De(),
          s = { impl: t };
        return (
          (n.memoizedState = s),
          function () {
            if ((jt & 2) !== 0) throw Error(l(440));
            return s.impl.apply(void 0, arguments);
          }
        );
      },
    },
    gc = {
      readContext: Se,
      use: zo,
      useCallback: mg,
      useContext: Se,
      useEffect: rc,
      useImperativeHandle: pg,
      useInsertionEffect: hg,
      useLayoutEffect: dg,
      useMemo: bg,
      useReducer: Do,
      useRef: ug,
      useState: function () {
        return Do(Pn);
      },
      useDebugValue: uc,
      useDeferredValue: function (t, n) {
        var s = oe();
        return yg(s, Xt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Do(Pn)[0],
          n = oe().memoizedState;
        return [typeof t == "boolean" ? t : $s(t), n];
      },
      useSyncExternalStore: Zd,
      useId: xg,
      useHostTransitionStatus: hc,
      useFormState: lg,
      useActionState: lg,
      useOptimistic: function (t, n) {
        var s = oe();
        return Jd(s, Xt, t, n);
      },
      useMemoCache: ic,
      useCacheRefresh: Sg,
    };
  gc.useEffectEvent = fg;
  var Ag = {
    readContext: Se,
    use: zo,
    useCallback: mg,
    useContext: Se,
    useEffect: rc,
    useImperativeHandle: pg,
    useInsertionEffect: hg,
    useLayoutEffect: dg,
    useMemo: bg,
    useReducer: sc,
    useRef: ug,
    useState: function () {
      return sc(Pn);
    },
    useDebugValue: uc,
    useDeferredValue: function (t, n) {
      var s = oe();
      return Xt === null ? cc(s, t, n) : yg(s, Xt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = sc(Pn)[0],
        n = oe().memoizedState;
      return [typeof t == "boolean" ? t : $s(t), n];
    },
    useSyncExternalStore: Zd,
    useId: xg,
    useHostTransitionStatus: hc,
    useFormState: rg,
    useActionState: rg,
    useOptimistic: function (t, n) {
      var s = oe();
      return Xt !== null
        ? Jd(s, Xt, t, n)
        : ((s.baseState = t), [t, s.queue.dispatch]);
    },
    useMemoCache: ic,
    useCacheRefresh: Sg,
  };
  Ag.useEffectEvent = fg;
  function pc(t, n, s, o) {
    (n = t.memoizedState),
      (s = s(o, n)),
      (s = s == null ? n : b({}, n, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var mc = {
    enqueueSetState: function (t, n, s) {
      t = t._reactInternals;
      var o = Je(),
        f = vi(o);
      (f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, o)),
        n !== null && (qe(n, t, o), Ks(n, t, o));
    },
    enqueueReplaceState: function (t, n, s) {
      t = t._reactInternals;
      var o = Je(),
        f = vi(o);
      (f.tag = 1),
        (f.payload = n),
        s != null && (f.callback = s),
        (n = wi(t, f, o)),
        n !== null && (qe(n, t, o), Ks(n, t, o));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var s = Je(),
        o = vi(s);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = wi(t, o, s)),
        n !== null && (qe(n, t, s), Ks(n, t, s));
    },
  };
  function Og(t, n, s, o, f, g, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, g, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Fs(s, o) || !Fs(f, g)
        : !0
    );
  }
  function zg(t, n, s, o) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, o),
      n.state !== t && mc.enqueueReplaceState(n, n.state, null);
  }
  function ua(t, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var o in n) o !== "ref" && (s[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      s === n && (s = b({}, s));
      for (var f in t) s[f] === void 0 && (s[f] = t[f]);
    }
    return s;
  }
  function Dg(t) {
    fo(t);
  }
  function kg(t) {
    console.error(t);
  }
  function Rg(t) {
    fo(t);
  }
  function Lo(t, n) {
    try {
      var s = t.onUncaughtError;
      s(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Bg(t, n, s) {
    try {
      var o = t.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function bc(t, n, s) {
    return (
      (s = vi(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Lo(t, n);
      }),
      s
    );
  }
  function Lg(t) {
    return (t = vi(t)), (t.tag = 3), t;
  }
  function jg(t, n, s, o) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = o.value;
      (t.payload = function () {
        return f(g);
      }),
        (t.callback = function () {
          Bg(n, s, o);
        });
    }
    var y = s.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        Bg(n, s, o),
          typeof f != "function" &&
            (Mi === null ? (Mi = new Set([this])) : Mi.add(this));
        var C = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: C !== null ? C : "",
        });
      });
  }
  function n1(t, n, s, o, f) {
    if (
      ((s.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = s.alternate),
        n !== null && Xa(n, s, f, !0),
        (s = Pe.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 31:
          case 13:
            return (
              pn === null ? Zo() : s.alternate === null && ie === 0 && (ie = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              o === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null ? (s.updateQueue = new Set([o])) : n.add(o),
                  Yc(t, o, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              o === xo
                ? (s.flags |= 16384)
                : ((n = s.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (s.updateQueue = n))
                    : ((s = n.retryQueue),
                      s === null ? (n.retryQueue = new Set([o])) : s.add(o)),
                  Yc(t, o, f)),
              !1
            );
        }
        throw Error(l(435, s.tag));
      }
      return Yc(t, o, f), Zo(), !1;
    }
    if (Tt)
      return (
        (n = Pe.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            o !== ju && ((t = Error(l(422), { cause: o })), Vs(fn(t, s))))
          : (o !== ju && ((n = Error(l(423), { cause: o })), Vs(fn(n, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (o = fn(o, s)),
            (f = bc(t.stateNode, o, f)),
            Zu(t, f),
            ie !== 4 && (ie = 2)),
        !1
      );
    var g = Error(l(520), { cause: o });
    if (
      ((g = fn(g, s)),
      rl === null ? (rl = [g]) : rl.push(g),
      ie !== 4 && (ie = 2),
      n === null)
    )
      return !0;
    (o = fn(o, s)), (s = n);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = f & -f),
            (s.lanes |= t),
            (t = bc(s.stateNode, o, t)),
            Zu(s, t),
            !1
          );
        case 1:
          if (
            ((n = s.type),
            (g = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (Mi === null || !Mi.has(g)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Lg(f)),
              jg(f, t, s, o),
              Zu(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var yc = Error(l(461)),
    de = !1;
  function Ce(t, n, s, o) {
    n.child = t === null ? Fd(n, null, s, o) : oa(n, t.child, s, o);
  }
  function Hg(t, n, s, o, f) {
    s = s.render;
    var g = n.ref;
    if ("ref" in o) {
      var y = {};
      for (var C in o) C !== "ref" && (y[C] = o[C]);
    } else y = o;
    return (
      ia(n),
      (o = Ju(t, n, s, y, g, f)),
      (C = tc()),
      t !== null && !de
        ? (ec(t, n, f), In(t, n, f))
        : (Tt && C && Bu(n), (n.flags |= 1), Ce(t, n, o, f), n.child)
    );
  }
  function Ng(t, n, s, o, f) {
    if (t === null) {
      var g = s.type;
      return typeof g == "function" &&
        !Du(g) &&
        g.defaultProps === void 0 &&
        s.compare === null
        ? ((n.tag = 15), (n.type = g), Ug(t, n, g, o, f))
        : ((t = mo(s.type, null, o, n, n.mode, f)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((g = t.child), !Mc(t, f))) {
      var y = g.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Fs), s(y, o) && t.ref === n.ref)
      )
        return In(t, n, f);
    }
    return (
      (n.flags |= 1),
      (t = Gn(g, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Ug(t, n, s, o, f) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (Fs(g, o) && t.ref === n.ref)
        if (((de = !1), (n.pendingProps = o = g), Mc(t, f)))
          (t.flags & 131072) !== 0 && (de = !0);
        else return (n.lanes = t.lanes), In(t, n, f);
    }
    return vc(t, n, s, o, f);
  }
  function Fg(t, n, s, o) {
    var f = o.children,
      g = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((g = g !== null ? g.baseLanes | s : s), t !== null)) {
          for (o = n.child = t.child, f = 0; o !== null; )
            (f = f | o.lanes | o.childLanes), (o = o.sibling);
          o = f & ~g;
        } else (o = 0), (n.child = null);
        return qg(t, n, g, s, o);
      }
      if ((s & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && wo(n, g !== null ? g.cachePool : null),
          g !== null ? Vd(n, g) : Pu(),
          Gd(n);
      else
        return (
          (o = n.lanes = 536870912),
          qg(t, n, g !== null ? g.baseLanes | s : s, s, o)
        );
    } else
      g !== null
        ? (wo(n, g.cachePool), Vd(n, g), xi(), (n.memoizedState = null))
        : (t !== null && wo(n, null), Pu(), xi());
    return Ce(t, n, f, s), n.child;
  }
  function el(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function qg(t, n, s, o, f) {
    var g = Vu();
    return (
      (g = g === null ? null : { parent: fe._currentValue, pool: g }),
      (n.memoizedState = { baseLanes: s, cachePool: g }),
      t !== null && wo(n, null),
      Pu(),
      Gd(n),
      t !== null && Xa(t, n, o, !0),
      (n.childLanes = f),
      null
    );
  }
  function jo(t, n) {
    return (
      (n = No({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    );
  }
  function Yg(t, n, s) {
    return (
      oa(n, t.child, null, s),
      (t = jo(n, n.pendingProps)),
      (t.flags |= 2),
      Ie(n),
      (n.memoizedState = null),
      t
    );
  }
  function i1(t, n, s) {
    var o = n.pendingProps,
      f = (n.flags & 128) !== 0;
    if (((n.flags &= -129), t === null)) {
      if (Tt) {
        if (o.mode === "hidden")
          return (t = jo(n, o)), (n.lanes = 536870912), el(null, t);
        if (
          (Wu(n),
          (t = Wt)
            ? ((t = tm(t, gn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: zn, overflow: Dn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Ed(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return (n.lanes = 536870912), null;
      }
      return jo(n, o);
    }
    var g = t.memoizedState;
    if (g !== null) {
      var y = g.dehydrated;
      if ((Wu(n), f))
        if (n.flags & 256) (n.flags &= -257), (n = Yg(t, n, s));
        else if (n.memoizedState !== null)
          (n.child = t.child), (n.flags |= 128), (n = null);
        else throw Error(l(558));
      else if (
        (de || Xa(t, n, s, !1), (f = (s & t.childLanes) !== 0), de || f)
      ) {
        if (
          ((o = Kt),
          o !== null && ((y = kh(o, s)), y !== 0 && y !== g.retryLane))
        )
          throw ((g.retryLane = y), Ji(t, y), qe(o, t, y), yc);
        Zo(), (n = Yg(t, n, s));
      } else
        (t = g.treeContext),
          (Wt = mn(y.nextSibling)),
          (xe = n),
          (Tt = !0),
          (pi = null),
          (gn = !1),
          t !== null && Ad(n, t),
          (n = jo(n, o)),
          (n.flags |= 4096);
      return n;
    }
    return (
      (t = Gn(t.child, { mode: o.mode, children: o.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    );
  }
  function Ho(t, n) {
    var s = n.ref;
    if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(l(284));
      (t === null || t.ref !== s) && (n.flags |= 4194816);
    }
  }
  function vc(t, n, s, o, f) {
    return (
      ia(n),
      (s = Ju(t, n, s, o, void 0, f)),
      (o = tc()),
      t !== null && !de
        ? (ec(t, n, f), In(t, n, f))
        : (Tt && o && Bu(n), (n.flags |= 1), Ce(t, n, s, f), n.child)
    );
  }
  function Vg(t, n, s, o, f, g) {
    return (
      ia(n),
      (n.updateQueue = null),
      (s = Qd(n, o, s, f)),
      Xd(t),
      (o = tc()),
      t !== null && !de
        ? (ec(t, n, g), In(t, n, g))
        : (Tt && o && Bu(n), (n.flags |= 1), Ce(t, n, s, g), n.child)
    );
  }
  function Gg(t, n, s, o, f) {
    if ((ia(n), n.stateNode === null)) {
      var g = qa,
        y = s.contextType;
      typeof y == "object" && y !== null && (g = Se(y)),
        (g = new s(o, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = mc),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = o),
        (g.state = n.memoizedState),
        (g.refs = {}),
        Xu(n),
        (y = s.contextType),
        (g.context = typeof y == "object" && y !== null ? Se(y) : qa),
        (g.state = n.memoizedState),
        (y = s.getDerivedStateFromProps),
        typeof y == "function" && (pc(n, s, y, o), (g.state = n.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((y = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          y !== g.state && mc.enqueueReplaceState(g, g.state, null),
          Is(n, o, g, f),
          Ps(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (t === null) {
      g = n.stateNode;
      var C = n.memoizedProps,
        z = ua(s, C);
      g.props = z;
      var Y = g.context,
        Z = s.contextType;
      (y = qa), typeof Z == "object" && Z !== null && (y = Se(Z));
      var P = s.getDerivedStateFromProps;
      (Z =
        typeof P == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (C = n.pendingProps !== C),
        Z ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((C || Y !== y) && zg(n, g, o, y)),
        (yi = !1);
      var V = n.memoizedState;
      (g.state = V),
        Is(n, o, g, f),
        Ps(),
        (Y = n.memoizedState),
        C || V !== Y || yi
          ? (typeof P == "function" && (pc(n, s, P, o), (Y = n.memoizedState)),
            (z = yi || Og(n, s, z, o, V, Y, y))
              ? (Z ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = Y)),
            (g.props = o),
            (g.state = Y),
            (g.context = y),
            (o = z))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (g = n.stateNode),
        Qu(t, n),
        (y = n.memoizedProps),
        (Z = ua(s, y)),
        (g.props = Z),
        (P = n.pendingProps),
        (V = g.context),
        (Y = s.contextType),
        (z = qa),
        typeof Y == "object" && Y !== null && (z = Se(Y)),
        (C = s.getDerivedStateFromProps),
        (Y =
          typeof C == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((y !== P || V !== z) && zg(n, g, o, z)),
        (yi = !1),
        (V = n.memoizedState),
        (g.state = V),
        Is(n, o, g, f),
        Ps();
      var X = n.memoizedState;
      y !== P ||
      V !== X ||
      yi ||
      (t !== null && t.dependencies !== null && yo(t.dependencies))
        ? (typeof C == "function" && (pc(n, s, C, o), (X = n.memoizedState)),
          (Z =
            yi ||
            Og(n, s, Z, o, V, X, z) ||
            (t !== null && t.dependencies !== null && yo(t.dependencies)))
            ? (Y ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(o, X, z),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(o, X, z)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (y === t.memoizedProps && V === t.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && V === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = X)),
          (g.props = o),
          (g.state = X),
          (g.context = z),
          (o = Z))
        : (typeof g.componentDidUpdate != "function" ||
            (y === t.memoizedProps && V === t.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && V === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (g = o),
      Ho(t, n),
      (o = (n.flags & 128) !== 0),
      g || o
        ? ((g = n.stateNode),
          (s =
            o && typeof s.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = oa(n, t.child, null, f)),
              (n.child = oa(n, null, s, f)))
            : Ce(t, n, s, f),
          (n.memoizedState = g.state),
          (t = n.child))
        : (t = In(t, n, f)),
      t
    );
  }
  function Xg(t, n, s, o) {
    return ea(), (n.flags |= 256), Ce(t, n, s, o), n.child;
  }
  var wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function _c(t) {
    return { baseLanes: t, cachePool: Bd() };
  }
  function xc(t, n, s) {
    return (t = t !== null ? t.childLanes & ~s : 0), n && (t |= $e), t;
  }
  function Qg(t, n, s) {
    var o = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      y;
    if (
      ((y = g) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (le.current & 2) !== 0),
      y && ((f = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (Tt) {
        if (
          (f ? _i(n) : xi(),
          (t = Wt)
            ? ((t = tm(t, gn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gi !== null ? { id: zn, overflow: Dn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (s = Ed(t)),
                (s.return = n),
                (n.child = s),
                (xe = n),
                (Wt = null)))
            : (t = null),
          t === null)
        )
          throw mi(n);
        return sf(t) ? (n.lanes = 32) : (n.lanes = 536870912), null;
      }
      var C = o.children;
      return (
        (o = o.fallback),
        f
          ? (xi(),
            (f = n.mode),
            (C = No({ mode: "hidden", children: C }, f)),
            (o = ta(o, f, s, null)),
            (C.return = n),
            (o.return = n),
            (C.sibling = o),
            (n.child = C),
            (o = n.child),
            (o.memoizedState = _c(s)),
            (o.childLanes = xc(t, y, s)),
            (n.memoizedState = wc),
            el(null, o))
          : (_i(n), Sc(n, C))
      );
    }
    var z = t.memoizedState;
    if (z !== null && ((C = z.dehydrated), C !== null)) {
      if (g)
        n.flags & 256
          ? (_i(n), (n.flags &= -257), (n = Cc(t, n, s)))
          : n.memoizedState !== null
          ? (xi(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (xi(),
            (C = o.fallback),
            (f = n.mode),
            (o = No({ mode: "visible", children: o.children }, f)),
            (C = ta(C, f, s, null)),
            (C.flags |= 2),
            (o.return = n),
            (C.return = n),
            (o.sibling = C),
            (n.child = o),
            oa(n, t.child, null, s),
            (o = n.child),
            (o.memoizedState = _c(s)),
            (o.childLanes = xc(t, y, s)),
            (n.memoizedState = wc),
            (n = el(null, o)));
      else if ((_i(n), sf(C))) {
        if (((y = C.nextSibling && C.nextSibling.dataset), y)) var Y = y.dgst;
        (y = Y),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = y),
          Vs({ value: o, source: null, stack: null }),
          (n = Cc(t, n, s));
      } else if (
        (de || Xa(t, n, s, !1), (y = (s & t.childLanes) !== 0), de || y)
      ) {
        if (
          ((y = Kt),
          y !== null && ((o = kh(y, s)), o !== 0 && o !== z.retryLane))
        )
          throw ((z.retryLane = o), Ji(t, o), qe(y, t, o), yc);
        af(C) || Zo(), (n = Cc(t, n, s));
      } else
        af(C)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = z.treeContext),
            (Wt = mn(C.nextSibling)),
            (xe = n),
            (Tt = !0),
            (pi = null),
            (gn = !1),
            t !== null && Ad(n, t),
            (n = Sc(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (xi(),
        (C = o.fallback),
        (f = n.mode),
        (z = t.child),
        (Y = z.sibling),
        (o = Gn(z, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = z.subtreeFlags & 65011712),
        Y !== null ? (C = Gn(Y, C)) : ((C = ta(C, f, s, null)), (C.flags |= 2)),
        (C.return = n),
        (o.return = n),
        (o.sibling = C),
        (n.child = o),
        el(null, o),
        (o = n.child),
        (C = t.child.memoizedState),
        C === null
          ? (C = _c(s))
          : ((f = C.cachePool),
            f !== null
              ? ((z = fe._currentValue),
                (f = f.parent !== z ? { parent: z, pool: z } : f))
              : (f = Bd()),
            (C = { baseLanes: C.baseLanes | s, cachePool: f })),
        (o.memoizedState = C),
        (o.childLanes = xc(t, y, s)),
        (n.memoizedState = wc),
        el(t.child, o))
      : (_i(n),
        (s = t.child),
        (t = s.sibling),
        (s = Gn(s, { mode: "visible", children: o.children })),
        (s.return = n),
        (s.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = s),
        (n.memoizedState = null),
        s);
  }
  function Sc(t, n) {
    return (
      (n = No({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function No(t, n) {
    return (t = Ke(22, t, null, n)), (t.lanes = 0), t;
  }
  function Cc(t, n, s) {
    return (
      oa(n, t.child, null, s),
      (t = Sc(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Zg(t, n, s) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), Uu(t.return, n, s);
  }
  function Ec(t, n, s, o, f, g) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: s,
          tailMode: f,
          treeForkCount: g,
        })
      : ((y.isBackwards = n),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = o),
        (y.tail = s),
        (y.tailMode = f),
        (y.treeForkCount = g));
  }
  function Kg(t, n, s) {
    var o = n.pendingProps,
      f = o.revealOrder,
      g = o.tail;
    o = o.children;
    var y = le.current,
      C = (y & 2) !== 0;
    if (
      (C ? ((y = (y & 1) | 2), (n.flags |= 128)) : (y &= 1),
      B(le, y),
      Ce(t, n, o, s),
      (o = Tt ? Ys : 0),
      !C && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Zg(t, s, n);
        else if (t.tag === 19) Zg(t, s, n);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (f) {
      case "forwards":
        for (s = n.child, f = null; s !== null; )
          (t = s.alternate),
            t !== null && Mo(t) === null && (f = s),
            (s = s.sibling);
        (s = f),
          s === null
            ? ((f = n.child), (n.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          Ec(n, !1, f, s, g, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (s = null, f = n.child, n.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && Mo(t) === null)) {
            n.child = f;
            break;
          }
          (t = f.sibling), (f.sibling = s), (s = f), (f = t);
        }
        Ec(n, !0, s, null, g, o);
        break;
      case "together":
        Ec(n, !1, null, null, void 0, o);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function In(t, n, s) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Ei |= n.lanes),
      (s & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Xa(t, n, s, !1), (s & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        t = n.child, s = Gn(t, t.pendingProps), n.child = s, s.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (s = s.sibling = Gn(t, t.pendingProps)),
          (s.return = n);
      s.sibling = null;
    }
    return n.child;
  }
  function Mc(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && yo(t)));
  }
  function a1(t, n, s) {
    switch (n.tag) {
      case 3:
        pt(n, n.stateNode.containerInfo),
          bi(n, fe, t.memoizedState.cache),
          ea();
        break;
      case 27:
      case 5:
        Bt(n);
        break;
      case 4:
        pt(n, n.stateNode.containerInfo);
        break;
      case 10:
        bi(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return (n.flags |= 128), Wu(n), null;
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (_i(n), (n.flags |= 128), null)
            : (s & n.child.childLanes) !== 0
            ? Qg(t, n, s)
            : (_i(n), (t = In(t, n, s)), t !== null ? t.sibling : null);
        _i(n);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((o = (s & n.childLanes) !== 0),
          o || (Xa(t, n, s, !1), (o = (s & n.childLanes) !== 0)),
          f)
        ) {
          if (o) return Kg(t, n, s);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          B(le, le.current),
          o)
        )
          break;
        return null;
      case 22:
        return (n.lanes = 0), Fg(t, n, s, n.pendingProps);
      case 24:
        bi(n, fe, t.memoizedState.cache);
    }
    return In(t, n, s);
  }
  function Pg(t, n, s) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) de = !0;
      else {
        if (!Mc(t, s) && (n.flags & 128) === 0) return (de = !1), a1(t, n, s);
        de = (t.flags & 131072) !== 0;
      }
    else (de = !1), Tt && (n.flags & 1048576) !== 0 && Td(n, Ys, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          var o = n.pendingProps;
          if (((t = sa(n.elementType)), (n.type = t), typeof t == "function"))
            Du(t)
              ? ((o = ua(t, o)), (n.tag = 1), (n = Gg(null, n, t, o, s)))
              : ((n.tag = 0), (n = vc(null, n, t, o, s)));
          else {
            if (t != null) {
              var f = t.$$typeof;
              if (f === $) {
                (n.tag = 11), (n = Hg(null, n, t, o, s));
                break t;
              } else if (f === T) {
                (n.tag = 14), (n = Ng(null, n, t, o, s));
                break t;
              }
            }
            throw ((n = lt(t) || t), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return vc(t, n, n.type, n.pendingProps, s);
      case 1:
        return (o = n.type), (f = ua(o, n.pendingProps)), Gg(t, n, o, f, s);
      case 3:
        t: {
          if ((pt(n, n.stateNode.containerInfo), t === null))
            throw Error(l(387));
          o = n.pendingProps;
          var g = n.memoizedState;
          (f = g.element), Qu(t, n), Is(n, o, null, s);
          var y = n.memoizedState;
          if (
            ((o = y.cache),
            bi(n, fe, o),
            o !== g.cache && Fu(n, [fe], s, !0),
            Ps(),
            (o = y.element),
            g.isDehydrated)
          )
            if (
              ((g = { element: o, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = g),
              (n.memoizedState = g),
              n.flags & 256)
            ) {
              n = Xg(t, n, o, s);
              break t;
            } else if (o !== f) {
              (f = fn(Error(l(424)), n)), Vs(f), (n = Xg(t, n, o, s));
              break t;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Wt = mn(t.firstChild),
                  xe = n,
                  Tt = !0,
                  pi = null,
                  gn = !0,
                  s = Fd(n, null, o, s),
                  n.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((ea(), o === f)) {
              n = In(t, n, s);
              break t;
            }
            Ce(t, n, o, s);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Ho(t, n),
          t === null
            ? (s = lm(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = s)
              : Tt ||
                ((s = n.type),
                (t = n.pendingProps),
                (o = tr(ot.current).createElement(s)),
                (o[_e] = n),
                (o[Le] = t),
                Ee(o, s, t),
                be(o),
                (n.stateNode = o))
            : (n.memoizedState = lm(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Bt(n),
          t === null &&
            Tt &&
            ((o = n.stateNode = im(n.type, n.pendingProps, ot.current)),
            (xe = n),
            (gn = !0),
            (f = Wt),
            zi(n.type) ? ((lf = f), (Wt = mn(o.firstChild))) : (Wt = f)),
          Ce(t, n, n.pendingProps.children, s),
          Ho(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            Tt &&
            ((f = o = Wt) &&
              ((o = B1(o, n.type, n.pendingProps, gn)),
              o !== null
                ? ((n.stateNode = o),
                  (xe = n),
                  (Wt = mn(o.firstChild)),
                  (gn = !1),
                  (f = !0))
                : (f = !1)),
            f || mi(n)),
          Bt(n),
          (f = n.type),
          (g = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (o = g.children),
          tf(f, g) ? (o = null) : y !== null && tf(f, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = Ju(t, n, Py, null, null, s)), (ml._currentValue = f)),
          Ho(t, n),
          Ce(t, n, o, s),
          n.child
        );
      case 6:
        return (
          t === null &&
            Tt &&
            ((t = s = Wt) &&
              ((s = L1(s, n.pendingProps, gn)),
              s !== null
                ? ((n.stateNode = s), (xe = n), (Wt = null), (t = !0))
                : (t = !1)),
            t || mi(n)),
          null
        );
      case 13:
        return Qg(t, n, s);
      case 4:
        return (
          pt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = oa(n, null, o, s)) : Ce(t, n, o, s),
          n.child
        );
      case 11:
        return Hg(t, n, n.type, n.pendingProps, s);
      case 7:
        return Ce(t, n, n.pendingProps, s), n.child;
      case 8:
        return Ce(t, n, n.pendingProps.children, s), n.child;
      case 12:
        return Ce(t, n, n.pendingProps.children, s), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          bi(n, n.type, o.value),
          Ce(t, n, o.children, s),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (o = n.pendingProps.children),
          ia(n),
          (f = Se(f)),
          (o = o(f)),
          (n.flags |= 1),
          Ce(t, n, o, s),
          n.child
        );
      case 14:
        return Ng(t, n, n.type, n.pendingProps, s);
      case 15:
        return Ug(t, n, n.type, n.pendingProps, s);
      case 19:
        return Kg(t, n, s);
      case 31:
        return i1(t, n, s);
      case 22:
        return Fg(t, n, s, n.pendingProps);
      case 24:
        return (
          ia(n),
          (o = Se(fe)),
          t === null
            ? ((f = Vu()),
              f === null &&
                ((f = Kt),
                (g = qu()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= s),
                (f = g)),
              (n.memoizedState = { parent: o, cache: f }),
              Xu(n),
              bi(n, fe, f))
            : ((t.lanes & s) !== 0 && (Qu(t, n), Is(n, null, null, s), Ps()),
              (f = t.memoizedState),
              (g = n.memoizedState),
              f.parent !== o
                ? ((f = { parent: o, cache: o }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  bi(n, fe, o))
                : ((o = g.cache),
                  bi(n, fe, o),
                  o !== f.cache && Fu(n, [fe], s, !0))),
          Ce(t, n, n.pendingProps.children, s),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function Wn(t) {
    t.flags |= 4;
  }
  function Tc(t, n, s, o, f) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (f & 335544128) === f))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (xp()) t.flags |= 8192;
        else throw ((la = xo), Gu);
    } else t.flags &= -16777217;
  }
  function Ig(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !fm(n)))
      if (xp()) t.flags |= 8192;
      else throw ((la = xo), Gu);
  }
  function Uo(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? Oh() : 536870912), (t.lanes |= n), (is |= n));
  }
  function nl(t, n) {
    if (!Tt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), (n = n.sibling);
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var o = null; s !== null; )
            s.alternate !== null && (o = s), (s = s.sibling);
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function $t(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      o = 0;
    if (n)
      for (var f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags & 65011712),
          (o |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling);
    else
      for (f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags),
          (o |= f.flags),
          (f.return = t),
          (f = f.sibling);
    return (t.subtreeFlags |= o), (t.childLanes = s), n;
  }
  function s1(t, n, s) {
    var o = n.pendingProps;
    switch ((Lu(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $t(n), null;
      case 1:
        return $t(n), null;
      case 3:
        return (
          (s = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Zn(fe),
          dt(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ga(n)
              ? Wn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Hu())),
          $t(n),
          null
        );
      case 26:
        var f = n.type,
          g = n.memoizedState;
        return (
          t === null
            ? (Wn(n),
              g !== null ? ($t(n), Ig(n, g)) : ($t(n), Tc(n, f, null, o, s)))
            : g
            ? g !== t.memoizedState
              ? (Wn(n), $t(n), Ig(n, g))
              : ($t(n), (n.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== o && Wn(n),
              $t(n),
              Tc(n, f, t, o, s)),
          null
        );
      case 27:
        if (
          (yt(n),
          (s = ot.current),
          (f = n.type),
          t !== null && n.stateNode != null)
        )
          t.memoizedProps !== o && Wn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return $t(n), null;
          }
          (t = et.current),
            Ga(n) ? Od(n) : ((t = im(f, o, s)), (n.stateNode = t), Wn(n));
        }
        return $t(n), null;
      case 5:
        if ((yt(n), (f = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && Wn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return $t(n), null;
          }
          if (((g = et.current), Ga(n))) Od(n);
          else {
            var y = tr(ot.current);
            switch (g) {
              case 1:
                g = y.createElementNS("http://www.w3.org/2000/svg", f);
                break;
              case 2:
                g = y.createElementNS("http://www.w3.org/1998/Math/MathML", f);
                break;
              default:
                switch (f) {
                  case "svg":
                    g = y.createElementNS("http://www.w3.org/2000/svg", f);
                    break;
                  case "math":
                    g = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f
                    );
                    break;
                  case "script":
                    (g = y.createElement("div")),
                      (g.innerHTML = "<script></script>"),
                      (g = g.removeChild(g.firstChild));
                    break;
                  case "select":
                    (g =
                      typeof o.is == "string"
                        ? y.createElement("select", { is: o.is })
                        : y.createElement("select")),
                      o.multiple
                        ? (g.multiple = !0)
                        : o.size && (g.size = o.size);
                    break;
                  default:
                    g =
                      typeof o.is == "string"
                        ? y.createElement(f, { is: o.is })
                        : y.createElement(f);
                }
            }
            (g[_e] = n), (g[Le] = o);
            t: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) g.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                (y.child.return = y), (y = y.child);
                continue;
              }
              if (y === n) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n) break t;
                y = y.return;
              }
              (y.sibling.return = y.return), (y = y.sibling);
            }
            n.stateNode = g;
            t: switch ((Ee(g, f, o), f)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break t;
              case "img":
                o = !0;
                break t;
              default:
                o = !1;
            }
            o && Wn(n);
          }
        }
        return (
          $t(n),
          Tc(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, s),
          null
        );
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && Wn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = ot.current), Ga(n))) {
            if (
              ((t = n.stateNode),
              (s = n.memoizedProps),
              (o = null),
              (f = xe),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            (t[_e] = n),
              (t = !!(
                t.nodeValue === s ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Qp(t.nodeValue, s)
              )),
              t || mi(n, !0);
          } else (t = tr(t).createTextNode(o)), (t[_e] = n), (n.stateNode = t);
        }
        return $t(n), null;
      case 31:
        if (((s = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((o = Ga(n)), s !== null)) {
            if (t === null) {
              if (!o) throw Error(l(318));
              if (
                ((t = n.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(l(557));
              t[_e] = n;
            } else
              ea(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            $t(n), (t = !1);
          } else
            (s = Hu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (t = !0);
          if (!t) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return $t(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ga(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(l(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(l(317));
              f[_e] = n;
            } else
              ea(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            $t(n), (f = !1);
          } else
            (f = Hu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return n.flags & 256 ? (Ie(n), n) : (Ie(n), null);
        }
        return (
          Ie(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = s), n)
            : ((s = o !== null),
              (t = t !== null && t.memoizedState !== null),
              s &&
                ((o = n.child),
                (f = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (f = o.alternate.memoizedState.cachePool.pool),
                (g = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (g = o.memoizedState.cachePool.pool),
                g !== f && (o.flags |= 2048)),
              s !== t && s && (n.child.flags |= 8192),
              Uo(n, n.updateQueue),
              $t(n),
              null)
        );
      case 4:
        return dt(), t === null && Pc(n.stateNode.containerInfo), $t(n), null;
      case 10:
        return Zn(n.type), $t(n), null;
      case 19:
        if ((F(le), (o = n.memoizedState), o === null)) return $t(n), null;
        if (((f = (n.flags & 128) !== 0), (g = o.rendering), g === null))
          if (f) nl(o, !1);
          else {
            if (ie !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((g = Mo(t)), g !== null)) {
                  for (
                    n.flags |= 128,
                      nl(o, !1),
                      t = g.updateQueue,
                      n.updateQueue = t,
                      Uo(n, t),
                      n.subtreeFlags = 0,
                      t = s,
                      s = n.child;
                    s !== null;

                  )
                    Cd(s, t), (s = s.sibling);
                  return (
                    B(le, (le.current & 1) | 2),
                    Tt && Xn(n, o.treeForkCount),
                    n.child
                  );
                }
                t = t.sibling;
              }
            o.tail !== null &&
              Ft() > Go &&
              ((n.flags |= 128), (f = !0), nl(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!f)
            if (((t = Mo(g)), t !== null)) {
              if (
                ((n.flags |= 128),
                (f = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Uo(n, t),
                nl(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !g.alternate &&
                  !Tt)
              )
                return $t(n), null;
            } else
              2 * Ft() - o.renderingStartTime > Go &&
                s !== 536870912 &&
                ((n.flags |= 128), (f = !0), nl(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((t = o.last),
              t !== null ? (t.sibling = g) : (n.child = g),
              (o.last = g));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ft()),
            (t.sibling = null),
            (s = le.current),
            B(le, f ? (s & 1) | 2 : s & 1),
            Tt && Xn(n, o.treeForkCount),
            t)
          : ($t(n), null);
      case 22:
      case 23:
        return (
          Ie(n),
          Iu(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (s & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              ($t(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : $t(n),
          (s = n.updateQueue),
          s !== null && Uo(n, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== s && (n.flags |= 2048),
          t !== null && F(aa),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          n.memoizedState.cache !== s && (n.flags |= 2048),
          Zn(fe),
          $t(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function l1(t, n) {
    switch ((Lu(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Zn(fe),
          dt(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return yt(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if ((Ie(n), n.alternate === null)) throw Error(l(340));
          ea();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 13:
        if (
          (Ie(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          ea();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return F(le), null;
      case 4:
        return dt(), null;
      case 10:
        return Zn(n.type), null;
      case 22:
      case 23:
        return (
          Ie(n),
          Iu(),
          t !== null && F(aa),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return Zn(fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wg(t, n) {
    switch ((Lu(n), n.tag)) {
      case 3:
        Zn(fe), dt();
        break;
      case 26:
      case 27:
      case 5:
        yt(n);
        break;
      case 4:
        dt();
        break;
      case 31:
        n.memoizedState !== null && Ie(n);
        break;
      case 13:
        Ie(n);
        break;
      case 19:
        F(le);
        break;
      case 10:
        Zn(n.type);
        break;
      case 22:
      case 23:
        Ie(n), Iu(), t !== null && F(aa);
        break;
      case 24:
        Zn(fe);
    }
  }
  function il(t, n) {
    try {
      var s = n.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        s = f;
        do {
          if ((s.tag & t) === t) {
            o = void 0;
            var g = s.create,
              y = s.inst;
            (o = g()), (y.destroy = o);
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (C) {
      Yt(n, n.return, C);
    }
  }
  function Si(t, n, s) {
    try {
      var o = n.updateQueue,
        f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        o = g;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst,
              C = y.destroy;
            if (C !== void 0) {
              (y.destroy = void 0), (f = n);
              var z = s,
                Y = C;
              try {
                Y();
              } catch (Z) {
                Yt(f, z, Z);
              }
            }
          }
          o = o.next;
        } while (o !== g);
      }
    } catch (Z) {
      Yt(n, n.return, Z);
    }
  }
  function $g(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var s = t.stateNode;
      try {
        Yd(n, s);
      } catch (o) {
        Yt(t, t.return, o);
      }
    }
  }
  function Jg(t, n, s) {
    (s.props = ua(t.type, t.memoizedProps)), (s.state = t.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (o) {
      Yt(t, n, o);
    }
  }
  function al(t, n) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof s == "function" ? (t.refCleanup = s(o)) : (s.current = o);
      }
    } catch (f) {
      Yt(t, n, f);
    }
  }
  function kn(t, n) {
    var s = t.ref,
      o = t.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Yt(t, n, f);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          Yt(t, n, f);
        }
      else s.current = null;
  }
  function tp(t) {
    var n = t.type,
      s = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break t;
        case "img":
          s.src ? (o.src = s.src) : s.srcSet && (o.srcset = s.srcSet);
      }
    } catch (f) {
      Yt(t, t.return, f);
    }
  }
  function Ac(t, n, s) {
    try {
      var o = t.stateNode;
      A1(o, t.type, s, n), (o[Le] = n);
    } catch (f) {
      Yt(t, t.return, f);
    }
  }
  function ep(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && zi(t.type)) ||
      t.tag === 4
    );
  }
  function Oc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ep(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && zi(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zc(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode),
        n
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
              ? s.ownerDocument.body
              : s
            ).insertBefore(t, n)
          : ((n =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s),
            n.appendChild(t),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = Yn));
    else if (
      o !== 4 &&
      (o === 27 && zi(t.type) && ((s = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (zc(t, n, s), t = t.sibling; t !== null; )
        zc(t, n, s), (t = t.sibling);
  }
  function Fo(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      (t = t.stateNode), n ? s.insertBefore(t, n) : s.appendChild(t);
    else if (
      o !== 4 &&
      (o === 27 && zi(t.type) && (s = t.stateNode), (t = t.child), t !== null)
    )
      for (Fo(t, n, s), t = t.sibling; t !== null; )
        Fo(t, n, s), (t = t.sibling);
  }
  function np(t) {
    var n = t.stateNode,
      s = t.memoizedProps;
    try {
      for (var o = t.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      Ee(n, o, s), (n[_e] = t), (n[Le] = s);
    } catch (g) {
      Yt(t, t.return, g);
    }
  }
  var $n = !1,
    ge = !1,
    Dc = !1,
    ip = typeof WeakSet == "function" ? WeakSet : Set,
    ye = null;
  function o1(t, n) {
    if (((t = t.containerInfo), ($c = or), (t = pd(t)), Cu(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var f = o.anchorOffset,
              g = o.focusNode;
            o = o.focusOffset;
            try {
              s.nodeType, g.nodeType;
            } catch {
              s = null;
              break t;
            }
            var y = 0,
              C = -1,
              z = -1,
              Y = 0,
              Z = 0,
              P = t,
              V = null;
            e: for (;;) {
              for (
                var X;
                P !== s || (f !== 0 && P.nodeType !== 3) || (C = y + f),
                  P !== g || (o !== 0 && P.nodeType !== 3) || (z = y + o),
                  P.nodeType === 3 && (y += P.nodeValue.length),
                  (X = P.firstChild) !== null;

              )
                (V = P), (P = X);
              for (;;) {
                if (P === t) break e;
                if (
                  (V === s && ++Y === f && (C = y),
                  V === g && ++Z === o && (z = y),
                  (X = P.nextSibling) !== null)
                )
                  break;
                (P = V), (V = P.parentNode);
              }
              P = X;
            }
            s = C === -1 || z === -1 ? null : { start: C, end: z };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Jc = { focusedElem: t, selectionRange: s }, or = !1, ye = n;
      ye !== null;

    )
      if (
        ((n = ye), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (ye = t);
      else
        for (; ye !== null; ) {
          switch (((n = ye), (g = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (s = 0; s < t.length; s++)
                  (f = t[s]), (f.ref.impl = f.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && g !== null) {
                (t = void 0),
                  (s = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (o = s.stateNode);
                try {
                  var rt = ua(s.type, f);
                  (t = o.getSnapshotBeforeUpdate(rt, g)),
                    (o.__reactInternalSnapshotBeforeUpdate = t);
                } catch (mt) {
                  Yt(s, s.return, mt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  nf(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nf(t);
                      break;
                    default:
                      t.textContent = "";
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
            default:
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (ye = t);
            break;
          }
          ye = n.return;
        }
  }
  function ap(t, n, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ti(t, s), o & 4 && il(5, s);
        break;
      case 1:
        if ((ti(t, s), o & 4))
          if (((t = s.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Yt(s, s.return, y);
            }
          else {
            var f = ua(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(f, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Yt(s, s.return, y);
            }
          }
        o & 64 && $g(s), o & 512 && al(s, s.return);
        break;
      case 3:
        if ((ti(t, s), o & 64 && ((t = s.updateQueue), t !== null))) {
          if (((n = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          try {
            Yd(t, n);
          } catch (y) {
            Yt(s, s.return, y);
          }
        }
        break;
      case 27:
        n === null && o & 4 && np(s);
      case 26:
      case 5:
        ti(t, s), n === null && o & 4 && tp(s), o & 512 && al(s, s.return);
        break;
      case 12:
        ti(t, s);
        break;
      case 31:
        ti(t, s), o & 4 && op(t, s);
        break;
      case 13:
        ti(t, s),
          o & 4 && rp(t, s),
          o & 64 &&
            ((t = s.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((s = m1.bind(null, s)), j1(t, s))));
        break;
      case 22:
        if (((o = s.memoizedState !== null || $n), !o)) {
          (n = (n !== null && n.memoizedState !== null) || ge), (f = $n);
          var g = ge;
          ($n = o),
            (ge = n) && !g ? ei(t, s, (s.subtreeFlags & 8772) !== 0) : ti(t, s),
            ($n = f),
            (ge = g);
        }
        break;
      case 30:
        break;
      default:
        ti(t, s);
    }
  }
  function sp(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), sp(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && ou(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var te = null,
    He = !1;
  function Jn(t, n, s) {
    for (s = s.child; s !== null; ) lp(t, n, s), (s = s.sibling);
  }
  function lp(t, n, s) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(xn, s);
      } catch {}
    switch (s.tag) {
      case 26:
        ge || kn(s, n),
          Jn(t, n, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        ge || kn(s, n);
        var o = te,
          f = He;
        zi(s.type) && ((te = s.stateNode), (He = !1)),
          Jn(t, n, s),
          dl(s.stateNode),
          (te = o),
          (He = f);
        break;
      case 5:
        ge || kn(s, n);
      case 6:
        if (
          ((o = te),
          (f = He),
          (te = null),
          Jn(t, n, s),
          (te = o),
          (He = f),
          te !== null)
        )
          if (He)
            try {
              (te.nodeType === 9
                ? te.body
                : te.nodeName === "HTML"
                ? te.ownerDocument.body
                : te
              ).removeChild(s.stateNode);
            } catch (g) {
              Yt(s, n, g);
            }
          else
            try {
              te.removeChild(s.stateNode);
            } catch (g) {
              Yt(s, n, g);
            }
        break;
      case 18:
        te !== null &&
          (He
            ? ((t = te),
              $p(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                s.stateNode
              ),
              fs(t))
            : $p(te, s.stateNode));
        break;
      case 4:
        (o = te),
          (f = He),
          (te = s.stateNode.containerInfo),
          (He = !0),
          Jn(t, n, s),
          (te = o),
          (He = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Si(2, s, n), ge || Si(4, s, n), Jn(t, n, s);
        break;
      case 1:
        ge ||
          (kn(s, n),
          (o = s.stateNode),
          typeof o.componentWillUnmount == "function" && Jg(s, n, o)),
          Jn(t, n, s);
        break;
      case 21:
        Jn(t, n, s);
        break;
      case 22:
        (ge = (o = ge) || s.memoizedState !== null), Jn(t, n, s), (ge = o);
        break;
      default:
        Jn(t, n, s);
    }
  }
  function op(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        fs(t);
      } catch (s) {
        Yt(n, n.return, s);
      }
    }
  }
  function rp(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        fs(t);
      } catch (s) {
        Yt(n, n.return, s);
      }
  }
  function r1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new ip()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new ip()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function qo(t, n) {
    var s = r1(t);
    n.forEach(function (o) {
      if (!s.has(o)) {
        s.add(o);
        var f = b1.bind(null, t, o);
        o.then(f, f);
      }
    });
  }
  function Ne(t, n) {
    var s = n.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var f = s[o],
          g = t,
          y = n,
          C = y;
        t: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (zi(C.type)) {
                (te = C.stateNode), (He = !1);
                break t;
              }
              break;
            case 5:
              (te = C.stateNode), (He = !1);
              break t;
            case 3:
            case 4:
              (te = C.stateNode.containerInfo), (He = !0);
              break t;
          }
          C = C.return;
        }
        if (te === null) throw Error(l(160));
        lp(g, y, f),
          (te = null),
          (He = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null);
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) up(n, t), (n = n.sibling);
  }
  var Cn = null;
  function up(t, n) {
    var s = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ne(n, t),
          Ue(t),
          o & 4 && (Si(3, t, t.return), il(3, t), Si(5, t, t.return));
        break;
      case 1:
        Ne(n, t),
          Ue(t),
          o & 512 && (ge || s === null || kn(s, s.return)),
          o & 64 &&
            $n &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? o : s.concat(o)))));
        break;
      case 26:
        var f = Cn;
        if (
          (Ne(n, t),
          Ue(t),
          o & 512 && (ge || s === null || kn(s, s.return)),
          o & 4)
        ) {
          var g = s !== null ? s.memoizedState : null;
          if (((o = t.memoizedState), s === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  (o = t.type),
                    (s = t.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (o) {
                    case "title":
                      (g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[Ds] ||
                          g[_e] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(o)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title")
                          )),
                        Ee(g, o, s),
                        (g[_e] = t),
                        be(g),
                        (o = g);
                      break t;
                    case "link":
                      var y = um("link", "href", f).get(o + (s.href || ""));
                      if (y) {
                        for (var C = 0; C < y.length; C++)
                          if (
                            ((g = y[C]),
                            g.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              g.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              g.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              g.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            y.splice(C, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(o)),
                        Ee(g, o, s),
                        f.head.appendChild(g);
                      break;
                    case "meta":
                      if (
                        (y = um("meta", "content", f).get(
                          o + (s.content || "")
                        ))
                      ) {
                        for (C = 0; C < y.length; C++)
                          if (
                            ((g = y[C]),
                            g.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              g.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              g.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              g.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            y.splice(C, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(o)),
                        Ee(g, o, s),
                        f.head.appendChild(g);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (g[_e] = t), be(g), (o = g);
                }
                t.stateNode = o;
              } else cm(f, t.type, t.stateNode);
            else t.stateNode = rm(f, o, t.memoizedProps);
          else
            g !== o
              ? (g === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : g.count--,
                o === null
                  ? cm(f, t.type, t.stateNode)
                  : rm(f, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                Ac(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        Ne(n, t),
          Ue(t),
          o & 512 && (ge || s === null || kn(s, s.return)),
          s !== null && o & 4 && Ac(t, t.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (
          (Ne(n, t),
          Ue(t),
          o & 512 && (ge || s === null || kn(s, s.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Ba(f, "");
          } catch (rt) {
            Yt(t, t.return, rt);
          }
        }
        o & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), Ac(t, f, s !== null ? s.memoizedProps : f)),
          o & 1024 && (Dc = !0);
        break;
      case 6:
        if ((Ne(n, t), Ue(t), o & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          (o = t.memoizedProps), (s = t.stateNode);
          try {
            s.nodeValue = o;
          } catch (rt) {
            Yt(t, t.return, rt);
          }
        }
        break;
      case 3:
        if (
          ((ir = null),
          (f = Cn),
          (Cn = er(n.containerInfo)),
          Ne(n, t),
          (Cn = f),
          Ue(t),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            fs(n.containerInfo);
          } catch (rt) {
            Yt(t, t.return, rt);
          }
        Dc && ((Dc = !1), cp(t));
        break;
      case 4:
        (o = Cn),
          (Cn = er(t.stateNode.containerInfo)),
          Ne(n, t),
          Ue(t),
          (Cn = o);
        break;
      case 12:
        Ne(n, t), Ue(t);
        break;
      case 31:
        Ne(n, t),
          Ue(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 13:
        Ne(n, t),
          Ue(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (Vo = Ft()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var z = s !== null && s.memoizedState !== null,
          Y = $n,
          Z = ge;
        if (
          (($n = Y || f),
          (ge = Z || z),
          Ne(n, t),
          (ge = Z),
          ($n = Y),
          Ue(t),
          o & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = f ? n._visibility & -2 : n._visibility | 1,
              f && (s === null || z || $n || ge || ca(t)),
              s = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (s === null) {
                z = s = n;
                try {
                  if (((g = z.stateNode), f))
                    (y = g.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    C = z.stateNode;
                    var P = z.memoizedProps.style,
                      V =
                        P != null && P.hasOwnProperty("display")
                          ? P.display
                          : null;
                    C.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (rt) {
                  Yt(z, z.return, rt);
                }
              }
            } else if (n.tag === 6) {
              if (s === null) {
                z = n;
                try {
                  z.stateNode.nodeValue = f ? "" : z.memoizedProps;
                } catch (rt) {
                  Yt(z, z.return, rt);
                }
              }
            } else if (n.tag === 18) {
              if (s === null) {
                z = n;
                try {
                  var X = z.stateNode;
                  f ? Jp(X, !0) : Jp(z.stateNode, !1);
                } catch (rt) {
                  Yt(z, z.return, rt);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              s === n && (s = null), (n = n.return);
            }
            s === n && (s = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((s = o.retryQueue),
            s !== null && ((o.retryQueue = null), qo(t, s))));
        break;
      case 19:
        Ne(n, t),
          Ue(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), qo(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ne(n, t), Ue(t);
    }
  }
  function Ue(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var s, o = t.return; o !== null; ) {
          if (ep(o)) {
            s = o;
            break;
          }
          o = o.return;
        }
        if (s == null) throw Error(l(160));
        switch (s.tag) {
          case 27:
            var f = s.stateNode,
              g = Oc(t);
            Fo(t, g, f);
            break;
          case 5:
            var y = s.stateNode;
            s.flags & 32 && (Ba(y, ""), (s.flags &= -33));
            var C = Oc(t);
            Fo(t, C, y);
            break;
          case 3:
          case 4:
            var z = s.stateNode.containerInfo,
              Y = Oc(t);
            zc(t, Y, z);
            break;
          default:
            throw Error(l(161));
        }
      } catch (Z) {
        Yt(t, t.return, Z);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function cp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        cp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ti(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) ap(t, n.alternate, n), (n = n.sibling);
  }
  function ca(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Si(4, n, n.return), ca(n);
          break;
        case 1:
          kn(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && Jg(n, n.return, s),
            ca(n);
          break;
        case 27:
          dl(n.stateNode);
        case 26:
        case 5:
          kn(n, n.return), ca(n);
          break;
        case 22:
          n.memoizedState === null && ca(n);
          break;
        case 30:
          ca(n);
          break;
        default:
          ca(n);
      }
      t = t.sibling;
    }
  }
  function ei(t, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        f = t,
        g = n,
        y = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ei(f, g, s), il(4, g);
          break;
        case 1:
          if (
            (ei(f, g, s),
            (o = g),
            (f = o.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (Y) {
              Yt(o, o.return, Y);
            }
          if (((o = g), (f = o.updateQueue), f !== null)) {
            var C = o.stateNode;
            try {
              var z = f.shared.hiddenCallbacks;
              if (z !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < z.length; f++)
                  qd(z[f], C);
            } catch (Y) {
              Yt(o, o.return, Y);
            }
          }
          s && y & 64 && $g(g), al(g, g.return);
          break;
        case 27:
          np(g);
        case 26:
        case 5:
          ei(f, g, s), s && o === null && y & 4 && tp(g), al(g, g.return);
          break;
        case 12:
          ei(f, g, s);
          break;
        case 31:
          ei(f, g, s), s && y & 4 && op(f, g);
          break;
        case 13:
          ei(f, g, s), s && y & 4 && rp(f, g);
          break;
        case 22:
          g.memoizedState === null && ei(f, g, s), al(g, g.return);
          break;
        case 30:
          break;
        default:
          ei(f, g, s);
      }
      n = n.sibling;
    }
  }
  function kc(t, n) {
    var s = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && Gs(s));
  }
  function Rc(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Gs(t));
  }
  function En(t, n, s, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) fp(t, n, s, o), (n = n.sibling);
  }
  function fp(t, n, s, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        En(t, n, s, o), f & 2048 && il(9, n);
        break;
      case 1:
        En(t, n, s, o);
        break;
      case 3:
        En(t, n, s, o),
          f & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Gs(t)));
        break;
      case 12:
        if (f & 2048) {
          En(t, n, s, o), (t = n.stateNode);
          try {
            var g = n.memoizedProps,
              y = g.id,
              C = g.onPostCommit;
            typeof C == "function" &&
              C(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (z) {
            Yt(n, n.return, z);
          }
        } else En(t, n, s, o);
        break;
      case 31:
        En(t, n, s, o);
        break;
      case 13:
        En(t, n, s, o);
        break;
      case 23:
        break;
      case 22:
        (g = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? g._visibility & 2
              ? En(t, n, s, o)
              : sl(t, n)
            : g._visibility & 2
            ? En(t, n, s, o)
            : ((g._visibility |= 2),
              ts(t, n, s, o, (n.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && kc(y, n);
        break;
      case 24:
        En(t, n, s, o), f & 2048 && Rc(n.alternate, n);
        break;
      default:
        En(t, n, s, o);
    }
  }
  function ts(t, n, s, o, f) {
    for (
      f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var g = t,
        y = n,
        C = s,
        z = o,
        Y = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          ts(g, y, C, z, f), il(8, y);
          break;
        case 23:
          break;
        case 22:
          var Z = y.stateNode;
          y.memoizedState !== null
            ? Z._visibility & 2
              ? ts(g, y, C, z, f)
              : sl(g, y)
            : ((Z._visibility |= 2), ts(g, y, C, z, f)),
            f && Y & 2048 && kc(y.alternate, y);
          break;
        case 24:
          ts(g, y, C, z, f), f && Y & 2048 && Rc(y.alternate, y);
          break;
        default:
          ts(g, y, C, z, f);
      }
      n = n.sibling;
    }
  }
  function sl(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var s = t,
          o = n,
          f = o.flags;
        switch (o.tag) {
          case 22:
            sl(s, o), f & 2048 && kc(o.alternate, o);
            break;
          case 24:
            sl(s, o), f & 2048 && Rc(o.alternate, o);
            break;
          default:
            sl(s, o);
        }
        n = n.sibling;
      }
  }
  var ll = 8192;
  function es(t, n, s) {
    if (t.subtreeFlags & ll)
      for (t = t.child; t !== null; ) hp(t, n, s), (t = t.sibling);
  }
  function hp(t, n, s) {
    switch (t.tag) {
      case 26:
        es(t, n, s),
          t.flags & ll &&
            t.memoizedState !== null &&
            K1(s, Cn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        es(t, n, s);
        break;
      case 3:
      case 4:
        var o = Cn;
        (Cn = er(t.stateNode.containerInfo)), es(t, n, s), (Cn = o);
        break;
      case 22:
        t.memoizedState === null &&
          ((o = t.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = ll), (ll = 16777216), es(t, n, s), (ll = o))
            : es(t, n, s));
        break;
      default:
        es(t, n, s);
    }
  }
  function dp(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function ol(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          (ye = o), pp(o, t);
        }
      dp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) gp(t), (t = t.sibling);
  }
  function gp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ol(t), t.flags & 2048 && Si(9, t, t.return);
        break;
      case 3:
        ol(t);
        break;
      case 12:
        ol(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Yo(t))
          : ol(t);
        break;
      default:
        ol(t);
    }
  }
  function Yo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          (ye = o), pp(o, t);
        }
      dp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          Si(8, n, n.return), Yo(n);
          break;
        case 22:
          (s = n.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Yo(n));
          break;
        default:
          Yo(n);
      }
      t = t.sibling;
    }
  }
  function pp(t, n) {
    for (; ye !== null; ) {
      var s = ye;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Gs(s.memoizedState.cache);
      }
      if (((o = s.child), o !== null)) (o.return = s), (ye = o);
      else
        t: for (s = t; ye !== null; ) {
          o = ye;
          var f = o.sibling,
            g = o.return;
          if ((sp(o), o === s)) {
            ye = null;
            break t;
          }
          if (f !== null) {
            (f.return = g), (ye = f);
            break t;
          }
          ye = g;
        }
    }
  }
  var u1 = {
      getCacheForType: function (t) {
        var n = Se(fe),
          s = n.data.get(t);
        return s === void 0 && ((s = t()), n.data.set(t, s)), s;
      },
      cacheSignal: function () {
        return Se(fe).controller.signal;
      },
    },
    c1 = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    Kt = null,
    St = null,
    Et = 0,
    qt = 0,
    We = null,
    Ci = !1,
    ns = !1,
    Bc = !1,
    ni = 0,
    ie = 0,
    Ei = 0,
    fa = 0,
    Lc = 0,
    $e = 0,
    is = 0,
    rl = null,
    Fe = null,
    jc = !1,
    Vo = 0,
    mp = 0,
    Go = 1 / 0,
    Xo = null,
    Mi = null,
    pe = 0,
    Ti = null,
    as = null,
    ii = 0,
    Hc = 0,
    Nc = null,
    bp = null,
    ul = 0,
    Uc = null;
  function Je() {
    return (jt & 2) !== 0 && Et !== 0 ? Et & -Et : H.T !== null ? Xc() : Rh();
  }
  function yp() {
    if ($e === 0)
      if ((Et & 536870912) === 0 || Tt) {
        var t = $l;
        ($l <<= 1), ($l & 3932160) === 0 && ($l = 262144), ($e = t);
      } else $e = 536870912;
    return (t = Pe.current), t !== null && (t.flags |= 32), $e;
  }
  function qe(t, n, s) {
    ((t === Kt && (qt === 2 || qt === 9)) || t.cancelPendingCommit !== null) &&
      (ss(t, 0), Ai(t, Et, $e, !1)),
      zs(t, s),
      ((jt & 2) === 0 || t !== Kt) &&
        (t === Kt &&
          ((jt & 2) === 0 && (fa |= s), ie === 4 && Ai(t, Et, $e, !1)),
        Rn(t));
  }
  function vp(t, n, s) {
    if ((jt & 6) !== 0) throw Error(l(327));
    var o = (!s && (n & 127) === 0 && (n & t.expiredLanes) === 0) || Os(t, n),
      f = o ? d1(t, n) : qc(t, n, !0),
      g = o;
    do {
      if (f === 0) {
        ns && !o && Ai(t, n, 0, !1);
        break;
      } else {
        if (((s = t.current.alternate), g && !f1(s))) {
          (f = qc(t, n, !1)), (g = !1);
          continue;
        }
        if (f === 2) {
          if (((g = n), t.errorRecoveryDisabledLanes & g)) var y = 0;
          else
            (y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            n = y;
            t: {
              var C = t;
              f = rl;
              var z = C.current.memoizedState.isDehydrated;
              if ((z && (ss(C, y).flags |= 256), (y = qc(C, y, !1)), y !== 2)) {
                if (Bc && !z) {
                  (C.errorRecoveryDisabledLanes |= g), (fa |= g), (f = 4);
                  break t;
                }
                (g = Fe),
                  (Fe = f),
                  g !== null && (Fe === null ? (Fe = g) : Fe.push.apply(Fe, g));
              }
              f = y;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          ss(t, 0), Ai(t, n, 0, !0);
          break;
        }
        t: {
          switch (((o = t), (g = f), g)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ai(o, n, $e, !Ci);
              break t;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((f = Vo + 300 - Ft()), 10 < f)) {
            if ((Ai(o, n, $e, !Ci), to(o, 0, !0) !== 0)) break t;
            (ii = n),
              (o.timeoutHandle = Ip(
                wp.bind(
                  null,
                  o,
                  s,
                  Fe,
                  Xo,
                  jc,
                  n,
                  $e,
                  fa,
                  is,
                  Ci,
                  g,
                  "Throttled",
                  -0,
                  0
                ),
                f
              ));
            break t;
          }
          wp(o, s, Fe, Xo, jc, n, $e, fa, is, Ci, g, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Rn(t);
  }
  function wp(t, n, s, o, f, g, y, C, z, Y, Z, P, V, X) {
    if (
      ((t.timeoutHandle = -1),
      (P = n.subtreeFlags),
      P & 8192 || (P & 16785408) === 16785408)
    ) {
      (P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Yn,
      }),
        hp(n, g, P);
      var rt =
        (g & 62914560) === g ? Vo - Ft() : (g & 4194048) === g ? mp - Ft() : 0;
      if (((rt = P1(P, rt)), rt !== null)) {
        (ii = g),
          (t.cancelPendingCommit = rt(
            Ap.bind(null, t, n, g, s, o, f, y, C, z, Z, P, null, V, X)
          )),
          Ai(t, g, y, !Y);
        return;
      }
    }
    Ap(t, n, g, s, o, f, y, C, z);
  }
  function f1(t) {
    for (var n = t; ; ) {
      var s = n.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        n.flags & 16384 &&
        ((s = n.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var o = 0; o < s.length; o++) {
          var f = s[o],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!Ze(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        (s.return = n), (n = s);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Ai(t, n, s, o) {
    (n &= ~Lc),
      (n &= ~fa),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes);
    for (var f = n; 0 < f; ) {
      var g = 31 - Qe(f),
        y = 1 << g;
      (o[g] = -1), (f &= ~y);
    }
    s !== 0 && zh(t, s, n);
  }
  function Qo() {
    return (jt & 6) === 0 ? (cl(0), !1) : !0;
  }
  function Fc() {
    if (St !== null) {
      if (qt === 0) var t = St.return;
      else (t = St), (Qn = na = null), nc(t), (Pa = null), (Qs = 0), (t = St);
      for (; t !== null; ) Wg(t.alternate, t), (t = t.return);
      St = null;
    }
  }
  function ss(t, n) {
    var s = t.timeoutHandle;
    s !== -1 && ((t.timeoutHandle = -1), D1(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      (ii = 0),
      Fc(),
      (Kt = t),
      (St = s = Gn(t.current, null)),
      (Et = n),
      (qt = 0),
      (We = null),
      (Ci = !1),
      (ns = Os(t, n)),
      (Bc = !1),
      (is = $e = Lc = fa = Ei = ie = 0),
      (Fe = rl = null),
      (jc = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var f = 31 - Qe(o),
          g = 1 << f;
        (n |= t[f]), (o &= ~g);
      }
    return (ni = n), ho(), s;
  }
  function _p(t, n) {
    (wt = null),
      (H.H = tl),
      n === Ka || n === _o
        ? ((n = Hd()), (qt = 3))
        : n === Gu
        ? ((n = Hd()), (qt = 4))
        : (qt =
            n === yc
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (We = n),
      St === null && ((ie = 1), Lo(t, fn(n, t.current)));
  }
  function xp() {
    var t = Pe.current;
    return t === null
      ? !0
      : (Et & 4194048) === Et
      ? pn === null
      : (Et & 62914560) === Et || (Et & 536870912) !== 0
      ? t === pn
      : !1;
  }
  function Sp() {
    var t = H.H;
    return (H.H = tl), t === null ? tl : t;
  }
  function Cp() {
    var t = H.A;
    return (H.A = u1), t;
  }
  function Zo() {
    (ie = 4),
      Ci || ((Et & 4194048) !== Et && Pe.current !== null) || (ns = !0),
      ((Ei & 134217727) === 0 && (fa & 134217727) === 0) ||
        Kt === null ||
        Ai(Kt, Et, $e, !1);
  }
  function qc(t, n, s) {
    var o = jt;
    jt |= 2;
    var f = Sp(),
      g = Cp();
    (Kt !== t || Et !== n) && ((Xo = null), ss(t, n)), (n = !1);
    var y = ie;
    t: do
      try {
        if (qt !== 0 && St !== null) {
          var C = St,
            z = We;
          switch (qt) {
            case 8:
              Fc(), (y = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (n = !0);
              var Y = qt;
              if (((qt = 0), (We = null), ls(t, C, z, Y), s && ns)) {
                y = 0;
                break t;
              }
              break;
            default:
              (Y = qt), (qt = 0), (We = null), ls(t, C, z, Y);
          }
        }
        h1(), (y = ie);
        break;
      } catch (Z) {
        _p(t, Z);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Qn = na = null),
      (jt = o),
      (H.H = f),
      (H.A = g),
      St === null && ((Kt = null), (Et = 0), ho()),
      y
    );
  }
  function h1() {
    for (; St !== null; ) Ep(St);
  }
  function d1(t, n) {
    var s = jt;
    jt |= 2;
    var o = Sp(),
      f = Cp();
    Kt !== t || Et !== n
      ? ((Xo = null), (Go = Ft() + 500), ss(t, n))
      : (ns = Os(t, n));
    t: do
      try {
        if (qt !== 0 && St !== null) {
          n = St;
          var g = We;
          e: switch (qt) {
            case 1:
              (qt = 0), (We = null), ls(t, n, g, 1);
              break;
            case 2:
            case 9:
              if (Ld(g)) {
                (qt = 0), (We = null), Mp(n);
                break;
              }
              (n = function () {
                (qt !== 2 && qt !== 9) || Kt !== t || (qt = 7), Rn(t);
              }),
                g.then(n, n);
              break t;
            case 3:
              qt = 7;
              break t;
            case 4:
              qt = 5;
              break t;
            case 7:
              Ld(g)
                ? ((qt = 0), (We = null), Mp(n))
                : ((qt = 0), (We = null), ls(t, n, g, 7));
              break;
            case 5:
              var y = null;
              switch (St.tag) {
                case 26:
                  y = St.memoizedState;
                case 5:
                case 27:
                  var C = St;
                  if (y ? fm(y) : C.stateNode.complete) {
                    (qt = 0), (We = null);
                    var z = C.sibling;
                    if (z !== null) St = z;
                    else {
                      var Y = C.return;
                      Y !== null ? ((St = Y), Ko(Y)) : (St = null);
                    }
                    break e;
                  }
              }
              (qt = 0), (We = null), ls(t, n, g, 5);
              break;
            case 6:
              (qt = 0), (We = null), ls(t, n, g, 6);
              break;
            case 8:
              Fc(), (ie = 6);
              break t;
            default:
              throw Error(l(462));
          }
        }
        g1();
        break;
      } catch (Z) {
        _p(t, Z);
      }
    while (!0);
    return (
      (Qn = na = null),
      (H.H = o),
      (H.A = f),
      (jt = s),
      St !== null ? 0 : ((Kt = null), (Et = 0), ho(), ie)
    );
  }
  function g1() {
    for (; St !== null && !sn(); ) Ep(St);
  }
  function Ep(t) {
    var n = Pg(t.alternate, t, ni);
    (t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (St = n);
  }
  function Mp(t) {
    var n = t,
      s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Vg(s, n, n.pendingProps, n.type, void 0, Et);
        break;
      case 11:
        n = Vg(s, n, n.pendingProps, n.type.render, n.ref, Et);
        break;
      case 5:
        nc(n);
      default:
        Wg(s, n), (n = St = Cd(n, ni)), (n = Pg(s, n, ni));
    }
    (t.memoizedProps = t.pendingProps), n === null ? Ko(t) : (St = n);
  }
  function ls(t, n, s, o) {
    (Qn = na = null), nc(n), (Pa = null), (Qs = 0);
    var f = n.return;
    try {
      if (n1(t, f, n, s, Et)) {
        (ie = 1), Lo(t, fn(s, t.current)), (St = null);
        return;
      }
    } catch (g) {
      if (f !== null) throw ((St = f), g);
      (ie = 1), Lo(t, fn(s, t.current)), (St = null);
      return;
    }
    n.flags & 32768
      ? (Tt || o === 1
          ? (t = !0)
          : ns || (Et & 536870912) !== 0
          ? (t = !1)
          : ((Ci = t = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = Pe.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        Tp(n, t))
      : Ko(n);
  }
  function Ko(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Tp(n, Ci);
        return;
      }
      t = n.return;
      var s = s1(n.alternate, n, ni);
      if (s !== null) {
        St = s;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        St = n;
        return;
      }
      St = n = t;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function Tp(t, n) {
    do {
      var s = l1(t.alternate, t);
      if (s !== null) {
        (s.flags &= 32767), (St = s);
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        St = t;
        return;
      }
      St = t = s;
    } while (t !== null);
    (ie = 6), (St = null);
  }
  function Ap(t, n, s, o, f, g, y, C, z) {
    t.cancelPendingCommit = null;
    do Po();
    while (pe !== 0);
    if ((jt & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === t.current) throw Error(l(177));
      if (
        ((g = n.lanes | n.childLanes),
        (g |= Ou),
        Z2(t, s, g, y, C, z),
        t === Kt && ((St = Kt = null), (Et = 0)),
        (as = n),
        (Ti = t),
        (ii = s),
        (Hc = g),
        (Nc = f),
        (bp = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            y1(Be, function () {
              return Rp(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = H.T), (H.T = null), (f = G.p), (G.p = 2), (y = jt), (jt |= 4);
        try {
          o1(t, n, s);
        } finally {
          (jt = y), (G.p = f), (H.T = o);
        }
      }
      (pe = 1), Op(), zp(), Dp();
    }
  }
  function Op() {
    if (pe === 1) {
      pe = 0;
      var t = Ti,
        n = as,
        s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        (s = H.T), (H.T = null);
        var o = G.p;
        G.p = 2;
        var f = jt;
        jt |= 4;
        try {
          up(n, t);
          var g = Jc,
            y = pd(t.containerInfo),
            C = g.focusedElem,
            z = g.selectionRange;
          if (
            y !== C &&
            C &&
            C.ownerDocument &&
            gd(C.ownerDocument.documentElement, C)
          ) {
            if (z !== null && Cu(C)) {
              var Y = z.start,
                Z = z.end;
              if ((Z === void 0 && (Z = Y), "selectionStart" in C))
                (C.selectionStart = Y),
                  (C.selectionEnd = Math.min(Z, C.value.length));
              else {
                var P = C.ownerDocument || document,
                  V = (P && P.defaultView) || window;
                if (V.getSelection) {
                  var X = V.getSelection(),
                    rt = C.textContent.length,
                    mt = Math.min(z.start, rt),
                    Zt = z.end === void 0 ? mt : Math.min(z.end, rt);
                  !X.extend && mt > Zt && ((y = Zt), (Zt = mt), (mt = y));
                  var L = dd(C, mt),
                    D = dd(C, Zt);
                  if (
                    L &&
                    D &&
                    (X.rangeCount !== 1 ||
                      X.anchorNode !== L.node ||
                      X.anchorOffset !== L.offset ||
                      X.focusNode !== D.node ||
                      X.focusOffset !== D.offset)
                  ) {
                    var q = P.createRange();
                    q.setStart(L.node, L.offset),
                      X.removeAllRanges(),
                      mt > Zt
                        ? (X.addRange(q), X.extend(D.node, D.offset))
                        : (q.setEnd(D.node, D.offset), X.addRange(q));
                  }
                }
              }
            }
            for (P = [], X = C; (X = X.parentNode); )
              X.nodeType === 1 &&
                P.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
            for (
              typeof C.focus == "function" && C.focus(), C = 0;
              C < P.length;
              C++
            ) {
              var K = P[C];
              (K.element.scrollLeft = K.left), (K.element.scrollTop = K.top);
            }
          }
          (or = !!$c), (Jc = $c = null);
        } finally {
          (jt = f), (G.p = o), (H.T = s);
        }
      }
      (t.current = n), (pe = 2);
    }
  }
  function zp() {
    if (pe === 2) {
      pe = 0;
      var t = Ti,
        n = as,
        s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        (s = H.T), (H.T = null);
        var o = G.p;
        G.p = 2;
        var f = jt;
        jt |= 4;
        try {
          ap(t, n.alternate, n);
        } finally {
          (jt = f), (G.p = o), (H.T = s);
        }
      }
      pe = 3;
    }
  }
  function Dp() {
    if (pe === 4 || pe === 3) {
      (pe = 0), Zi();
      var t = Ti,
        n = as,
        s = ii,
        o = bp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (pe = 5)
        : ((pe = 0), (as = Ti = null), kp(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Mi = null),
        su(s),
        (n = n.stateNode),
        Te && typeof Te.onCommitFiberRoot == "function")
      )
        try {
          Te.onCommitFiberRoot(xn, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (n = H.T), (f = G.p), (G.p = 2), (H.T = null);
        try {
          for (var g = t.onRecoverableError, y = 0; y < o.length; y++) {
            var C = o[y];
            g(C.value, { componentStack: C.stack });
          }
        } finally {
          (H.T = n), (G.p = f);
        }
      }
      (ii & 3) !== 0 && Po(),
        Rn(t),
        (f = t.pendingLanes),
        (s & 261930) !== 0 && (f & 42) !== 0
          ? t === Uc
            ? ul++
            : ((ul = 0), (Uc = t))
          : (ul = 0),
        cl(0);
    }
  }
  function kp(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Gs(n)));
  }
  function Po() {
    return Op(), zp(), Dp(), Rp();
  }
  function Rp() {
    if (pe !== 5) return !1;
    var t = Ti,
      n = Hc;
    Hc = 0;
    var s = su(ii),
      o = H.T,
      f = G.p;
    try {
      (G.p = 32 > s ? 32 : s), (H.T = null), (s = Nc), (Nc = null);
      var g = Ti,
        y = ii;
      if (((pe = 0), (as = Ti = null), (ii = 0), (jt & 6) !== 0))
        throw Error(l(331));
      var C = jt;
      if (
        ((jt |= 4),
        gp(g.current),
        fp(g, g.current, y, s),
        (jt = C),
        cl(0, !1),
        Te && typeof Te.onPostCommitFiberRoot == "function")
      )
        try {
          Te.onPostCommitFiberRoot(xn, g);
        } catch {}
      return !0;
    } finally {
      (G.p = f), (H.T = o), kp(t, n);
    }
  }
  function Bp(t, n, s) {
    (n = fn(s, n)),
      (n = bc(t.stateNode, n, 2)),
      (t = wi(t, n, 2)),
      t !== null && (zs(t, 2), Rn(t));
  }
  function Yt(t, n, s) {
    if (t.tag === 3) Bp(t, t, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Bp(n, t, s);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Mi === null || !Mi.has(o)))
          ) {
            (t = fn(s, t)),
              (s = Lg(2)),
              (o = wi(n, s, 2)),
              o !== null && (jg(s, o, n, t), zs(o, 2), Rn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Yc(t, n, s) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new c1();
      var f = new Set();
      o.set(n, f);
    } else (f = o.get(n)), f === void 0 && ((f = new Set()), o.set(n, f));
    f.has(s) ||
      ((Bc = !0), f.add(s), (t = p1.bind(null, t, n, s)), n.then(t, t));
  }
  function p1(t, n, s) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      Kt === t &&
        (Et & s) === s &&
        (ie === 4 || (ie === 3 && (Et & 62914560) === Et && 300 > Ft() - Vo)
          ? (jt & 2) === 0 && ss(t, 0)
          : (Lc |= s),
        is === Et && (is = 0)),
      Rn(t);
  }
  function Lp(t, n) {
    n === 0 && (n = Oh()), (t = Ji(t, n)), t !== null && (zs(t, n), Rn(t));
  }
  function m1(t) {
    var n = t.memoizedState,
      s = 0;
    n !== null && (s = n.retryLane), Lp(t, s);
  }
  function b1(t, n) {
    var s = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var o = t.stateNode,
          f = t.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(n), Lp(t, s);
  }
  function y1(t, n) {
    return ee(t, n);
  }
  var Io = null,
    os = null,
    Vc = !1,
    Wo = !1,
    Gc = !1,
    Oi = 0;
  function Rn(t) {
    t !== os &&
      t.next === null &&
      (os === null ? (Io = os = t) : (os = os.next = t)),
      (Wo = !0),
      Vc || ((Vc = !0), w1());
  }
  function cl(t, n) {
    if (!Gc && Wo) {
      Gc = !0;
      do
        for (var s = !1, o = Io; o !== null; ) {
          if (t !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var y = o.suspendedLanes,
                C = o.pingedLanes;
              (g = (1 << (31 - Qe(42 | t) + 1)) - 1),
                (g &= f & ~(y & ~C)),
                (g = g & 201326741 ? (g & 201326741) | 1 : g ? g | 2 : 0);
            }
            g !== 0 && ((s = !0), Up(o, g));
          } else
            (g = Et),
              (g = to(
                o,
                o === Kt ? g : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (g & 3) === 0 || Os(o, g) || ((s = !0), Up(o, g));
          o = o.next;
        }
      while (s);
      Gc = !1;
    }
  }
  function v1() {
    jp();
  }
  function jp() {
    Wo = Vc = !1;
    var t = 0;
    Oi !== 0 && z1() && (t = Oi);
    for (var n = Ft(), s = null, o = Io; o !== null; ) {
      var f = o.next,
        g = Hp(o, n);
      g === 0
        ? ((o.next = null),
          s === null ? (Io = f) : (s.next = f),
          f === null && (os = s))
        : ((s = o), (t !== 0 || (g & 3) !== 0) && (Wo = !0)),
        (o = f);
    }
    (pe !== 0 && pe !== 5) || cl(t), Oi !== 0 && (Oi = 0);
  }
  function Hp(t, n) {
    for (
      var s = t.suspendedLanes,
        o = t.pingedLanes,
        f = t.expirationTimes,
        g = t.pendingLanes & -62914561;
      0 < g;

    ) {
      var y = 31 - Qe(g),
        C = 1 << y,
        z = f[y];
      z === -1
        ? ((C & s) === 0 || (C & o) !== 0) && (f[y] = Q2(C, n))
        : z <= n && (t.expiredLanes |= C),
        (g &= ~C);
    }
    if (
      ((n = Kt),
      (s = Et),
      (s = to(
        t,
        t === n ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (o = t.callbackNode),
      s === 0 ||
        (t === n && (qt === 2 || qt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && On(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((s & 3) === 0 || Os(t, s)) {
      if (((n = s & -s), n === t.callbackPriority)) return n;
      switch ((o !== null && On(o), su(s))) {
        case 2:
        case 8:
          s = we;
          break;
        case 32:
          s = Be;
          break;
        case 268435456:
          s = As;
          break;
        default:
          s = Be;
      }
      return (
        (o = Np.bind(null, t)),
        (s = ee(s, o)),
        (t.callbackPriority = n),
        (t.callbackNode = s),
        n
      );
    }
    return (
      o !== null && o !== null && On(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Np(t, n) {
    if (pe !== 0 && pe !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var s = t.callbackNode;
    if (Po() && t.callbackNode !== s) return null;
    var o = Et;
    return (
      (o = to(
        t,
        t === Kt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (vp(t, o, n),
          Hp(t, Ft()),
          t.callbackNode != null && t.callbackNode === s
            ? Np.bind(null, t)
            : null)
    );
  }
  function Up(t, n) {
    if (Po()) return null;
    vp(t, n, !0);
  }
  function w1() {
    k1(function () {
      (jt & 6) !== 0 ? ee(se, v1) : jp();
    });
  }
  function Xc() {
    if (Oi === 0) {
      var t = Qa;
      t === 0 && ((t = Wl), (Wl <<= 1), (Wl & 261888) === 0 && (Wl = 256)),
        (Oi = t);
    }
    return Oi;
  }
  function Fp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ao("" + t);
  }
  function qp(t, n) {
    var s = n.ownerDocument.createElement("input");
    return (
      (s.name = n.name),
      (s.value = n.value),
      t.id && s.setAttribute("form", t.id),
      n.parentNode.insertBefore(s, n),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function _1(t, n, s, o, f) {
    if (n === "submit" && s && s.stateNode === f) {
      var g = Fp((f[Le] || null).action),
        y = o.submitter;
      y &&
        ((n = (n = y[Le] || null)
          ? Fp(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((g = n), (y = null)));
      var C = new ro("action", "action", null, o, f);
      t.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Oi !== 0) {
                  var z = y ? qp(f, y) : new FormData(f);
                  fc(
                    s,
                    { pending: !0, data: z, method: f.method, action: g },
                    null,
                    z
                  );
                }
              } else
                typeof g == "function" &&
                  (C.preventDefault(),
                  (z = y ? qp(f, y) : new FormData(f)),
                  fc(
                    s,
                    { pending: !0, data: z, method: f.method, action: g },
                    g,
                    z
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Qc = 0; Qc < Au.length; Qc++) {
    var Zc = Au[Qc],
      x1 = Zc.toLowerCase(),
      S1 = Zc[0].toUpperCase() + Zc.slice(1);
    Sn(x1, "on" + S1);
  }
  Sn(yd, "onAnimationEnd"),
    Sn(vd, "onAnimationIteration"),
    Sn(wd, "onAnimationStart"),
    Sn("dblclick", "onDoubleClick"),
    Sn("focusin", "onFocus"),
    Sn("focusout", "onBlur"),
    Sn(Uy, "onTransitionRun"),
    Sn(Fy, "onTransitionStart"),
    Sn(qy, "onTransitionCancel"),
    Sn(_d, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    Pi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Pi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Pi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Pi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Pi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var fl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    C1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fl)
    );
  function Yp(t, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var o = t[s],
        f = o.event;
      o = o.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var y = o.length - 1; 0 <= y; y--) {
            var C = o[y],
              z = C.instance,
              Y = C.currentTarget;
            if (((C = C.listener), z !== g && f.isPropagationStopped()))
              break t;
            (g = C), (f.currentTarget = Y);
            try {
              g(f);
            } catch (Z) {
              fo(Z);
            }
            (f.currentTarget = null), (g = z);
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((C = o[y]),
              (z = C.instance),
              (Y = C.currentTarget),
              (C = C.listener),
              z !== g && f.isPropagationStopped())
            )
              break t;
            (g = C), (f.currentTarget = Y);
            try {
              g(f);
            } catch (Z) {
              fo(Z);
            }
            (f.currentTarget = null), (g = z);
          }
      }
    }
  }
  function Ct(t, n) {
    var s = n[lu];
    s === void 0 && (s = n[lu] = new Set());
    var o = t + "__bubble";
    s.has(o) || (Vp(n, t, 2, !1), s.add(o));
  }
  function Kc(t, n, s) {
    var o = 0;
    n && (o |= 4), Vp(s, t, o, n);
  }
  var $o = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(t) {
    if (!t[$o]) {
      (t[$o] = !0),
        jh.forEach(function (s) {
          s !== "selectionchange" && (C1.has(s) || Kc(s, !1, t), Kc(s, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[$o] || ((n[$o] = !0), Kc("selectionchange", !1, n));
    }
  }
  function Vp(t, n, s, o) {
    switch (ym(n)) {
      case 2:
        var f = $1;
        break;
      case 8:
        f = J1;
        break;
      default:
        f = ff;
    }
    (s = f.bind(null, n, s, t)),
      (f = void 0),
      !pu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      o
        ? f !== void 0
          ? t.addEventListener(n, s, { capture: !0, passive: f })
          : t.addEventListener(n, s, !0)
        : f !== void 0
        ? t.addEventListener(n, s, { passive: f })
        : t.addEventListener(n, s, !1);
  }
  function Ic(t, n, s, o, f) {
    var g = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var C = o.stateNode.containerInfo;
          if (C === f) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var z = y.tag;
              if ((z === 3 || z === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; C !== null; ) {
            if (((y = Oa(C)), y === null)) return;
            if (((z = y.tag), z === 5 || z === 6 || z === 26 || z === 27)) {
              o = g = y;
              continue t;
            }
            C = C.parentNode;
          }
        }
        o = o.return;
      }
    Kh(function () {
      var Y = g,
        Z = du(s),
        P = [];
      t: {
        var V = xd.get(t);
        if (V !== void 0) {
          var X = ro,
            rt = t;
          switch (t) {
            case "keypress":
              if (lo(s) === 0) break t;
            case "keydown":
            case "keyup":
              X = by;
              break;
            case "focusin":
              (rt = "focus"), (X = vu);
              break;
            case "focusout":
              (rt = "blur"), (X = vu);
              break;
            case "beforeblur":
            case "afterblur":
              X = vu;
              break;
            case "click":
              if (s.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Wh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = sy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = wy;
              break;
            case yd:
            case vd:
            case wd:
              X = ry;
              break;
            case _d:
              X = xy;
              break;
            case "scroll":
            case "scrollend":
              X = iy;
              break;
            case "wheel":
              X = Cy;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = cy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Jh;
              break;
            case "toggle":
            case "beforetoggle":
              X = My;
          }
          var mt = (n & 4) !== 0,
            Zt = !mt && (t === "scroll" || t === "scrollend"),
            L = mt ? (V !== null ? V + "Capture" : null) : V;
          mt = [];
          for (var D = Y, q; D !== null; ) {
            var K = D;
            if (
              ((q = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                q === null ||
                L === null ||
                ((K = Rs(D, L)), K != null && mt.push(hl(D, K, q))),
              Zt)
            )
              break;
            D = D.return;
          }
          0 < mt.length &&
            ((V = new X(V, rt, null, s, Z)),
            P.push({ event: V, listeners: mt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((V = t === "mouseover" || t === "pointerover"),
            (X = t === "mouseout" || t === "pointerout"),
            V &&
              s !== hu &&
              (rt = s.relatedTarget || s.fromElement) &&
              (Oa(rt) || rt[Aa]))
          )
            break t;
          if (
            (X || V) &&
            ((V =
              Z.window === Z
                ? Z
                : (V = Z.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            X
              ? ((rt = s.relatedTarget || s.toElement),
                (X = Y),
                (rt = rt ? Oa(rt) : null),
                rt !== null &&
                  ((Zt = u(rt)),
                  (mt = rt.tag),
                  rt !== Zt || (mt !== 5 && mt !== 27 && mt !== 6)) &&
                  (rt = null))
              : ((X = null), (rt = Y)),
            X !== rt)
          ) {
            if (
              ((mt = Wh),
              (K = "onMouseLeave"),
              (L = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((mt = Jh),
                (K = "onPointerLeave"),
                (L = "onPointerEnter"),
                (D = "pointer")),
              (Zt = X == null ? V : ks(X)),
              (q = rt == null ? V : ks(rt)),
              (V = new mt(K, D + "leave", X, s, Z)),
              (V.target = Zt),
              (V.relatedTarget = q),
              (K = null),
              Oa(Z) === Y &&
                ((mt = new mt(L, D + "enter", rt, s, Z)),
                (mt.target = q),
                (mt.relatedTarget = Zt),
                (K = mt)),
              (Zt = K),
              X && rt)
            )
              e: {
                for (mt = E1, L = X, D = rt, q = 0, K = L; K; K = mt(K)) q++;
                K = 0;
                for (var gt = D; gt; gt = mt(gt)) K++;
                for (; 0 < q - K; ) (L = mt(L)), q--;
                for (; 0 < K - q; ) (D = mt(D)), K--;
                for (; q--; ) {
                  if (L === D || (D !== null && L === D.alternate)) {
                    mt = L;
                    break e;
                  }
                  (L = mt(L)), (D = mt(D));
                }
                mt = null;
              }
            else mt = null;
            X !== null && Gp(P, V, X, mt, !1),
              rt !== null && Zt !== null && Gp(P, Zt, rt, mt, !0);
          }
        }
        t: {
          if (
            ((V = Y ? ks(Y) : window),
            (X = V.nodeName && V.nodeName.toLowerCase()),
            X === "select" || (X === "input" && V.type === "file"))
          )
            var kt = od;
          else if (sd(V))
            if (rd) kt = jy;
            else {
              kt = By;
              var ct = Ry;
            }
          else
            (X = V.nodeName),
              !X ||
              X.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? Y && fu(Y.elementType) && (kt = od)
                : (kt = Ly);
          if (kt && (kt = kt(t, Y))) {
            ld(P, kt, s, Z);
            break t;
          }
          ct && ct(t, V, Y),
            t === "focusout" &&
              Y &&
              V.type === "number" &&
              Y.memoizedProps.value != null &&
              cu(V, "number", V.value);
        }
        switch (((ct = Y ? ks(Y) : window), t)) {
          case "focusin":
            (sd(ct) || ct.contentEditable === "true") &&
              ((Na = ct), (Eu = Y), (qs = null));
            break;
          case "focusout":
            qs = Eu = Na = null;
            break;
          case "mousedown":
            Mu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Mu = !1), md(P, s, Z);
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            md(P, s, Z);
        }
        var xt;
        if (_u)
          t: {
            switch (t) {
              case "compositionstart":
                var Mt = "onCompositionStart";
                break t;
              case "compositionend":
                Mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Mt = "onCompositionUpdate";
                break t;
            }
            Mt = void 0;
          }
        else
          Ha
            ? id(t, s) && (Mt = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (Mt = "onCompositionStart");
        Mt &&
          (td &&
            s.locale !== "ko" &&
            (Ha || Mt !== "onCompositionStart"
              ? Mt === "onCompositionEnd" && Ha && (xt = Ph())
              : ((di = Z),
                (mu = "value" in di ? di.value : di.textContent),
                (Ha = !0))),
          (ct = Jo(Y, Mt)),
          0 < ct.length &&
            ((Mt = new $h(Mt, t, null, s, Z)),
            P.push({ event: Mt, listeners: ct }),
            xt
              ? (Mt.data = xt)
              : ((xt = ad(s)), xt !== null && (Mt.data = xt)))),
          (xt = Ay ? Oy(t, s) : zy(t, s)) &&
            ((Mt = Jo(Y, "onBeforeInput")),
            0 < Mt.length &&
              ((ct = new $h("onBeforeInput", "beforeinput", null, s, Z)),
              P.push({ event: ct, listeners: Mt }),
              (ct.data = xt))),
          _1(P, t, Y, s, Z);
      }
      Yp(P, n);
    });
  }
  function hl(t, n, s) {
    return { instance: t, listener: n, currentTarget: s };
  }
  function Jo(t, n) {
    for (var s = n + "Capture", o = []; t !== null; ) {
      var f = t,
        g = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = Rs(t, s)),
          f != null && o.unshift(hl(t, f, g)),
          (f = Rs(t, n)),
          f != null && o.push(hl(t, f, g))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function E1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gp(t, n, s, o, f) {
    for (var g = n._reactName, y = []; s !== null && s !== o; ) {
      var C = s,
        z = C.alternate,
        Y = C.stateNode;
      if (((C = C.tag), z !== null && z === o)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        Y === null ||
        ((z = Y),
        f
          ? ((Y = Rs(s, g)), Y != null && y.unshift(hl(s, Y, z)))
          : f || ((Y = Rs(s, g)), Y != null && y.push(hl(s, Y, z)))),
        (s = s.return);
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var M1 = /\r\n?/g,
    T1 = /\u0000|\uFFFD/g;
  function Xp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        M1,
        `
`
      )
      .replace(T1, "");
  }
  function Qp(t, n) {
    return (n = Xp(n)), Xp(t) === n;
  }
  function Qt(t, n, s, o, f, g) {
    switch (s) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || Ba(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            Ba(t, "" + o);
        break;
      case "className":
        no(t, "class", o);
        break;
      case "tabIndex":
        no(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        no(t, s, o);
        break;
      case "style":
        Qh(t, o, g);
        break;
      case "data":
        if (n !== "object") {
          no(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        (o = ao("" + o)), t.setAttribute(s, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof g == "function" &&
            (s === "formAction"
              ? (n !== "input" && Qt(t, n, "name", f.name, f, null),
                Qt(t, n, "formEncType", f.formEncType, f, null),
                Qt(t, n, "formMethod", f.formMethod, f, null),
                Qt(t, n, "formTarget", f.formTarget, f, null))
              : (Qt(t, n, "encType", f.encType, f, null),
                Qt(t, n, "method", f.method, f, null),
                Qt(t, n, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(s);
          break;
        }
        (o = ao("" + o)), t.setAttribute(s, o);
        break;
      case "onClick":
        o != null && (t.onclick = Yn);
        break;
      case "onScroll":
        o != null && Ct("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (s = ao("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "" + o)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(s, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? t.setAttribute(s, o)
          : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(s, o)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(s)
          : t.setAttribute(s, o);
        break;
      case "popover":
        Ct("beforetoggle", t), Ct("toggle", t), eo(t, "popover", o);
        break;
      case "xlinkActuate":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        qn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        qn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        eo(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = ey.get(s) || s), eo(t, s, o));
    }
  }
  function Wc(t, n, s, o, f, g) {
    switch (s) {
      case "style":
        Qh(t, o, g);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Ba(t, o)
          : (typeof o == "number" || typeof o == "bigint") && Ba(t, "" + o);
        break;
      case "onScroll":
        o != null && Ct("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ct("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Yn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hh.hasOwnProperty(s))
          t: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (n = s.slice(2, f ? s.length - 7 : void 0)),
              (g = t[Le] || null),
              (g = g != null ? g[s] : null),
              typeof g == "function" && t.removeEventListener(n, g, f),
              typeof o == "function")
            ) {
              typeof g != "function" &&
                g !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(n, o, f);
              break t;
            }
            s in t
              ? (t[s] = o)
              : o === !0
              ? t.setAttribute(s, "")
              : eo(t, s, o);
          }
    }
  }
  function Ee(t, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ct("error", t), Ct("load", t);
        var o = !1,
          f = !1,
          g;
        for (g in s)
          if (s.hasOwnProperty(g)) {
            var y = s[g];
            if (y != null)
              switch (g) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  Qt(t, n, g, y, s, null);
              }
          }
        f && Qt(t, n, "srcSet", s.srcSet, s, null),
          o && Qt(t, n, "src", s.src, s, null);
        return;
      case "input":
        Ct("invalid", t);
        var C = (g = y = f = null),
          z = null,
          Y = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var Z = s[o];
            if (Z != null)
              switch (o) {
                case "name":
                  f = Z;
                  break;
                case "type":
                  y = Z;
                  break;
                case "checked":
                  z = Z;
                  break;
                case "defaultChecked":
                  Y = Z;
                  break;
                case "value":
                  g = Z;
                  break;
                case "defaultValue":
                  C = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(l(137, n));
                  break;
                default:
                  Qt(t, n, o, Z, s, null);
              }
          }
        Yh(t, g, C, z, Y, y, f, !1);
        return;
      case "select":
        Ct("invalid", t), (o = y = g = null);
        for (f in s)
          if (s.hasOwnProperty(f) && ((C = s[f]), C != null))
            switch (f) {
              case "value":
                g = C;
                break;
              case "defaultValue":
                y = C;
                break;
              case "multiple":
                o = C;
              default:
                Qt(t, n, f, C, s, null);
            }
        (n = g),
          (s = y),
          (t.multiple = !!o),
          n != null ? Ra(t, !!o, n, !1) : s != null && Ra(t, !!o, s, !0);
        return;
      case "textarea":
        Ct("invalid", t), (g = f = o = null);
        for (y in s)
          if (s.hasOwnProperty(y) && ((C = s[y]), C != null))
            switch (y) {
              case "value":
                o = C;
                break;
              case "defaultValue":
                f = C;
                break;
              case "children":
                g = C;
                break;
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(l(91));
                break;
              default:
                Qt(t, n, y, C, s, null);
            }
        Gh(t, o, f, g);
        return;
      case "option":
        for (z in s)
          if (s.hasOwnProperty(z) && ((o = s[z]), o != null))
            switch (z) {
              case "selected":
                t.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Qt(t, n, z, o, s, null);
            }
        return;
      case "dialog":
        Ct("beforetoggle", t), Ct("toggle", t), Ct("cancel", t), Ct("close", t);
        break;
      case "iframe":
      case "object":
        Ct("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < fl.length; o++) Ct(fl[o], t);
        break;
      case "image":
        Ct("error", t), Ct("load", t);
        break;
      case "details":
        Ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ct("error", t), Ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Y in s)
          if (s.hasOwnProperty(Y) && ((o = s[Y]), o != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                Qt(t, n, Y, o, s, null);
            }
        return;
      default:
        if (fu(n)) {
          for (Z in s)
            s.hasOwnProperty(Z) &&
              ((o = s[Z]), o !== void 0 && Wc(t, n, Z, o, s, void 0));
          return;
        }
    }
    for (C in s)
      s.hasOwnProperty(C) && ((o = s[C]), o != null && Qt(t, n, C, o, s, null));
  }
  function A1(t, n, s, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          y = null,
          C = null,
          z = null,
          Y = null,
          Z = null;
        for (X in s) {
          var P = s[X];
          if (s.hasOwnProperty(X) && P != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = P;
              default:
                o.hasOwnProperty(X) || Qt(t, n, X, null, o, P);
            }
        }
        for (var V in o) {
          var X = o[V];
          if (((P = s[V]), o.hasOwnProperty(V) && (X != null || P != null)))
            switch (V) {
              case "type":
                g = X;
                break;
              case "name":
                f = X;
                break;
              case "checked":
                Y = X;
                break;
              case "defaultChecked":
                Z = X;
                break;
              case "value":
                y = X;
                break;
              case "defaultValue":
                C = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(l(137, n));
                break;
              default:
                X !== P && Qt(t, n, V, X, o, P);
            }
        }
        uu(t, y, C, z, Y, Z, g, f);
        return;
      case "select":
        X = y = C = V = null;
        for (g in s)
          if (((z = s[g]), s.hasOwnProperty(g) && z != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                X = z;
              default:
                o.hasOwnProperty(g) || Qt(t, n, g, null, o, z);
            }
        for (f in o)
          if (
            ((g = o[f]),
            (z = s[f]),
            o.hasOwnProperty(f) && (g != null || z != null))
          )
            switch (f) {
              case "value":
                V = g;
                break;
              case "defaultValue":
                C = g;
                break;
              case "multiple":
                y = g;
              default:
                g !== z && Qt(t, n, f, g, o, z);
            }
        (n = C),
          (s = y),
          (o = X),
          V != null
            ? Ra(t, !!s, V, !1)
            : !!o != !!s &&
              (n != null ? Ra(t, !!s, n, !0) : Ra(t, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        X = V = null;
        for (C in s)
          if (
            ((f = s[C]),
            s.hasOwnProperty(C) && f != null && !o.hasOwnProperty(C))
          )
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qt(t, n, C, null, o, f);
            }
        for (y in o)
          if (
            ((f = o[y]),
            (g = s[y]),
            o.hasOwnProperty(y) && (f != null || g != null))
          )
            switch (y) {
              case "value":
                V = f;
                break;
              case "defaultValue":
                X = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== g && Qt(t, n, y, f, o, g);
            }
        Vh(t, V, X);
        return;
      case "option":
        for (var rt in s)
          if (
            ((V = s[rt]),
            s.hasOwnProperty(rt) && V != null && !o.hasOwnProperty(rt))
          )
            switch (rt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Qt(t, n, rt, null, o, V);
            }
        for (z in o)
          if (
            ((V = o[z]),
            (X = s[z]),
            o.hasOwnProperty(z) && V !== X && (V != null || X != null))
          )
            switch (z) {
              case "selected":
                t.selected =
                  V && typeof V != "function" && typeof V != "symbol";
                break;
              default:
                Qt(t, n, z, V, o, X);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var mt in s)
          (V = s[mt]),
            s.hasOwnProperty(mt) &&
              V != null &&
              !o.hasOwnProperty(mt) &&
              Qt(t, n, mt, null, o, V);
        for (Y in o)
          if (
            ((V = o[Y]),
            (X = s[Y]),
            o.hasOwnProperty(Y) && V !== X && (V != null || X != null))
          )
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(l(137, n));
                break;
              default:
                Qt(t, n, Y, V, o, X);
            }
        return;
      default:
        if (fu(n)) {
          for (var Zt in s)
            (V = s[Zt]),
              s.hasOwnProperty(Zt) &&
                V !== void 0 &&
                !o.hasOwnProperty(Zt) &&
                Wc(t, n, Zt, void 0, o, V);
          for (Z in o)
            (V = o[Z]),
              (X = s[Z]),
              !o.hasOwnProperty(Z) ||
                V === X ||
                (V === void 0 && X === void 0) ||
                Wc(t, n, Z, V, o, X);
          return;
        }
    }
    for (var L in s)
      (V = s[L]),
        s.hasOwnProperty(L) &&
          V != null &&
          !o.hasOwnProperty(L) &&
          Qt(t, n, L, null, o, V);
    for (P in o)
      (V = o[P]),
        (X = s[P]),
        !o.hasOwnProperty(P) ||
          V === X ||
          (V == null && X == null) ||
          Qt(t, n, P, V, o, X);
  }
  function Zp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function O1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, n = 0, s = performance.getEntriesByType("resource"), o = 0;
        o < s.length;
        o++
      ) {
        var f = s[o],
          g = f.transferSize,
          y = f.initiatorType,
          C = f.duration;
        if (g && C && Zp(y)) {
          for (y = 0, C = f.responseEnd, o += 1; o < s.length; o++) {
            var z = s[o],
              Y = z.startTime;
            if (Y > C) break;
            var Z = z.transferSize,
              P = z.initiatorType;
            Z &&
              Zp(P) &&
              ((z = z.responseEnd), (y += Z * (z < C ? 1 : (C - Y) / (z - Y))));
          }
          if ((--o, (n += (8 * (g + y)) / (f.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var $c = null,
    Jc = null;
  function tr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Kp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pp(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function tf(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ef = null;
  function z1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ef
        ? !1
        : ((ef = t), !0)
      : ((ef = null), !1);
  }
  var Ip = typeof setTimeout == "function" ? setTimeout : void 0,
    D1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wp = typeof Promise == "function" ? Promise : void 0,
    k1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wp < "u"
        ? function (t) {
            return Wp.resolve(null).then(t).catch(R1);
          }
        : Ip;
  function R1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function zi(t) {
    return t === "head";
  }
  function $p(t, n) {
    var s = n,
      o = 0;
    do {
      var f = s.nextSibling;
      if ((t.removeChild(s), f && f.nodeType === 8))
        if (((s = f.data), s === "/$" || s === "/&")) {
          if (o === 0) {
            t.removeChild(f), fs(n);
            return;
          }
          o--;
        } else if (
          s === "$" ||
          s === "$?" ||
          s === "$~" ||
          s === "$!" ||
          s === "&"
        )
          o++;
        else if (s === "html") dl(t.ownerDocument.documentElement);
        else if (s === "head") {
          (s = t.ownerDocument.head), dl(s);
          for (var g = s.firstChild; g; ) {
            var y = g.nextSibling,
              C = g.nodeName;
            g[Ds] ||
              C === "SCRIPT" ||
              C === "STYLE" ||
              (C === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
              s.removeChild(g),
              (g = y);
          }
        } else s === "body" && dl(t.ownerDocument.body);
      s = f;
    } while (s);
    fs(n);
  }
  function Jp(t, n) {
    var s = t;
    t = 0;
    do {
      var o = s.nextSibling;
      if (
        (s.nodeType === 1
          ? n
            ? ((s._stashedDisplay = s.style.display),
              (s.style.display = "none"))
            : ((s.style.display = s._stashedDisplay || ""),
              s.getAttribute("style") === "" && s.removeAttribute("style"))
          : s.nodeType === 3 &&
            (n
              ? ((s._stashedText = s.nodeValue), (s.nodeValue = ""))
              : (s.nodeValue = s._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((s = o.data), s === "/$")) {
          if (t === 0) break;
          t--;
        } else (s !== "$" && s !== "$?" && s !== "$~" && s !== "$!") || t++;
      s = o;
    } while (s);
  }
  function nf(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var s = n;
      switch (((n = n.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nf(s), ou(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function B1(t, n, s, o) {
    for (; t.nodeType === 1; ) {
      var f = s;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Ds])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((g = t.getAttribute("rel")),
                g === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((g = t.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === g) return t;
      } else return t;
      if (((t = mn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function L1(t, n, s) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function tm(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = mn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function af(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function sf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function j1(t, n) {
    var s = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || s.readyState !== "loading") n();
    else {
      var o = function () {
        n(), s.removeEventListener("DOMContentLoaded", o);
      };
      s.addEventListener("DOMContentLoaded", o), (t._reactRetry = o);
    }
  }
  function mn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var lf = null;
  function em(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "/$" || s === "/&") {
          if (n === 0) return mn(t.nextSibling);
          n--;
        } else
          (s !== "$" && s !== "$!" && s !== "$?" && s !== "$~" && s !== "&") ||
            n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function nm(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&") {
          if (n === 0) return t;
          n--;
        } else (s !== "/$" && s !== "/&") || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function im(t, n, s) {
    switch (((n = tr(s)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  function dl(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    ou(t);
  }
  var bn = new Map(),
    am = new Set();
  function er(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ai = G.d;
  G.d = { f: H1, r: N1, D: U1, C: F1, L: q1, m: Y1, X: G1, S: V1, M: X1 };
  function H1() {
    var t = ai.f(),
      n = Qo();
    return t || n;
  }
  function N1(t) {
    var n = za(t);
    n !== null && n.tag === 5 && n.type === "form" ? _g(n) : ai.r(t);
  }
  var rs = typeof document > "u" ? null : document;
  function sm(t, n, s) {
    var o = rs;
    if (o && typeof n == "string" && n) {
      var f = un(n);
      (f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        am.has(f) ||
          (am.add(f),
          (t = { rel: t, crossOrigin: s, href: n }),
          o.querySelector(f) === null &&
            ((n = o.createElement("link")),
            Ee(n, "link", t),
            be(n),
            o.head.appendChild(n)));
    }
  }
  function U1(t) {
    ai.D(t), sm("dns-prefetch", t, null);
  }
  function F1(t, n) {
    ai.C(t, n), sm("preconnect", t, n);
  }
  function q1(t, n, s) {
    ai.L(t, n, s);
    var o = rs;
    if (o && t && n) {
      var f = 'link[rel="preload"][as="' + un(n) + '"]';
      n === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + un(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + un(s.imageSizes) + '"]'))
        : (f += '[href="' + un(t) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = us(t);
          break;
        case "script":
          g = cs(t);
      }
      bn.has(g) ||
        ((t = b(
          {
            rel: "preload",
            href: n === "image" && s && s.imageSrcSet ? void 0 : t,
            as: n,
          },
          s
        )),
        bn.set(g, t),
        o.querySelector(f) !== null ||
          (n === "style" && o.querySelector(gl(g))) ||
          (n === "script" && o.querySelector(pl(g))) ||
          ((n = o.createElement("link")),
          Ee(n, "link", t),
          be(n),
          o.head.appendChild(n)));
    }
  }
  function Y1(t, n) {
    ai.m(t, n);
    var s = rs;
    if (s && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + un(o) + '"][href="' + un(t) + '"]',
        g = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = cs(t);
      }
      if (
        !bn.has(g) &&
        ((t = b({ rel: "modulepreload", href: t }, n)),
        bn.set(g, t),
        s.querySelector(f) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(pl(g))) return;
        }
        (o = s.createElement("link")),
          Ee(o, "link", t),
          be(o),
          s.head.appendChild(o);
      }
    }
  }
  function V1(t, n, s) {
    ai.S(t, n, s);
    var o = rs;
    if (o && t) {
      var f = Da(o).hoistableStyles,
        g = us(t);
      n = n || "default";
      var y = f.get(g);
      if (!y) {
        var C = { loading: 0, preload: null };
        if ((y = o.querySelector(gl(g)))) C.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": n }, s)),
            (s = bn.get(g)) && of(t, s);
          var z = (y = o.createElement("link"));
          be(z),
            Ee(z, "link", t),
            (z._p = new Promise(function (Y, Z) {
              (z.onload = Y), (z.onerror = Z);
            })),
            z.addEventListener("load", function () {
              C.loading |= 1;
            }),
            z.addEventListener("error", function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            nr(y, n, o);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: C }),
          f.set(g, y);
      }
    }
  }
  function G1(t, n) {
    ai.X(t, n);
    var s = rs;
    if (s && t) {
      var o = Da(s).hoistableScripts,
        f = cs(t),
        g = o.get(f);
      g ||
        ((g = s.querySelector(pl(f))),
        g ||
          ((t = b({ src: t, async: !0 }, n)),
          (n = bn.get(f)) && rf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ee(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        o.set(f, g));
    }
  }
  function X1(t, n) {
    ai.M(t, n);
    var s = rs;
    if (s && t) {
      var o = Da(s).hoistableScripts,
        f = cs(t),
        g = o.get(f);
      g ||
        ((g = s.querySelector(pl(f))),
        g ||
          ((t = b({ src: t, async: !0, type: "module" }, n)),
          (n = bn.get(f)) && rf(t, n),
          (g = s.createElement("script")),
          be(g),
          Ee(g, "link", t),
          s.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        o.set(f, g));
    }
  }
  function lm(t, n, s, o) {
    var f = (f = ot.current) ? er(f) : null;
    if (!f) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((n = us(s.href)),
            (s = Da(f).hoistableStyles),
            (o = s.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              s.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = us(s.href);
          var g = Da(f).hoistableStyles,
            y = g.get(t);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(t, y),
              (g = f.querySelector(gl(t))) &&
                !g._p &&
                ((y.instance = g), (y.state.loading = 5)),
              bn.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                bn.set(t, s),
                g || Q1(f, t, s, y.state))),
            n && o === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (n && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = s.async),
          (s = s.src),
          typeof s == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = cs(s)),
              (s = Da(f).hoistableScripts),
              (o = s.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function us(t) {
    return 'href="' + un(t) + '"';
  }
  function gl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function om(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Q1(t, n, s, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Ee(n, "link", s),
        be(n),
        t.head.appendChild(n));
  }
  function cs(t) {
    return '[src="' + un(t) + '"]';
  }
  function pl(t) {
    return "script[async]" + t;
  }
  function rm(t, n, s) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + un(s.href) + '"]');
          if (o) return (n.instance = o), be(o), o;
          var f = b({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            be(o),
            Ee(o, "style", f),
            nr(o, s.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          f = us(s.href);
          var g = t.querySelector(gl(f));
          if (g) return (n.state.loading |= 4), (n.instance = g), be(g), g;
          (o = om(s)),
            (f = bn.get(f)) && of(o, f),
            (g = (t.ownerDocument || t).createElement("link")),
            be(g);
          var y = g;
          return (
            (y._p = new Promise(function (C, z) {
              (y.onload = C), (y.onerror = z);
            })),
            Ee(g, "link", o),
            (n.state.loading |= 4),
            nr(g, s.precedence, t),
            (n.instance = g)
          );
        case "script":
          return (
            (g = cs(s.src)),
            (f = t.querySelector(pl(g)))
              ? ((n.instance = f), be(f), f)
              : ((o = s),
                (f = bn.get(g)) && ((o = b({}, s)), rf(o, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                be(f),
                Ee(f, "link", o),
                t.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), nr(o, s.precedence, t));
    return n.instance;
  }
  function nr(t, n, s) {
    for (
      var o = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = o.length ? o[o.length - 1] : null,
        g = f,
        y = 0;
      y < o.length;
      y++
    ) {
      var C = o[y];
      if (C.dataset.precedence === n) g = C;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(t, g.nextSibling)
      : ((n = s.nodeType === 9 ? s.head : s), n.insertBefore(t, n.firstChild));
  }
  function of(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function rf(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var ir = null;
  function um(t, n, s) {
    if (ir === null) {
      var o = new Map(),
        f = (ir = new Map());
      f.set(s, o);
    } else (f = ir), (o = f.get(s)), o || ((o = new Map()), f.set(s, o));
    if (o.has(t)) return o;
    for (
      o.set(t, null), s = s.getElementsByTagName(t), f = 0;
      f < s.length;
      f++
    ) {
      var g = s[f];
      if (
        !(
          g[Ds] ||
          g[_e] ||
          (t === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = g.getAttribute(n) || "";
        y = t + y;
        var C = o.get(y);
        C ? C.push(g) : o.set(y, [g]);
      }
    }
    return o;
  }
  function cm(t, n, s) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function Z1(t, n, s) {
    if (s === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function K1(t, n, s, o) {
    if (
      s.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (s.state.loading & 4) === 0
    ) {
      if (s.instance === null) {
        var f = us(o.href),
          g = n.querySelector(gl(f));
        if (g) {
          (n = g._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (t.count++, (t = ar.bind(t)), n.then(t, t)),
            (s.state.loading |= 4),
            (s.instance = g),
            be(g);
          return;
        }
        (g = n.ownerDocument || n),
          (o = om(o)),
          (f = bn.get(f)) && of(o, f),
          (g = g.createElement("link")),
          be(g);
        var y = g;
        (y._p = new Promise(function (C, z) {
          (y.onload = C), (y.onerror = z);
        })),
          Ee(g, "link", o),
          (s.instance = g);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(s, n),
        (n = s.state.preload) &&
          (s.state.loading & 3) === 0 &&
          (t.count++,
          (s = ar.bind(t)),
          n.addEventListener("load", s),
          n.addEventListener("error", s));
    }
  }
  var uf = 0;
  function P1(t, n) {
    return (
      t.stylesheets && t.count === 0 && lr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (s) {
            var o = setTimeout(function () {
              if ((t.stylesheets && lr(t, t.stylesheets), t.unsuspend)) {
                var g = t.unsuspend;
                (t.unsuspend = null), g();
              }
            }, 6e4 + n);
            0 < t.imgBytes && uf === 0 && (uf = 62500 * O1());
            var f = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && lr(t, t.stylesheets), t.unsuspend))
              ) {
                var g = t.unsuspend;
                (t.unsuspend = null), g();
              }
            }, (t.imgBytes > uf ? 50 : 800) + n);
            return (
              (t.unsuspend = s),
              function () {
                (t.unsuspend = null), clearTimeout(o), clearTimeout(f);
              }
            );
          }
        : null
    );
  }
  function ar() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) lr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var sr = null;
  function lr(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (sr = new Map()),
        n.forEach(I1, t),
        (sr = null),
        ar.call(t));
  }
  function I1(t, n) {
    if (!(n.state.loading & 4)) {
      var s = sr.get(t);
      if (s) var o = s.get(null);
      else {
        (s = new Map()), sr.set(t, s);
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var y = f[g];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (s.set(y.dataset.precedence, y), (o = y));
        }
        o && s.set(null, o);
      }
      (f = n.instance),
        (y = f.getAttribute("data-precedence")),
        (g = s.get(y) || o),
        g === o && s.set(null, f),
        s.set(y, f),
        this.count++,
        (o = ar.bind(this)),
        f.addEventListener("load", o),
        f.addEventListener("error", o),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ml = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: nt,
    _currentValue2: nt,
    _threadCount: 0,
  };
  function W1(t, n, s, o, f, g, y, C, z) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = iu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = iu(0)),
      (this.hiddenUpdates = iu(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = z),
      (this.incompleteTransitions = new Map());
  }
  function hm(t, n, s, o, f, g, y, C, z, Y, Z, P) {
    return (
      (t = new W1(t, n, s, y, z, Y, Z, P, C)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = Ke(3, null, null, n)),
      (t.current = g),
      (g.stateNode = t),
      (n = qu()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: o, isDehydrated: s, cache: n }),
      Xu(g),
      t
    );
  }
  function dm(t) {
    return t ? ((t = qa), t) : qa;
  }
  function gm(t, n, s, o, f, g) {
    (f = dm(f)),
      o.context === null ? (o.context = f) : (o.pendingContext = f),
      (o = vi(n)),
      (o.payload = { element: s }),
      (g = g === void 0 ? null : g),
      g !== null && (o.callback = g),
      (s = wi(t, o, n)),
      s !== null && (qe(s, t, n), Ks(s, t, n));
  }
  function pm(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function cf(t, n) {
    pm(t, n), (t = t.alternate) && pm(t, n);
  }
  function mm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Ji(t, 67108864);
      n !== null && qe(n, t, 67108864), cf(t, 67108864);
    }
  }
  function bm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Je();
      n = au(n);
      var s = Ji(t, n);
      s !== null && qe(s, t, n), cf(t, n);
    }
  }
  var or = !0;
  function $1(t, n, s, o) {
    var f = H.T;
    H.T = null;
    var g = G.p;
    try {
      (G.p = 2), ff(t, n, s, o);
    } finally {
      (G.p = g), (H.T = f);
    }
  }
  function J1(t, n, s, o) {
    var f = H.T;
    H.T = null;
    var g = G.p;
    try {
      (G.p = 8), ff(t, n, s, o);
    } finally {
      (G.p = g), (H.T = f);
    }
  }
  function ff(t, n, s, o) {
    if (or) {
      var f = hf(o);
      if (f === null) Ic(t, n, o, rr, s), vm(t, o);
      else if (ev(f, t, n, s, o)) o.stopPropagation();
      else if ((vm(t, o), n & 4 && -1 < tv.indexOf(t))) {
        for (; f !== null; ) {
          var g = za(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var y = Ki(g.pendingLanes);
                  if (y !== 0) {
                    var C = g;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; y; ) {
                      var z = 1 << (31 - Qe(y));
                      (C.entanglements[1] |= z), (y &= ~z);
                    }
                    Rn(g), (jt & 6) === 0 && ((Go = Ft() + 500), cl(0));
                  }
                }
                break;
              case 31:
              case 13:
                (C = Ji(g, 2)), C !== null && qe(C, g, 2), Qo(), cf(g, 2);
            }
          if (((g = hf(o)), g === null && Ic(t, n, o, rr, s), g === f)) break;
          f = g;
        }
        f !== null && o.stopPropagation();
      } else Ic(t, n, o, null, s);
    }
  }
  function hf(t) {
    return (t = du(t)), df(t);
  }
  var rr = null;
  function df(t) {
    if (((rr = null), (t = Oa(t)), t !== null)) {
      var n = u(t);
      if (n === null) t = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (((t = c(n)), t !== null)) return t;
          t = null;
        } else if (s === 31) {
          if (((t = h(n)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (rr = t), null;
  }
  function ym(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ln()) {
          case se:
            return 2;
          case we:
            return 8;
          case Be:
          case Ts:
            return 32;
          case As:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    Di = null,
    ki = null,
    Ri = null,
    bl = new Map(),
    yl = new Map(),
    Bi = [],
    tv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function vm(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Di = null;
        break;
      case "dragenter":
      case "dragleave":
        ki = null;
        break;
      case "mouseover":
      case "mouseout":
        Ri = null;
        break;
      case "pointerover":
      case "pointerout":
        bl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(n.pointerId);
    }
  }
  function vl(t, n, s, o, f, g) {
    return t === null || t.nativeEvent !== g
      ? ((t = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: o,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = za(n)), n !== null && mm(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        t);
  }
  function ev(t, n, s, o, f) {
    switch (n) {
      case "focusin":
        return (Di = vl(Di, t, n, s, o, f)), !0;
      case "dragenter":
        return (ki = vl(ki, t, n, s, o, f)), !0;
      case "mouseover":
        return (Ri = vl(Ri, t, n, s, o, f)), !0;
      case "pointerover":
        var g = f.pointerId;
        return bl.set(g, vl(bl.get(g) || null, t, n, s, o, f)), !0;
      case "gotpointercapture":
        return (
          (g = f.pointerId), yl.set(g, vl(yl.get(g) || null, t, n, s, o, f)), !0
        );
    }
    return !1;
  }
  function wm(t) {
    var n = Oa(t.target);
    if (n !== null) {
      var s = u(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = c(s)), n !== null)) {
            (t.blockedOn = n),
              Bh(t.priority, function () {
                bm(s);
              });
            return;
          }
        } else if (n === 31) {
          if (((n = h(s)), n !== null)) {
            (t.blockedOn = n),
              Bh(t.priority, function () {
                bm(s);
              });
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ur(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var s = hf(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var o = new s.constructor(s.type, s);
        (hu = o), s.target.dispatchEvent(o), (hu = null);
      } else return (n = za(s)), n !== null && mm(n), (t.blockedOn = s), !1;
      n.shift();
    }
    return !0;
  }
  function _m(t, n, s) {
    ur(t) && s.delete(n);
  }
  function nv() {
    (gf = !1),
      Di !== null && ur(Di) && (Di = null),
      ki !== null && ur(ki) && (ki = null),
      Ri !== null && ur(Ri) && (Ri = null),
      bl.forEach(_m),
      yl.forEach(_m);
  }
  function cr(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      gf ||
        ((gf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, nv)));
  }
  var fr = null;
  function xm(t) {
    fr !== t &&
      ((fr = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        fr === t && (fr = null);
        for (var n = 0; n < t.length; n += 3) {
          var s = t[n],
            o = t[n + 1],
            f = t[n + 2];
          if (typeof o != "function") {
            if (df(o || s) === null) continue;
            break;
          }
          var g = za(s);
          g !== null &&
            (t.splice(n, 3),
            (n -= 3),
            fc(g, { pending: !0, data: f, method: s.method, action: o }, o, f));
        }
      }));
  }
  function fs(t) {
    function n(z) {
      return cr(z, t);
    }
    Di !== null && cr(Di, t),
      ki !== null && cr(ki, t),
      Ri !== null && cr(Ri, t),
      bl.forEach(n),
      yl.forEach(n);
    for (var s = 0; s < Bi.length; s++) {
      var o = Bi[s];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Bi.length && ((s = Bi[0]), s.blockedOn === null); )
      wm(s), s.blockedOn === null && Bi.shift();
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (o = 0; o < s.length; o += 3) {
        var f = s[o],
          g = s[o + 1],
          y = f[Le] || null;
        if (typeof g == "function") y || xm(s);
        else if (y) {
          var C = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (y = g[Le] || null))) C = y.formAction;
            else if (df(f) !== null) continue;
          } else C = y.action;
          typeof C == "function" ? (s[o + 1] = C) : (s.splice(o, 3), (o -= 3)),
            xm(s);
        }
      }
  }
  function Sm() {
    function t(g) {
      g.canIntercept &&
        g.info === "react-transition" &&
        g.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (f = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      f !== null && (f(), (f = null)), o || setTimeout(s, 20);
    }
    function s() {
      if (!o && !navigation.transition) {
        var g = navigation.currentEntry;
        g &&
          g.url != null &&
          navigation.navigate(g.url, {
            state: g.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        f = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(s, 100),
        function () {
          (o = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            f !== null && (f(), (f = null));
        }
      );
    }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  (hr.prototype.render = pf.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var s = n.current,
        o = Je();
      gm(s, o, t, n, null, null);
    }),
    (hr.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          gm(t.current, 2, null, t, null, null), Qo(), (n[Aa] = null);
        }
      });
  function hr(t) {
    this._internalRoot = t;
  }
  hr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Rh();
      t = { blockedOn: null, target: t, priority: n };
      for (var s = 0; s < Bi.length && n !== 0 && n < Bi[s].priority; s++);
      Bi.splice(s, 0, t), s === 0 && wm(t);
    }
  };
  var Cm = e.version;
  if (Cm !== "19.2.0") throw Error(l(527, Cm, "19.2.0"));
  G.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return (
      (t = d(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var iv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dr.isDisabled && dr.supportsFiber)
      try {
        (xn = dr.inject(iv)), (Te = dr);
      } catch {}
  }
  return (
    (_l.createRoot = function (t, n) {
      if (!r(t)) throw Error(l(299));
      var s = !1,
        o = "",
        f = Dg,
        g = kg,
        y = Rg;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        (n = hm(t, 1, !1, null, null, s, o, null, f, g, y, Sm)),
        (t[Aa] = n.current),
        Pc(t),
        new pf(n)
      );
    }),
    (_l.hydrateRoot = function (t, n, s) {
      if (!r(t)) throw Error(l(299));
      var o = !1,
        f = "",
        g = Dg,
        y = kg,
        C = Rg,
        z = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (g = s.onUncaughtError),
          s.onCaughtError !== void 0 && (y = s.onCaughtError),
          s.onRecoverableError !== void 0 && (C = s.onRecoverableError),
          s.formState !== void 0 && (z = s.formState)),
        (n = hm(t, 1, !0, n, s ?? null, o, f, z, g, y, C, Sm)),
        (n.context = dm(null)),
        (s = n.current),
        (o = Je()),
        (o = au(o)),
        (f = vi(o)),
        (f.callback = null),
        wi(s, f, o),
        (s = o),
        (n.current.lanes = s),
        zs(n, s),
        Rn(n),
        (t[Aa] = n.current),
        Pc(t),
        new hr(n)
      );
    }),
    (_l.version = "19.2.0"),
    _l
  );
}
var Bm;
function dv() {
  if (Bm) return yf.exports;
  Bm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return i(), (yf.exports = hv()), yf.exports;
}
var gv = dv();
const pv = "_grandContainer_9ptvi_1",
  mv = "_parentContainer_9ptvi_21",
  bv = "_topContainer_9ptvi_47",
  yv = "_middleContainer_9ptvi_69",
  vv = "_instructionContainer_9ptvi_89",
  wv = "_footerContainer_9ptvi_115",
  ji = {
    grandContainer: pv,
    parentContainer: mv,
    topContainer: bv,
    middleContainer: yv,
    instructionContainer: vv,
    footerContainer: wv,
  },
  _v = "_Container_12oti_1",
  xv = "_panelContainer_12oti_13",
  Sv = "_panelButton_12oti_35",
  Cv = "_buttonIcon_12oti_87",
  xl = { Container: _v, panelContainer: xv, panelButton: Sv, buttonIcon: Cv };
var Or = { exports: {} };
var Ev = Or.exports,
  Lm;
function Mv() {
  return (
    Lm ||
      ((Lm = 1),
      (function (i, e) {
        ((a, l) => {
          i.exports = l();
        })(Ev, function a() {
          var l =
              typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : l !== void 0
                ? l
                : {},
            r,
            u = !l.document && !!l.postMessage,
            c = l.IS_PAPA_WORKER || !1,
            h = {},
            p = 0,
            d = {};
          function m(S) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (v) {
                var N = j(v);
                (N.chunkSize = parseInt(N.chunkSize)),
                  v.step || v.chunk || (N.chunkSize = null),
                  (this._handle = new M(N)),
                  ((this._handle.streamer = this)._config = N);
              }.call(this, S),
              (this.parseChunk = function (v, N) {
                var k = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < k) {
                  let W = this._config.newline;
                  W ||
                    ((R = this._config.quoteChar || '"'),
                    (W = this._handle.guessLineEndings(v, R))),
                    (v = [...v.split(W).slice(k)].join(W));
                }
                this.isFirstChunk &&
                  T(this._config.beforeFirstChunk) &&
                  (R = this._config.beforeFirstChunk(v)) !== void 0 &&
                  (v = R),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var k = this._partialLine + v,
                  R =
                    ((this._partialLine = ""),
                    this._handle.parse(k, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((v = R.meta.cursor),
                    (k =
                      (this._finished ||
                        ((this._partialLine = k.substring(v - this._baseIndex)),
                        (this._baseIndex = v)),
                      R && R.data && (this._rowCount += R.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    c)
                  )
                    l.postMessage({
                      results: R,
                      workerId: d.WORKER_ID,
                      finished: k,
                    });
                  else if (T(this._config.chunk) && !N) {
                    if (
                      (this._config.chunk(R, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = R = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(R.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(R.errors)),
                      (this._completeResults.meta = R.meta)),
                    this._completed ||
                      !k ||
                      !T(this._config.complete) ||
                      (R && R.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input
                      ),
                      (this._completed = !0)),
                    k || (R && R.meta.paused) || this._nextChunk(),
                    R
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (v) {
                T(this._config.error)
                  ? this._config.error(v)
                  : c &&
                    this._config.error &&
                    l.postMessage({
                      workerId: d.WORKER_ID,
                      error: v,
                      finished: !1,
                    });
              });
          }
          function b(S) {
            var v;
            (S = S || {}).chunkSize || (S.chunkSize = d.RemoteChunkSize),
              m.call(this, S),
              (this._nextChunk = u
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (N) {
                (this._input = N), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((v = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (v.withCredentials = this._config.withCredentials),
                    u ||
                      ((v.onload = J(this._chunkLoaded, this)),
                      (v.onerror = J(this._chunkError, this))),
                    v.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !u
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var N,
                      k = this._config.downloadRequestHeaders;
                    for (N in k) v.setRequestHeader(N, k[N]);
                  }
                  var R;
                  this._config.chunkSize &&
                    ((R = this._start + this._config.chunkSize - 1),
                    v.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + R
                    ));
                  try {
                    v.send(this._config.downloadRequestBody);
                  } catch (W) {
                    this._chunkError(W.message);
                  }
                  u && v.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                v.readyState === 4 &&
                  (v.status < 200 || 400 <= v.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || v.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((N) =>
                            (N = N.getResponseHeader("Content-Range")) !== null
                              ? parseInt(N.substring(N.lastIndexOf("/") + 1))
                              : -1)(v)),
                      this.parseChunk(v.responseText)));
              }),
              (this._chunkError = function (N) {
                (N = v.statusText || N), this._sendError(new Error(N));
              });
          }
          function _(S) {
            (S = S || {}).chunkSize || (S.chunkSize = d.LocalChunkSize),
              m.call(this, S);
            var v,
              N,
              k = typeof FileReader < "u";
            (this.stream = function (R) {
              (this._input = R),
                (N = R.slice || R.webkitSlice || R.mozSlice),
                k
                  ? (((v = new FileReader()).onload = J(
                      this._chunkLoaded,
                      this
                    )),
                    (v.onerror = J(this._chunkError, this)))
                  : (v = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var R = this._input,
                  W =
                    (this._config.chunkSize &&
                      ((W = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size
                      )),
                      (R = N.call(R, this._start, W))),
                    v.readAsText(R, this._config.encoding));
                k || this._chunkLoaded({ target: { result: W } });
              }),
              (this._chunkLoaded = function (R) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(R.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(v.error);
              });
          }
          function x(S) {
            var v;
            m.call(this, (S = S || {})),
              (this.stream = function (N) {
                return (v = N), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var N, k;
                if (!this._finished)
                  return (
                    (N = this._config.chunkSize),
                    (v = N
                      ? ((k = v.substring(0, N)), v.substring(N))
                      : ((k = v), "")),
                    (this._finished = !v),
                    this.parseChunk(k)
                  );
              });
          }
          function w(S) {
            m.call(this, (S = S || {}));
            var v = [],
              N = !0,
              k = !1;
            (this.pause = function () {
              m.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                m.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (R) {
                (this._input = R),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                k && v.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  v.length ? this.parseChunk(v.shift()) : (N = !0);
              }),
              (this._streamData = J(function (R) {
                try {
                  v.push(
                    typeof R == "string" ? R : R.toString(this._config.encoding)
                  ),
                    N &&
                      ((N = !1),
                      this._checkIsFinished(),
                      this.parseChunk(v.shift()));
                } catch (W) {
                  this._streamError(W);
                }
              }, this)),
              (this._streamError = J(function (R) {
                this._streamCleanUp(), this._sendError(R);
              }, this)),
              (this._streamEnd = J(function () {
                this._streamCleanUp(), (k = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = J(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function M(S) {
            var v,
              N,
              k,
              R,
              W = Math.pow(2, 53),
              lt = -W,
              at = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              H =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              G = this,
              nt = 0,
              it = 0,
              ut = !1,
              A = !1,
              F = [],
              B = { data: [], errors: [], meta: {} };
            function et(pt) {
              return S.skipEmptyLines === "greedy"
                ? pt.join("").trim() === ""
                : pt.length === 1 && pt[0].length === 0;
            }
            function st() {
              if (
                (B &&
                  k &&
                  (bt(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      d.DefaultDelimiter +
                      "'"
                  ),
                  (k = !1)),
                S.skipEmptyLines &&
                  (B.data = B.data.filter(function (Lt) {
                    return !et(Lt);
                  })),
                ot())
              ) {
                let Lt = function (ae, zt) {
                  T(S.transformHeader) && (ae = S.transformHeader(ae, zt)),
                    F.push(ae);
                };
                var yt = Lt;
                if (B)
                  if (Array.isArray(B.data[0])) {
                    for (var pt = 0; ot() && pt < B.data.length; pt++)
                      B.data[pt].forEach(Lt);
                    B.data.splice(0, 1);
                  } else B.data.forEach(Lt);
              }
              function dt(Lt, ae) {
                for (
                  var zt = S.header ? {} : [], Dt = 0;
                  Dt < Lt.length;
                  Dt++
                ) {
                  var _t = Dt,
                    me = Lt[Dt],
                    me = ((Ot, Gt) =>
                      ((ee) => (
                        S.dynamicTypingFunction &&
                          S.dynamicTyping[ee] === void 0 &&
                          (S.dynamicTyping[ee] = S.dynamicTypingFunction(ee)),
                        (S.dynamicTyping[ee] || S.dynamicTyping) === !0
                      ))(Ot)
                        ? Gt === "true" ||
                          Gt === "TRUE" ||
                          (Gt !== "false" &&
                            Gt !== "FALSE" &&
                            (((ee) => {
                              if (
                                at.test(ee) &&
                                ((ee = parseFloat(ee)), lt < ee && ee < W)
                              )
                                return 1;
                            })(Gt)
                              ? parseFloat(Gt)
                              : H.test(Gt)
                              ? new Date(Gt)
                              : Gt === ""
                              ? null
                              : Gt))
                        : Gt)(
                      (_t = S.header
                        ? Dt >= F.length
                          ? "__parsed_extra"
                          : F[Dt]
                        : _t),
                      (me = S.transform ? S.transform(me, _t) : me)
                    );
                  _t === "__parsed_extra"
                    ? ((zt[_t] = zt[_t] || []), zt[_t].push(me))
                    : (zt[_t] = me);
                }
                return (
                  S.header &&
                    (Dt > F.length
                      ? bt(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            F.length +
                            " fields but parsed " +
                            Dt,
                          it + ae
                        )
                      : Dt < F.length &&
                        bt(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            F.length +
                            " fields but parsed " +
                            Dt,
                          it + ae
                        )),
                  zt
                );
              }
              var Bt;
              B &&
                (S.header || S.dynamicTyping || S.transform) &&
                ((Bt = 1),
                !B.data.length || Array.isArray(B.data[0])
                  ? ((B.data = B.data.map(dt)), (Bt = B.data.length))
                  : (B.data = dt(B.data, 0)),
                S.header && B.meta && (B.meta.fields = F),
                (it += Bt));
            }
            function ot() {
              return S.header && F.length === 0;
            }
            function bt(pt, dt, Bt, yt) {
              (pt = { type: pt, code: dt, message: Bt }),
                yt !== void 0 && (pt.row = yt),
                B.errors.push(pt);
            }
            T(S.step) &&
              ((R = S.step),
              (S.step = function (pt) {
                (B = pt),
                  ot()
                    ? st()
                    : (st(),
                      B.data.length !== 0 &&
                        ((nt += pt.data.length),
                        S.preview && nt > S.preview
                          ? N.abort()
                          : ((B.data = B.data[0]), R(B, G))));
              })),
              (this.parse = function (pt, dt, Bt) {
                var yt = S.quoteChar || '"',
                  yt =
                    (S.newline || (S.newline = this.guessLineEndings(pt, yt)),
                    (k = !1),
                    S.delimiter
                      ? T(S.delimiter) &&
                        ((S.delimiter = S.delimiter(pt)),
                        (B.meta.delimiter = S.delimiter))
                      : ((yt = ((Lt, ae, zt, Dt, _t) => {
                          var me, Ot, Gt, ee;
                          _t = _t || [
                            ",",
                            "	",
                            "|",
                            ";",
                            d.RECORD_SEP,
                            d.UNIT_SEP,
                          ];
                          for (var On = 0; On < _t.length; On++) {
                            for (
                              var sn,
                                Zi = _t[On],
                                Ft = 0,
                                ln = 0,
                                se = 0,
                                we =
                                  ((Gt = void 0),
                                  new E({
                                    comments: Dt,
                                    delimiter: Zi,
                                    newline: ae,
                                    preview: 10,
                                  }).parse(Lt)),
                                Be = 0;
                              Be < we.data.length;
                              Be++
                            )
                              zt && et(we.data[Be])
                                ? se++
                                : ((sn = we.data[Be].length),
                                  (ln += sn),
                                  Gt === void 0
                                    ? (Gt = sn)
                                    : 0 < sn &&
                                      ((Ft += Math.abs(sn - Gt)), (Gt = sn)));
                            0 < we.data.length && (ln /= we.data.length - se),
                              (Ot === void 0 || Ft <= Ot) &&
                                (ee === void 0 || ee < ln) &&
                                1.99 < ln &&
                                ((Ot = Ft), (me = Zi), (ee = ln));
                          }
                          return {
                            successful: !!(S.delimiter = me),
                            bestDelimiter: me,
                          };
                        })(
                          pt,
                          S.newline,
                          S.skipEmptyLines,
                          S.comments,
                          S.delimitersToGuess
                        )).successful
                          ? (S.delimiter = yt.bestDelimiter)
                          : ((k = !0), (S.delimiter = d.DefaultDelimiter)),
                        (B.meta.delimiter = S.delimiter)),
                    j(S));
                return (
                  S.preview && S.header && yt.preview++,
                  (v = pt),
                  (N = new E(yt)),
                  (B = N.parse(v, dt, Bt)),
                  st(),
                  ut ? { meta: { paused: !0 } } : B || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return ut;
              }),
              (this.pause = function () {
                (ut = !0),
                  N.abort(),
                  (v = T(S.chunk) ? "" : v.substring(N.getCharIndex()));
              }),
              (this.resume = function () {
                G.streamer._halted
                  ? ((ut = !1), G.streamer.parseChunk(v, !0))
                  : setTimeout(G.resume, 3);
              }),
              (this.aborted = function () {
                return A;
              }),
              (this.abort = function () {
                (A = !0),
                  N.abort(),
                  (B.meta.aborted = !0),
                  T(S.complete) && S.complete(B),
                  (v = "");
              }),
              (this.guessLineEndings = function (Lt, yt) {
                Lt = Lt.substring(0, 1048576);
                var yt = new RegExp(O(yt) + "([^]*?)" + O(yt), "gm"),
                  Bt = (Lt = Lt.replace(yt, "")).split("\r"),
                  yt = Lt.split(`
`),
                  Lt = 1 < yt.length && yt[0].length < Bt[0].length;
                if (Bt.length === 1 || Lt)
                  return `
`;
                for (var ae = 0, zt = 0; zt < Bt.length; zt++)
                  Bt[zt][0] ===
                    `
` && ae++;
                return ae >= Bt.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function O(S) {
            return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function E(S) {
            var v = (S = S || {}).delimiter,
              N = S.newline,
              k = S.comments,
              R = S.step,
              W = S.preview,
              lt = S.fastMode,
              at = null,
              H = !1,
              G = S.quoteChar == null ? '"' : S.quoteChar,
              nt = G;
            if (
              (S.escapeChar !== void 0 && (nt = S.escapeChar),
              (typeof v != "string" || -1 < d.BAD_DELIMITERS.indexOf(v)) &&
                (v = ","),
              k === v)
            )
              throw new Error("Comment character same as delimiter");
            k === !0
              ? (k = "#")
              : (typeof k != "string" || -1 < d.BAD_DELIMITERS.indexOf(k)) &&
                (k = !1),
              N !==
                `
` &&
                N !== "\r" &&
                N !==
                  `\r
` &&
                (N = `
`);
            var it = 0,
              ut = !1;
            (this.parse = function (A, F, B) {
              if (typeof A != "string")
                throw new Error("Input must be a string");
              var et = A.length,
                st = v.length,
                ot = N.length,
                bt = k.length,
                pt = T(R),
                dt = [],
                Bt = [],
                yt = [],
                Lt = (it = 0);
              if (!A) return Ft();
              if (lt || (lt !== !1 && A.indexOf(G) === -1)) {
                for (var ae = A.split(N), zt = 0; zt < ae.length; zt++) {
                  if (((yt = ae[zt]), (it += yt.length), zt !== ae.length - 1))
                    it += N.length;
                  else if (B) return Ft();
                  if (!k || yt.substring(0, bt) !== k) {
                    if (pt) {
                      if (((dt = []), ee(yt.split(v)), ln(), ut)) return Ft();
                    } else ee(yt.split(v));
                    if (W && W <= zt) return (dt = dt.slice(0, W)), Ft(!0);
                  }
                }
                return Ft();
              }
              for (
                var Dt = A.indexOf(v, it),
                  _t = A.indexOf(N, it),
                  me = new RegExp(O(nt) + O(G), "g"),
                  Ot = A.indexOf(G, it);
                ;

              )
                if (A[it] === G)
                  for (Ot = it, it++; ; ) {
                    if ((Ot = A.indexOf(G, Ot + 1)) === -1)
                      return (
                        B ||
                          Bt.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: dt.length,
                            index: it,
                          }),
                        sn()
                      );
                    if (Ot === et - 1)
                      return sn(A.substring(it, Ot).replace(me, G));
                    if (G === nt && A[Ot + 1] === nt) Ot++;
                    else if (G === nt || Ot === 0 || A[Ot - 1] !== nt) {
                      Dt !== -1 && Dt < Ot + 1 && (Dt = A.indexOf(v, Ot + 1));
                      var Gt = On(
                        (_t =
                          _t !== -1 && _t < Ot + 1
                            ? A.indexOf(N, Ot + 1)
                            : _t) === -1
                          ? Dt
                          : Math.min(Dt, _t)
                      );
                      if (A.substr(Ot + 1 + Gt, st) === v) {
                        yt.push(A.substring(it, Ot).replace(me, G)),
                          A[(it = Ot + 1 + Gt + st)] !== G &&
                            (Ot = A.indexOf(G, it)),
                          (Dt = A.indexOf(v, it)),
                          (_t = A.indexOf(N, it));
                        break;
                      }
                      if (
                        ((Gt = On(_t)),
                        A.substring(Ot + 1 + Gt, Ot + 1 + Gt + ot) === N)
                      ) {
                        if (
                          (yt.push(A.substring(it, Ot).replace(me, G)),
                          Zi(Ot + 1 + Gt + ot),
                          (Dt = A.indexOf(v, it)),
                          (Ot = A.indexOf(G, it)),
                          pt && (ln(), ut))
                        )
                          return Ft();
                        if (W && dt.length >= W) return Ft(!0);
                        break;
                      }
                      Bt.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: dt.length,
                        index: it,
                      }),
                        Ot++;
                    }
                  }
                else if (
                  k &&
                  yt.length === 0 &&
                  A.substring(it, it + bt) === k
                ) {
                  if (_t === -1) return Ft();
                  (it = _t + ot),
                    (_t = A.indexOf(N, it)),
                    (Dt = A.indexOf(v, it));
                } else if (Dt !== -1 && (Dt < _t || _t === -1))
                  yt.push(A.substring(it, Dt)),
                    (it = Dt + st),
                    (Dt = A.indexOf(v, it));
                else {
                  if (_t === -1) break;
                  if (
                    (yt.push(A.substring(it, _t)),
                    Zi(_t + ot),
                    pt && (ln(), ut))
                  )
                    return Ft();
                  if (W && dt.length >= W) return Ft(!0);
                }
              return sn();
              function ee(se) {
                dt.push(se), (Lt = it);
              }
              function On(se) {
                var we = 0;
                return (we =
                  se !== -1 &&
                  (se = A.substring(Ot + 1, se)) &&
                  se.trim() === ""
                    ? se.length
                    : we);
              }
              function sn(se) {
                return (
                  B ||
                    (se === void 0 && (se = A.substring(it)),
                    yt.push(se),
                    (it = et),
                    ee(yt),
                    pt && ln()),
                  Ft()
                );
              }
              function Zi(se) {
                (it = se), ee(yt), (yt = []), (_t = A.indexOf(N, it));
              }
              function Ft(se) {
                if (S.header && !F && dt.length && !H) {
                  var we = dt[0],
                    Be = Object.create(null),
                    Ts = new Set(we);
                  let As = !1;
                  for (let ci = 0; ci < we.length; ci++) {
                    let on = we[ci];
                    if (
                      Be[
                        (on = T(S.transformHeader)
                          ? S.transformHeader(on, ci)
                          : on)
                      ]
                    ) {
                      let xn,
                        Te = Be[on];
                      for (; (xn = on + "_" + Te), Te++, Ts.has(xn); );
                      Ts.add(xn),
                        (we[ci] = xn),
                        Be[on]++,
                        (As = !0),
                        ((at = at === null ? {} : at)[xn] = on);
                    } else (Be[on] = 1), (we[ci] = on);
                    Ts.add(on);
                  }
                  As && console.warn("Duplicate headers found and renamed."),
                    (H = !0);
                }
                return {
                  data: dt,
                  errors: Bt,
                  meta: {
                    delimiter: v,
                    linebreak: N,
                    aborted: ut,
                    truncated: !!se,
                    cursor: Lt + (F || 0),
                    renamedHeaders: at,
                  },
                };
              }
              function ln() {
                R(Ft()), (dt = []), (Bt = []);
              }
            }),
              (this.abort = function () {
                ut = !0;
              }),
              (this.getCharIndex = function () {
                return it;
              });
          }
          function tt(S) {
            var v = S.data,
              N = h[v.workerId],
              k = !1;
            if (v.error) N.userError(v.error, v.file);
            else if (v.results && v.results.data) {
              var R = {
                abort: function () {
                  (k = !0),
                    I(v.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: $,
                resume: $,
              };
              if (T(N.userStep)) {
                for (
                  var W = 0;
                  W < v.results.data.length &&
                  (N.userStep(
                    {
                      data: v.results.data[W],
                      errors: v.results.errors,
                      meta: v.results.meta,
                    },
                    R
                  ),
                  !k);
                  W++
                );
                delete v.results;
              } else
                T(N.userChunk) &&
                  (N.userChunk(v.results, R, v.file), delete v.results);
            }
            v.finished && !k && I(v.workerId, v.results);
          }
          function I(S, v) {
            var N = h[S];
            T(N.userComplete) && N.userComplete(v), N.terminate(), delete h[S];
          }
          function $() {
            throw new Error("Not implemented.");
          }
          function j(S) {
            if (typeof S != "object" || S === null) return S;
            var v,
              N = Array.isArray(S) ? [] : {};
            for (v in S) N[v] = j(S[v]);
            return N;
          }
          function J(S, v) {
            return function () {
              S.apply(v, arguments);
            };
          }
          function T(S) {
            return typeof S == "function";
          }
          return (
            (d.parse = function (S, v) {
              var N = (v = v || {}).dynamicTyping || !1;
              if (
                (T(N) && ((v.dynamicTypingFunction = N), (N = {})),
                (v.dynamicTyping = N),
                (v.transform = !!T(v.transform) && v.transform),
                !v.worker || !d.WORKERS_SUPPORTED)
              )
                return (
                  (N = null),
                  d.NODE_STREAM_INPUT,
                  typeof S == "string"
                    ? ((S = ((k) =>
                        k.charCodeAt(0) !== 65279 ? k : k.slice(1))(S)),
                      (N = new (v.download ? b : x)(v)))
                    : S.readable === !0 && T(S.read) && T(S.on)
                    ? (N = new w(v))
                    : ((l.File && S instanceof File) || S instanceof Object) &&
                      (N = new _(v)),
                  N.stream(S)
                );
              ((N = (() => {
                var k;
                return (
                  !!d.WORKERS_SUPPORTED &&
                  ((k = (() => {
                    var R = l.URL || l.webkitURL || null,
                      W = a.toString();
                    return (
                      d.BLOB_URL ||
                      (d.BLOB_URL = R.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            W,
                            ")();",
                          ],
                          { type: "text/javascript" }
                        )
                      ))
                    );
                  })()),
                  ((k = new l.Worker(k)).onmessage = tt),
                  (k.id = p++),
                  (h[k.id] = k))
                );
              })()).userStep = v.step),
                (N.userChunk = v.chunk),
                (N.userComplete = v.complete),
                (N.userError = v.error),
                (v.step = T(v.step)),
                (v.chunk = T(v.chunk)),
                (v.complete = T(v.complete)),
                (v.error = T(v.error)),
                delete v.worker,
                N.postMessage({ input: S, config: v, workerId: N.id });
            }),
            (d.unparse = function (S, v) {
              var N = !1,
                k = !0,
                R = ",",
                W = `\r
`,
                lt = '"',
                at = lt + lt,
                H = !1,
                G = null,
                nt = !1,
                it =
                  ((() => {
                    if (typeof v == "object") {
                      if (
                        (typeof v.delimiter != "string" ||
                          d.BAD_DELIMITERS.filter(function (F) {
                            return v.delimiter.indexOf(F) !== -1;
                          }).length ||
                          (R = v.delimiter),
                        (typeof v.quotes != "boolean" &&
                          typeof v.quotes != "function" &&
                          !Array.isArray(v.quotes)) ||
                          (N = v.quotes),
                        (typeof v.skipEmptyLines != "boolean" &&
                          typeof v.skipEmptyLines != "string") ||
                          (H = v.skipEmptyLines),
                        typeof v.newline == "string" && (W = v.newline),
                        typeof v.quoteChar == "string" && (lt = v.quoteChar),
                        typeof v.header == "boolean" && (k = v.header),
                        Array.isArray(v.columns))
                      ) {
                        if (v.columns.length === 0)
                          throw new Error("Option columns is empty");
                        G = v.columns;
                      }
                      v.escapeChar !== void 0 && (at = v.escapeChar + lt),
                        v.escapeFormulae instanceof RegExp
                          ? (nt = v.escapeFormulae)
                          : typeof v.escapeFormulae == "boolean" &&
                            v.escapeFormulae &&
                            (nt = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(O(lt), "g"));
              if (
                (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S))
              ) {
                if (!S.length || Array.isArray(S[0])) return ut(null, S, H);
                if (typeof S[0] == "object")
                  return ut(G || Object.keys(S[0]), S, H);
              } else if (typeof S == "object")
                return (
                  typeof S.data == "string" && (S.data = JSON.parse(S.data)),
                  Array.isArray(S.data) &&
                    (S.fields || (S.fields = (S.meta && S.meta.fields) || G),
                    S.fields ||
                      (S.fields = Array.isArray(S.data[0])
                        ? S.fields
                        : typeof S.data[0] == "object"
                        ? Object.keys(S.data[0])
                        : []),
                    Array.isArray(S.data[0]) ||
                      typeof S.data[0] == "object" ||
                      (S.data = [S.data])),
                  ut(S.fields || [], S.data || [], H)
                );
              throw new Error("Unable to serialize unrecognized input");
              function ut(F, B, et) {
                var st = "",
                  ot =
                    (typeof F == "string" && (F = JSON.parse(F)),
                    typeof B == "string" && (B = JSON.parse(B)),
                    Array.isArray(F) && 0 < F.length),
                  bt = !Array.isArray(B[0]);
                if (ot && k) {
                  for (var pt = 0; pt < F.length; pt++)
                    0 < pt && (st += R), (st += A(F[pt], pt));
                  0 < B.length && (st += W);
                }
                for (var dt = 0; dt < B.length; dt++) {
                  var Bt = (ot ? F : B[dt]).length,
                    yt = !1,
                    Lt = ot
                      ? Object.keys(B[dt]).length === 0
                      : B[dt].length === 0;
                  if (
                    (et &&
                      !ot &&
                      (yt =
                        et === "greedy"
                          ? B[dt].join("").trim() === ""
                          : B[dt].length === 1 && B[dt][0].length === 0),
                    et === "greedy" && ot)
                  ) {
                    for (var ae = [], zt = 0; zt < Bt; zt++) {
                      var Dt = bt ? F[zt] : zt;
                      ae.push(B[dt][Dt]);
                    }
                    yt = ae.join("").trim() === "";
                  }
                  if (!yt) {
                    for (var _t = 0; _t < Bt; _t++) {
                      0 < _t && !Lt && (st += R);
                      var me = ot && bt ? F[_t] : _t;
                      st += A(B[dt][me], _t);
                    }
                    dt < B.length - 1 && (!et || (0 < Bt && !Lt)) && (st += W);
                  }
                }
                return st;
              }
              function A(F, B) {
                var et, st;
                return F == null
                  ? ""
                  : F.constructor === Date
                  ? JSON.stringify(F).slice(1, 25)
                  : ((st = !1),
                    nt &&
                      typeof F == "string" &&
                      nt.test(F) &&
                      ((F = "'" + F), (st = !0)),
                    (et = F.toString().replace(it, at)),
                    (st =
                      st ||
                      N === !0 ||
                      (typeof N == "function" && N(F, B)) ||
                      (Array.isArray(N) && N[B]) ||
                      ((ot, bt) => {
                        for (var pt = 0; pt < bt.length; pt++)
                          if (-1 < ot.indexOf(bt[pt])) return !0;
                        return !1;
                      })(et, d.BAD_DELIMITERS) ||
                      -1 < et.indexOf(R) ||
                      et.charAt(0) === " " ||
                      et.charAt(et.length - 1) === " ")
                      ? lt + et + lt
                      : et);
              }
            }),
            (d.RECORD_SEP = ""),
            (d.UNIT_SEP = ""),
            (d.BYTE_ORDER_MARK = "\uFEFF"),
            (d.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              d.BYTE_ORDER_MARK,
            ]),
            (d.WORKERS_SUPPORTED = !u && !!l.Worker),
            (d.NODE_STREAM_INPUT = 1),
            (d.LocalChunkSize = 10485760),
            (d.RemoteChunkSize = 5242880),
            (d.DefaultDelimiter = ","),
            (d.Parser = E),
            (d.ParserHandle = M),
            (d.NetworkStreamer = b),
            (d.FileStreamer = _),
            (d.StringStreamer = x),
            (d.ReadableStreamStreamer = w),
            l.jQuery &&
              ((r = l.jQuery).fn.parse = function (S) {
                var v = S.config || {},
                  N = [];
                return (
                  this.each(function (W) {
                    if (
                      !(
                        r(this).prop("tagName").toUpperCase() === "INPUT" &&
                        r(this).attr("type").toLowerCase() === "file" &&
                        l.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var lt = 0; lt < this.files.length; lt++)
                      N.push({
                        file: this.files[lt],
                        inputElem: this,
                        instanceConfig: r.extend({}, v),
                      });
                  }),
                  k(),
                  this
                );
                function k() {
                  if (N.length === 0) T(S.complete) && S.complete();
                  else {
                    var W,
                      lt,
                      at,
                      H,
                      G = N[0];
                    if (T(S.before)) {
                      var nt = S.before(G.file, G.inputElem);
                      if (typeof nt == "object") {
                        if (nt.action === "abort")
                          return (
                            (W = "AbortError"),
                            (lt = G.file),
                            (at = G.inputElem),
                            (H = nt.reason),
                            void (T(S.error) && S.error({ name: W }, lt, at, H))
                          );
                        if (nt.action === "skip") return void R();
                        typeof nt.config == "object" &&
                          (G.instanceConfig = r.extend(
                            G.instanceConfig,
                            nt.config
                          ));
                      } else if (nt === "skip") return void R();
                    }
                    var it = G.instanceConfig.complete;
                    (G.instanceConfig.complete = function (ut) {
                      T(it) && it(ut, G.file, G.inputElem), R();
                    }),
                      d.parse(G.file, G.instanceConfig);
                  }
                }
                function R() {
                  N.splice(0, 1), k();
                }
              }),
            c &&
              (l.onmessage = function (S) {
                (S = S.data),
                  d.WORKER_ID === void 0 && S && (d.WORKER_ID = S.workerId),
                  typeof S.input == "string"
                    ? l.postMessage({
                        workerId: d.WORKER_ID,
                        results: d.parse(S.input, S.config),
                        finished: !0,
                      })
                    : ((l.File && S.input instanceof File) ||
                        S.input instanceof Object) &&
                      (S = d.parse(S.input, S.config)) &&
                      l.postMessage({
                        workerId: d.WORKER_ID,
                        results: S,
                        finished: !0,
                      });
              }),
            ((b.prototype = Object.create(m.prototype)).constructor = b),
            ((_.prototype = Object.create(m.prototype)).constructor = _),
            ((x.prototype = Object.create(x.prototype)).constructor = x),
            ((w.prototype = Object.create(m.prototype)).constructor = w),
            d
          );
        });
      })(Or)),
    Or.exports
  );
}
var Tv = Mv();
const Av = lb(Tv),
  Fn = ft.createContext(),
  Ov = ({ children: i }) => {
    const [e, a] = ft.useState(!1),
      l = ft.useRef(null),
      [r, u] = ft.useState("ecg200.csv"),
      c = ft.useRef(r),
      [h, p] = ft.useState(5),
      [d, m] = ft.useState(500),
      [b, _] = ft.useState({ baseline: !1, powerline: !1, emg: !1 }),
      [x, w] = ft.useState(!1),
      [M, O] = ft.useState(!1),
      [E, tt] = ft.useState(!1),
      [I, $] = ft.useState(!1),
      [j, J] = ft.useState([]),
      [T, S] = ft.useState({
        order: 5,
        characteristic: "IIR",
        filterType: "bandpass",
        windowMode: "windowSync",
        preGain: !1,
        Fs: 500,
        Fc: 10,
        F1: null,
        F2: null,
        Fa: null,
        Fb: null,
        Att: 100,
      }),
      [v, N] = ft.useState([]),
      [k, R] = ft.useState(500),
      [W, lt] = ft.useState([]),
      [at, H] = ft.useState([]),
      [G, nt] = ft.useState(null),
      [it, ut] = ft.useState(!1);
    function A(B) {
      if (B.length < 2) return 500;
      const et = B[1].x - B[0].x;
      return et > 0 ? 1 / et : 500;
    }
    ft.useEffect(() => {
      Av.parse(r, {
        download: !0,
        skipEmptyLines: !0,
        complete: (B) => {
          const et = B.data;
          if (!et.length) return;
          const st = et[0],
            ot = st.indexOf("time_sec"),
            bt = st.indexOf("ECG_I");
          if (ot === -1 || bt === -1) {
            console.error("Required columns not found");
            return;
          }
          const pt = parseFloat(et[1][ot]) || 0,
            dt = r.toLowerCase().includes("ecg100") ? 1 / 1e3 : 1,
            Bt = et
              .slice(1)
              .map((Lt) => ({
                x: parseFloat(Lt[ot]) - pt,
                y: (parseFloat(Lt[bt]) || 0) * dt,
              }));
          N(Bt);
          const yt = A(Bt);
          R(yt);
        },
        error: (B) => console.error("CSV parse error", B),
      });
    }, [r]);
    const F = () => {};
    return U.jsx(Fn.Provider, {
      value: {
        showInstruction: e,
        setShowInstruction: a,
        buttonRef: l,
        generateECG: x,
        setGenerateECG: w,
        noisyECG: j,
        setNoisyECG: J,
        filteredECG: E,
        setFilteredECG: tt,
        config: T,
        setConfig: S,
        time: h,
        setTime: p,
        userFs: d,
        setUserFs: m,
        csvFilePath: r,
        prevPathRef: c,
        setCsvFilePath: u,
        rawSamples: v,
        originalFs: k,
        setOriginalFs: R,
        noise: b,
        setNoise: _,
        applyNoise: F,
        applyNoiseTrigger: M,
        setApplyNoiseTrigger: O,
        freqResponse: G,
        setFreqResponse: nt,
        applyFreqTrigger: it,
        setApplyFreqTrigger: ut,
        filteredSamples: at,
        setFilteredSamples: H,
        noisySamples: W,
        setNoisySamples: lt,
        applypsdTrigger: I,
        setApplypsdTrigger: $,
      },
      children: i,
    });
  },
  zv = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ft.useContext(Fn),
      l = () => {
        e(!i);
      };
    return U.jsx("div", {
      className: xl.Container,
      children: U.jsxs("div", {
        className: xl.panelContainer,
        children: [
          U.jsx("h1", {
            children: "Application and Usage of Filters on ECG Signal",
          }),
          U.jsx("div", {
            className: xl.buttonContainer,
            children: U.jsxs("button", {
              ref: a,
              className: xl.panelButton,
              onClick: l,
              children: [
                U.jsx("span", { className: xl.buttonIcon, children: "ℹ️" }),
                "Instruction",
              ],
            }),
          }),
        ],
      }),
    });
  },
  Dv = "_box_xbv2t_15",
  kv = "_container_xbv2t_25",
  Rv = "_card_xbv2t_115",
  Hi = { box: Dv, container: kv, card: Rv },
  Bv = () =>
    U.jsx("div", {
      className: Hi.box,
      children: U.jsxs("div", {
        className: Hi.container,
        children: [
          U.jsx("div", {
            className: Hi.card,
            children: U.jsx("h1", { children: "INSTRUCTIONS" }),
          }),
          U.jsx("div", {
            className: Hi.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 1: " }),
                "Select an ",
                U.jsx("b", { children: "ECG Dataset" }),
                " from the dropdown menu. Adjust the ",
                U.jsx("b", { children: "Duration" }),
                " and ",
                U.jsx("b", { children: "Sampling Rate" }),
                " sliders as needed. Click the ",
                U.jsx("b", { children: '"Generate ECG Signal"' }),
                " button to visualize the original unfiltered ECG signal.",
              ],
            }),
          }),
          U.jsx("div", {
            className: Hi.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 2: " }),
                "Select one or more noise types (",
                U.jsx("b", { children: "Baseline Wander" }),
                ", ",
                U.jsx("b", { children: "Powerline" }),
                ", ",
                U.jsx("b", { children: "EMG Noise" }),
                ") using the checkboxes. Click the ",
                U.jsx("b", { children: '"Add Noise to Signal"' }),
                " button to observe the corrupted signal.",
              ],
            }),
          }),
          U.jsx("div", {
            className: Hi.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 3: " }),
                "Configure the filter settings in the",
                " ",
                U.jsx("b", { children: "Filter Design" }),
                " section. Choose the ",
                U.jsx("b", { children: "Algorithm" }),
                " (IIR/FIR),",
                " ",
                U.jsx("b", { children: "Filter Type" }),
                " (Lowpass, Highpass, etc.), and set the",
                " ",
                U.jsx("b", { children: "Cutoff Frequencies" }),
                " and ",
                U.jsx("b", { children: "Order" }),
                ".",
              ],
            }),
          }),
          U.jsx("div", {
            className: Hi.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 4: " }),
                "Click the ",
                U.jsx("b", { children: '"Apply Filter"' }),
                " button to process the noisy signal. Compare the ",
                U.jsx("b", { children: "Filtered ECG" }),
                " graph with the Noisy and Original signals to evaluate the filter's performance.",
              ],
            }),
          }),
          U.jsx("div", {
            className: Hi.card,
            children: U.jsxs("p", {
              children: [
                U.jsx("span", { children: "STEP 5: " }),
                "Click the ",
                U.jsx("b", { children: '"Compute PSD"' }),
                " button to visualize the Power Spectral Density (PSD) of the  Noisy, and Filtered signals. Observe the frequency components and compare the filter's effect on the signal's spectrum.",
              ],
            }),
          }),
        ],
      }),
    }),
  Lv = "_leftPanelContainer_ea83h_1",
  jv = "_container_ea83h_29",
  Hv = "_psdContainer_ea83h_49",
  xf = { leftPanelContainer: Lv, container: jv, psdContainer: Hv },
  Nv = "_signalContainer_vw060_1",
  Uv = { signalContainer: Nv };
function Vl(i) {
  return (i + 0.5) | 0;
}
const Ui = (i, e, a) => Math.max(Math.min(i, a), e);
function Al(i) {
  return Ui(Vl(i * 2.55), 0, 255);
}
function Xi(i) {
  return Ui(Vl(i * 255), 0, 255);
}
function ri(i) {
  return Ui(Vl(i / 2.55) / 100, 0, 1);
}
function jm(i) {
  return Ui(Vl(i * 100), 0, 100);
}
const yn = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  jf = [..."0123456789ABCDEF"],
  Fv = (i) => jf[i & 15],
  qv = (i) => jf[(i & 240) >> 4] + jf[i & 15],
  gr = (i) => (i & 240) >> 4 === (i & 15),
  Yv = (i) => gr(i.r) && gr(i.g) && gr(i.b) && gr(i.a);
function Vv(i) {
  var e = i.length,
    a;
  return (
    i[0] === "#" &&
      (e === 4 || e === 5
        ? (a = {
            r: 255 & (yn[i[1]] * 17),
            g: 255 & (yn[i[2]] * 17),
            b: 255 & (yn[i[3]] * 17),
            a: e === 5 ? yn[i[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (a = {
            r: (yn[i[1]] << 4) | yn[i[2]],
            g: (yn[i[3]] << 4) | yn[i[4]],
            b: (yn[i[5]] << 4) | yn[i[6]],
            a: e === 9 ? (yn[i[7]] << 4) | yn[i[8]] : 255,
          })),
    a
  );
}
const Gv = (i, e) => (i < 255 ? e(i) : "");
function Xv(i) {
  var e = Yv(i) ? Fv : qv;
  return i ? "#" + e(i.r) + e(i.g) + e(i.b) + Gv(i.a, e) : void 0;
}
const Qv =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ob(i, e, a) {
  const l = e * Math.min(a, 1 - a),
    r = (u, c = (u + i / 30) % 12) =>
      a - l * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  return [r(0), r(8), r(4)];
}
function Zv(i, e, a) {
  const l = (r, u = (r + i / 60) % 6) =>
    a - a * e * Math.max(Math.min(u, 4 - u, 1), 0);
  return [l(5), l(3), l(1)];
}
function Kv(i, e, a) {
  const l = ob(i, 1, 0.5);
  let r;
  for (e + a > 1 && ((r = 1 / (e + a)), (e *= r), (a *= r)), r = 0; r < 3; r++)
    (l[r] *= 1 - e - a), (l[r] += e);
  return l;
}
function Pv(i, e, a, l, r) {
  return i === r
    ? (e - a) / l + (e < a ? 6 : 0)
    : e === r
    ? (a - i) / l + 2
    : (i - e) / l + 4;
}
function Kf(i) {
  const a = i.r / 255,
    l = i.g / 255,
    r = i.b / 255,
    u = Math.max(a, l, r),
    c = Math.min(a, l, r),
    h = (u + c) / 2;
  let p, d, m;
  return (
    u !== c &&
      ((m = u - c),
      (d = h > 0.5 ? m / (2 - u - c) : m / (u + c)),
      (p = Pv(a, l, r, m, u)),
      (p = p * 60 + 0.5)),
    [p | 0, d || 0, h]
  );
}
function Pf(i, e, a, l) {
  return (Array.isArray(e) ? i(e[0], e[1], e[2]) : i(e, a, l)).map(Xi);
}
function If(i, e, a) {
  return Pf(ob, i, e, a);
}
function Iv(i, e, a) {
  return Pf(Kv, i, e, a);
}
function Wv(i, e, a) {
  return Pf(Zv, i, e, a);
}
function rb(i) {
  return ((i % 360) + 360) % 360;
}
function $v(i) {
  const e = Qv.exec(i);
  let a = 255,
    l;
  if (!e) return;
  e[5] !== l && (a = e[6] ? Al(+e[5]) : Xi(+e[5]));
  const r = rb(+e[2]),
    u = +e[3] / 100,
    c = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (l = Iv(r, u, c))
      : e[1] === "hsv"
      ? (l = Wv(r, u, c))
      : (l = If(r, u, c)),
    { r: l[0], g: l[1], b: l[2], a }
  );
}
function Jv(i, e) {
  var a = Kf(i);
  (a[0] = rb(a[0] + e)), (a = If(a)), (i.r = a[0]), (i.g = a[1]), (i.b = a[2]);
}
function tw(i) {
  if (!i) return;
  const e = Kf(i),
    a = e[0],
    l = jm(e[1]),
    r = jm(e[2]);
  return i.a < 255
    ? `hsla(${a}, ${l}%, ${r}%, ${ri(i.a)})`
    : `hsl(${a}, ${l}%, ${r}%)`;
}
const Hm = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Nm = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function ew() {
  const i = {},
    e = Object.keys(Nm),
    a = Object.keys(Hm);
  let l, r, u, c, h;
  for (l = 0; l < e.length; l++) {
    for (c = h = e[l], r = 0; r < a.length; r++)
      (u = a[r]), (h = h.replace(u, Hm[u]));
    (u = parseInt(Nm[c], 16)),
      (i[h] = [(u >> 16) & 255, (u >> 8) & 255, u & 255]);
  }
  return i;
}
let pr;
function nw(i) {
  pr || ((pr = ew()), (pr.transparent = [0, 0, 0, 0]));
  const e = pr[i.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const iw =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function aw(i) {
  const e = iw.exec(i);
  let a = 255,
    l,
    r,
    u;
  if (e) {
    if (e[7] !== l) {
      const c = +e[7];
      a = e[8] ? Al(c) : Ui(c * 255, 0, 255);
    }
    return (
      (l = +e[1]),
      (r = +e[3]),
      (u = +e[5]),
      (l = 255 & (e[2] ? Al(l) : Ui(l, 0, 255))),
      (r = 255 & (e[4] ? Al(r) : Ui(r, 0, 255))),
      (u = 255 & (e[6] ? Al(u) : Ui(u, 0, 255))),
      { r: l, g: r, b: u, a }
    );
  }
}
function sw(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ri(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const Sf = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  hs = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function lw(i, e, a) {
  const l = hs(ri(i.r)),
    r = hs(ri(i.g)),
    u = hs(ri(i.b));
  return {
    r: Xi(Sf(l + a * (hs(ri(e.r)) - l))),
    g: Xi(Sf(r + a * (hs(ri(e.g)) - r))),
    b: Xi(Sf(u + a * (hs(ri(e.b)) - u))),
    a: i.a + a * (e.a - i.a),
  };
}
function mr(i, e, a) {
  if (i) {
    let l = Kf(i);
    (l[e] = Math.max(0, Math.min(l[e] + l[e] * a, e === 0 ? 360 : 1))),
      (l = If(l)),
      (i.r = l[0]),
      (i.g = l[1]),
      (i.b = l[2]);
  }
}
function ub(i, e) {
  return i && Object.assign(e || {}, i);
}
function Um(i) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((e = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (e.a = Xi(i[3])))
      : ((e = ub(i, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Xi(e.a))),
    e
  );
}
function ow(i) {
  return i.charAt(0) === "r" ? aw(i) : $v(i);
}
class Hl {
  constructor(e) {
    if (e instanceof Hl) return e;
    const a = typeof e;
    let l;
    a === "object"
      ? (l = Um(e))
      : a === "string" && (l = Vv(e) || nw(e) || ow(e)),
      (this._rgb = l),
      (this._valid = !!l);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = ub(this._rgb);
    return e && (e.a = ri(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Um(e);
  }
  rgbString() {
    return this._valid ? sw(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Xv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? tw(this._rgb) : void 0;
  }
  mix(e, a) {
    if (e) {
      const l = this.rgb,
        r = e.rgb;
      let u;
      const c = a === u ? 0.5 : a,
        h = 2 * c - 1,
        p = l.a - r.a,
        d = ((h * p === -1 ? h : (h + p) / (1 + h * p)) + 1) / 2;
      (u = 1 - d),
        (l.r = 255 & (d * l.r + u * r.r + 0.5)),
        (l.g = 255 & (d * l.g + u * r.g + 0.5)),
        (l.b = 255 & (d * l.b + u * r.b + 0.5)),
        (l.a = c * l.a + (1 - c) * r.a),
        (this.rgb = l);
    }
    return this;
  }
  interpolate(e, a) {
    return e && (this._rgb = lw(this._rgb, e._rgb, a)), this;
  }
  clone() {
    return new Hl(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = Xi(e)), this;
  }
  clearer(e) {
    const a = this._rgb;
    return (a.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      a = Vl(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = a), this;
  }
  opaquer(e) {
    const a = this._rgb;
    return (a.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return mr(this._rgb, 2, e), this;
  }
  darken(e) {
    return mr(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return mr(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return mr(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return Jv(this._rgb, e), this;
  }
}
function si() {}
const rw = (() => {
  let i = 0;
  return () => i++;
})();
function Pt(i) {
  return i == null;
}
function Me(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const e = Object.prototype.toString.call(i);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Ht(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function wn(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Bn(i, e) {
  return wn(i) ? i : e;
}
function At(i, e) {
  return typeof i > "u" ? e : i;
}
const uw = (i, e) =>
  typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * e : +i;
function Jt(i, e, a) {
  if (i && typeof i.call == "function") return i.apply(a, e);
}
function Vt(i, e, a, l) {
  let r, u, c;
  if (Me(i)) for (u = i.length, r = 0; r < u; r++) e.call(a, i[r], r);
  else if (Ht(i))
    for (c = Object.keys(i), u = c.length, r = 0; r < u; r++)
      e.call(a, i[c[r]], c[r]);
}
function kr(i, e) {
  let a, l, r, u;
  if (!i || !e || i.length !== e.length) return !1;
  for (a = 0, l = i.length; a < l; ++a)
    if (
      ((r = i[a]),
      (u = e[a]),
      r.datasetIndex !== u.datasetIndex || r.index !== u.index)
    )
      return !1;
  return !0;
}
function Rr(i) {
  if (Me(i)) return i.map(Rr);
  if (Ht(i)) {
    const e = Object.create(null),
      a = Object.keys(i),
      l = a.length;
    let r = 0;
    for (; r < l; ++r) e[a[r]] = Rr(i[a[r]]);
    return e;
  }
  return i;
}
function cb(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function cw(i, e, a, l) {
  if (!cb(i)) return;
  const r = e[i],
    u = a[i];
  Ht(r) && Ht(u) ? Nl(r, u, l) : (e[i] = Rr(u));
}
function Nl(i, e, a) {
  const l = Me(e) ? e : [e],
    r = l.length;
  if (!Ht(i)) return i;
  a = a || {};
  const u = a.merger || cw;
  let c;
  for (let h = 0; h < r; ++h) {
    if (((c = l[h]), !Ht(c))) continue;
    const p = Object.keys(c);
    for (let d = 0, m = p.length; d < m; ++d) u(p[d], i, c, a);
  }
  return i;
}
function kl(i, e) {
  return Nl(i, e, { merger: fw });
}
function fw(i, e, a) {
  if (!cb(i)) return;
  const l = e[i],
    r = a[i];
  Ht(l) && Ht(r)
    ? kl(l, r)
    : Object.prototype.hasOwnProperty.call(e, i) || (e[i] = Rr(r));
}
const Fm = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function hw(i) {
  const e = i.split("."),
    a = [];
  let l = "";
  for (const r of e)
    (l += r),
      l.endsWith("\\") ? (l = l.slice(0, -1) + ".") : (a.push(l), (l = ""));
  return a;
}
function dw(i) {
  const e = hw(i);
  return (a) => {
    for (const l of e) {
      if (l === "") break;
      a = a && a[l];
    }
    return a;
  };
}
function Br(i, e) {
  return (Fm[e] || (Fm[e] = dw(e)))(i);
}
function Wf(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Lr = (i) => typeof i < "u",
  Qi = (i) => typeof i == "function",
  qm = (i, e) => {
    if (i.size !== e.size) return !1;
    for (const a of i) if (!e.has(a)) return !1;
    return !0;
  };
function gw(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Oe = Math.PI,
  Nn = 2 * Oe,
  pw = Nn + Oe,
  jr = Number.POSITIVE_INFINITY,
  mw = Oe / 180,
  Tn = Oe / 2,
  ha = Oe / 4,
  Ym = (Oe * 2) / 3,
  fb = Math.log10,
  ps = Math.sign;
function Rl(i, e, a) {
  return Math.abs(i - e) < a;
}
function Vm(i) {
  const e = Math.round(i);
  i = Rl(i, e, i / 1e3) ? e : i;
  const a = Math.pow(10, Math.floor(fb(i))),
    l = i / a;
  return (l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : 10) * a;
}
function bw(i) {
  const e = [],
    a = Math.sqrt(i);
  let l;
  for (l = 1; l < a; l++) i % l === 0 && (e.push(l), e.push(i / l));
  return a === (a | 0) && e.push(a), e.sort((r, u) => r - u).pop(), e;
}
function yw(i) {
  return (
    typeof i == "symbol" ||
    (typeof i == "object" &&
      i !== null &&
      !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i))
  );
}
function Ul(i) {
  return !yw(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function vw(i, e) {
  const a = Math.round(i);
  return a - e <= i && a + e >= i;
}
function ww(i, e, a) {
  let l, r, u;
  for (l = 0, r = i.length; l < r; l++)
    (u = i[l][a]),
      isNaN(u) || ((e.min = Math.min(e.min, u)), (e.max = Math.max(e.max, u)));
}
function ya(i) {
  return i * (Oe / 180);
}
function _w(i) {
  return i * (180 / Oe);
}
function Gm(i) {
  if (!wn(i)) return;
  let e = 1,
    a = 0;
  for (; Math.round(i * e) / e !== i; ) (e *= 10), a++;
  return a;
}
function xw(i, e) {
  const a = e.x - i.x,
    l = e.y - i.y,
    r = Math.sqrt(a * a + l * l);
  let u = Math.atan2(l, a);
  return u < -0.5 * Oe && (u += Nn), { angle: u, distance: r };
}
function Hf(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function Sw(i, e) {
  return ((i - e + pw) % Nn) - Oe;
}
function Ni(i) {
  return ((i % Nn) + Nn) % Nn;
}
function hb(i, e, a, l) {
  const r = Ni(i),
    u = Ni(e),
    c = Ni(a),
    h = Ni(u - r),
    p = Ni(c - r),
    d = Ni(r - u),
    m = Ni(r - c);
  return r === u || r === c || (l && u === c) || (h > p && d < m);
}
function vn(i, e, a) {
  return Math.max(e, Math.min(a, i));
}
function Cw(i) {
  return vn(i, -32768, 32767);
}
function Ol(i, e, a, l = 1e-6) {
  return i >= Math.min(e, a) - l && i <= Math.max(e, a) + l;
}
function $f(i, e, a) {
  a = a || ((c) => i[c] < e);
  let l = i.length - 1,
    r = 0,
    u;
  for (; l - r > 1; ) (u = (r + l) >> 1), a(u) ? (r = u) : (l = u);
  return { lo: r, hi: l };
}
const va = (i, e, a, l) =>
    $f(
      i,
      a,
      l
        ? (r) => {
            const u = i[r][e];
            return u < a || (u === a && i[r + 1][e] === a);
          }
        : (r) => i[r][e] < a
    ),
  Ew = (i, e, a) => $f(i, a, (l) => i[l][e] >= a);
function Mw(i, e, a) {
  let l = 0,
    r = i.length;
  for (; l < r && i[l] < e; ) l++;
  for (; r > l && i[r - 1] > a; ) r--;
  return l > 0 || r < i.length ? i.slice(l, r) : i;
}
const db = ["push", "pop", "shift", "splice", "unshift"];
function Tw(i, e) {
  if (i._chartjs) {
    i._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    db.forEach((a) => {
      const l = "_onData" + Wf(a),
        r = i[a];
      Object.defineProperty(i, a, {
        configurable: !0,
        enumerable: !1,
        value(...u) {
          const c = r.apply(this, u);
          return (
            i._chartjs.listeners.forEach((h) => {
              typeof h[l] == "function" && h[l](...u);
            }),
            c
          );
        },
      });
    });
}
function Xm(i, e) {
  const a = i._chartjs;
  if (!a) return;
  const l = a.listeners,
    r = l.indexOf(e);
  r !== -1 && l.splice(r, 1),
    !(l.length > 0) &&
      (db.forEach((u) => {
        delete i[u];
      }),
      delete i._chartjs);
}
function Aw(i) {
  const e = new Set(i);
  return e.size === i.length ? i : Array.from(e);
}
const gb = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function pb(i, e) {
  let a = [],
    l = !1;
  return function (...r) {
    (a = r),
      l ||
        ((l = !0),
        gb.call(window, () => {
          (l = !1), i.apply(e, a);
        }));
  };
}
function Ow(i, e) {
  let a;
  return function (...l) {
    return (
      e ? (clearTimeout(a), (a = setTimeout(i, e, l))) : i.apply(this, l), e
    );
  };
}
const mb = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  tn = (i, e, a) => (i === "start" ? e : i === "end" ? a : (e + a) / 2),
  zw = (i, e, a, l) =>
    i === (l ? "left" : "right") ? a : i === "center" ? (e + a) / 2 : e;
function Dw(i, e, a) {
  const l = e.length;
  let r = 0,
    u = l;
  if (i._sorted) {
    const { iScale: c, vScale: h, _parsed: p } = i,
      d = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      m = c.axis,
      { min: b, max: _, minDefined: x, maxDefined: w } = c.getUserBounds();
    if (x) {
      if (
        ((r = Math.min(
          va(p, m, b).lo,
          a ? l : va(e, m, c.getPixelForValue(b)).lo
        )),
        d)
      ) {
        const M = p
          .slice(0, r + 1)
          .reverse()
          .findIndex((O) => !Pt(O[h.axis]));
        r -= Math.max(0, M);
      }
      r = vn(r, 0, l - 1);
    }
    if (w) {
      let M = Math.max(
        va(p, c.axis, _, !0).hi + 1,
        a ? 0 : va(e, m, c.getPixelForValue(_), !0).hi + 1
      );
      if (d) {
        const O = p.slice(M - 1).findIndex((E) => !Pt(E[h.axis]));
        M += Math.max(0, O);
      }
      u = vn(M, r, l) - r;
    } else u = l - r;
  }
  return { start: r, count: u };
}
function kw(i) {
  const { xScale: e, yScale: a, _scaleRanges: l } = i,
    r = { xmin: e.min, xmax: e.max, ymin: a.min, ymax: a.max };
  if (!l) return (i._scaleRanges = r), !0;
  const u =
    l.xmin !== e.min ||
    l.xmax !== e.max ||
    l.ymin !== a.min ||
    l.ymax !== a.max;
  return Object.assign(l, r), u;
}
const br = (i) => i === 0 || i === 1,
  Qm = (i, e, a) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - e) * Nn) / a)),
  Zm = (i, e, a) => Math.pow(2, -10 * i) * Math.sin(((i - e) * Nn) / a) + 1,
  Bl = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * Tn) + 1,
    easeOutSine: (i) => Math.sin(i * Tn),
    easeInOutSine: (i) => -0.5 * (Math.cos(Oe * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      br(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (br(i) ? i : Qm(i, 0.075, 0.3)),
    easeOutElastic: (i) => (br(i) ? i : Zm(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return br(i)
        ? i
        : i < 0.5
        ? 0.5 * Qm(i * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Zm(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let e = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((e *= 1.525) + 1) * i - e))
        : 0.5 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2);
    },
    easeInBounce: (i) => 1 - Bl.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? Bl.easeInBounce(i * 2) * 0.5
        : Bl.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Jf(i) {
  if (i && typeof i == "object") {
    const e = i.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Km(i) {
  return Jf(i) ? i : new Hl(i);
}
function Cf(i) {
  return Jf(i) ? i : new Hl(i).saturate(0.5).darken(0.1).hexString();
}
const Rw = ["x", "y", "borderWidth", "radius", "tension"],
  Bw = ["color", "borderColor", "backgroundColor"];
function Lw(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    i.set("animations", {
      colors: { type: "color", properties: Bw },
      numbers: { type: "number", properties: Rw },
    }),
    i.describe("animations", { _fallback: "animation" }),
    i.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    });
}
function jw(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Pm = new Map();
function Hw(i, e) {
  e = e || {};
  const a = i + JSON.stringify(e);
  let l = Pm.get(a);
  return l || ((l = new Intl.NumberFormat(i, e)), Pm.set(a, l)), l;
}
function bb(i, e, a) {
  return Hw(e, a).format(i);
}
const Nw = {
  values(i) {
    return Me(i) ? i : "" + i;
  },
  numeric(i, e, a) {
    if (i === 0) return "0";
    const l = this.chart.options.locale;
    let r,
      u = i;
    if (a.length > 1) {
      const d = Math.max(Math.abs(a[0].value), Math.abs(a[a.length - 1].value));
      (d < 1e-4 || d > 1e15) && (r = "scientific"), (u = Uw(i, a));
    }
    const c = fb(Math.abs(u)),
      h = isNaN(c) ? 1 : Math.max(Math.min(-1 * Math.floor(c), 20), 0),
      p = { notation: r, minimumFractionDigits: h, maximumFractionDigits: h };
    return Object.assign(p, this.options.ticks.format), bb(i, l, p);
  },
};
function Uw(i, e) {
  let a = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(a) >= 1 && i !== Math.floor(i) && (a = i - Math.floor(i)), a;
}
var yb = { formatters: Nw };
function Fw(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, a) => a.lineWidth,
      tickColor: (e, a) => a.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: yb.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    i.describe("scales", { _fallback: "scale" }),
    i.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const Sa = Object.create(null),
  Nf = Object.create(null);
function Ll(i, e) {
  if (!e) return i;
  const a = e.split(".");
  for (let l = 0, r = a.length; l < r; ++l) {
    const u = a[l];
    i = i[u] || (i[u] = Object.create(null));
  }
  return i;
}
function Ef(i, e, a) {
  return typeof e == "string" ? Nl(Ll(i, e), a) : Nl(Ll(i, ""), e);
}
class qw {
  constructor(e, a) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (l) => l.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (l, r) => Cf(r.backgroundColor)),
      (this.hoverBorderColor = (l, r) => Cf(r.borderColor)),
      (this.hoverColor = (l, r) => Cf(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(a);
  }
  set(e, a) {
    return Ef(this, e, a);
  }
  get(e) {
    return Ll(this, e);
  }
  describe(e, a) {
    return Ef(Nf, e, a);
  }
  override(e, a) {
    return Ef(Sa, e, a);
  }
  route(e, a, l, r) {
    const u = Ll(this, e),
      c = Ll(this, l),
      h = "_" + a;
    Object.defineProperties(u, {
      [h]: { value: u[a], writable: !0 },
      [a]: {
        enumerable: !0,
        get() {
          const p = this[h],
            d = c[r];
          return Ht(p) ? Object.assign({}, d, p) : At(p, d);
        },
        set(p) {
          this[h] = p;
        },
      },
    });
  }
  apply(e) {
    e.forEach((a) => a(this));
  }
}
var ue = new qw(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Lw, jw, Fw]
);
function Yw(i) {
  return !i || Pt(i.size) || Pt(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function Im(i, e, a, l, r) {
  let u = e[r];
  return (
    u || ((u = e[r] = i.measureText(r).width), a.push(r)), u > l && (l = u), l
  );
}
function da(i, e, a) {
  const l = i.currentDevicePixelRatio,
    r = a !== 0 ? Math.max(a / 2, 0.5) : 0;
  return Math.round((e - r) * l) / l + r;
}
function Wm(i, e) {
  (!e && !i) ||
    ((e = e || i.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, i.width, i.height),
    e.restore());
}
function Uf(i, e, a, l) {
  vb(i, e, a, l, null);
}
function vb(i, e, a, l, r) {
  let u, c, h, p, d, m, b, _;
  const x = e.pointStyle,
    w = e.rotation,
    M = e.radius;
  let O = (w || 0) * mw;
  if (
    x &&
    typeof x == "object" &&
    ((u = x.toString()),
    u === "[object HTMLImageElement]" || u === "[object HTMLCanvasElement]")
  ) {
    i.save(),
      i.translate(a, l),
      i.rotate(O),
      i.drawImage(x, -x.width / 2, -x.height / 2, x.width, x.height),
      i.restore();
    return;
  }
  if (!(isNaN(M) || M <= 0)) {
    switch ((i.beginPath(), x)) {
      default:
        r ? i.ellipse(a, l, r / 2, M, 0, 0, Nn) : i.arc(a, l, M, 0, Nn),
          i.closePath();
        break;
      case "triangle":
        (m = r ? r / 2 : M),
          i.moveTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          (O += Ym),
          i.lineTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          (O += Ym),
          i.lineTo(a + Math.sin(O) * m, l - Math.cos(O) * M),
          i.closePath();
        break;
      case "rectRounded":
        (d = M * 0.516),
          (p = M - d),
          (c = Math.cos(O + ha) * p),
          (b = Math.cos(O + ha) * (r ? r / 2 - d : p)),
          (h = Math.sin(O + ha) * p),
          (_ = Math.sin(O + ha) * (r ? r / 2 - d : p)),
          i.arc(a - b, l - h, d, O - Oe, O - Tn),
          i.arc(a + _, l - c, d, O - Tn, O),
          i.arc(a + b, l + h, d, O, O + Tn),
          i.arc(a - _, l + c, d, O + Tn, O + Oe),
          i.closePath();
        break;
      case "rect":
        if (!w) {
          (p = Math.SQRT1_2 * M),
            (m = r ? r / 2 : p),
            i.rect(a - m, l - p, 2 * m, 2 * p);
          break;
        }
        O += ha;
      case "rectRot":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (c = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (_ = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + _, l - c),
          i.lineTo(a + b, l + h),
          i.lineTo(a - _, l + c),
          i.closePath();
        break;
      case "crossRot":
        O += ha;
      case "cross":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (c = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (_ = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + _, l - c),
          i.lineTo(a - _, l + c);
        break;
      case "star":
        (b = Math.cos(O) * (r ? r / 2 : M)),
          (c = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (_ = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + _, l - c),
          i.lineTo(a - _, l + c),
          (O += ha),
          (b = Math.cos(O) * (r ? r / 2 : M)),
          (c = Math.cos(O) * M),
          (h = Math.sin(O) * M),
          (_ = Math.sin(O) * (r ? r / 2 : M)),
          i.moveTo(a - b, l - h),
          i.lineTo(a + b, l + h),
          i.moveTo(a + _, l - c),
          i.lineTo(a - _, l + c);
        break;
      case "line":
        (c = r ? r / 2 : Math.cos(O) * M),
          (h = Math.sin(O) * M),
          i.moveTo(a - c, l - h),
          i.lineTo(a + c, l + h);
        break;
      case "dash":
        i.moveTo(a, l),
          i.lineTo(a + Math.cos(O) * (r ? r / 2 : M), l + Math.sin(O) * M);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), e.borderWidth > 0 && i.stroke();
  }
}
function Fl(i, e, a) {
  return (
    (a = a || 0.5),
    !e ||
      (i &&
        i.x > e.left - a &&
        i.x < e.right + a &&
        i.y > e.top - a &&
        i.y < e.bottom + a)
  );
}
function th(i, e) {
  i.save(),
    i.beginPath(),
    i.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    i.clip();
}
function eh(i) {
  i.restore();
}
function Vw(i, e, a, l, r) {
  if (!e) return i.lineTo(a.x, a.y);
  if (r === "middle") {
    const u = (e.x + a.x) / 2;
    i.lineTo(u, e.y), i.lineTo(u, a.y);
  } else (r === "after") != !!l ? i.lineTo(e.x, a.y) : i.lineTo(a.x, e.y);
  i.lineTo(a.x, a.y);
}
function Gw(i, e, a, l) {
  if (!e) return i.lineTo(a.x, a.y);
  i.bezierCurveTo(
    l ? e.cp1x : e.cp2x,
    l ? e.cp1y : e.cp2y,
    l ? a.cp2x : a.cp1x,
    l ? a.cp2y : a.cp1y,
    a.x,
    a.y
  );
}
function Xw(i, e) {
  e.translation && i.translate(e.translation[0], e.translation[1]),
    Pt(e.rotation) || i.rotate(e.rotation),
    e.color && (i.fillStyle = e.color),
    e.textAlign && (i.textAlign = e.textAlign),
    e.textBaseline && (i.textBaseline = e.textBaseline);
}
function Qw(i, e, a, l, r) {
  if (r.strikethrough || r.underline) {
    const u = i.measureText(l),
      c = e - u.actualBoundingBoxLeft,
      h = e + u.actualBoundingBoxRight,
      p = a - u.actualBoundingBoxAscent,
      d = a + u.actualBoundingBoxDescent,
      m = r.strikethrough ? (p + d) / 2 : d;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = r.decorationWidth || 2),
      i.moveTo(c, m),
      i.lineTo(h, m),
      i.stroke();
  }
}
function Zw(i, e) {
  const a = i.fillStyle;
  (i.fillStyle = e.color),
    i.fillRect(e.left, e.top, e.width, e.height),
    (i.fillStyle = a);
}
function Hr(i, e, a, l, r, u = {}) {
  const c = Me(e) ? e : [e],
    h = u.strokeWidth > 0 && u.strokeColor !== "";
  let p, d;
  for (i.save(), i.font = r.string, Xw(i, u), p = 0; p < c.length; ++p)
    (d = c[p]),
      u.backdrop && Zw(i, u.backdrop),
      h &&
        (u.strokeColor && (i.strokeStyle = u.strokeColor),
        Pt(u.strokeWidth) || (i.lineWidth = u.strokeWidth),
        i.strokeText(d, a, l, u.maxWidth)),
      i.fillText(d, a, l, u.maxWidth),
      Qw(i, a, l, d, u),
      (l += Number(r.lineHeight));
  i.restore();
}
function Ff(i, e) {
  const { x: a, y: l, w: r, h: u, radius: c } = e;
  i.arc(a + c.topLeft, l + c.topLeft, c.topLeft, 1.5 * Oe, Oe, !0),
    i.lineTo(a, l + u - c.bottomLeft),
    i.arc(a + c.bottomLeft, l + u - c.bottomLeft, c.bottomLeft, Oe, Tn, !0),
    i.lineTo(a + r - c.bottomRight, l + u),
    i.arc(
      a + r - c.bottomRight,
      l + u - c.bottomRight,
      c.bottomRight,
      Tn,
      0,
      !0
    ),
    i.lineTo(a + r, l + c.topRight),
    i.arc(a + r - c.topRight, l + c.topRight, c.topRight, 0, -Tn, !0),
    i.lineTo(a + c.topLeft, l);
}
const Kw = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Pw = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Iw(i, e) {
  const a = ("" + i).match(Kw);
  if (!a || a[1] === "normal") return e * 1.2;
  switch (((i = +a[2]), a[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return e * i;
}
const Ww = (i) => +i || 0;
function wb(i, e) {
  const a = {},
    l = Ht(e),
    r = l ? Object.keys(e) : e,
    u = Ht(i) ? (l ? (c) => At(i[c], i[e[c]]) : (c) => i[c]) : () => i;
  for (const c of r) a[c] = Ww(u(c));
  return a;
}
function $w(i) {
  return wb(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function jl(i) {
  return wb(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function An(i) {
  const e = $w(i);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Ge(i, e) {
  (i = i || {}), (e = e || ue.font);
  let a = At(i.size, e.size);
  typeof a == "string" && (a = parseInt(a, 10));
  let l = At(i.style, e.style);
  l &&
    !("" + l).match(Pw) &&
    (console.warn('Invalid font style specified: "' + l + '"'), (l = void 0));
  const r = {
    family: At(i.family, e.family),
    lineHeight: Iw(At(i.lineHeight, e.lineHeight), a),
    size: a,
    style: l,
    weight: At(i.weight, e.weight),
    string: "",
  };
  return (r.string = Yw(r)), r;
}
function yr(i, e, a, l) {
  let r, u, c;
  for (r = 0, u = i.length; r < u; ++r)
    if (((c = i[r]), c !== void 0 && c !== void 0)) return c;
}
function Jw(i, e, a) {
  const { min: l, max: r } = i,
    u = uw(e, (r - l) / 2),
    c = (h, p) => (a && h === 0 ? 0 : h + p);
  return { min: c(l, -Math.abs(u)), max: c(r, u) };
}
function Ea(i, e) {
  return Object.assign(Object.create(i), e);
}
function nh(i, e = [""], a, l, r = () => i[0]) {
  const u = a || i;
  typeof l > "u" && (l = Cb("_fallback", i));
  const c = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: u,
    _fallback: l,
    _getTarget: r,
    override: (h) => nh([h, ...i], e, u, l),
  };
  return new Proxy(c, {
    deleteProperty(h, p) {
      return delete h[p], delete h._keys, delete i[0][p], !0;
    },
    get(h, p) {
      return xb(h, p, () => o_(p, e, i, h));
    },
    getOwnPropertyDescriptor(h, p) {
      return Reflect.getOwnPropertyDescriptor(h._scopes[0], p);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(h, p) {
      return Jm(h).includes(p);
    },
    ownKeys(h) {
      return Jm(h);
    },
    set(h, p, d) {
      const m = h._storage || (h._storage = r());
      return (h[p] = m[p] = d), delete h._keys, !0;
    },
  });
}
function ms(i, e, a, l) {
  const r = {
    _cacheable: !1,
    _proxy: i,
    _context: e,
    _subProxy: a,
    _stack: new Set(),
    _descriptors: _b(i, l),
    setContext: (u) => ms(i, u, a, l),
    override: (u) => ms(i.override(u), e, a, l),
  };
  return new Proxy(r, {
    deleteProperty(u, c) {
      return delete u[c], delete i[c], !0;
    },
    get(u, c, h) {
      return xb(u, c, () => e_(u, c, h));
    },
    getOwnPropertyDescriptor(u, c) {
      return u._descriptors.allKeys
        ? Reflect.has(i, c)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, c);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(u, c) {
      return Reflect.has(i, c);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(u, c, h) {
      return (i[c] = h), delete u[c], !0;
    },
  });
}
function _b(i, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: a = e.scriptable,
    _indexable: l = e.indexable,
    _allKeys: r = e.allKeys,
  } = i;
  return {
    allKeys: r,
    scriptable: a,
    indexable: l,
    isScriptable: Qi(a) ? a : () => a,
    isIndexable: Qi(l) ? l : () => l,
  };
}
const t_ = (i, e) => (i ? i + Wf(e) : e),
  ih = (i, e) =>
    Ht(e) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function xb(i, e, a) {
  if (Object.prototype.hasOwnProperty.call(i, e) || e === "constructor")
    return i[e];
  const l = a();
  return (i[e] = l), l;
}
function e_(i, e, a) {
  const { _proxy: l, _context: r, _subProxy: u, _descriptors: c } = i;
  let h = l[e];
  return (
    Qi(h) && c.isScriptable(e) && (h = n_(e, h, i, a)),
    Me(h) && h.length && (h = i_(e, h, i, c.isIndexable)),
    ih(e, h) && (h = ms(h, r, u && u[e], c)),
    h
  );
}
function n_(i, e, a, l) {
  const { _proxy: r, _context: u, _subProxy: c, _stack: h } = a;
  if (h.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(h).join("->") + "->" + i
    );
  h.add(i);
  let p = e(u, c || l);
  return h.delete(i), ih(i, p) && (p = ah(r._scopes, r, i, p)), p;
}
function i_(i, e, a, l) {
  const { _proxy: r, _context: u, _subProxy: c, _descriptors: h } = a;
  if (typeof u.index < "u" && l(i)) return e[u.index % e.length];
  if (Ht(e[0])) {
    const p = e,
      d = r._scopes.filter((m) => m !== p);
    e = [];
    for (const m of p) {
      const b = ah(d, r, i, m);
      e.push(ms(b, u, c && c[i], h));
    }
  }
  return e;
}
function Sb(i, e, a) {
  return Qi(i) ? i(e, a) : i;
}
const a_ = (i, e) => (i === !0 ? e : typeof i == "string" ? Br(e, i) : void 0);
function s_(i, e, a, l, r) {
  for (const u of e) {
    const c = a_(a, u);
    if (c) {
      i.add(c);
      const h = Sb(c._fallback, a, r);
      if (typeof h < "u" && h !== a && h !== l) return h;
    } else if (c === !1 && typeof l < "u" && a !== l) return null;
  }
  return !1;
}
function ah(i, e, a, l) {
  const r = e._rootScopes,
    u = Sb(e._fallback, a, l),
    c = [...i, ...r],
    h = new Set();
  h.add(l);
  let p = $m(h, c, a, u || a, l);
  return p === null ||
    (typeof u < "u" && u !== a && ((p = $m(h, c, u, p, l)), p === null))
    ? !1
    : nh(Array.from(h), [""], r, u, () => l_(e, a, l));
}
function $m(i, e, a, l, r) {
  for (; a; ) a = s_(i, e, a, l, r);
  return a;
}
function l_(i, e, a) {
  const l = i._getTarget();
  e in l || (l[e] = {});
  const r = l[e];
  return Me(r) && Ht(a) ? a : r || {};
}
function o_(i, e, a, l) {
  let r;
  for (const u of e)
    if (((r = Cb(t_(u, i), a)), typeof r < "u"))
      return ih(i, r) ? ah(a, l, i, r) : r;
}
function Cb(i, e) {
  for (const a of e) {
    if (!a) continue;
    const l = a[i];
    if (typeof l < "u") return l;
  }
}
function Jm(i) {
  let e = i._keys;
  return e || (e = i._keys = r_(i._scopes)), e;
}
function r_(i) {
  const e = new Set();
  for (const a of i)
    for (const l of Object.keys(a).filter((r) => !r.startsWith("_"))) e.add(l);
  return Array.from(e);
}
const u_ = Number.EPSILON || 1e-14,
  bs = (i, e) => e < i.length && !i[e].skip && i[e],
  Eb = (i) => (i === "x" ? "y" : "x");
function c_(i, e, a, l) {
  const r = i.skip ? e : i,
    u = e,
    c = a.skip ? e : a,
    h = Hf(u, r),
    p = Hf(c, u);
  let d = h / (h + p),
    m = p / (h + p);
  (d = isNaN(d) ? 0 : d), (m = isNaN(m) ? 0 : m);
  const b = l * d,
    _ = l * m;
  return {
    previous: { x: u.x - b * (c.x - r.x), y: u.y - b * (c.y - r.y) },
    next: { x: u.x + _ * (c.x - r.x), y: u.y + _ * (c.y - r.y) },
  };
}
function f_(i, e, a) {
  const l = i.length;
  let r,
    u,
    c,
    h,
    p,
    d = bs(i, 0);
  for (let m = 0; m < l - 1; ++m)
    if (((p = d), (d = bs(i, m + 1)), !(!p || !d))) {
      if (Rl(e[m], 0, u_)) {
        a[m] = a[m + 1] = 0;
        continue;
      }
      (r = a[m] / e[m]),
        (u = a[m + 1] / e[m]),
        (h = Math.pow(r, 2) + Math.pow(u, 2)),
        !(h <= 9) &&
          ((c = 3 / Math.sqrt(h)),
          (a[m] = r * c * e[m]),
          (a[m + 1] = u * c * e[m]));
    }
}
function h_(i, e, a = "x") {
  const l = Eb(a),
    r = i.length;
  let u,
    c,
    h,
    p = bs(i, 0);
  for (let d = 0; d < r; ++d) {
    if (((c = h), (h = p), (p = bs(i, d + 1)), !h)) continue;
    const m = h[a],
      b = h[l];
    c &&
      ((u = (m - c[a]) / 3),
      (h[`cp1${a}`] = m - u),
      (h[`cp1${l}`] = b - u * e[d])),
      p &&
        ((u = (p[a] - m) / 3),
        (h[`cp2${a}`] = m + u),
        (h[`cp2${l}`] = b + u * e[d]));
  }
}
function d_(i, e = "x") {
  const a = Eb(e),
    l = i.length,
    r = Array(l).fill(0),
    u = Array(l);
  let c,
    h,
    p,
    d = bs(i, 0);
  for (c = 0; c < l; ++c)
    if (((h = p), (p = d), (d = bs(i, c + 1)), !!p)) {
      if (d) {
        const m = d[e] - p[e];
        r[c] = m !== 0 ? (d[a] - p[a]) / m : 0;
      }
      u[c] = h
        ? d
          ? ps(r[c - 1]) !== ps(r[c])
            ? 0
            : (r[c - 1] + r[c]) / 2
          : r[c - 1]
        : r[c];
    }
  f_(i, r, u), h_(i, u, e);
}
function vr(i, e, a) {
  return Math.max(Math.min(i, a), e);
}
function g_(i, e) {
  let a,
    l,
    r,
    u,
    c,
    h = Fl(i[0], e);
  for (a = 0, l = i.length; a < l; ++a)
    (c = u),
      (u = h),
      (h = a < l - 1 && Fl(i[a + 1], e)),
      u &&
        ((r = i[a]),
        c &&
          ((r.cp1x = vr(r.cp1x, e.left, e.right)),
          (r.cp1y = vr(r.cp1y, e.top, e.bottom))),
        h &&
          ((r.cp2x = vr(r.cp2x, e.left, e.right)),
          (r.cp2y = vr(r.cp2y, e.top, e.bottom))));
}
function p_(i, e, a, l, r) {
  let u, c, h, p;
  if (
    (e.spanGaps && (i = i.filter((d) => !d.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    d_(i, r);
  else {
    let d = l ? i[i.length - 1] : i[0];
    for (u = 0, c = i.length; u < c; ++u)
      (h = i[u]),
        (p = c_(d, h, i[Math.min(u + 1, c - (l ? 0 : 1)) % c], e.tension)),
        (h.cp1x = p.previous.x),
        (h.cp1y = p.previous.y),
        (h.cp2x = p.next.x),
        (h.cp2y = p.next.y),
        (d = h);
  }
  e.capBezierPoints && g_(i, a);
}
function sh() {
  return typeof window < "u" && typeof document < "u";
}
function lh(i) {
  let e = i.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Nr(i, e, a) {
  let l;
  return (
    typeof i == "string"
      ? ((l = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (l = (l / 100) * e.parentNode[a]))
      : (l = i),
    l
  );
}
const Pr = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function m_(i, e) {
  return Pr(i).getPropertyValue(e);
}
const b_ = ["top", "right", "bottom", "left"];
function _a(i, e, a) {
  const l = {};
  a = a ? "-" + a : "";
  for (let r = 0; r < 4; r++) {
    const u = b_[r];
    l[u] = parseFloat(i[e + "-" + u + a]) || 0;
  }
  return (l.width = l.left + l.right), (l.height = l.top + l.bottom), l;
}
const y_ = (i, e, a) => (i > 0 || e > 0) && (!a || !a.shadowRoot);
function v_(i, e) {
  const a = i.touches,
    l = a && a.length ? a[0] : i,
    { offsetX: r, offsetY: u } = l;
  let c = !1,
    h,
    p;
  if (y_(r, u, i.target)) (h = r), (p = u);
  else {
    const d = e.getBoundingClientRect();
    (h = l.clientX - d.left), (p = l.clientY - d.top), (c = !0);
  }
  return { x: h, y: p, box: c };
}
function ma(i, e) {
  if ("native" in i) return i;
  const { canvas: a, currentDevicePixelRatio: l } = e,
    r = Pr(a),
    u = r.boxSizing === "border-box",
    c = _a(r, "padding"),
    h = _a(r, "border", "width"),
    { x: p, y: d, box: m } = v_(i, a),
    b = c.left + (m && h.left),
    _ = c.top + (m && h.top);
  let { width: x, height: w } = e;
  return (
    u && ((x -= c.width + h.width), (w -= c.height + h.height)),
    {
      x: Math.round((((p - b) / x) * a.width) / l),
      y: Math.round((((d - _) / w) * a.height) / l),
    }
  );
}
function w_(i, e, a) {
  let l, r;
  if (e === void 0 || a === void 0) {
    const u = i && lh(i);
    if (!u) (e = i.clientWidth), (a = i.clientHeight);
    else {
      const c = u.getBoundingClientRect(),
        h = Pr(u),
        p = _a(h, "border", "width"),
        d = _a(h, "padding");
      (e = c.width - d.width - p.width),
        (a = c.height - d.height - p.height),
        (l = Nr(h.maxWidth, u, "clientWidth")),
        (r = Nr(h.maxHeight, u, "clientHeight"));
    }
  }
  return { width: e, height: a, maxWidth: l || jr, maxHeight: r || jr };
}
const Fi = (i) => Math.round(i * 10) / 10;
function __(i, e, a, l) {
  const r = Pr(i),
    u = _a(r, "margin"),
    c = Nr(r.maxWidth, i, "clientWidth") || jr,
    h = Nr(r.maxHeight, i, "clientHeight") || jr,
    p = w_(i, e, a);
  let { width: d, height: m } = p;
  if (r.boxSizing === "content-box") {
    const _ = _a(r, "border", "width"),
      x = _a(r, "padding");
    (d -= x.width + _.width), (m -= x.height + _.height);
  }
  return (
    (d = Math.max(0, d - u.width)),
    (m = Math.max(0, l ? d / l : m - u.height)),
    (d = Fi(Math.min(d, c, p.maxWidth))),
    (m = Fi(Math.min(m, h, p.maxHeight))),
    d && !m && (m = Fi(d / 2)),
    (e !== void 0 || a !== void 0) &&
      l &&
      p.height &&
      m > p.height &&
      ((m = p.height), (d = Fi(Math.floor(m * l)))),
    { width: d, height: m }
  );
}
function t0(i, e, a) {
  const l = e || 1,
    r = Fi(i.height * l),
    u = Fi(i.width * l);
  (i.height = Fi(i.height)), (i.width = Fi(i.width));
  const c = i.canvas;
  return (
    c.style &&
      (a || (!c.style.height && !c.style.width)) &&
      ((c.style.height = `${i.height}px`), (c.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== l || c.height !== r || c.width !== u
      ? ((i.currentDevicePixelRatio = l),
        (c.height = r),
        (c.width = u),
        i.ctx.setTransform(l, 0, 0, l, 0, 0),
        !0)
      : !1
  );
}
const x_ = (function () {
  let i = !1;
  try {
    const e = {
      get passive() {
        return (i = !0), !1;
      },
    };
    sh() &&
      (window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e));
  } catch {}
  return i;
})();
function e0(i, e) {
  const a = m_(i, e),
    l = a && a.match(/^(\d+)(\.\d+)?px$/);
  return l ? +l[1] : void 0;
}
function ba(i, e, a, l) {
  return { x: i.x + a * (e.x - i.x), y: i.y + a * (e.y - i.y) };
}
function S_(i, e, a, l) {
  return {
    x: i.x + a * (e.x - i.x),
    y:
      l === "middle"
        ? a < 0.5
          ? i.y
          : e.y
        : l === "after"
        ? a < 1
          ? i.y
          : e.y
        : a > 0
        ? e.y
        : i.y,
  };
}
function C_(i, e, a, l) {
  const r = { x: i.cp2x, y: i.cp2y },
    u = { x: e.cp1x, y: e.cp1y },
    c = ba(i, r, a),
    h = ba(r, u, a),
    p = ba(u, e, a),
    d = ba(c, h, a),
    m = ba(h, p, a);
  return ba(d, m, a);
}
const E_ = function (i, e) {
    return {
      x(a) {
        return i + i + e - a;
      },
      setWidth(a) {
        e = a;
      },
      textAlign(a) {
        return a === "center" ? a : a === "right" ? "left" : "right";
      },
      xPlus(a, l) {
        return a - l;
      },
      leftForLtr(a, l) {
        return a - l;
      },
    };
  },
  M_ = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, e) {
        return i + e;
      },
      leftForLtr(i, e) {
        return i;
      },
    };
  };
function ds(i, e, a) {
  return i ? E_(e, a) : M_();
}
function Mb(i, e) {
  let a, l;
  (e === "ltr" || e === "rtl") &&
    ((a = i.canvas.style),
    (l = [a.getPropertyValue("direction"), a.getPropertyPriority("direction")]),
    a.setProperty("direction", e, "important"),
    (i.prevTextDirection = l));
}
function Tb(i, e) {
  e !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", e[0], e[1]));
}
function Ab(i) {
  return i === "angle"
    ? { between: hb, compare: Sw, normalize: Ni }
    : { between: Ol, compare: (e, a) => e - a, normalize: (e) => e };
}
function n0({ start: i, end: e, count: a, loop: l, style: r }) {
  return {
    start: i % a,
    end: e % a,
    loop: l && (e - i + 1) % a === 0,
    style: r,
  };
}
function T_(i, e, a) {
  const { property: l, start: r, end: u } = a,
    { between: c, normalize: h } = Ab(l),
    p = e.length;
  let { start: d, end: m, loop: b } = i,
    _,
    x;
  if (b) {
    for (d += p, m += p, _ = 0, x = p; _ < x && c(h(e[d % p][l]), r, u); ++_)
      d--, m--;
    (d %= p), (m %= p);
  }
  return m < d && (m += p), { start: d, end: m, loop: b, style: i.style };
}
function A_(i, e, a) {
  if (!a) return [i];
  const { property: l, start: r, end: u } = a,
    c = e.length,
    { compare: h, between: p, normalize: d } = Ab(l),
    { start: m, end: b, loop: _, style: x } = T_(i, e, a),
    w = [];
  let M = !1,
    O = null,
    E,
    tt,
    I;
  const $ = () => p(r, I, E) && h(r, I) !== 0,
    j = () => h(u, E) === 0 || p(u, I, E),
    J = () => M || $(),
    T = () => !M || j();
  for (let S = m, v = m; S <= b; ++S)
    (tt = e[S % c]),
      !tt.skip &&
        ((E = d(tt[l])),
        E !== I &&
          ((M = p(E, r, u)),
          O === null && J() && (O = h(E, r) === 0 ? S : v),
          O !== null &&
            T() &&
            (w.push(n0({ start: O, end: S, loop: _, count: c, style: x })),
            (O = null)),
          (v = S),
          (I = E)));
  return (
    O !== null && w.push(n0({ start: O, end: b, loop: _, count: c, style: x })),
    w
  );
}
function O_(i, e) {
  const a = [],
    l = i.segments;
  for (let r = 0; r < l.length; r++) {
    const u = A_(l[r], i.points, e);
    u.length && a.push(...u);
  }
  return a;
}
function z_(i, e, a, l) {
  let r = 0,
    u = e - 1;
  if (a && !l) for (; r < e && !i[r].skip; ) r++;
  for (; r < e && i[r].skip; ) r++;
  for (r %= e, a && (u += r); u > r && i[u % e].skip; ) u--;
  return (u %= e), { start: r, end: u };
}
function D_(i, e, a, l) {
  const r = i.length,
    u = [];
  let c = e,
    h = i[e],
    p;
  for (p = e + 1; p <= a; ++p) {
    const d = i[p % r];
    d.skip || d.stop
      ? h.skip ||
        ((l = !1),
        u.push({ start: e % r, end: (p - 1) % r, loop: l }),
        (e = c = d.stop ? p : null))
      : ((c = p), h.skip && (e = p)),
      (h = d);
  }
  return c !== null && u.push({ start: e % r, end: c % r, loop: l }), u;
}
function k_(i, e) {
  const a = i.points,
    l = i.options.spanGaps,
    r = a.length;
  if (!r) return [];
  const u = !!i._loop,
    { start: c, end: h } = z_(a, r, u, l);
  if (l === !0) return i0(i, [{ start: c, end: h, loop: u }], a, e);
  const p = h < c ? h + r : h,
    d = !!i._fullLoop && c === 0 && h === r - 1;
  return i0(i, D_(a, c, p, d), a, e);
}
function i0(i, e, a, l) {
  return !l || !l.setContext || !a ? e : R_(i, e, a, l);
}
function R_(i, e, a, l) {
  const r = i._chart.getContext(),
    u = a0(i.options),
    {
      _datasetIndex: c,
      options: { spanGaps: h },
    } = i,
    p = a.length,
    d = [];
  let m = u,
    b = e[0].start,
    _ = b;
  function x(w, M, O, E) {
    const tt = h ? -1 : 1;
    if (w !== M) {
      for (w += p; a[w % p].skip; ) w -= tt;
      for (; a[M % p].skip; ) M += tt;
      w % p !== M % p &&
        (d.push({ start: w % p, end: M % p, loop: O, style: E }),
        (m = E),
        (b = M % p));
    }
  }
  for (const w of e) {
    b = h ? b : w.start;
    let M = a[b % p],
      O;
    for (_ = b + 1; _ <= w.end; _++) {
      const E = a[_ % p];
      (O = a0(
        l.setContext(
          Ea(r, {
            type: "segment",
            p0: M,
            p1: E,
            p0DataIndex: (_ - 1) % p,
            p1DataIndex: _ % p,
            datasetIndex: c,
          })
        )
      )),
        B_(O, m) && x(b, _ - 1, w.loop, m),
        (M = E),
        (m = O);
    }
    b < _ - 1 && x(b, _ - 1, w.loop, m);
  }
  return d;
}
function a0(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function B_(i, e) {
  if (!e) return !1;
  const a = [],
    l = function (r, u) {
      return Jf(u) ? (a.includes(u) || a.push(u), a.indexOf(u)) : u;
    };
  return JSON.stringify(i, l) !== JSON.stringify(e, l);
}
function wr(i, e, a) {
  return i.options.clip ? i[a] : e[a];
}
function L_(i, e) {
  const { xScale: a, yScale: l } = i;
  return a && l
    ? {
        left: wr(a, e, "left"),
        right: wr(a, e, "right"),
        top: wr(l, e, "top"),
        bottom: wr(l, e, "bottom"),
      }
    : e;
}
function j_(i, e) {
  const a = e._clip;
  if (a.disabled) return !1;
  const l = L_(e, i.chartArea);
  return {
    left: a.left === !1 ? 0 : l.left - (a.left === !0 ? 0 : a.left),
    right: a.right === !1 ? i.width : l.right + (a.right === !0 ? 0 : a.right),
    top: a.top === !1 ? 0 : l.top - (a.top === !0 ? 0 : a.top),
    bottom:
      a.bottom === !1 ? i.height : l.bottom + (a.bottom === !0 ? 0 : a.bottom),
  };
}
class H_ {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, a, l, r) {
    const u = a.listeners[r],
      c = a.duration;
    u.forEach((h) =>
      h({
        chart: e,
        initial: a.initial,
        numSteps: c,
        currentStep: Math.min(l - a.start, c),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = gb.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let a = 0;
    this._charts.forEach((l, r) => {
      if (!l.running || !l.items.length) return;
      const u = l.items;
      let c = u.length - 1,
        h = !1,
        p;
      for (; c >= 0; --c)
        (p = u[c]),
          p._active
            ? (p._total > l.duration && (l.duration = p._total),
              p.tick(e),
              (h = !0))
            : ((u[c] = u[u.length - 1]), u.pop());
      h && (r.draw(), this._notify(r, l, e, "progress")),
        u.length ||
          ((l.running = !1),
          this._notify(r, l, e, "complete"),
          (l.initial = !1)),
        (a += u.length);
    }),
      (this._lastDate = e),
      a === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const a = this._charts;
    let l = a.get(e);
    return (
      l ||
        ((l = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        a.set(e, l)),
      l
    );
  }
  listen(e, a, l) {
    this._getAnims(e).listeners[a].push(l);
  }
  add(e, a) {
    !a || !a.length || this._getAnims(e).items.push(...a);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const a = this._charts.get(e);
    a &&
      ((a.running = !0),
      (a.start = Date.now()),
      (a.duration = a.items.reduce((l, r) => Math.max(l, r._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const a = this._charts.get(e);
    return !(!a || !a.running || !a.items.length);
  }
  stop(e) {
    const a = this._charts.get(e);
    if (!a || !a.items.length) return;
    const l = a.items;
    let r = l.length - 1;
    for (; r >= 0; --r) l[r].cancel();
    (a.items = []), this._notify(e, a, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var li = new H_();
const s0 = "transparent",
  N_ = {
    boolean(i, e, a) {
      return a > 0.5 ? e : i;
    },
    color(i, e, a) {
      const l = Km(i || s0),
        r = l.valid && Km(e || s0);
      return r && r.valid ? r.mix(l, a).hexString() : e;
    },
    number(i, e, a) {
      return i + (e - i) * a;
    },
  };
class U_ {
  constructor(e, a, l, r) {
    const u = a[l];
    r = yr([e.to, r, u, e.from]);
    const c = yr([e.from, u, r]);
    (this._active = !0),
      (this._fn = e.fn || N_[e.type || typeof c]),
      (this._easing = Bl[e.easing] || Bl.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = a),
      (this._prop = l),
      (this._from = c),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, a, l) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        u = l - this._start,
        c = this._duration - u;
      (this._start = l),
        (this._duration = Math.floor(Math.max(c, e.duration))),
        (this._total += u),
        (this._loop = !!e.loop),
        (this._to = yr([e.to, a, r, e.from])),
        (this._from = yr([e.from, r, a]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const a = e - this._start,
      l = this._duration,
      r = this._prop,
      u = this._from,
      c = this._loop,
      h = this._to;
    let p;
    if (((this._active = u !== h && (c || a < l)), !this._active)) {
      (this._target[r] = h), this._notify(!0);
      return;
    }
    if (a < 0) {
      this._target[r] = u;
      return;
    }
    (p = (a / l) % 2),
      (p = c && p > 1 ? 2 - p : p),
      (p = this._easing(Math.min(1, Math.max(0, p)))),
      (this._target[r] = this._fn(u, h, p));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((a, l) => {
      e.push({ res: a, rej: l });
    });
  }
  _notify(e) {
    const a = e ? "res" : "rej",
      l = this._promises || [];
    for (let r = 0; r < l.length; r++) l[r][a]();
  }
}
class Ob {
  constructor(e, a) {
    (this._chart = e), (this._properties = new Map()), this.configure(a);
  }
  configure(e) {
    if (!Ht(e)) return;
    const a = Object.keys(ue.animation),
      l = this._properties;
    Object.getOwnPropertyNames(e).forEach((r) => {
      const u = e[r];
      if (!Ht(u)) return;
      const c = {};
      for (const h of a) c[h] = u[h];
      ((Me(u.properties) && u.properties) || [r]).forEach((h) => {
        (h === r || !l.has(h)) && l.set(h, c);
      });
    });
  }
  _animateOptions(e, a) {
    const l = a.options,
      r = q_(e, l);
    if (!r) return [];
    const u = this._createAnimations(r, l);
    return (
      l.$shared &&
        F_(e.options.$animations, l).then(
          () => {
            e.options = l;
          },
          () => {}
        ),
      u
    );
  }
  _createAnimations(e, a) {
    const l = this._properties,
      r = [],
      u = e.$animations || (e.$animations = {}),
      c = Object.keys(a),
      h = Date.now();
    let p;
    for (p = c.length - 1; p >= 0; --p) {
      const d = c[p];
      if (d.charAt(0) === "$") continue;
      if (d === "options") {
        r.push(...this._animateOptions(e, a));
        continue;
      }
      const m = a[d];
      let b = u[d];
      const _ = l.get(d);
      if (b)
        if (_ && b.active()) {
          b.update(_, m, h);
          continue;
        } else b.cancel();
      if (!_ || !_.duration) {
        e[d] = m;
        continue;
      }
      (u[d] = b = new U_(_, e, d, m)), r.push(b);
    }
    return r;
  }
  update(e, a) {
    if (this._properties.size === 0) {
      Object.assign(e, a);
      return;
    }
    const l = this._createAnimations(e, a);
    if (l.length) return li.add(this._chart, l), !0;
  }
}
function F_(i, e) {
  const a = [],
    l = Object.keys(e);
  for (let r = 0; r < l.length; r++) {
    const u = i[l[r]];
    u && u.active() && a.push(u.wait());
  }
  return Promise.all(a);
}
function q_(i, e) {
  if (!e) return;
  let a = i.options;
  if (!a) {
    i.options = e;
    return;
  }
  return (
    a.$shared &&
      (i.options = a = Object.assign({}, a, { $shared: !1, $animations: {} })),
    a
  );
}
function l0(i, e) {
  const a = (i && i.options) || {},
    l = a.reverse,
    r = a.min === void 0 ? e : 0,
    u = a.max === void 0 ? e : 0;
  return { start: l ? u : r, end: l ? r : u };
}
function Y_(i, e, a) {
  if (a === !1) return !1;
  const l = l0(i, a),
    r = l0(e, a);
  return { top: r.end, right: l.end, bottom: r.start, left: l.start };
}
function V_(i) {
  let e, a, l, r;
  return (
    Ht(i)
      ? ((e = i.top), (a = i.right), (l = i.bottom), (r = i.left))
      : (e = a = l = r = i),
    { top: e, right: a, bottom: l, left: r, disabled: i === !1 }
  );
}
function zb(i, e) {
  const a = [],
    l = i._getSortedDatasetMetas(e);
  let r, u;
  for (r = 0, u = l.length; r < u; ++r) a.push(l[r].index);
  return a;
}
function o0(i, e, a, l = {}) {
  const r = i.keys,
    u = l.mode === "single";
  let c, h, p, d;
  if (e === null) return;
  let m = !1;
  for (c = 0, h = r.length; c < h; ++c) {
    if (((p = +r[c]), p === a)) {
      if (((m = !0), l.all)) continue;
      break;
    }
    (d = i.values[p]), wn(d) && (u || e === 0 || ps(e) === ps(d)) && (e += d);
  }
  return !m && !l.all ? 0 : e;
}
function G_(i, e) {
  const { iScale: a, vScale: l } = e,
    r = a.axis === "x" ? "x" : "y",
    u = l.axis === "x" ? "x" : "y",
    c = Object.keys(i),
    h = new Array(c.length);
  let p, d, m;
  for (p = 0, d = c.length; p < d; ++p)
    (m = c[p]), (h[p] = { [r]: m, [u]: i[m] });
  return h;
}
function Mf(i, e) {
  const a = i && i.options.stacked;
  return a || (a === void 0 && e.stack !== void 0);
}
function X_(i, e, a) {
  return `${i.id}.${e.id}.${a.stack || a.type}`;
}
function Q_(i) {
  const { min: e, max: a, minDefined: l, maxDefined: r } = i.getUserBounds();
  return {
    min: l ? e : Number.NEGATIVE_INFINITY,
    max: r ? a : Number.POSITIVE_INFINITY,
  };
}
function Z_(i, e, a) {
  const l = i[e] || (i[e] = {});
  return l[a] || (l[a] = {});
}
function r0(i, e, a, l) {
  for (const r of e.getMatchingVisibleMetas(l).reverse()) {
    const u = i[r.index];
    if ((a && u > 0) || (!a && u < 0)) return r.index;
  }
  return null;
}
function u0(i, e) {
  const { chart: a, _cachedMeta: l } = i,
    r = a._stacks || (a._stacks = {}),
    { iScale: u, vScale: c, index: h } = l,
    p = u.axis,
    d = c.axis,
    m = X_(u, c, l),
    b = e.length;
  let _;
  for (let x = 0; x < b; ++x) {
    const w = e[x],
      { [p]: M, [d]: O } = w,
      E = w._stacks || (w._stacks = {});
    (_ = E[d] = Z_(r, m, M)),
      (_[h] = O),
      (_._top = r0(_, c, !0, l.type)),
      (_._bottom = r0(_, c, !1, l.type));
    const tt = _._visualValues || (_._visualValues = {});
    tt[h] = O;
  }
}
function Tf(i, e) {
  const a = i.scales;
  return Object.keys(a)
    .filter((l) => a[l].axis === e)
    .shift();
}
function K_(i, e) {
  return Ea(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function P_(i, e, a) {
  return Ea(i, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: a,
    index: e,
    mode: "default",
    type: "data",
  });
}
function Sl(i, e) {
  const a = i.controller.index,
    l = i.vScale && i.vScale.axis;
  if (l) {
    e = e || i._parsed;
    for (const r of e) {
      const u = r._stacks;
      if (!u || u[l] === void 0 || u[l][a] === void 0) return;
      delete u[l][a],
        u[l]._visualValues !== void 0 &&
          u[l]._visualValues[a] !== void 0 &&
          delete u[l]._visualValues[a];
    }
  }
}
const Af = (i) => i === "reset" || i === "none",
  c0 = (i, e) => (e ? i : Object.assign({}, i)),
  I_ = (i, e, a) =>
    i && !e.hidden && e._stacked && { keys: zb(a, !0), values: null };
class Db {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(e, a) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = a),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = Mf(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && Sl(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      a = this._cachedMeta,
      l = this.getDataset(),
      r = (b, _, x, w) => (b === "x" ? _ : b === "r" ? w : x),
      u = (a.xAxisID = At(l.xAxisID, Tf(e, "x"))),
      c = (a.yAxisID = At(l.yAxisID, Tf(e, "y"))),
      h = (a.rAxisID = At(l.rAxisID, Tf(e, "r"))),
      p = a.indexAxis,
      d = (a.iAxisID = r(p, u, c, h)),
      m = (a.vAxisID = r(p, c, u, h));
    (a.xScale = this.getScaleForId(u)),
      (a.yScale = this.getScaleForId(c)),
      (a.rScale = this.getScaleForId(h)),
      (a.iScale = this.getScaleForId(d)),
      (a.vScale = this.getScaleForId(m));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const a = this._cachedMeta;
    return e === a.iScale ? a.vScale : a.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Xm(this._data, this), e._stacked && Sl(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      a = e.data || (e.data = []),
      l = this._data;
    if (Ht(a)) {
      const r = this._cachedMeta;
      this._data = G_(a, r);
    } else if (l !== a) {
      if (l) {
        Xm(l, this);
        const r = this._cachedMeta;
        Sl(r), (r._parsed = []);
      }
      a && Object.isExtensible(a) && Tw(a, this),
        (this._syncList = []),
        (this._data = a);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const a = this._cachedMeta,
      l = this.getDataset();
    let r = !1;
    this._dataCheck();
    const u = a._stacked;
    (a._stacked = Mf(a.vScale, a)),
      a.stack !== l.stack && ((r = !0), Sl(a), (a.stack = l.stack)),
      this._resyncElements(e),
      (r || u !== a._stacked) &&
        (u0(this, a._parsed), (a._stacked = Mf(a.vScale, a)));
  }
  configure() {
    const e = this.chart.config,
      a = e.datasetScopeKeys(this._type),
      l = e.getOptionScopes(this.getDataset(), a, !0);
    (this.options = e.createResolver(l, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, a) {
    const { _cachedMeta: l, _data: r } = this,
      { iScale: u, _stacked: c } = l,
      h = u.axis;
    let p = e === 0 && a === r.length ? !0 : l._sorted,
      d = e > 0 && l._parsed[e - 1],
      m,
      b,
      _;
    if (this._parsing === !1) (l._parsed = r), (l._sorted = !0), (_ = r);
    else {
      Me(r[e])
        ? (_ = this.parseArrayData(l, r, e, a))
        : Ht(r[e])
        ? (_ = this.parseObjectData(l, r, e, a))
        : (_ = this.parsePrimitiveData(l, r, e, a));
      const x = () => b[h] === null || (d && b[h] < d[h]);
      for (m = 0; m < a; ++m)
        (l._parsed[m + e] = b = _[m]), p && (x() && (p = !1), (d = b));
      l._sorted = p;
    }
    c && u0(this, _);
  }
  parsePrimitiveData(e, a, l, r) {
    const { iScale: u, vScale: c } = e,
      h = u.axis,
      p = c.axis,
      d = u.getLabels(),
      m = u === c,
      b = new Array(r);
    let _, x, w;
    for (_ = 0, x = r; _ < x; ++_)
      (w = _ + l),
        (b[_] = { [h]: m || u.parse(d[w], w), [p]: c.parse(a[w], w) });
    return b;
  }
  parseArrayData(e, a, l, r) {
    const { xScale: u, yScale: c } = e,
      h = new Array(r);
    let p, d, m, b;
    for (p = 0, d = r; p < d; ++p)
      (m = p + l),
        (b = a[m]),
        (h[p] = { x: u.parse(b[0], m), y: c.parse(b[1], m) });
    return h;
  }
  parseObjectData(e, a, l, r) {
    const { xScale: u, yScale: c } = e,
      { xAxisKey: h = "x", yAxisKey: p = "y" } = this._parsing,
      d = new Array(r);
    let m, b, _, x;
    for (m = 0, b = r; m < b; ++m)
      (_ = m + l),
        (x = a[_]),
        (d[m] = { x: u.parse(Br(x, h), _), y: c.parse(Br(x, p), _) });
    return d;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, a, l) {
    const r = this.chart,
      u = this._cachedMeta,
      c = a[e.axis],
      h = { keys: zb(r, !0), values: a._stacks[e.axis]._visualValues };
    return o0(h, c, u.index, { mode: l });
  }
  updateRangeFromParsed(e, a, l, r) {
    const u = l[a.axis];
    let c = u === null ? NaN : u;
    const h = r && l._stacks[a.axis];
    r && h && ((r.values = h), (c = o0(r, u, this._cachedMeta.index))),
      (e.min = Math.min(e.min, c)),
      (e.max = Math.max(e.max, c));
  }
  getMinMax(e, a) {
    const l = this._cachedMeta,
      r = l._parsed,
      u = l._sorted && e === l.iScale,
      c = r.length,
      h = this._getOtherScale(e),
      p = I_(a, l, this.chart),
      d = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: m, max: b } = Q_(h);
    let _, x;
    function w() {
      x = r[_];
      const M = x[h.axis];
      return !wn(x[e.axis]) || m > M || b < M;
    }
    for (
      _ = 0;
      _ < c && !(!w() && (this.updateRangeFromParsed(d, e, x, p), u));
      ++_
    );
    if (u) {
      for (_ = c - 1; _ >= 0; --_)
        if (!w()) {
          this.updateRangeFromParsed(d, e, x, p);
          break;
        }
    }
    return d;
  }
  getAllParsedValues(e) {
    const a = this._cachedMeta._parsed,
      l = [];
    let r, u, c;
    for (r = 0, u = a.length; r < u; ++r)
      (c = a[r][e.axis]), wn(c) && l.push(c);
    return l;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const a = this._cachedMeta,
      l = a.iScale,
      r = a.vScale,
      u = this.getParsed(e);
    return {
      label: l ? "" + l.getLabelForValue(u[l.axis]) : "",
      value: r ? "" + r.getLabelForValue(u[r.axis]) : "",
    };
  }
  _update(e) {
    const a = this._cachedMeta;
    this.update(e || "default"),
      (a._clip = V_(
        At(this.options.clip, Y_(a.xScale, a.yScale, this.getMaxOverflow()))
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      a = this.chart,
      l = this._cachedMeta,
      r = l.data || [],
      u = a.chartArea,
      c = [],
      h = this._drawStart || 0,
      p = this._drawCount || r.length - h,
      d = this.options.drawActiveElementsOnTop;
    let m;
    for (l.dataset && l.dataset.draw(e, u, h, p), m = h; m < h + p; ++m) {
      const b = r[m];
      b.hidden || (b.active && d ? c.push(b) : b.draw(e, u));
    }
    for (m = 0; m < c.length; ++m) c[m].draw(e, u);
  }
  getStyle(e, a) {
    const l = a ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(l)
      : this.resolveDataElementOptions(e || 0, l);
  }
  getContext(e, a, l) {
    const r = this.getDataset();
    let u;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const c = this._cachedMeta.data[e];
      (u = c.$context || (c.$context = P_(this.getContext(), e, c))),
        (u.parsed = this.getParsed(e)),
        (u.raw = r.data[e]),
        (u.index = u.dataIndex = e);
    } else
      (u =
        this.$context ||
        (this.$context = K_(this.chart.getContext(), this.index))),
        (u.dataset = r),
        (u.index = u.datasetIndex = this.index);
    return (u.active = !!a), (u.mode = l), u;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, a) {
    return this._resolveElementOptions(this.dataElementType.id, a, e);
  }
  _resolveElementOptions(e, a = "default", l) {
    const r = a === "active",
      u = this._cachedDataOpts,
      c = e + "-" + a,
      h = u[c],
      p = this.enableOptionSharing && Lr(l);
    if (h) return c0(h, p);
    const d = this.chart.config,
      m = d.datasetElementScopeKeys(this._type, e),
      b = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      _ = d.getOptionScopes(this.getDataset(), m),
      x = Object.keys(ue.elements[e]),
      w = () => this.getContext(l, r, a),
      M = d.resolveNamedOptions(_, x, w, b);
    return M.$shared && ((M.$shared = p), (u[c] = Object.freeze(c0(M, p)))), M;
  }
  _resolveAnimations(e, a, l) {
    const r = this.chart,
      u = this._cachedDataOpts,
      c = `animation-${a}`,
      h = u[c];
    if (h) return h;
    let p;
    if (r.options.animation !== !1) {
      const m = this.chart.config,
        b = m.datasetAnimationScopeKeys(this._type, a),
        _ = m.getOptionScopes(this.getDataset(), b);
      p = m.createResolver(_, this.getContext(e, l, a));
    }
    const d = new Ob(r, p && p.animations);
    return p && p._cacheable && (u[c] = Object.freeze(d)), d;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, a) {
    return !a || Af(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, a) {
    const l = this.resolveDataElementOptions(e, a),
      r = this._sharedOptions,
      u = this.getSharedOptions(l),
      c = this.includeOptions(a, u) || u !== r;
    return (
      this.updateSharedOptions(u, a, l), { sharedOptions: u, includeOptions: c }
    );
  }
  updateElement(e, a, l, r) {
    Af(r) ? Object.assign(e, l) : this._resolveAnimations(a, r).update(e, l);
  }
  updateSharedOptions(e, a, l) {
    e && !Af(a) && this._resolveAnimations(void 0, a).update(e, l);
  }
  _setStyle(e, a, l, r) {
    e.active = r;
    const u = this.getStyle(a, r);
    this._resolveAnimations(a, l, r).update(e, {
      options: (!r && this.getSharedOptions(u)) || u,
    });
  }
  removeHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !1);
  }
  setHoverStyle(e, a, l) {
    this._setStyle(e, l, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const a = this._data,
      l = this._cachedMeta.data;
    for (const [h, p, d] of this._syncList) this[h](p, d);
    this._syncList = [];
    const r = l.length,
      u = a.length,
      c = Math.min(u, r);
    c && this.parse(0, c),
      u > r
        ? this._insertElements(r, u - r, e)
        : u < r && this._removeElements(u, r - u);
  }
  _insertElements(e, a, l = !0) {
    const r = this._cachedMeta,
      u = r.data,
      c = e + a;
    let h;
    const p = (d) => {
      for (d.length += a, h = d.length - 1; h >= c; h--) d[h] = d[h - a];
    };
    for (p(u), h = e; h < c; ++h) u[h] = new this.dataElementType();
    this._parsing && p(r._parsed),
      this.parse(e, a),
      l && this.updateElements(u, e, a, "reset");
  }
  updateElements(e, a, l, r) {}
  _removeElements(e, a) {
    const l = this._cachedMeta;
    if (this._parsing) {
      const r = l._parsed.splice(e, a);
      l._stacked && Sl(l, r);
    }
    l.data.splice(e, a);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [a, l, r] = e;
      this[a](l, r);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, a) {
    a && this._sync(["_removeElements", e, a]);
    const l = arguments.length - 2;
    l && this._sync(["_insertElements", e, l]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
class W_ extends Db {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  };
  static overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  };
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const a = this._cachedMeta,
      { dataset: l, data: r = [], _dataset: u } = a,
      c = this.chart._animationsDisabled;
    let { start: h, count: p } = Dw(a, r, c);
    (this._drawStart = h),
      (this._drawCount = p),
      kw(a) && ((h = 0), (p = r.length)),
      (l._chart = this.chart),
      (l._datasetIndex = this.index),
      (l._decimated = !!u._decimated),
      (l.points = r);
    const d = this.resolveDatasetElementOptions(e);
    this.options.showLine || (d.borderWidth = 0),
      (d.segment = this.options.segment),
      this.updateElement(l, void 0, { animated: !c, options: d }, e),
      this.updateElements(r, h, p, e);
  }
  updateElements(e, a, l, r) {
    const u = r === "reset",
      { iScale: c, vScale: h, _stacked: p, _dataset: d } = this._cachedMeta,
      { sharedOptions: m, includeOptions: b } = this._getSharedOptions(a, r),
      _ = c.axis,
      x = h.axis,
      { spanGaps: w, segment: M } = this.options,
      O = Ul(w) ? w : Number.POSITIVE_INFINITY,
      E = this.chart._animationsDisabled || u || r === "none",
      tt = a + l,
      I = e.length;
    let $ = a > 0 && this.getParsed(a - 1);
    for (let j = 0; j < I; ++j) {
      const J = e[j],
        T = E ? J : {};
      if (j < a || j >= tt) {
        T.skip = !0;
        continue;
      }
      const S = this.getParsed(j),
        v = Pt(S[x]),
        N = (T[_] = c.getPixelForValue(S[_], j)),
        k = (T[x] =
          u || v
            ? h.getBasePixel()
            : h.getPixelForValue(p ? this.applyStack(h, S, p) : S[x], j));
      (T.skip = isNaN(N) || isNaN(k) || v),
        (T.stop = j > 0 && Math.abs(S[_] - $[_]) > O),
        M && ((T.parsed = S), (T.raw = d.data[j])),
        b &&
          (T.options =
            m || this.resolveDataElementOptions(j, J.active ? "active" : r)),
        E || this.updateElement(J, j, T, r),
        ($ = S);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      a = e.dataset,
      l = (a.options && a.options.borderWidth) || 0,
      r = e.data || [];
    if (!r.length) return l;
    const u = r[0].size(this.resolveDataElementOptions(0)),
      c = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(l, u, c) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
function ga() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class oh {
  static override(e) {
    Object.assign(oh.prototype, e);
  }
  options;
  constructor(e) {
    this.options = e || {};
  }
  init() {}
  formats() {
    return ga();
  }
  parse() {
    return ga();
  }
  format() {
    return ga();
  }
  add() {
    return ga();
  }
  diff() {
    return ga();
  }
  startOf() {
    return ga();
  }
  endOf() {
    return ga();
  }
}
var $_ = { _date: oh };
function J_(i, e, a, l) {
  const { controller: r, data: u, _sorted: c } = i,
    h = r._cachedMeta.iScale,
    p = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (h && e === h.axis && e !== "r" && c && u.length) {
    const d = h._reversePixels ? Ew : va;
    if (l) {
      if (r._sharedOptions) {
        const m = u[0],
          b = typeof m.getRange == "function" && m.getRange(e);
        if (b) {
          const _ = d(u, e, a - b),
            x = d(u, e, a + b);
          return { lo: _.lo, hi: x.hi };
        }
      }
    } else {
      const m = d(u, e, a);
      if (p) {
        const { vScale: b } = r._cachedMeta,
          { _parsed: _ } = i,
          x = _.slice(0, m.lo + 1)
            .reverse()
            .findIndex((M) => !Pt(M[b.axis]));
        m.lo -= Math.max(0, x);
        const w = _.slice(m.hi).findIndex((M) => !Pt(M[b.axis]));
        m.hi += Math.max(0, w);
      }
      return m;
    }
  }
  return { lo: 0, hi: u.length - 1 };
}
function Ir(i, e, a, l, r) {
  const u = i.getSortedVisibleDatasetMetas(),
    c = a[e];
  for (let h = 0, p = u.length; h < p; ++h) {
    const { index: d, data: m } = u[h],
      { lo: b, hi: _ } = J_(u[h], e, c, r);
    for (let x = b; x <= _; ++x) {
      const w = m[x];
      w.skip || l(w, d, x);
    }
  }
}
function tx(i) {
  const e = i.indexOf("x") !== -1,
    a = i.indexOf("y") !== -1;
  return function (l, r) {
    const u = e ? Math.abs(l.x - r.x) : 0,
      c = a ? Math.abs(l.y - r.y) : 0;
    return Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2));
  };
}
function Of(i, e, a, l, r) {
  const u = [];
  return (
    (!r && !i.isPointInArea(e)) ||
      Ir(
        i,
        a,
        e,
        function (h, p, d) {
          (!r && !Fl(h, i.chartArea, 0)) ||
            (h.inRange(e.x, e.y, l) &&
              u.push({ element: h, datasetIndex: p, index: d }));
        },
        !0
      ),
    u
  );
}
function ex(i, e, a, l) {
  let r = [];
  function u(c, h, p) {
    const { startAngle: d, endAngle: m } = c.getProps(
        ["startAngle", "endAngle"],
        l
      ),
      { angle: b } = xw(c, { x: e.x, y: e.y });
    hb(b, d, m) && r.push({ element: c, datasetIndex: h, index: p });
  }
  return Ir(i, a, e, u), r;
}
function nx(i, e, a, l, r, u) {
  let c = [];
  const h = tx(a);
  let p = Number.POSITIVE_INFINITY;
  function d(m, b, _) {
    const x = m.inRange(e.x, e.y, r);
    if (l && !x) return;
    const w = m.getCenterPoint(r);
    if (!(!!u || i.isPointInArea(w)) && !x) return;
    const O = h(e, w);
    O < p
      ? ((c = [{ element: m, datasetIndex: b, index: _ }]), (p = O))
      : O === p && c.push({ element: m, datasetIndex: b, index: _ });
  }
  return Ir(i, a, e, d), c;
}
function zf(i, e, a, l, r, u) {
  return !u && !i.isPointInArea(e)
    ? []
    : a === "r" && !l
    ? ex(i, e, a, r)
    : nx(i, e, a, l, r, u);
}
function f0(i, e, a, l, r) {
  const u = [],
    c = a === "x" ? "inXRange" : "inYRange";
  let h = !1;
  return (
    Ir(i, a, e, (p, d, m) => {
      p[c] &&
        p[c](e[a], r) &&
        (u.push({ element: p, datasetIndex: d, index: m }),
        (h = h || p.inRange(e.x, e.y, r)));
    }),
    l && !h ? [] : u
  );
}
var ix = {
  modes: {
    index(i, e, a, l) {
      const r = ma(e, i),
        u = a.axis || "x",
        c = a.includeInvisible || !1,
        h = a.intersect ? Of(i, r, u, l, c) : zf(i, r, u, !1, l, c),
        p = [];
      return h.length
        ? (i.getSortedVisibleDatasetMetas().forEach((d) => {
            const m = h[0].index,
              b = d.data[m];
            b &&
              !b.skip &&
              p.push({ element: b, datasetIndex: d.index, index: m });
          }),
          p)
        : [];
    },
    dataset(i, e, a, l) {
      const r = ma(e, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      let h = a.intersect ? Of(i, r, u, l, c) : zf(i, r, u, !1, l, c);
      if (h.length > 0) {
        const p = h[0].datasetIndex,
          d = i.getDatasetMeta(p).data;
        h = [];
        for (let m = 0; m < d.length; ++m)
          h.push({ element: d[m], datasetIndex: p, index: m });
      }
      return h;
    },
    point(i, e, a, l) {
      const r = ma(e, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      return Of(i, r, u, l, c);
    },
    nearest(i, e, a, l) {
      const r = ma(e, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      return zf(i, r, u, a.intersect, l, c);
    },
    x(i, e, a, l) {
      const r = ma(e, i);
      return f0(i, r, "x", a.intersect, l);
    },
    y(i, e, a, l) {
      const r = ma(e, i);
      return f0(i, r, "y", a.intersect, l);
    },
  },
};
const kb = ["left", "top", "right", "bottom"];
function Cl(i, e) {
  return i.filter((a) => a.pos === e);
}
function h0(i, e) {
  return i.filter((a) => kb.indexOf(a.pos) === -1 && a.box.axis === e);
}
function El(i, e) {
  return i.sort((a, l) => {
    const r = e ? l : a,
      u = e ? a : l;
    return r.weight === u.weight ? r.index - u.index : r.weight - u.weight;
  });
}
function ax(i) {
  const e = [];
  let a, l, r, u, c, h;
  for (a = 0, l = (i || []).length; a < l; ++a)
    (r = i[a]),
      ({
        position: u,
        options: { stack: c, stackWeight: h = 1 },
      } = r),
      e.push({
        index: a,
        box: r,
        pos: u,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: c && u + c,
        stackWeight: h,
      });
  return e;
}
function sx(i) {
  const e = {};
  for (const a of i) {
    const { stack: l, pos: r, stackWeight: u } = a;
    if (!l || !kb.includes(r)) continue;
    const c = e[l] || (e[l] = { count: 0, placed: 0, weight: 0, size: 0 });
    c.count++, (c.weight += u);
  }
  return e;
}
function lx(i, e) {
  const a = sx(i),
    { vBoxMaxWidth: l, hBoxMaxHeight: r } = e;
  let u, c, h;
  for (u = 0, c = i.length; u < c; ++u) {
    h = i[u];
    const { fullSize: p } = h.box,
      d = a[h.stack],
      m = d && h.stackWeight / d.weight;
    h.horizontal
      ? ((h.width = m ? m * l : p && e.availableWidth), (h.height = r))
      : ((h.width = l), (h.height = m ? m * r : p && e.availableHeight));
  }
  return a;
}
function ox(i) {
  const e = ax(i),
    a = El(
      e.filter((d) => d.box.fullSize),
      !0
    ),
    l = El(Cl(e, "left"), !0),
    r = El(Cl(e, "right")),
    u = El(Cl(e, "top"), !0),
    c = El(Cl(e, "bottom")),
    h = h0(e, "x"),
    p = h0(e, "y");
  return {
    fullSize: a,
    leftAndTop: l.concat(u),
    rightAndBottom: r.concat(p).concat(c).concat(h),
    chartArea: Cl(e, "chartArea"),
    vertical: l.concat(r).concat(p),
    horizontal: u.concat(c).concat(h),
  };
}
function d0(i, e, a, l) {
  return Math.max(i[a], e[a]) + Math.max(i[l], e[l]);
}
function Rb(i, e) {
  (i.top = Math.max(i.top, e.top)),
    (i.left = Math.max(i.left, e.left)),
    (i.bottom = Math.max(i.bottom, e.bottom)),
    (i.right = Math.max(i.right, e.right));
}
function rx(i, e, a, l) {
  const { pos: r, box: u } = a,
    c = i.maxPadding;
  if (!Ht(r)) {
    a.size && (i[r] -= a.size);
    const b = l[a.stack] || { size: 0, count: 1 };
    (b.size = Math.max(b.size, a.horizontal ? u.height : u.width)),
      (a.size = b.size / b.count),
      (i[r] += a.size);
  }
  u.getPadding && Rb(c, u.getPadding());
  const h = Math.max(0, e.outerWidth - d0(c, i, "left", "right")),
    p = Math.max(0, e.outerHeight - d0(c, i, "top", "bottom")),
    d = h !== i.w,
    m = p !== i.h;
  return (
    (i.w = h),
    (i.h = p),
    a.horizontal ? { same: d, other: m } : { same: m, other: d }
  );
}
function ux(i) {
  const e = i.maxPadding;
  function a(l) {
    const r = Math.max(e[l] - i[l], 0);
    return (i[l] += r), r;
  }
  (i.y += a("top")), (i.x += a("left")), a("right"), a("bottom");
}
function cx(i, e) {
  const a = e.maxPadding;
  function l(r) {
    const u = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((c) => {
        u[c] = Math.max(e[c], a[c]);
      }),
      u
    );
  }
  return l(i ? ["left", "right"] : ["top", "bottom"]);
}
function zl(i, e, a, l) {
  const r = [];
  let u, c, h, p, d, m;
  for (u = 0, c = i.length, d = 0; u < c; ++u) {
    (h = i[u]),
      (p = h.box),
      p.update(h.width || e.w, h.height || e.h, cx(h.horizontal, e));
    const { same: b, other: _ } = rx(e, a, h, l);
    (d |= b && r.length), (m = m || _), p.fullSize || r.push(h);
  }
  return (d && zl(r, e, a, l)) || m;
}
function _r(i, e, a, l, r) {
  (i.top = a),
    (i.left = e),
    (i.right = e + l),
    (i.bottom = a + r),
    (i.width = l),
    (i.height = r);
}
function g0(i, e, a, l) {
  const r = a.padding;
  let { x: u, y: c } = e;
  for (const h of i) {
    const p = h.box,
      d = l[h.stack] || { placed: 0, weight: 1 },
      m = h.stackWeight / d.weight || 1;
    if (h.horizontal) {
      const b = e.w * m,
        _ = d.size || p.height;
      Lr(d.start) && (c = d.start),
        p.fullSize
          ? _r(p, r.left, c, a.outerWidth - r.right - r.left, _)
          : _r(p, e.left + d.placed, c, b, _),
        (d.start = c),
        (d.placed += b),
        (c = p.bottom);
    } else {
      const b = e.h * m,
        _ = d.size || p.width;
      Lr(d.start) && (u = d.start),
        p.fullSize
          ? _r(p, u, r.top, _, a.outerHeight - r.bottom - r.top)
          : _r(p, u, e.top + d.placed, _, b),
        (d.start = u),
        (d.placed += b),
        (u = p.right);
    }
  }
  (e.x = u), (e.y = c);
}
var qi = {
  addBox(i, e) {
    i.boxes || (i.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(a) {
                e.draw(a);
              },
            },
          ];
        }),
      i.boxes.push(e);
  },
  removeBox(i, e) {
    const a = i.boxes ? i.boxes.indexOf(e) : -1;
    a !== -1 && i.boxes.splice(a, 1);
  },
  configure(i, e, a) {
    (e.fullSize = a.fullSize), (e.position = a.position), (e.weight = a.weight);
  },
  update(i, e, a, l) {
    if (!i) return;
    const r = An(i.options.layout.padding),
      u = Math.max(e - r.width, 0),
      c = Math.max(a - r.height, 0),
      h = ox(i.boxes),
      p = h.vertical,
      d = h.horizontal;
    Vt(i.boxes, (M) => {
      typeof M.beforeLayout == "function" && M.beforeLayout();
    });
    const m =
        p.reduce(
          (M, O) => (O.box.options && O.box.options.display === !1 ? M : M + 1),
          0
        ) || 1,
      b = Object.freeze({
        outerWidth: e,
        outerHeight: a,
        padding: r,
        availableWidth: u,
        availableHeight: c,
        vBoxMaxWidth: u / 2 / m,
        hBoxMaxHeight: c / 2,
      }),
      _ = Object.assign({}, r);
    Rb(_, An(l));
    const x = Object.assign(
        { maxPadding: _, w: u, h: c, x: r.left, y: r.top },
        r
      ),
      w = lx(p.concat(d), b);
    zl(h.fullSize, x, b, w),
      zl(p, x, b, w),
      zl(d, x, b, w) && zl(p, x, b, w),
      ux(x),
      g0(h.leftAndTop, x, b, w),
      (x.x += x.w),
      (x.y += x.h),
      g0(h.rightAndBottom, x, b, w),
      (i.chartArea = {
        left: x.left,
        top: x.top,
        right: x.left + x.w,
        bottom: x.top + x.h,
        height: x.h,
        width: x.w,
      }),
      Vt(h.chartArea, (M) => {
        const O = M.box;
        Object.assign(O, i.chartArea),
          O.update(x.w, x.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Bb {
  acquireContext(e, a) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, a, l) {}
  removeEventListener(e, a, l) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, a, l, r) {
    return (
      (a = Math.max(0, a || e.width)),
      (l = l || e.height),
      { width: a, height: Math.max(0, r ? Math.floor(a / r) : l) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class fx extends Bb {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const zr = "$chartjs",
  hx = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  p0 = (i) => i === null || i === "";
function dx(i, e) {
  const a = i.style,
    l = i.getAttribute("height"),
    r = i.getAttribute("width");
  if (
    ((i[zr] = {
      initial: {
        height: l,
        width: r,
        style: { display: a.display, height: a.height, width: a.width },
      },
    }),
    (a.display = a.display || "block"),
    (a.boxSizing = a.boxSizing || "border-box"),
    p0(r))
  ) {
    const u = e0(i, "width");
    u !== void 0 && (i.width = u);
  }
  if (p0(l))
    if (i.style.height === "") i.height = i.width / (e || 2);
    else {
      const u = e0(i, "height");
      u !== void 0 && (i.height = u);
    }
  return i;
}
const Lb = x_ ? { passive: !0 } : !1;
function gx(i, e, a) {
  i && i.addEventListener(e, a, Lb);
}
function px(i, e, a) {
  i && i.canvas && i.canvas.removeEventListener(e, a, Lb);
}
function mx(i, e) {
  const a = hx[i.type] || i.type,
    { x: l, y: r } = ma(i, e);
  return {
    type: a,
    chart: e,
    native: i,
    x: l !== void 0 ? l : null,
    y: r !== void 0 ? r : null,
  };
}
function Ur(i, e) {
  for (const a of i) if (a === e || a.contains(e)) return !0;
}
function bx(i, e, a) {
  const l = i.canvas,
    r = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        (c = c || Ur(h.addedNodes, l)), (c = c && !Ur(h.removedNodes, l));
      c && a();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function yx(i, e, a) {
  const l = i.canvas,
    r = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        (c = c || Ur(h.removedNodes, l)), (c = c && !Ur(h.addedNodes, l));
      c && a();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const ql = new Map();
let m0 = 0;
function jb() {
  const i = window.devicePixelRatio;
  i !== m0 &&
    ((m0 = i),
    ql.forEach((e, a) => {
      a.currentDevicePixelRatio !== i && e();
    }));
}
function vx(i, e) {
  ql.size || window.addEventListener("resize", jb), ql.set(i, e);
}
function wx(i) {
  ql.delete(i), ql.size || window.removeEventListener("resize", jb);
}
function _x(i, e, a) {
  const l = i.canvas,
    r = l && lh(l);
  if (!r) return;
  const u = pb((h, p) => {
      const d = r.clientWidth;
      a(h, p), d < r.clientWidth && a();
    }, window),
    c = new ResizeObserver((h) => {
      const p = h[0],
        d = p.contentRect.width,
        m = p.contentRect.height;
      (d === 0 && m === 0) || u(d, m);
    });
  return c.observe(r), vx(i, u), c;
}
function Df(i, e, a) {
  a && a.disconnect(), e === "resize" && wx(i);
}
function xx(i, e, a) {
  const l = i.canvas,
    r = pb((u) => {
      i.ctx !== null && a(mx(u, i));
    }, i);
  return gx(l, e, r), r;
}
class Sx extends Bb {
  acquireContext(e, a) {
    const l = e && e.getContext && e.getContext("2d");
    return l && l.canvas === e ? (dx(e, a), l) : null;
  }
  releaseContext(e) {
    const a = e.canvas;
    if (!a[zr]) return !1;
    const l = a[zr].initial;
    ["height", "width"].forEach((u) => {
      const c = l[u];
      Pt(c) ? a.removeAttribute(u) : a.setAttribute(u, c);
    });
    const r = l.style || {};
    return (
      Object.keys(r).forEach((u) => {
        a.style[u] = r[u];
      }),
      (a.width = a.width),
      delete a[zr],
      !0
    );
  }
  addEventListener(e, a, l) {
    this.removeEventListener(e, a);
    const r = e.$proxies || (e.$proxies = {}),
      c = { attach: bx, detach: yx, resize: _x }[a] || xx;
    r[a] = c(e, a, l);
  }
  removeEventListener(e, a) {
    const l = e.$proxies || (e.$proxies = {}),
      r = l[a];
    if (!r) return;
    (({ attach: Df, detach: Df, resize: Df })[a] || px)(e, a, r),
      (l[a] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, a, l, r) {
    return __(e, a, l, r);
  }
  isAttached(e) {
    const a = e && lh(e);
    return !!(a && a.isConnected);
  }
}
function Cx(i) {
  return !sh() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? fx
    : Sx;
}
let ws = class {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  hasValue() {
    return Ul(this.x) && Ul(this.y);
  }
  getProps(e, a) {
    const l = this.$animations;
    if (!a || !l) return this;
    const r = {};
    return (
      e.forEach((u) => {
        r[u] = l[u] && l[u].active() ? l[u]._to : this[u];
      }),
      r
    );
  }
};
function Ex(i, e) {
  const a = i.options.ticks,
    l = Mx(i),
    r = Math.min(a.maxTicksLimit || l, l),
    u = a.major.enabled ? Ax(e) : [],
    c = u.length,
    h = u[0],
    p = u[c - 1],
    d = [];
  if (c > r) return Ox(e, d, u, c / r), d;
  const m = Tx(u, e, r);
  if (c > 0) {
    let b, _;
    const x = c > 1 ? Math.round((p - h) / (c - 1)) : null;
    for (xr(e, d, m, Pt(x) ? 0 : h - x, h), b = 0, _ = c - 1; b < _; b++)
      xr(e, d, m, u[b], u[b + 1]);
    return xr(e, d, m, p, Pt(x) ? e.length : p + x), d;
  }
  return xr(e, d, m), d;
}
function Mx(i) {
  const e = i.options.offset,
    a = i._tickSize(),
    l = i._length / a + (e ? 0 : 1),
    r = i._maxLength / a;
  return Math.floor(Math.min(l, r));
}
function Tx(i, e, a) {
  const l = zx(i),
    r = e.length / a;
  if (!l) return Math.max(r, 1);
  const u = bw(l);
  for (let c = 0, h = u.length - 1; c < h; c++) {
    const p = u[c];
    if (p > r) return p;
  }
  return Math.max(r, 1);
}
function Ax(i) {
  const e = [];
  let a, l;
  for (a = 0, l = i.length; a < l; a++) i[a].major && e.push(a);
  return e;
}
function Ox(i, e, a, l) {
  let r = 0,
    u = a[0],
    c;
  for (l = Math.ceil(l), c = 0; c < i.length; c++)
    c === u && (e.push(i[c]), r++, (u = a[r * l]));
}
function xr(i, e, a, l, r) {
  const u = At(l, 0),
    c = Math.min(At(r, i.length), i.length);
  let h = 0,
    p,
    d,
    m;
  for (
    a = Math.ceil(a), r && ((p = r - l), (a = p / Math.floor(p / a))), m = u;
    m < 0;

  )
    h++, (m = Math.round(u + h * a));
  for (d = Math.max(u, 0); d < c; d++)
    d === m && (e.push(i[d]), h++, (m = Math.round(u + h * a)));
}
function zx(i) {
  const e = i.length;
  let a, l;
  if (e < 2) return !1;
  for (l = i[0], a = 1; a < e; ++a) if (i[a] - i[a - 1] !== l) return !1;
  return l;
}
const Dx = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  b0 = (i, e, a) => (e === "top" || e === "left" ? i[e] + a : i[e] - a),
  y0 = (i, e) => Math.min(e || i, i);
function v0(i, e) {
  const a = [],
    l = i.length / e,
    r = i.length;
  let u = 0;
  for (; u < r; u += l) a.push(i[Math.floor(u)]);
  return a;
}
function kx(i, e, a) {
  const l = i.ticks.length,
    r = Math.min(e, l - 1),
    u = i._startPixel,
    c = i._endPixel,
    h = 1e-6;
  let p = i.getPixelForTick(r),
    d;
  if (
    !(
      a &&
      (l === 1
        ? (d = Math.max(p - u, c - p))
        : e === 0
        ? (d = (i.getPixelForTick(1) - p) / 2)
        : (d = (p - i.getPixelForTick(r - 1)) / 2),
      (p += r < e ? d : -d),
      p < u - h || p > c + h)
    )
  )
    return p;
}
function Rx(i, e) {
  Vt(i, (a) => {
    const l = a.gc,
      r = l.length / 2;
    let u;
    if (r > e) {
      for (u = 0; u < r; ++u) delete a.data[l[u]];
      l.splice(0, r);
    }
  });
}
function Ml(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function w0(i, e) {
  if (!i.display) return 0;
  const a = Ge(i.font, e),
    l = An(i.padding);
  return (Me(i.text) ? i.text.length : 1) * a.lineHeight + l.height;
}
function Bx(i, e) {
  return Ea(i, { scale: e, type: "scale" });
}
function Lx(i, e, a) {
  return Ea(i, { tick: a, index: e, type: "tick" });
}
function jx(i, e, a) {
  let l = mb(i);
  return ((a && e !== "right") || (!a && e === "right")) && (l = Dx(l)), l;
}
function Hx(i, e, a, l) {
  const { top: r, left: u, bottom: c, right: h, chart: p } = i,
    { chartArea: d, scales: m } = p;
  let b = 0,
    _,
    x,
    w;
  const M = c - r,
    O = h - u;
  if (i.isHorizontal()) {
    if (((x = tn(l, u, h)), Ht(a))) {
      const E = Object.keys(a)[0],
        tt = a[E];
      w = m[E].getPixelForValue(tt) + M - e;
    } else
      a === "center" ? (w = (d.bottom + d.top) / 2 + M - e) : (w = b0(i, a, e));
    _ = h - u;
  } else {
    if (Ht(a)) {
      const E = Object.keys(a)[0],
        tt = a[E];
      x = m[E].getPixelForValue(tt) - O + e;
    } else
      a === "center" ? (x = (d.left + d.right) / 2 - O + e) : (x = b0(i, a, e));
    (w = tn(l, c, r)), (b = a === "left" ? -Tn : Tn);
  }
  return { titleX: x, titleY: w, maxWidth: _, rotation: b };
}
class _s extends ws {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, a) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: a, _suggestedMin: l, _suggestedMax: r } = this;
    return (
      (e = Bn(e, Number.POSITIVE_INFINITY)),
      (a = Bn(a, Number.NEGATIVE_INFINITY)),
      (l = Bn(l, Number.POSITIVE_INFINITY)),
      (r = Bn(r, Number.NEGATIVE_INFINITY)),
      { min: Bn(e, l), max: Bn(a, r), minDefined: wn(e), maxDefined: wn(a) }
    );
  }
  getMinMax(e) {
    let { min: a, max: l, minDefined: r, maxDefined: u } = this.getUserBounds(),
      c;
    if (r && u) return { min: a, max: l };
    const h = this.getMatchingVisibleMetas();
    for (let p = 0, d = h.length; p < d; ++p)
      (c = h[p].controller.getMinMax(this, e)),
        r || (a = Math.min(a, c.min)),
        u || (l = Math.max(l, c.max));
    return (
      (a = u && a > l ? l : a),
      (l = r && a > l ? a : l),
      { min: Bn(a, Bn(l, a)), max: Bn(l, Bn(a, l)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Jt(this.options.beforeUpdate, [this]);
  }
  update(e, a, l) {
    const { beginAtZero: r, grace: u, ticks: c } = this.options,
      h = c.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, l)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + l.left + l.right
        : this.height + l.top + l.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Jw(this, u, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const p = h < this.ticks.length;
    this._convertTicksToLabels(p ? v0(this.ticks, h) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      c.display &&
        (c.autoSkip || c.source === "auto") &&
        ((this.ticks = Ex(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      p && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      a,
      l;
    this.isHorizontal()
      ? ((a = this.left), (l = this.right))
      : ((a = this.top), (l = this.bottom), (e = !e)),
      (this._startPixel = a),
      (this._endPixel = l),
      (this._reversePixels = e),
      (this._length = l - a),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Jt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Jt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Jt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Jt(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Jt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const a = this.options.ticks;
    let l, r, u;
    for (l = 0, r = e.length; l < r; l++)
      (u = e[l]), (u.label = Jt(a.callback, [u.value, l, e], this));
  }
  afterTickToLabelConversion() {
    Jt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Jt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      a = e.ticks,
      l = y0(this.ticks.length, e.ticks.maxTicksLimit),
      r = a.minRotation || 0,
      u = a.maxRotation;
    let c = r,
      h,
      p,
      d;
    if (
      !this._isVisible() ||
      !a.display ||
      r >= u ||
      l <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const m = this._getLabelSizes(),
      b = m.widest.width,
      _ = m.highest.height,
      x = vn(this.chart.width - b, 0, this.maxWidth);
    (h = e.offset ? this.maxWidth / l : x / (l - 1)),
      b + 6 > h &&
        ((h = x / (l - (e.offset ? 0.5 : 1))),
        (p =
          this.maxHeight -
          Ml(e.grid) -
          a.padding -
          w0(e.title, this.chart.options.font)),
        (d = Math.sqrt(b * b + _ * _)),
        (c = _w(
          Math.min(
            Math.asin(vn((m.highest.height + 6) / h, -1, 1)),
            Math.asin(vn(p / d, -1, 1)) - Math.asin(vn(_ / d, -1, 1))
          )
        )),
        (c = Math.max(r, Math.min(u, c)))),
      (this.labelRotation = c);
  }
  afterCalculateLabelRotation() {
    Jt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Jt(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: a,
        options: { ticks: l, title: r, grid: u },
      } = this,
      c = this._isVisible(),
      h = this.isHorizontal();
    if (c) {
      const p = w0(r, a.options.font);
      if (
        (h
          ? ((e.width = this.maxWidth), (e.height = Ml(u) + p))
          : ((e.height = this.maxHeight), (e.width = Ml(u) + p)),
        l.display && this.ticks.length)
      ) {
        const {
            first: d,
            last: m,
            widest: b,
            highest: _,
          } = this._getLabelSizes(),
          x = l.padding * 2,
          w = ya(this.labelRotation),
          M = Math.cos(w),
          O = Math.sin(w);
        if (h) {
          const E = l.mirror ? 0 : O * b.width + M * _.height;
          e.height = Math.min(this.maxHeight, e.height + E + x);
        } else {
          const E = l.mirror ? 0 : M * b.width + O * _.height;
          e.width = Math.min(this.maxWidth, e.width + E + x);
        }
        this._calculatePadding(d, m, O, M);
      }
    }
    this._handleMargins(),
      h
        ? ((this.width = this._length =
            a.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            a.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, a, l, r) {
    const {
        ticks: { align: u, padding: c },
        position: h,
      } = this.options,
      p = this.labelRotation !== 0,
      d = h !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const m = this.getPixelForTick(0) - this.left,
        b = this.right - this.getPixelForTick(this.ticks.length - 1);
      let _ = 0,
        x = 0;
      p
        ? d
          ? ((_ = r * e.width), (x = l * a.height))
          : ((_ = l * e.height), (x = r * a.width))
        : u === "start"
        ? (x = a.width)
        : u === "end"
        ? (_ = e.width)
        : u !== "inner" && ((_ = e.width / 2), (x = a.width / 2)),
        (this.paddingLeft = Math.max(
          ((_ - m + c) * this.width) / (this.width - m),
          0
        )),
        (this.paddingRight = Math.max(
          ((x - b + c) * this.width) / (this.width - b),
          0
        ));
    } else {
      let m = a.height / 2,
        b = e.height / 2;
      u === "start"
        ? ((m = 0), (b = e.height))
        : u === "end" && ((m = a.height), (b = 0)),
        (this.paddingTop = m + c),
        (this.paddingBottom = b + c);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Jt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: a } = this.options;
    return a === "top" || a === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let a, l;
    for (a = 0, l = e.length; a < l; a++)
      Pt(e[a].label) && (e.splice(a, 1), l--, a--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const a = this.options.ticks.sampleSize;
      let l = this.ticks;
      a < l.length && (l = v0(l, a)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            l,
            l.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return e;
  }
  _computeLabelSizes(e, a, l) {
    const { ctx: r, _longestTextCache: u } = this,
      c = [],
      h = [],
      p = Math.floor(a / y0(a, l));
    let d = 0,
      m = 0,
      b,
      _,
      x,
      w,
      M,
      O,
      E,
      tt,
      I,
      $,
      j;
    for (b = 0; b < a; b += p) {
      if (
        ((w = e[b].label),
        (M = this._resolveTickFontOptions(b)),
        (r.font = O = M.string),
        (E = u[O] = u[O] || { data: {}, gc: [] }),
        (tt = M.lineHeight),
        (I = $ = 0),
        !Pt(w) && !Me(w))
      )
        (I = Im(r, E.data, E.gc, I, w)), ($ = tt);
      else if (Me(w))
        for (_ = 0, x = w.length; _ < x; ++_)
          (j = w[_]),
            !Pt(j) && !Me(j) && ((I = Im(r, E.data, E.gc, I, j)), ($ += tt));
      c.push(I), h.push($), (d = Math.max(I, d)), (m = Math.max($, m));
    }
    Rx(u, a);
    const J = c.indexOf(d),
      T = h.indexOf(m),
      S = (v) => ({ width: c[v] || 0, height: h[v] || 0 });
    return {
      first: S(0),
      last: S(a - 1),
      widest: S(J),
      highest: S(T),
      widths: c,
      heights: h,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, a) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const a = this._startPixel + e * this._length;
    return Cw(this._alignToPixels ? da(this.chart, a, 0) : a);
  }
  getDecimalForPixel(e) {
    const a = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - a : a;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: a } = this;
    return e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0;
  }
  getContext(e) {
    const a = this.ticks || [];
    if (e >= 0 && e < a.length) {
      const l = a[e];
      return l.$context || (l.$context = Lx(this.getContext(), e, l));
    }
    return this.$context || (this.$context = Bx(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      a = ya(this.labelRotation),
      l = Math.abs(Math.cos(a)),
      r = Math.abs(Math.sin(a)),
      u = this._getLabelSizes(),
      c = e.autoSkipPadding || 0,
      h = u ? u.widest.width + c : 0,
      p = u ? u.highest.height + c : 0;
    return this.isHorizontal()
      ? p * l > h * r
        ? h / l
        : p / r
      : p * r < h * l
      ? p / l
      : h / r;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const a = this.axis,
      l = this.chart,
      r = this.options,
      { grid: u, position: c, border: h } = r,
      p = u.offset,
      d = this.isHorizontal(),
      b = this.ticks.length + (p ? 1 : 0),
      _ = Ml(u),
      x = [],
      w = h.setContext(this.getContext()),
      M = w.display ? w.width : 0,
      O = M / 2,
      E = function (H) {
        return da(l, H, M);
      };
    let tt, I, $, j, J, T, S, v, N, k, R, W;
    if (c === "top")
      (tt = E(this.bottom)),
        (T = this.bottom - _),
        (v = tt - O),
        (k = E(e.top) + O),
        (W = e.bottom);
    else if (c === "bottom")
      (tt = E(this.top)),
        (k = e.top),
        (W = E(e.bottom) - O),
        (T = tt + O),
        (v = this.top + _);
    else if (c === "left")
      (tt = E(this.right)),
        (J = this.right - _),
        (S = tt - O),
        (N = E(e.left) + O),
        (R = e.right);
    else if (c === "right")
      (tt = E(this.left)),
        (N = e.left),
        (R = E(e.right) - O),
        (J = tt + O),
        (S = this.left + _);
    else if (a === "x") {
      if (c === "center") tt = E((e.top + e.bottom) / 2 + 0.5);
      else if (Ht(c)) {
        const H = Object.keys(c)[0],
          G = c[H];
        tt = E(this.chart.scales[H].getPixelForValue(G));
      }
      (k = e.top), (W = e.bottom), (T = tt + O), (v = T + _);
    } else if (a === "y") {
      if (c === "center") tt = E((e.left + e.right) / 2);
      else if (Ht(c)) {
        const H = Object.keys(c)[0],
          G = c[H];
        tt = E(this.chart.scales[H].getPixelForValue(G));
      }
      (J = tt - O), (S = J - _), (N = e.left), (R = e.right);
    }
    const lt = At(r.ticks.maxTicksLimit, b),
      at = Math.max(1, Math.ceil(b / lt));
    for (I = 0; I < b; I += at) {
      const H = this.getContext(I),
        G = u.setContext(H),
        nt = h.setContext(H),
        it = G.lineWidth,
        ut = G.color,
        A = nt.dash || [],
        F = nt.dashOffset,
        B = G.tickWidth,
        et = G.tickColor,
        st = G.tickBorderDash || [],
        ot = G.tickBorderDashOffset;
      ($ = kx(this, I, p)),
        $ !== void 0 &&
          ((j = da(l, $, it)),
          d ? (J = S = N = R = j) : (T = v = k = W = j),
          x.push({
            tx1: J,
            ty1: T,
            tx2: S,
            ty2: v,
            x1: N,
            y1: k,
            x2: R,
            y2: W,
            width: it,
            color: ut,
            borderDash: A,
            borderDashOffset: F,
            tickWidth: B,
            tickColor: et,
            tickBorderDash: st,
            tickBorderDashOffset: ot,
          }));
    }
    return (this._ticksLength = b), (this._borderValue = tt), x;
  }
  _computeLabelItems(e) {
    const a = this.axis,
      l = this.options,
      { position: r, ticks: u } = l,
      c = this.isHorizontal(),
      h = this.ticks,
      { align: p, crossAlign: d, padding: m, mirror: b } = u,
      _ = Ml(l.grid),
      x = _ + m,
      w = b ? -m : x,
      M = -ya(this.labelRotation),
      O = [];
    let E,
      tt,
      I,
      $,
      j,
      J,
      T,
      S,
      v,
      N,
      k,
      R,
      W = "middle";
    if (r === "top")
      (J = this.bottom - w), (T = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (J = this.top + w), (T = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const at = this._getYAxisLabelAlignment(_);
      (T = at.textAlign), (j = at.x);
    } else if (r === "right") {
      const at = this._getYAxisLabelAlignment(_);
      (T = at.textAlign), (j = at.x);
    } else if (a === "x") {
      if (r === "center") J = (e.top + e.bottom) / 2 + x;
      else if (Ht(r)) {
        const at = Object.keys(r)[0],
          H = r[at];
        J = this.chart.scales[at].getPixelForValue(H) + x;
      }
      T = this._getXAxisLabelAlignment();
    } else if (a === "y") {
      if (r === "center") j = (e.left + e.right) / 2 - x;
      else if (Ht(r)) {
        const at = Object.keys(r)[0],
          H = r[at];
        j = this.chart.scales[at].getPixelForValue(H);
      }
      T = this._getYAxisLabelAlignment(_).textAlign;
    }
    a === "y" && (p === "start" ? (W = "top") : p === "end" && (W = "bottom"));
    const lt = this._getLabelSizes();
    for (E = 0, tt = h.length; E < tt; ++E) {
      (I = h[E]), ($ = I.label);
      const at = u.setContext(this.getContext(E));
      (S = this.getPixelForTick(E) + u.labelOffset),
        (v = this._resolveTickFontOptions(E)),
        (N = v.lineHeight),
        (k = Me($) ? $.length : 1);
      const H = k / 2,
        G = at.color,
        nt = at.textStrokeColor,
        it = at.textStrokeWidth;
      let ut = T;
      c
        ? ((j = S),
          T === "inner" &&
            (E === tt - 1
              ? (ut = this.options.reverse ? "left" : "right")
              : E === 0
              ? (ut = this.options.reverse ? "right" : "left")
              : (ut = "center")),
          r === "top"
            ? d === "near" || M !== 0
              ? (R = -k * N + N / 2)
              : d === "center"
              ? (R = -lt.highest.height / 2 - H * N + N)
              : (R = -lt.highest.height + N / 2)
            : d === "near" || M !== 0
            ? (R = N / 2)
            : d === "center"
            ? (R = lt.highest.height / 2 - H * N)
            : (R = lt.highest.height - k * N),
          b && (R *= -1),
          M !== 0 && !at.showLabelBackdrop && (j += (N / 2) * Math.sin(M)))
        : ((J = S), (R = ((1 - k) * N) / 2));
      let A;
      if (at.showLabelBackdrop) {
        const F = An(at.backdropPadding),
          B = lt.heights[E],
          et = lt.widths[E];
        let st = R - F.top,
          ot = 0 - F.left;
        switch (W) {
          case "middle":
            st -= B / 2;
            break;
          case "bottom":
            st -= B;
            break;
        }
        switch (T) {
          case "center":
            ot -= et / 2;
            break;
          case "right":
            ot -= et;
            break;
          case "inner":
            E === tt - 1 ? (ot -= et) : E > 0 && (ot -= et / 2);
            break;
        }
        A = {
          left: ot,
          top: st,
          width: et + F.width,
          height: B + F.height,
          color: at.backdropColor,
        };
      }
      O.push({
        label: $,
        font: v,
        textOffset: R,
        options: {
          rotation: M,
          color: G,
          strokeColor: nt,
          strokeWidth: it,
          textAlign: ut,
          textBaseline: W,
          translation: [j, J],
          backdrop: A,
        },
      });
    }
    return O;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: a } = this.options;
    if (-ya(this.labelRotation)) return e === "top" ? "left" : "right";
    let r = "center";
    return (
      a.align === "start"
        ? (r = "left")
        : a.align === "end"
        ? (r = "right")
        : a.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: a,
        ticks: { crossAlign: l, mirror: r, padding: u },
      } = this.options,
      c = this._getLabelSizes(),
      h = e + u,
      p = c.widest.width;
    let d, m;
    return (
      a === "left"
        ? r
          ? ((m = this.right + u),
            l === "near"
              ? (d = "left")
              : l === "center"
              ? ((d = "center"), (m += p / 2))
              : ((d = "right"), (m += p)))
          : ((m = this.right - h),
            l === "near"
              ? (d = "right")
              : l === "center"
              ? ((d = "center"), (m -= p / 2))
              : ((d = "left"), (m = this.left)))
        : a === "right"
        ? r
          ? ((m = this.left + u),
            l === "near"
              ? (d = "right")
              : l === "center"
              ? ((d = "center"), (m -= p / 2))
              : ((d = "left"), (m -= p)))
          : ((m = this.left + h),
            l === "near"
              ? (d = "left")
              : l === "center"
              ? ((d = "center"), (m += p / 2))
              : ((d = "right"), (m = this.right)))
        : (d = "right"),
      { textAlign: d, x: m }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      a = this.options.position;
    if (a === "left" || a === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (a === "top" || a === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: a },
      left: l,
      top: r,
      width: u,
      height: c,
    } = this;
    a && (e.save(), (e.fillStyle = a), e.fillRect(l, r, u, c), e.restore());
  }
  getLineWidthForValue(e) {
    const a = this.options.grid;
    if (!this._isVisible() || !a.display) return 0;
    const r = this.ticks.findIndex((u) => u.value === e);
    return r >= 0 ? a.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(e) {
    const a = this.options.grid,
      l = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let u, c;
    const h = (p, d, m) => {
      !m.width ||
        !m.color ||
        (l.save(),
        (l.lineWidth = m.width),
        (l.strokeStyle = m.color),
        l.setLineDash(m.borderDash || []),
        (l.lineDashOffset = m.borderDashOffset),
        l.beginPath(),
        l.moveTo(p.x, p.y),
        l.lineTo(d.x, d.y),
        l.stroke(),
        l.restore());
    };
    if (a.display)
      for (u = 0, c = r.length; u < c; ++u) {
        const p = r[u];
        a.drawOnChartArea && h({ x: p.x1, y: p.y1 }, { x: p.x2, y: p.y2 }, p),
          a.drawTicks &&
            h(
              { x: p.tx1, y: p.ty1 },
              { x: p.tx2, y: p.ty2 },
              {
                color: p.tickColor,
                width: p.tickWidth,
                borderDash: p.tickBorderDash,
                borderDashOffset: p.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: a,
        options: { border: l, grid: r },
      } = this,
      u = l.setContext(this.getContext()),
      c = l.display ? u.width : 0;
    if (!c) return;
    const h = r.setContext(this.getContext(0)).lineWidth,
      p = this._borderValue;
    let d, m, b, _;
    this.isHorizontal()
      ? ((d = da(e, this.left, c) - c / 2),
        (m = da(e, this.right, h) + h / 2),
        (b = _ = p))
      : ((b = da(e, this.top, c) - c / 2),
        (_ = da(e, this.bottom, h) + h / 2),
        (d = m = p)),
      a.save(),
      (a.lineWidth = u.width),
      (a.strokeStyle = u.color),
      a.beginPath(),
      a.moveTo(d, b),
      a.lineTo(m, _),
      a.stroke(),
      a.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const l = this.ctx,
      r = this._computeLabelArea();
    r && th(l, r);
    const u = this.getLabelItems(e);
    for (const c of u) {
      const h = c.options,
        p = c.font,
        d = c.label,
        m = c.textOffset;
      Hr(l, d, 0, m, p, h);
    }
    r && eh(l);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: a, title: l, reverse: r },
    } = this;
    if (!l.display) return;
    const u = Ge(l.font),
      c = An(l.padding),
      h = l.align;
    let p = u.lineHeight / 2;
    a === "bottom" || a === "center" || Ht(a)
      ? ((p += c.bottom),
        Me(l.text) && (p += u.lineHeight * (l.text.length - 1)))
      : (p += c.top);
    const {
      titleX: d,
      titleY: m,
      maxWidth: b,
      rotation: _,
    } = Hx(this, p, a, h);
    Hr(e, l.text, 0, 0, u, {
      color: l.color,
      maxWidth: b,
      rotation: _,
      textAlign: jx(h, a, r),
      textBaseline: "middle",
      translation: [d, m],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      a = (e.ticks && e.ticks.z) || 0,
      l = At(e.grid && e.grid.z, -1),
      r = At(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== _s.prototype.draw
      ? [
          {
            z: a,
            draw: (u) => {
              this.draw(u);
            },
          },
        ]
      : [
          {
            z: l,
            draw: (u) => {
              this.drawBackground(), this.drawGrid(u), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: a,
            draw: (u) => {
              this.drawLabels(u);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const a = this.chart.getSortedVisibleDatasetMetas(),
      l = this.axis + "AxisID",
      r = [];
    let u, c;
    for (u = 0, c = a.length; u < c; ++u) {
      const h = a[u];
      h[l] === this.id && (!e || h.type === e) && r.push(h);
    }
    return r;
  }
  _resolveTickFontOptions(e) {
    const a = this.options.ticks.setContext(this.getContext(e));
    return Ge(a.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Sr {
  constructor(e, a, l) {
    (this.type = e),
      (this.scope = a),
      (this.override = l),
      (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype
    );
  }
  register(e) {
    const a = Object.getPrototypeOf(e);
    let l;
    Fx(a) && (l = this.register(a));
    const r = this.items,
      u = e.id,
      c = this.scope + "." + u;
    if (!u) throw new Error("class does not have id: " + e);
    return (
      u in r ||
        ((r[u] = e),
        Nx(e, c, l),
        this.override && ue.override(e.id, e.overrides)),
      c
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const a = this.items,
      l = e.id,
      r = this.scope;
    l in a && delete a[l],
      r && l in ue[r] && (delete ue[r][l], this.override && delete Sa[l]);
  }
}
function Nx(i, e, a) {
  const l = Nl(Object.create(null), [
    a ? ue.get(a) : {},
    ue.get(e),
    i.defaults,
  ]);
  ue.set(e, l),
    i.defaultRoutes && Ux(e, i.defaultRoutes),
    i.descriptors && ue.describe(e, i.descriptors);
}
function Ux(i, e) {
  Object.keys(e).forEach((a) => {
    const l = a.split("."),
      r = l.pop(),
      u = [i].concat(l).join("."),
      c = e[a].split("."),
      h = c.pop(),
      p = c.join(".");
    ue.route(u, r, p, h);
  });
}
function Fx(i) {
  return "id" in i && "defaults" in i;
}
class qx {
  constructor() {
    (this.controllers = new Sr(Db, "datasets", !0)),
      (this.elements = new Sr(ws, "elements")),
      (this.plugins = new Sr(Object, "plugins")),
      (this.scales = new Sr(_s, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, a, l) {
    [...a].forEach((r) => {
      const u = l || this._getRegistryForType(r);
      l || u.isForType(r) || (u === this.plugins && r.id)
        ? this._exec(e, u, r)
        : Vt(r, (c) => {
            const h = l || this._getRegistryForType(c);
            this._exec(e, h, c);
          });
    });
  }
  _exec(e, a, l) {
    const r = Wf(e);
    Jt(l["before" + r], [], l), a[e](l), Jt(l["after" + r], [], l);
  }
  _getRegistryForType(e) {
    for (let a = 0; a < this._typedRegistries.length; a++) {
      const l = this._typedRegistries[a];
      if (l.isForType(e)) return l;
    }
    return this.plugins;
  }
  _get(e, a, l) {
    const r = a.get(e);
    if (r === void 0)
      throw new Error('"' + e + '" is not a registered ' + l + ".");
    return r;
  }
}
var jn = new qx();
class Yx {
  constructor() {
    this._init = void 0;
  }
  notify(e, a, l, r) {
    if (
      (a === "beforeInit" &&
        ((this._init = this._createDescriptors(e, !0)),
        this._notify(this._init, e, "install")),
      this._init === void 0)
    )
      return;
    const u = r ? this._descriptors(e).filter(r) : this._descriptors(e),
      c = this._notify(u, e, a, l);
    return (
      a === "afterDestroy" &&
        (this._notify(u, e, "stop"),
        this._notify(this._init, e, "uninstall"),
        (this._init = void 0)),
      c
    );
  }
  _notify(e, a, l, r) {
    r = r || {};
    for (const u of e) {
      const c = u.plugin,
        h = c[l],
        p = [a, r, u.options];
      if (Jt(h, p, c) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Pt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const a = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), a;
  }
  _createDescriptors(e, a) {
    const l = e && e.config,
      r = At(l.options && l.options.plugins, {}),
      u = Vx(l);
    return r === !1 && !a ? [] : Xx(e, u, r, a);
  }
  _notifyStateChanges(e) {
    const a = this._oldCache || [],
      l = this._cache,
      r = (u, c) =>
        u.filter((h) => !c.some((p) => h.plugin.id === p.plugin.id));
    this._notify(r(a, l), e, "stop"), this._notify(r(l, a), e, "start");
  }
}
function Vx(i) {
  const e = {},
    a = [],
    l = Object.keys(jn.plugins.items);
  for (let u = 0; u < l.length; u++) a.push(jn.getPlugin(l[u]));
  const r = i.plugins || [];
  for (let u = 0; u < r.length; u++) {
    const c = r[u];
    a.indexOf(c) === -1 && (a.push(c), (e[c.id] = !0));
  }
  return { plugins: a, localIds: e };
}
function Gx(i, e) {
  return !e && i === !1 ? null : i === !0 ? {} : i;
}
function Xx(i, { plugins: e, localIds: a }, l, r) {
  const u = [],
    c = i.getContext();
  for (const h of e) {
    const p = h.id,
      d = Gx(l[p], r);
    d !== null &&
      u.push({
        plugin: h,
        options: Qx(i.config, { plugin: h, local: a[p] }, d, c),
      });
  }
  return u;
}
function Qx(i, { plugin: e, local: a }, l, r) {
  const u = i.pluginScopeKeys(e),
    c = i.getOptionScopes(l, u);
  return (
    a && e.defaults && c.push(e.defaults),
    i.createResolver(c, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function qf(i, e) {
  const a = ue.datasets[i] || {};
  return (
    ((e.datasets || {})[i] || {}).indexAxis || e.indexAxis || a.indexAxis || "x"
  );
}
function Zx(i, e) {
  let a = i;
  return (
    i === "_index_" ? (a = e) : i === "_value_" && (a = e === "x" ? "y" : "x"),
    a
  );
}
function Kx(i, e) {
  return i === e ? "_index_" : "_value_";
}
function _0(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function Px(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function Yf(i, ...e) {
  if (_0(i)) return i;
  for (const a of e) {
    const l =
      a.axis || Px(a.position) || (i.length > 1 && _0(i[0].toLowerCase()));
    if (l) return l;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function x0(i, e, a) {
  if (a[e + "AxisID"] === i) return { axis: e };
}
function Ix(i, e) {
  if (e.data && e.data.datasets) {
    const a = e.data.datasets.filter((l) => l.xAxisID === i || l.yAxisID === i);
    if (a.length) return x0(i, "x", a[0]) || x0(i, "y", a[0]);
  }
  return {};
}
function Wx(i, e) {
  const a = Sa[i.type] || { scales: {} },
    l = e.scales || {},
    r = qf(i.type, e),
    u = Object.create(null);
  return (
    Object.keys(l).forEach((c) => {
      const h = l[c];
      if (!Ht(h))
        return console.error(`Invalid scale configuration for scale: ${c}`);
      if (h._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${c}`
        );
      const p = Yf(c, h, Ix(c, i), ue.scales[h.type]),
        d = Kx(p, r),
        m = a.scales || {};
      u[c] = kl(Object.create(null), [{ axis: p }, h, m[p], m[d]]);
    }),
    i.data.datasets.forEach((c) => {
      const h = c.type || i.type,
        p = c.indexAxis || qf(h, e),
        m = (Sa[h] || {}).scales || {};
      Object.keys(m).forEach((b) => {
        const _ = Zx(b, p),
          x = c[_ + "AxisID"] || _;
        (u[x] = u[x] || Object.create(null)),
          kl(u[x], [{ axis: _ }, l[x], m[b]]);
      });
    }),
    Object.keys(u).forEach((c) => {
      const h = u[c];
      kl(h, [ue.scales[h.type], ue.scale]);
    }),
    u
  );
}
function Hb(i) {
  const e = i.options || (i.options = {});
  (e.plugins = At(e.plugins, {})), (e.scales = Wx(i, e));
}
function Nb(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function $x(i) {
  return (i = i || {}), (i.data = Nb(i.data)), Hb(i), i;
}
const S0 = new Map(),
  Ub = new Set();
function Cr(i, e) {
  let a = S0.get(i);
  return a || ((a = e()), S0.set(i, a), Ub.add(a)), a;
}
const Tl = (i, e, a) => {
  const l = Br(e, a);
  l !== void 0 && i.add(l);
};
class Jx {
  constructor(e) {
    (this._config = $x(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = Nb(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), Hb(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Cr(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, a) {
    return Cr(`${e}.transition.${a}`, () => [
      [`datasets.${e}.transitions.${a}`, `transitions.${a}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, a) {
    return Cr(`${e}-${a}`, () => [
      [`datasets.${e}.elements.${a}`, `datasets.${e}`, `elements.${a}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const a = e.id,
      l = this.type;
    return Cr(`${l}-plugin-${a}`, () => [
      [`plugins.${a}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, a) {
    const l = this._scopeCache;
    let r = l.get(e);
    return (!r || a) && ((r = new Map()), l.set(e, r)), r;
  }
  getOptionScopes(e, a, l) {
    const { options: r, type: u } = this,
      c = this._cachedScopes(e, l),
      h = c.get(a);
    if (h) return h;
    const p = new Set();
    a.forEach((m) => {
      e && (p.add(e), m.forEach((b) => Tl(p, e, b))),
        m.forEach((b) => Tl(p, r, b)),
        m.forEach((b) => Tl(p, Sa[u] || {}, b)),
        m.forEach((b) => Tl(p, ue, b)),
        m.forEach((b) => Tl(p, Nf, b));
    });
    const d = Array.from(p);
    return (
      d.length === 0 && d.push(Object.create(null)), Ub.has(a) && c.set(a, d), d
    );
  }
  chartOptionScopes() {
    const { options: e, type: a } = this;
    return [e, Sa[a] || {}, ue.datasets[a] || {}, { type: a }, ue, Nf];
  }
  resolveNamedOptions(e, a, l, r = [""]) {
    const u = { $shared: !0 },
      { resolver: c, subPrefixes: h } = C0(this._resolverCache, e, r);
    let p = c;
    if (eS(c, a)) {
      (u.$shared = !1), (l = Qi(l) ? l() : l);
      const d = this.createResolver(e, l, h);
      p = ms(c, l, d);
    }
    for (const d of a) u[d] = p[d];
    return u;
  }
  createResolver(e, a, l = [""], r) {
    const { resolver: u } = C0(this._resolverCache, e, l);
    return Ht(a) ? ms(u, a, void 0, r) : u;
  }
}
function C0(i, e, a) {
  let l = i.get(e);
  l || ((l = new Map()), i.set(e, l));
  const r = a.join();
  let u = l.get(r);
  return (
    u ||
      ((u = {
        resolver: nh(e, a),
        subPrefixes: a.filter((h) => !h.toLowerCase().includes("hover")),
      }),
      l.set(r, u)),
    u
  );
}
const tS = (i) => Ht(i) && Object.getOwnPropertyNames(i).some((e) => Qi(i[e]));
function eS(i, e) {
  const { isScriptable: a, isIndexable: l } = _b(i);
  for (const r of e) {
    const u = a(r),
      c = l(r),
      h = (c || u) && i[r];
    if ((u && (Qi(h) || tS(h))) || (c && Me(h))) return !0;
  }
  return !1;
}
var nS = "4.5.1";
const iS = ["top", "bottom", "left", "right", "chartArea"];
function E0(i, e) {
  return i === "top" || i === "bottom" || (iS.indexOf(i) === -1 && e === "x");
}
function M0(i, e) {
  return function (a, l) {
    return a[i] === l[i] ? a[e] - l[e] : a[i] - l[i];
  };
}
function T0(i) {
  const e = i.chart,
    a = e.options.animation;
  e.notifyPlugins("afterRender"), Jt(a && a.onComplete, [i], e);
}
function aS(i) {
  const e = i.chart,
    a = e.options.animation;
  Jt(a && a.onProgress, [i], e);
}
function Fb(i) {
  return (
    sh() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Dr = {},
  A0 = (i) => {
    const e = Fb(i);
    return Object.values(Dr)
      .filter((a) => a.canvas === e)
      .pop();
  };
function sS(i, e, a) {
  const l = Object.keys(i);
  for (const r of l) {
    const u = +r;
    if (u >= e) {
      const c = i[r];
      delete i[r], (a > 0 || u > e) && (i[u + a] = c);
    }
  }
}
function lS(i, e, a, l) {
  return !a || i.type === "mouseout" ? null : l ? e : i;
}
let xs = class {
  static defaults = ue;
  static instances = Dr;
  static overrides = Sa;
  static registry = jn;
  static version = nS;
  static getChart = A0;
  static register(...e) {
    jn.add(...e), O0();
  }
  static unregister(...e) {
    jn.remove(...e), O0();
  }
  constructor(e, a) {
    const l = (this.config = new Jx(a)),
      r = Fb(e),
      u = A0(r);
    if (u)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          u.id +
          "' must be destroyed before the canvas with ID '" +
          u.canvas.id +
          "' can be reused."
      );
    const c = l.createResolver(l.chartOptionScopes(), this.getContext());
    (this.platform = new (l.platform || Cx(r))()),
      this.platform.updateConfig(l);
    const h = this.platform.acquireContext(r, c.aspectRatio),
      p = h && h.canvas,
      d = p && p.height,
      m = p && p.width;
    if (
      ((this.id = rw()),
      (this.ctx = h),
      (this.canvas = p),
      (this.width = m),
      (this.height = d),
      (this._options = c),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Yx()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Ow((b) => this.update(b), c.resizeDelay || 0)),
      (this._dataChanges = []),
      (Dr[this.id] = this),
      !h || !p)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    li.listen(this, "complete", T0),
      li.listen(this, "progress", aS),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: e, maintainAspectRatio: a },
      width: l,
      height: r,
      _aspectRatio: u,
    } = this;
    return Pt(e) ? (a && u ? u : r ? l / r : null) : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return jn;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : t0(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return Wm(this.canvas, this.ctx), this;
  }
  stop() {
    return li.stop(this), this;
  }
  resize(e, a) {
    li.running(this)
      ? (this._resizeBeforeDraw = { width: e, height: a })
      : this._resize(e, a);
  }
  _resize(e, a) {
    const l = this.options,
      r = this.canvas,
      u = l.maintainAspectRatio && this.aspectRatio,
      c = this.platform.getMaximumSize(r, e, a, u),
      h = l.devicePixelRatio || this.platform.getDevicePixelRatio(),
      p = this.width ? "resize" : "attach";
    (this.width = c.width),
      (this.height = c.height),
      (this._aspectRatio = this.aspectRatio),
      t0(this, h, !0) &&
        (this.notifyPlugins("resize", { size: c }),
        Jt(l.onResize, [this, c], this),
        this.attached && this._doResize(p) && this.render());
  }
  ensureScalesHaveIDs() {
    const a = this.options.scales || {};
    Vt(a, (l, r) => {
      l.id = r;
    });
  }
  buildOrUpdateScales() {
    const e = this.options,
      a = e.scales,
      l = this.scales,
      r = Object.keys(l).reduce((c, h) => ((c[h] = !1), c), {});
    let u = [];
    a &&
      (u = u.concat(
        Object.keys(a).map((c) => {
          const h = a[c],
            p = Yf(c, h),
            d = p === "r",
            m = p === "x";
          return {
            options: h,
            dposition: d ? "chartArea" : m ? "bottom" : "left",
            dtype: d ? "radialLinear" : m ? "category" : "linear",
          };
        })
      )),
      Vt(u, (c) => {
        const h = c.options,
          p = h.id,
          d = Yf(p, h),
          m = At(h.type, c.dtype);
        (h.position === void 0 || E0(h.position, d) !== E0(c.dposition)) &&
          (h.position = c.dposition),
          (r[p] = !0);
        let b = null;
        if (p in l && l[p].type === m) b = l[p];
        else {
          const _ = jn.getScale(m);
          (b = new _({ id: p, type: m, ctx: this.ctx, chart: this })),
            (l[b.id] = b);
        }
        b.init(h, e);
      }),
      Vt(r, (c, h) => {
        c || delete l[h];
      }),
      Vt(l, (c) => {
        qi.configure(this, c, c.options), qi.addBox(this, c);
      });
  }
  _updateMetasets() {
    const e = this._metasets,
      a = this.data.datasets.length,
      l = e.length;
    if ((e.sort((r, u) => r.index - u.index), l > a)) {
      for (let r = a; r < l; ++r) this._destroyDatasetMeta(r);
      e.splice(a, l - a);
    }
    this._sortedMetasets = e.slice(0).sort(M0("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: { datasets: a },
    } = this;
    e.length > a.length && delete this._stacks,
      e.forEach((l, r) => {
        a.filter((u) => u === l._dataset).length === 0 &&
          this._destroyDatasetMeta(r);
      });
  }
  buildOrUpdateControllers() {
    const e = [],
      a = this.data.datasets;
    let l, r;
    for (this._removeUnreferencedMetasets(), l = 0, r = a.length; l < r; l++) {
      const u = a[l];
      let c = this.getDatasetMeta(l);
      const h = u.type || this.config.type;
      if (
        (c.type &&
          c.type !== h &&
          (this._destroyDatasetMeta(l), (c = this.getDatasetMeta(l))),
        (c.type = h),
        (c.indexAxis = u.indexAxis || qf(h, this.options)),
        (c.order = u.order || 0),
        (c.index = l),
        (c.label = "" + u.label),
        (c.visible = this.isDatasetVisible(l)),
        c.controller)
      )
        c.controller.updateIndex(l), c.controller.linkScales();
      else {
        const p = jn.getController(h),
          { datasetElementType: d, dataElementType: m } = ue.datasets[h];
        Object.assign(p, {
          dataElementType: jn.getElement(m),
          datasetElementType: d && jn.getElement(d),
        }),
          (c.controller = new p(this, l)),
          e.push(c.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    Vt(
      this.data.datasets,
      (e, a) => {
        this.getDatasetMeta(a).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const a = this.config;
    a.update();
    const l = (this._options = a.createResolver(
        a.chartOptionScopes(),
        this.getContext()
      )),
      r = (this._animationsDisabled = !l.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
    )
      return;
    const u = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let c = 0;
    for (let d = 0, m = this.data.datasets.length; d < m; d++) {
      const { controller: b } = this.getDatasetMeta(d),
        _ = !r && u.indexOf(b) === -1;
      b.buildOrUpdateElements(_), (c = Math.max(+b.getMaxOverflow(), c));
    }
    (c = this._minPadding = l.layout.autoPadding ? c : 0),
      this._updateLayout(c),
      r ||
        Vt(u, (d) => {
          d.reset();
        }),
      this._updateDatasets(e),
      this.notifyPlugins("afterUpdate", { mode: e }),
      this._layers.sort(M0("z", "_idx"));
    const { _active: h, _lastEvent: p } = this;
    p
      ? this._eventHandler(p, !0)
      : h.length && this._updateHoverStyles(h, h, !0),
      this.render();
  }
  _updateScales() {
    Vt(this.scales, (e) => {
      qi.removeBox(this, e);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options,
      a = new Set(Object.keys(this._listeners)),
      l = new Set(e.events);
    (!qm(a, l) || !!this._responsiveListeners !== e.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this,
      a = this._getUniformDataChanges() || [];
    for (const { method: l, start: r, count: u } of a) {
      const c = l === "_removeElements" ? -u : u;
      sS(e, r, c);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) return;
    this._dataChanges = [];
    const a = this.data.datasets.length,
      l = (u) =>
        new Set(
          e
            .filter((c) => c[0] === u)
            .map((c, h) => h + "," + c.splice(1).join(","))
        ),
      r = l(0);
    for (let u = 1; u < a; u++) if (!qm(r, l(u))) return;
    return Array.from(r)
      .map((u) => u.split(","))
      .map((u) => ({ method: u[1], start: +u[2], count: +u[3] }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    qi.update(this, this.width, this.height, e);
    const a = this.chartArea,
      l = a.width <= 0 || a.height <= 0;
    (this._layers = []),
      Vt(
        this.boxes,
        (r) => {
          (l && r.position === "chartArea") ||
            (r.configure && r.configure(), this._layers.push(...r._layers()));
        },
        this
      ),
      this._layers.forEach((r, u) => {
        r._idx = u;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: e,
        cancelable: !0,
      }) !== !1
    ) {
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this.getDatasetMeta(a).controller.configure();
      for (let a = 0, l = this.data.datasets.length; a < l; ++a)
        this._updateDataset(a, Qi(e) ? e({ datasetIndex: a }) : e);
      this.notifyPlugins("afterDatasetsUpdate", { mode: e });
    }
  }
  _updateDataset(e, a) {
    const l = this.getDatasetMeta(e),
      r = { meta: l, index: e, mode: a, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
      (l.controller._update(a),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (li.has(this)
        ? this.attached && !li.running(this) && li.start(this)
        : (this.draw(), T0({ chart: this })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: l, height: r } = this._resizeBeforeDraw;
      (this._resizeBeforeDraw = null), this._resize(l, r);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const a = this._layers;
    for (e = 0; e < a.length && a[e].z <= 0; ++e) a[e].draw(this.chartArea);
    for (this._drawDatasets(); e < a.length; ++e) a[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const a = this._sortedMetasets,
      l = [];
    let r, u;
    for (r = 0, u = a.length; r < u; ++r) {
      const c = a[r];
      (!e || c.visible) && l.push(c);
    }
    return l;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let a = e.length - 1; a >= 0; --a) this._drawDataset(e[a]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const a = this.ctx,
      l = { meta: e, index: e.index, cancelable: !0 },
      r = j_(this, e);
    this.notifyPlugins("beforeDatasetDraw", l) !== !1 &&
      (r && th(a, r),
      e.controller.draw(),
      r && eh(a),
      (l.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", l));
  }
  isPointInArea(e) {
    return Fl(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, a, l, r) {
    const u = ix.modes[a];
    return typeof u == "function" ? u(this, e, l, r) : [];
  }
  getDatasetMeta(e) {
    const a = this.data.datasets[e],
      l = this._metasets;
    let r = l.filter((u) => u && u._dataset === a).pop();
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (a && a.order) || 0,
          index: e,
          _dataset: a,
          _parsed: [],
          _sorted: !1,
        }),
        l.push(r)),
      r
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Ea(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const a = this.data.datasets[e];
    if (!a) return !1;
    const l = this.getDatasetMeta(e);
    return typeof l.hidden == "boolean" ? !l.hidden : !a.hidden;
  }
  setDatasetVisibility(e, a) {
    const l = this.getDatasetMeta(e);
    l.hidden = !a;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, a, l) {
    const r = l ? "show" : "hide",
      u = this.getDatasetMeta(e),
      c = u.controller._resolveAnimations(void 0, r);
    Lr(a)
      ? ((u.data[a].hidden = !l), this.update())
      : (this.setDatasetVisibility(e, l),
        c.update(u, { visible: l }),
        this.update((h) => (h.datasetIndex === e ? r : void 0)));
  }
  hide(e, a) {
    this._updateVisibility(e, a, !1);
  }
  show(e, a) {
    this._updateVisibility(e, a, !0);
  }
  _destroyDatasetMeta(e) {
    const a = this._metasets[e];
    a && a.controller && a.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, a;
    for (
      this.stop(), li.remove(this), e = 0, a = this.data.datasets.length;
      e < a;
      ++e
    )
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: a } = this;
    this._stop(),
      this.config.clearCache(),
      e &&
        (this.unbindEvents(),
        Wm(e, a),
        this.platform.releaseContext(a),
        (this.canvas = null),
        (this.ctx = null)),
      delete Dr[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const e = this._listeners,
      a = this.platform,
      l = (u, c) => {
        a.addEventListener(this, u, c), (e[u] = c);
      },
      r = (u, c, h) => {
        (u.offsetX = c), (u.offsetY = h), this._eventHandler(u);
      };
    Vt(this.options.events, (u) => l(u, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners,
      a = this.platform,
      l = (p, d) => {
        a.addEventListener(this, p, d), (e[p] = d);
      },
      r = (p, d) => {
        e[p] && (a.removeEventListener(this, p, d), delete e[p]);
      },
      u = (p, d) => {
        this.canvas && this.resize(p, d);
      };
    let c;
    const h = () => {
      r("attach", h),
        (this.attached = !0),
        this.resize(),
        l("resize", u),
        l("detach", c);
    };
    (c = () => {
      (this.attached = !1),
        r("resize", u),
        this._stop(),
        this._resize(0, 0),
        l("attach", h);
    }),
      a.isAttached(this.canvas) ? h() : c();
  }
  unbindEvents() {
    Vt(this._listeners, (e, a) => {
      this.platform.removeEventListener(this, a, e);
    }),
      (this._listeners = {}),
      Vt(this._responsiveListeners, (e, a) => {
        this.platform.removeEventListener(this, a, e);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(e, a, l) {
    const r = l ? "set" : "remove";
    let u, c, h, p;
    for (
      a === "dataset" &&
        ((u = this.getDatasetMeta(e[0].datasetIndex)),
        u.controller["_" + r + "DatasetHoverStyle"]()),
        h = 0,
        p = e.length;
      h < p;
      ++h
    ) {
      c = e[h];
      const d = c && this.getDatasetMeta(c.datasetIndex).controller;
      d && d[r + "HoverStyle"](c.element, c.datasetIndex, c.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const a = this._active || [],
      l = e.map(({ datasetIndex: u, index: c }) => {
        const h = this.getDatasetMeta(u);
        if (!h) throw new Error("No dataset found at index " + u);
        return { datasetIndex: u, element: h.data[c], index: c };
      });
    !kr(l, a) &&
      ((this._active = l),
      (this._lastEvent = null),
      this._updateHoverStyles(l, a));
  }
  notifyPlugins(e, a, l) {
    return this._plugins.notify(this, e, a, l);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((a) => a.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, a, l) {
    const r = this.options.hover,
      u = (p, d) =>
        p.filter(
          (m) =>
            !d.some(
              (b) => m.datasetIndex === b.datasetIndex && m.index === b.index
            )
        ),
      c = u(a, e),
      h = l ? e : u(e, a);
    c.length && this.updateHoverStyle(c, r.mode, !1),
      h.length && r.mode && this.updateHoverStyle(h, r.mode, !0);
  }
  _eventHandler(e, a) {
    const l = {
        event: e,
        replay: a,
        cancelable: !0,
        inChartArea: this.isPointInArea(e),
      },
      r = (c) =>
        (c.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", l, r) === !1) return;
    const u = this._handleEvent(e, a, l.inChartArea);
    return (
      (l.cancelable = !1),
      this.notifyPlugins("afterEvent", l, r),
      (u || l.changed) && this.render(),
      this
    );
  }
  _handleEvent(e, a, l) {
    const { _active: r = [], options: u } = this,
      c = a,
      h = this._getActiveElements(e, r, l, c),
      p = gw(e),
      d = lS(e, this._lastEvent, l, p);
    l &&
      ((this._lastEvent = null),
      Jt(u.onHover, [e, h, this], this),
      p && Jt(u.onClick, [e, h, this], this));
    const m = !kr(h, r);
    return (
      (m || a) && ((this._active = h), this._updateHoverStyles(h, r, a)),
      (this._lastEvent = d),
      m
    );
  }
  _getActiveElements(e, a, l, r) {
    if (e.type === "mouseout") return [];
    if (!l) return a;
    const u = this.options.hover;
    return this.getElementsAtEventForMode(e, u.mode, u, r);
  }
};
function O0() {
  return Vt(xs.instances, (i) => i._plugins.invalidate());
}
function qb(i, e, a = e) {
  (i.lineCap = At(a.borderCapStyle, e.borderCapStyle)),
    i.setLineDash(At(a.borderDash, e.borderDash)),
    (i.lineDashOffset = At(a.borderDashOffset, e.borderDashOffset)),
    (i.lineJoin = At(a.borderJoinStyle, e.borderJoinStyle)),
    (i.lineWidth = At(a.borderWidth, e.borderWidth)),
    (i.strokeStyle = At(a.borderColor, e.borderColor));
}
function oS(i, e, a) {
  i.lineTo(a.x, a.y);
}
function rS(i) {
  return i.stepped
    ? Vw
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? Gw
    : oS;
}
function Yb(i, e, a = {}) {
  const l = i.length,
    { start: r = 0, end: u = l - 1 } = a,
    { start: c, end: h } = e,
    p = Math.max(r, c),
    d = Math.min(u, h),
    m = (r < c && u < c) || (r > h && u > h);
  return {
    count: l,
    start: p,
    loop: e.loop,
    ilen: d < p && !m ? l + d - p : d - p,
  };
}
function uS(i, e, a, l) {
  const { points: r, options: u } = e,
    { count: c, start: h, loop: p, ilen: d } = Yb(r, a, l),
    m = rS(u);
  let { move: b = !0, reverse: _ } = l || {},
    x,
    w,
    M;
  for (x = 0; x <= d; ++x)
    (w = r[(h + (_ ? d - x : x)) % c]),
      !w.skip &&
        (b ? (i.moveTo(w.x, w.y), (b = !1)) : m(i, M, w, _, u.stepped),
        (M = w));
  return p && ((w = r[(h + (_ ? d : 0)) % c]), m(i, M, w, _, u.stepped)), !!p;
}
function cS(i, e, a, l) {
  const r = e.points,
    { count: u, start: c, ilen: h } = Yb(r, a, l),
    { move: p = !0, reverse: d } = l || {};
  let m = 0,
    b = 0,
    _,
    x,
    w,
    M,
    O,
    E;
  const tt = ($) => (c + (d ? h - $ : $)) % u,
    I = () => {
      M !== O && (i.lineTo(m, O), i.lineTo(m, M), i.lineTo(m, E));
    };
  for (p && ((x = r[tt(0)]), i.moveTo(x.x, x.y)), _ = 0; _ <= h; ++_) {
    if (((x = r[tt(_)]), x.skip)) continue;
    const $ = x.x,
      j = x.y,
      J = $ | 0;
    J === w
      ? (j < M ? (M = j) : j > O && (O = j), (m = (b * m + $) / ++b))
      : (I(), i.lineTo($, j), (w = J), (b = 0), (M = O = j)),
      (E = j);
  }
  I();
}
function Vf(i) {
  const e = i.options,
    a = e.borderDash && e.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !a
    ? cS
    : uS;
}
function fS(i) {
  return i.stepped
    ? S_
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? C_
    : ba;
}
function hS(i, e, a, l) {
  let r = e._path;
  r || ((r = e._path = new Path2D()), e.path(r, a, l) && r.closePath()),
    qb(i, e.options),
    i.stroke(r);
}
function dS(i, e, a, l) {
  const { segments: r, options: u } = e,
    c = Vf(e);
  for (const h of r)
    qb(i, u, h.style),
      i.beginPath(),
      c(i, e, h, { start: a, end: a + l - 1 }) && i.closePath(),
      i.stroke();
}
const gS = typeof Path2D == "function";
function pS(i, e, a, l) {
  gS && !e.options.segment ? hS(i, e, a, l) : dS(i, e, a, l);
}
class rh extends ws {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  };
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, a) {
    const l = this.options;
    if (
      (l.tension || l.cubicInterpolationMode === "monotone") &&
      !l.stepped &&
      !this._pointsUpdated
    ) {
      const r = l.spanGaps ? this._loop : this._fullLoop;
      p_(this._points, l, e, r, a), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = k_(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      a = this.points;
    return e.length && a[e[0].start];
  }
  last() {
    const e = this.segments,
      a = this.points,
      l = e.length;
    return l && a[e[l - 1].end];
  }
  interpolate(e, a) {
    const l = this.options,
      r = e[a],
      u = this.points,
      c = O_(this, { property: a, start: r, end: r });
    if (!c.length) return;
    const h = [],
      p = fS(l);
    let d, m;
    for (d = 0, m = c.length; d < m; ++d) {
      const { start: b, end: _ } = c[d],
        x = u[b],
        w = u[_];
      if (x === w) {
        h.push(x);
        continue;
      }
      const M = Math.abs((r - x[a]) / (w[a] - x[a])),
        O = p(x, w, M, l.stepped);
      (O[a] = e[a]), h.push(O);
    }
    return h.length === 1 ? h[0] : h;
  }
  pathSegment(e, a, l) {
    return Vf(this)(e, this, a, l);
  }
  path(e, a, l) {
    const r = this.segments,
      u = Vf(this);
    let c = this._loop;
    (a = a || 0), (l = l || this.points.length - a);
    for (const h of r) c &= u(e, this, h, { start: a, end: a + l - 1 });
    return !!c;
  }
  draw(e, a, l, r) {
    const u = this.options || {};
    (this.points || []).length &&
      u.borderWidth &&
      (e.save(), pS(e, this, l, r), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
function z0(i, e, a, l) {
  const r = i.options,
    { [a]: u } = i.getProps([a], l);
  return Math.abs(e - u) < r.radius + r.hitRadius;
}
class uh extends ws {
  static id = "point";
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  constructor(e) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, a, l) {
    const r = this.options,
      { x: u, y: c } = this.getProps(["x", "y"], l);
    return (
      Math.pow(e - u, 2) + Math.pow(a - c, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(e, a) {
    return z0(this, e, "x", a);
  }
  inYRange(e, a) {
    return z0(this, e, "y", a);
  }
  getCenterPoint(e) {
    const { x: a, y: l } = this.getProps(["x", "y"], e);
    return { x: a, y: l };
  }
  size(e) {
    e = e || this.options || {};
    let a = e.radius || 0;
    a = Math.max(a, (a && e.hoverRadius) || 0);
    const l = (a && e.borderWidth) || 0;
    return (a + l) * 2;
  }
  draw(e, a) {
    const l = this.options;
    this.skip ||
      l.radius < 0.1 ||
      !Fl(this, a, this.size(l) / 2) ||
      ((e.strokeStyle = l.borderColor),
      (e.lineWidth = l.borderWidth),
      (e.fillStyle = l.backgroundColor),
      Uf(e, l, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
const D0 = (i, e) => {
    let { boxHeight: a = e, boxWidth: l = e } = i;
    return (
      i.usePointStyle &&
        ((a = Math.min(a, e)), (l = i.pointStyleWidth || Math.min(l, e))),
      { boxWidth: l, boxHeight: a, itemHeight: Math.max(e, a) }
    );
  },
  mS = (i, e) =>
    i !== null &&
    e !== null &&
    i.datasetIndex === e.datasetIndex &&
    i.index === e.index;
class k0 extends ws {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, a, l) {
    (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = l),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let a = Jt(e.generateLabels, [this.chart], this) || [];
    e.filter && (a = a.filter((l) => e.filter(l, this.chart.data))),
      e.sort && (a = a.sort((l, r) => e.sort(l, r, this.chart.data))),
      this.options.reverse && a.reverse(),
      (this.legendItems = a);
  }
  fit() {
    const { options: e, ctx: a } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const l = e.labels,
      r = Ge(l.font),
      u = r.size,
      c = this._computeTitleHeight(),
      { boxWidth: h, itemHeight: p } = D0(l, u);
    let d, m;
    (a.font = r.string),
      this.isHorizontal()
        ? ((d = this.maxWidth), (m = this._fitRows(c, u, h, p) + 10))
        : ((m = this.maxHeight), (d = this._fitCols(c, r, h, p) + 10)),
      (this.width = Math.min(d, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(m, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, a, l, r) {
    const {
        ctx: u,
        maxWidth: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.lineWidths = [0]),
      m = r + h;
    let b = e;
    (u.textAlign = "left"), (u.textBaseline = "middle");
    let _ = -1,
      x = -m;
    return (
      this.legendItems.forEach((w, M) => {
        const O = l + a / 2 + u.measureText(w.text).width;
        (M === 0 || d[d.length - 1] + O + 2 * h > c) &&
          ((b += m), (d[d.length - (M > 0 ? 0 : 1)] = 0), (x += m), _++),
          (p[M] = { left: 0, top: x, row: _, width: O, height: r }),
          (d[d.length - 1] += O + h);
      }),
      b
    );
  }
  _fitCols(e, a, l, r) {
    const {
        ctx: u,
        maxHeight: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      p = (this.legendHitBoxes = []),
      d = (this.columnSizes = []),
      m = c - e;
    let b = h,
      _ = 0,
      x = 0,
      w = 0,
      M = 0;
    return (
      this.legendItems.forEach((O, E) => {
        const { itemWidth: tt, itemHeight: I } = bS(l, a, u, O, r);
        E > 0 &&
          x + I + 2 * h > m &&
          ((b += _ + h),
          d.push({ width: _, height: x }),
          (w += _ + h),
          M++,
          (_ = x = 0)),
          (p[E] = { left: w, top: x, col: M, width: tt, height: I }),
          (_ = Math.max(_, tt)),
          (x += I + h);
      }),
      (b += _),
      d.push({ width: _, height: x }),
      b
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: a,
        options: {
          align: l,
          labels: { padding: r },
          rtl: u,
        },
      } = this,
      c = ds(u, this.left, this.width);
    if (this.isHorizontal()) {
      let h = 0,
        p = tn(l, this.left + r, this.right - this.lineWidths[h]);
      for (const d of a)
        h !== d.row &&
          ((h = d.row),
          (p = tn(l, this.left + r, this.right - this.lineWidths[h]))),
          (d.top += this.top + e + r),
          (d.left = c.leftForLtr(c.x(p), d.width)),
          (p += d.width + r);
    } else {
      let h = 0,
        p = tn(l, this.top + e + r, this.bottom - this.columnSizes[h].height);
      for (const d of a)
        d.col !== h &&
          ((h = d.col),
          (p = tn(
            l,
            this.top + e + r,
            this.bottom - this.columnSizes[h].height
          ))),
          (d.top = p),
          (d.left += this.left + r),
          (d.left = c.leftForLtr(c.x(d.left), d.width)),
          (p += d.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      th(e, this), this._draw(), eh(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: a, lineWidths: l, ctx: r } = this,
      { align: u, labels: c } = e,
      h = ue.color,
      p = ds(e.rtl, this.left, this.width),
      d = Ge(c.font),
      { padding: m } = c,
      b = d.size,
      _ = b / 2;
    let x;
    this.drawTitle(),
      (r.textAlign = p.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = d.string);
    const { boxWidth: w, boxHeight: M, itemHeight: O } = D0(c, b),
      E = function (J, T, S) {
        if (isNaN(w) || w <= 0 || isNaN(M) || M < 0) return;
        r.save();
        const v = At(S.lineWidth, 1);
        if (
          ((r.fillStyle = At(S.fillStyle, h)),
          (r.lineCap = At(S.lineCap, "butt")),
          (r.lineDashOffset = At(S.lineDashOffset, 0)),
          (r.lineJoin = At(S.lineJoin, "miter")),
          (r.lineWidth = v),
          (r.strokeStyle = At(S.strokeStyle, h)),
          r.setLineDash(At(S.lineDash, [])),
          c.usePointStyle)
        ) {
          const N = {
              radius: (M * Math.SQRT2) / 2,
              pointStyle: S.pointStyle,
              rotation: S.rotation,
              borderWidth: v,
            },
            k = p.xPlus(J, w / 2),
            R = T + _;
          vb(r, N, k, R, c.pointStyleWidth && w);
        } else {
          const N = T + Math.max((b - M) / 2, 0),
            k = p.leftForLtr(J, w),
            R = jl(S.borderRadius);
          r.beginPath(),
            Object.values(R).some((W) => W !== 0)
              ? Ff(r, { x: k, y: N, w, h: M, radius: R })
              : r.rect(k, N, w, M),
            r.fill(),
            v !== 0 && r.stroke();
        }
        r.restore();
      },
      tt = function (J, T, S) {
        Hr(r, S.text, J, T + O / 2, d, {
          strikethrough: S.hidden,
          textAlign: p.textAlign(S.textAlign),
        });
      },
      I = this.isHorizontal(),
      $ = this._computeTitleHeight();
    I
      ? (x = {
          x: tn(u, this.left + m, this.right - l[0]),
          y: this.top + m + $,
          line: 0,
        })
      : (x = {
          x: this.left + m,
          y: tn(u, this.top + $ + m, this.bottom - a[0].height),
          line: 0,
        }),
      Mb(this.ctx, e.textDirection);
    const j = O + m;
    this.legendItems.forEach((J, T) => {
      (r.strokeStyle = J.fontColor), (r.fillStyle = J.fontColor);
      const S = r.measureText(J.text).width,
        v = p.textAlign(J.textAlign || (J.textAlign = c.textAlign)),
        N = w + _ + S;
      let k = x.x,
        R = x.y;
      p.setWidth(this.width),
        I
          ? T > 0 &&
            k + N + m > this.right &&
            ((R = x.y += j),
            x.line++,
            (k = x.x = tn(u, this.left + m, this.right - l[x.line])))
          : T > 0 &&
            R + j > this.bottom &&
            ((k = x.x = k + a[x.line].width + m),
            x.line++,
            (R = x.y =
              tn(u, this.top + $ + m, this.bottom - a[x.line].height)));
      const W = p.x(k);
      if (
        (E(W, R, J),
        (k = zw(v, k + w + _, I ? k + N : this.right, e.rtl)),
        tt(p.x(k), R, J),
        I)
      )
        x.x += N + m;
      else if (typeof J.text != "string") {
        const lt = d.lineHeight;
        x.y += Vb(J, lt) + m;
      } else x.y += j;
    }),
      Tb(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      a = e.title,
      l = Ge(a.font),
      r = An(a.padding);
    if (!a.display) return;
    const u = ds(e.rtl, this.left, this.width),
      c = this.ctx,
      h = a.position,
      p = l.size / 2,
      d = r.top + p;
    let m,
      b = this.left,
      _ = this.width;
    if (this.isHorizontal())
      (_ = Math.max(...this.lineWidths)),
        (m = this.top + d),
        (b = tn(e.align, b, this.right - _));
    else {
      const w = this.columnSizes.reduce((M, O) => Math.max(M, O.height), 0);
      m =
        d +
        tn(
          e.align,
          this.top,
          this.bottom - w - e.labels.padding - this._computeTitleHeight()
        );
    }
    const x = tn(h, b, b + _);
    (c.textAlign = u.textAlign(mb(h))),
      (c.textBaseline = "middle"),
      (c.strokeStyle = a.color),
      (c.fillStyle = a.color),
      (c.font = l.string),
      Hr(c, a.text, x, m, l);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      a = Ge(e.font),
      l = An(e.padding);
    return e.display ? a.lineHeight + l.height : 0;
  }
  _getLegendItemAt(e, a) {
    let l, r, u;
    if (Ol(e, this.left, this.right) && Ol(a, this.top, this.bottom)) {
      for (u = this.legendHitBoxes, l = 0; l < u.length; ++l)
        if (
          ((r = u[l]),
          Ol(e, r.left, r.left + r.width) && Ol(a, r.top, r.top + r.height))
        )
          return this.legendItems[l];
    }
    return null;
  }
  handleEvent(e) {
    const a = this.options;
    if (!wS(e.type, a)) return;
    const l = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const r = this._hoveredItem,
        u = mS(r, l);
      r && !u && Jt(a.onLeave, [e, r, this], this),
        (this._hoveredItem = l),
        l && !u && Jt(a.onHover, [e, l, this], this);
    } else l && Jt(a.onClick, [e, l, this], this);
  }
}
function bS(i, e, a, l, r) {
  const u = yS(l, i, e, a),
    c = vS(r, l, e.lineHeight);
  return { itemWidth: u, itemHeight: c };
}
function yS(i, e, a, l) {
  let r = i.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((u, c) => (u.length > c.length ? u : c))),
    e + a.size / 2 + l.measureText(r).width
  );
}
function vS(i, e, a) {
  let l = i;
  return typeof e.text != "string" && (l = Vb(e, a)), l;
}
function Vb(i, e) {
  const a = i.text ? i.text.length : 0;
  return e * a;
}
function wS(i, e) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (i === "click" || i === "mouseup"))
  );
}
var ch = {
  id: "legend",
  _element: k0,
  start(i, e, a) {
    const l = (i.legend = new k0({ ctx: i.ctx, options: a, chart: i }));
    qi.configure(i, l, a), qi.addBox(i, l);
  },
  stop(i) {
    qi.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, e, a) {
    const l = i.legend;
    qi.configure(i, l, a), (l.options = a);
  },
  afterUpdate(i) {
    const e = i.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(i, e) {
    e.replay || i.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, e, a) {
      const l = e.datasetIndex,
        r = a.chart;
      r.isDatasetVisible(l)
        ? (r.hide(l), (e.hidden = !0))
        : (r.show(l), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const e = i.data.datasets,
          {
            labels: {
              usePointStyle: a,
              pointStyle: l,
              textAlign: r,
              color: u,
              useBorderRadius: c,
              borderRadius: h,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((p) => {
          const d = p.controller.getStyle(a ? 0 : void 0),
            m = An(d.borderWidth);
          return {
            text: e[p.index].label,
            fillStyle: d.backgroundColor,
            fontColor: u,
            hidden: !p.visible,
            lineCap: d.borderCapStyle,
            lineDash: d.borderDash,
            lineDashOffset: d.borderDashOffset,
            lineJoin: d.borderJoinStyle,
            lineWidth: (m.width + m.height) / 4,
            strokeStyle: d.borderColor,
            pointStyle: l || d.pointStyle,
            rotation: d.rotation,
            textAlign: r || d.textAlign,
            borderRadius: c && (h || d.borderRadius),
            datasetIndex: p.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
const Dl = {
  average(i) {
    if (!i.length) return !1;
    let e,
      a,
      l = new Set(),
      r = 0,
      u = 0;
    for (e = 0, a = i.length; e < a; ++e) {
      const h = i[e].element;
      if (h && h.hasValue()) {
        const p = h.tooltipPosition();
        l.add(p.x), (r += p.y), ++u;
      }
    }
    return u === 0 || l.size === 0
      ? !1
      : { x: [...l].reduce((h, p) => h + p) / l.size, y: r / u };
  },
  nearest(i, e) {
    if (!i.length) return !1;
    let a = e.x,
      l = e.y,
      r = Number.POSITIVE_INFINITY,
      u,
      c,
      h;
    for (u = 0, c = i.length; u < c; ++u) {
      const p = i[u].element;
      if (p && p.hasValue()) {
        const d = p.getCenterPoint(),
          m = Hf(e, d);
        m < r && ((r = m), (h = p));
      }
    }
    if (h) {
      const p = h.tooltipPosition();
      (a = p.x), (l = p.y);
    }
    return { x: a, y: l };
  },
};
function Ln(i, e) {
  return e && (Me(e) ? Array.prototype.push.apply(i, e) : i.push(e)), i;
}
function oi(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function _S(i, e) {
  const { element: a, datasetIndex: l, index: r } = e,
    u = i.getDatasetMeta(l).controller,
    { label: c, value: h } = u.getLabelAndValue(r);
  return {
    chart: i,
    label: c,
    parsed: u.getParsed(r),
    raw: i.data.datasets[l].data[r],
    formattedValue: h,
    dataset: u.getDataset(),
    dataIndex: r,
    datasetIndex: l,
    element: a,
  };
}
function R0(i, e) {
  const a = i.chart.ctx,
    { body: l, footer: r, title: u } = i,
    { boxWidth: c, boxHeight: h } = e,
    p = Ge(e.bodyFont),
    d = Ge(e.titleFont),
    m = Ge(e.footerFont),
    b = u.length,
    _ = r.length,
    x = l.length,
    w = An(e.padding);
  let M = w.height,
    O = 0,
    E = l.reduce(
      ($, j) => $ + j.before.length + j.lines.length + j.after.length,
      0
    );
  if (
    ((E += i.beforeBody.length + i.afterBody.length),
    b &&
      (M += b * d.lineHeight + (b - 1) * e.titleSpacing + e.titleMarginBottom),
    E)
  ) {
    const $ = e.displayColors ? Math.max(h, p.lineHeight) : p.lineHeight;
    M += x * $ + (E - x) * p.lineHeight + (E - 1) * e.bodySpacing;
  }
  _ && (M += e.footerMarginTop + _ * m.lineHeight + (_ - 1) * e.footerSpacing);
  let tt = 0;
  const I = function ($) {
    O = Math.max(O, a.measureText($).width + tt);
  };
  return (
    a.save(),
    (a.font = d.string),
    Vt(i.title, I),
    (a.font = p.string),
    Vt(i.beforeBody.concat(i.afterBody), I),
    (tt = e.displayColors ? c + 2 + e.boxPadding : 0),
    Vt(l, ($) => {
      Vt($.before, I), Vt($.lines, I), Vt($.after, I);
    }),
    (tt = 0),
    (a.font = m.string),
    Vt(i.footer, I),
    a.restore(),
    (O += w.width),
    { width: O, height: M }
  );
}
function xS(i, e) {
  const { y: a, height: l } = e;
  return a < l / 2 ? "top" : a > i.height - l / 2 ? "bottom" : "center";
}
function SS(i, e, a, l) {
  const { x: r, width: u } = l,
    c = a.caretSize + a.caretPadding;
  if ((i === "left" && r + u + c > e.width) || (i === "right" && r - u - c < 0))
    return !0;
}
function CS(i, e, a, l) {
  const { x: r, width: u } = a,
    {
      width: c,
      chartArea: { left: h, right: p },
    } = i;
  let d = "center";
  return (
    l === "center"
      ? (d = r <= (h + p) / 2 ? "left" : "right")
      : r <= u / 2
      ? (d = "left")
      : r >= c - u / 2 && (d = "right"),
    SS(d, i, e, a) && (d = "center"),
    d
  );
}
function B0(i, e, a) {
  const l = a.yAlign || e.yAlign || xS(i, a);
  return { xAlign: a.xAlign || e.xAlign || CS(i, e, a, l), yAlign: l };
}
function ES(i, e) {
  let { x: a, width: l } = i;
  return e === "right" ? (a -= l) : e === "center" && (a -= l / 2), a;
}
function MS(i, e, a) {
  let { y: l, height: r } = i;
  return (
    e === "top" ? (l += a) : e === "bottom" ? (l -= r + a) : (l -= r / 2), l
  );
}
function L0(i, e, a, l) {
  const { caretSize: r, caretPadding: u, cornerRadius: c } = i,
    { xAlign: h, yAlign: p } = a,
    d = r + u,
    { topLeft: m, topRight: b, bottomLeft: _, bottomRight: x } = jl(c);
  let w = ES(e, h);
  const M = MS(e, p, d);
  return (
    p === "center"
      ? h === "left"
        ? (w += d)
        : h === "right" && (w -= d)
      : h === "left"
      ? (w -= Math.max(m, _) + r)
      : h === "right" && (w += Math.max(b, x) + r),
    { x: vn(w, 0, l.width - e.width), y: vn(M, 0, l.height - e.height) }
  );
}
function Er(i, e, a) {
  const l = An(a.padding);
  return e === "center"
    ? i.x + i.width / 2
    : e === "right"
    ? i.x + i.width - l.right
    : i.x + l.left;
}
function j0(i) {
  return Ln([], oi(i));
}
function TS(i, e, a) {
  return Ea(i, { tooltip: e, tooltipItems: a, type: "tooltip" });
}
function H0(i, e) {
  const a = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return a ? i.override(a) : i;
}
const Gb = {
  beforeTitle: si,
  title(i) {
    if (i.length > 0) {
      const e = i[0],
        a = e.chart.data.labels,
        l = a ? a.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (l > 0 && e.dataIndex < l) return a[e.dataIndex];
    }
    return "";
  },
  afterTitle: si,
  beforeBody: si,
  beforeLabel: si,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let e = i.dataset.label || "";
    e && (e += ": ");
    const a = i.formattedValue;
    return Pt(a) || (e += a), e;
  },
  labelColor(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: a.borderColor,
      backgroundColor: a.backgroundColor,
      borderWidth: a.borderWidth,
      borderDash: a.borderDash,
      borderDashOffset: a.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: a.pointStyle, rotation: a.rotation };
  },
  afterLabel: si,
  afterBody: si,
  beforeFooter: si,
  footer: si,
  afterFooter: si,
};
function Ye(i, e, a, l) {
  const r = i[e].call(a, l);
  return typeof r > "u" ? Gb[e].call(a, l) : r;
}
class N0 extends ws {
  static positioners = Dl;
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(e) {
    (this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const a = this.chart,
      l = this.options.setContext(this.getContext()),
      r = l.enabled && a.options.animation && l.animations,
      u = new Ob(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(u)), u;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = TS(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, a) {
    const { callbacks: l } = a,
      r = Ye(l, "beforeTitle", this, e),
      u = Ye(l, "title", this, e),
      c = Ye(l, "afterTitle", this, e);
    let h = [];
    return (h = Ln(h, oi(r))), (h = Ln(h, oi(u))), (h = Ln(h, oi(c))), h;
  }
  getBeforeBody(e, a) {
    return j0(Ye(a.callbacks, "beforeBody", this, e));
  }
  getBody(e, a) {
    const { callbacks: l } = a,
      r = [];
    return (
      Vt(e, (u) => {
        const c = { before: [], lines: [], after: [] },
          h = H0(l, u);
        Ln(c.before, oi(Ye(h, "beforeLabel", this, u))),
          Ln(c.lines, Ye(h, "label", this, u)),
          Ln(c.after, oi(Ye(h, "afterLabel", this, u))),
          r.push(c);
      }),
      r
    );
  }
  getAfterBody(e, a) {
    return j0(Ye(a.callbacks, "afterBody", this, e));
  }
  getFooter(e, a) {
    const { callbacks: l } = a,
      r = Ye(l, "beforeFooter", this, e),
      u = Ye(l, "footer", this, e),
      c = Ye(l, "afterFooter", this, e);
    let h = [];
    return (h = Ln(h, oi(r))), (h = Ln(h, oi(u))), (h = Ln(h, oi(c))), h;
  }
  _createItems(e) {
    const a = this._active,
      l = this.chart.data,
      r = [],
      u = [],
      c = [];
    let h = [],
      p,
      d;
    for (p = 0, d = a.length; p < d; ++p) h.push(_S(this.chart, a[p]));
    return (
      e.filter && (h = h.filter((m, b, _) => e.filter(m, b, _, l))),
      e.itemSort && (h = h.sort((m, b) => e.itemSort(m, b, l))),
      Vt(h, (m) => {
        const b = H0(e.callbacks, m);
        r.push(Ye(b, "labelColor", this, m)),
          u.push(Ye(b, "labelPointStyle", this, m)),
          c.push(Ye(b, "labelTextColor", this, m));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = u),
      (this.labelTextColors = c),
      (this.dataPoints = h),
      h
    );
  }
  update(e, a) {
    const l = this.options.setContext(this.getContext()),
      r = this._active;
    let u,
      c = [];
    if (!r.length) this.opacity !== 0 && (u = { opacity: 0 });
    else {
      const h = Dl[l.position].call(this, r, this._eventPosition);
      (c = this._createItems(l)),
        (this.title = this.getTitle(c, l)),
        (this.beforeBody = this.getBeforeBody(c, l)),
        (this.body = this.getBody(c, l)),
        (this.afterBody = this.getAfterBody(c, l)),
        (this.footer = this.getFooter(c, l));
      const p = (this._size = R0(this, l)),
        d = Object.assign({}, h, p),
        m = B0(this.chart, l, d),
        b = L0(l, d, m, this.chart);
      (this.xAlign = m.xAlign),
        (this.yAlign = m.yAlign),
        (u = {
          opacity: 1,
          x: b.x,
          y: b.y,
          width: p.width,
          height: p.height,
          caretX: h.x,
          caretY: h.y,
        });
    }
    (this._tooltipItems = c),
      (this.$context = void 0),
      u && this._resolveAnimations().update(this, u),
      e &&
        l.external &&
        l.external.call(this, { chart: this.chart, tooltip: this, replay: a });
  }
  drawCaret(e, a, l, r) {
    const u = this.getCaretPosition(e, l, r);
    a.lineTo(u.x1, u.y1), a.lineTo(u.x2, u.y2), a.lineTo(u.x3, u.y3);
  }
  getCaretPosition(e, a, l) {
    const { xAlign: r, yAlign: u } = this,
      { caretSize: c, cornerRadius: h } = l,
      { topLeft: p, topRight: d, bottomLeft: m, bottomRight: b } = jl(h),
      { x: _, y: x } = e,
      { width: w, height: M } = a;
    let O, E, tt, I, $, j;
    return (
      u === "center"
        ? (($ = x + M / 2),
          r === "left"
            ? ((O = _), (E = O - c), (I = $ + c), (j = $ - c))
            : ((O = _ + w), (E = O + c), (I = $ - c), (j = $ + c)),
          (tt = O))
        : (r === "left"
            ? (E = _ + Math.max(p, m) + c)
            : r === "right"
            ? (E = _ + w - Math.max(d, b) - c)
            : (E = this.caretX),
          u === "top"
            ? ((I = x), ($ = I - c), (O = E - c), (tt = E + c))
            : ((I = x + M), ($ = I + c), (O = E + c), (tt = E - c)),
          (j = I)),
      { x1: O, x2: E, x3: tt, y1: I, y2: $, y3: j }
    );
  }
  drawTitle(e, a, l) {
    const r = this.title,
      u = r.length;
    let c, h, p;
    if (u) {
      const d = ds(l.rtl, this.x, this.width);
      for (
        e.x = Er(this, l.titleAlign, l),
          a.textAlign = d.textAlign(l.titleAlign),
          a.textBaseline = "middle",
          c = Ge(l.titleFont),
          h = l.titleSpacing,
          a.fillStyle = l.titleColor,
          a.font = c.string,
          p = 0;
        p < u;
        ++p
      )
        a.fillText(r[p], d.x(e.x), e.y + c.lineHeight / 2),
          (e.y += c.lineHeight + h),
          p + 1 === u && (e.y += l.titleMarginBottom - h);
    }
  }
  _drawColorBox(e, a, l, r, u) {
    const c = this.labelColors[l],
      h = this.labelPointStyles[l],
      { boxHeight: p, boxWidth: d } = u,
      m = Ge(u.bodyFont),
      b = Er(this, "left", u),
      _ = r.x(b),
      x = p < m.lineHeight ? (m.lineHeight - p) / 2 : 0,
      w = a.y + x;
    if (u.usePointStyle) {
      const M = {
          radius: Math.min(d, p) / 2,
          pointStyle: h.pointStyle,
          rotation: h.rotation,
          borderWidth: 1,
        },
        O = r.leftForLtr(_, d) + d / 2,
        E = w + p / 2;
      (e.strokeStyle = u.multiKeyBackground),
        (e.fillStyle = u.multiKeyBackground),
        Uf(e, M, O, E),
        (e.strokeStyle = c.borderColor),
        (e.fillStyle = c.backgroundColor),
        Uf(e, M, O, E);
    } else {
      (e.lineWidth = Ht(c.borderWidth)
        ? Math.max(...Object.values(c.borderWidth))
        : c.borderWidth || 1),
        (e.strokeStyle = c.borderColor),
        e.setLineDash(c.borderDash || []),
        (e.lineDashOffset = c.borderDashOffset || 0);
      const M = r.leftForLtr(_, d),
        O = r.leftForLtr(r.xPlus(_, 1), d - 2),
        E = jl(c.borderRadius);
      Object.values(E).some((tt) => tt !== 0)
        ? (e.beginPath(),
          (e.fillStyle = u.multiKeyBackground),
          Ff(e, { x: M, y: w, w: d, h: p, radius: E }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = c.backgroundColor),
          e.beginPath(),
          Ff(e, { x: O, y: w + 1, w: d - 2, h: p - 2, radius: E }),
          e.fill())
        : ((e.fillStyle = u.multiKeyBackground),
          e.fillRect(M, w, d, p),
          e.strokeRect(M, w, d, p),
          (e.fillStyle = c.backgroundColor),
          e.fillRect(O, w + 1, d - 2, p - 2));
    }
    e.fillStyle = this.labelTextColors[l];
  }
  drawBody(e, a, l) {
    const { body: r } = this,
      {
        bodySpacing: u,
        bodyAlign: c,
        displayColors: h,
        boxHeight: p,
        boxWidth: d,
        boxPadding: m,
      } = l,
      b = Ge(l.bodyFont);
    let _ = b.lineHeight,
      x = 0;
    const w = ds(l.rtl, this.x, this.width),
      M = function (S) {
        a.fillText(S, w.x(e.x + x), e.y + _ / 2), (e.y += _ + u);
      },
      O = w.textAlign(c);
    let E, tt, I, $, j, J, T;
    for (
      a.textAlign = c,
        a.textBaseline = "middle",
        a.font = b.string,
        e.x = Er(this, O, l),
        a.fillStyle = l.bodyColor,
        Vt(this.beforeBody, M),
        x = h && O !== "right" ? (c === "center" ? d / 2 + m : d + 2 + m) : 0,
        $ = 0,
        J = r.length;
      $ < J;
      ++$
    ) {
      for (
        E = r[$],
          tt = this.labelTextColors[$],
          a.fillStyle = tt,
          Vt(E.before, M),
          I = E.lines,
          h &&
            I.length &&
            (this._drawColorBox(a, e, $, w, l),
            (_ = Math.max(b.lineHeight, p))),
          j = 0,
          T = I.length;
        j < T;
        ++j
      )
        M(I[j]), (_ = b.lineHeight);
      Vt(E.after, M);
    }
    (x = 0), (_ = b.lineHeight), Vt(this.afterBody, M), (e.y -= u);
  }
  drawFooter(e, a, l) {
    const r = this.footer,
      u = r.length;
    let c, h;
    if (u) {
      const p = ds(l.rtl, this.x, this.width);
      for (
        e.x = Er(this, l.footerAlign, l),
          e.y += l.footerMarginTop,
          a.textAlign = p.textAlign(l.footerAlign),
          a.textBaseline = "middle",
          c = Ge(l.footerFont),
          a.fillStyle = l.footerColor,
          a.font = c.string,
          h = 0;
        h < u;
        ++h
      )
        a.fillText(r[h], p.x(e.x), e.y + c.lineHeight / 2),
          (e.y += c.lineHeight + l.footerSpacing);
    }
  }
  drawBackground(e, a, l, r) {
    const { xAlign: u, yAlign: c } = this,
      { x: h, y: p } = e,
      { width: d, height: m } = l,
      {
        topLeft: b,
        topRight: _,
        bottomLeft: x,
        bottomRight: w,
      } = jl(r.cornerRadius);
    (a.fillStyle = r.backgroundColor),
      (a.strokeStyle = r.borderColor),
      (a.lineWidth = r.borderWidth),
      a.beginPath(),
      a.moveTo(h + b, p),
      c === "top" && this.drawCaret(e, a, l, r),
      a.lineTo(h + d - _, p),
      a.quadraticCurveTo(h + d, p, h + d, p + _),
      c === "center" && u === "right" && this.drawCaret(e, a, l, r),
      a.lineTo(h + d, p + m - w),
      a.quadraticCurveTo(h + d, p + m, h + d - w, p + m),
      c === "bottom" && this.drawCaret(e, a, l, r),
      a.lineTo(h + x, p + m),
      a.quadraticCurveTo(h, p + m, h, p + m - x),
      c === "center" && u === "left" && this.drawCaret(e, a, l, r),
      a.lineTo(h, p + b),
      a.quadraticCurveTo(h, p, h + b, p),
      a.closePath(),
      a.fill(),
      r.borderWidth > 0 && a.stroke();
  }
  _updateAnimationTarget(e) {
    const a = this.chart,
      l = this.$animations,
      r = l && l.x,
      u = l && l.y;
    if (r || u) {
      const c = Dl[e.position].call(this, this._active, this._eventPosition);
      if (!c) return;
      const h = (this._size = R0(this, e)),
        p = Object.assign({}, c, this._size),
        d = B0(a, e, p),
        m = L0(e, p, d, a);
      (r._to !== m.x || u._to !== m.y) &&
        ((this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (this.width = h.width),
        (this.height = h.height),
        (this.caretX = c.x),
        (this.caretY = c.y),
        this._resolveAnimations().update(this, m));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const a = this.options.setContext(this.getContext());
    let l = this.opacity;
    if (!l) return;
    this._updateAnimationTarget(a);
    const r = { width: this.width, height: this.height },
      u = { x: this.x, y: this.y };
    l = Math.abs(l) < 0.001 ? 0 : l;
    const c = An(a.padding),
      h =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    a.enabled &&
      h &&
      (e.save(),
      (e.globalAlpha = l),
      this.drawBackground(u, e, r, a),
      Mb(e, a.textDirection),
      (u.y += c.top),
      this.drawTitle(u, e, a),
      this.drawBody(u, e, a),
      this.drawFooter(u, e, a),
      Tb(e, a.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, a) {
    const l = this._active,
      r = e.map(({ datasetIndex: h, index: p }) => {
        const d = this.chart.getDatasetMeta(h);
        if (!d) throw new Error("Cannot find a dataset at index " + h);
        return { datasetIndex: h, element: d.data[p], index: p };
      }),
      u = !kr(l, r),
      c = this._positionChanged(r, a);
    (u || c) &&
      ((this._active = r),
      (this._eventPosition = a),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, a, l = !0) {
    if (a && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      u = this._active || [],
      c = this._getActiveElements(e, u, a, l),
      h = this._positionChanged(c, e),
      p = a || !kr(c, u) || h;
    return (
      p &&
        ((this._active = c),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, a))),
      p
    );
  }
  _getActiveElements(e, a, l, r) {
    const u = this.options;
    if (e.type === "mouseout") return [];
    if (!r)
      return a.filter(
        (h) =>
          this.chart.data.datasets[h.datasetIndex] &&
          this.chart
            .getDatasetMeta(h.datasetIndex)
            .controller.getParsed(h.index) !== void 0
      );
    const c = this.chart.getElementsAtEventForMode(e, u.mode, u, l);
    return u.reverse && c.reverse(), c;
  }
  _positionChanged(e, a) {
    const { caretX: l, caretY: r, options: u } = this,
      c = Dl[u.position].call(this, e, a);
    return c !== !1 && (l !== c.x || r !== c.y);
  }
}
var fh = {
  id: "tooltip",
  _element: N0,
  positioners: Dl,
  afterInit(i, e, a) {
    a && (i.tooltip = new N0({ chart: i, options: a }));
  },
  beforeUpdate(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  reset(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  afterDraw(i) {
    const e = i.tooltip;
    if (e && e._willRender()) {
      const a = { tooltip: e };
      if (i.notifyPlugins("beforeTooltipDraw", { ...a, cancelable: !0 }) === !1)
        return;
      e.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", a);
    }
  },
  afterEvent(i, e) {
    if (i.tooltip) {
      const a = e.replay;
      i.tooltip.handleEvent(e.event, a, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, e) => e.bodyFont.size,
    boxWidth: (i, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Gb,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const AS = (i, e, a, l) => (
  typeof e == "string"
    ? ((a = i.push(e) - 1), l.unshift({ index: a, label: e }))
    : isNaN(e) && (a = null),
  a
);
function OS(i, e, a, l) {
  const r = i.indexOf(e);
  if (r === -1) return AS(i, e, a, l);
  const u = i.lastIndexOf(e);
  return r !== u ? a : r;
}
const zS = (i, e) => (i === null ? null : vn(Math.round(i), 0, e));
function U0(i) {
  const e = this.getLabels();
  return i >= 0 && i < e.length ? e[i] : i;
}
class hh extends _s {
  static id = "category";
  static defaults = { ticks: { callback: U0 } };
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const a = this._addedLabels;
    if (a.length) {
      const l = this.getLabels();
      for (const { index: r, label: u } of a) l[r] === u && l.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, a) {
    if (Pt(e)) return null;
    const l = this.getLabels();
    return (
      (a =
        isFinite(a) && l[a] === e ? a : OS(l, e, At(a, e), this._addedLabels)),
      zS(a, l.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: a } = this.getUserBounds();
    let { min: l, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (l = 0), a || (r = this.getLabels().length - 1)),
      (this.min = l),
      (this.max = r);
  }
  buildTicks() {
    const e = this.min,
      a = this.max,
      l = this.options.offset,
      r = [];
    let u = this.getLabels();
    (u = e === 0 && a === u.length - 1 ? u : u.slice(e, a + 1)),
      (this._valueRange = Math.max(u.length - (l ? 0 : 1), 1)),
      (this._startValue = this.min - (l ? 0.5 : 0));
    for (let c = e; c <= a; c++) r.push({ value: c });
    return r;
  }
  getLabelForValue(e) {
    return U0.call(this, e);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function DS(i, e) {
  const a = [],
    {
      bounds: r,
      step: u,
      min: c,
      max: h,
      precision: p,
      count: d,
      maxTicks: m,
      maxDigits: b,
      includeBounds: _,
    } = i,
    x = u || 1,
    w = m - 1,
    { min: M, max: O } = e,
    E = !Pt(c),
    tt = !Pt(h),
    I = !Pt(d),
    $ = (O - M) / (b + 1);
  let j = Vm((O - M) / w / x) * x,
    J,
    T,
    S,
    v;
  if (j < 1e-14 && !E && !tt) return [{ value: M }, { value: O }];
  (v = Math.ceil(O / j) - Math.floor(M / j)),
    v > w && (j = Vm((v * j) / w / x) * x),
    Pt(p) || ((J = Math.pow(10, p)), (j = Math.ceil(j * J) / J)),
    r === "ticks"
      ? ((T = Math.floor(M / j) * j), (S = Math.ceil(O / j) * j))
      : ((T = M), (S = O)),
    E && tt && u && vw((h - c) / u, j / 1e3)
      ? ((v = Math.round(Math.min((h - c) / j, m))),
        (j = (h - c) / v),
        (T = c),
        (S = h))
      : I
      ? ((T = E ? c : T), (S = tt ? h : S), (v = d - 1), (j = (S - T) / v))
      : ((v = (S - T) / j),
        Rl(v, Math.round(v), j / 1e3)
          ? (v = Math.round(v))
          : (v = Math.ceil(v)));
  const N = Math.max(Gm(j), Gm(T));
  (J = Math.pow(10, Pt(p) ? N : p)),
    (T = Math.round(T * J) / J),
    (S = Math.round(S * J) / J);
  let k = 0;
  for (
    E &&
    (_ && T !== c
      ? (a.push({ value: c }),
        T < c && k++,
        Rl(Math.round((T + k * j) * J) / J, c, F0(c, $, i)) && k++)
      : T < c && k++);
    k < v;
    ++k
  ) {
    const R = Math.round((T + k * j) * J) / J;
    if (tt && R > h) break;
    a.push({ value: R });
  }
  return (
    tt && _ && S !== h
      ? a.length && Rl(a[a.length - 1].value, h, F0(h, $, i))
        ? (a[a.length - 1].value = h)
        : a.push({ value: h })
      : (!tt || S === h) && a.push({ value: S }),
    a
  );
}
function F0(i, e, { horizontal: a, minRotation: l }) {
  const r = ya(l),
    u = (a ? Math.sin(r) : Math.cos(r)) || 0.001,
    c = 0.75 * e * ("" + i).length;
  return Math.min(e / u, c);
}
class kS extends _s {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, a) {
    return Pt(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: a, maxDefined: l } = this.getUserBounds();
    let { min: r, max: u } = this;
    const c = (p) => (r = a ? r : p),
      h = (p) => (u = l ? u : p);
    if (e) {
      const p = ps(r),
        d = ps(u);
      p < 0 && d < 0 ? h(0) : p > 0 && d > 0 && c(0);
    }
    if (r === u) {
      let p = u === 0 ? 1 : Math.abs(u * 0.05);
      h(u + p), e || c(r - p);
    }
    (this.min = r), (this.max = u);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: a, stepSize: l } = e,
      r;
    return (
      l
        ? ((r = Math.ceil(this.max / l) - Math.floor(this.min / l) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${l} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (a = a || 11)),
      a && (r = Math.min(a, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      a = e.ticks;
    let l = this.getTickLimit();
    l = Math.max(2, l);
    const r = {
        maxTicks: l,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: a.precision,
        step: a.stepSize,
        count: a.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: a.minRotation || 0,
        includeBounds: a.includeBounds !== !1,
      },
      u = this._range || this,
      c = DS(r, u);
    return (
      e.bounds === "ticks" && ww(c, this, "value"),
      e.reverse
        ? (c.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      c
    );
  }
  configure() {
    const e = this.ticks;
    let a = this.min,
      l = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const r = (l - a) / Math.max(e.length - 1, 1) / 2;
      (a -= r), (l += r);
    }
    (this._startValue = a), (this._endValue = l), (this._valueRange = l - a);
  }
  getLabelForValue(e) {
    return bb(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class dh extends kS {
  static id = "linear";
  static defaults = { ticks: { callback: yb.formatters.numeric } };
  determineDataLimits() {
    const { min: e, max: a } = this.getMinMax(!0);
    (this.min = wn(e) ? e : 0),
      (this.max = wn(a) ? a : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      a = e ? this.width : this.height,
      l = ya(this.options.ticks.minRotation),
      r = (e ? Math.sin(l) : Math.cos(l)) || 0.001,
      u = this._resolveTickFontOptions(0);
    return Math.ceil(a / Math.min(40, u.lineHeight / r));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
const Wr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ve = Object.keys(Wr);
function q0(i, e) {
  return i - e;
}
function Y0(i, e) {
  if (Pt(e)) return null;
  const a = i._adapter,
    { parser: l, round: r, isoWeekday: u } = i._parseOpts;
  let c = e;
  return (
    typeof l == "function" && (c = l(c)),
    wn(c) || (c = typeof l == "string" ? a.parse(c, l) : a.parse(c)),
    c === null
      ? null
      : (r &&
          (c =
            r === "week" && (Ul(u) || u === !0)
              ? a.startOf(c, "isoWeek", u)
              : a.startOf(c, r)),
        +c)
  );
}
function V0(i, e, a, l) {
  const r = Ve.length;
  for (let u = Ve.indexOf(i); u < r - 1; ++u) {
    const c = Wr[Ve[u]],
      h = c.steps ? c.steps : Number.MAX_SAFE_INTEGER;
    if (c.common && Math.ceil((a - e) / (h * c.size)) <= l) return Ve[u];
  }
  return Ve[r - 1];
}
function RS(i, e, a, l, r) {
  for (let u = Ve.length - 1; u >= Ve.indexOf(a); u--) {
    const c = Ve[u];
    if (Wr[c].common && i._adapter.diff(r, l, c) >= e - 1) return c;
  }
  return Ve[a ? Ve.indexOf(a) : 0];
}
function BS(i) {
  for (let e = Ve.indexOf(i) + 1, a = Ve.length; e < a; ++e)
    if (Wr[Ve[e]].common) return Ve[e];
}
function G0(i, e, a) {
  if (!a) i[e] = !0;
  else if (a.length) {
    const { lo: l, hi: r } = $f(a, e),
      u = a[l] >= e ? a[l] : a[r];
    i[u] = !0;
  }
}
function LS(i, e, a, l) {
  const r = i._adapter,
    u = +r.startOf(e[0].value, l),
    c = e[e.length - 1].value;
  let h, p;
  for (h = u; h <= c; h = +r.add(h, 1, l))
    (p = a[h]), p >= 0 && (e[p].major = !0);
  return e;
}
function X0(i, e, a) {
  const l = [],
    r = {},
    u = e.length;
  let c, h;
  for (c = 0; c < u; ++c)
    (h = e[c]), (r[h] = c), l.push({ value: h, major: !1 });
  return u === 0 || !a ? l : LS(i, l, r, a);
}
class Q0 extends _s {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  };
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, a = {}) {
    const l = e.time || (e.time = {}),
      r = (this._adapter = new $_._date(e.adapters.date));
    r.init(a),
      kl(l.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: l.parser,
        round: l.round,
        isoWeekday: l.isoWeekday,
      }),
      super.init(e),
      (this._normalized = a.normalized);
  }
  parse(e, a) {
    return e === void 0 ? null : Y0(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      a = this._adapter,
      l = e.time.unit || "day";
    let { min: r, max: u, minDefined: c, maxDefined: h } = this.getUserBounds();
    function p(d) {
      !c && !isNaN(d.min) && (r = Math.min(r, d.min)),
        !h && !isNaN(d.max) && (u = Math.max(u, d.max));
    }
    (!c || !h) &&
      (p(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        p(this.getMinMax(!1))),
      (r = wn(r) && !isNaN(r) ? r : +a.startOf(Date.now(), l)),
      (u = wn(u) && !isNaN(u) ? u : +a.endOf(Date.now(), l) + 1),
      (this.min = Math.min(r, u - 1)),
      (this.max = Math.max(r + 1, u));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let a = Number.POSITIVE_INFINITY,
      l = Number.NEGATIVE_INFINITY;
    return e.length && ((a = e[0]), (l = e[e.length - 1])), { min: a, max: l };
  }
  buildTicks() {
    const e = this.options,
      a = e.time,
      l = e.ticks,
      r = l.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const u = this.min,
      c = this.max,
      h = Mw(r, u, c);
    return (
      (this._unit =
        a.unit ||
        (l.autoSkip
          ? V0(a.minUnit, this.min, this.max, this._getLabelCapacity(u))
          : RS(this, h.length, a.minUnit, this.min, this.max))),
      (this._majorUnit =
        !l.major.enabled || this._unit === "year" ? void 0 : BS(this._unit)),
      this.initOffsets(r),
      e.reverse && h.reverse(),
      X0(this, h, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let a = 0,
      l = 0,
      r,
      u;
    this.options.offset &&
      e.length &&
      ((r = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (a = 1 - r)
        : (a = (this.getDecimalForValue(e[1]) - r) / 2),
      (u = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (l = u)
        : (l = (u - this.getDecimalForValue(e[e.length - 2])) / 2));
    const c = e.length < 3 ? 0.5 : 0.25;
    (a = vn(a, 0, c)),
      (l = vn(l, 0, c)),
      (this._offsets = { start: a, end: l, factor: 1 / (a + 1 + l) });
  }
  _generate() {
    const e = this._adapter,
      a = this.min,
      l = this.max,
      r = this.options,
      u = r.time,
      c = u.unit || V0(u.minUnit, a, l, this._getLabelCapacity(a)),
      h = At(r.ticks.stepSize, 1),
      p = c === "week" ? u.isoWeekday : !1,
      d = Ul(p) || p === !0,
      m = {};
    let b = a,
      _,
      x;
    if (
      (d && (b = +e.startOf(b, "isoWeek", p)),
      (b = +e.startOf(b, d ? "day" : c)),
      e.diff(l, a, c) > 1e5 * h)
    )
      throw new Error(
        a + " and " + l + " are too far apart with stepSize of " + h + " " + c
      );
    const w = r.ticks.source === "data" && this.getDataTimestamps();
    for (_ = b, x = 0; _ < l; _ = +e.add(_, h, c), x++) G0(m, _, w);
    return (
      (_ === l || r.bounds === "ticks" || x === 1) && G0(m, _, w),
      Object.keys(m)
        .sort(q0)
        .map((M) => +M)
    );
  }
  getLabelForValue(e) {
    const a = this._adapter,
      l = this.options.time;
    return l.tooltipFormat
      ? a.format(e, l.tooltipFormat)
      : a.format(e, l.displayFormats.datetime);
  }
  format(e, a) {
    const r = this.options.time.displayFormats,
      u = this._unit,
      c = a || r[u];
    return this._adapter.format(e, c);
  }
  _tickFormatFunction(e, a, l, r) {
    const u = this.options,
      c = u.ticks.callback;
    if (c) return Jt(c, [e, a, l], this);
    const h = u.time.displayFormats,
      p = this._unit,
      d = this._majorUnit,
      m = p && h[p],
      b = d && h[d],
      _ = l[a],
      x = d && b && _ && _.major;
    return this._adapter.format(e, r || (x ? b : m));
  }
  generateTickLabels(e) {
    let a, l, r;
    for (a = 0, l = e.length; a < l; ++a)
      (r = e[a]), (r.label = this._tickFormatFunction(r.value, a, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const a = this._offsets,
      l = this.getDecimalForValue(e);
    return this.getPixelForDecimal((a.start + l) * a.factor);
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return this.min + l * (this.max - this.min);
  }
  _getLabelSize(e) {
    const a = this.options.ticks,
      l = this.ctx.measureText(e).width,
      r = ya(this.isHorizontal() ? a.maxRotation : a.minRotation),
      u = Math.cos(r),
      c = Math.sin(r),
      h = this._resolveTickFontOptions(0).size;
    return { w: l * u + h * c, h: l * c + h * u };
  }
  _getLabelCapacity(e) {
    const a = this.options.time,
      l = a.displayFormats,
      r = l[a.unit] || l.millisecond,
      u = this._tickFormatFunction(e, 0, X0(this, [e], this._majorUnit), r),
      c = this._getLabelSize(u),
      h =
        Math.floor(this.isHorizontal() ? this.width / c.w : this.height / c.h) -
        1;
    return h > 0 ? h : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      a,
      l;
    if (e.length) return e;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (a = 0, l = r.length; a < l; ++a)
      e = e.concat(r[a].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let a, l;
    if (e.length) return e;
    const r = this.getLabels();
    for (a = 0, l = r.length; a < l; ++a) e.push(Y0(this, r[a]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return Aw(e.sort(q0));
  }
}
function Mr(i, e, a) {
  let l = 0,
    r = i.length - 1,
    u,
    c,
    h,
    p;
  a
    ? (e >= i[l].pos && e <= i[r].pos && ({ lo: l, hi: r } = va(i, "pos", e)),
      ({ pos: u, time: h } = i[l]),
      ({ pos: c, time: p } = i[r]))
    : (e >= i[l].time &&
        e <= i[r].time &&
        ({ lo: l, hi: r } = va(i, "time", e)),
      ({ time: u, pos: h } = i[l]),
      ({ time: c, pos: p } = i[r]));
  const d = c - u;
  return d ? h + ((p - h) * (e - u)) / d : h;
}
class mC extends Q0 {
  static id = "timeseries";
  static defaults = Q0.defaults;
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      a = (this._table = this.buildLookupTable(e));
    (this._minPos = Mr(a, this.min)),
      (this._tableRange = Mr(a, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: a, max: l } = this,
      r = [],
      u = [];
    let c, h, p, d, m;
    for (c = 0, h = e.length; c < h; ++c)
      (d = e[c]), d >= a && d <= l && r.push(d);
    if (r.length < 2)
      return [
        { time: a, pos: 0 },
        { time: l, pos: 1 },
      ];
    for (c = 0, h = r.length; c < h; ++c)
      (m = r[c + 1]),
        (p = r[c - 1]),
        (d = r[c]),
        Math.round((m + p) / 2) !== d && u.push({ time: d, pos: c / (h - 1) });
    return u;
  }
  _generate() {
    const e = this.min,
      a = this.max;
    let l = super.getDataTimestamps();
    return (
      (!l.includes(e) || !l.length) && l.splice(0, 0, e),
      (!l.includes(a) || l.length === 1) && l.push(a),
      l.sort((r, u) => r - u)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const a = this.getDataTimestamps(),
      l = this.getLabelTimestamps();
    return (
      a.length && l.length
        ? (e = this.normalize(a.concat(l)))
        : (e = a.length ? a : l),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (Mr(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const a = this._offsets,
      l = this.getDecimalForPixel(e) / a.factor - a.end;
    return Mr(this._table, l * this._tableRange + this._minPos, !0);
  }
}
const Xb = "label";
function Z0(i, e) {
  typeof i == "function" ? i(e) : i && (i.current = e);
}
function jS(i, e) {
  const a = i.options;
  a && e && Object.assign(a, e);
}
function Qb(i, e) {
  i.labels = e;
}
function Zb(i, e, a = Xb) {
  const l = [];
  i.datasets = e.map((r) => {
    const u = i.datasets.find((c) => c[a] === r[a]);
    return !u || !r.data || l.includes(u)
      ? { ...r }
      : (l.push(u), Object.assign(u, r), u);
  });
}
function HS(i, e = Xb) {
  const a = { labels: [], datasets: [] };
  return Qb(a, i.labels), Zb(a, i.datasets, e), a;
}
function NS(i, e) {
  const {
      height: a = 150,
      width: l = 300,
      redraw: r = !1,
      datasetIdKey: u,
      type: c,
      data: h,
      options: p,
      plugins: d = [],
      fallbackContent: m,
      updateMode: b,
      ..._
    } = i,
    x = ft.useRef(null),
    w = ft.useRef(null),
    M = () => {
      x.current &&
        ((w.current = new xs(x.current, {
          type: c,
          data: HS(h, u),
          options: p && { ...p },
          plugins: d,
        })),
        Z0(e, w.current));
    },
    O = () => {
      Z0(e, null), w.current && (w.current.destroy(), (w.current = null));
    };
  return (
    ft.useEffect(() => {
      !r && w.current && p && jS(w.current, p);
    }, [r, p]),
    ft.useEffect(() => {
      !r && w.current && Qb(w.current.config.data, h.labels);
    }, [r, h.labels]),
    ft.useEffect(() => {
      !r && w.current && h.datasets && Zb(w.current.config.data, h.datasets, u);
    }, [r, h.datasets]),
    ft.useEffect(() => {
      w.current && (r ? (O(), setTimeout(M)) : w.current.update(b));
    }, [r, p, h.labels, h.datasets, b]),
    ft.useEffect(() => {
      w.current && (O(), setTimeout(M));
    }, [c]),
    ft.useEffect(() => (M(), () => O()), []),
    U.jsx("canvas", {
      ref: x,
      role: "img",
      height: a,
      width: l,
      ..._,
      children: m,
    })
  );
}
const US = ft.forwardRef(NS);
function FS(i, e) {
  return (
    xs.register(e),
    ft.forwardRef((a, l) => U.jsx(US, { ...a, ref: l, type: i }))
  );
}
const Gl = FS("line", W_);
xs.register(rh, uh, dh, hh, fh, ch);
function qS(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let u = 0; u < i.length; u += l) r.push(i[Math.floor(u)]);
  return r;
}
function YS(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const VS = () => {
    const {
        time: i,
        userFs: e,
        generateECG: a,
        rawSamples: l,
      } = ft.useContext(Fn),
      u = {
        datasets: [
          {
            label: "ECG Signal",
            data: ft.useMemo(() => {
              if (!l.length || !a) return [];
              const h = YS(l);
              return qS(l, h, e).filter((d) => d.x <= i);
            }, [i, e, a, l]),
            borderColor: "#0078d4",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      c = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: Uv.signalContainer,
      children: [
        U.jsx("h3", { children: "ECG Signal (Unfiltered)" }),
        U.jsx(Gl, { data: u, options: c }),
      ],
    });
  },
  GS = "_signalContainer_3bymz_1",
  XS = { signalContainer: GS };
function Tr(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var kf = { exports: {} };
var K0;
function QS() {
  return (
    K0 ||
      ((K0 = 1),
      (function (i, e) {
        (function (a) {
          i.exports = a();
        })(function () {
          return (function a(l, r, u) {
            function c(d, m) {
              if (!r[d]) {
                if (!l[d]) {
                  var b = typeof Tr == "function" && Tr;
                  if (!m && b) return b(d, !0);
                  if (h) return h(d, !0);
                  var _ = new Error("Cannot find module '" + d + "'");
                  throw ((_.code = "MODULE_NOT_FOUND"), _);
                }
                var x = (r[d] = { exports: {} });
                l[d][0].call(
                  x.exports,
                  function (w) {
                    var M = l[d][1][w];
                    return c(M || w);
                  },
                  x,
                  x.exports,
                  a,
                  l,
                  r,
                  u
                );
              }
              return r[d].exports;
            }
            for (
              var h = typeof Tr == "function" && Tr, p = 0;
              p < u.length;
              p++
            )
              c(u[p]);
            return c;
          })(
            {
              1: [
                function (a, l, r) {
                  l.exports = {
                    CalcCascades: a("./src/calcCascades"),
                    Fft: a("./src/fft"),
                    FirCoeffs: a("./src/firCoeffs"),
                    FirFilter: a("./src/firFilter"),
                    IirCoeffs: a("./src/iirCoeffs"),
                    IirFilter: a("./src/iirFilter"),
                    TestFilter: a("./src/testFilter"),
                  };
                },
                {
                  "./src/calcCascades": 2,
                  "./src/fft": 3,
                  "./src/firCoeffs": 4,
                  "./src/firFilter": 5,
                  "./src/iirCoeffs": 6,
                  "./src/iirFilter": 7,
                  "./src/testFilter": 8,
                },
              ],
              2: [
                function (a, l, r) {
                  var u = a("./iirCoeffs"),
                    c = new u(),
                    h = {
                      bessel: {
                        q: [
                          [0.57735026919],
                          [0.805538281842, 0.521934581669],
                          [1.02331395383, 0.611194546878, 0.510317824749],
                          [
                            1.22566942541, 0.710852074442, 0.559609164796,
                            0.505991069397,
                          ],
                          [
                            1.41530886916, 0.809790964842, 0.620470155556,
                            0.537552151325, 0.503912727276,
                          ],
                          [
                            1.59465693507, 0.905947107025, 0.684008068137,
                            0.579367238641, 0.525936202016, 0.502755558204,
                          ],
                          [
                            1.76552743493, 0.998998442993, 0.747625068271,
                            0.624777082395, 0.556680772868, 0.519027293158,
                            0.502045428643,
                          ],
                          [
                            1.9292718407, 1.08906376917, 0.810410302962,
                            0.671382379377, 0.591144659703, 0.542678365981,
                            0.514570953471, 0.501578400482,
                          ],
                          [
                            2.08691792612, 1.17637337045, 0.872034231424,
                            0.718163551101, 0.627261751983, 0.569890924765,
                            0.533371782078, 0.511523796759, 0.50125489338,
                          ],
                          [
                            2.23926560629, 1.26117120993, 0.932397288146,
                            0.764647810579, 0.664052481472, 0.598921924986,
                            0.555480327396, 0.526848630061, 0.509345928377,
                            0.501021580965,
                          ],
                          [
                            2.38695091667, 1.34368488961, 0.991497755204,
                            0.81060830488, 0.701011199665, 0.628878390935,
                            0.57943181849, 0.545207253735, 0.52208637596,
                            0.507736060535, 0.500847111042,
                          ],
                          [
                            2.53048919562, 1.42411783481, 1.04937620183,
                            0.85593899901, 0.737862159044, 0.659265671705,
                            0.604435823473, 0.565352679646, 0.537608804383,
                            0.51849505465, 0.506508536474, 0.500715908905,
                          ],
                        ],
                        f3dB: [
                          [1.27201964951],
                          [1.60335751622, 1.43017155999],
                          [1.9047076123, 1.68916826762, 1.60391912877],
                          [
                            2.18872623053, 1.95319575902, 1.8320926012,
                            1.77846591177,
                          ],
                          [
                            2.45062684305, 2.20375262593, 2.06220731793,
                            1.98055310881, 1.94270419166,
                          ],
                          [
                            2.69298925084, 2.43912611431, 2.28431825401,
                            2.18496722634, 2.12472538477, 2.09613322542,
                          ],
                          [
                            2.91905714471, 2.66069088948, 2.49663434571,
                            2.38497976939, 2.30961462222, 2.26265746534,
                            2.24005716132,
                          ],
                          [
                            3.13149167404, 2.87016099416, 2.69935018044,
                            2.57862945683, 2.49225505119, 2.43227707449,
                            2.39427710712, 2.37582307687,
                          ],
                          [
                            3.33237300564, 3.06908580184, 2.89318259511,
                            2.76551588399, 2.67073340527, 2.60094950474,
                            2.55161764546, 2.52001358804, 2.50457164552,
                          ],
                          [
                            3.52333123464, 3.25877569704, 3.07894353744,
                            2.94580435024, 2.84438325189, 2.76691082498,
                            2.70881411245, 2.66724655259, 2.64040228249,
                            2.62723439989,
                          ],
                          [
                            3.70566068548, 3.44032173223, 3.2574059854,
                            3.11986367838, 3.01307175388, 2.92939234605,
                            2.86428726094, 2.81483068055, 2.77915465405,
                            2.75596888377, 2.74456638588,
                          ],
                          [
                            3.88040469682, 3.61463243697, 3.4292654707,
                            3.28812274966, 3.17689762788, 3.08812364257,
                            3.01720732972, 2.96140104561, 2.91862858495,
                            2.88729479473, 2.8674198668, 2.8570800015,
                          ],
                        ],
                        f1dB: [
                          [2.16477559371],
                          [2.70320928596, 2.41122332505],
                          [3.25676581436, 2.88822569572, 2.74246238837],
                          [
                            3.76153580353, 3.35675411406, 3.14862673032,
                            3.05646412475,
                          ],
                          [
                            4.22174260104, 3.79644757806, 3.55260471864,
                            3.41193742197, 3.34673435508,
                          ],
                          [
                            4.64584812552, 4.20789257981, 3.94082363122,
                            3.76942681446, 3.66549975744, 3.61617359345,
                          ],
                          [
                            5.04060395196, 4.5944592201, 4.3111677248,
                            4.11836351827, 3.98822359814, 3.90713836715,
                            3.86811234525,
                          ],
                          [
                            5.41107948467, 4.95951159709, 4.66435804468,
                            4.45575796102, 4.30650679478, 4.20286750045,
                            4.13720522991, 4.10531748119,
                          ],
                          [
                            5.76110791853, 5.30592898465, 5.00182215701,
                            4.7811081045, 4.61724509926, 4.49660100894,
                            4.41131378918, 4.35667671372, 4.32997951075,
                          ],
                          [
                            6.09364309488, 5.63609116014, 5.32506930789,
                            5.09480346139, 4.91939504255, 4.78540258409,
                            4.68493280536, 4.61302286993, 4.56661931366,
                            4.54382759952,
                          ],
                          [
                            6.41100731543, 5.95195558182, 5.63550073656,
                            5.39754464742, 5.21278891332, 5.06801430334,
                            4.95539684456, 4.8697869429, 4.80814951843,
                            4.76793469612, 4.74828032403,
                          ],
                          [
                            6.71506056052, 6.25514029778, 5.9343616072,
                            5.69011422355, 5.49763642361, 5.34401973764,
                            5.22125973611, 5.12485045619, 5.05037962112,
                            4.99699982231, 4.96155789635, 4.94441828777,
                          ],
                        ],
                      },
                    },
                    p = {
                      bessel: {
                        as: [
                          [1.3617],
                          [1.3397, 0.7743],
                          [1.2217, 0.9686, 0.5131],
                          [1.1112, 0.9754, 0.7202, 0.3728],
                          [1.0215, 0.9393, 0.7815, 0.5604, 0.2883],
                        ],
                        bs: [
                          [0.618],
                          [0.4889, 0.389],
                          [0.3887, 0.3505, 0.2756],
                          [0.3162, 0.2979, 0.2621, 0.2087],
                          [0.265, 0.2549, 0.2351, 0.2059, 0.1665],
                        ],
                      },
                      butterworth: {
                        as: [
                          [1.4142],
                          [1.8478, 0.7654],
                          [1.9319, 1.4142, 0.5176],
                          [1.9616, 1.6629, 1.1111, 0.3902],
                          [1.9754, 1.782, 1.4142, 0.908, 0.3129],
                        ],
                        bs: [
                          [1],
                          [1, 1],
                          [1, 1, 1],
                          [1, 1, 1, 1],
                          [1, 1, 1, 1, 1],
                        ],
                      },
                      tschebyscheff05: {
                        as: [
                          [1.3614],
                          [2.6282, 0.3648],
                          [3.8645, 0.7528, 0.1589],
                          [5.1117, 1.0639, 0.3439, 0.0885],
                          [6.3648, 1.3582, 0.4822, 0.1994, 0.0563],
                        ],
                        bs: [
                          [1.3827],
                          [3.4341, 1.1509],
                          [6.9797, 1.8573, 1.0711],
                          [11.9607, 2.9365, 1.4206, 1.0407],
                          [18.3695, 4.3453, 1.944, 1.252, 1.0263],
                        ],
                      },
                      tschebyscheff1: {
                        as: [
                          [1.3022],
                          [2.5904, 0.3039],
                          [3.8437, 0.6292, 0.1296],
                          [5.1019, 0.8916, 0.2806, 0.0717],
                          [6.3634, 1.1399, 0.3939, 0.1616, 0.0455],
                        ],
                        bs: [
                          [1.5515],
                          [4.1301, 1.1697],
                          [8.5529, 1.9124, 1.0766],
                          [14.7608, 3.0426, 1.4334, 1.0432],
                          [22.7468, 4.5167, 1.9665, 1.2569, 1.0277],
                        ],
                      },
                      tschebyscheff2: {
                        as: [
                          [1.1813],
                          [2.4025, 0.2374],
                          [3.588, 0.4925, 0.0995],
                          [4.7743, 0.6991, 0.2153, 0.0547],
                          [5.9618, 0.8947, 0.3023, 0.1233, 0.0347],
                        ],
                        bs: [
                          [1.7775],
                          [4.9862, 1.1896],
                          [10.4648, 1.9622, 1.0826],
                          [18.151, 3.1353, 1.4449, 1.0461],
                          [28.0376, 4.6644, 1.9858, 1.2614, 1.0294],
                        ],
                      },
                      tschebyscheff3: {
                        as: [
                          [1.065],
                          [2.1853, 0.1964],
                          [3.2721, 0.4077, 0.0815],
                          [4.3583, 0.5791, 0.1765, 0.0448],
                          [5.4449, 0.7414, 0.2479, 0.1008, 0.0283],
                        ],
                        bs: [
                          [1.9305],
                          [5.5339, 1.2009],
                          [11.6773, 1.9873, 1.0861],
                          [20.2948, 3.1808, 1.4507, 1.0478],
                          [31.3788, 4.7363, 1.9952, 1.2638, 1.0304],
                        ],
                      },
                      allpass: {
                        as: [
                          [1.6278],
                          [2.337, 1.3506],
                          [2.6117, 2.0706, 1.0967],
                          [2.7541, 2.4174, 1.785, 0.9239],
                          [2.8406, 2.612, 2.1733, 1.5583, 0.8018],
                        ],
                        bs: [
                          [0.8832],
                          [1.4878, 1.1837],
                          [1.7763, 1.6015, 1.2596],
                          [1.942, 1.83, 1.6101, 1.2822],
                          [2.049, 1.9714, 1.8184, 1.5923, 1.2877],
                        ],
                      },
                    },
                    d = function (x, w) {
                      var M = [],
                        O = 0;
                      if (w !== "fromPZ")
                        for (
                          x.order > 12 && (x.order = 12), O = 0;
                          O < x.order;
                          O++
                        ) {
                          var E, tt, I;
                          x.transform === "matchedZ"
                            ? M.push(
                                c.lowpassMZ({
                                  Fs: x.Fs,
                                  Fc: x.Fc,
                                  preGain: x.preGain,
                                  as: p[x.characteristic].as[x.order - 1][O],
                                  bs: p[x.characteristic].bs[x.order - 1][O],
                                })
                              )
                            : (x.characteristic === "butterworth"
                                ? ((E =
                                    0.5 /
                                    Math.sin(
                                      (Math.PI / (2 * x.order)) * (O + 0.5)
                                    )),
                                  (tt = 1))
                                : ((E = h[x.characteristic].q[x.order - 1][O]),
                                  (tt = x.oneDb
                                    ? h[x.characteristic].f1dB[x.order - 1][O]
                                    : h[x.characteristic].f3dB[x.order - 1][
                                        O
                                      ])),
                              (I = w === "highpass" ? x.Fc / tt : x.Fc * tt),
                              (w !== "bandpass" && w !== "bandstop") ||
                                (x.characteristic === "bessel" &&
                                  (I = (Math.sqrt(x.order) * I) / x.order)),
                              M.push(
                                c[w]({
                                  Fs: x.Fs,
                                  Fc: I,
                                  Q: E,
                                  BW: x.BW || 0,
                                  gain: x.gain || 0,
                                  preGain: x.preGain || !1,
                                })
                              ));
                        }
                      else for (O = 0; O < x.length; O++) M.push(c[w](x[O]));
                      return M;
                    },
                    m = function (x) {
                      return function (w) {
                        return d(w, x);
                      };
                    },
                    b = {},
                    _ = function () {
                      var x = [];
                      for (var w in c) (b[w] = m(w)), x.push(w);
                      return (
                        (b.available = function () {
                          return x;
                        }),
                        b
                      );
                    };
                  l.exports = _;
                },
                { "./iirCoeffs": 6 },
              ],
              3: [
                function (a, l, r) {
                  var u = function (c) {
                    if (
                      !(function (T) {
                        return !(T & (T - 1));
                      })(c)
                    )
                      return !1;
                    var h = {};
                    (h.length = c),
                      (h.buffer = new Float64Array(c)),
                      (h.re = new Float64Array(c)),
                      (h.im = new Float64Array(c)),
                      (h.reI = new Float64Array(c)),
                      (h.imI = new Float64Array(c)),
                      (h.twiddle = new Int32Array(c)),
                      (h.sinTable = new Float64Array(c - 1)),
                      (h.cosTable = new Float64Array(c - 1));
                    var p = 2 * Math.PI,
                      d = Math.floor(Math.log(c) / Math.LN2);
                    for (b = h.sinTable.length; b--; )
                      (h.sinTable[b] = Math.sin(p * (b / c))),
                        (h.cosTable[b] = Math.cos(p * (b / c)));
                    for (
                      var m = c >> 1, b = 0, _ = 0;
                      (h.twiddle[b] = _), !(++b >= c);

                    ) {
                      for (d = m; d <= _; ) (_ -= d), (d >>= 1);
                      _ += d;
                    }
                    var x = Math.PI,
                      w = 2 * Math.PI,
                      M = Math.abs,
                      O = Math.pow,
                      E = Math.cos,
                      tt = Math.sin,
                      I = function (T) {
                        return tt(x * T) / (x * T);
                      },
                      $ = Math.E,
                      j = {
                        rectangular: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        none: {
                          calc: function () {
                            return 1;
                          },
                          values: [],
                          correction: 1,
                        },
                        hanning: {
                          calc: function (T, S) {
                            return 0.5 * (1 - E((w * T) / (S - 1)));
                          },
                          values: [],
                          correction: 2,
                        },
                        hamming: {
                          calc: function (T, S) {
                            return 0.54 - 0.46 * E((w * T) / (S - 1));
                          },
                          values: [],
                          correction: 1.8518999946875638,
                        },
                        tukery: {
                          calc: function (T, S, v) {
                            return T < (v * (S - 1)) / 2
                              ? 0.5 * (1 + E(x * ((2 * T) / (v * (S - 1)) - 1)))
                              : (S - 1) * (1 - v / 2) < T
                              ? 0.5 *
                                (1 +
                                  E(x * ((2 * T) / (v * (S - 1)) - 2 / v + 1)))
                              : 1;
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        cosine: {
                          calc: function (T, S) {
                            return tt((x * T) / (S - 1));
                          },
                          values: [],
                          correction: 1.570844266360796,
                        },
                        lanczos: {
                          calc: function (T, S) {
                            return I((2 * T) / (S - 1) - 1);
                          },
                          values: [],
                          correction: 1.6964337576195783,
                        },
                        triangular: {
                          calc: function (T, S) {
                            return (
                              (2 / (S + 1)) * ((S + 1) / 2 - M(T - (S - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        bartlett: {
                          calc: function (T, S) {
                            return (
                              (2 / (S - 1)) * ((S - 1) / 2 - M(T - (S - 1) / 2))
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        gaussian: {
                          calc: function (T, S, v) {
                            return O(
                              $,
                              -0.5 *
                                O((T - (S - 1) / 2) / ((v * (S - 1)) / 2), 2)
                            );
                          },
                          values: [],
                          correction: 5 / 3,
                        },
                        bartlettHanning: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.62 - 0.48 * M(T / (S - 1) - 0.5) - 0.38 * E(v)
                            );
                          },
                          values: [],
                          correction: 2,
                        },
                        blackman: {
                          calc: function (T, S, v) {
                            var N = (1 - v) / 2,
                              k = v / 2,
                              R = (w * T) / (S - 1);
                            return N - 0.5 * E(R) + k * E(2 * R);
                          },
                          values: [],
                          correction: 4 / 3,
                        },
                        blackmanHarris: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.35875 -
                              0.48829 * E(v) +
                              0.14128 * E(2 * v) -
                              0.01168 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.5594508635,
                        },
                        nuttall3: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return 0.375 - 0.5 * E(v) + 0.125 * E(2 * v);
                          },
                          values: [],
                          correction: 1.56,
                        },
                        nuttall3a: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return 0.40897 - 0.5 * E(v) + 0.09103 * E(2 * v);
                          },
                          values: [],
                          correction: 1.692,
                        },
                        nuttall3b: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.4243801 - 0.4973406 * E(v) + 0.078793 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.7372527,
                        },
                        nuttall4: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.3125 -
                              0.46875 * E(v) +
                              0.1875 * E(2 * v) -
                              0.03125 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.454543,
                        },
                        nuttall4a: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.338946 -
                              0.481973 * E(v) +
                              0.161054 * E(2 * v) -
                              0.018027 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.512732763,
                        },
                        nuttall4b: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.355768 -
                              0.481973 * E(v) +
                              0.144232 * E(2 * v) -
                              0.012604 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.55223262,
                        },
                        nuttall4c: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.3635819 -
                              0.4891775 * E(v) +
                              0.1365995 * E(2 * v) -
                              0.0106411 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.57129067,
                        },
                        sft3f: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return 0.26526 - 0.5 * E(v) + 0.23474 * E(2 * v);
                          },
                          values: [],
                          correction: 1.3610238,
                        },
                        sft4f: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.21706 -
                              0.42103 * E(v) +
                              0.28294 * E(2 * v) -
                              0.07897 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.2773573,
                        },
                        sft5f: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.1881 -
                              0.36923 * E(v) +
                              0.28702 * E(2 * v) -
                              0.13077 * E(3 * v) +
                              0.02488 * E(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.23167769,
                        },
                        sft3m: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.28235 - 0.52105 * E(v) + 0.19659 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39343451,
                        },
                        sft4m: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.241906 -
                              0.460841 * E(v) +
                              0.2552381 * E(2 * v) -
                              0.041872 * E(3 * v)
                            );
                          },
                          values: [],
                          correction: 1.3190596,
                        },
                        sft5m: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.209671 -
                              0.407331 * E(v) +
                              0.281225 * E(2 * v) -
                              0.092669 * E(3 * v) +
                              0.0091036 * E(4 * v)
                            );
                          },
                          values: [],
                          correction: 1.26529456464,
                        },
                        nift: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              0.2810639 -
                              0.5208972 * E(v) +
                              0.1980399 * E(2 * v)
                            );
                          },
                          values: [],
                          correction: 1.39094182,
                        },
                        hpft: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.912510941 * E(v) +
                                1.079173272 * E(2 * v) -
                                0.1832630879 * E(3 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        srft: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.93 * E(v) +
                                1.29 * E(2 * v) -
                                0.388 * E(3 * v) +
                                0.028 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft70: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.90796 * E(v) +
                                1.07349 * E(2 * v) -
                                0.18199 * E(3 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft95: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.9383379 * E(v) +
                                1.3045202 * E(2 * v) -
                                0.402827 * E(3 * v) +
                                0.0350665 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft90d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.942604 * E(v) +
                                1.340318 * E(2 * v) -
                                0.440811 * E(3 * v) +
                                0.043097 * E(4 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft116d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.9575375 * E(v) +
                                1.4780705 * E(2 * v) -
                                0.6367431 * E(3 * v) +
                                0.1228389 * E(4 * v) -
                                0.0066288 * E(5 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft144d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.96760033 * E(v) +
                                1.57983607 * E(2 * v) -
                                0.81123644 * E(3 * v) +
                                0.22583558 * E(4 * v) -
                                0.02773848 * E(5 * v) +
                                9036e-7 * E(6 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft196d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.97441842 * E(v) +
                                1.65409888 * E(2 * v) -
                                0.95788186 * E(3 * v) +
                                0.3367342 * E(4 * v) -
                                0.06364621 * E(5 * v) +
                                0.00521942 * E(6 * v) -
                                10599e-8 * E(7 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft223d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.98298997309 * E(v) +
                                1.75556083063 * E(2 * v) -
                                1.19037717712 * E(3 * v) +
                                0.56155440797 * E(4 * v) -
                                0.17296769663 * E(5 * v) +
                                0.03233247087 * E(6 * v) -
                                0.00324954578 * E(7 * v) +
                                0.0001380104 * E(8 * v) -
                                132725e-11 * E(9 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                        hft248d: {
                          calc: function (T, S) {
                            var v = (w * T) / (S - 1);
                            return (
                              (1 -
                                1.985844164102 * E(v) +
                                1.791176438506 * E(2 * v) -
                                1.282075284005 * E(3 * v) +
                                0.667777530266 * E(4 * v) -
                                0.240160796576 * E(5 * v) +
                                0.056656381764 * E(6 * v) -
                                0.008134974479 * E(7 * v) +
                                0.00062454465 * E(8 * v) -
                                19808998e-12 * E(9 * v) +
                                132974e-12 * E(10 * v)) /
                              S
                            );
                          },
                          values: [],
                          correction: 1,
                        },
                      },
                      J = function (T) {
                        return j[T.name].values.length !== T.N
                          ? (T.n === 0 && (j[T.name].values.length = 0),
                            (j[T.name].values[T.n] =
                              j[T.name].correction *
                              j[T.name].calc(T.n, T.N, T.a)),
                            j[T.name].values[T.n])
                          : j[T.name].values;
                      };
                    return {
                      forward: function (T, S) {
                        var v, N, k, R, W, lt, at, H, G, nt, it, ut;
                        k = h.buffer.length;
                        var A = { name: S, N: k, a: 0.5, n: 0 },
                          F = J(A);
                        if (typeof F == "number")
                          for (v = 0; v < k; ++v)
                            (A.n = v), (h.buffer[v] = T[v] * J(A));
                        else for (v = 0; v < k; ++v) h.buffer[v] = T[v] * F[v];
                        for (v = k; v--; )
                          (h.re[v] = h.buffer[h.twiddle[v]]), (h.im[v] = 0);
                        for (R = 1; R < k; R = W)
                          for (
                            lt = 0, W = R + R, at = k / W, N = 0;
                            N < R;
                            N++
                          ) {
                            for (
                              H = h.cosTable[lt], G = h.sinTable[lt], v = N;
                              v < k;
                              v += W
                            )
                              (nt = v + R),
                                (it = G * h.im[nt] + H * h.re[nt]),
                                (ut = H * h.im[nt] - G * h.re[nt]),
                                (h.re[nt] = h.re[v] - it),
                                (h.re[v] += it),
                                (h.im[nt] = h.im[v] - ut),
                                (h.im[v] += ut);
                            lt += at;
                          }
                        return { re: h.re, im: h.im };
                      },
                      inverse: function (T, S) {
                        var v, N, k, R, W, lt, at, H, G, nt, it, ut;
                        for (k = T.length, v = k; v--; )
                          (N = h.twiddle[v]),
                            (h.reI[v] = T[N]),
                            (h.imI[v] = -S[N]);
                        for (R = 1; R < k; R = W)
                          for (
                            lt = 0, W = R + R, at = k / W, N = 0;
                            N < R;
                            N++
                          ) {
                            for (
                              H = h.cosTable[lt], G = h.sinTable[lt], v = N;
                              v < k;
                              v += W
                            )
                              (nt = v + R),
                                (it = G * h.imI[nt] + H * h.reI[nt]),
                                (ut = H * h.imI[nt] - G * h.reI[nt]),
                                (h.reI[nt] = h.reI[v] - it),
                                (h.reI[v] += it),
                                (h.imI[nt] = h.imI[v] - ut),
                                (h.imI[v] += ut);
                            lt += at;
                          }
                        for (v = k; v--; ) h.buffer[v] = h.reI[v] / k;
                        return h.buffer;
                      },
                      magnitude: function (T) {
                        for (var S = [], v = 0; v < T.re.length; v++)
                          S.push(
                            Math.sqrt(T.re[v] * T.re[v] + T.im[v] * T.im[v])
                          );
                        return S;
                      },
                      magToDb: function (T) {
                        for (var S = [], v = 0; v < T.length; v++)
                          S.push(20 * Math.log(T[v]) * Math.LOG10E);
                        return S;
                      },
                      phase: function (T) {
                        for (var S = [], v = 0; v < T.re.length; v++)
                          S.push(Math.atan2(T.im[v], T.re[v]));
                        return S;
                      },
                      windows: function () {
                        var T = [];
                        for (var S in j) T.push(S);
                        return T;
                      },
                    };
                  };
                  l.exports = u;
                },
                {},
              ],
              4: [
                function (a, l, r) {
                  var u = function () {
                    var c = function (m) {
                        var b = m.Fs,
                          _ = m.Fa,
                          x = m.Fb,
                          w = m.order || 51,
                          M = m.Att || 100,
                          O = function (T) {
                            for (var S = 0, v = 1, N = 1; v > 1e-6 * N; )
                              (S += 2), (v *= (T * T) / (S * S)), (N += v);
                            return N;
                          };
                        w / 2 - Math.floor(w / 2) == 0 && w++;
                        var E,
                          tt = (w - 1) / 2,
                          I = [],
                          $ = 0,
                          j = 0,
                          J = [];
                        for (I[0] = (2 * (x - _)) / b, j = 1; j <= tt; j++)
                          I[j] =
                            (Math.sin((2 * j * Math.PI * x) / b) -
                              Math.sin((2 * j * Math.PI * _) / b)) /
                            (j * Math.PI);
                        for (
                          $ =
                            M < 21
                              ? 0
                              : M > 50
                              ? 0.1102 * (M - 8.7)
                              : 0.5842 * Math.pow(M - 21, 0.4) +
                                0.07886 * (M - 21),
                            E = O($),
                            j = 0;
                          j <= tt;
                          j++
                        )
                          J[tt + j] =
                            (I[j] * O($ * Math.sqrt(1 - (j * j) / (tt * tt)))) /
                            E;
                        for (j = 0; j < tt; j++) J[j] = J[w - 1 - j];
                        return J;
                      },
                      h = function (m) {
                        var b = m.Fs,
                          _ = m.Fc,
                          x = m.order,
                          w = (2 * Math.PI * _) / b,
                          M = 0,
                          O = 0,
                          E = [];
                        for (M = 0; M <= x; M++)
                          M - x / 2 == 0
                            ? (E[M] = w)
                            : ((E[M] = Math.sin(w * (M - x / 2)) / (M - x / 2)),
                              (E[M] *=
                                0.54 - 0.46 * Math.cos((2 * Math.PI * M) / x))),
                            (O += E[M]);
                        for (M = 0; M <= x; M++) E[M] /= O;
                        return E;
                      },
                      p = function (m) {
                        var b;
                        for (b = 0; b < m.length; b++) m[b] = -m[b];
                        return m[(m.length - 1) / 2]++, m;
                      },
                      d = function (m) {
                        for (
                          var b = h({ order: m.order, Fs: m.Fs, Fc: m.F2 }),
                            _ = p(h({ order: m.order, Fs: m.Fs, Fc: m.F1 })),
                            x = [],
                            w = 0;
                          w < b.length;
                          w++
                        )
                          x.push(b[w] + _[w]);
                        return x;
                      };
                    return {
                      lowpass: function (m) {
                        return h(m);
                      },
                      highpass: function (m) {
                        return p(h(m));
                      },
                      bandstop: function (m) {
                        return d(m);
                      },
                      bandpass: function (m) {
                        return p(d(m));
                      },
                      kbFilter: function (m) {
                        return c(m);
                      },
                      available: function () {
                        return [
                          "lowpass",
                          "highpass",
                          "bandstop",
                          "bandpass",
                          "kbFilter",
                        ];
                      },
                    };
                  };
                  l.exports = u;
                },
                {},
              ],
              5: [
                function (a, l, r) {
                  var u = a("./utils"),
                    c = u.runMultiFilter,
                    h = u.runMultiFilterReverse,
                    p = u.complex,
                    d = u.evaluatePhase,
                    m = function (b) {
                      var _ = b,
                        x = [],
                        w = 0;
                      for (w = 0; w < _.length; w++) x[w] = { re: _[w], im: 0 };
                      var M = function ($) {
                          var j,
                            J = [];
                          for (j = 0; j < $; j++) J.push(0);
                          return { buf: J, pointer: 0 };
                        },
                        O = M(_.length - 1),
                        E = function ($, j) {
                          j.buf[j.pointer] = $;
                          var J = 0;
                          for (w = 0; w < j.buf.length; w++)
                            J += _[w] * j.buf[(j.pointer + w) % j.buf.length];
                          return (
                            (j.pointer = (j.pointer + 1) % j.buf.length), J
                          );
                        },
                        tt = function ($) {
                          var j = M(_.length - 1);
                          return c($, j, E);
                        },
                        I = function ($) {
                          for (
                            var j = $.Fs,
                              J = $.Fr,
                              T = -Math.PI * (J / j) * 2,
                              S = { re: 0, im: 0 },
                              v = 0;
                            v < _.length - 1;
                            v++
                          )
                            S = p.add(
                              S,
                              p.mul(x[v], {
                                re: Math.cos(T * v),
                                im: Math.sin(T * v),
                              })
                            );
                          var N = p.magnitude(S);
                          return {
                            magnitude: N,
                            phase: p.phase(S),
                            dBmagnitude: 20 * Math.log(N) * Math.LOG10E,
                          };
                        };
                      return {
                        responsePoint: function ($) {
                          return I($);
                        },
                        response: function ($) {
                          $ = $ || 100;
                          var j = [],
                            J = 0,
                            T = 2 * $;
                          for (J = 0; J < $; J++) j[J] = I({ Fs: T, Fr: J });
                          return d(j), j;
                        },
                        simulate: function ($) {
                          return tt($);
                        },
                        singleStep: function ($) {
                          return E($, O);
                        },
                        multiStep: function ($, j) {
                          return c($, O, E, j);
                        },
                        filtfilt: function ($, j) {
                          return h(c($, O, E, j), O, E, !0);
                        },
                        reinit: function () {
                          O = M(_.length - 1);
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              6: [
                function (a, l, r) {
                  var u = function () {
                    var c = function (d, m) {
                        var b = d.Q,
                          _ = d.Fc,
                          x = d.Fs,
                          w = {},
                          M = (2 * Math.PI * _) / x;
                        return (
                          d.BW
                            ? (w.alpha =
                                Math.sin(M) *
                                Math.sinh(
                                  ((Math.log(2) / 2) * d.BW * M) / Math.sin(M)
                                ))
                            : (w.alpha = Math.sin(M) / (2 * b)),
                          (w.cw = Math.cos(M)),
                          (w.a0 = 1 + w.alpha),
                          (m.a0 = w.a0),
                          m.a.push((-2 * w.cw) / w.a0),
                          (m.k = 1),
                          m.a.push((1 - w.alpha) / w.a0),
                          w
                        );
                      },
                      h = function (d) {
                        var m = d.Q,
                          b = d.Fc,
                          _ = d.Fs,
                          x = {},
                          w = (2 * Math.PI * b) / _;
                        return (
                          (x.alpha = Math.sin(w) / (2 * m)),
                          (x.cw = Math.cos(w)),
                          (x.A = Math.pow(10, d.gain / 40)),
                          x
                        );
                      },
                      p = function () {
                        var d = {};
                        return (d.z = [0, 0]), (d.a = []), (d.b = []), d;
                      };
                    return {
                      fromPZ: function (d) {
                        var m = p();
                        return (
                          (m.a0 = 1),
                          m.b.push(1),
                          m.b.push(-d.z0.re - d.z1.re),
                          m.b.push(d.z0.re * d.z1.re - d.z0.im * d.z1.im),
                          m.a.push(-d.p0.re - d.p1.re),
                          m.a.push(d.p0.re * d.p1.re - d.p0.im * d.p1.im),
                          d.type === "lowpass"
                            ? (m.k =
                                (1 + m.a[0] + m.a[1]) / (1 + m.b[1] + m.b[2]))
                            : (m.k =
                                (1 - m.a[0] + m.a[1]) / (1 - m.b[1] + m.b[2])),
                          m
                        );
                      },
                      lowpassMZ: function (d) {
                        var m = p();
                        m.a0 = 1;
                        var b = d.as,
                          _ = d.bs,
                          x = (2 * Math.PI * d.Fc) / d.Fs,
                          w = -b / (2 * _);
                        return (
                          m.a.push(
                            2 *
                              -Math.pow(Math.E, w * x) *
                              Math.cos(
                                -x *
                                  Math.sqrt(
                                    Math.abs(
                                      Math.pow(b, 2) / (4 * Math.pow(_, 2)) -
                                        1 / _
                                    )
                                  )
                              )
                          ),
                          m.a.push(Math.pow(Math.E, 2 * w * x)),
                          d.preGain
                            ? (m.b.push(1), (m.k = m.a0 + m.a[0] + m.a[1]))
                            : (m.b.push(m.a0 + m.a[0] + m.a[1]), (m.k = 1)),
                          m.b.push(0),
                          m.b.push(0),
                          m
                        );
                      },
                      lowpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = 3 * m.wp + 3 * m.wp2 + 1),
                          m.b.push((3 * m.wp2 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((6 * m.wp2 - 2) / m.a0),
                          m.a.push((3 * m.wp2 - 3 * m.wp + 1) / m.a0),
                          m
                        );
                      },
                      highpassBT: function (d) {
                        var m = p();
                        return (
                          (d.Q = 1),
                          (m.wp = Math.tan((2 * Math.PI * d.Fc) / (2 * d.Fs))),
                          (m.wp2 = m.wp * m.wp),
                          d.BW && delete d.BW,
                          (m.k = 1),
                          (m.a0 = m.wp + m.wp2 + 3),
                          m.b.push((3 * d.Q) / m.a0),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m.a.push((2 * m.wp2 - 6) / m.a0),
                          m.a.push((m.wp2 - m.wp + 3) / m.a0),
                          m
                        );
                      },
                      lowpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = c(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 - b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 - b.cw) / (2 * b.a0))),
                          m.b.push(2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      highpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = c(d, m);
                        return (
                          d.preGain
                            ? ((m.k = 0.5 * (1 + b.cw)), m.b.push(1 / b.a0))
                            : ((m.k = 1), m.b.push((1 + b.cw) / (2 * b.a0))),
                          m.b.push(-2 * m.b[0]),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      allpass: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = c(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((1 - b.alpha) / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push((1 + b.alpha) / b.a0),
                          m
                        );
                      },
                      bandpassQ: function (d) {
                        var m = p(),
                          b = c(d, m);
                        return (
                          (m.k = 1),
                          m.b.push((b.alpha * d.Q) / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandpass: function (d) {
                        var m = p(),
                          b = c(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(b.alpha / b.a0),
                          m.b.push(0),
                          m.b.push(-m.b[0]),
                          m
                        );
                      },
                      bandstop: function (d) {
                        var m = p(),
                          b = c(d, m);
                        return (
                          (m.k = 1),
                          m.b.push(1 / b.a0),
                          m.b.push((-2 * b.cw) / b.a0),
                          m.b.push(m.b[0]),
                          m
                        );
                      },
                      peak: function (d) {
                        var m = p(),
                          b = h(d);
                        return (
                          (m.k = 1),
                          (m.a0 = 1 + b.alpha / b.A),
                          m.a.push((-2 * b.cw) / m.a0),
                          m.a.push((1 - b.alpha / b.A) / m.a0),
                          m.b.push((1 + b.alpha * b.A) / m.a0),
                          m.b.push((-2 * b.cw) / m.a0),
                          m.b.push((1 - b.alpha * b.A) / m.a0),
                          m
                        );
                      },
                      lowshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var _ = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 + (b.A - 1) * b.cw + _),
                          m.a.push((-2 * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 + (b.A - 1) * b.cw - _) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw + _)) / m.a0
                          ),
                          m.b.push(
                            (2 * b.A * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 - (b.A - 1) * b.cw - _)) / m.a0
                          ),
                          m
                        );
                      },
                      highshelf: function (d) {
                        var m = p();
                        d.BW && delete d.BW;
                        var b = h(d);
                        m.k = 1;
                        var _ = 2 * Math.sqrt(b.A) * b.alpha;
                        return (
                          (m.a0 = b.A + 1 - (b.A - 1) * b.cw + _),
                          m.a.push((2 * (b.A - 1 - (b.A + 1) * b.cw)) / m.a0),
                          m.a.push((b.A + 1 - (b.A - 1) * b.cw - _) / m.a0),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw + _)) / m.a0
                          ),
                          m.b.push(
                            (-2 * b.A * (b.A - 1 + (b.A + 1) * b.cw)) / m.a0
                          ),
                          m.b.push(
                            (b.A * (b.A + 1 + (b.A - 1) * b.cw - _)) / m.a0
                          ),
                          m
                        );
                      },
                      aweighting: function (d) {
                        var m = p();
                        m.k = 1;
                        var b = (2 * Math.PI * d.Fc) / d.Fs,
                          _ = 2 * Math.tan(b / 2),
                          x = d.Q,
                          w = Math.pow(_, 2);
                        return (
                          (m.a0 = 4 * x + w * x + 2 * _),
                          m.a.push(2 * w * x - 8 * x),
                          m.a.push(4 * x + w * x - 2 * _),
                          m.b.push(w * x),
                          m.b.push(2 * w * x),
                          m.b.push(w * x),
                          m
                        );
                      },
                    };
                  };
                  l.exports = u;
                },
                {},
              ],
              7: [
                function (a, l, r) {
                  var u = a("./utils"),
                    c = u.complex,
                    h = u.runMultiFilter,
                    p = u.runMultiFilterReverse,
                    d = u.evaluatePhase,
                    m = function (b) {
                      for (
                        var _ = b, x = { re: 1, im: 0 }, w = [], M = [], O = 0;
                        O < _.length;
                        O++
                      ) {
                        w[O] = {};
                        var E = _[O];
                        (w[O].b0 = { re: E.b[0], im: 0 }),
                          (w[O].b1 = { re: E.b[1], im: 0 }),
                          (w[O].b2 = { re: E.b[2], im: 0 }),
                          (w[O].a1 = { re: E.a[0], im: 0 }),
                          (w[O].a2 = { re: E.a[1], im: 0 }),
                          (w[O].k = { re: E.k, im: 0 }),
                          (w[O].z = [0, 0]),
                          (M[O] = {}),
                          (M[O].b1 = E.b[1] / E.b[0]),
                          (M[O].b2 = E.b[2] / E.b[0]),
                          (M[O].a1 = E.a[0]),
                          (M[O].a2 = E.a[1]);
                      }
                      var tt = function (k, R) {
                          var W =
                              R * k.k.re - k.a1.re * k.z[0] - k.a2.re * k.z[1],
                            lt =
                              k.b0.re * W + k.b1.re * k.z[0] + k.b2.re * k.z[1];
                          return (k.z[1] = k.z[0]), (k.z[0] = W), lt;
                        },
                        I = function (k, R) {
                          var W = k,
                            lt = 0;
                          for (lt = 0; lt < R.length; lt++) W = tt(R[lt], W);
                          return W;
                        },
                        $ = function (k, R) {
                          var W = k.Fs,
                            lt = k.Fr,
                            at = -Math.PI * (lt / W) * 2,
                            H = { re: Math.cos(at), im: Math.sin(at) },
                            G = c.mul(
                              R.k,
                              c.add(R.b0, c.mul(H, c.add(R.b1, c.mul(R.b2, H))))
                            ),
                            nt = c.add(
                              x,
                              c.mul(H, c.add(R.a1, c.mul(R.a2, H)))
                            ),
                            it = c.div(G, nt);
                          return {
                            magnitude: c.magnitude(it),
                            phase: c.phase(it),
                          };
                        },
                        j = function (k) {
                          var R = 0,
                            W = { magnitude: 1, phase: 0 };
                          for (R = 0; R < w.length; R++) {
                            var lt = $(k, w[R]);
                            (W.magnitude *= lt.magnitude),
                              (W.phase += lt.phase);
                          }
                          return (
                            (W.dBmagnitude =
                              20 * Math.log(W.magnitude) * Math.LOG10E),
                            W
                          );
                        },
                        J = function () {
                          for (var k = [], R = 0; R < _.length; R++)
                            k[R] = {
                              b0: { re: E.b[0], im: 0 },
                              b1: { re: E.b[1], im: 0 },
                              b2: { re: E.b[2], im: 0 },
                              a1: { re: E.a[0], im: 0 },
                              a2: { re: E.a[1], im: 0 },
                              k: { re: E.k, im: 0 },
                              z: [0, 0],
                            };
                          return k;
                        },
                        T = function (k) {
                          var R = J();
                          return h(k, R, I);
                        },
                        S = function (k, R) {
                          var W = {},
                            lt = [],
                            at = 0;
                          for (at = 0; at < R; at++) lt.push(k(at));
                          W.out = T(lt);
                          var H = !1,
                            G = !1;
                          for (at = 0; at < R - 1; at++)
                            if (
                              (W.out[at] > W.out[at + 1] &&
                                !H &&
                                ((H = !0),
                                (W.max = { sample: at, value: W.out[at] })),
                              H && !G && W.out[at] < W.out[at + 1])
                            ) {
                              (G = !0),
                                (W.min = { sample: at, value: W.out[at] });
                              break;
                            }
                          return W;
                        },
                        v = function (k, R) {
                          var W = Math.pow(k / 2, 2) - R;
                          return W < 0
                            ? [
                                { re: -k / 2, im: Math.sqrt(Math.abs(W)) },
                                { re: -k / 2, im: -Math.sqrt(Math.abs(W)) },
                              ]
                            : [
                                { re: -k / 2 + Math.sqrt(W), im: 0 },
                                { re: -k / 2 - Math.sqrt(W), im: 0 },
                              ];
                        },
                        N = function () {
                          for (var k = [], R = 0; R < M.length; R++)
                            (k[R] = {}),
                              (k[R].z = v(M[R].b1, M[R].b2)),
                              (k[R].p = v(M[R].a1, M[R].a2));
                          return k;
                        };
                      return {
                        singleStep: function (k) {
                          return I(k, w);
                        },
                        multiStep: function (k, R) {
                          return h(k, w, I, R);
                        },
                        filtfilt: function (k, R) {
                          return p(h(k, w, I, R), w, I, !0);
                        },
                        simulate: function (k) {
                          return T(k);
                        },
                        stepResponse: function (k) {
                          return S(function () {
                            return 1;
                          }, k);
                        },
                        impulseResponse: function (k) {
                          return S(function (R) {
                            return R === 0 ? 1 : 0;
                          }, k);
                        },
                        responsePoint: function (k) {
                          return j(k);
                        },
                        response: function (k) {
                          k = k || 100;
                          var R = [],
                            W = 0,
                            lt = 2 * k;
                          for (W = 0; W < k; W++) R[W] = j({ Fs: lt, Fr: W });
                          return d(R), R;
                        },
                        polesZeros: function () {
                          return N();
                        },
                        reinit: function () {
                          for (O = 0; O < w.length; O++) w[O].z = [0, 0];
                        },
                      };
                    };
                  l.exports = m;
                },
                { "./utils": 9 },
              ],
              8: [
                function (a, l, r) {
                  var u = function (c) {
                    var h,
                      p = c,
                      d = [],
                      m = function (w) {
                        for (h = 0; h < w.steps; h++)
                          d.push(
                            p.singleStep(
                              (Math.random() - 0.5) * w.pp + w.offset
                            )
                          );
                      },
                      b = function (w) {
                        var M = w.offset + w.pp,
                          O = w.offset - w.pp;
                        for (h = 0; h < w.steps; h++)
                          h % 200 < 100
                            ? d.push(p.singleStep(M))
                            : d.push(p.singleStep(O));
                      },
                      _ = function (w) {
                        var M = w.offset + w.pp,
                          O = w.offset - w.pp;
                        for (h = 0; h < w.steps; h++)
                          h % 100 == 0
                            ? d.push(p.singleStep(M))
                            : d.push(p.singleStep(O));
                      },
                      x = function (w) {
                        var M = w.offset + w.pp,
                          O = w.offset - w.pp,
                          E = O,
                          tt = (M - O) / 100;
                        for (h = 0; h < w.steps; h++)
                          h % 200 < 100 ? (E += tt) : (E -= tt),
                            d.push(p.singleStep(E));
                      };
                    return {
                      randomStability: function (w) {
                        for (
                          p.reinit(), d.length = 0, m(w), h = w.setup;
                          h < d.length;
                          h++
                        )
                          if (d[h] > w.maxStable || d[h] < w.minStable)
                            return d[h];
                        return !0;
                      },
                      directedRandomStability: function (w) {
                        p.reinit(), (d.length = 0);
                        var M;
                        for (M = 0; M < w.tests; M++) {
                          var O = Math.random();
                          O < 0.25
                            ? m(w)
                            : O < 0.5
                            ? b(w)
                            : O < 0.75
                            ? _(w)
                            : x(w);
                        }
                        for (m(w), h = w.setup; h < d.length; h++)
                          if (d[h] > w.maxStable || d[h] < w.minStable)
                            return d[h];
                        return !0;
                      },
                      evaluateBehavior: function () {},
                    };
                  };
                  l.exports = u;
                },
                {},
              ],
              9: [
                function (a, l, r) {
                  (r.evaluatePhase = function (d) {
                    var m = 0,
                      b = 0,
                      _ = Math.PI,
                      x = 2 * _,
                      w = [];
                    for (b = 0; b < d.length; b++) w.push(d[b].phase);
                    for (
                      d[0].unwrappedPhase = d[0].phase,
                        d[0].groupDelay = 0,
                        b = 1;
                      b < w.length;
                      b++
                    ) {
                      var M = w[b] - w[b - 1];
                      if (M > _) for (m = b; m < w.length; m++) w[m] -= x;
                      else if (M < -_) for (m = b; m < w.length; m++) w[m] += x;
                      w[b] < 0
                        ? (d[b].unwrappedPhase = -w[b])
                        : (d[b].unwrappedPhase = w[b]),
                        (d[b].phaseDelay =
                          d[b].unwrappedPhase / (b / d.length)),
                        (d[b].groupDelay =
                          (d[b].unwrappedPhase - d[b - 1].unwrappedPhase) /
                          (_ / d.length)),
                        d[b].groupDelay < 0 &&
                          (d[b].groupDelay = -d[b].groupDelay);
                    }
                    d[0].magnitude !== 0
                      ? ((d[0].phaseDelay = d[1].phaseDelay),
                        (d[0].groupDelay = d[1].groupDelay))
                      : ((d[0].phaseDelay = d[2].phaseDelay),
                        (d[0].groupDelay = d[2].groupDelay),
                        (d[1].phaseDelay = d[2].phaseDelay),
                        (d[1].groupDelay = d[2].groupDelay));
                  }),
                    (r.runMultiFilter = function (d, m, b, _) {
                      var x = [];
                      _ && (x = d);
                      var w;
                      for (w = 0; w < d.length; w++) x[w] = b(d[w], m);
                      return x;
                    }),
                    (r.runMultiFilterReverse = function (d, m, b, _) {
                      var x = [];
                      _ && (x = d);
                      var w;
                      for (w = d.length - 1; w >= 0; w--) x[w] = b(d[w], m);
                      return x;
                    });
                  var u = function (d, m) {
                    for (var b = !0; b; ) {
                      var _ = d,
                        x = m;
                      if (
                        ((b = !1),
                        x || (x = 1),
                        _ !== Math.floor(_) || x !== Math.floor(x))
                      )
                        return 1;
                      if (_ === 0 || _ === 1) return x;
                      (d = _ - 1), (m = x * _), (b = !0);
                    }
                  };
                  r.besselFactors = function (d) {
                    for (var m = [], b = 0; b < d + 1; b++) {
                      var _ = u(2 * d - b),
                        x = Math.pow(2, d - b) * u(b) * u(d - b);
                      m.unshift(Math.floor(_ / x));
                    }
                    return m;
                  };
                  var c = function (d, m) {
                      for (var b = 0, _ = 0; _ < m; _++) {
                        var x = 1 / Math.pow(2, _ + 1);
                        d > x && ((d -= x), (b += x));
                      }
                      return b;
                    },
                    h = function (d, m) {
                      return d & Math.pow(2, m);
                    },
                    p = function (d, m, b) {
                      var _ = Math.abs(d),
                        x = d - _;
                      return {
                        number: h(_, m).toString(),
                        fraction: c(x, b).toString(),
                        numberBits: m,
                        fractionBits: b,
                      };
                    };
                  (r.fixedPoint = {
                    convert: function (d, m, b) {
                      return p(d, m, b);
                    },
                    add: function (d, m) {},
                    sub: function (d, m) {},
                    mul: function (d, m) {},
                    div: function (d, m) {},
                  }),
                    (r.complex = {
                      div: function (d, m) {
                        var b = d.re,
                          _ = d.im,
                          x = m.re,
                          w = m.im,
                          M = x * x + w * w;
                        return {
                          re: (b * x + _ * w) / M,
                          im: (_ * x - b * w) / M,
                        };
                      },
                      mul: function (d, m) {
                        var b = d.re,
                          _ = d.im,
                          x = m.re,
                          w = m.im;
                        return {
                          re: b * x - _ * w,
                          im: (b + _) * (x + w) - b * x - _ * w,
                        };
                      },
                      add: function (d, m) {
                        return { re: d.re + m.re, im: d.im + m.im };
                      },
                      sub: function (d, m) {
                        return { re: d.re - m.re, im: d.im - m.im };
                      },
                      phase: function (d) {
                        return Math.atan2(d.im, d.re);
                      },
                      magnitude: function (d) {
                        return Math.sqrt(d.re * d.re + d.im * d.im);
                      },
                    });
                },
                {},
              ],
            },
            {},
            [1]
          )(1);
        });
      })(kf)),
    kf.exports
  );
}
var ZS = QS();
const Yl = lb(ZS);
function KS(i) {
  const e = new Yl.CalcCascades(),
    a = {
      order: i.order,
      characteristic: "butterworth",
      Fs: i.Fs,
      preGain: !!i.preGain,
    };
  if (i.filterType === "lowpass") return e.lowpass({ ...a, Fc: i.Fc });
  if (i.filterType === "highpass") return e.highpass({ ...a, Fc: i.Fc });
  if (i.filterType === "bandpass") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      r = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandpass({ ...a, Fc: r, BW: l });
  }
  if (i.filterType === "bandstop") {
    const l = Math.max(1e-6, (i.F2 ?? 0) - (i.F1 ?? 0)),
      r = i.Fc ?? (i.F1 + i.F2) / 2;
    return e.bandstop({ ...a, Fc: r, BW: l });
  }
  return null;
}
function PS(i) {
  const e = new Yl.FirCoeffs();
  if (i.windowMode === "KaiserBessel") {
    i.characteristic === "FIR" && i.order < 3 && (i.order = 3);
    let a = i.order;
    return (
      a % 2 === 0 && (a += 1),
      e.kbFilter({ order: a, Fs: i.Fs, Fa: i.Fa, Fb: i.Fb, Att: i.Att })
    );
  }
  return i.filterType === "lowpass"
    ? e.lowpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
    : i.filterType === "highpass"
    ? e.highpass({ order: i.order, Fs: i.Fs, Fc: i.Fc })
    : i.filterType === "bandpass"
    ? e.bandpass({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
    : i.filterType === "bandstop"
    ? e.bandstop({ order: i.order, Fs: i.Fs, F1: i.F1, F2: i.F2 })
    : null;
}
function IS(i, e) {
  if (!Array.isArray(i) || !i.length) return [];
  if (e.characteristic === "IIR") {
    const a = KS(e);
    return a ? new Yl.IirFilter(a).multiStep(i) : i;
  }
  if (e.characteristic === "FIR") {
    const a = PS(e);
    return new Yl.FirFilter(a).multiStep(i);
  }
  return i;
}
xs.register(rh, uh, dh, hh, fh, ch);
function WS(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let u = 0; u < i.length; u += l) r.push(i[Math.floor(u)]);
  return r;
}
function $S(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const JS = () => {
    const {
        time: i,
        userFs: e,
        config: a,
        filteredECG: l,
        rawSamples: r,
        setFilteredSamples: u,
      } = ft.useContext(Fn),
      c = ft.useMemo(() => {
        if (!r.length || !l) return [];
        const d = $S(r),
          m = WS(r, d, e),
          b = m.map((M) => M.y),
          _ = { ...a, Fs: Number(e) },
          x = IS(b, _);
        return m.map((M, O) => ({ x: M.x, y: x[O] })).filter((M) => M.x <= i);
      }, [i, e, a, l, r]);
    ft.useEffect(() => {
      u(c);
    }, [i, e, a, l, r, c, u]);
    const h = {
        datasets: [
          {
            label: "Filtered ECG",
            data: c,
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      p = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            title: {
              display: !0,
              text: "Time (s)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            title: {
              display: !0,
              text: "Amplitude (mV)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: XS.signalContainer,
      children: [
        U.jsxs("h3", {
          children: [
            "ECG Signal (Filtered) ",
            U.jsx("span", { children: " Filter Used : " }),
            U.jsx("span", {
              children:
                a.characteristic === "FIR"
                  ? `Window based FIR - ${a.windowMode} - ${a.filterType}`
                  : `Butterworth IIR - ${a.filterType}`,
            }),
          ],
        }),
        U.jsx(Gl, { data: h, options: p }),
      ],
    });
  },
  t5 = "_signalContainer_3bymz_1",
  e5 = { signalContainer: t5 };
function n5(i, e, a = 0.2, l = 0.33) {
  return i.map((r, u) => r + a * Math.sin(2 * Math.PI * l * (u / e)));
}
function i5(i, e, a = 0.05, l = 50) {
  return i.map((r, u) => r + a * Math.sin(2 * Math.PI * l * (u / e)));
}
function a5(i, e = 0.02) {
  return i.map((a) => a + e * (Math.random() * 2 - 1));
}
xs.register(rh, uh, dh, hh, fh, ch);
function s5(i, e, a) {
  const l = e / a;
  if (l <= 1) return i;
  const r = [];
  for (let u = 0; u < i.length; u += l) r.push(i[Math.floor(u)]);
  return r;
}
function l5(i) {
  if (i.length < 2) return 500;
  const e = i[1].x - i[0].x;
  return e > 0 ? 1 / e : 500;
}
const o5 = () => {
  const {
    time: i,
    userFs: e,
    applyNoiseTrigger: a,
    setApplyNoiseTrigger: l,
    noise: r,
    rawSamples: u,
    setNoisySamples: c,
  } = ft.useContext(Fn);
  ft.useEffect(() => {
    !r.baseline && !r.powerline && !r.emg && l(!1);
  }, [r, l]);
  const h = ft.useMemo(() => {
    if (!u.length || !a) return [];
    const m = l5(u),
      _ = s5(u, m, e).filter((w) => w.x <= i);
    let x = _.map((w) => w.y);
    return (
      r.baseline && (x = n5(x, e)),
      r.powerline && (x = i5(x, e)),
      r.emg && (x = a5(x)),
      _.map((w, M) => ({ x: w.x, y: x[M] }))
    );
  }, [a, r, i, e, u]);
  ft.useEffect(() => {
    c(h);
  }, [a, r, i, e, u, h, c]);
  const p = {
      datasets: [
        {
          label: "ECG Signal",
          data: h,
          borderColor: "red",
          borderWidth: 1,
          pointRadius: 0,
          tension: 0,
        },
      ],
    },
    d = {
      responsive: !0,
      animation: !0,
      parsing: !1,
      plugins: { legend: { display: !1 } },
      scales: {
        x: {
          type: "linear",
          title: {
            display: !0,
            text: "Time (s)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 13 } },
        },
        y: {
          title: {
            display: !0,
            text: "Amplitude (mV)",
            font: { size: 13, weight: "bold" },
          },
          ticks: { font: { size: 12 } },
        },
      },
    };
  return U.jsxs("div", {
    className: e5.signalContainer,
    children: [
      U.jsxs("h3", {
        children: [
          "ECG Signal",
          " ",
          U.jsxs("span", {
            children: [
              " ",
              "(Contiminated with",
              " ",
              r.baseline
                ? `Baseline Wander ${
                    (r.baseline && r.powerline) || (r.baseline && r.emg)
                      ? ","
                      : ""
                  }`
                : "",
              " ",
              r.powerline ? `Powerline Noise${r.emg ? "," : ""}` : "",
              " ",
              r.emg ? "Muscle Noise" : "",
              ")",
            ],
          }),
        ],
      }),
      U.jsx(Gl, { data: p, options: d }),
    ],
  });
};
function Kb(i, e) {
  const a = 1 << Math.ceil(Math.log2(i.length)),
    l = new Yl.Fft(a),
    r = new Array(a).fill(0);
  for (let b = 0; b < i.length; b++) r[b] = i[b];
  const u = l.forward(r, "hanning"),
    c = l.magnitude(u);
  var h = l.magToDb(c);
  const p = h.map((b) => ((b * b) / (a * e)) * 1e3),
    d = p.map((b, _) => (_ * e) / a),
    m = Math.floor(a / 2);
  return { freqs: d.slice(0, m), psd: p.slice(0, m) };
}
const r5 = "_signalContainer_1kzgt_1",
  u5 = { signalContainer: r5 },
  c5 = () => {
    const {
        rawSamples: i,
        generateECG: e,
        userFs: a,
        noisySamples: l,
        csvFilePath: r,
      } = ft.useContext(Fn),
      u = ft.useMemo(() => {
        if (!e || i.length === 0) return null;
        const p = l && l.length > 0 ? l : i;
        if (!p || p.length === 0) return null;
        const d = p.map((b) => b.y);
        return Kb(d, a);
      }, [i, e, a, l, r]);
    if (!u) return null;
    const c = {
        datasets: [
          {
            label: "Unfiltered ECG PSD",
            data: u.psd.map((p, d) => ({ x: u.freqs[d], y: p })),
            borderColor: "#005FA7",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      h = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: a / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            max: 2,
            title: {
              display: !0,
              text: "PSD(dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: u5.signalContainer,
      children: [
        U.jsx("h3", { children: "Power Spectral Density — Unfiltered ECG" }),
        U.jsx(Gl, { data: c, options: h }),
      ],
    });
  },
  f5 = "_signalContainer_169cv_1",
  h5 = { signalContainer: f5 },
  d5 = () => {
    const {
        filteredSamples: i,
        generateECG: e,
        userFs: a,
        csvFilePath: l,
        config: r,
      } = ft.useContext(Fn),
      u = ft.useMemo(() => {
        if (!e || i.length === 0) return null;
        const p = i.map((m) => m.y);
        return Kb(p, a);
      }, [i, e, a, l, r]);
    if (!u) return null;
    const c = {
        datasets: [
          {
            label: "Unfiltered ECG PSD",
            data: u.psd.map((p, d) => ({ x: u.freqs[d], y: p })),
            borderColor: "blue",
            borderWidth: 1,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      h = {
        responsive: !0,
        animation: !0,
        parsing: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: a / 2,
            title: {
              display: !0,
              text: "Frequency (Hz)",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 13 } },
          },
          y: {
            min: 0,
            max: 2,
            title: {
              display: !0,
              text: "PSD(dB/Hz) x 10^3",
              font: { size: 13, weight: "bold" },
            },
            ticks: { font: { size: 12 } },
          },
        },
      };
    return U.jsxs("div", {
      className: h5.signalContainer,
      children: [
        U.jsx("h3", { children: "Power Spectral Density — Filtered ECG" }),
        U.jsx(Gl, { data: c, options: h }),
      ],
    });
  },
  g5 = () => {
    const {
      generateECG: i,
      applyNoiseTrigger: e,
      filteredECG: a,
      applypsdTrigger: l,
    } = ft.useContext(Fn);
    return U.jsx("div", {
      className: xf.leftPanelContainer,
      children: U.jsxs("div", {
        className: xf.container,
        children: [
          U.jsxs("div", {
            className: xf.psdContainer,
            children: [l && U.jsx(c5, {}), l && U.jsx(d5, {})],
          }),
          U.jsx("div", { children: i && U.jsx(VS, {}) }),
          U.jsx("div", { children: e && U.jsx(o5, {}) }),
          U.jsx("div", { children: a && U.jsx(JS, {}) }),
        ],
      }),
    });
  },
  p5 = "_rightPanelContainer_rdb7k_1",
  m5 = "_right_rdb7k_1",
  b5 = "_box_rdb7k_49",
  y5 = "_rangeValue_rdb7k_235",
  v5 = "_syncInputContainer_rdb7k_249",
  w5 = "_buttonContainer_rdb7k_277",
  _5 = "_psdContainer_rdb7k_287",
  Mn = {
    rightPanelContainer: p5,
    right: m5,
    box: b5,
    rangeValue: y5,
    syncInputContainer: v5,
    buttonContainer: w5,
    psdContainer: _5,
  };
function Pb(i, e, a) {
  if (typeof i == "function" ? i === e : i.has(e))
    return arguments.length < 3 ? e : a;
  throw new TypeError("Private element is not present on this object");
}
function x5(i, e) {
  if (e.has(i))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function P0(i, e) {
  return i.get(Pb(i, e));
}
function S5(i, e, a) {
  x5(i, e), e.set(i, a);
}
function C5(i, e, a) {
  return i.set(Pb(i, e), a), a;
}
const E5 = 100,
  ht = {},
  M5 = () => {
    ht.previousActiveElement instanceof HTMLElement
      ? (ht.previousActiveElement.focus(), (ht.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  T5 = (i) =>
    new Promise((e) => {
      if (!i) return e();
      const a = window.scrollX,
        l = window.scrollY;
      (ht.restoreFocusTimeout = setTimeout(() => {
        M5(), e();
      }, E5)),
        window.scrollTo(a, l);
    }),
  Ib = "swal2-",
  A5 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  Q = A5.reduce((i, e) => ((i[e] = Ib + e), i), {}),
  O5 = ["success", "warning", "info", "question", "error"],
  Fr = O5.reduce((i, e) => ((i[e] = Ib + e), i), {}),
  Wb = "SweetAlert2:",
  gh = (i) => i.charAt(0).toUpperCase() + i.slice(1),
  ke = (i) => {
    console.warn(`${Wb} ${typeof i == "object" ? i.join(" ") : i}`);
  },
  Ma = (i) => {
    console.error(`${Wb} ${i}`);
  },
  I0 = [],
  z5 = (i) => {
    I0.includes(i) || (I0.push(i), ke(i));
  },
  $b = (i, e = null) => {
    z5(
      `"${i}" is deprecated and will be removed in the next major release.${
        e ? ` Use "${e}" instead.` : ""
      }`
    );
  },
  $r = (i) => (typeof i == "function" ? i() : i),
  ph = (i) => i && typeof i.toPromise == "function",
  Xl = (i) => (ph(i) ? i.toPromise() : Promise.resolve(i)),
  mh = (i) => i && Promise.resolve(i) === i,
  Re = () => document.body.querySelector(`.${Q.container}`),
  Ql = (i) => {
    const e = Re();
    return e ? e.querySelector(i) : null;
  },
  nn = (i) => Ql(`.${i}`),
  Ut = () => nn(Q.popup),
  Ss = () => nn(Q.icon),
  D5 = () => nn(Q["icon-content"]),
  Jb = () => nn(Q.title),
  bh = () => nn(Q["html-container"]),
  t2 = () => nn(Q.image),
  yh = () => nn(Q["progress-steps"]),
  Jr = () => nn(Q["validation-message"]),
  Un = () => Ql(`.${Q.actions} .${Q.confirm}`),
  Cs = () => Ql(`.${Q.actions} .${Q.cancel}`),
  Ta = () => Ql(`.${Q.actions} .${Q.deny}`),
  k5 = () => nn(Q["input-label"]),
  Es = () => Ql(`.${Q.loader}`),
  Zl = () => nn(Q.actions),
  e2 = () => nn(Q.footer),
  tu = () => nn(Q["timer-progress-bar"]),
  vh = () => nn(Q.close),
  R5 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  wh = () => {
    const i = Ut();
    if (!i) return [];
    const e = i.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      a = Array.from(e).sort((u, c) => {
        const h = parseInt(u.getAttribute("tabindex") || "0"),
          p = parseInt(c.getAttribute("tabindex") || "0");
        return h > p ? 1 : h < p ? -1 : 0;
      }),
      l = i.querySelectorAll(R5),
      r = Array.from(l).filter((u) => u.getAttribute("tabindex") !== "-1");
    return [...new Set(a.concat(r))].filter((u) => Xe(u));
  },
  _h = () =>
    ui(document.body, Q.shown) &&
    !ui(document.body, Q["toast-shown"]) &&
    !ui(document.body, Q["no-backdrop"]),
  eu = () => {
    const i = Ut();
    return i ? ui(i, Q.toast) : !1;
  },
  B5 = () => {
    const i = Ut();
    return i ? i.hasAttribute("data-loading") : !1;
  },
  an = (i, e) => {
    if (((i.textContent = ""), e)) {
      const l = new DOMParser().parseFromString(e, "text/html"),
        r = l.querySelector("head");
      r &&
        Array.from(r.childNodes).forEach((c) => {
          i.appendChild(c);
        });
      const u = l.querySelector("body");
      u &&
        Array.from(u.childNodes).forEach((c) => {
          c instanceof HTMLVideoElement || c instanceof HTMLAudioElement
            ? i.appendChild(c.cloneNode(!0))
            : i.appendChild(c);
        });
    }
  },
  ui = (i, e) => {
    if (!e) return !1;
    const a = e.split(/\s+/);
    for (let l = 0; l < a.length; l++)
      if (!i.classList.contains(a[l])) return !1;
    return !0;
  },
  L5 = (i, e) => {
    Array.from(i.classList).forEach((a) => {
      !Object.values(Q).includes(a) &&
        !Object.values(Fr).includes(a) &&
        !Object.values(e.showClass || {}).includes(a) &&
        i.classList.remove(a);
    });
  },
  en = (i, e, a) => {
    if ((L5(i, e), !e.customClass)) return;
    const l = e.customClass[a];
    if (l) {
      if (typeof l != "string" && !l.forEach) {
        ke(
          `Invalid type of customClass.${a}! Expected string or iterable object, got "${typeof l}"`
        );
        return;
      }
      Nt(i, l);
    }
  },
  nu = (i, e) => {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return i.querySelector(`.${Q.popup} > .${Q[e]}`);
      case "checkbox":
        return i.querySelector(`.${Q.popup} > .${Q.checkbox} input`);
      case "radio":
        return (
          i.querySelector(`.${Q.popup} > .${Q.radio} input:checked`) ||
          i.querySelector(`.${Q.popup} > .${Q.radio} input:first-child`)
        );
      case "range":
        return i.querySelector(`.${Q.popup} > .${Q.range} input`);
      default:
        return i.querySelector(`.${Q.popup} > .${Q.input}`);
    }
  },
  n2 = (i) => {
    if ((i.focus(), i.type !== "file")) {
      const e = i.value;
      (i.value = ""), (i.value = e);
    }
  },
  i2 = (i, e, a) => {
    !i ||
      !e ||
      (typeof e == "string" && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach((l) => {
        Array.isArray(i)
          ? i.forEach((r) => {
              a ? r.classList.add(l) : r.classList.remove(l);
            })
          : a
          ? i.classList.add(l)
          : i.classList.remove(l);
      }));
  },
  Nt = (i, e) => {
    i2(i, e, !0);
  },
  _n = (i, e) => {
    i2(i, e, !1);
  },
  Yi = (i, e) => {
    const a = Array.from(i.children);
    for (let l = 0; l < a.length; l++) {
      const r = a[l];
      if (r instanceof HTMLElement && ui(r, e)) return r;
    }
  },
  xa = (i, e, a) => {
    a === `${parseInt(`${a}`)}` && (a = parseInt(a)),
      a || parseInt(`${a}`) === 0
        ? i.style.setProperty(e, typeof a == "number" ? `${a}px` : a)
        : i.style.removeProperty(e);
  },
  ve = (i, e = "flex") => {
    i && (i.style.display = e);
  },
  ze = (i) => {
    i && (i.style.display = "none");
  },
  xh = (i, e = "block") => {
    i &&
      new MutationObserver(() => {
        Kl(i, i.innerHTML, e);
      }).observe(i, { childList: !0, subtree: !0 });
  },
  W0 = (i, e, a, l) => {
    const r = i.querySelector(e);
    r && r.style.setProperty(a, l);
  },
  Kl = (i, e, a = "flex") => {
    e ? ve(i, a) : ze(i);
  },
  Xe = (i) =>
    !!(i && (i.offsetWidth || i.offsetHeight || i.getClientRects().length)),
  j5 = () => !Xe(Un()) && !Xe(Ta()) && !Xe(Cs()),
  Gf = (i) => i.scrollHeight > i.clientHeight,
  H5 = (i, e) => {
    let a = i;
    for (; a && a !== e; ) {
      if (Gf(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  },
  a2 = (i) => {
    const e = window.getComputedStyle(i),
      a = parseFloat(e.getPropertyValue("animation-duration") || "0"),
      l = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return a > 0 || l > 0;
  },
  Sh = (i, e = !1) => {
    const a = tu();
    a &&
      Xe(a) &&
      (e && ((a.style.transition = "none"), (a.style.width = "100%")),
      setTimeout(() => {
        (a.style.transition = `width ${i / 1e3}s linear`),
          (a.style.width = "0%");
      }, 10));
  },
  N5 = () => {
    const i = tu();
    if (!i) return;
    const e = parseInt(window.getComputedStyle(i).width);
    i.style.removeProperty("transition"), (i.style.width = "100%");
    const a = parseInt(window.getComputedStyle(i).width),
      l = (e / a) * 100;
    i.style.width = `${l}%`;
  },
  U5 = () => typeof window > "u" || typeof document > "u",
  F5 = `
 <div aria-labelledby="${Q.title}" aria-describedby="${Q["html-container"]}" class="${Q.popup}" tabindex="-1">
   <button type="button" class="${Q.close}"></button>
   <ul class="${Q["progress-steps"]}"></ul>
   <div class="${Q.icon}"></div>
   <img class="${Q.image}" />
   <h2 class="${Q.title}" id="${Q.title}"></h2>
   <div class="${Q["html-container"]}" id="${Q["html-container"]}"></div>
   <input class="${Q.input}" id="${Q.input}" />
   <input type="file" class="${Q.file}" />
   <div class="${Q.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${Q.select}" id="${Q.select}"></select>
   <div class="${Q.radio}"></div>
   <label class="${Q.checkbox}">
     <input type="checkbox" id="${Q.checkbox}" />
     <span class="${Q.label}"></span>
   </label>
   <textarea class="${Q.textarea}" id="${Q.textarea}"></textarea>
   <div class="${Q["validation-message"]}" id="${Q["validation-message"]}"></div>
   <div class="${Q.actions}">
     <div class="${Q.loader}"></div>
     <button type="button" class="${Q.confirm}"></button>
     <button type="button" class="${Q.deny}"></button>
     <button type="button" class="${Q.cancel}"></button>
   </div>
   <div class="${Q.footer}"></div>
   <div class="${Q["timer-progress-bar-container"]}">
     <div class="${Q["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  q5 = () => {
    const i = Re();
    return i
      ? (i.remove(),
        _n(
          [document.documentElement, document.body],
          [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]]
        ),
        !0)
      : !1;
  },
  pa = () => {
    ht.currentInstance && ht.currentInstance.resetValidationMessage();
  },
  Y5 = () => {
    const i = Ut();
    if (!i) return;
    const e = Yi(i, Q.input),
      a = Yi(i, Q.file),
      l = i.querySelector(`.${Q.range} input`),
      r = i.querySelector(`.${Q.range} output`),
      u = Yi(i, Q.select),
      c = i.querySelector(`.${Q.checkbox} input`),
      h = Yi(i, Q.textarea);
    e && (e.oninput = pa),
      a && (a.onchange = pa),
      u && (u.onchange = pa),
      c && (c.onchange = pa),
      h && (h.oninput = pa),
      l &&
        r &&
        ((l.oninput = () => {
          pa(), (r.value = l.value);
        }),
        (l.onchange = () => {
          pa(), (r.value = l.value);
        }));
  },
  V5 = (i) => {
    if (typeof i == "string") {
      const e = document.querySelector(i);
      if (!e) throw new Error(`Target element "${i}" not found`);
      return e;
    }
    return i;
  },
  G5 = (i) => {
    const e = Ut();
    e &&
      (e.setAttribute("role", i.toast ? "alert" : "dialog"),
      e.setAttribute("aria-live", i.toast ? "polite" : "assertive"),
      i.toast || e.setAttribute("aria-modal", "true"));
  },
  X5 = (i) => {
    window.getComputedStyle(i).direction === "rtl" &&
      (Nt(Re(), Q.rtl), (ht.isRTL = !0));
  },
  Q5 = (i) => {
    const e = q5();
    if (U5()) {
      Ma("SweetAlert2 requires document to initialize");
      return;
    }
    const a = document.createElement("div");
    (a.className = Q.container),
      e && Nt(a, Q["no-transition"]),
      an(a, F5),
      (a.dataset.swal2Theme = i.theme);
    const l = V5(i.target || "body");
    l.appendChild(a),
      i.topLayer && (a.setAttribute("popover", ""), a.showPopover()),
      G5(i),
      X5(l),
      Y5();
  },
  Ch = (i, e) => {
    i instanceof HTMLElement
      ? e.appendChild(i)
      : typeof i == "object"
      ? Z5(i, e)
      : i && an(e, i);
  },
  Z5 = (i, e) => {
    "jquery" in i ? K5(e, i) : an(e, i.toString());
  },
  K5 = (i, e) => {
    if (((i.textContent = ""), 0 in e))
      for (let a = 0; a in e; a++) i.appendChild(e[a].cloneNode(!0));
    else i.appendChild(e.cloneNode(!0));
  },
  P5 = (i, e) => {
    const a = Zl(),
      l = Es();
    !a ||
      !l ||
      (!e.showConfirmButton && !e.showDenyButton && !e.showCancelButton
        ? ze(a)
        : ve(a),
      en(a, e, "actions"),
      I5(a, l, e),
      an(l, e.loaderHtml || ""),
      en(l, e, "loader"));
  };
function I5(i, e, a) {
  const l = Un(),
    r = Ta(),
    u = Cs();
  !l ||
    !r ||
    !u ||
    (Bf(l, "confirm", a),
    Bf(r, "deny", a),
    Bf(u, "cancel", a),
    W5(l, r, u, a),
    a.reverseButtons &&
      (a.toast
        ? (i.insertBefore(u, l), i.insertBefore(r, l))
        : (i.insertBefore(u, e), i.insertBefore(r, e), i.insertBefore(l, e))));
}
function W5(i, e, a, l) {
  if (!l.buttonsStyling) {
    _n([i, e, a], Q.styled);
    return;
  }
  Nt([i, e, a], Q.styled),
    l.confirmButtonColor &&
      i.style.setProperty(
        "--swal2-confirm-button-background-color",
        l.confirmButtonColor
      ),
    l.denyButtonColor &&
      e.style.setProperty(
        "--swal2-deny-button-background-color",
        l.denyButtonColor
      ),
    l.cancelButtonColor &&
      a.style.setProperty(
        "--swal2-cancel-button-background-color",
        l.cancelButtonColor
      ),
    Rf(i),
    Rf(e),
    Rf(a);
}
function Rf(i) {
  const e = window.getComputedStyle(i);
  if (e.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const a = e.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)"
  );
  i.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${a}`)
  );
}
function Bf(i, e, a) {
  const l = gh(e);
  Kl(i, a[`show${l}Button`], "inline-block"),
    an(i, a[`${e}ButtonText`] || ""),
    i.setAttribute("aria-label", a[`${e}ButtonAriaLabel`] || ""),
    (i.className = Q[e]),
    en(i, a, `${e}Button`);
}
const $5 = (i, e) => {
    const a = vh();
    a &&
      (an(a, e.closeButtonHtml || ""),
      en(a, e, "closeButton"),
      Kl(a, e.showCloseButton),
      a.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
  },
  J5 = (i, e) => {
    const a = Re();
    a &&
      (t3(a, e.backdrop),
      e3(a, e.position),
      n3(a, e.grow),
      en(a, e, "container"));
  };
function t3(i, e) {
  typeof e == "string"
    ? (i.style.background = e)
    : e || Nt([document.documentElement, document.body], Q["no-backdrop"]);
}
function e3(i, e) {
  e &&
    (e in Q
      ? Nt(i, Q[e])
      : (ke('The "position" parameter is not valid, defaulting to "center"'),
        Nt(i, Q.center)));
}
function n3(i, e) {
  e && Nt(i, Q[`grow-${e}`]);
}
var It = { innerParams: new WeakMap(), domCache: new WeakMap() };
const i3 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  a3 = (i, e) => {
    const a = Ut();
    if (!a) return;
    const l = It.innerParams.get(i),
      r = !l || e.input !== l.input;
    i3.forEach((u) => {
      const c = Yi(a, Q[u]);
      c && (o3(u, e.inputAttributes), (c.className = Q[u]), r && ze(c));
    }),
      e.input && (r && s3(e), r3(e));
  },
  s3 = (i) => {
    if (!i.input) return;
    if (!re[i.input]) {
      Ma(
        `Unexpected type of input! Expected ${Object.keys(re).join(
          " | "
        )}, got "${i.input}"`
      );
      return;
    }
    const e = s2(i.input);
    if (!e) return;
    const a = re[i.input](e, i);
    ve(e),
      i.inputAutoFocus &&
        setTimeout(() => {
          n2(a);
        });
  },
  l3 = (i) => {
    for (let e = 0; e < i.attributes.length; e++) {
      const a = i.attributes[e].name;
      ["id", "type", "value", "style"].includes(a) || i.removeAttribute(a);
    }
  },
  o3 = (i, e) => {
    const a = Ut();
    if (!a) return;
    const l = nu(a, i);
    if (l) {
      l3(l);
      for (const r in e) l.setAttribute(r, e[r]);
    }
  },
  r3 = (i) => {
    if (!i.input) return;
    const e = s2(i.input);
    e && en(e, i, "input");
  },
  Eh = (i, e) => {
    !i.placeholder &&
      e.inputPlaceholder &&
      (i.placeholder = e.inputPlaceholder);
  },
  Pl = (i, e, a) => {
    if (a.inputLabel) {
      const l = document.createElement("label"),
        r = Q["input-label"];
      l.setAttribute("for", i.id),
        (l.className = r),
        typeof a.customClass == "object" && Nt(l, a.customClass.inputLabel),
        (l.innerText = a.inputLabel),
        e.insertAdjacentElement("beforebegin", l);
    }
  },
  s2 = (i) => {
    const e = Ut();
    if (e) return Yi(e, Q[i] || Q.input);
  },
  qr = (i, e) => {
    ["string", "number"].includes(typeof e)
      ? (i.value = `${e}`)
      : mh(e) ||
        ke(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`
        );
  },
  re = {};
re.text =
  re.email =
  re.password =
  re.number =
  re.tel =
  re.url =
  re.search =
  re.date =
  re["datetime-local"] =
  re.time =
  re.week =
  re.month =
    (i, e) => {
      const a = i;
      return qr(a, e.inputValue), Pl(a, a, e), Eh(a, e), (a.type = e.input), a;
    };
re.file = (i, e) => {
  const a = i;
  return Pl(a, a, e), Eh(a, e), a;
};
re.range = (i, e) => {
  const a = i,
    l = a.querySelector("input"),
    r = a.querySelector("output");
  return (
    l && (qr(l, e.inputValue), (l.type = e.input), Pl(l, i, e)),
    r && qr(r, e.inputValue),
    i
  );
};
re.select = (i, e) => {
  const a = i;
  if (((a.textContent = ""), e.inputPlaceholder)) {
    const l = document.createElement("option");
    an(l, e.inputPlaceholder),
      (l.value = ""),
      (l.disabled = !0),
      (l.selected = !0),
      a.appendChild(l);
  }
  return Pl(a, a, e), a;
};
re.radio = (i) => {
  const e = i;
  return (e.textContent = ""), i;
};
re.checkbox = (i, e) => {
  const a = Ut();
  if (!a) throw new Error("Popup not found");
  const l = nu(a, "checkbox");
  if (!l) throw new Error("Checkbox input not found");
  (l.value = "1"), (l.checked = !!e.inputValue);
  const u = i.querySelector("span");
  if (u) {
    const c = e.inputPlaceholder || e.inputLabel;
    c && an(u, c);
  }
  return l;
};
re.textarea = (i, e) => {
  const a = i;
  qr(a, e.inputValue), Eh(a, e), Pl(a, a, e);
  const l = (r) =>
    parseInt(window.getComputedStyle(r).marginLeft) +
    parseInt(window.getComputedStyle(r).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const r = Ut();
        if (!r) return;
        const u = parseInt(window.getComputedStyle(r).width),
          c = () => {
            if (!document.body.contains(a)) return;
            const h = a.offsetWidth + l(a),
              p = Ut();
            p && (h > u ? (p.style.width = `${h}px`) : xa(p, "width", e.width));
          };
        new MutationObserver(c).observe(a, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    a
  );
};
const u3 = (i, e) => {
    const a = bh();
    a &&
      (xh(a),
      en(a, e, "htmlContainer"),
      e.html
        ? (Ch(e.html, a), ve(a, "block"))
        : e.text
        ? ((a.textContent = e.text), ve(a, "block"))
        : ze(a),
      a3(i, e));
  },
  c3 = (i, e) => {
    const a = e2();
    a &&
      (xh(a),
      Kl(a, !!e.footer, "block"),
      e.footer && Ch(e.footer, a),
      en(a, e, "footer"));
  },
  f3 = (i, e) => {
    const a = It.innerParams.get(i),
      l = Ss();
    if (!l) return;
    if (a && e.icon === a.icon) {
      J0(l, e), $0(l, e);
      return;
    }
    if (!e.icon && !e.iconHtml) {
      ze(l);
      return;
    }
    if (e.icon && Object.keys(Fr).indexOf(e.icon) === -1) {
      Ma(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`
      ),
        ze(l);
      return;
    }
    ve(l),
      J0(l, e),
      $0(l, e),
      Nt(l, e.showClass && e.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", l2);
  },
  $0 = (i, e) => {
    for (const [a, l] of Object.entries(Fr)) e.icon !== a && _n(i, l);
    Nt(i, e.icon && Fr[e.icon]), g3(i, e), l2(), en(i, e, "icon");
  },
  l2 = () => {
    const i = Ut();
    if (!i) return;
    const e = window.getComputedStyle(i).getPropertyValue("background-color"),
      a = i.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let l = 0; l < a.length; l++) a[l].style.backgroundColor = e;
  },
  h3 = (i) => `
  ${i.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${i.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${i.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  d3 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  J0 = (i, e) => {
    if (!e.icon && !e.iconHtml) return;
    let a = i.innerHTML,
      l = "";
    e.iconHtml
      ? (l = tb(e.iconHtml))
      : e.icon === "success"
      ? ((l = h3(e)), (a = a.replace(/ style=".*?"/g, "")))
      : e.icon === "error"
      ? (l = d3)
      : e.icon && (l = tb({ question: "?", warning: "!", info: "i" }[e.icon])),
      a.trim() !== l.trim() && an(i, l);
  },
  g3 = (i, e) => {
    if (e.iconColor) {
      (i.style.color = e.iconColor), (i.style.borderColor = e.iconColor);
      for (const a of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        W0(i, a, "background-color", e.iconColor);
      W0(i, ".swal2-success-ring", "border-color", e.iconColor);
    }
  },
  tb = (i) => `<div class="${Q["icon-content"]}">${i}</div>`,
  p3 = (i, e) => {
    const a = t2();
    if (a) {
      if (!e.imageUrl) {
        ze(a);
        return;
      }
      ve(a, ""),
        a.setAttribute("src", e.imageUrl),
        a.setAttribute("alt", e.imageAlt || ""),
        xa(a, "width", e.imageWidth),
        xa(a, "height", e.imageHeight),
        (a.className = Q.image),
        en(a, e, "image");
    }
  };
let Mh = !1,
  o2 = 0,
  r2 = 0,
  u2 = 0,
  c2 = 0;
const m3 = (i) => {
    i.addEventListener("mousedown", Yr),
      document.body.addEventListener("mousemove", Vr),
      i.addEventListener("mouseup", Gr),
      i.addEventListener("touchstart", Yr),
      document.body.addEventListener("touchmove", Vr),
      i.addEventListener("touchend", Gr);
  },
  b3 = (i) => {
    i.removeEventListener("mousedown", Yr),
      document.body.removeEventListener("mousemove", Vr),
      i.removeEventListener("mouseup", Gr),
      i.removeEventListener("touchstart", Yr),
      document.body.removeEventListener("touchmove", Vr),
      i.removeEventListener("touchend", Gr);
  },
  Yr = (i) => {
    const e = Ut();
    if (!e) return;
    const a = Ss();
    if (i.target === e || (a && a.contains(i.target))) {
      Mh = !0;
      const l = f2(i);
      (o2 = l.clientX),
        (r2 = l.clientY),
        (u2 = parseInt(e.style.insetInlineStart) || 0),
        (c2 = parseInt(e.style.insetBlockStart) || 0),
        Nt(e, "swal2-dragging");
    }
  },
  Vr = (i) => {
    const e = Ut();
    if (e && Mh) {
      let { clientX: a, clientY: l } = f2(i);
      const r = a - o2;
      (e.style.insetInlineStart = `${u2 + (ht.isRTL ? -r : r)}px`),
        (e.style.insetBlockStart = `${c2 + (l - r2)}px`);
    }
  },
  Gr = () => {
    const i = Ut();
    (Mh = !1), _n(i, "swal2-dragging");
  },
  f2 = (i) => {
    let e = 0,
      a = 0;
    return (
      i.type.startsWith("mouse")
        ? ((e = i.clientX), (a = i.clientY))
        : i.type.startsWith("touch") &&
          ((e = i.touches[0].clientX), (a = i.touches[0].clientY)),
      { clientX: e, clientY: a }
    );
  },
  y3 = (i, e) => {
    const a = Re(),
      l = Ut();
    if (!(!a || !l)) {
      if (e.toast) {
        xa(a, "width", e.width), (l.style.width = "100%");
        const r = Es();
        r && l.insertBefore(r, Ss());
      } else xa(l, "width", e.width);
      xa(l, "padding", e.padding),
        e.color && (l.style.color = e.color),
        e.background && (l.style.background = e.background),
        ze(Jr()),
        v3(l, e),
        e.draggable && !e.toast
          ? (Nt(l, Q.draggable), m3(l))
          : (_n(l, Q.draggable), b3(l));
    }
  },
  v3 = (i, e) => {
    const a = e.showClass || {};
    (i.className = `${Q.popup} ${Xe(i) ? a.popup : ""}`),
      e.toast
        ? (Nt([document.documentElement, document.body], Q["toast-shown"]),
          Nt(i, Q.toast))
        : Nt(i, Q.modal),
      en(i, e, "popup"),
      typeof e.customClass == "string" && Nt(i, e.customClass),
      e.icon && Nt(i, Q[`icon-${e.icon}`]);
  },
  w3 = (i, e) => {
    const a = yh();
    if (!a) return;
    const { progressSteps: l, currentProgressStep: r } = e;
    if (!l || l.length === 0 || r === void 0) {
      ze(a);
      return;
    }
    ve(a),
      (a.textContent = ""),
      r >= l.length &&
        ke(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      l.forEach((u, c) => {
        const h = _3(u);
        if (
          (a.appendChild(h),
          c === r && Nt(h, Q["active-progress-step"]),
          c !== l.length - 1)
        ) {
          const p = x3(e);
          a.appendChild(p);
        }
      });
  },
  _3 = (i) => {
    const e = document.createElement("li");
    return Nt(e, Q["progress-step"]), an(e, i), e;
  },
  x3 = (i) => {
    const e = document.createElement("li");
    return (
      Nt(e, Q["progress-step-line"]),
      i.progressStepsDistance && xa(e, "width", i.progressStepsDistance),
      e
    );
  },
  S3 = (i, e) => {
    const a = Jb();
    a &&
      (xh(a),
      Kl(a, !!(e.title || e.titleText), "block"),
      e.title && Ch(e.title, a),
      e.titleText && (a.innerText = e.titleText),
      en(a, e, "title"));
  },
  h2 = (i, e) => {
    var a;
    y3(i, e),
      J5(i, e),
      w3(i, e),
      f3(i, e),
      p3(i, e),
      S3(i, e),
      $5(i, e),
      u3(i, e),
      P5(i, e),
      c3(i, e);
    const l = Ut();
    typeof e.didRender == "function" && l && e.didRender(l),
      (a = ht.eventEmitter) === null || a === void 0 || a.emit("didRender", l);
  },
  C3 = () => Xe(Ut()),
  d2 = () => {
    var i;
    return (i = Un()) === null || i === void 0 ? void 0 : i.click();
  },
  E3 = () => {
    var i;
    return (i = Ta()) === null || i === void 0 ? void 0 : i.click();
  },
  M3 = () => {
    var i;
    return (i = Cs()) === null || i === void 0 ? void 0 : i.click();
  },
  Ms = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  g2 = (i) => {
    if (i.keydownTarget && i.keydownHandlerAdded && i.keydownHandler) {
      const e = i.keydownHandler;
      i.keydownTarget.removeEventListener("keydown", e, {
        capture: i.keydownListenerCapture,
      }),
        (i.keydownHandlerAdded = !1);
    }
  },
  T3 = (i, e, a) => {
    if ((g2(i), !e.toast)) {
      const l = (u) => O3(e, u, a);
      i.keydownHandler = l;
      const r = e.keydownListenerCapture ? window : Ut();
      if (r) {
        (i.keydownTarget = r),
          (i.keydownListenerCapture = e.keydownListenerCapture);
        const u = l;
        i.keydownTarget.addEventListener("keydown", u, {
          capture: i.keydownListenerCapture,
        }),
          (i.keydownHandlerAdded = !0);
      }
    }
  },
  Xf = (i, e) => {
    var a;
    const l = wh();
    if (l.length) {
      (i = i + e),
        i === -2 && (i = l.length - 1),
        i === l.length ? (i = 0) : i === -1 && (i = l.length - 1),
        l[i].focus();
      return;
    }
    (a = Ut()) === null || a === void 0 || a.focus();
  },
  p2 = ["ArrowRight", "ArrowDown"],
  A3 = ["ArrowLeft", "ArrowUp"],
  O3 = (i, e, a) => {
    i &&
      (e.isComposing ||
        e.keyCode === 229 ||
        (i.stopKeydownPropagation && e.stopPropagation(),
        e.key === "Enter"
          ? z3(e, i)
          : e.key === "Tab"
          ? D3(e)
          : [...p2, ...A3].includes(e.key)
          ? k3(e.key)
          : e.key === "Escape" && R3(e, i, a)));
  },
  z3 = (i, e) => {
    if (!$r(e.allowEnterKey)) return;
    const a = Ut();
    if (!a || !e.input) return;
    const l = nu(a, e.input);
    if (
      i.target &&
      l &&
      i.target instanceof HTMLElement &&
      i.target.outerHTML === l.outerHTML
    ) {
      if (["textarea", "file"].includes(e.input)) return;
      d2(), i.preventDefault();
    }
  },
  D3 = (i) => {
    const e = i.target,
      a = wh();
    let l = -1;
    for (let r = 0; r < a.length; r++)
      if (e === a[r]) {
        l = r;
        break;
      }
    i.shiftKey ? Xf(l, -1) : Xf(l, 1), i.stopPropagation(), i.preventDefault();
  },
  k3 = (i) => {
    const e = Zl(),
      a = Un(),
      l = Ta(),
      r = Cs();
    if (!e || !a || !l || !r) return;
    const u = [a, l, r];
    if (
      document.activeElement instanceof HTMLElement &&
      !u.includes(document.activeElement)
    )
      return;
    const c = p2.includes(i) ? "nextElementSibling" : "previousElementSibling";
    let h = document.activeElement;
    if (h) {
      for (let p = 0; p < e.children.length; p++) {
        if (((h = h[c]), !h)) return;
        if (h instanceof HTMLButtonElement && Xe(h)) break;
      }
      h instanceof HTMLButtonElement && h.focus();
    }
  },
  R3 = (i, e, a) => {
    i.preventDefault(), $r(e.allowEscapeKey) && a(Ms.esc);
  };
var ys = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const B3 = () => {
    const i = Re();
    Array.from(document.body.children).forEach((a) => {
      a.contains(i) ||
        (a.hasAttribute("aria-hidden") &&
          a.setAttribute(
            "data-previous-aria-hidden",
            a.getAttribute("aria-hidden") || ""
          ),
        a.setAttribute("aria-hidden", "true"));
    });
  },
  m2 = () => {
    Array.from(document.body.children).forEach((e) => {
      e.hasAttribute("data-previous-aria-hidden")
        ? (e.setAttribute(
            "aria-hidden",
            e.getAttribute("data-previous-aria-hidden") || ""
          ),
          e.removeAttribute("data-previous-aria-hidden"))
        : e.removeAttribute("aria-hidden");
    });
  },
  b2 = typeof window < "u" && !!window.GestureEvent,
  L3 = () => {
    if (b2 && !ui(document.body, Q.iosfix)) {
      const i = document.body.scrollTop;
      (document.body.style.top = `${i * -1}px`),
        Nt(document.body, Q.iosfix),
        j3();
    }
  },
  j3 = () => {
    const i = Re();
    if (!i) return;
    let e;
    (i.ontouchstart = (a) => {
      e = H3(a);
    }),
      (i.ontouchmove = (a) => {
        e && (a.preventDefault(), a.stopPropagation());
      });
  },
  H3 = (i) => {
    const e = i.target,
      a = Re(),
      l = bh();
    return !a || !l || N3(i) || U3(i)
      ? !1
      : e === a ||
          (!Gf(a) &&
            e instanceof HTMLElement &&
            !H5(e, l) &&
            e.tagName !== "INPUT" &&
            e.tagName !== "TEXTAREA" &&
            !(Gf(l) && l.contains(e)));
  },
  N3 = (i) =>
    !!(i.touches && i.touches.length && i.touches[0].touchType === "stylus"),
  U3 = (i) => i.touches && i.touches.length > 1,
  F3 = () => {
    if (ui(document.body, Q.iosfix)) {
      const i = parseInt(document.body.style.top, 10);
      _n(document.body, Q.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = i * -1);
    }
  },
  q3 = () => {
    const i = document.createElement("div");
    (i.className = Q["scrollbar-measure"]), document.body.appendChild(i);
    const e = i.getBoundingClientRect().width - i.clientWidth;
    return document.body.removeChild(i), e;
  };
let gs = null;
const Y3 = (i) => {
    gs === null &&
      (document.body.scrollHeight > window.innerHeight || i === "scroll") &&
      ((gs = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${gs + q3()}px`));
  },
  V3 = () => {
    gs !== null &&
      ((document.body.style.paddingRight = `${gs}px`), (gs = null));
  };
function y2(i, e, a, l) {
  eu() ? eb(i, l) : (T5(a).then(() => eb(i, l)), g2(ht)),
    b2
      ? (e.setAttribute("style", "display:none !important"),
        e.removeAttribute("class"),
        (e.innerHTML = ""))
      : e.remove(),
    _h() && (V3(), F3(), m2()),
    G3();
}
function G3() {
  _n(
    [document.documentElement, document.body],
    [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]]
  );
}
function Vi(i) {
  i = Q3(i);
  const e = ys.swalPromiseResolve.get(this),
    a = X3(this);
  this.isAwaitingPromise ? i.isDismissed || (Il(this), e(i)) : a && e(i);
}
const X3 = (i) => {
  const e = Ut();
  if (!e) return !1;
  const a = It.innerParams.get(i);
  if (!a || ui(e, a.hideClass.popup)) return !1;
  _n(e, a.showClass.popup), Nt(e, a.hideClass.popup);
  const l = Re();
  return (
    _n(l, a.showClass.backdrop), Nt(l, a.hideClass.backdrop), Z3(i, e, a), !0
  );
};
function v2(i) {
  const e = ys.swalPromiseReject.get(this);
  Il(this), e && e(i);
}
const Il = (i) => {
    i.isAwaitingPromise &&
      (delete i.isAwaitingPromise, It.innerParams.get(i) || i._destroy());
  },
  Q3 = (i) =>
    typeof i > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, i),
  Z3 = (i, e, a) => {
    var l;
    const r = Re(),
      u = a2(e);
    typeof a.willClose == "function" && a.willClose(e),
      (l = ht.eventEmitter) === null || l === void 0 || l.emit("willClose", e),
      u && r
        ? K3(i, e, r, !!a.returnFocus, a.didClose)
        : r && y2(i, r, !!a.returnFocus, a.didClose);
  },
  K3 = (i, e, a, l, r) => {
    ht.swalCloseEventFinishedCallback = y2.bind(null, i, a, l, r);
    const u = function (c) {
      if (c.target === e) {
        var h;
        (h = ht.swalCloseEventFinishedCallback) === null ||
          h === void 0 ||
          h.call(ht),
          delete ht.swalCloseEventFinishedCallback,
          e.removeEventListener("animationend", u),
          e.removeEventListener("transitionend", u);
      }
    };
    e.addEventListener("animationend", u),
      e.addEventListener("transitionend", u);
  },
  eb = (i, e) => {
    setTimeout(() => {
      var a;
      typeof e == "function" && e.bind(i.params)(),
        (a = ht.eventEmitter) === null || a === void 0 || a.emit("didClose"),
        i._destroy && i._destroy();
    });
  },
  vs = (i) => {
    let e = Ut();
    if ((e || new wa(), (e = Ut()), !e)) return;
    const a = Es();
    eu() ? ze(Ss()) : P3(e, i),
      ve(a),
      e.setAttribute("data-loading", "true"),
      e.setAttribute("aria-busy", "true"),
      e.focus();
  },
  P3 = (i, e) => {
    const a = Zl(),
      l = Es();
    !a ||
      !l ||
      (!e && Xe(Un()) && (e = Un()),
      ve(a),
      e &&
        (ze(e),
        l.setAttribute("data-button-to-replace", e.className),
        a.insertBefore(l, e)),
      Nt([i, a], Q.loading));
  },
  I3 = (i, e) => {
    e.input === "select" || e.input === "radio"
      ? e4(i, e)
      : ["text", "email", "number", "tel", "textarea"].some(
          (a) => a === e.input
        ) &&
        (ph(e.inputValue) || mh(e.inputValue)) &&
        (vs(Un()), n4(i, e));
  },
  W3 = (i, e) => {
    const a = i.getInput();
    if (!a) return null;
    switch (e.input) {
      case "checkbox":
        return $3(a);
      case "radio":
        return J3(a);
      case "file":
        return t4(a);
      default:
        return e.inputAutoTrim ? a.value.trim() : a.value;
    }
  },
  $3 = (i) => (i.checked ? 1 : 0),
  J3 = (i) => (i.checked ? i.value : null),
  t4 = (i) =>
    i.files && i.files.length
      ? i.getAttribute("multiple") !== null
        ? i.files
        : i.files[0]
      : null,
  e4 = (i, e) => {
    const a = Ut();
    if (!a) return;
    const l = (r) => {
      e.input === "select"
        ? i4(a, Xr(r), e)
        : e.input === "radio" && a4(a, Xr(r), e);
    };
    ph(e.inputOptions) || mh(e.inputOptions)
      ? (vs(Un()),
        Xl(e.inputOptions).then((r) => {
          i.hideLoading(), l(r);
        }))
      : typeof e.inputOptions == "object"
      ? l(e.inputOptions)
      : Ma(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`
        );
  },
  n4 = (i, e) => {
    const a = i.getInput();
    a &&
      (ze(a),
      Xl(e.inputValue)
        .then((l) => {
          (a.value = e.input === "number" ? `${parseFloat(l) || 0}` : `${l}`),
            ve(a),
            a.focus(),
            i.hideLoading();
        })
        .catch((l) => {
          Ma(`Error in inputValue promise: ${l}`),
            (a.value = ""),
            ve(a),
            a.focus(),
            i.hideLoading();
        }));
  };
function i4(i, e, a) {
  const l = Yi(i, Q.select);
  if (!l) return;
  const r = (u, c, h) => {
    const p = document.createElement("option");
    (p.value = h),
      an(p, c),
      (p.selected = w2(h, a.inputValue)),
      u.appendChild(p);
  };
  e.forEach((u) => {
    const c = u[0],
      h = u[1];
    if (Array.isArray(h)) {
      const p = document.createElement("optgroup");
      (p.label = c),
        (p.disabled = !1),
        l.appendChild(p),
        h.forEach((d) => r(p, d[1], d[0]));
    } else r(l, h, c);
  }),
    l.focus();
}
function a4(i, e, a) {
  const l = Yi(i, Q.radio);
  if (!l) return;
  e.forEach((u) => {
    const c = u[0],
      h = u[1],
      p = document.createElement("input"),
      d = document.createElement("label");
    (p.type = "radio"),
      (p.name = Q.radio),
      (p.value = c),
      w2(c, a.inputValue) && (p.checked = !0);
    const m = document.createElement("span");
    an(m, h),
      (m.className = Q.label),
      d.appendChild(p),
      d.appendChild(m),
      l.appendChild(d);
  });
  const r = l.querySelectorAll("input");
  r.length && r[0].focus();
}
const Xr = (i) => {
    const e = [];
    return (
      i instanceof Map
        ? i.forEach((a, l) => {
            let r = a;
            typeof r == "object" && (r = Xr(r)), e.push([l, r]);
          })
        : Object.keys(i).forEach((a) => {
            let l = i[a];
            typeof l == "object" && (l = Xr(l)), e.push([a, l]);
          }),
      e
    );
  },
  w2 = (i, e) =>
    !!e && e !== null && e !== void 0 && e.toString() === i.toString(),
  s4 = (i) => {
    const e = It.innerParams.get(i);
    i.disableButtons(), e.input ? _2(i, "confirm") : Ah(i, !0);
  },
  l4 = (i) => {
    const e = It.innerParams.get(i);
    i.disableButtons(), e.returnInputValueOnDeny ? _2(i, "deny") : Th(i, !1);
  },
  o4 = (i, e) => {
    i.disableButtons(), e(Ms.cancel);
  },
  _2 = (i, e) => {
    const a = It.innerParams.get(i);
    if (!a.input) {
      Ma(
        `The "input" parameter is needed to be set when using returnInputValueOn${gh(
          e
        )}`
      );
      return;
    }
    const l = i.getInput(),
      r = W3(i, a);
    a.inputValidator
      ? r4(i, r, e)
      : l && !l.checkValidity()
      ? (i.enableButtons(),
        i.showValidationMessage(a.validationMessage || l.validationMessage))
      : e === "deny"
      ? Th(i, r)
      : Ah(i, r);
  },
  r4 = (i, e, a) => {
    const l = It.innerParams.get(i);
    i.disableInput(),
      Promise.resolve()
        .then(() => Xl(l.inputValidator(e, l.validationMessage)))
        .then((u) => {
          i.enableButtons(),
            i.enableInput(),
            u ? i.showValidationMessage(u) : a === "deny" ? Th(i, e) : Ah(i, e);
        });
  },
  Th = (i, e) => {
    const a = It.innerParams.get(i);
    a.showLoaderOnDeny && vs(Ta()),
      a.preDeny
        ? ((i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preDeny(e, a.validationMessage)))
            .then((r) => {
              r === !1
                ? (i.hideLoading(), Il(i))
                : i.close({ isDenied: !0, value: typeof r > "u" ? e : r });
            })
            .catch((r) => x2(i, r)))
        : i.close({ isDenied: !0, value: e });
  },
  nb = (i, e) => {
    i.close({ isConfirmed: !0, value: e });
  },
  x2 = (i, e) => {
    i.rejectPromise(e);
  },
  Ah = (i, e) => {
    const a = It.innerParams.get(i);
    a.showLoaderOnConfirm && vs(),
      a.preConfirm
        ? (i.resetValidationMessage(),
          (i.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Xl(a.preConfirm(e, a.validationMessage)))
            .then((r) => {
              Xe(Jr()) || r === !1
                ? (i.hideLoading(), Il(i))
                : nb(i, typeof r > "u" ? e : r);
            })
            .catch((r) => x2(i, r)))
        : nb(i, e);
  };
function Qr() {
  const i = It.innerParams.get(this);
  if (!i) return;
  const e = It.domCache.get(this);
  ze(e.loader),
    eu() ? i.icon && ve(Ss()) : u4(e),
    _n([e.popup, e.actions], Q.loading),
    e.popup.removeAttribute("aria-busy"),
    e.popup.removeAttribute("data-loading"),
    (e.confirmButton.disabled = !1),
    (e.denyButton.disabled = !1),
    (e.cancelButton.disabled = !1);
}
const u4 = (i) => {
  const e = i.loader.getAttribute("data-button-to-replace"),
    a = e ? i.popup.getElementsByClassName(e) : [];
  a.length ? ve(a[0], "inline-block") : j5() && ze(i.actions);
};
function S2() {
  const i = It.innerParams.get(this),
    e = It.domCache.get(this);
  return e ? nu(e.popup, i.input) : null;
}
function C2(i, e, a) {
  const l = It.domCache.get(i);
  e.forEach((r) => {
    l[r].disabled = a;
  });
}
function E2(i, e) {
  const a = Ut();
  if (!(!a || !i))
    if (i.type === "radio") {
      const l = a.querySelectorAll(`[name="${Q.radio}"]`);
      for (let r = 0; r < l.length; r++) l[r].disabled = e;
    } else i.disabled = e;
}
function M2() {
  C2(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function T2() {
  C2(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function A2() {
  E2(this.getInput(), !1);
}
function O2() {
  E2(this.getInput(), !0);
}
function z2(i) {
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  an(e.validationMessage, i),
    (e.validationMessage.className = Q["validation-message"]),
    a.customClass &&
      a.customClass.validationMessage &&
      Nt(e.validationMessage, a.customClass.validationMessage),
    ve(e.validationMessage);
  const l = this.getInput();
  l &&
    (l.setAttribute("aria-invalid", "true"),
    l.setAttribute("aria-describedby", Q["validation-message"]),
    n2(l),
    Nt(l, Q.inputerror));
}
function D2() {
  const i = It.domCache.get(this);
  i.validationMessage && ze(i.validationMessage);
  const e = this.getInput();
  e &&
    (e.removeAttribute("aria-invalid"),
    e.removeAttribute("aria-describedby"),
    _n(e, Q.inputerror));
}
const Gi = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  c4 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  f4 = { allowEnterKey: void 0 },
  h4 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  k2 = (i) => Object.prototype.hasOwnProperty.call(Gi, i),
  R2 = (i) => c4.indexOf(i) !== -1,
  B2 = (i) => f4[i],
  d4 = (i) => {
    k2(i) || ke(`Unknown parameter "${i}"`);
  },
  g4 = (i) => {
    h4.includes(i) && ke(`The parameter "${i}" is incompatible with toasts`);
  },
  p4 = (i) => {
    const e = B2(i);
    e && $b(i, e);
  },
  L2 = (i) => {
    i.backdrop === !1 &&
      i.allowOutsideClick &&
      ke(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      ),
      i.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "bootstrap-4",
          "bootstrap-4-light",
          "bootstrap-4-dark",
          "bootstrap-5",
          "bootstrap-5-light",
          "bootstrap-5-dark",
          "material-ui",
          "material-ui-light",
          "material-ui-dark",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(i.theme) &&
        ke(`Invalid theme "${i.theme}"`);
    for (const e in i) d4(e), i.toast && g4(e), p4(e);
  };
function j2(i) {
  const e = Re(),
    a = Ut(),
    l = It.innerParams.get(this);
  if (!a || ui(a, l.hideClass.popup)) {
    ke(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const r = m4(i),
    u = Object.assign({}, l, r);
  L2(u),
    e && (e.dataset.swal2Theme = u.theme),
    h2(this, u),
    It.innerParams.set(this, u),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, i),
        writable: !1,
        enumerable: !0,
      },
    });
}
const m4 = (i) => {
  const e = {};
  return (
    Object.keys(i).forEach((a) => {
      if (R2(a)) {
        const l = i;
        e[a] = l[a];
      } else ke(`Invalid parameter to update: ${a}`);
    }),
    e
  );
};
function H2() {
  var i;
  const e = It.domCache.get(this),
    a = It.innerParams.get(this);
  if (!a) {
    N2(this);
    return;
  }
  e.popup &&
    ht.swalCloseEventFinishedCallback &&
    (ht.swalCloseEventFinishedCallback(),
    delete ht.swalCloseEventFinishedCallback),
    typeof a.didDestroy == "function" && a.didDestroy(),
    (i = ht.eventEmitter) === null || i === void 0 || i.emit("didDestroy"),
    b4(this);
}
const b4 = (i) => {
    N2(i),
      delete i.params,
      delete ht.keydownHandler,
      delete ht.keydownTarget,
      delete ht.currentInstance;
  },
  N2 = (i) => {
    i.isAwaitingPromise
      ? (Lf(It, i), (i.isAwaitingPromise = !0))
      : (Lf(ys, i),
        Lf(It, i),
        delete i.isAwaitingPromise,
        delete i.disableButtons,
        delete i.enableButtons,
        delete i.getInput,
        delete i.disableInput,
        delete i.enableInput,
        delete i.hideLoading,
        delete i.disableLoading,
        delete i.showValidationMessage,
        delete i.resetValidationMessage,
        delete i.close,
        delete i.closePopup,
        delete i.closeModal,
        delete i.closeToast,
        delete i.rejectPromise,
        delete i.update,
        delete i._destroy);
  },
  Lf = (i, e) => {
    for (const a in i) i[a].delete(e);
  };
var y4 = Object.freeze({
  __proto__: null,
  _destroy: H2,
  close: Vi,
  closeModal: Vi,
  closePopup: Vi,
  closeToast: Vi,
  disableButtons: T2,
  disableInput: O2,
  disableLoading: Qr,
  enableButtons: M2,
  enableInput: A2,
  getInput: S2,
  handleAwaitingPromise: Il,
  hideLoading: Qr,
  rejectPromise: v2,
  resetValidationMessage: D2,
  showValidationMessage: z2,
  update: j2,
});
const v4 = (i, e, a) => {
    i.toast ? w4(i, e, a) : (x4(e), S4(e), C4(i, e, a));
  },
  w4 = (i, e, a) => {
    e.popup.onclick = () => {
      (i && (_4(i) || i.timer || i.input)) || a(Ms.close);
    };
  },
  _4 = (i) =>
    !!(
      i.showConfirmButton ||
      i.showDenyButton ||
      i.showCancelButton ||
      i.showCloseButton
    );
let Zr = !1;
const x4 = (i) => {
    i.popup.onmousedown = () => {
      i.container.onmouseup = function (e) {
        (i.container.onmouseup = () => {}),
          e.target === i.container && (Zr = !0);
      };
    };
  },
  S4 = (i) => {
    i.container.onmousedown = (e) => {
      e.target === i.container && e.preventDefault(),
        (i.popup.onmouseup = function (a) {
          (i.popup.onmouseup = () => {}),
            (a.target === i.popup ||
              (a.target instanceof HTMLElement &&
                i.popup.contains(a.target))) &&
              (Zr = !0);
        });
    };
  },
  C4 = (i, e, a) => {
    e.container.onclick = (l) => {
      if (Zr) {
        Zr = !1;
        return;
      }
      l.target === e.container && $r(i.allowOutsideClick) && a(Ms.backdrop);
    };
  },
  E4 = (i) => typeof i == "object" && i.jquery,
  ib = (i) => i instanceof Element || E4(i),
  M4 = (i) => {
    const e = {};
    return (
      typeof i[0] == "object" && !ib(i[0])
        ? Object.assign(e, i[0])
        : ["title", "html", "icon"].forEach((a, l) => {
            const r = i[l];
            typeof r == "string" || ib(r)
              ? (e[a] = r)
              : r !== void 0 &&
                Ma(
                  `Unexpected type of ${a}! Expected "string" or "Element", got ${typeof r}`
                );
          }),
      e
    );
  };
function T4(...i) {
  return new this(...i);
}
function A4(i) {
  class e extends this {
    _main(l, r) {
      return super._main(l, Object.assign({}, i, r));
    }
  }
  return e;
}
const O4 = () => ht.timeout && ht.timeout.getTimerLeft(),
  U2 = () => {
    if (ht.timeout) return N5(), ht.timeout.stop();
  },
  F2 = () => {
    if (ht.timeout) {
      const i = ht.timeout.start();
      return Sh(i), i;
    }
  },
  z4 = () => {
    const i = ht.timeout;
    return i && (i.running ? U2() : F2());
  },
  D4 = (i) => {
    if (ht.timeout) {
      const e = ht.timeout.increase(i);
      return Sh(e, !0), e;
    }
  },
  k4 = () => !!(ht.timeout && ht.timeout.isRunning());
let ab = !1;
const Qf = {};
function R4(i = "data-swal-template") {
  (Qf[i] = this),
    ab || (document.body.addEventListener("click", B4), (ab = !0));
}
const B4 = (i) => {
  for (let e = i.target; e && e !== document; e = e.parentNode)
    for (const a in Qf) {
      const l = e.getAttribute && e.getAttribute(a);
      if (l) {
        Qf[a].fire({ template: l });
        return;
      }
    }
};
class L4 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(e) {
    return typeof this.events[e] > "u" && (this.events[e] = []), this.events[e];
  }
  on(e, a) {
    const l = this._getHandlersByEventName(e);
    l.includes(a) || l.push(a);
  }
  once(e, a) {
    const l = (...r) => {
      this.removeListener(e, l), a.apply(this, r);
    };
    this.on(e, l);
  }
  emit(e, ...a) {
    this._getHandlersByEventName(e).forEach((l) => {
      try {
        l.apply(this, a);
      } catch (r) {
        console.error(r);
      }
    });
  }
  removeListener(e, a) {
    const l = this._getHandlersByEventName(e),
      r = l.indexOf(a);
    r > -1 && l.splice(r, 1);
  }
  removeAllListeners(e) {
    this.events[e] !== void 0 && (this.events[e].length = 0);
  }
  reset() {
    this.events = {};
  }
}
ht.eventEmitter = new L4();
const j4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.on(i, e);
  },
  H4 = (i, e) => {
    ht.eventEmitter && ht.eventEmitter.once(i, e);
  },
  N4 = (i, e) => {
    if (ht.eventEmitter) {
      if (!i) {
        ht.eventEmitter.reset();
        return;
      }
      e
        ? ht.eventEmitter.removeListener(i, e)
        : ht.eventEmitter.removeAllListeners(i);
    }
  };
var U4 = Object.freeze({
  __proto__: null,
  argsToParams: M4,
  bindClickHandler: R4,
  clickCancel: M3,
  clickConfirm: d2,
  clickDeny: E3,
  enableLoading: vs,
  fire: T4,
  getActions: Zl,
  getCancelButton: Cs,
  getCloseButton: vh,
  getConfirmButton: Un,
  getContainer: Re,
  getDenyButton: Ta,
  getFocusableElements: wh,
  getFooter: e2,
  getHtmlContainer: bh,
  getIcon: Ss,
  getIconContent: D5,
  getImage: t2,
  getInputLabel: k5,
  getLoader: Es,
  getPopup: Ut,
  getProgressSteps: yh,
  getTimerLeft: O4,
  getTimerProgressBar: tu,
  getTitle: Jb,
  getValidationMessage: Jr,
  increaseTimer: D4,
  isDeprecatedParameter: B2,
  isLoading: B5,
  isTimerRunning: k4,
  isUpdatableParameter: R2,
  isValidParameter: k2,
  isVisible: C3,
  mixin: A4,
  off: N4,
  on: j4,
  once: H4,
  resumeTimer: F2,
  showLoading: vs,
  stopTimer: U2,
  toggleTimer: z4,
});
class F4 {
  constructor(e, a) {
    (this.callback = e),
      (this.remaining = a),
      (this.running = !1),
      this.start();
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(e) {
    const a = this.running;
    return (
      a && this.stop(), (this.remaining += e), a && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const q2 = ["swal-title", "swal-html", "swal-footer"],
  q4 = (i) => {
    const e =
      typeof i.template == "string"
        ? document.querySelector(i.template)
        : i.template;
    if (!e) return {};
    const a = e.content;
    return (
      P4(a), Object.assign(Y4(a), V4(a), G4(a), X4(a), Q4(a), Z4(a), K4(a, q2))
    );
  },
  Y4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-param")).forEach((l) => {
        Ca(l, ["name", "value"]);
        const r = l.getAttribute("name"),
          u = l.getAttribute("value");
        !r ||
          !u ||
          (r in Gi && typeof Gi[r] == "boolean"
            ? (e[r] = u !== "false")
            : r in Gi && typeof Gi[r] == "object"
            ? (e[r] = JSON.parse(u))
            : (e[r] = u));
      }),
      e
    );
  },
  V4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-function-param")).forEach((l) => {
        const r = l.getAttribute("name"),
          u = l.getAttribute("value");
        !r || !u || (e[r] = new Function(`return ${u}`)());
      }),
      e
    );
  },
  G4 = (i) => {
    const e = {};
    return (
      Array.from(i.querySelectorAll("swal-button")).forEach((l) => {
        Ca(l, ["type", "color", "aria-label"]);
        const r = l.getAttribute("type");
        if (!(!r || !["confirm", "cancel", "deny"].includes(r))) {
          if (
            ((e[`${r}ButtonText`] = l.innerHTML),
            (e[`show${gh(r)}Button`] = !0),
            l.hasAttribute("color"))
          ) {
            const u = l.getAttribute("color");
            u !== null && (e[`${r}ButtonColor`] = u);
          }
          if (l.hasAttribute("aria-label")) {
            const u = l.getAttribute("aria-label");
            u !== null && (e[`${r}ButtonAriaLabel`] = u);
          }
        }
      }),
      e
    );
  },
  X4 = (i) => {
    const e = {},
      a = i.querySelector("swal-image");
    return (
      a &&
        (Ca(a, ["src", "width", "height", "alt"]),
        a.hasAttribute("src") && (e.imageUrl = a.getAttribute("src") || void 0),
        a.hasAttribute("width") &&
          (e.imageWidth = a.getAttribute("width") || void 0),
        a.hasAttribute("height") &&
          (e.imageHeight = a.getAttribute("height") || void 0),
        a.hasAttribute("alt") &&
          (e.imageAlt = a.getAttribute("alt") || void 0)),
      e
    );
  },
  Q4 = (i) => {
    const e = {},
      a = i.querySelector("swal-icon");
    return (
      a &&
        (Ca(a, ["type", "color"]),
        a.hasAttribute("type") && (e.icon = a.getAttribute("type")),
        a.hasAttribute("color") && (e.iconColor = a.getAttribute("color")),
        (e.iconHtml = a.innerHTML)),
      e
    );
  },
  Z4 = (i) => {
    const e = {},
      a = i.querySelector("swal-input");
    a &&
      (Ca(a, ["type", "label", "placeholder", "value"]),
      (e.input = a.getAttribute("type") || "text"),
      a.hasAttribute("label") && (e.inputLabel = a.getAttribute("label")),
      a.hasAttribute("placeholder") &&
        (e.inputPlaceholder = a.getAttribute("placeholder")),
      a.hasAttribute("value") && (e.inputValue = a.getAttribute("value")));
    const l = Array.from(i.querySelectorAll("swal-input-option"));
    return (
      l.length &&
        ((e.inputOptions = {}),
        l.forEach((r) => {
          Ca(r, ["value"]);
          const u = r.getAttribute("value");
          if (!u) return;
          const c = r.innerHTML;
          e.inputOptions[u] = c;
        })),
      e
    );
  },
  K4 = (i, e) => {
    const a = {};
    for (const l in e) {
      const r = e[l],
        u = i.querySelector(r);
      u && (Ca(u, []), (a[r.replace(/^swal-/, "")] = u.innerHTML.trim()));
    }
    return a;
  },
  P4 = (i) => {
    const e = q2.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(i.children).forEach((a) => {
      const l = a.tagName.toLowerCase();
      e.includes(l) || ke(`Unrecognized element <${l}>`);
    });
  },
  Ca = (i, e) => {
    Array.from(i.attributes).forEach((a) => {
      e.indexOf(a.name) === -1 &&
        ke([
          `Unrecognized attribute "${a.name}" on <${i.tagName.toLowerCase()}>.`,
          `${
            e.length
              ? `Allowed attributes are: ${e.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  Y2 = 10,
  I4 = (i) => {
    var e, a;
    const l = Re(),
      r = Ut();
    if (!l || !r) return;
    typeof i.willOpen == "function" && i.willOpen(r),
      (e = ht.eventEmitter) === null || e === void 0 || e.emit("willOpen", r);
    const c = window.getComputedStyle(document.body).overflowY;
    if (
      (J4(l, r, i),
      setTimeout(() => {
        W4(l, r);
      }, Y2),
      _h() &&
        ($4(l, i.scrollbarPadding !== void 0 ? i.scrollbarPadding : !1, c),
        B3()),
      !eu() &&
        !ht.previousActiveElement &&
        (ht.previousActiveElement = document.activeElement),
      typeof i.didOpen == "function")
    ) {
      const h = i.didOpen;
      setTimeout(() => h(r));
    }
    (a = ht.eventEmitter) === null || a === void 0 || a.emit("didOpen", r);
  },
  Kr = (i) => {
    const e = Ut();
    if (!e || i.target !== e) return;
    const a = Re();
    a &&
      (e.removeEventListener("animationend", Kr),
      e.removeEventListener("transitionend", Kr),
      (a.style.overflowY = "auto"),
      _n(a, Q["no-transition"]));
  },
  W4 = (i, e) => {
    a2(e)
      ? ((i.style.overflowY = "hidden"),
        e.addEventListener("animationend", Kr),
        e.addEventListener("transitionend", Kr))
      : (i.style.overflowY = "auto");
  },
  $4 = (i, e, a) => {
    L3(),
      e && a !== "hidden" && Y3(a),
      setTimeout(() => {
        i.scrollTop = 0;
      });
  },
  J4 = (i, e, a) => {
    var l;
    (l = a.showClass) !== null &&
      l !== void 0 &&
      l.backdrop &&
      Nt(i, a.showClass.backdrop),
      a.animation
        ? (e.style.setProperty("opacity", "0", "important"),
          ve(e, "grid"),
          setTimeout(() => {
            var r;
            (r = a.showClass) !== null &&
              r !== void 0 &&
              r.popup &&
              Nt(e, a.showClass.popup),
              e.style.removeProperty("opacity");
          }, Y2))
        : ve(e, "grid"),
      Nt([document.documentElement, document.body], Q.shown),
      a.heightAuto &&
        a.backdrop &&
        !a.toast &&
        Nt([document.documentElement, document.body], Q["height-auto"]);
  };
var sb = {
  email: (i, e) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(i)
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid email address"),
  url: (i, e) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      i
    )
      ? Promise.resolve()
      : Promise.resolve(e || "Invalid URL"),
};
function tC(i) {
  i.inputValidator ||
    (i.input === "email" && (i.inputValidator = sb.email),
    i.input === "url" && (i.inputValidator = sb.url));
}
function eC(i) {
  (!i.target ||
    (typeof i.target == "string" && !document.querySelector(i.target)) ||
    (typeof i.target != "string" && !i.target.appendChild)) &&
    (ke('Target parameter is not valid, defaulting to "body"'),
    (i.target = "body"));
}
function nC(i) {
  tC(i),
    i.showLoaderOnConfirm &&
      !i.preConfirm &&
      ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    eC(i),
    typeof i.title == "string" &&
      (i.title = i.title
        .split(
          `
`
        )
        .join("<br />")),
    Q5(i);
}
let Hn;
var Ar = new WeakMap();
class ce {
  constructor(...e) {
    if (
      (S5(
        this,
        Ar,
        Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 })
      ),
      typeof window > "u")
    )
      return;
    Hn = this;
    const a = Object.freeze(this.constructor.argsToParams(e));
    (this.params = a),
      (this.isAwaitingPromise = !1),
      C5(Ar, this, this._main(Hn.params));
  }
  _main(e, a = {}) {
    if ((L2(Object.assign({}, a, e)), ht.currentInstance)) {
      const u = ys.swalPromiseResolve.get(ht.currentInstance),
        { isAwaitingPromise: c } = ht.currentInstance;
      ht.currentInstance._destroy(), c || u({ isDismissed: !0 }), _h() && m2();
    }
    ht.currentInstance = Hn;
    const l = aC(e, a);
    nC(l),
      Object.freeze(l),
      ht.timeout && (ht.timeout.stop(), delete ht.timeout),
      clearTimeout(ht.restoreFocusTimeout);
    const r = sC(Hn);
    return h2(Hn, l), It.innerParams.set(Hn, l), iC(Hn, r, l);
  }
  then(e) {
    return P0(Ar, this).then(e);
  }
  finally(e) {
    return P0(Ar, this).finally(e);
  }
}
const iC = (i, e, a) =>
    new Promise((l, r) => {
      const u = (c) => {
        i.close({ isDismissed: !0, dismiss: c, isConfirmed: !1, isDenied: !1 });
      };
      ys.swalPromiseResolve.set(i, l),
        ys.swalPromiseReject.set(i, r),
        (e.confirmButton.onclick = () => {
          s4(i);
        }),
        (e.denyButton.onclick = () => {
          l4(i);
        }),
        (e.cancelButton.onclick = () => {
          o4(i, u);
        }),
        (e.closeButton.onclick = () => {
          u(Ms.close);
        }),
        v4(a, e, u),
        T3(ht, a, u),
        I3(i, a),
        I4(a),
        lC(ht, a, u),
        oC(e, a),
        setTimeout(() => {
          e.container.scrollTop = 0;
        });
    }),
  aC = (i, e) => {
    const a = q4(i),
      l = Object.assign({}, Gi, e, a, i);
    return (
      (l.showClass = Object.assign({}, Gi.showClass, l.showClass)),
      (l.hideClass = Object.assign({}, Gi.hideClass, l.hideClass)),
      l.animation === !1 &&
        ((l.showClass = { backdrop: "swal2-noanimation" }), (l.hideClass = {})),
      l
    );
  },
  sC = (i) => {
    const e = {
      popup: Ut(),
      container: Re(),
      actions: Zl(),
      confirmButton: Un(),
      denyButton: Ta(),
      cancelButton: Cs(),
      loader: Es(),
      closeButton: vh(),
      validationMessage: Jr(),
      progressSteps: yh(),
    };
    return It.domCache.set(i, e), e;
  },
  lC = (i, e, a) => {
    const l = tu();
    ze(l),
      e.timer &&
        ((i.timeout = new F4(() => {
          a("timer"), delete i.timeout;
        }, e.timer)),
        e.timerProgressBar &&
          l &&
          (ve(l),
          en(l, e, "timerProgressBar"),
          setTimeout(() => {
            i.timeout && i.timeout.running && Sh(e.timer);
          })));
  },
  oC = (i, e) => {
    if (!e.toast) {
      if (!$r(e.allowEnterKey)) {
        $b("allowEnterKey"), cC();
        return;
      }
      rC(i) || uC(i, e) || Xf(-1, 1);
    }
  },
  rC = (i) => {
    const e = Array.from(i.popup.querySelectorAll("[autofocus]"));
    for (const a of e)
      if (a instanceof HTMLElement && Xe(a)) return a.focus(), !0;
    return !1;
  },
  uC = (i, e) =>
    e.focusDeny && Xe(i.denyButton)
      ? (i.denyButton.focus(), !0)
      : e.focusCancel && Xe(i.cancelButton)
      ? (i.cancelButton.focus(), !0)
      : e.focusConfirm && Xe(i.confirmButton)
      ? (i.confirmButton.focus(), !0)
      : !1,
  cC = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
ce.prototype.disableButtons = T2;
ce.prototype.enableButtons = M2;
ce.prototype.getInput = S2;
ce.prototype.disableInput = O2;
ce.prototype.enableInput = A2;
ce.prototype.hideLoading = Qr;
ce.prototype.disableLoading = Qr;
ce.prototype.showValidationMessage = z2;
ce.prototype.resetValidationMessage = D2;
ce.prototype.close = Vi;
ce.prototype.closePopup = Vi;
ce.prototype.closeModal = Vi;
ce.prototype.closeToast = Vi;
ce.prototype.rejectPromise = v2;
ce.prototype.update = j2;
ce.prototype._destroy = H2;
Object.assign(ce, U4);
Object.keys(y4).forEach((i) => {
  ce[i] = function (...e) {
    if (Hn && Hn[i]) return Hn[i](...e);
  };
});
ce.DismissReason = Ms;
ce.version = "11.26.17";
const wa = ce;
wa.default = wa;
typeof document < "u" &&
  (function (i, e) {
    var a = i.createElement("style");
    if ((i.getElementsByTagName("head")[0].appendChild(a), a.styleSheet))
      a.styleSheet.disabled || (a.styleSheet.cssText = e);
    else
      try {
        a.innerHTML = e;
      } catch {
        a.innerText = e;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
  );
const fC = () => {
    const {
        time: i,
        setTime: e,
        userFs: a,
        setUserFs: l,
        setGenerateECG: r,
        setApplyNoiseTrigger: u,
        config: c,
        setConfig: h,
        setFilteredECG: p,
        noise: d,
        setNoise: m,
        csvFilePath: b,
        prevPathRef: _,
        setCsvFilePath: x,
        generateECG: w,
        setApplypsdTrigger: M,
        setFilteredSamples: O,
      } = ft.useContext(Fn),
      [E, tt] = ft.useState("IIR"),
      [I, $] = ft.useState("windowSync"),
      [j, J] = ft.useState("lowpass"),
      [T, S] = ft.useState(0.5),
      [v, N] = ft.useState(40),
      [k, R] = ft.useState(5),
      [W, lt] = ft.useState(100),
      [at, H] = ft.useState(!1),
      G = () => {
        if (!w) {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate ECG signal first!",
          });
          return;
        }
        M(!0);
      },
      nt = () => {
        if (!w) {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate ECG signal first!",
          });
          return;
        }
        const B = {
          ...c,
          characteristic: E,
          filterType: j,
          windowMode: I,
          Att: Number(W),
          preGain: at,
          order: Number(k),
          Fs: Number(a),
          Fc: Number(it()),
          F1: Number(T),
          F2: Number(v),
          Fa: Number(ut()),
          Fb: Number(A()),
        };
        h(B), p(!0);
      },
      it = () => {
        if (
          (E === "IIR" && j === "highpass") ||
          (E === "FIR" && I === "windowSync" && j === "highpass")
        )
          return Number(T);
        if (
          (E === "IIR" && j === "lowpass") ||
          (E === "FIR" && I === "windowSync" && j === "lowpass")
        )
          return Number(v);
        if (
          (E === "IIR" && j === "bandpass") ||
          (E === "IIR" && j === "bandstop")
        ) {
          const B = Number(T),
            et = Number(v);
          return (B + et) / 2;
        }
      },
      ut = () => {
        if (I === "KaiserBessel") {
          if (j === "lowpass") return 0;
          if (j === "highpass") return T;
          if (j === "bandpass") return T;
        }
      },
      A = () => {
        if (I === "KaiserBessel") {
          if (j === "lowpass") return v;
          if (j === "highpass") return Number(a) / 2;
          if (j === "bandpass") return v;
        }
      },
      F = () => {
        if (w)
          if (!d.baseline && !d.powerline && !d.emg) {
            wa.fire({
              icon: "info",
              title: "Oops...",
              text: "Please select at least one noise type!",
            });
            return;
          } else u(!0);
        else {
          wa.fire({
            icon: "info",
            title: "Oops...",
            text: "Please generate ECG signal first!",
          });
          return;
        }
      };
    return (
      ft.useEffect(() => {
        nt();
      }, [v, T, E, j, I, k, W, at]),
      ft.useEffect(() => {
        _.current !== b && (u(!1), p(!1), M(!1), O([]), (_.current = b));
      }, [b, _, u, p, M, O]),
      U.jsx("div", {
        className: Mn.rightPanelContainer,
        children: U.jsxs("div", {
          className: Mn.right,
          children: [
            U.jsx("h2", { children: "ECG Signal & Filter Controls" }),
            U.jsxs("div", {
              className: Mn.box,
              children: [
                U.jsx("h3", { children: "Signal Setup" }),
                U.jsx("label", { children: "Select ECG Dataset" }),
                U.jsxs("select", {
                  value: b,
                  onChange: (B) => x(B.target.value),
                  children: [
                    U.jsx("option", {
                      value: "/ecg200.csv",
                      children: "ECG Dataset 1",
                    }),
                    U.jsx("option", {
                      value: "/ecg300.csv",
                      children: "ECG Dataset 2",
                    }),
                    U.jsx("option", {
                      value: "/ecg100.csv",
                      children: "ECG Dataset 3",
                    }),
                  ],
                }),
                U.jsx("label", { children: "Duration (seconds) " }),
                U.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "50",
                  value: i,
                  onChange: (B) => e(Number(B.target.value)),
                }),
                U.jsxs("p", {
                  className: Mn.rangeValue,
                  children: [
                    "Value: ",
                    U.jsxs("span", { id: "demo", children: [i, " seconds"] }),
                  ],
                }),
                U.jsx("label", { children: "Sampling Rate (Hz) " }),
                U.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "1000",
                  value: a,
                  onChange: (B) => l(Number(B.target.value)),
                }),
                U.jsxs("p", {
                  className: Mn.rangeValue,
                  children: [
                    "Value: ",
                    U.jsxs("span", { id: "demo", children: [a, " Hz"] }),
                  ],
                }),
                U.jsx("button", {
                  onClick: () => r(!0),
                  children: "Generate ECG Signal",
                }),
              ],
            }),
            U.jsxs("div", {
              className: Mn.box,
              children: [
                U.jsx("h3", { children: "Add Noise" }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: d.baseline,
                      onChange: (B) => m({ ...d, baseline: B.target.checked }),
                    }),
                    "Baseline Wander",
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: d.powerline,
                      onChange: (B) => m({ ...d, powerline: B.target.checked }),
                    }),
                    "Powerline (50 Hz)",
                  ],
                }),
                U.jsxs("label", {
                  children: [
                    U.jsx("input", {
                      type: "checkbox",
                      checked: d.emg,
                      onChange: (B) => m({ ...d, emg: B.target.checked }),
                    }),
                    "EMG Noise",
                  ],
                }),
                U.jsx("div", {
                  className: Mn.buttonContainer,
                  children: U.jsx("button", {
                    onClick: () => F(),
                    children: "Add Noise to Signal",
                  }),
                }),
              ],
            }),
            U.jsxs("div", {
              className: Mn.box,
              children: [
                U.jsx("h3", { children: "Filter Design" }),
                U.jsx("label", { children: "Filter Algorithm" }),
                U.jsxs("select", {
                  value: E,
                  onChange: (B) => tt(B.target.value),
                  children: [
                    U.jsx("option", {
                      value: "IIR",
                      children: "Butterworth (IIR)",
                    }),
                    U.jsx("option", { value: "FIR", children: "FIR Window" }),
                  ],
                }),
                E === "FIR" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "Window Mode" }),
                      U.jsxs("select", {
                        value: I,
                        onChange: (B) => $(B.target.value),
                        children: [
                          U.jsx("option", {
                            value: "windowSync",
                            children: "window-sync",
                          }),
                          U.jsx("option", {
                            value: "KaiserBessel",
                            children: "Kaiser–Bessel",
                          }),
                        ],
                      }),
                    ],
                  }),
                U.jsxs(U.Fragment, {
                  children: [
                    U.jsx("label", { children: "Filter Type" }),
                    U.jsxs("select", {
                      value: j,
                      onChange: (B) => J(B.target.value),
                      children: [
                        U.jsx("option", {
                          value: "lowpass",
                          children: "Lowpass",
                        }),
                        U.jsx("option", {
                          value: "highpass",
                          children: "Highpass",
                        }),
                        U.jsx("option", {
                          value: "bandpass",
                          children: "Bandpass",
                        }),
                        I === "windowSync" &&
                          U.jsx("option", {
                            value: "bandstop",
                            children: "Bandstop",
                          }),
                      ],
                    }),
                    " ",
                  ],
                }),
                (j === "highpass" || j === "bandpass" || j === "bandstop") &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsxs("div", {
                        className: Mn.syncInputContainer,
                        children: [
                          U.jsx("label", { children: "Low Cutoff (Hz) : " }),
                          U.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: T,
                            onChange: (B) => S(B.target.value),
                          }),
                        ],
                      }),
                      U.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: T,
                        onChange: (B) => S(Number(B.target.value)),
                      }),
                    ],
                  }),
                (j === "lowpass" || j === "bandpass" || j === "bandstop") &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsxs("div", {
                        className: Mn.syncInputContainer,
                        children: [
                          U.jsx("label", { children: "High Cutoff (Hz) : " }),
                          U.jsx("input", {
                            type: "number",
                            step: "0.1",
                            min: "0",
                            max: "100",
                            value: v,
                            onChange: (B) => N(B.target.value),
                          }),
                        ],
                      }),
                      U.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: v,
                        onChange: (B) => N(Number(B.target.value)),
                      }),
                    ],
                  }),
                U.jsxs("label", {
                  children: [
                    "Filter Order ",
                    I === "KaiserBessel" ? "(odd)" : "",
                    " ",
                  ],
                }),
                U.jsx("input", {
                  type: "number",
                  min: E === "IIR" ? 2 : 21,
                  max: E === "IIR" ? 12 : 201,
                  step: I === "KaiserBessel" ? 2 : 1,
                  value: k,
                  onChange: (B) => {
                    let et = Number(B.target.value);
                    E === "FIR" &&
                      I === "KaiserBessel" &&
                      et % 2 === 0 &&
                      (et = et + 1),
                      R(et);
                  },
                }),
                E === "FIR" &&
                  I === "KaiserBessel" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "Attenuation (dB) " }),
                      U.jsx("input", {
                        type: "number",
                        value: W,
                        onChange: (B) => lt(B.target.value),
                      }),
                    ],
                  }),
                E === "IIR" &&
                  U.jsxs(U.Fragment, {
                    children: [
                      U.jsx("label", { children: "preGain" }),
                      U.jsxs("select", {
                        value: at,
                        onChange: (B) => H(B.target.value === "true"),
                        children: [
                          U.jsx("option", { value: !1, children: "false" }),
                          U.jsx("option", { value: !0, children: "true" }),
                        ],
                      }),
                    ],
                  }),
                U.jsxs("div", {
                  className: Mn.psdContainer,
                  children: [
                    U.jsx("button", { onClick: nt, children: "Apply Filter" }),
                    U.jsx("button", { onClick: G, children: "Compute PSD" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  hC = () => {
    const {
        showInstruction: i,
        setShowInstruction: e,
        buttonRef: a,
      } = ft.useContext(Fn),
      l = ft.useRef(null);
    return (
      ft.useEffect(() => {
        const r = (u) => {
          l.current &&
            !l.current.contains(u.target) &&
            a.current &&
            !a.current.contains(u.target) &&
            e(!1);
        };
        return (
          i && document.addEventListener("mousedown", r),
          () => {
            document.removeEventListener("mousedown", r);
          }
        );
      }, [i, e, a]),
      U.jsx("div", {
        className: ji.grandContainer,
        children: U.jsxs("div", {
          className: ji.parentContainer,
          children: [
            U.jsx("div", {
              className: ji.topContainer,
              children: U.jsx(zv, {}),
            }),
            U.jsxs("div", {
              className: ji.middleContainer,
              children: [
                i &&
                  U.jsx("div", {
                    ref: l,
                    className: ji.instructionContainer,
                    children: U.jsx(Bv, {}),
                  }),
                U.jsx(g5, { className: ji.leftPanelContainer }),
                U.jsx(fC, { className: ji.rightPanelContainer }),
              ],
            }),
            U.jsx("div", {
              className: ji.footerContainer,
              children: "©Copyright 2025 Virtual Labs, IIT Roorkee",
            }),
          ],
        }),
      })
    );
  };
function dC() {
  return U.jsx(U.Fragment, { children: U.jsx(hC, {}) });
}
gv.createRoot(document.getElementById("root")).render(
  U.jsx(ft.StrictMode, { children: U.jsx(Ov, { children: U.jsx(dC, {}) }) })
);
