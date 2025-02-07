(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function us(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const le = {},
  Qt = [],
  He = () => {},
  Bl = () => !1,
  or = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  fs = (e) => e.startsWith("onUpdate:"),
  we = Object.assign,
  ds = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Hl = Object.prototype.hasOwnProperty,
  J = (e, t) => Hl.call(e, t),
  D = Array.isArray,
  Xt = (e) => Rn(e) === "[object Map]",
  ir = (e) => Rn(e) === "[object Set]",
  Hs = (e) => Rn(e) === "[object Date]",
  V = (e) => typeof e == "function",
  _e = (e) => typeof e == "string",
  At = (e) => typeof e == "symbol",
  se = (e) => e !== null && typeof e == "object",
  Zo = (e) => (se(e) || V(e)) && V(e.then) && V(e.catch),
  ei = Object.prototype.toString,
  Rn = (e) => ei.call(e),
  Vl = (e) => Rn(e).slice(8, -1),
  ti = (e) => Rn(e) === "[object Object]",
  hs = (e) =>
    _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Un = us(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  lr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  zl = /-(\w)/g,
  lt = lr((e) => e.replace(zl, (t, n) => (n ? n.toUpperCase() : ""))),
  Kl = /\B([A-Z])/g,
  on = lr((e) => e.replace(Kl, "-$1").toLowerCase()),
  cr = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Or = lr((e) => (e ? `on${cr(e)}` : "")),
  Ct = (e, t) => !Object.is(e, t),
  Bn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Jn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  vn = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Vs;
const ni = () =>
  Vs ||
  (Vs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function ps(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = _e(r) ? Jl(r) : ps(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (_e(e) || se(e)) return e;
}
const ql = /;(?![^(]*\))/g,
  Gl = /:([^]+)/,
  Wl = /\/\*[^]*?\*\//g;
function Jl(e) {
  const t = {};
  return (
    e
      .replace(Wl, "")
      .split(ql)
      .forEach((n) => {
        if (n) {
          const r = n.split(Gl);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Et(e) {
  let t = "";
  if (_e(e)) t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const r = Et(e[n]);
      r && (t += r + " ");
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ql =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Xl = us(Ql);
function ri(e) {
  return !!e || e === "";
}
function Yl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = Ut(e[r], t[r]);
  return n;
}
function Ut(e, t) {
  if (e === t) return !0;
  let n = Hs(e),
    r = Hs(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = At(e)), (r = At(t)), n || r)) return e === t;
  if (((n = D(e)), (r = D(t)), n || r)) return n && r ? Yl(e, t) : !1;
  if (((n = se(e)), (r = se(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        c = t.hasOwnProperty(i);
      if ((l && !c) || (!l && c) || !Ut(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((n) => Ut(n, t));
}
const it = (e) =>
    _e(e)
      ? e
      : e == null
      ? ""
      : D(e) || (se(e) && (e.toString === ei || !V(e.toString)))
      ? JSON.stringify(e, si, 2)
      : String(e),
  si = (e, t) =>
    t && t.__v_isRef
      ? si(e, t.value)
      : Xt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[Ar(r, o) + " =>"] = s), n),
            {}
          ),
        }
      : ir(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ar(n)) }
      : At(t)
      ? Ar(t)
      : se(t) && !D(t) && !ti(t)
      ? String(t)
      : t,
  Ar = (e, t = "") => {
    var n;
    return At(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let We;
class ec {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = We),
      !t && We && (this.index = (We.scopes || (We.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = We;
      try {
        return (We = this), t();
      } finally {
        We = n;
      }
    }
  }
  on() {
    We = this;
  }
  off() {
    We = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function tc(e, t = We) {
  t && t.active && t.effects.push(e);
}
function nc() {
  return We;
}
let jt;
class ms {
  constructor(t, n, r, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      tc(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Ht();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (rc(n.computed), this._dirtyLevel >= 2)) break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Vt();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = St,
      n = jt;
    try {
      return (St = !0), (jt = this), this._runnings++, zs(this), this.fn();
    } finally {
      Ks(this), this._runnings--, (jt = n), (St = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (zs(this),
      Ks(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function rc(e) {
  return e.value;
}
function zs(e) {
  e._trackId++, (e._depsLength = 0);
}
function Ks(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) oi(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function oi(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let St = !0,
  Ur = 0;
const ii = [];
function Ht() {
  ii.push(St), (St = !1);
}
function Vt() {
  const e = ii.pop();
  St = e === void 0 ? !0 : e;
}
function gs() {
  Ur++;
}
function _s() {
  for (Ur--; !Ur && Br.length; ) Br.shift()();
}
function li(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && oi(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Br = [];
function ci(e, t, n) {
  gs();
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel;
      (r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger());
    }
  ai(e), _s();
}
function ai(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Br.push(t.scheduler));
}
const ui = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Hr = new WeakMap(),
  Ft = Symbol(""),
  Vr = Symbol("");
function Me(e, t, n) {
  if (St && jt) {
    let r = Hr.get(e);
    r || Hr.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = ui(() => r.delete(n)))), li(jt, s);
  }
}
function at(e, t, n, r, s, o) {
  const i = Hr.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && D(e)) {
    const c = Number(r);
    i.forEach((u, a) => {
      (a === "length" || (!At(a) && a >= c)) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        D(e)
          ? hs(n) && l.push(i.get("length"))
          : (l.push(i.get(Ft)), Xt(e) && l.push(i.get(Vr)));
        break;
      case "delete":
        D(e) || (l.push(i.get(Ft)), Xt(e) && l.push(i.get(Vr)));
        break;
      case "set":
        Xt(e) && l.push(i.get(Ft));
        break;
    }
  gs();
  for (const c of l) c && ci(c, 2);
  _s();
}
const sc = us("__proto__,__v_isRef,__isVue"),
  fi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(At)
  ),
  qs = oc();
function oc() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = X(this);
        for (let o = 0, i = this.length; o < i; o++) Me(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(X)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ht(), gs();
        const r = X(this)[t].apply(this, n);
        return _s(), Vt(), r;
      };
    }),
    e
  );
}
function ic(e) {
  const t = X(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class di {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, r) {
    const s = this._isReadonly,
      o = this._shallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (s ? (o ? bc : gi) : o ? mi : pi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = D(t);
    if (!s) {
      if (i && J(qs, n)) return Reflect.get(qs, n, r);
      if (n === "hasOwnProperty") return ic;
    }
    const l = Reflect.get(t, n, r);
    return (At(n) ? fi.has(n) : sc(n)) || (s || Me(t, "get", n), o)
      ? l
      : ke(l)
      ? i && hs(n)
        ? l
        : l.value
      : se(l)
      ? s
        ? _i(l)
        : Ve(l)
      : l;
  }
}
class hi extends di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._shallow) {
      const c = en(o);
      if (
        (!Qn(r) && !en(r) && ((o = X(o)), (r = X(r))), !D(t) && ke(o) && !ke(r))
      )
        return c ? !1 : ((o.value = r), !0);
    }
    const i = D(t) && hs(n) ? Number(n) < t.length : J(t, n),
      l = Reflect.set(t, n, r, s);
    return (
      t === X(s) && (i ? Ct(r, o) && at(t, "set", n, r) : at(t, "add", n, r)), l
    );
  }
  deleteProperty(t, n) {
    const r = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && at(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!At(n) || !fi.has(n)) && Me(t, "has", n), r;
  }
  ownKeys(t) {
    return Me(t, "iterate", D(t) ? "length" : Ft), Reflect.ownKeys(t);
  }
}
class lc extends di {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const cc = new hi(),
  ac = new lc(),
  uc = new hi(!0),
  ys = (e) => e,
  ar = (e) => Reflect.getPrototypeOf(e);
function Mn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = X(e),
    o = X(t);
  n || (Ct(t, o) && Me(s, "get", t), Me(s, "get", o));
  const { has: i } = ar(s),
    l = r ? ys : n ? ws : wn;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function kn(e, t = !1) {
  const n = this.__v_raw,
    r = X(n),
    s = X(e);
  return (
    t || (Ct(e, s) && Me(r, "has", e), Me(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function $n(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Me(X(e), "iterate", Ft), Reflect.get(e, "size", e)
  );
}
function Gs(e) {
  e = X(e);
  const t = X(this);
  return ar(t).has.call(t, e) || (t.add(e), at(t, "add", e, e)), this;
}
function Ws(e, t) {
  t = X(t);
  const n = X(this),
    { has: r, get: s } = ar(n);
  let o = r.call(n, e);
  o || ((e = X(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? Ct(t, i) && at(n, "set", e, t) : at(n, "add", e, t), this
  );
}
function Js(e) {
  const t = X(this),
    { has: n, get: r } = ar(t);
  let s = n.call(t, e);
  s || ((e = X(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && at(t, "delete", e, void 0), o;
}
function Qs() {
  const e = X(this),
    t = e.size !== 0,
    n = e.clear();
  return t && at(e, "clear", void 0, void 0), n;
}
function jn(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      l = X(i),
      c = t ? ys : e ? ws : wn;
    return (
      !e && Me(l, "iterate", Ft), i.forEach((u, a) => r.call(s, c(u), c(a), o))
    );
  };
}
function Fn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = X(s),
      i = Xt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      u = s[e](...r),
      a = n ? ys : t ? ws : wn;
    return (
      !t && Me(o, "iterate", c ? Vr : Ft),
      {
        next() {
          const { value: f, done: p } = u.next();
          return p
            ? { value: f, done: p }
            : { value: l ? [a(f[0]), a(f[1])] : a(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function pt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fc() {
  const e = {
      get(o) {
        return Mn(this, o);
      },
      get size() {
        return $n(this);
      },
      has: kn,
      add: Gs,
      set: Ws,
      delete: Js,
      clear: Qs,
      forEach: jn(!1, !1),
    },
    t = {
      get(o) {
        return Mn(this, o, !1, !0);
      },
      get size() {
        return $n(this);
      },
      has: kn,
      add: Gs,
      set: Ws,
      delete: Js,
      clear: Qs,
      forEach: jn(!1, !0),
    },
    n = {
      get(o) {
        return Mn(this, o, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return kn.call(this, o, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: jn(!0, !1),
    },
    r = {
      get(o) {
        return Mn(this, o, !0, !0);
      },
      get size() {
        return $n(this, !0);
      },
      has(o) {
        return kn.call(this, o, !0);
      },
      add: pt("add"),
      set: pt("set"),
      delete: pt("delete"),
      clear: pt("clear"),
      forEach: jn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Fn(o, !1, !1)),
        (n[o] = Fn(o, !0, !1)),
        (t[o] = Fn(o, !1, !0)),
        (r[o] = Fn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [dc, hc, pc, mc] = fc();
function bs(e, t) {
  const n = t ? (e ? mc : pc) : e ? hc : dc;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(J(n, s) && s in r ? n : r, s, o);
}
const gc = { get: bs(!1, !1) },
  _c = { get: bs(!1, !0) },
  yc = { get: bs(!0, !1) },
  pi = new WeakMap(),
  mi = new WeakMap(),
  gi = new WeakMap(),
  bc = new WeakMap();
function vc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vc(Vl(e));
}
function Ve(e) {
  return en(e) ? e : vs(e, !1, cc, gc, pi);
}
function xc(e) {
  return vs(e, !1, uc, _c, mi);
}
function _i(e) {
  return vs(e, !0, ac, yc, gi);
}
function vs(e, t, n, r, s) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = wc(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function Yt(e) {
  return en(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function en(e) {
  return !!(e && e.__v_isReadonly);
}
function Qn(e) {
  return !!(e && e.__v_isShallow);
}
function yi(e) {
  return Yt(e) || en(e);
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function bi(e) {
  return Jn(e, "__v_skip", !0), e;
}
const wn = (e) => (se(e) ? Ve(e) : e),
  ws = (e) => (se(e) ? _i(e) : e);
class vi {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ms(
        () => t(this._value),
        () => Hn(this, 1),
        () => this.dep && ai(this.dep)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = X(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Ct(t._value, (t._value = t.effect.run())) &&
        Hn(t, 2),
      wi(t),
      t.effect._dirtyLevel >= 1 && Hn(t, 1),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Ec(e, t, n = !1) {
  let r, s;
  const o = V(e);
  return (
    o ? ((r = e), (s = He)) : ((r = e.get), (s = e.set)),
    new vi(r, s, o || !s, n)
  );
}
function wi(e) {
  St &&
    jt &&
    ((e = X(e)),
    li(
      jt,
      e.dep ||
        (e.dep = ui(() => (e.dep = void 0), e instanceof vi ? e : void 0))
    ));
}
function Hn(e, t = 2, n) {
  e = X(e);
  const r = e.dep;
  r && ci(r, t);
}
function ke(e) {
  return !!(e && e.__v_isRef === !0);
}
function he(e) {
  return xi(e, !1);
}
function Sc(e) {
  return xi(e, !0);
}
function xi(e, t) {
  return ke(e) ? e : new Oc(e, t);
}
class Oc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : X(t)),
      (this._value = n ? t : wn(t));
  }
  get value() {
    return wi(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Qn(t) || en(t);
    (t = n ? t : X(t)),
      Ct(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : wn(t)), Hn(this, 2));
  }
}
function mn(e) {
  return ke(e) ? e.value : e;
}
const Ac = {
  get: (e, t, n) => mn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ke(s) && !ke(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ei(e) {
  return Yt(e) ? e : new Proxy(e, Ac);
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ot(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    ur(o, t, n);
  }
  return s;
}
function Xe(e, t, n, r) {
  if (V(e)) {
    const o = Ot(e, t, n, r);
    return (
      o &&
        Zo(o) &&
        o.catch((i) => {
          ur(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(Xe(e[o], t, n, r));
  return s;
}
function ur(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let a = 0; a < u.length; a++) if (u[a](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ot(c, null, 10, [e, i, l]);
      return;
    }
  }
  Cc(e, n, s, r);
}
function Cc(e, t, n, r = !0) {
  console.error(e);
}
let xn = !1,
  zr = !1;
const Oe = [];
let rt = 0;
const Zt = [];
let yt = null,
  Lt = 0;
const Si = Promise.resolve();
let xs = null;
function fr(e) {
  const t = xs || Si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rc(e) {
  let t = rt + 1,
    n = Oe.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Oe[r],
      o = En(s);
    o < e || (o === e && s.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Es(e) {
  (!Oe.length || !Oe.includes(e, xn && e.allowRecurse ? rt + 1 : rt)) &&
    (e.id == null ? Oe.push(e) : Oe.splice(Rc(e.id), 0, e), Oi());
}
function Oi() {
  !xn && !zr && ((zr = !0), (xs = Si.then(Ci)));
}
function Tc(e) {
  const t = Oe.indexOf(e);
  t > rt && Oe.splice(t, 1);
}
function Pc(e) {
  D(e)
    ? Zt.push(...e)
    : (!yt || !yt.includes(e, e.allowRecurse ? Lt + 1 : Lt)) && Zt.push(e),
    Oi();
}
function Xs(e, t, n = xn ? rt + 1 : 0) {
  for (; n < Oe.length; n++) {
    const r = Oe[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      Oe.splice(n, 1), n--, r();
    }
  }
}
function Ai(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort((n, r) => En(n) - En(r));
    if (((Zt.length = 0), yt)) {
      yt.push(...t);
      return;
    }
    for (yt = t, Lt = 0; Lt < yt.length; Lt++) yt[Lt]();
    (yt = null), (Lt = 0);
  }
}
const En = (e) => (e.id == null ? 1 / 0 : e.id),
  Ic = (e, t) => {
    const n = En(e) - En(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ci(e) {
  (zr = !1), (xn = !0), Oe.sort(Ic);
  try {
    for (rt = 0; rt < Oe.length; rt++) {
      const t = Oe[rt];
      t && t.active !== !1 && Ot(t, null, 14);
    }
  } finally {
    (rt = 0),
      (Oe.length = 0),
      Ai(),
      (xn = !1),
      (xs = null),
      (Oe.length || Zt.length) && Ci();
  }
}
function Nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || le;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const a = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: p } = r[a] || le;
    p && (s = n.map((_) => (_e(_) ? _.trim() : _))), f && (s = n.map(vn));
  }
  let l,
    c = r[(l = Or(t))] || r[(l = Or(lt(t)))];
  !c && o && (c = r[(l = Or(on(t)))]), c && Xe(c, e, 6, s);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Xe(u, e, 6, s);
  }
}
function Ri(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!V(e)) {
    const c = (u) => {
      const a = Ri(u, t, !0);
      a && ((l = !0), we(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (se(e) && r.set(e, null), null)
    : (D(o) ? o.forEach((c) => (i[c] = null)) : we(i, o),
      se(e) && r.set(e, i),
      i);
}
function dr(e, t) {
  return !e || !or(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, on(t)) || J(e, t));
}
let Le = null,
  Ti = null;
function Xn(e) {
  const t = Le;
  return (Le = e), (Ti = (e && e.type.__scopeId) || null), t;
}
function oe(e, t = Le, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && co(-1);
    const o = Xn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Xn(o), r._d && co(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Cr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: u,
    render: a,
    renderCache: f,
    data: p,
    setupState: _,
    ctx: b,
    inheritAttrs: x,
  } = e;
  let P, I;
  const k = Xn(e);
  try {
    if (n.shapeFlag & 4) {
      const K = s || r,
        ae = K;
      (P = nt(a.call(ae, K, f, o, _, p, b))), (I = c);
    } else {
      const K = t;
      (P = nt(
        K.length > 1 ? K(o, { attrs: c, slots: l, emit: u }) : K(o, null)
      )),
        (I = t.props ? c : Lc(c));
    }
  } catch (K) {
    (_n.length = 0), ur(K, e, 1), (P = G(Bt));
  }
  let $ = P;
  if (I && x !== !1) {
    const K = Object.keys(I),
      { shapeFlag: ae } = $;
    K.length && ae & 7 && (i && K.some(fs) && (I = Mc(I, i)), ($ = Rt($, I)));
  }
  return (
    n.dirs && (($ = Rt($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (P = $),
    Xn(k),
    P
  );
}
const Lc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || or(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Mc = (e, t) => {
    const n = {};
    for (const r in e) (!fs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function kc(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? Ys(r, i, u) : !!i;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        const p = a[f];
        if (i[p] !== r[p] && !dr(u, p)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Ys(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Ys(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !dr(n, o)) return !0;
  }
  return !1;
}
function $c({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Pi = "components";
function st(e, t) {
  return Fc(Pi, e, !0, t) || e;
}
const jc = Symbol.for("v-ndc");
function Fc(e, t, n = !0, r = !1) {
  const s = Le || Ae;
  if (s) {
    const o = s.type;
    if (e === Pi) {
      const l = Ia(o, !1);
      if (l && (l === t || l === lt(t) || l === cr(lt(t)))) return o;
    }
    const i = Zs(s[e] || o[e], t) || Zs(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Zs(e, t) {
  return e && (e[t] || e[lt(t)] || e[cr(lt(t))]);
}
const Dc = (e) => e.__isSuspense;
function Uc(e, t) {
  t && t.pendingBranch
    ? D(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Pc(e);
}
const Bc = Symbol.for("v-scx"),
  Hc = () => pe(Bc),
  Dn = {};
function ut(e, t, n) {
  return Ii(e, t, n);
}
function Ii(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: l } = le
) {
  if (t && o) {
    const U = t;
    t = (...de) => {
      U(...de), ae();
    };
  }
  const c = Ae,
    u = (U) => (r === !0 ? U : kt(U, r === !1 ? 1 : void 0));
  let a,
    f = !1,
    p = !1;
  if (
    (ke(e)
      ? ((a = () => e.value), (f = Qn(e)))
      : Yt(e)
      ? ((a = () => u(e)), (f = !0))
      : D(e)
      ? ((p = !0),
        (f = e.some((U) => Yt(U) || Qn(U))),
        (a = () =>
          e.map((U) => {
            if (ke(U)) return U.value;
            if (Yt(U)) return u(U);
            if (V(U)) return Ot(U, c, 2);
          })))
      : V(e)
      ? t
        ? (a = () => Ot(e, c, 2))
        : (a = () => (_ && _(), Xe(e, c, 3, [b])))
      : (a = He),
    t && r)
  ) {
    const U = a;
    a = () => kt(U());
  }
  let _,
    b = (U) => {
      _ = $.onStop = () => {
        Ot(U, c, 4), (_ = $.onStop = void 0);
      };
    },
    x;
  if (gr)
    if (
      ((b = He),
      t ? n && Xe(t, c, 3, [a(), p ? [] : void 0, b]) : a(),
      s === "sync")
    ) {
      const U = Hc();
      x = U.__watcherHandles || (U.__watcherHandles = []);
    } else return He;
  let P = p ? new Array(e.length).fill(Dn) : Dn;
  const I = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const U = $.run();
        (r || f || (p ? U.some((de, xe) => Ct(de, P[xe])) : Ct(U, P))) &&
          (_ && _(),
          Xe(t, c, 3, [U, P === Dn ? void 0 : p && P[0] === Dn ? [] : P, b]),
          (P = U));
      } else $.run();
  };
  I.allowRecurse = !!t;
  let k;
  s === "sync"
    ? (k = I)
    : s === "post"
    ? (k = () => Ne(I, c && c.suspense))
    : ((I.pre = !0), c && (I.id = c.uid), (k = () => Es(I)));
  const $ = new ms(a, He, k),
    K = nc(),
    ae = () => {
      $.stop(), K && ds(K.effects, $);
    };
  return (
    t
      ? n
        ? I()
        : (P = $.run())
      : s === "post"
      ? Ne($.run.bind($), c && c.suspense)
      : $.run(),
    x && x.push(ae),
    ae
  );
}
function Vc(e, t, n) {
  const r = this.proxy,
    s = _e(e) ? (e.includes(".") ? Ni(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  V(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Pn(this),
    l = Ii(s, o.bind(r), n);
  return i(), l;
}
function Ni(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function kt(e, t, n = 0, r) {
  if (!se(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), ke(e))) kt(e.value, t, n, r);
  else if (D(e)) for (let s = 0; s < e.length; s++) kt(e[s], t, n, r);
  else if (ir(e) || Xt(e))
    e.forEach((s) => {
      kt(s, t, n, r);
    });
  else if (ti(e)) for (const s in e) kt(e[s], t, n, r);
  return e;
}
function kp(e, t) {
  if (Le === null) return e;
  const n = _r(Le) || Le.proxy,
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, l, c = le] = t[s];
    o &&
      (V(o) && (o = { mounted: o, updated: o }),
      o.deep && kt(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function It(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[r];
    c && (Ht(), Xe(c, n, 8, [e.el, l, e, t]), Vt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Tn(e, t) {
  return V(e) ? we({ name: e.name }, t, { setup: e }) : e;
}
const Vn = (e) => !!e.type.__asyncLoader,
  Li = (e) => e.type.__isKeepAlive;
function zc(e, t) {
  Mi(e, "a", t);
}
function Kc(e, t) {
  Mi(e, "da", t);
}
function Mi(e, t, n = Ae) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((hr(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Li(s.parent.vnode) && qc(r, t, n, s), (s = s.parent);
  }
}
function qc(e, t, n, r) {
  const s = hr(t, e, r, !0);
  Ss(() => {
    ds(r[t], s);
  }, n);
}
function hr(e, t, n = Ae, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Ht();
          const l = Pn(n),
            c = Xe(t, n, e, i);
          return l(), Vt(), c;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const ht =
    (e) =>
    (t, n = Ae) =>
      (!gr || e === "sp") && hr(e, (...r) => t(...r), n),
  Gc = ht("bm"),
  ki = ht("m"),
  Wc = ht("bu"),
  Jc = ht("u"),
  Qc = ht("bum"),
  Ss = ht("um"),
  Xc = ht("sp"),
  Yc = ht("rtg"),
  Zc = ht("rtc");
function ea(e, t = Ae) {
  hr("ec", e, t);
}
function $t(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (D(e) || _e(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (se(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, o && o[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Kr = (e) => (e ? (Gi(e) ? _r(e) || e.proxy : Kr(e.parent)) : null),
  gn = we(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kr(e.parent),
    $root: (e) => Kr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Os(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Es(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = fr.bind(e.proxy)),
    $watch: (e) => Vc.bind(e),
  }),
  Rr = (e, t) => e !== le && !e.__isScriptSetup && J(e, t),
  ta = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const _ = i[t];
        if (_ !== void 0)
          switch (_) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Rr(r, t)) return (i[t] = 1), r[t];
          if (s !== le && J(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && J(u, t)) return (i[t] = 3), o[t];
          if (n !== le && J(n, t)) return (i[t] = 4), n[t];
          qr && (i[t] = 0);
        }
      }
      const a = gn[t];
      let f, p;
      if (a) return t === "$attrs" && Me(e, "get", t), a(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== le && J(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), J(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Rr(s, t)
        ? ((s[t] = n), !0)
        : r !== le && J(r, t)
        ? ((r[t] = n), !0)
        : J(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== le && J(e, i)) ||
        Rr(t, i) ||
        ((l = o[0]) && J(l, i)) ||
        J(r, i) ||
        J(gn, i) ||
        J(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : J(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function eo(e) {
  return D(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let qr = !0;
function na(e) {
  const t = Os(e),
    n = e.proxy,
    r = e.ctx;
  (qr = !1), t.beforeCreate && to(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    created: a,
    beforeMount: f,
    mounted: p,
    beforeUpdate: _,
    updated: b,
    activated: x,
    deactivated: P,
    beforeDestroy: I,
    beforeUnmount: k,
    destroyed: $,
    unmounted: K,
    render: ae,
    renderTracked: U,
    renderTriggered: de,
    errorCaptured: xe,
    serverPrefetch: me,
    expose: Ce,
    inheritAttrs: je,
    components: Ee,
    directives: Ke,
    filters: qe,
  } = t;
  if ((u && ra(u, r, null), i))
    for (const Y in i) {
      const Q = i[Y];
      V(Q) && (r[Y] = Q.bind(n));
    }
  if (s) {
    const Y = s.call(n, n);
    se(Y) && (e.data = Ve(Y));
  }
  if (((qr = !0), o))
    for (const Y in o) {
      const Q = o[Y],
        Te = V(Q) ? Q.bind(n, n) : V(Q.get) ? Q.get.bind(n, n) : He,
        Ze = !V(Q) && V(Q.set) ? Q.set.bind(n) : He,
        Pe = Be({ get: Te, set: Ze });
      Object.defineProperty(r, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (fe) => (Pe.value = fe),
      });
    }
  if (l) for (const Y in l) $i(l[Y], r, n, Y);
  if (c) {
    const Y = V(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((Q) => {
      De(Q, Y[Q]);
    });
  }
  a && to(a, e, "c");
  function ue(Y, Q) {
    D(Q) ? Q.forEach((Te) => Y(Te.bind(n))) : Q && Y(Q.bind(n));
  }
  if (
    (ue(Gc, f),
    ue(ki, p),
    ue(Wc, _),
    ue(Jc, b),
    ue(zc, x),
    ue(Kc, P),
    ue(ea, xe),
    ue(Zc, U),
    ue(Yc, de),
    ue(Qc, k),
    ue(Ss, K),
    ue(Xc, me),
    D(Ce))
  )
    if (Ce.length) {
      const Y = e.exposed || (e.exposed = {});
      Ce.forEach((Q) => {
        Object.defineProperty(Y, Q, {
          get: () => n[Q],
          set: (Te) => (n[Q] = Te),
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === He && (e.render = ae),
    je != null && (e.inheritAttrs = je),
    Ee && (e.components = Ee),
    Ke && (e.directives = Ke);
}
function ra(e, t, n = He) {
  D(e) && (e = Gr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    se(s)
      ? "default" in s
        ? (o = pe(s.from || r, s.default, !0))
        : (o = pe(s.from || r))
      : (o = pe(s)),
      ke(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function to(e, t, n) {
  Xe(D(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $i(e, t, n, r) {
  const s = r.includes(".") ? Ni(n, r) : () => n[r];
  if (_e(e)) {
    const o = t[e];
    V(o) && ut(s, o);
  } else if (V(e)) ut(s, e.bind(n));
  else if (se(e))
    if (D(e)) e.forEach((o) => $i(o, t, n, r));
    else {
      const o = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(o) && ut(s, o, e);
    }
}
function Os(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((u) => Yn(c, u, i, !0)), Yn(c, t, i)),
    se(t) && o.set(t, c),
    c
  );
}
function Yn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Yn(e, o, n, !0), s && s.forEach((i) => Yn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = sa[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const sa = {
  data: no,
  props: ro,
  emits: ro,
  methods: pn,
  computed: pn,
  beforeCreate: Re,
  created: Re,
  beforeMount: Re,
  mounted: Re,
  beforeUpdate: Re,
  updated: Re,
  beforeDestroy: Re,
  beforeUnmount: Re,
  destroyed: Re,
  unmounted: Re,
  activated: Re,
  deactivated: Re,
  errorCaptured: Re,
  serverPrefetch: Re,
  components: pn,
  directives: pn,
  watch: ia,
  provide: no,
  inject: oa,
};
function no(e, t) {
  return t
    ? e
      ? function () {
          return we(
            V(e) ? e.call(this, this) : e,
            V(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function oa(e, t) {
  return pn(Gr(e), Gr(t));
}
function Gr(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pn(e, t) {
  return e ? we(Object.create(null), e, t) : t;
}
function ro(e, t) {
  return e
    ? D(e) && D(t)
      ? [...new Set([...e, ...t])]
      : we(Object.create(null), eo(e), eo(t ?? {}))
    : t;
}
function ia(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = we(Object.create(null), e);
  for (const r in t) n[r] = Re(e[r], t[r]);
  return n;
}
function ji() {
  return {
    app: null,
    config: {
      isNativeTag: Bl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let la = 0;
function ca(e, t) {
  return function (r, s = null) {
    V(r) || (r = we({}, r)), s != null && !se(s) && (s = null);
    const o = ji(),
      i = new WeakSet();
    let l = !1;
    const c = (o.app = {
      _uid: la++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: La,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...a) {
        return (
          i.has(u) ||
            (u && V(u.install)
              ? (i.add(u), u.install(c, ...a))
              : V(u) && (i.add(u), u(c, ...a))),
          c
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, a) {
        return a ? ((o.components[u] = a), c) : o.components[u];
      },
      directive(u, a) {
        return a ? ((o.directives[u] = a), c) : o.directives[u];
      },
      mount(u, a, f) {
        if (!l) {
          const p = G(r, s);
          return (
            (p.appContext = o),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            a && t ? t(p, u) : e(p, u, f),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            _r(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, a) {
        return (o.provides[u] = a), c;
      },
      runWithContext(u) {
        Zn = c;
        try {
          return u();
        } finally {
          Zn = null;
        }
      },
    });
    return c;
  };
}
let Zn = null;
function De(e, t) {
  if (Ae) {
    let n = Ae.provides;
    const r = Ae.parent && Ae.parent.provides;
    r === n && (n = Ae.provides = Object.create(r)), (n[e] = t);
  }
}
function pe(e, t, n = !1) {
  const r = Ae || Le;
  if (r || Zn) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Zn._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && V(t) ? t.call(r && r.proxy) : t;
  }
}
function aa(e, t, n, r = !1) {
  const s = {},
    o = {};
  Jn(o, mr, 1), (e.propsDefaults = Object.create(null)), Fi(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : xc(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function ua(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = X(s),
    [c] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        let p = a[f];
        if (dr(e.emitsOptions, p)) continue;
        const _ = t[p];
        if (c)
          if (J(o, p)) _ !== o[p] && ((o[p] = _), (u = !0));
          else {
            const b = lt(p);
            s[b] = Wr(c, l, b, _, e, !1);
          }
        else _ !== o[p] && ((o[p] = _), (u = !0));
      }
    }
  } else {
    Fi(e, t, s, o) && (u = !0);
    let a;
    for (const f in l)
      (!t || (!J(t, f) && ((a = on(f)) === f || !J(t, a)))) &&
        (c
          ? n &&
            (n[f] !== void 0 || n[a] !== void 0) &&
            (s[f] = Wr(c, l, f, void 0, e, !0))
          : delete s[f]);
    if (o !== l) for (const f in o) (!t || !J(t, f)) && (delete o[f], (u = !0));
  }
  u && at(e, "set", "$attrs");
}
function Fi(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (Un(c)) continue;
      const u = t[c];
      let a;
      s && J(s, (a = lt(c)))
        ? !o || !o.includes(a)
          ? (n[a] = u)
          : ((l || (l = {}))[a] = u)
        : dr(e.emitsOptions, c) ||
          ((!(c in r) || u !== r[c]) && ((r[c] = u), (i = !0)));
    }
  if (o) {
    const c = X(n),
      u = l || le;
    for (let a = 0; a < o.length; a++) {
      const f = o[a];
      n[f] = Wr(s, c, f, u[f], e, !J(u, f));
    }
  }
  return i;
}
function Wr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && V(c)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const a = Pn(s);
          (r = u[n] = c.call(null, t)), a();
        }
      } else r = c;
    }
    i[0] &&
      (o && !l ? (r = !1) : i[1] && (r === "" || r === on(n)) && (r = !0));
  }
  return r;
}
function Di(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!V(e)) {
    const a = (f) => {
      c = !0;
      const [p, _] = Di(f, t, !0);
      we(i, p), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!o && !c) return se(e) && r.set(e, Qt), Qt;
  if (D(o))
    for (let a = 0; a < o.length; a++) {
      const f = lt(o[a]);
      so(f) && (i[f] = le);
    }
  else if (o)
    for (const a in o) {
      const f = lt(a);
      if (so(f)) {
        const p = o[a],
          _ = (i[f] = D(p) || V(p) ? { type: p } : we({}, p));
        if (_) {
          const b = lo(Boolean, _.type),
            x = lo(String, _.type);
          (_[0] = b > -1),
            (_[1] = x < 0 || b < x),
            (b > -1 || J(_, "default")) && l.push(f);
        }
      }
    }
  const u = [i, l];
  return se(e) && r.set(e, u), u;
}
function so(e) {
  return e[0] !== "$";
}
function oo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function io(e, t) {
  return oo(e) === oo(t);
}
function lo(e, t) {
  return D(t) ? t.findIndex((n) => io(n, e)) : V(t) && io(t, e) ? 0 : -1;
}
const Ui = (e) => e[0] === "_" || e === "$stable",
  As = (e) => (D(e) ? e.map(nt) : [nt(e)]),
  fa = (e, t, n) => {
    if (t._n) return t;
    const r = oe((...s) => As(t(...s)), n);
    return (r._c = !1), r;
  },
  Bi = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Ui(s)) continue;
      const o = e[s];
      if (V(o)) t[s] = fa(s, o, r);
      else if (o != null) {
        const i = As(o);
        t[s] = () => i;
      }
    }
  },
  Hi = (e, t) => {
    const n = As(t);
    e.slots.default = () => n;
  },
  da = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = X(t)), Jn(t, "_", n)) : Bi(t, (e.slots = {}));
    } else (e.slots = {}), t && Hi(e, t);
    Jn(e.slots, mr, 1);
  },
  ha = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = le;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (we(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), Bi(t, s)),
        (i = t);
    } else t && (Hi(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !Ui(l) && i[l] == null && delete s[l];
  };
function Jr(e, t, n, r, s = !1) {
  if (D(e)) {
    e.forEach((p, _) => Jr(p, t && (D(t) ? t[_] : t), n, r, s));
    return;
  }
  if (Vn(r) && !s) return;
  const o = r.shapeFlag & 4 ? _r(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: l, r: c } = e,
    u = t && t.r,
    a = l.refs === le ? (l.refs = {}) : l.refs,
    f = l.setupState;
  if (
    (u != null &&
      u !== c &&
      (_e(u)
        ? ((a[u] = null), J(f, u) && (f[u] = null))
        : ke(u) && (u.value = null)),
    V(c))
  )
    Ot(c, l, 12, [i, a]);
  else {
    const p = _e(c),
      _ = ke(c),
      b = e.f;
    if (p || _) {
      const x = () => {
        if (b) {
          const P = p ? (J(f, c) ? f[c] : a[c]) : c.value;
          s
            ? D(P) && ds(P, o)
            : D(P)
            ? P.includes(o) || P.push(o)
            : p
            ? ((a[c] = [o]), J(f, c) && (f[c] = a[c]))
            : ((c.value = [o]), e.k && (a[e.k] = c.value));
        } else
          p
            ? ((a[c] = i), J(f, c) && (f[c] = i))
            : _ && ((c.value = i), e.k && (a[e.k] = i));
      };
      s || b ? x() : ((x.id = -1), Ne(x, n));
    }
  }
}
const Ne = Uc;
function pa(e) {
  return ma(e);
}
function ma(e, t) {
  const n = ni();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: a,
      parentNode: f,
      nextSibling: p,
      setScopeId: _ = He,
      insertStaticContent: b,
    } = e,
    x = (
      d,
      h,
      m,
      g = null,
      v = null,
      O = null,
      C = void 0,
      S = null,
      A = !!h.dynamicChildren
    ) => {
      if (d === h) return;
      d && !fn(d, h) && ((g = T(d)), fe(d, v, O, !0), (d = null)),
        h.patchFlag === -2 && ((A = !1), (h.dynamicChildren = null));
      const { type: E, ref: L, shapeFlag: F } = h;
      switch (E) {
        case pr:
          P(d, h, m, g);
          break;
        case Bt:
          I(d, h, m, g);
          break;
        case zn:
          d == null && k(h, m, g, C);
          break;
        case ge:
          Ee(d, h, m, g, v, O, C, S, A);
          break;
        default:
          F & 1
            ? ae(d, h, m, g, v, O, C, S, A)
            : F & 6
            ? Ke(d, h, m, g, v, O, C, S, A)
            : (F & 64 || F & 128) && E.process(d, h, m, g, v, O, C, S, A, ee);
      }
      L != null && v && Jr(L, d && d.ref, O, h || d, !h);
    },
    P = (d, h, m, g) => {
      if (d == null) r((h.el = l(h.children)), m, g);
      else {
        const v = (h.el = d.el);
        h.children !== d.children && u(v, h.children);
      }
    },
    I = (d, h, m, g) => {
      d == null ? r((h.el = c(h.children || "")), m, g) : (h.el = d.el);
    },
    k = (d, h, m, g) => {
      [d.el, d.anchor] = b(d.children, h, m, g, d.el, d.anchor);
    },
    $ = ({ el: d, anchor: h }, m, g) => {
      let v;
      for (; d && d !== h; ) (v = p(d)), r(d, m, g), (d = v);
      r(h, m, g);
    },
    K = ({ el: d, anchor: h }) => {
      let m;
      for (; d && d !== h; ) (m = p(d)), s(d), (d = m);
      s(h);
    },
    ae = (d, h, m, g, v, O, C, S, A) => {
      h.type === "svg" ? (C = "svg") : h.type === "math" && (C = "mathml"),
        d == null ? U(h, m, g, v, O, C, S, A) : me(d, h, v, O, C, S, A);
    },
    U = (d, h, m, g, v, O, C, S) => {
      let A, E;
      const { props: L, shapeFlag: F, transition: j, dirs: H } = d;
      if (
        ((A = d.el = i(d.type, O, L && L.is, L)),
        F & 8
          ? a(A, d.children)
          : F & 16 && xe(d.children, A, null, g, v, Tr(d, O), C, S),
        H && It(d, null, g, "created"),
        de(A, d, d.scopeId, C, g),
        L)
      ) {
        for (const te in L)
          te !== "value" &&
            !Un(te) &&
            o(A, te, null, L[te], O, d.children, g, v, N);
        "value" in L && o(A, "value", null, L.value, O),
          (E = L.onVnodeBeforeMount) && tt(E, g, d);
      }
      H && It(d, null, g, "beforeMount");
      const q = ga(v, j);
      q && j.beforeEnter(A),
        r(A, h, m),
        ((E = L && L.onVnodeMounted) || q || H) &&
          Ne(() => {
            E && tt(E, g, d), q && j.enter(A), H && It(d, null, g, "mounted");
          }, v);
    },
    de = (d, h, m, g, v) => {
      if ((m && _(d, m), g)) for (let O = 0; O < g.length; O++) _(d, g[O]);
      if (v) {
        let O = v.subTree;
        if (h === O) {
          const C = v.vnode;
          de(d, C, C.scopeId, C.slotScopeIds, v.parent);
        }
      }
    },
    xe = (d, h, m, g, v, O, C, S, A = 0) => {
      for (let E = A; E < d.length; E++) {
        const L = (d[E] = S ? bt(d[E]) : nt(d[E]));
        x(null, L, h, m, g, v, O, C, S);
      }
    },
    me = (d, h, m, g, v, O, C) => {
      const S = (h.el = d.el);
      let { patchFlag: A, dynamicChildren: E, dirs: L } = h;
      A |= d.patchFlag & 16;
      const F = d.props || le,
        j = h.props || le;
      let H;
      if (
        (m && Nt(m, !1),
        (H = j.onVnodeBeforeUpdate) && tt(H, m, h, d),
        L && It(h, d, m, "beforeUpdate"),
        m && Nt(m, !0),
        E
          ? Ce(d.dynamicChildren, E, S, m, g, Tr(h, v), O)
          : C || Q(d, h, S, null, m, g, Tr(h, v), O, !1),
        A > 0)
      ) {
        if (A & 16) je(S, h, F, j, m, g, v);
        else if (
          (A & 2 && F.class !== j.class && o(S, "class", null, j.class, v),
          A & 4 && o(S, "style", F.style, j.style, v),
          A & 8)
        ) {
          const q = h.dynamicProps;
          for (let te = 0; te < q.length; te++) {
            const ce = q[te],
              ye = F[ce],
              Ge = j[ce];
            (Ge !== ye || ce === "value") &&
              o(S, ce, ye, Ge, v, d.children, m, g, N);
          }
        }
        A & 1 && d.children !== h.children && a(S, h.children);
      } else !C && E == null && je(S, h, F, j, m, g, v);
      ((H = j.onVnodeUpdated) || L) &&
        Ne(() => {
          H && tt(H, m, h, d), L && It(h, d, m, "updated");
        }, g);
    },
    Ce = (d, h, m, g, v, O, C) => {
      for (let S = 0; S < h.length; S++) {
        const A = d[S],
          E = h[S],
          L =
            A.el && (A.type === ge || !fn(A, E) || A.shapeFlag & 70)
              ? f(A.el)
              : m;
        x(A, E, L, null, g, v, O, C, !0);
      }
    },
    je = (d, h, m, g, v, O, C) => {
      if (m !== g) {
        if (m !== le)
          for (const S in m)
            !Un(S) && !(S in g) && o(d, S, m[S], null, C, h.children, v, O, N);
        for (const S in g) {
          if (Un(S)) continue;
          const A = g[S],
            E = m[S];
          A !== E && S !== "value" && o(d, S, E, A, C, h.children, v, O, N);
        }
        "value" in g && o(d, "value", m.value, g.value, C);
      }
    },
    Ee = (d, h, m, g, v, O, C, S, A) => {
      const E = (h.el = d ? d.el : l("")),
        L = (h.anchor = d ? d.anchor : l(""));
      let { patchFlag: F, dynamicChildren: j, slotScopeIds: H } = h;
      H && (S = S ? S.concat(H) : H),
        d == null
          ? (r(E, m, g), r(L, m, g), xe(h.children || [], m, L, v, O, C, S, A))
          : F > 0 && F & 64 && j && d.dynamicChildren
          ? (Ce(d.dynamicChildren, j, m, v, O, C, S),
            (h.key != null || (v && h === v.subTree)) && Vi(d, h, !0))
          : Q(d, h, m, L, v, O, C, S, A);
    },
    Ke = (d, h, m, g, v, O, C, S, A) => {
      (h.slotScopeIds = S),
        d == null
          ? h.shapeFlag & 512
            ? v.ctx.activate(h, m, g, C, A)
            : qe(h, m, g, v, O, C, A)
          : Tt(d, h, A);
    },
    qe = (d, h, m, g, v, O, C) => {
      const S = (d.component = Aa(d, g, v));
      if ((Li(d) && (S.ctx.renderer = ee), Ca(S), S.asyncDep)) {
        if ((v && v.registerDep(S, ue), !d.el)) {
          const A = (S.subTree = G(Bt));
          I(null, A, h, m);
        }
      } else ue(S, d, h, m, v, O, C);
    },
    Tt = (d, h, m) => {
      const g = (h.component = d.component);
      if (kc(d, h, m))
        if (g.asyncDep && !g.asyncResolved) {
          Y(g, h, m);
          return;
        } else (g.next = h), Tc(g.update), (g.effect.dirty = !0), g.update();
      else (h.el = d.el), (g.vnode = h);
    },
    ue = (d, h, m, g, v, O, C) => {
      const S = () => {
          if (d.isMounted) {
            let { next: L, bu: F, u: j, parent: H, vnode: q } = d;
            {
              const Kt = zi(d);
              if (Kt) {
                L && ((L.el = q.el), Y(d, L, C)),
                  Kt.asyncDep.then(() => {
                    d.isUnmounted || S();
                  });
                return;
              }
            }
            let te = L,
              ce;
            Nt(d, !1),
              L ? ((L.el = q.el), Y(d, L, C)) : (L = q),
              F && Bn(F),
              (ce = L.props && L.props.onVnodeBeforeUpdate) && tt(ce, H, L, q),
              Nt(d, !0);
            const ye = Cr(d),
              Ge = d.subTree;
            (d.subTree = ye),
              x(Ge, ye, f(Ge.el), T(Ge), d, v, O),
              (L.el = ye.el),
              te === null && $c(d, ye.el),
              j && Ne(j, v),
              (ce = L.props && L.props.onVnodeUpdated) &&
                Ne(() => tt(ce, H, L, q), v);
          } else {
            let L;
            const { el: F, props: j } = h,
              { bm: H, m: q, parent: te } = d,
              ce = Vn(h);
            if (
              (Nt(d, !1),
              H && Bn(H),
              !ce && (L = j && j.onVnodeBeforeMount) && tt(L, te, h),
              Nt(d, !0),
              F && B)
            ) {
              const ye = () => {
                (d.subTree = Cr(d)), B(F, d.subTree, d, v, null);
              };
              ce
                ? h.type.__asyncLoader().then(() => !d.isUnmounted && ye())
                : ye();
            } else {
              const ye = (d.subTree = Cr(d));
              x(null, ye, m, g, d, v, O), (h.el = ye.el);
            }
            if ((q && Ne(q, v), !ce && (L = j && j.onVnodeMounted))) {
              const ye = h;
              Ne(() => tt(L, te, ye), v);
            }
            (h.shapeFlag & 256 ||
              (te && Vn(te.vnode) && te.vnode.shapeFlag & 256)) &&
              d.a &&
              Ne(d.a, v),
              (d.isMounted = !0),
              (h = m = g = null);
          }
        },
        A = (d.effect = new ms(S, He, () => Es(E), d.scope)),
        E = (d.update = () => {
          A.dirty && A.run();
        });
      (E.id = d.uid), Nt(d, !0), E();
    },
    Y = (d, h, m) => {
      h.component = d;
      const g = d.vnode.props;
      (d.vnode = h),
        (d.next = null),
        ua(d, h.props, g, m),
        ha(d, h.children, m),
        Ht(),
        Xs(d),
        Vt();
    },
    Q = (d, h, m, g, v, O, C, S, A = !1) => {
      const E = d && d.children,
        L = d ? d.shapeFlag : 0,
        F = h.children,
        { patchFlag: j, shapeFlag: H } = h;
      if (j > 0) {
        if (j & 128) {
          Ze(E, F, m, g, v, O, C, S, A);
          return;
        } else if (j & 256) {
          Te(E, F, m, g, v, O, C, S, A);
          return;
        }
      }
      H & 8
        ? (L & 16 && N(E, v, O), F !== E && a(m, F))
        : L & 16
        ? H & 16
          ? Ze(E, F, m, g, v, O, C, S, A)
          : N(E, v, O, !0)
        : (L & 8 && a(m, ""), H & 16 && xe(F, m, g, v, O, C, S, A));
    },
    Te = (d, h, m, g, v, O, C, S, A) => {
      (d = d || Qt), (h = h || Qt);
      const E = d.length,
        L = h.length,
        F = Math.min(E, L);
      let j;
      for (j = 0; j < F; j++) {
        const H = (h[j] = A ? bt(h[j]) : nt(h[j]));
        x(d[j], H, m, null, v, O, C, S, A);
      }
      E > L ? N(d, v, O, !0, !1, F) : xe(h, m, g, v, O, C, S, A, F);
    },
    Ze = (d, h, m, g, v, O, C, S, A) => {
      let E = 0;
      const L = h.length;
      let F = d.length - 1,
        j = L - 1;
      for (; E <= F && E <= j; ) {
        const H = d[E],
          q = (h[E] = A ? bt(h[E]) : nt(h[E]));
        if (fn(H, q)) x(H, q, m, null, v, O, C, S, A);
        else break;
        E++;
      }
      for (; E <= F && E <= j; ) {
        const H = d[F],
          q = (h[j] = A ? bt(h[j]) : nt(h[j]));
        if (fn(H, q)) x(H, q, m, null, v, O, C, S, A);
        else break;
        F--, j--;
      }
      if (E > F) {
        if (E <= j) {
          const H = j + 1,
            q = H < L ? h[H].el : g;
          for (; E <= j; )
            x(null, (h[E] = A ? bt(h[E]) : nt(h[E])), m, q, v, O, C, S, A), E++;
        }
      } else if (E > j) for (; E <= F; ) fe(d[E], v, O, !0), E++;
      else {
        const H = E,
          q = E,
          te = new Map();
        for (E = q; E <= j; E++) {
          const Fe = (h[E] = A ? bt(h[E]) : nt(h[E]));
          Fe.key != null && te.set(Fe.key, E);
        }
        let ce,
          ye = 0;
        const Ge = j - q + 1;
        let Kt = !1,
          Ds = 0;
        const un = new Array(Ge);
        for (E = 0; E < Ge; E++) un[E] = 0;
        for (E = H; E <= F; E++) {
          const Fe = d[E];
          if (ye >= Ge) {
            fe(Fe, v, O, !0);
            continue;
          }
          let et;
          if (Fe.key != null) et = te.get(Fe.key);
          else
            for (ce = q; ce <= j; ce++)
              if (un[ce - q] === 0 && fn(Fe, h[ce])) {
                et = ce;
                break;
              }
          et === void 0
            ? fe(Fe, v, O, !0)
            : ((un[et - q] = E + 1),
              et >= Ds ? (Ds = et) : (Kt = !0),
              x(Fe, h[et], m, null, v, O, C, S, A),
              ye++);
        }
        const Us = Kt ? _a(un) : Qt;
        for (ce = Us.length - 1, E = Ge - 1; E >= 0; E--) {
          const Fe = q + E,
            et = h[Fe],
            Bs = Fe + 1 < L ? h[Fe + 1].el : g;
          un[E] === 0
            ? x(null, et, m, Bs, v, O, C, S, A)
            : Kt && (ce < 0 || E !== Us[ce] ? Pe(et, m, Bs, 2) : ce--);
        }
      }
    },
    Pe = (d, h, m, g, v = null) => {
      const { el: O, type: C, transition: S, children: A, shapeFlag: E } = d;
      if (E & 6) {
        Pe(d.component.subTree, h, m, g);
        return;
      }
      if (E & 128) {
        d.suspense.move(h, m, g);
        return;
      }
      if (E & 64) {
        C.move(d, h, m, ee);
        return;
      }
      if (C === ge) {
        r(O, h, m);
        for (let F = 0; F < A.length; F++) Pe(A[F], h, m, g);
        r(d.anchor, h, m);
        return;
      }
      if (C === zn) {
        $(d, h, m);
        return;
      }
      if (g !== 2 && E & 1 && S)
        if (g === 0) S.beforeEnter(O), r(O, h, m), Ne(() => S.enter(O), v);
        else {
          const { leave: F, delayLeave: j, afterLeave: H } = S,
            q = () => r(O, h, m),
            te = () => {
              F(O, () => {
                q(), H && H();
              });
            };
          j ? j(O, q, te) : te();
        }
      else r(O, h, m);
    },
    fe = (d, h, m, g = !1, v = !1) => {
      const {
        type: O,
        props: C,
        ref: S,
        children: A,
        dynamicChildren: E,
        shapeFlag: L,
        patchFlag: F,
        dirs: j,
      } = d;
      if ((S != null && Jr(S, null, m, d, !0), L & 256)) {
        h.ctx.deactivate(d);
        return;
      }
      const H = L & 1 && j,
        q = !Vn(d);
      let te;
      if ((q && (te = C && C.onVnodeBeforeUnmount) && tt(te, h, d), L & 6))
        w(d.component, m, g);
      else {
        if (L & 128) {
          d.suspense.unmount(m, g);
          return;
        }
        H && It(d, null, h, "beforeUnmount"),
          L & 64
            ? d.type.remove(d, h, m, v, ee, g)
            : E && (O !== ge || (F > 0 && F & 64))
            ? N(E, h, m, !1, !0)
            : ((O === ge && F & 384) || (!v && L & 16)) && N(A, h, m),
          g && Ie(d);
      }
      ((q && (te = C && C.onVnodeUnmounted)) || H) &&
        Ne(() => {
          te && tt(te, h, d), H && It(d, null, h, "unmounted");
        }, m);
    },
    Ie = (d) => {
      const { type: h, el: m, anchor: g, transition: v } = d;
      if (h === ge) {
        Pt(m, g);
        return;
      }
      if (h === zn) {
        K(d);
        return;
      }
      const O = () => {
        s(m), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (d.shapeFlag & 1 && v && !v.persisted) {
        const { leave: C, delayLeave: S } = v,
          A = () => C(m, O);
        S ? S(d.el, O, A) : A();
      } else O();
    },
    Pt = (d, h) => {
      let m;
      for (; d !== h; ) (m = p(d)), s(d), (d = m);
      s(h);
    },
    w = (d, h, m) => {
      const { bum: g, scope: v, update: O, subTree: C, um: S } = d;
      g && Bn(g),
        v.stop(),
        O && ((O.active = !1), fe(C, d, h, m)),
        S && Ne(S, h),
        Ne(() => {
          d.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    N = (d, h, m, g = !1, v = !1, O = 0) => {
      for (let C = O; C < d.length; C++) fe(d[C], h, m, g, v);
    },
    T = (d) =>
      d.shapeFlag & 6
        ? T(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : p(d.anchor || d.el);
  let M = !1;
  const Z = (d, h, m) => {
      d == null
        ? h._vnode && fe(h._vnode, null, null, !0)
        : x(h._vnode || null, d, h, null, null, null, m),
        M || ((M = !0), Xs(), Ai(), (M = !1)),
        (h._vnode = d);
    },
    ee = {
      p: x,
      um: fe,
      m: Pe,
      r: Ie,
      mt: qe,
      mc: xe,
      pc: Q,
      pbc: Ce,
      n: T,
      o: e,
    };
  let z, B;
  return t && ([z, B] = t(ee)), { render: Z, hydrate: z, createApp: ca(Z, z) };
}
function Tr({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ga(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Vi(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (D(r) && D(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = bt(s[o])), (l.el = i.el)),
        n || Vi(i, l)),
        l.type === pr && (l.el = i.el);
    }
}
function _a(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function zi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : zi(t);
}
const ya = (e) => e.__isTeleport,
  ge = Symbol.for("v-fgt"),
  pr = Symbol.for("v-txt"),
  Bt = Symbol.for("v-cmt"),
  zn = Symbol.for("v-stc"),
  _n = [];
let Je = null;
function ie(e = !1) {
  _n.push((Je = e ? null : []));
}
function ba() {
  _n.pop(), (Je = _n[_n.length - 1] || null);
}
let Sn = 1;
function co(e) {
  Sn += e;
}
function Ki(e) {
  return (
    (e.dynamicChildren = Sn > 0 ? Je || Qt : null),
    ba(),
    Sn > 0 && Je && Je.push(e),
    e
  );
}
function ve(e, t, n, r, s, o) {
  return Ki(R(e, t, n, r, s, o, !0));
}
function Dt(e, t, n, r, s) {
  return Ki(G(e, t, n, r, s, !0));
}
function Qr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const mr = "__vInternal",
  qi = ({ key: e }) => e ?? null,
  Kn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? _e(e) || ke(e) || V(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null
  );
function R(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === ge ? 0 : 1,
  i = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qi(t),
    ref: t && Kn(t),
    scopeId: Ti,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Le,
  };
  return (
    l
      ? (Cs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= _e(n) ? 8 : 16),
    Sn > 0 &&
      !i &&
      Je &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Je.push(c),
    c
  );
}
const G = va;
function va(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === jc) && (e = Bt), Qr(e))) {
    const l = Rt(e, t, !0);
    return (
      n && Cs(l, n),
      Sn > 0 &&
        !o &&
        Je &&
        (l.shapeFlag & 6 ? (Je[Je.indexOf(e)] = l) : Je.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Na(e) && (e = e.__vccOpts), t)) {
    t = wa(t);
    let { class: l, style: c } = t;
    l && !_e(l) && (t.class = Et(l)),
      se(c) && (yi(c) && !D(c) && (c = we({}, c)), (t.style = ps(c)));
  }
  const i = _e(e) ? 1 : Dc(e) ? 128 : ya(e) ? 64 : se(e) ? 4 : V(e) ? 2 : 0;
  return R(e, t, n, r, s, i, o, !0);
}
function wa(e) {
  return e ? (yi(e) || mr in e ? we({}, e) : e) : null;
}
function Rt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    l = t ? Ea(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && qi(l),
    ref:
      t && t.ref ? (n && s ? (D(s) ? s.concat(Kn(t)) : [s, Kn(t)]) : Kn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Se(e = " ", t = 0) {
  return G(pr, null, e, t);
}
function xa(e, t) {
  const n = G(zn, null, e);
  return (n.staticCount = t), n;
}
function Mt(e = "", t = !1) {
  return t ? (ie(), Dt(Bt, null, e)) : G(Bt, null, e);
}
function nt(e) {
  return e == null || typeof e == "boolean"
    ? G(Bt)
    : D(e)
    ? G(ge, null, e.slice())
    : typeof e == "object"
    ? bt(e)
    : G(pr, null, String(e));
}
function bt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Rt(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (D(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Cs(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(mr in t)
        ? (t._ctx = Le)
        : s === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    V(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Se(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ea(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Et([t.class, r.class]));
      else if (s === "style") t.style = ps([t.style, r.style]);
      else if (or(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(D(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function tt(e, t, n, r = null) {
  Xe(e, t, 7, [n, r]);
}
const Sa = ji();
let Oa = 0;
function Aa(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Sa,
    o = {
      uid: Oa++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ec(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Di(r, s),
      emitsOptions: Ri(r, s),
      emit: null,
      emitted: null,
      propsDefaults: le,
      inheritAttrs: r.inheritAttrs,
      ctx: le,
      data: le,
      props: le,
      attrs: le,
      slots: le,
      refs: le,
      setupState: le,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Nc.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Ae = null,
  er,
  Xr;
{
  const e = ni(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (er = t("__VUE_INSTANCE_SETTERS__", (n) => (Ae = n))),
    (Xr = t("__VUE_SSR_SETTERS__", (n) => (gr = n)));
}
const Pn = (e) => {
    const t = Ae;
    return (
      er(e),
      e.scope.on(),
      () => {
        e.scope.off(), er(t);
      }
    );
  },
  ao = () => {
    Ae && Ae.scope.off(), er(null);
  };
function Gi(e) {
  return e.vnode.shapeFlag & 4;
}
let gr = !1;
function Ca(e, t = !1) {
  t && Xr(t);
  const { props: n, children: r } = e.vnode,
    s = Gi(e);
  aa(e, n, s, t), da(e, r);
  const o = s ? Ra(e, t) : void 0;
  return t && Xr(!1), o;
}
function Ra(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = bi(new Proxy(e.ctx, ta)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Pa(e) : null),
      o = Pn(e);
    Ht();
    const i = Ot(r, e, 0, [e.props, s]);
    if ((Vt(), o(), Zo(i))) {
      if ((i.then(ao, ao), t))
        return i
          .then((l) => {
            uo(e, l, t);
          })
          .catch((l) => {
            ur(l, e, 0);
          });
      e.asyncDep = i;
    } else uo(e, i, t);
  } else Wi(e, t);
}
function uo(e, t, n) {
  V(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Ei(t)),
    Wi(e, n);
}
let fo;
function Wi(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && fo && !r.render) {
      const s = r.template || Os(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          u = we(we({ isCustomElement: o, delimiters: l }, i), c);
        r.render = fo(s, u);
      }
    }
    e.render = r.render || He;
  }
  {
    const s = Pn(e);
    Ht();
    try {
      na(e);
    } finally {
      Vt(), s();
    }
  }
}
function Ta(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Me(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Pa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ta(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function _r(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ei(bi(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in gn) return gn[n](e);
        },
        has(t, n) {
          return n in t || n in gn;
        },
      }))
    );
}
function Ia(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Na(e) {
  return V(e) && "__vccOpts" in e;
}
const Be = (e, t) => Ec(e, t, gr);
function Qe(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? se(t) && !D(t)
      ? Qr(t)
        ? G(e, null, [t])
        : G(e, t)
      : G(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Qr(n) && (n = [n]),
      G(e, t, n));
}
const La = "3.4.15";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ma = "http://www.w3.org/2000/svg",
  ka = "http://www.w3.org/1998/Math/MathML",
  vt = typeof document < "u" ? document : null,
  ho = vt && vt.createElement("template"),
  $a = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? vt.createElementNS(Ma, e)
          : t === "mathml"
          ? vt.createElementNS(ka, e)
          : vt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => vt.createTextNode(e),
    createComment: (e) => vt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => vt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        ho.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e;
        const l = ho.content;
        if (r === "svg" || r === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  ja = Symbol("_vtc");
function Fa(e, t, n) {
  const r = e[ja];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Da = Symbol("_vod"),
  Ua = Symbol("");
function Ba(e, t, n) {
  const r = e.style,
    s = r.display,
    o = _e(n);
  if (n && !o) {
    if (t && !_e(t)) for (const i in t) n[i] == null && Yr(r, i, "");
    for (const i in n) Yr(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Ua];
      i && (n += ";" + i), (r.cssText = n);
    }
  } else t && e.removeAttribute("style");
  Da in e && (r.display = s);
}
const po = /\s*!important$/;
function Yr(e, t, n) {
  if (D(n)) n.forEach((r) => Yr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Ha(e, t);
    po.test(n)
      ? e.setProperty(on(r), n.replace(po, ""), "important")
      : (e[r] = n);
  }
}
const mo = ["Webkit", "Moz", "ms"],
  Pr = {};
function Ha(e, t) {
  const n = Pr[t];
  if (n) return n;
  let r = lt(t);
  if (r !== "filter" && r in e) return (Pr[t] = r);
  r = cr(r);
  for (let s = 0; s < mo.length; s++) {
    const o = mo[s] + r;
    if (o in e) return (Pr[t] = o);
  }
  return t;
}
const go = "http://www.w3.org/1999/xlink";
function Va(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(go, t.slice(6, t.length))
      : e.setAttributeNS(go, t, n);
  else {
    const o = Xl(t);
    n == null || (o && !ri(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function za(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = n;
    const u = l === "OPTION" ? e.getAttribute("value") : e.value,
      a = n ?? "";
    u !== a && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean"
      ? (n = ri(n))
      : n == null && u === "string"
      ? ((n = ""), (c = !0))
      : u === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
function xt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ka(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const _o = Symbol("_vei");
function qa(e, t, n, r, s = null) {
  const o = e[_o] || (e[_o] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, c] = Ga(t);
    if (r) {
      const u = (o[t] = Qa(r, s));
      xt(e, l, u, c);
    } else i && (Ka(e, l, i, c), (o[t] = void 0));
  }
}
const yo = /(?:Once|Passive|Capture)$/;
function Ga(e) {
  let t;
  if (yo.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(yo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : on(e.slice(2)), t];
}
let Ir = 0;
const Wa = Promise.resolve(),
  Ja = () => Ir || (Wa.then(() => (Ir = 0)), (Ir = Date.now()));
function Qa(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Xe(Xa(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = Ja()), n;
}
function Xa(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const bo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ya = (e, t, n, r, s, o, i, l, c) => {
    const u = s === "svg";
    t === "class"
      ? Fa(e, r, u)
      : t === "style"
      ? Ba(e, n, r)
      : or(t)
      ? fs(t) || qa(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Za(e, t, r, u)
        )
      ? za(e, t, r, o, i, l, c)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Va(e, t, r, u));
  };
function Za(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && bo(t) && V(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return bo(t) && _e(n) ? !1 : t in e;
}
const tn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return D(t) ? (n) => Bn(t, n) : t;
};
function eu(e) {
  e.target.composing = !0;
}
function vo(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ft = Symbol("_assign"),
  $p = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[ft] = tn(s);
      const o = r || (s.props && s.props.type === "number");
      xt(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = vn(l)), e[ft](l);
      }),
        n &&
          xt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (xt(e, "compositionstart", eu),
          xt(e, "compositionend", vo),
          xt(e, "change", vo));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      o
    ) {
      if (((e[ft] = tn(o)), e.composing)) return;
      const i = s || e.type === "number" ? vn(e.value) : e.value,
        l = t ?? "";
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  jp = {
    created(e, { value: t }, n) {
      (e.checked = Ut(t, n.props.value)),
        (e[ft] = tn(n)),
        xt(e, "change", () => {
          e[ft](On(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e[ft] = tn(r)), t !== n && (e.checked = Ut(t, r.props.value));
    },
  },
  Fp = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = ir(t);
      xt(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? vn(On(i)) : On(i)));
        e[ft](e.multiple ? (s ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          fr(() => {
            e._assigning = !1;
          });
      }),
        (e[ft] = tn(r));
    },
    mounted(e, { value: t, oldValue: n, modifiers: { number: r } }) {
      wo(e, t, n, r);
    },
    beforeUpdate(e, t, n) {
      e[ft] = tn(n);
    },
    updated(e, { value: t, oldValue: n, modifiers: { number: r } }) {
      e._assigning || wo(e, t, n, r);
    },
  };
function wo(e, t, n, r) {
  const s = e.multiple,
    o = D(t);
  if (!(s && !o && !ir(t)) && !(o && Ut(t, n))) {
    for (let i = 0, l = e.options.length; i < l; i++) {
      const c = e.options[i],
        u = On(c);
      if (s)
        if (o) {
          const a = typeof u;
          a === "string" || a === "number"
            ? (c.selected = t.includes(r ? vn(u) : u))
            : (c.selected = Zl(t, u) > -1);
        } else c.selected = t.has(u);
      else if (Ut(On(c), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function On(e) {
  return "_value" in e ? e._value : e.value;
}
const tu = ["ctrl", "shift", "alt", "meta"],
  nu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => tu.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Dp = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = nu[t[i]];
          if (l && l(s, t)) return;
        }
        return e(s, ...o);
      })
    );
  },
  ru = we({ patchProp: Ya }, $a);
let xo;
function su() {
  return xo || (xo = pa(ru));
}
const ou = (...e) => {
  const t = su().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = lu(r);
      if (!s) return;
      const o = t._component;
      !V(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, iu(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function iu(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lu(e) {
  return _e(e) ? document.querySelector(e) : e;
}
function Ji(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: cu } = Object.prototype,
  { getPrototypeOf: Rs } = Object,
  yr = ((e) => (t) => {
    const n = cu.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ct = (e) => ((e = e.toLowerCase()), (t) => yr(t) === e),
  br = (e) => (t) => typeof t === e,
  { isArray: ln } = Array,
  An = br("undefined");
function au(e) {
  return (
    e !== null &&
    !An(e) &&
    e.constructor !== null &&
    !An(e.constructor) &&
    ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Qi = ct("ArrayBuffer");
function uu(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Qi(e.buffer)),
    t
  );
}
const fu = br("string"),
  ze = br("function"),
  Xi = br("number"),
  vr = (e) => e !== null && typeof e == "object",
  du = (e) => e === !0 || e === !1,
  qn = (e) => {
    if (yr(e) !== "object") return !1;
    const t = Rs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  hu = ct("Date"),
  pu = ct("File"),
  mu = ct("Blob"),
  gu = ct("FileList"),
  _u = (e) => vr(e) && ze(e.pipe),
  yu = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ze(e.append) &&
          ((t = yr(e)) === "formdata" ||
            (t === "object" &&
              ze(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  bu = ct("URLSearchParams"),
  vu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function In(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), ln(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (r = 0; r < i; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Yi(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Zi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  el = (e) => !An(e) && e !== Zi;
function Zr() {
  const { caseless: e } = (el(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Yi(t, s)) || s;
      qn(t[o]) && qn(r)
        ? (t[o] = Zr(t[o], r))
        : qn(r)
        ? (t[o] = Zr({}, r))
        : ln(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && In(arguments[r], n);
  return t;
}
const wu = (e, t, n, { allOwnKeys: r } = {}) => (
    In(
      t,
      (s, o) => {
        n && ze(s) ? (e[o] = Ji(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  xu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Eu = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Su = (e, t, n, r) => {
    let s, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && Rs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Ou = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Au = (e) => {
    if (!e) return null;
    if (ln(e)) return e;
    let t = e.length;
    if (!Xi(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Cu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Rs(Uint8Array)),
  Ru = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Tu = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Pu = ct("HTMLFormElement"),
  Iu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Eo = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Nu = ct("RegExp"),
  tl = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    In(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Lu = (e) => {
    tl(e, (t, n) => {
      if (ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ze(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Mu = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return ln(e) ? r(e) : r(String(e).split(t)), n;
  },
  ku = () => {},
  $u = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Nr = "abcdefghijklmnopqrstuvwxyz",
  So = "0123456789",
  nl = { DIGIT: So, ALPHA: Nr, ALPHA_DIGIT: Nr + Nr.toUpperCase() + So },
  ju = (e = 16, t = nl.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Fu(e) {
  return !!(
    e &&
    ze(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Du = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (vr(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = ln(r) ? [] : {};
            return (
              In(r, (i, l) => {
                const c = n(i, s + 1);
                !An(c) && (o[l] = c);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Uu = ct("AsyncFunction"),
  Bu = (e) => e && (vr(e) || ze(e)) && ze(e.then) && ze(e.catch),
  y = {
    isArray: ln,
    isArrayBuffer: Qi,
    isBuffer: au,
    isFormData: yu,
    isArrayBufferView: uu,
    isString: fu,
    isNumber: Xi,
    isBoolean: du,
    isObject: vr,
    isPlainObject: qn,
    isUndefined: An,
    isDate: hu,
    isFile: pu,
    isBlob: mu,
    isRegExp: Nu,
    isFunction: ze,
    isStream: _u,
    isURLSearchParams: bu,
    isTypedArray: Cu,
    isFileList: gu,
    forEach: In,
    merge: Zr,
    extend: wu,
    trim: vu,
    stripBOM: xu,
    inherits: Eu,
    toFlatObject: Su,
    kindOf: yr,
    kindOfTest: ct,
    endsWith: Ou,
    toArray: Au,
    forEachEntry: Ru,
    matchAll: Tu,
    isHTMLForm: Pu,
    hasOwnProperty: Eo,
    hasOwnProp: Eo,
    reduceDescriptors: tl,
    freezeMethods: Lu,
    toObjectSet: Mu,
    toCamelCase: Iu,
    noop: ku,
    toFiniteNumber: $u,
    findKey: Yi,
    global: Zi,
    isContextDefined: el,
    ALPHABET: nl,
    generateString: ju,
    isSpecCompliantForm: Fu,
    toJSONObject: Du,
    isAsyncFn: Uu,
    isThenable: Bu,
  };
function W(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
y.inherits(W, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const rl = W.prototype,
  sl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  sl[e] = { value: e };
});
Object.defineProperties(W, sl);
Object.defineProperty(rl, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, s, o) => {
  const i = Object.create(rl);
  return (
    y.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    W.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Hu = null;
function es(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function ol(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oo(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = ol(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Vu(e) {
  return y.isArray(e) && !e.some(es);
}
const zu = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function wr(e, t, n) {
  if (!y.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, P) {
        return !y.isUndefined(P[x]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || a,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(b) {
    if (b === null) return "";
    if (y.isDate(b)) return b.toISOString();
    if (!c && y.isBlob(b))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(b) || y.isTypedArray(b)
      ? c && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function a(b, x, P) {
    let I = b;
    if (b && !P && typeof b == "object") {
      if (y.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (y.isArray(b) && Vu(b)) ||
        ((y.isFileList(b) || y.endsWith(x, "[]")) && (I = y.toArray(b)))
      )
        return (
          (x = ol(x)),
          I.forEach(function ($, K) {
            !(y.isUndefined($) || $ === null) &&
              t.append(
                i === !0 ? Oo([x], K, o) : i === null ? x : x + "[]",
                u($)
              );
          }),
          !1
        );
    }
    return es(b) ? !0 : (t.append(Oo(P, x, o), u(b)), !1);
  }
  const f = [],
    p = Object.assign(zu, {
      defaultVisitor: a,
      convertValue: u,
      isVisitable: es,
    });
  function _(b, x) {
    if (!y.isUndefined(b)) {
      if (f.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      f.push(b),
        y.forEach(b, function (I, k) {
          (!(y.isUndefined(I) || I === null) &&
            s.call(t, I, y.isString(k) ? k.trim() : k, x, p)) === !0 &&
            _(I, x ? x.concat(k) : [k]);
        }),
        f.pop();
    }
  }
  if (!y.isObject(e)) throw new TypeError("data must be an object");
  return _(e), t;
}
function Ao(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ts(e, t) {
  (this._pairs = []), e && wr(e, this, t);
}
const il = Ts.prototype;
il.append = function (t, n) {
  this._pairs.push([t, n]);
};
il.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ao);
      }
    : Ao;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Ku(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ll(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Ku,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = y.isURLSearchParams(t) ? t.toString() : new Ts(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Co {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const cl = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  qu = typeof URLSearchParams < "u" ? URLSearchParams : Ts,
  Gu = typeof FormData < "u" ? FormData : null,
  Wu = typeof Blob < "u" ? Blob : null,
  Ju = {
    isBrowser: !0,
    classes: { URLSearchParams: qu, FormData: Gu, Blob: Wu },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  al = typeof window < "u" && typeof document < "u",
  Qu = ((e) => al && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Xu =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Yu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: al,
        hasStandardBrowserEnv: Qu,
        hasStandardBrowserWebWorkerEnv: Xu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ot = { ...Yu, ...Ju };
function Zu(e, t) {
  return wr(
    e,
    new ot.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return ot.isNode && y.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ef(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function tf(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function ul(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      c = o >= n.length;
    return (
      (i = !i && y.isArray(s) ? s.length : i),
      c
        ? (y.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !l)
        : ((!s[i] || !y.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && y.isArray(s[i]) && (s[i] = tf(s[i])),
          !l)
    );
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, s) => {
        t(ef(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function nf(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ps = {
  transitional: cl,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = y.isObject(t);
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return s ? JSON.stringify(ul(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Zu(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return wr(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), nf(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ps.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && y.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? W.from(l, W.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ot.classes.FormData, Blob: ot.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ps.headers[e] = {};
});
const Is = Ps,
  rf = y.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  sf = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && rf[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ro = Symbol("internals");
function dn(e) {
  return e && String(e).trim().toLowerCase();
}
function Gn(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Gn) : String(e);
}
function of(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const lf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Lr(e, t, n, r, s) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}
function cf(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function af(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class xr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, c, u) {
      const a = dn(c);
      if (!a) throw new Error("header name must be a non-empty string");
      const f = y.findKey(s, a);
      (!f || s[f] === void 0 || u === !0 || (u === void 0 && s[f] !== !1)) &&
        (s[f || c] = Gn(l));
    }
    const i = (l, c) => y.forEach(l, (u, a) => o(u, a, c));
    return (
      y.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : y.isString(t) && (t = t.trim()) && !lf(t)
        ? i(sf(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = dn(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return of(s);
        if (y.isFunction(n)) return n.call(this, s, r);
        if (y.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = dn(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Lr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = dn(i)), i)) {
        const l = y.findKey(r, i);
        l && (!n || Lr(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Lr(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (s, o) => {
        const i = y.findKey(r, o);
        if (i) {
          (n[i] = Gn(s)), delete n[o];
          return;
        }
        const l = t ? cf(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Gn(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && y.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ro] = this[Ro] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const l = dn(i);
      r[l] || (af(s, i), (r[l] = !0));
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
xr.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
y.reduceDescriptors(xr.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(xr);
const dt = xr;
function Mr(e, t) {
  const n = this || Is,
    r = t || n,
    s = dt.from(r.headers);
  let o = r.data;
  return (
    y.forEach(e, function (l) {
      o = l.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function fl(e) {
  return !!(e && e.__CANCEL__);
}
function Nn(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
y.inherits(Nn, W, { __CANCEL__: !0 });
function uf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new W(
          "Request failed with status code " + n.status,
          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const ff = ot.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          y.isString(r) && i.push("path=" + r),
          y.isString(s) && i.push("domain=" + s),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function df(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function dl(e, t) {
  return e && !df(t) ? hf(e, t) : t;
}
const pf = ot.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const l = y.isString(i) ? s(i) : i;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function mf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function gf(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        a = r[o];
      i || (i = u), (n[s] = c), (r[s] = u);
      let f = o,
        p = 0;
      for (; f !== s; ) (p += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - i < t)) return;
      const _ = a && u - a;
      return _ ? Math.round((p * 1e3) / _) : void 0;
    }
  );
}
function To(e, t) {
  let n = 0;
  const r = gf(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      l = o - n,
      c = r(l),
      u = o <= i;
    n = o;
    const a = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && u ? (i - o) / c : void 0,
      event: s,
    };
    (a[t ? "download" : "upload"] = !0), e(a);
  };
}
const _f = typeof XMLHttpRequest < "u",
  yf =
    _f &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = dt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: l } = e,
          c;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let a;
        if (y.isFormData(s)) {
          if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((a = o.getContentType()) !== !1) {
            const [x, ...P] = a
              ? a
                  .split(";")
                  .map((I) => I.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([x || "multipart/form-data", ...P].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const x = e.auth.username || "",
            P = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(x + ":" + P));
        }
        const p = dl(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), ll(p, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function _() {
          if (!f) return;
          const x = dt.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders()
            ),
            I = {
              data:
                !i || i === "text" || i === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: x,
              config: e,
              request: f,
            };
          uf(
            function ($) {
              n($), u();
            },
            function ($) {
              r($), u();
            },
            I
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = _)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(_);
              }),
          (f.onabort = function () {
            f &&
              (r(new W("Request aborted", W.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new W("Network Error", W.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let P = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const I = e.transitional || cl;
            e.timeoutErrorMessage && (P = e.timeoutErrorMessage),
              r(
                new W(
                  P,
                  I.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          ot.hasStandardBrowserEnv &&
            (l && y.isFunction(l) && (l = l(e)), l || (l !== !1 && pf(p))))
        ) {
          const x =
            e.xsrfHeaderName && e.xsrfCookieName && ff.read(e.xsrfCookieName);
          x && o.set(e.xsrfHeaderName, x);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in f &&
            y.forEach(o.toJSON(), function (P, I) {
              f.setRequestHeader(I, P);
            }),
          y.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          i && i !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", To(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", To(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (x) => {
              f &&
                (r(!x || x.type ? new Nn(null, e, f) : x),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const b = mf(p);
        if (b && ot.protocols.indexOf(b) === -1) {
          r(new W("Unsupported protocol " + b + ":", W.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(s || null);
      });
    },
  ts = { http: Hu, xhr: yf };
y.forEach(ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Po = (e) => `- ${e}`,
  bf = (e) => y.isFunction(e) || e === null || e === !1,
  hl = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !bf(n) && ((r = ts[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new W(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Po).join(`
`)
            : " " + Po(o[0])
          : "as no adapter specified";
        throw new W(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ts,
  };
function kr(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Nn(null, e);
}
function Io(e) {
  return (
    kr(e),
    (e.headers = dt.from(e.headers)),
    (e.data = Mr.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    hl
      .getAdapter(e.adapter || Is.adapter)(e)
      .then(
        function (r) {
          return (
            kr(e),
            (r.data = Mr.call(e, e.transformResponse, r)),
            (r.headers = dt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            fl(r) ||
              (kr(e),
              r &&
                r.response &&
                ((r.response.data = Mr.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = dt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const No = (e) => (e instanceof dt ? e.toJSON() : e);
function nn(e, t) {
  t = t || {};
  const n = {};
  function r(u, a, f) {
    return y.isPlainObject(u) && y.isPlainObject(a)
      ? y.merge.call({ caseless: f }, u, a)
      : y.isPlainObject(a)
      ? y.merge({}, a)
      : y.isArray(a)
      ? a.slice()
      : a;
  }
  function s(u, a, f) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, a, f);
  }
  function o(u, a) {
    if (!y.isUndefined(a)) return r(void 0, a);
  }
  function i(u, a) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, a);
  }
  function l(u, a, f) {
    if (f in t) return r(u, a);
    if (f in e) return r(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, a) => s(No(u), No(a), !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (a) {
      const f = c[a] || s,
        p = f(e[a], t[a], a);
      (y.isUndefined(p) && f !== l) || (n[a] = p);
    }),
    n
  );
}
const pl = "1.6.7",
  Ns = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ns[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Lo = {};
Ns.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      pl +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, l) => {
    if (t === !1)
      throw new W(
        s(i, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return (
      n &&
        !Lo[i] &&
        ((Lo[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, l) : !0
    );
  };
};
function vf(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new W("option " + o + " must be " + c, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new W("Unknown option " + o, W.ERR_BAD_OPTION);
  }
}
const ns = { assertOptions: vf, validators: Ns },
  mt = ns.validators;
class tr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Co(), response: new Co() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = nn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ns.assertOptions(
        r,
        {
          silentJSONParsing: mt.transitional(mt.boolean),
          forcedJSONParsing: mt.transitional(mt.boolean),
          clarifyTimeoutError: mt.transitional(mt.boolean),
        },
        !1
      ),
      s != null &&
        (y.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ns.assertOptions(
              s,
              { encode: mt.function, serialize: mt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && y.merge(o.common, o[n.method]);
    o &&
      y.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete o[b];
        }
      ),
      (n.headers = dt.concat(i, o));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((c = c && x.synchronous), l.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let a,
      f = 0,
      p;
    if (!c) {
      const b = [Io.bind(this), void 0];
      for (
        b.unshift.apply(b, l),
          b.push.apply(b, u),
          p = b.length,
          a = Promise.resolve(n);
        f < p;

      )
        a = a.then(b[f++], b[f++]);
      return a;
    }
    p = l.length;
    let _ = n;
    for (f = 0; f < p; ) {
      const b = l[f++],
        x = l[f++];
      try {
        _ = b(_);
      } catch (P) {
        x.call(this, P);
        break;
      }
    }
    try {
      a = Io.call(this, _);
    } catch (b) {
      return Promise.reject(b);
    }
    for (f = 0, p = u.length; f < p; ) a = a.then(u[f++], u[f++]);
    return a;
  }
  getUri(t) {
    t = nn(this.defaults, t);
    const n = dl(t.baseURL, t.url);
    return ll(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function (t) {
  tr.prototype[t] = function (n, r) {
    return this.request(
      nn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
y.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, l) {
      return this.request(
        nn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (tr.prototype[t] = n()), (tr.prototype[t + "Form"] = n(!0));
});
const Wn = tr;
class Ls {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        r.reason || ((r.reason = new Nn(o, i, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ls(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const wf = Ls;
function xf(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Ef(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const rs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(rs).forEach(([e, t]) => {
  rs[t] = e;
});
const Sf = rs;
function ml(e) {
  const t = new Wn(e),
    n = Ji(Wn.prototype.request, t);
  return (
    y.extend(n, Wn.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return ml(nn(e, s));
    }),
    n
  );
}
const ne = ml(Is);
ne.Axios = Wn;
ne.CanceledError = Nn;
ne.CancelToken = wf;
ne.isCancel = fl;
ne.VERSION = pl;
ne.toFormData = wr;
ne.AxiosError = W;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = xf;
ne.isAxiosError = Ef;
ne.mergeConfig = nn;
ne.AxiosHeaders = dt;
ne.formToJSON = (e) => ul(y.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = hl.getAdapter;
ne.HttpStatusCode = Sf;
ne.default = ne;
const gl = "/elmanzel/img/logo.png",
  Ln = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  Of = {
    name: "Header",
    data() {
      return {
        showMobileMenu: !1,
        showcategory: !1,
        categories: [],
        cart: { items: [] },
      };
    },
    mounted() {
      (this.cart = this.$store.state.cart), this.GetCategory();
    },
    methods: {
      async GetCategory() {
        const e = await ne.get("/api/allcategories");
        this.categories = e.data.Categories;
      },
      Logout() {
        this.$store.dispatch("logout"), this.$router.push("/");
      },
    },
    computed: {
      cartTotalLength() {
        let e = 0;
        for (let t = 0; t < this.cart.items.length; t++)
          e += this.cart.items[t].quantity;
        return e;
      },
    },
  },
  Af = { key: 0, class: "bg-gray-50" },
  Cf = { class: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8" },
  Rf = { class: "flex items-center justify-end gap-4" },
  Tf = R("span", { class: "sr-only" }, "Menu", -1),
  Pf = R("i", { class: "bx bx-menu-alt-left text-md" }, null, -1),
  If = [Tf, Pf],
  Nf = { class: "flex items-center gap-4" },
  Lf = R(
    "form",
    { method: "get", action: "/elmanzel/search", class: "relative" },
    [
      R("label", { class: "sr-only", for: "search" }, " Search "),
      R("input", {
        class:
          "h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56",
        id: "search",
        type: "search",
        name: "query",
        placeholder: "Search website...",
      }),
      R(
        "button",
        {
          type: "button",
          class:
            "absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700",
        },
        [
          R("span", { class: "sr-only" }, "Search"),
          R(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
            },
            [
              R("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
              }),
            ]
          ),
        ]
      ),
    ],
    -1
  ),
  Mf = R("span", { class: "sr-only" }, "Cart", -1),
  kf = R("i", { class: "bx bx-cart-alt text-md" }, null, -1),
  $f = {
    key: 0,
    class:
      "absolute top-[-30%] right-[-20%] bg-red-600 text-white rounded w-5 text-center shadow-xl",
  },
  jf = R(
    "span",
    { "aria-hidden": "true", class: "block h-6 w-px rounded-full bg-gray-200" },
    null,
    -1
  ),
  Ff = R("span", { class: "sr-only" }, "Home", -1),
  Df = R(
    "img",
    { alt: "Man", src: gl, class: "h-10 w-10 rounded-full object-cover" },
    null,
    -1
  ),
  Uf = { class: "mt-8 relative sm:hidden z-50" },
  Bf = R("i", { class: "bx bx-chevron-down" }, null, -1),
  Hf = R("i", { class: "bx bx-right-arrow-alt" }, null, -1),
  Vf = {
    key: 1,
    class:
      "w-full bg-red-600 h-10 text-white text-center flex items-center justify-center rounded",
  },
  zf = { class: "mt-8" },
  Kf = { class: "menu hidden relative sm:flex gap-3 flex-row w-full" },
  qf = R("i", { class: "bx bx-chevron-down" }, null, -1),
  Gf = R("i", { class: "bx bx-right-arrow-alt" }, null, -1),
  Wf = {
    key: 0,
    class:
      "w-36 ml-auto bg-red-600 h-10 text-white text-center flex items-center justify-center rounded",
  };
function Jf(e, t, n, r, s, o) {
  const i = st("router-link");
  return this.$store.state.loading
    ? Mt("", !0)
    : (ie(),
      ve("header", Af, [
        R("div", Cf, [
          R("div", Rf, [
            R(
              "button",
              {
                onClick:
                  t[0] ||
                  (t[0] = (l) => (s.showMobileMenu = !s.showMobileMenu)),
                class:
                  "mr-auto sm:hidden shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 flex items-center justify-items-center",
              },
              If
            ),
            R("div", Nf, [
              Lf,
              G(
                i,
                {
                  to: "/elmanzel/cart",
                  class:
                    "relative shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 flex items-center justify-items-center",
                },
                {
                  default: oe(() => [
                    Mf,
                    kf,
                    o.cartTotalLength !== 0
                      ? (ie(), ve("span", $f, it(o.cartTotalLength), 1))
                      : Mt("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]),
            jf,
            G(
              i,
              { to: "/elmanzel/", class: "block shrink-0" },
              { default: oe(() => [Ff, Df]), _: 1 }
            ),
          ]),
          R("div", Uf, [
            R(
              "div",
              {
                class: Et([
                  { flex: s.showMobileMenu, hidden: !s.showMobileMenu },
                  "menu absolute bg-white pl-2 pr-2 pt-5 pb-5 flex gap-3 flex-col w-64 rounded-md shadow-md",
                ]),
              },
              [
                R(
                  "button",
                  {
                    onClick:
                      t[1] ||
                      (t[1] = (l) => (s.showcategory = !s.showcategory)),
                    class:
                      "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                    to: "/elmanzel/",
                  },
                  [Se(" Categories "), Bf]
                ),
                (ie(!0),
                ve(
                  ge,
                  null,
                  $t(
                    this.categories,
                    (l) => (
                      ie(),
                      Dt(
                        i,
                        {
                          class: Et([
                            { flex: s.showcategory, hidden: !s.showcategory },
                            "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-5",
                          ]),
                          to: "/elmanzel/category/" + l.slug,
                        },
                        {
                          default: oe(() => [Hf, Se(" " + it(l.name), 1)]),
                          _: 2,
                        },
                        1032,
                        ["class", "to"]
                      )
                    )
                  ),
                  256
                )),
                G(
                  i,
                  {
                    class:
                      "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                    to: "/elmanzel/contact",
                  },
                  { default: oe(() => [Se(" Contact ")]), _: 1 }
                ),
                G(
                  i,
                  {
                    class:
                      "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                    to: "/elmanzel/about-us",
                  },
                  { default: oe(() => [Se(" About ")]), _: 1 }
                ),
                G(
                  i,
                  {
                    class:
                      "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                    to: "/elmanzel/all-products",
                  },
                  { default: oe(() => [Se(" Products ")]), _: 1 }
                ),
                this.$store.state.isAuthenticated
                  ? (ie(),
                    Dt(
                      i,
                      {
                        key: 0,
                        class:
                          "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                        to: "/elmanzel/User/order-history",
                      },
                      { default: oe(() => [Se(" Order History ")]), _: 1 }
                    ))
                  : Mt("", !0),
                this.$store.state.isAuthenticated
                  ? (ie(),
                    ve("div", Vf, [
                      R(
                        "button",
                        { onClick: t[2] || (t[2] = (l) => o.Logout()) },
                        "Logout"
                      ),
                    ]))
                  : Mt("", !0),
              ],
              2
            ),
          ]),
          R("div", zf, [
            R("div", Kf, [
              R(
                "button",
                {
                  onClick:
                    t[3] || (t[3] = (l) => (s.showcategory = !s.showcategory)),
                  class:
                    "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                },
                [Se(" Categories "), qf]
              ),
              R(
                "div",
                {
                  class: Et([
                    { flex: s.showcategory, hidden: !s.showcategory },
                    "submenu absolute flex flex-col items-start top-10 bg-white w-60 rounded-lg p-3 shadow-lg",
                  ]),
                },
                [
                  (ie(!0),
                  ve(
                    ge,
                    null,
                    $t(
                      this.categories,
                      (l) => (
                        ie(),
                        Dt(
                          i,
                          {
                            class:
                              "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2 w-full",
                            to: "/elmanzel/category/" + l.name,
                          },
                          {
                            default: oe(() => [Gf, Se(" " + it(l.name), 1)]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    256
                  )),
                ],
                2
              ),
              G(
                i,
                {
                  class:
                    "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                  to: "/elmanzel/contact",
                },
                { default: oe(() => [Se(" Contact ")]), _: 1 }
              ),
              G(
                i,
                {
                  class:
                    "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                  to: "/elmanzel/about-us",
                },
                { default: oe(() => [Se(" About ")]), _: 1 }
              ),
              G(
                i,
                {
                  class:
                    "hover:bg-gray-50 h-9 rounded-lg flex items-center pl-2",
                  to: "/elmanzel/all-products",
                },
                { default: oe(() => [Se(" Products ")]), _: 1 }
              ),
              this.$store.state.isAuthenticated
                ? (ie(),
                  ve("div", Wf, [
                    R(
                      "button",
                      { onClick: t[4] || (t[4] = (l) => o.Logout()) },
                      "Logout"
                    ),
                  ]))
                : Mt("", !0),
            ]),
          ]),
        ]),
      ]));
}
const Qf = Ln(Of, [["render", Jf]]),
  Xf = {
    name: "Footer",
    data() {
      return { categories: [] };
    },
    mounted() {
      this.GetCategory();
    },
    methods: {
      async GetCategory() {
        const e = await ne.get("/api/allcategories");
        this.categories = e.data.Categories;
      },
    },
  },
  Yf = { key: 0, class: "bg-gray-50" },
  Zf = { class: "mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8" },
  ed = { class: "mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32" },
  td = xa(
    '<div class="mx-auto max-w-sm lg:max-w-none"><p class="mt-4 text-center text-gray-500 lg:text-left lg:text-lg"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto repudiandae, provident velit earum? </p><div class="mt-6 flex justify-center gap-4 lg:justify-start"><a class="text-gray-700 transition hover:text-gray-700/75" href="https://www.facebook.com/profile.php?id=61555732587538" target="_blank" rel="noreferrer"><span class="sr-only"> Facebook </span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a class="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/AhmedFawzyMof" target="_blank" rel="noreferrer"><span class="sr-only"> GitHub </span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a></div></div>',
    1
  ),
  nd = {
    class: "grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left",
  },
  rd = R("strong", { class: "font-medium text-gray-900" }, " Categories ", -1),
  sd = { class: "mt-6 space-y-1" },
  od = R("strong", { class: "font-medium text-gray-900" }, " Support ", -1),
  id = { class: "mt-6 space-y-1" },
  ld = R(
    "div",
    { class: "mt-16 border-t border-gray-100 pt-8" },
    [
      R(
        "p",
        { class: "text-center text-xs/relaxed text-gray-500" },
        " © Company 2024. All rights reserved. "
      ),
    ],
    -1
  );
function cd(e, t, n, r, s, o) {
  const i = st("router-link");
  return this.$store.state.loading
    ? Mt("", !0)
    : (ie(),
      ve("footer", Yf, [
        R("div", Zf, [
          R("div", ed, [
            td,
            R("div", nd, [
              R("div", null, [
                rd,
                R("ul", sd, [
                  (ie(!0),
                  ve(
                    ge,
                    null,
                    $t(
                      this.categories,
                      (l) => (
                        ie(),
                        ve("li", null, [
                          G(
                            i,
                            {
                              class:
                                "text-gray-700 transition hover:text-gray-700/75",
                              to: "/elmanzel/category/" + l.name,
                            },
                            { default: oe(() => [Se(it(l.name), 1)]), _: 2 },
                            1032,
                            ["to"]
                          ),
                        ])
                      )
                    ),
                    256
                  )),
                ]),
              ]),
              R("div", null, [
                od,
                R("ul", id, [
                  R("li", null, [
                    G(
                      i,
                      {
                        class:
                          "text-gray-700 transition hover:text-gray-700/75",
                        to: "/elmanzel/faq",
                      },
                      { default: oe(() => [Se(" FAQs ")]), _: 1 }
                    ),
                  ]),
                  R("li", null, [
                    G(
                      i,
                      {
                        class:
                          "text-gray-700 transition hover:text-gray-700/75",
                        to: "/elmanzel/about-us",
                      },
                      { default: oe(() => [Se(" About ")]), _: 1 }
                    ),
                  ]),
                  R("li", null, [
                    G(
                      i,
                      {
                        class:
                          "text-gray-700 transition hover:text-gray-700/75",
                        to: "/elmanzel/contact-us",
                      },
                      { default: oe(() => [Se(" Contact Us ")]), _: 1 }
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          ld,
        ]),
      ]));
}
const ad = Ln(Xf, [["render", cd]]),
  ud = {
    components: { Header: Qf, Footer: ad },
    data() {
      return { categories: [], tags: [], cart: { items: [] } };
    },
    beforeCreate() {
      this.$store.commit("initializeStore");
      const e = this.$store.state.token;
      e
        ? (ne.defaults.headers.common.Authorization = "Token " + e)
        : (ne.defaults.headers.common.Authorization = "");
    },
    mounted() {
      this.cart = this.$store.state.cart;
    },
    methods: {
      async getNavData() {
        (this.$store.state.loading = !0),
          await ne.get("/navdata").then((e) => {
            (this.categories = e.data.Categories), (this.tags = e.data.Tags);
          }),
          (this.$store.state.loading = !1);
      },
      Logout() {
        (ne.defaults.headers.common.Authorization = ""),
          localStorage.removeItem("token"),
          localStorage.removeItem("username"),
          localStorage.removeItem("userid"),
          this.$store.commit("removeToken"),
          this.$router.push("/"),
          location.reload();
      },
    },
    computed: {
      cartTotalLength() {
        let e = 0;
        for (let t = 0; t < this.cart.items.length; t++)
          e += this.cart.items[t].quantity;
        return e;
      },
    },
  },
  fd = { key: 0, class: "loading" },
  dd = R("img", { class: "logo", src: gl }, null, -1),
  hd = R("div", { class: "box" }, null, -1),
  pd = R(
    "span",
    { class: "loader" },
    [R("span", { class: "loader-inner" })],
    -1
  ),
  md = [dd, hd, pd];
function gd(e, t, n, r, s, o) {
  const i = st("Header"),
    l = st("router-view"),
    c = st("Footer");
  return (
    ie(),
    ve(
      ge,
      null,
      [
        this.$store.state.loading ? (ie(), ve("div", fd, md)) : Mt("", !0),
        G(i),
        G(l),
        G(c),
      ],
      64
    )
  );
}
const _d = Ln(ud, [["render", gd]]),
  yd = "modulepreload",
  bd = function (e) {
    return "/" + e;
  },
  Mo = {},
  Ue = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const o = document.getElementsByTagName("link");
      s = Promise.all(
        n.map((i) => {
          if (((i = bd(i)), i in Mo)) return;
          Mo[i] = !0;
          const l = i.endsWith(".css"),
            c = l ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let f = o.length - 1; f >= 0; f--) {
              const p = o[f];
              if (p.href === i && (!l || p.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${i}"]${c}`)) return;
          const a = document.createElement("link");
          if (
            ((a.rel = l ? "stylesheet" : yd),
            l || ((a.as = "script"), (a.crossOrigin = "")),
            (a.href = i),
            document.head.appendChild(a),
            l)
          )
            return new Promise((f, p) => {
              a.addEventListener("load", f),
                a.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${i}`))
                );
            });
        })
      );
    }
    return s
      .then(() => t())
      .catch((o) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o;
      });
  };
function vd() {
  return _l().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _l() {
  return typeof navigator < "u" && typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : {};
}
const wd = typeof Proxy == "function",
  xd = "devtools-plugin:setup",
  Ed = "plugin:settings:set";
let qt, ss;
function Sd() {
  var e;
  return (
    qt !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((qt = !0), (ss = window.performance))
        : typeof global < "u" &&
          !((e = global.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((qt = !0), (ss = global.perf_hooks.performance))
        : (qt = !1)),
    qt
  );
}
function Od() {
  return Sd() ? ss.now() : Date.now();
}
class Ad {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        r[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const i = localStorage.getItem(s),
        l = JSON.parse(i);
      Object.assign(o, l);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {}
        o = i;
      },
      now() {
        return Od();
      },
    }),
      n &&
        n.on(Ed, (i, l) => {
          i === this.plugin.id && this.fallbacks.setSettings(l);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target.on[l]
              : (...c) => {
                  this.onQueue.push({ method: l, args: c });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, l) =>
            this.target
              ? this.target[l]
              : l === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(l)
              ? (...c) => (
                  this.targetQueue.push({
                    method: l,
                    args: c,
                    resolve: () => {},
                  }),
                  this.fallbacks[l](...c)
                )
              : (...c) =>
                  new Promise((u) => {
                    this.targetQueue.push({ method: l, args: c, resolve: u });
                  }),
        }
      ));
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Cd(e, t) {
  const n = e,
    r = _l(),
    s = vd(),
    o = wd && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o)) s.emit(xd, e, t);
  else {
    const i = o ? new Ad(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget);
  }
}
/*!
 * vue-router v4.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const yl =
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  cn = (e) => (yl ? Symbol(e) : "_vr_" + e),
  Rd = cn("rvlm"),
  ko = cn("rvd"),
  Ms = cn("r"),
  bl = cn("rl"),
  os = cn("rvl"),
  Jt = typeof window < "u";
function Td(e) {
  return e.__esModule || (yl && e[Symbol.toStringTag] === "Module");
}
const re = Object.assign;
function $r(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Array.isArray(s) ? s.map(e) : e(s);
  }
  return n;
}
const yn = () => {},
  Pd = /\/$/,
  Id = (e) => e.replace(Pd, "");
function jr(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const l = t.indexOf("?"),
    c = t.indexOf("#", l > -1 ? l : 0);
  return (
    l > -1 &&
      ((r = t.slice(0, l)),
      (o = t.slice(l + 1, c > -1 ? c : t.length)),
      (s = e(o))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = kd(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: i }
  );
}
function Nd(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function $o(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Ld(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    rn(t.matched[r], n.matched[s]) &&
    vl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Md(e[n], t[n])) return !1;
  return !0;
}
function Md(e, t) {
  return Array.isArray(e) ? jo(e, t) : Array.isArray(t) ? jo(t, e) : e === t;
}
function jo(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function kd(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let s = n.length - 1,
    o,
    i;
  for (o = 0; o < r.length; o++)
    if (((i = r[o]), !(s === 1 || i === ".")))
      if (i === "..") s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(o - (o === r.length ? 1 : 0)).join("/")
  );
}
var Cn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Cn || (Cn = {}));
var bn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(bn || (bn = {}));
function $d(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Id(e);
}
const jd = /^[^#]+#/;
function Fd(e, t) {
  return e.replace(jd, "#") + t;
}
function Dd(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Er = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Ud(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Dd(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Fo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const is = new Map();
function Bd(e, t) {
  is.set(e, t);
}
function Hd(e) {
  const t = is.get(e);
  return is.delete(e), t;
}
let Vd = () => location.protocol + "//" + location.host;
function wl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), $o(c, "");
  }
  return $o(n, e) + r + s;
}
function zd(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const l = ({ state: p }) => {
    const _ = wl(e, location),
      b = n.value,
      x = t.value;
    let P = 0;
    if (p) {
      if (((n.value = _), (t.value = p), i && i === b)) {
        i = null;
        return;
      }
      P = x ? p.position - x.position : 0;
    } else r(_);
    s.forEach((I) => {
      I(n.value, b, {
        delta: P,
        type: Cn.pop,
        direction: P ? (P > 0 ? bn.forward : bn.back) : bn.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function u(p) {
    s.push(p);
    const _ = () => {
      const b = s.indexOf(p);
      b > -1 && s.splice(b, 1);
    };
    return o.push(_), _;
  }
  function a() {
    const { history: p } = window;
    p.state && p.replaceState(re({}, p.state, { scroll: Er() }), "");
  }
  function f() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", a);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", a),
    { pauseListeners: c, listen: u, destroy: f }
  );
}
function Do(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Er() : null,
  };
}
function Kd(e) {
  const { history: t, location: n } = window,
    r = { value: wl(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(c, u, a) {
    const f = e.indexOf("#"),
      p =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c
          : Vd() + e + c;
    try {
      t[a ? "replaceState" : "pushState"](u, "", p), (s.value = u);
    } catch (_) {
      console.error(_), n[a ? "replace" : "assign"](p);
    }
  }
  function i(c, u) {
    const a = re({}, t.state, Do(s.value.back, c, s.value.forward, !0), u, {
      position: s.value.position,
    });
    o(c, a, !0), (r.value = c);
  }
  function l(c, u) {
    const a = re({}, s.value, t.state, { forward: c, scroll: Er() });
    o(a.current, a, !0);
    const f = re({}, Do(r.value, c, null), { position: a.position + 1 }, u);
    o(c, f, !1), (r.value = c);
  }
  return { location: r, state: s, push: l, replace: i };
}
function qd(e) {
  e = $d(e);
  const t = Kd(e),
    n = zd(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = re(
    { location: "", base: e, go: r, createHref: Fd.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Gd(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function xl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const gt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  El = cn("nf");
var Uo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Uo || (Uo = {}));
function sn(e, t) {
  return re(new Error(), { type: e, [El]: !0 }, t);
}
function _t(e, t) {
  return e instanceof Error && El in e && (t == null || !!(e.type & t));
}
const Bo = "[^/]+?",
  Wd = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Jd = /[.+*?^${}()[\]/\\]/g;
function Qd(e, t) {
  const n = re({}, Wd, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const a = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const p = u[f];
      let _ = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        f || (s += "/"), (s += p.value.replace(Jd, "\\$&")), (_ += 40);
      else if (p.type === 1) {
        const { value: b, repeatable: x, optional: P, regexp: I } = p;
        o.push({ name: b, repeatable: x, optional: P });
        const k = I || Bo;
        if (k !== Bo) {
          _ += 10;
          try {
            new RegExp(`(${k})`);
          } catch (K) {
            throw new Error(
              `Invalid custom RegExp for param "${b}" (${k}): ` + K.message
            );
          }
        }
        let $ = x ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
        f || ($ = P && u.length < 2 ? `(?:/${$})` : "/" + $),
          P && ($ += "?"),
          (s += $),
          (_ += 20),
          P && (_ += -8),
          x && (_ += -20),
          k === ".*" && (_ += -50);
      }
      a.push(_);
    }
    r.push(a);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(u) {
    const a = u.match(i),
      f = {};
    if (!a) return null;
    for (let p = 1; p < a.length; p++) {
      const _ = a[p] || "",
        b = o[p - 1];
      f[b.name] = _ && b.repeatable ? _.split("/") : _;
    }
    return f;
  }
  function c(u) {
    let a = "",
      f = !1;
    for (const p of e) {
      (!f || !a.endsWith("/")) && (a += "/"), (f = !1);
      for (const _ of p)
        if (_.type === 0) a += _.value;
        else if (_.type === 1) {
          const { value: b, repeatable: x, optional: P } = _,
            I = b in u ? u[b] : "";
          if (Array.isArray(I) && !x)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            );
          const k = Array.isArray(I) ? I.join("/") : I;
          if (!k)
            if (P)
              p.length < 2 &&
                (a.endsWith("/") ? (a = a.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${b}"`);
          a += k;
        }
    }
    return a;
  }
  return { re: i, score: r, keys: o, parse: l, stringify: c };
}
function Xd(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Yd(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = Xd(r[n], s[n]);
    if (o) return o;
    n++;
  }
  return s.length - r.length;
}
const Zd = { type: 0, value: "" },
  eh = /[a-zA-Z0-9_]/;
function th(e) {
  if (!e) return [[]];
  if (e === "/") return [[Zd]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(_) {
    throw new Error(`ERR (${n})/"${u}": ${_}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let l = 0,
    c,
    u = "",
    a = "";
  function f() {
    u &&
      (n === 0
        ? o.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: a,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function p() {
    u += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (u && f(), i()) : c === ":" ? (f(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : eh.test(c)
          ? p()
          : (f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? a[a.length - 1] == "\\"
            ? (a = a.slice(0, -1) + c)
            : (n = 3)
          : (a += c);
        break;
      case 3:
        f(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (a = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), s;
}
function nh(e, t, n) {
  const r = Qd(th(e.path), n),
    s = re(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function rh(e, t) {
  const n = [],
    r = new Map();
  t = Vo({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(a) {
    return r.get(a);
  }
  function o(a, f, p) {
    const _ = !p,
      b = oh(a);
    b.aliasOf = p && p.record;
    const x = Vo(t, a),
      P = [b];
    if ("alias" in a) {
      const $ = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const K of $)
        P.push(
          re({}, b, {
            components: p ? p.record.components : b.components,
            path: K,
            aliasOf: p ? p.record : b,
          })
        );
    }
    let I, k;
    for (const $ of P) {
      const { path: K } = $;
      if (f && K[0] !== "/") {
        const ae = f.record.path,
          U = ae[ae.length - 1] === "/" ? "" : "/";
        $.path = f.record.path + (K && U + K);
      }
      if (
        ((I = nh($, f, x)),
        p
          ? p.alias.push(I)
          : ((k = k || I),
            k !== I && k.alias.push(I),
            _ && a.name && !Ho(I) && i(a.name)),
        "children" in b)
      ) {
        const ae = b.children;
        for (let U = 0; U < ae.length; U++) o(ae[U], I, p && p.children[U]);
      }
      (p = p || I), c(I);
    }
    return k
      ? () => {
          i(k);
        }
      : yn;
  }
  function i(a) {
    if (xl(a)) {
      const f = r.get(a);
      f &&
        (r.delete(a),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i));
    } else {
      const f = n.indexOf(a);
      f > -1 &&
        (n.splice(f, 1),
        a.record.name && r.delete(a.record.name),
        a.children.forEach(i),
        a.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(a) {
    let f = 0;
    for (
      ;
      f < n.length &&
      Yd(a, n[f]) >= 0 &&
      (a.record.path !== n[f].record.path || !Sl(a, n[f]));

    )
      f++;
    n.splice(f, 0, a), a.record.name && !Ho(a) && r.set(a.record.name, a);
  }
  function u(a, f) {
    let p,
      _ = {},
      b,
      x;
    if ("name" in a && a.name) {
      if (((p = r.get(a.name)), !p)) throw sn(1, { location: a });
      (x = p.record.name),
        (_ = re(
          sh(
            f.params,
            p.keys.filter((k) => !k.optional).map((k) => k.name)
          ),
          a.params
        )),
        (b = p.stringify(_));
    } else if ("path" in a)
      (b = a.path),
        (p = n.find((k) => k.re.test(b))),
        p && ((_ = p.parse(b)), (x = p.record.name));
    else {
      if (((p = f.name ? r.get(f.name) : n.find((k) => k.re.test(f.path))), !p))
        throw sn(1, { location: a, currentLocation: f });
      (x = p.record.name),
        (_ = re({}, f.params, a.params)),
        (b = p.stringify(_));
    }
    const P = [];
    let I = p;
    for (; I; ) P.unshift(I.record), (I = I.parent);
    return { name: x, path: b, params: _, matched: P, meta: lh(P) };
  }
  return (
    e.forEach((a) => o(a)),
    {
      addRoute: o,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: s,
    }
  );
}
function sh(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function oh(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ih(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e ? e.components || {} : { default: e.component },
  };
}
function ih(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Ho(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function lh(e) {
  return e.reduce((t, n) => re(t, n.meta), {});
}
function Vo(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Sl(e, t) {
  return t.children.some((n) => n === e || Sl(e, n));
}
const Ol = /#/g,
  ch = /&/g,
  ah = /\//g,
  uh = /=/g,
  fh = /\?/g,
  Al = /\+/g,
  dh = /%5B/g,
  hh = /%5D/g,
  Cl = /%5E/g,
  ph = /%60/g,
  Rl = /%7B/g,
  mh = /%7C/g,
  Tl = /%7D/g,
  gh = /%20/g;
function ks(e) {
  return encodeURI("" + e)
    .replace(mh, "|")
    .replace(dh, "[")
    .replace(hh, "]");
}
function _h(e) {
  return ks(e).replace(Rl, "{").replace(Tl, "}").replace(Cl, "^");
}
function ls(e) {
  return ks(e)
    .replace(Al, "%2B")
    .replace(gh, "+")
    .replace(Ol, "%23")
    .replace(ch, "%26")
    .replace(ph, "`")
    .replace(Rl, "{")
    .replace(Tl, "}")
    .replace(Cl, "^");
}
function yh(e) {
  return ls(e).replace(uh, "%3D");
}
function bh(e) {
  return ks(e).replace(Ol, "%23").replace(fh, "%3F");
}
function vh(e) {
  return e == null ? "" : bh(e).replace(ah, "%2F");
}
function nr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function wh(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Al, " "),
      i = o.indexOf("="),
      l = nr(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : nr(o.slice(i + 1));
    if (l in t) {
      let u = t[l];
      Array.isArray(u) || (u = t[l] = [u]), u.push(c);
    } else t[l] = c;
  }
  return t;
}
function zo(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = yh(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(r) ? r.map((o) => o && ls(o)) : [r && ls(r)]).forEach(
      (o) => {
        o !== void 0 &&
          ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
      }
    );
  }
  return t;
}
function xh(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
function hn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function wt(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, l) => {
      const c = (f) => {
          f === !1
            ? l(sn(4, { from: n, to: t }))
            : f instanceof Error
            ? l(f)
            : Gd(f)
            ? l(sn(2, { from: t, to: f }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof f == "function" &&
                o.push(f),
              i());
        },
        u = e.call(r && r.instances[s], t, n, c);
      let a = Promise.resolve(u);
      e.length < 3 && (a = a.then(c)), a.catch((f) => l(f));
    });
}
function Fr(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (Eh(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(wt(u, n, r, o, i));
        } else {
          let c = l();
          s.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const a = Td(u) ? u.default : u;
              o.components[i] = a;
              const p = (a.__vccOpts || a)[t];
              return p && wt(p, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function Eh(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Ko(e) {
  const t = pe(Ms),
    n = pe(bl),
    r = Be(() => t.resolve(mn(e.to))),
    s = Be(() => {
      const { matched: c } = r.value,
        { length: u } = c,
        a = c[u - 1],
        f = n.matched;
      if (!a || !f.length) return -1;
      const p = f.findIndex(rn.bind(null, a));
      if (p > -1) return p;
      const _ = qo(c[u - 2]);
      return u > 1 && qo(a) === _ && f[f.length - 1].path !== _
        ? f.findIndex(rn.bind(null, c[u - 2]))
        : p;
    }),
    o = Be(() => s.value > -1 && Ch(n.params, r.value.params)),
    i = Be(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        vl(n.params, r.value.params)
    );
  function l(c = {}) {
    return Ah(c)
      ? t[mn(e.replace) ? "replace" : "push"](mn(e.to)).catch(yn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Be(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l,
  };
}
const Sh = Tn({
    name: "RouterLink",
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ko,
    setup(e, { slots: t }) {
      const n = Ve(Ko(e)),
        { options: r } = pe(Ms),
        s = Be(() => ({
          [Go(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Go(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : Qe(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Oh = Sh;
function Ah(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Ch(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (
      !Array.isArray(s) ||
      s.length !== r.length ||
      r.some((o, i) => o !== s[i])
    )
      return !1;
  }
  return !0;
}
function qo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Go = (e, t, n) => e ?? t ?? n,
  Rh = Tn({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const r = pe(os),
        s = Be(() => e.route || r.value),
        o = pe(ko, 0),
        i = Be(() => s.value.matched[o]);
      De(ko, o + 1), De(Rd, i), De(os, s);
      const l = he();
      return (
        ut(
          () => [l.value, i.value, e.name],
          ([c, u, a], [f, p, _]) => {
            u &&
              ((u.instances[a] = c),
              p &&
                p !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !rn(u, p) || !f) &&
                (u.enterCallbacks[a] || []).forEach((b) => b(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = s.value,
            u = i.value,
            a = u && u.components[e.name],
            f = e.name;
          if (!a) return Wo(n.default, { Component: a, route: c });
          const p = u.props[e.name],
            _ = p
              ? p === !0
                ? c.params
                : typeof p == "function"
                ? p(c)
                : p
              : null,
            x = Qe(
              a,
              re({}, _, t, {
                onVnodeUnmounted: (P) => {
                  P.component.isUnmounted && (u.instances[f] = null);
                },
                ref: l,
              })
            );
          return Wo(n.default, { Component: x, route: c }) || x;
        }
      );
    },
  });
function Wo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Th = Rh;
function Ph(e) {
  const t = rh(e.routes, e),
    n = e.parseQuery || wh,
    r = e.stringifyQuery || zo,
    s = e.history,
    o = hn(),
    i = hn(),
    l = hn(),
    c = Sc(gt);
  let u = gt;
  Jt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const a = $r.bind(null, (w) => "" + w),
    f = $r.bind(null, vh),
    p = $r.bind(null, nr);
  function _(w, N) {
    let T, M;
    return (
      xl(w) ? ((T = t.getRecordMatcher(w)), (M = N)) : (M = w), t.addRoute(M, T)
    );
  }
  function b(w) {
    const N = t.getRecordMatcher(w);
    N && t.removeRoute(N);
  }
  function x() {
    return t.getRoutes().map((w) => w.record);
  }
  function P(w) {
    return !!t.getRecordMatcher(w);
  }
  function I(w, N) {
    if (((N = re({}, N || c.value)), typeof w == "string")) {
      const B = jr(n, w, N.path),
        d = t.resolve({ path: B.path }, N),
        h = s.createHref(B.fullPath);
      return re(B, d, {
        params: p(d.params),
        hash: nr(B.hash),
        redirectedFrom: void 0,
        href: h,
      });
    }
    let T;
    if ("path" in w) T = re({}, w, { path: jr(n, w.path, N.path).path });
    else {
      const B = re({}, w.params);
      for (const d in B) B[d] == null && delete B[d];
      (T = re({}, w, { params: f(w.params) })), (N.params = f(N.params));
    }
    const M = t.resolve(T, N),
      Z = w.hash || "";
    M.params = a(p(M.params));
    const ee = Nd(r, re({}, w, { hash: _h(Z), path: M.path })),
      z = s.createHref(ee);
    return re(
      { fullPath: ee, hash: Z, query: r === zo ? xh(w.query) : w.query || {} },
      M,
      { redirectedFrom: void 0, href: z }
    );
  }
  function k(w) {
    return typeof w == "string" ? jr(n, w, c.value.path) : re({}, w);
  }
  function $(w, N) {
    if (u !== w) return sn(8, { from: N, to: w });
  }
  function K(w) {
    return de(w);
  }
  function ae(w) {
    return K(re(k(w), { replace: !0 }));
  }
  function U(w) {
    const N = w.matched[w.matched.length - 1];
    if (N && N.redirect) {
      const { redirect: T } = N;
      let M = typeof T == "function" ? T(w) : T;
      return (
        typeof M == "string" &&
          ((M = M.includes("?") || M.includes("#") ? (M = k(M)) : { path: M }),
          (M.params = {})),
        re({ query: w.query, hash: w.hash, params: w.params }, M)
      );
    }
  }
  function de(w, N) {
    const T = (u = I(w)),
      M = c.value,
      Z = w.state,
      ee = w.force,
      z = w.replace === !0,
      B = U(T);
    if (B) return de(re(k(B), { state: Z, force: ee, replace: z }), N || T);
    const d = T;
    d.redirectedFrom = N;
    let h;
    return (
      !ee &&
        Ld(r, M, T) &&
        ((h = sn(16, { to: d, from: M })), Ze(M, M, !0, !1)),
      (h ? Promise.resolve(h) : me(d, M))
        .catch((m) => (_t(m) ? (_t(m, 2) ? m : Te(m)) : Y(m, d, M)))
        .then((m) => {
          if (m) {
            if (_t(m, 2))
              return de(
                re(k(m.to), { state: Z, force: ee, replace: z }),
                N || d
              );
          } else m = je(d, M, !0, z, Z);
          return Ce(d, M, m), m;
        })
    );
  }
  function xe(w, N) {
    const T = $(w, N);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function me(w, N) {
    let T;
    const [M, Z, ee] = Ih(w, N);
    T = Fr(M.reverse(), "beforeRouteLeave", w, N);
    for (const B of M)
      B.leaveGuards.forEach((d) => {
        T.push(wt(d, w, N));
      });
    const z = xe.bind(null, w, N);
    return (
      T.push(z),
      Gt(T)
        .then(() => {
          T = [];
          for (const B of o.list()) T.push(wt(B, w, N));
          return T.push(z), Gt(T);
        })
        .then(() => {
          T = Fr(Z, "beforeRouteUpdate", w, N);
          for (const B of Z)
            B.updateGuards.forEach((d) => {
              T.push(wt(d, w, N));
            });
          return T.push(z), Gt(T);
        })
        .then(() => {
          T = [];
          for (const B of w.matched)
            if (B.beforeEnter && !N.matched.includes(B))
              if (Array.isArray(B.beforeEnter))
                for (const d of B.beforeEnter) T.push(wt(d, w, N));
              else T.push(wt(B.beforeEnter, w, N));
          return T.push(z), Gt(T);
        })
        .then(
          () => (
            w.matched.forEach((B) => (B.enterCallbacks = {})),
            (T = Fr(ee, "beforeRouteEnter", w, N)),
            T.push(z),
            Gt(T)
          )
        )
        .then(() => {
          T = [];
          for (const B of i.list()) T.push(wt(B, w, N));
          return T.push(z), Gt(T);
        })
        .catch((B) => (_t(B, 8) ? B : Promise.reject(B)))
    );
  }
  function Ce(w, N, T) {
    for (const M of l.list()) M(w, N, T);
  }
  function je(w, N, T, M, Z) {
    const ee = $(w, N);
    if (ee) return ee;
    const z = N === gt,
      B = Jt ? history.state : {};
    T &&
      (M || z
        ? s.replace(w.fullPath, re({ scroll: z && B && B.scroll }, Z))
        : s.push(w.fullPath, Z)),
      (c.value = w),
      Ze(w, N, T, z),
      Te();
  }
  let Ee;
  function Ke() {
    Ee = s.listen((w, N, T) => {
      const M = I(w),
        Z = U(M);
      if (Z) {
        de(re(Z, { replace: !0 }), M).catch(yn);
        return;
      }
      u = M;
      const ee = c.value;
      Jt && Bd(Fo(ee.fullPath, T.delta), Er()),
        me(M, ee)
          .catch((z) =>
            _t(z, 12)
              ? z
              : _t(z, 2)
              ? (de(z.to, M)
                  .then((B) => {
                    _t(B, 20) && !T.delta && T.type === Cn.pop && s.go(-1, !1);
                  })
                  .catch(yn),
                Promise.reject())
              : (T.delta && s.go(-T.delta, !1), Y(z, M, ee))
          )
          .then((z) => {
            (z = z || je(M, ee, !1)),
              z &&
                (T.delta
                  ? s.go(-T.delta, !1)
                  : T.type === Cn.pop && _t(z, 20) && s.go(-1, !1)),
              Ce(M, ee, z);
          })
          .catch(yn);
    });
  }
  let qe = hn(),
    Tt = hn(),
    ue;
  function Y(w, N, T) {
    Te(w);
    const M = Tt.list();
    return (
      M.length ? M.forEach((Z) => Z(w, N, T)) : console.error(w),
      Promise.reject(w)
    );
  }
  function Q() {
    return ue && c.value !== gt
      ? Promise.resolve()
      : new Promise((w, N) => {
          qe.add([w, N]);
        });
  }
  function Te(w) {
    return (
      ue ||
        ((ue = !w),
        Ke(),
        qe.list().forEach(([N, T]) => (w ? T(w) : N())),
        qe.reset()),
      w
    );
  }
  function Ze(w, N, T, M) {
    const { scrollBehavior: Z } = e;
    if (!Jt || !Z) return Promise.resolve();
    const ee =
      (!T && Hd(Fo(w.fullPath, 0))) ||
      ((M || !T) && history.state && history.state.scroll) ||
      null;
    return fr()
      .then(() => Z(w, N, ee))
      .then((z) => z && Ud(z))
      .catch((z) => Y(z, w, N));
  }
  const Pe = (w) => s.go(w);
  let fe;
  const Ie = new Set();
  return {
    currentRoute: c,
    addRoute: _,
    removeRoute: b,
    hasRoute: P,
    getRoutes: x,
    resolve: I,
    options: e,
    push: K,
    replace: ae,
    go: Pe,
    back: () => Pe(-1),
    forward: () => Pe(1),
    beforeEach: o.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: Tt.add,
    isReady: Q,
    install(w) {
      const N = this;
      w.component("RouterLink", Oh),
        w.component("RouterView", Th),
        (w.config.globalProperties.$router = N),
        Object.defineProperty(w.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => mn(c),
        }),
        Jt &&
          !fe &&
          c.value === gt &&
          ((fe = !0), K(s.location).catch((Z) => {}));
      const T = {};
      for (const Z in gt) T[Z] = Be(() => c.value[Z]);
      w.provide(Ms, N), w.provide(bl, Ve(T)), w.provide(os, c);
      const M = w.unmount;
      Ie.add(w),
        (w.unmount = function () {
          Ie.delete(w),
            Ie.size < 1 &&
              ((u = gt), Ee && Ee(), (c.value = gt), (fe = !1), (ue = !1)),
            M();
        });
    },
  };
}
function Gt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Ih(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => rn(u, l)) ? r.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((u) => rn(u, c)) || s.push(c));
  }
  return [n, r, s];
}
const Nh = { name: "ProductCard", props: { product: Object } },
  Lh = R(
    "button",
    {
      class:
        "absolute top-[55px] left-[10px] bg-white w-8 h-8 rounded-md grid place-items-center text-xl shadow-md transition-all hover:text-red-600",
    },
    [R("i", { class: "bx bxs-heart-circle" })],
    -1
  ),
  Mh = R("i", { class: "bx bx-cart-add" }, null, -1),
  kh = ["src"],
  $h = { class: "mt-3 flex justify-between text-sm" },
  jh = {
    class: "text-gray-900 group-hover:underline group-hover:underline-offset-4",
  },
  Fh = { class: "mt-1.5 max-w-[45ch] text-xs text-gray-500" },
  Dh = { class: "text-gray-900" };
function Uh(e, t, n, r, s, o) {
  const i = st("router-link");
  return (
    ie(),
    ve("li", null, [
      G(
        i,
        {
          to: "/elmanzel/products/" + n.product.id,
          class: "group block relative",
        },
        {
          default: oe(() => [
            Lh,
            G(
              i,
              {
                class:
                  "absolute top-[15px] left-[10px] bg-white w-8 h-8 rounded-md grid place-items-center text-xl shadow-md transition-all hover:text-red-600",
                to: "/elmanzel/products/" + n.product.id,
              },
              { default: oe(() => [Mh]), _: 1 },
              8,
              ["to"]
            ),
            R(
              "img",
              {
                src: `/elmanzel${n.product.image}`,
                alt: "",
                class:
                  "h-[250px] w-full object-cover sm:h-[250px] shadow-md rounded-md",
              },
              null,
              8,
              kh
            ),
            R("div", $h, [
              R("div", null, [
                R("h3", jh, it(n.product.name), 1),
                R("p", Fh, it(n.product.description), 1),
              ]),
              R("p", Dh, it(n.product.price) + "L.E", 1),
            ]),
          ]),
          _: 1,
        },
        8,
        ["to"]
      ),
    ])
  );
}
const Bh = Ln(Nh, [["render", Uh]]);
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const be = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: "center",
    wrapAround: !1,
    throttle: 16,
    pauseAutoplayOnHover: !1,
    mouseDrag: !0,
    touchDrag: !0,
    dir: "ltr",
    breakpoints: void 0,
    i18n: {
      ariaNextSlide: "Navigate to next slide",
      ariaPreviousSlide: "Navigate to previous slide",
      ariaNavigateToSlide: "Navigate to slide {slideNumber}",
      ariaGallery: "Gallery",
      itemXofY: "Item {currentSlide} of {slidesCount}",
      iconArrowUp: "Arrow pointing upwards",
      iconArrowDown: "Arrow pointing downwards",
      iconArrowRight: "Arrow pointing to the right",
      iconArrowLeft: "Arrow pointing to the left",
    },
  },
  Jo = {
    itemsToShow: { default: be.itemsToShow, type: Number },
    itemsToScroll: { default: be.itemsToScroll, type: Number },
    wrapAround: { default: be.wrapAround, type: Boolean },
    throttle: { default: be.throttle, type: Number },
    snapAlign: {
      default: be.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(
          e
        );
      },
    },
    transition: { default: be.transition, type: Number },
    breakpoints: { default: be.breakpoints, type: Object },
    autoplay: { default: be.autoplay, type: Number },
    pauseAutoplayOnHover: { default: be.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: be.mouseDrag, type: Boolean },
    touchDrag: { default: be.touchDrag, type: Boolean },
    dir: {
      default: be.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: be.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function Hh({ config: e, slidesCount: t }) {
  const { snapAlign: n, wrapAround: r, itemsToShow: s = 1 } = e;
  if (r) return Math.max(t - 1, 0);
  let o;
  switch (n) {
    case "start":
      o = t - s;
      break;
    case "end":
      o = t - 1;
      break;
    case "center":
    case "center-odd":
      o = t - Math.ceil((s - 0.5) / 2);
      break;
    case "center-even":
      o = t - Math.ceil(s / 2);
      break;
    default:
      o = 0;
      break;
  }
  return Math.max(o, 0);
}
function Vh({ config: e, slidesCount: t }) {
  const { wrapAround: n, snapAlign: r, itemsToShow: s = 1 } = e;
  let o = 0;
  if (n || s > t) return o;
  switch (r) {
    case "start":
      o = 0;
      break;
    case "end":
      o = s - 1;
      break;
    case "center":
    case "center-odd":
      o = Math.floor((s - 1) / 2);
      break;
    case "center-even":
      o = Math.floor((s - 2) / 2);
      break;
    default:
      o = 0;
      break;
  }
  return o;
}
function cs({ val: e, max: t, min: n }) {
  return t < n ? e : Math.min(Math.max(e, n), t);
}
function zh({ config: e, currentSlide: t, slidesCount: n }) {
  const { snapAlign: r, wrapAround: s, itemsToShow: o = 1 } = e;
  let i = t;
  switch (r) {
    case "center":
    case "center-odd":
      i -= (o - 1) / 2;
      break;
    case "center-even":
      i -= (o - 2) / 2;
      break;
    case "end":
      i -= o - 1;
      break;
  }
  return s ? i : cs({ val: i, max: n - o, min: 0 });
}
function Pl(e) {
  return e
    ? e.reduce((t, n) => {
        var r;
        return n.type === ge
          ? [...t, ...Pl(n.children)]
          : ((r = n.type) === null || r === void 0 ? void 0 : r.name) ===
            "CarouselSlide"
          ? [...t, n]
          : t;
      }, [])
    : [];
}
function rr({ val: e, max: t, min: n = 0 }) {
  return e > t
    ? rr({ val: e - (t + 1), max: t, min: n })
    : e < n
    ? rr({ val: e + (t + 1), max: t, min: n })
    : e;
}
function Kh(e, t) {
  let n;
  return t
    ? function (...r) {
        const s = this;
        n || (e.apply(s, r), (n = !0), setTimeout(() => (n = !1), t));
      }
    : e;
}
function qh(e, t) {
  let n;
  return function (...r) {
    n && clearTimeout(n),
      (n = setTimeout(() => {
        e(...r), (n = null);
      }, t));
  };
}
function Il(e = "", t = {}) {
  return Object.entries(t).reduce(
    (n, [r, s]) => n.replace(`{${r}}`, String(s)),
    e
  );
}
var Gh = Tn({
    name: "ARIA",
    setup() {
      const e = pe("config", Ve(Object.assign({}, be))),
        t = pe("currentSlide", he(0)),
        n = pe("slidesCount", he(0));
      return () =>
        Qe(
          "div",
          {
            class: ["carousel__liveregion", "carousel__sr-only"],
            "aria-live": "polite",
            "aria-atomic": "true",
          },
          Il(e.i18n.itemXofY, {
            currentSlide: t.value + 1,
            slidesCount: n.value,
          })
        );
    },
  }),
  Wh = Tn({
    name: "Carousel",
    props: Jo,
    setup(e, { slots: t, emit: n, expose: r }) {
      var s;
      const o = he(null),
        i = he([]),
        l = he(0),
        c = he(0),
        u = Ve(Object.assign({}, be));
      let a = Object.assign({}, be),
        f;
      const p = he((s = e.modelValue) !== null && s !== void 0 ? s : 0),
        _ = he(0),
        b = he(0),
        x = he(0),
        P = he(0);
      let I, k;
      De("config", u),
        De("slidesCount", c),
        De("currentSlide", p),
        De("maxSlide", x),
        De("minSlide", P),
        De("slideWidth", l);
      function $() {
        (f = Object.assign({}, e.breakpoints)),
          (a = Object.assign(Object.assign(Object.assign({}, a), e), {
            i18n: Object.assign(Object.assign({}, a.i18n), e.i18n),
            breakpoints: void 0,
          })),
          ae(a);
      }
      function K() {
        if (!f || !Object.keys(f).length) return;
        const h = Object.keys(f)
          .map((g) => Number(g))
          .sort((g, v) => +v - +g);
        let m = Object.assign({}, a);
        h.some((g) => {
          const v = window.matchMedia(`(min-width: ${g}px)`).matches;
          return v && (m = Object.assign(Object.assign({}, m), f[g])), v;
        }),
          ae(m);
      }
      function ae(h) {
        Object.entries(h).forEach(([m, g]) => (u[m] = g));
      }
      const U = qh(() => {
        K(), de();
      }, 16);
      function de() {
        if (!o.value) return;
        const h = o.value.getBoundingClientRect();
        l.value = h.width / u.itemsToShow;
      }
      function xe() {
        c.value <= 0 ||
          ((b.value = Math.ceil((c.value - 1) / 2)),
          (x.value = Hh({ config: u, slidesCount: c.value })),
          (P.value = Vh({ config: u, slidesCount: c.value })),
          u.wrapAround ||
            (p.value = cs({ val: p.value, max: x.value, min: P.value })));
      }
      ki(() => {
        fr(() => de()),
          setTimeout(() => de(), 1e3),
          K(),
          Ze(),
          window.addEventListener("resize", U, { passive: !0 }),
          n("init");
      }),
        Ss(() => {
          k && clearTimeout(k),
            I && clearInterval(I),
            window.removeEventListener("resize", U, { passive: !0 });
        });
      let me = !1;
      const Ce = { x: 0, y: 0 },
        je = { x: 0, y: 0 },
        Ee = Ve({ x: 0, y: 0 }),
        Ke = he(!1),
        qe = he(!1),
        Tt = () => {
          Ke.value = !0;
        },
        ue = () => {
          Ke.value = !1;
        };
      function Y(h) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(h.target.tagName) ||
          ((me = h.type === "touchstart"),
          me || h.preventDefault(),
          !((!me && h.button !== 0) || fe.value) &&
            ((Ce.x = me ? h.touches[0].clientX : h.clientX),
            (Ce.y = me ? h.touches[0].clientY : h.clientY),
            document.addEventListener(me ? "touchmove" : "mousemove", Q, !0),
            document.addEventListener(me ? "touchend" : "mouseup", Te, !0)));
      }
      const Q = Kh((h) => {
        (qe.value = !0),
          (je.x = me ? h.touches[0].clientX : h.clientX),
          (je.y = me ? h.touches[0].clientY : h.clientY);
        const m = je.x - Ce.x,
          g = je.y - Ce.y;
        (Ee.y = g), (Ee.x = m);
      }, u.throttle);
      function Te() {
        const h = u.dir === "rtl" ? -1 : 1,
          m = Math.sign(Ee.x) * 0.4,
          g = Math.round(Ee.x / l.value + m) * h;
        if (g && !me) {
          const v = (O) => {
            O.stopPropagation(), window.removeEventListener("click", v, !0);
          };
          window.addEventListener("click", v, !0);
        }
        Ie(p.value - g),
          (Ee.x = 0),
          (Ee.y = 0),
          (qe.value = !1),
          document.removeEventListener(me ? "touchmove" : "mousemove", Q, !0),
          document.removeEventListener(me ? "touchend" : "mouseup", Te, !0);
      }
      function Ze() {
        !u.autoplay ||
          u.autoplay <= 0 ||
          (I = setInterval(() => {
            (u.pauseAutoplayOnHover && Ke.value) || Pt();
          }, u.autoplay));
      }
      function Pe() {
        I && (clearInterval(I), (I = null)), Ze();
      }
      const fe = he(!1);
      function Ie(h) {
        const m = u.wrapAround ? h : cs({ val: h, max: x.value, min: P.value });
        p.value === m ||
          fe.value ||
          (n("slide-start", {
            slidingToIndex: h,
            currentSlideIndex: p.value,
            prevSlideIndex: _.value,
            slidesCount: c.value,
          }),
          (fe.value = !0),
          (_.value = p.value),
          (p.value = m),
          (k = setTimeout(() => {
            if (u.wrapAround) {
              const g = rr({ val: m, max: x.value, min: 0 });
              g !== p.value &&
                ((p.value = g),
                n("loop", { currentSlideIndex: p.value, slidingToIndex: h }));
            }
            n("update:modelValue", p.value),
              n("slide-end", {
                currentSlideIndex: p.value,
                prevSlideIndex: _.value,
                slidesCount: c.value,
              }),
              (fe.value = !1),
              Pe();
          }, u.transition)));
      }
      function Pt() {
        Ie(p.value + u.itemsToScroll);
      }
      function w() {
        Ie(p.value - u.itemsToScroll);
      }
      const N = { slideTo: Ie, next: Pt, prev: w };
      De("nav", N), De("isSliding", fe);
      const T = Be(() =>
        zh({ config: u, currentSlide: p.value, slidesCount: c.value })
      );
      De("slidesToScroll", T);
      const M = Be(() => {
        const h = u.dir === "rtl" ? -1 : 1,
          m = T.value * l.value * h;
        return {
          transform: `translateX(${Ee.x - m}px)`,
          transition: `${fe.value ? u.transition : 0}ms`,
          margin: u.wrapAround ? `0 -${c.value * l.value}px` : "",
          width: "100%",
        };
      });
      function Z() {
        $(), K(), xe(), de(), Pe();
      }
      Object.keys(Jo).forEach((h) => {
        ["modelValue"].includes(h) || ut(() => e[h], Z);
      }),
        ut(
          () => e.modelValue,
          (h) => {
            h !== p.value && Ie(Number(h));
          }
        ),
        ut(c, xe),
        n("before-init"),
        $();
      const ee = {
        config: u,
        slidesCount: c,
        slideWidth: l,
        next: Pt,
        prev: w,
        slideTo: Ie,
        currentSlide: p,
        maxSlide: x,
        minSlide: P,
        middleSlide: b,
      };
      r({
        updateBreakpointsConfigs: K,
        updateSlidesData: xe,
        updateSlideWidth: de,
        initDefaultConfigs: $,
        restartCarousel: Z,
        slideTo: Ie,
        next: Pt,
        prev: w,
        nav: N,
        data: ee,
      });
      const z = t.default || t.slides,
        B = t.addons,
        d = Ve(ee);
      return () => {
        const h = Pl(z == null ? void 0 : z(d)),
          m = (B == null ? void 0 : B(d)) || [];
        h.forEach((C, S) => (C.props.index = S));
        let g = h;
        if (u.wrapAround) {
          const C = h.map((A, E) =>
              Rt(A, {
                index: -h.length + E,
                isClone: !0,
                key: `clone-before-${E}`,
              })
            ),
            S = h.map((A, E) =>
              Rt(A, {
                index: h.length + E,
                isClone: !0,
                key: `clone-after-${E}`,
              })
            );
          g = [...C, ...h, ...S];
        }
        (i.value = h), (c.value = Math.max(h.length, 1));
        const v = Qe(
            "ol",
            {
              class: "carousel__track",
              style: M.value,
              onMousedownCapture: u.mouseDrag ? Y : null,
              onTouchstartPassiveCapture: u.touchDrag ? Y : null,
            },
            g
          ),
          O = Qe("div", { class: "carousel__viewport" }, v);
        return Qe(
          "section",
          {
            ref: o,
            class: {
              carousel: !0,
              "is-sliding": fe.value,
              "is-dragging": qe.value,
              "is-hover": Ke.value,
              "carousel--rtl": u.dir === "rtl",
            },
            dir: u.dir,
            "aria-label": u.i18n.ariaGallery,
            tabindex: "0",
            onMouseenter: Tt,
            onMouseleave: ue,
          },
          [O, m, Qe(Gh)]
        );
      };
    },
  }),
  Qo;
(function (e) {
  (e.arrowUp = "arrowUp"),
    (e.arrowDown = "arrowDown"),
    (e.arrowRight = "arrowRight"),
    (e.arrowLeft = "arrowLeft");
})(Qo || (Qo = {}));
const Jh = () => {
  const e = pe("config", Ve(Object.assign({}, be))),
    t = pe("maxSlide", he(1)),
    n = pe("minSlide", he(1)),
    r = pe("currentSlide", he(1)),
    s = pe("nav", {}),
    o = (l) => rr({ val: r.value, max: t.value, min: 0 }) === l,
    i = [];
  for (let l = n.value; l < t.value + 1; l++) {
    const c = Qe("button", {
        type: "button",
        class: {
          "carousel__pagination-button": !0,
          "carousel__pagination-button--active": o(l),
        },
        "aria-label": Il(e.i18n.ariaNavigateToSlide, { slideNumber: l + 1 }),
        onClick: () => s.slideTo(l),
      }),
      u = Qe("li", { class: "carousel__pagination-item", key: l }, c);
    i.push(u);
  }
  return Qe("ol", { class: "carousel__pagination" }, i);
};
var Qh = Tn({
  name: "CarouselSlide",
  props: {
    index: { type: Number, default: 1 },
    isClone: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t }) {
    const n = pe("config", Ve(Object.assign({}, be))),
      r = pe("currentSlide", he(0)),
      s = pe("slidesToScroll", he(0)),
      o = pe("isSliding", he(!1)),
      i = () => e.index === r.value,
      l = () => e.index === r.value - 1,
      c = () => e.index === r.value + 1,
      u = () => {
        const a = Math.floor(s.value),
          f = Math.ceil(s.value + n.itemsToShow - 1);
        return e.index >= a && e.index <= f;
      };
    return () => {
      var a;
      return Qe(
        "li",
        {
          style: { width: `${100 / n.itemsToShow}%` },
          class: {
            carousel__slide: !0,
            "carousel__slide--clone": e.isClone,
            "carousel__slide--visible": u(),
            "carousel__slide--active": i(),
            "carousel__slide--prev": l(),
            "carousel__slide--next": c(),
            "carousel__slide--sliding": o.value,
          },
          "aria-hidden": !u(),
        },
        (a = t.default) === null || a === void 0 ? void 0 : a.call(t)
      );
    };
  },
});
const Xh = {
    name: "HomeView",
    components: { ProductCard: Bh, Carousel: Wh, Slide: Qh, Pagination: Jh },
    data() {
      return { slides: [], Categories: [], offers: [], width: 2 };
    },
    mounted() {
      this.getLatestProducts(),
        (document.title = "المنزل"),
        document.addEventListener("DOMContentLoaded", this.handleResize),
        window.addEventListener("resize", this.handleResize);
    },
    methods: {
      handelSubCategoriesSize(e, t) {
        return console.log(e, t), !((e - 1) & 1);
      },
      handleResize() {
        const e = window.innerWidth;
        if (e <= 768) {
          this.width = 1;
          return;
        }
        if (e >= 992) {
          this.width = 2;
          return;
        }
        if (e >= 1400) {
          this.width = 3;
          return;
        }
      },
      async getLatestProducts() {
        this.$store.state.loading = !0;
        const e = await ne.get("/api/home");
        console.log(e),
          (this.slides = e.data.Carousels),
          (this.offers = e.data.Offers);
        let t = [],
          n = e.data.SubCategories;
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          let o = t.find((i) => s.categoryName == i.name);
          o
            ? o.subcategories.push(s)
            : t.push({
                id: s.category,
                name: s.categoryName,
                name_ar: s.categoryNameAr,
                subcategories: [s],
              });
        }
        (this.Categories = t), (this.$store.state.loading = !1);
      },
      showMore() {
        this.Products = this.latestProducts.slice(0, this.Products.length + 4);
      },
    },
  },
  Yh = ["src"],
  Zh = { class: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" },
  ep = { class: "grid grid-cols-2 gap-3 px-3 md:px-6" },
  tp = {
    class:
      "absolute h-full bg-black/30 grid place-items-center text-white w-full top-50% left-50% text-center",
  },
  np = ["src"],
  rp = { id: "category-collection" },
  sp = { class: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" },
  op = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" },
  ip = { class: "categories w-full shadow-lg p-2 rounded-lg" },
  lp = { class: "w-full grid place-items-center grid-cols-2 gap-3" },
  cp = ["src", "alt"],
  ap = { class: "text-[12px]" },
  up = R(
    "span",
    { class: "absolute -start-full transition-all group-hover:start-4" },
    [
      R(
        "svg",
        {
          class: "size-5 rtl:rotate-180",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          R("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M17 8l4 4m0 0l-4 4m4-4H3",
          }),
        ]
      ),
    ],
    -1
  ),
  fp = R(
    "span",
    { class: "text-sm font-medium transition-all group-hover:ms-4" },
    " Show More ",
    -1
  );
function dp(e, t, n, r, s, o) {
  const i = st("router-link"),
    l = st("slide"),
    c = st("pagination"),
    u = st("carousel");
  return (
    ie(),
    ve(
      ge,
      null,
      [
        G(
          u,
          {
            "items-to-show": s.width,
            autoplay: 5e3,
            pauseAutoplayOnHover: !0,
            touchDrag: !0,
            wrapAround: !0,
            class: Et([
              "mt-6 mb-6",
              { "w-[80%]  ml-auto mr-auto": s.width > 1439 },
            ]),
          },
          {
            addons: oe(() => [G(c)]),
            default: oe(() => [
              (ie(!0),
              ve(
                ge,
                null,
                $t(
                  s.slides,
                  (a, f) => (
                    ie(),
                    Dt(
                      l,
                      { key: f },
                      {
                        default: oe(() => [
                          G(
                            i,
                            {
                              to: "/elmanzel/products/" + a.product,
                              class:
                                "w-[90%] h-56 max-w-[900px] flex items-center justify-center rounded-lg",
                            },
                            {
                              default: oe(() => [
                                R(
                                  "img",
                                  {
                                    src: "/elmanzel" + a.img,
                                    class: "h-full rounded-lg w-full",
                                  },
                                  null,
                                  8,
                                  Yh
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to"]
                          ),
                        ]),
                        _: 2,
                      },
                      1024
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ["items-to-show", "class"]
        ),
        R("div", Zh, [
          R("div", ep, [
            (ie(!0),
            ve(
              ge,
              null,
              $t(
                s.offers,
                (a) => (
                  ie(),
                  Dt(
                    i,
                    {
                      key: a.id,
                      to:
                        a.subcategory === 0
                          ? "/elmanzel/all-products"
                          : `/elmanzel/offers/${a.id}`,
                      class:
                        "w-full h-48 flex items-center justify-center rounded-lg relative",
                    },
                    {
                      default: oe(() => [
                        R("p", tp, it(a.name), 1),
                        R(
                          "img",
                          {
                            src: "/elmanzel" + a.img,
                            class: "w-full h-full rounded-lg",
                          },
                          null,
                          8,
                          np
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["to"]
                  )
                )
              ),
              128
            )),
          ]),
        ]),
        R("div", rp, [
          R("div", sp, [
            R("div", op, [
              (ie(!0),
              ve(
                ge,
                null,
                $t(
                  s.Categories,
                  (a) => (
                    ie(),
                    ve("div", ip, [
                      R("h1", null, it(a.name), 1),
                      R("div", lp, [
                        (ie(!0),
                        ve(
                          ge,
                          null,
                          $t(
                            a.subcategories,
                            (f, p) => (
                              ie(),
                              Dt(
                                i,
                                {
                                  to: `/elmanzel/subcategory/${f.id}`,
                                  key: f.id,
                                  class: Et(
                                    o.handelSubCategoriesSize(
                                      a.subcategories.length,
                                      f.name
                                    )
                                      ? " col-span-2"
                                      : ""
                                  ),
                                },
                                {
                                  default: oe(() => [
                                    R(
                                      "img",
                                      {
                                        src: "/elmanzel" + f.img,
                                        alt: f.name,
                                        class: "w-full rounded-md",
                                      },
                                      null,
                                      8,
                                      cp
                                    ),
                                    R("p", ap, it(f.name), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["to", "class"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      G(
                        i,
                        {
                          class:
                            "group relative inline-flex items-center overflow-hidden rounded bg-red-600 px-8 py-3 mt-4 text-white focus:outline-none focus:ring active:bg-red-500",
                          to: `/elmanzel/category/${a.id}`,
                        },
                        { default: oe(() => [up, fp]), _: 2 },
                        1032,
                        ["to"]
                      ),
                    ])
                  )
                ),
                256
              )),
            ]),
          ]),
        ]),
      ],
      64
    )
  );
}
const hp = Ln(Xh, [["render", dp]]);
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */ var pp = "store";
function an(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function mp(e) {
  return e !== null && typeof e == "object";
}
function gp(e) {
  return e && typeof e.then == "function";
}
function _p(e, t) {
  return function () {
    return e(t);
  };
}
function Nl(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function Ll(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  Sr(e, n, [], e._modules.root, !0), $s(e, n, t);
}
function $s(e, t, n) {
  var r = e._state;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var s = e._wrappedGetters,
    o = {};
  an(s, function (i, l) {
    (o[l] = _p(i, e)),
      Object.defineProperty(e.getters, l, {
        get: function () {
          return o[l]();
        },
        enumerable: !0,
      });
  }),
    (e._state = Ve({ data: t })),
    e.strict && xp(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      });
}
function Sr(e, t, n, r, s) {
  var o = !n.length,
    i = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[i], (e._modulesNamespaceMap[i] = r)),
    !o && !s)
  ) {
    var l = js(t, n.slice(0, -1)),
      c = n[n.length - 1];
    e._withCommit(function () {
      l[c] = r.state;
    });
  }
  var u = (r.context = yp(e, i, n));
  r.forEachMutation(function (a, f) {
    var p = i + f;
    bp(e, p, a, u);
  }),
    r.forEachAction(function (a, f) {
      var p = a.root ? f : i + f,
        _ = a.handler || a;
      vp(e, p, _, u);
    }),
    r.forEachGetter(function (a, f) {
      var p = i + f;
      wp(e, p, a, u);
    }),
    r.forEachChild(function (a, f) {
      Sr(e, t, n.concat(f), a, s);
    });
}
function yp(e, t, n) {
  var r = t === "",
    s = {
      dispatch: r
        ? e.dispatch
        : function (o, i, l) {
            var c = sr(o, i, l),
              u = c.payload,
              a = c.options,
              f = c.type;
            return (!a || !a.root) && (f = t + f), e.dispatch(f, u);
          },
      commit: r
        ? e.commit
        : function (o, i, l) {
            var c = sr(o, i, l),
              u = c.payload,
              a = c.options,
              f = c.type;
            (!a || !a.root) && (f = t + f), e.commit(f, u, a);
          },
    };
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return Ml(e, t);
            },
      },
      state: {
        get: function () {
          return js(e.state, n);
        },
      },
    }),
    s
  );
}
function Ml(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, r) === t) {
        var o = s.slice(r);
        Object.defineProperty(n, o, {
          get: function () {
            return e.getters[s];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function bp(e, t, n, r) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function (i) {
    n.call(e, r.state, i);
  });
}
function vp(e, t, n, r) {
  var s = e._actions[t] || (e._actions[t] = []);
  s.push(function (i) {
    var l = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      i
    );
    return (
      gp(l) || (l = Promise.resolve(l)),
      e._devtoolHook
        ? l.catch(function (c) {
            throw (e._devtoolHook.emit("vuex:error", c), c);
          })
        : l
    );
  });
}
function wp(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (o) {
      return n(r.state, r.getters, o.state, o.getters);
    });
}
function xp(e) {
  ut(
    function () {
      return e._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" }
  );
}
function js(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function sr(e, t, n) {
  return (
    mp(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  );
}
var Ep = "vuex bindings",
  Xo = "vuex:mutations",
  Dr = "vuex:actions",
  Wt = "vuex",
  Sp = 0;
function Op(e, t) {
  Cd(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Ep],
    },
    function (n) {
      n.addTimelineLayer({ id: Xo, label: "Vuex Mutations", color: Yo }),
        n.addTimelineLayer({ id: Dr, label: "Vuex Actions", color: Yo }),
        n.addInspector({
          id: Wt,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === Wt)
            if (r.filter) {
              var s = [];
              Fl(s, t._modules.root, r.filter, ""), (r.rootNodes = s);
            } else r.rootNodes = [jl(t._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Wt) {
            var s = r.nodeId;
            Ml(t, s),
              (r.state = Rp(
                Pp(t._modules, s),
                s === "root" ? t.getters : t._makeLocalGettersCache,
                s
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Wt) {
            var s = r.nodeId,
              o = r.path;
            s !== "root" && (o = s.split("/").filter(Boolean).concat(o)),
              t._withCommit(function () {
                r.set(t._state.data, o, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, s) {
          var o = {};
          r.payload && (o.payload = r.payload),
            (o.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(Wt),
            n.sendInspectorState(Wt),
            n.addTimelineEvent({
              layerId: Xo,
              event: { time: Date.now(), title: r.type, data: o },
            });
        }),
        t.subscribeAction({
          before: function (r, s) {
            var o = {};
            r.payload && (o.payload = r.payload),
              (r._id = Sp++),
              (r._time = Date.now()),
              (o.state = s),
              n.addTimelineEvent({
                layerId: Dr,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: "start",
                  data: o,
                },
              });
          },
          after: function (r, s) {
            var o = {},
              i = Date.now() - r._time;
            (o.duration = {
              _custom: {
                type: "duration",
                display: i + "ms",
                tooltip: "Action duration",
                value: i,
              },
            }),
              r.payload && (o.payload = r.payload),
              (o.state = s),
              n.addTimelineEvent({
                layerId: Dr,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: "end",
                  data: o,
                },
              });
          },
        });
    }
  );
}
var Yo = 8702998,
  Ap = 6710886,
  Cp = 16777215,
  kl = { label: "namespaced", textColor: Cp, backgroundColor: Ap };
function $l(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function jl(e, t) {
  return {
    id: t || "root",
    label: $l(t),
    tags: e.namespaced ? [kl] : [],
    children: Object.keys(e._children).map(function (n) {
      return jl(e._children[n], t + n + "/");
    }),
  };
}
function Fl(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: t.namespaced ? [kl] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      Fl(e, t._children[s], n, r + s + "/");
    });
}
function Rp(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (i) {
        return { key: i, editable: !0, value: e.state[i] };
      }),
    };
  if (r.length) {
    var o = Tp(t);
    s.getters = Object.keys(o).map(function (i) {
      return {
        key: i.endsWith("/") ? $l(i) : i,
        editable: !1,
        value: as(function () {
          return o[i];
        }),
      };
    });
  }
  return s;
}
function Tp(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var s = t,
          o = r.pop();
        r.forEach(function (i) {
          s[i] ||
            (s[i] = {
              _custom: {
                value: {},
                display: i,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (s = s[i]._custom.value);
        }),
          (s[o] = as(function () {
            return e[n];
          }));
      } else
        t[n] = as(function () {
          return e[n];
        });
    }),
    t
  );
}
function Pp(e, t) {
  var n = t.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, s, o) {
      var i = r[s];
      if (!i)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return o === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function as(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Ye = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  Dl = { namespaced: { configurable: !0 } };
Dl.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Ye.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
Ye.prototype.removeChild = function (t) {
  delete this._children[t];
};
Ye.prototype.getChild = function (t) {
  return this._children[t];
};
Ye.prototype.hasChild = function (t) {
  return t in this._children;
};
Ye.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
Ye.prototype.forEachChild = function (t) {
  an(this._children, t);
};
Ye.prototype.forEachGetter = function (t) {
  this._rawModule.getters && an(this._rawModule.getters, t);
};
Ye.prototype.forEachAction = function (t) {
  this._rawModule.actions && an(this._rawModule.actions, t);
};
Ye.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && an(this._rawModule.mutations, t);
};
Object.defineProperties(Ye.prototype, Dl);
var zt = function (t) {
  this.register([], t, !1);
};
zt.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
zt.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + "/" : "");
  }, "");
};
zt.prototype.update = function (t) {
  Ul([], this.root, t);
};
zt.prototype.register = function (t, n, r) {
  var s = this;
  r === void 0 && (r = !0);
  var o = new Ye(n, r);
  if (t.length === 0) this.root = o;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], o);
  }
  n.modules &&
    an(n.modules, function (l, c) {
      s.register(t.concat(c), l, r);
    });
};
zt.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    s = n.getChild(r);
  s && s.runtime && n.removeChild(r);
};
zt.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Ul(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      Ul(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function Ip(e) {
  return new $e(e);
}
var $e = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var s = t.strict;
    s === void 0 && (s = !1);
    var o = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new zt(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._devtools = o);
    var i = this,
      l = this,
      c = l.dispatch,
      u = l.commit;
    (this.dispatch = function (p, _) {
      return c.call(i, p, _);
    }),
      (this.commit = function (p, _, b) {
        return u.call(i, p, _, b);
      }),
      (this.strict = s);
    var a = this._modules.root.state;
    Sr(this, a, [], this._modules.root),
      $s(this, a),
      r.forEach(function (f) {
        return f(n);
      });
  },
  Fs = { state: { configurable: !0 } };
$e.prototype.install = function (t, n) {
  t.provide(n || pp, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && Op(t, this);
};
Fs.state.get = function () {
  return this._state.data;
};
Fs.state.set = function (e) {};
$e.prototype.commit = function (t, n, r) {
  var s = this,
    o = sr(t, n, r),
    i = o.type,
    l = o.payload,
    c = { type: i, payload: l },
    u = this._mutations[i];
  u &&
    (this._withCommit(function () {
      u.forEach(function (f) {
        f(l);
      });
    }),
    this._subscribers.slice().forEach(function (a) {
      return a(c, s.state);
    }));
};
$e.prototype.dispatch = function (t, n) {
  var r = this,
    s = sr(t, n),
    o = s.type,
    i = s.payload,
    l = { type: o, payload: i },
    c = this._actions[o];
  if (c) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (a) {
          return a.before;
        })
        .forEach(function (a) {
          return a.before(l, r.state);
        });
    } catch {}
    var u =
      c.length > 1
        ? Promise.all(
            c.map(function (a) {
              return a(i);
            })
          )
        : c[0](i);
    return new Promise(function (a, f) {
      u.then(
        function (p) {
          try {
            r._actionSubscribers
              .filter(function (_) {
                return _.after;
              })
              .forEach(function (_) {
                return _.after(l, r.state);
              });
          } catch {}
          a(p);
        },
        function (p) {
          try {
            r._actionSubscribers
              .filter(function (_) {
                return _.error;
              })
              .forEach(function (_) {
                return _.error(l, r.state, p);
              });
          } catch {}
          f(p);
        }
      );
    });
  }
};
$e.prototype.subscribe = function (t, n) {
  return Nl(t, this._subscribers, n);
};
$e.prototype.subscribeAction = function (t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Nl(r, this._actionSubscribers, n);
};
$e.prototype.watch = function (t, n, r) {
  var s = this;
  return ut(
    function () {
      return t(s.state, s.getters);
    },
    n,
    Object.assign({}, r)
  );
};
$e.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
$e.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == "string" && (t = [t]),
    this._modules.register(t, n),
    Sr(this, this.state, t, this._modules.get(t), r.preserveState),
    $s(this, this.state);
};
$e.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == "string" && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = js(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    Ll(this);
};
$e.prototype.hasModule = function (t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
$e.prototype.hotUpdate = function (t) {
  this._modules.update(t), Ll(this, !0);
};
$e.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties($e.prototype, Fs);
const Np = Ip({
    state: { cart: { items: [] }, isAuthenticated: !1, token: "", loading: !1 },
    getters: {},
    mutations: {
      reloadCart(e, t) {
        (e.cart.items = t),
          localStorage.getItem("cart")
            ? (e.cart = JSON.parse(localStorage.getItem("cart")))
            : localStorage.setItem("cart", JSON.stringify(e.cart));
      },
      initializeStore(e) {
        localStorage.getItem("cart")
          ? (e.cart = JSON.parse(localStorage.getItem("cart")))
          : localStorage.setItem("cart", JSON.stringify(e.cart)),
          localStorage.getItem("token")
            ? ((e.token = localStorage.getItem("token")),
              (e.isAuthenticated = !0))
            : ((e.token = ""), (e.isAuthenticated = !1));
      },
      addToCart(e, t) {
        const n = e.cart.items.find(
          (r) => r.product.id === t.product.id && t.color === r.color
        );
        if (!n) {
          e.cart.items.push(t),
            localStorage.setItem("cart", JSON.stringify(e.cart));
          return;
        }
        if (n.quantity < 20) {
          const r = n.quantity + t.quantity;
          r > 20 && n.quantity > 20 ? n.quantity++ : (n.quantity = r);
        }
        localStorage.setItem("cart", JSON.stringify(e.cart));
      },
      setToken(e, t) {
        (e.token = t), (e.isAuthenticated = !0);
      },
      removeToken(e) {
        (e.token = ""), (e.isAuthenticated = !1);
      },
      clearCart(e) {
        (e.cart = { items: [] }),
          localStorage.setItem("cart", JSON.stringify(e.cart));
      },
    },
    actions: {
      logout({ commit: e }) {
        e("removeToken"), e("clearCart");
      },
    },
    modules: {},
  }),
  Lp = [
    { path: "/elmanzel/", name: "home", component: hp },
    {
      path: "/elmanzel/about-us",
      name: "AboutUs",
      component: () =>
        Ue(() => import("./AboutUs-G90yH02x.js"), __vite__mapDeps([0, 1])),
    },
    {
      path: "/elmanzel/all-products",
      name: "AllProduct",
      component: () =>
        Ue(() => import("./AllProducts-krFY40qt.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/contact/S",
      name: "contactsuccess",
      component: () =>
        Ue(
          () => import("./contactsuccess-dPRhdUml.js"),
          __vite__mapDeps([2, 3])
        ),
    },
    {
      path: "/elmanzel/products/:id",
      name: "Product",
      component: () =>
        Ue(() => import("./Product-wCif-ahU.js"), __vite__mapDeps([4, 5])),
    },
    {
      path: "/elmanzel/category/:id",
      name: "Category",
      component: () =>
        Ue(() => import("./Category-G99kLHAc.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/subcategory/:id",
      name: "SubCategory",
      component: () =>
        Ue(() => import("./Subcategory-zSGML5ps.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/search",
      name: "Search",
      component: () =>
        Ue(() => import("./Search-_tpXfPH4.js"), __vite__mapDeps([6, 7])),
    },
    {
      path: "/elmanzel/cart",
      name: "Cart",
      component: () =>
        Ue(() => import("./Cart-vxHzk1cn.js"), __vite__mapDeps([8, 9])),
    },
    {
      path: "/elmanzel/faq",
      name: "FAQ",
      component: () =>
        Ue(() => import("./FAQ-4Py21aBt.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/contact",
      name: "Contact",
      component: () =>
        Ue(() => import("./Contact-WdcWeNu-.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/check-out",
      name: "Checkout",
      component: () =>
        Ue(() => import("./Checkout-cHyv8TSf.js"), __vite__mapDeps([])),
    },
    {
      path: "/elmanzel/offers/:subcategory",
      name: "offers",
      component: () =>
        Ue(() => import("./Offers-spZpfUhZ.js"), __vite__mapDeps([])),
    },
  ],
  Mp = Ph({ history: qd(), routes: Lp });
ne.defaults.baseURL = "http://localhost:3000/elmanzel";
ou(_d).use(Np).use(Mp, ne).mount("#app");
export {
  ge as F,
  Bh as P,
  Ln as _,
  R as a,
  G as b,
  ve as c,
  xa as d,
  Se as e,
  ne as f,
  kp as g,
  $t as h,
  Dt as i,
  Mt as j,
  jp as k,
  Dp as l,
  $p as m,
  Et as n,
  ie as o,
  st as r,
  it as t,
  Fp as v,
  oe as w,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/AboutUs-G90yH02x.js",
      "assets/AboutUs-0qcJbRjr.css",
      "assets/contactsuccess-dPRhdUml.js",
      "assets/contactsuccess-qTFNs3so.css",
      "assets/Product-wCif-ahU.js",
      "assets/Product-gEwojJrp.css",
      "assets/Search-_tpXfPH4.js",
      "assets/Search-gbCx04QV.css",
      "assets/Cart-vxHzk1cn.js",
      "assets/Cart-kS0fkYHs.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
