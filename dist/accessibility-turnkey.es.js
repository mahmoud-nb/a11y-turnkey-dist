var jk = Object.defineProperty;
var Fk = (x, C, S) => C in x ? jk(x, C, { enumerable: !0, configurable: !0, writable: !0, value: S }) : x[C] = S;
var eo = (x, C, S) => (Fk(x, typeof C != "symbol" ? C + "" : C, S), S);
function Bx(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var M1 = { exports: {} }, rv = {}, Xm = { exports: {} }, Lt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gx;
function Hk() {
  if (gx)
    return Lt;
  gx = 1;
  var x = Symbol.for("react.element"), C = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), g = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), I = Symbol.iterator;
  function Z(w) {
    return w === null || typeof w != "object" ? null : (w = I && w[I] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, de = Object.assign, ee = {};
  function ae(w, J, Ce) {
    this.props = w, this.context = J, this.refs = ee, this.updater = Ce || q;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(w, J) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, J, "setState");
  }, ae.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Xe() {
  }
  Xe.prototype = ae.prototype;
  function pe(w, J, Ce) {
    this.props = w, this.context = J, this.refs = ee, this.updater = Ce || q;
  }
  var oe = pe.prototype = new Xe();
  oe.constructor = pe, de(oe, ae.prototype), oe.isPureReactComponent = !0;
  var be = Array.isArray, Ee = Object.prototype.hasOwnProperty, De = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function gt(w, J, Ce) {
    var rt, Ze = {}, wt = null, ft = null;
    if (J != null)
      for (rt in J.ref !== void 0 && (ft = J.ref), J.key !== void 0 && (wt = "" + J.key), J)
        Ee.call(J, rt) && !Le.hasOwnProperty(rt) && (Ze[rt] = J[rt]);
    var St = arguments.length - 2;
    if (St === 1)
      Ze.children = Ce;
    else if (1 < St) {
      for (var dt = Array(St), It = 0; It < St; It++)
        dt[It] = arguments[It + 2];
      Ze.children = dt;
    }
    if (w && w.defaultProps)
      for (rt in St = w.defaultProps, St)
        Ze[rt] === void 0 && (Ze[rt] = St[rt]);
    return { $$typeof: x, type: w, key: wt, ref: ft, props: Ze, _owner: De.current };
  }
  function bt(w, J) {
    return { $$typeof: x, type: w.type, key: J, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Mt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === x;
  }
  function xt(w) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(Ce) {
      return J[Ce];
    });
  }
  var Jt = /\/+/g;
  function Be(w, J) {
    return typeof w == "object" && w !== null && w.key != null ? xt("" + w.key) : J.toString(36);
  }
  function nt(w, J, Ce, rt, Ze) {
    var wt = typeof w;
    (wt === "undefined" || wt === "boolean") && (w = null);
    var ft = !1;
    if (w === null)
      ft = !0;
    else
      switch (wt) {
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case x:
            case C:
              ft = !0;
          }
      }
    if (ft)
      return ft = w, Ze = Ze(ft), w = rt === "" ? "." + Be(ft, 0) : rt, be(Ze) ? (Ce = "", w != null && (Ce = w.replace(Jt, "$&/") + "/"), nt(Ze, J, Ce, "", function(It) {
        return It;
      })) : Ze != null && (Mt(Ze) && (Ze = bt(Ze, Ce + (!Ze.key || ft && ft.key === Ze.key ? "" : ("" + Ze.key).replace(Jt, "$&/") + "/") + w)), J.push(Ze)), 1;
    if (ft = 0, rt = rt === "" ? "." : rt + ":", be(w))
      for (var St = 0; St < w.length; St++) {
        wt = w[St];
        var dt = rt + Be(wt, St);
        ft += nt(wt, J, Ce, dt, Ze);
      }
    else if (dt = Z(w), typeof dt == "function")
      for (w = dt.call(w), St = 0; !(wt = w.next()).done; )
        wt = wt.value, dt = rt + Be(wt, St++), ft += nt(wt, J, Ce, dt, Ze);
    else if (wt === "object")
      throw J = String(w), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function jt(w, J, Ce) {
    if (w == null)
      return w;
    var rt = [], Ze = 0;
    return nt(w, rt, "", "", function(wt) {
      return J.call(Ce, wt, Ze++);
    }), rt;
  }
  function yt(w) {
    if (w._status === -1) {
      var J = w._result;
      J = J(), J.then(function(Ce) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = Ce);
      }, function(Ce) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = Ce);
      }), w._status === -1 && (w._status = 0, w._result = J);
    }
    if (w._status === 1)
      return w._result.default;
    throw w._result;
  }
  var Oe = { current: null }, fe = { transition: null }, He = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: fe, ReactCurrentOwner: De };
  return Lt.Children = { map: jt, forEach: function(w, J, Ce) {
    jt(w, function() {
      J.apply(this, arguments);
    }, Ce);
  }, count: function(w) {
    var J = 0;
    return jt(w, function() {
      J++;
    }), J;
  }, toArray: function(w) {
    return jt(w, function(J) {
      return J;
    }) || [];
  }, only: function(w) {
    if (!Mt(w))
      throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Lt.Component = ae, Lt.Fragment = S, Lt.Profiler = K, Lt.PureComponent = pe, Lt.StrictMode = k, Lt.Suspense = Q, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, Lt.cloneElement = function(w, J, Ce) {
    if (w == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var rt = de({}, w.props), Ze = w.key, wt = w.ref, ft = w._owner;
    if (J != null) {
      if (J.ref !== void 0 && (wt = J.ref, ft = De.current), J.key !== void 0 && (Ze = "" + J.key), w.type && w.type.defaultProps)
        var St = w.type.defaultProps;
      for (dt in J)
        Ee.call(J, dt) && !Le.hasOwnProperty(dt) && (rt[dt] = J[dt] === void 0 && St !== void 0 ? St[dt] : J[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1)
      rt.children = Ce;
    else if (1 < dt) {
      St = Array(dt);
      for (var It = 0; It < dt; It++)
        St[It] = arguments[It + 2];
      rt.children = St;
    }
    return { $$typeof: x, type: w.type, key: Ze, ref: wt, props: rt, _owner: ft };
  }, Lt.createContext = function(w) {
    return w = { $$typeof: g, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: P, _context: w }, w.Consumer = w;
  }, Lt.createElement = gt, Lt.createFactory = function(w) {
    var J = gt.bind(null, w);
    return J.type = w, J;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(w) {
    return { $$typeof: ve, render: w };
  }, Lt.isValidElement = Mt, Lt.lazy = function(w) {
    return { $$typeof: se, _payload: { _status: -1, _result: w }, _init: yt };
  }, Lt.memo = function(w, J) {
    return { $$typeof: W, type: w, compare: J === void 0 ? null : J };
  }, Lt.startTransition = function(w) {
    var J = fe.transition;
    fe.transition = {};
    try {
      w();
    } finally {
      fe.transition = J;
    }
  }, Lt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Lt.useCallback = function(w, J) {
    return Oe.current.useCallback(w, J);
  }, Lt.useContext = function(w) {
    return Oe.current.useContext(w);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(w) {
    return Oe.current.useDeferredValue(w);
  }, Lt.useEffect = function(w, J) {
    return Oe.current.useEffect(w, J);
  }, Lt.useId = function() {
    return Oe.current.useId();
  }, Lt.useImperativeHandle = function(w, J, Ce) {
    return Oe.current.useImperativeHandle(w, J, Ce);
  }, Lt.useInsertionEffect = function(w, J) {
    return Oe.current.useInsertionEffect(w, J);
  }, Lt.useLayoutEffect = function(w, J) {
    return Oe.current.useLayoutEffect(w, J);
  }, Lt.useMemo = function(w, J) {
    return Oe.current.useMemo(w, J);
  }, Lt.useReducer = function(w, J, Ce) {
    return Oe.current.useReducer(w, J, Ce);
  }, Lt.useRef = function(w) {
    return Oe.current.useRef(w);
  }, Lt.useState = function(w) {
    return Oe.current.useState(w);
  }, Lt.useSyncExternalStore = function(w, J, Ce) {
    return Oe.current.useSyncExternalStore(w, J, Ce);
  }, Lt.useTransition = function() {
    return Oe.current.useTransition();
  }, Lt.version = "18.2.0", Lt;
}
var lv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
lv.exports;
var Sx;
function Vk() {
  return Sx || (Sx = 1, function(x, C) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = "18.2.0", k = Symbol.for("react.element"), K = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), W = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), ae = Symbol.iterator, Xe = "@@iterator";
      function pe(h) {
        if (h === null || typeof h != "object")
          return null;
        var R = ae && h[ae] || h[Xe];
        return typeof R == "function" ? R : null;
      }
      var oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {
        transition: null
      }, Ee = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, De = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Le = {}, gt = null;
      function bt(h) {
        gt = h;
      }
      Le.setExtraStackFrame = function(h) {
        gt = h;
      }, Le.getCurrentStack = null, Le.getStackAddendum = function() {
        var h = "";
        gt && (h += gt);
        var R = Le.getCurrentStack;
        return R && (h += R() || ""), h;
      };
      var Mt = !1, xt = !1, Jt = !1, Be = !1, nt = !1, jt = {
        ReactCurrentDispatcher: oe,
        ReactCurrentBatchConfig: be,
        ReactCurrentOwner: De
      };
      jt.ReactDebugCurrentFrame = Le, jt.ReactCurrentActQueue = Ee;
      function yt(h) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), B = 1; B < R; B++)
            F[B - 1] = arguments[B];
          fe("warn", h, F);
        }
      }
      function Oe(h) {
        {
          for (var R = arguments.length, F = new Array(R > 1 ? R - 1 : 0), B = 1; B < R; B++)
            F[B - 1] = arguments[B];
          fe("error", h, F);
        }
      }
      function fe(h, R, F) {
        {
          var B = jt.ReactDebugCurrentFrame, ue = B.getStackAddendum();
          ue !== "" && (R += "%s", F = F.concat([ue]));
          var Qe = F.map(function(Se) {
            return String(Se);
          });
          Qe.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, Qe);
        }
      }
      var He = {};
      function w(h, R) {
        {
          var F = h.constructor, B = F && (F.displayName || F.name) || "ReactClass", ue = B + "." + R;
          if (He[ue])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, B), He[ue] = !0;
        }
      }
      var J = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, R, F) {
          w(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, R, F, B) {
          w(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, R, F, B) {
          w(h, "setState");
        }
      }, Ce = Object.assign, rt = {};
      Object.freeze(rt);
      function Ze(h, R, F) {
        this.props = h, this.context = R, this.refs = rt, this.updater = F || J;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(h, R) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, R, "setState");
      }, Ze.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var wt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ft = function(h, R) {
          Object.defineProperty(Ze.prototype, h, {
            get: function() {
              yt("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var St in wt)
          wt.hasOwnProperty(St) && ft(St, wt[St]);
      }
      function dt() {
      }
      dt.prototype = Ze.prototype;
      function It(h, R, F) {
        this.props = h, this.context = R, this.refs = rt, this.updater = F || J;
      }
      var Ir = It.prototype = new dt();
      Ir.constructor = It, Ce(Ir, Ze.prototype), Ir.isPureReactComponent = !0;
      function mr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var $r = Array.isArray;
      function yn(h) {
        return $r(h);
      }
      function Gn(h) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, F = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return F;
        }
      }
      function Hn(h) {
        try {
          return Vn(h), !1;
        } catch {
          return !0;
        }
      }
      function Vn(h) {
        return "" + h;
      }
      function Dn(h) {
        if (Hn(h))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gn(h)), Vn(h);
      }
      function Yr(h, R, F) {
        var B = h.displayName;
        if (B)
          return B;
        var ue = R.displayName || R.name || "";
        return ue !== "" ? F + "(" + ue + ")" : F;
      }
      function Wr(h) {
        return h.displayName || "Context";
      }
      function Qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case P:
            return "Fragment";
          case K:
            return "Portal";
          case ve:
            return "Profiler";
          case g:
            return "StrictMode";
          case I:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case W:
              var R = h;
              return Wr(R) + ".Consumer";
            case Q:
              var F = h;
              return Wr(F._context) + ".Provider";
            case se:
              return Yr(h, h.render, "ForwardRef");
            case q:
              var B = h.displayName || null;
              return B !== null ? B : Qn(h.type) || "Memo";
            case de: {
              var ue = h, Qe = ue._payload, Se = ue._init;
              try {
                return Qn(Se(Qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var yr = Object.prototype.hasOwnProperty, Gr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, pa, rr;
      rr = {};
      function Qr(h) {
        if (yr.call(h, "ref")) {
          var R = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function gn(h) {
        if (yr.call(h, "key")) {
          var R = Object.getOwnPropertyDescriptor(h, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function _r(h, R) {
        var F = function() {
          gr || (gr = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: F,
          configurable: !0
        });
      }
      function di(h, R) {
        var F = function() {
          pa || (pa = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        F.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: F,
          configurable: !0
        });
      }
      function va(h) {
        if (typeof h.ref == "string" && De.current && h.__self && De.current.stateNode !== h.__self) {
          var R = Qn(De.current.type);
          rr[R] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, h.ref), rr[R] = !0);
        }
      }
      var he = function(h, R, F, B, ue, Qe, Se) {
        var We = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: k,
          // Built-in properties that belong on the element
          type: h,
          key: R,
          ref: F,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: Qe
        };
        return We._store = {}, Object.defineProperty(We._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(We, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: B
        }), Object.defineProperty(We, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
      };
      function Ve(h, R, F) {
        var B, ue = {}, Qe = null, Se = null, We = null, ht = null;
        if (R != null) {
          Qr(R) && (Se = R.ref, va(R)), gn(R) && (Dn(R.key), Qe = "" + R.key), We = R.__self === void 0 ? null : R.__self, ht = R.__source === void 0 ? null : R.__source;
          for (B in R)
            yr.call(R, B) && !Gr.hasOwnProperty(B) && (ue[B] = R[B]);
        }
        var At = arguments.length - 2;
        if (At === 1)
          ue.children = F;
        else if (At > 1) {
          for (var nn = Array(At), Zt = 0; Zt < At; Zt++)
            nn[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(nn), ue.children = nn;
        }
        if (h && h.defaultProps) {
          var rn = h.defaultProps;
          for (B in rn)
            ue[B] === void 0 && (ue[B] = rn[B]);
        }
        if (Qe || Se) {
          var sn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Qe && _r(ue, sn), Se && di(ue, sn);
        }
        return he(h, Qe, Se, We, ht, De.current, ue);
      }
      function pt(h, R) {
        var F = he(h.type, R, h.ref, h._self, h._source, h._owner, h.props);
        return F;
      }
      function Pt(h, R, F) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var B, ue = Ce({}, h.props), Qe = h.key, Se = h.ref, We = h._self, ht = h._source, At = h._owner;
        if (R != null) {
          Qr(R) && (Se = R.ref, At = De.current), gn(R) && (Dn(R.key), Qe = "" + R.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (B in R)
            yr.call(R, B) && !Gr.hasOwnProperty(B) && (R[B] === void 0 && nn !== void 0 ? ue[B] = nn[B] : ue[B] = R[B]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          ue.children = F;
        else if (Zt > 1) {
          for (var rn = Array(Zt), sn = 0; sn < Zt; sn++)
            rn[sn] = arguments[sn + 2];
          ue.children = rn;
        }
        return he(h.type, Qe, Se, We, ht, At, ue);
      }
      function $t(h) {
        return typeof h == "object" && h !== null && h.$$typeof === k;
      }
      var On = ".", Sn = ":";
      function Sr(h) {
        var R = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, B = h.replace(R, function(ue) {
          return F[ue];
        });
        return "$" + B;
      }
      var Kt = !1, kr = /\/+/g;
      function Yt(h) {
        return h.replace(kr, "$&/");
      }
      function Wt(h, R) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), Sr("" + h.key)) : R.toString(36);
      }
      function Ja(h, R, F, B, ue) {
        var Qe = typeof h;
        (Qe === "undefined" || Qe === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (Qe) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case k:
                case K:
                  Se = !0;
              }
          }
        if (Se) {
          var We = h, ht = ue(We), At = B === "" ? On + Wt(We, 0) : B;
          if (yn(ht)) {
            var nn = "";
            At != null && (nn = Yt(At) + "/"), Ja(ht, R, nn, "", function(Kf) {
              return Kf;
            });
          } else
            ht != null && ($t(ht) && (ht.key && (!We || We.key !== ht.key) && Dn(ht.key), ht = pt(
              ht,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ht.key && (!We || We.key !== ht.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Yt("" + ht.key) + "/"
              ) : "") + At
            )), R.push(ht));
          return 1;
        }
        var Zt, rn, sn = 0, Tt = B === "" ? On : B + Sn;
        if (yn(h))
          for (var ji = 0; ji < h.length; ji++)
            Zt = h[ji], rn = Tt + Wt(Zt, ji), sn += Ja(Zt, R, F, rn, ue);
        else {
          var ou = pe(h);
          if (typeof ou == "function") {
            var is = h;
            ou === is.entries && (Kt || yt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var Xf = ou.call(is), ri, ls = 0; !(ri = Xf.next()).done; )
              Zt = ri.value, rn = Tt + Wt(Zt, ls++), sn += Ja(Zt, R, F, rn, ue);
          } else if (Qe === "object") {
            var os = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return sn;
      }
      function Da(h, R, F) {
        if (h == null)
          return h;
        var B = [], ue = 0;
        return Ja(h, B, "", "", function(Qe) {
          return R.call(F, Qe, ue++);
        }), B;
      }
      function cl(h) {
        var R = 0;
        return Da(h, function() {
          R++;
        }), R;
      }
      function no(h, R, F) {
        Da(h, function() {
          R.apply(this, arguments);
        }, F);
      }
      function qo(h) {
        return Da(h, function(R) {
          return R;
        }) || [];
      }
      function zi(h) {
        if (!$t(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function fl(h) {
        var R = {
          $$typeof: W,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        R.Provider = {
          $$typeof: Q,
          _context: R
        };
        var F = !1, B = !1, ue = !1;
        {
          var Qe = {
            $$typeof: W,
            _context: R
          };
          Object.defineProperties(Qe, {
            Provider: {
              get: function() {
                return B || (B = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(Se) {
                R.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(Se) {
                R._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(Se) {
                R._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(Se) {
                R._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(Se) {
                ue || (yt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), ue = !0);
              }
            }
          }), R.Consumer = Qe;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var ha = -1, pi = 0, ma = 1, vi = 2;
      function Dr(h) {
        if (h._status === ha) {
          var R = h._result, F = R();
          if (F.then(function(Qe) {
            if (h._status === pi || h._status === ha) {
              var Se = h;
              Se._status = ma, Se._result = Qe;
            }
          }, function(Qe) {
            if (h._status === pi || h._status === ha) {
              var Se = h;
              Se._status = vi, Se._result = Qe;
            }
          }), h._status === ha) {
            var B = h;
            B._status = pi, B._result = F;
          }
        }
        if (h._status === ma) {
          var ue = h._result;
          return ue === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ue), "default" in ue || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ue), ue.default;
        } else
          throw h._result;
      }
      function ya(h) {
        var R = {
          // We use these fields to store the result.
          _status: ha,
          _result: h
        }, F = {
          $$typeof: de,
          _payload: R,
          _init: Dr
        };
        {
          var B, ue;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return B;
              },
              set: function(Qe) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = Qe, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ue;
              },
              set: function(Qe) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ue = Qe, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function hi(h) {
        h != null && h.$$typeof === q ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Oe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: se,
          render: h
        };
        {
          var F;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(B) {
              F = B, !h.name && !h.displayName && (h.displayName = B);
            }
          });
        }
        return R;
      }
      var b;
      b = Symbol.for("react.module.reference");
      function re(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === P || h === ve || nt || h === g || h === I || h === Z || Be || h === ee || Mt || xt || Jt || typeof h == "object" && h !== null && (h.$$typeof === de || h.$$typeof === q || h.$$typeof === Q || h.$$typeof === W || h.$$typeof === se || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === b || h.getModuleId !== void 0));
      }
      function ge(h, R) {
        re(h) || Oe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var F = {
          $$typeof: q,
          type: h,
          compare: R === void 0 ? null : R
        };
        {
          var B;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(ue) {
              B = ue, !h.name && !h.displayName && (h.displayName = ue);
            }
          });
        }
        return F;
      }
      function we() {
        var h = oe.current;
        return h === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ot(h) {
        var R = we();
        if (h._context !== void 0) {
          var F = h._context;
          F.Consumer === h ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === h && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(h);
      }
      function _t(h) {
        var R = we();
        return R.useState(h);
      }
      function ut(h, R, F) {
        var B = we();
        return B.useReducer(h, R, F);
      }
      function $e(h) {
        var R = we();
        return R.useRef(h);
      }
      function zn(h, R) {
        var F = we();
        return F.useEffect(h, R);
      }
      function on(h, R) {
        var F = we();
        return F.useInsertionEffect(h, R);
      }
      function un(h, R) {
        var F = we();
        return F.useLayoutEffect(h, R);
      }
      function ar(h, R) {
        var F = we();
        return F.useCallback(h, R);
      }
      function mi(h, R) {
        var F = we();
        return F.useMemo(h, R);
      }
      function Xo(h, R, F) {
        var B = we();
        return B.useImperativeHandle(h, R, F);
      }
      function Nt(h, R) {
        {
          var F = we();
          return F.useDebugValue(h, R);
        }
      }
      function Qf() {
        var h = we();
        return h.useTransition();
      }
      function ei(h) {
        var R = we();
        return R.useDeferredValue(h);
      }
      function vt() {
        var h = we();
        return h.useId();
      }
      function yi(h, R, F) {
        var B = we();
        return B.useSyncExternalStore(h, R, F);
      }
      var dl = 0, Ko, pl, qr, ts, Or, ns, rs;
      function lc() {
      }
      lc.__reactDisabledLog = !0;
      function Zo() {
        {
          if (dl === 0) {
            Ko = console.log, pl = console.info, qr = console.warn, ts = console.error, Or = console.group, ns = console.groupCollapsed, rs = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: lc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          dl++;
        }
      }
      function vl() {
        {
          if (dl--, dl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ce({}, h, {
                value: Ko
              }),
              info: Ce({}, h, {
                value: pl
              }),
              warn: Ce({}, h, {
                value: qr
              }),
              error: Ce({}, h, {
                value: ts
              }),
              group: Ce({}, h, {
                value: Or
              }),
              groupCollapsed: Ce({}, h, {
                value: ns
              }),
              groupEnd: Ce({}, h, {
                value: rs
              })
            });
          }
          dl < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = jt.ReactCurrentDispatcher, Lr;
      function hl(h, R, F) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (ue) {
              var B = ue.stack.trim().match(/\n( *(at )?)/);
              Lr = B && B[1] || "";
            }
          return `
` + Lr + h;
        }
      }
      var ml = !1, yl;
      {
        var Jo = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new Jo();
      }
      function eu(h, R) {
        if (!h || ml)
          return "";
        {
          var F = yl.get(h);
          if (F !== void 0)
            return F;
        }
        var B;
        ml = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Qe;
        Qe = ti.current, ti.current = null, Zo();
        try {
          if (R) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (Tt) {
                B = Tt;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (Tt) {
                B = Tt;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tt) {
              B = Tt;
            }
            h();
          }
        } catch (Tt) {
          if (Tt && B && typeof Tt.stack == "string") {
            for (var We = Tt.stack.split(`
`), ht = B.stack.split(`
`), At = We.length - 1, nn = ht.length - 1; At >= 1 && nn >= 0 && We[At] !== ht[nn]; )
              nn--;
            for (; At >= 1 && nn >= 0; At--, nn--)
              if (We[At] !== ht[nn]) {
                if (At !== 1 || nn !== 1)
                  do
                    if (At--, nn--, nn < 0 || We[At] !== ht[nn]) {
                      var Zt = `
` + We[At].replace(" at new ", " at ");
                      return h.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, Zt), Zt;
                    }
                  while (At >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          ml = !1, ti.current = Qe, vl(), Error.prepareStackTrace = ue;
        }
        var rn = h ? h.displayName || h.name : "", sn = rn ? hl(rn) : "";
        return typeof h == "function" && yl.set(h, sn), sn;
      }
      function Ai(h, R, F) {
        return eu(h, !1);
      }
      function qf(h) {
        var R = h.prototype;
        return !!(R && R.isReactComponent);
      }
      function gi(h, R, F) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return eu(h, qf(h));
        if (typeof h == "string")
          return hl(h);
        switch (h) {
          case I:
            return hl("Suspense");
          case Z:
            return hl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              return Ai(h.render);
            case q:
              return gi(h.type, R, F);
            case de: {
              var B = h, ue = B._payload, Qe = B._init;
              try {
                return gi(Qe(ue), R, F);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, tu = jt.ReactDebugCurrentFrame;
      function ro(h) {
        if (h) {
          var R = h._owner, F = gi(h.type, h._source, R ? R.type : null);
          tu.setExtraStackFrame(F);
        } else
          tu.setExtraStackFrame(null);
      }
      function nu(h, R, F, B, ue) {
        {
          var Qe = Function.call.bind(yr);
          for (var Se in h)
            if (Qe(h, Se)) {
              var We = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var ht = Error((B || "React class") + ": " + F + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                We = h[Se](R, Se, B, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (At) {
                We = At;
              }
              We && !(We instanceof Error) && (ro(ue), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", F, Se, typeof We), ro(null)), We instanceof Error && !(We.message in Ft) && (Ft[We.message] = !0, ro(ue), Oe("Failed %s type: %s", F, We.message), ro(null));
            }
        }
      }
      function zt(h) {
        if (h) {
          var R = h._owner, F = gi(h.type, h._source, R ? R.type : null);
          bt(F);
        } else
          bt(null);
      }
      var ru;
      ru = !1;
      function au() {
        if (De.current) {
          var h = Qn(De.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function at(h) {
        if (h !== void 0) {
          var R = h.fileName.replace(/^.*[\\\/]/, ""), F = h.lineNumber;
          return `

Check your code at ` + R + ":" + F + ".";
        }
        return "";
      }
      function ao(h) {
        return h != null ? at(h.__source) : "";
      }
      var En = {};
      function Xr(h) {
        var R = au();
        if (!R) {
          var F = typeof h == "string" ? h : h.displayName || h.name;
          F && (R = `

Check the top-level render call using <` + F + ">.");
        }
        return R;
      }
      function Mr(h, R) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var F = Xr(R);
          if (!En[F]) {
            En[F] = !0;
            var B = "";
            h && h._owner && h._owner !== De.current && (B = " It was passed a child from " + Qn(h._owner.type) + "."), zt(h), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, B), zt(null);
          }
        }
      }
      function gl(h, R) {
        if (typeof h == "object") {
          if (yn(h))
            for (var F = 0; F < h.length; F++) {
              var B = h[F];
              $t(B) && Mr(B, R);
            }
          else if ($t(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ue = pe(h);
            if (typeof ue == "function" && ue !== h.entries)
              for (var Qe = ue.call(h), Se; !(Se = Qe.next()).done; )
                $t(Se.value) && Mr(Se.value, R);
          }
        }
      }
      function bn(h) {
        {
          var R = h.type;
          if (R == null || typeof R == "string")
            return;
          var F;
          if (typeof R == "function")
            F = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === se || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === q))
            F = R.propTypes;
          else
            return;
          if (F) {
            var B = Qn(R);
            nu(F, h.props, "prop", B, h);
          } else if (R.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ue = Qn(R);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gt(h) {
        {
          for (var R = Object.keys(h.props), F = 0; F < R.length; F++) {
            var B = R[F];
            if (B !== "children" && B !== "key") {
              zt(h), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), zt(null);
              break;
            }
          }
          h.ref !== null && (zt(h), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
        }
      }
      function oc(h, R, F) {
        var B = re(h);
        if (!B) {
          var ue = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qe = ao(R);
          Qe ? ue += Qe : ue += au();
          var Se;
          h === null ? Se = "null" : yn(h) ? Se = "array" : h !== void 0 && h.$$typeof === k ? (Se = "<" + (Qn(h.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ue);
        }
        var We = Ve.apply(this, arguments);
        if (We == null)
          return We;
        if (B)
          for (var ht = 2; ht < arguments.length; ht++)
            gl(arguments[ht], h);
        return h === P ? Gt(We) : bn(We), We;
      }
      var Kr = !1;
      function qn(h) {
        var R = oc.bind(null, h);
        return R.type = h, Kr || (Kr = !0, yt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return yt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), R;
      }
      function Si(h, R, F) {
        for (var B = Pt.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
          gl(arguments[ue], B.type);
        return bn(B), B;
      }
      function uc(h, R) {
        var F = be.transition;
        be.transition = {};
        var B = be.transition;
        be.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (be.transition = F, F === null && B._updatedFibers) {
            var ue = B._updatedFibers.size;
            ue > 10 && yt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), B._updatedFibers.clear();
          }
        }
      }
      var Ui = !1, Sl = null;
      function sc(h) {
        if (Sl === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), F = x && x[R];
            Sl = F.call(x, "timers").setImmediate;
          } catch {
            Sl = function(ue) {
              Ui === !1 && (Ui = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Qe = new MessageChannel();
              Qe.port1.onmessage = ue, Qe.port2.postMessage(void 0);
            };
          }
        return Sl(h);
      }
      var Oa = 0, El = !1;
      function Cl(h) {
        {
          var R = Oa;
          Oa++, Ee.current === null && (Ee.current = []);
          var F = Ee.isBatchingLegacy, B;
          try {
            if (Ee.isBatchingLegacy = !0, B = h(), !F && Ee.didScheduleLegacyUpdate) {
              var ue = Ee.current;
              ue !== null && (Ee.didScheduleLegacyUpdate = !1, Tl(ue));
            }
          } catch (rn) {
            throw La(R), rn;
          } finally {
            Ee.isBatchingLegacy = F;
          }
          if (B !== null && typeof B == "object" && typeof B.then == "function") {
            var Qe = B, Se = !1, We = {
              then: function(rn, sn) {
                Se = !0, Qe.then(function(Tt) {
                  La(R), Oa === 0 ? iu(Tt, rn, sn) : rn(Tt);
                }, function(Tt) {
                  La(R), sn(Tt);
                });
              }
            };
            return !El && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (El = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), We;
          } else {
            var ht = B;
            if (La(R), Oa === 0) {
              var At = Ee.current;
              At !== null && (Tl(At), Ee.current = null);
              var nn = {
                then: function(rn, sn) {
                  Ee.current === null ? (Ee.current = [], iu(ht, rn, sn)) : rn(ht);
                }
              };
              return nn;
            } else {
              var Zt = {
                then: function(rn, sn) {
                  rn(ht);
                }
              };
              return Zt;
            }
          }
        }
      }
      function La(h) {
        h !== Oa - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function iu(h, R, F) {
        {
          var B = Ee.current;
          if (B !== null)
            try {
              Tl(B), sc(function() {
                B.length === 0 ? (Ee.current = null, R(h)) : iu(h, R, F);
              });
            } catch (ue) {
              F(ue);
            }
          else
            R(h);
        }
      }
      var xl = !1;
      function Tl(h) {
        if (!xl) {
          xl = !0;
          var R = 0;
          try {
            for (; R < h.length; R++) {
              var F = h[R];
              do
                F = F(!0);
              while (F !== null);
            }
            h.length = 0;
          } catch (B) {
            throw h = h.slice(R + 1), B;
          } finally {
            xl = !1;
          }
        }
      }
      var io = oc, lu = Si, as = qn, ni = {
        map: Da,
        forEach: no,
        count: cl,
        toArray: qo,
        only: zi
      };
      C.Children = ni, C.Component = Ze, C.Fragment = P, C.Profiler = ve, C.PureComponent = It, C.StrictMode = g, C.Suspense = I, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jt, C.cloneElement = lu, C.createContext = fl, C.createElement = io, C.createFactory = as, C.createRef = mr, C.forwardRef = hi, C.isValidElement = $t, C.lazy = ya, C.memo = ge, C.startTransition = uc, C.unstable_act = Cl, C.useCallback = ar, C.useContext = ot, C.useDebugValue = Nt, C.useDeferredValue = ei, C.useEffect = zn, C.useId = vt, C.useImperativeHandle = Xo, C.useInsertionEffect = on, C.useLayoutEffect = un, C.useMemo = mi, C.useReducer = ut, C.useRef = $e, C.useState = _t, C.useSyncExternalStore = yi, C.useTransition = Qf, C.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
var Ex;
function Qo() {
  return Ex || (Ex = 1, process.env.NODE_ENV === "production" ? Xm.exports = Hk() : Xm.exports = Vk()), Xm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cx;
function Pk() {
  if (Cx)
    return rv;
  Cx = 1;
  var x = Qo(), C = Symbol.for("react.element"), S = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, K = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(ve, Q, W) {
    var se, I = {}, Z = null, q = null;
    W !== void 0 && (Z = "" + W), Q.key !== void 0 && (Z = "" + Q.key), Q.ref !== void 0 && (q = Q.ref);
    for (se in Q)
      k.call(Q, se) && !P.hasOwnProperty(se) && (I[se] = Q[se]);
    if (ve && ve.defaultProps)
      for (se in Q = ve.defaultProps, Q)
        I[se] === void 0 && (I[se] = Q[se]);
    return { $$typeof: C, type: ve, key: Z, ref: q, props: I, _owner: K.current };
  }
  return rv.Fragment = S, rv.jsx = g, rv.jsxs = g, rv;
}
var av = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function Bk() {
  return xx || (xx = 1, process.env.NODE_ENV !== "production" && function() {
    var x = Qo(), C = Symbol.for("react.element"), S = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), de = Symbol.iterator, ee = "@@iterator";
    function ae(b) {
      if (b === null || typeof b != "object")
        return null;
      var re = de && b[de] || b[ee];
      return typeof re == "function" ? re : null;
    }
    var Xe = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pe(b) {
      {
        for (var re = arguments.length, ge = new Array(re > 1 ? re - 1 : 0), we = 1; we < re; we++)
          ge[we - 1] = arguments[we];
        oe("error", b, ge);
      }
    }
    function oe(b, re, ge) {
      {
        var we = Xe.ReactDebugCurrentFrame, ot = we.getStackAddendum();
        ot !== "" && (re += "%s", ge = ge.concat([ot]));
        var _t = ge.map(function(ut) {
          return String(ut);
        });
        _t.unshift("Warning: " + re), Function.prototype.apply.call(console[b], console, _t);
      }
    }
    var be = !1, Ee = !1, De = !1, Le = !1, gt = !1, bt;
    bt = Symbol.for("react.module.reference");
    function Mt(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === k || b === P || gt || b === K || b === W || b === se || Le || b === q || be || Ee || De || typeof b == "object" && b !== null && (b.$$typeof === Z || b.$$typeof === I || b.$$typeof === g || b.$$typeof === ve || b.$$typeof === Q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === bt || b.getModuleId !== void 0));
    }
    function xt(b, re, ge) {
      var we = b.displayName;
      if (we)
        return we;
      var ot = re.displayName || re.name || "";
      return ot !== "" ? ge + "(" + ot + ")" : ge;
    }
    function Jt(b) {
      return b.displayName || "Context";
    }
    function Be(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case k:
          return "Fragment";
        case S:
          return "Portal";
        case P:
          return "Profiler";
        case K:
          return "StrictMode";
        case W:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case ve:
            var re = b;
            return Jt(re) + ".Consumer";
          case g:
            var ge = b;
            return Jt(ge._context) + ".Provider";
          case Q:
            return xt(b, b.render, "ForwardRef");
          case I:
            var we = b.displayName || null;
            return we !== null ? we : Be(b.type) || "Memo";
          case Z: {
            var ot = b, _t = ot._payload, ut = ot._init;
            try {
              return Be(ut(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = Object.assign, jt = 0, yt, Oe, fe, He, w, J, Ce;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function Ze() {
      {
        if (jt === 0) {
          yt = console.log, Oe = console.info, fe = console.warn, He = console.error, w = console.group, J = console.groupCollapsed, Ce = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        jt++;
      }
    }
    function wt() {
      {
        if (jt--, jt === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, b, {
              value: yt
            }),
            info: nt({}, b, {
              value: Oe
            }),
            warn: nt({}, b, {
              value: fe
            }),
            error: nt({}, b, {
              value: He
            }),
            group: nt({}, b, {
              value: w
            }),
            groupCollapsed: nt({}, b, {
              value: J
            }),
            groupEnd: nt({}, b, {
              value: Ce
            })
          });
        }
        jt < 0 && pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = Xe.ReactCurrentDispatcher, St;
    function dt(b, re, ge) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (ot) {
            var we = ot.stack.trim().match(/\n( *(at )?)/);
            St = we && we[1] || "";
          }
        return `
` + St + b;
      }
    }
    var It = !1, Ir;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      Ir = new mr();
    }
    function $r(b, re) {
      if (!b || It)
        return "";
      {
        var ge = Ir.get(b);
        if (ge !== void 0)
          return ge;
      }
      var we;
      It = !0;
      var ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = ft.current, ft.current = null, Ze();
      try {
        if (re) {
          var ut = function() {
            throw Error();
          };
          if (Object.defineProperty(ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ut, []);
            } catch (Nt) {
              we = Nt;
            }
            Reflect.construct(b, [], ut);
          } else {
            try {
              ut.call();
            } catch (Nt) {
              we = Nt;
            }
            b.call(ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nt) {
            we = Nt;
          }
          b();
        }
      } catch (Nt) {
        if (Nt && we && typeof Nt.stack == "string") {
          for (var $e = Nt.stack.split(`
`), zn = we.stack.split(`
`), on = $e.length - 1, un = zn.length - 1; on >= 1 && un >= 0 && $e[on] !== zn[un]; )
            un--;
          for (; on >= 1 && un >= 0; on--, un--)
            if ($e[on] !== zn[un]) {
              if (on !== 1 || un !== 1)
                do
                  if (on--, un--, un < 0 || $e[on] !== zn[un]) {
                    var ar = `
` + $e[on].replace(" at new ", " at ");
                    return b.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", b.displayName)), typeof b == "function" && Ir.set(b, ar), ar;
                  }
                while (on >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        It = !1, ft.current = _t, wt(), Error.prepareStackTrace = ot;
      }
      var mi = b ? b.displayName || b.name : "", Xo = mi ? dt(mi) : "";
      return typeof b == "function" && Ir.set(b, Xo), Xo;
    }
    function yn(b, re, ge) {
      return $r(b, !1);
    }
    function Gn(b) {
      var re = b.prototype;
      return !!(re && re.isReactComponent);
    }
    function Hn(b, re, ge) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return $r(b, Gn(b));
      if (typeof b == "string")
        return dt(b);
      switch (b) {
        case W:
          return dt("Suspense");
        case se:
          return dt("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case Q:
            return yn(b.render);
          case I:
            return Hn(b.type, re, ge);
          case Z: {
            var we = b, ot = we._payload, _t = we._init;
            try {
              return Hn(_t(ot), re, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var Vn = Object.prototype.hasOwnProperty, Dn = {}, Yr = Xe.ReactDebugCurrentFrame;
    function Wr(b) {
      if (b) {
        var re = b._owner, ge = Hn(b.type, b._source, re ? re.type : null);
        Yr.setExtraStackFrame(ge);
      } else
        Yr.setExtraStackFrame(null);
    }
    function Qn(b, re, ge, we, ot) {
      {
        var _t = Function.call.bind(Vn);
        for (var ut in b)
          if (_t(b, ut)) {
            var $e = void 0;
            try {
              if (typeof b[ut] != "function") {
                var zn = Error((we || "React class") + ": " + ge + " type `" + ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              $e = b[ut](re, ut, we, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              $e = on;
            }
            $e && !($e instanceof Error) && (Wr(ot), pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", ge, ut, typeof $e), Wr(null)), $e instanceof Error && !($e.message in Dn) && (Dn[$e.message] = !0, Wr(ot), pe("Failed %s type: %s", ge, $e.message), Wr(null));
          }
      }
    }
    var yr = Array.isArray;
    function Gr(b) {
      return yr(b);
    }
    function gr(b) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, ge = re && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return ge;
      }
    }
    function pa(b) {
      try {
        return rr(b), !1;
      } catch {
        return !0;
      }
    }
    function rr(b) {
      return "" + b;
    }
    function Qr(b) {
      if (pa(b))
        return pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(b)), rr(b);
    }
    var gn = Xe.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, di, va, he;
    he = {};
    function Ve(b) {
      if (Vn.call(b, "ref")) {
        var re = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function pt(b) {
      if (Vn.call(b, "key")) {
        var re = Object.getOwnPropertyDescriptor(b, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Pt(b, re) {
      if (typeof b.ref == "string" && gn.current && re && gn.current.stateNode !== re) {
        var ge = Be(gn.current.type);
        he[ge] || (pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(gn.current.type), b.ref), he[ge] = !0);
      }
    }
    function $t(b, re) {
      {
        var ge = function() {
          di || (di = !0, pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function On(b, re) {
      {
        var ge = function() {
          va || (va = !0, pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Sn = function(b, re, ge, we, ot, _t, ut) {
      var $e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: b,
        key: re,
        ref: ge,
        props: ut,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return $e._store = {}, Object.defineProperty($e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.defineProperty($e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
    };
    function Sr(b, re, ge, we, ot) {
      {
        var _t, ut = {}, $e = null, zn = null;
        ge !== void 0 && (Qr(ge), $e = "" + ge), pt(re) && (Qr(re.key), $e = "" + re.key), Ve(re) && (zn = re.ref, Pt(re, ot));
        for (_t in re)
          Vn.call(re, _t) && !_r.hasOwnProperty(_t) && (ut[_t] = re[_t]);
        if (b && b.defaultProps) {
          var on = b.defaultProps;
          for (_t in on)
            ut[_t] === void 0 && (ut[_t] = on[_t]);
        }
        if ($e || zn) {
          var un = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          $e && $t(ut, un), zn && On(ut, un);
        }
        return Sn(b, $e, zn, ot, we, gn.current, ut);
      }
    }
    var Kt = Xe.ReactCurrentOwner, kr = Xe.ReactDebugCurrentFrame;
    function Yt(b) {
      if (b) {
        var re = b._owner, ge = Hn(b.type, b._source, re ? re.type : null);
        kr.setExtraStackFrame(ge);
      } else
        kr.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function Ja(b) {
      return typeof b == "object" && b !== null && b.$$typeof === C;
    }
    function Da() {
      {
        if (Kt.current) {
          var b = Be(Kt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function cl(b) {
      return "";
    }
    var no = {};
    function qo(b) {
      {
        var re = Da();
        if (!re) {
          var ge = typeof b == "string" ? b : b.displayName || b.name;
          ge && (re = `

Check the top-level render call using <` + ge + ">.");
        }
        return re;
      }
    }
    function zi(b, re) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var ge = qo(re);
        if (no[ge])
          return;
        no[ge] = !0;
        var we = "";
        b && b._owner && b._owner !== Kt.current && (we = " It was passed a child from " + Be(b._owner.type) + "."), Yt(b), pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, we), Yt(null);
      }
    }
    function fl(b, re) {
      {
        if (typeof b != "object")
          return;
        if (Gr(b))
          for (var ge = 0; ge < b.length; ge++) {
            var we = b[ge];
            Ja(we) && zi(we, re);
          }
        else if (Ja(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ot = ae(b);
          if (typeof ot == "function" && ot !== b.entries)
            for (var _t = ot.call(b), ut; !(ut = _t.next()).done; )
              Ja(ut.value) && zi(ut.value, re);
        }
      }
    }
    function ha(b) {
      {
        var re = b.type;
        if (re == null || typeof re == "string")
          return;
        var ge;
        if (typeof re == "function")
          ge = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === Q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === I))
          ge = re.propTypes;
        else
          return;
        if (ge) {
          var we = Be(re);
          Qn(ge, b.props, "prop", we, b);
        } else if (re.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var ot = Be(re);
          pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ot || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pi(b) {
      {
        for (var re = Object.keys(b.props), ge = 0; ge < re.length; ge++) {
          var we = re[ge];
          if (we !== "children" && we !== "key") {
            Yt(b), pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), Yt(null);
            break;
          }
        }
        b.ref !== null && (Yt(b), pe("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    function ma(b, re, ge, we, ot, _t) {
      {
        var ut = Mt(b);
        if (!ut) {
          var $e = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && ($e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = cl();
          zn ? $e += zn : $e += Da();
          var on;
          b === null ? on = "null" : Gr(b) ? on = "array" : b !== void 0 && b.$$typeof === C ? (on = "<" + (Be(b.type) || "Unknown") + " />", $e = " Did you accidentally export a JSX literal instead of a component?") : on = typeof b, pe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, $e);
        }
        var un = Sr(b, re, ge, ot, _t);
        if (un == null)
          return un;
        if (ut) {
          var ar = re.children;
          if (ar !== void 0)
            if (we)
              if (Gr(ar)) {
                for (var mi = 0; mi < ar.length; mi++)
                  fl(ar[mi], b);
                Object.freeze && Object.freeze(ar);
              } else
                pe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fl(ar, b);
        }
        return b === k ? pi(un) : ha(un), un;
      }
    }
    function vi(b, re, ge) {
      return ma(b, re, ge, !0);
    }
    function Dr(b, re, ge) {
      return ma(b, re, ge, !1);
    }
    var ya = Dr, hi = vi;
    av.Fragment = k, av.jsx = ya, av.jsxs = hi;
  }()), av;
}
process.env.NODE_ENV === "production" ? M1.exports = Pk() : M1.exports = Bk();
var M = M1.exports, ov = {}, N1 = { exports: {} }, qa = {}, Km = { exports: {} }, w1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tx;
function Ik() {
  return Tx || (Tx = 1, function(x) {
    function C(fe, He) {
      var w = fe.length;
      fe.push(He);
      e:
        for (; 0 < w; ) {
          var J = w - 1 >>> 1, Ce = fe[J];
          if (0 < K(Ce, He))
            fe[J] = He, fe[w] = Ce, w = J;
          else
            break e;
        }
    }
    function S(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function k(fe) {
      if (fe.length === 0)
        return null;
      var He = fe[0], w = fe.pop();
      if (w !== He) {
        fe[0] = w;
        e:
          for (var J = 0, Ce = fe.length, rt = Ce >>> 1; J < rt; ) {
            var Ze = 2 * (J + 1) - 1, wt = fe[Ze], ft = Ze + 1, St = fe[ft];
            if (0 > K(wt, w))
              ft < Ce && 0 > K(St, wt) ? (fe[J] = St, fe[ft] = w, J = ft) : (fe[J] = wt, fe[Ze] = w, J = Ze);
            else if (ft < Ce && 0 > K(St, w))
              fe[J] = St, fe[ft] = w, J = ft;
            else
              break e;
          }
      }
      return He;
    }
    function K(fe, He) {
      var w = fe.sortIndex - He.sortIndex;
      return w !== 0 ? w : fe.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      x.unstable_now = function() {
        return P.now();
      };
    } else {
      var g = Date, ve = g.now();
      x.unstable_now = function() {
        return g.now() - ve;
      };
    }
    var Q = [], W = [], se = 1, I = null, Z = 3, q = !1, de = !1, ee = !1, ae = typeof setTimeout == "function" ? setTimeout : null, Xe = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function oe(fe) {
      for (var He = S(W); He !== null; ) {
        if (He.callback === null)
          k(W);
        else if (He.startTime <= fe)
          k(W), He.sortIndex = He.expirationTime, C(Q, He);
        else
          break;
        He = S(W);
      }
    }
    function be(fe) {
      if (ee = !1, oe(fe), !de)
        if (S(Q) !== null)
          de = !0, yt(Ee);
        else {
          var He = S(W);
          He !== null && Oe(be, He.startTime - fe);
        }
    }
    function Ee(fe, He) {
      de = !1, ee && (ee = !1, Xe(gt), gt = -1), q = !0;
      var w = Z;
      try {
        for (oe(He), I = S(Q); I !== null && (!(I.expirationTime > He) || fe && !xt()); ) {
          var J = I.callback;
          if (typeof J == "function") {
            I.callback = null, Z = I.priorityLevel;
            var Ce = J(I.expirationTime <= He);
            He = x.unstable_now(), typeof Ce == "function" ? I.callback = Ce : I === S(Q) && k(Q), oe(He);
          } else
            k(Q);
          I = S(Q);
        }
        if (I !== null)
          var rt = !0;
        else {
          var Ze = S(W);
          Ze !== null && Oe(be, Ze.startTime - He), rt = !1;
        }
        return rt;
      } finally {
        I = null, Z = w, q = !1;
      }
    }
    var De = !1, Le = null, gt = -1, bt = 5, Mt = -1;
    function xt() {
      return !(x.unstable_now() - Mt < bt);
    }
    function Jt() {
      if (Le !== null) {
        var fe = x.unstable_now();
        Mt = fe;
        var He = !0;
        try {
          He = Le(!0, fe);
        } finally {
          He ? Be() : (De = !1, Le = null);
        }
      } else
        De = !1;
    }
    var Be;
    if (typeof pe == "function")
      Be = function() {
        pe(Jt);
      };
    else if (typeof MessageChannel < "u") {
      var nt = new MessageChannel(), jt = nt.port2;
      nt.port1.onmessage = Jt, Be = function() {
        jt.postMessage(null);
      };
    } else
      Be = function() {
        ae(Jt, 0);
      };
    function yt(fe) {
      Le = fe, De || (De = !0, Be());
    }
    function Oe(fe, He) {
      gt = ae(function() {
        fe(x.unstable_now());
      }, He);
    }
    x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, x.unstable_continueExecution = function() {
      de || q || (de = !0, yt(Ee));
    }, x.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bt = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, x.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, x.unstable_getFirstCallbackNode = function() {
      return S(Q);
    }, x.unstable_next = function(fe) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = Z;
      }
      var w = Z;
      Z = He;
      try {
        return fe();
      } finally {
        Z = w;
      }
    }, x.unstable_pauseExecution = function() {
    }, x.unstable_requestPaint = function() {
    }, x.unstable_runWithPriority = function(fe, He) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var w = Z;
      Z = fe;
      try {
        return He();
      } finally {
        Z = w;
      }
    }, x.unstable_scheduleCallback = function(fe, He, w) {
      var J = x.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? J + w : J) : w = J, fe) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = w + Ce, fe = { id: se++, callback: He, priorityLevel: fe, startTime: w, expirationTime: Ce, sortIndex: -1 }, w > J ? (fe.sortIndex = w, C(W, fe), S(Q) === null && fe === S(W) && (ee ? (Xe(gt), gt = -1) : ee = !0, Oe(be, w - J))) : (fe.sortIndex = Ce, C(Q, fe), de || q || (de = !0, yt(Ee))), fe;
    }, x.unstable_shouldYield = xt, x.unstable_wrapCallback = function(fe) {
      var He = Z;
      return function() {
        var w = Z;
        Z = He;
        try {
          return fe.apply(this, arguments);
        } finally {
          Z = w;
        }
      };
    };
  }(w1)), w1;
}
var _1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx;
function $k() {
  return Rx || (Rx = 1, function(x) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, S = !1, k = 5;
      function K(he, Ve) {
        var pt = he.length;
        he.push(Ve), ve(he, Ve, pt);
      }
      function P(he) {
        return he.length === 0 ? null : he[0];
      }
      function g(he) {
        if (he.length === 0)
          return null;
        var Ve = he[0], pt = he.pop();
        return pt !== Ve && (he[0] = pt, Q(he, pt, 0)), Ve;
      }
      function ve(he, Ve, pt) {
        for (var Pt = pt; Pt > 0; ) {
          var $t = Pt - 1 >>> 1, On = he[$t];
          if (W(On, Ve) > 0)
            he[$t] = Ve, he[Pt] = On, Pt = $t;
          else
            return;
        }
      }
      function Q(he, Ve, pt) {
        for (var Pt = pt, $t = he.length, On = $t >>> 1; Pt < On; ) {
          var Sn = (Pt + 1) * 2 - 1, Sr = he[Sn], Kt = Sn + 1, kr = he[Kt];
          if (W(Sr, Ve) < 0)
            Kt < $t && W(kr, Sr) < 0 ? (he[Pt] = kr, he[Kt] = Ve, Pt = Kt) : (he[Pt] = Sr, he[Sn] = Ve, Pt = Sn);
          else if (Kt < $t && W(kr, Ve) < 0)
            he[Pt] = kr, he[Kt] = Ve, Pt = Kt;
          else
            return;
        }
      }
      function W(he, Ve) {
        var pt = he.sortIndex - Ve.sortIndex;
        return pt !== 0 ? pt : he.id - Ve.id;
      }
      var se = 1, I = 2, Z = 3, q = 4, de = 5;
      function ee(he, Ve) {
      }
      var ae = typeof performance == "object" && typeof performance.now == "function";
      if (ae) {
        var Xe = performance;
        x.unstable_now = function() {
          return Xe.now();
        };
      } else {
        var pe = Date, oe = pe.now();
        x.unstable_now = function() {
          return pe.now() - oe;
        };
      }
      var be = 1073741823, Ee = -1, De = 250, Le = 5e3, gt = 1e4, bt = be, Mt = [], xt = [], Jt = 1, Be = null, nt = Z, jt = !1, yt = !1, Oe = !1, fe = typeof setTimeout == "function" ? setTimeout : null, He = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function J(he) {
        for (var Ve = P(xt); Ve !== null; ) {
          if (Ve.callback === null)
            g(xt);
          else if (Ve.startTime <= he)
            g(xt), Ve.sortIndex = Ve.expirationTime, K(Mt, Ve);
          else
            return;
          Ve = P(xt);
        }
      }
      function Ce(he) {
        if (Oe = !1, J(he), !yt)
          if (P(Mt) !== null)
            yt = !0, Qr(rt);
          else {
            var Ve = P(xt);
            Ve !== null && gn(Ce, Ve.startTime - he);
          }
      }
      function rt(he, Ve) {
        yt = !1, Oe && (Oe = !1, _r()), jt = !0;
        var pt = nt;
        try {
          var Pt;
          if (!S)
            return Ze(he, Ve);
        } finally {
          Be = null, nt = pt, jt = !1;
        }
      }
      function Ze(he, Ve) {
        var pt = Ve;
        for (J(pt), Be = P(Mt); Be !== null && !C && !(Be.expirationTime > pt && (!he || Wr())); ) {
          var Pt = Be.callback;
          if (typeof Pt == "function") {
            Be.callback = null, nt = Be.priorityLevel;
            var $t = Be.expirationTime <= pt, On = Pt($t);
            pt = x.unstable_now(), typeof On == "function" ? Be.callback = On : Be === P(Mt) && g(Mt), J(pt);
          } else
            g(Mt);
          Be = P(Mt);
        }
        if (Be !== null)
          return !0;
        var Sn = P(xt);
        return Sn !== null && gn(Ce, Sn.startTime - pt), !1;
      }
      function wt(he, Ve) {
        switch (he) {
          case se:
          case I:
          case Z:
          case q:
          case de:
            break;
          default:
            he = Z;
        }
        var pt = nt;
        nt = he;
        try {
          return Ve();
        } finally {
          nt = pt;
        }
      }
      function ft(he) {
        var Ve;
        switch (nt) {
          case se:
          case I:
          case Z:
            Ve = Z;
            break;
          default:
            Ve = nt;
            break;
        }
        var pt = nt;
        nt = Ve;
        try {
          return he();
        } finally {
          nt = pt;
        }
      }
      function St(he) {
        var Ve = nt;
        return function() {
          var pt = nt;
          nt = Ve;
          try {
            return he.apply(this, arguments);
          } finally {
            nt = pt;
          }
        };
      }
      function dt(he, Ve, pt) {
        var Pt = x.unstable_now(), $t;
        if (typeof pt == "object" && pt !== null) {
          var On = pt.delay;
          typeof On == "number" && On > 0 ? $t = Pt + On : $t = Pt;
        } else
          $t = Pt;
        var Sn;
        switch (he) {
          case se:
            Sn = Ee;
            break;
          case I:
            Sn = De;
            break;
          case de:
            Sn = bt;
            break;
          case q:
            Sn = gt;
            break;
          case Z:
          default:
            Sn = Le;
            break;
        }
        var Sr = $t + Sn, Kt = {
          id: Jt++,
          callback: Ve,
          priorityLevel: he,
          startTime: $t,
          expirationTime: Sr,
          sortIndex: -1
        };
        return $t > Pt ? (Kt.sortIndex = $t, K(xt, Kt), P(Mt) === null && Kt === P(xt) && (Oe ? _r() : Oe = !0, gn(Ce, $t - Pt))) : (Kt.sortIndex = Sr, K(Mt, Kt), !yt && !jt && (yt = !0, Qr(rt))), Kt;
      }
      function It() {
      }
      function Ir() {
        !yt && !jt && (yt = !0, Qr(rt));
      }
      function mr() {
        return P(Mt);
      }
      function $r(he) {
        he.callback = null;
      }
      function yn() {
        return nt;
      }
      var Gn = !1, Hn = null, Vn = -1, Dn = k, Yr = -1;
      function Wr() {
        var he = x.unstable_now() - Yr;
        return !(he < Dn);
      }
      function Qn() {
      }
      function yr(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Dn = Math.floor(1e3 / he) : Dn = k;
      }
      var Gr = function() {
        if (Hn !== null) {
          var he = x.unstable_now();
          Yr = he;
          var Ve = !0, pt = !0;
          try {
            pt = Hn(Ve, he);
          } finally {
            pt ? gr() : (Gn = !1, Hn = null);
          }
        } else
          Gn = !1;
      }, gr;
      if (typeof w == "function")
        gr = function() {
          w(Gr);
        };
      else if (typeof MessageChannel < "u") {
        var pa = new MessageChannel(), rr = pa.port2;
        pa.port1.onmessage = Gr, gr = function() {
          rr.postMessage(null);
        };
      } else
        gr = function() {
          fe(Gr, 0);
        };
      function Qr(he) {
        Hn = he, Gn || (Gn = !0, gr());
      }
      function gn(he, Ve) {
        Vn = fe(function() {
          he(x.unstable_now());
        }, Ve);
      }
      function _r() {
        He(Vn), Vn = -1;
      }
      var di = Qn, va = null;
      x.unstable_IdlePriority = de, x.unstable_ImmediatePriority = se, x.unstable_LowPriority = q, x.unstable_NormalPriority = Z, x.unstable_Profiling = va, x.unstable_UserBlockingPriority = I, x.unstable_cancelCallback = $r, x.unstable_continueExecution = Ir, x.unstable_forceFrameRate = yr, x.unstable_getCurrentPriorityLevel = yn, x.unstable_getFirstCallbackNode = mr, x.unstable_next = ft, x.unstable_pauseExecution = It, x.unstable_requestPaint = di, x.unstable_runWithPriority = wt, x.unstable_scheduleCallback = dt, x.unstable_shouldYield = Wr, x.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(_1)), _1;
}
var bx;
function Ix() {
  return bx || (bx = 1, process.env.NODE_ENV === "production" ? Km.exports = Ik() : Km.exports = $k()), Km.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wx;
function Yk() {
  if (wx)
    return qa;
  wx = 1;
  var x = Qo(), C = Ix();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = /* @__PURE__ */ new Set(), K = {};
  function P(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (K[n] = r, n = 0; n < r.length; n++)
      k.add(r[n]);
  }
  var ve = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, se = {}, I = {};
  function Z(n) {
    return Q.call(I, n) ? !0 : Q.call(se, n) ? !1 : W.test(n) ? I[n] = !0 : (se[n] = !0, !1);
  }
  function q(n, r, l, u) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function de(n, r, l, u) {
    if (r === null || typeof r > "u" || q(n, r, l, u))
      return !0;
    if (u)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ee(n, r, l, u, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ae[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ae[r] = new ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ae[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ae[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ae[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ae[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ae[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ae[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ae[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Xe = /[\-:]([a-z])/g;
  function pe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Xe,
      pe
    );
    ae[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Xe, pe);
    ae[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Xe, pe);
    ae[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ae[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ae.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ae[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function oe(n, r, l, u) {
    var c = ae.hasOwnProperty(r) ? ae[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (de(r, l, c, u) && (l = null), u || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var be = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), De = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), gt = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), xt = Symbol.for("react.context"), Jt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function He(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var w = Object.assign, J;
  function Ce(n) {
    if (J === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        J = r && r[1] || "";
      }
    return `
` + J + n;
  }
  var rt = !1;
  function Ze(n, r) {
    if (!n || rt)
      return "";
    rt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (V) {
            var u = V;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (V) {
            u = V;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          u = V;
        }
        n();
      }
    } catch (V) {
      if (V && u && typeof V.stack == "string") {
        for (var c = V.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, T = d.length - 1; 1 <= m && 0 <= T && c[m] !== d[T]; )
          T--;
        for (; 1 <= m && 0 <= T; m--, T--)
          if (c[m] !== d[T]) {
            if (m !== 1 || T !== 1)
              do
                if (m--, T--, 0 > T || c[m] !== d[T]) {
                  var _ = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
                }
              while (1 <= m && 0 <= T);
            break;
          }
      }
    } finally {
      rt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Ce(n) : "";
  }
  function wt(n) {
    switch (n.tag) {
      case 5:
        return Ce(n.type);
      case 16:
        return Ce("Lazy");
      case 13:
        return Ce("Suspense");
      case 19:
        return Ce("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function ft(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Le:
        return "Fragment";
      case De:
        return "Portal";
      case bt:
        return "Profiler";
      case gt:
        return "StrictMode";
      case Be:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case xt:
          return (n.displayName || "Context") + ".Consumer";
        case Mt:
          return (n._context.displayName || "Context") + ".Provider";
        case Jt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case jt:
          return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
        case yt:
          r = n._payload, n = n._init;
          try {
            return ft(n(r));
          } catch {
          }
      }
    return null;
  }
  function St(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ft(r);
      case 8:
        return r === gt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function dt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function It(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ir(n) {
    var r = It(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        u = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(m) {
        u = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function mr(n) {
    n._valueTracker || (n._valueTracker = Ir(n));
  }
  function $r(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = It(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function yn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Gn(n, r) {
    var l = r.checked;
    return w({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && oe(n, "checked", r, !1);
  }
  function Dn(n, r) {
    Vn(n, r);
    var l = dt(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wr(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Yr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wr(n, r, l) {
    (r !== "number" || yn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Qn = Array.isArray;
  function yr(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + dt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(S(91));
    return w({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(S(92));
        if (Qn(l)) {
          if (1 < l.length)
            throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function pa(n, r) {
    var l = dt(r.value), u = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _r, di = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _r.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function va(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var he = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(he).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), he[r] = he[n];
    });
  });
  function pt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || he.hasOwnProperty(n) && he[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = pt(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var $t = w({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function On(n, r) {
    if (r) {
      if ($t[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(S(62));
    }
  }
  function Sn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Sr = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var kr = null, Yt = null, Wt = null;
  function Ja(n) {
    if (n = gs(n)) {
      if (typeof kr != "function")
        throw Error(S(280));
      var r = n.stateNode;
      r && (r = Ie(r), kr(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    Yt ? Wt ? Wt.push(n) : Wt = [n] : Yt = n;
  }
  function cl() {
    if (Yt) {
      var n = Yt, r = Wt;
      if (Wt = Yt = null, Ja(n), r)
        for (n = 0; n < r.length; n++)
          Ja(r[n]);
    }
  }
  function no(n, r) {
    return n(r);
  }
  function qo() {
  }
  var zi = !1;
  function fl(n, r, l) {
    if (zi)
      return n(r, l);
    zi = !0;
    try {
      return no(n, r, l);
    } finally {
      zi = !1, (Yt !== null || Wt !== null) && (qo(), cl());
    }
  }
  function ha(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = Ie(l);
    if (u === null)
      return null;
    l = u[r];
    e:
      switch (r) {
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
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(S(231, r, typeof l));
    return l;
  }
  var pi = !1;
  if (ve)
    try {
      var ma = {};
      Object.defineProperty(ma, "passive", { get: function() {
        pi = !0;
      } }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
    } catch {
      pi = !1;
    }
  function vi(n, r, l, u, c, d, m, T, _) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, V);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var Dr = !1, ya = null, hi = !1, b = null, re = { onError: function(n) {
    Dr = !0, ya = n;
  } };
  function ge(n, r, l, u, c, d, m, T, _) {
    Dr = !1, ya = null, vi.apply(re, arguments);
  }
  function we(n, r, l, u, c, d, m, T, _) {
    if (ge.apply(this, arguments), Dr) {
      if (Dr) {
        var V = ya;
        Dr = !1, ya = null;
      } else
        throw Error(S(198));
      hi || (hi = !0, b = V);
    }
  }
  function ot(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ut(n) {
    if (ot(n) !== n)
      throw Error(S(188));
  }
  function $e(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ot(n), r === null)
        throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return ut(c), n;
          if (d === u)
            return ut(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== u.return)
        l = c, u = d;
      else {
        for (var m = !1, T = c.child; T; ) {
          if (T === l) {
            m = !0, l = c, u = d;
            break;
          }
          if (T === u) {
            m = !0, u = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!m) {
          for (T = d.child; T; ) {
            if (T === l) {
              m = !0, l = d, u = c;
              break;
            }
            if (T === u) {
              m = !0, u = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!m)
            throw Error(S(189));
        }
      }
      if (l.alternate !== u)
        throw Error(S(190));
    }
    if (l.tag !== 3)
      throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function zn(n) {
    return n = $e(n), n !== null ? on(n) : null;
  }
  function on(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = on(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var un = C.unstable_scheduleCallback, ar = C.unstable_cancelCallback, mi = C.unstable_shouldYield, Xo = C.unstable_requestPaint, Nt = C.unstable_now, Qf = C.unstable_getCurrentPriorityLevel, ei = C.unstable_ImmediatePriority, vt = C.unstable_UserBlockingPriority, yi = C.unstable_NormalPriority, dl = C.unstable_LowPriority, Ko = C.unstable_IdlePriority, pl = null, qr = null;
  function ts(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function")
      try {
        qr.onCommitFiberRoot(pl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Or = Math.clz32 ? Math.clz32 : lc, ns = Math.log, rs = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ns(n) / rs | 0) | 0;
  }
  var Zo = 64, vl = 4194304;
  function ti(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Lr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var T = m & ~c;
      T !== 0 ? u = ti(T) : (d &= m, d !== 0 && (u = ti(d)));
    } else
      m = l & ~c, m !== 0 ? u = ti(m) : d !== 0 && (u = ti(d));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Or(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function hl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ml(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Or(d), T = 1 << m, _ = c[m];
      _ === -1 ? (!(T & l) || T & u) && (c[m] = hl(T, r)) : _ <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var n = Zo;
    return Zo <<= 1, !(Zo & 4194240) && (Zo = 64), n;
  }
  function eu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ai(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function gi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Or(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Ft = 0;
  function tu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ro, nu, zt, ru, au, at = !1, ao = [], En = null, Xr = null, Mr = null, gl = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), Gt = [], oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Kr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Mr = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(r.pointerId);
    }
  }
  function qn(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = gs(r), r !== null && nu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Si(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return En = qn(En, n, r, l, u, c), !0;
      case "dragenter":
        return Xr = qn(Xr, n, r, l, u, c), !0;
      case "mouseover":
        return Mr = qn(Mr, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return gl.set(d, qn(gl.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, bn.set(d, qn(bn.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function uc(n) {
    var r = Na(n.target);
    if (r !== null) {
      var l = ot(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = _t(l), r !== null) {
            n.blockedOn = r, au(n.priority, function() {
              zt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ui(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = lu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Sr = u, l.target.dispatchEvent(u), Sr = null;
      } else
        return r = gs(l), r !== null && nu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Sl(n, r, l) {
    Ui(n) && l.delete(r);
  }
  function sc() {
    at = !1, En !== null && Ui(En) && (En = null), Xr !== null && Ui(Xr) && (Xr = null), Mr !== null && Ui(Mr) && (Mr = null), gl.forEach(Sl), bn.forEach(Sl);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, at || (at = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, sc)));
  }
  function El(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < ao.length) {
      Oa(ao[0], n);
      for (var l = 1; l < ao.length; l++) {
        var u = ao[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (En !== null && Oa(En, n), Xr !== null && Oa(Xr, n), Mr !== null && Oa(Mr, n), gl.forEach(r), bn.forEach(r), l = 0; l < Gt.length; l++)
      u = Gt[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Gt.length && (l = Gt[0], l.blockedOn === null); )
      uc(l), l.blockedOn === null && Gt.shift();
  }
  var Cl = be.ReactCurrentBatchConfig, La = !0;
  function iu(n, r, l, u) {
    var c = Ft, d = Cl.transition;
    Cl.transition = null;
    try {
      Ft = 1, Tl(n, r, l, u);
    } finally {
      Ft = c, Cl.transition = d;
    }
  }
  function xl(n, r, l, u) {
    var c = Ft, d = Cl.transition;
    Cl.transition = null;
    try {
      Ft = 4, Tl(n, r, l, u);
    } finally {
      Ft = c, Cl.transition = d;
    }
  }
  function Tl(n, r, l, u) {
    if (La) {
      var c = lu(n, r, l, u);
      if (c === null)
        gc(n, r, u, io, l), Kr(n, u);
      else if (Si(c, n, r, l, u))
        u.stopPropagation();
      else if (Kr(n, u), r & 4 && -1 < oc.indexOf(n)) {
        for (; c !== null; ) {
          var d = gs(c);
          if (d !== null && ro(d), d = lu(n, r, l, u), d === null && gc(n, r, u, io, l), d === c)
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else
        gc(n, r, u, null, l);
    }
  }
  var io = null;
  function lu(n, r, l, u) {
    if (io = null, n = Kt(u), n = Na(n), n !== null)
      if (r = ot(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = _t(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return io = n, null;
  }
  function as(n) {
    switch (n) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qf()) {
          case ei:
            return 1;
          case vt:
            return 4;
          case yi:
          case dl:
            return 16;
          case Ko:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, h = null, R = null;
  function F() {
    if (R)
      return R;
    var n, r = h, l = r.length, u, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (u = 1; u <= m && r[l - u] === c[d - u]; u++)
      ;
    return R = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function B(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ue() {
    return !0;
  }
  function Qe() {
    return !1;
  }
  function Se(n) {
    function r(l, u, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var T in n)
        n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ue : Qe, this.isPropagationStopped = Qe, this;
    }
    return w(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ue);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ue);
    }, persist: function() {
    }, isPersistent: ue }), r;
  }
  var We = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ht = Se(We), At = w({}, We, { view: 0, detail: 0 }), nn = Se(At), Zt, rn, sn, Tt = w({}, At, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ed, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== sn && (sn && n.type === "mousemove" ? (Zt = n.screenX - sn.screenX, rn = n.screenY - sn.screenY) : rn = Zt = 0, sn = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : rn;
  } }), ji = Se(Tt), ou = w({}, Tt, { dataTransfer: 0 }), is = Se(ou), Xf = w({}, At, { relatedTarget: 0 }), ri = Se(Xf), ls = w({}, We, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), os = Se(ls), Kf = w({}, We, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ty = Se(Kf), ny = w({}, We, { data: 0 }), Zf = Se(ny), Jf = {
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
    MozPrintableKey: "Unidentified"
  }, fv = {
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
    224: "Meta"
  }, dv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = dv[n]) ? !!r[n] : !1;
  }
  function ed() {
    return pv;
  }
  var Fi = w({}, At, { key: function(n) {
    if (n.key) {
      var r = Jf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = B(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? fv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ed, charCode: function(n) {
    return n.type === "keypress" ? B(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? B(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ry = Se(Fi), td = w({}, Tt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = Se(td), nd = w({}, At, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ed }), ay = Se(nd), fc = w({}, We, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vv = Se(fc), Zr = w({}, Tt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hi = Se(Zr), An = [9, 13, 27, 32], ai = ve && "CompositionEvent" in window, lo = null;
  ve && "documentMode" in document && (lo = document.documentMode);
  var dc = ve && "TextEvent" in window && !lo, hv = ve && (!ai || lo && 8 < lo && 11 >= lo), uu = " ", mv = !1;
  function yv(n, r) {
    switch (n) {
      case "keyup":
        return An.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var su = !1;
  function iy(n, r) {
    switch (n) {
      case "compositionend":
        return pc(r);
      case "keypress":
        return r.which !== 32 ? null : (mv = !0, uu);
      case "textInput":
        return n = r.data, n === uu && mv ? null : n;
      default:
        return null;
    }
  }
  function ly(n, r) {
    if (su)
      return n === "compositionend" || !ai && yv(n, r) ? (n = F(), R = h = ni = null, su = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return hv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var gv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!gv[n.type] : r === "textarea";
  }
  function Ev(n, r, l, u) {
    Da(u), r = hs(r, "onChange"), 0 < r.length && (l = new ht("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var us = null, cu = null;
  function fu(n) {
    yc(n, 0);
  }
  function du(n) {
    var r = vu(n);
    if ($r(r))
      return n;
  }
  function Cv(n, r) {
    if (n === "change")
      return r;
  }
  var rd = !1;
  if (ve) {
    var ad;
    if (ve) {
      var id = "oninput" in document;
      if (!id) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), id = typeof xv.oninput == "function";
      }
      ad = id;
    } else
      ad = !1;
    rd = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function Tv() {
    us && (us.detachEvent("onpropertychange", Rv), cu = us = null);
  }
  function Rv(n) {
    if (n.propertyName === "value" && du(cu)) {
      var r = [];
      Ev(r, cu, n, Kt(n)), fl(fu, r);
    }
  }
  function oy(n, r, l) {
    n === "focusin" ? (Tv(), us = r, cu = l, us.attachEvent("onpropertychange", Rv)) : n === "focusout" && Tv();
  }
  function uy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return du(cu);
  }
  function sy(n, r) {
    if (n === "click")
      return du(r);
  }
  function bv(n, r) {
    if (n === "input" || n === "change")
      return du(r);
  }
  function cy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ma = typeof Object.is == "function" ? Object.is : cy;
  function ss(n, r) {
    if (Ma(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!Q.call(r, c) || !Ma(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function wv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function _v(n, r) {
    var l = wv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r)
          return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = wv(l);
    }
  }
  function kv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? kv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vc() {
    for (var n = window, r = yn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = yn(n.document);
    }
    return r;
  }
  function Vi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function hc(n) {
    var r = vc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && kv(l.ownerDocument.documentElement, l)) {
      if (u !== null && Vi(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = _v(l, d);
          var m = _v(
            l,
            u
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Dv = ve && "documentMode" in document && 11 >= document.documentMode, ii = null, ld = null, cs = null, od = !1;
  function Ov(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    od || ii == null || ii !== yn(u) || (u = ii, "selectionStart" in u && Vi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), cs && ss(cs, u) || (cs = u, u = hs(ld, "onSelect"), 0 < u.length && (r = new ht("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = ii)));
  }
  function mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var oo = { animationend: mc("Animation", "AnimationEnd"), animationiteration: mc("Animation", "AnimationIteration"), animationstart: mc("Animation", "AnimationStart"), transitionend: mc("Transition", "TransitionEnd") }, ud = {}, sd = {};
  ve && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation), "TransitionEvent" in window || delete oo.transitionend.transition);
  function Xn(n) {
    if (ud[n])
      return ud[n];
    if (!oo[n])
      return n;
    var r = oo[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in sd)
        return ud[n] = r[l];
    return n;
  }
  var cd = Xn("animationend"), Lv = Xn("animationiteration"), Mv = Xn("animationstart"), Nv = Xn("transitionend"), zv = /* @__PURE__ */ new Map(), Av = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pi(n, r) {
    zv.set(n, r), P(r, [n]);
  }
  for (var fs = 0; fs < Av.length; fs++) {
    var uo = Av[fs], fy = uo.toLowerCase(), ds = uo[0].toUpperCase() + uo.slice(1);
    Pi(fy, "on" + ds);
  }
  Pi(cd, "onAnimationEnd"), Pi(Lv, "onAnimationIteration"), Pi(Mv, "onAnimationStart"), Pi("dblclick", "onDoubleClick"), Pi("focusin", "onFocus"), Pi("focusout", "onBlur"), Pi(Nv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), P("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), P("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), P("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), P("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), P("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), P("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Uv(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, we(u, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = u.length - 1; 0 <= m; m--) {
            var T = u[m], _ = T.instance, V = T.currentTarget;
            if (T = T.listener, _ !== d && c.isPropagationStopped())
              break e;
            Uv(c, T, V), d = _;
          }
        else
          for (m = 0; m < u.length; m++) {
            if (T = u[m], _ = T.instance, V = T.currentTarget, T = T.listener, _ !== d && c.isPropagationStopped())
              break e;
            Uv(c, T, V), d = _;
          }
      }
    }
    if (hi)
      throw n = b, hi = !1, b = null, n;
  }
  function an(n, r) {
    var l = r[yd];
    l === void 0 && (l = r[yd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (jv(r, n, 2, !1), l.add(u));
  }
  function Rl(n, r, l) {
    var u = 0;
    r && (u |= 4), jv(l, n, u, r);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function pu(n) {
    if (!n[Bi]) {
      n[Bi] = !0, k.forEach(function(l) {
        l !== "selectionchange" && (dy.has(l) || Rl(l, !1, n), Rl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Bi] || (r[Bi] = !0, Rl("selectionchange", !1, r));
    }
  }
  function jv(n, r, l, u) {
    switch (as(r)) {
      case 1:
        var c = iu;
        break;
      case 4:
        c = xl;
        break;
      default:
        c = Tl;
    }
    l = c.bind(null, r, l, n), c = void 0, !pi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function gc(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var m = u.tag;
          if (m === 3 || m === 4) {
            var T = u.stateNode.containerInfo;
            if (T === c || T.nodeType === 8 && T.parentNode === c)
              break;
            if (m === 4)
              for (m = u.return; m !== null; ) {
                var _ = m.tag;
                if ((_ === 3 || _ === 4) && (_ = m.stateNode.containerInfo, _ === c || _.nodeType === 8 && _.parentNode === c))
                  return;
                m = m.return;
              }
            for (; T !== null; ) {
              if (m = Na(T), m === null)
                return;
              if (_ = m.tag, _ === 5 || _ === 6) {
                u = d = m;
                continue e;
              }
              T = T.parentNode;
            }
          }
          u = u.return;
        }
    fl(function() {
      var V = d, ne = Kt(l), ie = [];
      e: {
        var te = zv.get(n);
        if (te !== void 0) {
          var Te = ht, Ne = n;
          switch (n) {
            case "keypress":
              if (B(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Te = ry;
              break;
            case "focusin":
              Ne = "focus", Te = ri;
              break;
            case "focusout":
              Ne = "blur", Te = ri;
              break;
            case "beforeblur":
            case "afterblur":
              Te = ri;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Te = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Te = is;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Te = ay;
              break;
            case cd:
            case Lv:
            case Mv:
              Te = os;
              break;
            case Nv:
              Te = vv;
              break;
            case "scroll":
              Te = nn;
              break;
            case "wheel":
              Te = Hi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Te = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Te = cc;
          }
          var Ue = (r & 4) !== 0, Mn = !Ue && n === "scroll", N = Ue ? te !== null ? te + "Capture" : null : te;
          Ue = [];
          for (var O = V, U; O !== null; ) {
            U = O;
            var ce = U.stateNode;
            if (U.tag === 5 && ce !== null && (U = ce, N !== null && (ce = ha(O, N), ce != null && Ue.push(vs(O, ce, U)))), Mn)
              break;
            O = O.return;
          }
          0 < Ue.length && (te = new Te(te, Ne, null, l, ne), ie.push({ event: te, listeners: Ue }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", Te = n === "mouseout" || n === "pointerout", te && l !== Sr && (Ne = l.relatedTarget || l.fromElement) && (Na(Ne) || Ne[Ii]))
            break e;
          if ((Te || te) && (te = ne.window === ne ? ne : (te = ne.ownerDocument) ? te.defaultView || te.parentWindow : window, Te ? (Ne = l.relatedTarget || l.toElement, Te = V, Ne = Ne ? Na(Ne) : null, Ne !== null && (Mn = ot(Ne), Ne !== Mn || Ne.tag !== 5 && Ne.tag !== 6) && (Ne = null)) : (Te = null, Ne = V), Te !== Ne)) {
            if (Ue = ji, ce = "onMouseLeave", N = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (Ue = cc, ce = "onPointerLeave", N = "onPointerEnter", O = "pointer"), Mn = Te == null ? te : vu(Te), U = Ne == null ? te : vu(Ne), te = new Ue(ce, O + "leave", Te, l, ne), te.target = Mn, te.relatedTarget = U, ce = null, Na(ne) === V && (Ue = new Ue(N, O + "enter", Ne, l, ne), Ue.target = U, Ue.relatedTarget = Mn, ce = Ue), Mn = ce, Te && Ne)
              t: {
                for (Ue = Te, N = Ne, O = 0, U = Ue; U; U = so(U))
                  O++;
                for (U = 0, ce = N; ce; ce = so(ce))
                  U++;
                for (; 0 < O - U; )
                  Ue = so(Ue), O--;
                for (; 0 < U - O; )
                  N = so(N), U--;
                for (; O--; ) {
                  if (Ue === N || N !== null && Ue === N.alternate)
                    break t;
                  Ue = so(Ue), N = so(N);
                }
                Ue = null;
              }
            else
              Ue = null;
            Te !== null && fd(ie, te, Te, Ue, !1), Ne !== null && Mn !== null && fd(ie, Mn, Ne, Ue, !0);
          }
        }
        e: {
          if (te = V ? vu(V) : window, Te = te.nodeName && te.nodeName.toLowerCase(), Te === "select" || Te === "input" && te.type === "file")
            var je = Cv;
          else if (Sv(te))
            if (rd)
              je = bv;
            else {
              je = uy;
              var ze = oy;
            }
          else
            (Te = te.nodeName) && Te.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (je = sy);
          if (je && (je = je(n, V))) {
            Ev(ie, je, l, ne);
            break e;
          }
          ze && ze(n, te, V), n === "focusout" && (ze = te._wrapperState) && ze.controlled && te.type === "number" && Wr(te, "number", te.value);
        }
        switch (ze = V ? vu(V) : window, n) {
          case "focusin":
            (Sv(ze) || ze.contentEditable === "true") && (ii = ze, ld = V, cs = null);
            break;
          case "focusout":
            cs = ld = ii = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, Ov(ie, l, ne);
            break;
          case "selectionchange":
            if (Dv)
              break;
          case "keydown":
          case "keyup":
            Ov(ie, l, ne);
        }
        var Pe;
        if (ai)
          e: {
            switch (n) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break e;
              case "compositionend":
                tt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break e;
            }
            tt = void 0;
          }
        else
          su ? yv(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (hv && l.locale !== "ko" && (su || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && su && (Pe = F()) : (ni = ne, h = "value" in ni ? ni.value : ni.textContent, su = !0)), ze = hs(V, tt), 0 < ze.length && (tt = new Zf(tt, n, null, l, ne), ie.push({ event: tt, listeners: ze }), Pe ? tt.data = Pe : (Pe = pc(l), Pe !== null && (tt.data = Pe)))), (Pe = dc ? iy(n, l) : ly(n, l)) && (V = hs(V, "onBeforeInput"), 0 < V.length && (ne = new Zf("onBeforeInput", "beforeinput", null, l, ne), ie.push({ event: ne, listeners: V }), ne.data = Pe));
      }
      yc(ie, r);
    });
  }
  function vs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function hs(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ha(n, l), d != null && u.unshift(vs(n, d, c)), d = ha(n, r), d != null && u.push(vs(n, d, c))), n = n.return;
    }
    return u;
  }
  function so(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function fd(n, r, l, u, c) {
    for (var d = r._reactName, m = []; l !== null && l !== u; ) {
      var T = l, _ = T.alternate, V = T.stateNode;
      if (_ !== null && _ === u)
        break;
      T.tag === 5 && V !== null && (T = V, c ? (_ = ha(l, d), _ != null && m.unshift(vs(l, _, T))) : c || (_ = ha(l, d), _ != null && m.push(vs(l, _, T)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var dd = /\r\n?/g, py = /\u0000|\uFFFD/g;
  function pd(n) {
    return (typeof n == "string" ? n : "" + n).replace(dd, `
`).replace(py, "");
  }
  function Sc(n, r, l) {
    if (r = pd(r), pd(n) !== r && l)
      throw Error(S(425));
  }
  function Ec() {
  }
  var vd = null, co = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var fo = typeof setTimeout == "function" ? setTimeout : void 0, Fv = typeof clearTimeout == "function" ? clearTimeout : void 0, hd = typeof Promise == "function" ? Promise : void 0, md = typeof queueMicrotask == "function" ? queueMicrotask : typeof hd < "u" ? function(n) {
    return hd.resolve(null).then(n).catch(vy);
  } : fo;
  function vy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function bl(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (u === 0) {
            n.removeChild(c), El(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    El(r);
  }
  function li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ys(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + wl, po = "__reactProps$" + wl, Ii = "__reactContainer$" + wl, yd = "__reactEvents$" + wl, hy = "__reactListeners$" + wl, gd = "__reactHandles$" + wl;
  function Na(n) {
    var r = n[Ei];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ii] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ys(n); n !== null; ) {
            if (l = n[Ei])
              return l;
            n = ys(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function gs(n) {
    return n = n[Ei] || n[Ii], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(S(33));
  }
  function Ie(n) {
    return n[po] || null;
  }
  var _l = [], cn = -1;
  function st(n) {
    return { current: n };
  }
  function Bt(n) {
    0 > cn || (n.current = _l[cn], _l[cn] = null, cn--);
  }
  function Qt(n, r) {
    cn++, _l[cn] = n.current, n.current = r;
  }
  var Ci = {}, et = st(Ci), wn = st(!1), Jr = Ci;
  function za(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ci;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Aa() {
    Bt(wn), Bt(et);
  }
  function kl(n, r, l) {
    if (et.current !== Ci)
      throw Error(S(168));
    Qt(et, r), Qt(wn, l);
  }
  function Ss(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(S(108, St(n) || "Unknown", c));
    return w({}, l, u);
  }
  function Cc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ci, Jr = et.current, Qt(et, n), Qt(wn, wn.current), !0;
  }
  function Hv(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(S(169));
    l ? (n = Ss(n, r, Jr), u.__reactInternalMemoizedMergedChildContext = n, Bt(wn), Bt(et), Qt(et, n)) : Bt(wn), Qt(wn, l);
  }
  var ga = null, Kn = !1, Es = !1;
  function Sd(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  function Ed(n) {
    Kn = !0, Sd(n);
  }
  function ea() {
    if (!Es && ga !== null) {
      Es = !0;
      var n = 0, r = Ft;
      try {
        var l = ga;
        for (Ft = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ga = null, Kn = !1;
      } catch (c) {
        throw ga !== null && (ga = ga.slice(n + 1)), un(ei, ea), c;
      } finally {
        Ft = r, Es = !1;
      }
    }
    return null;
  }
  var Dl = [], ta = 0, vo = null, hu = 0, na = [], Er = 0, Ua = null, ir = 1, $i = "";
  function Sa(n, r) {
    Dl[ta++] = hu, Dl[ta++] = vo, vo = n, hu = r;
  }
  function Cd(n, r, l) {
    na[Er++] = ir, na[Er++] = $i, na[Er++] = Ua, Ua = n;
    var u = ir;
    n = $i;
    var c = 32 - Or(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, ir = 1 << 32 - Or(r) + c | l << c | u, $i = d + n;
    } else
      ir = 1 << d | l << c | u, $i = n;
  }
  function xc(n) {
    n.return !== null && (Sa(n, 1), Cd(n, 1, 0));
  }
  function xd(n) {
    for (; n === vo; )
      vo = Dl[--ta], Dl[ta] = null, hu = Dl[--ta], Dl[ta] = null;
    for (; n === Ua; )
      Ua = na[--Er], na[Er] = null, $i = na[--Er], na[Er] = null, ir = na[--Er], na[Er] = null;
  }
  var Ea = null, ra = null, fn = !1, ja = null;
  function Td(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ea = n, ra = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ea = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: ir, overflow: $i } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ea = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Tc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Rc(n) {
    if (fn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Tc(n))
            throw Error(S(418));
          r = li(l.nextSibling);
          var u = Ea;
          r && Vv(n, r) ? Td(u, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Ea = n);
        }
      } else {
        if (Tc(n))
          throw Error(S(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Ea = n;
      }
    }
  }
  function Pv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ea = n;
  }
  function bc(n) {
    if (n !== Ea)
      return !1;
    if (!fn)
      return Pv(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = ra)) {
      if (Tc(n))
        throw Bv(), Error(S(418));
      for (; r; )
        Td(n, r), r = li(r.nextSibling);
    }
    if (Pv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = li(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else
      ra = Ea ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Bv() {
    for (var n = ra; n; )
      n = li(n.nextSibling);
  }
  function Cn() {
    ra = Ea = null, fn = !1;
  }
  function Rd(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var wc = be.ReactCurrentBatchConfig;
  function Ca(n, r) {
    if (n && n.defaultProps) {
      r = w({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var xi = st(null), _c = null, Ol = null, bd = null;
  function wd() {
    bd = Ol = _c = null;
  }
  function Ll(n) {
    var r = xi.current;
    Bt(xi), n._currentValue = r;
  }
  function Zn(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function me(n, r) {
    _c = n, bd = Ol = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Un = !0), n.firstContext = null);
  }
  function Ln(n) {
    var r = n._currentValue;
    if (bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ol === null) {
        if (_c === null)
          throw Error(S(308));
        Ol = n, _c.dependencies = { lanes: 0, firstContext: n };
      } else
        Ol = Ol.next = n;
    return r;
  }
  var lr = null;
  function _d(n) {
    lr === null ? lr = [n] : lr.push(n);
  }
  function Iv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, _d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Yi(n, u);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ml = !1;
  function kd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nl(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Et & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Yi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, _d(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Yi(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, gi(n, l);
    }
  }
  function Dd(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function zl(n, r, l, u) {
    var c = n.updateQueue;
    Ml = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var _ = T, V = _.next;
      _.next = null, m === null ? d = V : m.next = V, m = _;
      var ne = n.alternate;
      ne !== null && (ne = ne.updateQueue, T = ne.lastBaseUpdate, T !== m && (T === null ? ne.firstBaseUpdate = V : T.next = V, ne.lastBaseUpdate = _));
    }
    if (d !== null) {
      var ie = c.baseState;
      m = 0, ne = V = _ = null, T = d;
      do {
        var te = T.lane, Te = T.eventTime;
        if ((u & te) === te) {
          ne !== null && (ne = ne.next = {
            eventTime: Te,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Ne = n, Ue = T;
            switch (te = r, Te = l, Ue.tag) {
              case 1:
                if (Ne = Ue.payload, typeof Ne == "function") {
                  ie = Ne.call(Te, ie, te);
                  break e;
                }
                ie = Ne;
                break e;
              case 3:
                Ne.flags = Ne.flags & -65537 | 128;
              case 0:
                if (Ne = Ue.payload, te = typeof Ne == "function" ? Ne.call(Te, ie, te) : Ne, te == null)
                  break e;
                ie = w({}, ie, te);
                break e;
              case 2:
                Ml = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [T] : te.push(T));
        } else
          Te = { eventTime: Te, lane: te, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, ne === null ? (V = ne = Te, _ = ie) : ne = ne.next = Te, m |= te;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null)
            break;
          te = T, T = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (ne === null && (_ = ie), c.baseState = _, c.firstBaseUpdate = V, c.lastBaseUpdate = ne, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Xi |= m, n.lanes = m, n.memoizedState = ie;
    }
  }
  function ho(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = l, typeof c != "function")
            throw Error(S(191, c));
          c.call(u);
        }
      }
  }
  var $v = new x.Component().refs;
  function Od(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : w({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ot(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = Rr(), c = jn(n), d = Wi(u, c);
    d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (br(r, n, c, u), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = Rr(), c = jn(n), d = Wi(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Nl(n, d, c), r !== null && (br(r, n, c, u), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Rr(), u = jn(n), c = Wi(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Nl(n, c, u), r !== null && (br(r, n, u, l), kc(r, n, u));
  } };
  function Yv(n, r, l, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ss(l, u) || !ss(c, d) : !0;
  }
  function Wv(n, r, l) {
    var u = !1, c = Ci, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ln(d) : (c = hn(r) ? Jr : et.current, u = r.contextTypes, d = (u = u != null) ? za(n, c) : Ci), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function Oc(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = $v, kd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ln(d) : (d = hn(r) ? Jr : et.current, c.context = za(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Od(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dc.enqueueReplaceState(c, c.state, null), zl(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(S(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(S(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var T = c.refs;
          T === $v && (T = c.refs = {}), m === null ? delete T[d] : T[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(S(284));
      if (!l._owner)
        throw Error(S(290, n));
    }
    return n;
  }
  function Lc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function qv(n) {
    function r(N, O) {
      if (n) {
        var U = N.deletions;
        U === null ? (N.deletions = [O], N.flags |= 16) : U.push(O);
      }
    }
    function l(N, O) {
      if (!n)
        return null;
      for (; O !== null; )
        r(N, O), O = O.sibling;
      return null;
    }
    function u(N, O) {
      for (N = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? N.set(O.key, O) : N.set(O.index, O), O = O.sibling;
      return N;
    }
    function c(N, O) {
      return N = Bl(N, O), N.index = 0, N.sibling = null, N;
    }
    function d(N, O, U) {
      return N.index = U, n ? (U = N.alternate, U !== null ? (U = U.index, U < O ? (N.flags |= 2, O) : U) : (N.flags |= 2, O)) : (N.flags |= 1048576, O);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function T(N, O, U, ce) {
      return O === null || O.tag !== 6 ? (O = Hs(U, N.mode, ce), O.return = N, O) : (O = c(O, U), O.return = N, O);
    }
    function _(N, O, U, ce) {
      var je = U.type;
      return je === Le ? ne(N, O, U.props.children, ce, U.key) : O !== null && (O.elementType === je || typeof je == "object" && je !== null && je.$$typeof === yt && Qv(je) === O.type) ? (ce = c(O, U.props), ce.ref = mu(N, O, U), ce.return = N, ce) : (ce = cf(U.type, U.key, U.props, null, N.mode, ce), ce.ref = mu(N, O, U), ce.return = N, ce);
    }
    function V(N, O, U, ce) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = zo(U, N.mode, ce), O.return = N, O) : (O = c(O, U.children || []), O.return = N, O);
    }
    function ne(N, O, U, ce, je) {
      return O === null || O.tag !== 7 ? (O = No(U, N.mode, ce, je), O.return = N, O) : (O = c(O, U), O.return = N, O);
    }
    function ie(N, O, U) {
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return O = Hs("" + O, N.mode, U), O.return = N, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Ee:
            return U = cf(O.type, O.key, O.props, null, N.mode, U), U.ref = mu(N, null, O), U.return = N, U;
          case De:
            return O = zo(O, N.mode, U), O.return = N, O;
          case yt:
            var ce = O._init;
            return ie(N, ce(O._payload), U);
        }
        if (Qn(O) || He(O))
          return O = No(O, N.mode, U, null), O.return = N, O;
        Lc(N, O);
      }
      return null;
    }
    function te(N, O, U, ce) {
      var je = O !== null ? O.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return je !== null ? null : T(N, O, "" + U, ce);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ee:
            return U.key === je ? _(N, O, U, ce) : null;
          case De:
            return U.key === je ? V(N, O, U, ce) : null;
          case yt:
            return je = U._init, te(
              N,
              O,
              je(U._payload),
              ce
            );
        }
        if (Qn(U) || He(U))
          return je !== null ? null : ne(N, O, U, ce, null);
        Lc(N, U);
      }
      return null;
    }
    function Te(N, O, U, ce, je) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number")
        return N = N.get(U) || null, T(O, N, "" + ce, je);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case Ee:
            return N = N.get(ce.key === null ? U : ce.key) || null, _(O, N, ce, je);
          case De:
            return N = N.get(ce.key === null ? U : ce.key) || null, V(O, N, ce, je);
          case yt:
            var ze = ce._init;
            return Te(N, O, U, ze(ce._payload), je);
        }
        if (Qn(ce) || He(ce))
          return N = N.get(U) || null, ne(O, N, ce, je, null);
        Lc(O, ce);
      }
      return null;
    }
    function Ne(N, O, U, ce) {
      for (var je = null, ze = null, Pe = O, tt = O = 0, tr = null; Pe !== null && tt < U.length; tt++) {
        Pe.index > tt ? (tr = Pe, Pe = null) : tr = Pe.sibling;
        var Ut = te(N, Pe, U[tt], ce);
        if (Ut === null) {
          Pe === null && (Pe = tr);
          break;
        }
        n && Pe && Ut.alternate === null && r(N, Pe), O = d(Ut, O, tt), ze === null ? je = Ut : ze.sibling = Ut, ze = Ut, Pe = tr;
      }
      if (tt === U.length)
        return l(N, Pe), fn && Sa(N, tt), je;
      if (Pe === null) {
        for (; tt < U.length; tt++)
          Pe = ie(N, U[tt], ce), Pe !== null && (O = d(Pe, O, tt), ze === null ? je = Pe : ze.sibling = Pe, ze = Pe);
        return fn && Sa(N, tt), je;
      }
      for (Pe = u(N, Pe); tt < U.length; tt++)
        tr = Te(Pe, N, tt, U[tt], ce), tr !== null && (n && tr.alternate !== null && Pe.delete(tr.key === null ? tt : tr.key), O = d(tr, O, tt), ze === null ? je = tr : ze.sibling = tr, ze = tr);
      return n && Pe.forEach(function(Il) {
        return r(N, Il);
      }), fn && Sa(N, tt), je;
    }
    function Ue(N, O, U, ce) {
      var je = He(U);
      if (typeof je != "function")
        throw Error(S(150));
      if (U = je.call(U), U == null)
        throw Error(S(151));
      for (var ze = je = null, Pe = O, tt = O = 0, tr = null, Ut = U.next(); Pe !== null && !Ut.done; tt++, Ut = U.next()) {
        Pe.index > tt ? (tr = Pe, Pe = null) : tr = Pe.sibling;
        var Il = te(N, Pe, Ut.value, ce);
        if (Il === null) {
          Pe === null && (Pe = tr);
          break;
        }
        n && Pe && Il.alternate === null && r(N, Pe), O = d(Il, O, tt), ze === null ? je = Il : ze.sibling = Il, ze = Il, Pe = tr;
      }
      if (Ut.done)
        return l(
          N,
          Pe
        ), fn && Sa(N, tt), je;
      if (Pe === null) {
        for (; !Ut.done; tt++, Ut = U.next())
          Ut = ie(N, Ut.value, ce), Ut !== null && (O = d(Ut, O, tt), ze === null ? je = Ut : ze.sibling = Ut, ze = Ut);
        return fn && Sa(N, tt), je;
      }
      for (Pe = u(N, Pe); !Ut.done; tt++, Ut = U.next())
        Ut = Te(Pe, N, tt, Ut.value, ce), Ut !== null && (n && Ut.alternate !== null && Pe.delete(Ut.key === null ? tt : Ut.key), O = d(Ut, O, tt), ze === null ? je = Ut : ze.sibling = Ut, ze = Ut);
      return n && Pe.forEach(function(Ay) {
        return r(N, Ay);
      }), fn && Sa(N, tt), je;
    }
    function Mn(N, O, U, ce) {
      if (typeof U == "object" && U !== null && U.type === Le && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ee:
            e: {
              for (var je = U.key, ze = O; ze !== null; ) {
                if (ze.key === je) {
                  if (je = U.type, je === Le) {
                    if (ze.tag === 7) {
                      l(N, ze.sibling), O = c(ze, U.props.children), O.return = N, N = O;
                      break e;
                    }
                  } else if (ze.elementType === je || typeof je == "object" && je !== null && je.$$typeof === yt && Qv(je) === ze.type) {
                    l(N, ze.sibling), O = c(ze, U.props), O.ref = mu(N, ze, U), O.return = N, N = O;
                    break e;
                  }
                  l(N, ze);
                  break;
                } else
                  r(N, ze);
                ze = ze.sibling;
              }
              U.type === Le ? (O = No(U.props.children, N.mode, ce, U.key), O.return = N, N = O) : (ce = cf(U.type, U.key, U.props, null, N.mode, ce), ce.ref = mu(N, O, U), ce.return = N, N = ce);
            }
            return m(N);
          case De:
            e: {
              for (ze = U.key; O !== null; ) {
                if (O.key === ze)
                  if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                    l(N, O.sibling), O = c(O, U.children || []), O.return = N, N = O;
                    break e;
                  } else {
                    l(N, O);
                    break;
                  }
                else
                  r(N, O);
                O = O.sibling;
              }
              O = zo(U, N.mode, ce), O.return = N, N = O;
            }
            return m(N);
          case yt:
            return ze = U._init, Mn(N, O, ze(U._payload), ce);
        }
        if (Qn(U))
          return Ne(N, O, U, ce);
        if (He(U))
          return Ue(N, O, U, ce);
        Lc(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, O !== null && O.tag === 6 ? (l(N, O.sibling), O = c(O, U), O.return = N, N = O) : (l(N, O), O = Hs(U, N.mode, ce), O.return = N, N = O), m(N)) : l(N, O);
    }
    return Mn;
  }
  var yu = qv(!0), Xv = qv(!1), Cs = {}, oi = st(Cs), xs = st(Cs), gu = st(Cs);
  function mo(n) {
    if (n === Cs)
      throw Error(S(174));
    return n;
  }
  function Ld(n, r) {
    switch (Qt(gu, r), Qt(xs, n), Qt(oi, Cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    Bt(oi), Qt(oi, r);
  }
  function Al() {
    Bt(oi), Bt(xs), Bt(gu);
  }
  function Ge(n) {
    mo(gu.current);
    var r = mo(oi.current), l = gn(r, n.type);
    r !== l && (Qt(xs, n), Qt(oi, l));
  }
  function mt(n) {
    xs.current === n && (Bt(oi), Bt(xs));
  }
  var qe = st(0);
  function xn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Fa = [];
  function Mc() {
    for (var n = 0; n < Fa.length; n++)
      Fa[n]._workInProgressVersionPrimary = null;
    Fa.length = 0;
  }
  var Nc = be.ReactCurrentDispatcher, Md = be.ReactCurrentBatchConfig, yo = 0, dn = null, G = null, kt = null, Ke = !1, Ti = !1, xa = 0, go = 0;
  function pn() {
    throw Error(S(321));
  }
  function So(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Ma(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ul(n, r, l, u, c, d) {
    if (yo = d, dn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Nc.current = n === null || n.memoizedState === null ? yy : gy, n = l(u, c), Ti) {
      d = 0;
      do {
        if (Ti = !1, xa = 0, 25 <= d)
          throw Error(S(301));
        d += 1, kt = G = null, r.updateQueue = null, Nc.current = zd, n = l(u, c);
      } while (Ti);
    }
    if (Nc.current = qc, r = G !== null && G.next !== null, yo = 0, kt = G = dn = null, Ke = !1, r)
      throw Error(S(300));
    return n;
  }
  function Eo() {
    var n = xa !== 0;
    return xa = 0, n;
  }
  function Ha() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return kt === null ? dn.memoizedState = kt = n : kt = kt.next = n, kt;
  }
  function aa() {
    if (G === null) {
      var n = dn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = G.next;
    var r = kt === null ? dn.memoizedState : kt.next;
    if (r !== null)
      kt = r, G = n;
    else {
      if (n === null)
        throw Error(S(310));
      G = n, n = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, kt === null ? dn.memoizedState = kt = n : kt = kt.next = n;
    }
    return kt;
  }
  function Co(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ts(n) {
    var r = aa(), l = r.queue;
    if (l === null)
      throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = G, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var T = m = null, _ = null, V = d;
      do {
        var ne = V.lane;
        if ((yo & ne) === ne)
          _ !== null && (_ = _.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), u = V.hasEagerState ? V.eagerState : n(u, V.action);
        else {
          var ie = {
            lane: ne,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          _ === null ? (T = _ = ie, m = u) : _ = _.next = ie, dn.lanes |= ne, Xi |= ne;
        }
        V = V.next;
      } while (V !== null && V !== d);
      _ === null ? m = u : _.next = T, Ma(u, r.memoizedState) || (Un = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = _, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, dn.lanes |= d, Xi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Rs(n) {
    var r = aa(), l = r.queue;
    if (l === null)
      throw Error(S(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ma(d, r.memoizedState) || (Un = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function zc() {
  }
  function Ac(n, r) {
    var l = dn, u = aa(), c = r(), d = !Ma(u.memoizedState, c);
    if (d && (u.memoizedState = c, Un = !0), u = u.queue, bs(Fc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || kt !== null && kt.memoizedState.tag & 1) {
      if (l.flags |= 2048, xo(9, jc.bind(null, l, u, c, r), void 0, null), Tn === null)
        throw Error(S(349));
      yo & 30 || Uc(l, r, c);
    }
    return c;
  }
  function Uc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Hc(r) && Vc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Vc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ma(n, l);
    } catch {
      return !0;
    }
  }
  function Vc(n) {
    var r = Yi(n, 1);
    r !== null && br(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Ha();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Co, lastRenderedState: n }, r.queue = n, n = n.dispatch = Qc.bind(null, dn, n), [r.memoizedState, n];
  }
  function xo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Bc() {
    return aa().memoizedState;
  }
  function To(n, r, l, u) {
    var c = Ha();
    dn.flags |= n, c.memoizedState = xo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Gi(n, r, l, u) {
    var c = aa();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (G !== null) {
      var m = G.memoizedState;
      if (d = m.destroy, u !== null && So(u, m.deps)) {
        c.memoizedState = xo(r, l, d, u);
        return;
      }
    }
    dn.flags |= n, c.memoizedState = xo(1 | r, l, d, u);
  }
  function Ic(n, r) {
    return To(8390656, 8, n, r);
  }
  function bs(n, r) {
    return Gi(2048, 8, n, r);
  }
  function $c(n, r) {
    return Gi(4, 2, n, r);
  }
  function Yc(n, r) {
    return Gi(4, 4, n, r);
  }
  function Nd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Su(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Gi(4, 4, Nd.bind(null, r, n), l);
  }
  function Wc() {
  }
  function Eu(n, r) {
    var l = aa();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && So(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function jl(n, r) {
    var l = aa();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && So(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function ia(n, r, l) {
    return yo & 21 ? (Ma(l, r) || (l = Jo(), dn.lanes |= l, Xi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Un = !0), n.memoizedState = l);
  }
  function my(n, r) {
    var l = Ft;
    Ft = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Md.transition;
    Md.transition = {};
    try {
      n(!1), r();
    } finally {
      Ft = l, Md.transition = u;
    }
  }
  function ln() {
    return aa().memoizedState;
  }
  function Gc(n, r, l) {
    var u = jn(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Cu(n))
      ws(r, l);
    else if (l = Iv(n, r, l, u), l !== null) {
      var c = Rr();
      br(l, n, u, c), Kv(l, r, u);
    }
  }
  function Qc(n, r, l) {
    var u = jn(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Cu(n))
      ws(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, T = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = T, Ma(T, m)) {
            var _ = r.interleaved;
            _ === null ? (c.next = c, _d(r)) : (c.next = _.next, _.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Iv(n, r, c, u), l !== null && (c = Rr(), br(l, n, u, c), Kv(l, r, u));
    }
  }
  function Cu(n) {
    var r = n.alternate;
    return n === dn || r !== null && r === dn;
  }
  function ws(n, r) {
    Ti = Ke = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kv(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, gi(n, l);
    }
  }
  var qc = { readContext: Ln, useCallback: pn, useContext: pn, useEffect: pn, useImperativeHandle: pn, useInsertionEffect: pn, useLayoutEffect: pn, useMemo: pn, useReducer: pn, useRef: pn, useState: pn, useDebugValue: pn, useDeferredValue: pn, useTransition: pn, useMutableSource: pn, useSyncExternalStore: pn, useId: pn, unstable_isNewReconciler: !1 }, yy = { readContext: Ln, useCallback: function(n, r) {
    return Ha().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ln, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, To(
      4194308,
      4,
      Nd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return To(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return To(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ha();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Ha();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Gc.bind(null, dn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Ha();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: Wc, useDeferredValue: function(n) {
    return Ha().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = my.bind(null, n[1]), Ha().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = dn, c = Ha();
    if (fn) {
      if (l === void 0)
        throw Error(S(407));
      l = l();
    } else {
      if (l = r(), Tn === null)
        throw Error(S(349));
      yo & 30 || Uc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, xo(9, jc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ha(), r = Tn.identifierPrefix;
    if (fn) {
      var l = $i, u = ir;
      l = (u & ~(1 << 32 - Or(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = xa++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = go++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, gy = {
    readContext: Ln,
    useCallback: Eu,
    useContext: Ln,
    useEffect: bs,
    useImperativeHandle: Su,
    useInsertionEffect: $c,
    useLayoutEffect: Yc,
    useMemo: jl,
    useReducer: Ts,
    useRef: Bc,
    useState: function() {
      return Ts(Co);
    },
    useDebugValue: Wc,
    useDeferredValue: function(n) {
      var r = aa();
      return ia(r, G.memoizedState, n);
    },
    useTransition: function() {
      var n = Ts(Co)[0], r = aa().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Ac,
    useId: ln,
    unstable_isNewReconciler: !1
  }, zd = { readContext: Ln, useCallback: Eu, useContext: Ln, useEffect: bs, useImperativeHandle: Su, useInsertionEffect: $c, useLayoutEffect: Yc, useMemo: jl, useReducer: Rs, useRef: Bc, useState: function() {
    return Rs(Co);
  }, useDebugValue: Wc, useDeferredValue: function(n) {
    var r = aa();
    return G === null ? r.memoizedState = n : ia(r, G.memoizedState, n);
  }, useTransition: function() {
    var n = Rs(Co)[0], r = aa().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Ac, useId: ln, unstable_isNewReconciler: !1 };
  function xu(n, r) {
    try {
      var l = "", u = r;
      do
        l += wt(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function _s(n, r, l) {
    return { value: n, source: null, stack: null, digest: r ?? null };
  }
  function Xc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Sy = typeof WeakMap == "function" ? WeakMap : Map;
  function Zv(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      rf || (rf = !0, ko = u), Xc(n, r);
    }, l;
  }
  function ks(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Xc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Xc(n, r), typeof u != "function" && (wi === null ? wi = /* @__PURE__ */ new Set([this]) : wi.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Jv(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Sy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = wy.bind(null, n, r, l), r.then(n, n));
  }
  function Ad(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ud(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Nl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ey = be.ReactCurrentOwner, Un = !1;
  function Bn(n, r, l, u) {
    r.child = n === null ? Xv(r, null, l, u) : yu(r, n.child, l, u);
  }
  function Fl(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return me(r, c), u = Ul(n, r, l, u, d, c), l = Eo(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (fn && l && xc(r), r.flags |= 1, Bn(n, r, u, c), r.child);
  }
  function Kc(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !tp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, la(n, r, d, u, c)) : (n = cf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ss, l(m, u) && n.ref === r.ref)
        return or(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function la(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref)
        if (Un = !1, r.pendingProps = u = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Un = !0);
        else
          return r.lanes = n.lanes, or(n, r, c);
    }
    return Tu(n, r, l, u, c);
  }
  function Ro(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qt(Du, Ta), Ta |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qt(Du, Ta), Ta |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Qt(Du, Ta), Ta |= u;
      }
    else
      d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Qt(Du, Ta), Ta |= u;
    return Bn(n, r, c, l), r.child;
  }
  function ct(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Tu(n, r, l, u, c) {
    var d = hn(l) ? Jr : et.current;
    return d = za(r, d), me(r, c), l = Ul(n, r, l, u, d, c), u = Eo(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (fn && u && xc(r), r.flags |= 1, Bn(n, r, l, c), r.child);
  }
  function jd(n, r, l, u, c) {
    if (hn(l)) {
      var d = !0;
      Cc(r);
    } else
      d = !1;
    if (me(r, c), r.stateNode === null)
      Cr(n, r), Wv(r, l, u), Oc(r, l, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, T = r.memoizedProps;
      m.props = T;
      var _ = m.context, V = l.contextType;
      typeof V == "object" && V !== null ? V = Ln(V) : (V = hn(l) ? Jr : et.current, V = za(r, V));
      var ne = l.getDerivedStateFromProps, ie = typeof ne == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ie || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== u || _ !== V) && Gv(r, m, u, V), Ml = !1;
      var te = r.memoizedState;
      m.state = te, zl(r, u, m, c), _ = r.memoizedState, T !== u || te !== _ || wn.current || Ml ? (typeof ne == "function" && (Od(r, l, ne, u), _ = r.memoizedState), (T = Ml || Yv(r, l, T, u, te, _, V)) ? (ie || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = _), m.props = u, m.state = _, m.context = V, u = T) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, Pn(n, r), T = r.memoizedProps, V = r.type === r.elementType ? T : Ca(r.type, T), m.props = V, ie = r.pendingProps, te = m.context, _ = l.contextType, typeof _ == "object" && _ !== null ? _ = Ln(_) : (_ = hn(l) ? Jr : et.current, _ = za(r, _));
      var Te = l.getDerivedStateFromProps;
      (ne = typeof Te == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== ie || te !== _) && Gv(r, m, u, _), Ml = !1, te = r.memoizedState, m.state = te, zl(r, u, m, c);
      var Ne = r.memoizedState;
      T !== ie || te !== Ne || wn.current || Ml ? (typeof Te == "function" && (Od(r, l, Te, u), Ne = r.memoizedState), (V = Ml || Yv(r, l, V, u, te, Ne, _) || !1) ? (ne || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, Ne, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, Ne, _)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ne), m.props = u, m.state = Ne, m.context = _, u = V) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return eh(n, r, l, u, d, c);
  }
  function eh(n, r, l, u, c, d) {
    ct(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m)
      return c && Hv(r, l, !1), or(n, r, d);
    u = r.stateNode, Ey.current = r;
    var T = m && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = yu(r, n.child, null, d), r.child = yu(r, null, T, d)) : Bn(n, r, T, d), r.memoizedState = u.state, c && Hv(r, l, !0), r.child;
  }
  function th(n) {
    var r = n.stateNode;
    r.pendingContext ? kl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && kl(n, r.context, !1), Ld(n, r.containerInfo);
  }
  function Zc(n, r, l, u, c) {
    return Cn(), Rd(c), r.flags |= 256, Bn(n, r, l, u), r.child;
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Hd(n, r, l) {
    var u = r.pendingProps, c = qe.current, d = !1, m = (r.flags & 128) !== 0, T;
    if ((T = m) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Qt(qe, c & 1), n === null)
      return Rc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Fs(m, u, 0, null), n = No(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Fd(l), r.memoizedState = bo, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null))
      return Cy(n, r, m, u, T, c, l);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, T = c.sibling;
      var _ = { mode: "hidden", children: u.children };
      return !(m & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = _, r.deletions = null) : (u = Bl(c, _), u.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Bl(T, d) : (d = No(d, m, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? Fd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = bo, u;
    }
    return d = n.child, n = d.sibling, u = Bl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Vd(n, r) {
    return r = Fs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ru(n, r, l, u) {
    return u !== null && Rd(u), yu(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Cy(n, r, l, u, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = _s(Error(S(422))), Ru(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Fs({ mode: "visible", children: u.children }, c, 0, null), d = No(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && yu(r, n.child, null, m), r.child.memoizedState = Fd(m), r.memoizedState = bo, d);
    if (!(r.mode & 1))
      return Ru(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var T = u.dgst;
      return u = T, d = Error(S(419)), u = _s(d, u), Ru(n, r, m, u);
    }
    if (T = (m & n.childLanes) !== 0, Un || T) {
      if (u = Tn, u !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), br(u, n, c, -1));
      }
      return Zd(), u = _s(Error(S(421))), Ru(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = _y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = li(c.nextSibling), Ea = r, fn = !0, ja = null, n !== null && (na[Er++] = ir, na[Er++] = $i, na[Er++] = Ua, ir = n.id, $i = n.overflow, Ua = r), r = Vd(r, u.children), r.flags |= 4096, r);
  }
  function Pd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Zn(n.return, r, l);
  }
  function Jc(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function Bd(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Bn(n, r, u.children, l), u = qe.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Pd(n, l, r);
            else if (n.tag === 19)
              Pd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Qt(qe, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && xn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Jc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && xn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Jc(r, !0, l, null, d);
          break;
        case "together":
          Jc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Cr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Xi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qi(n, r, l) {
    switch (r.tag) {
      case 3:
        th(r), Cn();
        break;
      case 5:
        Ge(r);
        break;
      case 1:
        hn(r.type) && Cc(r);
        break;
      case 4:
        Ld(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Qt(xi, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Qt(qe, qe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Hd(n, r, l) : (Qt(qe, qe.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Qt(qe, qe.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Bd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Qt(qe, qe.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ro(n, r, l);
    }
    return or(n, r, l);
  }
  var Ds, wo, Va, In;
  Ds = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, wo = function() {
  }, Va = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, mo(oi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Gn(n, c), u = Gn(n, u), d = [];
          break;
        case "select":
          c = w({}, c, { value: void 0 }), u = w({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gr(n, c), u = Gr(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ec);
      }
      On(l, u);
      var m;
      l = null;
      for (V in c)
        if (!u.hasOwnProperty(V) && c.hasOwnProperty(V) && c[V] != null)
          if (V === "style") {
            var T = c[V];
            for (m in T)
              T.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (K.hasOwnProperty(V) ? d || (d = []) : (d = d || []).push(V, null));
      for (V in u) {
        var _ = u[V];
        if (T = c != null ? c[V] : void 0, u.hasOwnProperty(V) && _ !== T && (_ != null || T != null))
          if (V === "style")
            if (T) {
              for (m in T)
                !T.hasOwnProperty(m) || _ && _.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in _)
                _.hasOwnProperty(m) && T[m] !== _[m] && (l || (l = {}), l[m] = _[m]);
            } else
              l || (d || (d = []), d.push(
                V,
                l
              )), l = _;
          else
            V === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, T = T ? T.__html : void 0, _ != null && T !== _ && (d = d || []).push(V, _)) : V === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push(V, "" + _) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (K.hasOwnProperty(V) ? (_ != null && V === "onScroll" && an("scroll", n), d || T === _ || (d = [])) : (d = d || []).push(V, _));
      }
      l && (d = d || []).push("style", l);
      var V = d;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, In = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Os(n, r) {
    if (!fn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function xy(n, r, l) {
    var u = r.pendingProps;
    switch (xd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xr(r), null;
      case 1:
        return hn(r.type) && Aa(), xr(r), null;
      case 3:
        return u = r.stateNode, Al(), Bt(wn), Bt(et), Mc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (js(ja), ja = null))), wo(n, r), xr(r), null;
      case 5:
        mt(r);
        var c = mo(gu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Va(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(S(166));
            return xr(r), null;
          }
          if (n = mo(oi.current), bc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ei] = r, u[po] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                an("cancel", u), an("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                an("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++)
                  an(ps[c], u);
                break;
              case "source":
                an("error", u);
                break;
              case "img":
              case "image":
              case "link":
                an(
                  "error",
                  u
                ), an("load", u);
                break;
              case "details":
                an("toggle", u);
                break;
              case "input":
                Hn(u, d), an("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, an("invalid", u);
                break;
              case "textarea":
                gr(u, d), an("invalid", u);
            }
            On(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var T = d[m];
                m === "children" ? typeof T == "string" ? u.textContent !== T && (d.suppressHydrationWarning !== !0 && Sc(u.textContent, T, n), c = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && Sc(
                  u.textContent,
                  T,
                  n
                ), c = ["children", "" + T]) : K.hasOwnProperty(m) && T != null && m === "onScroll" && an("scroll", u);
              }
            switch (l) {
              case "input":
                mr(u), Yr(u, d, !0);
                break;
              case "textarea":
                mr(u), rr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Ec);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Qr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = m.createElement(l, { is: u.is }) : (n = m.createElement(l), l === "select" && (m = n, u.multiple ? m.multiple = !0 : u.size && (m.size = u.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[po] = u, Ds(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Sn(l, u), l) {
                case "dialog":
                  an("cancel", n), an("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  an("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++)
                    an(ps[c], n);
                  c = u;
                  break;
                case "source":
                  an("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  an(
                    "error",
                    n
                  ), an("load", n), c = u;
                  break;
                case "details":
                  an("toggle", n), c = u;
                  break;
                case "input":
                  Hn(n, u), c = Gn(n, u), an("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = w({}, u, { value: void 0 }), an("invalid", n);
                  break;
                case "textarea":
                  gr(n, u), c = Gr(n, u), an("invalid", n);
                  break;
                default:
                  c = u;
              }
              On(l, c), T = c;
              for (d in T)
                if (T.hasOwnProperty(d)) {
                  var _ = T[d];
                  d === "style" ? Pt(n, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && di(n, _)) : d === "children" ? typeof _ == "string" ? (l !== "textarea" || _ !== "") && va(n, _) : typeof _ == "number" && va(n, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (K.hasOwnProperty(d) ? _ != null && d === "onScroll" && an("scroll", n) : _ != null && oe(n, d, _, m));
                }
              switch (l) {
                case "input":
                  mr(n), Yr(n, u, !1);
                  break;
                case "textarea":
                  mr(n), rr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? yr(n, !!u.multiple, d, !1) : u.defaultValue != null && yr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null)
          In(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(S(166));
          if (l = mo(gu.current), mo(oi.current), bc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ei] = r, (d = u.nodeValue !== l) && (n = Ea, n !== null))
              switch (n.tag) {
                case 3:
                  Sc(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Sc(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ei] = r, r.stateNode = u;
        }
        return xr(r), null;
      case 13:
        if (Bt(qe), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && ra !== null && r.mode & 1 && !(r.flags & 128))
            Bv(), Cn(), r.flags |= 98560, d = !1;
          else if (d = bc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(S(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(S(317));
              d[Ei] = r;
            } else
              Cn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else
            ja !== null && (js(ja), ja = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || qe.current & 1 ? Yn === 0 && (Yn = 3) : Zd())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return Al(), wo(n, r), n === null && pu(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Ll(r.type._context), xr(r), null;
      case 17:
        return hn(r.type) && Aa(), xr(r), null;
      case 19:
        if (Bt(qe), d = r.memoizedState, d === null)
          return xr(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (u)
            Os(d, !1);
          else {
            if (Yn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = xn(n), m !== null) {
                  for (r.flags |= 128, Os(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    d = l, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Qt(qe, qe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Nt() > Lu && (r.flags |= 128, u = !0, Os(d, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = xn(m), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Os(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn)
                return xr(r), null;
            } else
              2 * Nt() - d.renderingStartTime > Lu && l !== 1073741824 && (r.flags |= 128, u = !0, Os(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Nt(), r.sibling = null, l = qe.current, Qt(qe, u ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Kd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ta & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function Id(n, r) {
    switch (xd(r), r.tag) {
      case 1:
        return hn(r.type) && Aa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Al(), Bt(wn), Bt(et), Mc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return mt(r), null;
      case 13:
        if (Bt(qe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(S(340));
          Cn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Bt(qe), null;
      case 4:
        return Al(), null;
      case 10:
        return Ll(r.type._context), null;
      case 22:
      case 23:
        return Kd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ls = !1, $n = !1, nh = typeof WeakSet == "function" ? WeakSet : Set, Me = null;
  function bu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          kn(n, r, u);
        }
      else
        l.current = null;
  }
  function Ms(n, r, l) {
    try {
      l();
    } catch (u) {
      kn(n, r, u);
    }
  }
  var rh = !1;
  function ah(n, r) {
    if (vd = La, n = vc(), Vi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var c = u.anchorOffset, d = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, T = -1, _ = -1, V = 0, ne = 0, ie = n, te = null;
            t:
              for (; ; ) {
                for (var Te; ie !== l || c !== 0 && ie.nodeType !== 3 || (T = m + c), ie !== d || u !== 0 && ie.nodeType !== 3 || (_ = m + u), ie.nodeType === 3 && (m += ie.nodeValue.length), (Te = ie.firstChild) !== null; )
                  te = ie, ie = Te;
                for (; ; ) {
                  if (ie === n)
                    break t;
                  if (te === l && ++V === c && (T = m), te === d && ++ne === u && (_ = m), (Te = ie.nextSibling) !== null)
                    break;
                  ie = te, te = ie.parentNode;
                }
                ie = Te;
              }
            l = T === -1 || _ === -1 ? null : { start: T, end: _ };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (co = { focusedElem: n, selectionRange: l }, La = !1, Me = r; Me !== null; )
      if (r = Me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Me = n;
      else
        for (; Me !== null; ) {
          r = Me;
          try {
            var Ne = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ne !== null) {
                    var Ue = Ne.memoizedProps, Mn = Ne.memoizedState, N = r.stateNode, O = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ue : Ca(r.type, Ue), Mn);
                    N.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var U = r.stateNode.containerInfo;
                  U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(S(163));
              }
          } catch (ce) {
            kn(r, r.return, ce);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Me = n;
            break;
          }
          Me = r.return;
        }
    return Ne = rh, rh = !1, Ne;
  }
  function Ns(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ms(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function zs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function $d(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Yd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Yd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[po], delete r[yd], delete r[hy], delete r[gd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function ih(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ef(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || ih(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function wu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (u !== 4 && (n = n.child, n !== null))
      for (wu(n, r, l), n = n.sibling; n !== null; )
        wu(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Ri(n, r, l), n = n.sibling; n !== null; )
        Ri(n, r, l), n = n.sibling;
  }
  var mn = null, Jn = !1;
  function Pa(n, r, l) {
    for (l = l.child; l !== null; )
      _u(n, r, l), l = l.sibling;
  }
  function _u(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function")
      try {
        qr.onCommitFiberUnmount(pl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        $n || bu(l, r);
      case 6:
        var u = mn, c = Jn;
        mn = null, Pa(n, r, l), mn = u, Jn = c, mn !== null && (Jn ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (Jn ? (n = mn, l = l.stateNode, n.nodeType === 8 ? bl(n.parentNode, l) : n.nodeType === 1 && bl(n, l), El(n)) : bl(mn, l.stateNode));
        break;
      case 4:
        u = mn, c = Jn, mn = l.stateNode.containerInfo, Jn = !0, Pa(n, r, l), mn = u, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$n && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ms(l, r, m), c = c.next;
          } while (c !== u);
        }
        Pa(n, r, l);
        break;
      case 1:
        if (!$n && (bu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (T) {
            kn(l, r, T);
          }
        Pa(n, r, l);
        break;
      case 21:
        Pa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? ($n = (u = $n) || l.memoizedState !== null, Pa(n, r, l), $n = u) : Pa(n, r, l);
        break;
      default:
        Pa(n, r, l);
    }
  }
  function qi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new nh()), r.forEach(function(u) {
        var c = ky.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function ui(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        try {
          var d = n, m = r, T = m;
          e:
            for (; T !== null; ) {
              switch (T.tag) {
                case 5:
                  mn = T.stateNode, Jn = !1;
                  break e;
                case 3:
                  mn = T.stateNode.containerInfo, Jn = !0;
                  break e;
                case 4:
                  mn = T.stateNode.containerInfo, Jn = !0;
                  break e;
              }
              T = T.return;
            }
          if (mn === null)
            throw Error(S(160));
          _u(d, m, c), mn = null, Jn = !1;
          var _ = c.alternate;
          _ !== null && (_.return = null), c.return = null;
        } catch (V) {
          kn(c, r, V);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        lh(r, n), r = r.sibling;
  }
  function lh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ui(r, n), bi(n), u & 4) {
          try {
            Ns(3, n, n.return), zs(3, n);
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
          try {
            Ns(5, n, n.return);
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        break;
      case 1:
        ui(r, n), bi(n), u & 512 && l !== null && bu(l, l.return);
        break;
      case 5:
        if (ui(r, n), bi(n), u & 512 && l !== null && bu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            va(c, "");
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, T = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null)
            try {
              T === "input" && d.type === "radio" && d.name != null && Vn(c, d), Sn(T, m);
              var V = Sn(T, d);
              for (m = 0; m < _.length; m += 2) {
                var ne = _[m], ie = _[m + 1];
                ne === "style" ? Pt(c, ie) : ne === "dangerouslySetInnerHTML" ? di(c, ie) : ne === "children" ? va(c, ie) : oe(c, ne, ie, V);
              }
              switch (T) {
                case "input":
                  Dn(c, d);
                  break;
                case "textarea":
                  pa(c, d);
                  break;
                case "select":
                  var te = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Te = d.value;
                  Te != null ? yr(c, !!d.multiple, Te, !1) : te !== !!d.multiple && (d.defaultValue != null ? yr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : yr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[po] = d;
            } catch (Ue) {
              kn(n, n.return, Ue);
            }
        }
        break;
      case 6:
        if (ui(r, n), bi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(S(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        }
        break;
      case 3:
        if (ui(r, n), bi(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            El(r.containerInfo);
          } catch (Ue) {
            kn(n, n.return, Ue);
          }
        break;
      case 4:
        ui(r, n), bi(n);
        break;
      case 13:
        ui(r, n), bi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = Nt())), u & 4 && qi(n);
        break;
      case 22:
        if (ne = l !== null && l.memoizedState !== null, n.mode & 1 ? ($n = (V = $n) || ne, ui(r, n), $n = V) : ui(r, n), bi(n), u & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !ne && n.mode & 1)
            for (Me = n, ne = n.child; ne !== null; ) {
              for (ie = Me = ne; Me !== null; ) {
                switch (te = Me, Te = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ns(4, te, te.return);
                    break;
                  case 1:
                    bu(te, te.return);
                    var Ne = te.stateNode;
                    if (typeof Ne.componentWillUnmount == "function") {
                      u = te, l = te.return;
                      try {
                        r = u, Ne.props = r.memoizedProps, Ne.state = r.memoizedState, Ne.componentWillUnmount();
                      } catch (Ue) {
                        kn(u, l, Ue);
                      }
                    }
                    break;
                  case 5:
                    bu(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      Wd(ie);
                      continue;
                    }
                }
                Te !== null ? (Te.return = te, Me = Te) : Wd(ie);
              }
              ne = ne.sibling;
            }
          e:
            for (ne = null, ie = n; ; ) {
              if (ie.tag === 5) {
                if (ne === null) {
                  ne = ie;
                  try {
                    c = ie.stateNode, V ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = ie.stateNode, _ = ie.memoizedProps.style, m = _ != null && _.hasOwnProperty("display") ? _.display : null, T.style.display = pt("display", m));
                  } catch (Ue) {
                    kn(n, n.return, Ue);
                  }
                }
              } else if (ie.tag === 6) {
                if (ne === null)
                  try {
                    ie.stateNode.nodeValue = V ? "" : ie.memoizedProps;
                  } catch (Ue) {
                    kn(n, n.return, Ue);
                  }
              } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === n) && ie.child !== null) {
                ie.child.return = ie, ie = ie.child;
                continue;
              }
              if (ie === n)
                break e;
              for (; ie.sibling === null; ) {
                if (ie.return === null || ie.return === n)
                  break e;
                ne === ie && (ne = null), ie = ie.return;
              }
              ne === ie && (ne = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
        }
        break;
      case 19:
        ui(r, n), bi(n), u & 4 && qi(n);
        break;
      case 21:
        break;
      default:
        ui(
          r,
          n
        ), bi(n);
    }
  }
  function bi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (ih(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (va(c, ""), u.flags &= -33);
            var d = ef(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo, T = ef(n);
            wu(n, T, m);
            break;
          default:
            throw Error(S(161));
        }
      } catch (_) {
        kn(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oh(n, r, l) {
    Me = n, ku(n);
  }
  function ku(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Me !== null; ) {
      var c = Me, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || Ls;
        if (!m) {
          var T = c.alternate, _ = T !== null && T.memoizedState !== null || $n;
          T = Ls;
          var V = $n;
          if (Ls = m, ($n = _) && !V)
            for (Me = c; Me !== null; )
              m = Me, _ = m.child, m.tag === 22 && m.memoizedState !== null ? sh(c) : _ !== null ? (_.return = m, Me = _) : sh(c);
          for (; d !== null; )
            Me = d, ku(d), d = d.sibling;
          Me = c, Ls = T, $n = V;
        }
        uh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Me = d) : uh(n);
    }
  }
  function uh(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                $n || zs(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !$n)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Ca(r.type, l.memoizedProps);
                    u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ho(r, d, u);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ho(r, m, l);
                }
                break;
              case 5:
                var T = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = T;
                  var _ = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      _.autoFocus && l.focus();
                      break;
                    case "img":
                      _.src && (l.src = _.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var V = r.alternate;
                  if (V !== null) {
                    var ne = V.memoizedState;
                    if (ne !== null) {
                      var ie = ne.dehydrated;
                      ie !== null && El(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(S(163));
            }
          $n || r.flags & 512 && $d(r);
        } catch (te) {
          kn(r, r.return, te);
        }
      }
      if (r === n) {
        Me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Me = l;
        break;
      }
      Me = r.return;
    }
  }
  function Wd(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r === n) {
        Me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Me = l;
        break;
      }
      Me = r.return;
    }
  }
  function sh(n) {
    for (; Me !== null; ) {
      var r = Me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              zs(4, r);
            } catch (_) {
              kn(r, l, _);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (_) {
                kn(r, c, _);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (_) {
              kn(r, d, _);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (_) {
              kn(r, m, _);
            }
        }
      } catch (_) {
        kn(r, r.return, _);
      }
      if (r === n) {
        Me = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Me = T;
        break;
      }
      Me = r.return;
    }
  }
  var tf = Math.ceil, As = be.ReactCurrentDispatcher, Gd = be.ReactCurrentOwner, Tr = be.ReactCurrentBatchConfig, Et = 0, Tn = null, _n = null, er = 0, Ta = 0, Du = st(0), Yn = 0, Us = null, Xi = 0, nf = 0, Ou = 0, _o = null, Nr = null, Qd = 0, Lu = 1 / 0, Ki = null, rf = !1, ko = null, wi = null, Hl = !1, Vl = null, af = 0, Mu = 0, lf = null, Do = -1, Oo = 0;
  function Rr() {
    return Et & 6 ? Nt() : Do !== -1 ? Do : Do = Nt();
  }
  function jn(n) {
    return n.mode & 1 ? Et & 2 && er !== 0 ? er & -er : wc.transition !== null ? (Oo === 0 && (Oo = Jo()), Oo) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function br(n, r, l, u) {
    if (50 < Mu)
      throw Mu = 0, lf = null, Error(S(185));
    Ai(n, l, u), (!(Et & 2) || n !== Tn) && (n === Tn && (!(Et & 2) && (nf |= l), Yn === 4 && Ba(n, er)), wr(n, u), l === 1 && Et === 0 && !(r.mode & 1) && (Lu = Nt() + 500, Kn && ea()));
  }
  function wr(n, r) {
    var l = n.callbackNode;
    ml(n, r);
    var u = Lr(n, n === Tn ? er : 0);
    if (u === 0)
      l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1)
        n.tag === 0 ? Ed(ch.bind(null, n)) : Sd(ch.bind(null, n)), md(function() {
          !(Et & 6) && ea();
        }), l = null;
      else {
        switch (tu(u)) {
          case 1:
            l = ei;
            break;
          case 4:
            l = vt;
            break;
          case 16:
            l = yi;
            break;
          case 536870912:
            l = Ko;
            break;
          default:
            l = yi;
        }
        l = ep(l, Nu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Nu(n, r) {
    if (Do = -1, Oo = 0, Et & 6)
      throw Error(S(327));
    var l = n.callbackNode;
    if (Au() && n.callbackNode !== l)
      return null;
    var u = Lr(n, n === Tn ? er : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = uf(n, u);
    else {
      r = u;
      var c = Et;
      Et |= 2;
      var d = of();
      (Tn !== n || er !== r) && (Ki = null, Lu = Nt() + 500, Lo(n, r));
      do
        try {
          Ry();
          break;
        } catch (T) {
          fh(n, T);
        }
      while (!0);
      wd(), As.current = d, Et = c, _n !== null ? r = 0 : (Tn = null, er = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (u = c, r = qd(n, c))), r === 1)
        throw l = Us, Lo(n, 0), Ba(n, u), wr(n, Nt()), l;
      if (r === 6)
        Ba(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Xd(c) && (r = uf(n, u), r === 2 && (d = yl(n), d !== 0 && (u = d, r = qd(n, d))), r === 1))
          throw l = Us, Lo(n, 0), Ba(n, u), wr(n, Nt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Mo(n, Nr, Ki);
            break;
          case 3:
            if (Ba(n, u), (u & 130023424) === u && (r = Qd + 500 - Nt(), 10 < r)) {
              if (Lr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Rr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = fo(Mo.bind(null, n, Nr, Ki), r);
              break;
            }
            Mo(n, Nr, Ki);
            break;
          case 4:
            if (Ba(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - Or(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = Nt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * tf(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = fo(Mo.bind(null, n, Nr, Ki), u);
              break;
            }
            Mo(n, Nr, Ki);
            break;
          case 5:
            Mo(n, Nr, Ki);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return wr(n, Nt()), n.callbackNode === l ? Nu.bind(null, n) : null;
  }
  function qd(n, r) {
    var l = _o;
    return n.current.memoizedState.isDehydrated && (Lo(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = Nr, Nr = l, r !== null && js(r)), n;
  }
  function js(n) {
    Nr === null ? Nr = n : Nr.push.apply(Nr, n);
  }
  function Xd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var u = 0; u < l.length; u++) {
            var c = l[u], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Ma(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ba(n, r) {
    for (r &= ~Ou, r &= ~nf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function ch(n) {
    if (Et & 6)
      throw Error(S(327));
    Au();
    var r = Lr(n, 0);
    if (!(r & 1))
      return wr(n, Nt()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = yl(n);
      u !== 0 && (r = u, l = qd(n, u));
    }
    if (l === 1)
      throw l = Us, Lo(n, 0), Ba(n, r), wr(n, Nt()), l;
    if (l === 6)
      throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mo(n, Nr, Ki), wr(n, Nt()), null;
  }
  function zu(n, r) {
    var l = Et;
    Et |= 1;
    try {
      return n(r);
    } finally {
      Et = l, Et === 0 && (Lu = Nt() + 500, Kn && ea());
    }
  }
  function Pl(n) {
    Vl !== null && Vl.tag === 0 && !(Et & 6) && Au();
    var r = Et;
    Et |= 1;
    var l = Tr.transition, u = Ft;
    try {
      if (Tr.transition = null, Ft = 1, n)
        return n();
    } finally {
      Ft = u, Tr.transition = l, Et = r, !(Et & 6) && ea();
    }
  }
  function Kd() {
    Ta = Du.current, Bt(Du);
  }
  function Lo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Fv(l)), _n !== null)
      for (l = _n.return; l !== null; ) {
        var u = l;
        switch (xd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Aa();
            break;
          case 3:
            Al(), Bt(wn), Bt(et), Mc();
            break;
          case 5:
            mt(u);
            break;
          case 4:
            Al();
            break;
          case 13:
            Bt(qe);
            break;
          case 19:
            Bt(qe);
            break;
          case 10:
            Ll(u.type._context);
            break;
          case 22:
          case 23:
            Kd();
        }
        l = l.return;
      }
    if (Tn = n, _n = n = Bl(n.current, null), er = Ta = r, Yn = 0, Us = null, Ou = nf = Xi = 0, Nr = _o = null, lr !== null) {
      for (r = 0; r < lr.length; r++)
        if (l = lr[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var c = u.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, u.next = m;
          }
          l.pending = u;
        }
      lr = null;
    }
    return n;
  }
  function fh(n, r) {
    do {
      var l = _n;
      try {
        if (wd(), Nc.current = qc, Ke) {
          for (var u = dn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ke = !1;
        }
        if (yo = 0, kt = G = dn = null, Ti = !1, xa = 0, Gd.current = null, l === null || l.return === null) {
          Yn = 1, Us = r, _n = null;
          break;
        }
        e: {
          var d = n, m = l.return, T = l, _ = r;
          if (r = er, T.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var V = _, ne = T, ie = ne.tag;
            if (!(ne.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var te = ne.alternate;
              te ? (ne.updateQueue = te.updateQueue, ne.memoizedState = te.memoizedState, ne.lanes = te.lanes) : (ne.updateQueue = null, ne.memoizedState = null);
            }
            var Te = Ad(m);
            if (Te !== null) {
              Te.flags &= -257, Ud(Te, m, T, d, r), Te.mode & 1 && Jv(d, V, r), r = Te, _ = V;
              var Ne = r.updateQueue;
              if (Ne === null) {
                var Ue = /* @__PURE__ */ new Set();
                Ue.add(_), r.updateQueue = Ue;
              } else
                Ne.add(_);
              break e;
            } else {
              if (!(r & 1)) {
                Jv(d, V, r), Zd();
                break e;
              }
              _ = Error(S(426));
            }
          } else if (fn && T.mode & 1) {
            var Mn = Ad(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Ud(Mn, m, T, d, r), Rd(xu(_, T));
              break e;
            }
          }
          d = _ = xu(_, T), Yn !== 4 && (Yn = 2), _o === null ? _o = [d] : _o.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Zv(d, _, r);
                Dd(d, N);
                break e;
              case 1:
                T = _;
                var O = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof O.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (wi === null || !wi.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = ks(d, T, r);
                  Dd(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Jd(l);
      } catch (je) {
        r = je, _n === l && l !== null && (_n = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function of() {
    var n = As.current;
    return As.current = qc, n === null ? qc : n;
  }
  function Zd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Tn === null || !(Xi & 268435455) && !(nf & 268435455) || Ba(Tn, er);
  }
  function uf(n, r) {
    var l = Et;
    Et |= 2;
    var u = of();
    (Tn !== n || er !== r) && (Ki = null, Lo(n, r));
    do
      try {
        Ty();
        break;
      } catch (c) {
        fh(n, c);
      }
    while (!0);
    if (wd(), Et = l, As.current = u, _n !== null)
      throw Error(S(261));
    return Tn = null, er = 0, Yn;
  }
  function Ty() {
    for (; _n !== null; )
      dh(_n);
  }
  function Ry() {
    for (; _n !== null && !mi(); )
      dh(_n);
  }
  function dh(n) {
    var r = vh(n.alternate, n, Ta);
    n.memoizedProps = n.pendingProps, r === null ? Jd(n) : _n = r, Gd.current = null;
  }
  function Jd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Id(l, r), l !== null) {
          l.flags &= 32767, _n = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, _n = null;
          return;
        }
      } else if (l = xy(l, r, Ta), l !== null) {
        _n = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        _n = r;
        return;
      }
      _n = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Mo(n, r, l) {
    var u = Ft, c = Tr.transition;
    try {
      Tr.transition = null, Ft = 1, by(n, r, l, u);
    } finally {
      Tr.transition = c, Ft = u;
    }
    return null;
  }
  function by(n, r, l, u) {
    do
      Au();
    while (Vl !== null);
    if (Et & 6)
      throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (qf(n, d), n === Tn && (_n = Tn = null, er = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Hl || (Hl = !0, ep(yi, function() {
      return Au(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Tr.transition, Tr.transition = null;
      var m = Ft;
      Ft = 1;
      var T = Et;
      Et |= 4, Gd.current = null, ah(n, l), lh(l, n), hc(co), La = !!vd, co = vd = null, n.current = l, oh(l), Xo(), Et = T, Ft = m, Tr.transition = d;
    } else
      n.current = l;
    if (Hl && (Hl = !1, Vl = n, af = c), d = n.pendingLanes, d === 0 && (wi = null), ts(l.stateNode), wr(n, Nt()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (rf)
      throw rf = !1, n = ko, ko = null, n;
    return af & 1 && n.tag !== 0 && Au(), d = n.pendingLanes, d & 1 ? n === lf ? Mu++ : (Mu = 0, lf = n) : Mu = 0, ea(), null;
  }
  function Au() {
    if (Vl !== null) {
      var n = tu(af), r = Tr.transition, l = Ft;
      try {
        if (Tr.transition = null, Ft = 16 > n ? 16 : n, Vl === null)
          var u = !1;
        else {
          if (n = Vl, Vl = null, af = 0, Et & 6)
            throw Error(S(331));
          var c = Et;
          for (Et |= 4, Me = n.current; Me !== null; ) {
            var d = Me, m = d.child;
            if (Me.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var _ = 0; _ < T.length; _++) {
                  var V = T[_];
                  for (Me = V; Me !== null; ) {
                    var ne = Me;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, ne, d);
                    }
                    var ie = ne.child;
                    if (ie !== null)
                      ie.return = ne, Me = ie;
                    else
                      for (; Me !== null; ) {
                        ne = Me;
                        var te = ne.sibling, Te = ne.return;
                        if (Yd(ne), ne === V) {
                          Me = null;
                          break;
                        }
                        if (te !== null) {
                          te.return = Te, Me = te;
                          break;
                        }
                        Me = Te;
                      }
                  }
                }
                var Ne = d.alternate;
                if (Ne !== null) {
                  var Ue = Ne.child;
                  if (Ue !== null) {
                    Ne.child = null;
                    do {
                      var Mn = Ue.sibling;
                      Ue.sibling = null, Ue = Mn;
                    } while (Ue !== null);
                  }
                }
                Me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, Me = m;
            else
              e:
                for (; Me !== null; ) {
                  if (d = Me, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, d, d.return);
                    }
                  var N = d.sibling;
                  if (N !== null) {
                    N.return = d.return, Me = N;
                    break e;
                  }
                  Me = d.return;
                }
          }
          var O = n.current;
          for (Me = O; Me !== null; ) {
            m = Me;
            var U = m.child;
            if (m.subtreeFlags & 2064 && U !== null)
              U.return = m, Me = U;
            else
              e:
                for (m = O; Me !== null; ) {
                  if (T = Me, T.flags & 2048)
                    try {
                      switch (T.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zs(9, T);
                      }
                    } catch (je) {
                      kn(T, T.return, je);
                    }
                  if (T === m) {
                    Me = null;
                    break e;
                  }
                  var ce = T.sibling;
                  if (ce !== null) {
                    ce.return = T.return, Me = ce;
                    break e;
                  }
                  Me = T.return;
                }
          }
          if (Et = c, ea(), qr && typeof qr.onPostCommitFiberRoot == "function")
            try {
              qr.onPostCommitFiberRoot(pl, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Ft = l, Tr.transition = r;
      }
    }
    return !1;
  }
  function ph(n, r, l) {
    r = xu(l, r), r = Zv(n, r, 1), n = Nl(n, r, 1), r = Rr(), n !== null && (Ai(n, 1, r), wr(n, r));
  }
  function kn(n, r, l) {
    if (n.tag === 3)
      ph(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ph(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (wi === null || !wi.has(u))) {
            n = xu(l, n), n = ks(r, n, 1), r = Nl(r, n, 1), n = Rr(), r !== null && (Ai(r, 1, n), wr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function wy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Rr(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && (er & l) === l && (Yn === 4 || Yn === 3 && (er & 130023424) === er && 500 > Nt() - Qd ? Lo(n, 0) : Ou |= l), wr(n, r);
  }
  function sf(n, r) {
    r === 0 && (n.mode & 1 ? (r = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : r = 1);
    var l = Rr();
    n = Yi(n, r), n !== null && (Ai(n, r, l), wr(n, l));
  }
  function _y(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), sf(n, l);
  }
  function ky(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    u !== null && u.delete(r), sf(n, l);
  }
  var vh;
  vh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || wn.current)
        Un = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Un = !1, Qi(n, r, l);
        Un = !!(n.flags & 131072);
      }
    else
      Un = !1, fn && r.flags & 1048576 && Cd(r, hu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Cr(n, r), n = r.pendingProps;
        var c = za(r, et.current);
        me(r, l), c = Ul(null, r, u, n, c, l);
        var d = Eo();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, hn(u) ? (d = !0, Cc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, kd(r), c.updater = Dc, r.stateNode = c, c._reactInternals = r, Oc(r, u, n, l), r = eh(null, r, u, !0, d, l)) : (r.tag = 0, fn && d && xc(r), Bn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Cr(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Oy(u), n = Ca(u, n), c) {
            case 0:
              r = Tu(null, r, u, n, l);
              break e;
            case 1:
              r = jd(null, r, u, n, l);
              break e;
            case 11:
              r = Fl(null, r, u, n, l);
              break e;
            case 14:
              r = Kc(null, r, u, Ca(u.type, n), l);
              break e;
          }
          throw Error(S(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ca(u, c), Tu(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ca(u, c), jd(n, r, u, c, l);
      case 3:
        e: {
          if (th(r), n === null)
            throw Error(S(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Pn(n, r), zl(r, u, null, l);
          var m = r.memoizedState;
          if (u = m.element, d.isDehydrated)
            if (d = { element: u, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = xu(Error(S(423)), r), r = Zc(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = xu(Error(S(424)), r), r = Zc(n, r, u, l, c);
              break e;
            } else
              for (ra = li(r.stateNode.containerInfo.firstChild), Ea = r, fn = !0, ja = null, l = Xv(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Cn(), u === c) {
              r = or(n, r, l);
              break e;
            }
            Bn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ge(r), n === null && Rc(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ms(u, c) ? m = null : d !== null && ms(u, d) && (r.flags |= 32), ct(n, r), Bn(n, r, m, l), r.child;
      case 6:
        return n === null && Rc(r), null;
      case 13:
        return Hd(n, r, l);
      case 4:
        return Ld(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = yu(r, null, u, l) : Bn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ca(u, c), Fl(n, r, u, c, l);
      case 7:
        return Bn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Bn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Bn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Qt(xi, u._currentValue), u._currentValue = m, d !== null)
            if (Ma(d.value, m)) {
              if (d.children === c.children && !wn.current) {
                r = or(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var T = d.dependencies;
                if (T !== null) {
                  m = d.child;
                  for (var _ = T.firstContext; _ !== null; ) {
                    if (_.context === u) {
                      if (d.tag === 1) {
                        _ = Wi(-1, l & -l), _.tag = 2;
                        var V = d.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var ne = V.pending;
                          ne === null ? _.next = _ : (_.next = ne.next, ne.next = _), V.pending = _;
                        }
                      }
                      d.lanes |= l, _ = d.alternate, _ !== null && (_.lanes |= l), Zn(
                        d.return,
                        l,
                        r
                      ), T.lanes |= l;
                      break;
                    }
                    _ = _.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(S(341));
                  m.lanes |= l, T = m.alternate, T !== null && (T.lanes |= l), Zn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Bn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, me(r, l), c = Ln(c), u = u(c), r.flags |= 1, Bn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = Ca(u, r.pendingProps), c = Ca(u.type, c), Kc(n, r, u, c, l);
      case 15:
        return la(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Ca(u, c), Cr(n, r), r.tag = 1, hn(u) ? (n = !0, Cc(r)) : n = !1, me(r, l), Wv(r, u, c), Oc(r, u, c, l), eh(null, r, u, !0, n, l);
      case 19:
        return Bd(n, r, l);
      case 22:
        return Ro(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function ep(n, r) {
    return un(n, r);
  }
  function Dy(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, u) {
    return new Dy(n, r, l, u);
  }
  function tp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Oy(n) {
    if (typeof n == "function")
      return tp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Jt)
        return 11;
      if (n === jt)
        return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function")
      tp(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Le:
            return No(l.children, c, d, r);
          case gt:
            m = 8, c |= 8;
            break;
          case bt:
            return n = Ia(12, l, r, c | 2), n.elementType = bt, n.lanes = d, n;
          case Be:
            return n = Ia(13, l, r, c), n.elementType = Be, n.lanes = d, n;
          case nt:
            return n = Ia(19, l, r, c), n.elementType = nt, n.lanes = d, n;
          case Oe:
            return Fs(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Mt:
                  m = 10;
                  break e;
                case xt:
                  m = 9;
                  break e;
                case Jt:
                  m = 11;
                  break e;
                case jt:
                  m = 14;
                  break e;
                case yt:
                  m = 16, u = null;
                  break e;
              }
            throw Error(S(130, n == null ? n : typeof n, ""));
        }
    return r = Ia(m, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function No(n, r, l, u) {
    return n = Ia(7, n, u, r), n.lanes = l, n;
  }
  function Fs(n, r, l, u) {
    return n = Ia(22, n, u, r), n.elementType = Oe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Hs(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function zo(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ly(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eu(0), this.expirationTimes = eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, u, c, d, m, T, _) {
    return n = new Ly(n, r, l, T, _), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ia(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kd(d), n;
  }
  function hh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: De, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function np(n) {
    if (!n)
      return Ci;
    n = n._reactInternals;
    e: {
      if (ot(n) !== n || n.tag !== 1)
        throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (hn(l))
        return Ss(n, l, r);
    }
    return r;
  }
  function mh(n, r, l, u, c, d, m, T, _) {
    return n = ff(l, u, !0, n, c, d, m, T, _), n.context = np(null), l = n.current, u = Rr(), c = jn(l), d = Wi(u, c), d.callback = r ?? null, Nl(l, d, c), n.current.lanes = c, Ai(n, c, u), wr(n, u), n;
  }
  function Vs(n, r, l, u) {
    var c = r.current, d = Rr(), m = jn(c);
    return l = np(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Nl(c, r, m), n !== null && (br(n, c, m, d), kc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function yh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function rp(n, r) {
    yh(n, r), (n = n.alternate) && yh(n, r);
  }
  function gh() {
    return null;
  }
  var ap = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function pf(n) {
    this._internalRoot = n;
  }
  Zi.prototype.render = pf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(S(409));
    Vs(n, r, null, null);
  }, Zi.prototype.unmount = pf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Pl(function() {
        Vs(null, n, null, null);
      }), r[Ii] = null;
    }
  };
  function Zi(n) {
    this._internalRoot = n;
  }
  Zi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ru();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Gt.length && r !== 0 && r < Gt[l].priority; l++)
        ;
      Gt.splice(l, 0, n), l === 0 && uc(n);
    }
  };
  function ip(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Sh() {
  }
  function My(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var V = df(m);
          d.call(V);
        };
      }
      var m = mh(r, u, n, 0, null, !1, !1, "", Sh);
      return n._reactRootContainer = m, n[Ii] = m.current, pu(n.nodeType === 8 ? n.parentNode : n), Pl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var T = u;
      u = function() {
        var V = df(_);
        T.call(V);
      };
    }
    var _ = ff(n, 0, !1, null, null, !1, !1, "", Sh);
    return n._reactRootContainer = _, n[Ii] = _.current, pu(n.nodeType === 8 ? n.parentNode : n), Pl(function() {
      Vs(r, _, l, u);
    }), _;
  }
  function hf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var _ = df(m);
          T.call(_);
        };
      }
      Vs(r, m, n, c);
    } else
      m = My(l, r, n, c, u);
    return df(m);
  }
  ro = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ti(r.pendingLanes);
          l !== 0 && (gi(r, l | 1), wr(r, Nt()), !(Et & 6) && (Lu = Nt() + 500, ea()));
        }
        break;
      case 13:
        Pl(function() {
          var u = Yi(n, 1);
          if (u !== null) {
            var c = Rr();
            br(u, n, 1, c);
          }
        }), rp(n, 1);
    }
  }, nu = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var l = Rr();
        br(r, n, 134217728, l);
      }
      rp(n, 134217728);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = jn(n), l = Yi(n, r);
      if (l !== null) {
        var u = Rr();
        br(l, n, r, u);
      }
      rp(n, r);
    }
  }, ru = function() {
    return Ft;
  }, au = function(n, r) {
    var l = Ft;
    try {
      return Ft = n, r();
    } finally {
      Ft = l;
    }
  }, kr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Ie(u);
              if (!c)
                throw Error(S(90));
              $r(u), Dn(u, c);
            }
          }
        }
        break;
      case "textarea":
        pa(n, l);
        break;
      case "select":
        r = l.value, r != null && yr(n, !!l.multiple, r, !1);
    }
  }, no = zu, qo = Pl;
  var Ny = { usingClientEntryPoint: !1, Events: [gs, vu, Ie, Da, cl, zu] }, Uu = { findFiberByHostInstance: Na, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, zy = { bundleType: Uu.bundleType, version: Uu.version, rendererPackageName: Uu.rendererPackageName, rendererConfig: Uu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = zn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Uu.findFiberByHostInstance || gh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mf.isDisabled && mf.supportsFiber)
      try {
        pl = mf.inject(zy), qr = mf;
      } catch {
      }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ip(r))
      throw Error(S(200));
    return hh(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!ip(n))
      throw Error(S(299));
    var l = !1, u = "", c = ap;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, u, c), n[Ii] = r.current, pu(n.nodeType === 8 ? n.parentNode : n), new pf(r);
  }, qa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = zn(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return Pl(n);
  }, qa.hydrate = function(n, r, l) {
    if (!vf(r))
      throw Error(S(200));
    return hf(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!ip(n))
      throw Error(S(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", m = ap;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = mh(r, null, n, 1, l ?? null, c, !1, d, m), n[Ii] = r.current, pu(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Zi(r);
  }, qa.render = function(n, r, l) {
    if (!vf(r))
      throw Error(S(200));
    return hf(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!vf(n))
      throw Error(S(40));
    return n._reactRootContainer ? (Pl(function() {
      hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ii] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = zu, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!vf(l))
      throw Error(S(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(S(38));
    return hf(n, r, l, !1, u);
  }, qa.version = "18.2.0-next-9e3b772b8-20220608", qa;
}
var Xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _x;
function Wk() {
  return _x || (_x = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var x = Qo(), C = Ix(), S = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = !1;
    function K(e) {
      k = e;
    }
    function P(e) {
      if (!k) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ve("warn", e, a);
      }
    }
    function g(e) {
      if (!k) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ve("error", e, a);
      }
    }
    function ve(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Q = 0, W = 1, se = 2, I = 3, Z = 4, q = 5, de = 6, ee = 7, ae = 8, Xe = 9, pe = 10, oe = 11, be = 12, Ee = 13, De = 14, Le = 15, gt = 16, bt = 17, Mt = 18, xt = 19, Jt = 21, Be = 22, nt = 23, jt = 24, yt = 25, Oe = !0, fe = !1, He = !1, w = !1, J = !1, Ce = !0, rt = !1, Ze = !1, wt = !0, ft = !0, St = !0, dt = /* @__PURE__ */ new Set(), It = {}, Ir = {};
    function mr(e, t) {
      $r(e, t), $r(e + "Capture", t);
    }
    function $r(e, t) {
      It[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), It[e] = t;
      {
        var a = e.toLowerCase();
        Ir[a] = e, e === "onDoubleClick" && (Ir.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        dt.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Vn(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function Yr(e, t) {
      if (Vn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function Wr(e) {
      if (Vn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    function Qn(e, t) {
      if (Vn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function yr(e, t) {
      if (Vn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function Gr(e) {
      if (Vn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    function gr(e) {
      if (Vn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    var pa = 0, rr = 1, Qr = 2, gn = 3, _r = 4, di = 5, va = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ve = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", pt = new RegExp("^[" + he + "][" + Ve + "]*$"), Pt = {}, $t = {};
    function On(e) {
      return Gn.call($t, e) ? !0 : Gn.call(Pt, e) ? !1 : pt.test(e) ? ($t[e] = !0, !0) : (Pt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, a) {
      return t !== null ? t.type === pa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Sr(e, t, a, i) {
      if (a !== null && a.type === pa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Sr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case gn:
            return !t;
          case _r:
            return t === !1;
          case di:
            return isNaN(t);
          case va:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function kr(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Yt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Qr || t === gn || t === _r, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Wt = {}, Ja = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ja.forEach(function(e) {
      Wt[e] = new Yt(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Wt[t] = new Yt(
        t,
        rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        _r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        va,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        di,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Da = /[\-\:]([a-z])/g, cl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, cl);
      Wt[t] = new Yt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, cl);
      Wt[t] = new Yt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, cl);
      Wt[t] = new Yt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var no = "xlinkHref";
    Wt[no] = new Yt(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Yt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var qo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zi = !1;
    function fl(e) {
      !zi && qo.test(e) && (zi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ha(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Yr(a, t), i.sanitizeURL && fl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === _r) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === gn)
            return a;
          f = e.getAttribute(s);
        }
        return Kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function pi(e, t, a, i) {
      {
        if (!On(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Yr(a, t), o === "" + a ? a : o;
      }
    }
    function ma(e, t, a, i) {
      var o = kr(t);
      if (!Sn(t, o, i)) {
        if (Kt(t, a, o, i) && (a = null), i || o === null) {
          if (On(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var v = o.type;
            e[p] = v === gn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = o.attributeName, E = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var L = o.type, D;
          L === gn || L === _r && a === !0 ? D = "" : (Yr(a, y), D = "" + a, o.sanitizeURL && fl(D.toString())), E ? e.setAttributeNS(E, y, D) : e.setAttribute(y, D);
        }
      }
    }
    var vi = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), hi = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), ge = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), ot = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), zn = Symbol.for("react.scope"), on = Symbol.for("react.debug_trace_mode"), un = Symbol.for("react.offscreen"), ar = Symbol.for("react.legacy_hidden"), mi = Symbol.for("react.cache"), Xo = Symbol.for("react.tracing_marker"), Nt = Symbol.iterator, Qf = "@@iterator";
    function ei(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Nt && e[Nt] || e[Qf];
      return typeof t == "function" ? t : null;
    }
    var vt = Object.assign, yi = 0, dl, Ko, pl, qr, ts, Or, ns;
    function rs() {
    }
    rs.__reactDisabledLog = !0;
    function lc() {
      {
        if (yi === 0) {
          dl = console.log, Ko = console.info, pl = console.warn, qr = console.error, ts = console.group, Or = console.groupCollapsed, ns = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: rs,
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
        yi++;
      }
    }
    function Zo() {
      {
        if (yi--, yi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, e, {
              value: dl
            }),
            info: vt({}, e, {
              value: Ko
            }),
            warn: vt({}, e, {
              value: pl
            }),
            error: vt({}, e, {
              value: qr
            }),
            group: vt({}, e, {
              value: ts
            }),
            groupCollapsed: vt({}, e, {
              value: Or
            }),
            groupEnd: vt({}, e, {
              value: ns
            })
          });
        }
        yi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vl = S.ReactCurrentDispatcher, ti;
    function Lr(e, t, a) {
      {
        if (ti === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ti = i && i[1] || "";
          }
        return `
` + ti + e;
      }
    }
    var hl = !1, ml;
    {
      var yl = typeof WeakMap == "function" ? WeakMap : Map;
      ml = new yl();
    }
    function Jo(e, t) {
      if (!e || hl)
        return "";
      {
        var a = ml.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      hl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = vl.current, vl.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, E = v.length - 1; y >= 1 && E >= 0 && p[y] !== v[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (p[y] !== v[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || p[y] !== v[E]) {
                    var L = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && ml.set(e, L), L;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        hl = !1, vl.current = s, Zo(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", j = D ? Lr(D) : "";
      return typeof e == "function" && ml.set(e, j), j;
    }
    function eu(e, t, a) {
      return Jo(e, !0);
    }
    function Ai(e, t, a) {
      return Jo(e, !1);
    }
    function qf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Jo(e, qf(e));
      if (typeof e == "string")
        return Lr(e);
      switch (e) {
        case ot:
          return Lr("Suspense");
        case _t:
          return Lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case we:
            return Ai(e.render);
          case ut:
            return gi(e.type, t, a);
          case $e: {
            var i = e, o = i._payload, s = i._init;
            try {
              return gi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ft(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return Lr(e.type);
        case gt:
          return Lr("Lazy");
        case Ee:
          return Lr("Suspense");
        case xt:
          return Lr("SuspenseList");
        case Q:
        case se:
        case Le:
          return Ai(e.type);
        case oe:
          return Ai(e.type.render);
        case W:
          return eu(e.type);
        default:
          return "";
      }
    }
    function tu(e) {
      try {
        var t = "", a = e;
        do
          t += Ft(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ro(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function nu(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ya:
          return "Fragment";
        case Dr:
          return "Portal";
        case b:
          return "Profiler";
        case hi:
          return "StrictMode";
        case ot:
          return "Suspense";
        case _t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            var t = e;
            return nu(t) + ".Consumer";
          case re:
            var a = e;
            return nu(a._context) + ".Provider";
          case we:
            return ro(e, e.render, "ForwardRef");
          case ut:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case $e: {
            var o = e, s = o._payload, f = o._init;
            try {
              return zt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ru(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function au(e) {
      return e.displayName || "Context";
    }
    function at(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case jt:
          return "Cache";
        case Xe:
          var i = a;
          return au(i) + ".Consumer";
        case pe:
          var o = a;
          return au(o._context) + ".Provider";
        case Mt:
          return "DehydratedFragment";
        case oe:
          return ru(a, a.render, "ForwardRef");
        case ee:
          return "Fragment";
        case q:
          return a;
        case Z:
          return "Portal";
        case I:
          return "Root";
        case de:
          return "Text";
        case gt:
          return zt(a);
        case ae:
          return a === hi ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case be:
          return "Profiler";
        case Jt:
          return "Scope";
        case Ee:
          return "Suspense";
        case xt:
          return "SuspenseList";
        case yt:
          return "TracingMarker";
        case W:
        case Q:
        case bt:
        case se:
        case De:
        case Le:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ao = S.ReactDebugCurrentFrame, En = null, Xr = !1;
    function Mr() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return at(e);
      }
      return null;
    }
    function gl() {
      return En === null ? "" : tu(En);
    }
    function bn() {
      ao.getCurrentStack = null, En = null, Xr = !1;
    }
    function Gt(e) {
      ao.getCurrentStack = e === null ? null : gl, En = e, Xr = !1;
    }
    function oc() {
      return En;
    }
    function Kr(e) {
      Xr = e;
    }
    function qn(e) {
      return "" + e;
    }
    function Si(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gr(e), e;
        default:
          return "";
      }
    }
    var uc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ui(e, t) {
      uc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Sl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function sc(e) {
      return e._valueTracker;
    }
    function Oa(e) {
      e._valueTracker = null;
    }
    function El(e) {
      var t = "";
      return e && (Sl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Cl(e) {
      var t = Sl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      gr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            gr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            gr(p), i = "" + p;
          },
          stopTracking: function() {
            Oa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      sc(e) || (e._valueTracker = Cl(e));
    }
    function iu(e) {
      if (!e)
        return !1;
      var t = sc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = El(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Tl = !1, io = !1, lu = !1, as = !1;
    function ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, o = vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function R(e, t) {
      Ui("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !io && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), io = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Tl && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), Tl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Si(t.value != null ? t.value : i),
        controlled: ni(t)
      };
    }
    function F(e, t) {
      var a = e, i = t.checked;
      i != null && ma(a, "checked", i, !1);
    }
    function B(e, t) {
      var a = e;
      {
        var i = ni(t);
        !a._wrapperState.controlled && i && !as && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0), a._wrapperState.controlled && !i && !lu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0);
      }
      F(e, t);
      var o = Si(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = qn(o)) : a.value !== qn(o) && (a.value = qn(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? We(a, t.type, o) : t.hasOwnProperty("defaultValue") && We(a, t.type, Si(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ue(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Qe(e, t) {
      var a = e;
      B(a, t), Se(a, t);
    }
    function Se(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Uh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            iu(f), B(f, p);
          }
        }
      }
    }
    function We(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var ht = !1, At = !1, nn = !1;
    function Zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? x.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || At || (At = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (nn || (nn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ht && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ht = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", qn(Si(t.value)));
    }
    var sn = Array.isArray;
    function Tt(e) {
      return sn(e);
    }
    var ji;
    ji = !1;
    function ou() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function Xf(e) {
      {
        Ui("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ou()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ou());
          }
        }
      }
    }
    function ri(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < o.length; v++) {
          var y = f.hasOwnProperty("$" + o[v].value);
          o[v].selected !== y && (o[v].selected = y), y && i && (o[v].defaultSelected = !0);
        }
      } else {
        for (var E = qn(Si(a)), L = null, D = 0; D < o.length; D++) {
          if (o[D].value === E) {
            o[D].selected = !0, i && (o[D].defaultSelected = !0);
            return;
          }
          L === null && !o[D].disabled && (L = o[D]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function ls(e, t) {
      return vt({}, t, {
        value: void 0
      });
    }
    function os(e, t) {
      var a = e;
      Xf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ji && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ji = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ri(a, !!t.multiple, i, !1) : t.defaultValue != null && ri(a, !!t.multiple, t.defaultValue, !0);
    }
    function ty(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ri(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? ri(a, !!t.multiple, t.defaultValue, !0) : ri(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ny(e, t) {
      var a = e, i = t.value;
      i != null && ri(a, !!t.multiple, i, !1);
    }
    var Zf = !1;
    function Jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function fv(e, t) {
      var a = e;
      Ui("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), Zf = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Si(i)
      };
    }
    function dv(e, t) {
      var a = e, i = Si(t.value), o = Si(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = qn(o));
    }
    function pv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ed(e, t) {
      dv(e, t);
    }
    var Fi = "http://www.w3.org/1999/xhtml", ry = "http://www.w3.org/1998/Math/MathML", td = "http://www.w3.org/2000/svg";
    function cc(e) {
      switch (e) {
        case "svg":
          return td;
        case "math":
          return ry;
        default:
          return Fi;
      }
    }
    function nd(e, t) {
      return e == null || e === Fi ? cc(t) : e === td && t === "foreignObject" ? Fi : e;
    }
    var ay = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, fc, vv = ay(function(e, t) {
      if (e.namespaceURI === td && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, Hi = 3, An = 8, ai = 9, lo = 11, dc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Hi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, hv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, uu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function mv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var yv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(uu).forEach(function(e) {
      yv.forEach(function(t) {
        uu[mv(t, e)] = uu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(uu.hasOwnProperty(e) && uu[e]) ? t + "px" : (yr(t, e), ("" + t).trim());
    }
    var su = /([A-Z])/g, iy = /^ms-/;
    function ly(e) {
      return e.replace(su, "-$1").toLowerCase().replace(iy, "-ms-");
    }
    var gv = function() {
    };
    {
      var Sv = /^(?:webkit|moz|o)[A-Z]/, Ev = /^-ms-/, us = /-(.)/g, cu = /;\s*$/, fu = {}, du = {}, Cv = !1, rd = !1, ad = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, id = function(e) {
        fu.hasOwnProperty(e) && fu[e] || (fu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ad(e.replace(Ev, "ms-"))
        ));
      }, xv = function(e) {
        fu.hasOwnProperty(e) && fu[e] || (fu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Tv = function(e, t) {
        du.hasOwnProperty(t) && du[t] || (du[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(cu, "")));
      }, Rv = function(e, t) {
        Cv || (Cv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, oy = function(e, t) {
        rd || (rd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      gv = function(e, t) {
        e.indexOf("-") > -1 ? id(e) : Sv.test(e) ? xv(e) : cu.test(t) && Tv(e, t), typeof t == "number" && (isNaN(t) ? Rv(e, t) : isFinite(t) || oy(e, t));
      };
    }
    var uy = gv;
    function sy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ly(i)) + ":", t += pc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || uy(i, t[i]);
          var s = pc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function cy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ma(e) {
      var t = {};
      for (var a in e)
        for (var i = hv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = Ma(e), i = Ma(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (o[v])
              continue;
            o[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", cy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var wv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, _v = vt({
      menuitem: !0
    }, wv), kv = "__html";
    function vc(e, t) {
      if (t) {
        if (_v[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Vi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
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
    var hc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Dv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ii = {}, ld = new RegExp("^(aria)-[" + Ve + "]*$"), cs = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
    function od(e, t) {
      {
        if (Gn.call(ii, t) && ii[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Dv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ii[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ii[t] = !0, !0;
        }
        if (ld.test(t)) {
          var o = t.toLowerCase(), s = Dv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return ii[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ii[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ov(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = od(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function mc(e, t) {
      Vi(e, t) || Ov(e, t);
    }
    var oo = !1;
    function ud(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !oo && (oo = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var sd = function() {
    };
    {
      var Xn = {}, cd = /^on./, Lv = /^on[^A-Z]/, Mv = new RegExp("^(aria)-[" + Ve + "]*$"), Nv = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
      sd = function(e, t, a, i) {
        if (Gn.call(Xn, t) && Xn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (cd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (cd.test(t))
          return Lv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (Mv.test(t) || Nv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = kr(t), y = v !== null && v.type === pa;
        if (hc.hasOwnProperty(o)) {
          var E = hc[o];
          if (E !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, E), Xn[t] = !0, !0;
        } else if (!y && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Xn[t] = !0, !0;
        return typeof a == "boolean" && Sr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : Sr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === gn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var zv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = sd(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Av(e, t, a) {
      Vi(e, t) || zv(e, t, a);
    }
    var Pi = 1, fs = 2, uo = 4, fy = Pi | fs | uo, ds = null;
    function ps(e) {
      ds !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function dy() {
      ds === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Uv(e) {
      return e === ds;
    }
    function yc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Hi ? t.parentNode : t;
    }
    var an = null, Rl = null, Bi = null;
    function pu(e) {
      var t = Hu(e);
      if (t) {
        if (typeof an != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Uh(a);
          an(t.stateNode, t.type, i);
        }
      }
    }
    function jv(e) {
      an = e;
    }
    function gc(e) {
      Rl ? Bi ? Bi.push(e) : Bi = [e] : Rl = e;
    }
    function vs() {
      return Rl !== null || Bi !== null;
    }
    function hs() {
      if (Rl) {
        var e = Rl, t = Bi;
        if (Rl = null, Bi = null, pu(e), t)
          for (var a = 0; a < t.length; a++)
            pu(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, fd = function() {
    }, dd = !1;
    function py() {
      var e = vs();
      e && (fd(), hs());
    }
    function pd(e, t, a) {
      if (dd)
        return e(t, a);
      dd = !0;
      try {
        return so(e, t, a);
      } finally {
        dd = !1, py();
      }
    }
    function Sc(e, t, a) {
      so = e, fd = a;
    }
    function Ec(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function vd(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Ec(t));
        default:
          return !1;
      }
    }
    function co(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Uh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (vd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var ms = !1;
    if (yn)
      try {
        var fo = {};
        Object.defineProperty(fo, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", fo, fo), window.removeEventListener("test", fo, fo);
      } catch {
        ms = !1;
      }
    function Fv(e, t, a, i, o, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (E) {
        this.onError(E);
      }
    }
    var hd = Fv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var md = document.createElement("react");
      hd = function(t, a, i, o, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), L = !1, D = !0, j = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function $() {
          md.removeEventListener(Y, Ye, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function Ye() {
          L = !0, $(), a.apply(i, _e), D = !1;
        }
        var Fe, Ot = !1, Ct = !1;
        function z(A) {
          if (Fe = A.error, Ot = !0, Fe === null && A.colno === 0 && A.lineno === 0 && (Ct = !0), A.defaultPrevented && Fe != null && typeof Fe == "object")
            try {
              Fe._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", z), md.addEventListener(Y, Ye, !1), E.initEvent(Y, !1, !1), md.dispatchEvent(E), H && Object.defineProperty(window, "event", H), L && D && (Ot ? Ct && (Fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Fe)), window.removeEventListener("error", z), !L)
          return $(), Fv.apply(this, arguments);
      };
    }
    var vy = hd, bl = !1, li = null, ys = !1, wl = null, Ei = {
      onError: function(e) {
        bl = !0, li = e;
      }
    };
    function po(e, t, a, i, o, s, f, p, v) {
      bl = !1, li = null, vy.apply(Ei, arguments);
    }
    function Ii(e, t, a, i, o, s, f, p, v) {
      if (po.apply(this, arguments), bl) {
        var y = gd();
        ys || (ys = !0, wl = y);
      }
    }
    function yd() {
      if (ys) {
        var e = wl;
        throw ys = !1, wl = null, e;
      }
    }
    function hy() {
      return bl;
    }
    function gd() {
      if (bl) {
        var e = li;
        return bl = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Na(e) {
      return e._reactInternals;
    }
    function gs(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), _l = (
      /*                */
      1
    ), cn = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), Bt = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), Ci = (
      /*                     */
      64
    ), et = (
      /*                   */
      128
    ), wn = (
      /*            */
      256
    ), Jr = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), hn = (
      /*                      */
      2048
    ), Aa = (
      /*                    */
      4096
    ), kl = (
      /*                   */
      8192
    ), Ss = (
      /*             */
      16384
    ), Cc = hn | st | Ci | Jr | za | Ss, Hv = (
      /*               */
      32767
    ), ga = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), Es = (
      /* */
      131072
    ), Sd = (
      /*                       */
      1048576
    ), Ed = (
      /*                    */
      2097152
    ), ea = (
      /*                 */
      4194304
    ), Dl = (
      /*                */
      8388608
    ), ta = (
      /*               */
      16777216
    ), vo = (
      /*              */
      33554432
    ), hu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | za | 0
    ), na = cn | st | Bt | Qt | Jr | Aa | kl, Er = st | Ci | Jr | kl, Ua = hn | Bt, ir = ea | Dl | Ed, $i = S.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (cn | Aa)) !== Ie && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function Cd(e) {
      if (e.tag === Ee) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xc(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function xd(e) {
      return Sa(e) === e;
    }
    function Ea(e) {
      {
        var t = $i.current;
        if (t !== null && t.tag === W) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", at(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Na(e);
      return o ? Sa(o) === o : !1;
    }
    function ra(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function fn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ra(s), e;
            if (v === o)
              return ra(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var y = !1, E = s.child; E; ) {
            if (E === i) {
              y = !0, i = s, o = f;
              break;
            }
            if (E === o) {
              y = !0, o = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!y) {
            for (E = f.child; E; ) {
              if (E === i) {
                y = !0, i = f, o = s;
                break;
              }
              if (E === o) {
                y = !0, o = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ja(e) {
      var t = fn(e);
      return t !== null ? Td(t) : null;
    }
    function Td(e) {
      if (e.tag === q || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Td(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Vv(e) {
      var t = fn(e);
      return t !== null ? Tc(t) : null;
    }
    function Tc(e) {
      if (e.tag === q || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Z) {
          var a = Tc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Rc = C.unstable_scheduleCallback, Pv = C.unstable_cancelCallback, bc = C.unstable_shouldYield, Bv = C.unstable_requestPaint, Cn = C.unstable_now, Rd = C.unstable_getCurrentPriorityLevel, wc = C.unstable_ImmediatePriority, Ca = C.unstable_UserBlockingPriority, xi = C.unstable_NormalPriority, _c = C.unstable_LowPriority, Ol = C.unstable_IdlePriority, bd = C.unstable_yieldValue, wd = C.unstable_setDisableYieldValue, Ll = null, Zn = null, me = null, Ln = !1, lr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function _d(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        wt && (e = vt({}, e, {
          getLaneLabelMap: Nl,
          injectProfilingHooks: Wi
        })), Ll = t.inject(e), Zn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Iv(e, t) {
      if (Zn && typeof Zn.onScheduleFiberRoot == "function")
        try {
          Zn.onScheduleFiberRoot(Ll, e, t);
        } catch (a) {
          Ln || (Ln = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Yi(e, t) {
      if (Zn && typeof Zn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & et) === et;
          if (ft) {
            var i;
            switch (t) {
              case Cr:
                i = wc;
                break;
              case or:
                i = Ca;
                break;
              case Qi:
                i = xi;
                break;
              case Ds:
                i = Ol;
                break;
              default:
                i = xi;
                break;
            }
            Zn.onCommitFiberRoot(Ll, e, i, a);
          }
        } catch (o) {
          Ln || (Ln = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function Ml(e) {
      if (Zn && typeof Zn.onPostCommitFiberRoot == "function")
        try {
          Zn.onPostCommitFiberRoot(Ll, e);
        } catch (t) {
          Ln || (Ln = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function kd(e) {
      if (Zn && typeof Zn.onCommitFiberUnmount == "function")
        try {
          Zn.onCommitFiberUnmount(Ll, e);
        } catch (t) {
          Ln || (Ln = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof bd == "function" && (wd(e), K(e)), Zn && typeof Zn.setStrictMode == "function")
        try {
          Zn.setStrictMode(Ll, e);
        } catch (t) {
          Ln || (Ln = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Wi(e) {
      me = e;
    }
    function Nl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < dn; a++) {
          var i = my(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function kc(e) {
      me !== null && typeof me.markCommitStarted == "function" && me.markCommitStarted(e);
    }
    function Dd() {
      me !== null && typeof me.markCommitStopped == "function" && me.markCommitStopped();
    }
    function zl(e) {
      me !== null && typeof me.markComponentRenderStarted == "function" && me.markComponentRenderStarted(e);
    }
    function ho() {
      me !== null && typeof me.markComponentRenderStopped == "function" && me.markComponentRenderStopped();
    }
    function $v(e) {
      me !== null && typeof me.markComponentPassiveEffectMountStarted == "function" && me.markComponentPassiveEffectMountStarted(e);
    }
    function Od() {
      me !== null && typeof me.markComponentPassiveEffectMountStopped == "function" && me.markComponentPassiveEffectMountStopped();
    }
    function Dc(e) {
      me !== null && typeof me.markComponentPassiveEffectUnmountStarted == "function" && me.markComponentPassiveEffectUnmountStarted(e);
    }
    function Yv() {
      me !== null && typeof me.markComponentPassiveEffectUnmountStopped == "function" && me.markComponentPassiveEffectUnmountStopped();
    }
    function Wv(e) {
      me !== null && typeof me.markComponentLayoutEffectMountStarted == "function" && me.markComponentLayoutEffectMountStarted(e);
    }
    function Gv() {
      me !== null && typeof me.markComponentLayoutEffectMountStopped == "function" && me.markComponentLayoutEffectMountStopped();
    }
    function Oc(e) {
      me !== null && typeof me.markComponentLayoutEffectUnmountStarted == "function" && me.markComponentLayoutEffectUnmountStarted(e);
    }
    function mu() {
      me !== null && typeof me.markComponentLayoutEffectUnmountStopped == "function" && me.markComponentLayoutEffectUnmountStopped();
    }
    function Lc(e, t, a) {
      me !== null && typeof me.markComponentErrored == "function" && me.markComponentErrored(e, t, a);
    }
    function Qv(e, t, a) {
      me !== null && typeof me.markComponentSuspended == "function" && me.markComponentSuspended(e, t, a);
    }
    function qv(e) {
      me !== null && typeof me.markLayoutEffectsStarted == "function" && me.markLayoutEffectsStarted(e);
    }
    function yu() {
      me !== null && typeof me.markLayoutEffectsStopped == "function" && me.markLayoutEffectsStopped();
    }
    function Xv(e) {
      me !== null && typeof me.markPassiveEffectsStarted == "function" && me.markPassiveEffectsStarted(e);
    }
    function Cs() {
      me !== null && typeof me.markPassiveEffectsStopped == "function" && me.markPassiveEffectsStopped();
    }
    function oi(e) {
      me !== null && typeof me.markRenderStarted == "function" && me.markRenderStarted(e);
    }
    function xs() {
      me !== null && typeof me.markRenderYielded == "function" && me.markRenderYielded();
    }
    function gu() {
      me !== null && typeof me.markRenderStopped == "function" && me.markRenderStopped();
    }
    function mo(e) {
      me !== null && typeof me.markRenderScheduled == "function" && me.markRenderScheduled(e);
    }
    function Ld(e, t) {
      me !== null && typeof me.markForceUpdateScheduled == "function" && me.markForceUpdateScheduled(e, t);
    }
    function Al(e, t) {
      me !== null && typeof me.markStateUpdateScheduled == "function" && me.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), mt = (
      /*                 */
      1
    ), qe = (
      /*                    */
      2
    ), xn = (
      /*               */
      8
    ), Fa = (
      /*              */
      16
    ), Mc = Math.clz32 ? Math.clz32 : yo, Nc = Math.log, Md = Math.LN2;
    function yo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Nc(t) / Md | 0) | 0;
    }
    var dn = 31, G = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), Ti = (
      /*    */
      2
    ), xa = (
      /*             */
      4
    ), go = (
      /*            */
      8
    ), pn = (
      /*                     */
      16
    ), So = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), Eo = (
      /*                        */
      64
    ), Ha = (
      /*                        */
      128
    ), aa = (
      /*                        */
      256
    ), Co = (
      /*                        */
      512
    ), Ts = (
      /*                        */
      1024
    ), Rs = (
      /*                        */
      2048
    ), zc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), Uc = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), Fc = (
      /*                       */
      65536
    ), Hc = (
      /*                       */
      131072
    ), Vc = (
      /*                       */
      262144
    ), Pc = (
      /*                       */
      524288
    ), xo = (
      /*                       */
      1048576
    ), Bc = (
      /*                       */
      2097152
    ), To = (
      /*                            */
      130023424
    ), Gi = (
      /*                             */
      4194304
    ), Ic = (
      /*                             */
      8388608
    ), bs = (
      /*                             */
      16777216
    ), $c = (
      /*                             */
      33554432
    ), Yc = (
      /*                             */
      67108864
    ), Nd = Gi, Su = (
      /*          */
      134217728
    ), Wc = (
      /*                          */
      268435455
    ), Eu = (
      /*               */
      268435456
    ), jl = (
      /*                        */
      536870912
    ), ia = (
      /*                   */
      1073741824
    );
    function my(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & Ti)
          return "InputContinuousHydration";
        if (e & xa)
          return "InputContinuous";
        if (e & go)
          return "DefaultHydration";
        if (e & pn)
          return "Default";
        if (e & So)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & To)
          return "Retry";
        if (e & Su)
          return "SelectiveHydration";
        if (e & Eu)
          return "IdleHydration";
        if (e & jl)
          return "Idle";
        if (e & ia)
          return "Offscreen";
      }
    }
    var ln = -1, Gc = Eo, Qc = Gi;
    function Cu(e) {
      switch (Un(e)) {
        case Ke:
          return Ke;
        case Ti:
          return Ti;
        case xa:
          return xa;
        case go:
          return go;
        case pn:
          return pn;
        case So:
          return So;
        case Eo:
        case Ha:
        case aa:
        case Co:
        case Ts:
        case Rs:
        case zc:
        case Ac:
        case Uc:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case xo:
        case Bc:
          return e & Ul;
        case Gi:
        case Ic:
        case bs:
        case $c:
        case Yc:
          return e & To;
        case Su:
          return Su;
        case Eu:
          return Eu;
        case jl:
          return jl;
        case ia:
          return ia;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ws(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i = G, o = e.suspendedLanes, s = e.pingedLanes, f = a & Wc;
      if (f !== G) {
        var p = f & ~o;
        if (p !== G)
          i = Cu(p);
        else {
          var v = f & s;
          v !== G && (i = Cu(v));
        }
      } else {
        var y = a & ~o;
        y !== G ? i = Cu(y) : s !== G && (i = Cu(s));
      }
      if (i === G)
        return G;
      if (t !== G && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === G) {
        var E = Un(i), L = Un(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === pn && (L & Ul) !== G
        )
          return t;
      }
      (i & xa) !== G && (i |= a & pn);
      var D = e.entangledLanes;
      if (D !== G)
        for (var j = e.entanglements, H = i & D; H > 0; ) {
          var $ = Fl(H), _e = 1 << $;
          i |= j[$], H &= ~_e;
        }
      return i;
    }
    function Kv(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var o = Fl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function qc(e, t) {
      switch (e) {
        case Ke:
        case Ti:
        case xa:
          return t + 250;
        case go:
        case pn:
        case So:
        case Eo:
        case Ha:
        case aa:
        case Co:
        case Ts:
        case Rs:
        case zc:
        case Ac:
        case Uc:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case xo:
        case Bc:
          return t + 5e3;
        case Gi:
        case Ic:
        case bs:
        case $c:
        case Yc:
          return ln;
        case Su:
        case Eu:
        case jl:
        case ia:
          return ln;
        default:
          return g("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function yy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p, y = s[p];
        y === ln ? ((v & i) === G || (v & o) !== G) && (s[p] = qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function gy(e) {
      return Cu(e.pendingLanes);
    }
    function zd(e) {
      var t = e.pendingLanes & ~ia;
      return t !== G ? t : t & ia ? ia : G;
    }
    function xu(e) {
      return (e & Ke) !== G;
    }
    function _s(e) {
      return (e & Wc) !== G;
    }
    function Xc(e) {
      return (e & To) === e;
    }
    function Sy(e) {
      var t = Ke | xa | pn;
      return (e & t) === G;
    }
    function Zv(e) {
      return (e & Ul) === e;
    }
    function ks(e, t) {
      var a = Ti | xa | go | pn;
      return (t & a) !== G;
    }
    function Jv(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function Ad(e) {
      return (e & Ul) !== G;
    }
    function Ud() {
      var e = Gc;
      return Gc <<= 1, (Gc & Ul) === G && (Gc = Eo), e;
    }
    function Ey() {
      var e = Qc;
      return Qc <<= 1, (Qc & To) === G && (Qc = Gi), e;
    }
    function Un(e) {
      return e & -e;
    }
    function Bn(e) {
      return Un(e);
    }
    function Fl(e) {
      return 31 - Mc(e);
    }
    function Kc(e) {
      return Fl(e);
    }
    function la(e, t) {
      return (e & t) !== G;
    }
    function Ro(e, t) {
      return (e & t) === t;
    }
    function ct(e, t) {
      return e | t;
    }
    function Tu(e, t) {
      return e & ~t;
    }
    function jd(e, t) {
      return e & t;
    }
    function eh(e) {
      return e;
    }
    function th(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function Zc(e) {
      for (var t = [], a = 0; a < dn; a++)
        t.push(e);
      return t;
    }
    function bo(e, t, a) {
      e.pendingLanes |= t, t !== jl && (e.suspendedLanes = G, e.pingedLanes = G);
      var i = e.eventTimes, o = Kc(t);
      i[o] = a;
    }
    function Fd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Fl(i), s = 1 << o;
        a[o] = ln, i &= ~s;
      }
    }
    function Hd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Vd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p;
        i[p] = G, o[p] = ln, s[p] = ln, f &= ~v;
      }
    }
    function Ru(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Fl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Cy(e, t) {
      var a = Un(t), i;
      switch (a) {
        case xa:
          i = Ti;
          break;
        case pn:
          i = go;
          break;
        case Eo:
        case Ha:
        case aa:
        case Co:
        case Ts:
        case Rs:
        case zc:
        case Ac:
        case Uc:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case xo:
        case Bc:
        case Gi:
        case Ic:
        case bs:
        case $c:
        case Yc:
          i = So;
          break;
        case jl:
          i = Eu;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function Pd(e, t, a) {
      if (lr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = Kc(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Jc(e, t) {
      if (lr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = Kc(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var Cr = Ke, or = xa, Qi = pn, Ds = jl, wo = kt;
    function Va() {
      return wo;
    }
    function In(e) {
      wo = e;
    }
    function Os(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function xr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xy(e, t) {
      return e > t ? e : t;
    }
    function Id(e, t) {
      return e !== 0 && e < t;
    }
    function Ls(e) {
      var t = Un(e);
      return Id(Cr, t) ? Id(or, t) ? _s(t) ? Qi : Ds : or : Cr;
    }
    function $n(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var nh;
    function Me(e) {
      nh = e;
    }
    function bu(e) {
      nh(e);
    }
    var Ms;
    function rh(e) {
      Ms = e;
    }
    var ah;
    function Ns(e) {
      ah = e;
    }
    var zs;
    function $d(e) {
      zs = e;
    }
    var Yd;
    function ih(e) {
      Yd = e;
    }
    var ef = !1, wu = [], Ri = null, mn = null, Jn = null, Pa = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new Map(), qi = [], ui = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function lh(e) {
      return ui.indexOf(e) > -1;
    }
    function bi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function oh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          mn = null;
          break;
        case "mouseover":
        case "mouseout":
          Jn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Pa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          _u.delete(i);
          break;
        }
      }
    }
    function ku(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = bi(t, a, i, o, s);
        if (t !== null) {
          var p = Hu(t);
          p !== null && Ms(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return o !== null && v.indexOf(o) === -1 && v.push(o), e;
    }
    function uh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Ri = ku(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return mn = ku(mn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return Jn = ku(Jn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = o, y = v.pointerId;
          return Pa.set(y, ku(Pa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var E = o, L = E.pointerId;
          return _u.set(L, ku(_u.get(L) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var o = Cd(a);
            if (o !== null) {
              e.blockedOn = o, Yd(e.priority, function() {
                ah(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if ($n(s)) {
              e.blockedOn = xc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function sh(e) {
      for (var t = zs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && Id(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Wd(a);
    }
    function tf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = _o(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          ps(s), o.target.dispatchEvent(s), dy();
        } else {
          var f = Hu(i);
          return f !== null && Ms(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function As(e, t, a) {
      tf(e) && a.delete(t);
    }
    function Gd() {
      ef = !1, Ri !== null && tf(Ri) && (Ri = null), mn !== null && tf(mn) && (mn = null), Jn !== null && tf(Jn) && (Jn = null), Pa.forEach(As), _u.forEach(As);
    }
    function Tr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ef || (ef = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Gd)));
    }
    function Et(e) {
      if (wu.length > 0) {
        Tr(wu[0], e);
        for (var t = 1; t < wu.length; t++) {
          var a = wu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && Tr(Ri, e), mn !== null && Tr(mn, e), Jn !== null && Tr(Jn, e);
      var i = function(p) {
        return Tr(p, e);
      };
      Pa.forEach(i), _u.forEach(i);
      for (var o = 0; o < qi.length; o++) {
        var s = qi[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qi.length > 0; ) {
        var f = qi[0];
        if (f.blockedOn !== null)
          break;
        Wd(f), f.blockedOn === null && qi.shift();
      }
    }
    var Tn = S.ReactCurrentBatchConfig, _n = !0;
    function er(e) {
      _n = !!e;
    }
    function Ta() {
      return _n;
    }
    function Du(e, t, a) {
      var i = Nr(t), o;
      switch (i) {
        case Cr:
          o = Yn;
          break;
        case or:
          o = Us;
          break;
        case Qi:
        default:
          o = Xi;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Yn(e, t, a, i) {
      var o = Va(), s = Tn.transition;
      Tn.transition = null;
      try {
        In(Cr), Xi(e, t, a, i);
      } finally {
        In(o), Tn.transition = s;
      }
    }
    function Us(e, t, a, i) {
      var o = Va(), s = Tn.transition;
      Tn.transition = null;
      try {
        In(or), Xi(e, t, a, i);
      } finally {
        In(o), Tn.transition = s;
      }
    }
    function Xi(e, t, a, i) {
      _n && nf(e, t, a, i);
    }
    function nf(e, t, a, i) {
      var o = _o(e, t, a, i);
      if (o === null) {
        By(e, t, i, Ou, a), oh(e, i);
        return;
      }
      if (uh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (oh(e, i), t & uo && lh(e)) {
        for (; o !== null; ) {
          var s = Hu(o);
          s !== null && bu(s);
          var f = _o(e, t, a, i);
          if (f === null && By(e, t, i, Ou, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      By(e, t, i, null, a);
    }
    var Ou = null;
    function _o(e, t, a, i) {
      Ou = null;
      var o = yc(i), s = Is(o);
      if (s !== null) {
        var f = Sa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = Cd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === I) {
            var y = f.stateNode;
            if ($n(y))
              return xc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ou = s, null;
    }
    function Nr(e) {
      switch (e) {
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
          return Cr;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return or;
        case "message": {
          var t = Rd();
          switch (t) {
            case wc:
              return Cr;
            case Ca:
              return or;
            case xi:
            case _c:
              return Qi;
            case Ol:
              return Ds;
            default:
              return Qi;
          }
        }
        default:
          return Qi;
      }
    }
    function Qd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Lu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ki(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function rf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ko = null, wi = null, Hl = null;
    function Vl(e) {
      return ko = e, wi = lf(), !0;
    }
    function af() {
      ko = null, wi = null, Hl = null;
    }
    function Mu() {
      if (Hl)
        return Hl;
      var e, t = wi, a = t.length, i, o = lf(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Hl = o.slice(e, p), Hl;
    }
    function lf() {
      return "value" in ko ? ko.value : ko.textContent;
    }
    function Do(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Oo() {
      return !0;
    }
    function Rr() {
      return !1;
    }
    function jn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Oo : this.isDefaultPrevented = Rr, this.isPropagationStopped = Rr, this;
      }
      return vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Oo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Oo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Oo
      }), t;
    }
    var br = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wr = jn(br), Nu = vt({}, br, {
      view: 0,
      detail: 0
    }), qd = jn(Nu), js, Xd, Ba;
    function ch(e) {
      e !== Ba && (Ba && e.type === "mousemove" ? (js = e.screenX - Ba.screenX, Xd = e.screenY - Ba.screenY) : (js = 0, Xd = 0), Ba = e);
    }
    var zu = vt({}, Nu, {
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
      getModifierState: sf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ch(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Xd;
      }
    }), Pl = jn(zu), Kd = vt({}, zu, {
      dataTransfer: 0
    }), Lo = jn(Kd), fh = vt({}, Nu, {
      relatedTarget: 0
    }), of = jn(fh), Zd = vt({}, br, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uf = jn(Zd), Ty = vt({}, br, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ry = jn(Ty), dh = vt({}, br, {
      data: 0
    }), Jd = jn(dh), Mo = Jd, by = {
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
      MozPrintableKey: "Unidentified"
    }, Au = {
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
      224: "Meta"
    };
    function ph(e) {
      if (e.key) {
        var t = by[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Do(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Au[e.keyCode] || "Unidentified" : "";
    }
    var kn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function wy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = kn[e];
      return i ? !!a[i] : !1;
    }
    function sf(e) {
      return wy;
    }
    var _y = vt({}, Nu, {
      key: ph,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Do(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Do(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ky = jn(_y), vh = vt({}, zu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ep = jn(vh), Dy = vt({}, Nu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sf
    }), Ia = jn(Dy), tp = vt({}, br, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Oy = jn(tp), Bl = vt({}, zu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), cf = jn(Bl), No = [9, 13, 27, 32], Fs = 229, Hs = yn && "CompositionEvent" in window, zo = null;
    yn && "documentMode" in document && (zo = document.documentMode);
    var Ly = yn && "TextEvent" in window && !zo, ff = yn && (!Hs || zo && zo > 8 && zo <= 11), hh = 32, np = String.fromCharCode(hh);
    function mh() {
      mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), mr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), mr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Vs = !1;
    function df(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function yh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function rp(e, t) {
      return e === "keydown" && t.keyCode === Fs;
    }
    function gh(e, t) {
      switch (e) {
        case "keyup":
          return No.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ap(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function pf(e) {
      return e.locale === "ko";
    }
    var Zi = !1;
    function ip(e, t, a, i, o) {
      var s, f;
      if (Hs ? s = yh(t) : Zi ? gh(t, i) && (s = "onCompositionEnd") : rp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ff && !pf(i) && (!Zi && s === "onCompositionStart" ? Zi = Vl(o) : s === "onCompositionEnd" && Zi && (f = Mu()));
      var p = Th(a, s);
      if (p.length > 0) {
        var v = new Jd(s, t, null, i, o);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ap(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return ap(t);
        case "keypress":
          var a = t.which;
          return a !== hh ? null : (Vs = !0, np);
        case "textInput":
          var i = t.data;
          return i === np && Vs ? null : i;
        default:
          return null;
      }
    }
    function Sh(e, t) {
      if (Zi) {
        if (e === "compositionend" || !Hs && gh(e, t)) {
          var a = Mu();
          return af(), Zi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!df(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ff && !pf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function My(e, t, a, i, o) {
      var s;
      if (Ly ? s = vf(t, i) : s = Sh(t, i), !s)
        return null;
      var f = Th(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Mo("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function hf(e, t, a, i, o, s, f) {
      ip(e, t, a, i, o), My(e, t, a, i, o);
    }
    var Ny = {
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
      week: !0
    };
    function Uu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ny[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function zy(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function mf() {
      mr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      gc(i);
      var o = Th(t, "onChange");
      if (o.length > 0) {
        var s = new wr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var r = null, l = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, yc(e)), pd(d, t);
    }
    function d(e) {
      X1(e, 0);
    }
    function m(e) {
      var t = xf(e);
      if (iu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    yn && (_ = zy("input") && (!document.documentMode || document.documentMode > 9));
    function V(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", ie);
    }
    function ne() {
      r && (r.detachEvent("onpropertychange", ie), r = null, l = null);
    }
    function ie(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function te(e, t, a) {
      e === "focusin" ? (ne(), V(t, a)) : e === "focusout" && ne();
    }
    function Te(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Ne(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ue(e, t) {
      if (e === "click")
        return m(t);
    }
    function Mn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || We(e, "number", e.value);
    }
    function O(e, t, a, i, o, s, f) {
      var p = a ? xf(a) : window, v, y;
      if (u(p) ? v = T : Uu(p) ? _ ? v = Mn : (v = Te, y = te) : Ne(p) && (v = Ue), v) {
        var E = v(t, a);
        if (E) {
          n(e, E, i, o);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && N(p);
    }
    function U() {
      $r("onMouseEnter", ["mouseout", "mouseover"]), $r("onMouseLeave", ["mouseout", "mouseover"]), $r("onPointerEnter", ["pointerout", "pointerover"]), $r("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ce(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Uv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || Sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var E;
        if (o.window === o)
          E = o;
        else {
          var L = o.ownerDocument;
          L ? E = L.defaultView || L.parentWindow : E = window;
        }
        var D, j;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (D = a, j = H ? Is(H) : null, j !== null) {
            var $ = Sa(j);
            (j !== $ || j.tag !== q && j.tag !== de) && (j = null);
          }
        } else
          D = null, j = a;
        if (D !== j) {
          var _e = Pl, Ye = "onMouseLeave", Fe = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = ep, Ye = "onPointerLeave", Fe = "onPointerEnter", Ot = "pointer");
          var Ct = D == null ? E : xf(D), z = j == null ? E : xf(j), Y = new _e(Ye, Ot + "leave", D, i, o);
          Y.target = Ct, Y.relatedTarget = z;
          var A = null, le = Is(o);
          if (le === a) {
            var ke = new _e(Fe, Ot + "enter", j, i, o);
            ke.target = z, ke.relatedTarget = Ct, A = ke;
          }
          mT(e, Y, A, D, j);
        }
      }
    }
    function je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ze = typeof Object.is == "function" ? Object.is : je;
    function Pe(e, t) {
      if (ze(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!Gn.call(t, s) || !ze(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function tt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ut(e, t) {
      for (var a = tt(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Hi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = tt(tr(a));
      }
    }
    function Il(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ay(e, o, s, f, p);
    }
    function Ay(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, E = e, L = null;
      e:
        for (; ; ) {
          for (var D = null; E === t && (a === 0 || E.nodeType === Hi) && (f = s + a), E === i && (o === 0 || E.nodeType === Hi) && (p = s + o), E.nodeType === Hi && (s += E.nodeValue.length), (D = E.firstChild) !== null; )
            L = E, E = D;
          for (; ; ) {
            if (E === e)
              break e;
            if (L === t && ++v === a && (f = s), L === i && ++y === o && (p = s), (D = E.nextSibling) !== null)
              break;
            E = L, L = E.parentNode;
          }
          E = D;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Kx(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ut(e, f), E = Ut(e, p);
        if (y && E) {
          if (o.rangeCount === 1 && o.anchorNode === y.node && o.anchorOffset === y.offset && o.focusNode === E.node && o.focusOffset === E.offset)
            return;
          var L = a.createRange();
          L.setStart(y.node, y.offset), o.removeAllRanges(), f > p ? (o.addRange(L), o.extend(E.node, E.offset)) : (L.setEnd(E.node, E.offset), o.addRange(L));
        }
      }
    }
    function F1(e) {
      return e && e.nodeType === Hi;
    }
    function H1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : F1(e) ? !1 : F1(t) ? H1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Zx(e) {
      return e && e.ownerDocument && H1(e.ownerDocument.documentElement, e);
    }
    function Jx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function V1() {
      for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
        if (Jx(t))
          e = t.contentWindow;
        else
          return t;
        t = xl(e.document);
      }
      return t;
    }
    function Uy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function eT() {
      var e = V1();
      return {
        focusedElem: e,
        selectionRange: Uy(e) ? nT(e) : null
      };
    }
    function tT(e) {
      var t = V1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Zx(a)) {
        i !== null && Uy(a) && rT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function nT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Il(e), t || {
        start: 0,
        end: 0
      };
    }
    function rT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Kx(e, t);
    }
    var aT = yn && "documentMode" in document && document.documentMode <= 11;
    function iT() {
      mr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, jy = null, lp = null, Fy = !1;
    function lT(e) {
      if ("selectionStart" in e && Uy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function oT(e) {
      return e.window === e ? e.document : e.nodeType === ai ? e : e.ownerDocument;
    }
    function P1(e, t, a) {
      var i = oT(a);
      if (!(Fy || yf == null || yf !== xl(i))) {
        var o = lT(yf);
        if (!lp || !Pe(lp, o)) {
          lp = o;
          var s = Th(jy, "onSelect");
          if (s.length > 0) {
            var f = new wr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function uT(e, t, a, i, o, s, f) {
      var p = a ? xf(a) : window;
      switch (t) {
        case "focusin":
          (Uu(p) || p.contentEditable === "true") && (yf = p, jy = a, lp = null);
          break;
        case "focusout":
          yf = null, jy = null, lp = null;
          break;
        case "mousedown":
          Fy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fy = !1, P1(e, i, o);
          break;
        case "selectionchange":
          if (aT)
            break;
        case "keydown":
        case "keyup":
          P1(e, i, o);
      }
    }
    function Eh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: Eh("Animation", "AnimationEnd"),
      animationiteration: Eh("Animation", "AnimationIteration"),
      animationstart: Eh("Animation", "AnimationStart"),
      transitionend: Eh("Transition", "TransitionEnd")
    }, Hy = {}, B1 = {};
    yn && (B1 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function Ch(e) {
      if (Hy[e])
        return Hy[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in B1)
          return Hy[e] = t[a];
      return e;
    }
    var I1 = Ch("animationend"), $1 = Ch("animationiteration"), Y1 = Ch("animationstart"), W1 = Ch("transitionend"), G1 = /* @__PURE__ */ new Map(), Q1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ju(e, t) {
      G1.set(e, t), mr(t, [e]);
    }
    function sT() {
      for (var e = 0; e < Q1.length; e++) {
        var t = Q1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ju(a, "on" + i);
      }
      ju(I1, "onAnimationEnd"), ju($1, "onAnimationIteration"), ju(Y1, "onAnimationStart"), ju("dblclick", "onDoubleClick"), ju("focusin", "onFocus"), ju("focusout", "onBlur"), ju(W1, "onTransitionEnd");
    }
    function cT(e, t, a, i, o, s, f) {
      var p = G1.get(t);
      if (p !== void 0) {
        var v = wr, y = t;
        switch (t) {
          case "keypress":
            if (Do(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ky;
            break;
          case "focusin":
            y = "focus", v = of;
            break;
          case "focusout":
            y = "blur", v = of;
            break;
          case "beforeblur":
          case "afterblur":
            v = of;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Pl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ia;
            break;
          case I1:
          case $1:
          case Y1:
            v = uf;
            break;
          case W1:
            v = Oy;
            break;
          case "scroll":
            v = qd;
            break;
          case "wheel":
            v = cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ry;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ep;
            break;
        }
        var E = (s & uo) !== 0;
        {
          var L = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", D = vT(a, p, i.type, E, L);
          if (D.length > 0) {
            var j = new v(p, y, null, i, o);
            e.push({
              event: j,
              listeners: D
            });
          }
        }
      }
    }
    sT(), U(), mf(), iT(), mh();
    function fT(e, t, a, i, o, s, f) {
      cT(e, t, a, i, o, s);
      var p = (s & fy) === 0;
      p && (ce(e, t, a, i, o), O(e, t, a, i, o), uT(e, t, a, i, o), hf(e, t, a, i, o));
    }
    var op = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Vy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(op));
    function q1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ii(i, t, void 0, e), e.currentTarget = null;
    }
    function dT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          q1(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var E = t[y], L = E.instance, D = E.currentTarget, j = E.listener;
          if (L !== i && e.isPropagationStopped())
            return;
          q1(e, j, D), i = L;
        }
    }
    function X1(e, t) {
      for (var a = (t & uo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        dT(s, f, a);
      }
      yd();
    }
    function pT(e, t, a, i, o) {
      var s = yc(a), f = [];
      fT(f, e, i, a, s, t), X1(f, t);
    }
    function Rn(e, t) {
      Vy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = IR(t), o = yT(e);
      i.has(o) || (K1(t, e, fs, a), i.add(o));
    }
    function Py(e, t, a) {
      Vy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= uo), K1(a, e, i, t);
    }
    var xh = "_reactListening" + Math.random().toString(36).slice(2);
    function up(e) {
      if (!e[xh]) {
        e[xh] = !0, dt.forEach(function(a) {
          a !== "selectionchange" && (Vy.has(a) || Py(a, !1, e), Py(a, !0, e));
        });
        var t = e.nodeType === ai ? e : e.ownerDocument;
        t !== null && (t[xh] || (t[xh] = !0, Py("selectionchange", !1, t)));
      }
    }
    function K1(e, t, a, i, o) {
      var s = Du(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ki(e, t, s, f) : Lu(e, t, s) : f !== void 0 ? rf(e, t, s, f) : Qd(e, t, s);
    }
    function Z1(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function By(e, t, a, i, o) {
      var s = i;
      if (!(t & Pi) && !(t & fs)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === I || v === Z) {
                var y = p.stateNode.containerInfo;
                if (Z1(y, f))
                  break;
                if (v === Z)
                  for (var E = p.return; E !== null; ) {
                    var L = E.tag;
                    if (L === I || L === Z) {
                      var D = E.stateNode.containerInfo;
                      if (Z1(D, f))
                        return;
                    }
                    E = E.return;
                  }
                for (; y !== null; ) {
                  var j = Is(y);
                  if (j === null)
                    return;
                  var H = j.tag;
                  if (H === q || H === de) {
                    p = s = j;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      pd(function() {
        return pT(e, t, a, s);
      });
    }
    function sp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function vT(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, E = null; y !== null; ) {
        var L = y, D = L.stateNode, j = L.tag;
        if (j === q && D !== null && (E = D, p !== null)) {
          var H = co(y, p);
          H != null && v.push(sp(y, H, E));
        }
        if (o)
          break;
        y = y.return;
      }
      return v;
    }
    function Th(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === q && f !== null) {
          var v = f, y = co(o, a);
          y != null && i.unshift(sp(o, y, v));
          var E = co(o, t);
          E != null && i.push(sp(o, E, v));
        }
        o = o.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function hT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Sf(s))
        o++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; o - f > 0; )
        a = Sf(a), o--;
      for (; f - o > 0; )
        i = Sf(i), f--;
      for (var v = o; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function J1(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, E = v.stateNode, L = v.tag;
        if (y !== null && y === i)
          break;
        if (L === q && E !== null) {
          var D = E;
          if (o) {
            var j = co(p, s);
            j != null && f.unshift(sp(p, j, D));
          } else if (!o) {
            var H = co(p, s);
            H != null && f.push(sp(p, H, D));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function mT(e, t, a, i, o) {
      var s = i && o ? hT(i, o) : null;
      i !== null && J1(e, t, i, s, !1), o !== null && a !== null && J1(e, a, o, s, !0);
    }
    function yT(e, t) {
      return e + "__bubble";
    }
    var $a = !1, cp = "dangerouslySetInnerHTML", Rh = "suppressContentEditableWarning", Fu = "suppressHydrationWarning", e0 = "autoFocus", Ps = "children", Bs = "style", bh = "__html", Iy, wh, fp, t0, _h, n0, r0;
    Iy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, wh = function(e, t) {
      mc(e, t), ud(e, t), Av(e, t, {
        registrationNameDependencies: It,
        possibleRegistrationNames: Ir
      });
    }, n0 = yn && !document.documentMode, fp = function(e, t, a) {
      if (!$a) {
        var i = kh(a), o = kh(t);
        o !== i && ($a = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, t0 = function(e) {
      if (!$a) {
        $a = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, _h = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, r0 = function(e, t) {
      var a = e.namespaceURI === Fi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var gT = /\r\n?/g, ST = /\u0000|\uFFFD/g;
    function kh(e) {
      Gr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(gT, `
`).replace(ST, "");
    }
    function Dh(e, t, a, i) {
      var o = kh(t), s = kh(e);
      if (s !== o && (i && ($a || ($a = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function a0(e) {
      return e.nodeType === ai ? e : e.ownerDocument;
    }
    function ET() {
    }
    function Oh(e) {
      e.onclick = ET;
    }
    function CT(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), bv(t, f);
          else if (s === cp) {
            var p = f ? f[bh] : void 0;
            p != null && vv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && dc(t, f);
            } else
              typeof f == "number" && dc(t, "" + f);
          else
            s === Rh || s === Fu || s === e0 || (It.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && ma(t, s, f, o));
        }
    }
    function xT(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Bs ? bv(e, f) : s === cp ? vv(e, f) : s === Ps ? dc(e, f) : ma(e, s, f, i);
      }
    }
    function TT(e, t, a, i) {
      var o, s = a0(a), f, p = i;
      if (p === Fi && (p = cc(e)), p === Fi) {
        if (o = Vi(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Fi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Gn.call(Iy, e) && (Iy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function RT(e, t) {
      return a0(t).createTextNode(e);
    }
    function bT(e, t, a, i) {
      var o = Vi(t, a);
      wh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < op.length; f++)
            Rn(op[f], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          R(e, a), s = h(e, a), Rn("invalid", e);
          break;
        case "option":
          Zt(e, a), s = a;
          break;
        case "select":
          os(e, a), s = ls(e, a), Rn("invalid", e);
          break;
        case "textarea":
          fv(e, a), s = Jf(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), CT(t, e, i, s, o), t) {
        case "input":
          La(e), ue(e, a, !1);
          break;
        case "textarea":
          La(e), pv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Oh(e);
          break;
      }
    }
    function wT(e, t, a, i, o) {
      wh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = ls(e, a), p = ls(e, i), s = [];
          break;
        case "textarea":
          f = Jf(e, a), p = Jf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Oh(e);
          break;
      }
      vc(t, p);
      var v, y, E = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var L = f[v];
            for (y in L)
              L.hasOwnProperty(y) && (E || (E = {}), E[y] = "");
          } else
            v === cp || v === Ps || v === Rh || v === Fu || v === e0 || (It.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var D = p[v], j = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || D === j || D == null && j == null))
          if (v === Bs)
            if (D && Object.freeze(D), j) {
              for (y in j)
                j.hasOwnProperty(y) && (!D || !D.hasOwnProperty(y)) && (E || (E = {}), E[y] = "");
              for (y in D)
                D.hasOwnProperty(y) && j[y] !== D[y] && (E || (E = {}), E[y] = D[y]);
            } else
              E || (s || (s = []), s.push(v, E)), E = D;
          else if (v === cp) {
            var H = D ? D[bh] : void 0, $ = j ? j[bh] : void 0;
            H != null && $ !== H && (s = s || []).push(v, H);
          } else
            v === Ps ? (typeof D == "string" || typeof D == "number") && (s = s || []).push(v, "" + D) : v === Rh || v === Fu || (It.hasOwnProperty(v) ? (D != null && (typeof D != "function" && _h(v, D), v === "onScroll" && Rn("scroll", e)), !s && j !== D && (s = [])) : (s = s || []).push(v, D));
      }
      return E && (ss(E, p[Bs]), (s = s || []).push(Bs, E)), s;
    }
    function _T(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && F(e, o);
      var s = Vi(a, i), f = Vi(a, o);
      switch (xT(e, t, s, f), a) {
        case "input":
          B(e, o);
          break;
        case "textarea":
          dv(e, o);
          break;
        case "select":
          ty(e, o);
          break;
      }
    }
    function kT(e) {
      {
        var t = e.toLowerCase();
        return hc.hasOwnProperty(t) && hc[t] || null;
      }
    }
    function DT(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = Vi(t, a), wh(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < op.length; y++)
            Rn(op[y], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          R(e, a), Rn("invalid", e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          os(e, a), Rn("invalid", e);
          break;
        case "textarea":
          fv(e, a), Rn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var E = e.attributes, L = 0; L < E.length; L++) {
          var D = E[L].name.toLowerCase();
          switch (D) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(E[L].name);
          }
        }
      }
      var j = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var $ = a[H];
          if (H === Ps)
            typeof $ == "string" ? e.textContent !== $ && (a[Fu] !== !0 && Dh(e.textContent, $, s, f), j = [Ps, $]) : typeof $ == "number" && e.textContent !== "" + $ && (a[Fu] !== !0 && Dh(e.textContent, $, s, f), j = [Ps, "" + $]);
          else if (It.hasOwnProperty(H))
            $ != null && (typeof $ != "function" && _h(H, $), H === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var _e = void 0, Ye = p && rt ? null : kr(H);
            if (a[Fu] !== !0) {
              if (!(H === Rh || H === Fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === cp) {
                  var Fe = e.innerHTML, Ot = $ ? $[bh] : void 0;
                  if (Ot != null) {
                    var Ct = r0(e, Ot);
                    Ct !== Fe && fp(H, Fe, Ct);
                  }
                } else if (H === Bs) {
                  if (v.delete(H), n0) {
                    var z = sy($);
                    _e = e.getAttribute("style"), z !== _e && fp(H, _e, z);
                  }
                } else if (p && !rt)
                  v.delete(H.toLowerCase()), _e = pi(e, H, $), $ !== _e && fp(H, _e, $);
                else if (!Sn(H, Ye, p) && !Kt(H, $, Ye, p)) {
                  var Y = !1;
                  if (Ye !== null)
                    v.delete(Ye.attributeName), _e = ha(e, H, $, Ye);
                  else {
                    var A = i;
                    if (A === Fi && (A = cc(t)), A === Fi)
                      v.delete(H.toLowerCase());
                    else {
                      var le = kT(H);
                      le !== null && le !== H && (Y = !0, v.delete(le)), v.delete(H);
                    }
                    _e = pi(e, H, $);
                  }
                  var ke = rt;
                  !ke && $ !== _e && !Y && fp(H, _e, $);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Fu] !== !0 && t0(v), t) {
        case "input":
          La(e), ue(e, a, !0);
          break;
        case "textarea":
          La(e), pv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Oh(e);
          break;
      }
      return j;
    }
    function OT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function $y(e, t) {
      {
        if ($a)
          return;
        $a = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Yy(e, t) {
      {
        if ($a)
          return;
        $a = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Wy(e, t, a) {
      {
        if ($a)
          return;
        $a = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Gy(e, t) {
      {
        if (t === "" || $a)
          return;
        $a = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function LT(e, t, a) {
      switch (t) {
        case "input":
          Qe(e, a);
          return;
        case "textarea":
          ed(e, a);
          return;
        case "select":
          ny(e, a);
          return;
      }
    }
    var dp = function() {
    }, pp = function() {
    };
    {
      var MT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], i0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NT = i0.concat(["button"]), zT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], l0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      pp = function(e, t) {
        var a = vt({}, e || l0), i = {
          tag: t
        };
        return i0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), NT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), MT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var AT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return zT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, UT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, o0 = {};
      dp = function(e, t, a) {
        a = a || l0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = AT(e, o) ? null : i, f = s ? null : UT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!o0[y]) {
            o0[y] = !0;
            var E = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var D = "";
              v === "table" && e === "tr" && (D += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, v, L, D);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, v);
          }
        }
      };
    }
    var Lh = "suppressHydrationWarning", Mh = "$", Nh = "/$", vp = "$?", hp = "$!", jT = "style", Qy = null, qy = null;
    function FT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ai:
        case lo: {
          t = i === ai ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : nd(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = nd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = pp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function HT(e, t, a) {
      {
        var i = e, o = nd(i.namespace, t), s = pp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function ED(e) {
      return e;
    }
    function VT(e) {
      Qy = Ta(), qy = eT();
      var t = null;
      return er(!1), t;
    }
    function PT(e) {
      tT(qy), er(Qy), Qy = null, qy = null;
    }
    function BT(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (dp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = pp(f.ancestorInfo, e);
          dp(null, p, v);
        }
        s = f.namespace;
      }
      var y = TT(e, t, a, s);
      return gp(o, y), rg(y, t), y;
    }
    function IT(e, t) {
      e.appendChild(t);
    }
    function $T(e, t, a, i, o) {
      switch (bT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function YT(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = pp(f.ancestorInfo, t);
          dp(null, p, v);
        }
      }
      return wT(e, t, a, i);
    }
    function Xy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function WT(e, t, a, i) {
      {
        var o = a;
        dp(null, e, o.ancestorInfo);
      }
      var s = RT(e, t);
      return gp(i, s), s;
    }
    function GT() {
      var e = window.event;
      return e === void 0 ? Qi : Nr(e.type);
    }
    var Ky = typeof setTimeout == "function" ? setTimeout : void 0, QT = typeof clearTimeout == "function" ? clearTimeout : void 0, Zy = -1, u0 = typeof Promise == "function" ? Promise : void 0, qT = typeof queueMicrotask == "function" ? queueMicrotask : typeof u0 < "u" ? function(e) {
      return u0.resolve(null).then(e).catch(XT);
    } : Ky;
    function XT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function KT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function ZT(e, t, a, i, o, s) {
      _T(e, t, a, i, o), rg(e, o);
    }
    function s0(e) {
      dc(e, "");
    }
    function JT(e, t, a) {
      e.nodeValue = a;
    }
    function eR(e, t) {
      e.appendChild(t);
    }
    function tR(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Oh(a);
    }
    function nR(e, t, a) {
      e.insertBefore(t, a);
    }
    function rR(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function aR(e, t) {
      e.removeChild(t);
    }
    function iR(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Jy(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === An) {
          var s = o.data;
          if (s === Nh)
            if (i === 0) {
              e.removeChild(o), Et(t);
              return;
            } else
              i--;
          else
            (s === Mh || s === vp || s === hp) && i++;
        }
        a = o;
      } while (a);
      Et(t);
    }
    function lR(e, t) {
      e.nodeType === An ? Jy(e.parentNode, t) : e.nodeType === Zr && Jy(e, t), Et(e);
    }
    function oR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function uR(e) {
      e.nodeValue = "";
    }
    function sR(e, t) {
      e = e;
      var a = t[jT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function cR(e, t) {
      e.nodeValue = t;
    }
    function fR(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === ai && e.documentElement && e.removeChild(e.documentElement);
    }
    function dR(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function pR(e, t) {
      return t === "" || e.nodeType !== Hi ? null : e;
    }
    function vR(e) {
      return e.nodeType !== An ? null : e;
    }
    function c0(e) {
      return e.data === vp;
    }
    function eg(e) {
      return e.data === hp;
    }
    function hR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function mR(e, t) {
      e._reactRetry = t;
    }
    function zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Hi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === Mh || a === hp || a === vp)
            break;
          if (a === Nh)
            return null;
        }
      }
      return e;
    }
    function mp(e) {
      return zh(e.nextSibling);
    }
    function yR(e) {
      return zh(e.firstChild);
    }
    function gR(e) {
      return zh(e.firstChild);
    }
    function SR(e) {
      return zh(e.nextSibling);
    }
    function ER(e, t, a, i, o, s, f) {
      gp(s, e), rg(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var y = (s.mode & mt) !== Ge;
      return DT(e, t, a, p, i, y, f);
    }
    function CR(e, t, a, i) {
      return gp(a, e), a.mode & mt, OT(e, t);
    }
    function xR(e, t) {
      gp(t, e);
    }
    function TR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Nh) {
            if (a === 0)
              return mp(t);
            a--;
          } else
            (i === Mh || i === hp || i === vp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function f0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Mh || i === hp || i === vp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Nh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function RR(e) {
      Et(e);
    }
    function bR(e) {
      Et(e);
    }
    function wR(e) {
      return e !== "head" && e !== "body";
    }
    function _R(e, t, a, i) {
      var o = !0;
      Dh(t.nodeValue, a, i, o);
    }
    function kR(e, t, a, i, o, s) {
      if (t[Lh] !== !0) {
        var f = !0;
        Dh(i.nodeValue, o, s, f);
      }
    }
    function DR(e, t) {
      t.nodeType === Zr ? $y(e, t) : t.nodeType === An || Yy(e, t);
    }
    function OR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? $y(a, t) : t.nodeType === An || Yy(a, t));
      }
    }
    function LR(e, t, a, i, o) {
      (o || t[Lh] !== !0) && (i.nodeType === Zr ? $y(a, i) : i.nodeType === An || Yy(a, i));
    }
    function MR(e, t, a) {
      Wy(e, t);
    }
    function NR(e, t) {
      Gy(e, t);
    }
    function zR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Wy(i, t);
      }
    }
    function AR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Gy(a, t);
      }
    }
    function UR(e, t, a, i, o, s) {
      (s || t[Lh] !== !0) && Wy(a, i);
    }
    function jR(e, t, a, i, o) {
      (o || t[Lh] !== !0) && Gy(a, i);
    }
    function FR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function HR(e) {
      up(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, tg = "__reactProps$" + Ef, yp = "__reactContainer$" + Ef, ng = "__reactEvents$" + Ef, VR = "__reactListeners$" + Ef, PR = "__reactHandles$" + Ef;
    function BR(e) {
      delete e[Cf], delete e[tg], delete e[ng], delete e[VR], delete e[PR];
    }
    function gp(e, t) {
      t[Cf] = e;
    }
    function Ah(e, t) {
      t[yp] = e;
    }
    function d0(e) {
      e[yp] = null;
    }
    function Sp(e) {
      return !!e[yp];
    }
    function Is(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yp] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = f0(e); o !== null; ) {
              var s = o[Cf];
              if (s)
                return s;
              o = f0(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Hu(e) {
      var t = e[Cf] || e[yp];
      return t && (t.tag === q || t.tag === de || t.tag === Ee || t.tag === I) ? t : null;
    }
    function xf(e) {
      if (e.tag === q || e.tag === de)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Uh(e) {
      return e[tg] || null;
    }
    function rg(e, t) {
      e[tg] = t;
    }
    function IR(e) {
      var t = e[ng];
      return t === void 0 && (t = e[ng] = /* @__PURE__ */ new Set()), t;
    }
    var p0 = {}, v0 = S.ReactDebugCurrentFrame;
    function jh(e) {
      if (e) {
        var t = e._owner, a = gi(e.type, e._source, t ? t.type : null);
        v0.setExtraStackFrame(a);
      } else
        v0.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, o) {
      {
        var s = Function.call.bind(Gn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (jh(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), jh(null)), p instanceof Error && !(p.message in p0) && (p0[p.message] = !0, jh(o), g("Failed %s type: %s", a, p.message), jh(null));
          }
      }
    }
    var ag = [], Fh;
    Fh = [];
    var Ao = -1;
    function Vu(e) {
      return {
        current: e
      };
    }
    function oa(e, t) {
      if (Ao < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Fh[Ao] && g("Unexpected Fiber popped."), e.current = ag[Ao], ag[Ao] = null, Fh[Ao] = null, Ao--;
    }
    function ua(e, t, a) {
      Ao++, ag[Ao] = e.current, Fh[Ao] = a, e.current = t;
    }
    var ig;
    ig = {};
    var si = {};
    Object.freeze(si);
    var Uo = Vu(si), $l = Vu(!1), lg = si;
    function Tf(e, t, a) {
      return a && Yl(t) ? lg : Uo.current;
    }
    function h0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Rf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = at(e) || "Unknown";
          Ji(i, s, "context", p);
        }
        return o && h0(e, t, s), s;
      }
    }
    function Hh() {
      return $l.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Vh(e) {
      oa($l, e), oa(Uo, e);
    }
    function og(e) {
      oa($l, e), oa(Uo, e);
    }
    function m0(e, t, a) {
      {
        if (Uo.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Uo, t, e), ua($l, a, e);
      }
    }
    function y0(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = at(e) || "Unknown";
            ig[s] || (ig[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((at(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = at(e) || "Unknown";
          Ji(o, f, "child context", v);
        }
        return vt({}, a, f);
      }
    }
    function Ph(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return lg = Uo.current, ua(Uo, a, e), ua($l, $l.current, e), !0;
      }
    }
    function g0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = y0(e, t, lg);
          i.__reactInternalMemoizedMergedChildContext = o, oa($l, e), oa(Uo, e), ua(Uo, o, e), ua($l, a, e);
        } else
          oa($l, e), ua($l, a, e);
      }
    }
    function $R(e) {
      {
        if (!xd(e) || e.tag !== W)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case W: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, Bh = 1, jo = null, ug = !1, sg = !1;
    function S0(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    function YR(e) {
      ug = !0, S0(e);
    }
    function E0() {
      ug && Bu();
    }
    function Bu() {
      if (!sg && jo !== null) {
        sg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = jo;
          for (In(Cr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          jo = null, ug = !1;
        } catch (s) {
          throw jo !== null && (jo = jo.slice(e + 1)), Rc(wc, Bu), s;
        } finally {
          In(t), sg = !1;
        }
      }
      return null;
    }
    var bf = [], wf = 0, Ih = null, $h = 0, _i = [], ki = 0, $s = null, Fo = 1, Ho = "";
    function WR(e) {
      return Ws(), (e.flags & Sd) !== Ie;
    }
    function GR(e) {
      return Ws(), $h;
    }
    function QR() {
      var e = Ho, t = Fo, a = t & ~qR(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Ws(), bf[wf++] = $h, bf[wf++] = Ih, Ih = e, $h = t;
    }
    function C0(e, t, a) {
      Ws(), _i[ki++] = Fo, _i[ki++] = Ho, _i[ki++] = $s, $s = e;
      var i = Fo, o = Ho, s = Yh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Yh(t) + s;
      if (v > 30) {
        var y = s - s % 5, E = (1 << y) - 1, L = (f & E).toString(32), D = f >> y, j = s - y, H = Yh(t) + j, $ = p << j, _e = $ | D, Ye = L + o;
        Fo = 1 << H | _e, Ho = Ye;
      } else {
        var Fe = p << s, Ot = Fe | f, Ct = o;
        Fo = 1 << v | Ot, Ho = Ct;
      }
    }
    function cg(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), C0(e, a, i);
      }
    }
    function Yh(e) {
      return 32 - Mc(e);
    }
    function qR(e) {
      return 1 << Yh(e) - 1;
    }
    function fg(e) {
      for (; e === Ih; )
        Ih = bf[--wf], bf[wf] = null, $h = bf[--wf], bf[wf] = null;
      for (; e === $s; )
        $s = _i[--ki], _i[ki] = null, Ho = _i[--ki], _i[ki] = null, Fo = _i[--ki], _i[ki] = null;
    }
    function XR() {
      return Ws(), $s !== null ? {
        id: Fo,
        overflow: Ho
      } : null;
    }
    function KR(e, t) {
      Ws(), _i[ki++] = Fo, _i[ki++] = Ho, _i[ki++] = $s, Fo = t.id, Ho = t.overflow, $s = e;
    }
    function Ws() {
      Ar() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, Di = null, el = !1, Gs = !1, Iu = null;
    function ZR() {
      el && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function x0() {
      Gs = !0;
    }
    function JR() {
      return Gs;
    }
    function eb(e) {
      var t = e.stateNode.containerInfo;
      return Di = gR(t), zr = e, el = !0, Iu = null, Gs = !1, !0;
    }
    function tb(e, t, a) {
      return Di = SR(t), zr = e, el = !0, Iu = null, Gs = !1, a !== null && KR(e, a), !0;
    }
    function T0(e, t) {
      switch (e.tag) {
        case I: {
          DR(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & mt) !== Ge;
          LR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && OR(i.dehydrated, t);
          break;
        }
      }
    }
    function R0(e, t) {
      T0(e, t);
      var a = ak();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Bt) : i.push(a);
    }
    function dg(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, MR(a, i);
                break;
              case de:
                var o = t.pendingProps;
                NR(a, o);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var v = t.type, y = t.pendingProps, E = (e.mode & mt) !== Ge;
                UR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case de: {
                var L = t.pendingProps, D = (e.mode & mt) !== Ge;
                jR(
                  s,
                  f,
                  p,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
            }
            break;
          }
          case Ee: {
            var j = e.memoizedState, H = j.dehydrated;
            if (H !== null)
              switch (t.tag) {
                case q:
                  var $ = t.type;
                  t.pendingProps, zR(H, $);
                  break;
                case de:
                  var _e = t.pendingProps;
                  AR(H, _e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function b0(e, t) {
      t.flags = t.flags & ~Aa | cn, dg(e, t);
    }
    function w0(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = dR(t, a);
          return i !== null ? (e.stateNode = i, zr = e, Di = yR(i), !0) : !1;
        }
        case de: {
          var o = e.pendingProps, s = pR(t, o);
          return s !== null ? (e.stateNode = s, zr = e, Di = null, !0) : !1;
        }
        case Ee: {
          var f = vR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: XR(),
              retryLane: ia
            };
            e.memoizedState = p;
            var v = ik(f);
            return v.return = e, e.child = v, zr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function pg(e) {
      return (e.mode & mt) !== Ge && (e.flags & et) === Ie;
    }
    function vg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function hg(e) {
      if (el) {
        var t = Di;
        if (!t) {
          pg(e) && (dg(zr, e), vg()), b0(zr, e), el = !1, zr = e;
          return;
        }
        var a = t;
        if (!w0(e, t)) {
          pg(e) && (dg(zr, e), vg()), t = mp(a);
          var i = zr;
          if (!t || !w0(e, t)) {
            b0(zr, e), el = !1, zr = e;
            return;
          }
          R0(i, a);
        }
      }
    }
    function nb(e, t, a) {
      var i = e.stateNode, o = !Gs, s = ER(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function rb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = CR(t, a, e);
      if (i) {
        var o = zr;
        if (o !== null)
          switch (o.tag) {
            case I: {
              var s = o.stateNode.containerInfo, f = (o.mode & mt) !== Ge;
              _R(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = o.type, v = o.memoizedProps, y = o.stateNode, E = (o.mode & mt) !== Ge;
              kR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function ab(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xR(a, e);
    }
    function ib(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return TR(a);
    }
    function _0(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== I && t.tag !== Ee; )
        t = t.return;
      zr = t;
    }
    function Wh(e) {
      if (e !== zr)
        return !1;
      if (!el)
        return _0(e), el = !0, !1;
      if (e.tag !== I && (e.tag !== q || wR(e.type) && !Xy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (pg(e))
            k0(e), vg();
          else
            for (; t; )
              R0(e, t), t = mp(t);
      }
      return _0(e), e.tag === Ee ? Di = ib(e) : Di = zr ? mp(e.stateNode) : null, !0;
    }
    function lb() {
      return el && Di !== null;
    }
    function k0(e) {
      for (var t = Di; t; )
        T0(e, t), t = mp(t);
    }
    function _f() {
      zr = null, Di = null, el = !1, Gs = !1;
    }
    function D0() {
      Iu !== null && (TC(Iu), Iu = null);
    }
    function Ar() {
      return el;
    }
    function mg(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    var ob = S.ReactCurrentBatchConfig, ub = null;
    function sb() {
      return ob.transition;
    }
    var tl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var cb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & xn && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ep = [], Cp = [], xp = [], Tp = [], Rp = [], bp = [], qs = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & xn && typeof t.UNSAFE_componentWillMount == "function" && Cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & xn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Tp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & xn && typeof t.UNSAFE_componentWillUpdate == "function" && bp.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(D) {
          e.add(at(D) || "Component"), qs.add(D.type);
        }), Ep = []);
        var t = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(D) {
          t.add(at(D) || "Component"), qs.add(D.type);
        }), Cp = []);
        var a = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(D) {
          a.add(at(D) || "Component"), qs.add(D.type);
        }), xp = []);
        var i = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(D) {
          i.add(at(D) || "Component"), qs.add(D.type);
        }), Tp = []);
        var o = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(D) {
          o.add(at(D) || "Component"), qs.add(D.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (bp.length > 0 && (bp.forEach(function(D) {
          s.add(at(D) || "Component"), qs.add(D.type);
        }), bp = []), t.size > 0) {
          var f = Qs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Qs(e);
          P(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var E = Qs(a);
          P(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (o.size > 0) {
          var L = Qs(o);
          P(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var Gh = /* @__PURE__ */ new Map(), O0 = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = cb(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!O0.has(e.type)) {
          var i = Gh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Gh.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        Gh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(at(s) || "Component"), O0.add(s.type);
            });
            var o = Qs(i);
            try {
              Gt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              bn();
            }
          }
        });
      }, tl.discardPendingWarnings = function() {
        Ep = [], Cp = [], xp = [], Tp = [], Rp = [], bp = [], Gh = /* @__PURE__ */ new Map();
      };
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = vt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var yg = Vu(null), gg;
    gg = {};
    var Qh = null, kf = null, Sg = null, qh = !1;
    function Xh() {
      Qh = null, kf = null, Sg = null, qh = !1;
    }
    function L0() {
      qh = !0;
    }
    function M0() {
      qh = !1;
    }
    function N0(e, t, a) {
      ua(yg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== gg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = gg;
    }
    function Eg(e, t) {
      var a = yg.current;
      oa(yg, t), e._currentValue = a;
    }
    function Cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Ro(i.childLanes, t) ? o !== null && !Ro(o.childLanes, t) && (o.childLanes = ct(o.childLanes, t)) : (i.childLanes = ct(i.childLanes, t), o !== null && (o.childLanes = ct(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fb(e, t, a) {
      db(e, t, a);
    }
    function db(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === W) {
                var p = Bn(a), v = Vo(ln, p);
                v.tag = Zh;
                var y = i.updateQueue;
                if (y !== null) {
                  var E = y.shared, L = E.pending;
                  L === null ? v.next = v : (v.next = L.next, L.next = v), E.pending = v;
                }
              }
              i.lanes = ct(i.lanes, a);
              var D = i.alternate;
              D !== null && (D.lanes = ct(D.lanes, a)), Cg(i.return, a, e), s.lanes = ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === pe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Mt) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = ct(j.lanes, a);
          var H = j.alternate;
          H !== null && (H.lanes = ct(H.lanes, a)), Cg(j, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var $ = o.sibling;
            if ($ !== null) {
              $.return = o.return, o = $;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Df(e, t) {
      Qh = e, kf = null, Sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function nr(e) {
      qh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Qh.dependencies = {
            lanes: G,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function xg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function pb() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function z0(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, xg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Kh(e, i);
    }
    function vb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, xg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function hb(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, xg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Kh(e, i);
    }
    function Ya(e, t) {
      return Kh(e, t);
    }
    var mb = Kh;
    function Kh(e, t) {
      e.lanes = ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ct(a.lanes, t)), a === null && (e.flags & (cn | Aa)) !== Ie && AC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ct(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ct(a.childLanes, t) : (o.flags & (cn | Aa)) !== Ie && AC(e), i = o, o = o.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var A0 = 0, U0 = 1, Zh = 2, Tg = 3, Jh = !1, Rg, em;
    Rg = !1, em = null;
    function bg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: G
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function j0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Vo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: A0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (em === o && !Rg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Rg = !0), m_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, mb(e, a);
      } else
        return hb(e, o, t, a);
    }
    function tm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Ad(a)) {
          var s = o.lanes;
          s = jd(s, e.pendingLanes);
          var f = ct(s, a);
          o.lanes = f, Ru(e, f);
        }
      }
    }
    function wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function yb(e, t, a, i, o, s) {
      switch (a.tag) {
        case U0: {
          var f = a.payload;
          if (typeof f == "function") {
            L0();
            var p = f.call(s, i, o);
            {
              if (e.mode & xn) {
                Pn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Pn(!1);
                }
              }
              M0();
            }
            return p;
          }
          return f;
        }
        case Tg:
          e.flags = e.flags & ~Kn | et;
        case A0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            L0(), y = v.call(s, i, o);
            {
              if (e.mode & xn) {
                Pn(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  Pn(!1);
                }
              }
              M0();
            }
          } else
            y = v;
          return y == null ? i : vt({}, i, y);
        }
        case Zh:
          return Jh = !0, i;
      }
      return i;
    }
    function nm(e, t, a, i) {
      var o = e.updateQueue;
      Jh = !1, em = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var E = e.alternate;
        if (E !== null) {
          var L = E.updateQueue, D = L.lastBaseUpdate;
          D !== f && (D === null ? L.firstBaseUpdate = y : D.next = y, L.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var j = o.baseState, H = G, $ = null, _e = null, Ye = null, Fe = s;
        do {
          var Ot = Fe.lane, Ct = Fe.eventTime;
          if (Ro(i, Ot)) {
            if (Ye !== null) {
              var Y = {
                eventTime: Ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: Fe.tag,
                payload: Fe.payload,
                callback: Fe.callback,
                next: null
              };
              Ye = Ye.next = Y;
            }
            j = yb(e, o, Fe, j, t, a);
            var A = Fe.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            Fe.lane !== kt) {
              e.flags |= Ci;
              var le = o.effects;
              le === null ? o.effects = [Fe] : le.push(Fe);
            }
          } else {
            var z = {
              eventTime: Ct,
              lane: Ot,
              tag: Fe.tag,
              payload: Fe.payload,
              callback: Fe.callback,
              next: null
            };
            Ye === null ? (_e = Ye = z, $ = j) : Ye = Ye.next = z, H = ct(H, Ot);
          }
          if (Fe = Fe.next, Fe === null) {
            if (p = o.shared.pending, p === null)
              break;
            var ke = p, xe = ke.next;
            ke.next = null, Fe = xe, o.lastBaseUpdate = ke, o.shared.pending = null;
          }
        } while (!0);
        Ye === null && ($ = j), o.baseState = $, o.firstBaseUpdate = _e, o.lastBaseUpdate = Ye;
        var Je = o.shared.interleaved;
        if (Je !== null) {
          var lt = Je;
          do
            H = ct(H, lt.lane), lt = lt.next;
          while (lt !== Je);
        } else
          s === null && (o.shared.lanes = G);
        Kp(H), e.lanes = H, e.memoizedState = j;
      }
      em = null;
    }
    function gb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function F0() {
      Jh = !1;
    }
    function rm() {
      return Jh;
    }
    function H0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, gb(f, a));
        }
    }
    var _g = {}, V0 = new x.Component().refs, kg, Dg, Og, Lg, Mg, P0, am, Ng, zg, Ag;
    {
      kg = /* @__PURE__ */ new Set(), Dg = /* @__PURE__ */ new Set(), Og = /* @__PURE__ */ new Set(), Lg = /* @__PURE__ */ new Set(), Ng = /* @__PURE__ */ new Set(), Mg = /* @__PURE__ */ new Set(), zg = /* @__PURE__ */ new Set(), Ag = /* @__PURE__ */ new Set();
      var B0 = /* @__PURE__ */ new Set();
      am = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          B0.has(a) || (B0.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, P0 = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          Mg.has(a) || (Mg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(_g, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(_g);
    }
    function Ug(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & xn) {
          Pn(!0);
          try {
            s = a(i, o);
          } finally {
            Pn(!1);
          }
        }
        P0(t, s);
      }
      var f = s == null ? o : vt({}, o, s);
      if (e.memoizedState = f, e.lanes === G) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var jg = {
      isMounted: Ea,
      enqueueSetState: function(e, t, a) {
        var i = Na(e), o = wa(), s = Zu(i), f = Vo(o, s);
        f.payload = t, a != null && (am(a, "setState"), f.callback = a);
        var p = $u(i, f, s);
        p !== null && (hr(p, i, s, o), tm(p, i, s)), Al(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Na(e), o = wa(), s = Zu(i), f = Vo(o, s);
        f.tag = U0, f.payload = t, a != null && (am(a, "replaceState"), f.callback = a);
        var p = $u(i, f, s);
        p !== null && (hr(p, i, s, o), tm(p, i, s)), Al(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Na(e), i = wa(), o = Zu(a), s = Vo(i, o);
        s.tag = Zh, t != null && (am(t, "forceUpdate"), s.callback = t);
        var f = $u(a, s, o);
        f !== null && (hr(f, a, o, i), tm(f, a, o)), Ld(a, o);
      }
    };
    function I0(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & xn) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Pe(a, i) || !Pe(o, s) : !0;
    }
    function Sb(e, t, a) {
      var i = e.stateNode;
      {
        var o = zt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !zg.has(t) && (zg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Og.has(t) && (Og.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function $0(e, t) {
      t.updater = jg, e.stateNode = t, vu(t, e), t._reactInternalInstance = _g;
    }
    function Y0(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ge && f._context === void 0
        );
        if (!p && !Ag.has(t)) {
          Ag.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === re ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        o = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Rf(e, o) : si;
      }
      var E = new t(a, s);
      if (e.mode & xn) {
        Pn(!0);
        try {
          E = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var L = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      $0(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var D = zt(t) || "Component";
          Dg.has(D) || (Dg.add(D), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, E.state === null ? "null" : "undefined", D));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var j = null, H = null, $ = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? $ = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && ($ = "UNSAFE_componentWillUpdate"), j !== null || H !== null || $ !== null) {
            var _e = zt(t) || "Component", Ye = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Lg.has(_e) || (Lg.add(_e), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, Ye, j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : "", $ !== null ? `
  ` + $ : ""));
          }
        }
      }
      return i && h0(e, o, s), E;
    }
    function Eb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", at(e) || "Component"), jg.enqueueReplaceState(t, t.state, null));
    }
    function W0(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = at(e) || "Component";
          kg.has(s) || (kg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        jg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Fg(e, t, a, i) {
      Sb(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = V0, bg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = nr(s);
      else {
        var f = Tf(e, t, !0);
        o.context = Rf(e, f);
      }
      {
        if (o.state === a) {
          var p = zt(t) || "Component";
          Ng.has(p) || (Ng.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & xn && tl.recordLegacyContextWarning(e, o), tl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Ug(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Eb(e, o), nm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var y = st;
        y |= ea, (e.mode & Fa) !== Ge && (y |= ta), e.flags |= y;
      }
    }
    function Cb(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Tf(e, t, !0);
        v = Rf(e, y);
      }
      var E = t.getDerivedStateFromProps, L = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !L && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && W0(e, o, a, v), F0();
      var D = e.memoizedState, j = o.state = D;
      if (nm(e, a, o, i), j = e.memoizedState, s === a && D === j && !Hh() && !rm()) {
        if (typeof o.componentDidMount == "function") {
          var H = st;
          H |= ea, (e.mode & Fa) !== Ge && (H |= ta), e.flags |= H;
        }
        return !1;
      }
      typeof E == "function" && (Ug(e, t, E, a), j = e.memoizedState);
      var $ = rm() || I0(e, t, s, a, D, j, v);
      if ($) {
        if (!L && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var _e = st;
          _e |= ea, (e.mode & Fa) !== Ge && (_e |= ta), e.flags |= _e;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ye = st;
          Ye |= ea, (e.mode & Fa) !== Ge && (Ye |= ta), e.flags |= Ye;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return o.props = a, o.state = j, o.context = v, $;
    }
    function xb(e, t, a, i, o) {
      var s = t.stateNode;
      j0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, E = a.contextType, L = si;
      if (typeof E == "object" && E !== null)
        L = nr(E);
      else {
        var D = Tf(t, a, !0);
        L = Rf(t, D);
      }
      var j = a.getDerivedStateFromProps, H = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== L) && W0(t, s, i, L), F0();
      var $ = t.memoizedState, _e = s.state = $;
      if (nm(t, i, s, o), _e = t.memoizedState, f === v && $ === _e && !Hh() && !rm() && !He)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= za), !1;
      typeof j == "function" && (Ug(t, a, j, i), _e = t.memoizedState);
      var Ye = rm() || I0(t, a, p, i, $, _e, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return Ye ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, _e, L), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, _e, L)), typeof s.componentDidUpdate == "function" && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = _e), s.props = i, s.state = _e, s.context = L, Ye;
    }
    var Hg, Vg, Pg, Bg, Ig, G0 = function(e, t) {
    };
    Hg = !1, Vg = !1, Pg = {}, Bg = {}, Ig = {}, G0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = at(t) || "Component";
        Bg[a] || (Bg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & xn || Ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = at(e) || "Component";
          Pg[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Pg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== W)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var E = function(L) {
            var D = v.refs;
            D === V0 && (D = v.refs = {}), L === null ? delete D[y] : D[y] = L;
          };
          return E._stringRef = y, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function im(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function lm(e) {
      {
        var t = at(e) || "Component";
        if (Ig[t])
          return;
        Ig[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Q0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function q0(e) {
      function t(z, Y) {
        if (e) {
          var A = z.deletions;
          A === null ? (z.deletions = [Y], z.flags |= Bt) : A.push(Y);
        }
      }
      function a(z, Y) {
        if (!e)
          return null;
        for (var A = Y; A !== null; )
          t(z, A), A = A.sibling;
        return null;
      }
      function i(z, Y) {
        for (var A = /* @__PURE__ */ new Map(), le = Y; le !== null; )
          le.key !== null ? A.set(le.key, le) : A.set(le.index, le), le = le.sibling;
        return A;
      }
      function o(z, Y) {
        var A = ac(z, Y);
        return A.index = 0, A.sibling = null, A;
      }
      function s(z, Y, A) {
        if (z.index = A, !e)
          return z.flags |= Sd, Y;
        var le = z.alternate;
        if (le !== null) {
          var ke = le.index;
          return ke < Y ? (z.flags |= cn, Y) : ke;
        } else
          return z.flags |= cn, Y;
      }
      function f(z) {
        return e && z.alternate === null && (z.flags |= cn), z;
      }
      function p(z, Y, A, le) {
        if (Y === null || Y.tag !== de) {
          var ke = m1(A, z.mode, le);
          return ke.return = z, ke;
        } else {
          var xe = o(Y, A);
          return xe.return = z, xe;
        }
      }
      function v(z, Y, A, le) {
        var ke = A.type;
        if (ke === ya)
          return E(z, Y, A.props.children, le, A.key);
        if (Y !== null && (Y.elementType === ke || // Keep this check inline so it only runs on the false path:
        HC(Y, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === $e && Q0(ke) === Y.type)) {
          var xe = o(Y, A.props);
          return xe.ref = wp(z, Y, A), xe.return = z, xe._debugSource = A._source, xe._debugOwner = A._owner, xe;
        }
        var Je = h1(A, z.mode, le);
        return Je.ref = wp(z, Y, A), Je.return = z, Je;
      }
      function y(z, Y, A, le) {
        if (Y === null || Y.tag !== Z || Y.stateNode.containerInfo !== A.containerInfo || Y.stateNode.implementation !== A.implementation) {
          var ke = y1(A, z.mode, le);
          return ke.return = z, ke;
        } else {
          var xe = o(Y, A.children || []);
          return xe.return = z, xe;
        }
      }
      function E(z, Y, A, le, ke) {
        if (Y === null || Y.tag !== ee) {
          var xe = es(A, z.mode, le, ke);
          return xe.return = z, xe;
        } else {
          var Je = o(Y, A);
          return Je.return = z, Je;
        }
      }
      function L(z, Y, A) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var le = m1("" + Y, z.mode, A);
          return le.return = z, le;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case vi: {
              var ke = h1(Y, z.mode, A);
              return ke.ref = wp(z, null, Y), ke.return = z, ke;
            }
            case Dr: {
              var xe = y1(Y, z.mode, A);
              return xe.return = z, xe;
            }
            case $e: {
              var Je = Y._payload, lt = Y._init;
              return L(z, lt(Je), A);
            }
          }
          if (Tt(Y) || ei(Y)) {
            var tn = es(Y, z.mode, A, null);
            return tn.return = z, tn;
          }
          im(z, Y);
        }
        return typeof Y == "function" && lm(z), null;
      }
      function D(z, Y, A, le) {
        var ke = Y !== null ? Y.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return ke !== null ? null : p(z, Y, "" + A, le);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case vi:
              return A.key === ke ? v(z, Y, A, le) : null;
            case Dr:
              return A.key === ke ? y(z, Y, A, le) : null;
            case $e: {
              var xe = A._payload, Je = A._init;
              return D(z, Y, Je(xe), le);
            }
          }
          if (Tt(A) || ei(A))
            return ke !== null ? null : E(z, Y, A, le, null);
          im(z, A);
        }
        return typeof A == "function" && lm(z), null;
      }
      function j(z, Y, A, le, ke) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var xe = z.get(A) || null;
          return p(Y, xe, "" + le, ke);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case vi: {
              var Je = z.get(le.key === null ? A : le.key) || null;
              return v(Y, Je, le, ke);
            }
            case Dr: {
              var lt = z.get(le.key === null ? A : le.key) || null;
              return y(Y, lt, le, ke);
            }
            case $e:
              var tn = le._payload, Ht = le._init;
              return j(z, Y, A, Ht(tn), ke);
          }
          if (Tt(le) || ei(le)) {
            var Wn = z.get(A) || null;
            return E(Y, Wn, le, ke, null);
          }
          im(Y, le);
        }
        return typeof le == "function" && lm(Y), null;
      }
      function H(z, Y, A) {
        {
          if (typeof z != "object" || z === null)
            return Y;
          switch (z.$$typeof) {
            case vi:
            case Dr:
              G0(z, A);
              var le = z.key;
              if (typeof le != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(le);
                break;
              }
              if (!Y.has(le)) {
                Y.add(le);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case $e:
              var ke = z._payload, xe = z._init;
              H(xe(ke), Y, A);
              break;
          }
        }
        return Y;
      }
      function $(z, Y, A, le) {
        for (var ke = null, xe = 0; xe < A.length; xe++) {
          var Je = A[xe];
          ke = H(Je, ke, z);
        }
        for (var lt = null, tn = null, Ht = Y, Wn = 0, Vt = 0, Fn = null; Ht !== null && Vt < A.length; Vt++) {
          Ht.index > Vt ? (Fn = Ht, Ht = null) : Fn = Ht.sibling;
          var ca = D(z, Ht, A[Vt], le);
          if (ca === null) {
            Ht === null && (Ht = Fn);
            break;
          }
          e && Ht && ca.alternate === null && t(z, Ht), Wn = s(ca, Wn, Vt), tn === null ? lt = ca : tn.sibling = ca, tn = ca, Ht = Fn;
        }
        if (Vt === A.length) {
          if (a(z, Ht), Ar()) {
            var Br = Vt;
            Ys(z, Br);
          }
          return lt;
        }
        if (Ht === null) {
          for (; Vt < A.length; Vt++) {
            var fi = L(z, A[Vt], le);
            fi !== null && (Wn = s(fi, Wn, Vt), tn === null ? lt = fi : tn.sibling = fi, tn = fi);
          }
          if (Ar()) {
            var _a = Vt;
            Ys(z, _a);
          }
          return lt;
        }
        for (var ka = i(z, Ht); Vt < A.length; Vt++) {
          var fa = j(ka, z, Vt, A[Vt], le);
          fa !== null && (e && fa.alternate !== null && ka.delete(fa.key === null ? Vt : fa.key), Wn = s(fa, Wn, Vt), tn === null ? lt = fa : tn.sibling = fa, tn = fa);
        }
        if (e && ka.forEach(function(Wf) {
          return t(z, Wf);
        }), Ar()) {
          var Wo = Vt;
          Ys(z, Wo);
        }
        return lt;
      }
      function _e(z, Y, A, le) {
        var ke = ei(A);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (Vg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Vg = !0), A.entries === ke && (Hg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hg = !0);
          var xe = ke.call(A);
          if (xe)
            for (var Je = null, lt = xe.next(); !lt.done; lt = xe.next()) {
              var tn = lt.value;
              Je = H(tn, Je, z);
            }
        }
        var Ht = ke.call(A);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Vt = null, Fn = Y, ca = 0, Br = 0, fi = null, _a = Ht.next(); Fn !== null && !_a.done; Br++, _a = Ht.next()) {
          Fn.index > Br ? (fi = Fn, Fn = null) : fi = Fn.sibling;
          var ka = D(z, Fn, _a.value, le);
          if (ka === null) {
            Fn === null && (Fn = fi);
            break;
          }
          e && Fn && ka.alternate === null && t(z, Fn), ca = s(ka, ca, Br), Vt === null ? Wn = ka : Vt.sibling = ka, Vt = ka, Fn = fi;
        }
        if (_a.done) {
          if (a(z, Fn), Ar()) {
            var fa = Br;
            Ys(z, fa);
          }
          return Wn;
        }
        if (Fn === null) {
          for (; !_a.done; Br++, _a = Ht.next()) {
            var Wo = L(z, _a.value, le);
            Wo !== null && (ca = s(Wo, ca, Br), Vt === null ? Wn = Wo : Vt.sibling = Wo, Vt = Wo);
          }
          if (Ar()) {
            var Wf = Br;
            Ys(z, Wf);
          }
          return Wn;
        }
        for (var nv = i(z, Fn); !_a.done; Br++, _a = Ht.next()) {
          var Jl = j(nv, z, Br, _a.value, le);
          Jl !== null && (e && Jl.alternate !== null && nv.delete(Jl.key === null ? Br : Jl.key), ca = s(Jl, ca, Br), Vt === null ? Wn = Jl : Vt.sibling = Jl, Vt = Jl);
        }
        if (e && nv.forEach(function(Uk) {
          return t(z, Uk);
        }), Ar()) {
          var Ak = Br;
          Ys(z, Ak);
        }
        return Wn;
      }
      function Ye(z, Y, A, le) {
        if (Y !== null && Y.tag === de) {
          a(z, Y.sibling);
          var ke = o(Y, A);
          return ke.return = z, ke;
        }
        a(z, Y);
        var xe = m1(A, z.mode, le);
        return xe.return = z, xe;
      }
      function Fe(z, Y, A, le) {
        for (var ke = A.key, xe = Y; xe !== null; ) {
          if (xe.key === ke) {
            var Je = A.type;
            if (Je === ya) {
              if (xe.tag === ee) {
                a(z, xe.sibling);
                var lt = o(xe, A.props.children);
                return lt.return = z, lt._debugSource = A._source, lt._debugOwner = A._owner, lt;
              }
            } else if (xe.elementType === Je || // Keep this check inline so it only runs on the false path:
            HC(xe, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === $e && Q0(Je) === xe.type) {
              a(z, xe.sibling);
              var tn = o(xe, A.props);
              return tn.ref = wp(z, xe, A), tn.return = z, tn._debugSource = A._source, tn._debugOwner = A._owner, tn;
            }
            a(z, xe);
            break;
          } else
            t(z, xe);
          xe = xe.sibling;
        }
        if (A.type === ya) {
          var Ht = es(A.props.children, z.mode, le, A.key);
          return Ht.return = z, Ht;
        } else {
          var Wn = h1(A, z.mode, le);
          return Wn.ref = wp(z, Y, A), Wn.return = z, Wn;
        }
      }
      function Ot(z, Y, A, le) {
        for (var ke = A.key, xe = Y; xe !== null; ) {
          if (xe.key === ke)
            if (xe.tag === Z && xe.stateNode.containerInfo === A.containerInfo && xe.stateNode.implementation === A.implementation) {
              a(z, xe.sibling);
              var Je = o(xe, A.children || []);
              return Je.return = z, Je;
            } else {
              a(z, xe);
              break;
            }
          else
            t(z, xe);
          xe = xe.sibling;
        }
        var lt = y1(A, z.mode, le);
        return lt.return = z, lt;
      }
      function Ct(z, Y, A, le) {
        var ke = typeof A == "object" && A !== null && A.type === ya && A.key === null;
        if (ke && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case vi:
              return f(Fe(z, Y, A, le));
            case Dr:
              return f(Ot(z, Y, A, le));
            case $e:
              var xe = A._payload, Je = A._init;
              return Ct(z, Y, Je(xe), le);
          }
          if (Tt(A))
            return $(z, Y, A, le);
          if (ei(A))
            return _e(z, Y, A, le);
          im(z, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(Ye(z, Y, "" + A, le)) : (typeof A == "function" && lm(z), a(z, Y));
      }
      return Ct;
    }
    var Of = q0(!0), X0 = q0(!1);
    function Tb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Rb(e, t) {
      for (var a = e.child; a !== null; )
        J_(a, t), a = a.sibling;
    }
    var _p = {}, Yu = Vu(_p), kp = Vu(_p), om = Vu(_p);
    function um(e) {
      if (e === _p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function K0() {
      var e = um(om.current);
      return e;
    }
    function $g(e, t) {
      ua(om, t, e), ua(kp, e, e), ua(Yu, _p, e);
      var a = FT(t);
      oa(Yu, e), ua(Yu, a, e);
    }
    function Lf(e) {
      oa(Yu, e), oa(kp, e), oa(om, e);
    }
    function Yg() {
      var e = um(Yu.current);
      return e;
    }
    function Z0(e) {
      um(om.current);
      var t = um(Yu.current), a = HT(t, e.type);
      t !== a && (ua(kp, e, e), ua(Yu, a, e));
    }
    function Wg(e) {
      kp.current === e && (oa(Yu, e), oa(kp, e));
    }
    var bb = 0, J0 = 1, eE = 1, Dp = 2, rl = Vu(bb);
    function Gg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & J0;
    }
    function Qg(e, t) {
      return e & J0 | t;
    }
    function wb(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      ua(rl, t, e);
    }
    function Nf(e) {
      oa(rl, e);
    }
    function _b(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function sm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || c0(i) || eg(i))
              return t;
          }
        } else if (t.tag === xt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & et) !== Ie;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Wa = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), sr = (
      /*    */
      4
    ), Ur = (
      /*   */
      8
    ), qg = [];
    function Xg() {
      for (var e = 0; e < qg.length; e++) {
        var t = qg[e];
        t._workInProgressVersionPrimary = null;
      }
      qg.length = 0;
    }
    function kb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = S.ReactCurrentDispatcher, Op = S.ReactCurrentBatchConfig, Kg, zf;
    Kg = /* @__PURE__ */ new Set();
    var Ks = G, en = null, cr = null, fr = null, cm = !1, Lp = !1, Mp = 0, Db = 0, Ob = 25, X = null, Oi = null, Gu = -1, Zg = !1;
    function qt() {
      {
        var e = X;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function ye() {
      {
        var e = X;
        Oi !== null && (Gu++, Oi[Gu] !== e && Lb(e));
      }
    }
    function Af(e) {
      e != null && !Tt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
    }
    function Lb(e) {
      {
        var t = at(en);
        if (!Kg.has(t) && (Kg.add(t), Oi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Gu; o++) {
            for (var s = Oi[o], f = o === Gu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Jg(e, t) {
      if (Zg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ze(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, o, s) {
      Ks = s, en = t, Oi = e !== null ? e._debugHookTypes : null, Gu = -1, Zg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? Re.current = xE : Oi !== null ? Re.current = CE : Re.current = EE;
      var f = a(i, o);
      if (Lp) {
        var p = 0;
        do {
          if (Lp = !1, Mp = 0, p >= Ob)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Zg = !1, cr = null, fr = null, t.updateQueue = null, Gu = -1, Re.current = TE, f = a(i, o);
        } while (Lp);
      }
      Re.current = Tm, t._debugHookTypes = Oi;
      var v = cr !== null && cr.next !== null;
      if (Ks = G, en = null, cr = null, fr = null, X = null, Oi = null, Gu = -1, e !== null && (e.flags & ir) !== (t.flags & ir) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & mt) !== Ge && g("Internal React error: Expected static flag was missing. Please notify the React team."), cm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Mp !== 0;
      return Mp = 0, e;
    }
    function tE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Fa) !== Ge ? t.flags &= ~(vo | ta | hn | st) : t.flags &= ~(hn | st), e.lanes = Tu(e.lanes, a);
    }
    function nE() {
      if (Re.current = Tm, cm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        cm = !1;
      }
      Ks = G, en = null, cr = null, fr = null, Oi = null, Gu = -1, X = null, hE = !1, Lp = !1, Mp = 0;
    }
    function Gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fr === null ? en.memoizedState = fr = e : fr = fr.next = e, fr;
    }
    function Li() {
      var e;
      if (cr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = cr.next;
      var a;
      if (fr === null ? a = en.memoizedState : a = fr.next, a !== null)
        fr = a, a = fr.next, cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        cr = e;
        var i = {
          memoizedState: cr.memoizedState,
          baseState: cr.baseState,
          baseQueue: cr.baseQueue,
          queue: cr.queue,
          next: null
        };
        fr === null ? en.memoizedState = fr = i : fr = fr.next = i;
      }
      return fr;
    }
    function rE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function eS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function tS(e, t, a) {
      var i = Gl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = Ab.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function nS(e, t, a) {
      var i = Li(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = cr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var E = f.next, L = s.baseState, D = null, j = null, H = null, $ = E;
        do {
          var _e = $.lane;
          if (Ro(Ks, _e)) {
            if (H !== null) {
              var Fe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null
              };
              H = H.next = Fe;
            }
            if ($.hasEagerState)
              L = $.eagerState;
            else {
              var Ot = $.action;
              L = e(L, Ot);
            }
          } else {
            var Ye = {
              lane: _e,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            };
            H === null ? (j = H = Ye, D = L) : H = H.next = Ye, en.lanes = ct(en.lanes, _e), Kp(_e);
          }
          $ = $.next;
        } while ($ !== null && $ !== E);
        H === null ? D = L : H.next = j, ze(L, i.memoizedState) || Hp(), i.memoizedState = L, i.baseState = D, i.baseQueue = H, o.lastRenderedState = L;
      }
      var Ct = o.interleaved;
      if (Ct !== null) {
        var z = Ct;
        do {
          var Y = z.lane;
          en.lanes = ct(en.lanes, Y), Kp(Y), z = z.next;
        } while (z !== Ct);
      } else
        f === null && (o.lanes = G);
      var A = o.dispatch;
      return [i.memoizedState, A];
    }
    function rS(e, t, a) {
      var i = Li(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var v = f.next, y = v;
        do {
          var E = y.action;
          p = e(p, E), y = y.next;
        } while (y !== v);
        ze(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function CD(e, t, a) {
    }
    function xD(e, t, a) {
    }
    function aS(e, t, a) {
      var i = en, o = Gl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          ze(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = Pm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(v, Ks) || aE(i, t, s);
      }
      o.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return o.queue = y, hm(lE.bind(null, i, y, e), [e]), i.flags |= hn, Np(ur | Ur, iE.bind(null, i, y, s, t), void 0, null), s;
    }
    function fm(e, t, a) {
      var i = en, o = Li(), s = t();
      if (!zf) {
        var f = t();
        ze(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = o.memoizedState, v = !ze(p, s);
      v && (o.memoizedState = s, Hp());
      var y = o.queue;
      if (Ap(lE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fr !== null && fr.memoizedState.tag & ur) {
        i.flags |= hn, Np(ur | Ur, iE.bind(null, i, y, s, t), void 0, null);
        var E = Pm();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ks(E, Ks) || aE(i, t, s);
      }
      return s;
    }
    function aE(e, t, a) {
      e.flags |= Ss;
      var i = {
        getSnapshot: t,
        value: a
      }, o = en.updateQueue;
      if (o === null)
        o = rE(), en.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function iE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, oE(t) && uE(e);
    }
    function lE(e, t, a) {
      var i = function() {
        oE(t) && uE(e);
      };
      return a(i);
    }
    function oE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ze(a, i);
      } catch {
        return !0;
      }
    }
    function uE(e) {
      var t = Ya(e, Ke);
      t !== null && hr(t, e, Ke, ln);
    }
    function dm(e) {
      var t = Gl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: eS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ub.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function iS(e) {
      return nS(eS);
    }
    function lS(e) {
      return rS(eS);
    }
    function Np(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = rE(), en.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function oS(e) {
      var t = Gl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function pm(e) {
      var t = Li();
      return t.memoizedState;
    }
    function zp(e, t, a, i) {
      var o = Gl(), s = i === void 0 ? null : i;
      en.flags |= e, o.memoizedState = Np(ur | t, a, void 0, s);
    }
    function vm(e, t, a, i) {
      var o = Li(), s = i === void 0 ? null : i, f = void 0;
      if (cr !== null) {
        var p = cr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Jg(s, v)) {
            o.memoizedState = Np(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, o.memoizedState = Np(ur | t, a, f, s);
    }
    function hm(e, t) {
      return (en.mode & Fa) !== Ge ? zp(vo | hn | Dl, Ur, e, t) : zp(hn | Dl, Ur, e, t);
    }
    function Ap(e, t) {
      return vm(hn, Ur, e, t);
    }
    function uS(e, t) {
      return zp(st, Wl, e, t);
    }
    function mm(e, t) {
      return vm(st, Wl, e, t);
    }
    function sS(e, t) {
      var a = st;
      return a |= ea, (en.mode & Fa) !== Ge && (a |= ta), zp(a, sr, e, t);
    }
    function ym(e, t) {
      return vm(st, sr, e, t);
    }
    function sE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function cS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = st;
      return o |= ea, (en.mode & Fa) !== Ge && (o |= ta), zp(o, sr, sE.bind(null, t, e), i);
    }
    function gm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return vm(st, sr, sE.bind(null, t, e), i);
    }
    function Mb(e, t) {
    }
    var Sm = Mb;
    function fS(e, t) {
      var a = Gl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Em(e, t) {
      var a = Li(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Jg(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function dS(e, t) {
      var a = Gl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Cm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Jg(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function pS(e) {
      var t = Gl();
      return t.memoizedState = e, e;
    }
    function cE(e) {
      var t = Li(), a = cr, i = a.memoizedState;
      return dE(t, i, e);
    }
    function fE(e) {
      var t = Li();
      if (cr === null)
        return t.memoizedState = e, e;
      var a = cr.memoizedState;
      return dE(t, a, e);
    }
    function dE(e, t, a) {
      var i = !Sy(Ks);
      if (i) {
        if (!ze(a, t)) {
          var o = Ud();
          en.lanes = ct(en.lanes, o), Kp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function Nb(e, t, a) {
      var i = Va();
      In(xr(i, or)), e(!0);
      var o = Op.transition;
      Op.transition = {};
      var s = Op.transition;
      Op.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Op.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && P("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function vS() {
      var e = dm(!1), t = e[0], a = e[1], i = Nb.bind(null, a), o = Gl();
      return o.memoizedState = i, [t, i];
    }
    function pE() {
      var e = iS(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function vE() {
      var e = lS(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var hE = !1;
    function zb() {
      return hE;
    }
    function hS() {
      var e = Gl(), t = Pm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var o = QR();
        i = ":" + a + "R" + o;
        var s = Mp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Db++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function xm() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function Ab(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Zu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mE(e))
        yE(t, o);
      else {
        var s = z0(e, t, o, i);
        if (s !== null) {
          var f = wa();
          hr(s, e, i, f), gE(s, t, i);
        }
      }
      SE(e, i);
    }
    function Ub(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Zu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (mE(e))
        yE(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Re.current, Re.current = al;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = y, ze(y, v)) {
                vb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Re.current = p;
            }
          }
        }
        var E = z0(e, t, o, i);
        if (E !== null) {
          var L = wa();
          hr(E, e, i, L), gE(E, t, i);
        }
      }
      SE(e, i);
    }
    function mE(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function yE(e, t) {
      Lp = cm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function gE(e, t, a) {
      if (Ad(a)) {
        var i = t.lanes;
        i = jd(i, e.pendingLanes);
        var o = ct(i, a);
        t.lanes = o, Ru(e, o);
      }
    }
    function SE(e, t, a) {
      Al(e, t);
    }
    var Tm = {
      readContext: nr,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: fe
    }, EE = null, CE = null, xE = null, TE = null, Ql = null, al = null, Rm = null;
    {
      var mS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      EE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", qt(), Af(t), fS(e, t);
        },
        useContext: function(e) {
          return X = "useContext", qt(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", qt(), Af(t), hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", qt(), Af(a), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", qt(), Af(t), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", qt(), Af(t), sS(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", qt(), Af(t);
          var a = Re.current;
          Re.current = Ql;
          try {
            return dS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", qt();
          var i = Re.current;
          Re.current = Ql;
          try {
            return tS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", qt(), oS(e);
        },
        useState: function(e) {
          X = "useState", qt();
          var t = Re.current;
          Re.current = Ql;
          try {
            return dm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", qt(), pS(e);
        },
        useTransition: function() {
          return X = "useTransition", qt(), vS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", qt(), aS(e, t, a);
        },
        useId: function() {
          return X = "useId", qt(), hS();
        },
        unstable_isNewReconciler: fe
      }, CE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), fS(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), sS(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = Ql;
          try {
            return dS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = Ql;
          try {
            return tS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), oS(e);
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = Ql;
          try {
            return dm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), pS(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), vS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), aS(e, t, a);
        },
        useId: function() {
          return X = "useId", ye(), hS();
        },
        unstable_isNewReconciler: fe
      }, xE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), Em(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), gm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), ym(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = al;
          try {
            return Cm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = al;
          try {
            return nS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), pm();
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = al;
          try {
            return iS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), Sm();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), cE(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), pE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), fm(e, t);
        },
        useId: function() {
          return X = "useId", ye(), xm();
        },
        unstable_isNewReconciler: fe
      }, TE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), Em(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), gm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), ym(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = Rm;
          try {
            return Cm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = Rm;
          try {
            return rS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), pm();
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = Rm;
          try {
            return lS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), Sm();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), fE(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), vE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), fm(e, t);
        },
        useId: function() {
          return X = "useId", ye(), xm();
        },
        unstable_isNewReconciler: fe
      }, Ql = {
        readContext: function(e) {
          return mS(), nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", it(), qt(), fS(e, t);
        },
        useContext: function(e) {
          return X = "useContext", it(), qt(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", it(), qt(), hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", it(), qt(), cS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", it(), qt(), uS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", it(), qt(), sS(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", it(), qt();
          var a = Re.current;
          Re.current = Ql;
          try {
            return dS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", it(), qt();
          var i = Re.current;
          Re.current = Ql;
          try {
            return tS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", it(), qt(), oS(e);
        },
        useState: function(e) {
          X = "useState", it(), qt();
          var t = Re.current;
          Re.current = Ql;
          try {
            return dm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", it(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", it(), qt(), pS(e);
        },
        useTransition: function() {
          return X = "useTransition", it(), qt(), vS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", it(), qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", it(), qt(), aS(e, t, a);
        },
        useId: function() {
          return X = "useId", it(), qt(), hS();
        },
        unstable_isNewReconciler: fe
      }, al = {
        readContext: function(e) {
          return mS(), nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", it(), ye(), Em(e, t);
        },
        useContext: function(e) {
          return X = "useContext", it(), ye(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", it(), ye(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", it(), ye(), gm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", it(), ye(), mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", it(), ye(), ym(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", it(), ye();
          var a = Re.current;
          Re.current = al;
          try {
            return Cm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", it(), ye();
          var i = Re.current;
          Re.current = al;
          try {
            return nS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", it(), ye(), pm();
        },
        useState: function(e) {
          X = "useState", it(), ye();
          var t = Re.current;
          Re.current = al;
          try {
            return iS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", it(), ye(), Sm();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", it(), ye(), cE(e);
        },
        useTransition: function() {
          return X = "useTransition", it(), ye(), pE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", it(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", it(), ye(), fm(e, t);
        },
        useId: function() {
          return X = "useId", it(), ye(), xm();
        },
        unstable_isNewReconciler: fe
      }, Rm = {
        readContext: function(e) {
          return mS(), nr(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", it(), ye(), Em(e, t);
        },
        useContext: function(e) {
          return X = "useContext", it(), ye(), nr(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", it(), ye(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", it(), ye(), gm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", it(), ye(), mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", it(), ye(), ym(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", it(), ye();
          var a = Re.current;
          Re.current = al;
          try {
            return Cm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", it(), ye();
          var i = Re.current;
          Re.current = al;
          try {
            return rS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", it(), ye(), pm();
        },
        useState: function(e) {
          X = "useState", it(), ye();
          var t = Re.current;
          Re.current = al;
          try {
            return lS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", it(), ye(), Sm();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", it(), ye(), fE(e);
        },
        useTransition: function() {
          return X = "useTransition", it(), ye(), vE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", it(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", it(), ye(), fm(e, t);
        },
        useId: function() {
          return X = "useId", it(), ye(), xm();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Qu = C.unstable_now, RE = 0, bm = -1, Up = -1, wm = -1, yS = !1, _m = !1;
    function bE() {
      return yS;
    }
    function jb() {
      _m = !0;
    }
    function Fb() {
      yS = !1, _m = !1;
    }
    function Hb() {
      yS = _m, _m = !1;
    }
    function wE() {
      return RE;
    }
    function _E() {
      RE = Qu();
    }
    function gS(e) {
      Up = Qu(), e.actualStartTime < 0 && (e.actualStartTime = Qu());
    }
    function kE(e) {
      Up = -1;
    }
    function km(e, t) {
      if (Up >= 0) {
        var a = Qu() - Up;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Up = -1;
      }
    }
    function ql(e) {
      if (bm >= 0) {
        var t = Qu() - bm;
        bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case be:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function SS(e) {
      if (wm >= 0) {
        var t = Qu() - wm;
        wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case be:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Xl() {
      bm = Qu();
    }
    function ES() {
      wm = Qu();
    }
    function CS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: tu(t),
        digest: null
      };
    }
    function xS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Vb(e, t) {
      return !0;
    }
    function TS(e, t) {
      try {
        var a = Vb(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === W)
            return;
          console.error(i);
        }
        var p = o ? at(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === I)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = at(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var L = v + `
` + f + `

` + ("" + y);
        console.error(L);
      } catch (D) {
        setTimeout(function() {
          throw D;
        });
      }
    }
    var Pb = typeof WeakMap == "function" ? WeakMap : Map;
    function DE(e, t, a) {
      var i = Vo(ln, a);
      i.tag = Tg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        N_(o), TS(e, t);
      }, i;
    }
    function RS(e, t, a) {
      var i = Vo(ln, a);
      i.tag = Tg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          VC(e), TS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        VC(e), TS(e, t), typeof o != "function" && L_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof o != "function" && (la(e.lanes, Ke) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", at(e) || "Unknown"));
      }), i;
    }
    function OE(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Pb(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = z_.bind(null, e, t, a);
        lr && Zp(e, a), t.then(s, s);
      }
    }
    function Bb(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function Ib(e, t) {
      var a = e.tag;
      if ((e.mode & mt) === Ge && (a === Q || a === oe || a === Le)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function LE(e) {
      var t = e;
      do {
        if (t.tag === Ee && _b(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function ME(e, t, a, i, o) {
      if ((e.mode & mt) === Ge) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= et, a.flags |= Es, a.flags &= ~(Cc | ga), a.tag === W) {
            var s = a.alternate;
            if (s === null)
              a.tag = bt;
            else {
              var f = Vo(ln, Ke);
              f.tag = Zh, $u(a, f, Ke);
            }
          }
          a.lanes = ct(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = o, e;
    }
    function $b(e, t, a, i, o) {
      if (a.flags |= ga, lr && Zp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ib(a), Ar() && a.mode & mt && x0();
        var f = LE(t);
        if (f !== null) {
          f.flags &= ~wn, ME(f, t, a, e, o), f.mode & mt && OE(e, s, o), Bb(f, e, s);
          return;
        } else {
          if (!xu(o)) {
            OE(e, s, o), r1();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & mt) {
        x0();
        var v = LE(t);
        if (v !== null) {
          (v.flags & Kn) === Ie && (v.flags |= wn), ME(v, t, a, e, o), mg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), T_(i);
      var y = t;
      do {
        switch (y.tag) {
          case I: {
            var E = i;
            y.flags |= Kn;
            var L = Bn(o);
            y.lanes = ct(y.lanes, L);
            var D = DE(y, E, L);
            wg(y, D);
            return;
          }
          case W:
            var j = i, H = y.type, $ = y.stateNode;
            if ((y.flags & et) === Ie && (typeof H.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && !LC($))) {
              y.flags |= Kn;
              var _e = Bn(o);
              y.lanes = ct(y.lanes, _e);
              var Ye = RS(y, j, _e);
              wg(y, Ye);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Yb() {
      return null;
    }
    var jp = S.ReactCurrentOwner, il = !1, bS, Fp, wS, _S, kS, Js, DS, Dm;
    bS = {}, Fp = {}, wS = {}, _S = {}, kS = {}, Js = !1, DS = {}, Dm = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = X0(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function Wb(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function NE(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, o), zl(t);
      {
        if (jp.current = t, Kr(!0), v = Uf(e, t, f, i, p, o), y = jf(), t.mode & xn) {
          Pn(!0);
          try {
            v = Uf(e, t, f, i, p, o), y = jf();
          } finally {
            Pn(!1);
          }
        }
        Kr(!1);
      }
      return ho(), e !== null && !il ? (tE(e, t, o), Po(e, t, o)) : (Ar() && y && cg(t), t.flags |= _l, Ra(e, t, v, o), t.child);
    }
    function zE(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (K_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Le, t.type = f, MS(t, s), AE(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          p && Ji(
            p,
            i,
            // Resolved props
            "prop",
            zt(s)
          );
        }
        var v = v1(a.type, null, i, t, t.mode, o);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, E = y.propTypes;
        E && Ji(
          E,
          i,
          // Resolved props
          "prop",
          zt(y)
        );
      }
      var L = e.child, D = FS(e, o);
      if (!D) {
        var j = L.memoizedProps, H = a.compare;
        if (H = H !== null ? H : Pe, H(j, i) && e.ref === t.ref)
          return Po(e, t, o);
      }
      t.flags |= _l;
      var $ = ac(L, i);
      return $.ref = t.ref, $.return = t, t.child = $, $;
    }
    function AE(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === $e) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ji(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Pe(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (il = !1, t.pendingProps = i = E, FS(e, o))
            (e.flags & Es) !== Ie && (il = !0);
          else
            return t.lanes = e.lanes, Po(e, t, o);
      }
      return OS(e, t, a, i, o);
    }
    function UE(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || w)
        if ((t.mode & mt) === Ge) {
          var f = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Bm(t, a);
        } else if (la(a, ia)) {
          var L = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var D = s !== null ? s.baseLanes : a;
          Bm(t, D);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = ct(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ia;
          var E = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, Bm(t, v), null;
        }
      else {
        var j;
        s !== null ? (j = ct(s.baseLanes, a), t.memoizedState = null) : j = a, Bm(t, j);
      }
      return Ra(e, t, o, a), t.child;
    }
    function Gb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Qb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function qb(e, t, a) {
      {
        t.flags |= st;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ra(e, t, s, a), t.child;
    }
    function jE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Jr, t.flags |= Ed);
    }
    function OS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = Rf(t, p);
      }
      var v, y;
      Df(t, o), zl(t);
      {
        if (jp.current = t, Kr(!0), v = Uf(e, t, a, i, f, o), y = jf(), t.mode & xn) {
          Pn(!0);
          try {
            v = Uf(e, t, a, i, f, o), y = jf();
          } finally {
            Pn(!1);
          }
        }
        Kr(!1);
      }
      return ho(), e !== null && !il ? (tE(e, t, o), Po(e, t, o)) : (Ar() && y && cg(t), t.flags |= _l, Ra(e, t, v, o), t.child);
    }
    function FE(e, t, a, i, o) {
      {
        switch (dk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), E = Bn(o);
            t.lanes = ct(t.lanes, E);
            var L = RS(t, Zs(y, t), E);
            wg(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var D = a.propTypes;
          D && Ji(
            D,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var j;
      Yl(a) ? (j = !0, Ph(t)) : j = !1, Df(t, o);
      var H = t.stateNode, $;
      H === null ? (Lm(e, t), Y0(t, a, i), Fg(t, a, i, o), $ = !0) : e === null ? $ = Cb(t, a, i, o) : $ = xb(e, t, a, i, o);
      var _e = LS(e, t, a, $, j, o);
      {
        var Ye = t.stateNode;
        $ && Ye.props !== i && (Js || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", at(t) || "a component"), Js = !0);
      }
      return _e;
    }
    function LS(e, t, a, i, o, s) {
      jE(e, t);
      var f = (t.flags & et) !== Ie;
      if (!i && !f)
        return o && g0(t, a, !1), Po(e, t, s);
      var p = t.stateNode;
      jp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, kE();
      else {
        zl(t);
        {
          if (Kr(!0), v = p.render(), t.mode & xn) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          Kr(!1);
        }
        ho();
      }
      return t.flags |= _l, e !== null && f ? Wb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, o && g0(t, a, !0), t.child;
    }
    function HE(e) {
      var t = e.stateNode;
      t.pendingContext ? m0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && m0(e, t.context, !1), $g(e, t.containerInfo);
    }
    function Xb(e, t, a) {
      if (HE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      j0(e, t), nm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & wn) {
          var E = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return VE(e, t, p, a, E);
        } else if (p !== s) {
          var L = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return VE(e, t, p, a, L);
        } else {
          eb(t);
          var D = X0(t, null, p, a);
          t.child = D;
          for (var j = D; j; )
            j.flags = j.flags & ~cn | Aa, j = j.sibling;
        }
      } else {
        if (_f(), p === s)
          return Po(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function VE(e, t, a, i, o) {
      return _f(), mg(o), t.flags |= wn, Ra(e, t, a, i), t.child;
    }
    function Kb(e, t, a) {
      Z0(t), e === null && hg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = Xy(i, o);
      return p ? f = null : s !== null && Xy(i, s) && (t.flags |= Qt), jE(e, t), Ra(e, t, f, a), t.child;
    }
    function Zb(e, t) {
      return e === null && hg(t), null;
    }
    function Jb(e, t, a, i) {
      Lm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Z_(v), E = nl(v, o), L;
      switch (y) {
        case Q:
          return MS(t, v), t.type = v = Yf(v), L = OS(null, t, v, E, i), L;
        case W:
          return t.type = v = u1(v), L = FE(null, t, v, E, i), L;
        case oe:
          return t.type = v = s1(v), L = NE(null, t, v, E, i), L;
        case De: {
          if (t.type !== t.elementType) {
            var D = v.propTypes;
            D && Ji(
              D,
              E,
              // Resolved for outer only
              "prop",
              zt(v)
            );
          }
          return L = zE(
            null,
            t,
            v,
            nl(v.type, E),
            // The inner type can have defaults too
            i
          ), L;
        }
      }
      var j = "";
      throw v !== null && typeof v == "object" && v.$$typeof === $e && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function ew(e, t, a, i, o) {
      Lm(e, t), t.tag = W;
      var s;
      return Yl(a) ? (s = !0, Ph(t)) : s = !1, Df(t, o), Y0(t, a, i), Fg(t, a, i, o), LS(null, t, a, !0, s, o);
    }
    function tw(e, t, a, i) {
      Lm(e, t);
      var o = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = Rf(t, f);
      }
      Df(t, i);
      var p, v;
      zl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = zt(a) || "Unknown";
          bS[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), bS[y] = !0);
        }
        t.mode & xn && tl.recordLegacyContextWarning(t, null), Kr(!0), jp.current = t, p = Uf(null, t, a, o, s, i), v = jf(), Kr(!1);
      }
      if (ho(), t.flags |= _l, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = zt(a) || "Unknown";
        Fp[E] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Fp[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var L = zt(a) || "Unknown";
          Fp[L] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Fp[L] = !0);
        }
        t.tag = W, t.memoizedState = null, t.updateQueue = null;
        var D = !1;
        return Yl(a) ? (D = !0, Ph(t)) : D = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, bg(t), $0(t, p), Fg(t, a, o, i), LS(null, t, a, !0, D, i);
      } else {
        if (t.tag = Q, t.mode & xn) {
          Pn(!0);
          try {
            p = Uf(null, t, a, o, s, i), v = jf();
          } finally {
            Pn(!1);
          }
        }
        return Ar() && v && cg(t), Ra(null, t, p, i), MS(t, a), t.child;
      }
    }
    function MS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), kS[o] || (kS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = zt(t) || "Unknown";
          _S[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), _S[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = zt(t) || "Unknown";
          wS[p] || (g("%s: Function components do not support contextType.", p), wS[p] = !0);
        }
      }
    }
    var NS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function zS(e) {
      return {
        baseLanes: e,
        cachePool: Yb(),
        transitions: null
      };
    }
    function nw(e, t) {
      var a = null;
      return {
        baseLanes: ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function rw(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return Gg(e, Dp);
    }
    function aw(e, t) {
      return Tu(e.childLanes, t);
    }
    function PE(e, t, a) {
      var i = t.pendingProps;
      pk(t) && (t.flags |= et);
      var o = rl.current, s = !1, f = (t.flags & et) !== Ie;
      if (f || rw(o, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (o = wb(o, eE)), o = Mf(o), Wu(t, o), e === null) {
        hg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return sw(t, v);
        }
        var y = i.children, E = i.fallback;
        if (s) {
          var L = iw(t, y, E, a), D = t.child;
          return D.memoizedState = zS(a), t.memoizedState = NS, L;
        } else
          return AS(t, y);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var H = j.dehydrated;
          if (H !== null)
            return cw(e, t, f, i, H, j, a);
        }
        if (s) {
          var $ = i.fallback, _e = i.children, Ye = ow(e, t, _e, $, a), Fe = t.child, Ot = e.child.memoizedState;
          return Fe.memoizedState = Ot === null ? zS(a) : nw(Ot, a), Fe.childLanes = aw(e, a), t.memoizedState = NS, Ye;
        } else {
          var Ct = i.children, z = lw(e, t, Ct, a);
          return t.memoizedState = null, z;
        }
      }
    }
    function AS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = US(o, i);
      return s.return = e, e.child = s, s;
    }
    function iw(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & mt) === Ge && s !== null ? (p = s, p.childLanes = G, p.pendingProps = f, e.mode & qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = es(a, o, i, null)) : (p = US(f, o), v = es(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function US(e, t, a) {
      return BC(e, t, G, null);
    }
    function BE(e, t) {
      return ac(e, t);
    }
    function lw(e, t, a, i) {
      var o = e.child, s = o.sibling, f = BE(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & mt) === Ge && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Bt) : p.push(s);
      }
      return t.child = f, f;
    }
    function ow(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & mt) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        y = E, y.childLanes = G, y.pendingProps = v, t.mode & qe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = BE(f, v), y.subtreeFlags = f.subtreeFlags & ir;
      var L;
      return p !== null ? L = ac(p, i) : (L = es(i, s, o, null), L.flags |= cn), L.return = t, y.return = t, y.sibling = L, t.child = y, L;
    }
    function Om(e, t, a, i) {
      i !== null && mg(i), Of(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = AS(t, s);
      return f.flags |= cn, t.memoizedState = null, f;
    }
    function uw(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = US(f, s), v = es(i, s, o, null);
      return v.flags |= cn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & mt) !== Ge && Of(t, e.child, null, o), v;
    }
    function sw(e, t, a) {
      return (e.mode & mt) === Ge ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : eg(t) ? e.lanes = go : e.lanes = ia, null;
    }
    function cw(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & wn) {
          t.flags &= ~wn;
          var z = xS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Om(e, t, f, z);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var Y = i.children, A = i.fallback, le = uw(e, t, Y, A, f), ke = t.child;
          return ke.memoizedState = zS(f), t.memoizedState = NS, le;
        }
      else {
        if (ZR(), (t.mode & mt) === Ge)
          return Om(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (eg(o)) {
          var p, v, y;
          {
            var E = hR(o);
            p = E.digest, v = E.message, y = E.stack;
          }
          var L;
          v ? L = new Error(v) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var D = xS(L, p, y);
          return Om(e, t, f, D);
        }
        var j = la(f, e.childLanes);
        if (il || j) {
          var H = Pm();
          if (H !== null) {
            var $ = Cy(H, f);
            if ($ !== kt && $ !== s.retryLane) {
              s.retryLane = $;
              var _e = ln;
              Ya(e, $), hr(H, e, $, _e);
            }
          }
          r1();
          var Ye = xS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Om(e, t, f, Ye);
        } else if (c0(o)) {
          t.flags |= et, t.child = e.child;
          var Fe = A_.bind(null, e);
          return mR(o, Fe), null;
        } else {
          tb(t, o, s.treeContext);
          var Ot = i.children, Ct = AS(t, Ot);
          return Ct.flags |= Aa, Ct;
        }
      }
    }
    function IE(e, t, a) {
      e.lanes = ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ct(i.lanes, t)), Cg(e.return, t, a);
    }
    function fw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var o = i.memoizedState;
          o !== null && IE(i, a, e);
        } else if (i.tag === xt)
          IE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function dw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && sm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function pw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !DS[e])
        if (DS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function vw(e, t) {
      e !== void 0 && !Dm[e] && (e !== "collapsed" && e !== "hidden" ? (Dm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Dm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $E(e, t) {
      {
        var a = Tt(e), i = !a && typeof ei(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function hw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$E(e[a], a))
              return;
        } else {
          var i = ei(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!$E(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function jS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function YE(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      pw(o), vw(s, o), hw(f, o), Ra(e, t, f, a);
      var p = rl.current, v = Gg(p, Dp);
      if (v)
        p = Qg(p, Dp), t.flags |= et;
      else {
        var y = e !== null && (e.flags & et) !== Ie;
        y && fw(t, t.child, a), p = Mf(p);
      }
      if (Wu(t, p), (t.mode & mt) === Ge)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var E = dw(t.child), L;
            E === null ? (L = t.child, t.child = null) : (L = E.sibling, E.sibling = null), jS(
              t,
              !1,
              // isBackwards
              L,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var D = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var H = j.alternate;
              if (H !== null && sm(H) === null) {
                t.child = j;
                break;
              }
              var $ = j.sibling;
              j.sibling = D, D = j, j = $;
            }
            jS(
              t,
              !0,
              // isBackwards
              D,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            jS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function mw(e, t, a) {
      $g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var WE = !1;
    function yw(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || WE || (WE = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ji(v, s, "prop", "Context.Provider");
      }
      if (N0(t, o, p), f !== null) {
        var y = f.value;
        if (ze(y, p)) {
          if (f.children === s.children && !Hh())
            return Po(e, t, a);
        } else
          fb(t, o, a);
      }
      var E = s.children;
      return Ra(e, t, E, a), t.child;
    }
    var GE = !1;
    function gw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (GE || (GE = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = nr(i);
      zl(t);
      var p;
      return jp.current = t, Kr(!0), p = s(f), Kr(!1), ho(), t.flags |= _l, Ra(e, t, p, a), t.child;
    }
    function Hp() {
      il = !0;
    }
    function Lm(e, t) {
      (t.mode & mt) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function Po(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), kE(), Kp(t.lanes), la(a, t.childLanes) ? (Tb(e, t), t.child) : null;
    }
    function Sw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Bt) : s.push(e), a.flags |= cn, a;
      }
    }
    function FS(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function Ew(e, t, a) {
      switch (t.tag) {
        case I:
          HE(t), t.stateNode, _f();
          break;
        case q:
          Z0(t);
          break;
        case W: {
          var i = t.type;
          Yl(i) && Ph(t);
          break;
        }
        case Z:
          $g(t, t.stateNode.containerInfo);
          break;
        case pe: {
          var o = t.memoizedProps.value, s = t.type._context;
          N0(t, s, o);
          break;
        }
        case be:
          {
            var f = la(a, t.childLanes);
            f && (t.flags |= st);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Wu(t, Mf(rl.current)), t.flags |= et, null;
            var y = t.child, E = y.childLanes;
            if (la(a, E))
              return PE(e, t, a);
            Wu(t, Mf(rl.current));
            var L = Po(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            Wu(t, Mf(rl.current));
          break;
        }
        case xt: {
          var D = (e.flags & et) !== Ie, j = la(a, t.childLanes);
          if (D) {
            if (j)
              return YE(e, t, a);
            t.flags |= et;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), Wu(t, rl.current), j)
            break;
          return null;
        }
        case Be:
        case nt:
          return t.lanes = G, UE(e, t, a);
      }
      return Po(e, t, a);
    }
    function QE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Sw(e, t, v1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Hh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = FS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === Ie)
            return il = !1, Ew(e, t, a);
          (e.flags & Es) !== Ie ? il = !0 : il = !1;
        }
      } else if (il = !1, Ar() && WR(t)) {
        var f = t.index, p = GR();
        C0(t, p, f);
      }
      switch (t.lanes = G, t.tag) {
        case se:
          return tw(e, t, t.type, a);
        case gt: {
          var v = t.elementType;
          return Jb(e, t, v, a);
        }
        case Q: {
          var y = t.type, E = t.pendingProps, L = t.elementType === y ? E : nl(y, E);
          return OS(e, t, y, L, a);
        }
        case W: {
          var D = t.type, j = t.pendingProps, H = t.elementType === D ? j : nl(D, j);
          return FE(e, t, D, H, a);
        }
        case I:
          return Xb(e, t, a);
        case q:
          return Kb(e, t, a);
        case de:
          return Zb(e, t);
        case Ee:
          return PE(e, t, a);
        case Z:
          return mw(e, t, a);
        case oe: {
          var $ = t.type, _e = t.pendingProps, Ye = t.elementType === $ ? _e : nl($, _e);
          return NE(e, t, $, Ye, a);
        }
        case ee:
          return Gb(e, t, a);
        case ae:
          return Qb(e, t, a);
        case be:
          return qb(e, t, a);
        case pe:
          return yw(e, t, a);
        case Xe:
          return gw(e, t, a);
        case De: {
          var Fe = t.type, Ot = t.pendingProps, Ct = nl(Fe, Ot);
          if (t.type !== t.elementType) {
            var z = Fe.propTypes;
            z && Ji(
              z,
              Ct,
              // Resolved for outer only
              "prop",
              zt(Fe)
            );
          }
          return Ct = nl(Fe.type, Ct), zE(e, t, Fe, Ct, a);
        }
        case Le:
          return AE(e, t, t.type, t.pendingProps, a);
        case bt: {
          var Y = t.type, A = t.pendingProps, le = t.elementType === Y ? A : nl(Y, A);
          return ew(e, t, Y, le, a);
        }
        case xt:
          return YE(e, t, a);
        case Jt:
          break;
        case Be:
          return UE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= st;
    }
    function qE(e) {
      e.flags |= Jr, e.flags |= Ed;
    }
    var XE, HS, KE, ZE;
    XE = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === q || o.tag === de)
          IT(e, o.stateNode);
        else if (o.tag !== Z) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, HS = function(e, t) {
    }, KE = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Yg(), v = YT(f, a, s, i, o, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, ZE = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function Vp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i = Ie;
      if (t) {
        if ((e.mode & qe) !== Ge) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = ct(a, ct(y.lanes, y.childLanes)), i |= y.subtreeFlags & ir, i |= y.flags & ir, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var E = e.child; E !== null; )
            a = ct(a, ct(E.lanes, E.childLanes)), i |= E.subtreeFlags & ir, i |= E.flags & ir, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qe) !== Ge) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ct(a, ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ct(a, ct(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Cw(e, t, a) {
      if (lb() && (t.mode & mt) !== Ge && (t.flags & et) === Ie)
        return k0(t), _f(), t.flags |= wn | ga | Kn, !1;
      var i = Wh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ab(t), jr(t), (t.mode & qe) !== Ge) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & et) === Ie && (t.memoizedState = null), t.flags |= st, jr(t), (t.mode & qe) !== Ge) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return D0(), !0;
    }
    function JE(e, t, a) {
      var i = t.pendingProps;
      switch (fg(t), t.tag) {
        case se:
        case gt:
        case Le:
        case Q:
        case oe:
        case ee:
        case ae:
        case be:
        case Xe:
        case De:
          return jr(t), null;
        case W: {
          var o = t.type;
          return Yl(o) && Vh(t), jr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (Lf(t), og(t), Xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Wh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wn) !== Ie) && (t.flags |= za, D0());
            }
          }
          return HS(e, t), jr(t), null;
        }
        case q: {
          Wg(t);
          var v = K0(), y = t.type;
          if (e !== null && t.stateNode != null)
            KE(e, t, y, i, v), e.ref !== t.ref && qE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var E = Yg(), L = Wh(t);
            if (L)
              nb(t, v, E) && Ff(t);
            else {
              var D = BT(y, i, v, E, t);
              XE(D, t, !1, !1), t.stateNode = D, $T(D, y, i, v) && Ff(t);
            }
            t.ref !== null && qE(t);
          }
          return jr(t), null;
        }
        case de: {
          var j = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            ZE(e, t, H, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var $ = K0(), _e = Yg(), Ye = Wh(t);
            Ye ? rb(t) && Ff(t) : t.stateNode = WT(j, $, _e, t);
          }
          return jr(t), null;
        }
        case Ee: {
          Nf(t);
          var Fe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = Cw(e, t, Fe);
            if (!Ot)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & et) !== Ie)
            return t.lanes = a, (t.mode & qe) !== Ge && CS(t), t;
          var Ct = Fe !== null, z = e !== null && e.memoizedState !== null;
          if (Ct !== z && Ct) {
            var Y = t.child;
            if (Y.flags |= kl, (t.mode & mt) !== Ge) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !J);
              A || Gg(rl.current, eE) ? x_() : r1();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= st), jr(t), (t.mode & qe) !== Ge && Ct) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case Z:
          return Lf(t), HS(e, t), e === null && HR(t.stateNode.containerInfo), jr(t), null;
        case pe:
          var xe = t.type._context;
          return Eg(xe, t), jr(t), null;
        case bt: {
          var Je = t.type;
          return Yl(Je) && Vh(t), jr(t), null;
        }
        case xt: {
          Nf(t);
          var lt = t.memoizedState;
          if (lt === null)
            return jr(t), null;
          var tn = (t.flags & et) !== Ie, Ht = lt.rendering;
          if (Ht === null)
            if (tn)
              Vp(lt, !1);
            else {
              var Wn = R_() && (e === null || (e.flags & et) === Ie);
              if (!Wn)
                for (var Vt = t.child; Vt !== null; ) {
                  var Fn = sm(Vt);
                  if (Fn !== null) {
                    tn = !0, t.flags |= et, Vp(lt, !1);
                    var ca = Fn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= st), t.subtreeFlags = Ie, Rb(t, a), Wu(t, Qg(rl.current, Dp)), t.child;
                  }
                  Vt = Vt.sibling;
                }
              lt.tail !== null && Cn() > EC() && (t.flags |= et, tn = !0, Vp(lt, !1), t.lanes = Nd);
            }
          else {
            if (!tn) {
              var Br = sm(Ht);
              if (Br !== null) {
                t.flags |= et, tn = !0;
                var fi = Br.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= st), Vp(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !Ht.alternate && !Ar())
                  return jr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Cn() * 2 - lt.renderingStartTime > EC() && a !== ia && (t.flags |= et, tn = !0, Vp(lt, !1), t.lanes = Nd);
            }
            if (lt.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var _a = lt.last;
              _a !== null ? _a.sibling = Ht : t.child = Ht, lt.last = Ht;
            }
          }
          if (lt.tail !== null) {
            var ka = lt.tail;
            lt.rendering = ka, lt.tail = ka.sibling, lt.renderingStartTime = Cn(), ka.sibling = null;
            var fa = rl.current;
            return tn ? fa = Qg(fa, Dp) : fa = Mf(fa), Wu(t, fa), ka;
          }
          return jr(t), null;
        }
        case Jt:
          break;
        case Be:
        case nt: {
          n1(t);
          var Wo = t.memoizedState, Wf = Wo !== null;
          if (e !== null) {
            var nv = e.memoizedState, Jl = nv !== null;
            Jl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !w && (t.flags |= kl);
          }
          return !Wf || (t.mode & mt) === Ge ? jr(t) : la(Zl, ia) && (jr(t), t.subtreeFlags & (cn | st) && (t.flags |= kl)), null;
        }
        case jt:
          return null;
        case yt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      switch (fg(t), t.tag) {
        case W: {
          var i = t.type;
          Yl(i) && Vh(t);
          var o = t.flags;
          return o & Kn ? (t.flags = o & ~Kn | et, (t.mode & qe) !== Ge && CS(t), t) : null;
        }
        case I: {
          t.stateNode, Lf(t), og(t), Xg();
          var s = t.flags;
          return (s & Kn) !== Ie && (s & et) === Ie ? (t.flags = s & ~Kn | et, t) : null;
        }
        case q:
          return Wg(t), null;
        case Ee: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | et, (t.mode & qe) !== Ge && CS(t), t) : null;
        }
        case xt:
          return Nf(t), null;
        case Z:
          return Lf(t), null;
        case pe:
          var v = t.type._context;
          return Eg(v, t), null;
        case Be:
        case nt:
          return n1(t), null;
        case jt:
          return null;
        default:
          return null;
      }
    }
    function eC(e, t, a) {
      switch (fg(t), t.tag) {
        case W: {
          var i = t.type.childContextTypes;
          i != null && Vh(t);
          break;
        }
        case I: {
          t.stateNode, Lf(t), og(t), Xg();
          break;
        }
        case q: {
          Wg(t);
          break;
        }
        case Z:
          Lf(t);
          break;
        case Ee:
          Nf(t);
          break;
        case xt:
          Nf(t);
          break;
        case pe:
          var o = t.type._context;
          Eg(o, t);
          break;
        case Be:
        case nt:
          n1(t);
          break;
      }
    }
    var tC = null;
    tC = /* @__PURE__ */ new Set();
    var Mm = !1, Fr = !1, Tw = typeof WeakSet == "function" ? WeakSet : Set, Ae = null, Hf = null, Vf = null;
    function Rw(e) {
      po(null, function() {
        throw e;
      }), gd();
    }
    var bw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qe)
        try {
          Xl(), t.componentWillUnmount();
        } finally {
          ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function nC(e, t) {
      try {
        qu(sr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function VS(e, t, a) {
      try {
        bw(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function ww(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function rC(e, t) {
      try {
        iC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ft && St && e.mode & qe)
              try {
                Xl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (o) {
            vn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          a.current = null;
    }
    function Nm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var aC = !1;
    function _w(e, t) {
      VT(e.containerInfo), Ae = t, kw();
      var a = aC;
      return aC = !1, a;
    }
    function kw() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        (e.subtreeFlags & hu) !== Ie && t !== null ? (t.return = e, Ae = t) : Dw();
      }
    }
    function Dw() {
      for (; Ae !== null; ) {
        var e = Ae;
        Gt(e);
        try {
          Ow(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function Ow(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Ie) {
        switch (Gt(e), e.tag) {
          case Q:
          case oe:
          case Le:
            break;
          case W: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), o);
              {
                var p = tC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", at(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case I: {
            {
              var v = e.stateNode;
              fR(v.containerInfo);
            }
            break;
          }
          case q:
          case de:
          case Z:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function ll(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ur) !== Wa ? Dc(t) : (e & sr) !== Wa && Oc(t), (e & Wl) !== Wa && Jp(!0), Nm(t, a, p), (e & Wl) !== Wa && Jp(!1), (e & Ur) !== Wa ? Yv() : (e & sr) !== Wa && mu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Ur) !== Wa ? $v(t) : (e & sr) !== Wa && Wv(t);
            var f = s.create;
            (e & Wl) !== Wa && Jp(!0), s.destroy = f(), (e & Wl) !== Wa && Jp(!1), (e & Ur) !== Wa ? Od() : (e & sr) !== Wa && Gv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & sr) !== Ie ? v = "useLayoutEffect" : (s.tag & Wl) !== Ie ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function Lw(e, t) {
      if ((t.flags & st) !== Ie)
        switch (t.tag) {
          case be: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = wE(), p = t.alternate === null ? "mount" : "update";
            bE() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case I:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case be:
                    var E = v.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Mw(e, t, a, i) {
      if ((a.flags & Er) !== Ie)
        switch (a.tag) {
          case Q:
          case oe:
          case Le: {
            if (!Fr)
              if (a.mode & qe)
                try {
                  Xl(), qu(sr | ur, a);
                } finally {
                  ql(a);
                }
              else
                qu(sr | ur, a);
            break;
          }
          case W: {
            var o = a.stateNode;
            if (a.flags & st && !Fr)
              if (t === null)
                if (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & qe)
                  try {
                    Xl(), o.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), a.mode & qe)
                  try {
                    Xl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(a) || "instance")), H0(a, p, o));
            break;
          }
          case I: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    y = a.child.stateNode;
                    break;
                  case W:
                    y = a.child.stateNode;
                    break;
                }
              H0(a, v, y);
            }
            break;
          }
          case q: {
            var E = a.stateNode;
            if (t === null && a.flags & st) {
              var L = a.type, D = a.memoizedProps;
              KT(E, L, D);
            }
            break;
          }
          case de:
            break;
          case Z:
            break;
          case be: {
            {
              var j = a.memoizedProps, H = j.onCommit, $ = j.onRender, _e = a.stateNode.effectDuration, Ye = wE(), Fe = t === null ? "mount" : "update";
              bE() && (Fe = "nested-update"), typeof $ == "function" && $(a.memoizedProps.id, Fe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ye);
              {
                typeof H == "function" && H(a.memoizedProps.id, Fe, _e, Ye), D_(a);
                var Ot = a.return;
                e:
                  for (; Ot !== null; ) {
                    switch (Ot.tag) {
                      case I:
                        var Ct = Ot.stateNode;
                        Ct.effectDuration += _e;
                        break e;
                      case be:
                        var z = Ot.stateNode;
                        z.effectDuration += _e;
                        break e;
                    }
                    Ot = Ot.return;
                  }
              }
            }
            break;
          }
          case Ee: {
            Vw(e, a);
            break;
          }
          case xt:
          case bt:
          case Jt:
          case Be:
          case nt:
          case yt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Fr || a.flags & Jr && iC(a);
    }
    function Nw(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          if (e.mode & qe)
            try {
              Xl(), nC(e, e.return);
            } finally {
              ql(e);
            }
          else
            nC(e, e.return);
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ww(e, e.return, t), rC(e, e.return);
          break;
        }
        case q: {
          rC(e, e.return);
          break;
        }
      }
    }
    function zw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? oR(o) : sR(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === de) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? uR(s) : cR(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === nt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function iC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & qe)
            try {
              Xl(), o = t(i);
            } finally {
              ql(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", at(e)), t.current = i;
      }
    }
    function Aw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function lC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, lC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && BR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Uw(e) {
      for (var t = e.return; t !== null; ) {
        if (oC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function oC(e) {
      return e.tag === q || e.tag === I || e.tag === Z;
    }
    function uC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || oC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== de && t.tag !== Mt; ) {
            if (t.flags & cn || t.child === null || t.tag === Z)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & cn))
            return t.stateNode;
        }
    }
    function jw(e) {
      var t = Uw(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Qt && (s0(a), t.flags &= ~Qt);
          var i = uC(e);
          BS(e, i, a);
          break;
        }
        case I:
        case Z: {
          var o = t.stateNode.containerInfo, s = uC(e);
          PS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function PS(e, t, a) {
      var i = e.tag, o = i === q || i === de;
      if (o) {
        var s = e.stateNode;
        t ? rR(a, s, t) : tR(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          PS(f, t, a);
          for (var p = f.sibling; p !== null; )
            PS(p, t, a), p = p.sibling;
        }
      }
    }
    function BS(e, t, a) {
      var i = e.tag, o = i === q || i === de;
      if (o) {
        var s = e.stateNode;
        t ? nR(a, s, t) : eR(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          BS(f, t, a);
          for (var p = f.sibling; p !== null; )
            BS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, ol = !1;
    function Fw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case q: {
                Hr = i.stateNode, ol = !1;
                break e;
              }
              case I: {
                Hr = i.stateNode.containerInfo, ol = !0;
                break e;
              }
              case Z: {
                Hr = i.stateNode.containerInfo, ol = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        sC(e, t, a), Hr = null, ol = !1;
      }
      Aw(a);
    }
    function Xu(e, t, a) {
      for (var i = a.child; i !== null; )
        sC(e, t, i), i = i.sibling;
    }
    function sC(e, t, a) {
      switch (kd(a), a.tag) {
        case q:
          Fr || Pf(a, t);
        case de: {
          {
            var i = Hr, o = ol;
            Hr = null, Xu(e, t, a), Hr = i, ol = o, Hr !== null && (ol ? iR(Hr, a.stateNode) : aR(Hr, a.stateNode));
          }
          return;
        }
        case Mt: {
          Hr !== null && (ol ? lR(Hr, a.stateNode) : Jy(Hr, a.stateNode));
          return;
        }
        case Z: {
          {
            var s = Hr, f = ol;
            Hr = a.stateNode.containerInfo, ol = !0, Xu(e, t, a), Hr = s, ol = f;
          }
          return;
        }
        case Q:
        case oe:
        case De:
        case Le: {
          if (!Fr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, E = y;
                do {
                  var L = E, D = L.destroy, j = L.tag;
                  D !== void 0 && ((j & Wl) !== Wa ? Nm(a, t, D) : (j & sr) !== Wa && (Oc(a), a.mode & qe ? (Xl(), Nm(a, t, D), ql(a)) : Nm(a, t, D), mu())), E = E.next;
                } while (E !== y);
              }
            }
          }
          Xu(e, t, a);
          return;
        }
        case W: {
          if (!Fr) {
            Pf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && VS(a, t, H);
          }
          Xu(e, t, a);
          return;
        }
        case Jt: {
          Xu(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & mt
          ) {
            var $ = Fr;
            Fr = $ || a.memoizedState !== null, Xu(e, t, a), Fr = $;
          } else
            Xu(e, t, a);
          break;
        }
        default: {
          Xu(e, t, a);
          return;
        }
      }
    }
    function Hw(e) {
      e.memoizedState;
    }
    function Vw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && bR(s);
          }
        }
      }
    }
    function cC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Tw()), t.forEach(function(i) {
          var o = U_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), lr)
              if (Hf !== null && Vf !== null)
                Zp(Vf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function Pw(e, t, a) {
      Hf = a, Vf = e, Gt(t), fC(t, e), Gt(t), Hf = null, Vf = null;
    }
    function ul(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            Fw(e, t, s);
          } catch (v) {
            vn(s, t, v);
          }
        }
      var f = oc();
      if (t.subtreeFlags & na)
        for (var p = t.child; p !== null; )
          Gt(p), fC(p, e), p = p.sibling;
      Gt(f);
    }
    function fC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case Q:
        case oe:
        case De:
        case Le: {
          if (ul(t, e), Kl(e), o & st) {
            try {
              ll(Wl | ur, e, e.return), qu(Wl | ur, e);
            } catch (Je) {
              vn(e, e.return, Je);
            }
            if (e.mode & qe) {
              try {
                Xl(), ll(sr | ur, e, e.return);
              } catch (Je) {
                vn(e, e.return, Je);
              }
              ql(e);
            } else
              try {
                ll(sr | ur, e, e.return);
              } catch (Je) {
                vn(e, e.return, Je);
              }
          }
          return;
        }
        case W: {
          ul(t, e), Kl(e), o & Jr && i !== null && Pf(i, i.return);
          return;
        }
        case q: {
          ul(t, e), Kl(e), o & Jr && i !== null && Pf(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                s0(s);
              } catch (Je) {
                vn(e, e.return, Je);
              }
            }
            if (o & st) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    ZT(f, E, y, v, p, e);
                  } catch (Je) {
                    vn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case de: {
          if (ul(t, e), Kl(e), o & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, D = e.memoizedProps, j = i !== null ? i.memoizedProps : D;
            try {
              JT(L, j, D);
            } catch (Je) {
              vn(e, e.return, Je);
            }
          }
          return;
        }
        case I: {
          if (ul(t, e), Kl(e), o & st && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                RR(t.containerInfo);
              } catch (Je) {
                vn(e, e.return, Je);
              }
          }
          return;
        }
        case Z: {
          ul(t, e), Kl(e);
          return;
        }
        case Ee: {
          ul(t, e), Kl(e);
          var $ = e.child;
          if ($.flags & kl) {
            var _e = $.stateNode, Ye = $.memoizedState, Fe = Ye !== null;
            if (_e.isHidden = Fe, Fe) {
              var Ot = $.alternate !== null && $.alternate.memoizedState !== null;
              Ot || C_();
            }
          }
          if (o & st) {
            try {
              Hw(e);
            } catch (Je) {
              vn(e, e.return, Je);
            }
            cC(e);
          }
          return;
        }
        case Be: {
          var Ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & mt
          ) {
            var z = Fr;
            Fr = z || Ct, ul(t, e), Fr = z;
          } else
            ul(t, e);
          if (Kl(e), o & kl) {
            var Y = e.stateNode, A = e.memoizedState, le = A !== null, ke = e;
            if (Y.isHidden = le, le && !Ct && (ke.mode & mt) !== Ge) {
              Ae = ke;
              for (var xe = ke.child; xe !== null; )
                Ae = xe, Iw(xe), xe = xe.sibling;
            }
            zw(ke, le);
          }
          return;
        }
        case xt: {
          ul(t, e), Kl(e), o & st && cC(e);
          return;
        }
        case Jt:
          return;
        default: {
          ul(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          jw(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~cn;
      }
      t & Aa && (e.flags &= ~Aa);
    }
    function Bw(e, t, a) {
      Hf = a, Vf = t, Ae = e, dC(e, t, a), Hf = null, Vf = null;
    }
    function dC(e, t, a) {
      for (var i = (e.mode & mt) !== Ge; Ae !== null; ) {
        var o = Ae, s = o.child;
        if (o.tag === Be && i) {
          var f = o.memoizedState !== null, p = f || Mm;
          if (p) {
            IS(e, t, a);
            continue;
          } else {
            var v = o.alternate, y = v !== null && v.memoizedState !== null, E = y || Fr, L = Mm, D = Fr;
            Mm = p, Fr = E, Fr && !D && (Ae = o, $w(o));
            for (var j = s; j !== null; )
              Ae = j, dC(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Ae = o, Mm = L, Fr = D, IS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Er) !== Ie && s !== null ? (s.return = o, Ae = s) : IS(e, t, a);
      }
    }
    function IS(e, t, a) {
      for (; Ae !== null; ) {
        var i = Ae;
        if ((i.flags & Er) !== Ie) {
          var o = i.alternate;
          Gt(i);
          try {
            Mw(t, o, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          Ae = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ae = s;
          return;
        }
        Ae = i.return;
      }
    }
    function Iw(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        switch (t.tag) {
          case Q:
          case oe:
          case De:
          case Le: {
            if (t.mode & qe)
              try {
                Xl(), ll(sr, t, t.return);
              } finally {
                ql(t);
              }
            else
              ll(sr, t, t.return);
            break;
          }
          case W: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && VS(t, t.return, i);
            break;
          }
          case q: {
            Pf(t, t.return);
            break;
          }
          case Be: {
            var o = t.memoizedState !== null;
            if (o) {
              pC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ae = a) : pC(e);
      }
    }
    function pC(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        if (t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function $w(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            vC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ae = a) : vC(e);
      }
    }
    function vC(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        Gt(t);
        try {
          Nw(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (bn(), t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function Yw(e, t, a, i) {
      Ae = t, Ww(t, e, a, i);
    }
    function Ww(e, t, a, i) {
      for (; Ae !== null; ) {
        var o = Ae, s = o.child;
        (o.subtreeFlags & Ua) !== Ie && s !== null ? (s.return = o, Ae = s) : Gw(e, t, a, i);
      }
    }
    function Gw(e, t, a, i) {
      for (; Ae !== null; ) {
        var o = Ae;
        if ((o.flags & hn) !== Ie) {
          Gt(o);
          try {
            Qw(t, o, a, i);
          } catch (f) {
            vn(o, o.return, f);
          }
          bn();
        }
        if (o === e) {
          Ae = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Ae = s;
          return;
        }
        Ae = o.return;
      }
    }
    function Qw(e, t, a, i) {
      switch (t.tag) {
        case Q:
        case oe:
        case Le: {
          if (t.mode & qe) {
            ES();
            try {
              qu(Ur | ur, t);
            } finally {
              SS(t);
            }
          } else
            qu(Ur | ur, t);
          break;
        }
      }
    }
    function qw(e) {
      Ae = e, Xw();
    }
    function Xw() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        if ((Ae.flags & Bt) !== Ie) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Ae = o, Jw(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ae = e;
          }
        }
        (e.subtreeFlags & Ua) !== Ie && t !== null ? (t.return = e, Ae = t) : Kw();
      }
    }
    function Kw() {
      for (; Ae !== null; ) {
        var e = Ae;
        (e.flags & hn) !== Ie && (Gt(e), Zw(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function Zw(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          e.mode & qe ? (ES(), ll(Ur | ur, e, e.return), SS(e)) : ll(Ur | ur, e, e.return);
          break;
        }
      }
    }
    function Jw(e, t) {
      for (; Ae !== null; ) {
        var a = Ae;
        Gt(a), t_(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, Ae = i) : e_(e);
      }
    }
    function e_(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.sibling, i = t.return;
        if (lC(t), t === e) {
          Ae = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ae = a;
          return;
        }
        Ae = i;
      }
    }
    function t_(e, t) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          e.mode & qe ? (ES(), ll(Ur, e, t), SS(e)) : ll(Ur, e, t);
          break;
        }
      }
    }
    function n_(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          try {
            qu(sr | ur, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function r_(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          try {
            qu(Ur | ur, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function a_(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le: {
          try {
            ll(sr | ur, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && VS(e, e.return, t);
          break;
        }
      }
    }
    function i_(e) {
      switch (e.tag) {
        case Q:
        case oe:
        case Le:
          try {
            ll(Ur | ur, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Pp = Symbol.for;
      Pp("selector.component"), Pp("selector.has_pseudo_class"), Pp("selector.role"), Pp("selector.test_id"), Pp("selector.text");
    }
    var l_ = [];
    function o_() {
      l_.forEach(function(e) {
        return e();
      });
    }
    var u_ = S.ReactCurrentActQueue;
    function s_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function hC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && u_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var c_ = Math.ceil, $S = S.ReactCurrentDispatcher, YS = S.ReactCurrentOwner, Vr = S.ReactCurrentBatchConfig, sl = S.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), mC = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Mi = (
      /*                */
      4
    ), Bo = 0, Bp = 1, ec = 2, zm = 3, Ip = 4, yC = 5, WS = 6, Dt = dr, ba = null, Nn = null, pr = G, Zl = G, GS = Vu(G), vr = Bo, $p = null, Am = G, Yp = G, Um = G, Wp = null, Ga = null, QS = 0, gC = 500, SC = 1 / 0, f_ = 500, Io = null;
    function Gp() {
      SC = Cn() + f_;
    }
    function EC() {
      return SC;
    }
    var jm = !1, qS = null, Bf = null, tc = !1, Ku = null, Qp = G, XS = [], KS = null, d_ = 50, qp = 0, ZS = null, JS = !1, Fm = !1, p_ = 50, If = 0, Hm = null, Xp = ln, Vm = G, CC = !1;
    function Pm() {
      return ba;
    }
    function wa() {
      return (Dt & (Pr | Mi)) !== dr ? Cn() : (Xp !== ln || (Xp = Cn()), Xp);
    }
    function Zu(e) {
      var t = e.mode;
      if ((t & mt) === Ge)
        return Ke;
      if ((Dt & Pr) !== dr && pr !== G)
        return Bn(pr);
      var a = sb() !== ub;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Vm === kt && (Vm = Ud()), Vm;
      }
      var o = Va();
      if (o !== kt)
        return o;
      var s = GT();
      return s;
    }
    function v_(e) {
      var t = e.mode;
      return (t & mt) === Ge ? Ke : Ey();
    }
    function hr(e, t, a, i) {
      F_(), CC && g("useInsertionEffect must not schedule updates."), JS && (Fm = !0), bo(e, a, i), (Dt & Pr) !== G && e === ba ? P_(t) : (lr && Pd(e, t, a), B_(t), e === ba && ((Dt & Pr) === dr && (Yp = ct(Yp, a)), vr === Ip && Ju(e, pr)), Qa(e, i), a === Ke && Dt === dr && (t.mode & mt) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (Gp(), E0()));
    }
    function h_(e, t, a) {
      var i = e.current;
      i.lanes = t, bo(e, t, a), Qa(e, a);
    }
    function m_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & Pr) !== dr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      yy(e, t);
      var i = ws(e, e === ba ? pr : G);
      if (i === G) {
        a !== null && jC(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var o = Un(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== l1)) {
        a == null && s !== Ke && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && jC(a);
      var f;
      if (o === Ke)
        e.tag === Pu ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), YR(RC.bind(null, e))) : S0(RC.bind(null, e)), sl.current !== null ? sl.current.push(Bu) : qT(function() {
          (Dt & (Pr | Mi)) === dr && Bu();
        }), f = null;
      else {
        var p;
        switch (Ls(i)) {
          case Cr:
            p = wc;
            break;
          case or:
            p = Ca;
            break;
          case Qi:
            p = xi;
            break;
          case Ds:
            p = Ol;
            break;
          default:
            p = xi;
            break;
        }
        f = o1(p, xC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function xC(e, t) {
      if (Fb(), Xp = ln, Vm = G, (Dt & (Pr | Mi)) !== dr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yo();
      if (i && e.callbackNode !== a)
        return null;
      var o = ws(e, e === ba ? pr : G);
      if (o === G)
        return null;
      var s = !ks(e, o) && !Jv(e, o) && !t, f = s ? w_(e, o) : Im(e, o);
      if (f !== Bo) {
        if (f === ec) {
          var p = zd(e);
          p !== G && (o = p, f = e1(e, p));
        }
        if (f === Bp) {
          var v = $p;
          throw nc(e, G), Ju(e, o), Qa(e, Cn()), v;
        }
        if (f === WS)
          Ju(e, o);
        else {
          var y = !ks(e, o), E = e.current.alternate;
          if (y && !g_(E)) {
            if (f = Im(e, o), f === ec) {
              var L = zd(e);
              L !== G && (o = L, f = e1(e, L));
            }
            if (f === Bp) {
              var D = $p;
              throw nc(e, G), Ju(e, o), Qa(e, Cn()), D;
            }
          }
          e.finishedWork = E, e.finishedLanes = o, y_(e, f, o);
        }
      }
      return Qa(e, Cn()), e.callbackNode === a ? xC.bind(null, e) : null;
    }
    function e1(e, t) {
      var a = Wp;
      if ($n(e)) {
        var i = nc(e, t);
        i.flags |= wn, FR(e.containerInfo);
      }
      var o = Im(e, t);
      if (o !== ec) {
        var s = Ga;
        Ga = a, s !== null && TC(s);
      }
      return o;
    }
    function TC(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function y_(e, t, a) {
      switch (t) {
        case Bo:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ga, Io);
          break;
        }
        case zm: {
          if (Ju(e, a), Xc(a) && // do not delay if we're inside an act() scope
          !FC()) {
            var i = QS + gC - Cn();
            if (i > 10) {
              var o = ws(e, G);
              if (o !== G)
                break;
              var s = e.suspendedLanes;
              if (!Ro(s, a)) {
                wa(), Hd(e, s);
                break;
              }
              e.timeoutHandle = Ky(rc.bind(null, e, Ga, Io), i);
              break;
            }
          }
          rc(e, Ga, Io);
          break;
        }
        case Ip: {
          if (Ju(e, a), Zv(a))
            break;
          if (!FC()) {
            var f = Kv(e, a), p = f, v = Cn() - p, y = j_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ky(rc.bind(null, e, Ga, Io), y);
              break;
            }
          }
          rc(e, Ga, Io);
          break;
        }
        case yC: {
          rc(e, Ga, Io);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function g_(e) {
      for (var t = e; ; ) {
        if (t.flags & Ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!ze(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Ss && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ju(e, t) {
      t = Tu(t, Um), t = Tu(t, Yp), Fd(e, t);
    }
    function RC(e) {
      if (Hb(), (Dt & (Pr | Mi)) !== dr)
        throw new Error("Should not already be working.");
      Yo();
      var t = ws(e, G);
      if (!la(t, Ke))
        return Qa(e, Cn()), null;
      var a = Im(e, t);
      if (e.tag !== Pu && a === ec) {
        var i = zd(e);
        i !== G && (t = i, a = e1(e, i));
      }
      if (a === Bp) {
        var o = $p;
        throw nc(e, G), Ju(e, t), Qa(e, Cn()), o;
      }
      if (a === WS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ga, Io), Qa(e, Cn()), null;
    }
    function S_(e, t) {
      t !== G && (Ru(e, ct(t, Ke)), Qa(e, Cn()), (Dt & (Pr | Mi)) === dr && (Gp(), Bu()));
    }
    function t1(e, t) {
      var a = Dt;
      Dt |= mC;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (Gp(), E0());
      }
    }
    function E_(e, t, a, i, o) {
      var s = Va(), f = Vr.transition;
      try {
        return Vr.transition = null, In(Cr), e(t, a, i, o);
      } finally {
        In(s), Vr.transition = f, Dt === dr && Gp();
      }
    }
    function $o(e) {
      Ku !== null && Ku.tag === Pu && (Dt & (Pr | Mi)) === dr && Yo();
      var t = Dt;
      Dt |= mC;
      var a = Vr.transition, i = Va();
      try {
        return Vr.transition = null, In(Cr), e ? e() : void 0;
      } finally {
        In(i), Vr.transition = a, Dt = t, (Dt & (Pr | Mi)) === dr && Bu();
      }
    }
    function bC() {
      return (Dt & (Pr | Mi)) !== dr;
    }
    function Bm(e, t) {
      ua(GS, Zl, e), Zl = ct(Zl, t);
    }
    function n1(e) {
      Zl = GS.current, oa(GS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== Zy && (e.timeoutHandle = Zy, QT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var o = i.alternate;
          eC(o, i), i = i.return;
        }
      ba = e;
      var s = ac(e.current, null);
      return Nn = s, pr = Zl = t, vr = Bo, $p = null, Am = G, Yp = G, Um = G, Wp = null, Ga = null, pb(), tl.discardPendingWarnings(), s;
    }
    function wC(e, t) {
      do {
        var a = Nn;
        try {
          if (Xh(), nE(), bn(), YS.current = null, a === null || a.return === null) {
            vr = Bp, $p = t, Nn = null;
            return;
          }
          if (ft && a.mode & qe && km(a, !0), wt)
            if (ho(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Qv(a, i, pr);
            } else
              Lc(a, t, pr);
          $b(e, a.return, a, t, pr), OC(a);
        } catch (o) {
          t = o, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function _C() {
      var e = $S.current;
      return $S.current = Tm, e === null ? Tm : e;
    }
    function kC(e) {
      $S.current = e;
    }
    function C_() {
      QS = Cn();
    }
    function Kp(e) {
      Am = ct(e, Am);
    }
    function x_() {
      vr === Bo && (vr = zm);
    }
    function r1() {
      (vr === Bo || vr === zm || vr === ec) && (vr = Ip), ba !== null && (_s(Am) || _s(Yp)) && Ju(ba, pr);
    }
    function T_(e) {
      vr !== Ip && (vr = ec), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function R_() {
      return vr === Bo;
    }
    function Im(e, t) {
      var a = Dt;
      Dt |= Pr;
      var i = _C();
      if (ba !== e || pr !== t) {
        if (lr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Zp(e, pr), o.clear()), Jc(e, t);
        }
        Io = Bd(), nc(e, t);
      }
      oi(t);
      do
        try {
          b_();
          break;
        } catch (s) {
          wC(e, s);
        }
      while (!0);
      if (Xh(), Dt = a, kC(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gu(), ba = null, pr = G, vr;
    }
    function b_() {
      for (; Nn !== null; )
        DC(Nn);
    }
    function w_(e, t) {
      var a = Dt;
      Dt |= Pr;
      var i = _C();
      if (ba !== e || pr !== t) {
        if (lr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Zp(e, pr), o.clear()), Jc(e, t);
        }
        Io = Bd(), Gp(), nc(e, t);
      }
      oi(t);
      do
        try {
          __();
          break;
        } catch (s) {
          wC(e, s);
        }
      while (!0);
      return Xh(), kC(i), Dt = a, Nn !== null ? (xs(), Bo) : (gu(), ba = null, pr = G, vr);
    }
    function __() {
      for (; Nn !== null && !bc(); )
        DC(Nn);
    }
    function DC(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & qe) !== Ge ? (gS(e), a = a1(t, e, Zl), km(e, !0)) : a = a1(t, e, Zl), bn(), e.memoizedProps = e.pendingProps, a === null ? OC(e) : Nn = a, YS.current = null;
    }
    function OC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ga) === Ie) {
          Gt(t);
          var o = void 0;
          if ((t.mode & qe) === Ge ? o = JE(a, t, Zl) : (gS(t), o = JE(a, t, Zl), km(t, !1)), bn(), o !== null) {
            Nn = o;
            return;
          }
        } else {
          var s = xw(a, t);
          if (s !== null) {
            s.flags &= Hv, Nn = s;
            return;
          }
          if ((t.mode & qe) !== Ge) {
            km(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ga, i.subtreeFlags = Ie, i.deletions = null;
          else {
            vr = WS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      vr === Bo && (vr = yC);
    }
    function rc(e, t, a) {
      var i = Va(), o = Vr.transition;
      try {
        Vr.transition = null, In(Cr), k_(e, t, a, i);
      } finally {
        Vr.transition = o, In(i);
      }
      return null;
    }
    function k_(e, t, a, i) {
      do
        Yo();
      while (Ku !== null);
      if (H_(), (Dt & (Pr | Mi)) !== dr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (kc(s), o === null)
        return Dd(), null;
      if (s === G && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = ct(o.lanes, o.childLanes);
      Vd(e, f), e === ba && (ba = null, Nn = null, pr = G), ((o.subtreeFlags & Ua) !== Ie || (o.flags & Ua) !== Ie) && (tc || (tc = !0, KS = a, o1(xi, function() {
        return Yo(), null;
      })));
      var p = (o.subtreeFlags & (hu | na | Er | Ua)) !== Ie, v = (o.flags & (hu | na | Er | Ua)) !== Ie;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var E = Va();
        In(Cr);
        var L = Dt;
        Dt |= Mi, YS.current = null, _w(e, o), _E(), Pw(e, o, s), PT(e.containerInfo), e.current = o, qv(s), Bw(o, e, s), yu(), Bv(), Dt = L, In(E), Vr.transition = y;
      } else
        e.current = o, _E();
      var D = tc;
      if (tc ? (tc = !1, Ku = e, Qp = s) : (If = 0, Hm = null), f = e.pendingLanes, f === G && (Bf = null), D || zC(e.current, !1), Yi(o.stateNode, i), lr && e.memoizedUpdaters.clear(), o_(), Qa(e, Cn()), t !== null)
        for (var j = e.onRecoverableError, H = 0; H < t.length; H++) {
          var $ = t[H], _e = $.stack, Ye = $.digest;
          j($.value, {
            componentStack: _e,
            digest: Ye
          });
        }
      if (jm) {
        jm = !1;
        var Fe = qS;
        throw qS = null, Fe;
      }
      return la(Qp, Ke) && e.tag !== Pu && Yo(), f = e.pendingLanes, la(f, Ke) ? (jb(), e === ZS ? qp++ : (qp = 0, ZS = e)) : qp = 0, Bu(), Dd(), null;
    }
    function Yo() {
      if (Ku !== null) {
        var e = Ls(Qp), t = xy(Qi, e), a = Vr.transition, i = Va();
        try {
          return Vr.transition = null, In(t), O_();
        } finally {
          In(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function D_(e) {
      XS.push(e), tc || (tc = !0, o1(xi, function() {
        return Yo(), null;
      }));
    }
    function O_() {
      if (Ku === null)
        return !1;
      var e = KS;
      KS = null;
      var t = Ku, a = Qp;
      if (Ku = null, Qp = G, (Dt & (Pr | Mi)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      JS = !0, Fm = !1, Xv(a);
      var i = Dt;
      Dt |= Mi, qw(t.current), Yw(t, t.current, a, e);
      {
        var o = XS;
        XS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          Lw(t, f);
        }
      }
      Cs(), zC(t.current, !0), Dt = i, Bu(), Fm ? t === Hm ? If++ : (If = 0, Hm = t) : If = 0, JS = !1, Fm = !1, Ml(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function LC(e) {
      return Bf !== null && Bf.has(e);
    }
    function L_(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function M_(e) {
      jm || (jm = !0, qS = e);
    }
    var N_ = M_;
    function MC(e, t, a) {
      var i = Zs(a, t), o = DE(e, i, Ke), s = $u(e, o, Ke), f = wa();
      s !== null && (bo(s, Ke, f), Qa(s, f));
    }
    function vn(e, t, a) {
      if (Rw(a), Jp(!1), e.tag === I) {
        MC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          MC(i, e, a);
          return;
        } else if (i.tag === W) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !LC(s)) {
            var f = Zs(a, e), p = RS(i, f, Ke), v = $u(i, p, Ke), y = wa();
            v !== null && (bo(v, Ke, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function z_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = wa();
      Hd(e, a), I_(e), ba === e && Ro(pr, a) && (vr === Ip || vr === zm && Xc(pr) && Cn() - QS < gC ? nc(e, G) : Um = ct(Um, a)), Qa(e, o);
    }
    function NC(e, t) {
      t === kt && (t = v_(e));
      var a = wa(), i = Ya(e, t);
      i !== null && (bo(i, t, a), Qa(i, a));
    }
    function A_(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), NC(e, a);
    }
    function U_(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case xt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), NC(e, a);
    }
    function j_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : c_(e / 1960) * 1960;
    }
    function F_() {
      if (qp > d_)
        throw qp = 0, ZS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > p_ && (If = 0, Hm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function H_() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function zC(e, t) {
      Gt(e), $m(e, ta, a_), t && $m(e, vo, i_), $m(e, ta, n_), t && $m(e, vo, r_), bn();
    }
    function $m(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ie ? i = i.child : ((i.flags & t) !== Ie && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Ym = null;
    function AC(e) {
      {
        if ((Dt & Pr) !== dr || !(e.mode & mt))
          return;
        var t = e.tag;
        if (t !== se && t !== I && t !== W && t !== Q && t !== oe && t !== De && t !== Le)
          return;
        var a = at(e) || "ReactComponent";
        if (Ym !== null) {
          if (Ym.has(a))
            return;
          Ym.add(a);
        } else
          Ym = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Gt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : bn();
        }
      }
    }
    var a1;
    {
      var V_ = null;
      a1 = function(e, t, a) {
        var i = IC(V_, t);
        try {
          return QE(e, t, a);
        } catch (s) {
          if (JR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Xh(), nE(), eC(e, t), IC(t, i), t.mode & qe && gS(t), po(null, QE, null, e, t, a), hy()) {
            var o = gd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var UC = !1, i1;
    i1 = /* @__PURE__ */ new Set();
    function P_(e) {
      if (Xr && !zb())
        switch (e.tag) {
          case Q:
          case oe:
          case Le: {
            var t = Nn && at(Nn) || "Unknown", a = t;
            if (!i1.has(a)) {
              i1.add(a);
              var i = at(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case W: {
            UC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), UC = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (lr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Pd(e, i, t);
        });
      }
    }
    var l1 = {};
    function o1(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), l1) : Rc(e, t);
      }
    }
    function jC(e) {
      if (e !== l1)
        return Pv(e);
    }
    function FC() {
      return sl.current !== null;
    }
    function B_(e) {
      {
        if (e.mode & mt) {
          if (!hC())
            return;
        } else if (!s_() || Dt !== dr || e.tag !== Q && e.tag !== oe && e.tag !== Le)
          return;
        if (sl.current === null) {
          var t = En;
          try {
            Gt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, at(e));
          } finally {
            t ? Gt(e) : bn();
          }
        }
      }
    }
    function I_(e) {
      e.tag !== Pu && hC() && sl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Jp(e) {
      CC = e;
    }
    var Ni = null, $f = null, $_ = function(e) {
      Ni = e;
    };
    function Yf(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function u1(e) {
      return Yf(e);
    }
    function s1(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: we,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function HC(e, t) {
      {
        if (Ni === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case W: {
            typeof i == "function" && (o = !0);
            break;
          }
          case Q: {
            (typeof i == "function" || s === $e) && (o = !0);
            break;
          }
          case oe: {
            (s === we || s === $e) && (o = !0);
            break;
          }
          case De:
          case Le: {
            (s === ut || s === $e) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Ni(a);
          if (f !== void 0 && f === Ni(i))
            return !0;
        }
        return !1;
      }
    }
    function VC(e) {
      {
        if (Ni === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var Y_ = function(e, t) {
      {
        if (Ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yo(), $o(function() {
          c1(e.current, i, a);
        });
      }
    }, W_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Yo(), $o(function() {
          ev(t, e, null, null);
        });
      }
    };
    function c1(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Q:
          case Le:
          case W:
            v = p;
            break;
          case oe:
            v = p.render;
            break;
        }
        if (Ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, E = !1;
        if (v !== null) {
          var L = Ni(v);
          L !== void 0 && (a.has(L) ? E = !0 : t.has(L) && (f === W ? E = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || y) {
          var D = Ya(e, Ke);
          D !== null && hr(D, e, Ke, ln);
        }
        o !== null && !E && c1(o, t, a), s !== null && c1(s, t, a);
      }
    }
    var G_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return f1(e.current, i, a), a;
      }
    };
    function f1(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Q:
          case Le:
          case W:
            p = f;
            break;
          case oe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Q_(e, a) : i !== null && f1(i, t, a), o !== null && f1(o, t, a);
      }
    }
    function Q_(e, t) {
      {
        var a = q_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function q_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var d1;
    {
      d1 = !1;
      try {
        var PC = Object.preventExtensions({});
      } catch {
        d1 = !0;
      }
    }
    function X_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !d1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new X_(e, t, a, i);
    };
    function p1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function K_(e) {
      return typeof e == "function" && !p1(e) && e.defaultProps === void 0;
    }
    function Z_(e) {
      if (typeof e == "function")
        return p1(e) ? W : Q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === we)
          return oe;
        if (t === ut)
          return De;
      }
      return se;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ie, a.subtreeFlags = Ie, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ir, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case se:
        case Q:
        case Le:
          a.type = Yf(e.type);
          break;
        case W:
          a.type = u1(e.type);
          break;
        case oe:
          a.type = s1(e.type);
          break;
      }
      return a;
    }
    function J_(e, t) {
      e.flags &= ir | cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ek(e, t, a) {
      var i;
      return e === Bh ? (i = mt, t === !0 && (i |= xn, i |= Fa)) : i = Ge, lr && (i |= qe), ci(I, null, null, i);
    }
    function v1(e, t, a, i, o, s) {
      var f = se, p = e;
      if (typeof e == "function")
        p1(e) ? (f = W, p = u1(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = q;
      else
        e:
          switch (e) {
            case ya:
              return es(a.children, o, s, t);
            case hi:
              f = ae, o |= xn, (o & mt) !== Ge && (o |= Fa);
              break;
            case b:
              return tk(a, o, s, t);
            case ot:
              return nk(a, o, s, t);
            case _t:
              return rk(a, o, s, t);
            case un:
              return BC(a, o, s, t);
            case ar:
            case zn:
            case mi:
            case Xo:
            case on:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case re:
                    f = pe;
                    break e;
                  case ge:
                    f = Xe;
                    break e;
                  case we:
                    f = oe, p = s1(p);
                    break e;
                  case ut:
                    f = De;
                    break e;
                  case $e:
                    f = gt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? at(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var E = ci(f, a, t, o);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function h1(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = v1(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function es(e, t, a, i) {
      var o = ci(ee, e, i, t);
      return o.lanes = a, o;
    }
    function tk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(be, e, i, t | qe);
      return o.elementType = b, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function nk(e, t, a, i) {
      var o = ci(Ee, e, i, t);
      return o.elementType = ot, o.lanes = a, o;
    }
    function rk(e, t, a, i) {
      var o = ci(xt, e, i, t);
      return o.elementType = _t, o.lanes = a, o;
    }
    function BC(e, t, a, i) {
      var o = ci(Be, e, i, t);
      o.elementType = un, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function m1(e, t, a) {
      var i = ci(de, e, null, t);
      return i.lanes = a, i;
    }
    function ak() {
      var e = ci(q, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function ik(e) {
      var t = ci(Mt, null, null, Ge);
      return t.stateNode = e, t;
    }
    function y1(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(Z, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function IC(e, t) {
      return e === null && (e = ci(se, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function lk(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = Zc(G), this.expirationTimes = Zc(ln), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = Zc(G), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < dn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Bh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function $C(e, t, a, i, o, s, f, p, v, y) {
      var E = new lk(e, t, a, p, v), L = ek(t, s);
      E.current = L, L.stateNode = E;
      {
        var D = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = D;
      }
      return bg(L), E;
    }
    var g1 = "18.2.0";
    function ok(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Wr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Dr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var S1, E1;
    S1 = !1, E1 = {};
    function YC(e) {
      if (!e)
        return si;
      var t = Na(e), a = $R(t);
      if (t.tag === W) {
        var i = t.type;
        if (Yl(i))
          return y0(t, i, a);
      }
      return a;
    }
    function uk(e, t) {
      {
        var a = Na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ja(a);
        if (o === null)
          return null;
        if (o.mode & xn) {
          var s = at(a) || "Component";
          if (!E1[s]) {
            E1[s] = !0;
            var f = En;
            try {
              Gt(o), a.mode & xn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : bn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function WC(e, t, a, i, o, s, f, p) {
      var v = !1, y = null;
      return $C(e, t, v, y, a, i, o, s, f);
    }
    function GC(e, t, a, i, o, s, f, p, v, y) {
      var E = !0, L = $C(a, i, E, e, o, s, f, p, v);
      L.context = YC(null);
      var D = L.current, j = wa(), H = Zu(D), $ = Vo(j, H);
      return $.callback = t ?? null, $u(D, $, H), h_(L, H, j), L;
    }
    function ev(e, t, a, i) {
      Iv(t, e);
      var o = t.current, s = wa(), f = Zu(o);
      mo(f);
      var p = YC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Xr && En !== null && !S1 && (S1 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, at(En) || "Unknown"));
      var v = Vo(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = $u(o, v, f);
      return y !== null && (hr(y, o, f, s), tm(y, o, f)), f;
    }
    function Wm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function sk(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if ($n(t)) {
            var a = gy(t);
            S_(t, a);
          }
          break;
        }
        case Ee: {
          $o(function() {
            var o = Ya(e, Ke);
            if (o !== null) {
              var s = wa();
              hr(o, e, Ke, s);
            }
          });
          var i = Ke;
          C1(e, i);
          break;
        }
      }
    }
    function QC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = th(a.retryLane, t));
    }
    function C1(e, t) {
      QC(e, t);
      var a = e.alternate;
      a && QC(a, t);
    }
    function ck(e) {
      if (e.tag === Ee) {
        var t = Su, a = Ya(e, t);
        if (a !== null) {
          var i = wa();
          hr(a, e, t, i);
        }
        C1(e, t);
      }
    }
    function fk(e) {
      if (e.tag === Ee) {
        var t = Zu(e), a = Ya(e, t);
        if (a !== null) {
          var i = wa();
          hr(a, e, t, i);
        }
        C1(e, t);
      }
    }
    function qC(e) {
      var t = Vv(e);
      return t === null ? null : t.stateNode;
    }
    var XC = function(e) {
      return null;
    };
    function dk(e) {
      return XC(e);
    }
    var KC = function(e) {
      return !1;
    };
    function pk(e) {
      return KC(e);
    }
    var ZC = null, JC = null, ex = null, tx = null, nx = null, rx = null, ax = null, ix = null, lx = null;
    {
      var ox = function(e, t, a) {
        var i = t[a], o = Tt(e) ? e.slice() : vt({}, e);
        return a + 1 === t.length ? (Tt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ox(e[i], t, a + 1), o);
      }, ux = function(e, t) {
        return ox(e, t, 0);
      }, sx = function(e, t, a, i) {
        var o = t[i], s = Tt(e) ? e.slice() : vt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], Tt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = sx(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, cx = function(e, t, a) {
        if (t.length !== a.length) {
          P("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              P("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return sx(e, t, a, 0);
      }, fx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Tt(e) ? e.slice() : vt({}, e);
        return s[o] = fx(e[o], t, a + 1, i), s;
      }, dx = function(e, t, a) {
        return fx(e, t, 0, a);
      }, x1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      ZC = function(e, t, a, i) {
        var o = x1(e, t);
        if (o !== null) {
          var s = dx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = vt({}, e.memoizedProps);
          var f = Ya(e, Ke);
          f !== null && hr(f, e, Ke, ln);
        }
      }, JC = function(e, t, a) {
        var i = x1(e, t);
        if (i !== null) {
          var o = ux(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = vt({}, e.memoizedProps);
          var s = Ya(e, Ke);
          s !== null && hr(s, e, Ke, ln);
        }
      }, ex = function(e, t, a, i) {
        var o = x1(e, t);
        if (o !== null) {
          var s = cx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = vt({}, e.memoizedProps);
          var f = Ya(e, Ke);
          f !== null && hr(f, e, Ke, ln);
        }
      }, tx = function(e, t, a) {
        e.pendingProps = dx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && hr(i, e, Ke, ln);
      }, nx = function(e, t) {
        e.pendingProps = ux(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, Ke);
        a !== null && hr(a, e, Ke, ln);
      }, rx = function(e, t, a) {
        e.pendingProps = cx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && hr(i, e, Ke, ln);
      }, ax = function(e) {
        var t = Ya(e, Ke);
        t !== null && hr(t, e, Ke, ln);
      }, ix = function(e) {
        XC = e;
      }, lx = function(e) {
        KC = e;
      };
    }
    function vk(e) {
      var t = ja(e);
      return t === null ? null : t.stateNode;
    }
    function hk(e) {
      return null;
    }
    function mk() {
      return En;
    }
    function yk(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return _d({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: ZC,
        overrideHookStateDeletePath: JC,
        overrideHookStateRenamePath: ex,
        overrideProps: tx,
        overridePropsDeletePath: nx,
        overridePropsRenamePath: rx,
        setErrorHandler: ix,
        setSuspenseHandler: lx,
        scheduleUpdate: ax,
        currentDispatcherRef: a,
        findHostInstanceByFiber: vk,
        findFiberByHostInstance: t || hk,
        // React Refresh
        findHostInstancesForRefresh: G_,
        scheduleRefresh: Y_,
        scheduleRoot: W_,
        setRefreshHandler: $_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: mk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: g1
      });
    }
    var px = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function T1(e) {
      this._internalRoot = e;
    }
    Gm.prototype.render = T1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = qC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ev(e, t, null, null);
    }, Gm.prototype.unmount = T1.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), $o(function() {
          ev(null, e, null, null);
        }), d0(t);
      }
    };
    function gk(e, t) {
      if (!Qm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      vx(e);
      var a = !1, i = !1, o = "", s = px;
      t != null && (t.hydrate ? P("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === vi && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = WC(e, Bh, null, a, i, o, s);
      Ah(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return up(p), new T1(f);
    }
    function Gm(e) {
      this._internalRoot = e;
    }
    function Sk(e) {
      e && sh(e);
    }
    Gm.prototype.unstable_scheduleHydration = Sk;
    function Ek(e, t, a) {
      if (!Qm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      vx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = px;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = GC(t, null, e, Bh, i, s, f, p, v);
      if (Ah(y.current, e), up(e), o)
        for (var E = 0; E < o.length; E++) {
          var L = o[E];
          kb(y, L);
        }
      return new Gm(y);
    }
    function Qm(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === ai || e.nodeType === lo || !Ce));
    }
    function tv(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === ai || e.nodeType === lo || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function vx(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Sp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ck = S.ReactCurrentOwner, hx;
    hx = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = qC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = R1(e), o = !!(i && Hu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function R1(e) {
      return e ? e.nodeType === ai ? e.documentElement : e.firstChild : null;
    }
    function mx() {
    }
    function xk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var D = Wm(f);
            s.call(D);
          };
        }
        var f = GC(
          t,
          i,
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mx
        );
        e._reactRootContainer = f, Ah(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return up(p), $o(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var D = Wm(E);
            y.call(D);
          };
        }
        var E = WC(
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          mx
        );
        e._reactRootContainer = E, Ah(E.current, e);
        var L = e.nodeType === An ? e.parentNode : e;
        return up(L), $o(function() {
          ev(t, E, a, i);
        }), E;
      }
    }
    function Tk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function qm(e, t, a, i, o) {
      hx(a), Tk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = xk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var v = Wm(f);
            p.call(v);
          };
        }
        ev(t, f, e, o);
      }
      return Wm(f);
    }
    function Rk(e) {
      {
        var t = Ck.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : uk(e, "findDOMNode");
    }
    function bk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return qm(null, e, t, !0, a);
    }
    function wk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return qm(null, e, t, !1, a);
    }
    function _k(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return qm(e, t, a, !1, i);
    }
    function kk(e) {
      if (!tv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Sp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = R1(e), i = a && !Hu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return $o(function() {
          qm(null, null, e, !1, function() {
            e._reactRootContainer = null, d0(e);
          });
        }), !0;
      } else {
        {
          var o = R1(e), s = !!(o && Hu(o)), f = e.nodeType === Zr && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Me(sk), rh(ck), Ns(fk), $d(Va), ih(Os), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), jv(LT), Sc(t1, E_, $o);
    function Dk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qm(t))
        throw new Error("Target container is not a DOM element.");
      return ok(e, t, null, a);
    }
    function Ok(e, t, a, i) {
      return _k(e, t, a, i);
    }
    var b1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Hu, xf, Uh, gc, hs, t1]
    };
    function Lk(e, t) {
      return b1.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gk(e, t);
    }
    function Mk(e, t, a) {
      return b1.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ek(e, t, a);
    }
    function Nk(e) {
      return bC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), $o(e);
    }
    var zk = yk({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: g1,
      rendererPackageName: "react-dom"
    });
    if (!zk && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var yx = window.location.protocol;
      /^(https?|file):$/.test(yx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (yx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b1, Xa.createPortal = Dk, Xa.createRoot = Lk, Xa.findDOMNode = Rk, Xa.flushSync = Nk, Xa.hydrate = bk, Xa.hydrateRoot = Mk, Xa.render = wk, Xa.unmountComponentAtNode = kk, Xa.unstable_batchedUpdates = t1, Xa.unstable_renderSubtreeIntoContainer = Ok, Xa.version = g1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xa;
}
function $x() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($x);
    } catch (x) {
      console.error(x);
    }
  }
}
process.env.NODE_ENV === "production" ? ($x(), N1.exports = Yk()) : N1.exports = Wk();
var Gk = N1.exports, iv = Gk;
if (process.env.NODE_ENV === "production")
  ov.createRoot = iv.createRoot, ov.hydrateRoot = iv.hydrateRoot;
else {
  var Zm = iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ov.createRoot = function(x, C) {
    Zm.usingClientEntryPoint = !0;
    try {
      return iv.createRoot(x, C);
    } finally {
      Zm.usingClientEntryPoint = !1;
    }
  }, ov.hydrateRoot = function(x, C, S) {
    Zm.usingClientEntryPoint = !0;
    try {
      return iv.hydrateRoot(x, C, S);
    } finally {
      Zm.usingClientEntryPoint = !1;
    }
  };
}
var Xt = Qo();
const Qk = /* @__PURE__ */ Bx(Xt);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qk = {
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
const Xk = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = (x, C) => {
  const S = Xt.forwardRef(
    ({
      color: k = "currentColor",
      size: K = 24,
      strokeWidth: P = 2,
      absoluteStrokeWidth: g,
      className: ve = "",
      children: Q,
      ...W
    }, se) => Xt.createElement(
      "svg",
      {
        ref: se,
        ...qk,
        width: K,
        height: K,
        stroke: k,
        strokeWidth: g ? Number(P) * 24 / Number(K) : P,
        className: ["lucide", `lucide-${Xk(x)}`, ve].join(" "),
        ...W
      },
      [
        ...C.map(([I, Z]) => Xt.createElement(I, Z)),
        ...Array.isArray(Q) ? Q : [Q]
      ]
    )
  );
  return S.displayName = `${x}`, S;
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kk = Rt("AArrowUp", [
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
const Zk = Rt("Accessibility", [
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
const Jk = Rt("AlignCenter", [
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
const e2 = Rt("AlignJustify", [
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
const t2 = Rt("AlignLeft", [
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
const n2 = Rt("AlignRight", [
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
const r2 = Rt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = Rt("ArrowRightLeft", [
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
const i2 = Rt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = Rt("AudioWaveform", [
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
const o2 = Rt("Brain", [
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
const u2 = Rt("CaseSensitive", [
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
const s2 = Rt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = Rt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = Rt("ChevronsLeftRight", [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = Rt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = Rt("CircleDotDashed", [
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
const v2 = Rt("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = Rt("Droplet", [
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
const h2 = Rt("Eclipse", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = Rt("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = Rt("Highlighter", [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = Rt("ImageOff", [
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
const S2 = Rt("Lamp", [
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
const E2 = Rt("Ligature", [
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
const C2 = Rt("Lightbulb", [
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
const x2 = Rt("Link2", [
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
const T2 = Rt("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = Rt("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = Rt("PersonStanding", [
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
const w2 = Rt("RefreshCcw", [
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
const _2 = Rt("ScanLine", [
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
const k2 = Rt("Settings", [
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
const D2 = Rt("Shapes", [
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
const O2 = Rt("Text", [
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
const Dx = Rt("Type", [
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
const Yx = Rt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = Rt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
var M2 = { VITE_USER_NODE_ENV: "production", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Ox = (x) => {
  let C;
  const S = /* @__PURE__ */ new Set(), k = (se, I) => {
    const Z = typeof se == "function" ? se(C) : se;
    if (!Object.is(Z, C)) {
      const q = C;
      C = I ?? (typeof Z != "object" || Z === null) ? Z : Object.assign({}, C, Z), S.forEach((de) => de(C, q));
    }
  }, K = () => C, Q = { setState: k, getState: K, getInitialState: () => W, subscribe: (se) => (S.add(se), () => S.delete(se)), destroy: () => {
    (M2 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), S.clear();
  } }, W = C = x(k, K, Q);
  return Q;
}, N2 = (x) => x ? Ox(x) : Ox;
var z1 = { exports: {} }, k1 = {}, Jm = { exports: {} }, D1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lx;
function z2() {
  if (Lx)
    return D1;
  Lx = 1;
  var x = Qo();
  function C(I, Z) {
    return I === Z && (I !== 0 || 1 / I === 1 / Z) || I !== I && Z !== Z;
  }
  var S = typeof Object.is == "function" ? Object.is : C, k = x.useState, K = x.useEffect, P = x.useLayoutEffect, g = x.useDebugValue;
  function ve(I, Z) {
    var q = Z(), de = k({ inst: { value: q, getSnapshot: Z } }), ee = de[0].inst, ae = de[1];
    return P(function() {
      ee.value = q, ee.getSnapshot = Z, Q(ee) && ae({ inst: ee });
    }, [I, q, Z]), K(function() {
      return Q(ee) && ae({ inst: ee }), I(function() {
        Q(ee) && ae({ inst: ee });
      });
    }, [I]), g(q), q;
  }
  function Q(I) {
    var Z = I.getSnapshot;
    I = I.value;
    try {
      var q = Z();
      return !S(I, q);
    } catch {
      return !0;
    }
  }
  function W(I, Z) {
    return Z();
  }
  var se = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? W : ve;
  return D1.useSyncExternalStore = x.useSyncExternalStore !== void 0 ? x.useSyncExternalStore : se, D1;
}
var O1 = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mx;
function A2() {
  return Mx || (Mx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var x = Qo(), C = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(oe) {
      {
        for (var be = arguments.length, Ee = new Array(be > 1 ? be - 1 : 0), De = 1; De < be; De++)
          Ee[De - 1] = arguments[De];
        k("error", oe, Ee);
      }
    }
    function k(oe, be, Ee) {
      {
        var De = C.ReactDebugCurrentFrame, Le = De.getStackAddendum();
        Le !== "" && (be += "%s", Ee = Ee.concat([Le]));
        var gt = Ee.map(function(bt) {
          return String(bt);
        });
        gt.unshift("Warning: " + be), Function.prototype.apply.call(console[oe], console, gt);
      }
    }
    function K(oe, be) {
      return oe === be && (oe !== 0 || 1 / oe === 1 / be) || oe !== oe && be !== be;
    }
    var P = typeof Object.is == "function" ? Object.is : K, g = x.useState, ve = x.useEffect, Q = x.useLayoutEffect, W = x.useDebugValue, se = !1, I = !1;
    function Z(oe, be, Ee) {
      se || x.startTransition !== void 0 && (se = !0, S("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var De = be();
      if (!I) {
        var Le = be();
        P(De, Le) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), I = !0);
      }
      var gt = g({
        inst: {
          value: De,
          getSnapshot: be
        }
      }), bt = gt[0].inst, Mt = gt[1];
      return Q(function() {
        bt.value = De, bt.getSnapshot = be, q(bt) && Mt({
          inst: bt
        });
      }, [oe, De, be]), ve(function() {
        q(bt) && Mt({
          inst: bt
        });
        var xt = function() {
          q(bt) && Mt({
            inst: bt
          });
        };
        return oe(xt);
      }, [oe]), W(De), De;
    }
    function q(oe) {
      var be = oe.getSnapshot, Ee = oe.value;
      try {
        var De = be();
        return !P(Ee, De);
      } catch {
        return !0;
      }
    }
    function de(oe, be, Ee) {
      return be();
    }
    var ee = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ae = !ee, Xe = ae ? de : Z, pe = x.useSyncExternalStore !== void 0 ? x.useSyncExternalStore : Xe;
    O1.useSyncExternalStore = pe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), O1;
}
var Nx;
function Wx() {
  return Nx || (Nx = 1, process.env.NODE_ENV === "production" ? Jm.exports = z2() : Jm.exports = A2()), Jm.exports;
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
var zx;
function U2() {
  if (zx)
    return k1;
  zx = 1;
  var x = Qo(), C = Wx();
  function S(W, se) {
    return W === se && (W !== 0 || 1 / W === 1 / se) || W !== W && se !== se;
  }
  var k = typeof Object.is == "function" ? Object.is : S, K = C.useSyncExternalStore, P = x.useRef, g = x.useEffect, ve = x.useMemo, Q = x.useDebugValue;
  return k1.useSyncExternalStoreWithSelector = function(W, se, I, Z, q) {
    var de = P(null);
    if (de.current === null) {
      var ee = { hasValue: !1, value: null };
      de.current = ee;
    } else
      ee = de.current;
    de = ve(function() {
      function Xe(De) {
        if (!pe) {
          if (pe = !0, oe = De, De = Z(De), q !== void 0 && ee.hasValue) {
            var Le = ee.value;
            if (q(Le, De))
              return be = Le;
          }
          return be = De;
        }
        if (Le = be, k(oe, De))
          return Le;
        var gt = Z(De);
        return q !== void 0 && q(Le, gt) ? Le : (oe = De, be = gt);
      }
      var pe = !1, oe, be, Ee = I === void 0 ? null : I;
      return [function() {
        return Xe(se());
      }, Ee === null ? void 0 : function() {
        return Xe(Ee());
      }];
    }, [se, I, Z, q]);
    var ae = K(W, de[0], de[1]);
    return g(function() {
      ee.hasValue = !0, ee.value = ae;
    }, [ae]), Q(ae), ae;
  }, k1;
}
var L1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ax;
function j2() {
  return Ax || (Ax = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var x = Qo(), C = Wx();
    function S(se, I) {
      return se === I && (se !== 0 || 1 / se === 1 / I) || se !== se && I !== I;
    }
    var k = typeof Object.is == "function" ? Object.is : S, K = C.useSyncExternalStore, P = x.useRef, g = x.useEffect, ve = x.useMemo, Q = x.useDebugValue;
    function W(se, I, Z, q, de) {
      var ee = P(null), ae;
      ee.current === null ? (ae = {
        hasValue: !1,
        value: null
      }, ee.current = ae) : ae = ee.current;
      var Xe = ve(function() {
        var Ee = !1, De, Le, gt = function(Jt) {
          if (!Ee) {
            Ee = !0, De = Jt;
            var Be = q(Jt);
            if (de !== void 0 && ae.hasValue) {
              var nt = ae.value;
              if (de(nt, Be))
                return Le = nt, nt;
            }
            return Le = Be, Be;
          }
          var jt = De, yt = Le;
          if (k(jt, Jt))
            return yt;
          var Oe = q(Jt);
          return de !== void 0 && de(yt, Oe) ? yt : (De = Jt, Le = Oe, Oe);
        }, bt = Z === void 0 ? null : Z, Mt = function() {
          return gt(I());
        }, xt = bt === null ? void 0 : function() {
          return gt(bt());
        };
        return [Mt, xt];
      }, [I, Z, q, de]), pe = Xe[0], oe = Xe[1], be = K(se, pe, oe);
      return g(function() {
        ae.hasValue = !0, ae.value = be;
      }, [be]), Q(be), be;
    }
    L1.useSyncExternalStoreWithSelector = W, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), L1;
}
process.env.NODE_ENV === "production" ? z1.exports = U2() : z1.exports = j2();
var F2 = z1.exports;
const H2 = /* @__PURE__ */ Bx(F2);
var Gx = { VITE_USER_NODE_ENV: "production", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: V2 } = Qk, { useSyncExternalStoreWithSelector: P2 } = H2;
let Ux = !1;
const B2 = (x) => x;
function I2(x, C = B2, S) {
  (Gx ? "production" : void 0) !== "production" && S && !Ux && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ux = !0);
  const k = P2(
    x.subscribe,
    x.getState,
    x.getServerState || x.getInitialState,
    C,
    S
  );
  return V2(k), k;
}
const jx = (x) => {
  (Gx ? "production" : void 0) !== "production" && typeof x != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const C = typeof x == "function" ? N2(x) : x, S = (k, K) => I2(C, k, K);
  return Object.assign(S, C), S;
}, A1 = (x) => x ? jx(x) : jx;
var $2 = { VITE_USER_NODE_ENV: "production", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function Y2(x, C) {
  let S;
  try {
    S = x();
  } catch {
    return;
  }
  return {
    getItem: (K) => {
      var P;
      const g = (Q) => Q === null ? null : JSON.parse(Q, void 0), ve = (P = S.getItem(K)) != null ? P : null;
      return ve instanceof Promise ? ve.then(g) : g(ve);
    },
    setItem: (K, P) => S.setItem(
      K,
      JSON.stringify(P, void 0)
    ),
    removeItem: (K) => S.removeItem(K)
  };
}
const uv = (x) => (C) => {
  try {
    const S = x(C);
    return S instanceof Promise ? S : {
      then(k) {
        return uv(k)(S);
      },
      catch(k) {
        return this;
      }
    };
  } catch (S) {
    return {
      then(k) {
        return this;
      },
      catch(k) {
        return uv(k)(S);
      }
    };
  }
}, W2 = (x, C) => (S, k, K) => {
  let P = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (ae) => ae,
    version: 0,
    merge: (ae, Xe) => ({
      ...Xe,
      ...ae
    }),
    ...C
  }, g = !1;
  const ve = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  let W;
  try {
    W = P.getStorage();
  } catch {
  }
  if (!W)
    return x(
      (...ae) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${P.name}', the given storage is currently unavailable.`
        ), S(...ae);
      },
      k,
      K
    );
  const se = uv(P.serialize), I = () => {
    const ae = P.partialize({ ...k() });
    let Xe;
    const pe = se({ state: ae, version: P.version }).then(
      (oe) => W.setItem(P.name, oe)
    ).catch((oe) => {
      Xe = oe;
    });
    if (Xe)
      throw Xe;
    return pe;
  }, Z = K.setState;
  K.setState = (ae, Xe) => {
    Z(ae, Xe), I();
  };
  const q = x(
    (...ae) => {
      S(...ae), I();
    },
    k,
    K
  );
  let de;
  const ee = () => {
    var ae;
    if (!W)
      return;
    g = !1, ve.forEach((pe) => pe(k()));
    const Xe = ((ae = P.onRehydrateStorage) == null ? void 0 : ae.call(P, k())) || void 0;
    return uv(W.getItem.bind(W))(P.name).then((pe) => {
      if (pe)
        return P.deserialize(pe);
    }).then((pe) => {
      if (pe)
        if (typeof pe.version == "number" && pe.version !== P.version) {
          if (P.migrate)
            return P.migrate(
              pe.state,
              pe.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return pe.state;
    }).then((pe) => {
      var oe;
      return de = P.merge(
        pe,
        (oe = k()) != null ? oe : q
      ), S(de, !0), I();
    }).then(() => {
      Xe == null || Xe(de, void 0), g = !0, Q.forEach((pe) => pe(de));
    }).catch((pe) => {
      Xe == null || Xe(void 0, pe);
    });
  };
  return K.persist = {
    setOptions: (ae) => {
      P = {
        ...P,
        ...ae
      }, ae.getStorage && (W = ae.getStorage());
    },
    clearStorage: () => {
      W == null || W.removeItem(P.name);
    },
    getOptions: () => P,
    rehydrate: () => ee(),
    hasHydrated: () => g,
    onHydrate: (ae) => (ve.add(ae), () => {
      ve.delete(ae);
    }),
    onFinishHydration: (ae) => (Q.add(ae), () => {
      Q.delete(ae);
    })
  }, ee(), de || q;
}, G2 = (x, C) => (S, k, K) => {
  let P = {
    storage: Y2(() => localStorage),
    partialize: (ee) => ee,
    version: 0,
    merge: (ee, ae) => ({
      ...ae,
      ...ee
    }),
    ...C
  }, g = !1;
  const ve = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  let W = P.storage;
  if (!W)
    return x(
      (...ee) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${P.name}', the given storage is currently unavailable.`
        ), S(...ee);
      },
      k,
      K
    );
  const se = () => {
    const ee = P.partialize({ ...k() });
    return W.setItem(P.name, {
      state: ee,
      version: P.version
    });
  }, I = K.setState;
  K.setState = (ee, ae) => {
    I(ee, ae), se();
  };
  const Z = x(
    (...ee) => {
      S(...ee), se();
    },
    k,
    K
  );
  K.getInitialState = () => Z;
  let q;
  const de = () => {
    var ee, ae;
    if (!W)
      return;
    g = !1, ve.forEach((pe) => {
      var oe;
      return pe((oe = k()) != null ? oe : Z);
    });
    const Xe = ((ae = P.onRehydrateStorage) == null ? void 0 : ae.call(P, (ee = k()) != null ? ee : Z)) || void 0;
    return uv(W.getItem.bind(W))(P.name).then((pe) => {
      if (pe)
        if (typeof pe.version == "number" && pe.version !== P.version) {
          if (P.migrate)
            return P.migrate(
              pe.state,
              pe.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return pe.state;
    }).then((pe) => {
      var oe;
      return q = P.merge(
        pe,
        (oe = k()) != null ? oe : Z
      ), S(q, !0), se();
    }).then(() => {
      Xe == null || Xe(q, void 0), q = k(), g = !0, Q.forEach((pe) => pe(q));
    }).catch((pe) => {
      Xe == null || Xe(void 0, pe);
    });
  };
  return K.persist = {
    setOptions: (ee) => {
      P = {
        ...P,
        ...ee
      }, ee.storage && (W = ee.storage);
    },
    clearStorage: () => {
      W == null || W.removeItem(P.name);
    },
    getOptions: () => P,
    rehydrate: () => de(),
    hasHydrated: () => g,
    onHydrate: (ee) => (ve.add(ee), () => {
      ve.delete(ee);
    }),
    onFinishHydration: (ee) => (Q.add(ee), () => {
      Q.delete(ee);
    })
  }, P.skipHydration || de(), q || Z;
}, Q2 = (x, C) => "getStorage" in C || "serialize" in C || "deserialize" in C ? (($2 ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), W2(x, C)) : G2(x, C), U1 = Q2, ey = {
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
}, sv = A1(
  U1(
    (x, C) => ({
      features: { ...ey },
      getFeature: (S) => C().features[S],
      setFeatures: (S) => x((k) => ({
        features: { ...k.features, ...S }
      })),
      isSomeFeaturesSelected: () => {
        const { features: S } = C();
        return Object.keys(S).some((k) => S[k] !== ey[k]);
      },
      applyProfileFeatures: (S) => x(() => ({
        features: { ...ey, ...S }
      })),
      isProfileChecked: (S) => {
        const { features: k } = C();
        return Object.entries(S).every(([K, P]) => k[K] === P);
      },
      reset: () => x({ features: { ...ey } }),
      set: (S) => x((k) => ({ ...k, ...S }))
    }),
    { name: "tkFeaturesStore" }
  )
), q2 = {
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
}, X2 = (x) => /* @__PURE__ */ M.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", ...x, children: [
  /* @__PURE__ */ M.jsx("mask", { id: "circleFlagsFr0", children: /* @__PURE__ */ M.jsx("circle", { cx: "256", cy: "256", r: "256", fill: "#fff" }) }),
  /* @__PURE__ */ M.jsxs("g", { mask: "url(#circleFlagsFr0)", children: [
    /* @__PURE__ */ M.jsx("path", { fill: "#eee", d: "M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" }),
    /* @__PURE__ */ M.jsx("path", { fill: "#0052b4", d: "M0 0h167v512H0z" }),
    /* @__PURE__ */ M.jsx("path", { fill: "#d80027", d: "M345 0h167v512H345z" })
  ] })
] });
function K2(x) {
  return /* @__PURE__ */ M.jsxs("svg", { width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...x, children: [
    /* @__PURE__ */ M.jsxs("g", { clipPath: "url(#clip0_582_5480)", children: [
      /* @__PURE__ */ M.jsx("path", { d: "M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z", fill: "#F0F0F0" }),
      /* @__PURE__ */ M.jsx("path", { d: "M512 256C512 114.616 397.384 0 256 0C205.92 0 159.206 14.395 119.748 39.251L175.861 63.092L100.174 95.25L175.861 127.407L100.174 159.563L175.861 191.718L100.174 223.869L175.861 256.018L100.174 288.174L175.861 320.328L100.174 352.479L175.861 384.633L100.174 416.789L175.861 448.94L119.773 472.768C159.226 497.612 205.93 512 256 512C397.384 512 512 397.384 512 256Z", fill: "#751A46" })
    ] }),
    /* @__PURE__ */ M.jsx("defs", { children: /* @__PURE__ */ M.jsx("clipPath", { id: "clip0_582_5480", children: /* @__PURE__ */ M.jsx("rect", { width: "512", height: "512", fill: "white" }) }) })
  ] });
}
function Z2(x) {
  return /* @__PURE__ */ M.jsxs("svg", { width: "1.25em", height: "1.25em", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...x, children: [
    /* @__PURE__ */ M.jsxs("g", { clipPath: "url(#clip0_582_5992)", children: [
      /* @__PURE__ */ M.jsx("path", { d: "M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z", fill: "#F0F0F0" }),
      /* @__PURE__ */ M.jsx("path", { d: "M244.87 255.999H512C512 232.893 508.92 210.509 503.181 189.216H244.87V255.999Z", fill: "#D80027" }),
      /* @__PURE__ */ M.jsx("path", { d: "M244.87 122.434H474.426C458.755 96.8619 438.718 74.2589 415.356 55.6509H244.87V122.434Z", fill: "#D80027" }),
      /* @__PURE__ */ M.jsx("path", { d: "M256 511.999C316.249 511.999 371.626 491.175 415.356 456.347H96.644C140.374 491.175 195.751 511.999 256 511.999Z", fill: "#D80027" }),
      /* @__PURE__ */ M.jsx("path", { d: "M37.574 389.564H474.426C487.007 369.035 496.764 346.595 503.181 322.781H8.819C15.236 346.595 24.993 369.035 37.574 389.564Z", fill: "#D80027" }),
      /* @__PURE__ */ M.jsx("path", { d: "M118.584 39.977H141.913L120.213 55.742L128.502 81.251L106.803 65.486L85.104 81.251L92.264 59.214C73.158 75.129 56.412 93.775 42.612 114.551H50.087L36.274 124.586C34.122 128.176 32.058 131.823 30.08 135.524L36.676 155.825L24.37 146.884C21.311 153.365 18.513 159.992 15.998 166.757L23.265 189.125H50.087L28.387 204.89L36.676 230.399L14.977 214.634L1.979 224.078C0.678 234.536 0 245.188 0 255.999H256C256 114.615 256 97.947 256 -0.000976562C205.428 -0.000976562 158.285 14.669 118.584 39.977ZM128.502 230.399L106.803 214.634L85.104 230.399L93.393 204.89L71.693 189.125H98.515L106.803 163.616L115.091 189.125H141.913L120.213 204.89L128.502 230.399ZM120.213 130.316L128.502 155.825L106.803 140.06L85.104 155.825L93.393 130.316L71.693 114.551H98.515L106.803 89.042L115.091 114.551H141.913L120.213 130.316ZM220.328 230.399L198.629 214.634L176.93 230.399L185.219 204.89L163.519 189.125H190.341L198.629 163.616L206.917 189.125H233.739L212.039 204.89L220.328 230.399ZM212.039 130.316L220.328 155.825L198.629 140.06L176.93 155.825L185.219 130.316L163.519 114.551H190.341L198.629 89.042L206.917 114.551H233.739L212.039 130.316ZM212.039 55.742L220.328 81.251L198.629 65.486L176.93 81.251L185.219 55.742L163.519 39.977H190.341L198.629 14.468L206.917 39.977H233.739L212.039 55.742Z", fill: "#0052B4" })
    ] }),
    /* @__PURE__ */ M.jsx("defs", { children: /* @__PURE__ */ M.jsx("clipPath", { id: "clip0_582_5992", children: /* @__PURE__ */ M.jsx("rect", { y: "-0.000976562", width: "512", height: "512", fill: "white" }) }) })
  ] });
}
const j1 = [
  {
    name: "English",
    key: "en",
    Flag: Z2
  },
  {
    name: "Arabic",
    key: "ar",
    direction: "rtl",
    Flag: K2
  },
  {
    name: "Français",
    key: "fr",
    Flag: X2
  }
], J2 = "en", to = A1(
  U1(
    (x, C) => ({
      locale: J2,
      setLocale: (S) => x((k) => ({ ...k, locale: S })),
      isRTL: () => {
        const S = C(), k = j1.find((K) => K.key === S.locale);
        return k != null && k.direction ? k.direction === "rtl" : !1;
      },
      t: (S) => {
        const k = C();
        return q2[k.locale][S] || S;
      }
    }),
    { name: "tkTransStore" }
  )
);
function Qx(x) {
  var C, S, k = "";
  if (typeof x == "string" || typeof x == "number")
    k += x;
  else if (typeof x == "object")
    if (Array.isArray(x)) {
      var K = x.length;
      for (C = 0; C < K; C++)
        x[C] && (S = Qx(x[C])) && (k && (k += " "), k += S);
    } else
      for (S in x)
        x[S] && (k && (k += " "), k += S);
  return k;
}
function da() {
  for (var x, C, S = 0, k = "", K = arguments.length; S < K; S++)
    (x = arguments[S]) && (C = Qx(x)) && (k && (k += " "), k += C);
  return k;
}
const eD = () => {
  const { t: x, locale: C, setLocale: S } = to();
  return /* @__PURE__ */ M.jsxs("div", { id: "translaterView", className: "view-container", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ M.jsx("h2", { children: x("view.translater.title") }),
      /* @__PURE__ */ M.jsx("p", { children: x("view.translater.subtitle") })
    ] }),
    /* @__PURE__ */ M.jsx("div", { className: "tk-languages", children: /* @__PURE__ */ M.jsx("ul", { children: j1.map(
      (k) => /* @__PURE__ */ M.jsx("li", { children: /* @__PURE__ */ M.jsxs(
        "button",
        {
          className: da("tk-languages-item", k.key === C && "selected"),
          onClick: () => S(k.key),
          children: [
            k.Flag && /* @__PURE__ */ M.jsx(k.Flag, {}),
            k.name
          ]
        }
      ) }, k.key)
    ) }) })
  ] });
}, tD = () => {
  const { t: x } = to();
  return /* @__PURE__ */ M.jsxs("div", { id: "aboutView", className: "view-container", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ M.jsx("h2", { children: x("view.about.title") }),
      /* @__PURE__ */ M.jsx("p", { children: x("view.about.subtitle") })
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "view-content", children: [
      /* @__PURE__ */ M.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ M.jsx("h2", { children: "Introduction" }) }),
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ M.jsx("p", { children: "We understand that the internet should be accessible to anyone and we’re committed to maintaining standards that enable accessibility for everyone, in spite of their situation or ability.In line with our vision to make the web accessible for everyone, we strive to maintain the best possible accessibility standards by using the Web Content Accessibility Guidelines 2.1 (WCAG 2.1) level AA success criteria as our model.The WCAG is a set of guidelines that were established by the World Wide Web Consortium’s (W3C) Web Accessibility Initiative, that describe how to make all web content accessible to a broad range of people with disabilities.We use a web accessibility interface that helps people with disabilities to adjust our website’s UI and design to meet their specific needs." }) })
      ] }),
      /* @__PURE__ */ M.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ M.jsx("h2", { children: "Disclaimer" }) }),
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ M.jsx("p", { children: "We aim to provide the highest standards of accessibility on our website, because we understand the moral and practical importance of being compliant with the WCAG 2.1 AA standards. We perform regular scans to identify and fix any accessibility issues that may arise. Despite our best efforts to uphold the highest possible accessibility standards on our website, you may find that there may be some pages or components of our website that may fall short of accessibility standards. This may be because we have not yet identified, or are currently in the process of identifying the best possible solution for such a problem." }) })
      ] }),
      /* @__PURE__ */ M.jsxs("div", { className: "tk-content", children: [
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ M.jsx("h2", { children: "Accessibility Assistant" }) }),
        /* @__PURE__ */ M.jsx("div", { className: "tk-content__body", children: /* @__PURE__ */ M.jsx("p", { children: "To enable the accessibility assistant on our website, navigate to the accessibility icon at the corner of the page and click it. The menu will appear. You can then interact with the icons and options to suit your specific needs.We are able to make websites accessible to people with disabilities by providing specialized profiles through the Accessibility Assistant. The disability profiles supported on our website are:Blind (screen reader/braille):This profile enables people who are blind to use the website by eliminating non-essential elements from the accessibility tree. It also adjusts the website to be compatible with screen-readers such as JAWS, NVDA, and VoiceOver.Vision Impaired Profile:This profile adjusts the website so that it is accessible to people who have visual impairments by making the onscreen features more prominent and easy to read. It helps people with Glaucoma, age-related eyesight degradation, etc.Seizure secure:This profile provides various assistive features to help users with seizure disorders including pausing/stopping all animations, flashes, and multimedia.Motor Impaired:This profile significantly reduces the hassle involved in navigating a website with a keyboard. Your customers can easily use the keyboard Tab, Shift+Tab, and the Enter keys to access website elements.Focus (ADHD):This profile reduces distractions and noise, so people with ADHD and neurodevelopmental disorders can browse, read, and focus on the essential elements of a website.Dyslexia:This profile makes it easier for people with learning difficulties like Dyslexia can easily understand the content of web pages." }) })
      ] })
    ] })
  ] });
}, Fx = {
  displayAsAside: !1,
  oversizedWidget: !1,
  widgetFamilyFont: null
}, cv = A1(
  U1(
    (x, C) => ({
      settings: { ...Fx },
      getSetting: (S) => C().settings[S],
      setSettings: (S) => x((k) => ({
        settings: { ...k.settings, ...S }
      })),
      reset: () => x({ settings: { ...Fx } }),
      set: (S) => x((k) => ({ ...k, ...S }))
    }),
    { name: "tkSettingsStore" }
  )
);
function qx({
  Icon: x,
  iconSize: C = 16,
  label: S,
  steps: k,
  selectedStep: K,
  isActive: P,
  next: g,
  className: ve,
  children: Q
}) {
  const W = Xt.useId(), se = (K == null ? void 0 : K.Icon) || x, I = (K == null ? void 0 : K.iconSize) || C;
  return /* @__PURE__ */ M.jsxs("div", { className: da("tk-steps-controller", P && "tk-steps-controller--active", ve), onClick: g, children: [
    /* @__PURE__ */ M.jsxs("div", { className: "tk-steps-controller__container", children: [
      /* @__PURE__ */ M.jsx("div", { className: "tk-feature-cell__icon", children: se && /* @__PURE__ */ M.jsx(se, { size: I }) }),
      /* @__PURE__ */ M.jsx("div", { className: "tk-feature-cell__content tk-steps-controller__content", children: S })
    ] }),
    Q && /* @__PURE__ */ M.jsx("div", { className: "tk-steps-controller__more", children: Q }),
    k.length && /* @__PURE__ */ M.jsx("div", { className: "tk-steps-controller__steps", children: k.map((Z, q) => /* @__PURE__ */ M.jsx("div", { className: da("step-item", K && K.value === Z.value && "step-item--selected"), children: /* @__PURE__ */ M.jsx("span", { className: "step-item__name", children: Z.name }) }, `step-${W}-${q}`)) }),
    K && P && /* @__PURE__ */ M.jsx("div", { className: "tk-steps-controller__selected-item", children: K.name })
  ] });
}
const Za = {
  global: {
    layoutIconSize: 18,
    featuresIconSize: 24,
    settingsIconSize: 24
  },
  features: {
    textSize: {
      label: "feature.textSize",
      Icon: Dx
    },
    lineHeight: {
      label: "feature.lineHeight",
      Icon: d2
    },
    wordSpacing: {
      label: "feature.wordSpacing",
      Icon: f2
    },
    textAlign: {
      label: "feature.textAlign",
      Icon: O2
    },
    highlightTitles: {
      label: "feature.highlightTitles",
      Icon: y2
    },
    highlightLinks: {
      label: "feature.highlightLinks",
      Icon: x2
    },
    saturation: {
      label: "feature.saturation",
      Icon: kx
    },
    noTransitions: {
      label: "feature.noTransitions",
      Icon: p2
    },
    hiddenImages: {
      label: "feature.hiddenImages",
      Icon: g2
    },
    invertColors: {
      label: "feature.invertColors",
      Icon: S2
    },
    monochrome: {
      label: "feature.monochrome",
      Icon: kx
    },
    readingGuide: {
      label: "feature.readingGuide",
      Icon: _2
    },
    bigCursor: {
      label: "feature.bigCursor",
      Icon: T2
    },
    fonts: {
      label: "feature.fonts",
      Icon: u2
    }
  },
  settings: {
    displayAsAside: {
      label: "settings.option.display",
      Icon: R2
    },
    oversizedWidget: {
      label: "settings.option.oversized",
      Icon: Kk
    },
    widgetFamilyFont: {
      label: "settings.option.font",
      Icon: Dx
    }
  }
};
function nD({
  settingKey: x,
  steps: C,
  initValue: S = null,
  className: k = null
}) {
  const { t: K } = to(), { getSetting: P, setSettings: g } = cv();
  Xt.useEffect(() => {
    g({ [x]: S });
  }, [S]);
  const ve = C.find((ee) => ee.value === P(x)) || null, Q = Za.settings[x].label, W = Za.settings[x].Icon, se = Za.global.settingsIconSize, I = (ee) => ee < C.length - 1 ? C[ee + 1] : C[0], Z = (ee) => C.findIndex((ae) => ae.value === ee), q = S && ve ? ve.value == S : !1, de = () => {
    const ee = P(x);
    if ((ee ?? null) === null)
      g({ [x]: C[0].value });
    else {
      const ae = Z(ee);
      g({ [x]: I(ae).value });
    }
  };
  return /* @__PURE__ */ M.jsx("div", { className: da("tk-cell", k), children: /* @__PURE__ */ M.jsx(
    qx,
    {
      Icon: W,
      iconSize: se,
      label: K(Q),
      steps: C,
      selectedStep: ve,
      isActive: q,
      next: de,
      className: "tk-steps-controller--inline"
    }
  ) });
}
function Xx({
  Icon: x,
  iconSize: C = 16,
  label: S,
  isChecked: k,
  handleToggleChange: K,
  className: P = null,
  children: g
}) {
  const ve = Xt.useId();
  return /* @__PURE__ */ M.jsxs("div", { className: da("tk-toggle-controller", k && "tk-toggle-controller--active", P), onClick: (Q) => Q.stopPropagation(), children: [
    /* @__PURE__ */ M.jsx("input", { type: "checkbox", id: ve, checked: k, onChange: K }),
    /* @__PURE__ */ M.jsxs("label", { htmlFor: ve, children: [
      /* @__PURE__ */ M.jsxs("div", { className: "tk-toggle-controller__container", children: [
        /* @__PURE__ */ M.jsx("div", { className: "tk-feature-cell__icon", children: x && /* @__PURE__ */ M.jsx(x, { size: C }) }),
        /* @__PURE__ */ M.jsx("div", { className: "tk-feature-cell__content tk-toggle-controller__content", children: S }),
        /* @__PURE__ */ M.jsx("div", { className: "indicator", children: /* @__PURE__ */ M.jsx("div", { className: "indicator__puce" }) })
      ] }),
      g && /* @__PURE__ */ M.jsx("div", { className: "tk-toggle-controller__more", children: g })
    ] })
  ] });
}
function Hx({
  settingKey: x,
  initValue: C = !1,
  className: S = null
}) {
  const { t: k } = to(), { getSetting: K, setSettings: P } = cv(), g = Za.settings[x].label, ve = Za.settings[x].Icon, Q = Za.global.settingsIconSize;
  Xt.useEffect(() => {
    P({ [x]: C });
  }, [C]);
  const W = () => P({ [x]: !K(x) });
  return /* @__PURE__ */ M.jsx(
    Xx,
    {
      Icon: ve,
      iconSize: Q,
      label: k(g),
      isChecked: K(x),
      handleToggleChange: W,
      className: da("tk-cell", S)
    }
  );
}
const rD = () => {
  const { t: x } = to(), { settings: C } = cv(), S = [
    { name: "System", value: "" },
    { name: "Roboto", value: "roboto" },
    { name: "Montserrat", value: "montserrat" }
  ];
  return /* @__PURE__ */ M.jsxs("div", { id: "settingsView", className: "view-container", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ M.jsx("h2", { children: x("view.settings.title") }),
      /* @__PURE__ */ M.jsx("p", { children: x("view.settings.subtitle") })
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "tk-content", children: [
      /* @__PURE__ */ M.jsx("div", { className: "tk-content__head", children: /* @__PURE__ */ M.jsx("h2", { children: x("view.settings.interface.title") }) }),
      /* @__PURE__ */ M.jsxs("div", { className: "tk-content__body tk-cells-column", children: [
        /* @__PURE__ */ M.jsx(
          Hx,
          {
            settingKey: "displayAsAside",
            initValue: C.displayAsAside
          }
        ),
        /* @__PURE__ */ M.jsx(
          Hx,
          {
            settingKey: "oversizedWidget",
            initValue: C.oversizedWidget
          }
        ),
        /* @__PURE__ */ M.jsx(
          nD,
          {
            settingKey: "widgetFamilyFont",
            steps: S,
            initValue: C.widgetFamilyFont
          }
        )
      ] })
    ] })
  ] });
};
function aD({
  profile: x,
  className: C = null
}) {
  const { applyProfileFeatures: S, isProfileChecked: k, reset: K } = sv(), P = Xt.useId(), g = Za.global.featuresIconSize, ve = k(x.features), Q = () => ve ? K() : S(x.features);
  return /* @__PURE__ */ M.jsxs("div", { className: da("tk-cell tk-profile-switch highlight-if-has-checked", C), onClick: (W) => W.stopPropagation(), children: [
    /* @__PURE__ */ M.jsx("input", { type: "checkbox", id: P, checked: ve, onChange: Q }),
    /* @__PURE__ */ M.jsxs("label", { htmlFor: P, children: [
      /* @__PURE__ */ M.jsxs("div", { className: "tk-profile-switch__container", children: [
        x.Icon ? /* @__PURE__ */ M.jsx(x.Icon, { size: g }) : /* @__PURE__ */ M.jsx(Yx, { size: g }),
        /* @__PURE__ */ M.jsxs("div", { className: "tk-profile-switch__content tk-flex tk-flex-col tk-gap-1", children: [
          /* @__PURE__ */ M.jsx("div", { className: "tk-font-semibold", children: x.title }),
          /* @__PURE__ */ M.jsx("div", { children: x.shortDescription })
        ] }),
        /* @__PURE__ */ M.jsx("div", { className: "indicator", children: /* @__PURE__ */ M.jsx("div", { className: "indicator__puce" }) })
      ] }),
      ve && x.description && /* @__PURE__ */ M.jsx("div", { className: "tk-profile-switch__more", children: x.description })
    ] })
  ] });
}
const iD = ({ title: x, Icon: C, className: S, children: k }) => {
  const [K, P] = Xt.useState(!1);
  return /* @__PURE__ */ M.jsxs("div", { className: da("tk-accordion", "rounded-md p-2 mb-1", S), children: [
    /* @__PURE__ */ M.jsxs(
      "div",
      {
        className: "tk-accordion__head tk-text-lg tk-p-2 tk-flex tk-items-center tk-justify-between",
        onClick: () => P(!K),
        children: [
          /* @__PURE__ */ M.jsxs("h3", { className: "tk-accordion__head__title", children: [
            C && /* @__PURE__ */ M.jsx(C, { size: 18 }),
            x
          ] }),
          /* @__PURE__ */ M.jsx(c2, { className: da("tk-origin-center", K && "tk-rotate-90") })
        ]
      }
    ),
    K && /* @__PURE__ */ M.jsx("div", { className: "tk-accordion__content tk-mt-2", children: k })
  ] });
}, lD = [
  {
    id: 1,
    title: "Motor Impaired",
    shortDescription: "Manipulating a mouse and keyboard to navigate sites",
    description: "Manipulating a mouse and keyboard to navigate sites isn’t always easy for people with motor impairments. UserWay consults with motor-impaired individuals to develop tools that can help. This profile provides options that can make site navigation much less complicated.",
    Icon: Zk,
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
    Icon: l2,
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
    Icon: h2,
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
    Icon: E2,
    checked: !1,
    enable: !0,
    features: { noTransitions: !0, fonts: "dyslexia" }
  },
  {
    id: 5,
    title: "Visually-impaired",
    shortDescription: "",
    description: "There are a number of adjustments that can make websites easier to navigate and read for people with impaired vision. This profile provides suggestions that can be helpful for a variety of conditions.",
    Icon: m2,
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
    Icon: D2,
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
    Icon: o2,
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
    Icon: v2,
    checked: !1,
    enable: !0,
    // Play Animation | Reading Mask | Low saturation!
    features: { monochrome: !0, noTransitions: !0, readingGuide: !0 }
  }
], oD = ({ className: x }) => {
  const { t: C } = to(), S = lD.filter((k) => k.enable);
  return /* @__PURE__ */ M.jsx(iD, { className: da("widget-section", x), title: C("profile.section.title"), Icon: Yx, children: /* @__PURE__ */ M.jsx("div", { className: "tk-cells-column", children: S.map(
    (k) => /* @__PURE__ */ M.jsx(aD, { profile: k }, k.id)
  ) }) });
};
function ic({
  featureKey: x,
  initValue: C = !1,
  className: S = null
}) {
  const { t: k } = to(), { getFeature: K, setFeatures: P } = sv(), g = Za.features[x].label, ve = Za.features[x].Icon, Q = Za.global.featuresIconSize;
  Xt.useEffect(() => {
    P({ [x]: C });
  }, [C]);
  const W = K(x), se = () => P({ [x]: !K(x) });
  return /* @__PURE__ */ M.jsx(
    Xx,
    {
      Icon: ve,
      iconSize: Q,
      label: k(g),
      isChecked: W,
      handleToggleChange: se,
      className: da("tk-feature-cell", W && "tk-active", S)
    }
  );
}
class uD {
  warn(C) {
    const S = "Accessibility: ";
    console.warn ? console.warn(S + C) : console.log(S + C);
  }
  getDataInitAttr(C) {
    return `data-init-${C.toLowerCase()}`;
  }
  // return height in percentage
  getElementLineHeightInPercent(C) {
    const S = getComputedStyle(C).fontSize, K = getComputedStyle(C).lineHeight.replace("px", ""), P = S.replace("px", "");
    return parseInt(K) * 100 / parseInt(P);
  }
  getFormattedDim(C) {
    C = String(C);
    const S = function(k, K) {
      return {
        size: k.substring(0, k.indexOf(K)),
        suffix: K
      };
    };
    if (C.indexOf("%") > -1)
      return S(C, "%");
    if (C.indexOf("px") > -1)
      return S(C, "px");
    if (C.indexOf("em") > -1)
      return S(C, "em");
    if (C.indexOf("rem") > -1)
      return S(C, "rem");
    if (C.indexOf("pt") > -1)
      return S(C, "pt");
    if (C === "auto")
      return S(C, "");
    throw Error(`Invalid dimension format ${C}`);
  }
}
class sD {
  constructor(C = {}) {
    eo(this, "_html");
    eo(this, "_body");
    eo(this, "_allElms");
    eo(this, "_options");
    eo(this, "options");
    eo(this, "_initValues");
    eo(this, "_defaultStateValues");
    eo(this, "_sessionState");
    eo(this, "_common");
    this._html = document.documentElement || document.getElementsByTagName("html")[0], this._body = document.body || document.getElementsByTagName("body")[0], this._allElms = document.querySelectorAll("body :not(#a11yRoot, #a11yRoot *, script, style)"), this._common = new uD(), this._options = this.defaultOptions, this.options = { ...this._options, ...C }, this._initValues = {
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
  set sessionState(C) {
    this._sessionState = C;
  }
  initData() {
    this.initFontSize(), this.initLineHeight(), this.initBg();
  }
  initFontSize() {
    if (this.options.textSizeMode === "EM") {
      const C = this._common.getFormattedDim(getComputedStyle(this._html).fontSize), S = this._common.getFormattedDim(getComputedStyle(this._body).fontSize);
      if (C && S) {
        const k = String(C.size / 16 * 100);
        this._initValues.html && (this._initValues.html.fontSize = `${k}%`), this._html.style.fontSize = `${k}%`;
      }
    }
  }
  initLineHeight() {
    const C = this._common.getElementLineHeightInPercent(this._html);
    this.options.textSizeMode === "EM" && C && (this._html.style.lineHeight = `${C}%`, this._initValues.html && (this._initValues.html.lineHeight = `${C}%`));
  }
  initBg() {
    this._html.style.backgroundColor = "rgba(255, 255, 255, 100)";
  }
  // fontSize | lineHeight | wordSpacing...........................................
  alterProperty(C, S = 0) {
    var K;
    const k = {
      fontSize: { PIXEL: { factor: 2, default: 100 }, EM: { factor: 10, default: 100 } },
      lineHeight: { PIXEL: { factor: 2, default: 100 }, EM: { factor: 10, default: 150 } },
      wordSpacing: { PIXEL: { factor: 1, default: 0 }, EM: { factor: 1, default: 0 } }
    };
    if (this.options.textSizeMode === "PIXEL" || ["wordSpacing"].includes(C))
      for (let P = 0; P < this._allElms.length; P++) {
        const g = getComputedStyle(this._allElms[P])[C];
        if (g && g.indexOf("px") > -1) {
          const ve = this._common.getDataInitAttr(C);
          this._allElms[P].getAttribute(ve) || this._allElms[P].setAttribute(ve, g);
          const Q = ((K = this._allElms[P].getAttribute(ve)) == null ? void 0 : K.replace("px", "")) || g, W = parseInt(Q) + S * k[C].PIXEL.factor;
          this._allElms[P].style[C] = `${String(W)}px`;
        }
      }
    else if (this.options.textSizeMode === "EM") {
      const g = 1 * k[C].EM.default + S * k[C].EM.factor;
      this._html.style[C] = `${g}%`;
    }
  }
  alterFilter(C, S) {
    this._sessionState.filter[C] = S;
    const k = this.getFilterValues();
    this.rootElementToggleClass(k.filters !== "", "tk-no-trans"), this._html.style.filter = k.filters, document.querySelector(".a11y-turnkey") && (document.querySelector(".a11y-turnkey").style.filter = k.invertFilter);
  }
  getFilterValues() {
    const C = [], S = [], k = {
      default: 1,
      low: 0.5,
      high: 3,
      desaturate: 0
    };
    return this._sessionState.filter.saturation !== this._defaultStateValues.filter.saturation && C.push(`saturate(${k[this._sessionState.filter.saturation]})`), this._sessionState.filter.invertColors !== this._defaultStateValues.filter.invertColors && (C.push(`invert(${this._sessionState.filter.invertColors ? "1" : "0"})`), S.push(`invert(${this._sessionState.filter.invertColors ? "1" : "0"})`)), this._sessionState.filter.grayscale !== this._defaultStateValues.filter.grayscale && C.push(`grayscale(${this._sessionState.filter.grayscale ? "1" : "0"})`), {
      filters: C.join(" "),
      invertFilter: S.join(" ")
    };
  }
  enableReadingGuide(C = !1) {
    let S = document.querySelector(".access-read-guide-bar");
    S || (S = document.createElement("div"), S.classList.add("access-read-guide-bar"), document.body.appendChild(S)), S.style.display = C ? "block" : "none";
    const k = (K) => {
      if (S) {
        const P = K.pageY + 2;
        S.style.top = P + "px";
      }
    };
    C ? document.addEventListener("mousemove", k) : document.removeEventListener("mousemove", k);
  }
  enableBigCursor(C = !1) {
    this.rootElementToggleClass(C, "_access_cursor");
  }
  enableEnableDyslexie(C = !1) {
    this.rootElementToggleClass(C, "tk-dy");
  }
  enableHighlightTitles(C = !1) {
    this.rootElementToggleClass(C, "tk-hltl");
  }
  enableHighlightLinks(C = !1) {
    this.rootElementToggleClass(C, "tk-hllk");
  }
  enableHiddenImages(C = !1) {
    this.rootElementToggleClass(C, "tk-hidden-img");
  }
  enableNoTransitions(C = !1) {
    this.rootElementToggleClass(C, "tk-no-trans");
  }
  rootElementToggleClass(C = !1, S) {
    C ? this._html.classList.add(S) : this._html.classList.remove(S);
  }
  alterFonts(C) {
    const S = ["tk-fonts--dyslexia", "tk-fonts--legible"];
    this.useOneOfClassList(`tk-fonts--${C}`, S);
  }
  textAlignSwitchClass(C) {
    const S = ["tk-align-initial", "tk-align-justify", "tk-align-left", "tk-align-right", "tk-align-center"];
    this.useOneOfClassList(`tk-align-${C}`, S);
  }
  useOneOfClassList(C, S) {
    this._html.classList.remove(...S), C && this._html.classList.add(C);
  }
}
function Gf({
  featureKey: x,
  steps: C,
  initValue: S = null,
  className: k = null
}) {
  const { t: K } = to(), { getFeature: P, setFeatures: g } = sv(), ve = Za.features[x].label, Q = Za.features[x].Icon, W = Za.global.featuresIconSize;
  Xt.useEffect(() => {
    g({ [x]: S });
  }, [S]);
  const se = C.find((ee) => ee.value === P(x)) || null, I = (ee) => ee < C.length - 1 ? C[ee + 1] : C[0], Z = (ee) => C.findIndex((ae) => ae.value === ee), q = S && se ? se.value == S : !1, de = () => {
    const ee = P(x);
    if ((ee ?? null) === null)
      g({ [x]: C[0].value });
    else {
      const ae = Z(ee);
      g({ [x]: I(ae).value });
    }
  };
  return /* @__PURE__ */ M.jsx("div", { className: da("tk-feature-cell", q && "tk-active", k), children: /* @__PURE__ */ M.jsx(
    qx,
    {
      Icon: Q,
      iconSize: W,
      label: K(ve),
      steps: C,
      selectedStep: se,
      isActive: q,
      next: de,
      className: "tk-steps-controller--vertical-demo"
    }
  ) });
}
const cD = (window == null ? void 0 : window.AccessibilityTurnkeyOptions) || {}, Ka = new sD(cD), fD = () => {
  const { settings: x } = cv(), [C, S] = Xt.useState(!1);
  Xt.useEffect(() => {
    S(x.oversizedWidget);
  }, [x.oversizedWidget]);
  const { features: k } = sv();
  Xt.useEffect(() => {
    Ka.alterProperty("fontSize", k.textSize);
  }, [k.textSize]), Xt.useEffect(() => {
    Ka.alterProperty("lineHeight", k.lineHeight);
  }, [k.lineHeight]), Xt.useEffect(() => {
    Ka.alterProperty("wordSpacing", k.wordSpacing);
  }, [k.wordSpacing]), Xt.useEffect(() => {
    Ka.enableHighlightTitles(k.highlightTitles);
  }, [k.highlightTitles]), Xt.useEffect(() => {
    Ka.enableHighlightLinks(k.highlightLinks);
  }, [k.highlightLinks]), Xt.useEffect(() => {
    Ka.textAlignSwitchClass(k.textAlign);
  }, [k.textAlign]), Xt.useEffect(() => {
    Ka.enableHiddenImages(k.hiddenImages);
  }, [k.hiddenImages]), Xt.useEffect(() => {
    Ka.alterFilter("invertColors", k.invertColors);
  }, [k.invertColors]), Xt.useEffect(() => {
    Ka.alterFilter("grayscale", k.monochrome);
  }, [k.monochrome]), Xt.useEffect(() => {
    Ka.alterFilter("saturation", k.saturation || "default");
  }, [k.saturation]), Xt.useEffect(() => {
    Ka.enableReadingGuide(k.readingGuide);
  }, [k.readingGuide]), Xt.useEffect(() => {
    Ka.alterFonts(k.fonts);
  }, [k.fonts]), Xt.useEffect(() => {
    Ka.enableNoTransitions(k.noTransitions);
  }, [k.noTransitions]), Xt.useEffect(() => {
    Ka.enableBigCursor(k.bigCursor);
  }, [k.bigCursor]);
  const K = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], P = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], g = [
    { name: "Small", value: -2, iconSize: 14 },
    { name: "", value: 0, iconSize: 16 },
    { name: "Big", value: 2, iconSize: 18 },
    { name: "Bigger", value: 4, iconSize: 20 }
  ], ve = [
    { name: "Left", value: "left", Icon: t2 },
    { name: "Right", value: "right", Icon: n2 },
    { name: "Center", value: "center", Icon: Jk },
    { name: "Justify", value: "justify", Icon: e2 }
  ], Q = [
    { name: "Low", value: "low" },
    { name: "High", value: "high" },
    { name: "Desaturate", value: "desaturate" },
    { name: "Default", value: "default" }
  ], W = [
    { name: "Dyslexia", value: "dyslexia" },
    { name: "Legible", value: "legible" }
  ];
  return /* @__PURE__ */ M.jsx("div", { className: "widget-section", children: /* @__PURE__ */ M.jsxs("div", { className: da("tk-grid", C && "tk-grid--xl"), children: [
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "textSize",
        steps: K,
        initValue: k.textSize
      }
    ),
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "lineHeight",
        steps: P,
        initValue: k.lineHeight
      }
    ),
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "wordSpacing",
        steps: g,
        initValue: k.wordSpacing
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "highlightTitles",
        initValue: k.highlightTitles,
        className: "compact"
      }
    ),
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "textAlign",
        steps: ve,
        initValue: k.textAlign
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "highlightLinks",
        initValue: k.highlightLinks,
        className: "compact"
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "invertColors",
        initValue: k.invertColors,
        className: "compact"
      }
    ),
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "saturation",
        initValue: k.saturation,
        steps: Q,
        className: "tk-span-2"
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "noTransitions",
        initValue: k.noTransitions,
        className: "compact"
      }
    ),
    /* @__PURE__ */ M.jsx(
      Gf,
      {
        featureKey: "fonts",
        initValue: k.fonts,
        steps: W
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "hiddenImages",
        initValue: k.hiddenImages,
        className: "compact"
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "bigCursor",
        initValue: k.bigCursor,
        className: "compact tk-span-2"
      }
    ),
    /* @__PURE__ */ M.jsx(
      ic,
      {
        featureKey: "readingGuide",
        initValue: k.readingGuide,
        className: "compact"
      }
    )
  ] }) });
}, dD = ({ enableProfiles: x = !0 }) => {
  const { t: C } = to();
  return /* @__PURE__ */ M.jsxs("div", { id: "mainView", className: "view-container view-container--full", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "view-container__head", children: [
      /* @__PURE__ */ M.jsx("h2", { className: "widget__body__title", children: C("global.title") }),
      /* @__PURE__ */ M.jsx("p", { children: "Adapt this site according to your preferences." })
    ] }),
    x && /* @__PURE__ */ M.jsx(oD, {}),
    /* @__PURE__ */ M.jsx(fD, {})
  ] });
}, pD = "#1e74e9", vD = "#f2f7fa", hD = "#EFEFEF", mD = "#FFFFFF", yD = "#100F0F", Go = {
  primaryColor: pD,
  secondaryColor: vD,
  tertiaryColor: hD,
  quaternaryColor: mD,
  textColor: yD,
  xPosEntrypoint: 12,
  yPosEntrypoint: 12
}, gD = ({
  primaryColor: x = Go.primaryColor,
  secondaryColor: C = Go.secondaryColor,
  tertiaryColor: S = Go.tertiaryColor,
  quaternaryColor: k = Go.quaternaryColor,
  textColor: K = Go.textColor,
  xPosEntrypoint: P = Go.xPosEntrypoint,
  yPosEntrypoint: g = Go.yPosEntrypoint
}) => {
  document.documentElement.style.setProperty("--tk-primary-color", x), document.documentElement.style.setProperty("--tk-secondary-color", C), document.documentElement.style.setProperty("--tk-tertiary-color", S), document.documentElement.style.setProperty("--tk-quaternary-color", k), document.documentElement.style.setProperty("--tk-text-color", K), document.documentElement.style.setProperty("--tk-entrypoint-x", `${P}px`), document.documentElement.style.setProperty("--tk-entrypoint-y", `${g}px`);
};
function SD({
  enableProfiles: x = !0,
  enableAboutView: C = !0,
  theme: S = Go
}) {
  Xt.useLayoutEffect(() => gD(S), [S]);
  const { locale: k, t: K, isRTL: P } = to(), g = j1.find((oe) => oe.key === k), { settings: ve } = cv(), Q = Za.global.layoutIconSize, [W, se] = Xt.useState(!1), [I, Z] = Xt.useState(!1), [q, de] = Xt.useState("main"), { isSomeFeaturesSelected: ee, reset: ae } = sv(), Xe = () => {
    ae();
  }, pe = () => ({
    main: /* @__PURE__ */ M.jsx(dD, { enableProfiles: x }),
    translater: /* @__PURE__ */ M.jsx(eD, {}),
    settings: /* @__PURE__ */ M.jsx(rD, {}),
    about: /* @__PURE__ */ M.jsx(tD, {})
  })[q];
  return /* @__PURE__ */ M.jsxs("div", { className: da("a11y-turnkey", I && "left-display", P() && "tk-rtl"), children: [
    /* @__PURE__ */ M.jsxs("button", { className: "a11y-turnkey__entrypoint", onClick: () => se((oe) => !oe), children: [
      /* @__PURE__ */ M.jsx(b2, { color: "white", size: 32 }),
      ee() && /* @__PURE__ */ M.jsx("span", { className: "a11y-turnkey__entrypoint__ischeck", children: /* @__PURE__ */ M.jsx(s2, { size: 12, color: "#1e74e9" }) })
    ] }),
    /* @__PURE__ */ M.jsx("div", { className: da("overlay", ve.displayAsAside && "overlay--aside", W && "overlay--active"), children: /* @__PURE__ */ M.jsxs("div", { className: da("widget", ve.oversizedWidget && "widget--xl", ve.widgetFamilyFont && `use-${ve.widgetFamilyFont}`, W && "widget--active"), children: [
      /* @__PURE__ */ M.jsxs("div", { className: "widget__header", children: [
        /* @__PURE__ */ M.jsxs("div", { className: "tk-center-align jc-left", children: [
          q !== "main" && /* @__PURE__ */ M.jsxs("button", { className: "tk-btn", onClick: () => de("main"), children: [
            (g == null ? void 0 : g.direction) === "rtl" ? /* @__PURE__ */ M.jsx(i2, { size: Q }) : /* @__PURE__ */ M.jsx(r2, { size: Q }),
            /* @__PURE__ */ M.jsx("span", { children: K("global.back") })
          ] }),
          q !== "translater" && g && /* @__PURE__ */ M.jsxs("div", { className: "tk-btn", onClick: () => de("translater"), children: [
            g.Flag && /* @__PURE__ */ M.jsx(g.Flag, {}),
            /* @__PURE__ */ M.jsx("span", { children: g.name })
          ] })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { className: "tk-center-align jc-right", children: [
          /* @__PURE__ */ M.jsx("button", { className: "tk-btn", onClick: () => Z((oe) => !oe), children: /* @__PURE__ */ M.jsx(a2, { size: Q }) }),
          /* @__PURE__ */ M.jsx("button", { className: "tk-btn", onClick: () => de("settings"), children: /* @__PURE__ */ M.jsx(k2, { size: Q }) }),
          /* @__PURE__ */ M.jsx("button", { className: "tk-btn", onClick: () => se((oe) => !oe), children: /* @__PURE__ */ M.jsx(L2, { size: Q }) })
        ] })
      ] }),
      /* @__PURE__ */ M.jsx("div", { className: "widget__body", children: pe() }),
      /* @__PURE__ */ M.jsxs("div", { className: "widget__footer", children: [
        /* @__PURE__ */ M.jsx("div", { className: "tk-center-align jc-left", children: q === "main" && /* @__PURE__ */ M.jsxs("button", { className: "tk-btn", onClick: Xe, children: [
          /* @__PURE__ */ M.jsx(w2, { size: Q }),
          /* @__PURE__ */ M.jsx("span", { children: K("global.resetAllSettings") })
        ] }) }),
        /* @__PURE__ */ M.jsx("div", { className: "tk-center-align jc-right", children: C && /* @__PURE__ */ M.jsx("button", { className: "tk-btn", onClick: () => de("about"), children: /* @__PURE__ */ M.jsx(C2, { size: Q }) }) })
      ] })
    ] }) })
  ] });
}
const Vx = "a11yRoot", Px = {
  appSettings: {
    enableProfiles: !0,
    enableAboutView: !0,
    theme: {
      ...Go
    }
  }
}, RD = (x) => {
  const C = document.querySelector(`#${Vx}`);
  C && C.remove();
  const S = {
    appSettings: {
      ...Px.appSettings,
      ...x && x.appSettings,
      theme: {
        ...Px.appSettings.theme,
        ...x && x.appSettings.theme
      }
    }
  };
  S && (window.AccessibilityTurnkeyOptions = S);
  const k = document.createElement("div");
  k.setAttribute("id", Vx), document.body.appendChild(k), ov.createRoot(k).render(/* @__PURE__ */ M.jsx(SD, { ...S.appSettings }));
};
export {
  SD as default,
  RD as loadAccessibilityTurnkey
};
