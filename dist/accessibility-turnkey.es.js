var nn = Object.defineProperty;
var rn = (n, t, s) => t in n ? nn(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var U = (n, t, s) => (rn(n, typeof t != "symbol" ? t + "" : t, s), s);
import ee, { forwardRef as sn, createElement as lt, useId as Fe, useEffect as z, useState as fe, useLayoutEffect as an } from "react";
import on from "react-dom";
function ln(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var De = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function cn() {
  if (ct)
    return le;
  ct = 1;
  var n = ee, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, d, h) {
    var p, v = {}, b = null, x = null;
    h !== void 0 && (b = "" + h), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (p in d)
      i.call(d, p) && !a.hasOwnProperty(p) && (v[p] = d[p]);
    if (m && m.defaultProps)
      for (p in d = m.defaultProps, d)
        v[p] === void 0 && (v[p] = d[p]);
    return { $$typeof: t, type: m, key: b, ref: x, props: v, _owner: o.current };
  }
  return le.Fragment = s, le.jsx = f, le.jsxs = f, le;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function un() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ee, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), k = Symbol.iterator, c = "@@iterator";
    function g(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = k && e[k] || e[c];
      return typeof l == "function" ? l : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), S = 1; S < l; S++)
          u[S - 1] = arguments[S];
        _("error", e, u);
      }
    }
    function _(e, l, u) {
      {
        var S = j.ReactDebugCurrentFrame, R = S.getStackAddendum();
        R !== "" && (l += "%s", u = u.concat([R]));
        var O = u.map(function(C) {
          return String(C);
        });
        O.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, O);
      }
    }
    var L = !1, D = !1, T = !1, M = !1, W = !1, N;
    N = Symbol.for("react.module.reference");
    function X(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === a || W || e === o || e === h || e === p || M || e === x || L || D || T || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === v || e.$$typeof === f || e.$$typeof === m || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function ae(e, l, u) {
      var S = e.displayName;
      if (S)
        return S;
      var R = l.displayName || l.name || "";
      return R !== "" ? u + "(" + R + ")" : u;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var l = e;
            return J(l) + ".Consumer";
          case f:
            var u = e;
            return J(u._context) + ".Provider";
          case d:
            return ae(e, e.render, "ForwardRef");
          case v:
            var S = e.displayName || null;
            return S !== null ? S : $(e.type) || "Memo";
          case b: {
            var R = e, O = R._payload, C = R._init;
            try {
              return $(C(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, K = 0, te, ne, We, $e, Be, qe, Ue;
    function Ge() {
    }
    Ge.__reactDisabledLog = !0;
    function Ot() {
      {
        if (K === 0) {
          te = console.log, ne = console.info, We = console.warn, $e = console.error, Be = console.group, qe = console.groupCollapsed, Ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        K++;
      }
    }
    function At() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, e, {
              value: te
            }),
            info: q({}, e, {
              value: ne
            }),
            warn: q({}, e, {
              value: We
            }),
            error: q({}, e, {
              value: $e
            }),
            group: q({}, e, {
              value: Be
            }),
            groupCollapsed: q({}, e, {
              value: qe
            }),
            groupEnd: q({}, e, {
              value: Ue
            })
          });
        }
        K < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = j.ReactCurrentDispatcher, Ee;
    function me(e, l, u) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (R) {
            var S = R.stack.trim().match(/\n( *(at )?)/);
            Ee = S && S[1] || "";
          }
        return `
` + Ee + e;
      }
    }
    var je = !1, ve;
    {
      var It = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new It();
    }
    function Ye(e, l) {
      if (!e || je)
        return "";
      {
        var u = ve.get(e);
        if (u !== void 0)
          return u;
      }
      var S;
      je = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = we.current, we.current = null, Ot();
      try {
        if (l) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (Y) {
              S = Y;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (Y) {
              S = Y;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            S = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && S && typeof Y.stack == "string") {
          for (var E = Y.stack.split(`
`), P = S.stack.split(`
`), A = E.length - 1, I = P.length - 1; A >= 1 && I >= 0 && E[A] !== P[I]; )
            I--;
          for (; A >= 1 && I >= 0; A--, I--)
            if (E[A] !== P[I]) {
              if (A !== 1 || I !== 1)
                do
                  if (A--, I--, I < 0 || E[A] !== P[I]) {
                    var B = `
` + E[A].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ve.set(e, B), B;
                  }
                while (A >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        je = !1, we.current = O, At(), Error.prepareStackTrace = R;
      }
      var re = e ? e.displayName || e.name : "", ot = re ? me(re) : "";
      return typeof e == "function" && ve.set(e, ot), ot;
    }
    function Mt(e, l, u) {
      return Ye(e, !1);
    }
    function zt(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function ye(e, l, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ye(e, zt(e));
      if (typeof e == "string")
        return me(e);
      switch (e) {
        case h:
          return me("Suspense");
        case p:
          return me("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Mt(e.render);
          case v:
            return ye(e.type, l, u);
          case b: {
            var S = e, R = S._payload, O = S._init;
            try {
              return ye(O(R), l, u);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Ze = {}, Je = j.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var l = e._owner, u = ye(e.type, e._source, l ? l.type : null);
        Je.setExtraStackFrame(u);
      } else
        Je.setExtraStackFrame(null);
    }
    function Dt(e, l, u, S, R) {
      {
        var O = Function.call.bind(be);
        for (var C in e)
          if (O(e, C)) {
            var E = void 0;
            try {
              if (typeof e[C] != "function") {
                var P = Error((S || "React class") + ": " + u + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              E = e[C](l, C, S, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              E = A;
            }
            E && !(E instanceof Error) && (xe(R), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", u, C, typeof E), xe(null)), E instanceof Error && !(E.message in Ze) && (Ze[E.message] = !0, xe(R), y("Failed %s type: %s", u, E.message), xe(null));
          }
      }
    }
    var Nt = Array.isArray;
    function Ce(e) {
      return Nt(e);
    }
    function Ft(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, u = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Pt(e) {
      try {
        return Xe(e), !1;
      } catch {
        return !0;
      }
    }
    function Xe(e) {
      return "" + e;
    }
    function Ke(e) {
      if (Pt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), Xe(e);
    }
    var oe = j.ReactCurrentOwner, Ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, et, Le;
    Le = {};
    function Vt(e) {
      if (be.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Wt(e) {
      if (be.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $t(e, l) {
      if (typeof e.ref == "string" && oe.current && l && oe.current.stateNode !== l) {
        var u = $(oe.current.type);
        Le[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(oe.current.type), e.ref), Le[u] = !0);
      }
    }
    function Bt(e, l) {
      {
        var u = function() {
          Qe || (Qe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function qt(e, l) {
      {
        var u = function() {
          et || (et = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Ut = function(e, l, u, S, R, O, C) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: u,
        props: C,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function Gt(e, l, u, S, R) {
      {
        var O, C = {}, E = null, P = null;
        u !== void 0 && (Ke(u), E = "" + u), Wt(l) && (Ke(l.key), E = "" + l.key), Vt(l) && (P = l.ref, $t(l, R));
        for (O in l)
          be.call(l, O) && !Ht.hasOwnProperty(O) && (C[O] = l[O]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (O in A)
            C[O] === void 0 && (C[O] = A[O]);
        }
        if (E || P) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && Bt(C, I), P && qt(C, I);
        }
        return Ut(e, E, P, R, S, oe.current, C);
      }
    }
    var Te = j.ReactCurrentOwner, tt = j.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var l = e._owner, u = ye(e.type, e._source, l ? l.type : null);
        tt.setExtraStackFrame(u);
      } else
        tt.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function nt() {
      {
        if (Te.current) {
          var e = $(Te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Yt(e) {
      return "";
    }
    var it = {};
    function Zt(e) {
      {
        var l = nt();
        if (!l) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (l = `

Check the top-level render call using <` + u + ">.");
        }
        return l;
      }
    }
    function rt(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Zt(l);
        if (it[u])
          return;
        it[u] = !0;
        var S = "";
        e && e._owner && e._owner !== Te.current && (S = " It was passed a child from " + $(e._owner.type) + "."), ie(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, S), ie(null);
      }
    }
    function st(e, l) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var u = 0; u < e.length; u++) {
            var S = e[u];
            Oe(S) && rt(S, l);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = g(e);
          if (typeof R == "function" && R !== e.entries)
            for (var O = R.call(e), C; !(C = O.next()).done; )
              Oe(C.value) && rt(C.value, l);
        }
      }
    }
    function Jt(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var u;
        if (typeof l == "function")
          u = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === v))
          u = l.propTypes;
        else
          return;
        if (u) {
          var S = $(l);
          Dt(u, e.props, "prop", S, e);
        } else if (l.PropTypes !== void 0 && !Re) {
          Re = !0;
          var R = $(l);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(e) {
      {
        for (var l = Object.keys(e.props), u = 0; u < l.length; u++) {
          var S = l[u];
          if (S !== "children" && S !== "key") {
            ie(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), ie(null);
            break;
          }
        }
        e.ref !== null && (ie(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    function at(e, l, u, S, R, O) {
      {
        var C = X(e);
        if (!C) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Yt();
          P ? E += P : E += nt();
          var A;
          e === null ? A = "null" : Ce(e) ? A = "array" : e !== void 0 && e.$$typeof === t ? (A = "<" + ($(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, E);
        }
        var I = Gt(e, l, u, R, O);
        if (I == null)
          return I;
        if (C) {
          var B = l.children;
          if (B !== void 0)
            if (S)
              if (Ce(B)) {
                for (var re = 0; re < B.length; re++)
                  st(B[re], e);
                Object.freeze && Object.freeze(B);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(B, e);
        }
        return e === i ? Xt(I) : Jt(I), I;
      }
    }
    function Kt(e, l, u) {
      return at(e, l, u, !0);
    }
    function Qt(e, l, u) {
      return at(e, l, u, !1);
    }
    var en = Qt, tn = Kt;
    ce.Fragment = i, ce.jsx = en, ce.jsxs = tn;
  }()), ce;
}
process.env.NODE_ENV === "production" ? De.exports = cn() : De.exports = un();
var r = De.exports, de = {}, ue = on;
if (process.env.NODE_ENV === "production")
  de.createRoot = ue.createRoot, de.hydrateRoot = ue.hydrateRoot;
else {
  var _e = ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  de.createRoot = function(n, t) {
    _e.usingClientEntryPoint = !0;
    try {
      return ue.createRoot(n, t);
    } finally {
      _e.usingClientEntryPoint = !1;
    }
  }, de.hydrateRoot = function(n, t, s) {
    _e.usingClientEntryPoint = !0;
    try {
      return ue.hydrateRoot(n, t, s);
    } finally {
      _e.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (n, t) => {
  const s = sn(
    ({
      color: i = "currentColor",
      size: o = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: f,
      className: m = "",
      children: d,
      ...h
    }, p) => lt(
      "svg",
      {
        ref: p,
        ...dn,
        width: o,
        height: o,
        stroke: i,
        strokeWidth: f ? Number(a) * 24 / Number(o) : a,
        className: ["lucide", `lucide-${fn(n)}`, m].join(" "),
        ...h
      },
      [
        ...t.map(([v, b]) => lt(v, b)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return s.displayName = `${n}`, s;
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = w("AArrowUp", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = w("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = w("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = w("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = w("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = w("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = w("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = w("ArrowRightLeft", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = w("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = w("AudioWaveform", [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
      key: "57tc96"
    }
  ]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = w("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = w("CaseSensitive", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
  ["path", { d: "M21 9v6", key: "anns31" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = w("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = w("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = w("ChevronsLeftRight", [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = w("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = w("CircleDotDashed", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = w("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = w("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = w("Eclipse", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = w("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = w("Highlighter", [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = w("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = w("Lamp", [
  ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = w("Ligature", [
  ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" }],
  ["path", { d: "M6 12h4", key: "a4o3ry" }],
  ["path", { d: "M14 12h2v8", key: "c1fccl" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 20h4", key: "lzx1xo" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = w("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = w("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = w("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = w("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = w("PersonStanding", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = w("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = w("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = w("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = w("Shapes", [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = w("Text", [
  ["path", { d: "M17 6.1H3", key: "wptmhv" }],
  ["path", { d: "M21 12.1H3", key: "1j38uz" }],
  ["path", { d: "M15.1 18H3", key: "1nb16a" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = w("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = w("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = w("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
var Yn = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ht = (n) => {
  let t;
  const s = /* @__PURE__ */ new Set(), i = (p, v) => {
    const b = typeof p == "function" ? p(t) : p;
    if (!Object.is(b, t)) {
      const x = t;
      t = v ?? (typeof b != "object" || b === null) ? b : Object.assign({}, t, b), s.forEach((k) => k(t, x));
    }
  }, o = () => t, d = { setState: i, getState: o, getInitialState: () => h, subscribe: (p) => (s.add(p), () => s.delete(p)), destroy: () => {
    (Yn ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), s.clear();
  } }, h = t = n(i, o, d);
  return d;
}, Zn = (n) => n ? ht(n) : ht;
var Ne = { exports: {} }, Ae = {}, Se = { exports: {} }, Ie = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Jn() {
  if (pt)
    return Ie;
  pt = 1;
  var n = ee;
  function t(v, b) {
    return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
  }
  var s = typeof Object.is == "function" ? Object.is : t, i = n.useState, o = n.useEffect, a = n.useLayoutEffect, f = n.useDebugValue;
  function m(v, b) {
    var x = b(), k = i({ inst: { value: x, getSnapshot: b } }), c = k[0].inst, g = k[1];
    return a(function() {
      c.value = x, c.getSnapshot = b, d(c) && g({ inst: c });
    }, [v, x, b]), o(function() {
      return d(c) && g({ inst: c }), v(function() {
        d(c) && g({ inst: c });
      });
    }, [v]), f(x), x;
  }
  function d(v) {
    var b = v.getSnapshot;
    v = v.value;
    try {
      var x = b();
      return !s(v, x);
    } catch {
      return !0;
    }
  }
  function h(v, b) {
    return b();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : m;
  return Ie.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : p, Ie;
}
var Me = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Xn() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = ee, t = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(_) {
      {
        for (var L = arguments.length, D = new Array(L > 1 ? L - 1 : 0), T = 1; T < L; T++)
          D[T - 1] = arguments[T];
        i("error", _, D);
      }
    }
    function i(_, L, D) {
      {
        var T = t.ReactDebugCurrentFrame, M = T.getStackAddendum();
        M !== "" && (L += "%s", D = D.concat([M]));
        var W = D.map(function(N) {
          return String(N);
        });
        W.unshift("Warning: " + L), Function.prototype.apply.call(console[_], console, W);
      }
    }
    function o(_, L) {
      return _ === L && (_ !== 0 || 1 / _ === 1 / L) || _ !== _ && L !== L;
    }
    var a = typeof Object.is == "function" ? Object.is : o, f = n.useState, m = n.useEffect, d = n.useLayoutEffect, h = n.useDebugValue, p = !1, v = !1;
    function b(_, L, D) {
      p || n.startTransition !== void 0 && (p = !0, s("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var T = L();
      if (!v) {
        var M = L();
        a(T, M) || (s("The result of getSnapshot should be cached to avoid an infinite loop"), v = !0);
      }
      var W = f({
        inst: {
          value: T,
          getSnapshot: L
        }
      }), N = W[0].inst, X = W[1];
      return d(function() {
        N.value = T, N.getSnapshot = L, x(N) && X({
          inst: N
        });
      }, [_, T, L]), m(function() {
        x(N) && X({
          inst: N
        });
        var ae = function() {
          x(N) && X({
            inst: N
          });
        };
        return _(ae);
      }, [_]), h(T), T;
    }
    function x(_) {
      var L = _.getSnapshot, D = _.value;
      try {
        var T = L();
        return !a(D, T);
      } catch {
        return !0;
      }
    }
    function k(_, L, D) {
      return L();
    }
    var c = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !c, j = g ? k : b, y = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : j;
    Me.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Me;
}
var mt;
function jt() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? Se.exports = Jn() : Se.exports = Xn()), Se.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Kn() {
  if (vt)
    return Ae;
  vt = 1;
  var n = ee, t = jt();
  function s(h, p) {
    return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
  }
  var i = typeof Object.is == "function" ? Object.is : s, o = t.useSyncExternalStore, a = n.useRef, f = n.useEffect, m = n.useMemo, d = n.useDebugValue;
  return Ae.useSyncExternalStoreWithSelector = function(h, p, v, b, x) {
    var k = a(null);
    if (k.current === null) {
      var c = { hasValue: !1, value: null };
      k.current = c;
    } else
      c = k.current;
    k = m(function() {
      function j(T) {
        if (!y) {
          if (y = !0, _ = T, T = b(T), x !== void 0 && c.hasValue) {
            var M = c.value;
            if (x(M, T))
              return L = M;
          }
          return L = T;
        }
        if (M = L, i(_, T))
          return M;
        var W = b(T);
        return x !== void 0 && x(M, W) ? M : (_ = T, L = W);
      }
      var y = !1, _, L, D = v === void 0 ? null : v;
      return [function() {
        return j(p());
      }, D === null ? void 0 : function() {
        return j(D());
      }];
    }, [p, v, b, x]);
    var g = o(h, k[0], k[1]);
    return f(function() {
      c.hasValue = !0, c.value = g;
    }, [g]), d(g), g;
  }, Ae;
}
var ze = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Qn() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = ee, t = jt();
    function s(p, v) {
      return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = t.useSyncExternalStore, a = n.useRef, f = n.useEffect, m = n.useMemo, d = n.useDebugValue;
    function h(p, v, b, x, k) {
      var c = a(null), g;
      c.current === null ? (g = {
        hasValue: !1,
        value: null
      }, c.current = g) : g = c.current;
      var j = m(function() {
        var D = !1, T, M, W = function(J) {
          if (!D) {
            D = !0, T = J;
            var $ = x(J);
            if (k !== void 0 && g.hasValue) {
              var q = g.value;
              if (k(q, $))
                return M = q, q;
            }
            return M = $, $;
          }
          var K = T, te = M;
          if (i(K, J))
            return te;
          var ne = x(J);
          return k !== void 0 && k(te, ne) ? te : (T = J, M = ne, ne);
        }, N = b === void 0 ? null : b, X = function() {
          return W(v());
        }, ae = N === null ? void 0 : function() {
          return W(N());
        };
        return [X, ae];
      }, [v, b, x, k]), y = j[0], _ = j[1], L = o(p, y, _);
      return f(function() {
        g.hasValue = !0, g.value = L;
      }, [L]), d(L), L;
    }
    ze.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ze;
}
process.env.NODE_ENV === "production" ? Ne.exports = Kn() : Ne.exports = Qn();
var ei = Ne.exports;
const ti = /* @__PURE__ */ ln(ei);
var Ct = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: ni } = ee, { useSyncExternalStoreWithSelector: ii } = ti;
let bt = !1;
const ri = (n) => n;
function si(n, t = ri, s) {
  (Ct ? "production" : void 0) !== "production" && s && !bt && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), bt = !0);
  const i = ii(
    n.subscribe,
    n.getState,
    n.getServerState || n.getInitialState,
    t,
    s
  );
  return ni(i), i;
}
const xt = (n) => {
  (Ct ? "production" : void 0) !== "production" && typeof n != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof n == "function" ? Zn(n) : n, s = (i, o) => si(t, i, o);
  return Object.assign(s, t), s;
}, Pe = (n) => n ? xt(n) : xt;
var ai = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function oi(n, t) {
  let s;
  try {
    s = n();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var a;
      const f = (d) => d === null ? null : JSON.parse(d, void 0), m = (a = s.getItem(o)) != null ? a : null;
      return m instanceof Promise ? m.then(f) : f(m);
    },
    setItem: (o, a) => s.setItem(
      o,
      JSON.stringify(a, void 0)
    ),
    removeItem: (o) => s.removeItem(o)
  };
}
const he = (n) => (t) => {
  try {
    const s = n(t);
    return s instanceof Promise ? s : {
      then(i) {
        return he(i)(s);
      },
      catch(i) {
        return this;
      }
    };
  } catch (s) {
    return {
      then(i) {
        return this;
      },
      catch(i) {
        return he(i)(s);
      }
    };
  }
}, li = (n, t) => (s, i, o) => {
  let a = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (g) => g,
    version: 0,
    merge: (g, j) => ({
      ...j,
      ...g
    }),
    ...t
  }, f = !1;
  const m = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h;
  try {
    h = a.getStorage();
  } catch {
  }
  if (!h)
    return n(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), s(...g);
      },
      i,
      o
    );
  const p = he(a.serialize), v = () => {
    const g = a.partialize({ ...i() });
    let j;
    const y = p({ state: g, version: a.version }).then(
      (_) => h.setItem(a.name, _)
    ).catch((_) => {
      j = _;
    });
    if (j)
      throw j;
    return y;
  }, b = o.setState;
  o.setState = (g, j) => {
    b(g, j), v();
  };
  const x = n(
    (...g) => {
      s(...g), v();
    },
    i,
    o
  );
  let k;
  const c = () => {
    var g;
    if (!h)
      return;
    f = !1, m.forEach((y) => y(i()));
    const j = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, i())) || void 0;
    return he(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        return a.deserialize(y);
    }).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var _;
      return k = a.merge(
        y,
        (_ = i()) != null ? _ : x
      ), s(k, !0), v();
    }).then(() => {
      j == null || j(k, void 0), f = !0, d.forEach((y) => y(k));
    }).catch((y) => {
      j == null || j(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (g) => {
      a = {
        ...a,
        ...g
      }, g.getStorage && (h = g.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => c(),
    hasHydrated: () => f,
    onHydrate: (g) => (m.add(g), () => {
      m.delete(g);
    }),
    onFinishHydration: (g) => (d.add(g), () => {
      d.delete(g);
    })
  }, c(), k || x;
}, ci = (n, t) => (s, i, o) => {
  let a = {
    storage: oi(() => localStorage),
    partialize: (c) => c,
    version: 0,
    merge: (c, g) => ({
      ...g,
      ...c
    }),
    ...t
  }, f = !1;
  const m = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return n(
      (...c) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), s(...c);
      },
      i,
      o
    );
  const p = () => {
    const c = a.partialize({ ...i() });
    return h.setItem(a.name, {
      state: c,
      version: a.version
    });
  }, v = o.setState;
  o.setState = (c, g) => {
    v(c, g), p();
  };
  const b = n(
    (...c) => {
      s(...c), p();
    },
    i,
    o
  );
  o.getInitialState = () => b;
  let x;
  const k = () => {
    var c, g;
    if (!h)
      return;
    f = !1, m.forEach((y) => {
      var _;
      return y((_ = i()) != null ? _ : b);
    });
    const j = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, (c = i()) != null ? c : b)) || void 0;
    return he(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var _;
      return x = a.merge(
        y,
        (_ = i()) != null ? _ : b
      ), s(x, !0), p();
    }).then(() => {
      j == null || j(x, void 0), x = i(), f = !0, d.forEach((y) => y(x));
    }).catch((y) => {
      j == null || j(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (c) => {
      a = {
        ...a,
        ...c
      }, c.storage && (h = c.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => k(),
    hasHydrated: () => f,
    onHydrate: (c) => (m.add(c), () => {
      m.delete(c);
    }),
    onFinishHydration: (c) => (d.add(c), () => {
      d.delete(c);
    })
  }, a.skipHydration || k(), x || b;
}, ui = (n, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((ai ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), li(n, t)) : ci(n, t), He = ui, ke = {
  textSize: 0,
  lineHeight: 0,
  wordSpacing: 0,
  textAlign: null,
  highlightTitles: !1,
  highlightLinks: !1,
  hiddenImages: !1,
  invertColors: !1,
  saturation: null,
  noTransitions: !1,
  monochrome: !1,
  readingGuide: !1,
  bigCursor: !1,
  fonts: null
}, pe = Pe(
  He(
    (n, t) => ({
      features: { ...ke },
      getFeature: (s) => t().features[s],
      setFeatures: (s) => n((i) => ({
        features: { ...i.features, ...s }
      })),
      isSomeFeaturesSelected: () => {
        const { features: s } = t();
        return Object.keys(s).some((i) => s[i] !== ke[i]);
      },
      applyProfileFeatures: (s) => n(() => ({
        features: { ...ke, ...s }
      })),
      isProfileChecked: (s) => {
        const { features: i } = t();
        return Object.entries(s).every(([o, a]) => i[o] === a);
      },
      reset: () => n({ features: { ...ke } }),
      set: (s) => n((i) => ({ ...i, ...s }))
    }),
    { name: "tkFeaturesStore" }
  )
), di = {
  en: {
    "global.back": "Back",
    "global.title": "Accessibility Turnkey",
    "global.description": "Adapt this site according to your preferences.",
    "global.resetAllSettings": "Reset all settings",
    "feature.textSize": "Text size",
    "feature.lineHeight": "Line height",
    "feature.wordSpacing": "Word spacing",
    "feature.invertColors": "Invert colors",
    "feature.textAlign": "Text align",
    "feature.highlightTitles": "Highlight titles",
    "feature.highlightLinks": "Highlight links",
    "feature.hiddenImages": "Hide images",
    "feature.noTransitions": "Stop Animations",
    "feature.monochrome": "Monochrome mode",
    "feature.saturation": "Saturation",
    "feature.readingGuide": "Reading guide",
    "feature.bigCursor": "Big Cursor",
    "feature.modeDyslexie": "Dyslexia mode",
    "feature.fonts": "Readable Font",
    "profile.section.title": "Accessibility Profiles",
    "settings.option.display": "Aside display",
    "settings.option.oversized": "Oversized widget",
    "settings.option.font": "Widget font",
    "view.about.title": "Our accessibility statement",
    "view.about.subtitle": "Turnkey",
    "view.settings.title": "Widget Settings",
    "view.settings.subtitle": "Activate keyboard shortcuts, Dark theme, and Other settings",
    "view.settings.interface.title": "Interface",
    "view.translater.title": "Choose your Preferred Language",
    "view.translater.subtitle": "This will change the widget language only."
  },
  ar: {
    "global.back": "Back",
    "global.title": "Accessibility Turnkey",
    "global.description": "قم بتكييف هذا الموقع وفقًا لتفضيلاتك.",
    "global.resetAllSettings": "امسح كل الاعدادت",
    "feature.textSize": "حجم الخط",
    "feature.lineHeight": "ارتفاع خط",
    "feature.wordSpacing": "تباعد الكلمات",
    "feature.invertColors": "عكس الألوان",
    "feature.textAlign": "محاذاة النص",
    "feature.highlightTitles": "تسليط الضوء على العناوين",
    "feature.highlightLinks": "تسليط الضوء على الروابط",
    "feature.hiddenImages": "إخفاء الصور",
    "feature.noTransitions": "وقف التحرك",
    "feature.monochrome": "وضع أحادي اللون",
    "feature.saturation": "التشبع",
    "feature.readingGuide": "دليل القراءة",
    "feature.bigCursor": "المؤشر الكبير",
    "feature.modeDyslexie": "وضع عسر القراءة",
    "feature.fonts": "خط قابل للقراءة",
    "profile.section.title": "إعدادت مسبقة للاختيار",
    "settings.option.display": "عرض جانبا",
    "settings.option.oversized": "القطعة المتضخم",
    "settings.option.font": "خط القطعة",
    "view.about.title": "بيان إمكانية الوصول لدينا",
    "view.about.subtitle": "جاهزة للاستغلال",
    "view.settings.title": "إعدادات",
    "view.settings.subtitle": "قم بتنشيط اختصارات لوحة المفاتيح والمظهر الداكن والإعدادات الأخرى",
    "view.settings.interface.title": "واجهه المستخدم",
    "view.translater.title": "اختر لغتك المفضلة",
    "view.translater.subtitle": "سيؤدي هذا إلى تغيير لغة القطعة فقط."
  },
  fr: {
    "global.back": "Retour",
    "global.title": "Accessibilité clé en main",
    "global.description": "Adaptez ce site selon vos préférences.",
    "global.resetAllSettings": "Réinitialiser tous les réglages",
    "feature.textSize": "Taille du texte",
    "feature.lineHeight": "Hauteur de la ligne",
    "feature.wordSpacing": "Espacement des mots",
    "feature.invertColors": "Invert colors",
    "feature.textAlign": "Aligner le texte",
    "feature.highlightTitles": "Mettre en surbrillance les titres",
    "feature.highlightLinks": "Mettre en surbrillance les liens",
    "feature.hiddenImages": "Masquer les images",
    "feature.noTransitions": "Arrêter les animations",
    "feature.monochrome": "Mode monochrome",
    "feature.saturation": "Saturation",
    "feature.readingGuide": "Guide de lecture",
    "feature.bigCursor": "Gros curseur",
    "feature.modeDyslexie": "Mode dyslexie",
    "feature.fonts": "Police lisible",
    "profile.section.title": "Profils d'accessibilité",
    "settings.option.display": "Affichage latéral",
    "settings.option.oversized": "Widget surdimensionné",
    "settings.option.font": "Police du widget",
    "view.about.title": "Notre déclaration d'accessibilité",
    "view.about.subtitle": "Clé en main",
    "view.settings.title": "Paramètres du widget",
    "view.settings.subtitle": "Activer les raccourcis clavier, le thème sombre et d'autres paramètres",
    "view.settings.interface.title": "Interface",
    "view.translater.title": "Choisissez votre langue préférée",
    "view.translater.subtitle": "Cela modifiera uniquement la langue du widget."
  }
}, fi = (n) => /* @__PURE__ */ r.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", ...n, children: [
  /* @__PURE__ */ r.jsx("mask", { id: "circleFlagsFr0", children: /* @__PURE__ */ r.jsx("circle", { cx: "256", cy: "256", r: "256", fill: "#fff" }) }),
  /* @__PURE__ */ r.jsxs("g", { mask: "url(#circleFlagsFr0)", children: [
    /* @__PURE__ */ r.jsx("path", { fill: "#eee", d: "M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" }),
    /* @__PURE__ */ r.jsx("path", { fill: "#0052b4", d: "M0 0h167v512H0z" }),
    /* @__PURE__ */ r.jsx("path", { fill: "#d80027", d: "M345 0h167v512H345z" })
  ] })
] });
function hi(n) {
  return /* @__PURE__ */ r.jsxs("svg", { width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n, children: [
    /* @__PURE__ */ r.jsxs("g", { clipPath: "url(#clip0_582_5480)", children: [
      /* @__PURE__ */ r.jsx("path", { d: "M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z", fill: "#F0F0F0" }),
      /* @__PURE__ */ r.jsx("path", { d: "M512 256C512 114.616 397.384 0 256 0C205.92 0 159.206 14.395 119.748 39.251L175.861 63.092L100.174 95.25L175.861 127.407L100.174 159.563L175.861 191.718L100.174 223.869L175.861 256.018L100.174 288.174L175.861 320.328L100.174 352.479L175.861 384.633L100.174 416.789L175.861 448.94L119.773 472.768C159.226 497.612 205.93 512 256 512C397.384 512 512 397.384 512 256Z", fill: "#751A46" })
    ] }),
    /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsx("clipPath", { id: "clip0_582_5480", children: /* @__PURE__ */ r.jsx("rect", { width: "512", height: "512", fill: "white" }) }) })
  ] });
}
function pi(n) {
  return /* @__PURE__ */ r.jsxs("svg", { width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n, children: [
    /* @__PURE__ */ r.jsxs("g", { clipPath: "url(#clip0_582_5992)", children: [
      /* @__PURE__ */ r.jsx("path", { d: "M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z", fill: "#F0F0F0" }),
      /* @__PURE__ */ r.jsx("path", { d: "M244.87 255.999H512C512 232.893 508.92 210.509 503.181 189.216H244.87V255.999Z", fill: "#D80027" }),
      /* @__PURE__ */ r.jsx("path", { d: "M244.87 122.434H474.426C458.755 96.8619 438.718 74.2589 415.356 55.6509H244.87V122.434Z", fill: "#D80027" }),
      /* @__PURE__ */ r.jsx("path", { d: "M256 511.999C316.249 511.999 371.626 491.175 415.356 456.347H96.644C140.374 491.175 195.751 511.999 256 511.999Z", fill: "#D80027" }),
      /* @__PURE__ */ r.jsx("path", { d: "M37.574 389.564H474.426C487.007 369.035 496.764 346.595 503.181 322.781H8.819C15.236 346.595 24.993 369.035 37.574 389.564Z", fill: "#D80027" }),
      /* @__PURE__ */ r.jsx("path", { d: "M118.584 39.977H141.913L120.213 55.742L128.502 81.251L106.803 65.486L85.104 81.251L92.264 59.214C73.158 75.129 56.412 93.775 42.612 114.551H50.087L36.274 124.586C34.122 128.176 32.058 131.823 30.08 135.524L36.676 155.825L24.37 146.884C21.311 153.365 18.513 159.992 15.998 166.757L23.265 189.125H50.087L28.387 204.89L36.676 230.399L14.977 214.634L1.979 224.078C0.678 234.536 0 245.188 0 255.999H256C256 114.615 256 97.947 256 -0.000976562C205.428 -0.000976562 158.285 14.669 118.584 39.977ZM128.502 230.399L106.803 214.634L85.104 230.399L93.393 204.89L71.693 189.125H98.515L106.803 163.616L115.091 189.125H141.913L120.213 204.89L128.502 230.399ZM120.213 130.316L128.502 155.825L106.803 140.06L85.104 155.825L93.393 130.316L71.693 114.551H98.515L106.803 89.042L115.091 114.551H141.913L120.213 130.316ZM220.328 230.399L198.629 214.634L176.93 230.399L185.219 204.89L163.519 189.125H190.341L198.629 163.616L206.917 189.125H233.739L212.039 204.89L220.328 230.399ZM212.039 130.316L220.328 155.825L198.629 140.06L176.93 155.825L185.219 130.316L163.519 114.551H190.341L198.629 89.042L206.917 114.551H233.739L212.039 130.316ZM212.039 55.742L220.328 81.251L198.629 65.486L176.93 81.251L185.219 55.742L163.519 39.977H190.341L198.629 14.468L206.917 39.977H233.739L212.039 55.742Z", fill: "#0052B4" })
    ] }),
    /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsx("clipPath", { id: "clip0_582_5992", children: /* @__PURE__ */ r.jsx("rect", { y: "-0.000976562", width: "512", height: "512", fill: "white" }) }) })
  ] });
}
const Ve = [
  {
    name: "English",
    key: "en",
    Flag: pi
  },
  {
    name: "Arabic",
    key: "ar",
    direction: "rtl",
    Flag: hi
  },
  {
    name: "Français",
    key: "fr",
    Flag: fi
  }
], gi = "en", G = Pe(
  He(
    (n, t) => ({
      locale: gi,
      setLocale: (s) => n((i) => ({ ...i, locale: s })),
      isRTL: () => {
        const s = t(), i = Ve.find((o) => o.key === s.locale);
        return i != null && i.direction ? i.direction === "rtl" : !1;
      },
      t: (s) => {
        const i = t();
        return di[i.locale][s] || s;
      }
    }),
    { name: "tkTransStore" }
  )
);
function Lt(n) {
  var t, s, i = "";
  if (typeof n == "string" || typeof n == "number")
    i += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (t = 0; t < o; t++)
        n[t] && (s = Lt(n[t])) && (i && (i += " "), i += s);
    } else
      for (s in n)
        n[s] && (i && (i += " "), i += s);
  return i;
}
function F() {
  for (var n, t, s = 0, i = "", o = arguments.length; s < o; s++)
    (n = arguments[s]) && (t = Lt(n)) && (i && (i += " "), i += t);
  return i;
}
const mi = () => {
  const { t: n, locale: t, setLocale: s } = G();
  return /* @__PURE__ */ r.jsxs("div", { id: "translaterView", className: "view-container", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ r.jsx("h2", { children: n("view.translater.title") }),
      /* @__PURE__ */ r.jsx("p", { children: n("view.translater.subtitle") })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "tk-languages", children: /* @__PURE__ */ r.jsx("ul", { children: Ve.map(
      (i) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: F("tk-languages-item", i.key === t && "selected"),
          onClick: () => s(i.key),
          children: [
            i.Flag && /* @__PURE__ */ r.jsx(i.Flag, {}),
            i.name
          ]
        }
      ) }, i.key)
    ) }) })
  ] });
}, vi = () => {
  const { t: n } = G();
  return /* @__PURE__ */ r.jsxs("div", { id: "aboutView", className: "view-container", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ r.jsx("h2", { children: n("view.about.title") }),
      /* @__PURE__ */ r.jsx("p", { children: n("view.about.subtitle") })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "view-content", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ r.jsx("h2", { children: "Introduction" }) }),
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ r.jsx("p", { children: "We understand that the internet should be accessible to anyone and we’re committed to maintaining standards that enable accessibility for everyone, in spite of their situation or ability.In line with our vision to make the web accessible for everyone, we strive to maintain the best possible accessibility standards by using the Web Content Accessibility Guidelines 2.1 (WCAG 2.1) level AA success criteria as our model.The WCAG is a set of guidelines that were established by the World Wide Web Consortium’s (W3C) Web Accessibility Initiative, that describe how to make all web content accessible to a broad range of people with disabilities.We use a web accessibility interface that helps people with disabilities to adjust our website’s UI and design to meet their specific needs." }) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ r.jsx("h2", { children: "Disclaimer" }) }),
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ r.jsx("p", { children: "We aim to provide the highest standards of accessibility on our website, because we understand the moral and practical importance of being compliant with the WCAG 2.1 AA standards. We perform regular scans to identify and fix any accessibility issues that may arise. Despite our best efforts to uphold the highest possible accessibility standards on our website, you may find that there may be some pages or components of our website that may fall short of accessibility standards. This may be because we have not yet identified, or are currently in the process of identifying the best possible solution for such a problem." }) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ r.jsx("h2", { children: "Accessibility Assistant" }) }),
        /* @__PURE__ */ r.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ r.jsx("p", { children: "To enable the accessibility assistant on our website, navigate to the accessibility icon at the corner of the page and click it. The menu will appear. You can then interact with the icons and options to suit your specific needs.We are able to make websites accessible to people with disabilities by providing specialized profiles through the Accessibility Assistant. The disability profiles supported on our website are:Blind (screen reader/braille):This profile enables people who are blind to use the website by eliminating non-essential elements from the accessibility tree. It also adjusts the website to be compatible with screen-readers such as JAWS, NVDA, and VoiceOver.Vision Impaired Profile:This profile adjusts the website so that it is accessible to people who have visual impairments by making the onscreen features more prominent and easy to read. It helps people with Glaucoma, age-related eyesight degradation, etc.Seizure secure:This profile provides various assistive features to help users with seizure disorders including pausing/stopping all animations, flashes, and multimedia.Motor Impaired:This profile significantly reduces the hassle involved in navigating a website with a keyboard. Your customers can easily use the keyboard Tab, Shift+Tab, and the Enter keys to access website elements.Focus (ADHD):This profile reduces distractions and noise, so people with ADHD and neurodevelopmental disorders can browse, read, and focus on the essential elements of a website.Dyslexia:This profile makes it easier for people with learning difficulties like Dyslexia can easily understand the content of web pages." }) })
      ] })
    ] })
  ] });
}, _t = {
  displayAsAside: !1,
  oversizedWidget: !1,
  widgetFamilyFont: null
}, ge = Pe(
  He(
    (n, t) => ({
      settings: { ..._t },
      getSetting: (s) => t().settings[s],
      setSettings: (s) => n((i) => ({
        settings: { ...i.settings, ...s }
      })),
      reset: () => n({ settings: { ..._t } }),
      set: (s) => n((i) => ({ ...i, ...s }))
    }),
    { name: "tkSettingsStore" }
  )
);
function Tt({
  Icon: n,
  iconSize: t = 16,
  label: s,
  steps: i,
  selectedStep: o,
  isActive: a,
  next: f,
  className: m,
  children: d
}) {
  const h = Fe(), p = (o == null ? void 0 : o.Icon) || n, v = (o == null ? void 0 : o.iconSize) || t;
  return /* @__PURE__ */ r.jsxs("div", { className: F("tk-steps-controller", a && "tk-steps-controller--active", m), onClick: f, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "tk-steps-controller__container", children: [
      /* @__PURE__ */ r.jsx("div", { className: "tk-feature-cell__icon", children: p && /* @__PURE__ */ r.jsx(p, { size: v }) }),
      /* @__PURE__ */ r.jsx("div", { className: "tk-feature-cell__content tk-steps-controller__content", children: s })
    ] }),
    d && /* @__PURE__ */ r.jsx("div", { className: "tk-steps-controller__more", children: d }),
    i.length && /* @__PURE__ */ r.jsx("div", { className: "tk-steps-controller__steps", children: i.map((b, x) => /* @__PURE__ */ r.jsx("div", { className: F("step-item", o && o.value === b.value && "step-item--selected"), children: /* @__PURE__ */ r.jsx("span", { className: "step-item__name", children: b.name }) }, `step-${h}-${x}`)) }),
    o && a && /* @__PURE__ */ r.jsx("div", { className: "tk-steps-controller__selected-item", children: o.name })
  ] });
}
const V = {
  global: {
    layoutIconSize: 18,
    featuresIconSize: 24,
    settingsIconSize: 24
  },
  features: {
    textSize: {
      label: "feature.textSize",
      Icon: ft
    },
    lineHeight: {
      label: "feature.lineHeight",
      Icon: Ln
    },
    wordSpacing: {
      label: "feature.wordSpacing",
      Icon: Cn
    },
    textAlign: {
      label: "feature.textAlign",
      Icon: Un
    },
    highlightTitles: {
      label: "feature.highlightTitles",
      Icon: In
    },
    highlightLinks: {
      label: "feature.highlightLinks",
      Icon: Fn
    },
    saturation: {
      label: "feature.saturation",
      Icon: dt
    },
    noTransitions: {
      label: "feature.noTransitions",
      Icon: Tn
    },
    hiddenImages: {
      label: "feature.hiddenImages",
      Icon: Mn
    },
    invertColors: {
      label: "feature.invertColors",
      Icon: zn
    },
    monochrome: {
      label: "feature.monochrome",
      Icon: dt
    },
    readingGuide: {
      label: "feature.readingGuide",
      Icon: $n
    },
    bigCursor: {
      label: "feature.bigCursor",
      Icon: Pn
    },
    fonts: {
      label: "feature.fonts",
      Icon: wn
    }
  },
  settings: {
    displayAsAside: {
      label: "settings.option.display",
      Icon: Hn
    },
    oversizedWidget: {
      label: "settings.option.oversized",
      Icon: hn
    },
    widgetFamilyFont: {
      label: "settings.option.font",
      Icon: ft
    }
  }
};
function yi({
  settingKey: n,
  steps: t,
  initValue: s = null,
  className: i = null
}) {
  const { t: o } = G(), { getSetting: a, setSettings: f } = ge();
  z(() => {
    f({ [n]: s });
  }, [s]);
  const m = t.find((c) => c.value === a(n)) || null, d = V.settings[n].label, h = V.settings[n].Icon, p = V.global.settingsIconSize, v = (c) => c < t.length - 1 ? t[c + 1] : t[0], b = (c) => t.findIndex((g) => g.value === c), x = s && m ? m.value == s : !1, k = () => {
    const c = a(n);
    if ((c ?? null) === null)
      f({ [n]: t[0].value });
    else {
      const g = b(c);
      f({ [n]: v(g).value });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: F("tk-cell", i), children: /* @__PURE__ */ r.jsx(
    Tt,
    {
      Icon: h,
      iconSize: p,
      label: o(d),
      steps: t,
      selectedStep: m,
      isActive: x,
      next: k,
      className: "tk-steps-controller--inline"
    }
  ) });
}
function Rt({
  Icon: n,
  iconSize: t = 16,
  label: s,
  isChecked: i,
  handleToggleChange: o,
  className: a = null,
  children: f
}) {
  const m = Fe();
  return /* @__PURE__ */ r.jsxs("div", { className: F("tk-toggle-controller", i && "tk-toggle-controller--active", a), onClick: (d) => d.stopPropagation(), children: [
    /* @__PURE__ */ r.jsx("input", { type: "checkbox", id: m, checked: i, onChange: o }),
    /* @__PURE__ */ r.jsxs("label", { htmlFor: m, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "tk-toggle-controller__container", children: [
        /* @__PURE__ */ r.jsx("div", { className: "tk-feature-cell__icon", children: n && /* @__PURE__ */ r.jsx(n, { size: t }) }),
        /* @__PURE__ */ r.jsx("div", { className: "tk-feature-cell__content tk-toggle-controller__content", children: s }),
        /* @__PURE__ */ r.jsx("div", { className: "indicator", children: /* @__PURE__ */ r.jsx("div", { className: "indicator__puce" }) })
      ] }),
      f && /* @__PURE__ */ r.jsx("div", { className: "tk-toggle-controller__more", children: f })
    ] })
  ] });
}
function St({
  settingKey: n,
  initValue: t = !1,
  className: s = null
}) {
  const { t: i } = G(), { getSetting: o, setSettings: a } = ge(), f = V.settings[n].label, m = V.settings[n].Icon, d = V.global.settingsIconSize;
  z(() => {
    a({ [n]: t });
  }, [t]);
  const h = () => a({ [n]: !o(n) });
  return /* @__PURE__ */ r.jsx(
    Rt,
    {
      Icon: m,
      iconSize: d,
      label: i(f),
      isChecked: o(n),
      handleToggleChange: h,
      className: F("tk-cell", s)
    }
  );
}
const bi = () => {
  const { t: n } = G(), { settings: t } = ge(), s = [
    { name: "System", value: "" },
    { name: "Roboto", value: "roboto" },
    { name: "Montserrat", value: "montserrat" }
  ];
  return /* @__PURE__ */ r.jsxs("div", { id: "settingsView", className: "view-container", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ r.jsx("h2", { children: n("view.settings.title") }),
      /* @__PURE__ */ r.jsx("p", { children: n("view.settings.subtitle") })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "tk-content", children: [
      /* @__PURE__ */ r.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ r.jsx("h2", { children: n("view.settings.interface.title") }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "tk-content__body tk-cells-column", children: [
        /* @__PURE__ */ r.jsx(
          St,
          {
            settingKey: "displayAsAside",
            initValue: t.displayAsAside
          }
        ),
        /* @__PURE__ */ r.jsx(
          St,
          {
            settingKey: "oversizedWidget",
            initValue: t.oversizedWidget
          }
        ),
        /* @__PURE__ */ r.jsx(
          yi,
          {
            settingKey: "widgetFamilyFont",
            steps: s,
            initValue: t.widgetFamilyFont
          }
        )
      ] })
    ] })
  ] });
};
function xi({
  profile: n,
  className: t = null
}) {
  const { applyProfileFeatures: s, isProfileChecked: i, reset: o } = pe(), a = Fe(), f = V.global.featuresIconSize, m = i(n.features), d = () => m ? o() : s(n.features);
  return /* @__PURE__ */ r.jsxs("div", { className: F("tk-cell tk-profile-switch highlight-if-has-checked", t), onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ r.jsx("input", { type: "checkbox", id: a, checked: m, onChange: d }),
    /* @__PURE__ */ r.jsxs("label", { htmlFor: a, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "tk-profile-switch__container", children: [
        n.Icon ? /* @__PURE__ */ r.jsx(n.Icon, { size: f }) : /* @__PURE__ */ r.jsx(Et, { size: f }),
        /* @__PURE__ */ r.jsxs("div", { className: "tk-profile-switch__content tk-flex tk-flex-col tk-gap-1", children: [
          /* @__PURE__ */ r.jsx("div", { className: "tk-font-semibold", children: n.title }),
          /* @__PURE__ */ r.jsx("div", { children: n.shortDescription })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "indicator", children: /* @__PURE__ */ r.jsx("div", { className: "indicator__puce" }) })
      ] }),
      m && n.description && /* @__PURE__ */ r.jsx("div", { className: "tk-profile-switch__more", children: n.description })
    ] })
  ] });
}
const _i = ({ title: n, Icon: t, className: s, children: i }) => {
  const [o, a] = fe(!1);
  return /* @__PURE__ */ r.jsxs("div", { className: F("tk-accordion", "rounded-md p-2 mb-1", s), children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "tk-accordion__head tk-text-lg tk-p-2 tk-flex tk-items-center tk-justify-between",
        onClick: () => a(!o),
        children: [
          /* @__PURE__ */ r.jsxs("h3", { className: "tk-accordion__head__title", children: [
            t && /* @__PURE__ */ r.jsx(t, { size: 18 }),
            n
          ] }),
          /* @__PURE__ */ r.jsx(jn, { className: F("tk-origin-center", o && "tk-rotate-90") })
        ]
      }
    ),
    o && /* @__PURE__ */ r.jsx("div", { className: "tk-accordion__content tk-mt-2", children: i })
  ] });
}, Si = [
  {
    id: 1,
    title: "Motor Impaired",
    shortDescription: "Manipulating a mouse and keyboard to navigate sites",
    description: "Manipulating a mouse and keyboard to navigate sites isn’t always easy for people with motor impairments. UserWay consults with motor-impaired individuals to develop tools that can help. This profile provides options that can make site navigation much less complicated.",
    Icon: pn,
    checked: !1,
    enable: !0,
    // Play Animation | Tooltips!
    features: { noTransitions: !0 }
  },
  {
    id: 2,
    title: "Blind",
    shortDescription: "Optimize website for screen-readers",
    description: "When a website isn’t structured properly, the assistive technologies the blind rely upon aren’t effective. And if navigation and shopping carts present barriers to access, these visitors have no choice but to abandon inaccessible sites.",
    Icon: Sn,
    checked: !1,
    enable: !0,
    // Read Normal!
    features: { readingGuide: !0 }
  },
  {
    id: 3,
    title: "Color Blind",
    shortDescription: "",
    description: "Since everyone doesn’t see colors the same way, UserWay works with color blind individuals to determine what features they find helpful, then groups them together in this profile to provide relevant suggestions.",
    Icon: On,
    checked: !1,
    enable: !0,
    // Smart Contrast! | High Saturation
    features: { textSize: -1, wordSpacing: 1, saturation: "high", fonts: "dyslexia" }
  },
  {
    id: 4,
    title: "Dyslexia",
    shortDescription: "",
    description: "It is estimated that 1 in 5 people worldwide have dyslexia, but many have not been diagnosed. This profile provides customization options that can help improve reading comprehension and fluency.",
    Icon: Dn,
    checked: !1,
    enable: !0,
    features: { noTransitions: !0, fonts: "dyslexia" }
  },
  {
    id: 5,
    title: "Visually-impaired",
    shortDescription: "",
    description: "There are a number of adjustments that can make websites easier to navigate and read for people with impaired vision. This profile provides suggestions that can be helpful for a variety of conditions.",
    Icon: An,
    checked: !1,
    enable: !0,
    // Bigger Text | Play animation | Legible font | Big Cursor | Tooltips! | High Saturation
    features: { bigCursor: !0, noTransitions: !0, textSize: 2, saturation: "high", fonts: "legible" }
  },
  {
    id: 6,
    title: "Cognitive & Learning",
    shortDescription: "Assists with reading & focusing",
    description: "Cognitive impairments and learning disabilities can have a profound effect on reading comprehension. The tools included in this profile can help improve reading experiences and help viewers identify relevant information.",
    Icon: qn,
    checked: !1,
    enable: !0,
    // Smart Contrast! | Bigger Text | Play Animation | Reading Guide | Tooltips!
    features: { textSize: 2, noTransitions: !0, readingGuide: !0 }
  },
  {
    id: 7,
    title: "Seizure & Epileptic",
    shortDescription: "Clear flashes & reduces color",
    description: "Flashing page elements, animations, and videos can sometimes trigger seizures in people with epilepsy and similar conditions. This profile provides a way to pause animations and other helpful customizations.",
    Icon: kn,
    checked: !1,
    enable: !0,
    // Play Animation | Low Saturation!
    features: { monochrome: !0, noTransitions: !0 }
  },
  {
    id: 8,
    title: "ADHD Friendly Profile",
    shortDescription: "More focus & fewer distractions",
    description: "A number of tools are available that can help visitors stay focused as they move through a webpage. The recommendations included in this profile may help alleviate distractions to improve reading comprehension.",
    Icon: Rn,
    checked: !1,
    enable: !0,
    // Play Animation | Reading Mask | Low saturation!
    features: { monochrome: !0, noTransitions: !0, readingGuide: !0 }
  }
], ki = ({ className: n }) => {
  const { t } = G(), s = Si.filter((i) => i.enable);
  return /* @__PURE__ */ r.jsx(_i, { className: F("widget-section", n), title: t("profile.section.title"), Icon: Et, children: /* @__PURE__ */ r.jsx("div", { className: "tk-cells-column", children: s.map(
    (i) => /* @__PURE__ */ r.jsx(xi, { profile: i }, i.id)
  ) }) });
};
function Q({
  featureKey: n,
  initValue: t = !1,
  className: s = null
}) {
  const { t: i } = G(), { getFeature: o, setFeatures: a } = pe(), f = V.features[n].label, m = V.features[n].Icon, d = V.global.featuresIconSize;
  z(() => {
    a({ [n]: t });
  }, [t]);
  const h = o(n), p = () => a({ [n]: !o(n) });
  return /* @__PURE__ */ r.jsx(
    Rt,
    {
      Icon: m,
      iconSize: d,
      label: i(f),
      isChecked: h,
      handleToggleChange: p,
      className: F("tk-feature-cell", h && "tk-active", s)
    }
  );
}
class wi {
  warn(t) {
    const s = "Accessibility: ";
    console.warn ? console.warn(s + t) : console.log(s + t);
  }
  getDataInitAttr(t) {
    return `data-init-${t.toLowerCase()}`;
  }
  // return height in percentage
  getElementLineHeightInPercent(t) {
    const s = getComputedStyle(t).fontSize, o = getComputedStyle(t).lineHeight.replace("px", ""), a = s.replace("px", "");
    return parseInt(o) * 100 / parseInt(a);
  }
  getFormattedDim(t) {
    t = String(t);
    const s = function(i, o) {
      return {
        size: i.substring(0, i.indexOf(o)),
        suffix: o
      };
    };
    if (t.indexOf("%") > -1)
      return s(t, "%");
    if (t.indexOf("px") > -1)
      return s(t, "px");
    if (t.indexOf("em") > -1)
      return s(t, "em");
    if (t.indexOf("rem") > -1)
      return s(t, "rem");
    if (t.indexOf("pt") > -1)
      return s(t, "pt");
    if (t === "auto")
      return s(t, "");
    throw Error(`Invalid dimension format ${t}`);
  }
}
class Ei {
  constructor(t = {}) {
    U(this, "_html");
    U(this, "_body");
    U(this, "_allElms");
    U(this, "_options");
    U(this, "options");
    U(this, "_initValues");
    U(this, "_defaultStateValues");
    U(this, "_sessionState");
    U(this, "_common");
    this._html = document.documentElement || document.getElementsByTagName("html")[0], this._body = document.body || document.getElementsByTagName("body")[0], this._allElms = document.querySelectorAll("body :not(#a11yRoot, #a11yRoot *, script, style)"), this._common = new wi(), this._options = this.defaultOptions, this.options = { ...this._options, ...t }, this._initValues = {
      html: {},
      body: {}
    }, this._defaultStateValues = {
      textSize: 0,
      textSpace: 0,
      lineHeight: 0,
      filter: {
        saturation: "default",
        invertColors: !1,
        grayscale: !1
      },
      underlineLinks: !1,
      bigCursor: !1,
      readingGuide: !1
    }, this._sessionState = {
      textSize: 0,
      textSpace: 0,
      lineHeight: 0,
      filter: {
        saturation: "default",
        invertColors: !1,
        grayscale: !1
      },
      underlineLinks: !1,
      bigCursor: !1,
      readingGuide: !1
    }, this.initData();
  }
  get defaultOptions() {
    return {
      textSizeMode: "PIXEL"
    };
  }
  get sessionState() {
    return this._sessionState;
  }
  set sessionState(t) {
    this._sessionState = t;
  }
  initData() {
    this.initFontSize(), this.initLineHeight(), this.initBg();
  }
  initFontSize() {
    if (this.options.textSizeMode === "EM") {
      const t = this._common.getFormattedDim(getComputedStyle(this._html).fontSize), s = this._common.getFormattedDim(getComputedStyle(this._body).fontSize);
      if (t && s) {
        const i = String(t.size / 16 * 100);
        this._initValues.html && (this._initValues.html.fontSize = `${i}%`), this._html.style.fontSize = `${i}%`;
      }
    }
  }
  initLineHeight() {
    const t = this._common.getElementLineHeightInPercent(this._html);
    this.options.textSizeMode === "EM" && t && (this._html.style.lineHeight = `${t}%`, this._initValues.html && (this._initValues.html.lineHeight = `${t}%`));
  }
  initBg() {
    this._html.style.backgroundColor = "rgba(255, 255, 255, 100)";
  }
  // fontSize | lineHeight | wordSpacing...........................................
  alterProperty(t, s = 0) {
    var o;
    const i = {
      fontSize: { PIXEL: { factor: 2, default: 100 }, EM: { factor: 10, default: 100 } },
      lineHeight: { PIXEL: { factor: 2, default: 100 }, EM: { factor: 10, default: 150 } },
      wordSpacing: { PIXEL: { factor: 1, default: 0 }, EM: { factor: 1, default: 0 } }
    };
    if (this.options.textSizeMode === "PIXEL" || ["wordSpacing"].includes(t))
      for (let a = 0; a < this._allElms.length; a++) {
        const f = getComputedStyle(this._allElms[a])[t];
        if (f && f.indexOf("px") > -1) {
          const m = this._common.getDataInitAttr(t);
          this._allElms[a].getAttribute(m) || this._allElms[a].setAttribute(m, f);
          const d = ((o = this._allElms[a].getAttribute(m)) == null ? void 0 : o.replace("px", "")) || f, h = parseInt(d) + s * i[t].PIXEL.factor;
          this._allElms[a].style[t] = `${String(h)}px`;
        }
      }
    else if (this.options.textSizeMode === "EM") {
      const f = 1 * i[t].EM.default + s * i[t].EM.factor;
      this._html.style[t] = `${f}%`;
    }
  }
  alterFilter(t, s) {
    this._sessionState.filter[t] = s;
    const i = this.getFilterValues();
    this.rootElementToggleClass(i.filters !== "", "tk-no-trans"), this._html.style.filter = i.filters, document.querySelector(".a11y-turnkey") && (document.querySelector(".a11y-turnkey").style.filter = i.invertFilter);
  }
  getFilterValues() {
    const t = [], s = [], i = {
      default: 1,
      low: 0.5,
      high: 3,
      desaturate: 0
    };
    return this._sessionState.filter.saturation !== this._defaultStateValues.filter.saturation && t.push(`saturate(${i[this._sessionState.filter.saturation]})`), this._sessionState.filter.invertColors !== this._defaultStateValues.filter.invertColors && (t.push(`invert(${this._sessionState.filter.invertColors ? "1" : "0"})`), s.push(`invert(${this._sessionState.filter.invertColors ? "1" : "0"})`)), this._sessionState.filter.grayscale !== this._defaultStateValues.filter.grayscale && t.push(`grayscale(${this._sessionState.filter.grayscale ? "1" : "0"})`), {
      filters: t.join(" "),
      invertFilter: s.join(" ")
    };
  }
  enableReadingGuide(t = !1) {
    let s = document.querySelector(".access-read-guide-bar");
    s || (s = document.createElement("div"), s.classList.add("access-read-guide-bar"), document.body.appendChild(s)), s.style.display = t ? "block" : "none";
    const i = (o) => {
      if (s) {
        const a = o.pageY + 2;
        s.style.top = a + "px";
      }
    };
    t ? document.addEventListener("mousemove", i) : document.removeEventListener("mousemove", i);
  }
  enableBigCursor(t = !1) {
    this.rootElementToggleClass(t, "_access_cursor");
  }
  enableEnableDyslexie(t = !1) {
    this.rootElementToggleClass(t, "tk-dy");
  }
  enableHighlightTitles(t = !1) {
    this.rootElementToggleClass(t, "tk-hltl");
  }
  enableHighlightLinks(t = !1) {
    this.rootElementToggleClass(t, "tk-hllk");
  }
  enableHiddenImages(t = !1) {
    this.rootElementToggleClass(t, "tk-hidden-img");
  }
  enableNoTransitions(t = !1) {
    this.rootElementToggleClass(t, "tk-no-trans");
  }
  rootElementToggleClass(t = !1, s) {
    t ? this._html.classList.add(s) : this._html.classList.remove(s);
  }
  alterFonts(t) {
    const s = ["tk-fonts--dyslexia", "tk-fonts--legible"];
    this.useOneOfClassList(`tk-fonts--${t}`, s);
  }
  textAlignSwitchClass(t) {
    const s = ["tk-align-initial", "tk-align-justify", "tk-align-left", "tk-align-right", "tk-align-center"];
    this.useOneOfClassList(`tk-align-${t}`, s);
  }
  useOneOfClassList(t, s) {
    this._html.classList.remove(...s), t && this._html.classList.add(t);
  }
}
function se({
  featureKey: n,
  steps: t,
  initValue: s = null,
  className: i = null
}) {
  const { t: o } = G(), { getFeature: a, setFeatures: f } = pe(), m = V.features[n].label, d = V.features[n].Icon, h = V.global.featuresIconSize;
  z(() => {
    f({ [n]: s });
  }, [s]);
  const p = t.find((c) => c.value === a(n)) || null, v = (c) => c < t.length - 1 ? t[c + 1] : t[0], b = (c) => t.findIndex((g) => g.value === c), x = s && p ? p.value == s : !1, k = () => {
    const c = a(n);
    if ((c ?? null) === null)
      f({ [n]: t[0].value });
    else {
      const g = b(c);
      f({ [n]: v(g).value });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: F("tk-feature-cell", x && "tk-active", i), children: /* @__PURE__ */ r.jsx(
    Tt,
    {
      Icon: d,
      iconSize: h,
      label: o(m),
      steps: t,
      selectedStep: p,
      isActive: x,
      next: k,
      className: "tk-steps-controller--vertical-demo"
    }
  ) });
}
const ji = (window == null ? void 0 : window.AccessibilityTurnkeyOptions) || {}, H = new Ei(ji), Ci = () => {
  const { settings: n } = ge(), [t, s] = fe(!1);
  z(() => {
    s(n.oversizedWidget);
  }, [n.oversizedWidget]);
  const { features: i } = pe();
  z(() => {
    H.alterProperty("fontSize", i.textSize);
  }, [i.textSize]), z(() => {
    H.alterProperty("lineHeight", i.lineHeight);
  }, [i.lineHeight]), z(() => {
    H.alterProperty("wordSpacing", i.wordSpacing);
  }, [i.wordSpacing]), z(() => {
    H.enableHighlightTitles(i.highlightTitles);
  }, [i.highlightTitles]), z(() => {
    H.enableHighlightLinks(i.highlightLinks);
  }, [i.highlightLinks]), z(() => {
    H.textAlignSwitchClass(i.textAlign);
  }, [i.textAlign]), z(() => {
    H.enableHiddenImages(i.hiddenImages);
  }, [i.hiddenImages]), z(() => {
    H.alterFilter("invertColors", i.invertColors);
  }, [i.invertColors]), z(() => {
    H.alterFilter("grayscale", i.monochrome);
  }, [i.monochrome]), z(() => {
    H.alterFilter("saturation", i.saturation || "default");
  }, [i.saturation]), z(() => {
    H.enableReadingGuide(i.readingGuide);
  }, [i.readingGuide]), z(() => {
    H.alterFonts(i.fonts);
  }, [i.fonts]), z(() => {
    H.enableNoTransitions(i.noTransitions);
  }, [i.noTransitions]), z(() => {
    H.enableBigCursor(i.bigCursor);
  }, [i.bigCursor]);
  const o = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], a = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], f = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], m = [
    { name: "Left", value: "left", Icon: vn },
    { name: "Right", value: "right", Icon: yn },
    { name: "Center", value: "center", Icon: gn },
    { name: "Justify", value: "justify", Icon: mn }
  ], d = [
    { name: "Low", value: "low" },
    { name: "High", value: "high" },
    { name: "Desaturate", value: "desaturate" },
    { name: "Default", value: "default" }
  ], h = [
    { name: "Dyslexia", value: "dyslexia" },
    { name: "Legible", value: "legible" }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "widget-section", children: /* @__PURE__ */ r.jsxs("div", { className: F("tk-grid", t && "tk-grid--xl"), children: [
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "textSize",
        steps: o,
        initValue: i.textSize
      }
    ),
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "lineHeight",
        steps: a,
        initValue: i.lineHeight
      }
    ),
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "wordSpacing",
        steps: f,
        initValue: i.wordSpacing
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "highlightTitles",
        initValue: i.highlightTitles,
        className: "compact"
      }
    ),
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "textAlign",
        steps: m,
        initValue: i.textAlign
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "highlightLinks",
        initValue: i.highlightLinks,
        className: "compact"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "invertColors",
        initValue: i.invertColors,
        className: "compact"
      }
    ),
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "saturation",
        initValue: i.saturation,
        steps: d,
        className: "tk-span-2"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "noTransitions",
        initValue: i.noTransitions,
        className: "compact"
      }
    ),
    /* @__PURE__ */ r.jsx(
      se,
      {
        featureKey: "fonts",
        initValue: i.fonts,
        steps: h
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "hiddenImages",
        initValue: i.hiddenImages,
        className: "compact"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "bigCursor",
        initValue: i.bigCursor,
        className: "compact tk-span-2"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Q,
      {
        featureKey: "readingGuide",
        initValue: i.readingGuide,
        className: "compact"
      }
    )
  ] }) });
}, Li = ({ enableProfiles: n = !0 }) => {
  const { t } = G();
  return /* @__PURE__ */ r.jsxs("div", { id: "mainView", className: "view-container view-container--full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "widget__body__title", children: t("global.title") }),
      /* @__PURE__ */ r.jsx("p", { children: "Adapt this site according to your preferences." })
    ] }),
    n && /* @__PURE__ */ r.jsx(ki, {}),
    /* @__PURE__ */ r.jsx(Ci, {})
  ] });
}, Ti = "#1e74e9", Ri = "#f2f7fa", Oi = "#EFEFEF", Ai = "#FFFFFF", Ii = "#100F0F", Z = {
  primaryColor: Ti,
  secondaryColor: Ri,
  tertiaryColor: Oi,
  quaternaryColor: Ai,
  textColor: Ii,
  xPosEntrypoint: 12,
  yPosEntrypoint: 12
}, Mi = ({
  primaryColor: n = Z.primaryColor,
  secondaryColor: t = Z.secondaryColor,
  tertiaryColor: s = Z.tertiaryColor,
  quaternaryColor: i = Z.quaternaryColor,
  textColor: o = Z.textColor,
  xPosEntrypoint: a = Z.xPosEntrypoint,
  yPosEntrypoint: f = Z.yPosEntrypoint
}) => {
  document.documentElement.style.setProperty("--tk-primary-color", n), document.documentElement.style.setProperty("--tk-secondary-color", t), document.documentElement.style.setProperty("--tk-tertiary-color", s), document.documentElement.style.setProperty("--tk-quaternary-color", i), document.documentElement.style.setProperty("--tk-text-color", o), document.documentElement.style.setProperty("--tk-entrypoint-x", `${a}px`), document.documentElement.style.setProperty("--tk-entrypoint-y", `${f}px`);
};
function zi({
  enableProfiles: n = !0,
  enableAboutView: t = !0,
  theme: s = Z
}) {
  an(() => Mi(s), [s]);
  const { locale: i, t: o, isRTL: a } = G(), f = Ve.find((_) => _.key === i), { settings: m } = ge(), d = V.global.layoutIconSize, [h, p] = fe(!1), [v, b] = fe(!1), [x, k] = fe("main"), { isSomeFeaturesSelected: c, reset: g } = pe(), j = () => {
    g();
  }, y = () => ({
    main: /* @__PURE__ */ r.jsx(Li, { enableProfiles: n }),
    translater: /* @__PURE__ */ r.jsx(mi, {}),
    settings: /* @__PURE__ */ r.jsx(bi, {}),
    about: /* @__PURE__ */ r.jsx(vi, {})
  })[x];
  return /* @__PURE__ */ r.jsxs("div", { className: F("a11y-turnkey", v && "left-display", a() && "tk-rtl"), children: [
    /* @__PURE__ */ r.jsxs("button", { className: "a11y-turnkey__entrypoint", onClick: () => p((_) => !_), children: [
      /* @__PURE__ */ r.jsx(Vn, { color: "white", size: 32 }),
      c() && /* @__PURE__ */ r.jsx("span", { className: "a11y-turnkey__entrypoint__ischeck", children: /* @__PURE__ */ r.jsx(En, { size: 12, color: "#1e74e9" }) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: F("overlay", m.displayAsAside && "overlay--aside", h && "overlay--active"), children: /* @__PURE__ */ r.jsxs("div", { className: F("widget", m.oversizedWidget && "widget--xl", m.widgetFamilyFont && `use-${m.widgetFamilyFont}`, h && "widget--active"), children: [
      /* @__PURE__ */ r.jsxs("div", { className: "widget__header", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "tk-center-align jc-left", children: [
          x !== "main" && /* @__PURE__ */ r.jsxs("button", { className: "tk-btn", onClick: () => k("main"), children: [
            (f == null ? void 0 : f.direction) === "rtl" ? /* @__PURE__ */ r.jsx(_n, { size: d }) : /* @__PURE__ */ r.jsx(bn, { size: d }),
            /* @__PURE__ */ r.jsx("span", { children: o("global.back") })
          ] }),
          x !== "translater" && f && /* @__PURE__ */ r.jsxs("div", { className: "tk-btn", onClick: () => k("translater"), children: [
            f.Flag && /* @__PURE__ */ r.jsx(f.Flag, {}),
            /* @__PURE__ */ r.jsx("span", { children: f.name })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "tk-center-align jc-right", children: [
          /* @__PURE__ */ r.jsx("button", { className: "tk-btn", onClick: () => b((_) => !_), children: /* @__PURE__ */ r.jsx(xn, { size: d }) }),
          /* @__PURE__ */ r.jsx("button", { className: "tk-btn", onClick: () => k("settings"), children: /* @__PURE__ */ r.jsx(Bn, { size: d }) }),
          /* @__PURE__ */ r.jsx("button", { className: "tk-btn", onClick: () => p((_) => !_), children: /* @__PURE__ */ r.jsx(Gn, { size: d }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "widget__body", children: y() }),
      /* @__PURE__ */ r.jsxs("div", { className: "widget__footer", children: [
        /* @__PURE__ */ r.jsx("div", { className: "tk-center-align jc-left", children: x === "main" && /* @__PURE__ */ r.jsxs("button", { className: "tk-btn", onClick: j, children: [
          /* @__PURE__ */ r.jsx(Wn, { size: d }),
          /* @__PURE__ */ r.jsx("span", { children: o("global.resetAllSettings") })
        ] }) }),
        /* @__PURE__ */ r.jsx("div", { className: "tk-center-align jc-right", children: t && /* @__PURE__ */ r.jsx("button", { className: "tk-btn", onClick: () => k("about"), children: /* @__PURE__ */ r.jsx(Nn, { size: d }) }) })
      ] })
    ] }) })
  ] });
}
const kt = "a11yRoot", wt = {
  appSettings: {
    enableProfiles: !0,
    enableAboutView: !0,
    theme: {
      ...Z
    }
  }
}, Pi = (n) => {
  const t = document.querySelector(`#${kt}`);
  t && t.remove();
  const s = {
    appSettings: {
      ...wt.appSettings,
      ...n && n.appSettings,
      theme: {
        ...wt.appSettings.theme,
        ...n && n.appSettings.theme
      }
    }
  };
  s && (window.AccessibilityTurnkeyOptions = s);
  const i = document.createElement("div");
  i.setAttribute("id", kt), document.body.appendChild(i), de.createRoot(i).render(/* @__PURE__ */ r.jsx(zi, { ...s.appSettings }));
};
export {
  zi as default,
  Pi as loadAccessibilityTurnkey
};
